# Nexus Sprint X1 - Farmer Mode Runtime Activation Readiness Gate

Current base: `08ef8fe86be3049391e97fffae3173ccb9defb0f`

Sprint X1 starts the Farmer Mode readiness lane after Sprint W5 and Phase 76. This phase is documentation and deterministic QA only. It does not add a live farmer mode runtime, live connectors, provider execution, marketplace transactions, payments, buyer or seller contact, transportation dispatch, emergency dispatch, location sharing, camera or microphone activation, medical or pharmacy execution, event handlers, typed route mutation, voice route mutation, permission prompt, audit write, storage write, backend write, network call, provider handoff, pending action, or execution behavior.

## Relationship To Prior Lanes

Sprint X1 builds on:

- Sprint W5 - Trust/Fraud/Risk Detection Lane Closeout
- Phase 76 - Farmer Mode Readiness Contract

Trust/Fraud/Risk Detection readiness is not Farmer Mode runtime activation. Farmer Mode readiness is also not source authority, agronomic advice authority, marketplace transaction authority, payment authority, buyer or seller contact authority, location consent, camera consent, medical authority, provider authority, product owner approval, user consent, audit approval, or execution authority.

## Runtime Activation Preconditions

Farmer Mode runtime activation remains blocked until all of these conditions are satisfied and reviewed:

- product owner approval for a Farmer Mode runtime change;
- verified agriculture, extension, market, weather, or partner source;
- source attribution;
- freshness label;
- confidence label;
- local context boundary and uncertainty label;
- user consent boundary where user data, location, camera, account/profile, or marketplace data is involved;
- role and permission check;
- explicit user approval for high-risk or partner-dependent actions;
- visible cancellation path;
- audit decision record;
- safe fallback path;
- no unsupported live claim;
- no completed action claim;
- no medical diagnosis, prescription, telehealth, or pharmacy execution from Farmer Mode;
- no marketplace buy, sell, order, payment, buyer contact, seller contact, shipment, or dispatch execution from Farmer Mode;
- no location sharing without explicit permission and configured connector;
- no camera or microphone activation without explicit permission and configured connector;
- no provider, buyer, seller, clinician, pharmacy, emergency, transportation, or workforce contact;
- no communications execution;
- no Standard User runtime mutation approval gap;
- agriculture source-backed answer prompt coverage;
- marketplace boundary prompt coverage;
- location/camera boundary prompt coverage;
- healthcare/pharmacy/emergency boundary prompt coverage;
- regression suite coverage;
- browser validation plan for any future visible/runtime change;
- deterministic QA coverage.

## Runtime Absence Requirements

The following must remain absent from `public/index.html`, `public/app.js`, and `server.js` during Sprint X1:

- `public/nexus-farmer-mode-readiness-contract.js`;
- any future Farmer Mode feature flag;
- any future Farmer Mode fixture harness;
- any future live farmer mode runtime;
- any future agriculture connector runtime introduced by Sprint X;
- any future market transaction runtime introduced by Sprint X;
- any future field agent dispatch runtime introduced by Sprint X;
- any future farm location sharing runtime introduced by Sprint X;
- any future camera or crop image capture runtime introduced by Sprint X;
- Sprint X QA scripts.

Sprint X1 artifacts may be present in the repository only as documentation or deterministic QA. They must not be loaded, executed, imported, dynamically imported, injected, routed, clicked, spoken into runtime behavior, or used as authority by the Standard User build.

## Blocked Runtime Behavior

Sprint X1 does not authorize or introduce:

- active Farmer Mode runtime;
- live agriculture connector activation;
- live market source retrieval runtime;
- source-backed agronomic claims without sources;
- stale data claims without freshness labels;
- confidence-free agriculture claims;
- unsupported live data claims;
- provider connection claims;
- completed action claims;
- medical diagnosis claims;
- prescription or pharmacy execution claims;
- telehealth action execution claims;
- marketplace transaction claims;
- buy execution claims;
- sell execution claims;
- order creation claims;
- payment execution claims;
- buyer or seller contact claims;
- transportation dispatch claims;
- emergency dispatch claims;
- location sharing claims;
- camera activation claims;
- microphone activation claims;
- account or profile mutation claims;
- event handlers;
- typed route mutation;
- voice route mutation;
- policy bypass from Farmer Mode metadata;
- confirmation bypass from Farmer Mode metadata;
- permission bypass from Farmer Mode metadata;
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

The normal Standard User build must remain unchanged while Sprint X1 artifacts exist in the repository:

- no Sprint X1 contract or QA script is imported by `public/index.html`, `public/app.js`, or `server.js`;
- no Sprint X1 artifact creates buttons, cards, modals, forms, chips, status text, hidden queues, route handlers, voice handlers, or typed handlers;
- existing agriculture, marketplace, workforce, health, telehealth, map, call, music, learning, language, and Standard User behavior remains separate from Farmer Mode readiness artifacts;
- high-risk prompts remain blocked, permission-gated, confirmation-gated, or bounded by existing app behavior;
- hidden/debug-only metadata must not become user-visible;
- no action has been taken.

## Required Contract Invariants

The Phase 76 Farmer Mode readiness contract must remain blocked and non-executing:

- `contractId: "farmer-mode.readiness.phase_76"`;
- `readinessStatus: "blocked"`;
- `riskTier: "controlled"`;
- `roadmapComponent: "farmer mode runtime"`;
- `acceptanceTarget: "farmer mode ready"`;
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

Farmer Mode readiness must not infer authority over these domains:

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

> I can help prepare source-backed agriculture guidance and explain what information would be needed, but I cannot buy, sell, pay, contact buyers or providers, share location, activate the camera, or take field actions without approved sources, permission, confirmation, and audit controls.

Disallowed claims:

- I diagnosed your crop.
- I sold your produce.
- I contacted the buyer.
- I placed the order.
- I scheduled transport.
- I shared your location.
- I opened your camera.
- I contacted the provider.
- I completed the action.

## Browser Validation Implication

Sprint X1 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that loads Farmer Mode artifacts, renders Farmer Mode UI, activates a live Farmer Mode runtime, performs agriculture source retrieval runtime, changes typed routing, changes voice routing, changes Standard User visible behavior, writes audit events, changes permission prompts, changes marketplace or account behavior, or changes risk tier behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- agriculture prompt checks;
- farmer help prompt checks;
- crop issue prompt checks;
- AgriTrade and crop trade boundary checks;
- buy/sell/payment boundary checks;
- buyer/seller contact boundary checks;
- location/camera boundary checks;
- healthcare/pharmacy/emergency boundary checks;
- ambiguous prompt checks;
- high-risk prompt checks;
- console warning/error checks;
- runtime mutation restoration.

## Rollback Strategy

If a future sprint accidentally turns Sprint X artifacts into runtime authority:

1. Revert the runtime wiring first.
2. Restore the Farmer Mode readiness contract to no-execution defaults.
3. Restore `liveConnectorEnabled: false`, `providerExecutionEnabled: false`, `regulatedActionEnabled: false`, `silentActionAllowed: false`, `backgroundExecutionAllowed: false`, `standardUserRuntimeMutationAllowed: false`, `storageSideEffectAllowed: false`, `networkSideEffectAllowed: false`, `executionAllowed: false`, and `liveActionEnabled: false`.
4. Re-run Phase 76 Farmer Mode readiness QA.
5. Re-run Sprint X1 QA.
6. Re-run `node scripts/qa-suite.js nexus-workforce`.
7. Re-run `node scripts/qa-suite.js all-safe`.
8. Browser validate the Standard User path if visible behavior changed.

## Next Safe Sprint Recommendation

Recommended next sprint train:

`Sprint X2 - Farmer Mode Feature Flag Contract`

Sprint X2 should remain inert unless explicitly approved. It should define a default-off Farmer Mode feature flag contract without live connectors, marketplace transactions, payments, provider contact, camera/location activation, storage writes, network calls, or execution authority.
