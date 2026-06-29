const { BLOCKED_ACTIONS } = require("./nexus-autonomy-workflow-goal-classifier.js");

const ARTIFACT_TYPES = Object.freeze([
  "checklist",
  "comparison_table",
  "source_summary",
  "provider_questions",
  "application_prep_checklist",
  "message_draft_text_only",
  "email_draft_text_only",
  "call_script_text_only",
  "training_plan",
  "farm_issue_observation_checklist",
  "weather_planning_note",
  "marketplace_browse_comparison",
  "shipment_status_summary"
]);

const ARTIFACT_TEMPLATES = Object.freeze({
  checklist: {
    title: "Safe workflow checklist",
    content: [
      "Review the goal and available source information.",
      "Confirm missing details manually.",
      "Choose the next step yourself; Nexus does not execute it."
    ]
  },
  comparison_table: {
    title: "Read-only comparison table",
    content: [
      ["Item", "Fit", "Evidence", "Manual next step"],
      ["Option 1", "review", "source-backed preview", "compare details manually"],
      ["Option 2", "review", "source-backed preview", "prepare questions manually"]
    ]
  },
  source_summary: {
    title: "Source-backed summary",
    content: "Summary prepared from read-only source references. No provider was contacted."
  },
  provider_questions: {
    title: "Questions to ask manually",
    content: [
      "What details should I confirm before making a decision?",
      "What documents, timing, cost, or eligibility information should I review?",
      "Who should I contact manually if I choose to continue?"
    ]
  },
  application_prep_checklist: {
    title: "Application prep checklist",
    content: [
      "Review eligibility and required documents.",
      "Prepare resume, identification, and work history notes.",
      "Submit only through the official process yourself."
    ]
  },
  message_draft_text_only: {
    title: "Manual message draft",
    content: "Draft message text for the user to copy manually. Nexus did not send this message."
  },
  email_draft_text_only: {
    title: "Manual email draft",
    content: "Draft email text for the user to copy manually. Nexus did not send this email."
  },
  call_script_text_only: {
    title: "Manual call script",
    content: [
      "Hello, I am calling to ask about the information I reviewed.",
      "Can you confirm the current requirements, timing, and next steps?",
      "Nexus prepared this script only; Nexus did not place a call."
    ]
  },
  training_plan: {
    title: "Training plan",
    content: [
      "Start with introductory learning resources.",
      "Compare format, language, schedule, and cost disclosure.",
      "Prepare questions before enrolling manually."
    ]
  },
  farm_issue_observation_checklist: {
    title: "Farm issue observation checklist",
    content: [
      "Record crop, growth stage, symptoms, and timing.",
      "Note weather and field conditions from your own observation.",
      "Ask a qualified local expert before treatment decisions."
    ]
  },
  weather_planning_note: {
    title: "Weather planning note",
    content: "Weather context is informational planning support only. Nexus did not request location permission, route, dispatch, or reschedule anything."
  },
  marketplace_browse_comparison: {
    title: "Marketplace browse comparison",
    content: [
      ["Listing", "Visible details", "Questions to review"],
      ["Option 1", "browse-only information", "confirm manually"],
      ["Option 2", "browse-only information", "compare manually"]
    ]
  },
  shipment_status_summary: {
    title: "Shipment status summary",
    content: "Read-only shipment status summary based on explicit reference text. Nexus did not log in, dispatch, route, or contact a provider."
  }
});

function normalizeArtifactType(type) {
  const normalized = String(type || "").trim().toLowerCase();
  if (normalized === "manual_message_draft" || normalized === "draft_text") return "message_draft_text_only";
  if (normalized === "manual_email_draft") return "email_draft_text_only";
  if (normalized === "call_script") return "call_script_text_only";
  if (normalized === "decision_checklist" || normalized === "enrollment_prep_checklist") return "checklist";
  return ARTIFACT_TYPES.includes(normalized) ? normalized : "checklist";
}

function normalizeSourceRefs(sourceRefs) {
  if (!Array.isArray(sourceRefs)) return Object.freeze([]);
  return Object.freeze(sourceRefs
    .filter(ref => ref && typeof ref === "object")
    .map((ref, index) => Object.freeze({
      sourceId: String(ref.sourceId || `source-${index + 1}`),
      title: String(ref.title || "Source reference"),
      sourceType: String(ref.sourceType || "read-only-source"),
      url: ref.url ? String(ref.url) : "",
      freshness: String(ref.freshness || "unknown")
    })));
}

function stableArtifactId(workflowId, artifactType, index = 0) {
  const safeWorkflowId = String(workflowId || "aut-workflow");
  return `aut-artifact-${safeWorkflowId.replace(/[^a-z0-9-]/gi, "-").slice(0, 48)}-${artifactType}-${index + 1}`;
}

function safetyPostureFor(artifactType) {
  return Object.freeze({
    readOnly: true,
    previewOnly: true,
    textOnlyDraft: artifactType.endsWith("_text_only") || artifactType === "call_script_text_only",
    executionAuthority: false,
    providerHandoff: false,
    navigationAuthority: false,
    permissionRequestAuthority: false,
    storageAuthority: false,
    dataReadOnly: true
  });
}

function createAutonomyWorkflowArtifact(input = {}) {
  const artifactType = normalizeArtifactType(input.artifactType || input.type);
  const template = ARTIFACT_TEMPLATES[artifactType] || ARTIFACT_TEMPLATES.checklist;
  const createdFromWorkflowId = String(input.createdFromWorkflowId || input.workflowId || "aut-workflow");
  const index = Number.isInteger(input.index) ? input.index : 0;

  return Object.freeze({
    artifactId: stableArtifactId(createdFromWorkflowId, artifactType, index),
    artifactType,
    title: String(input.title || template.title),
    content: input.content === undefined ? template.content : input.content,
    sourceRefs: normalizeSourceRefs(input.sourceRefs),
    createdFromWorkflowId,
    safetyPosture: safetyPostureFor(artifactType),
    blockedActions: Object.freeze([...(Array.isArray(input.blockedActions) ? input.blockedActions : BLOCKED_ACTIONS)]),
    noExecutionAuthorized: true,
    noProviderContactAuthorized: true,
    noLocationPermissionRequested: true,
    noBackendActionWritePerformed: true,
    dataAttributes: Object.freeze({
      "data-read-only": "true",
      "data-execution-authority": "false",
      "data-provider-handoff": "false"
    })
  });
}

function createAutonomyWorkflowArtifacts(planOrState, sourceRefs = []) {
  const artifactTypes = Array.isArray(planOrState && planOrState.artifactsToPrepare)
    ? planOrState.artifactsToPrepare
    : Array.isArray(planOrState && planOrState.pendingSafeArtifacts)
      ? planOrState.pendingSafeArtifacts
      : ["checklist"];
  const workflowId = planOrState && (planOrState.workflowId || planOrState.activeWorkflowId);

  return Object.freeze(artifactTypes.map((artifactType, index) => createAutonomyWorkflowArtifact({
    artifactType,
    createdFromWorkflowId: workflowId,
    sourceRefs,
    index,
    blockedActions: planOrState && planOrState.blockedActions
  })));
}

function isSafeAutonomyWorkflowArtifact(artifact) {
  return Boolean(
    artifact &&
    typeof artifact.artifactId === "string" &&
    ARTIFACT_TYPES.includes(artifact.artifactType) &&
    typeof artifact.title === "string" &&
    artifact.sourceRefs &&
    Array.isArray(artifact.sourceRefs) &&
    artifact.safetyPosture &&
    artifact.safetyPosture.readOnly === true &&
    artifact.safetyPosture.executionAuthority === false &&
    artifact.safetyPosture.providerHandoff === false &&
    Array.isArray(artifact.blockedActions) &&
    artifact.noExecutionAuthorized === true &&
    artifact.noProviderContactAuthorized === true &&
    artifact.noLocationPermissionRequested === true &&
    artifact.noBackendActionWritePerformed === true &&
    artifact.dataAttributes &&
    artifact.dataAttributes["data-read-only"] === "true" &&
    artifact.dataAttributes["data-execution-authority"] === "false" &&
    artifact.dataAttributes["data-provider-handoff"] === "false"
  );
}

module.exports = Object.freeze({
  ARTIFACT_TYPES,
  createAutonomyWorkflowArtifact,
  createAutonomyWorkflowArtifacts,
  isSafeAutonomyWorkflowArtifact
});
