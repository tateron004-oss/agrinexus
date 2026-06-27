(function initNexusControlledStagedActionsFlag(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
    return;
  }

  root.NexusControlledStagedActionsFlag = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusControlledStagedActionsFlag() {
  "use strict";

  const CONTROLLED_STAGED_ACTIONS_FLAG_NAME = "NEXUS_CONTROLLED_STAGED_ACTIONS_ENABLED";

  function isControlledStagedActionsEnabled(options) {
    if (!options || typeof options !== "object" || Array.isArray(options)) return false;
    return options[CONTROLLED_STAGED_ACTIONS_FLAG_NAME] === true;
  }

  function describeControlledStagedActionsFlag(options) {
    const enabled = isControlledStagedActionsEnabled(options);
    return Object.freeze({
      flagName: CONTROLLED_STAGED_ACTIONS_FLAG_NAME,
      enabled,
      defaultEnabled: false,
      reviewOnly: true,
      executionAuthority: false,
      standardUserRuntimeWired: false
    });
  }

  return Object.freeze({
    CONTROLLED_STAGED_ACTIONS_FLAG_NAME,
    isControlledStagedActionsEnabled,
    describeControlledStagedActionsFlag
  });
});
