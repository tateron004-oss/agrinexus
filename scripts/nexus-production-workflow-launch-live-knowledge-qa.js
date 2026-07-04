const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const app = read("public/app.js");
const styles = read("public/styles.css");
const server = read("server.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function excludes(source, token, label) {
  assert(!source.includes(token), `${label} must not include ${token}`);
}

[
  "function renderNexusActiveWorkflowWorkspace()",
  "id=\"nexus-workspace\"",
  "data-nexus-workspace=\"true\"",
  "data-nexus-active-workflow",
  "data-testid=\"nexus-workflow-launch-status\"",
  "Opened in active workspace",
  "function openNexusWorkflow(workflowId, options = {})",
  "function focusNexusActiveWorkflow(options = {})",
  "function scheduleNexusActiveWorkflowFocus(options = {})",
  "workspace.scrollIntoView?.({ block: \"start\"",
  "heading?.focus?.({ preventScroll: true })"
].forEach(token => includes(app, token, `active workspace ${token}`));

[
  "data-nexus-command-center-submit",
  "data-nexus-mode-shortcut",
  "source: \"mode-click\"",
  "source: \"typed-command\"",
  "source: \"command-submit\"",
  "source: \"delegated-mode-click\"",
  "source: \"voice-command\"",
  "source: \"voice-workflow-launch\""
].forEach(token => includes(app, token, `launch source ${token}`));

[
  "\"payment-gate\"",
  "\"booking-gate\"",
  "\"dispatch-gate\"",
  "title: \"Payment Gate\"",
  "title: \"Booking Gate\"",
  "title: \"Dispatch Gate\"",
  "title: \"Logistics Request\"",
  "Nexus does not process payments",
  "Nexus does not book appointments",
  "Nexus does not dispatch emergency help",
  "Nexus does not book transport",
  "return \"payment-gate\"",
  "return \"booking-gate\"",
  "return \"dispatch-gate\"",
  "return \"logistics\""
].forEach(token => includes(app, token, `workflow gate routing ${token}`));

[
  "isNexusLiveKnowledgeQuestion(command)",
  "research|source-backed",
  "if (isNexusLiveKnowledgeQuestion(text)) return false;",
  "runNexusKnowledgeQuery(command)",
  "workflow: \"live-knowledge\"",
  "action: \"research\"",
  "/api/nexus/live-knowledge/query",
  "data-testid=\"nexus-live-knowledge-provider-used\"",
  "data-testid=\"nexus-live-knowledge-provider-error\"",
  "data-testid=\"nexus-live-knowledge-missing-env\"",
  "data-testid=\"nexus-knowledge-citations\"",
  "No citations are shown because live retrieval is not configured or did not return citable sources."
].forEach(token => includes(app, token, `live knowledge UI ${token}`));

[
  "/api/health",
  "/api/nexus/production/status",
  "/api/nexus/live-knowledge/status",
  "/api/nexus/live-knowledge/query",
  "missingEnv",
  "noSecretValuesReturned",
  "provider-error"
].forEach(token => includes(server, token, `production/live route ${token}`));

[
  "nexus-workflow-focus-ring",
  ".nexus-workflow-launch-status",
  "box-shadow:",
  "Opened in active workspace"
].forEach(token => includes(`${styles}\n${app}`, token, `workspace focus styling ${token}`));

[
  "payment processed successfully",
  "appointment accepted by provider",
  "refill approved by pharmacy",
  "emergency dispatched successfully",
  "provider accepted this request",
  "message sent successfully without confirmation",
  "live provider connected and completed"
].forEach(token => {
  excludes(app, token, `app fake execution claim ${token}`);
  excludes(server, token, `server fake execution claim ${token}`);
});

[
  "TWILIO_AUTH_TOKEN=",
  "TAVILY_API_KEY=",
  "BRAVE_SEARCH_API_KEY=",
  "EXA_API_KEY=",
  "SMTP_PASS="
].forEach(token => {
  excludes(app, token, `frontend secret exposure ${token}`);
  excludes(server, token, `server response secret exposure ${token}`);
});

assert.strictEqual(
  packageJson.scripts["qa:nexus-production-workflow-launch-live-knowledge"],
  "node scripts/nexus-production-workflow-launch-live-knowledge-qa.js",
  "package alias should run production workflow launch/live knowledge QA"
);
includes(qaSuite, "scripts/nexus-production-workflow-launch-live-knowledge-qa.js", "qa suite should include production workflow launch/live knowledge QA");

console.log("nexus-production-workflow-launch-live-knowledge QA passed");
