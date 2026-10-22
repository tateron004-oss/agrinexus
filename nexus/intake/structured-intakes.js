"use strict";

const { NexusRuntimeError } = require("../runtime/authoritative-task-engine.js");
const { prBriefDocument, KEYS: PR_BRIEF_KEYS } = require("../knowledge/pr-brief.js");
const { businessPlanDocument, KEYS: BUSINESS_PLAN_KEYS } = require("../knowledge/business-plan-doc.js");
const { sponsorshipProposalDocument, teamPacketDocument, SPONSORSHIP_KEYS, TEAM_PACKET_KEYS } = require("../knowledge/athlete-docs.js");
const { moneyPlanDocument, programKitDocument, MONEY_PLAN_KEYS, PROGRAM_KIT_KEYS } = require("../knowledge/money-docs.js");

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
  }),
  // A brief for a PR or event firm (public/kyro-intake-forms.js "prBrief"): the document is built on the SERVER from the sanitized answers only (nexus/knowledge/pr-brief.js), word for word, and saved with the documents tool as
  // a Word document the owner can edit and send. The client never sends the document's text.
  "pr-brief": Object.freeze({
    application: "documents",
    toolId: "documents.create",
    title: "Save your PR and events brief",
    keys: PR_BRIEF_KEYS
  }),
  // A one-page lean business plan (public/kyro-intake-forms.js "businessPlan"): built on the server from the answers only, word for word (nexus/knowledge/business-plan-doc.js), saved as a Word document.
  "business-plan": Object.freeze({
    application: "documents",
    toolId: "documents.create",
    title: "Save your business plan",
    keys: BUSINESS_PLAN_KEYS
  }),
  // An athlete's sponsorship proposal and a coach's team and club packet (public/kyro-intake-forms.js "sponsorshipProposal", "teamPacket"): built on the server from the answers only, word for word (nexus/knowledge/athlete-docs.js), saved as a Word document.
  "sponsorship-proposal": Object.freeze({
    application: "documents",
    toolId: "documents.create",
    title: "Save your sponsorship proposal",
    keys: SPONSORSHIP_KEYS
  }),
  "team-packet": Object.freeze({
    application: "documents",
    toolId: "documents.create",
    title: "Save your team packet",
    keys: TEAM_PACKET_KEYS
  }),
  // A person's 90-day money plan and an organizer's financial education program plan (public/kyro-intake-forms.js "moneyPlan", "programKit"): built on the server from the answers only, word for word, with the steps from the official pages the
  // money guide cites (nexus/knowledge/money-docs.js), saved as a Word document. No account number, PIN or password is ever asked for or kept.
  "money-plan": Object.freeze({
    application: "documents",
    toolId: "documents.create",
    title: "Save your money plan",
    keys: MONEY_PLAN_KEYS
  }),
  "program-kit": Object.freeze({
    application: "documents",
    toolId: "documents.create",
    title: "Save your program plan",
    keys: PROGRAM_KIT_KEYS
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
  if (intakeId === "pr-brief") {
    const made = prBriefDocument(input);
    if (!made) throw new NexusRuntimeError("pr_brief_incomplete", "A brief needs the business and what you want the work to achieve.", 422);
    return {
      goal: made.title,
      application: definition.application,
      riskTier: "low",
      clarification: null,
      steps: [{ clientStepId: "create-pr-brief", title: definition.title, toolId: definition.toolId, input: { title: made.title, content: made.content, format: "docx", reopenAfterSave: true }, dependsOn: [], fallbackToolIds: [] }]
    };
  }
  if (intakeId === "business-plan") {
    const made = businessPlanDocument(input);
    if (!made) throw new NexusRuntimeError("business_plan_incomplete", "A business plan needs what the business is and who its customers are.", 422);
    return {
      goal: made.title,
      application: definition.application,
      riskTier: "low",
      clarification: null,
      steps: [{ clientStepId: "create-business-plan", title: definition.title, toolId: definition.toolId, input: { title: made.title, content: made.content, format: "docx", reopenAfterSave: true }, dependsOn: [], fallbackToolIds: [] }]
    };
  }
  if (intakeId === "sponsorship-proposal" || intakeId === "team-packet") {
    const sponsorship = intakeId === "sponsorship-proposal";
    const made = sponsorship ? sponsorshipProposalDocument(input) : teamPacketDocument(input);
    if (!made) {
      throw sponsorship
        ? new NexusRuntimeError("sponsorship_incomplete", "A sponsorship proposal needs who the athlete is and what they are asking for.", 422)
        : new NexusRuntimeError("team_packet_incomplete", "A team packet needs the name of the team or club.", 422);
    }
    return {
      goal: made.title,
      application: definition.application,
      riskTier: "low",
      clarification: null,
      steps: [{ clientStepId: `create-${intakeId}`, title: definition.title, toolId: definition.toolId, input: { title: made.title, content: made.content, format: "docx", reopenAfterSave: true }, dependsOn: [], fallbackToolIds: [] }]
    };
  }
  if (intakeId === "money-plan" || intakeId === "program-kit") {
    const plan = intakeId === "money-plan";
    const made = plan ? moneyPlanDocument(input) : programKitDocument(input);
    if (!made) {
      throw plan
        ? new NexusRuntimeError("money_plan_incomplete", "A money plan needs the first money problem to solve and what matters most.", 422)
        : new NexusRuntimeError("program_kit_incomplete", "A program plan needs your organization and what the people you serve need first.", 422);
    }
    return {
      goal: made.title,
      application: definition.application,
      riskTier: "low",
      clarification: null,
      steps: [{ clientStepId: `create-${intakeId}`, title: definition.title, toolId: definition.toolId, input: { title: made.title, content: made.content, format: "docx", reopenAfterSave: true }, dependsOn: [], fallbackToolIds: [] }]
    };
  }
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
