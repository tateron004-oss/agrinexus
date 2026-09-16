// Real bug fix: the Investor role is supposed to get a fully redacted view
// of Healthcare-module content -- profileForUser()/projectHealthRecordForUser()
// etc. already redact the health-record arrays, notifications, integration
// events, and activity feed. But several OTHER places carried the same raw
// patient/participant content and were never routed through any redaction:
//   - missionTimelineModel(db) (served raw at publicState().missionTimeline,
//     and reused inside evidenceExportPacket()) included healthIntakes and
//     Healthcare-tagged communicationThreads verbatim.
//   - db.profile.communicationThreads/communicationMessages were never
//     redacted at all in profileForUser() -- a Healthcare-tagged thread's
//     real subject/participantName/message text was served as-is.
//   - db.profile.agentMemory (longTermFacts, moduleMemory.Healthcare,
//     userNeeds, advisorHistory, memoryTimeline) all carry the same text
//     via rememberAgentMemory(), called by createCommunicationThread and
//     many other handlers, and none of it was redacted either.
// An Investor could reach every one of these through GET /api/state and
// POST /api/evidence/export (both gated only by canUse(user,"ai"), which
// Investor has) and read real patient/participant names and message
// content verbatim. Fixed by extending profileForUser() and
// missionTimelineModel() with the same Healthcare-module redaction pattern
// already used elsewhere in this file.
const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const port = 4634;
const base = `http://localhost:${port}`;
const tempDbPath = path.join(root, "tmp-investor-health-evidence-redaction-smoke-db.json");

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

    await fetch(`${base}/api/communications/thread`, {
      method: "POST", headers: { "content-type": "application/json", cookie: userCookie },
      body: JSON.stringify({ module: "Healthcare", subject: "REALSUBJECT_confidential", recipientName: "REALPARTICIPANT_confidential" })
    });
    await fetch(`${base}/api/health/rural-network`, {
      method: "POST", headers: { "content-type": "application/json", cookie: userCookie },
      body: JSON.stringify({ type: "nearest-clinic", patientName: "REALPATIENT_ChidinmaOkonkwo", symptoms: "REALSYMPTOM_confidential" })
    });

    const investorLogin = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "investor@agrinexus.org", password: "Investor2026!" }) });
    const investorCookie = investorLogin.headers.get("set-cookie").split(";")[0];

    const markers = ["REALSUBJECT_", "REALPARTICIPANT_", "REALPATIENT_", "REALSYMPTOM_"];

    await check("investor GET /api/state carries no raw patient/participant content", async () => {
      const r = await fetch(`${base}/api/state`, { headers: { cookie: investorCookie } });
      const text = JSON.stringify(await r.json());
      for (const marker of markers) assert(!text.includes(marker), `leaked ${marker} in /api/state`);
    });

    await check("investor POST /api/evidence/export carries no raw patient/participant content", async () => {
      const r = await fetch(`${base}/api/evidence/export`, {
        method: "POST", headers: { "content-type": "application/json", cookie: investorCookie },
        body: JSON.stringify({ audience: "investor" })
      });
      const text = JSON.stringify(await r.json());
      for (const marker of markers) assert(!text.includes(marker), `leaked ${marker} in /api/evidence/export`);
    });

    await check("the Standard User who created the records still sees them raw (own view unaffected)", async () => {
      const r = await fetch(`${base}/api/state`, { headers: { cookie: userCookie } });
      const text = JSON.stringify(await r.json());
      assert(text.includes("REALPATIENT_") || text.includes("REALSUBJECT_"), "Standard User's own data should not be redacted");
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
