"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawn } = require("node:child_process");
const providers = require("../../server/providers/index.js");
const { scopeHealthDb } = require("../../server/providers/healthRecordScope.js");
const { assessBloodPressure, invalidReadingReply, urgentGuidance, lowNote } = require("../../server/providers/bloodPressure.js");

// Found by re-running the health checklist: a spoken "900 over 20" was saved as a health record; "190 over 125" got only the general "a single reading is not a
// diagnosis" line, not the urgent guidance; and the history showed every reading's date as "not provided".

test("assessBloodPressure: impossible numbers are not a reading; very high, high, low and normal are told apart", () => {
  for (const [sys, dia] of [[900, 20], [20, 900], [120, 15], [310, 100], [50, 40], [120, 120], [120, 115], [80, 90], [null, 80], [120, null], ["abc", 80]]) {
    assert.equal(assessBloodPressure(sys, dia).valid, false, `${sys}/${dia}`);
  }
  for (const [sys, dia, level] of [[120, 80, "normal"], [110, 70, "normal"], [139, 89, "normal"], [140, 90, "high"], [150, 95, "high"], [179, 119, "high"], [180, 100, "urgent"], [190, 125, "urgent"], [150, 120, "urgent"], [89, 70, "low"], [100, 55, "low"], [85, 55, "low"], [60, 30, "low"]]) {
    const result = assessBloodPressure(sys, dia);
    assert.equal(result.valid, true, `${sys}/${dia}`);
    assert.equal(result.level, level, `${sys}/${dia}`);
  }
});

test("the replies say what to do, in plain words", () => {
  assert.match(invalidReadingReply(900, 20), /900 over 20.*not.*real blood-pressure reading.*did not save/);
  const calm = urgentGuidance(190, 125, "my blood pressure is 190 over 125");
  assert.match(calm, /^I saved the reading 190 over 125\. That is a very high reading\./);
  assert.match(calm, /emergency help now/);
  assert.match(calm, /sit quietly for five minutes and measure again/);
  assert.match(calm, /cannot diagnose/);
  const withSymptoms = urgentGuidance(190, 125, "my blood pressure is 190 over 125 and I have chest pain");
  assert.match(withSymptoms, /Because you also mention symptoms, get emergency help now/);
  assert.match(lowNote(), /dizzy, faint or unwell/);
});

const bpBody = (systolic, diastolic, extra = {}) => ({ conditionFocus: "hypertension", systolic, diastolic, readingContext: "voice-reported", confirmed: true, ...extra });

test("the provider refuses an impossible reading and saves nothing, and dates a reading that has no date", () => {
  const db = { profile: {} }; const mine = scopeHealthDb(db, "amina");
  for (const [sys, dia] of [[900, 20], [120, 150], [null, 80], [120, null]]) {
    const result = providers.chronicDiseaseBridge.reading(bpBody(sys, dia), mine, process.env);
    assert.equal(result.body.status, "blocked", `${sys}/${dia}`);
    assert.equal(result.body.data.invalidReading, true);
  }
  assert.deepEqual(providers.chronicDiseaseBridge.readings(mine).body.data.readings, [], "nothing may be saved for an impossible reading");
  const ok = providers.chronicDiseaseBridge.reading(bpBody(130, 85), mine, process.env);
  assert.equal(ok.body.status, "completed");
  const saved = providers.chronicDiseaseBridge.readings(mine).body.data.readings[0];
  assert.match(saved.dateTimeText, /^\d{4}-\d{2}-\d{2}$/);
  assert.notEqual(saved.dateTimeText, "not provided");
  const dated = providers.chronicDiseaseBridge.reading(bpBody(125, 82, { dateTimeText: "4 October 2026" }), mine, process.env);
  assert.equal(dated.body.status, "completed");
  assert.equal(providers.chronicDiseaseBridge.readings(mine).body.data.readings[0].dateTimeText, "4 October 2026");
  // a glucose-only reading is unaffected
  assert.equal(providers.chronicDiseaseBridge.reading({ conditionFocus: "diabetes", glucose: 130, confirmed: true }, mine, process.env).body.status, "completed");
});

// ---- the real spoken route, end to end ----
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const tempDbPath = path.join(root, "tmp-blood-pressure-test-db.json");
const tempUploadDir = fs.mkdtempSync(path.join(os.tmpdir(), "nexus-bp-uploads-"));
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
let server; let cookie;
test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), tempDbPath);
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_FILE_STORAGE_DIR: tempUploadDir }, stdio: "ignore", windowsHide: true });
  for (let i = 0; i < 80; i += 1) { try { if ((await fetch(`${base}/api/healthz`)).ok) break; } catch { await wait(150); } }
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" }) });
  cookie = res.headers.get("set-cookie").split(";")[0];
});
test.after(() => { server.kill(); fs.rmSync(tempDbPath, { force: true }); fs.rmSync(tempUploadDir, { recursive: true, force: true }); });
const call = async (method, pathname, body) => {
  const res = await fetch(`${base}${pathname}`, { method, headers: { "content-type": "application/json", cookie }, body: body ? JSON.stringify(body) : undefined });
  const text = await res.text(); let json; try { json = JSON.parse(text); } catch { json = { raw: text.slice(0, 200) }; }
  return { status: res.status, json };
};
const speak = command => call("POST", "/api/voice/realtime/tool", { name: "nexus_health_preparation", correlationId: `bp-${Math.random().toString(36).slice(2, 8)}`, arguments: { command, confirmed: true, language: "en" }, language: "en" });
const history = async () => (await call("GET", "/api/nexus/tools/chronic-disease/readings")).json.data.readings;

test("spoken: an impossible reading is refused with a clear reply and is not saved", async () => {
  const reply = await speak("My blood pressure is 900 over 20, please save it");
  assert.equal(reply.status, 200);
  assert.match(reply.json.response, /900 over 20.*did not save/i, reply.json.response);
  assert.equal((await history()).some(r => r.systolic === 900), false);
  const flipped = await speak("My blood pressure is 80 over 150, please save it");
  assert.match(flipped.json.response, /did not save/i);
  assert.equal((await history()).some(r => r.systolic === 80 && r.diastolic === 150), false);
});

test("spoken: a normal reading is saved, dated, and the history shows the date", async () => {
  const reply = await speak("My blood pressure is 120 over 80, please save it");
  assert.match(reply.json.response, /I saved the blood-pressure reading 120 over 80/);
  assert.doesNotMatch(reply.json.response, /very high/);
  const saved = (await history()).find(r => r.systolic === 120 && r.diastolic === 80);
  assert.ok(saved, "the reading must be saved");
  assert.notEqual(saved.dateTimeText, "not provided");
  assert.match(saved.dateTimeText, /^\d{1,2} [A-Z][a-z]+ \d{4}$/, `a readable date: ${saved.dateTimeText}`);
});

test("spoken: a very high reading is saved AND the person is told plainly to get help", async () => {
  const reply = await speak("My blood pressure is 190 over 125, please save it");
  assert.match(reply.json.response, /That is a very high reading/);
  assert.match(reply.json.response, /emergency help now/);
  assert.match(reply.json.response, /measure again/);
  assert.equal((await history()).some(r => r.systolic === 190 && r.diastolic === 125), true, "the real reading is kept");
  // With a symptom the reply leads with "get emergency help now". (Chest pain is caught even earlier by the emergency-symptom check, which also gives urgent guidance.)
  const withHeadache = await speak("My blood pressure is 185 over 110 and I have a severe headache, please save it");
  assert.match(withHeadache.json.response, /Because you also mention symptoms, get emergency help now/);
  const withChestPain = await speak("My blood pressure is 185 over 110 and I have chest pain");
  assert.match(withChestPain.json.response, /urgent medical help|emergency/i);
});

test("spoken: a low reading is saved with a gentle note", async () => {
  const reply = await speak("My blood pressure is 85 over 55, please save it");
  assert.match(reply.json.response, /I saved the blood-pressure reading 85 over 55/);
  assert.match(reply.json.response, /dizzy, faint or unwell/);
});

test("the saved-reading route refuses an impossible reading too", async () => {
  const before = (await history()).length;
  const res = await call("POST", "/api/nexus/tools/chronic-disease/reading", bpBody(900, 20));
  assert.equal(res.json.status, "blocked");
  assert.equal((await history()).length, before);
});
