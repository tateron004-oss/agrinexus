const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertIncludes(source, terms, label) {
  for (const term of terms) {
    assert(source.includes(term), `${label} must include: ${term}`);
  }
}

const docName = "NEXUS_SPRINT_C41_SOURCE_BACKED_AGRICULTURE_PREVIEW_FLAG_OFF_REGRESSION_GUARD.md";
const moduleName = "nexus-sprint-c41-source-backed-agriculture-preview-flag.js";
const qaName = "nexus-sprint-c41-source-backed-agriculture-preview-flag-off-regression-qa.js";
const flagName = "NEXUS_SOURCE_BACKED_AGRICULTURE_PREVIEW_ENABLED";
const noExecutionFields = [
  "executionAllowed",
  "providerHandoffAllowed",
  "callsAllowed",
  "messagesAllowed",
  "paymentsAllowed",
  "marketplaceTransactionAllowed",
  "locationAllowed",
  "cameraAllowed",
  "medicalWorkflowAllowed",
  "pharmacyWorkflowAllowed",
  "emergencyWorkflowAllowed",
  "backendWriteAllowed",
  "pendingActionAllowed",
  "liveLookupAllowed",
  "networkAllowed",
  "storageWriteAllowed",
  "externalNavigationAllowed"
];

assert(exists("docs", docName), "Sprint C41 flag-off regression doc must exist.");
assert(exists("public", moduleName), "Sprint C41 flag contract module must exist.");
assert(exists("scripts", qaName), "Sprint C41 flag-off regression QA must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const contract = require(path.join(root, "public", moduleName));

assertIncludes(doc, [
  "Current HEAD: `6372c83c2c72f0b42290f410f8f30022c08f98d9`",
  "Sprint C40",
  flagName,
  moduleName,
  "resolveSourceBackedAgriculturePreviewFlag(input)",
  "defaults to disabled",
  "no visible preview",
  "no runtime import",
  "No browser validation is required for Sprint C41",
  "Sprint C42 Readiness Recommendation"
], "Sprint C41 doc");

assert(contract.CONTRACT_VERSION === "nexus.sprintC41.sourceBackedAgriculturePreviewFlag.v1", "C41 contract version must be stable.");
assert(contract.FLAG_NAME === flagName, "C41 flag name must match canonical flag.");
assert(typeof contract.resolveSourceBackedAgriculturePreviewFlag === "function", "C41 resolver must exist.");

const defaultResult = contract.resolveSourceBackedAgriculturePreviewFlag();
assert(defaultResult.enabled === false, "C41 default result must be disabled.");
assert(defaultResult.disabled === true, "C41 default result must report disabled true.");
assert(defaultResult.activationSource === "default_false", "C41 default result must use default_false activation source.");
assert(defaultResult.visiblePreviewAllowed === false, "C41 default result must not allow visible preview.");
assert(defaultResult.reviewOnly === true, "C41 result must be review-only.");

[
  null,
  false,
  true,
  "true",
  1,
  0,
  [],
  { [flagName]: false },
  { [flagName]: "true" },
  { [flagName]: 1 },
  { otherFlag: true }
].forEach((input, index) => {
  const result = contract.resolveSourceBackedAgriculturePreviewFlag(input);
  assert(result.enabled === false, `C41 malformed/default input ${index} must stay disabled.`);
  assert(result.visiblePreviewAllowed === false, `C41 malformed/default input ${index} must not allow preview.`);
});

const enabledResult = contract.resolveSourceBackedAgriculturePreviewFlag({ [flagName]: true });
assert(enabledResult.enabled === true, "C41 explicit boolean true must be the only enablement input.");
assert(enabledResult.disabled === false, "C41 explicit boolean true must report disabled false.");
assert(enabledResult.activationSource === "explicit_boolean_config", "C41 explicit true must use explicit_boolean_config activation source.");
assert(enabledResult.visiblePreviewAllowed === true, "C41 explicit true may allow future visible preview in a later sprint.");

[defaultResult, enabledResult].forEach((result, index) => {
  for (const field of noExecutionFields) {
    assert(result[field] === false, `C41 result ${index} must keep ${field} false.`);
    assert(doc.includes(`\`${field}\``), `C41 doc must document permanent no-execution field ${field}.`);
  }
  assert(result.noActionDisclosure === "No action has been taken.", `C41 result ${index} must preserve no-action disclosure.`);
});

[
  "localStorage",
  "sessionStorage",
  "fetch(",
  "XMLHttpRequest",
  "WebSocket",
  "EventSource",
  "navigator.geolocation",
  "navigator.mediaDevices",
  "window.open",
  "location.href",
  "document.createElement",
  "addEventListener",
  "postMessage",
  "confirm(",
  "alert("
].forEach(fragment => {
  assert(!moduleSource.includes(fragment), `C41 module must not use side-effect API fragment: ${fragment}`);
});

assert(!index.includes(moduleName), "public/index.html must not load C41 flag module.");
assert(!app.includes(moduleName), "public/app.js must not reference C41 flag module.");
assert(!server.includes(moduleName), "server.js must not explicitly inject or special-case C41 flag module.");
assert(!index.includes(flagName), "public/index.html must not reference C41 flag.");
assert(!app.includes(flagName), "public/app.js must not reference C41 flag.");
assert(!server.includes(flagName), "server.js must not reference C41 flag.");

const alias = "qa:nexus-sprint-c41-source-backed-agriculture-preview-flag-off-regression";
const command = `node scripts/${qaName}`;
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint C41 QA.");

console.log("[nexus-sprint-c41-source-backed-agriculture-preview-flag-off-regression-qa] passed");
