"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { healthSavedResponse } = require("../../nexus/runtime/behavior-spine.js");

// Found walking the real page: after "yes" to saving a health reading the person was told only "Nexus completed the governed execution and is rendering the verified result."
const plan = input => ({ steps: [{ toolId: "health.record", input }] });

test("a saved reading is said back in plain words, from the step's own numbers, with no guidance and no diagnosis", () => {
  assert.equal(healthSavedResponse(plan({ readingType: "blood-pressure", systolic: 151, diastolic: 97 }), {}), "Saved your blood pressure reading: 151 over 97.");
  assert.equal(healthSavedResponse(plan({ readingType: "blood-glucose", glucose: 7.2 }), {}), "Saved your blood sugar reading: 7.2.");
  assert.equal(healthSavedResponse(plan({ pulse: 72 }), {}), "Saved your pulse reading: 72.");
  assert.equal(healthSavedResponse(plan({ oxygenSaturation: 96 }), {}), "Saved your oxygen reading: 96 percent.");
  assert.equal(healthSavedResponse({ steps: [{ toolId: "health.chronic-reading", input: { systolic: 120, diastolic: 80 } }] }, {}), "Saved your blood pressure reading: 120 over 80.");
  assert.equal(healthSavedResponse(plan({ readingType: "other" }), {}), "Saved your health reading.");
  for (const text of [healthSavedResponse(plan({ systolic: 190, diastolic: 125 }), {}), healthSavedResponse(plan({ glucose: 2 }), {})]) assert.doesNotMatch(text, /high|low|normal|diagnos|clinician|urgent/i);
});

test("nothing is said for a plan that is not a health reading, or for a Kiswahili turn (that wording needs a fluent speaker)", () => {
  assert.equal(healthSavedResponse({ steps: [{ toolId: "lists.create", input: { title: "x" } }] }, {}), "");
  assert.equal(healthSavedResponse({ steps: [] }, {}), "");
  assert.equal(healthSavedResponse(null, {}), "");
  assert.equal(healthSavedResponse(plan({ systolic: 120, diastolic: 80, language: "sw" }), {}), "");
  assert.equal(healthSavedResponse(plan({ systolic: 120, diastolic: 80 }), { locale: "sw" }), "");
});

test("the behaviour spine uses it for the pending-render answer, after the reminder wording and before the generic line", () => {
  const source = fs.readFileSync(path.join(__dirname, "..", "..", "nexus", "runtime", "behavior-spine.js"), "utf8");
  assert.ok(source.includes('response: reminderSetResponse(plan, context) || healthSavedResponse(plan, context) || placesFoundResponse(plan, task, context) || documentSavedResponse(plan, task, context) || businessAnswerResponse(plan, task) || "Nexus completed the governed execution and is rendering the verified result."'));
});
