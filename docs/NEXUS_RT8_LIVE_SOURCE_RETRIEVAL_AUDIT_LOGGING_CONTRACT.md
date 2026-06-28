# Nexus RT8 Live Source Retrieval Audit Logging Contract

RT8 adds an inert audit logging contract for live source retrieval. The contract records what Nexus would need to know about a read-only source lookup while preserving the current no-execution posture.

## Scope

The audit contract covers live source retrieval and orchestration metadata only. It does not write audit records to storage, transmit audit events, contact providers, open URLs, request permissions, or create pending real-world actions.

## Required Audit Fields

Every live source retrieval audit event must include:

- `eventType`
- `requestId`
- `providerId`
- `intent`
- `riskTier`
- `allowed`
- `blockedReason`
- `providerStatus`
- `retrievedAt`
- `sourceCount`
- `citationCount`
- `confidence`
- `noExecutionAuthorized`
- `noLocationPermissionRequested`
- `noProviderContactAuthorized`
- `noBackendWritePerformed`
- `redactionStatus`

## Blocked and Error Coverage

Blocked requests are audited with `allowed: false`, a visible `blockedReason`, and a provider status such as `blocked_by_policy`. Provider failures are represented with `providerStatus: provider_error` or another non-executing status. Missing configuration remains a safe skipped/missing-config state.

## Redaction Rules

Audit events must not contain secrets, API keys, authorization headers, bearer tokens, passwords, phone numbers, email addresses, or unnecessary private user data. Sensitive values are redacted before an event is considered safe.

## No-Execution Guarantees

The RT8 contract requires:

- `noExecutionAuthorized: true`
- `noLocationPermissionRequested: true`
- `noProviderContactAuthorized: true`
- `noBackendWritePerformed: true`

Audit logging must never trigger execution. It cannot dispatch, call, message, schedule, pay, buy, submit, open a provider handoff, request location, request camera access, or write backend state.

## Standard User Runtime Boundary

The contract is used by the server-side live source orchestrator only. It is not loaded by `public/index.html`, `public/app.js`, or the top-level `server.js` Standard User startup path. Standard User behavior remains unchanged unless a later explicit runtime phase enables a guarded read-only source lane.

## QA Expectations

RT8 QA verifies:

- the contract exports the required field list
- audit events are created for allowed, blocked, and provider-error states
- redaction removes sensitive values
- existing orchestrator results carry safe audit events
- no backend write, storage, navigation, provider handoff, permission, call, message, payment, location, camera, medical, pharmacy, marketplace, or emergency execution path is introduced
- the focused QA is included in the local-safe suites
