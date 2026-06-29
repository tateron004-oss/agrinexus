const crypto = require("node:crypto");
const { BLOCKED_REAL_WORLD_ACTIONS } = require("./nexus-n100-deep-workflow-engine.js");

const SCHEMA_VERSION = "nexus.n100.communicationsAssistant.v1";

const SUPPORTED_DRAFT_TYPES = Object.freeze([
  "provider_questions",
  "job_inquiry_draft",
  "training_inquiry_draft",
  "message_draft",
  "email_draft",
  "call_script",
  "professional_rewrite",
  "copyable_draft"
]);

const BLOCKED_COMMUNICATION_ACTIONS = Object.freeze([
  "send_email",
  "send_sms",
  "send_message",
  "send_whatsapp",
  "make_call",
  "contact_provider",
  "attach_resume",
  "upload_file",
  "submit_form",
  "auto_follow_up"
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

function classifyDraftType(prompt = "") {
  const lower = text(prompt).toLowerCase();
  if (/\bsend\b|\bcall\b/.test(lower) && !/script|draft|questions|write|prepare|rewrite/.test(lower)) return "blocked_communication_execution";
  if (/call script|script/.test(lower)) return "call_script";
  if (/question/.test(lower)) return "provider_questions";
  if (/training/.test(lower)) return "training_inquiry_draft";
  if (/job|employer/.test(lower)) return "job_inquiry_draft";
  if (/professional|rewrite|polish/.test(lower)) return "professional_rewrite";
  if (/email/.test(lower)) return "email_draft";
  if (/copy/.test(lower)) return "copyable_draft";
  return "message_draft";
}

function safetyPosture() {
  return Object.freeze({
    canExecute: false,
    executionAuthority: "none",
    draftOnly: true,
    copyableByUserOnly: true,
    noSendAuthorized: true,
    noCallAuthorized: true,
    noProviderContactAuthorized: true,
    noFileUploadAuthorized: true,
    noFormSubmissionAuthorized: true,
    noBackendWritePerformed: true,
    noExternalNavigationAuthorized: true
  });
}

function auditMetadata(input = {}) {
  const draftType = text(input.draftType, "message_draft");
  return Object.freeze({
    auditId: text(input.auditId, stableId("n100-communication-audit", `${draftType}:${input.prompt || ""}`)),
    auditEventType: "communication_draft_prepared",
    draftType,
    createdAt: nowIso(input),
    redactedPayloadOnly: true,
    noExecutionAuthorized: true,
    noProviderContactAuthorized: true,
    noSendAuthorized: true
  });
}

function draftBody(draftType, input = {}) {
  const topic = text(input.topic || input.prompt, "this opportunity");
  if (draftType === "provider_questions") {
    return [
      "Questions to ask:",
      "1. What services or requirements should I review before the next step?",
      "2. What documents or preparation would help?",
      "3. What timeline should I expect?",
      "4. Is there a public information page I can review?"
    ].join("\n");
  }
  if (draftType === "call_script") {
    return `Call script: Hello, my name is _____. I am calling to ask about ${topic}. Could you tell me the safest next step and what information I should review before making any decision?`;
  }
  if (draftType === "job_inquiry_draft") {
    return `Hello, I am interested in ${topic}. Could you share the requirements, entry-level options, training expectations, and application steps?`;
  }
  if (draftType === "training_inquiry_draft") {
    return `Hello, I am interested in training related to ${topic}. Could you share schedule, cost, prerequisites, and what I should prepare before applying?`;
  }
  if (draftType === "professional_rewrite") {
    return `Professional version: I am interested in ${topic}. Please share the next steps, requirements, and any public information I should review.`;
  }
  if (draftType === "email_draft") {
    return `Subject: Question about ${topic}\n\nHello,\n\nI am interested in learning more about ${topic}. Could you please share the next steps, requirements, and any public resources I should review?\n\nThank you.`;
  }
  return `Draft: I am interested in ${topic}. Please share the next safe step, requirements, and any public information I should review.`;
}

function blockedCommunicationResponse(prompt = "") {
  const draftType = "blocked_communication_execution";
  return Object.freeze({
    schemaVersion: SCHEMA_VERSION,
    communicationId: stableId("n100-communication-blocked", prompt),
    draftType,
    status: "blocked_no_send",
    reason: "Nexus can prepare draft text, questions, or a call script, but it cannot send messages, call, or contact providers in this phase.",
    blockedActions: Object.freeze([...BLOCKED_REAL_WORLD_ACTIONS, ...BLOCKED_COMMUNICATION_ACTIONS]),
    auditMetadata: auditMetadata({ draftType, prompt }),
    safetyPosture: safetyPosture(),
    canExecute: false,
    executionAuthority: "none",
    noExecutionAuthorized: true,
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true
  });
}

function createN100CommunicationDraft(input = {}) {
  const prompt = text(input.prompt, "Prepare a message draft.");
  const draftType = input.draftType && SUPPORTED_DRAFT_TYPES.includes(input.draftType)
    ? input.draftType
    : classifyDraftType(prompt);
  if (!SUPPORTED_DRAFT_TYPES.includes(draftType)) {
    return blockedCommunicationResponse(prompt);
  }
  return Object.freeze({
    schemaVersion: SCHEMA_VERSION,
    communicationId: text(input.communicationId, stableId("n100-communication", `${draftType}:${prompt}`)),
    draftType,
    status: "draft_prepared_for_user_review",
    prompt,
    title: text(input.title, draftType.replace(/_/g, " ")),
    body: draftBody(draftType, input),
    copyableByUser: true,
    editableByUser: true,
    requiresUserReview: true,
    sendSupported: false,
    callSupported: false,
    providerContactSupported: false,
    attachmentSupported: false,
    blockedActions: Object.freeze([...BLOCKED_REAL_WORLD_ACTIONS, ...BLOCKED_COMMUNICATION_ACTIONS]),
    auditMetadata: auditMetadata({ draftType, prompt, nowIso: input.nowIso }),
    safetyPosture: safetyPosture(),
    canExecute: false,
    executionAuthority: "none",
    noExecutionAuthorized: true,
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true
  });
}

function isSafeN100CommunicationDraft(draft) {
  if (!draft || typeof draft !== "object" || Array.isArray(draft)) return false;
  if (draft.schemaVersion !== SCHEMA_VERSION) return false;
  if (!draft.communicationId || !draft.draftType || !draft.status) return false;
  if (draft.canExecute !== false || draft.executionAuthority !== "none") return false;
  if (draft.noExecutionAuthorized !== true || draft.noProviderContactAuthorized !== true || draft.noBackendWritePerformed !== true) return false;
  if (!draft.safetyPosture || draft.safetyPosture.noSendAuthorized !== true || draft.safetyPosture.noCallAuthorized !== true) return false;
  const serialized = JSON.stringify(draft);
  if (/(sendMail|sendMessage|phoneNumberToDial|telUrl|nativeBridge|paymentIntent|providerUrl|deepLink|executionAuthority":"provider")/.test(serialized)) return false;
  return Array.isArray(draft.blockedActions) && BLOCKED_COMMUNICATION_ACTIONS.every(action => draft.blockedActions.includes(action));
}

module.exports = Object.freeze({
  SCHEMA_VERSION,
  SUPPORTED_DRAFT_TYPES,
  BLOCKED_COMMUNICATION_ACTIONS,
  createN100CommunicationDraft,
  blockedCommunicationResponse,
  isSafeN100CommunicationDraft
});
