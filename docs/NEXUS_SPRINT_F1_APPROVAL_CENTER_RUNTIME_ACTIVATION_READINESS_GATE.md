# Nexus Sprint F1 - Approval Center Runtime Activation Readiness Gate

Current base: `0cd4d6ca342cb1ed64dfdf674d4adc72902fd76c`

Sprint F1 defines the readiness gate required before any Approval Center can become visible, runtime-loaded, persistent, or authoritative. This phase is documentation and deterministic QA only. It does not add an approval UI, runtime approval route, approval button, confirmation handler, storage write, backend write, provider handoff, network call, or execution behavior.

## Continuity Context

Sprint F1 follows:

- Phase 49 Approval Center contract;
- Sprint D controlled staged-action preview lane;
- Sprint E staged action approval/audit lane.

The existing Phase 49 Approval Center contract remains the source-ready product contract for future approval review. Sprint F1 adds the activation gate around that contract so future runtime work cannot treat contract readiness as product approval.

## Gate Decision

Approval Center runtime activation is currently **blocked**.

The Approval Center may not be visible, runtime-loaded, persistent, or authoritative until a future approved sprint satisfies every readiness condition in this document.

## Required Activation Preconditions

Before Approval Center runtime activation, Nexus must have:

1. explicit product approval for the exact runtime surface;
2. explicit safety approval for the exact action categories;
3. Standard User browser validation plan;
4. Standard User browser validation evidence;
5. rollback plan;
6. feature flag plan with default-off behavior;
7. runtime import boundary review;
8. visible copy review;
9. accessibility review;
10. audit persistence design;
11. audit retention and redaction design;
12. approval record persistence design;
13. pending action source policy;
14. role and identity policy;
15. consent policy;
16. confirmation language policy;
17. vague-confirmation block policy;
18. cancellation policy;
19. provider handoff policy;
20. backend write policy;
21. no-execution regression QA;
22. emergency/medical/pharmacy/payment/marketplace/location/camera restriction QA.

## Runtime Activation Must Remain Separate From Execution

Even after a future Approval Center becomes visible, approval review is not execution.

The future visible Approval Center must preserve:

- approval readiness is not execution readiness;
- approval record is not an execution record;
- approval audit event is not an execution event;
- no action has been taken until a separate approved execution lane exists;
- accepted approvals remain review outcomes unless a later execution gate is approved;
- `executionAuthority: false` remains the default;
- `providerHandoffAllowed: false` remains the default;
- `backendWriteAllowed: false` remains the default until persistence is explicitly approved;
- `networkAllowed: false` remains the default until source or audit network boundaries are explicitly approved.

## Allowed Future Approval Center Responsibilities

A future approved Approval Center may eventually:

- display staged action summaries;
- display risk tiers;
- display source/evidence requirements;
- display limitations;
- display required approval language;
- display cancellation options;
- record an inert review outcome where persistence has been separately approved;
- route the user back to a safe app section after cancellation or review.

These responsibilities remain blocked in Sprint F1.

## Disallowed Future Shortcuts

No future Approval Center sprint may bypass:

- explicit user approval;
- role policy;
- consent policy;
- audit policy;
- cancellation path;
- source/evidence requirements;
- high-risk restrictions;
- provider availability checks;
- browser validation;
- rollback planning.

No future Approval Center sprint may introduce:

- silent approval;
- vague approval such as "okay" for high-risk actions;
- auto-execution after approval;
- hidden provider handoff;
- silent call or message;
- payment execution;
- medical, pharmacy, prescription, or FHIR execution;
- emergency dispatch;
- camera, microphone, image capture, or image diagnosis;
- location sharing;
- marketplace transaction;
- account or identity mutation.

## Standard User Runtime Boundary

In the current Standard User build:

- no Approval Center UI should appear from Sprint F1;
- no Approval Center module should be imported by `public/index.html`, `public/app.js`, or `server.js`;
- no Approval Center state should be persisted;
- no Approval Center button should appear;
- no approval audit event should be written;
- no provider, call, message, payment, marketplace, health, pharmacy, emergency, camera, location, account, or identity action should execute.

## Admin/Full Runtime Boundary

Admin/full mode does not bypass this gate. Any future Admin approval workflow still requires:

- explicit role policy;
- explicit approval;
- audit logging;
- high-risk restriction checks;
- provider confirmation where relevant;
- cancellation path;
- no silent execution.

## Browser Validation Requirements

Any future runtime-visible Approval Center work must validate:

- Standard User path starts normally;
- Approval Center remains hidden when disabled;
- feature flag defaults off;
- enabled state shows only approved review surfaces;
- high-risk actions remain blocked or confirmation-gated;
- no provider handoff occurs automatically;
- no permissions fire automatically;
- no storage or backend mutation occurs outside the approved design;
- no hidden/debug metadata becomes visible;
- console warnings/errors are documented;
- `db.json` or runtime mutations are restored before commit.

## Rollback Requirements

Any future Approval Center runtime activation must include:

- exact files changed;
- exact feature flag;
- one-command rollback or revert plan;
- QA rerun plan;
- browser validation rerun plan;
- owner decision log;
- go/no-go record;
- post-rollback verification.

## QA Requirements

Sprint F1 QA must verify:

- this readiness gate exists;
- Phase 49 Approval Center contract remains present;
- Sprint E approval/audit artifacts remain present;
- runtime activation remains blocked;
- no execution language is present;
- required activation preconditions are enumerated;
- Standard User runtime remains unwired to Approval Center activation;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint F2 - Approval Center Feature Flag Contract`

Sprint F2 should define a default-off, no-op feature flag contract only. It should not render UI, persist approval state, write audit events, import modules into Standard User runtime, or create execution authority.
