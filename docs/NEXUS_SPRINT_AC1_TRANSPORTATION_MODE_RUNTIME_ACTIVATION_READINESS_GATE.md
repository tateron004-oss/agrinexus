# Nexus Sprint AC1 - Transportation Mode Runtime Activation Readiness Gate

Current base: `6d52f62f44b4c2c844b5023f779dc61185873ceb`

Sprint AC1 defines the minimum conditions before Transportation Mode may move from inert readiness into any runtime-visible or runtime-connected behavior. This phase is documentation and deterministic QA only. It does not add Transportation Mode runtime, live transportation connector runtime, booking connector runtime, clinic connector runtime, telehealth connector runtime, provider connector runtime, driver connector runtime, dispatch connector runtime, location connector runtime, payment connector runtime, appointment scheduling runtime, transportation booking, transportation dispatch, emergency dispatch, medical records/FHIR runtime, medical advice, diagnosis claims, prescription instructions, provider contact, driver contact, location sharing, camera activation, microphone activation, payment execution, marketplace transaction execution, communications execution, storage writes, backend writes, network calls, provider handoff, typed route mutation, voice route mutation, or execution authority.

## Relationship To Prior Lanes

Sprint AC1 follows:

- Sprint AB5 - Mobile Clinic Mode Lane Closeout;
- Phase 81 - Transportation Mode Readiness Contract.

Transportation Mode readiness is not dispatch authority, booking authority, provider authority, driver authority, clinic authority, telehealth authority, emergency authority, location consent, product owner approval, user consent, provider confirmation, driver confirmation, audit approval, payment authority, identity authority, or execution authority.

## Runtime Activation Preconditions

Transportation Mode runtime must remain blocked until all of these are true:

- product owner approval for a Transportation Mode runtime change;
- verified transportation schedule, provider, driver, routing, location, clinic, telehealth, or regulated source;
- verified live transportation connector or partner availability state;
- source attribution;
- freshness label;
- confidence label;
- user consent boundary;
- identity verification boundary;
- role and permission check;
- explicit user approval for high-risk or partner-dependent actions;
- provider, driver, or transportation partner confirmation before any provider-facing workflow;
- visible cancellation path;
- audit decision record;
- safe fallback path;
- no unsupported live claim;
- no completed action claim;
- no transportation booking, dispatch, provider contact, driver contact, emergency dispatch, location sharing, camera, microphone, payment, medical, pharmacy, prescription, refill, or marketplace execution from Transportation Mode;
- no communications execution;
- regression suite coverage;
- browser validation plan;
- deterministic QA coverage.

## Runtime Absence Requirements

Sprint AC1 must not load or activate:

- `public/nexus-transportation-mode-readiness-contract.js`;
- `NexusTransportationModeReadinessContract`;
- `TRANSPORTATION_MODE_READINESS_CONTRACT`;
- `transportation-mode.readiness.phase_81`;
- Transportation Mode runtime helpers;
- live connector helpers;
- booking, dispatch, payment, location, provider, driver, emergency, communications, or medical execution helpers.

## Blocked Runtime Behavior

Sprint AC1 must not introduce:

- active Transportation Mode runtime;
- live transportation connector activation;
- transportation provider connector runtime;
- driver connector runtime;
- dispatch connector runtime;
- routing connector runtime;
- location connector runtime;
- clinic connector runtime;
- telehealth connector runtime;
- payment connector runtime;
- appointment scheduling runtime;
- transportation booking runtime;
- transportation dispatch runtime;
- emergency dispatch runtime;
- medical records or FHIR access runtime;
- medical advice;
- diagnosis claims;
- prescription instructions;
- transportation action execution claims;
- provider contact claims;
- driver contact claims;
- appointment scheduling claims;
- transportation dispatch claims;
- emergency dispatch claims;
- location sharing claims;
- camera activation claims;
- microphone activation claims;
- payment execution claims;
- source-backed transportation claims without sources;
- stale data claims without freshness labels;
- confidence-free transportation claims;
- unsupported live data claims;
- provider connection claims;
- completed action claims;
- account or profile mutation claims;
- event handlers;
- typed route mutation;
- voice route mutation;
- policy bypass from Transportation Mode metadata;
- confirmation bypass from Transportation Mode metadata;
- permission bypass from Transportation Mode metadata;
- permission prompts;
- audit writes;
- backend writes;
- localStorage or sessionStorage writes;
- fetch or network calls;
- provider handoff;
- native bridge dispatch;
- calls;
- messages;
- WhatsApp, Telegram, SMS, or email sending;
- external navigation;
- real pending action creation;
- execution authority.

## Standard User Boundary

The Standard User build may continue to explain existing safe transportation-to-care boundaries through existing app behavior, but Sprint AC1 must not add Transportation Mode UI, new typed routing, new voice routing, booking execution, dispatch execution, location sharing, provider handoff, payment handling, or backend writes.

## Required Contract Invariants

The Phase 81 readiness contract must remain:

- `readinessStatus: "blocked"`;
- `riskTier: "high"`;
- `acceptanceTarget: "booking gated"`;
- `liveConnectorEnabled: false`;
- `providerExecutionEnabled: false`;
- `regulatedActionEnabled: false`;
- `silentActionAllowed: false`;
- `backgroundExecutionAllowed: false`;
- `standardUserRuntimeMutationAllowed: false`;
- `storageSideEffectAllowed: false`;
- `networkSideEffectAllowed: false`;
- `executionAllowed: false`;
- `liveActionEnabled: false`.

The factory must force unsafe override attempts back to no-execution values.

## Restricted Domains

Transportation Mode must preserve restricted boundaries around:

- healthcare;
- medical_records;
- pharmacy;
- payments;
- location;
- communications;
- provider_contact;
- marketplace_transactions;
- emergency;
- transportation_dispatch;
- identity;
- account_profile;
- role_authorization;
- regulated_execution.

## Safe Copy Boundary

Allowed posture:

- "I can help prepare transportation access options."
- "Transportation Mode is not connected yet."
- "This requires a verified transportation provider or schedule source."
- "This requires consent and approval."
- "I cannot book transportation yet."
- "I cannot dispatch transportation or emergency help."
- "No action has been taken."

Blocked posture:

- "I booked your ride."
- "I dispatched transportation."
- "I contacted the driver."
- "I contacted the provider."
- "I dispatched emergency help."
- "I shared your location."
- "I opened your camera."
- "I opened your microphone."
- "I accessed your medical record."
- "I processed your payment."
- "I completed the action."

## Browser Validation Implication

Sprint AC1 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that imports Transportation Mode artifacts, renders Transportation Mode UI, activates live connectors, changes typed routing, changes voice routing, changes provider/contact/location/camera/microphone/payment/emergency behavior, writes audit events, changes permission prompts, or changes Standard User visible behavior must run browser validation.

## Rollback Strategy

If a future sprint accidentally turns Sprint AC artifacts into runtime authority:

1. Revert runtime wiring first.
2. Restore the Phase 81 readiness contract to blocked/no-execution defaults.
3. Restore every Transportation Mode runtime, connector, booking, dispatch, provider contact, driver contact, location, payment, camera, microphone, communications, storage, network, audit, and authority field to `false`.
4. Re-run Phase 81 Transportation Mode readiness QA.
5. Re-run Sprint AC1 QA.
6. Re-run `node scripts/qa-suite.js nexus-workforce`.
7. Re-run `node scripts/qa-suite.js all-safe`.
8. Browser validate if visible behavior changed.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint AC2 - Transportation Mode Feature Flag Contract`

Sprint AC2 should add a default-off, no-execution feature flag contract for any future Transportation Mode visibility or review surface. It must not activate booking, dispatch, provider contact, driver contact, payment, location sharing, communications, or Standard User runtime behavior.
