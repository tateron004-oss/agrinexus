-- Found live (delivery-pipeline audit): nexus_notifications had no lease/
-- expiry mechanism analogous to nexus_worker_jobs' lease_expires_at. A
-- worker crash (OOM kill, deploy restart, unhandled exception) landing
-- between claim() moving a row to state='delivering' and the matching
-- delivered()/failed() call -- a window that spans a real network call to
-- the push service -- permanently stranded that notification: nothing ever
-- re-queried 'delivering' rows, so it was silently lost forever, not
-- retried, not marked failed, no trace anywhere. This is purely additive
-- (a nullable column + a supporting index) -- no data change, safe to apply
-- to a populated table.
alter table nexus_notifications add column if not exists lease_expires_at timestamptz;
create index if not exists nexus_notifications_stale_delivering_idx
  on nexus_notifications (lease_expires_at)
  where state = 'delivering';
