const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const deploymentModule = require("../public/nexus-os-agrinexus-deployment-profile.js");

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
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

const profile = deploymentModule.getNexusOsAgriNexusDeploymentProfile();
const domainPacks = deploymentModule.getNexusOsAgriNexusDomainPacks();
const workflows = deploymentModule.getNexusOsAgriNexusWorkflows();
const policies = deploymentModule.getNexusOsAgriNexusPolicies();
const providerRequirements = deploymentModule.getNexusOsAgriNexusProviderRequirements();
const validation = deploymentModule.validateAgriNexusDeploymentProfile(profile);

assert(profile.schemaVersion === "nexus-os-deployment-profile.v1", "deployment profile has versioned schema");
assert(profile.deploymentId === "agrinexus", "AgriNexus deployment id is explicit");
assert(profile.nexusOsCompatibilityVersion === "1.0-genesis", "profile declares Nexus OS compatibility");
assert(profile.tenantConfiguration.tenantIsolationRequired === true, "tenant isolation is required");
assert(profile.tenantConfiguration.domainIsolationRequired === true, "domain isolation is required");
assert(profile.dataAndRetentionSettings.memoryRequiresConsent === true, "memory consent remains required");
assert(profile.featureFlags.unsafeProviderActionsDefaultOff === true, "unsafe provider actions remain default-off");
assert(validation.ok, `deployment profile validates: ${validation.issues.join(", ")}`);
assert(domainPacks.length >= 11, "AgriNexus domain packs cover existing capability lanes");
assert(workflows.length >= 8, "representative AgriNexus workflows are registered");
assert(policies.length >= 6, "policy pack references are registered");
assert(providerRequirements.length >= 6, "provider requirements are declared separately from UI");

[
  "agriculture",
  "marketplace",
  "trade",
  "logistics",
  "workforce",
  "learning",
  "community_health",
  "drone",
  "communications",
  "payments",
  "community_services"
].forEach(domainId => {
  assert(profile.enabledDomains.includes(domainId), `profile enables ${domainId}`);
  assert(domainPacks.some(pack => pack.id === domainId), `domain pack exists for ${domainId}`);
});

[
  ["sell maize", "sell_maize", "marketplace"],
  ["track shipment", "track_shipment", "logistics"],
  ["record blood pressure", "record_blood_pressure", "community_health"],
  ["find work", "find_work", "workforce"],
  ["resume learning", "resume_learning", "learning"],
  ["plan drone survey", "plan_drone_survey", "drone"],
  ["prepare sms", "prepare_communication", "communications"],
  ["review payment", "review_payment", "payments"]
].forEach(([goal, workflowId, domain]) => {
  const result = deploymentModule.resolveAgriNexusWorkflowForGoal(goal);
  assert(result.matched === true, `${goal} resolves through deployment profile`);
  assert(result.workflowId === workflowId, `${goal} resolves to ${workflowId}`);
  assert(result.domain === domain, `${goal} resolves to ${domain}`);
  assert(result.noExecutionAuthorized === true, `${goal} remains non-executing before confirmation/provider readiness`);
});

workflows.forEach(workflow => {
  assert(workflow.executionStrategy === "prepare_or_handoff_only_until_provider_ready_and_confirmed", `${workflow.id} uses safe execution strategy`);
  assert(workflow.retentionBehavior.includes("domain_scoped"), `${workflow.id} keeps retention domain-scoped`);
  assert(profile.enabledWorkflows.includes(workflow.id), `${workflow.id} is enabled by deployment profile`);
});

providerRequirements.forEach(requirement => {
  assert(requirement.secretExposure === "never_return_values", `${requirement.providerType} never exposes secret values`);
  assert(Array.isArray(requirement.credentialRequirements), `${requirement.providerType} lists credential names only`);
});

assert(index.includes("nexus-os-agrinexus-deployment-profile.js?v=nexus-os-agrinexus-deployment-1"), "AgriNexus deployment profile loads before app runtime");
assert(index.indexOf("nexus-os-agrinexus-deployment-profile.js") < index.indexOf("/app.js?v="), "deployment profile loads before app.js");
assert(sw.includes("nexus-os-agrinexus-deployment-profile.js?v=nexus-os-agrinexus-deployment-1"), "service worker caches deployment profile module");
assert(app.includes("getNexusOsActiveDeploymentProfile"), "app reads active deployment profile");
assert(app.includes("renderNexusOsDeploymentProfileSummary"), "app renders deployment profile summary");
assert(app.includes("data-nexus-os-deployment-profile="), "shell exposes stable deployment profile marker");
assert(app.includes("data-nexus-os-domain-pack-count="), "shell exposes domain pack count marker");
assert(server.includes("nexus-os-agrinexus-deployment-profile.js"), "server imports deployment profile module");
assert(server.includes("/api/nexus-os/deployments/agrinexus"), "server exposes AgriNexus deployment endpoint");
assert(server.includes("/api/nexus/deployment/profile"), "server exposes generic active deployment endpoint");
assert(server.includes("noSecretValues: true"), "deployment endpoints assert secret redaction");
assert(server.includes("noExecutionAuthorized: true"), "deployment endpoints remain non-executing");

[
  "TWILIO_AUTH_TOKEN",
  "TAVILY_API_KEY",
  "SENDGRID_API_KEY",
  "STRIPE_SECRET_KEY"
].forEach(secretName => {
  const literalAssignment = new RegExp(`${secretName}\\s*[:=]\\s*["'][^"']+["']`);
  assert(!literalAssignment.test(app + index + server), `${secretName} is not assigned to a literal secret value`);
});

assert(
  packageJson.scripts["qa:nexus-os-agrinexus-deployment"] === "node scripts/nexus-os-agrinexus-deployment-qa.js",
  "package alias exists"
);
assert(qaSuite.includes("scripts/nexus-os-agrinexus-deployment-qa.js"), "safe QA suite includes AgriNexus deployment QA");

if (process.exitCode) process.exit(process.exitCode);

console.log("Nexus OS AgriNexus deployment QA passed.");
