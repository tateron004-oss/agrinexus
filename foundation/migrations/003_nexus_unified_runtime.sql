-- Canonical Nexus durability schema. The foundation directory owns only database
-- bootstrap/migration mechanics; all runtime ownership lives under nexus/.
create extension if not exists vector;

create table if not exists nexus_conversations (
  conversation_id text primary key,
  tenant_id uuid not null references tenants(id) on delete cascade,
  owner_id uuid references users(id) on delete set null,
  title text,
  state text not null default 'active' check (state in ('active','archived','deleted')),
  summary text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists nexus_messages (
  message_id text primary key,
  tenant_id uuid not null references tenants(id) on delete cascade,
  conversation_id text not null references nexus_conversations(conversation_id) on delete cascade,
  actor_id uuid references users(id) on delete set null,
  role text not null check (role in ('system','user','assistant','tool')),
  content jsonb not null,
  provenance jsonb not null default '{}',
  created_at timestamptz not null default now()
);

create table if not exists nexus_tasks (
  task_id text primary key,
  tenant_id uuid not null references tenants(id) on delete cascade,
  owner_id uuid references users(id) on delete set null,
  conversation_id text references nexus_conversations(conversation_id) on delete set null,
  correlation_id text not null,
  goal text not null,
  application text not null default 'general',
  risk_tier text not null check (risk_tier in ('low','medium','high','regulated')),
  state text not null check (state in ('draft','clarifying','planned','awaiting_consent','awaiting_confirmation','queued','running','verifying','completed','cancelled','blocked','failed','expired')),
  priority smallint not null default 3 check (priority between 1 and 5),
  version integer not null check (version > 0),
  task_document jsonb not null,
  outcome jsonb,
  outcome_verified_at timestamptz,
  due_at timestamptz,
  recurrence jsonb,
  created_at timestamptz not null,
  updated_at timestamptz not null
);

create table if not exists nexus_tool_definitions (
  tool_id text primary key,
  version integer not null default 1,
  description text not null,
  domain text not null,
  input_schema jsonb not null default '{}',
  output_schema jsonb not null default '{}',
  implementation text not null,
  availability text not null default 'unavailable' check (availability in ('available','degraded','unavailable')),
  required_permission text,
  required_role text,
  risk_tier text not null default 'low' check (risk_tier in ('low','medium','high','regulated')),
  confirmation_required boolean not null default false,
  consent_scope text,
  timeout_ms integer not null default 30000 check (timeout_ms between 100 and 900000),
  max_attempts smallint not null default 3 check (max_attempts between 1 and 20),
  retry_policy jsonb not null default '{"strategy":"exponential","baseDelayMs":1000}',
  verification_method text not null default 'result_schema',
  data_classification text not null default 'internal',
  cost_limit_cents integer,
  feature_flag text,
  metadata jsonb not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists nexus_task_steps (
  step_id text primary key,
  tenant_id uuid not null references tenants(id) on delete cascade,
  task_id text not null references nexus_tasks(task_id) on delete cascade,
  sequence integer not null,
  title text not null,
  tool_id text references nexus_tool_definitions(tool_id),
  depends_on text[] not null default '{}',
  state text not null default 'pending' check (state in ('pending','blocked','awaiting_confirmation','queued','running','verifying','completed','failed','cancelled','skipped')),
  input jsonb not null default '{}',
  output jsonb,
  error jsonb,
  confirmation_state text not null default 'not_required' check (confirmation_state in ('not_required','required','approved','rejected')),
  idempotency_key text not null,
  attempt_count integer not null default 0,
  started_at timestamptz,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (task_id, sequence),
  unique (tenant_id, idempotency_key)
);

create table if not exists nexus_consents (
  consent_id text primary key,
  tenant_id uuid not null references tenants(id) on delete cascade,
  subject_id uuid not null references users(id) on delete cascade,
  task_id text references nexus_tasks(task_id) on delete set null,
  scope text not null,
  purpose text not null,
  recipient text,
  state text not null default 'granted' check (state in ('requested','granted','revoked','expired')),
  policy_version text not null,
  granted_at timestamptz,
  expires_at timestamptz,
  revoked_at timestamptz,
  receipt jsonb not null default '{}',
  created_at timestamptz not null default now()
);

create table if not exists nexus_tool_executions (
  execution_id text primary key,
  tenant_id uuid not null references tenants(id) on delete cascade,
  task_id text not null references nexus_tasks(task_id) on delete cascade,
  step_id text not null references nexus_task_steps(step_id) on delete cascade,
  tool_id text not null references nexus_tool_definitions(tool_id),
  actor_id uuid references users(id) on delete set null,
  idempotency_key text not null,
  state text not null check (state in ('accepted','running','completed','failed','indeterminate')),
  request jsonb not null default '{}',
  response jsonb,
  error jsonb,
  receipt jsonb,
  provider_request_id text,
  verified_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (tenant_id, idempotency_key)
);

create table if not exists nexus_memory_items (
  memory_id text primary key,
  tenant_id uuid not null references tenants(id) on delete cascade,
  principal_id uuid not null references users(id) on delete cascade,
  task_id text references nexus_tasks(task_id) on delete set null,
  conversation_id text references nexus_conversations(conversation_id) on delete set null,
  memory_class text not null check (memory_class in ('working','episodic','semantic','profile','domain')),
  purpose text not null,
  content jsonb not null,
  searchable_text text not null,
  embedding vector(1536) not null,
  embedding_model text not null,
  provenance jsonb not null,
  importance real not null default 0.5 check (importance between 0 and 1),
  confidence real not null default 0.5 check (confidence between 0 and 1),
  verification_state text not null default 'unverified' check (verification_state in ('unverified','user_confirmed','source_verified','disputed')),
  sensitivity text not null default 'internal' check (sensitivity in ('public','internal','sensitive','health')),
  expires_at timestamptz,
  deleted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists nexus_audit_events (
  event_id text primary key,
  occurred_at timestamptz not null default now(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  actor_id uuid references users(id) on delete set null,
  correlation_id text not null,
  task_id text references nexus_tasks(task_id) on delete set null,
  event_type text not null,
  outcome text not null,
  release_sha text,
  metadata jsonb not null default '{}'
);

create table if not exists nexus_worker_jobs (
  job_id text primary key,
  tenant_id uuid not null references tenants(id) on delete cascade,
  task_id text references nexus_tasks(task_id) on delete cascade,
  step_id text references nexus_task_steps(step_id) on delete cascade,
  job_type text not null,
  queue text not null default 'default',
  priority smallint not null default 3 check (priority between 1 and 5),
  idempotency_key text not null,
  payload jsonb not null default '{}',
  state text not null default 'queued' check (state in ('scheduled','queued','leased','completed','failed','dead_letter','cancelled')),
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

create table if not exists nexus_job_attempts (
  attempt_id text primary key,
  job_id text not null references nexus_worker_jobs(job_id) on delete cascade,
  attempt integer not null,
  worker_id text not null,
  state text not null,
  error jsonb,
  started_at timestamptz not null default now(),
  finished_at timestamptz,
  unique (job_id, attempt)
);

create table if not exists nexus_documents (
  document_id text primary key,
  tenant_id uuid not null references tenants(id) on delete cascade,
  owner_id uuid references users(id) on delete set null,
  task_id text references nexus_tasks(task_id) on delete set null,
  title text not null,
  document_type text not null,
  state text not null default 'draft',
  metadata jsonb not null default '{}',
  retention_until timestamptz,
  deleted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists nexus_document_versions (
  version_id text primary key,
  document_id text not null references nexus_documents(document_id) on delete cascade,
  version integer not null,
  content jsonb not null,
  object_key text,
  checksum text not null,
  created_by uuid references users(id) on delete set null,
  created_at timestamptz not null default now(),
  unique (document_id, version)
);

create table if not exists nexus_webhook_events (
  event_id text primary key,
  tenant_id uuid references tenants(id) on delete cascade,
  provider text not null,
  provider_event_id text not null,
  event_type text not null,
  payload jsonb not null,
  signature_verified boolean not null default false,
  state text not null default 'received',
  received_at timestamptz not null default now(),
  processed_at timestamptz,
  error jsonb,
  unique (provider, provider_event_id)
);

create table if not exists nexus_notifications (
  notification_id text primary key,
  tenant_id uuid not null references tenants(id) on delete cascade,
  user_id uuid references users(id) on delete cascade,
  task_id text references nexus_tasks(task_id) on delete cascade,
  channel text not null,
  state text not null default 'queued',
  content jsonb not null,
  scheduled_at timestamptz,
  delivered_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists nexus_sync_operations (
  sync_id text primary key,
  tenant_id uuid not null references tenants(id) on delete cascade,
  user_id uuid references users(id) on delete cascade,
  device_id text not null,
  operation_id text not null,
  entity_type text not null,
  entity_id text,
  base_version integer,
  payload jsonb not null,
  state text not null default 'pending' check (state in ('pending','applied','conflict','rejected')),
  conflict jsonb,
  created_at timestamptz not null default now(),
  applied_at timestamptz,
  unique (tenant_id, device_id, operation_id)
);

create table if not exists nexus_outbox (
  message_id text primary key,
  tenant_id uuid not null references tenants(id) on delete cascade,
  aggregate_type text not null,
  aggregate_id text not null,
  message_type text not null,
  payload jsonb not null,
  created_at timestamptz not null default now(),
  published_at timestamptz
);

create table if not exists nexus_inbox (
  source text not null,
  message_id text not null,
  received_at timestamptz not null default now(),
  result jsonb,
  primary key (source, message_id)
);

create index if not exists nexus_conversations_owner_idx on nexus_conversations(tenant_id, owner_id, updated_at desc);
create index if not exists nexus_messages_conversation_idx on nexus_messages(conversation_id, created_at);
create index if not exists nexus_tasks_owner_idx on nexus_tasks(tenant_id, owner_id, updated_at desc);
create index if not exists nexus_tasks_state_idx on nexus_tasks(tenant_id, state, updated_at desc);
create index if not exists nexus_task_steps_idx on nexus_task_steps(task_id, sequence);
create index if not exists nexus_consents_subject_idx on nexus_consents(tenant_id, subject_id, scope, granted_at desc);
create index if not exists nexus_executions_task_idx on nexus_tool_executions(task_id, created_at desc);
create index if not exists nexus_memory_scope_idx on nexus_memory_items(tenant_id, principal_id, memory_class, purpose, updated_at desc) where deleted_at is null;
create index if not exists nexus_memory_vector_idx on nexus_memory_items using hnsw (embedding vector_cosine_ops) where deleted_at is null;
create index if not exists nexus_audit_correlation_idx on nexus_audit_events(tenant_id, correlation_id, occurred_at);
create index if not exists nexus_worker_claim_idx on nexus_worker_jobs(queue, state, available_at, priority) where state in ('scheduled','queued');
create index if not exists nexus_documents_owner_idx on nexus_documents(tenant_id, owner_id, updated_at desc) where deleted_at is null;
create index if not exists nexus_notifications_delivery_idx on nexus_notifications(state, scheduled_at) where state = 'queued';
create index if not exists nexus_outbox_pending_idx on nexus_outbox(created_at) where published_at is null;
