const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const port = 4470;
const base = `http://localhost:${port}`;
const root = path.join(__dirname, "..");
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-fitness-voice-smoke-db.json");
let userCookie = "";

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitFor(url) {
  for (let i = 0; i < 80; i += 1) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error(`${url} did not become reachable`);
}

async function login(email, password) {
  const res = await fetch(`${base}/api/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  const setCookie = res.headers.get("set-cookie");
  if (!res.ok) throw new Error(`login ${email} failed: ${res.status}`);
  return setCookie.split(";")[0];
}

async function callTool(command, cookie) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name: "nexus_health_preparation", arguments: { command } })
  });
  const json = await res.json();
  return { status: res.status, json };
}

(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "" },
    stdio: "ignore",
    windowsHide: true
  });
  try {
    await waitFor(`${base}/api/healthz`);
    userCookie = await login("user@agrinexus.org", "User2026!");

    const plan = await callTool("create a training plan for a 5k", userCookie);
    assert.equal(plan.status, 200);
    assert.match(plan.json.response, /training plan/i);
    assert.equal(plan.json.status, "health-reading-saved");

    const workout = await callTool("I logged a 30 minute run", userCookie);
    assert.equal(workout.status, 200);
    assert.match(workout.json.response, /30-minute run/i);

    const secondWorkout = await callTool("I completed a 45 minute strength training session", userCookie);
    assert.equal(secondWorkout.status, 200);
    assert.match(secondWorkout.json.response, /45-minute/i);

    const progress = await callTool("show my fitness progress", userCookie);
    assert.equal(progress.status, 200);
    assert.match(progress.json.response, /2 workouts totaling 75 minutes/i);
    assert.equal(progress.json.fitnessProgress.sessionCount, 2);
    assert.equal(progress.json.fitnessProgress.totalMinutes, 75);

    const stillRehab = await callTool("I completed my physical therapy", userCookie);
    assert.equal(stillRehab.status, 200);
    assert.match(stillRehab.json.response, /therapy\/exercise participation record/i, "generic rehab phrasing without a duration must stay on the existing exercise_rehab path, not fitness_training");

    console.log("Fitness voice smoke test passed");
  } finally {
    server.kill();
    if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  }
})().catch(error => {
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  console.error(error.stack || error.message);
  process.exit(1);
});
