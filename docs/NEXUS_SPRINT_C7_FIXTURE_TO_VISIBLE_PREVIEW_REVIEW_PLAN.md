# Nexus Sprint C7 - Fixture-To-Visible Preview Review Plan

## Purpose

Sprint C7 defines how a future source-backed agriculture fixture packet could be reviewed before being passed into a visible Standard User agriculture preview surface.

This sprint is documentation and QA only. It does not add runtime mapping, does not render new UI, and does not change Standard User behavior.

## Starting Checkpoint

- Previous pushed sprint: Sprint C6 - Source-Backed Agriculture Packet Harness
- Starting HEAD: `921db3c25d6deebc5bb38d3eb900669dab7a310e`
- Current C6 harness: `public/nexus-sprint-c6-source-backed-agriculture-packet-harness.js`
- Current visible surface candidate: `public/nexus-agriculture-support-response-card.js`

## Readiness Decision

The safest next runtime activation lane remains source-backed agriculture support response cards with:

- verified public agriculture source contract;
- visible `Evidence & Verification`;
- no provider contact;
- no calls, messages, WhatsApp, Telegram, SMS, or email;
- no marketplace transaction;
- no payment;
- no location sharing;
- no camera or microphone activation;
- no medical, pharmacy, telehealth, or emergency execution;
- no backend writes;
- no storage writes;
- no pending action creation;
- no hidden staged action.

Sprint C7 does not activate this lane. It only defines the review gate that must be satisfied before a future wiring sprint can be considered.

## Fixture-To-Preview Mapping Contract

A future mapper may transform a C6 packet into a visible preview model only if all of these are true:

- `eligible` is `true`;
- `sourceBacked` is `true`;
- `sourceStatus` is `source-backed`;
- `evidenceTitle` is `Evidence & Verification`;
- source name is present;
- source type is present;
- source contract ID is present;
- verification status is `verified`;
- freshness label is present;
- confidence label is present;
- at least one source-supported claim is present;
- Nexus inferences are present;
- local applicability warning is present;
- claims Nexus is not making are present;
- no-action disclosure says `No action has been taken.`;
- every execution authority flag remains `false`.

If any field is missing, unsafe, stale, unverifiable, or execution-related, the mapper must return no visible preview and fall back to general guidance.

## Visible Preview Requirements

A future visible preview must show:

- `Evidence & Verification`;
- source-backed status;
- source name;
- source type;
- source contract ID;
- verification status;
- freshness label;
- confidence label;
- source-supported claims;
- Nexus inferences;
- local applicability warning;
- limitations;
- claims Nexus is not making;
- no-action disclosure;
- disabled or review-only controls only.

The preview must not include:

- active buttons that execute an action;
- provider handoff controls;
- contact/call/message controls;
- WhatsApp, Telegram, SMS, phone, or email controls;
- buy, sell, checkout, order, quote, or payment controls;
- location, map, GPS, camera, microphone, or upload controls;
- appointment, medical, pharmacy, telehealth, hospital, doctor, or emergency execution controls;
- hidden metadata that looks like an executable queue.

## Rejection And Fallback Rules

The mapper must reject:

- ineligible C6 packets;
- non-source-backed packets;
- unverified source packets;
- missing source contract ID;
- missing freshness or confidence;
- forbidden claims;
- chemical dose, pesticide application, diagnosis, emergency, marketplace, provider contact, payment, location, camera, medical, pharmacy, telehealth, or scheduling prompts;
- any packet where an execution authority flag is not exactly `false`.

Rejected packets may only use the existing general guidance surface. They must not create a source-backed visible card.

## Standard User Runtime Boundary

Sprint C7 does not load or invoke any new mapper in:

- `public/index.html`;
- `public/app.js`;
- `server.js`;
- Standard User startup;
- agriculture response-card runtime;
- planner, policy, provider, native bridge, confirmation, marketplace, health, map, camera, location, call, message, payment, or emergency flows.

## Future Browser Validation Gate

Before any future runtime-visible source-backed packet mapping is enabled, browser validation must confirm:

- safe low-risk prompts render a visible source-backed review card only when a verified fixture/source packet is available;
- excluded prompts render no source-backed card;
- no provider/call/message/payment/marketplace/location/camera/medical/pharmacy/emergency action executes;
- hidden mount points remain safe;
- console has no new warnings/errors;
- `db.json` and runtime mutations are restored before commit;
- `nexus-workforce` and `all-safe` pass.

## Sprint C8 Recommendation

Sprint C8 should add an inert mapper contract module and deterministic QA that converts C6 packets into visible-preview metadata only. It must remain unloaded by Standard User runtime until a later browser validation sprint explicitly approves runtime wiring.
