// Follow-up to the Investor health-evidence redaction fix. That fix closed
// missionTimeline/communicationThreads/agentMemory; this closes two more
// db.profile.* structures with the identical shape (raw chronic-care text,
// never routed through profileForUser() or any project*ForUser() helper):
//
// 1. nexusAgenticBrainRuntime.listTasks(db) (server/nexusAgenticBrainRuntime.js)
//    -- surfaced via /api/nexus/brain/tasks, /missions, /missions/:id,
//    /receipts, /memory, and the top-level db.profile.nexusAgenticTasks/
//    nexusProviderQueue/nexusAgenticBrainActivity fields in /api/state --
//    carries real userGoal/chronicIntake/providerReport/reminderRequest.purpose
//    text for any task typed "medical_follow_up", plus the mirrored activity
//    log and provider-queue entries derived from it. Separately,
//    db.profile.nexusRuntimeActivity (server/nexusRuntimeAudit.js) carries
//    the same raw goal text for any event with domain === "medical".
// 2. db.profile.nexusPersistentMemory (public/nexus-persistent-memory.js) --
//    surfaced via /api/nexus/persistent-memory/records[/:id]/receipts/
//    predictive-context and the top-level db.profile.nexusPersistentMemory
//    field in /api/state -- carries a record's real title/payload for any
//    record typed "health_patient_intake"/"chronic_condition_record", plus
//    receipts and the record's own cached predictiveContext snapshot that
//    reference it.
const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const port = 4640;
const base = `http://localhost:${port}`;
const tempDbPath = path.join(root, "tmp-investor-brain-and-persistent-memory-redaction-smoke-db.json");

function wait(ms) { return new Promise(r => setTimeout(r, ms)); }
async function waitForServer() {
  for (let i = 0; i < 80; i++) { try { const r = await fetch(`${base}/api/healthz`); if (r.ok) return; } catch { await wait(150); } }
  throw new Error("not up");
}

(async () => {
  fs.copyFileSync(path.join(root, "db.json"), tempDbPath);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_PRESERVE_EMPTY_ENV: "1" },
    stdio: "ignore", windowsHide: true
  });
  try {
    await waitForServer();
    const failures = [];
    const check = async (label, fn) => { try { await fn(); console.log("OK:", label); } catch (e) { failures.push(label + ": " + e.message); console.error("FAIL:", label, e.message); } };

    const userLogin = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" }) });
    const userCookie = userLogin.headers.get("set-cookie").split(";")[0];

    await fetch(`${base}/api/nexus/brain/command`, {
      method: "POST", headers: { "content-type": "application/json", cookie: userCookie },
      body: JSON.stringify({ command: "REALGOAL_confidential my hypertension follow up, my blood pressure today is 150 over 95, please tell my care team REALPROVIDERNOTE_confidential" })
    });
    await fetch(`${base}/api/nexus/persistent-memory/records`, {
      method: "POST", headers: { "content-type": "application/json", cookie: userCookie },
      body: JSON.stringify({ type: "chronic_condition_record", title: "REALTITLE_confidential", payload: { note: "REALPAYLOAD_confidential" } })
    });

    const investorLogin = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "investor@agrinexus.org", password: "Investor2026!" }) });
    const investorCookie = investorLogin.headers.get("set-cookie").split(";")[0];

    const brainMarkers = ["REALGOAL_", "REALPROVIDERNOTE_"];
    const memoryMarkers = ["REALTITLE_", "REALPAYLOAD_"];

    await check("investor GET /api/nexus/brain/tasks carries no raw goal/provider content", async () => {
      const r = await fetch(`${base}/api/nexus/brain/tasks`, { headers: { cookie: investorCookie } });
      const text = JSON.stringify(await r.json());
      for (const m of brainMarkers) assert(!text.includes(m), `leaked ${m}`);
    });

    await check("investor GET /api/nexus/brain/memory carries no raw goal/provider content", async () => {
      const r = await fetch(`${base}/api/nexus/brain/memory`, { headers: { cookie: investorCookie } });
      const text = JSON.stringify(await r.json());
      for (const m of brainMarkers) assert(!text.includes(m), `leaked ${m}`);
    });

    await check("investor GET /api/nexus/brain/receipts carries no raw goal content", async () => {
      const r = await fetch(`${base}/api/nexus/brain/receipts`, { headers: { cookie: investorCookie } });
      const text = JSON.stringify(await r.json());
      assert(!text.includes("REALGOAL_"), "leaked REALGOAL_");
    });

    await check("investor GET /api/nexus/persistent-memory/records carries no raw title/payload", async () => {
      const r = await fetch(`${base}/api/nexus/persistent-memory/records`, { headers: { cookie: investorCookie } });
      const text = JSON.stringify(await r.json());
      for (const m of memoryMarkers) assert(!text.includes(m), `leaked ${m}`);
    });

    await check("investor GET /api/nexus/persistent-memory/receipts carries no raw title", async () => {
      const r = await fetch(`${base}/api/nexus/persistent-memory/receipts`, { headers: { cookie: investorCookie } });
      const text = JSON.stringify(await r.json());
      assert(!text.includes("REALTITLE_"), "leaked REALTITLE_");
    });

    await check("investor GET /api/state carries none of the markers", async () => {
      const r = await fetch(`${base}/api/state`, { headers: { cookie: investorCookie } });
      const text = JSON.stringify(await r.json());
      for (const m of [...brainMarkers, ...memoryMarkers]) assert(!text.includes(m), `leaked ${m}`);
    });

    await check("the Standard User who created the records still sees them raw (own view unaffected)", async () => {
      const r1 = await fetch(`${base}/api/nexus/brain/tasks`, { headers: { cookie: userCookie } });
      assert((JSON.stringify(await r1.json())).includes("REALGOAL_"));
      const r2 = await fetch(`${base}/api/nexus/persistent-memory/records`, { headers: { cookie: userCookie } });
      assert((JSON.stringify(await r2.json())).includes("REALTITLE_"));
    });

    if (failures.length) {
      console.error(`\n${failures.length} FAILURE(S):\n` + failures.join("\n"));
      process.exit(1);
    }
    console.log("\nALL CHECKS PASSED");
  } finally {
    server.kill();
    if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  }
})().catch(e => { console.error(e.stack || e.message); process.exit(1); });
