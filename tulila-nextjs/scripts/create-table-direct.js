// Create table using direct Supabase operations
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function createTable() {
  console.log('🚀 Setting up contacts table...');

  try {
    // Test if table exists by trying to insert test data
    console.log('🧪 Testing if table exists...');
    
    const { data: testData, error: testError } = await supabase
      .from('contacts')
      .select('count')
      .limit(1);

    if (!testError) {
      console.log('✅ Table already exists and working!');
      
      // Just add test data if needed
      const { data: existingData } = await supabase
        .from('contacts')
        .select('*')
        .limit(1);
        
      if (!existingData || existingData.length === 0) {
        console.log('📝 Adding test data...');
        const { error: insertError } = await supabase
          .from('contacts')
          .insert([
            { name: 'Test User', email: 'test@tulila.health', message: 'Database connection test' },
            { name: 'Jane Smith', email: 'jane@example.com', message: 'Interested in menopause care' },
            { name: 'Sarah Johnson', email: 'sarah@example.com', message: 'Question about hormone therapy' }
          ]);
          
        if (insertError) {
          console.log('⚠️  Test data insertion failed:', insertError.message);
        } else {
          console.log('✅ Test data added successfully!');
        }
      }
      
      // Show final status
      const { data: finalData } = await supabase.from('contacts').select('*');
      console.log(`🎉 SUCCESS! Table ready with ${finalData.length} records`);
      return true;
    }

    if (testError.code === 'PGRST205' || testError.message.includes('does not exist')) {
      console.log('📋 Table does not exist - needs to be created manually');
      console.log('');
      console.log('🔧 COPY THIS SQL TO SUPABASE DASHBOARD → SQL EDITOR:');
      console.log('');
      console.log('─'.repeat(60));
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
('Test User', 'test@tulila.health', 'Database connection test'),
('Jane Smith', 'jane@example.com', 'Interested in menopause care'),
('Sarah Johnson', 'sarah@example.com', 'Question about hormone therapy');
      `);
      console.log('─'.repeat(60));
      console.log('');
      console.log('👉 After running the SQL, run this script again to verify!');
      return false;
    }

    console.error('❌ Unexpected error:', testError.message);
    return false;

  } catch (error) {
    console.error('❌ Setup failed:', error.message);
    return false;
  }
}

createTable().then(success => {
  if (success) {
    console.log('\n🎊 DATABASE IS READY! 🎊');
    console.log('👉 Go to localhost:3000 and refresh the page');
    console.log('📝 The contact form should now work perfectly!');
  } else {
    console.log('\n⚠️  Manual setup required - see SQL above');
  }
});