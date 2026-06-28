# Nexus Sprint AF4 - AgriTrade Marketplace Mode Runtime Absence Regression Guard

Current base: `0c87753b63a67927ab85e89a42ec1302efc3e2fb`

Sprint AF4 adds a deterministic regression guard proving the AgriTrade Marketplace Mode readiness artifacts remain absent from Standard User runtime. This phase is documentation and QA only. It does not add runtime imports, script tags, UI, AgriTrade Marketplace Mode review surfaces, marketplace listing previews, price previews, inventory previews, buyer directory previews, seller directory previews, quote readiness previews, order readiness previews, payment boundary previews, escrow boundary previews, logistics boundary previews, identity boundary previews, communications boundary previews, transportation boundary previews, emergency boundary previews, live marketplace connector runtime, buyer connector runtime, seller connector runtime, listing connector runtime, quote connector runtime, order connector runtime, inventory connector runtime, payment connector runtime, escrow connector runtime, logistics connector runtime, identity connector runtime, communications connector runtime, transportation connector runtime, health connector runtime, buy execution, sell execution, order creation, quote acceptance, listing publication, buyer contact, seller contact, marketplace partner contact, payment execution, escrow execution, shipment dispatch, location sharing, camera activation, microphone activation, marketplace transactions, communications execution, transportation dispatch, emergency dispatch, medical records/FHIR runtime, medical advice, diagnosis claims, prescription instructions, storage writes, backend writes, provider execution, or action authority.

## Purpose

Prevent accidental drift where AgriTrade Marketplace Mode readiness artifacts become runtime activation.

Sprint AF4 protects:

- AF1 AgriTrade Marketplace Mode runtime activation readiness gate;
- AF2 AgriTrade Marketplace Mode feature flag contract;
- AF3 AgriTrade Marketplace Mode flag contract harness;
- Phase 84 AgriTrade Marketplace Mode readiness contract.

## Runtime Absence Requirements

The following artifacts must not be loaded by `public/index.html`, `public/app.js`, or `server.js`:

- `public/nexus-agritrade-marketplace-mode-readiness-contract.js`;
- `public/nexus-agritrade-marketplace-mode-feature-flag.js`;
- `scripts/nexus-sprint-af3-agritrade-marketplace-mode-flag-contract-harness.js`;
- `fixtures/nexus/agritrade-marketplace-mode-feature-flags.json`;
- Sprint AF QA scripts.

The guard checks exact AgriTrade Marketplace Mode artifact names and helpers. It intentionally does not ban generic health, telehealth, clinic, provider, training, jobs, education, certification, enrollment, learning, support, marketplace, agriculture, crop, farmer, trade, or AgriTrade words, because existing Standard User behavior has separate runtime boundaries that must remain supported.

## Blocked Runtime Behavior

Sprint AF artifacts must not introduce:

- active AgriTrade Marketplace Mode runtime;
- live AgriTrade Marketplace Mode runtime;
- marketplace connector runtime;
- buyer connector runtime;
- seller connector runtime;
- listing connector runtime;
- quote connector runtime;
- order connector runtime;
- inventory connector runtime;
- payment connector runtime;
- escrow connector runtime;
- logistics connector runtime;
- identity connector runtime;
- communications connector runtime;
- transportation connector runtime;
- health connector runtime;
- buy execution;
- sell execution;
- order creation;
- quote acceptance;
- listing publication;
- buyer contact;
- seller contact;
- marketplace partner contact;
- payment execution;
- escrow execution;
- shipment dispatch;
- location sharing;
- camera activation;
- microphone activation;
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
- buyer connection claims;
- seller connection claims;
- marketplace partner connection claims;
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
- buyer handoff;
- seller handoff;
- marketplace partner handoff;
- payment partner handoff;
- logistics partner handoff;
- provider handoff;
- native bridge dispatch;
- calls;
- messages;
- WhatsApp, Telegram, SMS, or email sending;
- external navigation;
- real pending action creation;
- execution authority.

## Required Contract Invariants

The guard confirms the AF2 feature flag contract still preserves:

- `enabled: false` by default;
- `visibleUiAllowed: false` by default;
- every protected AgriTrade Marketplace Mode authority field as `false`;
- `noExecution: true`.

The guard confirms the AF3 fixture harness still proves unsafe authority attempts normalize back to no-execution values.

## Standard User Safety Posture

In the current Standard User build:

- no AgriTrade Marketplace Mode runtime is active;
- no AgriTrade Marketplace Mode review surface appears from Sprint AF artifacts;
- no live marketplace, buyer, seller, listing, quote, order, inventory, payment, escrow, logistics, identity, communications, transportation, health, emergency, or FHIR connector runtime is loaded by Sprint AF artifacts;
- no typed or voice route is changed by Sprint AF artifacts;
- no buy execution, sell execution, order creation, quote acceptance, listing publication, buyer contact, seller contact, marketplace partner contact, payment execution, escrow execution, shipment dispatch, location sharing, camera activation, microphone activation, marketplace transaction, communications execution, transportation dispatch, emergency dispatch, medical advice, diagnosis claim, prescription instruction, or account/profile mutation is possible from Sprint AF artifacts;
- no policy, confirmation, or permission bypass is possible from Sprint AF artifacts;
- no audit event is written by Sprint AF artifacts;
- existing health access, telehealth camera handoff, call confirmation, map permission, learning, workforce, agriculture, AgriTrade browsing, and Standard User behavior remains separate from AgriTrade Marketplace Mode runtime authority.

## Browser Validation Implication

Sprint AF4 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that imports AgriTrade Marketplace Mode artifacts, renders AgriTrade Marketplace Mode UI, activates live connectors, changes typed routing, changes voice routing, changes buyer/seller/partner/location/camera/microphone/payment/emergency behavior, writes audit events, changes permission prompts, or changes Standard User visible behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- low-risk Standard User prompt checks;
- AgriTrade Marketplace Mode boundary checks;
- health/telehealth/learning/provider/location/camera/microphone/payment/marketplace/emergency boundary checks;
- console warning/error checks;
- runtime mutation restoration.

## QA Expectations

Sprint AF4 QA must verify:

- this regression guard exists;
- AF1, AF2, AF3, and Phase 84 artifacts exist;
- runtime files do not load AgriTrade Marketplace Mode contracts, feature flags, fixtures, or harnesses;
- AF2 default and unsafe-attempt behavior remains no-execution;
- AF3 fixtures remain deterministic;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint AF5 - AgriTrade Marketplace Mode Lane Closeout`

Sprint AF5 should close the AgriTrade Marketplace Mode readiness lane, summarize AF1-AF4, and recommend the next safe inert lane without activating runtime behavior.
