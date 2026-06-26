const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const files = {
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  styles: path.join(root, "public", "styles.css"),
  permissionReview: path.join(root, "public", "nexus-permission-review-contract.js"),
  auditEvent: path.join(root, "public", "nexus-audit-event-contract.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-sprint-c-permission-audit-foundation-qa] ${message}`);
    process.exit(1);
  }
}

Object.entries(files).forEach(([name, filePath]) => {
  assert(fs.existsSync(filePath), `${name} must exist at ${path.relative(root, filePath)}.`);
});

const index = fs.readFileSync(files.index, "utf8");
const app = fs.readFileSync(files.app, "utf8");
const styles = fs.readFileSync(files.styles, "utf8");
const permissionSource = fs.readFileSync(files.permissionReview, "utf8");
const auditSource = fs.readFileSync(files.auditEvent, "utf8");
const packageData = JSON.parse(fs.readFileSync(files.packageJson, "utf8"));
const qaSuite = fs.readFileSync(files.qaSuite, "utf8");
const permissionReview = require(files.permissionReview);
const auditEvent = require(files.auditEvent);

["buildPermissionReview", "assertPermissionReviewSafe", "PERMISSION_REVIEW_STATUS"].forEach(name => {
  assert(Object.prototype.hasOwnProperty.call(permissionReview, name), `permission review helper must export ${name}.`);
});

["buildAuditEventPreview", "assertAuditEventPreviewSafe", "AUDIT_EVENT_STATUS"].forEach(name => {
  assert(Object.prototype.hasOwnProperty.call(auditEvent, name), `audit event helper must export ${name}.`);
});

const review = permissionReview.buildPermissionReview({
  actionType: "communication-request",
  domain: "communication",
  riskLevel: "high",
  summary: "Nexus can explain what would be required, but cannot execute this now.",
  dataNeeded: ["recipient", "message content", "user confirmation"]
});

assert(review.status === "preview-only", "permission review must default to preview-only.");
assert(review.confirmEnabled === false, "permission confirm must be disabled.");
assert(review.cancelAvailable === true, "permission cancel path must be available.");
assert(review.executionAllowed === false, "permission review must not allow execution.");
assert(review.sideEffectsAllowed === false, "permission review must not allow side effects.");
assert(review.providerHandoffAllowed === false, "permission review must not allow provider handoff.");
assert(review.backendWriteAllowed === false, "permission review must not allow backend write.");
assert(review.auditWriteAllowed === false, "permission review must not allow audit write.");
assert(review.permissionPromptInformationalOnly === true, "permission prompt must be informational only.");
assert(permissionReview.assertPermissionReviewSafe(review), "permission review must pass safety assertion.");

const blockedReview = permissionReview.buildPermissionReview({ executionAllowed: true, confirmEnabled: true, hiddenExecutionAllowed: true });
assert(blockedReview.status === "blocked", "unsafe permission review requests must be blocked.");
assert(blockedReview.executionAllowed === false && blockedReview.confirmEnabled === false, "unsafe permission review request must remain non-executing.");
assert(permissionReview.assertPermissionReviewSafe(blockedReview), "blocked unsafe permission review must still be safe.");

const audit = auditEvent.buildAuditEventPreview({
  eventType: "permission-review-preview",
  riskLevel: "high",
  domain: "communication",
  actionType: "communication-request",
  summary: "Previewed future permission requirements.",
  sourceStatus: "general guidance",
  permissionStatus: review.status
});

assert(audit.status === "preview-only", "audit event must default to preview-only.");
assert(audit.backendWriteAllowed === false, "audit event must not allow backend write.");
assert(audit.storageWriteAllowed === false, "audit event must not allow storage write.");
assert(audit.networkAllowed === false, "audit event must not allow network.");
assert(audit.executionAllowed === false, "audit event must not allow execution.");
assert(audit.redactionPolicy === "summary-only-no-secrets", "audit redaction policy must exist.");
assert(audit.redactionRules.includes("no secrets"), "audit redaction rules must reject secrets.");
assert(audit.redactionRules.includes("no credentials"), "audit redaction rules must reject credentials.");
assert(audit.redactionRules.includes("no tokens"), "audit redaction rules must reject tokens.");
assert(auditEvent.assertAuditEventPreviewSafe(audit), "audit event must pass safety assertion.");

const sensitiveAudit = auditEvent.buildAuditEventPreview({ secretToken: "do-not-use", phone: "555-0100", summary: "Unsafe payload" });
assert(sensitiveAudit.status === "blocked", "audit preview must block sensitive field names.");
assert(sensitiveAudit.sensitiveFieldBlocked === true, "audit preview must report sensitive field block.");
assert(sensitiveAudit.executionAllowed === false && sensitiveAudit.networkAllowed === false, "sensitive audit preview must remain inert.");
assert(auditEvent.assertAuditEventPreviewSafe(sensitiveAudit), "sensitive audit preview must still pass inert safety assertion.");

const expectedOrder = [
  "/nexus-agriculture-source-registry.js?v=nexus-phase-102",
  "/nexus-permission-gated-action-contract.js?v=nexus-phase-103",
  "/nexus-voice-text-intent-router.js?v=nexus-phase-104",
  "/nexus-planner-preview-contract.js?v=nexus-phase-105",
  "/nexus-permission-review-contract.js?v=nexus-sprint-c",
  "/nexus-audit-event-contract.js?v=nexus-sprint-c",
  "/nexus-agriculture-support-response-card.js?v=nexus-phase-101",
  "/app.js?v="
];

let lastIndex = -1;
expectedOrder.forEach(src => {
  const current = index.indexOf(src);
  assert(current !== -1, `index.html must load ${src}.`);
  assert(current > lastIndex, `${src} must load after the previous helper.`);
  lastIndex = current;
});

[
  "NexusPermissionReviewContract",
  "NexusAuditEventContract",
  "buildPermissionReview",
  "buildAuditEventPreview",
  "Permission Review Preview",
  "Audit Event Preview",
  "Confirm disabled",
  "Cancel preview",
  "data-nexus-permission-review-preview",
  "data-nexus-audit-event-preview"
].forEach(fragment => assert(app.includes(fragment), `app.js must include Sprint C runtime fragment: ${fragment}`));

assert(styles.includes(".nexus-preview-review-block"), "styles must include Sprint C permission/audit preview styling.");

const sprintCSurface = [permissionSource, auditSource].join("\n")
  + app.slice(app.indexOf("function nexusPermissionDataNeededForRoute"), app.indexOf("function localizedVoiceSuggestionItems"));

[
  "fetch(",
  "XMLHttpRequest",
  "navigator.geolocation",
  "getCurrentPosition",
  "watchPosition",
  "getUserMedia",
  "window.open",
  "location.href",
  "localStorage.setItem",
  "sessionStorage.setItem",
  "PaymentRequest",
  "navigator.sendBeacon"
].forEach(forbidden => assert(!sprintCSurface.includes(forbidden), `Sprint C surfaces must not include ${forbidden}.`));

assert(packageData.scripts["qa:nexus-sprint-c-permission-audit-foundation"] === "node scripts/nexus-sprint-c-permission-audit-foundation-qa.js", "package alias must exist.");
assert(qaSuite.includes("scripts/nexus-sprint-c-permission-audit-foundation-qa.js"), "qa-suite must include Sprint C QA.");

console.log("[nexus-sprint-c-permission-audit-foundation-qa] passed");
