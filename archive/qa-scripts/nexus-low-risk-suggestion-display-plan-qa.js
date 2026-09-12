const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const planPath = path.join(root, "docs", "NEXUS_LOW_RISK_SUGGESTION_DISPLAY_PLAN.md");
const appPath = path.join(root, "public", "app.js");
const serverPath = path.join(root, "server.js");
const registryPath = path.join(root, "docs", "nexus-tool-registry.v1.json");

assert(fs.existsSync(planPath), "low-risk suggestion display plan must exist");

const plan = fs.readFileSync(planPath, "utf8");
const app = fs.readFileSync(appPath, "utf8");
const server = fs.readFileSync(serverPath, "utf8");
const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));

const eligibleIds = [
  "workforce.training",
  "workforce.job_pathways",
  "workforce.field_support",
  "learning.start",
  "marketplace.agritrade",
  "agriculture.help"
];

for (const id of eligibleIds) {
  assert(plan.includes(id), `plan must document eligible selectedToolId ${id}`);
}

const labels = [
  "Open Training",
  "View Job Pathways",
  "View Field Support",
  "Open Learning",
  "Browse AgriTrade",
  "Get Agriculture Help"
];

for (const label of labels) {
  assert(plan.includes(label), `plan must document safe label "${label}"`);
}

const exclusions = [
  /health intake/i,
  /telehealth, video, or camera/i,
  /provider calls or outbound calls/i,
  /emergency health/i,
  /map or location permission/i,
  /sell crop, order, payment, or message actions/i,
  /job application submission/i,
  /logistics dispatch/i,
  /outbound notifications or messages/i,
  /document sharing or exporting/i,
  /admin controls/i,
  /voice provider activation/i,
  /live integrations/i,
  /drone scans/i
];

for (const pattern of exclusions) {
  assert.match(plan, pattern, `plan must document exclusion ${pattern}`);
}

const requiredRules = [
  /user must click/i,
  /user-click-required/i,
  /Metadata never opens workflows directly/i,
  /Metadata never executes actions/i,
  /Metadata never stages pending actions/i,
  /Metadata never confirms actions/i,
  /Existing workflow\/button handlers remain authoritative/i,
  /No suggestion claims completion/i,
  /suggestion disappears or updates on the next prompt/i
];

for (const pattern of requiredRules) {
  assert.match(plan, pattern, `plan must document safe UI rule ${pattern}`);
}

const unsafeWording = [
  "I opened...",
  "I submitted...",
  "I contacted...",
  "I dispatched...",
  "I diagnosed...",
  "I used your location...",
  "Payment processed...",
  "Application submitted..."
];

for (const phrase of unsafeWording) {
  assert(plan.includes(phrase), `plan must document prohibited wording "${phrase}"`);
}

assert.match(plan, /Phase 8C: Audit\/spec only/i, "plan must keep Phase 8C audit/spec only");
assert.match(plan, /Phase 8D: Hidden\/display-off suggestion builder helper/i, "plan must document hidden helper phase");
assert.match(plan, /Phase 8G: Level 2 user-click-required suggestions/i, "plan must document later user-click phase");
assert.match(plan, /Nexus can suggest a safe next place to go, but you choose it/i, "plan must include safe demo framing");

assert.ok(!server.includes("nexus-tool-registry.v1.json"), "server.js must not reference static registry JSON at runtime");
assert.ok(!app.includes("nexus-tool-registry.v1.json"), "public/app.js must not reference static registry JSON at runtime");
assert.match(registry.runtimeStatus || "", /static|spec/i, "static registry must remain static/spec-only");
assert.match(registry.warning || "", /not runtime-authoritative/i, "static registry must remain non-authoritative");

assert.match(app, /function observeAgentActionMetadata/, "frontend may observe metadata.agentAction");
assert.match(app, /agentAction is observation-only and non-authoritative/i, "frontend must document observation-only boundary");
assert.match(app, /Never execute, route, confirm, stage, open workflows,[\s\S]*or trigger modals from this metadata/i, "frontend must keep no-execute/no-route guard");
const helperStart = app.indexOf("function observeAgentActionMetadata");
const helperEnd = app.indexOf("const countryLanguageMap", helperStart);
assert(helperStart >= 0 && helperEnd > helperStart, "frontend observation helper body should be extractable");
const helperBody = app.slice(helperStart, helperEnd);
const forbiddenHelperCalls = [
  "openWorkflowModal",
  "openWorkflowByVoice",
  "executeWorkflowConfigFromVoice",
  "confirmPendingWorkflow",
  "stageAgentAction",
  "goSection(",
  "mutate(",
  "request(",
  "maybeDispatchConfirmedNativeCallHandoff"
];
for (const call of forbiddenHelperCalls) {
  assert(!helperBody.includes(call), `frontend observation helper must not call ${call}`);
}

assert.match(plan, /AgriNexus/, "plan must preserve AgriNexus compatibility");
assert.match(plan, /AgriTrade/, "plan must preserve AgriTrade compatibility");
assert.match(plan, /agriculture/i, "plan must preserve agriculture compatibility");
assert.match(`${server} ${app}`, /AgriNexus/, "runtime source must still contain AgriNexus compatibility");
assert.match(`${server} ${app}`, /AgriTrade/, "runtime source must still contain AgriTrade compatibility");
assert.match(`${server} ${app}`, /agriculture|farmer|crop/i, "runtime source must still contain agriculture/farm/crop compatibility");

console.log("Nexus low-risk suggestion display plan QA passed");
