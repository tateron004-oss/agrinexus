# Local-Safe QA Posture

Checkpoint: `15fc2cc89fa9f65e55abd18f250c911a8c59ac7b`

This document records the current local-safe QA posture for the active AgriNexus runtime. The active runtime remains the Node/web app (`server.js`, `public/app.js`, `public/index.html`, `public/styles.css`, `public/sw.js`, and `db.json`). The `foundation/` directory is future architecture and is intentionally outside this local-safe runtime QA posture.

## Local-Safe Grouped QA

Run these commands from the repository root:

```powershell
node scripts\qa-suite.js provider
node scripts\qa-suite.js call
node scripts\qa-suite.js native
node scripts\qa-suite.js voice
node scripts\qa-suite.js core
node scripts\qa-suite.js app
node scripts\qa-suite.js all-safe
```

Package aliases are also available:

```powershell
npm run qa:provider
npm run qa:call
npm run qa:native
npm run qa:voice
npm run qa:core
npm run qa:app
npm run qa:all-safe
```

Use the direct Node commands when PowerShell or local shell policy blocks `npm run`.

At checkpoint `15fc2cc89fa9f65e55abd18f250c911a8c59ac7b`, `node scripts\qa-suite.js all-safe` passed all 28 deduplicated local-safe checks.

## Formerly Excluded Standalone Checks

These standalone scripts now pass individually and are confirmed green at the same checkpoint:

```powershell
node scripts\conversation-brain-smoke.js
node scripts\companion-workflow-offer-smoke.js
node scripts\user-mode-workflow-audit.js
node scripts\jarvis-behavior-qa.js
```

## Recommended Use

- Run `node scripts\qa-suite.js all-safe` before major feature merges when time allows.
- Run the domain suites during targeted work:
  - `provider` for provider registry or metadata changes.
  - `call` for call intent, confirmation, handoff, or provider display changes.
  - `native` for static native bridge, voice, or handoff contract changes.
  - `voice` for browser voice, realtime voice, TTS, language, or phone greeting changes.
  - `core` for companion, utility, conversation core, and route safety changes.
  - `app` for frontend workflow, auth gate, and cross-platform behavior changes.
- Keep live, production, destructive, credentialed, provider-engine, database backup/restore, and native compile checks separate from local-safe QA.
- Do not treat static native QA as Android or iOS build validation.

## Intentionally Excluded Or Manual

The local-safe grouped suites intentionally exclude:

- Production, live, network, or credential-dependent checks.
- Provider engine/server operations and long-running local systems.
- Database backup and restore utilities.
- Native Android/iOS compile validation.
- `foundation/` scripts and migration checks.
- Demo, screenshot, video, presentation, and manual asset scripts.

These scripts may still be valuable, but they should be run only in the correct environment with an explicit reason and appropriate safeguards.

## Native Build Boundary

Static native QA is green for the current source contracts, including:

- Android call handoff uses user-visible `ACTION_DIAL`.
- iOS call handoff uses a validated `tel:` Phone UI handoff.
- Browser-to-native confirmed call bridge dispatch remains covered.

Actual native builds remain manual. The repo does not currently include Android Gradle wrapper files, and the iOS source does not include an `.xcodeproj` or `.xcworkspace`. This Windows Codex workspace also does not provide Gradle or Xcode.

See `native-mobile/BUILD_VALIDATION.md` for native build validation details, manual Android/iOS steps, and future build-validation phases.
