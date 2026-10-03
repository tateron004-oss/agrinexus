"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const source = fs.readFileSync(path.join(__dirname, "../../public/browser-action-controller.js"), "utf8");

// Found live while testing Kyro by voice: saying "Can you make a resume for me?" opens THIS
// client-side resume builder (public/browser-action-controller.js), a separate, simpler form from
// the server-side resume.create tool (nexus/resume/build.js, fixed in #842). Typing a comma-joined
// skills phrase ("Crop planning, irrigation, and livestock management") into the Skills field and
// clicking "Download resume" produced a single run-on line under SKILLS in the downloaded file --
// this builder had no splitting logic at all, unlike the server-side one.

function loadController() {
  const windowObj = { addEventListener: () => {}, dispatchEvent: () => {}, CustomEvent: function CustomEvent() {} };
  const sandbox = { window: windowObj };
  vm.createContext(sandbox);
  vm.runInContext(source, sandbox);
  return sandbox.window.NexusBrowserActionController;
}

test("a comma-joined skills phrase becomes separate skill lines, not one run-on line", () => {
  const controller = loadController();
  const lines = Array.from(controller.getResumeSkillLines("Crop planning, irrigation, and livestock management"));
  assert.equal(lines.join("|"), "Crop planning|irrigation|livestock management");
});

test("an Oxford comma before 'and' does not leave a stray 'and' stuck to the last item", () => {
  const controller = loadController();
  const lines = Array.from(controller.getResumeSkillLines("Welding, carpentry, and plumbing"));
  assert.equal(lines.join("|"), "Welding|carpentry|plumbing");
});

test("skills separated by semicolons or newlines also split correctly", () => {
  const controller = loadController();
  const lines = Array.from(controller.getResumeSkillLines("Welding; carpentry\nplumbing"));
  assert.equal(lines.join("|"), "Welding|carpentry|plumbing");
});

test("a single skill with no separators stays as one line", () => {
  const controller = loadController();
  const lines = Array.from(controller.getResumeSkillLines("Farming"));
  assert.equal(lines.join("|"), "Farming");
});

test("empty or missing skills produce no lines", () => {
  const controller = loadController();
  assert.equal(controller.getResumeSkillLines("").length, 0);
  assert.equal(controller.getResumeSkillLines(undefined).length, 0);
});
