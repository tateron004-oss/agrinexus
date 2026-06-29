const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function extractFunction(source, name) {
  const start = source.indexOf(`function ${name}`);
  assert(start >= 0, `${name} must exist.`);
  const next = source.indexOf("\nfunction ", start + 1);
  return source.slice(start, next > start ? next : undefined);
}

function runNlu3FollowUpChipRefinementQa() {
  const app = read("public", "app.js");
  const styles = read("public", "styles.css");
  const packageJson = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  assert(app.includes("NEXUS_ASSISTANT_SAFE_FOLLOW_UP_CHIPS"), "NLU3 safe follow-up chip vocabulary must exist.");
  [
    "Explain this",
    "Compare sources",
    "Make a checklist",
    "Show training options",
    "Narrow results",
    "Show entry-level options",
    "Draft questions I should ask",
    "What should I do next?"
  ].forEach(label => {
    assert(app.includes(`"${label}"`), `Safe follow-up chip must be present: ${label}`);
  });

  [
    "\\bcall\\b",
    "\\bmessage\\b",
    "\\bapply\\b",
    "\\bbuy\\b",
    "\\bbook\\b",
    "\\bpay\\b",
    "\\bdispatch\\b",
    "\\bsend\\s+(my\\s+)?location\\b",
    "\\bsubmit\\b"
  ].forEach(pattern => {
    assert(app.includes(pattern), `Blocked follow-up chip pattern must be present: ${pattern}`);
  });

  assert(app.includes("data-nexus-assistant-runtime-follow-up"), "Follow-up chips must render as identifiable controls.");
  assert(app.includes("isSafeAssistantRuntimeFollowUpChip"), "Follow-up chips must be sanitized before rendering and clicking.");
  assert(app.includes("defaultAssistantRuntimeFollowUps"), "NLU3 must add provider-aware follow-up defaults.");
  assert(app.includes("userPrompt: String(safeResponse.userPrompt"), "Preview card must keep previous prompt context for refinement.");

  const handler = extractFunction(app, "handleAssistantRuntimeFollowUpClick");
  assert(handler.includes("runStandardUserAssistantRuntimePreview"), "Follow-up chips must route through the read-only preview endpoint.");
  assert(handler.includes("safe-follow-up-chip"), "Follow-up chip source must be labeled for auditability.");
  assert(handler.includes("isSafeAssistantRuntimeFollowUpChip"), "Follow-up click handler must reject blocked chips.");
  [
    "runWorkflowAction",
    "openWorkflowModal",
    "goSection",
    "activateSectionFromButton",
    "mutate(",
    "window.location",
    "navigator.geolocation",
    "getUserMedia"
  ].forEach(forbidden => {
    assert(!handler.includes(forbidden), `Follow-up click handler must not call ${forbidden}.`);
  });

  const bindStart = app.indexOf("document.addEventListener(\"click\", async event => {");
  assert(bindStart >= 0, "Global click binding must exist.");
  const bindSnippet = app.slice(bindStart, bindStart + 220);
  assert(bindSnippet.includes("handleAssistantRuntimeFollowUpClick(event)"), "Follow-up click handler must be registered before workflow routing.");

  const renderer = extractFunction(app, "renderAssistantRuntimePreviewCardMarkup");
  [
    "Call",
    "Message",
    "Apply",
    "Buy",
    "Book",
    "Pay",
    "Dispatch",
    "Send location",
    "Submit"
  ].forEach(label => {
    assert(!renderer.includes(`>${label}<`), `Renderer must not include blocked follow-up chip: ${label}`);
  });
  assert(renderer.includes("data-read-only=\"true\""), "Preview card read-only attribute must remain.");
  assert(renderer.includes("data-execution-authority=\"false\""), "Preview card execution authority must remain false.");
  assert(renderer.includes("data-provider-handoff=\"false\""), "Preview card provider handoff must remain false.");

  assert(styles.includes(".nexus-assistant-runtime-preview-followups button"), "Follow-up chip buttons must have compact styling.");
  assert.equal(
    packageJson.scripts["qa:nexus-nlu3-follow-up-chip-refinement"],
    "node scripts/nexus-nlu3-follow-up-chip-refinement-qa.js",
    "NLU3 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-nlu3-follow-up-chip-refinement-qa.js"), "NLU3 QA must be wired into safe suites.");

  console.log(JSON.stringify({
    safeFollowUpChips: 8,
    blockedFollowUpPatterns: 9,
    clickPath: "read-only-preview-endpoint",
    workflowExecutionHooks: false,
    providerHandoff: false,
    backendWrite: false
  }, null, 2));
  console.log("[nexus-nlu3-follow-up-chip-refinement-qa] passed");
}

if (require.main === module) {
  runNlu3FollowUpChipRefinementQa();
}

module.exports = Object.freeze({
  runNlu3FollowUpChipRefinementQa
});
