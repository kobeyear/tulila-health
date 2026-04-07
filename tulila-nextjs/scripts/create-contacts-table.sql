-- Create contacts table for testing database functionality
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (for testing)
CREATE POLICY "Anyone can insert contacts" ON contacts
FOR INSERT WITH CHECK (true);

-- Create policy to allow anyone to select (for testing)
CREATE POLICY "Anyone can select contacts" ON contacts
FOR SELECT USING (true);

-- Insert test data
INSERT INTO contacts (name, email, message) VALUES 
('Test User', 'test@example.com', 'Testing Supabase connection'),
('Jane Doe', 'jane@example.com', 'Interested in Tulila services');