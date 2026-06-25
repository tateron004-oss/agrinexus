# Nexus Controlled Low-Risk Renderer Runtime-Adjacent Adapter Stub

Phase 13T adds a runtime-adjacent adapter stub only. The stub is not active runtime wiring.

The repository did not already have a `public/inert` convention, so this phase keeps the stub in the safer non-runtime location `scripts/fixtures/nexus-controlled-low-risk-renderer-runtime-adjacent-adapter-stub.js`.

The stub is not imported by `public/app.js`, is not loaded by `public/index.html`, does not render UI, does not touch or mutate the hidden mount point, and does not create cards, buttons, links, handlers, navigation, provider handoffs, permissions, confirmations, storage, network, or execution.

The Standard User build remains unchanged and default-off. The stub exists only to define the future browser-side adapter shape before any real integration.

## A. Phase Purpose

Phase 13T creates a future-facing runtime-adjacent adapter stub that is intentionally unwired.

It follows the Phase 13Q adapter contract and the Phase 13R/13S fixture pipeline, but it does not connect anything to Standard User runtime. It is a shape and safety contract, not an activation layer.

## B. Runtime-Adjacent Boundary

Runtime-adjacent means:

```text
The file may use browser-safe syntax, but it must not be loaded, imported, executed, or referenced by the Standard User runtime.
```

The stub may define pure functions or plain objects only. It must not execute side effects.

## C. Stub Responsibilities

The stub may:

- define a future adapter function name
- document expected input shape
- return a safe ineligible/default-off result
- expose a strict allowlist of safe fields
- expose a strict denylist of behavior fields
- preserve strict flag behavior
- remain pure and side-effect-free

The stub must not:

- query DOM
- mutate DOM
- read or write storage
- call network APIs
- attach listeners
- navigate
- request permissions
- create confirmations
- dispatch actions
- open providers
- execute anything

## D. Default-Off Stub Behavior

The stub must always default to ineligible unless strict future integration passes:

```text
enableControlledLowRiskRendererVisibleUi === true
```

For Phase 13T, because this stub is not wired, no live runtime input should ever reach it.

Malformed input, missing flags, false flags, null flags, undefined flags, string `"true"`, number `1`, string `"1"`, string `"yes"`, and string `"on"` all remain ineligible/default-off.

## E. Accepted and Rejected Fields

Allowed field names:

```text
enableControlledLowRiskRendererVisibleUi
mountExistsExactlyOnce
mountHidden
mountEmpty
category
title
summary
previewLines
executionAllowed
providerHandoff
permissionRequest
navigationAllowed
requiresRawHtml
requiresButton
requiresLink
requiresHandler
requiresNetwork
requiresStorage
requiresConfirmation
requiresExecution
```

Rejected behavior-capable field names:

```text
html
rawHtml
button
buttons
link
links
href
url
onClick
onclick
handler
handlers
callback
callbacks
action
actionId
dispatch
execute
provider
providerAction
permission
permissionRequestDetails
confirmation
confirmationAction
navigation
route
open
target
method
headers
body
fetch
storage
script
style
iframe
form
input
```

Rejected fields may appear in documentation and QA as forbidden examples. They must not become accepted adapter output or runtime wiring.

## F. Acceptance Criteria

- Docs added.
- Stub added in a safe unwired location.
- Stub is not loaded by `index.html`.
- Stub is not imported/referenced by `public/app.js`.
- Stub is side-effect-free.
- Stub defaults to ineligible.
- Hidden mount remains hidden/default-off.
- No visible UI.
- No Standard User behavior change.
- QA passes.
- Commit created.
- Final git status clean.
- Push status not pushed.
