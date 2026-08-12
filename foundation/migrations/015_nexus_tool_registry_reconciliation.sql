-- Reconcile legacy production databases whose recorded unified-runtime migration predates the current tool registry shape.
create table if not exists nexus_tool_definitions (
  tool_id text primary key,
  version integer not null default 1,
  description text not null default '',
  domain text not null default '',
  input_schema jsonb not null default '{}',
  output_schema jsonb not null default '{}',
  implementation text not null default '',
  availability text not null default 'unavailable',
  required_permission text,
  required_role text,
  risk_tier text not null default 'low',
  confirmation_required boolean not null default false,
  consent_scope text,
  timeout_ms integer not null default 30000,
  max_attempts smallint not null default 3,
  retry_policy jsonb not null default '{"strategy":"exponential","baseDelayMs":1000}',
  verification_method text not null default 'result_schema',
  data_classification text not null default 'internal',
  cost_limit_cents integer,
  feature_flag text,
  metadata jsonb not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table nexus_tool_definitions add column if not exists tool_id text;
alter table nexus_tool_definitions add column if not exists version integer not null default 1;
alter table nexus_tool_definitions add column if not exists description text not null default '';
alter table nexus_tool_definitions add column if not exists domain text not null default '';
alter table nexus_tool_definitions add column if not exists input_schema jsonb not null default '{}';
alter table nexus_tool_definitions add column if not exists output_schema jsonb not null default '{}';
alter table nexus_tool_definitions add column if not exists implementation text not null default '';
alter table nexus_tool_definitions add column if not exists availability text not null default 'unavailable';
alter table nexus_tool_definitions add column if not exists required_permission text;
alter table nexus_tool_definitions add column if not exists required_role text;
alter table nexus_tool_definitions add column if not exists risk_tier text not null default 'low';
alter table nexus_tool_definitions add column if not exists confirmation_required boolean not null default false;
alter table nexus_tool_definitions add column if not exists consent_scope text;
alter table nexus_tool_definitions add column if not exists timeout_ms integer not null default 30000;
alter table nexus_tool_definitions add column if not exists max_attempts smallint not null default 3;
alter table nexus_tool_definitions add column if not exists retry_policy jsonb not null default '{"strategy":"exponential","baseDelayMs":1000}';
alter table nexus_tool_definitions add column if not exists verification_method text not null default 'result_schema';
alter table nexus_tool_definitions add column if not exists data_classification text not null default 'internal';
alter table nexus_tool_definitions add column if not exists cost_limit_cents integer;
alter table nexus_tool_definitions add column if not exists feature_flag text;
alter table nexus_tool_definitions add column if not exists metadata jsonb not null default '{}';
alter table nexus_tool_definitions add column if not exists created_at timestamptz not null default now();
alter table nexus_tool_definitions add column if not exists updated_at timestamptz not null default now();
create unique index if not exists nexus_tool_definitions_tool_id_reconcile_idx on nexus_tool_definitions (tool_id);
