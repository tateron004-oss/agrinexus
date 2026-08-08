-- Durable, release-scoped production acceptance evidence.
create table if not exists nexus_worker_instances (
  worker_id text primary key,
  release_sha text not null,
  queues jsonb not null default '[]'::jsonb,
  registered_handlers jsonb not null default '[]'::jsonb,
  status text not null check (status in ('starting','ready','stopping','failed')),
  last_job_id text,
  last_heartbeat_at timestamptz not null default now(),
  started_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists nexus_release_activations (
  release_sha text primary key,
  state text not null check (state in ('deploying','active','rejected','superseded')),
  service_manifest jsonb not null default '{}'::jsonb,
  activated_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists nexus_durability_proofs (
  proof_id text primary key,
  release_sha text not null,
  proof_type text not null,
  subject_id text not null,
  checksum text,
  evidence jsonb not null default '{}'::jsonb,
  verified_at timestamptz not null default now(),
  expires_at timestamptz,
  unique (release_sha, proof_type, subject_id)
);

create table if not exists nexus_acceptance_evidence (
  evidence_id text primary key,
  release_sha text not null,
  component text not null,
  status text not null check (status in ('passed','failed')),
  evidence jsonb not null default '{}'::jsonb,
  source text not null,
  source_sha text not null,
  verified_at timestamptz not null default now(),
  expires_at timestamptz,
  unique (release_sha, component, source)
);

create table if not exists nexus_production_exceptions (
  exception_id text primary key,
  component text not null check (component in ('legacy_write_path','simulated_provider','in_memory_fallback')),
  description text not null,
  active boolean not null default true,
  detected_at timestamptz not null default now(),
  resolved_at timestamptz
);

create index if not exists nexus_worker_release_heartbeat_idx
  on nexus_worker_instances(release_sha,last_heartbeat_at desc);
create index if not exists nexus_acceptance_release_component_idx
  on nexus_acceptance_evidence(release_sha,component,verified_at desc);
create index if not exists nexus_durability_release_type_idx
  on nexus_durability_proofs(release_sha,proof_type,verified_at desc);
