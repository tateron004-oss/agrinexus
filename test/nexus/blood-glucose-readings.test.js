"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawn } = require("node:child_process");
const providers = require("../../server/providers/index.js");
const { scopeHealthDb } = require("../../server/providers/healthRecordScope.js");
const { resolveGlucose, glucoseLevel, invalidGlucoseReply, ambiguousUnitReply, veryLowReply, lowReply, veryHighReply } = require("../../server/providers/bloodGlucose.js");

// Blood pressure had no checks for impossible numbers or urgent guidance until #862; blood sugar had the same gaps and a worse one: only 2-3 digit numbers were read, so a
// reading in mmol/L ("7.2", the unit most people in East Africa use) was never understood at all.

test("resolveGlucose: unit from what was said, else from the size of the number; the unclear band asks", () => {
  const ok = (value, unit, expectedUnit, inferred) => { const r = resolveGlucose(value, unit); assert.equal(r.unit, expectedUnit, `${value} ${unit}`); assert.equal(r.inferred, inferred, `${value} ${unit}`); };
  ok("130", "", "mg/dL", true); ok("100", "", "mg/dL", true); ok("40", "", "mg/dL", true);
  ok("7.2", "", "mmol/L", true); ok("7", "", "mmol/L", true); ok("30", "", "mmol/L", true); ok("5.5", "", "mmol/L", true);
  ok("7", "mmol", "mmol/L", false); ok("7", "mmol/L", "mmol/L", false); ok("7", "mmol per litre", "mmol/L", false); ok("130", "mg/dl", "mg/dL", false); ok("130", "mg per dl", "mg/dL", false); ok("100.5", "mg/dl", "mg/dL", false);
  for (const value of ["31", "35", "39"]) assert.equal(resolveGlucose(value, "").ambiguous, true, `${value} could be either unit`);
  assert.equal(resolveGlucose("50", "mmol").invalid, true, "50 mmol/L is not possible");
  assert.equal(resolveGlucose("35", "mg/dl").unit, "mg/dL", "35 mg/dL is possible (and dangerously low), and is not guessed away");
});

test("resolveGlucose: impossible numbers are refused", () => {
  for (const [value, unit] of [["5000", ""], ["0", ""], ["-5", ""], ["900", "mg/dl"], ["2", "mg/dl"], ["130", "mmol"], ["45.5", ""], ["abc", ""], ["", ""], ["0.5", "mmol"]]) {
    assert.equal(resolveGlucose(value, unit).invalid, true, `${value} ${unit}`);
  }
});

test("glucoseLevel: very low, low, normal and very high, the same in either unit", () => {
  const lvl = (value, unit) => glucoseLevel(resolveGlucose(value, unit));
  for (const [v, u, level] of [["130", "mg/dl", "normal"], ["100", "", "normal"], ["70", "mg/dl", "normal"], ["69", "mg/dl", "low"], ["54", "mg/dl", "low"], ["53", "mg/dl", "very-low"], ["250", "mg/dl", "normal"], ["300", "mg/dl", "very-high"], ["450", "", "very-high"],
    ["7.2", "mmol", "normal"], ["3.9", "mmol", "normal"], ["3.5", "mmol", "low"], ["2.9", "mmol", "very-low"], ["16.7", "mmol", "very-high"], ["25", "mmol", "very-high"]]) assert.equal(lvl(v, u), level, `${v} ${u}`);
});

test("the replies say what to do, in plain words, and never give treatment", () => {
  assert.match(invalidGlucoseReply(5000), /5000.*not sound like a real blood-sugar reading.*did not save it.*unit/);
  assert.match(ambiguousUnitReply("35"), /35.*not sure.*mmol per litre or mg per dL.*did not save it/);
  assert.match(veryLowReply(resolveGlucose("2.5", "mmol")), /very low blood sugar.*emergency help now.*cannot give treatment advice/);
  assert.match(lowReply(resolveGlucose("65", "")), /lower than usual.*contact your clinic today/);
  assert.match(veryHighReply(resolveGlucose("350", "")), /very high blood sugar.*emergency help now.*contact your clinic today/);
  assert.match(veryHighReply(resolveGlucose("350", ""), "my glucose is 350 and I am vomiting"), /Because you also mention symptoms, get emergency help now/);
  for (const text of [veryLowReply(resolveGlucose("2.5", "mmol")), lowReply(resolveGlucose("65", "")), veryHighReply(resolveGlucose("350", ""))]) assert.doesNotMatch(text, /\b(?:eat|drink|take|inject|insulin|units?|tablet|sugar water|juice|glucose tablets?)\b/i, "no treatment instructions");
});

const glu = (glucose, glucoseUnit, extra = {}) => ({ conditionFocus: "diabetes", glucose, glucoseUnit, readingContext: "voice-reported", confirmed: true, ...extra });

test("the provider refuses an impossible or unclear reading and saves nothing; otherwise it records the unit", () => {
  const db = { profile: {} }; const mine = scopeHealthDb(db, "amina");
  for (const [value, unit] of [[5000, undefined], [35, undefined], [130, "mmol"], [2, "mg/dl"]]) {
    const result = providers.chronicDiseaseBridge.reading(glu(value, unit), mine, process.env);
    assert.equal(result.body.status, "blocked", `${value} ${unit}`);
  }
  assert.equal(providers.chronicDiseaseBridge.reading(glu(35), mine, process.env).body.data.ambiguousUnit, true);
  assert.equal(providers.chronicDiseaseBridge.reading(glu(5000), mine, process.env).body.data.invalidReading, true);
  assert.deepEqual(providers.chronicDiseaseBridge.readings(mine).body.data.readings, []);
  assert.equal(providers.chronicDiseaseBridge.reading(glu(130), mine, process.env).body.status, "completed");
  assert.equal(providers.chronicDiseaseBridge.reading(glu(7.2, "mmol"), mine, process.env).body.status, "completed");
  const saved = providers.chronicDiseaseBridge.readings(mine).body.data.readings;
  assert.deepEqual(saved.map(r => [r.glucose, r.glucoseUnit]).sort(), [[130, "mg/dL"], [7.2, "mmol/L"]].sort());
  // a blood-pressure-only reading is unaffected
  assert.equal(providers.chronicDiseaseBridge.reading({ conditionFocus: "hypertension", systolic: 120, diastolic: 80, confirmed: true }, mine, process.env).body.status, "completed");
});

// ---- the real spoken route, end to end ----
const root = path.resolve(__dirname, "..", "..");
const port = 4751;
const base = `http://localhost:${port}`;
const tempDbPath = path.join(root, "tmp-blood-glucose-test-db.json");
const tempUploadDir = fs.mkdtempSync(path.join(os.tmpdir(), "nexus-glucose-uploads-"));
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
const speak = command => call("POST", "/api/voice/realtime/tool", { name: "nexus_health_preparation", correlationId: `glu-${Math.random().toString(36).slice(2, 8)}`, arguments: { command, confirmed: true, language: "en" }, language: "en" });
const history = async () => (await call("GET", "/api/nexus/tools/chronic-disease/readings")).json.data.readings;

test("spoken: mg/dL and mmol/L readings are saved with the right unit and a date", async () => {
  const a = await speak("My blood sugar is 130, please save it");
  assert.match(a.json.response, /I saved the blood-glucose reading 130/);
  const b = await speak("My blood sugar is 7.2 mmol, please save it");
  assert.match(b.json.response, /I saved the blood-glucose reading 7\.2/);
  const c = await speak("My glucose is 6.1, please save it");
  assert.match(c.json.response, /I saved the blood-glucose reading 6\.1/);
  const rows = await history();
  const units = Object.fromEntries(rows.filter(r => r.glucose).map(r => [r.glucose, r.glucoseUnit]));
  assert.equal(units[130], "mg/dL"); assert.equal(units[7.2], "mmol/L"); assert.equal(units[6.1], "mmol/L");
  assert.ok(rows.filter(r => r.glucose).every(r => r.dateTimeText && r.dateTimeText !== "not provided"));
});

test("spoken: an impossible reading and an unclear unit are not saved, and Kyro says what to do", async () => {
  const before = (await history()).length;
  const impossible = await speak("My blood sugar is 5000, please save it");
  assert.match(impossible.json.response, /5000.*did not save it/i, impossible.json.response);
  const unclear = await speak("My blood sugar is 35, please save it");
  assert.match(unclear.json.response, /not sure if that is in mmol per litre or mg per dL.*did not save it/i, unclear.json.response);
  assert.equal((await history()).length, before, "neither may be saved");
  const fixed = await speak("My blood sugar is 35 mg per dL, please save it");
  assert.match(fixed.json.response, /very low blood sugar/, "with the unit said, it is understood and treated as the emergency it is");
});

test("spoken: very high, very low and low readings are saved AND the person is told plainly what to do", async () => {
  const high = await speak("My glucose is 350, please save it");
  assert.match(high.json.response, /very high blood sugar/); assert.match(high.json.response, /emergency help now/); assert.match(high.json.response, /contact your clinic today/);
  const highMmol = await speak("My blood sugar is 20 mmol, please save it");
  assert.match(highMmol.json.response, /very high blood sugar/);
  const veryLow = await speak("My blood sugar is 2.5 mmol, please save it");
  assert.match(veryLow.json.response, /very low blood sugar/); assert.match(veryLow.json.response, /emergency help now/);
  const low = await speak("My blood sugar is 65, please save it");
  assert.match(low.json.response, /lower than usual/);
  const rows = await history();
  for (const value of [350, 20, 2.5, 65]) assert.ok(rows.some(r => r.glucose === value), `the real reading ${value} is kept`);
});

test("spoken: the history says which unit each reading is in", async () => {
  const reply = await speak("Show me my saved chronic care readings");
  assert.match(reply.json.response, /glucose [\d.]+ mg\/dL/, reply.json.response);
  assert.match(reply.json.response, /glucose [\d.]+ mmol\/L/, reply.json.response);
  assert.doesNotMatch(reply.json.response, /glucose [\d.]+ on /, "every glucose reading names its unit");
});

test("the saved-reading route refuses an impossible or unclear glucose too", async () => {
  const before = (await history()).length;
  assert.equal((await call("POST", "/api/nexus/tools/chronic-disease/reading", glu(5000))).json.status, "blocked");
  assert.equal((await call("POST", "/api/nexus/tools/chronic-disease/reading", glu(35))).json.status, "blocked");
  assert.equal((await history()).length, before);
});
