# Nexus Low-Risk Renderer Controlled Runtime Flag-On Test Harness Plan

## 1. Purpose and Scope

Phase 12V is the **Controlled Runtime Wiring Flag-On Test Harness Plan**. It plans a future **local/test-only** flag-on runtime harness path for the low-risk inert renderer, but it does not implement that path.

This phase does not enable renderer UI, does not turn on the renderer by default, does not add DOM rendering, does not add renderer cards, and does not change Standard User visible behavior. The renderer remains disabled by default. `flag disabled means render nothing`, `eligibility false means render nothing`, and `flag enabled alone is not enough`.

## 2. Current Safety Posture

Current posture after Phase 12T and Phase 12U:

- The flag-off runtime harness exists in `public/app.js`.
- Standard User browser regression passed.
- The renderer remains non-visible by default.
- `public/index.html` still does not load the renderer script.
- No DOM rendering exists for the low-risk renderer.
- No execution/provider/permission/navigation path exists.
- Default Standard User behavior remains unchanged.
- No visible runtime UI when flag off.
- No DOM rendering when flag off.
- No renderer invocation when flag off.

The project is still not ready for real execution.

## 3. Relationship to Phases 12T and 12U

- Phase 12T added the inactive app-level flag-off harness.
- Phase 12U browser-validated that harness with flag off.
- Phase 12V plans a future local/test-only flag-on harness path without enabling UI by default.

The future plan must preserve the Phase 12T and Phase 12U safety outcomes: no live execution, no provider handoff, no browser permissions, no navigation, and no Standard User visible behavior change when the flag is off.

## 4. Proposed Flag-On Test Harness Strategy

A future flag-on test harness may exist only in a local/test-safe path.

Required strategy:

- explicit local/test-only flag activation
- disabled by default
- no production/default activation
- eligibility guard must pass
- flag enabled alone is not enough
- low risk only
- `suggestion_only` or `navigation_only` boundaries only
- `suggestion_preview`, `review_option`, or `informational_response` states only
- no medium/high/restricted rendering
- no raw prompt-only rendering
- no selectedToolId-only rendering
- no agentAction-only rendering
- no app startup rendering
- no provider handoff
- no browser permissions
- no navigation
- no execution

Future implementation must explicitly prevent planner metadata from becoming execution authority. `selectedToolId must not directly execute` and `agentAction must not directly execute`.

## 5. Proposed Future Harness Gate Sequence

Future gate order:

1. User prompt enters normal assistant flow.
2. Existing Standard User assistant response is generated.
3. Action decision metadata is derived or observed.
4. Staged action state is derived.
5. Inert render model is derived.
6. Flag-off harness evaluates default inactive state.
7. Local/test-only flag-on condition is checked.
8. Eligibility guard is checked.
9. Sanitized inert display data is built.
10. Test harness may invoke renderer only in local/test-safe isolation.
11. Renderer returns inert metadata/model only.
12. No DOM insertion unless a later phase explicitly approves a visible test-only card.
13. No execution, permission, provider, navigation, modal, or transaction path is exposed.

Missing inputs must block execution. `confirmationRequired must be honored`. `provider_handoff_only must not mean execution happened`.

## 6. Local/Test-Only Activation Rules

Acceptable future activation methods:

- environment/config test flag
- explicit QA-only query parameter if the repo already supports safe debug flags
- test harness fixture only
- never on by default
- never from user prompt alone
- never from selectedToolId alone
- never from agentAction alone

Unacceptable activation methods:

- production default
- app startup
- raw prompt text
- hidden auto-enable
- browser permission flow
- provider callback
- marketplace transaction flow
- health/emergency flow

Activation must remain local/test-only and must not request browser permissions.

## 7. Eligible Test Fixtures

Future eligible fixtures:

- learning
- jobs
- marketplace browse/review only
- agriculture support review only
- low risk only
- `suggestion_only`
- `navigation_only`
- `suggestion_preview`
- `review_option`
- `informational_response`

Eligible output remains inert and metadata-only unless a later approved phase explicitly adds a visible test-only card.

## 8. Excluded Test Fixtures

Excluded fixtures:

- communications/call
- message
- location
- camera
- health/telehealth
- emergency
- marketplace transaction
- purchase
- seller contact
- provider handoff
- browser permission
- form submission
- job application submission
- account changes
- payment
- medium risk
- high risk
- restricted risk

Restricted actions must not execute. The harness must include no call execution, no message execution, no camera opening, no location sharing, no transaction, and no emergency dispatch claim.

## 9. Inert Output Rules

Future flag-on test harness output may include only:

- title
- body
- badge
- riskLabel
- safetyCopy
- `No action has been taken.`
- `Review only.`
- `Low risk.`
- disabled/non-clickable labels only

Output must not include:

- executable action IDs
- provider payloads
- permission payloads
- route commands
- transaction payloads
- contact/call/message payloads
- misleading completion language
- words implying sent/called/purchased/paid/dispatched/completed

No click handlers that execute may be added.

## 10. Static QA Requirements Before Implementation

Static QA that must pass before any future flag-on harness implementation:

- flag-off regression still green
- 12T harness QA still green
- 12U browser regression evidence still valid
- no renderer script tag in index
- no visible UI added
- no DOM rendering added
- no unsafe APIs
- no click handlers
- no execution language
- eligible fixtures return inert metadata only
- excluded fixtures return nothing

The QA must also confirm no provider handoff, no browser permissions, no navigation, no live execution, no payment behavior, no health mutation, and no emergency dispatch claim.

Required safety-language checklist:

- disabled by default
- flag disabled means render nothing
- eligibility false means render nothing
- flag enabled alone is not enough
- local/test-only
- low risk only
- suggestion_only
- navigation_only
- no visible runtime UI when flag off
- no DOM rendering when flag off
- no renderer invocation when flag off
- no click handlers that execute
- no live execution
- no provider handoff
- no browser permissions
- no navigation
- no call execution
- no message execution
- no camera opening
- no location sharing
- no transaction
- no emergency dispatch claim
- planner metadata is not execution authority
- selectedToolId must not directly execute
- agentAction must not directly execute
- missingInputs must block execution
- restricted actions must not execute
- provider_handoff_only must not mean execution happened
- confirmationRequired must be honored
- Standard User visible behavior remains unchanged when flag off
- not ready for real execution
- Phase 12W

## 11. Browser Validation Requirements After Implementation

Future browser checks after any implementation:

- Standard User flag-off remains unchanged.
- Console remains clean.
- No visible renderer UI by default.
- Local/test-only flag-on path, if implemented, shows no production-visible UI unless explicitly approved.
- Eligible fixtures remain safe.
- Excluded fixtures remain inert/no-op.
- Review options remains unchanged.
- No permissions/providers/execution/navigation occurs.
- Standard User visible behavior remains unchanged when flag off.

## 12. Risks and Mitigations

| Risk | Mitigation |
| --- | --- |
| Accidental production activation | Keep disabled by default and require local/test-only activation. |
| Confusing review copy with completed action | Require safety copy and block sent/called/purchased/paid/dispatched/completed language. |
| Developer wiring from selectedToolId or agentAction | Explicitly guard that `selectedToolId must not directly execute` and `agentAction must not directly execute`. |
| Unsafe marketplace copy | Limit marketplace to browse/review only and exclude transaction, purchase, seller contact, payment, and account changes. |
| Unsafe health/emergency copy | Exclude health/telehealth/emergency fixtures and block emergency dispatch claims. |
| Hidden DOM insertion | Require static QA to detect DOM rendering and renderer containers. |
| Console regressions | Require browser validation after implementation. |
| Debug flag leakage | Require local/test-only activation and no hidden auto-enable path. |

## 13. Decision

The project is ready for **Phase 12W - Controlled Runtime Flag-On Harness Static QA**.

The recommendation is conservative: Phase 12W should add static QA for the future flag-on harness before any implementation. Another readiness review is not required before Phase 12W, but any runtime implementation after Phase 12W must remain disabled by default and local/test-only.

## 14. Non-Goals

Phase 12V does not:

- implement flag-on harness
- enable renderer UI
- add DOM cards
- add buttons
- add click handlers
- navigate
- execute
- request permissions
- add provider handoff
- add confirmation modals
- call, message, camera, location, transact, submit forms, mutate health, or claim emergency dispatch

## 15. Recommended Next Phase

Recommended next phase:

**Phase 12W - Controlled Runtime Flag-On Harness Static QA**

Phase 12W should create static QA that enforces this plan before any runtime flag-on implementation begins. The next phase should continue to confirm: disabled by default, local/test-only, low risk only, `suggestion_only`, `navigation_only`, no visible runtime UI when flag off, no DOM rendering when flag off, no renderer invocation when flag off, no provider handoff, no browser permissions, no navigation, no transaction, and not ready for real execution.
