-- Create intercompany entities table
CREATE TABLE IF NOT EXISTS intercompany_entities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  entity_type VARCHAR(50) NOT NULL,
  parent_entity_id UUID REFERENCES intercompany_entities(id),
  currency VARCHAR(3) NOT NULL DEFAULT 'USD',
  country VARCHAR(100),
  ownership_percentage DECIMAL(5, 2),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create intercompany transactions table
CREATE TABLE IF NOT EXISTS intercompany_transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  transaction_ref VARCHAR(100) NOT NULL,
  transaction_date DATE NOT NULL,
  from_entity_id UUID REFERENCES intercompany_entities(id),
  to_entity_id UUID REFERENCES intercompany_entities(id),
  amount DECIMAL(15, 2) NOT NULL,
  currency VARCHAR(3) NOT NULL DEFAULT 'USD',
  description TEXT,
  status VARCHAR(20) NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable row level security
ALTER TABLE intercompany_entities ENABLE ROW LEVEL SECURITY;
ALTER TABLE intercompany_transactions ENABLE ROW LEVEL SECURITY;

-- Insert default intercompany entities
INSERT INTO intercompany_entities (id, name, entity_type, currency, country) VALUES
  ('00000000-0000-0000-0000-000000000001', 'Parent Company', 'Parent', 'USD', 'United States'),
  ('00000000-0000-0000-0000-000000000002', 'Subsidiary 1', 'Subsidiary', 'USD', 'United States'),
  ('00000000-0000-0000-0000-000000000003', 'Subsidiary 2', 'Subsidiary', 'EUR', 'Germany')
ON CONFLICT (id) DO NOTHING;

-- Update parent entity references
UPDATE intercompany_entities 
  SET parent_entity_id = '00000000-0000-0000-0000-000000000001'
  WHERE id IN ('00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000003')
  AND parent_entity_id IS NULL;
