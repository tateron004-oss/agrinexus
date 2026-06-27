# Nexus Sprint C42 - Flag-On Controlled Agriculture Preview Implementation

## Purpose

Sprint C42 implements the first controlled, flag-gated, review-only source-backed agriculture preview behavior. The behavior uses deterministic local source packets only and renders source-backed agriculture preview content only when the explicit flag is enabled.

## Current Checkpoint

- Current HEAD: `283ac7e4d67bf6b6dd6454c561bd23da0ec3ce01`
- Previous sprint: Sprint C41 - Source-Backed Agriculture Preview Flag-Off Regression Guard
- C41 flag contract: `public/nexus-sprint-c41-source-backed-agriculture-preview-flag.js`

## Runtime File Changed

Sprint C42 extends:

- `public/nexus-agriculture-support-response-card.js`

The existing Standard User agriculture support card runtime remains the single controlled insertion point. No new script tag, backend endpoint, provider integration, storage hook, or external service is added.

## Required Flag

The source-backed preview lane is gated by:

- `NEXUS_SOURCE_BACKED_AGRICULTURE_PREVIEW_ENABLED`

The flag is disabled by default. The source-backed preview branch activates only when the Standard User page has an explicit runtime/global value:

- `window.NEXUS_SOURCE_BACKED_AGRICULTURE_PREVIEW_ENABLED === true`

Because the Standard User app locks the global object after startup, C42 also exposes `setSourceBackedAgriculturePreviewValidationEnabled(true)` on `window.NexusAgricultureSupportResponseCard` for controlled browser validation after the module has loaded. This setter is in-memory only, accepts only boolean `true`, can be reset to `false`, adds no visible control, writes no storage, performs no network request, and grants no execution authority.

Missing, false, string, numeric, storage, query, server, or hidden metadata values do not enable this branch.

## Flag-Off Behavior

When the flag is off:

- `buildSourceBackedAgriculturePreviewCard()` returns `null`;
- `renderSourceBackedAgriculturePreviewCard()` returns `null`;
- existing Standard User behavior remains unchanged;
- no Evidence & Verification source-backed preview card appears;
- existing review-only agriculture support behavior is preserved.

## Flag-On Behavior

When the flag is explicitly on:

- eligible low-risk agriculture prompts may render a source-backed agriculture preview card;
- the card is review-only;
- Evidence & Verification is visible;
- the card uses deterministic local source packets only;
- no live lookup is performed;
- no network request is performed;
- no provider is contacted;
- no backend write occurs;
- no pending action is created;
- no external navigation occurs;
- no execution controls are rendered.

## Eligible Low-Risk Prompt Families

Eligible prompt families include:

- agriculture training;
- irrigation education;
- crop issue observation;
- field support review;
- AgriTrade review-only education;
- general agriculture support.

## Excluded and High-Risk Prompt Families

The preview must not render for prompts involving:

- calls;
- messages;
- WhatsApp, Telegram, SMS, or email;
- provider contact;
- payments;
- purchases;
- buy/sell/checkout/order/marketplace transactions;
- location, maps, GPS, or near-me requests;
- camera, photo upload, image capture, or image diagnosis;
- medical, pharmacy, telehealth, prescription, or emergency workflows;
- pesticide dosing, chemical mixing, or restricted application instructions;
- guaranteed yield or other unsupported claims.

## Evidence & Verification

Each source-backed preview card includes an Evidence & Verification section with:

- source title;
- data owner;
- source type;
- reviewed date;
- freshness;
- confidence;
- verification state;
- limitation;
- no-live-lookup disclosure.

## Source Packets

Sprint C42 source packets are deterministic and local. They are not fetched at runtime and do not represent live source retrieval.

The local packet categories include:

- agriculture training readiness;
- irrigation education;
- crop support observation;
- field support review;
- AgriTrade review-only education.

## No-Execution Guarantees

Sprint C42 does not add:

- provider handoff;
- calls;
- messages;
- payments;
- marketplace transactions;
- location sharing;
- camera access;
- image capture;
- medical workflow;
- pharmacy workflow;
- telehealth execution;
- emergency routing;
- backend writes;
- pending agent actions;
- live lookup;
- network calls;
- storage writes;
- external navigation;
- execution buttons or links.

## Browser Validation Requirement

Because C42 changes runtime-visible behavior when the flag is explicitly enabled, Sprint C42 requires manual Standard User browser validation before commit.

Validate:

- flag off: no new source-backed preview appears;
- flag on: eligible low-risk agriculture preview appears;
- Evidence & Verification appears;
- high-risk/excluded prompts do not render source-backed cards;
- no provider handoff, calls, messages, payments, location, camera, medical/pharmacy/emergency behavior, backend writes, pending actions, live lookup, network calls, storage side effects, external navigation, hidden/debug metadata, or console errors appear.

## Sprint C43 Readiness Recommendation

Sprint C43 should document full Standard User browser validation for flag-off and flag-on behavior, including prompt-by-prompt results, console status, and safety conclusions.

## Final C42 Conclusion

The first controlled source-backed agriculture preview implementation is now available only behind `NEXUS_SOURCE_BACKED_AGRICULTURE_PREVIEW_ENABLED === true`. The lane is local-packet-only, review-only, and non-executing.
