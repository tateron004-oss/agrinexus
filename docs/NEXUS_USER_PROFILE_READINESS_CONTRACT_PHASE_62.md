# Nexus User Profile Readiness Contract

Phase: 62 - User profiles
Status: inert readiness contract and deterministic QA only
Related roadmap row: `| Phase 62 | User profiles | Personalize with permission | profile model | future | high | profile source | consent/audit | profile QA | profile access gated |`

## Scope Decision

Phase 62 does not add profile creation, account creation, profile editing, profile sharing, profile sync, identity proofing, role elevation, provider profile handoff, health profile storage, payment profile storage, location profile storage, or marketplace profile sharing.

This phase creates the readiness contract that must be satisfied before Nexus may support future permissioned user profiles and personalization.

This phase does not activate:

- live profile backend behavior
- account creation
- profile mutation
- profile sharing
- profile sync
- provider profile handoff
- identity document handling
- role or permission elevation
- health profile storage
- payment profile storage
- precise location profile storage
- marketplace buyer or seller profile sharing
- automatic personalization without consent
- Standard User runtime profile changes
- storage or network side effects
- backend behavior changes

Existing demo login/profile selection behavior remains unchanged. Phase 62 adds no new authority to existing profile-like data.

## Contract Artifact

The inert contract lives in:

- `public/nexus-user-profile-readiness-contract.js`

It is intentionally not loaded by `public/index.html`, not consumed by `public/app.js`, and not wired by `server.js`.

## Default Readiness Posture

The default contract keeps profile execution disabled:

- `phase: "62"`
- `riskTier: "high"`
- `readinessStatus: "blocked"`
- `profileBackendEnabled: false`
- `accountCreationEnabled: false`
- `profileMutationEnabled: false`
- `profileSharingEnabled: false`
- `profileSyncEnabled: false`
- `identityProofingEnabled: false`
- `roleElevationEnabled: false`
- `providerProfileHandoffEnabled: false`
- `sensitiveProfileStorageEnabled: false`
- `automaticPersonalizationEnabled: false`
- `standardUserProfileMutationAllowed: false`
- `executionAllowed: false`
- `liveActionEnabled: false`

Nexus may eventually personalize with consent, but profile context must never become proof of identity, consent, permission, provider authorization, or execution approval.

## Required Preconditions Before Profile Use

Before any future permissioned profile behavior can be enabled, Nexus must verify and visibly present:

- `explicitProfileConsent`
- `visibleProfilePurpose`
- `visibleProfileFields`
- `sensitiveFieldExclusions`
- `profileSource`
- `profileOwner`
- `profileAccessScope`
- `roleAuthorization`
- `permissionState`
- `consentRevocationPath`
- `editControl`
- `deleteControl`
- `exportControlWhenApplicable`
- `retentionPolicy`
- `redactionPolicy`
- `auditEvent`
- `nonAuthoritativeProfileRule`
- `noProfileBasedExecution`
- `noSilentProfileSharing`
- `noHiddenRoleElevation`

## Profile Access Boundary

Profile data may eventually help Nexus adapt wording, remember safe preferences, and reduce repeated questions. It must not authorize calls, messages, payments, prescriptions, medical record access, provider contact, location sharing, camera or microphone use, marketplace transactions, emergency dispatch, identity verification, or role elevation.

## Restricted Domain Rules

Additional restrictions apply to:

- `identity`
- `account_profile`
- `role_authorization`
- `healthcare`
- `medical_records`
- `pharmacy`
- `payments`
- `location`
- `communications`
- `provider_contact`
- `marketplace_transactions`
- `emergency`
- `minors_family_support`

## Standard User Expectations

The Standard User build may explain profile readiness requirements, but it must not:

- create or edit a profile;
- sync profile data;
- store sensitive profile details;
- share a profile with providers or marketplace parties;
- use profile data as consent;
- use profile data as identity proof;
- use profile data to unlock permissions;
- elevate roles from profile context;
- use profile data to execute or approve actions;
- hide edit, delete, export, or revocation controls;
- bypass audit logging.

## Safe Future Copy

Approved posture:

- "Profile personalization requires your explicit consent, visible fields, edit and delete controls, and audit logging."
- "Profile context can help with preferences, but it cannot authorize actions or unlock permissions."
- "No profile has been created or changed by this contract."

Avoid:

- "I created your profile."
- "I shared your profile with the provider."
- "Your profile proves your identity."
- "Because your profile says so, I can complete that action."
- "I saved your health, payment, or location details."

## QA Expectations

Phase 62 QA must verify:

- this readiness contract is present;
- profile backend, account creation, mutation, sharing, sync, identity proofing, role elevation, provider handoff, sensitive storage, and profile authority remain disabled by default;
- consent, purpose, fields, exclusions, source, owner, scope, authorization, controls, retention, redaction, non-authority, and audit requirements are enumerated;
- restricted domains are documented;
- Standard User profile mutation remains blocked;
- no app, server, route, profile backend, storage, network, provider, permission, role, identity, or execution hook was added.

Phase 62 itself remains a readiness boundary only.
