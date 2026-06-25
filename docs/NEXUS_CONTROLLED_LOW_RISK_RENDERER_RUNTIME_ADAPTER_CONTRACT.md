# Nexus Controlled Low-Risk Renderer Runtime Adapter Contract

## A. Phase Purpose

Phase 13Q defines a future runtime adapter boundary for the controlled low-risk renderer. This is still a default-off contract phase.

This phase does not connect the shell to runtime, does not import the shell into `public/app.js`, does not load the shell from `public/index.html`, does not render UI, and does not change Standard User behavior.

The purpose is to define what a later adapter would have to prove before the non-runtime shell could ever be connected to the Standard User app.

## B. Adapter Boundary Definition

The future runtime adapter is a narrow translation layer. It may eventually convert safe Nexus runtime metadata into the pure shell input shape.

The adapter may only pass plain, inert, text-oriented metadata. Allowed adapter fields are limited to:

- `enableControlledLowRiskRendererVisibleUi`
- `mountExistsExactlyOnce`
- `mountHidden`
- `mountEmpty`
- `category`
- `title`
- `summary`
- `previewLines`
- `executionAllowed`
- `providerHandoff`
- `permissionRequest`
- `navigationAllowed`
- `requiresRawHtml`
- `requiresButton`
- `requiresLink`
- `requiresHandler`
- `requiresNetwork`
- `requiresStorage`
- `requiresConfirmation`
- `requiresExecution`

The adapter is not execution authority. It is only a future review-only metadata filter.

## C. Rejected Runtime Data

The adapter must reject or drop anything capable of creating behavior. Rejected runtime data includes:

- `html`
- `rawHtml`
- `button`
- `buttons`
- `link`
- `links`
- `href`
- `url`
- `onClick`
- `onclick`
- `handler`
- `handlers`
- `callback`
- `callbacks`
- `action`
- `actionId`
- `dispatch`
- `execute`
- `provider`
- `providerAction`
- `permission`
- `permissionRequestDetails`
- `confirmation`
- `confirmationAction`
- `navigation`
- `route`
- `open`
- `target`
- `method`
- `headers`
- `body`
- `fetch`
- `storage`
- `script`
- `style`
- `iframe`
- `form`
- `input`

Rejected fields may appear in documentation and QA only as forbidden examples. They must not appear in the allowed adapter field list.

## D. Default-Off Runtime Rules

Future runtime integration must remain default-off unless:

`enableControlledLowRiskRendererVisibleUi === true`

Only the literal boolean `true` can satisfy that flag check.

These must not enable rendering:

- true as a string
- `1`
- `"1"`
- yes
- on
- missing flag
- null
- undefined
- object
- array
- environment typo
- server-side truthy value

The flag does not bypass eligibility checks, category checks, hidden mount point preflight checks, or side-effect prohibitions.

## E. Hidden Mount Point Preflight Rules

Before any future render attempt, the adapter must verify:

- mount exists exactly once
- mount is hidden
- mount has `aria-hidden="true"`
- mount is default-empty
- mount has `data-visible-renderer-enabled="false"` until activation
- mount contains no children before rendering
- mount has no event handlers
- mount has no links
- mount has no buttons
- mount has no forms

If any preflight check fails, the adapter must return no-op. No-op means no DOM mutation, no visible renderer card, no provider handoff, no permission prompt, no confirmation flow, no navigation, no storage write, no network call, and no execution.

## F. Category Boundary

Allowed low-risk categories:

- `agriculture_training`
- `irrigation_learning`
- `farm_jobs_workforce_discovery`
- `agritrade_marketplace_preview`
- `crop_issue_education_help`

Blocked categories:

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

Categories outside the allowlist must be treated as blocked until a separate safety phase expands the allowlist.

## G. Side-Effect Prohibition

The future adapter must not directly or indirectly cause:

- DOM rendering by default
- navigation
- network calls
- storage writes
- permissions
- provider handoff
- confirmation flow
- phone call
- message send
- payment
- booking
- camera/microphone request
- location request
- execution dispatch
- background task

The adapter must not add visible buttons, visible links, click handlers, form controls, provider controls, permission controls, confirmation controls, or execution controls.

## H. Future Activation Boundary

A later phase may only connect the adapter to runtime if it:

- imports or embeds the adapter behind a strict default-off flag
- proves Standard User off-state behavior remains unchanged
- proves high-risk prompts cannot render
- proves rendered output is text-only
- proves no buttons, links, or handlers are present
- proves no provider, permission, confirmation, or execution path exists
- passes manual Standard User browser validation

Until that future phase is explicitly approved, Phase 13Q remains documentation and QA only.

## I. Phase 13Q Acceptance Criteria

- Documentation added.
- Static QA added.
- No runtime import.
- No visible UI.
- No Standard User behavior change.
- QA passes.
- Commit created.
- Final git status clean.
- Not pushed.
