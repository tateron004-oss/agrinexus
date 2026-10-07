"use strict";

// Short practice lessons for people who cannot read yet or want to learn basic maths: letters, counting 1 to 20, adding and taking away with shillings.
// One small step at a time, one question after each step, in English or Kiswahili, entirely rule-based (no AI, nothing invented).
//
// It is NOT a course: it never enrols anyone, never records a course completion and never issues a certificate, and it says so. Where the person got to is
// remembered on their own account (practice.progress), so "teach me letters" next time carries on from there.
//
// Everything in Kiswahili here is a first draft: a fluent speaker must review every word (the word lists, the example words and the sentences).
const { clean } = require("./language.js");

const SESSION_MS = 45 * 60 * 1000;

// ---- the letters: [letter, English word, its Kiswahili meaning, Kiswahili word, its English meaning, note (Kiswahili)] ----
const LETTERS = [
  ["a", "apple", "tufaha", "asali", "honey"], ["b", "ball", "mpira", "baba", "father"], ["c", "cat", "paka", "chai", "tea", 'Katika Kiswahili, C hutumika pamoja na H: "ch".'],
  ["d", "dog", "mbwa", "dada", "sister"], ["e", "egg", "yai", "embe", "mango"], ["f", "fish", "samaki", "farasi", "horse"], ["g", "goat", "mbuzi", "gari", "car"],
  ["h", "house", "nyumba", "habari", "news"], ["i", "island", "kisiwa", "ijumaa", "Friday"], ["j", "jug", "jagi", "jiko", "stove"], ["k", "key", "ufunguo", "kuku", "chicken"],
  ["l", "lion", "simba", "limau", "lemon"], ["m", "moon", "mwezi", "maji", "water"], ["n", "nose", "pua", "ndizi", "banana"], ["o", "orange", "chungwa", "ofisi", "office"],
  ["p", "pen", "kalamu", "paka", "cat"], ["q", "queen", "malkia", "", "", "Herufi hii hutumika katika maneno machache tu."], ["r", "rain", "mvua", "redio", "radio"],
  ["s", "sun", "jua", "samaki", "fish"], ["t", "tree", "mti", "tunda", "fruit"], ["u", "umbrella", "mwavuli", "uji", "porridge"], ["v", "village", "kijiji", "viazi", "potatoes"],
  ["w", "water", "maji", "watoto", "children"], ["x", "x-ray", "eksirei", "", "", "Herufi hii hutumika katika maneno machache tu."], ["y", "yellow", "njano", "yai", "egg"],
  ["z", "zebra", "pundamilia", "zabibu", "grapes"]
];
// How a speech recogniser may write the NAME of a letter when the person says it ("bee", "see", "why").
const LETTER_NAMES = { a: ["ay", "eh", "hey"], b: ["bee", "be"], c: ["see", "sea", "cee", "si"], d: ["dee", "di"], e: ["ee"], f: ["ef", "eff"], g: ["gee", "ji"], h: ["aitch", "haich", "eich"],
  i: ["eye", "ai"], j: ["jay", "jei"], k: ["kay", "kei"], l: ["el", "ell"], m: ["em"], n: ["en"], o: ["oh", "ow"], p: ["pee", "pi"], q: ["cue", "queue", "kyu"], r: ["are", "ar"], s: ["es", "ess"],
  t: ["tea", "tee", "ti"], u: ["you", "yu"], v: ["vee", "vi"], w: ["double u", "dabliyu"], x: ["ex", "eks"], y: ["why", "wai"], z: ["zed", "zee", "zi"] };

// A single letter is easy to hear inside other words ("I don't know" contains "I"), so the answer must BE the letter (or its spoken name), after the words people put
// around it ("it starts with", "the letter", "herufi"), optionally followed by "for <the word>".
const LETTER_FILLER = new Set(["it", "its", "it's", "that", "this", "is", "the", "letter", "herufi", "ni", "starts", "start", "begins", "begin", "with", "answer", "my", "kwa", "na", "inaanza", "linaanza"]);
function letterMatches(accept, text) {
  const words = normalize(text).split(" ").filter(Boolean);
  while (words.length && LETTER_FILLER.has(words[0])) words.shift();
  const rest = words.join(" ");
  return accept.some(item => rest === item || rest.startsWith(`${item} for `) || rest.startsWith(`${item} kama `) || rest.startsWith(`${item} as in `));
}

function letterStep([letter, en, enSw, sw, swEn, note]) {
  const L = letter.toUpperCase();
  const hasSw = Boolean(sw);
  return {
    teach: {
      en: hasSw
        ? `The letter ${L}. ${L} is for ${en}. In Kiswahili, ${L} is for ${sw}, which means ${swEn}. Say it with me: ${L}, ${en}.`
        : `The letter ${L}. ${L} is for ${en}. Say it with me: ${L}, ${en}. This letter is not used much in Kiswahili.`,
      sw: hasSw
        ? `Herufi ${L}. ${L} kama ${sw}.${note ? ` ${note}` : ""} Kwa Kiingereza, ${L} ni kama "${en}", yaani ${enSw}. Sema pamoja nami: ${L}, ${sw}.`
        : `Herufi ${L}. ${note || ""} Kwa Kiingereza, ${L} ni kama "${en}", yaani ${enSw}. Sema pamoja nami: ${L}, ${en}.`.replace(/\s+/g, " ")
    },
    ask: {
      en: `Which letter does the word "${en}" start with?`,
      sw: `Neno "${hasSw ? sw : en}" linaanza na herufi gani?`
    },
    accept: [letter, ...(LETTER_NAMES[letter] || [])],
    match: text => letterMatches([letter, ...(LETTER_NAMES[letter] || [])], text),
    hint: { en: `Say the first letter of "${en}".`, sw: "Sema herufi ya kwanza ya neno hilo." },
    answer: { en: L, sw: L },
    recap: { en: `${L} is for ${en}.`, sw: `${L} kama ${hasSw ? sw : en}.` }
  };
}

// ---- numbers ----
const NUMBER_WORDS = {
  en: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"],
  sw: ["moja", "mbili", "tatu", "nne", "tano", "sita", "saba", "nane", "tisa", "kumi", "kumi na moja", "kumi na mbili", "kumi na tatu", "kumi na nne", "kumi na tano", "kumi na sita", "kumi na saba", "kumi na nane", "kumi na tisa", "ishirini"]
};
const numberWord = (n, lang) => NUMBER_WORDS[lang][n - 1];
const acceptNumber = n => [String(n), numberWord(n, "en"), numberWord(n, "sw")];
function countingStep(from, to, afterThis) {
  const list = lang => { const parts = []; for (let n = from; n <= to; n += 1) parts.push(`${n}, ${numberWord(n, lang)}`); return parts.join("; "); };
  const next = afterThis + 1;
  return {
    teach: {
      en: `Count with me, from ${from} to ${to}: ${list("en")}. In Kiswahili: ${list("sw")}.`,
      sw: `Hesabu pamoja nami, kuanzia ${from} hadi ${to}: ${list("sw")}. Kwa Kiingereza: ${list("en")}.`
    },
    ask: { en: `What number comes after ${afterThis}?`, sw: `Namba gani inafuata baada ya ${afterThis}?` },
    accept: acceptNumber(next),
    hint: { en: `Count one step forward from ${afterThis}.`, sw: `Hesabu hatua moja mbele kutoka ${afterThis}.` },
    answer: { en: `${next}, ${numberWord(next, "en")}`, sw: `${next}, ${numberWord(next, "sw")}` },
    recap: { en: `After ${afterThis} comes ${next}.`, sw: `Baada ya ${afterThis} inakuja ${next}.` }
  };
}
const TENS_SW = { 20: "ishirini", 30: "thelathini", 40: "arobaini", 50: "hamsini", 60: "sitini", 70: "sabini", 80: "themanini", 90: "tisini", 100: "mia moja", 150: "mia moja na hamsini", 200: "mia mbili", 300: "mia tatu" };
const TENS_EN = { 20: "twenty", 30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety", 100: "one hundred", 150: "one hundred and fifty", 200: "two hundred", 300: "three hundred" };
const acceptAmount = n => [String(n), TENS_EN[n], TENS_SW[n], n >= 100 && n % 100 === 0 ? `${n / 100} hundred` : ""].filter(Boolean);
function moneyStep({ teachEn, teachSw, askEn, askSw, answer, hintEn, hintSw, recapEn, recapSw }) {
  return {
    teach: { en: teachEn, sw: teachSw },
    ask: { en: askEn, sw: askSw },
    accept: acceptAmount(answer),
    hint: { en: hintEn, sw: hintSw },
    answer: { en: `${answer} shillings`, sw: `shilingi ${answer}` },
    recap: { en: recapEn, sw: recapSw }
  };
}

const ADDING = [
  moneyStep({
    teachEn: "Let's add. You have 10 shillings. A friend gives you 5 more shillings. 10 plus 5 is 15. Now you have 15 shillings.",
    teachSw: "Tujumlishe. Una shilingi 10. Rafiki anakupa shilingi 5 zaidi. 10 jumlisha 5 ni 15. Sasa una shilingi 15.",
    askEn: "You have 20 shillings and someone gives you 10 more. How many shillings do you have now?", askSw: "Una shilingi 20 na mtu anakupa shilingi 10 zaidi. Sasa una shilingi ngapi?",
    answer: 30, hintEn: "Put 20 and 10 together.", hintSw: "Weka 20 na 10 pamoja.", recapEn: "20 plus 10 is 30.", recapSw: "20 jumlisha 10 ni 30."
  }),
  moneyStep({
    teachEn: "You sell tomatoes for 30 shillings and onions for 20 shillings. 30 plus 20 is 50 shillings in all.",
    teachSw: "Unauza nyanya kwa shilingi 30 na vitunguu kwa shilingi 20. 30 jumlisha 20 ni shilingi 50 kwa jumla.",
    askEn: "You earn 40 shillings in the morning and 40 shillings in the afternoon. How much is that in all?", askSw: "Unapata shilingi 40 asubuhi na shilingi 40 mchana. Kwa jumla ni shilingi ngapi?",
    answer: 80, hintEn: "Put 40 and 40 together.", hintSw: "Weka 40 na 40 pamoja.", recapEn: "40 plus 40 is 80.", recapSw: "40 jumlisha 40 ni 80."
  }),
  moneyStep({
    teachEn: "Bigger amounts work the same way. 100 shillings plus 50 shillings is 150 shillings.",
    teachSw: "Kiasi kikubwa kinafanya kazi vivyo hivyo. Shilingi 100 jumlisha shilingi 50 ni shilingi 150.",
    askEn: "You have 200 shillings and you earn 100 more. How many shillings do you have now?", askSw: "Una shilingi 200 na unapata shilingi 100 zaidi. Sasa una shilingi ngapi?",
    answer: 300, hintEn: "Two hundred and one hundred more.", hintSw: "Mia mbili na mia moja zaidi.", recapEn: "200 plus 100 is 300.", recapSw: "200 jumlisha 100 ni 300."
  })
];
const SUBTRACTING = [
  moneyStep({
    teachEn: "Now take away. You have 20 shillings and you spend 5. 20 minus 5 is 15. You have 15 shillings left.",
    teachSw: "Sasa tutoe. Una shilingi 20 na unatumia shilingi 5. 20 toa 5 ni 15. Zimebaki shilingi 15.",
    askEn: "You have 50 shillings and you spend 20. How many shillings are left?", askSw: "Una shilingi 50 na unatumia shilingi 20. Zimebaki shilingi ngapi?",
    answer: 30, hintEn: "Take 20 away from 50.", hintSw: "Toa 20 kutoka 50.", recapEn: "50 minus 20 is 30.", recapSw: "50 toa 20 ni 30."
  }),
  moneyStep({
    teachEn: "You have 100 shillings and you buy bread for 40 shillings. 100 minus 40 is 60. You have 60 shillings left.",
    teachSw: "Una shilingi 100 na unanunua mkate kwa shilingi 40. 100 toa 40 ni 60. Zimebaki shilingi 60.",
    askEn: "You have 80 shillings and you pay 30 shillings for a ride. How many shillings are left?", askSw: "Una shilingi 80 na unalipa shilingi 30 za nauli. Zimebaki shilingi ngapi?",
    answer: 50, hintEn: "Take 30 away from 80.", hintSw: "Toa 30 kutoka 80.", recapEn: "80 minus 30 is 50.", recapSw: "80 toa 30 ni 50."
  }),
  moneyStep({
    teachEn: "Change works the same way. You pay 100 shillings for something that costs 70 shillings. Your change is 100 minus 70, which is 30 shillings.",
    teachSw: "Chenji inafanya kazi vivyo hivyo. Unalipa shilingi 100 kwa kitu cha shilingi 70. Chenji yako ni 100 toa 70, yaani shilingi 30.",
    askEn: "You pay 200 shillings for something that costs 150 shillings. What is your change?", askSw: "Unalipa shilingi 200 kwa kitu cha shilingi 150. Chenji yako ni shilingi ngapi?",
    answer: 50, hintEn: "Take 150 away from 200.", hintSw: "Toa 150 kutoka 200.", recapEn: "200 minus 150 is 50.", recapSw: "200 toa 150 ni 50."
  })
];

const COUNTING = [countingStep(1, 5, 3), countingStep(6, 10, 8), countingStep(11, 15, 12), countingStep(16, 20, 19)];

const TRACKS = Object.freeze({
  letters: { steps: LETTERS.map(letterStep), name: { en: "letters", sw: "herufi" } },
  counting: { steps: COUNTING, name: { en: "counting", sw: "kuhesabu" } },
  adding: { steps: ADDING, name: { en: "adding", sw: "kujumlisha" } },
  subtracting: { steps: SUBTRACTING, name: { en: "taking away", sw: "kutoa" } },
  maths: { steps: [...COUNTING, ...ADDING, ...SUBTRACTING], name: { en: "maths", sw: "hesabu" } }
});

const TEXT = {
  en: {
    intro: "This is a short practice lesson inside Kyro. It is not a certified course. I will say one small thing, then ask you one question. Say 'next' to go on, 'again' to hear it again, or 'stop' at any time.",
    welcomeBack: "Welcome back. Last time you finished {done} of {total} steps, so we carry on from there. Say 'start over' to begin again.",
    doneBefore: "You finished this practice before. Let's go through it again.",
    right: "Yes, that's right.", wrongHint: "Not quite. {hint} Try again.", reveal: "The answer is {answer}. That's fine, we learn by trying.",
    tail: "Say 'next' to go on, or 'again' to hear it once more.", reprompt: "Say 'next' to go on, 'again' to hear it again, or 'stop'.",
    stopped: "Okay, we have stopped. I remember where you got to. Say 'teach me {track}' any time to carry on.",
    finished: "You finished the {track} practice. Well done! This was a short practice lesson, not a certificate or a course. {more}",
    moreLetters: "Say 'teach me maths' to practise numbers.", moreMaths: "Say 'teach me letters' to practise reading.",
    cantRead: "That is okay, many people start here. I can talk to you by voice, and I can teach you letters step by step. Say 'teach me letters' to begin, or 'teach me maths' for numbers."
  },
  sw: {
    intro: "Hili ni somo fupi la mazoezi ndani ya Kyro. Si kozi rasmi yenye cheti. Nitasema jambo dogo moja, kisha nikuulize swali moja. Sema 'endelea' kuendelea, 'rudia' kusikia tena, au 'acha' wakati wowote.",
    welcomeBack: "Karibu tena. Mara ya mwisho ulimaliza hatua {done} kati ya {total}, kwa hivyo tunaendelea hapo. Sema 'anza upya' kuanza tena.",
    doneBefore: "Ulishamaliza mazoezi haya awali. Tuyapitie tena.",
    right: "Ndiyo, sawa kabisa.", wrongHint: "Bado hujapata. {hint} Jaribu tena.", reveal: "Jibu ni {answer}. Hakuna shida, tunajifunza kwa kujaribu.",
    tail: "Sema 'endelea' kuendelea, au 'rudia' kusikia tena.", reprompt: "Sema 'endelea' kuendelea, 'rudia' kusikia tena, au 'acha'.",
    stopped: "Sawa, tumesimama. Nakumbuka ulipofika. Sema 'nifundishe {track}' wakati wowote kuendelea.",
    finished: "Umemaliza mazoezi ya {track}. Hongera! Hili lilikuwa somo fupi la mazoezi, si cheti wala kozi. {more}",
    moreLetters: "Sema 'nifundishe hesabu' kufanya mazoezi ya namba.", moreMaths: "Sema 'nifundishe herufi' kufanya mazoezi ya kusoma.",
    cantRead: "Hakuna shida, watu wengi huanzia hapa. Ninaweza kuzungumza nawe kwa sauti, na ninaweza kukufundisha herufi hatua kwa hatua. Sema 'nifundishe herufi' kuanza, au 'nifundishe hesabu' kwa namba."
  }
};
const say = (lang, key, params = {}) => String(TEXT[lang][key]).replace(/\{(\w+)\}/g, (whole, name) => (params[name] === undefined ? whole : String(params[name])));

// ---- understanding what the person said ----
const normalize = text => clean(text).toLowerCase().replace(/[^\p{L}\p{N}\s'-]/gu, " ").replace(/\s+/g, " ").trim();
const WAKE = /^(?:(?:hey|hi|hello|ok(?:ay)?)[, ]+)?(?:(?:kyro|kiro|kairo|cairo|nexus|agrinexus)[, ]+)?(?:(?:please|tafadhali)[, ]+)?/;
const prepare = text => normalize(text).replace(WAKE, "").trim();

const NEXT_STRICT = /^(?:next(?: one| step| please)?|go on|go ahead|continue|keep going|move on|skip|endelea(?: tafadhali)?|twende|inayofuata|ifuatayo|ijayo|pita|ruka|nipe nyingine)$/;
const NEXT_SOFT = /^(?:yes|yeah|yep|ok|okay|sure|start|begin|ready|i'?m ready|let'?s go|let'?s start|sawa|ndiyo|ndio|anza|tuanze|niko tayari|nipo tayari)$/;
const AGAIN = /^(?:again|say (?:that|it) again|repeat(?: that| it)?|one more time|once more|pardon|what|rudia(?: tena)?|sema tena|nirudie|rudia hiyo|samahani)$/;
const STOP = /^(?:stop(?: the lesson)?|quit|enough|finish|i'?m done|done|that'?s enough|exit|cancel|no more|not now|no thanks|acha(?: somo)?|niache|sitisha|basi|maliza|ghairi|tosha|inatosha|simama|hapana)$/;
const RESTART = /\b(?:start over|from the (?:start|beginning)|begin again|anza upya|tangu mwanzo|kutoka mwanzo)\b/;
// Words that start a question or a command: none of them is an answer to "which letter?" or "how many shillings?".
const OTHER_REQUEST = /^(?:what|whats|how|where|when|who|why|which|can you|could you|will you|do you|is there|explain|teach me|tell me|translate|call|open|show|send|play|remind|set|add|delete|cancel my|find|search|nini|wapi|lini|nani|mbona|naomba|eleza|nifundishe|niambie|piga|fungua|onyesha|tuma|cheza|nikumbushe|tafuta)\b|\bremind me\b|\bweather\b/;

const wordCount = text => (text ? text.split(/\s+/).length : 0);

// ---- what starts a lesson ----
// "read" followed by a thing ("read a map", "read my bank statement") is not about learning to read.
const READ_OBJECT = /\bread\s+(?:a|an|the|my|this|that|these|those|maps?|labels?|signs?|charts?)\b/;
const LESSON_VERBS = /\b(?:teach me|teach us|teach|help me (?:to )?(?:learn|read|write|count)|show me how to|i want to learn|i would like to learn|i'?d like to learn|let me learn|can you teach|learn(?:ing)? (?:to|how to|about|the)|learn)\b/;
// "letters" is the alphabet only when it is not correspondence ("cover letters"); "writing" counts only as the skill ("reading and writing"), not "resume writing".
const READ_WORDS = /\b(?:to read|reading|read and write|reading and writing|(?<!cover |application |business |formal |official |love )letters|alphabet|abc|learn(?:ing)? to write|write my name|kusoma|kuandika|herufi|alfabeti)\b/;
const ABOUT_A_TOPIC = /\b(?:teach me about|tell me about|explain|what is|what are|how (?:do|to|can|should) (?:i|you|we))\b/;
const MATH_WORDS = /\b(?:maths?|mathematics|numbers?|counting|count|adding|addition|add up|to add|subtract(?:ing|ion)?|to subtract|take away|minus|plus|arithmetic|sums?|hesabu|kuhesabu|kujumlisha|kutoa|namba|nambari)\b/;
const SW_LESSON = /\b(?:nifundishe|nifundisheni|nataka kujifunza|ninataka kujifunza|naomba kujifunza|nifunze|nisaidie kujifunza)\b/;
const CANT_READ = /\b(?:i (?:can'?t|cannot|can not|don'?t know how to|do not know how to) read|i don'?t know how to read|sijui kusoma|siwezi kusoma)\b/;

function lessonRequest(text) {
  const t = prepare(text);
  if (!t) return null;
  if (CANT_READ.test(t) && !LESSON_VERBS.test(t) && !SW_LESSON.test(t)) return { offer: true };
  if (/^(?:herufi|hesabu|alphabet|letters)$/.test(t)) return { track: /hesabu/.test(t) ? "maths" : "letters", fromStart: false };
  const asked = (LESSON_VERBS.test(t) || SW_LESSON.test(t)) && !ABOUT_A_TOPIC.test(t);
  if (!asked) return null;
  const fromStart = RESTART.test(t);
  if (MATH_WORDS.test(t) && !(READ_WORDS.test(t) && /\b(?:read|letters?|alphabet|kusoma|herufi)\b/.test(t))) {
    const subtract = /\b(?:subtract(?:ing|ion)?|take away|minus|kutoa)\b/.test(t);
    const add = /\b(?:adding|addition|add up|to add|plus|kujumlisha)\b/.test(t);
    const count = /\b(?:counting|count|kuhesabu|namba|nambari|numbers?)\b/.test(t);
    if (subtract && add) return { track: "maths", fromStart };
    if (subtract) return { track: "subtracting", fromStart };
    if (add) return { track: "adding", fromStart };
    if (count && !/\b(?:maths?|mathematics|hesabu|arithmetic)\b/.test(t)) return { track: "counting", fromStart };
    return { track: "maths", fromStart };
  }
  if (READ_WORDS.test(t) && !READ_OBJECT.test(t)) return { track: "letters", fromStart };
  return null;
}

function answerMatches(accept, text) {
  const t = ` ${normalize(text)} `;
  return accept.some(item => t.includes(` ${normalize(item)} `));
}
const matchesStep = (step, text) => (typeof step.match === "function" ? step.match(text) : answerMatches(step.accept, text));

function present(step, lang) { return `${step.teach[lang]} ${step.ask[lang]}`; }

// ---- the state machine ----
// practice: { lesson: null | { track, index, phase: "check" | "ready", misses, lang, at }, progress: { [track]: { next, total, updatedAt } } }
function begin(practice, trackKey, lang, now, { fromStart = false } = {}) {
  const track = TRACKS[trackKey];
  const total = track.steps.length;
  practice.progress = practice.progress || {};
  const saved = practice.progress[trackKey];
  const returning = !fromStart && saved && saved.next > 0 && saved.next < total;
  const finishedBefore = !fromStart && saved && saved.next >= total;
  const index = returning ? saved.next : 0;
  practice.lesson = { track: trackKey, index, phase: "check", misses: 0, lang, at: now };
  practice.interview = null;
  const lead = returning ? ` ${say(lang, "welcomeBack", { done: saved.next, total })}` : finishedBefore ? ` ${say(lang, "doneBefore")}` : "";
  return { intent: "learning.practice_lesson", reply: `${say(lang, "intro")}${lead} ${present(track.steps[index], lang)}` };
}

function finishStep(practice, now) {
  const lesson = practice.lesson;
  const track = TRACKS[lesson.track];
  practice.progress = practice.progress || {};
  practice.progress[lesson.track] = { next: lesson.index + 1, total: track.steps.length, updatedAt: new Date(now).toISOString() };
  lesson.phase = "ready";
  lesson.at = now;
  return lesson.index === track.steps.length - 1;
}

function endLesson(practice, lang, finished) {
  const lesson = practice.lesson;
  practice.lesson = null;
  const name = TRACKS[lesson.track].name[lang];
  if (!finished) return say(lang, "stopped", { track: name });
  const more = lesson.track === "letters" ? say(lang, "moreLetters") : say(lang, "moreMaths");
  return say(lang, "finished", { track: name, more });
}

// Returns { intent, reply } when the lesson takes this turn, or null when the person said something else (so the rest of Kyro answers it).
function lessonTurn(practice, text, lang, now, { hasPending = false } = {}) {
  const lesson = practice.lesson;
  if (!lesson) return null;
  if (now - Number(lesson.at || 0) > SESSION_MS) { practice.lesson = null; return null; }
  const t = prepare(text);
  if (!t) return null;
  const track = TRACKS[lesson.track];
  const step = track.steps[lesson.index];
  lesson.at = now;
  lesson.lang = lang;
  if (RESTART.test(t)) return begin(practice, lesson.track, lang, now, { fromStart: true });
  if (STOP.test(t) && !(hasPending && t === "hapana")) return { intent: "learning.practice_lesson", reply: endLesson(practice, lang, false) };
  if (AGAIN.test(t)) return { intent: "learning.practice_lesson", reply: present(step, lang) };

  const advance = () => {
    lesson.index += 1; lesson.phase = "check"; lesson.misses = 0;
    return { intent: "learning.practice_lesson", reply: present(track.steps[lesson.index], lang) };
  };
  if (lesson.phase === "ready") {
    if (NEXT_STRICT.test(t) || NEXT_SOFT.test(t)) {
      // A bare yes/ndiyo while something else waits for a confirmation belongs to that, not to the lesson.
      if (hasPending && NEXT_SOFT.test(t) && !NEXT_STRICT.test(t)) return null;
      return advance();
    }
    if (OTHER_REQUEST.test(t) || wordCount(t) > 2) return null;
    return { intent: "learning.practice_lesson", reply: say(lang, "reprompt") };
  }
  // phase "check": the question has been asked.
  if (NEXT_STRICT.test(t)) {
    const last = finishStep(practice, now);
    if (last) return { intent: "learning.practice_lesson", reply: endLesson(practice, lang, true) };
    return advance();
  }
  if (OTHER_REQUEST.test(t) || wordCount(t) > 6) return null;
  // While something else is waiting for a yes or a no, that word belongs to it, not to the lesson.
  if (hasPending && (NEXT_SOFT.test(t) || /^(?:no|hapana|cancel)$/.test(t))) return null;
  // "start", "ok", "ndiyo" after the question is asked is not an answer: it means "I am ready", so the step is said again.
  if (NEXT_SOFT.test(t)) return { intent: "learning.practice_lesson", reply: present(step, lang) };
  if (matchesStep(step, text)) {
    const last = finishStep(practice, now);
    if (last) return { intent: "learning.practice_lesson", reply: `${say(lang, "right")} ${step.recap[lang]} ${endLesson(practice, lang, true)}` };
    return { intent: "learning.practice_lesson", reply: `${say(lang, "right")} ${step.recap[lang]} ${say(lang, "tail")}` };
  }
  lesson.misses += 1;
  if (lesson.misses < 2) return { intent: "learning.practice_lesson", reply: say(lang, "wrongHint", { hint: step.hint[lang] }) };
  const last = finishStep(practice, now);
  if (last) return { intent: "learning.practice_lesson", reply: `${say(lang, "reveal", { answer: step.answer[lang] })} ${step.recap[lang]} ${endLesson(practice, lang, true)}` };
  return { intent: "learning.practice_lesson", reply: `${say(lang, "reveal", { answer: step.answer[lang] })} ${step.recap[lang]} ${say(lang, "tail")}` };
}

module.exports = Object.freeze({ TRACKS, LETTERS, lessonRequest, lessonTurn, begin, say, SESSION_MS, answerMatches, TEXT });
