const assert = require("node:assert/strict");
const test = require("node:test");
const { registerLegacyTools, createLegacyExecutors, verifyLegacyOutcome } = require("../../nexus/compat/legacy-provider-adapter.js");
const { createWorkspaceMigrationRegistry, WORKSPACES } = require("../../nexus/compat/workspace-migration-registry.js");

test("legacy providers enter only through governed tools and stateful local paths stay unavailable", async () => {
  const rows = [];
  await registerLegacyTools({ registry: { register: async tool => { rows.push(tool); return tool; } },
    env: { NEXUS_FILE_UPLOAD_ENABLED: "true" } });
  const documents = rows.find(tool => tool.toolId === "legacy.documents.analyze");
  const reminders = rows.find(tool => tool.toolId === "legacy.reminders.create");
  assert.equal(documents.availability, "available");
  assert.equal(reminders.availability, "unavailable");
  assert.equal(reminders.metadata.migrationState, "awaiting_durable_port");
});

test("stateless document compatibility execution requires a provider-verifiable receipt", async () => {
  const executor = createLegacyExecutors({ env: { NEXUS_FILE_UPLOAD_ENABLED: "true" } })["legacy.documents.analyze"];
  const result = await executor({ input: { text: "A user supplied field report." } });
  assert.equal(result.providerVerified, true);
  const verification = await verifyLegacyOutcome({ tool: { implementation: "compat:server/providers/documentProvider" }, result });
  assert.equal(verification.verified, true); assert.ok(verification.providerAuditId);
});

test("every workspace defaults to read-only legacy state until all migration proofs exist", () => {
  const registry = createWorkspaceMigrationRegistry();
  assert.equal(registry.list().length, WORKSPACES.length);
  assert.equal(registry.list().every(item => item.legacyWriteAllowed === false), true);
  assert.throws(() => registry.migrated("maps", ["contract"]), /missing migration proofs/);
  const migrated = registry.migrated("maps", ["contract", "tenant-isolation", "durable-write", "receipt", "browser-outcome"]);
  assert.equal(migrated.authoritativeTaskEngine, true);
});
