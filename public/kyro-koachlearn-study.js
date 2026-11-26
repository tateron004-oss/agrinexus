// Which words ask Kyro to TEACH a Koach Learn course alongside it ("help me study the farm records course", "teach me lesson 2", "continue my course", "nifundishe kozi ya kilimo")?
// Kyro then tutors the learner from that course's own lessons and quick checks (nexus/knowledge/koachlearn-study.js; the study packs are built from the courses, koachlearn-catalog/build/make-study-packs.js).
// Shared by the server (the planner) and the page (public/app.js takes such a spoken turn itself and sends it the typed way, so it is answered with the course, never from memory).
// It reads the same 10 languages as the course finder (public/kyro-koachlearn-courses.js). The words are machine-drafted, like the courses.
//
//   studyRequest(text) -> null | { kind, ordinal, lesson, terms, slug, wordsLang }
//     kind     "start" (a course named or picked), "resume" (carry on where I stopped), "next" (the next lesson), "lesson" (a lesson by number)
//     ordinal  1-9 when a course from the list just shown is picked ("number 2", "the second one"), else null
//     lesson   the lesson number asked for, else null
//     terms    what the course is about or called (folded words), [] when none
//     slug     a course's own name in the catalogue ("agri-agribusiness-farm-management": the "Study with Kyro" link sends it), else null
//
// Deliberately narrow: a word asking to study or be taught is needed with a course word, a lesson number, or a pick from the list; or one of the plain "continue my course" / "next lesson"
// sentences. "Find me a course on farming" stays the course finder's; "teach me fractions" stays the general tutor's.
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(require("./kyro-koachlearn-courses.js"));
  else root.KyroKoachLearnStudy = factory(root.KyroKoachLearnCourses);
})(typeof self !== "undefined" ? self : this, function (courses) {
  "use strict";
  const fold = courses && courses.fold ? courses.fold : s => String(s || "").toLowerCase();

  // Asking to study or be taught (folded: no accents or tone marks).
  const STUDY = [
    /\b(?:help (?:me|us) (?:to )?(?:study|learn|with|through|go through|understand|do|finish)|teach (?:me|us)|tutor (?:me|us)|coach (?:me|us)|study|studying|let'?s (?:study|learn|do|start)|take (?:me|us) through|walk (?:me|us) through|start (?:the |my |this )?(?:course|lesson))\b/,
    /\b(?:ayudame a (?:estudiar|aprender)|ensename|estudiar|estudiemos|quiero estudiar|explicame)\b/,
    /\b(?:aide[- ]moi a (?:etudier|apprendre)|apprends[- ]moi|enseigne[- ]moi|etudier|etudions|je veux etudier|explique[- ]moi)\b/,
    /\b(?:me ajude a (?:estudar|aprender)|ajude[- ]me a (?:estudar|aprender)|me ensine|ensine[- ]me|estudar|vamos estudar|quero estudar|me explique)\b/,
    /\b(?:nisaidie (?:ku)?(?:soma|somea|jifunza)|nifundishe|nataka kusoma|tusome|tujifunze|nisomeshe)\b/,
    /\b(?:taimaka (?:min|mini|mani|mana) (?:in |na |mu )?(?:karanta|koyi|koya|nazarci)|koya (?:min|mini|mana)|ina son (?:in |na )?(?:karanta|koyi|nazarci)|mu karanta|mu koyi)\b/,
    /\b(?:ran mi lowo (?:lati )?(?:ko|kawe)|ko mi|mo fe ko|mo fe kawe|je ka ko|je ka kawe)\b/,
    /\b(?:nyere m aka (?:imu|igu)|kuziere m|achoro m imu|ka anyi mua|ka anyi muo)\b/,
    /(?:ساعدني (?:في |على )?(?:دراسه|ادرس|اتعلم|تعلم)|علمني|اريد ان ادرس|لندرس|درسني|اشرح لي)/,
    /(?:እንዳጠና|አስተምረኝ|ማጥናት እፈልጋለሁ|እንማር|ላጥና|አብረን እንማር)/
  ];
  // A course or lesson word.
  const COURSE = /\b(?:course|courses|koach ?learn|koachlearn|curso|cours|formation|kozi|kwas|kwasa\w*|koosi|eko|omumu ihe|ihe omumu|nkuzi|lesson|leccion|lecon|licao|aula|somo|darasi)\b|ኮርስ|ትምህርት|دوره|درس|كورس/;
  // "continue my course", "where did I stop", in each language.
  const RESUME = [
    /\b(?:continue|resume|carry on|keep going|pick up|go on)(?: with)? (?:my|the|our) (?:course|lesson|lessons|studies|studying|koach ?learn course)\b|\bwhere (?:did i|was i|did we) (?:stop|leave off|get to)\b|\bback to my course\b/,
    /\b(?:continuar|seguir) (?:con )?(?:mi|el) (?:curso|leccion)\b/, /\b(?:continuer|reprendre) (?:mon|le) cours\b/, /\b(?:continuar|retomar) (?:o )?(?:meu )?(?:curso|aula)\b/,
    /\b(?:endelea|tuendelee|nirudishe) (?:na )?(?:kozi|somo)\b/, /\bci gaba da (?:kwas|darasi)\w*\b/, /\b(?:tesiwaju|je ka tesiwaju) (?:pelu )?(?:eko|koosi)\b/, /\b(?:gaa n'?ihu|ka anyi gaa n'?ihu) (?:na )?(?:omumu ihe|ihe omumu|nkuzi)\b/,
    /(?:ትምህርቱን|ኮርሱን) (?:ቀጥል|እንቀጥል)|(?:استمر|نكمل|اكمل) (?:في )?(?:الدوره|الدرس)/
  ];
  const NEXT = /\b(?:next lesson|siguiente leccion|proxima leccion|lecon suivante|prochaine lecon|proxima (?:licao|aula)|somo (?:linalofuata|lijalo)|darasi na gaba|eko (?:to kan|tokan|ti o kan)|ihe omumu (?:ozo|na-esote))\b|ቀጣዩ ትምህርት|الدرس التالي/;
  const LESSON_NO = /(?:\b(?:lesson|leccion|lecon|licao|aula|somo|darasi|ihe omumu|eko)|ትምህርት|الدرس|درس)\s*(?:no\.?\s*|number\s*|numero\s*|namba\s*|#)?(\d{1,2})\b/;
  const ORDINAL_NO = /(?:\b(?:number|numero|namba|lamba|nomba|course)|ቁጥር|رقم|#)\s*(\d)\b/;
  const ORDINAL_WORDS = { first: 1, second: 2, third: 3, fourth: 4, fifth: 5, primero: 1, segundo: 2, tercero: 3, premier: 1, deuxieme: 2, troisieme: 3, primeiro: 1, terceiro: 3, kwanza: 1, pili: 2, tatu: 3 };
  const ORDINAL_WORD = /\b(first|second|third|fourth|fifth|primero|segundo|tercero|premier|deuxieme|troisieme|primeiro|terceiro)\b(?: (?:one|course|curso|cours))?|\b(?:ya|la) (kwanza|pili|tatu)\b/;
  // ("Study course agri-agribusiness-farm-management ig": what the "Study with Kyro" link sends, with the language of the course page it came from)
  const SLUG = /\bcourse ([a-z0-9]+(?:-[a-z0-9]+){2,})(?: (en|es|fr|ar|sw|ha|am|yo|ig|pt))?\b/;
  // Words that are part of the asking, not of what the course is about.
  const OWN_WORDS = new Set(("help me us to study studying learn with through go understand do finish teach tutor coach let lets let's start take walk the my this our a an please kyro hey "
    + "course courses lesson lessons koach learn koachlearn number one first second third fourth fifth again now today "
    + "ayudame estudiar ensename estudiemos quiero explicame curso leccion numero el la mi "
    + "aide moi apprends enseigne etudier etudions je veux explique cours lecon numero le mon "
    + "ajude ensine estudar vamos quero explique curso licao aula numero o meu "
    + "nisaidie kusoma kujifunza nifundishe nataka tusome tujifunze nisomeshe kozi somo namba ya la "
    + "taimaka min mini mani mana in na mu karanta koyi koya ina son nazarci kwas kwasa darasi lamba "
    + "ran mi lowo lati ko kawe fe je ka eko koosi nomba "
    + "nyere m aka imu igu kuziere achoro anyi mua muo omumu ihe nkuzi "
    + "of on about for in called named from at it some more and y et de del sobre sur du des aide-moi apprends-moi enseigne-moi explique-moi ensine-me ajude-me da do em kuhusu game gbasara nipa").split(/\s+/));
  // (the asking words of Amharic and Arabic carry prefixes and endings, so they are matched inside a word)
  const OWN_INSIDE = /^(?:ኮርስ|ትምህርት|ስለ|በ|አስተምረኝ|እንዳጠና|ማጥናት|እፈልጋለሁ|እንማር|ላጥና|አብረን)|^(?:و|ب|ل|ف)?(?:ال)?(?:دوره|دورات|درس|كورس)$|^(?:علمني|ساعدني|ادرس|اتعلم|تعلم|دراسه|اريد|ان|لندرس|درسني|اشرح|لي|في|على|عن)$/;

  function studyRequest(text) {
    const said = String(text || "").trim();
    if (!said || said.length > 240) return null;
    const folded = fold(said).replace(/\bcoach ?learn\b/g, "koach learn");
    const wordsLang = courses && courses.wordsLanguage ? courses.wordsLanguage(said) : null;
    const lessonHit = LESSON_NO.exec(folded);
    const lesson = lessonHit ? Number(lessonHit[1]) : null;
    if (RESUME.some(pattern => pattern.test(folded))) return Object.freeze({ kind: "resume", ordinal: null, lesson, terms: Object.freeze([]), slug: null, wordsLang });
    if (NEXT.test(folded)) return Object.freeze({ kind: "next", ordinal: null, lesson: null, terms: Object.freeze([]), slug: null, wordsLang });
    // "lesson 4", "go to lesson 4", "take me to lesson 4" on its own (the course is the one being studied)
    if (lessonHit && folded.replace(LESSON_NO, " ").replace(/\b(?:go|take me|move|skip|jump|back|now|to|please|let'?s|ok(?:ay)?|kyro|na|ir a|aller a|vamos para|nenda|je ka lo|gaa)\b/g, " ").replace(/[\s,.!?]+/g, "").length <= 2) {
      return Object.freeze({ kind: "lesson", ordinal: null, lesson, terms: Object.freeze([]), slug: null, wordsLang });
    }
    if (!STUDY.some(pattern => pattern.test(folded))) return null;
    const slugHit = SLUG.exec(folded);
    const ordinalHit = lessonHit ? null : (ORDINAL_NO.exec(folded) || null);
    const wordHit = ORDINAL_WORD.exec(folded);
    const ordinal = ordinalHit ? Number(ordinalHit[1]) : wordHit ? (ORDINAL_WORDS[wordHit[1]] || ORDINAL_WORDS[wordHit[2]] || null) : null;
    // ("of course, teach me more" is not a course: that stays the general tutor's)
    if (!COURSE.test(folded.replace(/\bof course\b/g, " ")) && !ordinal && !slugHit) return null;
    const terms = slugHit ? [] : folded.split(/[\s,.;:!?¿¡،؟"“”«»()\[\]/\\|*#]+/).map(t => t.replace(/^'+|'+$/g, "").replace(/^(?:l|d|qu|j|s|m|t|c|n)'(?=\p{L})/u, "")).filter(t => t.length >= 2 && !OWN_WORDS.has(t) && !/^\d+(?:st|nd|rd|th)?$/.test(t)
      && !OWN_INSIDE.test(t)).slice(0, 6);
    return Object.freeze({ kind: lesson ? "lesson" : "start", ordinal, lesson, terms: Object.freeze(terms), slug: slugHit ? slugHit[1] : null, slugLang: slugHit && slugHit[2] ? slugHit[2] : null, wordsLang });
  }

  return Object.freeze({ studyRequest });
});
