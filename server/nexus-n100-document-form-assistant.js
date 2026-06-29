const crypto = require("node:crypto");
const { BLOCKED_REAL_WORLD_ACTIONS } = require("./nexus-n100-deep-workflow-engine.js");

const SCHEMA_VERSION = "nexus.n100.documentFormAssistant.v1";

const SUPPORTED_DOCUMENT_ARTIFACTS = Object.freeze([
  "document_checklist",
  "form_fill_guidance",
  "application_draft",
  "resume_notes",
  "cover_letter_outline",
  "evidence_packet_outline",
  "review_questions"
]);

const BLOCKED_DOCUMENT_ACTIONS = Object.freeze([
  "upload_file",
  "submit_form",
  "sign_document",
  "send_document",
  "create_account",
  "attach_identity_document",
  "share_private_information",
  "write_file",
  "backend_write"
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

function classifyDocumentArtifact(prompt = "") {
  const lower = text(prompt).toLowerCase();
  if (/\b(upload|submit|send|sign|attach|create\s+(an\s+)?account|file for me|apply for me)\b/.test(lower) && !/draft|outline|checklist|questions|guidance|prepare/.test(lower)) {
    return "blocked_document_execution";
  }
  if (/form|fill/.test(lower)) return "form_fill_guidance";
  if (/application|apply/.test(lower)) return "application_draft";
  if (/resume|cv/.test(lower)) return "resume_notes";
  if (/cover letter/.test(lower)) return "cover_letter_outline";
  if (/evidence|packet/.test(lower)) return "evidence_packet_outline";
  if (/question|review/.test(lower)) return "review_questions";
  return "document_checklist";
}

function safetyPosture() {
  return Object.freeze({
    canExecute: false,
    executionAuthority: "none",
    preparationOnly: true,
    noFileUploadAuthorized: true,
    noFormSubmissionAuthorized: true,
    noSignatureAuthorized: true,
    noDocumentSendAuthorized: true,
    noAccountCreationAuthorized: true,
    noIdentityDocumentSharingAuthorized: true,
    noFileWritePerformed: true,
    noBackendWritePerformed: true,
    noStorageWritePerformed: true,
    noExternalNavigationAuthorized: true
  });
}

function artifactBody(artifactType, input = {}) {
  const topic = text(input.topic || input.prompt, "this document");
  if (artifactType === "form_fill_guidance") {
    return [
      `Form guidance for ${topic}:`,
      "1. Read the public instructions.",
      "2. Gather only the information you choose to provide.",
      "3. Review every field before entering anything.",
      "4. Do not submit until you confirm outside this assistant contract."
    ].join("\n");
  }
  if (artifactType === "application_draft") {
    return `Application draft notes for ${topic}: summarize your interest, relevant experience, training goals, and questions to review before submitting manually.`;
  }
  if (artifactType === "resume_notes") {
    return `Resume notes for ${topic}: list skills, training, work history, certifications, tools used, and references to verify before sharing.`;
  }
  if (artifactType === "cover_letter_outline") {
    return `Cover letter outline for ${topic}: opening interest, matching skills, community/workforce goals, availability, and a polite closing.`;
  }
  if (artifactType === "evidence_packet_outline") {
    return `Evidence packet outline for ${topic}: source summary, dates, contact-free next steps, user review notes, and audit-friendly caveats.`;
  }
  if (artifactType === "review_questions") {
    return `Review questions for ${topic}: What is required? What is optional? What data will be shared? What happens after submission?`;
  }
  return `Document checklist for ${topic}: identify the document type, gather public requirements, review privacy risks, and decide whether to proceed manually.`;
}

function auditMetadata(input = {}) {
  const artifactType = text(input.artifactType, "document_checklist");
  return Object.freeze({
    auditId: text(input.auditId, stableId("n100-document-audit", `${artifactType}:${input.prompt || ""}`)),
    auditEventType: "document_form_artifact_prepared",
    artifactType,
    createdAt: nowIso(input),
    redactedPayloadOnly: true,
    noExecutionAuthorized: true,
    noPrivateDataRequired: true
  });
}

function blockedDocumentResponse(prompt = "") {
  const artifactType = "blocked_document_execution";
  return Object.freeze({
    schemaVersion: SCHEMA_VERSION,
    documentArtifactId: stableId("n100-document-blocked", prompt),
    artifactType,
    status: "blocked_no_document_execution",
    reason: "Nexus can prepare document guidance, outlines, and review questions, but it cannot upload, submit, sign, send, or share documents in this phase.",
    blockedActions: Object.freeze([...BLOCKED_REAL_WORLD_ACTIONS, ...BLOCKED_DOCUMENT_ACTIONS]),
    auditMetadata: auditMetadata({ artifactType, prompt }),
    safetyPosture: safetyPosture(),
    canExecute: false,
    executionAuthority: "none",
    noExecutionAuthorized: true,
    noBackendWritePerformed: true
  });
}

function createN100DocumentFormArtifact(input = {}) {
  const prompt = text(input.prompt, "Prepare a document checklist.");
  const artifactType = input.artifactType && SUPPORTED_DOCUMENT_ARTIFACTS.includes(input.artifactType)
    ? input.artifactType
    : classifyDocumentArtifact(prompt);
  if (!SUPPORTED_DOCUMENT_ARTIFACTS.includes(artifactType)) return blockedDocumentResponse(prompt);

  return Object.freeze({
    schemaVersion: SCHEMA_VERSION,
    documentArtifactId: text(input.documentArtifactId, stableId("n100-document", `${artifactType}:${prompt}`)),
    artifactType,
    status: "prepared_for_user_review",
    prompt,
    title: text(input.title, artifactType.replace(/_/g, " ")),
    body: artifactBody(artifactType, input),
    requiresUserReview: true,
    requiresFinalExecutionGateBeforeSubmission: true,
    blockedActions: Object.freeze([...BLOCKED_REAL_WORLD_ACTIONS, ...BLOCKED_DOCUMENT_ACTIONS]),
    auditMetadata: auditMetadata({ artifactType, prompt, nowIso: input.nowIso }),
    safetyPosture: safetyPosture(),
    canExecute: false,
    executionAuthority: "none",
    noExecutionAuthorized: true,
    noBackendWritePerformed: true
  });
}

function isSafeN100DocumentFormArtifact(artifact) {
  if (!artifact || typeof artifact !== "object" || Array.isArray(artifact)) return false;
  if (artifact.schemaVersion !== SCHEMA_VERSION) return false;
  if (!artifact.documentArtifactId || !artifact.artifactType || !artifact.status) return false;
  if (artifact.canExecute !== false || artifact.executionAuthority !== "none") return false;
  if (artifact.noExecutionAuthorized !== true || artifact.noBackendWritePerformed !== true) return false;
  if (!artifact.safetyPosture || artifact.safetyPosture.noFileUploadAuthorized !== true || artifact.safetyPosture.noFormSubmissionAuthorized !== true) return false;
  if (artifact.safetyPosture.noFileWritePerformed !== true || artifact.safetyPosture.noIdentityDocumentSharingAuthorized !== true) return false;
  const serialized = JSON.stringify(artifact);
  if (/(multipart\/form-data|submitForm|uploadFile|signDocument|sendDocument|identityDocumentPayload|providerUrl|paymentIntent|executionAuthority":"provider")/.test(serialized)) return false;
  return Array.isArray(artifact.blockedActions) && BLOCKED_DOCUMENT_ACTIONS.every(action => artifact.blockedActions.includes(action));
}

module.exports = Object.freeze({
  SCHEMA_VERSION,
  SUPPORTED_DOCUMENT_ARTIFACTS,
  BLOCKED_DOCUMENT_ACTIONS,
  createN100DocumentFormArtifact,
  blockedDocumentResponse,
  isSafeN100DocumentFormArtifact
});
