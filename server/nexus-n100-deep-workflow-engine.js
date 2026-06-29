const crypto = require("node:crypto");
const { BLOCKED_ACTIONS } = require("./nexus-autonomy-workflow-goal-classifier.js");
const { buildAutonomyWorkflowRecovery } = require("./nexus-autonomy-workflow-reliability-recovery.js");

const SCHEMA_VERSION = "nexus.n100.deepWorkflowEngine.v1";

const STEP_TYPES = Object.freeze([
  "wait_for_user_answer",
  "provider_lookup",
  "source_lookup",
  "branch",
  "compare_and_recommend",
  "prepare_final_package",
  "approval_checkpoint",
  "safe_retry",
  "complete"
]);

const BLOCKED_REAL_WORLD_ACTIONS = Object.freeze([
  "application_submission",
  "call",
  "message",
  "provider_contact",
  "payment",
  "purchase",
  "booking",
  "dispatch",
  "send_location",
  "medical_or_pharmacy_execution"
]);

const DEEP_WORKFLOW_TEMPLATES = Object.freeze({
  farm_job_pathway: Object.freeze({
    templateId: "farm_job_pathway",
    title: "Farm job pathway",
    promptExamples: Object.freeze(["Help me get a farm job."]),
    providers: Object.freeze(["workforce-jobs-read-only", "agriculture-training-read-only", "internal-knowledge-brain"]),
    artifacts: Object.freeze(["job_options_comparison", "application_prep_checklist", "manual_questions"]),
    branchField: "experienceLevel",
    branches: Object.freeze({
      beginner: "training_first",
      experienced: "job_match_first",
      unknown: "ask_experience"
    }),
    steps: Object.freeze([
      step("job-1", "wait_for_user_answer", "Ask for target role, typed location, and experience.", []),
      step("job-2", "provider_lookup", "Review read-only farm job sources.", ["job-1"], "workforce-jobs-read-only"),
      step("job-3", "source_lookup", "Review training and credential requirements.", ["job-1"], "agriculture-training-read-only"),
      step("job-4", "branch", "Choose training-first or job-match-first path.", ["job-2", "job-3"]),
      step("job-5", "compare_and_recommend", "Compare job fit, training gaps, and next manual steps.", ["job-4"]),
      step("job-6", "prepare_final_package", "Prepare a job-readiness package for review.", ["job-5"]),
      step("job-7", "approval_checkpoint", "Stop before application, contact, message, call, or submission.", ["job-6"]),
      step("job-8", "complete", "End with preview-only next steps.", ["job-7"])
    ])
  }),
  agriculture_technician_pathway: Object.freeze({
    templateId: "agriculture_technician_pathway",
    title: "Agriculture technician pathway",
    promptExamples: Object.freeze(["Help me become an agriculture technician.", "Help me prepare for agriculture training."]),
    providers: Object.freeze(["agriculture-training-read-only", "education-media-read-only", "internal-knowledge-brain"]),
    artifacts: Object.freeze(["training_plan", "skill_gap_checklist", "program_questions"]),
    branchField: "credentialGoal",
    branches: Object.freeze({
      certificate: "certificate_path",
      hands_on: "field_practice_path",
      unknown: "ask_goal"
    }),
    steps: Object.freeze([
      step("tech-1", "wait_for_user_answer", "Ask for training goal, schedule, typed location, and language preference.", []),
      step("tech-2", "provider_lookup", "Review read-only agriculture training sources.", ["tech-1"], "agriculture-training-read-only"),
      step("tech-3", "source_lookup", "Review learning media and prerequisite context.", ["tech-1"], "education-media-read-only"),
      step("tech-4", "branch", "Select certificate, field-practice, or clarify-first path.", ["tech-2", "tech-3"]),
      step("tech-5", "compare_and_recommend", "Compare programs by fit, source freshness, prerequisites, and schedule.", ["tech-4"]),
      step("tech-6", "prepare_final_package", "Prepare a training-readiness package.", ["tech-5"]),
      step("tech-7", "approval_checkpoint", "Stop before enrollment, payment, booking, or provider contact.", ["tech-6"]),
      step("tech-8", "complete", "End with manual review steps.", ["tech-7"])
    ])
  }),
  crop_issue_support: Object.freeze({
    templateId: "crop_issue_support",
    title: "Crop issue support",
    promptExamples: Object.freeze(["Help me solve this crop issue."]),
    providers: Object.freeze(["agriculture-extension-read-only", "crop-guidance-read-only", "weather-context-read-only"]),
    artifacts: Object.freeze(["crop_observation_checklist", "source_summary", "expert_questions"]),
    branchField: "issueType",
    branches: Object.freeze({
      pest: "pest_guidance",
      disease: "disease_guidance",
      weather: "weather_context",
      unknown: "ask_crop_observations"
    }),
    steps: Object.freeze([
      step("crop-1", "wait_for_user_answer", "Ask for crop, symptoms, timing, and typed location if weather context is needed.", []),
      step("crop-2", "source_lookup", "Review read-only extension and crop guidance sources.", ["crop-1"], "agriculture-extension-read-only"),
      step("crop-3", "provider_lookup", "Review read-only weather context only from explicit typed location.", ["crop-1"], "weather-context-read-only"),
      step("crop-4", "branch", "Separate pest, disease, weather, or unclear issue path.", ["crop-2", "crop-3"]),
      step("crop-5", "compare_and_recommend", "Compare possibilities without diagnosis or chemical prescription.", ["crop-4"]),
      step("crop-6", "prepare_final_package", "Prepare observation checklist and expert questions.", ["crop-5"]),
      step("crop-7", "approval_checkpoint", "Stop before buying treatment, contacting experts, camera use, location sharing, or dispatch.", ["crop-6"]),
      step("crop-8", "complete", "End with source-backed manual review guidance.", ["crop-7"])
    ])
  }),
  small_farm_plan: Object.freeze({
    templateId: "small_farm_plan",
    title: "Small farm plan",
    promptExamples: Object.freeze(["Help me start a small farm plan.", "Help me plan around weather."]),
    providers: Object.freeze(["weather-read-only", "agriculture-extension-read-only", "market-context-read-only"]),
    artifacts: Object.freeze(["farm_plan_outline", "weather_note", "startup_checklist"]),
    branchField: "farmStage",
    branches: Object.freeze({
      planning: "planning_path",
      active: "adjustment_path",
      unknown: "ask_farm_stage"
    }),
    steps: Object.freeze([
      step("farm-1", "wait_for_user_answer", "Ask for crop, typed location, season, budget range, and farm stage.", []),
      step("farm-2", "provider_lookup", "Review weather context from explicit typed location.", ["farm-1"], "weather-read-only"),
      step("farm-3", "source_lookup", "Review agriculture guidance and market context.", ["farm-1"], "agriculture-extension-read-only"),
      step("farm-4", "branch", "Choose planning, active-farm adjustment, or clarify-first path.", ["farm-2", "farm-3"]),
      step("farm-5", "compare_and_recommend", "Compare options and risks without financial advice or purchases.", ["farm-4"]),
      step("farm-6", "prepare_final_package", "Prepare a small farm planning package.", ["farm-5"]),
      step("farm-7", "approval_checkpoint", "Stop before buying, paying, dispatch, booking, or provider contact.", ["farm-6"]),
      step("farm-8", "complete", "End with manual checklist and source notes.", ["farm-7"])
    ])
  }),
  program_comparison: Object.freeze({
    templateId: "program_comparison",
    title: "Training program comparison",
    promptExamples: Object.freeze(["Help me compare training programs."]),
    providers: Object.freeze(["workforce-programs-read-only", "training-programs-read-only", "internal-knowledge-brain"]),
    artifacts: Object.freeze(["program_comparison_table", "decision_checklist", "program_questions"]),
    branchField: "comparisonCriteria",
    branches: Object.freeze({
      cost: "cost_disclosure_path",
      schedule: "schedule_path",
      credential: "credential_path",
      unknown: "ask_criteria"
    }),
    steps: Object.freeze([
      step("program-1", "wait_for_user_answer", "Ask which programs or criteria to compare.", []),
      step("program-2", "provider_lookup", "Review read-only workforce and training sources.", ["program-1"], "training-programs-read-only"),
      step("program-3", "branch", "Choose comparison emphasis or ask for criteria.", ["program-2"]),
      step("program-4", "compare_and_recommend", "Compare fit, source freshness, prerequisites, and user-stated criteria.", ["program-3"]),
      step("program-5", "prepare_final_package", "Prepare comparison table and questions.", ["program-4"]),
      step("program-6", "approval_checkpoint", "Stop before enrollment, message, booking, payment, or submission.", ["program-5"]),
      step("program-7", "complete", "End with manual review next steps.", ["program-6"])
    ])
  }),
  typed_location_resource_search: Object.freeze({
    templateId: "typed_location_resource_search",
    title: "Typed-location agriculture resource search",
    promptExamples: Object.freeze(["Help me find agriculture resources near me using typed location."]),
    providers: Object.freeze(["agriculture-resources-read-only", "training-resources-read-only", "internal-knowledge-brain"]),
    artifacts: Object.freeze(["resource_summary", "comparison_table", "manual_questions"]),
    branchField: "resourceNeed",
    branches: Object.freeze({
      training: "training_resources",
      crop: "crop_resources",
      market: "market_resources",
      unknown: "ask_resource_need"
    }),
    steps: Object.freeze([
      step("resource-1", "wait_for_user_answer", "Ask for explicit typed location and resource need.", []),
      step("resource-2", "provider_lookup", "Review read-only resource sources using typed text only.", ["resource-1"], "agriculture-resources-read-only"),
      step("resource-3", "branch", "Choose resource category or clarify.", ["resource-2"]),
      step("resource-4", "compare_and_recommend", "Compare resources by fit and source freshness.", ["resource-3"]),
      step("resource-5", "prepare_final_package", "Prepare a resource review package.", ["resource-4"]),
      step("resource-6", "approval_checkpoint", "Stop before contact, booking, location sharing, or navigation.", ["resource-5"]),
      step("resource-7", "complete", "End with manual resource review steps.", ["resource-6"])
    ])
  }),
  agritrade_safe_browse: Object.freeze({
    templateId: "agritrade_safe_browse",
    title: "AgriTrade safe browse",
    promptExamples: Object.freeze(["Help me browse AgriTrade safely."]),
    providers: Object.freeze(["agritrade-browse-read-only", "market-context-read-only", "internal-knowledge-brain"]),
    artifacts: Object.freeze(["browse_comparison", "buyer_seller_question_draft", "transaction_boundary_note"]),
    branchField: "browseIntent",
    branches: Object.freeze({
      buy: "browse_only_buy_interest",
      sell: "browse_only_sell_interest",
      learn: "market_learning",
      unknown: "ask_browse_intent"
    }),
    steps: Object.freeze([
      step("trade-1", "wait_for_user_answer", "Ask what the user wants to browse or learn.", []),
      step("trade-2", "provider_lookup", "Review AgriTrade browse-only information.", ["trade-1"], "agritrade-browse-read-only"),
      step("trade-3", "branch", "Choose browse-only buyer, seller, learning, or clarify path.", ["trade-2"]),
      step("trade-4", "compare_and_recommend", "Compare visible informational options without transaction authority.", ["trade-3"]),
      step("trade-5", "prepare_final_package", "Prepare browse notes and manual questions.", ["trade-4"]),
      step("trade-6", "approval_checkpoint", "Stop before buy, sell, checkout, payment, order, call, or message.", ["trade-5"]),
      step("trade-7", "complete", "End with browse-only summary.", ["trade-6"])
    ])
  })
});

function step(stepId, stepType, title, dependencies = [], provider = "") {
  return Object.freeze({
    stepId,
    stepType,
    title,
    dependencies: Object.freeze([...dependencies]),
    provider,
    readOnly: true,
    canExecute: false,
    executionAuthority: "none",
    requiresUserAnswer: stepType === "wait_for_user_answer",
    requiresApprovalCheckpoint: stepType === "approval_checkpoint"
  });
}

function text(value, fallback = "") {
  const normalized = String(value || "").trim().replace(/\s+/g, " ");
  return normalized || fallback;
}

function nowIso(input = {}) {
  return input.nowIso || new Date(input.now || Date.now()).toISOString();
}

function stableId(prefix, value) {
  return `${prefix}-${crypto.createHash("sha256").update(String(value || "")).digest("hex").slice(0, 14)}`;
}

function freezeArray(list) {
  return Object.freeze((Array.isArray(list) ? list : []).map(item => (
    item && typeof item === "object" ? Object.freeze({ ...item }) : item
  )));
}

function clone(value) {
  return value && typeof value === "object" ? JSON.parse(JSON.stringify(value)) : value;
}

function chooseTemplate(prompt = "") {
  const normalized = text(prompt).toLowerCase();
  if (/farm job|farm work|agriculture job/.test(normalized)) return "farm_job_pathway";
  if (/technician|agriculture training|prepare for agriculture training|become an agriculture/.test(normalized)) return "agriculture_technician_pathway";
  if (/crop issue|crop problem|pest|disease/.test(normalized)) return "crop_issue_support";
  if (/small farm|farm plan|plan around weather|weather/.test(normalized)) return "small_farm_plan";
  if (/compare training|training programs|programs/.test(normalized)) return "program_comparison";
  if (/near me|typed location|resources/.test(normalized)) return "typed_location_resource_search";
  if (/agritrade|marketplace|browse/.test(normalized)) return "agritrade_safe_browse";
  return "farm_job_pathway";
}

function createStepStates(template) {
  return Object.freeze(template.steps.map((stepDef, index) => Object.freeze({
    stepId: stepDef.stepId,
    stepType: stepDef.stepType,
    title: stepDef.title,
    dependencies: freezeArray(stepDef.dependencies),
    provider: stepDef.provider,
    status: index === 0 ? "waiting_for_user" : "pending",
    attempts: 0,
    resultSummary: "",
    readOnly: true,
    canExecute: false,
    executionAuthority: "none"
  })));
}

function safetyPosture() {
  return Object.freeze({
    canExecute: false,
    executionAuthority: "none",
    noExecutionAuthorized: true,
    noProviderContactAuthorized: true,
    noProviderHandoffAuthorized: true,
    noLocationPermissionRequested: true,
    noBackendWritePerformed: true,
    noAutoRetry: true,
    noAutoOpen: true,
    noDispatchAuthorized: true
  });
}

function approvalCheckpointsFor(template) {
  return Object.freeze(template.steps
    .filter(item => item.stepType === "approval_checkpoint")
    .map(item => Object.freeze({
      checkpointId: `${template.templateId}.${item.stepId}`,
      stepId: item.stepId,
      title: item.title,
      status: "required_before_real_world_action",
      allowedConfirmationEffect: "approve_review_only_continuation",
      finalExecutionGateRequired: true,
      canExecute: false,
      executionAuthority: "none",
      blockedActions: BLOCKED_REAL_WORLD_ACTIONS
    })));
}

function buildProgressTimeline(state) {
  return Object.freeze(state.steps.map((stepState, index) => Object.freeze({
    order: index + 1,
    stepId: stepState.stepId,
    stepType: stepState.stepType,
    title: stepState.title,
    status: stepState.status,
    waitingForUser: stepState.stepType === "wait_for_user_answer" && stepState.status !== "completed",
    approvalCheckpoint: stepState.stepType === "approval_checkpoint",
    canExecute: false,
    executionAuthority: "none"
  })));
}

function createN100DeepWorkflow(input = {}) {
  const prompt = text(input.prompt, "Help me get a farm job.");
  const templateId = DEEP_WORKFLOW_TEMPLATES[input.templateId] ? input.templateId : chooseTemplate(prompt);
  const template = DEEP_WORKFLOW_TEMPLATES[templateId];
  const createdAt = nowIso(input);
  const workflowId = text(input.workflowId, stableId("n100-deep-workflow", `${templateId}:${prompt}`));
  const base = Object.freeze({
    schemaVersion: SCHEMA_VERSION,
    workflowId,
    templateId,
    title: template.title,
    userPrompt: prompt,
    status: "waiting_for_user",
    currentStepId: template.steps[0].stepId,
    providers: freezeArray(template.providers),
    branches: Object.freeze({ ...template.branches }),
    branchField: template.branchField,
    selectedBranch: "",
    artifactsToPrepare: freezeArray(template.artifacts),
    steps: createStepStates(template),
    approvalCheckpoints: approvalCheckpointsFor(template),
    recoveryEvents: Object.freeze([]),
    finalPackage: null,
    resume: Object.freeze({
      resumeAllowed: input.userAllowsResume === true,
      resumeToken: input.userAllowsResume === true ? stableId("resume", workflowId) : "",
      persistence: "none"
    }),
    blockedActions: BLOCKED_REAL_WORLD_ACTIONS,
    createdAt,
    updatedAt: createdAt,
    safetyPosture: safetyPosture()
  });
  return freezeWorkflow(base);
}

function freezeWorkflow(state) {
  const workflow = {
    ...state,
    providers: freezeArray(state.providers),
    artifactsToPrepare: freezeArray(state.artifactsToPrepare),
    steps: freezeArray(state.steps),
    approvalCheckpoints: freezeArray(state.approvalCheckpoints),
    recoveryEvents: freezeArray(state.recoveryEvents),
    blockedActions: freezeArray(state.blockedActions || BLOCKED_REAL_WORLD_ACTIONS),
    safetyPosture: Object.freeze({ ...safetyPosture(), ...(state.safetyPosture || {}) }),
    canExecute: false,
    executionAuthority: "none",
    noExecutionAuthorized: true,
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true
  };
  workflow.progressTimeline = buildProgressTimeline(workflow);
  return Object.freeze(workflow);
}

function updateWorkflow(state, patch = {}) {
  const current = clone(state);
  return freezeWorkflow({
    ...current,
    ...patch,
    updatedAt: nowIso(patch)
  });
}

function canCompleteStep(stepState, steps) {
  return stepState.dependencies.every(dep => {
    const required = steps.find(item => item.stepId === dep);
    return required && ["completed", "safe_fallback"].includes(required.status);
  });
}

function completeStep(steps, stepId, resultSummary = "") {
  return steps.map(stepState => {
    if (stepState.stepId !== stepId) return stepState;
    return {
      ...stepState,
      status: "completed",
      attempts: (stepState.attempts || 0) + 1,
      resultSummary: text(resultSummary, `${stepState.title} completed as a read-only workflow step.`),
      canExecute: false,
      executionAuthority: "none"
    };
  });
}

function markReadySteps(steps) {
  return steps.map(stepState => {
    if (stepState.status !== "pending") return stepState;
    if (!canCompleteStep(stepState, steps)) return stepState;
    return {
      ...stepState,
      status: stepState.stepType === "wait_for_user_answer" ? "waiting_for_user" : "ready"
    };
  });
}

function chooseBranch(state, answer = "") {
  const normalized = text(answer).toLowerCase();
  const branches = state.branches || {};
  if (/beginner|new|training/.test(normalized) && branches.beginner) return branches.beginner;
  if (/experienced|worked|job/.test(normalized) && branches.experienced) return branches.experienced;
  if (/certificate/.test(normalized) && branches.certificate) return branches.certificate;
  if (/hands on|field/.test(normalized) && branches.hands_on) return branches.hands_on;
  if (/pest/.test(normalized) && branches.pest) return branches.pest;
  if (/disease/.test(normalized) && branches.disease) return branches.disease;
  if (/weather/.test(normalized) && branches.weather) return branches.weather;
  if (/buy/.test(normalized) && branches.buy) return branches.buy;
  if (/sell/.test(normalized) && branches.sell) return branches.sell;
  if (/training/.test(normalized) && branches.training) return branches.training;
  if (/crop/.test(normalized) && branches.crop) return branches.crop;
  return branches.unknown || Object.values(branches)[0] || "manual_review";
}

function nextCurrentStepId(steps) {
  const next = steps.find(item => ["waiting_for_user", "ready"].includes(item.status));
  return next ? next.stepId : steps[steps.length - 1].stepId;
}

function advanceN100DeepWorkflow(state, event = {}) {
  if (!isSafeN100DeepWorkflowState(state)) {
    return createN100DeepWorkflow({ prompt: "Recover unsafe workflow state", templateId: "farm_job_pathway" });
  }
  const eventType = text(event.type, "continue");
  if (eventType === "cancel") return cancelN100DeepWorkflow(state, event.reason || "user_cancelled");
  if (eventType === "restart") return restartN100DeepWorkflow(state);
  if (eventType === "provider_failure") return safeRetryAfterN100ProviderFailure(state, event);

  let steps = clone(state.steps);
  let selectedBranch = state.selectedBranch || "";
  let status = state.status;
  let finalPackage = state.finalPackage || null;

  if (eventType === "user_answer") {
    const waiting = steps.find(item => item.status === "waiting_for_user");
    if (waiting) steps = completeStep(steps, waiting.stepId, "User supplied the needed answer. Nexus did not infer private data.");
    selectedBranch = chooseBranch(state, event.answer);
    status = "active";
  } else if (eventType === "complete_ready_step" || eventType === "continue") {
    const ready = steps.find(item => item.status === "ready");
    if (ready && ready.stepType === "approval_checkpoint") {
      return updateWorkflow(state, {
        status: "waiting_for_approval_checkpoint",
        currentStepId: ready.stepId,
        steps,
        selectedBranch
      });
    }
    if (ready) {
      steps = completeStep(steps, ready.stepId, event.resultSummary);
      if (ready.stepType === "prepare_final_package") {
        finalPackage = buildFinalPackage(state, selectedBranch);
      }
    }
  } else if (eventType === "approval_checkpoint_reviewed") {
    const checkpoint = steps.find(item => item.status === "ready" && item.stepType === "approval_checkpoint");
    if (checkpoint) {
      steps = completeStep(steps, checkpoint.stepId, "Approval checkpoint reviewed. Real-world execution remains blocked by the final execution gate.");
      status = "active";
    }
  }

  steps = markReadySteps(steps);
  const allDone = steps.every(item => ["completed", "safe_fallback"].includes(item.status));
  if (allDone) status = "completed_preview_only";
  return updateWorkflow(state, {
    status,
    currentStepId: nextCurrentStepId(steps),
    steps,
    selectedBranch,
    finalPackage
  });
}

function buildFinalPackage(state, selectedBranch = "") {
  return Object.freeze({
    packageId: stableId("final-package", `${state.workflowId}:${selectedBranch}`),
    title: `${state.title} review package`,
    selectedBranch: selectedBranch || "manual_review",
    sections: Object.freeze([
      "source summary",
      "comparison notes",
      "manual checklist",
      "questions to ask manually",
      "blocked real-world actions"
    ]),
    canExecute: false,
    executionAuthority: "none",
    finalExecutionGateRequired: true,
    noProviderContactAuthorized: true
  });
}

function cancelN100DeepWorkflow(state, reason = "user_cancelled") {
  return updateWorkflow(state, {
    status: "cancelled",
    currentStepId: state.currentStepId,
    recoveryEvents: [
      ...state.recoveryEvents,
      buildAutonomyWorkflowRecovery({ reason: "cancelled", userMessage: `Workflow cancelled: ${text(reason)}.` })
    ]
  });
}

function restartN100DeepWorkflow(state) {
  return createN100DeepWorkflow({
    prompt: state.userPrompt,
    templateId: state.templateId,
    userAllowsResume: Boolean(state.resume && state.resume.resumeAllowed)
  });
}

function recoverN100DeepWorkflow(state, reason = "step_failed") {
  return updateWorkflow(state, {
    status: "safe_recovery",
    recoveryEvents: [
      ...state.recoveryEvents,
      buildAutonomyWorkflowRecovery({ reason, workflowId: state.workflowId, workflowType: state.templateId })
    ]
  });
}

function safeRetryAfterN100ProviderFailure(state, event = {}) {
  const provider = text(event.provider, "read-only-provider");
  const currentStepId = text(event.stepId, state.currentStepId);
  const steps = clone(state.steps).map(stepState => {
    if (stepState.stepId !== currentStepId) return stepState;
    return {
      ...stepState,
      status: "safe_fallback",
      attempts: (stepState.attempts || 0) + 1,
      resultSummary: `${provider} failed safely. Nexus prepared a user-initiated retry option only; no background retry ran.`,
      canExecute: false,
      executionAuthority: "none"
    };
  });
  return updateWorkflow(state, {
    status: "safe_provider_fallback",
    steps: markReadySteps(steps),
    currentStepId: nextCurrentStepId(markReadySteps(steps)),
    recoveryEvents: [
      ...state.recoveryEvents,
      buildAutonomyWorkflowRecovery({
        reason: "provider_error",
        workflowId: state.workflowId,
        workflowType: state.templateId,
        stepId: currentStepId,
        providerStatus: "error",
        error: { code: text(event.code, "provider_error") }
      })
    ]
  });
}

function isSafeN100DeepWorkflowState(state) {
  if (!state || typeof state !== "object" || Array.isArray(state)) return false;
  if (state.schemaVersion !== SCHEMA_VERSION) return false;
  if (!DEEP_WORKFLOW_TEMPLATES[state.templateId]) return false;
  if (!Array.isArray(state.providers) || state.providers.length < 1) return false;
  if (!Array.isArray(state.steps) || state.steps.length < 3) return false;
  if (!Array.isArray(state.approvalCheckpoints) || state.approvalCheckpoints.length < 1) return false;
  if (!Array.isArray(state.progressTimeline) || state.progressTimeline.length !== state.steps.length) return false;
  if (state.canExecute !== false || state.executionAuthority !== "none") return false;
  if (state.noExecutionAuthorized !== true || state.noProviderContactAuthorized !== true || state.noBackendWritePerformed !== true) return false;
  if (!state.safetyPosture || state.safetyPosture.noExecutionAuthorized !== true || state.safetyPosture.noAutoRetry !== true) return false;
  const serialized = JSON.stringify(state);
  if (/(phoneNumberToDial|telUrl|nativeBridge|paymentIntent|messageToSend|providerUrl|deepLink|executionAuthority":"provider")/.test(serialized)) return false;
  return state.steps.every(item => (
    item &&
    STEP_TYPES.includes(item.stepType) &&
    Array.isArray(item.dependencies) &&
    item.canExecute === false &&
    item.executionAuthority === "none" &&
    item.readOnly === true
  )) && state.approvalCheckpoints.every(item => (
    item &&
    item.finalExecutionGateRequired === true &&
    item.canExecute === false &&
    item.executionAuthority === "none"
  ));
}

module.exports = Object.freeze({
  SCHEMA_VERSION,
  STEP_TYPES,
  BLOCKED_REAL_WORLD_ACTIONS,
  DEEP_WORKFLOW_TEMPLATES,
  createN100DeepWorkflow,
  advanceN100DeepWorkflow,
  buildProgressTimeline,
  buildFinalPackage,
  cancelN100DeepWorkflow,
  restartN100DeepWorkflow,
  recoverN100DeepWorkflow,
  safeRetryAfterN100ProviderFailure,
  isSafeN100DeepWorkflowState
});
