-- Create leads table for Tripleshot Consulting
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  message TEXT,
  source VARCHAR(50) NOT NULL DEFAULT 'contact_form', -- 'contact_form' or 'chatbot'
  conversation JSONB, -- For chatbot conversations
  status VARCHAR(50) NOT NULL DEFAULT 'new', -- 'new', 'contacted', 'converted', 'closed'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_created_at ON leads(created_at);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_source ON leads(source);

-- Enable Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow your server to read/write
-- Note: In production, you'd want more restrictive policies
CREATE POLICY "Service role can do everything" ON leads
  FOR ALL USING (true);

-- Insert sample data (optional - for testing)
INSERT INTO leads (email, name, company, message, source) VALUES 
('sample@test.com', 'Sample User', 'Test Company', 'This is a test lead from the setup', 'contact_form'); 