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

const docName = "NEXUS_SPRINT_D7_FLAG_GATED_STAGED_ACTION_PREVIEW_BROWSER_VALIDATION.md";
const qaName = "nexus-sprint-d7-flag-gated-staged-action-preview-browser-validation-qa.js";

assert(exists("docs", docName), "Sprint D7 browser validation doc must exist.");
assert(exists("scripts", qaName), "Sprint D7 QA script must exist.");

const doc = read("docs", docName);
const app = read("public", "app.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint D7",
  "0fbbb8c09fdf6921220f119e70778ec8d38fb415",
  "audit train ended at AO3",
  "node server.js",
  "http://127.0.0.1:4182/",
  "Start as User",
  "NEXUS_CONTROLLED_STAGED_ACTIONS_ENABLED",
  "Help me find agriculture training",
  "Teach me how irrigation works",
  "Show me farm jobs",
  "Browse AgriTrade",
  "I need help with crop issues",
  "Nexus, call John",
  "Send a WhatsApp message",
  "Show my location",
  "Open the camera",
  "Buy seeds",
  "Schedule an appointment",
  "Emergency help",
  "#nexus-controlled-low-risk-renderer-root",
  "aria-hidden=\"true\"",
  "data-visible-renderer-enabled=\"false\"",
  "data-execution-allowed=\"false\"",
  "data-provider-handoff=\"false\"",
  "data-permission-request=\"false\"",
  "data-nexus-controlled-staged-action-preview=\"true\"",
  "Browser console warning/error entries",
  "0",
  "db.json",
  "restored before commit",
  "no provider communication",
  "no D6 staged preview appeared",
  "review-only",
  "invisible by default"
], "D7 validation doc");

assertIncludes(app, [
  "function isControlledStagedActionPreviewFlagEnabled",
  "[\"NEXUS\", \"CONTROLLED\", \"STAGED\", \"ACTIONS\", \"ENABLED\"].join(\"_\")",
  "function buildControlledStagedActionPreviewFromReadiness",
  "function renderControlledStagedActionPreview",
  "function paintControlledStagedActionPreview",
  "$(\"#nexus-controlled-low-risk-renderer-root\")",
  "data-nexus-controlled-staged-action-preview=\"true\"",
  "data-execution-authority=\"false\"",
  "data-provider-handoff=\"false\"",
  "data-pending-action-creation=\"false\"",
  "data-network-side-effect=\"false\"",
  "Review only - no action has been taken."
], "D6 staged preview implementation");

const stagedPainterStart = app.indexOf("function paintControlledStagedActionPreview");
const stagedPainterEnd = app.indexOf("function isVisibleControlledActionConfirmationPrototypeReadiness", stagedPainterStart);
assert(stagedPainterStart >= 0 && stagedPainterEnd > stagedPainterStart, "D7 QA must inspect the D6 staged preview painter.");
const stagedPainter = app.slice(stagedPainterStart, stagedPainterEnd);
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
  assert(!stagedPainter.includes(forbidden), `D6 staged preview painter must not include side effect hook: ${forbidden}`);
});

const alias = "qa:nexus-sprint-d7-flag-gated-staged-action-preview-browser-validation";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint D7 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-d6-flag-gated-staged-action-preview-qa.js"), "D6 QA must remain in qa-suite.");

console.log("[nexus-sprint-d7-flag-gated-staged-action-preview-browser-validation-qa] passed");
