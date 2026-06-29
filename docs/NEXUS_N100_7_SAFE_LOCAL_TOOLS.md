# Nexus N100-7 Safe Local Tools

Sprint N100-7 adds a safe local tools contract for low-risk user-controlled actions. The contract is server-side and test-only in this phase; it is not loaded by the Standard User runtime, `server.js`, `public/app.js`, or `public/index.html`.

## Allowed Local Actions

- copy answer
- save checklist
- save plan
- save search criteria
- save provider result summary
- export plain text
- create in-app note
- create local task
- mark workflow complete
- clear session
- restart workflow
- open internal app section
- download checklist

These actions are represented as local-only prepared actions. Persistence, export, workflow reset, internal navigation, and checklist download require explicit confirmation in the contract. This phase does not write files, update browser storage, copy to the clipboard, navigate the app, or mutate backend state.

## Required Controls

Every prepared local action includes:

- visible action summary
- confirmation requirement where persistence/export/state change is involved
- cancel availability
- audit metadata
- safe success and failure responses
- `canExecute: false`
- `executionAuthority: "none"`
- `noExecutionAuthorized: true`

Confirmation is modeled as local fixture-only state. It is not real-world execution authority.

## Blocked Actions

The local tools boundary blocks:

- send email/message
- make phone call
- book appointment
- purchase/pay
- submit application/form
- provider contact
- location sharing
- dispatch

The blocked list also carries forward the existing N100 real-world action blocks for calls, messages, payments, provider handoff, location, camera, medical/pharmacy, marketplace, emergency, and account behavior.

## Runtime Boundary

N100-7 does not add visible UI and does not activate Standard User behavior. It introduces no provider handoff, no communication, no payment, no marketplace transaction, no location sharing, no dispatch, no medical/pharmacy action, no backend write, no storage write, no file write, and no clipboard write.

Future runtime activation must add a separate feature-gated UI integration, confirmation UX, audit event persistence design, and browser validation before any local tool is exposed to users.
