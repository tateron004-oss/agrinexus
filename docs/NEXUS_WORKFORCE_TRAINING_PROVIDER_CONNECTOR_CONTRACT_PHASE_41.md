# Nexus Workforce Training Provider Connector Contract - Phase 41

Status: metadata-only workforce/training provider connector contract, no referrals, no applications, no profile sharing, no provider contact

## Purpose

Phase 41 defines how Nexus should model future workforce and training provider connectors. These connectors can eventually help workers discover programs, prepare eligibility questions, review training options, and prepare a next-step referral or enrollment handoff. They must remain disabled until program partner verification, source freshness, profile-sharing approval, referral approval, user consent, and audit controls are complete.

This phase does not fetch live partner feeds, submit referrals, apply to programs, contact providers, share profiles, share resumes, issue credentials, schedule interviews, process payments, navigate externally, or activate provider execution.

## Roadmap Alignment

Phase 41 in the Nexus 100 roadmap:

`Workforce/training providers | Onboard workforce programs | training connector | future | controlled | program partners | profile sharing approval | workforce QA | referrals gated`

Phase 41 builds on the Phase 22 public workforce source contracts. Public-source guidance remains available for low-risk workforce questions, but partner provider workflows stay gated until explicit approval paths exist.

## Connector Statuses

- `not_configured`
- `program_partner_verification_required`
- `program_catalog_required`
- `eligibility_source_required`
- `terms_review_required`
- `profile_sharing_review_required`
- `referral_gate_required`
- `application_gate_required`
- `credential_policy_review_required`
- `sandbox_testing_required`
- `approved_not_live`
- `active_source_directory_only`
- `rejected_or_blocked`
- `inactive`

## Program Categories

- `workforce_training_program`
- `technical_training_program`
- `agriculture_workforce_training`
- `job_readiness_program`
- `career_pathway_program`
- `apprenticeship_program`
- `youth_workforce_program`
- `women_workforce_program`
- `community_workforce_program`
- `language_and_digital_skills_program`
- `eligibility_review_resource`
- `training_referral_boundary`

## Required Connector Fields

- `connectorId`
- `providerName`
- `sourceOwner`
- `connectorStatus`
- `programCategories`
- `programRegions`
- `supportedLanguages`
- `partnerVerificationStatus`
- `programCatalogStatus`
- `eligibilitySourceStatus`
- `termsReviewStatus`
- `profileSharingReviewStatus`
- `referralGateStatus`
- `applicationGateStatus`
- `credentialPolicyStatus`
- `freshnessModel`
- `regionalScope`
- `languageScope`
- `allowedResponseStates`
- `profileSharingGate`
- `referralReadinessGate`
- `auditRequirements`
- `auditEvent`
- `programContextAllowed`
- `liveAvailabilityAllowed`
- `providerContactEnabled`
- `profileSharingEnabled`
- `referralSubmissionEnabled`
- `applicationSubmissionEnabled`
- `credentialIssuingEnabled`
- `paymentEnabled`
- `liveActionEnabled`
- `noExecution`

## Profile Sharing Gate Fields

- `requiresUserApproval`
- `requiresPurposeDisclosure`
- `requiresMinimumNecessaryProfile`
- `requiresResumeReview`
- `requiresPartnerVerification`
- `requiresAuditLogging`
- `allowsProfileSharing`
- `allowsResumeSharing`
- `allowsCredentialSharing`
- `allowsContactInfoSharing`
- `allowsExternalNavigation`

## Referral Readiness Gate Fields

- `requiresProgramPartnerVerification`
- `requiresEligibilitySource`
- `requiresUserApproval`
- `requiresPartnerConfirmation`
- `requiresReferralPolicyReview`
- `requiresApplicationPolicyReview`
- `requiresCredentialPolicyReview`
- `requiresAuditLogging`
- `allowsProgramContext`
- `allowsProviderContact`
- `allowsReferralSubmission`
- `allowsApplicationSubmission`
- `allowsCredentialIssuing`
- `allowsPaymentProcessing`
- `allowsExternalNavigation`

## Audit Event Fields

- `eventType`
- `connectorId`
- `connectorStatus`
- `programCategories`
- `programContextAllowed`
- `liveAvailabilityAllowed`
- `providerContactEnabled`
- `profileSharingEnabled`
- `referralSubmissionEnabled`
- `applicationSubmissionEnabled`
- `credentialIssuingEnabled`
- `paymentEnabled`
- `noExecution`
- `createdAt`

## Safety Defaults

The Phase 41 contract defaults to:

- `noExecution: true`;
- no live provider feed use;
- no provider contact;
- no profile or resume sharing;
- no referral submission;
- no program application submission;
- no credential issuing;
- no payment processing;
- no external action;
- no call or message;
- no navigation;
- no storage side effects.

Future connectors may become source-ready only after program partner review, source freshness rules, user-facing source attribution, consent language, profile-sharing approval, referral gates, and audit logging are complete. Execution remains disabled until a later approved phase explicitly adds an execution adapter.

## Allowed Response States

- `workforce_program_guidance`
- `training_source_guidance`
- `eligibility_preparation`
- `prepared_referral_preview`
- `unavailable_source_fallback`

These states allow Nexus to explain options and prepare questions, not to submit anything.

## Integration Boundary

Phase 41 is a contract and QA phase only. The connector file must not be loaded by `public/index.html`, consumed by `public/app.js`, or served through special backend behavior in `server.js`. Normal static-file availability is acceptable, but no runtime hook, dynamic import, route handler, provider adapter, fetch call, storage write, navigation, or dispatch path may be introduced.

## Future Activation Requirements

Before workforce or training provider connectors can support real referrals or applications, Nexus must have:

- verified program partner identity;
- reviewed source terms;
- configured data freshness and source attribution;
- explicit user approval for profile sharing;
- referral and application policy review;
- partner confirmation rules;
- minimum-necessary data rules;
- audit event creation;
- cancellation and fallback behavior;
- QA proving no first-turn execution.

