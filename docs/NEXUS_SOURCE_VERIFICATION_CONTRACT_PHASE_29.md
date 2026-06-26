# Nexus Source Verification Contract Phase 29

Phase: 29 - Source verification
Roadmap row: "Verify ownership and terms"
Status: inert verification review queue contract, no review UI, no source mutation, no live source activation

## Purpose

Phase 29 defines how Nexus should represent future source ownership, terms review, data rights review, and verification decisions before a source can support source-backed answers. A source must be clear about who owns it, what terms apply, where it applies, when it was verified, and what it is allowed to support.

This phase does not create an admin review queue, upload proof, validate legal documents, call provider APIs, mutate source registries, mark sources live, contact providers, share user data, request permissions, or execute actions.

## Contract Module

The inert contract module is:

- `public/nexus-source-verification-contract.js`

The module defines:

- source verification statuses;
- source owner proof types;
- terms review statuses;
- required verification review fields;
- verification decision fields;
- audit event fields;
- no-execution defaults;
- a local helper for creating a frozen source verification review.

The module is not loaded by `public/index.html`, `public/app.js`, or `server.js`.

## Source Verification Statuses

Allowed source verification statuses:

- `not_started`;
- `owner_proof_required`;
- `terms_review_required`;
- `data_rights_review_required`;
- `freshness_rule_required`;
- `regional_scope_review_required`;
- `language_scope_review_required`;
- `verification_in_progress`;
- `verified_not_live`;
- `rejected_or_blocked`;
- `expired_or_needs_reverification`.

Status rules:

- `not_started` must not support source-backed claims.
- `owner_proof_required` must wait for ownership evidence.
- `terms_review_required` must wait for usage terms review.
- `data_rights_review_required` must wait for data-use rights review.
- `freshness_rule_required` must wait for freshness and stale-source rules.
- `regional_scope_review_required` must wait for region/jurisdiction review.
- `language_scope_review_required` must wait for localization scope review.
- `verification_in_progress` must remain review-only.
- `verified_not_live` may represent a reviewed source but must not activate a connector or live action.
- `rejected_or_blocked` must not support source-backed claims.
- `expired_or_needs_reverification` must fall back until reverified.

## Source Owner Proof Types

Allowed owner proof types:

- `official_domain`;
- `signed_partner_agreement`;
- `public_registry_record`;
- `government_publication`;
- `organization_document`;
- `api_terms_document`;
- `data_use_agreement`;
- `manual_admin_review`;
- `not_provided`.

Proof is review context only. It must not create trust by itself without terms, freshness, scope, compliance, and audit review.

## Terms Review Statuses

Allowed terms review statuses:

- `not_reviewed`;
- `review_required`;
- `allowed_for_public_guidance`;
- `allowed_for_partner_guidance`;
- `allowed_for_regulated_use_after_consent`;
- `restricted`;
- `rejected`;
- `expired`.

Terms review must not enable live regulated action unless later phases add connector activation, consent, provider confirmation, and audit controls.

## Verification Review Fields

Each future source verification review should include:

- `verificationId`;
- `sourceId`;
- `sourceName`;
- `sourceOwner`;
- `sourceType`;
- `verificationStatus`;
- `ownerProofType`;
- `ownerProofReference`;
- `termsReviewStatus`;
- `dataRightsStatus`;
- `freshnessRuleStatus`;
- `regionalScopeStatus`;
- `languageScopeStatus`;
- `complianceReviewStatus`;
- `reviewedBy`;
- `reviewedAt`;
- `expiresAt`;
- `verificationDecision`;
- `auditEvent`;
- `sourceBackedGuidanceAllowed`;
- `connectorActivationAllowed`;
- `liveActionEnabled`;
- `noExecution`.

## Verification Decision Fields

Each future verification decision should include:

- `decisionStatus`;
- `decisionReason`;
- `allowedUse`;
- `blockedUse`;
- `requiresReverification`;
- `requiresAdminApproval`;
- `allowsSourceBackedGuidance`;
- `allowsConnectorActivation`;
- `allowsLiveAction`.

Defaults must keep:

- `allowsSourceBackedGuidance: false`;
- `allowsConnectorActivation: false`;
- `allowsLiveAction: false`.

## Audit Event Fields

Each future source verification audit event should include:

- `eventType`;
- `verificationId`;
- `sourceId`;
- `verificationStatus`;
- `termsReviewStatus`;
- `decisionStatus`;
- `noExecution`;
- `createdAt`.

Audit events must not include private user data, medical records, payment details, precise location, provider credentials, contact identifiers, or executable action payloads.

## No-Execution Defaults

Source verification reviews are review context, not authority. They must default to:

- `noExecution: true`;
- `sourceBackedGuidanceAllowed: false`;
- `connectorActivationAllowed: false`;
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

Future answer surfaces should use cautious language:

- "source verification required";
- "terms review required";
- "source verified but not live yet";
- "requires re-verification";
- "I need a verified source and approved terms before I can present this as source-backed.";

Nexus must not say a source is live, active, connected, current, provider-approved, clinically approved, payment-ready, dispatch-ready, or action-enabled just because verification metadata exists.

## QA Expectations

QA must verify:

- required verification statuses are defined;
- required owner proof types are defined;
- required terms review statuses are defined;
- required verification review fields exist;
- required verification decision fields exist;
- audit event fields exist;
- defaults block source-backed guidance, connector activation, and live action;
- no-execution and dangerous action flags default safely;
- no review UI, upload endpoint, source registry mutation, storage write, provider adapter, permission prompt, navigation, or execution behavior exists;
- Standard User runtime files do not import or load the module;
- Phase 24 through Phase 28 contracts remain present.

## Future Work

Later phases may add an admin-only source verification queue after authentication, role authorization, audit logging, legal review workflow, and rollback policy are ready. Source verification must remain separate from provider contact, regulated action, payment, marketplace execution, medical access, location sharing, emergency dispatch, call, and message behavior.
