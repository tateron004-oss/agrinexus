create table if not exists nexus_path2_usability_sessions (
  session_id text primary key,
  release_sha text not null check (release_sha ~ '^[0-9a-f]{40}$'),
  path1_baseline text not null check (path1_baseline ~ '^[0-9a-f]{40}$'),
  participant_id text not null,
  observer_id text not null,
  locale text not null,
  completed boolean not null,
  unprompted_language boolean not null,
  effort_saved boolean not null,
  false_successes integer not null default 0 check (false_successes >= 0),
  receipt jsonb not null,
  observed_at timestamptz not null,
  created_at timestamptz not null default now(),
  unique (release_sha, participant_id)
);

create index if not exists nexus_path2_usability_release_idx
  on nexus_path2_usability_sessions(release_sha, observed_at desc);
