"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const vm = require("node:vm");
const { spawn } = require("node:child_process");
const { createCallTimings } = require("../../nexus/observability/call-timings.js");

// 22 October 2026: every request reads the whole stored state (about 5 MB on the live site) and every save writes it whole. A save by a request that changed nothing has nothing to write, so it now writes nothing (and, in Postgres, does not send the
// whole document back to be compared with itself). The timing record counts those apart (db.write.skipped), and the platform owner can read where the state's bytes are (/api/admin/system/state-size, names and counts only).
const root = path.resolve(__dirname, "..", "..");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");

// ---- the save itself, run for real against a file and against a stand-in for Postgres ----
function saver({ postgres = null, file }) {
  const start = server.indexOf("async function writeDbUntimed(db) {");
  const end = server.indexOf("\n// Memoized: with sync fs calls", start);
  assert.ok(start > 0 && end > start, "writeDbUntimed is in the server");
  const dbReadSnapshots = new WeakMap();
  const merges = [];
  const context = {
    fs, path, console, Promise, JSON, Date, Math, setTimeout, process,
    DB_PATH: file, dbReadSnapshots, writeDbQueue: Promise.resolve(),
    profileOwnerStamping: { getStore: () => null }, stampNewProfileRecordsWithOwner: () => {},
    dbMergeEnabled: () => true, mergeStoredState: (base, mine, latest) => { merges.push(1); return mine; },
    usingPostgresState: () => Boolean(postgres), ensurePostgresState: async () => {}, getPgPool: () => postgres,
    businessSpaces: { currentSpace: () => "default", spaceDbPath: () => file }
  };
  vm.runInNewContext(`${server.slice(start, end)}\nthis.save = writeDbUntimed;`, context);
  return { save: context.save, snapshots: dbReadSnapshots, merges };
}
const readLikeTheServer = (file, snapshots) => { const raw = fs.readFileSync(file, "utf8"); const state = JSON.parse(raw); snapshots.set(state, raw); return state; };

test("a save by a request that changed nothing writes nothing; a save that changed something still writes", async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "state-save-cost-"));
  const file = path.join(dir, "db.json");
  fs.writeFileSync(file, JSON.stringify({ profile: { notes: ["one"] }, users: [{ id: "u1" }] }, null, 2) + "\n");
  const { save, snapshots } = saver({ file });
  const before = fs.statSync(file).mtimeMs;
  await new Promise(resolve => setTimeout(resolve, 30));
  const unchanged = readLikeTheServer(file, snapshots);
  assert.equal(await save(unchanged), "unchanged");
  assert.equal(fs.statSync(file).mtimeMs, before, "the file was not rewritten");
  assert.deepEqual(fs.readdirSync(dir), ["db.json"], "no temporary file was left");
  const changed = readLikeTheServer(file, snapshots);
  changed.profile.notes.push("two");
  assert.notEqual(await save(changed), "unchanged");
  assert.deepEqual(JSON.parse(fs.readFileSync(file, "utf8")).profile.notes, ["one", "two"]);
  // a state that did not come from the reader (nothing remembered) is saved as before, changed or not
  assert.notEqual(await save(JSON.parse(fs.readFileSync(file, "utf8"))), "unchanged");
  // the same request saving twice: the second save, with nothing new, saves nothing
  const twice = readLikeTheServer(file, snapshots);
  twice.profile.notes.push("three");
  assert.notEqual(await save(twice), "unchanged");
  assert.equal(await save(twice), "unchanged");
  fs.rmSync(dir, { recursive: true, force: true });
});

test("in Postgres an unchanged save sends nothing; a changed one is saved only if the stored state is still the one that was read", async () => {
  const queries = [];
  const pool = { query: async (sql, params) => { queries.push({ sql: String(sql), params }); return { rowCount: 1, rows: [{ state: {} }] }; } };
  const { save, snapshots } = saver({ postgres: pool, file: path.join(os.tmpdir(), "unused-state-save.json") });
  const state = { profile: { n: 1 }, users: [] };
  snapshots.set(state, JSON.stringify(state));
  assert.equal(await save(state), "unchanged"); assert.equal(queries.length, 0, "not one query");
  state.profile.n = 2;
  assert.notEqual(await save(state), "unchanged");
  assert.equal(queries.length, 1); assert.match(queries[0].sql, /update agrinexus_app_state set state = \$2::jsonb[^"]*where id = \$1 and state = \$3::jsonb/);
  assert.equal(queries[0].params[2], JSON.stringify({ profile: { n: 1 }, users: [] }), "compared with what was read");
  // not read through the reader: written as before
  const stranger = { profile: { n: 9 } };
  assert.notEqual(await save(stranger), "unchanged"); assert.equal(queries.length, 2); assert.doesNotMatch(queries[1].sql, /and state = /);
});

// ---- the record and the report ----
test("the timing record counts the saves that were avoided apart from the ones that were done", () => {
  const timings = createCallTimings();
  timings.recordStep("db.write", 400, { bytes: 5_000_000 });
  timings.recordStep("db.write", 2, { bytes: 5_000_000, skipped: true });
  timings.recordStep("db.write", 3, { bytes: 5_000_000, skipped: true });
  const lines = Object.fromEntries(timings.snapshot().steps.map(line => [line.name, line]));
  assert.equal(lines["db.write"].count, 1); assert.equal(lines["db.write"].ms.max, 400, "the avoided saves do not make the real ones look fast");
  assert.equal(lines["db.write.skipped"].count, 2);
  assert.match(server, /let skipped = false;\s+try \{ skipped = \(await writeDbUntimed\(db\)\) === "unchanged"; \}\s+finally \{ kyroCallTimings\.recordStep\("db\.write", performance\.now\(\) - startedAt, \{ bytes: stateBytes\(db\), skipped \}\); \}/);
});

const free = () => new Promise(resolve => { const s = require("node:net").createServer(); s.listen(0, "127.0.0.1", () => { const p = s.address().port; s.close(() => resolve(p)); }); });
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

test("the platform owner can read where the state's bytes are, and nobody else can", async () => {
  const port = await free(); const base = `http://127.0.0.1:${port}`;
  const db = path.join(os.tmpdir(), `state-size-${Date.now()}.json`);
  const seed = JSON.parse(fs.readFileSync(path.join(root, "db.json"), "utf8"));
  seed.profile = { ...(seed.profile || {}), "someone@example.com": { notes: ["x".repeat(500)] }, notes: ["y".repeat(2000), "z"] };
  fs.writeFileSync(db, JSON.stringify(seed, null, 2) + "\n");
  const child = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: db, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" }, stdio: "ignore" });
  try {
    for (let i = 0; i < 100; i += 1) { try { if ((await fetch(`${base}/api/healthz`)).ok) break; } catch { await wait(150); } }
    const login = async (email, password) => { const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email, password }) }); assert.equal(res.status, 200); return res.headers.get("set-cookie").split(";")[0]; };
    const admin = await login("admin@agrinexus.org", "Admin2026!"); const user = await login("user@agrinexus.org", "User2026!");
    assert.equal((await fetch(`${base}/api/admin/system/state-size`)).status, 401);
    assert.equal((await fetch(`${base}/api/admin/system/state-size`, { headers: { cookie: user } })).status, 403);
    const report = await (await fetch(`${base}/api/admin/system/state-size`, { headers: { cookie: admin } })).json();
    assert.equal(report.ok, true); assert.ok(report.totalBytes > 1000);
    assert.ok(report.parts.length >= 1 && report.parts[0].bytes >= report.parts[report.parts.length - 1].bytes, "biggest first");
    const notes = report.profile.find(row => row.key === "notes");
    assert.ok(notes && notes.items === 2 && notes.avgBytes > 500, "an array shows its count and what one costs");
    const text = JSON.stringify(report);
    assert.doesNotMatch(text, /someone@example\.com|xxxxxxxxxx|yyyyyyyyyy/, "no key that looks like an email and no contents");
    assert.ok(report.profileOtherKeys.keys >= 1, "the email-like key is only counted");
  } finally { child.kill(); try { fs.unlinkSync(db); } catch { /* gone */ } }
});
