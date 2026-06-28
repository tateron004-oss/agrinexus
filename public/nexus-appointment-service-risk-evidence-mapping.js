(function initNexusAppointmentServiceRiskEvidenceMapping(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(require("./nexus-appointment-service-request-contract.js"));
    return;
  }

  root.NexusAppointmentServiceRiskEvidenceMapping = factory(root.NexusAppointmentServiceRequestContract);
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusAppointmentServiceRiskEvidenceMapping(contract) {
  "use strict";

  const RESTRICTED_TERMS = Object.freeze([
    "emergency",
    "dispatch",
    "medical",
    "diagnosis",
    "prescription",
    "pharmacy",
    "payment",
    "purchase",
    "marketplace",
    "location",
    "camera"
  ]);

  const HIGH_RISK_CATEGORIES = Object.freeze([
    "provider-consultation",
    "field-visit",
    "logistics-coordination",
    "health-service-caution-only"
  ]);

  function asText(value) {
    return typeof value === "string" ? value.toLowerCase() : "";
  }

  function includesTerm(value, terms) {
    const text = asText(value);
    return terms.some(term => text.includes(term));
  }

  function isAmbiguousProvider(request) {
    return asText(request.providerIdentityResolutionId).includes("ambiguous")
      || asText(request.providerDisplayName).includes("multiple possible")
      || request.serviceRequestType === "clarification-required";
  }

  function isAmbiguousTime(request) {
    return asText(request.requestedTimeWindow).includes("not yet clarified")
      || asText(request.userProvidedTimePreference).includes("not yet clarified");
  }

  function deriveAppointmentServiceRiskTier(request) {
    const fields = [
      request.requestedServiceCategory,
      request.serviceRequestType,
      request.requestDraft
    ];
    if (request.requestedServiceCategory === "emergency-service-blocked") return "restricted";
    if (fields.some(field => includesTerm(field, RESTRICTED_TERMS))) return "restricted";
    if (HIGH_RISK_CATEGORIES.includes(request.requestedServiceCategory)) return "high";
    if (isAmbiguousProvider(request) || isAmbiguousTime(request)) return "high";
    return "medium";
  }

  function describeProviderIdentityStatus(request) {
    return isAmbiguousProvider(request)
      ? "clarification required before provider identity can be trusted"
      : `visible provider identity required: ${request.providerDisplayName}`;
  }

  function describeTimingStatus(request) {
    return isAmbiguousTime(request)
      ? "clarification required before timing can be trusted"
      : `requested timing preserved for later availability review: ${request.requestedTimeWindow}`;
  }

  function buildAppointmentServiceEvidenceRequirement(request, riskTier) {
    const parts = [
      describeProviderIdentityStatus(request),
      describeTimingStatus(request),
      "visible user approval required",
      "provider confirmation required",
      "final execution gate required",
      "audit-ready state required",
      "source packet required before future action"
    ];

    if (riskTier === "restricted") {
      parts.push("restricted category cannot be executed by this lane");
    }
    if (isAmbiguousProvider(request) || isAmbiguousTime(request)) {
      parts.push("clarification required before any future request can proceed");
    }

    return parts.join("; ");
  }

  function mapAppointmentServiceRiskEvidence(input) {
    const riskTier = deriveAppointmentServiceRiskTier(input || {});
    const evidenceRequirement = buildAppointmentServiceEvidenceRequirement(input || {}, riskTier);
    const enriched = Object.assign({}, input, {
      riskTier,
      evidenceRequirement,
      sourcePacketRequirement: input && input.sourcePacketRequirement
        ? input.sourcePacketRequirement
        : "source packet required before future booking, dispatch, contact, or service request"
    });
    const created = contract.createAppointmentServiceRequestIntent(enriched);

    return Object.freeze({
      request: created.request,
      validation: created.validation,
      mapping: Object.freeze({
        riskTier,
        evidenceRequirement,
        providerIdentityStatus: describeProviderIdentityStatus(created.request),
        timingStatus: describeTimingStatus(created.request),
        clarificationRequired: isAmbiguousProvider(created.request) || isAmbiguousTime(created.request),
        executionAllowed: false,
        providerDispatchAllowed: false,
        bookingAllowed: false
      })
    });
  }

  return Object.freeze({
    RESTRICTED_TERMS,
    HIGH_RISK_CATEGORIES,
    deriveAppointmentServiceRiskTier,
    buildAppointmentServiceEvidenceRequirement,
    mapAppointmentServiceRiskEvidence
  });
});
