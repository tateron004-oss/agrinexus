"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// Found testing by voice: "open US maps" opened a map of Europe; "open images / videos / documents" and "create a business plan" were answered with a canned "AI copilot ... for DRC" line, or "I can only save a document
// from the keyboard". A map beyond Africa now opens where it should; "open documents" lists the saved ones; "open images / videos" asks what to look for and takes the next short answer; "create a business plan" is made by
// the route that makes documents (the typed one) even when it is said.

const root = path.join(__dirname, "../..");
const app = fs.readFileSync(path.join(root, "public/app.js"), "utf8");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");

function load() {
  const start = app.indexOf("// ---- Maps beyond Africa");
  const end = app.indexOf("// ---- Answer-first (the Jarvis way)");
  assert.ok(start > 0 && end > start);
  const calls = { typed: [], screens: [], spoken: [], interrupted: 0, maps: [] };
  const sandbox = {
    window: { KyroDismissCommands: { parse: text => (/^(?:close it|i'm done|go back to the orb)$/i.test(text) ? { kind: "done" } : null) } },
    languageCode: () => "en", realtimeVoiceActive: () => true, realtimeVoiceSession: { sdkController: { interrupt: () => { calls.interrupted += 1; } } },
    handleNexusUnifiedBrainRuntimeCommand: async (text, options) => { calls.typed.push({ text, options }); },
    kyroShowResultScreen: (tool, command, result) => { calls.screens.push(result.response); return true; },
    setVoiceResponse: (text) => { calls.spoken.push(text); },
    africanMapCountryTarget: text => (/kenya/i.test(text) ? { id: "kenya", name: "Kenya", lat: 0, lng: 37.9 } : null),
    dispatchGenesisWorkspaceAction: action => { calls.maps.push(action); return !sandbox.mapFails; }
  };
  vm.createContext(sandbox);
  vm.runInContext(`${app.slice(start, end)}\nthis.api = { kyroWorldMapTarget, kyroSpokenOpenOwns, kyroHandleSpokenOpen, kyroOpenMapRequest, pending: () => kyroPendingMedia };`, sandbox);
  return { api: sandbox.api, calls, sandbox };
}

test("a map beyond Africa opens where it should, and the word 'us' is not a country unless it is a map of it", () => {
  const { api } = load();
  const us = api.kyroWorldMapTarget("open US maps");
  assert.equal(us.name, "United States"); assert.equal(us.zoom, 4); assert.equal(us.world, true); assert.ok(us.lat > 30 && us.lng < -90);
  assert.equal(api.kyroWorldMapTarget("Open a map of the United States").name, "United States");
  assert.equal(api.kyroWorldMapTarget("show me the map of the USA").name, "United States");
  assert.equal(api.kyroWorldMapTarget("map of the U.S.").name, "United States");
  assert.equal(api.kyroWorldMapTarget("open a map of India").name, "India");
  assert.equal(api.kyroWorldMapTarget("show me the UK map").name, "United Kingdom");
  assert.equal(api.kyroWorldMapTarget("route from London to Manchester"), null, "a route is the route tool's");
  for (const text of ["show us the map", "tell us the weather", "text us when you arrive", "open the map", "open maps", "open the map of Kenya", ""]) assert.equal(api.kyroWorldMapTarget(text), null, text);
});

test("which sentences the page answers by itself", () => {
  const { api } = load();
  for (const text of ["open documents", "Open docs", "open my documents", "Kyro, open the documents", "open my business plan", "open images", "Open videos", "show me pictures", "open my photos", "create a business plan", "Create a document", "write a letter to my buyer",
    "Can you make a business plan for my farm", "I want to write a report", "draft a proposal for the cooperative"]) assert.equal(api.kyroSpokenOpenOwns(text), true, text);
  for (const text of ["help me with a business plan", "how do I write a business plan", "open health", "open the map", "create a resume", "make my CV", "create a checklist called Market Day", "make a note that the pump leaks", "show me pictures of a maize plant", "what is the weather", "remind me to write a letter", ""]) assert.equal(api.kyroSpokenOpenOwns(text), false, text);
});

test("'open documents' lists the saved ones; 'open images' asks what to look for and takes the next short answer as the subject", async () => {
  const { api, calls } = load();
  assert.equal(api.kyroHandleSpokenOpen("open documents", {}), true);
  assert.deepEqual({ ...calls.typed[0].options }, { source: "typed", kyroDirect: true }); assert.equal(calls.typed[0].text, "Show my saved documents"); assert.equal(calls.interrupted, 1, "whatever the model had begun to say is cut off");
  assert.equal(api.kyroHandleSpokenOpen("open images", {}), true);
  assert.equal(calls.screens.at(-1), "What would you like to see pictures of? For example: show me pictures of a maize plant."); assert.equal(calls.spoken.at(-1), calls.screens.at(-1));
  assert.equal(api.pending().kind, "images");
  assert.equal(api.kyroHandleSpokenOpen("maize plants", {}), true);
  assert.equal(calls.typed.at(-1).text, "Show me pictures of maize plants"); assert.equal(api.pending(), null);
  assert.equal(api.kyroHandleSpokenOpen("open videos", {}), true);
  assert.equal(calls.screens.at(-1), "What would you like to watch? For example: show me videos about drip irrigation.");
  assert.equal(api.kyroHandleSpokenOpen("show me drip irrigation", {}), true);
  assert.equal(calls.typed.at(-1).text, "Show me videos about drip irrigation");
});

test("what is said after the question is only a subject if it is one: another request, 'cancel' or a close are not", () => {
  for (const reply of ["find a clinic near me", "what time is it", "cancel", "never mind", "close it", "teach me letters", "I have a fever"]) {
    const { api, calls } = load();
    api.kyroHandleSpokenOpen("open pictures", {});
    const before = calls.typed.length;
    assert.equal(api.kyroHandleSpokenOpen(reply, {}), false, reply);
    assert.equal(calls.typed.length, before, `${reply}: no picture search`); assert.equal(api.pending(), null, `${reply}: no longer waiting`);
  }
});

test("a spoken document request goes the typed way (where documents are made); a typed one is left to the usual route; a résumé, a checklist and a question are not taken", () => {
  const { api, calls } = load();
  assert.equal(api.kyroHandleSpokenOpen("create a business plan", {}), true);
  assert.deepEqual({ ...calls.typed[0].options }, { source: "typed", kyroDirect: true }); assert.equal(calls.typed[0].text, "create a business plan");
  assert.equal(api.kyroHandleSpokenOpen("create a business plan", { typed: true }), false, "typed: it is already going that way");
  for (const text of ["create a resume", "make a checklist called Market Day", "how do I write a business plan", "what is a business plan"]) assert.equal(api.kyroHandleSpokenOpen(text, {}), false, text);
});

test("it is wired: the map uses the world list and its zoom, the first handler of a heard sentence and the typed route call it, and the model's own tool call is stopped for the same sentences", () => {
  assert.match(app, /const country = africanMapCountryTarget\(payload\.country \|\| command\) \|\| kyroWorldMapTarget\(`\$\{payload\.country \|\| ""\} \$\{command\}`\);/);
  assert.match(app, /userMap\.setView\(\[Number\(voiceMapCountryOverride\.lat\), Number\(voiceMapCountryOverride\.lng\)\], Number\(voiceMapCountryOverride\.zoom\) \|\| 6\);/);
  assert.match(app, /if \(!voiceMapCountryOverride\.world\) \{\s*addOperationalCountryMarkers\(userMap, userMapLayers\.markers, voiceMapCountryOverride\);/, "no pins for places Kyro keeps no records for");
  // the map is not fitted to the last shipment route when a country was asked for by name (that put "US" in Europe)
  assert.match(app, /function fitMapToRouteOrRegion\(targetMap, route, country, order, maxZoom = 5\) \{\s*\/\/[^\n]*\n\s*if \(country && country\.world && Number\.isFinite\(Number\(country\.lat\)\) && Number\.isFinite\(Number\(country\.lng\)\)\) \{\s*targetMap\.setView\(\[Number\(country\.lat\), Number\(country\.lng\)\], Number\(country\.zoom\) \|\| 4\);\s*return;/);
  assert.match(app, /if \(!country\.world\) \{\s*addOperationalCountryMarkers\(userMap, userMapLayers\.markers, country\);\s*addNearbyFacilityMarkers\(userMapLayers\.facilities, country, "Support point"\);/);
  // and the spoken words reach the page with the map action (the server only knows a few African countries by name)
  assert.ok(server.includes("country, query: text } // (query: what was said"));
  assert.match(app, /if \(kyroHandleSpokenOpen\(trimmed, \{\}\)\) return true;/);
  assert.match(app, /if \(!options\.kyroDirect && !kyroActiveVoiceIntake && kyroHandleSpokenOpen\(text, \{ typed: true \}\)\) return true;/, "and not again from the route it calls");
  assert.match(app, /window\.KyroCapture\?\.isLookRequest\?\.\(command\) \|\| kyroSpokenOpenOwns\(command\)\);/);
  assert.match(app, /return "Kyro is showing that on the screen by itself/);
  assert.ok(server.includes("When the user asks to open their documents, images, pictures, photos or videos with no subject"));
});

test("on the server, 'open US maps' and 'open Google Maps' open a map instead of being refused, and the canned copilot sentence is never said", () => {
  assert.ok(server.includes(String.raw`/\b(open|show|display|pull up|bring up|launch|start)\b.*\b(maps?|kenya)\b/i.test(command))`));
  assert.match(server, /I can't open the Google Maps app from here, so I am opening the Kyro map instead\./);
  const start = server.indexOf("function voiceToolSpoken(");
  const sandbox = { spokenRequests: require("../../nexus/voice/spoken-requests.js") };
  vm.createContext(sandbox);
  vm.runInContext(`${server.slice(start, server.indexOf("\n}\n", start) + 3)}\nthis.run = voiceToolSpoken;`, sandbox);
  const said = sandbox.run({ ok: true, response: "Got it. Local AI copilot recommends the next best action across learning, workforce, health, trade, and provider evidence for DRC." }, "open images").response;
  assert.equal(said, "I'm not sure what you'd like me to do. You can say things like: find a clinic near me, show my reminders, open health, show me pictures of a maize plant, or create a business plan.");
  assert.doesNotMatch(said, /DRC|copilot/i);
});

test("a typed 'open the map' opens the map on the page, with the country it names; what is about a route or somewhere nearby is left alone; said aloud, the map tool does it", () => {
  for (const text of ["Open the map", "open maps", "Open US maps", "Show me a map of Kenya", "Kyro, open the map of India", "pull up the world map", "Open a map of the United Kingdom", "show the map."]) assert.equal(load().api.kyroOpenMapRequest(text), true, text);
  for (const text of ["route from Nairobi to Mombasa", "show me the map to the clinic", "open the map near me", "find a pharmacy on the map", "how do I read a map", "show us the map of nothing from here", "what is a map", "directions to the market", ""]) assert.equal(load().api.kyroOpenMapRequest(text), false, text);
  const { api, calls } = load();
  assert.equal(api.kyroHandleSpokenOpen("Open US maps", { typed: true }), true);
  assert.equal(calls.maps.length, 1); assert.equal(calls.maps[0].workspace, "map"); assert.equal(calls.maps[0].payload.query, "Open US maps");
  assert.equal(calls.spoken.at(-1), "Here is the United States map.");
  assert.equal(api.kyroHandleSpokenOpen("Open the map of Kenya", { typed: true }), true);
  assert.equal(calls.spoken.at(-1), "Here is the Kenya map.");
  assert.equal(api.kyroHandleSpokenOpen("Open the map", { typed: true }), true);
  assert.equal(calls.spoken.at(-1), "Here is the map. You can zoom and drag it.");
  assert.equal(api.kyroHandleSpokenOpen("Open the map", {}), false, "said aloud: the map tool opens it");
  assert.equal(calls.maps.length, 3);
});

test("if the map will not open the typed sentence is left to the usual route, and the map is wired into the typed hook only", () => {
  const { api, calls, sandbox } = load(); sandbox.mapFails = true;
  assert.equal(api.kyroHandleSpokenOpen("Open the map", { typed: true }), false);
  assert.equal(calls.spoken.length, 0);
  assert.equal(api.kyroSpokenOpenOwns("Open the map"), false, "the model's own tool call for a map is not stopped");
});

// Found in the first round of testing by voice: "Open YouTube", "Open Spotify" and "Show me a list" were answered "I'm not sure what you'd like me to do", and a card a "sell" had opened stayed in front of everything after it.
test("'open YouTube' and 'open Spotify' ask what to play, 'play something on YouTube' plays music, and the next short answer is played", () => {
  for (const text of ["Open YouTube", "open Spotify", "Kyro, open the YouTube app", "launch Spotify", "go to YouTube", "Play something on YouTube", "play some music on Spotify", "Play music from YouTube"]) assert.equal(load().api.kyroSpokenOpenOwns(text), true, text);
  for (const text of ["Play Sauti Sol", "play some Kenyan music", "How do I use YouTube", "tell me about Spotify", "open the map", ""]) assert.equal(load().api.kyroSpokenOpenOwns(text), false, text);
  const { api, calls } = load();
  assert.equal(api.kyroHandleSpokenOpen("Open YouTube", {}), true);
  assert.equal(calls.screens.at(-1), "What would you like to play? For example: play Sauti Sol, or play some Kenyan music.");
  assert.equal(api.pending().kind, "music");
  assert.equal(api.kyroHandleSpokenOpen("Sauti Sol", {}), true);
  assert.equal(calls.typed.at(-1).text, "Play Sauti Sol"); assert.deepEqual({ ...calls.typed.at(-1).options }, { source: "typed", kyroDirect: true });
  assert.equal(api.kyroHandleSpokenOpen("open Spotify", {}), true);
  assert.match(calls.screens.at(-1), /^Spotify is not connected here, so I play music from YouTube\. What would you like to hear\?/);
  assert.equal(api.kyroHandleSpokenOpen("Play something on YouTube", {}), true);
  assert.equal(calls.typed.at(-1).text, "Play some music");
  assert.equal(api.kyroHandleSpokenOpen("open Spotify", {}), true);
  assert.equal(api.kyroHandleSpokenOpen("play Sauti Sol", {}), false, "a reply that is a request of its own is not taken as the subject");
});

test("'show me a list' asks a list of what; 'show me a list of my documents / reminders / checklists / notes' shows it; the next answer names one", () => {
  for (const text of ["Show me a list", "show my list", "Kyro, give me a list", "Show me a list of my documents", "show me a list of my reminders", "open my reminders", "Show me my checklists", "list my notes", "show me my to-do list"]) assert.equal(load().api.kyroSpokenOpenOwns(text), true, text);
  for (const text of ["show me a list of clinics", "show me the list of maize buyers", "make a list", "what is a list", ""]) assert.equal(load().api.kyroSpokenOpenOwns(text), false, text);
  const { api, calls } = load();
  assert.equal(api.kyroHandleSpokenOpen("show me a list of my documents", {}), true); assert.equal(calls.typed.at(-1).text, "Show my saved documents");
  assert.equal(api.kyroHandleSpokenOpen("Show me a list of my reminders", {}), true); assert.equal(calls.typed.at(-1).text, "Show my reminders");
  assert.equal(api.kyroHandleSpokenOpen("show my checklists", {}), true); assert.equal(calls.typed.at(-1).text, "Show my checklists");
  assert.equal(api.kyroHandleSpokenOpen("list my notes", {}), true); assert.equal(calls.typed.at(-1).text, "Show my notes");
  assert.equal(api.kyroHandleSpokenOpen("Show me a list", {}), true);
  assert.equal(calls.screens.at(-1), "A list of what? You can say: my reminders, my documents, my checklists or my notes."); assert.equal(api.pending().kind, "list");
  assert.equal(api.kyroHandleSpokenOpen("my reminders", {}), true); assert.equal(calls.typed.at(-1).text, "Show my reminders");
  api.kyroHandleSpokenOpen("show me a list", {});
  assert.equal(api.kyroHandleSpokenOpen("the weather in Kisumu", {}), false, "an answer that names no list is not taken, and the question is dropped");
  assert.equal(api.pending(), null);
});

test("a card left open by an earlier request is closed by the next request, the next interview and the next tool call, and is not closed by the quiet-spell return", () => {
  assert.match(app, /function kyroDismissStaleWorkspace\(\) \{\s*try \{ if \(document\.querySelector\("#nexus-workspace"\)\) closeNexusFunctionWindow\(\{ command: "" \}\); \} catch/);
  assert.match(app, /delete document\.body\.dataset\.genesisWorkspace; delete document\.body\.dataset\.genesisWorkspaceRequestId;/);
  assert.match(app, /async function handleNexusUnifiedBrainRuntimeCommand\(command = "", options = \{\}\) \{\s*const text = String\(command \|\| ""\)\.trim\(\);\s*if \(!text\) return false;\s*\/\/ [^\n]*\n\s*kyroDismissStaleWorkspace\(\);/);
  assert.match(app, /function startKyroVoiceIntake\(definition, options = \{\}\) \{\s*if \(kyroActiveVoiceIntake\) kyroActiveVoiceIntake\.engine\.cancel\(\);\s*\/\/ [^\n]*\n\s*kyroDismissStaleWorkspace\(\);/);
  assert.match(app, /async function callNexusOpenAiRealtimeTool\(toolName, args = \{\}\) \{\s*const command = [^\n]*\n\s*\/\/ [^\n]*\n\s*kyroDismissStaleWorkspace\(\);/);
});
