# Nexus Controlled Low-Risk Renderer Default-Off Runtime Flag Plumbing Audit

Phase 13U is a runtime flag plumbing audit only. It does not add active runtime flag wiring, does not activate the renderer, and does not change Standard User behavior.

This phase does not import the shell, adapter fixture, or adapter stub into `public/app.js`; does not load the shell, adapter fixture, or adapter stub from `public/index.html`; does not alter `server.js` config behavior to expose an active visible renderer flag; and does not make the hidden mount visible.

The Standard User build remains unchanged and default-off.

## A. Phase Purpose

This phase documents and audits the future flag plumbing boundary before any runtime activation is allowed.

The purpose is to answer whether any current runtime path enables the controlled low-risk renderer, whether `public/app.js` consumes any flag that could make the hidden mount visible, whether `server.js` exposes config that enables controlled low-risk renderer UI, and what exact flag shape is permitted in a later phase.

## B. Current Runtime Flag Status

Current source inspection shows:

- no active renderer flag consumed by `public/app.js`
- no active visible renderer config exposed by `server.js`
- no adapter/shell/stub loaded by `public/index.html`
- hidden mount remains default-off
- fixture/stub code remains outside runtime
- no active runtime flag wiring
- no visible UI
- no provider handoff
- no permission
- no confirmation
- no navigation
- no storage
- no network
- no execution

The only renderer-related live HTML surface remains the hidden/default-empty mount point, which is not connected to visible renderer code.

## C. Future Permitted Flag Shape

The only future flag allowed to enable visible renderer evaluation is:

```text
enableControlledLowRiskRendererVisibleUi === true
```

It must be strict boolean true only.

The following must not enable evaluation:

```text
true as a string
"true"
1
"1"
yes
"yes"
on
"on"
missing flag
null
undefined
object
array
server-side typo
environment variable truthy string
query parameter
localStorage value
sessionStorage value
cookie
URL hash
CSS class
DOM attribute alone
```

## D. Forbidden Flag Sources For Activation

Until a later explicit activation phase, renderer activation must not be controlled by:

- query string
- hash route
- localStorage
- sessionStorage
- cookie
- CSS class
- data attribute alone
- server environment string
- implicit `/api/config` truthy value
- debug mode
- admin mode
- user role alone
- prompt text alone

The existing hidden mount attributes are not activation. They are default-off static constraints.

## E. Required Future Flag Preflight

Before a future phase may use the flag, it must prove:

- flag defaults to false
- strict boolean parsing
- missing/malformed values are false
- visible renderer evaluation is blocked unless strict true
- hidden mount exists exactly once
- hidden mount is empty before rendering
- high-risk categories block rendering
- unsafe authority fields block rendering
- no buttons/links/handlers are inserted
- no provider/permission/confirmation/navigation/storage/network/execution behavior exists
- Standard User browser validation passes with flag off

Future QA must also prove that flag-off behavior is unchanged, flag-on behavior is text-only and low-risk only, and malformed truthy values remain disabled.

## F. Phase 14 Activation Boundary

Phase 14 may only begin visible renderer work after:

- Phase 13W Standard User browser validation passes
- Phase 13X closeout confirms readiness
- a future explicit activation phase defines the exact flag source
- QA proves flag-off behavior is unchanged
- QA proves flag-on behavior is text-only and low-risk only

Phase 13U does not approve activation. It only records the boundary and adds static QA to keep current runtime flag wiring absent.

## G. Acceptance Criteria

- Docs added.
- Static QA added.
- No active flag wiring added.
- No runtime imports added.
- No visible UI.
- Hidden mount remains default-off.
- QA passes.
- Commit created.
- Final git status clean.
- Push status not pushed.
