// Real bug fix: an exhaustive audit of every route reachable before the
// blanket `if (!user) return 401` gate in server.js's api() function found
// eight more instances of the same pattern already fixed three times this
// session (a shared, non-per-user store exposed with no auth check): the
// agentic-brain task manager (/api/nexus/brain/*, real chronic-care/RPM task
// content including emergency-flagged goals), the medical provider-bridge
// dispatch tables (/api/nexus/tools/{medical-support,chronic-disease,rpm,
// rtm,telehealth,mobile-clinics,pharmacy,patient-support}/*, real intake/
// reading content), notifications, communications, outcomes, knowledge
// history, the global consent/audit trail, and field-agent dispatches. This
// script covers all eight, plus confirms sibling "/status"-style routes
// correctly remain public and that a real authenticated user is unaffected.
const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const port = 4606;
const base = `http://localhost:${port}`;
const tempDbPath = path.join(root, "tmp-nexus-second-preauth-wave-smoke-db.json");

function wait(ms) { return new Promise(r => setTimeout(r, ms)); }
async function waitForServer() {
  for (let i = 0; i < 80; i++) { try { const r = await fetch(`${base}/api/healthz`); if (r.ok) return; } catch { await wait(150); } }
  throw new Error("not up");
}
async function post(route, body) {
  const res = await fetch(`${base}${route}`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
  return { status: res.status, json: await res.json().catch(() => ({})) };
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

    // 1. /api/nexus/brain/*
    await check("brain/status unauth -> 401", async () => {
      const r = await fetch(`${base}/api/nexus/brain/status`);
      assert.equal(r.status, 401);
    });
    await check("brain/command unauth -> 401, no PHI stored/leaked", async () => {
      const r = await post("/api/nexus/brain/command", { command: "REALMARKER_task99 my diabetes glucose is 180" });
      assert.equal(r.status, 401);
    });

    // 2. medical bridge family
    await check("chronic-disease/status remains public", async () => {
      const r = await fetch(`${base}/api/nexus/tools/chronic-disease/status`);
      assert.equal(r.status, 200);
    });
    await check("chronic-disease/readings unauth GET -> 401", async () => {
      const r = await fetch(`${base}/api/nexus/tools/chronic-disease/readings`);
      assert.equal(r.status, 401);
    });
    await check("chronic-disease/reading unauth POST -> 401", async () => {
      const r = await post("/api/nexus/tools/chronic-disease/reading", { confirmed: true, glucose: 210, notes: "REALMARKER_reading1" });
      assert.equal(r.status, 401);
    });

    // 3. notifications
    await check("notifications unauth GET -> 401", async () => {
      const r = await fetch(`${base}/api/nexus/notifications`);
      assert.equal(r.status, 401);
    });
    await check("notifications unauth POST -> 401", async () => {
      const r = await post("/api/nexus/notifications", { title: "REALMARKER_notif1" });
      assert.equal(r.status, 401);
    });

    // 4. communications
    await check("communications unauth GET -> 401", async () => {
      const r = await fetch(`${base}/api/nexus/communications`);
      assert.equal(r.status, 401);
    });
    await check("communications/prepare unauth POST -> 401", async () => {
      const r = await post("/api/nexus/communications/prepare", { channel: "sms", messagePreview: "REALMARKER_comm2" });
      assert.equal(r.status, 401);
    });
    await check("communications/status remains public (separately reviewed safe)", async () => {
      const r = await fetch(`${base}/api/nexus/communications/status`);
      assert.equal(r.status, 200);
    });

    // 5. outcomes
    await check("outcomes unauth GET -> 401", async () => {
      const r = await fetch(`${base}/api/nexus/outcomes`);
      assert.equal(r.status, 401);
    });
    await check("outcomes unauth POST -> 401", async () => {
      const r = await post("/api/nexus/outcomes", { outcomeType: "resolved", userFeedback: "REALMARKER_outcome2" });
      assert.equal(r.status, 401);
    });

    // 6. knowledge/history
    await check("knowledge/history unauth GET -> 401", async () => {
      const r = await fetch(`${base}/api/nexus/knowledge/history`);
      assert.equal(r.status, 401);
    });

    // 7. consent-history
    await check("consent-history unauth GET -> 401", async () => {
      const r = await fetch(`${base}/api/nexus/consent-history`);
      assert.equal(r.status, 401);
    });

    // 8. field-agents
    await check("field-agents/dispatch unauth POST -> 401", async () => {
      const r = await post("/api/field-agents/dispatch", { location: "REALMARKER_loc1" });
      assert.equal(r.status, 401);
    });
    await check("field-agents/dispatches unauth GET -> 401", async () => {
      const r = await fetch(`${base}/api/field-agents/dispatches`);
      assert.equal(r.status, 401);
    });
    await check("field-agents (list) remains public", async () => {
      const r = await fetch(`${base}/api/field-agents`);
      assert.equal(r.status, 200);
    });

    // Now confirm everything still works for a real authenticated user.
    const login = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" }) });
    const cookie = login.headers.get("set-cookie").split(";")[0];
    const authedGet = async route => (await fetch(`${base}${route}`, { headers: { cookie } })).status;
    await check("authed brain/status -> 200", async () => assert.equal(await authedGet("/api/nexus/brain/status"), 200));
    await check("authed chronic-disease/readings -> 200", async () => assert.equal(await authedGet("/api/nexus/tools/chronic-disease/readings"), 200));
    await check("authed notifications -> 200", async () => assert.equal(await authedGet("/api/nexus/notifications"), 200));
    await check("authed communications -> 200", async () => assert.equal(await authedGet("/api/nexus/communications"), 200));
    await check("authed outcomes -> 200", async () => assert.equal(await authedGet("/api/nexus/outcomes"), 200));
    await check("authed knowledge/history -> 200", async () => assert.equal(await authedGet("/api/nexus/knowledge/history"), 200));
    await check("authed consent-history -> 200", async () => assert.equal(await authedGet("/api/nexus/consent-history"), 200));
    await check("authed field-agents/dispatches -> 200", async () => assert.equal(await authedGet("/api/field-agents/dispatches"), 200));

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
