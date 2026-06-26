# Nexus Sprint C18 - Source-Backed Agriculture Visual Semantics Review Plan

## Purpose

Sprint C18 defines the visual semantics review plan for a future source-backed agriculture card based on the C17 copy model.

This sprint is inert documentation and QA only. It does not render DOM, does not load C17 in `public/index.html`, does not import C17 in `public/app.js`, does not add CSS, does not add images or icons, does not add buttons or click handlers, and does not change backend behavior.

## Starting Checkpoint

- Previous pushed sprint: Sprint C17 - Source-Backed Agriculture Surface Copy Model
- Starting HEAD: `6943481663a5bf3caeb97ad05cb218dc2041984c`
- C17 module: `public/nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js`
- C17 contract: `docs/NEXUS_SPRINT_C17_SOURCE_BACKED_AGRICULTURE_SURFACE_COPY_MODEL.md`

## Visual Semantics Goals

A future visible source-backed agriculture card should communicate:

- review, not execution;
- evidence, not authority;
- source transparency, not certainty;
- local verification, not automatic action;
- calm guidance, not emergency or transaction urgency.

The card must not look like:

- a payment prompt;
- a marketplace checkout;
- a provider handoff;
- a medical diagnosis;
- a prescription/refill workflow;
- an emergency dispatch surface;
- a camera/location permission prompt;
- a completed action receipt.

## Visual Hierarchy Requirements

The future card should prioritize:

1. `Agriculture Source Review`;
2. `Evidence & Verification`;
3. source name, source type, contract ID, verification, freshness, and confidence;
4. source-supported claims;
5. Nexus inferences;
6. local applicability warning;
7. what Nexus is not claiming;
8. `No action has been taken.`

The no-action disclosure must be visible without visually dominating the source evidence.

## Color And Badge Semantics

Future styling must keep semantics clear:

- source-backed status may use a neutral or trustworthy accent;
- warnings must be restrained and not panic-inducing;
- disabled review-only controls must look disabled;
- no badge may imply provider connection, payment, purchase, diagnosis, prescription, dispatch, or completed execution;
- high-risk/excluded prompts must not render this card at all.

Avoid:

- bright emergency-red cards for low-risk agriculture prompts;
- success colors that imply an action was completed;
- badges such as `Sent`, `Paid`, `Scheduled`, `Connected`, `Dispatched`, `Diagnosed`, or `Purchased`;
- hidden debug metadata.

## Layout Semantics

Future layout must remain:

- compact;
- readable on mobile;
- scan-friendly;
- one card, not nested cards;
- no hero treatment;
- no auto-expanded dense evidence wall;
- no overlapping text;
- no hidden overflow for required safety disclosures;
- no fake clickable controls.

## Interaction Semantics

C18 does not approve any interaction.

Future visible review-only controls may be displayed only if:

- they are disabled or inert;
- they cannot navigate;
- they cannot open a route or modal;
- they cannot request permissions;
- they cannot call, message, pay, buy, sell, schedule, diagnose, prescribe, dispatch, share location, open camera, or write storage/backend state.

Allowed future labels remain:

- `Review source details`;
- `Not now`;
- `Close review`;
- `Learn what this source means`.

Forbidden labels remain:

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

## Eligible Visual Review Prompts

These prompts may be used for future visual review only after C17 reports `copyReady: true`:

- `Help me find agriculture training`;
- `Teach me how irrigation works`;
- `I need help with crop issues`;
- `What should I check in my farm soil?`.

Expected future visual semantics:

- source-backed evidence appears as review information;
- no-action disclosure is visible;
- disabled or inert review-only controls do not look executable;
- no provider, marketplace, payment, location, camera, medical, pharmacy, appointment, call, message, or emergency execution semantics appear.

## Unsupported And Excluded Visual Review Prompts

Unsupported safe prompt:

- `How do I prepare for drought?`.

Excluded/high-risk prompts:

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

Expected future visual semantics:

- no source-backed agriculture card;
- no disabled card that looks like a failed execution;
- no permission prompt;
- no provider handoff;
- no pending action;
- no route or modal auto-open.

## Accessibility Review Expectations

Future visual validation must check:

- text contrast;
- readable typography;
- no viewport-scaled font sizing;
- no overlapping fields;
- no clipped source contract ID;
- disabled/inert controls are not keyboard traps;
- screen-reader copy does not imply execution;
- mobile width remains readable;
- source and verification fields are text-visible.

## Standard User Boundary

C18 must not be wired into:

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

It must not add script tags, dynamic imports, DOM creation, CSS, images, icons, event handlers, click handlers, buttons, links, forms, route hooks, modal hooks, permission prompts, network calls, storage reads/writes, backend writes, provider handoff, pending actions, or execution behavior.

## Sprint C18 QA Expectations

The C18 QA guard verifies:

- this plan exists;
- C17 recommends this sprint;
- visual semantics goals and hierarchy are documented;
- allowed and forbidden labels are documented;
- eligible, unsupported, and excluded prompt matrices are documented;
- accessibility expectations are documented;
- Standard User runtime files do not load C18, C17, C15, C13, or C8;
- package alias and safe-suite wiring are present.

## Sprint C19 Recommendation

Sprint C19 should add a fixture-only static visual snapshot contract for the C17 copy model, outside Standard User runtime and without loading it from `public/index.html` or `public/app.js`.
