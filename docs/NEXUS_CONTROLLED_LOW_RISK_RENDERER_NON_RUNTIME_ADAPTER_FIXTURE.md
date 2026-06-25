# Nexus Controlled Low-Risk Renderer Non-Runtime Adapter Fixture

## A. Phase Purpose

Phase 13R adds a non-runtime adapter fixture only. It bridges the Phase 13Q runtime adapter contract and the Phase 13P shell, but only in isolated QA.

The adapter fixture is not runtime wiring. It is not imported by `public/app.js`, is not loaded by `public/index.html`, does not render UI, and does not touch the hidden mount point.

It normalizes simulated metadata into shell-compatible input.

The Standard User build remains unchanged and default-off.

## B. Adapter Fixture Responsibilities

The adapter fixture may:

- accept plain metadata objects
- validate strict boolean flag behavior
- map safe prompt/category labels into allowlisted category IDs
- copy only safe text fields
- force unsafe authority fields to ineligible
- pass only shell-compatible input to the shell

The adapter fixture must not create cards, buttons, links, handlers, navigation, provider handoffs, permissions, confirmations, storage, network, or execution.

## C. Allowed Input Fields

Allowed input fields:

- `enableControlledLowRiskRendererVisibleUi`
- `mountExistsExactlyOnce`
- `mountHidden`
- `mountEmpty`
- `category`
- `intentCategory`
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

## D. Forbidden Input Fields

Forbidden behavior-capable fields:

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

Forbidden fields must be rejected or made ineligible. They must not be preserved into shell-compatible output.

## E. Category Normalization

Safe low-risk category mappings:

- `agriculture training` -> `agriculture_training`
- `agriculture_training` -> `agriculture_training`
- `irrigation learning` -> `irrigation_learning`
- `irrigation_learning` -> `irrigation_learning`
- `farm jobs` -> `farm_jobs_workforce_discovery`
- `workforce discovery` -> `farm_jobs_workforce_discovery`
- `farm_jobs_workforce_discovery` -> `farm_jobs_workforce_discovery`
- `AgriTrade` -> `agritrade_marketplace_preview`
- `agritrade` -> `agritrade_marketplace_preview`
- `agritrade_marketplace_preview` -> `agritrade_marketplace_preview`
- `crop issues` -> `crop_issue_education_help`
- `crop issue education` -> `crop_issue_education_help`
- `crop_issue_education_help` -> `crop_issue_education_help`

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

Unknown categories must remain ineligible.

## F. Side-Effect Prohibition

The adapter fixture must be pure and must not use:

- `document`
- `window`
- `localStorage`
- `sessionStorage`
- `fetch`
- `XMLHttpRequest`
- `location.href`
- `location.assign`
- `addEventListener`
- `setTimeout`
- `setInterval`
- `innerHTML`
- `insertAdjacentHTML`
- `onclick`

It must not perform DOM work, browser storage work, network work, navigation, provider handoff, permission prompts, confirmations, or execution dispatch.

## G. Acceptance Criteria

- Docs added.
- Non-runtime adapter fixture added.
- Adapter remains outside `public/`.
- Adapter is not imported by runtime.
- Shell remains outside runtime.
- Safe metadata can normalize into shell-compatible input.
- Unsafe metadata is rejected or made ineligible.
- QA passes.
- Commit created.
- Final git status clean.
- Push status not pushed.
