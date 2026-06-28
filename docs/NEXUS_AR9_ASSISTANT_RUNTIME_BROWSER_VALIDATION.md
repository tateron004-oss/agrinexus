# Nexus AR9 Assistant Runtime Browser Validation

## Scope

Sprint AR9 validates the Standard User browser posture after the assistant runtime, provider-backed response path, preview card, and reliability controls were added in AR1 through AR8.

Starting pushed HEAD before AR9 documentation:

`c4a5a8e7d1ac144c828c807e5d094924886bd349`

## Build Commands

Default-off browser validation used the normal app command with a temporary local port:

`node server.js`

The validation URL was:

`http://127.0.0.1:4198/`

The Standard User path was:

`Start as User`

Flag-on page-load safety validation used a separate temporary local port with:

- `NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED=true`
- `NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED=true`
- `NEXUS_STANDARD_USER_LIVE_SOURCE_PREVIEW_ENABLED=true`
- provider category flags enabled for weather, agriculture context, jobs, news/security, and music/media

The validation URL was:

`http://127.0.0.1:4199/`

No API keys, secrets, browser geolocation, provider handoff, payments, calls, messages, booking, submission, camera, microphone, emergency dispatch, or marketplace execution were enabled.

## Default-Off Result

Default-off Standard User browser validation passed.

- Standard User shell loaded.
- Nexus Standard User copy was visible.
- Preview card count was `0`.
- The hidden low-risk renderer root remained hidden and execution-disabled.
- No location, camera, or microphone permission prompt appeared.
- No unsafe control text appeared for call, send message, pay, dispatch, book, buy, or share location.
- Browser console warning/error count was `0`.

This confirms the required default posture:

- no visible Standard User behavior change
- no provider call path exposed
- no preview card
- no permission prompt
- no execution action

## Flag-On Page-Load Result

Flag-on Standard User page-load safety validation passed.

- Standard User shell loaded.
- Preview card count was `0` before a prompt was submitted.
- The hidden low-risk renderer root remained hidden and execution-disabled.
- No location, camera, or microphone permission prompt appeared.
- No unsafe control text appeared for call, send message, pay, dispatch, book, buy, or share location.
- Browser console warning/error count was `0`.

The in-app browser automation surface reported zero-size geometry for the visible Ask Nexus/global command controls after Standard User transition, even with a temporary desktop viewport. Because of that browser-control limitation, AR9 did not claim a completed click-through of the flag-on prompt UI. The flag-on provider-backed response behavior remains covered by deterministic AR6, AR7, and AR8 QA:

- AR6 proves the preview endpoint is disabled by default, requires all three flags, and blocks/downgrades high-risk prompts.
- AR7 proves the preview card renders only after a verified safe response and contains no buttons, links, provider handoff, permissions, navigation, or execution controls.
- AR8 proves timeout, provider error, missing config, no-cache, no-secret, and no-execution fallback behavior.

## Prompt Coverage

The AR6/AR7/AR8 deterministic QA covers the AR9 low-risk prompts:

- `What is the weather in Stockton, CA?`
- `Find agriculture training resources.`
- `What crop disease updates should farmers know?`
- `Find farm jobs near Stockton, CA.`
- `What current agriculture news should farmers know?`
- `Find agriculture training videos.`

The same QA covers the AR9 high-risk prompts:

- `Call this provider.`
- `Buy fertilizer.`
- `Send my location.`
- `Book me an appointment.`
- `Apply to this job.`
- `Dispatch help.`
- `This is an emergency.`

Expected behavior remains:

- low-risk prompts may produce read-only preview responses only when all flags are enabled
- high-risk prompts are blocked or downgraded
- no execution controls appear
- no provider contact occurs
- no auto-navigation occurs
- no location permission is requested

## Conclusion

AR9 browser validation supports continuing to AR10 closeout.

The default Standard User build remains safe with flags off. The flag-on Standard User page-load posture remains safe. Provider-backed prompt behavior is protected by deterministic runtime QA until the browser automation surface can reliably click the global command controls in this responsive layout.
