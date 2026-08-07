create table if not exists nexus_tasks (
  task_id text primary key,
  tenant_id text not null,
  owner_id text not null,
  conversation_id text not null,
  correlation_id text not null,
  goal text not null,
  application text not null,
  risk_tier text not null,
  state text not null,
  version integer not null check (version > 0),
  task_document jsonb not null,
  created_at timestamptz not null,
  updated_at timestamptz not null
);
create index if not exists nexus_tasks_owner_idx on nexus_tasks (tenant_id, owner_id, updated_at desc);
create index if not exists nexus_tasks_state_idx on nexus_tasks (tenant_id, state, updated_at);

create table if not exists nexus_consents (
  consent_id text primary key,
  tenant_id text not null,
  subject_id text not null,
  task_id text references nexus_tasks(task_id),
  scope text not null,
  purpose text not null,
  recipient text,
  policy_version text not null,
  granted_at timestamptz not null,
  expires_at timestamptz,
  revoked_at timestamptz,
  receipt jsonb not null
);
create index if not exists nexus_consents_subject_idx on nexus_consents (tenant_id, subject_id, scope, granted_at desc);

create table if not exists nexus_memory_items (
  memory_id text primary key,
  tenant_id text not null,
  principal_id text not null,
  task_id text references nexus_tasks(task_id),
  memory_class text not null check (memory_class in ('working','episodic','semantic','profile','domain')),
  purpose text not null,
  content jsonb not null,
  provenance jsonb not null,
  confidence numeric(4,3),
  expires_at timestamptz,
  deleted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists nexus_memory_scope_idx on nexus_memory_items (tenant_id, principal_id, memory_class, purpose, updated_at desc) where deleted_at is null;

create table if not exists nexus_audit_events (
  event_id text primary key,
  occurred_at timestamptz not null,
  tenant_id text not null,
  actor_id text not null,
  correlation_id text not null,
  task_id text references nexus_tasks(task_id),
  event_type text not null,
  outcome text not null,
  release_sha text,
  metadata jsonb not null default '{}'::jsonb
);
create index if not exists nexus_audit_correlation_idx on nexus_audit_events (tenant_id, correlation_id, occurred_at);

create table if not exists nexus_worker_jobs (
  job_id text primary key,
  tenant_id text not null,
  task_id text references nexus_tasks(task_id),
  job_type text not null,
  idempotency_key text not null,
  payload jsonb not null,
  state text not null default 'queued' check (state in ('queued','leased','completed','failed','dead_letter')),
  available_at timestamptz not null default now(),
  leased_by text,
  lease_expires_at timestamptz,
  attempts integer not null default 0,
  max_attempts integer not null default 5,
  last_error jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (tenant_id, idempotency_key)
);
create index if not exists nexus_worker_claim_idx on nexus_worker_jobs (state, available_at, created_at) where state = 'queued';

create table if not exists nexus_outbox (
  message_id text primary key,
  tenant_id text not null,
  aggregate_type text not null,
  aggregate_id text not null,
  message_type text not null,
  payload jsonb not null,
  created_at timestamptz not null default now(),
  published_at timestamptz
);
create index if not exists nexus_outbox_pending_idx on nexus_outbox (created_at) where published_at is null;

create table if not exists nexus_inbox (
  source text not null,
  message_id text not null,
  received_at timestamptz not null default now(),
  result jsonb,
  primary key (source, message_id)
);
