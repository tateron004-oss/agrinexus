const assert = require("node:assert");
const fs = require("node:fs");
const http = require("node:http");
const os = require("node:os");
const path = require("node:path");
const { spawn } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");
const serverSource = read("server.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

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
          resolve({ status: res.statusCode, body: raw ? JSON.parse(raw) : null, raw, setCookie: res.headers["set-cookie"] });
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

function listen(server) {
  return new Promise(resolve => server.listen(0, "127.0.0.1", () => resolve(server.address().port)));
}

function closeServer(server) {
  return new Promise(resolve => server.close(resolve));
}

async function waitForServer(baseUrl, child) {
  const startedAt = Date.now();
  while (Date.now() - startedAt < 25000) {
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

async function withServer(env, callback) {
  const port = 4600 + Math.floor(Math.random() * 600);
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "nexus-layer-activation-"));
  const dbPath = path.join(tmpDir, "db.json");
  const child = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env,
      ...env,
      PORT: String(port),
      HOST: "127.0.0.1",
      AGRINEXUS_DB_PATH: dbPath,
      NODE_ENV: "test"
    },
    stdio: ["ignore", "pipe", "pipe"]
  });
  const baseUrl = `http://127.0.0.1:${port}`;
  try {
    await waitForServer(baseUrl, child);
    return await callback(baseUrl);
  } finally {
    child.kill();
    await new Promise(resolve => child.once("exit", resolve));
    if (fs.existsSync(dbPath)) fs.rmSync(dbPath, { force: true });
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
}

function stage(trace, id) {
  return trace.sharedLayerSequence.find(item => item.stage === id);
}

function assertTrace(state, label, expectations = {}) {
  const response = state.nexusResponse;
  assert(response, `${label} should include nexusResponse`);
  assert(response.activationTrace, `${label} should include activation trace`);
  const trace = response.activationTrace;
  assert.equal(trace.traceVersion, "nexus.activationTrace.v1", `${label} trace version`);
  [
    "user_input",
    "language_understanding",
    "conversational_behavior",
    "intent_reasoning",
    "capability_selection",
    "tool_or_retrieval",
    "evidence_verification",
    "safety_confirmation",
    "natural_response",
    "context_update",
    "continued_conversation"
  ].forEach(stageId => {
    const item = stage(trace, stageId);
    assert(item, `${label} missing trace stage ${stageId}`);
    assert.notEqual(item.active, false, `${label} stage ${stageId} should be active: ${item.detail}`);
  });
  assert.equal(trace.noDuplicateRuntimeCreated, true, `${label} must not create duplicate runtime`);
  assert.equal(trace.noVoiceRuntimeModified, true, `${label} must not modify voice runtime`);
  assert(response.response && response.response.trim(), `${label} should produce natural response`);
  if (expectations.capability) assert.equal(response.capability, expectations.capability, `${label} capability`);
  if (expectations.inputMode) assert.equal(trace.inputMode, expectations.inputMode, `${label} input mode`);
  if (expectations.outputMode) assert.equal(trace.outputMode, expectations.outputMode, `${label} output mode`);
  if (expectations.behaviorIncludes) {
    assert(
      String(stage(trace, "conversational_behavior")?.detail || "").includes(expectations.behaviorIncludes),
      `${label} behavior should include ${expectations.behaviorIncludes}`
    );
  }
  if (expectations.evidenceActive) {
    assert.notEqual(stage(trace, "evidence_verification")?.active, false, `${label} should activate evidence/truthfulness handling`);
  }
  if (expectations.safetyActive) {
    assert.notEqual(stage(trace, "safety_confirmation")?.active, false, `${label} should activate safety handling`);
  }
  if (expectations.sourceBacked) {
    assert.equal(response.evidence.sourceBacked, true, `${label} should be source backed`);
    assert(response.evidence.receiptId, `${label} should include evidence receipt id`);
  }
  if (expectations.noWorkflow) {
    assert.equal(response.workflow.opened, false, `${label} must not open workflow`);
  }
  if (expectations.noExecution !== false) {
    assert.equal(response.execution.attempted, false, `${label} must not execute`);
  }
}

async function run() {
  [
    "function nexusActivationTraceForResponse",
    "traceVersion: \"nexus.activationTrace.v1\"",
    "language_understanding",
    "conversational_behavior",
    "evidence_verification",
    "noVoiceRuntimeModified"
  ].forEach(token => assert(serverSource.includes(token), `server should include ${token}`));

  assert.strictEqual(
    packageJson.scripts["qa:nexus-production-layer-activation-integration"],
    "node scripts/nexus-production-layer-activation-integration-qa.js",
    "package alias should run layer activation integration QA"
  );
  assert(qaSuite.includes("scripts/nexus-production-layer-activation-integration-qa.js"), "qa suite should include layer activation integration QA");

  const providerServer = http.createServer((req, res) => {
    req.resume();
    res.setHeader("content-type", "application/json");
    res.end(JSON.stringify({
      provider: "mock-layer-activation-provider",
      answer: "Climate-smart agriculture combines water planning, soil health, resilient crop choices, and local risk review.",
      results: [
        {
          title: "FAO Climate-Smart Agriculture",
          url: "https://www.fao.org/climate-smart-agriculture/",
          snippet: "Climate-smart agriculture addresses food security and climate challenges."
        },
        {
          title: "USDA Climate Hubs",
          url: "https://www.climatehubs.usda.gov/",
          snippet: "USDA Climate Hubs provide regionally relevant climate information."
        }
      ]
    }));
  });
  const providerPort = await listen(providerServer);
  try {
    await withServer({
      NEXUS_LIVE_KNOWLEDGE_ENABLED: "true",
      NEXUS_LIVE_KNOWLEDGE_PROVIDER: "generic",
      NEXUS_LIVE_KNOWLEDGE_PROVIDER_ENDPOINT: `http://127.0.0.1:${providerPort}/search`,
      NEXUS_LIVE_KNOWLEDGE_API_KEY: "test-only-key",
      NEXUS_LIVE_KNOWLEDGE_SAFE_MODE: "true"
    }, async baseUrl => {
      const login = await requestJson(`${baseUrl}/api/login`, {
        body: { email: "admin@agrinexus.org", password: "Admin2026!" }
      });
      assert.equal(login.status, 200, "login should succeed");
      const cookie = String(login.setCookie?.[0] || "").split(";")[0];
      assert(cookie, "login should return cookie");

      async function command(label, body, expectations) {
        const result = await requestJson(`${baseUrl}/api/agent/command`, { cookie, body });
        assert.equal(result.status, 200, `${label} HTTP 200`);
        assertTrace(result.body, label, expectations);
        return result.body;
      }

      await command("general typed conversation", {
        command: "Hello Nexus. Can you hear me?",
        conversational: true,
        inputMode: "typed"
      }, { capability: "conversation", inputMode: "typed", noWorkflow: true });

      await command("voice presence check stays conversational", {
        command: "Hey Nexus, are you with me today?",
        conversational: true,
        inputMode: "voice",
        outputMode: "voice"
      }, { capability: "conversation", inputMode: "voice", outputMode: "voice", noWorkflow: true, behaviorIncludes: "presence" });

      await command("voice source-backed agriculture", {
        command: "Nexus, what are current sources about climate-smart agriculture in Africa?",
        conversational: true,
        inputMode: "voice",
        outputMode: "voice",
        correlationId: "layer-activation-source-backed"
      }, { capability: "agriculture", inputMode: "voice", outputMode: "voice", sourceBacked: true });

      await command("contextual sourced follow-up", {
        command: "Explain that in simpler words.",
        conversational: true,
        inputMode: "voice",
        outputMode: "voice"
      }, { inputMode: "voice", outputMode: "voice", noWorkflow: true });

      await command("informal crop issue stays agriculture", {
        command: "My maize leaves are yellow and I do not know why",
        conversational: true,
        inputMode: "voice",
        outputMode: "voice"
      }, { capability: "agriculture", inputMode: "voice", outputMode: "voice", safetyActive: true });

      await command("health safety lane", {
        command: "Nexus, help with diabetes intake.",
        conversational: true,
        inputMode: "typed"
      }, { capability: "health-care-preparation", inputMode: "typed" });

      await command("farm jobs stays workforce", {
        command: "I need training for farm jobs but my internet is weak",
        conversational: true,
        inputMode: "typed"
      }, { capability: "workforce", inputMode: "typed", safetyActive: true });

      await command("communications preparation lane", {
        command: "Nexus, prepare an SMS to my care team.",
        conversational: true,
        inputMode: "typed"
      }, { capability: "communications", inputMode: "typed" });

      await command("buyer SMS stays communications", {
        command: "Nexus, prepare an SMS to the buyer about pickup tomorrow.",
        conversational: true,
        inputMode: "typed"
      }, { capability: "communications", inputMode: "typed", safetyActive: true });

      await command("language switching lane", {
        command: "Nexus, change language to Spanish.",
        conversational: true,
        inputMode: "voice",
        outputMode: "voice",
        language: "es"
      }, { capability: "multilingual", inputMode: "voice", outputMode: "voice" });

      await command("weather clarification lane", {
        command: "Nexus, what is the weather?",
        conversational: true,
        inputMode: "typed"
      }, { capability: "weather", inputMode: "typed" });

      await command("weather with location keeps source honesty", {
        command: "Nexus, what is the weather in Stockton, CA?",
        conversational: true,
        inputMode: "typed"
      }, { capability: "weather", inputMode: "typed", evidenceActive: true });

      await command("reminder mode is classified", {
        command: "Nexus, remind me to check my blood pressure tomorrow morning.",
        conversational: true,
        inputMode: "typed"
      }, { capability: "reminders-scheduling", inputMode: "typed", safetyActive: true });

      await command("marketplace inquiry lane", {
        command: "Nexus, review marketplace options for selling maize.",
        conversational: true,
        inputMode: "typed"
      }, { capability: "marketplace-trade", inputMode: "typed" });

      await command("emergency safety stays safety behavior", {
        command: "Nexus, someone has chest pain and trouble breathing.",
        conversational: true,
        inputMode: "voice",
        outputMode: "voice"
      }, { capability: "conversation", inputMode: "voice", outputMode: "voice", behaviorIncludes: "emergency_safety", safetyActive: true, noWorkflow: true });
    });
  } finally {
    await closeServer(providerServer);
  }

  console.log("nexus-production-layer-activation-integration QA passed");
}

run().catch(error => {
  console.error(error);
  process.exit(1);
});
