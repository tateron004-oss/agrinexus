"use strict";

const { NexusRuntimeError } = require("../runtime/authoritative-task-engine.js");

// A small, explicit allowlist turning a completed voice intake (public/kyro-voice-intake.js +
// public/kyro-intake-forms.js) into a plan step, in exactly the shape nexus/brain/planner.js's
// own resumePlan() already produces for resume.create -- so a structured intake runs through the
// SAME commit -> execute -> render pipeline as every other command, with zero duplicated planning
// or execution logic. Deliberately an allowlist, not a generic "run any tool with any input" door:
// an unknown intakeId is refused outright.
const STRUCTURED_INTAKES = Object.freeze({
  resume: Object.freeze({
    application: "workforce",
    toolId: "resume.create",
    title: "Create your resume",
    keys: Object.freeze(["name", "location", "phone", "email", "skills", "experience", "education", "languages"])
  })
});

const MAX_STRING_LENGTH = 600;
const MAX_ARRAY_ITEMS = 12;

function clean(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim().slice(0, MAX_STRING_LENGTH);
}

// Only the intake's own listed keys survive, and only as a string or an array of strings -- never
// split, re-parsed, or otherwise reinterpreted here. Splitting a comma/"and"-joined phrase stays
// solely in the one place that already knows how to do it correctly for this tool (e.g.
// nexus/resume/build.js's items(), already fixed for the Oxford-comma case).
function sanitizeIntakeValues(allowedKeys, values) {
  const clean_ = {};
  for (const key of allowedKeys) {
    const raw = values ? values[key] : undefined;
    if (raw === undefined || raw === null || raw === "") continue;
    if (Array.isArray(raw)) {
      const items = raw.map(item => clean(item)).filter(Boolean).slice(0, MAX_ARRAY_ITEMS);
      if (items.length) clean_[key] = items;
      continue;
    }
    const text = clean(raw);
    if (text) clean_[key] = text;
  }
  return clean_;
}

// Returns the same { goal, application, riskTier, clarification, steps } shape resumePlan()
// produces, so BehaviorSpine/AgentService treat a structured intake exactly like any other plan.
function structuredIntakePlan(intakeId, values) {
  const definition = STRUCTURED_INTAKES[intakeId];
  if (!definition) {
    throw new NexusRuntimeError("intake_unknown", `Unknown structured intake: ${intakeId}`, 400);
  }
  const input = sanitizeIntakeValues(definition.keys, values);
  const name = clean(input.name);
  if (!name) {
    throw new NexusRuntimeError("resume_name_required", "A resume needs the person's name.", 422);
  }
  return {
    goal: `Create a resume for ${name}`,
    application: definition.application,
    riskTier: "low",
    clarification: null,
    steps: [{ clientStepId: `create-${intakeId}`, title: definition.title, toolId: definition.toolId, input, dependsOn: [], fallbackToolIds: [] }]
  };
}

module.exports = Object.freeze({ STRUCTURED_INTAKES, structuredIntakePlan, sanitizeIntakeValues });
