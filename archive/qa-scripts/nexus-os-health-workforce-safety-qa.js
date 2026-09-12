const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const safetyModule = require("../public/nexus-os-health-workforce-safety-pack.js");

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL ${message}`);
    process.exitCode = 1;
  } else {
    console.log(`PASS ${message}`);
  }
}

const app = read("public/app.js");
const index = read("public/index.html");
const sw = read("public/sw.js");
const server = read("server.js");
const safetyPackSource = read("public/nexus-os-health-workforce-safety-pack.js");
const pkg = JSON.parse(read("package.json"));
const suite = read("scripts/qa-suite.js");

const healthWorkflows = safetyModule.getNexusOsHealthWorkflows();
const workforceWorkflows = safetyModule.getNexusOsWorkforceWorkflows();
const policies = safetyModule.getNexusOsHealthWorkforcePolicies();
const validation = safetyModule.validateHealthWorkforceSafetyPack();

assert(validation.ok, `health/workforce safety pack validates: ${validation.issues.join(", ")}`);
assert(healthWorkflows.length >= 7, "health workflows cover chronic care, RPM/RTM, telehealth, pharmacy, and emergency boundary");
assert(workforceWorkflows.length >= 5, "workforce workflows cover applicant, employer, learning, assessment, and application preparation");
assert(policies.length >= 6, "health/workforce policies are registered");

[
  "diabetes_support",
  "hypertension_support",
  "obesity_support",
  "rpm_rtm_review",
  "telehealth_intake",
  "pharmacy_prepare",
  "emergency_boundary"
].forEach(id => assert(healthWorkflows.some(workflow => workflow.id === id), `health workflow exists: ${id}`));

[
  "applicant_profile",
  "employer_workflow",
  "learning_progress",
  "assessment_prepare",
  "application_prepare"
].forEach(id => assert(workforceWorkflows.some(workflow => workflow.id === id), `workforce workflow exists: ${id}`));

[...healthWorkflows, ...workforceWorkflows].forEach(workflow => {
  assert(workflow.platformRegistries.includes("domain_registry"), `${workflow.id} uses domain registry`);
  assert(workflow.platformRegistries.includes("workflow_registry"), `${workflow.id} uses workflow registry`);
  assert(workflow.platformRegistries.includes("policy_registry"), `${workflow.id} uses policy registry`);
  assert(workflow.platformRegistries.includes("provider_registry"), `${workflow.id} uses provider registry`);
  assert(workflow.platformRegistries.includes("memory_scope_registry"), `${workflow.id} uses memory scope registry`);
  assert(workflow.platformRegistries.includes("receipt_engine"), `${workflow.id} uses receipt engine`);
  assert(workflow.consentRequired === true, `${workflow.id} requires consent`);
  assert(workflow.confirmationRequired === true, `${workflow.id} requires confirmation`);
  assert(workflow.noExecutionAuthorizedByDefault === true, `${workflow.id} is execution-disabled by default`);
  assert(workflow.noExternalSubmissionWithoutProviderVerification === true, `${workflow.id} requires provider verification before external submission`);
});

[
  ["Nexus, help with diabetes intake", "health", "diabetes_support"],
  ["Nexus, review my blood pressure", "health", "hypertension_support"],
  ["Nexus, start obesity support", "health", "obesity_support"],
  ["Nexus, record RPM reading", "health", "rpm_rtm_review"],
  ["Nexus, open pharmacy support", "health", "pharmacy_prepare"],
  ["Nexus, help a community health worker with telehealth", "health", "telehealth_intake"],
  ["Nexus, open workforce support", "workforce", "applicant_profile"],
  ["Nexus, help an employer find workers", "workforce", "employer_workflow"],
  ["Nexus, prepare my application", "workforce", "application_prepare"]
].forEach(([command, domain, workflowId]) => {
  const result = safetyModule.evaluateHealthWorkforceSafety(command);
  assert(result.matched === true, `${command} resolves to a safety-gated workflow`);
  assert(result.domain === domain, `${command} resolves to ${domain}`);
  assert(result.workflowId === workflowId, `${command} resolves to ${workflowId}`);
  assert(result.consentRequired === true, `${command} requires consent`);
  assert(result.confirmationRequired === true, `${command} requires confirmation`);
  assert(result.noExecutionAuthorized === true, `${command} does not authorize execution`);
  assert(result.auditRequired === true, `${command} requires audit`);
});

const emergencyResult = safetyModule.evaluateHealthWorkforceSafety("My baby is not breathing emergency");
assert(emergencyResult.emergencyBoundary === true, "emergency language triggers emergency boundary");
assert(emergencyResult.userMessage.includes("Contact local emergency services"), "emergency boundary directs to local emergency services");
assert(emergencyResult.userMessage.includes("cannot dispatch"), "emergency boundary avoids dispatch claim");
assert(emergencyResult.noDiagnosis === true, "health safety forbids diagnosis");
assert(emergencyResult.noPrescribing === true, "health safety forbids prescribing");

assert(index.includes("nexus-os-health-workforce-safety-pack.js?v=nexus-os-health-workforce-safety-1"), "health/workforce safety pack loads before app");
assert(index.indexOf("nexus-os-health-workforce-safety-pack.js") < index.indexOf("/app.js?v="), "health/workforce safety pack loads before app.js");
assert(sw.includes("nexus-os-health-workforce-safety-pack.js?v=nexus-os-health-workforce-safety-1"), "service worker caches health/workforce safety pack");
assert(app.includes("validateNexusOsHealthWorkforceSafetyPack"), "app reads health/workforce safety pack");
assert(app.includes("data-nexus-os-health-workforce-safety="), "shell exposes health/workforce safety marker");
assert(server.includes("nexus-os-health-workforce-safety-pack.js"), "server imports health/workforce safety pack");
assert(server.includes("/api/nexus-os/safety/health-workforce"), "server exposes health/workforce safety status endpoint");
assert(server.includes("/api/nexus-os/safety/health-workforce/evaluate"), "server exposes health/workforce safety evaluation endpoint");
assert(server.includes("noSecretValues: true"), "server responses preserve secret redaction");
assert(server.includes("noExecutionAuthorized: true"), "server status remains non-executing");

[
  "diagnosed successfully",
  "prescription changed",
  "appointment booked",
  "application submitted",
  "provider contacted successfully",
  "emergency dispatched"
].forEach(unsafe => assert(!safetyPackSource.toLowerCase().includes(unsafe), `Rail 17 safety pack avoids unsafe claim: ${unsafe}`));

assert(pkg.scripts["qa:nexus-os-health-workforce-safety"] === "node scripts/nexus-os-health-workforce-safety-qa.js", "package alias exists");
assert(suite.includes("scripts/nexus-os-health-workforce-safety-qa.js"), "safe QA suite includes health/workforce safety QA");

if (process.exitCode) process.exit(process.exitCode);

console.log("Nexus OS health and workforce safety QA passed.");
