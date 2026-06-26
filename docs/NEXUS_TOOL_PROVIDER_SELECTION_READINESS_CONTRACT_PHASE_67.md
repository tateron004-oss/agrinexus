# Nexus Tool/Provider Selection Readiness Contract - Phase 67

Phase: 67
Roadmap item: Tool/provider selection
Purpose: Pick safe connectors through a future selection engine while requiring policy gates and preventing raw adapter calls.

## Scope

This phase adds an inert readiness contract only. It does not change active tool selection, provider selection, routing, policy decisions, planner decisions, adapter calls, or backend behavior.

## Safety posture

Connector selection may recommend a safe provider path, but selection is not execution. Raw intent parsing must never call adapters directly, and provider handoff must remain policy-gated, visible, permissioned, and auditable.

Safe copy:

> I can identify a possible provider path, but I will not contact or open a provider until the required gates are satisfied.

## Inactive boundaries

The following remain inactive in Phase 67:

- live provider selection engine
- raw adapter calls
- provider calls from raw intent
- silent provider handoff
- automatic connector execution
- provider credential use
- payment provider selection
- medical or pharmacy provider execution
- emergency provider dispatch
- transportation dispatch provider execution
- contact or message provider execution
- location or camera provider activation
- Standard User runtime provider selection changes
- storage or network side effects
- backend behavior changes

## Required preconditions before future activation

- connectorRegistryEntry
- selectedToolIdTrace
- providerAvailabilityState
- policyGateDecision
- riskTierForSelectedConnector
- permissionStateForSelectedConnector
- consentStateForSelectedConnector
- visibleProviderDisplay
- visibleActionTypeDisplay
- fallbackProviderPath
- unsupportedProviderPath
- auditDecisionRecord
- noRawAdapterCalls
- noProviderSelectionFromRawIntent
- noSilentProviderHandoff
- regressionSuiteCoverage

## Restricted domains

Future provider selection must not infer execution authority in:

- healthcare
- medical_records
- pharmacy
- payments
- location
- communications
- provider_contact
- marketplace_transactions
- emergency
- transportation_dispatch
- identity
- account_profile
- role_authorization
- minors_family_support

## QA expectation

The Phase 67 QA guard verifies the contract, documentation, package alias, safe-suite wiring, forced no-execution defaults, and absence of runtime hooks in `public/index.html`, `public/app.js`, and `server.js`.
