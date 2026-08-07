-- Production controls owned by the authoritative nexus/ runtime.
create table if not exists nexus_organization_memberships (
  tenant_id uuid not null references tenants(id) on delete cascade,
  user_id uuid not null references users(id) on delete cascade,
  role text not null,
  permissions text[] not null default '{}',
  state text not null default 'active' check (state in ('invited','active','suspended','revoked')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (tenant_id, user_id, role)
);

create table if not exists nexus_delegations (
  delegation_id text primary key,
  tenant_id uuid not null references tenants(id) on delete cascade,
  subject_id uuid not null references users(id) on delete cascade,
  delegate_id uuid not null references users(id) on delete cascade,
  scopes text[] not null,
  purpose text not null,
  state text not null default 'active' check (state in ('active','revoked','expired')),
  starts_at timestamptz not null default now(),
  expires_at timestamptz not null,
  revoked_at timestamptz,
  created_at timestamptz not null default now(),
  check (subject_id <> delegate_id)
);

create table if not exists nexus_artifacts (
  artifact_id text primary key,
  tenant_id uuid not null references tenants(id) on delete cascade,
  owner_id uuid references users(id) on delete set null,
  task_id text references nexus_tasks(task_id) on delete set null,
  kind text not null,
  title text not null,
  state text not null default 'active' check (state in ('active','archived','quarantined','deleted')),
  content_type text,
  object_key text,
  checksum text not null,
  size_bytes bigint check (size_bytes is null or size_bytes >= 0),
  metadata jsonb not null default '{}',
  retention_until timestamptz,
  deleted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists nexus_schedules (
  schedule_id text primary key,
  tenant_id uuid not null references tenants(id) on delete cascade,
  owner_id uuid references users(id) on delete cascade,
  task_id text references nexus_tasks(task_id) on delete cascade,
  job_type text not null,
  payload jsonb not null default '{}',
  cadence jsonb not null,
  timezone text not null,
  next_run_at timestamptz not null,
  state text not null default 'active' check (state in ('active','paused','completed','cancelled')),
  last_run_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists nexus_observability_events (
  event_id text primary key,
  occurred_at timestamptz not null default now(),
  tenant_id uuid references tenants(id) on delete cascade,
  actor_id uuid references users(id) on delete set null,
  trace_id text not null,
  correlation_id text not null,
  task_id text references nexus_tasks(task_id) on delete set null,
  component text not null,
  event_type text not null,
  outcome text not null,
  duration_ms integer,
  provider text,
  cost_micros bigint,
  release_sha text,
  metadata jsonb not null default '{}'
);

create index if not exists nexus_membership_user_idx on nexus_organization_memberships(user_id, state);
create index if not exists nexus_delegation_lookup_idx on nexus_delegations(tenant_id, delegate_id, state, expires_at);
create index if not exists nexus_artifact_task_idx on nexus_artifacts(tenant_id, task_id, updated_at desc) where deleted_at is null;
create index if not exists nexus_schedule_due_idx on nexus_schedules(state, next_run_at) where state='active';
create index if not exists nexus_observability_trace_idx on nexus_observability_events(trace_id, occurred_at);

alter table nexus_organization_memberships enable row level security;
alter table nexus_delegations enable row level security;
alter table nexus_artifacts enable row level security;
alter table nexus_schedules enable row level security;
