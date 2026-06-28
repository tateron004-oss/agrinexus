# Sprint K6 - Flag-Gated Identity Resolution Preview

Sprint K6 adds an inert preview model for contact/provider identity resolution. The preview is flag-gated, fixture-safe, and not loaded into the Standard User runtime.

## Behavior

When `enableContactProviderIdentityPreview` is absent or false, the preview model returns:

- `visible: false`
- `reason: flag-disabled-or-runtime-blocked`
- `executionAllowed: false`
- `executionAuthority: false`

When the flag is explicitly true in a local-safe fixture context and the mapped identity candidate validates through the K2 contract, the preview model may return review-only text fields:

- title
- subtitle
- display name
- confidence tier
- risk tier
- evidence summary
- ambiguity note
- missing information note
- limitations

The flag-on preview remains inert and does not include buttons, links, forms, click handlers, provider handoff, permission prompts, navigation, storage, network calls, backend writes, native bridge calls, or execution behavior.

## Runtime Boundary

K6 does not load in:

- `public/index.html`
- `public/app.js`
- `server.js`

It does not change Standard User behavior. It is a local-safe model for future UI planning and QA only.

## Safety Rules

Every preview model preserves:

- `identityResolutionOnly: true`
- `approvalIntentOnly: true`
- `finalExecutionGateRequired: true`
- `executionAuthority: false`
- `executionAllowed: false`
- `providerDispatchAllowed: false`
- `providerHandoffAllowed: false`
- `communicationAllowed: false`
- `externalNavigationAllowed: false`
- `nativeBridgeAllowed: false`
- `networkAllowed: false`
- `storageWriteAllowed: false`
- `backendWriteAllowed: false`

High-risk, restricted, ambiguous, and missing identity cases may be described for review only, but they cannot execute or open provider communication.

## QA Protection

The K6 QA verifies flag-off invisibility, fixture-only flag-on rendering metadata, high-risk non-execution, restricted non-execution, missing and ambiguous review states, runtime absence, package alias, safe-suite wiring, and absence of side-effect APIs.
