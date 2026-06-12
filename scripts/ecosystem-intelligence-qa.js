const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.ECOSYSTEM_INTELLIGENCE_QA_PORT || 4410);
const base = `http://127.0.0.1:${port}`;
const sourceDb = path.join(root, "db.json");
const tempDb = path.join(root, "tmp-ecosystem-intelligence-qa-db.json");
let cookie = "";

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

async function waitForServer() {
  for (let i = 0; i < 80; i += 1) {
    try {
      const response = await fetch(`${base}/api/healthz`);
      if (response.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error("Ecosystem intelligence QA server did not become reachable");
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

(async () => {
  fs.copyFileSync(sourceDb, tempDb);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env,
      PORT: String(port),
      AGRINEXUS_DB_PATH: tempDb,
      OPENAI_API_KEY: ""
    },
    stdio: ["ignore", "pipe", "pipe"],
    windowsHide: true
  });

  try {
    await waitForServer();
    await call("/api/login", { email: "admin@agrinexus.org", password: "Admin2026!" });
    const initial = await call("/api/state");
    assert(initial.ecosystemIntelligence, "public state must expose ecosystem intelligence");
    assert(initial.ecosystemIntelligence.graph.nodes.length >= 10, "ecosystem graph should include community and provider actors");
    assert(initial.ecosystemIntelligence.graph.edges.length >= 8, "ecosystem graph should include service relationships");
    assert(initial.ecosystemIntelligence.missions.length >= 5, "ecosystem missions should cover core rural outcomes");

    const health = await call("/api/ecosystem-intelligence/mission", {
      missionId: "rural-health-access",
      query: "Coordinate a mobile clinic, pharmacy, map, and patient intake mission near Nairobi Kenya",
      country: "Kenya"
    });
    assert(health.ecosystemMission.record.missionNumber.startsWith("NEX-ECO-"), "ecosystem mission should get a mission number");
    assert(health.ecosystemMission.record.modules.includes("Healthcare"), "health ecosystem mission should include Healthcare");
    assert(health.ecosystemMission.record.serviceLanes.includes("health-network"), "health mission should include health network lane");
    assert(health.ecosystemMission.record.guardrail.toLowerCase().includes("diagnosis"), "health mission must include safety guardrail");

    const trade = await call("/api/ecosystem-intelligence/mission", {
      missionId: "crop-sale-delivery",
      query: "Help me sell maize, contact buyer, map route, track shipment, and prepare receipt from Kenya to Nigeria",
      country: "Kenya"
    });
    assert(trade.ecosystemMission.record.modules.includes("AgriTrade"), "trade ecosystem mission should include AgriTrade");
    assert(trade.ecosystemMission.record.serviceLanes.includes("trade-market-network"), "trade mission should include market lane");
    assert(trade.ecosystemMission.record.steps.length >= 5, "trade mission should include guided steps");

    const field = await call("/api/ecosystem-intelligence/mission", {
      missionId: "field-rescue",
      query: "Coordinate drone field scan, crop problem support, buyer update, and route plan",
      country: "Kenya"
    });
    assert(field.ecosystemMission.record.modules.includes("AgriTech"), "field mission should include AgriTech");
    assert(field.ecosystemMission.record.serviceLanes.includes("field-drone-network"), "field mission should include drone lane");

    const graph = await call("/api/ecosystem-intelligence/graph");
    assert(graph.graph.edges.some(edge => edge.from === "mobile-clinic" && edge.to === "pharmacy"), "graph should connect mobile clinics to pharmacies");
    assert(graph.graph.edges.some(edge => edge.from === "farmer" && edge.to === "buyer"), "graph should connect farmers to buyers");

    const readiness = await call("/api/ecosystem-intelligence/readiness");
    assert(readiness.guardrails.length >= 4, "readiness should expose ecosystem guardrails");
    assert(readiness.missionCount >= 5, "readiness should count mission templates");

    const voice = await call("/api/agent/command", {
      command: "Nexus coordinate mobile clinic pharmacy and map help in Kenya",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice",
      mode: "user"
    });
    assert.equal(voice.commandResult.intent, "ecosystem_intelligence.mission_coordinated");
    assert(voice.commandResult.response.includes("Source:"), "voice ecosystem response should include source truth");
    assert(voice.commandResult.metadata.frontierCommunication, "voice ecosystem response should include frontier communication metadata");

    const finalState = await call("/api/state");
    assert(finalState.ecosystemIntelligence.latestMission, "latest ecosystem mission should appear in state");
    assert(finalState.ecosystemIntelligence.recentRuns.length >= 1, "recent ecosystem runs should appear in state");

    console.log("Ecosystem intelligence QA passed");
  } finally {
    server.kill();
    if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  }
})().catch(error => {
  if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  console.error(error.message || error);
  process.exit(1);
});
