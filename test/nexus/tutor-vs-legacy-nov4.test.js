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

// The owner's test report of 4 November 2026: after tutoring, Kyro kept "reverting back to irrigation" and "tutoring will not go away", and the church, athlete and money questions after it were answered as lesson turns.
// Two causes, both shown here:
//   1. A lesson the server still held open (its "stop" never arrived, the page was reloaded, the card was closed) took EVERY later sentence that was not an obvious command, for up to 45 minutes. The page now says on every turn
//      whether a lesson is on its screen (tutorLessonOpen), and the server ends a lesson the page says is closed.
//   2. The older routes still opened old screens or answered "I couldn't do that one just now" for lesson sentences: the voice model's learning tool (server.js: "I opened Learning and prepared a plain-language lesson",
//      with the Learning window's sample irrigation course), the workspace opener that reads a sentence's words (irrigation, crop, plant -> Agriculture; health, doctor -> Health; lesson, course -> Learning), and the older
//      backend command door. A sentence that tutoring owns never reaches them.
const tools = ["documents.create", "lists.create"].map(tool_id => ({ tool_id, domain: tool_id.split(".")[0], description: "", risk_tier: "low", confirmation_required: false }));
function planner({ planned = [], responded = [], sessions = tutor.createTutorSessions() } = {}) {
  let call = 0;
  return new OpenEndedPlanner({
    model: { plan: async request => { planned.push(request); throw new Error("MODEL_REACHED"); }, respond: async () => { responded.push(call); call += 1; return "A lesson step. Question?"; } },
    tools: { list: async () => tools }, applications: { list: () => defaultApplicationManifests() },
    memory: Object.assign(fakeMemory(), { search: async () => [] }), tutorSessions: sessions
  });
}
const ask = (instance, text, context = {}) => instance.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en" }, context: { timeZone: "America/Chicago", ...context } });

test("a lesson the page says is closed is ended, and the sentence after it is not taught as a lesson answer", async () => {
  const sessions = tutor.createTutorSessions();
  const planned = []; const responded = [];
  const instance = planner({ sessions, planned, responded });
  await ask(instance, "Teach me about irrigation.", { tutorLessonOpen: false });
  assert.equal(responded.length, 1, "a lesson starts whatever the page says: it has no lesson open yet");
  assert.ok(sessions.get("t1", "u1"));
  // the page says no lesson is on its screen: the church question is not a lesson turn
  const church = await ask(instance, "Does a church have to apply for tax-exempt status?", { tutorLessonOpen: false }).catch(error => error);
  assert.equal(church.tutor, undefined, "not a lesson turn: the checked church guide answers it");
  assert.match(String(church.knowledge || ""), /church/i);
  assert.equal(responded.length, 1, "no second lesson turn");
  assert.equal(sessions.get("t1", "u1"), null, "the stale lesson is ended");
});

test("while the page says a lesson is open (or says nothing, as other clients do) a sentence in it is still a lesson turn", async () => {
  for (const context of [{ tutorLessonOpen: true }, {}]) {
    const sessions = tutor.createTutorSessions();
    const responded = [];
    const instance = planner({ sessions, responded });
    await ask(instance, "Teach me fractions.", context);
    const turn = await ask(instance, "One half.", context);
    assert.equal(turn.tutor.turn, 2, JSON.stringify(context));
    assert.equal(responded.length, 2, JSON.stringify(context));
  }
});

test("'stop' ends a lesson, with the page's flag either way (the silent stop the page sends after the card was closed says no lesson is open)", async () => {
  for (const flag of [true, false, undefined]) {
    const sessions = tutor.createTutorSessions();
    const instance = planner({ sessions });
    await ask(instance, "Teach me fractions.");
    const stop = await ask(instance, "Stop tutoring", flag === undefined ? {} : { tutorLessonOpen: flag });
    assert.equal(stop.tutor.active, false, String(flag));
    assert.match(stop.response, /we will stop here/, String(flag));
    assert.equal(sessions.get("t1", "u1"), null, String(flag));
  }
});

test("the app's turn request carries tutorLessonOpen to the planner, only when the app sent a true or false", () => {
  const adapter = fs.readFileSync(path.join(__dirname, "../../nexus/compat/server-runtime-adapter.js"), "utf8");
  assert.match(adapter, /const turnContext = typeof body\.tutorLessonOpen === "boolean" \? Object\.freeze\(\{ \.\.\.zonedContext, tutorLessonOpen: body\.tutorLessonOpen \}\) : zonedContext;/);
  assert.match(adapter, /const zonedContext = validIanaZone\(body\.timeZone\) \? Object\.freeze\(\{ \.\.\.context, timeZone: body\.timeZone \}\) : context;/);
});

// ---- the page ----
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const lines = app.split("\n");
const leadLine = lines.find(line => line.startsWith("const KYRO_OPEN_LEAD = "));
const from = app.indexOf("const KYRO_TUTOR_REQUEST = ");
const ownsAt = app.indexOf("function kyroTutorOwns(text) {");
const to = app.indexOf("\n}\n", ownsAt) + 3;
assert.ok(leadLine && from > 0 && ownsAt > from && to > ownsAt, "the tutor helpers are in app.js");
const page = {};
vm.runInNewContext(`${leadLine}\n${app.slice(from, to)}
this.open = () => { kyroTutorUntil = Date.now() + 60000; };
this.close = () => { kyroTutorUntil = 0; };
this.owns = said => kyroTutorOwns(said);`, page);

test("tutoring owns a lesson request even when it names a crop, and a lesson's own sentences while it is open; it owns nothing else", () => {
  page.close();
  for (const say of ["Teach me about irrigation.", "Teach me about the heart", "Help me with my science homework", "Quiz me on world capitals", "Be my tutor", "Nifundishe sehemu"]) assert.equal(page.owns(say), true, say);
  for (const say of ["One half.", "stop", "yes", "Does a church have to apply for tax-exempt status?", "What is the weather in Kisumu?", "Open my documents", "Teach me how to apply for a passport", "Teach me letters", "Make me a flyer"]) assert.equal(page.owns(say), false, `no lesson open: ${say}`);
  page.open();
  for (const say of ["One half.", "yes", "a noun", "stop", "Stop tutoring", "I think it is a quarter", "Does a church have to apply for tax-exempt status?", "What should I plant after the rains?", "Teach me more", "Teach me about the heart"]) assert.equal(page.owns(say), true, `in a lesson: ${say}`);
  for (const say of ["What is the weather in Kisumu?", "Open my documents", "Show me a picture", "Play some music", "Make me a flyer for my bake sale", "Teach me how to apply for a passport", "Teach me letters", "Remind me to call Amina"]) assert.equal(page.owns(say), false, `a request of its own in a lesson: ${say}`);
  page.close();
});

test("every older door is fenced: the voice model's learning tool, the workspace opener that reads a sentence's words, and the older backend command", () => {
  const toolAt = app.indexOf("async function callNexusOpenAiRealtimeTool(");
  const toolEnd = app.indexOf("\n}\n", toolAt);
  const tool = app.slice(toolAt, toolEnd);
  // the card the page just drew for these words is not cleared by the model's tool call for the same sentence
  assert.match(tool, /!\(typeof kyroPageJustOpened === "function" && kyroPageJustOpened\(command\)\) && !kyroTutorOwns\(command\)\) kyroDismissStaleWorkspace\(command\);/);
  // a lesson sentence is the lesson's: no second turn within 8 seconds of the page's own, never the older tool
  assert.match(tool, /if \(kyroTutorOwns\(command\)\) \{\s+\/\/[^\n]*\n\s+if \(Date\.now\(\) - kyroTutorSentAt < 8000\) return \{ ok: true, status: "completed", response: "Kyro is already doing it and said so\. Say nothing more\."[^\n]*\n\s+const lessonTurn = await kyroAnswerLikeTyped\(command\);\s+return lessonTurn \|\| kyroToolFailureResult\("offline", \{ correlationId: `lesson-\$\{Date\.now\(\)\.toString\(36\)\}` \}\);\s+\}/);
  assert.ok(tool.indexOf("if (kyroTutorOwns(command)) {") < tool.indexOf("const mediaAsk = window.KyroMediaCommands?.parse?.(command);"), "before the media and visual readers");
  assert.ok(tool.indexOf("if (kyroTutorOwns(command)) {") < tool.indexOf('"/api/voice/realtime/tool"'), "before the older tool is asked");
  assert.match(tool, /const lessonPicture = kyroTutorDemoCommand\(command\);\s+const visualKind = kyroVisualRequestKind\(lessonPicture \|\| command\);\s+if \(visualKind\) return kyroShowVisualRequest\(lessonPicture \|\| command, visualKind\);/);
  // the workspace opener that reads a sentence's words
  assert.match(app, /if \(window\.KyroDismissCommands\?\.parse\?\.\(command\)\) return null;\s+\/\/[^\n]*\n\s+if \(kyroTutorOwns\(command\)\) return null;\s+const explicitOpen = /);
  // the older backend command door
  assert.match(app, /async function runBackendAgentCommand\(command, locationContext = null, options = \{\}\) \{\s+const turnToken = options\.turnToken \|\| null;\s+if \(ignoreStaleNexusTurn\(turnToken, "backend answer"\)\) return null;\s+\/\/[^\n]*\n\s+\/\/[^\n]*\n\s+if \(kyroTutorOwns\(command\)\) \{\s+kyroTutorSentAt = Date\.now\(\);\s+await handleNexusUnifiedBrainRuntimeCommand\(String\(command \|\| ""\), \{ source: "typed", kyroDirect: true \}\);\s+return null;\s+\}\s+abortActiveAgentCommand\(\);/);
});

test("the app says on every turn whether a lesson is open, sends a lost stop again, and a lesson turn takes down any older workspace window behind it", () => {
  assert.match(app, /tutorLessonOpen: kyroTutorOpen\(\),\s+\/\/ Where the person is, so times like "7am" mean their own morning\./);
  assert.match(app, /timeZone: kyroDeviceTimeZone\(\), tutorLessonOpen: kyroTutorOpen\(\) \}\s+\}, 60000\);/);
  assert.match(app, /void kyroSilentTurn\("Stop tutoring"\)\.catch\(\(\) => new Promise\(resolve => setTimeout\(resolve, 1500\)\)\.then\(\(\) => kyroSilentTurn\("Stop tutoring"\)\)\.catch\(\(\) => \{\}\)\);/);
  assert.match(app, /if \(tutor\.active !== true\) kyroTutorLast = null;\s+\/\/[^\n]*\n\s+try \{ if \(document\.querySelector\("#nexus-workspace"\)\) closeNexusFunctionWindow\(\{ command: "" \}\); \} catch/);
});

test("the old keyword router (handleVoiceCommandCore, with its bare 'tutor' keyword) is not reached from the live voice or typed entry, so it was not the cause", () => {
  const start = app.indexOf("async function handleVoiceCommand(rawCommand");
  const end = app.indexOf("async function runBackendAgentCommand", start);
  const entry = app.slice(start, end);
  assert.match(entry, /handleNexusUnifiedBrainRuntimeCommand\(command/);
  assert.doesNotMatch(entry, /handleVoiceCommandCore\(/);
  const mentions = app.match(/handleVoiceCommandCore\(/g) || [];
  assert.equal(mentions.length, 1, "only its own definition: nothing calls it");
});
