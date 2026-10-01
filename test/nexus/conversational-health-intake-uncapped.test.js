const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (server.js helper-function sweep): of the ~17 call sites across
// this file that add to db.profile.healthIntakes (PHI-bearing), only ONE
// capped the array afterward -- applyConversationalIntake's health branch
// (reached when a multi-turn voice intake is confirmed) was one of the many
// that let it grow without bound.
const root = path.resolve(__dirname, "..", "..");
const port = 4803;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-conversational-health-intake-uncapped-db.json");

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

function readTempDb() {
  return JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
}

let server;
let cookie;

test.before(async () => {
  const seedDb = JSON.parse(fs.readFileSync(dbPath, "utf8"));
  seedDb.profile.healthIntakes = Array.from({ length: 30 }, (_, i) => ({
    id: `seed-intake-${i + 1}`,
    patientRef: `AN-PAT-SEED-${String(i + 1).padStart(3, "0")}`,
    patientName: "Seed patient",
    createdAt: new Date().toISOString()
  }));
  seedDb.profile.agentPendingAction = {
    id: "pending-conversational-intake-test",
    kind: "conversational-intake",
    module: "Healthcare",
    action: "create telehealth intake",
    section: "health",
    domain: "health",
    intakeSessionId: "test-intake-session",
    intakeAnswers: {
      patientName: "Confirmed Test Patient",
      needSummary: "Follow-up on a persistent cough",
      preferredLanguage: "en",
      accessibilityNeeds: "none",
      contactMethod: "SMS"
    },
    command: "help me with a health intake",
    createdAt: new Date().toISOString()
  };
  fs.writeFileSync(tempDbPath, JSON.stringify(seedDb));

  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  const login = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" }) });
  assert.equal(login.status, 200);
  cookie = login.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server?.kill();
  fs.rmSync(tempDbPath, { force: true });
});

test("confirming a conversational health intake adds the real intake but keeps the PHI-bearing array capped", async () => {
  const res = await fetch(`${base}/api/agent/command`, {
    method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify({ command: "yes" })
  });
  const body = await res.json();
  assert.equal(body.error, undefined, JSON.stringify(body));

  const after = readTempDb();
  assert.equal(after.profile.healthIntakes.length, 30, "the array must stay capped at 30, not grow to 31");
  assert.equal(after.profile.healthIntakes[0].patientName, "Confirmed Test Patient", "the real confirmed intake must still be the newest entry");
  assert.equal(after.profile.healthIntakes.some(item => item.id === "seed-intake-30"), false, "the oldest seed entry must be the one trimmed off, not the new real intake");
});
