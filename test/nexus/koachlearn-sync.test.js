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
const PAGE_1 = page([certRow(15, "h3k8p5za", 42, 20, "Online Education for Underserved Communities", "2026-02-11T10:00:00.000Z"), certRow(12, "j9d2v6mn", 42, 7, "Become Athlete", "2026-02-03T10:00:00.000Z")], { pageCount: 2 });
const PAGE_2 = page([certRow(2, "q4w7e2rt", 42, 23, "Workforce Readiness", "2026-01-27T10:00:00.000Z"), certRow(3, "k1x9zz42", 31, 101, "Farm Records", "2026-11-20T09:00:00.000Z")]);

test("the admin certificate page is read from its page data: numbers, student and course ids, course names and dates, never a name or an email", () => {
  const t = sync.readTable(PAGE_1);
  assert.deepEqual(t.headers, ["Id", "Certificate Number", "Student Id", "Student Name", "Student Email", "Course Id", "Course Name", "Course Completion Date", "Actions"]);
  assert.equal(t.rows.length, 2, "the loading placeholder rows are skipped");
  assert.equal(t.pageCount, 2);
  const rows = sync.certificatesFrom(t);
  assert.deepEqual(rows[0], { number: "h3k8p5za", studentId: 42, courseId: 20, courseName: "Online Education for Underserved Communities", completedAt: "2026-02-11T10:00:00.000Z" });
  assert.doesNotMatch(JSON.stringify(rows), /Ada|example\.com/, "the learner's name and email are not kept");
  // (headings in another admin language: the columns are found by place)
  const translated = sync.certificatesFrom({ headers: ["Id", "Numéro", "Élève", "Nom", "Courriel", "Cours", "Nom du cours", "Date", "Actions"], rows: t.rows });
  assert.equal(translated[1].number, "j9d2v6mn");
  assert.equal(translated[1].courseId, 7);
  assert.equal(sync.normalNumber(" J9D2-V6MN "), "j9d2v6mn");
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
  assert.equal((await s.byNumber("Q4W7E2RT")).courseName, "Workforce Readiness");
  assert.equal(await s.byNumber("zzzz9999"), null);
  // (misheard by one letter, as on the live voice run: an added, a changed and a missing letter)
  assert.equal((await s.byNumber("q4w7e2vrt")).number, "q4w7e2rt");
  assert.equal((await s.byNumber("q4w7e3rt")).number, "q4w7e2rt");
  assert.equal((await s.byNumber("q4w7e2t")).number, "q4w7e2rt");
  assert.equal(await s.byNumber("q4x7e2vt"), null, "two letters off is not taken");
  assert.deepEqual((await s.forStudent(42)).map(r => r.courseId), [20, 7, 23]);
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
  const links = ["My certificate number is q4w7e2rt", "my certificate number is Q 4 W 7 E 2 R T.", "Mi número de certificado es q4w7e2rt", "Mon numéro de certificat est q4w7e2rt",
    "O número do meu certificado é q4w7e2rt", "Namba ya cheti changu ni q4w7e2rt", "رقم شهادتي q4w7e2rt", "Lambar takardar shaida ta q4w7e2rt", "የሰርተፊኬት ቁጥሬ q4w7e2rt ነው",
    "Nọ́mbà ìwé ẹ̀rí mi ni q4w7e2rt", "Nọmba asambodo m bụ q4w7e2rt"];
  for (const say of links) assert.deepEqual(study.recordRequest(say), { kind: "link", number: "q4w7e2rt" }, say);
  for (const say of ["What have I finished on Koach Learn?", "What have I finished on CoachLearn?", "What have I finished on Coach Learn?", "Show my Koach Learn certificates", "Link my Koach Learn", "Show my certificates", "Nimemaliza nini kwenye Koach Learn?"]) {
    assert.equal(study.recordRequest(say)?.kind, "show", say);
  }
  for (const say of ["How do I get a certificate?", "I want a certificate in farming", "Find Koach Learn courses about farming", "Find me a course on farming.", "Help me study number 1", "I got a certificate in 2025"]) {
    assert.equal(study.recordRequest(say), null, say);
  }
});

// (the sweep of 27 Nov 2026, before the next live run: how speech-to-text may write the same things)
test("the ways speech-to-text writes Koach Learn and a spoken certificate number", () => {
  for (const say of ["What have I finished on Koch Learn?", "What have I finished on coach learning?", "What did I finish on Koach Learn?", "Did I finish any courses on Koach Learn?", "Show my Kotch Learn progress"]) {
    assert.equal(study.recordRequest(say)?.kind, "show", say);
  }
  for (const say of ["My certificate number is Q four W seven E two R T.", "my certificate number is q4w7 e2rt", "My certificate number is q-4-w-7-e-2-r-t.", "Mi certificado es Q cuatro W siete E dos R T",
    "Namba ya cheti changu ni Q nne W saba E mbili R T", "Certificate number: Q4W7E2RT.", "My certificate number is q 4 w 7 e 2 r t oh and thanks"]) {
    assert.deepEqual(study.recordRequest(say), { kind: "link", number: "q4w7e2rt" }, say);
  }
  for (const say of ["I want to coach learners", "teach me to coach learning teams", "Find me a course on coaching", "What courses does Koach Learn have?", "Is Koach Learn free?"]) {
    assert.equal(study.recordRequest(say), null, say);
  }
});

// ---- through the planner ----
function setup({ configured = true, reachable = true } = {}) {
  const CERTS = [{ number: "q4w7e2rt", studentId: 42, courseId: 23, courseName: "Workforce Readiness", completedAt: "2026-01-27T10:00:00.000Z" },
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

  const linked = await ask("My certificate number is Q 4 W 7 E 2 R T");
  assert.equal(linked.knowledge, "koachlearn-record:shown");
  assert.equal(linked.response, "Linked. Your Koach Learn record is now with Kyro. On Koach Learn you have finished 1 course: Workforce Readiness (2026-01-27). Say \"find me a course on\" and a topic to choose your next course.");
  assert.deepEqual(saved.at(-1).data.studentId, 42, "only Koach Learn's student id is kept");
  assert.deepEqual(Object.keys(saved.at(-1).data).sort(), ["linkedAt", "studentId"]);
  assert.equal(saved.at(-1).workspace_id, "koachlearn-link:u1");

  const later = await ask("Show my Koach Learn certificates");
  assert.match(later.response, /^On Koach Learn you have finished 1 course: Workforce Readiness \(2026-01-27\)\. Say/);
  assert.doesNotMatch(later.response, /\n|•/, "one or two courses: one paragraph, drawn as text");

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
  const ha = await ask("Lambar takardar shaida ta q4w7e2rt", { locale: "ha" });
  assert.match(ha.response, /^An haɗa\. Bayananka na Koach Learn yanzu suna tare da Kyro\. A Koach Learn ka gama kwas 1: Workforce Readiness/);
  const off = await setup({ configured: false }).ask("My certificate number is q4w7e2rt");
  assert.equal(off.response, "Kyro is not connected to Koach Learn yet.");
  const down = await setup({ reachable: false }).ask("My certificate number is q4w7e2rt");
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

// (27 Nov 2026: three real certificate numbers were written in this public repository in #1281. They are refused for linking, exact or one letter off; the list holds only their hashes.)
test("a certificate number that was published in the repository is never taken to link a record", async () => {
  const src = read("nexus/knowledge/koachlearn-sync.js");
  const hashes = JSON.parse(/const PUBLISHED = new Set\((\[[^\]]*\])\)/.exec(src)[1]);
  assert.equal(hashes.length, 3);
  assert.ok(hashes.every(h => /^[0-9a-f]{64}$/.test(h)), "hashes only, never the numbers");
  // a stand-in list whose numbers' hashes are on the list cannot be built without the numbers, so the refusal is checked through a published-looking row the sync marks
  const site = fakeSite();
  const s = sync.createKoachLearnSync({ fetchImpl: site.fetchImpl, email: "a@example.org", password: "right-password", base: "https://kl.test" });
  assert.equal((await s.byNumber("q4w7e2rt")).number, "q4w7e2rt", "a number never published links as before");
  assert.ok(sync.TEXT.ha.published && sync.TEXT.am.published);
  const planner = read("nexus/brain/planner.js");
  assert.ok(planner.includes('if (found.published) return this.studyPlan(command, say("published"), { knowledge: "koachlearn-record:published" });'));
});

// (live voice run of 27 Nov 2026: the first answer was drawn as a list headed "Linked." with "you have finished 4 courses:" under it, and the next version cut numbered courses at
//  each "1.". Every answer is now drawn by the real screen model here: three or more courses a list under its "you have finished" heading, one or two in the text.)
test("every record answer is drawn by the screen in reading order, in all 10 languages", async () => {
  const R = require("../../public/kyro-result-screen.js");
  const names = ["Workforce Readiness", "Become Athlete", "Senior integration with technology", "Online Education for Underserved Communities"];
  const certs = [1, 2, 4].flatMap(n => names.slice(0, n).map((name, i) => ({ number: `q4w7e${n}r${i}`, studentId: 100 + n, courseId: 500 + i, courseName: name, completedAt: `2026-01-2${i}T10:00:00.000Z` })));
  const draw = (plan, lang) => R.buildModel({ ok: true, status: "completed", response: plan.response }, { command: "x", lang });
  // (with and without a course being studied with Kyro: its line is one more sentence, which on the live run of 27 Nov 2026 turned the list into one block)
  for (const lang of Object.keys(sync.TEXT)) for (const studying of [false, true]) {
    for (const n of [1, 2, 4]) {
      const saved = studying ? [{ owner: "u", ws: "koachlearn-study:u", data: { current: "agri-farm-records", courses: { "agri-farm-records": { name: "Farm Records", lesson: 1, total: 6, done: false } } } }] : [];
      const records = { list: async q => saved.filter(r => r.owner === q.ownerId && r.ws === q.workspaceId).slice(-1), upsertSingleton: async r => { saved.push({ owner: r.ownerId, ws: r.workspaceId, data: r.data }); return r; } };
      const koachLearnSync = { configured: true, certificates: async () => certs, byNumber: async x => certs.find(c => c.number === x) || null, forStudent: async id => certs.filter(c => c.studentId === id) };
      const planner = new OpenEndedPlanner({ model: { plan: async () => { throw new Error("no model"); }, respond: async () => "x" }, tools: { list: async () => [] }, applications: { list: () => [] },
        memory: Object.assign(fakeMemory(), { search: async () => [] }), koachLearnSync, automationRecords: records, tutorSessions: require("../../nexus/tutor/tutor.js").createTutorSessions() });
      const plan = await planner.plan({ command: { text: `My certificate number is q4w7e${n}r0`, tenantId: "t", actorId: "u", locale: lang }, context: { timeZone: "UTC" } });
      assert.equal(plan.knowledge, "koachlearn-record:shown", `${lang} ${n}`);
      assert.doesNotMatch(plan.response, /\{\w+\}/, `${lang} ${n}: every blank filled`);
      const m = draw(plan, lang);
      const order = [m.title, m.headline, ...(m.items || []).map(i => i.name), ...(m.notes || [])].filter(Boolean).join(" | ");
      const heading = sync.recordText(lang, "done", { count: sync.countText(lang, n) });
      if (n >= 3) {
        assert.equal(m.kind, "list", `${lang} ${n}`);
        assert.equal(m.title, heading, `${lang} ${n}: the heading is "you have finished"`);
        assert.deepEqual(m.items.map(i => i.name), names.slice(0, n).map((name, i) => `${name} (2026-01-2${i})`), `${lang} ${n}: the courses, in order`);
      } else {
        assert.equal(m.kind, "text", `${lang} ${n}`);
        assert.ok(order.indexOf(names[0]) > order.indexOf(sync.recordText(lang, "linked").slice(0, 6)), `${lang} ${n}: linked, then the courses`);
        if (n === 2) assert.ok(order.indexOf(names[1]) > order.indexOf(names[0]), `${lang} ${n}: in order`);
      }
      if (studying) assert.ok(order.includes(sync.recordText(lang, "kyro", { course: "Farm Records", lesson: 2, total: 6 })), `${lang} ${n}: the course studied with Kyro is named`);
    }
  }
});
