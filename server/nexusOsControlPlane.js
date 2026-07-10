const deploymentProfileModule = require("../public/nexus-os-agrinexus-deployment-profile.js");

const CONTROL_PLANE_ROLES = Object.freeze(["admin", "partner_reviewer"]);

function normalizeRole(role = "") {
  return String(role || "").trim().toLowerCase().replace(/[^a-z0-9_:-]+/g, "_");
}

function getRequestControlPlaneRole(req) {
  return normalizeRole(req?.headers?.["x-nexus-role"] || req?.headers?.["x-agrinexus-role"] || "");
}

function canAccessControlPlane(role = "") {
  return CONTROL_PLANE_ROLES.includes(normalizeRole(role));
}

function buildForbiddenControlPlaneResponse(role = "") {
  return Object.freeze({
    ok: false,
    error: "control_plane_forbidden",
    role: normalizeRole(role) || "anonymous",
    requiredRoles: CONTROL_PLANE_ROLES,
    reason: "Nexus control plane metadata is restricted to institutional reviewer roles.",
    standardUserExposure: false,
    noSecretValues: true
  });
}

function providerMetadata(providerType, credentialNames, capabilities, readiness) {
  const configuredCredentialNames = credentialNames.filter(name => Boolean(process.env[name]));
  const missingCredentialNames = credentialNames.filter(name => !process.env[name]);
  return Object.freeze({
    providerType,
    capabilities: Object.freeze(capabilities),
    readiness,
    credentialNames: Object.freeze(credentialNames),
    configuredCredentialNames: Object.freeze(configuredCredentialNames),
    missingCredentialNames: Object.freeze(missingCredentialNames),
    secretValuesReturned: false,
    valuesRedacted: true
  });
}

function getNexusOsControlPlaneSnapshot() {
  const profile = deploymentProfileModule.getNexusOsAgriNexusDeploymentProfile();
  const validation = deploymentProfileModule.validateAgriNexusDeploymentProfile(profile);
  const workflows = deploymentProfileModule.getNexusOsAgriNexusWorkflows();
  const policies = deploymentProfileModule.getNexusOsAgriNexusPolicies();
  const providerRequirements = deploymentProfileModule.getNexusOsAgriNexusProviderRequirements();
  const enabledDomainSet = new Set(profile.enabledDomains || []);

  return Object.freeze({
    ok: validation.ok,
    schemaVersion: "nexus-os-control-plane.v1",
    controlPlaneId: "nexus-os-genesis-control-plane",
    protected: true,
    standardUserExposure: false,
    noSecretValues: true,
    commercialBillingRequired: false,
    tenants: Object.freeze([
      Object.freeze({
        tenantId: profile.tenantConfiguration.defaultTenantId,
        deploymentId: profile.deploymentId,
        displayName: profile.displayName,
        status: "active",
        isolation: Object.freeze({
          tenantIsolationRequired: profile.tenantConfiguration.tenantIsolationRequired,
          domainIsolationRequired: profile.tenantConfiguration.domainIsolationRequired,
          dataBoundary: "tenant_domain_and_purpose_scoped"
        }),
        allowedRoles: Object.freeze(profile.supportedRoles),
        allowedLanguages: Object.freeze(profile.supportedLanguages)
      }),
      Object.freeze({
        tenantId: "nexus-reference-reserved",
        deploymentId: "reference-reserved",
        displayName: "Nexus Reference Reserved",
        status: "reserved_for_second_deployment_proof",
        isolation: Object.freeze({
          tenantIsolationRequired: true,
          domainIsolationRequired: true,
          dataBoundary: "separate_tenant_configuration"
        }),
        allowedRoles: Object.freeze(["standard_user", "provider", "admin"]),
        allowedLanguages: Object.freeze(["en"])
      })
    ]),
    deploymentProfiles: Object.freeze([
      Object.freeze({
        deploymentId: profile.deploymentId,
        displayName: profile.displayName,
        compatibilityVersion: profile.nexusOsCompatibilityVersion,
        validation,
        enabled: true
      }),
      Object.freeze({
        deploymentId: "reference-reserved",
        displayName: "Nexus Reference Reserved",
        compatibilityVersion: profile.nexusOsCompatibilityVersion,
        validation: Object.freeze({ ok: true, issues: Object.freeze([]), reserved: true }),
        enabled: false
      })
    ]),
    branding: Object.freeze({
      [profile.deploymentId]: profile.branding,
      "reference-reserved": Object.freeze({
        assistantName: "Nexus",
        productName: "Nexus Reference",
        tone: "calm, practical, voice-first",
        visualTheme: "neutral reference deployment"
      })
    }),
    enabledDomains: Object.freeze(
      profile.enabledDomains.map(domainId => Object.freeze({
        deploymentId: profile.deploymentId,
        domainId,
        enabled: enabledDomainSet.has(domainId),
        standardUserVisible: true
      }))
    ),
    workflowVersions: Object.freeze(
      workflows.map(workflow => Object.freeze({
        workflowId: workflow.id,
        domain: workflow.domain,
        version: workflow.version,
        deploymentId: profile.deploymentId,
        enabled: profile.enabledWorkflows.includes(workflow.id),
        executionStrategy: workflow.executionStrategy
      }))
    ),
    providerConfigurationMetadata: Object.freeze(
      providerRequirements.map(requirement => providerMetadata(
        requirement.providerType,
        requirement.credentialRequirements,
        requirement.supportedOperations,
        requirement.readiness
      ))
    ),
    policyAssignment: Object.freeze(
      policies.map(policy => Object.freeze({
        policyId: policy.id,
        deploymentId: profile.deploymentId,
        scope: policy.scope,
        requiredRoles: policy.requiredRoles,
        dataRestrictions: policy.dataRestrictions,
        auditRequirements: policy.auditRequirements
      }))
    ),
    roles: Object.freeze(profile.supportedRoles.map(role => Object.freeze({
      role,
      controlPlaneAccess: canAccessControlPlane(role),
      standardUserExposure: role === "standard_user" ? false : undefined
    }))),
    languages: Object.freeze(profile.supportedLanguages.map(language => Object.freeze({
      language,
      enabled: true,
      tenantScoped: true
    }))),
    featureFlags: profile.featureFlags,
    queueHealth: Object.freeze({
      pendingQueueVisibleToStandardUser: false,
      externalActionQueueEnabled: false,
      failedActionCount: 0,
      retryRequiresReview: true
    }),
    failedActions: Object.freeze({
      items: Object.freeze([]),
      visibleToStandardUser: false,
      externalCompletionClaimed: false
    }),
    auditVisibility: Object.freeze({
      missionReceiptsEnabled: true,
      providerReceiptsRequireReviewerRole: true,
      controlPlaneAuditRequiresRole: CONTROL_PLANE_ROLES,
      standardUserCanSeeOwnReceiptsOnly: true
    }),
    dataSettings: Object.freeze({
      memoryRequiresConsent: profile.dataAndRetentionSettings.memoryRequiresConsent,
      sensitiveRecordsRequireExplicitScope: profile.dataAndRetentionSettings.sensitiveRecordsRequireExplicitScope,
      providerBackedRecordsRemainReferences: profile.dataAndRetentionSettings.providerBackedRecordsRemainReferences,
      deletionDeactivationArchiveSupported: profile.dataAndRetentionSettings.deletionDeactivationArchiveSupported,
      tenantScoped: true,
      domainScoped: true
    })
  });
}

function validateNexusOsControlPlane(snapshot = getNexusOsControlPlaneSnapshot()) {
  const issues = [];
  if (!snapshot.protected) issues.push("control_plane_not_protected");
  if (snapshot.standardUserExposure !== false) issues.push("standard_user_exposure_enabled");
  if (snapshot.noSecretValues !== true) issues.push("secret_values_not_redacted");
  if (!snapshot.tenants.some(tenant => tenant.tenantId === "agrinexus-default")) issues.push("missing_agrinexus_tenant");
  if (snapshot.tenants.length < 2) issues.push("missing_second_tenant_record");
  if (!snapshot.providerConfigurationMetadata.every(provider => provider.secretValuesReturned === false && provider.valuesRedacted === true)) issues.push("provider_secret_values_exposed");
  if (!snapshot.workflowVersions.every(workflow => workflow.executionStrategy === "prepare_or_handoff_only_until_provider_ready_and_confirmed")) issues.push("unsafe_workflow_execution_strategy");
  if (!snapshot.roles.some(role => role.role === "standard_user" && role.controlPlaneAccess === false)) issues.push("standard_user_control_plane_access_allowed");
  if (!snapshot.queueHealth || snapshot.queueHealth.externalActionQueueEnabled !== false) issues.push("unsafe_queue_state");
  return Object.freeze({
    ok: issues.length === 0,
    issues: Object.freeze(issues),
    tenantCount: snapshot.tenants.length,
    deploymentProfileCount: snapshot.deploymentProfiles.length,
    providerMetadataCount: snapshot.providerConfigurationMetadata.length,
    policyAssignmentCount: snapshot.policyAssignment.length,
    roleCount: snapshot.roles.length,
    languageCount: snapshot.languages.length
  });
}

module.exports = Object.freeze({
  CONTROL_PLANE_ROLES,
  canAccessControlPlane,
  getRequestControlPlaneRole,
  buildForbiddenControlPlaneResponse,
  getNexusOsControlPlaneSnapshot,
  validateNexusOsControlPlane
});
