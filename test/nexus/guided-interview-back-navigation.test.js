"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const appSource = fs.readFileSync(path.join(__dirname, "..", "..", "public", "app.js"), "utf8");

function extractFunction(name) {
  const start = appSource.indexOf(`function ${name}(`);
  assert.ok(start > 0, `could not locate function ${name} in app.js`);
  const parenStart = appSource.indexOf("(", start);
  let parenDepth = 0;
  let parenEnd = parenStart;
  for (; parenEnd < appSource.length; parenEnd += 1) {
    if (appSource[parenEnd] === "(") parenDepth += 1;
    else if (appSource[parenEnd] === ")") { parenDepth -= 1; if (parenDepth === 0) break; }
  }
  const bodyStart = appSource.indexOf("{", parenEnd);
  let depth = 0; let i = bodyStart;
  for (; i < appSource.length; i += 1) {
    if (appSource[i] === "{") depth += 1;
    else if (appSource[i] === "}") { depth -= 1; if (depth === 0) break; }
  }
  return appSource.slice(start, i + 1);
}

function loadNextIndex() {
  const context = {};
  vm.createContext(context);
  vm.runInContext(`${extractFunction("nexusInterviewValues")}\n${extractFunction("nextNexusInterviewIndex")}\nnextNexusInterviewIndex;`, context);
  return (fields, interview) => vm.runInContext(`nextNexusInterviewIndex(${JSON.stringify(fields)}, ${JSON.stringify(interview)})`, context);
}

// Found live: the guided-interview wizard's "Back" and "Correct previous"
// buttons deliberately set interview.currentIndex to an ALREADY-ANSWERED
// field's index so the user can review/edit it -- but nextNexusInterviewIndex
// (the sole function that decides which field to display) always searched
// forward from currentIndex for the next field WITHOUT a value, immediately
// skipping past the very field the user asked to revise and landing on a
// later, unrelated question instead. A real user could never actually
// navigate back to fix a prior answer.
test("nextNexusInterviewIndex shows the exact field currentIndex points to, even if it is already answered (Back/Correct-previous navigation)", () => {
  const nextIndex = loadNextIndex();
  const fields = [{ name: "crop" }, { name: "location" }, { name: "quantity" }, { name: "buyer" }];
  const interview = {
    values: { crop: "maize", location: "Nakuru", quantity: "20 bags", buyer: "" },
    currentIndex: 1, // "Correct previous" navigated back to the already-answered "location" field
    skipped: []
  };
  assert.equal(nextIndex(fields, interview), 1, "the field the user explicitly navigated back to must be shown, not skipped past");
});

test("nextNexusInterviewIndex still finds the first open field on a fresh interview (currentIndex out of range)", () => {
  const nextIndex = loadNextIndex();
  const fields = [{ name: "crop" }, { name: "location" }, { name: "quantity" }];
  const interview = {
    values: { crop: "maize" },
    currentIndex: 3, // e.g. a completed/reset interview, out of bounds
    skipped: []
  };
  assert.equal(nextIndex(fields, interview), 1, "falls back to the first genuinely unanswered field when currentIndex is out of range");
});

test("nextNexusInterviewIndex normal forward flow still lands on the next unanswered field after a save", () => {
  const nextIndex = loadNextIndex();
  const fields = [{ name: "crop" }, { name: "location" }, { name: "quantity" }];
  // Mirrors the real save handler: after answering "crop" (index 0), currentIndex becomes 1.
  const interview = { values: { crop: "maize" }, currentIndex: 1, skipped: [] };
  assert.equal(nextIndex(fields, interview), 1, "normal forward progression is unaffected by the fix");
});
