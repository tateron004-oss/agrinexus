# Nexus Multilingual Voice and Open Dialogue Runtime

## Purpose

This runtime gives Nexus a browser-safe conversational loop for Standard User conversations:

1. user speaks or types a question,
2. Nexus captures the transcript when browser speech recognition is available,
3. Nexus reasons through the open dialogue runtime,
4. Nexus renders a visible answer, next step, safety status, and source posture,
5. Nexus speaks the response when browser speech synthesis is available.

The feature is designed for real user interaction, not a readiness-only artifact.

## Supported Languages

The runtime follows the existing Nexus language keys and maps them to browser voice locales:

| Nexus language | Browser locale | Direction |
| --- | --- | --- |
| English | `en-US` | LTR |
| Spanish | `es-ES` | LTR |
| French | `fr-FR` | LTR |
| Swahili | `sw-KE` | LTR |
| Arabic | `ar` | RTL |
| Portuguese | `pt-BR` | LTR |

If the selected browser does not support voice input or output for the chosen language, Nexus shows a truthful text fallback. It does not fake voice recognition or speech output.

## Runtime Behavior

The browser module `public/nexus-conversational-voice-runtime.js` manages:

- speech recognition support detection,
- speech synthesis support detection,
- press-to-talk listening,
- stop/cancel,
- repeat last response,
- mute/unmute,
- transcript and confidence display,
- locale-aware speech synthesis,
- visible reasoning output,
- typed fallback through the same open dialogue path.

The browser module `public/nexus-open-dialogue-runtime.js` manages:

- multilingual command aliases,
- open-ended question detection,
- domain-aware answers for health, agriculture, marketplace, logistics, workforce, drone, communications, and provider-readiness topics,
- truthful live-knowledge posture,
- safe next-step recommendations,
- blocked action summaries,
- no-execution guarantees.

## Safety Boundaries

The runtime does not diagnose, prescribe, change medication, dispatch drones, call providers, send SMS, send WhatsApp, send email, process payments, buy marketplace items, route shipments, share location, or create appointments by itself.

Provider execution remains gated by the existing Nexus provider, confirmation, consent, credential, review, and audit layers.

Live knowledge is used only when configured and when a provider returns real source data. If live knowledge is not configured, Nexus says that source retrieval is unavailable and does not invent citations.

## User Experience

Standard Users see a compact conversational control inside the existing voice dock:

- Listen,
- Stop,
- Repeat,
- Mute,
- typed fallback input,
- transcript,
- browser support status,
- Nexus response,
- recommended next step,
- blocked action note,
- source/citation posture.

The control is intentionally compact so the Ask Nexus command center remains the primary surface.

## QA Coverage

`scripts/nexus-voice-open-dialogue-runtime-qa.js` verifies:

- both runtime modules exist and parse,
- multilingual locale mappings exist,
- voice states exist,
- required browser fallback strings exist,
- open dialogue responses are domain-aware,
- direct navigation commands are not intercepted,
- thank-you and repeat/cancel style commands are supported,
- high-risk domains remain non-executing,
- no fake citations are generated when live knowledge is unconfigured,
- Standard User UI loads the runtime scripts and visible controls,
- `app.js` bridges Ask Nexus voice commands into the runtime,
- package aliases and safe-suite wiring are present.
