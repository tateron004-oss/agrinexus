const { getCapability } = require("./nexusCapabilityRegistry");
const { planAction } = require("./nexusActionPlanner");
const connectorRuntime = require("./nexusConnectorRuntime");
const { recordRuntimeAudit, safeText } = require("./nexusRuntimeAudit");

function blockedResult(plan, blockedReason, message) {
  return {
    ...plan,
    ok: false,
    mode: "blocked",
    executionAllowed: false,
    executionAttempted: false,
    blockedReason,
    executionResult: { ok: false, status: blockedReason, blockedReason, message },
    userMessage: message
  };
}

function localFallbackMessage(capability, plan) {
  if (capability.id === "workflow.reminder") return "In-app reminder created after confirmation. No OS notification permission was requested.";
  if (capability.id === "workflow.offlineQueue") return "Safe follow-up metadata queued locally for offline review.";
  if (capability.id === "medical.emergencyGuidance") return "Emergency routine execution is blocked. Seek local emergency help immediately.";
  if (capability.domain === "medical") return "Medical support action prepared locally for provider review. No diagnosis, prescription, booking, contact, payment, record exchange, or dispatch occurred.";
  if (capability.domain === "marketplace") return "Marketplace inquiry draft prepared locally. No buyer/seller contact, order, inventory change, or payment occurred.";
  if (capability.domain === "communications") return "Communication draft prepared locally. No message, call, email, or WhatsApp was sent.";
  if (capability.domain === "maps") return "Typed-location route plan prepared locally. No geolocation permission or external navigation was launched.";
  if (capability.domain === "drone") return "Drone service request prepared locally. No flight control or dispatch occurred.";
  if (capability.domain === "learning") return "Enrollment preparation created locally. No course enrollment occurred.";
  return `${capability.id} prepared locally. No external action occurred.`;
}

function localFallbackResult(capability, plan, db) {
  const referenceId = `nexus-runtime-local-${Date.now()}`;
  if (capability.id === "workflow.reminder") {
    db.profile = db.profile || {};
    db.profile.nexusReminders = Array.isArray(db.profile.nexusReminders) ? db.profile.nexusReminders : [];
    const reminder = {
      id: referenceId,
      title: safeText(plan.userGoal || "Nexus follow-up", 140),
      dueAt: "user requested follow-up",
      note: "Created by Nexus Production Action Assistant after explicit confirmation.",
      status: "in_app_only",
      osNotificationRequested: false,
      createdAt: new Date().toISOString()
    };
    db.profile.nexusReminders.unshift(reminder);
    db.profile.nexusReminders = db.profile.nexusReminders.slice(0, 50);
    return { ok: true, status: "local_fallback", referenceId, message: localFallbackMessage(capability, plan), data: { reminder } };
  }
  if (capability.id === "workflow.offlineQueue") {
    db.profile = db.profile || {};
    db.profile.offlineQueue = Array.isArray(db.profile.offlineQueue) ? db.profile.offlineQueue : [];
    const item = {
      id: referenceId,
      type: "workflow_plan",
      content: safeText(`Nexus runtime follow-up: ${plan.domain} ${plan.intent}`, 220),
      status: "queued",
      createdAt: new Date().toISOString()
    };
    db.profile.offlineQueue.unshift(item);
    db.profile.offlineQueue = db.profile.offlineQueue.slice(0, 50);
    return { ok: true, status: "queued", referenceId, message: localFallbackMessage(capability, plan), data: { item } };
  }
  return {
    ok: true,
    status: "local_fallback",
    referenceId,
    message: localFallbackMessage(capability, plan),
    data: {
      summary: safeText(plan.userGoal, 300),
      capabilityId: capability.id,
      fallbackBehavior: capability.fallbackBehavior,
      noExternalAction: true
    }
  };
}

async function executeAction(input = {}, db = {}, env = process.env) {
  const plan = input.plan && input.plan.runtime === "nexus_production_capability_runtime"
    ? input.plan
    : planAction({ userGoal: input.userGoal || "", context: input.context || {}, confirmed: input.confirmed === true });
  if (plan.intent === "emergency_guidance") {
    const result = blockedResult(plan, "blocked_emergency", "Emergency requests are not handled as routine actions. Seek local emergency help immediately; Nexus cannot dispatch emergency services in this build.");
    result.auditEvent = recordRuntimeAudit(db, result);
    return result;
  }
  if (!plan.capabilities?.length) {
    const result = blockedResult(plan, "blocked_unknown_capability", "Nexus could not identify a registered capability for this goal.");
    result.auditEvent = recordRuntimeAudit(db, result);
    return result;
  }
  if (plan.missingInformation?.length) {
    const result = blockedResult(plan, "blocked_missing_information", `I need ${plan.missingInformation.join(", ")} before this can execute.`);
    result.auditEvent = recordRuntimeAudit(db, result);
    return result;
  }
  const primaryCapability = getCapability(input.capabilityId || plan.capabilities[0]);
  if (!primaryCapability) {
    const result = blockedResult(plan, "blocked_unknown_capability", "The selected capability is not registered.");
    result.auditEvent = recordRuntimeAudit(db, result);
    return result;
  }
  if (primaryCapability.requiresConfirmation && input.confirmed !== true && plan.confirmed !== true) {
    const result = blockedResult(plan, "blocked_confirmation_required", "Confirm this action before Nexus executes or creates a local fallback.");
    result.auditEvent = recordRuntimeAudit(db, result);
    return result;
  }
  const payload = connectorRuntime.buildPayload(primaryCapability, { ...input.context, userGoal: plan.userGoal, intent: plan.intent });
  const connectorResult = await connectorRuntime.execute(primaryCapability, payload, { confirmed: input.confirmed === true || plan.confirmed === true }, env);
  let executionResult = connectorResult;
  let mode = connectorResult.status || "failed";
  let executionAttempted = false;
  let executionAllowed = connectorResult.ok === true;
  if (!connectorResult.ok && (connectorResult.status === "blocked_connector_not_configured" || connectorResult.status === "blocked_live_execution_disabled")) {
    executionResult = localFallbackResult(primaryCapability, plan, db);
    mode = executionResult.status === "queued" ? "queued" : "local_fallback";
    executionAllowed = true;
  } else if (connectorResult.ok && connectorResult.status === "local_fallback") {
    executionResult = localFallbackResult(primaryCapability, plan, db);
    mode = executionResult.status === "queued" ? "queued" : "local_fallback";
    executionAllowed = true;
  } else if (connectorResult.ok) {
    mode = "configured_execution";
    executionAttempted = true;
  }
  const result = {
    ...plan,
    ok: executionResult.ok === true,
    mode,
    confirmed: input.confirmed === true || plan.confirmed === true,
    executionAllowed,
    executionAttempted,
    blockedReason: executionResult.blockedReason || "",
    connectorReadiness: { [primaryCapability.connectorKey]: connectorRuntime.getReadiness(primaryCapability.connectorKey, env) },
    executionResult,
    userMessage: executionResult.message || plan.userMessage
  };
  result.auditEvent = recordRuntimeAudit(db, result);
  return result;
}

module.exports = {
  executeAction
};
