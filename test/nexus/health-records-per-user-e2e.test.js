"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawn } = require("node:child_process");

// End to end through the real server, as two different signed-in people: the medical bridge routes used to keep every person's readings and
// intakes in one shared array, so each saw the other's, and account export/erase could not find a person's own records.

const root = path.resolve(__dirname, "..", "..");
const port = 4743;
const base = `http://localhost:${port}`;
const tempDbPath = path.join(root, "tmp-health-records-per-user-test-db.json");
const tempUploadDir = fs.mkdtempSync(path.join(os.tmpdir(), "nexus-health-scope-uploads-"));
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

let server;
let adminCookie;
let userCookie;

async function login(email, password) {
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email, password }) });
  assert.equal(res.status, 200, `${email} must be able to sign in`);
  return res.headers.get("set-cookie").split(";")[0];
}
async function call(method, pathname, cookie, body) {
  const res = await fetch(`${base}${pathname}`, { method, headers: { "content-type": "application/json", cookie }, body: body ? JSON.stringify(body) : undefined });
  const text = await res.text();
  let json; try { json = JSON.parse(text); } catch { json = { raw: text.slice(0, 200) }; }
  return { status: res.status, json };
}

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), tempDbPath);
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_FILE_STORAGE_DIR: tempUploadDir }, stdio: "ignore", windowsHide: true });
  for (let i = 0; i < 80; i += 1) { try { if ((await fetch(`${base}/api/healthz`)).ok) break; } catch { await wait(150); } }
  adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  userCookie = await login("user@agrinexus.org", "User2026!");
});

test.after(() => {
  server.kill();
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  fs.rmSync(tempUploadDir, { recursive: true, force: true });
});

const reading = (systolic, diastolic) => ({ conditionFocus: "hypertension", systolic, diastolic, readingContext: "voice-reported", confirmed: true });

test("each signed-in person saves and lists only their own readings and intakes through the real routes", async () => {
  const savedByAdmin = await call("POST", "/api/nexus/tools/chronic-disease/reading", adminCookie, reading(151, 96));
  const savedByUser = await call("POST", "/api/nexus/tools/chronic-disease/reading", userCookie, reading(111, 71));
  assert.equal(savedByAdmin.status, 200);
  assert.equal(savedByUser.status, 200);
  await call("POST", "/api/nexus/tools/telehealth/intake", adminCookie, { reason: "admin-only headache note", confirmed: true });

  const adminReadings = (await call("GET", "/api/nexus/tools/chronic-disease/readings", adminCookie)).json.data.readings;
  const userReadings = (await call("GET", "/api/nexus/tools/chronic-disease/readings", userCookie)).json.data.readings;
  assert.deepEqual(adminReadings.map(r => r.systolic), [151]);
  assert.deepEqual(userReadings.map(r => r.systolic), [111]);

  const userIntakes = (await call("GET", "/api/nexus/tools/telehealth/intakes", userCookie)).json.data.intakes;
  assert.deepEqual(userIntakes, [], "the other person's intake must not be visible");
  const adminIntakes = (await call("GET", "/api/nexus/tools/telehealth/intakes", adminCookie)).json.data.intakes;
  assert.equal(adminIntakes.length, 1);
  assert.match(JSON.stringify(adminIntakes), /admin-only headache note/);
});

test("trend summary and provider report count only the caller's own readings", async () => {
  const summary = (await call("POST", "/api/nexus/tools/chronic-disease/trend-summary", userCookie, { conditionFocus: "hypertension" })).json.data.summary;
  assert.equal(summary.readingCount, 1);
  const report = (await call("POST", "/api/nexus/tools/chronic-disease/provider-report", userCookie, { conditionFocus: "hypertension" })).json.data.report;
  assert.deepEqual(report.readingTableSummary.map(row => row.bloodPressure), ["111/71"]);
});

test("a spoken blood-pressure reading is saved under the speaker and read back only to them", async () => {
  const spoken = await call("POST", "/api/voice/realtime/tool", userCookie, { name: "nexus_health_preparation", correlationId: "e2e-1", arguments: { command: "My blood pressure is 140 over 90, please save it", confirmed: true, language: "en" }, language: "en" });
  assert.equal(spoken.status, 200);
  const mine = (await call("GET", "/api/nexus/tools/chronic-disease/readings", userCookie)).json.data.readings.map(r => `${r.systolic}/${r.diastolic}`);
  assert.equal(mine.includes("111/71"), true);
  assert.equal(mine.includes("140/90"), true, "the spoken reading itself must have been saved under the speaker: " + JSON.stringify(spoken.json).slice(0, 200));
  const theirs = (await call("GET", "/api/nexus/tools/chronic-disease/readings", adminCookie)).json.data.readings.map(r => `${r.systolic}/${r.diastolic}`);
  assert.deepEqual(theirs, ["151/96"], "the other account's readings are unchanged and never include mine");
});

test("account export includes the person's own records (and not anyone else's); account erase removes only theirs", async () => {
  const exported = await call("POST", "/api/account/export", userCookie, {});
  assert.equal(exported.status, 200, JSON.stringify(exported.json).slice(0, 200));
  const file = await fetch(`${base}${exported.json.downloadPath}`, { headers: { cookie: userCookie } });
  const payload = JSON.parse((await file.json()).content);
  const exportedReadings = payload.profileRecords.nexusChronicDiseaseReadings || [];
  assert.equal(exportedReadings.some(r => r.systolic === 111), true, "own reading is in the export");
  // Check the records, not the text: a bare "151" also appears inside every record id (they contain the current time in milliseconds).
  const everyHealthRecord = Object.values(payload.profileRecords).filter(Array.isArray).flat();
  assert.equal(everyHealthRecord.some(record => record && record.systolic === 151), false, "the other person's reading must not be in the export");
  assert.equal(JSON.stringify(payload).includes("admin-only headache note"), false);

  const erased = await call("POST", "/api/account/erase", userCookie, { confirmed: true });
  assert.equal(erased.status, 200, JSON.stringify(erased.json).slice(0, 200));
  assert.ok(erased.json.verification.profileRecordsRemoved.medicalBridgeRecords >= 2, "the erase must report the medical records it removed (the saved and the spoken reading)");
  const stillThere = (await call("GET", "/api/nexus/tools/chronic-disease/readings", adminCookie)).json.data.readings;
  assert.deepEqual(stillThere.map(r => r.systolic), [151], "erasing one account leaves the other's records");
});
