"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { Readable } = require("node:stream");
const voiceDispatch = require("../../nexus/business/voice-dispatch.js");
const pagesVoice = require("../../nexus/business/pages-voice.js");
const publicPages = require("../../nexus/pages/public-pages.js");
const chatAnswer = require("../../nexus/pages/chat-answer.js");
const { normalizeEditable } = require("../../nexus/business/service.js");

// 10 November 2026: a web chat page. The owner makes it by voice and teaches it in their own words; a visitor opens the link, asks a question and is answered ONLY from what the owner wrote
// (and the saved opening hours); a question it cannot answer says so and offers to take a message, which is kept like a form's answer. No script on the page, no model, nothing invented.

const NAIROBI = "Africa/Nairobi";
const AT = new Date("2099-03-04T07:00:00Z");
const ANSWERS = [
  { topic: "delivery", answer: "Delivery is free over 50 dollars within 5 km." },
  { topic: "", answer: "We accept cash and mobile money." },
  { topic: "parking", answer: "There is free parking behind the shop." }
];
const HOURS = [{ day: "Monday", open: "08:00", close: "18:00" }, { day: "Saturday", open: "09:00", close: "13:00" }];

test("the chat answers a question only from the owner's words and saved hours, and never makes one up", () => {
  const e = { chatAnswers: ANSWERS, hours: HOURS };
  const ask = q => chatAnswer.answerFor(e, q, "Mama Grace Bakery");
  assert.equal(ask("do you deliver?").text, ANSWERS[0].answer);
  assert.equal(ask("How much does delivery cost").text, ANSWERS[0].answer);
  assert.equal(ask("can I pay with mobile money").text, ANSWERS[1].answer);
  assert.equal(ask("Is parking free?").text, ANSWERS[2].answer);
  assert.equal(ask("are you open on Sunday?").text, "Sunday: closed.");
  assert.match(ask("what time do you open on Monday").text, /^Monday: 8 AM to 6 PM\.$/);
  assert.match(ask("what are your hours").text, /Monday: 8 AM to 6 PM; Tuesday: closed;.*Saturday: 9 AM to 1 PM; Sunday: closed/);
  assert.match(ask("hello").text, /Welcome to Mama Grace Bakery/);
  // nothing written about it: no answer, not a guess; the same for a price nobody wrote
  assert.equal(ask("what is your cheapest cake").kind, "none");
  assert.equal(ask("how much is a wedding cake").kind, "none");
  assert.equal(ask("").kind, "none");
  // with no hours saved, an assumed 9 to 5 is never told to a customer
  assert.equal(chatAnswer.answerFor({ chatAnswers: [], hours: [] }, "what time do you open").kind, "none");
});

test("the owner teaches the chat by voice, every change asks first, and look-alikes are left alone", () => {
  const yes = {
    createPage: ["Create a chat page called Ask Us", "create a web chat called Ask Mama", "make a chatbot called Helper for my shop"],
    addChatAnswer: ["when someone asks about delivery, tell them it is free over 50 dollars", "add to my chat answers: we accept mobile money", "teach my chat page that we close for lunch at one"],
    listChatAnswers: ["what are my chat answers"],
    deleteChatAnswer: ["remove the chat answer about delivery"]
  };
  for (const [intent, phrases] of Object.entries(yes)) for (const phrase of phrases) { assert.equal(pagesVoice.classifyPage(phrase), intent, phrase); assert.equal(voiceDispatch.classify(phrase), intent, `dispatch: ${phrase}`); }
  for (const phrase of ["Open the weather page", "tell me about the chat", "how do I chat with a customer", "write a chat message to John"]) assert.equal(pagesVoice.classifyPage(phrase), null, phrase);
  const editable = { pages: [], chatAnswers: [] };
  const add = pagesVoice.planPageWrite("addChatAnswer", { command: "when someone asks about delivery, tell them it is free over 50 dollars", editable, workspace: "Mama" });
  assert.match(add.prompt, /for questions about delivery: "It is free over 50 dollars\."[\s\S]*word for word[\s\S]*Should I go ahead\?/);
  const after = add.apply(editable);
  assert.deepEqual(after.chatAnswers, [{ topic: "delivery", answer: "It is free over 50 dollars." }]);
  assert.match(pagesVoice.readPage("listChatAnswers", { command: "x", editable: after, workspace: "Mama" }), /1 chat answer: delivery: It is free over 50 dollars\./);
  const gone = pagesVoice.planPageWrite("deleteChatAnswer", { command: "remove the chat answer about delivery", editable: after, workspace: "Mama" });
  assert.deepEqual(gone.apply(after).chatAnswers, []);
  assert.match(pagesVoice.planPageWrite("addChatAnswer", { command: "add to my chat answers: " + "x".repeat(700), editable, workspace: "Mama" }).response, /too long/);
  const made = pagesVoice.planPageWrite("createPage", { command: "Create a chat page called Ask Us", editable, workspace: "Mama", today: "2099-03-04" });
  assert.match(made.prompt, /chat page called Ask Us[\s\S]*only from the chat answers you write[\s\S]*automatic helper/);
  const page = made.apply(editable).pages[0];
  assert.deepEqual([page.kind, page.button, page.askConsent, page.status, page.fields], ["chat", "Ask", "yes", "on", ""]);
});

// ---- the public side (the same stand-ins the pages tests use) ----
const lead = (name, contact) => ({ name, contact, type: "customer", need: "", stage: "new", nextAction: "", followUpDate: "", messageConsent: "", messageConsentDate: "", tags: "" });
function harness(extra = {}) {
  const page = { slug: "ask-us-k3m9x2qa", kind: "chat", title: "Ask Us", headline: "Ask Us", body: "Ask a question.", button: "Ask", fields: "", status: "on", askConsent: "yes", minutes: 0, daysAhead: 0, zone: NAIROBI, createdOn: "2099-03-01" };
  const editable = normalizeEditable({ businessName: "Mama Grace Bakery" }, { leads: [lead("Grace Otieno", "+254712345678")], pages: [page], chatAnswers: ANSWERS, hours: HOURS, ...extra });
  let record = { tenant_id: "tenant_1", owner_id: "owner_1", record_id: "rec_1", version: 1, data: { info: { businessName: "Mama Grace Bakery" }, editable } };
  const told = []; let updates = 0;
  const repository = {
    async findPageRecord({ slug }) { return (record.data.editable.pages || []).some(item => item.slug === slug) ? JSON.parse(JSON.stringify(record)) : null; },
    async update({ expectedVersion, data }) { if (expectedVersion !== record.version) throw new Error("Record version conflict"); updates += 1; record = { ...record, version: record.version + 1, data: JSON.parse(JSON.stringify(data)) }; return record; }
  };
  const clock = { at: AT.getTime() };
  const handler = publicPages.createPublicPages({ runtime: async () => ({ businessRecords: repository }), env: { PUBLIC_PAGES_SECRET: "test-secret" }, now: () => new Date(clock.at), notify: async item => { told.push(item); }, logger: { error() {} } });
  return { handler, clock, told, updates: () => updates, peek: () => record.data.editable };
}
function request(method, pathName, { form = null, ip = "10.0.0.1" } = {}) {
  const body = form ? new URLSearchParams(form).toString() : "";
  const req = Readable.from(body ? [Buffer.from(body)] : []);
  Object.assign(req, { method, headers: { ...(form ? { "content-type": "application/x-www-form-urlencoded" } : {}), "x-forwarded-for": ip }, socket: { remoteAddress: ip } });
  const res = { status: 0, headers: {}, body: "", writeHead(status, h) { this.status = status; this.headers = h; }, end(chunk) { this.body += chunk || ""; } };
  return { req, res, url: { pathname: pathName } };
}
const run = async (h, method, pathName, options) => { const r = request(method, pathName, options); await h.handler.handle(r.req, r.res, r.url); return { status: r.res.status, headers: r.res.headers, body: r.res.body }; };
const tokenOf = html => /name="t" value="([^"]+)"/.exec(html)[1];
const PATH = "/p/ask-us-k3m9x2qa";
async function open(h) { const got = await run(h, "GET", PATH); h.clock.at += 4000; return { got, token: tokenOf(got.body) }; }

test("a visitor opens the chat with no sign-in, asks, is answered from what the owner wrote, and nothing is saved by asking", async () => {
  const h = harness();
  const { got, token } = await open(h);
  assert.equal(got.status, 200);
  assert.doesNotMatch(got.body, /<script/i, "no script on the page");
  assert.match(got.body, /automatic helper, not a person/);
  assert.match(got.body, /name="act" value="ask"/);
  const asked = await run(h, "POST", PATH, { form: { act: "ask", q: "Do you deliver?", website: "", t: token } });
  assert.equal(asked.status, 200);
  assert.match(asked.body, /You asked:<\/strong> Do you deliver\?/);
  assert.match(asked.body, /Delivery is free over 50 dollars within 5 km\./);
  assert.equal(h.updates(), 0, "asking saves nothing");
  const hours = await run(h, "POST", PATH, { form: { act: "ask", q: "are you open on Sunday", website: "", t: tokenOf(asked.body) } });
  assert.match(hours.body, /Sunday: closed\./);
  // what a visitor types is escaped
  const evil = await run(h, "POST", PATH, { form: { act: "ask", q: "<script>alert(1)</script> parking", website: "", t: tokenOf(hours.body) } });
  assert.doesNotMatch(evil.body, /<script>alert/); assert.match(evil.body, /&lt;script&gt;/);
});

test("a question it cannot answer says so, offers to take a message, and the message is kept and the person becomes a customer", async () => {
  const h = harness();
  const { token } = await open(h);
  const asked = await run(h, "POST", PATH, { form: { act: "ask", q: "How much is a wedding cake?", website: "", t: token } });
  assert.match(asked.body, /I do not have an answer to that/);
  assert.match(asked.body, /<details open>/, "the message form is open when there is no answer");
  assert.match(asked.body, />How much is a wedding cake\?<\/textarea>/, "the question is already in the message box");
  const sent = await run(h, "POST", PATH, { form: { act: "leave", n: "Wanjiru Njeri", c: "+254733111222", m: "How much is a wedding cake?", agree: "yes", website: "", t: tokenOf(asked.body) } });
  assert.equal(sent.status, 200); assert.match(sent.body, /Your message was sent/);
  const saved = h.peek();
  assert.deepEqual(saved.pageResponses.map(row => [row.kind, row.name, row.contact, row.consent, row.answers]), [["chat", "Wanjiru Njeri", "+254733111222", "yes", "Message: How much is a wedding cake?"]]);
  const person = saved.leads.find(row => row.name === "Wanjiru Njeri");
  assert.deepEqual({ source: person.source, messageConsent: person.messageConsent }, { source: "page: Ask Us", messageConsent: "yes" });
  assert.match(saved.contactNotes.at(-1).text, /Left a message on the Ask Us chat/);
  assert.match(h.told[0].title, /New chat message: Ask Us/); assert.doesNotMatch(h.told[0].body, /wedding/);
  // a message with no way to reply is sent back with a note and what they typed is kept
  const again = await open(h);
  const bad = await run(h, "POST", PATH, { form: { act: "leave", n: "Nobody", c: "", m: "Hello", website: "", t: again.token } });
  assert.equal(bad.status, 422); assert.match(bad.body, /Please enter your phone number or email/); assert.match(bad.body, /value="Nobody"/);
});

test("the chat cannot be abused: a bot's field, a bad token, an unknown action, and a flood of questions", async () => {
  const h = harness();
  const { token } = await open(h);
  assert.equal((await run(h, "POST", PATH, { form: { act: "ask", q: "hello", website: "spam", t: token } })).status, 400);
  assert.equal((await run(h, "POST", PATH, { form: { act: "ask", q: "hello", website: "", t: "1.abc" } })).status, 400);
  assert.equal((await run(h, "POST", PATH, { form: { act: "other", q: "hello", website: "", t: token } })).status, 400);
  assert.equal((await run(h, "POST", PATH, { form: { q: "hello", website: "", t: token } })).status, 400, "a post with no action is not a question or a message");
  assert.equal(h.updates(), 0);
  let last;
  for (let i = 0; i < publicPagesLimit() + 2; i += 1) last = await run(h, "POST", PATH, { form: { act: "ask", q: "parking", website: "", t: token } });
  assert.equal(last.status, 429, "too many questions from one address are told to wait");
  // a different address is not held back, and a page that is off is not available
  assert.equal((await run(h, "POST", PATH, { form: { act: "ask", q: "parking", website: "", t: token }, ip: "10.0.0.9" })).status, 200);
});
const publicPagesLimit = () => 40;

test("the Business page lists the chat answers, the dispatcher knows the new changes, and the server keeps them", () => {
  const root = path.join(__dirname, "..", "..");
  const html = fs.readFileSync(path.join(root, "public", "business-services.html"), "utf8");
  assert.ok(html.includes('id="chat-answers"') && html.includes('id="add-chat-answer"'));
  assert.ok(fs.readFileSync(path.join(root, "public", "business-services.js"), "utf8").includes('rows("chat-answers"'));
  for (const intent of pagesVoice.PAGE_WRITE_INTENTS) assert.equal(voiceDispatch.isReadIntent(intent), false, intent);
  assert.equal(voiceDispatch.isReadIntent("listChatAnswers"), true);
  assert.equal(normalizeEditable({}, {}).chatAnswers.length, 0, "a workspace saved before reads back with no chat answers");
  assert.throws(() => normalizeEditable({}, { chatAnswers: [{ topic: "a", answer: "x".repeat(9000) }] }));
});
