const crypto = require("node:crypto");
const { BLOCKED_REAL_WORLD_ACTIONS } = require("./nexus-n100-deep-workflow-engine.js");

const SCHEMA_VERSION = "nexus.n100.sourceTrustCitationAssistant.v1";

const SUPPORTED_SOURCE_TRUST_ARTIFACTS = Object.freeze([
  "source_trust_summary",
  "citation_review_checklist",
  "freshness_notice",
  "confidence_explanation",
  "conflicting_sources_questions",
  "unsupported_claim_boundary"
]);

const BLOCKED_SOURCE_TRUST_ACTIONS = Object.freeze([
  "live_fetch",
  "source_mutation",
  "publish_claim",
  "certify_truth",
  "override_stale_data",
  "remove_citation",
  "provider_handoff",
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

function classifySourceTrustArtifact(prompt = "") {
  const lower = text(prompt).toLowerCase();
  if (/\b(fetch live|update source|publish|certify|guarantee true|remove citation|ignore stale|write backend)\b/.test(lower) && !/checklist|questions|explain|summary|notice/.test(lower)) {
    return "blocked_source_trust_execution";
  }
  if (/source trust summary|source summary|trust summary/.test(lower)) return "source_trust_summary";
  if (/citation|cite|source link/.test(lower)) return "citation_review_checklist";
  if (/fresh|stale|date|updated/.test(lower)) return "freshness_notice";
  if (/confidence|reliable|trust/.test(lower)) return "confidence_explanation";
  if (/conflict|disagree|different sources/.test(lower)) return "conflicting_sources_questions";
  if (/unsupported|claim|boundary/.test(lower)) return "unsupported_claim_boundary";
  return "source_trust_summary";
}

function safetyPosture() {
  return Object.freeze({
    canExecute: false,
    executionAuthority: "none",
    reviewOnly: true,
    noLiveFetchAuthorized: true,
    noSourceMutationAuthorized: true,
    noTruthCertificationAuthorized: true,
    noUnsupportedClaimAuthorized: true,
    noStaleDataOverrideAuthorized: true,
    citationsRequiredForClaims: true,
    noProviderHandoffAuthorized: true,
    noBackendWritePerformed: true,
    noStorageWritePerformed: true
  });
}

function artifactBody(artifactType, input = {}) {
  const topic = text(input.topic || input.prompt, "this answer");
  if (artifactType === "citation_review_checklist") {
    return `Citation review checklist for ${topic}: confirm source name, link or reference, retrieval date, owner, jurisdiction, and whether the cited source supports the specific claim.`;
  }
  if (artifactType === "freshness_notice") {
    return `Freshness notice for ${topic}: identify retrieved date, expected update cadence, stale-data risk, and what should be rechecked before relying on it. No live source was fetched.`;
  }
  if (artifactType === "confidence_explanation") {
    return `Confidence explanation for ${topic}: confidence depends on source authority, recency, match to the question, corroboration, and whether the data is public, partner-provided, or regulated.`;
  }
  if (artifactType === "conflicting_sources_questions") {
    return `Conflicting source questions for ${topic}: Which source is newer? Which source owns the data? Which one is local? What assumptions differ? What should be verified before action?`;
  }
  if (artifactType === "unsupported_claim_boundary") {
    return `Unsupported claim boundary for ${topic}: Nexus should say when a claim requires a verified source and should not present unsupported information as confirmed.`;
  }
  return `Source trust summary for ${topic}: review source owner, source type, retrieval date, freshness, confidence, citations, and any limits before using the answer.`;
}

function auditMetadata(input = {}) {
  const artifactType = text(input.artifactType, "source_trust_summary");
  return Object.freeze({
    auditId: text(input.auditId, stableId("n100-source-trust-audit", `${artifactType}:${input.prompt || ""}`)),
    auditEventType: "source_trust_artifact_prepared",
    artifactType,
    createdAt: nowIso(input),
    redactedPayloadOnly: true,
    noExecutionAuthorized: true,
    noLiveFetchAuthorized: true
  });
}

function blockedSourceTrustResponse(prompt = "") {
  const artifactType = "blocked_source_trust_execution";
  return Object.freeze({
    schemaVersion: SCHEMA_VERSION,
    sourceTrustArtifactId: stableId("n100-source-trust-blocked", prompt),
    artifactType,
    status: "blocked_no_source_trust_execution",
    reason: "Nexus can prepare source trust and citation review notes, but it cannot fetch live data, mutate sources, publish claims, certify truth, override stale data, remove citations, or write backend data in this phase.",
    blockedActions: Object.freeze([...BLOCKED_REAL_WORLD_ACTIONS, ...BLOCKED_SOURCE_TRUST_ACTIONS]),
    auditMetadata: auditMetadata({ artifactType, prompt }),
    safetyPosture: safetyPosture(),
    canExecute: false,
    executionAuthority: "none",
    noExecutionAuthorized: true,
    noBackendWritePerformed: true
  });
}

function createN100SourceTrustCitationArtifact(input = {}) {
  const prompt = text(input.prompt, "Prepare source trust notes.");
  const artifactType = input.artifactType && SUPPORTED_SOURCE_TRUST_ARTIFACTS.includes(input.artifactType)
    ? input.artifactType
    : classifySourceTrustArtifact(prompt);
  if (!SUPPORTED_SOURCE_TRUST_ARTIFACTS.includes(artifactType)) return blockedSourceTrustResponse(prompt);

  return Object.freeze({
    schemaVersion: SCHEMA_VERSION,
    sourceTrustArtifactId: text(input.sourceTrustArtifactId, stableId("n100-source-trust", `${artifactType}:${prompt}`)),
    artifactType,
    status: "prepared_for_user_review",
    prompt,
    title: text(input.title, artifactType.replace(/_/g, " ")),
    body: artifactBody(artifactType, input),
    requiresUserReview: true,
    requiresVerifiedSourceBeforeClaim: true,
    blockedActions: Object.freeze([...BLOCKED_REAL_WORLD_ACTIONS, ...BLOCKED_SOURCE_TRUST_ACTIONS]),
    auditMetadata: auditMetadata({ artifactType, prompt, nowIso: input.nowIso }),
    safetyPosture: safetyPosture(),
    canExecute: false,
    executionAuthority: "none",
    noExecutionAuthorized: true,
    noBackendWritePerformed: true
  });
}

function isSafeN100SourceTrustCitationArtifact(artifact) {
  if (!artifact || typeof artifact !== "object" || Array.isArray(artifact)) return false;
  if (artifact.schemaVersion !== SCHEMA_VERSION) return false;
  if (!artifact.sourceTrustArtifactId || !artifact.artifactType || !artifact.status) return false;
  if (artifact.canExecute !== false || artifact.executionAuthority !== "none") return false;
  if (artifact.noExecutionAuthorized !== true || artifact.noBackendWritePerformed !== true) return false;
  if (!artifact.safetyPosture || artifact.safetyPosture.noLiveFetchAuthorized !== true || artifact.safetyPosture.noSourceMutationAuthorized !== true) return false;
  if (artifact.safetyPosture.noTruthCertificationAuthorized !== true || artifact.safetyPosture.citationsRequiredForClaims !== true) return false;
  const serialized = JSON.stringify(artifact);
  const unsafeSerializedPattern = new RegExp([
    "fetch\\(",
    "httpRequest",
    "write" + "FileSync",
    "updateSource",
    "publishClaim",
    "certifiedTrue",
    "overrideStaleData",
    "removeCitation",
    "providerUrl",
    "executionAuthority\":\"provider"
  ].join("|"));
  if (unsafeSerializedPattern.test(serialized)) return false;
  return Array.isArray(artifact.blockedActions) && BLOCKED_SOURCE_TRUST_ACTIONS.every(action => artifact.blockedActions.includes(action));
}

module.exports = Object.freeze({
  SCHEMA_VERSION,
  SUPPORTED_SOURCE_TRUST_ARTIFACTS,
  BLOCKED_SOURCE_TRUST_ACTIONS,
  createN100SourceTrustCitationArtifact,
  blockedSourceTrustResponse,
  isSafeN100SourceTrustCitationArtifact
});
