const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  protectedFields,
  loadFarmerModeFlagFixtures,
  validateFarmerModeFlagFixtures
} = require("./nexus-sprint-x3-farmer-mode-flag-contract-harness.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertIncludes(source, terms, label) {
  const normalizedSource = source.replace(/`/g, "");
  for (const term of terms) {
    assert(normalizedSource.includes(term), `${label} must include: ${term}`);
  }
}

const docName = "NEXUS_SPRINT_X3_FARMER_MODE_FLAG_CONTRACT_HARNESS.md";
const fixtureName = "farmer-mode-feature-flags.json";
const harnessName = "nexus-sprint-x3-farmer-mode-flag-contract-harness.js";
const qaName = "nexus-sprint-x3-farmer-mode-flag-contract-harness-qa.js";

assert(exists("docs", docName), "Sprint X3 harness doc must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint X3 fixture file must exist.");
assert(exists("scripts", harnessName), "Sprint X3 harness must exist.");
assert(exists("scripts", qaName), "Sprint X3 QA script must exist.");

const doc = read("docs", docName);
const fixtureSource = read("fixtures", "nexus", fixtureName);
const harnessSource = read("scripts", harnessName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadFarmerModeFlagFixtures();

assertIncludes(doc, [
  "Sprint X3",
  "40e42444eb91490aa590d32fe85303d21fd2b4f3",
  "fixture, harness, documentation, and QA only",
  "fixtures/nexus/farmer-mode-feature-flags.json",
  "scripts/nexus-sprint-x3-farmer-mode-flag-contract-harness.js",
  "farmerModeReviewAllowed: false",
  "sourceBackedFarmerGuidancePreviewAllowed: false",
  "farmerProfileSummaryPreviewAllowed: false",
  "cropFieldSupportPreviewAllowed: false",
  "agritradeReviewPreviewAllowed: false",
  "extensionEscalationPreviewAllowed: false",
  "farmerModeRuntimeAllowed: false",
  "liveFarmerModeRuntimeAllowed: false",
  "agricultureConnectorRuntimeAllowed: false",
  "marketSourceRetrievalRuntimeAllowed: false",
  "unsourcedAgronomicAdviceAllowed: false",
  "diagnosisClaimAllowed: false",
  "chemicalApplicationInstructionAllowed: false",
  "marketplaceTransactionAllowed: false",
  "paymentExecutionAllowed: false",
  "buyerSellerContactAllowed: false",
  "providerOrExtensionContactAllowed: false",
  "transportationDispatchAllowed: false",
  "emergencyDispatchAllowed: false",
  "locationSharingAllowed: false",
  "cameraActivationAllowed: false",
  "microphoneActivationAllowed: false",
  "medicalPharmacyExecutionAllowed: false",
  "identityAccountProfileActionAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "Sprint X4 - Farmer Mode Runtime Absence Regression Guard"
], "X3 harness doc");

assert.equal(fixtures.length, 4, "X3 fixture set must include exactly four flag fixtures.");
[
  "farmer-mode-default-off",
  "farmer-mode-flag-on-visible-only",
  "farmer-mode-unsafe-authority-attempt",
  "farmer-mode-flag-on-without-visible-permission"
].forEach(id => {
  assert(fixtures.some(fixture => fixture.fixtureId === id), `X3 fixture set must include ${id}`);
});

const result = validateFarmerModeFlagFixtures(fixtures);
assert.equal(result.ok, true, "X3 harness must validate fixtures successfully.");
assert.equal(result.count, 4, "X3 harness must report four fixtures.");

for (const term of [
  "\"executionAuthority\": true",
  "\"noExecution\": false",
  "\"farmerModeRuntimeAllowed\": true",
  "\"liveFarmerModeRuntimeAllowed\": true",
  "\"agricultureConnectorRuntimeAllowed\": true",
  "\"marketSourceRetrievalRuntimeAllowed\": true",
  "\"unsourcedAgronomicAdviceAllowed\": true",
  "\"diagnosisClaimAllowed\": true",
  "\"chemicalApplicationInstructionAllowed\": true",
  "\"marketplaceTransactionAllowed\": true",
  "\"paymentExecutionAllowed\": true",
  "\"buyerSellerContactAllowed\": true",
  "\"providerOrExtensionContactAllowed\": true",
  "\"transportationDispatchAllowed\": true",
  "\"emergencyDispatchAllowed\": true",
  "\"locationSharingAllowed\": true",
  "\"cameraActivationAllowed\": true",
  "\"microphoneActivationAllowed\": true"
]) {
  assert(fixtureSource.includes(term), `X3 fixture must include unsafe attempt term: ${term}`);
}

for (const fixture of fixtures) {
  assert(fixture.expected, `${fixture.fixtureId} must include expected values.`);
  for (const field of protectedFields) {
    assert.equal(fixture.expected[field], false, `${fixture.fixtureId} must expect ${field} false.`);
  }
  assert.equal(fixture.expected.noExecution, true, `${fixture.fixtureId} must expect noExecution true.`);
}

for (const term of [
  "writeFile",
  "appendFile",
  "rmSync",
  "unlinkSync",
  "fetch(",
  "XMLHttpRequest",
  "document.",
  "querySelector",
  "addEventListener",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "db.json",
  "open(",
  "window.location",
  "location.href",
  "navigator.geolocation",
  "mediaDevices",
  "window.nativeBridge",
  "nativeBridge.",
  "ACTION_CALL",
  "getUserMedia",
  "setItem",
  "postMessage",
  "openWorkflow(",
  "goSection(",
  "executeFarmerMode(",
  "executeMarketplaceSale(",
  "executeMarketplacePurchase(",
  "contactMarketplaceBuyer(",
  "contactMarketplaceSeller(",
  "shareFarmLocation(",
  "openCropCamera(",
  "dispatchFieldAgent("
]) {
  assert(!harnessSource.includes(term), `X3 harness must not include unsafe or mutating API: ${term}`);
}

const combinedRuntime = [index, app, server].join("\n");
for (const term of [
  "nexus-farmer-mode-feature-flag.js",
  "nexus-sprint-x3-farmer-mode-flag-contract-harness",
  "farmer-mode-feature-flags.json",
  "NEXUS_FARMER_MODE_VISIBLE_ENABLED",
  "NexusFarmerModeFeatureFlagContract",
  "normalizeFarmerModeFeatureFlagState",
  "isFarmerModeVisibleFeatureEnabled",
  "farmerModeFeatureFlag",
  "liveFarmerModeRuntime",
  "executeFarmerMode(",
  "executeMarketplaceSale(",
  "executeMarketplacePurchase(",
  "contactMarketplaceBuyer(",
  "contactMarketplaceSeller(",
  "shareFarmLocation(",
  "openCropCamera(",
  "dispatchFieldAgent("
]) {
  assert(!combinedRuntime.includes(term), `Runtime must not load X2/X3 flag harness artifact: ${term}`);
}

assert(exists("docs", "NEXUS_SPRINT_X1_FARMER_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md"), "X3 requires X1 readiness gate doc.");
assert(exists("docs", "NEXUS_SPRINT_X2_FARMER_MODE_FEATURE_FLAG_CONTRACT.md"), "X3 requires X2 feature flag contract doc.");
assert(exists("public", "nexus-farmer-mode-feature-flag.js"), "X3 requires X2 feature flag module.");

const alias = "qa:nexus-sprint-x3-farmer-mode-flag-contract-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint X3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-x1-farmer-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint X1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-x2-farmer-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint X2 QA.");

console.log("[nexus-sprint-x3-farmer-mode-flag-contract-harness-qa] passed");
