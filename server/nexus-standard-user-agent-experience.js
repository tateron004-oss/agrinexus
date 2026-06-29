const capabilityRouter = require("./nexus-assistant-capability-router.js");
const taskPlanner = require("./nexus-agent-task-planner.js");
const safePreparation = require("./nexus-safe-action-preparation.js");
const followUpMemory = require("./nexus-strong-follow-up-memory.js");

const BLOCKED_UNSAFE_ACTIONS = Object.freeze([
  "provider contact",
  "call or message",
  "payment or purchase",
  "booking or scheduling",
  "application or form submission",
  "location sharing",
  "camera or microphone activation",
  "medical or pharmacy execution",
  "marketplace transaction",
  "emergency dispatch",
  "backend write"
]);

function text(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function choosePreparationPrompt(prompt, routerDecision) {
  const normalized = text(prompt);
  if (routerDecision.answerMode === "checklist") return `Create a checklist for ${normalized}`;
  if (routerDecision.answerMode === "comparison") return `Compare the top options for ${normalized}`;
  if (routerDecision.answerMode === "draft") return `Draft questions I can ask about ${normalized}`;
  if (routerDecision.answerMode === "source_review") return `Prepare source review questions for ${normalized}`;
  if (routerDecision.allowed === false) return `Prepare a safe checklist instead of executing: ${normalized}`;
  return normalized;
}

function sourceReviewFromRuntime(runtimeResponse = {}) {
  const citations = Array.isArray(runtimeResponse.citations) ? runtimeResponse.citations : [];
  return Object.freeze({
    sourceCount: citations.length,
    sourceLabels: Object.freeze((Array.isArray(runtimeResponse.sourceLabels) ? runtimeResponse.sourceLabels : [])
      .map(text)
      .filter(Boolean)
      .slice(0, 4)),
    citationSummaries: Object.freeze(citations.slice(0, 3).map(citation => Object.freeze({
      sourceName: text(citation.sourceName || "Source unavailable"),
      evidenceStatus: text(citation.evidenceStatus || "source-unavailable"),
      freshnessStatus: text(citation.freshnessStatus || "unknown")
    }))),
    reviewOnly: true,
    noExternalNavigation: true
  });
}

function buildStandardUserAgentExperience(prompt, runtimeResponse = {}, options = {}) {
  const normalizedPrompt = text(prompt);
  const flags = options.flags && typeof options.flags === "object" ? options.flags : {};
  const enabled = flags.enabled === true;
  const routerDecision = capabilityRouter.buildRouterDecision(normalizedPrompt, {
    surface: "standard-user",
    previewOnly: true
  });
  const plan = taskPlanner.buildAgentTaskPlan(normalizedPrompt, {
    surface: "standard-user",
    previewOnly: true
  });
  const preparation = safePreparation.buildSafeActionPreparation(choosePreparationPrompt(normalizedPrompt, routerDecision), {
    surface: "standard-user",
    previewOnly: true
  });
  const memory = followUpMemory.buildStrongFollowUpMemory({
    userGoal: normalizedPrompt,
    providerCategory: routerDecision.selectedProvider || plan.providerQueries[0] || "assistant",
    query: normalizedPrompt,
    resultsSummary: runtimeResponse.summary || runtimeResponse.answer || plan.nextBestStep,
    selectedItem: null,
    activePlan: plan,
    activePreparation: preparation,
    blockedActions: BLOCKED_UNSAFE_ACTIONS
  });

  return Object.freeze({
    schemaVersion: "nexus.nap6.standardUserAgentExperience.v1",
    enabled,
    surface: "standard-user",
    displayMode: enabled ? "flag-gated-agent-preview" : "disabled-default-off",
    answerMode: routerDecision.answerMode,
    capabilityId: routerDecision.capabilityId,
    intent: routerDecision.intent,
    selectedProvider: routerDecision.selectedProvider || null,
    allowed: routerDecision.allowed === true && runtimeResponse.allowed !== false,
    blockedReason: routerDecision.allowed === false ? routerDecision.blockedReason : (runtimeResponse.blockedReason || ""),
    riskTier: routerDecision.riskTier || "low",
    safeNextSteps: Object.freeze((Array.isArray(runtimeResponse.safeNextSteps) && runtimeResponse.safeNextSteps.length
      ? runtimeResponse.safeNextSteps
      : routerDecision.safeNextSteps || []).slice(0, 5)),
    followUpPrompts: Object.freeze((Array.isArray(memory.supportedFollowUps) ? memory.supportedFollowUps : []).slice(0, 5)),
    taskPlanPreview: Object.freeze({
      goalType: plan.goalType,
      steps: Object.freeze(plan.steps.slice(0, 5)),
      neededInformation: Object.freeze(plan.neededInformation.slice(0, 5)),
      nextBestStep: plan.nextBestStep
    }),
    preparationPreview: Object.freeze({
      preparationType: preparation.preparationType,
      title: preparation.userFacingTitle,
      content: Object.freeze(preparation.content.slice(0, 5)),
      copyOnly: true,
      userMustReview: true
    }),
    sourceReview: sourceReviewFromRuntime(runtimeResponse),
    blockedUnsafeActionExplanation: routerDecision.allowed === false
      ? "Nexus can explain and prepare safe review material, but it cannot execute this request or contact anyone."
      : "",
    blockedActions: BLOCKED_UNSAFE_ACTIONS,
    sessionMemoryPreview: Object.freeze({
      memoryId: memory.memoryId,
      lastUserGoal: memory.lastUserGoal,
      lastProviderCategory: memory.lastProviderCategory,
      safeNextStep: memory.safeNextStep,
      sessionOnly: true,
      noPersistence: true
    }),
    noExecutionAuthorized: true,
    noProviderHandoff: true,
    noProviderContactAuthorized: true,
    noPermissionPromptAuthorized: true,
    noLocationPermissionRequested: true,
    noNetworkSideEffectAuthorized: true,
    noBackendWritePerformed: true,
    noPendingRealWorldActionCreated: true,
    noHiddenActionMetadata: true
  });
}

function isSafeStandardUserAgentExperience(experience) {
  if (!experience || typeof experience !== "object" || Array.isArray(experience)) return false;
  if (experience.schemaVersion !== "nexus.nap6.standardUserAgentExperience.v1") return false;
  if (experience.surface !== "standard-user") return false;
  if (!["flag-gated-agent-preview", "disabled-default-off"].includes(experience.displayMode)) return false;
  if (!Array.isArray(experience.safeNextSteps) || !Array.isArray(experience.followUpPrompts)) return false;
  if (!experience.taskPlanPreview || !Array.isArray(experience.taskPlanPreview.steps)) return false;
  if (!experience.preparationPreview || experience.preparationPreview.copyOnly !== true || experience.preparationPreview.userMustReview !== true) return false;
  if (!experience.sourceReview || experience.sourceReview.reviewOnly !== true || experience.sourceReview.noExternalNavigation !== true) return false;
  if (!Array.isArray(experience.blockedActions) || experience.blockedActions.length < 8) return false;
  if (!experience.sessionMemoryPreview || experience.sessionMemoryPreview.sessionOnly !== true || experience.sessionMemoryPreview.noPersistence !== true) return false;
  if (experience.noExecutionAuthorized !== true) return false;
  if (experience.noProviderHandoff !== true || experience.noProviderContactAuthorized !== true) return false;
  if (experience.noPermissionPromptAuthorized !== true || experience.noLocationPermissionRequested !== true) return false;
  if (experience.noNetworkSideEffectAuthorized !== true || experience.noBackendWritePerformed !== true) return false;
  if (experience.noPendingRealWorldActionCreated !== true || experience.noHiddenActionMetadata !== true) return false;
  return true;
}

module.exports = Object.freeze({
  BLOCKED_UNSAFE_ACTIONS,
  buildStandardUserAgentExperience,
  isSafeStandardUserAgentExperience
});
