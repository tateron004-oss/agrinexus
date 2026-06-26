# Nexus Farmer Advisory Connector Contract Phase 32

Phase: 32 - Farmer advisory connectors
Roadmap row: "Add farmer advisory providers"
Status: inert advisory connector contract, no advisory handoff, no farm data sharing, no live connector

## Purpose

Phase 32 defines how Nexus should model future farmer advisory partner connectors. Advisory connectors can eventually help farmers prepare questions, compare advisory resources, review farm-support next steps, and connect to approved advisory partners, but they must remain disabled until source verification, partner approval, farmer consent, and audit controls are complete.

This phase does not contact advisory partners, send farm details, share location, submit crop photos, schedule advisory sessions, diagnose crops, create marketplace transactions, process payments, dispatch logistics or drones, or activate a live connector.

## Contract Module

The inert contract module is:

- `public/nexus-farmer-advisory-connector-contract.js`

The module defines:

- advisory connector statuses;
- advisory service categories;
- required connector fields;
- advisory handoff gate fields;
- farm data consent gate fields;
- audit event fields;
- no-execution defaults;
- a local helper for creating a frozen farmer advisory connector record.

The module is not loaded by `public/index.html`, `public/app.js`, or `server.js`.

## Advisory Connector Statuses

Allowed advisory connector statuses:

- `not_configured`;
- `source_verification_required`;
- `partner_agreement_required`;
- `advisor_credential_review_required`;
- `regional_scope_required`;
- `language_review_required`;
- `sandbox_testing_required`;
- `approved_not_live`;
- `active_source_only`;
- `rejected_or_blocked`;
- `inactive`.

Status rules:

- `not_configured` must not support source-backed advisory claims.
- `source_verification_required` must wait for Phase 29-style source verification.
- `partner_agreement_required` must wait for partner terms approval.
- `advisor_credential_review_required` must wait for advisory qualification review.
- `regional_scope_required` must wait for geographic scope review.
- `language_review_required` must wait for localization labels.
- `sandbox_testing_required` must remain non-live.
- `approved_not_live` may show readiness but must not contact advisory partners.
- `active_source_only` may support future source-backed public guidance but must not create handoffs.
- `rejected_or_blocked` and `inactive` must not be used for source-backed answers.

## Advisory Service Categories

Allowed advisory service categories:

- `farm_planning`;
- `crop_care_guidance`;
- `soil_fertility_guidance`;
- `irrigation_planning`;
- `pest_disease_triage`;
- `post_harvest_guidance`;
- `market_readiness_advice`;
- `cooperative_advisory`;
- `climate_resilience_planning`;
- `training_pathway_advice`.

These categories are descriptive. They must not imply a final crop diagnosis, advisor contact, field visit, live local condition, marketplace action, payment, logistics dispatch, or drone dispatch.

## Farmer Advisory Connector Fields

Each future farmer advisory connector record should include:

- `connectorId`;
- `advisoryPartnerName`;
- `sourceOwner`;
- `connectorStatus`;
- `serviceCategories`;
- `serviceRegions`;
- `supportedCrops`;
- `supportedLanguages`;
- `advisorCredentialStatus`;
- `sourceVerificationStatus`;
- `partnerAgreementStatus`;
- `freshnessModel`;
- `regionalScope`;
- `languageScope`;
- `allowedResponseStates`;
- `advisoryHandoffGate`;
- `farmDataConsentGate`;
- `auditRequirements`;
- `auditEvent`;
- `sourceBackedGuidanceAllowed`;
- `advisoryHandoffEnabled`;
- `farmDataSharingEnabled`;
- `locationSharingEnabled`;
- `liveActionEnabled`;
- `noExecution`.

## Advisory Handoff Gate

Each future advisory handoff gate should include:

- `requiresUserApproval`;
- `requiresAdvisorConfirmation`;
- `requiresAdminApproval`;
- `requiresAuditLogging`;
- `allowsAdvisorContact`;
- `allowsSessionScheduling`;
- `allowsMessageSending`;
- `allowsCallHandoff`.

Defaults must keep every `allows*` field false.

## Farm Data Consent Gate

Each future farm data consent gate should include:

- `requiresPurposeDisclosure`;
- `requiresUserConsent`;
- `requiresMinimumNecessaryData`;
- `requiresLocationConsent`;
- `requiresPhotoConsent`;
- `requiresFarmProfileConsent`;
- `allowsFarmDataSharing`;
- `allowsPreciseLocationSharing`;
- `allowsCropPhotoSharing`;
- `allowsFarmProfileSharing`.

Defaults must keep every `allows*` field false.

## Audit Event Fields

Each future farmer advisory connector audit event should include:

- `eventType`;
- `connectorId`;
- `connectorStatus`;
- `serviceCategories`;
- `sourceBackedGuidanceAllowed`;
- `advisoryHandoffEnabled`;
- `farmDataSharingEnabled`;
- `noExecution`;
- `createdAt`.

Audit events must not include private farm details, precise location, crop photos, household details, contact identifiers, payment details, marketplace buyer or seller details, or executable provider payloads.

## No-Execution Defaults

Farmer advisory connector records are source/provider context, not action authority. They must default to:

- `noExecution: true`;
- `sourceBackedGuidanceAllowed: false`;
- `advisoryHandoffEnabled: false`;
- `providerContactEnabled: false`;
- `farmDataSharingEnabled: false`;
- `locationSharingEnabled: false`;
- `liveActionEnabled: false`;
- `advisorContacted: false`;
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

- "farmer advisory source not connected yet";
- "requires verified advisory source";
- "requires approval before contacting an advisory partner";
- "requires consent before sharing farm details";
- "I can prepare advisory questions and next steps, but I cannot contact anyone or share farm data until the required connector and approval are active."

Nexus must not say an advisor was contacted, an advisory session was scheduled, a crop diagnosis was completed, farm details were shared, location was sent, or a marketplace/payment/logistics/drone action happened unless later approved execution phases enable that behavior.

## QA Expectations

QA must verify:

- required advisory connector statuses are defined;
- required service categories are defined;
- required connector fields exist;
- required advisory handoff gate fields exist;
- required farm data consent gate fields exist;
- audit event fields exist;
- defaults block source-backed guidance, advisory handoff, provider contact, farm data sharing, location sharing, and live action;
- no-execution and dangerous action flags default safely;
- no provider API, contact path, scheduling, storage write, permission prompt, navigation, location use, payment, marketplace action, logistics dispatch, drone dispatch, or execution behavior exists;
- Standard User runtime files do not import or load the module;
- Phase 20 agriculture public source contracts, Phase 24 answer envelopes, Phase 30 labels, and Phase 31 extension connector contract remain present.

## Future Work

Later phases may add source-ready farmer advisory connectors after source verification, advisor credential review, regional scope, localization review, partner approval, consent language, and audit logging are complete. Advisory connectors must remain separate from crop diagnosis, extension contact, drone dispatch, marketplace execution, logistics dispatch, payment, location sharing, call, and message behavior.
