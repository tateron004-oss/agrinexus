create table if not exists nexus_path2_lane_evidence (
  release_sha text not null check (release_sha ~ '^[0-9a-f]{40}$'),
  path1_baseline text not null check (path1_baseline ~ '^[0-9a-f]{40}$'),
  lane text not null,
  evidence jsonb not null,
  observed_at timestamptz not null,
  primary key (release_sha, lane)
);

create table if not exists nexus_path2_stability_passes (
  release_sha text not null check (release_sha ~ '^[0-9a-f]{40}$'),
  pass_number integer not null check (pass_number between 1 and 3),
  receipt jsonb not null,
  observed_at timestamptz not null,
  primary key (release_sha, pass_number)
);
