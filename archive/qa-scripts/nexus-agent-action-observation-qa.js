const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.NEXUS_AGENT_ACTION_OBSERVATION_PORT || 4492);
const base = `http://127.0.0.1:${port}`;
const sourceDb = path.join(root, "db.json");
const tempDb = path.join(root, "tmp-nexus-agent-action-observation-db.json");
let cookie = "";

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function seedDb() {
  const db = JSON.parse(fs.readFileSync(sourceDb, "utf8"));
  db.profile = db.profile || {};
  db.profile.phoneContacts = [
    { id: "agent-action-maria", name: "Maria", lookup: "maria", phone: "+15555550101", relationship: "saved contact", source: "nexus-agent-action-observation-qa" }
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
  throw new Error("Nexus agent action observation server did not become reachable");
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
  return call("/api/agent/command", {
    command: prompt,
    conversational: true,
    inputMode: "voice",
    outputMode: "voice",
    mode: "user",
    targetLanguage: "en"
  });
}

function assertAgentAction(state, prompt) {
  const result = state.commandResult || {};
  const metadata = result.metadata || {};
  const agentAction = metadata.agentAction;

  assert(result.intent, `${prompt} should keep commandResult.intent`);
  assert.strictEqual(typeof result.response, "string", `${prompt} should keep commandResult.response`);
  assert(result.response.length > 0, `${prompt} response text should not be replaced by metadata`);
  assert(result.status, `${prompt} should keep commandResult.status`);
  assert(metadata, `${prompt} should expose metadata`);
  assert(agentAction, `${prompt} should expose metadata.agentAction`);
  assert.strictEqual(agentAction.schemaVersion, "agent-action.v1", `${prompt} should expose agent-action.v1`);
  assert.strictEqual(agentAction.runtimeStatus, "metadata-only", `${prompt} should keep agentAction metadata-only`);
  assert.strictEqual(agentAction.source, "existing-router", `${prompt} should identify existing router as source`);
  assert.notStrictEqual(agentAction.executionMode, "registry-driven", `${prompt} must not claim registry-driven execution`);
  assert.notStrictEqual(agentAction.executionMode, "execute-live-adapter", `${prompt} must not claim live adapter execution`);
  assert(agentAction.result === null || typeof agentAction.result === "object", `${prompt} result metadata should be null or object`);
  if (agentAction.result) {
    assert.strictEqual(agentAction.result.intent, result.intent, `${prompt} agentAction.result.intent should mirror existing result`);
    assert.strictEqual(agentAction.result.status, result.status, `${prompt} agentAction.result.status should mirror existing result`);
  }
  assert(Array.isArray(agentAction.safetyNotes), `${prompt} should expose safety notes`);
  assert(agentAction.safetyNotes.some(note => /existing router remains authoritative/i.test(note)), `${prompt} should state existing router remains authoritative`);
  assert(agentAction.safetyNotes.some(note => /Static Nexus Tool Registry is not runtime-authoritative/i.test(note)), `${prompt} should state static registry is non-authoritative`);
  assert.strictEqual(agentAction.auditMetadata.productName, "Nexus Genesis | AgriNexus", `${prompt} should preserve product identity`);
  assert.strictEqual(agentAction.auditMetadata.assistantName, "Nexus", `${prompt} should preserve assistant identity`);
  assert.strictEqual(agentAction.auditMetadata.legacyProductName, "AgriNexus", `${prompt} should preserve legacy identity`);
  assert.strictEqual(agentAction.legacyCompatibility.legacyProductName, "AgriNexus", `${prompt} should expose legacy compatibility`);
  assert.strictEqual(agentAction.legacyCompatibility.marketplaceModule, "AgriTrade", `${prompt} should preserve AgriTrade`);
  assert.strictEqual(agentAction.legacyCompatibility.agricultureCompatibility, true, `${prompt} should preserve agriculture compatibility`);
  assert(!/live medical diagnosis|live provider dispatch|live payment execution|live job application submission|live external messaging/i.test(`${result.response} ${JSON.stringify(agentAction)}`), `${prompt} must not claim unsupported live execution`);
  return { result, agentAction };
}

(async () => {
  seedDb();
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

    const prompts = [
      "What can you do?",
      "Help me with training",
      "Show job pathways",
      "Open field support",
      "Open health access",
      "Open maps",
      "Open AgriTrade",
      "Sell my crop",
      "Hey AgriNexus"
    ];

    for (const prompt of prompts) {
      const state = await command(prompt);
      assertAgentAction(state, prompt);
    }

    const callState = await command("Call Maria");
    const { result: callResult, agentAction: callAction } = assertAgentAction(callState, "Call Maria");
    assert.strictEqual(callResult.status, "needs-confirmation", "Call Maria should remain confirmation-gated");
    assert.strictEqual(callResult.metadata.confirmationRequired, true, "Call Maria should keep existing confirmation metadata");
    assert.strictEqual(callAction.confirmationRequired, true, "Call Maria agentAction should reflect confirmation requirement");
    assert.strictEqual(callAction.executionMode, "staged-confirmation", "Call Maria agentAction should reflect staged confirmation");
    assert.strictEqual(callAction.riskLevel, "high", "Call Maria agentAction should reflect high risk");
    assert.strictEqual((callState.profile?.outboundCalls || []).length, 0, "Call Maria should not execute outbound call without confirmation");
    await command("no");

    const serverSource = fs.readFileSync(path.join(root, "server.js"), "utf8");
    const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
    const registry = JSON.parse(fs.readFileSync(path.join(root, "docs", "nexus-tool-registry.v1.json"), "utf8"));
    assert(!serverSource.includes("nexus-tool-registry.v1.json"), "server.js must not reference static registry JSON at runtime");
    assert(!appSource.includes("nexus-tool-registry.v1.json"), "public/app.js must not reference static registry JSON at runtime");
    assert.match(appSource, /function observeAgentActionMetadata/, "frontend may observe metadata.agentAction in Phase 7F");
    assert(!/agentAction\.(frontendAction|backendAction)[\s\S]{0,120}(openWorkflow|goSection|mutate|request|confirm|execute)/i.test(appSource), "frontend must not execute, route, or open workflows from metadata.agentAction");
    assert.match(registry.runtimeStatus || "", /static|spec/i, "static registry must remain static/spec-only");
    assert.match(registry.warning || "", /not runtime-authoritative/i, "static registry must remain non-authoritative");

    console.log(`Nexus agent action observation QA passed (${prompts.length + 1} prompts).`);
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
  console.error(error);
  process.exit(1);
});
