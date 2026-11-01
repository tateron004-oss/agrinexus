"use strict";

// Tutor mode: "Teach me fractions", "Help me with my science homework", "Quiz me on world capitals", "Be my tutor", in English or Kiswahili, for anyone: a child, a student, an adult learning a skill.
//
// Kyro teaches one small step at a time, asks one short question after each step, tells the person whether the answer is right, hints before it explains, and carries on from where they got to.
// The teaching is written by the AI model (Kyro never invents a source), inside rules this file gives it every turn (tutorGoal). What this file decides, with no model: whether a sentence asks for a tutor, whether
// a sentence in a session is the end of it or a request for something else, the session itself (kept per person, forgotten after 45 quiet minutes), and the words that open and close a session.
//
// What it leaves alone, on purpose:
//   * "teach me letters / to read / counting / adding": the practice lessons (floor/lessons.js), which are rule-based and need no AI;
//   * "teach me how to apply for / get an ID / open a bank account ...": the checked guides and walkthroughs, which have official sources;
//   * "teach me how to use Kyro": the Using Kyro walkthroughs.
//
// tutorRequest(text) -> { kind: "learn" | "homework" | "quiz" | "tutor", subject, lang } | null
// isStop(text), isOtherCommand(text)
// createTutorSessions({ now, ttlMs }) -> { get, start, record, end, size }
// tutorGoal({ session, said, first }) -> the instruction sent with the person's words; introLine(lang), endLine(session)
const lessons = require("../floor/lessons.js");

const SESSION_MS = 45 * 60 * 1000;
const MAX_MESSAGES = 16; // eight exchanges are kept and sent back to the model each turn
const MAX_SESSIONS = 5000;

const clean = value => String(value ?? "").replace(/[’]/g, "'").replace(/\s+/g, " ").trim();
const LEAD = "^\\s*(?:please\\s+)?(?:(?:hey\\s+)?(?:kyro|nexus)[,.]?\\s+)?(?:(?:can|could|would|will)\\s+you\\s+)?";
const WANT = "(?:i\\s+)?(?:want|need|would\\s+like|'d\\s+like)\\s+(?:you\\s+)?to";
const LEARN_VERBS = "(?:learn|study|understand|practi[sc]e|revise)";

const START = new RegExp(`${LEAD}(?:(?:teach|tutor|coach)\\s+(?:me|us)|help\\s+(?:me|us)\\s+(?:to\\s+)?(?:${LEARN_VERBS}|prepare\\s+for|get\\s+better\\s+at)|${WANT}\\s+${LEARN_VERBS}|${WANT}\\s+(?:teach|tutor|coach)\\s+(?:me|us)|let'?s\\s+(?:learn|study))\\b\\s*(.*)$`, "i");
const HOMEWORK = new RegExp(`${LEAD}help\\s+(?:me|us)\\s+(?:with|do|finish|complete|understand)\\s+(?:my\\s+|our\\s+|the\\s+|this\\s+|some\\s+)?((?:[\\w'-]+\\s+){0,3}?)(?:homework|assignment|school\\s?work|revision|studies|essay|worksheet)\\b(.*)$`, "i");
const QUIZ = new RegExp(`${LEAD}(?:quiz|test)\\s+(?:me|us)\\b(?:\\s+(?:on|about|in)\\s+(.*?))?\\s*[.?!]*$`, "i");
const TUTOR_NOUN = new RegExp(`${LEAD}(?:(?:please\\s+)?be\\s+my\\s+(?:tutor|teacher)|become\\s+my\\s+(?:tutor|teacher)|i\\s+(?:need|want)\\s+a\\s+(?:tutor|teacher)|(?:start|begin|open)\\s+(?:a\\s+)?tutor(?:ing)?(?:\\s+(?:session|mode))?|tutor(?:ing)?\\s+mode|tutoring)\\s*[.?!]*$`, "i");
// Kiswahili: "nifundishe sehemu", "nataka kujifunza Kiingereza", "nisaidie na kazi ya nyumbani", "nipime kuhusu jiografia", "kuwa mwalimu wangu"
// (also as speech recognition writes them: "Mi fondishe sayansi", "Ni fundishe sehemu", "Nataka kujifonza sehemu")
const START_SW = /^\s*(?:tafadhali\s+)?(?:(?:ni|mi)\s*f[uo]nd[iy]sh[ei](?:ni)?|nif[uo]nze|nisaidie\s+kuji?f[uo]nz[ae]|(?:ni)?nataka\s+kuji?f[uo]nz[ae]|naomba\s+kuji?f[uo]nz[ae])\b\s*(.*)$/i;
// what the practice lessons teach, when a garbled "nifundishe" kept them from being recognised as theirs
const PRACTICE_SUBJECT = /\b(?:herufi|alfabeti|hesabu|kuhesabu|kusoma|kuandika|namba|nambari)\b/i;
const HOMEWORK_SW = /^\s*(?:tafadhali\s+)?nisaidie\s+(?:na|kwa)\s+(?:kazi\s+ya\s+nyumbani|zoezi|masomo)\b\s*(.*)$/i;
const QUIZ_SW = /^\s*(?:tafadhali\s+)?(?:nipime|nijaribu|niulize\s+maswali)\b\s*(?:kuhusu|katika|juu\s+ya)?\s*(.*)$/i;
const TUTOR_NOUN_SW = /^\s*(?:tafadhali\s+)?(?:(?:kuwa|uwe)\s+mwalimu\s+wangu|nahitaji\s+mwalimu|nataka\s+mwalimu)\s*[.?!]*$/i;

// What a person learns from the checked guides and walkthroughs (official processes), or about Kyro itself, is not tutoring.
const OFFICIAL_PROCESS = /\b(?:apply(?:ing)?\s+for|file\s+(?:my|a|an|the)|register(?:ing)?\s+(?:to|for|a|my)|renew(?:ing)?|open(?:ing)?\s+(?:a|an)\s+(?:bank\s+)?account|get(?:ting)?\s+(?:a|an|my)\s+(?:id|license|licence|passport|visa|card|permit|benefits?)|start(?:ing)?\s+(?:a|my)\s+business|find(?:ing)?\s+(?:a\s+)?job|vote|voting|report(?:ing)?\s+(?:a|my)|claim(?:ing)?\s+(?:my|a)|sign(?:ing)?\s+up\s+for|enrol(?:l|ling)?)\b/i;
const ABOUT_KYRO = /\b(?:kyro|nexus|agrinexus|this\s+app|the\s+app|your\s+app)\b/i;

function subjectFrom(raw) {
  return clean(raw).replace(/^(?:about|in|on|for|to|ya|wa|za|kuhusu|the\s+subject\s+of)\s+/i, "").replace(/\s+(?:please|for\s+me|with\s+me)\s*$/i, "").replace(/[.?!]+$/g, "").trim().slice(0, 80);
}

function tutorRequest(text) {
  const said = clean(text);
  if (!said || said.length > 240) return null;
  // the practice lessons (letters, reading, counting, adding, taking away) keep their own rule-based lessons
  if (lessons.lessonRequest(said)) return null;
  let match;
  if ((match = TUTOR_NOUN.exec(said))) return { kind: "tutor", subject: "", lang: "en" };
  if ((match = TUTOR_NOUN_SW.exec(said))) return { kind: "tutor", subject: "", lang: "sw" };
  if ((match = HOMEWORK.exec(said))) return { kind: "homework", subject: subjectFrom(match[1]), lang: "en" };
  if ((match = HOMEWORK_SW.exec(said))) return { kind: "homework", subject: subjectFrom(match[1]), lang: "sw" };
  if ((match = QUIZ.exec(said))) return { kind: "quiz", subject: subjectFrom(match[1]), lang: "en" };
  if ((match = QUIZ_SW.exec(said))) return { kind: "quiz", subject: subjectFrom(match[1]), lang: "sw" };
  for (const [pattern, lang] of [[START, "en"], [START_SW, "sw"]]) {
    if ((match = pattern.exec(said))) {
      const subject = subjectFrom(match[1]);
      if (OFFICIAL_PROCESS.test(subject) || ABOUT_KYRO.test(subject) || (lang === "sw" && PRACTICE_SUBJECT.test(subject))) return null;
      return { kind: "learn", subject, lang };
    }
  }
  return null;
}

// The end of a session, said plainly ("stop", "that's enough", "I'm done", "end the lesson", "acha somo", "tosha").
const STOP = /^(?:(?:ok(?:ay)?|thanks?|thank you)[,. ]+)?(?:stop(?: (?:the )?(?:tutor(?:ing)?|lesson|session|quiz|learning))?|end (?:the )?(?:tutor(?:ing)?|lesson|session|quiz)|exit(?: (?:tutor(?:ing)?(?: mode)?|the lesson))?|quit|that'?s (?:enough|all)(?: for (?:now|today))?|i'?m (?:done|finished)|(?:we are|we'?re) (?:done|finished)|no more|enough|finish|not now|bye|goodbye|that will be all|acha(?: somo)?|maliza(?: somo)?|tosha|inatosha|basi|ghairi|sitisha)(?:[,. ]+(?:thanks?|thank you|please|tafadhali|asante))?[.!]*$/i;
// Speech recognition garbles the Kiswahili stop words said to it ("Acha somo" came back as "Acha, Solmo."), so a SHORT sentence that begins with one of them ends the session too, unless it goes on "ni..." (a first-person word such as "Acha niseme").
const STOP_SW_SHORT = /^(?:acha|maliza|tosha|sitisha|ghairi)(?![\p{L}])[\s,.!]*(?!ni\p{L})(?:[\p{L}']+[\s,.!]*){0,2}$/iu;
const isStop = text => STOP.test(clean(text)) || STOP_SW_SHORT.test(clean(text));

// A sentence in a session that is a request of its own (not an answer, a question about the lesson or a reply), so the session leaves it to the usual routes and carries on afterwards.
// ("show me an example" and "show me how" are the lesson's own turns; "show me a picture" or "a video" is a request of its own, which the page answers with pictures or videos of the lesson's subject)
const OTHER = /^(?:open|show(?: me)? (?:my\b|all\b|some\b|(?:(?:a|an|the)\s+)?(?:pictures?|videos?|images?|photos?|maps?|weather|documents?|lists?|notes?|reminders?|calendar)\b)|play|pause|resume|call|text|send|remind me|set (?:a|an|my)|add (?:a|an|my)|delete|cancel my|find (?:a|an|the|me)|search(?: for)?|look up|navigate|directions? to|take me to|go to|close|(?:create|make|draft|prepare|generate|build)\s+(?:me\s+)?(?:an?|the|my|some)|what(?:'s| is| are) (?:the )?(?:weather|time|date)|weather|my (?:lists|notes|reminders|documents)|fungua|onyesha|cheza|piga|tuma|nikumbushe|tafuta|hali ya hewa)\b/i;
// (asking for a practice lesson in the middle of a session is also a request of its own: "teach me letters" is not an answer)
const isOtherCommand = text => OTHER.test(clean(text)) || Boolean(lessons.lessonRequest(clean(text)));

// ---- the session: per person, forgotten after 45 quiet minutes, never shared between people ----
function createTutorSessions({ now = Date.now, ttlMs = SESSION_MS } = {}) {
  const sessions = new Map();
  const keyOf = (tenantId, userId) => (tenantId && userId ? `${tenantId}:${userId}` : "");
  const live = key => {
    const session = key ? sessions.get(key) : null;
    if (!session) return null;
    if (now() - session.lastAt > ttlMs) { sessions.delete(key); return null; }
    return session;
  };
  return Object.freeze({
    get: (tenantId, userId) => live(keyOf(tenantId, userId)),
    start(tenantId, userId, { kind = "learn", subject = "", lang = "en" } = {}) {
      const key = keyOf(tenantId, userId);
      if (!key) return null;
      if (sessions.size >= MAX_SESSIONS && !sessions.has(key)) sessions.delete(sessions.keys().next().value);
      const session = { key, kind, subject: clean(subject).slice(0, 80), lang: lang === "sw" ? "sw" : "en", startedAt: now(), lastAt: now(), turns: [], count: 0 };
      sessions.set(key, session);
      return session;
    },
    record(session, learnerSaid, tutorSaid) {
      if (!session || !sessions.has(session.key)) return;
      session.turns.push({ role: "user", content: clean(learnerSaid).slice(0, 600) }, { role: "assistant", content: clean(tutorSaid).slice(0, 900) });
      if (session.turns.length > MAX_MESSAGES) session.turns.splice(0, session.turns.length - MAX_MESSAGES);
      session.count += 1; session.lastAt = now();
    },
    touch(session) { if (session && sessions.has(session.key)) session.lastAt = now(); },
    end: (tenantId, userId) => sessions.delete(keyOf(tenantId, userId)),
    size: () => sessions.size
  });
}

// ---- the words ----
const INTRO = {
  en: "I am an AI tutor, so I can make mistakes. Check anything important in your book or with a teacher. Say \"stop\" any time to finish.",
  sw: "Mimi ni mwalimu wa AI, kwa hiyo naweza kukosea. Hakikisha mambo muhimu kwenye kitabu chako au kwa mwalimu. Sema \"acha\" wakati wowote kumaliza."
};
const END = {
  en: { withSubject: subject => `Okay, we will stop here. Say "tutor me in ${subject}" any time to carry on.`, plain: "Okay, we will stop here. Say \"be my tutor\" any time to carry on." },
  sw: { withSubject: subject => `Sawa, tuishie hapa. Sema "nifundishe ${subject}" wakati wowote kuendelea.`, plain: "Sawa, tuishie hapa. Sema \"kuwa mwalimu wangu\" wakati wowote kuendelea." }
};
const FAILED = {
  en: "I could not reach my teaching help just now. Please say that again.",
  sw: "Sikuweza kufikia msaada wangu wa kufundisha sasa hivi. Tafadhali sema tena."
};
const introLine = lang => INTRO[lang === "sw" ? "sw" : "en"];
const endLine = session => { const words = END[session?.lang === "sw" ? "sw" : "en"]; return session?.subject ? words.withSubject(session.subject) : words.plain; };
const failedLine = lang => FAILED[lang === "sw" ? "sw" : "en"];

// What the model is told every turn, ahead of what the learner just said. The history of the session goes with it, so each turn knows where the lesson is.
const RULES = [
  "Teach in small steps. Explain one idea in a few short sentences, in simple words, with an everyday example, then ask exactly ONE short question to check they understood.",
  "When they answer, say clearly whether it is right. If it is not, do not give the answer straight away: give a hint first, and explain simply only if they are still stuck. Praise real effort honestly, never falsely.",
  "If you do not yet know their level, your first message is one short question about what they already know, or their age or grade, before you teach.",
  "If they ask you a direct question, answer it, then go back to the next step.",
  "For homework, help them do it themselves: show the method on a similar example and check their own attempt. If they say they tried and are stuck, show the worked answer and explain it.",
  "For a quiz, ask one question at a time, keep count, and give a short score after five questions.",
  "Reply in the language the learner uses. Use plain text only: no markdown symbols, no bold, no headings.",
  "Never invent facts, quotes, sources or page numbers. If you are not sure, say so plainly and suggest checking a book or asking a teacher. Give no medical, legal or financial advice beyond general education.",
  "Never ask for their full name, address, school, phone number or any private detail.",
  "Keep each reply under about 90 words."
].join(" ");

function tutorGoal({ session, said, first = false }) {
  const what = { homework: "helping with homework", quiz: "giving a quiz", tutor: "tutoring", learn: "teaching" }[session.kind] || "teaching";
  const subject = session.subject ? ` The subject is: ${session.subject}.` : " They have not said which subject yet, so ask which subject they want and what they already know.";
  const opening = first && !["en", "sw"].includes(session.lang)
    ? " Begin your first message with one short sentence, in their language, saying that you are an AI tutor who can make mistakes, so they should check important things in a book or with a teacher."
    : "";
  return `You are Kyro, ${what} a learner in a tutoring session.${subject} ${RULES}${opening}\n\nThe learner just said: ${clean(said).slice(0, 600)}`;
}

module.exports = Object.freeze({ SESSION_MS, tutorRequest, isStop, isOtherCommand, createTutorSessions, tutorGoal, introLine, endLine, failedLine, RULES });
