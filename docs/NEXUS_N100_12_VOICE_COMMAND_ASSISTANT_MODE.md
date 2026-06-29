# N100-12 Voice and Command Assistant Mode

N100-12 adds an inert server-side contract for typed and user-initiated voice-style command interpretation. It does not change the Standard User runtime, does not request microphone permission, and does not start speech synthesis.

## Scope

This phase supports safe command decisions for:

- source-backed lookup previews
- comparison of current visible options
- checklist preparation
- cancelling a prepared plan
- suggesting a safe next step
- blocking high-risk voice commands

The contract accepts command text, removes a leading Nexus wake phrase when present, classifies the intent, and returns a speakable summary for review.

## Safety Boundary

Nexus may summarize what it can prepare, but it cannot execute from voice or typed command metadata in this phase. Every decision keeps:

- `canExecute: false`
- `executionAuthority: "none"`
- `alwaysOnListening: false`
- `microphonePermissionRequested: false`
- `noSpeechSynthesisStarted: true`
- `noProviderContactAuthorized: true`
- `noCallAuthorized: true`
- `noMessageSendAuthorized: true`
- `noPaymentAuthorized: true`
- `noDispatchAuthorized: true`
- `noCameraAuthorized: true`
- `noLocationSharingAuthorized: true`
- `noBackendWritePerformed: true`

## Blocked Commands

The contract blocks commands that ask Nexus to call, message, send WhatsApp or Telegram, buy, pay, dispatch, use the camera, share location, book appointments, or submit forms. Blocked commands return a safe explanation and no execution authority.

## Runtime Status

This file is not loaded into `public/app.js`, `public/index.html`, or `server.js`. It is a local-safe contract and QA harness only. Existing Standard User typed and voice behavior remains unchanged.

## Representative Prompts

- "Nexus, find farm jobs near Stockton." -> source lookup preview
- "Nexus, compare the top two." -> comparison preview
- "Nexus, make me a checklist." -> checklist preparation
- "Nexus, cancel that." -> cancel prepared plan
- "Nexus, what should I do next?" -> safe next-step suggestion
- "Nexus, call the provider." -> blocked high-risk voice command
- "Nexus, buy fertilizer." -> blocked high-risk voice command
- "Nexus, dispatch help." -> blocked high-risk voice command

## QA

`scripts/nexus-n100-12-voice-command-assistant-mode-qa.js` verifies the contract, static runtime absence, command classification, speakable safe summaries, blocked high-risk prompts, package alias wiring, and local-safe suite inclusion.
