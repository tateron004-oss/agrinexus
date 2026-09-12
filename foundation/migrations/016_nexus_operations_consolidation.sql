-- Recover local native lifecycle/operations without replacing the newer delivery schema.
alter table nexus_devices add column if not exists app_version text not null default '';
alter table nexus_devices add column if not exists permission_state jsonb not null default '{}';
alter table nexus_devices add column if not exists lifecycle_state text not null default 'foreground' check (lifecycle_state in ('foreground','background','suspended','terminated'));
alter table nexus_devices add column if not exists push_provider text;
alter table nexus_devices add column if not exists push_state text not null default 'unregistered' check (push_state in ('unregistered','registered','revoked','unavailable'));
alter table nexus_devices drop constraint if exists nexus_devices_platform_check;
alter table nexus_devices add constraint nexus_devices_platform_check check (platform in ('web','ios','android','windows','macos','linux'));

create table if not exists nexus_device_events (
  event_id text primary key,
  tenant_id uuid not null references tenants(id) on delete cascade,
  user_id uuid not null references users(id) on delete cascade,
  device_id text not null references nexus_devices(device_id) on delete cascade,
  event_type text not null,
  payload jsonb not null default '{}',
  occurred_at timestamptz not null,
  received_at timestamptz not null default now(),
  unique (device_id,event_id)
);

create table if not exists nexus_trace_spans (
  span_id text primary key,
  trace_id text not null,
  parent_span_id text,
  tenant_id uuid references tenants(id) on delete cascade,
  task_id text references nexus_tasks(task_id) on delete set null,
  service text not null,
  operation text not null,
  state text not null check (state in ('running','ok','error')),
  duration_ms integer check (duration_ms is null or duration_ms >= 0),
  attributes jsonb not null default '{}',
  error jsonb,
  started_at timestamptz not null,
  finished_at timestamptz
);

create table if not exists nexus_cost_events (
  cost_event_id text primary key,
  tenant_id uuid not null references tenants(id) on delete cascade,
  task_id text references nexus_tasks(task_id) on delete set null,
  tool_id text references nexus_tool_definitions(tool_id) on delete set null,
  provider text not null,
  category text not null,
  quantity numeric(18,6) not null default 0,
  unit text not null,
  estimated_cost_cents integer not null check (estimated_cost_cents >= 0),
  currency text not null default 'USD',
  occurred_at timestamptz not null default now(),
  metadata jsonb not null default '{}'
);

create table if not exists nexus_provider_health (
  tenant_id uuid not null references tenants(id) on delete cascade,
  provider_id text not null,
  primary key (tenant_id,provider_id),
  state text not null check (state in ('healthy','degraded','unavailable','unknown')),
  consecutive_failures integer not null default 0,
  latency_ms integer,
  last_status_code integer,
  last_error_code text,
  checked_at timestamptz not null,
  next_check_at timestamptz,
  details jsonb not null default '{}',
  updated_at timestamptz not null default now()
);

create table if not exists nexus_alert_events (
  alert_id text primary key,
  tenant_id uuid references tenants(id) on delete cascade,
  alert_key text not null,
  severity text not null check (severity in ('info','warning','critical')),
  state text not null default 'open' check (state in ('open','acknowledged','resolved')),
  summary text not null,
  evidence jsonb not null default '{}',
  first_observed_at timestamptz not null,
  last_observed_at timestamptz not null,
  acknowledged_by uuid references users(id) on delete set null,
  acknowledged_at timestamptz,
  resolved_at timestamptz,
  unique (tenant_id,alert_key,state)
);

create index if not exists nexus_devices_user_idx on nexus_devices(tenant_id,user_id,last_seen_at desc);
create index if not exists nexus_device_events_device_idx on nexus_device_events(device_id,occurred_at);
create index if not exists nexus_trace_lookup_idx on nexus_trace_spans(trace_id,started_at);
create index if not exists nexus_trace_task_idx on nexus_trace_spans(tenant_id,task_id,started_at desc);
create index if not exists nexus_cost_tenant_idx on nexus_cost_events(tenant_id,occurred_at desc);
create index if not exists nexus_provider_health_state_idx on nexus_provider_health(state,checked_at);
create index if not exists nexus_alert_open_idx on nexus_alert_events(state,severity,last_observed_at desc) where state='open';

alter table nexus_device_events enable row level security;
alter table nexus_trace_spans enable row level security;
alter table nexus_cost_events enable row level security;
alter table nexus_provider_health enable row level security;
alter table nexus_alert_events enable row level security;
