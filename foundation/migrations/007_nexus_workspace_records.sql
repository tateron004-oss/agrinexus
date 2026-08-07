-- Durable application records and workspace cutover proofs for the authoritative nexus/ runtime.
create table if not exists nexus_records (
  record_id text primary key,
  tenant_id uuid not null references tenants(id) on delete cascade,
  subject_id uuid references users(id) on delete set null,
  owner_id uuid references users(id) on delete set null,
  task_id text references nexus_tasks(task_id) on delete set null,
  workspace_id text not null,
  record_type text not null,
  classification text not null check (classification in ('standard','sensitive','health','regulated')),
  state text not null default 'active' check (state in ('draft','active','archived','deleted')),
  version integer not null default 1,
  data jsonb not null,
  provenance jsonb not null default '{}',
  retention_until timestamptz,
  deleted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (tenant_id, workspace_id, record_id)
);

create table if not exists nexus_record_versions (
  version_id text primary key,
  record_id text not null references nexus_records(record_id) on delete cascade,
  version integer not null,
  data jsonb not null,
  provenance jsonb not null default '{}',
  changed_by uuid references users(id) on delete set null,
  created_at timestamptz not null default now(),
  unique (record_id, version)
);

create table if not exists nexus_workspace_migrations (
  workspace_id text primary key,
  state text not null check (state in ('legacy','verifying','authoritative','retired')),
  proofs jsonb not null default '{}',
  release_sha text,
  activated_at timestamptz,
  updated_at timestamptz not null default now()
);

create index if not exists nexus_records_subject_idx on nexus_records(tenant_id, subject_id, workspace_id, updated_at desc) where deleted_at is null;
create index if not exists nexus_records_task_idx on nexus_records(tenant_id, task_id, updated_at desc) where deleted_at is null;
alter table nexus_records enable row level security;
alter table nexus_record_versions enable row level security;

