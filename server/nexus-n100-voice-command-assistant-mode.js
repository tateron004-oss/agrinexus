const crypto = require("node:crypto");
const { BLOCKED_REAL_WORLD_ACTIONS } = require("./nexus-n100-deep-workflow-engine.js");

const SCHEMA_VERSION = "nexus.n100.voiceCommandAssistantMode.v1";

const SUPPORTED_COMMAND_INTENTS = Object.freeze([
  "source_lookup_preview",
  "compare_current_results",
  "checklist_preparation",
  "cancel_current_plan",
  "proactive_next_step",
  "blocked_high_risk_voice_command"
]);

const BLOCKED_VOICE_COMMAND_ACTIONS = Object.freeze([
  "call_provider",
  "send_message",
  "send_whatsapp",
  "buy_item",
  "dispatch_help",
  "open_camera",
  "share_location",
  "book_appointment",
  "submit_form",
  "payment_purchase"
]);

function text(value, fallback = "") {
  const normalized = String(value || "").trim().replace(/\s+/g, " ");
  return normalized || fallback;
}

function stableId(prefix, value) {
  return `${prefix}-${crypto.createHash("sha256").update(String(value || "")).digest("hex").slice(0, 12)}`;
}

function nowIso(input = {}) {
  return input.nowIso || new Date(input.now || Date.now()).toISOString();
}

function normalizeCommand(rawCommand = "") {
  return text(rawCommand)
    .replace(/^(hey\s+)?nexus[,\s]+/i, "")
    .replace(/^please\s+/i, "")
    .trim();
}

function classifyCommand(normalizedCommand = "") {
  const lower = text(normalizedCommand).toLowerCase();
  if (/\b(call|phone|message|whatsapp|telegram|buy|purchase|pay|dispatch|emergency|camera|location|book|schedule appointment|submit)\b/.test(lower)) {
    return "blocked_high_risk_voice_command";
  }
  if (/\bcancel\b|stop that|never mind|nevermind/.test(lower)) return "cancel_current_plan";
  if (/compare|top two|which one/.test(lower)) return "compare_current_results";
  if (/checklist|list of steps|make me a list/.test(lower)) return "checklist_preparation";
  if (/what should i do next|next step|recommend.*next/.test(lower)) return "proactive_next_step";
  return "source_lookup_preview";
}

function speakableSummary(intent, command) {
  const safeCommand = text(command, "that request");
  if (intent === "blocked_high_risk_voice_command") {
    return "I can help prepare safe options, but I cannot call, message, buy, dispatch, share location, use the camera, book, or submit anything from a voice command.";
  }
  if (intent === "cancel_current_plan") {
    return "Okay. I can cancel the current prepared plan in this safe assistant context. No external action has been taken.";
  }
  if (intent === "compare_current_results") {
    return "I can compare the current visible options and summarize differences for review. I will not choose or act for you.";
  }
  if (intent === "checklist_preparation") {
    return "I can prepare a checklist for you to review before you decide on any next step.";
  }
  if (intent === "proactive_next_step") {
    return "I can suggest the next safe step based on the current context, without taking action automatically.";
  }
  return `I can look for source-backed guidance for ${safeCommand} and show a safe preview for your review.`;
}

function safetyPosture() {
  return Object.freeze({
    canExecute: false,
    executionAuthority: "none",
    voiceCommandOnlyAfterUserInput: true,
    alwaysOnListening: false,
    microphonePermissionRequested: false,
    noSpeechSynthesisStarted: true,
    noProviderContactAuthorized: true,
    noCallAuthorized: true,
    noMessageSendAuthorized: true,
    noPaymentAuthorized: true,
    noDispatchAuthorized: true,
    noCameraAuthorized: true,
    noLocationSharingAuthorized: true,
    noBackendWritePerformed: true,
    noExternalNavigationAuthorized: true
  });
}

function createN100VoiceCommandDecision(input = {}) {
  const rawCommand = text(input.command || input.prompt, "What should I do next?");
  const normalizedCommand = normalizeCommand(rawCommand);
  const intent = classifyCommand(normalizedCommand);
  const blocked = intent === "blocked_high_risk_voice_command";

  return Object.freeze({
    schemaVersion: SCHEMA_VERSION,
    voiceCommandId: text(input.voiceCommandId, stableId("n100-voice-command", normalizedCommand)),
    sourceSurface: text(input.sourceSurface, "typed_or_user_initiated_voice"),
    rawCommand,
    normalizedCommand,
    intent,
    status: blocked ? "blocked_no_voice_execution" : "prepared_for_review",
    speakableSummary: speakableSummary(intent, normalizedCommand),
    requiresUserInitiatedInput: true,
    requiresExplicitConfirmationForFutureExecution: true,
    blockedActions: Object.freeze([...BLOCKED_REAL_WORLD_ACTIONS, ...BLOCKED_VOICE_COMMAND_ACTIONS]),
    auditMetadata: Object.freeze({
      auditId: text(input.auditId, stableId("n100-voice-command-audit", normalizedCommand)),
      auditEventType: "voice_command_interpreted",
      intent,
      createdAt: nowIso(input),
      redactedPayloadOnly: true,
      noExecutionAuthorized: true
    }),
    safetyPosture: safetyPosture(),
    canExecute: false,
    executionAuthority: "none",
    noExecutionAuthorized: true,
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true
  });
}

function isSafeN100VoiceCommandDecision(decision) {
  if (!decision || typeof decision !== "object" || Array.isArray(decision)) return false;
  if (decision.schemaVersion !== SCHEMA_VERSION) return false;
  if (!decision.voiceCommandId || !decision.intent || !decision.status) return false;
  if (!SUPPORTED_COMMAND_INTENTS.includes(decision.intent)) return false;
  if (decision.canExecute !== false || decision.executionAuthority !== "none") return false;
  if (decision.noExecutionAuthorized !== true || decision.noProviderContactAuthorized !== true || decision.noBackendWritePerformed !== true) return false;
  if (!decision.safetyPosture || decision.safetyPosture.alwaysOnListening !== false || decision.safetyPosture.microphonePermissionRequested !== false) return false;
  if (decision.safetyPosture.noCallAuthorized !== true || decision.safetyPosture.noMessageSendAuthorized !== true) return false;
  const serialized = JSON.stringify(decision);
  if (/(getUserMedia|SpeechRecognition\.start|speechSynthesis\.speak|window\.open|location\.href|nativeBridge|sendMessage|phoneNumberToDial|paymentIntent|providerUrl|executionAuthority":"provider")/.test(serialized)) return false;
  return Array.isArray(decision.blockedActions) && BLOCKED_VOICE_COMMAND_ACTIONS.every(action => decision.blockedActions.includes(action));
}

module.exports = Object.freeze({
  SCHEMA_VERSION,
  SUPPORTED_COMMAND_INTENTS,
  BLOCKED_VOICE_COMMAND_ACTIONS,
  normalizeCommand,
  classifyCommand,
  createN100VoiceCommandDecision,
  isSafeN100VoiceCommandDecision
});
