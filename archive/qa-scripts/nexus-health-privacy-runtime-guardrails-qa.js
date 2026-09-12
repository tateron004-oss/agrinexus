const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");

function extractFunction(source, name) {
  const start = source.indexOf(`function ${name}(`);
  assert(start >= 0, `${name} should exist`);
  const signatureEnd = source.indexOf(")", start);
  const bodyStart = source.indexOf("{", signatureEnd);
  let depth = 0;
  for (let index = bodyStart; index < source.length; index += 1) {
    const char = source[index];
    if (char === "{") depth += 1;
    if (char === "}") {
      depth -= 1;
      if (depth === 0) return source.slice(start, index + 1);
    }
  }
  throw new Error(`${name} body should be extractable`);
}

const serverGuardrailsBody = extractFunction(server, "healthPrivacyComplianceGuardrailsStatus");
const appGuardrailsBody = extractFunction(app, "a100HealthPrivacyComplianceGuardrails");
const appPanelBody = extractFunction(app, "a100HealthPrivacyComplianceGuardrailsPanelHtml");
const cardBody = extractFunction(app, "a100SafeAutonomyCardHtml");
const intentBody = extractFunction(app, "a100SafeAutonomyIntent");
const surfaceBody = extractFunction(app, "a100CapabilitySurfaceHtml");

[
  "healthPrivacyComplianceGuardrailsStatus",
  "healthPrivacyComplianceGuardrails",
  "Health Privacy & Compliance Guardrails",
  "review-only health support",
  "no diagnosis",
  "no medication changes",
  "no emergency dispatch",
  "session-only data",
  "provider review required",
  "health-data:sensitive",
  "session-only",
  "review-only",
  "provider-review-required",
  "diagnosis-disabled",
  "prescribing-disabled",
  "medication-adjustment-disabled",
  "emergency-dispatch-disabled",
  "provider-contact-disabled",
  "external-transmission-disabled",
  "persistent-sensitive-storage-disabled"
].forEach(term => assert(server.toLowerCase().includes(term.toLowerCase()), `server should include guardrail term: ${term}`));

[
  "noDiagnosis: true",
  "noPrescribing: true",
  "noMedicationAdjustment: true",
  "noEmergencyDispatch: true",
  "noProviderContact: true",
  "noExternalTransmission: true",
  "sessionOnly: true",
  "providerReviewRequired: true",
  "noExecutionAuthorized: true"
].forEach(term => assert(serverGuardrailsBody.includes(term), `server guardrails should set ${term}`));

[
  "data-nexus-health-privacy-guardrails-panel=\"true\"",
  "data-health-data-sensitive=\"true\"",
  "data-sensitive-health-persistence=\"false\"",
  "data-provider-contacted=\"false\"",
  "data-emergency-dispatch=\"false\"",
  "data-medication-change=\"false\"",
  "data-diagnosis=\"false\"",
  "data-real-execution-enabled=\"false\"",
  "Prompt safety flags",
  "Blocked execution"
].forEach(term => assert(appPanelBody.includes(term), `health guardrail panel should render safe metadata: ${term}`));

[
  "medication question - provider review required",
  "severe or emergency symptom - local emergency services guidance",
  "manual/session reading - insufficient for diagnosis",
  "report request - review-only care-team summary",
  "device/RPM readiness - no device connection"
].forEach(term => assert(appGuardrailsBody.includes(term), `prompt-aware guardrail flag should exist: ${term}`));

[
  "<button",
  "<a ",
  "href=",
  "<form",
  "<input",
  "<textarea",
  "onclick",
  "dispatchProviderWebhook",
  "writeDb(",
  "navigator.geolocation",
  "getUserMedia",
  "openProvider",
  "sendMessage",
  "callProvider",
  "prescribe",
  "diagnoseNow"
].forEach(term => assert(!appPanelBody.includes(term), `health guardrail panel must not include executable UI/control term: ${term}`));

assert(appGuardrailsBody.includes("data?.healthPrivacyComplianceGuardrails"), "frontend should consume public health guardrail metadata.");
assert(surfaceBody.includes("a100HealthPrivacyComplianceGuardrailsPanelHtml(a100HealthPrivacyComplianceGuardrails())"), "default Standard User A100 surface should show health guardrails.");
assert(cardBody.includes("a100HealthPrivacyComplianceGuardrailsPanelHtml(healthPrivacyComplianceGuardrails)"), "A100 card should render attached health guardrails.");
assert(intentBody.includes("healthPrivacyComplianceGuardrails: a100HealthPrivacyComplianceGuardrails(command)"), "high-risk and chronic prompts should attach health privacy guardrails.");
assert(intentBody.includes("Nexus can prepare a checklist or questions for review") && intentBody.includes("it will not diagnose, change medicine"), "high-risk medical prompts should remain review-only.");
assert(intentBody.includes("Nexus does not diagnose, change insulin or medicine") || intentBody.includes("Nexus does not diagnose, change medicine"), "chronic care prompts should preserve no-diagnosis/no-medication-change copy.");
assert(intentBody.includes("no device is connected") && intentBody.includes("provider review is required"), "RPM/RTM prompt should remain no-device and review-required.");

[
  ".a100-health-privacy-guardrails",
  ".a100-health-privacy-grid",
  ".a100-health-privacy-tag-list",
  ".a100-health-privacy-flags",
  ".a100-health-privacy-blocked"
].forEach(selector => assert(styles.includes(selector), `styles should include ${selector}`));

assert.equal(
  pkg.scripts["qa:nexus-health-privacy-runtime-guardrails"],
  "node scripts/nexus-health-privacy-runtime-guardrails-qa.js",
  "package.json should expose health privacy guardrails QA alias"
);

assert(
  qaSuite.includes("scripts/nexus-health-privacy-runtime-guardrails-qa.js"),
  "qa-suite should include health privacy guardrails QA in safe suites"
);

console.log("[nexus-health-privacy-runtime-guardrails-qa] passed");
