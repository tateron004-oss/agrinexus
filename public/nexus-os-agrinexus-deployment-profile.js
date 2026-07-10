(function initNexusOsAgriNexusDeploymentProfile(root, factory) {
  const profileModule = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = profileModule;
  }
  root.NexusOsAgriNexusDeploymentProfile = profileModule;
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusOsAgriNexusDeploymentProfileFactory() {
  "use strict";

  const DOMAIN_PACKS = Object.freeze([
    domainPack("agriculture", "Agriculture Pack", ["crop_support", "farm_planning", "field_visit", "weather_context"], ["source_backed_guidance", "expert_review"], ["agriculture_safety", "no_yield_guarantee"], ["agriculture_summary", "field_visit_receipt"]),
    domainPack("marketplace", "Marketplace Pack", ["buyer_seller_matching", "listing_review", "quote_preparation"], ["marketplace_prepare", "vendor_review"], ["no_purchase_without_confirmation", "no_vendor_contact_without_review"], ["marketplace_preview", "buyer_seller_receipt"]),
    domainPack("trade", "Trade Pack", ["price_check", "trade_terms_review", "shipment_readiness"], ["trade_prepare", "market_source_lookup"], ["no_trade_execution_without_provider"], ["trade_readiness_receipt"]),
    domainPack("logistics", "Logistics Pack", ["route_planning", "field_visit_routing", "cold_chain_check"], ["typed_route_preview", "maps_fallback"], ["no_geolocation_without_permission", "no_dispatch_without_confirmation"], ["route_plan_receipt"]),
    domainPack("workforce", "Workforce Pack", ["job_search", "applicant_profile", "employer_intake"], ["workforce_prepare", "skills_match"], ["no_application_submission_without_review"], ["workforce_plan_receipt"]),
    domainPack("learning", "Learning Pack", ["course_search", "literacy_support", "progress_review"], ["learning_prepare", "lms_lookup"], ["no_enrollment_without_provider_confirmation"], ["learning_plan_receipt"]),
    domainPack("community_health", "Community Health Pack", ["blood_pressure_review", "chronic_care_summary", "telehealth_intake", "pharmacy_prepare", "mobile_clinic_prepare"], ["health_intake", "provider_summary"], ["no_diagnosis", "no_prescribing", "emergency_boundary"], ["provider_summary_receipt", "health_intake_receipt"]),
    domainPack("drone", "Drone Pack", ["survey_planning", "field_evidence_review"], ["drone_intake", "field_agent_review"], ["no_flight_execution_without_operator"], ["drone_plan_receipt"]),
    domainPack("communications", "Communications Pack", ["message_draft", "phone_script", "whatsapp_prepare", "email_prepare"], ["communication_prepare", "provider_adapter_selection"], ["no_silent_send", "explicit_confirmation_required"], ["communication_draft_receipt"]),
    domainPack("payments", "Payments Pack", ["payment_readiness", "invoice_review", "refund_review"], ["payment_prepare", "sandbox_status"], ["no_payment_without_confirmation", "sandbox_default"], ["payment_readiness_receipt"]),
    domainPack("community_services", "Community Services Pack", ["resource_navigation", "referral_prepare", "relief_intake"], ["resource_prepare", "partner_review"], ["no_referral_submission_without_consent"], ["community_service_receipt"])
  ]);

  const WORKFLOWS = Object.freeze([
    workflow("sell_maize", "marketplace", ["sell maize", "sell corn", "find buyer"], ["crop", "quantity", "location"], "marketplace_prepare", "marketplace_preview"),
    workflow("track_shipment", "logistics", ["track shipment", "shipment status", "delivery route"], ["origin", "destination", "shipment details"], "typed_route_preview", "route_plan_receipt"),
    workflow("record_blood_pressure", "community_health", ["record blood pressure", "bp reading", "hypertension"], ["systolic", "diastolic", "symptoms"], "health_intake", "health_intake_receipt"),
    workflow("find_work", "workforce", ["find work", "farm jobs", "job search"], ["skills", "location", "availability"], "workforce_prepare", "workforce_plan_receipt"),
    workflow("resume_learning", "learning", ["resume learning", "open training", "course"], ["topic", "level", "language"], "learning_prepare", "learning_plan_receipt"),
    workflow("plan_drone_survey", "drone", ["drone survey", "field survey", "aerial survey"], ["field location", "purpose", "operator review"], "drone_intake", "drone_plan_receipt"),
    workflow("prepare_communication", "communications", ["prepare sms", "prepare whatsapp", "prepare email", "prepare phone call"], ["recipient", "purpose", "message preview"], "communication_prepare", "communication_draft_receipt"),
    workflow("review_payment", "payments", ["review payment", "invoice", "payment readiness"], ["amount", "recipient", "reason"], "payment_prepare", "payment_readiness_receipt")
  ]);

  const POLICIES = Object.freeze([
    policy("agriculture_safety", ["agriculture"], ["no pesticide prescription", "no yield guarantee", "source confidence required"]),
    policy("health_safety", ["community_health"], ["no diagnosis", "no prescribing", "provider review encouraged", "emergency boundary"]),
    policy("communications_confirmation", ["communications"], ["visible recipient", "message preview", "explicit confirmation", "no silent send"]),
    policy("payment_confirmation", ["payments"], ["visible amount", "visible recipient", "explicit confirmation", "sandbox default"]),
    policy("location_permission", ["logistics"], ["typed location default", "no browser geolocation without permission", "no dispatch"]),
    policy("drone_operator_required", ["drone"], ["no flight execution", "operator/provider review required"])
  ]);

  const PROVIDER_REQUIREMENTS = Object.freeze([
    providerRequirement("live_knowledge", ["source_lookup", "citation_rendering"], ["TAVILY_API_KEY", "BRAVE_SEARCH_API_KEY", "EXA_API_KEY"], "optional_source_backed"),
    providerRequirement("maps", ["typed_route_preview", "fallback_url"], ["GOOGLE_MAPS_API_KEY"], "fallback_available"),
    providerRequirement("communications", ["sms", "whatsapp", "email", "phone_script"], ["TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "SENDGRID_API_KEY"], "confirmation_required"),
    providerRequirement("telehealth", ["intake", "room_prepare"], ["DAILY_API_KEY", "ZOOM credentials"], "provider_required"),
    providerRequirement("payments", ["sandbox_payment_review"], ["STRIPE_SECRET_KEY"], "sandbox_disabled_by_default"),
    providerRequirement("lms", ["course_lookup", "enrollment_prepare"], ["MOODLE_BASE_URL", "MOODLE_TOKEN"], "provider_required")
  ]);

  const DEPLOYMENT_PROFILE = Object.freeze({
    schemaVersion: "nexus-os-deployment-profile.v1",
    deploymentId: "agrinexus",
    displayName: "AgriNexus",
    nexusOsCompatibilityVersion: "1.0-genesis",
    tenantConfiguration: Object.freeze({
      defaultTenantId: "agrinexus-default",
      tenantIsolationRequired: true,
      domainIsolationRequired: true
    }),
    branding: Object.freeze({
      assistantName: "Nexus",
      productName: "AgriNexus",
      tone: "calm, practical, voice-first",
      visualTheme: "agriculture, health access, workforce opportunity"
    }),
    enabledDomains: Object.freeze(DOMAIN_PACKS.map(pack => pack.id)),
    enabledWorkflows: Object.freeze(WORKFLOWS.map(item => item.id)),
    enabledProviderTypes: Object.freeze(PROVIDER_REQUIREMENTS.map(item => item.providerType)),
    requiredPolicies: Object.freeze(POLICIES.map(item => item.id)),
    supportedRoles: Object.freeze(["standard_user", "provider", "admin", "field_agent", "partner_reviewer"]),
    supportedLanguages: Object.freeze(["en", "es", "fr", "ar", "pt", "sw"]),
    featureFlags: Object.freeze({
      standardUserCalmShell: true,
      contextualWorkflowRenderer: true,
      approvedMemoryControls: true,
      liveExecutionRequiresProviderConfirmation: true,
      unsafeProviderActionsDefaultOff: true
    }),
    geography: Object.freeze(["global", "rural", "Africa-ready", "United States-ready"]),
    offlineBehavior: "local queue and local fallback copy only; no hidden external execution",
    lowBandwidthBehavior: "text-first workflows, deferred heavy panels, provider fallback states",
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
      description: `${name} migrated into the AgriNexus deployment profile.`,
      intents: Object.freeze(intents),
      entities: Object.freeze(["person", "location", "organization", "date", "source", "provider", "receipt"]),
      workflows: Object.freeze(workflows),
      policyReferences: Object.freeze(policyReferences),
      providerRequirements: Object.freeze([]),
      memoryPermissions: Object.freeze(["session", "mission", "approved_profile", "domain_scoped"]),
      supportedRoles: Object.freeze(["standard_user", "provider", "admin", "partner_reviewer"]),
      supportedLanguages: Object.freeze(["en", "es", "fr", "ar", "pt", "sw"]),
      receiptTypes: Object.freeze(receiptTypes),
      escalationRules: Object.freeze(["blocked external execution requires confirmation/provider readiness"]),
      compatibilityVersion: "nexus-os-1.0-genesis"
    });
  }

  function workflow(id, domain, triggers, requiredFields, providerCapability, receiptType) {
    return Object.freeze({
      schemaVersion: "nexus-os-workflow.v1",
      id,
      domain,
      version: "1.0.0",
      triggers: Object.freeze(triggers),
      inputs: Object.freeze(requiredFields),
      questions: Object.freeze(requiredFields.map(field => `What is the ${field}?`)),
      validators: Object.freeze(["required_field", "safe_text", "domain_policy_check"]),
      branching: Object.freeze(["missing_information", "confirmation_required", "provider_unavailable"]),
      stateRequirements: Object.freeze(["listen", "understand", "collect", "prepare", "confirm", "record"]),
      safetyClassification: domain === "payments" || domain === "community_health" || domain === "communications" ? "high_review_required" : "standard_review_required",
      consentRequirements: Object.freeze(domain === "community_health" ? ["health_context_consent", "provider_summary_consent"] : ["action_review_consent"]),
      providerCapability,
      executionStrategy: "prepare_or_handoff_only_until_provider_ready_and_confirmed",
      verificationStrategy: "provider_result_or_user_external_completion_evidence",
      receiptDefinition: receiptType,
      completionCriteria: "user-visible prepared packet or verified provider result",
      failureBehavior: "blocked_status_with_missing_requirement",
      retryBehavior: "safe_retry_after_missing_information_or_provider_status_changes",
      retentionBehavior: "domain_scoped_with_user_review"
    });
  }

  function policy(id, domainScope, prohibitedActions) {
    return Object.freeze({
      schemaVersion: "nexus-os-policy.v1",
      id,
      version: "1.0.0",
      scope: Object.freeze({ domains: Object.freeze(domainScope), tenant: "agrinexus-default" }),
      conditions: Object.freeze(["external_action", "sensitive_information", "provider_handoff"]),
      requiredRoles: Object.freeze(["standard_user", "provider", "admin"]),
      consentRequirements: Object.freeze(["explicit_user_consent_when_data_shared"]),
      confirmationRules: Object.freeze(["visible_review_before_external_action"]),
      dataRestrictions: Object.freeze(["domain_scoped", "tenant_scoped", "secret_redacted"]),
      escalationActions: Object.freeze(["block", "clarify", "human_review"]),
      prohibitedTransitions: Object.freeze(prohibitedActions),
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
      executionCapabilities: Object.freeze(["readiness_check", "prepare", "execute_only_when_configured_confirmed_and_verified"]),
      verificationCapabilities: Object.freeze(["provider_metadata", "receipt_evidence", "safe_error_normalization"])
    });
  }

  function resolveAgriNexusWorkflowForGoal(goal = "") {
    const normalized = String(goal || "").toLowerCase();
    const match = WORKFLOWS.find(item => item.triggers.some(trigger => normalized.includes(trigger)));
    if (!match) {
      return Object.freeze({
        matched: false,
        deploymentId: DEPLOYMENT_PROFILE.deploymentId,
        clarificationQuestion: "What would you like Nexus to help with in AgriNexus: agriculture, health, learning, work, trade, logistics, communication, or payments?",
        noExecutionAuthorized: true
      });
    }
    return Object.freeze({
      matched: true,
      deploymentId: DEPLOYMENT_PROFILE.deploymentId,
      domain: match.domain,
      workflowId: match.id,
      providerCapability: match.providerCapability,
      receiptDefinition: match.receiptDefinition,
      safetyClassification: match.safetyClassification,
      executionStrategy: match.executionStrategy,
      noExecutionAuthorized: true
    });
  }

  function validateAgriNexusDeploymentProfile(profile = DEPLOYMENT_PROFILE) {
    const issues = [];
    const domainIds = new Set(DOMAIN_PACKS.map(pack => pack.id));
    const policyIds = new Set(POLICIES.map(policyItem => policyItem.id));
    for (const domainId of profile.enabledDomains || []) {
      if (!domainIds.has(domainId)) issues.push(`missing_domain_pack:${domainId}`);
    }
    for (const policyId of profile.requiredPolicies || []) {
      if (!policyIds.has(policyId)) issues.push(`missing_policy:${policyId}`);
    }
    for (const workflowItem of WORKFLOWS) {
      if (!domainIds.has(workflowItem.domain)) issues.push(`workflow_domain_missing:${workflowItem.id}`);
      if (workflowItem.executionStrategy !== "prepare_or_handoff_only_until_provider_ready_and_confirmed") issues.push(`unsafe_execution_strategy:${workflowItem.id}`);
    }
    return Object.freeze({
      ok: issues.length === 0,
      issues: Object.freeze(issues),
      domainPackCount: DOMAIN_PACKS.length,
      workflowCount: WORKFLOWS.length,
      policyCount: POLICIES.length,
      providerRequirementCount: PROVIDER_REQUIREMENTS.length
    });
  }

  function getNexusOsAgriNexusDeploymentProfile() {
    return DEPLOYMENT_PROFILE;
  }

  function getNexusOsAgriNexusDomainPacks() {
    return DOMAIN_PACKS;
  }

  function getNexusOsAgriNexusWorkflows() {
    return WORKFLOWS;
  }

  function getNexusOsAgriNexusPolicies() {
    return POLICIES;
  }

  function getNexusOsAgriNexusProviderRequirements() {
    return PROVIDER_REQUIREMENTS;
  }

  return Object.freeze({
    getNexusOsAgriNexusDeploymentProfile,
    getNexusOsAgriNexusDomainPacks,
    getNexusOsAgriNexusWorkflows,
    getNexusOsAgriNexusPolicies,
    getNexusOsAgriNexusProviderRequirements,
    resolveAgriNexusWorkflowForGoal,
    validateAgriNexusDeploymentProfile
  });
});
