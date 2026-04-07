"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function SetupInstructions() {
  const [copied, setCopied] = useState(false)

  const sqlCode = `CREATE TABLE contacts (
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
('Jane Smith', 'jane@example.com', 'Interested in menopause care'),
('Sarah Johnson', 'sarah@example.com', 'Question about hormone therapy');`

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(sqlCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-4xl mx-auto">
      <h3 className="text-lg font-bold text-blue-900 mb-3">
        🛠️ One-Time Database Setup Required
      </h3>
      
      <div className="space-y-4 text-blue-800">
        <p>To complete the database integration, create the contacts table in Supabase:</p>
        
        <ol className="space-y-2 list-decimal list-inside">
          <li>Open your <a href="https://supabase.com/dashboard" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Supabase Dashboard</a></li>
          <li>Go to <strong>SQL Editor</strong> (left sidebar)</li>
          <li>Copy the SQL below and paste it into the editor</li>
          <li>Click <strong>&ldquo;Run&rdquo;</strong></li>
          <li>Refresh this page to test the database!</li>
        </ol>

        <div className="relative">
          <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
            <code>{sqlCode}</code>
          </pre>
          <Button
            onClick={copyToClipboard}
            size="sm"
            className="absolute top-2 right-2"
            variant={copied ? "default" : "outline"}
          >
            {copied ? "✅ Copied!" : "📋 Copy SQL"}
          </Button>
        </div>

        <div className="bg-blue-100 border border-blue-300 rounded p-3">
          <p className="text-sm">
            <strong>💡 Pro tip:</strong> This is a one-time setup. Once created, your database will persist 
            and you can add tables for patient assessments, consultations, etc.
          </p>
        </div>
      </div>
    </div>
  )
}