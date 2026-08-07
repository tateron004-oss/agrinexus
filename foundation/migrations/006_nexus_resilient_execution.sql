-- Governed alternatives and immutable attempt receipts for runtime self-correction.
alter table nexus_task_steps add column if not exists fallback_tool_ids text[] not null default '{}';
create index if not exists nexus_step_fallback_idx on nexus_task_steps using gin(fallback_tool_ids);
