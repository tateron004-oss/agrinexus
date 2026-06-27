# Nexus Sprint Z1 - Telehealth Mode Runtime Activation Readiness Gate

Current base: `20d80fdb6896efe47dbe75b2c0c07df7a7aae1e1`

Sprint Z1 starts the Telehealth Mode readiness lane after Sprint Y5 and Phase 78. This phase is documentation and deterministic QA only. It does not add a live telehealth mode runtime, live connectors, provider execution, clinician contact, telehealth session execution, clinic execution, pharmacy execution, prescription or refill execution, medical records access, transportation dispatch, emergency dispatch, location sharing, camera or microphone activation beyond existing explicit permissioned preview boundaries, medical diagnosis, medical advice, event handlers, typed route mutation, voice route mutation, permission prompt, audit write, storage write, backend write, network call, provider handoff, pending action, or execution behavior.

## Relationship To Prior Lanes

Sprint Z1 builds on:

- Sprint Y5 - Rural Health Mode Lane Closeout
- Phase 78 - Telehealth Mode Readiness Contract

Rural Health Mode readiness is not Telehealth Mode runtime activation. Telehealth Mode readiness is also not medical advice authority, diagnosis authority, prescription authority, refill authority, provider contact authority, clinician contact authority, scheduling authority, telehealth session authority, camera consent, microphone consent, location consent, medical records authority, product owner approval, user consent, provider confirmation, audit approval, or execution authority.

## Runtime Activation Preconditions

Telehealth Mode runtime activation remains blocked until all of these conditions are satisfied and reviewed:

- product owner approval for a Telehealth Mode runtime change;
- verified telehealth, clinic, provider, health partner, pharmacy, mobile clinic, transportation-to-care, or regulated source;
- verified live telehealth connector or provider availability state;
- source attribution;
- freshness label;
- confidence label;
- clinical boundary and non-diagnosis label;
- user consent boundary where health context, camera, microphone, location, account/profile, provider data, or medical context is involved;
- role and permission check;
- explicit user approval for high-risk or partner-dependent actions;
- provider confirmation before any provider-facing workflow;
- visible cancellation path;
- audit decision record;
- safe fallback path;
- no unsupported live claim;
- no completed action claim;
- no medical advice, diagnosis, prescription, refill, provider contact, clinician contact, telehealth session start, scheduling, transportation, emergency, location, camera, or microphone execution from Telehealth Mode;
- no provider, clinician, pharmacy, emergency service, transportation service, marketplace, buyer, seller, workforce, or family contact;
- no communications execution;
- no Standard User runtime mutation approval gap;
- telehealth access source-backed answer prompt coverage;
- provider/clinician/pharmacy boundary prompt coverage;
- camera/microphone/location boundary prompt coverage;
- emergency/transportation boundary prompt coverage;
- regression suite coverage;
- browser validation plan for any future visible/runtime change;
- deterministic QA coverage.

## Runtime Absence Requirements

The following must remain absent from `public/index.html`, `public/app.js`, and `server.js` during Sprint Z1:

- `public/nexus-telehealth-mode-readiness-contract.js`;
- any future Telehealth Mode feature flag;
- any future Telehealth Mode fixture harness;
- any future live telehealth mode runtime;
- any future clinic, telehealth, provider, clinician, pharmacy, mobile clinic, transportation, emergency, location, camera, microphone, or medical records connector runtime introduced by Sprint Z;
- Sprint Z QA scripts.

Sprint Z1 artifacts may be present in the repository only as documentation or deterministic QA. They must not be loaded, executed, imported, dynamically imported, injected, routed, clicked, spoken into runtime behavior, or used as authority by the Standard User build.

## Blocked Runtime Behavior

Sprint Z1 does not authorize or introduce:

- active Telehealth Mode runtime;
- live telehealth connector activation;
- clinic connector runtime;
- provider connector runtime;
- clinician contact runtime;
- telehealth session start or execution;
- provider contact claims;
- clinician contact claims;
- pharmacy connector runtime;
- prescription or refill runtime;
- scheduling runtime;
- mobile clinic schedule runtime;
- transportation dispatch runtime;
- emergency dispatch runtime;
- medical records or FHIR access runtime;
- source-backed health claims without sources;
- stale data claims without freshness labels;
- confidence-free health claims;
- unsupported live data claims;
- provider connection claims;
- completed action claims;
- medical advice claims;
- diagnosis claims;
- prescription claims;
- refill claims;
- telehealth action execution claims;
- pharmacy action execution claims;
- transportation dispatch claims;
- emergency dispatch claims;
- location sharing claims;
- camera activation claims;
- microphone activation claims;
- account or profile mutation claims;
- event handlers;
- typed route mutation;
- voice route mutation;
- policy bypass from Telehealth Mode metadata;
- confirmation bypass from Telehealth Mode metadata;
- permission bypass from Telehealth Mode metadata;
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

The normal Standard User build must remain unchanged while Sprint Z1 artifacts exist in the repository:

- no Sprint Z1 contract or QA script is imported by `public/index.html`, `public/app.js`, or `server.js`;
- no Sprint Z1 artifact creates buttons, cards, modals, forms, chips, status text, hidden queues, route handlers, voice handlers, or typed handlers;
- existing agriculture, marketplace, workforce, rural health, health, telehealth, map, call, music, learning, language, and Standard User behavior remains separate from Telehealth Mode readiness artifacts;
- high-risk prompts remain blocked, permission-gated, confirmation-gated, or bounded by existing app behavior;
- hidden/debug-only metadata must not become user-visible;
- no action has been taken.

## Required Contract Invariants

The Phase 78 Telehealth Mode readiness contract must remain blocked and non-executing:

- `contractId: "telehealth-mode.readiness.phase_78"`;
- `readinessStatus: "blocked"`;
- `riskTier: "high"`;
- `roadmapComponent: "telehealth mode"`;
- `acceptanceTarget: "live only when connected"`;
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

Telehealth Mode readiness must not infer authority over these domains:

- healthcare;
- medical records;
- pharmacy;
- payments;
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

> I can help prepare telehealth access options and explain what information would be needed, but I cannot diagnose, prescribe, refill medication, contact providers, start a live telehealth session, schedule care, dispatch transportation, dispatch emergency services, share location, activate the camera, activate the microphone, or take medical action without verified sources, consent, permission, confirmation, provider availability, and audit controls.

Useful implementation copy for future phases:

- Telehealth mode is not connected yet.
- This requires a verified provider connector.
- This requires consent and approval.
- I cannot start a live telehealth session yet.
- No action has been taken.

Disallowed claims:

- I diagnosed your condition.
- I prescribed medication.
- I refilled your prescription.
- I contacted the provider.
- I contacted the clinician.
- I scheduled your telehealth visit.
- I started your telehealth session.
- I dispatched transport.
- I dispatched emergency help.
- I shared your location.
- I opened your camera.
- I opened your microphone.
- I accessed your medical record.
- I completed the action.

## Browser Validation Implication

Sprint Z1 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that loads Telehealth Mode artifacts, renders Telehealth Mode UI, activates a live Telehealth Mode runtime, performs telehealth source retrieval runtime, changes typed routing, changes voice routing, changes Standard User visible behavior, writes audit events, changes permission prompts, changes provider/clinician/telehealth/pharmacy/transportation/emergency/location/camera/microphone behavior, or changes risk tier behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- telehealth access prompt checks;
- provider/clinician boundary checks;
- pharmacy/prescription/refill boundary checks;
- camera/microphone/location boundary checks;
- transportation/emergency boundary checks;
- ambiguous prompt checks;
- high-risk prompt checks;
- console warning/error checks;
- runtime mutation restoration.

## Rollback Strategy

If a future sprint accidentally turns Sprint Z artifacts into runtime authority:

1. Revert the runtime wiring first.
2. Restore the Telehealth Mode readiness contract to no-execution defaults.
3. Restore `liveConnectorEnabled: false`, `providerExecutionEnabled: false`, `regulatedActionEnabled: false`, `silentActionAllowed: false`, `backgroundExecutionAllowed: false`, `standardUserRuntimeMutationAllowed: false`, `storageSideEffectAllowed: false`, `networkSideEffectAllowed: false`, `executionAllowed: false`, and `liveActionEnabled: false`.
4. Re-run Phase 78 Telehealth Mode readiness QA.
5. Re-run Sprint Z1 QA.
6. Re-run `node scripts/qa-suite.js nexus-workforce`.
7. Re-run `node scripts/qa-suite.js all-safe`.
8. Browser validate the Standard User path if visible behavior changed.

## Next Safe Sprint Recommendation

Recommended next sprint train:

`Sprint Z2 - Telehealth Mode Feature Flag Contract`

Sprint Z2 should remain inert unless explicitly approved. It should define a default-off Telehealth Mode feature flag contract without live connectors, provider execution, clinic/telehealth/pharmacy execution, prescription/refill execution, scheduling, transportation dispatch, emergency dispatch, location/camera/microphone activation, storage writes, network calls, or execution authority.
