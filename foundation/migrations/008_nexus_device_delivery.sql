create table if not exists nexus_devices (
  device_id text primary key,
  tenant_id uuid not null references tenants(id) on delete cascade,
  user_id uuid not null references users(id) on delete cascade,
  platform text not null check (platform in ('web','ios','android','windows','macos')),
  capabilities text[] not null default '{}',
  push_endpoint text,
  push_key_ciphertext text,
  state text not null default 'active' check (state in ('active','revoked','expired')),
  last_seen_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists nexus_devices_user_idx on nexus_devices(tenant_id,user_id,state,last_seen_at desc);
alter table nexus_devices enable row level security;

alter table nexus_notifications add column if not exists device_id text references nexus_devices(device_id) on delete set null;
alter table nexus_notifications add column if not exists idempotency_key text;
alter table nexus_notifications add column if not exists attempts integer not null default 0;
alter table nexus_notifications add column if not exists last_error jsonb;
create unique index if not exists nexus_notifications_idempotency_idx on nexus_notifications(tenant_id,idempotency_key) where idempotency_key is not null;

