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

const docName = "NEXUS_SPRINT_E8_USER_CONFIRMATION_PREVIEW_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-e8-user-confirmation-preview-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint E8 closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint E8 QA script must exist.");

const doc = read("docs", docName);
const app = read("public", "app.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint E8",
  "75cfb9fffea21cfc9984fcd5b5d4e1a042097683",
  "E1",
  "E2",
  "E3",
  "E4",
  "E5",
  "E6",
  "E7",
  "E8",
  "NEXUS_USER_CONFIRMATION_PREVIEW_ENABLED",
  "hidden mount remains hidden",
  "hidden mount remains empty for the E6 preview path",
  "no confirmation preview controls appear",
  "no provider handoff occurs",
  "no call or message is prepared or sent",
  "no payment is processed",
  "no location or camera permission prompt occurs",
  "no medical, pharmacy, or emergency action occurs",
  "no backend write occurs",
  "no storage write occurs",
  "no network call occurs",
  "no pending real-world action is created",
  "approvalIntentOnly: true",
  "requiresFinalExecutionGate: true",
  "executionAuthority: false",
  "providerHandoffAllowed: false",
  "callOrMessageAllowed: false",
  "paymentAllowed: false",
  "locationAllowed: false",
  "cameraAllowed: false",
  "medicalOrPharmacyAllowed: false",
  "emergencyAllowed: false",
  "backendWriteAllowed: false",
  "pendingActionCreationAllowed: false",
  "Evidence & Verification",
  "source packet requirement",
  "Your approval intent is not execution. A separate final execution gate is still required.",
  "node server.js",
  "http://127.0.0.1:4182/",
  "Start as User",
  "db.json",
  "restored before commit",
  "Sprint F1 - Approval Center Runtime Activation Readiness Gate",
  "live execution remains blocked"
], "E8 closeout doc");

[
  "docs/NEXUS_SPRINT_E1_USER_CONFIRMATION_PRODUCT_BOUNDARY.md",
  "docs/NEXUS_SPRINT_E2_INERT_CONFIRMATION_CONTRACT.md",
  "docs/NEXUS_SPRINT_E3_FIXTURE_ONLY_CONFIRMATION_HARNESS.md",
  "docs/NEXUS_SPRINT_E4_CONFIRMATION_EVIDENCE_AND_RISK_MAPPING.md",
  "docs/NEXUS_SPRINT_E5_CONFIRMATION_FLAG_OFF_REGRESSION_GUARD.md",
  "docs/NEXUS_SPRINT_E6_FLAG_GATED_CONFIRMATION_UI_PREVIEW.md",
  "docs/NEXUS_SPRINT_E7_FLAG_GATED_CONFIRMATION_UI_PREVIEW_BROWSER_VALIDATION.md"
].forEach(relative => assert(fs.existsSync(path.join(root, relative)), `E8 requires prior Sprint E artifact: ${relative}`));

[
  "scripts/nexus-sprint-e1-user-confirmation-product-boundary-qa.js",
  "scripts/nexus-sprint-e2-inert-confirmation-contract-qa.js",
  "scripts/nexus-sprint-e3-confirmation-harness-qa.js",
  "scripts/nexus-sprint-e4-confirmation-evidence-risk-mapping-qa.js",
  "scripts/nexus-sprint-e5-confirmation-flag-off-regression-guard-qa.js",
  "scripts/nexus-sprint-e6-flag-gated-confirmation-ui-preview-qa.js",
  "scripts/nexus-sprint-e7-flag-gated-confirmation-ui-preview-browser-validation-qa.js"
].forEach(relative => assert(qaSuite.includes(relative), `E8 requires prior Sprint E QA in qa-suite: ${relative}`));

assertIncludes(app, [
  "function isUserConfirmationPreviewFlagEnabled",
  "function buildUserConfirmationPreviewFromReadiness",
  "function renderUserConfirmationPreview",
  "function paintControlledStagedActionPreview",
  "$(\"#nexus-controlled-low-risk-renderer-root\")",
  "approvalIntentOnly: true",
  "requiresFinalExecutionGate: true",
  "executionAuthority: false",
  "providerHandoffAllowed: false",
  "callOrMessageAllowed: false",
  "paymentAllowed: false",
  "locationAllowed: false",
  "cameraAllowed: false",
  "medicalOrPharmacyAllowed: false",
  "emergencyAllowed: false",
  "backendWriteAllowed: false",
  "pendingActionCreationAllowed: false"
], "E6 confirmation preview runtime boundary");

const alias = "qa:nexus-sprint-e8-user-confirmation-preview-lane-closeout";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint E8 QA.");

console.log("[nexus-sprint-e8-user-confirmation-preview-lane-closeout-qa] passed");
