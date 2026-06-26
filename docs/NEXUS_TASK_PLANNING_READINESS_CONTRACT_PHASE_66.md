# Nexus Task Planning Readiness Contract - Phase 66

Phase: 66
Roadmap item: Task planning
Purpose: Build future multi-step plans through planner upgrades while keeping every plan staged and execution false by default.

## Scope

This phase adds an inert readiness contract only. It does not change active planning, routing, policy decisions, provider selection, confirmation behavior, or backend behavior.

The contract prepares Nexus for future multi-step planning where plans are visible, staged, cancellable, and non-executing until every required gate is satisfied.

## Safety posture

Plans may organize next steps, but a plan is not execution. Every high-risk or sensitive step must be reviewed, permissioned, confirmed, and audited independently.

Safe copy:

> I can prepare a staged plan, but I will not run any step until the required approvals and connections are active.

## Inactive boundaries

The following remain inactive in Phase 66:

- live planner replacement
- executable plan steps
- automatic step chaining
- provider execution from plans
- call or message execution from plans
- payment execution from plans
- marketplace transaction execution from plans
- medical or pharmacy execution from plans
- emergency dispatch from plans
- transportation dispatch from plans
- location or camera activation from plans
- identity or account changes from plans
- role or permission elevation
- Standard User runtime planner changes
- storage or network side effects
- backend behavior changes

## Required preconditions before future activation

- toolRegistryStepMapping
- riskTierForEachStep
- policyReviewForEachStep
- executionFalseByDefault
- stagedPlanPreview
- visibleStepPurpose
- visibleStepConsequence
- explicitApprovalPerHighRiskStep
- cancellationPath
- providerAvailabilityCheck
- permissionStatePerStep
- auditEventPerStep
- sourceTraceForPlan
- noAutonomousHighRiskSteps
- noRawAdapterCalls
- noImplicitPermission
- rollbackPlan
- regressionSuiteCoverage

## Restricted domains

Future planning must not infer execution authority in:

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

The Phase 66 QA guard verifies the contract, documentation, package alias, safe-suite wiring, forced no-execution defaults, and absence of runtime hooks in `public/index.html`, `public/app.js`, and `server.js`.
