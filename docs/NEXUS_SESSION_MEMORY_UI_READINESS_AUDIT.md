# Nexus Session Memory UI Readiness Audit

Phase: 11G4

## Purpose

This audit defines how Nexus session memory could eventually be surfaced in the Standard User build without giving memory execution authority. This phase is documentation and QA only. It does not add visible UI, runtime wiring, persistence, route behavior, provider behavior, permission behavior, confirmation behavior, or execution behavior.

Session memory is context, not authority.

Current artifacts reviewed:

- `public/index.html`
- `public/app.js`
- `public/nexus-session-memory.js`
- `scripts/nexus-session-memory-qa.js`
- `scripts/nexus-session-memory-observation-qa.js`
- `scripts/nexus-policy-observation-qa.js`
- `scripts/nexus-plan-observation-qa.js`
- low-risk suggestion and controlled-action preview QA
- call, provider handoff, confirmation, telehealth, map, and app behavior QA

## Existing UI Areas Reviewed

The Standard User build already has several UI patterns that could inform a future memory surface:

- Nexus captions panel: read-only response and typed reply surface.
- `nexusBehaviorStatus`: compact assistant status text.
- Level 1 suggestion labels: display-only category labels.
- Controlled action preview card: preview-only, low-risk, non-executing guidance.
- Non-executing confirmation prototype: Ask Nexus/full-assistant-only controls that do not execute.
- Agent reasoning panel: explanatory, observation-oriented content.
- Workflow modal confirmation patterns: user-triggered controls with explicit confirmation.
- Health/telehealth status panels: local-demo status only, not live provider execution.
- Map/location controls: permissioned and user-triggered.

These patterns are useful because they already separate explanation from execution.

## Candidate Future UI Surfaces

Future phases may consider one or more of these surfaces, only after separate review:

### Debug-Only Session Context Inspector

A developer/debug-only panel could show a redacted memory snapshot for QA. It should be hidden from normal users by default and must not include execution controls.

Allowed examples:

- schema version
- current domain
- workflow surface
- active topic
- last safe intent ID
- last selected tool ID
- last policy status
- last safe step
- reset reason
- redacted notes

### Read-Only Assistant Status Line

A compact status line could say something like:

- `Context: learning`
- `Topic: irrigation basics`
- `Waiting for clarification`

This must remain descriptive. It must not become a permission or confirmation state.

### Non-Sensitive Current Topic Chip

A small chip could show a broad topic label, such as `Training`, `Jobs`, `Field Support`, or `Marketplace`. It should be visually distinct from action buttons and must not be clickable unless a future route is explicitly reviewed and guarded.

### Reset Session Memory Control

A future user-triggered reset control may be appropriate. It should only clear in-memory context. It must not clear audit logs, execute cancellation side effects, change profile data, or alter pending backend actions.

### Pending Task Read-Only Preview

A future preview could summarize unresolved safe context:

- missing clarification
- required permission
- required confirmation
- blocked or not implemented status
- next safe step

It must not be an execution queue. It must not include `Call now`, `Send now`, `Pay now`, `Dispatch`, `Open camera`, `Use location`, or other execution affordances.

## Explicitly Unsafe UI Surfaces

Do not create these surfaces from session memory:

- confirmation bypass controls
- auto-run buttons
- hidden execution queues
- provider/call/message/payment task runners
- location or camera activation buttons sourced from memory
- account/profile mutation controls sourced from memory
- health or emergency action controls sourced from memory
- marketplace buy/sell/payment controls sourced from memory
- native bridge dispatch controls sourced from memory
- automatic workflow opening from memory
- automatic permission requests from memory

## Safe Display Fields

Safe fields are broad, redacted, and non-authoritative:

- `schemaVersion`
- `memorySource`
- `currentDomain`
- `currentWorkflowSurface`
- `lastIntentCategory`
- `lastIntentId`
- `lastToolId`
- `lastPolicyStatus`
- `lastPlanId`
- `activeTopic`
- `safeSummary`
- `unresolvedClarification`
- `lastSafeStep`
- `resetReason`
- `sensitiveFlags`
- `notes`
- pending task status summaries
- required input summaries after redaction
- permission/confirmation gate summaries after redaction
- `canExecute: false`
- `executionAuthority: "none"`

## Fields That Must Never Be Displayed

Never display raw:

- phone numbers
- email addresses
- full contact names or contact lists without consent and review
- physical addresses
- precise location coordinates
- health details, symptoms, diagnosis, or patient details
- payment details
- account/profile secrets
- identity data
- provider credentials
- native bridge payloads
- `tel:` links
- WhatsApp or Telegram deep links
- message-send payloads
- payment intents
- route targets
- modal targets
- callback, handler, adapter, dispatch, or executor references

## Consent And Reset Expectations

Future visible memory surfaces should include:

- plain-language explanation that memory is session context only
- a user-triggered reset/clear option
- no durable storage without explicit consent
- no sensitive memory without dedicated privacy review
- no hidden profile write
- no audit log deletion from a memory reset

Logout, profile switch, or explicit reset should clear in-memory session context.

## Standard User Demo Implications

The current Standard User demo should remain unchanged. Phase 11G4 does not add new panels, labels, chips, buttons, debug output, or route behavior.

The meeting/demo build should continue to show:

- low-risk previews only when appropriate
- controlled-action previews as non-executing
- confirmation gates for controlled/high-impact actions
- call/contact/provider handoff boundaries
- permissioned map, camera, and telehealth behavior
- no hidden/debug-only session memory metadata

## Future Phased Rollout Recommendation

1. Phase 11G4: UI readiness audit and static guard.
2. Phase 11G5: debug-only hidden inspector behind an explicit developer flag.
3. Phase 11G6: read-only current topic/status chip for low-risk context only.
4. Phase 11G7: user-visible reset control for in-memory context.
5. Phase 11G8: pending task read-only preview with no execution controls.
6. Phase 11G9: privacy and role review before any durable memory.
7. Phase 11G10: audited controlled pending task lifecycle, still subordinate to policy and confirmation gates.

## QA Guard Recommendations

The Phase 11G4 static QA guard should verify:

- `index.html`, `app.js`, and `server.js` do not load or consume `NexusSessionMemory`.
- no visible session memory UI is introduced.
- no session memory route hooks, provider hooks, native bridge hooks, fetch calls, storage writes, confirmation bypasses, permission changes, or execution hooks are introduced.
- existing session memory QA still passes.
- observation QA still passes.
- Standard User safety posture remains unchanged.

Required validation should include:

```powershell
node scripts\nexus-session-memory-qa.js
node scripts\nexus-session-memory-observation-qa.js
node scripts\nexus-session-memory-ui-readiness-qa.js
node scripts\qa-suite.js nexus-workforce
node scripts\qa-suite.js all-safe
```
