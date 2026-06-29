# N100-3 Memory and Personalization Stack

## Purpose

N100-3 adds a practical, safe memory and personalization stack that Nexus can use for continuity without turning memory into authority.

Implementation:

- `server/nexus-n100-memory-personalization-stack.js`

It builds on the existing `public/nexus-session-memory.js` model and remains server-side/test-callable only in this sprint.

## Memory Layers

The stack supports:

- session context
- active workflow summary
- last provider result summary
- selected item
- saved searches
- saved plans
- saved checklists
- safe user preferences with explicit consent
- preferred language or response style with explicit consent
- preferred location only when explicitly provided and consented
- clear/forget behavior

## Supported Prompts

The QA validates memory behavior for:

- Continue my farm job search.
- Show me the training plan we started.
- Use my usual location.
- What was the second job you found?
- Remind me what I needed to ask that program.
- Forget this search.
- Clear this conversation context.

## Safety Rules

Memory remains:

- in-memory only
- non-authoritative
- non-executing
- redacted
- explicit-consent-only for preferences
- explicit-location-only for saved location context

Memory must not:

- persist to browser or backend storage in this sprint
- infer location
- request geolocation
- authorize calls, messages, payments, purchases, appointments, provider contact, medical/pharmacy actions, emergency dispatch, camera/microphone activation, marketplace transactions, account changes, or backend writes
- bypass policy, confirmation, permission, or audit gates

## User Controls

The stack exposes helpers to:

- clear session context
- forget a saved search
- clear a saved preference
- refuse unconsented preference writes
- refuse implicit location memory

## QA

Focused QA:

- `scripts/nexus-n100-3-memory-personalization-stack-qa.js`

The QA verifies prompt behavior, redaction, explicit consent, explicit location, clear/forget, package alias, safe-suite wiring, and absence from Standard User runtime.

