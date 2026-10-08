"use strict";
// Found by typing into the real app in a browser: the answer to a typed request was only in hidden screen-reader regions,
// the audio-only conversation screen kept saying "Ask AgriNexus is open.", and a refused confirmation said nothing at all.
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");

function slice(startMarker, endMarker) {
  const from = app.indexOf(startMarker);
  assert.ok(from >= 0, `${startMarker} must exist`);
  const to = app.indexOf(endMarker, from);
  assert.ok(to > from, `${endMarker} must follow`);
  return app.slice(from, to);
}

test("the audio-only conversation screen shows the newest reply and the last thing heard", () => {
  const nodes = { status: { textContent: "Ask AgriNexus is open." }, caption: { textContent: "Last heard: old" } };
  const sandbox = {
    document: { querySelector: selector => (selector.includes("audio-companion-status") ? nodes.status : selector.includes("audio-companion-caption") ? nodes.caption : null) },
    nexusPresenceState: { lastResponse: "You have 1 saved blood pressure reading: 120 over 80.", lastUserInput: "show my blood pressure readings" },
    translateText: text => text
  };
  vm.createContext(sandbox);
  vm.runInContext(slice("function updateNexusAudioCompanionDom()", "function updateNexusPresenceDom()"), sandbox);
  sandbox.updateNexusAudioCompanionDom();
  assert.equal(nodes.status.textContent, "You have 1 saved blood pressure reading: 120 over 80.");
  assert.equal(nodes.caption.textContent, "Last heard: show my blood pressure readings");
});

test("updateNexusPresenceDom refreshes the audio companion before it looks for the command-centre presence layer", () => {
  const body = slice("function updateNexusPresenceDom()", "function renderNexusConversationalPresenceLayer()");
  assert.ok(body.indexOf("updateNexusAudioCompanionDom()") > 0);
  assert.ok(body.indexOf("updateNexusAudioCompanionDom()") < body.indexOf("if (!layer) return;"));
});

test("a typed answer does not first log a fake 'Ask AgriNexus is open' assistant turn", () => {
  const result = slice("async function processNexusAuthoritativeBehaviorResult(", "\n}\n");
  assert.match(result, /openAskNexus\(\{ quiet: true \}\)/);
  const open = slice("function openAskNexus(", "function closeAskNexus(");
  assert.match(open, /if \(options\.quiet === true\) return;[\s\S]*Ask AgriNexus is open/);
});

test("a refused confirmation tells the person what the server said instead of staying silent", () => {
  const submit = slice("async function submitNexusPendingBehaviorConfirmation(", "// Keeps a plain record-keeping note");
  const catchBlock = submit.slice(submit.indexOf("} catch (error) {"));
  assert.match(catchBlock, /setVoiceResponse\(reason/);
  assert.match(catchBlock, /return true;/);
});

test("the Home button's own command and a typed 'home' go home instead of being sent to the server", () => {
  const fn = slice("function isNexusTrueExperienceReturnHomeCommand(", "function nexusCoreStateClass(");
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(fn, sandbox);
  for (const phrase of ["Open Home.", "home", "Go home", "Return home", "open nexus home"]) assert.equal(sandbox.isNexusTrueExperienceReturnHomeCommand(phrase), true, phrase);
  assert.equal(sandbox.isNexusTrueExperienceReturnHomeCommand("open home loans"), false);
  const firewall = slice("function installNexusStandardUserAuthorityFirewall()", "async function boot()");
  assert.ok(firewall.indexOf("isNexusTrueExperienceReturnHomeCommand(command)") > 0);
  assert.ok(firewall.indexOf('handleNexusOsMissionLifecycleAction("return-home")') < firewall.indexOf("handleNexusUnifiedBrainRuntimeCommand(command"));
});
