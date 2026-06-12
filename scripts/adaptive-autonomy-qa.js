const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.ADAPTIVE_AUTONOMY_QA_PORT || 4408);
const base = `http://127.0.0.1:${port}`;
const sourceDb = path.join(root, "db.json");
const tempDb = path.join(root, "tmp-adaptive-autonomy-qa-db.json");
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
  throw new Error("Adaptive autonomy QA server did not become reachable");
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
    assert(initial.adaptiveAutonomy, "public state must expose adaptive autonomy");
    assert(initial.adaptiveAutonomy.preventionRules.length >= 5, "adaptive autonomy should expose safety guardrails");
    assert(initial.adaptiveAutonomy.activeSignals.length >= 1, "adaptive autonomy should inspect platform signals");

    const runState = await call("/api/adaptive-autonomy/run", { limit: 5, request: "Monitor everything and prepare next best actions" });
    assert(runState.adaptiveAutonomyRun.run.runNumber.startsWith("NEX-LOOP-"), "monitor run should receive a run number");
    assert(runState.adaptiveAutonomyRun.nudges.length >= 1, "monitor run should prepare nudges");

    const nudgeState = await call("/api/adaptive-autonomy/nudge", {
      title: "Help the user finish the next workflow",
      module: "Learning",
      nextAction: "Open the active course and ask one short question"
    });
    assert(nudgeState.adaptiveAutonomyNudge.nudgeNumber.startsWith("NEX-AUTO-"), "nudge should receive a nudge number");
    assert.equal(nudgeState.adaptiveAutonomyNudge.module, "Learning");

    const learnState = await call("/api/adaptive-autonomy/learn", {
      lesson: "The user wants shorter responses and visible workflow action first",
      behaviorChange: "Answer briefly, open the right workflow, then ask one question."
    });
    assert(learnState.adaptiveAutonomyLearning.updateNumber.startsWith("NEX-LEARN-"), "learning update should receive an update number");
    assert(learnState.adaptiveAutonomyLearning.behaviorChange.includes("Answer briefly"));

    const voiceRun = await call("/api/agent/command", {
      command: "Nexus run adaptive autonomy and monitor my goals",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice",
      mode: "user"
    });
    assert.equal(voiceRun.commandResult.intent, "adaptive_autonomy.cycle_completed");
    assert(voiceRun.commandResult.response.includes("signal"), "voice run should summarize signals");

    const voiceLearn = await call("/api/agent/command", {
      command: "Nexus learn that I need shorter answers",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice",
      mode: "user"
    });
    assert.equal(voiceLearn.commandResult.intent, "adaptive_autonomy.learning_recorded");

    const finalState = await call("/api/state");
    assert(finalState.adaptiveAutonomy.latestRun, "latest adaptive run should appear in public state");
    assert(finalState.adaptiveAutonomy.latestNudge, "latest adaptive nudge should appear in public state");
    assert(finalState.adaptiveAutonomy.latestLearning, "latest adaptive learning should appear in public state");

    console.log("Adaptive autonomy QA passed");
  } finally {
    server.kill();
    if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  }
})().catch(error => {
  if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  console.error(error.message || error);
  process.exit(1);
});
