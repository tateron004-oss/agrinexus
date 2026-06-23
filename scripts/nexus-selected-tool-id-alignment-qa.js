const assert = require("node:assert");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.NEXUS_SELECTED_TOOL_ID_QA_PORT || 4592);
const base = `http://127.0.0.1:${port}`;
const tempDb = path.join(root, "tmp-nexus-selected-tool-id-qa-db.json");
let cookie = "";

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function seedDb() {
  const db = JSON.parse(fs.readFileSync(path.join(root, "db.json"), "utf8"));
  db.profile = db.profile || {};
  db.profile.phoneContacts = [
    { id: "selected-tool-maria", name: "Maria", lookup: "maria", phone: "+15555550101", relationship: "saved contact", source: "nexus-selected-tool-id-alignment-qa" }
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
  throw new Error("Nexus selectedToolId QA server did not become reachable");
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

function assertAgentAction(prompt, result, expectedToolId) {
  assert(result.intent, `${prompt} should keep commandResult.intent`);
  assert.strictEqual(typeof result.response, "string", `${prompt} should keep response text`);
  assert(result.response.length > 0, `${prompt} should not replace response text with metadata`);
  assert(result.status, `${prompt} should keep commandResult.status`);
  const agentAction = result.metadata?.agentAction;
  assert(agentAction, `${prompt} should expose metadata.agentAction`);
  assert.strictEqual(agentAction.schemaVersion, "agent-action.v1", `${prompt} should keep agent-action.v1`);
  assert.strictEqual(agentAction.runtimeStatus, "metadata-only", `${prompt} should keep metadata-only runtime status`);
  assert.strictEqual(agentAction.source, "existing-router", `${prompt} should keep existing-router source`);
  assert.strictEqual(agentAction.selectedToolId || null, expectedToolId, `${prompt} selectedToolId should be ${expectedToolId}`);
  assert.notStrictEqual(agentAction.executionMode, "registry-driven", `${prompt} must not claim registry-driven execution`);
  assert.notStrictEqual(agentAction.executionMode, "execute-live-adapter", `${prompt} must not claim live adapter execution`);
  assert(agentAction.safetyNotes.some(note => /existing router remains authoritative/i.test(note)), `${prompt} should preserve router-authority safety note`);
  assert(agentAction.safetyNotes.some(note => /Static Nexus Tool Registry is not runtime-authoritative/i.test(note)), `${prompt} should preserve static-registry safety note`);
  assert.strictEqual(agentAction.legacyCompatibility.legacyProductName, "AgriNexus", `${prompt} should preserve AgriNexus compatibility`);
  assert.strictEqual(agentAction.legacyCompatibility.marketplaceModule, "AgriTrade", `${prompt} should preserve AgriTrade compatibility`);
  assert.strictEqual(agentAction.legacyCompatibility.agricultureCompatibility, true, `${prompt} should preserve agriculture compatibility`);
  return agentAction;
}

const lowRiskChecks = [
  ["help me with training", "workforce.training"],
  ["start training", "workforce.training"],
  ["show job pathways", "workforce.job_pathways"],
  ["career pathways", "workforce.job_pathways"],
  ["help me in the field", "workforce.field_support"],
  ["field support", "workforce.field_support"],
  ["help me learn", "learning.start"],
  ["open learning", "learning.start"],
  ["open AgriTrade", "marketplace.agritrade"],
  ["browse marketplace", "marketplace.agritrade"],
  ["agriculture help", "agriculture.help"],
  ["crop help", "agriculture.help"],
  ["what can you do for a farmer", "agriculture.help"]
];

const nullChecks = [
  "what can you do",
  "guide me step by step",
  "open health access",
  "start health intake",
  "open video for provider to show injury",
  "call Maria",
  "my baby is sick and not breathing",
  "use my location",
  "sell my crop",
  "apply for this job",
  "track my shipment",
  "send WhatsApp to the seller",
  "run drone scan",
  "open admin dashboard"
];

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

    for (const [prompt, expectedToolId] of lowRiskChecks) {
      const result = await command(prompt);
      assertAgentAction(prompt, result, expectedToolId);
    }

    for (const prompt of nullChecks) {
      const result = await command(prompt);
      assertAgentAction(prompt, result, null);
      if (/call maria/i.test(prompt)) {
        assert.strictEqual(result.status, "needs-confirmation", "Call Maria should remain confirmation-gated");
        assert.strictEqual(result.metadata?.confirmationRequired, true, "Call Maria should keep confirmation metadata");
      }
    }

    const serverSource = fs.readFileSync(path.join(root, "server.js"), "utf8");
    const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
    const registry = JSON.parse(fs.readFileSync(path.join(root, "docs", "nexus-tool-registry.v1.json"), "utf8"));
    assert(!serverSource.includes("nexus-tool-registry.v1.json"), "server.js must not reference static registry JSON at runtime");
    assert(!appSource.includes("nexus-tool-registry.v1.json"), "public/app.js must not reference static registry JSON at runtime");
    assert.match(appSource, /function observeAgentActionMetadata/, "frontend may observe agentAction metadata");
    assert(!/agentAction\.(frontendAction|backendAction)[\s\S]{0,120}(openWorkflow|goSection|mutate|request|confirm|execute)/i.test(appSource), "frontend must not execute, route, open, or confirm from metadata.agentAction");
    assert.match(registry.runtimeStatus || "", /static|spec/i, "static registry must remain static/spec-only");
    assert.match(registry.warning || "", /not runtime-authoritative/i, "static registry must remain non-authoritative");
    assert.match(serverSource, /function inferMetadataOnlySelectedToolId/, "server should use a conservative metadata-only selectedToolId helper");
    assert.match(serverSource, /selectedToolId:\s*inferredSelectedToolId \|\| null/, "selectedToolId should be populated only by conservative metadata inference");
    assert.match(serverSource, /legacyProductName:\s*"AgriNexus"/, "AgriNexus compatibility must remain present");
    assert.match(`${serverSource} ${appSource}`, /AgriTrade/, "AgriTrade compatibility must remain present");
    assert.match(`${serverSource} ${appSource}`, /agriculture|farmer|crop/i, "agriculture/farm/crop compatibility must remain present");

    console.log("Nexus selectedToolId alignment QA passed");
    lowRiskChecks.forEach(([prompt, toolId]) => console.log(`- ${prompt} -> ${toolId}`));
    nullChecks.forEach(prompt => console.log(`- ${prompt} -> null`));
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
