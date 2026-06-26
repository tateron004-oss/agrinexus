# Nexus Crop Pest Disease Source Connector Contract Phase 33

Phase: 33 - Crop/pest/disease sources
Roadmap row: "Add crop authority feeds"
Status: inert crop authority source connector contract, no diagnosis claim, no live feed

## Purpose

Phase 33 defines how Nexus should model future crop, pest, and disease authority feeds. These connectors can eventually support source-backed crop protection guidance, pest alerts, disease advisories, scouting prompts, and next-step preparation, but they must remain disabled until source ownership, authority scope, freshness, localization, and audit controls are complete.

This phase does not diagnose crops, identify diseases from photos, request camera or location access, contact authorities, contact advisors, schedule visits, submit crop photos, share farm data, create marketplace transactions, process payments, dispatch logistics or drones, or activate a live feed.

## Contract Module

The inert contract module is:

- `public/nexus-crop-pest-disease-source-connector-contract.js`

The module defines:

- crop authority source statuses;
- crop authority source categories;
- required connector fields;
- diagnosis boundary fields;
- crop evidence consent gate fields;
- audit event fields;
- no-execution defaults;
- a local helper for creating a frozen crop/pest/disease source connector record.

The module is not loaded by `public/index.html`, `public/app.js`, or `server.js`.

## Crop Authority Source Statuses

Allowed crop authority source statuses:

- `not_configured`;
- `source_verification_required`;
- `authority_scope_required`;
- `freshness_rule_required`;
- `regional_scope_required`;
- `language_review_required`;
- `sandbox_testing_required`;
- `approved_not_live`;
- `active_source_only`;
- `rejected_or_blocked`;
- `inactive`.

Status rules:

- `not_configured` must not support source-backed pest or disease claims.
- `source_verification_required` must wait for Phase 29-style source verification.
- `authority_scope_required` must wait for a reviewed crop/pest/disease authority scope.
- `freshness_rule_required` must wait for a configured stale-source rule.
- `regional_scope_required` must wait for geographic scope review.
- `language_review_required` must wait for localization labels.
- `sandbox_testing_required` must remain non-live.
- `approved_not_live` may show readiness but must not claim active local crop conditions.
- `active_source_only` may support future source-backed guidance but must not diagnose crops or trigger handoffs.
- `rejected_or_blocked` and `inactive` must not be used for source-backed answers.

## Crop Authority Source Categories

Allowed crop authority source categories:

- `pest_alert`;
- `disease_advisory`;
- `crop_protection_guidance`;
- `field_scouting_guidance`;
- `symptom_triage_guidance`;
- `integrated_pest_management`;
- `plant_health_authority_notice`;
- `regional_outbreak_notice`;
- `safe_treatment_guidance`;
- `extension_referral_guidance`.

These categories are descriptive. They must not imply a final diagnosis, live local outbreak confirmation, treatment prescription, authority contact, advisor handoff, field visit, camera inspection, or farm-data submission.

## Crop Pest Disease Source Connector Fields

Each future crop authority source connector record should include:

- `connectorId`;
- `authorityName`;
- `sourceOwner`;
- `connectorStatus`;
- `sourceCategories`;
- `coveredRegions`;
- `coveredCrops`;
- `coveredPests`;
- `coveredDiseases`;
- `supportedLanguages`;
- `authorityScopeStatus`;
- `sourceVerificationStatus`;
- `freshnessRuleStatus`;
- `freshnessModel`;
- `regionalScope`;
- `languageScope`;
- `allowedResponseStates`;
- `diagnosisBoundary`;
- `cropEvidenceConsentGate`;
- `auditRequirements`;
- `auditEvent`;
- `sourceBackedGuidanceAllowed`;
- `diagnosisClaimAllowed`;
- `cameraUseEnabled`;
- `cropPhotoSharingEnabled`;
- `farmDataSharingEnabled`;
- `locationSharingEnabled`;
- `liveActionEnabled`;
- `noExecution`.

## Diagnosis Boundary

Each future diagnosis boundary should include:

- `requiresSourceAttribution`;
- `requiresFreshnessDisclosure`;
- `requiresRegionalScopeDisclosure`;
- `requiresHumanExpertReviewForDiagnosis`;
- `allowsFinalDiagnosisClaim`;
- `allowsTreatmentPrescription`;
- `allowsAuthorityContact`;
- `allowsAdvisorHandoff`.

Defaults must keep every `allows*` field false.

## Crop Evidence Consent Gate

Each future crop evidence consent gate should include:

- `requiresPurposeDisclosure`;
- `requiresUserConsent`;
- `requiresMinimumNecessaryData`;
- `requiresLocationConsent`;
- `requiresPhotoConsent`;
- `requiresFarmProfileConsent`;
- `allowsCropPhotoSharing`;
- `allowsPreciseLocationSharing`;
- `allowsFarmDataSharing`;
- `allowsCameraActivation`.

Defaults must keep every `allows*` field false.

## Audit Event Fields

Each future crop authority source audit event should include:

- `eventType`;
- `connectorId`;
- `connectorStatus`;
- `sourceCategories`;
- `sourceBackedGuidanceAllowed`;
- `diagnosisClaimAllowed`;
- `cropPhotoSharingEnabled`;
- `farmDataSharingEnabled`;
- `noExecution`;
- `createdAt`.

Audit events must not include crop photos, precise farm location, private farm details, household details, contact identifiers, payment details, marketplace buyer or seller details, or executable provider payloads.

## No-Execution Defaults

Crop/pest/disease source connector records are source context, not diagnosis or action authority. They must default to:

- `noExecution: true`;
- `sourceBackedGuidanceAllowed: false`;
- `diagnosisClaimAllowed: false`;
- `cropDiagnosisEnabled: false`;
- `cameraUseEnabled: false`;
- `cropPhotoSharingEnabled: false`;
- `providerContactEnabled: false`;
- `farmDataSharingEnabled: false`;
- `locationSharingEnabled: false`;
- `liveActionEnabled: false`;
- `authorityContacted: false`;
- `advisorContacted: false`;
- `userDataShared: false`;
- `externalActionExecuted: false`;
- `paymentExecuted: false`;
- `marketplaceTransactionExecuted: false`;
- `logisticsDispatched: false`;
- `droneDispatched: false`;
- `medicalRecordAccessed: false`;
- `prescriptionSubmitted: false`;
- `emergencyDispatched: false`;
- `locationShared: false`;
- `callOrMessageSent: false`.

## User-Facing Boundary

Future user-facing copy should say:

- "crop authority source not connected yet";
- "requires verified pest or disease authority source";
- "requires source freshness before relying on local pest guidance";
- "I can help prepare observations and next steps, but I cannot diagnose the crop or contact anyone until the required source and approvals are active."

Nexus must not say a crop was diagnosed, a disease was identified, a treatment was prescribed, an authority was contacted, a crop photo was reviewed, farm details were shared, location was sent, or a marketplace/payment/logistics/drone action happened unless later approved execution phases enable that behavior.

## QA Expectations

QA must verify:

- required crop authority source statuses are defined;
- required source categories are defined;
- required connector fields exist;
- required diagnosis boundary fields exist;
- required crop evidence consent gate fields exist;
- audit event fields exist;
- defaults block source-backed guidance, diagnosis claims, camera use, crop photo sharing, farm data sharing, location sharing, and live action;
- no-execution and dangerous action flags default safely;
- no provider API, contact path, scheduling, storage write, permission prompt, navigation, camera, location use, payment, marketplace action, logistics dispatch, drone dispatch, or execution behavior exists;
- Standard User runtime files do not import or load the module;
- Phase 20 agriculture public source contracts, Phase 24 answer envelopes, Phase 30 labels, Phase 31 extension connector contract, and Phase 32 advisory connector contract remain present.

## Future Work

Later phases may add source-ready crop authority feeds after source verification, authority scope review, freshness rules, regional scope, localization review, and audit logging are complete. Crop/pest/disease source connectors must remain separate from final diagnosis, camera/photo submission, extension/advisory contact, drone dispatch, marketplace execution, logistics dispatch, payment, location sharing, call, and message behavior.
