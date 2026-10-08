const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found against the real runtime: a Kenyan account whose language was Kiswahili typed an English danger sign with language "en" into /api/agent/command and got the KISWAHILI safety reply, because the safety
// answer treated "no Kiswahili word found" as "use the account language". The rule now (nexus/i18n/reply-language.js): the language of the words just typed wins; the request's language, then the account's,
// only decide when the words do not. These tests cover the rule itself, the safety answer the planner route uses, and the older command route and the voice tool route end to end (Kiswahili wording itself is untouched).
const root = path.resolve(__dirname, "..", "..");
const { replyLanguage } = require("../../nexus/i18n/reply-language.js");
const { safetyTurn } = require("../../nexus/companion/safety.js");
const { freePortSync } = require("../helpers/free-port.js");

const ENGLISH_DANGER = "my baby has a fever and is not feeding";
const SWAHILI_DANGER = "mtoto wangu ana homa na hanyonyi";
const looksSwahili = text => /\b(mtoto|mhudumu|kliniki|hospitali|afya|dharura|tafadhali|simu|sasa hivi|niko hapa)\b/i.test(text);

test("replyLanguage: the words win, the request language and then the account language only break a tie", () => {
  assert.equal(replyLanguage(ENGLISH_DANGER, { detected: "en", requested: "sw" }), "en");
  assert.equal(replyLanguage(ENGLISH_DANGER, { detected: "en", requested: "", account: "sw" }), "en");
  assert.equal(replyLanguage(SWAHILI_DANGER, { detected: "sw", requested: "en" }), "sw");
  assert.equal(replyLanguage("hapana", { detected: "en", requested: "sw" }), "sw", "no clear English words: the requested language is the default");
  assert.equal(replyLanguage("hapana", { detected: "en", requested: "", account: "sw" }), "sw", "no request language: the account language is the default");
  assert.equal(replyLanguage("hapana", { detected: "en" }), "en");
});

test("planner route's safety answer: English words in a Kiswahili locale are answered in English, Kiswahili words in an English locale in Kiswahili", async () => {
  const args = { circle: null, push: null, tenantId: "t-example", userId: "u-example", userName: "Test", country: "Kenya" };
  const english = await safetyTurn({ ...args, text: ENGLISH_DANGER, locale: "sw" });
  assert.ok(english && !looksSwahili(english), `expected English, got: ${english}`);
  const swahili = await safetyTurn({ ...args, text: SWAHILI_DANGER, locale: "en" });
  assert.ok(swahili && looksSwahili(swahili), `expected Kiswahili, got: ${swahili}`);
  const sameEnglish = await safetyTurn({ ...args, text: ENGLISH_DANGER, locale: "en" });
  assert.equal(english, sameEnglish, "the English wording is the same whichever account asked");
});

let server; let base; let swCookie; let enCookie;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-reply-language-words-win-db.json");
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
async function post(route, body, cookie) {
  const res = await fetch(`${base}${route}`, { method: "POST", headers: { "content-type": "application/json", ...(cookie ? { cookie } : {}) }, body: JSON.stringify(body) });
  return { res, json: await res.json().catch(() => ({})) };
}
async function accountWith(language, label, adminCookie) {
  const email = `reply-language-${label}@example.com`; const password = "Reply-language-test-1!";
  const made = await post("/api/admin/test-user", { email, name: `Reply ${label}`, password, country: "Kenya", language }, adminCookie);
  assert.equal(made.res.status, 200, JSON.stringify(made.json));
  const login = await post("/api/login", { email, password });
  return login.res.headers.get("set-cookie").split(";")[0];
}

test.before(async () => {
  const port = freePortSync();
  base = `http://localhost:${port}`;
  fs.copyFileSync(dbPath, tempDbPath);
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_OPENAI_NATIVE_ENABLED: "false" }, stdio: "ignore", windowsHide: true });
  for (let i = 0; i < 100; i += 1) { try { if ((await fetch(`${base}/api/healthz`)).ok) break; } catch { await wait(150); } }
  const admin = (await post("/api/login", { email: "admin@agrinexus.org", password: "Admin2026!" })).res.headers.get("set-cookie").split(";")[0];
  swCookie = await accountWith("sw", "sw", admin);
  enCookie = await accountWith("en", "en", admin);
});
test.after(async () => {
  server.kill(); await new Promise(resolve => server.once("exit", resolve));
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
});

const command = async (cookie, text, language) => (await post("/api/agent/command", { command: text, conversational: true, ...(language ? { language } : {}) }, cookie)).json.commandResult?.response || "";
const voiceTool = async (cookie, text, language) => (await post("/api/voice/realtime/tool", { name: "nexus_general_conversation", correlationId: `rl-${Math.random().toString(36).slice(2)}`, arguments: { command: text, ...(language ? { language } : {}) }, ...(language ? { language } : {}) }, cookie)).json.response || "";

for (const [routeName, ask] of [["older command route", command], ["voice tool route", voiceTool]]) {
  test(`${routeName}: English words in a Kiswahili account (language en, and with no language at all) are answered in English`, async () => {
    const withLanguage = await ask(swCookie, ENGLISH_DANGER, "en");
    assert.ok(withLanguage && !looksSwahili(withLanguage), `expected English, got: ${withLanguage}`);
    const noLanguage = await ask(swCookie, ENGLISH_DANGER);
    assert.ok(noLanguage && !looksSwahili(noLanguage), `expected English with no language given, got: ${noLanguage}`);
  });
  test(`${routeName}: Kiswahili words in an English account (language sw, and with no language at all) are answered in Kiswahili`, async () => {
    const withLanguage = await ask(enCookie, SWAHILI_DANGER, "sw");
    assert.ok(looksSwahili(withLanguage), `expected Kiswahili, got: ${withLanguage}`);
    const noLanguage = await ask(enCookie, SWAHILI_DANGER);
    assert.ok(looksSwahili(noLanguage), `expected Kiswahili with no language given, got: ${noLanguage}`);
  });
}
