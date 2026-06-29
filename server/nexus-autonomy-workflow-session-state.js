const { BLOCKED_ACTIONS } = require("./nexus-autonomy-workflow-goal-classifier.js");
const { buildAutonomyWorkflowPlan, isSafeAutonomyWorkflowPlan } = require("./nexus-autonomy-workflow-planner.js");

const SESSION_TTL_MS = 30 * 60 * 1000;

const BLOCKED_COMMAND_PATTERNS = Object.freeze([
  /\bapply now\b/i,
  /\bapply\b/i,
  /\bsend it\b/i,
  /\bsend (?:the )?message\b/i,
  /\bcall them\b/i,
  /\bcall\b/i,
  /\bbuy it\b/i,
  /\bbuy\b/i,
  /\bbook it\b/i,
  /\bbook\b/i,
  /\bdispatch\b/i,
  /\bshare my location\b/i,
  /\bsend my location\b/i
]);

function iso(value) {
  return new Date(value).toISOString();
}

function nowMs(context = {}) {
  return Number.isFinite(context.now) ? context.now : Date.now();
}

function cloneArray(value) {
  return Array.isArray(value) ? value.slice() : [];
}

function normalizeCommand(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function isExpired(state, context = {}) {
  return Boolean(state && state.expiresAt && Date.parse(state.expiresAt) <= nowMs(context));
}

function safeState(base, updates = {}) {
  return Object.freeze({
    activeWorkflowId: updates.activeWorkflowId || base.activeWorkflowId,
    workflowType: updates.workflowType || base.workflowType,
    userGoal: updates.userGoal || base.userGoal,
    status: updates.status || base.status || "active",
    currentStepIndex: Number.isInteger(updates.currentStepIndex) ? updates.currentStepIndex : base.currentStepIndex,
    completedSteps: Object.freeze(cloneArray(updates.completedSteps || base.completedSteps)),
    pendingSafeArtifacts: Object.freeze(cloneArray(updates.pendingSafeArtifacts || base.pendingSafeArtifacts)),
    lastProviderResultsSummary: updates.lastProviderResultsSummary || base.lastProviderResultsSummary || "",
    selectedItem: Object.freeze(updates.selectedItem || base.selectedItem || null),
    safeNextSteps: Object.freeze(cloneArray(updates.safeNextSteps || base.safeNextSteps)),
    blockedActions: Object.freeze(cloneArray(updates.blockedActions || base.blockedActions || BLOCKED_ACTIONS)),
    createdAt: updates.createdAt || base.createdAt,
    updatedAt: updates.updatedAt || base.updatedAt,
    expiresAt: updates.expiresAt || base.expiresAt,
    sessionOnly: true,
    executionAuthority: false,
    noExecutionAuthorized: true,
    noProviderContactAuthorized: true,
    noLocationPermissionRequested: true,
    noBackendActionWritePerformed: true
  });
}

function createAutonomyWorkflowSession(planOrGoal, context = {}) {
  const plan = typeof planOrGoal === "string" ? buildAutonomyWorkflowPlan(planOrGoal) : planOrGoal;
  if (!isSafeAutonomyWorkflowPlan(plan)) {
    return Object.freeze({
      status: "missing_or_invalid_context",
      sessionOnly: true,
      executionAuthority: false,
      noExecutionAuthorized: true,
      blockedActions: Object.freeze([...BLOCKED_ACTIONS]),
      safeNextSteps: Object.freeze(["Start a supported low-risk workflow first."])
    });
  }

  const now = nowMs(context);
  return safeState({
    activeWorkflowId: plan.workflowId,
    workflowType: plan.workflowType,
    userGoal: plan.userGoal,
    status: plan.status === "blocked" ? "blocked" : "active",
    currentStepIndex: plan.currentStepIndex || 0,
    completedSteps: [],
    pendingSafeArtifacts: cloneArray(plan.artifactsToPrepare),
    lastProviderResultsSummary: "",
    selectedItem: null,
    safeNextSteps: cloneArray(plan.safeUserActions),
    blockedActions: cloneArray(plan.blockedActions),
    createdAt: iso(now),
    updatedAt: iso(now),
    expiresAt: iso(now + SESSION_TTL_MS)
  });
}

function missingContextResult(command) {
  return Object.freeze({
    state: createAutonomyWorkflowSession(null),
    command: normalizeCommand(command),
    status: "missing_context",
    response: "Start a supported low-risk workflow first.",
    blocked: false,
    noExecutionAuthorized: true
  });
}

function expiredContextResult(state, command, context) {
  const now = nowMs(context);
  return Object.freeze({
    state: safeState(state, { status: "expired", updatedAt: iso(now) }),
    command: normalizeCommand(command),
    status: "expired",
    response: "That workflow context expired. Start again when you are ready.",
    blocked: false,
    noExecutionAuthorized: true
  });
}

function isBlockedCommand(command) {
  return BLOCKED_COMMAND_PATTERNS.some(pattern => pattern.test(command));
}

function completeCurrentStep(state) {
  const stepId = `${state.workflowType}-step-${state.currentStepIndex + 1}`;
  return Array.from(new Set([...cloneArray(state.completedSteps), stepId]));
}

function applyAutonomyWorkflowCommand(state, rawCommand, context = {}) {
  const command = normalizeCommand(rawCommand);
  if (!state || !state.activeWorkflowId) return missingContextResult(command);
  if (isExpired(state, context)) return expiredContextResult(state, command, context);

  const now = iso(nowMs(context));

  if (isBlockedCommand(command)) {
    return Object.freeze({
      state: safeState(state, { updatedAt: now }),
      command,
      status: "blocked",
      response: "That command would require real-world execution, so Nexus kept the workflow in preview-only mode.",
      blocked: true,
      blockedActions: Object.freeze([...BLOCKED_ACTIONS]),
      noExecutionAuthorized: true
    });
  }

  if (/\bcancel\b/i.test(command)) {
    const nextState = safeState(state, { status: "cancelled", updatedAt: now });
    return Object.freeze({ state: nextState, command, status: "cancelled", response: "Workflow cancelled. No action was taken.", blocked: false, noExecutionAuthorized: true });
  }

  if (/\brestart\b|\bstart over\b/i.test(command)) {
    const nextState = safeState(state, {
      status: "active",
      currentStepIndex: 0,
      completedSteps: [],
      selectedItem: null,
      updatedAt: now
    });
    return Object.freeze({ state: nextState, command, status: "restarted", response: "Workflow restarted from the first safe step.", blocked: false, noExecutionAuthorized: true });
  }

  if (/\bgo back\b|\bback\b/i.test(command)) {
    const nextState = safeState(state, {
      currentStepIndex: Math.max(0, state.currentStepIndex - 1),
      updatedAt: now
    });
    return Object.freeze({ state: nextState, command, status: "moved_back", response: "Moved back one safe step.", blocked: false, noExecutionAuthorized: true });
  }

  if (/\buse the second one\b|\bsecond option\b/i.test(command)) {
    const nextState = safeState(state, {
      selectedItem: { selectionType: "ranked_option", index: 1, label: "second option" },
      updatedAt: now
    });
    return Object.freeze({ state: nextState, command, status: "selected_item", response: "Selected the second option for comparison or checklist preparation.", blocked: false, noExecutionAuthorized: true });
  }

  if (/\bcompare the top two\b|\bcompare them\b/i.test(command)) {
    const nextState = safeState(state, {
      pendingSafeArtifacts: Array.from(new Set([...cloneArray(state.pendingSafeArtifacts), "comparison_table"])),
      updatedAt: now
    });
    return Object.freeze({ state: nextState, command, status: "artifact_requested", response: "Prepared to compare the top two options as a read-only artifact.", blocked: false, noExecutionAuthorized: true });
  }

  if (/\bchecklist\b|\bturn that into a checklist\b/i.test(command)) {
    const nextState = safeState(state, {
      pendingSafeArtifacts: Array.from(new Set([...cloneArray(state.pendingSafeArtifacts), "checklist"])),
      updatedAt: now
    });
    return Object.freeze({ state: nextState, command, status: "artifact_requested", response: "Prepared a checklist artifact for manual review.", blocked: false, noExecutionAuthorized: true });
  }

  if (/\bdraft questions\b|\bdraft\b/i.test(command)) {
    const nextState = safeState(state, {
      pendingSafeArtifacts: Array.from(new Set([...cloneArray(state.pendingSafeArtifacts), "provider_questions"])),
      updatedAt: now
    });
    return Object.freeze({ state: nextState, command, status: "artifact_requested", response: "Prepared draft questions only. Nothing was sent.", blocked: false, noExecutionAuthorized: true });
  }

  if (/\bcontinue\b|\bnext step\b|\bnext\b|\bwhat should i do next\b/i.test(command)) {
    const nextState = safeState(state, {
      currentStepIndex: state.currentStepIndex + 1,
      completedSteps: completeCurrentStep(state),
      updatedAt: now
    });
    return Object.freeze({ state: nextState, command, status: "continued", response: "Advanced to the next safe workflow step.", blocked: false, noExecutionAuthorized: true });
  }

  return Object.freeze({
    state: safeState(state, { updatedAt: now }),
    command,
    status: "clarify",
    response: "I can continue, go back, restart, cancel, compare, make a checklist, or draft questions.",
    blocked: false,
    noExecutionAuthorized: true
  });
}

function isSafeAutonomyWorkflowSessionState(state) {
  return Boolean(
    state &&
    state.sessionOnly === true &&
    state.executionAuthority === false &&
    state.noExecutionAuthorized === true &&
    state.noProviderContactAuthorized !== false &&
    state.noLocationPermissionRequested !== false &&
    state.noBackendActionWritePerformed !== false &&
    Array.isArray(state.blockedActions) &&
    state.blockedActions.length > 0
  );
}

module.exports = Object.freeze({
  SESSION_TTL_MS,
  applyAutonomyWorkflowCommand,
  createAutonomyWorkflowSession,
  isSafeAutonomyWorkflowSessionState
});
