(function nexusProviderOnboardingPortalContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusProviderOnboardingPortalContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusProviderOnboardingPortalContractModule() {
  const PROVIDER_ONBOARDING_STATUSES = Object.freeze([
    "draft",
    "submitted_not_reviewed",
    "identity_review_required",
    "source_ownership_review_required",
    "connector_review_required",
    "sandbox_testing_required",
    "admin_approval_required",
    "approved_not_live",
    "rejected_or_blocked",
    "inactive"
  ]);

  const IDENTITY_REVIEW_STATES = Object.freeze([
    "not_started",
    "documents_required",
    "organization_verification_pending",
    "technical_contact_required",
    "compliance_contact_required",
    "verified",
    "rejected"
  ]);

  const CONNECTOR_PROPOSAL_TYPES = Object.freeze([
    "provider_directory",
    "clinic_availability",
    "telehealth_provider",
    "mobile_clinic_operator",
    "pharmacy_provider",
    "prescription_workflow",
    "transportation_provider",
    "workforce_program",
    "agriculture_extension_provider",
    "marketplace_partner",
    "education_content_provider",
    "community_service_provider",
    "payment_provider",
    "medical_records_fhir_provider",
    "emergency_response_partner",
    "communications_provider"
  ]);

  const NO_EXECUTION_DEFAULTS = Object.freeze({
    noExecution: true,
    sourceBackedGuidanceAllowed: false,
    liveActionEnabled: false,
    providerVisibleToUsers: false,
    providerContacted: false,
    userDataShared: false,
    externalActionExecuted: false,
    paymentExecuted: false,
    marketplaceTransactionExecuted: false,
    medicalRecordAccessed: false,
    prescriptionSubmitted: false,
    emergencyDispatched: false,
    locationShared: false,
    callOrMessageSent: false
  });

  const PROVIDER_ONBOARDING_SUBMISSION_FIELDS = Object.freeze([
    "submissionId",
    "providerName",
    "providerType",
    "onboardingStatus",
    "identityReviewState",
    "connectorProposalType",
    "sourceOwner",
    "serviceRegions",
    "serviceCategories",
    "technicalContactRequired",
    "complianceContactRequired",
    "legalAgreementStatus",
    "dataRightsStatus",
    "authenticationRequirements",
    "consentRequirements",
    "permissionRequirements",
    "complianceRequirements",
    "connectorProposal",
    "sandboxTestPlan",
    "adminApprovalGate",
    "goLiveChecklist",
    "auditRequirements",
    "sourceBackedGuidanceAllowed",
    "liveActionEnabled",
    "providerVisibleToUsers",
    "userApprovalRequired",
    "providerConfirmationRequired",
    "noExecution"
  ]);

  const ADMIN_APPROVAL_GATE_FIELDS = Object.freeze([
    "requiresAdminApproval",
    "requiresIdentityVerification",
    "requiresSourceOwnershipVerification",
    "requiresLegalAgreement",
    "requiresComplianceReview",
    "requiresSecurityReview",
    "requiresSandboxTesting",
    "requiresAuditReadiness",
    "allowsProviderVisibility",
    "allowsSourceBackedGuidance",
    "allowsLiveAction",
    "approvedBy",
    "approvedAt"
  ]);

  const GO_LIVE_CHECKLIST_FIELDS = Object.freeze([
    "identityVerified",
    "sourceOwnershipVerified",
    "legalAgreementComplete",
    "dataRightsApproved",
    "securityReviewComplete",
    "complianceReviewComplete",
    "sandboxTestPassed",
    "auditLoggingReady",
    "rollbackPlanReady",
    "adminApproved"
  ]);

  const DEFAULT_ADMIN_APPROVAL_GATE = Object.freeze({
    requiresAdminApproval: true,
    requiresIdentityVerification: true,
    requiresSourceOwnershipVerification: true,
    requiresLegalAgreement: true,
    requiresComplianceReview: true,
    requiresSecurityReview: true,
    requiresSandboxTesting: true,
    requiresAuditReadiness: true,
    allowsProviderVisibility: false,
    allowsSourceBackedGuidance: false,
    allowsLiveAction: false,
    approvedBy: null,
    approvedAt: null
  });

  const DEFAULT_GO_LIVE_CHECKLIST = Object.freeze({
    identityVerified: false,
    sourceOwnershipVerified: false,
    legalAgreementComplete: false,
    dataRightsApproved: false,
    securityReviewComplete: false,
    complianceReviewComplete: false,
    sandboxTestPassed: false,
    auditLoggingReady: false,
    rollbackPlanReady: false,
    adminApproved: false
  });

  const PROVIDER_ONBOARDING_SUBMISSION_CONTRACT = Object.freeze({
    submissionId: "",
    providerName: "",
    providerType: "unverified_provider",
    onboardingStatus: "draft",
    identityReviewState: "not_started",
    connectorProposalType: "provider_directory",
    sourceOwner: "provider verification required",
    serviceRegions: Object.freeze([]),
    serviceCategories: Object.freeze([]),
    technicalContactRequired: true,
    complianceContactRequired: true,
    legalAgreementStatus: "review required",
    dataRightsStatus: "review required",
    authenticationRequirements: Object.freeze(["provider authentication required before submission review"]),
    consentRequirements: Object.freeze(["consent model required before user-specific or regulated data use"]),
    permissionRequirements: Object.freeze(["admin approval required before provider visibility or source-backed guidance"]),
    complianceRequirements: Object.freeze(["compliance review required before regulated connector use"]),
    connectorProposal: Object.freeze({
      integrationMethod: "not_connected_yet",
      proposedDataFields: Object.freeze([]),
      proposedActions: Object.freeze([]),
      connectorStatus: "not_connected_yet"
    }),
    sandboxTestPlan: Object.freeze({
      required: true,
      status: "not_started",
      testEnvironment: "sandbox_only"
    }),
    adminApprovalGate: DEFAULT_ADMIN_APPROVAL_GATE,
    goLiveChecklist: DEFAULT_GO_LIVE_CHECKLIST,
    auditRequirements: Object.freeze(["provider-onboarding-submitted", "identity-review-required", "admin-approval-blocked"]),
    userApprovalRequired: true,
    providerConfirmationRequired: true,
    ...NO_EXECUTION_DEFAULTS
  });

  function normalizeOnboardingStatus(value) {
    return PROVIDER_ONBOARDING_STATUSES.includes(value) ? value : PROVIDER_ONBOARDING_SUBMISSION_CONTRACT.onboardingStatus;
  }

  function normalizeIdentityReviewState(value) {
    return IDENTITY_REVIEW_STATES.includes(value) ? value : PROVIDER_ONBOARDING_SUBMISSION_CONTRACT.identityReviewState;
  }

  function normalizeConnectorProposalType(value) {
    return CONNECTOR_PROPOSAL_TYPES.includes(value) ? value : PROVIDER_ONBOARDING_SUBMISSION_CONTRACT.connectorProposalType;
  }

  function createProviderOnboardingSubmission(overrides = {}) {
    const onboardingStatus = normalizeOnboardingStatus(overrides.onboardingStatus);
    const identityReviewState = normalizeIdentityReviewState(overrides.identityReviewState);
    const connectorProposalType = normalizeConnectorProposalType(overrides.connectorProposalType);
    return Object.freeze({
      ...PROVIDER_ONBOARDING_SUBMISSION_CONTRACT,
      ...overrides,
      onboardingStatus,
      identityReviewState,
      connectorProposalType,
      serviceRegions: Object.freeze(Array.isArray(overrides.serviceRegions) ? overrides.serviceRegions.slice() : []),
      serviceCategories: Object.freeze(Array.isArray(overrides.serviceCategories) ? overrides.serviceCategories.slice() : []),
      connectorProposal: Object.freeze({
        ...PROVIDER_ONBOARDING_SUBMISSION_CONTRACT.connectorProposal,
        ...(overrides.connectorProposal || {}),
        proposedDataFields: Object.freeze(Array.isArray(overrides.connectorProposal?.proposedDataFields) ? overrides.connectorProposal.proposedDataFields.slice() : []),
        proposedActions: Object.freeze(Array.isArray(overrides.connectorProposal?.proposedActions) ? overrides.connectorProposal.proposedActions.slice() : [])
      }),
      sandboxTestPlan: Object.freeze({
        ...PROVIDER_ONBOARDING_SUBMISSION_CONTRACT.sandboxTestPlan,
        ...(overrides.sandboxTestPlan || {})
      }),
      adminApprovalGate: Object.freeze({
        ...DEFAULT_ADMIN_APPROVAL_GATE,
        ...(overrides.adminApprovalGate || {}),
        allowsProviderVisibility: false,
        allowsSourceBackedGuidance: false,
        allowsLiveAction: false
      }),
      goLiveChecklist: Object.freeze({
        ...DEFAULT_GO_LIVE_CHECKLIST,
        ...(overrides.goLiveChecklist || {}),
        adminApproved: false
      }),
      auditRequirements: Object.freeze(Array.isArray(overrides.auditRequirements) ? overrides.auditRequirements.slice() : PROVIDER_ONBOARDING_SUBMISSION_CONTRACT.auditRequirements.slice()),
      ...Object.fromEntries(Object.entries(NO_EXECUTION_DEFAULTS).map(([key, value]) => [key, value]))
    });
  }

  return Object.freeze({
    PROVIDER_ONBOARDING_STATUSES,
    IDENTITY_REVIEW_STATES,
    CONNECTOR_PROPOSAL_TYPES,
    NO_EXECUTION_DEFAULTS,
    PROVIDER_ONBOARDING_SUBMISSION_FIELDS,
    ADMIN_APPROVAL_GATE_FIELDS,
    GO_LIVE_CHECKLIST_FIELDS,
    DEFAULT_ADMIN_APPROVAL_GATE,
    DEFAULT_GO_LIVE_CHECKLIST,
    PROVIDER_ONBOARDING_SUBMISSION_CONTRACT,
    createProviderOnboardingSubmission
  });
});
