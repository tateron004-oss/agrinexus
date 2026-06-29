const crypto = require("node:crypto");
const capabilityRouter = require("./nexus-assistant-capability-router.js");
const taskPlanner = require("./nexus-agent-task-planner.js");

const PREPARATION_TYPES = Object.freeze([
  "checklist",
  "call-script",
  "message-draft",
  "provider-questions",
  "application-checklist",
  "resume-keywords",
  "comparison-table",
  "training-plan",
  "farm-observation-checklist",
  "learning-plan"
]);

const BLOCKED_EXECUTION_WORDS = Object.freeze([
  "send",
  "call",
  "submit",
  "apply for me",
  "book",
  "buy",
  "pay",
  "dispatch",
  "share location",
  "contact provider"
]);

function normalize(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function stablePreparationId(prompt) {
  return `safe-preparation-${crypto.createHash("sha256").update(String(prompt || "")).digest("hex").slice(0, 16)}`;
}

function inferPreparationType(prompt) {
  const lower = prompt.toLowerCase();
  if (/\b(call script|what should i say on a call)\b/.test(lower)) return "call-script";
  if (/\b(write a message|message i can copy|message.*copy|email draft|draft message)\b/.test(lower)) return "message-draft";
  if (/\b(question|questions)\b/.test(lower)) return "provider-questions";
  if (/\b(apply|applying|application)\b/.test(lower)) return "application-checklist";
  if (/\b(resume|cv|keyword)\b/.test(lower)) return "resume-keywords";
  if (/\b(compare|comparison|top two)\b/.test(lower)) return "comparison-table";
  if (/\b(training plan|study plan)\b/.test(lower)) return "training-plan";
  if (/\b(crop|farm|field|pest|disease|soil|irrigation)\b/.test(lower)) return "farm-observation-checklist";
  if (/\b(learn|learning|lesson)\b/.test(lower)) return "learning-plan";
  return "checklist";
}

function hasBlockedExecutionRequest(prompt) {
  const lower = prompt.toLowerCase();
  return BLOCKED_EXECUTION_WORDS.some(term => lower.includes(term))
    && !/\b(draft|prepare|write|checklist|questions|script|copy)\b/.test(lower);
}

function buildPreparedContent(type, prompt) {
  if (type === "provider-questions") {
    return Object.freeze([
      "What requirements should I review before I decide?",
      "What documents or skills should I prepare myself?",
      "What costs, schedule, location, and deadlines should I verify?",
      "Where can I confirm this information from an official source?"
    ]);
  }
  if (type === "message-draft") {
    return Object.freeze([
      "Hello, I am reviewing this opportunity and would like more information.",
      "Could you please confirm requirements, timing, location, and any costs?",
      "I will review the details before deciding on any next step."
    ]);
  }
  if (type === "call-script") {
    return Object.freeze([
      "Introduce yourself and say you are gathering information.",
      "Ask about requirements, schedule, cost, location, and next steps.",
      "Write down the answer and do not share private information unless you choose to."
    ]);
  }
  if (type === "resume-keywords") {
    return Object.freeze(["field support", "safety", "technical training", "equipment care", "customer support", "reliable attendance"]);
  }
  if (type === "comparison-table") {
    return Object.freeze(["Compare source", "Cost", "Schedule", "Location", "Requirements", "Credential value", "Freshness"]);
  }
  if (type === "farm-observation-checklist") {
    return Object.freeze(["Crop and variety", "Visible symptoms", "When it started", "Water and soil conditions", "Recent weather", "Questions for local extension"]);
  }
  if (type === "training-plan" || type === "learning-plan") {
    return Object.freeze(["Pick one topic", "Review a trusted source", "Practice one skill", "Write down questions", "Compare next training options"]);
  }
  return Object.freeze(["Clarify the goal", "Review source-backed information", "Compare options", "Prepare questions", "Choose the next manual step"]);
}

function buildSafeActionPreparation(prompt, context = {}) {
  const normalizedPrompt = normalize(prompt);
  const routerDecision = capabilityRouter.buildRouterDecision(normalizedPrompt, context);
  const plan = taskPlanner.buildAgentTaskPlan(normalizedPrompt, context);
  const preparationOnlyRequest = /\b(draft|prepare|write|checklist|questions|script|copy)\b/i.test(normalizedPrompt);
  const blockedExecutionRequest = hasBlockedExecutionRequest(normalizedPrompt)
    || (routerDecision.allowed === false && routerDecision.riskTier === "high" && preparationOnlyRequest !== true);
  const preparationType = blockedExecutionRequest ? "checklist" : inferPreparationType(normalizedPrompt);

  return Object.freeze({
    preparationId: stablePreparationId(normalizedPrompt),
    preparationType,
    allowed: blockedExecutionRequest !== true,
    blockedReason: blockedExecutionRequest ? "execution_request_blocked_prepare_only" : "",
    userFacingTitle: blockedExecutionRequest ? "Preparation only" : `Prepared ${preparationType.replace(/-/g, " ")}`,
    content: buildPreparedContent(preparationType, normalizedPrompt),
    sourcePrompt: normalizedPrompt,
    routerDecision,
    planSummary: Object.freeze({
      planId: plan.planId,
      goalType: plan.goalType,
      nextBestStep: plan.nextBestStep
    }),
    safetyNotice: "This is prepared text or a checklist only. Nexus has not sent, called, submitted, booked, paid, purchased, dispatched, contacted a provider, shared location, or changed any account.",
    userMustReview: true,
    copyOnly: true,
    noExecutionAuthorized: true,
    noProviderContactAuthorized: true,
    noLocationPermissionRequested: true,
    noBackendWritePerformed: true,
    noPendingRealWorldActionCreated: true
  });
}

function isSafeActionPreparation(preparation) {
  if (!preparation || typeof preparation !== "object" || Array.isArray(preparation)) return false;
  if (!PREPARATION_TYPES.includes(preparation.preparationType)) return false;
  if (!Array.isArray(preparation.content) || preparation.content.length < 1) return false;
  if (preparation.userMustReview !== true || preparation.copyOnly !== true) return false;
  if (preparation.noExecutionAuthorized !== true) return false;
  if (preparation.noProviderContactAuthorized !== true) return false;
  if (preparation.noLocationPermissionRequested !== true) return false;
  if (preparation.noBackendWritePerformed !== true) return false;
  if (preparation.noPendingRealWorldActionCreated !== true) return false;
  if (!capabilityRouter.isSafeCapabilityDecision(preparation.routerDecision)) return false;
  return true;
}

module.exports = Object.freeze({
  PREPARATION_TYPES,
  BLOCKED_EXECUTION_WORDS,
  buildSafeActionPreparation,
  isSafeActionPreparation
});
