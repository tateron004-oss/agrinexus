# Nexus Genesis Real Browser Voice and Companion Acceptance

## Execution Context

- Commit tested at start: `8b3d5bcdf2474cb1a6fb9ecedb08d8501a264787`
- Application URL: `http://127.0.0.1:4182/`
- Startup command: `node server.js`
- Browser used: Codex In-app Browser
- Operating system: Windows, local Codex desktop workspace
- Standard User path: role selector `User`, `Start as User`, activation through the Genesis orb
- App bundle loaded for final browser pass: `/app.js?v=nexus-behavior-423`

## Browser Voice Capability Detection

- Secure local context: local `127.0.0.1` app loaded successfully.
- SpeechRecognition: unavailable in the Codex In-app Browser test environment.
- webkitSpeechRecognition: unavailable in the Codex In-app Browser test environment.
- speechSynthesis: unavailable in the Codex In-app Browser test environment.
- SpeechSynthesisUtterance: unavailable in the Codex In-app Browser test environment.
- Available voices: none exposed by this browser environment.
- Microphone permission result: no microphone permission prompt appeared because browser speech recognition was unavailable.

## Standard User Companion Validation

- Dashboard entry: passed. The user path opened the Genesis Standard User surface after selecting `User` and activating Nexus.
- Orb activation: passed. The first visible experience is the Nexus orb, and activation reveals the typed Ask Nexus composer.
- Browser voice availability line: passed. The focused command composer displays `Voice uses browser support. Typed Ask Nexus always works.` so the user is not left with a silent voice-control state in this browser.
- Typed fallback: passed. The typed command `Nexus, talk to me.` produced a visible user turn and a natural Nexus response.
- Companion response: passed. Nexus responded in plain, respectful companion language without raw implementation wording.
- Console warnings/errors: 0 observed during entry, orb activation, typed command, Speak-control click, and voice availability validation.

## Voice and Playback Acceptance Result

- Recognition result: not available in this browser, so no real speech transcript was captured.
- Synthesis event result: not available in this browser, so no browser `speechSynthesis` `start` event was observed.
- Actual audible output: not confirmed. This environment did not expose speech synthesis, and no sound was heard or objectively confirmed.
- Outcome class: speech synthesis unavailable or blocked in this browser environment.

This record treats source wiring, `speak()` requests, screenshots, and deterministic QA as not proof that audio was heard. A future pass in a browser that exposes `speechSynthesis` may record `Browser synthesis event confirmed but audio could not be heard` or `Audible output confirmed` only if the evidence supports it.

## Controls and Fallbacks

- Speak control: tested. In this environment, clicking Speak did not produce speech recognition, audible output, a microphone prompt, or console errors. Nexus kept typed Ask Nexus visible and did not claim it was listening or speaking.
- Stop/repeat/mute/unmute/speed controls: source and deterministic QA cover the lifecycle and state transitions; full audible/browser-control validation remains limited by unavailable speech APIs in the in-app browser.
- Interruption behavior: source and deterministic QA verify cancellation and stale callback protection; no audible interruption could be heard in this browser.
- Language behavior: English typed flow was tested. Spanish, French, and Swahili speech could not be validated audibly because browser speech APIs and voices were unavailable.
- No always-on listening: preserved. Voice starts from explicit user action only.

## Defects Found and Fixed

- Defect: the focused Genesis surface did not clearly state what happens when browser voice support is unavailable or browser-dependent.
- Fix: added a visible browser voice availability line in the focused command composer, kept typed Ask Nexus available, and avoided false listening/speaking claims.
- Fix: moved unsupported browser speech-recognition fallback ahead of duplicate-start prevention and added a not-configured realtime voice fallback path.
- Fix: exported the browser voice runtime profile helper next to existing speech/listening controller helpers for acceptance and QA visibility.
- Fix: bumped the app bundle cache token so browser validation loads the acceptance fixes.

## Remaining Environmental Limitations

- The Codex In-app Browser used for this pass did not expose native speech recognition or speech synthesis APIs.
- Microphone recognition, synthesis start/end events, and human-audible playback must be re-tested in a desktop browser that exposes those APIs, such as Chrome or Edge with microphone permission and audio output enabled.
- This limitation does not block typed companion operation or safe Standard User fallback behavior.
