# Nexus Sprint O3 - Tool Provider Selection Flag Contract Harness

Base commit: `ab757670c8ad10dd0384b8d8b03729f108517a58`

Sprint O3 adds fixture, harness, documentation, and QA only for the Sprint O2 Tool Provider Selection feature flag contract. It proves the local/test flag can represent a future visible review surface while preserving every no-execution boundary.

## Artifacts

- `fixtures/nexus/tool-provider-selection-feature-flags.json`
- `scripts/nexus-sprint-o3-tool-provider-selection-flag-contract-harness.js`
- `scripts/nexus-sprint-o3-tool-provider-selection-flag-contract-harness-qa.js`
- `docs/NEXUS_SPRINT_O3_TOOL_PROVIDER_SELECTION_FLAG_CONTRACT_HARNESS.md`

## Fixture Coverage

The fixture set covers four deterministic states:

- Default-off input keeps Tool Provider Selection disabled and not visible.
- Flag-on review-only input allows visibility only when `enabled: true` and `visibleUiAllowed: true`.
- Unsafe authority attempts are normalized away.
- Flag-on input without explicit visible UI permission stays hidden.

The only field that may become true in a local/test-safe fixture is `visibleUiAllowed`, and only when `enabled: true` is also present. Visibility in this lane is still non-authoritative.

## Protected Field Expectations

Every fixture must keep these values false:

- `selectionReviewAllowed: false`
- `providerPathPreviewAllowed: false`
- `selectionRuntimeAllowed: false`
- `liveSelectionEngineAllowed: false`
- `rawAdapterCallsAllowed: false`
- `providerCallsFromRawIntentAllowed: false`
- `silentProviderHandoffAllowed: false`
- `automaticConnectorExecutionAllowed: false`
- `providerCredentialUseAllowed: false`
- `paymentProviderSelectionAllowed: false`
- `regulatedProviderExecutionAllowed: false`
- `emergencyProviderDispatchAllowed: false`
- `transportationDispatchProviderExecutionAllowed: false`
- `communicationProviderExecutionAllowed: false`
- `locationCameraProviderActivationAllowed: false`
- `selectedToolIdRouteMutationAllowed: false`
- `selectedToolIdRiskMutationAllowed: false`
- `selectedToolIdProviderHandoffAllowed: false`
- `policyBypassAllowed: false`
- `confirmationBypassAllowed: false`
- `permissionBypassAllowed: false`
- `firstTurnExecutionAllowed: false`
- `laterTurnExecutionAllowed: false`
- `standardUserSelectionMutationAllowed: false`
- `backendWriteAllowed: false`
- `storageWriteAllowed: false`
- `networkAllowed: false`
- `auditWriteAllowed: false`
- `executionAuthority: false`

Every fixture must also keep:

- `noExecution: true`

## Harness Boundary

The harness may:

- Read the local fixture JSON file.
- Call the Sprint O2 normalizer.
- Compare normalized fields against expected values.
- Print a deterministic pass/fail result.

The harness must not:

- Mutate fixtures or runtime files.
- Touch `db.json`.
- Import into `public/index.html`, `public/app.js`, or `server.js`.
- Render UI or attach DOM handlers.
- Select providers.
- Call provider adapters.
- Open provider handoffs.
- Use provider credentials.
- Request permissions.
- Navigate externally.
- Perform network, storage, backend, audit, or execution side effects.

## Standard User Boundary

The Standard User build does not load this module, harness, or fixture. Sprint O3 does not add a live selection engine, connector picker runtime UI, provider selection adapter, raw adapter calls, provider calls from raw intent, silent provider handoff, automatic connector execution, provider credential use, selectedToolId route mutation, selectedToolId risk mutation, selectedToolId provider handoff, or any payment, regulated, emergency, transportation, communication, location, or camera execution.

## QA Expectations

QA must verify:

- The fixture set has exactly four states.
- Unsafe attempted authority fields normalize to false.
- `noExecution` remains true.
- Runtime files do not load O2/O3 artifacts.
- The package alias exists.
- The local-safe QA suite includes this harness.
- Sprint O1 and Sprint O2 guards remain wired.

## Next Safe Sprint

Sprint O4 - Tool Provider Selection Runtime Absence Regression Guard
