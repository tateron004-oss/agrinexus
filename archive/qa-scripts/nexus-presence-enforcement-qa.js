const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function assert(condition, label) {
  if (!condition) {
    console.error(`FAIL ${label}`);
    process.exit(1);
  }
  console.log(`PASS ${label}`);
}

function sectionBetween(source, startNeedle, endNeedle) {
  const start = source.indexOf(startNeedle);
  assert(start >= 0, `${startNeedle} exists`);
  const end = source.indexOf(endNeedle, start);
  assert(end > start, `${endNeedle} follows ${startNeedle}`);
  return source.slice(start, end);
}

const app = read("public/app.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");
const bible = read("docs/NEXUS_PRESENCE_DESIGN_BIBLE.md");

const enforcementBlock = sectionBetween(app, "const NEXUS_PRESENCE_DESIGN_ENFORCEMENT_CONTRACT", "let nexusPresenceState");
const auditedRuntime = app.replace(enforcementBlock, "");
const baselineBlock = sectionBetween(app, "const NEXUS_PRESENCE_RUNTIME_BASELINE", "const NEXUS_PRESENCE_PROFILE_CONTRACT");
const profileBlock = sectionBetween(app, "const NEXUS_PRESENCE_PROFILE_CONTRACT", "const NEXUS_PRESENCE_DESIGN_ENFORCEMENT_CONTRACT");
const capabilityBlock = sectionBetween(app, "const NEXUS_VOICE_CAPABILITY_REGISTRY", "const NEXUS_REGIONAL_VOICE_RESOLUTION_CONTRACT");
const regionalBlock = sectionBetween(app, "const NEXUS_REGIONAL_VOICE_RESOLUTION_CONTRACT", "function normalizeNexusVoiceLocale");
const exposureBlock = sectionBetween(app, "function exposeNexusAppWindowApis", "function exposeNexusBrainIntelligenceRuntimeApis");

[
  "schemaVersion: \"nexus-presence-design-enforcement.v1\"",
  "Nexus Presence Standard 1.0",
  "docs/NEXUS_PRESENCE_DESIGN_BIBLE.md",
  "scripts/nexus-presence-enforcement-qa.js",
  "NEXUS_PRESENCE_RUNTIME_BASELINE",
  "NEXUS_PRESENCE_PROFILE_CONTRACT",
  "NEXUS_VOICE_CAPABILITY_REGISTRY",
  "NEXUS_REGIONAL_VOICE_RESOLUTION_CONTRACT",
  "NEXUS_CONVERSATION_STYLE_ENGINE_CONTRACT",
  "NEXUS_DOMAIN_TONE_SAFETY_ADAPTER_CONTRACT",
  "NEXUS_SPEECH_SYNTHESIS_CONTROLLER_CONTRACT",
  "NEXUS_LISTENING_WAKE_CONTROLLER_CONTRACT",
  "NEXUS_PRESENCE_SYNCHRONIZATION_CONTRACT",
  "NEXUS_VOICE_PREFERENCES_ACCESSIBILITY_CONTRACT"
].forEach(token => assert(enforcementBlock.includes(token), `enforcement contract includes ${token}`));

[
  "Module initialized.",
  "Execution completed.",
  "Workflow failed.",
  "Missing required fields.",
  "Payload submitted.",
  "Let's work through that.",
  "I can't reach that service right now.",
  "That was completed and confirmed.",
  "I wasn't able to complete that step.",
  "I need one more detail before I can continue.",
  "Information is sent only after confirmation and receipt evidence."
].forEach(token => assert(enforcementBlock.includes(token), `plain-language enforcement maps ${token}`));

[
  "completionRequiresVerifiedState: true",
  "preparedIsNotSent: true",
  "providerUnavailableIsNotCompleted: true",
  "browserHandoffIsNotProviderCompletion: true",
  "receiptRequiresOutcomeEvidence: true",
  "canonicalSpeechRecognitionController: \"NexusSpeechRecognitionController\"",
  "canonicalSpeechSynthesisController: \"NexusSpeechSynthesisController\"",
  "domainAdaptersMayNotCreateVoiceEngines: true",
  "deploymentProfilesMayNotCopyVoiceRuntime: true"
].forEach(token => assert(enforcementBlock.includes(token), `completion/runtime enforcement includes ${token}`));

[
  "[data-nexus-presence-status-announcement]",
  "[data-nexus-presence-caption-sync]",
  "[data-nexus-voice-preferences-controls]",
  "[data-nexus-os-conversation-live-region]",
  "[data-nexus-os-voice-control]"
].forEach(token => {
  assert(enforcementBlock.includes(token), `accessibility selector required by contract: ${token}`);
  assert(app.includes(token.replace("[", "").replace("]", "")) || app.includes(token), `accessibility selector exists in runtime: ${token}`);
});

[
  "Nexus heard you when recognition failed",
  "Nexus is speaking when synthesis failed",
  "Regional accent is available without provider support",
  "Provider action completed without verified provider state",
  "Domain pack owns a separate voice runtime"
].forEach(token => assert(enforcementBlock.includes(token), `prohibited claim recorded: ${token}`));

[
  "calm",
  "confident",
  "warm",
  "patient",
  "intelligent",
  "respectful",
  "honest",
  "nonjudgmental",
  "professional",
  "noFakeSpeech: true",
  "noFakeAccent: true",
  "noFakeHearing: true",
  "noFakeCompletion: true"
].forEach(token => assert(baselineBlock.includes(token), `baseline preserves Presence identity/honesty token ${token}`));

[
  "\"id\"",
  "\"displayName\"",
  "\"profileRole\"",
  "\"identityTraits\"",
  "\"deliveryModes\"",
  "\"toneBoundaries\"",
  "\"voiceProviderPolicy\"",
  "\"regionalizationPolicy\"",
  "\"accessibilityPolicy\"",
  "\"safetyBoundaries\"",
  "noVoiceCloning: true",
  "noCharacterImitation: true",
  "noRegionalAccentClaimWithoutProvider: true"
].forEach(token => assert(profileBlock.includes(token), `profile schema enforcement includes ${token}`));

[
  "NexusSpeechRecognitionController",
  "NexusSpeechSynthesisController",
  "NexusPresenceAccessibilityAdapter",
  "noSilentMicrophoneStart: true",
  "noAlwaysOnListening: true",
  "noVoiceProviderExecutionAuthority: true",
  "captionsRemainAvailable: true"
].forEach(token => assert(capabilityBlock.includes(token), `voice capability registry preserves ${token}`));

[
  "noFakeAccent: true",
  "noRegionalAccentClaimWithoutProvider: true",
  "discloseFallbackVoice: true",
  "caption-and-typed-fallback"
].forEach(token => assert(regionalBlock.includes(token), `regional voice honesty includes ${token}`));

[
  "window.NEXUS_PRESENCE_DESIGN_ENFORCEMENT_CONTRACT",
  "window.getNexusPresenceDesignEnforcementContract"
].forEach(token => assert(exposureBlock.includes(token), `enforcement API exposed: ${token}`));

[
  "Nexus Presence Design Bible",
  "public/app.js",
  "scripts/nexus-presence-enforcement-qa.js",
  "NEXUS_PRESENCE_RUNTIME_BASELINE",
  "NEXUS_PRESENCE_DESIGN_ENFORCEMENT_CONTRACT",
  "Delivery Modes",
  "Conversation Patterns",
  "Regionalization",
  "Orb, Captions, And Mission State",
  "Accessibility And Memory",
  "Execution Honesty",
  "Testing Requirements",
  "node scripts/nexus-presence-enforcement-qa.js"
].forEach(token => assert(bible.includes(token), `Design Bible references ${token}`));

[
  "Module initialized",
  "Execution completed",
  "Missing required fields",
  "Payload submitted"
].forEach(phrase => assert(!auditedRuntime.includes(`\"${phrase}.\"`) && !auditedRuntime.includes(`>${phrase}.<`), `runtime does not expose prohibited exact phrase outside enforcement policy: ${phrase}.`));

[
  "guaranteed Kenyan voice",
  "guaranteed Nigerian voice",
  "guaranteed South African voice",
  "accent simulation",
  "fake regional voice"
].forEach(phrase => assert(!auditedRuntime.toLowerCase().includes(phrase.toLowerCase()), `runtime does not claim unsupported regional voice label outside enforcement policy: ${phrase}`));

[
  /function\s+.*Agriculture.*Speech.*Runtime/i,
  /function\s+.*Health.*Speech.*Runtime/i,
  /function\s+.*Learning.*Speech.*Runtime/i,
  /const\s+.*Agriculture.*Voice.*Engine/i,
  /const\s+.*Health.*Voice.*Engine/i
].forEach(pattern => assert(!pattern.test(app), `no domain-specific duplicate voice runtime matches ${pattern}`));

assert(packageJson.scripts["qa:nexus-presence-enforcement"] === "node scripts/nexus-presence-enforcement-qa.js", "package alias exists");
assert(qaSuite.includes("scripts/nexus-presence-enforcement-qa.js"), "safe QA suite includes presence enforcement QA");

console.log("Nexus Presence enforcement QA passed.");
