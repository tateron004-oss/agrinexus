# Nexus Sprint AB1 - Mobile Clinic Mode Runtime Activation Readiness Gate

Current base: `2fb88c21430244a4c7b481eb13f3d57589a6d558`

Sprint AB1 starts the Mobile Clinic Mode readiness lane after Sprint AA5 and Phase 80. This phase is documentation and deterministic QA only. It does not add a live mobile clinic mode runtime, live connectors, provider execution, mobile clinic schedule execution, clinic action execution, telehealth execution, appointment scheduling, transportation dispatch, emergency dispatch, location sharing, camera or microphone activation, pharmacy or prescription execution, medical records access, medical advice, diagnosis claims, payment execution, marketplace transactions, calls, messages, WhatsApp, Telegram, SMS, email, event handlers, typed route mutation, voice route mutation, permission prompt, audit write, storage write, backend write, network call, provider handoff, pending action, or execution behavior.

## Relationship To Prior Lanes

Sprint AB1 builds on:

- Sprint AA5 - Pharmacy Mode Lane Closeout
- Phase 80 - Mobile Clinic Mode Readiness Contract

Pharmacy Mode readiness is not Mobile Clinic Mode runtime activation. Mobile Clinic Mode readiness is also not clinic authority, telehealth authority, provider authority, clinician authority, mobile clinic schedule authority, appointment authority, transportation authority, emergency authority, location consent, product owner approval, user consent, provider confirmation, audit approval, payment authority, identity authority, or execution authority.

## Runtime Activation Preconditions

Mobile Clinic Mode runtime activation remains blocked until all of these conditions are satisfied and reviewed:

- product owner approval for a Mobile Clinic Mode runtime change;
- verified mobile clinic schedule, clinic, provider, transportation, location, telehealth, or regulated source;
- verified live mobile clinic connector or partner availability state;
- source attribution;
- freshness label;
- confidence label;
- user consent boundary where location, health context, provider data, clinic data, account/profile, transportation, payment, or medical context is involved;
- identity verification boundary when appointment, clinic access, transportation, payment, account, or regulated health information is involved;
- role and permission check;
- explicit user approval for high-risk or partner-dependent actions;
- provider or clinic confirmation before any provider-facing workflow;
- visible cancellation path;
- audit decision record;
- safe fallback path;
- no unsupported live claim;
- no completed action claim;
- no mobile clinic dispatch, appointment scheduling, clinic provider contact, clinician contact, transportation dispatch, emergency dispatch, location sharing, camera, microphone, payment, pharmacy, prescription, refill, or medical execution from Mobile Clinic Mode;
- no provider, clinician, pharmacy, payer, emergency service, transportation service, marketplace, buyer, seller, workforce, or family contact;
- no communications execution;
- no Standard User runtime mutation approval gap;
- mobile clinic schedule source-backed answer prompt coverage;
- clinic/provider/transportation/location boundary prompt coverage;
- payment/identity/emergency boundary prompt coverage;
- regression suite coverage;
- browser validation plan for any future visible/runtime change;
- deterministic QA coverage.

## Runtime Absence Requirements

The following must remain absent from `public/index.html`, `public/app.js`, and `server.js` during Sprint AB1:

- `public/nexus-mobile-clinic-mode-readiness-contract.js`;
- any future Mobile Clinic Mode feature flag;
- any future Mobile Clinic Mode fixture harness;
- any future live mobile clinic mode runtime;
- any future mobile clinic, clinic, provider, clinician, telehealth, transportation, emergency, location, camera, microphone, payment, pharmacy, prescription, refill, or medical records connector runtime introduced by Sprint AB;
- Sprint AB QA scripts.

Sprint AB1 artifacts may be present in the repository only as documentation or deterministic QA. They must not be loaded, executed, imported, dynamically imported, injected, routed, clicked, spoken into runtime behavior, or used as authority by the Standard User build.

## Blocked Runtime Behavior

Sprint AB1 does not authorize or introduce:

- active Mobile Clinic Mode runtime;
- live mobile clinic connector activation;
- mobile clinic schedule connector runtime;
- clinic connector runtime;
- telehealth connector runtime;
- provider connector runtime;
- clinician contact runtime;
- transportation connector runtime;
- location connector runtime;
- pharmacy connector runtime;
- prescription or refill connector runtime;
- appointment scheduling runtime;
- mobile clinic schedule execution;
- transportation dispatch runtime;
- emergency dispatch runtime;
- medical records or FHIR access runtime;
- medical advice;
- diagnosis claims;
- prescription instructions;
- mobile clinic action execution claims;
- provider contact claims;
- clinician contact claims;
- appointment scheduling claims;
- transportation dispatch claims;
- emergency dispatch claims;
- location sharing claims;
- camera activation claims;
- microphone activation claims;
- payment execution claims;
- source-backed mobile clinic claims without sources;
- stale data claims without freshness labels;
- confidence-free mobile clinic claims;
- unsupported live data claims;
- provider connection claims;
- completed action claims;
- account or profile mutation claims;
- event handlers;
- typed route mutation;
- voice route mutation;
- policy bypass from Mobile Clinic Mode metadata;
- confirmation bypass from Mobile Clinic Mode metadata;
- permission bypass from Mobile Clinic Mode metadata;
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

The normal Standard User build must remain unchanged while Sprint AB1 artifacts exist in the repository:

- no Sprint AB1 contract or QA script is imported by `public/index.html`, `public/app.js`, or `server.js`;
- no Sprint AB1 artifact creates buttons, cards, modals, forms, chips, status text, hidden queues, route handlers, voice handlers, or typed handlers;
- existing agriculture, marketplace, workforce, rural health, health, telehealth, map, call, music, learning, language, and Standard User behavior remains separate from Mobile Clinic Mode readiness artifacts;
- high-risk prompts remain blocked, permission-gated, confirmation-gated, or bounded by existing app behavior;
- mobile clinic, clinic schedule, transportation, emergency, location, payment, and provider-contact prompts must not execute from Sprint AB1 artifacts;
- hidden/debug-only metadata must not become user-visible;
- no action has been taken.

## Required Contract Invariants

The Phase 80 Mobile Clinic Mode readiness contract must remain blocked and non-executing:

- `contractId: "mobile-clinic-mode.readiness.phase_80"`;
- `readinessStatus: "blocked"`;
- `riskTier: "high"`;
- `roadmapComponent: "mobile clinic mode"`;
- `acceptanceTarget: "no dispatch claim"`;
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

Mobile Clinic Mode readiness must not infer authority over these domains:

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

> I can help prepare mobile clinic access options and explain what information would be needed, but I cannot schedule a visit, contact a clinic or provider, dispatch transportation, dispatch emergency services, share location, activate the camera, activate the microphone, process payment, access medical records, or take medical action without verified sources, consent, permission, confirmation, provider availability, and audit controls.

Useful implementation copy for future phases:

- Mobile clinic mode is not connected yet.
- This requires a verified mobile clinic schedule source.
- This requires consent and approval.
- I cannot schedule a mobile clinic visit yet.
- I cannot contact a mobile clinic provider yet.
- I cannot dispatch transportation or emergency help.
- No action has been taken.

Disallowed claims:

- I scheduled your mobile clinic visit.
- I contacted the mobile clinic.
- I contacted the provider.
- I dispatched transport.
- I dispatched emergency help.
- I shared your location.
- I opened your camera.
- I opened your microphone.
- I accessed your medical record.
- I processed your payment.
- I completed the action.

## Browser Validation Implication

Sprint AB1 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that loads Mobile Clinic Mode artifacts, renders Mobile Clinic Mode UI, activates a live Mobile Clinic Mode runtime, performs mobile clinic source retrieval runtime, changes typed routing, changes voice routing, changes Standard User visible behavior, writes audit events, changes permission prompts, changes provider/clinic/schedule/transportation/emergency/location/camera/microphone behavior, or changes risk tier behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- mobile clinic support prompt checks;
- clinic/provider boundary checks;
- schedule boundary checks;
- location/transportation/emergency boundary checks;
- camera/microphone boundary checks;
- ambiguous prompt checks;
- high-risk prompt checks;
- console warning/error checks;
- runtime mutation restoration.

## Rollback Strategy

If a future sprint accidentally turns Sprint AB artifacts into runtime authority:

1. Revert the runtime wiring first.
2. Restore the Mobile Clinic Mode readiness contract to no-execution defaults.
3. Restore `liveConnectorEnabled: false`, `providerExecutionEnabled: false`, `regulatedActionEnabled: false`, `silentActionAllowed: false`, `backgroundExecutionAllowed: false`, `standardUserRuntimeMutationAllowed: false`, `storageSideEffectAllowed: false`, `networkSideEffectAllowed: false`, `executionAllowed: false`, and `liveActionEnabled: false`.
4. Re-run Phase 80 Mobile Clinic Mode readiness QA.
5. Re-run Sprint AB1 QA.
6. Re-run `node scripts/qa-suite.js nexus-workforce`.
7. Re-run `node scripts/qa-suite.js all-safe`.
8. Browser validate the Standard User path if visible behavior changed.

## Next Safe Sprint Recommendation

Recommended next sprint train:

`Sprint AB2 - Mobile Clinic Mode Feature Flag Contract`

Sprint AB2 should remain inert unless explicitly approved. It should define a default-off Mobile Clinic Mode feature flag contract without live connectors, provider execution, mobile clinic scheduling, transportation dispatch, emergency dispatch, location/camera/microphone activation, storage writes, network calls, or execution authority.
