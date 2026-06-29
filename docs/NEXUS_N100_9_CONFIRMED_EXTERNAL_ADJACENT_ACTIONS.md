# Nexus N100-9 Confirmed External-Adjacent Actions

Sprint N100-9 introduces a low-risk external-adjacent action contract. It remains server-side/test-only in this phase and is not wired into Standard User runtime behavior.

## Allowed Prepared Actions

- create local reminder/task
- prepare calendar draft
- prepare email draft
- export/download plain text
- save to local app storage
- open internal section after confirmation

Calendar draft, email draft, and local app storage preparation require a compatible permission state before confirmation. Export/download and internal section preparation still require explicit confirmation in this contract.

## Required Controls

Every action includes:

- user-visible action summary
- preview text
- permission requirement when applicable
- explicit confirmation requirement
- cancel path
- audit metadata
- safe success and failure response
- `canExecute: false`
- `executionAuthority: "none"`
- `noExecutionAuthorized: true`

Confirmed actions are `confirmed_fixture_only`; this means the user has approved a prepared local review package, not that Nexus performed a real external action.

## Blocked Actions

N100-9 still blocks:

- sending email/message
- making calls
- payments/purchases
- submitting applications/forms
- external provider booking
- dispatch
- location sharing
- account creation

It also carries forward the N100 real-world action block list and the N100-7 safe local tool blocks.

## Runtime Boundary

This phase adds no UI, no backend writes, no browser storage writes, no file writes, no external navigation, no provider handoff, no email/message sending, no calls, no payments, no location sharing, no booking, and no dispatch. Future runtime activation requires feature gating, browser validation, audit persistence design, and explicit user approval controls.
