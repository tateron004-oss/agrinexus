const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.OPERATIONAL_INTELLIGENCE_QA_PORT || 4407);
const base = `http://127.0.0.1:${port}`;
const sourceDb = path.join(root, "db.json");
const tempDb = path.join(root, "tmp-operational-intelligence-qa-db.json");
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
  throw new Error("Operational intelligence QA server did not become reachable");
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
    assert(initial.operationalIntelligence, "public state must expose operational intelligence");
    assert(initial.operationalIntelligence.workflowScores.length >= 6, "workflow completion scores should cover core modules");
    assert(initial.operationalIntelligence.playbooks.length >= 6, "operational playbooks should be seeded");

    const goalState = await call("/api/operational-intelligence/goal", { goal: "Help a farmer sell maize and track delivery from Kenya to Nigeria" });
    assert(goalState.operationalIntelligenceGoal.goalNumber.startsWith("NEX-GOAL-"), "goal should receive a goal number");
    assert.equal(goalState.operationalIntelligenceGoal.status, "active");

    const playbookState = await call("/api/operational-intelligence/playbook", { type: "crop-sale", request: "Help a farmer sell maize and track delivery" });
    assert(playbookState.operationalIntelligencePlaybook.run.runNumber.startsWith("NEX-PLAY-"), "playbook should create a run number");
    assert(playbookState.operationalIntelligencePlaybook.run.steps.length >= 4, "playbook should include operational steps");

    const healthPlaybook = await call("/api/operational-intelligence/playbook", { type: "health-access", request: "I need a doctor and medicine support near Nairobi" });
    assert.equal(healthPlaybook.operationalIntelligencePlaybook.run.module, "Healthcare");
    assert(healthPlaybook.operationalIntelligencePlaybook.run.guardrail.includes("does not diagnose"), "health playbook must carry safety boundary");

    const decisionState = await call("/api/operational-intelligence/decision", { query: "best clinic or pharmacy next step in Kenya" });
    assert(decisionState.operationalIntelligenceDecision.reviewNumber.startsWith("NEX-DEC-"), "decision review should be recorded");
    assert(decisionState.operationalIntelligenceDecision.bestChoice.title, "decision review should return a best choice");

    const issueState = await call("/api/operational-intelligence/issue", { detail: "The intake workflow is wrong and needs adjustment" });
    assert(issueState.operationalIntelligenceIssue.issueNumber.startsWith("NEX-FIX-"), "issue report should be recorded");
    assert.equal(issueState.operationalIntelligenceIssue.status, "guided-recovery");

    const voiceStatus = await call("/api/agent/command", {
      command: "Nexus operational intelligence status",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice",
      mode: "user"
    });
    assert.equal(voiceStatus.commandResult.intent, "operational_intelligence.status");

    const voiceIssue = await call("/api/agent/command", {
      command: "Nexus this workflow is wrong and the map needs adjustment",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice",
      mode: "user"
    });
    assert.equal(voiceIssue.commandResult.intent, "operational_intelligence.issue_recorded");
    assert(voiceIssue.commandResult.response.includes("I recorded"), "voice issue response should be simple and corrective");

    const finalState = await call("/api/state");
    assert(finalState.operationalIntelligence.latestGoal, "latest goal should appear in public state");
    assert(finalState.operationalIntelligence.latestIssue, "latest issue should appear in public state");
    assert(finalState.operationalIntelligence.latestDecision, "latest decision should appear in public state");

    console.log("Operational intelligence QA passed");
  } finally {
    server.kill();
    if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  }
})().catch(error => {
  if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  console.error(error.message || error);
  process.exit(1);
});
