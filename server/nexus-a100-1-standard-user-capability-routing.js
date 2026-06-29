const crypto = require("node:crypto");

const SPRINT_ID = "A100-1";
const SPRINT_SLUG = "standard-user-capability-routing";
const SPRINT_TITLE = "Standard User Capability Routing";
const SCHEMA_VERSION = "nexus.a100.1.standard-user-capability-routing.v1";

const SUPPORTED_LANES = Object.freeze([
  "agriculture",
  "learning",
  "workforce",
  "marketplace",
  "maps"
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

function classifyA100Sprint1Lane(prompt = "") {
  const lower = text(prompt).toLowerCase();
  if (lower.includes("agriculture")) return "agriculture";
  if (lower.includes("learning")) return "learning";
  if (lower.includes("workforce")) return "workforce";
  if (lower.includes("marketplace")) return "marketplace";
  if (lower.includes("maps")) return "maps";
  return SUPPORTED_LANES[0];
}

function createA100Sprint1Artifact(input = {}) {
  const prompt = text(input.prompt, "Prepare Standard User Capability Routing.");
  const lane = SUPPORTED_LANES.includes(input.lane) ? input.lane : classifyA100Sprint1Lane(prompt);
  return Object.freeze({
    schemaVersion: SCHEMA_VERSION,
    sprintId: SPRINT_ID,
    sprintSlug: SPRINT_SLUG,
    sprintTitle: SPRINT_TITLE,
    artifactId: text(input.artifactId, stableId(`a100-1-standard-user-capability-routing`, `${lane}:${prompt}`)),
    artifactType: "standard_user_capability_routing_review_packet",
    lane,
    prompt,
    objective: "Routes standard-user prompts into safe capability lanes before any execution path.",
    status: "prepared_for_review",
    userFacingSummary: `Standard User Capability Routing: Nexus can prepare a safe, review-only packet for ${lane}. It cannot execute real-world actions from this sprint.`,
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

function isSafeA100Sprint1Artifact(artifact) {
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
  createA100Sprint1Artifact,
  isSafeA100Sprint1Artifact
});
