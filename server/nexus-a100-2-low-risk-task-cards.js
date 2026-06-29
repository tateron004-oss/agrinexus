const crypto = require("node:crypto");

const SPRINT_ID = "A100-2";
const SPRINT_SLUG = "low-risk-task-cards";
const SPRINT_TITLE = "Low-Risk Task Cards";
const SCHEMA_VERSION = "nexus.a100.2.low-risk-task-cards.v1";

const SUPPORTED_LANES = Object.freeze([
  "explain",
  "summarize",
  "compare",
  "prepare",
  "checklist"
]);
const BLOCKED_A100_ACTIONS = Object.freeze([
  "automatic_call",
  "automatic_message",
  "payment_execution",
  "purchase_execution",
  "emergency_dispatch",
  "provider_handoff",
  "location_tracking",
  "browser_permission_prompt",
  "camera_start",
  "microphone_start",
  "backend_mutation",
  "secret_exposure"
]);

function text(value, fallback = "") {
  const normalized = String(value || "").trim().replace(/\s+/g, " ");
  return normalized || fallback;
}

function stableId(prefix, value) {
  return `${prefix}-${crypto.createHash("sha256").update(String(value || "")).digest("hex").slice(0, 12)}`;
}

function classifyA100Sprint2Lane(prompt = "") {
  const lower = text(prompt).toLowerCase();
  if (lower.includes("explain")) return "explain";
  if (lower.includes("summarize")) return "summarize";
  if (lower.includes("compare")) return "compare";
  if (lower.includes("prepare")) return "prepare";
  if (lower.includes("checklist")) return "checklist";
  return SUPPORTED_LANES[0];
}

function createA100Sprint2Artifact(input = {}) {
  const prompt = text(input.prompt, "Prepare Low-Risk Task Cards.");
  const lane = SUPPORTED_LANES.includes(input.lane) ? input.lane : classifyA100Sprint2Lane(prompt);
  return Object.freeze({
    schemaVersion: SCHEMA_VERSION,
    sprintId: SPRINT_ID,
    sprintSlug: SPRINT_SLUG,
    sprintTitle: SPRINT_TITLE,
    artifactId: text(input.artifactId, stableId(`a100-2-low-risk-task-cards`, `${lane}:${prompt}`)),
    artifactType: "low_risk_task_cards_review_packet",
    lane,
    prompt,
    objective: "Prepares review-only low-risk task cards with explicit blocked execution metadata.",
    status: "prepared_for_review",
    userFacingSummary: `Low-Risk Task Cards: Nexus can prepare a safe, review-only packet for ${lane}. It cannot execute real-world actions from this sprint.`,
    reviewChecklist: Object.freeze([
      "Confirm the user's intent and context.",
      "Show what is available now versus provider-dependent.",
      "Keep high-risk actions blocked until explicit review and readiness gates pass.",
      "Use public/browser-safe configuration only.",
      "Preserve Standard User safety boundaries."
    ]),
    blockedActions: BLOCKED_A100_ACTIONS,
    safetyPosture: Object.freeze({
      reviewOnly: true,
      canExecute: false,
      executionAuthority: "none",
      requiresUserReview: true,
      requiresProviderReadinessForHandoff: true,
      noSecretsExposed: true,
      noBrowserPermissionPrompt: true,
      noAutomaticExternalAction: true,
      noBackendMutation: true
    }),
    auditMetadata: Object.freeze({
      auditEventType: "a100_review_packet_prepared",
      sprintId: SPRINT_ID,
      redactedPayloadOnly: true,
      noExecutionAuthorized: true
    })
  });
}

function isSafeA100Sprint2Artifact(artifact) {
  if (!artifact || typeof artifact !== "object" || Array.isArray(artifact)) return false;
  if (artifact.schemaVersion !== SCHEMA_VERSION || artifact.sprintId !== SPRINT_ID) return false;
  if (artifact.status !== "prepared_for_review") return false;
  if (artifact.safetyPosture?.canExecute !== false || artifact.safetyPosture?.executionAuthority !== "none") return false;
  if (artifact.safetyPosture?.reviewOnly !== true || artifact.safetyPosture?.requiresUserReview !== true) return false;
  if (artifact.safetyPosture?.noSecretsExposed !== true || artifact.safetyPosture?.noBrowserPermissionPrompt !== true) return false;
  if (artifact.safetyPosture?.noAutomaticExternalAction !== true || artifact.safetyPosture?.noBackendMutation !== true) return false;
  for (const blocked of BLOCKED_A100_ACTIONS) {
    if (!artifact.blockedActions.includes(blocked)) return false;
  }
  return true;
}

module.exports = Object.freeze({
  SPRINT_ID,
  SPRINT_SLUG,
  SPRINT_TITLE,
  SUPPORTED_LANES,
  BLOCKED_A100_ACTIONS,
  createA100Sprint2Artifact,
  isSafeA100Sprint2Artifact
});
