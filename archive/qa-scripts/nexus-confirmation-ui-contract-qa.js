const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function readText(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function sourceBetween(source, startNeedle, endNeedle) {
  const start = source.indexOf(startNeedle);
  assert.notEqual(start, -1, `Missing source start: ${startNeedle}`);
  const end = source.indexOf(endNeedle, start + startNeedle.length);
  assert.notEqual(end, -1, `Missing source end after ${startNeedle}: ${endNeedle}`);
  return source.slice(start, end);
}

function assertIncludes(source, needle, message) {
  assert(source.includes(needle), message || `Expected source to include ${needle}`);
}

function assertNotIncludes(source, needle, message) {
  assert(!source.includes(needle), message || `Expected source not to include ${needle}`);
}

function extractFunction(source, name) {
  const start = source.indexOf(`function ${name}`);
  assert(start >= 0, `${name} should exist`);
  const signatureEnd = source.indexOf(")", start);
  const bodyStart = source.indexOf("{", signatureEnd);
  assert(signatureEnd > start && bodyStart > signatureEnd, `${name} body should start after its signature`);
  let depth = 0;
  for (let index = bodyStart; index < source.length; index += 1) {
    const char = source[index];
    if (char === "{") depth += 1;
    if (char === "}") {
      depth -= 1;
      if (depth === 0) return source.slice(start, index + 1);
    }
  }
  throw new Error(`${name} body should be extractable`);
}

const app = readText("public", "app.js");
const index = readText("public", "index.html");
const server = readText("server.js");
const pkg = JSON.parse(readText("package.json"));
const confirmationDoc = readText("docs", "NEXUS_UNIFIED_CONFIRMATION_UI_ARCHITECTURE.md");
const prototypeDoc = readText("docs", "NEXUS_LOW_RISK_CONFIRMATION_UI_PROTOTYPE.md");
const providerDoc = readText("docs", "NEXUS_COMMUNICATION_PROVIDER_HANDOFF_PLAN.md");

for (const phrase of [
  "Low-risk actions may use preview plus `Review options`",
  "Medium-risk actions require staged review before submission",
  "High-risk actions require explicit confirmation",
  "Cancel must always be visible",
  "Vague acknowledgments such as `okay` must not confirm high-risk execution",
  "Confirmation must be auditable",
  "Rendering a preview, staging card, confirmation modal, or provider handoff card must never execute an action by itself"
]) {
  assertIncludes(confirmationDoc, phrase, `Confirmation architecture must preserve principle: ${phrase}`);
}

for (const field of [
  "confirmationId",
  "riskTier",
  "actionType",
  "target",
  "provider",
  "dataShared",
  "consequence",
  "allowedConfirmations",
  "blockedConfirmations",
  "auditRequired",
  "expiresAt"
]) {
  assertIncludes(confirmationDoc, field, `Confirmation payload must document ${field}`);
}

for (const label of [
  "`Review options`",
  "`Prepare`",
  "`Edit`",
  "`Confirm`",
  "`Cancel`",
  "`Open provider`",
  "`Open phone dialer`",
  "`Open WhatsApp`",
  "`Open Telegram`",
  "`Send message`",
  "`Not now`"
]) {
  assertIncludes(confirmationDoc, label, `Confirmation architecture must document approved label ${label}`);
}

for (const label of [
  "`Do it all`",
  "`Auto`",
  "`Continue automatically`",
  "`Call now without showing provider`",
  "`Submit everything`",
  "`Yes, always`"
]) {
  assertIncludes(confirmationDoc, label, `Confirmation architecture must document discouraged label ${label}`);
}

for (const copySection of [
  "### Call Confirmation",
  "### WhatsApp Handoff",
  "### Telegram Handoff",
  "### SMS Draft Confirmation",
  "### Email Draft Confirmation",
  "### Job Application Preparation",
  "### Marketplace Buyer/Seller Message",
  "### Payment Blocked / Future-Only",
  "### Camera / Location Permission",
  "### Telehealth / Video Handoff",
  "### Emergency Support Warning",
  "### Health-Sensitive Action",
  "### Admin / Provider Action"
]) {
  assertIncludes(confirmationDoc, copySection, `Confirmation architecture must include copy section ${copySection}`);
}

for (const [selectedToolId, label] of [
  ["workforce.training", "Training"],
  ["learning.start", "Learning"],
  ["workforce.job_pathways", "Jobs"],
  ["marketplace.agritrade", "Marketplace"],
  ["agriculture.help", "Agriculture Help"]
]) {
  assertIncludes(app, selectedToolId, `Low-risk demo flow mapping must preserve ${selectedToolId}`);
  assertIncludes(app, `levelLabel: "${label}"`, `Low-risk demo flow mapping must preserve ${label} label`);
}

const prototypeRenderer = extractFunction(app, "renderControlledActionConfirmationPrototype");
assertIncludes(prototypeRenderer, "Review options", "Low-risk confirmation surface must preserve Review options");
assertIncludes(prototypeRenderer, "Not now", "Low-risk confirmation surface must preserve Not now");
assertIncludes(prototypeRenderer, "No special permission is needed", "Low-risk confirmation surface must remain permission-free");
assertIncludes(prototypeRenderer, "no action will be taken", "Low-risk confirmation surface must remain non-executing");
assertNotIncludes(prototypeRenderer, "Confirm action", "Low-risk preview UI must not present execution confirmation copy");
assertNotIncludes(prototypeRenderer, "Open provider", "Low-risk preview UI must not present provider handoff copy");

const prototypeGuard = extractFunction(app, "isVisibleControlledActionConfirmationPrototypeReadiness");
assertIncludes(prototypeGuard, '["info", "low"].includes', "Low-risk confirmation prototype must allow only info/low readiness");
assertIncludes(prototypeGuard, "requiredPermissions", "Low-risk confirmation prototype must reject permission-required readiness");
assertIncludes(prototypeGuard, "missingInputs", "Low-risk confirmation prototype must reject missing-input readiness");
assertIncludes(prototypeGuard, "confirmationBlockedReason", "Low-risk confirmation prototype must reject blocked readiness");
assertIncludes(prototypeGuard, 'allowedNextStep !== "observeConfirmationReadinessOnly"', "Low-risk confirmation prototype must remain observation-only");
assertIncludes(prototypeGuard, 'executionBoundary !== "confirmationReadinessOnly"', "Low-risk confirmation prototype must require confirmation-readiness boundary");

const previewBuilder = extractFunction(app, "buildControlledActionPreviewReadinessFromMetadata");
for (const restricted of [
  "telehealth",
  "video",
  "camera",
  "call",
  "location",
  "payment",
  "pay",
  "buy",
  "sell",
  "account",
  "identity",
  "dispatch"
]) {
  assertIncludes(previewBuilder, restricted, `Preview builder must keep restricted term guard for ${restricted}`);
}

const clickHandler = extractFunction(app, "handleControlledActionConfirmationPrototypeClick");
assertIncludes(clickHandler, "performControlledLowRiskNavigation", "Review options must stay limited to controlled low-risk navigation");
assertIncludes(clickHandler, 'clearControlledActionPreview("confirmation-prototype-dismissed")', "Not now must clear preview/confirmation state");
for (const forbidden of [
  "maybeDispatchConfirmedNativeCallHandoff",
  "openWorkflowModal",
  "executeWorkflowConfigFromVoice",
  "getUserMedia",
  "geolocation",
  "requestPayment",
  "window.location",
  "location.href",
  ".click()"
]) {
  assertNotIncludes(clickHandler, forbidden, `Preview confirmation click handler must not trigger ${forbidden}`);
}

const handoffCard = sourceBetween(app, "function renderConfirmedCallHandoffCard", "function renderPendingCallActionCard");
assertIncludes(handoffCard, "safeConfirmedCallHandoffUrl(result)", "Provider handoff card must use sanitized URL builder");
assertIncludes(handoffCard, 'data-confirmed-call-handoff="true"', "Provider handoff link must remain explicit user-clicked UI");
assert(!/window\.location\s*=|location\.href\s*=|\.click\(\)|dispatchEvent/.test(handoffCard), "Provider handoff card must not auto-open providers");

const browserUrlGuard = sourceBetween(app, "function safeConfirmedCallHandoffUrl", "function confirmedNativeCallHandoffPayload");
assertIncludes(browserUrlGuard, 'provider === "native-phone" && /^tel:', "Browser native-phone handoff must require sanitized tel URL");
assertIncludes(browserUrlGuard, 'provider === "whatsapp" && /^https:\\/\\/wa\\.me\\/\\d+$/i.test(url)', "WhatsApp handoff must remain sanitized");
assertIncludes(browserUrlGuard, 'provider === "telegram" && /^https:\\/\\/t\\.me\\/[A-Za-z0-9_]{3,64}$/i.test(url)', "Telegram handoff must remain sanitized");
assertIncludes(browserUrlGuard, "return \"\"", "Unsupported provider URL must fail closed");

const nativePayload = sourceBetween(app, "function confirmedNativeCallHandoffPayload", "function nativeCallLaunchBridgeAvailable");
assertIncludes(nativePayload, "if (!metadata.executionConfirmed) return null", "Native phone handoff must require confirmed execution metadata");
assertIncludes(nativePayload, 'if (provider !== "native-phone") return null', "Native phone handoff must require native-phone provider");
assertIncludes(nativePayload, 'source: "confirmed-call-handoff"', "Native phone handoff must preserve confirmed source");
assertIncludes(nativePayload, 'if (!safeUrl || !safeUrl.startsWith("tel:")) return null', "Native phone handoff must require sanitized tel URL");

const confirmationGate = sourceBetween(server, "const topPendingAction = db.profile.agentPendingAction;", "if (!topPendingAction && conversational && isAffirmativeCommand");
assertIncludes(confirmationGate, "topPendingAction?.phase4HighRisk && isVagueConfirmationCommand", "Server must block vague confirmation for high-risk actions");
assertIncludes(confirmationGate, "allowed.includes(normalizeSpeechForIntent(lower))", "Server must require allowed explicit confirmation terms");
assertIncludes(server, 'allowedConfirmations: ["yes", "confirm", "do it"]', "Server must preserve explicit high-risk allowed confirmations");

for (const unsafe of [
  "Do it all",
  "Continue automatically",
  "Submit everything",
  "Yes, always"
]) {
  assertNotIncludes(app, unsafe, `Runtime app UI must not include unsafe label: ${unsafe}`);
  assertNotIncludes(index, unsafe, `Runtime index UI must not include unsafe label: ${unsafe}`);
}

for (const phrase of [
  "no camera/location permission from preview",
  "no telehealth/video execution from preview",
  "no marketplace buy/sell/payment action from preview",
  "no emergency dispatch from preview",
  "no account/identity action from preview"
]) {
  assertIncludes(confirmationDoc, phrase, `Confirmation QA expectations must include ${phrase}`);
}

assert.match(providerDoc, /staged pending action[\s\S]*explicit confirmation/i, "Provider plan must preserve pending-action plus confirmation boundary");
assertIncludes(prototypeDoc, "Review options", "Low-risk prototype doc must preserve Review options");
assertIncludes(prototypeDoc, "Not now", "Low-risk prototype doc must preserve Not now");
assertIncludes(prototypeDoc, "does not execute", "Low-risk prototype doc must preserve non-executing boundary");

assert.strictEqual(
  pkg.scripts["qa:nexus-confirmation-ui-contract"],
  "node scripts/nexus-confirmation-ui-contract-qa.js",
  "package should expose confirmation UI contract QA alias"
);

console.log("Nexus confirmation UI contract QA passed");
