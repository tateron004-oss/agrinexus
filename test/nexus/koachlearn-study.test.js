"use strict";
// Kyro as a tutor alongside a Koach Learn course (owner, 26 Nov 2026: "the purpose of this work was for kyro and koachlearn to be able to sync and work together", then "i want this built out now"):
// a learner picks a course (from Kyro's list, by its name, from the catalogue's "Study with Kyro" button, or "continue my course"), and Kyro teaches it from the course itself, its lessons and
// quick checks, in the learner's language, remembering the lesson each person reached.
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { execFileSync } = require("child_process");
const study = require("../../public/kyro-koachlearn-study.js");
const kls = require("../../nexus/knowledge/koachlearn-study.js");
const kl = require("../../nexus/knowledge/koachlearn-courses.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { fakeMemory } = require("./farmwork-fake.js");

const ROOT = path.join(__dirname, "..", "..");
const read = rel => fs.readFileSync(path.join(ROOT, rel), "utf8");

test("a request to STUDY a course is read in all 10 languages; finding a course, the general tutor and 'of course' are left alone", () => {
  const picks = {
    "Help me study the farm records course": { kind: "start", terms: ["farm", "records"] },
    "Help me study number 2": { kind: "start", ordinal: 2 },
    "Tutor me on the second one": { kind: "start", ordinal: 2 },
    "Teach me lesson 3 of the farm records course": { kind: "lesson", lesson: 3, terms: ["farm", "records"] },
    "lesson 4": { kind: "lesson", lesson: 4 },
    "Continue my course": { kind: "resume" },
    "next lesson": { kind: "next" },
    "Study course agri-farm-records ha": { kind: "start", slug: "agri-farm-records", slugLang: "ha" },
    "Ayúdame a estudiar el curso de agricultura": { kind: "start", terms: ["agricultura"] },
    "Aide-moi à étudier le cours sur l'agriculture": { kind: "start", terms: ["agriculture"] },
    "Me ajude a estudar o curso de agricultura": { kind: "start", terms: ["agricultura"] },
    "Nifundishe kozi ya kilimo": { kind: "start", terms: ["kilimo"] },
    "علمني دورة الزراعة": { kind: "start", terms: ["الزراعه"] },
    "Taimaka min in koyi kwas na noma": { kind: "start", terms: ["noma"] },
    "ስለ ግብርና ኮርስ አስተምረኝ": { kind: "start", terms: ["ግብርና"] },
    "Kọ́ mi ẹ̀kọ́ iṣẹ́ àgbẹ̀": { kind: "start", terms: ["ise", "agbe"] },
    "Nyere m aka ịmụ ọmụmụ ihe ugbo": { kind: "start", terms: ["ugbo"] }
  };
  for (const [say, expected] of Object.entries(picks)) {
    const got = study.studyRequest(say);
    assert.ok(got, say);
    for (const [key, value] of Object.entries(expected)) assert.deepEqual(Array.isArray(value) ? [...got[key]] : got[key], value, `${say}: ${key}`);
  }
  for (const say of ["Find me a course on farming", "Teach me fractions", "Help me with my homework", "Of course, teach me more", "I liked lesson 4 a lot", "Quiz me on world capitals", "What courses do you have?"]) {
    assert.equal(study.studyRequest(say), null, say);
  }
});

test("the sentences Kyro teaches (how to study a course, how to come back to it) are understood in every language", () => {
  for (const [lang, words] of Object.entries(kls.TEXT)) {
    const quoted = key => [...words[key].matchAll(/[«"“]\s*([^»"”]+?)\s*[»"”]/g)].map(hit => hit[1]);
    const asked = study.studyRequest(quoted("offer")[0]);
    assert.deepEqual([asked && asked.kind, asked && asked.ordinal], ["start", 1], `${lang} offer`);
    assert.equal(study.studyRequest(quoted("stopped")[0])?.kind, "resume", `${lang} stopped`);
    assert.deepEqual(Object.keys(words).sort(), Object.keys(kls.TEXT.en).sort(), `${lang} has every sentence`);
  }
  assert.deepEqual(Object.keys(kls.TEXT).sort(), ["am", "ar", "en", "es", "fr", "ha", "ig", "pt", "sw", "yo"]);
});

// ---- a tiny course archive and its packs ----
function archive() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "kl-archive-"));
  const course = (lang, name, titles) => ({
    id: lang === "en" ? "agri-farm-records" : `agri-farm-records-${lang}`, lang, translationOf: lang === "en" ? null : "agri-farm-records", category: "Agriculture (Africa)", name,
    objectives: [{ id: "O1", condition: "Using a notebook", action: "keep farm records", standard: "the same day" }],
    chapters: [{ name: "Chapter 1", lessons: titles.map((title, index) => ({ title, video: `chapter-1/0${index + 1}.mp4`, descriptionHtml: `<p><strong>${title}</strong></p><p>Lesson text ${index + 1} in ${lang}.</p><ul><li>Point A</li></ul>`,
      quickCheck: { title: "Quick Check", questions: [{ objective: "O1", q: `Question ${index + 1}?`, options: ["Right", "Wrong"], answer: 0, why: "Because it is right." }] } })) }],
    quiz: { title: "Final Quiz", questions: [{ q: "FINAL QUIZ QUESTION", options: ["a", "b"], answer: 1, why: "secret" }] },
    pretest: { questions: [{ q: "PRETEST QUESTION", options: ["a"], answer: 0 }] }
  });
  const write = (folder, data) => { fs.mkdirSync(path.join(dir, "agriculture-africa", folder), { recursive: true }); fs.writeFileSync(path.join(dir, "agriculture-africa", folder, "course.json"), JSON.stringify(data)); };
  write("agri-farm-records", course("en", "Farm Records", ["Lesson 1: Keeping records", "Lesson 2: Gross margin", "Lesson 3: Cash flow", "Lesson 4: Risk"]));
  write("agri-farm-records-ha", course("ha", "Bayanan Noma", ["Darasi 1: Ajiye bayanai", "Darasi 2: Riba", "Darasi 3: Kuɗi", "Darasi 4: Haɗari"]));
  return dir;
}
function buildPacks() {
  const out = fs.mkdtempSync(path.join(os.tmpdir(), "kl-catalog-"));
  fs.mkdirSync(path.join(out, "build"), { recursive: true });
  fs.copyFileSync(path.join(ROOT, "koachlearn-catalog", "build", "make-study-packs.js"), path.join(out, "build", "make-study-packs.js"));
  const said = execFileSync(process.execPath, [path.join(out, "build", "make-study-packs.js"), archive()], { encoding: "utf8" });
  return { packs: path.join(out, "site", "packs"), said: JSON.parse(said.trim().split("\n").pop()) };
}

test("the study packs carry each lesson's text and quick checks in every language, and never the final quiz or the pretest", () => {
  const { packs, said } = buildPacks();
  assert.deepEqual(said, { packs: 2, courses: 1, megabytes: said.megabytes, skipped: 0 });
  const en = JSON.parse(fs.readFileSync(path.join(packs, "en", "agri-farm-records.json"), "utf8"));
  const ha = JSON.parse(fs.readFileSync(path.join(packs, "ha", "agri-farm-records.json"), "utf8"));
  assert.deepEqual([en.slug, en.lang, en.name, ha.lang, ha.name], ["agri-farm-records", "en", "Farm Records", "ha", "Bayanan Noma"]);
  const lessons = kls.lessonsOf(en);
  assert.equal(lessons.length, 4);
  assert.equal(lessons[0].text, "Lesson 1: Keeping records\nLesson text 1 in en.\n- Point A", "the lesson text, line by line");
  assert.deepEqual(lessons[1].check[0], { q: "Question 2?", options: ["Right", "Wrong"], answer: 0, why: "Because it is right." });
  const whole = fs.readFileSync(path.join(packs, "en", "agri-farm-records.json"), "utf8");
  assert.doesNotMatch(whole, /FINAL QUIZ QUESTION|PRETEST QUESTION|secret|\.mp4/, "no final quiz (it leads to the certificate), no pretest, no videos");
  assert.deepEqual(JSON.parse(fs.readFileSync(path.join(packs, "index.json"), "utf8")).courses, { "agri-farm-records": ["en", "ha"] });
});

test("the model is told to teach only from the lesson, in the learner's language, with the quick checks and how to move on", () => {
  const { packs } = buildPacks();
  const pack = JSON.parse(fs.readFileSync(path.join(packs, "ha", "agri-farm-records.json"), "utf8"));
  const rules = kls.studyInstructions("Hausa");
  assert.ok(rules.length <= 2000, "it fits the model's instructions");
  assert.match(rules, /in Hausa only/); assert.match(rules, /Teach ONLY from the lesson text/); assert.match(rules, /LESSON: next/);
  const goal = kls.studyGoal({ pack, index: 1, said: "Eh", first: true, languageName: "Hausa" });
  assert.match(goal, /^Course: Bayanan Noma\. Lesson 2 of 4: Darasi 2: Riba \(Chapter 1\)\./);
  assert.match(goal, /Next lesson: Darasi 3: Kuɗi\./);
  assert.match(goal, /LESSON TEXT:\nDarasi 2: Riba\nLesson text 2 in ha\./);
  assert.match(goal, /QUICK CHECK:\n1\. Question 2\?\n   1\) Right\n   2\) Wrong\n   Right answer: 1\) Right\. Why: Because it is right\./);
  assert.match(goal, /AI tutor who teaches from the course and can make mistakes/);
  assert.deepEqual(kls.readMarker("Madalla!\nLESSON: next"), { text: "Madalla!", move: "next" });
  assert.deepEqual(kls.readMarker("To.\nLESSON: 3"), { text: "To.", move: 3 });
  assert.deepEqual(kls.readMarker("Babu alama"), { text: "Babu alama", move: null });
});

// ---- through the planner ----
const COURSES = {
  en: [{ i: 101, n: "Farm Records", c: 46, s: "Keeping records, Gross margin", d: "For farmers", g: "agri-farm-records", o: { ha: 201 } }, { i: 102, n: "Poultry Basics", c: 46, s: "Chickens", d: "For farmers", g: "agri-poultry" }],
  ha: [{ i: 201, n: "Bayanan Noma", c: 46, s: "Ajiye bayanai, Riba", d: "Ga manoma", g: "agri-farm-records", o: { en: 101 } }]
};
const catalogStub = () => kl.createKoachLearnCatalog({ fetchImpl: async url => {
  const file = String(url).split("/data/")[1].replace(/\.json$/, "");
  if (file === "meta") return { ok: true, status: 200, json: async () => ({ counts: {}, categories: [{ id: 46, name: "Agriculture (Africa)" }] }) };
  return { ok: true, status: 200, json: async () => COURSES[file] || [] };
} });
function setup() {
  const { packs } = buildPacks();
  const asked = []; const replies = [];
  const model = { plan: async () => { throw new Error("the planning model must not be asked"); }, respond: async request => { asked.push(request); return replies.length ? replies.shift() : `Taught step ${asked.length}.`; } };
  const saved = [];
  const records = { list: async query => saved.filter(row => row.workspace_id === query.workspaceId && row.record_type === query.recordType).slice(-1),
    upsertSingleton: async row => { const stored = { workspace_id: row.workspaceId, record_type: row.recordType, classification: row.classification, data: row.data }; saved.push(stored); return stored; } };
  const planner = new OpenEndedPlanner({ model, tools: { list: async () => [] }, applications: { list: () => [] }, memory: Object.assign(fakeMemory(), { search: async () => [] }),
    koachLearn: catalogStub(), studyPacks: kls.createStudyPacks({ dir: packs }), automationRecords: records, tutorSessions: require("../../nexus/tutor/tutor.js").createTutorSessions() });
  const ask = (text, { locale = "en", user = "u1", deterministicOnly = false } = {}) => planner.plan({ command: { text, tenantId: "t1", actorId: user, locale }, context: { timeZone: "Africa/Lagos", deterministicOnly } });
  return { ask, asked, replies, saved };
}

test("through the planner: pick a course from the list, learn it lesson by lesson from the course, move on, stop, and come back where you were", async () => {
  const { ask, asked, replies, saved } = setup();
  const list = await ask("Find me a course on farm records");
  assert.equal(list.knowledge, "koachlearn-courses:found");
  assert.match(list.response, /Say "help me study number 1" and I will teach it with you, lesson by lesson, from the course itself\.$/);

  const first = await ask("Help me study number 1");
  assert.deepEqual(first.tutor, { active: true, subject: "Farm Records", kind: "course", turn: 1, step: 1, course: { name: "Farm Records", lesson: 1, total: 4 } });
  assert.equal(first.response, "Taught step 1.");
  assert.deepEqual(first.sources.map(source => source.url), [`${kl.CATALOG}/#lang=en&c=101`], "the course's own page");
  assert.match(asked[0].goal, /^Course: Farm Records\. Lesson 1 of 4: Lesson 1: Keeping records/);
  assert.match(asked[0].instructions, /in English only/);
  assert.deepEqual(saved.at(-1).data.courses["agri-farm-records"].lesson, 0, "where the learner is, saved");
  assert.equal(saved.at(-1).classification, "standard");

  const answer = await ask("We write money in and money out");
  assert.match(asked[1].goal, /Lesson 1 of 4/);
  assert.match(asked[1].goal, /The learner just said: We write money in and money out$/);
  assert.equal(asked[1].conversationHistory.length, 2, "the lesson so far goes with it");
  assert.equal(answer.tutor.course.lesson, 1);

  replies.push("Well done, that lesson is finished.\nLESSON: next");
  const moved = await ask("yes please, the next one");
  assert.match(asked[3].goal, /^Course: Farm Records\. Lesson 2 of 4: Lesson 2: Gross margin/, "the next lesson is started in the same turn");
  assert.doesNotMatch(moved.response, /LESSON:/, "the marker is never shown or spoken");
  assert.equal(moved.tutor.course.lesson, 2);
  assert.equal(saved.at(-1).data.courses["agri-farm-records"].lesson, 1);

  const jump = await ask("lesson 4");
  assert.equal(jump.tutor.course.lesson, 4);
  assert.match(asked.at(-1).goal, /Lesson 4 of 4: Lesson 4: Risk/);
  assert.match(asked.at(-1).goal, /Next lesson: none, this is the last lesson of the course\./);

  const stopped = await ask("stop");
  assert.equal(stopped.response, 'Okay, we will stop here. Say "continue my course" any time to pick up at lesson 4.');
  assert.equal(stopped.tutor.active, false);

  const back = await ask("continue my course");
  assert.equal(back.tutor.course.lesson, 4, "picked up where they stopped");
  const done = await ask("next lesson");
  assert.match(done.response, /^You have finished every lesson of Farm Records\. Well done! Take the course's final quiz on Koach Learn for your certificate\.$/);
  assert.equal(done.tutor.active, false);
  assert.equal(saved.at(-1).data.courses["agri-farm-records"].done, true);
});

test("by name, in the learner's language; a pick from a list in another language; the catalogue's link; and what is asked when nothing is named", async () => {
  const { ask, asked } = setup();
  const hausa = await ask("Taimaka min in koyi kwas na bayanan noma", { locale: "ha" });
  assert.equal(hausa.tutor.subject, "Bayanan Noma");
  assert.match(asked.at(-1).instructions, /in Hausa only/);
  assert.deepEqual(hausa.sources.map(source => source.url), [`${kl.CATALOG}/#lang=ha&c=201`]);
  await ask("stop", { locale: "ha" });

  await ask("Show me Hausa courses about farm records", { user: "u2" });
  const picked = await ask("help me study number 1", { user: "u2" });
  assert.equal(picked.tutor.subject, "Bayanan Noma", "a pick from a Hausa list is the Hausa course");
  await ask("stop", { user: "u2" });

  const linked = await ask("Study course agri-farm-records ha", { user: "u3" });
  assert.equal(linked.tutor.subject, "Bayanan Noma", "the Study with Kyro link opens the course in the page's language");
  await ask("stop", { user: "u3" });

  // with no Koach Learn course under way, "continue my course" and "lesson 2" stay with Kyro's own learning (here the stand-in planning model, which refuses)
  await assert.rejects(ask("continue my course", { user: "u4" }), /the planning model must not be asked/);
  await assert.rejects(ask("teach me lesson 2", { user: "u4" }), /the planning model must not be asked/);
  assert.match((await ask("help me study number 3", { user: "u5" })).response, /^I could not find that Koach Learn course\./);
  assert.match((await ask("Help me study the quantum physics course", { user: "u6" })).response, /^I could not find that Koach Learn course\./);
  assert.match((await ask("Nifundishe kozi ya fizikia", { user: "u7", locale: "sw" })).response, /^Sikupata kozi hiyo ya Koach Learn\./);
});

test("the spoken-only caller leaves it alone, and the general tutor and the course finder still do what they did", async () => {
  const { ask, asked } = setup();
  const spoken = await ask("Help me study number 1", { deterministicOnly: true });
  assert.notEqual(spoken.tutor?.kind, "course");
  const general = await ask("Teach me fractions", { user: "u8" });
  assert.equal(general.tutor.kind, "learn");
  assert.match(asked.at(-1).goal, /The subject is: fractions/);
  await ask("stop", { user: "u8" });
  const finder = await ask("Find me a course on poultry", { user: "u9" });
  assert.equal(finder.knowledge, "koachlearn-courses:found");
});

test("the page takes a spoken study request itself, before the course finder, and the catalogue's 'Study with Kyro' link opens the course after sign-in", () => {
  const app = read("public/app.js");
  const html = read("public/index.html");
  assert.ok(html.indexOf("/kyro-koachlearn-study.js?v=kyro-koachlearn-study-5") > html.indexOf("/kyro-koachlearn-courses.js"), "loaded after the course matcher it uses");
  assert.ok(read("public/sw.js").includes("`/kyro-koachlearn-study.js?v=kyro-koachlearn-study-5`"));
  assert.ok(app.includes('if (trimmed && ((typeof kyroKoachLearnStudyQuestion === "function" && kyroKoachLearnStudyQuestion(trimmed)) || (typeof kyroKoachLearnQuestion === "function" && kyroKoachLearnQuestion(trimmed)) ||'));
  // "continue my course" with nothing named: only once this person studied a Koach Learn course with Kyro on this device, or while a course lesson is open
  assert.ok(app.includes("return studied || (typeof kyroTutorOpen === \"function\" && kyroTutorOpen() && kyroTutorCourse === true);"));
  assert.ok(app.includes('if (tutor.kind === "course") localStorage.setItem("kyroKoachLearnStudied", "1");'));
  assert.match(app, /const asked = new URLSearchParams\(window\.location\.search\)\.get\("study"\);\n    if \(asked && \/\^\[a-z\]\{2\}:\[a-z0-9\]\+\(\?:-\[a-z0-9\]\+\)\{2,\}\$\/\.test\(asked\)\)/);
  assert.ok(app.includes("void handleNexusUnifiedBrainRuntimeCommand(`Study course ${slug} ${lang}`, { source: \"typed\", kyroDirect: true });"));
  assert.ok(app.includes('  recordNexusAutonomousLearning({ type: "login-greeting", command: "Nexus ready after login" });\n  try { if (typeof kyroRunPendingStudyLink === "function") kyroRunPendingStudyLink(); }'));
  // the catalogue page: a "Study with Kyro" button on every course that has a study pack, in all 10 languages
  const site = read("koachlearn-catalog/site/app.js");
  assert.ok(site.includes('const KYRO = "https://nexus-genesis-certified.onrender.com/";'));
  assert.ok(site.includes('${c.g ? `<a class="kyro" href="${KYRO}?study=${state.lang}:${encodeURIComponent(c.g)}" target="_blank" rel="noopener">${esc(t("study"))}</a>` : ""}'));
  const i18n = read("koachlearn-catalog/site/i18n.js");
  for (const lang of ["en", "es", "fr", "ar", "sw", "ha", "am", "yo", "ig", "pt"]) assert.match(i18n, new RegExp(`\\n  ${lang}: \\{ study: "[^"]*Kyro[^"]*", title: `), lang);
  // the pack builder lives with the catalogue it publishes into; the packs are not kept in this repository
  assert.ok(fs.existsSync(path.join(ROOT, "koachlearn-catalog", "build", "make-study-packs.js")));
  assert.match(read(".gitignore"), /\nkoachlearn-catalog\/site\/packs\/\n/);
});

// Real-model run, 26 Nov 2026: "I am ready for the question" was praised as a right answer, the "I am an AI tutor" sentence came at every new lesson, "next lesson" went straight to the
// quiz, and only English or Kiswahili "stop" ended a lesson.
test("the tutor teaches the whole lesson before the quiz, judges only a real answer, introduces itself once, and hears stop in every language", async () => {
  const rules = kls.studyInstructions("Igbo");
  assert.ok(rules.length <= 2000);
  assert.match(rules, /First TEACH the whole lesson, one small step at a time/);
  assert.match(rules, /Only when every part of the lesson has been taught, ask its quick-check questions/);
  assert.match(rules, /Never call "I understand", "go on" or "I am ready" an answer/);
  assert.match(rules, /Never say right when it is wrong/);
  assert.match(rules, /Speak to the learner as "you", never about them/);
  const { packs } = buildPacks();
  const pack = JSON.parse(fs.readFileSync(path.join(packs, "en", "agri-farm-records.json"), "utf8"));
  assert.match(kls.studyGoal({ pack, index: 0, said: "start", first: true, intro: true, languageName: "English" }), /saying you are an AI tutor .* then teach the first step of the lesson \(no quick-check question yet\)/);
  const later = kls.studyGoal({ pack, index: 1, said: "next lesson", first: true, intro: false, languageName: "English" });
  assert.match(later, /Do not introduce yourself again: say its title in a few words and teach its first step \(no quick-check question yet\)\./);
  assert.doesNotMatch(later, /you are an AI tutor/);
  for (const said of ["stop", "Stop.", "Kwụsị", "kwụsị biko", "Tsaya", "Acha", "Para", "Arrête", "توقف", "አቁም", "Dúró", "Pare por favor"]) assert.equal(kls.isStudyStop(said), true, said);
  for (const said of ["I want to stop smoking", "how do I stop pests", "tsaya a gona"]) assert.equal(kls.isStudyStop(said), false, said);

  const { ask, asked } = setup();
  await ask("Taimaka min in koyi kwas na bayanan noma", { locale: "ha", user: "h1" });
  assert.match(asked.at(-1).goal, /you are an AI tutor/);
  await ask("darasi 2", { locale: "ha", user: "h1" });
  assert.match(asked.at(-1).goal, /Do not introduce yourself again/, "a new lesson in the same session: no second introduction");
  const stopped = await ask("Tsaya", { locale: "ha", user: "h1" });
  assert.equal(stopped.response, 'To, mu tsaya nan. Faɗi "ci gaba da kwas" a kowane lokaci don mu ci gaba daga darasi na 2.');
});

// (27 Nov 2026, the live voice run: speech-to-text wrote "Help me study number one." and the general tutor took it, teaching a subject called "number one")
test("a spoken number word picks the course or the lesson, the same as its digit, in every language", () => {
  const picks = [
    ["Help me study number one.", 1], ["help me study number three", 3], ["Teach me course two", 2], ["Ayúdame a estudiar el número uno", 1], ["Aide-moi à étudier le numéro deux", 2],
    ["Me ajude a estudar o número um", 1], ["Nifundishe namba moja", 1], ["Taimaka min in karanta lamba biyu", 2], ["Ràn mí lọ́wọ́ láti kọ́ nọ́mbà ọ̀kan", 1], ["Nyere m aka ịmụ nọmba otu", 1],
    ["ساعدني في دراسة رقم واحد", 1], ["ቁጥር አንድን እንዳጠና እርዳኝ", 1]
  ];
  for (const [say, ordinal] of picks) assert.equal(study.studyRequest(say)?.ordinal, ordinal, say);
  for (const [say, lesson] of [["Lesson three.", 3], ["Go to lesson four", 4], ["teach me lesson two", 2]]) assert.equal(study.studyRequest(say)?.lesson, lesson, say);
  for (const say of ["no one taught me this", "teach me fractions", "Find me a course on farming.", "one of the courses"]) assert.equal(study.studyRequest(say), null, say);
});

// (27 Nov 2026, the live voice run: "Next lesson" cleared the lesson card before the next step came back, so for a moment there was no screen)
test("an open lesson's card stays for the lesson's own next sentence until the next step replaces it", () => {
  const app = read("public/app.js");
  const at = app.indexOf("async function handleNexusUnifiedBrainRuntimeCommand(");
  const body = app.slice(at, at + 1600);
  assert.ok(body.includes("kyroLessonOwnsTurn = typeof kyroTutorOpen === \"function\" && kyroTutorOpen() && typeof kyroTutorOwns === \"function\" && kyroTutorOwns(text)"), "an open lesson's own sentence");
  assert.ok(body.includes("if (!kyroLessonOwnsTurn) kyroDismissStaleWorkspace(text);"), "anything else still clears the old card");
  assert.match(read("public/kyro-result-screen.js"), /function show\(doc, model, handlers, lang\) \{\n    if \(!doc \|\| !doc\.body \|\| !model\) return null;\n    remove\(doc\);/, "the next step's card replaces the one kept");
});
