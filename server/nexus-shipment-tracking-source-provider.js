const {
  normalizeSourceResult,
  buildProviderUnavailableResult,
  getConfiguredProviderMode,
  redactSensitiveProviderInput
} = require("../public/nexus-live-source-result-contract.js");

const SHIPMENT_PROVIDER_NAME = "shipment-tracking";
const SHIPMENT_PROVIDER_CANDIDATES = Object.freeze([
  "AfterShip",
  "EasyPost",
  "Shippo",
  "DHL carrier adapter",
  "FedEx carrier adapter",
  "UPS carrier adapter",
  "postal/local carrier adapter"
]);

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function normalizeCarrierText(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function hasTrackingNumber(value) {
  const text = String(value || "");
  return /\b[A-Z]{2,}[- ]?\d{4,}\b/i.test(text) || /\b\d{8,}\b/.test(text);
}

function redactShipmentTrackingReference(value) {
  return redactSensitiveProviderInput(String(value || ""))
    .replace(/\b[A-Z]{2,}[- ]?\d{4,}\b/gi, "[redacted-tracking]")
    .replace(/\b\d{8,}\b/g, "[redacted-tracking]");
}

function buildShipmentTrackingQuery(request = {}) {
  const trackingInput = String(request.trackingNumber || request.query || "").trim();
  const carrierHint = normalizeCarrierText(request.carrierHint);
  return Object.freeze({
    requestType: "shipment-tracking",
    trackingNumberPresent: hasTrackingNumber(trackingInput),
    redactedTrackingReference: trackingInput ? redactShipmentTrackingReference(trackingInput) : "",
    carrierHint,
    providerCandidates: SHIPMENT_PROVIDER_CANDIDATES,
    canChangeDelivery: false,
    canContactCarrier: false,
    readOnly: true,
    noExecutionRequired: true,
    executionAuthority: false
  });
}

function resolveShipmentTrackingProviderConfig(env = process.env) {
  const providerMode = getConfiguredProviderMode(SHIPMENT_PROVIDER_NAME, env);
  return Object.freeze({
    providerName: SHIPMENT_PROVIDER_NAME,
    providerMode,
    liveSourceEnabled: env.NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED === "true",
    shipmentProviderEnabled: env.NEXUS_SHIPMENT_TRACKING_PROVIDER_ENABLED === "true",
    hasProviderKey: hasText(env.NEXUS_SHIPMENT_TRACKING_PROVIDER_API_KEY),
    providerCandidates: SHIPMENT_PROVIDER_CANDIDATES
  });
}

function buildMockShipmentTrackingResult(request = {}) {
  const query = buildShipmentTrackingQuery(request);
  return normalizeSourceResult({
    sourceResultId: "shipment-tracking-mock-in-transit",
    requestType: "shipment-tracking",
    providerName: SHIPMENT_PROVIDER_NAME,
    providerMode: "mock",
    sourceName: "Mock Shipment Tracking Provider",
    sourceCategory: "shipment-tracking",
    sourceUrl: "provider:mock-shipment-tracking",
    query: `tracking ${query.redactedTrackingReference || "[redacted-tracking]"}`,
    resultSummary: "Mock shipment status: in transit. This does not change delivery instructions or contact the carrier.",
    rawResultAvailable: false,
    freshnessStatus: "recent",
    confidenceLevel: "medium",
    limitationNotes: "Mock shipment result; no live carrier lookup or shipment change occurred.",
    evidenceStatus: "mock-backed",
    sourceStatus: "source-result-available"
  });
}

function buildShipmentProviderUnavailableResult(reason) {
  return buildProviderUnavailableResult("shipment-tracking", reason || "shipment tracking provider flags or credentials are missing");
}

function getShipmentTrackingSourceResult(request = {}, env = process.env) {
  const query = buildShipmentTrackingQuery(request);
  if (!query.trackingNumberPresent) {
    return normalizeSourceResult({
      sourceResultId: "shipment-tracking-number-required",
      requestType: "shipment-tracking",
      providerName: SHIPMENT_PROVIDER_NAME,
      providerMode: "fixture",
      sourceName: "Shipment Tracking Provider Required",
      sourceCategory: "shipment-tracking",
      sourceUrl: "provider-required",
      query: "shipment tracking number missing",
      resultSummary: "What tracking number should I check?",
      rawResultAvailable: false,
      freshnessStatus: "unavailable",
      confidenceLevel: "low",
      limitationNotes: "Shipment tracking requires a tracking number. Nexus will redact it and will not change delivery instructions.",
      evidenceStatus: "source-unavailable",
      sourceStatus: "provider-required"
    });
  }

  const config = resolveShipmentTrackingProviderConfig(env);
  if (config.providerMode === "fixture") {
    return buildShipmentProviderUnavailableResult("live shipment tracking retrieval is disabled or not configured");
  }

  if (config.providerMode === "mock") {
    return buildMockShipmentTrackingResult(request);
  }

  return normalizeSourceResult({
    sourceResultId: "shipment-tracking-live-query-ready",
    requestType: "shipment-tracking",
    providerName: SHIPMENT_PROVIDER_NAME,
    providerMode: "live",
    sourceName: "Configured Shipment Tracking Provider",
    sourceCategory: "shipment-tracking",
    sourceUrl: "provider:shipment-tracking",
    query: `tracking ${query.redactedTrackingReference || "[redacted-tracking]"}`,
    resultSummary: "Shipment tracking provider is configured for a future read-only live query. No network request is made in this readiness phase.",
    rawResultAvailable: false,
    freshnessStatus: "unavailable",
    confidenceLevel: "medium",
    limitationNotes: "Live tracking config is present, but this readiness module does not contact carriers or change shipments.",
    evidenceStatus: "source-unavailable",
    sourceStatus: "source-query-ready"
  });
}

module.exports = Object.freeze({
  SHIPMENT_PROVIDER_NAME,
  SHIPMENT_PROVIDER_CANDIDATES,
  buildShipmentTrackingQuery,
  redactShipmentTrackingReference,
  resolveShipmentTrackingProviderConfig,
  buildMockShipmentTrackingResult,
  buildShipmentProviderUnavailableResult,
  getShipmentTrackingSourceResult
});
