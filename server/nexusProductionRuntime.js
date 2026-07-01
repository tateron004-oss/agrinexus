const { listCapabilities, registryStatus } = require("./nexusCapabilityRegistry");
const { planAction } = require("./nexusActionPlanner");
const { executeAction } = require("./nexusActionExecutor");
const { verifyAction } = require("./nexusActionVerifier");
const { recordRuntimeAudit } = require("./nexusRuntimeAudit");
const connectorRuntime = require("./nexusConnectorRuntime");

function capabilities(env = process.env) {
  const connectorReadiness = connectorRuntime.getSafeStatus(env);
  return {
    ok: true,
    runtime: "nexus_production_capability_runtime",
    capabilities: registryStatus(env, connectorReadiness).capabilities
  };
}

function status(db = {}, env = process.env) {
  const connectorReadiness = connectorRuntime.getSafeStatus(env);
  return {
    ok: true,
    runtime: "nexus_production_capability_runtime",
    enabled: connectorRuntime.runtimeEnabled(env),
    liveExecutionEnabled: connectorRuntime.liveExecutionEnabled(env),
    confirmationRequired: env.NEXUS_RUNTIME_REQUIRE_CONFIRMATION !== "false",
    auditEnabled: env.NEXUS_RUNTIME_AUDIT_ENABLED !== "false",
    offlineQueueEnabled: env.NEXUS_RUNTIME_OFFLINE_QUEUE_ENABLED !== "false",
    capabilityCount: listCapabilities().length,
    connectorReadiness,
    activityCount: Array.isArray(db.profile?.nexusRuntimeActivity) ? db.profile.nexusRuntimeActivity.length : 0,
    policy: {
      noSilentExecution: true,
      noSecretExposure: true,
      emergencyBlockedFromRoutineExecution: true,
      medicalNoDiagnosisOrPrescription: true
    }
  };
}

function plan(body = {}, db = {}, env = process.env) {
  const result = planAction({ userGoal: body.userGoal || body.goal || "", context: body.context || {}, confirmed: body.confirmed === true });
  result.connectorReadiness = Object.fromEntries((result.capabilities || []).map(capabilityId => {
    const capability = capabilities(env).capabilities.find(item => item.id === capabilityId);
    return [capabilityId, capability ? {
      connectorKey: capability.connectorKey,
      connectorStatus: capability.connectorStatus,
      missingConfig: capability.missingConfig,
      executionEnabled: capability.executionEnabled
    } : {}];
  }));
  result.auditEvent = recordRuntimeAudit(db, result);
  return result;
}

async function execute(body = {}, db = {}, env = process.env) {
  return executeAction(body, db, env);
}

function verify(body = {}, db = {}, env = process.env) {
  const result = verifyAction({
    referenceId: body.referenceId || body.executionResult?.referenceId || body.runtimeResult?.executionResult?.referenceId || "",
    capabilityId: body.capabilityId || body.runtimeResult?.capabilities?.[0] || "",
    connectorKey: body.connectorKey || ""
  }, env);
  result.auditEvent = recordRuntimeAudit(db, {
    ...result,
    userGoal: body.userGoal || body.runtimeResult?.userGoal || "Verify Nexus runtime result",
    domain: body.runtimeResult?.domain || "workflow",
    intent: "verify_result",
    capabilities: result.capabilityId ? [result.capabilityId] : [],
    riskLevel: "low",
    confirmed: false,
    executionAttempted: false,
    executionResult: result.verification
  });
  return result;
}

module.exports = {
  capabilities,
  status,
  plan,
  execute,
  verify
};
