const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.EXECUTIVE_INTELLIGENCE_QA_PORT || 4411);
const base = `http://127.0.0.1:${port}`;
const sourceDb = path.join(root, "db.json");
const tempDb = path.join(root, "tmp-executive-intelligence-qa-db.json");
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
  throw new Error("Executive intelligence QA server did not become reachable");
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
    assert(initial.executiveIntelligence, "public state must expose executive intelligence");
    assert.equal(initial.executiveIntelligence.pillars.length, 5, "executive intelligence should expose all five pillars");
    assert(initial.executiveIntelligence.launchPriorities.length >= 5, "executive intelligence should rank launch countries");
    assert(initial.executiveIntelligence.revenuePaths.length >= 5, "executive intelligence should expose revenue paths");
    assert(initial.executiveIntelligence.governance.length >= 5, "executive intelligence should expose governance checks");

    const strategy = await call("/api/executive-intelligence/analyze", {
      focus: "strategic-intelligence",
      query: "Run strategic intelligence for launch priority investor proof and partner path"
    });
    assert(strategy.executiveAnalysis.record.analysisNumber.startsWith("NEX-EXEC-"), "strategy analysis should get a number");
    assert.equal(strategy.executiveAnalysis.record.focus, "strategic-intelligence");
    assert(strategy.executiveAnalysis.record.recommendation.includes("Prioritize"), "strategy should produce a priority recommendation");

    const market = await call("/api/executive-intelligence/analyze", {
      focus: "market-intelligence",
      query: "Compare Kenya Nigeria Ghana Rwanda Tanzania DRC Egypt and South Africa for market opportunity"
    });
    assert.equal(market.executiveAnalysis.record.focus, "market-intelligence");
    assert(market.executiveAnalysis.record.topCountry.country, "market analysis should identify a top country");

    const governance = await call("/api/executive-intelligence/analyze", {
      focus: "governance-intelligence",
      query: "Show governance risks for telehealth payments privacy marketplace and country launch"
    });
    assert.equal(governance.executiveAnalysis.record.focus, "governance-intelligence");
    assert(governance.executiveAnalysis.record.governance.some(item => item.area === "Healthcare"), "governance should include healthcare guardrail");

    const revenue = await call("/api/executive-intelligence/analyze", {
      focus: "revenue-intelligence",
      query: "Build revenue plan for subscriptions transaction fees mobile clinics learning certificates and providers"
    });
    assert.equal(revenue.executiveAnalysis.record.focus, "revenue-intelligence");
    assert(revenue.executiveAnalysis.record.revenuePaths.some(item => item.id === "transaction-fee"), "revenue should include transaction fee path");

    const improve = await call("/api/executive-intelligence/analyze", {
      focus: "self-improving-intelligence",
      query: "What should improve next before investors and rural user testing"
    });
    assert.equal(improve.executiveAnalysis.record.focus, "self-improving-intelligence");
    assert(improve.executiveAnalysis.record.improvement.signals.length >= 1, "self-improving intelligence should expose improvement signals");

    const roadmap = await call("/api/executive-intelligence/roadmap");
    assert(roadmap.pillars.length === 5, "roadmap should include five pillars");
    assert(roadmap.suggestedCommands.length >= 5, "roadmap should expose suggested commands");

    const readiness = await call("/api/executive-intelligence/readiness");
    assert(readiness.score >= 50, "readiness should return an executive score");
    assert(readiness.topCountry.country, "readiness should expose top country");

    const voice = await call("/api/agent/command", {
      command: "Nexus run strategic intelligence and tell me which country we should launch first",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice",
      mode: "investor"
    });
    assert.equal(voice.commandResult.intent, "executive_intelligence.analysis_completed");
    assert(voice.commandResult.response.includes("Strategic Intelligence"), "voice response should explain strategic intelligence result");
    assert(voice.commandResult.metadata.frontierCommunication, "voice executive response should include frontier communication metadata");

    const finalState = await call("/api/state");
    assert(finalState.executiveIntelligence.latestAnalysis, "latest executive analysis should appear in state");
    assert(finalState.executiveIntelligence.latestDecision, "latest executive decision should appear in state");

    console.log("Executive intelligence QA passed");
  } finally {
    server.kill();
    if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  }
})().catch(error => {
  if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  console.error(error.message || error);
  process.exit(1);
});
