# Nexus Controlled Low-Risk Renderer Hidden Mount Preflight Guard Contract

Phase 13V is a hidden mount preflight guard contract only. It does not add active runtime guard wiring, does not activate the renderer, does not render anything, and does not change Standard User behavior.

This phase does not import the shell, adapter fixture, or adapter stub into `public/app.js`; does not load the shell, adapter fixture, or adapter stub from `public/index.html`; does not alter `server.js` config behavior; and does not make the hidden mount visible.

Standard User remains unchanged and default-off.

## A. Phase Purpose

This phase defines the future preflight guard that must fail closed before any future renderer touches the hidden mount point.

The guard exists to ensure future activation cannot begin unless the mount is exactly the expected hidden/default-off element, the renderer flag is strict, and no interactive or executable state is present before rendering.

## B. Required Mount Identity

The current mount point ID discovered in `public/index.html` is:

```text
nexus-controlled-low-risk-renderer-root
```

The guard must require:

- mount exists exactly once
- mount has the expected ID `nexus-controlled-low-risk-renderer-root`
- mount is not duplicated
- mount is not missing
- mount is not replaced by a different element
- mount is not moved into an unsafe interactive container

If any identity check fails, the guard must fail closed.

## C. Required Default-Off Mount State

The guard must require:

- mount is hidden
- `aria-hidden="true"`
- `data-visible-renderer-enabled="false"`
- `data-nexus-renderer-mode="hidden"`
- `data-execution-allowed="false"`
- `data-provider-handoff="false"`
- `data-permission-request="false"`
- `data-navigation-allowed="false"`
- default-empty contents
- no child nodes
- no buttons
- no links
- no forms
- no inputs
- no scripts
- no iframes
- no event handlers
- no event handler attributes
- no `onclick`
- no `href`
- no role suggesting interactivity
- no tabindex enabling focus

The static mount must remain inert until a later explicit activation phase proves all required preflight checks.

## D. Fail-Closed Conditions

The guard must fail closed if:

- mount is missing
- mount appears more than once
- mount is visible
- `aria-hidden` is not `"true"`
- `data-visible-renderer-enabled` is not `"false"` before activation
- mount has children
- mount contains text content
- mount contains HTML markup
- mount contains buttons
- mount contains links
- mount contains forms or inputs
- mount contains scripts or iframes
- mount has event handler attributes
- mount has focusable attributes
- mount has provider, permission, confirmation, navigation, storage, network, or execution markers
- any future flag is not strict boolean `true`
- any high-risk category is detected
- any authority field is unsafe

Fail closed means no unhide, no content insertion, no handler attachment, no provider handoff, no permission prompt, no confirmation flow, no navigation, no storage write, no network call, and no execution.

## E. Permitted Future Phase 14 Behavior

Phase 14 may only pass preflight if:

- strict runtime flag is `true`
- mount starts hidden/default-empty
- adapter output is safe
- shell output is text-only
- high-risk prompts remain blocked
- no buttons/links/handlers are inserted
- no provider/permission/confirmation/navigation/storage/network/execution behavior is added
- Standard User flag-off browser validation still passes

Phase 14 must also prove that flag-on behavior remains low-risk and text-only before any visible card is considered.

## F. No-Render Phase 13V Boundary

Phase 13V does not:

- unhide the mount
- insert content
- evaluate live prompts
- render cards
- attach handlers
- route users
- request permissions
- call providers
- write storage
- call network
- execute actions

The only implementation in this phase is documentation and static QA.

## G. Acceptance Criteria

- Docs added.
- Static QA added.
- Exact current mount identity documented.
- Hidden/default-off invariants checked.
- No active runtime wiring added.
- No visible UI.
- Hidden mount remains default-off.
- QA passes.
- Commit created.
- Final git status clean.
- Push status not pushed.
