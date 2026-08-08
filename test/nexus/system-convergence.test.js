"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");

const root = path.resolve(__dirname, "../..");
const read = relative => fs.readFileSync(path.join(root, relative), "utf8");

test("production exposes one authoritative durable runtime for all 16 workspaces", () => {
  const server = read("server.js");
  const factory = read("nexus/runtime/create-runtime.js");
  const blueprint = read("render.yaml");
  const workspaces = defaultApplicationManifests();

  assert.equal(workspaces.length, 16);
  assert.equal(new Set(workspaces.map(item => item.applicationId)).size, 16);
  assert.match(factory, /PostgreSQL is required for the authoritative Nexus runtime/);
  assert.match(factory, /new MemoryRepository\(db\)/);
  assert.match(factory, /new JobRepository\(db\)/);
  assert.match(factory, /new SyncRepository\(db\)/);
  assert.match(factory, /new ObservabilityRepository\(db\)/);
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
  assert.deepEqual(migrations, [
    "001_initial_schema.sql", "002_seed_demo.sql", "003_nexus_unified_runtime.sql",
    "004_nexus_production_controls.sql", "005_nexus_model_governance.sql",
    "006_nexus_resilient_execution.sql", "007_nexus_workspace_records.sql",
    "008_nexus_device_delivery.sql", "009_nexus_data_lifecycle.sql",
    "010_nexus_production_acceptance.sql"
  ]);
  assert.match(read("foundation/migrations/003_nexus_unified_runtime.sql"), /vector\(/i);
});
