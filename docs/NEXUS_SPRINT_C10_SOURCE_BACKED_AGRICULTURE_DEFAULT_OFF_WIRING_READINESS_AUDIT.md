# Nexus Sprint C10 - Source-Backed Agriculture Default-Off Wiring Readiness Audit

## Purpose

Sprint C10 audits whether the C8 source-backed agriculture visible-preview mapper can be wired in a future sprint without changing Standard User behavior while disabled.

This sprint is inert documentation and QA only. It does not load the C8 mapper in Standard User runtime, does not add a feature flag to runtime code, does not render source-backed preview UI, and does not change backend behavior.

## Starting Checkpoint

- Previous pushed sprint: Sprint C9 - Source-Backed Agriculture Runtime Mapping Browser Validation Plan
- Starting HEAD: `f70c30a726e30b90f4deab8d39d9f775533d38ac`
- C8 mapper: `public/nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js`
- C9 browser validation plan: `docs/NEXUS_SPRINT_C9_SOURCE_BACKED_AGRICULTURE_RUNTIME_MAPPING_BROWSER_VALIDATION_PLAN.md`

## Current Runtime Boundary

The C8 mapper must remain separate from active runtime until a future sprint explicitly implements default-off wiring.

For Sprint C10, these files must not load the C8 mapper:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

The mapper may remain available as a static repository artifact and may be loaded only by deterministic QA or fixture harnesses.

## Candidate Future Insertion Points Reviewed

A future runtime sprint may review these insertion points, but Sprint C10 does not modify them:

- `public/index.html` script order after `nexus-agriculture-support-response-card.js`;
- `public/app.js` source-backed agriculture response-card preparation;
- `public/app.js` controlled low-risk renderer hidden mount preflight checks;
- `public/app.js` Ask Nexus / global assistant preview rendering;
- `public/nexus-agriculture-support-response-card.js` visible agriculture card renderer;
- existing hidden mount point `nexus-controlled-low-risk-renderer-root`.

No future implementation should bypass the existing agriculture response-card runtime, controlled-action preview boundaries, confirmation contracts, provider handoff boundaries, or no-execution guarantees.

## Required Future Feature Flag Contract

Before runtime wiring is allowed, a future sprint must define an explicit boolean feature flag, such as:

- `enableSourceBackedAgricultureRuntimeMapping`

The flag contract must require:

- default value is `false`;
- no localStorage override unless separately approved;
- no URL query override unless separately approved;
- no server-provided override unless separately approved;
- disabled state loads no mapper;
- disabled state renders no source-backed preview card from C6/C8 fixtures;
- disabled state creates no DOM, route, modal, pending action, provider handoff, network lookup, storage write, or backend write;
- enabled state still remains preview-only and non-executing.

## Flag-Off Standard User Expectations

When the future flag is off, Standard User behavior must remain identical to current runtime:

- no visible source-backed agriculture preview from the C8 mapper;
- no C8 mapper script tag;
- no C8 dynamic import;
- no C8 helper references in `public/app.js`;
- no C8 helper references in `server.js`;
- no source-backed agriculture packet fixture generated in runtime;
- no hidden executable metadata;
- no permission prompt;
- no route auto-open;
- no modal auto-open;
- no provider handoff;
- no marketplace transaction;
- no payment;
- no location, camera, microphone, upload, or media capture;
- no medical, pharmacy, telehealth, appointment, or emergency execution.

## Future Enabled-State Minimum Safety Requirements

If a later sprint enables runtime mapping behind an approved flag, the enabled state must still require:

- C6 packet eligibility;
- C8 mapper eligibility;
- source-backed status;
- visible evidence and verification fields;
- no-action disclosure: `No action has been taken.`;
- disabled or review-only controls;
- explicit exclusion of high-risk prompts;
- all execution authority flags exactly `false`;
- browser validation from the C9 plan before commit.

## Excluded Prompt Boundary

Future runtime mapping must not render source-backed agriculture previews for:

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

## Browser Validation Requirement

Any future runtime-visible wiring sprint must complete the Sprint C9 browser validation plan. The validation must use the normal Standard User path, document console/network/storage observations, and restore any runtime mutations before commit.

## Sprint C10 QA Expectations

Sprint C10 QA must prove:

- this audit document exists;
- C8 mapper exists and remains syntax-valid;
- C9 browser validation plan remains present;
- `public/index.html`, `public/app.js`, and `server.js` do not load C8;
- runtime files do not contain the future flag name;
- runtime files do not contain C10 audit-only fragments;
- default-off and no-execution requirements are documented;
- candidate insertion points are documented;
- excluded prompt boundaries are documented;
- package alias and safe-suite wiring exist.

## Sprint C11 Recommendation

Sprint C11 should create a default-off runtime wiring design contract for the exact flag shape and fallback behavior. It should remain inert unless the implementation can prove that the flag-off path makes no runtime-visible changes.
