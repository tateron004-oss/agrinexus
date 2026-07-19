const assert = require("node:assert");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const serverSource = fs.readFileSync(path.join(root, "server.js"), "utf8");
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const port = Number(process.env.NEXUS_GENESIS_SPOKEN_OUTPUT_QA_PORT || 4598);
const base = `http://127.0.0.1:${port}`;
const tempDb = path.join(root, "tmp-genesis-spoken-output-non-regression-qa-db.json");
let cookie = "";

function sectionBetween(source, start, end, label) {
  const startIndex = source.indexOf(start);
  assert(startIndex >= 0, `${label} missing ${start}`);
  const endIndex = source.indexOf(end, startIndex + start.length);
  assert(endIndex > startIndex, `${label} missing ${end}`);
  return source.slice(startIndex, endIndex);
}

function includesAll(source, tokens, label) {
  for (const token of tokens) assert(source.includes(token), `${label} missing ${token}`);
}

const autoStart = sectionBetween(app, "async function maybeStartGenesisRecognitionAfterGrantedPermission", "function nexusVoiceAudioDebugEnabled", "automatic microphone startup");
const pipeline = sectionBetween(app, "function recordNexusAudioPipelineEvent", "function nexusVoiceAudioPipelineSnapshot", "audio pipeline event recorder");
const streamOwner = sectionBetween(app, "async function acquireNexusMicrophoneStreamForVoice", "async function refreshChromeVoicePermissionHint", "getUserMedia owner");
const supervisorStart = sectionBetween(app, "async function startVoiceListening", "async function sendModuleNotification", "recognition supervisor startup");
const recognitionStart = sectionBetween(app, "async function startVoiceRuntimeTransport", "async function startVoiceListening", "recognition startup");
const speechOutput = sectionBetween(app, "function speakVoiceResponse", "function setVoiceStatus", "spoken output");

includesAll(autoStart, [
  "startVoiceListening({ source: \"genesis-home-permission-granted-auto-start\" })",
  "nexusMicrophonePermissionCanAttemptStart(permission)",
  "genesis-auto-start-triggered"
], "Genesis automatic startup lock");
includesAll(streamOwner, [
  "navigator.mediaDevices.getUserMedia",
  "liveTrackVerified: true",
  "NoLiveAudioTrackError"
], "getUserMedia live-track lock");
includesAll(pipeline, [
  '"media-stream-granted"',
  "microphoneTrackState: \"live\"",
  '"agent-command-request"',
  "commandRequestStarted: true"
], "audio pipeline live-track state lock");
includesAll(supervisorStart, [
  "nexusGenesisConversationSupervisor",
  "supervisor.start(options.source || \"start-voice-listening\")",
  "startVoiceRuntimeTransport({ ...options, runtimeOnly: \"realtime\", managedRuntime: true })"
], "SpeechRecognition supervisor lock");
includesAll(recognitionStart, [
  "recognition-handlers-registered",
  "voiceRecognition.onstart",
  "recognition-onstart",
  "voiceRecognition.onresult",
  "recognition-final-transcript",
  "voiceRecognition.start()"
], "SpeechRecognition command-submission lock");
includesAll(speechOutput, [
  "sanitizeNexusSpokenResponseText(text)",
  "spokenTextSanitized: true",
  "spokenTextLength",
  "resumeVoiceListeningAfterSpeech(playbackToken, interruptToken)",
  "genesisVoiceBrowserSpeechRecoveryEnabled()",
  "forceOpenAi: true"
], "spoken output sanitation and restart contract");
includesAll(serverSource, [
  "function sanitizeNexusSpokenResponseText",
  "code block omitted from spoken response",
  "source link available in text",
  "redacted credential",
  "spokenTextLength",
  "responseFormat",
  "Do not read markdown symbols, URLs, code blocks, or diagnostic labels aloud"
], "server TTS sanitation and diagnostics");
assert(!speechOutput.includes("startVoiceListening({ source: \"speech-output"), "spoken output must not invent a new recognition architecture");
assert(!serverSource.includes("OPENAI_API_KEY:"), "server must not serialize secret values");
assert.strictEqual(pkg.scripts["qa:nexus-genesis-spoken-output-non-regression"], "node scripts/nexus-genesis-spoken-output-non-regression-qa.js", "package alias missing");
assert(qaSuite.includes("scripts/nexus-genesis-spoken-output-non-regression-qa.js"), "qa-suite missing spoken-output non-regression QA");

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

async function waitForServer() {
  for (let index = 0; index < 80; index += 1) {
    try {
      const response = await fetch(`${base}/api/healthz`);
      if (response.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error("spoken output QA server did not become reachable");
}

async function jsonCall(route, body) {
  const response = await fetch(`${base}${route}`, {
    method: body ? "POST" : "GET",
    headers: { "content-type": "application/json", cookie },
    body: body ? JSON.stringify(body) : undefined
  });
  const setCookie = response.headers.get("set-cookie");
  if (setCookie) cookie = setCookie.split(";")[0];
  const json = await response.json().catch(() => ({}));
  assert(response.ok, `${route} failed: ${json.error || response.statusText}`);
  return json;
}

(async () => {
  fs.copyFileSync(path.join(root, "db.json"), tempDb);
  const child = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env,
      PORT: String(port),
      AGRINEXUS_DB_PATH: tempDb,
      OPENAI_API_KEY: "",
      VOICE_TTS_PROVIDER: "",
      PUBLIC_BASE_URL: base
    },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitForServer();
    await jsonCall("/api/login", { email: "admin@agrinexus.org", password: "Admin2026!" });
    const state = await jsonCall("/api/voice/speak", {
      text: "Here is **Nexus**: https://example.com/source `debug` ```secret block``` OPENAI_API_KEY=sk-test1234567890",
      language: "en",
      locale: "en-US",
      forceOpenAi: true
    });
    const voice = state.voiceResult || {};
    assert.equal(voice.audioDataUrl, null, "missing credential test must not create fake audio");
    assert.equal(voice.diagnostics?.errorType, "missing_credential", "missing OpenAI key should remain truthful");
    assert.equal(voice.diagnostics?.requestAttempted, false, "OpenAI request must not be attempted without credential");
    assert(voice.spokenText.includes("source link available in text"), "spoken text should replace URL with speakable note");
    assert(voice.spokenText.includes("code block omitted from spoken response"), "spoken text should omit code blocks");
    assert(/OPENAI\s+API\s+KEY redacted|OPENAI_API_KEY redacted/i.test(voice.spokenText), "spoken text should redact credential-shaped content");
    assert(!/https?:\/\//.test(voice.spokenText), "spoken text must not contain raw URLs");
    assert(!/sk-test/.test(JSON.stringify(voice)), "voice payload must not expose secret-like values");
    assert(Number(voice.spokenTextLength) === voice.spokenText.length, "spokenTextLength should match sanitized spokenText");

    console.log(JSON.stringify({
      ok: true,
      suite: "nexus-genesis-spoken-output-non-regression",
      verifies: [
        "Genesis microphone input chain remains locked",
        "TTS output sanitizes markdown, URLs, code blocks, and credential-shaped values",
        "voice response diagnostics remain secret-free",
        "listening resumes only through the existing restart function"
      ]
    }, null, 2));
  } finally {
    child.kill();
    if (fs.existsSync(tempDb)) {
      try {
        fs.unlinkSync(tempDb);
      } catch {
        // Best effort cleanup for Windows file locks.
      }
    }
  }
})().catch(error => {
  if (fs.existsSync(tempDb)) {
    try {
      fs.unlinkSync(tempDb);
    } catch {
      // Best effort cleanup for Windows file locks.
    }
  }
  console.error(error.message || error);
  process.exit(1);
});
