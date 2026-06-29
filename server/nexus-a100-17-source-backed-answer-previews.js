const crypto = require("node:crypto");

const SPRINT_ID = "A100-17";
const SPRINT_SLUG = "source-backed-answer-previews";
const SPRINT_TITLE = "Source-Backed Answer Previews";
const SCHEMA_VERSION = "nexus.a100.17.source-backed-answer-previews.v1";

const SUPPORTED_LANES = Object.freeze([
  "source",
  "citation",
  "freshness",
  "confidence",
  "claim"
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

function classifyA100Sprint17Lane(prompt = "") {
  const lower = text(prompt).toLowerCase();
  if (lower.includes("source")) return "source";
  if (lower.includes("citation")) return "citation";
  if (lower.includes("freshness")) return "freshness";
  if (lower.includes("confidence")) return "confidence";
  if (lower.includes("claim")) return "claim";
  return SUPPORTED_LANES[0];
}

function createA100Sprint17Artifact(input = {}) {
  const prompt = text(input.prompt, "Prepare Source-Backed Answer Previews.");
  const lane = SUPPORTED_LANES.includes(input.lane) ? input.lane : classifyA100Sprint17Lane(prompt);
  return Object.freeze({
    schemaVersion: SCHEMA_VERSION,
    sprintId: SPRINT_ID,
    sprintSlug: SPRINT_SLUG,
    sprintTitle: SPRINT_TITLE,
    artifactId: text(input.artifactId, stableId(`a100-17-source-backed-answer-previews`, `${lane}:${prompt}`)),
    artifactType: "source_backed_answer_previews_review_packet",
    lane,
    prompt,
    objective: "Creates source-aware answer preview packets without live fetch or unsupported claims.",
    status: "prepared_for_review",
    userFacingSummary: `Source-Backed Answer Previews: Nexus can prepare a safe, review-only packet for ${lane}. It cannot execute real-world actions from this sprint.`,
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

function isSafeA100Sprint17Artifact(artifact) {
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
  createA100Sprint17Artifact,
  isSafeA100Sprint17Artifact
});
