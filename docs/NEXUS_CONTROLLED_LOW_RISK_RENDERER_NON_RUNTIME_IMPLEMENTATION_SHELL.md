# Nexus Controlled Low-Risk Renderer Non-Runtime Implementation Shell

## Purpose

Phase 13P creates a non-runtime implementation shell for future controlled low-risk renderer eligibility and text-only output shape.

This is not an activation phase. The shell is not connected to the Standard User app, is not imported by `public/app.js`, does not render visible UI in production, and does not change runtime behavior.

The shell exists so future phases can review eligibility and safe text-only output structure before any activation is considered.

## Current Default-Off Boundary

The Standard User build remains default-off.

The hidden renderer mount point remains hidden and default-empty. Phase 13P does not make the mount visible, does not write to it, and does not add startup wiring.

Phase 13P introduces no:

- cards
- buttons
- links
- handlers
- provider handoff
- permission prompts
- confirmations
- navigation
- storage writes
- network calls
- execution

The first future renderer phase must remain preview-only and text-only.

## Shell Location

The implementation shell lives outside public runtime code:

`scripts/fixtures/nexus-controlled-low-risk-renderer-shell.js`

This location is intentionally non-runtime. It is for local-safe QA and contract review only.

## Shell Rules

The shell may expose pure helpers for:

- evaluating controlled low-risk renderer eligibility
- building a safe text-only model for eligible fixtures

The shell must remain pure:

- no DOM access
- no browser globals
- no storage
- no network calls
- no navigation
- no event listeners
- no timers
- no provider handoff
- no permission calls
- no confirmation calls
- no execution dispatch

## Eligibility Contract

Eligibility can return true only when all of these are true:

- `enableControlledLowRiskRendererVisibleUi === true`
- `mountExistsExactlyOnce === true`
- `mountHidden === true`
- `mountEmpty === true`
- category is one of the allowlisted low-risk categories
- `executionAllowed === false`
- `providerHandoff === false`
- `permissionRequest === false`
- `navigationAllowed === false`
- `requiresRawHtml !== true`
- `requiresButton !== true`
- `requiresLink !== true`
- `requiresHandler !== true`
- `requiresNetwork !== true`
- `requiresStorage !== true`
- `requiresConfirmation !== true`
- `requiresExecution !== true`

Allowlisted low-risk categories:

- `agriculture_training`
- `irrigation_learning`
- `farm_jobs_workforce_discovery`
- `agritrade_marketplace_preview`
- `crop_issue_education_help`

Blocked high-risk categories include:

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

## Text-Only Model Shape

The text model builder returns `null` when eligibility is false.

When eligibility is true, it returns a plain object with safe text-only fields:

- `title`
- `category`
- `summary`
- `previewLines`
- `safetyLabel`

The expected safety label language is: "Preview only. No action has been taken."

The model must not include executable, navigational, provider, permission, or markup fields such as HTML, raw HTML, buttons, links, hrefs, event handlers, action identifiers, provider fields, permission fields, confirmation fields, navigation fields, execute fields, or dispatch fields.

## Future Activation Boundary

A later phase must explicitly:

- connect the shell to runtime behind a strict boolean flag
- keep default-off behavior
- prove hidden/off-state safety
- prove high-risk blocks
- prove no side effects
- pass Standard User browser validation

Until that future phase is approved and validated, the shell remains QA-only and non-runtime.
