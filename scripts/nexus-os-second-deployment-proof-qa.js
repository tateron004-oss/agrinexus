const fs = require("fs");
const path = require("path");
const agriNexus = require("../public/nexus-os-agrinexus-deployment-profile.js");
const healthNexus = require("../public/nexus-os-healthnexus-reference-profile.js");
const controlPlane = require("../server/nexusOsControlPlane.js");

const root = path.resolve(__dirname, "..");

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

const server = read("server.js");
const profileSource = read("public/nexus-os-healthnexus-reference-profile.js");
const app = read("public/app.js");
const pkg = JSON.parse(read("package.json"));
const suite = read("scripts/qa-suite.js");

const agriProfile = agriNexus.getNexusOsAgriNexusDeploymentProfile();
const healthProfile = healthNexus.getHealthNexusReferenceProfile();
const healthValidation = healthNexus.validateHealthNexusReferenceProfile(healthProfile);
const healthDomains = healthNexus.getHealthNexusReferenceDomainPacks();
const healthWorkflows = healthNexus.getHealthNexusReferenceWorkflows();
const healthPolicies = healthNexus.getHealthNexusReferencePolicies();
const sharedCore = healthNexus.getHealthNexusReferenceSharedCore();
const controlSnapshot = controlPlane.getNexusOsControlPlaneSnapshot();

assert(healthProfile.schemaVersion === "nexus-os-deployment-profile.v1", "HealthNexus reference has deployment schema");
assert(healthProfile.deploymentId === "healthnexus-reference", "HealthNexus reference deployment id is explicit");
assert(healthProfile.displayName === "HealthNexus Reference", "HealthNexus reference branding is distinct");
assert(healthProfile.tenantConfiguration.defaultTenantId === "healthnexus-reference-default", "HealthNexus tenant id is distinct");
assert(healthProfile.tenantConfiguration.tenantIsolationRequired === true, "HealthNexus tenant isolation is required");
assert(healthProfile.tenantConfiguration.domainIsolationRequired === true, "HealthNexus domain isolation is required");
assert(healthValidation.ok, `HealthNexus profile validates: ${healthValidation.issues.join(", ")}`);

["health", "chronic_care", "telehealth", "pharmacy", "community_services"].forEach(domain => {
  assert(healthProfile.enabledDomains.includes(domain), `HealthNexus enables ${domain}`);
  assert(healthDomains.some(pack => pack.id === domain), `HealthNexus domain pack exists for ${domain}`);
});

["agriculture", "marketplace", "trade", "drone"].forEach(domain => {
  assert(healthProfile.disabledDomains.includes(domain), `HealthNexus disables ${domain}`);
  assert(!healthProfile.enabledDomains.includes(domain), `HealthNexus does not enable ${domain}`);
});

assert(agriProfile.deploymentId === "agrinexus", "AgriNexus deployment remains available");
assert(agriProfile.branding.productName === "AgriNexus", "AgriNexus branding remains separate");
assert(healthProfile.branding.productName === "HealthNexus Reference", "HealthNexus branding remains separate");
assert(agriProfile.branding.productName !== healthProfile.branding.productName, "deployment branding differs");
assert(agriProfile.tenantConfiguration.defaultTenantId !== healthProfile.tenantConfiguration.defaultTenantId, "tenant records are separated");

[
  "shell",
  "orb",
  "conversationRuntime",
  "voiceRuntime",
  "missionEngine",
  "workflowRenderer",
  "memoryPlatform",
  "confirmationSystem",
  "receiptEngine"
].forEach(coreKey => assert(String(sharedCore[coreKey]).startsWith("nexus-os-shared"), `HealthNexus uses shared ${coreKey}`));
assert(sharedCore.copiedShell === false, "HealthNexus does not copy shell");
assert(sharedCore.duplicateVoiceRuntime === false, "HealthNexus does not duplicate voice runtime");
assert(sharedCore.duplicateMissionEngine === false, "HealthNexus does not duplicate mission engine");

healthWorkflows.forEach(workflow => {
  assert(healthProfile.enabledWorkflows.includes(workflow.id), `${workflow.id} is enabled by HealthNexus profile`);
  assert(healthProfile.enabledDomains.includes(workflow.domain), `${workflow.id} uses enabled HealthNexus domain`);
  assert(workflow.executionStrategy === "prepare_or_handoff_only_until_provider_ready_and_confirmed", `${workflow.id} remains safely gated`);
  assert(workflow.confirmationRequired === true, `${workflow.id} requires confirmation`);
  assert(workflow.consentRequired === true, `${workflow.id} requires consent`);
});

healthPolicies.forEach(policy => {
  assert(policy.scope.tenant === "healthnexus-reference-default", `${policy.id} is HealthNexus tenant scoped`);
  assert(policy.dataRestrictions.includes("secret_redacted"), `${policy.id} keeps secrets redacted`);
});

[
  ["Nexus, start telehealth", "telehealth", "telehealth_prepare"],
  ["Nexus, open pharmacy support", "pharmacy", "pharmacy_question_prepare"],
  ["Nexus, review my blood pressure", "chronic_care", "chronic_care_summary"],
  ["Nexus, find community service", "community_services", "community_service_navigation"]
].forEach(([goal, domain, workflowId]) => {
  const result = healthNexus.resolveHealthNexusReferenceWorkflow(goal);
  assert(result.matched === true, `${goal} resolves in HealthNexus`);
  assert(result.domain === domain, `${goal} resolves to ${domain}`);
  assert(result.workflowId === workflowId, `${goal} resolves to ${workflowId}`);
  assert(result.noExecutionAuthorized === true, `${goal} does not authorize execution`);
});

["Nexus, sell maize", "Nexus, open marketplace", "Nexus, plan drone survey"].forEach(goal => {
  const result = healthNexus.resolveHealthNexusReferenceWorkflow(goal);
  assert(result.blockedDisabledDomain === true, `${goal} is blocked as disabled domain`);
  assert(result.noExecutionAuthorized === true, `${goal} disabled-domain block stays non-executing`);
});

assert(controlSnapshot.tenants.some(tenant => tenant.deploymentId === "agrinexus"), "control plane includes AgriNexus tenant");
assert(controlSnapshot.tenants.some(tenant => tenant.deploymentId === "healthnexus-reference"), "control plane includes HealthNexus tenant");
assert(controlSnapshot.deploymentProfiles.some(profile => profile.deploymentId === "agrinexus" && profile.enabled), "control plane includes enabled AgriNexus deployment");
assert(controlSnapshot.deploymentProfiles.some(profile => profile.deploymentId === "healthnexus-reference" && profile.enabled), "control plane includes enabled HealthNexus deployment");

assert(server.includes("nexus-os-healthnexus-reference-profile.js"), "server imports HealthNexus profile");
assert(server.includes("/api/nexus-os/deployments/healthnexus-reference"), "server exposes HealthNexus deployment endpoint");
assert(server.includes("/api/nexus-os/deployments/healthnexus-reference/resolve"), "server exposes HealthNexus resolver endpoint");
assert(!app.includes("HealthNexus Reference"), "Standard User app shell is not duplicated for HealthNexus");
assert(!profileSource.includes("function renderNexusOsApplicationShellPanel"), "HealthNexus profile does not copy shell renderer");
assert(!profileSource.includes("speechSynthesis"), "HealthNexus profile does not duplicate voice runtime");
assert(!profileSource.includes("missionLifecycle"), "HealthNexus profile does not duplicate mission engine");
assert(!profileSource.includes("TWILIO_AUTH_TOKEN="), "HealthNexus profile does not expose Twilio secret values");
assert(!profileSource.includes("STRIPE_SECRET_KEY="), "HealthNexus profile does not expose payment secret values");

assert(pkg.scripts["qa:nexus-os-second-deployment-proof"] === "node scripts/nexus-os-second-deployment-proof-qa.js", "package alias exists");
assert(suite.includes("scripts/nexus-os-second-deployment-proof-qa.js"), "safe QA suite includes second deployment proof QA");

if (process.exitCode) process.exit(process.exitCode);

console.log("Nexus OS second deployment proof QA passed.");
