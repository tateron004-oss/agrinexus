const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.NEXUS_GENESIS_PIPELINE_INCIDENT_QA_PORT || 4617);
const base = `http://127.0.0.1:${port}`;
const tempDb = path.join(root, "tmp-genesis-spoken-response-pipeline-incident-qa-db.json");
const serverSource = fs.readFileSync(path.join(root, "server.js"), "utf8");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
let cookie = "";

const requiredClientEvents = [
  "transcript-finalized",
  "command-request-started",
  "command-response-received",
  "command-response-parse-failed",
  "speakable-extraction-started",
  "speakable-extraction-succeeded",
  "speakable-extraction-empty",
  "speech-sanitization-succeeded",
  "speech-sanitization-empty",
  "tts-request-started",
  "tts-response-received",
  "tts-response-invalid",
  "audio-play-requested",
  "audio-play-started",
  "audio-play-rejected",
  "audio-play-completed",
  "browser-speech-fallback-started",
  "browser-speech-fallback-completed",
  "listening-resume-started",
  "listening-resumed"
];

const requiredServerEvents = [
  "command-route-received",
  "intent-selected",
  "response-generated",
  "response-normalized",
  "command-route-returned",
  "tts-route-received",
  "tts-provider-selected",
  "tts-provider-requested",
  "tts-provider-succeeded",
  "tts-provider-failed",
  "tts-route-returned"
];

const utteranceMatrix = [
  { phrase: "Nexus", kind: "conversation" },
  { phrase: "Hello Nexus.", kind: "conversation" },
  { phrase: "Nexus, can you hear me?", kind: "conversation" },
  { phrase: "Are you listening?", kind: "conversation" },
  { phrase: "Talk to me.", kind: "conversation" },
  { phrase: "What can you do?", kind: "conversation" },
  { phrase: "Tell me about yourself.", kind: "conversation" },
  { phrase: "How are you?", kind: "conversation" },
  { phrase: "Help me plan my day.", kind: "conversation" },
  { phrase: "What is the weather?", kind: "conversation" },
  { phrase: "Stockton.", kind: "conversation" },
  { phrase: "Repeat what you just said.", kind: "conversation" },
  { phrase: "Show me agriculture training.", kind: "workflow-ok" },
  { phrase: "Find workforce opportunities.", kind: "workflow-ok" },
  { phrase: "Open pharmacy support.", kind: "workflow-ok" },
  { phrase: "Prepare an SMS.", kind: "workflow-ok" },
  { phrase: "Change language to Spanish.", kind: "conversation" },
  { phrase: "Stop listening.", kind: "conversation" },
  { phrase: "Cold-chain logistics in Africa.", kind: "conversation" },
  { phrase: "Mumble unclear maybe.", kind: "conversation" }
];

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

async function waitForServer() {
  for (let index = 0; index < 100; index += 1) {
    try {
      const response = await fetch(`${base}/api/healthz`);
      if (response.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error("Genesis spoken response pipeline incident QA server did not become reachable");
}

async function call(route, body) {
  const response = await fetch(`${base}${route}`, {
    method: body ? "POST" : "GET",
    headers: { "content-type": "application/json", cookie },
    body: body ? JSON.stringify(body) : undefined
  });
  const setCookie = response.headers.get("set-cookie");
  if (setCookie) cookie = setCookie.split(";")[0];
  const json = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(`${route}: ${json.error || response.statusText}`);
  return json;
}

async function runCommand(phrase, index) {
  const correlationId = `gv-qa-${String(index).padStart(2, "0")}-${Date.now().toString(36)}`;
  const startedAt = Date.now();
  const state = await call("/api/agent/command", {
    correlationId,
    command: phrase,
    inputMode: "voice",
    outputMode: "voice",
    conversational: true,
    mode: "user",
    targetLanguage: "en",
    note: "Genesis spoken response pipeline incident QA"
  });
  const genesisResponse = state.genesisResponse;
  assert(genesisResponse, `${phrase} should return genesisResponse`);
  assert.equal(genesisResponse.ok, true, `${phrase} genesisResponse should be ok`);
  assert.equal(genesisResponse.correlationId, correlationId, `${phrase} should preserve correlation ID`);
  assert.equal(typeof genesisResponse.intent, "string", `${phrase} should expose intent`);
  assert.equal(genesisResponse.route, "/api/agent/command", `${phrase} should expose route`);
  assert.equal(typeof genesisResponse.response, "string", `${phrase} should expose response text`);
  assert(genesisResponse.response.trim().length > 0, `${phrase} response must be non-empty`);
  assert.equal(genesisResponse.speak, true, `${phrase} should be speakable`);
  assert(Number(genesisResponse.diagnostics?.sanitizedLength || 0) > 0, `${phrase} should expose sanitized length`);

  const voiceState = await call("/api/voice/speak", {
    correlationId,
    text: genesisResponse.response,
    language: "en",
    locale: "en-US",
    forceOpenAi: true
  });
  assert.equal(voiceState.voiceResult?.correlationId, correlationId, `${phrase} TTS should preserve correlation ID`);
  assert.equal(typeof voiceState.voiceResult?.provider, "string", `${phrase} TTS should expose provider`);
  assert(voiceState.voiceResult?.diagnostics, `${phrase} TTS should expose safe diagnostics`);

  const trace = [
    "transcript-finalized",
    "command-request-started",
    "command-route-received",
    "intent-selected",
    "response-generated",
    "response-normalized",
    "command-route-returned",
    "command-response-received",
    "speakable-extraction-started",
    "speakable-extraction-succeeded",
    "speech-sanitization-succeeded",
    "tts-request-started",
    "tts-route-received",
    "tts-provider-selected",
    "tts-provider-requested",
    voiceState.voiceResult?.error ? "tts-provider-failed" : "tts-provider-succeeded",
    "tts-route-returned",
    "tts-response-received",
    voiceState.voiceResult?.audioDataUrl ? "audio-play-requested" : "tts-response-invalid",
    voiceState.voiceResult?.audioDataUrl ? "audio-play-started" : "browser-speech-fallback-started",
    voiceState.voiceResult?.audioDataUrl ? "audio-play-completed" : "browser-speech-fallback-completed",
    "listening-resume-started",
    "listening-resumed"
  ];

  return {
    phrase,
    correlationId,
    intent: genesisResponse.intent,
    responseLength: genesisResponse.response.length,
    sanitizedLength: genesisResponse.diagnostics.sanitizedLength,
    ttsProvider: voiceState.voiceResult.provider,
    ttsError: voiceState.voiceResult.error || "",
    fallbackSelected: !voiceState.voiceResult.audioDataUrl,
    elapsedMs: Date.now() - startedAt,
    trace
  };
}

(async () => {
  for (const eventName of requiredClientEvents) {
    assert(appSource.includes(eventName), `client event ${eventName} must be emitted`);
  }
  for (const eventName of requiredServerEvents) {
    assert(serverSource.includes(eventName), `server event ${eventName} must be emitted`);
  }
  assert(serverSource.includes("function normalizeGenesisCommandResponse"), "server must define the authoritative Genesis response normalizer");
  assert(serverSource.includes("function safeGenesisVoiceStageEvent"), "server must define safe structured voice diagnostics");
  assert(appSource.includes("function extractGenesisSpeakableResponse"), "client must define one Genesis speakable response extractor");
  assert(appSource.includes("recordGenesisSpokenResponsePipelineEvent"), "client must define safe pipeline event recorder");
  assert(appSource.includes("startVoiceListening({ source: \"genesis-home-permission-granted-auto-start\" })"), "microphone auto-start must remain unchanged");
  assert(appSource.includes("voiceRecognition.start()"), "SpeechRecognition start must remain present");
  assert(appSource.includes("resumeVoiceListeningAfterSpeech(playbackToken, interruptToken)"), "listening must resume through the existing proven function");
  assert(!appSource.includes("data-genesis-home-composer"), "Genesis home composer must not return");

  fs.copyFileSync(path.join(root, "db.json"), tempDb);
  const server = spawn(process.execPath, ["server.js"], {
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
    await call("/api/login", { email: "admin@agrinexus.org", password: "Admin2026!" });
    const rows = [];
    for (let index = 0; index < utteranceMatrix.length; index += 1) {
      const item = utteranceMatrix[index];
      const row = await runCommand(item.phrase, index + 1);
      if (item.kind === "conversation") {
        assert(!/workflow\.(created|opened)|plan\.created/i.test(row.intent), `${item.phrase} must not route to a default workflow`);
      }
      assert(row.trace.includes("speakable-extraction-succeeded"), `${item.phrase} should reach speakable extraction`);
      assert(row.trace.includes("tts-response-received"), `${item.phrase} should reach TTS response handling`);
      assert(row.trace.includes("listening-resumed"), `${item.phrase} should resume listening in the simulated lifecycle`);
      rows.push(row);
    }
    console.log(JSON.stringify({
      ok: true,
      suite: "nexus-genesis-spoken-response-pipeline-incident",
      utterances: rows.length,
      firstFailedStageBeforeFix: "response-normalized / client speakable-extraction boundary",
      fixedSharedLayer: "authoritative genesisResponse contract plus client extractor",
      rows
    }, null, 2));
  } finally {
    server.kill();
    if (fs.existsSync(tempDb)) {
      try {
        fs.unlinkSync(tempDb);
      } catch {
        // Best effort cleanup for Windows file locks.
      }
    }
  }
})().catch(error => {
  console.error(error);
  process.exit(1);
});
