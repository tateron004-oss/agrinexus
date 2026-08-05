"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const {
  CANONICAL_PRODUCTION_URL,
  CROSS_APPLICATION_JOURNEYS,
  FAILURE_SCENARIOS,
  LIFECYCLE,
  PRODUCTION_CAPABILITY_REGISTRY,
  registryById
} = require("../nexus-core/production-capability-registry");
const { ROUTES } = require("../nexus-core/router");
const lifecycleJourneys = require("./fixtures/nexus-production-lifecycle-journeys");

assert.equal(CANONICAL_PRODUCTION_URL, "https://agrinexus-platform.onrender.com");
assert.deepEqual(LIFECYCLE, ["open", "execute", "verify-outcome", "follow-up", "correct", "save", "close", "reopen", "verify-persistence"]);
assert.equal(PRODUCTION_CAPABILITY_REGISTRY.length, 13);
assert.equal(new Set(PRODUCTION_CAPABILITY_REGISTRY.map((entry) => entry.id)).size, PRODUCTION_CAPABILITY_REGISTRY.length);

const registry = registryById();
const routedWorkspaces = new Set(ROUTES.map(([workspace]) => workspace));
for (const id of ["agriculture", "health", "telehealth", "mobile-clinic", "pharmacy", "learning", "workforce", "marketplace", "maps", "music", "reminders", "offline", "live-knowledge"]) {
  assert.ok(registry.has(id), `Missing advertised production lane: ${id}`);
  assert.ok(routedWorkspaces.has(id), `Advertised production lane has no voice route: ${id}`);
  const entry = registry.get(id);
  assert.deepEqual(entry.lifecycle, LIFECYCLE, `${id} does not require the complete production lifecycle`);
  assert.ok(entry.providerOutcomes.length >= 3, `${id} has no meaningful provider/action contract`);
  assert.ok(entry.requiredEvidence.length >= 3, `${id} has insufficient outcome evidence`);
}

assert.ok(registry.get("music").requiredEvidence.includes("advancing-current-time"));
assert.ok(registry.get("music").requiredEvidence.includes("audible-output"));
assert.ok(registry.get("telehealth").requiredEvidence.includes("usable-video-handoff"));
assert.ok(registry.get("live-knowledge").requiredEvidence.includes("playable-video"));
assert.ok(registry.get("maps").requiredEvidence.includes("reset-state"));
assert.ok(registry.get("offline").requiredEvidence.includes("sync-receipt"));
assert.ok(CROSS_APPLICATION_JOURNEYS.length >= 4);
assert.ok(FAILURE_SCENARIOS.length >= 12);
assert.equal(lifecycleJourneys.length, PRODUCTION_CAPABILITY_REGISTRY.length);
assert.deepEqual(new Set(lifecycleJourneys.map((entry) => entry.id)), new Set(PRODUCTION_CAPABILITY_REGISTRY.map((entry) => entry.id)));
for (const entry of lifecycleJourneys) {
  assert.ok(entry.prompts.length >= 5, `${entry.id} does not exercise a complete multi-turn lifecycle`);
  assert.ok(entry.evidence.length >= 4, `${entry.id} does not require enough user-visible evidence`);
  assert.match(entry.prompts.join(" "), /close/i, `${entry.id} never closes its workspace`);
  assert.match(entry.prompts.join(" "), /reopen/i, `${entry.id} never reopens persisted work`);
}

const transactionTest = fs.readFileSync("rebuild/tests/nexus-production-transaction-windows.spec.js", "utf8");
assert.match(transactionTest, /naturalWidth/);
assert.match(transactionTest, /currentTime|readyState/);
assert.match(transactionTest, /source-backed|a\[href\^='http'\]/);

const productionBridge = fs.readFileSync("rebuild/browser/nexus-production-capability-bridge.js", "utf8");
assert.match(productionBridge, /async function handleLocalLifecycle/);
assert.match(productionBridge, /await handleLocalLifecycle\(command\)/);
assert.match(productionBridge, /No active music player is available to control/);
assert.match(productionBridge, /Number\(audio\.currentTime \|\| 0\) <= initialTime/);
assert.match(productionBridge, /Playback resumed and the player is advancing/);
assert.match(productionBridge, /media\.playback-verified/);
assert.match(productionBridge, /music source did not produce advancing playback/);
assert.doesNotMatch(productionBridge, /Playback resumed when permitted by the browser/);

const populationExtension = fs.readFileSync("rebuild/browser/nexus-content-population-extension.js", "utf8");
assert.match(populationExtension, /media\.playback-verified/);
assert.match(populationExtension, /music source did not produce advancing playback/);

for (const workflowPath of [
  ".github/workflows/nexus-clean-windows-certification.yml",
  ".github/workflows/nexus-windows-real-device-acceptance.yml"
]) {
  const workflow = fs.readFileSync(workflowPath, "utf8");
  assert.match(workflow, /nexus-genesis-clean-voice/);
  assert.match(workflow, /nexus\.clean\.health\.v1/);
  assert.doesNotMatch(workflow, /canonical AgriNexus health contract/);
}

console.log("Nexus production capability registry: PASS (13 lanes, complete lifecycle contract)");
