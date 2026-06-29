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

function safeList(items, fallback) {
  const list = (Array.isArray(items) ? items : [])
    .map(text)
    .filter(Boolean)
    .slice(0, 5);
  return Object.freeze(list.length ? list : fallback);
}

function buildChecklistArtifact(title, items) {
  return Object.freeze({
    type: "checklist",
    title: text(title),
    items: safeList(items, Object.freeze(["Review the source-backed answer.", "Choose the next manual step.", "Ask Nexus for a safe refinement."])),
    executionAuthority: false,
    providerHandoffAllowed: false,
    sendAllowed: false,
    submitAllowed: false,
    bookingAllowed: false,
    paymentAllowed: false
  });
}

function buildComparisonArtifact(title, rows) {
  return Object.freeze({
    type: "comparison",
    title: text(title),
    columns: Object.freeze(["Option", "What to compare", "Manual review"]),
    rows: Object.freeze((Array.isArray(rows) ? rows : []).slice(0, 4).map(row => Object.freeze([
      text(row && row[0]),
      text(row && row[1]),
      text(row && row[2])
    ])).filter(row => row.every(Boolean))),
    executionAuthority: false,
    providerHandoffAllowed: false,
    sendAllowed: false,
    submitAllowed: false,
    bookingAllowed: false,
    paymentAllowed: false
  });
}

function buildDraftArtifact(title, content) {
  return Object.freeze({
    type: "draft-text",
    title: text(title),
    content: safeList(content, Object.freeze(["Use this as wording to review manually. Nexus will not send, call, submit, or contact anyone."])),
    copyOnly: true,
    userMustReview: true,
    executionAuthority: false,
    providerHandoffAllowed: false,
    sendAllowed: false,
    submitAllowed: false,
    bookingAllowed: false,
    paymentAllowed: false
  });
}

function buildArtifactPreviews(prompt, routerDecision = {}, runtimeResponse = {}, plan = {}, preparation = {}) {
  const normalizedPrompt = text(prompt);
  const provider = text(routerDecision.selectedProvider || runtimeResponse.selectedProvider || "");
  const answerMode = text(routerDecision.answerMode || "informational");
  const artifacts = [];
  const safeSteps = Array.isArray(runtimeResponse.safeNextSteps) && runtimeResponse.safeNextSteps.length
    ? runtimeResponse.safeNextSteps
    : plan.steps || [];
  const prepContent = Array.isArray(preparation.content) ? preparation.content : [];

  if (provider === "job-search" || /\b(job|career|workforce|application)\b/i.test(normalizedPrompt)) {
    artifacts.push(buildChecklistArtifact("Application prep checklist", [
      "Compare role requirements against your current skills.",
      "List any training or certification gaps.",
      "Prepare questions about schedule, pay range, and support.",
      "Review the employer or program source before applying.",
      "Do not submit anything until you personally review it."
    ]));
    artifacts.push(buildComparisonArtifact("Job option comparison", [
      ["Training fit", "Required skills and certification", "Verify with the listed source"],
      ["Location fit", "Commute, remote, or hybrid details", "Review manually before contacting anyone"],
      ["Support fit", "Mentoring, placement, or benefits", "Ask follow-up questions before applying"]
    ]));
    artifacts.push(buildDraftArtifact("Questions to ask about the opportunity", [
      "What training or certification is required before starting?",
      "What schedule and location should I expect?",
      "What support is available for entry-level workers?"
    ]));
  } else if (provider === "agriculture-context" || /\b(farm|crop|soil|irrigation|pest|agriculture)\b/i.test(normalizedPrompt)) {
    artifacts.push(buildChecklistArtifact("Farm issue observation checklist", [
      "Write down the crop, field area, and date observed.",
      "Note weather, irrigation, soil, and visible symptom patterns.",
      "Compare symptoms against trusted extension or source-backed guidance.",
      "Take your own notes before changing field practices.",
      "Use local expert advice before high-impact treatment decisions."
    ]));
    artifacts.push(buildDraftArtifact("Provider or extension questions", [
      "What symptoms should I document before asking for help?",
      "Which local source should I compare this guidance against?",
      "What low-risk observation step should I take next?"
    ]));
    artifacts.push(buildChecklistArtifact("Training plan", [
      "Review the source-backed answer.",
      "Identify one concept to learn first.",
      "Ask Nexus to explain unfamiliar terms.",
      "Compare sources before acting in the field."
    ]));
  } else if (answerMode === "comparison" || /\b(compare|source|option)\b/i.test(normalizedPrompt)) {
    artifacts.push(buildComparisonArtifact("Source comparison", [
      ["Source", "Evidence and freshness", "Use as read-only context"],
      ["Option", "Pros and limitations", "Review before choosing"],
      ["Next step", "Information still needed", "Ask a safe follow-up"]
    ]));
  } else if (answerMode === "draft" || /\b(draft|script|email|message|questions?)\b/i.test(normalizedPrompt)) {
    artifacts.push(buildDraftArtifact("Draft text for manual review", [
      "Hello, I am reviewing this information and have a few questions.",
      "Can you confirm the requirements, timing, and next manual step?",
      "I will review any response before taking action."
    ]));
  } else {
    artifacts.push(buildChecklistArtifact("Review checklist", safeSteps));
    artifacts.push(buildDraftArtifact("Safe follow-up questions", prepContent));
  }

  return Object.freeze(artifacts.slice(0, 3));
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
      goal: plan.goal,
      goalType: plan.goalType,
      steps: Object.freeze(plan.steps.slice(0, 5)),
      neededInformation: Object.freeze(plan.neededInformation.slice(0, 5)),
      providerQueries: Object.freeze(plan.providerQueries.slice(0, 5)),
      safeUserActions: Object.freeze(plan.safeUserActions.slice(0, 5)),
      blockedActions: Object.freeze(plan.blockedActions.slice(0, 8)),
      nextBestStep: plan.nextBestStep,
      confidence: plan.confidence,
      providerQueryMode: plan.providerQueryMode,
      noExecutionAuthorized: plan.noExecutionAuthorized === true
    }),
    preparationPreview: Object.freeze({
      preparationType: preparation.preparationType,
      title: preparation.userFacingTitle,
      content: Object.freeze(preparation.content.slice(0, 5)),
      copyOnly: true,
      userMustReview: true
    }),
    sourceReview: sourceReviewFromRuntime(runtimeResponse),
    artifactPreviews: buildArtifactPreviews(normalizedPrompt, routerDecision, runtimeResponse, plan, preparation),
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
  if (experience.taskPlanPreview.providerQueryMode !== "read-only" || experience.taskPlanPreview.noExecutionAuthorized !== true) return false;
  if (!experience.preparationPreview || experience.preparationPreview.copyOnly !== true || experience.preparationPreview.userMustReview !== true) return false;
  if (!experience.sourceReview || experience.sourceReview.reviewOnly !== true || experience.sourceReview.noExternalNavigation !== true) return false;
  if (!Array.isArray(experience.artifactPreviews) || experience.artifactPreviews.length < 1) return false;
  if (!experience.artifactPreviews.every(artifact => artifact && artifact.executionAuthority === false && artifact.providerHandoffAllowed === false && artifact.sendAllowed === false && artifact.submitAllowed === false)) return false;
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
  buildArtifactPreviews,
  buildStandardUserAgentExperience,
  isSafeStandardUserAgentExperience
});
