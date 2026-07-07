# Nexus Universal Navigation Runtime

Nexus Universal Navigation Runtime centralizes how Standard User clicks, typed Ask Nexus commands, voice transcripts, predictive suggestions, saved-record links, receipt links, and provider readiness cards resolve into Nexus workspaces.

## What It Does

- Provides the Universal Intent Router for deterministic local routing without live AI or external APIs.
- Normalizes user inputs into a shared intent object with `rawInput`, `inputType`, `matchedMode`, `matchedMiniApp`, `routeTarget`, `confidence`, `requiredAction`, `safetyLevel`, `providerRequired`, and timestamp fields.
- Registers major Nexus workspaces across health, agriculture, marketplace, logistics/maps, learning/workforce, drone operations, communications, provider activation, and review/audit.
- Routes deterministic local commands such as “I need chronic illness support,” “I have a crop problem,” “Track my shipment,” “Prepare an SMS,” and “Provider readiness” into focused existing Nexus workspaces.
- Explains global Nexus capability when users ask “What can Nexus do?”
- Explains the current workspace when users ask “What can I do here?”

## Runtime Surfaces

The runtime is loaded by `public/index.html` before `public/app.js` as:

- `window.NexusUniversalNavigationRuntime`

`public/app.js` connects it to:

- Ask Nexus typed commands
- voice transcript fallback through the same local command path
- mode tile and provider card click routing
- predictive suggestion routing hook
- saved record and receipt routing hook
- focused Nexus function/workflow windows

## Safety Posture

Universal navigation is routing and explanation only. It does not authorize or execute high-risk actions.

Live provider actions remain blocked unless the correct provider is configured and the appropriate consent, confirmation, audit, and outcome verification gates are satisfied. Nexus must not claim payment, telehealth, SMS, provider referral, shipment tracking, pharmacy routing, drone dispatch, or database persistence unless the configured provider actually verifies that result.

## Available Locally

- Workspace routing
- Workspace explanation
- Local packet and receipt surfaces already present in the app
- Provider-needed and credential-needed states
- Click, type, voice-transcript, suggestion, saved-record, and provider-card route hooks

## Blocked By Provider Activation

- Provider referral submission
- Pharmacy routing/refill execution
- Payment/booking/dispatch
- Live shipment tracking
- SMS/email/WhatsApp sending
- Telehealth scheduling or video room creation
- Drone dispatch or imagery capture
- Production database persistence when the database is not configured
- No fake citations: source cards appear only when a configured retrieval provider returns real source metadata.
- Secret values are never shown; provider readiness surfaces may show missing environment variable names only.

## QA

Focused QA:

```bash
node scripts/nexus-universal-navigation-runtime-qa.js
```

Package alias:

```bash
npm.cmd run qa:nexus-universal-navigation-runtime
```

The QA verifies workspace metadata, command routing, global and workspace explanations, input surface hooks, provider readiness routing, predictive/saved-record hooks, no-execution language, and safe-suite wiring.
