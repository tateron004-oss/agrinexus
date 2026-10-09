"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const KyroDismissCommands = require("../../public/kyro-dismiss-commands.js");

// Found by auditing every task after "close the weather card" failed on a phone: a second handler (public/browser-action-controller.js) opens a full-screen weather card for ANY sentence that
// mentions the weather, "close the weather card" included, and the full-screen cards, the map section, players and panels all sit outside the function window that going back to the orb used
// to take down. These tests pin that the controller never opens anything for a dismissal and that going back (and the quiet-spell return) takes every kind of screen down.
const root = path.join(__dirname, "..", "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const controllerSource = fs.readFileSync(path.join(root, "public", "browser-action-controller.js"), "utf8");
const html = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");

function loadController() {
  const windowObj = { addEventListener: () => {}, dispatchEvent: () => {}, CustomEvent: function CustomEvent() {}, KyroDismissCommands };
  const sandbox = { window: windowObj };
  vm.createContext(sandbox);
  vm.runInContext(controllerSource, sandbox);
  return sandbox.window.NexusBrowserActionController;
}

function bodyOf(signature) {
  const start = app.indexOf(signature);
  assert.ok(start >= 0, `could not find ${signature} in app.js`);
  const next = [...app.slice(start + signature.length).matchAll(/\n(?:async )?function [A-Za-z0-9_]+\(/g)][0];
  return app.slice(start, next ? start + signature.length + next.index : undefined);
}

test("the weather, map, music, pilot and provider card handler opens nothing for a request to close, go back or finish", () => {
  const controller = loadController();
  for (const transcript of ["close the weather card", "Close out the weather information.", "dismiss the weather", "hide the forecast", "close the map", "go back to the orb", "I'm done", "that's all"]) {
    const result = controller.handleFinalUserTranscript({ transcript, role: "user", isFinal: true, sessionId: "s", transcriptId: `t-${transcript}` }, () => { throw new Error("no action may be built for a dismissal"); });
    assert.equal(result.handled, false, `"${transcript}" must be left to the dismissal handler`);
    assert.equal(result.weatherCardRequested, undefined);
  }
});

test("the typed click and Enter listeners of that handler skip a dismissal too", () => {
  const listeners = controllerSource.slice(controllerSource.indexOf("commandFromTypedSurface(event)"));
  const guarded = listeners.match(/if \(dismissalRequest\(command\)\) return;/g) || [];
  assert.equal(guarded.length, 2, "both the click and the Enter listener must check for a dismissal before opening anything");
  assert.ok(listeners.indexOf("dismissalRequest(command)") < listeners.indexOf("weatherRequest(command)"));
  assert.match(html, /browser-action-controller\.js\?v=nexus-action-controller-2/, "the page must fetch the new controller, not a cached one");
});

test("going back to the orb takes down the full-screen cards, the rich-data overlay, the report, the modal, the Ask panels and any section other than home", () => {
  const screens = bodyOf("function kyroTearDownScreens(");
  for (const piece of ["KYRO_BODY_SCREEN_SELECTOR", "closeNexusVisualProviderQuestionReport()", "closeWorkflowModal()", "closeUserCaptionPanel()", "user-map-full-open", 'goSection("dashboard"']) {
    assert.ok(screens.includes(piece), `kyroTearDownScreens must handle ${piece}`);
  }
  const selector = app.match(/const KYRO_BODY_SCREEN_SELECTOR = "([^"]+)"/)[1];
  for (const shell of ["data-nexus-live-weather-shell", "data-nexus-visual-shell", "data-nexus-pilot-evidence-shell", "data-nexus-rural-provider-card-shell", "nexusRichDataOverlay"]) {
    assert.ok(selector.includes(shell), `the screen selector must include ${shell}`);
    assert.ok(controllerSource.includes(shell.replace(/^data-/, "").replace(/-(\w)/g, (_, c) => c.toUpperCase())) || app.includes(shell), `${shell} must be a real marker used by the page`);
  }
  const back = bodyOf("async function kyroReturnToOrb(");
  assert.ok(back.indexOf("kyroTearDownScreens(") > 0 && back.indexOf("kyroTearDownScreens(") < back.indexOf("closeNexusFunctionWindow("));
});

test("music keeps playing for 'close the card' and the quiet-spell return, and stops for 'back to the orb' and 'I'm done'", () => {
  const screens = bodyOf("function kyroTearDownScreens(");
  assert.match(screens, /if \(stopMedia\) \{[\s\S]*KyroMediaPlayerController\?\.stop\?\.\(\{ announce: false \}\)[\s\S]*closeNexusYouTubePlayback\(\)[\s\S]*closeNexusProviderAudioPlayback\(\)[\s\S]*kyroNavigator\?\.stop\?\.\(\)/);
  const back = bodyOf("async function kyroReturnToOrb(");
  assert.match(back, /const explicitEnd = options\.reason === "home" \|\| options\.reason === "done";/);
  assert.match(back, /kyroTearDownScreens\(\{ stopMedia: explicitEnd \}\)/);
  assert.match(back, /options\.reason !== "idle"\) \{ pendingAgentClarification = null; pendingNexusSpokenCommand = null; nexusPendingBehaviorConfirmation = null; \}/, "an explicit end drops anything waiting for an answer, the quiet-spell return never does");
  assert.match(bodyOf("async function callNexusOpenAiRealtimeTool("), /kyroReturnToOrb\(\{ reason: window\.KyroDismissCommands\.parse\(command\)\.kind/);
});

test("the music card holds the YouTube player, so closing the card or the quiet-spell return parks it out of sight instead of ending the song", () => {
  const screens = bodyOf("function kyroTearDownScreens(");
  assert.match(screens, /if \(!stopMedia && el\.querySelector\("\[data-nexus-live-music-frame\]"\)\) kyroParkLiveMusicCard\(el\);\s*else el\.remove\(\);/);
  const park = bodyOf("function kyroParkLiveMusicCard(");
  assert.match(park, /dataset\.kyroParked = "true"/);
  assert.match(park, /left:-9999px/);
  assert.ok(!/display\s*:\s*none/.test(park), "display:none can stop a mobile player; park it off-screen instead");
  assert.match(app, /KYRO_SHOWING_SCREEN_SELECTOR = KYRO_BODY_SCREEN_SELECTOR\.split\(", "\)\.map\(selector => `\$\{selector\}:not\(\[data-kyro-parked\]\)`\)/);
  assert.match(bodyOf("function kyroScreenOpen("), /document\.querySelector\(KYRO_SHOWING_SCREEN_SELECTOR\)/, "a parked card is not 'a card on screen'");
});

test("asking for the music to stop, pause or resume reaches the parked card's player too, by every route", () => {
  const control = bodyOf("function kyroLiveMusicCardControl(");
  assert.match(control, /if \(control === "stop"\) \{ shell\?\.remove\(\); return; \}/);
  assert.match(control, /pauseVideo/);
  assert.match(control, /playVideo/);
  assert.match(bodyOf("async function kyroMediaCommand("), /parsed\?\.type === "control"\) kyroLiveMusicCardControl\(parsed\.control\)/);
  assert.match(bodyOf("function kyroMediaControlInstruction("), /kyroLiveMusicCardControl\(String\(control \|\| ""\)\)/);
});

test("the quiet-spell return does not mistake a card covering the orb for 'already on the orb'", () => {
  const snapshot = bodyOf("function kyroAutoReturnSnapshot(");
  assert.match(snapshot, /onOrb: Boolean\(document\.querySelector\("\[data-nexus-genesis-orb-only-home\]"\)\) && !kyroScreenOpen\(\)/);
  const open = bodyOf("function kyroScreenOpen(");
  for (const piece of ["KYRO_SHOWING_SCREEN_SELECTOR", "nexusVisualProviderQuestionReportState", "workflow-open", "user-map-full-open", "jarvisPanel", "currentSectionId() !== \"dashboard\""]) assert.ok(open.includes(piece), `kyroScreenOpen must look at ${piece}`);
});
