const crypto = require("node:crypto");
const { BLOCKED_REAL_WORLD_ACTIONS } = require("./nexus-n100-deep-workflow-engine.js");
const {
  createN100PermissionRequest,
  isSafeN100PermissionState
} = require("./nexus-n100-permission-consent-manager.js");

const SCHEMA_VERSION = "nexus.n100.calendarReminderAssistant.v1";

const SUPPORTED_SCHEDULE_ARTIFACTS = Object.freeze([
  "schedule_suggestion",
  "study_plan",
  "work_plan",
  "calendar_event_draft",
  "appointment_checklist",
  "local_reminder_task"
]);

const PERMISSION_REQUIRED_ARTIFACTS = Object.freeze([
  "calendar_event_draft",
  "local_reminder_task"
]);

const BLOCKED_SCHEDULING_ACTIONS = Object.freeze([
  "external_provider_booking",
  "send_invite",
  "contact_provider",
  "schedule_without_confirmation",
  "share_calendar_externally",
  "dispatch",
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

function classifyArtifact(prompt = "") {
  const lower = text(prompt).toLowerCase();
  if (/send.*invite|invite.*(employer|provider|person|them)/.test(lower)) return "blocked_booking_request";
  if (/book|schedule.*appointment|make.*appointment/.test(lower) && !/checklist|draft|prepare/.test(lower)) return "blocked_booking_request";
  if (/calendar|event/.test(lower)) return "calendar_event_draft";
  if (/remind|task|follow up/.test(lower)) return "local_reminder_task";
  if (/study|learn|training/.test(lower)) return "study_plan";
  if (/work|job|apply/.test(lower)) return "work_plan";
  if (/appointment/.test(lower)) return "appointment_checklist";
  return "schedule_suggestion";
}

function safetyPosture() {
  return Object.freeze({
    canExecute: false,
    executionAuthority: "none",
    preparationOnly: true,
    noExternalBookingAuthorized: true,
    noInviteSendAuthorized: true,
    noProviderContactAuthorized: true,
    noCalendarWritePerformed: true,
    noBackendWritePerformed: true,
    noStorageWritePerformed: true,
    noExternalNavigationAuthorized: true
  });
}

function auditMetadata(input = {}) {
  const artifactType = text(input.artifactType, "schedule_suggestion");
  return Object.freeze({
    auditId: text(input.auditId, stableId("n100-schedule-audit", `${artifactType}:${input.prompt || ""}`)),
    auditEventType: "schedule_artifact_prepared",
    artifactType,
    permissionStatus: text(input.permissionStatus, "not_required"),
    createdAt: nowIso(input),
    redactedPayloadOnly: true,
    noExecutionAuthorized: true,
    noProviderContactAuthorized: true
  });
}

function artifactBody(artifactType, input = {}) {
  const topic = text(input.topic || input.prompt, "this task");
  if (artifactType === "study_plan") {
    return [
      `Study plan for ${topic}:`,
      "1. Review the basics and key terms.",
      "2. Watch or read one source-backed lesson.",
      "3. Practice with a short checklist.",
      "4. Write down questions for a trainer or mentor.",
      "5. Review progress and adjust the next session."
    ].join("\n");
  }
  if (artifactType === "work_plan") {
    return [
      `Work plan for ${topic}:`,
      "1. Gather role requirements.",
      "2. List matching skills.",
      "3. Prepare questions for the employer or program.",
      "4. Draft application notes manually.",
      "5. Review before taking any external action."
    ].join("\n");
  }
  if (artifactType === "calendar_event_draft") {
    return `Calendar event draft for ${topic}: title, date/time to confirm, preparation notes, and reminder preference. No event was created.`;
  }
  if (artifactType === "appointment_checklist") {
    return `Appointment preparation checklist for ${topic}: confirm the provider, write questions, gather documents, review costs, and decide whether to proceed. No appointment was booked.`;
  }
  if (artifactType === "local_reminder_task") {
    return `Reminder/task draft: follow up on ${topic}. Confirm timing before creating any local reminder.`;
  }
  return `Schedule suggestion for ${topic}: choose a time block, define the next step, and confirm before creating any calendar or reminder item.`;
}

function blockedSchedulingResponse(prompt = "") {
  const artifactType = "blocked_booking_request";
  return Object.freeze({
    schemaVersion: SCHEMA_VERSION,
    artifactId: stableId("n100-schedule-blocked", prompt),
    artifactType,
    status: "blocked_no_booking",
    reason: "Nexus can prepare scheduling suggestions, checklists, or drafts, but it cannot book appointments, send invites, or contact providers in this phase.",
    blockedActions: Object.freeze([...BLOCKED_REAL_WORLD_ACTIONS, ...BLOCKED_SCHEDULING_ACTIONS]),
    auditMetadata: auditMetadata({ artifactType, prompt }),
    safetyPosture: safetyPosture(),
    canExecute: false,
    executionAuthority: "none",
    noExecutionAuthorized: true,
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true
  });
}

function createN100ScheduleArtifact(input = {}) {
  const prompt = text(input.prompt, "Prepare a schedule suggestion.");
  const artifactType = input.artifactType && SUPPORTED_SCHEDULE_ARTIFACTS.includes(input.artifactType)
    ? input.artifactType
    : classifyArtifact(prompt);
  if (!SUPPORTED_SCHEDULE_ARTIFACTS.includes(artifactType)) return blockedSchedulingResponse(prompt);

  const requiresPermission = PERMISSION_REQUIRED_ARTIFACTS.includes(artifactType);
  const permissionState = input.permissionState;
  const permissionSatisfied = !requiresPermission
    || (isSafeN100PermissionState(permissionState) && permissionState.status === "granted" && ["calendar", "notifications_reminders"].includes(permissionState.capability));
  const permissionRequest = requiresPermission && !permissionSatisfied
    ? createN100PermissionRequest({
      capability: artifactType === "calendar_event_draft" ? "calendar" : "notifications_reminders",
      reason: `Nexus needs permission before preparing ${artifactType.replace(/_/g, " ")}.`,
      nowIso: input.nowIso
    })
    : null;

  return Object.freeze({
    schemaVersion: SCHEMA_VERSION,
    artifactId: text(input.artifactId, stableId("n100-schedule", `${artifactType}:${prompt}`)),
    artifactType,
    status: permissionSatisfied ? "prepared_for_user_review" : "waiting_for_permission",
    prompt,
    title: text(input.title, artifactType.replace(/_/g, " ")),
    body: artifactBody(artifactType, input),
    requiresPermission,
    permissionSatisfied,
    permissionRequest,
    requiresConfirmationBeforeWrite: true,
    cancelAvailable: true,
    blockedActions: Object.freeze([...BLOCKED_REAL_WORLD_ACTIONS, ...BLOCKED_SCHEDULING_ACTIONS]),
    auditMetadata: auditMetadata({
      artifactType,
      prompt,
      permissionStatus: permissionSatisfied ? "satisfied_or_not_required" : "required",
      nowIso: input.nowIso
    }),
    safetyPosture: safetyPosture(),
    canExecute: false,
    executionAuthority: "none",
    noExecutionAuthorized: true,
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true
  });
}

function isSafeN100ScheduleArtifact(artifact) {
  if (!artifact || typeof artifact !== "object" || Array.isArray(artifact)) return false;
  if (artifact.schemaVersion !== SCHEMA_VERSION) return false;
  if (!artifact.artifactId || !artifact.artifactType || !artifact.status) return false;
  if (artifact.canExecute !== false || artifact.executionAuthority !== "none") return false;
  if (artifact.noExecutionAuthorized !== true || artifact.noProviderContactAuthorized !== true || artifact.noBackendWritePerformed !== true) return false;
  if (!artifact.safetyPosture || artifact.safetyPosture.noExternalBookingAuthorized !== true || artifact.safetyPosture.noCalendarWritePerformed !== true) return false;
  const serialized = JSON.stringify(artifact);
  if (/(sendInvite|calendar\.events\.insert|phoneNumberToDial|telUrl|paymentIntent|providerUrl|deepLink|executionAuthority":"provider")/.test(serialized)) return false;
  return Array.isArray(artifact.blockedActions) && BLOCKED_SCHEDULING_ACTIONS.every(action => artifact.blockedActions.includes(action));
}

module.exports = Object.freeze({
  SCHEMA_VERSION,
  SUPPORTED_SCHEDULE_ARTIFACTS,
  PERMISSION_REQUIRED_ARTIFACTS,
  BLOCKED_SCHEDULING_ACTIONS,
  createN100ScheduleArtifact,
  blockedSchedulingResponse,
  isSafeN100ScheduleArtifact
});
