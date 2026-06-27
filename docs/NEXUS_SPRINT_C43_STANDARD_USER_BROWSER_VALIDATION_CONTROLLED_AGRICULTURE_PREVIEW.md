# Nexus Sprint C43 - Standard User Browser Validation for Controlled Agriculture Preview

## Purpose

Sprint C43 records the Standard User browser validation checkpoint after Sprint C42 introduced a controlled, flag-gated, source-backed agriculture preview card. The validation keeps the feature review-only and confirms that the normal Standard User build remains safe with the flag off.

## Commit Tested

- Starting commit: `7371d200a798421a0a17b085d6c918d6b9b5e6b5`
- Sprint C42 commit: `7371d20 Add flag-on controlled agriculture preview implementation`

## Browser Environment

- OS: Windows
- Browser surface: Codex in-app browser
- Server command: `node server.js`
- URL: `http://127.0.0.1:4182/`
- User path: `Start as User`
- Guest name used: `Ron`

## Standard User Flag-Off Browser Result

The normal Standard User build was opened without enabling `NEXUS_SOURCE_BACKED_AGRICULTURE_PREVIEW_ENABLED`.

Prompt tested:

- `Help me find agriculture training`

Observed result:

- Nexus responded with the existing agriculture/training review-only guidance.
- No `data-nexus-source-backed-agriculture-preview-card="true"` card appeared.
- No hidden/debug-only metadata appeared in the visible page text.
- No provider handoff, call, message, payment, marketplace transaction, location request, camera request, medical/pharmacy action, emergency dispatch, backend write, pending action, live lookup, storage side effect, or external navigation occurred.
- Browser console logs returned no warn/error entries during the checked path.

Conclusion:

- Flag-off Standard User behavior remains unchanged and safe.

## Flag-On Validation Coverage

Sprint C42 added the validation-only API:

- `setSourceBackedAgriculturePreviewValidationEnabled(true)`

The API is in-memory only, accepts only boolean `true`, can be reset to `false`, adds no visible control, writes no storage, performs no network request, and grants no execution authority.

Deterministic QA verified flag-on behavior for:

- `Help me find agriculture training`
- `Teach me how irrigation works`
- `I need help with crop issues`
- `I need field support for my farm`
- `Browse AgriTrade`

For each eligible prompt, QA confirmed:

- source-backed agriculture preview card creation;
- `Evidence & Verification` content;
- deterministic local source packet metadata;
- `No action has been taken` disclosure;
- no buttons;
- no links;
- no provider handoff;
- no pending action creation;
- no network/live lookup;
- no storage side effect;
- no external navigation;
- no execution authority.

## Flag-On Browser Tooling Limitation

The Codex in-app browser exposes read-only page evaluation and blocked `javascript:` URL execution by policy. The Standard User app also locks the global object after startup. Because of those two browser-surface constraints, this validation run could not flip the validation-only flag inside the live browser main world after page load.

This is not a product runtime failure. It is a limitation of this automated browser surface for a validation-only flag that intentionally has no visible UI control and no storage/query activation path.

Follow-up requirement:

- before treating the flag-on branch as fully browser-validated, run a local browser validation in an environment that can enable `window.NEXUS_PHASE_101_AGRICULTURE_SUPPORT_RESPONSE_CARD.setSourceBackedAgriculturePreviewValidationEnabled(true)` in the page main world, then rerun the eligible and excluded prompt matrix below.

## Excluded and High-Risk Prompt Matrix

The C42 deterministic QA protects these excluded prompts while the flag is on:

- `Call an agronomist`
- `Message the seller on WhatsApp`
- `Buy seeds`
- `Sell my crop`
- `Use my camera to diagnose this plant`
- `Find my location`
- `Schedule a telehealth appointment`
- `Emergency pesticide poisoning`
- `Tell me the pesticide dose rate to spray`

Expected result for each:

- no source-backed agriculture preview card;
- no provider handoff;
- no call/message/WhatsApp behavior;
- no payment or marketplace transaction;
- no location/camera permission request;
- no medical/pharmacy/emergency action;
- no pending action;
- no backend write;
- no external navigation.

## Console Status

- Flag-off Standard User browser path: no warn/error entries observed through the browser log API.
- Flag-on browser main-world activation: not completed in Codex in-app browser because the browser security policy blocked `javascript:` execution and read-only evaluation cannot mutate page globals.

## Safety Conclusion

Sprint C43 confirms the normal Standard User build remains safe with the controlled agriculture preview flag off. Sprint C42 deterministic QA confirms the flag-on renderer is source-backed, review-only, and non-executing. A human/local browser main-world flag-on validation remains a follow-up before any broader visible activation.

## Next Sprint Recommendation

Sprint C44 should close out the controlled agriculture preview activation lane and explicitly record:

- C39 through C43 completion;
- C43 flag-off browser validation result;
- deterministic flag-on QA coverage;
- the remaining manual flag-on browser validation follow-up;
- readiness boundaries for any future Sprint D action-staging lane.
