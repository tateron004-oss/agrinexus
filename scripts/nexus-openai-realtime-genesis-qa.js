const assert = require("node:assert");
const fs = require("node:fs");
const http = require("node:http");
const os = require("node:os");
const path = require("node:path");
const { spawn } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const server = read("server.js");
const app = read("public/app.js");
const envExample = read(".env.example");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");
const agentSource = read("public/nexus-openai-realtime-agent.js");
const agentBundle = read("public/vendor/nexus-openai-realtime-agent.bundle.mjs");

function requestJson(url, options = {}) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const body = options.body ? JSON.stringify(options.body) : "";
    const req = http.request({
      hostname: parsed.hostname,
      port: parsed.port,
      path: parsed.pathname + parsed.search,
      method: options.method || (body ? "POST" : "GET"),
      headers: {
        "content-type": "application/json",
        "content-length": Buffer.byteLength(body),
        origin: options.origin || `http://${parsed.host}`,
        ...(options.cookie ? { cookie: options.cookie } : {})
      }
    }, res => {
      let raw = "";
      res.setEncoding("utf8");
      res.on("data", chunk => {
        raw += chunk;
      });
      res.on("end", () => {
        try {
          resolve({
            status: res.statusCode,
            body: raw ? JSON.parse(raw) : null,
            raw,
            setCookie: res.headers["set-cookie"]
          });
        } catch (error) {
          reject(new Error(`Invalid JSON from ${url}: ${raw.slice(0, 240)} (${error.message})`));
        }
      });
    });
    req.on("error", reject);
    if (body) req.write(body);
    req.end();
  });
}

function listen(serverInstance) {
  return new Promise(resolve => serverInstance.listen(0, "127.0.0.1", () => resolve(serverInstance.address().port)));
}

async function waitForServer(baseUrl, child) {
  const startedAt = Date.now();
  while (Date.now() - startedAt < 30000) {
    if (child.exitCode !== null) throw new Error(`Server exited before readiness with code ${child.exitCode}`);
    try {
      const health = await requestJson(`${baseUrl}/api/health`);
      if (health.status === 200) return;
    } catch {
      await new Promise(resolve => setTimeout(resolve, 250));
    }
  }
  throw new Error("Nexus server did not become ready");
}

async function withNexusServer(env, callback) {
  const port = 6400 + Math.floor(Math.random() * 400);
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "nexus-openai-realtime-"));
  const dbPath = path.join(tmpDir, "db.json");
  const child = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env,
      ...env,
      PORT: String(port),
      AGRINEXUS_DB_PATH: dbPath,
      REQUIRE_LIVE_SERVICES: "false"
    },
    stdio: ["ignore", "pipe", "pipe"]
  });
  let output = "";
  child.stdout.on("data", chunk => {
    output += chunk.toString();
  });
  child.stderr.on("data", chunk => {
    output += chunk.toString();
  });
  const baseUrl = `http://127.0.0.1:${port}`;
  try {
    await waitForServer(baseUrl, child);
    await callback(baseUrl);
  } finally {
    child.kill();
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
  assert(!/test-openai-secret|sk-test|Bearer\s+test/i.test(output), "server logs must not expose OpenAI secret values");
}

function assertNoSecrets(value, label) {
  const text = JSON.stringify(value);
  assert(!/test-openai-secret|sk-test|Bearer\s+|OPENAI_API_KEY=/.test(text), `${label} must not expose permanent OpenAI secrets`);
}

function staticAssertions() {
  [
    "@openai/agents/realtime",
    "RealtimeAgent",
    "RealtimeSession",
    "startNexusOpenAiRealtimeGenesisSession",
    "nexus_weather",
    "nexus_live_knowledge",
    "nexus_maps_route",
    "nexus_agriculture",
    "nexus_health_preparation",
    "nexus_workforce_learning",
    "nexus_marketplace_logistics",
    "nexus_communications",
    "nexus_workflow",
    "nexus_provider_readiness"
  ].forEach(token => assert(agentSource.includes(token), `Realtime agent source should include ${token}`));
  assert(!agentSource.includes("[\"nexus_general_conversation\""), "Realtime agent should answer ordinary conversation directly without exposing general conversation as a function tool");
  assert(server.includes("nexusRealtimeCallableToolSchemas"), "server should expose a filtered Realtime callable tool catalog");
  assert(server.includes("resolveElevenLabsVoiceAuthContext(req, db, user") && server.includes("authMechanism"), "Realtime routes should reuse the bounded Genesis voice auth context");

  [
    "/api/voice/realtime/session",
    "/v1/realtime/client_secrets",
    "OPENAI_REALTIME_CLIENT_SECRETS_URL",
    "openAiRealtimeClientSecret",
    "clientSecret",
    "noPermanentKeyInBrowser",
    "agents-sdk-webrtc",
    "gpt-realtime-2",
    "nexusOpenAiNativeToolSchemas"
  ].forEach(token => assert(server.includes(token), `server should include ${token}`));

  [
    "startOpenAiAgentsRealtimeVoiceSession",
    "requestNexusOpenAiRealtimeSession",
    "loadNexusOpenAiRealtimeAgentModule",
    "/vendor/nexus-openai-realtime-agent.bundle.mjs",
    "/api/voice/realtime/tool",
    "openai-agents-sdk-session-started",
    "openai-agents-live-microphone-track-verified",
    "openai-agents-realtime-verified",
    "Nexus is keeping the existing listener available",
    "RealtimeVoiceAdapter"
  ].forEach(token => assert(app.includes(token), `app should include ${token}`));

  const startupMatch = app.match(/async function startOpenAiAgentsRealtimeVoiceSession[\s\S]*?\n}\n\nasync function startRealtimeVoiceSession/);
  assert(startupMatch, "app should expose the OpenAI Agents Realtime startup function");
  const startupSource = startupMatch[0];
  const proofIndex = startupSource.indexOf("normalizeRealtimeMicrophoneProof(controller)");
  const stopRecognitionIndex = startupSource.indexOf("voiceRecognition.stop()");
  const stopPermissionIndex = startupSource.indexOf("stopNexusVoicePermissionStream(\"openai-agents-realtime-verified\")");
  assert(proofIndex > -1, "Realtime startup should verify microphone proof after SDK connect");
  assert(stopRecognitionIndex > proofIndex, "legacy recognition must not stop before Realtime microphone proof");
  assert(stopPermissionIndex > proofIndex, "legacy permission stream must not stop before Realtime microphone proof");
  assert(!startupSource.includes("stopNexusVoicePermissionStream(\"openai-agents-realtime-selected\")"), "Realtime startup must not release the permission stream at selection time");
  assert(startupSource.includes("legacyListenerPreserved"), "Realtime startup should record whether the legacy listener was preserved during handoff");
  assert(startupSource.includes("hasLiveTrack"), "Realtime startup should require a live microphone track before listening");

  [
    "NEXUS_GENESIS_VOICE_RUNTIME=realtime",
    "OPENAI_REALTIME_MODEL=gpt-realtime-2",
    "OPENAI_REALTIME_CLIENT_SECRETS_URL=",
    "NEXUS_OPENAI_NATIVE_ENABLED=true"
  ].forEach(token => assert(envExample.includes(token), `.env.example should include ${token}`));

  assert(agentBundle.includes("RealtimeSession"), "bundled Realtime agent should include the official SDK session");
  assert(agentSource.includes("connectSessionWithMicrophoneProof"), "Realtime agent source should wrap session.connect with microphone proof");
  assert(agentSource.includes("navigator.mediaDevices") && agentSource.includes("mediaDevices.getUserMedia"), "Realtime agent should instrument getUserMedia during SDK connect");
  assert(agentSource.includes("microphone_track_live"), "Realtime agent should emit verified live microphone-track events");
  assert(agentSource.includes("getMicrophoneProof"), "Realtime agent controller should expose microphone proof to the app");
  assert(!agentBundle.includes("OPENAI_API_KEY"), "browser bundle must not include permanent OpenAI key names");
  assert.equal(packageJson.scripts["qa:nexus-openai-realtime-genesis"], "node scripts/nexus-openai-realtime-genesis-qa.js");
  assert.equal(packageJson.scripts["build:nexus-openai-realtime-agent"], "esbuild public/nexus-openai-realtime-agent.js --bundle --format=esm --platform=browser --target=es2020 --outfile=public/vendor/nexus-openai-realtime-agent.bundle.mjs");
  assert(qaSuite.includes("scripts/nexus-openai-realtime-genesis-qa.js"), "qa-suite should include Realtime Genesis QA");
}

async function routeAssertions() {
  let clientSecretRequests = 0;
  const openAiMock = http.createServer((req, res) => {
    let raw = "";
    req.on("data", chunk => {
      raw += chunk.toString();
    });
    req.on("end", () => {
      clientSecretRequests += 1;
      assert.equal(req.method, "POST", "Realtime client-secret request should use POST");
      assert.equal(req.url, "/v1/realtime/client_secrets", "Realtime client-secret path should match OpenAI contract");
      assert.equal(req.headers.authorization, "Bearer test-openai-secret", "permanent key should only be sent server-to-server");
      const body = JSON.parse(raw || "{}");
      assert.equal(body.model, "gpt-realtime-2", "Realtime session should target gpt-realtime-2 by default");
      assert(Array.isArray(body.tools), "Realtime session should include tool schemas");
      assert(!body.tools.some(tool => tool.name === "nexus_general_conversation"), "Realtime session should not expose general conversation as a tool");
      assert(body.tools.some(tool => tool.name === "nexus_weather"), "Realtime session should expose Nexus weather tool");
      assert(body.tools.some(tool => tool.name === "nexus_provider_readiness"), "Realtime session should expose provider readiness tool");
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({
        type: "realtime.client_secret",
        client_secret: {
          value: "ek_test_ephemeral_realtime_secret",
          expires_at: Math.floor(Date.now() / 1000) + 60
        }
      }));
    });
  });
  const openAiPort = await listen(openAiMock);
  try {
    await withNexusServer({
      OPENAI_API_KEY: "",
      NEXUS_GENESIS_VOICE_RUNTIME: "realtime",
      NEXUS_OPENAI_NATIVE_ENABLED: "true"
    }, async baseUrl => {
      const login = await requestJson(`${baseUrl}/api/login`, {
        body: {
          email: "admin@agrinexus.org",
          password: "Admin2026!"
        }
      });
      assert.equal(login.status, 200, "login should succeed for seeded admin");
      const cookie = (login.setCookie || []).map(item => item.split(";")[0]).join("; ");
      const status = await requestJson(`${baseUrl}/api/voice/realtime/status`, { cookie });
      assert.equal(status.status, 200, "Realtime status should return HTTP 200");
      assert.equal(status.body.realtimeVoice.ready, false, "Realtime status should be credential-blocked without a key");
      assert.deepEqual(status.body.realtimeVoice.missingEnv, ["OPENAI_API_KEY"], "missing config should name only OPENAI_API_KEY");
      assertNoSecrets(status.body, "missing-key Realtime status");
    });

    await withNexusServer({
      OPENAI_API_KEY: "test-openai-secret",
      OPENAI_REALTIME_CLIENT_SECRETS_URL: `http://127.0.0.1:${openAiPort}/v1/realtime/client_secrets`,
      NEXUS_GENESIS_VOICE_RUNTIME: "realtime",
      NEXUS_OPENAI_NATIVE_ENABLED: "true"
    }, async baseUrl => {
      const login = await requestJson(`${baseUrl}/api/login`, {
        body: {
          email: "admin@agrinexus.org",
          password: "Admin2026!"
        }
      });
      assert.equal(login.status, 200, "login should succeed for seeded admin");
      const cookie = (login.setCookie || []).map(item => item.split(";")[0]).join("; ");

      const status = await requestJson(`${baseUrl}/api/voice/realtime/status`, { cookie });
      assert.equal(status.status, 200);
      assert.equal(status.body.realtimeVoice.ready, true, "Realtime status should be ready with key and runtime");
      assert.equal(status.body.realtimeVoice.transport, "agents-sdk-webrtc");
      assert.equal(status.body.realtimeVoice.endpoint, "/api/voice/realtime/session");
      assertNoSecrets(status.body, "configured Realtime status");

      const session = await requestJson(`${baseUrl}/api/voice/realtime/session?language=en`, {
        cookie,
        body: {
          language: "en",
          transport: "agents-sdk-webrtc"
        }
      });
      assert.equal(session.status, 200, `Realtime session should issue an ephemeral credential: ${session.raw}`);
      assert.equal(session.body.ok, true);
      assert.equal(session.body.transport, "agents-sdk-webrtc");
      assert.equal(session.body.sdk, undefined, "session response should not expose an SDK implementation object");
      assert(String(session.body.clientSecret).startsWith("ek_"), "session response should expose only an ephemeral client secret");
      assert.equal(session.body.noPermanentKeyInBrowser, true);
      assert.equal(session.body.noSecretValuesReturned, true);
      assert(Array.isArray(session.body.tools) && session.body.tools.includes("nexus_weather"), "session response should list Nexus tools");
      assert(!session.body.tools.includes("nexus_general_conversation"), "session response should not list general conversation as a Realtime function tool");
      assertNoSecrets(session.body, "Realtime client-secret response");

      const tool = await requestJson(`${baseUrl}/api/voice/realtime/tool`, {
        cookie,
        body: {
          name: "nexus_provider_readiness",
          correlationId: "qa-openai-realtime-tool",
          arguments: {
            command: "check provider readiness",
            language: "en"
          }
        }
      });
      assert.equal(tool.status, 200, `Realtime tool gateway should return HTTP 200: ${tool.raw}`);
      assert.equal(tool.body.ok, true, "Realtime tool gateway should return a normalized Nexus result");
      assert.equal(tool.body.noUngatedExecution, true, "Realtime tool results must preserve no-ungated-execution guard");
      assertNoSecrets(tool.body, "Realtime tool response");
    });

    await withNexusServer({
      OPENAI_API_KEY: "test-openai-secret",
      OPENAI_REALTIME_CLIENT_SECRETS_URL: `http://127.0.0.1:${openAiPort}/v1/realtime/client_secrets`,
      OPENAI_REALTIME_MODEL: "gpt-realtime-2",
      NEXUS_GENESIS_VOICE_RUNTIME: "realtime",
      NEXUS_OPENAI_NATIVE_ENABLED: "true"
    }, async baseUrl => {
      const rejected = await requestJson(`${baseUrl}/api/voice/realtime/session?language=en`, {
        origin: "https://evil.example",
        body: { language: "en", transport: "agents-sdk-webrtc" }
      });
      assert.equal(rejected.status, 403, "invalid origins must be rejected before guest session bootstrap");
      assert.equal(rejected.body.category, "application-origin-forbidden");

      const session = await requestJson(`${baseUrl}/api/voice/realtime/session?language=en`, {
        body: { language: "en", transport: "agents-sdk-webrtc" }
      });
      assert.equal(session.status, 200, `bounded Genesis guest Realtime session should authorize: ${session.raw}`);
      assert.equal(session.body.authMechanism, "bounded_genesis_voice_guest_cookie");
      assert(String(session.body.clientSecret).startsWith("ek_"), "guest Realtime session should return a short-lived client secret");
      const guestCookie = (session.setCookie || []).map(item => item.split(";")[0]).join("; ");
      assert(guestCookie.includes("nexus_genesis_voice_sid="), "Realtime session should issue the bounded Genesis voice guest cookie");
      assertNoSecrets(session.body, "guest Realtime session response");

      const status = await requestJson(`${baseUrl}/api/voice/realtime/status`, { cookie: guestCookie });
      assert.equal(status.status, 200);
      assert.equal(status.body.auth.mechanism, "bounded_genesis_voice_guest_cookie");
      assert.equal(status.body.auth.sessionPresent, true);

      const calc = await requestJson(`${baseUrl}/api/voice/realtime/tool`, {
        cookie: guestCookie,
        body: {
          name: "nexus_data_code_analysis",
          correlationId: "qa-realtime-guest-calc",
          arguments: {
            command: "Calculate the average of 10, 20, 30, and 40",
            expression: "average 10 20 30 40",
            language: "en"
          }
        }
      });
      assert.equal(calc.status, 200, `guest Realtime local calculation should not require provider credentials: ${calc.raw}`);
      assert.equal(calc.body.ok, true);
      assert.equal(calc.body.status, "completed");
      assert.equal(calc.body.executionVerified, true);
      assert.equal(calc.body.analysis.average, 25);
      assertNoSecrets(calc.body, "guest calculation result");

      const weather = await requestJson(`${baseUrl}/api/voice/realtime/tool`, {
        cookie: guestCookie,
        body: {
          name: "nexus_weather",
          correlationId: "qa-realtime-guest-weather",
          arguments: {
            command: "What is the weather in Stockton?",
            location: "Stockton, California",
            language: "en"
          }
        }
      });
      assert.equal(weather.status, 200, `guest Realtime weather should return a tool result or truthful provider state: ${weather.raw}`);
      assert.equal(weather.body.ok !== false, true);
      assert.notEqual(weather.body.category, "application-authentication");
      assertNoSecrets(weather.body, "guest weather result");

      const communication = await requestJson(`${baseUrl}/api/voice/realtime/tool`, {
        cookie: guestCookie,
        body: {
          name: "nexus_communications",
          correlationId: "qa-realtime-guest-communication",
          arguments: {
            command: "Send an SMS to John saying I am running late",
            channel: "sms",
            recipient: "John",
            text: "I am running late.",
            language: "en"
          }
        }
      });
      assert.equal(communication.status, 200);
      assert(["confirmation_required", "blocked", "missing_config", "disabled", "provider-not-configured"].some(token => JSON.stringify(communication.body).includes(token)), "communication should require confirmation or report a specific missing provider");
      assert.notEqual(communication.body.category, "application-authentication");
      assert.equal(communication.body.executionVerified, false);
      assertNoSecrets(communication.body, "guest communication result");
    });
  } finally {
    await new Promise(resolve => openAiMock.close(resolve));
  }
  assert.equal(clientSecretRequests, 2, "QA should make one admin and one bounded guest mocked OpenAI client-secret request");
}

async function main() {
  staticAssertions();
  await routeAssertions();
  console.log("Nexus OpenAI Realtime Genesis QA passed");
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
