"use strict";

// The work-and-learning floor: the plain, honest answers for people looking for work, learning to read and count, or getting ready for an interview.
//
//   * "teach me to read / letters / maths"  -> a short practice lesson, one small step at a time (lessons.js)
//   * "practice interview"                   -> one practice question at a time, one tip each (interview.js)
//   * "find jobs near me", "training near me" -> what Kyro really knows, and the real next steps (work.js)
//   * a child under working age who works or wants to -> a protective, non-judgemental answer (work.js)
//   * a CV asked for where it cannot be taken -> where to say it (work.js)
//
// Nothing here changes a job application, enrols anyone in a course, issues a certificate, books or sends anything. The only thing remembered is how far a person got
// in a practice lesson, on their own account (user.floorPractice). Replies are in the language the person spoke (English or Kiswahili).
const language = require("./language.js");
const lessons = require("./lessons.js");
const interview = require("./interview.js");
const work = require("./work.js");

const emptyPractice = () => ({ lesson: null, interview: null, progress: {} });

// text: what the person said. requestedLanguage: the language the app asked for. practice: the person's own stored practice object (created here when missing).
// roles: the roles loaded on the platform (for the honest job answer). hasPending: something is waiting for a yes or a no. now: ms.
// Returns { handled: false } or { handled: true, intent, reply, language }.
function turn({ text, requestedLanguage = "en", practice, roles = [], hasPending = false, now = Date.now(), jobs = true }) {
  const said = language.clean(text);
  if (!said || !practice || typeof practice !== "object") return { handled: false };
  if (!practice.progress || typeof practice.progress !== "object") practice.progress = {};
  const sticky = (practice.lesson && practice.lesson.lang) || (practice.interview && practice.interview.lang) || null;
  const lang = language.pickLanguage(said, requestedLanguage, sticky);
  const done = result => (result ? { handled: true, intent: result.intent, reply: result.reply, language: lang } : { handled: false });

  const childWork = work.childWorkRequest(said);
  const lesson = lessons.lessonRequest(said);
  const talk = interview.interviewRequest(said);

  // 1. A practice that is already under way takes the person's next words (a "next", an answer), unless they are clearly asking for something else:
  // a new lesson, an interview practice, a child at work, or (in a lesson, whose answers are only letters and numbers) a jobs or CV request.
  if (practice.lesson) {
    const askingSomethingElse = Boolean(lesson || talk || childWork || work.workTurn({ text: said, lang, roles, jobs }));
    const result = askingSomethingElse ? null : lessons.lessonTurn(practice, said, lang, now, { hasPending });
    if (result) return done(result);
  }
  if (practice.interview) {
    const askingSomethingElse = Boolean((lesson && lesson.track) || (talk && talk.kind !== "practice") || childWork || work.isCvRequest(said));
    const result = askingSomethingElse ? null : interview.interviewTurn(practice, said, lang, now);
    if (result) return done(result);
  }

  // 2. A child who works or wants to work comes first: it is never answered as a job search.
  if (childWork) return done({ intent: "conversation.safeguarding.child_work", reply: work.say(lang, "childWork") });

  // 3. Starting a lesson or an interview practice.
  if (lesson && lesson.offer) return done({ intent: "conversation.practice_lesson_offer", reply: lessons.say(lang, "cantRead") });
  if (lesson && lesson.track) return done(lessons.begin(practice, lesson.track, lang, now, { fromStart: lesson.fromStart }));
  if (talk) {
    if (talk.kind === "practice") return done(interview.begin(practice, lang, now));
    if (talk.kind === "schedule") return done({ intent: "conversation.interview_schedule_none", reply: interview.say(lang, "schedule") });
    if (talk.kind === "wear") return done({ intent: "conversation.interview_tip", reply: interview.say(lang, "wear") });
    if (talk.kind === "howto") {
      const q = interview.QUESTIONS[talk.index];
      return done({ intent: "conversation.interview_tip", reply: interview.say(lang, "askHow", { q: q[lang], tip: lang === "sw" ? q.tipSw : q.tipEn }) });
    }
  }

  // 4. Jobs, training, scholarships and the CV pointers.
  return done(work.workTurn({ text: said, lang, roles, jobs }));
}

module.exports = Object.freeze({ turn, emptyPractice });
