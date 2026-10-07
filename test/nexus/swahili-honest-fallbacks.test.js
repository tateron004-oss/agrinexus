"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

// Found by the user-journey sweep: a Kiswahili request the older route / voice floor could not handle was answered "Usajili wa afya kwa mbali umefunguliwa. AgriNexus imeunda rekodi" (remote
// health registration opened, record created) or "Mifumo ya watoa huduma imejaribiwa na matokeo yamehifadhiwa" (provider systems tested, results saved) -- a false success for something that did nothing --
// or came back in English tagged "[SW]", or with the internal planning note ("Understand the person's goal and guide one step at a time") in it; and "nataka kujiua" was answered in English.

const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sw-honest-"));
const dbFile = path.join(dir, "db.json");
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let server;
let cookie = "";
let hop = 0;
async function waitFor(url) { for (let i = 0; i < 100; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } } throw new Error(`${url} did not become reachable`); }
const headers = () => { hop += 1; return { "content-type": "application/json", cookie, "x-forwarded-for": `10.15.0.${(hop % 250) + 1}` }; };
async function voice(command) {
  const res = await fetch(`${base}/api/voice/realtime/tool`, { method: "POST", headers: headers(), body: JSON.stringify({ name: "nexus_general_conversation", correlationId: `sw-${hop}`, arguments: { command, language: "sw" }, language: "sw" }) });
  const body = await res.json();
  const out = body.output ?? body.result ?? body;
  return { intent: out.intent, text: String(out.response || out.message || "") };
}
async function agent(command, conversational) {
  const res = await fetch(`${base}/api/agent/command`, { method: "POST", headers: headers(), body: JSON.stringify({ command, language: "sw", ...(conversational ? { conversational: true, inputMode: "voice", outputMode: "voice" } : {}) }) });
  const body = await res.json();
  const result = body.commandResult || {};
  return { intent: result.intent, text: String(result.response || "") };
}
const readDb = () => JSON.parse(fs.readFileSync(dbFile, "utf8"));
const COLLECTIONS = ["healthIntakes", "telehealthConsents", "telehealthVitals", "telehealthReferrals", "telehealthFollowUps", "assistantReminders"];
const counts = db => Object.fromEntries(COLLECTIONS.map(name => [name, (db.profile[name] || []).length]));

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), dbFile);
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: dbFile, AGRINEXUS_SPACES_PATH: path.join(dir, "dir.json"), OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_TEST_REMINDER_STORE: "memory", AGRINEXUS_TRUST_PROXY: "true", AGRINEXUS_AI_AGENT_RATE_LIMIT_PER_WINDOW: "100000", AGRINEXUS_RATE_LIMIT_PER_WINDOW: "100000" },
    stdio: "ignore", windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  const login = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" }) });
  assert.equal(login.status, 200);
  cookie = (login.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ");
});
test.after(() => { server.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

const SUCCESS_CLAIM = /imeunda rekodi|umefunguliwa|imejaribiwa|matokeo yamehifadhiwa|imerekodiwa|imeundwa/i;
const LEAK = /\[SW\]|Understand the person|guide one step at a time|plainGoal|Help the (person|farmer|learner)/i;

const PHRASES = [
  "mtoto wangu akiwa na miezi mitatu apate chanjo gani",
  "mtoto ana mafua kidogo anacheza vizuri",
  "hospitali iliyo karibu iko wapi",
  "naweza kupata wapi kipimo cha UKIMWI",
  "nataka kujua njia za uzazi wa mpango",
  "futa taarifa zangu zote za afya",
  "nimeacha kumeza dawa za presha kwa sababu najisikia vizuri",
  "naumwa kichwa kidogo",
  "nimevuna gunia tatu za mahindi leo",
  "nipande mahindi lini?",
  "mahindi yangu yana wadudu wanakula majani, nifanye nini"
];

test("a Kiswahili request nobody handled gets an honest Kiswahili answer on every route, never a success claim, a [SW] tag or internal wording, and nothing is saved", async () => {
  const before = counts(readDb());
  for (const phrase of PHRASES) {
    for (const [route, reply] of [["voice tool", await voice(phrase)], ["conversational", await agent(phrase, true)], ["typed", await agent(phrase, false)]]) {
      assert.doesNotMatch(reply.text, SUCCESS_CLAIM, `${route}: ${phrase} -> ${reply.text}`);
      assert.doesNotMatch(reply.text, LEAK, `${route}: ${phrase} -> ${reply.text}`);
      if (reply.intent === "conversation.not_handled") {
        assert.match(reply.text, /hakuna kilichohifadhiwa/, `${route}: ${phrase}`);
        assert.match(reply.text, /^Samahani/, `${route}: ${phrase}`);
      }
      if (reply.intent === "conversation.open_reasoning") {
        assert.equal(reply.text, "Samahani, sikuelewa vizuri. Unaweza kusema tena kwa maneno machache? Kwa mfano: afya, shamba, kazi, pesa.", `${route}: ${phrase}`);
      }
    }
  }
  await sleep(300);
  assert.deepEqual(counts(readDb()), before, "no health, consent, vitals, referral, follow-up or reminder record was made by any of them");
});

test("the plain 'could not do it' answer is Kiswahili on the voice tool for a farm record nobody handled", async () => {
  const reply = await voice("nimevuna gunia tatu za mahindi leo");
  assert.match(reply.text, /^Samahani, sikuweza kufanya hilo sasa hivi, na hakuna kilichohifadhiwa\./);
  assert.doesNotMatch(reply.text, /I couldn't|nothing was saved/);
});

test("'I want to die' and 'I hurt myself' in Kiswahili get the Kiswahili supportive reply that already exists, on every route", async () => {
  for (const phrase of ["nataka kujiua", "sitaki kuishi tena", "najidhuru"]) {
    for (const [route, reply] of [["voice tool", await voice(phrase)], ["conversational", await agent(phrase, true)], ["typed", await agent(phrase, false)]]) {
      assert.match(reply.text, /^Pole sana kwa unavyojisikia/, `${route}: ${phrase} -> ${reply.text}`);
      assert.match(reply.text, /namba ya dharura ya nchi yako/, `${route}: ${phrase}`);
      assert.doesNotMatch(reply.text, /I'm really glad|emergency services|trusted person/i, `${route}: ${phrase} still English`);
    }
  }
});

test("English crisis wording is unchanged: still the English supportive reply", async () => {
  const res = await fetch(`${base}/api/agent/command`, { method: "POST", headers: headers(), body: JSON.stringify({ command: "I want to kill myself" }) });
  const body = await res.json();
  assert.equal(body.commandResult.intent, "mental_health_behavioral_wellness");
  assert.match(body.commandResult.response, /I'm really glad you told me/);
});
