create table if not exists nexus_legal_holds (
  hold_id text primary key,
  tenant_id uuid not null references tenants(id) on delete cascade,
  subject_id uuid references users(id) on delete cascade,
  scope text not null,
  reason text not null,
  state text not null default 'active' check (state in ('active','released')),
  released_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists nexus_deletion_requests (
  request_id text primary key,
  tenant_id uuid not null references tenants(id) on delete cascade,
  subject_id uuid not null references users(id) on delete cascade,
  requested_by uuid not null references users(id) on delete restrict,
  state text not null default 'queued' check (state in ('queued','blocked','running','verified','failed')),
  verification jsonb not null default '{}',
  requested_at timestamptz not null default now(),
  completed_at timestamptz
);

create table if not exists nexus_backup_evidence (
  evidence_id text primary key,
  release_sha text not null,
  backup_id text not null,
  state text not null check (state in ('created','restore_verified','failed')),
  checksum text not null,
  metadata jsonb not null default '{}',
  created_at timestamptz not null default now(),
  verified_at timestamptz,
  unique (backup_id, state)
);

create index if not exists nexus_deletion_queue_idx on nexus_deletion_requests(state, requested_at);
create index if not exists nexus_legal_hold_subject_idx on nexus_legal_holds(tenant_id, subject_id, state);
alter table nexus_legal_holds enable row level security;
alter table nexus_deletion_requests enable row level security;

