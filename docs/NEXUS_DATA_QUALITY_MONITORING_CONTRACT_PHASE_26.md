# Nexus Data Quality Monitoring Contract Phase 26

Phase: 26 - Data quality monitoring
Roadmap row: "Detect stale or conflicting sources"
Status: inert quality-observation contract, no runtime monitors, no live source checks

## Purpose

Phase 26 defines how Nexus should describe future source data quality before relying on source-backed answers. The contract helps Nexus label stale, missing, conflicting, incomplete, unverified, or disconnected source data without silently presenting it as current or authoritative.

This phase does not run monitors, fetch data, compare live feeds, contact providers, update source status, store source history, open external links, access user records, request permissions, or execute actions.

## Contract Module

The inert contract module is:

- `public/nexus-data-quality-monitoring-contract.js`

The module defines:

- source quality states;
- quality signal types;
- conflict severity levels;
- required data quality observation fields;
- required audit event fields;
- no-execution defaults;
- a local helper for creating a frozen quality observation.

The module is not loaded by `public/index.html`, `public/app.js`, or `server.js`.

## Source Quality States

Allowed source quality states:

- `ready`;
- `stale`;
- `conflicting`;
- `incomplete`;
- `unverified`;
- `not_connected_yet`;
- `source_unavailable`;
- `blocked_for_safety`.

State rules:

- `ready` requires a verified source owner, connector status, freshness timestamp, terms review, and no active conflict.
- `stale` must show stale warning and must not imply live availability.
- `conflicting` must show a conflict warning and avoid presenting one source as authoritative until reviewed.
- `incomplete` must disclose missing fields.
- `unverified` must not be treated as source-backed.
- `not_connected_yet` must disclose that the connector is inactive.
- `source_unavailable` must route future answers to unavailable-source fallback or general guidance.
- `blocked_for_safety` must prevent high-risk claims and future execution.

## Quality Signals

Allowed quality signal types:

- `freshness_missing`;
- `freshness_stale`;
- `owner_missing`;
- `terms_unreviewed`;
- `region_mismatch`;
- `language_mismatch`;
- `required_field_missing`;
- `conflicting_value`;
- `connector_inactive`;
- `regulated_data_without_consent`;
- `unsafe_action_claim`.

These signals are descriptive only. They must not start source refresh, provider contact, user data sharing, payment, marketplace action, medical access, emergency dispatch, location sharing, call, or message behavior.

## Conflict Severity Levels

Allowed conflict severity levels:

- `none`;
- `low`;
- `medium`;
- `high`;
- `critical`.

Conflict rules:

- `none` may be used only when no active conflict signal exists.
- `low` and `medium` require a visible warning before using source-backed guidance.
- `high` and `critical` require fallback or review before presenting source-backed guidance.
- Any regulated, medical, payment, emergency, location, provider-contact, call, or message conflict must be treated as `high` or `critical` until reviewed.

## Data Quality Observation Fields

Each future data quality observation should include:

- `qualityState`;
- `sourceId`;
- `sourceOwner`;
- `sourceType`;
- `connectorStatus`;
- `freshnessState`;
- `lastVerifiedAt`;
- `staleAfter`;
- `qualitySignals`;
- `missingFields`;
- `conflictSeverity`;
- `conflictSummary`;
- `requiresHumanReview`;
- `requiresSourceRefresh`;
- `userFacingWarning`;
- `fallbackResponseState`;
- `auditEvent`;
- `noExecution`.

## Audit Event Fields

Each future quality audit event should include:

- `eventType`;
- `sourceId`;
- `qualityState`;
- `qualitySignals`;
- `conflictSeverity`;
- `fallbackResponseState`;
- `noExecution`;
- `createdAt`.

Audit events must record the source quality issue without including sensitive user data, provider credentials, medical records, payment details, precise location, contact identifiers, or executable provider payloads.

## No-Execution Defaults

Data quality observations are source context, not execution authority. They must default to:

- `noExecution: true`;
- `sourceRefreshStarted: false`;
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

## User-Facing Warning Rules

Future answer surfaces should clearly label data quality limitations:

- "This source may be out of date.";
- "These sources conflict and need review.";
- "A required source field is missing.";
- "This connector is not connected yet.";
- "I need a verified source before I can present this as current.";
- "I can give general guidance, but I cannot rely on this source for live action."

## QA Expectations

QA must verify:

- required source quality states are defined;
- required quality signal types are defined;
- required conflict severity levels are defined;
- required observation fields exist;
- required audit event fields exist;
- stale/conflicting/unverified/incomplete/not-connected/unavailable states require warning or fallback;
- no-execution and dangerous action flags default safely;
- no monitor, network, provider adapter, navigation, storage, permission prompt, or execution behavior exists;
- Standard User runtime files do not import or load the module;
- Phase 24 and Phase 25 contracts remain present.

## Future Work

Later phases may add controlled source-quality checks only after source registry readiness, source refresh policy, audit logging, and user-facing fallback behavior are reviewed. Data quality signals must remain advisory until an approved connector, consent model, and audit process exist.
