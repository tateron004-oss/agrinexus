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

const docName = "NEXUS_SPRINT_E7_FLAG_GATED_CONFIRMATION_UI_PREVIEW_BROWSER_VALIDATION.md";
const qaName = "nexus-sprint-e7-flag-gated-confirmation-ui-preview-browser-validation-qa.js";

assert(exists("docs", docName), "Sprint E7 browser validation doc must exist.");
assert(exists("scripts", qaName), "Sprint E7 QA script must exist.");

const doc = read("docs", docName);
const app = read("public", "app.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint E7",
  "f74dc546ccdef3de2eff07acf1c6a40afa07632e",
  "node server.js",
  "http://127.0.0.1:4182/",
  "Start as User",
  "NEXUS_USER_CONFIRMATION_PREVIEW_ENABLED",
  "Help me find agriculture training",
  "Teach me how irrigation works",
  "Show me farm jobs",
  "Browse AgriTrade",
  "I need help with crop issues",
  "#nexus-controlled-low-risk-renderer-root",
  "aria-hidden=\"true\"",
  "data-visible-renderer-enabled=\"false\"",
  "data-execution-allowed=\"false\"",
  "data-provider-handoff=\"false\"",
  "data-permission-request=\"false\"",
  "data-nexus-user-confirmation-preview=\"true\"",
  "Browser console warning/error entries",
  "0",
  "db.json",
  "restored before commit",
  "no new buttons, links, forms, provider handoff, permission prompt, storage write, network call, backend write, or pending real-world action",
  "approval-intent-only",
  "invisible by default"
], "E7 validation doc");

assertIncludes(app, [
  "let visibleUserConfirmationPreview = null;",
  "function isUserConfirmationPreviewFlagEnabled",
  "[\"NEXUS\", \"USER\", \"CONFIRMATION\", \"PREVIEW\", \"ENABLED\"].join(\"_\")",
  "return Boolean(root && root[flagName] === true);",
  "function buildUserConfirmationPreviewFromReadiness",
  "function renderUserConfirmationPreview",
  "function paintControlledStagedActionPreview",
  "$(\"#nexus-controlled-low-risk-renderer-root\")",
  "data-nexus-user-confirmation-preview=\"true\"",
  "data-approval-intent-only=\"true\"",
  "data-final-execution-gate-required=\"true\"",
  "data-execution-authority=\"false\"",
  "data-provider-handoff=\"false\"",
  "data-pending-action-creation=\"false\"",
  "Your approval intent is not execution. A separate final execution gate is still required."
], "E6 confirmation preview implementation");

const builderStart = app.indexOf("function buildUserConfirmationPreviewFromReadiness");
const rendererStart = app.indexOf("function renderUserConfirmationPreview");
const painterStart = app.indexOf("function paintControlledStagedActionPreview");
const clearStart = app.indexOf("function clearControlledActionPreview");
assert(builderStart >= 0 && rendererStart > builderStart, "E7 QA must inspect the E6 confirmation preview builder.");
assert(rendererStart >= 0 && painterStart > rendererStart, "E7 QA must inspect the E6 confirmation preview renderer.");
assert(painterStart >= 0 && clearStart > painterStart, "E7 QA must inspect the E6 controlled painter.");

const builder = app.slice(builderStart, rendererStart);
const renderer = app.slice(rendererStart, painterStart);
const painter = app.slice(painterStart, clearStart);

[
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
].forEach(term => assert(builder.includes(term), `E6 builder must preserve no-execution field: ${term}`));

[
  "<button",
  "<a ",
  "<form",
  "onclick",
  "href="
].forEach(forbidden => {
  assert(!renderer.includes(forbidden), `E6 renderer must not add interactive control: ${forbidden}`);
});

[
  "fetch(",
  "localStorage.setItem",
  "sessionStorage.setItem",
  "navigator.geolocation",
  "getUserMedia",
  "window.open",
  "location.href",
  "sendBeacon",
  "openWorkflow",
  "confirmPendingWorkflow",
  "stageAgentAction",
  "maybeDispatchConfirmedNativeCallHandoff"
].forEach(forbidden => {
  assert(!builder.includes(forbidden), `E6 builder must not include side effect hook: ${forbidden}`);
  assert(!renderer.includes(forbidden), `E6 renderer must not include side effect hook: ${forbidden}`);
  assert(!painter.includes(forbidden), `E6 painter must not include side effect hook: ${forbidden}`);
});

const alias = "qa:nexus-sprint-e7-flag-gated-confirmation-ui-preview-browser-validation";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint E7 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-e6-flag-gated-confirmation-ui-preview-qa.js"), "E6 QA must remain in qa-suite.");

console.log("[nexus-sprint-e7-flag-gated-confirmation-ui-preview-browser-validation-qa] passed");
