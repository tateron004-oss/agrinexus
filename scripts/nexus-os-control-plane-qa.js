const fs = require("fs");
const path = require("path");
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
const app = read("public/app.js");
const index = read("public/index.html");
const pkg = JSON.parse(read("package.json"));
const suite = read("scripts/qa-suite.js");
const moduleSource = read("server/nexusOsControlPlane.js");

const snapshot = controlPlane.getNexusOsControlPlaneSnapshot();
const validation = controlPlane.validateNexusOsControlPlane(snapshot);

assert(snapshot.schemaVersion === "nexus-os-control-plane.v1", "control plane schema is versioned");
assert(snapshot.protected === true, "control plane is protected");
assert(snapshot.standardUserExposure === false, "control plane is not exposed to Standard Users");
assert(snapshot.noSecretValues === true, "control plane never returns secret values");
assert(snapshot.commercialBillingRequired === false, "control plane does not require billing system");
assert(validation.ok, `control plane validates: ${validation.issues.join(", ")}`);

assert(Array.isArray(snapshot.tenants) && snapshot.tenants.length >= 2, "control plane represents more than one tenant");
assert(snapshot.tenants.some(tenant => tenant.tenantId === "agrinexus-default" && tenant.status === "active"), "AgriNexus tenant is active");
assert(snapshot.tenants.some(tenant => tenant.tenantId === "nexus-reference-reserved"), "second tenant record is reserved for later deployment proof");
snapshot.tenants.forEach(tenant => {
  assert(tenant.isolation.tenantIsolationRequired === true, `${tenant.tenantId} requires tenant isolation`);
  assert(tenant.isolation.domainIsolationRequired === true, `${tenant.tenantId} requires domain isolation`);
  assert(String(tenant.isolation.dataBoundary).includes("tenant"), `${tenant.tenantId} has tenant-scoped data boundary`);
});

assert(snapshot.deploymentProfiles.length >= 2, "control plane tracks multiple deployment profiles");
assert(snapshot.deploymentProfiles.some(profile => profile.deploymentId === "agrinexus" && profile.enabled === true), "AgriNexus deployment profile is enabled");
assert(snapshot.deploymentProfiles.some(profile => profile.deploymentId === "reference-reserved" && profile.enabled === false), "reference deployment is reserved but disabled");
assert(snapshot.branding.agrinexus.productName === "AgriNexus", "AgriNexus branding is separated");
assert(snapshot.branding["reference-reserved"].productName === "Nexus Reference", "reserved deployment branding is separated");

[
  "agriculture",
  "marketplace",
  "logistics",
  "workforce",
  "learning",
  "community_health",
  "communications",
  "payments"
].forEach(domainId => assert(snapshot.enabledDomains.some(domain => domain.domainId === domainId && domain.enabled), `${domainId} domain is enabled`));

snapshot.workflowVersions.forEach(workflow => {
  assert(workflow.version === "1.0.0", `${workflow.workflowId} has workflow version`);
  assert(workflow.executionStrategy === "prepare_or_handoff_only_until_provider_ready_and_confirmed", `${workflow.workflowId} remains safely gated`);
});

snapshot.providerConfigurationMetadata.forEach(provider => {
  assert(Array.isArray(provider.credentialNames), `${provider.providerType} lists credential names`);
  assert(provider.secretValuesReturned === false, `${provider.providerType} does not return secret values`);
  assert(provider.valuesRedacted === true, `${provider.providerType} redacts values`);
  assert(!JSON.stringify(provider).includes("sk_live_"), `${provider.providerType} has no literal payment secret`);
  assert(!JSON.stringify(provider).includes("TWILIO_AUTH_TOKEN="), `${provider.providerType} has no literal Twilio secret`);
});

assert(snapshot.policyAssignment.length >= 6, "policy assignments are present");
snapshot.policyAssignment.forEach(policy => {
  assert(policy.scope.tenant === "agrinexus-default", `${policy.policyId} is tenant scoped`);
  assert(Array.isArray(policy.dataRestrictions) && policy.dataRestrictions.includes("secret_redacted"), `${policy.policyId} requires secret redaction`);
  assert(Array.isArray(policy.auditRequirements) && policy.auditRequirements.includes("outcome_state"), `${policy.policyId} has audit requirements`);
});

assert(controlPlane.canAccessControlPlane("admin") === true, "admin role can access control plane");
assert(controlPlane.canAccessControlPlane("partner_reviewer") === true, "partner reviewer role can access control plane");
assert(controlPlane.canAccessControlPlane("standard_user") === false, "standard user cannot access control plane");
assert(controlPlane.canAccessControlPlane("") === false, "anonymous user cannot access control plane");

const forbidden = controlPlane.buildForbiddenControlPlaneResponse("standard_user");
assert(forbidden.ok === false && forbidden.error === "control_plane_forbidden", "forbidden response is explicit");
assert(forbidden.standardUserExposure === false, "forbidden response preserves Standard User non-exposure");
assert(forbidden.noSecretValues === true, "forbidden response redacts secrets");

assert(snapshot.queueHealth.externalActionQueueEnabled === false, "control plane external action queue is disabled by default");
assert(snapshot.queueHealth.retryRequiresReview === true, "queue retry requires review");
assert(snapshot.failedActions.externalCompletionClaimed === false, "failed actions do not claim external completion");
assert(snapshot.auditVisibility.providerReceiptsRequireReviewerRole === true, "provider receipt visibility requires reviewer role");
assert(snapshot.dataSettings.tenantScoped === true, "data settings are tenant scoped");
assert(snapshot.dataSettings.domainScoped === true, "data settings are domain scoped");

assert(server.includes("nexusOsControlPlane"), "server imports control plane module");
assert(server.includes("/api/nexus-os/control-plane"), "server exposes protected control plane endpoint");
assert(server.includes("buildForbiddenControlPlaneResponse"), "server denies unauthorized control plane requests");
assert(server.includes("canAccessControlPlane"), "server checks control plane role access");
assert(!index.includes("nexusOsControlPlane"), "index does not load control plane module");
assert(!index.includes("nexus-os-control-plane"), "index has no control plane script tag");
assert(!app.includes("nexus-os-control-plane"), "Standard User app does not expose control plane route");

[
  "process.env.TWILIO_AUTH_TOKEN",
  "process.env.STRIPE_SECRET_KEY",
  "process.env.SENDGRID_API_KEY",
  "process.env.TAVILY_API_KEY"
].forEach(secretAccess => assert(!moduleSource.includes(secretAccess), `control plane avoids direct secret value access: ${secretAccess}`));

assert(pkg.scripts["qa:nexus-os-control-plane"] === "node scripts/nexus-os-control-plane-qa.js", "package alias exists");
assert(suite.includes("scripts/nexus-os-control-plane-qa.js"), "safe QA suite includes control plane QA");

if (process.exitCode) process.exit(process.exitCode);

console.log("Nexus OS control plane QA passed.");
