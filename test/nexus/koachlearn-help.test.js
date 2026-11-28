"use strict";
// The owner's list for 30 November (19 Nov 2026), finished 27 Nov: inside a Koach Learn course, "explain it more simply" and "show it in English"; a learner's "this wording is
// confusing" report; quick-check pass rates per language (for the owner); the steps to sign up for Koach Learn; a study-reminder tip when a lesson stops.
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const path = require("path");
const study = require("../../public/kyro-koachlearn-study.js");
const kls = require("../../nexus/knowledge/koachlearn-study.js");
const help = require("../../nexus/knowledge/koachlearn-help-text.js");
const insights = require("../../nexus/knowledge/koachlearn-insights.js");
const kl = require("../../nexus/knowledge/koachlearn-courses.js");
const R = require("../../public/kyro-result-screen.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { fakeMemory } = require("./farmwork-fake.js");
const { readRepeatRequest } = require("../../nexus/reminders/repeat-phrase.js");
const { parseSwahiliRepeating } = require("../../nexus/reminders/swahili-reminder.js");

const ROOT = path.join(__dirname, "..", "..");
const read = rel => fs.readFileSync(path.join(ROOT, rel), "utf8");

test("the words: help in a lesson, signing up, and the owner's report, in the 10 languages, and nothing else taken for them", () => {
  const helpCases = [["This wording is confusing", "confusing"], ["Maneno haya yanachanganya", "confusing"], ["Explain it more simply", "plain"], ["I don't understand", "plain"],
    ["No entiendo", "plain"], ["Sielewi", "plain"], ["Ban gane ba", "plain"], ["Kò yé mi", "plain"], ["Aghọtaghị m", "plain"], ["አልገባኝም", "plain"], ["لم أفهم", "plain"],
    ["Show it in English", "english"], ["Onyesha kwa Kiingereza", "english"]];
  for (const [say, kind] of helpCases) assert.equal(study.lessonHelpRequest(say)?.kind, kind, say);
  for (const say of ["The answer is 2", "Money in and money out", "I understand, go on", "remind me to study every day at 7 pm"]) assert.equal(study.lessonHelpRequest(say), null, say);
  for (const say of ["How do I sign up for Koach Learn?", "Create a Koach Learn account", "Join Koach Learn", "Nataka kujisajili Koach Learn"]) assert.equal(study.signupRequest(say), true, say);
  for (const say of ["How do I sign up for the shopping list?", "Join the meeting"]) assert.equal(study.signupRequest(say), false, say);
  for (const say of ["Show the learner reports", "Pass rates by language", "Show the Koach Learn report"]) assert.equal(study.insightsRequest(say), true, say);
  assert.equal(study.insightsRequest("What is the pass rate for maize?"), false);
  for (const lang of Object.keys(help.TEXT)) for (const key of ["plain", "english", "confusing", "englishHeader", "thanks", "signupTitle", "signupSteps", "signupButton", "signupNote"]) assert.ok(help.TEXT[lang][key], `${lang} ${key}`);
});

test("the tutor's hidden CHECK line is taken off and read; the rules ask for it; a plain re-teach is asked for in the goal", () => {
  assert.deepEqual(insights.readCheck("Yes, that is right.\nCHECK: right"), { text: "Yes, that is right.", check: "right" });
  assert.deepEqual(insights.readCheck("Not quite.\nCHECK: wrong\nLESSON: next"), { text: "Not quite.\nLESSON: next", check: "wrong" });
  assert.deepEqual(insights.readCheck("No line here."), { text: "No line here.", check: null });
  const rules = kls.studyInstructions("English");
  assert.match(rules, /CHECK: right or CHECK: wrong/);
  assert.ok(rules.length <= 2000);
  const pack = { name: "C", chapters: [{ name: "x", lessons: [{ title: "L1", text: "Text one", check: [] }] }] };
  assert.match(kls.studyGoal({ pack, index: 0, said: "I don't understand", plain: true, languageName: "English" }), /The learner did not understand\. Teach the part you were on again in much simpler words/);
  assert.doesNotMatch(kls.studyGoal({ pack, index: 0, said: "ok", languageName: "English" }), /did not understand/);
});

test("the study-reminder tip is a sentence the reminders understand (English and Kiswahili, the languages that have it)", () => {
  assert.deepEqual(readRepeatRequest("remind me to study every day at 7 pm"), { action: "add", task: "study", times: ["19:00"], days: "daily" });
  const sw = parseSwahiliRepeating("nikumbushe kusoma kila siku saa moja jioni");
  assert.equal(sw.cadenceSw, "kila siku");
  assert.match(help.TEXT.en.remind, /"remind me to study every day at 7 pm"/);
  assert.match(help.TEXT.sw.remind, /"nikumbushe kusoma kila siku saa moja jioni"/);
  for (const lang of Object.keys(help.TEXT).filter(l => l !== "en" && l !== "sw")) assert.equal(help.TEXT[lang].remind, undefined, `${lang}: no tip until its reminder sentence is known to work`);
});

// ---- through the planner ----
const COURSES = { en: [{ i: 101, n: "Farm Records", c: 46, s: "Keeping records", d: "For farmers", g: "agri-farm-records" }], ha: [{ i: 201, n: "Bayanan Noma", c: 46, s: "Bayanai", d: "Ga manoma", g: "agri-farm-records" }] };
const pack = (lang, name) => ({ slug: "agri-farm-records", lang, name, chapters: [{ name: "Ch", lessons: [1, 2].map(n => ({ title: `${lang} lesson ${n}`, text: `${lang} lesson ${n} text`, check: [] })) }] });
function setup({ env = {}, email = "learner@example.org", roles = ["standard-user"] } = {}) {
  const rows = [];
  const records = {
    list: async q => rows.filter(r => (!q.ownerId || r.owner_id === q.ownerId) && (!q.workspaceId || r.workspace_id === q.workspaceId) && (!q.recordType || r.record_type === q.recordType)).slice().reverse().slice(0, q.limit || 100),
    create: async r => { const row = { record_id: `rec_${rows.length + 1}`, version: 1, owner_id: r.ownerId, workspace_id: r.workspaceId, record_type: r.recordType, classification: r.classification, data: r.data }; rows.push(row); return row; },
    upsertSingleton: async r => { const found = rows.find(x => x.owner_id === r.ownerId && x.workspace_id === r.workspaceId && x.record_type === r.recordType);
      if (found) { found.data = r.data; found.version += 1; return found; } return records.create(r); },
    update: async ({ recordId, expectedVersion, data }) => { const row = rows.find(x => x.record_id === recordId); if (!row || row.version !== expectedVersion) throw new Error("Record version conflict or record unavailable."); row.data = data; row.version += 1; return row; }
  };
  const koachLearn = kl.createKoachLearnCatalog({ fetchImpl: async url => {
    const file = String(url).split("/data/")[1].replace(/\.json$/, "");
    if (file === "meta") return { ok: true, status: 200, json: async () => ({ counts: {}, categories: [{ id: 46, name: "Agriculture" }] }) };
    return { ok: true, status: 200, json: async () => COURSES[file] || [] };
  } });
  const asked = []; const replies = [];
  const model = { plan: async () => { throw new Error("no planning model"); }, respond: async request => { asked.push(request); return replies.length ? replies.shift() : "A taught step. What do you know?"; } };
  const planner = new OpenEndedPlanner({ model, tools: { list: async () => [] }, applications: { list: () => [] }, memory: Object.assign(fakeMemory(), { search: async () => [] }),
    koachLearn, studyPacks: { load: async lang => pack(lang, lang === "ha" ? "Bayanan Noma" : "Farm Records") }, automationRecords: records,
    koachLearnInsights: insights.createKoachLearnInsights({ records, env }), tutorSessions: require("../../nexus/tutor/tutor.js").createTutorSessions() });
  const ask = (t, { locale = "en", user = "u1", who = { email, roles } } = {}) => planner.plan({ command: { text: t, tenantId: "t", actorId: user, locale }, context: { timeZone: "UTC", ...who } });
  return { ask, rows, asked, replies };
}

test("through the planner: the buttons under a lesson, the lesson again more simply, in English, a wording report, and pass rates counted", async () => {
  const { ask, rows, asked, replies } = setup();
  const first = await ask("Study course agri-farm-records ha", { locale: "ha" });
  assert.equal(first.tutor.kind, "course");
  assert.deepEqual(first.offers.map(o => [o.label, o.command]), [["Ka bayyana shi a sauƙaƙe", "Explain it more simply"], ["Nuna shi da Turanci", "Show it in English"], ["Wannan rubutun yana rikitarwa", "This wording is confusing"]]);

  const plain = await ask("Explain it more simply", { locale: "ha" });
  assert.match(asked.at(-1).goal, /The learner did not understand\./);
  assert.equal(plain.tutor.kind, "course");

  const english = await ask("Show it in English", { locale: "ha" });
  assert.equal(english.response, "Nuna shi da Turanci".length ? "Ga wannan darasi da Turanci:\n\nen lesson 1 text" : "");

  const confusing = await ask("This wording is confusing", { locale: "ha" });
  assert.match(confusing.response, /^Na gode\. Na rubuta cewa wannan rubutun yana rikitarwa/);
  const report = rows.find(r => r.record_type === insights.REPORT.recordType);
  assert.deepEqual([report.owner_id, report.data.slug, report.data.lang, report.data.lesson, report.data.said], ["u1", "agri-farm-records", "ha", 1, "This wording is confusing"]);

  replies.push("Daidai ne!\nCHECK: right");
  const judged = await ask("2", { locale: "ha" });
  assert.equal(judged.response, "Daidai ne!", "the CHECK line is never shown or spoken");
  replies.push("Ba haka ba.\nCHECK: wrong");
  await ask("1", { locale: "ha" });
  const counts = rows.find(r => r.record_type === insights.CHECKS.recordType);
  assert.deepEqual(counts.data.byLang.ha, { right: 1, wrong: 1 });

  // an English learner is not offered English
  const en = setup();
  assert.deepEqual((await en.ask("Study course agri-farm-records en")).offers.map(o => o.id), ["kl-plain", "kl-confusing"]);
  // the stop line carries the reminder tip in English
  assert.match((await en.ask("stop")).response, /pick up at lesson 1\. Tip: say "remind me to study every day at 7 pm" and I will remind you\.$/);
});

test("the sign-up steps, on a list screen in order with a button to the sign-up page; Kyro never signs anyone up", async () => {
  const { ask } = setup();
  const en = await ask("How do I sign up for Koach Learn?");
  assert.equal(en.knowledge, "koachlearn-signup");
  assert.equal(en.sources[0].url, "https://www.dashboard.koachlearn.com/register");
  const m = R.buildModel({ ok: true, status: "completed", response: en.response }, { command: "x", lang: "en" });
  assert.equal(m.kind, "list");
  assert.equal(m.title, "Signing up for Koach Learn:");
  assert.equal(m.items.length, 7);
  assert.match(m.items[3].name, /at least 8 characters/);
  assert.match(m.notes.join(" "), /I never see your password/);
  const sw = await ask("Nataka kujisajili Koach Learn", { locale: "sw" });
  assert.match(sw.response, /^Kujisajili Koach Learn:/);
});

test("the owner's report: pass rates by language and the most-reported courses, for the owner only", async () => {
  const { ask, replies } = setup({ env: { KOACHLEARN_REPORT_EMAILS: "owner@example.org" } });
  await ask("Study course agri-farm-records ha", { locale: "ha" });
  await ask("This wording is confusing", { locale: "ha" });
  replies.push("Daidai!\nCHECK: right"); await ask("2", { locale: "ha" });
  replies.push("A'a.\nCHECK: wrong"); await ask("3", { locale: "ha" });
  replies.push("Daidai!\nCHECK: right"); await ask("1", { locale: "ha" });
  const notOwner = await ask("Show the learner reports");
  assert.notEqual(notOwner.knowledge, "koachlearn-insights", "a learner never sees it");
  const owner = await ask("Pass rates by language", { user: "u-owner", who: { email: "owner@example.org", roles: ["standard-user"] } });
  assert.equal(owner.knowledge, "koachlearn-insights");
  assert.match(owner.response, /^Quick-check pass rates by language:\n• Hausa: 67% right of 3 quick-check answers, 1 learner/);
  assert.match(owner.response, /Courses with the most "this wording is confusing" reports:\n• agri-farm-records \(Hausa\): 1 report/);
  assert.doesNotMatch(owner.response, /learner@example\.org|u1/, "no learner is named");
  // an Admin listed as a platform owner may see it too; an Admin not listed may not
  assert.equal(insights.isOwner({ email: "boss@example.org", roles: ["admin"] }, { PLATFORM_OWNER_EMAILS: "boss@example.org" }), true);
  assert.equal(insights.isOwner({ email: "other@example.org", roles: ["admin"] }, { PLATFORM_OWNER_EMAILS: "boss@example.org" }), false);
  assert.equal(insights.isOwner({ email: "boss@example.org", roles: ["admin"] }, {}), false, "with no list, nobody");
});

test("wired: the runtime gives the planner the insights, and the page puts a lesson's buttons under it", () => {
  assert.ok(read("nexus/runtime/create-runtime.js").includes("koachLearnInsights: createKoachLearnInsights({ records, env }),"));
  assert.ok(read("public/app.js").includes("      // (a Koach Learn course lesson has buttons under it: \"Explain it more simply\", \"Show it in English\", \"This wording is confusing\")\n      if (Array.isArray(result.plan?.offers) && result.plan.offers.length) answer.offers = result.plan.offers;"));
});

test("the page takes a spoken sign-up or report request itself, the typed way", () => {
  const app = read("public/app.js");
  assert.ok(app.includes('window.KyroKoachLearnStudy.signupRequest(text)) return true;'));
  assert.ok(app.includes('window.KyroKoachLearnStudy.insightsRequest(text)) return true;'));
});
