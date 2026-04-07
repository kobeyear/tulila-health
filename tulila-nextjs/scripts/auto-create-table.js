// Automatically create the contacts table in Supabase
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function createContactsTable() {
  console.log('🚀 Creating contacts table automatically...');

  try {
    // Use Supabase management operations to create table
    // This creates the table directly via SQL using a PostgreSQL function
    
    console.log('📋 Executing SQL to create contacts table...');
    
    // Try direct SQL execution using Supabase's SQL editor equivalent
    const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${supabaseServiceKey}`,
        'apikey': supabaseServiceKey
      },
      body: JSON.stringify({
        sql: `
          -- Create contacts table
          CREATE TABLE IF NOT EXISTS contacts (
            id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(255) NOT NULL,
            message TEXT,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
          );

          -- Enable RLS
          ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

          -- Create policies
          DROP POLICY IF EXISTS "Anyone can insert contacts" ON contacts;
          DROP POLICY IF EXISTS "Anyone can select contacts" ON contacts;

          CREATE POLICY "Anyone can insert contacts" ON contacts
          FOR INSERT WITH CHECK (true);

          CREATE POLICY "Anyone can select contacts" ON contacts
          FOR SELECT USING (true);
        `
      })
    });

    if (!response.ok) {
      // If direct SQL doesn't work, fall back to creating via regular client
      console.log('⚠️  Direct SQL failed, trying alternative approach...');
      
      // Test if table exists by trying to insert
      const { error: testError } = await supabase.from('contacts').select('count').limit(1);
      
      if (testError && testError.code === 'PGRST205') {
        console.log('❌ Table does not exist and cannot be created automatically');
        console.log('📋 Please create it manually in Supabase SQL Editor:');
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

-- Add some test data
INSERT INTO contacts (name, email, message) VALUES 
('Test User', 'test@tulila.health', 'Database connection test'),
('Jane Smith', 'jane@example.com', 'Interested in menopause care');
        `);
        return false;
      } else {
        console.log('✅ Table already exists!');
      }
    } else {
      console.log('✅ SQL executed successfully');
    }

    // Add test data
    console.log('📝 Adding test data...');
    const { error: insertError } = await supabase
      .from('contacts')
      .upsert([
        { name: 'Test User', email: 'test@tulila.health', message: 'Database connection test' },
        { name: 'Jane Smith', email: 'jane@example.com', message: 'Interested in menopause care' },
        { name: 'Sarah Johnson', email: 'sarah@example.com', message: 'Question about hormone therapy' }
      ], { onConflict: 'email' });

    if (insertError) {
      console.log('⚠️  Test data insert failed:', insertError.message);
    } else {
      console.log('✅ Test data added successfully');
    }

    // Verify setup
    const { data, error } = await supabase.from('contacts').select('*').limit(5);
    if (error) {
      console.error('❌ Error reading data:', error);
      return false;
    } else {
      console.log(`🎉 SUCCESS! Table created with ${data.length} records`);
      console.log('📊 Sample data:', data[0]);
      return true;
    }

  } catch (error) {
    console.error('❌ Failed to create table:', error);
    console.log('📋 Manual creation required - see SQL above');
    return false;
  }
}

createContactsTable().then(success => {
  if (success) {
    console.log('\n🎊 Database setup complete! Your app is ready to use.');
  } else {
    console.log('\n⚠️  Manual setup required - check the SQL above.');
  }
});