# Nexus Session Memory Observation QA

Phase: 11G3

## Purpose

This document describes the read-only QA guard for the Nexus session memory skeleton. The guard verifies that the Phase 11G2 model can produce safe observation snapshots without becoming runtime authority.

The QA artifact is:

- `scripts/nexus-session-memory-observation-qa.js`

## Read-Only Boundary

Session memory observation remains read-only. It must not authorize, unlock, dispatch, trigger, route, auto-open, auto-confirm, or execute any provider, call, message, payment, location, camera, marketplace, account/profile, health, or emergency behavior.

Observation snapshots are context summaries only. They are not pending actions, not provider payloads, and not an execution queue.

Required invariant:

```js
{
  canExecute: false,
  executionAuthority: "none"
}
```

## Allowed Observation Fields

Observation snapshots may include safe fields such as:

- schema version
- serialized timestamp
- broad current domain
- current workflow surface label
- last safe intent category
- last intent ID
- last selected tool ID
- last policy status
- last plan ID
- redacted safe summary
- non-sensitive hints
- reset reason
- broad sensitive flags
- pending task status summaries
- required input summaries
- permission or confirmation gate summaries after redaction
- safety notes

## Excluded Fields

Observation snapshots must exclude:

- raw phone numbers
- contact identifiers or full contact lists
- email addresses
- physical addresses
- precise location or coordinates
- health details
- payment details
- account/profile secrets
- provider credentials
- native bridge payloads
- provider URLs
- `tel:` links
- WhatsApp or Telegram deep links
- message-send payloads
- payment intents
- route targets
- modal targets
- callback, handler, adapter, dispatch, or executor references

## Pending Task Observation Guarantees

Observed pending tasks may describe unresolved or blocked work, but they must remain non-executing:

- `canExecute` remains `false`
- `executionAuthority` remains `"none"`
- executable action types are downgraded to `context_only`
- sensitive payload fields are excluded
- provider/native/payment/message fields are excluded
- policy must be re-evaluated before any future action

Blocked categories covered by QA:

- provider
- call
- message
- payment
- location
- camera
- marketplace
- account/profile
- health
- emergency

## Runtime Wiring Boundary

Phase 11G3 does not load `public/nexus-session-memory.js` from `public/index.html`.

Phase 11G3 does not consume session memory from:

- `public/app.js`
- `server.js`
- the planner
- the policy engine
- the tool registry
- the native bridge
- call/contact flows
- health/telehealth flows
- marketplace/payment flows
- map/location flows
- camera flows
- account/profile flows
- emergency flows
- confirmation flows

Future runtime wiring requires a separate reviewed phase.

## QA Coverage

`scripts/nexus-session-memory-observation-qa.js` verifies:

- the module loads safely in Node
- read-only observation snapshots can be produced
- sensitive data is redacted or excluded
- pending task observations remain non-executing
- blocked categories cannot gain executable authority
- no fetch, storage, provider, native bridge, route, permission, camera, location, marketplace, payment, account, health, emergency, or confirmation hooks are introduced
- app/server/index runtime wiring remains absent
- planner, policy, and registry safety posture remains guarded

Recommended validation:

```powershell
node scripts\nexus-session-memory-qa.js
node scripts\nexus-session-memory-observation-qa.js
npm.cmd run qa:nexus-session-memory
npm.cmd run qa:nexus-session-memory-observation
node scripts\qa-suite.js nexus-workforce
node scripts\qa-suite.js all-safe
```
