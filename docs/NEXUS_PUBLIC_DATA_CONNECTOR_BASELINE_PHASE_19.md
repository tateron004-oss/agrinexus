# Nexus Public Data Connector Baseline Phase 19

Phase: 19 - Public data connector baseline
Roadmap row: "Add verified public source ingestion contracts"
Status: metadata-only, source-ready, no live ingestion, no runtime activation

## Purpose

Nexus is being built as a full multilingual access platform for farmers and underserved communities. Public data is one of the safest paths toward source-backed answers, but public data must still be handled with attribution, freshness labels, source terms, and clear no-execution boundaries.

Phase 19 creates the baseline contract for future public data connectors. It does not fetch public data, import source files into the Standard User runtime, call external APIs, contact providers, activate location, process payments, submit marketplace actions, access records, execute pharmacy workflows, or dispatch emergency help.

## Public Data Connector Baseline

The inert metadata contract is defined in:

- `public/nexus-public-data-connector-baseline.js`

It defines public-source templates for:

- agriculture extension and advisory sources;
- weather and climate alert sources;
- soil, fertilizer, and irrigation sources;
- public market price sources;
- public provider directory sources;
- public health access and clinic directory sources;
- public mobile clinic schedule sources;
- public pharmacy directory sources;
- public transportation resource sources;
- public workforce and training program sources;
- public emergency information sources;
- public community resource sources.

Each template must include:

- `connectorId`;
- `domain`;
- `displayName`;
- `sourceOwnerType`;
- `publicSourceCategory`;
- `expectedFields`;
- `attributionRequirements`;
- `freshnessRequirements`;
- `termsReviewRequirements`;
- `languageLocalizationRequirements`;
- `permissionRequirements`;
- `auditRequirements`;
- `allowedResponseStates`;
- `forbiddenClaims`;
- `futureRoadmapPhase`;
- disabled runtime flags.

## Disabled Runtime Flags

Every Phase 19 public connector template must default to:

- `fetchEnabled: false`;
- `liveConnectionEnabled: false`;
- `executionEnabled: false`;
- `providerContactEnabled: false`;
- `paymentEnabled: false`;
- `medicalRecordAccessEnabled: false`;
- `emergencyDispatchEnabled: false`;
- `marketplaceTransactionEnabled: false`;
- `locationSharingEnabled: false`.

This keeps the baseline source-ready without turning public-source planning into runtime behavior.

## Source-Backed Answer Rules

A public source can support `source_backed_guidance` only when:

- a source owner is named;
- the source category is identified;
- source terms have been reviewed;
- freshness metadata exists;
- stale or missing data is disclosed;
- the answer does not imply local provider availability unless the source supports that claim;
- the answer does not execute a real-world action.

If a public source is unavailable, stale, or not configured, Nexus must use `unavailable_source_fallback` and say that a verified source is required.

## Service Domain Boundaries

Agriculture support:

- Public extension, weather, pest, soil, fertilizer, and irrigation sources can support guidance.
- Nexus must not present general crop advice as verified local guidance.
- Buyer contact, sale, payment, logistics dispatch, or marketplace execution remains disabled.

Healthcare access:

- Public clinic, public health, mobile clinic, and pharmacy directory sources can support access navigation.
- Nexus must not imply a provider is available unless the source says so.
- Provider contact, appointment scheduling, prescription/refill execution, medical records access, and emergency dispatch remain disabled.

Transportation:

- Public transportation resources can support guidance.
- Ride booking, route dispatch, payment, or live location sharing remains disabled.

Workforce and education:

- Public program and training catalogs can support guidance.
- Job applications, profile sharing, referrals, or employer contact remain disabled.

Marketplace and AgriTrade:

- Public market prices can support context when attributed and freshness-labeled.
- Buy, sell, payment, buyer/seller contact, and logistics execution remain disabled.

Emergency pathways:

- Public emergency information can support escalation guidance.
- Nexus must not simulate or claim emergency dispatch.

Community resources:

- Public community resource directories can support guidance.
- Referrals, contact, eligibility submission, or sharing user data remain disabled.

## Runtime Load Boundary

Phase 19 metadata must remain inert:

- `public/index.html` must not load the module with a script tag.
- `public/app.js` must not import, require, dynamically import, fetch, or consume the module.
- `server.js` must not import, require, dynamically import, fetch, or expose a public data ingestion route from the module.
- The module must be available only as a repo contract until a later reviewed phase explicitly wires a safe source-backed answer path.

## QA Expectations

QA must verify:

- every required public-source category exists;
- required metadata fields exist;
- all runtime and execution flags remain false;
- no public connector performs fetch/network work;
- no public connector includes executable handlers or provider adapters;
- source attribution, freshness, terms review, permission, and audit requirements are documented;
- unavailable-source fallback behavior is documented;
- Standard User runtime files do not import or load the module;
- the new QA remains deterministic and local-safe.

## Future Work

Phase 20 should specialize the public-source baseline for agriculture sources, including extension, weather, soil, fertilizer, irrigation, pest/disease, and market-context guidance. It should remain source-backed and no-execution unless a later connector phase explicitly configures verified live data.
