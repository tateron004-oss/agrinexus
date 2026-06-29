const crypto = require("node:crypto");
const dialogue = require("../public/nexus-assistant-dialogue-engine-contract.js");
const orchestrator = require("./nexus-live-source-orchestrator.js");
const followUpContext = require("./nexus-assistant-follow-up-context.js");

const PROVIDER_INTENT_TO_CAPABILITY = Object.freeze({
  weather: "provider-backed-answer.weather",
  "agriculture-context": "provider-backed-answer.agriculture",
  "agriculture-help": "provider-backed-answer.agriculture",
  "current-events-news": "provider-backed-answer.news",
  "conflict-security": "provider-backed-answer.news",
  "job-search": "provider-backed-answer.jobs",
  "job-application-preparation": "safe-action-preparation.job-application",
  "resume-cover-letter-preparation": "safe-action-preparation.resume",
  "shipment-tracking": "provider-backed-answer.shipment",
  "music-media": "provider-backed-answer.media"
});

const HIGH_RISK_ACTION_PATTERNS = Object.freeze([
  /\b(call|phone|message|text|whatsapp|telegram|email)\b/i,
  /\b(buy|purchase|checkout|pay|payment|mobile money)\b/i,
  /\b(book|schedule|appointment|reserve)\b/i,
  /\b(apply|submit|send|upload|create account)\b/i,
  /\b(dispatch|emergency|ambulance|police)\b/i,
  /\b(location|geolocation|share my location|find my location)\b/i,
  /\b(camera|microphone|scan|diagnose this image)\b/i,
  /\b(prescription|refill|medical record|diagnose|doctor)\b/i
]);

const LOCAL_CAPABILITY_PATTERNS = Object.freeze([
  { capabilityId: "comparison", selectedMode: "comparison", answerMode: "comparison-table", pattern: /\b(compare|comparison|versus|vs\.?|top two|options)\b/i },
  { capabilityId: "checklist", selectedMode: "checklist", answerMode: "checklist", pattern: /\b(checklist|steps|turn this into|what should i do next)\b/i },
  { capabilityId: "draft-preparation", selectedMode: "draft-preparation", answerMode: "draft", pattern: /\b(draft|write|questions i should ask|message i can copy|call script)\b/i },
  { capabilityId: "task-plan", selectedMode: "task-plan", answerMode: "plan", pattern: /\b(help me|get started|prepare for|make a plan|plan)\b/i },
  { capabilityId: "source-review", selectedMode: "source-review", answerMode: "source-review", pattern: /\b(source|citation|where did|review source|freshness|confidence)\b/i },
  { capabilityId: "app-guidance", selectedMode: "local-guidance", answerMode: "guidance", pattern: /\b(how do i use|what can nexus|guide me|show me around)\b/i }
]);

const DEFAULT_BLOCKED_ACTIONS = Object.freeze([
  "call",
  "message",
  "payment",
  "purchase",
  "booking",
  "application submission",
  "provider contact",
  "location sharing",
  "camera or microphone activation",
  "medical or pharmacy execution",
  "emergency dispatch",
  "backend write"
]);

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function normalizePrompt(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function stableCapabilityId(prompt) {
  return `assistant-capability-${crypto.createHash("sha256").update(String(prompt || "")).digest("hex").slice(0, 16)}`;
}

function buildSafeNextSteps(selectedMode, requiresProvider) {
  if (selectedMode === "blocked") return Object.freeze(["Ask for information only", "Prepare questions manually", "Cancel"]);
  if (selectedMode === "comparison") return Object.freeze(["Compare source details", "Narrow by location", "Turn into a checklist"]);
  if (selectedMode === "checklist") return Object.freeze(["Make it simpler", "Add missing information", "Prepare questions"]);
  if (selectedMode === "draft-preparation") return Object.freeze(["Review draft text", "Edit manually", "Copy outside Nexus yourself"]);
  if (selectedMode === "task-plan") return Object.freeze(["Review plan", "Choose the first safe step", "Ask for provider-backed information"]);
  if (selectedMode === "source-review") return Object.freeze(["Review citations", "Check freshness", "Compare another source"]);
  if (requiresProvider) return Object.freeze(["Ask a follow-up question", "Compare sources", "Review source details"]);
  return Object.freeze(["Ask a follow-up question", "Create a checklist", "Prepare questions"]);
}

function isHighRiskPrompt(prompt, classification) {
  const normalized = normalizePrompt(prompt);
  if (orchestrator.HIGH_RISK_BLOCKED_INTENTS.includes(classification.intentType)) return true;
  return HIGH_RISK_ACTION_PATTERNS.some(pattern => pattern.test(normalized));
}

function classifyLocalCapability(prompt) {
  return LOCAL_CAPABILITY_PATTERNS.find(entry => entry.pattern.test(prompt)) || null;
}

function buildRouterDecision(prompt, context = {}) {
  const normalizedPrompt = normalizePrompt(prompt);
  const classification = dialogue.classifyAssistantDialogueIntent(normalizedPrompt, context);
  const followUp = followUpContext.classifyAssistantFollowUp(normalizedPrompt, context);
  const highRisk = isHighRiskPrompt(normalizedPrompt, classification);

  if (!hasText(normalizedPrompt)) {
    return buildDecision({
      prompt: normalizedPrompt,
      intent: classification.intentType,
      capabilityId: "safe-unavailable.empty-query",
      selectedMode: "safe-unavailable",
      answerMode: "clarification",
      allowed: false,
      blockedReason: "empty_query",
      riskTier: "low",
      requiresProvider: false,
      requiresUserConfirmation: false
    });
  }

  if (highRisk) {
    return buildDecision({
      prompt: normalizedPrompt,
      intent: classification.intentType,
      capabilityId: "blocked-unsafe-action",
      selectedMode: "blocked",
      answerMode: "blocked-action-explanation",
      allowed: false,
      blockedReason: "unsafe_or_high_risk_action_requires_future_gate",
      riskTier: "high",
      requiresProvider: false,
      requiresUserConfirmation: true
    });
  }

  if (followUp.isFollowUp === true) {
    return buildDecision({
      prompt: normalizedPrompt,
      intent: classification.intentType,
      capabilityId: "follow-up-refinement",
      selectedMode: "follow-up-refinement",
      answerMode: followUp.followUpType || "follow-up",
      allowed: followUp.blocked !== true,
      blockedReason: followUp.blocked === true ? followUp.reason : "",
      riskTier: followUp.blocked === true ? "high" : "low",
      requiresProvider: false,
      requiresUserConfirmation: false
    });
  }

  const localCapability = classifyLocalCapability(normalizedPrompt);
  if (localCapability) {
    return buildDecision({
      prompt: normalizedPrompt,
      intent: classification.intentType,
      capabilityId: localCapability.capabilityId,
      selectedMode: localCapability.selectedMode,
      answerMode: localCapability.answerMode,
      allowed: true,
      blockedReason: "",
      riskTier: "low",
      requiresProvider: false,
      requiresUserConfirmation: false
    });
  }

  const providerCapabilityId = PROVIDER_INTENT_TO_CAPABILITY[classification.intentType];
  if (providerCapabilityId) {
    const selectedProvider = orchestrator.INTENT_TO_PROVIDER[classification.intentType] || null;
    return buildDecision({
      prompt: normalizedPrompt,
      intent: classification.intentType,
      capabilityId: providerCapabilityId,
      selectedMode: selectedProvider ? "provider-backed-answer" : "safe-preparation",
      selectedProvider,
      answerMode: selectedProvider ? "source-backed-answer" : "preparation",
      allowed: true,
      blockedReason: "",
      riskTier: "low",
      requiresProvider: Boolean(selectedProvider),
      requiresUserConfirmation: false
    });
  }

  return buildDecision({
    prompt: normalizedPrompt,
    intent: classification.intentType,
    capabilityId: "safe-unavailable.no-matching-capability",
    selectedMode: "safe-unavailable",
    answerMode: "clarification",
    allowed: false,
    blockedReason: "no_safe_capability_for_prompt",
    riskTier: "low",
    requiresProvider: false,
    requiresUserConfirmation: false
  });
}

function buildDecision({
  prompt,
  intent,
  capabilityId,
  selectedMode,
  selectedProvider = null,
  allowed,
  blockedReason,
  riskTier,
  answerMode,
  requiresProvider,
  requiresUserConfirmation
}) {
  return Object.freeze({
    routerDecisionId: stableCapabilityId(prompt),
    capabilityId,
    intent,
    selectedMode,
    selectedProvider,
    allowed: allowed === true,
    blockedReason: blockedReason || "",
    riskTier,
    answerMode,
    requiresProvider: requiresProvider === true,
    requiresUserConfirmation: requiresUserConfirmation === true,
    noExecutionAuthorized: true,
    noLocationPermissionRequested: true,
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true,
    blockedActions: DEFAULT_BLOCKED_ACTIONS,
    safeNextSteps: buildSafeNextSteps(selectedMode, requiresProvider)
  });
}

function isSafeCapabilityDecision(decision) {
  if (!decision || typeof decision !== "object" || Array.isArray(decision)) return false;
  if (!hasText(decision.routerDecisionId) || !hasText(decision.capabilityId) || !hasText(decision.intent)) return false;
  if (!hasText(decision.selectedMode) || !hasText(decision.answerMode) || !hasText(decision.riskTier)) return false;
  if (decision.noExecutionAuthorized !== true) return false;
  if (decision.noLocationPermissionRequested !== true) return false;
  if (decision.noProviderContactAuthorized !== true) return false;
  if (decision.noBackendWritePerformed !== true) return false;
  if (!Array.isArray(decision.safeNextSteps) || decision.safeNextSteps.length < 1) return false;
  if (!Array.isArray(decision.blockedActions) || decision.blockedActions.length < 6) return false;
  if (decision.allowed === false && !hasText(decision.blockedReason)) return false;
  return true;
}

module.exports = Object.freeze({
  PROVIDER_INTENT_TO_CAPABILITY,
  HIGH_RISK_ACTION_PATTERNS,
  LOCAL_CAPABILITY_PATTERNS,
  DEFAULT_BLOCKED_ACTIONS,
  buildRouterDecision,
  isSafeCapabilityDecision
});
