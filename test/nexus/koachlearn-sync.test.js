"use strict";
// Kyro and Koach Learn kept in step (owner, 27 Nov 2026: "we have no developer other than you. you have to figure this out", then "Admin sign-in sync"). Koach Learn's only record of a
// learner's progress is a certificate; Kyro reads the admin certificate list with an admin account made for it, and a learner links their record by one certificate number.
// The pages here are made up (the shape is the live site's, checked on 27 Nov 2026): no real learner's data is in this file.
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const path = require("path");
const sync = require("../../nexus/knowledge/koachlearn-sync.js");
const study = require("../../public/kyro-koachlearn-study.js");
const kl = require("../../nexus/knowledge/koachlearn-courses.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { fakeMemory } = require("./farmwork-fake.js");

const ROOT = path.join(__dirname, "..", "..");
const read = rel => fs.readFileSync(path.join(ROOT, rel), "utf8");

// ---- a made-up admin certificate page, in the live site's shape ----
const td = value => ["$", "td", null, { className: "p-4", children: value }];
const th = value => ["$", "th", null, { className: "h-12", children: value }];
const HEAD = ["Id", "Certificate Number", "Student Id", "Student Name", "Student Email", "Course Id", "Course Name", "Course Completion Date", "Actions"].map(th);
function certRow(id, number, studentId, courseId, courseName, iso) {
  return ["$", "tr", null, { className: "border-b", children: [td(id), td(number), td(studentId), td("Ada Example"), td("ada@example.com"), td(courseId), td(courseName),
    td(["$", "$L19", null, { date: `$D${iso}` }]), td(["$", "div", null, { className: "flex", children: ["$", "$L1a", null, { id }] }])] }];
}
function table(rows, { skeleton = false, pageCount = 1 } = {}) {
  const body = skeleton ? [["$", "tr", null, { children: HEAD.map(() => td(["$", "div", null, { className: "h-6 bg-gray-200 animate-pulse" }])) }]] : rows;
  return [["$", "div", null, { className: "relative w-full overflow-auto", children: ["$", "table", null, { children: [["$", "thead", null, { children: ["$", "tr", null, { children: HEAD }] }], ["$", "tbody", null, { children: body }]] }] }],
    ["$", "$L1b", null, { pageCount }]];
}
function page(rows, { pageCount = 1 } = {}) {
  const lines = [`11:${JSON.stringify(table([], { skeleton: true }))}`, `12:${JSON.stringify(table(rows, { pageCount }))}`, `13:["$","html",null,{"children":"x"}]`];
  const pushes = lines.map(line => `<script>self.__next_f.push([1,${JSON.stringify(line + "\n")}])</script>`).join("");
  return `<!DOCTYPE html><html><body><div id="__next"></div>${pushes}</body></html>`;
}
const PAGE_1 = page([certRow(15, "m7ubjnb2", 9, 20, "Online Education for Underserved Communities", "2025-03-04T10:00:00.000Z"), certRow(12, "m6iuogc3", 9, 7, "Become Athlete", "2025-01-29T10:00:00.000Z")], { pageCount: 2 });
const PAGE_2 = page([certRow(2, "m62bt9uq", 9, 23, "Workforce Readiness", "2025-01-18T10:00:00.000Z"), certRow(3, "k1x9zz42", 31, 101, "Farm Records", "2026-11-20T09:00:00.000Z")]);

test("the admin certificate page is read from its page data: numbers, student and course ids, course names and dates, never a name or an email", () => {
  const t = sync.readTable(PAGE_1);
  assert.deepEqual(t.headers, ["Id", "Certificate Number", "Student Id", "Student Name", "Student Email", "Course Id", "Course Name", "Course Completion Date", "Actions"]);
  assert.equal(t.rows.length, 2, "the loading placeholder rows are skipped");
  assert.equal(t.pageCount, 2);
  const rows = sync.certificatesFrom(t);
  assert.deepEqual(rows[0], { number: "m7ubjnb2", studentId: 9, courseId: 20, courseName: "Online Education for Underserved Communities", completedAt: "2025-03-04T10:00:00.000Z" });
  assert.doesNotMatch(JSON.stringify(rows), /Ada|example\.com/, "the learner's name and email are not kept");
  // (headings in another admin language: the columns are found by place)
  const translated = sync.certificatesFrom({ headers: ["Id", "Numéro", "Élève", "Nom", "Courriel", "Cours", "Nom du cours", "Date", "Actions"], rows: t.rows });
  assert.equal(translated[1].number, "m6iuogc3");
  assert.equal(translated[1].courseId, 7);
  assert.equal(sync.normalNumber(" M6IU-OGC3 "), "m6iuogc3");
});

function fakeSite({ password = "right-password", pages = { 1: PAGE_1, 2: PAGE_2 }, down = false } = {}) {
  const calls = [];
  const response = (status, { body = "", headers = {}, cookies = [] } = {}) => ({ status, ok: status >= 200 && status < 300,
    headers: { get: name => headers[name.toLowerCase()] || null, getSetCookie: () => cookies }, text: async () => body, json: async () => JSON.parse(body) });
  const fetchImpl = async (url, init = {}) => {
    calls.push({ url: String(url), method: init.method || "GET", cookie: init.headers?.cookie || "", body: init.body || "" });
    if (down) throw new Error("ECONNREFUSED");
    const u = new URL(url);
    if (u.pathname === "/api/auth/csrf") return response(200, { body: JSON.stringify({ csrfToken: "tok123" }), cookies: ["__Host-authjs.csrf-token=tok123%7Chash; Path=/; HttpOnly"] });
    if (u.pathname === "/api/auth/callback/credentials") {
      const form = new URLSearchParams(init.body);
      if (form.get("csrfToken") !== "tok123" || form.get("password") !== password) return response(302, { headers: { location: `${u.origin}/login?error=CredentialsSignin` } });
      return response(302, { headers: { location: `${u.origin}/dashboard` }, cookies: ["__Secure-authjs.session-token=sess456; Path=/; HttpOnly; Secure"] });
    }
    if (u.pathname === "/dashboard/admin/certificate") {
      if (!/authjs\.session-token=sess456/.test(init.headers?.cookie || "")) return response(307, { headers: { location: `${u.origin}/login` } });
      return response(200, { body: pages[Number(u.searchParams.get("page") || 1)] || page([]) });
    }
    return response(404);
  };
  return { fetchImpl, calls };
}

test("Kyro signs in the way the site's own form does, reads every page of certificates, and reads again at most once an hour", async () => {
  let clock = 1_000_000;
  const site = fakeSite();
  const s = sync.createKoachLearnSync({ fetchImpl: site.fetchImpl, email: "kyro-sync@example.org", password: "right-password", base: "https://kl.test", now: () => clock });
  assert.equal(s.configured, true);
  const all = await s.certificates();
  assert.equal(all.length, 4, "both pages");
  assert.deepEqual(site.calls.map(c => `${c.method} ${new URL(c.url).pathname}${new URL(c.url).search}`), ["GET /api/auth/csrf", "POST /api/auth/callback/credentials", "GET /dashboard/admin/certificate", "GET /dashboard/admin/certificate?page=2"]);
  assert.ok(site.calls.every(c => !/right-password|kyro-sync/.test(c.url)), "the sign-in is never in an address");
  assert.equal((await s.byNumber("M62BT9UQ")).courseName, "Workforce Readiness");
  assert.equal(await s.byNumber("zzzz9999"), null);
  assert.deepEqual((await s.forStudent(9)).map(r => r.courseId), [20, 7, 23]);
  await s.certificates();
  assert.equal(site.calls.length, 4, "within the hour nothing is read again");
  clock += 61 * 60 * 1000;
  await s.certificates();
  assert.equal(site.calls.length, 6, "after an hour the list is read again with the same sign-in");
});

test("a refused sign-in, an ended session and an unreachable site", async () => {
  const wrong = sync.createKoachLearnSync({ fetchImpl: fakeSite().fetchImpl, email: "kyro-sync@example.org", password: "wrong-password", base: "https://kl.test" });
  assert.equal(await wrong.certificates(), null, "nothing to show, nothing made up");
  assert.match(wrong.status().lastError, /signin_refused/);
  assert.doesNotMatch(JSON.stringify(wrong.status()), /wrong-password/);

  // the session ends between reads: Kyro signs in again once
  let clock = 0; const site = fakeSite();
  const s = sync.createKoachLearnSync({ fetchImpl: async (url, init) => { if (String(url).includes("page=2") && clock > 0) init = { ...init, headers: { ...init.headers, cookie: "" } }; return site.fetchImpl(url, init); }, email: "a@example.org", password: "right-password", base: "https://kl.test", now: () => clock });
  await s.certificates(); clock = 2 * 60 * 60 * 1000;
  const again = await s.certificates();
  assert.equal(again.length, 4);

  // the site goes down after a good read: the last list is kept
  let down = false; const site2 = fakeSite();
  let clock2 = 0;
  const kept = sync.createKoachLearnSync({ fetchImpl: async (url, init) => (down ? (() => { throw new Error("ECONNREFUSED"); })() : site2.fetchImpl(url, init)), email: "a@example.org", password: "right-password", base: "https://kl.test", now: () => clock2 });
  assert.equal((await kept.certificates()).length, 4);
  down = true; clock2 = 2 * 60 * 60 * 1000;
  assert.equal((await kept.certificates()).length, 4);
  assert.match(kept.status().lastError, /ECONNREFUSED/);

  const off = sync.createKoachLearnSync({ fetchImpl: fakeSite().fetchImpl });
  assert.equal(off.configured, false);
  assert.equal(await off.certificates(), null);
});

test("a certificate number links the record and a request to see it is read, in all 10 languages", () => {
  const links = ["My certificate number is m62bt9uq", "my certificate number is M 6 2 B T 9 U Q.", "Mi número de certificado es m62bt9uq", "Mon numéro de certificat est m62bt9uq",
    "O número do meu certificado é m62bt9uq", "Namba ya cheti changu ni m62bt9uq", "رقم شهادتي m62bt9uq", "Lambar takardar shaida ta m62bt9uq", "የሰርተፊኬት ቁጥሬ m62bt9uq ነው",
    "Nọ́mbà ìwé ẹ̀rí mi ni m62bt9uq", "Nọmba asambodo m bụ m62bt9uq"];
  for (const say of links) assert.deepEqual(study.recordRequest(say), { kind: "link", number: "m62bt9uq" }, say);
  for (const say of ["What have I finished on Koach Learn?", "Show my Koach Learn certificates", "Link my Koach Learn", "Show my certificates", "Nimemaliza nini kwenye Koach Learn?"]) {
    assert.equal(study.recordRequest(say)?.kind, "show", say);
  }
  for (const say of ["How do I get a certificate?", "I want a certificate in farming", "Find Koach Learn courses about farming", "Find me a course on farming.", "Help me study number 1", "I got a certificate in 2025"]) {
    assert.equal(study.recordRequest(say), null, say);
  }
});

// ---- through the planner ----
function setup({ configured = true, reachable = true } = {}) {
  const CERTS = [{ number: "m62bt9uq", studentId: 9, courseId: 23, courseName: "Workforce Readiness", completedAt: "2025-01-18T10:00:00.000Z" },
    { number: "k1x9zz42", studentId: 31, courseId: 101, courseName: "Farm Records", completedAt: "2026-11-20T09:00:00.000Z" }];
  const koachLearnSync = { configured, certificates: async () => (reachable ? CERTS : null), byNumber: async n => (reachable ? CERTS.find(c => c.number === sync.normalNumber(n)) || null : null),
    forStudent: async id => (reachable ? CERTS.filter(c => c.studentId === id) : null) };
  const saved = [];
  const records = { list: async q => saved.filter(row => row.owner === q.ownerId && row.workspace_id === q.workspaceId && row.record_type === q.recordType).slice(-1),
    upsertSingleton: async row => { const stored = { owner: row.ownerId, workspace_id: row.workspaceId, record_type: row.recordType, classification: row.classification, data: row.data }; saved.push(stored); return stored; } };
  const COURSES = { en: [{ i: 101, n: "Farm Records", c: 46, s: "Keeping records", d: "For farmers", g: "agri-farm-records" }, { i: 102, n: "Poultry Basics", c: 46, s: "Chickens", d: "For farmers", g: "agri-poultry" }] };
  const koachLearn = kl.createKoachLearnCatalog({ fetchImpl: async url => {
    const file = String(url).split("/data/")[1].replace(/\.json$/, "");
    if (file === "meta") return { ok: true, status: 200, json: async () => ({ counts: {}, categories: [{ id: 46, name: "Agriculture (Africa)" }] }) };
    return { ok: true, status: 200, json: async () => COURSES[file] || [] };
  } });
  const model = { plan: async () => { throw new Error("the planning model must not be asked"); }, respond: async () => "model" };
  const planner = new OpenEndedPlanner({ model, tools: { list: async () => [] }, applications: { list: () => [] }, memory: Object.assign(fakeMemory(), { search: async () => [] }),
    koachLearn, koachLearnSync, automationRecords: records, tutorSessions: require("../../nexus/tutor/tutor.js").createTutorSessions() });
  const ask = (text, { locale = "en", user = "u1" } = {}) => planner.plan({ command: { text, tenantId: "t1", actorId: user, locale }, context: { timeZone: "Africa/Lagos" } });
  return { ask, saved };
}

test("through the planner: asked first for a certificate number, linked by it, then the finished courses are shown and marked in course lists", async () => {
  const { ask, saved } = setup();
  const before = await ask("What have I finished on Koach Learn?");
  assert.equal(before.knowledge, "koachlearn-record:ask");
  assert.match(before.response, /^To link your Koach Learn record, type or say one of your certificate numbers\./);
  assert.doesNotMatch(before.response, /Workforce|Farm Records/, "nothing is shown before the record is linked");

  const wrong = await ask("My certificate number is zz99zz99");
  assert.equal(wrong.knowledge, "koachlearn-record:not-found");
  assert.equal(saved.length, 0);

  const linked = await ask("My certificate number is M 6 2 B T 9 U Q");
  assert.equal(linked.knowledge, "koachlearn-record:shown");
  assert.equal(linked.response, "Linked. Your Koach Learn record is now with Kyro.\n\nOn Koach Learn you have finished 1 course:\n• Workforce Readiness (2025-01-18)\n\nSay \"find me a course on\" and a topic to choose your next course.");
  assert.deepEqual(saved.at(-1).data.studentId, 9, "only Koach Learn's student id is kept");
  assert.deepEqual(Object.keys(saved.at(-1).data).sort(), ["linkedAt", "studentId"]);
  assert.equal(saved.at(-1).workspace_id, "koachlearn-link:u1");

  const later = await ask("Show my Koach Learn certificates");
  assert.match(later.response, /^On Koach Learn you have finished 1 course:\n• Workforce Readiness/);

  // another person on Kyro sees nothing of it
  const other = await ask("What have I finished on Koach Learn?", { user: "u2" });
  assert.equal(other.knowledge, "koachlearn-record:ask");

  // a course list names a course the person already has a certificate for
  const u3 = setup();
  await u3.ask("My certificate number is k1x9zz42", { user: "u3" });
  const list = await u3.ask("Find me a course on farm records", { user: "u3" });
  assert.equal(list.knowledge, "koachlearn-courses:found");
  assert.match(list.response, /Already finished on Koach Learn: Farm Records\.$/);
  const notLinked = await u3.ask("Find me a course on farm records", { user: "u4" });
  assert.doesNotMatch(notLinked.response, /Already finished/);
});

test("in the learner's language; and when Kyro is not connected to Koach Learn, or Koach Learn cannot be reached", async () => {
  const { ask } = setup();
  const ha = await ask("Lambar takardar shaida ta m62bt9uq", { locale: "ha" });
  assert.match(ha.response, /^An haɗa\. Bayananka na Koach Learn yanzu suna tare da Kyro\.\n\nA Koach Learn ka gama kwas 1:\n• Workforce Readiness/);
  const off = await setup({ configured: false }).ask("My certificate number is m62bt9uq");
  assert.equal(off.response, "Kyro is not connected to Koach Learn yet.");
  const down = await setup({ reachable: false }).ask("My certificate number is m62bt9uq");
  assert.equal(down.response, "I could not reach Koach Learn just now. Please try again in a few minutes.");
  for (const lang of Object.keys(sync.TEXT)) for (const key of Object.keys(sync.TEXT.en)) assert.ok(sync.TEXT[lang][key], `${lang} ${key}`);
});

test("wired: the runtime gives the planner the sync from the owner's two Render settings, and the page sends a spoken record request the typed way", () => {
  const runtime = read("nexus/runtime/create-runtime.js");
  assert.ok(runtime.includes('koachLearnSync: createKoachLearnSync({ email: env.KOACHLEARN_SYNC_EMAIL || "", password: env.KOACHLEARN_SYNC_PASSWORD || "" }),'));
  const app = read("public/app.js");
  assert.ok(app.includes('if (window.KyroKoachLearnStudy && typeof window.KyroKoachLearnStudy.recordRequest === "function" && window.KyroKoachLearnStudy.recordRequest(text)) return true;'));
  // the sign-in is never written to a log
  assert.doesNotMatch(read("nexus/knowledge/koachlearn-sync.js"), /console\.|logger\./);
});
