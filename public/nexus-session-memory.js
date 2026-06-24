(function nexusSessionMemoryFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusSessionMemory = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusSessionMemoryModule() {
  const SCHEMA_VERSION = "nexus-session-memory.v1";
  const MEMORY_SOURCE = "session-observation";
  const DEFAULT_CONTEXT_TTL_MINUTES = 120;
  const DEFAULT_TASK_TTL_MINUTES = 30;

  const SAFE_DOMAINS = Object.freeze([
    "general",
    "learning",
    "workforce",
    "jobs",
    "field_support",
    "marketplace",
    "agriculture",
    "maps",
    "communications",
    "health",
    "safety"
  ]);

  const SAFE_TASK_STATUSES = Object.freeze([
    "context_only",
    "needs_clarification",
    "permission_required",
    "confirmation_required",
    "blocked",
    "not_implemented",
    "ready_for_future_confirmation",
    "expired",
    "cancelled"
  ]);

  const SAFE_RISKS = Object.freeze(["low", "controlled", "sensitive", "high"]);

  const SENSITIVE_KEY_PATTERN = /(password|passcode|secret|token|credential|auth|phone|email|contact|address|location|lat|lng|lon|medical|health|diagnosis|symptom|payment|card|account|identity|emergency|buyer|seller|patient|caregiver)/i;
  const EXECUTABLE_KEY_PATTERN = /(handler|callback|executor|adapter|dispatch|deepLink|openUrl|providerUrl|telUrl|href|native(?:Bridge)?|paymentIntent|phoneNumberToDial|messageToSend|routeTo|modalId|permissionRequest)/i;
  const EXECUTABLE_ACTION_PATTERN = /(provider|provider_handoff|external_execution|call|message|payment|location|camera|marketplace|account|profile|health|emergency)/i;

  function clone(value) {
    return value && typeof value === "object" ? JSON.parse(JSON.stringify(value)) : value;
  }

  function nowIso() {
    return new Date().toISOString();
  }

  function addMinutesIso(baseIso, minutes) {
    const base = Number.isNaN(Date.parse(baseIso)) ? new Date() : new Date(baseIso);
    return new Date(base.getTime() + minutes * 60 * 1000).toISOString();
  }

  function normalizeText(value = "") {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function safeIdentifier(value, fallback) {
    const normalized = normalizeText(value);
    if (!normalized) return fallback;
    return normalized.replace(/[^\w:.-]/g, "-").slice(0, 96) || fallback;
  }

  function safeDomain(value) {
    const normalized = normalizeText(value).toLowerCase().replace(/[^\w-]/g, "_");
    return SAFE_DOMAINS.includes(normalized) ? normalized : "general";
  }

  function safeRisk(value) {
    const normalized = normalizeText(value).toLowerCase();
    return SAFE_RISKS.includes(normalized) ? normalized : "controlled";
  }

  function safeTaskStatus(value) {
    const normalized = normalizeText(value).toLowerCase();
    return SAFE_TASK_STATUSES.includes(normalized) ? normalized : "context_only";
  }

  function redactSensitiveText(value = "") {
    return normalizeText(value)
      .replace(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi, "[redacted-email]")
      .replace(/(?:\+?\d[\d\s().-]{6,}\d)/g, match => {
        const digits = match.replace(/\D/g, "");
        const looksLikeDate = /^\d{4}-\d{2}-\d{2}/.test(match);
        return !looksLikeDate && (match.trim().startsWith("+") || digits.length >= 10)
          ? "[redacted-phone]"
          : match;
      })
      .replace(/\b(?:\d{1,3}\.){3}\d{1,3}\b/g, "[redacted-network]")
      .slice(0, 280);
  }

  function shouldExcludeKey(key = "") {
    if (key === "executionAuthority") return false;
    return SENSITIVE_KEY_PATTERN.test(key) || EXECUTABLE_KEY_PATTERN.test(key);
  }

  function sanitizeSessionMemoryValue(value, pathParts = []) {
    const key = pathParts[pathParts.length - 1] || "";
    if (shouldExcludeKey(key)) return undefined;
    if (typeof value === "function") return undefined;
    if (typeof value === "string") return redactSensitiveText(value);
    if (value === null || typeof value !== "object") return value;
    if (Array.isArray(value)) {
      return value
        .map((item, index) => sanitizeSessionMemoryValue(item, [...pathParts, String(index)]))
        .filter(item => item !== undefined);
    }
    const output = {};
    for (const [childKey, childValue] of Object.entries(value)) {
      const sanitized = sanitizeSessionMemoryValue(childValue, [...pathParts, childKey]);
      if (sanitized !== undefined) output[childKey] = sanitized;
    }
    return output;
  }

  function safeNotes(notes, fallback) {
    const list = Array.isArray(notes) ? notes : [];
    const sanitized = list
      .map(note => redactSensitiveText(note))
      .filter(Boolean)
      .slice(0, 6);
    return sanitized.length ? sanitized : fallback.slice();
  }

  function safeFlags(flags) {
    const allowed = new Set(["contact", "location", "health", "payment", "minor", "account", "emergency", "marketplace"]);
    return (Array.isArray(flags) ? flags : [])
      .map(flag => normalizeText(flag).toLowerCase())
      .filter(flag => allowed.has(flag))
      .slice(0, 8);
  }

  function safeGateList(items) {
    return (Array.isArray(items) ? items : [])
      .map(item => sanitizeSessionMemoryValue(item))
      .filter(item => item && typeof item === "object")
      .slice(0, 6);
  }

  function createNexusSessionContext(input = {}) {
    const createdAt = input.createdAt || nowIso();
    return {
      schemaVersion: SCHEMA_VERSION,
      sessionId: safeIdentifier(input.sessionId, `session.local.${Date.now()}`),
      createdAt,
      updatedAt: input.updatedAt || createdAt,
      expiresAt: input.expiresAt || addMinutesIso(createdAt, DEFAULT_CONTEXT_TTL_MINUTES),
      currentDomain: safeDomain(input.currentDomain || input.domain),
      currentWorkflowSurface: redactSensitiveText(input.currentWorkflowSurface || input.surface || ""),
      lastIntentCategory: redactSensitiveText(input.lastIntentCategory || input.intentCategory || ""),
      lastIntentId: safeIdentifier(input.lastIntentId || input.intentId, ""),
      lastToolId: safeIdentifier(input.lastToolId || input.toolId, ""),
      lastPolicyStatus: safeIdentifier(input.lastPolicyStatus || input.policyStatus, ""),
      lastPlanId: safeIdentifier(input.lastPlanId || input.planId, ""),
      activeTopic: redactSensitiveText(input.activeTopic || input.topic || ""),
      safeSummary: redactSensitiveText(input.safeSummary || input.summary || ""),
      nonSensitiveHints: sanitizeSessionMemoryValue(input.nonSensitiveHints || input.hints || []),
      unresolvedClarification: redactSensitiveText(input.unresolvedClarification || ""),
      lastSafeStep: redactSensitiveText(input.lastSafeStep || ""),
      resetReason: redactSensitiveText(input.resetReason || ""),
      sensitiveFlags: safeFlags(input.sensitiveFlags),
      memorySource: MEMORY_SOURCE,
      canExecute: false,
      executionAuthority: "none",
      notes: safeNotes(input.notes, [
        "Session memory is context only.",
        "Session memory is non-executing.",
        "Policy, confirmation, permission, and audit gates remain authoritative."
      ])
    };
  }

  function resetNexusSessionContext(context = {}, reason = "manual_reset") {
    const createdAt = nowIso();
    return createNexusSessionContext({
      sessionId: context.sessionId,
      createdAt,
      updatedAt: createdAt,
      resetReason: reason,
      notes: [
        "Session context was reset.",
        "No executable state is retained."
      ]
    });
  }

  function clearNexusSessionContext(context = {}, reason = "cleared") {
    return resetNexusSessionContext(context, reason);
  }

  function safeActionType(value) {
    const normalized = normalizeText(value).toLowerCase();
    return EXECUTABLE_ACTION_PATTERN.test(normalized) ? "context_only" : (normalized || "context_only");
  }

  function createNexusPendingTask(input = {}) {
    const createdAt = input.createdAt || nowIso();
    const sourceText = redactSensitiveText(input.sourceText || input.text || input.command || "");
    const requestedActionType = normalizeText(input.actionType || "");
    const executableRequestBlocked = EXECUTABLE_ACTION_PATTERN.test(requestedActionType);
    return {
      schemaVersion: SCHEMA_VERSION,
      taskId: safeIdentifier(input.taskId, `task.session.${Date.now()}`),
      sessionId: safeIdentifier(input.sessionId, "session.local.unknown"),
      sourceText,
      intentId: safeIdentifier(input.intentId, "unknown.unsupported"),
      toolId: safeIdentifier(input.toolId, ""),
      domain: safeDomain(input.domain),
      risk: safeRisk(input.risk),
      status: safeTaskStatus(input.status || (executableRequestBlocked ? "blocked" : "context_only")),
      actionType: safeActionType(requestedActionType),
      summary: redactSensitiveText(input.summary || sourceText || "Pending context only."),
      requiredInputs: safeGateList(input.requiredInputs),
      permissionGates: safeGateList(input.permissionGates),
      confirmationGates: safeGateList(input.confirmationGates),
      blockedReason: redactSensitiveText(input.blockedReason || (executableRequestBlocked ? "Executable action types cannot be represented as executable pending tasks." : "")),
      nextSafeStep: redactSensitiveText(input.nextSafeStep || "Re-evaluate policy before any future action."),
      canExecute: false,
      executionAuthority: "none",
      createdAt,
      updatedAt: input.updatedAt || createdAt,
      expiresAt: input.expiresAt || addMinutesIso(createdAt, DEFAULT_TASK_TTL_MINUTES),
      auditRequired: input.auditRequired === true || ["sensitive", "high"].includes(safeRisk(input.risk)),
      userVisible: input.userVisible !== false,
      notes: safeNotes(input.notes, [
        "Pending task is not executable.",
        "No provider, native bridge, network, permission, confirmation, or route dispatch is authorized by this object."
      ])
    };
  }

  function serializeNexusPendingTask(task = {}) {
    const safeTask = createNexusPendingTask(task);
    return sanitizeSessionMemoryValue(safeTask);
  }

  function serializeNexusSessionMemory(context = {}, pendingTasks = []) {
    const safeContext = createNexusSessionContext(context);
    return {
      schemaVersion: SCHEMA_VERSION,
      serializedAt: nowIso(),
      context: sanitizeSessionMemoryValue(safeContext),
      pendingTasks: (Array.isArray(pendingTasks) ? pendingTasks : [])
        .map(task => serializeNexusPendingTask(task))
        .filter(Boolean)
        .slice(0, 10),
      canExecute: false,
      executionAuthority: "none",
      notes: [
        "Serialized session memory excludes sensitive and executable fields.",
        "Serialized session memory is not an action queue."
      ]
    };
  }

  function validateNexusSessionMemorySnapshot(snapshot = {}) {
    const errors = [];
    const serialized = JSON.stringify(snapshot);
    if (snapshot.canExecute !== false) errors.push("snapshot canExecute must be false");
    if (snapshot.executionAuthority !== "none") errors.push("snapshot executionAuthority must be none");
    if (/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(serialized) || /\+\d[\d\s().-]{6,}\d/.test(serialized)) {
      errors.push("snapshot must not contain raw phone numbers or email addresses");
    }
    if (/"(handler|callback|executor|adapter|dispatch|deepLink|openUrl|providerUrl|telUrl|href|native(?:Bridge)?|paymentIntent|phoneNumberToDial|messageToSend|routeTo|modalId|permissionRequest)"/i.test(serialized)) {
      errors.push("snapshot must not contain executable keys");
    }
    return { ok: errors.length === 0, errors };
  }

  function getNexusSessionMemorySchema() {
    return {
      schemaVersion: SCHEMA_VERSION,
      memorySource: MEMORY_SOURCE,
      safeDomains: SAFE_DOMAINS.slice(),
      pendingTaskStatuses: SAFE_TASK_STATUSES.slice(),
      riskTiers: SAFE_RISKS.slice(),
      canExecuteAlwaysFalse: true,
      executionAuthority: "none",
      persistence: "in_memory_only"
    };
  }

  return {
    clearNexusSessionContext,
    createNexusPendingTask,
    createNexusSessionContext,
    getNexusSessionMemorySchema,
    redactSensitiveText,
    resetNexusSessionContext,
    sanitizeSessionMemoryValue,
    serializeNexusPendingTask,
    serializeNexusSessionMemory,
    validateNexusSessionMemorySnapshot
  };
});
