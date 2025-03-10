-- Add entity_id to all accounting tables
ALTER TABLE chart_of_accounts ADD COLUMN IF NOT EXISTS entity_id UUID REFERENCES intercompany_entities(id);
ALTER TABLE journal_entries ADD COLUMN IF NOT EXISTS entity_id UUID REFERENCES intercompany_entities(id);
ALTER TABLE journal_entry_lines ADD COLUMN IF NOT EXISTS entity_id UUID REFERENCES intercompany_entities(id);
ALTER TABLE companies ADD COLUMN IF NOT EXISTS entity_id UUID REFERENCES intercompany_entities(id);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_chart_of_accounts_entity_id ON chart_of_accounts(entity_id);
CREATE INDEX IF NOT EXISTS idx_journal_entries_entity_id ON journal_entries(entity_id);
CREATE INDEX IF NOT EXISTS idx_journal_entry_lines_entity_id ON journal_entry_lines(entity_id);
CREATE INDEX IF NOT EXISTS idx_companies_entity_id ON companies(entity_id);

-- Enable realtime for these tables
alter publication supabase_realtime add table chart_of_accounts;
alter publication supabase_realtime add table journal_entries;
alter publication supabase_realtime add table journal_entry_lines;
alter publication supabase_realtime add table companies;