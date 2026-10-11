"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Stage = require("../../public/kyro-task-stage.js");

// The Jarvis rule: when Kyro opens a task, only the task is on screen; when it is done, the orb is back. These tests pin when the stage is on, that the styles hide the right things
// (and keep the mic reachable), that the file is loaded, and that finished results and ended videos return to the orb by themselves.

const root = path.join(__dirname, "../..");
const css = fs.readFileSync(path.join(root, "public/styles.css"), "utf8");
const app = fs.readFileSync(path.join(root, "public/app.js"), "utf8");
const html = fs.readFileSync(path.join(root, "public/index.html"), "utf8");
const sw = fs.readFileSync(path.join(root, "public/sw.js"), "utf8");

test("the stage is on for every kind of task and off for the orb home", () => {
  for (const open of ["mapOpen", "functionWindow", "shell", "youtube", "video", "intake", "workflowModal"]) assert.equal(Stage.isStaged({ [open]: true }), true, open);
  assert.equal(Stage.isStaged({}), false, "the orb home");
  assert.equal(Stage.isStaged(), false);
});

function fakeDocument({ classes = [], elements = {} } = {}) {
  const set = new Set(classes);
  return { body: { classList: { contains: name => set.has(name), toggle: (name, on) => { if (on) set.add(name); else set.delete(name); } } }, querySelectorAll: selector => elements[selector] || [] };
}
const visible = { hidden: false, dataset: {}, getAttribute: () => null };

test("what is on the page decides it: parked, hidden and aria-hidden cards do not count", () => {
  const shell = Stage.SHELL_SELECTOR;
  const staged = doc => Stage.isStaged(Stage.readSnapshot(doc));
  assert.equal(staged(fakeDocument({ elements: { [shell]: [visible] } })), true);
  assert.equal(staged(fakeDocument({ elements: { [shell]: [{ ...visible, dataset: { kyroParked: "true" } }] } })), false, "the live music card parked out of sight");
  assert.equal(staged(fakeDocument({ elements: { [shell]: [{ ...visible, hidden: true }] } })), false);
  assert.equal(staged(fakeDocument({ elements: { [shell]: [{ ...visible, getAttribute: name => (name === "aria-hidden" ? "true" : null) }] } })), false);
  assert.equal(staged(fakeDocument({ classes: ["user-map-full-open"] })), true, "the full map");
  assert.equal(staged(fakeDocument({ classes: ["workflow-open"] })), true);
  assert.equal(staged(fakeDocument({ elements: { '#nexus-workspace[data-nexus-workspace="true"]': [visible] } })), true, "a function window");
  assert.equal(staged(fakeDocument({ elements: { ".kyro-mp:not([hidden]) video, .kyro-mp:not([hidden]) iframe": [visible] } })), true, "a playing video");
  assert.equal(staged(fakeDocument()), false, "nothing open: the orb");
});

test("install keeps the body class in step with the page, a frame after a change", () => {
  const frames = []; let observed = null;
  class FakeObserver { constructor(fn) { this.fn = fn; observed = this; } observe() {} disconnect() { this.stopped = true; } }
  const doc = fakeDocument();
  const page = { MutationObserver: FakeObserver, requestAnimationFrame: fn => frames.push(fn), setTimeout };
  const handle = Stage.install(page, doc);
  assert.equal(doc.body.classList.contains(Stage.CLASS_NAME), false);
  doc.body.classList.toggle("user-map-full-open", true); observed.fn(); observed.fn();
  assert.equal(frames.length, 1, "several changes in one frame cost one check");
  frames.shift()();
  assert.equal(doc.body.classList.contains(Stage.CLASS_NAME), true);
  doc.body.classList.toggle("user-map-full-open", false); observed.fn(); frames.shift()();
  assert.equal(doc.body.classList.contains(Stage.CLASS_NAME), false, "the orb layer is back");
  handle.stop(); assert.equal(observed.stopped, true);
  assert.equal(Stage.install({}, doc).sync(), false, "a page with no observer is left alone");
});

test("the styles show only the task: banner, captions, dock and workflow controls are hidden, the mic stays reachable, one close mark stays", () => {
  const hidden = css.match(/body\.user-mode\.kyro-task-stage #appView > header\.topbar[^{}]*\{[^}]*\}/)[0];
  for (const id of ["#userCaptionPanel", "#globalAssistantBar", "#jarvisDock", "#userVoiceDock"]) assert.ok(hidden.includes(id), id);
  assert.match(css, /body\.user-mode\.kyro-task-stage \.nexus-true-experience-root\s*\{\s*visibility:\s*hidden;/, "the orb, hero and panels behind the task are not drawn");
  assert.match(css, /body\.user-mode\.kyro-task-stage \.nexus-workflow-modal-backdrop,\s*body\.user-mode\.kyro-task-stage \.nexus-workflow-modal-backdrop \*\s*\{\s*visibility:\s*visible;/);
  const controls = css.match(/body\.user-mode\.kyro-task-stage \.nexus-workflow-window-actions button:not\(\[data-nexus-workflow-close\]\)[^{]*\{[^}]*display:\s*none !important/)[0];
  for (const part of ["nexus-workflow-actions", "nexus-workflow-steps", "nexus-workflow-history", "nexus-app-window-switcher", "nexus-workflow-launch-status"]) assert.ok(controls.includes(part), part);
  assert.match(css, /\[data-nexus-workflow-close\]::before\s*\{\s*content:\s*"\\00d7"/, "the one close mark");
  assert.doesNotMatch(css.match(/kyro-task-stage #nexusPermanentMicrophoneDock[^{]*\{[^}]*\}/)[0], /display:\s*none/);
});

test("the file is loaded before app.js, cached by the service worker, installed by the app, and results and ended videos return to the orb", () => {
  const tag = html.indexOf("/kyro-task-stage.js");
  assert.ok(tag > 0 && tag < html.indexOf("/app.js"), "loaded before app.js");
  assert.ok(sw.includes("/kyro-task-stage.js"), "in the service worker's shell list");
  assert.match(app, /window\.KyroTaskStage\?\.install\(window, document\)/);
  assert.match(app, /function kyroFinishedResultShowing\(\)/);
  assert.match(app, /if \(kyroFinishedResultShowing\(\)\) return true;/, "a finished result is an answer, so the quiet-spell return clears it");
  assert.match(app, /!kyroFinishedResultShowing\(\)\) return true;/, "and is not work that holds the screen");
  const ended = app.slice(app.indexOf("let kyroMediaEndedTimer"), app.indexOf("// Optional ducking"));
  assert.match(ended, /snapshot\?\.state !== "ended"/); assert.match(ended, /controller\.stop\(\{ announce: false \}\)/);
  assert.match(ended, /!kyroWorkOpen\(\) && !kyroActiveVoiceIntake\) void kyroReturnToOrb\(\{ reason: "idle"/, "only when nothing else is open and no form is waiting");
});
