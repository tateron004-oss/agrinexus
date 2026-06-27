# Nexus Sprint AA1 - Pharmacy Mode Runtime Activation Readiness Gate

Current base: `d4e41197833e7a031e81210ef19f25aec3734973`

Sprint AA1 starts the Pharmacy Mode readiness lane after Sprint Z5 and Phase 79. This phase is documentation and deterministic QA only. It does not add a live pharmacy mode runtime, live connectors, provider execution, pharmacy provider contact, prescription execution, refill execution, medication advice, dosage advice, clinical advice, clinic execution, telehealth execution, appointment scheduling, medical records access, transportation dispatch, emergency dispatch, location sharing, camera or microphone activation, event handlers, typed route mutation, voice route mutation, permission prompt, audit write, storage write, backend write, network call, provider handoff, pending action, or execution behavior.

## Relationship To Prior Lanes

Sprint AA1 builds on:

- Sprint Z5 - Telehealth Mode Lane Closeout
- Phase 79 - Pharmacy Mode Readiness Contract

Telehealth Mode readiness is not Pharmacy Mode runtime activation. Pharmacy Mode readiness is also not medication advice authority, prescription authority, refill authority, pharmacy provider authority, provider contact authority, clinician authority, scheduling authority, medical records authority, product owner approval, user consent, provider confirmation, audit approval, payment authority, insurance authority, identity authority, or execution authority.

## Runtime Activation Preconditions

Pharmacy Mode runtime activation remains blocked until all of these conditions are satisfied and reviewed:

- product owner approval for a Pharmacy Mode runtime change;
- verified pharmacy, prescription, refill, medication safety, provider, payer, clinic, telehealth, or regulated source;
- verified live pharmacy connector or partner availability state;
- source attribution;
- freshness label;
- confidence label;
- medication safety boundary and non-prescription label;
- user consent boundary where medication, health context, account/profile, provider data, pharmacy data, payment, insurance, or medical context is involved;
- identity verification boundary when prescription, refill, payment, insurance, account, or regulated pharmacy information is involved;
- role and permission check;
- explicit user approval for high-risk or partner-dependent actions;
- provider or pharmacist confirmation before any provider-facing workflow;
- visible cancellation path;
- audit decision record;
- safe fallback path;
- no unsupported live claim;
- no completed action claim;
- no medication advice, dosage advice, prescription, refill, pharmacy provider contact, clinician contact, appointment scheduling, payment, insurance, transportation, emergency, location, camera, or microphone execution from Pharmacy Mode;
- no provider, clinician, pharmacy, payer, emergency service, transportation service, marketplace, buyer, seller, workforce, or family contact;
- no communications execution;
- no Standard User runtime mutation approval gap;
- pharmacy support source-backed answer prompt coverage;
- prescription/refill/pharmacy provider boundary prompt coverage;
- payment/insurance/identity boundary prompt coverage;
- emergency/transportation boundary prompt coverage;
- regression suite coverage;
- browser validation plan for any future visible/runtime change;
- deterministic QA coverage.

## Runtime Absence Requirements

The following must remain absent from `public/index.html`, `public/app.js`, and `server.js` during Sprint AA1:

- `public/nexus-pharmacy-mode-readiness-contract.js`;
- any future Pharmacy Mode feature flag;
- any future Pharmacy Mode fixture harness;
- any future live pharmacy mode runtime;
- any future pharmacy, prescription, refill, provider, clinician, payer, insurance, clinic, telehealth, transportation, emergency, location, camera, microphone, or medical records connector runtime introduced by Sprint AA;
- Sprint AA QA scripts.

Sprint AA1 artifacts may be present in the repository only as documentation or deterministic QA. They must not be loaded, executed, imported, dynamically imported, injected, routed, clicked, spoken into runtime behavior, or used as authority by the Standard User build.

## Blocked Runtime Behavior

Sprint AA1 does not authorize or introduce:

- active Pharmacy Mode runtime;
- live pharmacy connector activation;
- pharmacy provider connector runtime;
- prescription connector runtime;
- refill connector runtime;
- medication safety connector runtime;
- payment or insurance connector runtime;
- clinic connector runtime;
- telehealth connector runtime;
- provider connector runtime;
- clinician contact runtime;
- pharmacy provider contact runtime;
- prescription or refill execution;
- medication advice;
- dosage advice;
- prescription instructions;
- refill instructions;
- pharmacy action execution claims;
- provider contact claims;
- clinician contact claims;
- pharmacy provider contact claims;
- appointment scheduling runtime;
- transportation dispatch runtime;
- emergency dispatch runtime;
- medical records or FHIR access runtime;
- source-backed pharmacy claims without sources;
- stale data claims without freshness labels;
- confidence-free pharmacy claims;
- unsupported live data claims;
- provider connection claims;
- completed action claims;
- medical advice claims;
- diagnosis claims;
- payment execution claims;
- insurance processing claims;
- transportation dispatch claims;
- emergency dispatch claims;
- location sharing claims;
- camera activation claims;
- microphone activation claims;
- account or profile mutation claims;
- event handlers;
- typed route mutation;
- voice route mutation;
- policy bypass from Pharmacy Mode metadata;
- confirmation bypass from Pharmacy Mode metadata;
- permission bypass from Pharmacy Mode metadata;
- ambiguous prompt execution;
- permission prompts;
- audit writes;
- backend writes;
- localStorage or sessionStorage writes;
- IndexedDB writes;
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

The normal Standard User build must remain unchanged while Sprint AA1 artifacts exist in the repository:

- no Sprint AA1 contract or QA script is imported by `public/index.html`, `public/app.js`, or `server.js`;
- no Sprint AA1 artifact creates buttons, cards, modals, forms, chips, status text, hidden queues, route handlers, voice handlers, or typed handlers;
- existing agriculture, marketplace, workforce, rural health, health, telehealth, map, call, music, learning, language, and Standard User behavior remains separate from Pharmacy Mode readiness artifacts;
- high-risk prompts remain blocked, permission-gated, confirmation-gated, or bounded by existing app behavior;
- pharmacy, medication, prescription, refill, insurance, payment, and provider-contact prompts must not execute from Sprint AA1 artifacts;
- hidden/debug-only metadata must not become user-visible;
- no action has been taken.

## Required Contract Invariants

The Phase 79 Pharmacy Mode readiness contract must remain blocked and non-executing:

- `contractId: "pharmacy-mode.readiness.phase_79"`;
- `readinessStatus: "blocked"`;
- `riskTier: "restricted"`;
- `roadmapComponent: "pharmacy mode"`;
- `acceptanceTarget: "refill gated"`;
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

## Restricted Domains

Pharmacy Mode readiness must not infer authority over these domains:

- healthcare;
- medical records;
- pharmacy;
- prescription;
- refill;
- medication advice;
- payments;
- insurance;
- location;
- communications;
- provider contact;
- marketplace transactions;
- emergency;
- transportation dispatch;
- identity;
- account/profile;
- role authorization;
- regulated execution.

## Safe Copy Boundary

Allowed posture:

> I can help prepare pharmacy support options and explain what information would be needed, but I cannot prescribe, refill medication, give dosage instructions, contact a pharmacy or provider, schedule care, process payment or insurance, dispatch transportation, dispatch emergency services, share location, activate the camera, activate the microphone, or take medical action without verified sources, consent, permission, confirmation, provider availability, and audit controls.

Useful implementation copy for future phases:

- Pharmacy mode is not connected yet.
- This requires a verified pharmacy connector.
- This requires consent and approval.
- I cannot refill a prescription yet.
- I cannot contact a pharmacy yet.
- No action has been taken.

Disallowed claims:

- I prescribed medication.
- I refilled your prescription.
- I gave dosage instructions.
- I contacted the pharmacy.
- I contacted the provider.
- I scheduled your pharmacy visit.
- I processed your payment.
- I processed your insurance.
- I dispatched transport.
- I dispatched emergency help.
- I shared your location.
- I opened your camera.
- I opened your microphone.
- I accessed your medical record.
- I completed the action.

## Browser Validation Implication

Sprint AA1 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that loads Pharmacy Mode artifacts, renders Pharmacy Mode UI, activates a live Pharmacy Mode runtime, performs pharmacy source retrieval runtime, changes typed routing, changes voice routing, changes Standard User visible behavior, writes audit events, changes permission prompts, changes provider/clinician/pharmacy/prescription/refill/payment/insurance/transportation/emergency/location/camera/microphone behavior, or changes risk tier behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- pharmacy support prompt checks;
- provider/pharmacy boundary checks;
- prescription/refill boundary checks;
- payment/insurance/identity boundary checks;
- camera/microphone/location boundary checks;
- transportation/emergency boundary checks;
- ambiguous prompt checks;
- high-risk prompt checks;
- console warning/error checks;
- runtime mutation restoration.

## Rollback Strategy

If a future sprint accidentally turns Sprint AA artifacts into runtime authority:

1. Revert the runtime wiring first.
2. Restore the Pharmacy Mode readiness contract to no-execution defaults.
3. Restore `liveConnectorEnabled: false`, `providerExecutionEnabled: false`, `regulatedActionEnabled: false`, `silentActionAllowed: false`, `backgroundExecutionAllowed: false`, `standardUserRuntimeMutationAllowed: false`, `storageSideEffectAllowed: false`, `networkSideEffectAllowed: false`, `executionAllowed: false`, and `liveActionEnabled: false`.
4. Re-run Phase 79 Pharmacy Mode readiness QA.
5. Re-run Sprint AA1 QA.
6. Re-run `node scripts/qa-suite.js nexus-workforce`.
7. Re-run `node scripts/qa-suite.js all-safe`.
8. Browser validate the Standard User path if visible behavior changed.

## Next Safe Sprint Recommendation

Recommended next sprint train:

`Sprint AA2 - Pharmacy Mode Feature Flag Contract`

Sprint AA2 should remain inert unless explicitly approved. It should define a default-off Pharmacy Mode feature flag contract without live connectors, provider execution, prescription/refill execution, payment or insurance processing, transportation dispatch, emergency dispatch, location/camera/microphone activation, storage writes, network calls, or execution authority.
