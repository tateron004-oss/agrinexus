# Nexus Source-Backed Answer Engine Contract Phase 24

Phase: 24 - Source-backed answer engine
Roadmap row: "Standardize cited responses"
Status: inert answer-envelope contract, no runtime wiring, no live source lookup

## Purpose

Phase 24 defines how Nexus should shape future source-backed answers before any live source ingestion or provider execution is activated. Nexus must be able to tell users whether an answer is general guidance, verified source-backed guidance, a provider directory result, a prepared action preview, a permission/privacy gate, an emergency guidance response, a blocked response, or an unavailable-source fallback.

This phase does not fetch sources, call providers, create citations from the internet, access records, schedule care, submit forms, process payments, contact anyone, share location, or execute marketplace actions.

## Contract Module

The inert contract module is:

- `public/nexus-source-backed-answer-engine-contract.js`

The module defines:

- allowed response states;
- required answer envelope fields;
- required citation/provenance fields;
- no-execution default flags;
- a local helper for creating a frozen source-backed answer envelope.

The module is not loaded by `public/index.html`, `public/app.js`, or `server.js`.

## Required Answer Envelope

Every future source-backed answer should include:

- `responseState`;
- `answerText`;
- `language`;
- `serviceDomain`;
- `sourceSummary`;
- `citations`;
- `provenance`;
- `freshness`;
- `confidence`;
- `limitations`;
- `permission`;
- `audit`;
- `noExecution`;
- disabled action flags.

## Citation And Provenance Fields

Each citation should include:

- `sourceId`;
- `sourceOwner`;
- `sourceType`;
- `title`;
- `reference`;
- `lastVerifiedAt`;
- `staleAfter`;
- `freshnessLabel`;
- `termsStatus`;
- `region`;
- `language`;

Each provenance block should include:

- `sourceStatus`;
- `connectorStatus`;
- `sourceBackedGuidanceAvailable`;
- `liveDataConnected`;
- `providerContacted`;
- `userDataShared`;
- `actionExecuted`.

## No-Execution Defaults

All source-backed answer envelopes must default to:

- `noExecution: true`;
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

## State Rules

Allowed response states:

- `general_guidance`;
- `source_backed_guidance`;
- `provider_directory_result`;
- `prepared_action_preview`;
- `permission_required`;
- `privacy_gate_required`;
- `emergency_escalation_guidance`;
- `blocked_or_unsupported`;
- `unavailable_source_fallback`.

Future answer generation must not use source-backed states unless source metadata and freshness are present. Missing, stale, or unverified sources must use `unavailable_source_fallback` or clearly labeled `general_guidance`.

## QA Expectations

QA must verify:

- required response states are defined;
- required answer envelope fields exist;
- citation and provenance fields exist;
- no-execution and dangerous action flags default safely;
- source-backed state requires citation/provenance/freshness metadata;
- unavailable-source fallback is represented;
- no network, fetch, provider adapter, navigation, storage, permission prompt, or execution behavior exists;
- Standard User runtime files do not import or load the module.

## Future Work

Phase 25 should focus on display and validation rules for citation, freshness, and confidence labels. Later phases may wire this contract into runtime only after source readiness, QA, and user-facing fallback behavior are reviewed.
