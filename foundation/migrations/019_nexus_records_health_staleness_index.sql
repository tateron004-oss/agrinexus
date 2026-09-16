-- situational-awareness.sweep (nexus/workers/handlers.js) runs
-- RecordRepository.listStaleHealthSubjects() on a recurring cadence: it
-- groups every active, health-classified record by (tenant_id, subject_id)
-- to find subjects with no recent health activity. Without a supporting
-- index that query is a full sequential scan of nexus_records on every
-- sweep. This is purely additive (CREATE INDEX IF NOT EXISTS on an existing
-- table/columns) -- no data change, safe to apply to a populated table.
create index if not exists nexus_records_health_staleness_idx
  on nexus_records (tenant_id, subject_id, updated_at)
  where classification = 'health' and state = 'active' and deleted_at is null;
