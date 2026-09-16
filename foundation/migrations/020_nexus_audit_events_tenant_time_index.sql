-- AuditRepository.list() (the new audit review surface -- everything Kyro
-- did on its own, for a human to see) filters by tenant_id and orders by
-- occurred_at desc. The existing index on nexus_audit_events is
-- (tenant_id, correlation_id, occurred_at), which doesn't help a plain
-- tenant-wide listing. Purely additive -- no data change, safe on a
-- populated table.
create index if not exists nexus_audit_events_tenant_time_idx
  on nexus_audit_events (tenant_id, occurred_at desc);
