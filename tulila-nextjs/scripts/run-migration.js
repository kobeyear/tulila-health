// Run database migration using existing credentials
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false
  }
});

async function runMigration() {
  console.log('🚀 Running database migration...');

  try {
    // Read the migration SQL file
    const migrationSQL = fs.readFileSync('./supabase/migrations/20240407_create_contacts.sql', 'utf8');
    
    console.log('📋 Executing migration SQL...');
    
    // Split the SQL into individual statements and execute them
    const statements = migrationSQL
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0 && !stmt.startsWith('--'));
    
    for (const statement of statements) {
      if (statement.trim()) {
        console.log(`   Executing: ${statement.substring(0, 50)}...`);
        
        const { error } = await supabase.rpc('exec_sql', { sql: statement });
        
        if (error && !error.message.includes('already exists')) {
          console.error(`   ❌ Error: ${error.message}`);
        } else {
          console.log(`   ✅ Success`);
        }
        
        // Small delay between statements
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }
    
    // Test that the table works
    console.log('🧪 Testing table functionality...');
    const { data, error } = await supabase.from('contacts').select('*').limit(5);
    
    if (error) {
      console.error('❌ Table test failed:', error.message);
      return false;
    }
    
    console.log(`✅ Migration complete! Found ${data.length} records in contacts table`);
    
    if (data.length > 0) {
      console.log('📊 Sample data:', {
        name: data[0].name,
        email: data[0].email,
        created_at: data[0].created_at
      });
    }
    
    return true;
    
  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    return false;
  }
}

runMigration().then(success => {
  if (success) {
    console.log('\n🎉 SUCCESS! Your database is ready!');
    console.log('👉 Refresh localhost:3000 to see the working contact form');
  } else {
    console.log('\n❌ Migration failed - check errors above');
    process.exit(1);
  }
});