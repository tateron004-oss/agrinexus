const dialogue = require("../public/nexus-assistant-dialogue-engine-contract.js");
const orchestrator = require("./nexus-live-source-orchestrator.js");

const ALLOWED_FOLLOW_UPS = Object.freeze([
  "Ask a follow-up question",
  "Compare sources",
  "Explain this result",
  "Show related agriculture guidance",
  "Show workforce learning options",
  "Refine search terms",
  "Review source details"
]);

const BLOCKED_FOLLOW_UP_PATTERNS = Object.freeze([
  /\bcall\b/i,
  /\bmessage\b/i,
  /\bapply\s+now\b/i,
  /\bbuy\s+now\b/i,
  /\bbook\b/i,
  /\bsend\s+location\b/i,
  /\bdispatch\b/i,
  /\bsubmit\b/i,
  /\bpay\b/i,
  /\bcreate\s+account\b/i
]);

function isLiveSourcePreviewEnabled(env = process.env) {
  return env.NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED === "true";
}

function filterSafeFollowUps(options) {
  const source = Array.isArray(options) && options.length > 0 ? options : ALLOWED_FOLLOW_UPS;
  return Object.freeze(source
    .filter(option => typeof option === "string" && option.trim())
    .filter(option => !BLOCKED_FOLLOW_UP_PATTERNS.some(pattern => pattern.test(option)))
    .filter(option => ALLOWED_FOLLOW_UPS.includes(option))
    .slice(0, 4));
}

function buildDisabledPreview(input, context) {
  const assistantPreview = dialogue.buildAssistantDialoguePreview(input, context);
  return Object.freeze({
    previewId: `assistant-orchestrated-live-source-preview-disabled-${assistantPreview.intentType}`,
    sourcePreviewEnabled: false,
    assistantPreview,
    orchestrationResult: null,
    citations: [],
    confidence: "low",
    safetyPosture: Object.freeze({
      readOnly: true,
      previewOnly: true,
      noExecutionAuthorized: true,
      noLocationPermissionRequested: true,
      noProviderContactAuthorized: true,
      noBackendWritePerformed: true
    }),
    userFacingSummary: "Live source preview is not enabled.",
    nextSafeOptions: filterSafeFollowUps([]),
    noExecutionRequired: true,
    executionAuthority: false
  });
}

function buildAssistantLiveSourceOrchestratorPreview(input, context = {}, env = process.env) {
  if (!isLiveSourcePreviewEnabled(env)) return buildDisabledPreview(input, context);
  const assistantPreview = dialogue.buildAssistantDialoguePreview(input, context);
  const orchestrationResult = orchestrator.buildLiveSourceOrchestrationResult(input, context, env);
  return Object.freeze({
    previewId: `assistant-orchestrated-live-source-preview-${orchestrationResult.intent}`,
    sourcePreviewEnabled: true,
    assistantPreview,
    orchestrationResult,
    requestId: orchestrationResult.requestId,
    selectedProvider: orchestrationResult.selectedProvider,
    providerStatus: orchestrationResult.providerStatus,
    allowed: orchestrationResult.allowed === true,
    blockedReason: orchestrationResult.blockedReason,
    riskTier: orchestrationResult.riskTier,
    citations: Object.freeze(orchestrationResult.citations.slice()),
    confidence: orchestrationResult.confidence,
    safetyPosture: orchestrationResult.safetyPosture,
    auditEvent: orchestrationResult.auditEvent,
    userFacingSummary: orchestrationResult.userFacingSummary,
    nextSafeOptions: filterSafeFollowUps(orchestrationResult.suggestedFollowUps),
    noExecutionRequired: true,
    executionAuthority: false,
    noExecutionAuthorized: true,
    noLocationPermissionRequested: true,
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true
  });
}

function isSafeAssistantLiveSourceOrchestratorPreview(preview) {
  if (!preview || typeof preview !== "object" || Array.isArray(preview)) return false;
  if (preview.noExecutionRequired !== true || preview.executionAuthority !== false) return false;
  if (preview.noExecutionAuthorized === false) return false;
  if (!preview.safetyPosture || preview.safetyPosture.readOnly !== true || preview.safetyPosture.previewOnly !== true) return false;
  if (!Array.isArray(preview.nextSafeOptions)) return false;
  if (preview.nextSafeOptions.some(option => BLOCKED_FOLLOW_UP_PATTERNS.some(pattern => pattern.test(option)))) return false;
  if (preview.orchestrationResult && !orchestrator.isSafeLiveSourceOrchestrationResult(preview.orchestrationResult)) return false;
  return true;
}

module.exports = Object.freeze({
  ALLOWED_FOLLOW_UPS,
  BLOCKED_FOLLOW_UP_PATTERNS,
  isLiveSourcePreviewEnabled,
  filterSafeFollowUps,
  buildAssistantLiveSourceOrchestratorPreview,
  isSafeAssistantLiveSourceOrchestratorPreview
});
