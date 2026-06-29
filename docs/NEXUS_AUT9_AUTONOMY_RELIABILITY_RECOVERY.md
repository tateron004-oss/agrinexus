# Nexus AUT9 Autonomy Reliability and Recovery

AUT9 adds an inert reliability and recovery contract for controlled multi-step Nexus workflows.

## Scope

AUT9 covers safe recovery states for:

- user cancellation
- expired workflow context
- provider error
- missing provider or source configuration
- empty results
- stale source data
- blocked action requests
- failed workflow steps
- unsafe automatic retry attempts

This phase does not wire new runtime behavior into the Standard User build. It adds a server-side contract module, deterministic QA, and documentation only.

## Recovery Contract

`server/nexus-autonomy-workflow-reliability-recovery.js` exports:

- `AUTONOMY_WORKFLOW_RECOVERY_REASONS`
- `normalizeReason`
- `buildAutonomyWorkflowRecovery`
- `isSafeAutonomyWorkflowRecovery`

Every recovery object must preserve:

- `executionAuthority: false`
- `noExecutionAuthorized: true`
- `noProviderContactAuthorized: true`
- `noProviderHandoff: true`
- `noLocationPermissionRequested: true`
- `noPermissionPromptAuthorized: true`
- `noBackendActionWritePerformed: true`
- `noAutoRetry: true`
- `noNavigationAuthorized: true`
- `sessionOnly: true`

## Safe Retry Posture

AUT9 blocks background retry loops. Retry is user-initiated only and must pass a fresh safety check.

Nexus may say that the user can try again manually, refine the request, ask for a checklist, ask for a comparison, or start a new low-risk workflow. Nexus must not retry a provider, contact anyone, submit anything, call, message, book, buy, pay, dispatch, share location, activate hardware, or write backend action state as recovery behavior.

## Provider and Source Recovery

Provider or source failures are normalized into safe messages:

- missing configuration stays not connected yet
- provider errors are redacted and do not expose stack traces or secrets
- empty results ask for a clearer query or a safe artifact
- stale sources are labeled stale and require manual verification

## Browser and Runtime Posture

AUT9 does not require browser validation because no Standard User-visible runtime behavior changes. Browser validation is required before any future phase renders recovery state, persists recovery state, or connects recovery state to active workflow UI.

## QA

`scripts/nexus-aut9-autonomy-reliability-recovery-qa.js` verifies:

- all recovery reasons are represented
- every recovery object is safe and non-executing
- cancellation, expired workflow, provider error, missing config, empty results, stale source, blocked action, failed step, and unsafe retry are covered
- provider errors are redacted
- automatic retries remain disabled
- package alias and safe-suite wiring are present
- Standard User runtime, `server.js`, and `public/app.js` do not import or activate the AUT9 module

## Next Phase

AUT10 should close out the controlled multi-step workflow lane with a concise safety/readiness summary and a recommendation for the next narrow runtime integration.
