# Nexus Controlled Low-Risk Renderer Static Harness QA

## Purpose

Phase 13O adds a static QA harness for the controlled low-risk renderer contract. This is still a default-off, non-runtime phase.

The harness validates future render eligibility with isolated fixture objects only. It does not activate the renderer, wire the renderer into the Standard User app, render DOM in the live browser, or change browser behavior.

It must not render DOM in the Standard User app. It must not change browser behavior. It must not create visible UI. It must not add click handlers, links, buttons, provider handoffs, permission prompts, confirmations, network calls, storage writes, navigation, or execution.

## Non-Runtime Boundary

The Phase 13O harness must not be imported by `public/app.js`.

The harness must not:

- render DOM in the Standard User app
- make the hidden mount visible
- create visible UI
- add cards, buttons, links, forms, or inputs
- attach click handlers or keyboard handlers
- add provider handoffs
- request permissions
- open confirmations
- navigate
- make network calls
- write storage
- execute actions
- change Standard User behavior

The Standard User safety posture remains exactly the same as after Phase 13N: the hidden renderer mount point is present, hidden, default-empty, and unwired.

## Static Harness Contract

The harness evaluates future render eligibility only when all fixture gates pass:

- `enableControlledLowRiskRendererVisibleUi === true`
- the mount exists exactly once
- the mount is hidden
- the mount is empty
- the category is allowlisted low-risk
- `executionAllowed === false`
- `providerHandoff === false`
- `permissionRequest === false`
- `navigationAllowed === false` for the first visible phase
- `requiresRawHtml !== true`
- `requiresButton !== true`
- `requiresLink !== true`
- `requiresHandler !== true`
- `requiresNetwork !== true`
- `requiresStorage !== true`
- `requiresConfirmation !== true`
- `requiresExecution !== true`

This true result is only a fixture-level contract result. It is not runtime activation and does not mean visible UI is enabled.

## Allowed Low-Risk Fixtures

Allowed fixture examples:

- agriculture training
- irrigation learning
- farm jobs/workforce discovery
- AgriTrade marketplace preview
- crop issue education/help guidance

These examples are review-only and must not imply execution, provider handoff, permissions, confirmations, navigation, network calls, or storage writes.

## Blocked Fixtures

Blocked fixture examples:

- call
- message
- SMS
- WhatsApp
- Telegram
- location
- map permission
- camera
- microphone
- buy
- sell
- payment
- checkout
- emergency
- appointment
- booking
- provider handoff
- account connection
- identity-sensitive action

The harness must also reject malformed fixtures, missing flags, false flags, null flags, undefined flags, string `"true"`, number `1`, missing mounts, duplicate mounts, non-hidden mounts, non-empty mounts, non-allowlisted categories, and any fixture that requires raw HTML, buttons, links, handlers, network, storage, confirmation, or execution.

## Runtime Source Guard

Phase 13O also verifies:

- `public/app.js` does not import, require, call, or consume the static harness.
- `public/app.js` does not query the hidden mount point.
- `public/index.html` keeps exactly one hidden/default-empty renderer mount point.
- `server.js` does not expose renderer activation.
- no obvious hardcoded visible renderer activation has been introduced.

## Future Use

This phase prepares contract logic for a future visible renderer implementation, but it does not approve that implementation.

Before visible runtime rendering is allowed, the project still needs dedicated browser regression validation, Standard User manual validation, and additional QA proving that low-risk rendering remains text-only, review-only, non-clickable, non-authoritative, and non-executing.
