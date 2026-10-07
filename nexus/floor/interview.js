"use strict";

// Practice interview: one question at a time from a small fixed bank, in English or Kiswahili. Kyro listens to the answer, gives ONE short, encouraging, rule-based
// tip (about how long the answer was, whether it gave an example, and a pointer for that kind of question), then asks the next question.
// It never scores or grades anyone and never claims to know how a real employer would judge the answer. The practice record keeps only how far along they are, never what was said.
// It is practice only: no employer is involved, nothing is sent and nothing is scheduled.
//
// First draft of the Kiswahili: a fluent speaker must review every question and tip.
const { clean } = require("./language.js");

const SESSION_MS = 15 * 60 * 1000;

const QUESTIONS = [
  {
    en: "Tell me about yourself.", sw: "Niambie kuhusu wewe mwenyewe.",
    tipEn: "A good answer has three parts: who you are, what you can do, and why you want this kind of work.",
    tipSw: "Jibu zuri lina sehemu tatu: wewe ni nani, unaweza kufanya nini, na kwa nini unataka kazi ya aina hii."
  },
  {
    en: "Why do you want this job?", sw: "Kwa nini unataka kazi hii?",
    tipEn: "Say what attracts you to the work and what you can give the employer, not only that you need the money.",
    tipSw: "Sema ni nini kinakuvutia kwenye kazi hii na unaweza kumpa mwajiri nini, si tu kwamba unahitaji pesa."
  },
  {
    en: "Tell me about a time you solved a problem.", sw: "Niambie kuhusu wakati ulipotatua tatizo.",
    tipEn: "Try a short story: what the problem was, what you did, and how it ended.",
    tipSw: "Jaribu hadithi fupi: tatizo lilikuwa nini, ulifanya nini, na mwishowe ikawaje."
  },
  {
    en: "What are your strengths?", sw: "Nguvu zako ni zipi?",
    tipEn: "Pick one or two strengths that fit the job and give a small example of each.",
    tipSw: "Chagua nguvu moja au mbili zinazofaa kazi hiyo, na utoe mfano mdogo wa kila moja."
  },
  {
    en: "How do you handle a difficult customer or boss?", sw: "Unafanyaje unapokutana na mteja au bosi mgumu?",
    tipEn: "Stay calm, listen first, and say how you try to solve the problem politely.",
    tipSw: "Tulia, sikiliza kwanza, na sema unavyojaribu kutatua tatizo kwa heshima."
  },
  {
    en: "Do you have any questions for us?", sw: "Je, una swali lolote kwetu?",
    tipEn: "It is good to ask one question, for example about the work you would do or the working hours.",
    tipSw: "Ni vizuri kuuliza swali moja, kwa mfano kuhusu kazi utakayofanya au saa za kazi."
  }
];

const TEXT = {
  en: {
    intro: "Let's practise an interview. This is practice only, no employer is involved and nothing is sent. I will ask one question at a time. Answer in your own words, in one or two sentences. Say 'repeat', 'skip' or 'stop' at any time.",
    question: "Question {n} of {total}: {q}", thanks: "Thank you for answering.", skipped: "Okay, next question.",
    tooShort: "Try to say a little more: one or two sentences, with one example.",
    tooLong: "That was a long answer. In a real interview, try to say the main point first and keep it short.",
    gaveExample: "Good: you gave a reason or an example. That makes an answer stronger.",
    last: "That was the last question. Well done for practising. Come back any time and say 'practice interview'.",
    stopped: "Okay, we have stopped. Come back any time and say 'practice interview'.",
    reprompt: "Please answer the question in your own words, or say 'repeat', 'skip' or 'stop'.",
    askHow: "Here is a tip for \"{q}\": {tip}",
    wear: "Wear clean, neat clothes that you are comfortable in and that suit the work. Arrive a little early, and bring your ID and your CV if you have one.",
    schedule: "I can't book an interview with an employer from here, and I have no interview saved for you. If an employer gives you a date, you can ask me to remind you about it. To get ready, say 'practice interview'."
  },
  sw: {
    intro: "Tufanye mazoezi ya mahojiano. Haya ni mazoezi tu, hakuna mwajiri anayehusika na hakuna kinachotumwa. Nitakuuliza swali moja kwa wakati. Jibu kwa maneno yako mwenyewe, kwa sentensi moja au mbili. Sema 'rudia', 'ruka' au 'acha' wakati wowote.",
    question: "Swali {n} kati ya {total}: {q}", thanks: "Asante kwa kujibu.", skipped: "Sawa, swali linalofuata.",
    tooShort: "Jaribu kusema zaidi kidogo: sentensi moja au mbili, pamoja na mfano mmoja.",
    tooLong: "Jibu hilo lilikuwa refu. Kwenye mahojiano halisi, jaribu kusema jambo kuu kwanza na ulifupishe.",
    gaveExample: "Vizuri: ulitoa sababu au mfano. Hilo linafanya jibu liwe na nguvu zaidi.",
    last: "Hilo lilikuwa swali la mwisho. Hongera kwa kufanya mazoezi. Rudi wakati wowote na useme 'mazoezi ya mahojiano'.",
    stopped: "Sawa, tumesimama. Rudi wakati wowote na useme 'mazoezi ya mahojiano'.",
    reprompt: "Tafadhali jibu swali kwa maneno yako mwenyewe, au sema 'rudia', 'ruka' au 'acha'.",
    askHow: "Huu ni ushauri kwa swali \"{q}\": {tip}",
    wear: "Vaa nguo safi na nadhifu unazojisikia vizuri nazo na zinazofaa kazi hiyo. Fika mapema kidogo, na ulete kitambulisho chako na CV yako ikiwa unayo.",
    schedule: "Siwezi kupanga mahojiano na mwajiri kutoka hapa, na sina mahojiano yoyote yaliyohifadhiwa kwa ajili yako. Mwajiri akikupa tarehe, unaweza kuniomba nikukumbushe. Ili kujiandaa, sema 'mazoezi ya mahojiano'."
  }
};
const say = (lang, key, params = {}) => String(TEXT[lang][key]).replace(/\{(\w+)\}/g, (whole, name) => (params[name] === undefined ? whole : String(params[name])));

const normalize = text => clean(text).toLowerCase().replace(/[^\p{L}\p{N}\s'-]/gu, " ").replace(/\s+/g, " ").trim();
const WAKE = /^(?:(?:hey|hi|hello|ok(?:ay)?)[, ]+)?(?:(?:kyro|kiro|kairo|cairo|nexus|agrinexus)[, ]+)?(?:(?:please|tafadhali)[, ]+)?/;
const prepare = text => normalize(text).replace(WAKE, "").trim();
const wordCount = text => (text ? text.split(/\s+/).length : 0);

const REPEAT = /^(?:repeat(?: that| the question| it)?|say (?:that|it) again|again|pardon|what|what was the question|rudia(?: tena| swali)?|sema tena|nirudie|samahani)$/;
const SKIP = /^(?:skip|next|next question|pass|i don'?t know|ruka|pita|swali linalofuata|sijui)$/;
const STOP = /^(?:stop|quit|exit|enough|done|finish(?:ed)?|i'?m done|that'?s enough|cancel|end|no more|acha|niache|maliza|ghairi|tosha|inatosha|basi|simama)$/;
// Not an answer to an interview question: a command, or a request to be told or taught something ("explain crop rotation to me").
const OTHER_REQUEST = /^(?:what(?:'s| is| are)? the (?:weather|time|date|price)|what time is it|whats the|call|open|show|send|play|remind|set a|add|delete|cancel my|find|search|explain|teach me|translate|read me|give me|piga|fungua|onyesha|tuma|cheza|nikumbushe|tafuta|eleza|nifundishe)\b|\bremind me\b|\bweather\b/;

// ---- what starts one ----
// A request to PRACTISE ("practice interview", "ask me interview questions", "prepare me for an interview", "help me prepare for an interview"), not a request to be told about interviews
   // ("explain how to prepare for a job interview", "what are common interview questions"), which the learning catalog answers.
const PRACTICE_EN = /\b(?:practi[cs]e|mock|rehearse|rehearsal)\b.*\binterviews?\b|\binterviews?\b.*\b(?:practi[cs]e|mock)\b|\bask me\b.*\binterview|\b(?:prepare me|get me ready|help me (?:to )?(?:prepare|get ready)|help me with)\b.*\binterview/;
const EXPLAIN_LEAD = /^(?:explain|what|how|why|when|where|which|who|tell me about|teach me about|describe|list)\b/;
const PRACTICE_SW = /\bmahojiano\b.*\b(?:kujiandaa|mazoezi|zoezi|maswali|majaribio|jaribio)\b|\b(?:kujiandaa|mazoezi|maswali|nifanyishe|nisaidie)\b.*\bmahojiano\b|\bmazoezi ya mahojiano\b/;
const SCHEDULE_EN = /\b(?:schedule|book|arrange|set up|fix|organi[sz]e|plan)\b.*\binterviews?\b|\bwhen is my interview\b|\bmy (?:next )?interview\b.*\b(?:when|time|date)\b/;
const SCHEDULE_SW = /\b(?:nipangie|panga|nipatie|weka|nitafutie|ratibu)\b.*\bmahojiano\b|\bmahojiano yangu\b.*\b(?:lini|saa|tarehe)\b/;
const WEAR = /\b(?:what (?:should|do) i wear|what to wear|how (?:should|do) i dress|dress code)\b.*\binterview|\binterview\b.*\b(?:what to wear|dress)\b|\bnivae nini\b.*\bmahojiano|\bmahojiano\b.*\b(?:nivae|nivaeje|mavazi)\b/;
const HOW_TO_ANSWER = /^(?:how (?:do|should|can) i (?:answer|respond to)|help me answer|what (?:do|should) i (?:say|answer) (?:to|when|if)|tips? (?:for|on)|nijibu(?:je)?|nitajibuje)\b/;

function questionIndexFrom(t) {
  const lookups = [
    [0, /tell me about yourself|about myself|niambie kuhusu wewe|kuhusu mimi mwenyewe|kuhusu wewe mwenyewe/], [1, /why do you want (?:this|the) job|why this job|kwa nini unataka kazi/], [2, /solved a problem|solve a problem|tatua tatizo|ulipotatua/],
    [3, /your strengths|my strengths|what are your strengths|nguvu zako/], [4, /difficult (?:customer|boss)|mteja au bosi mgumu|mteja mgumu|bosi mgumu/], [5, /questions for us|any questions|swali lolote kwetu/]
  ];
  const hit = lookups.find(([, pattern]) => pattern.test(t));
  return hit ? hit[0] : -1;
}

function interviewRequest(text) {
  const t = prepare(text);
  if (!t) return null;
  if (SCHEDULE_EN.test(t) || SCHEDULE_SW.test(t)) return { kind: "schedule" };
  if (WEAR.test(t)) return { kind: "wear" };
  if (HOW_TO_ANSWER.test(t)) { const index = questionIndexFrom(t); if (index >= 0) return { kind: "howto", index }; }
  if (PRACTICE_EN.test(t) && !(EXPLAIN_LEAD.test(t) && !/\b(?:practi[cs]e|mock|ask me)\b/.test(t))) return { kind: "practice" };
  if (PRACTICE_SW.test(t)) return { kind: "practice" };
  return null;
}

const questionLine = (lang, index) => say(lang, "question", { n: index + 1, total: QUESTIONS.length, q: QUESTIONS[index][lang] });

// practice.interview: null | { index, lang, at }
function begin(practice, lang, now) {
  practice.interview = { index: 0, lang, at: now };
  practice.lesson = null;
  return { intent: "workforce.practice_interview", reply: `${say(lang, "intro")} ${questionLine(lang, 0)}` };
}

// One short tip. Only rules about the answer itself: how long it is, whether it has an example or a reason, and a pointer for this kind of question.
const EXAMPLE_MARKER = /\b(?:for example|for instance|once|last year|when i|because|years?|months?|worked|helped|taught|managed|sold|grew|kwa mfano|kwa sababu|nilipo\w*|mwaka|miaka|miezi|nilifanya|nilisaidia|nilifundisha|nililima|niliuza)\b/;
function tipFor(index, lang, answer) {
  const t = normalize(answer);
  const words = wordCount(t);
  if (words < 5) return say(lang, "tooShort");
  if (words > 80) return say(lang, "tooLong");
  if (EXAMPLE_MARKER.test(t)) return say(lang, "gaveExample");
  return QUESTIONS[index][lang === "sw" ? "tipSw" : "tipEn"];
}

function interviewTurn(practice, text, lang, now) {
  const session = practice.interview;
  if (!session) return null;
  if (now - Number(session.at || 0) > SESSION_MS) { practice.interview = null; return null; }
  const t = prepare(text);
  if (!t) return null;
  session.at = now;
  session.lang = lang;
  if (STOP.test(t)) { practice.interview = null; return { intent: "workforce.practice_interview", reply: say(lang, "stopped") }; }
  if (REPEAT.test(t)) return { intent: "workforce.practice_interview", reply: questionLine(lang, session.index) };
  const finish = prefix => {
    if (session.index >= QUESTIONS.length - 1) { practice.interview = null; return { intent: "workforce.practice_interview", reply: `${prefix} ${say(lang, "last")}` }; }
    session.index += 1;
    return { intent: "workforce.practice_interview", reply: `${prefix} ${questionLine(lang, session.index)}` };
  };
  if (SKIP.test(t)) return finish(say(lang, "skipped"));
  // Another request altogether ("remind me...", "call...") is not an answer: leave the practice open and let Kyro answer it.
  if (OTHER_REQUEST.test(t)) return null;
  // A question put to Kyro in the middle of the practice is not an answer (only the last question, "do you have any questions for us?", is answered with one).
  if (session.index < QUESTIONS.length - 1 && /\?\s*$/.test(clean(text))) return null;
  return finish(`${say(lang, "thanks")} ${tipFor(session.index, lang, text)}`);
}

module.exports = Object.freeze({ QUESTIONS, interviewRequest, interviewTurn, begin, say, questionIndexFrom, SESSION_MS, TEXT });
