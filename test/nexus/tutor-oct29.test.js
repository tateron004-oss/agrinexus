"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const tutor = require("../../nexus/tutor/tutor.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");
const { fakeMemory } = require("./farmwork-fake.js");

// Tutor mode (1 November 2026): "Teach me fractions", "Help me with my science homework", "Quiz me on world capitals", "Be my tutor", in English or Kiswahili, for anyone. One small step at a time, one question after each,
// and the session carries on until the person says stop. The practice lessons, the checked guides on official processes and questions about Kyro itself keep their own routes.

test("a request to be taught, helped with homework, quizzed or tutored is read, with its subject, in English and Kiswahili", () => {
  const cases = [
    ["Teach me fractions.", "learn", "fractions", "en"], ["Kyro, teach me about photosynthesis", "learn", "photosynthesis", "en"], ["I want to learn Spanish", "learn", "Spanish", "en"],
    ["I would like to study for my biology exam", "learn", "my biology exam", "en"], ["Help me study for my driving test", "learn", "my driving test", "en"], ["Tutor me in algebra", "learn", "algebra", "en"],
    ["Let's learn about the solar system", "learn", "the solar system", "en"], ["Can you teach me how to write an essay?", "learn", "how to write an essay", "en"],
    ["Help me with my math homework", "homework", "math", "en"], ["Can you help me do my science homework?", "homework", "science", "en"], ["Help me with my homework", "homework", "", "en"],
    ["Quiz me on world capitals", "quiz", "world capitals", "en"], ["Quiz me", "quiz", "", "en"], ["Be my tutor", "tutor", "", "en"], ["I need a tutor", "tutor", "", "en"], ["Start tutoring mode", "tutor", "", "en"],
    ["Nifundishe sehemu", "learn", "sehemu", "sw"], ["Nataka kujifunza Kiingereza", "learn", "Kiingereza", "sw"], ["Nisaidie na kazi ya nyumbani ya hesabu", "homework", "hesabu", "sw"],
    ["Nipime kuhusu jiografia", "quiz", "jiografia", "sw"], ["Kuwa mwalimu wangu", "tutor", "", "sw"]
  ];
  for (const [say, kind, subject, lang] of cases) assert.deepEqual({ ...tutor.tutorRequest(say) }, { kind, subject, lang }, say);
});

test("practice lessons, official-process guides, plain questions and questions about Kyro are not tutoring", () => {
  for (const say of ["Teach me letters", "Teach me to read", "Teach me maths", "I want to learn to count", "Nifundishe herufi", "Nifundishe hesabu",
    "Teach me how to apply for a passport", "Teach me how to get an ID", "Teach me how to open a bank account", "I want to learn how to start a business", "Teach me how to use Kyro",
    "What is photosynthesis?", "How do I help my child with homework?", "Make a study schedule for my exam", "Open my documents", "Tell me about the GI Bill", "Write a letter to my landlord", "Help me with my taxes", ""]) {
    assert.equal(tutor.tutorRequest(say), null, say);
  }
});

test("a session ends on a plain stop; a request of its own is not an answer; an answer is neither", () => {
  for (const say of ["stop", "Stop tutoring.", "That's enough", "I'm done, thanks", "thanks, bye", "end the lesson", "acha somo", "tosha", "Acha, Solmo.", "Maliza somo.", "acha"]) assert.equal(tutor.isStop(say), true, say);
  for (const say of ["7", "no", "stop the music", "I don't want to stop", "a noun", "what is a numerator?", "Acha niseme jibu", "Acha nifikirie", "Maliza kazi yangu ya nyumbani leo"]) assert.equal(tutor.isStop(say), false, say);
  for (const say of ["open my documents", "play some music", "what is the weather", "remind me to call Amina", "show me my notes", "show me pictures of maize", "show me a picture", "show me a video", "make me a flyer for my bake sale", "create a document called Harvest", "look up the price of maize", "Teach me letters", "fungua nyaraka zangu"]) assert.equal(tutor.isOtherCommand(say), true, say);
  for (const say of ["7", "yes", "125/80", "a noun", "what is a numerator?", "why is that wrong?", "write me an essay", "show me how to do it", "show me an example", "show me what you mean", "I don't understand", "make it simpler"]) assert.equal(tutor.isOtherCommand(say), false, say);
});

test("a session belongs to one person, keeps the last eight exchanges, and is forgotten after 45 quiet minutes", () => {
  let clock = 1000000;
  const sessions = tutor.createTutorSessions({ now: () => clock });
  assert.equal(sessions.start("", "u1", { subject: "x" }), null);
  assert.equal(sessions.start("t1", "", { subject: "x" }), null);
  const mine = sessions.start("t1", "u1", { kind: "learn", subject: "fractions", lang: "en" });
  assert.equal(sessions.get("t1", "u1"), mine);
  assert.equal(sessions.get("t1", "u2"), null);
  assert.equal(sessions.get("t2", "u1"), null);
  for (let i = 1; i <= 12; i += 1) sessions.record(mine, `answer ${i}`, `step ${i}`);
  assert.equal(mine.turns.length, 16);
  assert.equal(mine.turns[0].content, "answer 5");
  assert.equal(mine.count, 12);
  clock += 44 * 60 * 1000;
  assert.ok(sessions.get("t1", "u1"), "still open after 44 quiet minutes");
  clock += 46 * 60 * 1000;
  assert.equal(sessions.get("t1", "u1"), null, "forgotten after 45 quiet minutes");
  const again = sessions.start("t1", "u1", { subject: "english" });
  assert.equal(sessions.end("t1", "u1"), true);
  sessions.record(again, "late", "late");
  assert.equal(again.turns.length, 0, "nothing is recorded into a session that has ended");
});

const tools = ["documents.create", "lists.create"].map(tool_id => ({ tool_id, domain: tool_id.split(".")[0], description: "", risk_tier: "low", confirmation_required: false }));
function planner({ answers = ["Let us start. What do you already know about fractions?"], fail = [], planned = [], responded = [], sessions = tutor.createTutorSessions() } = {}) {
  let call = 0;
  return new OpenEndedPlanner({
    model: { plan: async request => { planned.push(request); throw new Error("MODEL_REACHED"); },
      respond: async request => { responded.push(request); const index = call; call += 1; if (fail.includes(index)) return null; return answers[Math.min(index, answers.length - 1)]; } },
    tools: { list: async () => tools }, applications: { list: () => defaultApplicationManifests() },
    memory: Object.assign(fakeMemory(), { search: async () => [] }), tutorSessions: sessions
  });
}
const ask = (instance, text, who = {}, context = {}) => instance.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en", ...who }, context: { timeZone: "America/Chicago", ...context } });
const tutoring = plan => Boolean(plan.tutor);

test("a first request opens a session with the AI-tutor line and the teaching rules, and nothing is sent to the planning model", async () => {
  const planned = []; const responded = [];
  const instance = planner({ planned, responded });
  const plan = await ask(instance, "Teach me fractions.");
  assert.equal(planned.length, 0);
  assert.equal(responded.length, 1);
  assert.equal(plan.application, "conversation");
  assert.deepEqual([...plan.steps], []);
  assert.equal(plan.modelAnswered, true);
  assert.deepEqual({ ...plan.tutor }, { active: true, subject: "fractions", kind: "learn", turn: 1 });
  assert.match(plan.response, /^I am an AI tutor, so I can make mistakes\. Check anything important in your book or with a teacher\./);
  assert.match(plan.response, /Let us start\. What do you already know about fractions\?$/);
  const goal = responded[0].goal;
  assert.match(goal, /The subject is: fractions\./);
  assert.match(goal, /exactly ONE short question/);
  assert.match(goal, /hint first/);
  assert.match(goal, /Never invent facts, quotes, sources or page numbers/);
  assert.match(goal, /Never ask for their full name, address, school, phone number/);
  assert.match(goal, /The learner just said: Teach me fractions\.$/);
  assert.deepEqual(responded[0].conversationHistory, []);
});

test("while a session is open, every answer goes to it with the history so far, even ones other readers would take (7, 125/80, yes)", async () => {
  const planned = []; const responded = [];
  const instance = planner({ planned, responded, answers: ["Step one. Question?", "Right! Next.", "Good.", "Yes, that is correct.", "Okay."] });
  await ask(instance, "Teach me fractions.");
  for (const [index, say] of ["I know a little", "7", "125/80", "yes"].entries()) {
    const plan = await ask(instance, say);
    assert.equal(tutoring(plan), true, say);
    assert.equal(plan.tutor.turn, index + 2, say);
    assert.doesNotMatch(plan.response, /I am an AI tutor/, "the opening line is said once");
    assert.match(responded[index + 1].goal, new RegExp(`The learner just said: ${say.replace(/[.*+?^${}()|[\]\\/]/g, "\\$&")}$`), say);
    assert.equal(responded[index + 1].conversationHistory.length, (index + 1) * 2, say);
  }
  assert.equal(planned.length, 0);
  assert.deepEqual(responded[2].conversationHistory.map(turn => turn.role), ["user", "assistant", "user", "assistant"]);
  assert.equal(responded[2].conversationHistory[2].content, "I know a little", "the history sent with a turn is what was said before it");
  assert.match(responded[2].goal, /The learner just said: 7$/);
});

test("a request of its own passes through and the session stays open; a new subject starts over; stop ends it", async () => {
  const planned = []; const responded = [];
  const sessions = tutor.createTutorSessions();
  const instance = planner({ planned, responded, sessions, answers: ["Fractions step.", "Fractions again.", "Spanish step.", "More."] });
  await ask(instance, "Teach me fractions.");
  await assert.rejects(ask(instance, "open my documents"), /MODEL_REACHED/);
  assert.ok(sessions.get("t1", "u1"), "the session is still open");
  await assert.rejects(ask(instance, "Teach me letters"), /MODEL_REACHED/);
  assert.ok(sessions.get("t1", "u1"));
  const spanish = await ask(instance, "I want to learn Spanish");
  assert.deepEqual({ ...spanish.tutor }, { active: true, subject: "Spanish", kind: "learn", turn: 1 });
  assert.match(spanish.response, /^I am an AI tutor/);
  assert.equal(responded[responded.length - 1].conversationHistory.length, 0, "a new subject has a fresh history");
  const stop = await ask(instance, "Stop tutoring.");
  assert.deepEqual({ ...stop.tutor }, { active: false, subject: "Spanish", kind: "learn", turn: 1 });
  assert.equal(stop.response, "Okay, we will stop here. Say \"tutor me in Spanish\" any time to carry on.");
  assert.equal(sessions.get("t1", "u1"), null);
  const before = responded.length;
  await assert.rejects(ask(instance, "7"), /MODEL_REACHED/);
  assert.equal(responded.length, before, "after stop, a bare 7 is not a tutoring answer");
});

test("a session is one person's: another person's words are never taught from it", async () => {
  const responded = [];
  const instance = planner({ responded });
  await ask(instance, "Teach me fractions.");
  await assert.rejects(ask(instance, "7", { actorId: "u2" }), /MODEL_REACHED/);
  await assert.rejects(ask(instance, "7", { tenantId: "t2" }), /MODEL_REACHED/);
  assert.equal(responded.length, 1);
});

test("in Kiswahili the opening and closing lines are Kiswahili and the session is Kiswahili", async () => {
  const sessions = tutor.createTutorSessions();
  const instance = planner({ sessions, answers: ["Sehemu ni sehemu ya nzima. Una nini kichwani?"] });
  const plan = await ask(instance, "Nifundishe sehemu", { locale: "sw" });
  assert.match(plan.response, /^Mimi ni mwalimu wa AI, kwa hiyo naweza kukosea\./);
  const stop = await ask(instance, "Acha somo", { locale: "sw" });
  assert.equal(stop.response, "Sawa, tuishie hapa. Sema \"nifundishe sehemu\" wakati wowote kuendelea.");
});

test("another language is told to open with the AI-tutor line itself", async () => {
  const responded = [];
  const sessions = tutor.createTutorSessions();
  const instance = planner({ responded, sessions });
  sessions.start("t1", "u9", { subject: "x", lang: "fr" });
  const goal = tutor.tutorGoal({ session: { kind: "learn", subject: "les fractions", lang: "fr" }, said: "Enseigne-moi", first: true });
  assert.match(goal, /Begin your first message with one short sentence, in their language, saying that you are an AI tutor who can make mistakes/);
  assert.doesNotMatch(tutor.tutorGoal({ session: { kind: "learn", subject: "x", lang: "en" }, said: "x", first: true }), /Begin your first message/);
  assert.doesNotMatch(tutor.tutorGoal({ session: { kind: "learn", subject: "x", lang: "fr" }, said: "x", first: false }), /Begin your first message/);
  void instance;
});

test("if the AI cannot answer, a first turn leaves no session and falls through; a later turn keeps the session and asks to be said again", async () => {
  const sessions = tutor.createTutorSessions();
  const first = planner({ sessions, fail: [0] });
  await assert.rejects(ask(first, "Teach me fractions."), /MODEL_REACHED|plan_invalid|safe executable/);
  assert.equal(sessions.get("t1", "u1"), null);
  const later = planner({ sessions, fail: [1], answers: ["Step one. Question?"] });
  await ask(later, "Teach me fractions.");
  const failed = await ask(later, "I know a little");
  assert.equal(failed.response, "I could not reach my teaching help just now. Please say that again.");
  assert.deepEqual({ ...failed.tutor }, { active: true, subject: "fractions", kind: "learn", turn: 1 });
  assert.ok(sessions.get("t1", "u1"));
  const retried = await ask(later, "I know a little");
  assert.equal(retried.tutor.turn, 2);
});

test("the spoken path (deterministic answers only) never opens or continues a session, and the practice lessons and checked guides keep their words", async () => {
  const responded = []; const sessions = tutor.createTutorSessions();
  const instance = planner({ responded, sessions });
  const spoken = await ask(instance, "Teach me fractions.", {}, { deterministicOnly: true }).catch(error => error);
  assert.equal(responded.length, 0);
  assert.equal(sessions.get("t1", "u1"), null);
  void spoken;
  await assert.rejects(ask(instance, "Teach me how to apply for a passport"), /MODEL_REACHED|plan_invalid|safe executable/);
  const guide = await ask(instance, "Tell me about the GI Bill.");
  assert.match(String(guide.knowledge), /vet-gi-bill/);
  assert.equal(tutoring(guide), false);
});

test("a person with a crisis in the middle of a lesson gets the safety words, not the tutor", async () => {
  const responded = [];
  const instance = planner({ responded });
  instance.companion = { handle: async ({ command }) => (/want to die/i.test(command.text) ? { response: "I am here with you. Please call or text 988 now." } : null) };
  await ask(instance, "Teach me fractions.");
  const plan = await ask(instance, "I want to die");
  assert.match(plan.response, /988/);
  assert.equal(tutoring(plan), false);
  assert.equal(responded.length, 1);
});

// ---- the page ----
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const lines = app.split("\n");
const startAt = lines.findIndex(line => line.startsWith("const KYRO_OPEN_LEAD = "));
const names = ["KYRO_OPEN_LEAD", "KYRO_TUTOR_REQUEST", "KYRO_TUTOR_NOT", "KYRO_TUTOR_OTHER"];
const context = {};
vm.runInNewContext(`${lines.slice(startAt, startAt + 200).filter(line => names.some(name => line.startsWith(`const ${name} = `))).join("\n")}
this.starts = said => KYRO_TUTOR_REQUEST.test(said) && !KYRO_TUTOR_NOT.test(said);
this.other = said => KYRO_TUTOR_OTHER.test(said);
this.leavesToLessons = said => KYRO_TUTOR_REQUEST.test(said) && KYRO_TUTOR_NOT.test(said);`, context);

test("the page takes a spoken tutoring request and leaves the practice lessons, official processes and Kyro itself alone", () => {
  for (const say of ["Teach me fractions.", "Kyro, teach me about photosynthesis", "I want to learn Spanish", "Help me study for my driving test", "Tutor me in algebra", "Help me with my math homework", "Help me with my homework",
    "Quiz me on world capitals", "Be my tutor", "I need a tutor", "Start tutoring mode", "Nifundishe sehemu", "Nataka kujifunza Kiingereza", "Nisaidie na kazi ya nyumbani", "Nipime kuhusu jiografia", "Kuwa mwalimu wangu"]) {
    assert.equal(context.starts(say), true, say);
  }
  for (const say of ["Teach me letters", "Teach me to read", "Teach me maths", "I want to learn to count", "Nifundishe herufi", "Nifundishe hesabu", "Teach me how to apply for a passport", "Teach me how to use Kyro",
    "What is photosynthesis?", "How do I help my child with homework?", "Open my documents", "Make a study schedule"]) {
    assert.equal(context.starts(say), false, say);
  }
  assert.equal(context.leavesToLessons("Teach me letters"), true);
});

test("in a session the page treats a request of its own as its own, and anything else as the learner's answer", () => {
  for (const say of ["open my documents", "play some music", "what is the weather", "remind me to call Amina", "show me my notes", "show me pictures of maize", "make me a flyer for my bake sale", "create a document called Harvest", "fungua nyaraka"]) assert.equal(context.other(say), true, say);
  for (const say of ["7", "yes", "a noun", "what is a numerator?", "stop", "write me an essay", "show me how to do it", "make it simpler"]) assert.equal(context.other(say), false, say);
});

test("the page sends a spoken tutoring sentence the typed way, ends the session on a close, and draws each turn on a card that stays with an answer box", () => {
  assert.match(app, /const startsTutor = KYRO_TUTOR_REQUEST\.test\(said\) && !KYRO_TUTOR_NOT\.test\(said\);\s+const inSession = kyroTutorOpen\(\) && !KYRO_TUTOR_OTHER\.test\(said\) && !\(KYRO_TUTOR_REQUEST\.test\(said\) && KYRO_TUTOR_NOT\.test\(said\)\);\s+if \(startsTutor \|\| inSession\) \{\s+kyroTakeOverTurn\(\);\s+void handleNexusUnifiedBrainRuntimeCommand\(said, \{ source: "typed", kyroDirect: true \}\);\s+return true;/);
  assert.match(app, /if \(options\.reason === "home" \|\| options\.reason === "done" \|\| options\.reason === "close"\) \{\s+const lessonOnScreen = Boolean\(document\.querySelector\("\[data-kyro-tutor-box\]"\)\);\s+if \(kyroTutorOpen\(\) && kyroTutorLast && !lessonOnScreen && \(options\.reason === "close" \|\| options\.source === "gallery-screen"\)\) resumeTutor = true;\s+else kyroTutorEnd\(\);/);
  assert.match(app, /if \(resumeTutor\) setTimeout\(\(\) => \{ kyroResumeTutor\(\); \}, 400\);\s+return true;/);
  assert.match(app, /const tutor = result\.plan && result\.plan\.tutor \? result\.plan\.tutor : null;\s+if \(tutor\) \{\s+kyroTutorUntil = tutor\.active === true \? Date\.now\(\) \+ 45 \* 60 \* 1000 : 0;\s+kyroTutorSubject = tutor\.active === true \? String\(tutor\.subject \|\| ""\) : "";/);
  assert.match(app, /\} else if \(tutor && result\.state === "completed" && String\(message \|\| ""\)\.trim\(\)\.length >= 12\) \{[^}]*answer = \{ response: message, requiresConfirmation: tutor\.active === true, tutor: \{ active: tutor\.active === true, subject: String\(tutor\.subject \|\| ""\) \} \};/);
  assert.match(app, /if \(shown && tutor && tutor\.active === true\) \{\s+kyroTutorLast = \{ response: String\(message \|\| ""\), tutor: \{ active: true, subject: String\(tutor\.subject \|\| ""\) \} \};\s+kyroAddTutorBox\(tutor\);/);
  assert.match(app, /&& !\(typeof kyroGuidedReply === "function" && kyroGuidedReply\(command\)\) && !kyroTutorOpen\(\)\) return false;/);
  assert.match(app, /function kyroAddTutorBox\(tutor = null\) \{[\s\S]*?"Type your answer here, or say it"[\s\S]*?"Stop tutoring"[\s\S]*?"Acha somo"/);
  assert.ok(app.indexOf("const startsTutor") < app.indexOf("const namedDocument = kyroNamedDocument(said);"), "the tutor claim comes before the document claims");
});

// ---- the card ----
const KyroResultScreen = require("../../public/kyro-result-screen.js");
const INTRO_EN = "I am an AI tutor, so I can make mistakes. Check anything important in your book or with a teacher. Say \"stop\" any time to finish.";
const turnModel = (response, tutorState = { active: true, subject: "fractions" }, lang = "en") => KyroResultScreen.buildModel({ ok: true, status: "completed", response, requiresConfirmation: tutorState.active === true, tutor: tutorState }, { command: "teach me fractions", lang });

test("a tutoring turn is drawn with the lesson as the main text, the AI-tutor line as small print, and the subject in the heading", () => {
  const first = turnModel(`${INTRO_EN}\n\nLet us start with halves. A half is one of two equal parts. How many halves make one whole?`);
  assert.equal(first.kind, "text");
  assert.equal(first.title, "Tutor: fractions");
  assert.equal(first.headline, "Let us start with halves. A half is one of two equal parts. How many halves make one whole?");
  assert.deepEqual([...first.notes], [INTRO_EN]);
  assert.equal(first.awaiting, true);
  assert.equal(first.tutor, true);
  const later = turnModel("Right! Now a quarter is one of four equal parts. What do we call each piece when we cut a roti in four?");
  assert.deepEqual([...later.notes], []);
  assert.match(later.headline, /^Right! Now a quarter/);
  const ended = turnModel("Okay, we will stop here. Say \"tutor me in fractions\" any time to carry on.", { active: false, subject: "fractions" });
  assert.equal(ended.awaiting, false);
  assert.equal(ended.title, "Tutor: fractions");
  assert.equal(turnModel("Okay, we will stop here.", { active: false, subject: "" }).title, "Tutor");
  assert.equal(turnModel("Sawa, tuishie hapa. Sema \"nifundishe sehemu\" wakati wowote kuendelea.", { active: false, subject: "sehemu" }, "sw").title, "Mwalimu: sehemu");
  const swFirst = turnModel("Mimi ni mwalimu wa AI, kwa hiyo naweza kukosea. Hakikisha mambo muhimu kwenye kitabu chako au kwa mwalimu.\n\nTuanze na nusu. Nusu ni sehemu moja kati ya mbili sawa. Nusu mbili hufanya nini?", { active: true, subject: "sehemu" }, "sw");
  assert.equal(swFirst.headline, "Tuanze na nusu. Nusu ni sehemu moja kati ya mbili sawa. Nusu mbili hufanya nini?");
  assert.equal(swFirst.notes.length, 1);
});

test("a tutor card is drawn in the lesson type size, and other long answers are not changed", () => {
  const { JSDOM } = (() => { try { return require("jsdom"); } catch { return {}; } })();
  if (!JSDOM) return;
  const dom = new JSDOM("<!doctype html><html><head></head><body></body></html>");
  KyroResultScreen.show(dom.window.document, turnModel("Let us start with halves. How many halves make one whole?"), {}, "en");
  assert.ok(dom.window.document.querySelector("[data-kyro-result] p.kyro-result-headline.kyro-result-lesson"));
  assert.equal(dom.window.document.querySelector("[data-kyro-result] h2").textContent, "Tutor: fractions");
  const plain = new JSDOM("<!doctype html><html><head></head><body></body></html>");
  KyroResultScreen.show(plain.window.document, KyroResultScreen.buildModel({ ok: true, status: "completed", response: "It will rain tomorrow in Kisumu. Take an umbrella." }, { command: "weather", lang: "en" }), {}, "en");
  assert.equal(plain.window.document.querySelector("[data-kyro-result] p.kyro-result-lesson"), null);
});

// ---- pictures and videos in a lesson ----
const demoStart = app.indexOf('// In a lesson, "show me a picture"');
const demoEnd = app.indexOf("// A picture or video seen during a lesson was closed");
assert.ok(demoStart > 0 && demoEnd > demoStart, "the demo helpers are in app.js");
const demoContext = {};
vm.runInNewContext(`${app.slice(demoStart, demoEnd)}
this.open = (subject) => { kyroTutorUntil = Date.now() + 60000; kyroTutorSubject = subject; };
this.close = () => { kyroTutorUntil = 0; kyroTutorSubject = ""; };
this.demo = said => kyroTutorDemoCommand(said);`, demoContext);

test("in a lesson with a subject, 'show me a picture' or 'a video' means pictures or videos of that subject; anything else is left alone", () => {
  demoContext.open("fractions");
  for (const [say, want] of [["Show me a picture.", "Show me pictures of fractions"], ["show me a diagram", "Show me pictures of fractions"], ["Can you show me a picture?", "Show me pictures of fractions"], ["Let me see a picture of it", "Show me pictures of fractions"],
    ["Show me a video", "Show me videos about fractions"], ["Can I watch a video?", "Show me videos about fractions"], ["Show me a demo", "Show me videos about fractions"], ["watch a video", "Show me videos about fractions"], ["Show me pictures", "Show me pictures of fractions"]]) {
    assert.equal(demoContext.demo(say), want, say);
  }
  for (const say of ["Show me pictures of maize", "Show me an example", "Show me how to do it", "Show me my notes", "I want to see my documents", "a quarter"]) assert.equal(demoContext.demo(say), null, say);
  demoContext.open("");
  assert.equal(demoContext.demo("Show me a picture"), null, "a lesson with no subject yet has nothing to show pictures of");
  demoContext.close();
  assert.equal(demoContext.demo("Show me a picture"), null, "no lesson, no change");
});

test("the page sends the picture or video request, brings the lesson back when it is closed, and adds Show a picture / Show a video buttons when the lesson has a subject", () => {
  assert.match(app, /const tutorDemo = kyroTutorDemoCommand\(said\);\s+if \(tutorDemo\) \{\s+if \(!options\.typed\) kyroTakeOverTurn\(\);\s+void handleNexusUnifiedBrainRuntimeCommand\(tutorDemo, \{ source: "typed", kyroDirect: true \}\);\s+return true;\s+\}\s+if \(!options\.typed\) \{\s+const startsTutor/);
  assert.match(app, /function kyroResumeTutor\(\) \{[\s\S]*?kyroShowResultScreen\("typed", "Continue the lesson", \{ ok: true, status: "completed", response: kyroTutorLast\.response, requiresConfirmation: true, tutor: kyroTutorLast\.tutor \}\);\s+if \(shown\) kyroAddTutorBox\(kyroTutorLast\.tutor\);/);
  assert.match(app, /demo\(sw \? "Onyesha picha" : "Show a picture", `Show me pictures of \$\{subject\}`\);\s+demo\(sw \? "Onyesha video" : "Show a video", `Show me videos about \$\{subject\}`\);/);
  assert.match(app, /kyroTutorUntil = 0; kyroTutorSubject = ""; kyroTutorLast = null;/);
});
