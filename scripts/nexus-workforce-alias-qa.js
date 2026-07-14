const assert = require("node:assert");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.NEXUS_WORKFORCE_ALIAS_QA_PORT || 4437);
const base = `http://127.0.0.1:${port}`;
const tempDb = path.join(root, "tmp-nexus-workforce-alias-qa-db.json");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const serverSource = fs.readFileSync(path.join(root, "server.js"), "utf8");
const nativeBridge = fs.readFileSync(path.join(root, "public", "native-bridge.json"), "utf8");
let cookie = "";

function includesAll(haystack, values, label) {
  values.forEach(value => assert(haystack.includes(value), `${label}: missing ${value}`));
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
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
  throw new Error("Nexus Genesis alias QA server did not become reachable");
}

async function call(route, body) {
  const response = await fetch(`${base}${route}`, {
    method: body ? "POST" : "GET",
    headers: { "content-type": "application/json", cookie },
    body: body ? JSON.stringify(body) : undefined
  });
  const setCookie = response.headers.get("set-cookie");
  if (setCookie) cookie = setCookie.split(";")[0];
  const json = await response.json();
  if (!response.ok) throw new Error(`${route}: ${json.error || response.statusText}`);
  return json;
}

const commandChecks = [
  { command: "What is Nexus Genesis | AgriNexus?", intent: "conversation.platform_explained", section: "agent", includes: "Nexus is the assistant inside Nexus Genesis | AgriNexus" },
  { command: "Are you AgriNexus?", intent: "conversation.platform_explained", section: "agent", includes: "legacy/internal compatibility identity" },
  { command: "What can you do?", intent: "conversation.capability_summary", section: "agent", includes: "workforce development" },
  { command: "help me with training", intent: "conversation.learning_start", section: "learning", includes: "skill" },
  { command: "start training", intent: "conversation.learning_start", section: "learning", includes: "skill" },
  { command: "open training", intent: "conversation.learning_start", section: "learning", includes: "skill" },
  { command: "help me learn", intent: "conversation.learning_start", section: "learning", includes: "skill" },
  { command: "help me find a job pathway", intent: "conversation.workforce_help", section: "workforce", includes: "role options" },
  { command: "help me in the field", intent: "conversation.crop_help", section: "trade", includes: "field support" },
  { command: "open health access", intent: "conversation.health_intake", section: "health", includes: "not a diagnosis" },
  { command: "use location", intent: "map.location_permission", section: "map", includes: "after the browser gives permission" },
  { command: "open maps", intent: "conversation.map_open", section: "map", includes: "Full map is open" },
  { command: "open marketplace", intent: "conversation.crop_sale_help", section: "trade", includes: "AgriTrade support" },
  { command: "sell my crop", intent: "conversation.crop_sale_help", section: "trade", includes: "help sell the crop" },
  { command: "scan my field", intent: "drone.field_scan", section: "trade", includes: "Drone scan is ready" },
  { command: "What can you do for a farmer?", intent: "conversation.farmer_help", section: "trade", includes: "For a farmer" }
];

(async () => {
  includesAll(app, [
    "function nexusPlatformExplainAnswer",
    "Nexus is the assistant inside Nexus Genesis | AgriNexus",
    "function nexusWorkforceCapabilityAnswer",
    "help me with training",
    "show job pathways",
    "field support",
    "open marketplace",
    "open agritrade",
    "sell my crop",
    "scan my field",
    'const assistantFullName = "AgriNexus";',
    'localStorage.getItem("agrinexusPersona")'
  ], "Frontend assistant copy, aliases, and protected identifiers");
  assert.match(app, /const AGRINEXUS_PWA_CACHE_VERSION = "agrinexus-pwa-v\d+"/, "Protected AgriNexus PWA cache marker constant should remain");

  includesAll(serverSource, [
    "function nexusWorkforcePlatformExplanation",
    "function nexusWorkforceCapabilitySummary",
    "function nexusWorkforceDifferentiatorAnswer",
    "help me find a job pathway",
    "open health access",
    "open marketplace",
    "scan my field",
    'url.pathname === "/api/agent/command" && req.method === "POST"',
    'url.pathname === "/api/health/action" && req.method === "POST"',
    'url.pathname === "/api/video/session" && req.method === "POST"',
    "outbound_call"
  ], "Backend assistant copy, aliases, contracts, and gates");

  includesAll(nativeBridge, [
    '"name": "AgriNexus Native Voice Bridge"',
    '"full": "AgriNexus"',
    '"short": "Nexus"',
    '"/api/health/action"',
    '"call.launch"'
  ], "Native bridge compatibility contract");

  fs.copyFileSync(path.join(root, "db.json"), tempDb);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDb, OPENAI_API_KEY: "" },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitForServer();
    await call("/api/login", { email: "user@agrinexus.org", password: "User2026!" });
    for (const check of commandChecks) {
      const state = await call("/api/agent/command", {
        command: check.command,
        inputMode: "voice",
        outputMode: "voice",
        conversational: true,
        mode: "user",
        targetLanguage: "en"
      });
      const result = state.commandResult || {};
      const response = String(result.response || "").replace(/\s+/g, " ");
      assert.strictEqual(result.intent, check.intent, `${check.command} should route to ${check.intent}, got ${result.intent}`);
      assert.strictEqual(result.metadata?.redirectSection, check.section, `${check.command} should redirect to ${check.section}, got ${result.metadata?.redirectSection}`);
      assert(response.includes(check.includes), `${check.command} response should include "${check.includes}", got "${response}"`);
      assert(!/live provider room|real telehealth visit is started|submit.*without confirm|sent.*without confirm/i.test(response), `${check.command} must not overclaim live/high-risk execution`);
    }

    const callState = await call("/api/agent/command", {
      command: "call John",
      inputMode: "voice",
      outputMode: "voice",
      conversational: true,
      mode: "user",
      targetLanguage: "en"
    });
    assert.strictEqual(callState.commandResult?.intent, "call.number_needed", "Call alias should still stage safely and ask for missing number");
    assert(/confirm|number|phone/i.test(callState.commandResult?.response || ""), "Call response should still require safe call details/confirmation path");

    console.log("Nexus Genesis alias QA passed");
    commandChecks.forEach(check => console.log(`- ${check.command} -> ${check.intent}`));
  } finally {
    server.kill();
    try {
      fs.unlinkSync(tempDb);
    } catch {
      // Best effort cleanup for Windows file locks.
    }
  }
})().catch(error => {
  console.error(error);
  process.exit(1);
});
