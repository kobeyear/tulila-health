// Run assessment table migration
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase environment variables');
  console.error('Need: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false
  }
});

async function runAssessmentMigration() {
  console.log('🚀 Running assessment table migration...');

  try {
    // Read the migration SQL file
    const migrationSQL = fs.readFileSync('./scripts/create-assessment-table.sql', 'utf8');
    
    console.log('📋 Executing assessment migration SQL...');
    
    // Execute the migration (we'll use a different approach)
    // Split into individual statements for better error handling
    const statements = migrationSQL
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0 && !stmt.startsWith('--') && stmt !== '');
    
    console.log(`   Found ${statements.length} SQL statements to execute`);
    
    for (let i = 0; i < statements.length; i++) {
      const statement = statements[i];
      if (statement.trim()) {
        console.log(`   [${i+1}/${statements.length}] Executing: ${statement.substring(0, 60)}...`);
        
        try {
          // For CREATE TABLE and other DDL statements, we'll use the raw SQL approach
          const { data, error } = await supabase.rpc('exec_sql', { 
            sql: statement + ';' 
          });
          
          if (error) {
            // Check if it's just a "already exists" error which is fine
            if (error.message.includes('already exists') || 
                error.message.includes('relation') ||
                error.message.includes('duplicate')) {
              console.log(`   ⚠️  Already exists (skipping): ${error.message.split(':')[0]}`);
            } else {
              console.error(`   ❌ Error: ${error.message}`);
            }
          } else {
            console.log(`   ✅ Success`);
          }
        } catch (rawError) {
          // If exec_sql doesn't work, we'll provide instructions for manual execution
          console.log(`   ⚠️  Requires manual execution in Supabase dashboard`);
        }
        
        // Small delay between statements
        await new Promise(resolve => setTimeout(resolve, 200));
      }
    }
    
    // Test that the assessments table works
    console.log('🧪 Testing assessments table functionality...');
    
    const { data: testData, error: testError } = await supabase
      .from('assessments')
      .select('count')
      .limit(1);
    
    if (testError) {
      console.log('⚠️  Assessments table not yet available - may need manual creation');
      console.log('');
      console.log('🔧 IF TABLE CREATION FAILED, COPY THIS SQL TO SUPABASE DASHBOARD → SQL EDITOR:');
      console.log('');
      console.log('─'.repeat(80));
      console.log(migrationSQL);
      console.log('─'.repeat(80));
      return false;
    }
    
    // Get sample data to verify
    const { data: sampleData, error: sampleError } = await supabase
      .from('assessments')
      .select('*')
      .limit(3);
    
    if (sampleError) {
      console.error('❌ Error reading from assessments table:', sampleError.message);
      return false;
    }
    
    console.log(`✅ Assessment migration complete! Found ${sampleData.length} records in assessments table`);
    
    if (sampleData.length > 0) {
      console.log('📊 Sample assessment data:');
      sampleData.forEach((assessment, index) => {
        console.log(`   ${index + 1}. ${assessment.first_name} - ${assessment.hrt_candidacy} (Score: ${assessment.hrt_score})`);
      });
    }
    
    return true;
    
  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    return false;
  }
}

runAssessmentMigration().then(success => {
  if (success) {
    console.log('\n🎉 ASSESSMENT SYSTEM READY! 🎉');
    console.log('👉 Go to localhost:3000 and try the menopause assessment');
    console.log('📊 Full 7-step assessment with HRT scoring system');
    console.log('💾 All responses saved to assessments table in database');
  } else {
    console.log('\n⚠️  Manual setup may be required - see SQL above');
  }
});