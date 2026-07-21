const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const index = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
const sw = fs.readFileSync(path.join(root, "public", "sw.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
const realtimeAgent = fs.readFileSync(path.join(root, "public", "nexus-openai-realtime-agent.js"), "utf8");

function between(source, startNeedle, endNeedle) {
  const start = source.indexOf(startNeedle);
  assert.notEqual(start, -1, `Missing start marker: ${startNeedle}`);
  const end = source.indexOf(endNeedle, start + startNeedle.length);
  assert.notEqual(end, -1, `Missing end marker after ${startNeedle}: ${endNeedle}`);
  return source.slice(start, end);
}

function includes(source, needle, label) {
  assert(source.includes(needle), `Missing ${label}: ${needle}`);
}

function excludes(source, needle, label) {
  assert(!source.includes(needle), `Unexpected ${label}: ${needle}`);
}

const realtimeSupport = between(app, "function realtimeVoiceSupported", "function realtimeVoiceEnabled");
const autoStart = between(app, "async function maybeStartGenesisRecognitionAfterGrantedPermission", "function nexusVoiceAudioDebugEnabled");
const refreshMic = between(app, "function refreshMicSupport", "function normalizedWakeText");
const presenceControls = between(app, "function renderNexusVoiceFirstPresenceControls", "function nexusGenesisVoiceDebugEnabled");
const homeGate = between(app, "function renderNexusGenesisHomeVoiceGate", "function renderNexusTrueCommandComposer");
const startListening = between(app, "async function startVoiceListening", "async function sendModuleNotification");
const runtimeManager = between(app, "function initializeNexusGenesisVoiceRuntimeManager", "async function nexusGenesisElevenLabsCandidateAllowed");
const permanentMic = between(app, "function nexusPermanentMicrophoneElements", "async function refreshChromeVoicePermissionHint");
const realtimeStartup = between(app, "async function startOpenAiAgentsRealtimeVoiceSession", "async function startRealtimeVoiceSession");

const checks = [
  [
    "Build and cache advanced",
    app.includes('const AGRINEXUS_BUILD_VERSION = "nexus-behavior-476"') &&
      app.includes('const AGRINEXUS_PWA_CACHE_VERSION = "agrinexus-pwa-v421"') &&
      server.includes('const AGRINEXUS_WEB_BUILD_VERSION = "nexus-behavior-476"') &&
      sw.includes('const CACHE_NAME = "agrinexus-pwa-v421"') &&
      index.includes("/app.js?v=nexus-behavior-476")
  ],
  [
    "Static HTML microphone exists before app JavaScript",
    index.includes('id="nexusPermanentMicrophoneDock"') &&
      index.includes('id="nexusPermanentMicrophoneBtn"') &&
      index.includes("Enable microphone") &&
      index.indexOf('id="nexusPermanentMicrophoneBtn"') < index.indexOf('/app.js?v=nexus-behavior-476') &&
      !/id="nexusPermanentMicrophoneBtn"[^>]*(hidden|disabled)/i.test(index)
  ],
  [
    "Permanent microphone CSS keeps the control visible",
    styles.includes(".nexus-permanent-microphone-dock") &&
      styles.includes("position: fixed") &&
      styles.includes("z-index: 2147483000") &&
      !between(styles, ".nexus-permanent-microphone-dock", ".nexus-permanent-microphone-button").includes("display: none") &&
      !between(styles, ".nexus-permanent-microphone-button", ".nexus-permanent-microphone-button:focus-visible").includes("visibility: hidden")
  ],
  [
    "Direct click calls getUserMedia and verifies a live track before Realtime",
    permanentMic.includes("addEventListener(\"click\", handleNexusPermanentMicrophoneClick, true)") &&
      permanentMic.includes("navigator.mediaDevices.getUserMedia({ audio: true })") &&
      permanentMic.includes('track.readyState === "live"') &&
      permanentMic.includes("track.enabled !== false") &&
      permanentMic.includes("preverifiedMicrophoneStream: stream")
  ],
  [
    "Preverified microphone stream is handed to OpenAI Realtime",
    realtimeStartup.includes("preverifiedMicrophoneStream: options.preverifiedMicrophoneStream || null") &&
      realtimeAgent.includes("const preverifiedMicrophoneStream = options.preverifiedMicrophoneStream || null") &&
      realtimeAgent.includes("if (preverifiedStream)") &&
      realtimeAgent.includes("return preverifiedStream") &&
      realtimeAgent.includes('throw new Error("Pre-acquired Nexus microphone stream is not live.")')
  ],
  [
    "Realtime microphone UI availability is separated from provider readiness",
    realtimeSupport.includes("function realtimeMicrophoneUiAvailable()") &&
      realtimeSupport.includes("navigator.mediaDevices?.getUserMedia") &&
      realtimeSupport.includes("secureEnough")
  ],
  [
    "Genesis auto-start accepts Realtime microphone capability",
    autoStart.includes("realtimeVoiceSupported?.() || window.SpeechRecognition || window.webkitSpeechRecognition") &&
      autoStart.includes('skipReason: skipReason || "permission-check-required"') &&
      !autoStart.includes("elevenLabsVoiceEnabled() && elevenLabsVoiceSupported()")
  ],
  [
    "Mic controls remain visible for Realtime/provider blocked states",
    refreshMic.includes("const realtimeMicAvailable = realtimeMicrophoneUiAvailable()") &&
      refreshMic.includes("const ready = (profile.supported || elevenLabsReady || realtimeMicAvailable) && profile.secureEnough") &&
      refreshMic.includes("Enable microphone") &&
      refreshMic.includes("Enable microphone from a secure browser page")
  ],
  [
    "Presence controls expose permission and blocked recovery without hiding the mic",
    presenceControls.includes("const realtimeMicAvailable = typeof realtimeMicrophoneUiAvailable === \"function\" && realtimeMicrophoneUiAvailable()") &&
      presenceControls.includes('permissionState === "denied" || nexusVoicePermissionDeniedThisSession') &&
      presenceControls.includes("Provider errors will not remove this control") &&
      presenceControls.includes("Microphone permission is blocked. Change microphone permission in your browser")
  ],
  [
    "Genesis audio gate reports Realtime microphone support",
    homeGate.includes("profile.supported || realtimeMicAvailable") &&
      homeGate.includes('data-nexus-genesis-audio-gate="true"')
  ],
  [
    "Runtime manager remains Realtime-only",
    runtimeManager.includes("legacyAdapter: null") &&
      runtimeManager.includes("elevenLabsAdapter: null") &&
      runtimeManager.includes('activeRuntime: "realtime"') &&
      startListening.includes('runtimeOnly: "realtime"') &&
      !startListening.includes('runtimeOnly: "legacy"')
  ],
  [
    "Realtime/provider failure is truthful and does not remove mic/orb",
    app.includes("OpenAI Realtime voice did not start:") &&
      app.includes("Nexus voice connection unavailable — retry") &&
      app.includes("The microphone and orb remain available.") &&
      app.includes("OpenAI Realtime did not connect to a live microphone track.")
  ],
  [
    "Permanent microphone stream is protected from non-explicit cleanup",
    app.includes("permanent-microphone-stop-skipped") &&
      app.includes("nexusPermanentMicrophoneOwner") &&
      app.includes("browser-verified-genesis-voice-runtime-manager")
  ],
  [
    "Production voice diagnostic is non-secret and authoritative",
    server.includes('/api/nexus/production/voice-diagnostics') &&
      server.includes("deployedCommit") &&
      server.includes("selectedVoiceRuntime") &&
      server.includes("microphoneOwner") &&
      server.includes("removedRuntimeIdentifiers") &&
      server.includes("noSecretValues: true")
  ],
  [
    "No obsolete ElevenLabs or direct SDK runtime restored",
    app.includes("function elevenLabsVoiceSupported() {\n  return false;") &&
      app.includes("function elevenLabsVoiceEnabled() {\n  return false;") &&
      !index.includes("/vendor/elevenlabs-client") &&
      !server.includes("app.use(\"/vendor/elevenlabs-client")
  ]
];

const failures = checks.filter(([, ok]) => !ok).map(([label]) => label);
assert.deepEqual(failures, [], `Realtime microphone visibility regressions: ${failures.join(", ")}`);

excludes(app, "Mic unavailable\";", "hard unavailable mic label");
includes(app, "Microphone control is ready.", "visible microphone ready copy");
includes(index, 'data-nexus-permanent-microphone-control="true"', "permanent microphone control contract");

console.log("Nexus Realtime microphone visibility QA passed");
for (const [label] of checks) console.log(`- ${label}`);
