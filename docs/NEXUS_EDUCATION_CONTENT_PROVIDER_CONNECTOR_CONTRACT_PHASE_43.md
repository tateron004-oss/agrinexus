# Nexus Education Content Provider Connector Contract - Phase 43

Status: metadata-only education content provider connector contract, no enrollment, no progress mutation, no certificate action, no external content loading

## Purpose

Phase 43 defines how Nexus should model future education and training content provider connectors. These connectors can eventually support source-backed lessons, learning content catalogs, localized course material, attribution display, and content freshness rules. They must remain disabled until education partner verification, content rights review, attribution rules, source freshness, localization review, and audit controls are complete.

This phase does not fetch live content, load external lessons, enroll learners, mutate progress, complete lessons, issue certificates, contact providers, create accounts, process payments, navigate externally, or activate provider execution.

Existing local learning workflows remain separate from this provider connector contract. Phase 43 only models future external education content sources.

## Roadmap Alignment

Phase 43 in the Nexus 100 roadmap:

`Education providers | Onboard learning content | content connector | future | low | education partners | attribution audit | education QA | content source-backed`

Phase 43 builds on the Phase 19 public data connector baseline, Phase 22 workforce public source contracts, Phase 41 training provider contract, and Phase 42 certification provider contract. Low-risk source-backed education guidance remains possible only when source, freshness, and attribution rules are clear; runtime content integrations remain disabled.

## Connector Statuses

- `not_configured`
- `education_partner_verification_required`
- `content_catalog_required`
- `content_rights_review_required`
- `attribution_review_required`
- `freshness_rule_required`
- `localization_review_required`
- `accessibility_review_required`
- `sandbox_testing_required`
- `approved_not_live`
- `active_source_directory_only`
- `rejected_or_blocked`
- `inactive`

## Content Categories

- `learning_content_catalog`
- `workforce_training_content`
- `agriculture_training_content`
- `technical_skills_content`
- `health_access_education_content`
- `digital_literacy_content`
- `language_learning_content`
- `accessibility_learning_content`
- `quiz_question_bank`
- `lesson_outline_source`
- `localized_content_source`
- `content_attribution_boundary`

## Required Connector Fields

- `connectorId`
- `providerName`
- `sourceOwner`
- `connectorStatus`
- `contentCategories`
- `contentRegions`
- `supportedLanguages`
- `partnerVerificationStatus`
- `contentCatalogStatus`
- `contentRightsReviewStatus`
- `attributionReviewStatus`
- `freshnessRuleStatus`
- `localizationReviewStatus`
- `accessibilityReviewStatus`
- `freshnessModel`
- `regionalScope`
- `languageScope`
- `allowedResponseStates`
- `attributionGate`
- `contentReadinessGate`
- `auditRequirements`
- `auditEvent`
- `contentContextAllowed`
- `sourceBackedContentAllowed`
- `liveContentFetchEnabled`
- `providerContactEnabled`
- `enrollmentEnabled`
- `progressMutationEnabled`
- `certificateActionEnabled`
- `paymentEnabled`
- `liveActionEnabled`
- `noExecution`

## Attribution Gate Fields

- `requiresSourceOwner`
- `requiresSourceCategory`
- `requiresRightsReview`
- `requiresFreshnessDisplay`
- `requiresLocalizationDisclosure`
- `requiresAccessibilityReview`
- `requiresAuditLogging`
- `allowsUnattributedContent`
- `allowsRightsUnreviewedContent`
- `allowsFreshnessHiddenContent`
- `allowsExternalNavigation`

## Content Readiness Gate Fields

- `requiresEducationPartnerVerification`
- `requiresContentCatalog`
- `requiresAttributionReview`
- `requiresFreshnessRule`
- `requiresLocalizationReview`
- `requiresAccessibilityReview`
- `requiresAuditLogging`
- `allowsContentContext`
- `allowsSourceBackedContent`
- `allowsLiveContentFetch`
- `allowsProviderContact`
- `allowsEnrollment`
- `allowsProgressMutation`
- `allowsCertificateAction`
- `allowsPaymentProcessing`
- `allowsExternalNavigation`

## Audit Event Fields

- `eventType`
- `connectorId`
- `connectorStatus`
- `contentCategories`
- `contentContextAllowed`
- `sourceBackedContentAllowed`
- `liveContentFetchEnabled`
- `providerContactEnabled`
- `enrollmentEnabled`
- `progressMutationEnabled`
- `certificateActionEnabled`
- `paymentEnabled`
- `noExecution`
- `createdAt`

## Safety Defaults

The Phase 43 contract defaults to:

- `noExecution: true`;
- no live content fetch;
- no unreviewed source-backed content;
- no unattributed content;
- no provider contact;
- no enrollment;
- no progress mutation;
- no certificate action;
- no payment processing;
- no external navigation;
- no storage side effects.

Future education content connectors may become source-ready only after source owner, content rights, attribution, freshness, localization, accessibility, and audit rules are complete. Execution and external content loading remain disabled until a later approved phase explicitly adds a content adapter.

## Allowed Response States

- `education_source_guidance`
- `content_catalog_guidance`
- `lesson_outline_guidance`
- `localized_learning_guidance`
- `unavailable_source_fallback`

These states allow Nexus to explain available content and source requirements, not to enroll users, load external content, or mutate learning records.

## Integration Boundary

Phase 43 is a contract and QA phase only. The connector file must not be loaded by `public/index.html`, consumed by `public/app.js`, or served through special backend behavior in `server.js`. Normal static-file availability is acceptable, but no runtime hook, dynamic import, route handler, provider adapter, fetch call, storage write, navigation, enrollment path, certificate path, progress update path, or dispatch path may be introduced.

## Future Activation Requirements

Before education content provider connectors can support source-backed learning content, Nexus must have:

- verified education partner identity;
- reviewed content rights and reuse terms;
- configured source attribution and freshness display;
- localization and accessibility review;
- user-facing unavailable-source fallback;
- audit event creation;
- QA proving no enrollment, progress mutation, certificate issue, external navigation, or payment execution.

