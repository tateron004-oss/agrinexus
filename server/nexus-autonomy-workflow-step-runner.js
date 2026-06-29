const { BLOCKED_ACTIONS } = require("./nexus-autonomy-workflow-goal-classifier.js");
const { buildAutonomyWorkflowPlan, isSafeAutonomyWorkflowPlan } = require("./nexus-autonomy-workflow-planner.js");

const ALLOWED_STEP_EXECUTION_TYPES = Object.freeze([
  "provider_lookup",
  "source_lookup",
  "result_normalization",
  "summarization",
  "comparison",
  "checklist_generation",
  "draft_text_generation",
  "safe_next_step_suggestion",
  "source_review"
]);

const BLOCKED_STEP_EXECUTION_TYPES = Object.freeze([
  "call",
  "message",
  "submit",
  "apply",
  "buy",
  "pay",
  "book",
  "dispatch",
  "send_location",
  "account_login",
  "account_create"
]);

const STEP_TYPE_TO_EXECUTION_TYPE = Object.freeze({
  search_jobs: "provider_lookup",
  find_training: "provider_lookup",
  run_read_only_queries: "provider_lookup",
  review_sources: "source_review",
  review_weather_context: "source_review",
  review_status_source: "source_review",
  browse_options: "source_review",
  find_updates: "source_lookup",
  find_media: "source_lookup",
  compare_options: "comparison",
  compare_fit: "comparison",
  compare_relevance: "comparison",
  filter_criteria: "result_normalization",
  identify_requirements: "summarization",
  identify_prerequisites: "summarization",
  summarize_sources: "summarization",
  summarize_risk: "summarization",
  summarize_status: "summarization",
  build_checklist: "checklist_generation",
  build_enrollment_checklist: "checklist_generation",
  make_observation_checklist: "checklist_generation",
  create_decision_checklist: "checklist_generation",
  build_learning_path: "checklist_generation",
  prepare_weather_note: "checklist_generation",
  draft_questions: "draft_text_generation",
  draft_program_questions: "draft_text_generation",
  prepare_expert_questions: "draft_text_generation",
  prepare_manual_questions: "draft_text_generation",
  prepare_questions: "draft_text_generation",
  collect_observations: "safe_next_step_suggestion",
  separate_possibilities: "safe_next_step_suggestion",
  confirm_location_text: "safe_next_step_suggestion",
  verify_reference_text: "safe_next_step_suggestion",
  clarify_goal: "safe_next_step_suggestion",
  make_safe_plan: "checklist_generation",
  prepare_next_step: "safe_next_step_suggestion",
  explain_blocked_actions: "safe_next_step_suggestion",
  explain_block: "safe_next_step_suggestion",
  offer_safe_alternative: "safe_next_step_suggestion",
  preserve_boundary: "safe_next_step_suggestion"
});

function normalizeStep(stepOrPlan) {
  if (stepOrPlan && Array.isArray(stepOrPlan.steps)) {
    return stepOrPlan.steps[stepOrPlan.currentStepIndex || 0];
  }
  return stepOrPlan || {};
}

function normalizeCitations(citations) {
  if (!Array.isArray(citations)) return Object.freeze([]);
  return Object.freeze(citations
    .filter(item => item && typeof item === "object")
    .map((item, index) => Object.freeze({
      citationId: String(item.citationId || `citation-${index + 1}`),
      title: String(item.title || "Source reference"),
      sourceType: String(item.sourceType || "read-only-source"),
      url: item.url ? String(item.url) : "",
      freshness: String(item.freshness || "unknown")
    })));
}

function blockedResult(step, reason) {
  return Object.freeze({
    stepId: String(step.stepId || "blocked-step"),
    stepType: String(step.stepType || "blocked"),
    status: "blocked",
    providerStatus: "not_called",
    resultSummary: reason,
    citations: Object.freeze([]),
    artifacts: Object.freeze([]),
    blockedActions: Object.freeze([...BLOCKED_ACTIONS]),
    safeNextSteps: Object.freeze(["Choose an informational or preparation-only step instead."]),
    noExecutionAuthorized: true
  });
}

function buildArtifacts(executionType, step, context) {
  const title = String(step.title || "Workflow step");
  const goal = String(context.userGoal || "this workflow");
  if (executionType === "checklist_generation") {
    return Object.freeze([Object.freeze({
      artifactType: "checklist",
      title: `${title} checklist`,
      content: [`Review ${goal}.`, "Confirm details manually.", "Keep execution disabled."],
      noExecutionAuthorized: true
    })]);
  }
  if (executionType === "comparison") {
    return Object.freeze([Object.freeze({
      artifactType: "comparison_table",
      title: `${title} comparison`,
      content: [["Option", "Fit", "Notes"], ["Option 1", "review", "source-backed preview only"], ["Option 2", "review", "manual decision only"]],
      noExecutionAuthorized: true
    })]);
  }
  if (executionType === "draft_text_generation") {
    return Object.freeze([Object.freeze({
      artifactType: "draft_text",
      title: `${title} draft`,
      content: "Draft text for the user to review and copy manually; nothing was sent by Nexus.",
      noExecutionAuthorized: true
    })]);
  }
  if (executionType === "summarization" || executionType === "source_review" || executionType === "source_lookup" || executionType === "provider_lookup") {
    return Object.freeze([Object.freeze({
      artifactType: "source_summary",
      title: `${title} summary`,
      content: "Read-only source/provider information summarized for review. No provider was contacted.",
      noExecutionAuthorized: true
    })]);
  }
  return Object.freeze([]);
}

function providerStatusFor(executionType, context) {
  if (!["provider_lookup", "source_lookup", "source_review"].includes(executionType)) return "not_required";
  if (context.providerMode === "error") return "error";
  if (context.providerMode === "unavailable") return "unavailable";
  return "read_only_ready";
}

function summaryFor(step, executionType, providerStatus, context) {
  const title = String(step.title || "Workflow step");
  if (providerStatus === "error") return `${title} could not complete because the read-only provider returned an error. No execution fallback was attempted.`;
  if (providerStatus === "unavailable") return `${title} is waiting for a read-only provider/source to become available. Nexus did not retry unsafely or contact anyone.`;
  if (executionType === "provider_lookup" || executionType === "source_lookup" || executionType === "source_review") {
    return `${title} prepared a read-only source/provider review for ${context.userGoal || "the workflow"}.`;
  }
  if (executionType === "comparison") return `${title} prepared a comparison preview with manual review only.`;
  if (executionType === "checklist_generation") return `${title} prepared a checklist for manual use.`;
  if (executionType === "draft_text_generation") return `${title} prepared draft text only; nothing was sent.`;
  return `${title} prepared the next safe step without execution.`;
}

function runAutonomyWorkflowStep(stepOrPlan, context = {}) {
  const step = normalizeStep(stepOrPlan);
  const stepType = String(step.stepType || "");
  const executionType = context.executionType || STEP_TYPE_TO_EXECUTION_TYPE[stepType] || "safe_next_step_suggestion";

  if (BLOCKED_STEP_EXECUTION_TYPES.includes(executionType) || BLOCKED_STEP_EXECUTION_TYPES.includes(stepType)) {
    return blockedResult(step, "This workflow step was blocked because it would execute a real-world action.");
  }

  if (!ALLOWED_STEP_EXECUTION_TYPES.includes(executionType)) {
    return blockedResult(step, `Unsupported step execution type: ${executionType}.`);
  }

  const providerStatus = providerStatusFor(executionType, context);
  const status = providerStatus === "error" || providerStatus === "unavailable" ? "safe_fallback" : "completed";

  return Object.freeze({
    stepId: String(step.stepId || `${stepType || executionType}-step`),
    stepType: stepType || executionType,
    status,
    providerStatus,
    resultSummary: summaryFor(step, executionType, providerStatus, context),
    citations: normalizeCitations(context.citations),
    artifacts: buildArtifacts(executionType, step, context),
    blockedActions: Object.freeze([...BLOCKED_ACTIONS]),
    safeNextSteps: Object.freeze([
      "Review the preview.",
      "Ask for a comparison, checklist, summary, or draft.",
      "Do not execute calls, messages, purchases, bookings, dispatch, location sharing, or submissions."
    ]),
    noExecutionAuthorized: true
  });
}

function runNextAutonomyWorkflowStep(plan, context = {}) {
  if (!isSafeAutonomyWorkflowPlan(plan)) {
    return blockedResult({ stepId: "unsafe-plan", stepType: "unsafe_plan" }, "The workflow plan failed safety validation.");
  }
  return runAutonomyWorkflowStep(plan, { ...context, userGoal: plan.userGoal, workflowType: plan.workflowType });
}

function buildAndRunFirstAutonomyWorkflowStep(goal, context = {}) {
  const plan = buildAutonomyWorkflowPlan(goal);
  return Object.freeze({
    plan,
    stepResult: runNextAutonomyWorkflowStep(plan, context)
  });
}

function isSafeAutonomyWorkflowStepResult(result) {
  return Boolean(
    result &&
    typeof result === "object" &&
    typeof result.stepId === "string" &&
    typeof result.stepType === "string" &&
    ["completed", "blocked", "safe_fallback"].includes(result.status) &&
    typeof result.providerStatus === "string" &&
    typeof result.resultSummary === "string" &&
    Array.isArray(result.citations) &&
    Array.isArray(result.artifacts) &&
    Array.isArray(result.blockedActions) &&
    Array.isArray(result.safeNextSteps) &&
    result.noExecutionAuthorized === true
  );
}

module.exports = Object.freeze({
  ALLOWED_STEP_EXECUTION_TYPES,
  BLOCKED_STEP_EXECUTION_TYPES,
  STEP_TYPE_TO_EXECUTION_TYPE,
  buildAndRunFirstAutonomyWorkflowStep,
  isSafeAutonomyWorkflowStepResult,
  runAutonomyWorkflowStep,
  runNextAutonomyWorkflowStep
});
