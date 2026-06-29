const crypto = require("node:crypto");
const { BLOCKED_REAL_WORLD_ACTIONS } = require("./nexus-n100-deep-workflow-engine.js");

const SCHEMA_VERSION = "nexus.n100.healthAccessPreparationAssistant.v1";

const SUPPORTED_HEALTH_ACCESS_ARTIFACTS = Object.freeze([
  "health_access_options_checklist",
  "telehealth_preparation_notes",
  "pharmacy_support_questions",
  "mobile_clinic_access_checklist",
  "transportation_to_care_prep",
  "provider_directory_questions",
  "emergency_boundary_notice"
]);

const BLOCKED_HEALTH_ACCESS_ACTIONS = Object.freeze([
  "medical_diagnosis",
  "prescription_refill",
  "prescription_change",
  "appointment_booking",
  "provider_contact",
  "telehealth_session_start",
  "emergency_dispatch",
  "medical_record_access",
  "payment_processing",
  "location_sharing"
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

function classifyHealthAccessArtifact(prompt = "") {
  const lower = text(prompt).toLowerCase();
  if (/\b(diagnose|prescribe|refill|change my medicine|book appointment|schedule appointment|call doctor|contact provider|start telehealth|video call|dispatch|emergency help|access my records|pay|share my location)\b/.test(lower) && !/prepare|checklist|questions|options|notice/.test(lower)) {
    return "blocked_health_access_execution";
  }
  if (/emergency|urgent|911|ambulance/.test(lower)) return "emergency_boundary_notice";
  if (/telehealth|video/.test(lower)) return "telehealth_preparation_notes";
  if (/pharmacy|medicine|medication|prescription/.test(lower)) return "pharmacy_support_questions";
  if (/mobile clinic|clinic van/.test(lower)) return "mobile_clinic_access_checklist";
  if (/transport|ride|to care/.test(lower)) return "transportation_to_care_prep";
  if (/provider|doctor|clinic directory/.test(lower)) return "provider_directory_questions";
  return "health_access_options_checklist";
}

function safetyPosture() {
  return Object.freeze({
    canExecute: false,
    executionAuthority: "none",
    preparationOnly: true,
    noMedicalAdviceProvided: true,
    noDiagnosisAuthorized: true,
    noPrescriptionActionAuthorized: true,
    noAppointmentBooked: true,
    noProviderContactAuthorized: true,
    noTelehealthSessionStarted: true,
    noEmergencyDispatchAuthorized: true,
    noMedicalRecordAccessAuthorized: true,
    noPaymentAuthorized: true,
    noLocationSharingAuthorized: true,
    noBackendWritePerformed: true,
    noStorageWritePerformed: true
  });
}

function artifactBody(artifactType, input = {}) {
  const topic = text(input.topic || input.prompt, "health access");
  if (artifactType === "telehealth_preparation_notes") {
    return `Telehealth preparation notes for ${topic}: gather your questions, confirm the provider source, review privacy, and use only an approved telehealth connection when available. No video session was started.`;
  }
  if (artifactType === "pharmacy_support_questions") {
    return `Pharmacy support questions for ${topic}: ask about hours, accepted coverage, prescription requirements, refill process, and pharmacist review. No refill or prescription action was taken.`;
  }
  if (artifactType === "mobile_clinic_access_checklist") {
    return `Mobile clinic access checklist for ${topic}: verify date, location source, services offered, documents to bring, and whether appointment or walk-in rules apply. No clinic was contacted.`;
  }
  if (artifactType === "transportation_to_care_prep") {
    return `Transportation-to-care prep for ${topic}: compare safe travel options, timing, pickup requirements, and backup plan. No ride was booked and no location was shared.`;
  }
  if (artifactType === "provider_directory_questions") {
    return `Provider directory questions for ${topic}: verify provider name, service type, eligibility, contact channel, hours, and source freshness before you decide what to do next.`;
  }
  if (artifactType === "emergency_boundary_notice") {
    return "Emergency boundary notice: if this is an emergency, contact local emergency services immediately. Nexus cannot dispatch emergency help in this phase.";
  }
  return `Health access options checklist for ${topic}: identify the type of support needed, verify trusted sources, prepare questions, and choose the next manual step.`;
}

function auditMetadata(input = {}) {
  const artifactType = text(input.artifactType, "health_access_options_checklist");
  return Object.freeze({
    auditId: text(input.auditId, stableId("n100-health-access-audit", `${artifactType}:${input.prompt || ""}`)),
    auditEventType: "health_access_preparation_artifact_prepared",
    artifactType,
    createdAt: nowIso(input),
    redactedPayloadOnly: true,
    noExecutionAuthorized: true,
    noHealthActionAuthorized: true
  });
}

function blockedHealthAccessResponse(prompt = "") {
  const artifactType = "blocked_health_access_execution";
  return Object.freeze({
    schemaVersion: SCHEMA_VERSION,
    healthAccessArtifactId: stableId("n100-health-access-blocked", prompt),
    artifactType,
    status: "blocked_no_health_access_execution",
    reason: "Nexus can prepare health access questions and checklists, but it cannot diagnose, prescribe, refill, book, contact providers, start telehealth, dispatch emergency help, access records, process payments, or share location in this phase.",
    blockedActions: Object.freeze([...BLOCKED_REAL_WORLD_ACTIONS, ...BLOCKED_HEALTH_ACCESS_ACTIONS]),
    auditMetadata: auditMetadata({ artifactType, prompt }),
    safetyPosture: safetyPosture(),
    canExecute: false,
    executionAuthority: "none",
    noExecutionAuthorized: true,
    noBackendWritePerformed: true
  });
}

function createN100HealthAccessPreparationArtifact(input = {}) {
  const prompt = text(input.prompt, "Prepare health access options.");
  const artifactType = input.artifactType && SUPPORTED_HEALTH_ACCESS_ARTIFACTS.includes(input.artifactType)
    ? input.artifactType
    : classifyHealthAccessArtifact(prompt);
  if (!SUPPORTED_HEALTH_ACCESS_ARTIFACTS.includes(artifactType)) return blockedHealthAccessResponse(prompt);

  return Object.freeze({
    schemaVersion: SCHEMA_VERSION,
    healthAccessArtifactId: text(input.healthAccessArtifactId, stableId("n100-health-access", `${artifactType}:${prompt}`)),
    artifactType,
    status: "prepared_for_user_review",
    prompt,
    title: text(input.title, artifactType.replace(/_/g, " ")),
    body: artifactBody(artifactType, input),
    requiresUserReview: true,
    requiresApprovedProviderBeforeExecution: true,
    blockedActions: Object.freeze([...BLOCKED_REAL_WORLD_ACTIONS, ...BLOCKED_HEALTH_ACCESS_ACTIONS]),
    auditMetadata: auditMetadata({ artifactType, prompt, nowIso: input.nowIso }),
    safetyPosture: safetyPosture(),
    canExecute: false,
    executionAuthority: "none",
    noExecutionAuthorized: true,
    noBackendWritePerformed: true
  });
}

function isSafeN100HealthAccessPreparationArtifact(artifact) {
  if (!artifact || typeof artifact !== "object" || Array.isArray(artifact)) return false;
  if (artifact.schemaVersion !== SCHEMA_VERSION) return false;
  if (!artifact.healthAccessArtifactId || !artifact.artifactType || !artifact.status) return false;
  if (artifact.canExecute !== false || artifact.executionAuthority !== "none") return false;
  if (artifact.noExecutionAuthorized !== true || artifact.noBackendWritePerformed !== true) return false;
  if (!artifact.safetyPosture || artifact.safetyPosture.noDiagnosisAuthorized !== true || artifact.safetyPosture.noProviderContactAuthorized !== true) return false;
  if (artifact.safetyPosture.noEmergencyDispatchAuthorized !== true || artifact.safetyPosture.noLocationSharingAuthorized !== true) return false;
  const serialized = JSON.stringify(artifact);
  if (/(diagnosisResult|prescriptionOrder|refillRequest|bookAppointment|contactProvider|startTelehealth|dispatchEmergency|medicalRecordQuery|paymentIntent|shareLocation|executionAuthority":"provider")/.test(serialized)) return false;
  return Array.isArray(artifact.blockedActions) && BLOCKED_HEALTH_ACCESS_ACTIONS.every(action => artifact.blockedActions.includes(action));
}

module.exports = Object.freeze({
  SCHEMA_VERSION,
  SUPPORTED_HEALTH_ACCESS_ARTIFACTS,
  BLOCKED_HEALTH_ACCESS_ACTIONS,
  createN100HealthAccessPreparationArtifact,
  blockedHealthAccessResponse,
  isSafeN100HealthAccessPreparationArtifact
});
