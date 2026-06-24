# Nexus Controlled Low-Risk Renderer Actual Hidden Mount Point Default-Empty Implementation

## 1. Purpose and Scope

Phase 13L adds the first real Standard User DOM mount point for the controlled low-risk renderer path. The mount point is intentionally hidden, default-empty, inert, and unwired.

This phase is not visible renderer activation. It does not render cards, labels, suggestions, previews, buttons, links, forms, controls, or workflows.

## 2. Files and Runtime Boundary

The only runtime file changed is `public/index.html`.

The mount point is:

`nexus-controlled-low-risk-renderer-root`

It is present exactly once, hidden by default, marked `aria-hidden="true"`, and carries metadata showing that visible rendering, execution, provider handoff, permission requests, and navigation are disabled.

No `public/app.js` startup wiring was added. No `server.js` behavior was changed.

## 3. Mount Point Contract

The mount point must remain:

- a single empty `div`
- hidden
- `aria-hidden="true"`
- `data-nexus-renderer-mode="hidden"`
- `data-visible-renderer-enabled="false"`
- `data-execution-allowed="false"`
- `data-provider-handoff="false"`
- `data-permission-request="false"`
- `data-navigation-allowed="false"`

It must not contain child content, visible text, scripts, cards, links, buttons, forms, inputs, inline events, or action affordances.

## 4. Explicitly Not Added

Phase 13L does not add:

- feature flag activation
- renderer startup calls
- helper invocation from Standard User startup
- visible cards or preview panels
- action buttons
- links or navigation controls
- click handlers
- form submission
- provider handoff
- permission requests
- network calls
- storage writes
- confirmation modals
- execution behavior

## 5. Updated QA Meaning

Before Phase 13L, several guards required the future mount point to be absent from `public/index.html`.

From Phase 13L forward, the required invariant changes:

- the mount point must be present exactly once
- it must be hidden
- it must be empty
- it must be unwired
- it must not render controlled low-risk content
- it must not create execution, navigation, provider, permission, network, storage, or confirmation behavior

Older absence-only QA was updated to preserve the original safety intent while allowing this specific hidden/default-empty root.

## 6. Standard User Safety Conclusion

The Standard User build remains behaviorally unchanged. The hidden mount point is a dormant DOM target only. It does not make the controlled low-risk renderer visible and does not grant any execution authority.

## 7. Future Gates

Before any future visible runtime wiring, the project still needs:

- dedicated browser regression validation with the mount point present
- explicit visible feature flag activation review
- renderer startup wiring review
- Standard User manual browser validation
- confirmation that low-risk-only rendering remains inert
- confirmation that high-risk, provider, call, message, payment, marketplace transaction, health, emergency, camera, location, account, and permission paths remain blocked or gated

