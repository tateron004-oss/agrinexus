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

const server = readText("server.js");
const app = readText("public", "app.js");
const bridge = JSON.parse(readText("public", "native-bridge.json"));
const androidController = readText("native-mobile", "android", "app", "src", "main", "java", "com", "agrinexus", "mobile", "NexusNativeController.kt");
const androidManifest = readText("native-mobile", "android", "app", "src", "main", "AndroidManifest.xml");
const iosController = readText("native-mobile", "ios", "AgriNexus", "NexusWebViewController.swift");
const nativeShim = readText("native-mobile", "bridge", "agrinexus-native-voice.js");
const handoffPlan = readText("docs", "NEXUS_COMMUNICATION_PROVIDER_HANDOFF_PLAN.md");

const providerRegistry = sourceBetween(server, "const CALL_PROVIDER_REGISTRY", "function normalizeCallProvider");
for (const providerId of ["twilio", "native-phone", "whatsapp", "telegram", "browser-fallback"]) {
  const block = sourceBetween(providerRegistry, `"${providerId}": Object.freeze({`, "})");
  assertIncludes(block, "confirmedOnly: true", `${providerId} must remain confirmed-only`);
  assertIncludes(block, "fallbackMode", `${providerId} must document fallback mode`);
}
assertIncludes(providerRegistry, 'directVoiceReliable: false', "Registry must preserve non-direct-call providers");
assertIncludes(providerRegistry, 'fallbackMode: "known-handle-only"', "Telegram must remain known-handle-only");
assertIncludes(providerRegistry, 'fallbackMode: "chat-instruction"', "WhatsApp must remain chat/instruction fallback");
assertIncludes(providerRegistry, 'fallbackMode: "server-config-needed"', "Twilio must remain server-config gated");

const rawIntentBlock = sourceBetween(server, "function stageBackendCallIntent", "function outboundCallRecipientForPurpose");
assertIncludes(rawIntentBlock, "callIntentResolution", "Raw call intent must resolve contacts before handoff metadata");
assertIncludes(rawIntentBlock, "stageAgentAction(db, command", "Raw call intent must stage a pending action");
assertIncludes(rawIntentBlock, 'phase4HighRisk: true', "Raw call intent must mark provider requests high-risk");
assertIncludes(rawIntentBlock, 'allowedConfirmations: ["yes", "confirm", "do it"]', "Raw call intent must restrict confirmations");
assertIncludes(rawIntentBlock, "callProviderHandoff(provider, resolvedTarget)", "Provider handoff metadata must be built after resolved target only");
assertIncludes(rawIntentBlock, "missing-number", "Missing number must block provider handoff");
assertIncludes(rawIntentBlock, "multiple-matches", "Duplicate contacts must block provider handoff");
assertNotIncludes(rawIntentBlock, "maybeDispatchConfirmedNativeCallHandoff", "Raw intent parsing must not dispatch native provider adapters");
assertNotIncludes(rawIntentBlock, "window.location", "Raw intent parsing must not open browser providers");
assertNotIncludes(rawIntentBlock, "location.href", "Raw intent parsing must not redirect to providers");
assertNotIncludes(rawIntentBlock, ".click()", "Raw intent parsing must not auto-click provider links");
assertNotIncludes(rawIntentBlock, "sendTwilioMessage", "Raw intent parsing must not send provider messages");

const confirmationGate = sourceBetween(server, "const topPendingAction = db.profile.agentPendingAction;", "if (!topPendingAction && conversational && isAffirmativeCommand");
assertIncludes(confirmationGate, "topPendingAction?.phase4HighRisk && isVagueConfirmationCommand", "Vague high-risk confirmations must be intercepted");
assertIncludes(confirmationGate, "allowed.includes(normalizeSpeechForIntent(lower))", "High-risk provider handoff must require allow-listed confirmation");
assertIncludes(confirmationGate, "executePendingAgentAction(db, user, topPendingAction)", "Execution must flow through pending action confirmation");

const executeBlock = sourceBetween(server, "async function executePendingAgentAction", "function conversationalSectionGuide");
assertIncludes(executeBlock, "db.profile.agentPendingAction = null", "Pending action must be consumed before confirmed execution result");
assertIncludes(executeBlock, 'pending.kind === "call" && pending.provider === "twilio"', "Twilio must execute only from confirmed pending call");
assertIncludes(executeBlock, 'pending.kind === "call" && pending.provider && pending.provider !== "twilio"', "Non-Twilio handoffs must execute only from confirmed pending call");
assertIncludes(executeBlock, "callProviderHandoff(pending.provider, target)", "Confirmed provider handoff must derive from pending provider data");
assertIncludes(executeBlock, "executionConfirmed: true", "Provider handoff metadata must be marked confirmed only after confirmation");
assertIncludes(executeBlock, "liveCallPlaced: false", "Non-Twilio handoffs must not claim live call placement");

const twilioProviderBlock = sourceBetween(server, "async function startTwilioOutboundCall", "async function createOutboundCallWorkflow");
assertIncludes(twilioProviderBlock, "TWILIO_ACCOUNT_SID", "Twilio provider must require account SID");
assertIncludes(twilioProviderBlock, "TWILIO_AUTH_TOKEN", "Twilio provider must require auth token");
assertIncludes(twilioProviderBlock, "TWILIO_PHONE_NUMBER", "Twilio provider must require phone number");
assertIncludes(twilioProviderBlock, "PUBLIC_BASE_URL", "Twilio provider must require public base URL");
assertIncludes(twilioProviderBlock, "needs-twilio-call-config", "Missing Twilio credentials must produce setup-needed status");
const twilioCallBlock = sourceBetween(server, "async function createOutboundCallWorkflow", "function xmlEscape");
assertIncludes(twilioCallBlock, "startTwilioOutboundCall", "Twilio workflow must call server-side Twilio helper only");
assertIncludes(twilioCallBlock, "delivery.ok ? \"calling-live\" : delivery.status", "Twilio workflow status must reflect credential/setup result");
assert(!/process\.env\.TWILIO_|import\.meta\.env\.TWILIO_|localStorage\.getItem\(["']TWILIO_|sessionStorage\.getItem\(["']TWILIO_/i.test(app), "Frontend must not read Twilio credentials");

const browserUrlGuard = sourceBetween(app, "function safeConfirmedCallHandoffUrl", "function confirmedNativeCallHandoffPayload");
assertIncludes(browserUrlGuard, 'provider === "native-phone" && /^tel:', "Native phone browser handoff must allow sanitized tel only");
assertIncludes(browserUrlGuard, 'provider === "whatsapp" && /^https:\\/\\/wa\\.me\\/\\d+$/i.test(url)', "WhatsApp handoff must allow sanitized wa.me only");
assertIncludes(browserUrlGuard, 'provider === "telegram" && /^https:\\/\\/t\\.me\\/[A-Za-z0-9_]{3,64}$/i.test(url)', "Telegram handoff must allow sanitized handle links only");
assertIncludes(browserUrlGuard, "return \"\"", "Unsupported provider URLs must be suppressed");

const nativePayload = sourceBetween(app, "function confirmedNativeCallHandoffPayload", "function nativeCallLaunchBridgeAvailable");
assertIncludes(nativePayload, "if (!metadata.executionConfirmed) return null", "Native bridge payload must require executionConfirmed");
assertIncludes(nativePayload, 'if (provider !== "native-phone") return null', "Native bridge payload must require native-phone provider");
assertIncludes(nativePayload, 'if (handoff.nativeCommand !== "call.launch") return null', "Native bridge payload must require call.launch");
assertIncludes(nativePayload, 'if (!safeUrl || !safeUrl.startsWith("tel:")) return null', "Native bridge payload must require sanitized tel URL");
assertIncludes(nativePayload, 'source: "confirmed-call-handoff"', "Native bridge payload must use confirmed-call-handoff source");

const nativeDispatch = sourceBetween(app, "function maybeDispatchConfirmedNativeCallHandoff", "function renderConfirmedCallHandoffCard");
assertIncludes(nativeDispatch, "confirmedNativeCallHandoffPayload(result)", "Native dispatch must use strict payload builder");
assertIncludes(nativeDispatch, "nativeCallLaunchBridgeAvailable()", "Native dispatch must require native bridge availability");
assertIncludes(nativeDispatch, "agrinexusLastNativeCallDispatch", "Native dispatch must dedupe repeated provider handoff results");

const handoffCard = sourceBetween(app, "function renderConfirmedCallHandoffCard", "function renderPendingCallActionCard");
assertIncludes(handoffCard, "safeConfirmedCallHandoffUrl(result)", "Browser handoff card must use sanitized URL builder");
assertIncludes(handoffCard, 'data-confirmed-call-handoff="true"', "Provider handoff link must be explicit user-clicked UI");
assert(!/window\.location\s*=|location\.href\s*=|\.click\(\)|dispatchEvent/.test(handoffCard), "Browser handoff card must not auto-open providers");
assertIncludes(handoffCard, "WhatsApp voice-call deep links are not reliable", "WhatsApp UI must not claim reliable direct voice calling");
assertIncludes(handoffCard, "Telegram direct calls need a known Telegram account", "Telegram UI must preserve known-handle limitation");
assertIncludes(handoffCard, "No browser-launchable handoff link is available", "Unsupported providers must render safe fallback");

assert(bridge.webCommands.includes("call.launch"), "Native bridge must list call.launch command");
assert.equal(bridge.confirmedCallHandoff?.command, "call.launch", "Native bridge must document call.launch handoff");
assert.equal(bridge.confirmedCallHandoff?.payload?.provider, "native-phone", "Native bridge payload must require native-phone");
assert.equal(bridge.confirmedCallHandoff?.payload?.source, "confirmed-call-handoff", "Native bridge payload must require confirmed-call-handoff source");
assert.equal(bridge.confirmedCallHandoff?.payload?.executionConfirmed, true, "Native bridge payload must require executionConfirmed true");
assert.match(bridge.confirmedCallHandoff?.payload?.url || "", /tel:/, "Native bridge payload must require tel URL");
assert(bridge.confirmedCallHandoff?.requirements?.some(item => /url must be a sanitized tel: URL/.test(item)), "Native bridge requirements must mention sanitized tel URL");
assert.match(bridge.confirmedCallHandoff?.unsupportedNativeBehavior || "", /never place a call or infer a number/i, "Native bridge unsupported behavior must fail safely");
assertIncludes(nativeShim, 'command: "call.launch"', "Native web shim must expose call.launch only through native command payload");

assertIncludes(androidController, 'provider != "native-phone"', "Android must require native-phone provider");
assertIncludes(androidController, 'source != "confirmed-call-handoff"', "Android must require confirmed-call-handoff source");
assertIncludes(androidController, "!confirmed", "Android must require executionConfirmed");
assertIncludes(androidController, "isSafeTelUrl(url)", "Android must validate tel URL");
assertIncludes(androidController, "Intent(Intent.ACTION_DIAL, Uri.parse(url))", "Android must use ACTION_DIAL");
assertNotIncludes(androidController, "ACTION_CALL", "Android must not use ACTION_CALL");
assertNotIncludes(androidManifest, "CALL_PHONE", "Android manifest must not request CALL_PHONE");

assertIncludes(iosController, 'case "call.launch":', "iOS bridge must handle call.launch explicitly");
assertIncludes(iosController, 'provider == "native-phone"', "iOS must require native-phone provider");
assertIncludes(iosController, 'source == "confirmed-call-handoff"', "iOS must require confirmed-call-handoff source");
assertIncludes(iosController, "confirmed else", "iOS must require executionConfirmed");
assertIncludes(iosController, "safeTelURL(urlValue)", "iOS must validate tel URL");
assertIncludes(iosController, 'components.scheme == "tel"', "iOS must require tel scheme");
assertIncludes(iosController, "UIApplication.shared.canOpenURL(telURL)", "iOS must check Phone UI availability");
assertIncludes(iosController, "UIApplication.shared.open(telURL", "iOS must open user-visible Phone UI only");

for (const prompt of [
  "Call Maria on WhatsApp",
  "Call Maria on Telegram",
  "Call John",
  "Text John",
  "Email John"
]) {
  assert(handoffPlan.includes(prompt), `Provider handoff plan must include raw prompt expectation: ${prompt}`);
}
assertIncludes(handoffPlan, "Message the buyer on random-app", "Provider handoff plan must include buyer messaging unsupported-provider expectation");

for (const phrase of [
  "Provider adapters must never be called directly by raw intent parsing",
  "No First-Utterance Execution",
  "Provider Launch Only After Explicit Confirmation",
  "Unsupported Providers Fail Safely",
  "SMS and email are message actions, not call actions",
  "draft first",
  "confirm recipient and content separately",
  "no first-turn send"
]) {
  assert(handoffPlan.includes(phrase), `Provider handoff plan must preserve boundary phrase: ${phrase}`);
}

assert.match(handoffPlan, /WhatsApp direct voice-call deep links are unreliable/i, "Plan must preserve WhatsApp direct voice limitation");
assert.match(handoffPlan, /Telegram phone numbers alone are not enough/i, "Plan must preserve Telegram handle requirement");
assert.match(handoffPlan, /Twilio is server-side only/i, "Plan must preserve Twilio server-side boundary");
assert.match(handoffPlan, /browser-side Twilio calls/i, "Plan must prohibit browser-side Twilio");
assert.match(handoffPlan, /Unsupported providers must fail safely/i, "Plan must require unsupported providers to fail safely");

console.log("Nexus provider handoff boundary QA passed");
