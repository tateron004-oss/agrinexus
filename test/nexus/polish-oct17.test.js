"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { createRecentSubmissions } = require("../../nexus/intake/recent-submissions.js");
const wellness = require("../../public/nexus-mental-health-behavioral-wellness.js");

const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
const adapter = fs.readFileSync(path.join(__dirname, "../../nexus/compat/server-runtime-adapter.js"), "utf8");

const who = { tenantId: "t1", userId: "u1", intakeId: "resume" };
const gate = () => { let release; const open = new Promise(resolve => { release = resolve; }); return { open, release }; };

test("the same finished interview sent twice is saved once, and the repeat gets the first answer", async () => {
  const submissions = createRecentSubmissions();
  let saved = 0;
  const run = async () => { saved += 1; return { completed: true, taskId: `task-${saved}` }; };
  const first = await submissions.once({ ...who, values: { name: "Grace Wanjiku", skills: "sewing, cooking" } }, run);
  const again = await submissions.once({ ...who, values: { skills: " sewing, cooking ", name: "Grace Wanjiku" } }, run);
  assert.equal(saved, 1);
  assert.deepEqual(again, first);
});

test("a repeat that arrives while the first is still being saved shares it instead of starting another", async () => {
  const submissions = createRecentSubmissions();
  const { open, release } = gate();
  let saved = 0;
  const run = async () => { saved += 1; await open; return { completed: true, taskId: "task-1" }; };
  const first = submissions.once({ ...who, values: { name: "Ann" } }, run);
  const second = submissions.once({ ...who, values: { name: "Ann" } }, run);
  release();
  assert.deepEqual(await first, await second);
  assert.equal(saved, 1);
});

test("different answers, a different person, and a failed or unfinished save are never treated as a repeat", async () => {
  const submissions = createRecentSubmissions();
  let saved = 0;
  const run = async () => { saved += 1; return { completed: true }; };
  await submissions.once({ ...who, values: { name: "Ann" } }, run);
  await submissions.once({ ...who, values: { name: "Ann", skills: "driving" } }, run);
  await submissions.once({ ...who, userId: "u2", values: { name: "Ann" } }, run);
  assert.equal(saved, 3);
  let tries = 0;
  const flaky = async () => { tries += 1; if (tries === 1) throw new Error("database busy"); return { completed: true }; };
  await assert.rejects(() => submissions.once({ ...who, values: { name: "Bea" } }, flaky), /database busy/);
  assert.deepEqual(await submissions.once({ ...who, values: { name: "Bea" } }, flaky), { completed: true });
  let waiting = 0;
  const unfinished = async () => { waiting += 1; return { completed: false }; };
  await submissions.once({ ...who, values: { name: "Cy" } }, unfinished);
  await submissions.once({ ...who, values: { name: "Cy" } }, unfinished);
  assert.equal(waiting, 2);
});

test("a repeat after the window is a new save", async () => {
  let clock = 1000;
  const submissions = createRecentSubmissions({ windowMs: 60000, now: () => clock });
  let saved = 0;
  const run = async () => { saved += 1; return { completed: true }; };
  await submissions.once({ ...who, values: { name: "Dee" } }, run);
  clock += 61000;
  await submissions.once({ ...who, values: { name: "Dee" } }, run);
  assert.equal(saved, 2);
});

test("the interview route goes through the guard", () => {
  assert.match(adapter, /recentIntakes\.once\(\{ tenantId: context\.tenantId, userId: context\.userId, intakeId: body\.intakeId, values: body\.values \|\| \{\} \},\s+\(\) => active\.behavior\.intakeTurn\(/);
});

test("a question about a child being abused gets the Childhelp number, and an adult one does not", () => {
  for (const say of ["I think a child is being abused next door, who do I call?", "I am worried about child abuse", "My daughter is being abused"]) {
    const reply = wellness.buildSupportPacket(say, {}).userVisibleStatus;
    assert.match(reply, /Childhelp National Child Abuse Hotline is 1-800-422-4453/, say);
    assert.match(reply, /immediate danger, contact local emergency services/, say);
  }
  for (const say of ["I am being abused by my partner", "my mother is being neglected"]) {
    assert.doesNotMatch(wellness.buildSupportPacket(say, {}).userVisibleStatus, /Childhelp|422-4453/, say);
  }
});

test("the voice model is told to stay silent on a time or date question, which the page answers itself", () => {
  assert.match(server, /When the user asks what time or what date it is[^\n]{0,200}do not call any tool and say nothing at all: the page answers by itself[^\n]{0,120}Never say you cannot see a clock/);
});

// Found by the second full voice run: a question asked right after a long answer drew its card, the model's reply to it began reading ten seconds later (the earlier answer was still being read), and the idle return
// took the card down before it was read.
const vm = require("node:vm");
const appSource = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
function idleSnapshot({ responseInProgress = false, startedAgoMs = 0, speaking = false, openReplies = [] }) {
  const source = appSource.slice(appSource.indexOf("function kyroAutoReturnSnapshot()"), appSource.indexOf("function kyroAutoReturnTick()"));
  const context = { Date, kyroOpenReplies: openReplies, kyroLastAssistantSpokeAt: 0, kyroLastActivityAt: 0, experienceMode: "user", nexusVoiceSession: { assistantSpeaking: speaking, userSpeaking: false },
    realtimeVoiceSession: { responseInProgress, responseStartedAt: Date.now() - startedAgoMs }, kyroAnswerShowing: () => true, kyroWorkOpen: () => false,
    nexusPendingBehaviorConfirmation: null, pendingAgentClarification: null, kyroActiveVoiceIntake: null,
    document: { activeElement: null, body: { classList: { contains: () => true } }, querySelector: () => null } };
  vm.runInNewContext(`${source}\nthis.snapshot = kyroAutoReturnSnapshot;`, context);
  return context.snapshot();
}

test("a reply the model has started, but whose sound has not begun, keeps the answer card up; one that never finished does not hold it for ever", () => {
  assert.equal(idleSnapshot({ responseInProgress: true, startedAgoMs: 3000 }).assistantSpeaking, true);
  assert.equal(idleSnapshot({ responseInProgress: false, startedAgoMs: 3000 }).assistantSpeaking, false);
  assert.equal(idleSnapshot({ responseInProgress: true, startedAgoMs: 61000 }).assistantSpeaking, false, "a missed 'done' is given up on after a minute");
  assert.equal(idleSnapshot({ responseInProgress: false, startedAgoMs: 0, speaking: true }).assistantSpeaking, true);
  assert.match(appSource, /realtimeVoiceSession\.responseInProgress = true;\s+realtimeVoiceSession\.responseStartedAt = Date\.now\(\);/);
});

test("a reply the voice service has opened keeps the answer card up until its done arrives, as a line the page reads aloud never raises the audio flag", () => {
  assert.equal(idleSnapshot({ openReplies: [Date.now() - 5000] }).assistantSpeaking, true);
  assert.equal(idleSnapshot({ openReplies: [] }).assistantSpeaking, false);
  assert.equal(idleSnapshot({ openReplies: [Date.now() - 61000] }).assistantSpeaking, false, "a done that never arrives is given up on after a minute");
  const source = appSource.slice(appSource.indexOf("let kyroOpenReplies = [];"), appSource.indexOf("function kyroAutoReturnSnapshot()"));
  const context = { Date };
  vm.runInNewContext(`${source}\nthis.note = kyroNoteReplyEvent; this.open = () => kyroOpenReplies.length;`, context);
  context.note("response.created"); context.note("response.created"); assert.equal(context.open(), 2);
  context.note("response.done"); assert.equal(context.open(), 1);
  context.note("response.done"); context.note("response.done"); assert.equal(context.open(), 0, "an extra done never goes below none");
  context.note("response.output_audio_transcript.done"); assert.equal(context.open(), 0, "other events are ignored");
  assert.match(appSource, /try \{ kyroNoteReplyEvent\(eventType\); \} catch/, "the transport events feed it");
});

// Found by the full voice run's timeline: the page read a guide answer aloud ("I cannot look up addresses myself, but the official finders do it by ZIP code ..."), the refusal watcher took those words for the voice model
// refusing, and when the next question began the page "recovered" by answering the PREVIOUS question again.
function refusalApi() {
  const calls = { typed: [], takeover: 0 };
  const lineLead = appSource.slice(appSource.indexOf("let kyroRecentPageLines = [];"), appSource.indexOf("function kyroSpeakPageLine("));
  const start = appSource.indexOf("// ---- When the voice model refuses something the page can do ----");
  const block = appSource.slice(start, appSource.indexOf("function speakKyroIntakeLine(", start));
  const plain = (() => { const s = appSource.indexOf("function kyroPlainText("); return appSource.slice(s, appSource.indexOf("\n}\n", s) + 3); })();
  const sandbox = { kyroActiveVoiceIntake: null, Date, String, Array, Object, Promise, JSON, setTimeout, kyroTakeOverTurn: () => { calls.takeover++; }, kyroSpeakPageLine: () => true,
    handleNexusUnifiedBrainRuntimeCommand: async (text, options) => { calls.typed.push([text, options.source]); return true; } };
  vm.createContext(sandbox);
  vm.runInContext(`let kyroPageSpeaksUntil = 0;\n${plain}\n${lineLead}\n${block}\nthis.api = { kyroWatchForRefusal, setHeard: v => { kyroHeard = v; }, pageSaid: line => { kyroRecentPageLines.push({ lead: kyroLineLead(line), at: Date.now() }); }, seen: () => kyroRefusalSeenAt };`, sandbox);
  return { api: sandbox.api, calls };
}
const heardJustNow = text => ({ key: text.toLowerCase(), text, at: Date.now() - 500, recovered: false });
const settleSoon = () => new Promise(resolve => setImmediate(resolve));

test("a guide answer the page reads aloud that happens to say 'I cannot ...' is not taken for the voice model refusing, so the previous question is not answered again", async () => {
  const line = "For ZIP code 30303: I cannot look up addresses myself, but the official finders do it by ZIP code. At sba.gov/local-assistance, enter your ZIP code to find your nearest centre.";
  const { api, calls } = refusalApi();
  api.setHeard(heardJustNow("Find a SCORE mentor near zip code 30303."));
  api.pageSaid(line);
  api.kyroWatchForRefusal("response.created", {});
  for (const piece of ["For ZIP", " code 30303", ": I cannot", " look up addresses myself", ", but the official finders do it by ZIP code."]) api.kyroWatchForRefusal("response.output_audio_transcript.delta", { delta: piece });
  api.kyroWatchForRefusal("response.output_audio_transcript.done", { transcript: line });
  await settleSoon();
  assert.equal(api.seen(), 0, "not a refusal");
  assert.equal(calls.typed.length, 0, "nothing is answered a second time");
});

test("the model's own refusal is still caught, including one that begins like a line the page read", async () => {
  const { api, calls } = refusalApi();
  api.pageSaid("I cannot look up addresses myself, but the official finders do it by ZIP code.");
  api.setHeard(heardJustNow("What's on my to-do list?"));
  api.kyroWatchForRefusal("response.created", {});
  api.kyroWatchForRefusal("response.output_audio_transcript.delta", { delta: "I can’t see a current to-do list from here." });
  await settleSoon();
  assert.equal(calls.typed.length, 1, "a different sentence is judged as before");
  const second = refusalApi();
  second.api.pageSaid("I cannot look up addresses myself, but the official finders do it by ZIP code.");
  second.api.setHeard(heardJustNow("What's on my to-do list?"));
  second.api.kyroWatchForRefusal("response.created", {});
  second.api.kyroWatchForRefusal("response.output_audio_transcript.delta", { delta: "I cannot" });
  assert.equal(second.api.seen(), 0, "so far it could be the page's line");
  second.api.kyroWatchForRefusal("response.output_audio_transcript.delta", { delta: " see a current to-do list from here." });
  await settleSoon();
  assert.equal(second.calls.typed.length, 1, "once the words differ from the page's line it is a refusal");
});

test("the idle watcher tells the timer when a list card is showing and when a hand is on the screen, and a scroll, a click, focus and a moving pointer all count as use", () => {
  const snapshot = appSource.slice(appSource.indexOf("function kyroAutoReturnSnapshot()"), appSource.indexOf("function kyroAutoReturnTick()"));
  assert.match(snapshot, /listShowing: Boolean\(document\.querySelector\("\[data-kyro-result=\\"list\\"\], \[data-kyro-result=\\"places\\"\]"\)\)/);
  assert.match(snapshot, /handOnScreen: .*\[data-kyro-result\]:hover, \[data-kyro-result\]:focus-within/);
  assert.match(appSource, /for \(const name of \["pointerdown", "keydown", "touchstart", "input", "wheel", "scroll", "click", "focusin"\]\) document\.addEventListener\(name, kyroNoteActivity/);
  assert.match(appSource, /document\.addEventListener\("pointermove", \(\) => \{ const now = Date\.now\(\); if \(now - kyroPointerNoted > 1000\)/);
});
