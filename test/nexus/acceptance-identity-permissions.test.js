"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const dir = path.join(__dirname, "../../foundation/migrations");
const migration = fs.readFileSync(path.join(dir, "021_acceptance_identity_task_permissions.sql"), "utf8");

// 2026-09-19: the business workspace's acceptance probe failed with
// "Missing permission: tasks:read" (503 permission_denied). AccessControl
// authorizes against the database membership, and the acceptance-controller
// membership (migration 011) held only 'acceptance:identity', so any service
// that authorizes tasks:read itself could never run under it.
test("the acceptance identity gains ordinary task permissions without losing or reordering acceptance:identity", () => {
  assert.match(migration, /update nexus_organization_memberships/);
  assert.ok(migration.includes("role = 'acceptance-controller'"), "only the acceptance identity's membership is touched");
  assert.ok(migration.includes("'tasks:read'") && migration.includes("'tasks:execute'"));
  assert.ok(migration.includes("permissions = permissions || array("), "permissions are appended, so 'acceptance:identity' stays first");
  assert.ok(!migration.includes("permissions = array["), "the array must not be overwritten");
  assert.ok(!migration.includes("'*'") && !migration.includes("admin"), "no wildcard or admin grant");
});

test("the migration is the next one in an unbroken sequence and is idempotent", () => {
  const names = fs.readdirSync(dir).filter(name => /^\d+_.+\.sql$/.test(name)).sort();
  names.forEach((name, index) => assert.equal(Number(name.match(/^(\d+)_/)[1]), index + 1, `gap or duplicate at ${name}`));
  assert.equal(names.at(-1), "022_nexus_notifications_delivery_lease.sql");
  assert.ok(migration.includes("not (p = any(permissions))"), "already-granted permissions are not appended again");
  assert.ok(migration.includes("and not ('tasks:read' = any(permissions) and 'tasks:execute' = any(permissions))"), "a fully-granted row is left untouched");
});
