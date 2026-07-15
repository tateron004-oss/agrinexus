const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.NEXUS_GENESIS_VOICE_RESPONSE_QA_PORT || 4596);
const base = `http://127.0.0.1:${port}`;
const tempDb = path.join(root, "tmp-genesis-voice-response-provider-qa-db.json");
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
  throw new Error("Genesis voice response provider QA server did not become reachable");
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
  assert(appSource.includes("function genesisVoiceBrowserSpeechRecoveryEnabled()"), "Genesis voice session needs a dedicated browser speech recovery gate");
  assert(appSource.includes("genesis-browser-speech-recovery"), "Genesis speech recovery must be labeled separately from opt-in fallback");
  assert(appSource.includes("Using browser-native speech synthesis for the Genesis voice session because OpenAI voice audio is unavailable."), "Genesis recovery must truthfully describe browser-native speech synthesis");
  assert(appSource.includes("Browser speech fallback is off by default."), "non-Genesis browser fallback should remain off by default");
  assert(!appSource.includes("localStorage.setItem(BROWSER_SPEECH_FALLBACK_STORAGE_KEY, \"on\")"), "app must not globally force browser fallback on");
  assert(appSource.includes("Provider diagnostic:"), "frontend should expose safe voice provider diagnostic status");

  [
    "function openAiVoiceProviderDiagnostics",
    "credentialConfigured",
    "clientInitialized",
    "requestAttempted",
    "httpStatusCategory",
    "errorType",
    "timeout",
    "fallbackEnabled",
    "finalResponseRoute",
    "diagnostics: audio?.diagnostics"
  ].forEach(token => assert(serverSource.includes(token), `server voice diagnostics missing ${token}`));
  assert(!serverSource.includes("OPENAI_API_KEY:"), "server must not serialize OpenAI secret values");

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
    await jsonCall("/api/login", { email: "admin@agrinexus.org", password: "Admin2026!" });
    const state = await jsonCall("/api/voice/speak", {
      text: "Nexus voice provider diagnostic check.",
      language: "en",
      locale: "en-US",
      forceOpenAi: true
    });
    const voice = state.voiceResult || {};
    assert.equal(voice.audioDataUrl, null, "missing OpenAI credential must not produce fake audio");
    assert.equal(voice.hasOpenAiKey, false, "test route should report OpenAI credential absent without exposing values");
    assert.equal(voice.diagnostics.credentialConfigured, false, "diagnostics should report missing credential as false");
    assert.equal(voice.diagnostics.clientInitialized, false, "diagnostics should report client not initialized without credential");
    assert.equal(voice.diagnostics.requestAttempted, false, "diagnostics should not claim an OpenAI request without a credential");
    assert.equal(voice.diagnostics.errorType, "missing_credential", "diagnostics should classify missing OpenAI credential");
    assert.equal(voice.diagnostics.finalResponseRoute, "missing-openai-credential", "diagnostics should report the final safe response route");
    assert(!JSON.stringify(voice).includes("sk-"), "voice response must not expose secret-like values");

    console.log(JSON.stringify({
      ok: true,
      suite: "nexus-genesis-voice-response-provider",
      verifies: [
        "safe OpenAI TTS provider diagnostics",
        "no fake audio when OpenAI is unconfigured",
        "Genesis-only browser-native speech recovery",
        "non-Genesis browser fallback remains opt-in"
      ]
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
