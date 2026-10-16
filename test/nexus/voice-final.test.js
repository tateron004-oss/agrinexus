"use strict";
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const test = require("node:test");
const assert = require("node:assert/strict");

// The last of what a real-voice, off-script run found: "write a note that says call the vet tomorrow" was made a reminder; a picture search that finds nothing it may show was told to the person as a generic failure
// (and the pictures asked for "a professional basketball team" were never found); the speech-to-text heard "Close it" as "Flows it", "Kisumu" as "Hisumu", "maize" as "maze".
const root = path.join(__dirname, "../..");
const { readRequest } = require(path.join(root, "nexus/personal/items.js"));
const app = fs.readFileSync(path.join(root, "public/app.js"), "utf8");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");

test("'write / create / record / type a note ...' is a note, even when the words include a day; reminders still need the word remind", () => {
  const today = "2026-10-15";
  for (const [said, text] of [
    ["Write a note that says call the vet tomorrow.", "call the vet tomorrow"],
    ["Write me a note saying the pump needs a seal", "pump needs a seal"],
    ["Create a note about the fence on Friday", "fence on Friday"],
    ["Record a note: sold ten bags", "sold ten bags"],
    ["Make a note that the tank is leaking", "tank is leaking"]]) {
    const request = readRequest(said, today);
    assert.equal(request?.action, "note-add", said);
    assert.match(request.text, new RegExp(text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"), said);
  }
  assert.notEqual(readRequest("Remind me to call the vet tomorrow", today)?.action, "note-add");
});

test("a picture or video search that found nothing it may show is said as that, with a way forward; any other failure keeps the old line", async () => {
  const start = app.indexOf("async function kyroShowVisualRequest(");
  const fn = app.slice(start, app.indexOf("\n}\n", start) + 3);
  const run = async error => {
    const sandbox = { kyroCanonicalVisualRequest: text => text, handleNexusUnifiedBrainRuntimeCommand: async () => { if (error) throw new Error(error); return true; }, window: { setTimeout: callback => callback() }, document: { querySelectorAll: () => ({ length: 0 }) }, Promise, String };
    vm.createContext(sandbox); vm.runInContext(fn + "\nthis.run = kyroShowVisualRequest;", sandbox);
    return sandbox.run("Show me images of a professional basketball team", "images");
  };
  const none = await run("Image search returned no verifiable images.");
  assert.equal(none.ok, false); assert.equal(none.blockedReason, "visual-results-not-shown");
  assert.match(none.response, /I looked, but I could not find any pictures of that which I am allowed to show\. Tell the person that plainly in one short sentence, and ask them to try a different subject/);
  const other = await run("The request timed out");
  assert.match(other.response, /^I could not put pictures on the screen just now\./);
  assert.match((await run("")).response, /^I could not put pictures on the screen just now\./);
});

test("the speech-to-text is given a short hint for the assistant's name, the towns and crops people name, and the short commands", () => {
  const start = server.indexOf("function openAiRealtimeSessionConfig(");
  const config = server.slice(start, server.indexOf("function openAiAgentsRealtimeClientConfig(", start));
  const hint = /prompt: "([^"]+)"/.exec(config);
  assert.ok(hint, "a prompt in the transcription settings");
  for (const word of ["Kyro", "Close it", "Close the screen", "Kisumu", "Nairobi", "Stockton", "Sacramento", "Maize"]) assert.ok(hint[1].includes(word), word);
  assert.ok(hint[1].length < 220, "short: a long list can be echoed back on silence");
  assert.match(config, /language: String\(language \|\| "en"\)\.slice\(0, 12\),\s*\/\/[^\n]*\n\s*prompt:/, "next to the language, in the same transcription settings");
});

// Found on the same run, on the live build after the wording round:
// "upload a picture of my crop" was searched as pictures (a gallery of strangers), "open the learning section" showed a developer-style "workflow plan prepared", the heading of the videos asked for was the whole
// sentence ("videos I found about I'd like to watch..."), and "no thanks, do not do that" to a question the page asked was not understood as a no (the question stayed open).
const sliceConst = name => { const start = app.indexOf(name); assert.ok(start >= 0, name); return app.slice(start, app.indexOf(";\n", start) + 2); };
const sliceFn = name => { const start = app.indexOf(name); assert.ok(start >= 0, name); return app.slice(start, app.indexOf("\n}\n", start) + 3); };

test("'upload a picture of my crop' is the upload screen; 'open the learning section' and 'the trade page' open the application", () => {
  const w = new vm.Script(sliceConst("const KYRO_OPEN_LEAD") + sliceConst("const KYRO_OPEN_UPLOAD") + sliceConst("const KYRO_OPEN_APP") + "({ KYRO_OPEN_UPLOAD, KYRO_OPEN_APP })").runInNewContext({});
  for (const said of ["Upload a picture of my crop.", "Upload a photo of the leaf", "I want to attach a document for my loan.", "Upload a PDF", "Open uploads"]) assert.ok(w.KYRO_OPEN_UPLOAD.test(said), said);
  for (const said of ["Upload speed test", "How do I upload?", "Upload a picture and then tell me about the weather in Nairobi tomorrow morning please"]) assert.ok(!w.KYRO_OPEN_UPLOAD.test(said), said);
  for (const said of ["Open the learning section.", "Open the trade page", "Go to the health tab", "Take me to the marketplace", "Show me the business area", "Open the pharmacy screen"]) assert.ok(w.KYRO_OPEN_APP.test(said), said);
  assert.ok(!w.KYRO_OPEN_APP.test("Open the learning section and then call my brother"));
});

test("the subject of a spoken request for videos or pictures is the subject, not the whole sentence", () => {
  const canon = new vm.Script(sliceConst("const KYRO_VISUAL_REQUEST") + "\n" + sliceFn("function kyroCanonicalVisualRequest(") + "\nkyroCanonicalVisualRequest").runInNewContext({});
  assert.equal(canon("I'd like to watch a video on how to prune tomatoes.", "videos"), "Show me videos about how to prune tomatoes");
  assert.equal(canon("Show me some pictures of tomato plants.", "images"), "Show me pictures of tomato plants");
  assert.equal(canon("Find a picture of a maize armyworm", "images"), "Show me pictures of a maize armyworm");
  assert.equal(canon("Can I see videos about drip irrigation?", "videos"), "Show me videos about drip irrigation");
  assert.equal(canon("Show me pictures", "images"), "Show me pictures", "no subject: left as said");
  assert.equal(canon("What is the weather", "images"), "What is the weather");
  assert.match(app, /handleNexusUnifiedBrainRuntimeCommand\(kyroCanonicalVisualRequest\(command, kind\), \{ source: "openai-realtime-tool" \}\)/);
});

test("yes and no the way people say them are understood; a sentence that merely contains yes or no is still a new request", () => {
  const sets = sliceConst("const NEXUS_CONFIRMATION_AFFIRM_PHRASES") + sliceConst("const NEXUS_CONFIRMATION_DECLINE_PHRASES");
  const api = new vm.Script(sets + sliceFn("function normalizeNexusConfirmationReplyText(") + sliceFn("function detectNexusPendingConfirmationReply(") + "\ndetectNexusPendingConfirmationReply").runInNewContext({});
  for (const said of ["Yes.", "Yes, please.", "Well, yes please!", "Okay, go ahead.", "Sure, go ahead", "Yes do it", "Go for it", "That\u2019s fine", "Please go ahead", "Yes, confirm it."]) assert.equal(api(said), "approve", said);
  for (const said of ["No.", "No, thanks.", "No thanks, do not do that.", "No, don\u2019t.", "Don't do that", "Not yet", "Maybe later", "Cancel that.", "Forget it", "No thank you", "I don't want to"]) assert.equal(api(said), "decline", said);
  for (const said of ["Yes I would like a pharmacy near Stockton", "No I want the map", "Stop the music please", "Do it tomorrow at nine", "Thank you", "Hello", ""]) assert.equal(api(said), null, said);
});

test("a governed answer that takes too long says so instead of leaving the voice silent, and does not ask the old tool as well", async () => {
  const sandbox = { handleNexusUnifiedBrainRuntimeCommand: () => new Promise(() => {}), kyroPlainText: text => text, setTimeout: callback => { callback(); return 1; }, Promise, String, Array };
  vm.createContext(sandbox);
  vm.runInContext("let kyroVoiceCapture = null;\n" + sliceFn("async function kyroAnswerLikeTyped(") + "\nthis.run = kyroAnswerLikeTyped;", sandbox);
  const result = await sandbox.run("Find me a pharmacy near Stockton");
  assert.equal(result.ok, true); assert.match(result.response, /That is taking longer than usual and will appear on the screen when it is ready\./);
  assert.ok(app.includes('"nexus_document_export", "nexus_workflow"]'), "plan-style requests answer through the governed route too");
});

test("the offline screen says what it shows (by voice the model had been cut off and the screen said nothing)", () => {
  const fn = sliceFn("function kyroShowOfflineScreen(");
  assert.match(fn, /setVoiceResponse\(`\$\{t\.status\} \$\{t\.count\}`, true, \{ allowHandoff: false, source: "kyro-open" \}\)/);
  assert.ok(fn.indexOf("document.body.append(screen)") < fn.indexOf("setVoiceResponse("), "after the screen is on the page");
});

// The last round of the live run: screens with buttons to tap went back to the orb after ten seconds, the voice-to-text heard "Build my resume" as "Builds my resume", and the page's own spoken lines became turns of the conversation.
test("the screens with links and buttons to tap stay until they are dismissed", () => {
  for (const name of ["function kyroAddListingLinks(", "async function kyroAddResumeButtons("]) {
    assert.match(sliceFn(name), /screen\.setAttribute\("data-kyro-keep", "true"\)/, name);
  }
});

test("'Builds my resume' and the other forms of the verb start the résumé form; resuming music does not", () => {
  const forms = require(path.join(root, "public/kyro-intake-forms.js"));
  for (const said of ["Builds my resume", "Billed my resume", "Creates my resume", "Makes me a resume", "Build my resume"]) assert.ok(forms.isResumeBuildRequest(said), said);
  for (const said of ["Resume the music", "Resume my course", "What is a resume"]) assert.ok(!forms.isResumeBuildRequest(said), said);
});

test("a line the page speaks over the live voice is out of band and the model is told afterwards what was said", () => {
  const events = []; const notes = [];
  const sandbox = { realtimeVoiceActive: () => true, languageCode: () => "en", sendKyroRealtimeEvent: event => { events.push(event); return true; }, injectKyroRealtimeContext: text => notes.push(text),
    realtimeVoiceSession: { sdkController: { interrupt() {} } }, Date, String, Number };
  vm.createContext(sandbox);
  vm.runInContext(`let kyroLastPageLine = { text: "", at: 0 };\n${sliceFn("function kyroSpeakPageLine(")}\nthis.say = kyroSpeakPageLine;`, sandbox);
  assert.equal(sandbox.say("Your reminders: milk at nine."), true);
  assert.equal(events[0].response.conversation, "none");
  assert.equal(notes.length, 1); assert.match(notes[0], /Kyro's screen just told the person: Your reminders: milk at nine\./);
});

test("'open the offline notes screen' and 'open business forms' open those screens", () => {
  const w = new vm.Script(sliceConst("const KYRO_OPEN_LEAD") + sliceConst("const KYRO_OPEN_APP") + sliceConst("const KYRO_OPEN_OFFLINE") + "({ KYRO_OPEN_APP, KYRO_OPEN_OFFLINE })").runInNewContext({});
  for (const said of ["Open the offline notes screen.", "Open the offline queue", "Show me my offline notes page"]) assert.ok(w.KYRO_OPEN_OFFLINE.test(said), said);
  for (const said of ["Open business forms.", "Open the business tools", "Open business"]) assert.ok(w.KYRO_OPEN_APP.test(said), said);
  assert.ok(!w.KYRO_OPEN_APP.test("Open business forms and then call my brother"));
});

test("the upload screen, with its Choose a file button, stays until it is closed", () => {
  assert.match(sliceFn("function kyroOpenUploadScreen("), /screen\?\.setAttribute\("data-kyro-keep", "true"\)/);
});

test("tapping Yes or No on a question says 'one moment' while the answer is on its way, and the answer is drawn as any new screen", () => {
  const fn = sliceFn("function kyroAddConfirmButtons(");
  assert.match(fn, /screen\.removeAttribute\("data-kyro-result"\); screen\.setAttribute\("data-kyro-working-screen", "true"\)/);
  assert.match(fn, /One moment\.\.\./);
  assert.match(fn, /submitNexusPendingBehaviorConfirmation\(approved, approved \? "yes" : "no", \{ source: "typed" \}\)\)\.then\(done, done\)/);
  assert.ok(!/forEach\(node => node\.remove\(\)\);\s*void submitNexusPendingBehaviorConfirmation/.test(fn), "the screen no longer goes blank");
});

test("'Go my notes' (heard for 'Show my notes') is the request to show them, and 'I need help with my maize crop' opens the crop help screen", () => {
  const fix = new vm.Script(sliceConst("const KYRO_MISHEARD_OPEN") + sliceFn("function kyroHeardOpenVerb(") + "\nkyroHeardOpenVerb").runInNewContext({});
  assert.equal(fix("Go my notes."), "Show my notes.");
  assert.equal(fix("So my reminders"), "Show my reminders");
  assert.equal(fix("Go the documents."), "Show the documents.");
  assert.equal(fix("Go to my notes"), "Go to my notes", "a real verb is left alone");
  assert.equal(fix("Go my own way"), "Go my own way");
  const w = new vm.Script(sliceConst("const KYRO_OPEN_LEAD") + sliceConst("const KYRO_CROP_HELP") + "KYRO_CROP_HELP").runInNewContext({});
  for (const said of ["I need help with my maize crop.", "I need some help with my farm", "Help me with my tomato plants", "Can you help me with my field", "I want help on my harvest"]) assert.ok(w.test(said), said);
  for (const said of ["I need help with my phone", "Help me with my maize crop because the leaves are yellow and curling"]) assert.ok(!w.test(said), said);
  assert.match(app, /if \(KYRO_CROP_HELP\.test\(said\)\) \{\s*kyroTakeOverTurn\(\);\s*if \(kyroOpenAppCard\("agriculture", said, lang\)\) return true;/);
});

test("a picture or file description is shown without the server's own first sentence about how it was made, and stays until it is closed", () => {
  const fn = sliceFn("async function kyroAskAboutPicture(");
  assert.match(fn, /\.replace\(\/\^\(\?:Image described by a real vision model call\|PDF text extracted and analy\[sz\]ed\[\^\.\]\*\)/);
  assert.match(fn, /setAttribute\("data-kyro-keep", "true"\)/);
  const strip = text => text.replace(/^(?:Image described by a real vision model call|PDF text extracted and analy[sz]ed[^.]*)\.\s*(?:This is a description, not a diagnosis\.\s*)?/i, "").trim();
  assert.equal(strip("Image described by a real vision model call. This is a description, not a diagnosis. A page with the words MAIZE PRICE 50 KES."), "A page with the words MAIZE PRICE 50 KES.");
  assert.equal(strip("PDF text extracted and analyzed locally. Dear Sir, I am writing about my loan."), "Dear Sir, I am writing about my loan.");
});

test("a live session whose connection has died is restarted by the page after two bad looks ten seconds apart, and a healthy or hidden one is left alone", () => {
  const calls = []; let session = { active: true }; let health = { healthy: false, why: "peer-connection-down" }; let hidden = false;
  const sandbox = { realtimeVoiceSession: null, realtimeVoiceStarting: false, document: { get hidden() { return hidden; } }, kyroRealtimeHealth: () => health,
    reportKyroVoiceStall: (kind, detail) => calls.push(["report", kind, detail.lastActivity]), restartRealtimeVoiceAfterStall: reason => calls.push(["restart", reason]), Date, String };
  vm.createContext(sandbox);
  vm.runInContext("let kyroHealthStrikes = 0;\n" + sliceFn("function kyroRealtimeHealthTick(") + "\nthis.tick = kyroRealtimeHealthTick;", sandbox);
  sandbox.realtimeVoiceSession = session;
  assert.equal(sandbox.tick(), false, "one bad look is not enough"); assert.deepEqual(calls, []);
  assert.equal(sandbox.tick(), true); assert.deepEqual(calls, [["report", "disconnected", "health-check:peer-connection-down"], ["restart", "health-check:peer-connection-down"]]);
  calls.length = 0; health = { healthy: false, why: "microphone-ended" }; sandbox.tick(); sandbox.tick(); assert.equal(calls[0][1], "mic-lost");
  calls.length = 0; health = { healthy: true, why: "" }; assert.equal(sandbox.tick(), false); assert.equal(sandbox.tick(), false); assert.deepEqual(calls, []);
  health = { healthy: false, why: "x" }; hidden = true; sandbox.tick(); sandbox.tick(); assert.deepEqual(calls, [], "a page in the background is checked when the person comes back");
  hidden = false; sandbox.realtimeVoiceSession = null; sandbox.tick(); sandbox.tick(); assert.deepEqual(calls, [], "no session: nothing to restart");
  assert.match(app, /if \(typeof setInterval === "function"\) setInterval\(kyroRealtimeHealthTick, 10000\);/);
});

test("a summary of readings for a provider is said in plain words, with no 'Persisted: true' rows", () => {
  const say = new vm.Script(sliceFn("function kyroRenderedAnswerLine(") + "\nkyroRenderedAnswerLine").runInNewContext({ String, Array });
  const render = data => ({ presentation: { kind: "health-support" }, data: { locale: "en", persisted: true, includeProviderReview: true, conditionFocus: "cardiometabolic", ...data } });
  const none = say(render({ readingCount: 0, missingData: ["No readings saved yet"], emergencySafetyMessage: "Seek emergency help now if severe symptoms are present." }));
  assert.match(none, /You have no saved readings yet.*my blood pressure is 120 over 80.*nurse or doctor/); assert.doesNotMatch(none, /Persisted|cardiometabolic|Locale/);
  const some = say(render({ readingCount: 3, readingTableSummary: "Average 128 over 82", notablePatternsForProviderReview: ["two readings above 140 over 90"], discussionPrompts: ["medication adherence discussion"], patientQuestions: [], emergencySafetyMessage: "Seek emergency help now if severe symptoms are present. Nexus does not dispatch." }));
  assert.equal(some, "Summary of your readings for your provider: 3 saved readings. Average 128 over 82. Worth showing your provider: two readings above 140 over 90. You could talk about: medication adherence discussion. Seek emergency help now if severe symptoms are present. Nexus does not dispatch.");
  assert.equal(say({ presentation: { kind: "health-support" }, data: { answer: "x" } }), "", "other health answers are drawn as before");
});

// Found by the live voice test: "open health", "open the operations screen" and "give me a business summary" sometimes showed nothing. The page opens what it heard; the voice model's tool call for the same words
// then arrived and cleared every kept screen, including the one just drawn. It arrives before or after, so it depended on timing.
test("the model's tool call does not clear the screen the page has just opened for the same words, but still clears one left by an earlier request", () => {
  const sandbox = { kyroLastSpokenOpen: { key: "", at: 0 }, Date, String, Boolean, kyroWithoutPoliteTail: text => String(text || "").trim().replace(/[,;]?\s+(?:please|for me|now)\s*[.?!]*$/i, "").trim() };
  vm.createContext(sandbox);
  vm.runInContext(sliceFn("function kyroPageJustOpened(") + "\nthis.just = kyroPageJustOpened;", sandbox);
  sandbox.kyroLastSpokenOpen = { key: "open health", at: Date.now() - 600 };
  assert.equal(sandbox.just("Open Health"), true); assert.equal(sandbox.just("Open health, please."), true); assert.equal(sandbox.just("Open the weather"), false, "other words: an earlier request's screen is still cleared");
  sandbox.kyroLastSpokenOpen = { key: "open health", at: Date.now() - 9000 }; assert.equal(sandbox.just("Open Health"), false, "long ago");
  sandbox.kyroLastSpokenOpen = { key: "", at: 0 }; assert.equal(sandbox.just(""), false);
  const handler = app.slice(app.indexOf("async function callNexusOpenAiRealtimeTool("), app.indexOf("async function callNexusOpenAiRealtimeTool(") + 600);
  assert.match(handler, /if \(!\(typeof kyroPageJustOpened === "function" && kyroPageJustOpened\(command\)\)\) kyroDismissStaleWorkspace\(command\);/);
});

// Found by the live voice test: "prepare a provider summary of my readings" gave a card of rows, or a question, or nothing, depending on what the planner chose that time. The voice tool's own reader answers it the same way every time.
test("a provider summary is answered by the voice tool's own reader, typed (the Health button) and said", () => {
  const typedTool = new vm.Script(sliceConst("const KYRO_VOICE_TOOL_ANSWERS") + sliceFn("function kyroTypedToolFor(") + "\nkyroTypedToolFor").runInNewContext({});
  for (const said of ["Prepare a provider summary of my readings", "Prepare a provider summary", "Give me a doctor summary of my blood pressure", "Make my provider summary.", "Summary for my provider"]) assert.equal(typedTool(said), "nexus_health_preparation", said);
  for (const said of ["Teach me letters"]) assert.equal(typedTool(said), "nexus_workforce_learning");
  for (const said of ["Show my blood pressure readings", "Prepare a business plan", "What is a provider summary used for and when is it needed by my clinic"]) assert.equal(typedTool(said), "", said);
  const re = new vm.Script(sliceConst("const KYRO_VOICE_TOOL_ANSWERS") + "KYRO_VOICE_TOOL_ANSWERS").runInNewContext({});
  assert.ok(re.test("Prepare a provider summary of my readings") && re.test("a summary for my doctor") && !re.test("Show my readings"));
  assert.match(app, /if \(\(KYRO_GOVERNED_VOICE_TOOLS\.has\(String\(toolName \|\| ""\)\) && !\(typeof KYRO_VOICE_TOOL_ANSWERS !== "undefined" && KYRO_VOICE_TOOL_ANSWERS\.test\(command\)\)\) \|\| nexusPendingBehaviorConfirmation\) \{/);
});
