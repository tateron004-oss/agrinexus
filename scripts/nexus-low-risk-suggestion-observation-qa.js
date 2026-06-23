const assert = require("node:assert");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.NEXUS_LOW_RISK_SUGGESTION_OBSERVATION_PORT || 4593);
const base = `http://127.0.0.1:${port}`;
const tempDb = path.join(root, "tmp-nexus-low-risk-suggestion-observation-db.json");
const appPath = path.join(root, "public", "app.js");
const serverPath = path.join(root, "server.js");
const registryPath = path.join(root, "docs", "nexus-tool-registry.v1.json");
let cookie = "";

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function seedDb() {
  const db = JSON.parse(fs.readFileSync(path.join(root, "db.json"), "utf8"));
  db.profile = db.profile || {};
  db.profile.phoneContacts = [
    { id: "suggestion-observation-provider", name: "Provider", lookup: "provider", phone: "+15555550102", relationship: "saved provider", source: "nexus-low-risk-suggestion-observation-qa" }
  ];
  db.profile.outboundCalls = [];
  db.profile.agentPendingAction = null;
  fs.writeFileSync(tempDb, JSON.stringify(db, null, 2));
}

async function waitForServer() {
  for (let index = 0; index < 80; index += 1) {
    try {
      const response = await fetch(`${base}/api/healthz`);
      if (response.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error("Nexus low-risk suggestion observation QA server did not become reachable");
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

async function command(prompt) {
  const state = await call("/api/agent/command", {
    command: prompt,
    conversational: true,
    inputMode: "voice",
    outputMode: "voice",
    mode: "user",
    targetLanguage: "en"
  });
  return state.commandResult || {};
}

function loadFrontendObservationHarness() {
  const app = fs.readFileSync(appPath, "utf8");
  const helperStart = app.indexOf("function buildLowRiskAgentActionSuggestion");
  const helperEnd = app.indexOf("function observeAgentActionMetadata", helperStart);
  const observeStart = helperEnd;
  const observeEnd = app.indexOf("const countryLanguageMap", observeStart);
  assert(helperStart >= 0 && helperEnd > helperStart, "frontend builder helper must be extractable");
  assert(observeStart >= 0 && observeEnd > observeStart, "frontend observation helper must be extractable");

  const helperBody = app.slice(helperStart, helperEnd);
  const observeBody = app.slice(observeStart, observeEnd);
  const forbiddenCalls = [
    "openWorkflowModal",
    "openWorkflowByVoice",
    "executeWorkflowConfigFromVoice",
    "handleVoiceCommand",
    "runBackendAgentCommand",
    "runUtilityAgentCommand",
    "confirmPendingWorkflow",
    "stageAgentAction",
    "maybeDispatchConfirmedNativeCallHandoff",
    "goSection(",
    "mutate(",
    "request("
  ];
  for (const call of forbiddenCalls) {
    assert(!helperBody.includes(call), `builder must not call ${call}`);
    assert(!observeBody.includes(call), `observation helper must not call ${call}`);
  }

  const appSource = app;
  assert(!/data-low-risk-suggestion|data-agent-action-suggestion|lowRiskSuggestionButton|agentActionSuggestionButton|renderLowRiskAgentActionSuggestion|renderAgentActionSuggestion/i.test(appSource), "frontend must not add visible suggestion container, button, or renderer");
  assert(!/addEventListener\([^)]*lowRiskSuggestion|onclick\s*=\s*.*lowRiskSuggestion/i.test(appSource), "frontend must not attach click handlers to hidden suggestions");

  return vm.runInNewContext(`
    ${helperBody}
    let latestObservedAgentActionMetadata = null;
    let observedAgentActionMetadataLog = [];
    ${observeBody}
    ({
      buildLowRiskAgentActionSuggestion,
      observeAgentActionMetadata,
      latest: () => latestObservedAgentActionMetadata,
      log: () => observedAgentActionMetadataLog
    });
  `, {
    localStorage: { getItem: () => null },
    console: { debug: () => {} },
    Date
  });
}

function assertHiddenSuggestion(prompt, observed, expectedToolId, expectedLabel) {
  const suggestion = observed.lowRiskSuggestion;
  assert(suggestion, `${prompt} should produce a hidden low-risk suggestion`);
  assert.strictEqual(suggestion.selectedToolId, expectedToolId, `${prompt} selectedToolId should be ${expectedToolId}`);
  assert.strictEqual(suggestion.label, expectedLabel, `${prompt} label should be ${expectedLabel}`);
  assert.strictEqual(suggestion.level, 0, `${prompt} suggestion must remain level 0`);
  assert.strictEqual(suggestion.visibility, "hidden-observation-only", `${prompt} suggestion must remain hidden`);
  assert.strictEqual(suggestion.userClickRequired, true, `${prompt} suggestion must require user click`);
  assert.strictEqual(suggestion.executionAllowed, false, `${prompt} suggestion must not allow execution`);
  assert.strictEqual(suggestion.autoOpenAllowed, false, `${prompt} suggestion must not allow auto-open`);
  assert.strictEqual(suggestion.source, "agentAction.metadata", `${prompt} suggestion source must remain metadata`);
}

const lowRiskChecks = [
  ["help me with training", "workforce.training", "Open Training"],
  ["show job pathways", "workforce.job_pathways", "View Job Pathways"],
  ["field support", "workforce.field_support", "View Field Support"],
  ["help me learn", "learning.start", "Open Learning"],
  ["open AgriTrade", "marketplace.agritrade", "Browse AgriTrade"],
  ["agriculture help", "agriculture.help", "Get Agriculture Help"]
];

const highRiskChecks = [
  "open health access",
  "start telehealth",
  "turn on camera",
  "call provider",
  "use my location",
  "sell my crop",
  "submit my application",
  "dispatch shipment",
  "send message",
  "open admin"
];

(async () => {
  seedDb();
  const frontend = loadFrontendObservationHarness();
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env,
      PORT: String(port),
      AGRINEXUS_DB_PATH: tempDb,
      OPENAI_API_KEY: "",
      TWILIO_ACCOUNT_SID: "",
      TWILIO_AUTH_TOKEN: "",
      TWILIO_PHONE_NUMBER: "",
      PUBLIC_BASE_URL: base,
      DEMO_CALL_TO: ""
    },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitForServer();
    await call("/api/login", { email: "user@agrinexus.org", password: "User2026!" });

    for (const [prompt, expectedToolId, expectedLabel] of lowRiskChecks) {
      const result = await command(prompt);
      const agentAction = result.metadata?.agentAction;
      assert(agentAction, `${prompt} should return agentAction metadata`);
      assert.strictEqual(agentAction.runtimeStatus, "metadata-only", `${prompt} agentAction remains metadata-only`);
      assert.strictEqual(agentAction.source, "existing-router", `${prompt} agentAction source remains existing-router`);
      assert.strictEqual(agentAction.selectedToolId, expectedToolId, `${prompt} backend selectedToolId should be ${expectedToolId}`);
      const observedReturn = frontend.observeAgentActionMetadata(result, { source: "qa", command: prompt });
      assert.strictEqual(observedReturn, null, `${prompt} observation helper must not return UI action`);
      const observed = frontend.latest();
      assert(observed, `${prompt} should update local observation record`);
      assertHiddenSuggestion(prompt, observed, expectedToolId, expectedLabel);
    }

    for (const prompt of highRiskChecks) {
      const result = await command(prompt);
      const agentAction = result.metadata?.agentAction;
      assert(agentAction, `${prompt} should return agentAction metadata`);
      assert.strictEqual(agentAction.runtimeStatus, "metadata-only", `${prompt} agentAction remains metadata-only`);
      assert.strictEqual(agentAction.source, "existing-router", `${prompt} agentAction source remains existing-router`);
      assert.strictEqual(agentAction.selectedToolId || null, null, `${prompt} must not expose low-risk selectedToolId`);
      frontend.observeAgentActionMetadata(result, { source: "qa", command: prompt });
      const observed = frontend.latest();
      assert(observed, `${prompt} should update local observation record`);
      assert.strictEqual(observed.lowRiskSuggestion, null, `${prompt} must not produce a hidden low-risk suggestion`);
    }

    const app = fs.readFileSync(appPath, "utf8");
    const serverSource = fs.readFileSync(serverPath, "utf8");
    const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));
    assert(!serverSource.includes("nexus-tool-registry.v1.json"), "server.js must not reference static registry JSON at runtime");
    assert(!app.includes("nexus-tool-registry.v1.json"), "public/app.js must not reference static registry JSON at runtime");
    assert.match(registry.runtimeStatus || "", /static|spec/i, "static registry must remain static/spec-only");
    assert.match(registry.warning || "", /not runtime-authoritative/i, "static registry must remain non-authoritative");
    assert.match(app, /assistantFullName = "AgriNexus"/, "AgriNexus compatibility must remain present");
    assert.match(`${serverSource} ${app}`, /AgriTrade/, "AgriTrade compatibility must remain present");
    assert.match(`${serverSource} ${app}`, /agriculture|farmer|crop/i, "agriculture/farm/crop compatibility must remain present");

    console.log("Nexus low-risk suggestion observation QA passed");
    lowRiskChecks.forEach(([prompt, toolId]) => console.log(`- ${prompt} -> hidden ${toolId}`));
    highRiskChecks.forEach(prompt => console.log(`- ${prompt} -> no suggestion`));
  } finally {
    server.kill();
    await wait(150);
    try {
      fs.unlinkSync(tempDb);
    } catch {
      // Best effort cleanup for Windows file locks.
    }
  }
})().catch(error => {
  try {
    if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  } catch {
    // Best effort cleanup for Windows file locks.
  }
  console.error(error);
  process.exit(1);
});
