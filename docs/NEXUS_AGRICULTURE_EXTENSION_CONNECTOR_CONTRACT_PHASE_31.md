# Nexus Agriculture Extension Connector Contract Phase 31

Phase: 31 - Agriculture extension connectors
Roadmap row: "Connect extension providers"
Status: inert extension connector contract, no provider contact, no farm data sharing, no live connector

## Purpose

Phase 31 defines how Nexus should model future agriculture extension office connectors. Extension connectors can eventually help farmers find local advisory resources, crop guidance, field support, training, and next-step referrals, but they must remain disabled until source verification, partner approval, consent, and audit controls are complete.

This phase does not contact extension officers, send farm details, schedule visits, request location, submit photos, diagnose crops, dispatch field agents, create marketplace transactions, process payments, or activate a live connector.

## Contract Module

The inert contract module is:

- `public/nexus-agriculture-extension-connector-contract.js`

The module defines:

- extension connector statuses;
- extension service categories;
- required connector fields;
- contact approval gate fields;
- farm data sharing gate fields;
- audit event fields;
- no-execution defaults;
- a local helper for creating a frozen agriculture extension connector record.

The module is not loaded by `public/index.html`, `public/app.js`, or `server.js`.

## Extension Connector Statuses

Allowed extension connector statuses:

- `not_configured`;
- `source_verification_required`;
- `partner_agreement_required`;
- `regional_scope_required`;
- `language_review_required`;
- `sandbox_testing_required`;
- `approved_not_live`;
- `active_source_only`;
- `rejected_or_blocked`;
- `inactive`.

Status rules:

- `not_configured` must not support source-backed extension claims.
- `source_verification_required` must wait for Phase 29-style source verification.
- `partner_agreement_required` must wait for partner terms approval.
- `regional_scope_required` must wait for geographic scope review.
- `language_review_required` must wait for localization labels.
- `sandbox_testing_required` must remain non-live.
- `approved_not_live` may show readiness but must not contact extension offices.
- `active_source_only` may support future source-backed public guidance but must not create handoffs.
- `rejected_or_blocked` and `inactive` must not be used for source-backed answers.

## Extension Service Categories

Allowed extension service categories:

- `crop_advisory`;
- `field_support`;
- `soil_guidance`;
- `irrigation_guidance`;
- `pest_disease_guidance`;
- `post_harvest_support`;
- `training_referral`;
- `cooperative_navigation`;
- `market_readiness_guidance`;
- `climate_resilience_guidance`.

These categories are descriptive. They must not imply a crop diagnosis, extension officer contact, field visit, or live local condition.

## Agriculture Extension Connector Fields

Each future extension connector record should include:

- `connectorId`;
- `extensionOfficeName`;
- `sourceOwner`;
- `connectorStatus`;
- `serviceCategories`;
- `serviceRegions`;
- `supportedCrops`;
- `supportedLanguages`;
- `sourceVerificationStatus`;
- `partnerAgreementStatus`;
- `freshnessModel`;
- `regionalScope`;
- `languageScope`;
- `allowedResponseStates`;
- `contactApprovalGate`;
- `farmDataSharingGate`;
- `auditRequirements`;
- `auditEvent`;
- `sourceBackedGuidanceAllowed`;
- `providerContactEnabled`;
- `farmDataSharingEnabled`;
- `locationSharingEnabled`;
- `liveActionEnabled`;
- `noExecution`.

## Contact Approval Gate

Each future contact approval gate should include:

- `requiresUserApproval`;
- `requiresProviderConfirmation`;
- `requiresAdminApproval`;
- `requiresAuditLogging`;
- `allowsExtensionContact`;
- `allowsVisitScheduling`;
- `allowsMessageSending`;
- `allowsCallHandoff`.

Defaults must keep every `allows*` field false.

## Farm Data Sharing Gate

Each future farm data sharing gate should include:

- `requiresPurposeDisclosure`;
- `requiresUserConsent`;
- `requiresMinimumNecessaryData`;
- `requiresLocationConsent`;
- `requiresPhotoConsent`;
- `allowsFarmDataSharing`;
- `allowsPreciseLocationSharing`;
- `allowsCropPhotoSharing`.

Defaults must keep every `allows*` field false.

## Audit Event Fields

Each future extension connector audit event should include:

- `eventType`;
- `connectorId`;
- `connectorStatus`;
- `serviceCategories`;
- `sourceBackedGuidanceAllowed`;
- `providerContactEnabled`;
- `farmDataSharingEnabled`;
- `noExecution`;
- `createdAt`.

Audit events must not include private farm details, precise location, crop photos, household details, contact identifiers, payment details, or executable provider payloads.

## No-Execution Defaults

Extension connector records are source/provider context, not action authority. They must default to:

- `noExecution: true`;
- `sourceBackedGuidanceAllowed: false`;
- `providerContactEnabled: false`;
- `farmDataSharingEnabled: false`;
- `locationSharingEnabled: false`;
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

Future user-facing copy should say:

- "extension source not connected yet";
- "requires verified extension source";
- "requires approval before contacting an extension office";
- "requires consent before sharing farm details";
- "I can prepare questions for extension support, but I cannot contact anyone until the required connector and approval are active."

Nexus must not say an extension officer was contacted, a field visit was scheduled, a crop diagnosis was completed, farm details were shared, location was sent, or a marketplace/payment action happened unless later approved execution phases enable that behavior.

## QA Expectations

QA must verify:

- required extension connector statuses are defined;
- required service categories are defined;
- required connector fields exist;
- required contact approval gate fields exist;
- required farm data sharing gate fields exist;
- audit event fields exist;
- defaults block source-backed guidance, provider contact, farm data sharing, location sharing, and live action;
- no-execution and dangerous action flags default safely;
- no provider API, contact path, scheduling, storage write, permission prompt, navigation, location use, payment, marketplace action, or execution behavior exists;
- Standard User runtime files do not import or load the module;
- Phase 20 agriculture public source contracts and Phase 24 through Phase 30 contracts remain present.

## Future Work

Later phases may add source-ready extension connectors after source verification, regional scope, localization review, partner approval, consent language, and audit logging are complete. Extension connectors must remain separate from crop diagnosis, drone dispatch, marketplace execution, logistics dispatch, payment, location sharing, call, and message behavior.
