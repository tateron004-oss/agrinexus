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

const docName = "NEXUS_SPRINT_D8_CONTROLLED_STAGED_ACTION_PREVIEW_CLOSEOUT.md";
const qaName = "nexus-sprint-d8-controlled-staged-action-preview-closeout-qa.js";

assert(exists("docs", docName), "Sprint D8 closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint D8 QA script must exist.");

const doc = read("docs", docName);
const app = read("public", "app.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint D8",
  "a2b304dc072175d0ef437bba7417a4921ade9b14",
  "audit train ended at AO3",
  "D1",
  "D2",
  "D3",
  "D4",
  "D5",
  "D6",
  "D7",
  "D8",
  "NEXUS_CONTROLLED_STAGED_ACTIONS_ENABLED",
  "hidden mount remains hidden",
  "hidden mount remains empty",
  "no staged preview controls appear",
  "no provider handoff occurs",
  "no permission prompt occurs",
  "no backend write occurs",
  "no storage write occurs",
  "no network call occurs",
  "no pending real-world action is created",
  "reviewOnly: true",
  "requiresUserApproval: true",
  "executionAuthority: false",
  "providerHandoffAllowed: false",
  "pendingActionCreationAllowed: false",
  "backendWriteAllowed: false",
  "networkSideEffectAllowed: false",
  "storageSideEffectAllowed: false",
  "permissionRequestAllowed: false",
  "externalNavigationAllowed: false",
  "Evidence & Verification",
  "source packet requirement",
  "Review only - no action has been taken.",
  "node server.js",
  "http://127.0.0.1:4182/",
  "Start as User",
  "db.json",
  "restored before commit",
  "Sprint E1 - Staged Action Approval Audit Product Boundary",
  "live execution remains blocked"
], "D8 closeout doc");

[
  "docs/NEXUS_SPRINT_D1_CONTROLLED_ACTION_STAGING_PRODUCT_BOUNDARY.md",
  "docs/NEXUS_SPRINT_D2_INERT_STAGED_ACTION_CONTRACT.md",
  "docs/NEXUS_SPRINT_D3_FIXTURE_ONLY_STAGED_ACTION_HARNESS.md",
  "docs/NEXUS_SPRINT_D4_STAGED_ACTION_EVIDENCE_ACCOUNTABILITY_MAPPING.md",
  "docs/NEXUS_SPRINT_D5_CONTROLLED_STAGED_ACTIONS_FLAG_OFF_RUNTIME_REGRESSION.md",
  "docs/NEXUS_SPRINT_D6_FLAG_GATED_STAGED_ACTION_PREVIEW.md",
  "docs/NEXUS_SPRINT_D7_FLAG_GATED_STAGED_ACTION_PREVIEW_BROWSER_VALIDATION.md"
].forEach(relative => assert(fs.existsSync(path.join(root, relative)), `D8 requires prior Sprint D artifact: ${relative}`));

[
  "scripts/nexus-sprint-d1-controlled-action-staging-product-boundary-qa.js",
  "scripts/nexus-sprint-d2-inert-staged-action-contract-qa.js",
  "scripts/nexus-sprint-d3-staged-action-harness-qa.js",
  "scripts/nexus-sprint-d4-staged-action-evidence-accountability-mapping-qa.js",
  "scripts/nexus-sprint-d5-controlled-staged-actions-flag-off-runtime-regression-qa.js",
  "scripts/nexus-sprint-d6-flag-gated-staged-action-preview-qa.js",
  "scripts/nexus-sprint-d7-flag-gated-staged-action-preview-browser-validation-qa.js"
].forEach(relative => assert(qaSuite.includes(relative), `D8 requires prior Sprint D QA in qa-suite: ${relative}`));

assertIncludes(app, [
  "function isControlledStagedActionPreviewFlagEnabled",
  "function buildControlledStagedActionPreviewFromReadiness",
  "function paintControlledStagedActionPreview",
  "$(\"#nexus-controlled-low-risk-renderer-root\")",
  "executionAuthority: false",
  "providerHandoffAllowed: false",
  "pendingActionCreationAllowed: false",
  "backendWriteAllowed: false",
  "networkSideEffectAllowed: false",
  "storageSideEffectAllowed: false",
  "permissionRequestAllowed: false",
  "externalNavigationAllowed: false"
], "D6 staged preview runtime boundary");

const alias = "qa:nexus-sprint-d8-controlled-staged-action-preview-closeout";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint D8 QA.");

console.log("[nexus-sprint-d8-controlled-staged-action-preview-closeout-qa] passed");
