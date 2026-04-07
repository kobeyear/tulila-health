-- Create contacts table for testing database functionality
CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create policies
DROP POLICY IF EXISTS "Anyone can insert contacts" ON contacts;
DROP POLICY IF EXISTS "Anyone can select contacts" ON contacts;

CREATE POLICY "Anyone can insert contacts" ON contacts
FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can select contacts" ON contacts
FOR SELECT USING (true);

-- Insert test data (only if table is empty)
INSERT INTO contacts (name, email, message) 
SELECT 'Test User', 'test@tulila.health', 'Database connection test'
WHERE NOT EXISTS (SELECT 1 FROM contacts WHERE email = 'test@tulila.health');

INSERT INTO contacts (name, email, message) 
SELECT 'Jane Smith', 'jane@example.com', 'Interested in menopause care'
WHERE NOT EXISTS (SELECT 1 FROM contacts WHERE email = 'jane@example.com');

INSERT INTO contacts (name, email, message) 
SELECT 'Sarah Johnson', 'sarah@example.com', 'Question about hormone therapy'
WHERE NOT EXISTS (SELECT 1 FROM contacts WHERE email = 'sarah@example.com');