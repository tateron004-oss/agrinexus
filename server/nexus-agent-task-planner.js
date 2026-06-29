const crypto = require("node:crypto");
const capabilityRouter = require("./nexus-assistant-capability-router.js");

const BLOCKED_ACTIONS = Object.freeze([
  "apply",
  "call",
  "message",
  "buy",
  "pay",
  "book",
  "submit",
  "dispatch",
  "send location",
  "contact provider",
  "create account",
  "upload document"
]);

const PLAN_TEMPLATES = Object.freeze([
  {
    goalType: "farm-job",
    pattern: /\b(farm job|agriculture job|farm work|agriculture work|get a job|workforce job)\b/i,
    steps: [
      "Clarify the role, location, schedule, and experience level.",
      "Run a read-only workforce/job source query.",
      "Compare matching roles by fit, skills, freshness, and source.",
      "Prepare an application checklist the user can review manually.",
      "Draft questions the user can ask the employer or training provider themselves."
    ],
    neededInformation: ["preferred role", "location", "experience level", "schedule", "skills or certificates"],
    providerQueries: ["job-search", "agriculture-context"],
    safeUserActions: ["review source-backed listings", "compare fit", "prepare resume keywords", "copy questions manually"],
    nextBestStep: "Ask what kind of farm job and location the user wants."
  },
  {
    goalType: "agriculture-training",
    pattern: /\b(agriculture training|farm training|prepare for training|training program|learn agriculture)\b/i,
    steps: [
      "Clarify the subject, current skill level, language, and location.",
      "Run a read-only training/media or agriculture context query.",
      "Summarize source-backed options with freshness and limitations.",
      "Create a learning checklist.",
      "Prepare questions the user can ask the provider manually."
    ],
    neededInformation: ["topic", "skill level", "language", "location", "preferred format"],
    providerQueries: ["agriculture-context", "music-media"],
    safeUserActions: ["review training resources", "compare options", "make a study checklist", "copy provider questions manually"],
    nextBestStep: "Ask which agriculture skill the user wants to learn first."
  },
  {
    goalType: "crop-issue",
    pattern: /\b(crop issue|crop problem|crop disease|pest|irrigation issue|soil issue|field issue|solve this crop)\b/i,
    steps: [
      "Collect user-described observations without requesting camera or location permission.",
      "Run a read-only agriculture context query.",
      "Separate general possibilities from diagnosis.",
      "Create a field observation checklist.",
      "Recommend local extension or expert review without contacting anyone."
    ],
    neededInformation: ["crop", "symptoms", "timing", "weather context", "general area if user types it"],
    providerQueries: ["agriculture-context", "weather"],
    safeUserActions: ["inspect leaves manually", "check irrigation", "review official extension guidance", "prepare expert questions"],
    nextBestStep: "Ask what crop and symptoms the user sees."
  },
  {
    goalType: "workforce-program-comparison",
    pattern: /\b(compare workforce|compare training|workforce programs|training options|career pathway)\b/i,
    steps: [
      "Identify the programs or categories to compare.",
      "Run read-only source queries if options are missing.",
      "Compare fit, cost disclosure, schedule, location, and credential value.",
      "Create a short decision checklist.",
      "Prepare questions the user can ask each program manually."
    ],
    neededInformation: ["program names", "location", "schedule needs", "career goal", "budget constraints"],
    providerQueries: ["job-search", "agriculture-context", "music-media"],
    safeUserActions: ["compare options", "review sources", "create checklist", "copy questions manually"],
    nextBestStep: "Ask which two programs or career paths the user wants to compare."
  },
  {
    goalType: "ev-agriculture-technician",
    pattern: /\b(ev|electric vehicle|technician|agritech technician|agriculture technician|solar technician)\b/i,
    steps: [
      "Clarify the target technician lane and current skills.",
      "Find read-only training and workforce resources.",
      "Map skill gaps to beginner, intermediate, and field practice steps.",
      "Prepare a 30-day learning checklist.",
      "Suggest manual questions for training providers or employers."
    ],
    neededInformation: ["target role", "current skills", "location", "tools available", "time per week"],
    providerQueries: ["job-search", "music-media", "agriculture-context"],
    safeUserActions: ["review training resources", "prepare skill checklist", "compare job requirements", "copy outreach questions manually"],
    nextBestStep: "Ask whether the user wants EV, solar, irrigation, or farm equipment technician work."
  },
  {
    goalType: "farm-plan",
    pattern: /\b(create a plan for my farm|farm plan|plan my farm|farm operating plan|farm business plan|farm next steps)\b/i,
    steps: [
      "Clarify the farm goal, crop or livestock focus, season, resources, and constraints.",
      "Run read-only agriculture context and weather/source queries where available.",
      "Separate observation, learning, budgeting, and manual field-work decisions.",
      "Create a practical checklist for the user to review and adapt.",
      "Prepare questions the user can ask local extension, training, or market experts manually."
    ],
    neededInformation: ["farm goal", "crop or livestock focus", "season", "resources available", "constraints or risks"],
    providerQueries: ["agriculture-context", "weather", "job-search"],
    safeUserActions: ["review source-backed guidance", "write down farm constraints", "compare manual options", "prepare expert questions"],
    nextBestStep: "Ask what farm goal the user wants to plan for first."
  }
]);

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function normalizeGoal(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function stablePlanId(goal) {
  return `agent-task-plan-${crypto.createHash("sha256").update(String(goal || "")).digest("hex").slice(0, 16)}`;
}

function selectTemplate(goal) {
  return PLAN_TEMPLATES.find(template => template.pattern.test(goal)) || PLAN_TEMPLATES[3];
}

function buildAgentTaskPlan(goal, context = {}) {
  const normalizedGoal = normalizeGoal(goal);
  const routerDecision = capabilityRouter.buildRouterDecision(normalizedGoal, context);
  const blockedByRouter = routerDecision.allowed === false && routerDecision.riskTier === "high";

  if (!hasText(normalizedGoal)) {
    return buildPlan({
      goal: "",
      goalType: "clarification-needed",
      steps: ["Ask the user what goal they want Nexus to help with."],
      neededInformation: ["user goal"],
      providerQueries: [],
      safeUserActions: ["clarify goal"],
      blockedActions: BLOCKED_ACTIONS,
      nextBestStep: "Ask for the goal.",
      confidence: "low",
      routerDecision
    });
  }

  if (blockedByRouter) {
    return buildPlan({
      goal: normalizedGoal,
      goalType: "blocked-execution-request",
      steps: [
        "Explain that Nexus cannot execute this action.",
        "Offer to prepare information, a checklist, or draft text for the user to review manually.",
        "Keep provider contact, payment, booking, submission, dispatch, and location sharing disabled."
      ],
      neededInformation: ["safe informational goal"],
      providerQueries: [],
      safeUserActions: ["ask for information only", "prepare checklist", "draft manual questions"],
      blockedActions: BLOCKED_ACTIONS,
      nextBestStep: "Ask what information the user wants prepared instead.",
      confidence: "high",
      routerDecision
    });
  }

  const template = selectTemplate(normalizedGoal);
  return buildPlan({
    goal: normalizedGoal,
    goalType: template.goalType,
    steps: template.steps,
    neededInformation: template.neededInformation,
    providerQueries: template.providerQueries,
    safeUserActions: template.safeUserActions,
    blockedActions: BLOCKED_ACTIONS,
    nextBestStep: template.nextBestStep,
    confidence: "medium",
    routerDecision
  });
}

function buildPlan({ goal, goalType, steps, neededInformation, providerQueries, safeUserActions, blockedActions, nextBestStep, confidence, routerDecision }) {
  return Object.freeze({
    planId: stablePlanId(goal || goalType),
    goal,
    goalType,
    steps: Object.freeze(steps.slice()),
    neededInformation: Object.freeze(neededInformation.slice()),
    providerQueries: Object.freeze(providerQueries.slice()),
    safeUserActions: Object.freeze(safeUserActions.slice()),
    blockedActions: Object.freeze(blockedActions.slice()),
    nextBestStep,
    confidence,
    providerQueryMode: "read-only",
    routerDecision,
    noExecutionAuthorized: true,
    noProviderContactAuthorized: true,
    noLocationPermissionRequested: true,
    noBackendWritePerformed: true,
    noPendingRealWorldActionCreated: true
  });
}

function isSafeAgentTaskPlan(plan) {
  if (!plan || typeof plan !== "object" || Array.isArray(plan)) return false;
  if (!hasText(plan.planId) || !hasText(plan.goalType) || !hasText(plan.nextBestStep)) return false;
  if (!Array.isArray(plan.steps) || plan.steps.length < 1) return false;
  if (!Array.isArray(plan.neededInformation) || !Array.isArray(plan.providerQueries)) return false;
  if (!Array.isArray(plan.safeUserActions) || !Array.isArray(plan.blockedActions)) return false;
  if (plan.providerQueryMode !== "read-only") return false;
  if (plan.noExecutionAuthorized !== true) return false;
  if (plan.noProviderContactAuthorized !== true) return false;
  if (plan.noLocationPermissionRequested !== true) return false;
  if (plan.noBackendWritePerformed !== true) return false;
  if (plan.noPendingRealWorldActionCreated !== true) return false;
  return capabilityRouter.isSafeCapabilityDecision(plan.routerDecision);
}

module.exports = Object.freeze({
  BLOCKED_ACTIONS,
  PLAN_TEMPLATES,
  buildAgentTaskPlan,
  isSafeAgentTaskPlan
});
