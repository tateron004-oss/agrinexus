"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

// The sweep of how people really talk found, on the older path (the phone line and the fallback when the planner is not there):
//  * "text +254712345678 saying hello" became "Do you want me to call ...?", and "yes" placed a CALL with the words lost;
//  * contacts were saved under junk names ("Text", "Save John", "Otieno's As", "Juma Simu", "Mama On");
//  * a normal local number (0712345678, 0803 123 4567) was refused;
//  * the same tool call sent three times created three records.
// These run a real server with no AI key, no database and no Twilio, signed in as the seeded local test account.

const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "front-door-"));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let server; let cookie = ""; let n = 0;
async function waitFor(url) { for (let i = 0; i < 100; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } } throw new Error(`${url} did not become reachable`); }
async function post(route, body) {
  const res = await fetch(`${base}${route}`, { method: "POST", headers: { "content-type": "application/json", "x-forwarded-for": "10.15.97.1", ...(cookie ? { cookie } : {}) }, body: JSON.stringify(body) });
  const text = await res.text();
  let json = null; try { json = JSON.parse(text); } catch { /* not JSON */ }
  return { status: res.status, json, text, setCookie: (res.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ") };
}
const toolFull = async (command, correlationId = `fd-${++n}-${Math.random().toString(36).slice(2, 8)}`, language = "en") => (await post("/api/voice/realtime/tool", { name: "nexus_general_conversation", correlationId, arguments: { command, language }, language })).json || {};
const tool = async (command, language = "en") => (await toolFull(command, undefined, language)).response || "";
const typed = async command => { const r = await post("/api/agent/command", { command, conversational: true, inputMode: "voice", outputMode: "voice" }); return { reply: r.json?.commandResult?.response || "", intent: r.json?.commandResult?.intent || "" }; };

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), path.join(dir, "db.json"));
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), SESSION_SECRET: "front-door-secret-for-the-test-0123456789", AGRINEXUS_DB_PATH: path.join(dir, "db.json"), AGRINEXUS_SPACES_PATH: path.join(dir, "dir.json"),
    OPENAI_API_KEY: "", DATABASE_URL: "", AGRINEXUS_STATE_STORE: "json", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_TEST_REMINDER_STORE: "memory", AGRINEXUS_TRUST_PROXY: "true", AGRINEXUS_AI_AGENT_RATE_LIMIT_PER_WINDOW: "100000", AGRINEXUS_RATE_LIMIT_PER_WINDOW: "100000",
    TWILIO_ACCOUNT_SID: "", TWILIO_AUTH_TOKEN: "", TWILIO_PHONE_NUMBER: "" }, stdio: "ignore", windowsHide: true });
  await waitFor(`${base}/api/healthz`);
  const login = await post("/api/login", { email: "user@agrinexus.org", password: "User2026!" });
  assert.equal(login.status, 200);
  cookie = login.setCookie;
});
test.after(() => { server.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

test("a request to text somebody stays a message: the words and the number are shown back, and 'yes' never places a call", async () => {
  for (const [label, ask] of [["voice route", async text => ({ reply: await tool(text) })], ["typed route", typed]]) {
    for (const text of ["text +254712345678 saying hello", "send sms to +254712345678: hello", "sms +254712345678 hello", "tuma ujumbe kwa +254712345678 hello", "whatsapp +254712345678 hello", "message +254712345678 that hello"]) {
      const { reply } = await ask(text);
      assert.match(reply, /Send "hello" to \+254 712 345 678|Nitume "hello" kwa \+254 712 345 678/, `${label}: ${text} -> ${reply}`);
      assert.doesNotMatch(reply, /call/i, `${label}: ${text} must not offer a call -> ${reply}`);
      const yes = await ask("yes");
      assert.doesNotMatch(yes.reply, /call (?:is|has) |placed|Twilio call/i, `${label}: 'yes' must not place a call -> ${yes.reply}`);
      assert.match(yes.reply, /nothing was sent|Sent your/i, `${label}: ${yes.reply}`);
      assert.match(yes.reply, /hello|Sent your/, `${label}: the message words are not lost -> ${yes.reply}`);
    }
  }
});

test("a normal local number is accepted, converted to +country and said back in full", async () => {
  assert.match(await tool("text 0712345678 saying I am late"), /Send "I am late" to \+254 712 345 678/);
  assert.match(await tool("sms 0803 123 4567 I am coming"), /Send "I am coming" to \+234 803 123 4567/);
  assert.match(await tool("text ０７１２３４５６７８ saying hi"), /to \+254 712 345 678/, "fullwidth digits");
  assert.match(await tool("text ٠٧١٢٣٤٥٦٧٨ saying hi"), /to \+254 712 345 678/, "Arabic-Indic digits");
  assert.match(await tool("text 071234 saying hi"), /number|Number/i, "an unusable number is asked about, not guessed");
});

test("contacts are saved under the real name only", async () => {
  assert.match(await tool("Save John number 0733123456"), /Saved John as \+254 733 123 456/);
  assert.match(await tool("Could you save Otieno's number as +254712345678"), /Saved Otieno as \+254 712 345 678/);
  assert.match(await tool("Abeg save Ngozi number +2348031234567"), /Saved Ngozi as \+234 803 123 4567/);
  assert.match(await tool("save Mama's number as 0722111222"), /Saved Mama as \+254 722 111 222/);
  const names = fs.readFileSync(path.join(dir, "db.json"), "utf8");
  for (const junk of ["\"Save John\"", "\"Otieno's As\"", "\"Could You Save Otieno's\"", "\"Abeg Save Ngozi\"", "\"Mama On\"", "\"Mama's\"", "\"Text\""]) assert.ok(!names.includes(junk), `junk name ${junk}`);
  await tool("save Wanjiku Mũthoni's number as 0700111222").catch(() => null);
});

test("'call Juma simu' asks for Juma's number, and 'actually call him instead' asks who", async () => {
  const juma = await tool("Call Juma simu");
  assert.match(juma, /Juma/);
  assert.doesNotMatch(juma, /Juma Simu/);
  const him = await tool("Actually call him instead");
  assert.doesNotMatch(him, /Him Instead|Him/);
  assert.ok(!fs.readFileSync(path.join(dir, "db.json"), "utf8").includes("Him Instead"), "'him instead' is never saved as a person");
  const typedHim = await typed("Actually call him instead");
  assert.doesNotMatch(typedHim.reply, /Him Instead/);
  assert.match(typedHim.reply, /Who should I call/i);
});

test("a saved person is texted by name, and 'tell mama ...' is a message and not a health script", async () => {
  assert.match(await tool("Text John I am late"), /Send "I am late" to John \(\+254 733 123 456\)/);
  assert.match(await tool("Could you maybe text Otieno that I am on my way, thank you"), /Send "I am on my way" to Otieno/);
  const tell = await tool("tell mama I am coming");
  assert.match(tell, /Send "I am coming" to Mama/);
  assert.doesNotMatch(tell, /diagnos|danger signs/i);
  const stranger = await tool("tell Zawadi I am coming");
  assert.match(stranger, /don't have a number for Zawadi/);
});

test("the same correlationId sent three times does its work once", async () => {
  const id = `fd-same-${Math.random().toString(36).slice(2, 8)}`;
  const first = await toolFull("remind me in 20 minutes to feed the zebus", id);
  const second = await toolFull("remind me in 20 minutes to feed the zebus", id);
  const third = await toolFull("remind me in 20 minutes to feed the zebus", id);
  assert.deepEqual(second, first);
  assert.deepEqual(third, first);
  const list = await tool("show my reminders");
  assert.equal((list.match(/feed the zebus/gi) || []).length, 1, list);
  // calls with no correlationId are never merged: each one is its own request
  await post("/api/voice/realtime/tool", { name: "nexus_general_conversation", arguments: { command: "remind me in 30 minutes to milk the cows", language: "en" }, language: "en" });
  await post("/api/voice/realtime/tool", { name: "nexus_general_conversation", arguments: { command: "remind me in 40 minutes to dip the goats", language: "en" }, language: "en" });
  const both = await tool("show my reminders");
  assert.match(both, /milk the cows/i); assert.match(both, /dip the goats/i);
});

test("what was said is cleaned at the front door, and a danger phrase is never lost to the cleaning", async () => {
  const zeroWidth = "I​ have​ chest​ pain";
  assert.match(await tool(zeroWidth), /emergency|hospital|clinic|112|999|nearest|dharura/i, "a zero-width character inside 'chest pain' no longer hides it");
  assert.match(await tool("Kyro, um, i have chest pain, thank you"), /emergency|hospital|clinic|112|999|nearest|dharura/i);
  const padded = `${"blah ".repeat(1200)}I have chest pain`;
  assert.match(await tool(padded), /emergency|hospital|clinic|112|999|nearest|dharura/i, "the danger phrase survives a very long message");
});
