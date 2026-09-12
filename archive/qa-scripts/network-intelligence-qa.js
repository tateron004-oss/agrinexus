const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.NETWORK_INTELLIGENCE_QA_PORT || 4409);
const base = `http://127.0.0.1:${port}`;
const sourceDb = path.join(root, "db.json");
const tempDb = path.join(root, "tmp-network-intelligence-qa-db.json");
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
  throw new Error("Network intelligence QA server did not become reachable");
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
    assert(initial.networkIntelligence, "public state must expose network intelligence");
    assert(initial.networkIntelligence.registry.length >= 8, "network registry should cover key service lanes");
    assert(initial.networkIntelligence.countryCoverage.length >= 8, "network intelligence should expose African country coverage");

    const health = await call("/api/network-intelligence/query", { query: "Find closest clinic or pharmacy near Nairobi Kenya", serviceId: "health-network", country: "Kenya" });
    assert(health.networkIntelligenceQuery.record.queryNumber.startsWith("NEX-NET-"), "network query should get a query number");
    assert.equal(health.networkIntelligenceQuery.record.module, "Healthcare");
    assert(health.networkIntelligenceQuery.record.sourceLabel, "network query should label source truth");

    const market = await call("/api/network-intelligence/query", { query: "Check current maize market price in Kenya today", serviceId: "trade-market-network", country: "Kenya" });
    assert.equal(market.networkIntelligenceQuery.record.module, "AgriTrade");
    assert(market.networkIntelligenceQuery.record.actionReadiness.canDoNow.length >= 4, "network query should include action readiness");

    const readiness = await call("/api/network-intelligence/action-readiness", { query: "Can Nexus call a provider or route a shipment?", serviceId: "communications-network" });
    assert(readiness.networkActionReadiness.guardrails.length >= 1, "action readiness should include guardrails");
    assert(readiness.networkActionReadiness.canDoNow.includes("Open the matching workflow"), "action readiness should explain what can run now");

    const providerMap = await call("/api/network-intelligence/provider-map");
    assert(providerMap.registry.length >= 8, "provider map should return service registry");
    assert(providerMap.countryCoverage.some(item => item.country === "Kenya"), "provider map should include Kenya");

    const voice = await call("/api/agent/command", {
      command: "Nexus use network intelligence to find the closest clinic in Kenya",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice",
      mode: "user"
    });
    assert.equal(voice.commandResult.intent, "network_intelligence.query_routed");
    assert(voice.commandResult.response.includes("Source:"), "voice network response should include source label");

    const finalState = await call("/api/state");
    assert(finalState.networkIntelligence.latestQuery, "latest network query should appear in state");
    assert(finalState.networkIntelligence.latestRoute, "latest network route should appear in state");

    console.log("Network intelligence QA passed");
  } finally {
    server.kill();
    if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  }
})().catch(error => {
  if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  console.error(error.message || error);
  process.exit(1);
});
