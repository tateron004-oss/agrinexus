# Nexus Session Memory Model

Phase: 11G2

## Purpose

This document defines the first Nexus session memory model skeleton. The model exists so future Nexus layers can keep short-lived conversational context without turning that context into authority to act.

The implementation artifact is:

- `public/nexus-session-memory.js`

The QA artifact is:

- `scripts/nexus-session-memory-qa.js`

This phase does not wire session memory into the live app, backend router, provider handoff, native bridge, call flow, health flow, marketplace flow, account flow, camera flow, location flow, or visible UI.

## Core Rule

Session memory is context, not authority.

It may help Nexus remember what the user was discussing during the current session. It must not unlock, trigger, authorize, route, stage, confirm, or execute any action.

Existing layers remain authoritative:

- intent classifier
- runtime tool registry
- policy engine
- planner safety guards
- confirmation gates
- permission gates
- provider boundaries
- native bridge validation
- audit architecture
- existing app and backend routers

## What Session Memory May Store

The `NexusSessionContext` skeleton may store short-lived, non-sensitive fields:

- schema version
- session ID scoped to the current session
- creation, update, and expiry timestamps
- current broad domain or topic
- current workflow surface
- last safe intent category
- last intent ID
- last selected tool ID
- last policy status
- last plan ID
- active topic label
- redacted safe summary
- non-sensitive conversation hints
- unresolved clarification text after redaction
- last safe next step
- reset reason
- broad sensitive flags such as `contact`, `location`, `health`, or `payment`
- safety notes

## What Session Memory Must Never Store

Session memory must never store raw or durable sensitive data by default:

- passwords, passcodes, secrets, tokens, or credentials
- raw phone numbers
- raw email addresses
- full contact lists
- precise location or coordinates
- medical diagnosis, health details, or patient information
- payment cards, wallet details, or account data
- identity verification data
- emergency contact details
- marketplace buyer or seller private details
- provider deep links
- executable URLs
- native bridge payloads
- pending payment intents
- raw messages to send
- callback, handler, adapter, dispatch, or route references

Sensitive values must be redacted or excluded before serialization.

## Pending Task Skeleton

The `NexusPendingTask` skeleton is for future tracking of unresolved work. It may describe what is missing or blocked, but it is not an executable pending action.

Required non-execution fields:

```js
{
  canExecute: false,
  executionAuthority: "none"
}
```

Pending tasks may describe:

- source text after redaction
- intent ID
- selected tool ID
- domain
- risk tier
- non-executing status
- safe summary
- required inputs
- permission gates
- confirmation gates
- blocked reason
- next safe step
- expiry time
- whether future audit would be required

Pending tasks must not contain:

- provider dispatch payloads
- native bridge payloads
- `tel:` URLs
- WhatsApp or Telegram deep links
- message-send payloads
- payment-send payloads
- camera, location, health, emergency, account, marketplace, or contact execution hooks

If an executable action type is supplied to the skeleton, the model downgrades it to context-only and keeps execution authority as none.

## Serialization

The safe serialization helper returns a redacted snapshot only:

- no raw phone numbers
- no raw email addresses
- no executable keys
- no function values
- no provider URLs
- no native bridge payloads
- `canExecute: false`
- `executionAuthority: "none"`

Serialized memory is not an action queue.

## Reset And Clear Behavior

Session reset and clear helpers remove active topic, summaries, workflow surface, policy status, plan IDs, unresolved clarification, and safe hints. They may preserve the short-lived session ID only so the current browser session can keep a non-sensitive continuity marker.

Reset does not retain executable state because executable state is never stored.

## Runtime Boundary

Phase 11G2 intentionally does not load `public/nexus-session-memory.js` from `public/index.html` and does not consume it from `public/app.js` or `server.js`.

Future wiring must be a separate reviewed phase. That phase must prove:

- memory remains non-authoritative
- policy is re-evaluated before future action
- confirmation is fresh
- permissions are fresh
- audit logging is ready
- sensitive data is redacted
- no provider opens from memory alone

## Future Rollout Phases

Recommended rollout:

1. Phase 11G2: static non-executing model skeleton.
2. Phase 11G3: observation-only metadata attachment, still hidden and non-authoritative.
3. Phase 11G4: browser in-memory context for low-risk conversational continuity.
4. Phase 11G5: pending task summary display with no execution.
5. Phase 11G6: role/privacy review for sensitive session context.
6. Phase 11G7: explicit consent model for any durable memory.
7. Phase 11G8: audit-backed controlled pending action lifecycle.

## QA Coverage

`scripts/nexus-session-memory-qa.js` verifies:

- safe context defaults
- reset and clear behavior
- sensitive field exclusion
- pending task `canExecute: false`
- pending task `executionAuthority: "none"`
- executable action type downgrading
- safe serialization
- no fetch, storage, provider dispatch, native bridge, camera, location, marketplace, health, emergency, account, message, payment, or call hooks
- no runtime wiring into `index.html`, `app.js`, or `server.js`
- existing planner, policy, and registry posture remains available

Required local-safe validation:

```powershell
git diff --check
node --check server.js
node --check public\app.js
node --check public\nexus-session-memory.js
node --check scripts\nexus-session-memory-qa.js
node scripts\nexus-session-memory-qa.js
node scripts\nexus-intent-classifier-qa.js
node scripts\nexus-tool-registry-runtime-qa.js
node scripts\nexus-policy-engine-qa.js
node scripts\nexus-planner-qa.js
node scripts\nexus-planner-safety-hardening-qa.js
node scripts\nexus-policy-observation-qa.js
node scripts\nexus-plan-observation-qa.js
node scripts\qa-suite.js all-safe
```
