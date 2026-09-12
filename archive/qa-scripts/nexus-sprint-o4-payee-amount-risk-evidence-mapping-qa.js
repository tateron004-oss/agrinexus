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

const docName = "NEXUS_SPRINT_O4_PAYEE_AMOUNT_RISK_EVIDENCE_MAPPING.md";
const moduleName = "nexus-payment-risk-evidence-mapping.js";
const qaName = "nexus-sprint-o4-payee-amount-risk-evidence-mapping-qa.js";

assert(exists("docs", docName), "O4 doc must exist.");
assert(exists("public", moduleName), "O4 mapping module must exist.");
assert(exists("scripts", qaName), "O4 QA must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const indexHtml = read("public", "index.html");
const appSource = read("public", "app.js");
const serverSource = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = JSON.parse(read("fixtures", "nexus", "payment-intents.json"));
const contract = require("../public/nexus-payment-intent-contract.js");
const mapper = require("../public/nexus-payment-risk-evidence-mapping.js");

[
  "payee identity requirement",
  "amount and currency requirement",
  "payment purpose requirement",
  "provider requirement",
  "consent requirement",
  "payee confirmation requirement",
  "final execution gate requirement",
  "All Sprint O payment intents remain `restricted`",
  "Ambiguous payees, amounts, currencies, methods, or purposes require clarification",
  "not move money",
  "pending real-world actions",
  "public/index.html",
  "public/app.js",
  "server.js"
].forEach(term => assert(doc.includes(term), `O4 doc must include: ${term}`));

[
  "derivePaymentRiskTier",
  "buildPaymentEvidenceRequirement",
  "mapPaymentRiskEvidence"
].forEach(exportName => assert.equal(typeof mapper[exportName], "function", `O4 module must export ${exportName}.`));

fixtures.forEach(fixture => {
  const result = mapper.mapPaymentRiskEvidence(fixture);
  assert.equal(result.validation.ok, true, `${fixture.fixtureId} must validate after mapping.`);
  assert.equal(result.validation.executionAllowed, false, `${fixture.fixtureId} must not execute after mapping.`);
  assert.equal(result.intent.riskTier, "restricted", `${fixture.fixtureId} must remain restricted.`);
  assert.equal(result.mapping.riskTier, "restricted", `${fixture.fixtureId} mapping must expose restricted risk.`);
  assert(result.mapping.evidenceRequirement.includes("visible user approval required"), `${fixture.fixtureId} must require visible user approval.`);
  assert(result.mapping.evidenceRequirement.includes("payee confirmation required"), `${fixture.fixtureId} must require payee confirmation.`);
  assert(result.mapping.evidenceRequirement.includes("final execution gate required"), `${fixture.fixtureId} must require final gate.`);
  assert(result.mapping.evidenceRequirement.includes("audit-ready state required"), `${fixture.fixtureId} must require audit-ready state.`);
  assert.equal(result.intent.payeeConfirmationRequired, true, `${fixture.fixtureId} must require payee confirmation.`);
  assert.equal(result.intent.userApprovalRequired, true, `${fixture.fixtureId} must require user approval.`);
  assert.equal(result.intent.finalExecutionGateRequired, true, `${fixture.fixtureId} must require final execution gate.`);
  assert.equal(result.intent.executionAuthority, false, `${fixture.fixtureId} must keep executionAuthority false.`);
  assert.equal(result.mapping.executionAllowed, false, `${fixture.fixtureId} mapping must not allow execution.`);
  assert.equal(result.mapping.paymentAllowed, false, `${fixture.fixtureId} mapping must not allow payment.`);
  assert.equal(result.mapping.walletTransferAllowed, false, `${fixture.fixtureId} mapping must not allow wallet transfer.`);
  assert.equal(result.mapping.checkoutAllowed, false, `${fixture.fixtureId} mapping must not allow checkout.`);
  assert.equal(result.mapping.credentialStorageAllowed, false, `${fixture.fixtureId} mapping must not allow credential storage.`);
  assert.equal(result.mapping.providerPaymentIntentAllowed, false, `${fixture.fixtureId} mapping must not allow provider payment intent.`);
  contract.BLOCKED_EXECUTION_CHANNELS.forEach(channel => {
    assert(result.intent.blockedExecutionChannels.includes(channel), `${fixture.fixtureId} must keep blocked channel ${channel}.`);
  });
});

const ambiguous = mapper.mapPaymentRiskEvidence(fixtures.find(fixture => fixture.fixtureId === "ambiguous-payment-request"));
assert.equal(ambiguous.mapping.clarificationRequired, true, "O4 ambiguous payment fixture must require clarification.");

[
  "writeFile",
  "appendFile",
  "fetch(",
  "XMLHttpRequest",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "navigator.geolocation",
  "mediaDevices",
  "window.open",
  "location.href",
  "sendBeacon",
  "setItem",
  "addEventListener",
  "createElement",
  "innerHTML",
  "db.json"
].forEach(term => assert(!moduleSource.includes(term), `O4 module must not include side-effect API: ${term}`));

[indexHtml, appSource, serverSource].forEach((source, index) => {
  const label = ["index.html", "app.js", "server.js"][index];
  assert(!source.includes(moduleName), `${label} must not load O4 mapper.`);
});

const alias = "qa:nexus-sprint-o4-payee-amount-risk-evidence-mapping";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include O4 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-o3-payment-harness-qa.js"), "O4 requires O3 QA to remain in qa-suite.");

console.log("[nexus-sprint-o4-payee-amount-risk-evidence-mapping-qa] passed");
