"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

// The user-journey sweep found reminders set at the wrong time without a word (22 of 36 ways to say "in 20 minutes" went to tomorrow), a bare "at 6" taken as 6pm, repeating reminders
// saved as one-offs, a Lagos user's 7am set in East Africa time, "what time is it" answered in UTC, no way to ask "what reminders do I have" or change or cancel them all, and the same
// request saved three times. Through the real server (no AI key, so the older path that the phone line and the typed fallback use), on the voice tool route and the older command route.
// What was STORED is checked through the app's own list, not from the reply text. The user is the seeded local test account (Nigeria: Africa/Lagos).

const root = path.resolve(__dirname, "..", "..");
const port = 15950;
const base = `http://127.0.0.1:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "reminders-journeys-"));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let server; let cookie = ""; let counter = 0;

async function waitFor(url) { for (let i = 0; i < 100; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } } throw new Error(`${url} did not become reachable`); }
const post = async (route, body) => { const res = await fetch(`${base}${route}`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify(body) }); return res.json(); };
// the voice tool route: { name, correlationId, arguments: { command, language } }
const speak = async (command, { language = "en", correlationId, timeZone } = {}) => {
  counter += 1;
  const body = await post("/api/voice/realtime/tool", { name: "nexus_general_conversation", correlationId: correlationId || `j${Date.now()}-${counter}`, arguments: { command, language }, language, ...(timeZone ? { timeZone } : {}) });
  return { response: String(body.response || ""), body };
};
// the older command route
const type = async (command, extra = {}) => { const body = await post("/api/agent/command", { command, ...extra }); const result = body.commandResult || body; return { response: String(result.response || ""), intent: result.intent, result }; };
const stored = async () => (await type("what reminders do I have")).result.metadata?.reminders || [];
const reset = async () => { const asked = await type("cancel all my reminders"); if (/Cancel all/.test(asked.response)) await type("yes"); assert.deepEqual(await stored(), []); };
const local = (iso, zone) => new Intl.DateTimeFormat("sv-SE", { timeZone: zone, dateStyle: "short", timeStyle: "short" }).format(new Date(iso));
const minutesAway = (reminder, from) => Math.round((Date.parse(reminder.scheduledAt) - from) / 60000);

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), path.join(dir, "db.json"));
  server = spawn(process.execPath, ["server.js"], { cwd: root, stdio: "ignore", windowsHide: true, env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: path.join(dir, "db.json"), AGRINEXUS_SPACES_PATH: path.join(dir, "spaces.json"),
    OPENAI_API_KEY: "", DATABASE_URL: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", AGRINEXUS_TRUST_PROXY: "true", AGRINEXUS_AI_AGENT_RATE_LIMIT_PER_WINDOW: "100000", AGRINEXUS_RATE_LIMIT_PER_WINDOW: "100000", NEXUS_TEST_REMINDER_STORE: "memory" } });
  await waitFor(`${base}/api/healthz`);
  const login = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" }) });
  assert.equal(login.status, 200);
  cookie = (login.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ");
});
test.after(() => { server?.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

test("every way of saying 'in 20 minutes' is stored 20 minutes from now, on both routes, in English and Kiswahili", async () => {
  const rows = [
    ["remind me in 20 mins to take pill A", 20], ["remind me in twenty five minutes to take pill B", 25], ["remind me in ninety minutes to take pill C", 90], ["remind me in a quarter of an hour to take pill D", 15],
    ["remind me in half an hour to take pill E", 30], ["remind me in 1 hr 30 min to take pill F", 90]
  ];
  const rowsSw = [
    ["nikumbushe baada ya dakika 20 kunywa dawa A", 20], ["nikumbushe baada ya dakika ishirini kunywa dawa B", 20], ["nikumbushe nusu saa kunywa dawa C", 30], ["nikumbushe baada ya saa moja kunywa dawa D", 60],
    ["nikumbushe dakika kumi na tano zijazo kunywa dawa E", 15], ["nikumbushe baada ya masaa mawili kunywa dawa F", 120]
  ];
  for (const [batch, language] of [[rows, "en"], [rowsSw, "sw"]]) {
    await reset();
    const startedAt = Date.now();
    for (const [index, [phrase]] of batch.entries()) {
      const said = index % 2 === 0 ? await speak(phrase, { language }) : await type(phrase, { language });
      assert.doesNotMatch(said.response, /\btomorrow\b|\bkesho\b/i, `${phrase} -> ${said.response}`);
    }
    const list = await stored();
    assert.equal(list.length, batch.length, `${language}: one reminder for each request`);
    for (const [phrase, minutes] of batch) {
      const task = phrase.match(/(?:pill|dawa) ([A-F])$/i)[1].toUpperCase();
      const reminder = list.find(item => new RegExp(`\\b${task}$`).test(item.task));
      assert.ok(reminder, phrase);
      assert.ok(Math.abs(minutesAway(reminder, startedAt) - minutes) <= 2, `${phrase}: stored ${minutesAway(reminder, startedAt)} minutes away`);
      assert.doesNotMatch(reminder.task, /remind|nikumbush|\bin\b|baada|dakika/i, `clean task text: ${reminder.task}`);
    }
  }
});

test("clock times in words and in Kiswahili are stored at that clock in the person's own zone (Lagos by default)", async () => {
  await reset();
  const tomorrow = new Date(Date.now() + 24 * 3600 * 1000);
  const tomorrowLocal = local(tomorrow, "Africa/Lagos").slice(0, 10);
  const rows = [
    ["remind me tomorrow at eight am to call vet A", "08:00"], ["remind me tomorrow at half past seven in the morning to call vet B", "07:30"], ["remind me tomorrow at quarter to six in the evening to call vet C", "17:45"],
    ["nikumbushe kesho saa mbili usiku kumpigia daktari D", "20:00"], ["nikumbushe kesho saa sita mchana kumpigia daktari E", "12:00"], ["nikumbushe kesho saa moja asubuhi kumpigia daktari F", "07:00"]
  ];
  for (const [index, [phrase]] of rows.entries()) {
    const said = index % 2 === 0 ? await speak(phrase, { language: index < 3 ? "en" : "sw" }) : await type(phrase, { language: index < 3 ? "en" : "sw" });
    assert.ok(said.response.length > 0, phrase);
  }
  const list = await stored();
  for (const [phrase, clock] of rows) {
    const letter = phrase.slice(-1);
    const reminder = list.find(item => new RegExp(`\\b${letter}$`).test(item.task));
    assert.ok(reminder, phrase);
    assert.equal(local(reminder.scheduledAt, "Africa/Lagos"), `${tomorrowLocal} ${clock}`, phrase);
  }
});

test("a bare 'at 6' is asked about, nothing is saved until it is answered, and the answer sets the right time", async () => {
  await reset();
  const asked = await speak("remind me at 6 to cook supper");
  assert.match(asked.response, /At 6 in the morning or in the evening\?[\s\S]*Nothing was set yet/);
  const answered = await speak("in the evening");
  assert.match(answered.response, /I will remind you to cook supper at 6:00 pm (?:today|tomorrow)/);
  const [reminder] = await stored();
  assert.equal(reminder.task, "cook supper");
  assert.equal(local(reminder.scheduledAt, "Africa/Lagos").slice(11), "18:00");
  // Kiswahili asks in Kiswahili
  await reset();
  const askedSw = await type("nikumbushe kesho saa mbili kumpigia daktari simu", { language: "sw" });
  assert.match(askedSw.response, /Samahani, saa ngapi\?/);
  const answeredSw = await type("usiku", { language: "sw" });
  assert.match(answeredSw.response, /Nitakukumbusha kumpigia daktari simu/);
  assert.equal(local((await stored())[0].scheduledAt, "Africa/Lagos").slice(11), "20:00");
});

test("no time at all is asked about, never turned into 'tomorrow'", async () => {
  await reset();
  const asked = await speak("remind me to take my medicine");
  assert.match(asked.response, /When should I remind you\?/);
  const answered = await speak("in 20 minutes");
  assert.match(answered.response, /take my medicine in 20 minutes/);
  assert.equal((await stored()).length, 1);
  // something that is not an answer is a new request, and the question is dropped
  await reset();
  await speak("remind me to take my medicine");
  const other = await speak("remind me in 5 minutes to stir the pot");
  assert.match(other.response, /stir the pot in 5 minutes/);
  assert.equal((await stored()).map(item => item.task).join("|"), "stir the pot");
});

test("repeating reminders are saved as repeating ones (never a one-off in disguise), with clean text and one rule per time", async () => {
  await reset();
  const replies = [];
  for (const phrase of ["remind me every Monday at 9 to call the buyer", "remind me every day at 6am to study", "remind me to take metformin 500mg at 8am and 8pm every day", "nikumbushe kila siku saa mbili asubuhi kunywa dawa"]) {
    replies.push((await speak(phrase, { language: /nikumbushe/.test(phrase) ? "sw" : "en" })).response);
  }
  assert.match(replies[0], /^(?:Got it\. )?Okay\. I will remind you to call the buyer every Monday at 9:00 am\./);
  assert.match(replies[1], /I will remind you to study every day at 6:00 am\./);
  assert.match(replies[2], /I will remind you to take metformin 500mg every day at 8:00 am and 8:00 pm\./);
  assert.match(replies[3], /Sawa\. Nitakukumbusha kunywa dawa kila siku saa mbili asubuhi\./);
  assert.deepEqual(await stored(), [], "no one-off reminder was made in disguise");
  const listed = (await speak("show my repeating reminders")).response;
  assert.match(listed, /You have 5 repeating reminders/);
  for (const part of ["call the buyer, every Monday at 9:00 am", "study, every day at 6:00 am", "take metformin 500mg, every day at 8:00 am", "take metformin 500mg, every day at 8:00 pm", "kunywa dawa, every day at 8:00 am"]) assert.ok(listed.includes(part), `${part} in ${listed}`);
  assert.match((await speak("cancel all my repeating reminders")).response, /stopped 5 repeating reminders/);
});

test("the same request sent again is one reminder: the same correlation id three times, and three identical requests", async () => {
  await reset();
  for (let i = 0; i < 3; i += 1) await speak("remind me tomorrow at 9am to pay the school fees", { correlationId: "retry-corr-1" });
  assert.equal((await stored()).length, 1, "same correlation id");
  await reset();
  const replies = [];
  for (let i = 0; i < 3; i += 1) replies.push((await speak("remind me tomorrow at 9am to collect the parcel")).response);
  assert.equal((await stored()).length, 1, "three identical requests");
  assert.match(replies[1], /already have that reminder/);
  // a different reminder is still made
  await speak("remind me tomorrow at 10am to collect the parcel");
  assert.equal((await stored()).length, 2);
});

test("reminders can be asked about naturally, changed, and all cancelled after a yes", async () => {
  await reset();
  assert.match((await speak("do I have any reminders")).response, /do not have any reminders/);
  await speak("remind me tomorrow at 9am to call the vet");
  await speak("remind me tomorrow at 2pm to pay the workers");
  for (const phrase of ["what reminders do I have", "do I have any reminders", "what are my reminders", "show my reminders", "reminders"]) {
    const said = await speak(phrase);
    assert.match(said.response, /You have 2 reminders: 1, .*(?:call the vet|pay the workers).*; 2, /, `${phrase} -> ${said.response}`);
  }
  assert.match((await speak("nina vikumbusho gani", { language: "sw" })).response, /Una vikumbusho 2/);
  // change the last one
  const changed = await speak("change it to 10am");
  assert.match(changed.response, /I changed the reminder to pay the workers: it is now at 10:00 am/);
  assert.equal(local((await stored()).find(item => item.task === "pay the workers").scheduledAt, "Africa/Lagos").slice(11), "10:00");
  // change a named one
  await speak("move the vet reminder to tomorrow at 4pm");
  assert.equal(local((await stored()).find(item => item.task === "call the vet").scheduledAt, "Africa/Lagos").slice(11), "16:00");
  // cancel one by its words, not the newest
  assert.match((await speak("cancel my reminder to call the vet")).response, /Canceled REM-\d+: call the vet/);
  assert.deepEqual((await stored()).map(item => item.task), ["pay the workers"]);
  // cancel all: asked first, nothing happens until yes, and "no" keeps them
  await speak("remind me tomorrow at 5pm to feed the goats");
  await speak("remind me tomorrow at 6pm to lock the gate");
  const ask = await speak("cancel all my reminders");
  assert.match(ask.response, /Cancel all 3 reminders\?/);
  assert.match((await speak("no")).response, /kept your reminders/);
  assert.equal((await stored()).length, 3, "nothing is cancelled without the yes");
  await speak("cancel all my reminders");
  assert.match((await speak("yes")).response, /canceled all 3 reminders/);
  assert.deepEqual(await stored(), []);
  // cancelling when there are several and none is named does not guess
  await speak("remind me tomorrow at 9am to call the vet"); await speak("remind me tomorrow at 2pm to pay the workers");
  const unnamed = await speak("cancel my reminder");
  assert.match(unnamed.response, /Which one should I cancel\?/);
  assert.equal((await stored()).length, 2);
});

test("a reminder is in the person's own time zone: the device's zone when sent, else their country's (Lagos here)", async () => {
  await reset();
  await speak("remind me tomorrow at 7am to check the tank A");
  await speak("remind me tomorrow at 7am to check the tank B", { timeZone: "Africa/Nairobi" });
  const list = await stored();
  const a = list.find(item => /A$/.test(item.task)); const b = list.find(item => /B$/.test(item.task));
  assert.equal(new Date(a.scheduledAt).getUTCHours(), 6, "7am Lagos (UTC+1) is 06:00 UTC");
  assert.equal(new Date(b.scheduledAt).getUTCHours(), 4, "7am Nairobi (UTC+3) is 04:00 UTC");
  assert.equal(a.timeZone, "Africa/Lagos"); assert.equal(b.timeZone, "Africa/Nairobi");
  await reset();
});

test("'what time is it' is the person's local time, never UTC, and 'what day is it today' is the date", async () => {
  const time = await speak("what time is it");
  assert.doesNotMatch(time.response, /UTC|GMT/);
  const expected = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", timeZone: "Africa/Lagos" }).format(new Date());
  const hourMinute = time.response.match(/It is (\d{1,2}:\d{2} [AP]M)/);
  assert.ok(hourMinute, time.response);
  assert.ok(Math.abs(Date.parse(`2000-01-01 ${hourMinute[1]}`) - Date.parse(`2000-01-01 ${expected}`)) <= 120000 || Math.abs(Date.parse(`2000-01-01 ${hourMinute[1]}`) - Date.parse(`2000-01-01 ${expected}`)) >= 86400000 - 120000, `${hourMinute[1]} vs ${expected}`);
  const nairobi = await speak("what time is it", { timeZone: "Africa/Nairobi" });
  assert.notEqual(nairobi.response.match(/It is (\d{1,2}:\d{2} [AP]M)/)?.[1], hourMinute[1], "the device's zone is used");
  const weekday = new Intl.DateTimeFormat("en-US", { weekday: "long", timeZone: "Africa/Lagos" }).format(new Date());
  const day = await speak("what day is it today");
  assert.match(day.response, new RegExp(`Today is ${weekday}`));
  assert.doesNotMatch(day.response, /weather|temperature|grandma|heat/i);
  const daySw = await speak("leo ni siku gani", { language: "sw" });
  assert.match(daySw.response, /Leo ni /);
});

test("politeness and filler never end up in the reminder", async () => {
  await reset();
  await speak("could you maybe remind me to take my medicine in 20 minutes");
  await speak("abeg remind me to buy seed tomorrow at 7am");
  await speak("remind you to maybe remind me to carry the keys tomorrow at 8am");
  await speak("tafadhali nikumbushe kesho saa mbili asubuhi kumpigia daktari simu", { language: "sw" });
  const tasks = (await stored()).map(item => item.task).sort();
  assert.deepEqual(tasks, ["buy seed", "carry the keys", "kumpigia daktari simu", "take my medicine"]);
});
