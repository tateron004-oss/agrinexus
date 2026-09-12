const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const runtime = require("../public/nexus-universal-navigation-runtime.js");
const runtimeSource = read("public/nexus-universal-navigation-runtime.js");
const app = read("public/app.js");
const index = read("public/index.html");
const docs = read("docs/NEXUS_UNIVERSAL_NAVIGATION_RUNTIME.md");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function excludesInsensitive(source, token, label) {
  assert(!source.toLowerCase().includes(token.toLowerCase()), `${label} must not include ${token}`);
}

assert(runtime && typeof runtime.route === "function", "runtime must expose route()");
assert(typeof runtime.globalExplanation === "function", "runtime must expose globalExplanation()");
assert(typeof runtime.workspaceExplanation === "function", "runtime must expose workspaceExplanation()");
assert(Array.isArray(runtime.WORKSPACES), "runtime must expose WORKSPACES array");

const browserLikeSandbox = { module: { exports: {} } };
browserLikeSandbox.globalThis = browserLikeSandbox;
vm.runInNewContext(runtimeSource, browserLikeSandbox, { filename: "nexus-universal-navigation-runtime.js" });
assert(
  browserLikeSandbox.NexusUniversalNavigationRuntime &&
    typeof browserLikeSandbox.NexusUniversalNavigationRuntime.route === "function",
  "runtime must publish NexusUniversalNavigationRuntime globally even when module.exports exists"
);

[
  "health-home",
  "chronic-care",
  "heat-risk",
  "patient-intake",
  "provider-referral-prep",
  "pharmacy-routing-prep",
  "mobile-clinic-routing-prep",
  "agriculture-home",
  "crop-support",
  "farm-profile",
  "irrigation-support",
  "pest-disease-support",
  "live-knowledge-agriculture",
  "drone-field-survey-prep",
  "marketplace-home",
  "buyer-workspace",
  "seller-workspace",
  "listing-workspace",
  "order-transaction-prep",
  "cancellation-add-on-prep",
  "dispute-escalation-prep",
  "logistics-home",
  "route-planning",
  "shipment-workspace",
  "delivery-confirmation",
  "tracking-status",
  "rural-access-map",
  "learning-home",
  "course-pathway",
  "learner-progress",
  "workforce-home",
  "applicant-support",
  "resume-interview-support",
  "employer-match-prep",
  "job-readiness",
  "drone-home",
  "mission-planner",
  "flight-readiness-checklist",
  "field-imaging-report",
  "drone-provider-blocked",
  "communications-home",
  "email-prep",
  "sms-prep",
  "whatsapp-prep",
  "notification-prep",
  "provider-activation-home",
  "credential-status",
  "service-readiness",
  "database-readiness",
  "live-knowledge-readiness",
  "maps-readiness",
  "payments-readiness",
  "telehealth-readiness",
  "logistics-provider-readiness",
  "drone-provider-readiness",
  "admin-review-home",
  "provider-queue",
  "marketplace-review",
  "health-review",
  "workforce-review",
  "receipts-audit"
].forEach(id => {
  const workspace = runtime.workspaceById(id);
  assert(workspace, `workspace ${id} must be registered`);
  [
    "id",
    "title",
    "shortDescription",
    "modeGroup",
    "routeTarget",
    "supportedCommands",
    "userCanDo",
    "userNeedsToProvide",
    "availableActions",
    "blockedActions",
    "providerRequirements",
    "safetyNotes",
    "examplePrompts",
    "statusLabel",
    "receiptType"
  ].forEach(key => assert(Object.prototype.hasOwnProperty.call(workspace, key), `workspace ${id} must include ${key}`));
  assert(workspace.blockedActions.some(action => /No hidden provider handoff/.test(action)), `workspace ${id} must include no-hidden-provider-handoff boundary`);
});

[
  ["I need chronic illness support", "chronic-care"],
  ["I have diabetes", "chronic-care"],
  ["I feel sick from heat", "heat-risk"],
  ["patient intake", "patient-intake"],
  ["I need a mobile clinic", "mobile-clinic-routing-prep"],
  ["I need a pharmacy", "pharmacy-routing-prep"],
  ["I have a crop problem", "crop-support"],
  ["my plants are sick", "crop-support"],
  ["irrigation help", "irrigation-support"],
  ["I want to buy", "buyer-workspace"],
  ["I want to sell", "seller-workspace"],
  ["create listing", "listing-workspace"],
  ["cancel order", "order-transaction-prep"],
  ["track shipment", "shipment-workspace"],
  ["plan route", "route-planning"],
  ["delivery status", "delivery-confirmation"],
  ["training", "learning-home"],
  ["resume", "workforce-home"],
  ["employer match", "workforce-home"],
  ["drone mission", "mission-planner"],
  ["flight checklist", "mission-planner"],
  ["prepare email", "email-prep"],
  ["prepare SMS", "sms-prep"],
  ["prepare WhatsApp", "whatsapp-prep"],
  ["phone call", "notification-prep"],
  ["provider readiness", "provider-activation-home"],
  ["database status", "provider-activation-home"],
  ["payment status", "provider-activation-home"],
  ["telehealth status", "provider-activation-home"],
  ["map provider status", "provider-activation-home"]
].forEach(([command, expected]) => {
  const intent = runtime.route(command, { inputType: "text" });
  assert.equal(intent.matchedMiniApp, expected, `${command} should route to ${expected}`);
  assert(intent.routeTarget, `${command} should include a route target`);
  assert.equal(intent.requiredAction, "open_workspace", `${command} should open a workspace`);
});

const voiceIntent = runtime.route("Nexus, prepare an SMS.", { inputType: "voice", sourceElement: "speech-transcript" });
assert.equal(voiceIntent.inputType, "voice", "voice transcript commands must use the same router");
assert.equal(voiceIntent.matchedMiniApp, "sms-prep", "voice SMS command should route to sms-prep");

const global = runtime.route("What can Nexus do?", { inputType: "text" });
assert.equal(global.kind, "global-explanation", "global capability question should produce global explanation");
assert(runtime.globalExplanation().message.includes("I am Nexus"), "global explanation should identify Nexus");
assert(runtime.globalExplanation().capabilityStates.includes("requires_credentials"), "global explanation should include capability states");

const workspaceExplanation = runtime.route("What can I do here?", { currentWorkspaceId: "crop-support" });
assert.equal(workspaceExplanation.kind, "workspace-explanation", "workspace question should produce workspace explanation");
assert.equal(runtime.workspaceExplanation("crop-support").id, "crop-support", "crop-support should be explainable");

const suggestion = runtime.predictiveSuggestionRoute({ id: "suggest-health", command: "health follow-up suggestion" });
assert(suggestion.matchedMiniApp, "predictive suggestion fixture should route");
const provider = runtime.providerReadinessRoute({ id: "live-knowledge-provider" });
assert.equal(provider.matchedMiniApp, "live-knowledge-readiness", "live knowledge provider card should route to readiness workspace");
const record = runtime.savedRecordRoute({ id: "saved-crop", title: "Saved crop issue" });
assert.equal(record.inputType, "savedRecord", "saved record link should route through savedRecord input type");

[
  "NexusUniversalNavigationRuntime",
  "function handleNexusUniversalNavigationCommand",
  "function routeNexusPredictiveSuggestion",
  "function routeNexusProviderReadinessCard",
  "function routeNexusSavedRecordLink",
  "universalNavigationIntent",
  "inputType: \"suggestion\"",
  "inputType: \"providerCard\"",
  "inputType: record.receiptType ? \"receipt\" : \"savedRecord\"",
  "handleNexusUniversalNavigationCommand(normalized",
  "data-nexus-provider-readiness-route",
  "data-nexus-predictive-route",
  "data-nexus-saved-record-route"
].forEach(token => includes(app, token, `app universal navigation wiring ${token}`));

includes(index, "/nexus-universal-navigation-runtime.js", "index should load universal navigation runtime before app.js");
assert(
  index.indexOf("/nexus-universal-navigation-runtime.js") < index.indexOf("/app.js"),
  "universal navigation runtime must load before app.js"
);

[
  "Universal Intent Router",
  "Workspace",
  "Ask Nexus typed commands",
  "voice transcript",
  "Provider Activation",
  "No fake citations",
  "Secret values are never shown"
].forEach(token => includes(docs, token, `documentation ${token}`));

[
  "payment processed",
  "appointment booked",
  "provider referral submitted",
  "sms was sent",
  "whatsapp was sent",
  "drone dispatched",
  "database persisted"
].forEach(token => excludesInsensitive(read("public/nexus-universal-navigation-runtime.js"), token, "universal navigation runtime"));

assert.equal(
  packageJson.scripts["qa:nexus-universal-navigation-runtime"],
  "node scripts/nexus-universal-navigation-runtime-qa.js",
  "package.json must expose qa:nexus-universal-navigation-runtime"
);
assert(qaSuite.includes("scripts/nexus-universal-navigation-runtime-qa.js"), "qa-suite.js must include universal navigation QA");

console.log("[nexus-universal-navigation-runtime-qa] passed");
