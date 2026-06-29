const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function functionSlice(source, name) {
  const start = source.indexOf(`function ${name}`);
  assert(start >= 0, `${name} must exist.`);
  const next = source.indexOf("\nfunction ", start + 1);
  return source.slice(start, next > start ? next : source.length);
}

function runFap6SafeLocalToolLayerQa() {
  const app = read("public", "app.js");
  const styles = read("public", "styles.css");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const renderer = functionSlice(app, "renderAssistantRuntimePreviewCardMarkup");
  const handler = functionSlice(app, "handleAssistantRuntimeLocalToolClick");
  const copyBuilder = functionSlice(app, "assistantRuntimeLocalToolText");

  [
    "data-nexus-assistant-runtime-local-tools=\"true\"",
    "data-nexus-assistant-runtime-local-tool=\"copy-preview\"",
    "data-nexus-assistant-runtime-local-tool=\"clear-context\"",
    "data-nexus-assistant-runtime-local-tool=\"restart-task\"",
    "Copy preview text",
    "Clear preview",
    "Restart task"
  ].forEach(term => assert(renderer.includes(term), `FAP6 renderer must include safe local tool control: ${term}.`));

  assert(renderer.includes("artifactPreviews") && renderer.includes("artifactPreviews.length"), "FAP6 local tools must appear only when safe artifacts exist.");
  const buttonCount = (renderer.match(/<button/g) || []).length;
  const followUpCount = (renderer.match(/<button[^>]+data-nexus-assistant-runtime-follow-up/g) || []).length;
  const localToolCount = (renderer.match(/<button[^>]+data-nexus-assistant-runtime-local-tool/g) || []).length;
  assert.equal(buttonCount, followUpCount + localToolCount, "FAP6 preview buttons must be limited to follow-up chips and safe local tools.");

  [
    "navigator.clipboard",
    "writeText",
    "clearAssistantRuntimePreviewCard",
    "safe-local-tool-restart",
    "runStandardUserAssistantRuntimePreview",
    "no action was taken",
    "No provider, message, call, payment, booking, or location action was started."
  ].forEach(term => assert(handler.includes(term), `FAP6 handler must include guarded local tool behavior: ${term}.`));

  [
    "runWorkflowAction",
    "openWorkflowModal",
    "goSection",
    "activateSectionFromButton",
    "mutate(",
    "window.open",
    "location.href",
    "navigator.geolocation",
    "getCurrentPosition",
    "watchPosition",
    "getUserMedia",
    "localStorage.setItem",
    "sessionStorage.setItem",
    "pendingAction",
    "providerHandoffAllowed = true",
    "executionAuthority = true"
  ].forEach(term => assert(!handler.includes(term), `FAP6 local tool handler must not include unsafe behavior: ${term}.`));

  [
    "Nexus preview:",
    "Safety: read-only preview; no action has been taken.",
    "Plan steps:",
    "Safe artifact previews:"
  ].forEach(term => assert(copyBuilder.includes(term), `FAP6 copy builder must include safe text field: ${term}.`));

  const bindStart = app.indexOf("document.addEventListener(\"click\", async event => {");
  assert(bindStart >= 0, "FAP6 global click binding must exist.");
  const bindSnippet = app.slice(bindStart, bindStart + 260);
  assert(bindSnippet.includes("await handleAssistantRuntimeLocalToolClick(event)"), "FAP6 local tools must be handled before workflow routing.");
  assert(bindSnippet.indexOf("handleAssistantRuntimeLocalToolClick") < bindSnippet.indexOf("handleAssistantRuntimeFollowUpClick"), "FAP6 local tools must run before follow-up/workflow routing.");

  [
    ".nexus-assistant-runtime-local-tools",
    ".nexus-assistant-runtime-local-tools button"
  ].forEach(term => assert(styles.includes(term), `FAP6 styles must include ${term}.`));

  assert.equal(
    pkg.scripts["qa:nexus-fap6-safe-local-tool-layer"],
    "node scripts/nexus-fap6-safe-local-tool-layer-qa.js",
    "FAP6 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-fap6-safe-local-tool-layer-qa.js"), "FAP6 QA must be wired into local-safe suites.");

  console.log(JSON.stringify({
    safeLocalTools: ["copy-preview", "clear-context", "restart-task"],
    clipboardFeatureDetected: true,
    storageWrites: false,
    workflowRouting: false,
    providerHandoff: false,
    backendActionWrite: false
  }, null, 2));
  console.log("[nexus-fap6-safe-local-tool-layer-qa] passed");
}

if (require.main === module) {
  try {
    runFap6SafeLocalToolLayerQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runFap6SafeLocalToolLayerQa
});
