# N100-13 Multilingual Command Assistant

N100-13 adds an inert server-side contract for multilingual typed or user-initiated voice-style command understanding. It builds on N100-12 and stays local/test-safe.

## Supported Languages

- English
- Spanish
- French
- Arabic
- Portuguese
- Swahili

## What It Does

The contract detects a supported command language, maps the command to a safe English safety hint, and reuses the N100-12 voice command decision contract. It can prepare safe metadata for:

- source lookup preview
- comparison preview
- checklist preparation
- safe next-step guidance
- high-risk command blocking

## What It Does Not Do

This phase does not:

- call translation APIs
- call backend translation services
- start speech recognition
- start speech synthesis
- activate always-on listening
- contact providers
- call, message, buy, pay, dispatch, book, share location, or use camera
- provide certified clinical interpretation
- write to backend, storage, or external systems

## Safety Boundary

Every multilingual command decision keeps:

- `canExecute: false`
- `executionAuthority: "none"`
- `demoLanguageSupportOnly: true`
- `noClinicalInterpretationClaim: true`
- `noTranslationApiUsed: true`
- `noBackendTranslationServiceUsed: true`
- `noProviderCommunicationAuthorized: true`
- `noExecutionAuthorized: true`

## Runtime Status

This contract is not loaded into `public/app.js`, `public/index.html`, or `server.js`. It does not change the Standard User build and does not activate any new language runtime behavior.

## QA

`scripts/nexus-n100-13-multilingual-command-assistant-qa.js` verifies supported language coverage, high-risk blocking in each supported language, local-only behavior, absence of translation/provider APIs, package alias wiring, and local-safe suite inclusion.
