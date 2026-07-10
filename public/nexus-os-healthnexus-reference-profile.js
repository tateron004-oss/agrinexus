(function initNexusOsHealthNexusReferenceProfile(root, factory) {
  const profileModule = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = profileModule;
  }
  root.NexusOsHealthNexusReferenceProfile = profileModule;
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusOsHealthNexusReferenceProfileFactory() {
  "use strict";

  const ENABLED_DOMAINS = Object.freeze(["health", "chronic_care", "telehealth", "pharmacy", "community_services"]);
  const DISABLED_DOMAINS = Object.freeze(["agriculture", "marketplace", "trade", "drone"]);
  const DISABLED_DOMAIN_TERMS = Object.freeze({
    agriculture: Object.freeze(["agriculture", "crop", "farm", "field issue"]),
    marketplace: Object.freeze(["marketplace", "agritrade", "sell maize", "sell crop", "find buyer"]),
    trade: Object.freeze(["trade", "shipment", "buyer quote"]),
    drone: Object.freeze(["drone", "aerial survey", "field survey"])
  });

  const SHARED_CORE = Object.freeze({
    shell: "nexus-os-shared-shell",
    orb: "nexus-os-shared-orb",
    conversationRuntime: "nexus-os-shared-conversation-runtime",
    voiceRuntime: "nexus-os-shared-voice-runtime",
    missionEngine: "nexus-os-shared-mission-engine",
    workflowRenderer: "nexus-os-shared-workflow-renderer",
    memoryPlatform: "nexus-os-shared-memory-platform",
    confirmationSystem: "nexus-os-shared-confirmation-system",
    receiptEngine: "nexus-os-shared-receipt-engine",
    copiedShell: false,
    duplicateVoiceRuntime: false,
    duplicateMissionEngine: false
  });

  const DOMAIN_PACKS = Object.freeze([
    domainPack("health", "Health Access Pack", ["health intake", "provider summary", "health education"], ["health_intake", "provider_summary_prepare"], ["health_no_diagnosis", "health_emergency_boundary"], ["health_intake_receipt"]),
    domainPack("chronic_care", "Chronic Care Pack", ["diabetes support", "hypertension support", "obesity support", "rpm review", "rtm review"], ["chronic_care_summary", "rpm_rtm_review"], ["chronic_care_provider_review", "no_medication_change"], ["chronic_care_receipt"]),
    domainPack("telehealth", "Telehealth Preparation Pack", ["telehealth intake", "virtual care prepare", "provider bridge"], ["telehealth_prepare"], ["no_booking_without_provider", "consent_before_provider_handoff"], ["telehealth_prepare_receipt"]),
    domainPack("pharmacy", "Pharmacy Preparation Pack", ["pharmacy support", "refill question", "medication list prepare"], ["pharmacy_question_prepare"], ["no_prescribing", "no_refill_execution"], ["pharmacy_prepare_receipt"]),
    domainPack("community_services", "Community Services Pack", ["community resource", "local service", "support referral"], ["community_service_navigation"], ["no_referral_submission_without_consent"], ["community_service_receipt"])
  ]);

  const WORKFLOWS = Object.freeze([
    workflow("health_intake", "health", ["health intake", "symptom summary", "health question"], ["reason", "symptoms", "provider context"], "health_intake_receipt"),
    workflow("chronic_care_summary", "chronic_care", ["diabetes", "hypertension", "obesity", "blood pressure", "rpm", "rtm"], ["condition", "readings", "questions"], "chronic_care_receipt"),
    workflow("telehealth_prepare", "telehealth", ["telehealth", "virtual care", "provider bridge"], ["reason", "availability", "consent"], "telehealth_prepare_receipt"),
    workflow("pharmacy_question_prepare", "pharmacy", ["pharmacy", "refill", "prescription", "medication"], ["medication name", "question", "provider"], "pharmacy_prepare_receipt"),
    workflow("community_service_navigation", "community_services", ["community service", "local support", "resource"], ["need", "location", "language"], "community_service_receipt")
  ]);

  const POLICIES = Object.freeze([
    policy("health_no_diagnosis", ["health", "chronic_care"], ["no diagnosis", "education and summary only"]),
    policy("health_emergency_boundary", ["health", "chronic_care", "telehealth"], ["tell user to contact local emergency services", "no dispatch claim"]),
    policy("pharmacy_safety", ["pharmacy"], ["no prescribing", "no refill approval", "provider review required"]),
    policy("telehealth_consent", ["telehealth"], ["consent before provider handoff", "no booking claim without provider confirmation"]),
    policy("community_service_consent", ["community_services"], ["no referral submission without consent"])
  ]);

  const PROVIDER_REQUIREMENTS = Object.freeze([
    providerRequirement("live_knowledge", ["health education source lookup", "citation rendering"], ["TAVILY_API_KEY", "BRAVE_SEARCH_API_KEY", "EXA_API_KEY"], "optional_source_backed"),
    providerRequirement("telehealth", ["intake", "room prepare"], ["DAILY_API_KEY", "ZOOM credentials"], "provider_required"),
    providerRequirement("pharmacy", ["question prepare", "provider handoff readiness"], ["NEXUS_PHARMACY_REFERRAL_EMAIL"], "provider_required"),
    providerRequirement("communications", ["email prepare", "sms prepare"], ["SENDGRID_API_KEY", "TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN"], "confirmation_required")
  ]);

  const DEPLOYMENT_PROFILE = Object.freeze({
    schemaVersion: "nexus-os-deployment-profile.v1",
    deploymentId: "healthnexus-reference",
    displayName: "HealthNexus Reference",
    nexusOsCompatibilityVersion: "1.0-genesis",
    tenantConfiguration: Object.freeze({
      defaultTenantId: "healthnexus-reference-default",
      tenantIsolationRequired: true,
      domainIsolationRequired: true
    }),
    branding: Object.freeze({
      assistantName: "Nexus",
      productName: "HealthNexus Reference",
      tone: "calm, health-literate, provider-ready",
      visualTheme: "health access, chronic care, telehealth, pharmacy, community services"
    }),
    enabledDomains: ENABLED_DOMAINS,
    disabledDomains: DISABLED_DOMAINS,
    enabledWorkflows: Object.freeze(WORKFLOWS.map(workflowItem => workflowItem.id)),
    enabledProviderTypes: Object.freeze(PROVIDER_REQUIREMENTS.map(requirement => requirement.providerType)),
    requiredPolicies: Object.freeze(POLICIES.map(policyItem => policyItem.id)),
    supportedRoles: Object.freeze(["standard_user", "provider", "admin", "partner_reviewer", "community_health_worker"]),
    supportedLanguages: Object.freeze(["en", "es", "fr", "ar", "pt", "sw"]),
    sharedCore: SHARED_CORE,
    featureFlags: Object.freeze({
      standardUserCalmShell: true,
      contextualWorkflowRenderer: true,
      approvedMemoryControls: true,
      liveExecutionRequiresProviderConfirmation: true,
      unsafeProviderActionsDefaultOff: true
    }),
    dataAndRetentionSettings: Object.freeze({
      memoryRequiresConsent: true,
      sensitiveRecordsRequireExplicitScope: true,
      providerBackedRecordsRemainReferences: true,
      deletionDeactivationArchiveSupported: true
    })
  });

  function domainPack(id, name, intents, workflows, policyReferences, receiptTypes) {
    return Object.freeze({
      schemaVersion: "nexus-os-domain-pack.v1",
      id,
      name,
      version: "1.0.0",
      intents: Object.freeze(intents),
      workflows: Object.freeze(workflows),
      policyReferences: Object.freeze(policyReferences),
      supportedRoles: Object.freeze(["standard_user", "provider", "admin", "partner_reviewer", "community_health_worker"]),
      supportedLanguages: Object.freeze(["en", "es", "fr", "ar", "pt", "sw"]),
      receiptTypes: Object.freeze(receiptTypes),
      compatibilityVersion: "nexus-os-1.0-genesis"
    });
  }

  function workflow(id, domain, triggers, inputs, receiptType) {
    return Object.freeze({
      schemaVersion: "nexus-os-workflow.v1",
      id,
      domain,
      version: "1.0.0",
      triggers: Object.freeze(triggers),
      inputs: Object.freeze(inputs),
      executionStrategy: "prepare_or_handoff_only_until_provider_ready_and_confirmed",
      confirmationRequired: true,
      consentRequired: true,
      receiptDefinition: receiptType,
      failureBehavior: "blocked_status_with_missing_requirement",
      retentionBehavior: "tenant_and_domain_scoped"
    });
  }

  function policy(id, domainScope, prohibitedTransitions) {
    return Object.freeze({
      schemaVersion: "nexus-os-policy.v1",
      id,
      version: "1.0.0",
      scope: Object.freeze({ tenant: "healthnexus-reference-default", domains: Object.freeze(domainScope) }),
      confirmationRules: Object.freeze(["visible_review_before_external_action"]),
      dataRestrictions: Object.freeze(["tenant_scoped", "domain_scoped", "secret_redacted"]),
      prohibitedTransitions: Object.freeze(prohibitedTransitions),
      auditRequirements: Object.freeze(["mission_id", "domain_id", "workflow_id", "policy_id", "outcome_state"])
    });
  }

  function providerRequirement(providerType, supportedOperations, credentialNames, readiness) {
    return Object.freeze({
      schemaVersion: "nexus-os-provider-requirement.v1",
      providerType,
      supportedOperations: Object.freeze(supportedOperations),
      credentialRequirements: Object.freeze(credentialNames),
      readiness,
      secretExposure: "never_return_values",
      executionCapabilities: Object.freeze(["readiness_check", "prepare", "execute_only_when_configured_confirmed_and_verified"])
    });
  }

  function resolveHealthNexusReferenceWorkflow(goal = "") {
    const normalized = String(goal || "").toLowerCase();
    const disabledDomainMatch = DISABLED_DOMAINS.find(domain => {
      const terms = DISABLED_DOMAIN_TERMS[domain] || Object.freeze([domain]);
      return terms.some(term => normalized.includes(term));
    });
    if (disabledDomainMatch) {
      return Object.freeze({
        matched: false,
        deploymentId: DEPLOYMENT_PROFILE.deploymentId,
        blockedDisabledDomain: true,
        disabledDomain: disabledDomainMatch,
        disabledDomains: DISABLED_DOMAINS,
        message: "That domain is not enabled for HealthNexus Reference. Nexus can open health, chronic care, telehealth, pharmacy, or community services instead.",
        noExecutionAuthorized: true
      });
    }
    const match = WORKFLOWS.find(workflowItem => workflowItem.triggers.some(trigger => normalized.includes(trigger)));
    if (!match) {
      return Object.freeze({
        matched: false,
        deploymentId: DEPLOYMENT_PROFILE.deploymentId,
        clarificationQuestion: "Do you need health intake, chronic care support, telehealth preparation, pharmacy support, or community services?",
        noExecutionAuthorized: true
      });
    }
    return Object.freeze({
      matched: true,
      deploymentId: DEPLOYMENT_PROFILE.deploymentId,
      domain: match.domain,
      workflowId: match.id,
      receiptDefinition: match.receiptDefinition,
      executionStrategy: match.executionStrategy,
      confirmationRequired: match.confirmationRequired,
      consentRequired: match.consentRequired,
      noExecutionAuthorized: true
    });
  }

  function validateHealthNexusReferenceProfile(profile = DEPLOYMENT_PROFILE) {
    const issues = [];
    if (profile.deploymentId !== "healthnexus-reference") issues.push("wrong_deployment_id");
    if (profile.sharedCore.copiedShell !== false) issues.push("copied_shell");
    if (profile.sharedCore.duplicateVoiceRuntime !== false) issues.push("duplicate_voice_runtime");
    if (profile.sharedCore.duplicateMissionEngine !== false) issues.push("duplicate_mission_engine");
    DISABLED_DOMAINS.forEach(domain => {
      if (profile.enabledDomains.includes(domain)) issues.push(`disabled_domain_enabled:${domain}`);
    });
    WORKFLOWS.forEach(workflowItem => {
      if (!profile.enabledDomains.includes(workflowItem.domain)) issues.push(`workflow_domain_disabled:${workflowItem.id}`);
      if (workflowItem.executionStrategy !== "prepare_or_handoff_only_until_provider_ready_and_confirmed") issues.push(`unsafe_execution_strategy:${workflowItem.id}`);
    });
    return Object.freeze({
      ok: issues.length === 0,
      issues: Object.freeze(issues),
      domainPackCount: DOMAIN_PACKS.length,
      workflowCount: WORKFLOWS.length,
      policyCount: POLICIES.length,
      providerRequirementCount: PROVIDER_REQUIREMENTS.length,
      disabledDomainCount: DISABLED_DOMAINS.length
    });
  }

  return Object.freeze({
    getHealthNexusReferenceProfile: () => DEPLOYMENT_PROFILE,
    getHealthNexusReferenceDomainPacks: () => DOMAIN_PACKS,
    getHealthNexusReferenceWorkflows: () => WORKFLOWS,
    getHealthNexusReferencePolicies: () => POLICIES,
    getHealthNexusReferenceProviderRequirements: () => PROVIDER_REQUIREMENTS,
    getHealthNexusReferenceSharedCore: () => SHARED_CORE,
    resolveHealthNexusReferenceWorkflow,
    validateHealthNexusReferenceProfile
  });
});
