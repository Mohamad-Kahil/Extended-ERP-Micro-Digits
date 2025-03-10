-- Create entities table first
CREATE TABLE IF NOT EXISTS entities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  entity_type VARCHAR(50) NOT NULL CHECK (entity_type IN ('Parent', 'Subsidiary')),
  parent_entity_id UUID REFERENCES entities(id),
  description TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create user entity access table
CREATE TABLE IF NOT EXISTS user_entity_access (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id),
  entity_id UUID NOT NULL REFERENCES entities(id),
  can_read BOOLEAN DEFAULT TRUE,
  can_write BOOLEAN DEFAULT FALSE,
  can_delete BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, entity_id)
);

-- Enable row level security
ALTER TABLE entities ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_entity_access ENABLE ROW LEVEL SECURITY;

-- Create policies for entities
DROP POLICY IF EXISTS "Users can view entities they have access to" ON entities;
CREATE POLICY "Users can view entities they have access to"
  ON entities FOR SELECT
  USING (id IN (
    SELECT entity_id FROM user_entity_access WHERE user_id = auth.uid()
  ));

-- Insert some default entities
INSERT INTO entities (id, name, entity_type, description) VALUES 
  ('00000000-0000-0000-0000-000000000001', 'Parent Company', 'Parent', 'Main company entity'),
  ('00000000-0000-0000-0000-000000000002', 'Subsidiary 1', 'Subsidiary', 'First subsidiary'),
  ('00000000-0000-0000-0000-000000000003', 'Subsidiary 2', 'Subsidiary', 'Second subsidiary')
ON CONFLICT (id) DO NOTHING;
