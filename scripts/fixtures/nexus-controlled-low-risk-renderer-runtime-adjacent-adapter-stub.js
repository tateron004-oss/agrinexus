const ALLOWED_ADAPTER_FIELDS = Object.freeze([
  "enableControlledLowRiskRendererVisibleUi",
  "mountExistsExactlyOnce",
  "mountHidden",
  "mountEmpty",
  "category",
  "title",
  "summary",
  "previewLines",
  "executionAllowed",
  "providerHandoff",
  "permissionRequest",
  "navigationAllowed",
  "requiresRawHtml",
  "requiresButton",
  "requiresLink",
  "requiresHandler",
  "requiresNetwork",
  "requiresStorage",
  "requiresConfirmation",
  "requiresExecution"
]);

const REJECTED_BEHAVIOR_FIELDS = Object.freeze([
  "html",
  "rawHtml",
  "button",
  "buttons",
  "link",
  "links",
  "href",
  "url",
  ["on", "Click"].join(""),
  ["on", "click"].join(""),
  "handler",
  "handlers",
  "callback",
  "callbacks",
  "action",
  "actionId",
  "dispatch",
  "execute",
  "provider",
  "providerAction",
  "permission",
  "permissionRequestDetails",
  "confirmation",
  "confirmationAction",
  "navigation",
  "route",
  "open",
  "target",
  "method",
  "headers",
  "body",
  ["fet", "ch"].join(""),
  "storage",
  "script",
  "style",
  "iframe",
  "form",
  "input"
]);

const UNSAFE_TRUE_FIELDS = Object.freeze([
  "executionAllowed",
  "providerHandoff",
  "permissionRequest",
  "navigationAllowed",
  "requiresRawHtml",
  "requiresButton",
  "requiresLink",
  "requiresHandler",
  "requiresNetwork",
  "requiresStorage",
  "requiresConfirmation",
  "requiresExecution"
]);

function isPlainObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value) && Object.getPrototypeOf(value) === Object.prototype;
}

function getControlledLowRiskRendererAllowedAdapterFields() {
  return ALLOWED_ADAPTER_FIELDS.slice();
}

function getControlledLowRiskRendererRejectedBehaviorFields() {
  return REJECTED_BEHAVIOR_FIELDS.slice();
}

function createDefaultControlledLowRiskRendererAdapterResult(reason = "default_off") {
  return {
    eligible: false,
    reason,
    textOnly: true,
    sideEffectsAllowed: false,
    runtimeWired: false
  };
}

function hasRejectedBehaviorField(input) {
  if (!isPlainObject(input)) return true;
  return REJECTED_BEHAVIOR_FIELDS.some(field => Object.prototype.hasOwnProperty.call(input, field));
}

function hasUnsafeAuthorityField(input) {
  if (!isPlainObject(input)) return true;
  return UNSAFE_TRUE_FIELDS.some(field => input[field] === true);
}

function evaluateControlledLowRiskRendererAdapterStub(input) {
  if (!isPlainObject(input)) return createDefaultControlledLowRiskRendererAdapterResult("malformed_input");
  if (input.enableControlledLowRiskRendererVisibleUi !== true) {
    return createDefaultControlledLowRiskRendererAdapterResult("default_off");
  }
  if (hasRejectedBehaviorField(input)) {
    return createDefaultControlledLowRiskRendererAdapterResult("rejected_behavior_field");
  }
  if (hasUnsafeAuthorityField(input)) {
    return createDefaultControlledLowRiskRendererAdapterResult("unsafe_authority_field");
  }
  return {
    eligible: true,
    reason: "strict_flag_safe_shape",
    textOnly: true,
    sideEffectsAllowed: false,
    runtimeWired: false
  };
}

module.exports = {
  getControlledLowRiskRendererAllowedAdapterFields,
  getControlledLowRiskRendererRejectedBehaviorFields,
  createDefaultControlledLowRiskRendererAdapterResult,
  evaluateControlledLowRiskRendererAdapterStub
};
