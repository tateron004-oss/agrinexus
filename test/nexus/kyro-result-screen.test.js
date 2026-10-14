"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Result = require("../../public/kyro-result-screen.js");
const Stage = require("../../public/kyro-task-stage.js");
const Dismiss = require("../../public/kyro-dismiss-commands.js");

// The Jarvis way: you say "find a clinic near me" and the clinics fill the screen while Kyro reads them out, then it clears and the orb is back. No menu, no tapping, no form.
// These tests pin what is drawn for each kind of answer, which requests get a screen and which keep their real form, and when the screen clears.

const root = path.join(__dirname, "../..");
const app = fs.readFileSync(path.join(root, "public/app.js"), "utf8");
const html = fs.readFileSync(path.join(root, "public/index.html"), "utf8");
const sw = fs.readFileSync(path.join(root, "public/sw.js"), "utf8");

const clinics = [
  { id: "osm-clinic-0", name: "Beta Care Setlite clinic", category: "clinic", city: "Nairobi, Kenya", address: "Musindi Road CBD division", distanceMeters: 1693, phone: "", openingHours: "Mo-Fr 08:00-17:00", source: "OpenStreetMap (live)" },
  { id: "osm-clinic-1", name: "Park Road Nursing Home", category: "clinic", city: "Nairobi, Kenya", address: "Park Road CBD division", distanceMeters: 2414, phone: "+254 700 000 000", openingHours: "", source: "OpenStreetMap (live)" },
  { id: "osm-clinic-2", name: "Small Clinic", category: "clinic", city: "Nairobi, Kenya", address: "", distanceMeters: 640, phone: "", openingHours: "", source: "OpenStreetMap (live)" }
];

test("clinics are drawn as a list with name, where and how far, opening hours or phone, and where the data comes from", () => {
  const model = Result.buildModel({ ok: true, response: "I found 3 clinic option(s): a; b; c", mobileClinics: clinics }, { command: "Find a clinic near me", lang: "en" });
  assert.equal(model.kind, "places"); assert.equal(model.title, "Clinics near you");
  assert.deepEqual(model.items.map(item => item.name), ["Beta Care Setlite clinic", "Park Road Nursing Home", "Small Clinic"]);
  assert.equal(model.items[0].detail, "Musindi Road CBD division · 1.7 km"); assert.equal(model.items[0].extra, "Open Mo-Fr 08:00-17:00");
  assert.equal(model.items[1].extra, "+254 700 000 000", "no hours: the phone number");
  assert.equal(model.items[2].detail, "Nairobi, Kenya · 640 m", "no address: the city, and metres under a kilometre");
  assert.match(model.notes[0], /From OpenStreetMap \(live\)\. Opening hours may be out of date\. This is not a medical referral\./, "honest about the source");
  assert.equal(model.awaiting, false);
  assert.equal(Result.buildModel({ mobileClinics: clinics }, { command: "help me find a mobile clinic" }).title, "Mobile clinics near you");
  assert.equal(Result.buildModel({ pharmacyLocations: [{ name: "Ngong Road Chemist", address: "Ngong Road", distanceMeters: 900, source: "OpenStreetMap (live)" }] }, { command: "Find a pharmacy near me" }).title, "Pharmacies near you");
  assert.equal(Result.buildModel({ mobileClinics: Array.from({ length: 12 }, (_, i) => ({ name: `Clinic ${i}` })) }, {}).items.length, 8, "at most eight");
  assert.equal(Result.buildModel({ mobileClinics: [{ name: "" }, null] }, {}), null, "nothing worth a screen");
  const noAddress = Result.buildModel({ mobileClinics: [{ name: "Health Post", address: "Address not listed in OpenStreetMap", city: "Lagos, Nigeria", distanceMeters: 313 }, { name: "Staff clinic", address: "Address not listed in OpenStreetMap", distanceMeters: 728 }] }, {});
  assert.equal(noAddress.items[0].detail, "Lagos, Nigeria · 313 m", "the lookup's 'not listed' placeholder is not shown as an address"); assert.equal(noAddress.items[1].detail, "728 m");
  const near = Result.buildModel({ mobileClinics: clinics, locationNote: "I don't know exactly where you are, so I looked near Lagos; tell me your town for better results." }, {});
  assert.equal(near.notes[0], "I don't know exactly where you are, so I looked near Lagos; tell me your town for better results.", "which town it looked near stays on the screen with the list"); assert.equal(near.notes.length, 2);
  const spoken = Result.buildModel({ mobileClinics: clinics, response: "I found 3 clinic option(s): a in Lagos; b in Lagos; c in Lagos. This is a live OpenStreetMap directory lookup, not a booking. I don't know exactly where you are, so I looked near Lagos, Nigeria; tell me your town for better results." }, {});
  assert.equal(spoken.notes[0], "I don't know exactly where you are, so I looked near Lagos, Nigeria; tell me your town for better results.", "the spoken answer's own sentence is used when the data has no note");
  assert.equal(Result.buildModel({ mobileClinics: clinics, response: "I found 3 clinic options." }, {}).notes.length, 1, "no note when the lookup knew where the person is");
});

test("in Kiswahili the headings and the source note are Kiswahili", () => {
  const model = Result.buildModel({ mobileClinics: clinics }, { command: "tafuta kliniki karibu nami", lang: "sw" });
  assert.equal(model.title, "Kliniki karibu nawe"); assert.match(model.items[0].extra, /^Wazi Mo-Fr/); assert.match(model.notes[0], /^Kutoka OpenStreetMap \(live\)\./);
});

test("a list answer is a heading and a list; a short answer is a headline with its notes under it; an answer that asks a question waits", () => {
  const list = Result.buildModel({ response: "Your listings: Listing 1: for sale — 500 kg of maize at 40 per kg; Listing 2: for sale — 20 bags of beans at 3000." });
  assert.equal(list.kind, "list"); assert.equal(list.title, "Your listings");
  assert.deepEqual(list.items.map(item => item.name), ["Listing 1: for sale — 500 kg of maize at 40 per kg", "Listing 2: for sale — 20 bags of beans at 3000"]);
  const board = Result.buildModel({ response: "You have no saved AgriTrade listings yet. Showing 3 sample listing(s) (not real postings). No checkout occurred. Maize seed lot in San Joaquin Valley; Compost fertilizer in Central California; Irrigation hand tools in Stockton area." });
  assert.equal(board.kind, "list"); assert.equal(board.title, "You have no saved AgriTrade listings yet."); assert.equal(board.items.length, 3); assert.equal(board.items[0].name, "Maize seed lot in San Joaquin Valley"); assert.equal(board.notes.length, 2, "the other sentences are the notes");
  const bracket = Result.buildModel({ response: "No checkout occurred. Maize seed lot (Price to verify; ask seller) in Lodi; Compost review listing (Quote needed; no checkout) in Central California; Tomato availability in Stockton." });
  assert.deepEqual(bracket.items.map(item => item.name), ["Maize seed lot (Price to verify; ask seller) in Lodi", "Compost review listing (Quote needed; no checkout) in Central California", "Tomato availability in Stockton"], "a semicolon inside brackets stays in its item");
  const lesson = Result.buildModel({ intent: "conversation.practice_lesson", response: "This is a short practice lesson inside Kyro. It is not a certified course. I will say one small thing, then ask you one question. Say 'next' to go on, 'again' to hear it again, or 'stop' at any time. The letter A. A is for apple. Which letter does the word \"apple\" start with?" });
  assert.equal(lesson.title, "Practice lesson"); assert.equal(lesson.headline, "The letter A. A is for apple. Which letter does the word \"apple\" start with?"); assert.match(lesson.notes[0], /^Say 'next'/);
  const reading = Result.buildModel({ response: "You have 1 saved blood pressure reading: 128 over 82 on 11 October 2026. This is your saved history, not a diagnosis or trend interpretation -- discuss patterns with a qualified healthcare professional." });
  assert.equal(reading.kind, "text"); assert.equal(reading.headline, "You have 1 saved blood pressure reading: 128 over 82 on 11 October 2026."); assert.equal(reading.notes.length, 1);
  assert.match(reading.notes[0], /^This is your saved history/);
  const one = Result.buildModel({ response: "In Kenya, the emergency number is 999 or 112. I have not called anyone, and I cannot dispatch help for you." });
  assert.equal(one.headline, "In Kenya, the emergency number is 999 or 112."); assert.equal(one.notes[0], "I have not called anyone, and I cannot dispatch help for you.");
  const ask = Result.buildModel({ response: "I heard your blood pressure as 128 over 82, for 12 October 2026. Shall I save it? Say yes to save it, or no if that is not right.", requiresConfirmation: true });
  assert.equal(ask.awaiting, true);
  assert.equal(Result.isAwaiting({ response: "Send \"I am on my way\" to Otieno as a text? Say yes to send it, or no to cancel." }), true);
  assert.equal(Result.isAwaiting({ response: "Your readings are saved." }), false);
  assert.equal(Result.buildModel({ response: "Okay." }), null, "too short to be an answer"); assert.equal(Result.buildModel(null), null); assert.equal(Result.buildModel({}), null);
  assert.equal(Result.distanceText(1693), "1.7 km"); assert.equal(Result.distanceText(640), "640 m"); assert.equal(Result.distanceText("x"), "");
});

function fakeDom() {
  const made = [];
  const make = tag => { const e = { tag, children: [], attrs: {}, listeners: {}, className: "", textContent: "", removed: false, type: "",
    setAttribute(n, v) { this.attrs[n] = String(v); }, getAttribute(n) { return this.attrs[n] ?? null; }, appendChild(c) { this.children.push(c); return c; }, addEventListener(t2, f) { this.listeners[t2] = f; }, remove() { this.removed = true; } }; made.push(e); return e; };
  const body = make("body"); const head = make("head");
  return { made, doc: { body, head, createElement: make, getElementById: id => made.find(e => e.id === id && !e.removed) || null,
    querySelectorAll: selector => (selector === "[data-kyro-result]" ? made.filter(e => e.attrs["data-kyro-result"] !== undefined && !e.removed) : []) } };
}

test("show draws one screen (heading, list, notes, one close mark); a new answer replaces the old; remove takes it down", () => {
  const { doc, made } = fakeDom(); let closed = 0;
  const model = Result.buildModel({ mobileClinics: clinics }, { command: "find a clinic" });
  const screen = Result.show(doc, model, { onClose: () => { closed += 1; } });
  assert.equal(screen.attrs["data-kyro-result"], "places"); assert.equal(screen.attrs.role, "dialog"); assert.equal(screen.attrs["aria-live"], "polite");
  assert.ok(Number(screen.attrs["data-kyro-result-at"]) > 0, "when it was drawn");
  assert.equal(screen.attrs["data-kyro-result-awaiting"], undefined);
  const list = screen.children.find(child => child.tag === "ol"); assert.equal(list.children.length, 3);
  const close = screen.children.find(child => child.className === "kyro-result-close"); assert.equal(close.attrs["aria-label"], "Close"); close.listeners.click(); assert.equal(closed, 1);
  assert.ok(made.some(e => e.id === "kyro-result-screen-style"), "its style is added once");
  Result.show(doc, Result.buildModel({ response: "Shall I save it? Say yes.", requiresConfirmation: true }), {});
  const shown = made.filter(e => e.attrs["data-kyro-result"] !== undefined && !e.removed); assert.equal(shown.length, 1, "replaced"); assert.equal(shown[0].attrs["data-kyro-result-awaiting"], "true");
  assert.equal(Result.remove(doc), true); assert.equal(Result.remove(doc), false); assert.equal(Result.show(null, model, {}), null);
});

function load(names, extra = {}) {
  const parts = names.map(name => { const start = app.indexOf(name); assert.ok(start >= 0, name); const end = app.indexOf("\n}\n", start) + 3; return app.slice(start, end); });
  return new Function("window", "KyroState", `${parts.join("\n")}; return { ${Object.keys(extra).join(", ")} };`);
}

test("which answers get a screen: not failures, crisis replies, the map, music or video; and the real forms and a plain 'open health' keep theirs", () => {
  const source = ["function kyroResultScreenEligible(", "function kyroExplicitOpenCard(", "function kyroAnswerReplacesWorkspace("].map(name => { const start = app.indexOf(name); assert.ok(start >= 0, name); return app.slice(start, app.indexOf("\n}\n", start) + 3); }).join("\n");
  const formFlow = app.match(/const KYRO_FORM_FLOW = (\/.*\/i);/);
  assert.ok(formFlow, "the form-flow list");
  const api = new Function("window", `const KYRO_FORM_FLOW = ${formFlow[1]}; ${source}; return { kyroResultScreenEligible, kyroAnswerReplacesWorkspace };`)({ KyroResultScreen: {} });
  const ok = { ok: true, status: "completed", response: "I found 8 clinic option(s).", capability: "nexus_health_preparation" };
  assert.equal(api.kyroResultScreenEligible("nexus_health_preparation", ok), true);
  assert.equal(api.kyroResultScreenEligible("nexus_health_preparation", { ...ok, ok: false }), false);
  assert.equal(api.kyroResultScreenEligible("nexus_health_preparation", { ...ok, status: "failed-truthfully" }), false);
  assert.equal(api.kyroResultScreenEligible("nexus_health_preparation", { ...ok, clientAction: { type: "return-to-orb" } }), false);
  assert.equal(api.kyroResultScreenEligible("nexus_maps_route", ok), false); assert.equal(api.kyroResultScreenEligible("nexus_music_media", ok), false);
  assert.equal(api.kyroResultScreenEligible("nexus_health_preparation", { ...ok, genesisAction: { workspace: "map" } }), false);
  assert.equal(api.kyroResultScreenEligible("nexus_health_preparation", { ...ok, genesisAction: { workspace: "health" } }), true);
  assert.equal(api.kyroResultScreenEligible("nexus_general_conversation", { ...ok, capability: "mental-health-behavioral-wellness" }), false, "a crisis reply is never an information screen");
  assert.equal(api.kyroResultScreenEligible("nexus_general_conversation", { ...ok, intent: "conversation.not_handled" }), false);
  assert.equal(api.kyroResultScreenEligible("x", null), false);
  // a request an answer replaces the form for, and one that keeps it
  for (const [workspace, text] of [["health", "find a clinic near me"], ["health", "show my blood pressure readings"], ["learning", "teach me letters"], ["trade", "what is for sale"], ["agriculture", "show my farm log"], ["workforce", "find jobs near me"]]) assert.equal(api.kyroAnswerReplacesWorkspace(workspace, text), true, `${workspace}: ${text}`);
  for (const [workspace, text] of [["health", "I need telehealth"], ["health", "start my medical intake"], ["health", "open health"], ["trade", "I want to sell 50 bags of maize"], ["workforce", "make my CV"], ["workforce", "apply for the job"], ["map", "show me a route"], ["media", "play music"]]) assert.equal(api.kyroAnswerReplacesWorkspace(workspace, text), false, `${workspace}: ${text}`);
});

test("it is wired: voice answers draw the screen and open no form; the form from the spoken words is skipped; typed answers use it too; the stage, teardown and return know it", () => {
  const call = app.slice(app.indexOf("async function callNexusOpenAiRealtimeTool"), app.indexOf("function handleOpenAiAgentsRealtimeEvent"));
  assert.match(call, /const answerOnScreen = kyroShowResultScreen\(toolName, command, result\);\s*const transcriptAction = answerOnScreen \? null : genesisWorkspaceActionFromFinalTranscript\(command\);/);
  assert.match(call, /\} else if \(!answerOnScreen && !\/restricted\|denied\|blocked\|forbidden\/i\.test\(String\(result\.status \|\| ""\)\)\) \{[^]*?await runAuthoritativeGenesisWorkspaceBridge\(result/, "no workspace bridge for an answer that is on the screen");
  const exec = app.slice(app.indexOf("async function executeGenesisWorkspaceFromFinalTranscript"), app.indexOf("rememberAuthoritativeGenesisTranscriptRoute(action, command);"));
  assert.match(exec, /if \(kyroAnswerReplacesWorkspace\(action\.workspace, command\)\) return false;/);
  const run = app.slice(app.indexOf("async function kyroRunToolAnswer"), app.indexOf("function kyroShowTypedResult"));
  assert.match(run, /kyroShowResultScreen\(tool \|\| "nexus_everyday_records", command, result\)/);
  assert.match(run, /kyroFetchWithTimeout\("\/api\/voice\/realtime\/tool"/, "the route voice uses");
  assert.doesNotMatch(run, /callNexusOpenAiRealtimeTool/, "that would open a screen again for 'teach me letters'");
  // typed: a plain answer or a list of places is drawn by the same screen, and what it draws is not drawn again as raw fields in the window
  const typed = app.slice(app.indexOf("async function processNexusAuthoritativeBehaviorResult"), app.indexOf("async function submitNexusPendingBehaviorConfirmation"));
  assert.match(typed, /const answerOnScreen = kyroShowTypedResult\(result, text, message\);[^]*?if \(result\.render\?\.presentation\?\.kind === "reminder"\) message = kyroReminderListLine\(result\.render\.data\) \|\| message;\s*try \{\s*const drawn = result\.render;\s*if \(drawn && result\.state === "render_required" && !answerOnScreen\) \{/);
  const brain = app.slice(app.indexOf("async function handleNexusUnifiedBrainRuntimeCommand"), app.indexOf("async function handleNexusHealthcareCollaborationRuntimeCommand"));
  assert.match(brain, /const typedTool = kyroTypedToolFor\(text\);\s*if \(typedTool && await kyroRunToolAnswer\(text, "typed-answer", typedTool\)\) return true;/);
  assert.ok(brain.indexOf("kyroShowHelpScreen(explicitOpenCard") < brain.indexOf("kyroTypedToolFor(text)") && brain.indexOf("kyroTypedToolFor(text)") < brain.indexOf("/api/nexus/runtime/behavior/turn"), "before the AI planner route");
  assert.ok(brain.indexOf("handleNexusMentalHealthBehavioralWellnessCommand(text") < brain.indexOf("kyroTypedToolFor(text)"), "the safety check still comes first");
  assert.ok(Stage.SHELL_SELECTOR.includes("[data-kyro-result]"), "the task stage shows only it");
  assert.match(app, /const KYRO_BODY_SCREEN_SELECTOR = "[^"]*\[data-kyro-result\]/, "returning to the orb takes it down");
  assert.match(app, /#nexusRichDataOverlay, \[data-kyro-result\]"\)\) return true;/, "left alone it is a finished answer");
  const tag = html.indexOf("/kyro-result-screen.js"); assert.ok(tag > 0 && tag < html.indexOf("/app.js")); assert.ok(sw.includes("/kyro-result-screen.js"));
  const snap = app.slice(app.indexOf("function kyroAutoReturnSnapshot()"), app.indexOf("function kyroAutoReturnTick()"));
  assert.ok(snap.includes('resultShowing: Boolean(document.querySelector("[data-kyro-result]:not([data-kyro-result=\\"help\\"])"))'), "the help screen is not an answer to clear in ten seconds");
  assert.match(snap, /lastActivityAt: Math\.max\(kyroLastActivityAt, kyroLastAssistantSpokeAt\)/, "counted from the last word Kyro spoke");
  assert.match(snap, /data-kyro-result-awaiting[\s\S]*< 90000/, "a waiting question keeps it up, but not for ever");
});

function typedApi(shown) {
  const names = ["function kyroReminderListLine(", "function kyroEmptyRenderAnswer(", "function kyroReminderListLine(", "function kyroRenderedAnswerLine(", "function nexusGalleryMessage(", "function kyroPlainRenderMessage(", "function kyroShowTypedResult(", "function kyroAddConfirmButtons(", "function kyroWritableListKind(", "function kyroTypedToolFor(", "function kyroTypedLessonReply(", "function kyroExplicitOpenCard("];
  const source = names.map(name => { const start = app.indexOf(name); assert.ok(start >= 0, name); return app.slice(start, app.indexOf("\n}\n", start) + 3); }).join("\n");
  const formFlow = app.match(/const KYRO_FORM_FLOW = (\/.*\/i);/);
  // (the screens that draw into the page itself are stubbed: they are tested on their own below)
  shown.composers = []; shown.checklists = []; shown.galleries = [];
  const stubs = { kyroAddComposer: kind => { shown.composers.push(kind); return true; }, kyroShowChecklistScreen: (lists, line) => { shown.checklists.push({ lists, line }); return true; }, kyroShowGalleryScreen: drawn => { shown.galleries.push(drawn.presentation.kind); return true; }, kyroRefreshList: async () => {} };
  return new Function("window", "kyroShowResultScreen", "kyroAddComposer", "kyroShowChecklistScreen", "kyroShowGalleryScreen", "kyroRefreshList", `const KYRO_FORM_FLOW = ${formFlow[1]}; ${source}; return { kyroShowTypedResult, kyroTypedToolFor, kyroTypedLessonReply, kyroEmptyRenderAnswer, kyroPlainRenderMessage, kyroWritableListKind };`)({ KyroResultScreen: {} }, (tool, command, result) => { shown.push({ tool, command, result }); return true; }, stubs.kyroAddComposer, stubs.kyroShowChecklistScreen, stubs.kyroShowGalleryScreen, stubs.kyroRefreshList);
}

test("typed: clinics and pharmacies from data, and a plain answer the server worked out itself, fill the screen; chat, questions, forms and 'open health' do not", () => {
  const shown = []; const api = typedApi(shown);
  const cards = [{ name: "Anikantamo Health Post", category: "clinic", distanceMeters: 313, source: "OpenStreetMap (live)" }];
  const places = { application: "mobile-clinic", state: "render_required", render: { presentation: { kind: "location-list" }, data: { cards, locationNote: "I looked near Lagos." } } };
  assert.equal(api.kyroShowTypedResult(places, "Find a clinic near me", "I found 8 clinics near Lagos"), true);
  assert.deepEqual(shown[0].result.mobileClinics, cards); assert.equal(shown[0].result.locationNote, "I looked near Lagos."); assert.equal(shown[0].tool, "typed");
  shown.length = 0;
  const pharmacies = { application: "pharmacy", state: "render_required", render: { presentation: { kind: "location-list" }, data: { data: { cards: [{ name: "Chemist" }] } } } };
  assert.equal(api.kyroShowTypedResult(pharmacies, "Find a pharmacy near me", "I found 1 pharmacy"), true);
  assert.equal(shown[0].result.pharmacyLocations.length, 1, "cards under data.data are found too");
  shown.length = 0;
  const plain = { application: "conversation", state: "completed", outcome: { modelAnswered: false } };
  assert.equal(api.kyroShowTypedResult(plain, "Show my farm log", "Your farm log is empty. Say \"log 12 mm of rain\"."), true);
  assert.equal(shown[0].result.response, "Your farm log is empty. Say \"log 12 mm of rain\".");
  shown.length = 0;
  assert.equal(api.kyroShowTypedResult({ ...plain, outcome: { modelAnswered: true } }, "How are you today", "I am well, thank you for asking me."), false, "an answer the AI model wrote is chat, not a screen");
  assert.equal(api.kyroShowTypedResult(plain, "Thanks", "You are welcome."), false, "too short to be an answer");
  assert.equal(api.kyroShowTypedResult({ ...plain, state: "confirmation_required" }, "My blood pressure is 128 over 82", "I heard 128 over 82. Shall I save it?"), false, "a question waits in the window");
  assert.equal(api.kyroShowTypedResult({ application: "weather", state: "render_required", render: { presentation: { kind: "weather" }, data: {} } }, "Weather in Nairobi", "It is 24 degrees in Nairobi"), false, "other renders are drawn as before");
  assert.equal(api.kyroShowTypedResult(places, "I need telehealth", "x".repeat(40)), false, "a form flow is not replaced");
  assert.equal(api.kyroShowTypedResult(plain, "open health", "x".repeat(40)), false, "'open health' has its own help screen");
  assert.equal(shown.length, 0);
  // reminders: one just set, and the list of them
  const reminderSet = { application: "reminders", state: "render_required", render: { presentation: { kind: "reminder" }, data: { reminder: "call Amina", persisted: true } } };
  assert.equal(api.kyroShowTypedResult(reminderSet, "Remind me to call Amina tomorrow at 5pm", "Okay. I will remind you to call Amina at 5:00 pm tomorrow."), true);
  assert.equal(shown[0].result.response, "Okay. I will remind you to call Amina at 5:00 pm tomorrow."); shown.length = 0;
  const reminderList = { application: "reminders", state: "render_required", render: { presentation: { kind: "reminder" }, data: { summary: "You have 2 reminders.", reminders: ["call Amina (due Mon 12 Oct, 5:00 pm)", "pay the vet (due Tue 13 Oct)"] } } };
  assert.equal(api.kyroShowTypedResult(reminderList, "Show my reminders", "Nexus completed the governed execution and is rendering the verified result."), true);
  assert.equal(shown[0].result.response, "You have 2 reminders: call Amina (due Mon 12 Oct, 5:00 pm); pay the vet (due Tue 13 Oct).", "the list, not the status line"); shown.length = 0;
  assert.equal(api.kyroShowTypedResult({ ...reminderList, render: { presentation: { kind: "reminder" }, data: { summary: "You have no reminders.", reminders: [] } } }, "Show my reminders", "x"), true);
  assert.equal(shown[0].result.response, "You have no reminders."); shown.length = 0;
  // found live: "show my checklists" and "show my last receipt" with nothing saved opened an old window and said nothing / read out the server's status line
  const noLists = { application: "lists", state: "render_required", render: { presentation: { kind: "checklist" }, data: { query: "saved checklists", found: false, lists: [] } } };
  const noDocs = { application: "documents", state: "render_required", render: { presentation: { kind: "document" }, data: { request: "Show my last receipt", found: false, documents: [] } } };
  assert.match(api.kyroEmptyRenderAnswer(noLists), /^You have no checklists yet\. Say, for example: create a checklist called Market Day/);
  assert.match(api.kyroEmptyRenderAnswer(noDocs), /^I don't have a saved document or receipt like that yet\./);
  assert.equal(api.kyroShowTypedResult(noLists, "Show my checklists", "Nexus completed the governed execution and is rendering the verified result."), true);
  assert.match(shown[0].result.response, /^You have no checklists yet\./); shown.length = 0;
  assert.equal(api.kyroShowTypedResult(noDocs, "Show my last receipt", "Nexus completed the governed execution and is rendering the verified result."), true);
  assert.match(shown[0].result.response, /^I don't have a saved document or receipt like that yet\./); shown.length = 0;
  assert.equal(api.kyroEmptyRenderAnswer({ ...noLists, render: { presentation: { kind: "checklist" }, data: { found: true, lists: [{ title: "Market Day" }] } } }), "", "a list that exists is drawn as before");
  assert.equal(api.kyroEmptyRenderAnswer({ ...noLists, state: "completed" }), "");
});

test("the typed route never reads out the server's status line or the internal name", () => {
  const api = typedApi([]);
  const status = "Nexus completed the governed execution and is rendering the verified result.";
  assert.equal(api.kyroPlainRenderMessage({}, status), "Done. It is on your screen.");
  assert.equal(api.kyroPlainRenderMessage({ render: { presentation: { kind: "document" }, data: { documents: [{ title: "Maize Sales" }, { title: "Receipt 4" }] } } }, status), "You have 2 saved documents: Maize Sales; Receipt 4.");
  assert.equal(api.kyroPlainRenderMessage({ render: { presentation: { kind: "checklist" }, data: { lists: [{ title: "Market Day" }] } } }, status), "You have 1 checklist: Market Day.");
  assert.equal(api.kyroPlainRenderMessage({}, "Nexus did not launch a drone. Nexus Genesis is ready."), "Kyro did not launch a drone. Kyro is ready.");
  assert.equal(api.kyroPlainRenderMessage({}, "You have 2 reminders: a; b."), "You have 2 reminders: a; b.", "a real answer is left as it is");
  const typed = app.slice(app.indexOf("async function processNexusAuthoritativeBehaviorResult"), app.indexOf("async function submitNexusPendingBehaviorConfirmation"));
  assert.match(typed, /const emptyAnswer = kyroEmptyRenderAnswer\(result\);\s*let answeredWithoutCard = false;[^]*?try \{\s*renderReceipt = await renderer\.render\(result\.render\);/);
  // the plain answer goes on the screen before the card is drawn and verified (which takes seconds), so the raw card is never what is looked at
  assert.match(typed, /if \(!emptyAnswer && kyroRenderedAnswerLine\(result\.render\)\) \{ try \{ kyroShowTypedResult\(result, text, message\); \} catch[^]*?renderReceipt = await renderer\.render/);
  // a result with a plain answer is shown and said even when the card cannot be verified as showing (found on the live site: business records drew a card and said nothing)
  assert.match(typed, /if \(!emptyAnswer\) \{ if \(kyroRenderedAnswerLine\(result\.render\) \|\| kyroShowTypedResult\(result, text, message\)\) answeredWithoutCard = true; else throw error; \}[^]*?if \(!emptyAnswer && !answeredWithoutCard && !renderReceipt\?\.acknowledged\) throw new Error/);
  assert.match(typed, /else throw error; \}/); assert.match(typed, /if \(!emptyAnswer && !answeredWithoutCard && !renderReceipt\?\.acknowledged\) throw new Error/);
  assert.match(typed, /message = emptyAnswer \|\| nexusGalleryMessage\(result\.render\) \|\| result\.render\.response \|\| message;/);
  assert.match(typed, /message = kyroPlainRenderMessage\(result, message\);\s*nexusAgenticBrainLastResult = \{/);
});

test("a note that mentions buying is an answer; a trade or telehealth form the server is opening is not", () => {
  const pick = name => { const start = app.indexOf(name); assert.ok(start >= 0, name); return app.slice(start, app.indexOf("\n}\n", start) + 3); };
  const formFlow = app.match(/const KYRO_FORM_FLOW = (\/.*\/i);/);
  const drawn = [];
  const fake = { KyroResultScreen: { buildModel: (result) => ({ kind: "text", headline: result.response, items: [], notes: [], awaiting: false }), show: (doc, model) => drawn.push(model) } };
  const api = new Function("window", "document", "languageCode", "kyroNoteActivity", "kyroReturnToOrb", `const KYRO_FORM_FLOW = ${formFlow[1]}; const KYRO_SMALL_TALK = ${app.match(/const KYRO_SMALL_TALK = (\/.*\/i);/)[1]}; ${pick("function kyroResultScreenEligible(")}\n${pick("function kyroExplicitOpenCard(")}\n${pick("function kyroShowResultScreen(")}; return { kyroShowResultScreen };`)(fake, {}, () => "en", () => {}, async () => {});
  const note = { ok: true, status: "completed", response: "Noted: buy seeds. Say \"what are my notes?\" any time." };
  assert.equal(api.kyroShowResultScreen("nexus_everyday_records", "Take a note: buy seeds", note), true, "nothing is being opened for it");
  assert.equal(api.kyroShowResultScreen("nexus_marketplace_logistics", "I want to sell 50 bags of maize", { ...note, genesisAction: { type: "genesis.workspace.open", workspace: "trade" } }), false, "the server is opening the trade form");
  assert.equal(api.kyroShowResultScreen("nexus_health_preparation", "I need telehealth", { ...note, genesisAction: { type: "genesis.workspace.open", workspace: "health" } }), false);
  assert.equal(api.kyroShowResultScreen("nexus_health_preparation", "open health", note), false, "'open health' is the help screen");
  // a greeting or a thank-you is spoken back, not drawn across the screen
  for (const hello of ["Hello Kyro", "hi", "Good morning", "thanks", "Thank you Kyro", "how are you today", "are you there", "ok", "yes", "Asante", "can you hear me"]) assert.equal(api.kyroShowResultScreen("nexus_general_conversation", hello, { ok: true, status: "completed", response: "Hello, how can I help you today?" }), false, hello);
  for (const real of ["What time is it", "Show my notes", "Hello, show my notes", "yes I want the clinic list near Kisumu please", "no rain logged this month?"]) assert.equal(api.kyroShowResultScreen("nexus_everyday_records", real, note), true, real);
  assert.equal(drawn.length, 6, "the note and the five real requests");
});

test("typed lessons go to the route that teaches them, not to the AI model", () => {
  const api = typedApi([]);
  for (const text of ["Teach me letters", "teach me maths", "Teach me the letters.", "Nifundishe herufi", "Nifundishe hesabu", "Start the AI basics course", "start ai basics", "Give me a practice interview", "practise a job interview", "please teach me counting"]) assert.equal(api.kyroTypedToolFor(text), "nexus_workforce_learning", text);
  for (const text of ["", "teach me to cook", "teach me letters and then call my sister", "what are letters", "open learning", "I want a job", "next", "stop"]) assert.equal(api.kyroTypedToolFor(text), "", text);
});

test("typed: while a lesson or practice interview is under way, 'next', 'again', 'stop' and a one- or two-word answer are for it; it ends when the person leaves it or the reply is not the lesson's", () => {
  const api = typedApi([]);
  for (const text of ["next", "Next.", "again", "stop", "A", "apple", "3", "four", "ndiyo", "kwa kuongeza", "don't know"]) assert.equal(api.kyroTypedLessonReply(text), "nexus_workforce_learning", text);
  for (const text of ["", "what is the weather in Nairobi", "find a clinic near me", "what is for sale today"]) assert.equal(api.kyroTypedLessonReply(text), "", text);
  assert.match(app, /let kyroTypedLessonOpen = false;/);
  const run = app.slice(app.indexOf("async function kyroRunToolAnswer"), app.indexOf("function kyroTypedLessonReply"));
  assert.match(run, /kyroTypedLessonOpen = \/\^conversation\\\.practice_\(\?:lesson\|interview\)\$\/\.test\(String\(result\?\.intent \|\| ""\)\);/, "open only while the reply is the lesson's or the interview's");
  assert.match(run, /if \(options\.lessonOnly && !kyroTypedLessonOpen\) return false;\s*\/\/ the answer is the screen/, "a reply that was not for the lesson draws nothing and is left to the usual route");
  const brain = app.slice(app.indexOf("async function handleNexusUnifiedBrainRuntimeCommand"), app.indexOf("async function handleNexusHealthcareCollaborationRuntimeCommand"));
  assert.match(brain, /const lessonTool = !typedTool && kyroTypedLessonOpen \? kyroTypedLessonReply\(text\) : "";\s*if \(lessonTool && await kyroRunToolAnswer\(text, "typed-answer", lessonTool, \{ lessonOnly: true \}\)\) return true;/);
  const orb = app.slice(app.indexOf("async function kyroReturnToOrb"), app.indexOf("async function kyroReturnToOrb") + 400);
  assert.match(orb, /options\.reason === "home" \|\| options\.reason === "done"\) kyroTypedLessonOpen = false;/, "'I'm done' ends it; closing a screen or a quiet spell does not");
  // a lesson or interview that has just asked its question waits for the answer; one that has ended clears as usual
  const lesson = Result.buildModel({ intent: "conversation.practice_lesson", response: "The letter A. A is for apple. Which letter does the word \"apple\" start with?" });
  assert.equal(lesson.awaiting, true);
  assert.equal(Result.buildModel({ intent: "conversation.practice_lesson", response: "Well done. That is the end of this lesson. Come back any time." }).awaiting, false);
  assert.equal(Result.buildModel({ intent: "conversation.practice_interview", response: "Tell me about yourself and the work you have done." }).awaiting, false, "no question mark and no 'say next': not waiting");
  assert.equal(Result.buildModel({ intent: "conversation.practice_interview", response: "Question two. Why do you want this job?" }).awaiting, true);
});

test("an answer clears ten seconds after Kyro has finished speaking and nobody has touched or said anything; a question waiting for a yes keeps it up", () => {
  const now = 1_000_000; const base = { userMode: true, answerShowing: true, resultShowing: true, workOpen: false, assistantSpeaking: false, userSpeaking: false, focusInField: false, pendingConfirmation: false, intakeActive: false };
  assert.equal(Dismiss.RESULT_RETURN_MS, 10000);
  assert.equal(Dismiss.shouldAutoReturn({ ...base, lastActivityAt: now - 11000 }, now).go, true);
  assert.equal(Dismiss.shouldAutoReturn({ ...base, lastActivityAt: now - 9000 }, now).go, false, "not yet");
  assert.equal(Dismiss.shouldAutoReturn({ ...base, resultShowing: false, lastActivityAt: now - 11000 }, now).go, false, "other answers still wait thirty seconds");
  assert.equal(Dismiss.shouldAutoReturn({ ...base, resultShowing: false, lastActivityAt: now - 31000 }, now).go, true);
  for (const blocker of [{ assistantSpeaking: true }, { userSpeaking: true }, { pendingConfirmation: true }, { focusInField: true }, { intakeActive: true }]) assert.equal(Dismiss.shouldAutoReturn({ ...base, ...blocker, lastActivityAt: now - 60000 }, now).go, false, JSON.stringify(blocker));
});

// Found on live: a long guide answer ("The CDC says: at ages 21 to 29, a Pap test; at 30 to 65, ...") was drawn as a list of fragments with most of its sentences hidden (a colon plus semicolons, the "Sources: a; b; c" line,
// and only 6 notes). A long answer is shown whole, as prose; a real list of short things is still a list.
test("a long prose answer is shown whole, and clauses with semicolons and a Sources line are not a list", () => {
  const RS = require("../../public/kyro-result-screen.js");
  const sentence = n => `Sentence number ${n} says something that takes a fair number of words to say, so that it is clearly a whole clause and not a short name.`;
  const body = `Screening finds changes early. The CDC says: ${sentence(1)}; ${sentence(2)}; ${sentence(3)}. ${[4, 5, 6, 7, 8, 9, 10, 11].map(sentence).join(" ")} Sources: CDC: cervical cancer screening; CDC: HPV vaccine; USPSTF: cervical cancer screening (checked 13 October 2026). This is general information, not medical advice.`;
  const model = RS.buildModel({ ok: true, status: "completed", response: body }, { command: "how often should i get a pap smear", lang: "en" });
  assert.equal(model.kind, "text");
  assert.equal(model.headline, "Screening finds changes early.");
  const shown = [model.headline, ...model.notes].join(" ");
  for (const n of [1, 2, 3, 4, 8, 11]) assert.ok(shown.includes(`Sentence number ${n} `), `sentence ${n} is on the screen`);
  assert.ok(shown.includes("Sources: CDC: cervical cancer screening;") && shown.endsWith("This is general information, not medical advice."), "the sources and the last sentence are shown");
});

test("a list of short things is still a list, and its other sentences are not cut off", () => {
  const RS = require("../../public/kyro-result-screen.js");
  const colon = RS.buildModel({ ok: true, status: "completed", response: "I found 3 things: maize seed in A; compost in B; tools in C." }, { command: "list", lang: "en" });
  assert.equal(colon.kind, "list"); assert.deepEqual(colon.items.map(item => item.name), ["maize seed in A", "compost in B", "tools in C"]);
  const model = RS.buildModel({ ok: true, status: "completed", response: "Nothing was booked. Maize seed lot in A; Compost in B; Tools in C. One. Two. Three. Four. Five. Six. Seven." }, { command: "list", lang: "en" });
  assert.equal(model.kind, "list"); assert.deepEqual(model.items.map(item => item.name), ["Maize seed lot in A", "Compost in B", "Tools in C"]);
  assert.equal(model.notes.length, 7, "the other sentences are all there");
});

// Found sweeping the applications as a Standard User: a checklist, a web search and a job search each left a card headed "Nexus completed the governed execution..." of raw fields. They are answers, drawn as a screen.
test("typed: a checklist, a web search answer and a list of jobs are drawn as an answer, never as 'Nexus completed the governed execution'", () => {
  const shown = []; const api = typedApi(shown);
  const render = (kind, data) => ({ state: "render_required", application: kind, render: { presentation: { kind }, response: "Nexus completed the governed execution and is rendering the verified result.", data } });
  const checklist = render("checklist", { lists: [{ title: "Market Day", items: [{ text: "seeds" }, { text: "sacks" }, { text: "scale" }] }] });
  assert.equal(api.kyroShowTypedResult(checklist, "Show my checklist", "Nexus completed the governed execution and is rendering the verified result."), true);
  assert.equal(shown.at(-1).result.response, "Market Day: seeds; sacks; scale.");
  const search = render("source-answer", { answer: "Maize prices in Kenya are about 3,500 shillings per 90kg bag", sources: [{ title: "FEWS NET", url: "https://fews.net" }, { title: "KAMIS", url: "https://kamis.go.ke" }] });
  assert.equal(api.kyroShowTypedResult(search, "Search the web for maize prices in Kenya", "x"), true);
  assert.equal(shown.at(-1).result.response, "Maize prices in Kenya are about 3,500 shillings per 90kg bag. Sources: FEWS NET; KAMIS.");
  const jobs = render("operation", { listings: ["Farm supervisor - https://example.org/1", "Tractor driver - https://example.org/2"] });
  assert.equal(api.kyroShowTypedResult(jobs, "Find jobs near me", "x"), true);
  assert.equal(shown.at(-1).result.response, "I found 2 listings: Farm supervisor; Tractor driver.");
  for (const result of [checklist, search, jobs]) {
    const said = api.kyroPlainRenderMessage(result, "Nexus completed the governed execution and is rendering the verified result.");
    assert.doesNotMatch(said, /governed execution|Nexus/); assert.notEqual(said, "Done. It is on your screen.");
  }
  assert.equal(api.kyroShowTypedResult(render("operation", { origin: "Kisumu" }), "How far is it", "x"), false, "an operation with no listings is drawn as before");
});

// Found re-running the sweep on the live site: a checklist answer had "Live Knowledge Research" open behind it, a web answer had a raw "Nexus completed..." card behind it.
test("typed: when the answer is on the screen the card window the renderer opened for the same result is closed", () => {
  assert.match(app, /const answerOnScreen = kyroShowTypedResult\(result, text, message\);\s*\/\/[^\n]*\n\s*if \(answerOnScreen\) \{ try \{ if \(document\.querySelector\("#nexus-workspace"\)\) closeNexusFunctionWindow\(\{ command: "" \}\); \} catch/);
});

test("typed: the person's own business records (clients, donors, invoices, grants) are an answer on the screen, not a card of 'Command:' and 'Summary:' rows; résumé and reminder lists too", () => {
  const shown = []; const api = typedApi(shown);
  const business = (response, data = {}) => ({ state: "render_required", application: "business", render: { application: "business", presentation: { kind: "operation" }, response, data: { command: "Show my clients", ...data } } });
  assert.equal(api.kyroShowTypedResult(business('"Kyro Test Workspace" has 2 clients: Grace Otieno and Services.'), "Show my clients", "x"), true);
  assert.equal(shown.at(-1).result.response, '"Kyro Test Workspace" has 2 clients: Grace Otieno and Services.');
  assert.equal(api.kyroShowTypedResult(business("Nexus completed the governed execution and is rendering the verified result."), "Show my clients", "x"), false, "the server's status line is not an answer");
  assert.equal(api.kyroShowTypedResult(business("Done."), "Show my clients", "x"), false, "too short to be an answer");
  const other = { state: "render_required", application: "workforce", render: { application: "workforce", presentation: { kind: "operation" }, response: "Here are some listings for you to look over, one by one.", data: { origin: "Kisumu" } } };
  assert.equal(api.kyroShowTypedResult(other, "How far is it", "x"), false, "only business records");
});

test("typed: a business result with a file to download keeps its card", () => {
  const shown = []; const api = typedApi(shown);
  const withFile = { state: "render_required", application: "business", render: { application: "business", presentation: { kind: "operation" }, response: 'Saved "Service Agreement" as a Word file; press Download on the card.', data: { documentId: "doc_1" } } };
  assert.equal(api.kyroShowTypedResult(withFile, "Make a service agreement", "x"), false);
});

// Found sweeping the applications: "Search the web for maize prices in Kenya" was answered "Which town, county, or region in Kenya should I use?" by voice only; nothing was on the screen.
test("typed: a question Kyro needs answered is on the screen and stays up; a yes/no confirmation still waits in the window", () => {
  const shown = []; const api = typedApi(shown);
  const question = { state: "clarification_required", application: "live-knowledge" };
  assert.equal(api.kyroShowTypedResult(question, "Search the web for maize prices in Kenya", "Which town, county, or region in Kenya should I use?"), true);
  assert.equal(shown.at(-1).result.response, "Which town, county, or region in Kenya should I use?"); assert.equal(shown.at(-1).result.requiresConfirmation, true, "it stays up until it is answered");
  assert.equal(api.kyroShowTypedResult(question, "x", "Which?"), false, "too short to be a question");
  assert.equal(api.kyroShowTypedResult({ state: "confirmation_required", application: "business" }, "Add a client named Amina", "I can add Amina Otieno as a client. Should I go ahead?"), false, "a yes or a no waits in the window");
});

// Found on the live site: after "add a client named ..." the question "Should I go ahead?" was only spoken; nothing on the screen, and nothing to tap for a person who cannot type.
test("typed: a question waiting for a yes or a no is on the screen with a Yes and a No to tap", () => {
  const shown = []; const api = typedApi(shown);
  const waiting = { state: "confirmation_required", taskId: "tsk_1", application: "business", outcome: { pendingStepId: "step_1" } };
  assert.equal(api.kyroShowTypedResult(waiting, "Add a client named Amina Otieno", 'I can add Amina Otieno as a client to "Kyro Test Workspace". Should I go ahead?'), true);
  assert.equal(shown.at(-1).result.requiresConfirmation, true, "it stays up until it is answered");
  assert.equal(api.kyroShowTypedResult({ ...waiting, outcome: {} }, "x", "I can add Amina Otieno as a client. Should I go ahead?"), false, "nothing is pending to answer");
  assert.equal(api.kyroShowTypedResult({ ...waiting, taskId: "" }, "x", "I can add Amina Otieno as a client. Should I go ahead?"), false);
});

test("the Yes and No buttons answer the pending confirmation the way saying it does, and put the screen away", () => {
  const vm = require("node:vm");
  const start = app.indexOf("function kyroAddConfirmButtons()"); const end = app.indexOf("\n}\n", start) + 3;
  assert.ok(start > 0 && end > start);
  const removed = []; const submitted = []; const buttons = [];
  const element = () => { const node = { style: {}, attrs: {}, children: [], listeners: {}, setAttribute(k, v) { this.attrs[k] = v; }, append(...kids) { this.children.push(...kids); }, addEventListener(type, fn) { this.listeners[type] = fn; } }; return node; };
  const screen = element();
  const sandbox = { document: { querySelector: () => screen, createElement: () => { const node = element(); buttons.push(node); return node; }, querySelectorAll: () => ({ forEach: fn => { removed.push("screen"); } }) },
    languageCode: () => "en", submitNexusPendingBehaviorConfirmation: (approved, text, options) => submitted.push([approved, text, options]) };
  vm.createContext(sandbox);
  vm.runInContext(`${app.slice(start, end)}\nthis.add = kyroAddConfirmButtons;`, sandbox);
  sandbox.add();
  const yes = buttons.find(node => node.attrs["data-kyro-confirm"] === "yes"); const no = buttons.find(node => node.attrs["data-kyro-confirm"] === "no");
  assert.equal(yes.textContent, "Yes"); assert.equal(no.textContent, "No");
  yes.listeners.click(); no.listeners.click();
  assert.equal(JSON.stringify(submitted), JSON.stringify([[true, "yes", { source: "typed" }], [false, "no", { source: "typed" }]]));
  assert.equal(removed.length, 2, "the screen is put away on each tap");
});

// Found by the Standard User test: "none of the lists would allow for clicking to write", and "the system says 6 videos but nothing shows". Lists are screens you can write in; pictures and videos have a screen of their own.
test("typed: checklists open as the real lists, pictures and videos on a screen of their own, and the list screens get a form to write in", () => {
  const shown = []; const api = typedApi(shown);
  const render = (kind, data) => ({ state: "render_required", application: kind, render: { presentation: { kind }, response: "Nexus completed the governed execution and is rendering the verified result.", data } });
  assert.equal(api.kyroShowTypedResult(render("checklist", { lists: [{ listId: "rec_a1b2c3d4", title: "Market Day", items: [{ text: "seeds", done: false }] }] }), "Show my checklists", "x"), true);
  assert.equal(shown.checklists.length, 1); assert.equal(shown.checklists[0].lists[0].listId, "rec_a1b2c3d4"); assert.equal(shown.length, 0, "not the read-only text screen");
  assert.equal(api.kyroShowTypedResult(render("checklist", { lists: [{ title: "Market Day", items: [{ text: "seeds" }] }] }), "Show my checklists", "x"), true);
  assert.equal(shown.at(-1).result.response, "Market Day has one item: seeds.", "a list with no id cannot be changed, so it is only shown");
  assert.equal(api.kyroShowTypedResult(render("image-gallery", { images: [{ url: "https://example.org/a.jpg" }], query: "maize" }), "Show me pictures of maize", "x"), true);
  assert.equal(api.kyroShowTypedResult(render("video-gallery", { videos: [{ embedUrl: "https://www.youtube.com/embed/abc" }] }), "Show me videos about composting", "x"), true);
  assert.deepEqual(shown.galleries, ["image-gallery", "video-gallery"]);
  shown.composers.length = 0;
  const conversation = () => ({ state: "completed", application: "conversation", outcome: { modelAnswered: false } });
  assert.equal(api.kyroShowTypedResult(conversation(), "Show my notes", "You have no notes. Say \"note that the pump needs a new seal\"."), true);
  assert.equal(api.kyroShowTypedResult(conversation(), "Show my saved documents", "Your saved documents, newest first: 1, Business plan - a poultry farm."), true);
  assert.equal(api.kyroShowTypedResult({ state: "render_required", application: "reminders", render: { presentation: { kind: "reminder" }, data: { reminders: ["check the tank (due Thu 15 Oct, 9:00 am)"], summary: "You have 1 reminder" } } }, "Show my reminders", "x"), true);
  assert.equal(api.kyroShowTypedResult(conversation(), "How are you today", "I am well, thank you for asking me, and you?"), true);
  assert.deepEqual(shown.composers, ["notes", "documents", "reminders"], "a form under each list, and none under an ordinary answer");
});

test("which sentences ask to see a list you can write in", () => {
  const api = typedApi([]);
  for (const [text, kind] of [["Show my notes", "notes"], ["what are my notes", "notes"], ["Show my reminders", "reminders"], ["open the calendar", "reminders"], ["Show my saved documents", "documents"], ["list my documents", "documents"], ["Show my checklists", "checklists"], ["show my to-do list", "checklists"]]) assert.equal(api.kyroWritableListKind(text), kind, text);
  for (const text of ["Note that the pump needs a new seal", "Remind me to check the tank tomorrow", "Create a checklist called Market Day", "Create a document called Notes", "Add milk to my list", "Delete my notes", "How do I write notes", "Play music", ""]) assert.equal(api.kyroWritableListKind(text), "", text);
});

// A small stand-in for the page, enough to press the buttons and read what was done.
function fakePage(app, names) {
  const vm = require("node:vm");
  const make = tag => ({ tag, attrs: {}, children: [], listeners: {}, value: "", textContent: "", disabled: false, style: {},
    setAttribute(k, v) { this.attrs[k] = String(v); }, getAttribute(k) { return this.attrs[k]; }, append(...kids) { this.children.push(...kids); }, addEventListener(type, fn) { (this.listeners[type] = this.listeners[type] || []).push(fn); },
    remove() { body.children = body.children.filter(child => child !== this); }, click() { (this.listeners.click || []).forEach(fn => fn({ preventDefault() {} })); },
    submit() { (this.listeners.submit || []).forEach(fn => fn({ preventDefault() {} })); },
    find(match, out = []) { for (const child of this.children) { if (match(child)) out.push(child); child.find(match, out); } return out; },
    querySelector(selector) { return this.find(matcher(selector))[0] || null; } });
  const matcher = selector => {
    const attr = /^\[([a-z-]+)(?:="([^"]*)")?\]$/.exec(selector);
    return node => (attr ? (attr[2] === undefined ? node.attrs[attr[1]] !== undefined : node.attrs[attr[1]] === attr[2]) : node.tag === selector);
  };
  const body = make("body");
  const select = selector => body.find(matcher(selector));
  const sandbox = { document: { body, createElement: make, querySelector: sel => select(sel)[0] || null, querySelectorAll: sel => ({ forEach: fn => select(sel).forEach(fn) }) },
    languageCode: () => "en", kyroDeviceTimeZone: () => "UTC", requestWithTimeout: async () => ({}), nexusAuthoritativeConversationId: () => "c1", kyroNoteActivity() {}, kyroReturnToOrb: async () => {}, kyroReminderListLine: data => (data && data.summary) || "",
    nexusGalleryMessage: drawn => (drawn.presentation.kind === "image-gallery" ? "Here are 2 pictures I found of maize." : "Here are 2 videos I found about composting."), Date, Object, Array, String, Number, Boolean, Promise, Error, Math };
  sandbox.kyroShowResultScreen = (tool, command, result) => { body.children = body.children.filter(c => c.attrs["data-kyro-result"] === undefined); const screen = make("section"); screen.attrs["data-kyro-result"] = "text"; screen.textContent = result.response; body.children.push(screen); sandbox.lastScreen = result; return true; };
  vm.createContext(sandbox);
  const source = names.map(name => { const start = app.indexOf(name); assert.ok(start >= 0, name); return app.slice(start, name.startsWith("const ") ? app.indexOf(";\n", start) + 2 : app.indexOf("\n}\n", start) + 3); }).join("\n");
  vm.runInContext(`${source}\nthis.api = { kyroAddComposer, kyroRefreshList, kyroShowChecklistScreen, kyroShowGalleryScreen };`, sandbox);
  return { sandbox, body, make, select, api: sandbox.api };
}
const WRITABLE_NAMES = ["const KYRO_READ_COMMANDS", "const KYRO_COMPOSER_TEXT", "function kyroUiText(", "const KYRO_FIELD_STYLE", "const KYRO_BUTTON_STYLE", "function kyroMake(", "function kyroTwelveHour(", "function kyroAddComposer(", "async function kyroRefreshList(", "function kyroShowChecklistScreen(", "function kyroShowGalleryScreen("];
const settle = () => new Promise(resolve => setTimeout(resolve, 25));

test("the forms under the lists send the same governed commands a spoken request does, then show the list again", async () => {
  const page = fakePage(app, WRITABLE_NAMES);
  const said = [];
  page.sandbox.kyroSilentTurn = async text => { said.push(text); return { response: text === "Show my notes" ? "Your notes, newest first: pump needs a new seal." : "Done.", render: null }; };
  const run = async (kind, fill) => {
    page.sandbox.kyroShowResultScreen("typed", "x", { response: "something" });
    assert.equal(page.api.kyroAddComposer(kind), true, kind);
    const form = page.select("[data-kyro-composer]")[0];
    fill(Object.fromEntries(form.find(node => node.tag === "input" || node.tag === "textarea" || node.tag === "select").map(node => [node.attrs.name, node])));
    form.submit(); await settle();
  };
  assert.equal(page.api.kyroAddComposer("nothing"), false);
  await run("notes", f => { f.note.value = "the pump needs a new seal"; });
  assert.equal(said[0], "Note that the pump needs a new seal"); assert.equal(said[1], "Show my notes", "the list is read again");
  assert.match(page.sandbox.lastScreen.response, /^Your notes, newest first: pump needs a new seal/);
  said.length = 0;
  await run("reminders", f => { f.what.value = "check the tank"; f.day.value = "tomorrow"; f.time.value = "15:30"; });
  assert.equal(said[0], "Remind me to check the tank tomorrow at 3:30 pm");
  said.length = 0;
  await run("documents", f => { f.title.value = "Field Notes"; f.body.value = "planted maize today"; });
  assert.equal(said[0], "Create a document called Field Notes that says planted maize today");
  said.length = 0;
  await run("checklists", f => { f.name.value = "Market Day"; f.items.value = "seeds, sacks"; });
  assert.equal(said[0], "Create a checklist called Market Day with items seeds, sacks");
  said.length = 0;
  await run("notes", f => { f.note.value = "   "; });
  assert.equal(said.length, 0, "an empty form sends nothing"); assert.equal(page.select("[data-kyro-composer-status]")[0].textContent, "Write something first.");
});

test("the checklist screen ticks, removes and adds by the list's own id, and shows the lists again", async () => {
  const page = fakePage(app, WRITABLE_NAMES);
  const said = [];
  const lists = [{ listId: "rec_a1b2c3d4", title: "Market Day", items: [{ text: "seeds", done: false }, { text: "sacks", done: true }] }, { listId: "rec_e5f6a7b8", title: "Water tank", items: [] }];
  page.sandbox.kyroSilentTurn = async text => { said.push(text); return { render: { data: { lists } } }; };
  assert.equal(page.api.kyroShowChecklistScreen(lists, "Saved."), true);
  const screen = page.select("[data-kyro-result]")[0];
  assert.equal(screen.attrs["data-kyro-keep"], "true", "kept until it is closed");
  assert.equal(page.select("[data-kyro-checklist]").length, 2);
  const buttons = page.select("[data-kyro-checklist]")[0].find(node => node.tag === "button");
  assert.equal(buttons[0].textContent, "☐ seeds"); assert.equal(buttons[2].textContent, "☑ sacks");
  buttons[0].click(); await settle();
  assert.equal(said[0], "Mark item 1 done on checklist rec_a1b2c3d4"); assert.equal(said[1], "Show my checklists");
  said.length = 0; buttons[1].click(); await settle();
  assert.equal(said[0], "Remove item 1 from checklist rec_a1b2c3d4");
  said.length = 0;
  const add = page.select("[data-kyro-checklist]")[1].find(node => node.tag === "form")[0];
  add.find(node => node.tag === "input")[0].value = "pipe  and   tape"; add.submit(); await settle();
  assert.equal(said[0], "Add to checklist rec_e5f6a7b8: pipe and tape");
  assert.ok(page.select("[data-kyro-composer]").length >= 1, "a form for a new checklist is on the screen too");
});

test("pictures and videos get a screen of their own that is kept, with the pictures or the playable videos on it", () => {
  const page = fakePage(app, WRITABLE_NAMES);
  const pictures = { presentation: { kind: "image-gallery" }, data: { query: "maize", images: [{ url: "https://example.org/a.jpg", title: "Maize field" }, { url: "https://example.org/b.jpg" }] } };
  assert.equal(page.api.kyroShowGalleryScreen(pictures), true);
  const screen = page.select("[data-kyro-result]")[0];
  assert.equal(screen.attrs["data-kyro-result"], "gallery"); assert.equal(screen.attrs["data-kyro-keep"], "true");
  assert.deepEqual(page.select("img").map(node => node.attrs.src), ["https://example.org/a.jpg", "https://example.org/b.jpg"]);
  const videos = { presentation: { kind: "video-gallery" }, data: { videos: [{ embedUrl: "https://www.youtube.com/embed/abc", title: "Composting 101", channelTitle: "Farm Channel" }, { videoUrl: "https://example.org/v.webm", mimeType: "video/webm" }] } };
  assert.equal(page.api.kyroShowGalleryScreen(videos), true);
  assert.equal(page.select("[data-kyro-result]").length, 1, "the earlier screen is replaced");
  assert.equal(page.select("iframe")[0].attrs.src, "https://www.youtube.com/embed/abc"); assert.equal(page.select("video").length, 1);
  assert.equal(page.api.kyroShowGalleryScreen({ presentation: { kind: "image-gallery" }, data: { images: [] } }), false, "nothing to show");
});

test("a kept screen is work: nothing puts it away by itself, and a new request does", () => {
  assert.match(app, /if \(document\.querySelector\("\[data-kyro-keep\]"\)\) return true;/);
  assert.match(app, /document\.querySelectorAll\("\[data-kyro-keep\]"\)\.forEach\(node => node\.remove\(\)\);/);
});
