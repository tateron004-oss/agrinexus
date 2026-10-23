"use strict";
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const test = require("node:test");
const assert = require("node:assert/strict");

// Found by speaking OFF-SCRIPT wording into a real voice session (the same words the sheet says, said another way):
//  * "I'd like to watch a video on how to prune tomatoes" went to the live-knowledge tool and came back as text, not videos;
//  * "Play something relaxing" found nothing to play, and the model said "It's playing now" anyway (the page stays silent during a live voice, so the player's own words never reached the person);
//  * "Turn the music off" was not understood;
//  * "Take me to the marketplace" showed a developer-style "workflow plan prepared" instead of the trade screen;
//  * "I want to look at my notes" was answered "Your notes should open on the screen now" with nothing opened.
const root = path.join(__dirname, "../..");
const app = fs.readFileSync(path.join(root, "public/app.js"), "utf8");
const Media = require(path.join(root, "public/kyro-media-commands.js"));
const sliceConst = name => { const start = app.indexOf(name); assert.ok(start >= 0, name); return app.slice(start, app.indexOf(";\n", start) + 2); };
const sliceFn = name => { const start = app.indexOf(name); assert.ok(start >= 0, name); return app.slice(start, app.indexOf("\n}\n", start) + 3); };

test("'I'd like to watch a video on ...' and 'can I see pictures of ...' are requests to see videos and pictures; bare 'watch' and 'play' are left to the player", () => {
  const kind = new vm.Script(`${sliceConst("const KYRO_VISUAL_REQUEST")}\n${sliceConst("const KYRO_VISUAL_HEALTH")}\n${sliceFn("function kyroVisualRequestKind(")}\nkyroVisualRequestKind`).runInNewContext({});
  assert.equal(kind("I'd like to watch a video on how to prune tomatoes."), "videos");
  assert.equal(kind("I’d like to watch a video on how to prune tomatoes."), "videos");
  assert.equal(kind("Can I see some pictures of tomato plants?"), "images");
  assert.equal(kind("I want to look at images of a maize armyworm"), "images");
  assert.equal(kind("Show me pictures of maize."), "images");
  assert.equal(kind("Let me watch videos about composting"), "videos");
  assert.equal(kind("Play a video about drip irrigation"), null, "left to the player");
  assert.equal(kind("Watch it on YouTube"), null);
  assert.equal(kind("I'd like to watch the news"), null);
  assert.equal(kind("I want to see pictures of my child's rash"), null, "health stays with the health flow");
});

test("'turn the music off' stops it, and a mood on its own ('play something relaxing') is searched as music; artists and other requests are unchanged", () => {
  assert.equal(Media.parse("Turn the music off").type, "control"); assert.equal(Media.parse("Turn the music off").control, "close");
  assert.equal(Media.parse("switch the radio off.").control, "close");
  assert.equal(Media.parse("turn off the music").control, "close");
  const relaxing = Media.parse("Play something relaxing");
  assert.equal(relaxing.type, "play"); assert.equal(relaxing.query, "relaxing music");
  assert.equal(Media.parse("Play something upbeat").query, "upbeat music");
  assert.equal(Media.parse("Play some music").query, "", "unchanged");
  assert.equal(Media.parse("Play Burna Boy").query, "Burna Boy");
  assert.equal(Media.parse("Play something by Burna Boy").query, "Burna Boy");
  assert.equal(Media.parse("Play relaxing jazz").query, "relaxing jazz");
});

function wording() {
  const consts = ["const KYRO_OPEN_LEAD", "const KYRO_OPEN_VERB", "const KYRO_OPEN_DOCS", "const KYRO_LIST_OF", "const KYRO_OPEN_MAP =", "const KYRO_OPEN_APP"].map(sliceConst).join("\n");
  return new vm.Script(`${consts}\n({ KYRO_OPEN_DOCS, KYRO_LIST_OF, KYRO_OPEN_MAP, KYRO_OPEN_APP })`).runInNewContext({});
}

test("natural ways of asking to open or look at a list, a map or an application are understood", () => {
  const w = wording();
  for (const said of ["I want to look at my notes.", "Can I see my reminders?", "Let me check my checklists", "I'd like to view my documents.", "Could I see my to-do list?", "Check my notes", "Read my reminders."]) assert.ok(w.KYRO_LIST_OF.test(said) || w.KYRO_OPEN_DOCS.test(said), said);
  for (const said of ["Take me to the marketplace.", "Take me to AgriTrade", "Bring me to the weather", "Switch to health", "Navigate to the pharmacy", "Can I see the weather"]) assert.ok(w.KYRO_OPEN_APP.test(said), said);
  assert.ok(w.KYRO_OPEN_MAP.test("I want to look at the map."));
  assert.ok(w.KYRO_OPEN_MAP.test("Take me to the map of Kenya."));
  for (const said of ["I want to look at my sick child.", "Check my blood pressure", "Take me to the doctor", "Read my mind", "Can I see a doctor"]) assert.ok(!w.KYRO_LIST_OF.test(said) && !w.KYRO_OPEN_APP.test(said) && !w.KYRO_OPEN_DOCS.test(said), said + " is not a request to open one of these");
});

test("a claim that something is on the screen, made with no tool called, is answered like a refusal; announcements and answers are not", () => {
  const start = app.indexOf("// ---- When the voice model refuses something the page can do ----");
  const block = app.slice(start, app.indexOf("function speakKyroIntakeLine(", start));
  const claim = new vm.Script(`${block}\nKYRO_FALSE_CLAIM`).runInNewContext({ Date, String });
  for (const said of ["Your notes should open on the screen now.", "I’ve opened your notes.", "I have pulled up your reminders.", "Your list is now on the screen.", "It should appear on your screen in a moment."]) assert.ok(claim.test(said), said);
  for (const said of ["One moment, I’ll pull up your notes.", "Here are your notes.", "Let me open the map for you.", "Your notes: pump needs a new seal.", "I’m looking for videos."]) assert.ok(!claim.test(said), said);
  assert.match(app, /KYRO_REFUSAL\.test\(kyroRefusalBuf\.slice\(0, 160\)\) \|\| KYRO_FALSE_CLAIM\.test\(kyroRefusalBuf\.slice\(0, 200\)\)/, "watched in the same place");
});

test("what the player says about a spoken music request is given to the model to say, so it cannot claim 'it's playing now' when nothing was found", async () => {
  const start = app.indexOf("async function callNexusOpenAiRealtimeTool(toolName, args = {}) {");
  const end = app.indexOf("\nfunction handleOpenAiAgentsRealtimeEvent(");
  const run = async ({ said, handled }) => {
    let fetched = 0;
    const sandbox = {
      KYRO_GOVERNED_VOICE_TOOLS: new Set(), nexusPendingBehaviorConfirmation: null, kyroDismissStaleWorkspace: () => {}, kyroActiveVoiceIntake: null, kyroVoiceIntakeOwnsTurn: () => false, kyroIntakeBusyLine: () => "",
      routeKyroVoiceIntakeTranscript: () => false, kyroVisualRequestKind: () => null, kyroShowResultScreen: () => false, kyroPlainText: text => String(text).replace(/\*\*/g, ""),
      kyroMediaCommand: async () => { said.forEach(line => sandbox.pushCapture(line)); return handled; },
      kyroDeviceTimeZone: () => "UTC", languageCode: () => "en", nexusGenesisVoiceDebugLog: () => {}, Date, String, Promise,
      window: { setTimeout, KyroMediaCommands: { parse: text => (/relaxing/.test(text) ? { type: "play" } : null) }, KyroDismissCommands: { parse: () => null } },
      kyroFetchWithTimeout: async () => { fetched += 1; throw new Error("stop here: the server was asked"); }, kyroToolFailureResult: () => ({ ok: false, status: "failed", response: "stopped" })
    };
    vm.createContext(sandbox);
    vm.runInContext(`let kyroVoiceCapture = null; let kyroToolCalledAt = 0; let kyroConfirmedAt = 0;\n${app.slice(start, end)}\nthis.run = callNexusOpenAiRealtimeTool; this.pushCapture = line => { if (kyroVoiceCapture) kyroVoiceCapture.push(line); };`, sandbox);
    const result = await sandbox.run("nexus_everyday_records", { command: "Play something relaxing." });
    return { result, fetched };
  };
  const notFound = await run({ said: ["I could not find anything to play for relaxing. You can also say: play relaxing on YouTube."], handled: true });
  assert.equal(notFound.fetched, 0); assert.equal(notFound.result.ok, true);
  assert.match(notFound.result.response, /^I could not find anything to play for relaxing\. You can also say: play relaxing on YouTube\. Tell the person exactly this, in one short sentence\. Do not say anything is playing unless these words say so\.$/);
  assert.equal(notFound.result.clientAction.type, "media-play");
  const quiet = await run({ said: [], handled: true });
  assert.equal(quiet.result.response, "Kyro's player is playing it and said so. Say nothing more.", "no words from the player: as before");
  const notHandled = await run({ said: [], handled: false });
  assert.equal(notHandled.fetched, 1, "the player did not take it: the server is asked as before");
});
