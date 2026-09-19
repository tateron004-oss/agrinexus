-- The production-acceptance identity (migration 011) was created with only
-- 'acceptance:identity'. Permission checks (AccessControl.authorize) read the
-- database membership, so any workspace whose service authorizes tasks:read /
-- tasks:execute itself could never run under it: the acceptance probe for the
-- business workspace failed with "Missing permission: tasks:read" (503,
-- permission_denied) before it could gather cutover evidence.
--
-- These are the same ordinary permissions every signed-in user already has
-- (server.js authoritativeRuntimeUser). They are appended after
-- 'acceptance:identity', which stays first (the identity probe reads the first
-- permission), and only when missing, so re-running this is a no-op.
update nexus_organization_memberships
set permissions = permissions || array(
      select p from unnest(array['tasks:read','tasks:execute']::text[]) as p
      where not (p = any(permissions))),
    updated_at = now()
where role = 'acceptance-controller'
  and 'acceptance:identity' = any(permissions)
  and not ('tasks:read' = any(permissions) and 'tasks:execute' = any(permissions));
