const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  CONTROLLED_STAGED_ACTIONS_FLAG_NAME,
  isControlledStagedActionsEnabled
} = require("../public/nexus-controlled-staged-actions-flag.js");

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
  assert(braceStart >= 0, `function ${name} must have body`);
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

const docName = "NEXUS_SPRINT_D6_FLAG_GATED_STAGED_ACTION_PREVIEW.md";
const qaName = "nexus-sprint-d6-flag-gated-staged-action-preview-qa.js";

assert(exists("docs", docName), "Sprint D6 doc must exist.");
assert(exists("scripts", qaName), "Sprint D6 QA script must exist.");

const doc = read("docs", docName);
const app = read("public", "app.js");
const styles = read("public", "styles.css");
const index = read("public", "index.html");
const server = read("server.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assert.equal(CONTROLLED_STAGED_ACTIONS_FLAG_NAME, "NEXUS_CONTROLLED_STAGED_ACTIONS_ENABLED", "D6 must use canonical D5 flag name.");
assert.equal(isControlledStagedActionsEnabled({}), false, "D6 inherited flag must default false.");
assert.equal(isControlledStagedActionsEnabled({ [CONTROLLED_STAGED_ACTIONS_FLAG_NAME]: true }), true, "D6 inherited flag must require boolean true.");

assertIncludes(doc, [
  "Sprint D6",
  "NEXUS_CONTROLLED_STAGED_ACTIONS_ENABLED",
  "default-off",
  "Flag-Off Behavior",
  "Flag-On Behavior",
  "No-Execution Guarantees",
  "Evidence & Verification",
  "Browser Validation Boundary",
  "Review only - no action has been taken."
], "D6 doc");

const flagHelper = extractFunction(app, "isControlledStagedActionPreviewFlagEnabled");
const builder = extractFunction(app, "buildControlledStagedActionPreviewFromReadiness");
const visibilityGuard = extractFunction(app, "isVisibleControlledStagedActionPreview");
const renderer = extractFunction(app, "renderControlledStagedActionPreview");
const painter = extractFunction(app, "paintControlledStagedActionPreview");
const clearPreview = extractFunction(app, "clearControlledActionPreview");
const localPainter = extractFunction(app, "paintLocalLevelOneSuggestionForSimpleUserIntent");
const metadataObserver = extractFunction(app, "observeAgentActionMetadata");

assert(flagHelper.includes('["NEXUS", "CONTROLLED", "STAGED", "ACTIONS", "ENABLED"].join("_")'), "D6 app flag helper must construct the canonical flag without changing D5 absence checks.");
assert(flagHelper.includes("=== true"), "D6 app flag helper must require boolean true.");
assert(builder.includes("isControlledStagedActionPreviewFlagEnabled(options.globalRef)") && builder.includes("return null;"), "D6 builder must return null when flag is off.");
assert(builder.includes("nexus.sprintD6.controlledStagedActionPreview.v1"), "D6 staged preview schema must be stable.");

[
  "agriculture.training.review",
  "agriculture.irrigation.learning.review",
  "workforce.farm_jobs.review",
  "marketplace.agritrade.browse.review",
  "agriculture.crop_issue.observation_review",
  "agriculture.field_support.review"
].forEach(term => assert(builder.includes(term), `D6 builder must support low-risk staged action type: ${term}`));

[
  "call",
  "message",
  "payment",
  "location",
  "camera",
  "provider",
  "emergency",
  "medical",
  "pharmacy",
  "backend-write",
  "pending-action"
].forEach(term => {
  assert(builder.includes(`"${term}"`), `D6 builder must block ${term}`);
  assert(visibilityGuard.includes(`"${term}"`), `D6 visibility guard must require blocked channel ${term}`);
});

[
  "reviewOnly: true",
  "requiresUserApproval: true",
  "executionAuthority: false",
  "providerHandoffAllowed: false",
  "pendingActionCreationAllowed: false",
  "backendWriteAllowed: false",
  "networkSideEffectAllowed: false",
  "storageSideEffectAllowed: false",
  "permissionRequestAllowed: false",
  "externalNavigationAllowed: false"
].forEach(term => assert(builder.includes(term), `D6 builder must include no-execution field: ${term}`));

assert(renderer.includes("Evidence &amp; Verification"), "D6 renderer must show Evidence & Verification.");
assert(renderer.includes("Source packet:"), "D6 renderer must show source packet requirement.");
assert(renderer.includes("Review only - no action has been taken."), "D6 renderer must show no-action disclosure.");
assert(renderer.includes("data-execution-authority=\"false\""), "D6 renderer must mark no execution authority.");
assert(renderer.includes("data-provider-handoff=\"false\""), "D6 renderer must mark no provider handoff.");
assert(renderer.includes("data-pending-action-creation=\"false\""), "D6 renderer must mark no pending action creation.");
assert(renderer.includes("data-network-side-effect=\"false\""), "D6 renderer must mark no network side effect.");
assert(!/<button\b/i.test(renderer), "D6 staged preview renderer must not include buttons.");
assert(!/<a\b/i.test(renderer), "D6 staged preview renderer must not include links.");
assert(!/<form\b/i.test(renderer), "D6 staged preview renderer must not include forms.");

assert(painter.includes("#nexus-controlled-low-risk-renderer-root"), "D6 painter must use the existing hidden low-risk renderer mount.");
assert(painter.includes("root.hidden = !html"), "D6 painter must keep the mount hidden when no preview exists.");
assert(painter.includes('root.setAttribute("aria-hidden", html ? "false" : "true")'), "D6 painter must update aria-hidden with visibility.");
assert(painter.includes('root.dataset.visibleRendererEnabled = html ? "true" : "false"'), "D6 painter must update visible renderer dataset.");
assert(painter.includes('root.dataset.executionAllowed = "false"'), "D6 painter must keep execution disabled.");
assert(painter.includes('root.dataset.providerHandoff = "false"'), "D6 painter must keep provider handoff disabled.");
assert(painter.includes('root.dataset.permissionRequest = "false"'), "D6 painter must keep permission request disabled.");

assert(clearPreview.includes("visibleControlledStagedActionPreview = null"), "D6 clear path must clear staged preview state.");
assert(clearPreview.includes("paintControlledActionPreview()"), "D6 clear path must repaint/empty the hidden mount.");
assert(localPainter.includes("buildControlledStagedActionPreviewFromReadiness"), "D6 local low-risk path must build staged preview only after existing preview readiness.");
assert(metadataObserver.includes("buildControlledStagedActionPreviewFromReadiness"), "D6 backend metadata observation path must build staged preview only after existing preview readiness.");

assert(index.includes('id="nexus-controlled-low-risk-renderer-root"'), "D6 requires existing hidden mount.");
assert(index.includes('data-visible-renderer-enabled="false"'), "D6 hidden mount must default data-visible-renderer-enabled=false.");
assert(index.includes('aria-hidden="true"'), "D6 hidden mount must default aria-hidden=true.");

assert(styles.includes(".nexus-controlled-staged-action-preview"), "D6 styles must include staged preview class.");
assert(styles.includes(".nexus-controlled-staged-action-label"), "D6 styles must include compact label class.");

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
  assert(!builder.includes(forbidden), `D6 builder must not include forbidden side effect: ${forbidden}`);
  assert(!renderer.includes(forbidden), `D6 renderer must not include forbidden side effect: ${forbidden}`);
  assert(!painter.includes(forbidden), `D6 painter must not include forbidden side effect: ${forbidden}`);
});

[
  "NEXUS_CONTROLLED_STAGED_ACTIONS_ENABLED",
  "buildControlledStagedActionPreviewFromReadiness",
  "renderControlledStagedActionPreview"
].forEach(term => assert(!server.includes(term), `server.js must not wire D6 runtime term: ${term}`));

const alias = "qa:nexus-sprint-d6-flag-gated-staged-action-preview";
const command = `node scripts/${qaName}`;
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint D6 QA.");

console.log("[nexus-sprint-d6-flag-gated-staged-action-preview-qa] passed");
