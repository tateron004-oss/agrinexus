"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

// Texting and calling by name, end to end on a real server with no AI key, no database and no Twilio (the in-memory stand-ins are switched on by NEXUS_TEST_REMINDER_STORE=memory):
//  * a contact saved with the planner is found by the older command route and the voice tool, and one saved on the older route is written to both, and the latest number wins;
//  * a name that fits two people is asked about with each number read back, and the answer picks one;
//  * another account cannot see, text or call a contact of somebody else's;
//  * "call +254712345678" / "call John" on the voice tool stage a confirmation exactly as the typed route does, and nothing is sent or dialled without a yes;
//  * the same replies come back in Kiswahili for a Kiswahili speaker;
//  * local numbers (Kenya 07xx/01xx, Nigeria 070x/080x/081x/090x/091x) are made into +254/+234 and said back before anything is sent.
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "comms-unified-"));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let server; let n = 0;
const jars = {};

const PLANNER_CONTACTS = {
  "user@agrinexus.org": [
    { name: "Grace", phone: "+254711222333" },
    { name: "Amina Wanjiru", phone: "+254711000111" }, { name: "Amina Otieno", phone: "+254722000222" },
    { name: "Sam", phone: "+254700000001" }, { name: "Sam Otieno", phone: "+254700000002" },
    { name: "Wanjiku", phone: "+254733444555" }
  ],
  "admin@agrinexus.org": [
    { name: "Amina Wanjiru", phone: "+254711000111" }, { name: "Amina Otieno", phone: "+254722000222" }
  ]
};

async function waitFor(url) { for (let i = 0; i < 100; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } } throw new Error(`${url} did not become reachable`); }
async function post(route, body, who = "user") {
  const res = await fetch(`${base}${route}`, { method: "POST", headers: { "content-type": "application/json", "x-forwarded-for": "10.15.98.1", ...(jars[who] ? { cookie: jars[who] } : {}) }, body: JSON.stringify(body) });
  const text = await res.text();
  let json = null; try { json = JSON.parse(text); } catch { /* not JSON */ }
  return { status: res.status, json, setCookie: (res.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ") };
}
async function login(who, email, password) { const r = await post("/api/login", { email, password }, who); assert.equal(r.status, 200, `${email} signs in`); jars[who] = r.setCookie; }
// the voice tool (nexus_general_conversation unless another tool is named) and the typed route
const tool = async (command, { who = "user", language = "en", name = "nexus_general_conversation", extra = {} } = {}) => {
  const r = await post("/api/voice/realtime/tool", { name, correlationId: `cu-${++n}-${Math.random().toString(36).slice(2, 8)}`, arguments: { command, language, ...extra }, language }, who);
  return r.json || {};
};
const said = async (command, options) => (await tool(command, options)).response || "";
const typed = async (command, { who = "user", language } = {}) => {
  const r = await post("/api/agent/command", { command, conversational: true, inputMode: "voice", outputMode: "voice", ...(language ? { language } : {}) }, who);
  return { reply: r.json?.commandResult?.response || "", intent: r.json?.commandResult?.intent || "", status: r.json?.commandResult?.status || "", state: r.json || {} };
};
const typedSaid = async (command, options) => (await typed(command, options)).reply;
// (the voice tool allows 90 requests a minute per person, so the longer tests below use their own account)
const routesFor = who => [["voice tool", (text, options) => said(text, { who, ...options })], ["typed route", (text, options) => typedSaid(text, { who, ...options })]];
const ROUTES = routesFor("user");

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), path.join(dir, "db.json"));
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), SESSION_SECRET: "comms-unified-secret-for-the-test-0123456789", AGRINEXUS_DB_PATH: path.join(dir, "db.json"), AGRINEXUS_SPACES_PATH: path.join(dir, "dir.json"),
    OPENAI_API_KEY: "", DATABASE_URL: "", AGRINEXUS_STATE_STORE: "json", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_TEST_REMINDER_STORE: "memory", NEXUS_TEST_PLANNER_CONTACTS: JSON.stringify(PLANNER_CONTACTS), NEXUS_CALLS_ENABLED: "true",
    AGRINEXUS_TRUST_PROXY: "true", AGRINEXUS_AI_AGENT_RATE_LIMIT_PER_WINDOW: "100000", AGRINEXUS_RATE_LIMIT_PER_WINDOW: "100000", TWILIO_ACCOUNT_SID: "", TWILIO_AUTH_TOKEN: "", TWILIO_PHONE_NUMBER: "" }, stdio: "ignore", windowsHide: true });
  await waitFor(`${base}/api/healthz`);
  await login("user", "user@agrinexus.org", "User2026!");
  await login("investor", "investor@agrinexus.org", "Investor2026!");
  await login("admin", "admin@agrinexus.org", "Admin2026!");
});
test.after(() => { server.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

// what is on record, from the response of a typed command
const profileOf = async who => (await typed("hello", { who })).state.profile || {};
const outboundCalls = async who => (await profileOf(who)).outboundCalls || [];
const sentLogs = async who => ((await profileOf(who)).integrationEvents || []).filter(event => /message\.sent_by_voice|phone\.outbound_call_requested/.test(event.action || ""));

test("a contact saved with the planner is found by name for a text and a call, on the voice tool and the typed route, with the number read back and nothing sent", async () => {
  const callsBefore = (await outboundCalls("user")).length; const logsBefore = (await sentLogs("user")).length;
  for (const [label, ask] of ROUTES) {
    assert.match(await ask("text Grace the pump is fixed"), /Send "the pump is fixed" to Grace \(\+254 711 222 333\) as a text\? Say yes to send it, or no to cancel\./, `${label}: text by name`);
    await ask("no");
    assert.match(await ask("call Grace"), /I found Grace at \+254 711 222 333\. Before I call anyone, please confirm\. Do you want me to call Grace now\?/, `${label}: call by name`);
    await ask("no");
    assert.match(await ask("whatsapp Wanjiku the meeting is at 3"), /Send "the meeting is at 3" to Wanjiku \(\+254 733 444 555\) as a WhatsApp message\?/, `${label}: WhatsApp by name`);
    await ask("no");
  }
  assert.equal((await outboundCalls("user")).length, callsBefore, "no call was placed or recorded without a yes");
  assert.equal((await sentLogs("user")).length, logsBefore, "nothing was sent without a yes");
});

test("a name that fits more than one person is asked about with each number read back; the answer picks one; the full name needs no question", async () => {
  for (const [label, ask] of ROUTES) {
    const which = await ask("text Amina hello");
    assert.match(which, /more than one Amina\. Which one\?/, label);
    assert.match(which, /Amina Wanjiru, \+254 711 000 111/); assert.match(which, /Amina Otieno, \+254 722 000 222/);
    assert.match(await ask("the second one"), /Send "hello" to Amina (?:Wanjiru|Otieno) \(\+254 7\d\d \d\d\d \d\d\d\) as a text\?/, `${label}: the answer picks one`);
    await ask("no");
    assert.match(await ask("call Amina"), /Which one should I call\?.*Amina Wanjiru, \+254 711 000 111.*Amina Otieno, \+254 722 000 222|Which one should I call\?.*Amina Otieno, \+254 722 000 222.*Amina Wanjiru, \+254 711 000 111/, `${label}: call asks too`);
    assert.match(await ask("Amina Otieno"), /I found Amina Otieno at \+254 722 000 222\. Before I call anyone/, `${label}: the full name picks one`);
    await ask("no");
    assert.match(await ask("call Amina Wanjiru"), /I found Amina Wanjiru at \+254 711 000 111\./, `${label}: a full name needs no question`);
    await ask("no");
    // "Sam" is Sam even though "Sam Otieno" is also saved
    assert.match(await ask("call Sam"), /I found Sam at \+254 700 000 001\./, `${label}: an exact name is not also its longer cousin`);
    await ask("no");
  }
});

test("a number saved on the older route is written where the planner reads it too, and the number saved last is the one used", async () => {
  assert.match(await said("Save Grace's number as +254799888777"), /Saved Grace as \+254 799 888 777\./);
  for (const [label, ask] of ROUTES) {
    assert.match(await ask("call Grace"), /I found Grace at \+254 799 888 777\./, `${label}: the number saved last wins over the planner's older one`);
    await ask("no");
  }
  assert.match(await typedSaid("What number is Grace"), /Grace is saved as \+254799888777/);
  // a name saved only on the older route
  assert.match(await typedSaid("Save Kofi's number +254788100200"), /Saved Kofi as \+254 788 100 200\./);
  assert.match(await said("text Kofi I am on my way"), /Send "I am on my way" to Kofi \(\+254 788 100 200\)/);
  await said("no");
});

test("another account cannot find, text or call a contact of this account's, from either store", async () => {
  // user@ has Grace and Kofi (the planner's store and the older phone book); investor@ has nothing
  for (const [label, run] of [["voice tool", text => tool(text, { who: "investor" }).then(r => r.response || "")], ["typed route", text => typedSaid(text, { who: "investor" })]]) {
    for (const name of ["Grace", "Kofi", "Wanjiku", "Amina Wanjiru"]) {
      const text = await run(`text ${name} hello`);
      assert.doesNotMatch(text, /\+254 7\d\d \d\d\d \d\d\d|Send "hello"/, `${label}: B must not be offered ${name}'s number -> ${text}`);
      assert.match(text, /don't have a number for|Sina namba ya/, `${label}: ${text}`);
      const call = await run(`call ${name}`);
      assert.doesNotMatch(call, /I found|\+254 7\d\d \d\d\d \d\d\d|Before I call anyone/, `${label}: B must not be offered ${name}'s number to call -> ${call}`);
      assert.match(call, /do not have|Who should I call|phone number/i, `${label}: ${call}`);
    }
    assert.doesNotMatch(await run("what number is Grace"), /254711222333|254799888777/, `${label}: a lookup does not leak the number`);
  }
  // and the other way round: whatever B saves, A never gets
  assert.match(await tool("Save Zuri's number as +254700999888", { who: "investor" }).then(r => r.response), /Saved Zuri/);
  assert.match(await said("text Zuri hello"), /don't have a number for Zuri/);
});

test("'call +254712345678' on the voice tool stages a confirmation like the typed route, and a yes places it only through the real call path (not set up here, so nothing is done)", async () => {
  for (const [label, ask] of ROUTES) {
    const callsBefore = (await outboundCalls("user")).length;
    const staged = await ask("call +254712345678");
    assert.match(staged, /Before I call anyone, please confirm\. Do you want me to call \+254 712 345 678 now\?/, `${label}: ${staged}`);
    assert.doesNotMatch(staged, /couldn't do that one/, label);
    assert.equal((await outboundCalls("user")).length, callsBefore, `${label}: staging dials nothing`);
    // anything but a yes leaves it alone
    for (const other of ["what time is it", "ok"]) { await ask(other); assert.equal((await outboundCalls("user")).length, callsBefore, `${label}: "${other}" dials nothing`); }
    const yes = await ask("yes");
    assert.match(yes, /could not place the call to \+254 712 345 678: calling is not set up yet, so nothing was done\./, `${label}: ${yes}`);
    assert.doesNotMatch(yes, /TWILIO|confirmed for|Done\./, `${label}: no server setting names, no pretend success -> ${yes}`);
    const calls = await outboundCalls("user");
    assert.equal(calls.length, callsBefore + 1, `${label}: the yes went through the real call path once`);
    assert.equal(calls[0].delivery.attempted, false, `${label}: and no live call was attempted`); assert.equal(calls[0].to, "+254712345678");
  }
  // a second yes has nothing left to confirm and dials nothing
  const afterCalls = (await outboundCalls("user")).length;
  await said("yes");
  assert.equal((await outboundCalls("user")).length, afterCalls, "a second yes places nothing");
});

test("a request to call that is not a request to call is not staged on the voice tool", async () => {
  for (const text of ["my brother's number is +254712345678", "the clinic is open from 8 to 5 call me a taxi", "what is the weather in Nairobi"]) {
    const reply = await said(text);
    assert.doesNotMatch(reply, /Before I call anyone/, `"${text}" -> ${reply}`);
  }
  assert.match(await said("call me a taxi"), /./);
});

test("guests and restricted accounts are still refused: a text or call can be asked for, but a yes sends and dials nothing and says so", async () => {
  const guest = await post("/api/auth/guest-session", { name: "Guest Tester" });
  assert.ok([200, 201].includes(guest.status), `guest session -> ${guest.status}`); jars.guest = guest.setCookie;
  for (const who of ["guest", "investor"]) {
    const callsBefore = (await outboundCalls(who)).length;
    assert.match(await tool("call +254712345678", { who }).then(r => r.response), /Before I call anyone, please confirm\./, `${who}: staged`);
    const refusedCall = await tool("yes", { who }).then(r => r.response);
    assert.match(refusedCall, /cannot place real calls, so I did not call \+254 712 345 678\. Nothing was done\./, `${who}: ${refusedCall}`);
    assert.ok((await outboundCalls(who)).every(call => call.delivery.attempted === false), `${who}: no live call attempted`);
    assert.ok((await outboundCalls(who)).length <= callsBefore + 1);
    assert.match(await tool("text +254712345678 saying hello", { who }).then(r => r.response), /Send "hello" to \+254 712 345 678/);
    assert.match(await tool("yes", { who }).then(r => r.response), /cannot send real messages, so I did not send your text to \+254 712 345 678\. Nothing was sent\./, who);
    // and in Kiswahili
    assert.match(await tool("mpigie +254712345678", { who, language: "sw" }).then(r => r.response), /Kabla sijampigia mtu simu/);
    assert.match(await tool("ndiyo", { who, language: "sw" }).then(r => r.response), /haiwezi kupiga simu halisi, kwa hiyo sikumpigia \+254 712 345 678 simu\. Hakuna kilichofanyika\./, who);
    assert.match(await tool("tuma ujumbe kwa +254712345678 hello", { who, language: "sw" }).then(r => r.response), /Nitume "hello" kwa \+254 712 345 678\?/);
    assert.match(await tool("ndiyo", { who, language: "sw" }).then(r => r.response), /haiwezi kutuma ujumbe halisi, kwa hiyo sikutuma ujumbe wako kwa \+254 712 345 678\. Hakuna kilichotumwa\./, who);
  }
});

test("a message about health records, payments or passwords is staged but refused on the yes, and a signed-in account that may send gets the honest 'not set up' answer", async () => {
  await said("text +254712345678 saying the patient diagnosis is ready");
  assert.match(await said("yes"), /I did not send it: messages about health records, payments or passwords are not sent from here\. Nothing was sent to \+254 712 345 678\./);
  await said("text +254712345678 saying see you at noon");
  assert.match(await said("yes"), /I could not send your text to \+254 712 345 678: sending messages is not set up for this account yet, so nothing was sent\. Your words were: "see you at noon"\./);
  await said("tuma ujumbe kwa +254712345678 kuhusu mgonjwa na utambuzi wake", { language: "sw" });
  assert.match(await said("ndiyo", { language: "sw" }), /Sikutuma: ujumbe kuhusu rekodi za afya, malipo au nywila haitumwi kutoka hapa\. Hakuna kilichotumwa kwa \+254 712 345 678\./);
});

// ---- Kiswahili: every staged reply in the flow, on both routes ----
const ENGLISH_LEFTOVERS = /Say yes|Got it|Would you like|Canceled|I found|I could not|Before I call|Nothing was|nothing was sent|Tell me what/;

test("the staged text and call replies are in Kiswahili for a Kiswahili speaker, on both routes, with no English left over", async () => {
  const swahili = {
    "voice tool": (text) => said(text, { language: "sw", who: "admin" }),
    "typed route": (text) => typedSaid(text, { language: "sw", who: "admin" })
  };
  for (const [label, ask] of Object.entries(swahili)) {
    const check = async (text, expected, why) => { const reply = await ask(text); assert.match(reply, expected, `${label} ${why}: ${text} -> ${reply}`); assert.doesNotMatch(reply, ENGLISH_LEFTOVERS, `${label} ${why}: English left over -> ${reply}`); return reply; };
    await check("tuma ujumbe kwa +254712345678 niko njiani", /^Nitume "niko njiani" kwa \+254 712 345 678\? Sema ndiyo ili kutuma, au hapana kughairi\.$/, "message read-back");
    await check("hapana", /^Nimeghairi\. Niambie unataka kufanya nini baadaye\.$/, "cancelled");
    await check("whatsapp 0712345678 niko njiani", /^Nitume "niko njiani" kwa \+254 712 345 678 kwa WhatsApp\?/, "whatsapp read-back, local number");
    await check("ndiyo", /^Sikuweza kutuma ujumbe wako wa WhatsApp kwa \+254 712 345 678: kutuma ujumbe hakujawekwa kwenye akaunti hii bado, kwa hiyo hakuna kilichotumwa\. Maneno yako yalikuwa: "niko njiani"\.$/, "not sent / not set up");
    await check("tuma ujumbe kwa +254712345678 salamu", /Nitume "salamu"/, "again");
    await check("ok", /^Nitume "salamu" kwa \+254 712 345 678\? Sema ndiyo ili kutuma, au hapana kughairi\. Sema ndiyo, thibitisha, au fanya hivyo ili kuendelea, au hapana kughairi\.$/, "a vague answer asks again");
    await check("thibitisha", /^Sikuweza kutuma ujumbe wako kwa \+254 712 345 678: kutuma ujumbe hakujawekwa/, "'thibitisha' is a yes");
    await check("tuma ujumbe kwa Zawadi niko njiani", /^Sina namba ya Zawadi\. Nipe namba yake yenye msimbo wa nchi, kwa mfano "tuma ujumbe kwa \+254712345678 niko njiani", au sema "hifadhi namba ya Zawadi kama \+254712345678" kwanza\.$/, "unknown number");
    await check("tuma ujumbe kwa 071234 niko njiani", /^Sijaelewa namba hiyo\. Nipe namba kamili/, "unusable number");
    await check("tuma ujumbe kwa Amina niko njiani", /^Kuna zaidi ya mmoja anayeitwa Amina\. Ni yupi\? 1\. Amina (?:Wanjiru|Otieno), \+254 7\d\d \d\d\d \d\d\d 2\. Amina (?:Wanjiru|Otieno), \+254 7\d\d \d\d\d \d\d\d\.?$/, "which one (message)");
    await check("wa pili", /^Nitume "niko njiani" kwa Amina (?:Wanjiru|Otieno) \(\+254 7\d\d \d\d\d \d\d\d\)\?/, "the answer in Kiswahili");
    await check("hapana", /^Nimeghairi\./, "cancelled again");
    await check("mpigie Amina", /^Nimepata zaidi ya mmoja anayelingana na Amina\. Nimpigie yupi\? 1\. /, "which one (call)");
    await check("Amina Wanjiru", /^Nimempata Amina Wanjiru kwenye namba \+254 711 000 111\. Kabla sijampigia mtu simu, tafadhali thibitisha\. Nimpigie Amina Wanjiru simu sasa\? Sema ndiyo au hapana\.$/, "call read-back by saved name");
    await check("ndiyo", /^Sikuweza kumpigia Amina Wanjiru simu: kupiga simu hakujawekwa bado, kwa hiyo hakuna kilichofanyika\.$/, "call not set up");
    await check("mpigie 0803 123 4567", /^Kabla sijampigia mtu simu, tafadhali thibitisha\. Nipige simu kwa \+234 803 123 4567 sasa\? Sema ndiyo au hapana\.$/, "call read-back, Nigerian local number");
    await check("hapana", /^Nimeghairi\./, "call cancelled");
    await check("Hifadhi namba ya Juma +254722000111", /^Nimemhifadhi Juma kama \+254 722 000 111\. Ikiwa namba si sahihi, isema tena\./, "contact saved");
    await check("mpigie Juma", /^Nimempata Juma kwenye namba \+254 722 000 111\./, "saved on this route, called by name");
    await check("hapana", /^Nimeghairi\./, "cancelled");
  }
});

test("a Kiswahili request is answered in Kiswahili even when the app's language is English, and English stays English", async () => {
  assert.match(await said("mpigie +254712345678"), /^Kabla sijampigia mtu simu/);
  await said("hapana");
  assert.match(await typedSaid("tuma ujumbe kwa +254712345678 hujambo"), /^Nitume "hujambo" kwa \+254 712 345 678\?/);
  await typedSaid("hapana");
  assert.match(await said("call +254712345678", { language: "en" }), /^Got it\. Before I call anyone, please confirm\. Do you want me to call \+254 712 345 678 now\? Say yes when you are ready, or no if you want me to stop\.$/, "English keeps its wording, including the follow-up words");
  assert.match(await said("no"), /^Got it\. Canceled\. Tell me what you want to do next\./);
});

test("every local Kenyan and Nigerian number is turned into +254 / +234 and said back, for a text and a call, on the older route and the voice tool, and nothing goes out without a yes", async () => {
  const table = [["0712345678", "+254 712 345 678"], ["0112345678", "+254 112 345 678"], ["0722 111 222", "+254 722 111 222"],
    ["08031234567", "+234 803 123 4567"], ["0701 234 5678", "+234 701 234 5678"], ["08121234567", "+234 812 123 4567"], ["09012345678", "+234 901 234 5678"], ["09112345678", "+234 911 234 5678"]];
  const callsBefore = (await outboundCalls("admin")).length; const logsBefore = (await sentLogs("admin")).length;
  for (const [written, spoken] of table) {
    for (const [label, ask] of routesFor("admin")) {
      const escaped = spoken.replace(/\+/g, "\\+");
      assert.match(await ask(`text ${written} saying hello`), new RegExp(`Send "hello" to ${escaped} as a text\\?`), `${label}: text ${written}`);
      await ask("no");
      assert.match(await ask(`call ${written}`), new RegExp(`call ${escaped} now\\?`), `${label}: call ${written}`);
      await ask("no");
    }
    // the model-driven communications tool: the number is made international and read back, and it still waits for a confirmed:true
    const result = await tool(`call ${written}`, { name: "nexus_communications", extra: { channel: "call" }, who: "admin" });
    assert.match(String(result.response), new RegExp(`Number to confirm: ${spoken.replace(/\+/g, "\\+")}\\.`), `communications tool: ${written} -> ${JSON.stringify(result).slice(0, 400)}`);
    assert.equal(result.executionAttempted, false, "nothing was attempted without a confirmation");
  }
  assert.equal((await outboundCalls("admin")).length, callsBefore); assert.equal((await sentLogs("admin")).length, logsBefore);
});

test("the model-driven communications tool finds a saved name, asks which of two, and reads the number back before anything goes out", async () => {
  const grace = await tool("call Grace", { name: "nexus_communications", extra: { channel: "call" } });
  assert.match(String(grace.response), /Number to confirm: \+254 799 888 777 \(Grace\)\./, JSON.stringify(grace).slice(0, 400));
  assert.equal(grace.executionAttempted, false);
  const amina = await tool("call Amina", { name: "nexus_communications", extra: { channel: "call" } });
  assert.match(amina.response, /more than one Amina\. Which one\?.*\+254 7\d\d \d\d\d \d\d\d/, amina.response);
  assert.equal(amina.executionAttempted, false);
  const nobody = await tool("call Zebedee", { name: "nexus_communications", extra: { channel: "call" } });
  assert.equal(nobody.executionAttempted, false, "a name nobody saved is not guessed");
  const other = await tool("call Grace", { name: "nexus_communications", extra: { channel: "call" }, who: "investor" });
  assert.doesNotMatch(other.response || "", /254799888777|254 799 888 777|254 711 222 333/, "another account is not given Grace's number");
});
