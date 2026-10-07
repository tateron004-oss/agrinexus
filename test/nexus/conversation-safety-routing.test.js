"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

// A user-journey sweep found: "stop"/"actually" anywhere in a sentence answered "Okay, I stopped." (also for "my hand will not stop bleeding"); "I am pregnant" saved "Pregnant" as the person's name;
// health sentences were staged as a learning course or a weather question, and a later "yes" completed it; and the emergency reply named only the U.S. number.

const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://127.0.0.1:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "conversation-safety-"));
const dbPath = path.join(dir, "db.json");
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let server;
let cookie = "";
let hop = 0;
async function waitFor(url) { for (let i = 0; i < 100; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } } throw new Error(`${url} did not become reachable`); }
async function post(url, body) {
  hop += 1;
  const res = await fetch(`${base}${url}`, { method: "POST", headers: { "content-type": "application/json", "x-forwarded-for": `10.30.${(hop % 250) + 1}.1`, cookie }, body: JSON.stringify(body) });
  const text = await res.text();
  try { return JSON.parse(text); } catch { return { raw: text }; }
}
// The typed/conversational route and the voice tool gateway are two doors to the same answers.
async function say(command) { const body = await post("/api/agent/command", { command, conversational: true }); return String(body.commandResult?.response || body.response || ""); }
async function sayByVoice(command) { const body = await post("/api/voice/realtime/tool", { name: "nexus_general_conversation", arguments: { command, language: "en" }, language: "en" }); return String(body.output?.response || body.response || body.result?.response || ""); }
async function both(command) { const [typed, voice] = [await say(command), await sayByVoice(command)]; return { typed, voice }; }
function readDb() { return JSON.parse(fs.readFileSync(dbPath, "utf8")); }
function writeDb(db) { fs.writeFileSync(dbPath, JSON.stringify(db)); }

test.before(async () => {
  const seeded = JSON.parse(fs.readFileSync(path.join(root, "db.json"), "utf8"));
  seeded.profile = seeded.profile || {};
  // A name saved before the name check existed.
  seeded.profile.userDisplayNames = { u_standard: "Pregnant" };
  writeDb(seeded);
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: dbPath, AGRINEXUS_SPACES_PATH: path.join(dir, "dir.json"), OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", AGRINEXUS_TRUST_PROXY: "true", AGRINEXUS_AI_AGENT_RATE_LIMIT_PER_WINDOW: "100000", AGRINEXUS_RATE_LIMIT_PER_WINDOW: "100000" },
    stdio: "ignore", windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  const login = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" }) });
  assert.equal(login.status, 200);
  cookie = (login.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ");
});
test.after(() => { server.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

test("a name saved before the check ('Pregnant') is not spoken back", async () => {
  const { typed, voice } = await both("hello");
  for (const reply of [typed, voice]) assert.doesNotMatch(reply, /pregnant/i, reply);
});

test("a real interruption still stops, and a sentence that merely contains 'stop' is answered as what it is", async () => {
  const stopped = await both("wait");
  assert.match(stopped.typed, /I stopped/);
  assert.match(stopped.voice, /I stopped/);
  const bleeding = await both("my hand will not stop bleeding");
  for (const reply of [bleeding.typed, bleeding.voice]) {
    assert.doesNotMatch(reply, /I stopped/);
    assert.match(reply, /emergency/i);
  }
  const arvs = await both("should I stop taking my ARVs because I feel fine");
  for (const reply of [arvs.typed, arvs.voice]) {
    assert.doesNotMatch(reply, /I stopped|degrees|walk/i);
    assert.match(reply, /clinic, doctor or pharmacist/);
    assert.match(reply, /I have not changed anything/);
  }
});

test("'stop reminding me about my pills' cancels the reminder, or asks which one when several match", async () => {
  const set = await say("remind me to take my tablets at 8pm");
  assert.match(set, /I will remind you/);
  const stop = await say("stop reminding me about my pills");
  assert.doesNotMatch(stop, /I stopped/);
  assert.match(stop, /Canceled REM-\d+: take my tablets/);
  assert.match(await say("what are my reminders"), /do not have active reminders/i);

  await say("remind me to take my tablets at 8pm");
  await say("remind me to call the buyer at 10am tomorrow");
  const nothingNamed = await say("stop reminding me");
  assert.match(nothingNamed, /Nothing was canceled/);
  const unmatched = await say("stop reminding me about the goats");
  assert.match(unmatched, /could not find a reminder about goats/);
  assert.match(unmatched, /Nothing was canceled/);
  const listed = await say("what are my reminders");
  assert.match(listed, /take my tablets/);
  assert.match(listed, /call the buyer/);
  const only = await say("stop reminding me about my tablets");
  assert.match(only, /Canceled REM-\d+: take my tablets/);
  const buyer = /REM-\d+/.exec(await say("what are my reminders"))[0];
  assert.match(await say(`cancel ${buyer}`), new RegExp(`Canceled ${buyer}: call the buyer`));
  assert.match(await say("cancel REM-999"), /do not see an active reminder/);
});

test("'actually make it 9pm' moves the reminder that was just set", async () => {
  const set = await say("remind me to take my tablets at 8pm");
  assert.match(set, /8pm/);
  const moved = await say("actually make it 9pm");
  assert.doesNotMatch(moved, /I stopped/);
  assert.match(moved, /moved your reminder.*take my tablets.*9pm/i);
  const listed = await say("what are my reminders");
  assert.match(listed, /9pm/);
  assert.doesNotMatch(listed, /8pm/);
  // With nothing set a moment ago, "make it 9pm" changes nothing and says so rather than claiming it did.
  await say("cancel my reminder");
  assert.doesNotMatch(await say("actually make it 9pm"), /moved your reminder/i);
});

test("saying what you are is not saying your name: nothing is saved and nothing is greeted as the condition", async () => {
  for (const said of ["I am pregnant", "I am diabetic", "I am HIV positive and on treatment", "I am breastfeeding", "I am hypertensive", "I am very stressed", "I am a farmer", "I am tired", "I am running out of my blood pressure pills what should I do"]) {
    const { typed, voice } = await both(said);
    for (const reply of [typed, voice]) {
      assert.doesNotMatch(reply, /^Hello /i, `${said} -> ${reply}`);
      assert.doesNotMatch(reply, /Hello (Pregnant|Diabetic|Hiv|Breastfeeding|Hypertensive|Very|Running|Tired)/i, reply);
    }
  }
  const noted = await say("I am pregnant");
  assert.match(noted, /Thank you for telling me/);
  assert.match(noted, /not saved this as your name/);
  const names = readDb().profile.userDisplayNames || {};
  assert.ok(!/pregnan|diabet|hiv|breastfeed|hypertens|stress|farmer|tired|running/i.test(JSON.stringify(names)), JSON.stringify(names));
  // A real introduction still works, in English and Kiswahili.
  assert.match(await say("my name is Grace"), /Hello Grace/);
  assert.match(await say("hello"), /Hello Grace/);
  assert.match(await say("jina langu ni Juma"), /Hello Juma/);
});

test("a health or emergency sentence is never staged as a course or answered as a weather question", async () => {
  const collapsed = await both("an elderly man collapsed in the heat");
  for (const reply of [collapsed.typed, collapsed.voice]) {
    assert.doesNotMatch(reply, /weather|which city|learning hub/i, reply);
    assert.match(reply, /emergency/i);
  }
  for (const said of ["my child has had a cough for two weeks", "what family planning methods are there", "a dog bit my child", "my baby has a fever", "I want to start family planning, where do I go"]) {
    const { typed, voice } = await both(said);
    for (const reply of [typed, voice]) assert.doesNotMatch(reply, /learning hub|women and children|Opened AN-FLEARN|say "yes" to run it/i, `${said} -> ${reply}`);
  }
});

test("a 'yes' after a health sentence completes nothing", async () => {
  for (const said of ["my child has had a cough for two weeks", "a child ate pesticide and is vomiting", "what family planning methods are there"]) {
    await both(said);
    const { typed, voice } = await both("yes");
    for (const reply of [typed, voice]) assert.doesNotMatch(reply, /Opened AN-FLEARN|Learning lesson|lesson completed|Representative connected/i, `${said} then yes -> ${reply}`);
  }
});

test("a staged action is dropped after a few minutes, and a safety answer in between ends it", async () => {
  const staged = await sayByVoice("I want to talk to a doctor");
  assert.match(staged, /yes/i);
  let db = readDb();
  assert.ok(db.profile.agentPendingAction, "the action should be staged");
  // The same "yes" a long time later is about something else.
  db.profile.agentPendingAction.createdAt = new Date(Date.now() - 20 * 60 * 1000).toISOString();
  writeDb(db);
  const late = await sayByVoice("yes");
  assert.doesNotMatch(late, /Representative connected/i);
  // A safety answer ends whatever was waiting.
  assert.match(await sayByVoice("I want to talk to a doctor"), /yes/i);
  await sayByVoice("a child ate pesticide and is vomiting");
  assert.doesNotMatch(await sayByVoice("yes"), /Representative connected/i);
  // Within a few minutes, with nothing in between, the same "yes" still confirms what was just offered.
  assert.match(await sayByVoice("I want to talk to a doctor"), /yes/i);
  assert.match(await sayByVoice("yes"), /Representative connected/i);
});

test("the emergency reply is for the person's own country and never the U.S. number", async () => {
  const urgent = await both("my baby is not breathing and I do not know what to do");
  for (const reply of [urgent.typed, urgent.voice]) assert.doesNotMatch(reply, /911|U\.S\./, reply);
  const nigeria = await both("an elderly man collapsed");
  for (const reply of [nigeria.typed, nigeria.voice]) { assert.doesNotMatch(reply, /911|U\.S\./, reply); assert.match(reply, /112 in Nigeria/); }
  for (const said of ["what is the emergency number in Kenya", "what is the emergency number"]) {
    const { typed, voice } = await both(said);
    for (const reply of [typed, voice]) assert.doesNotMatch(reply, /911|U\.S\./, reply);
  }
  const kenya = await both("what is the emergency number in Kenya");
  for (const reply of [kenya.typed, kenya.voice]) assert.match(reply, /Kenya.*999 or 112/);
  const own = await both("what is the emergency number");
  for (const reply of [own.typed, own.voice]) assert.match(reply, /Nigeria.*112/);
  // A country the platform has no number for is told so, with no number invented.
  const other = await both("what is the emergency number in Chile");
  for (const reply of [other.typed, other.voice]) assert.doesNotMatch(reply, /\b\d{3}\b/, reply);
});
