const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.NEXUS_GENESIS_STABILIZATION_REPAIR_QA_PORT || 4601);
const base = `http://127.0.0.1:${port}`;
const tempDb = path.join(root, "tmp-genesis-stabilization-repair-qa-db.json");
const serverSource = fs.readFileSync(path.join(root, "server.js"), "utf8");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const weatherProvider = require("../server/nexus-weather-source-provider.js");
let cookie = "";

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
  throw new Error("Genesis stabilization repair QA server did not become reachable");
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

async function runCommand(command, extra = {}) {
  const state = await call("/api/agent/command", {
    command,
    inputMode: "voice",
    outputMode: "voice",
    conversational: true,
    mode: "user",
    targetLanguage: "en",
    ...extra
  });
  return state.commandResult || {};
}

function assertSpeakable(result, label) {
  assert(result, `${label} should return a command result`);
  assert.equal(typeof result.response, "string", `${label} response should be a string`);
  assert(result.response.trim().length > 0, `${label} response should be non-empty`);
  assert(Number(result.metadata?.sanitizedSpeechLength || 0) > 0, `${label} should expose non-empty sanitized speech length`);
}

function assertConversationOnly(result, label) {
  assertSpeakable(result, label);
  assert(/^conversation\./.test(result.intent), `${label} should be conversational, got ${result.intent}`);
  assert.notEqual(result.metadata?.workflowOpened, true, `${label} must not open a workflow`);
  assert.notEqual(result.metadata?.providerHandoffAuthorized, true, `${label} must not authorize provider handoff`);
  assert.notEqual(result.metadata?.noExecutionAuthorized, false, `${label} must not authorize execution`);
}

function sanitizeExpectedSpoken(value = "") {
  return String(value || "")
    .replace(/```[\s\S]*?```/g, " code block omitted from spoken response. ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, "$1")
    .replace(/https?:\/\/\S+/g, " source link available in text ")
    .replace(/\b[A-Z0-9_]*(?:API[_-]?KEY|SECRET|TOKEN|AUTHORIZATION|BEARER)\s*[:=]\s*\S+/gi, match => `${match.split(/[:=]/)[0]} redacted`)
    .replace(/\b(api[_-]?key|secret|token|authorization|bearer)\s*[:=]\s*\S+/gi, "$1 redacted")
    .replace(/[*#>|~]+/g, " ")
    .replace(/\bsk-[A-Za-z0-9_-]{12,}\b/g, "redacted credential")
    .replace(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi, "email address")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 3600);
}

async function mockOpenMeteoWeatherResult() {
  const calls = [];
  const env = {
    NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
    NEXUS_WEATHER_PROVIDER_ENABLED: "true",
    NEXUS_WEATHER_OPEN_METEO_PROVIDER_ENABLED: "true",
    NEXUS_WEATHER_FETCH_IMPL: async target => {
      const url = String(target);
      calls.push(url);
      if (url.includes("geocoding-api.open-meteo.com")) {
        return {
          ok: true,
          json: async () => ({
            results: [{ name: "Stockton", admin1: "California", country_code: "US", latitude: 37.9577, longitude: -121.2908 }]
          })
        };
      }
      if (url.includes("api.open-meteo.com")) {
        return {
          ok: true,
          json: async () => ({
            current: { temperature_2m: 22, weather_code: 1, wind_speed_10m: 11, time: "2026-07-15T09:00" }
          })
        };
      }
      throw new Error(`unexpected weather URL ${url}`);
    }
  };
  const result = await weatherProvider.getWeatherSourceResultAsync({ locationText: "Stockton, CA", timeframe: "current", queryType: "current weather" }, env);
  assert.equal(result.sourceStatus, "source-result-available", "mock Open-Meteo result should be source-backed");
  assert.equal(result.evidenceStatus, "source-backed", "mock Open-Meteo result should be source-backed evidence");
  assert.match(result.resultSummary, /Current weather for Stockton/i, "mock Open-Meteo summary should include current weather");
  assert.equal(calls.length, 2, "Open-Meteo source-backed weather should use geocoding and forecast calls");
}

(async () => {
  assert(serverSource.includes("function genesisStabilizationConversationRepair"), "server must define stabilization repair router");
  assert(serverSource.includes("function ensureSpeakableAgentResult"), "server must define no-silence guard");
  assert(serverSource.includes("function rememberGenesisSpokenResponse"), "server must persist bounded spoken response memory");
  assert(serverSource.includes("conversation.repeat_last_response"), "server must route repeat without rerunning prior command");
  assert(serverSource.includes("conversation.weather_needs_location"), "server must ask for weather city when location is unavailable");
  assert(serverSource.includes("nexusWeatherSourceProvider.getWeatherSourceResultAsync"), "server must use the weather source provider for simple weather");
  assert(serverSource.includes("What city would you like the weather for?"), "weather route must ask naturally for a city");
  assert(serverSource.includes("I heard you, but I couldn't complete that response. Please try again."), "server must include final no-silence guard");
  assert(appSource.includes("startVoiceListening({ source: \"genesis-home-permission-granted-auto-start\" })"), "microphone auto-start must remain unchanged");
  assert(appSource.includes("navigator.mediaDevices.getUserMedia"), "getUserMedia acquisition must remain present");
  assert(appSource.includes("startRealtimeVoiceSession"), "OpenAI Realtime startup must remain present");
  assert(appSource.includes("openai-realtime-microphone-proof"), "Realtime microphone proof must remain present");
  assert(!appSource.includes("voiceRecognition = new Recognition()"), "active browser SpeechRecognition construction must remain removed");
  assert(appSource.includes("resumeVoiceListeningAfterSpeech(playbackToken, interruptToken)"), "listening must resume through existing speech completion path");

  await mockOpenMeteoWeatherResult();

  fs.copyFileSync(path.join(root, "db.json"), tempDb);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env,
      PORT: String(port),
      AGRINEXUS_DB_PATH: tempDb,
      OPENAI_API_KEY: "",
      NEXUS_OPENAI_NATIVE_ENABLED: "false",
      NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "",
      NEXUS_WEATHER_PROVIDER_ENABLED: "",
      NEXUS_WEATHER_OPEN_METEO_PROVIDER_ENABLED: "",
      PUBLIC_BASE_URL: base
    },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitForServer();
    await call("/api/login", { email: "admin@agrinexus.org", password: "Admin2026!" });

    const capability = await runCommand("Nexus, what can you do?");
    assertConversationOnly(capability, "capability question");
    assert.equal(capability.intent, "conversation.capability_summary");
    assert.match(capability.response, /agriculture|health|learning|workforce/i);

    const identity = await runCommand("Tell me about yourself.");
    assertConversationOnly(identity, "identity question");
    assert.equal(identity.intent, "conversation.identity");
    assert.match(identity.response, /Nexus Genesis/i);

    const dayPlan = await runCommand("Help me plan my day.");
    assertConversationOnly(dayPlan, "day planning question");
    assert.equal(dayPlan.intent, "conversation.day_planning");
    assert.equal(dayPlan.status, "needs-input");
    assert.match(dayPlan.response, /top two things/i);

    const weatherNeedsCity = await runCommand("What is the weather?");
    assertConversationOnly(weatherNeedsCity, "weather city prompt");
    assert.equal(weatherNeedsCity.intent, "conversation.weather_needs_location");
    assert.equal(weatherNeedsCity.status, "needs-location");
    assert.match(weatherNeedsCity.response, /What city/i);
    assert(!/prepared locally|readiness|packet|simulated/i.test(weatherNeedsCity.response), "weather must not use local-preparation placeholder");

    const weatherBlocked = await runCommand("Stockton, CA");
    assertConversationOnly(weatherBlocked, "weather follow-up city");
    assert.equal(weatherBlocked.intent, "conversation.weather_blocked");
    assert.equal(weatherBlocked.status, "needs-provider");
    assert.match(weatherBlocked.response, /weather source is not configured/i);
    assert(!/prepared locally|simulated|dummy/i.test(weatherBlocked.response), "weather blocker must not claim a fake result");

    const repeatWeather = await runCommand("Repeat what you just said.");
    assertConversationOnly(repeatWeather, "repeat after weather");
    assert.equal(repeatWeather.intent, "conversation.repeat_last_response");
    assert.equal(repeatWeather.metadata?.reranPriorCommand, false);
    assert.equal(repeatWeather.response, sanitizeExpectedSpoken(weatherBlocked.response), "repeat should replay last spoken weather response");

    const capabilityAgain = await runCommand("What can you do?");
    assertConversationOnly(capabilityAgain, "capability before repeat");
    const repeatCapability = await runCommand("Repeat what you just said.");
    assert.equal(repeatCapability.response, sanitizeExpectedSpoken(capabilityAgain.response), "repeat should replay last spoken capability response");

    console.log(JSON.stringify({
      ok: true,
      suite: "nexus-genesis-stabilization-repair",
      verifies: [
        "capability, identity, and day planning produce spoken conversational responses",
        "ordinary conversation does not open workflows",
        "weather asks for city when no location is available",
        "weather uses source-backed provider contract when configured",
        "weather never claims local preparation as current conditions",
        "repeat replays session-scoped last spoken response without rerunning the command",
        "microphone input chain markers remain unchanged"
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
