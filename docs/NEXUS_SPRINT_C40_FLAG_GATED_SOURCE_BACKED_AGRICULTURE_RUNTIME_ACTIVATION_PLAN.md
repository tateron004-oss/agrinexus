# Nexus Sprint C40 - Flag-Gated Source-Backed Agriculture Runtime Activation Plan

## Purpose

Sprint C40 defines the implementation plan for the first controlled runtime-visible agriculture preview lane. This sprint is planning and deterministic QA only. It does not activate runtime behavior and does not modify Standard User visible behavior.

## Current Checkpoint

- Current HEAD: `8673f09aa22651dc5cf2fb44d612fce208198729`
- Previous sprint: Sprint C39 - Product Owner Approval for Controlled Agriculture Runtime Activation
- Approval record: `docs/NEXUS_SPRINT_C39_PRODUCT_OWNER_APPROVAL_FOR_CONTROLLED_AGRICULTURE_RUNTIME_ACTIVATION.md`

## C39 Approval Posture

Ron/product ownership approved moving beyond the Sprint C38 readiness boundary only for controlled, flag-gated, review-only, source-backed agriculture preview behavior.

The approval does not authorize autonomous execution, provider handoff, calls, messages, payments, location, camera, marketplace transactions, medical/pharmacy/emergency workflows, backend writes, pending agent actions, live lookup, network behavior, storage side effects, or external navigation.

## Required Feature Flag

The required feature flag is:

- `NEXUS_SOURCE_BACKED_AGRICULTURE_PREVIEW_ENABLED`

The flag must default to false / disabled.

The flag must not be enabled implicitly by Standard User startup, profile selection, voice shell startup, route changes, query text, browser storage, server config, or hidden metadata.

## Flag-Off Expected Behavior

When `NEXUS_SOURCE_BACKED_AGRICULTURE_PREVIEW_ENABLED` is false:

- Standard User visible behavior remains unchanged;
- no source-backed agriculture preview card is rendered;
- no Evidence & Verification block is rendered;
- no source packet is consumed by runtime UI;
- no new buttons, links, forms, event handlers, fetch calls, storage writes, backend calls, pending actions, or navigation are introduced;
- existing low-risk agriculture prompts continue through the current safe paths;
- excluded/high-risk prompts remain blocked, permission-gated, confirmation-gated, or safely clarified by existing behavior.

## Flag-On Expected Behavior

When a future implementation explicitly enables `NEXUS_SOURCE_BACKED_AGRICULTURE_PREVIEW_ENABLED` in an approved test or runtime context:

- eligible low-risk agriculture prompts may render a controlled source-backed preview card;
- the card must be review-only;
- Evidence & Verification must be visible;
- source title, source owner, source date/freshness, confidence, and verification status must be visible or represented;
- copy must avoid claiming diagnosis, guaranteed yield, live expert advice, marketplace execution, provider contact, or completed action;
- there must be no execution controls;
- there must be no provider handoff;
- there must be no live lookup;
- there must be no network behavior;
- there must be no backend writes;
- there must be no pending agent actions;
- there must be no persistent storage side effects;
- there must be no external navigation;
- there must be no calls, messages, payments, location sharing, camera use, medical/pharmacy/telehealth/emergency workflow, or marketplace transaction.

## Eligible Low-Risk Agriculture Prompt Families

The first flag-on lane may include only low-risk agriculture education/support prompts such as:

- agriculture training guidance;
- irrigation education;
- general crop issue support;
- soil or water education;
- pest awareness education without diagnosis claims;
- field support education;
- agriculture source explanation;
- AgriTrade education or marketplace overview without buy/sell execution;
- workforce/agriculture learning bridge prompts.

Eligible prompts must remain source-backed, review-only, and non-executing.

## Excluded and High-Risk Prompt Families

The first flag-on lane must exclude:

- image diagnosis;
- camera-based crop analysis;
- precise location sharing;
- map/geolocation lookup;
- provider contact;
- calls;
- messages;
- WhatsApp, Telegram, SMS, email, or phone-provider behavior;
- payments;
- purchases;
- marketplace buy/sell/listing/checkout/order behavior;
- medical, pharmacy, telehealth, prescription, or emergency workflows;
- pesticide dosing or regulated chemical instruction;
- guaranteed yield, financial, legal, medical, or safety-critical advice;
- backend writes;
- pending agent actions;
- live lookup or network retrieval.

## Evidence & Verification Requirements

Every visible preview must include an Evidence & Verification area with:

- source title or packet name;
- data owner or publisher;
- source type;
- source date or freshness indicator;
- confidence level;
- verification state;
- limitation or boundary text;
- no-live-lookup statement when using deterministic local/source packets.

## Source Packet Requirements

Source packets must be deterministic and local for this first lane.

Each source packet must include:

- stable packet id;
- source title;
- data owner;
- source type;
- publication or review date;
- freshness state;
- confidence rating;
- verification status;
- summary;
- user-facing limitation text;
- prohibited action categories;
- no-execution metadata.

## No Live Lookup and No Network Behavior

Sprint C40 does not authorize live lookup.

The first runtime implementation must not introduce fetch, WebSocket, EventSource, XHR, third-party API calls, external navigation, backend source retrieval, provider calls, or network side effects.

## No Execution Boundary

The first runtime implementation must not execute, stage, confirm, dispatch, submit, send, call, pay, buy, sell, schedule, refill, diagnose, request location, request camera, open providers, write backend data, write persistent storage, create pending agent actions, or navigate externally.

## Manual Standard User Browser Validation Plan

Browser validation is required for any runtime-visible change.

Use:

- command: `node server.js`
- URL: `http://127.0.0.1:4182/`
- path: Start as User

Validate flag off:

- no visible behavior change;
- eligible prompts follow existing safe behavior;
- excluded/high-risk prompts remain guarded;
- no hidden/debug metadata visible;
- console warn/error count is 0.

Validate flag on in an approved safe context:

- eligible low-risk agriculture preview appears;
- Evidence & Verification appears;
- preview is review-only;
- no execution controls appear;
- excluded/high-risk prompts do not render preview cards;
- no provider handoff, calls, messages, payments, location, camera, medical/pharmacy/emergency behavior, backend writes, pending agent actions, storage side effects, network calls, external navigation, or hidden metadata exposure occurs;
- any temporary runtime state is restored.

## Rollback Strategy

Rollback strategy:

- default the flag to false;
- if a regression appears, disable the flag first;
- revert only the approved implementation files if needed;
- rerun focused flag-off QA;
- rerun focused flag-on QA if the implementation remains;
- rerun `nexus-workforce` and `all-safe`;
- rerun Standard User browser validation for any runtime-visible regression.

## Sprint C41 Readiness Recommendation

Sprint C41 should add a flag-off regression guard proving `NEXUS_SOURCE_BACKED_AGRICULTURE_PREVIEW_ENABLED` is default-disabled and produces no Standard User runtime-visible behavior while off.

Sprint C41 may define an inert/default-false flag or test contract only if needed for deterministic QA. It must not enable visible behavior.

## Final C40 Conclusion

The first controlled agriculture preview activation lane must be default-disabled, source-backed, review-only, Evidence & Verification visible, and strictly non-executing. Sprint C40 does not implement runtime-visible behavior; it creates the contract that Sprint C41 and Sprint C42 must satisfy.
