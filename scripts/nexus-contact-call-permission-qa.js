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
const nativeWebShim = readText("native-mobile", "bridge", "agrinexus-native-voice.js");
const architectureDoc = readText("docs", "NEXUS_CONTACT_CALL_PERMISSION_ARCHITECTURE.md");

const providerRegistry = sourceBetween(server, "const CALL_PROVIDER_REGISTRY", "function normalizeCallProvider");
for (const provider of ["twilio", "native-phone", "whatsapp", "telegram", "browser-fallback"]) {
  const providerBlock = sourceBetween(providerRegistry, `"${provider}": Object.freeze({`, "})");
  assertIncludes(providerBlock, "confirmedOnly: true", `${provider} must remain confirmed-only`);
  assertIncludes(providerBlock, "fallbackMode", `${provider} must expose safe fallback metadata`);
}

assertIncludes(server, 'tool: "communications.outbound_call"', "Outbound call tool must remain the staged call tool");
assertIncludes(server, 'pendingActionType: "outbound_call"', "Outbound call requests must stage as outbound_call pending actions");
assertIncludes(server, 'phase4HighRisk: true', "Call intent staging must mark calls as Phase 4 high-risk");
assertIncludes(server, 'allowedConfirmations: ["yes", "confirm", "do it"]', "Call intent staging must restrict allowed confirmations");
assertIncludes(server, 'rationale: "Nexus parsed a call request and staged it behind explicit confirmation before any outbound action."', "Call staging rationale must preserve no-first-turn execution boundary");
assertIncludes(server, 'intent: "call.intent_staged"', "Initial call intent must stage, not execute");
assertIncludes(server, 'intent: "call.number_needed"', "Missing number path must remain a prompt-only flow");
assertIncludes(server, 'intent: "call.multiple_matches"', "Duplicate contact path must remain a choice-only flow");

const callStagingBlock = sourceBetween(server, "function stageBackendCallIntent", "function outboundCallRecipientForPurpose");
assertIncludes(callStagingBlock, "stageAgentAction(db, command", "Call intent must stage through agentPendingAction behavior");
assertIncludes(callStagingBlock, "callIntentResolution", "Call intent must resolve contacts before staging");
assertIncludes(callStagingBlock, "missing-number", "Call intent must handle missing numbers before staging");
assertIncludes(callStagingBlock, "multiple-matches", "Call intent must handle duplicate contacts before staging");
assertIncludes(callStagingBlock, "callProviderHandoff(provider, resolvedTarget)", "Provider handoff metadata must be built only after contact resolution");
assertNotIncludes(callStagingBlock, "maybeDispatchConfirmedNativeCallHandoff", "Raw call intent parsing must not dispatch native calls");
assertNotIncludes(callStagingBlock, "window.location", "Backend call intent parsing must not open browser providers");
assertNotIncludes(callStagingBlock, "getUserMedia", "Call prompts must not trigger camera behavior");
assertNotIncludes(callStagingBlock, "geolocation", "Call prompts must not trigger location behavior");

const confirmationGate = sourceBetween(server, "const topPendingAction = db.profile.agentPendingAction;", "if (!topPendingAction && conversational && isAffirmativeCommand");
const vagueIndex = confirmationGate.indexOf("topPendingAction?.phase4HighRisk && isVagueConfirmationCommand");
const affirmativeIndex = confirmationGate.indexOf("topPendingAction?.phase4HighRisk && isAffirmativeCommand");
assert(vagueIndex >= 0, "High-risk confirmation gate must check vague confirmations");
assert(affirmativeIndex >= 0, "High-risk confirmation gate must check affirmative confirmations");
assert(vagueIndex < affirmativeIndex, "Vague confirmation such as okay must be rejected before affirmative execution checks");
assertIncludes(confirmationGate, 'allowedConfirmations || ["yes", "confirm", "do it"]', "High-risk confirmations must use an allow-list");
assertIncludes(confirmationGate, "allowed.includes(normalizeSpeechForIntent(lower))", "High-risk confirmations must verify the normalized utterance is allow-listed");
assertIncludes(confirmationGate, "executePendingAgentAction(db, user, topPendingAction)", "Execution must go through pending action confirmation only");

const confirmationHelpers = sourceBetween(server, "function isAffirmativeCommand", "function isNegativeCommand");
assert.match(confirmationHelpers, /function isVagueConfirmationCommand[\s\S]*ok\|okay/, "okay must remain a vague confirmation");
assert.match(confirmationHelpers, /function isExplicitConfirmationCommand[\s\S]*yes\|confirm[\s\S]*do it/, "Explicit confirmation terms must remain known");

const executeBlock = sourceBetween(server, "async function executePendingAgentAction", "function conversationalSectionGuide");
assertIncludes(executeBlock, "db.profile.agentPendingAction = null", "Pending actions must be cleared before execution result handling");
assertIncludes(executeBlock, 'pending.kind === "call" && pending.provider === "twilio"', "Twilio calls must execute only from a confirmed pending call");
assertIncludes(executeBlock, 'pending.kind === "call" && pending.provider && pending.provider !== "twilio"', "Provider handoffs must execute only from confirmed pending calls");
assertIncludes(executeBlock, "executionConfirmed: true", "Confirmed call handoff metadata must mark executionConfirmed only after confirmation");
assertIncludes(executeBlock, "liveCallPlaced: false", "Non-Twilio provider handoffs must not claim a live call was placed");
assertIncludes(executeBlock, "callProviderHandoff(pending.provider, target)", "Provider handoff must derive from pending confirmed provider data");

const browserUrlGuard = sourceBetween(app, "function safeConfirmedCallHandoffUrl", "function confirmedNativeCallHandoffPayload");
assertIncludes(browserUrlGuard, 'provider === "native-phone" && /^tel:', "Browser native-phone handoff URLs must be tel-only");
assertIncludes(browserUrlGuard, 'provider === "whatsapp" && /^https:\\/\\/wa\\.me\\/\\d+$/i.test(url)', "WhatsApp handoff URLs must be sanitized wa.me links");
assertIncludes(browserUrlGuard, 'provider === "telegram" && /^https:\\/\\/t\\.me\\/[A-Za-z0-9_]{3,64}$/i.test(url)', "Telegram handoff URLs must be sanitized t.me handles");
assertIncludes(browserUrlGuard, "return \"\"", "Unsupported browser handoff URLs must be suppressed");

const nativePayload = sourceBetween(app, "function confirmedNativeCallHandoffPayload", "function nativeCallLaunchBridgeAvailable");
assertIncludes(nativePayload, "if (!metadata.executionConfirmed) return null", "Native bridge dispatch must require confirmed metadata");
assertIncludes(nativePayload, 'if (provider !== "native-phone") return null', "Native bridge dispatch must only allow native-phone provider");
assertIncludes(nativePayload, 'if (handoff.nativeCommand !== "call.launch") return null', "Native bridge dispatch must require call.launch command");
assertIncludes(nativePayload, 'if (!safeUrl || !safeUrl.startsWith("tel:")) return null', "Native bridge dispatch must require sanitized tel URL");
assertIncludes(nativePayload, 'source: "confirmed-call-handoff"', "Native bridge dispatch payload must use confirmed-call-handoff source");

const nativeDispatch = sourceBetween(app, "function maybeDispatchConfirmedNativeCallHandoff", "function renderConfirmedCallHandoffCard");
assertIncludes(nativeDispatch, "confirmedNativeCallHandoffPayload(result)", "Native dispatch must use the strict payload builder");
assertIncludes(nativeDispatch, "nativeCallLaunchBridgeAvailable()", "Native dispatch must require native bridge availability");
assertIncludes(nativeDispatch, "agrinexusLastNativeCallDispatch", "Native dispatch must dedupe repeated render events");

const handoffCard = sourceBetween(app, "function renderConfirmedCallHandoffCard", "function renderPendingCallActionCard");
assertIncludes(handoffCard, "safeConfirmedCallHandoffUrl(result)", "Confirmed handoff card must use sanitized URLs");
assertIncludes(handoffCard, 'data-confirmed-call-handoff="true"', "Browser provider handoff must remain a user-clicked link");
assert(!/window\.location\s*=|location\.href\s*=|\.click\(\)/.test(handoffCard), "Confirmed handoff card must not auto-open providers");
assertIncludes(handoffCard, "No browser-launchable handoff link is available", "Unsupported providers must render safe fallback instructions");

assert(bridge.webCommands.includes("call.launch"), "Native bridge contract must list call.launch");
assert.equal(bridge.confirmedCallHandoff?.command, "call.launch", "Native bridge contract must document call.launch handoff");
assert.equal(bridge.confirmedCallHandoff?.payload?.provider, "native-phone", "Native bridge payload must require native-phone provider");
assert.equal(bridge.confirmedCallHandoff?.payload?.executionConfirmed, true, "Native bridge payload must require executionConfirmed true");
assert.equal(bridge.confirmedCallHandoff?.payload?.source, "confirmed-call-handoff", "Native bridge payload must require confirmed-call-handoff source");
assert(bridge.confirmedCallHandoff?.requirements?.some(item => /executionConfirmed must be true/.test(item)), "Native bridge requirements must mention executionConfirmed");
assert(bridge.confirmedCallHandoff?.requirements?.some(item => /provider must be native-phone/.test(item)), "Native bridge requirements must mention native-phone");
assert.match(bridge.confirmedCallHandoff?.unsupportedNativeBehavior || "", /never place a call or infer a number/i, "Native bridge unsupported behavior must remain safe");
assertIncludes(nativeWebShim, 'command: "call.launch"', "Native web shim must dispatch only call.launch payloads");

assertIncludes(androidController, "fun launchConfirmedCall(payload: JSONObject)", "Android must implement confirmed call launch");
assertIncludes(androidController, 'provider != "native-phone"', "Android call launch must require native-phone");
assertIncludes(androidController, 'source != "confirmed-call-handoff"', "Android call launch must require confirmed-call-handoff source");
assertIncludes(androidController, "!confirmed", "Android call launch must require executionConfirmed");
assertIncludes(androidController, "isSafeTelUrl(url)", "Android call launch must validate tel URL");
assertIncludes(androidController, "Intent(Intent.ACTION_DIAL, Uri.parse(url))", "Android call launch must use ACTION_DIAL");
assertNotIncludes(androidController, "ACTION_CALL", "Android must not use ACTION_CALL");
assertNotIncludes(androidManifest, "CALL_PHONE", "Android manifest must not request direct call permission");

assertIncludes(iosController, 'case "call.launch":', "iOS bridge must handle call.launch");
assertIncludes(iosController, 'provider == "native-phone"', "iOS call launch must require native-phone");
assertIncludes(iosController, 'source == "confirmed-call-handoff"', "iOS call launch must require confirmed-call-handoff source");
assertIncludes(iosController, "confirmed else", "iOS call launch must require executionConfirmed");
assertIncludes(iosController, "safeTelURL(urlValue)", "iOS call launch must validate tel URL");
assertIncludes(iosController, 'components.scheme == "tel"', "iOS call launch must require tel scheme");
assertIncludes(iosController, "UIApplication.shared.canOpenURL(telURL)", "iOS must verify Phone UI availability");
assertIncludes(iosController, "UIApplication.shared.open(telURL", "iOS must use user-visible Phone UI handoff");
assert.match(iosController, /call\.launch_failed/, "iOS must emit safe failure events");

const firstTurnPrompts = [
  "Call John",
  "Call my doctor",
  "Call Maria on WhatsApp",
  "Call the seller",
  "Call workforce support",
  "Call my emergency contact",
  "Message the seller",
  "Send WhatsApp to the buyer"
];
for (const prompt of firstTurnPrompts) {
  assert(architectureDoc.includes(prompt), `Architecture doc should preserve QA prompt: ${prompt}`);
}
for (const prompt of ["okay", "yes", "confirm", "do it"]) {
  assert(architectureDoc.includes(prompt), `Architecture doc should preserve confirmation prompt term: ${prompt}`);
}
assert.match(architectureDoc, /All contact, call, and message actions are high-risk by default/i, "Architecture doc must keep contact/call/message high-risk model");
assert.match(architectureDoc, /no first-utterance execution/i, "Architecture doc must state no first-turn execution");
assert.match(architectureDoc, /No provider should open until after selection and final confirmation/i, "Architecture doc must require no provider opened before confirmation");
assert.match(architectureDoc, /`okay` does not confirm high-risk calls/i, "Architecture doc must preserve vague confirmation guard");
assert.match(architectureDoc, /No camera\/location\/telehealth\/payment\/marketplace side effects/i, "Architecture doc must preserve side-effect exclusions");

console.log("Nexus contact/call permission QA passed");
