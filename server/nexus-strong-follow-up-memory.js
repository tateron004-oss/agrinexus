const crypto = require("node:crypto");
const followUpContext = require("./nexus-assistant-follow-up-context.js");
const taskPlanner = require("./nexus-agent-task-planner.js");
const safePreparation = require("./nexus-safe-action-preparation.js");

const SUPPORTED_FOLLOW_UPS = Object.freeze([
  "use-selected-item",
  "simplify",
  "filter-entry-level",
  "checklist",
  "draft-questions",
  "compare-top-two",
  "next-best-step",
  "explain"
]);

const BLOCKED_FOLLOW_UPS = Object.freeze([
  "apply",
  "call",
  "send",
  "book",
  "pay",
  "dispatch",
  "buy",
  "submit",
  "share location"
]);

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function compact(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function stableMemoryId(seed) {
  return `assistant-memory-${crypto.createHash("sha256").update(String(seed || "")).digest("hex").slice(0, 16)}`;
}

function buildStrongFollowUpMemory({ userGoal = "", providerCategory = "", query = "", resultsSummary = "", selectedItem = null, activePlan = null, activePreparation = null, blockedActions = [] } = {}, now = new Date()) {
  const normalizedGoal = compact(userGoal || query || "active assistant task");
  const plan = activePlan || taskPlanner.buildAgentTaskPlan(normalizedGoal);
  const prep = activePreparation || null;
  return Object.freeze({
    memoryId: stableMemoryId(`${normalizedGoal}:${providerCategory}:${query}:${now.toISOString()}`),
    lastUserGoal: normalizedGoal,
    lastProviderCategory: compact(providerCategory || (plan.providerQueries && plan.providerQueries[0]) || "none"),
    lastQuery: compact(query || normalizedGoal),
    lastResultsSummary: compact(resultsSummary || plan.nextBestStep || ""),
    selectedItem: selectedItem ? Object.freeze({
      index: Number(selectedItem.index || 1),
      label: compact(selectedItem.label || "selected item"),
      source: compact(selectedItem.source || "user-visible result")
    }) : null,
    activePlan: Object.freeze({
      planId: plan.planId,
      goalType: plan.goalType,
      nextBestStep: plan.nextBestStep
    }),
    activeChecklistOrDraft: prep ? Object.freeze({
      preparationId: prep.preparationId,
      preparationType: prep.preparationType,
      title: prep.userFacingTitle
    }) : null,
    blockedActions: Object.freeze(Array.from(new Set([...(blockedActions || []), ...BLOCKED_FOLLOW_UPS]))),
    safeNextStep: plan.nextBestStep,
    supportedFollowUps: SUPPORTED_FOLLOW_UPS,
    expiresAt: new Date(now.getTime() + 30 * 60 * 1000).toISOString(),
    sessionOnly: true,
    noPersistence: true,
    noExecutionAuthorized: true,
    noProviderContactAuthorized: true,
    noLocationPermissionRequested: true,
    noBackendWritePerformed: true
  });
}

function classifyStrongFollowUp(input, memory, now = new Date()) {
  const prompt = compact(input).toLowerCase();
  if (!memory || !hasText(memory.expiresAt) || new Date(memory.expiresAt).getTime() <= now.getTime()) {
    return Object.freeze({ followUpType: "missing-context", allowed: false, blockedReason: "missing_or_expired_memory", noExecutionAuthorized: true });
  }
  if (BLOCKED_FOLLOW_UPS.some(action => prompt.includes(action))) {
    return Object.freeze({ followUpType: "blocked-execution-follow-up", allowed: false, blockedReason: "follow_up_execution_blocked", noExecutionAuthorized: true });
  }
  if (/\b(use the second|second one|option 2|number 2)\b/.test(prompt)) return allowed("use-selected-item");
  if (/\b(make it simpler|simpler|plain language|easy)\b/.test(prompt)) return allowed("simplify");
  if (/\b(entry[- ]level|beginner|only show entry)\b/.test(prompt)) return allowed("filter-entry-level");
  if (/\b(checklist|turn that into steps)\b/.test(prompt)) return allowed("checklist");
  if (/\b(draft questions|questions for that|ask that program)\b/.test(prompt)) return allowed("draft-questions");
  if (/\b(compare the top two|compare top two|compare them)\b/.test(prompt)) return allowed("compare-top-two");
  if (/\b(what should i do next|next step|next best)\b/.test(prompt)) return allowed("next-best-step");
  if (/\b(explain|why|what does that mean)\b/.test(prompt)) return allowed("explain");

  const baseFollowUp = followUpContext.classifyAssistantFollowUp(input, {
    lastResultsSummary: memory.lastResultsSummary,
    lastProvider: memory.lastProviderCategory,
    lastQuery: memory.lastQuery,
    expiresAt: memory.expiresAt
  }, now);
  if (baseFollowUp.isFollowUp) {
    return Object.freeze({
      followUpType: baseFollowUp.followUpType,
      allowed: baseFollowUp.blocked !== true,
      blockedReason: baseFollowUp.reason || "",
      noExecutionAuthorized: true
    });
  }
  return Object.freeze({ followUpType: "clarify-follow-up", allowed: false, blockedReason: "unsupported_follow_up", noExecutionAuthorized: true });
}

function allowed(followUpType) {
  return Object.freeze({ followUpType, allowed: true, blockedReason: "", noExecutionAuthorized: true });
}

function buildStrongFollowUpResponse(input, memory) {
  const classification = classifyStrongFollowUp(input, memory);
  if (classification.allowed !== true) {
    return Object.freeze({
      responseType: "blocked-follow-up",
      answer: "I can keep preparing information, but I cannot execute that follow-up action. No action has been taken.",
      classification,
      memory,
      noExecutionAuthorized: true
    });
  }
  const selected = memory.selectedItem ? ` using ${memory.selectedItem.label}` : "";
  return Object.freeze({
    responseType: "safe-follow-up",
    answer: `Using the active ${memory.lastProviderCategory} context${selected}, I can ${classification.followUpType.replace(/-/g, " ")} for "${memory.lastQuery}". This stays preparation-only and read-only.`,
    classification,
    memory,
    noExecutionAuthorized: true
  });
}

function isSafeStrongFollowUpMemory(memory) {
  if (!memory || typeof memory !== "object" || Array.isArray(memory)) return false;
  if (!hasText(memory.memoryId) || !hasText(memory.lastUserGoal) || !hasText(memory.lastQuery)) return false;
  if (!Array.isArray(memory.blockedActions) || !Array.isArray(memory.supportedFollowUps)) return false;
  if (memory.sessionOnly !== true || memory.noPersistence !== true) return false;
  if (memory.noExecutionAuthorized !== true) return false;
  if (memory.noProviderContactAuthorized !== true) return false;
  if (memory.noLocationPermissionRequested !== true) return false;
  if (memory.noBackendWritePerformed !== true) return false;
  return true;
}

module.exports = Object.freeze({
  SUPPORTED_FOLLOW_UPS,
  BLOCKED_FOLLOW_UPS,
  buildStrongFollowUpMemory,
  classifyStrongFollowUp,
  buildStrongFollowUpResponse,
  isSafeStrongFollowUpMemory
});
