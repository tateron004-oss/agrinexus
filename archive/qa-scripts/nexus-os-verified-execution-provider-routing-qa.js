const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const suite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL ${message}`);
    process.exitCode = 1;
  } else {
    console.log(`PASS ${message}`);
  }
}

function includes(source, token, message) {
  assert(source.includes(token), message);
}

[
  "NEXUS_VERIFIED_EXECUTION_STATES",
  "function normalizeNexusExecutionState",
  "function buildNexusVerifiedExecutionAttemptRecord",
  "function renderNexusVerifiedExecutionStatus",
  "nexus-verified-execution-attempt.v1"
].forEach(token => includes(app, token, `verified execution runtime ${token}`));

[
  "draft",
  "prepared",
  "handoff_required",
  "queued",
  "attempting",
  "provider_accepted",
  "provider_rejected",
  "failed",
  "user_completed_external_step",
  "verified_complete"
].forEach(state => includes(app, `"${state}"`, `normalized execution state ${state}`));

[
  "Action",
  "Provider",
  "Attempt time",
  "Request status",
  "Provider response",
  "Verification evidence",
  "Failure reason",
  "Retry eligibility",
  "Receipt reference"
].forEach(label => includes(app, label, `execution attempt receipt field ${label}`));

[
  "function executeNexusAction",
  "function queueNexusAction",
  "function retryNexusAction",
  "function confirmNexusPacket",
  "function requestNexusConfirmation",
  "function nexusAdapterForPacket",
  "handleInactiveNexusLane(packet, lane)",
  "adapter.executeTest(lane, packet)",
  "adapter.executeLive(lane, packet)",
  "adapter.prepareBrowserHandoff"
].forEach(token => includes(app, token, `provider routing controller ${token}`));

[
  "providerAvailable",
  "credential_required",
  "browser-native-handoff",
  "queued_local_only",
  "provider_rejected",
  "failed",
  "retryEligibility",
  "verified_complete",
  "Provider unavailable or credentials missing.",
  "Nexus will not claim provider acceptance, completion, payment, send, booking, dispatch, or handoff unless provider evidence exists."
].forEach(token => includes(app, token, `provider routing scenario ${token}`));

[
  "const executionAttempt = buildNexusVerifiedExecutionAttemptRecord(packet, result, lane);",
  "normalizedExecutionState: executionAttempt.normalizedExecutionState",
  "executionAttempt,",
  "providerResponse: executionAttempt.providerResponse",
  "verificationEvidence: executionAttempt.verificationEvidence",
  "failureReason: executionAttempt.failureReason",
  "receiptReference: executionAttempt.receiptReference",
  "const receiptAttempt = entry?.executionAttempt || buildNexusVerifiedExecutionAttemptRecord",
  "renderNexusVerifiedExecutionStatus(receiptAttempt)"
].forEach(token => includes(app, token, `outcome history integration ${token}`));

[
  "noFakeSuccess",
  "noExecutionWithoutConfirmation: true",
  "localOnlyUnlessProviderAccepted",
  "externalActionOccurred: lane.status === \"active_live\" && verified.status === \"submitted\"",
  "External execution blocked until final confirmation.",
  "No provider was contacted"
].forEach(token => includes(app, token, `no fake execution boundary ${token}`));

[
  ".nexus-verified-execution-status",
  "data-nexus-verified-execution-status=\"true\"",
  "data-nexus-normalized-execution-state",
  "data-no-fake-success=\"true\""
].forEach(token => includes(`${app}\n${styles}`, token, `visible verified execution status ${token}`));

assert(
  pkg.scripts["qa:nexus-os-verified-execution-provider-routing"] === "node scripts/nexus-os-verified-execution-provider-routing-qa.js",
  "package alias exists"
);
assert(suite.includes("scripts/nexus-os-verified-execution-provider-routing-qa.js"), "safe QA suite includes Rail 12 QA");

if (process.exitCode) process.exit(process.exitCode);

console.log("Nexus OS verified execution and provider routing QA passed.");
