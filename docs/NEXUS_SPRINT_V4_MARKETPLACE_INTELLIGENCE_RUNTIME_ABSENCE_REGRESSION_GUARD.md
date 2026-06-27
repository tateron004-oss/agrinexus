# Nexus Sprint V4 - Marketplace Intelligence Runtime Absence Regression Guard

Current base: `fa87449589b4a1b86632bb63ed9e966715c13415`

Sprint V4 adds a deterministic regression guard proving the Marketplace Intelligence readiness artifacts remain absent from Standard User runtime. This phase is documentation and QA only. It does not add runtime imports, script tags, UI, marketplace advisor execution, source retrieval runtime, buy execution, sell execution, order creation, checkout execution, payment execution, marketplace transaction completion, inventory reservation, price guarantees, availability guarantees, buyer or seller contact, shipping or transportation dispatch, location sharing, communications execution, storage writes, backend writes, provider execution, or action authority.

## Purpose

Prevent accidental drift where Marketplace Intelligence readiness artifacts become runtime activation.

Sprint V4 protects:

- V1 Marketplace Intelligence runtime activation readiness gate;
- V2 Marketplace Intelligence feature flag contract;
- V3 Marketplace Intelligence flag contract harness;
- Phase 74 Marketplace Intelligence readiness contract.

## Runtime Absence Requirements

The following artifacts must not be loaded by `public/index.html`, `public/app.js`, or `server.js`:

- `public/nexus-marketplace-intelligence-readiness-contract.js`;
- `public/nexus-marketplace-intelligence-feature-flag.js`;
- `scripts/nexus-sprint-v3-marketplace-intelligence-flag-contract-harness.js`;
- `fixtures/nexus/marketplace-intelligence-feature-flags.json`;
- Sprint V QA scripts.

The guard checks exact Marketplace Intelligence artifact names and helpers. It intentionally does not ban generic marketplace words such as `marketplace`, `AgriTrade`, `trade`, `crop`, `sell`, `buyer`, `seller`, `price`, `listing`, `browse`, or `support`, because existing marketplace, AgriTrade, agriculture, and Standard User guidance behavior has separate runtime boundaries that must remain supported.

## Blocked Runtime Behavior

Sprint V artifacts must not introduce:

- active marketplace intelligence runtime;
- live marketplace advisor;
- source retrieval runtime;
- buy execution;
- sell execution;
- order creation;
- checkout execution;
- payment execution;
- marketplace transaction completion;
- inventory reservation;
- price guarantee claims;
- availability guarantee claims;
- buyer or seller contact;
- provider connection claims;
- completed action claims;
- standard user marketplace brain mutation;
- source-backed marketplace claims without sources;
- stale data claims without freshness labels;
- confidence-free source-backed claims;
- unsupported live data claims;
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
- native bridge dispatch;
- calls;
- messages;
- WhatsApp, Telegram, SMS, or email sending;
- shipping or transportation dispatch;
- emergency dispatch;
- location sharing;
- account or profile mutation;
- external navigation;
- real pending action creation;
- execution authority.

## Required Contract Invariants

The guard confirms the V2 feature flag contract still preserves:

- `enabled: false` by default;
- `visibleUiAllowed: false` by default;
- `marketplaceReviewAllowed: false`;
- `sourceBackedMarketplaceGuidancePreviewAllowed: false`;
- `listingSummaryPreviewAllowed: false`;
- `priceAvailabilitySummaryPreviewAllowed: false`;
- `counterpartyEscalationPreviewAllowed: false`;
- `marketplaceRuntimeAllowed: false`;
- `liveMarketplaceAdvisorAllowed: false`;
- `sourceRetrievalRuntimeAllowed: false`;
- `buyExecutionAllowed: false`;
- `sellExecutionAllowed: false`;
- `orderCreationAllowed: false`;
- `checkoutExecutionAllowed: false`;
- `paymentExecutionAllowed: false`;
- `marketplaceTransactionAllowed: false`;
- `inventoryReservationAllowed: false`;
- `priceGuaranteeClaimAllowed: false`;
- `availabilityGuaranteeClaimAllowed: false`;
- `buyerSellerContactAllowed: false`;
- `providerConnectionClaimAllowed: false`;
- `completedActionClaimAllowed: false`;
- `shippingTransportationDispatchAllowed: false`;
- `communicationExecutionAllowed: false`;
- `locationSharingAllowed: false`;
- `identityAccountProfileActionAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `laterTurnExecutionAllowed: false`;
- `standardUserMarketplaceBrainMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

The guard confirms the V3 fixture harness still proves unsafe authority attempts normalize back to no-execution values.

## Standard User Safety Posture

In the current Standard User build:

- no Marketplace Intelligence runtime is active;
- no Marketplace Intelligence review surface appears from Sprint V artifacts;
- no live marketplace advisor is loaded by Sprint V artifacts;
- no marketplace source retrieval runtime is performed by Sprint V artifacts;
- no typed or voice route is changed by Sprint V artifacts;
- no buy, sell, order, checkout, payment, inventory reservation, price guarantee, availability guarantee, buyer contact, seller contact, provider contact, shipping dispatch, transportation dispatch, location sharing, communication, or account/profile mutation is possible from Sprint V artifacts;
- no policy, confirmation, or permission bypass is possible from Sprint V artifacts;
- no audit event is written by Sprint V artifacts;
- existing AgriTrade marketplace browsing, agriculture, workforce, health access, telehealth camera handoff, call confirmation, map permission, and marketplace behavior remains separate from Marketplace Intelligence runtime authority.

## Browser Validation Implication

Sprint V4 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that imports Marketplace Intelligence artifacts, renders Marketplace Intelligence UI, activates a live marketplace advisor, changes typed routing, changes voice routing, changes marketplace behavior, writes audit events, changes permission prompts, or changes Standard User visible behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- AgriTrade prompt checks;
- marketplace prompt checks;
- buy/sell/payment boundary checks;
- buyer/seller contact boundary checks;
- order/checkout boundary checks;
- inventory/price/availability claim checks;
- shipping and transportation boundary checks;
- console warning/error checks;
- runtime mutation restoration.

## QA Expectations

Sprint V4 QA must verify:

- this regression guard exists;
- V1, V2, V3, and Phase 74 artifacts exist;
- runtime files do not load Marketplace Intelligence contracts, feature flags, fixtures, or harnesses;
- V2 default and unsafe-attempt behavior remains no-execution;
- V3 fixtures remain deterministic;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint V5 - Marketplace Intelligence Lane Closeout`

Sprint V5 should close the Marketplace Intelligence readiness lane, summarize V1-V4, and recommend the next safe inert lane without activating runtime behavior.
