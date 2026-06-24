(function nexusLowRiskInertRendererFlagFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusLowRiskInertRendererFlag = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusLowRiskInertRendererFlagModule() {
  const NEXUS_LOW_RISK_INERT_RENDERER_ENABLED = false;

  const FLAG_NAME = "NEXUS_LOW_RISK_INERT_RENDERER_ENABLED";
  const SOURCE = "nexus-low-risk-inert-renderer-flag.v1";

  function explicitTrue(value) {
    return value === true || value === "true" || value === "1";
  }

  function getNexusLowRiskInertRendererFlag(context = {}) {
    const requested = explicitTrue(context[FLAG_NAME]) || explicitTrue(context.enabled);
    const localSafe = explicitTrue(context.localSafe) || explicitTrue(context.testOnly);
    const enabled = NEXUS_LOW_RISK_INERT_RENDERER_ENABLED === true
      ? false
      : Boolean(requested && localSafe);

    return Object.freeze({
      flagName: FLAG_NAME,
      defaultEnabled: NEXUS_LOW_RISK_INERT_RENDERER_ENABLED,
      enabled,
      disabledByDefault: true,
      lowRiskOnly: true,
      executionAuthority: "none",
      renderingAuthority: "none",
      providerHandoffAuthority: "none",
      browserPermissionAuthority: "none",
      navigationAuthority: "none",
      clickHandlerAuthority: "none",
      standardUserBehaviorChange: false,
      source: SOURCE
    });
  }

  function isNexusLowRiskInertRendererEnabled(context = {}) {
    return getNexusLowRiskInertRendererFlag(context).enabled === true;
  }

  return {
    FLAG_NAME,
    NEXUS_LOW_RISK_INERT_RENDERER_ENABLED,
    getNexusLowRiskInertRendererFlag,
    isNexusLowRiskInertRendererEnabled
  };
});

