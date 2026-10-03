"use strict";
const assert = require("node:assert/strict");
const test = require("node:test");
const { structuredIntakePlan, sanitizeIntakeValues, STRUCTURED_INTAKES } = require("../../nexus/intake/structured-intakes.js");

test("an unknown intake id is refused, not silently run as a generic tool call", () => {
  assert.throws(() => structuredIntakePlan("something-made-up", { name: "Amina" }),
    error => error.code === "intake_unknown" && error.status === 400);
});

test("a missing name is refused with the same code the server-side builder itself uses", () => {
  assert.throws(() => structuredIntakePlan("resume", { skills: "farming" }),
    error => error.code === "resume_name_required" && error.status === 422);
});

test("a valid resume intake produces the same plan-step shape resumePlan() produces", () => {
  const plan = structuredIntakePlan("resume", {
    name: "Amina Wanjiru", location: "Kisumu", skills: "Crop planning, irrigation, and livestock management",
    experience: ["I grew maize for five years"], education: "Diploma in Agriculture", languages: "Swahili and English"
  });
  assert.equal(plan.application, "workforce");
  assert.equal(plan.riskTier, "low");
  assert.equal(plan.clarification, null);
  assert.equal(plan.steps.length, 1);
  assert.equal(plan.steps[0].toolId, "resume.create");
  assert.equal(plan.steps[0].clientStepId, "create-resume");
  assert.equal(plan.steps[0].input.name, "Amina Wanjiru");
  assert.deepEqual(plan.steps[0].input.experience, ["I grew maize for five years"]);
  assert.equal(plan.goal, "Create a resume for Amina Wanjiru");
});

test("sanitizeIntakeValues only keeps the intake's own allowed keys", () => {
  const sanitized = sanitizeIntakeValues(STRUCTURED_INTAKES.resume.keys, {
    name: "Amina", skills: "farming", notAllowedKey: "should be dropped", __proto__: { polluted: true }
  });
  assert.equal(sanitized.name, "Amina");
  assert.equal(sanitized.skills, "farming");
  assert.equal("notAllowedKey" in sanitized, false);
  assert.equal(sanitized.polluted, undefined);
});

test("sanitizeIntakeValues drops empty values instead of keeping blank fields", () => {
  const sanitized = sanitizeIntakeValues(STRUCTURED_INTAKES.resume.keys, { name: "Amina", location: "", experience: [] });
  assert.equal("location" in sanitized, false);
  assert.equal("experience" in sanitized, false);
});

test("sanitizeIntakeValues caps string length and array item count", () => {
  const longString = "x".repeat(2000);
  const bigArray = Array.from({ length: 20 }, (_, i) => `item ${i}`);
  const sanitized = sanitizeIntakeValues(STRUCTURED_INTAKES.resume.keys, { name: "Amina", skills: longString, experience: bigArray });
  assert.ok(sanitized.skills.length <= 600);
  assert.ok(sanitized.experience.length <= 12);
});

test("sanitizeIntakeValues never splits a string value itself -- that stays the executor's job", () => {
  const sanitized = sanitizeIntakeValues(STRUCTURED_INTAKES.resume.keys, { name: "Amina", skills: "Crop planning, irrigation, and livestock management" });
  assert.equal(sanitized.skills, "Crop planning, irrigation, and livestock management");
});
