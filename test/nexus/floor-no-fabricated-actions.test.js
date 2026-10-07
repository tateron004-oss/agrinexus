"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

// The older "floor" router matched loose words to demo workflows on seeded demo data and then said "Done". A real person's question or statement must never create an order, stage a payment,
// issue a certificate, enrol them, or move their job application. These tests drive both the spoken tool route and the older command route and check the reply AND the stored state.

const root = path.resolve(__dirname, "..", "..");
const port = 15870;
const base = `http://localhost:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "floor-guard-"));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let server;
let cookie = "";
let xff = 1;
async function waitFor(url) { for (let i = 0; i < 120; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } } throw new Error(`${url} did not become reachable`); }
async function post(route, body) {
  const res = await fetch(`${base}${route}`, { method: "POST", headers: { "content-type": "application/json", cookie, "x-forwarded-for": `10.8.0.${(xff += 1) % 250}` }, body: JSON.stringify(body) });
  return { status: res.status, body: await res.json().catch(() => ({})) };
}
// The spoken tool route.
async function say(command, language = "en") {
  const { status, body } = await post("/api/voice/realtime/tool", { name: "nexus_general_conversation", arguments: { command, language }, language });
  assert.equal(status, 200, `voice route status for "${command}"`);
  const out = body.output || body.result || body;
  return { intent: out.intent || body.intent || body.capability || "", response: String(out.response || body.response || ""), raw: body };
}
// The older command route.
async function type(command) {
  const { status, body } = await post("/api/agent/command", { command, conversational: true });
  assert.equal(status, 200, `command route status for "${command}"`);
  const result = body.commandResult || body;
  return { intent: result.intent || "", response: String(result.response || ""), raw: body };
}
const both = [["voice", say], ["command", type]];
async function state() {
  const res = await fetch(`${base}/api/state`, { headers: { cookie } });
  const body = await res.json();
  const profile = body.profile || {};
  return {
    orders: (profile.orders || []).length,
    certificates: (profile.certificates || []).length,
    enrollments: (profile.enrollments || []).length,
    learningHours: profile.learningHours || 0,
    stage: profile.candidateStage,
    applications: (profile.applications || []).length,
    walletTransactions: (profile.walletTransactions || []).length,
    wallet: profile.wallet && typeof profile.wallet === "object" ? JSON.stringify(profile.wallet) : String(profile.wallet),
    pending: body.profile?.agentPendingAction ? body.profile.agentPendingAction.tool || body.profile.agentPendingAction.kind || "pending" : null
  };
}
async function unchanged(label, fn) {
  const before = await state();
  const out = await fn();
  const after = await state();
  assert.deepEqual({ ...after, pending: null }, { ...before, pending: null }, `${label}: stored state changed`);
  return out;
}

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), path.join(dir, "db.json"));
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: path.join(dir, "db.json"), AGRINEXUS_SPACES_PATH: path.join(dir, "dir.json"), OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", AGRINEXUS_TRUST_PROXY: "true", AGRINEXUS_AI_AGENT_RATE_LIMIT_PER_WINDOW: "100000", AGRINEXUS_RATE_LIMIT_PER_WINDOW: "100000", DATABASE_URL: "", AGRINEXUS_STATE_STORE: "json" },
    stdio: "ignore", windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  const login = await post("/api/login", { email: "user@agrinexus.org", password: "User2026!" });
  assert.equal(login.status, 200);
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" }) });
  cookie = (res.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ");
  assert.ok(cookie, "signed in");
});
test.after(() => { server.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

// ---------------------------------------------------------------------------------------------- 1. no fabricated orders
const NOT_AN_ORDER = [
  "what is the price of maize in Nakuru market today",
  "text John that his order is ready",
  "sold 20 crates of tomatoes at 1200 each to the market",
  "how far is Kakamega",
  "how much water does tomato need with drip irrigation",
  "how do I get to Kisumu market",
  "order me a pizza",
  "order me a taxi",
  "book a flight"
];
for (const [route, ask] of both) {
  test(`${route}: questions, statements and unrelated requests create no order, field task or recommendation record`, async () => {
    for (const phrase of NOT_AN_ORDER) {
      const out = await unchanged(phrase, () => ask(phrase));
      assert.doesNotMatch(out.response, /AN-ORD-AGENT|Robusta|AN-FIELD-DRC|Created AN-|Assigned AN-|supervised AI recommendation/i, `"${phrase}" -> ${out.response}`);
      assert.doesNotMatch(out.intent, /^(trade\.market_review|drone\.|ai\.copilot)/, `"${phrase}" -> ${out.intent}`);
    }
  });
}
test("the floor says plainly that it could not do a farm statement it cannot handle, and saved nothing", async () => {
  const out = await unchanged("sold tomatoes", () => say("sold 20 crates of tomatoes at 1200 each to the market"));
  assert.match(out.response, /couldn't|could not|no money moved|nothing was saved/i);
});
test("'where is my delivery order 1234' does not report a seeded demo order as the person's", async () => {
  for (const [, ask] of both) {
    const out = await unchanged("order 1234", () => ask("where is my delivery order 1234"));
    assert.match(out.response, /couldn't find an order numbered 1234/i);
    assert.doesNotMatch(out.response, /AN-ORD-|Robusta|Kinshasa/i);
  }
});
test("an explicit, unambiguous order request still reaches the order tool (confirmation first)", async () => {
  const before = await state();
  const out = await type("create the order");
  assert.equal(out.intent, "conversation.pending_action");
  assert.equal((await state()).orders, before.orders, "nothing is created before the person confirms");
  await type("no");
});

// ---------------------------------------------------------------------------------------------- 2. money
const NOT_A_PAYMENT = [
  "send 5000 to John on mpesa",
  "withdraw 10000 from my wallet",
  "what's my wallet balance",
  "tuma elfu mbili kwa Juma",
  "nimepokea elfu tano kwa mpesa kutoka kwa Otieno",
  "sold 1 goat 12000 cash and 3 chickens 4500 mpesa",
  "make a payment",
  "pay Mama Njeri 2000"
];
for (const [route, ask] of both) {
  test(`${route}: nothing is staged or moved for send, withdraw, balance and receipt sentences, and a following yes does nothing`, async () => {
    for (const phrase of NOT_A_PAYMENT) {
      const lang = /\b(tuma|nimepokea)\b/.test(phrase) ? "sw" : "en";
      const out = await unchanged(phrase, () => (route === "voice" ? say(phrase, lang) : ask(phrase)));
      assert.doesNotMatch(out.intent, /pending_action|confirmation/, `"${phrase}" staged something: ${out.intent}`);
      const yes = await unchanged(`yes after ${phrase}`, () => ask("yes"));
      assert.doesNotMatch(yes.response, /settle|Posted|payout|Delivered yet/i, `yes after "${phrase}" -> ${yes.response}`);
      const after = await state();
      assert.equal(after.pending, null, `"${phrase}" left a pending action`);
    }
  });
}
test("send and withdraw say plainly that Kyro cannot send money, in the person's language", async () => {
  const en = await say("send 5000 to John on mpesa");
  assert.match(en.response, /I can't send money for you/i);
  assert.match(en.response, /M-Pesa or bank app/i);
  assert.match(en.response, /paid John 5000/);
  const sw = await type("tuma elfu mbili kwa Juma");
  assert.match(sw.response, /Siwezi kutuma pesa/);
});
test("a balance question is not guessed", async () => {
  const out = await type("what's my wallet balance");
  assert.match(out.response, /can't see your M-Pesa, bank or wallet balance/i);
  assert.doesNotMatch(out.response, /\d{3,}/);
});
test("a payment confirmation runs only for an order named in the prompt, with its id and amount stated", async () => {
  const staged = await type("settle order AN-ORD-0011");
  assert.equal(staged.intent, "conversation.pending_action");
  assert.match(staged.response, /AN-ORD-0011/);
  assert.match(staged.response, /NGN 12800/);
  assert.match(staged.response, /No real money is sent/i);
  assert.equal((await state()).pending, "trade.wallet_payment");
  await type("no");
  // An order that does not exist is not staged at all.
  const none = await type("settle order AN-ORD-9999");
  assert.doesNotMatch(none.intent, /pending_action/);
  assert.equal((await state()).pending, null);
});

// ---------------------------------------------------------------------------------------------- 3. certificates
for (const [route, ask] of both) {
  test(`${route}: certificate wording never issues one without study`, async () => {
    for (const phrase of ["give me my certificate", "show my certificates", "what jobs can I do with a form four certificate", "my certificate was stolen", "complete my lesson", "take quiz", "issue my certificate"]) {
      const out = await unchanged(phrase, () => ask(phrase));
      assert.doesNotMatch(out.response, /AN-CERT-\d+ for|Issued AN-CERT|Completed the next/i, `"${phrase}" -> ${out.response}`);
    }
    const give = await ask("give me my certificate");
    assert.match(give.response, /haven't finished a course yet/i);
    assert.match(give.response, /continue my course/i);
    const show = await ask("show my certificates");
    assert.match(show.response, /no certificates yet/i);
  });
}
test("lessons and quizzes are not completed on a voice command", async () => {
  const lesson = await unchanged("lesson", () => say("complete my lesson"));
  assert.match(lesson.response, /can't mark one as done/i);
  const quiz = await unchanged("quiz", () => say("take quiz"));
  assert.match(quiz.response, /can't pass it for you/i);
});

// ---------------------------------------------------------------------------------------------- 4. read-only questions, applications
for (const [route, ask] of both) {
  test(`${route}: course and job questions are answered read-only`, async () => {
    for (const phrase of ["what courses do you have", "how far am I", "how many courses finished", "change lessons to swahili", "show my applications", "withdraw my application", "jobs for old people, i am 62"]) {
      const out = await unchanged(phrase, () => ask(phrase));
      assert.doesNotMatch(out.response, /Advanced .* to \d+%|Matched candidate/i, `"${phrase}" -> ${out.response}`);
    }
    const courses = await ask("what courses do you have");
    assert.match(courses.response, /Digital Foundations/);
    const apps = await ask("show my applications");
    assert.match(apps.response, /Field Operations Agent/);
    assert.match(apps.response, /Application Submitted/);
  });
}
test("'apply for <role>' + yes applies to the named role, or says it cannot find it, and says the engine is practice", async () => {
  const none = await unchanged("unknown role", () => say("apply for a job at the moon"));
  assert.match(none.response, /can't find a role called/i);
  const yesAfterNone = await unchanged("yes after unknown role", () => say("yes"));
  assert.doesNotMatch(yesAfterNone.response, /Field Operations Agent|Done/i);
  const which = await unchanged("no role named", () => type("apply for the first one"));
  assert.match(which.response, /Which job do you want to apply for/i);
  const staged = await type("apply for the telehealth assistant job");
  assert.equal(staged.intent, "conversation.pending_action");
  assert.match(staged.response, /Telehealth Access Assistant/);
  assert.match(staged.response, /practice application: no employer has received it/i);
  assert.doesNotMatch(staged.response, /Field Operations Agent/);
  const before = await state();
  const done = await type("yes");
  assert.doesNotMatch(done.response, /Field Operations Agent/);
  assert.equal((await state()).stage, before.stage, "the candidate stage is not moved backwards");
});
test("matching a person to a role never moves a later stage back", async () => {
  const before = await state();
  const out = await type("match me to a role");
  assert.ok(out.response);
  const after = await state();
  assert.equal(after.stage, before.stage);
  assert.equal(after.applications, before.applications, "a match is not an application");
});
test("explicit course requests still work", async () => {
  const before = await state();
  const out = await say("continue my course");
  assert.match(out.response, /Advanced Digital Foundations/);
  assert.equal((await state()).enrollments, before.enrollments + 1);
});

// ---------------------------------------------------------------------------------------------- 5. scams
for (const [route, ask] of both) {
  test(`${route}: a PIN, fee or ID request is warned about and nothing is staged`, async () => {
    for (const phrase of ["recruiter wants my ID and mpesa PIN", "pay 5000 to get a job abroad", "a man on whatsapp says pay 3000 registration fee for visa to canada", "the loan officer needs my ID card and my M-Pesa PIN"]) {
      const out = await unchanged(phrase, () => ask(phrase));
      assert.match(out.response, /scam|careful/i, `"${phrase}" -> ${out.response}`);
      assert.match(out.response, /never share your PIN|Do not send money/i);
      assert.doesNotMatch(out.intent, /pending_action/);
      const yes = await unchanged(`yes after ${phrase}`, () => ask("yes"));
      assert.doesNotMatch(yes.response, /Done|Posted|Shortlist|verified/i);
      assert.equal((await state()).pending, null);
    }
  });
}
test("the scam warning is in Kiswahili when the person writes Kiswahili", async () => {
  const out = await type("mwajiri anataka pin yangu");
  assert.match(out.response, /Usimpe mtu yeyote PIN/);
  const fee = await type("lipa elfu tano ili nipate kazi ughaibuni");
  assert.match(fee.response, /utapeli/);
});
test("ordinary PIN and job questions are not mistaken for scams", async () => {
  for (const phrase of ["how do I change my pin", "my job interview is tomorrow"]) {
    const out = await type(phrase);
    assert.doesNotMatch(out.intent, /scam/);
  }
});

// ---------------------------------------------------------------------------------------------- a certificate is issued once the course is genuinely done
// (Placed before the SMS tests only for reading order; it runs in file order, and later tests do not depend on certificate counts.)
test("after every lesson and a real quiz result, asking for the certificate issues it exactly once", async () => {
  const partial = await post("/api/learning/lesson", { moduleIndex: 0 });
  assert.equal(partial.status, 200);
  const early = await unchanged("one lesson only", () => say("give me my certificate"));
  assert.match(early.response, /haven't finished all the lessons/i);
  for (const moduleIndex of [1, 2]) assert.equal((await post("/api/learning/lesson", { moduleIndex })).status, 200);
  const noQuiz = await unchanged("lessons but no quiz", () => say("give me my certificate"));
  assert.match(noQuiz.response, /quiz result is still missing/i);
  assert.equal((await post("/api/learning/quiz", {})).status, 200);
  const before = await state();
  const issued = await say("give me my certificate");
  assert.match(issued.response, /Issued AN-CERT-\d+ for Digital Foundations/);
  assert.equal((await state()).certificates, before.certificates + 1);
  const again = await unchanged("asking again", () => type("give me my certificate"));
  assert.match(again.response, /AN-CERT-\d+/);
});

// ---------------------------------------------------------------------------------------------- text messages and saving numbers
for (const [route, ask] of both) {
  test(`${route}: an SMS stays an SMS (declined), and saving a number never stages a call`, async () => {
    const sms = await unchanged("sms", () => ask("Send an sms to +254712345678 saying hello"));
    assert.match(sms.response, /can't send text messages/i);
    assert.doesNotMatch(sms.intent, /call\./);
    const save = await ask("Hifadhi namba ya Juma +254722111222");
    assert.doesNotMatch(save.intent, /call\.|pending_action/);
    assert.equal((await state()).pending, null);
  });
}
