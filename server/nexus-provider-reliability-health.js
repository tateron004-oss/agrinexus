const registry = require("../public/nexus-live-provider-capability-registry.js");

const SAFE_RETRY_POLICY = Object.freeze({
  retryAllowed: false,
  automaticRetryAllowed: false,
  userVisibleRetryOnly: true,
  maxAutomaticRetries: 0,
  reason: "Provider retries must remain user-visible and cannot trigger hidden network loops or execution."
});

const SAFE_CACHE_POLICY = Object.freeze({
  enabled: false,
  mode: "no-cache",
  storesProviderPayloads: false,
  storesSecrets: false,
  storesSensitiveUserData: false,
  storesLocation: false,
  reason: "NAP8 does not cache provider payloads, secrets, sensitive user data, or location."
});

function text(value) {
  return String(value || "").trim();
}

function buildProviderHealthStatus(orchestrationResult = {}) {
  const providerId = text(orchestrationResult.selectedProvider || "none");
  const provider = providerId === "none" ? null : registry.getLiveProviderCapability(providerId);
  const reliability = orchestrationResult.reliability && typeof orchestrationResult.reliability === "object"
    ? orchestrationResult.reliability
    : {};
  const trustAssessment = orchestrationResult.trustAssessment && typeof orchestrationResult.trustAssessment === "object"
    ? orchestrationResult.trustAssessment
    : {};
  const status = text(orchestrationResult.providerStatus || (provider ? provider.providerStatus : "blocked_by_policy"));
  const staleResultWarning = trustAssessment.staleResultWarning === true
    || text(orchestrationResult.freshnessStatus) === "stale"
    || (Array.isArray(orchestrationResult.citations) && orchestrationResult.citations.some(citation => text(citation.freshnessStatus) === "stale"));
  const safeUnavailableState = reliability.safeUnavailableState === true
    || ["missing_config", "provider_error", "blocked_by_policy", "disabled"].includes(status)
    || orchestrationResult.allowed !== true;

  return Object.freeze({
    schemaVersion: "nexus.nap8.providerReliabilityHealth.v1",
    providerId,
    providerDisplayName: provider ? provider.displayName : "No provider selected",
    providerStatus: status || "unknown",
    domain: provider ? provider.domain : "none",
    providerTimedOut: reliability.providerTimedOut === true,
    providerErrorNormalized: reliability.providerErrorNormalized === true,
    safeUnavailableState,
    staleResultWarning,
    freshnessStatus: staleResultWarning ? "stale" : text(orchestrationResult.freshnessStatus || "unknown"),
    confidence: text(orchestrationResult.confidence || "low"),
    safeRetryPolicy: SAFE_RETRY_POLICY,
    cachePolicy: SAFE_CACHE_POLICY,
    rateLimitSafe: reliability.rateLimitSafe !== false,
    noSecretsLogged: true,
    noSecretsCached: true,
    noSensitiveUserDataCached: true,
    noProviderPayloadCached: true,
    noExecutionFallback: true,
    noProviderHandoffFallback: true,
    noLocationPermissionFallback: true,
    noBackendWriteFallback: true
  });
}

function isSafeProviderReliabilityHealth(health) {
  if (!health || typeof health !== "object" || Array.isArray(health)) return false;
  if (health.schemaVersion !== "nexus.nap8.providerReliabilityHealth.v1") return false;
  if (!health.providerId || !health.providerStatus) return false;
  if (!health.safeRetryPolicy || health.safeRetryPolicy.automaticRetryAllowed !== false || health.safeRetryPolicy.maxAutomaticRetries !== 0) return false;
  if (!health.cachePolicy || health.cachePolicy.enabled !== false || health.cachePolicy.storesSecrets !== false) return false;
  if (health.cachePolicy.storesSensitiveUserData !== false || health.cachePolicy.storesProviderPayloads !== false || health.cachePolicy.storesLocation !== false) return false;
  if (health.rateLimitSafe !== true) return false;
  if (health.noSecretsLogged !== true || health.noSecretsCached !== true || health.noSensitiveUserDataCached !== true) return false;
  if (health.noProviderPayloadCached !== true || health.noExecutionFallback !== true) return false;
  if (health.noProviderHandoffFallback !== true || health.noLocationPermissionFallback !== true || health.noBackendWriteFallback !== true) return false;
  return true;
}

module.exports = Object.freeze({
  SAFE_RETRY_POLICY,
  SAFE_CACHE_POLICY,
  buildProviderHealthStatus,
  isSafeProviderReliabilityHealth
});
