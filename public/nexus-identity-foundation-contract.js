(function nexusIdentityFoundationContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusIdentityFoundationContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusIdentityFoundationContractModule() {
  const IDENTITY_FOUNDATION_STATUSES = Object.freeze([
    "not_configured",
    "identity_model_review_required",
    "identity_provider_optional",
    "consent_policy_required",
    "audit_policy_required",
    "role_policy_required",
    "credential_review_required",
    "document_handling_review_required",
    "sandbox_testing_required",
    "approved_not_live",
    "rejected_or_blocked",
    "inactive"
  ]);

  const IDENTITY_CONTEXT_CATEGORIES = Object.freeze([
    "account_identity_boundary",
    "profile_identity_boundary",
    "role_authorization_boundary",
    "identity_document_boundary",
    "provider_identity_boundary",
    "patient_identity_boundary",
    "worker_identity_boundary",
    "marketplace_party_identity_boundary",
    "payment_identity_boundary",
    "emergency_contact_identity_boundary",
    "restricted_identity_boundary"
  ]);

  const NO_EXECUTION_DEFAULTS = Object.freeze({
    noExecution: true,
    identityContextAllowed: false,
    accountContextAllowed: false,
    roleContextAllowed: false,
    identityProviderConnectionEnabled: false,
    identityVerificationEnabled: false,
    identityDocumentCollectionEnabled: false,
    identityDocumentSharingEnabled: false,
    profileMutationEnabled: false,
    accountCreationEnabled: false,
    accountDeletionEnabled: false,
    accountLoginEnabled: false,
    passwordResetEnabled: false,
    roleElevationEnabled: false,
    providerAuthorizationEnabled: false,
    patientAuthorizationEnabled: false,
    paymentAuthorizationEnabled: false,
    emergencyContactSharingEnabled: false,
    externalNavigationEnabled: false,
    credentialUseEnabled: false,
    liveActionEnabled: false,
    identityVerified: false,
    identityDocumentCollected: false,
    identityDocumentShared: false,
    profileMutated: false,
    accountCreated: false,
    accountDeleted: false,
    accountLoggedIn: false,
    passwordResetStarted: false,
    roleElevated: false,
    providerAuthorized: false,
    patientAuthorized: false,
    paymentAuthorized: false,
    emergencyContactShared: false,
    externalActionExecuted: false
  });

  const IDENTITY_FOUNDATION_FIELDS = Object.freeze([
    "identityModelId",
    "identityProviderName",
    "sourceOwner",
    "identityStatus",
    "identityCategories",
    "supportedRegions",
    "supportedLanguages",
    "identityProviderStatus",
    "consentPolicyStatus",
    "auditPolicyStatus",
    "rolePolicyStatus",
    "credentialReviewStatus",
    "documentHandlingReviewStatus",
    "sandboxTestingStatus",
    "freshnessModel",
    "regionalScope",
    "languageScope",
    "allowedResponseStates",
    "identityConsentGate",
    "roleAuthorizationGate",
    "auditRequirements",
    "auditEvent",
    "identityContextAllowed",
    "identityVerificationEnabled",
    "identityDocumentSharingEnabled",
    "profileMutationEnabled",
    "accountCreationEnabled",
    "roleElevationEnabled",
    "providerAuthorizationEnabled",
    "paymentAuthorizationEnabled",
    "liveActionEnabled",
    "noExecution"
  ]);

  const IDENTITY_CONSENT_GATE_FIELDS = Object.freeze([
    "requiresExplicitUserApproval",
    "requiresPurposeDisclosure",
    "requiresMinimumNecessaryData",
    "requiresIdentityProviderReview",
    "requiresDocumentHandlingReview",
    "requiresAuditLogging",
    "requiresNoFirstTurnExecution",
    "requiresCancellationPath",
    "allowsIdentityVerification",
    "allowsIdentityDocumentCollection",
    "allowsIdentityDocumentSharing",
    "allowsProfileMutation",
    "allowsAccountCreation",
    "allowsExternalNavigation",
    "allowsCredentialUse"
  ]);

  const ROLE_AUTHORIZATION_GATE_FIELDS = Object.freeze([
    "requiresAuthenticatedSession",
    "requiresRolePolicy",
    "requiresAdminApprovalForElevation",
    "requiresProviderConfirmation",
    "requiresAuditLogging",
    "requiresNoFirstTurnExecution",
    "allowsRoleContext",
    "allowsRoleElevation",
    "allowsProviderAuthorization",
    "allowsPatientAuthorization",
    "allowsPaymentAuthorization",
    "allowsEmergencyContactSharing"
  ]);

  const IDENTITY_AUDIT_EVENT_FIELDS = Object.freeze([
    "eventType",
    "identityModelId",
    "identityStatus",
    "identityCategories",
    "identityContextAllowed",
    "identityVerificationEnabled",
    "identityDocumentSharingEnabled",
    "profileMutationEnabled",
    "accountCreationEnabled",
    "roleElevationEnabled",
    "providerAuthorizationEnabled",
    "paymentAuthorizationEnabled",
    "noExecution",
    "createdAt"
  ]);

  const DEFAULT_IDENTITY_CONSENT_GATE = Object.freeze({
    requiresExplicitUserApproval: true,
    requiresPurposeDisclosure: true,
    requiresMinimumNecessaryData: true,
    requiresIdentityProviderReview: true,
    requiresDocumentHandlingReview: true,
    requiresAuditLogging: true,
    requiresNoFirstTurnExecution: true,
    requiresCancellationPath: true,
    allowsIdentityVerification: false,
    allowsIdentityDocumentCollection: false,
    allowsIdentityDocumentSharing: false,
    allowsProfileMutation: false,
    allowsAccountCreation: false,
    allowsExternalNavigation: false,
    allowsCredentialUse: false
  });

  const DEFAULT_ROLE_AUTHORIZATION_GATE = Object.freeze({
    requiresAuthenticatedSession: true,
    requiresRolePolicy: true,
    requiresAdminApprovalForElevation: true,
    requiresProviderConfirmation: true,
    requiresAuditLogging: true,
    requiresNoFirstTurnExecution: true,
    allowsRoleContext: false,
    allowsRoleElevation: false,
    allowsProviderAuthorization: false,
    allowsPatientAuthorization: false,
    allowsPaymentAuthorization: false,
    allowsEmergencyContactSharing: false
  });

  const IDENTITY_FOUNDATION_CONTRACT = Object.freeze({
    identityModelId: "identity.foundation.not_configured",
    identityProviderName: "",
    sourceOwner: "identity provider optional; consent and audit policy required",
    identityStatus: "not_configured",
    identityCategories: Object.freeze([]),
    supportedRegions: Object.freeze([]),
    supportedLanguages: Object.freeze(["en"]),
    identityProviderStatus: "optional_not_configured",
    consentPolicyStatus: "not_reviewed",
    auditPolicyStatus: "not_reviewed",
    rolePolicyStatus: "not_reviewed",
    credentialReviewStatus: "not_reviewed",
    documentHandlingReviewStatus: "not_reviewed",
    sandboxTestingStatus: "not_started",
    freshnessModel: Object.freeze({
      freshnessField: "identityPolicyLastReviewedAt",
      staleAfter: "identity-policy-specific",
      displayRequirement: "Show identity provider status, consent policy, audit policy, role policy, and account-change-disabled boundary before preparing identity next steps."
    }),
    regionalScope: "not reviewed",
    languageScope: "not reviewed",
    allowedResponseStates: Object.freeze([
      "identity_readiness_guidance",
      "account_safety_guidance",
      "role_authorization_guidance",
      "consent_needed_guidance",
      "unavailable_identity_provider_fallback"
    ]),
    identityConsentGate: DEFAULT_IDENTITY_CONSENT_GATE,
    roleAuthorizationGate: DEFAULT_ROLE_AUTHORIZATION_GATE,
    auditRequirements: Object.freeze([
      "identity-policy-reviewed",
      "identity-verification-blocked",
      "identity-document-sharing-blocked",
      "account-change-blocked",
      "role-elevation-blocked"
    ]),
    auditEvent: Object.freeze({
      eventType: "identity.foundation_created",
      identityModelId: "identity.foundation.not_configured",
      identityStatus: "not_configured",
      identityCategories: Object.freeze([]),
      identityContextAllowed: false,
      identityVerificationEnabled: false,
      identityDocumentSharingEnabled: false,
      profileMutationEnabled: false,
      accountCreationEnabled: false,
      roleElevationEnabled: false,
      providerAuthorizationEnabled: false,
      paymentAuthorizationEnabled: false,
      noExecution: true,
      createdAt: null
    }),
    ...NO_EXECUTION_DEFAULTS
  });

  function normalizeIdentityStatus(value) {
    return IDENTITY_FOUNDATION_STATUSES.includes(value) ? value : IDENTITY_FOUNDATION_CONTRACT.identityStatus;
  }

  function createIdentityFoundation(overrides = {}) {
    const identityStatus = normalizeIdentityStatus(overrides.identityStatus);
    const identityCategories = Array.isArray(overrides.identityCategories)
      ? overrides.identityCategories.filter(category => IDENTITY_CONTEXT_CATEGORIES.includes(category))
      : [];
    return Object.freeze({
      ...IDENTITY_FOUNDATION_CONTRACT,
      ...overrides,
      identityStatus,
      identityCategories: Object.freeze(identityCategories),
      supportedRegions: Object.freeze(Array.isArray(overrides.supportedRegions) ? overrides.supportedRegions.slice() : []),
      supportedLanguages: Object.freeze(Array.isArray(overrides.supportedLanguages) ? overrides.supportedLanguages.slice() : ["en"]),
      identityConsentGate: Object.freeze({
        ...DEFAULT_IDENTITY_CONSENT_GATE,
        ...(overrides.identityConsentGate || {}),
        allowsIdentityVerification: false,
        allowsIdentityDocumentCollection: false,
        allowsIdentityDocumentSharing: false,
        allowsProfileMutation: false,
        allowsAccountCreation: false,
        allowsExternalNavigation: false,
        allowsCredentialUse: false
      }),
      roleAuthorizationGate: Object.freeze({
        ...DEFAULT_ROLE_AUTHORIZATION_GATE,
        ...(overrides.roleAuthorizationGate || {}),
        allowsRoleContext: false,
        allowsRoleElevation: false,
        allowsProviderAuthorization: false,
        allowsPatientAuthorization: false,
        allowsPaymentAuthorization: false,
        allowsEmergencyContactSharing: false
      }),
      auditEvent: Object.freeze({
        ...IDENTITY_FOUNDATION_CONTRACT.auditEvent,
        ...(overrides.auditEvent || {}),
        identityModelId: overrides.identityModelId || IDENTITY_FOUNDATION_CONTRACT.identityModelId,
        identityStatus,
        identityCategories: Object.freeze(identityCategories),
        identityContextAllowed: false,
        identityVerificationEnabled: false,
        identityDocumentSharingEnabled: false,
        profileMutationEnabled: false,
        accountCreationEnabled: false,
        roleElevationEnabled: false,
        providerAuthorizationEnabled: false,
        paymentAuthorizationEnabled: false,
        noExecution: true
      }),
      ...NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    IDENTITY_FOUNDATION_STATUSES,
    IDENTITY_CONTEXT_CATEGORIES,
    NO_EXECUTION_DEFAULTS,
    IDENTITY_FOUNDATION_FIELDS,
    IDENTITY_CONSENT_GATE_FIELDS,
    ROLE_AUTHORIZATION_GATE_FIELDS,
    IDENTITY_AUDIT_EVENT_FIELDS,
    DEFAULT_IDENTITY_CONSENT_GATE,
    DEFAULT_ROLE_AUTHORIZATION_GATE,
    IDENTITY_FOUNDATION_CONTRACT,
    createIdentityFoundation
  });
});
