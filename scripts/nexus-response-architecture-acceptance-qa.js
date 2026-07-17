const assert = require("node:assert");
const fs = require("node:fs");
const http = require("node:http");
const os = require("node:os");
const path = require("node:path");
const { spawn } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const appSource = read("public/app.js");
const serverSource = read("server.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

const runtimes = {
  unifiedBrain: require(path.join(root, "public/nexus-unified-brain-runtime.js")),
  agriculture: require(path.join(root, "public/nexus-agriculture-collaboration-runtime.js")),
  healthcare: require(path.join(root, "public/nexus-healthcare-collaboration-runtime.js")),
  messagePreparation: require(path.join(root, "public/nexus-message-preparation-runtime.js")),
  fullCommunication: require(path.join(root, "public/nexus-full-communication-runtime.js")),
  openDialogue: require(path.join(root, "public/nexus-open-dialogue-runtime.js"))
};

const OWNERS = Object.freeze([
  {
    id: "frontend.unifiedBrain",
    file: "public/nexus-unified-brain-runtime.js",
    mayClaim: "multi-domain missions and explicit mission planning",
    canStopLaterProcessing: true,
    canReuseStaleState: false,
    canGenerateUserFacingLanguage: true,
    canOutrankCurrentAnswer: "only when shouldHandleBeforeLegacy is true",
    necessary: true
  },
  {
    id: "frontend.agricultureCollaboration",
    file: "public/nexus-agriculture-collaboration-runtime.js",
    mayClaim: "explicit agriculture collaboration, advisory, marketplace, logistics, drone, expert-review preparation",
    canStopLaterProcessing: true,
    canReuseStaleState: false,
    canGenerateUserFacingLanguage: true,
    canOutrankCurrentAnswer: "only for explicit agriculture collaboration requests",
    necessary: true
  },
  {
    id: "frontend.healthcareCollaboration",
    file: "public/nexus-healthcare-collaboration-runtime.js",
    mayClaim: "explicit healthcare collaboration, referral, FHIR, provider-review preparation",
    canStopLaterProcessing: true,
    canReuseStaleState: false,
    canGenerateUserFacingLanguage: true,
    canOutrankCurrentAnswer: "only for explicit healthcare collaboration requests",
    necessary: true
  },
  {
    id: "frontend.messagePreparation",
    file: "public/nexus-message-preparation-runtime.js",
    mayClaim: "explicit message drafting/preparation",
    canStopLaterProcessing: true,
    canReuseStaleState: false,
    canGenerateUserFacingLanguage: true,
    canOutrankCurrentAnswer: "only for explicit communications requests",
    necessary: true
  },
  {
    id: "frontend.fullCommunication",
    file: "public/nexus-full-communication-runtime.js",
    mayClaim: "explicit SMS, email, WhatsApp, Telegram, phone call, or communication-provider requests",
    canStopLaterProcessing: true,
    canReuseStaleState: false,
    canGenerateUserFacingLanguage: true,
    canOutrankCurrentAnswer: "only for explicit communication requests",
    necessary: true
  },
  {
    id: "frontend.openDialogue",
    file: "public/nexus-open-dialogue-runtime.js",
    mayClaim: "multilingual handling, provider/readiness questions, explicit workspace/domain support, safety-sensitive support",
    canStopLaterProcessing: true,
    canReuseStaleState: false,
    canGenerateUserFacingLanguage: true,
    canOutrankCurrentAnswer: "must not claim ordinary English conversation",
    necessary: true
  },
  {
    id: "backend.agentCommand",
    file: "server.js /api/agent/command",
    mayClaim: "authoritative turn decision, retrieval, tools, evidence, final answer, memory update",
    canStopLaterProcessing: true,
    canReuseStaleState: "only when relevant context is explicitly referenced",
    canGenerateUserFacingLanguage: true,
    canOutrankCurrentAnswer: "authoritative final answer only",
    necessary: true
  },
  {
    id: "frontend.finalAnswerExtractor",
    file: "public/app.js authoritativeNexusFinalAnswer/extractGenesisSpeakableResponse",
    mayClaim: "display and speech selection from authoritative response envelope",
    canStopLaterProcessing: false,
    canReuseStaleState: false,
    canGenerateUserFacingLanguage: false,
    canOutrankCurrentAnswer: "no; internal status-only strings are rejected",
    necessary: true
  }
]);

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

async function withServer(env, callback) {
  const port = 5600 + Math.floor(Math.random() * 500);
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "nexus-response-architecture-"));
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

function ownerClaims(prompt, language = "en") {
  return {
    unifiedBrain: runtimes.unifiedBrain.shouldHandleBeforeLegacy(prompt, { language, inputType: "voice" }),
    agriculture: runtimes.agriculture.shouldHandleBeforeLegacy(prompt, { language, inputType: "voice" }),
    healthcare: runtimes.healthcare.shouldHandleBeforeLegacy(prompt, { language, inputType: "voice" }),
    messagePreparation: runtimes.messagePreparation.shouldHandleBeforeLegacy(prompt, { language, inputType: "voice" }),
    fullCommunication: runtimes.fullCommunication.shouldHandleBeforeLegacy(prompt, { language, inputType: "voice" }),
    openDialogue: runtimes.openDialogue.shouldHandleBeforeLegacy(prompt, { language, inputType: "voice" })
  };
}

function activeClaimCount(claims) {
  return Object.values(claims).filter(Boolean).length;
}

function assertNoFrontendPreemption(prompt, language = "en") {
  const claims = ownerClaims(prompt, language);
  assert.equal(activeClaimCount(claims), 0, `${prompt} must not be claimed by frontend preflight owners: ${JSON.stringify(claims)}`);
  return claims;
}

function assertAnyFrontendOwner(prompt, owners, language = "en") {
  const claims = ownerClaims(prompt, language);
  assert(owners.some(owner => claims[owner]), `${prompt} should be owned by one of ${owners.join(", ")}: ${JSON.stringify(claims)}`);
  return claims;
}

function assertAuthoritativeResponse(state, label, expected = {}) {
  const response = state.nexusResponse || {};
  const commandResult = state.commandResult || {};
  const trace = response.activationTrace || {};
  assert.equal(response.route, "/api/agent/command", `${label} route`);
  assert.equal(trace.traceVersion, "nexus.activationTrace.v1", `${label} activation trace version`);
  assert(response.turnId || trace.turnId, `${label} should include a fresh turn/correlation id`);
  assert(response.response && response.response.trim(), `${label} should include an authoritative final answer`);
  assert.equal(response.response, commandResult.response, `${label} display and speech should use the commandResult response`);
  assert.equal(response.response, response.spoken, `${label} displayed and spoken answer should match`);
  assert(!/^(prepared|prepared locally|completed local|completed locally|completed_local|prepared_local|routed|blocked|queued|pending|confirmation required|confirmation_required)$/i.test(response.response.trim()), `${label} must not expose internal status as answer`);
  if (!expected.allowWorkspaceLanguage) {
    assert(!/(route you to the right workspace|I may have heard only part|Say one word: health|Tell me one thing: health|workspace-routing|readiness status|internal status)/i.test(response.response), `${label} must not use stale workspace/status fallback language`);
  }
  assert.equal(response.execution.attempted, false, `${label} must not execute live actions in acceptance QA`);
  assert.equal(trace.noDuplicateRuntimeCreated, true, `${label} must not create duplicate runtime`);
  assert.equal(trace.noVoiceRuntimeModified, true, `${label} must not modify voice runtime`);
  if (expected.intent) assert.equal(response.intent, expected.intent, `${label} intent`);
  if (expected.capability) assert.equal(response.capability, expected.capability, `${label} capability`);
  if (expected.status) assert.equal(response.status, expected.status, `${label} status`);
  if (expected.confirmationRequired) {
    assert.equal(commandResult.metadata?.confirmationRequired, true, `${label} should require confirmation`);
    assert.equal(commandResult.metadata?.executionDeferred, true, `${label} should defer execution`);
  }
  if (expected.notCapability) assert.notEqual(response.capability, expected.notCapability, `${label} must not select ${expected.notCapability}`);
  if (expected.noWorkflow) assert.equal(response.workflow.opened, false, `${label} must not open workflow`);
  if (expected.workflowOpened === true) {
    assert.equal(response.workflow.opened, true, `${label} should open or stage workflow: ${JSON.stringify({ intent: response.intent, capability: response.capability, workflow: response.workflow, metadata: commandResult.metadata, response: response.response }, null, 2)}`);
  }
  if (expected.evidenceActive) {
    const evidenceStage = (trace.sharedLayerSequence || []).find(item => item.stage === "evidence_verification");
    assert.notEqual(evidenceStage?.active, false, `${label} evidence stage should be active: ${JSON.stringify({ intent: response.intent, capability: response.capability, status: response.status, evidenceStage, diagnostics: response.diagnostics, metadata: commandResult.metadata }, null, 2)}`);
  }
  if (expected.weather) {
    assert.equal(response.capability, "weather", `${label} weather capability`);
    assert(commandResult.metadata?.weather, `${label} should include weather source metadata`);
    assert.notEqual(commandResult.metadata?.weather?.locationRequired, true, `${label} should not ask for location when a named location is present`);
    assert(commandResult.metadata?.locationText || commandResult.metadata?.weather?.locationText, `${label} should preserve the requested weather location`);
    assert(!/prepared locally|simulated|dummy/i.test(response.response), `${label} weather must not be local-preparation filler`);
  }
  if (expected.sourceFollowUp) {
    assert.equal(commandResult.metadata?.sourceFollowUp, true, `${label} should use source follow-up metadata`);
  }
  return {
    turnId: response.turnId || trace.turnId,
    intent: response.intent,
    capability: response.capability,
    response: response.response,
    evidence: response.evidence,
    status: response.status,
    trace
  };
}

async function run() {
  assert(appSource.includes("function authoritativeNexusFinalAnswer"), "frontend final-answer selector exists");
  assert(appSource.includes("function extractGenesisSpeakableResponse"), "frontend speech selector exists");
  assert(appSource.includes("isNexusInternalStatusOnlyResponse"), "frontend rejects internal status-only answers");
  assert(serverSource.includes("function nexusActivationTraceForResponse"), "backend activation trace exists");
  assert(serverSource.includes("function rememberGenesisSpokenResponse"), "backend bounded spoken memory exists");
  assert(packageJson.scripts["qa:nexus-response-architecture-acceptance"] === "node scripts/nexus-response-architecture-acceptance-qa.js", "package alias should exist");
  assert(qaSuite.includes("scripts/nexus-response-architecture-acceptance-qa.js"), "qa suite should include response architecture acceptance");

  const ordinaryPrompts = [
    "Nexus, are you with me today?",
    "How are you?",
    "What have you been working on?",
    "Tell me something interesting.",
    "What else can we talk about?",
    "I still cannot hear you clearly."
  ];
  ordinaryPrompts.forEach(prompt => assertNoFrontendPreemption(prompt));
  assertAnyFrontendOwner("Prepare an SMS to John", ["messagePreparation", "fullCommunication"]);
  assertAnyFrontendOwner("Help this farmer identify the crop issue, message an extension worker, find a buyer, and prepare shipment options.", ["unifiedBrain"]);
  assertAnyFrontendOwner("What providers are connected?", ["openDialogue"]);
  assertAnyFrontendOwner("que puede hacer nexus", ["openDialogue"], "es");

  const sourceProvider = http.createServer((req, res) => {
    let raw = "";
    req.on("data", chunk => {
      raw += chunk;
    });
    req.on("end", () => {
      const body = raw ? JSON.parse(raw) : {};
      res.setHeader("content-type", "application/json");
      if (/provider failure/i.test(String(body.query || ""))) {
        res.statusCode = 503;
        res.end(JSON.stringify({ error: "test-provider-unavailable" }));
        return;
      }
      res.end(JSON.stringify({
        provider: "mock-institutional-source-provider",
        answer: "Climate-smart agriculture in Africa should combine water planning, soil health, resilient crop choices, extension review, and local evidence.",
        results: [
          {
            title: "FAO Climate-Smart Agriculture",
            url: "https://www.fao.org/climate-smart-agriculture/",
            snippet: "Institutional source for climate-smart agriculture."
          },
          {
            title: "CGIAR Climate Research",
            url: "https://www.cgiar.org/",
            snippet: "Research network source for agriculture and climate resilience."
          }
        ]
      }));
    });
  });
  const sourcePort = await listen(sourceProvider);
  const results = [];
  try {
    await withServer({
      OPENAI_API_KEY: "",
      NEXUS_LIVE_KNOWLEDGE_ENABLED: "true",
      NEXUS_LIVE_KNOWLEDGE_PROVIDER: "generic",
      NEXUS_LIVE_KNOWLEDGE_PROVIDER_ENDPOINT: `http://127.0.0.1:${sourcePort}/search`,
      NEXUS_LIVE_KNOWLEDGE_API_KEY: "test-only-key",
      NEXUS_LIVE_KNOWLEDGE_SAFE_MODE: "true",
      NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
      NEXUS_WEATHER_PROVIDER_ENABLED: "true",
      NEXUS_WEATHER_OPEN_METEO_PROVIDER_ENABLED: "true"
    }, async baseUrl => {
      const login = await requestJson(`${baseUrl}/api/login`, {
        body: { email: "admin@agrinexus.org", password: "Admin2026!" }
      });
      assert.equal(login.status, 200, "login should succeed");
      const cookie = String(login.setCookie?.[0] || "").split(";")[0];
      assert(cookie, "login should return cookie");

      async function command(label, prompt, expected = {}) {
        const state = await requestJson(`${baseUrl}/api/agent/command`, {
          cookie,
          body: {
            command: prompt,
            transcript: prompt,
            finalizedTranscript: prompt,
            conversational: true,
            inputMode: expected.inputMode || "voice",
            outputMode: expected.outputMode || "voice",
            correlationId: `response-arch-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`
          }
        });
        assert.equal(state.status, 200, `${label} HTTP 200`);
        const row = assertAuthoritativeResponse(state.body, label, expected);
        results.push({ label, prompt, ...row });
        return state.body;
      }

      await command("natural presence", "Nexus, are you with me today?", { capability: "conversation", noWorkflow: true });
      await command("casual open conversation", "What have you been working on?", { capability: "conversation", noWorkflow: true });
      await command("complete open statement", "Tell me something interesting.", { capability: "conversation", noWorkflow: true });
      await command("contextual follow-up", "Why is that useful?", { capability: "conversation", noWorkflow: true });
      await command("topic change", "Now talk with me about confidence.", { capability: "conversation", noWorkflow: true });
      await command("correction", "Actually, explain it more simply.", { capability: "conversation", noWorkflow: true });
      await command("weather named location", "What is the weather in Stockton, California?", { capability: "weather", weather: true, evidenceActive: true });
      await command("weather source follow-up", "Where did you get that?", { capability: "conversation", sourceFollowUp: true, noWorkflow: true, evidenceActive: true });
      await command("source backed agriculture", "What are current sources about climate-smart agriculture in Africa?", { capability: "agriculture", evidenceActive: true });
      await command("provider failure", "Research provider failure test for current agriculture sources.", { evidenceActive: true, noWorkflow: true });
      await command("post failure unrelated success", "How are you after that?", { capability: "conversation", noWorkflow: true });
      await command("agriculture question", "My maize leaves are yellow and I do not know why.", { capability: "agriculture", evidenceActive: true });
      await command("workforce question", "I need training for farm jobs but my internet is weak.", { capability: "workforce", evidenceActive: true });
      await command("genuine workspace request", "Open agriculture support.", { workflowOpened: true, allowWorkspaceLanguage: true });
      await command("communications preparation", "Prepare an SMS to John about tomorrow.", { intent: "communications.message_prepared", capability: "communications", evidenceActive: true });
      await command("language switching", "Nexus, change language to Spanish.", { intent: "conversation.pending_action", capability: "multilingual", status: "awaiting-information", confirmationRequired: true });
      await command("normal pacing", "I am speaking normally and want to keep talking.", { capability: "conversation", noWorkflow: true });
    });
  } finally {
    await closeServer(sourceProvider);
  }

  const uniqueTurnIds = new Set(results.map(row => row.turnId).filter(Boolean));
  assert.equal(uniqueTurnIds.size, results.length, "each accepted turn should produce a unique turn id");
  assert(!results.some(row => row.label !== "genuine workspace request" && /prepared locally|route you to the right workspace|I may have heard only part/i.test(row.response)), "no non-workspace turn should surface known broken fallback language");

  console.log(JSON.stringify({
    ok: true,
    suite: "nexus-response-architecture-acceptance",
    activeDecisionOwners: OWNERS,
    acceptanceTurns: results.map(row => ({
      label: row.label,
      intent: row.intent,
      capability: row.capability,
      status: row.status,
      turnId: row.turnId,
      sourceBacked: row.evidence?.sourceBacked === true
    }))
  }, null, 2));
}

run().catch(error => {
  console.error(error);
  process.exit(1);
});
