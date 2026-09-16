// Real bug fix: POST /api/auth/guest-session requires no authentication and
// permanently pushed a new row into db.users on every call with no cleanup
// path anywhere in the codebase -- an unauthenticated caller could grow
// db.users (and the in-memory sessions Map) without bound. Because
// readDb()/writeDb() re-parse and re-serialize the entire db.json blob on
// every single request, unbounded guest-account growth is a compounding,
// unauthenticated storage/CPU cost on the whole application, not just an
// isolated leak. Fixed by sweeping guest accounts whose session has aged
// past the normal session TTL before adding a new one, and by sweeping
// expired entries from the sessions Map once it grows past a threshold
// (mirroring the existing rateBuckets sweep pattern).
const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const port = 4621;
const base = `http://localhost:${port}`;
const tempDbPath = path.join(root, "tmp-guest-session-cleanup-smoke-db.json");

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

    await check("aged-out guest accounts are swept on the next guest-session call", async () => {
      for (let i = 0; i < 3; i++) {
        const r = await fetch(`${base}/api/auth/guest-session`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ name: `Stale Guest ${i}` }) });
        assert.equal(r.status, 201);
      }

      let dbState = JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
      const staleCutoff = new Date(Date.now() - 999_999_999).toISOString();
      dbState.users = dbState.users.map(u => (u.guest && u.name?.startsWith("Stale Guest"))
        ? { ...u, updatedAt: staleCutoff, createdAt: staleCutoff }
        : u);
      fs.writeFileSync(tempDbPath, JSON.stringify(dbState));

      const fresh = await fetch(`${base}/api/auth/guest-session`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ name: "Fresh Guest" }) });
      assert.equal(fresh.status, 201);

      const after = JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
      const remainingStale = after.users.filter(u => u.guest && u.name?.startsWith("Stale Guest"));
      const freshGuest = after.users.find(u => u.name === "Fresh Guest");
      assert.equal(remainingStale.length, 0, "aged-out guest accounts must be swept");
      assert(freshGuest, "the newly created guest account must still be persisted");
    });

    await check("a guest resuming their own still-valid session is unaffected", async () => {
      const first = await fetch(`${base}/api/auth/guest-session`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ name: "Resuming Guest" }) });
      assert.equal(first.status, 201);
      const cookie = first.headers.get("set-cookie").split(",").map(c => c.trim()).find(c => c.startsWith("agrinexus_sid"));
      const resumed = await fetch(`${base}/api/auth/guest-session`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify({ name: "Resuming Guest Renamed" }) });
      assert.equal(resumed.status, 200);
      const json = await resumed.json();
      assert.equal(json.auth?.resumed, true);
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
