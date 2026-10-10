"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const appSource = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const serverSource = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");

// Found testing production: by voice the orb has no tool for pictures or videos, so "find a picture of a maize armyworm" got the canned line "Got it. Local AI copilot recommends the next best action ... for DRC" and nothing
// appeared. Typed, the same words search and draw the gallery. A spoken request now goes down the typed path and the model is told truthfully whether the pictures are on the screen.
function slice(startMarker, endMarker) {
  const start = appSource.indexOf(startMarker);
  assert.ok(start > 0, `could not find ${startMarker}`);
  const end = appSource.indexOf(endMarker, start);
  assert.ok(end > start, `could not find the end of ${startMarker}`);
  return appSource.slice(start, end);
}
const helperSource = slice("const KYRO_VISUAL_REQUEST", "\nasync function callNexusOpenAiRealtimeTool(");

function load(stubs = {}) {
  const sandbox = { String, RegExp, Promise, window: { setTimeout: fn => fn() }, document: { querySelectorAll: () => [] }, handleNexusUnifiedBrainRuntimeCommand: async () => true, ...stubs };
  vm.createContext(sandbox);
  vm.runInContext(`${helperSource}\nthis.kind = kyroVisualRequestKind; this.show = kyroShowVisualRequest;`, sandbox);
  return sandbox;
}

test("which spoken sentences ask to see pictures or videos, and which are left to other flows", () => {
  const { kind } = load();
  const images = ["Find a picture of a maize armyworm", "Show me pictures of drip irrigation", "show me a photo of the Rift Valley", "Can you find some images of fall armyworm damage?", "Search for pictures of a Nairobi market", "Kyro, show me clear photos of terraced farms", "Please find me a picture of a goat", "Let me see pictures of maize"];
  const videos = ["Show me videos about drip irrigation", "Find a video of maize harvesting", "Search for videos on composting", "Could you show me some videos of beekeeping?"];
  for (const text of images) assert.equal(kind(text), "images", text);
  for (const text of videos) assert.equal(kind(text), "videos", text);
  for (const text of ["Watch drip irrigation on YouTube", "Play Burna Boy Last Last", "What is the weather in Kisumu?", "Show me my reminders", "Show a route from Nairobi to Nakuru", "Find a pharmacy near me", "Add milk to my shopping list", "Show me a photo of my injury", "Find a picture of a rash on my skin", "Take a photo with the camera", "Open the business workspace", "Save a picture of the receipt", ""]) {
    assert.equal(kind(text), null, text);
  }
});

test("the model is told truthfully: pictures on the screen, or nothing showing; never to read an address or describe what it cannot see", async () => {
  const sent = [];
  const shown = load({ handleNexusUnifiedBrainRuntimeCommand: async (text, options) => { sent.push([text, options.source]); return true; }, document: { querySelectorAll: selector => (/img\[data-nexus-authoritative-image\]/.test(selector) ? [1, 2, 3, 4, 5] : []) } });
  const ok = await shown.show("Find a picture of a maize armyworm", "images");
  assert.deepEqual(sent, [["Find a picture of a maize armyworm", "openai-realtime-tool"]], "sent down the typed path");
  assert.equal(ok.ok, true); assert.equal(ok.executionVerified, true); assert.equal(ok.clientAction.type, "show-visual-results");
  assert.match(ok.response, /I have put 5 pictures on the screen/); assert.match(ok.response, /Do not read out any web addresses/); assert.match(ok.response, /cannot see them/);

  const one = await load({ document: { querySelectorAll: () => [1] } }).show("show me a video of beekeeping", "videos");
  assert.match(one.response, /I have put 1 video on the screen/); assert.match(one.response, /do not describe what the video shows|because you cannot see it/);

  const none = await load({ document: { querySelectorAll: () => [] } }).show("Find a picture of a goat", "images");
  assert.equal(none.ok, false); assert.equal(none.status, "failed-truthfully"); assert.equal(none.blockedReason, "visual-results-not-shown");
  assert.match(none.response, /could not put pictures on the screen just now/); assert.match(none.response, /nothing is showing/);

  const threw = await load({ handleNexusUnifiedBrainRuntimeCommand: async () => { throw new Error("boom"); } }).show("Find a picture of a goat", "images");
  assert.equal(threw.ok, false, "a failure on the typed path is reported, not hidden");
});

test("the orb's tool call checks for a picture or video request after the dismiss command and before anything is sent to the server", () => {
  const body = slice("async function callNexusOpenAiRealtimeTool(", "nexusGenesisVoiceDebugLog(\"openai-agents-tool-http-failed\"");
  const at = needle => { const index = body.indexOf(needle); assert.ok(index > 0, needle); return index; };
  assert.ok(at("KyroDismissCommands?.parse?.(command)") < at("kyroVisualRequestKind(command)"), "after the dismiss command");
  assert.ok(at("kyroVisualRequestKind(command)") < at("/api/voice/realtime/tool"), "before the request to the server");
  assert.match(body, /if \(visualKind\) return kyroShowVisualRequest\(command, visualKind\)/);
});

test("a picture or video result is captioned with what it is, not the server's placeholder line", () => {
  const source = slice("function nexusGalleryMessage(", "\n// Found live: nexus/lists/executor.js");
  const sandbox = { String, Array };
  vm.createContext(sandbox);
  vm.runInContext(`${source}\nthis.say = nexusGalleryMessage;`, sandbox);
  assert.equal(sandbox.say({ presentation: { kind: "image-gallery" }, data: { query: "a maize armyworm", images: [1, 2, 3, 4, 5] } }), "Here are 5 pictures I found of a maize armyworm.");
  assert.equal(sandbox.say({ presentation: { kind: "image-gallery" }, data: { images: [1] } }), "Here is the picture I found.");
  assert.equal(sandbox.say({ presentation: { kind: "video-gallery" }, data: { query: "drip irrigation", videos: [1, 2, 3, 4, 5, 6] } }), "Here are 6 videos I found about drip irrigation.");
  assert.equal(sandbox.say({ presentation: { kind: "image-gallery" }, data: { images: [] } }), "");
  assert.equal(sandbox.say({ presentation: { kind: "source-answer" }, data: {} }), "");
  assert.match(appSource, /message = nexusGalleryMessage\(result\.render\) \|\| result\.render\.response \|\| message;/);
});

test("the orb is told to call the everyday-records tool for a request to see pictures or videos, and to say only that they are on the screen", () => {
  assert.match(serverSource, /When the person asks you to show, find or look up pictures, photos, images or videos of something/);
  assert.match(serverSource, /never describe a picture you cannot see and never read out a web address/);
  assert.equal(serverSource.split("When the person asks you to show, find or look up pictures, photos, images or videos").length, 2, "said once");
});
