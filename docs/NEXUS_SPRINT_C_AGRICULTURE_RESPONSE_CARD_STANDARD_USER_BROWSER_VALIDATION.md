# Nexus Sprint C Agriculture Response Card Standard User Browser Validation

## Validation Summary

Sprint C Standard User browser validation was performed against the normal local build.

- Local HEAD tested: `4cdb3cb Add Sprint C agriculture renderer flag guard`
- Server command: `node server.js`
- URL tested, flag off: `http://127.0.0.1:4182/?sprintCFlagOff=1`
- URL tested, flag on: `http://127.0.0.1:4182/?nexusSprintCAgricultureCards=1&afterStaleFix=1`
- Standard User path: Start as User
- Browser environment: Codex in-app Chromium browser on Windows
- Result: passed after stale-card clear-path fix

## Startup And Mount Validation

The Standard User workspace loaded normally after Start as User.

The hidden low-risk renderer mount point remained:

- present
- hidden
- `aria-hidden="true"`
- `data-visible-renderer-enabled="false"`
- empty by default

No Sprint C card rendered on startup.

## Flag-Off Results

With `NEXUS_CONTROLLED_AGRICULTURE_RESPONSE_CARDS_ENABLED` absent and no `nexusSprintCAgricultureCards=1` URL flag:

- Sprint C cards rendered: `0`
- hidden mount remained hidden and empty
- no unsafe controls appeared
- no provider handoff appeared
- no call/message/payment/location/camera/external navigation behavior appeared
- console warn/error entries in final validation tab: `0`

Existing Phase 101 agriculture support behavior remains compatible and may show the already validated Phase 101 review-only card for agriculture prompts. Sprint C remains off and does not add a new card in this mode.

## Flag-On Eligible Prompt Results

With `?nexusSprintCAgricultureCards=1`, the following prompts rendered exactly one Sprint C review-only card:

| Prompt | Sprint C card | Safety result |
| --- | --- | --- |
| Help me with crop issues | 1 | Disabled review-only control, no execution |
| Teach me how irrigation works | 1 | Disabled review-only control, no execution |
| Help me find agriculture training | 1 | Disabled review-only control, no execution |
| What should I check if my crops are yellowing? | 1 | Disabled review-only control, no execution |
| How do I prepare soil for planting? | 1 | Disabled review-only control, no execution |

For each eligible prompt:

- the card was visibly review-only
- the button was disabled with `aria-disabled="true"`
- no provider handoff occurred
- no pending action was created
- no permission prompt opened
- no route or workflow auto-opened
- no payment, marketplace transaction, call, message, location, camera, account, medical, pharmacy, or emergency execution occurred

## Flag-On Excluded Prompt Results

With `?nexusSprintCAgricultureCards=1`, the following excluded/high-risk prompts did not produce a Sprint C card in the final targeted validation:

| Prompt | Sprint C card | Safety result |
| --- | --- | --- |
| Call my farmer | 0 | Permission/audit preview boundary, no execution |
| Send this on WhatsApp | 0 | Permission/audit preview boundary, no provider handoff |
| Buy fertilizer | 0 | Permission/audit preview boundary, no purchase/payment |
| Use my location | 0 | Permission/audit preview boundary, no location prompt |
| Take a picture of this plant | 0 | Permission/audit preview boundary, no camera prompt |
| Book an appointment | 0 | Permission/audit preview boundary, no scheduling |
| Pay for seeds | 0 | Permission/audit preview boundary, no payment |
| This is an emergency | 0 | Emergency boundary, no dispatch |

No unsafe anchors or attributes appeared for:

- `tel:`
- `mailto:`
- provider handoff
- payment allowed
- location sharing
- camera allowed

## Issue Found And Fixed

The first flag-on browser pass found that excluded prompts could leave the previous Sprint C card visible if the prompt did not render a replacement card. This was display-stale behavior, not execution behavior.

Fix applied in C3:

- the runtime clear path now removes `[data-nexus-sprint-c-agriculture-card]` before each new prompt
- the Sprint C renderer QA now verifies stale Sprint C cards are cleared

The excluded-prompt browser checks passed after the fix.

## Console Status

Final fresh validation tabs showed no browser console warnings or errors for Sprint C card rendering, provider handoff, permissions, payment, location, camera, routing, or execution.

An initial discarded browser tab saw a stale service worker update warning after an earlier dead server attempt. It was not reproduced in the final fresh validation pass and did not affect the Sprint C validation result.

## Safety Conclusion

Sprint C agriculture response cards are ready for controlled review-only use behind the explicit Sprint C flag.

Standard User default behavior remains compatible with the existing Phase 101 card path. Sprint C adds a stricter default-off flag-on path and does not enable live connectors, provider execution, calls, messages, payments, marketplace transactions, location sharing, camera/microphone activation, health actions, appointment scheduling, account behavior, external navigation, or emergency dispatch.

