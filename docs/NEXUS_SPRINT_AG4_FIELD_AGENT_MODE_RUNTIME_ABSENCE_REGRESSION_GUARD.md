# Nexus Sprint AG4 - Field Agent Mode Runtime Absence Regression Guard

Current base: `088e51b716d2f7ec6900a49d0a7c152345f6f2a2`

Sprint AG4 adds a deterministic regression guard proving the Field Agent Mode readiness artifacts remain absent from Standard User runtime. This phase is documentation and QA only. It does not add runtime imports, script tags, UI, Field Agent Mode review surfaces, field support previews, field source previews, offline capture previews, survey previews, case intake previews, task assignment previews, supervisor directory previews, program directory previews, location boundary previews, camera boundary previews, microphone boundary previews, identity boundary previews, communications boundary previews, transportation boundary previews, emergency boundary previews, live field connector runtime, field source connector runtime, offline capture connector runtime, survey connector runtime, case intake connector runtime, task assignment connector runtime, location connector runtime, camera connector runtime, microphone connector runtime, provider connector runtime, communications connector runtime, transportation connector runtime, health connector runtime, marketplace connector runtime, field dispatch, offline capture submission, case creation, task assignment, provider contact, supervisor contact, program partner contact, location sharing, camera activation, microphone activation, payment execution, marketplace transactions, communications execution, transportation dispatch, emergency dispatch, medical records/FHIR runtime, medical advice, diagnosis claims, prescription instructions, storage writes, backend writes, provider execution, or action authority.

## Purpose

Prevent accidental drift where Field Agent Mode readiness artifacts become runtime activation.

Sprint AG4 protects:

- AG1 Field Agent Mode runtime activation readiness gate;
- AG2 Field Agent Mode feature flag contract;
- AG3 Field Agent Mode flag contract harness;
- Phase 85 Field Agent Mode readiness contract.

## Runtime Absence Requirements

The following artifacts must not be loaded by `public/index.html`, `public/app.js`, or `server.js`:

- `public/nexus-field-agent-mode-readiness-contract.js`;
- `public/nexus-field-agent-mode-feature-flag.js`;
- `scripts/nexus-sprint-ag3-field-agent-mode-flag-contract-harness.js`;
- `fixtures/nexus/field-agent-mode-feature-flags.json`;
- Sprint AG QA scripts.

The guard checks exact Field Agent Mode artifact names and helpers. It intentionally does not ban generic health, telehealth, clinic, provider, training, jobs, education, learning, support, marketplace, agriculture, crop, farmer, trade, AgriTrade, map, field, or workforce words, because existing Standard User behavior has separate runtime boundaries that must remain supported.

## Blocked Runtime Behavior

Sprint AG artifacts must not introduce:

- active Field Agent Mode runtime;
- live Field Agent Mode runtime;
- field connector runtime;
- field source connector runtime;
- offline capture connector runtime;
- survey connector runtime;
- case intake connector runtime;
- task assignment connector runtime;
- location connector runtime;
- camera connector runtime;
- microphone connector runtime;
- provider connector runtime;
- communications connector runtime;
- transportation connector runtime;
- health connector runtime;
- marketplace connector runtime;
- field dispatch;
- offline capture submission;
- case creation;
- task assignment;
- provider contact;
- supervisor contact;
- program partner contact;
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
- supervisor connection claims;
- program partner connection claims;
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
- supervisor handoff;
- program partner handoff;
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

The guard confirms the AG2 feature flag contract still preserves:

- `enabled: false` by default;
- `visibleUiAllowed: false` by default;
- every protected Field Agent Mode authority field as `false`;
- `noExecution: true`.

The guard confirms the AG3 fixture harness still proves unsafe authority attempts normalize back to no-execution values.

## Standard User Safety Posture

In the current Standard User build:

- no Field Agent Mode runtime is active;
- no Field Agent Mode review surface appears from Sprint AG artifacts;
- no live field, field source, offline capture, survey, case intake, task assignment, location, camera, microphone, provider, communications, transportation, health, marketplace, emergency, or FHIR connector runtime is loaded by Sprint AG artifacts;
- no typed or voice route is changed by Sprint AG artifacts;
- no field dispatch, offline capture submission, case creation, task assignment, provider contact, supervisor contact, program partner contact, location sharing, camera activation, microphone activation, payment execution, marketplace transaction, communications execution, transportation dispatch, emergency dispatch, medical advice, diagnosis claim, prescription instruction, or account/profile mutation is possible from Sprint AG artifacts;
- no policy, confirmation, or permission bypass is possible from Sprint AG artifacts;
- no audit event is written by Sprint AG artifacts;
- existing health access, telehealth camera handoff, call confirmation, map permission, learning, workforce, agriculture, AgriTrade browsing, and Standard User behavior remains separate from Field Agent Mode runtime authority.

## Browser Validation Implication

Sprint AG4 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that imports Field Agent Mode artifacts, renders Field Agent Mode UI, activates live connectors, changes typed routing, changes voice routing, changes provider/supervisor/partner/location/camera/microphone/payment/emergency behavior, writes audit events, changes permission prompts, or changes Standard User visible behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- low-risk Standard User prompt checks;
- Field Agent Mode boundary checks;
- health/telehealth/learning/provider/location/camera/microphone/payment/marketplace/emergency boundary checks;
- console warning/error checks;
- runtime mutation restoration.

## QA Expectations

Sprint AG4 QA must verify:

- this regression guard exists;
- AG1, AG2, AG3, and Phase 85 artifacts exist;
- runtime files do not load Field Agent Mode contracts, feature flags, fixtures, or harnesses;
- AG2 default and unsafe-attempt behavior remains no-execution;
- AG3 fixtures remain deterministic;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint AG5 - Field Agent Mode Lane Closeout`

Sprint AG5 should close the Field Agent Mode readiness lane, summarize AG1-AG4, and recommend the next safe inert lane without activating runtime behavior.
