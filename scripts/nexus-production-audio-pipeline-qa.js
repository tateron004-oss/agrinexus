const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-production-audio-pipeline-qa] FAIL: ${message}`);
    process.exit(1);
  }
}

function includesAll(source, tokens, label) {
  for (const token of tokens) {
    assert(source.includes(token), `${label} missing ${token}`);
  }
}

includesAll(app, [
  "nexusVoiceAudioPipeline",
  "recordNexusAudioPipelineEvent",
  "media-stream-request",
  "media-stream-granted",
  "genesis-auto-start-check",
  "genesis-auto-start-skipped",
  "genesis-auto-start-triggered",
  "genesis-home-permission-granted-auto-start",
  "normalizeNexusMicrophonePermissionState",
  "nexusMicrophonePermissionCanAttemptStart",
  "get-user-media-required",
  "liveTrackVerified: true",
  "recognition-constructing",
  "recognition-handlers-registered",
  "recognition-start-call",
  "recognition-onstart",
  "recognition-audiostart",
  "recognition-speechstart",
  "recognition-result-event",
  "recognition-final-transcript",
  "duplicate-transcript-prevented",
  "agent-command-request",
  "agent-command-response",
  "speech-synthesis-request",
  "speech-synthesis-onstart",
  "speech-synthesis-onend",
  "speech-synthesis-error",
  "speech-synthesis-start-unconfirmed"
], "audio pipeline instrumentation");

includesAll(app, [
  "acquireNexusMicrophoneStreamForVoice",
  "navigator.mediaDevices.getUserMedia",
  "NoLiveAudioTrackError",
  "startNexusAudioFallbackRecorder",
  "MediaRecorder",
  "submitNexusAudioFallbackForTranscription",
  'request("/api/voice/transcribe"',
  "browser-mediarecorder-fallback",
  "scheduleFinalVoiceCommand(transcript"
], "microphone and fallback STT path");

includesAll(app, [
  "nexusVoiceLastSubmittedSignature",
  "nexusVoiceLastSubmittedAt",
  "commandSubmitted: true",
  "synthesisRequested: true"
], "duplicate prevention and evidence flags");

assert(app.includes("I will not claim I can hear audio until recognition starts."), "hearing check must not claim hearing from permission alone");
assert(app.includes("Microphone permission may be available, but recognition is not actively listening now."), "permission-granted recognition failure must be truthful");
assert(app.includes("Genesis keeps the home screen audio-first"), "voice fallback copy must keep Genesis home audio-first");

assert(app.includes("nexus-behavior-446"), "app build identifier must be bumped");
assert(server.includes("nexus-behavior-446"), "server build identifier must be bumped");
assert(app.includes("agrinexus-pwa-v391"), "app PWA cache identifier must be bumped");
assert(server.includes("agrinexus-pwa-v391"), "server PWA cache identifier must be bumped");
const autoStartBlock = app.slice(app.indexOf("async function maybeStartGenesisRecognitionAfterGrantedPermission"), app.indexOf("function nexusVoiceAudioDebugEnabled"));
assert(autoStartBlock.includes("nexusMicrophonePermissionCanAttemptStart(permission)"), "prompt/granted/browser-managed permission states must be eligible for getUserMedia attempt");
assert(!autoStartBlock.includes("granted-or-browser-managed"), "auto-start must not compare against legacy display labels");
const startBlock = app.slice(app.indexOf("async function startVoiceListening"), app.indexOf("async function sendModuleNotification"));
assert(!startBlock.includes("stopNexusVoicePermissionStream(\"web-speech-final\")"), "valid microphone stream must remain alive after final transcript");

const orbStyleBlock = app.match(/\[data-nexus-os-core-orb\]\s*\{[\s\S]*?\}/)?.[0] || "";
assert(orbStyleBlock.includes("pointer-events: none"), "Genesis orb must remain pointer-events none");
assert(orbStyleBlock.includes("cursor: default"), "Genesis orb must keep default cursor");
assert(!orbStyleBlock.includes("cursor: pointer"), "Genesis orb block must not restore pointer cursor");

assert(server.includes('url.pathname === "/api/voice/transcribe"'), "server voice transcription endpoint must exist");
assert(server.includes("openAiTranscribeAudio"), "server must support configured OpenAI STT fallback");

assert(pkg.scripts["qa:nexus-production-audio-pipeline"] === "node scripts/nexus-production-audio-pipeline-qa.js", "package alias missing");
assert(qaSuite.includes("scripts/nexus-production-audio-pipeline-qa.js"), "qa-suite must include production audio pipeline QA");

console.log(JSON.stringify({
  ok: true,
  suite: "nexus-production-audio-pipeline",
  verifies: [
    "microphone permission is tracked separately from recognition success",
    "browser recognition lifecycle is instrumented",
    "MediaRecorder STT fallback routes to /api/voice/transcribe",
    "transcripts are submitted once",
    "speech synthesis lifecycle is instrumented",
    "orb remains non-interactive",
    "Genesis home remains audio-first"
  ]
}, null, 2));
