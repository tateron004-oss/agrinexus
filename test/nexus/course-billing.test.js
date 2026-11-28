"use strict";
// Paying for Koach Learn courses (owner, 27 Nov 2026): "we are not going to accept losing money to teach", "i asking for my company to make a profit of three dollars per
// course ... in addition to the cost to take the courses", "No free courses at all", Stripe + Paystack, and Hausa / Yoruba / Igbo / Amharic priced on the full voice model.
// Everything here is made up: no real payment, account or learner.
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const plans = require("../../nexus/billing/course-plans.js");
const account = require("../../nexus/billing/course-account.js");
const { createCourseCheckout } = require("../../nexus/billing/course-checkout.js");
const { createCourseBilling, spokenMinutes } = require("../../nexus/billing/course-billing.js");
const text = require("../../nexus/billing/course-billing-text.js");
const study = require("../../public/kyro-koachlearn-study.js");
const kl = require("../../nexus/knowledge/koachlearn-courses.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { fakeMemory } = require("./farmwork-fake.js");

const ROOT = path.join(__dirname, "..", "..");
const read = rel => fs.readFileSync(path.join(ROOT, rel), "utf8");

test("every price pays what the course costs to teach and keeps at least $3 a course, even if every included voice minute is used", () => {
  for (const key of Object.keys(plans.PRICE_LISTS)) {
    for (const id of plans.PLAN_IDS) {
      const w = plans.worstCase(key, id);
      if (id === "voice") assert.ok(w.keptUsd >= 1, `${key} extra voice minutes are sold above their cost (kept $${w.keptUsd.toFixed(2)})`);
      else assert.ok(w.keptPerCourse >= plans.MIN_PROFIT_PER_COURSE, `${key} ${id}: keeps $${w.keptPerCourse.toFixed(2)} a course`);
    }
  }
  // the cost the rule is checked with: the full voice model for Level 1 and for Hausa, Yoruba, Igbo and Amharic
  assert.equal(plans.PRICE_LISTS["1|any|USD"].cost, "full");
  for (const key of ["2|full|USD", "3|full|USD", "3|full|NGN", "3|full|KES"]) assert.equal(plans.PRICE_LISTS[key].cost, "full", key);
  assert.equal(plans.MINUTES_PER_COURSE, 45, "a whole course by voice");
  assert.deepEqual([...plans.FULL_VOICE_LANGUAGES].sort(), ["am", "ha", "ig", "yo"]);
  // the four languages the server always gives the full voice model are the four priced on it
  assert.match(read("server.js"), /OPENAI_NATIVE_TOOL_ENGLISH_LANGUAGES/);
});

test("where a person lives sets the level and the currency; the language sets which price list", () => {
  assert.equal(plans.levelOf("Nigeria"), 3); assert.equal(plans.levelOf("NG"), 3); assert.equal(plans.levelOf("Kenya"), 3);
  assert.equal(plans.levelOf("Mexico"), 2); assert.equal(plans.levelOf("Egypt"), 2);
  assert.equal(plans.levelOf("United States"), 1); assert.equal(plans.levelOf(""), 1, "unknown: Level 1");
  const price = (country, lang, id = "course1") => { const list = plans.priceList({ country, lang }); const p = plans.planFrom(list, id); return plans.formatPrice(p.amount, p.currency); };
  assert.equal(price("Nigeria", "en"), "₦7,700");
  assert.equal(price("Nigeria", "ha"), "₦14,000");
  assert.equal(price("Nigeria", "yo", "course10"), "₦137,000");
  assert.equal(price("Kenya", "sw"), "KSh 750");
  assert.equal(price("Ghana", "en"), "$6");
  assert.equal(price("Mexico", "es"), "$9");
  assert.equal(price("United States", "en"), "$19");
  assert.equal(price("United States", "ha"), "$19", "Level 1 is the same price in every language");
  assert.equal(price("United States", "en", "course10"), "$155");
  const list = plans.priceList({ country: "Nigeria", lang: "en" });
  assert.deepEqual(list.plans.map(p => [p.id, p.voiceMinutes]), [["course1", 45], ["course3", 135], ["course10", 450], ["year", 360], ["voice", 30]]);
});

test("what a learner bought: granted once, a course slot used the first time a course is studied, all courses for a year, voice minutes", () => {
  const t0 = Date.parse("2026-12-01T10:00:00Z");
  let d = account.grant(null, { reference: "cs_1", plan: "course3", courses: 3, voiceMinutes: 135, amount: 4900, currency: "USD", provider: "stripe" }, t0).data;
  const again = account.grant(d, { reference: "cs_1", plan: "course3", courses: 3, voiceMinutes: 135 }, t0);
  assert.equal(again.granted, false, "the same payment is never granted twice");
  assert.equal(account.summary(d, t0).coursesLeft, 3);
  let c = account.choose(d, "agri-farm-records", t0); assert.equal(c.why, "slot"); d = c.data;
  c = account.choose(d, "agri-farm-records", t0); assert.equal(c.why, "chosen", "studying it again uses no slot"); assert.equal(c.changed, false);
  d = account.choose(d, "b", t0).data; d = account.choose(d, "c", t0).data;
  c = account.choose(d, "d", t0); assert.equal(c.ok, false); assert.equal(c.why, "none");
  assert.equal(account.summary(d, t0).coursesLeft, 0);
  // a year later the pack has ended
  assert.equal(account.choose(d, "agri-farm-records", t0 + 366 * 86400000).ok, false);
  // every course for a year
  let y = account.grant(null, { reference: "kl_y", plan: "year", courses: Infinity, voiceMinutes: 360 }, t0).data;
  assert.equal(account.choose(y, "anything", t0).why, "all");
  assert.equal(account.summary(y, t0).allCoursesUntil.slice(0, 4), "2027");
  // voice minutes
  y = account.useVoice(y, 100.5);
  assert.equal(account.summary(y, t0).voiceLeft, 259.5);
  // extra voice minutes never end
  y = account.grant(y, { reference: "kl_v", plan: "voice", courses: 0, voiceMinutes: 30 }, t0).data;
  assert.equal(account.summary(y, t0 + 5 * 365 * 86400000).voiceTotal, 30);
});

// ---- the providers, made up ----
function fakeProviders({ stripePaid = true, paystackPaid = true, tamper = null } = {}) {
  const calls = []; const sessions = new Map(); const tx = new Map();
  const res = (status, body) => ({ ok: status < 300, status, json: async () => body });
  const fetchImpl = async (url, init = {}) => {
    calls.push({ url: String(url), method: init.method || "GET", headers: init.headers || {}, body: init.body || "" });
    const u = new URL(url);
    if (u.hostname === "api.stripe.com" && u.pathname === "/v1/checkout/sessions" && init.method === "POST") {
      const f = new URLSearchParams(init.body); const id = `cs_test_${sessions.size + 1}`;
      const meta = {}; for (const [k, v] of f) { const m = /^metadata\[(\w+)\]$/.exec(k); if (m) meta[m[1]] = v; }
      sessions.set(id, { id, url: `https://checkout.stripe.com/c/pay/${id}`, amount_total: Number(f.get("line_items[0][price_data][unit_amount]")) + (tamper === "amount" ? -100 : 0),
        currency: f.get("line_items[0][price_data][currency]"), metadata: meta, status: stripePaid ? "complete" : "open", payment_status: stripePaid ? "paid" : "unpaid" });
      return res(200, sessions.get(id));
    }
    if (u.hostname === "api.stripe.com" && u.pathname.startsWith("/v1/checkout/sessions/")) return res(200, sessions.get(decodeURIComponent(u.pathname.split("/").pop())) || {});
    if (u.hostname === "api.paystack.co" && u.pathname === "/transaction/initialize") {
      const b = JSON.parse(init.body); tx.set(b.reference, { ...b, status: paystackPaid ? "success" : "abandoned" });
      return res(200, { status: true, data: { authorization_url: `https://checkout.paystack.com/${b.reference}`, reference: b.reference } });
    }
    if (u.hostname === "api.paystack.co" && u.pathname.startsWith("/transaction/verify/")) {
      const t = tx.get(decodeURIComponent(u.pathname.split("/").pop()));
      return res(200, { status: true, data: t ? { reference: t.reference, status: t.status, amount: t.amount, currency: t.currency, metadata: t.metadata } : null });
    }
    return res(404, {});
  };
  return { fetchImpl, calls };
}
const ENV = { STRIPE_SECRET_KEY: "sk_test_x", PAYSTACK_SECRET_KEY: "sk_test_y", KOACHLEARN_STRIPE_WEBHOOK_SECRET: "whsec_test", KOACHLEARN_COURSES_PAID: "1" };

test("Stripe takes dollars and Paystack takes naira and shillings; the price is worked out on the server, and a payment is granted only when the provider says it is paid", async () => {
  const p = fakeProviders();
  const co = createCourseCheckout({ env: ENV, fetchImpl: p.fetchImpl, randomId: () => "abc123def456" });
  const us = await co.start({ tenantId: "t", userId: "u1", email: "learner@example.org", country: "United States", lang: "en", planId: "course10" });
  assert.equal(us.provider, "stripe");
  assert.match(us.url, /^https:\/\/checkout\.stripe\.com\//);
  const form = new URLSearchParams(p.calls[0].body);
  assert.equal(form.get("mode"), "payment");
  assert.equal(form.get("line_items[0][price_data][unit_amount]"), "15500");
  assert.equal(form.get("metadata[userId]"), "u1");
  assert.equal(form.get("metadata[listKey]"), "1|any|USD");
  assert.match(form.get("success_url"), /\?koachlearn_paid=stripe&ref=\{CHECKOUT_SESSION_ID\}$/);
  const ok = await co.confirm({ provider: "stripe", reference: us.reference });
  assert.equal(ok.paid, true);
  assert.deepEqual([ok.purchase.plan, ok.purchase.courses, ok.purchase.voiceMinutes, ok.purchase.userId], ["course10", 10, 450, "u1"]);

  const ng = await co.start({ tenantId: "t", userId: "u2", email: "learner@example.org", country: "Nigeria", lang: "ha", planId: "course1" });
  assert.equal(ng.provider, "paystack");
  const body = JSON.parse(p.calls.at(-1).body);
  assert.deepEqual([body.amount, body.currency, body.reference, body.metadata.listKey], [1400000, "NGN", "kl_abc123def456", "3|full|NGN"]);
  assert.match(body.callback_url, /\?koachlearn_paid=paystack$/);
  assert.equal((await co.confirm({ provider: "paystack", reference: ng.reference })).purchase.voiceMinutes, 45);
  await assert.rejects(() => co.start({ tenantId: "t", userId: "u3", email: "", country: "Kenya", lang: "sw", planId: "course1" }), /email/, "Paystack needs an email for the receipt");

  // a payment for less than the price is not a purchase; an unpaid checkout is not either
  const cheat = fakeProviders({ tamper: "amount" });
  const co2 = createCourseCheckout({ env: ENV, fetchImpl: cheat.fetchImpl });
  const s2 = await co2.start({ tenantId: "t", userId: "u1", email: "a@example.org", country: "United States", lang: "en", planId: "course1" });
  assert.deepEqual(await co2.confirm({ provider: "stripe", reference: s2.reference }), { paid: false, mismatch: true });
  const unpaid = fakeProviders({ stripePaid: false });
  const co3 = createCourseCheckout({ env: ENV, fetchImpl: unpaid.fetchImpl });
  const s3 = await co3.start({ tenantId: "t", userId: "u1", email: "a@example.org", country: "Canada", lang: "en", planId: "course1" });
  assert.equal((await co3.confirm({ provider: "stripe", reference: s3.reference })).paid, false);
  // not set up: no checkout
  const off = createCourseCheckout({ env: {}, fetchImpl: p.fetchImpl });
  await assert.rejects(() => off.start({ tenantId: "t", userId: "u1", email: "a@example.org", country: "Canada", lang: "en", planId: "course1" }), /not set up/);
});

test("the Stripe webhook is taken only with a good signature and a fresh time", () => {
  const now = 1_800_000_000_000;
  const co = createCourseCheckout({ env: ENV, fetchImpl: async () => ({}), now: () => now });
  const event = JSON.stringify({ id: "evt_1", type: "checkout.session.completed", data: { object: { id: "cs_test_9", payment_status: "paid", amount_total: 1900, currency: "usd",
    metadata: { kind: "koachlearn-courses", plan: "course1", listKey: "1|any|USD", userId: "u9", tenantId: "t" } } } });
  const sign = (t, body, secret = "whsec_test") => `t=${t},v1=${crypto.createHmac("sha256", secret).update(`${t}.${body}`).digest("hex")}`;
  const t = Math.floor(now / 1000);
  assert.equal(co.stripeWebhook(Buffer.from(event), sign(t, event)).userId, "u9");
  assert.throws(() => co.stripeWebhook(Buffer.from(event), sign(t, event, "whsec_wrong")), /signature/);
  assert.throws(() => co.stripeWebhook(Buffer.from(event), sign(t - 3600, event)), /signature/, "an old event is refused");
  const tampered = event.replace("1900", "100");
  assert.equal(co.stripeWebhook(Buffer.from(tampered), sign(t, tampered)), null, "signed, but not the price: nothing granted");
});

// ---- through the planner ----
const COURSES = { en: [{ i: 101, n: "Farm Records", c: 46, s: "Keeping records", d: "For farmers", g: "agri-farm-records" }] };
const PACK = { slug: "agri-farm-records", lang: "en", name: "Farm Records", chapters: [{ name: "Ch", lessons: [1, 2, 3].map(n => ({ title: `Lesson ${n}`, text: `Lesson ${n}: text`, check: [] })) }] };
function setup({ env = ENV, country = "Nigeria", guest = false, email = "learner@example.org" } = {}) {
  const rows = [];
  const records = {
    list: async q => rows.filter(r => r.owner_id === q.ownerId && r.workspace_id === q.workspaceId && r.record_type === q.recordType).slice(-1),
    upsertSingleton: async r => { const found = rows.find(x => x.owner_id === r.ownerId && x.workspace_id === r.workspaceId && x.record_type === r.recordType);
      if (found) { found.data = r.data; found.version += 1; return found; }
      const row = { record_id: `rec_${rows.length + 1}`, version: 1, owner_id: r.ownerId, workspace_id: r.workspaceId, record_type: r.recordType, classification: r.classification, data: r.data }; rows.push(row); return row; },
    update: async ({ recordId, expectedVersion, data }) => { const row = rows.find(x => x.record_id === recordId); if (!row || row.version !== expectedVersion) throw new Error("Record version conflict or record unavailable."); row.data = data; row.version += 1; return row; }
  };
  const providers = fakeProviders();
  const courseBilling = createCourseBilling({ env, records, checkout: createCourseCheckout({ env, fetchImpl: providers.fetchImpl }) });
  const koachLearn = kl.createKoachLearnCatalog({ fetchImpl: async url => {
    const file = String(url).split("/data/")[1].replace(/\.json$/, "");
    if (file === "meta") return { ok: true, status: 200, json: async () => ({ counts: {}, categories: [{ id: 46, name: "Agriculture" }] }) };
    return { ok: true, status: 200, json: async () => COURSES[file] || [] };
  } });
  const model = { plan: async () => { throw new Error("no planning model"); }, respond: async () => "A taught step. What do you already know?" };
  const planner = new OpenEndedPlanner({ model, tools: { list: async () => [] }, applications: { list: () => [] }, memory: Object.assign(fakeMemory(), { search: async () => [] }),
    koachLearn, studyPacks: { load: async () => PACK }, automationRecords: records, courseBilling, tutorSessions: require("../../nexus/tutor/tutor.js").createTutorSessions() });
  const permissions = guest ? ["tasks:create", "guest:restricted"] : ["tasks:create"];
  const ask = (t, { voiceOn = false, user = "u1" } = {}) => planner.plan({ command: { text: t, tenantId: "t", actorId: user, locale: "en" },
    context: { timeZone: "UTC", country, email, permissions, ...(voiceOn ? { voiceOn: true } : {}) } });
  return { ask, rows, providers, courseBilling };
}

test("through the planner: prices for where the learner lives, a course needs a purchase, the payment page as a link, and the course is taught once paid", async () => {
  const { ask, providers, courseBilling } = setup();
  const prices = await ask("How much are the courses?");
  assert.equal(prices.knowledge, "koachlearn-billing:prices");
  assert.match(prices.response, /^Courses with Kyro: 1 course ₦7,700, 3 courses ₦22,800, 10 courses ₦76,000, or every course for a year ₦75,000\. Each course includes 45 minutes of voice tutoring/);

  const blocked = await ask("Study course agri-farm-records en");
  assert.equal(blocked.knowledge, "koachlearn-billing:need");
  assert.match(blocked.response, /^To study Farm Records with Kyro, buy a course pack\. Courses with Kyro: 1 course ₦7,700/);
  assert.equal(blocked.tutor, undefined, "no lesson without a purchase");

  const buy = await ask("Buy one course");
  assert.equal(buy.knowledge, "koachlearn-billing:buy");
  assert.equal(buy.sources[0].publisher, "Paystack");
  assert.match(buy.sources[0].url, /^https:\/\/checkout\.paystack\.com\/kl_/);
  assert.match(buy.response, /^Here is your secure payment page for 1 course, ₦7,700\./);
  // back from paying: the provider says it is paid
  const reference = buy.checkout.reference;
  const confirmed = await courseBilling.confirm({ tenantId: "t", userId: "u1" }, { provider: "paystack", reference });
  assert.deepEqual([confirmed.paid, confirmed.granted], [true, true]);
  assert.equal((await courseBilling.confirm({ tenantId: "t", userId: "u1" }, { provider: "paystack", reference })).granted, false, "granted once");
  assert.equal((await courseBilling.confirm({ tenantId: "t", userId: "someone-else" }, { provider: "paystack", reference })).notYours, true, "another person's payment is not theirs");
  const check = await ask("I paid");
  assert.match(check.response, /^Thank you\. Your payment is confirmed: 1 course\. You have 1 courses left to choose and 45 minutes of voice tutoring\./);

  const taught = await ask("Study course agri-farm-records en");
  assert.equal(taught.tutor.kind, "course");
  assert.equal(taught.response, "A taught step. What do you already know?");
  assert.match((await ask("How many courses do I have left?")).response, /^You have 0 courses left to choose and 45 minutes/);
  assert.ok(providers.calls.some(c => c.url.includes("/transaction/verify/")), "asked Paystack itself");
});

test("spoken lessons use voice minutes; when they run out Kyro says so and the page turns the voice off; a guest is asked to sign in", async () => {
  const { ask, courseBilling } = setup({ country: "United States" });
  const scope = { tenantId: "t", userId: "u1" };
  await courseBilling.grantFromWebhook({ reference: "cs_v", plan: "course1", courses: 1, voiceMinutes: 0.4, amount: 1900, currency: "USD", provider: "stripe", userId: "u1", tenantId: "t" });
  const first = await ask("Study course agri-farm-records en", { voiceOn: true });
  assert.equal(first.tutor.voiceOut, undefined, "the first spoken step fits in what is left");
  const second = await ask("I know we write money in and money out every day on the farm", { voiceOn: true });
  assert.equal(second.tutor.voiceOut, true);
  assert.match(second.response, /Your voice minutes are used up\. Type your answers in the box to carry on, or say "buy more voice minutes"\.$/);
  const typed = await ask("We also write the date");
  assert.equal(typed.tutor.voiceOut, undefined, "typing carries on with no minutes");
  assert.ok((await courseBilling.summary(scope)).voiceLeft <= 0);
  assert.ok(spokenMinutes("one two three", "four") > 0);

  const g = setup({ guest: true });
  assert.match((await g.ask("Buy one course")).response, /^Please sign in or create an account to buy courses/);
  assert.match((await g.ask("Study course agri-farm-records en")).response, /sign in or create an account/);
});

test("switches: courses are free to study until KOACHLEARN_COURSES_PAID=1; the free first lesson stops at its end; no payments set up means no payment page", async () => {
  const open = setup({ env: { STRIPE_SECRET_KEY: "sk_test_x" } });
  assert.equal((await open.ask("Study course agri-farm-records en")).tutor.kind, "course", "not switched on: taught as before");
  const preview = setup({ env: { ...ENV, KOACHLEARN_FREE_FIRST_LESSON: "1" } });
  assert.equal((await preview.ask("Study course agri-farm-records en")).tutor.kind, "course", "the first lesson is free");
  const stop = await preview.ask("lesson 2");
  assert.match(stop.response, /That was the free first lesson of Farm Records\. To carry on, buy a course pack\./);
  const unset = setup({ env: { KOACHLEARN_COURSES_PAID: "1" } });
  assert.match((await unset.ask("Buy ten courses")).response, /^Paying for courses is not open yet/);
});

test("the words for paying, in the 10 languages, and nothing else is taken for them", () => {
  const cases = [["How much are the courses?", "prices"], ["Buy one course", "buy:course1"], ["I want to buy 10 courses", "buy:course10"], ["Buy three courses", "buy:course3"],
    ["Buy every course for a year", "buy:year"], ["Buy more voice minutes", "buy:voice"], ["How many courses do I have left?", "balance"], ["I paid", "check"], ["Check my payment", "check"],
    ["Quiero comprar diez cursos", "buy:course10"], ["Nataka kununua kozi moja", "buy:course1"], ["Kozi ni bei gani?", "prices"], ["Ina son in saya kwas daya", "buy:course1"]];
  for (const [say, want] of cases) { const r = study.purchaseRequest(say); assert.equal(r && (r.plan ? `${r.kind}:${r.plan}` : r.kind), want, say); }
  for (const say of ["Find me a course on farming", "Help me study number 1", "How much fertilizer do I need?", "Buy maize seeds", "I paid the rent today", "teach me how to price my products"]) {
    assert.equal(study.purchaseRequest(say), null, say);
  }
  for (const lang of Object.keys(text.TEXT)) for (const key of Object.keys(text.TEXT.en)) assert.ok(text.TEXT[lang][key], `${lang} ${key}`);
});

test("wired: the runtime, the routes, the page", () => {
  const runtime = read("nexus/runtime/create-runtime.js");
  assert.ok(runtime.includes("const courseBilling = createCourseBilling({ env, records });"));
  const adapter = read("nexus/compat/server-runtime-adapter.js");
  assert.ok(adapter.includes('url.pathname === "/api/nexus/runtime/koachlearn/checkout/confirm"'));
  assert.ok(adapter.includes('url.pathname === "/api/nexus/runtime/koachlearn/webhooks/stripe"'));
  assert.ok(adapter.includes("const voicedContext = body.voiceOn === true ? Object.freeze({ ...turnContext, voiceOn: true }) : turnContext;"));
  assert.ok(adapter.includes("locale: request.locale, text: body.text }, context: voicedContext });"));
  assert.ok(adapter.includes('email: String(user.email || ""),'));
  const app = read("public/app.js");
  assert.ok(app.includes('voiceOn: (() => { try { return typeof realtimeVoiceActive === "function" && realtimeVoiceActive() === true; } catch { return false; } })()'));
  assert.ok(app.includes("window.KyroKoachLearnStudy.purchaseRequest(text)) return true;"));
  assert.ok(app.includes('const provider = params.get("koachlearn_paid");'));
  assert.ok(app.includes('if (tutor.voiceOut === true)'));
});
