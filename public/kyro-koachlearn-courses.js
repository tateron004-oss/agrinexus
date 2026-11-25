// Which words ask Kyro to FIND a Koach Learn course, and in which language? The same matcher is used by the server (nexus/knowledge/koachlearn-courses.js looks the courses up in the
// Koach Learn catalogue) and by the page (public/app.js takes such a spoken turn itself, so the voice model never names a course from memory). It reads all 10 languages the
// courses are in: English, Español, Français, العربية, Kiswahili, Hausa, አማርኛ, Yorùbá, Igbo and Português.
//
//   courseRequest(text) -> null | { wordsLang, courseLang, terms, named }
//     wordsLang   the language the words are in ("ha", "am" ...), or null when the words do not settle it (then the caller's default applies)
//     courseLang  a language the person named for the courses ("courses in Hausa", "kozi kwa Kiamhari"), or null
//     terms       what the course should be about, folded (lower case, no accents or tone marks), without the request words: ["farming"], ["noma"], [] for "what courses are there"
//     topic       the same words as they were said, to say back
//     named       true when the words name Koach Learn
//
// It is deliberately narrow. A course word is needed, and in English a request shape as well ("find", "show", "what courses", "courses on ..."), so "of course", "first class" and "toilet
// training" are not courses. The person's own learning is never taken: "continue my course", "my progress", "quiz me", "my certificate", "next lesson" and the AI basics course keep doing what
// they did. The Arabic word for a course (دورة) is also the word for a period (الدورة الشهرية): a sentence about a period is never taken.
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.KyroKoachLearnCourses = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const LANGS = Object.freeze(["en", "es", "fr", "ar", "sw", "ha", "am", "yo", "ig", "pt"]);

  // The catalogue page's own search folding (koachlearn-catalog/site/app.js), so Kyro and the page find the same courses for the same words.
  const fold = s => String(s || "").normalize("NFKD").replace(/\p{M}/gu, "").toLowerCase()
    .replace(/[أإآٱ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه").replace(/ؤ/g, "و").replace(/ئ/g, "ي").replace(/ـ/g, "")
    .replace(/ƙ/g, "k").replace(/ɗ/g, "d").replace(/ɓ/g, "b").replace(/ƴ/g, "y")
    .replace(/[’'`´]/g, "'").replace(/\s+/g, " ").trim();
  // (a French or Igbo elision is a separate word: "l'agriculture" is about agriculture, "n'asusu" is "in the language")
  const tokensOf = folded => folded.split(/[\s,.;:!?¿¡،؟"“”«»()\[\]/\\|*#]+/).map(t => t.replace(/^'+|'+$/g, "").replace(/^(?:l|d|qu|j|s|m|t|c|n)'(?=\p{L})/u, "")).filter(Boolean);
  const ETHIOPIC = /[ሀ-᎟ⶀ-⷟]/;
  const ARABIC = /[؀-ۿ]/;

  // The words for a course, in each language (folded). Amharic and Arabic words take prefixes and endings, so they are matched inside a word.
  const COURSE_TOKENS = new Set(["course", "courses", "classes", "trainings", "koachlearn", "curso", "cursos", "cours", "formation", "formations", "kozi", "mafunzo", "kwas", "kwasa", "kwasa-kwasai", "kwasa-kwasan", "eko", "koosi", "nkuzi"]);
  const COURSE_PHRASES = /\b(?:koach ?learn|training (?:course|courses|program|programs|programme|programmes)|kwasa kwasa\w*|omumu ihe)\b/;
  const COURSE_INSIDE = /ኮርስ|ትምህርት|دوره|دورات|كورس/;

  // The person's own learning, and the AI basics course: never this finder's.
  const OWN_LEARNING = /\b(?:of course|my (?:course|courses|class|classes|lesson|lessons|training)|continue|resume|carry on|enrol+|enroll\w*|sign me up|register me|progress|how far|quiz|exam|certificate|complete|finish|next lesson|ai basics|ai literacy|mi curso|mis cursos|continuar|certificado|progreso|inscribirme|mon cours|mes cours|continuer|certificat|progres|inscrire|meu curso|meus cursos|progresso|inscrever|kozi yangu|endelea|maendeleo|cheti|jaribio|maliza|nisajili|kwas dina|kwasa-kwasaina)\b|الشهريه|دورتي|دوراتي|شهادتي/;
  // An English request to find or see courses ("find", "what courses", "do you have"), or a course named with what it is about ("courses on farming", "classes about money").
  const EN_ASK = /\b(?:find|show|list|search|look(?:ing)? for|recommend|suggest|what|which|any|are there|is there|do you have|do you offer|have you got|give me|get me|i want|i need|i'd like|i would like|tell me about|help me find|can i (?:take|learn|study)|where can i (?:learn|study|take))\b/;
  const EN_ABOUT = /\b(?:courses?|classes|trainings|training (?:courses?|programs?|programmes?))\s+(?:on|about|for|in|to help|that teach|teaching)\b/;

  // A language named for the courses, in the languages people say it in (folded). Arabic and Amharic names are matched inside a word ("بالهوسا", "በሃውሳ").
  const NAMES = Object.freeze({
    en: ["english", "anglais", "ingles", "englisch", "kiingereza", "turanci", "geesi", "bekee"],
    es: ["spanish", "espanol", "espagnol", "espanhol", "kihispania", "sifaniyanci"],
    fr: ["french", "francais", "frances", "kifaransa", "faransanci", "faranse"],
    ar: ["arabic", "arabe", "kiarabu", "larabci", "larubawa"],
    sw: ["swahili", "kiswahili", "souahili", "suajili", "suaili"],
    ha: ["hausa", "haoussa", "kihausa"],
    am: ["amharic", "amharique", "amarico", "amharico", "kiamhari", "amhariki"],
    yo: ["yoruba", "kiyoruba"],
    ig: ["igbo", "ibo", "kiigbo"],
    pt: ["portuguese", "portugais", "portugues", "kireno"]
  });
  const NAMES_INSIDE = Object.freeze({
    en: ["እንግሊዝኛ", "انجليزي", "انكليزي"], es: ["ስፓንኛ", "ስፓኒሽ", "اسباني"], fr: ["ፈረንሳይኛ", "فرنسي"], ar: ["አረብኛ", "عربي"], sw: ["ስዋሂሊ", "سواحيلي"],
    ha: ["ሃውሳ", "هوسا", "الهوسي"], am: ["አማርኛ", "امهري"], yo: ["ዮሩባ", "يوروبا"], ig: ["ኢግቦ", "ايغبو", "اجبو"], pt: ["ፖርቱጋልኛ", "برتغالي"]
  });

  // Words that show which language a sentence is in (folded). Some are shared by two languages and count half for each.
  const CUES = Object.freeze({
    en: "course courses classes find show me the a an about on for i want need what which are there any do you have please learn looking tell give get some",
    es: "quiero busco muestrame muestra hay necesito puedes quisiera tienes dame los las el en del una unos cursos curso sobre para que aprender de",
    fr: "cours formation formations je cherche veux voudrais montre montrez moi des sur les quels quelles pour apprendre besoin trouve trouvez avez vous il y a une un du",
    pt: "quero procuro mostre mostra tem preciso voce gostaria encontre os as em ha sao uma um do da cursos curso sobre para que aprender de",
    sw: "kozi mafunzo nataka ninataka nionyeshe nitafutie nipe kuhusu za ya kuna tafadhali kujifunza kilimo biashara naomba kwa lugha zipi gani",
    ha: "kwas kwasa kwasa-kwasai kwasa-kwasan ina son so nemo nemi nuna min mini akwai game koyon koyo harshen sana'a kasuwanci noma wasu wani wace wane bani don kuma akan",
    yo: "eko koosi mo fe nfe fun mi nipa wa se bawo kini ati ise ogbin owo jowo emi ni nkan",
    ig: "omumu ihe achoro choo gosi gbasara maka biko enwere nkuzi m oru ugbo ego ka mu nke"
  });
  const SHARED = new Set(["cursos", "curso", "sobre", "para", "que", "aprender", "de"]);
  const CUE_SETS = Object.freeze(Object.fromEntries(Object.entries(CUES).map(([lang, words]) => [lang, new Set(words.split(" "))])));

  // Request words, taken out of the sentence to leave what the course is about (folded).
  const STOP = new Set(("course courses classes class trainings training program programs programme programmes koach learn koachlearn curso cursos cours formation formations kozi mafunzo kwas kwasa kwasa-kwasai kwasa-kwasan eko koosi nkuzi omumu ihe "
    + "find show list search look looking for recommend suggest what which any are is there do does you have offer got give get me i want need would like id i'd tell about help can could take study where please some the a an on in to of and or with that teach teaching my "
    + "kyro hey hello hi ok okay nexus available new good best free "
    // (the voice model's own English requests for a Hausa, Amharic, Yoruba or Igbo speaker: "show available lessons or courses, ideally in Amharic", "include Yoruba options if available")
    + "ideally include including options option suitable provide user wants if possible lessons "
    + "quiero busco muestrame muestra hay necesito puedes quisiera tienes dame los las el en del una unos sobre para que aprender de y o con por favor me algun alguno algunos "
    + "je cherche veux voudrais montre montrez moi des sur les quels quelles quel pour apprendre besoin trouve trouvez avez vous il y a une un du le la et ou s'il plait svp "
    + "quero procuro mostre mostra tem preciso voce gostaria encontre os as em ha sao uma um do da no na e ou por favor "
    + "nataka ninataka nionyeshe nitafutie nipe kuhusu za ya kuna tafadhali kujifunza naomba kwa lugha zipi gani na au ni nini "
    + "ina son so nemo nemi nuna min mini akwai game da koyon koyo harshen wasu wani wace wane bani don kuma akan a cikin ne ce na "
    + "mo fe nfe fun mi nipa wa se bawo kini ati jowo emi ni nkan "
    + "achoro choo gosi gbasara maka biko enwere m ka mu nke na n'asusu asusu").split(/\s+/));
  const STOP_INSIDE = /^(?:ኮርስ\S*|ትምህርት\S*|ፈልግ\S*|አሳየኝ|አሳዩኝ|ስለ|ምን|አለ|አሉ|እፈልጋለሁ|በ|ላይ|ያሉ|ዝርዝር|ልማር|(?:و|ب|ل|ف)?(?:ال)?(?:دوره|دورات|كورس|كورسات)|ابحث|ابحثي|ارني|اريد|هل|توجد|يوجد|عن|في|حول|من|لي|ما|هي|ماهي|اعرض|اظهر|تعلم|للتعلم|باللغه|اللغه)$/;

  function namedLanguage(folded, tokens) {
    for (const lang of LANGS) {
      if (NAMES[lang].some(name => tokens.includes(name))) return lang;
      if (NAMES_INSIDE[lang].some(name => folded.includes(name))) return lang;
    }
    return null;
  }
  const isName = token => LANGS.some(lang => NAMES[lang].includes(token) || NAMES_INSIDE[lang].some(name => token.includes(name)));

  // wordsLanguage(text) -> "ha" | ... | null. The script settles Amharic and Arabic; the letters only Hausa, Yoruba and Igbo use (ƙ ɗ ɓ, ẹ ṣ, ụ ị) count three; then the words.
  function wordsLanguage(text) {
    const raw = String(text || "");
    if (ETHIOPIC.test(raw)) return "am";
    if (ARABIC.test(raw)) return "ar";
    const lower = raw.normalize("NFC").toLowerCase();
    const score = { en: 0, es: 0, fr: 0, pt: 0, sw: 0, ha: 0, yo: 0, ig: 0 };
    if (/[ƙɗɓƴ]/.test(lower)) score.ha += 3;
    if (/[ẹṣ]/.test(lower)) score.yo += 3;
    if (/[ụị]/.test(lower)) score.ig += 3;
    for (const token of tokensOf(fold(raw))) {
      for (const lang of Object.keys(CUE_SETS)) if (CUE_SETS[lang].has(token)) score[lang] += SHARED.has(token) ? 0.5 : 1;
    }
    // (English cue words are short and common, so another language needs only to tie to win: "kozi za kilimo" has no English word at all, "cours sur le" has "on"-like none)
    let best = null, top = 0;
    for (const lang of ["ha", "yo", "ig", "sw", "fr", "pt", "es", "en"]) if (score[lang] > top) { best = lang; top = score[lang]; }
    return top >= 1 ? best : null;
  }

  function courseRequest(text) {
    const said = String(text || "").trim();
    if (!said || said.length > 240) return null;
    // (the speech-to-text writes the name as it sounds: "What Coach Learn courses are there in Amharic?" searched for "Coach" on the live voice run, 25 Nov)
    const folded = fold(said).replace(/\bcoach ?learn\b/g, "koach learn");
    const tokens = tokensOf(folded);
    const courseWord = tokens.some(t => COURSE_TOKENS.has(t)) || COURSE_PHRASES.test(folded) || COURSE_INSIDE.test(folded);
    if (!courseWord) return null;
    if (OWN_LEARNING.test(folded)) return null;
    const wordsLang = wordsLanguage(said);
    const courseLang = namedLanguage(folded, tokens);
    const named = /\bkoach ?learn\b|koachlearn/.test(folded);
    // English needs a request shape; a course word with a language name or Koach Learn's name is one too ("Hausa courses", "Koach Learn courses").
    if ((wordsLang === "en" || wordsLang === null) && !ETHIOPIC.test(said) && !ARABIC.test(said)) {
      const englishCourse = /\b(?:courses?|classes|trainings|training (?:courses?|programs?|programmes?)|koach ?learn|koachlearn)\b/.test(folded);
      if (englishCourse && !(EN_ASK.test(folded) || EN_ABOUT.test(folded) || named || courseLang)) return null;
      if (!englishCourse && wordsLang === null) return null;
    }
    const terms = tokens.filter(t => t.length >= 2 && !STOP.has(t) && !STOP_INSIDE.test(t) && !isName(t) && !/^\d+$/.test(t)).slice(0, 6);
    // the same words as they were said (with their accents and tone marks), to say back: "about iṣẹ́ ọ̀gbìn", not "about ise ogbin"
    const wanted = new Set(terms);
    const topic = said.normalize("NFC").split(/[\s,.;:!?¿¡،؟"“”«»()\[\]/\\|*#]+/).map(word => word.replace(/^['’]+|['’]+$/g, "").replace(/^(?:l|d|qu|j|s|m|t|c|n)['’](?=\p{L})/iu, ""))
      .filter(word => word && wanted.has(fold(word))).join(" ");
    return Object.freeze({ wordsLang, courseLang, terms: Object.freeze(terms), topic: topic || terms.join(" "), named });
  }

  return Object.freeze({ courseRequest, wordsLanguage, fold, LANGS });
});
