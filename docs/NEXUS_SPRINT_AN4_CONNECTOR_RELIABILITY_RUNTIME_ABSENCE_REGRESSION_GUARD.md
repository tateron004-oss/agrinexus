# Nexus Sprint AN4 - Connector Reliability Runtime Absence Regression Guard

Current base: `3119fc540710ee61f24c6f408f923223f47f0c4f`

Sprint AN4 adds a deterministic regression guard proving the Connector Reliability readiness artifacts remain absent from Standard User runtime. This phase is documentation and QA only. It does not add runtime imports, script tags, UI, connector reliability surfaces, connector polling, connector retry, connector fallback, connector health dashboards, source availability monitoring, provider availability monitoring, partner availability monitoring, stale data alerts, admin connector queues, provider connector runtime, clinic connector runtime, telehealth connector runtime, pharmacy connector runtime, agriculture connector runtime, workforce connector runtime, community-service connector runtime, transportation connector runtime, marketplace connector runtime, health connector runtime, medical-record/FHIR runtime, location connector runtime, identity connector runtime, communications connector runtime, emergency connector runtime, provider contact, clinic contact, pharmacy contact, appointment scheduling, telehealth session creation, prescription refill workflow, medical record access, location sharing, camera activation, microphone activation, payment execution, marketplace transactions, communications execution, transportation dispatch, emergency dispatch, medical advice, diagnosis claims, prescription instructions, storage writes, backend writes, network calls, provider execution, or action authority.

## Purpose

Prevent accidental drift where Connector Reliability readiness artifacts become runtime activation.

Sprint AN4 protects:

- AN1 Connector Reliability runtime activation readiness gate;
- AN2 Connector Reliability feature flag contract;
- AN3 Connector Reliability flag contract harness;
- Phase 92 Connector Reliability readiness contract.

## Runtime Absence Requirements

The following artifacts must not be loaded by `public/index.html`, `public/app.js`, or `server.js`:

- `public/nexus-connector-reliability-readiness-contract.js`;
- `public/nexus-connector-reliability-feature-flag.js`;
- `scripts/nexus-sprint-an3-connector-reliability-flag-contract-harness.js`;
- `fixtures/nexus/connector-reliability-feature-flags.json`;
- Sprint AN QA scripts.

The guard checks exact Connector Reliability artifact names and helpers. It intentionally does not ban generic source, freshness, confidence, health, telehealth, clinic, provider, pharmacy, scheduling, medical record, FHIR, prescription, transportation, emergency, training, jobs, education, learning, support, marketplace, agriculture, crop, farmer, trade, AgriTrade, map, field, workforce, admin, review, dashboard, alert, connector, reliability, retry, or fallback words, because existing Standard User, source-backed, admin, health, and readiness documentation behavior has separate runtime boundaries that must remain supported.

## Blocked Runtime Behavior

Sprint AN artifacts must not introduce:

- active Connector Reliability runtime;
- live Connector Reliability runtime;
- live connector activation;
- connector polling runtime;
- connector retry runtime;
- connector fallback runtime;
- connector health dashboard runtime;
- source availability runtime;
- provider availability runtime;
- partner availability runtime;
- stale data alert runtime;
- admin connector queue runtime;
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
- connector-driven action creation;
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
- unsupported live connector claims;
- unsupported provider availability claims;
- unsupported connector health claims;
- unsupported live data claims;
- completed action claims;
- typed route mutation;
- voice route mutation;
- policy bypass;
- confirmation bypass;
- permission bypass;
- role bypass;
- privacy bypass;
- data minimization bypass;
- redaction bypass;
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

The guard confirms the AN2 feature flag contract still preserves:

- `enabled: false` by default;
- `visibleUiAllowed: false` by default;
- every protected Connector Reliability authority field as `false`;
- `noExecution: true`.

The guard confirms the AN3 fixture harness still proves unsafe authority attempts normalize back to no-execution values.

## Standard User Safety Posture

In the current Standard User build:

- no Connector Reliability runtime is active;
- no connector reliability UI, connector poller, retry engine, fallback engine, connector health dashboard, source availability monitor, provider availability monitor, partner availability monitor, stale data alert, or admin connector queue appears from Sprint AN artifacts;
- no live provider, clinic, telehealth, pharmacy, scheduling, medical record, FHIR, prescription, location, camera, microphone, communications, transportation, health, marketplace, emergency, connector, or regulated connector runtime is loaded by Sprint AN artifacts;
- no typed or voice route is changed by Sprint AN artifacts;
- no connector-driven source sync, provider handoff, provider contact, clinic contact, pharmacy contact, appointment scheduling, telehealth session creation, prescription refill workflow, medical record access, FHIR access, location sharing, camera activation, microphone activation, payment execution, marketplace transaction, communications execution, transportation dispatch, emergency dispatch, medical advice, diagnosis claim, prescription instruction, unsupported live connector claim, unsupported provider availability claim, unsupported connector health claim, or account/profile mutation is possible from Sprint AN artifacts;
- no policy, confirmation, permission, role, privacy, data minimization, redaction, or audit bypass is possible from Sprint AN artifacts;
- existing health access, telehealth camera handoff, call confirmation, map permission, learning, workforce, agriculture, AgriTrade browsing, Admin/full Health modal classification, native/mobile behavior, source-backed answers, browser speech behavior, multilingual voice responses, and Standard User behavior remains separate from Connector Reliability runtime authority.

## Browser Validation Implication

Sprint AN4 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that imports Connector Reliability artifacts, renders connector reliability UI, polls connectors, retries connectors, applies fallback behavior, renders connector dashboards, creates stale data alerts, monitors source availability, monitors provider availability, creates admin connector queues, changes typed routing, changes voice routing, changes provider/clinic/telehealth/pharmacy/scheduling/medical-record/location/camera/microphone/payment/emergency behavior, writes audit events, changes permission prompts, or changes Standard User visible behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- low-risk Standard User prompt checks;
- Connector Reliability boundary checks;
- health/telehealth/learning/provider/location/camera/microphone/payment/marketplace/emergency boundary checks;
- console warning/error checks;
- runtime mutation restoration.

## QA Expectations

Sprint AN4 QA must verify:

- this regression guard exists;
- AN1, AN2, AN3, and Phase 92 artifacts exist;
- runtime files do not load Connector Reliability contracts, feature flags, fixtures, or harnesses;
- AN2 default and unsafe-attempt behavior remains no-execution;
- AN3 fixtures remain deterministic;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint AN5 - Connector Reliability Lane Closeout`

Sprint AN5 should close the Connector Reliability readiness lane, summarize AN1-AN4, and recommend the next safe inert lane without activating runtime behavior.
