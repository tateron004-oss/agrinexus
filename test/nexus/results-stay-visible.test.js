"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const appSource = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");

// Found testing production, signed in as the user, with the real page and the real server:
//  - "Find a picture of a maize armyworm" found five pictures on the server, but on the orb home the page reported "The images outcome was not visibly or audibly verified" and showed nothing. The image gallery had a branch of
//    its own in renderNexusPassiveWorkspace that said "opened" and never opened the workspace the gallery is drawn in, so it had nowhere visible to go.
//  - A web search answer and its sources, the videos from "show me videos about ...", a checklist and the reminders view were drawn into the workspace (the page even acknowledged them as visible) and then wiped by the redraw of
//    the user workspace that follows. Documents had been fixed for exactly this; every other result was left with the window and none of the answer.
function slice(startMarker, endMarker) {
  const start = appSource.indexOf(startMarker);
  assert.ok(start > 0, `could not find ${startMarker}`);
  const end = appSource.indexOf(endMarker, start);
  assert.ok(end > start, `could not find the end of ${startMarker}`);
  return appSource.slice(start, end);
}

test("an image gallery is opened by the same branch as every other result, not by a branch of its own that never opens the workspace", async () => {
  const source = slice("async function renderNexusPassiveWorkspace(", "\nfunction verifyNexusYouTubePlaybackStarted(");
  assert.doesNotMatch(source, /else if \(presentation\.kind === "image-gallery"\) \{\s*opened = true;/, "no branch of its own that only says opened");
  assert.match(source, /presentation\.kind === "image-gallery"\s*\? await renderNexusAuthoritativeImages\(outcome\)/, "the gallery is still drawn by its own function");

  // behaviour: for an image outcome the capability (the workspace the gallery is drawn in) is opened first, then the gallery is drawn, and the page reports it visible
  const calls = [];
  const surface = { dataset: { loadedImages: "5" }, getClientRects: () => [{}] };
  const sandbox = {
    experienceMode: "user", document: { body: { classList: { contains: () => true }, dataset: {} }, querySelector: () => null },
    window: { setTimeout: (fn) => fn(), KyroMediaPlayerController: null }, setExperienceMode() {}, nexusTrueExperienceSessionStarted: false,
    validateNexusPassivePresentation: outcome => outcome.presentation, recordNexusMapCommandBoundRenderTrace() {},
    nexusAuthoritativeCapabilityId: () => "ask-nexus",
    openNexusCapability: (id, options) => { calls.push(["open", id, options.source]); return true; },
    renderNexusAuthoritativeImages: async () => { calls.push(["images"]); return surface; },
    renderNexusAuthoritativeData: () => { calls.push(["data"]); return surface; }, nexusDocumentLifecycleComplete: () => false,
    renderNexusAuthoritativeResume: () => null, renderNexusAuthoritativeDocument: () => null, renderNexusAuthoritativeVideos: async () => surface, renderNexusAuthoritativeChecklist: async () => surface,
    Promise, String, Number, Object, Array, Boolean, Date
  };
  vm.createContext(sandbox);
  vm.runInContext(`${source}\nthis.run = renderNexusPassiveWorkspace;`, sandbox);
  const outcome = { workspace: "images", application: "images", operation: "show_images", commandId: "cmd_1", correlationId: "c1", response: "ok", originalText: "Find a picture of a maize armyworm", presentation: { kind: "image-gallery" }, verification: { providerVerified: true }, data: { images: [{ url: "https://example.org/a.jpg" }] } };
  const receipt = await sandbox.run(outcome, outcome.data, {});
  assert.deepEqual(calls.map(call => call[0]), ["open", "images"], "the workspace is opened before the gallery is drawn");
  assert.equal(receipt.visible, true); assert.equal(receipt.evidence.loadedImages, 5);
});

test("after the user workspace is redrawn, every result drawn into it is drawn again, as documents already were; a map and the music player are left alone", async () => {
  const source = slice("async function processNexusAuthoritativeBehaviorResult(", "\nasync function submitNexusPendingBehaviorConfirmation(");
  assert.match(source, /kind === "image-gallery"\) await renderNexusAuthoritativeImages\(drawn\)/);
  const kinds = { "image-gallery": "images", "video-gallery": "videos", checklist: "checklist", "source-answer": "data", reminder: "data", "location-list": "data", assessment: "data", document: "document", map: null, "media-player": null };
  for (const [kind, expected] of Object.entries(kinds)) {
    const calls = [];
    const sandbox = {
      localStorage: { getItem: () => null, setItem() {}, removeItem() {} }, NEXUS_AUTHORITATIVE_TASK_KEY: "k",
      validateNexusPassivePresentation() {}, recordNexusMapCommandBoundRenderTrace() {},
      nexusAuthoritativeOutcomeRenderer: async () => ({ render: async () => ({ acknowledged: true }) }),
      nexusAgenticBrainLastResult: null, nexusPendingBehaviorConfirmation: null,
      openAskNexus() { calls.push("open-ask"); }, enableHeyAgriNexusMode() {}, renderUserWorkspace: () => { calls.push("redraw"); },
      nexusDocumentLifecycleComplete: () => false, renderNexusAuthoritativeResume: () => calls.push("resume"), renderNexusAuthoritativeDocument: () => calls.push("document"),
      renderNexusAuthoritativeImages: async () => calls.push("images"), renderNexusAuthoritativeVideos: async () => calls.push("videos"), renderNexusAuthoritativeChecklist: async () => calls.push("checklist"), renderNexusAuthoritativeData: () => calls.push("data"),
      kyroRenderedAnswerLine: () => "", kyroShowTypedResult: () => false, kyroReminderListLine: () => "", kyroEmptyRenderAnswer: () => "", kyroPlainRenderMessage: (r, m) => m, // (the answer-on-screen path, kyro-result-screen.test.js: when it draws one, nothing is drawn into the window again)
      setVoiceResponse() { calls.push("say"); }, nexusGalleryMessage: () => "", String, Boolean
    };
    vm.createContext(sandbox);
    vm.runInContext(`${source}\nthis.run = processNexusAuthoritativeBehaviorResult;`, sandbox);
    const result = { state: "render_required", response: "ok", taskId: "tsk_1", application: "x", render: { presentation: { kind }, data: {}, response: "ok" } };
    assert.equal(await sandbox.run(result, "a request"), true, kind);
    const afterRedraw = calls.slice(calls.indexOf("redraw") + 1).filter(call => call !== "say");
    assert.deepEqual(afterRedraw, expected ? [expected] : [], `${kind}: what is drawn again after the redraw`);
  }
  // a gallery that cannot be drawn again does not stop the answer being said
  const sandbox = {
    localStorage: { getItem: () => null, setItem() {}, removeItem() {} }, NEXUS_AUTHORITATIVE_TASK_KEY: "k", validateNexusPassivePresentation() {}, recordNexusMapCommandBoundRenderTrace() {},
    nexusAuthoritativeOutcomeRenderer: async () => ({ render: async () => ({ acknowledged: true }) }), nexusAgenticBrainLastResult: null, nexusPendingBehaviorConfirmation: null,
    openAskNexus() {}, enableHeyAgriNexusMode() {}, renderUserWorkspace() {}, nexusDocumentLifecycleComplete: () => false, renderNexusAuthoritativeImages: async () => { throw new Error("No authoritative image result loaded visibly."); },
    kyroRenderedAnswerLine: () => "", kyroShowTypedResult: () => false, kyroReminderListLine: () => "", kyroEmptyRenderAnswer: () => "", kyroPlainRenderMessage: (r, m) => m, setVoiceResponse() { sandbox.said = true; }, nexusGalleryMessage: () => "", String, Boolean
  };
  vm.createContext(sandbox);
  vm.runInContext(`${source}\nthis.run = processNexusAuthoritativeBehaviorResult;`, sandbox);
  assert.equal(await sandbox.run({ state: "render_required", response: "ok", taskId: "tsk_1", render: { presentation: { kind: "image-gallery" }, data: {}, response: "ok" } }, "a request"), true);
  assert.equal(sandbox.said, true);
});

// Found sweeping the business side on the live site: the renderer threw "The business outcome was not visibly or audibly verified" for every read of the person's own records, so nothing was said and only a raw card was left.
test("a result with a plain answer is shown and said even when the card cannot be verified as showing; one with no plain answer still fails", async () => {
  const source = slice("async function processNexusAuthoritativeBehaviorResult(", "\nasync function submitNexusPendingBehaviorConfirmation(");
  const run = async (line, typedDrawsAnyway = false) => {
    const calls = [];
    const sandbox = {
      localStorage: { getItem: () => null, setItem() {}, removeItem() {} }, NEXUS_AUTHORITATIVE_TASK_KEY: "k", validateNexusPassivePresentation() {}, recordNexusMapCommandBoundRenderTrace() {},
      nexusAuthoritativeOutcomeRenderer: async () => ({ render: async () => { throw new Error("The business outcome was not visibly or audibly verified."); } }), nexusAgenticBrainLastResult: null, nexusPendingBehaviorConfirmation: null,
      openAskNexus() {}, enableHeyAgriNexusMode() {}, renderUserWorkspace() {}, nexusDocumentLifecycleComplete: () => false,
      kyroRenderedAnswerLine: () => line, kyroShowTypedResult: () => { calls.push("screen"); return Boolean(line) || typedDrawsAnyway; }, kyroReminderListLine: () => "", kyroEmptyRenderAnswer: () => "", kyroPlainRenderMessage: (r, m) => m,
      renderNexusAuthoritativeData: () => calls.push("card"), setVoiceResponse: text => calls.push("say:" + text), nexusGalleryMessage: () => "", document: { querySelector: () => null }, closeNexusFunctionWindow() {}, String, Boolean
    };
    vm.createContext(sandbox);
    vm.runInContext(`${source}\nthis.run = processNexusAuthoritativeBehaviorResult;`, sandbox);
    const result = { state: "render_required", response: "ok", taskId: "tsk_1", application: "business", render: { presentation: { kind: "operation" }, data: {}, response: '"Kyro Test Workspace" has 2 clients: Grace Otieno and Services.' } };
    const outcome = await sandbox.run(result, "Show my clients").then(value => ({ value }), error => ({ error: error.message }));
    return { outcome, calls };
  };
  const answered = await run('"Kyro Test Workspace" has 2 clients: Grace Otieno and Services.');
  assert.equal(answered.outcome.value, true); assert.ok(answered.calls.includes("screen")); assert.ok(answered.calls.includes('say:"Kyro Test Workspace" has 2 clients: Grace Otieno and Services.'));
  assert.ok(!answered.calls.includes("card"), "no raw card when the answer is on the screen");
  // a list of places has no one-line answer, but the page can still draw it on the screen: that is the visible outcome too
  const places = await run("", true);
  assert.equal(places.outcome.value, true); assert.ok(places.calls.includes("screen")); assert.ok(!places.calls.includes("card"));
  const unanswered = await run("");
  assert.match(unanswered.outcome.error, /not visibly or audibly verified/, "no plain answer: the failure is raised as before");
});
