"use strict";
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const test = require("node:test");
const assert = require("node:assert/strict");

// Found by running the open-everything sheet through a real voice session on the owner's own computer (speech into a live Realtime session, in the owner's Chrome), after typed checks had passed every test:
//  * the page took a spoken request over, drew the answer, and said nothing (the voice model had been cut off mid "I can't open documents from here");
//  * "close it" by voice did nothing, so each list or map stayed in front of everything after it;
//  * the older browser action controller opened its own Kenya-only map, a second music player and the maize disease pictures over the real ones;
//  * "open documents, please" and "I want to see my documents" were not understood;
//  * the voice model told people it could not open documents, files, maps or interviews.
const root = path.join(__dirname, "../..");
const app = fs.readFileSync(path.join(root, "public/app.js"), "utf8");
const controllerSource = fs.readFileSync(path.join(root, "public/browser-action-controller.js"), "utf8");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
const sliceFn = name => { const start = app.indexOf(name); assert.ok(start >= 0, name); return app.slice(start, app.indexOf("\n}\n", start) + 3); };
const sliceConst = name => { const start = app.indexOf(name); assert.ok(start >= 0, name); return app.slice(start, app.indexOf(";\n", start) + 2); };

test("a polite tail and 'I want to see' no longer stop a request from being understood", () => {
  const api = new vm.Script(`${sliceConst("const KYRO_OPEN_LEAD")}\n${sliceConst("const KYRO_OPEN_VERB")}\n${sliceFn("function kyroWithoutPoliteTail(")}\n${sliceConst("const KYRO_OPEN_DOCS")}\n${sliceConst("const KYRO_OPEN_MEDIA")}\n${sliceConst("const KYRO_OPEN_MAP =")}\n({ kyroWithoutPoliteTail, KYRO_OPEN_DOCS, KYRO_OPEN_MEDIA, KYRO_OPEN_MAP })`).runInNewContext({});
  const owns = (re, text) => re.test(api.kyroWithoutPoliteTail(text));
  for (const said of ["Open documents.", "Open documents, please.", "Open documents for me.", "Open my documents please", "I want to see my documents.", "Please open the documents.", "Kyro, show my docs right now."]) assert.ok(owns(api.KYRO_OPEN_DOCS, said), said);
  for (const said of ["Open the map now.", "Open US maps, please.", "Open U.S. maps."]) assert.ok(owns(api.KYRO_OPEN_MAP, said), said);
  assert.ok(owns(api.KYRO_OPEN_MEDIA, "I'd like to see pictures, please."));
  assert.equal(api.kyroWithoutPoliteTail("Open documents, please."), "Open documents");
  assert.equal(api.kyroWithoutPoliteTail("Thanks"), "Thanks", "a lone word is left alone");
  assert.ok(!owns(api.KYRO_OPEN_DOCS, "I want to see a doctor."), "other sentences are not taken");
});

function speaker({ active = true, sent = true } = {}) {
  const events = []; const interrupts = [];
  const sandbox = { realtimeVoiceActive: () => active, languageCode: () => "en", sendKyroRealtimeEvent: event => { events.push(event); return sent; },
    realtimeVoiceSession: { sdkController: { interrupt: () => interrupts.push(1) } }, Date, String, Number };
  vm.createContext(sandbox);
  vm.runInContext(`let kyroPageSpeaksUntil = 0; let kyroLastPageLine = { text: "", at: 0 };\n${sliceFn("function kyroSpeakPageLine(")}\nthis.api = { kyroSpeakPageLine, reset: () => { kyroLastPageLine = { text: "", at: 0 }; } };`, sandbox);
  return { api: sandbox.api, events, interrupts };
}

test("the page's own words are said by the live voice: the model is cut off, then told to say exactly them and nothing else", () => {
  const { api, events, interrupts } = speaker();
  assert.equal(api.kyroSpeakPageLine("Your saved documents, newest first: 1, Field Notes; 2, Business plan."), true);
  assert.equal(interrupts.length, 1, "what the model had begun is cut off first");
  assert.equal(events.length, 1); assert.equal(events[0].type, "response.create");
  assert.match(events[0].response.instructions, /Say exactly the following to the person, in en, clearly and warmly\. Add nothing and call no tool\. Say: Your saved documents, newest first: 1, Field Notes; 2, Business plan\./);
  assert.equal(events[0].response.tool_choice, "none"); assert.deepEqual(Array.from(events[0].response.output_modalities), ["audio"]);
  assert.equal(api.kyroSpeakPageLine("Your saved documents, newest first: 1, Field Notes; 2, Business plan."), true, "the same words arriving twice");
  assert.equal(events.length, 1, "are said once");
  assert.equal(api.kyroSpeakPageLine("   "), false);
  api.kyroSpeakPageLine("x".repeat(900)); assert.ok(events.at(-1).response.instructions.endsWith("x".repeat(500)) && !events.at(-1).response.instructions.includes("x".repeat(501)), "at most 500 characters");
  assert.equal(speaker({ active: false }).api.kyroSpeakPageLine("Hello"), false, "no live voice: nothing is sent (the page speaks the older way)");
  assert.equal(speaker({ sent: false }).api.kyroSpeakPageLine("Hello"), false, "a failed send is reported");
});

test("the page takes over spoken requests and a spoken 'close it', and says its words in this voice", () => {
  assert.match(app, /if \(speak && Date\.now\(\) < kyroPageSpeaksUntil && options\.source !== "kyro-voice-intake" && options\.kyroPageLine !== true\) \{\s*try \{ kyroSpeakPageLine\(kyroPlainText\(String\(message \|\| ""\)\)\); \}/, "setVoiceResponse hands the page's words to the live voice");
  assert.match(app, /if \(kyroHandleSpokenOpen\(trimmed, \{\}\)\) \{ kyroPageSpeaksUntil = Date\.now\(\) \+ 30000; return true; \}/, "a request the page took over opens the speaking window");
  const route = sliceFn("function routeKyroVoiceIntakeTranscript(");
  assert.match(route, /kyroPageSpeaksUntil = 0;[\s\S]*\/\/ "Close it"/, "the next thing said ends the window");
  assert.match(route, /window\.KyroDismissCommands\?\.parse\?\.\(trimmed\)[\s\S]*handleKyroDismissCommand\(trimmed, \{ source: "voice-transcript" \}\)\) return true;/, "a spoken 'close it' closes things, as a typed one does");
  assert.ok(route.indexOf("KyroDismissCommands") < route.indexOf("isResumeBuildRequest"), "before anything else is started");
  assert.match(app, /window\.KYRO_PAGE_OWNS_VISUALS = true;/);
});

function controller(owned) {
  const windowObj = { addEventListener: () => {}, dispatchEvent: () => {}, CustomEvent: function CustomEvent() {}, KYRO_PAGE_OWNS_VISUALS: owned };
  const sandbox = { window: windowObj };
  vm.createContext(sandbox);
  vm.runInContext(controllerSource, sandbox);
  return sandbox.window.NexusBrowserActionController;
}
const heard = (transcript, id) => ({ transcript, transcriptId: id, sessionId: "s", role: "user", isFinal: true });

test("when the page owns weather, music and the visual cards, the older controller leaves them alone; on its own it still opens them", () => {
  const owned = controller(true); const older = controller(undefined);
  for (const [i, said] of ["Play some music", "Open the map of Kenya", "What is the weather in Kisumu", "Show me pictures of maize"].entries()) {
    const result = owned.handleFinalUserTranscript(heard(said, "a" + i), null);
    assert.equal(result.handled, false, said + " (page owns it)");
    assert.ok(!result.musicPlayerRequested && !result.weatherCardRequested && !result.visualIntent, said);
    assert.ok(older.isMusicRequest(said) || older.isWeatherRequest(said) || older.getVisualExperienceIntent(said), said + " (the controller on its own still knows these, as before)");
  }
});

test("the voice model is told never to say it cannot open documents, maps, interviews or business records", () => {
  const instructions = server.slice(server.indexOf("function openAiRealtimeInstructions("), server.indexOf("function nexusRealtimeCallableToolSchemas("));
  assert.match(instructions, /Never say you cannot open documents, files, lists, checklists, notes, reminders, maps, pictures, videos, interviews, a resume or business records/);
  assert.match(instructions, /call the matching tool with their complete words instead of explaining what you cannot do/);
});
