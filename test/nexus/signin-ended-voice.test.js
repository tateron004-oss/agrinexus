"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");

// Found when the owner tested in one tab for hours: the microphone kept working while documents, lists, music and maps all "failed". The sign-in had ended (a day at most, twelve hours idle), every request
// was refused, and the voice model was told "Kyro is showing it on the screen by itself. Say nothing now", so nothing said that the sign-in had ended.
function sandbox({ signedIn = true } = {}) {
  const spoken = [];
  const context = { spoken, data: signedIn ? { user: { role: "Standard User" } } : null, kyroPageSpeaksUntil: 0, Date,
    document: { getElementById: () => ({}), querySelector: () => null }, getComputedStyle: () => ({ display: "block" }),
    kyroShowSessionEndedScreen: () => true, setVoiceResponse: (line, speak, options) => spoken.push({ line, speak, options }) };
  const source = app.slice(app.indexOf("let kyroSignInEnded = false;"), app.indexOf("function kyroShowResultScreen("));
  vm.runInNewContext(`${source}\nthis.note = kyroNoteSessionEnded; this.say = kyroSaySignInEnded; this.ended = () => kyroSignInEnded;`, context);
  return context;
}

test("when the server refuses a request because the sign-in ended, the person is told aloud once, and the page remembers it", () => {
  const page = sandbox();
  assert.equal(page.note("/api/nexus/runtime/documents?limit=5"), true);
  assert.equal(page.ended(), true);
  assert.equal(page.spoken.length, 1);
  assert.equal(page.spoken[0].speak, true);
  assert.equal(page.spoken[0].line, "Your sign-in has ended, so I cannot open or save anything. Please tap Sign in again on the screen.");
  assert.ok(page.kyroPageSpeaksUntil > Date.now(), "the page speaks it in the live voice, not the model");
  page.note("/api/nexus/runtime/behavior/turn"); page.note("/api/nexus/runtime/tasks");
  assert.equal(page.spoken.length, 1, "not repeated for every refused request");
});

test("a wrong password and a person who was never signed in are not 'a sign-in that ended'", () => {
  const page = sandbox();
  assert.equal(page.note("/api/login"), false); assert.equal(page.ended(), false); assert.equal(page.spoken.length, 0);
  const out = sandbox({ signedIn: false });
  assert.equal(out.note("/api/nexus/runtime/documents"), false); assert.equal(out.ended(), false); assert.equal(out.spoken.length, 0);
});

test("after the sign-in ended, the voice tool answers with one plain sentence, and anything said is answered with it, instead of 'Kyro is showing it, say nothing'", () => {
  assert.match(app, /async function callNexusOpenAiRealtimeTool\(toolName, args = \{\}\) \{\s+const command = String\(args\.command \|\| args\.query \|\| ""\)\.trim\(\);[^]*?kyroDismissStaleWorkspace\(command\);\s+\/\/ The sign-in has ended[^\n]*\n\s+if \(typeof kyroSignInEnded !== "undefined" && kyroSignInEnded\) return \{ ok: false, status: "signin_ended", response: `The person's sign-in has ended[^`]*Tell them exactly this in one short sentence: \$\{KYRO_SIGNIN_ENDED_LINE\}`, executionVerified: false, blockedReason: "signin_ended" \};/);
  assert.match(app, /function routeKyroVoiceIntakeTranscript\(\{ transcript, utteranceId, source \}\) \{\s+const trimmed = String\(transcript \|\| ""\)\.trim\(\);\s+\/\/ The sign-in has ended[^\n]*\n\s+if \(trimmed && typeof kyroSignInEnded !== "undefined" && kyroSignInEnded\) \{ kyroSaySignInEnded\(\); return true; \}/);
});

// Found on the owner's real account: typing "Open documents." (no "my") went to the AI planner, which saved a new document called "Open documents request" instead of listing the documents.
test("'Open documents.' lists the documents with or without 'my', and never makes a document of the request", async () => {
  const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
  const listed = [{ title: "Sales Plan" }, { title: "Harvest Notes" }];
  const planner = new OpenEndedPlanner({ model: { plan: async () => { throw new Error("the AI model must not be asked"); } }, tools: { list: async () => [] }, applications: { list: () => [] },
    memory: { recent: async () => [], search: async () => [] }, documents: { list: async () => listed } });
  for (const say of ["Open documents.", "Open my documents.", "Show documents", "Show the documents", "List my files", "Open files"]) {
    const plan = await planner.plan({ command: { text: say, tenantId: "t1", actorId: "u1", locale: "en" }, context: { timeZone: "America/Chicago" } });
    assert.equal(plan.application, "conversation", say); assert.match(plan.response, /^Your saved documents, newest first: 1, Sales Plan; 2, Harvest Notes\./, say); assert.equal(plan.steps.length, 0, say);
  }
});
