# Nexus Community Service Organization Connector Contract - Phase 44

Status: metadata-only community service organization connector contract, no referrals, no agency contact, no personal-data sharing, no account/application submission

## Purpose

Phase 44 defines how Nexus should model future NGO, community-service, and government-service organization connectors. These connectors can eventually support verified service directories, eligibility-preparation guidance, referral readiness, language access, and partner-confirmed service handoffs. They must remain disabled until service organization verification, referral approval, personal-data sharing consent, source freshness, jurisdiction review, and audit controls are complete.

This phase does not submit referrals, contact agencies, contact caseworkers, share personal context, create accounts, submit applications, schedule appointments, share location, process payments, dispatch emergency help, navigate externally, or activate provider execution.

Existing public community resource guidance remains separate from this organization connector contract. Phase 44 only models future service organization partners.

## Roadmap Alignment

Phase 44 in the Nexus 100 roadmap:

`Community service orgs | Onboard NGO/government services | community connector | future | controlled | service orgs | referral approval | community QA | referral gated`

Phase 44 builds on the Phase 23 community-service public source contracts. Public guidance may remain available for low-risk community-resource questions, but any partner referral or personal-data sharing remains gated until explicit approval paths exist.

## Connector Statuses

- `not_configured`
- `service_org_verification_required`
- `service_directory_required`
- `eligibility_source_required`
- `jurisdiction_review_required`
- `terms_review_required`
- `privacy_review_required`
- `referral_gate_required`
- `application_gate_required`
- `appointment_gate_required`
- `sandbox_testing_required`
- `approved_not_live`
- `active_source_directory_only`
- `rejected_or_blocked`
- `inactive`

## Service Categories

- `ngo_community_service`
- `government_service_agency`
- `food_shelter_household_support`
- `family_child_support`
- `disability_accessibility_support`
- `legal_civil_support`
- `digital_access_support`
- `language_translation_support`
- `workforce_community_support`
- `health_access_navigation`
- `eligibility_review_resource`
- `community_referral_boundary`

## Required Connector Fields

- `connectorId`
- `providerName`
- `sourceOwner`
- `connectorStatus`
- `serviceCategories`
- `serviceRegions`
- `supportedLanguages`
- `serviceOrgVerificationStatus`
- `serviceDirectoryStatus`
- `eligibilitySourceStatus`
- `jurisdictionReviewStatus`
- `termsReviewStatus`
- `privacyReviewStatus`
- `referralGateStatus`
- `applicationGateStatus`
- `appointmentGateStatus`
- `freshnessModel`
- `regionalScope`
- `languageScope`
- `allowedResponseStates`
- `personalDataSharingGate`
- `referralReadinessGate`
- `auditRequirements`
- `auditEvent`
- `communityContextAllowed`
- `liveAvailabilityAllowed`
- `agencyContactEnabled`
- `caseworkerContactEnabled`
- `personalDataSharingEnabled`
- `referralSubmissionEnabled`
- `applicationSubmissionEnabled`
- `appointmentSchedulingEnabled`
- `accountCreationEnabled`
- `locationSharingEnabled`
- `paymentEnabled`
- `emergencyDispatchEnabled`
- `liveActionEnabled`
- `noExecution`

## Personal Data Sharing Gate Fields

- `requiresUserApproval`
- `requiresPurposeDisclosure`
- `requiresMinimumNecessaryData`
- `requiresPrivacyReview`
- `requiresServiceOrgVerification`
- `requiresAuditLogging`
- `allowsPersonalDataSharing`
- `allowsProfileSharing`
- `allowsLocationSharing`
- `allowsContactInfoSharing`
- `allowsExternalNavigation`

## Referral Readiness Gate Fields

- `requiresServiceOrgVerification`
- `requiresEligibilitySource`
- `requiresJurisdictionReview`
- `requiresUserApproval`
- `requiresPartnerConfirmation`
- `requiresReferralPolicyReview`
- `requiresApplicationPolicyReview`
- `requiresAppointmentPolicyReview`
- `requiresAuditLogging`
- `allowsCommunityContext`
- `allowsAgencyContact`
- `allowsCaseworkerContact`
- `allowsReferralSubmission`
- `allowsApplicationSubmission`
- `allowsAppointmentScheduling`
- `allowsAccountCreation`
- `allowsPaymentProcessing`
- `allowsEmergencyDispatch`
- `allowsExternalNavigation`

## Audit Event Fields

- `eventType`
- `connectorId`
- `connectorStatus`
- `serviceCategories`
- `communityContextAllowed`
- `liveAvailabilityAllowed`
- `agencyContactEnabled`
- `caseworkerContactEnabled`
- `personalDataSharingEnabled`
- `referralSubmissionEnabled`
- `applicationSubmissionEnabled`
- `appointmentSchedulingEnabled`
- `accountCreationEnabled`
- `locationSharingEnabled`
- `paymentEnabled`
- `emergencyDispatchEnabled`
- `noExecution`
- `createdAt`

## Safety Defaults

The Phase 44 contract defaults to:

- `noExecution: true`;
- no live service directory use;
- no agency contact;
- no caseworker contact;
- no personal-data sharing;
- no referral submission;
- no application submission;
- no appointment scheduling;
- no account creation;
- no location sharing;
- no payment processing;
- no emergency dispatch;
- no external action;
- no call or message;
- no navigation;
- no storage side effects.

Future service organization connectors may become source-ready only after service organization review, source freshness rules, jurisdiction review, privacy review, user consent, referral approval, and audit logging are complete. Execution remains disabled until a later approved phase explicitly adds a partner adapter.

## Allowed Response States

- `community_resource_guidance`
- `service_directory_guidance`
- `eligibility_preparation`
- `prepared_referral_preview`
- `unavailable_source_fallback`

These states allow Nexus to explain options and prepare questions, not to submit referrals or share user data.

## Integration Boundary

Phase 44 is a contract and QA phase only. The connector file must not be loaded by `public/index.html`, consumed by `public/app.js`, or served through special backend behavior in `server.js`. Normal static-file availability is acceptable, but no runtime hook, dynamic import, route handler, provider adapter, fetch call, storage write, navigation, referral path, application path, appointment path, account path, location path, payment path, emergency path, or dispatch path may be introduced.

## Future Activation Requirements

Before community service organization connectors can support referrals or partner handoffs, Nexus must have:

- verified service organization identity;
- reviewed source terms and jurisdiction scope;
- configured freshness and source attribution;
- explicit user approval for personal-data sharing;
- minimum-necessary data rules;
- referral, application, and appointment policy review;
- partner confirmation rules;
- audit event creation;
- cancellation and fallback behavior;
- QA proving no first-turn referral or service execution.

