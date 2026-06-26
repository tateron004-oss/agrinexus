# Nexus Multilingual Data Labeling Contract Phase 30

Phase: 30 - Multilingual data labeling
Roadmap row: "Add language metadata to sources"
Status: inert localization label contract, no translation service, no language-pack runtime

## Purpose

Phase 30 defines how Nexus should label source data with language, region, translation status, and localization review metadata before presenting source-backed answers in multiple languages.

This phase does not translate content, call translation APIs, install language packs, change runtime language behavior, alter voice recognition, mutate source records, store localized data, contact localization partners, or execute actions.

## Contract Module

The inert contract module is:

- `public/nexus-multilingual-data-labeling-contract.js`

The module defines:

- supported baseline languages;
- localization label statuses;
- translation source types;
- required multilingual source label fields;
- translation review fields;
- audit event fields;
- no-execution defaults;
- a local helper for creating a frozen multilingual source label.

The module is not loaded by `public/index.html`, `public/app.js`, or `server.js`.

## Supported Baseline Languages

The current prototype baseline language labels are:

- `en` - English;
- `es` - Spanish;
- `fr` - French;
- `ar` - Arabic;
- `pt` - Portuguese;
- `sw` - Swahili.

These labels describe language metadata only. They do not certify clinical interpretation, legal translation, or regulated localization quality.

## Localization Label Statuses

Allowed localization label statuses:

- `not_labeled`;
- `source_language_known`;
- `translation_review_required`;
- `machine_translation_draft`;
- `human_review_required`;
- `human_reviewed_not_live`;
- `approved_for_source_backed_guidance`;
- `rejected_or_blocked`;
- `expired_or_needs_reverification`.

Status rules:

- `not_labeled` must not claim multilingual support.
- `source_language_known` may disclose original source language only.
- `translation_review_required` must not present translated content as reviewed.
- `machine_translation_draft` must be clearly labeled as draft and not used for regulated claims.
- `human_review_required` must wait for qualified review.
- `human_reviewed_not_live` may represent reviewed text but must not activate live regulated workflows.
- `approved_for_source_backed_guidance` may support future source-backed display after source verification and freshness requirements are met.
- `rejected_or_blocked` and `expired_or_needs_reverification` must use fallback or source-language-only disclosure.

## Translation Source Types

Allowed translation source types:

- `original_source_language`;
- `partner_provided_translation`;
- `human_translator_review`;
- `community_localization_review`;
- `machine_translation_draft`;
- `government_publication_translation`;
- `clinical_interpreter_review_required`;
- `not_provided`.

Regulated healthcare, legal, payment, emergency, identity, and prescription content must not be treated as clinically or legally certified unless a later compliance phase approves that use.

## Multilingual Source Label Fields

Each future multilingual source label should include:

- `labelId`;
- `sourceId`;
- `sourceLanguage`;
- `targetLanguage`;
- `supportedLanguages`;
- `localizationStatus`;
- `translationSourceType`;
- `translationSourceOwner`;
- `translationReviewStatus`;
- `reviewedBy`;
- `reviewedAt`;
- `expiresAt`;
- `region`;
- `dialectOrLocale`;
- `readingLevel`;
- `accessibilityNotes`;
- `clinicalInterpretationCertified`;
- `regulatedUseAllowed`;
- `sourceBackedGuidanceAllowed`;
- `liveActionEnabled`;
- `auditEvent`;
- `noExecution`.

## Translation Review Fields

Each future translation review should include:

- `requiresHumanReview`;
- `requiresQualifiedInterpreter`;
- `requiresPartnerApproval`;
- `requiresComplianceReview`;
- `allowsSourceBackedGuidance`;
- `allowsRegulatedUse`;
- `allowsLiveAction`;
- `reviewNotes`.

Defaults must keep:

- `allowsSourceBackedGuidance: false`;
- `allowsRegulatedUse: false`;
- `allowsLiveAction: false`.

## Audit Event Fields

Each future localization audit event should include:

- `eventType`;
- `labelId`;
- `sourceId`;
- `sourceLanguage`;
- `targetLanguage`;
- `localizationStatus`;
- `translationSourceType`;
- `noExecution`;
- `createdAt`.

Audit events must not include medical records, payment details, precise location, provider credentials, contact identifiers, private user data, or executable action payloads.

## No-Execution Defaults

Multilingual source labels are metadata, not action authority. They must default to:

- `noExecution: true`;
- `clinicalInterpretationCertified: false`;
- `regulatedUseAllowed: false`;
- `sourceBackedGuidanceAllowed: false`;
- `liveActionEnabled: false`;
- `providerContacted: false`;
- `userDataShared: false`;
- `externalActionExecuted: false`;
- `paymentExecuted: false`;
- `marketplaceTransactionExecuted: false`;
- `medicalRecordAccessed: false`;
- `prescriptionSubmitted: false`;
- `emergencyDispatched: false`;
- `locationShared: false`;
- `callOrMessageSent: false`.

## User-Facing Boundary

Future answers should distinguish between language support and certified translation:

- "source language known";
- "translation review required";
- "human-reviewed translation not live yet";
- "not clinically certified";
- "requires qualified interpreter review for regulated use";
- "I can show general guidance in this language, but regulated action requires approved interpretation, consent, and audit logging."

Nexus must not claim medical interpretation compliance, legal translation certification, live provider translation, or regulated localization readiness unless a future compliance phase approves it.

## QA Expectations

QA must verify:

- six baseline language labels are defined;
- localization statuses are defined;
- translation source types are defined;
- required multilingual source label fields exist;
- required translation review fields exist;
- audit event fields exist;
- defaults block regulated use, source-backed guidance, clinical certification, and live action;
- no-execution and dangerous action flags default safely;
- no translation API, language-pack runtime, storage write, source mutation, provider adapter, permission prompt, navigation, or execution behavior exists;
- Standard User runtime files do not import or load the module;
- Phase 24 through Phase 29 contracts remain present.

## Future Work

Later phases may add source language tagging or review-only localization fixtures after source verification, translation review policy, compliance guidance, audit logging, and fallback behavior are complete. Multilingual labels must remain metadata and must not unlock regulated actions, provider contact, medical access, payments, emergency dispatch, location sharing, marketplace execution, calls, or messages.
