# Nexus Sprint AJ4 - Offline Low-Bandwidth Mode Runtime Absence Regression Guard

Current base: `fabc0c3a64c8d89295e3a736063862b0abbd8ae6`

Sprint AJ4 adds a deterministic regression guard proving the Offline Low-Bandwidth Mode readiness artifacts remain absent from Standard User runtime. This phase is documentation and QA only. It does not add runtime imports, script tags, UI, offline status surfaces, degraded response previews, stale-data banners, source freshness previews, cache boundary previews, sync boundary previews, fallback previews, offline cache runtime, local-first source runtime, service worker cache mutation, service worker route mutation, background sync, source sync, connector sync, offline queues, queued actions, stale-data claims, current cached-data claims, provider connector runtime, clinic connector runtime, telehealth connector runtime, pharmacy connector runtime, scheduling connector runtime, medical record connector runtime, FHIR connector runtime, prescription connector runtime, location connector runtime, camera connector runtime, microphone connector runtime, communications connector runtime, transportation connector runtime, health connector runtime, marketplace connector runtime, emergency connector runtime, provider contact, clinic contact, pharmacy contact, appointment scheduling, telehealth session creation, prescription refill workflow, medical record access, location sharing, camera activation, microphone activation, payment execution, marketplace transactions, communications execution, transportation dispatch, emergency dispatch, medical advice, diagnosis claims, prescription instructions, storage writes, cache writes, backend writes, network calls, provider execution, or action authority.

## Purpose

Prevent accidental drift where Offline Low-Bandwidth Mode readiness artifacts become runtime activation.

Sprint AJ4 protects:

- AJ1 Offline Low-Bandwidth Mode runtime activation readiness gate;
- AJ2 Offline Low-Bandwidth Mode feature flag contract;
- AJ3 Offline Low-Bandwidth Mode flag contract harness;
- Phase 88 Offline Low-Bandwidth Mode readiness contract.

## Runtime Absence Requirements

The following artifacts must not be loaded by `public/index.html`, `public/app.js`, or `server.js`:

- `public/nexus-offline-low-bandwidth-mode-readiness-contract.js`;
- `public/nexus-offline-low-bandwidth-mode-feature-flag.js`;
- `scripts/nexus-sprint-aj3-offline-low-bandwidth-mode-flag-contract-harness.js`;
- `fixtures/nexus/offline-low-bandwidth-mode-feature-flags.json`;
- Sprint AJ QA scripts.

The guard checks exact Offline Low-Bandwidth Mode artifact names and helpers. It intentionally does not ban generic health, telehealth, clinic, provider, pharmacy, scheduling, medical record, FHIR, prescription, transportation, emergency, training, jobs, education, learning, support, marketplace, agriculture, crop, farmer, trade, AgriTrade, map, field, workforce, offline, low-bandwidth, source, freshness, confidence, cache, or sync words, because existing Standard User, native/mobile, source-backed, and service worker behavior has separate runtime boundaries that must remain supported.

## Blocked Runtime Behavior

Sprint AJ artifacts must not introduce:

- active Offline Low-Bandwidth Mode runtime;
- live Offline Low-Bandwidth Mode runtime;
- offline cache runtime;
- local-first source runtime;
- service worker cache mutation;
- service worker route mutation;
- background sync;
- source sync;
- connector sync;
- offline queue runtime;
- queued action execution;
- stale data claims without freshness labels;
- current cached-data claims without verified freshness;
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
- emergency connector runtime;
- provider contact;
- clinic contact;
- pharmacy contact;
- appointment scheduling;
- telehealth session creation;
- prescription refill workflow;
- medical record access;
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
- unsupported live data claims;
- completed action claims;
- event handlers;
- typed route mutation;
- voice route mutation;
- policy bypass;
- confirmation bypass;
- permission bypass;
- role bypass;
- audit bypass;
- ambiguous prompt execution;
- permission prompts;
- backend writes;
- localStorage or sessionStorage writes;
- IndexedDB writes;
- Cache API writes;
- fetch or network calls;
- provider handoff;
- native bridge dispatch;
- calls;
- messages;
- WhatsApp, Telegram, SMS, or email sending;
- external navigation;
- real pending action creation;
- execution authority.

## Required Contract Invariants

The guard confirms the AJ2 feature flag contract still preserves:

- `enabled: false` by default;
- `visibleUiAllowed: false` by default;
- every protected Offline Low-Bandwidth Mode authority field as `false`;
- `noExecution: true`.

The guard confirms the AJ3 fixture harness still proves unsafe authority attempts normalize back to no-execution values.

## Standard User Safety Posture

In the current Standard User build:

- no Offline Low-Bandwidth Mode runtime is active;
- no offline UI, cache control, sync control, stale-data banner, or degraded-response surface appears from Sprint AJ artifacts;
- no live provider, clinic, telehealth, pharmacy, scheduling, medical record, FHIR, prescription, location, camera, microphone, communications, transportation, health, marketplace, emergency, or regulated connector runtime is loaded by Sprint AJ artifacts;
- no typed or voice route is changed by Sprint AJ artifacts;
- no cache write, source sync, connector sync, queued action, provider handoff, provider contact, clinic contact, pharmacy contact, appointment scheduling, telehealth session creation, prescription refill workflow, medical record access, location sharing, camera activation, microphone activation, payment execution, marketplace transaction, communications execution, transportation dispatch, emergency dispatch, medical advice, diagnosis claim, prescription instruction, or account/profile mutation is possible from Sprint AJ artifacts;
- no policy, confirmation, permission, role, or audit bypass is possible from Sprint AJ artifacts;
- existing health access, telehealth camera handoff, call confirmation, map permission, learning, workforce, agriculture, AgriTrade browsing, Admin/full Health modal classification, native/mobile behavior, service worker behavior, and Standard User behavior remains separate from Offline Low-Bandwidth Mode runtime authority.

## Browser Validation Implication

Sprint AJ4 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that imports Offline Low-Bandwidth Mode artifacts, renders offline UI, activates cache writes, changes service worker behavior, changes typed routing, changes voice routing, changes provider/clinic/telehealth/pharmacy/scheduling/medical-record/location/camera/microphone/payment/emergency behavior, writes audit events, changes permission prompts, or changes Standard User visible behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- low-risk Standard User prompt checks;
- Offline Low-Bandwidth Mode boundary checks;
- health/telehealth/learning/provider/location/camera/microphone/payment/marketplace/emergency boundary checks;
- console warning/error checks;
- runtime mutation restoration.

## QA Expectations

Sprint AJ4 QA must verify:

- this regression guard exists;
- AJ1, AJ2, AJ3, and Phase 88 artifacts exist;
- runtime files do not load Offline Low-Bandwidth Mode contracts, feature flags, fixtures, or harnesses;
- AJ2 default and unsafe-attempt behavior remains no-execution;
- AJ3 fixtures remain deterministic;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint AJ5 - Offline Low-Bandwidth Mode Lane Closeout`

Sprint AJ5 should close the Offline Low-Bandwidth Mode readiness lane, summarize AJ1-AJ4, and recommend the next safe inert lane without activating runtime behavior.
