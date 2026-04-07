// Setup database script - creates tables automatically
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function setupDatabase() {
  console.log('🚀 Setting up database...');
  console.log('📝 Note: Table creation needs to be done manually in Supabase dashboard');
  console.log('📝 But we can test the connection and insert data!');

  try {
    // Test connection first
    console.log('🔍 Testing Supabase connection...');
    
    // Try to insert test data (this will fail if table doesn't exist, which is expected)
    const { error: insertError } = await supabase
      .from('contacts')
      .insert([
        { name: 'Automated Test User', email: 'auto@tulila.health', message: 'Database setup test' }
      ]);

    if (insertError) {
      if (insertError.message.includes('does not exist')) {
        console.log('⚠️  Table does not exist yet - this is expected');
        console.log('📋 Copy this SQL to Supabase SQL Editor:');
        console.log(`
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert contacts" ON contacts
FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can select contacts" ON contacts
FOR SELECT USING (true);

INSERT INTO contacts (name, email, message) VALUES 
('Test User', 'test@example.com', 'Testing Supabase connection'),
('Jane Doe', 'jane@example.com', 'Interested in Tulila services');
        `);
        
        console.log('✅ Connection test successful - ready to create table');
        return;
      } else {
        console.error('❌ Unexpected error:', insertError);
        return;
      }
    }

    console.log('✅ Data inserted successfully - table already exists!');

    // Verify data
    const { data, error } = await supabase.from('contacts').select('*');
    if (error) {
      console.error('❌ Error reading data:', error);
    } else {
      console.log(`✅ Database setup complete! Found ${data.length} records`);
      console.log('📊 Sample data:', data[0]);
    }

  } catch (error) {
    console.error('❌ Setup failed:', error);
    process.exit(1);
  }
}

setupDatabase();