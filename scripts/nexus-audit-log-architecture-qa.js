const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function readText(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function assertIncludes(source, needle, message) {
  assert(source.includes(needle), message || `Expected source to include ${needle}`);
}

function assertNotIncludes(source, needle, message) {
  assert(!source.includes(needle), message || `Expected source not to include ${needle}`);
}

function sourceBetween(source, startNeedle, endNeedle) {
  const start = source.indexOf(startNeedle);
  assert.notEqual(start, -1, `Missing source start: ${startNeedle}`);
  const end = source.indexOf(endNeedle, start + startNeedle.length);
  assert.notEqual(end, -1, `Missing source end after ${startNeedle}: ${endNeedle}`);
  return source.slice(start, end);
}

const server = readText("server.js");
const app = readText("public", "app.js");
const pkg = JSON.parse(readText("package.json"));
const auditDoc = readText("docs", "NEXUS_AGENT_AUDIT_LOGGING_ARCHITECTURE.md");
const confirmationDoc = readText("docs", "NEXUS_UNIFIED_CONFIRMATION_UI_ARCHITECTURE.md");
const providerDoc = readText("docs", "NEXUS_COMMUNICATION_PROVIDER_HANDOFF_PLAN.md");
const contactDoc = readText("docs", "NEXUS_CONTACT_CALL_PERMISSION_ARCHITECTURE.md");
const contactQa = readText("scripts", "nexus-contact-call-permission-qa.js");
const resolutionQa = readText("scripts", "nexus-contact-resolution-qa.js");
const providerQa = readText("scripts", "nexus-provider-handoff-boundary-qa.js");
const confirmationQa = readText("scripts", "nexus-confirmation-ui-contract-qa.js");

for (const phrase of [
  "High-risk actions must be auditable before execution.",
  "Audit logging must not itself trigger execution.",
  "Audit entries must be created for staged, confirmed, cancelled, failed, blocked, provider-opened, provider-fallback, and unsupported actions.",
  "Cancelled actions are cancelled, not failed and not executed.",
  "Rendering a preview, confirmation, or handoff card must not produce an \"executed\" event.",
  "Provider handoff means the provider UI or link was made available/opened, not that the provider completed the real-world action."
]) {
  assertIncludes(auditDoc, phrase, `Audit architecture must preserve principle: ${phrase}`);
}

for (const eventType of [
  "intent-detected",
  "risk-classified",
  "preview-shown",
  "action-staged",
  "needs-input",
  "needs-choice",
  "confirmation-shown",
  "confirmation-accepted",
  "confirmation-rejected",
  "action-cancelled",
  "provider-opened",
  "provider-fallback-shown",
  "provider-failed",
  "provider-unsupported",
  "execution-blocked",
  "credential-missing",
  "permission-denied",
  "expired-pending-action"
]) {
  assertIncludes(auditDoc, `\`${eventType}\``, `Audit architecture must document event type ${eventType}`);
}

for (const schemaField of [
  "auditId",
  "eventType",
  "actionId",
  "intentId",
  "userId",
  "sessionId",
  "role",
  "sourceSurface",
  "riskTier",
  "actionType",
  "targetSummary",
  "provider",
  "confirmationState",
  "permissionState",
  "resultStatus",
  "redactedPayload",
  "createdAt",
  "expiresAt",
  "retentionClass"
]) {
  assertIncludes(auditDoc, schemaField, `Audit event schema must include ${schemaField}`);
}

for (const section of [
  "### Phone Numbers",
  "### Email Addresses",
  "### Names",
  "### Health-Related Context",
  "### Location",
  "### Payment / Account Information",
  "### Emergency Contacts",
  "### Marketplace Buyer / Seller Info"
]) {
  assertIncludes(auditDoc, section, `Audit architecture must include redaction section ${section}`);
}

for (const phrase of [
  "Logs use redacted phone numbers.",
  "Logs do not store full payment details.",
  "Logs do not store full health details.",
  "Logs do not store identity secrets.",
  "Logs do not store precise location data in generic audit streams.",
  "Audit logging does not trigger execution.",
  "Cancelled actions are logged as cancelled, not failed or executed.",
  "Provider handoff requires an audit event.",
  "Blocked execution creates a blocked/fallback audit event."
]) {
  assertIncludes(auditDoc, phrase, `Audit QA expectations must include: ${phrase}`);
}

for (const scriptName of [
  "scripts/nexus-audit-log-architecture-qa.js",
  "scripts/nexus-audit-redaction-contract-qa.js",
  "scripts/nexus-high-risk-audit-required-qa.js",
  "scripts/nexus-provider-audit-event-qa.js",
  "scripts/nexus-cancelled-action-audit-qa.js"
]) {
  assertIncludes(auditDoc, scriptName, `Audit architecture must recommend ${scriptName}`);
}

for (const exampleHeading of [
  "### Call Maria On WhatsApp",
  "### Call John With Duplicate Contacts",
  "### Call My Doctor With Missing Number",
  "### Open Phone Dialer After Confirmation",
  "### Send SMS Draft",
  "### Email Draft",
  "### Marketplace Buyer Message",
  "### Payment Blocked",
  "### Camera / Location Permission Blocked",
  "### Telehealth Video Handoff"
]) {
  assertIncludes(auditDoc, exampleHeading, `Audit architecture must include example flow ${exampleHeading}`);
}

for (const relatedExpectation of [
  "auditRequired: true",
  "Confirmation must be auditable.",
  "audit logging is required",
  "High-risk provider execution should remain gated until provider adapters are individually approved."
]) {
  assertIncludes(confirmationDoc, relatedExpectation, `Confirmation architecture must align with audit expectation: ${relatedExpectation}`);
}

for (const relatedExpectation of [
  "Every handoff attempt should write or emit an audit event",
  "provider-opened",
  "provider-failed",
  "Redact phone numbers in user-visible logs.",
  "Provider handoff requires pending action and explicit confirmation"
]) {
  if (relatedExpectation === "Provider handoff requires pending action and explicit confirmation") {
    assert.match(providerDoc, /provider handoff requires pending action and explicit confirmation|staged pending action[\s\S]*explicit confirmation/i, "Provider handoff plan must preserve pending action plus confirmation audit boundary");
  } else {
    assertIncludes(providerDoc, relatedExpectation, `Provider handoff plan must align with audit expectation: ${relatedExpectation}`);
  }
}

for (const relatedExpectation of [
  "CommunicationAuditEvent",
  "eventType",
  "redactedPhone",
  "logs result in a later audit phase"
]) {
  assertIncludes(contactDoc, relatedExpectation, `Contact/call architecture must align with audit expectation: ${relatedExpectation}`);
}

assertIncludes(server, "function redactPhoneNumber", "Runtime source must keep phone redaction helper");
assertIncludes(server, "db.profile.integrationEvents", "Runtime source must keep existing integration event evidence store");
assertIncludes(server, "function addActivity", "Runtime source must keep existing activity helper");
assertIncludes(server, "db.profile.agentPendingAction", "Runtime source must keep pending action staging");
assertIncludes(app, "auditPolicy: \"observeOnly\"", "Frontend controlled-action metadata must remain observe-only");

assertIncludes(server, "function publicState", "Runtime source must keep public state projection helper");
assertIncludes(server, "projected.integrationEvents = profile.integrationEvents.map(event => projectIntegrationEventForUser(event, user))", "Public state must keep role-aware integration event projection");
assertIncludes(server, "function projectIntegrationEventForUser", "Runtime source must keep integration event projection helper");

for (const unsafePattern of [
  "agentAuditEvents.unshift(req",
  "auditEvents.unshift(req",
  "console.log(req.body",
  "console.log(body.password",
  "console.log(process.env",
  "redactedPayload: body",
  "redactedPayload: req.body"
]) {
  assertNotIncludes(server, unsafePattern, `Runtime server source must not introduce unsafe audit logging pattern: ${unsafePattern}`);
  assertNotIncludes(app, unsafePattern, `Runtime app source must not introduce unsafe audit logging pattern: ${unsafePattern}`);
}

for (const qaSignal of [
  "phase4HighRisk",
  "allowedConfirmations",
  "okay",
  "confirmed-call-handoff"
]) {
  assertIncludes(contactQa, qaSignal, `Contact/call QA must remain integrated with audit safety signal: ${qaSignal}`);
}

for (const qaSignal of [
  "number_needed",
  "without number",
  "duplicate",
  "must not expose native bridge dispatch metadata",
  "orphan"
]) {
  assert.match(resolutionQa, new RegExp(qaSignal, "i"), `Contact resolution QA must remain integrated with audit safety signal: ${qaSignal}`);
}

for (const qaSignal of [
  "confirmedOnly",
  "pending action",
  "executionConfirmed",
  "safeConfirmedCallHandoffUrl",
  "ACTION_DIAL"
]) {
  assertIncludes(providerQa, qaSignal, `Provider handoff QA must remain integrated with audit safety signal: ${qaSignal}`);
}

for (const qaSignal of [
  "auditRequired",
  "okay",
  "safeConfirmedCallHandoffUrl",
  "Native phone handoff"
]) {
  assertIncludes(confirmationQa, qaSignal, `Confirmation UI QA must remain integrated with audit safety signal: ${qaSignal}`);
}

assert.strictEqual(
  pkg.scripts["qa:nexus-audit-log-architecture"],
  "node scripts/nexus-audit-log-architecture-qa.js",
  "package should expose audit log architecture QA alias"
);

console.log("Nexus audit log architecture QA passed");
