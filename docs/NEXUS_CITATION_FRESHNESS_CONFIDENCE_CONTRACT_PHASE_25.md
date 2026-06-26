# Nexus Citation Freshness Confidence Contract Phase 25

Phase: 25 - Citations/freshness/confidence
Roadmap row: "Display source trust data"
Status: inert label contract, no runtime UI wiring, no live source lookup

## Purpose

Phase 25 defines how Nexus should label future source-backed answers so users can see source trust, freshness, and confidence without mistaking guidance for a completed real-world action.

This phase does not fetch data, cite live sources, contact providers, open external links, share user data, process payments, access records, schedule care, submit forms, activate location, activate camera, or execute marketplace actions.

## Contract Module

The inert contract module is:

- `public/nexus-citation-freshness-confidence-contract.js`

The module defines:

- allowed freshness states;
- allowed confidence levels;
- required citation trust label fields;
- stale warning rules;
- no-execution defaults;
- a local helper for creating a frozen citation trust label.

The module is not loaded by `public/index.html`, `public/app.js`, or `server.js`.

## Freshness States

Allowed freshness states:

- `current`;
- `stale`;
- `expired`;
- `unknown`;
- `not_connected_yet`;
- `source_unavailable`.

Freshness state rules:

- `current` may be shown only when a source owner, verification timestamp, and freshness rule exist.
- `stale` must show a stale warning and must not imply live availability.
- `expired` must show a stronger stale warning and should use fallback guidance unless refreshed.
- `unknown` must show that the source has not been verified yet.
- `not_connected_yet` must say the connector is not connected yet.
- `source_unavailable` must use unavailable-source fallback language.

## Confidence Levels

Allowed confidence levels:

- `verified_high`;
- `source_backed`;
- `limited`;
- `stale_source`;
- `unverified`;
- `unavailable`.

Confidence rules:

- `verified_high` requires source-backed citation metadata and current freshness.
- `source_backed` requires citation metadata and disclosed freshness.
- `limited` may be used when source scope, region, language, or terms are incomplete.
- `stale_source` must be paired with a stale or expired freshness state.
- `unverified` must not be presented as source-backed.
- `unavailable` must use unavailable-source fallback language.

## Citation Trust Label Fields

Each future citation trust label should include:

- `sourceId`;
- `sourceOwner`;
- `sourceType`;
- `title`;
- `reference`;
- `freshnessState`;
- `freshnessLabel`;
- `confidenceLevel`;
- `confidenceLabel`;
- `lastVerifiedAt`;
- `staleAfter`;
- `termsStatus`;
- `region`;
- `language`;
- `limitations`;
- `staleWarningRequired`;
- `userFacingDisclosure`;
- `connectorStatus`;
- `sourceBackedGuidanceAvailable`;
- `noExecution`.

## Stale Warning Contract

Nexus must label stale or unavailable sources instead of silently presenting them as current.

Stale warning is required when:

- `freshnessState` is `stale`;
- `freshnessState` is `expired`;
- `freshnessState` is `unknown`;
- `freshnessState` is `not_connected_yet`;
- `freshnessState` is `source_unavailable`;
- `confidenceLevel` is `stale_source`;
- `confidenceLevel` is `unverified`;
- `confidenceLevel` is `unavailable`.

User-facing stale warnings should use wording such as:

- "This source may be out of date.";
- "This source is not connected yet.";
- "I need a verified source before I can present this as current.";
- "I can give general guidance, but this is not live source-backed data yet."

## No-Execution Defaults

Citation, freshness, and confidence labels must never authorize action execution. Labels are context, not permission.

All labels must default to:

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

## User-Facing Copy Rules

Future UI should avoid unsupported claims such as:

- "live provider verified" unless the provider connector is active and audited;
- "current" unless freshness metadata exists;
- "complete" unless an approved action was actually completed;
- "scheduled", "paid", "sent", "called", "dispatched", or "submitted" unless the required connector, consent, confirmation, and audit event exist.

Safer wording:

- "not connected yet";
- "requires a verified source";
- "source freshness unavailable";
- "source-backed guidance available";
- "stale source warning";
- "I can prepare the next step, but I cannot execute it until the required connection and approval are active."

## QA Expectations

QA must verify:

- required freshness states are defined;
- required confidence levels are defined;
- required citation trust label fields exist;
- stale warning rules are represented;
- stale, expired, unknown, not-connected, unavailable, stale-source, unverified, and unavailable confidence states require warning;
- no-execution and dangerous action flags default safely;
- no network, provider adapter, navigation, storage, permission prompt, or execution behavior exists;
- Standard User runtime files do not import or load the module;
- Phase 24 source-backed answer envelope contract remains present.

## Future Work

Later phases may attach these labels to source-backed answer surfaces only after source registry readiness, user-facing fallback review, and runtime QA are complete. The labels must remain descriptive and must not become authority to contact providers, share data, make payments, use location, access medical records, dispatch services, or execute marketplace actions.
