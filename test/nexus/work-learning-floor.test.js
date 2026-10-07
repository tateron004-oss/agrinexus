"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const floor = require("../../nexus/floor/index.js");
const lessons = require("../../nexus/floor/lessons.js");
const interview = require("../../nexus/floor/interview.js");
const work = require("../../nexus/floor/work.js");
const language = require("../../nexus/floor/language.js");

// The work-and-learning floor as plain state machines (no server): short practice lessons in reading and maths, practice interviews, honest answers about jobs and training, and a child
// who works. The Kiswahili is a first draft for a fluent speaker to review.

const ROLES = [{ title: "Field Operations Agent" }, { title: "Telehealth Access Assistant" }];
function conversation(requestedLanguage = "en") {
  const practice = floor.emptyPractice();
  let now = 5_000_000;
  const say = (text, lang = requestedLanguage, extra = {}) => {
    now += 1000;
    return floor.turn({ text, requestedLanguage: lang, practice, roles: ROLES, now, ...extra });
  };
  return { practice, say, advance: ms => { now += ms; } };
}

test("'teach me to read' starts a letters lesson at once: one small step, then one question, and it says plainly that it is practice and not a course", () => {
  const { say, practice } = conversation();
  const first = say("teach me to read");
  assert.equal(first.handled, true);
  assert.equal(first.intent, "conversation.practice_lesson");
  assert.match(first.reply, /short practice lesson inside Kyro\. It is not a certified course/);
  assert.match(first.reply, /The letter A\. A is for apple\. In Kiswahili, A is for asali, which means honey/);
  assert.match(first.reply, /Which letter does the word "apple" start with\?$/);
  assert.equal(practice.lesson.track, "letters");
  assert.equal(practice.lesson.phase, "check");
});

test("a right answer is confirmed, 'next' goes on, 'again' repeats, and a miss is helped once and then answered so nobody is stuck", () => {
  const { say, practice } = conversation();
  say("teach me letters");
  const right = say("A");
  assert.match(right.reply, /^Yes, that's right\. A is for apple\. Say 'next' to go on, or 'again'/);
  assert.equal(practice.progress.letters.next, 1);
  const next = say("next");
  assert.match(next.reply, /The letter B\. B is for ball/);
  const again = say("again");
  assert.match(again.reply, /The letter B\. B is for ball/);
  const miss = say("dog");
  assert.match(miss.reply, /^Not quite\. Say the first letter of "ball"\. Try again\.$/);
  const reveal = say("cat");
  assert.match(reveal.reply, /^The answer is B\. That's fine, we learn by trying\. B is for ball\./);
  assert.equal(practice.progress.letters.next, 2);
  // "start" and "ok" after the question are "I am ready", not a wrong answer.
  say("next");
  assert.match(say("start").reply, /The letter C\. C is for cat/);
  assert.equal(practice.lesson.misses, 0);
});

test("spoken letter names and answers with words around them are understood; words that merely contain a letter are not an answer", () => {
  const { say } = conversation();
  say("teach me letters");
  assert.match(say("it starts with a").reply, /^Yes, that's right/);
  say("next"); // B
  assert.match(say("bee").reply, /^Yes, that's right/);
  say("next"); // C
  assert.match(say("I don't know").reply, /^Not quite/, "the 'I' in 'I don't know' is not the letter");
  assert.match(say("see").reply, /^The answer is C|^Yes, that's right/);
});

test("stopping keeps the place, and 'teach me letters' again carries on from there; 'start over' begins again", () => {
  const { say, practice } = conversation();
  say("teach me letters");
  say("a");
  say("next");
  say("b");
  const stopped = say("stop");
  assert.match(stopped.reply, /^Okay, we have stopped\. I remember where you got to\. Say 'teach me letters' any time to carry on\.$/);
  assert.equal(practice.lesson, null);
  assert.equal(practice.progress.letters.next, 2);
  const back = say("teach me letters");
  assert.match(back.reply, /Welcome back\. Last time you finished 2 of 26 steps/);
  assert.match(back.reply, /The letter C\. C is for cat/);
  const over = say("start over");
  assert.match(over.reply, /The letter A\. A is for apple/);
  assert.doesNotMatch(over.reply, /Welcome back/);
});

test("all 26 letters can be walked through to the end, and the end says it was practice, not a certificate", () => {
  const { say, practice } = conversation();
  say("teach me to read");
  let last;
  for (let i = 0; i < 26; i += 1) {
    const answer = lessons.LETTERS[i][0];
    last = say(answer);
    assert.match(last.reply, /^Yes, that's right/, `letter ${answer}`);
    if (i < 25) say("next");
  }
  assert.match(last.reply, /You finished the letters practice\. Well done! This was a short practice lesson, not a certificate or a course\./);
  assert.equal(practice.lesson, null);
  assert.equal(practice.progress.letters.next, 26);
  assert.match(say("teach me letters").reply, /You finished this practice before/);
});

test("maths: counting, adding and taking away with shillings, one step and one question at a time, with the right answers in digits or words", () => {
  const { say, practice } = conversation();
  const first = say("teach me maths");
  assert.match(first.reply, /Count with me, from 1 to 5: 1, one; 2, two; 3, three; 4, four; 5, five\. In Kiswahili: 1, moja; 2, mbili; 3, tatu; 4, nne; 5, tano\. What number comes after 3\?/);
  const answers = ["4", "nine", "kumi na tatu", "ishirini", "thirty", "80", "mia tatu", "30", "fifty", "50"];
  let last;
  answers.forEach((answer, index) => {
    last = say(answer);
    assert.match(last.reply, /^Yes, that's right/, `step ${index + 1}: ${answer}`);
    if (index < answers.length - 1) say("next");
  });
  assert.match(last.reply, /You finished the maths practice\./);
  assert.equal(practice.progress.maths.next, 10);
});

test("the maths examples are correct arithmetic in shillings", () => {
  for (const key of ["adding", "subtracting"]) {
    for (const step of lessons.TRACKS[key].steps) {
      const numbers = (step.ask.en.match(/\d+/g) || []).map(Number);
      const answer = Number((step.answer.en.match(/\d+/) || [])[0]);
      const expected = key === "adding" ? numbers[0] + numbers[1] : numbers[0] - numbers[1];
      assert.equal(answer, expected, step.ask.en);
      assert.equal(lessons.answerMatches(step.accept, String(expected)), true);
      assert.equal(lessons.answerMatches(step.accept, String(expected + 10)), false);
    }
  }
  assert.deepEqual(lessons.TRACKS.counting.steps.map(step => step.answer.en), ["4, four", "9, nine", "13, thirteen", "20, twenty"]);
});

test("specific maths requests pick the right track; requests that are not lessons are left alone", () => {
  const track = text => (lessons.lessonRequest(text) || {}).track;
  assert.equal(track("teach me basic maths, adding and subtracting"), "maths");
  assert.equal(track("teach me to add"), "adding");
  assert.equal(track("teach me subtraction"), "subtracting");
  assert.equal(track("teach me to count"), "counting");
  assert.equal(track("I want to learn the alphabet"), "letters");
  assert.equal(track("teach me how to use a smartphone"), undefined);
  assert.equal(track("teach me how to grow tomatoes"), undefined);
  assert.equal(track("teach me how to read a map"), undefined);
  assert.equal(track("teach me how to save money"), undefined);
  assert.equal(track("Can you teach me about resume writing for a new job?"), undefined);
  assert.equal(track("teach me how to write a cover letter"), undefined);
  assert.equal(track("teach me to read and write"), "letters");
  for (const phrase of ["Explain how to prepare for a job interview.", "what are common interview questions", "Teach me about career readiness.", "Explain crop rotation to me."]) {
    assert.equal(floor.turn({ text: phrase, requestedLanguage: "en", practice: floor.emptyPractice(), roles: ROLES, now: 1 }).handled, false, phrase);
  }
  assert.equal(track("what courses do you have"), undefined);
  assert.equal(track("how many courses have i finished"), undefined);
  assert.deepEqual(lessons.lessonRequest("i don't know how to read"), { offer: true });
});

test("in a lesson, something that is clearly another request is not swallowed, and the lesson waits", () => {
  const { say, practice } = conversation();
  say("teach me letters");
  assert.equal(say("what is the weather in Nairobi today").handled, false);
  assert.equal(say("remind me to call my mother at six").handled, false);
  assert.equal(practice.lesson.track, "letters");
  assert.match(say("a").reply, /^Yes, that's right/);
  // A pending confirmation elsewhere owns a bare yes.
  const waiting = say("yes", "en", { hasPending: true });
  assert.equal(waiting.handled, false);
  // A lesson left alone for a long time is gone.
  assert.equal(say("next").handled, true);
  const { say: sayLater, advance, practice: later } = conversation();
  sayLater("teach me letters");
  advance(lessons.SESSION_MS + 1000);
  assert.equal(sayLater("next").handled, false);
  assert.equal(later.lesson, null);
});

test("a lesson never touches courses: no enrolment, no certificate, no progress in the Learning tools", () => {
  const { say, practice } = conversation();
  say("teach me maths");
  say("4");
  assert.deepEqual(Object.keys(practice).sort(), ["interview", "lesson", "progress"]);
  for (const file of ["lessons.js", "interview.js", "work.js", "index.js"]) {
    const source = require("node:fs").readFileSync(require.resolve(`../../nexus/floor/${file}`), "utf8");
    assert.doesNotMatch(source, /issueAgentCertificate|certificates\.push|completedCourses|\.enrollments|learning\.start_or_continue/, file);
  }
});

test("the lessons in Kiswahili: asked, answered and finished in Kiswahili", () => {
  const { say, practice } = conversation("sw");
  const first = say("nifundishe kusoma");
  assert.match(first.reply, /^Hili ni somo fupi la mazoezi ndani ya Kyro\. Si kozi rasmi yenye cheti\./);
  assert.match(first.reply, /Herufi A\. A kama asali\. Kwa Kiingereza, A ni kama "apple", yaani tufaha\. Sema pamoja nami: A, asali\. Neno "asali" linaanza na herufi gani\?$/);
  assert.equal(first.language, "sw");
  assert.match(say("a").reply, /^Ndiyo, sawa kabisa\. A kama asali\. Sema 'endelea' kuendelea/);
  assert.match(say("endelea").reply, /^Herufi B\. B kama baba/);
  assert.match(say("dada").reply, /^Bado hujapata\./);
  assert.match(say("rudia").reply, /^Herufi B\./);
  assert.match(say("acha").reply, /^Sawa, tumesimama\. Nakumbuka ulipofika\. Sema 'nifundishe herufi'/);
  assert.equal(practice.lesson, null);
  const maths = say("nifundishe hesabu");
  assert.match(maths.reply, /Hesabu pamoja nami, kuanzia 1 hadi 5: 1, moja; 2, mbili; 3, tatu; 4, nne; 5, tano\. Kwa Kiingereza:/);
  assert.match(say("nne").reply, /^Ndiyo, sawa kabisa\. Baada ya 3 inakuja 4\./);
  assert.match(lessons.say("sw", "finished", { track: "hesabu", more: "x" }), /Hongera! Hili lilikuwa somo fupi la mazoezi, si cheti wala kozi\./);
  assert.equal((lessons.lessonRequest("nifundishe hesabu ya kujumlisha") || {}).track, "adding");
  assert.equal((lessons.lessonRequest("nifundishe kusoma na kuandika") || {}).track, "letters");
  assert.equal((lessons.lessonRequest("nifundishe kutumia simu janja") || {}).track, undefined);
});

test("a practice interview asks one question at a time, gives one rule-based tip, never scores, and ends", () => {
  const { say, practice } = conversation();
  const start = say("practice interview");
  assert.equal(start.intent, "conversation.practice_interview");
  assert.match(start.reply, /This is practice only, no employer is involved and nothing is sent\./);
  assert.match(start.reply, /Question 1 of 6: Tell me about yourself\.$/);
  const short = say("I work");
  assert.match(short.reply, /^Thank you for answering\. Try to say a little more: one or two sentences, with one example\. Question 2 of 6: Why do you want this job\?$/);
  const generic = say("I want this job because I like to work with people");
  assert.match(generic.reply, /Good: you gave a reason or an example/);
  assert.match(generic.reply, /Question 3 of 6: Tell me about a time you solved a problem\.$/);
  assert.match(say("repeat").reply, /^Question 3 of 6: Tell me about a time you solved a problem\.$/);
  const plain = say("my phone was broken and I mended it myself with a small screwdriver");
  assert.match(plain.reply, /Question 4 of 6: What are your strengths\?$/);
  assert.match(say("skip").reply, /^Okay, next question\. Question 5 of 6: How do you handle a difficult customer or boss\?$/);
  const tipOnly = say("I stay calm and listen to the person and then I try to help them politely");
  assert.match(tipOnly.reply, /Question 6 of 6: Do you have any questions for us\?$/);
  assert.match(tipOnly.reply, /Stay calm, listen first|reason or an example/);
  const last = say("What time does the work start?");
  assert.match(last.reply, /That was the last question\. Well done for practising\./);
  assert.equal(practice.interview, null);
  for (const reply of [short.reply, generic.reply, tipOnly.reply, last.reply]) assert.doesNotMatch(reply, /score|grade|rating|\d+ ?\/ ?10|\d+%|you will get the job|excellent|perfect/i);
  assert.equal(JSON.stringify(practice).includes("screwdriver"), false, "what the person said is not kept");
});

test("interview practice can be stopped, handles other requests without swallowing them, and is offered in Kiswahili too", () => {
  const { say, practice } = conversation();
  say("ask me interview questions");
  assert.match(say("stop").reply, /^Okay, we have stopped\./);
  assert.equal(practice.interview, null);
  for (const phrase of ["help me prepare for an interview", "prepare me for an interview", "mock interview please", "interview practice"]) {
    assert.equal(interview.interviewRequest(phrase).kind, "practice", phrase);
  }
  say("practice interview");
  assert.equal(say("call my brother").handled, false);
  assert.equal(practice.interview.index, 0);

  const sw = conversation("sw");
  const start = sw.say("nisaidie kujiandaa kwa mahojiano ya kazi");
  assert.match(start.reply, /^Tufanye mazoezi ya mahojiano\. Haya ni mazoezi tu, hakuna mwajiri anayehusika/);
  assert.match(start.reply, /Swali 1 kati ya 6: Niambie kuhusu wewe mwenyewe\.$/);
  assert.match(sw.say("Mimi ni mchapakazi na ninapenda kujifunza mambo mapya kila siku").reply, /Swali 2 kati ya 6: Kwa nini unataka kazi hii\?$/);
  assert.match(sw.say("ruka").reply, /^Sawa, swali linalofuata\. Swali 3 kati ya 6:/);
  assert.match(sw.say("acha").reply, /^Sawa, tumesimama\./);
  for (const q of interview.QUESTIONS) assert.ok(q.sw.length > 10 && q.tipSw.length > 20);
});

test("'schedule interview' never shows a past date as upcoming and never books anything; clothes and how-to-answer questions get a short tip", () => {
  const { say } = conversation();
  const schedule = say("schedule interview");
  assert.equal(schedule.intent, "conversation.interview_schedule_none");
  assert.match(schedule.reply, /I can't book an interview with an employer from here, and I have no interview saved for you/);
  assert.doesNotMatch(schedule.reply, /20\d\d|May|shift/);
  assert.equal(say("book me an interview").intent, "conversation.interview_schedule_none");
  assert.match(say("nipangie mahojiano", "sw").reply, /^Siwezi kupanga mahojiano na mwajiri kutoka hapa/);
  assert.match(say("what should I wear to an interview").reply, /clean, neat clothes/);
  assert.match(say("how do i answer tell me about yourself").reply, /Here is a tip for "Tell me about yourself\.": A good answer has three parts/);
});

test("jobs and training: what Kyro really knows, said plainly, in the person's language, with the real next steps", () => {
  const { say } = conversation();
  for (const phrase of ["find jobs near me", "find job", "i need work. any job", "show me available jobs", "any job for disabled people", "jobs for old people, i am 62", "i have no experience, where do i start looking for work", "i am a retired soldier looking for security job"]) {
    const reply = say(phrase);
    assert.equal(reply.intent, "conversation.honest_job_search", phrase);
    assert.match(reply.reply, /I can't search live job listings for your area, so I can't tell you what is open near you today/, phrase);
    assert.match(reply.reply, /roles loaded on the platform: Field Operations Agent, Telehealth Access Assistant\. I have not checked them with any employer/, phrase);
    assert.match(reply.reply, /make a CV[\s\S]*practise an interview[\s\S]*local employment office/, phrase);
    assert.doesNotMatch(reply.reply, /Where should I start the map|I submitted|applied|apply for/i, phrase);
  }
  const training = say("any training or apprenticeship near me");
  assert.equal(training.intent, "conversation.honest_training_answer");
  assert.match(training.reply, /I don't have a list of training places or apprenticeships near you, and I can't search for them live/);
  assert.match(say("scholarships for girls in kenya").reply, /I don't have a list of scholarships or bursaries[\s\S]*Be careful of anyone who asks you to pay money first/);
  const none = floor.turn({ text: "find jobs near me", requestedLanguage: "en", practice: floor.emptyPractice(), roles: [], now: 1 });
  assert.match(none.reply, /I don't have any job listings loaded to show you, so I won't guess/);

  const sw = conversation("sw");
  for (const phrase of ["nitafutie kazi karibu nami", "sina kazi, nisaidie kupata kazi ya kilimo", "sijawahi kufanya kazi, nianzie wapi"]) {
    const reply = sw.say(phrase);
    assert.equal(reply.intent, "conversation.honest_job_search", phrase);
    assert.equal(reply.language, "sw");
    assert.match(reply.reply, /^Siwezi kutafuta orodha za kazi za moja kwa moja za eneo lako[\s\S]*Sijazihakiki na mwajiri yeyote[\s\S]*ofisi ya ajira/, phrase);
  }
  assert.match(sw.say("kuna mafunzo ya ufundi karibu nami").reply, /^Sina orodha ya vituo vya mafunzo au uanagenzi karibu nawe/);
});

test("requests that are about something else are not answered as a job search", () => {
  for (const phrase of ["apply for the telehealth assistant job", "naomba kazi ya field agent", "what is the status of my job application", "maombi yangu ya kazi yamefikia wapi", "how much does the field agent job pay",
    "what jobs can i do with a form four certificate", "a man says i must pay 5000 shillings to get a job abroad", "I need to ask my boss for a day off from my job", "I want to work on my farm today", "I have a job", "show my applications", "withdraw my application",
    "I need training for farm jobs but my internet is weak", "I need work done on my roof", "find training videos on farm training"]) {
    assert.equal(work.jobRequestKind(phrase.toLowerCase()), null, phrase);
    assert.equal(floor.turn({ text: phrase, requestedLanguage: "en", practice: floor.emptyPractice(), roles: ROLES, now: 1 }).handled, false, phrase);
  }
});

test("a child under working age who works or wants to work gets a protective, non-judgemental answer and nothing is saved or applied for", () => {
  for (const [phrase, lang] of [["I am 15 and I want to work", "en"], ["i am 15 and i want a job", "en"], ["my daughter is 14 and works as a house girl", "en"], ["my son is twelve and he works at the market", "en"],
    ["nina miaka 15 na nataka kazi", "sw"], ["mtoto wangu wa miaka 14 anafanya kazi ya nyumbani", "sw"], ["child labour", "en"]]) {
    const reply = floor.turn({ text: phrase, requestedLanguage: lang, practice: floor.emptyPractice(), roles: ROLES, now: 1 });
    assert.equal(reply.intent, "conversation.safeguarding.child_work", phrase);
    if (lang === "sw") assert.match(reply.reply, /anapaswa kuwa shuleni, si kazini[\s\S]*mwalimu unayemwamini[\s\S]*afisa wa watoto/, phrase);
    else assert.match(reply.reply, /belongs in school, not at work[\s\S]*trusted teacher[\s\S]*children's officer[\s\S]*local emergency number[\s\S]*I have not saved anything or applied for any job/, phrase);
    assert.doesNotMatch(reply.reply, /verify profile|shortlist|schedule a shift|apply now|Do you want me to/i, phrase);
    assert.doesNotMatch(reply.reply, /your fault|you should be ashamed|illegal for you|bad parent/i, phrase);
  }
  for (const phrase of ["I am 62 and want a job", "my farm is 12 acres and I work there", "I am 16 and want a job", "my son is 30 and works in Nairobi"]) {
    assert.equal(work.childWorkRequest(phrase), false, phrase);
  }
});

test("a CV asked for here is pointed at the app; nothing is claimed to be made", () => {
  const { say } = conversation();
  const build = say("make my CV");
  assert.equal(build.intent, "conversation.resume_pointer");
  assert.match(build.reply, /I have not made a CV yet/);
  assert.match(say("download my CV").reply, /I can't send a file from here/);
  assert.match(say("nataka CV", "sw").reply, /Bado sijatengeneza CV/);
});

test("the replies are in the language the person spoke; a bare control word keeps the conversation's language", () => {
  assert.equal(language.pickLanguage("nifundishe kusoma", "en"), "sw");
  assert.equal(language.pickLanguage("teach me to read", "sw"), "en");
  assert.equal(language.pickLanguage("next", "en", "sw"), "sw");
  assert.equal(language.pickLanguage("4", "sw"), "sw");
  assert.equal(language.pickLanguage("4", "en"), "en");
  assert.equal(language.pickLanguage("find jobs near me", "sw-KE"), "en");
});

test("the Kiswahili strings of the floor are all present for every English one", () => {
  for (const [name, mod] of [["lessons", lessons], ["interview", interview], ["work", work]]) {
    assert.deepEqual(Object.keys(mod.TEXT.sw).sort(), Object.keys(mod.TEXT.en).sort(), name);
    for (const key of Object.keys(mod.TEXT.sw)) assert.ok(String(mod.TEXT.sw[key]).length > 8, `${name}.${key}`);
  }
  for (const [name, track] of Object.entries(lessons.TRACKS)) {
    for (const step of track.steps) {
      for (const part of ["teach", "ask", "hint", "answer", "recap"]) { assert.ok(step[part].en && step[part].sw, `${name}.${part}`); }
    }
  }
});
