"use strict";
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const test = require("node:test");
const assert = require("node:assert/strict");

// Found by speaking OFF-SCRIPT wording into a real voice session in the owner's Chrome (after the scripted phrases passed): "What's on my to-do list?" was answered "I can't see a current to-do list from here" with no
// tool called and nothing on the screen; "I want to look at my notes" went to the voice tool and came back "I'm not sure what you'd like me to do" (the model then said "I couldn't open your notes"). The same words
// typed are answered by the governed route. These pin the two fixes: a refusal the page can answer is answered by the page, and the voice tools that keep and find the person's own things answer through the governed route.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const start = app.indexOf("// ---- When the voice model refuses something the page can do ----");
const end = app.indexOf("function speakKyroIntakeLine(", start);
assert.ok(start > 0 && end > start);
const block = app.slice(start, end);
const plain = (() => { const s = app.indexOf("function kyroPlainText("); return app.slice(s, app.indexOf("\n}\n", s) + 3); })();

function load({ handled = true, tool = false } = {}) {
  const calls = { typed: [], takeover: 0, said: [] };
  const sandbox = {
    kyroActiveVoiceIntake: null, Date, String, Array, Object, Promise, JSON,
    kyroTakeOverTurn: () => { calls.takeover++; },
    kyroSpeakPageLine: text => { calls.said.push(text); return true; },
    handleNexusUnifiedBrainRuntimeCommand: async (text, options) => { calls.typed.push([text, options]); if (typeof handled === "function") return handled(text); sandbox.pushCapture("One moment."); sandbox.pushCapture("**Your to-do list is empty.**"); return handled; }
  };
  vm.createContext(sandbox);
  vm.runInContext(`let kyroPageSpeaksUntil = 0;\n${plain}\n${block}\nthis.api = { kyroWatchForRefusal, kyroRecoverRefusal, kyroAnswerLikeTyped, KYRO_REFUSAL, KYRO_GOVERNED_VOICE_TOOLS, setHeard: v => { kyroHeard = v; }, heard: () => kyroHeard, setTool: v => { kyroToolCalledAt = v; }, setWindow: v => { kyroPageSpeaksUntil = v; }, window: () => kyroPageSpeaksUntil, seen: () => kyroRefusalSeenAt };\nthis.pushCapture = line => { if (kyroVoiceCapture) kyroVoiceCapture.push(line); };`, sandbox);
  return { api: sandbox.api, calls, sandbox };
}
const heardNow = (text, ago = 500) => ({ key: text.toLowerCase(), text, at: Date.now() - ago, recovered: false });
const settle = () => new Promise(resolve => setImmediate(resolve));

test("what counts as a refusal: the model starting to say it cannot, could not, is unable, or is not sure what was meant", () => {
  const { api } = load();
  for (const said of ["I can’t see a current to-do list from here.", "I can't open that.", "I couldn’t open your notes from that request.", "I'm not able to search for jobs.", "I am unable to do that.", "Sorry, I don't have access to that.", "I'm not sure what you'd like me to do."]) assert.ok(api.KYRO_REFUSAL.test(said), said);
  for (const said of ["Your to-do list is empty.", "One moment, I’ll check what’s scheduled for you.", "I found eight pharmacies near Nairobi.", "Sure, I can open that.", "Here are your notes."]) assert.ok(!api.KYRO_REFUSAL.test(said), said);
});

test("a refusal for words the model did not act on is answered by the page the way typing the words is", async () => {
  const { api, calls } = load();
  api.setHeard(heardNow("What's on my to-do list?"));
  api.kyroWatchForRefusal("response.created", {});
  api.kyroWatchForRefusal("response.output_audio_transcript.delta", { delta: "I can’t see" });
  await settle();
  assert.equal(calls.typed.length, 1);
  assert.deepEqual([calls.typed[0][0], calls.typed[0][1].source, calls.typed[0][1].kyroDirect], ["What's on my to-do list?", "voice-recovery", true]);
  assert.equal(calls.takeover, 1, "the model is cut off");
  assert.ok(api.window() > Date.now() + 30000, "the page's own words are said by the voice for a while");
  api.kyroWatchForRefusal("response.output_audio_transcript.delta", { delta: " a current to-do list" });
  api.kyroWatchForRefusal("response.output_audio_transcript.done", { transcript: "I can’t see a current to-do list from here." });
  await settle();
  assert.equal(calls.typed.length, 1, "once for what was heard");
});

test("it waits for the words when the refusal begins before they are written down, and is left alone when the model acted, the page has the turn, or nothing was heard", async () => {
  // refusal first, words second
  let { api, calls } = load();
  api.kyroWatchForRefusal("response.created", {});
  api.kyroWatchForRefusal("response.output_audio_transcript.delta", { delta: "I can't find that." });
  assert.equal(api.kyroRecoverRefusal(), false, "nothing heard yet");
  api.setHeard(heardNow("Show me my to-do list"));
  assert.equal(api.kyroRecoverRefusal(), true); await settle(); assert.equal(calls.typed.length, 1);
  // the model called a tool for these words
  ({ api, calls } = load()); api.setHeard(heardNow("What's on my to-do list?", 3000)); api.setTool(Date.now() - 1000);
  api.kyroWatchForRefusal("response.output_audio_transcript.delta", { delta: "I couldn't open that." }); await settle(); assert.equal(calls.typed.length, 0, "its tool answer stands");
  // the page already has this turn
  ({ api, calls } = load()); api.setHeard(heardNow("Open documents")); api.setWindow(Date.now() + 20000);
  api.kyroWatchForRefusal("response.output_audio_transcript.delta", { delta: "I can't do that." }); await settle(); assert.equal(calls.typed.length, 0);
  // old words
  ({ api, calls } = load()); api.setHeard(heardNow("Something said long ago", 60000));
  api.kyroWatchForRefusal("response.output_audio_transcript.delta", { delta: "I can't do that." }); await settle(); assert.equal(calls.typed.length, 0);
  // ordinary speech
  ({ api, calls } = load()); api.setHeard(heardNow("Hello"));
  api.kyroWatchForRefusal("response.output_audio_transcript.delta", { delta: "Hello! How can I help you today?" }); await settle(); assert.equal(calls.typed.length, 0);
});

test("when the governed route cannot answer either, the person is told so in a short line instead of hearing half a refusal and silence", async () => {
  const { api, calls } = load({ handled: false });
  api.setHeard(heardNow("Sing me a song"));
  api.kyroWatchForRefusal("response.output_audio_transcript.delta", { delta: "I can't sing." }); await settle();
  assert.deepEqual(calls.said, ["Sorry, I could not do that one. Could you say it another way?"]);
  assert.equal(api.window(), 0, "the window is closed again");
});

test("a tool call answered through the governed route hands the model what the page said (without the filler or markdown), or nothing to do with it when the route cannot answer", async () => {
  const { api, calls } = load();
  const answer = await api.kyroAnswerLikeTyped("I want to look at my notes");
  assert.deepEqual({ ...answer }, { ok: true, status: "completed", response: "Your to-do list is empty.", executionVerified: true, blockedReason: null, shownOnScreen: true });
  assert.equal(calls.typed[0][1].source, "voice-tool"); assert.equal(calls.typed[0][1].kyroDirect, true);
  assert.equal(await load({ handled: false }).api.kyroAnswerLikeTyped("x"), null, "not answered there: the old tool is used");
  assert.equal(await load().api.kyroAnswerLikeTyped("   "), null);
  const silent = load({ handled: async () => true });
  assert.equal((await silent.api.kyroAnswerLikeTyped("Show my notes")).response, "It is on the screen now.", "drawn but nothing said");
  for (const name of ["nexus_everyday_records", "nexus_lists", "nexus_automation_reminder", "nexus_calendar", "nexus_health_preparation", "nexus_workforce_learning", "nexus_marketplace_logistics", "nexus_business_assistant", "nexus_agriculture", "nexus_document_export"]) assert.ok(api.KYRO_GOVERNED_VOICE_TOOLS.has(name), name);
  for (const name of ["nexus_maps_route", "nexus_weather", "nexus_live_knowledge", "nexus_general_conversation", "nexus_communications", "nexus_file_document_analysis"]) assert.ok(!api.KYRO_GOVERNED_VOICE_TOOLS.has(name), name + " keeps its own route");
});

test("the wiring: what the page says is captured for the model, the tool call goes through the governed route first, a spoken yes or no is answered from what was heard, and the watcher sees every event", () => {
  assert.match(app, /function setVoiceResponse\(message, speak = false, options = \{\}\) \{\s*kyroNoteActivity\(\);\s*if \(kyroVoiceCapture\) kyroVoiceCapture\.push\(String\(message \?\? ""\)\);/);
  const call = app.slice(app.indexOf("async function callNexusOpenAiRealtimeTool("), app.indexOf("const correlationId = `rt-sdk-", app.indexOf("async function callNexusOpenAiRealtimeTool(")));
  assert.match(call, /kyroToolCalledAt = Date\.now\(\);/);
  assert.match(call, /if \(KYRO_GOVERNED_VOICE_TOOLS\.has\(String\(toolName \|\| ""\)\) \|\| nexusPendingBehaviorConfirmation\) \{\s*const governed = await kyroAnswerLikeTyped\(command\);\s*if \(governed\) return governed;/);
  assert.ok(call.indexOf("kyroShowVisualRequest") < call.indexOf("kyroAnswerLikeTyped"), "after the page's own quick answers");
  assert.match(call, /Date\.now\(\) - kyroConfirmedAt < 8000/, "a yes the page already answered is not answered twice");
  const route = app.slice(app.indexOf("function routeKyroVoiceIntakeTranscript("), app.indexOf("function startKyroResumeIntake") > 0 ? app.indexOf("function routeKyroVoiceIntakeTranscript(") + 6000 : undefined);
  assert.match(route, /if \(trimmed && source !== "tool-call"\) \{[\s\S]*kyroHeard = \{ key: heardKey, text: trimmed, at: Date\.now\(\), recovered: false \};/);
  assert.match(route, /if \(trimmed && typeof nexusPendingBehaviorConfirmation !== "undefined" && nexusPendingBehaviorConfirmation && detectNexusPendingConfirmationReply\(trimmed\)\) \{[\s\S]*kyroConfirmedAt = Date\.now\(\);[\s\S]*source: "voice-confirmation"/);
  assert.match(app, /try \{ kyroWatchForRefusal\(eventType, payload\); \} catch/);
  assert.equal((app.match(/try \{ kyroRecoverRefusal\(\); \} catch/g) || []).length, 2, "after the words are heard by either route");
});

// Also found on the same run: "show me some pictures of tomato plants" put the gallery on the screen, but the model was told "nothing is showing" (the check looked for an attribute the gallery no longer carries) and said so; and
// "close the screen" by voice left the map on the screen (a section opened by name was never left).
test("the model is told the pictures or videos are showing when the gallery screen the page draws is on the screen, and told the truth when nothing is", async () => {
  const start = app.indexOf("async function kyroShowVisualRequest(");
  const fn = app.slice(start, app.indexOf("\n}\n", start) + 3);
  const run = async (kind, present) => {
    const sandbox = { handleNexusUnifiedBrainRuntimeCommand: async () => true, window: { setTimeout: callback => callback() }, document: { querySelectorAll: selector => ({ length: present(selector) }) }, Promise };
    vm.createContext(sandbox); vm.runInContext(fn + "\nthis.run = kyroShowVisualRequest;", sandbox);
    return sandbox.run("Show me pictures of tomatoes", kind);
  };
  let result = await run("images", selector => (selector.includes('[data-kyro-result="gallery"] img') ? 5 : 0));
  assert.equal(result.ok, true); assert.match(result.response, /5 pictures/);
  result = await run("videos", selector => (selector.includes('[data-kyro-result="gallery"] iframe') ? 6 : 0));
  assert.equal(result.ok, true); assert.match(result.response, /6 videos/);
  result = await run("images", () => 0);
  assert.equal(result.ok, false); assert.equal(result.blockedReason, "visual-results-not-shown");
});

test("closing returns to the orb even from a section opened by name (the map)", () => {
  const start = app.indexOf("async function kyroReturnToOrb(");
  const fn = app.slice(start, app.indexOf("\n}\n", start) + 3);
  assert.match(fn, /if \(typeof currentSectionId === "function" && currentSectionId\(\) !== "dashboard"\) goSection\("dashboard", \{ instant: true, scroll: false, openDefaultAction: false, keepAssistant: false, allowRealtimeSurfaceChange: true, source: "return-to-orb" \}\);/);
  assert.ok(fn.indexOf("closeNexusFunctionWindow") < fn.indexOf('goSection("dashboard"'), "after the function window is closed");
});
