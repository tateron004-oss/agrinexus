const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.AUTONOMOUS_ORCHESTRATION_QA_PORT || 4412);
const base = `http://127.0.0.1:${port}`;
const sourceDb = path.join(root, "db.json");
const tempDb = path.join(root, "tmp-autonomous-orchestration-qa-db.json");
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
  throw new Error("Autonomous orchestration QA server did not become reachable");
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
    assert(initial.autonomousOrchestration, "public state must expose autonomous orchestration");
    assert(initial.autonomousOrchestration.templates.length >= 4, "orchestration should expose mission templates");
    assert(initial.autonomousOrchestration.summary.includes("tracked mission"), "orchestration should explain mission behavior");

    const templates = await call("/api/autonomous-orchestration/templates");
    assert(templates.templates.some(item => item.id === "launch-country"), "templates should include country launch mission");
    assert(templates.templates.some(item => item.id === "investor-demo"), "templates should include investor proof mission");

    const launch = await call("/api/autonomous-orchestration/mission", {
      templateId: "launch-country",
      query: "Launch AgriNexus in Kenya for rural health agriculture learning workforce trade maps and investors",
      country: "Kenya",
      maxSteps: 4
    });
    assert(launch.autonomousOrchestrationMission.mission.missionNumber.startsWith("NEX-ORCH-"), "mission should get an orchestration number");
    assert(launch.autonomousOrchestrationMission.mission.steps.length >= 7, "launch mission should include ordered steps");
    assert(launch.autonomousOrchestrationMission.cycle.completedSteps.length >= 3, "launch cycle should advance multiple steps");
    assert(launch.autonomousOrchestrationMission.mission.score > 0, "mission score should advance");

    const cycle = await call("/api/autonomous-orchestration/cycle", { maxSteps: 3 });
    assert(cycle.autonomousOrchestrationCycle.cycle.cycleNumber.startsWith("NEX-CYCLE-"), "cycle should get a cycle number");
    assert(cycle.autonomousOrchestrationCycle.mission.score >= launch.autonomousOrchestrationMission.mission.score, "cycle should maintain or improve score");

    const report = await call("/api/autonomous-orchestration/report", {});
    assert(report.autonomousOrchestrationReport.reportNumber.startsWith("NEX-REPORT-"), "report should get a report number");
    assert(report.autonomousOrchestrationReport.completedEvidence.length >= 1, "report should include completed evidence");
    assert(report.autonomousOrchestrationReport.nextAction, "report should include next action");

    const voice = await call("/api/agent/command", {
      command: "Nexus launch AgriNexus in Kenya and manage the mission",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice",
      mode: "investor"
    });
    assert.equal(voice.commandResult.intent, "autonomous_orchestration.mission_started");
    assert(voice.commandResult.response.includes("NEX-ORCH-"), "voice response should include mission number");
    assert(voice.commandResult.metadata.frontierCommunication, "voice response should include frontier communication metadata");

    const finalState = await call("/api/state");
    assert(finalState.autonomousOrchestration.latestMission, "latest mission should appear in state");
    assert(finalState.autonomousOrchestration.latestCycle, "latest cycle should appear in state");
    assert(finalState.autonomousOrchestration.latestReport, "latest report should appear in state");

    console.log("Autonomous orchestration QA passed");
  } finally {
    server.kill();
    if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  }
})().catch(error => {
  if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  console.error(error.message || error);
  process.exit(1);
});
