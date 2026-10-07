"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawn } = require("node:child_process");
const crisisPhrases = require("../../public/kyro-crisis-phrases.js");
const { readSafetyDetailed, safetyTurn } = require("../../nexus/companion/safety.js");
const { t } = require("../../nexus/i18n/index.js");

// Found by the user-journey sweep, as a second signed-in Standard User on a copy of the app:
//  1. "What do you remember about me" answered with another account's reminders and memories (it counted and quoted the one shared memory).
//  2. "Call Grace" offered another account's private contact (the lookup read every account's contacts, buyers, patients and job applicants).
//  3. "What is on my calendar" read the seeded demo schedule out as the person's own next shift.
//  4. A PIN or password asked to be saved in Kiswahili (or Sheng / Pidgin) was not refused; only the English wordings were.
//  5. A wider read-back found more of the same shape: support tickets, video sessions, platform drafts / searches / day plans, the user-testing memory and "execute my plan".

const root = path.resolve(__dirname, "..", "..");
const port = 15931;
const base = `http://localhost:${port}`;
const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "nexus-cross-account-"));
const tempDbPath = path.join(tempDir, "db.json");
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
let server; let adminCookie; let aCookie; let bCookie; let aEmail; let bEmail;
let forwarded = 10;
async function call(pathname, cookie, body, method = "POST") {
  forwarded += 1;
  const res = await fetch(`${base}${pathname}`, { method, headers: { "content-type": "application/json", "x-forwarded-for": `10.31.${forwarded >> 8}.${forwarded & 255}`, ...(cookie ? { cookie } : {}) }, body: method === "GET" ? undefined : JSON.stringify(body || {}) });
  const text = await res.text();
  let json; try { json = JSON.parse(text); } catch { json = null; }
  return { status: res.status, json, text };
}
async function login(email, password) {
  forwarded += 1;
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json", "x-forwarded-for": `10.33.${forwarded >> 8}.${forwarded & 255}` }, body: JSON.stringify({ email, password }) });
  assert.equal(res.status, 200, `${email} must be able to sign in`);
  return res.headers.get("set-cookie").split(";")[0];
}
const say = (cookie, command, language = "en") => call("/api/voice/realtime/tool", cookie, { name: "nexus_general_conversation", correlationId: `xacct-${Math.random().toString(36).slice(2, 8)}`, arguments: { command, language }, language });
const type = (cookie, command, language = "en") => call("/api/agent/command", cookie, { command, conversational: true, inputMode: "voice", outputMode: "voice", language });
const answer = r => String(r.json?.response || r.json?.commandResult?.response || r.json?.message || r.text);
const MARK = `zzxa${crypto.randomUUID().slice(0, 6)}`;
// a name has letters only
const LETTERS = Array.from({ length: 6 }, () => "abcdefghjkmnpqrstuvwxyz"[crypto.randomInt(0, 23)]).join("");
const GRACE = `Grace Zzx${LETTERS}`;
const has = text => String(text).toLowerCase().includes(MARK);

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), tempDbPath);
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, AGRINEXUS_SPACES_PATH: path.join(tempDir, "spaces.json"), OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", AGRINEXUS_TRUST_PROXY: "true", AGRINEXUS_AI_AGENT_RATE_LIMIT_PER_WINDOW: "100000", AGRINEXUS_RATE_LIMIT_PER_WINDOW: "100000", NEXUS_FILE_STORAGE_DIR: path.join(tempDir, "uploads") }, stdio: "ignore" });
  for (let i = 0; i < 100; i += 1) { try { if ((await fetch(`${base}/api/healthz`)).ok) break; } catch { await wait(150); } }
  adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  aEmail = `a-${crypto.randomUUID().slice(0, 8)}@example.com`; bEmail = `b-${crypto.randomUUID().slice(0, 8)}@example.com`;
  const aPassword = crypto.randomBytes(9).toString("base64url"); const bPassword = crypto.randomBytes(9).toString("base64url");
  assert.equal((await call("/api/admin/test-user", adminCookie, { email: aEmail, name: "First User", password: aPassword })).status, 200);
  assert.equal((await call("/api/admin/test-user", adminCookie, { email: bEmail, name: "Second User", password: bPassword })).status, 200);
  aCookie = await login(aEmail, aPassword); bCookie = await login(bEmail, bPassword);
});
test.after(() => {
  server.kill();
  fs.rmSync(tempDir, { recursive: true, force: true });
});

test("'what do you remember about me' is only the asker's own memories, by voice and by the command box", async () => {
  assert.equal((await say(aCookie, `Remind me tomorrow at 9am to pay ${MARK}Okello`)).status, 200);
  assert.equal((await say(aCookie, `Remember that I like ${MARK}beans`)).status, 200);
  for (const question of ["what do you remember about me", "what have you learned", "show memory"]) {
    const own = answer(await say(aCookie, question));
    assert.ok(has(own), `the person who said it is told it: ${question} -> ${own}`);
    for (const [channel, ask] of [["voice", say], ["command box", type]]) {
      const other = await ask(bCookie, question);
      assert.ok(!has(other.text), `another Standard User is not told it (${channel}): ${question}`);
    }
  }
  // someone who has said nothing yet is told so, not given the counts of everyone's memories
  const freshEmail = `c-${crypto.randomUUID().slice(0, 8)}@example.com`; const freshPassword = crypto.randomBytes(9).toString("base64url");
  assert.equal((await call("/api/admin/test-user", adminCookie, { email: freshEmail, name: "Third User", password: freshPassword })).status, 200);
  const freshCookie = await login(freshEmail, freshPassword);
  const empty = answer(await say(freshCookie, "what do you remember about me"));
  assert.match(empty, /do not have long-term memories yet/i, empty);
  assert.ok(!/\b\d+ long-term memories/.test(empty));
  // Kiswahili phrasing and the priority slot
  assert.ok(!has((await say(bCookie, "unakumbuka nini kunihusu", "sw")).text));
  assert.ok(!has((await say(bCookie, "what is my priority")).text));
  // what the person's own state shows is theirs only
  assert.ok(!has((await call("/api/state", bCookie, null, "GET")).text));
  assert.ok(has((await call("/api/state", adminCookie, null, "GET")).text), "an Admin can still see it");
});

test("'call Grace' only looks in the asker's own contacts", async () => {
  const saved = answer(await say(aCookie, `Save ${GRACE} number +254799888777`));
  assert.match(saved, /saved/i, saved);
  const own = answer(await say(aCookie, `call ${GRACE}`));
  assert.match(own, /found/i, `the person who saved the number is offered it: ${own}`);
  for (const ask of [say, type]) {
    const other = await ask(bCookie, `call ${GRACE}`);
    assert.ok(!/I found/i.test(answer(other)), `no match is offered: ${answer(other)}`);
    assert.ok(!other.text.includes("254799888777") && !other.text.includes("+254 7998"), "the number is not shown to the other person");
    assert.match(answer(other), /(do not have|don't have|number|who should)/i, "the other person is asked for a number instead");
  }
  // the number the other person gives is for their own contact, not a change to the first person's
  assert.equal((await say(bCookie, `save ${GRACE} number +254711000999`)).status, 200);
  const stillOwn = await call("/api/state", aCookie, null, "GET");
  assert.ok(stillOwn.text.includes("254799888777"), "the first person's contact is unchanged");
  assert.ok(!stillOwn.text.includes("254711000999"), "and the second person's number is not in the first person's book");
});

test("a calendar question is answered from the person's own appointments, never from the seeded demo schedule", async () => {
  const seeded = (await call("/api/state", adminCookie, null, "GET")).json.profile.shiftSchedule;
  assert.ok(seeded.length > 0, "the demo data has a shift schedule");
  for (const question of ["what is on my calendar", "do I have any appointments"]) {
    const reply = answer(await say(bCookie, question));
    assert.ok(!/Field Operations Agent|workforce schedule item/i.test(reply), `the demo shift is not read out: ${reply}`);
  }
  assert.match(answer(await say(bCookie, "what is on my calendar")), /I don't see any appointments for you/);
  assert.equal(((await call("/api/state", bCookie, null, "GET")).json.profile.shiftSchedule || []).length, 0, "the seeded shifts are not shown as the person's schedule");
});

test("a PIN or password asked to be saved is refused in Kiswahili, Sheng and Pidgin as well, and is not kept", async () => {
  const refused = ["Kumbuka kwamba nenosiri langu ni simba123", "Andika PIN yangu ni 4321", "Weka namba yangu ya siri 5566", "Kumbuka password yangu ni abc123", "Hifadhi neno la siri: mama2020",
    "Andika akaunti ya benki namba 0123456789", "Weka kadi namba 4111111111111111", "kumbuka pini yangu 4821", "Andika namba ya kadi 4111 1111 1111 1111", "hifadhi neno langu la siri ni simba1"];
  for (const text of refused) assert.equal(crisisPhrases.secretLanguage(text), "sw", text);
  for (const text of ["my pin na 4821", "abeg keep my password", "remember that my mpesa pin is 4821", "add my pin 4821 to my notes", "save my password for the bank: abc123"]) assert.equal(crisisPhrases.secretLanguage(text), "en", text);
  for (const text of ["Nikumbushe kesho saa tatu kulipa deni la Bw. Okello", "Weka mkutano kwenye kalenda kesho saa nne asubuhi", "Andika maziwa kwenye orodha ya ununuzi", "weka namba ya Mama 0712345678", "Nikumbushe kulipa kadi",
    "remember to change my password", "my pin is 4821", "how do I change my pin", "save my atm pin", "andika nambari ya simu 0712345678"]) assert.equal(crisisPhrases.secretLanguage(text), null, text);

  // the companion reader answers in the language it was asked in
  assert.equal(readSafetyDetailed("Andika PIN yangu ni 4321")?.kind, "secret");
  assert.equal(readSafetyDetailed("Andika PIN yangu ni 4321")?.language, "sw");
  assert.equal(await safetyTurn({ text: "Weka namba yangu ya siri 5566", circle: { activeMembers: async () => [] }, push: async () => {}, tenantId: "t", userId: "u", userName: "A", locale: "en" }), t("sw", "safety.secretRefused"));

  // and the app refuses it on every route before anything keeps it
  const secret = `${MARK}9${crypto.randomInt(1000, 9999)}`;
  for (const [text, language] of [[`Andika PIN yangu ni ${secret}`, "sw"], [`Kumbuka kwamba nenosiri langu ni ${secret}`, "sw"], [`my pin na ${secret}`, "en"], [`remember that my mpesa pin is ${secret}`, "en"]]) {
    for (const ask of [say, type]) {
      const reply = await ask(aCookie, text, language);
      assert.equal(reply.status, 200);
      assert.equal(answer(reply), t(language, "safety.secretRefused"), `${text} -> ${answer(reply)}`);
      assert.ok(!reply.text.includes(secret), "the secret is not echoed back");
    }
  }
  const state = await call("/api/state", aCookie, null, "GET");
  assert.ok(!state.text.includes(secret), "the secret is not in the person's history, memory or anything else");
  assert.ok(!fs.readFileSync(tempDbPath, "utf8").includes(secret), "and was not written to storage");
  // an ordinary Kiswahili reminder is still handled, not refused
  assert.ok(!/Sitahifadhi PIN/.test(answer(await say(aCookie, "Nikumbushe kesho saa tatu asubuhi kulipa deni la Bw. Okello", "sw"))));
});

test("the other lists a person makes (support tickets, video sessions, platform drafts, searches and day plans, user-testing memory) are shown to them and an Admin only", async () => {
  const body = text => ({ subject: text, detail: text, title: text, summary: text, topic: text, query: text, goal: text, participantName: text, text, message: text, audience: "partner" });
  const made = [["/api/support/ticket", `${MARK}ticket`], ["/api/video/session", `${MARK}video`], ["/api/platform-intelligence/draft", `${MARK}draft`], ["/api/platform-intelligence/search", `${MARK}search`],
    ["/api/platform-intelligence/daily-plan", `${MARK}plan`], ["/api/nexus/user-testing/memory", `${MARK}testing`]];
  for (const [route, text] of made) assert.equal((await call(route, aCookie, body(text))).status, 200, route);
  const own = (await call("/api/state", aCookie, null, "GET")).text.toLowerCase();
  const admin = (await call("/api/state", adminCookie, null, "GET")).text.toLowerCase();
  const other = (await call("/api/state", bCookie, null, "GET")).text.toLowerCase();
  for (const [route, text] of made) {
    assert.ok(admin.includes(text) || route === "/api/nexus/user-testing/memory", `an Admin sees ${route}`);
    assert.ok(!other.includes(text), `another Standard User does not see ${route} in /api/state`);
  }
  for (const route of ["/api/cloud-agent/status", "/api/cloud-agent/audit", "/api/nexus/user-testing/memory"]) assert.ok(!has((await call(route, bCookie, null, "GET")).text), `${route} does not return it either`);
  assert.ok(has(own), "the person who made them still sees them");
  assert.ok(has((await call("/api/nexus/user-testing/memory", aCookie, null, "GET")).text));
  // the other person cannot change or archive it
  const mem = (await call("/api/nexus/user-testing/memory", aCookie, null, "GET")).json.records.find(record => has(record.title));
  assert.equal((await call(`/api/nexus/user-testing/memory/${mem.id}/archive`, bCookie, {})).status, 404);
  // the first person's agent plan is not the other person's "first plan" to approve
  const planned = await call("/api/agent/plan", aCookie, { goal: `${MARK} plan the harvest` });
  const planId = (planned.json?.profile?.agentPlans || [])[0]?.id;
  if (planId) {
    const stolen = await call("/api/agent/execute", bCookie, { planId, approved: true });
    const after = await call("/api/state", aCookie, null, "GET");
    const theirPlan = (after.json.profile.agentPlans || []).find(plan => plan.id === planId);
    assert.ok(stolen.status !== 200 || !(theirPlan?.status === "executed"), "the other person cannot run it");
  }
});
