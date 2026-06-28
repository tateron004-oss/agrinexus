# Nexus Sprint AH4 - Provider Mode Runtime Absence Regression Guard

Current base: `c2c9b35b5ba8c4ae33bee799bc876b8334a2b1d0`

Sprint AH4 adds a deterministic regression guard proving the Provider Mode readiness artifacts remain absent from Standard User runtime. This phase is documentation and QA only. It does not add runtime imports, script tags, UI, Provider Mode review surfaces, provider access previews, provider directory previews, clinic directory previews, telehealth previews, pharmacy previews, scheduling previews, medical record boundary previews, prescription boundary previews, location boundary previews, camera boundary previews, microphone boundary previews, identity boundary previews, communications boundary previews, transportation boundary previews, emergency boundary previews, live provider connector runtime, clinic connector runtime, telehealth connector runtime, pharmacy connector runtime, scheduling connector runtime, medical record connector runtime, FHIR connector runtime, prescription connector runtime, location connector runtime, camera connector runtime, microphone connector runtime, communications connector runtime, transportation connector runtime, health connector runtime, marketplace connector runtime, provider actions, provider contact, clinic contact, pharmacy contact, appointment scheduling, telehealth session creation, prescription refill workflow, medical record access, clinical documentation, location sharing, camera activation, microphone activation, payment execution, marketplace transactions, communications execution, transportation dispatch, emergency dispatch, medical advice, diagnosis claims, prescription instructions, storage writes, backend writes, provider execution, or action authority.

## Purpose

Prevent accidental drift where Provider Mode readiness artifacts become runtime activation.

Sprint AH4 protects:

- AH1 Provider Mode runtime activation readiness gate;
- AH2 Provider Mode feature flag contract;
- AH3 Provider Mode flag contract harness;
- Phase 86 Provider Mode readiness contract.

## Runtime Absence Requirements

The following artifacts must not be loaded by `public/index.html`, `public/app.js`, or `server.js`:

- `public/nexus-provider-mode-readiness-contract.js`;
- `public/nexus-provider-mode-feature-flag.js`;
- `scripts/nexus-sprint-ah3-provider-mode-flag-contract-harness.js`;
- `fixtures/nexus/provider-mode-feature-flags.json`;
- Sprint AH QA scripts.

The guard checks exact Provider Mode artifact names and helpers. It intentionally does not ban generic health, telehealth, clinic, provider, pharmacy, scheduling, medical record, FHIR, prescription, transportation, emergency, training, jobs, education, learning, support, marketplace, agriculture, crop, farmer, trade, AgriTrade, map, field, or workforce words, because existing Standard User behavior has separate runtime boundaries that must remain supported.

## Blocked Runtime Behavior

Sprint AH artifacts must not introduce:

- active Provider Mode runtime;
- live Provider Mode runtime;
- provider connector runtime;
- clinic connector runtime;
- telehealth connector runtime;
- pharmacy connector runtime;
- scheduling connector runtime;
- medical record connector runtime;
- FHIR connector runtime;
- prescription connector runtime;
- location connector runtime;
- camera connector runtime;
- microphone connector runtime;
- communications connector runtime;
- transportation connector runtime;
- health connector runtime;
- marketplace connector runtime;
- provider actions;
- provider contact;
- clinic contact;
- pharmacy contact;
- appointment scheduling;
- telehealth session creation;
- prescription refill workflow;
- medical record access;
- FHIR access;
- clinical documentation;
- location sharing;
- camera activation;
- microphone activation;
- payment execution;
- marketplace transaction execution;
- communications execution;
- transportation dispatch;
- emergency dispatch;
- medical records/FHIR runtime;
- medical advice;
- diagnosis claims;
- prescription instructions;
- identity, account, or profile mutation;
- source-backed claims without sources;
- stale data claims without freshness labels;
- confidence-free source-backed claims;
- unsupported live data claims;
- provider connection claims;
- clinic connection claims;
- pharmacy connection claims;
- completed action claims;
- event handlers;
- typed route mutation;
- voice route mutation;
- policy bypass;
- confirmation bypass;
- permission bypass;
- ambiguous prompt execution;
- permission prompts;
- audit writes;
- backend writes;
- localStorage or sessionStorage writes;
- IndexedDB writes;
- fetch or network calls;
- provider handoff;
- clinic handoff;
- pharmacy handoff;
- payment partner handoff;
- logistics partner handoff;
- native bridge dispatch;
- calls;
- messages;
- WhatsApp, Telegram, SMS, or email sending;
- external navigation;
- real pending action creation;
- execution authority.

## Required Contract Invariants

The guard confirms the AH2 feature flag contract still preserves:

- `enabled: false` by default;
- `visibleUiAllowed: false` by default;
- every protected Provider Mode authority field as `false`;
- `noExecution: true`.

The guard confirms the AH3 fixture harness still proves unsafe authority attempts normalize back to no-execution values.

## Standard User Safety Posture

In the current Standard User build:

- no Provider Mode runtime is active;
- no Provider Mode review surface appears from Sprint AH artifacts;
- no live provider, clinic, telehealth, pharmacy, scheduling, medical record, FHIR, prescription, location, camera, microphone, communications, transportation, health, marketplace, emergency, or regulated connector runtime is loaded by Sprint AH artifacts;
- no typed or voice route is changed by Sprint AH artifacts;
- no provider action, provider contact, clinic contact, pharmacy contact, appointment scheduling, telehealth session creation, prescription refill workflow, medical record access, clinical documentation, location sharing, camera activation, microphone activation, payment execution, marketplace transaction, communications execution, transportation dispatch, emergency dispatch, medical advice, diagnosis claim, prescription instruction, or account/profile mutation is possible from Sprint AH artifacts;
- no policy, confirmation, or permission bypass is possible from Sprint AH artifacts;
- no audit event is written by Sprint AH artifacts;
- existing health access, telehealth camera handoff, call confirmation, map permission, learning, workforce, agriculture, AgriTrade browsing, and Standard User behavior remains separate from Provider Mode runtime authority.

## Browser Validation Implication

Sprint AH4 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that imports Provider Mode artifacts, renders Provider Mode UI, activates live connectors, changes typed routing, changes voice routing, changes provider/clinic/telehealth/pharmacy/scheduling/medical-record/location/camera/microphone/payment/emergency behavior, writes audit events, changes permission prompts, or changes Standard User visible behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- low-risk Standard User prompt checks;
- Provider Mode boundary checks;
- health/telehealth/learning/provider/location/camera/microphone/payment/marketplace/emergency boundary checks;
- console warning/error checks;
- runtime mutation restoration.

## QA Expectations

Sprint AH4 QA must verify:

- this regression guard exists;
- AH1, AH2, AH3, and Phase 86 artifacts exist;
- runtime files do not load Provider Mode contracts, feature flags, fixtures, or harnesses;
- AH2 default and unsafe-attempt behavior remains no-execution;
- AH3 fixtures remain deterministic;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint AH5 - Provider Mode Lane Closeout`

Sprint AH5 should close the Provider Mode readiness lane, summarize AH1-AH4, and recommend the next safe inert lane without activating runtime behavior.
