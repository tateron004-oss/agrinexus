# Nexus Sprint AK4 - Africa Regional Deployment Mode Runtime Absence Regression Guard

Current base: `2712860e90e8f2eee0e9b444052e1d1c3054139b`

Sprint AK4 adds a deterministic regression guard proving the Africa Regional Deployment Mode readiness artifacts remain absent from Standard User runtime. This phase is documentation and QA only. It does not add runtime imports, script tags, UI, regional mode surfaces, country kit previews, jurisdiction routing, local-language runtime, regional source sync, partner directory runtime, provider connector runtime, clinic connector runtime, telehealth connector runtime, pharmacy connector runtime, agriculture connector runtime, workforce connector runtime, community-service connector runtime, transportation connector runtime, marketplace connector runtime, health connector runtime, medical-record/FHIR runtime, location connector runtime, identity connector runtime, communications connector runtime, emergency connector runtime, provider contact, clinic contact, pharmacy contact, appointment scheduling, telehealth session creation, prescription refill workflow, medical record access, location sharing, camera activation, microphone activation, payment execution, marketplace transactions, communications execution, transportation dispatch, emergency dispatch, medical advice, diagnosis claims, prescription instructions, storage writes, backend writes, network calls, provider execution, or action authority.

## Purpose

Prevent accidental drift where Africa Regional Deployment Mode readiness artifacts become runtime activation.

Sprint AK4 protects:

- AK1 Africa Regional Deployment Mode runtime activation readiness gate;
- AK2 Africa Regional Deployment Mode feature flag contract;
- AK3 Africa Regional Deployment Mode flag contract harness;
- Phase 89 Africa Regional Deployment Mode readiness contract.

## Runtime Absence Requirements

The following artifacts must not be loaded by `public/index.html`, `public/app.js`, or `server.js`:

- `public/nexus-africa-regional-deployment-mode-readiness-contract.js`;
- `public/nexus-africa-regional-deployment-mode-feature-flag.js`;
- `scripts/nexus-sprint-ak3-africa-regional-deployment-mode-flag-contract-harness.js`;
- `fixtures/nexus/africa-regional-deployment-mode-feature-flags.json`;
- Sprint AK QA scripts.

The guard checks exact Africa Regional Deployment Mode artifact names and helpers. It intentionally does not ban generic health, telehealth, clinic, provider, pharmacy, scheduling, medical record, FHIR, prescription, transportation, emergency, training, jobs, education, learning, support, marketplace, agriculture, crop, farmer, trade, AgriTrade, map, field, workforce, Africa, regional, country, language, source, freshness, confidence, or jurisdiction words, because existing Standard User, multilingual, map, source-backed, and regional-readiness documentation behavior has separate runtime boundaries that must remain supported.

## Blocked Runtime Behavior

Sprint AK artifacts must not introduce:

- active Africa Regional Deployment Mode runtime;
- live Africa Regional Deployment Mode runtime;
- country kit activation;
- jurisdiction routing runtime;
- local language runtime;
- regional source connector runtime;
- partner connector runtime;
- provider connector runtime;
- clinic connector runtime;
- telehealth connector runtime;
- pharmacy connector runtime;
- agriculture connector runtime;
- workforce connector runtime;
- community-service connector runtime;
- transportation connector runtime;
- marketplace connector runtime;
- health connector runtime;
- medical record connector runtime;
- FHIR connector runtime;
- location connector runtime;
- identity connector runtime;
- communications connector runtime;
- emergency connector runtime;
- regional preference mutation;
- regional source sync;
- partner verification bypass;
- jurisdiction bypass;
- language review bypass;
- provider contact;
- clinic contact;
- pharmacy contact;
- appointment scheduling;
- telehealth session creation;
- prescription refill workflow;
- medical record access;
- FHIR access;
- location sharing;
- camera activation;
- microphone activation;
- payment execution;
- marketplace transaction execution;
- communications execution;
- transportation dispatch;
- emergency dispatch;
- medical advice;
- diagnosis claims;
- prescription instructions;
- unsupported country coverage claims;
- unsupported local provider claims;
- unsupported live data claims;
- completed action claims;
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

The guard confirms the AK2 feature flag contract still preserves:

- `enabled: false` by default;
- `visibleUiAllowed: false` by default;
- every protected Africa Regional Deployment Mode authority field as `false`;
- `noExecution: true`.

The guard confirms the AK3 fixture harness still proves unsafe authority attempts normalize back to no-execution values.

## Standard User Safety Posture

In the current Standard User build:

- no Africa Regional Deployment Mode runtime is active;
- no regional mode UI, country kit, jurisdiction router, language runtime, or regional source sync appears from Sprint AK artifacts;
- no live provider, clinic, telehealth, pharmacy, scheduling, medical record, FHIR, prescription, location, camera, microphone, communications, transportation, health, marketplace, emergency, regional, or regulated connector runtime is loaded by Sprint AK artifacts;
- no typed or voice route is changed by Sprint AK artifacts;
- no country kit activation, jurisdiction route, source sync, provider handoff, provider contact, clinic contact, pharmacy contact, appointment scheduling, telehealth session creation, prescription refill workflow, medical record access, FHIR access, location sharing, camera activation, microphone activation, payment execution, marketplace transaction, communications execution, transportation dispatch, emergency dispatch, medical advice, diagnosis claim, prescription instruction, unsupported country coverage claim, unsupported local provider claim, or account/profile mutation is possible from Sprint AK artifacts;
- no policy, confirmation, permission, role, or audit bypass is possible from Sprint AK artifacts;
- existing health access, telehealth camera handoff, call confirmation, map permission, learning, workforce, agriculture, AgriTrade browsing, Admin/full Health modal classification, native/mobile behavior, and Standard User behavior remains separate from Africa Regional Deployment Mode runtime authority.

## Browser Validation Implication

Sprint AK4 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that imports Africa Regional Deployment Mode artifacts, renders regional UI, activates country kits, changes jurisdiction routing, changes typed routing, changes voice routing, changes provider/clinic/telehealth/pharmacy/scheduling/medical-record/location/camera/microphone/payment/emergency behavior, writes audit events, changes permission prompts, or changes Standard User visible behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- low-risk Standard User prompt checks;
- Africa Regional Deployment Mode boundary checks;
- health/telehealth/learning/provider/location/camera/microphone/payment/marketplace/emergency boundary checks;
- console warning/error checks;
- runtime mutation restoration.

## QA Expectations

Sprint AK4 QA must verify:

- this regression guard exists;
- AK1, AK2, AK3, and Phase 89 artifacts exist;
- runtime files do not load Africa Regional Deployment Mode contracts, feature flags, fixtures, or harnesses;
- AK2 default and unsafe-attempt behavior remains no-execution;
- AK3 fixtures remain deterministic;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint AK5 - Africa Regional Deployment Mode Lane Closeout`

Sprint AK5 should close the Africa Regional Deployment Mode readiness lane, summarize AK1-AK4, and recommend the next safe inert lane without activating runtime behavior.
