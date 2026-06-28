const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  PROTECTED_AGRITRADE_MARKETPLACE_MODE_FLAG_FIELDS,
  normalizeAgritradeMarketplaceModeFeatureFlagState
} = require("../public/nexus-agritrade-marketplace-mode-feature-flag.js");
const {
  fixturePath,
  protectedFields,
  loadAgritradeMarketplaceModeFlagFixtures,
  validateAgritradeMarketplaceModeFlagFixtures
} = require("./nexus-sprint-af3-agritrade-marketplace-mode-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_AF3_AGRITRADE_MARKETPLACE_MODE_FLAG_CONTRACT_HARNESS.md";
const qaName = "nexus-sprint-af3-agritrade-marketplace-mode-flag-contract-harness-qa.js";
const harnessName = "nexus-sprint-af3-agritrade-marketplace-mode-flag-contract-harness.js";
const fixtureName = "agritrade-marketplace-mode-feature-flags.json";

assert(exists("docs", docName), "Sprint AF3 harness doc must exist.");
assert(exists("scripts", harnessName), "Sprint AF3 harness script must exist.");
assert(exists("scripts", qaName), "Sprint AF3 QA script must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint AF3 fixtures must exist.");

const doc = read("docs", docName);
const harness = read("scripts", harnessName);
const fixturesSource = read("fixtures", "nexus", fixtureName);
const af2Doc = read("docs", "NEXUS_SPRINT_AF2_AGRITRADE_MARKETPLACE_MODE_FEATURE_FLAG_CONTRACT.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadAgritradeMarketplaceModeFlagFixtures();

assert.equal(fixturePath, path.join(root, "fixtures", "nexus", fixtureName));
assert.deepEqual(protectedFields, Array.from(PROTECTED_AGRITRADE_MARKETPLACE_MODE_FLAG_FIELDS));

assertIncludes(doc, [
  "Sprint AF3",
  "fb5cb73cdf97e189f3bdd474dd4a8e47d6e53056",
  "documentation, fixture, and deterministic QA only",
  "Added Artifacts",
  "Fixture Coverage",
  "Runtime Boundary",
  "Relationship To Sprint AF2",
  "Sprint AF4 - AgriTrade Marketplace Mode Runtime Absence Regression Guard"
], "AF3 harness doc");

assert(af2Doc.includes("Sprint AF3 - AgriTrade Marketplace Mode Flag Contract Harness"), "AF2 must recommend Sprint AF3.");
assert(fixturesSource.includes("agritrade-marketplace-mode-default-off"), "AF3 fixtures must include default-off case.");
assert(fixturesSource.includes("agritrade-marketplace-mode-flag-on-visible-only"), "AF3 fixtures must include visible-only case.");
assert(fixturesSource.includes("agritrade-marketplace-mode-unsafe-authority-attempt"), "AF3 fixtures must include unsafe authority attempt.");
assert(fixturesSource.includes("agritrade-marketplace-mode-flag-on-without-visible-permission"), "AF3 fixtures must include no-visible-permission case.");

const result = validateAgritradeMarketplaceModeFlagFixtures(fixtures);
assert.equal(result.ok, true, result.failures.join("\n"));
assert.equal(result.count, 4, "AF3 fixtures must remain complete.");

for (const fixture of fixtures) {
  const normalized = normalizeAgritradeMarketplaceModeFeatureFlagState(fixture.input);
  for (const field of protectedFields) {
    assert.equal(normalized[field], false, `${fixture.fixtureId} must keep ${field}=false.`);
    assert(doc.includes(`${field}: false`), `AF3 doc must document ${field}: false.`);
  }
  assert.equal(normalized.noExecution, true, `${fixture.fixtureId} must keep noExecution=true.`);
}

for (const term of [
  "document.",
  "querySelector",
  "addEventListener",
  "fetch(",
  "XMLHttpRequest",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "navigator.geolocation",
  "mediaDevices",
  "window.location",
  "location.href",
  "sendBeacon",
  "setItem",
  "postMessage",
  "window.nativeBridge",
  "nativeBridge.",
  "ACTION_CALL",
  "getUserMedia",
  "openWorkflow(",
  "goSection(",
  "executeMarketplacePurchase(",
  "executeMarketplaceSale(",
  "createMarketplaceOrder(",
  "acceptMarketplaceQuote(",
  "publishMarketplaceListing(",
  "contactMarketplaceBuyer(",
  "contactMarketplaceSeller(",
  "processMarketplacePayment(",
  "dispatchShipment(",
  "dispatchTransportation(",
  "dispatchEmergency(",
  "sharePatientLocation("
]) {
  assert(!harness.includes(term), `AF3 harness must not include runtime API: ${term}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  harnessName,
  fixtureName,
  "loadAgritradeMarketplaceModeFlagFixtures",
  "validateAgritradeMarketplaceModeFlagFixtures",
  "nexus-sprint-af3-agritrade-marketplace-mode-flag-contract-harness"
]) {
  assert(!runtime.includes(term), `Runtime must not load AF3 harness artifact: ${term}`);
}

const alias = "qa:nexus-sprint-af3-agritrade-marketplace-mode-flag-contract-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AF3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-af2-agritrade-marketplace-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AF2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-af1-agritrade-marketplace-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AF1 QA.");
assert(qaSuite.includes("scripts/nexus-agritrade-marketplace-mode-readiness-contract-qa.js"), "qa-suite must continue to include AgriTrade Marketplace Mode readiness QA.");

console.log("[nexus-sprint-af3-agritrade-marketplace-mode-flag-contract-harness-qa] passed");
