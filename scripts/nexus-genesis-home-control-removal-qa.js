const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-genesis-home-control-removal-qa] FAIL: ${message}`);
    process.exit(1);
  }
}

function sectionBetween(source, start, end, label) {
  const startIndex = source.indexOf(start);
  assert(startIndex >= 0, `${label} missing start ${start}`);
  const endIndex = source.indexOf(end, startIndex + start.length);
  assert(endIndex > startIndex, `${label} missing end ${end}`);
  return source.slice(startIndex, endIndex);
}

function includesAll(source, tokens, label) {
  for (const token of tokens) assert(source.includes(token), `${label} missing ${token}`);
}

const home = sectionBetween(app, "function renderNexusTrueHome", "function renderNexusAudioCompanionExperience", "Genesis home");
const voiceGate = sectionBetween(app, "function renderNexusGenesisHomeVoiceGate", "function renderNexusTrueCommandComposer", "Genesis home voice runtime marker");
const orb = sectionBetween(app, "function renderNexusTrueCoreOrb", "function handleNexusPrimaryVoiceButtonClick", "Genesis orb renderer");
const autoStart = sectionBetween(app, "async function maybeStartGenesisRecognitionAfterGrantedPermission", "function nexusVoiceAudioDebugEnabled", "automatic voice start");
const supervisorStartVoice = sectionBetween(app, "async function startVoiceListening", "async function sendModuleNotification", "voice supervisor startup");
const startVoice = sectionBetween(app, "async function startVoiceRuntimeTransport", "async function startVoiceListening", "voice startup");
const acquireStream = sectionBetween(app, "async function acquireNexusMicrophoneStreamForVoice", "async function refreshChromeVoicePermissionHint", "microphone stream acquisition");
const speechResume = sectionBetween(app, "function resumeVoiceListeningAfterSpeech", "function stopVoicePlayback", "speech restart");
const orbCss = sectionBetween(app, "[data-nexus-os-core-orb] {", "[data-nexus-os-core-orb].nexus-core-state-idle", "inline orb CSS");
const homeOrbCss = sectionBetween(styles, "body.user-mode .nexus-genesis-orb-only-home .nexus-true-orb-stage {", "body.user-mode .nexus-genesis-orb-only-home .nexus-true-orb-stage:focus-visible", "home orb CSS");

includesAll(home, [
  "data-nexus-genesis-orb-only-home=\"true\"",
  "renderNexusTrueCoreOrb({ home: true })",
  "renderNexusGenesisHomeVoiceGate()",
  "Nexus Genesis home is audio-only.",
  "non-interactive voice companion presence"
], "Genesis home");
assert(!home.includes("renderNexusTrueCommandComposer"), "Genesis home must not mount a general text composer");
assert(!home.includes("nexusCommandCenterInput"), "Genesis home must not include command center text input");
assert(!home.includes("Talk to Nexus"), "Genesis home must not show a Talk button");
assert(!home.includes("Start Conversation"), "Genesis home must not show a Start Conversation button");

includesAll(voiceGate, [
  "data-nexus-genesis-audio-gate=\"true\"",
  "data-nexus-genesis-voice-runtime=\"true\"",
  "NEXUS_GENESIS_VOICE_RUNTIME_VERSION",
  "aria-live=\"polite\""
], "nonvisual Genesis voice runtime marker");
[
  "button",
  "data-nexus-genesis-mic-permission-control",
  "data-nexus-os-voice-control",
  "Allow microphone",
  "renderNexusGenesisVoiceDebugPanel",
  "details",
  "summary",
  "lastVoiceResponse"
].forEach(token => assert(!voiceGate.includes(token), `Genesis home voice marker must not render ${token}`));

includesAll(orb, [
  "role=\"img\"",
  "data-nexus-genesis-home-orb=\"true\"",
  "data-nexus-genesis-orb-presence=\"true\""
], "Genesis orb");
assert(!orb.includes("role=\"button\""), "orb must not expose button role");
assert(!orb.includes("tabindex=\"0\""), "orb must not be keyboard focusable");
assert(!orb.includes("onclick"), "orb must not attach click behavior");
assert(!app.includes("function handleNexusGenesisOrbActivation"), "legacy orb activation handler must remain removed");
assert(!app.includes("handleNexusGenesisOrbActivation"), "legacy orb activation references must remain removed");

includesAll(orbCss, ["pointer-events: none !important", "cursor: default !important"], "inline orb non-interaction CSS");
includesAll(homeOrbCss, ["pointer-events: none", "cursor: default"], "home orb non-interaction CSS");

includesAll(autoStart, [
  "nexusGenesisVoiceSessionActive = true",
  "voiceFirstMode = true",
  "voiceAutoRestart = true",
  "nexusMicrophonePermissionCanAttemptStart(permission)",
  "startVoiceListening({ source: \"genesis-home-permission-granted-auto-start\" })"
], "automatic Genesis voice startup");
assert(!autoStart.includes("granted-or-browser-managed"), "auto-start must not compare against legacy human-readable permission labels");

includesAll(startVoice, [
  "recognition-handlers-registered",
  "recognition-start-call",
  "recognition-onstart",
  "recognition-restart-requested"
], "voice startup path");
includesAll(supervisorStartVoice, [
  "nexusGenesisConversationSupervisor",
  "supervisor.start(options.source || \"start-voice-listening\")",
  "startVoiceRuntimeTransport({ ...options, runtimeOnly: \"legacy\", managedRuntime: true })"
], "voice supervisor startup path");
includesAll(acquireStream, [
  "navigator.mediaDevices.getUserMedia",
  "media-stream-granted",
  "liveTrackVerified: true",
  "NoLiveAudioTrackError"
], "microphone acquisition path");
includesAll(speechResume, [
  "nexusGenesisVoiceSessionActive",
  "genesis-speech-finished-restart",
  "recognition-restart-requested"
], "speech-to-listening restart");

assert(pkg.scripts["qa:nexus-genesis-home-control-removal"] === "node scripts/nexus-genesis-home-control-removal-qa.js", "package alias missing");
assert(qaSuite.includes("scripts/nexus-genesis-home-control-removal-qa.js"), "qa-suite missing home control removal QA");

console.log(JSON.stringify({
  ok: true,
  suite: "nexus-genesis-home-control-removal",
  verifies: [
    "Genesis home has no text composer or application microphone controls",
    "Genesis debug UI is not rendered",
    "orb remains permanently non-interactive",
    "Genesis automatically starts the voice path",
    "speech completion restarts recognition"
  ]
}, null, 2));
