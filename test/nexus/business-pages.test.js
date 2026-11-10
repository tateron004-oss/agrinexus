"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { Readable } = require("node:stream");
const voiceDispatch = require("../../nexus/business/voice-dispatch.js");
const pagesVoice = require("../../nexus/business/pages-voice.js");
const publicPages = require("../../nexus/pages/public-pages.js");
const { normalizeEditable } = require("../../nexus/business/service.js");

// 9 November 2026: pages the owner's customers can open: a landing page, a contact form, a survey and an online booking page, each on a public link, made by voice. What visitors send comes back into the workspace.
// The public side has no sign-in, so these tests include the ways it could be abused.

const NAIROBI = "Africa/Nairobi";
const lead = (name, contact, extra = {}) => ({ name, contact, type: "customer", need: "", stage: "new", nextAction: "", followUpDate: "", messageConsent: "", messageConsentDate: "", tags: "", ...extra });
function workspace(overrides = {}) {
  const editable = { leads: [lead("Grace Otieno", "+254712345678"), lead("John Kamau", "john@example.com", { messageConsent: "no" })], invoices: [], invoiceItems: [], grants: [], tasks: [], appointments: [], listings: [], transactions: [], hours: [], pages: [], pageResponses: [], contactNotes: [], ...overrides };
  const client = { record_id: "rec_1", version: 4, data: { info: { businessName: "Mama Grace Salon" }, editable } };
  const saves = [];
  const businessRequest = async ({ method, body }) => {
    if (method === "GET") return { body: { clients: [client] } };
    saves.push(body); client.version += 1; client.data = { ...client.data, editable: body.editable };
    return { body: client };
  };
  return { client, saves, businessRequest, editable: () => client.data.editable };
}
const say = (ws, command, confirmed = true) => voiceDispatch.run({ command, confirmed, businessRequest: ws.businessRequest, timeZone: NAIROBI });

test("the phrases are recognised as page requests, and look-alikes are left to the other tools", () => {
  const yes = {
    createPage: ["Create a contact form called Enquiry", "Make a landing page called Spring Sale with the headline Half price this week and the text Come in before Friday", "create a survey called Feedback with the questions how was your visit (1-5); what could we improve",
      "Create a booking page called Book a Haircut for 30 minutes", "build an order form called Cake Orders with the fields name, phone and flavour"],
    listPages: ["Show my pages", "what pages do I have", "list my forms"],
    pageLink: ["What is the link to the Enquiry form?", "what is the address of the Spring Sale page"],
    pageResponses: ["What did the Enquiry form get?", "how many answers has the Feedback survey got", "what bookings did the Book a Haircut page get"],
    setPageStatus: ["Turn off the Spring Sale page", "turn on the Enquiry form", "take down the Spring Sale page"],
    deletePage: ["Delete the Spring Sale page", "remove my Enquiry form"]
  };
  for (const [intent, phrases] of Object.entries(yes)) for (const phrase of phrases) { assert.equal(pagesVoice.classifyPage(phrase), intent, phrase); assert.equal(voiceDispatch.classify(phrase), intent, `dispatch: ${phrase}`); }
  for (const phrase of ["Write the website page for my catering business.", "Write a promotional email for my bakery as a web page.", "Create an intake form", "Make a consent form for my clinic", "how do I write a good landing page", "what is a survey", "read the web page to me", "open page 12 of the book", "add a customer named Grace", "show my appointments", "book an appointment for Grace tomorrow at 10", "fill in the form for my visa"]) {
    assert.notEqual(voiceDispatch.classify(phrase), "createPage", phrase);
    assert.equal(pagesVoice.classifyPage(phrase), null, phrase);
  }
  assert.equal(voiceDispatch.isReadIntent("listPages"), true); assert.equal(voiceDispatch.isReadIntent("createPage"), false);
});

test("each kind of page is made after a yes, gets its own unguessable link, and is on", async () => {
  const ws = workspace();
  const ask = await say(ws, "Create a contact form called Enquiry with the fields name, phone and message", false);
  assert.equal(ask.status, "needs-confirmation");
  assert.match(ask.response, /contact form called Enquiry[\s\S]*asking for Name, Phone and Message[\s\S]*own link that anyone can open[\s\S]*box they can tick to agree to get messages/);
  assert.equal(ws.saves.length, 0, "nothing is saved before the yes");
  const done = await say(ws, "Create a contact form called Enquiry with the fields name, phone and message");
  assert.match(done.response, /Made the Enquiry contact form\. Its link is [^\s]*\/p\/enquiry-[a-z0-9]{8}/);
  await say(ws, "Make a landing page called Spring Sale with the headline Half price this week and the text Come in before Friday");
  await say(ws, "Create a survey called Feedback with the questions how was your visit (1-5); what could we improve");
  await say(ws, "Create a booking page called Book a Haircut for 45 minutes");
  const pages = ws.editable().pages;
  assert.deepEqual(pages.map(page => [page.kind, page.title, page.status]), [["form", "Enquiry", "on"], ["landing", "Spring Sale", "on"], ["survey", "Feedback", "on"], ["booking", "Book a Haircut", "on"]]);
  assert.equal(new Set(pages.map(page => page.slug)).size, 4);
  for (const page of pages) assert.match(page.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*-[a-z0-9]{8}$/);
  assert.equal(pages[0].fields, "Name | Phone | Message");
  assert.deepEqual([pages[1].headline, pages[1].body], ["Half price this week", "Come in before Friday"]);
  assert.equal(pages[2].fields, "How was your visit (1-5) | What could we improve");
  assert.deepEqual([pages[3].minutes, pages[3].daysAhead, pages[3].zone], [45, 14, NAIROBI]);
  assert.deepEqual([pages[0].askConsent, pages[1].askConsent, pages[3].askConsent], ["yes", "no", "yes"]);
  // questions the owner must answer first, and duplicates
  assert.match((await say(ws, "Create a survey called Quick")).response, /What should the survey ask/);
  assert.match((await say(ws, "Create a landing page called Plain")).response, /What should the Plain page say/);
  assert.match((await say(ws, "Create a contact form")).response, /What should the contact form be called/);
  assert.match((await say(ws, "Create a contact form called Enquiry")).response, /already has a page called Enquiry/);
});

test("the owner can list pages, get a link, turn a page off and on, delete it, and read what came in", async () => {
  const ws = workspace();
  await say(ws, "Create a contact form called Enquiry");
  await say(ws, "Create a survey called Feedback with the questions how was your visit (1-5); what could we improve");
  const [form, survey] = ws.editable().pages;
  assert.match((await say(ws, "show my pages")).response, /2 pages: Enquiry \(contact form, on\) and Feedback \(survey, on\)/);
  assert.match((await say(ws, "What is the link to the Enquiry form?")).response, new RegExp(`The Enquiry contact form is on\\. Its link is [^\\s]*/p/${form.slug}`));
  assert.match((await say(ws, "what did the Enquiry form get")).response, /Nobody has used the Enquiry contact form yet/);
  ws.editable().pageResponses.push({ page: form.slug, title: "Enquiry", at: "2099-03-04 10:00", name: "Grace Otieno", contact: "+254712345678", answers: "Message: do you do weddings", consent: "yes", kind: "form" });
  assert.match((await say(ws, "what did the Enquiry form get")).response, /1 entry\. Latest: Grace Otieno, \+254712345678: Message: do you do weddings/);
  ws.editable().pageResponses.push({ page: survey.slug, title: "Feedback", at: "2099-03-04 10:00", name: "", contact: "", answers: "How was your visit: 5 | What could we improve: parking", consent: "", kind: "survey" }, { page: survey.slug, title: "Feedback", at: "2099-03-04 11:00", name: "", contact: "", answers: "How was your visit: 3", consent: "", kind: "survey" });
  assert.match((await say(ws, "how many answers has the Feedback survey got")).response, /2 answers\. How was your visit averages 4\.0 out of 5 from 2 ratings/);
  assert.match((await say(ws, "Turn off the Enquiry form", false)).response, /turn the Enquiry page off[\s\S]*What people sent is kept/);
  await say(ws, "Turn off the Enquiry form");
  assert.equal(ws.editable().pages[0].status, "off");
  assert.match((await say(ws, "Turn off the Enquiry form")).response, /already off/);
  await say(ws, "Turn on the Enquiry form");
  assert.equal(ws.editable().pages[0].status, "on");
  const del = await say(ws, "Delete the Enquiry form", false);
  assert.match(del.response, /link stops working for good\. Its 1 answer stay in your workspace/);
  await say(ws, "Delete the Enquiry form");
  assert.deepEqual(ws.editable().pages.map(page => page.title), ["Feedback"]);
  assert.equal(ws.editable().pageResponses.length, 3, "what visitors sent is kept");
});

// ---- the public side ----
const AT = new Date("2099-03-04T07:00:00Z"); // 10:00 on Wednesday 4 March in Nairobi
const pageRow = (extra = {}) => ({ slug: "enquiry-k3m9x2qa", kind: "form", title: "Enquiry", headline: "Ask us anything", body: "We reply within a day.", button: "Send", fields: "Name | Phone | Message", status: "on", askConsent: "yes", minutes: 0, daysAhead: 0, zone: NAIROBI, createdOn: "2099-03-01", ...extra });
function fakeRuntime(pages, editableExtra = {}) {
  const editable = normalizeEditable({ businessName: "Mama Grace Salon" }, { leads: [lead("Grace Otieno", "+254712345678"), lead("John Kamau", "john@example.com", { messageConsent: "no" })], hours: [], appointments: [], pages, ...editableExtra });
  let record = { tenant_id: "tenant_1", owner_id: "owner_1", record_id: "rec_1", version: 1, data: { info: { businessName: "Mama Grace Salon" }, editable } };
  const told = []; const updates = [];
  const repository = {
    async findPageRecord({ slug }) { return (record.data.editable.pages || []).some(page => page.slug === slug) ? JSON.parse(JSON.stringify(record)) : null; },
    async update({ expectedVersion, data, provenance }) { if (expectedVersion !== record.version) throw new Error("Record version conflict"); record = { ...record, version: record.version + 1, data: JSON.parse(JSON.stringify(data)) }; updates.push(provenance.source); return record; }
  };
  return { runtime: async () => ({ businessRecords: repository }), told, updates, peek: () => record.data.editable, bump: () => { record = { ...record, version: record.version + 1 }; } };
}
function harness(pages, extra, options = {}) {
  const fake = fakeRuntime(pages, extra);
  const clock = { at: AT.getTime() };
  const handler = publicPages.createPublicPages({ runtime: fake.runtime, env: { PUBLIC_PAGES_SECRET: "test-secret" }, now: () => new Date(clock.at), notify: async item => { fake.told.push(item); }, logger: { error() {} }, ...options });
  return { ...fake, clock, handler };
}
function request(method, path, { form = null, headers = {}, ip = "10.0.0.1", raw = null } = {}) {
  const body = raw !== null ? raw : form ? new URLSearchParams(form).toString() : "";
  const req = Readable.from(body ? [Buffer.from(body)] : []);
  Object.assign(req, { method, headers: { ...(form || raw !== null ? { "content-type": "application/x-www-form-urlencoded" } : {}), "x-forwarded-for": ip, ...headers }, socket: { remoteAddress: ip } });
  const res = { status: 0, headers: {}, body: "", writeHead(status, h) { this.status = status; this.headers = h; }, end(chunk) { this.body += chunk || ""; } };
  return { req, res, url: { pathname: path } };
}
const run = async (h, method, path, options) => { const r = request(method, path, options); const handled = await h.handler.handle(r.req, r.res, r.url); return { handled, status: r.res.status, headers: r.res.headers, body: r.res.body }; };
const tokenOf = html => /name="t" value="([^"]+)"/.exec(html)[1];
async function open(h, path = "/p/enquiry-k3m9x2qa") { const got = await run(h, "GET", path); h.clock.at += 4000; return { got, token: got.status === 200 ? tokenOf(got.body) : null }; }

test("a page opens with no sign-in, shows only what the owner wrote, has no script, and every word is escaped", async () => {
  const h = harness([pageRow({ title: "Enquiry <b>x</b>", headline: "<script>alert(1)</script> Hello", body: "Line one\nLine \"two\" & <img src=x onerror=alert(1)>" })]);
  const got = await run(h, "GET", "/p/enquiry-k3m9x2qa");
  assert.equal(got.handled, true); assert.equal(got.status, 200);
  assert.match(got.headers["content-type"], /text\/html; charset=utf-8/);
  assert.equal(got.headers["cache-control"], "no-store"); assert.match(got.headers["x-robots-tag"], /noindex/);
  assert.doesNotMatch(got.body, /<script|<img/i);
  assert.match(got.body, /&lt;script&gt;alert\(1\)&lt;\/script&gt; Hello/);
  assert.match(got.body, /<meta name="robots" content="noindex,nofollow">/);
  assert.match(got.body, /<form method="post" action="\/p\/enquiry-k3m9x2qa"/);
  assert.match(got.body, /name="agree" value="yes"/, "the consent box is there and not ticked");
  assert.doesNotMatch(got.body, /checked/);
  // nothing of the workspace but the page: no customers, no appointments
  assert.doesNotMatch(got.body, /Grace Otieno|john@example\.com|Mama Grace Salon/);
  // not a page: other paths and a page that is off or unknown
  assert.equal((await run(h, "GET", "/api/anything")).handled, false);
  assert.equal((await run(harness([pageRow({ status: "off" })]), "GET", "/p/enquiry-k3m9x2qa")).status, 404);
  assert.equal((await run(h, "GET", "/p/nothing-like-this-1")).status, 404);
  assert.equal((await run(h, "DELETE", "/p/enquiry-k3m9x2qa")).status, 405);
});

test("a form's answers are kept, the person becomes a customer, and only a ticked box is recorded as agreeing to messages", async () => {
  const h = harness([pageRow()]);
  const { token } = await open(h);
  const sent = await run(h, "POST", "/p/enquiry-k3m9x2qa", { form: { f0: "Wanjiru Njeri", f1: "+254733111222", f2: "Do you do weddings?", agree: "yes", website: "", t: token } });
  assert.equal(sent.status, 200); assert.match(sent.body, /Your message was sent/);
  const saved = h.peek();
  assert.deepEqual(saved.pageResponses.map(row => [row.page, row.name, row.contact, row.consent, row.kind]), [["enquiry-k3m9x2qa", "Wanjiru Njeri", "+254733111222", "yes", "form"]]);
  assert.equal(saved.pageResponses[0].answers, "Name: Wanjiru Njeri | Phone: +254733111222 | Message: Do you do weddings?");
  const person = saved.leads.find(row => row.name === "Wanjiru Njeri");
  assert.deepEqual({ contact: person.contact, source: person.source, messageConsent: person.messageConsent }, { contact: "+254733111222", source: "page: Enquiry", messageConsent: "yes" });
  assert.match(saved.contactNotes.at(-1).text, /Sent the Enquiry form/);
  assert.deepEqual(h.updates, ["public-page"]);
  assert.match(h.told[0].title, /New answer: Enquiry/); assert.doesNotMatch(h.told[0].body, /weddings/, "the notification does not carry what they wrote");
  // not ticked: not recorded as agreeing
  const second = await open(h);
  await run(h, "POST", "/p/enquiry-k3m9x2qa", { form: { f0: "Peter Njoroge", f1: "peter@example.com", f2: "Hello", website: "", t: second.token } });
  assert.ok(!h.peek().leads.find(row => row.name === "Peter Njoroge").messageConsent, "no tick, no consent");
  // a person who said no is never turned into a yes by a tick; an existing person is not added twice
  const third = await open(h);
  await run(h, "POST", "/p/enquiry-k3m9x2qa", { form: { f0: "John Kamau", f1: "john@example.com", f2: "Hi again", agree: "yes", website: "", t: third.token } });
  const leads = h.peek().leads;
  assert.equal(leads.filter(row => row.name === "John Kamau").length, 1);
  assert.equal(leads.find(row => row.name === "John Kamau").messageConsent, "no", "an existing no stays a no");
  const fourth = await open(h);
  await run(h, "POST", "/p/enquiry-k3m9x2qa", { form: { f0: "Grace Otieno", f1: "+254712345678", f2: "Back again", agree: "yes", website: "", t: fourth.token } });
  assert.equal(h.peek().leads.find(row => row.name === "Grace Otieno").messageConsent, "yes", "a blank becomes yes when they tick");
  // a form with no way to reply is sent back with a message
  const fifth = await open(h);
  const noContact = await run(h, "POST", "/p/enquiry-k3m9x2qa", { form: { f0: "Nobody", f2: "Hello", website: "", t: fifth.token } });
  assert.equal(noContact.status, 422); assert.match(noContact.body, /Please give a phone number or email/);
  assert.match(noContact.body, /value="Nobody"/, "what they typed is kept in the box");
});

test("a survey is anonymous: its answers are kept and nobody is added to the customers", async () => {
  const h = harness([pageRow({ slug: "feedback-q1w2e3r4", kind: "survey", title: "Feedback", fields: "How was your visit (1-5) | What could we improve", askConsent: "no" })]);
  const { token } = await open(h, "/p/feedback-q1w2e3r4");
  const before = h.peek().leads.length;
  const sent = await run(h, "POST", "/p/feedback-q1w2e3r4", { form: { f0: "4", f1: "More parking", website: "", t: token } });
  assert.match(sent.body, /Your answers were sent/);
  assert.equal(h.peek().leads.length, before);
  assert.equal(h.peek().pageResponses[0].answers, "How was your visit: 4 | What could we improve: More parking");
  // a rating outside 1 to 5 is dropped, an empty survey is refused
  const second = await open(h, "/p/feedback-q1w2e3r4");
  await run(h, "POST", "/p/feedback-q1w2e3r4", { form: { f0: "9", f1: "ok", website: "", t: second.token } });
  assert.equal(h.peek().pageResponses[1].answers, "What could we improve: ok");
  const third = await open(h, "/p/feedback-q1w2e3r4");
  assert.equal((await run(h, "POST", "/p/feedback-q1w2e3r4", { form: { website: "", t: third.token } })).status, 422);
});

test("it cannot be abused: bots, stale or forged pages, other content, oversize, floods and a closed page", async () => {
  const h = harness([pageRow()]);
  const good = { f0: "A", f1: "+254700000001", f2: "x" };
  const first = await open(h);
  // the hidden field filled in (a bot)
  assert.equal((await run(h, "POST", "/p/enquiry-k3m9x2qa", { form: { ...good, website: "http://spam.example", t: first.token } })).status, 400);
  // no token, a forged token, a token for another page
  assert.equal((await run(h, "POST", "/p/enquiry-k3m9x2qa", { form: { ...good, website: "" } })).status, 400);
  assert.equal((await run(h, "POST", "/p/enquiry-k3m9x2qa", { form: { ...good, website: "", t: `${h.clock.at - 5000}.AAAAAAAAAAAAAAAAAAAAAA` } })).status, 400);
  const other = publicPages.tokenFor("test-secret", "some-other-page-1", String(h.clock.at - 5000));
  assert.equal((await run(h, "POST", "/p/enquiry-k3m9x2qa", { form: { ...good, website: "", t: other } })).status, 400);
  // posted at once (too fresh) and too old
  const fresh = await run(h, "GET", "/p/enquiry-k3m9x2qa");
  assert.equal((await run(h, "POST", "/p/enquiry-k3m9x2qa", { form: { ...good, website: "", t: tokenOf(fresh.body) } })).status, 400);
  h.clock.at += 3 * 60 * 60 * 1000;
  assert.equal((await run(h, "POST", "/p/enquiry-k3m9x2qa", { form: { ...good, website: "", t: first.token } })).status, 400);
  assert.equal(h.updates.length, 0, "none of those saved anything");
  // not a form post, and too big
  const fine = await open(h);
  assert.equal((await run(h, "POST", "/p/enquiry-k3m9x2qa", { raw: "x", headers: { "content-type": "application/json" } })).status, 415);
  assert.equal((await run(h, "POST", "/p/enquiry-k3m9x2qa", { raw: `f0=${"a".repeat(30000)}` })).status, 413);
  // an answer is cut to 1,000 characters, and a page that is turned off while it is open stops taking answers
  const long = await open(h);
  await run(h, "POST", "/p/enquiry-k3m9x2qa", { form: { f0: "L", f1: "+254700000002", f2: "z".repeat(5000), website: "", t: long.token } });
  assert.ok(h.peek().pageResponses.at(-1).answers.length <= 1000 + "Name: L | Phone: +254700000002 | Message: ".length);
  const off = harness([pageRow({ status: "on" })]);
  const opened = await open(off);
  off.peek().pages[0].status = "off";
  assert.equal((await run(off, "POST", "/p/enquiry-k3m9x2qa", { form: { ...good, website: "", t: opened.token } })).status, 404);
  assert.equal(fine.got.status, 200);
});

test("it is rate limited: five an hour from one address to one page, and a limit for the page and for the workspace in a day", async () => {
  const h = harness([pageRow()]);
  let last = 0;
  for (let i = 0; i < publicPages.PER_IP_PER_HOUR + 1; i += 1) {
    const { token } = await open(h);
    last = (await run(h, "POST", "/p/enquiry-k3m9x2qa", { form: { f0: `P${i}`, f1: `+2547000000${i}0`, f2: "x", website: "", t: token } })).status;
  }
  assert.equal(last, 429);
  assert.equal(h.updates.length, publicPages.PER_IP_PER_HOUR, "the sixth was not saved");
  // another address is let in, and an hour later the first one is too
  const { token } = await open(h);
  assert.equal((await run(h, "POST", "/p/enquiry-k3m9x2qa", { form: { f0: "Other", f1: "+254711000000", f2: "x", website: "", t: token }, ip: "10.0.0.2" })).status, 200);
  h.clock.at += 61 * 60 * 1000;
  const later = await open(h);
  assert.equal((await run(h, "POST", "/p/enquiry-k3m9x2qa", { form: { f0: "Later", f1: "+254711000001", f2: "x", website: "", t: later.token } })).status, 200);
  // the workspace's day: 300 answers and then closed for the day
  const full = harness([pageRow()], { pageResponses: Array.from({ length: publicPages.PER_WORKSPACE_PER_DAY }, (_, i) => ({ page: "enquiry-k3m9x2qa", title: "Enquiry", at: "2099-03-04 09:00", name: `N${i}`, contact: "", answers: "x", consent: "", kind: "form" })) });
  const closing = await open(full);
  const closed = await run(full, "POST", "/p/enquiry-k3m9x2qa", { form: { f0: "Late", f1: "+254711000002", f2: "x", website: "", t: closing.token } });
  assert.equal(closed.status, 429); assert.match(closed.body, /cannot take more answers today/);
});

test("a booking page shows only free times, books one with no double-booking, and the loser is told", async () => {
  const booking = pageRow({ slug: "haircut-b4k1n9gx", kind: "booking", title: "Book a Haircut", headline: "Book a Haircut", body: "Pick a time that suits you.", fields: "", button: "Book this time", minutes: 30, daysAhead: 14 });
  const h = harness([booking], { hours: [{ day: "wednesday", open: "09:00", close: "12:00" }, { day: "thursday", open: "09:00", close: "11:00" }], appointments: [{ title: "Vet", start: "x", end: "", notes: "", status: "scheduled", calendarEventId: "", calendarLink: "", startAt: "2099-03-04T10:30", durationMinutes: 30, customer: "Peter", service: "", confirmation: "" }] });
  const got = await run(h, "GET", "/p/haircut-b4k1n9gx");
  assert.equal(got.status, 200);
  const values = [...got.body.matchAll(/name="slot" value="([^"]+)"/g)].map(m => m[1]);
  assert.ok(values.includes("2099-03-04T11:00") && values.includes("2099-03-05T09:00"));
  assert.equal(values.includes("2099-03-04T09:00"), false, "a time that has passed today is not offered");
  assert.equal(values.includes("2099-03-04T10:30"), false, "a time that is taken is not offered");
  assert.equal(values.includes("2099-03-04T11:30"), true);
  assert.equal(values.includes("2099-03-04T12:00"), false, "a time that would run past closing is not offered");
  assert.equal(values.some(value => value.startsWith("2099-03-06")), false, "a closed day (Friday) has none");
  h.clock.at += 4000;
  const t1 = tokenOf(got.body);
  const sent = await run(h, "POST", "/p/haircut-b4k1n9gx", { form: { slot: "2099-03-04T11:00", n: "Wanjiru Njeri", c: "+254733111222", q: "short back and sides", agree: "yes", website: "", t: t1 } });
  assert.equal(sent.status, 200); assert.match(sent.body, /You are booked for today at 11 AM\. See you then\./);
  const saved = h.peek();
  assert.deepEqual(saved.appointments.at(-1), { title: "Book a Haircut: Wanjiru Njeri", start: "today at 11 AM", end: "", notes: "Note: short back and sides", status: "scheduled", calendarEventId: "", calendarLink: "", startAt: "2099-03-04T11:00", durationMinutes: 30, customer: "Wanjiru Njeri", service: "Book a Haircut", confirmation: "online" });
  assert.equal(saved.leads.find(row => row.name === "Wanjiru Njeri").messageConsent, "yes");
  assert.match(saved.contactNotes.at(-1).text, /Booked online: Book a Haircut, today at 11 AM/);
  assert.match(h.told[0].title, /New booking: Book a Haircut/);
  // the same time again, by someone else: refused, shown the times that are left
  const second = await open(h, "/p/haircut-b4k1n9gx");
  const clash = await run(h, "POST", "/p/haircut-b4k1n9gx", { form: { slot: "2099-03-04T11:00", n: "Late One", c: "late@example.com", website: "", t: second.token }, ip: "10.0.0.9" });
  assert.equal(clash.status, 409); assert.match(clash.body, /that time was just taken/);
  assert.equal(saved.appointments.length, 2);
  assert.equal(h.peek().appointments.length, 2, "nothing was booked for the second");
  // a time that is not offered, a made-up one, and no name or contact
  const third = await open(h, "/p/haircut-b4k1n9gx");
  assert.equal((await run(h, "POST", "/p/haircut-b4k1n9gx", { form: { slot: "2099-03-06T10:00", n: "A", c: "a@example.com", website: "", t: third.token }, ip: "10.0.0.8" })).status, 409);
  assert.equal((await run(h, "POST", "/p/haircut-b4k1n9gx", { form: { slot: "not a time", n: "A", c: "a@example.com", website: "", t: third.token }, ip: "10.0.0.8" })).status, 422);
  assert.equal((await run(h, "POST", "/p/haircut-b4k1n9gx", { form: { slot: "2099-03-05T09:00", n: "", c: "a@example.com", website: "", t: third.token }, ip: "10.0.0.7" })).status, 422);
});

test("two people sending at the same moment cannot both take a time: the save is versioned and the second is checked again", async () => {
  const booking = pageRow({ slug: "haircut-b4k1n9gx", kind: "booking", title: "Book a Haircut", fields: "", minutes: 30, daysAhead: 14 });
  const h = harness([booking], { hours: [{ day: "wednesday", open: "09:00", close: "12:00" }] });
  const a = await open(h, "/p/haircut-b4k1n9gx");
  const b = await open(h, "/p/haircut-b4k1n9gx");
  const form = token => ({ slot: "2099-03-04T11:00", n: "X", c: "x@example.com", website: "", t: token });
  const [one, two] = await Promise.all([run(h, "POST", "/p/haircut-b4k1n9gx", { form: form(a.token), ip: "10.0.0.5" }), run(h, "POST", "/p/haircut-b4k1n9gx", { form: form(b.token), ip: "10.0.0.6" })]);
  assert.deepEqual([one.status, two.status].sort(), [200, 409]);
  assert.equal(h.peek().appointments.filter(item => item.startAt === "2099-03-04T11:00").length, 1);
});

test("the workspace keeps the new lists, and a workspace saved before reads back unchanged", () => {
  const info = { businessName: "Shop" };
  const fresh = normalizeEditable(info, undefined);
  assert.deepEqual([fresh.pages, fresh.pageResponses], [[], []]);
  const kept = normalizeEditable(info, { ...fresh, pages: [pageRow()], pageResponses: [{ page: "enquiry-k3m9x2qa", title: "Enquiry", at: "2099-03-04 10:00", name: "A", contact: "b", answers: "c", consent: "", kind: "form" }] });
  assert.equal(kept.pages[0].slug, "enquiry-k3m9x2qa"); assert.equal(kept.pageResponses[0].answers, "c");
  assert.throws(() => normalizeEditable(info, { ...fresh, pages: Array.from({ length: 21 }, (_, i) => ({ ...pageRow(), slug: `p-${i}-abcdefgh` })) }), /supported/);
  assert.throws(() => normalizeEditable(info, { ...fresh, pages: [{ ...pageRow(), minutes: -1 }] }), /supported/);
});

test("the server hands /p/ to the public pages, the repository can find a page by its code, and every page change is on the list of spoken changes", () => {
  const fs = require("node:fs"); const path = require("node:path");
  const root = path.join(__dirname, "..", "..");
  const adapter = fs.readFileSync(path.join(root, "nexus", "compat", "server-runtime-adapter.js"), "utf8");
  assert.ok(adapter.includes('if (url.pathname.startsWith("/p/")) return publicPages.handle(req, res, url);'));
  assert.ok(adapter.indexOf('startsWith("/p/")') < adapter.indexOf('startsWith("/api/nexus/runtime")'));
  assert.match(fs.readFileSync(path.join(root, "nexus", "data", "record-repository.js"), "utf8"), /async findPageRecord\(\{ slug \}\)/);
  assert.ok(fs.readFileSync(path.join(root, "nexus", "business", "authoritative-executor.js"), "utf8").includes("...pagesVoice.PAGE_WRITE_INTENTS]);"));
  for (const intent of pagesVoice.PAGE_WRITE_INTENTS) assert.equal(voiceDispatch.isReadIntent(intent), false, intent);
});

test("a survey whose own questions end in a question mark is still a request to make one (found live, 10 November 2026)", () => {
  const live = "Create a survey called Feedback with the questions: What did you like? What could we improve?";
  assert.equal(pagesVoice.classifyPage(live), "createPage");
  assert.equal(pagesVoice.classifyPage("Make a survey called Visit Feedback asking How was your visit? Would you come back?"), "createPage");
  assert.deepEqual(pagesVoice.fieldsIn(live), ["What did you like", "What could we improve"]);
  // real questions about pages stay questions
  assert.equal(pagesVoice.classifyPage("What did people answer on my feedback survey?"), "pageResponses");
  assert.equal(pagesVoice.classifyPage("What is the link for my feedback survey?"), "pageLink");
});
