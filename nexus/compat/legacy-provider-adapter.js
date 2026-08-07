const providers = require("../../server/providers/index.js");

const LEGACY_TOOL_DESCRIPTORS = Object.freeze([
  Object.freeze({ toolId: "legacy.documents.analyze", description: "Analyze user-supplied document text",
    domain: "documents", implementation: "compat:server/providers/documentProvider", riskTier: "low",
    requiredPermission: "tasks:execute", confirmationRequired: false, verificationMethod: "provider_verified",
    status: env => providers.documents.status(env), execute: ({ input, env }) => providers.documents.analyze(input, env) }),
  Object.freeze({ toolId: "legacy.reminders.create", description: "Legacy in-browser reminder creation",
    domain: "reminders", implementation: "compat:server/providers/reminderProvider", riskTier: "medium",
    requiredPermission: "tasks:execute", confirmationRequired: true, verificationMethod: "disabled_pending_durable_port",
    forceUnavailable: true, status: env => providers.reminders.status(env) }),
  Object.freeze({ toolId: "legacy.offline.queue", description: "Legacy local offline queue",
    domain: "offline", implementation: "compat:server/providers/offlineSyncProvider", riskTier: "medium",
    requiredPermission: "tasks:execute", confirmationRequired: true, verificationMethod: "disabled_pending_durable_port",
    forceUnavailable: true, status: env => providers.offlineSync.status(env) })
]);

async function registerLegacyTools({ registry, env = process.env, migrationStatus = async () => ({state:"legacy"}) }) {
  const registered = [];
  for (const descriptor of LEGACY_TOOL_DESCRIPTORS) {
    const migration=await migrationStatus(descriptor.domain === "offline" ? "offline-queue" : descriptor.domain);
    const providerState = descriptor.status(env);
    const retired=migration.state==="authoritative"||migration.state==="retired";
    const live = !retired && !descriptor.forceUnavailable && providerState.enabled && !(providerState.missingConfig || []).length;
    registered.push(await registry.register({
      toolId: descriptor.toolId, description: descriptor.description, domain: descriptor.domain,
      implementation: descriptor.implementation, availability: live ? "available" : "unavailable",
      requiredPermission: descriptor.requiredPermission, riskTier: descriptor.riskTier,
      confirmationRequired: descriptor.confirmationRequired, verificationMethod: descriptor.verificationMethod,
      dataClassification: descriptor.domain === "documents" ? "sensitive" : "internal",
      metadata: { compatibilityAdapter: true, authoritativeState: false,
        migrationState: retired ? "retired" : descriptor.forceUnavailable ? "awaiting_durable_port" : "stateless_adapter",
        legacyWriteAllowed: false,
        providerState: sanitizeStatus(providerState) }
    }));
  }
  return registered;
}

function createLegacyExecutors({ env = process.env } = {}) {
  return Object.fromEntries(LEGACY_TOOL_DESCRIPTORS.filter(item => !item.forceUnavailable && item.execute)
    .map(descriptor => [descriptor.toolId, async ({ input }) => {
      const response = await descriptor.execute({ input: { ...input, confirmed: true }, env });
      const body = response?.body || {};
      if (!body.ok || body.status !== "completed") {
        const error = new Error(body.message || `${descriptor.toolId} did not complete.`);
        error.code = body.status || "legacy_provider_failed"; throw error;
      }
      return { provider: body.provider, action: body.action, data: body.data,
        providerAuditEvent: body.auditEvent, providerVerified: body.data?.providerVerified === true };
    }]));
}

async function verifyLegacyOutcome({ tool, result }) {
  if (!tool.implementation.startsWith("compat:")) return { verified: false, method: "wrong_verifier" };
  return { verified: result?.providerVerified === true, method: "legacy_provider_verified_flag",
    providerAuditId: result?.providerAuditEvent?.auditId || null };
}

function sanitizeStatus(status) {
  return Object.fromEntries(Object.entries(status || {}).filter(([key]) => !/secret|token|key|password/i.test(key)));
}

module.exports = Object.freeze({ LEGACY_TOOL_DESCRIPTORS, registerLegacyTools, createLegacyExecutors, verifyLegacyOutcome });
