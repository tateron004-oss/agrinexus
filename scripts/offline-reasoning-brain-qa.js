const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const port = Number(process.env.OFFLINE_REASONING_QA_PORT || 4414);
const base = `http://127.0.0.1:${port}`;
const sourceDb = path.join(root, "db.json");
const tempDb = path.join(root, "tmp-offline-reasoning-qa-db.json");
let cookie = "";

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitForServer() {
  for (let i = 0; i < 80; i += 1) {
    try {
      const response = await fetch(`${base}/api/healthz`);
      if (response.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error("Offline reasoning QA server did not become reachable");
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

(async () => {
  fs.copyFileSync(sourceDb, tempDb);
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
      PROVIDER_ENGINE_BASE_URL: "",
      PUBLIC_BASE_URL: ""
    },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitForServer();
    await call("/api/login", { email: "demo@agrinexus.org", password: "Prototype2026!" });

    const scenarios = [
      ["health", "Nexus, reason through this without live providers: a child is sick and needs medicine near a mobile clinic"],
      ["trade", "Nexus, use offline reasoning brain to help a farmer sell maize to a buyer and track delivery"],
      ["drone", "Nexus, scenario reasoning for drone footage showing crop stress in the field"],
      ["learning", "Nexus, decision tree for a learner who cannot read well and needs audio course support"],
      ["workforce", "Nexus, confidence score for a worker who wants a job in Kenya"],
      ["map", "Nexus, think through a shipment route without live logistics providers"]
    ];

    for (const [domain, command] of scenarios) {
      const state = await call("/api/agent/command", {
        command,
        conversational: true,
        inputMode: "voice",
        outputMode: "voice"
      });
      const result = state.commandResult;
      assert.strictEqual(result.intent, "conversation.offline_reasoning_brain", `${domain} should use offline reasoning brain`);
      assert(result.metadata.offlineReasoningBrain, `${domain} should return offline reasoning metadata`);
      assert(result.metadata.offlineReasoningBrain.decisionTree.length >= 4, `${domain} should expose a decision tree`);
      assert(result.metadata.offlineReasoningBrain.nextQuestion, `${domain} should ask the next best question`);
      assert(result.metadata.offlineReasoningBrain.confidence >= 54, `${domain} should include a confidence score`);
      assert(result.metadata.offlineReasoningBrain.providerBoundary.includes("local data"), `${domain} should explain provider boundary`);
      assert(result.metadata.reasonedActionBridge, `${domain} should include a reasoned action bridge`);
      assert(result.metadata.reasonedActionBridge.screen, `${domain} should route to a visible screen`);
      assert(result.metadata.reasonedActionBridge.openCommand?.startsWith("Nexus,"), `${domain} should include a voice-open command`);
      assert(result.metadata.reasonedActionBridge.recoveryPhrase?.includes("Nexus stop"), `${domain} should include voice recovery language`);
      assert(result.metadata.reasonedActionBridge.visibleOutcome, `${domain} should explain what the user will see`);
      assert(result.metadata.outcomeLoop?.nextVisibleAction, `${domain} should carry a guided outcome loop`);
      assert(state.profile.agentMemory.activeOutcomeLoop?.oneQuestion, `${domain} should save the outcome loop in memory`);
      assert(result.response.includes("Best next action"), `${domain} response should include best next action`);
    }

    const direct = await call("/api/intelligence/offline-reasoning", {
      command: "What should I do if a farmer has a bad crop, no buyer, and poor route visibility?",
      persist: true
    });
    assert(direct.offlineReasoningBrainResult, "direct endpoint should return offline reasoning result");
    assert(direct.offlineReasoningBrainResult.whatNexusKnows.length >= 3, "direct endpoint should include local knowledge facts");
    assert(direct.offlineReasoningBrainResult.actionBridge?.modeCoverage?.includes("User"), "direct endpoint should include all-mode action bridge coverage");
    assert((direct.profile.offlineReasoningRuns || []).length >= 1, "offline reasoning should save evidence");

    console.log("Offline reasoning brain QA passed");
  } finally {
    server.kill();
    if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  }
})().catch(error => {
  if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  console.error(error.message || error);
  process.exit(1);
});
