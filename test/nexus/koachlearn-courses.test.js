"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const path = require("path");
const matcher = require("../../public/kyro-koachlearn-courses.js");
const kl = require("../../nexus/knowledge/koachlearn-courses.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { fakeMemory } = require("./farmwork-fake.js");

// The owner asked (24 Nov 2026) for Kyro to be "on the same page as Koach Learn" for the language of the courses: a person asking for a course in any of the 10 languages the courses are in gets the
// real Koach Learn courses in that language, from the same catalogue learners browse, with each course's own page and the same course in the other languages.

const ROOT = path.join(__dirname, "..", "..");

test("a request to FIND a course is read in all 10 languages, with the language of the words, a language named for the courses, and what it is about", () => {
  const picks = {
    "Find me a course on farming": { wordsLang: "en", courseLang: null, terms: ["farming"] },
    "What courses do you have?": { wordsLang: "en", courseLang: null, terms: [] },
    "Show me Hausa courses about small business": { wordsLang: "en", courseLang: "ha", terms: ["small", "business"] },
    "Koach Learn courses in Yoruba": { wordsLang: "en", courseLang: "yo", terms: [] },
    "Quiero un curso sobre negocios": { wordsLang: "es", courseLang: null, terms: ["negocios"] },
    "¿Qué cursos hay sobre agricultura?": { wordsLang: "es", courseLang: null, terms: ["agricultura"] },
    "Je cherche des cours sur l'agriculture": { wordsLang: "fr", courseLang: null, terms: ["agriculture"] },
    "أريد دورة عن الزراعة": { wordsLang: "ar", courseLang: null, terms: ["الزراعه"] },
    "Nataka kozi za kilimo": { wordsLang: "sw", courseLang: null, terms: ["kilimo"] },
    "Kozi kwa Kihausa": { wordsLang: "sw", courseLang: "ha", terms: [] },
    "Ina son kwas game da noma": { wordsLang: "ha", courseLang: null, terms: ["noma"] },
    "ስለ ግብርና ኮርስ እፈልጋለሁ": { wordsLang: "am", courseLang: null, terms: ["ግብርና"] },
    "Mo fẹ́ ẹ̀kọ́ nípa iṣẹ́ ọ̀gbìn": { wordsLang: "yo", courseLang: null, terms: ["ise", "ogbin"] },
    "Achọrọ m ọmụmụ ihe gbasara ugbo": { wordsLang: "ig", courseLang: null, terms: ["ugbo"] },
    "Quero um curso sobre agricultura": { wordsLang: "pt", courseLang: null, terms: ["agricultura"] }
  };
  for (const [say, expected] of Object.entries(picks)) {
    const got = matcher.courseRequest(say);
    assert.ok(got, say);
    assert.deepEqual({ wordsLang: got.wordsLang, courseLang: got.courseLang, terms: [...got.terms] }, expected, say);
  }
  assert.equal(matcher.courseRequest("Mo fẹ́ ẹ̀kọ́ nípa iṣẹ́ ọ̀gbìn").topic, "iṣẹ́ ọ̀gbìn", "what it is about is said back as it was said, with its tone marks");
  assert.equal(matcher.courseRequest("Koach Learn courses").named, true);
  // the speech-to-text wrote the name as it sounds (live voice run, 25 Nov): it is still the name, not a subject
  const heard = matcher.courseRequest("What Coach Learn courses are there in Amharic?");
  assert.deepEqual([heard.named, heard.courseLang, [...heard.terms]], [true, "am", []]);
  assert.equal(matcher.courseRequest("Find me a course on coaching").terms[0], "coaching", "coaching as a subject is kept");
});

test("the person's own learning, a period, 'of course' and other uses of the words are never taken", () => {
  for (const say of ["of course I can", "continue my course", "resume my course", "start the AI basics course", "Show my progress in the course", "quiz me on the course", "give me my certificate for the course",
    "next lesson", "what is toilet training", "first class flight", "ما هي الدورة الشهرية؟", "دورتي الشهرية متأخرة", "endelea na kozi yangu", "mi curso", "continuer mon cours", "Open the map", "", "x".repeat(300)]) {
    assert.equal(matcher.courseRequest(say), null, say);
  }
});

test("the search folding is the catalogue page's own, so Kyro and the page find the same courses for the same words", () => {
  const page = fs.readFileSync(path.join(ROOT, "koachlearn-catalog", "site", "app.js"), "utf8");
  const ours = fs.readFileSync(path.join(ROOT, "public", "kyro-koachlearn-courses.js"), "utf8");
  const foldOf = source => (source.match(/const fold = s => [^\n]+\n[^\n]+\n[^\n]+\n[^\n]+;/) || [""])[0].replace(/\s+/g, " ");
  assert.ok(foldOf(page).length > 40);
  assert.equal(foldOf(ours), foldOf(page));
  assert.equal(matcher.fold("Ƙananan Sana'o'i"), "kananan sana'o'i");
  assert.equal(matcher.fold("Ọ̀gbìn"), "ogbin");
});

// A small catalogue: one course in three languages (English, Hausa, Amharic), linked to each other, plus one English-only course in another topic.
const DATA = {
  en: [{ i: 10, n: "Farm Records and Planning", c: 46, s: "Keeping simple farm records, Planning a season, Pricing crops", d: "For small farmers.", g: "farm-records", o: { ha: 20, am: 30 } },
    { i: 11, n: "Starting a Small Business", c: 43, s: "Writing a plan, Registering, Finding customers", d: "For new owners.", g: "start-biz", o: {} }],
  ha: [{ i: 20, n: "Bayanan Noma da Tsari", c: 46, s: "Ajiye bayanan gona, Tsara lokacin noma, Farashin amfanin gona", d: "Ga ƙananan manoma.", g: "farm-records", o: { en: 10, am: 30 } }],
  am: [{ i: 30, n: "የእርሻ መዝገብና እቅድ", c: 46, s: "ቀላል የእርሻ መዝገብ መያዝ, ወቅትን ማቀድ", d: "ለአነስተኛ ገበሬዎች።", g: "farm-records", o: { en: 10, ha: 20 } }],
  es: [], fr: [], ar: [], sw: [], yo: [], ig: [], pt: []
};
const META = { counts: { en: 2, ha: 1, am: 1 }, categories: [{ id: 46, name: "Agriculture (Africa)" }, { id: 43, name: "Small Business" }] };
function stubFetch({ fail = false } = {}) {
  const calls = [];
  const impl = async url => {
    calls.push(String(url));
    if (fail) return { ok: false, status: 503, json: async () => ({}) };
    const file = String(url).split("/data/")[1];
    const body = file === "meta.json" ? META : DATA[file.replace(/\.json$/, "")];
    return { ok: true, status: 200, json: async () => body };
  };
  return { impl, calls };
}

test("a course is searched in the language of the words and shown in the language asked for, each with its own catalogue page and the languages it is also in", async () => {
  const stub = stubFetch();
  const catalog = kl.createKoachLearnCatalog({ fetchImpl: stub.impl });
  const asked = matcher.courseRequest("Show me Hausa courses about farming");
  const result = await kl.findKoachLearnCourses(catalog, asked, { defaultLang: "en" });
  assert.deepEqual([result.kind, result.replyLang, result.courseLang, result.courses.map(course => course.i)], ["found", "en", "ha", [20]]);
  const answer = kl.koachLearnAnswer(result);
  assert.match(answer.text, /^Here are 1 Koach Learn courses in Hausa about "farming": 1\. Bayanan Noma da Tsari: Ajiye bayanan gona, Tsara lokacin noma\. Each one is also in English, Amharic\. Open one on the screen/);
  assert.deepEqual(answer.sources.map(source => source.url), [`${kl.CATALOG}/#lang=ha&c=20`, `${kl.CATALOG}/#lang=ha`]);
  assert.ok(answer.sources.every(source => source.publisher.length <= 40), "each button has a short label");

  const hausa = await kl.findKoachLearnCourses(catalog, matcher.courseRequest("Ina son kwas game da noma"), { defaultLang: "en" });
  assert.deepEqual([hausa.kind, hausa.replyLang, hausa.courseLang, hausa.courses[0].i], ["found", "ha", "ha", 20]);
  assert.match(kl.koachLearnAnswer(hausa).text, /^Ga kwasa-kwasai 1 na Koach Learn da Hausa game da "noma": 1\. Bayanan Noma da Tsari/);

  const amharic = await kl.findKoachLearnCourses(catalog, matcher.courseRequest("ስለ እርሻ ኮርስ እፈልጋለሁ"), { defaultLang: "en" });
  assert.deepEqual([amharic.kind, amharic.replyLang, amharic.courseLang, amharic.courses[0].i], ["found", "am", "am", 30]);
});

test("no subject lists the topics in that language; nothing found says so with the topics; a language with no courses yet says so", async () => {
  const catalog = kl.createKoachLearnCatalog({ fetchImpl: stubFetch().impl });
  const topics = kl.koachLearnAnswer(await kl.findKoachLearnCourses(catalog, matcher.courseRequest("What courses do you have?")));
  assert.match(topics.text, /^Koach Learn has 2 courses in English, in these topics: Agriculture \(Africa\), Small Business\. Tell me what you want to learn, for example agriculture or small business\.$/);
  const none = kl.koachLearnAnswer(await kl.findKoachLearnCourses(catalog, matcher.courseRequest("find a course about quantum physics")));
  assert.match(none.text, /^I found no Koach Learn course in English about "quantum physics"\. The topics are: /);
  const empty = kl.koachLearnAnswer(await kl.findKoachLearnCourses(catalog, matcher.courseRequest("Quiero un curso sobre negocios")));
  assert.equal(empty.text, "Todavía no hay cursos de Koach Learn en español.");
});

test("the catalogue is read once an hour; when it does not answer the copy read earlier is used, and with no copy Kyro says it could not read the list", async () => {
  let clock = 0;
  const stub = stubFetch();
  const catalog = kl.createKoachLearnCatalog({ fetchImpl: stub.impl, now: () => clock });
  await catalog.courses("en"); await catalog.courses("en");
  assert.equal(stub.calls.filter(url => url.endsWith("/data/en.json")).length, 1, "the same hour costs nothing twice");
  assert.equal(stub.calls[0], `${kl.CATALOG}/data/en.json`);
  clock = 61 * 60000;
  const failing = kl.createKoachLearnCatalog({ fetchImpl: async () => ({ ok: false, status: 503, json: async () => ({}) }), now: () => clock });
  const down = await kl.findKoachLearnCourses(failing, matcher.courseRequest("find a course on farming"));
  assert.equal(down.kind, "unavailable");
  assert.match(kl.koachLearnAnswer(down).text, /^I could not read the Koach Learn course list just now\./);
  // a catalogue that answered once and then fails keeps its copy
  let up = true;
  const flaky = kl.createKoachLearnCatalog({ fetchImpl: async url => (up ? stubFetch().impl(url) : { ok: false, status: 503, json: async () => ({}) }), now: () => clock });
  assert.equal((await flaky.courses("en")).length, 2);
  up = false; clock += 2 * 60 * 60000;
  assert.equal((await flaky.courses("en")).length, 2);
});

test("Kyro's sentences exist in all 10 languages, and the topic names come from the catalogue page's own file", () => {
  for (const lang of matcher.LANGS) {
    const answer = kl.koachLearnAnswer({ kind: "topics", replyLang: lang, courseLang: "ha", terms: [], count: 631, topicIds: [46, 43, 47] });
    assert.ok(answer.text.length > 40 && !/\{\w+\}/.test(answer.text), lang);
    assert.ok(Object.keys(kl.LANGUAGE_NAMES[lang]).length === 10, lang);
  }
  assert.equal(kl.TOPIC_NAMES[47].ha, "Afirka: Rayuwa da Aiki");
  assert.equal(kl.TOPIC_NAMES[46].en, "Agriculture (Africa)");
});

function planner(koachLearn) {
  const model = { plan: async () => { throw new Error("the AI model must not be asked"); }, respond: async () => null };
  return new OpenEndedPlanner({ model, tools: { list: async () => [] }, applications: { list: () => [] }, memory: Object.assign(fakeMemory(), { search: async () => [] }), koachLearn });
}
const ask = (p, text, { deterministicOnly = false, locale = "en" } = {}) => p.plan({ command: { text, tenantId: "t1", actorId: "u1", locale }, context: { timeZone: "Africa/Lagos", deterministicOnly } });

test("through the planner: a course request is answered from the catalogue with each course's page; the spoken-only caller and the person's own learning are left alone", async () => {
  const stub = stubFetch();
  const p = planner(kl.createKoachLearnCatalog({ fetchImpl: stub.impl }));
  const plan = await ask(p, "Ina son kwas game da noma");
  assert.equal(plan.knowledge, "koachlearn-courses:found");
  assert.match(plan.response, /^Ga kwasa-kwasai 1 na Koach Learn da Hausa/);
  assert.deepEqual([plan.steps.length, plan.application, plan.responseLanguage], [0, "conversation", "ha"]);
  assert.ok(plan.sources.some(source => source.url === `${kl.CATALOG}/#lang=ha&c=20`));
  // "courses about starting a business" lists courses, not the how-to guide
  const biz = await ask(p, "Find me courses about starting a small business");
  assert.equal(biz.knowledge, "koachlearn-courses:found");
  const calls = stub.calls.length;
  const spoken = await ask(p, "Find me a course on farming", { deterministicOnly: true });
  assert.notEqual(spoken.knowledge, "koachlearn-courses:found");
  assert.equal(stub.calls.length, calls, "the spoken-only caller does not read the catalogue");
  // (the person's own course goes on past the finder, to what answered it before: here the stand-in model, which refuses)
  await assert.rejects(ask(p, "continue my course"), /the AI model must not be asked/);
});

test("the page takes a spoken course request itself, loads the matcher, and the four new languages are voice languages on the page and the server", () => {
  const app = fs.readFileSync(path.join(ROOT, "public", "app.js"), "utf8");
  const html = fs.readFileSync(path.join(ROOT, "public", "index.html"), "utf8");
  const sw = fs.readFileSync(path.join(ROOT, "public", "sw.js"), "utf8");
  const server = fs.readFileSync(path.join(ROOT, "server.js"), "utf8");
  assert.ok(app.includes("function kyroKoachLearnQuestion(text)"));
  assert.ok(app.includes('(typeof kyroKoachLearnQuestion === "function" && kyroKoachLearnQuestion(trimmed))'), "the spoken turn is claimed");
  assert.ok(html.includes('<script src="/kyro-koachlearn-courses.js?v=kyro-koachlearn-courses-2"></script>'));
  assert.ok(html.indexOf("kyro-koachlearn-courses.js") < html.indexOf('src="/app.js'));
  assert.ok(sw.includes("`/kyro-koachlearn-courses.js?v=kyro-koachlearn-courses-2`"), "the offline copy has it");
  assert.ok(app.includes('const fullAppLanguageCodes = new Set(["en", "fr", "sw", "ar", "es", "pt", "ha", "am", "yo", "ig"]);'), "the four are full languages (25 Nov)");
  assert.ok(app.includes("/api/voice/realtime/session?language=${encodeURIComponent(voiceLanguageCode())}"), "the voice session hears the chosen language");
  assert.ok(app.includes('        locale: typeof voiceLanguageCode === "function" ? voiceLanguageCode() : languageCode(),'), "Kyro's own route is told the chosen language");
  for (const code of ["ha", "am", "yo", "ig"]) assert.ok(app.includes(`["${code}", "`), `${code} is in the language switch`);
  assert.ok(server.includes('const FULL_APP_LANGUAGE_CODES = new Set(["en", "es", "fr", "sw", "ar", "pt", "ha", "am", "yo", "ig"]);'));
  assert.ok(server.includes("!FULL_APP_LANGUAGE_CODES.has(requested) && !PARTIAL_LANGUAGE_CODES.has(requested)"), "the language route accepts them");
});
