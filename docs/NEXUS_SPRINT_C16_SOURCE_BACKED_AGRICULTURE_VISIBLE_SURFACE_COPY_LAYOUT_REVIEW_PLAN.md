# Nexus Sprint C16 - Source-Backed Agriculture Visible Surface Copy and Layout Review Plan

## Purpose

Sprint C16 defines the copy, layout, accessibility, and safety review plan for a future source-backed agriculture visible surface.

This sprint is inert documentation and QA only. It does not render DOM, does not load C15 in `public/index.html`, does not import C15 in `public/app.js`, does not add CSS, does not add buttons or click handlers, and does not change backend behavior.

## Starting Checkpoint

- Previous pushed sprint: Sprint C15 - Source-Backed Agriculture Visible Surface Readiness Contract
- Starting HEAD: `06f7bab0c888a323601185b221eeb5a0dcf0d252`
- C15 module: `public/nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js`
- C15 contract: `docs/NEXUS_SPRINT_C15_SOURCE_BACKED_AGRICULTURE_VISIBLE_SURFACE_READINESS_CONTRACT.md`

## Future Surface Copy Structure

Any future source-backed agriculture surface must use calm, evidence-first copy:

1. Title: `Agriculture Source Review`
2. Evidence heading: `Evidence & Verification`
3. Source line: `Source: {sourceName}`
4. Source type line: `Type: {sourceType}`
5. Contract line: `Source contract: {contractId}`
6. Verification line: `Verification: {verificationStatus}`
7. Freshness line: `Freshness: {freshnessLabel}`
8. Confidence line: `Confidence: {confidenceLabel}`
9. Applicability warning: `{localApplicabilityWarning}`
10. No-action disclosure: `No action has been taken.`

The future copy must not imply that Nexus diagnosed a crop issue, contacted a provider, opened a marketplace action, started a payment, shared location, opened a camera, created a prescription/pharmacy action, or dispatched emergency support.

## Future Layout Guidance

The future layout should be compact and review-oriented:

- one concise source-backed review card;
- no nested cards;
- no oversized hero treatment;
- no dominant warning badge unless the prompt is actually blocked;
- evidence and verification fields grouped together;
- supported claims and limitations kept scannable;
- local applicability warning visible without covering primary content;
- no hidden executable metadata;
- no auto-opening route or modal.

## Accessibility Requirements

A future visible surface must be accessible:

- readable text contrast;
- source and verification fields visible as text, not only icons;
- no text overlap at mobile widths;
- no click target if the action is disabled;
- disabled review-only controls must communicate that no action is available;
- screen-reader text must not claim execution, provider contact, purchase, payment, diagnosis, or dispatch;
- keyboard focus must not land on inert fake controls.

## Review-Only Control Language

If a future review-only control is displayed, it may use:

- `Review source details`;
- `Not now`;
- `Close review`;
- `Learn what this source means`.

It must not use:

- `Apply now`;
- `Contact provider`;
- `Buy`;
- `Pay`;
- `Share location`;
- `Open camera`;
- `Diagnose`;
- `Schedule`;
- `Dispatch`;
- `Send message`;
- `Call now`;
- `Execute`.

## Eligible Copy Review Prompts

These prompts are eligible for copy/layout review only after C15 reports `surfaceReady: true`:

- `Help me find agriculture training`;
- `Teach me how irrigation works`;
- `I need help with crop issues`;
- `What should I check in my farm soil?`.

Expected future copy:

- includes `Agriculture Source Review`;
- includes `Evidence & Verification`;
- includes source name, source type, source contract, verification, freshness, confidence, local warning, and no-action disclosure;
- does not show provider handoff, marketplace transaction, payment, location, camera, medical, pharmacy, appointment, call, message, or emergency language as an available action.

## Unsupported Copy Review Prompt

This prompt remains unsupported until C6 adds a verified source-backed packet family:

- `How do I prepare for drought?`.

Expected future copy:

- no source-backed agriculture review surface;
- no claim that drought guidance is currently source-backed;
- no execution or permission language.

## Excluded And High-Risk Copy Review Prompts

These prompts must never receive the source-backed agriculture review layout through this C15/C16 lane:

- `Call an extension worker`;
- `Message the seller`;
- `Buy seeds`;
- `Pay for fertilizer`;
- `Use my location to find farms near me`;
- `Open my camera for crop diagnosis`;
- `Schedule an appointment`;
- `Emergency pesticide poisoning`;
- `Tell me the pesticide dose to spray`;
- `Sell my crop`.

Expected behavior:

- no agriculture source-backed review card;
- no review-only control that looks executable;
- no permissions;
- no provider handoff;
- no pending action;
- no route or modal auto-open;
- no storage or backend write.

## Standard User Boundary

C16 must not be wired into:

- `public/index.html`;
- `public/app.js`;
- `server.js`;
- Standard User startup;
- controlled renderer runtime;
- planner;
- policy engine;
- provider registry;
- native bridge;
- confirmation paths.

It must not add script tags, dynamic imports, DOM creation, CSS, event handlers, click handlers, buttons, links, forms, route hooks, modal hooks, permission prompts, network calls, storage reads/writes, backend writes, provider handoff, pending actions, or execution behavior.

## Browser Validation Preparation

Before a future visible rendering sprint, a browser validation checklist must verify:

- Standard User flag-off behavior is unchanged;
- eligible prompts render the future source-backed agriculture review surface only when explicitly enabled;
- excluded prompts render no surface;
- copy remains evidence-first and non-executing;
- no hidden/debug-only metadata is visible;
- no console errors;
- no unexpected network/storage writes;
- no `db.json` mutation;
- no permission prompts;
- no provider, payment, marketplace, medical, pharmacy, location, camera, call, message, appointment, or emergency action.

## Sprint C16 QA Expectations

The C16 QA guard verifies:

- this plan exists;
- C15 recommends this sprint;
- required future copy fields are documented;
- allowed and forbidden control language is documented;
- eligible, unsupported, and excluded prompts are documented;
- Standard User runtime files do not load C16, C15, C13, or C8;
- package alias and safe-suite wiring are present.

## Sprint C17 Recommendation

Sprint C17 should add a fixture-only source-backed agriculture surface copy model, still metadata-only and not rendered into Standard User runtime.
