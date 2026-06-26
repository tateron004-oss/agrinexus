# Nexus Sprint C8 - Source-Backed Agriculture Visible Preview Mapper

## Purpose

Sprint C8 adds an inert mapper contract module that converts a safe C6 fixture packet into visible-preview metadata only. It does not render DOM, does not add UI, and does not wire into Standard User runtime.

## Starting Checkpoint

- Previous pushed sprint: Sprint C7 - Fixture-To-Visible Preview Review Plan
- Starting HEAD: `fd103080e983a38937084c85fde6f1209df7839b`
- C6 fixture packet harness: `public/nexus-sprint-c6-source-backed-agriculture-packet-harness.js`
- C8 mapper: `public/nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js`

## Mapper Contract

The mapper may mark a packet `visiblePreviewAllowed: true` only when:

- `eligible` is `true`;
- `sourceBacked` is `true`;
- `sourceStatus` is `source-backed`;
- `evidenceTitle` is `Evidence & Verification`;
- source name, type, and contract ID are present;
- verification status is `verified`;
- freshness and confidence labels are present;
- source-supported claims are present;
- Nexus inferences are present;
- local applicability warning is present;
- claims Nexus is not making are present;
- no-action disclosure is `No action has been taken.`;
- every execution authority flag is exactly `false`.

If any requirement fails, the mapper returns `visiblePreviewAllowed: false` and no source-backed visible preview may be shown.

## Metadata-Only Boundary

Sprint C8 mapper output is metadata only:

- `renderDomAllowed: false`;
- no DOM rendering;
- no click handlers;
- no route opening;
- no modal opening;
- no provider handoff;
- no calls, messages, WhatsApp, Telegram, SMS, or email;
- no marketplace transaction;
- no payment;
- no location, camera, microphone, upload, or media capture;
- no medical, pharmacy, telehealth, appointment, or emergency execution;
- no backend write;
- no storage write;
- no network lookup;
- no pending action.

## Standard User Boundary

Sprint C8 must not load or invoke the mapper in:

- `public/index.html`;
- `public/app.js`;
- `server.js`;
- Standard User startup;
- agriculture response-card runtime;
- planner, policy, provider, native bridge, confirmation, marketplace, health, map, camera, location, call, message, payment, or emergency flows.

## QA Expectations

Sprint C8 QA must prove:

- C8 mapper exists and is syntax-valid;
- safe C6 packets map to metadata-only visible-preview models;
- rejected or tampered packets do not map;
- all authority flags remain false;
- no side-effect APIs are introduced;
- active runtime files do not load the mapper;
- package alias and safe-suite wiring exist;
- C6 packet harness and C7 review plan remain intact.

## Browser Validation

Browser validation is not required for Sprint C8 because the mapper is not loaded by Standard User runtime and does not change visible behavior.

## Sprint C9 Recommendation

Sprint C9 should add a browser-validation plan for any future runtime-visible mapping sprint, including Standard User flag state, visible source-backed card expectations, excluded prompt checks, console checks, and runtime mutation restoration rules.
