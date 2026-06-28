(function initNexusAppointmentServicePreviewFlagGuard(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(require("./nexus-appointment-service-request-contract.js"));
    return;
  }

  root.NexusAppointmentServicePreviewFlagGuard = factory(root.NexusAppointmentServiceRequestContract);
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusAppointmentServicePreviewFlagGuard(contract) {
  "use strict";

  const APPOINTMENT_SERVICE_PREVIEW_FLAG = "NEXUS_APPOINTMENT_SERVICE_REQUEST_PREVIEW_ENABLED";
  const DEFAULT_APPOINTMENT_SERVICE_PREVIEW_ENABLED = false;
  const LOCAL_SAFE_CONTEXT = "local-safe-fixture";

  function isFlagEnabled(options) {
    return Boolean(options && (
      options.enableAppointmentServiceRequestPreview === true
      || options[APPOINTMENT_SERVICE_PREVIEW_FLAG] === true
    ));
  }

  function isLocalSafeContext(options) {
    return Boolean(options && (
      options.context === LOCAL_SAFE_CONTEXT
      || options.surface === LOCAL_SAFE_CONTEXT
    ));
  }

  function validateCandidate(candidate) {
    if (!candidate || typeof candidate !== "object") {
      return { ok: false, executionAllowed: false, failures: ["candidate missing"] };
    }
    if (candidate.request && candidate.validation) return candidate.validation;
    return contract.validateAppointmentServiceRequestIntent(candidate);
  }

  function isRestricted(candidate) {
    const request = candidate && candidate.request ? candidate.request : candidate;
    return request && request.riskTier === "restricted";
  }

  function resolveAppointmentServicePreviewFlag(options) {
    return Object.freeze({
      flagName: APPOINTMENT_SERVICE_PREVIEW_FLAG,
      defaultEnabled: DEFAULT_APPOINTMENT_SERVICE_PREVIEW_ENABLED,
      enabled: isFlagEnabled(options),
      standardUserEnabled: false,
      localSafeContext: isLocalSafeContext(options),
      executionAuthority: false
    });
  }

  function isAppointmentServicePreviewAllowed(candidate, options) {
    const flag = resolveAppointmentServicePreviewFlag(options);
    const validation = validateCandidate(candidate);
    const previewAllowed = Boolean(
      flag.enabled
      && flag.localSafeContext
      && validation.ok === true
      && validation.executionAllowed === false
      && !isRestricted(candidate)
    );

    return Object.freeze({
      previewAllowed,
      visibleRendererAllowed: previewAllowed,
      executionAllowed: false,
      executionAuthority: false,
      providerDispatchAllowed: false,
      bookingAllowed: false,
      providerHandoffAllowed: false,
      communicationAllowed: false,
      networkAllowed: false,
      storageWriteAllowed: false,
      backendWriteAllowed: false,
      flag
    });
  }

  return Object.freeze({
    APPOINTMENT_SERVICE_PREVIEW_FLAG,
    DEFAULT_APPOINTMENT_SERVICE_PREVIEW_ENABLED,
    LOCAL_SAFE_CONTEXT,
    resolveAppointmentServicePreviewFlag,
    isAppointmentServicePreviewAllowed
  });
});
