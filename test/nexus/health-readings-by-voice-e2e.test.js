"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

// Health readings by voice and by chat, through the real server: the voice tools (nexus_general_conversation and nexus_health_preparation) and the command route (typed and conversational).
// Kyro reads the reading back and asks; only a yes saves it. What was saved is checked in the app's own readings, never from the reply text.

const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "health-by-voice-"));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let server; let cookie = ""; let adminCookie = ""; let otherCookie = "";
const MARKER_SYSTOLIC = 187; // a reading only the first person saves, to look for in what other people can fetch

async function waitFor(url) { for (let i = 0; i < 100; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } } throw new Error(`${url} did not become reachable`); }
async function login(email, password) {
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email, password }) });
  assert.equal(res.status, 200, `${email} must be able to sign in`);
  return (res.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ");
}
async function call(method, route, body, who = cookie) {
  const res = await fetch(`${base}${route}`, { method, headers: { "content-type": "application/json", cookie: who }, body: body ? JSON.stringify(body) : undefined });
  const text = await res.text(); let json; try { json = JSON.parse(text); } catch { json = {}; }
  return { status: res.status, json, text };
}
let counter = 0;
const general = async (command, language = "en", who = cookie) => (await call("POST", "/api/voice/realtime/tool", { name: "nexus_general_conversation", correlationId: `g${++counter}`, arguments: { command, language }, language }, who)).json;
const health = async (command, extra = {}, who = cookie) => (await call("POST", "/api/voice/realtime/tool", { name: "nexus_health_preparation", correlationId: `h${++counter}`, arguments: { command, language: "en", ...extra }, language: "en" }, who)).json;
const typed = async (command, conversational = false, who = cookie) => { const j = (await call("POST", "/api/agent/command", { command, conversational }, who)).json; return j.commandResult || j; };
const readings = async (who = cookie) => (await call("GET", "/api/nexus/tools/chronic-disease/readings", null, who)).json.data.readings;
const rpmReadings = async (who = cookie) => (await call("GET", "/api/nexus/tools/rpm/device-readings", null, who)).json.data?.readings || [];

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), path.join(dir, "db.json"));
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: path.join(dir, "db.json"), AGRINEXUS_SPACES_PATH: path.join(dir, "spaces.json"), OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", AGRINEXUS_TRUST_PROXY: "true", AGRINEXUS_AI_AGENT_RATE_LIMIT_PER_WINDOW: "100000", AGRINEXUS_RATE_LIMIT_PER_WINDOW: "100000", NEXUS_FILE_STORAGE_DIR: path.join(dir, "uploads") }, stdio: "ignore", windowsHide: true });
  await waitFor(`${base}/api/healthz`);
  cookie = await login("user@agrinexus.org", "User2026!");
  adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  const made = await call("POST", "/api/admin/test-user", { email: "second.person@example.org", name: "Second Person", password: "SecondTest2026!" }, adminCookie);
  assert.equal(made.status, 200);
  otherCookie = await login("second.person@example.org", "SecondTest2026!");
});
test.after(() => { server.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

test("voice, general tool: a spoken pressure is read back, saved only after yes, and the stored numbers are the spoken ones", async () => {
  for (const [phrase, systolic, diastolic] of [["my blood pressure is one forty over ninety", 140, 90], ["my blood pressure is 150/95", 150, 95], ["presha yangu ni 160 juu ya 100", 160, 100]]) {
    const before = (await readings()).length;
    const asked = await general(phrase, /presha/.test(phrase) ? "sw" : "en");
    assert.equal(asked.requiresConfirmation, true, phrase);
    assert.match(asked.response, /Shall I save it\?|Nikihifadhi\?/);
    assert.doesNotMatch(asked.response, /unavailable|opened Health|couldn't do that/);
    assert.equal((await readings()).length, before, "the question saves nothing");
    const saved = await general(/presha/.test(phrase) ? "ndiyo" : "yes", /presha/.test(phrase) ? "sw" : "en");
    assert.equal(saved.executionVerified, true);
    const now = await readings();
    assert.equal(now.length, before + 1);
    assert.deepEqual([now[0].systolic, now[0].diastolic], [systolic, diastolic], phrase);
    assert.match(now[0].dateTimeText, /^\d{1,2} [A-Z][a-z]+ \d{4}$/);
  }
  const ignored = await general("my blood pressure is 118 over 76");
  assert.equal(ignored.requiresConfirmation, true);
  await general("what is the weather in Nairobi");
  const stray = await general("yes");
  assert.doesNotMatch(stray.response, /I saved/);
  assert.equal((await readings()).some(r => r.systolic === 118), false, "an unanswered question saves nothing");
});

test("voice, health tool: the first statement reads back instead of 'unavailable'; yes saves; the model's confirmation flag still saves straight away", async () => {
  const asked = await health("My blood pressure is 128 over 82");
  assert.equal(asked.requiresConfirmation, true);
  assert.match(asked.response, /I heard your blood pressure as 128 over 82, for .*\. Shall I save it\?/);
  assert.equal(asked.executionVerified, false);
  assert.equal((await readings()).some(r => r.systolic === 128), false);
  const saved = await health("yes");
  assert.match(saved.response, /^I saved the blood-pressure reading 128 over 82/);
  assert.equal(saved.executionVerified, true);
  assert.equal((await readings()).filter(r => r.systolic === 128).length, 1);
  const direct = await health("My blood pressure is 129 over 83", { confirmation: true });
  assert.match(direct.response, /^I saved the blood-pressure reading 129 over 83/);
  assert.equal((await readings()).filter(r => r.systolic === 129).length, 1);
  assert.equal((await health("yes")).executionVerified, false, "nothing was waiting, so nothing more is saved");
  assert.equal((await readings()).filter(r => r.systolic === 129).length, 1);
});

test("typed and conversational command routes: sugar, weight, pulse and temperature said plainly", async () => {
  const route = [typed, (command) => typed(command, true)];
  for (const [i, ask] of route.entries()) {
    const sugar = await ask("my sugar is 9.4");
    assert.match(sugar.response, /9\.4.*Shall I save it\?/, `route ${i}`);
    await ask("yes");
    assert.ok((await readings()).some(r => r.glucose === 9.4 && r.glucoseUnit === "mmol/L"), `route ${i}`);
  }
  await typed("log my weight 68 kg"); await typed("yes");
  await typed("pulse 88"); await typed("yes");
  await typed("temperature 38.5"); await typed("yes");
  const stored = await rpmReadings();
  assert.ok(stored.some(r => r.metric === "weight" && r.value === "68" && r.unit === "kg"));
  assert.ok(stored.some(r => r.metric === "pulse" && r.value === "88"));
  assert.ok(stored.some(r => r.metric === "temperature" && r.value === "38.5"));
});

test("a stored sugar is exactly what was said: 8,5 is 8.5 and 7 point 2 is 7.2", async () => {
  await general("my blood sugar is 8,5"); await general("yes");
  await general("sukari yangu ni saba nukta mbili", "sw"); await general("ndiyo", "sw");
  await typed("my blood sugar is 6 point 3"); await typed("yes");
  const sugars = (await readings()).filter(r => r.glucose !== null && r.glucose !== undefined).map(r => r.glucose);
  for (const value of [8.5, 7.2, 6.3]) assert.ok(sugars.includes(value), `${value} must be stored exactly, found ${sugars}`);
  assert.ok(!sugars.includes(8) && !sugars.includes(7) && !sugars.includes(6), "no truncated figure is ever stored");
  const unit = await general("my blood sugar is 35");
  assert.match(unit.response, /not sure if that is in mmol per litre or mg per dL, so I did not save it/);
  const cut = await general("my sugar is 8 5");
  assert.match(cut.response, /did not save anything/);
  assert.equal((await readings()).some(r => r.glucose === 35 || r.glucose === 8 && false), false);
});

test("impossible numbers are refused and re-asked, nothing is saved", async () => {
  const before = (await readings()).length;
  const refused = await general("my blood pressure is 1500 over 95");
  assert.match(refused.response, /1500 over 95.*did not save/);
  await general("yes");
  assert.equal((await readings()).length, before);
});

test("show: blood pressure and sugar are listed apart", async () => {
  const bp = await general("show my BP readings");
  assert.match(bp.response, /saved blood pressure reading/);
  assert.doesNotMatch(bp.response, /mmol|mg\/dL/);
  const sugar = await general("show my sugar readings");
  assert.match(sugar.response, /saved blood sugar reading/);
  assert.doesNotMatch(sugar.response, / over /);
  assert.match((await general("what was my last blood pressure reading")).response, /^Your last blood pressure reading was \d+ over \d+, on /);
  assert.match((await general("nionyeshe vipimo vyangu vya sukari", "sw")).response, /^Una vipimo \d+ vya sukari ya damu/);
});

test("correct and delete the last reading, each asked first and checked in the store", async () => {
  await general(`my blood pressure is ${MARKER_SYSTOLIC} over 100`); await general("yes");
  assert.equal((await readings())[0].systolic, MARKER_SYSTOLIC);
  await general("it was 133/78");
  assert.equal((await readings())[0].systolic, MARKER_SYSTOLIC, "nothing changes before the yes");
  const changed = await general("yes");
  assert.match(changed.response, /^Done\. I changed your blood pressure reading from 187 over 100 to 133 over 78\./);
  assert.deepEqual([(await readings())[0].systolic, (await readings())[0].diastolic], [133, 78]);
  const before = (await readings()).length;
  const asked = await general("delete my last reading");
  assert.match(asked.response, /Shall I delete it\?/);
  assert.equal((await readings()).length, before);
  assert.match((await general("no")).response, /I have not deleted anything/);
  assert.equal((await readings()).length, before);
  await general("delete my last blood pressure reading");
  assert.match((await general("yes")).response, /^Done\. I deleted your blood pressure reading 133 over 78/);
  assert.equal((await readings()).length, before - 1);
  await general(`my blood pressure is ${MARKER_SYSTOLIC} over 100`); await general("yes");
});

test("who can see it, sharing with a nurse, and the privacy claim is true: another signed-in person does not receive these readings", async () => {
  const sees = await general("who can see my health information");
  assert.match(sees.response, /other people who sign in do not see them/);
  assert.doesNotMatch(sees.response, /telehealth|video/i);
  const other = await call("GET", "/api/state", null, otherCookie);
  assert.equal(other.status, 200);
  assert.ok(!other.text.includes(`"systolic":${MARKER_SYSTOLIC}`), "another Standard User must not receive this person's readings");
  assert.deepEqual(await readings(otherCookie), [], "and their own list is empty");
  const share = await general("share with my nurse");
  assert.match(share.response, /can't send your readings to a nurse or a doctor from here, and I have not contacted anyone/);
  const yes = await general("yes");
  assert.doesNotMatch(yes.response, /connected|representative/i);
  assert.doesNotMatch((await typed("send to my doctor")).response, /connected|representative/i);
});

test("delete all health records: counted, explicit, and only this person's readings go", async () => {
  await call("POST", "/api/nexus/tools/chronic-disease/reading", { conditionFocus: "hypertension", systolic: 111, diastolic: 71, confirmed: true }, adminCookie);
  const mine = (await readings()).length + (await rpmReadings()).length;
  assert.ok(mine >= 5);
  const asked = await general("delete all my health records");
  assert.match(asked.response, new RegExp(`permanent and cannot be undone\\. You have ${mine} saved readings`));
  assert.equal((await readings()).length + (await rpmReadings()).length, mine, "the question deletes nothing");
  assert.match((await general("yes")).response, /please say the full words/);
  assert.equal((await readings()).length + (await rpmReadings()).length, mine);
  const done = await general(`yes, delete all ${mine}`);
  assert.match(done.response, new RegExp(`Done\\. I deleted ${mine} health readings from your account`));
  assert.equal((await readings()).length + (await rpmReadings()).length, 0);
  assert.deepEqual((await readings(adminCookie)).map(r => r.systolic), [111], "another person's reading is untouched");
});

test("medicines on the older path: no weather text, no new advice, nothing claimed saved", async () => {
  for (const route of [general, typed, health]) {
    const missed = await route("I missed my morning dose, should I take double");
    assert.match(missed.response, /don't double up the next dose unless they say so/, route.name);
    assert.doesNotMatch(missed.response, /degrees|grandma|weather/i);
  }
  const out = await general("I am running out of my pills");
  assert.match(out.response, /contact your clinic or pharmacy/);
  assert.doesNotMatch(out.response, /Hello Running/i);
  assert.match((await general("I stopped my BP pills because I feel fine")).response, /I can't advise on stopping a medicine/);
  assert.match((await general("dawa zangu zinaisha", "sw")).response, /wasiliana na kliniki au famasia/);
});

test("ordinary sentences with the same words in them are untouched", async () => {
  const farm = await general("add sugar 2 kg to my shopping list");
  assert.doesNotMatch(farm.response, /Shall I save it|blood sugar/);
  assert.doesNotMatch((await general("the plot is 60 by 40")).response, /blood pressure/);
});
