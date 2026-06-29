const {
  BLOCKED_REAL_WORLD_ACTIONS,
  createN100DeepWorkflow,
  advanceN100DeepWorkflow,
  cancelN100DeepWorkflow,
  isSafeN100DeepWorkflowState
} = require("./nexus-n100-deep-workflow-engine.js");

const SCHEMA_VERSION = "nexus.n100.workflowApprovalCheckpointRunner.v1";

const ALLOWED_AUTOMATIC_STEP_TYPES = Object.freeze([
  "provider_lookup",
  "source_lookup",
  "branch",
  "compare_and_recommend",
  "prepare_final_package",
  "complete"
]);

const APPROVAL_REQUIRED_ACTIONS = Object.freeze([
  "saving_persistent_data",
  "exporting_file",
  "creating_local_task_or_reminder",
  "opening_internal_app_section",
  "using_saved_preference",
  "connector_or_api_write",
  "calendar_action",
  "email_draft_creation",
  "provider_handoff_preparation"
]);

const HIGH_RISK_BLOCKED_WITHOUT_FUTURE_GATE = Object.freeze([
  "payments",
  "purchases",
  "external_booking",
  "application_submission",
  "emergency_dispatch",
  "medical_or_pharmacy_execution"
]);

function text(value, fallback = "") {
  const normalized = String(value || "").trim().replace(/\s+/g, " ");
  return normalized || fallback;
}

function nowIso(input = {}) {
  return input.nowIso || new Date(input.now || Date.now()).toISOString();
}

function freezeArray(list) {
  return Object.freeze((Array.isArray(list) ? list : []).map(item => (
    item && typeof item === "object" ? Object.freeze({ ...item }) : item
  )));
}

function safetyPosture() {
  return Object.freeze({
    canExecute: false,
    executionAuthority: "none",
    automaticStepsReadOnlyOnly: true,
    approvalCheckpointsRequired: true,
    finalExecutionGateRequired: true,
    noHiddenExecution: true,
    noProviderContactAuthorized: true,
    noProviderHandoffAuthorized: true,
    noLocationPermissionRequested: true,
    noBackendWritePerformed: true,
    noDispatchAuthorized: true
  });
}

function createN100WorkflowRunner(input = {}) {
  const workflow = input.workflow && isSafeN100DeepWorkflowState(input.workflow)
    ? input.workflow
    : createN100DeepWorkflow(input);
  return freezeRunner({
    schemaVersion: SCHEMA_VERSION,
    runnerId: text(input.runnerId, `${workflow.workflowId}.runner`),
    workflow,
    status: workflow.status === "waiting_for_user" ? "waiting_for_user" : "ready",
    automaticStepLog: Object.freeze([]),
    approvalLog: Object.freeze([]),
    blockedLog: Object.freeze([]),
    createdAt: nowIso(input),
    updatedAt: nowIso(input),
    safetyPosture: safetyPosture()
  });
}

function freezeRunner(runner) {
  return Object.freeze({
    ...runner,
    automaticStepLog: freezeArray(runner.automaticStepLog),
    approvalLog: freezeArray(runner.approvalLog),
    blockedLog: freezeArray(runner.blockedLog),
    safetyPosture: Object.freeze({ ...safetyPosture(), ...(runner.safetyPosture || {}) }),
    canExecute: false,
    executionAuthority: "none",
    noExecutionAuthorized: true,
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true
  });
}

function updateRunner(runner, patch = {}) {
  return freezeRunner({
    ...runner,
    ...patch,
    updatedAt: nowIso(patch)
  });
}

function currentStep(workflow) {
  return workflow.steps.find(step => step.stepId === workflow.currentStepId)
    || workflow.steps.find(step => ["waiting_for_user", "ready"].includes(step.status))
    || workflow.steps[workflow.steps.length - 1];
}

function automaticStepResult(step) {
  return Object.freeze({
    stepId: step.stepId,
    stepType: step.stepType,
    title: step.title,
    status: "completed_read_only",
    summary: `${step.title} completed as a safe read-only workflow step.`,
    createdArtifactTypes: step.stepType === "prepare_final_package" ? Object.freeze(["next_step_package"]) : Object.freeze([]),
    canExecute: false,
    executionAuthority: "none",
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true
  });
}

function approvalHoldResult(step) {
  return Object.freeze({
    checkpointStepId: step.stepId,
    title: step.title,
    status: "waiting_for_user_approval",
    allowedApprovalEffect: "review_only_continuation",
    finalExecutionGateRequired: true,
    canExecute: false,
    executionAuthority: "none",
    blockedActions: BLOCKED_REAL_WORLD_ACTIONS
  });
}

function runN100WorkflowUntilCheckpoint(runner, context = {}) {
  if (!isSafeN100WorkflowRunner(runner)) return createN100WorkflowRunner({ prompt: "Recover workflow runner" });
  let workflow = runner.workflow;
  const logs = [...runner.automaticStepLog];
  let status = runner.status;

  for (let i = 0; i < 20; i += 1) {
    const step = currentStep(workflow);
    if (!step) break;
    if (step.status === "waiting_for_user") {
      status = "waiting_for_user";
      break;
    }
    if (step.stepType === "approval_checkpoint" && step.status === "ready") {
      status = "waiting_for_approval_checkpoint";
      break;
    }
    if (!ALLOWED_AUTOMATIC_STEP_TYPES.includes(step.stepType) || step.status !== "ready") {
      status = "waiting_for_safe_input";
      break;
    }
    logs.push(automaticStepResult(step));
    workflow = advanceN100DeepWorkflow(workflow, {
      type: "continue",
      resultSummary: `${step.title} completed automatically as read-only preview.`
    });
    status = workflow.status;
    if (workflow.status === "waiting_for_approval_checkpoint" || workflow.status === "completed_preview_only") break;
  }

  return updateRunner(runner, {
    workflow,
    status,
    automaticStepLog: logs,
    updatedAt: nowIso(context)
  });
}

function answerN100WorkflowClarification(runner, answer, context = {}) {
  if (!isSafeN100WorkflowRunner(runner)) return createN100WorkflowRunner({ prompt: "Recover workflow runner" });
  const workflow = advanceN100DeepWorkflow(runner.workflow, {
    type: "user_answer",
    answer: text(answer)
  });
  return updateRunner(runner, {
    workflow,
    status: "ready",
    updatedAt: nowIso(context)
  });
}

function reviewN100ApprovalCheckpoint(runner, decision = {}) {
  if (!isSafeN100WorkflowRunner(runner)) return createN100WorkflowRunner({ prompt: "Recover workflow runner" });
  const step = currentStep(runner.workflow);
  if (!step || step.stepType !== "approval_checkpoint") {
    return blockN100HighRiskWorkflowAction(runner, "missing_approval_checkpoint", "No approval checkpoint is active.");
  }

  const normalized = text(decision.decision, "cancel").toLowerCase();
  const logEntry = Object.freeze({
    checkpointStepId: step.stepId,
    decision: normalized === "approve" ? "approved_for_review_only" : "cancelled",
    finalExecutionGateRequired: true,
    canExecute: false,
    executionAuthority: "none",
    noExecutionAuthorized: true
  });

  if (normalized !== "approve") {
    return updateRunner(runner, {
      workflow: cancelN100DeepWorkflow(runner.workflow, "approval checkpoint cancelled"),
      status: "cancelled",
      approvalLog: [...runner.approvalLog, logEntry]
    });
  }

  const workflow = advanceN100DeepWorkflow(runner.workflow, { type: "approval_checkpoint_reviewed" });
  return updateRunner(runner, {
    workflow,
    status: "ready",
    approvalLog: [...runner.approvalLog, logEntry]
  });
}

function blockN100HighRiskWorkflowAction(runner, actionType, reason = "") {
  const action = text(actionType, "unknown_high_risk_action");
  return updateRunner(runner, {
    status: "blocked_high_risk_action",
    blockedLog: [
      ...runner.blockedLog,
      Object.freeze({
        actionType: action,
        reason: text(reason, `${action} is blocked without a future high-risk gate.`),
        requiresFutureHighRiskGate: true,
        canExecute: false,
        executionAuthority: "none",
        noExecutionAuthorized: true
      })
    ]
  });
}

function cancelN100WorkflowRunner(runner, reason = "user_cancelled") {
  if (!isSafeN100WorkflowRunner(runner)) return createN100WorkflowRunner({ prompt: "Recover workflow runner" });
  return updateRunner(runner, {
    status: "cancelled",
    workflow: cancelN100DeepWorkflow(runner.workflow, reason)
  });
}

function isSafeN100WorkflowRunner(runner) {
  if (!runner || typeof runner !== "object" || Array.isArray(runner)) return false;
  if (runner.schemaVersion !== SCHEMA_VERSION) return false;
  if (!isSafeN100DeepWorkflowState(runner.workflow)) return false;
  if (!Array.isArray(runner.automaticStepLog) || !Array.isArray(runner.approvalLog) || !Array.isArray(runner.blockedLog)) return false;
  if (runner.canExecute !== false || runner.executionAuthority !== "none") return false;
  if (runner.noExecutionAuthorized !== true || runner.noProviderContactAuthorized !== true || runner.noBackendWritePerformed !== true) return false;
  if (!runner.safetyPosture || runner.safetyPosture.finalExecutionGateRequired !== true || runner.safetyPosture.noHiddenExecution !== true) return false;
  const serialized = JSON.stringify(runner);
  if (/(phoneNumberToDial|telUrl|nativeBridge|paymentIntent|messageToSend|providerUrl|deepLink|executionAuthority":"provider")/.test(serialized)) return false;
  return runner.automaticStepLog.every(item => item.canExecute === false && item.executionAuthority === "none")
    && runner.approvalLog.every(item => item.canExecute === false && item.executionAuthority === "none")
    && runner.blockedLog.every(item => item.canExecute === false && item.executionAuthority === "none");
}

module.exports = Object.freeze({
  SCHEMA_VERSION,
  ALLOWED_AUTOMATIC_STEP_TYPES,
  APPROVAL_REQUIRED_ACTIONS,
  HIGH_RISK_BLOCKED_WITHOUT_FUTURE_GATE,
  createN100WorkflowRunner,
  runN100WorkflowUntilCheckpoint,
  answerN100WorkflowClarification,
  reviewN100ApprovalCheckpoint,
  blockN100HighRiskWorkflowAction,
  cancelN100WorkflowRunner,
  approvalHoldResult,
  isSafeN100WorkflowRunner
});
