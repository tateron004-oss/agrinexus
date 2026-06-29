const sessionState = require("./nexus-autonomy-workflow-session-state.js");
const { BLOCKED_ACTIONS } = require("./nexus-autonomy-workflow-goal-classifier.js");

const SUPPORTED_NATURAL_FOLLOW_UP_COMMANDS = Object.freeze([
  "next",
  "continue",
  "show me the checklist",
  "compare them",
  "use the second one",
  "make it simpler",
  "what should I do next?",
  "draft questions",
  "start over",
  "cancel this"
]);

const BLOCKED_NATURAL_FOLLOW_UP_COMMANDS = Object.freeze([
  "apply for me",
  "send the message",
  "call them",
  "book it",
  "buy it",
  "pay for it",
  "dispatch someone",
  "use my location"
]);

const BLOCKED_PATTERNS = Object.freeze([
  [/\bapply (?:for me|now|to|the|this)\b|\bapply\b/i, "apply_submit"],
  [/\bsend (?:the )?(?:message|text|email|whatsapp|telegram)\b|\bmessage them\b/i, "send_message"],
  [/\bcall (?:them|him|her|provider|doctor|seller|buyer)\b|\bcall\b/i, "call_provider"],
  [/\bbook (?:it|this|appointment)?\b|\bschedule\b/i, "book_schedule"],
  [/\bbuy (?:it|this)?\b|\bpurchase\b|\bcheckout\b/i, "buy_pay_purchase"],
  [/\bpay (?:for it|now|this)?\b|\bpayment\b/i, "buy_pay_purchase"],
  [/\bdispatch (?:someone|help)?\b|\bsend help\b/i, "dispatch_help"],
  [/\buse my location\b|\bshare my location\b|\bsend my location\b|\bfind my location\b/i, "send_location"]
]);

const SUPPORTED_PATTERNS = Object.freeze([
  [/\bnext\b|\bnext step\b/i, { intent: "next_step", canonicalCommand: "next step" }],
  [/\bcontinue\b|\bkeep going\b|\bgo on\b/i, { intent: "continue", canonicalCommand: "continue" }],
  [/\bshow me (?:the )?checklist\b|\bchecklist\b/i, { intent: "show_checklist", canonicalCommand: "turn that into a checklist", artifactType: "checklist" }],
  [/\bcompare them\b|\bcompare (?:the )?(?:top two|options)\b/i, { intent: "compare", canonicalCommand: "compare the top two", artifactType: "comparison_table" }],
  [/\buse the second one\b|\bsecond option\b/i, { intent: "select_second", canonicalCommand: "use the second one" }],
  [/\bmake it simpler\b|\bsimplify\b|\bsimple version\b/i, { intent: "simplify", canonicalCommand: "make it simpler" }],
  [/\bwhat should i do next\b|\bwhat next\b/i, { intent: "next_best_step", canonicalCommand: "what should I do next?" }],
  [/\bdraft questions\b|\bquestions to ask\b/i, { intent: "draft_questions", canonicalCommand: "draft questions", artifactType: "provider_questions" }],
  [/\bstart over\b|\brestart\b/i, { intent: "restart", canonicalCommand: "restart" }],
  [/\bcancel this\b|\bcancel\b|\bstop this workflow\b/i, { intent: "cancel", canonicalCommand: "cancel" }]
]);

function text(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function noAuthority(base = {}) {
  return Object.freeze({
    ...base,
    executionAuthority: false,
    noExecutionAuthorized: true,
    noProviderContactAuthorized: true,
    noProviderHandoff: true,
    noLocationPermissionRequested: true,
    noPermissionPromptAuthorized: true,
    noBackendActionWritePerformed: true,
    noNavigationAuthorized: true
  });
}

function hasActiveWorkflow(state) {
  return Boolean(state && state.activeWorkflowId && sessionState.isSafeAutonomyWorkflowSessionState(state));
}

function blockedMatch(command) {
  const match = BLOCKED_PATTERNS.find(([pattern]) => pattern.test(command));
  return match ? match[1] : "";
}

function supportedMatch(command) {
  const match = SUPPORTED_PATTERNS.find(([pattern]) => pattern.test(command));
  return match ? match[1] : null;
}

function classifyAutonomyWorkflowFollowUpCommand(rawCommand, state = null) {
  const command = text(rawCommand);
  const blockedAction = blockedMatch(command);
  if (blockedAction) {
    return noAuthority({
      schemaVersion: "nexus.aut7.workflowFollowUpCommand.v1",
      command,
      intent: "blocked_execution_request",
      allowed: false,
      downgraded: true,
      blocked: true,
      blockedAction,
      blockedReason: "This follow-up would require real-world execution. Nexus can only keep the workflow in preview and preparation mode.",
      requiresActiveWorkflow: false,
      hasActiveWorkflow: hasActiveWorkflow(state),
      canonicalCommand: "",
      response: "I can prepare safe review material, but I cannot apply, send, call, book, buy, pay, dispatch, share location, or contact anyone."
    });
  }

  const supported = supportedMatch(command);
  if (!supported) {
    return noAuthority({
      schemaVersion: "nexus.aut7.workflowFollowUpCommand.v1",
      command,
      intent: "clarify",
      allowed: false,
      downgraded: false,
      blocked: false,
      requiresActiveWorkflow: true,
      hasActiveWorkflow: hasActiveWorkflow(state),
      canonicalCommand: "",
      response: "I can continue, show a checklist, compare options, use the second option, simplify, draft questions, restart, or cancel."
    });
  }

  const active = hasActiveWorkflow(state);
  return noAuthority({
    schemaVersion: "nexus.aut7.workflowFollowUpCommand.v1",
    command,
    intent: supported.intent,
    allowed: active,
    downgraded: false,
    blocked: false,
    requiresActiveWorkflow: true,
    hasActiveWorkflow: active,
    canonicalCommand: supported.canonicalCommand,
    artifactType: supported.artifactType || "",
    response: active
      ? "Nexus can apply this follow-up to the active workflow in preview-only mode."
      : "Start a supported low-risk workflow first, then use this follow-up."
  });
}

function applyAutonomyWorkflowFollowUpCommand(state, rawCommand, context = {}) {
  const classification = classifyAutonomyWorkflowFollowUpCommand(rawCommand, state);
  if (classification.blocked) {
    return noAuthority({
      classification,
      state: hasActiveWorkflow(state) ? state : sessionState.createAutonomyWorkflowSession(null),
      command: classification.command,
      status: "blocked",
      blocked: true,
      blockedActions: Object.freeze([classification.blockedAction, ...BLOCKED_ACTIONS.filter(action => action !== classification.blockedAction)]),
      response: classification.response
    });
  }

  if (!classification.allowed) {
    return noAuthority({
      classification,
      state: hasActiveWorkflow(state) ? state : sessionState.createAutonomyWorkflowSession(null),
      command: classification.command,
      status: "missing_context",
      blocked: false,
      response: classification.response
    });
  }

  if (classification.intent === "simplify") {
    return noAuthority({
      classification,
      state,
      command: classification.command,
      status: "simplified",
      blocked: false,
      response: "Here is the simpler version: review the current safe step, choose what you want to compare or turn into a checklist, and do not take any real-world action until you decide manually."
    });
  }

  const result = sessionState.applyAutonomyWorkflowCommand(state, classification.canonicalCommand, context);
  return noAuthority({
    ...result,
    classification,
    command: classification.command,
    response: result.response,
    blocked: result.blocked === true
  });
}

function isSafeAutonomyWorkflowFollowUpResult(result) {
  return Boolean(
    result &&
    result.executionAuthority === false &&
    result.noExecutionAuthorized === true &&
    result.noProviderContactAuthorized === true &&
    result.noProviderHandoff === true &&
    result.noLocationPermissionRequested === true &&
    result.noPermissionPromptAuthorized === true &&
    result.noBackendActionWritePerformed === true &&
    result.noNavigationAuthorized === true &&
    result.state &&
    (result.status === "missing_context" || sessionState.isSafeAutonomyWorkflowSessionState(result.state))
  );
}

module.exports = Object.freeze({
  BLOCKED_NATURAL_FOLLOW_UP_COMMANDS,
  SUPPORTED_NATURAL_FOLLOW_UP_COMMANDS,
  applyAutonomyWorkflowFollowUpCommand,
  classifyAutonomyWorkflowFollowUpCommand,
  isSafeAutonomyWorkflowFollowUpResult
});
