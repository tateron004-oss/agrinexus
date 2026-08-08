-- Least-privilege principal for release-scoped production acceptance probes.
insert into nexus_organization_memberships (tenant_id,user_id,role,permissions,state)
select tenant_id,id,'acceptance-controller',array['acceptance:identity']::text[],'active'
from users
where status='active'
order by created_at,id
limit 1
on conflict (tenant_id,user_id,role) do update set
  permissions=excluded.permissions,state='active',updated_at=now();
