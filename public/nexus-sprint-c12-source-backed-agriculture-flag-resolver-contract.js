(function nexusSprintC12SourceBackedAgricultureFlagResolverContract(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusSprintC12SourceBackedAgricultureFlagResolverContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusSprintC12SourceBackedAgricultureFlagResolverContractModule() {
  "use strict";

  const CONTRACT_VERSION = "nexus.sprintC12.sourceBackedAgricultureFlagResolverContract.v1";
  const FLAG_NAME = "enableSourceBackedAgricultureRuntimeMapping";

  function resolveSourceBackedAgricultureRuntimeMappingFlag(input) {
    const source = input && typeof input === "object" && !Array.isArray(input) ? input : {};
    const enabled = source[FLAG_NAME] === true;
    return Object.freeze({
      contractVersion: CONTRACT_VERSION,
      flagName: FLAG_NAME,
      enabled,
      disabled: !enabled,
      activationSource: enabled ? "explicit_fixture_boolean" : "default_false",
      runtimeWiringAllowed: false,
      loadMapperAllowed: false,
      renderVisibleCardAllowed: false,
      executionAllowed: false,
      sideEffectsAllowed: false,
      providerHandoffAllowed: false,
      networkLookupAllowed: false,
      storageReadAllowed: false,
      storageWriteAllowed: false,
      backendWriteAllowed: false,
      permissionPromptAllowed: false,
      routeAutoOpenAllowed: false,
      modalAutoOpenAllowed: false,
      pendingActionCreationAllowed: false,
      noActionDisclosure: "No action has been taken."
    });
  }

  return Object.freeze({
    CONTRACT_VERSION,
    FLAG_NAME,
    resolveSourceBackedAgricultureRuntimeMappingFlag
  });
});
