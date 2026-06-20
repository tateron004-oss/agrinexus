const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");

function assertContains(value, label) {
  assert(server.includes(value), label);
}

function providerBlock(provider) {
  const start = server.indexOf(`"${provider}": Object.freeze({`);
  assert(start > -1, `${provider} should exist in CALL_PROVIDER_REGISTRY`);
  const nextProvider = server.indexOf("\n  \"", start + provider.length + 20);
  const endRegistry = server.indexOf("\n});", start);
  return server.slice(start, nextProvider > -1 && nextProvider < endRegistry ? nextProvider : endRegistry);
}

function assertProvider(provider, expectations) {
  const block = providerBlock(provider);
  Object.entries(expectations).forEach(([key, expected]) => {
    const rendered = typeof expected === "string"
      ? `${key}: "${expected}"`
      : `${key}: ${expected}`;
    assert(block.includes(rendered), `${provider} should include ${rendered}`);
  });
}

assertContains("const CALL_PROVIDER_REGISTRY = Object.freeze({", "backend should define a call provider registry");
assertContains("function normalizeCallProvider", "backend should normalize provider keys");
assertContains("function isKnownCallProvider", "backend should expose known-provider checks internally");
assertContains("function callProviderConfig", "backend should read provider config through a helper");
assertContains("function callProviderLabel", "backend should derive backend labels through a helper");
assertContains("function callProviderFallbackMode", "backend should derive fallback mode through a helper");

assertProvider("twilio", {
  label: "Phone",
  handoffType: "server-call",
  canDial: true,
  canDeepLink: false,
  requiresPhone: true,
  requiresServerCredential: true,
  confirmedOnly: true,
  nativeEligible: false,
  browserEligible: false,
  directVoiceReliable: true,
  fallbackMode: "server-config-needed"
});

assertProvider("native-phone", {
  label: "Native phone dialer",
  handoffType: "native-dialer",
  canDial: false,
  canDeepLink: true,
  requiresPhone: true,
  requiresServerCredential: false,
  confirmedOnly: true,
  nativeEligible: true,
  browserEligible: true,
  directVoiceReliable: true,
  fallbackMode: "tel-link-or-instruction"
});

assertProvider("whatsapp", {
  label: "WhatsApp",
  handoffType: "contact-or-chat-instruction",
  canDial: false,
  canDeepLink: true,
  requiresPhone: true,
  requiresServerCredential: false,
  confirmedOnly: true,
  nativeEligible: false,
  browserEligible: true,
  directVoiceReliable: false,
  fallbackMode: "chat-instruction"
});

assertProvider("telegram", {
  label: "Telegram",
  handoffType: "profile-instruction",
  canDial: false,
  canDeepLink: true,
  requiresPhone: false,
  requiresHandle: true,
  requiresServerCredential: false,
  confirmedOnly: true,
  nativeEligible: false,
  browserEligible: true,
  directVoiceReliable: false,
  fallbackMode: "known-handle-only"
});

assertProvider("browser-fallback", {
  label: "Browser fallback",
  handoffType: "instruction",
  canDial: false,
  canDeepLink: false,
  requiresPhone: false,
  requiresHandle: false,
  requiresServerCredential: false,
  confirmedOnly: true,
  nativeEligible: false,
  browserEligible: true,
  directVoiceReliable: false,
  fallbackMode: "instruction-only"
});

const handoffBlock = server.slice(server.indexOf("function callProviderHandoff"), server.indexOf("function callIntentSection"));
assert(handoffBlock.includes("const normalizedProvider = normalizeCallProvider(provider);"), "handoff builder should normalize unknown providers");
assert(handoffBlock.includes("WhatsApp direct voice-call links are not reliable"), "WhatsApp must remain direct-voice-unreliable");
assert(handoffBlock.includes("Telegram direct voice calling needs a known Telegram account/handle"), "Telegram must remain known-handle/profile-only");
assert(handoffBlock.includes('type: "twilio-call"') && handoffBlock.includes('endpoint: "/api/voice/phone/outbound-call"'), "Twilio should remain a server-call handoff");
assert(handoffBlock.includes('nativeCommand: "call.launch"'), "native-phone should remain native bridge eligible only after confirmation");
assert(handoffBlock.includes("This platform can stage the call request and provide safe instructions after confirmation."), "unknown providers should fall back to instruction-only behavior");

const executeBlock = server.slice(server.indexOf("async function executePendingAgentAction"), server.indexOf("function availableAgentTools"));
assert(executeBlock.includes('pending.kind === "call" && pending.provider === "twilio"'), "Twilio execution branch should remain explicit");
assert(executeBlock.includes("await createOutboundCallWorkflow"), "Twilio branch should still use backend outbound workflow");
assert(executeBlock.includes('pending.kind === "call" && pending.provider && pending.provider !== "twilio"'), "non-Twilio branch should remain handoff-only");
assert(executeBlock.includes("liveCallPlaced: false"), "non-Twilio confirmations should not place live calls");

console.log("Call provider registry QA passed");
