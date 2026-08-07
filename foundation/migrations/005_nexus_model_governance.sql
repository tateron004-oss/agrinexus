-- Predictive model governance and durable outcome evidence for the authoritative runtime.
create table if not exists nexus_model_versions (
  model_version_id text primary key,
  tenant_id uuid references tenants(id) on delete cascade,
  model_key text not null,
  version text not null,
  domain text not null,
  state text not null default 'draft' check (state in ('draft','validation','approved','active','retired','rejected')),
  artifact_checksum text not null,
  training_provenance jsonb not null,
  validation_summary jsonb not null default '{}',
  confidence_policy jsonb not null,
  intended_use text not null,
  limitations text[] not null default '{}',
  created_by uuid references users(id) on delete set null,
  reviewed_by uuid references users(id) on delete set null,
  reviewed_at timestamptz,
  activated_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (tenant_id, model_key, version)
);

create table if not exists nexus_predictions (
  prediction_id text primary key,
  tenant_id uuid not null references tenants(id) on delete cascade,
  subject_id uuid references users(id) on delete set null,
  task_id text references nexus_tasks(task_id) on delete set null,
  model_version_id text not null references nexus_model_versions(model_version_id),
  input_provenance jsonb not null,
  output jsonb not null,
  confidence numeric not null check (confidence >= 0 and confidence <= 1),
  disposition text not null check (disposition in ('informational','expert_review','withheld')),
  review_state text not null default 'not_required' check (review_state in ('not_required','pending','approved','rejected')),
  reviewed_by uuid references users(id) on delete set null,
  reviewed_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists nexus_outcome_evidence (
  evidence_id text primary key,
  tenant_id uuid not null references tenants(id) on delete cascade,
  task_id text not null references nexus_tasks(task_id) on delete cascade,
  step_id text references nexus_task_steps(step_id) on delete cascade,
  execution_id text references nexus_tool_executions(execution_id) on delete set null,
  evidence_type text not null,
  source text not null,
  locator text,
  checksum text,
  observed jsonb not null,
  collected_at timestamptz not null default now(),
  expires_at timestamptz
);

create table if not exists nexus_outcome_verifications (
  verification_id text primary key,
  tenant_id uuid not null references tenants(id) on delete cascade,
  task_id text not null references nexus_tasks(task_id) on delete cascade,
  step_id text references nexus_task_steps(step_id) on delete cascade,
  execution_id text references nexus_tool_executions(execution_id) on delete set null,
  policy_key text not null,
  state text not null check (state in ('verified','failed','inconclusive')),
  verifier text not null,
  evidence_ids text[] not null,
  details jsonb not null default '{}',
  verified_at timestamptz not null default now()
);

create unique index if not exists nexus_active_model_version_idx
  on nexus_model_versions(tenant_id, model_key) where state='active';
create index if not exists nexus_prediction_review_idx
  on nexus_predictions(tenant_id, review_state, created_at) where review_state='pending';
create index if not exists nexus_outcome_evidence_task_idx
  on nexus_outcome_evidence(tenant_id, task_id, collected_at desc);

alter table nexus_model_versions enable row level security;
alter table nexus_predictions enable row level security;
alter table nexus_outcome_evidence enable row level security;
alter table nexus_outcome_verifications enable row level security;
