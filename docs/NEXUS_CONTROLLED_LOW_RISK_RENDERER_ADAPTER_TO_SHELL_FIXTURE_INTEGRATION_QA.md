# Nexus Controlled Low-Risk Renderer Adapter-to-Shell Fixture Integration QA

Phase 13S is fixture integration QA only. It validates adapter-to-shell behavior outside runtime and does not activate the controlled low-risk renderer.

This phase does not add runtime wiring, does not render anything in Standard User, does not touch the hidden mount point, and does not create cards, buttons, links, handlers, navigation, provider handoffs, permissions, confirmations, storage, network, or execution.

It proves the future data path using simulated metadata only. Standard User remains default-off and unchanged.

## A. Phase Purpose

This phase validates the isolated fixture pipeline:

```text
simulated metadata -> adapter fixture -> shell eligibility -> shell text model
```

The adapter fixture remains under `scripts/fixtures`, the shell fixture remains under `scripts/fixtures`, and neither fixture is imported by `public/app.js`, loaded from `public/index.html`, or wired by `server.js`.

## B. Safe Fixture Pipeline

Safe metadata may produce a text-only model only when:

- strict flag is `true`
- hidden mount invariants are satisfied in fixture data
- category is allowlisted
- all authority/side-effect fields are false
- no forbidden behavior fields exist
- output stays text-only

Allowed low-risk category inputs include:

- `agriculture training`
- `agriculture_training`
- `irrigation learning`
- `irrigation_learning`
- `farm jobs`
- `workforce discovery`
- `farm_jobs_workforce_discovery`
- `AgriTrade`
- `agritrade`
- `agritrade_marketplace_preview`
- `crop issues`
- `crop issue education`
- `crop_issue_education_help`

Fixture eligibility is not live Standard User runtime eligibility. A safe fixture may pass in QA, while the Standard User build remains unwired and default-off.

## C. Blocked Fixture Pipeline

Blocked metadata must fail when it includes:

- high-risk category
- unknown category
- non-strict truthy flag
- missing mount invariant
- visible/non-empty mount invariant
- execution authority
- provider handoff
- permission request
- navigation authority
- raw HTML
- button/link/handler requirements
- network/storage requirements
- confirmation/execution requirements
- forbidden behavior-capable fields

Blocked categories include:

- `call`
- `message`
- `sms`
- `whatsapp`
- `telegram`
- `location`
- `map_permission`
- `camera`
- `microphone`
- `buy`
- `sell`
- `payment`
- `checkout`
- `emergency`
- `appointment`
- `booking`
- `provider_handoff`
- `account_connection`
- `identity_sensitive_action`

Unsafe variants include missing flags, false flags, null flags, undefined flags, string `"true"`, number `1`, string `"1"`, string `"yes"`, string `"on"`, missing mount, duplicate mount, non-hidden mount, non-empty mount, `executionAllowed: true`, `providerHandoff: true`, `permissionRequest: true`, `navigationAllowed: true`, malformed metadata, array metadata, null metadata, and string metadata.

## D. Text-Only Output Contract

Allowed shell text model keys remain limited to:

```text
title
category
summary
previewLines
safetyLabel
```

Forbidden output keys:

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

The fixture pipeline may return plain text fields only. It must not return HTML, controls, callbacks, route targets, provider payloads, permission payloads, network details, storage details, or executable action metadata.

## E. Acceptance Criteria

- Docs added.
- Integration QA added.
- Adapter and shell remain under `scripts/fixtures`.
- Adapter and shell remain outside `public/`.
- Adapter and shell are not imported by runtime.
- Safe fixture pipeline produces text-only models.
- Unsafe fixture pipeline is blocked.
- Hidden mount point remains hidden/default-off.
- No Standard User behavior changes.
- QA passes.
- Commit created.
- Final git status clean.
- Push status not pushed.
