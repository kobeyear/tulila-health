-- Create assessments table for storing patient evaluation data
CREATE TABLE IF NOT EXISTS assessments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Step 1: Demographics
  age_range VARCHAR(10) NOT NULL,
  
  -- Step 2: Menstrual Status  
  menstrual_status VARCHAR(50) NOT NULL,
  
  -- Step 3: Symptoms (JSON array)
  symptoms JSONB NOT NULL DEFAULT '[]',
  
  -- Step 4: Severity
  symptom_severity VARCHAR(20) NOT NULL,
  
  -- Step 5: Previous Treatments (JSON array)
  previous_treatments JSONB NOT NULL DEFAULT '[]',
  
  -- Step 6: Medical History/Contraindications (JSON array)
  medical_history JSONB NOT NULL DEFAULT '[]',
  
  -- Step 7: Contact Information
  first_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  
  -- Scoring Results
  hrt_score INTEGER NOT NULL DEFAULT 0,
  hrt_candidacy VARCHAR(20) NOT NULL DEFAULT 'pending', -- excellent, good, marginal, contraindicated
  summary TEXT, -- General summary, NOT medical recommendations
  
  -- Metadata
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ip_address INET,
  user_agent TEXT
);

-- Enable Row Level Security
ALTER TABLE assessments ENABLE ROW LEVEL SECURITY;

-- Create policies for assessments
DROP POLICY IF EXISTS "Anyone can insert assessments" ON assessments;
DROP POLICY IF EXISTS "Anyone can select assessments" ON assessments;

CREATE POLICY "Anyone can insert assessments" ON assessments
FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can select assessments" ON assessments  
FOR SELECT USING (true);

-- Create indexes for common queries
CREATE INDEX IF NOT EXISTS idx_assessments_created_at ON assessments(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_assessments_email ON assessments(email);
CREATE INDEX IF NOT EXISTS idx_assessments_hrt_candidacy ON assessments(hrt_candidacy);
CREATE INDEX IF NOT EXISTS idx_assessments_score ON assessments(hrt_score DESC);

-- Insert sample assessment data
INSERT INTO assessments (
  age_range, menstrual_status, symptoms, symptom_severity, 
  previous_treatments, medical_history, first_name, email, phone,
  hrt_score, hrt_candidacy, summary
) 
SELECT 
  '45-49', 
  'irregular',
  '["hot-flashes", "sleep-issues", "brain-fog", "mood-swings"]'::jsonb,
  'moderate',
  '["supplements", "lifestyle"]'::jsonb,
  '["none"]'::jsonb,
  'Sarah',
  'sarah@example.com',
  '555-0123',
  85,
  'excellent',
  'Based on your responses, you may be a strong candidate for hormone therapy. Your symptoms and timing suggest you could benefit from professional medical evaluation.'
WHERE NOT EXISTS (SELECT 1 FROM assessments WHERE email = 'sarah@example.com');

INSERT INTO assessments (
  age_range, menstrual_status, symptoms, symptom_severity,
  previous_treatments, medical_history, first_name, email, phone, 
  hrt_score, hrt_candidacy, summary
)
SELECT
  '52-54',
  '12-months', 
  '["hot-flashes", "joint-pain", "low-energy", "low-libido"]'::jsonb,
  'severe',
  '["nothing"]'::jsonb,
  '["none"]'::jsonb,
  'Jennifer',
  'jennifer@example.com', 
  '555-0456',
  92,
  'excellent',
  'Based on your responses, you may be a strong candidate for hormone therapy. Your symptoms and timing suggest you could benefit from professional medical evaluation.'
WHERE NOT EXISTS (SELECT 1 FROM assessments WHERE email = 'jennifer@example.com');