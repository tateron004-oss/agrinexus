# Nexus Session Memory Reset/Consent UX Plan

Phase: 11G5

## Purpose

This plan defines how a future Nexus session memory reset and consent experience should work before any visible UI or runtime behavior is added.

This phase is planning, documentation, and QA only. It does not add visible UI, runtime wiring, storage, persistence, user tracking, consent state, planner integration, provider integration, native bridge integration, route hooks, permission changes, confirmation changes, or execution authority.

Session memory is temporary session context, not authority.

## User-Facing Explanation Principles

Future memory UX should explain, in plain language:

- Nexus may remember temporary context during the current session.
- Temporary context helps with continuity, such as the current topic or last safe next step.
- Memory does not authorize actions.
- Memory does not confirm actions.
- Memory does not store sensitive information by default.
- Memory can be reset.
- Resetting memory only clears in-app session context.
- Existing permission, confirmation, policy, provider, and audit gates remain in charge.

Suggested plain-language tone:

> Nexus can keep temporary context while you use the app, such as the topic you are working on. This does not let Nexus take actions for you. You can reset this context anytime.

## Future Consent States

These states are documentation-only for future design:

| State | Meaning | Execution authority |
| --- | --- | --- |
| `not_shown` | No memory notice has been shown. | None |
| `informational_notice_shown` | User has seen a plain-language memory notice. | None |
| `explicit_user_acknowledgment` | User acknowledged that temporary context may be shown. | None |
| `reset_requested` | User requested that temporary context be cleared. | None |
| `reset_completed` | Temporary in-memory context was cleared. | None |

Consent to remember context is not consent to execute.

Consent to display context is not consent to execute.

Consent to reset context is not consent to delete external data.

## Future Reset Behaviors

A future reset should only clear in-memory/session context, such as:

- current topic
- workflow surface
- pending task preview
- safe hints
- unresolved clarification text
- last safe step
- redacted safe summary
- broad sensitive flags

Reset may preserve a short-lived anonymous session marker only if needed for the current browser session. It must not preserve sensitive details.

## What Reset Must Never Do

Reset must never:

- cancel real-world services
- alter provider state
- hang up calls
- send messages
- delete accounts
- change passwords or profile records
- change payments
- alter health or emergency state
- modify marketplace listings
- submit orders
- affect native permissions
- revoke operating-system permissions
- clear audit logs
- delete external provider data
- bypass confirmation gates
- bypass permission gates
- trigger workflows
- stage actions
- execute anything

## Consent Boundaries

Consent language must remain narrow:

- User consent to remember context only allows temporary context retention.
- User consent to display context only allows a safe, redacted display.
- User consent to reset only clears local/session context.
- User consent for memory never confirms calls, messages, payments, marketplace transactions, camera, location, health, emergency, account/profile changes, native bridge actions, or provider handoffs.

Any future durable memory requires a separate consent model, privacy review, deletion path, export path, retention policy, and audit review.

## Standard User Demo Implications

The current Standard User demo remains unchanged:

- no new session memory notice
- no new memory chips
- no new reset button
- no debug panel
- no memory consent state
- no hidden memory metadata exposed
- no new route behavior
- no new permission behavior
- no new confirmation behavior

The existing demo should continue to show controlled, preview-oriented guidance with explicit gates for sensitive or high-impact actions.

## Future UI Copy Examples

### Memory Notice

> Nexus can remember temporary context during this session, like the topic you are working on. This does not let Nexus take actions, contact anyone, use permissions, or change records.

### Reset Control

> Reset session context

Supporting copy:

> Clears the topic and temporary hints Nexus is using in this session. It does not delete accounts, records, provider data, payments, calls, messages, health details, or audit logs.

### Pending Task Explanation

> Nexus is keeping a read-only note that this task needs more information. No action has been taken.

### Sensitive-Data Warning

> Do not enter passwords, payment details, private health details, full contact lists, or precise location unless a reviewed workflow asks for them with the proper permission and confirmation.

### Reset Completed

> Session context reset. Nexus will ask again if it needs details.

## QA Guard Recommendations

Static QA should verify:

- no visible session memory UI was added
- no memory consent UI was added
- no reset button was added
- `index.html`, `app.js`, and `server.js` do not load or consume `NexusSessionMemory`
- no localStorage/sessionStorage/indexedDB persistence was added for session memory
- no consent state tracking was added
- no fetch/network calls were introduced
- no provider, native bridge, route, permission, confirmation, or execution hooks were added
- reset remains model-only and in-memory
- existing session memory, observation, and UI readiness QA still pass
- docs do not describe memory as execution authority

## Future Rollout Phases

1. Phase 11G5: reset/consent UX plan and static QA guard.
2. Phase 11G6: hidden developer-only reset/consent mockup, no active runtime wiring.
3. Phase 11G7: read-only notice copy in a non-production/debug surface.
4. Phase 11G8: user-visible reset control for in-memory context only.
5. Phase 11G9: explicit consent model for any durable memory, with privacy review.
6. Phase 11G10: audit-backed pending task lifecycle, still subordinate to policy, permission, confirmation, and provider gates.

## Required Boundary For Implementation

Future implementation must preserve:

```js
{
  canExecute: false,
  executionAuthority: "none"
}
```

The memory layer must continue to answer only one question: what safe, temporary context can Nexus remember or clear?

It must never answer: may Nexus act?
