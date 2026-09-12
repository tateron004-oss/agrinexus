"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");

const root = path.resolve(__dirname, "../..");
const read = relative => fs.readFileSync(path.join(root, relative), "utf8");

test("production exposes one authoritative durable runtime for all 17 workspaces", () => {
  const server = read("server.js");
  const factory = read("nexus/runtime/create-runtime.js");
  const blueprint = read("render.yaml");
  const workspaces = defaultApplicationManifests();

  assert.equal(workspaces.length, 17);
  assert.equal(new Set(workspaces.map(item => item.applicationId)).size, 17);
  assert.match(factory, /PostgreSQL is required for the authoritative Nexus runtime/);
  assert.match(factory, /new MemoryRepository\(db\)/);
  assert.match(factory, /new JobRepository\(db\)/);
  assert.match(factory, /new SyncRepository\(db\)/);
  assert.match(factory, /new ObservabilityRepository\(db,/);
  assert.match(factory, /new AccessControl\(db\)/);
  assert.match(factory, /new ToolRegistry\(db\)/);
  assert.match(factory, /new AgentService\(/);
  assert.doesNotMatch(factory, /legacy-provider-adapter|registerLegacyTools/);

  const mount = server.indexOf("authoritativeNexusRuntime.handle(req, res, url, send)");
  const legacyApi = server.indexOf('url.pathname.startsWith("/api/")');
  assert.ok(mount > 0 && legacyApi > mount, "authoritative runtime must own its routes before the protected legacy API");
  assert.match(blueprint, /name: nexus-postgres/);
  assert.match(blueprint, /name: nexus-background-worker/);
  assert.match(blueprint, /preDeployCommand: node foundation\/scripts\/migrate\.js/);
});

test("authoritative persistence and semantic memory have one migration chain", () => {
  const migrations = fs.readdirSync(path.join(root, "foundation/migrations"))
    .filter(name => /^\d+_.+\.sql$/.test(name)).sort();
  assert.ok(migrations.length > 0, "must have at least one migration");
  // Sequential, gap-free numbering (not a hardcoded exact list) is what "one
  // migration chain" actually means -- a hardcoded list breaks on every
  // routine new migration, the same fragility already fixed once in this
  // repo's CI totals check.
  migrations.forEach((name, index) => {
    const number = Number(name.match(/^(\d+)_/)[1]);
    assert.equal(number, index + 1, `migrations must be sequentially numbered with no gaps or duplicates (expected ${index + 1}, found "${name}")`);
  });
  assert.match(read("foundation/migrations/003_nexus_unified_runtime.sql"), /vector\(/i);
});

test("unified release records a case-level Path 2 production matrix after exact-SHA stability", () => {
  const workflow = fs.readFileSync(path.join(root, ".github/workflows/nexus-unified-production-release.yml"), "utf8");
  assert.match(workflow, /Run and record the Path 2 exact-production machine matrix/);
  assert.match(workflow, /node scripts\/nexus-run-path2-production-matrix\.js/);
  assert.ok(workflow.indexOf("Establish three consecutive deploy-stage production passes") <
    workflow.indexOf("Run and record the Path 2 exact-production machine matrix"));
  assert.ok(workflow.indexOf("Run and record the Path 2 exact-production machine matrix") <
    workflow.indexOf("Capture the exact-release Path 2 certification status"));
  assert.match(workflow, /node scripts\/nexus-path2-certification-status\.js/);
});
