const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.VOICE_PHASE3_QA_PORT || 4463);
const base = `http://127.0.0.1:${port}`;
const tempDb = path.join(root, "tmp-voice-phase3-qa-db.json");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const serverSource = fs.readFileSync(path.join(root, "server.js"), "utf8");
let cookie = "";

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
  throw new Error("Voice phase 3 TTS QA server did not become reachable");
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
  if (!response.ok) throw new Error(`${route}: ${json.error || response.statusText}`);
  return json;
}

(async () => {
  assert(appSource.includes("TTS reliability policy"), "frontend should document the TTS reliability policy");
  assert(appSource.includes('const BROWSER_SPEECH_FALLBACK_STORAGE_KEY = "agrinexusBrowserSpeechFallback"'), "browser fallback must be controlled by an explicit storage key");
  assert(appSource.includes("function browserSpeechFallbackEnabled()"), "browser fallback must use an explicit gate");
  assert(appSource.includes("localStorage.getItem(BROWSER_SPEECH_FALLBACK_STORAGE_KEY) === \"on\""), "browser fallback must be off by default");
  assert(!appSource.includes("localStorage.setItem(BROWSER_SPEECH_FALLBACK_STORAGE_KEY, \"on\")"), "app must not enable browser fallback globally");
  assert(appSource.includes("Browser speech fallback is off by default."), "TTS failure should show visible fallback-off status");
  assert(appSource.includes("Using opt-in browser speech fallback."), "optional browser fallback should be clearly labeled");
  assert(appSource.includes("Voice playback interrupted."), "TTS abort/interruption should not be shown as provider failure");
  assert(appSource.includes("browserSpeak(`OpenAI voice error:"), "provider errors should flow through TTS recovery handling");
  assert(appSource.includes("browserSpeak(`OpenAI voice unavailable:"), "network/provider failures should flow through TTS recovery handling");
  assert(appSource.includes("finishSpeaking();") && appSource.includes("resumeVoiceListeningAfterSpeech"), "TTS recovery must clear speaking state and resume voice-first when safe");
  assert(appSource.includes("language: languageCode()") && appSource.includes("locale: voiceLocale()"), "TTS requests must preserve Phase 2 language metadata");
  assert(appSource.includes("forceOpenAi: true"), "OpenAI TTS should remain the primary frontend path");
  assert(serverSource.includes("canonicalVoiceLanguage(body.language || body.targetLanguage || user.language || \"en\")"), "TTS route should preserve canonical language metadata");
  assert(serverSource.includes('operationalMode: "realtime-tools"') && serverSource.includes("nexus_capability_router"), "Realtime must expose only the gated Nexus tool router after migration");

  fs.copyFileSync(path.join(root, "db.json"), tempDb);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env,
      PORT: String(port),
      AGRINEXUS_DB_PATH: tempDb,
      OPENAI_API_KEY: "",
      NEXUS_PRESERVE_EMPTY_ENV: "1",
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
      text: "Nexus voice reliability check.",
      language: "sw-KE",
      locale: "sw-KE",
      forceOpenAi: true
    });
    const voice = state.voiceResult || {};
    assert.equal(voice.language, "sw", "TTS response should preserve canonical language");
    assert.equal(voice.locale, "sw-KE", "TTS response should preserve locale metadata");
    assert.equal(voice.audioDataUrl, null, "without an OpenAI key, TTS route should return no audio rather than fake audio");
    assert.equal(voice.error, null, "missing OpenAI key should not be treated as provider failure by the server route");
    assert(state.profile.voiceSessions.some(item => item.type === "text-to-speech"), "TTS request should still create a voice audit record");

    console.log("Voice phase 3 TTS QA passed");
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
