const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const classifierPath = path.join(root, "public", "nexus-intent-classifier.js");
const serverPath = path.join(root, "server.js");
const appPath = path.join(root, "public", "app.js");
const indexPath = path.join(root, "public", "index.html");
const docPath = path.join(root, "docs", "NEXUS_INTENT_CLASSIFICATION_MODEL.md");

const classifier = require(classifierPath);
const server = fs.readFileSync(serverPath, "utf8");
const app = fs.readFileSync(appPath, "utf8");
const index = fs.readFileSync(indexPath, "utf8");
const doc = fs.readFileSync(docPath, "utf8");

assert.strictEqual(typeof classifier.classifyNexusIntent, "function", "classifier must export classifyNexusIntent");
assert(Array.isArray(classifier.RISK_TIERS), "classifier must expose risk tiers");
assert(Array.isArray(classifier.ACTION_TYPES), "classifier must expose action types");

for (const tier of ["low", "controlled", "sensitive", "high"]) {
  assert(classifier.RISK_TIERS.includes(tier), `risk tier ${tier} must be supported`);
  assert(doc.includes(tier), `model doc must document risk tier ${tier}`);
}

for (const actionType of [
  "answer",
  "preview_or_route",
  "open_workflow",
  "request_permission",
  "request_confirmation",
  "provider_handoff",
  "external_execution",
  "unsupported"
]) {
  assert(classifier.ACTION_TYPES.includes(actionType), `action type ${actionType} must be supported`);
  assert(doc.includes(actionType), `model doc must document action type ${actionType}`);
}

const requiredFields = [
  "id",
  "domain",
  "category",
  "risk",
  "actionType",
  "selectedToolId",
  "requiresConfirmation",
  "requiresPermission",
  "confidence",
  "source",
  "normalizedText",
  "entities",
  "notes"
];

function classify(prompt, context = {}) {
  const intent = classifier.classifyNexusIntent({ text: prompt, ...context });
  for (const field of requiredFields) {
    assert(Object.prototype.hasOwnProperty.call(intent, field), `${prompt} classification must include ${field}`);
  }
  assert(["low", "controlled", "sensitive", "high"].includes(intent.risk), `${prompt} must use a supported risk tier`);
  assert(classifier.ACTION_TYPES.includes(intent.actionType), `${prompt} must use a supported action type`);
  assert.strictEqual(intent.source, "rule", `${prompt} should be rule-classified in Phase 11B`);
  assert(Array.isArray(intent.notes), `${prompt} must include notes`);
  return intent;
}

const lowRisk = [
  ["Help me find agriculture training", "learning", "training", "workforce.training"],
  ["Teach me how irrigation works", "learning", "lesson_guidance", "learning.start"],
  ["Show me farm jobs", "workforce", "job_pathways", "workforce.job_pathways"],
  ["Browse AgriTrade", "marketplace", "browse", "marketplace.agritrade"],
  ["I need help with crop issues", "agriculture", "help", "agriculture.help"],
  ["I need field support for my farm", "workforce", "field_support", "workforce.field_support"]
];

for (const [prompt, domain, category, selectedToolId] of lowRisk) {
  const intent = classify(prompt);
  assert.strictEqual(intent.risk, "low", `${prompt} should be low risk`);
  assert.strictEqual(intent.actionType, "preview_or_route", `${prompt} should preview or route only`);
  assert.strictEqual(intent.domain, domain, `${prompt} domain should be ${domain}`);
  assert.strictEqual(intent.category, category, `${prompt} category should be ${category}`);
  assert.strictEqual(intent.selectedToolId, selectedToolId, `${prompt} selectedToolId should align`);
  assert.strictEqual(intent.requiresConfirmation, false, `${prompt} must not require confirmation`);
  assert.strictEqual(intent.requiresPermission, false, `${prompt} must not require permission`);
}

const sensitive = [
  "Nexus, use my location",
  "open map",
  "find nearby providers",
  "open camera",
  "open video for provider to show injury",
  "start a telehealth video call"
];

for (const prompt of sensitive) {
  const intent = classify(prompt);
  assert.strictEqual(intent.risk, "sensitive", `${prompt} should be sensitive`);
  assert.strictEqual(intent.actionType, "request_permission", `${prompt} should request permission`);
  assert.strictEqual(intent.requiresPermission, true, `${prompt} must require permission`);
  assert.strictEqual(intent.selectedToolId, null, `${prompt} must not expose low-risk selectedToolId`);
}

const controlledOrHigh = [
  ["Call John", "communications", "request_confirmation"],
  ["Call the provider", "communications", "request_confirmation"],
  ["Message the seller", "communications", "request_confirmation"],
  ["Call Maria on WhatsApp", "communications", "request_confirmation"],
  ["Pay the buyer", "marketplace", "request_confirmation"],
  ["Process marketplace payment", "marketplace", "request_confirmation"],
  ["Log into my account", "account", "request_confirmation"],
  ["Verify my identity", "account", "request_confirmation"],
  ["My baby is not breathing", "safety", "request_confirmation"]
];

for (const [prompt, domain, actionType] of controlledOrHigh) {
  const intent = classify(prompt);
  assert.strictEqual(intent.domain, domain, `${prompt} domain should be ${domain}`);
  assert.strictEqual(intent.actionType, actionType, `${prompt} should require confirmation or escalation`);
  assert.strictEqual(intent.requiresConfirmation, true, `${prompt} must require confirmation`);
  assert.strictEqual(intent.selectedToolId, null, `${prompt} must not expose low-risk selectedToolId`);
  assert(["controlled", "high"].includes(intent.risk), `${prompt} must be controlled or high risk`);
}

const callJohn = classify("Call John");
assert.strictEqual(callJohn.id, "communications.outbound_contact.controlled", "Call John should remain contact-resolution oriented");
assert.match(callJohn.notes.join(" "), /No first-utterance communication execution/i, "Call John must not be executable from first utterance");

const missingContact = classify("Call");
assert.strictEqual(missingContact.id, "communications.contact_target.missing", "missing target call should ask who to call");
assert.strictEqual(missingContact.entities.targetHint, null, "missing target call must not invent a target");

const whatsapp = classify("Call Maria on WhatsApp");
assert.strictEqual(whatsapp.entities.provider, "whatsapp", "WhatsApp preference may be detected");
assert.strictEqual(whatsapp.actionType, "request_confirmation", "WhatsApp prompt must not open provider on first utterance");

const unknown = classify("launch the moon tractor");
assert.strictEqual(unknown.actionType, "unsupported", "unknown prompts should classify as unsupported/clarify");
assert.strictEqual(unknown.selectedToolId, null, "unknown prompts must not expose selectedToolId");

assert.match(server, /require\("\.\/public\/nexus-intent-classifier\.js"\)/, "server should import centralized intent classifier");
assert.match(server, /intentClassification/, "server should expose classifier result as metadata");
assert.match(server, /classification\.risk === "low"[\s\S]{0,160}classification\.selectedToolId/, "server selectedToolId inference should route through classifier");
assert.match(app, /function classifyNexusIntentForMetadata/, "frontend should wrap centralized classifier for metadata");
assert.match(app, /source:\s*"nexus-intent-classifier"/, "frontend local label metadata should identify classifier source");
assert.match(index, /nexus-intent-classifier\.js\?v=nexus-behavior-304/, "browser should load classifier before app.js");
assert(index.indexOf("nexus-intent-classifier.js") < index.indexOf("app.js"), "classifier must load before app.js");

for (const unsafe of ["auto-call", "auto-message", "auto-pay", "auto-open provider", "auto-capture location", "auto-open camera"]) {
  assert(!doc.toLowerCase().includes(`${unsafe} now`), `doc must not imply ${unsafe} behavior`);
}

console.log("Nexus intent classifier QA passed");
lowRisk.forEach(([prompt, , , selectedToolId]) => console.log(`- ${prompt} -> low / ${selectedToolId}`));
sensitive.forEach(prompt => console.log(`- ${prompt} -> sensitive / permission`));
controlledOrHigh.forEach(([prompt]) => console.log(`- ${prompt} -> high / confirmation`));
