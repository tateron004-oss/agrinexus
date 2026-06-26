# Nexus Identity Foundation Contract - Phase 46

Status: inert identity model contract; no account changes, no identity verification, no provider activation.

Phase 46 defines the future identity foundation Nexus needs before regulated actions, provider handoffs, payments, medical record access, pharmacy workflows, role-specific actions, or emergency workflows can become live. It is a contract and QA phase only.

This phase does not verify identity, collect identity documents, share identity documents, mutate profiles, create accounts, delete accounts, log users in, reset passwords, elevate roles, authorize providers, authorize payments, share emergency contacts, open external identity providers, use credentials, write storage, or change backend behavior.

## Roadmap Alignment

Roadmap row:

`Phase 46 | Identity foundation | Verify users safely | identity model | future | restricted | identity provider optional | consent/audit required | identity QA | no account changes`

The identity provider is optional at this stage. The required outcome is a safe model that records what must be reviewed before future identity or account-sensitive behavior can exist.

## Identity Statuses

- `not_configured`
- `identity_model_review_required`
- `identity_provider_optional`
- `consent_policy_required`
- `audit_policy_required`
- `role_policy_required`
- `credential_review_required`
- `document_handling_review_required`
- `sandbox_testing_required`
- `approved_not_live`
- `rejected_or_blocked`
- `inactive`

`approved_not_live` means a future identity provider or identity policy may be reviewed, but no identity verification or account action is active until a later execution phase explicitly approves it.

## Identity Context Categories

- `account_identity_boundary`
- `profile_identity_boundary`
- `role_authorization_boundary`
- `identity_document_boundary`
- `provider_identity_boundary`
- `patient_identity_boundary`
- `worker_identity_boundary`
- `marketplace_party_identity_boundary`
- `payment_identity_boundary`
- `emergency_contact_identity_boundary`
- `restricted_identity_boundary`

These categories are descriptive. They must not imply verification, authorization, account mutation, role elevation, payment authorization, provider authorization, or emergency-contact sharing happened.

## Contract Fields

- `identityModelId`
- `identityProviderName`
- `sourceOwner`
- `identityStatus`
- `identityCategories`
- `supportedRegions`
- `supportedLanguages`
- `identityProviderStatus`
- `consentPolicyStatus`
- `auditPolicyStatus`
- `rolePolicyStatus`
- `credentialReviewStatus`
- `documentHandlingReviewStatus`
- `sandboxTestingStatus`
- `freshnessModel`
- `regionalScope`
- `languageScope`
- `allowedResponseStates`
- `identityConsentGate`
- `roleAuthorizationGate`
- `auditRequirements`
- `auditEvent`
- `identityContextAllowed`
- `identityVerificationEnabled`
- `identityDocumentSharingEnabled`
- `profileMutationEnabled`
- `accountCreationEnabled`
- `roleElevationEnabled`
- `providerAuthorizationEnabled`
- `paymentAuthorizationEnabled`
- `liveActionEnabled`
- `noExecution`

## Identity Consent Gate

The `identityConsentGate` must require:

- `requiresExplicitUserApproval`
- `requiresPurposeDisclosure`
- `requiresMinimumNecessaryData`
- `requiresIdentityProviderReview`
- `requiresDocumentHandlingReview`
- `requiresAuditLogging`
- `requiresNoFirstTurnExecution`
- `requiresCancellationPath`

The identity consent gate must keep these false by default:

- `allowsIdentityVerification`
- `allowsIdentityDocumentCollection`
- `allowsIdentityDocumentSharing`
- `allowsProfileMutation`
- `allowsAccountCreation`
- `allowsExternalNavigation`
- `allowsCredentialUse`

## Role Authorization Gate

The `roleAuthorizationGate` must require:

- `requiresAuthenticatedSession`
- `requiresRolePolicy`
- `requiresAdminApprovalForElevation`
- `requiresProviderConfirmation`
- `requiresAuditLogging`
- `requiresNoFirstTurnExecution`

The role authorization gate must keep these false by default:

- `allowsRoleContext`
- `allowsRoleElevation`
- `allowsProviderAuthorization`
- `allowsPatientAuthorization`
- `allowsPaymentAuthorization`
- `allowsEmergencyContactSharing`

## No-Execution Defaults

The contract must keep:

- `identityContextAllowed: false`
- `accountContextAllowed: false`
- `roleContextAllowed: false`
- `identityProviderConnectionEnabled: false`
- `identityVerificationEnabled: false`
- `identityDocumentCollectionEnabled: false`
- `identityDocumentSharingEnabled: false`
- `profileMutationEnabled: false`
- `accountCreationEnabled: false`
- `accountDeletionEnabled: false`
- `accountLoginEnabled: false`
- `passwordResetEnabled: false`
- `roleElevationEnabled: false`
- `providerAuthorizationEnabled: false`
- `patientAuthorizationEnabled: false`
- `paymentAuthorizationEnabled: false`
- `emergencyContactSharingEnabled: false`
- `externalNavigationEnabled: false`
- `credentialUseEnabled: false`
- `liveActionEnabled: false`
- `identityVerified: false`
- `identityDocumentCollected: false`
- `identityDocumentShared: false`
- `profileMutated: false`
- `accountCreated: false`
- `accountDeleted: false`
- `accountLoggedIn: false`
- `passwordResetStarted: false`
- `roleElevated: false`
- `providerAuthorized: false`
- `patientAuthorized: false`
- `paymentAuthorized: false`
- `emergencyContactShared: false`
- `externalActionExecuted: false`
- `noExecution: true`

## Audit Event Fields

- `eventType`
- `identityModelId`
- `identityStatus`
- `identityCategories`
- `identityContextAllowed`
- `identityVerificationEnabled`
- `identityDocumentSharingEnabled`
- `profileMutationEnabled`
- `accountCreationEnabled`
- `roleElevationEnabled`
- `providerAuthorizationEnabled`
- `paymentAuthorizationEnabled`
- `noExecution`
- `createdAt`

Audit events must not include passwords, tokens, identity documents, government ID numbers, account secrets, payment details, health details, precise location, emergency contact details, provider credentials, or executable identity-provider payloads.

## Existing Runtime Alignment

The existing runtime already classifies account and identity prompts as high-risk:

- `Verify my identity`
- `Log into my account`

The current auth/login gate remains separate from this contract. Phase 46 does not add a new login flow, account mutation path, password reset path, identity provider adapter, or authorization backend.

## Runtime Boundary

The Phase 46 module must not be loaded by `public/index.html`, consumed by `public/app.js`, or consumed by `server.js`. Normal static-file availability is acceptable, but no runtime hook, dynamic import, route handler, provider adapter, identity provider connection, credential path, storage write, account path, profile mutation path, role elevation path, payment authorization path, emergency-contact sharing path, permission prompt, external navigation, or execution behavior may be introduced.

## User-Facing Language Boundary

Nexus may say identity or account-sensitive actions require identity policy review, explicit approval, consent, audit logging, role authorization, or a verified identity provider. Nexus must not say identity was verified, an account was created, a profile was changed, a password reset started, a role was elevated, a provider was authorized, a payment was authorized, or emergency contact information was shared unless a later approved execution phase enables that behavior.

## QA Expectations

`scripts/nexus-identity-foundation-contract-qa.js` verifies:

- the Phase 46 roadmap row remains present;
- existing intent, policy, auth, and tool-registry guards continue to treat account and identity prompts as gated;
- the contract exports required statuses, categories, fields, gates, audit fields, and no-execution defaults;
- created identity models are frozen and force unsafe overrides back to disabled;
- no identity provider API, credential path, storage write, account mutation, role elevation, external navigation, or execution behavior exists;
- the module is not wired into `index.html`, `app.js`, or `server.js`;
- package and QA suite entries include the new local-safe QA guard.

## Future Work

Later phases may add identity-provider readiness, consent center records, audit log runtime storage, role authorization, FHIR authorization, payment authorization, or account management only after identity-provider review, consent language, audit logging, credential policy, role policy, sandbox testing, and explicit user approval are complete.
