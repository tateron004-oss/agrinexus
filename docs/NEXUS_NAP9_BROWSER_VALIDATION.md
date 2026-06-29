# NAP9 - Browser Validation Of Working Agent Assistant

## Scope

NAP9 validated the normal Standard User build with the Nexus assistant runtime preview default-off and then flag-on with read-only provider/source preview flags. The phase also fixed one browser validation issue: after guest or password login, the app now refreshes `/api/config` before rendering so an authenticated Standard User session can see the current assistant runtime preview flags.

## Build Tested

- Command: `node server.js`
- URL: `http://127.0.0.1:4182/`
- Path: `Start as User`
- Default-off server: normal environment
- Flag-on server: temp DB with:
  - `NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED=true`
  - `NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED=true`
  - `NEXUS_STANDARD_USER_LIVE_SOURCE_PREVIEW_ENABLED=true`
  - read-only weather, agriculture context, news/security, and job-search provider flags enabled

## Validation Results

Default-off:

- Standard User opened normally.
- No source-backed runtime preview card appeared.
- No provider calls, permission prompts, execution controls, or browser console warnings/errors appeared.
- `db.json` was restored after the initial normal-build validation dirtied local runtime state.

Flag-on:

- Standard User opened normally against a temporary DB.
- Ask Nexus rendered the source-backed preview card after the post-auth config refresh.
- The card stayed read-only:
  - `data-read-only="true"`
  - `data-execution-authority="false"`
  - `data-provider-handoff="false"`
- NAP6 agent experience rendered in the preview card when the runtime path handled the prompt.
- No visible unsafe controls appeared.
- No provider contact, call, message, payment, booking, dispatch, submission, location permission, camera permission, or auto-navigation occurred.
- Browser console warn/error logs were empty during the validation pass.

Prompts validated:

- `Nexus, find farm jobs near Stockton.`
- `Only show entry-level ones.`
- `Compare the top two.`
- `Turn that into a checklist.`
- `Draft questions I should ask.`
- `What is the weather in Stockton?`
- `Find agriculture training resources.`
- `What current agriculture news should farmers know?`
- `Find agriculture training videos.`
- `Apply to the first job.`
- `Call the provider.`
- `Buy fertilizer.`
- `Send my location.`
- `Book an appointment.`
- `Dispatch help.`
- `This is an emergency.`

## Safety Conclusion

NAP9 confirms the working agent assistant remains preview-only in Standard User. Flag-on runtime previews can render after authentication, but they do not execute, hand off to providers, request permissions, navigate externally, write backend action state, or create real-world side effects.
