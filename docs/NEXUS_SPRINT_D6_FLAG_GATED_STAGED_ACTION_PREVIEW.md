# Nexus Sprint D6 - Flag-Gated Staged Action Preview

Current base: `516d37d45fd89d2ffcecea62d0e907d3fbabcfe9`

Sprint D6 adds the first runtime-adjacent controlled staged action preview for low-risk Standard User guidance. It is guarded by the explicit default-off flag:

`NEXUS_CONTROLLED_STAGED_ACTIONS_ENABLED`

The preview is text-only, review-only, and rendered into the existing hidden low-risk renderer mount only when the flag is set to boolean `true` in the browser runtime. Default Standard User behavior remains unchanged.

## What Changed

- `public/app.js` can build a `nexus.sprintD6.controlledStagedActionPreview.v1` object downstream of existing low-risk controlled action preview readiness.
- The preview includes:
  - staged action id
  - staged action type
  - title and summary
  - evidence requirement
  - source packet requirement
  - safe use notes
  - limitations
  - blocked execution channels
  - explicit no-action disclosure
- `public/styles.css` includes compact read-only styling for the staged preview surface.
- No button, link, form, route, provider handoff, permission prompt, storage write, network call, backend write, or pending real-world action was added.

## Flag-Off Behavior

When `NEXUS_CONTROLLED_STAGED_ACTIONS_ENABLED` is absent, false, or any value other than boolean `true`:

- the hidden mount remains hidden;
- the hidden mount remains empty;
- `data-visible-renderer-enabled` remains `false`;
- no staged action preview appears;
- existing Standard User low-risk suggestion labels and controlled action previews remain unchanged;
- no behavior changes occur.

## Flag-On Behavior

When the flag is explicitly boolean `true`, eligible low-risk prompts may produce a review-only staged preview:

- `Help me find agriculture training`
- `Teach me how irrigation works`
- `Show me farm jobs`
- `Browse AgriTrade`
- `I need help with crop issues`
- `I need field support for my farm`

The preview is a visible review artifact only. It does not execute or prepare execution.

## Excluded and High-Risk Behavior

The preview must not render for high-risk, sensitive, transactional, provider, permission, or execution-oriented requests, including:

- calls and messages
- WhatsApp or Telegram handoffs
- payments or checkout
- buy/sell marketplace transactions
- provider contact
- camera or location requests
- health, medical, pharmacy, telehealth, or emergency action
- backend writes
- pending real-world actions

## No-Execution Guarantees

Sprint D6 preserves these guarantees:

- `reviewOnly: true`
- `requiresUserApproval: true`
- `executionAuthority: false`
- `providerHandoffAllowed: false`
- `pendingActionCreationAllowed: false`
- `backendWriteAllowed: false`
- `networkSideEffectAllowed: false`
- `storageSideEffectAllowed: false`
- `permissionRequestAllowed: false`
- `externalNavigationAllowed: false`

The required blocked execution channels are:

- call
- message
- payment
- location
- camera
- provider
- emergency
- medical
- pharmacy
- backend-write
- pending-action

## Evidence and Verification

Every visible staged preview must include:

- Evidence & Verification copy
- source packet requirement
- safe use notes
- limitations
- "Review only - no action has been taken."

## Browser Validation Boundary

Flag-off browser validation should show no staged preview and no console warning/error. Flag-on validation may be performed only through an explicit local/test flag setting and must remain text-only and no-execution.

If the browser environment blocks main-world flag mutation, deterministic QA remains authoritative for the flag-on builder contract, while Standard User browser validation remains required for flag-off safety.
