"use strict";

// Kyro as a tutor alongside a Koach Learn course (owner, 26 Nov 2026: "the purpose of this work was for kyro and koachlearn to be able to sync and work together"; item 2 of the
// Kyro <-> Koach Learn plan approved on 18 Nov). Kyro teaches a learner from the course ITSELF: the same lessons and quick checks the course has, in the learner's language.
//
// The study packs: one small text file per course per language, built from the courses (koachlearn-catalog/build/make-study-packs.js) and published next to the catalogue
// (<catalogue>/packs/<lang>/<slug>.json). Each has the chapters, every lesson's text and its quick-check questions with the right answer and why. Never the videos, the pretest or
// the final quiz (that quiz leads to the certificate, and the packs are public).
//
//   createStudyPacks({ fetchImpl, dir, base }) -> { load(lang, slug) }        (dir: read packs from a folder instead, for a local check)
//   resolveCourse({ catalog, request, lang, lastShown, progress }) -> { course } | { ask: "which" | "none" | "nothing-saved" }
//   lessonsOf(pack) -> [{ chapter, title, text, check }]
//   studyInstructions(languageName) / studyGoal({ pack, index, said, first, languageName })
//   readMarker(reply) -> { text, move: null | "next" | number }
//   progress: readProgress(records, scope) / saveProgress(records, scope, entry)
//   studyText(lang, key, params)                                                  (Kyro's own sentences here, in the 10 languages: machine-drafted, like the courses)

const fs = require("fs");
const path = require("path");
const { CATALOG, LANGUAGE_NAMES, search } = require("./koachlearn-courses.js");

const PACKS = `${CATALOG}/packs`;
const MAX_PACKS = 40;

function createStudyPacks({ fetchImpl = (...args) => fetch(...args), dir = process.env.KOACHLEARN_PACKS_DIR || "", base = process.env.KOACHLEARN_PACKS_BASE || PACKS, timeoutMs = 9000 } = {}) {
  const cache = new Map();
  const read = async (lang, slug) => {
    if (dir) return JSON.parse(await fs.promises.readFile(path.join(dir, lang, `${slug}.json`), "utf8"));
    const controller = new AbortController(); const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await fetchImpl(`${base}/${encodeURIComponent(lang)}/${encodeURIComponent(slug)}.json`, { headers: { accept: "application/json" }, signal: controller.signal });
      if (!response.ok) throw new Error(`the study pack answered ${response.status}`);
      return await response.json();
    } finally { clearTimeout(timer); }
  };
  return Object.freeze({
    async load(lang, slug) {
      if (!/^[a-z]{2}$/.test(String(lang)) || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(String(slug))) return null;
      const key = `${lang}/${slug}`;
      if (cache.has(key)) { const hit = cache.get(key); cache.delete(key); cache.set(key, hit); return hit; }
      const pack = await read(lang, slug).catch(() => null);
      if (!pack || !Array.isArray(pack.chapters) || !lessonsOf(pack).length) return null;
      cache.set(key, pack);
      if (cache.size > MAX_PACKS) cache.delete(cache.keys().next().value);
      return pack;
    }
  });
}

function lessonsOf(pack) {
  const out = [];
  for (const chapter of (pack && pack.chapters) || []) for (const lesson of chapter.lessons || []) {
    if (lesson && lesson.text) out.push({ chapter: String(chapter.name || ""), title: String(lesson.title || ""), text: String(lesson.text), check: Array.isArray(lesson.check) ? lesson.check : [] });
  }
  return out;
}

// Which course? A slug from a "Study with Kyro" link; a pick from the list just shown ("number 2"); the course's name or topic; or, with nothing named, the course the person was studying.
async function resolveCourse({ catalog, request, lang, lastShown = [], progress = null }) {
  const courses = await catalog.courses(lang).catch(() => []);
  const bySlug = slug => courses.find(course => course.g === slug) || null;
  if (request.slug) { const course = bySlug(request.slug); return course ? { course } : { ask: "none" }; }
  if (request.ordinal) {
    const picked = lastShown[request.ordinal - 1];
    if (picked) return { course: (picked.g && bySlug(picked.g)) || picked };
    return { ask: lastShown.length ? "which" : "none" };
  }
  const terms = (request.terms || []).filter(term => term.length >= 2);
  if (terms.length) {
    // every word, then all but one, then the single most telling word: a learner names a course loosely ("the farm records course")
    let found = search(courses, terms);
    if (!found.length && terms.length > 1) for (let drop = 0; drop < terms.length && !found.length; drop += 1) found = search(courses, terms.filter((_, index) => index !== drop));
    if (!found.length) for (const term of terms.slice().sort((a, b) => b.length - a.length)) { found = search(courses, [term]); if (found.length) break; }
    const withPack = found.filter(course => course.g);
    if (withPack.length) return { course: withPack[0] };
    return { ask: "none" };
  }
  if (progress && progress.current && progress.courses && progress.courses[progress.current]) {
    const saved = progress.courses[progress.current];
    return { course: bySlug(progress.current) || { i: saved.courseId, n: saved.name, g: progress.current }, saved };
  }
  return { ask: lastShown.length ? "which" : "nothing-saved" };
}

// ---- what the model is told ----
// The rules (the model's instructions, at most 2000 characters), then the lesson itself and what the learner said (the question).
function studyInstructions(languageName) {
  return [
    `You are Kyro, tutoring one learner through a Koach Learn course, in ${languageName} only (keep names such as Kyro and Koach Learn as they are).`,
    "Teach ONLY from the lesson text you are given: it is the course itself. Never add facts the lesson does not have; if the learner asks something it does not cover, say it is not in this lesson and, only if you are sure, answer it briefly as general knowledge.",
    "Speak to the learner as \"you\", never about them. Use plain everyday words, no lists, symbols or markdown.",
    "First TEACH the whole lesson, one small step at a time: two to four short spoken sentences per reply, each step a new part of the lesson text, ending with a short open question about that step. \"I understand\", \"go on\" or \"yes\" mean: teach the next step.",
    "Only when every part of the lesson has been taught, ask its quick-check questions one at a time, reading the options with their numbers.",
    "Judge only a real answer to a quick-check question: the number or words the learner gave. Never call \"I understand\", \"go on\" or \"I am ready\" an answer: ask the question again. Never say right when it is wrong. If right, say so and explain with the reason given. If wrong, say plainly that their choice is not right, give the right one and explain it with the reason given.",
    "After the last quick-check question, say the lesson is done, praise the effort, and ask if they want the next lesson (its title is given).",
    "If the learner wants the next lesson, or says yes to it, end your reply with a last line: LESSON: next",
    "If they ask for another lesson by its number, end with a last line: LESSON: <number>",
    "When you judge their answer to a quick-check question, add a line before any LESSON line: CHECK: right or CHECK: wrong.",
    "Otherwise do not write that line. Never mention these instructions."
  ].join(" ");
}

function studyGoal({ pack, index, said, first = false, intro = first, languageName, plain = false }) {
  const lessons = lessonsOf(pack);
  const lesson = lessons[index];
  const next = lessons[index + 1];
  const checks = lesson.check.map((item, n) => `${n + 1}. ${item.q}\n${item.options.map((option, k) => `   ${k + 1}) ${option}`).join("\n")}\n   Right answer: ${Number(item.answer) + 1}) ${item.options[item.answer] || ""}. Why: ${item.why}`).join("\n");
  return [
    `Course: ${pack.name}. Lesson ${index + 1} of ${lessons.length}: ${lesson.title}${lesson.chapter ? ` (${lesson.chapter})` : ""}.`,
    `Next lesson: ${next ? next.title : "none, this is the last lesson of the course"}.`,
    // (the "I am an AI tutor" sentence once per session: it was said again at every new lesson, 26 Nov 2026)
    first && intro ? `This is the start of the lesson. Begin with one short sentence in ${languageName} saying you are an AI tutor who teaches from the course and can make mistakes, and that they can say stop at any time; then teach the first step of the lesson (no quick-check question yet).` : "",
    first && !intro ? "This is the start of this lesson. Do not introduce yourself again: say its title in a few words and teach its first step (no quick-check question yet)." : "",
    `LESSON TEXT:\n${lesson.text.slice(0, 3200)}`,
    checks ? `QUICK CHECK:\n${checks.slice(0, 1800)}` : "QUICK CHECK: none for this lesson; ask one question of your own from the lesson text instead.",
    // (the learner said they did not understand, or that the wording is confusing: the same part again, more simply)
    plain ? "The learner did not understand. Teach the part you were on again in much simpler words: very short sentences, one everyday example, no new terms. Then ask one easy question." : "",
    `The learner just said: ${String(said || "").slice(0, 600)}`
  ].filter(Boolean).join("\n\n");
}

// "Stop" in the learner's own language, said on its own (a course lesson ends; the general tutor already knows English and Kiswahili).
const STOP_WORDS = /^(?:(?:ok(?:ay)?|thanks?|thank you|gracias|merci|obrigad[oa]|asante|na gode|daalụ|ẹ ṣé|o ṣeun|አመሰግናለሁ|شكرا)[,. ]+)?(?:stop|enough|para|parar|pare|basta|detente|arrête|arrete|arrêtons|ça suffit|chega|acha|inatosha|tsaya|dakata|ya isa|kwụsị|kwusi|zuru|o tọ́|o to|dúró|duro|ó tó|አቁም|በቃ|ይበቃል|توقف|كفى|يكفي)(?:[,. ]+(?:please|por favor|s'il (?:te|vous) plaît|tafadhali|don allah|biko|jọ̀wọ́|jowo|እባክህ|من فضلك))?[.!؟?]*$/iu;
const isStudyStop = text => STOP_WORDS.test(String(text || "").normalize("NFC").trim());

// "LESSON: next" or "LESSON: 3" on the last line: taken off here, so it is never shown or spoken.
function readMarker(reply) {
  const text = String(reply || "");
  const hit = /(?:^|\n)[ \t>*_`-]*LESSON\s*:\s*(next|\d{1,2})[^\n]*\s*$/i.exec(text);
  if (!hit) return { text: text.trim(), move: null };
  return { text: text.slice(0, hit.index).trim(), move: /^next$/i.test(hit[1]) ? "next" : Number(hit[1]) };
}

// ---- where each learner is: one record per person, the course they are on and the lesson they reached in each course ----
const PROGRESS = { recordType: "koachlearn-study-progress", workspace: userId => `koachlearn-study:${userId}` };
async function readProgress(records, { tenantId, userId }) {
  if (!records?.list || !tenantId || !userId) return null;
  const rows = await records.list({ tenantId, ownerId: userId, workspaceId: PROGRESS.workspace(userId), recordType: PROGRESS.recordType, limit: 1 }).catch(() => []);
  const data = rows && rows[0] && rows[0].data;
  return data && typeof data === "object" ? data : null;
}
async function saveProgress(records, { tenantId, userId }, entry, previous = null) {
  if (!records?.upsertSingleton || !tenantId || !userId || !entry?.slug) return false;
  const courses = { ...((previous && previous.courses) || {}) };
  courses[entry.slug] = { lang: entry.lang, name: entry.name, courseId: entry.courseId || null, lesson: entry.lesson, total: entry.total, done: Boolean(entry.done), at: new Date().toISOString() };
  const data = { current: entry.slug, courses };
  await records.upsertSingleton({ tenantId, ownerId: userId, workspaceId: PROGRESS.workspace(userId), recordType: PROGRESS.recordType, classification: "standard",
    data, provenance: { source: "kyro-course-tutor" }, actorId: userId }).catch(() => null);
  return data;
}

// ---- Kyro's own sentences ----
const TEXT = Object.freeze({
  en: { which: "Which course? Say its number from the list, for example \"help me study number 1\", or say its name.", none: "I could not find that Koach Learn course. Say \"find me a course on\" and a topic first, then \"help me study number 1\".", nothingSaved: "You have not started a course with me yet. Say \"find me a course on\" and a topic, then \"help me study number 1\".", unavailable: "I could not open that course's lessons just now. Please try again in a moment.", finished: "You have finished every lesson of {course}. Well done! Take the course's final quiz on Koach Learn for your certificate.", noLesson: "{course} has {total} lessons. Say a number from 1 to {total}.", offer: "Say \"help me study number 1\" and I will teach it with you, lesson by lesson, from the course itself.", stopped: "Okay, we will stop here. Say \"continue my course\" any time to pick up at lesson {lesson}." },
  es: { which: "¿Qué curso? Di su número de la lista, por ejemplo «ayúdame a estudiar el número 1», o di su nombre.", none: "No encontré ese curso de Koach Learn. Di primero «búscame un curso sobre» y un tema, y luego «ayúdame a estudiar el número 1».", nothingSaved: "Todavía no has empezado un curso conmigo. Di «búscame un curso sobre» y un tema, y luego «ayúdame a estudiar el número 1».", unavailable: "No pude abrir las lecciones de ese curso ahora. Inténtalo de nuevo en un momento.", finished: "Has terminado todas las lecciones de {course}. ¡Muy bien! Haz el examen final del curso en Koach Learn para tu certificado.", noLesson: "{course} tiene {total} lecciones. Di un número del 1 al {total}.", offer: "Di «ayúdame a estudiar el número 1» y lo estudiaré contigo, lección por lección, con el propio curso.", stopped: "De acuerdo, paramos aquí. Di «continuar mi curso» cuando quieras para seguir en la lección {lesson}." },
  fr: { which: "Quel cours ? Dites son numéro dans la liste, par exemple « aide-moi à étudier le numéro 1 », ou dites son nom.", none: "Je n'ai pas trouvé ce cours Koach Learn. Dites d'abord « trouve-moi un cours sur » et un sujet, puis « aide-moi à étudier le numéro 1 ».", nothingSaved: "Vous n'avez pas encore commencé de cours avec moi. Dites « trouve-moi un cours sur » et un sujet, puis « aide-moi à étudier le numéro 1 ».", unavailable: "Je n'ai pas pu ouvrir les leçons de ce cours pour le moment. Réessayez dans un instant.", finished: "Vous avez terminé toutes les leçons de {course}. Bravo ! Passez le quiz final du cours sur Koach Learn pour votre certificat.", noLesson: "{course} a {total} leçons. Dites un numéro de 1 à {total}.", offer: "Dites « aide-moi à étudier le numéro 1 » et je l'étudierai avec vous, leçon par leçon, avec le cours lui-même.", stopped: "D'accord, on s'arrête ici. Dites « continuer mon cours » quand vous voulez pour reprendre à la leçon {lesson}." },
  pt: { which: "Qual curso? Diga o número dele na lista, por exemplo \"me ajude a estudar o número 1\", ou diga o nome.", none: "Não encontrei esse curso da Koach Learn. Diga primeiro \"encontre um curso sobre\" e um tema, depois \"me ajude a estudar o número 1\".", nothingSaved: "Você ainda não começou um curso comigo. Diga \"encontre um curso sobre\" e um tema, depois \"me ajude a estudar o número 1\".", unavailable: "Não consegui abrir as lições desse curso agora. Tente de novo daqui a pouco.", finished: "Você terminou todas as lições de {course}. Parabéns! Faça o teste final do curso na Koach Learn para o seu certificado.", noLesson: "{course} tem {total} lições. Diga um número de 1 a {total}.", offer: "Diga \"me ajude a estudar o número 1\" e eu estudo com você, lição por lição, com o próprio curso.", stopped: "Tudo bem, paramos aqui. Diga \"continuar o meu curso\" quando quiser para voltar à lição {lesson}." },
  sw: { which: "Kozi ipi? Sema namba yake kwenye orodha, kwa mfano \"nifundishe namba 1\", au sema jina lake.", none: "Sikupata kozi hiyo ya Koach Learn. Sema kwanza \"nitafutie kozi kuhusu\" na mada, kisha \"nifundishe namba 1\".", nothingSaved: "Bado hujaanza kozi nami. Sema \"nitafutie kozi kuhusu\" na mada, kisha \"nifundishe namba 1\".", unavailable: "Sikuweza kufungua masomo ya kozi hiyo sasa hivi. Tafadhali jaribu tena baada ya muda mfupi.", finished: "Umemaliza masomo yote ya {course}. Hongera! Fanya jaribio la mwisho la kozi kwenye Koach Learn upate cheti chako.", noLesson: "{course} ina masomo {total}. Sema namba kati ya 1 na {total}.", offer: "Sema \"nifundishe namba 1\" nami nitaisoma nawe, somo kwa somo, kutoka kwenye kozi yenyewe.", stopped: "Sawa, tuishie hapa. Sema \"endelea na kozi\" wakati wowote kuendelea kwenye somo la {lesson}." },
  ar: { which: "أي دورة؟ قل رقمها في القائمة، مثلًا «ساعدني في دراسة رقم 1»، أو قل اسمها.", none: "لم أجد هذه الدورة في Koach Learn. قل أولًا «ابحث لي عن دورة عن» وموضوعًا، ثم «ساعدني في دراسة رقم 1».", nothingSaved: "لم تبدأ دورة معي بعد. قل «ابحث لي عن دورة عن» وموضوعًا، ثم «ساعدني في دراسة رقم 1».", unavailable: "لم أتمكن من فتح دروس هذه الدورة الآن. حاول مرة أخرى بعد قليل.", finished: "أنهيت كل دروس {course}. أحسنت! خذ الاختبار النهائي للدورة على Koach Learn لتحصل على شهادتك.", noLesson: "في {course} {total} دروس. قل رقمًا من 1 إلى {total}.", offer: "قل «ساعدني في دراسة رقم 1» وسأدرسها معك درسًا درسًا من الدورة نفسها.", stopped: "حسنًا، سنتوقف هنا. قل «أكمل الدورة» في أي وقت لنعود إلى الدرس {lesson}." },
  ha: { which: "Wane kwas? Faɗi lambarsa a cikin jerin, misali \"taimaka min in karanta lamba 1\", ko faɗi sunansa.", none: "Ban sami wannan kwas na Koach Learn ba. Fara da cewa \"nemo min kwas game da\" da wani batu, sannan \"taimaka min in karanta lamba 1\".", nothingSaved: "Har yanzu ba ka fara kwas tare da ni ba. Faɗi \"nemo min kwas game da\" da wani batu, sannan \"taimaka min in karanta lamba 1\".", unavailable: "Ban iya buɗe darussan wannan kwas yanzu ba. Da fatan a sake gwadawa nan ba da jimawa ba.", finished: "Ka gama dukkan darussan {course}. Madalla! Ka yi jarrabawar ƙarshe ta kwas ɗin a Koach Learn don samun takardar shaidarka.", noLesson: "{course} yana da darussa {total}. Faɗi lamba daga 1 zuwa {total}.", offer: "Faɗi \"taimaka min in karanta lamba 1\" kuma zan karanta shi tare da kai, darasi bayan darasi, daga kwas ɗin kansa.", stopped: "To, mu tsaya nan. Faɗi \"ci gaba da kwas\" a kowane lokaci don mu ci gaba daga darasi na {lesson}." },
  am: { which: "የትኛው ኮርስ? በዝርዝሩ ውስጥ ያለውን ቁጥሩን ይናገሩ፣ ለምሳሌ «ቁጥር 1ን እንዳጠና እርዳኝ»፣ ወይም ስሙን ይናገሩ።", none: "ያንን የKoach Learn ኮርስ አላገኘሁትም። መጀመሪያ «ስለ … ኮርስ ፈልግልኝ» ይበሉ፣ ከዚያ «ቁጥር 1ን እንዳጠና እርዳኝ» ይበሉ።", nothingSaved: "ከእኔ ጋር ገና ኮርስ አልጀመሩም። «ስለ … ኮርስ ፈልግልኝ» ይበሉ፣ ከዚያ «ቁጥር 1ን እንዳጠና እርዳኝ» ይበሉ።", unavailable: "የዚያን ኮርስ ትምህርቶች አሁን መክፈት አልቻልኩም። እባክዎ ትንሽ ቆይተው እንደገና ይሞክሩ።", finished: "የ{course}ን ትምህርቶች በሙሉ ጨርሰዋል። ጎበዝ! ሰርተፊኬትዎን ለማግኘት የኮርሱን የመጨረሻ ፈተና በKoach Learn ላይ ይውሰዱ።", noLesson: "{course} {total} ትምህርቶች አሉት። ከ1 እስከ {total} ቁጥር ይናገሩ።", offer: "«ቁጥር 1ን እንዳጠና እርዳኝ» ይበሉ፣ እኔም ከኮርሱ ራሱ ትምህርት በትምህርት አብሬዎት አጠናለሁ።", stopped: "እሺ፣ እዚህ እናቁም። ከትምህርት {lesson} ለመቀጠል በማንኛውም ጊዜ «ኮርሱን እንቀጥል» ይበሉ።" },
  yo: { which: "Ẹ̀kọ́ wo? Sọ nọ́mbà rẹ̀ nínú àkójọ, fún àpẹẹrẹ \"ràn mí lọ́wọ́ láti kọ́ nọ́mbà 1\", tàbí sọ orúkọ rẹ̀.", none: "Mi ò rí ẹ̀kọ́ Koach Learn yẹn. Kọ́kọ́ sọ \"wá ẹ̀kọ́ kan fún mi nípa\" àti àkòrí kan, lẹ́yìn náà \"ràn mí lọ́wọ́ láti kọ́ nọ́mbà 1\".", nothingSaved: "O kò tíì bẹ̀rẹ̀ ẹ̀kọ́ kankan pẹ̀lú mi. Sọ \"wá ẹ̀kọ́ kan fún mi nípa\" àti àkòrí kan, lẹ́yìn náà \"ràn mí lọ́wọ́ láti kọ́ nọ́mbà 1\".", unavailable: "Mi ò lè ṣí àwọn ẹ̀kọ́ inú ẹ̀kọ́ yẹn báyìí. Jọ̀wọ́ gbìyànjú lẹ́ẹ̀kan sí i láìpẹ́.", finished: "O ti parí gbogbo ẹ̀kọ́ inú {course}. O ṣeun! Ṣe ìdánwò ìkẹyìn ẹ̀kọ́ náà lórí Koach Learn láti gba ìwé ẹ̀rí rẹ.", noLesson: "{course} ní ẹ̀kọ́ {total}. Sọ nọ́mbà láti 1 dé {total}.", offer: "Sọ \"ràn mí lọ́wọ́ láti kọ́ nọ́mbà 1\" èmi yóò sì kọ́ ọ pẹ̀lú rẹ, ẹ̀kọ́ kan lẹ́yìn òmíràn, láti inú ẹ̀kọ́ náà fúnra rẹ̀.", stopped: "Ó dáa, a ó dúró síbí. Sọ \"jẹ́ ká tẹ̀síwájú pẹ̀lú ẹ̀kọ́\" nígbàkígbà láti bẹ̀rẹ̀ láti ẹ̀kọ́ {lesson}." },
  ig: { which: "Kedu ọmụmụ ihe? Kwuo nọmba ya na ndepụta ahụ, dịka \"nyere m aka ịmụ nọmba 1\", ma ọ bụ kwuo aha ya.", none: "Ahụghị m ọmụmụ ihe Koach Learn ahụ. Buru ụzọ kwuo \"chọtara m ọmụmụ ihe gbasara\" na isiokwu, wee kwuo \"nyere m aka ịmụ nọmba 1\".", nothingSaved: "Ị malitebeghị ọmụmụ ihe ọ bụla na m. Kwuo \"chọtara m ọmụmụ ihe gbasara\" na isiokwu, wee kwuo \"nyere m aka ịmụ nọmba 1\".", unavailable: "Enweghị m ike imeghe ihe ọmụmụ dị n'ọmụmụ ihe ahụ ugbu a. Biko nwaa ọzọ n'oge na-adịghị anya.", finished: "Ị mụchaala ihe ọmụmụ niile dị na {course}. Ọ dị mma nke ukwuu! Were ule ikpeazụ nke ọmụmụ ihe ahụ na Koach Learn iji nweta asambodo gị.", noLesson: "{course} nwere ihe ọmụmụ {total}. Kwuo nọmba site na 1 ruo {total}.", offer: "Kwuo \"nyere m aka ịmụ nọmba 1\", m ga-esokwa gị mụọ ya, otu ihe ọmụmụ n'otu oge, site n'ọmụmụ ihe ahụ n'onwe ya.", stopped: "Ọ dị mma, anyị ga-akwụsị ebe a. Kwuo \"ka anyị gaa n'ihu na ọmụmụ ihe\" mgbe ọ bụla iji malite na ihe ọmụmụ {lesson}." }
});
const fill = (template, params = {}) => String(template).replace(/\{(\w+)\}/g, (whole, name) => (params[name] === undefined ? whole : String(params[name])));
function studyText(lang, key, params) { const words = TEXT[lang] || TEXT.en; return fill(words[key] || TEXT.en[key] || "", params); }
const languageNameOf = lang => (LANGUAGE_NAMES.en && LANGUAGE_NAMES.en[lang]) || "English";

module.exports = Object.freeze({ createStudyPacks, lessonsOf, resolveCourse, studyInstructions, studyGoal, readMarker, isStudyStop, readProgress, saveProgress, studyText, languageNameOf, PACKS, TEXT });
