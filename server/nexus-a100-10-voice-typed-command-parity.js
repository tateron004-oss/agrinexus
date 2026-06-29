const crypto = require("node:crypto");

const SPRINT_ID = "A100-10";
const SPRINT_SLUG = "voice-typed-command-parity";
const SPRINT_TITLE = "Voice and Typed Command Parity";
const SCHEMA_VERSION = "nexus.a100.10.voice-typed-command-parity.v1";

const SUPPORTED_LANES = Object.freeze([
  "voice",
  "typed",
  "locale",
  "intent",
  "response"
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

function classifyA100Sprint10Lane(prompt = "") {
  const lower = text(prompt).toLowerCase();
  if (lower.includes("voice")) return "voice";
  if (lower.includes("typed")) return "typed";
  if (lower.includes("locale")) return "locale";
  if (lower.includes("intent")) return "intent";
  if (lower.includes("response")) return "response";
  return SUPPORTED_LANES[0];
}

function createA100Sprint10Artifact(input = {}) {
  const prompt = text(input.prompt, "Prepare Voice and Typed Command Parity.");
  const lane = SUPPORTED_LANES.includes(input.lane) ? input.lane : classifyA100Sprint10Lane(prompt);
  return Object.freeze({
    schemaVersion: SCHEMA_VERSION,
    sprintId: SPRINT_ID,
    sprintSlug: SPRINT_SLUG,
    sprintTitle: SPRINT_TITLE,
    artifactId: text(input.artifactId, stableId(`a100-10-voice-typed-command-parity`, `${lane}:${prompt}`)),
    artifactType: "voice_typed_command_parity_review_packet",
    lane,
    prompt,
    objective: "Defines equivalent safety treatment for voice-style and typed assistant prompts.",
    status: "prepared_for_review",
    userFacingSummary: `Voice and Typed Command Parity: Nexus can prepare a safe, review-only packet for ${lane}. It cannot execute real-world actions from this sprint.`,
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

function isSafeA100Sprint10Artifact(artifact) {
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
  createA100Sprint10Artifact,
  isSafeA100Sprint10Artifact
});
