(function initNexusOsHealthWorkforceSafetyPack(root, factory) {
  const safetyModule = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = safetyModule;
  }
  root.NexusOsHealthWorkforceSafetyPack = safetyModule;
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusOsHealthWorkforceSafetyPackFactory() {
  "use strict";

  const HEALTH_WORKFLOWS = Object.freeze([
    healthWorkflow("diabetes_support", ["diabetes", "glucose", "blood sugar"], ["symptoms", "readings", "medications", "provider"], ["no_diagnosis", "no_medication_change", "provider_review"]),
    healthWorkflow("hypertension_support", ["hypertension", "blood pressure", "bp reading"], ["systolic", "diastolic", "symptoms", "provider"], ["no_diagnosis", "urgent_symptom_boundary", "provider_review"]),
    healthWorkflow("obesity_support", ["obesity", "weight support", "bmi"], ["goals", "activity", "nutrition context", "provider"], ["education_only", "no_treatment_plan_claim", "provider_review"]),
    healthWorkflow("rpm_rtm_review", ["rpm", "rtm", "remote patient monitoring", "remote therapeutic monitoring"], ["measurement", "timestamp", "device context", "provider"], ["manual_entry_receipt", "provider_review", "no_device_claim_without_integration"]),
    healthWorkflow("telehealth_intake", ["telehealth", "virtual care", "provider bridge"], ["reason", "availability", "contact preference", "consent"], ["intake_only", "no_booking_claim", "provider_confirmation_required"]),
    healthWorkflow("pharmacy_prepare", ["pharmacy", "refill", "prescription"], ["medication name", "question", "pharmacy", "provider"], ["no_prescribing", "no_refill_execution", "provider_confirmation_required"]),
    healthWorkflow("emergency_boundary", ["emergency", "not breathing", "chest pain", "stroke"], ["emergency language"], ["local_emergency_services", "no_dispatch_claim", "stop_routine_workflow"])
  ]);

  const WORKFORCE_WORKFLOWS = Object.freeze([
    workforceWorkflow("applicant_profile", ["workforce support", "find work", "job search", "resume"], ["skills", "experience", "location", "availability"], ["user_review", "no_application_submission_without_confirmation"]),
    workforceWorkflow("employer_workflow", ["find workers", "need workers", "hire", "employer"], ["role", "location", "requirements", "contact preference"], ["no_candidate_contact_without_review", "provider_or_admin_review"]),
    workforceWorkflow("learning_progress", ["training", "course", "learning progress"], ["topic", "level", "progress"], ["learner_consent", "no_enrollment_claim_without_provider"]),
    workforceWorkflow("assessment_prepare", ["assessment", "skills test", "certificate"], ["skill", "level", "evidence"], ["no_certificate_issue_without_provider", "review_required"]),
    workforceWorkflow("application_prepare", ["apply", "application", "submit my application"], ["role", "employer", "profile summary"], ["confirmation_required", "no_silent_submission"])
  ]);

  const SAFETY_POLICIES = Object.freeze([
    policy("health_no_diagnosis", "health", ["diagnose", "diagnosed", "treat", "prescribe"], "block_and_reframe_as_education_or_provider_summary"),
    policy("health_emergency_boundary", "health", ["emergency", "not breathing", "chest pain", "stroke"], "tell_user_to_contact_local_emergency_services_without_dispatch_claim"),
    policy("health_sensitive_memory_scope", "health", ["glucose", "blood pressure", "medication", "symptoms"], "require_explicit_health_context_consent"),
    policy("workforce_application_confirmation", "workforce", ["apply", "submit", "send resume"], "prepare_packet_then_require_confirmation"),
    policy("workforce_learning_provider_confirmation", "workforce", ["enroll", "certificate", "assessment"], "require_provider_or_program_confirmation"),
    policy("cross_domain_data_boundary", "all", ["health profile", "employment profile", "learning history"], "deny_cross_domain_sharing_without_purpose_consent")
  ]);

  function healthWorkflow(id, triggers, requiredFields, policyRefs) {
    return workflow("health", id, triggers, requiredFields, policyRefs, "health_provider_summary_receipt");
  }

  function workforceWorkflow(id, triggers, requiredFields, policyRefs) {
    return workflow("workforce", id, triggers, requiredFields, policyRefs, "workforce_preparation_receipt");
  }

  function workflow(domain, id, triggers, requiredFields, policyRefs, receiptType) {
    return Object.freeze({
      schemaVersion: "nexus-os-health-workforce-workflow.v1",
      domain,
      id,
      triggers: Object.freeze(triggers),
      requiredFields: Object.freeze(requiredFields),
      platformRegistries: Object.freeze(["domain_registry", "workflow_registry", "policy_registry", "provider_registry", "memory_scope_registry", "receipt_engine"]),
      policyReferences: Object.freeze(policyRefs),
      providerRequirement: domain === "health" ? "provider_review_or_telehealth_adapter_when_configured" : "training_or_employer_partner_when_configured",
      memoryScope: domain === "health" ? "health_profile_sensitive_scope" : "employment_learning_profile_scope",
      consentRequired: true,
      confirmationRequired: true,
      receiptType,
      noExecutionAuthorizedByDefault: true,
      noExternalSubmissionWithoutProviderVerification: true
    });
  }

  function policy(id, domain, triggerTerms, enforcement) {
    return Object.freeze({
      schemaVersion: "nexus-os-safety-policy.v1",
      id,
      domain,
      triggerTerms: Object.freeze(triggerTerms),
      enforcement,
      requiredConsent: true,
      requiredRole: "authorized_user_or_partner_reviewer",
      auditRequired: true,
      dataIsolation: domain === "all" ? "tenant_domain_and_purpose_scoped" : `${domain}_domain_scoped`
    });
  }

  function evaluateHealthWorkforceSafety(command = "", context = {}) {
    const normalized = String(command || "").toLowerCase();
    const role = context.role || "standard_user";
    const healthMatch = findBestWorkflowMatch(HEALTH_WORKFLOWS, normalized);
    const workforceMatch = findBestWorkflowMatch(WORKFORCE_WORKFLOWS, normalized);
    const workflowMatch = healthMatch || workforceMatch || null;
    const policyMatches = SAFETY_POLICIES.filter(policyItem => policyItem.domain === "all" || policyItem.domain === workflowMatch?.domain || policyItem.triggerTerms.some(term => normalized.includes(term)));
    const emergency = policyMatches.some(policyItem => policyItem.id === "health_emergency_boundary");
    return Object.freeze({
      ok: true,
      role,
      matched: Boolean(workflowMatch),
      domain: workflowMatch?.domain || "unknown",
      workflowId: workflowMatch?.id || null,
      requiredFields: workflowMatch?.requiredFields || Object.freeze([]),
      policyReferences: Object.freeze(policyMatches.map(policyItem => policyItem.id)),
      consentRequired: Boolean(workflowMatch?.consentRequired || policyMatches.length),
      confirmationRequired: Boolean(workflowMatch?.confirmationRequired || policyMatches.length),
      memoryScope: workflowMatch?.memoryScope || "none",
      receiptType: workflowMatch?.receiptType || "clarification_receipt",
      emergencyBoundary: emergency,
      userMessage: emergency
        ? "This may be urgent. Contact local emergency services now. Nexus cannot dispatch emergency help."
        : workflowMatch
          ? "Nexus can prepare a reviewed packet through the platform safety gates. No external action is authorized yet."
          : "Nexus needs one clarifying question before opening a health or workforce workflow.",
      noDiagnosis: true,
      noPrescribing: true,
      noApplicationSubmission: true,
      noProviderHandoffWithoutConsent: true,
      noExecutionAuthorized: true,
      auditRequired: true
    });
  }

  function findBestWorkflowMatch(workflows, normalizedCommand) {
    return workflows
      .map(workflowItem => {
        const matchedTrigger = workflowItem.triggers
          .filter(trigger => normalizedCommand.includes(trigger))
          .sort((left, right) => right.length - left.length)[0];
        return matchedTrigger ? { workflowItem, matchedTrigger } : null;
      })
      .filter(Boolean)
      .sort((left, right) => right.matchedTrigger.length - left.matchedTrigger.length)[0]?.workflowItem || null;
  }

  function validateHealthWorkforceSafetyPack() {
    const issues = [];
    [...HEALTH_WORKFLOWS, ...WORKFORCE_WORKFLOWS].forEach(workflowItem => {
      if (!workflowItem.platformRegistries.includes("policy_registry")) issues.push(`missing_policy_registry:${workflowItem.id}`);
      if (!workflowItem.platformRegistries.includes("receipt_engine")) issues.push(`missing_receipt_engine:${workflowItem.id}`);
      if (!workflowItem.consentRequired || !workflowItem.confirmationRequired) issues.push(`missing_consent_or_confirmation:${workflowItem.id}`);
      if (!workflowItem.noExecutionAuthorizedByDefault) issues.push(`unsafe_default_execution:${workflowItem.id}`);
    });
    return Object.freeze({
      ok: issues.length === 0,
      issues: Object.freeze(issues),
      healthWorkflowCount: HEALTH_WORKFLOWS.length,
      workforceWorkflowCount: WORKFORCE_WORKFLOWS.length,
      policyCount: SAFETY_POLICIES.length
    });
  }

  return Object.freeze({
    getNexusOsHealthWorkflows: () => HEALTH_WORKFLOWS,
    getNexusOsWorkforceWorkflows: () => WORKFORCE_WORKFLOWS,
    getNexusOsHealthWorkforcePolicies: () => SAFETY_POLICIES,
    evaluateHealthWorkforceSafety,
    validateHealthWorkforceSafetyPack
  });
});
