const fs = require("fs");
const path = require("path");
const assert = require("assert");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");

function sectionBetween(source, start, end) {
  const startIndex = source.indexOf(start);
  assert(startIndex >= 0, `${start} exists`);
  const endIndex = source.indexOf(end, startIndex + start.length);
  assert(endIndex > startIndex, `${end} follows ${start}`);
  return source.slice(startIndex, endIndex);
}

function includes(source, needle, label) {
  assert(source.includes(needle), `${label} should include ${needle}`);
  console.log(`PASS ${label}`);
}

const baselineBlock = sectionBetween(app, "const NEXUS_PRESENCE_RUNTIME_BASELINE", "const NEXUS_CORE_STATE_CONTRACT");
const getterBlock = sectionBetween(app, "function getNexusPresenceRuntimeBaseline()", "function renderNexusPresenceRuntimeBadge()");
const badgeBlock = sectionBetween(app, "function renderNexusPresenceRuntimeBadge()", "function handleNexusPresenceWakePhrase");
const exposeBlock = sectionBetween(app, "function exposeNexusAppWindowApis()", "function exposeNexusBrainIntelligenceRuntimeApis()");

[
  'schemaVersion: "nexus-presence-runtime.v1"',
  'officialProfile: "Nexus Presence"',
  "sharedCoreService: true",
  "NexusPresenceRuntime",
  "NexusVoiceProfileRegistry",
  "NexusVoiceCapabilityRegistry",
  "NexusVoiceResolver",
  "NexusSpeechRecognitionController",
  "NexusSpeechSynthesisController",
  "NexusConversationStyleEngine",
  "NexusResponseComposer",
  "NexusDomainToneAdapter",
  "NexusEmotionContextAdapter",
  "NexusPronunciationLexicon",
  "NexusCaptionSynchronizer",
  "NexusOrbSpeechSynchronizer",
  "NexusVoicePreferenceManager",
  "NexusPresencePolicyEngine",
  "NexusPresenceTelemetry",
  "NexusPresenceAccessibilityAdapter"
].forEach(token => includes(baselineBlock, token, `presence baseline token ${token}`));

[
  '"calm"',
  '"confident"',
  '"warm"',
  '"patient"',
  '"intelligent"',
  '"respectful"',
  '"honest"',
  '"nonjudgmental"',
  '"professional"'
].forEach(token => includes(baselineBlock, token, `presence identity trait ${token}`));

[
  "STANDARD",
  "CLINICAL",
  "GUIDE",
  "FOCUS",
  "URGENT",
  "speechRate: 0.92",
  "no diagnosis"
].forEach(token => includes(baselineBlock, token, `presence delivery mode ${token}`));

[
  'voiceSchema: "nexus-os-voice-runtime.v1"',
  'voiceOwner: "nexus-os-canonical-voice"',
  'presence: "nexusPresenceState"',
  'conversation: "nexusOsConversationTurns"',
  'captions: "nexus-os-transcript-strip"',
  'orb: "nexusCoreRuntimeState"',
  'mission: "nexusOsMissionLifecycleState"'
].forEach(token => includes(baselineBlock, token, `shared runtime source ${token}`));

[
  "noFakeSpeech: true",
  "noFakeAccent: true",
  "noFakeHearing: true",
  "noFakeCompletion: true",
  "must not claim a regional voice or accent is available unless the provider actually supplies it",
  "captionsRequired: true",
  "keyboardFallbackRequired: true",
  "screenReaderStatusRequired: true",
  "reducedMotionRequired: true",
  "textFallbackRequired: true",
  "noSpeechOnlyBlocking: true"
].forEach(token => includes(baselineBlock, token, `presence safety/accessibility token ${token}`));

[
  "window.SpeechRecognition || window.webkitSpeechRecognition",
  "window.speechSynthesis && window.SpeechSynthesisUtterance",
  "currentNexusOsMission()",
  "nexusOsVoiceRuntimeState.schemaVersion",
  "nexusOsVoiceRuntimeState.runtimeOwner",
  "nexusOsConversationTurns.length",
  "nexusCoreRuntimeState.current",
  "nexusOsMissionLifecycleState.activeMission",
  'noDuplicateVoiceRuntime: nexusOsVoiceRuntimeState.runtimeOwner === "nexus-os-canonical-voice"',
  "contracted-for-next-presence-rail"
].forEach(token => includes(getterBlock, token, `presence getter token ${token}`));

[
  'data-nexus-presence-runtime="shared"',
  'data-nexus-presence-profile="${escapeHtml(baseline.officialProfile)}"',
  'data-nexus-presence-schema="${escapeHtml(baseline.schemaVersion)}"',
  'data-nexus-presence-no-fake-speech="${baseline.honestyPolicy.noFakeSpeech ? "true" : "false"}"',
  'data-nexus-presence-no-fake-accent="${baseline.honestyPolicy.noFakeAccent ? "true" : "false"}"',
  'data-nexus-presence-accessibility="captions keyboard screen-reader reduced-motion text-fallback"',
  "Shared voice, captions, orb, and mission state",
  "typed fallback available"
].forEach(token => includes(badgeBlock, token, `presence badge token ${token}`));

includes(app, "${renderNexusPresenceRuntimeBadge()}", "presence badge rendered in command center");
includes(exposeBlock, "window.NEXUS_PRESENCE_RUNTIME_BASELINE = NEXUS_PRESENCE_RUNTIME_BASELINE", "presence baseline exposed for runtime inspection");
includes(exposeBlock, "window.getNexusPresenceRuntimeBaseline = getNexusPresenceRuntimeBaseline", "presence getter exposed for runtime inspection");

[
  ".nexus-presence-runtime-badge",
  "text-shadow: 0 0 14px rgba(34, 211, 238, 0.28)",
  "backdrop-filter: blur(14px)"
].forEach(token => includes(styles, token, `presence badge style ${token}`));

assert(!/voice cloned|imitates? .*actor|any regional accent|guaranteed accent|fake hearing|fake completion/i.test(app), "Presence runtime must not introduce fake voice/accent/completion claims");
console.log("PASS no fake presence claims");

assert(pkg.scripts["qa:nexus-presence-runtime-baseline"] === "node scripts/nexus-presence-runtime-baseline-qa.js", "package alias exists");
console.log("PASS package alias exists");
assert(qaSuite.includes("scripts/nexus-presence-runtime-baseline-qa.js"), "safe QA suite includes presence runtime baseline QA");
console.log("PASS safe QA suite includes presence runtime baseline QA");

console.log("Nexus Presence runtime baseline QA passed.");
