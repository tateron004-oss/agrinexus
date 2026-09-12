const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

const server = read("server.js");
const app = read("public/app.js");
const bridge = JSON.parse(read("public/native-bridge.json"));
const nativeShim = read("native-mobile/bridge/agrinexus-native-voice.js");
const androidBridge = read("native-mobile/android/app/src/main/java/com/agrinexus/mobile/NativeBridge.kt");
const androidController = read("native-mobile/android/app/src/main/java/com/agrinexus/mobile/NexusNativeController.kt");
const androidManifest = read("native-mobile/android/app/src/main/AndroidManifest.xml");
const iosController = read("native-mobile/ios/AgriNexus/NexusWebViewController.swift");

const expectedProviders = ["twilio", "native-phone", "whatsapp", "telegram", "browser-fallback"];
const expectedPublicMetadataFields = [
  "provider",
  "label",
  "handoffType",
  "fallbackMode",
  "directVoiceReliable",
  "nativeEligible",
  "browserEligible",
  "requiresPhone",
  "requiresHandle",
  "confirmedOnly"
];

function sourceBetween(source, startNeedle, endNeedle) {
  const start = source.indexOf(startNeedle);
  assert(start > -1, `Missing source block start: ${startNeedle}`);
  const end = source.indexOf(endNeedle, start);
  assert(end > -1, `Missing source block end: ${endNeedle}`);
  return source.slice(start, end);
}

function providerBlock(provider) {
  const startNeedle = `"${provider}": Object.freeze({`;
  const start = server.indexOf(startNeedle);
  assert(start > -1, `Backend registry should include ${provider}`);
  const nextProvider = server.indexOf("\n  \"", start + startNeedle.length);
  const endRegistry = server.indexOf("\n});", start);
  assert(endRegistry > -1, "Backend registry should close cleanly");
  return server.slice(start, nextProvider > -1 && nextProvider < endRegistry ? nextProvider : endRegistry);
}

function extractStringField(block, key) {
  const match = block.match(new RegExp(`${key}: "([^"]+)"`));
  assert(match, `Expected ${key} string field in provider block`);
  return match[1];
}

function extractBooleanField(block, key) {
  const match = block.match(new RegExp(`${key}: (true|false)`));
  assert(match, `Expected ${key} boolean field in provider block`);
  return match[1] === "true";
}

function backendProviderMetadata(provider) {
  const block = providerBlock(provider);
  return {
    provider,
    label: extractStringField(block, "label"),
    handoffType: extractStringField(block, "handoffType"),
    fallbackMode: extractStringField(block, "fallbackMode"),
    directVoiceReliable: extractBooleanField(block, "directVoiceReliable"),
    nativeEligible: extractBooleanField(block, "nativeEligible"),
    browserEligible: extractBooleanField(block, "browserEligible"),
    requiresPhone: extractBooleanField(block, "requiresPhone"),
    requiresHandle: extractBooleanField(block, "requiresHandle"),
    confirmedOnly: extractBooleanField(block, "confirmedOnly")
  };
}

const registryBlock = sourceBetween(server, "const CALL_PROVIDER_REGISTRY = Object.freeze({", "function normalizeCallProvider");
const registryProviders = [...registryBlock.matchAll(/"([^"]+)": Object\.freeze\(\{/g)].map(match => match[1]);
assert.deepEqual(registryProviders, expectedProviders, "Backend provider registry should contain exactly the known provider set in stable order");

const backendMetadata = Object.fromEntries(expectedProviders.map(provider => [provider, backendProviderMetadata(provider)]));
Object.values(backendMetadata).forEach(metadata => {
  assert.deepEqual(Object.keys(metadata), expectedPublicMetadataFields, `${metadata.provider} public metadata shape should remain stable`);
});

const publicMetadataBlock = sourceBetween(server, "function callProviderPublicMetadata", "function callIntentProvider");
expectedPublicMetadataFields.forEach(field => {
  assert(publicMetadataBlock.includes(`${field}:`), `Public provider metadata should include ${field}`);
});
[
  "requiresServerCredential",
  "TWILIO_",
  "PHONE_PROVIDER",
  "API_KEY",
  "SECRET",
  "TOKEN",
  "AUTH"
].forEach(secretNeedle => {
  assert(!publicMetadataBlock.includes(secretNeedle), `Public provider metadata must not expose ${secretNeedle}`);
});

const frontendLabelBlock = sourceBetween(app, "function callProviderLabel", "function callProviderDisplayLabel");
const frontendLabels = Object.fromEntries([...frontendLabelBlock.matchAll(/if \(value === "([^"]+)"\) return "([^"]+)";/g)].map(match => [match[1], match[2]]));
assert.deepEqual(Object.keys(frontendLabels), expectedProviders, "Frontend fallback labels should cover every backend call provider");
expectedProviders.forEach(provider => {
  assert.equal(frontendLabels[provider], backendMetadata[provider].label, `${provider} frontend fallback label should match backend label`);
});

const displayLabelBlock = sourceBetween(app, "function callProviderDisplayLabel", "function pendingCallDetails");
assert(displayLabelBlock.includes("metadata.label") && displayLabelBlock.includes("return callProviderLabel"), "Frontend display label helper should prefer metadata and keep local fallback");

assert.equal(backendMetadata.whatsapp.directVoiceReliable, false, "WhatsApp should remain marked direct-voice-unreliable");
assert.equal(backendMetadata.telegram.directVoiceReliable, false, "Telegram should remain marked direct-voice-unreliable");
const confirmedCardBlock = sourceBetween(app, "function renderConfirmedCallHandoffCard", "function renderPendingCallActionCard");
assert(/WhatsApp voice-call deep links are not reliable/.test(confirmedCardBlock), "WhatsApp UI copy should not claim reliable direct voice-call deep links");
assert(/Telegram direct calls need a known Telegram account/.test(confirmedCardBlock), "Telegram UI copy should require a known Telegram account/profile");

assert(bridge.webCommands.includes("call.launch"), "Native bridge contract should document call.launch");
assert.equal(bridge.confirmedCallHandoff?.command, "call.launch", "Native bridge confirmed call command should stay call.launch");
assert.equal(bridge.confirmedCallHandoff?.payload?.provider, "native-phone", "Native bridge handoff payload should stay native-phone only");
assert(bridge.confirmedCallHandoff?.requirements?.some(item => /provider must be native-phone/.test(item)), "Native bridge requirements should keep native-phone only rule");
assert(bridge.confirmedCallHandoff?.requirements?.some(item => /executionConfirmed must be true/.test(item)), "Native bridge requirements should keep executionConfirmed rule");
assert(nativeShim.includes("launchCall(payload)") && nativeShim.includes('command: "call.launch"'), "Native web shim should only forward call.launch payloads");

const nativePayloadBlock = sourceBetween(app, "function confirmedNativeCallHandoffPayload", "function nativeCallLaunchBridgeAvailable");
assert(nativePayloadBlock.includes("if (!metadata.executionConfirmed) return null"), "Frontend native payload should require backend confirmation");
assert(nativePayloadBlock.includes('if (provider !== "native-phone") return null'), "Frontend native payload should reject non-native-phone providers");
assert(nativePayloadBlock.includes('if (handoff.nativeCommand !== "call.launch") return null'), "Frontend native payload should require call.launch");
assert(nativePayloadBlock.includes('if (!safeUrl || !safeUrl.startsWith("tel:")) return null'), "Frontend native payload should require sanitized tel URLs");
assert(!nativePayloadBlock.includes("providerMetadata"), "Frontend native payload safety must not rely solely on providerMetadata");

assert(androidBridge.includes('"call.launch" -> controller.launchConfirmedCall'), "Android bridge should route call.launch to confirmed call launcher");
assert(androidController.includes('provider != "native-phone"'), "Android should require native-phone provider");
assert(androidController.includes('source != "confirmed-call-handoff"'), "Android should require confirmed-call-handoff source");
assert(androidController.includes("!confirmed"), "Android should require executionConfirmed");
assert(androidController.includes("isSafeTelUrl(url)"), "Android should validate tel URL before dialer handoff");
assert(androidController.includes("Intent(Intent.ACTION_DIAL, Uri.parse(url))"), "Android should use ACTION_DIAL");
assert(!androidController.includes("ACTION_CALL"), "Android must not use ACTION_CALL");
assert(!androidManifest.includes("CALL_PHONE"), "Android manifest must not request CALL_PHONE");

assert(iosController.includes('case "call.launch":'), "iOS should handle call.launch");
assert(iosController.includes('provider == "native-phone"'), "iOS should require native-phone provider");
assert(iosController.includes('source == "confirmed-call-handoff"'), "iOS should require confirmed-call-handoff source");
assert(iosController.includes("confirmed else"), "iOS should require executionConfirmed");
assert(iosController.includes("safeTelURL(urlValue)"), "iOS should validate tel URL before Phone UI handoff");
assert(iosController.includes('components.scheme == "tel"'), "iOS should require tel scheme");
assert(iosController.includes("UIApplication.shared.canOpenURL(telURL)"), "iOS should verify Phone UI availability");
assert(iosController.includes("UIApplication.shared.open(telURL"), "iOS should use user-visible Phone UI handoff");

console.log("Call provider drift QA passed");
