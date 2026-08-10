create table if not exists nexus_path2_machine_cases (
  case_id text primary key,
  release_sha text not null check (release_sha ~ '^[0-9a-f]{40}$'),
  path1_baseline text not null check (path1_baseline ~ '^[0-9a-f]{40}$'),
  lane text not null,
  passed boolean not null,
  facts jsonb not null default '{}'::jsonb,
  false_successes integer not null default 0 check (false_successes >= 0),
  receipt jsonb not null,
  observed_at timestamptz not null,
  unique (release_sha, lane, case_id)
);

create index if not exists nexus_path2_machine_cases_release_lane_idx
  on nexus_path2_machine_cases (release_sha, path1_baseline, lane, observed_at);
