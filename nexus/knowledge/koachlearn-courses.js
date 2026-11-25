"use strict";

// Koach Learn's courses, in the language the person speaks, from the same catalogue learners browse (https://tateron004-oss.github.io/koachlearn-catalog/, source in koachlearn-catalog/).
// That catalogue is rebuilt every hour from Koach Learn's public course list and knows, for every course, its language and the same course in the other nine languages. Kyro reads its
// per-language files (about half a megabyte each: Koach Learn's own list is over 40 MB, too big to read on this server) and keeps each for an hour, so Kyro and the catalogue always show
// the same courses with the same translations. Nothing here is generated: every course named is a real course with its own page.
//
//   createKoachLearnCatalog({ fetchImpl, now, ttlMs, base }) -> { courses(lang), meta() }     (the last good copy is kept when a refresh fails)
//   findKoachLearnCourses(catalog, request, { defaultLang }) -> result                         (request: public/kyro-koachlearn-courses.js courseRequest(); never throws)
//   koachLearnAnswer(result) -> { text, sources: [{ name, publisher, title, url }] }            (said in the language of the words, the courses in the language asked for)
//
// Kyro's own sentences here are machine-drafted in each language, like the courses themselves.

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { fold, LANGS } = require("../../public/kyro-koachlearn-courses.js");

const CATALOG = "https://tateron004-oss.github.io/koachlearn-catalog";
const SHOWN = 5;

// The topic names in the 10 languages, from the catalogue page's own file (so a topic is called the same thing on the page and by Kyro).
const TOPIC_NAMES = (() => {
  try {
    const sandbox = { window: {} };
    vm.runInNewContext(fs.readFileSync(path.join(__dirname, "..", "..", "koachlearn-catalog", "site", "i18n.js"), "utf8"), sandbox, { timeout: 1000 });
    return sandbox.window.KL_CATS || {};
  } catch { return {}; }
})();
const topicFolded = Object.fromEntries(Object.entries(TOPIC_NAMES).map(([id, names]) => [id, fold(Object.values(names).join(" "))]));

function createKoachLearnCatalog({ fetchImpl = (...args) => fetch(...args), now = () => Date.now(), ttlMs = 60 * 60000, timeoutMs = 9000, base = CATALOG } = {}) {
  const saved = new Map();
  const pending = new Map();
  const timed = async url => {
    const controller = new AbortController(); const timer = setTimeout(() => controller.abort(), timeoutMs);
    try { const response = await fetchImpl(url, { headers: { accept: "application/json" }, signal: controller.signal }); if (!response.ok) throw new Error(`the catalogue answered ${response.status}`); return await response.json(); } finally { clearTimeout(timer); }
  };
  const keep = (key, read) => {
    const hit = saved.get(key);
    if (hit && now() - hit.at < ttlMs) return Promise.resolve(hit.value);
    if (pending.has(key)) return pending.get(key);
    const run = read().then(value => { saved.set(key, { at: now(), value }); return value; })
      .catch(error => { if (hit) return hit.value; throw error; }) // the catalogue did not answer: the copy read earlier is still right for an hour or a day
      .finally(() => pending.delete(key));
    pending.set(key, run);
    return run;
  };
  return {
    courses(lang) {
      if (!LANGS.includes(lang)) return Promise.resolve([]);
      return keep(`courses|${lang}`, async () => {
        const rows = await timed(`${base}/data/${lang}.json`);
        if (!Array.isArray(rows)) throw new Error("the catalogue sent no course list");
        // only what Kyro says and searches: id, name, topic, what you learn, the shared course slug and the same course in the other languages
        return rows.filter(row => row && Number.isInteger(row.i) && row.n).map(row => Object.freeze({
          i: row.i, n: String(row.n), c: Number(row.c) || 0, s: String(row.s || ""), g: row.g || null, o: row.o && typeof row.o === "object" ? row.o : {},
          f: fold(`${row.n} ${row.s || ""} ${row.d || ""}`)
        }));
      });
    },
    meta() {
      return keep("meta", async () => {
        const body = await timed(`${base}/data/meta.json`);
        return { counts: body?.counts || {}, categories: Array.isArray(body?.categories) ? body.categories : [], updated: body?.updated || "" };
      });
    }
  };
}

// A search word and the shorter form it may appear in ("farming" -> "farm", "negocios" -> "negoc", "الزراعه" -> "زراع"), so a course about the same thing is found.
function stemOf(term) {
  let t = term.replace(/^(?:و|ب|ل|ف)?ال/, "");
  if (/^\p{Script=Arabic}+$/u.test(t)) return t.length > 3 ? t.replace(/(?:ات|ين|ون|يه|ه|ي)$/, "") : t;
  if (/^[a-z'-]+$/.test(t)) {
    const english = t.replace(/(?:ing|ers|er|es|s|ed)$/, "");
    if (english.length >= 4 && english !== t) return english;
    if (t.length >= 6) return t.slice(0, Math.max(4, t.length - 3));
  }
  return t;
}

// The courses that match the words, best first: a course must have every word (or all but one, when there are three or more); a word in the name counts most, then the topic, then what you learn.
function search(courses, terms) {
  const stems = terms.map(stemOf).filter(stem => stem.length >= 2);
  if (!stems.length) return [];
  const need = stems.length >= 3 ? stems.length - 1 : stems.length;
  const scored = [];
  for (const course of courses) {
    const name = fold(course.n); const skills = fold(course.s); const topic = topicFolded[course.c] || "";
    let hits = 0, score = 0;
    for (const stem of stems) {
      const inName = name.includes(stem), inTopic = topic.includes(stem), inSkills = skills.includes(stem), inText = course.f.includes(stem);
      if (!(inName || inTopic || inText)) continue;
      hits++;
      score += (inName ? 3 : 0) + (inTopic ? 2 : 0) + (inSkills ? 1.5 : 0) + (inText ? 1 : 0);
    }
    if (hits >= need) scored.push({ course, hits, score });
  }
  scored.sort((a, b) => b.hits - a.hits || b.score - a.score || a.course.n.localeCompare(b.course.n));
  // a course that sits in two topics is one course
  const seen = new Set();
  return scored.filter(({ course }) => { const key = course.g || course.n; if (seen.has(key)) return false; seen.add(key); return true; }).map(({ course }) => course);
}

async function findKoachLearnCourses(catalog, request, { defaultLang = "en" } = {}) {
  const fallback = LANGS.includes(String(defaultLang || "").split("-")[0]) ? String(defaultLang).split("-")[0] : "en";
  // A Hausa, Amharic, Yoruba or Igbo speaker's request reaches here in English: the voice model writes the tools' request in English ("find Koach Learn courses about farming in Hausa"),
  // since a word of theirs can mean something else in English ("noma", farming, came back as a disease and a restaurant: live voice run, 25 Nov 2026). The answer is then in the person's
  // own language, which is the language of the courses asked for, and without the English topic word in the middle of it (the course names are in their language).
  const englishForTheirs = request?.wordsLang === "en" && fallback !== "en" && request?.courseLang === fallback;
  const replyLang = englishForTheirs ? fallback : (request?.wordsLang || fallback);
  const courseLang = request?.courseLang || request?.wordsLang || fallback;
  const terms = Array.isArray(request?.terms) ? request.terms : [];
  const base = { replyLang, courseLang, terms, topic: String(request?.topic || terms.join(" ")), ...(englishForTheirs ? { topicInEnglish: true } : {}) };
  try {
    const target = await catalog.courses(courseLang);
    const meta = await catalog.meta().catch(() => ({ counts: {}, categories: [] }));
    if (!target.length) return { ...base, kind: "no-language" };
    const topicIds = [...new Set(target.map(course => course.c))];
    if (!terms.length) return { ...base, kind: "topics", count: target.length, topicIds: orderTopics(topicIds, meta) };
    // the words are searched in the language they were said in (and in English, for words like "AI"); a course found there is shown in the language asked for
    const byId = new Map(target.map(course => [course.i, course]));
    const toTarget = course => (course.o && course.o[courseLang] ? byId.get(course.o[courseLang]) : null) || (byId.get(course.i) === course ? course : null);
    let found = [];
    for (const lang of [...new Set([request.wordsLang || courseLang, courseLang, "en"])]) {
      const list = lang === courseLang ? target : await catalog.courses(lang).catch(() => []);
      found = search(list, terms).map(toTarget).filter(Boolean);
      if (found.length) break;
    }
    const unique = [...new Map(found.map(course => [course.i, course])).values()];
    if (!unique.length) return { ...base, kind: "none", topicIds: orderTopics(topicIds, meta) };
    return { ...base, kind: "found", total: unique.length, courses: unique.slice(0, SHOWN) };
  } catch {
    return { ...base, kind: "unavailable" };
  }
}
const orderTopics = (ids, meta) => {
  const order = (meta?.categories || []).map(category => category.id);
  return ids.slice().sort((a, b) => (order.indexOf(a) + 1 || 999) - (order.indexOf(b) + 1 || 999));
};

// The names of the 10 languages, in each of them.
const LANGUAGE_NAMES = Object.freeze({
  en: { en: "English", es: "Spanish", fr: "French", ar: "Arabic", sw: "Kiswahili", ha: "Hausa", am: "Amharic", yo: "Yoruba", ig: "Igbo", pt: "Portuguese" },
  es: { en: "inglés", es: "español", fr: "francés", ar: "árabe", sw: "suajili", ha: "hausa", am: "amárico", yo: "yoruba", ig: "igbo", pt: "portugués" },
  fr: { en: "anglais", es: "espagnol", fr: "français", ar: "arabe", sw: "swahili", ha: "haoussa", am: "amharique", yo: "yoruba", ig: "igbo", pt: "portugais" },
  ar: { en: "الإنجليزية", es: "الإسبانية", fr: "الفرنسية", ar: "العربية", sw: "السواحيلية", ha: "الهوسا", am: "الأمهرية", yo: "اليوروبا", ig: "الإيغبو", pt: "البرتغالية" },
  sw: { en: "Kiingereza", es: "Kihispania", fr: "Kifaransa", ar: "Kiarabu", sw: "Kiswahili", ha: "Kihausa", am: "Kiamhari", yo: "Kiyoruba", ig: "Kiigbo", pt: "Kireno" },
  ha: { en: "Turanci", es: "Sifaniyanci", fr: "Faransanci", ar: "Larabci", sw: "Swahili", ha: "Hausa", am: "Amharik", yo: "Yarbanci", ig: "Igbo", pt: "Fotugis" },
  am: { en: "እንግሊዝኛ", es: "ስፓንኛ", fr: "ፈረንሳይኛ", ar: "አረብኛ", sw: "ስዋሂሊ", ha: "ሃውሳ", am: "አማርኛ", yo: "ዮሩባ", ig: "ኢግቦ", pt: "ፖርቱጋልኛ" },
  yo: { en: "Gẹ̀ẹ́sì", es: "Sípáníìṣì", fr: "Faransé", ar: "Lárúbáwá", sw: "Swahili", ha: "Hausa", am: "Amhariki", yo: "Yorùbá", ig: "Igbo", pt: "Pọtugí" },
  ig: { en: "Bekee", es: "Spanish", fr: "French", ar: "Arabik", sw: "Swahili", ha: "Hausa", am: "Amharik", yo: "Yoruba", ig: "Igbo", pt: "Portuguese" },
  pt: { en: "inglês", es: "espanhol", fr: "francês", ar: "árabe", sw: "suaíli", ha: "hauçá", am: "amárico", yo: "iorubá", ig: "igbo", pt: "português" }
});

// Kyro's sentences, in each language.
const TEXT = Object.freeze({
  en: { found: "Here are {n} Koach Learn courses in {language}{about}:", about: " about \"{query}\"", more: "I found {total} in all.", also: "Each one is also in {others}.", allOthers: "the other 9 languages",
    start: "Open one on the screen to read about it and start it. You sign in or create an account on Koach Learn.", none: "I found no Koach Learn course in {language} about \"{query}\". The topics are: {topics}.",
    topics: "Koach Learn has {count} courses in {language}, in these topics: {topics}. Tell me what you want to learn, for example {example}.", unavailable: "I could not read the Koach Learn course list just now. You can see every course on the catalogue page.",
    allLink: "All Koach Learn courses in {language}", noLanguage: "There are no Koach Learn courses in {language} yet." },
  es: { found: "Aquí tienes {n} cursos de Koach Learn en {language}{about}:", about: " sobre «{query}»", more: "Encontré {total} en total.", also: "Cada uno está también en {others}.", allOthers: "los otros 9 idiomas",
    start: "Abre uno en la pantalla para leer de qué trata y empezarlo. Inicias sesión o creas una cuenta en Koach Learn.", none: "No encontré ningún curso de Koach Learn en {language} sobre «{query}». Los temas son: {topics}.",
    topics: "Koach Learn tiene {count} cursos en {language}, en estos temas: {topics}. Dime qué quieres aprender, por ejemplo {example}.", unavailable: "No pude leer la lista de cursos de Koach Learn en este momento. Puedes ver todos los cursos en la página del catálogo.",
    allLink: "Todos los cursos de Koach Learn en {language}", noLanguage: "Todavía no hay cursos de Koach Learn en {language}." },
  fr: { found: "Voici {n} cours Koach Learn en {language}{about} :", about: " sur « {query} »", more: "J'en ai trouvé {total} en tout.", also: "Chacun existe aussi en {others}.", allOthers: "9 autres langues",
    start: "Ouvrez-en un à l'écran pour lire de quoi il parle et le commencer. Vous vous connectez ou créez un compte sur Koach Learn.", none: "Je n'ai trouvé aucun cours Koach Learn en {language} sur « {query} ». Les thèmes sont : {topics}.",
    topics: "Koach Learn propose {count} cours en {language}, dans ces thèmes : {topics}. Dites-moi ce que vous voulez apprendre, par exemple {example}.", unavailable: "Je n'ai pas pu lire la liste des cours Koach Learn pour le moment. Vous pouvez voir tous les cours sur la page du catalogue.",
    allLink: "Tous les cours Koach Learn en {language}", noLanguage: "Il n'y a pas encore de cours Koach Learn en {language}." },
  ar: { found: "إليك {n} دورات من Koach Learn باللغة {language}{about}:", about: " عن «{query}»", more: "وجدت {total} دورة في المجموع.", also: "كل دورة متوفرة أيضًا في: {others}.", allOthers: "اللغات التسع الأخرى",
    start: "افتح دورة على الشاشة لتقرأ عنها وتبدأها. ستسجّل الدخول أو تنشئ حسابًا على Koach Learn.", none: "لم أجد أي دورة من Koach Learn باللغة {language} عن «{query}». المواضيع هي: {topics}.",
    topics: "لدى Koach Learn {count} دورة باللغة {language}، في هذه المواضيع: {topics}. قل لي ماذا تريد أن تتعلم، مثلًا {example}.", unavailable: "لم أتمكن من قراءة قائمة دورات Koach Learn الآن. يمكنك رؤية كل الدورات في صفحة الفهرس.",
    allLink: "كل دورات Koach Learn باللغة {language}", noLanguage: "لا توجد دورات من Koach Learn باللغة {language} بعد." },
  sw: { found: "Hizi ni kozi {n} za Koach Learn kwa {language}{about}:", about: " kuhusu \"{query}\"", more: "Nimepata {total} kwa jumla.", also: "Kila moja inapatikana pia kwa {others}.", allOthers: "lugha nyingine 9",
    start: "Fungua moja kwenye skrini usome inahusu nini na uianze. Utaingia au kufungua akaunti kwenye Koach Learn.", none: "Sikupata kozi ya Koach Learn kwa {language} kuhusu \"{query}\". Mada ni: {topics}.",
    topics: "Koach Learn ina kozi {count} kwa {language}, katika mada hizi: {topics}. Niambie unachotaka kujifunza, kwa mfano {example}.", unavailable: "Sikuweza kusoma orodha ya kozi za Koach Learn sasa hivi. Unaweza kuona kozi zote kwenye ukurasa wa orodha.",
    allLink: "Kozi zote za Koach Learn kwa {language}", noLanguage: "Bado hakuna kozi za Koach Learn kwa {language}." },
  ha: { found: "Ga kwasa-kwasai {n} na Koach Learn da {language}{about}:", about: " game da \"{query}\"", more: "Na sami {total} gaba ɗaya.", also: "Kowanne yana kuma a {others}.", allOthers: "sauran harsuna 9",
    start: "Buɗe ɗaya a allon don karanta abin da ya ƙunsa ka fara shi. Za ka shiga ko ka buɗe asusu a Koach Learn.", none: "Ban sami kwas na Koach Learn da {language} game da \"{query}\" ba. Batutuwan su ne: {topics}.",
    topics: "Koach Learn yana da kwasa-kwasai {count} da {language}, a waɗannan batutuwa: {topics}. Faɗa mini abin da kake son koya, misali {example}.", unavailable: "Ban iya karanta jerin kwasa-kwasan Koach Learn yanzu ba. Kana iya ganin duk kwasa-kwasai a shafin kundin.",
    allLink: "Duk kwasa-kwasan Koach Learn da {language}", noLanguage: "Har yanzu babu kwasa-kwasan Koach Learn da {language}." },
  am: { found: "{about}በ{language} የሚገኙ {n} የKoach Learn ኮርሶች እነሆ፦", about: "ስለ «{query}» ", more: "በአጠቃላይ {total} አገኘሁ።", also: "እያንዳንዱ በ{others} ደግሞ ይገኛል።", allOthers: "ሌሎች 9 ቋንቋዎች",
    start: "ስለሱ ለማንበብና ለመጀመር በማያ ገጹ ላይ አንዱን ይክፈቱ። በKoach Learn ላይ ይገባሉ ወይም መለያ ይፈጥራሉ።", none: "ስለ «{query}» በ{language} የKoach Learn ኮርስ አላገኘሁም። ርዕሶቹ፦ {topics}።",
    topics: "Koach Learn በ{language} {count} ኮርሶች አሉት፣ በእነዚህ ርዕሶች፦ {topics}። ምን መማር እንደሚፈልጉ ይንገሩኝ፣ ለምሳሌ {example}።", unavailable: "አሁን የKoach Learn ኮርሶችን ዝርዝር ማንበብ አልቻልኩም። ሁሉንም ኮርሶች በካታሎግ ገጹ ላይ ማየት ይችላሉ።",
    allLink: "በ{language} ያሉ ሁሉም የKoach Learn ኮርሶች", noLanguage: "እስካሁን በ{language} የKoach Learn ኮርሶች የሉም።" },
  yo: { found: "Àwọn ẹ̀kọ́ Koach Learn {n} ní èdè {language}{about} nìyí:", about: " nípa \"{query}\"", more: "Mo rí {total} lápapọ̀.", also: "Ọ̀kọ̀ọ̀kan wà ní {others} pẹ̀lú.", allOthers: "àwọn èdè 9 mìíràn",
    start: "Ṣí ọ̀kan lójú iboju láti kà nípa rẹ̀ kí o sì bẹ̀rẹ̀ rẹ̀. Ìwọ yóò wọlé tàbí ṣẹ̀dá àkáǹtì lórí Koach Learn.", none: "Mi ò rí ẹ̀kọ́ Koach Learn kankan ní èdè {language} nípa \"{query}\". Àwọn àkòrí ni: {topics}.",
    topics: "Koach Learn ní ẹ̀kọ́ {count} ní èdè {language}, nínú àwọn àkòrí wọ̀nyí: {topics}. Sọ ohun tí o fẹ́ kọ́ fún mi, fún àpẹẹrẹ {example}.", unavailable: "Mi ò lè ka àkójọ ẹ̀kọ́ Koach Learn báyìí. O lè rí gbogbo ẹ̀kọ́ lórí ojú-ìwé àkójọ.",
    allLink: "Gbogbo ẹ̀kọ́ Koach Learn ní èdè {language}", noLanguage: "Kò tíì sí ẹ̀kọ́ Koach Learn ní èdè {language}." },
  ig: { found: "Lee ọmụmụ ihe Koach Learn {n} n'asụsụ {language}{about}:", about: " gbasara \"{query}\"", more: "Ahụrụ m {total} n'ozuzu.", also: "Nke ọ bụla dịkwa na: {others}.", allOthers: "asụsụ 9 ndị ọzọ",
    start: "Mepee otu na ihuenyo ka ị gụọ ihe ọ bụ ma malite ya. Ị ga-abanye ma ọ bụ mepee akaụntụ na Koach Learn.", none: "Ahụghị m ọmụmụ ihe Koach Learn ọ bụla n'asụsụ {language} gbasara \"{query}\". Isiokwu ndị ahụ bụ: {topics}.",
    topics: "Koach Learn nwere ọmụmụ ihe {count} n'asụsụ {language}, n'isiokwu ndị a: {topics}. Gwa m ihe ị chọrọ ịmụta, dịka {example}.", unavailable: "Enweghị m ike ịgụ ndepụta ọmụmụ ihe Koach Learn ugbu a. Ị nwere ike ịhụ ọmụmụ ihe niile na peeji ndepụta.",
    allLink: "Ọmụmụ ihe Koach Learn niile n'asụsụ {language}", noLanguage: "Ọ dịbeghị ọmụmụ ihe Koach Learn n'asụsụ {language}." },
  pt: { found: "Aqui estão {n} cursos da Koach Learn em {language}{about}:", about: " sobre \"{query}\"", more: "Encontrei {total} no total.", also: "Cada um também está em {others}.", allOthers: "outros 9 idiomas",
    start: "Abra um na tela para ler sobre ele e começar. Você entra ou cria uma conta na Koach Learn.", none: "Não encontrei nenhum curso da Koach Learn em {language} sobre \"{query}\". Os temas são: {topics}.",
    topics: "A Koach Learn tem {count} cursos em {language}, nestes temas: {topics}. Diga o que você quer aprender, por exemplo {example}.", unavailable: "Não consegui ler a lista de cursos da Koach Learn agora. Você pode ver todos os cursos na página do catálogo.",
    allLink: "Todos os cursos da Koach Learn em {language}", noLanguage: "Ainda não há cursos da Koach Learn em {language}." }
});

const fill = (template, params) => template.replace(/\{(\w+)\}/g, (whole, name) => (params[name] === undefined ? whole : String(params[name])));
const topicName = (id, lang) => (TOPIC_NAMES[id] && (TOPIC_NAMES[id][lang] || TOPIC_NAMES[id].en)) || "";
const cut = (text, length) => (text.length <= length ? text : `${text.slice(0, length).replace(/\s+\S*$/, "")}…`);
const listJoin = (items, lang) => items.join(lang === "ar" ? "، " : lang === "am" ? "፣ " : ", ");

function koachLearnAnswer(result) {
  const lang = TEXT[result.replyLang] ? result.replyLang : "en";
  const T = TEXT[lang]; const names = LANGUAGE_NAMES[lang];
  const language = names[result.courseLang] || names.en;
  const query = result.topic || (result.terms || []).join(" ");
  const pageFor = courseLang => `${CATALOG}/#lang=${courseLang}`;
  const all = { name: fill(T.allLink, { language }), publisher: "Koach Learn", title: fill(T.allLink, { language }), url: pageFor(result.courseLang) };
  if (result.kind === "unavailable") return { text: T.unavailable, sources: [all] };
  if (result.kind === "no-language") return { text: fill(T.noLanguage, { language }), sources: [{ ...all, url: `${CATALOG}/` }] };
  const topics = listJoin((result.topicIds || []).map(id => topicName(id, lang)).filter(Boolean), lang);
  if (result.kind === "topics") {
    const example = listJoin([topicName(46, lang), topicName(43, lang)].filter(Boolean).map(name => name.replace(/\s*\(.*\)$/, "").toLowerCase()), lang).replace(/, ([^,]*)$/, lang === "en" ? " or $1" : ", $1");
    return { text: fill(T.topics, { count: result.count, language, topics, example }), sources: [all] };
  }
  if (result.kind === "none") return { text: fill(T.none, { language, query, topics }), sources: [all] };
  const courses = result.courses || [];
  // each course with the first two things it teaches (read aloud, five full lists took a minute)
  const learns = course => course.s.replace(/…$/, "").split(/[,،፣]\s*/).filter(Boolean).slice(0, 2).join(lang === "ar" ? "، " : lang === "am" ? "፣ " : ", ");
  const lines = courses.map((course, index) => { const line = `${index + 1}. ${course.n}${course.s ? `: ${learns(course)}` : ""}`; return /[.!?።۔…]$/.test(line) ? line : `${line}.`; });
  const others = courses.length ? LANGS.filter(code => code !== result.courseLang && courses.every(course => course.o && course.o[code])) : [];
  const also = others.length === 9 ? fill(T.also, { others: T.allOthers }) : others.length ? fill(T.also, { others: listJoin(others.map(code => names[code]), lang) }) : "";
  const text = [fill(T.found, { n: courses.length, language, about: query && !(result.topicInEnglish && lang !== "en") ? fill(T.about, { query }) : "" }), ...lines, result.total > courses.length ? fill(T.more, { total: result.total }) : "", also, T.start].filter(Boolean).join(" ");
  const sources = courses.map(course => ({ name: course.n, publisher: cut(course.n, 38), title: course.n, url: `${CATALOG}/#lang=${result.courseLang}&c=${course.i}` }));
  return { text, sources: [...sources, all] };
}

module.exports = Object.freeze({ createKoachLearnCatalog, findKoachLearnCourses, koachLearnAnswer, search, stemOf, CATALOG, LANGUAGE_NAMES, TOPIC_NAMES });
