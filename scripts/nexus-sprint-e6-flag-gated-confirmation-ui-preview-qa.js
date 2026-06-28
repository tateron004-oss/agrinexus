const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertIncludes(source, terms, label) {
  for (const term of terms) {
    assert(source.includes(term), `${label} must include: ${term}`);
  }
}

function extractFunction(source, name) {
  const start = source.indexOf(`function ${name}`);
  assert(start >= 0, `function ${name} must exist`);
  const signatureEnd = source.indexOf(") {", start);
  assert(signatureEnd >= 0, `function ${name} must have a standard body opening`);
  const braceStart = signatureEnd + 2;
  let depth = 0;
  for (let i = braceStart; i < source.length; i += 1) {
    const char = source[i];
    if (char === "{") depth += 1;
    if (char === "}") {
      depth -= 1;
      if (depth === 0) return source.slice(start, i + 1);
    }
  }
  throw new Error(`function ${name} body could not be extracted`);
}

const docName = "NEXUS_SPRINT_E6_FLAG_GATED_CONFIRMATION_UI_PREVIEW.md";
const qaName = "nexus-sprint-e6-flag-gated-confirmation-ui-preview-qa.js";

assert(exists("docs", docName), "Sprint E6 doc must exist.");
assert(exists("scripts", qaName), "Sprint E6 QA script must exist.");

const doc = read("docs", docName);
const app = read("public", "app.js");
const styles = read("public", "styles.css");
const index = read("public", "index.html");
const server = read("server.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint E6",
  "NEXUS_USER_CONFIRMATION_PREVIEW_ENABLED",
  "off by default",
  "approval-intent-only",
  "approval intent is not execution",
  "requiresFinalExecutionGate: true",
  "executionAuthority: false",
  "providerHandoffAllowed: false",
  "pendingActionCreationAllowed: false",
  "backendWriteAllowed: false",
  "Evidence & Verification",
  "blocked execution channels",
  "Standard User runtime behavior remains unchanged"
], "E6 doc");

const flagHelper = extractFunction(app, "isUserConfirmationPreviewFlagEnabled");
const builder = extractFunction(app, "buildUserConfirmationPreviewFromReadiness");
const visibilityGuard = extractFunction(app, "isVisibleUserConfirmationPreview");
const renderer = extractFunction(app, "renderUserConfirmationPreview");
const painter = extractFunction(app, "paintControlledStagedActionPreview");
const clearPreview = extractFunction(app, "clearControlledActionPreview");
const localPainter = extractFunction(app, "paintLocalLevelOneSuggestionForSimpleUserIntent");
const metadataObserver = extractFunction(app, "observeAgentActionMetadata");

assert(app.includes("let visibleUserConfirmationPreview = null;"), "E6 must keep confirmation preview state isolated.");
assert(flagHelper.includes('["NEXUS", "USER", "CONFIRMATION", "PREVIEW", "ENABLED"].join("_")'), "E6 flag helper must construct canonical flag name.");
assert(flagHelper.includes("=== true"), "E6 flag helper must require boolean true.");
assert(builder.includes("isUserConfirmationPreviewFlagEnabled(options.globalRef)") && builder.includes("return null;"), "E6 builder must return null when flag is off.");
assert(builder.includes("nexus.sprintE6.userConfirmationPreview.v1"), "E6 preview schema must be stable.");
assert(builder.includes("isVisibleControlledActionConfirmationPrototypeReadiness(readiness)"), "E6 builder must depend on existing safe confirmation readiness.");

[
  "openTrainingResources",
  "explainLearningTopic",
  "showFarmJobs",
  "browseMarketplace",
  "explainAgricultureHelp",
  "openFieldSupportGuidance"
].forEach(term => assert(builder.includes(term), `E6 builder must support low-risk family: ${term}`));

[
  "approvalIntentOnly: true",
  "requiresFinalExecutionGate: true",
  "executionAuthority: false",
  "providerHandoffAllowed: false",
  "callOrMessageAllowed: false",
  "paymentAllowed: false",
  "locationAllowed: false",
  "cameraAllowed: false",
  "medicalOrPharmacyAllowed: false",
  "emergencyAllowed: false",
  "backendWriteAllowed: false",
  "pendingActionCreationAllowed: false"
].forEach(term => assert(builder.includes(term), `E6 builder must include no-execution field: ${term}`));

[
  "provider",
  "call",
  "message",
  "payment",
  "location",
  "camera",
  "medical",
  "pharmacy",
  "emergency",
  "backend-write",
  "pending-action"
].forEach(term => {
  assert(builder.includes(`"${term}"`), `E6 builder must block ${term}.`);
  assert(visibilityGuard.includes(`"${term}"`), `E6 visibility guard must require blocked ${term}.`);
});

assert(renderer.includes("data-nexus-user-confirmation-preview=\"true\""), "E6 renderer must mark the confirmation preview.");
assert(renderer.includes("data-approval-intent-only=\"true\""), "E6 renderer must mark approval intent only.");
assert(renderer.includes("data-final-execution-gate-required=\"true\""), "E6 renderer must mark final execution gate required.");
assert(renderer.includes("data-execution-authority=\"false\""), "E6 renderer must mark no execution authority.");
assert(renderer.includes("data-provider-handoff=\"false\""), "E6 renderer must mark no provider handoff.");
assert(renderer.includes("data-pending-action-creation=\"false\""), "E6 renderer must mark no pending action creation.");
assert(renderer.includes("Evidence &amp; Verification"), "E6 renderer must show Evidence & Verification.");
assert(renderer.includes("Source packet:"), "E6 renderer must show source packet requirement.");
assert(renderer.includes("Blocked channels:"), "E6 renderer must show blocked channels.");
assert(renderer.includes("approval intent is not execution"), "E6 renderer must disclose confirmation vs execution boundary.");
assert(!/<button\b/i.test(renderer), "E6 confirmation preview renderer must not include buttons.");
assert(!/<a\b/i.test(renderer), "E6 confirmation preview renderer must not include links.");
assert(!/<form\b/i.test(renderer), "E6 confirmation preview renderer must not include forms.");

assert(painter.includes("renderUserConfirmationPreview()"), "E6 painter must include confirmation preview in existing hidden mount only.");
assert(painter.includes("#nexus-controlled-low-risk-renderer-root"), "E6 painter must use the existing controlled low-risk renderer mount.");
assert(painter.includes("root.hidden = !html"), "E6 painter must keep the mount hidden when empty.");
assert(painter.includes('root.dataset.executionAllowed = "false"'), "E6 painter must keep execution disabled.");
assert(painter.includes('root.dataset.providerHandoff = "false"'), "E6 painter must keep provider handoff disabled.");
assert(painter.includes('root.dataset.permissionRequest = "false"'), "E6 painter must keep permission requests disabled.");

assert(clearPreview.includes("visibleUserConfirmationPreview = null"), "E6 clear path must clear confirmation preview state.");
assert(localPainter.includes("buildUserConfirmationPreviewFromReadiness"), "E6 local low-risk path must build confirmation preview after confirmation readiness.");
assert(metadataObserver.includes("buildUserConfirmationPreviewFromReadiness"), "E6 backend metadata path must build confirmation preview after confirmation readiness.");

assert(index.includes('id="nexus-controlled-low-risk-renderer-root"'), "E6 requires existing hidden mount.");
assert(index.includes('data-visible-renderer-enabled="false"'), "E6 mount must default data-visible-renderer-enabled=false.");
assert(index.includes('aria-hidden="true"'), "E6 mount must default aria-hidden=true.");

assert(styles.includes(".nexus-user-confirmation-preview"), "E6 styles must include confirmation preview class.");
assert(styles.includes(".nexus-user-confirmation-label"), "E6 styles must include compact label class.");

[
  "fetch(",
  "XMLHttpRequest",
  "WebSocket",
  "EventSource",
  "navigator.geolocation",
  "getCurrentPosition",
  "watchPosition",
  "getUserMedia",
  "window.open",
  "location.href",
  "tel:",
  "mailto:",
  "localStorage.setItem",
  "sessionStorage.setItem",
  "PaymentRequest",
  "sendBeacon"
].forEach(forbidden => {
  assert(!builder.includes(forbidden), `E6 builder must not include forbidden side effect: ${forbidden}`);
  assert(!renderer.includes(forbidden), `E6 renderer must not include forbidden side effect: ${forbidden}`);
  assert(!painter.includes(forbidden), `E6 painter must not include forbidden side effect: ${forbidden}`);
});

[
  "NEXUS_USER_CONFIRMATION_PREVIEW_ENABLED",
  "buildUserConfirmationPreviewFromReadiness",
  "renderUserConfirmationPreview"
].forEach(term => assert(!server.includes(term), `server.js must not wire E6 runtime term: ${term}`));

const alias = "qa:nexus-sprint-e6-flag-gated-confirmation-ui-preview";
const command = `node scripts/${qaName}`;
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint E6 QA.");

console.log("[nexus-sprint-e6-flag-gated-confirmation-ui-preview-qa] passed");
