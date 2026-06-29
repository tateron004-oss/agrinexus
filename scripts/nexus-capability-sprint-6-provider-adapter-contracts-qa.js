const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const modulePath = path.join(root, "public", "nexus-provider-adapter-contracts.js");
const indexPath = path.join(root, "public", "index.html");
const appPath = path.join(root, "public", "app.js");
const serverPath = path.join(root, "server.js");
const pkgPath = path.join(root, "package.json");
const qaSuitePath = path.join(root, "scripts", "qa-suite.js");

assert(fs.existsSync(modulePath), "Sprint 6 provider adapter contract module should exist.");

const source = fs.readFileSync(modulePath, "utf8");
const index = fs.readFileSync(indexPath, "utf8");
const app = fs.readFileSync(appPath, "utf8");
const server = fs.readFileSync(serverPath, "utf8");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
const qaSuite = fs.readFileSync(qaSuitePath, "utf8");
const activeRuntime = `${index}\n${app}\n${server}`;

[
  "nexus-provider-adapter-contracts.v1",
  "communications.phone-call",
  "communications.whatsapp-message",
  "communications.sms-email",
  "maps.navigation",
  "marketplace.payment",
  "health.telehealth-rpm-rtm",
  "care-team.report-delivery",
  "configured",
  "connected",
  "supportsSimulation",
  "requiresConfirmation",
  "requiresPermission",
  "unavailableReason",
  "executionEnabled: false",
  "externalActionAllowed: false",
  "secretExposed: false",
  "rawAdapterCallsAllowed: false",
  "providerHandoffAllowed: false",
  "createNexusProviderAdapterReadinessSnapshot"
].forEach(term => assert(source.includes(term), `Provider adapter contracts should include ${term}`));

[
  "fetch(",
  "XMLHttpRequest",
  "WebSocket",
  "EventSource",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "navigator.geolocation",
  "getUserMedia",
  "window.open",
  "location.href",
  ".click()",
  "ACTION_CALL",
  "ACTION_DIAL",
  "tel:",
  "sms:",
  "mailto:",
  "wa.me",
  "api.whatsapp",
  "t.me/",
  "telegram.org",
  "process.env",
  "apiKey",
  "secretKey",
  "accessToken"
].forEach(forbidden => {
  assert(!source.includes(forbidden), `Provider adapter contract module must not introduce ${forbidden}`);
});

assert(!index.includes("nexus-provider-adapter-contracts.js"), "index.html must not load Sprint 6 provider adapter contracts.");
assert(!app.includes("NexusProviderAdapterContracts"), "app.js must not consume Sprint 6 provider adapter contracts.");
assert(!server.includes("NexusProviderAdapterContracts"), "server.js must not consume Sprint 6 provider adapter contracts.");
assert(!activeRuntime.includes("createNexusProviderAdapterReadinessSnapshot"), "active runtime must not call Sprint 6 adapter snapshot helpers.");

const contracts = require(modulePath);
assert.equal(contracts.PROVIDER_ADAPTER_CONTRACT_VERSION, "nexus-provider-adapter-contracts.v1", "contract version should be canonical.");

const adapters = contracts.getNexusProviderAdapterContracts();
assert.equal(adapters.length, 7, "Sprint 6 should define seven provider adapter categories.");

const requiredIds = new Set([
  "communications.phone-call",
  "communications.whatsapp-message",
  "communications.sms-email",
  "maps.navigation",
  "marketplace.payment",
  "health.telehealth-rpm-rtm",
  "care-team.report-delivery"
]);

for (const adapter of adapters) {
  assert(requiredIds.has(adapter.id), `unexpected adapter id ${adapter.id}`);
  assert.equal(adapter.configured, false, `${adapter.id} must default configured false`);
  assert.equal(adapter.connected, false, `${adapter.id} must default connected false`);
  assert.equal(adapter.requiresConfirmation, true, `${adapter.id} must require confirmation`);
  assert.equal(adapter.requiresPermission, true, `${adapter.id} must require permission`);
  assert.equal(adapter.executionEnabled, false, `${adapter.id} must not enable execution`);
  assert.equal(adapter.externalActionAllowed, false, `${adapter.id} must not allow external action`);
  assert.equal(adapter.secretExposed, false, `${adapter.id} must not expose secrets`);
  assert.equal(typeof adapter.unavailableReason, "string", `${adapter.id} should include unavailable reason`);
  assert(adapter.unavailableReason.length > 10, `${adapter.id} unavailable reason should be meaningful`);
}

const unknownStatus = contracts.getNexusProviderAdapterStatusById("missing.provider");
assert.equal(unknownStatus, null, "unknown provider adapter status should be null.");

const phoneStatus = contracts.getNexusProviderAdapterStatusById("communications.phone-call");
assert.equal(phoneStatus.providerType, "communications", "phone provider type should be communications.");
assert.equal(phoneStatus.executionEnabled, false, "phone provider execution should remain disabled.");

const snapshot = contracts.createNexusProviderAdapterReadinessSnapshot();
assert.equal(snapshot.executionAuthority, false, "readiness snapshot must not grant execution authority.");
assert.equal(snapshot.rawAdapterCallsAllowed, false, "readiness snapshot must block raw adapter calls.");
assert.equal(snapshot.providerHandoffAllowed, false, "readiness snapshot must block provider handoff.");
assert.equal(snapshot.externalActionAllowed, false, "readiness snapshot must block external action.");
assert.equal(snapshot.secretsExposed, false, "readiness snapshot must not expose secrets.");
assert.equal(snapshot.adapters.length, adapters.length, "snapshot should include all adapters.");

assert.equal(
  pkg.scripts["qa:nexus-capability-sprint-6-provider-adapter-contracts"],
  "node scripts/nexus-capability-sprint-6-provider-adapter-contracts-qa.js",
  "package alias should expose Sprint 6 QA."
);
assert(
  qaSuite.includes("scripts/nexus-capability-sprint-6-provider-adapter-contracts-qa.js"),
  "qa-suite should include Sprint 6 provider adapter contracts QA."
);

console.log("[nexus-capability-sprint-6-provider-adapter-contracts-qa] passed");
