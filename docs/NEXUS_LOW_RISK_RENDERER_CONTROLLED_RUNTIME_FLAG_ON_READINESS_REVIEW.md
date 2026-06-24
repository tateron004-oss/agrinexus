# Nexus Low-Risk Renderer Controlled Runtime Flag-On Readiness Review

## 1. Purpose and Scope

Phase 12X is the **Controlled Runtime Flag-On Harness Readiness Review**. It reviews whether Nexus is ready for a future local/test-only flag-on harness implementation in Phase 12Y.

This phase does not implement the flag-on harness. It does not enable renderer UI, DOM cards, buttons, click handlers, navigation, provider handoff, browser permissions, confirmation modals, calls, messages, camera, location, transactions, form submission, health mutation, emergency dispatch, or real execution.

## 2. Current Safety Posture

Current safety posture:

- renderer remains disabled by default
- flag-off runtime harness exists
- flag-off browser regression passed
- flag-on plan exists
- flag-on static QA exists
- `public/index.html` remains unwired
- no visible runtime UI exists
- no DOM rendering exists
- no execution/provider/permission/navigation path exists
- Standard User visible behavior remains unchanged by default
- no visible runtime UI when flag off
- no DOM rendering when flag off
- no renderer invocation when flag off
- no live execution

The system remains not ready for real execution.

## 3. Relationship to Phases 12T through 12W

- Phase 12T added the inactive flag-off harness through `evaluateNexusLowRiskRendererRuntimeHarness(...)`.
- Phase 12U browser-validated flag-off behavior in the Standard User path.
- Phase 12V planned a future local/test-only flag-on harness.
- Phase 12W added static QA gates before any implementation.
- Phase 12X decides whether Phase 12Y implementation is safe to begin.

The current sequence intentionally keeps the renderer disabled by default and prevents any visible or executing behavior from appearing before guardrails are proven.

## 4. Readiness Scorecard

| Category | Status | Evidence | Remaining risk | Recommendation |
| --- | --- | --- | --- | --- |
| Default-off preservation | Ready | Phase 12T harness returns `flag_disabled`; Phase 12W static QA guards it. | Future edits could loosen the default. | Keep default-off assertions mandatory. |
| Local/test-only activation design | Ready | Phase 12V plan defines local/test-only activation; Phase 12W guards the language. | A future flag could leak into production/default mode. | Require explicit local/test-only fixture input in Phase 12Y. |
| Eligibility guard maturity | Ready | Eligibility module and QA exist; flag enabled alone is not enough. | Future code could skip eligibility. | Phase 12Y must require eligibility true. |
| Renderer inertness | Ready | Prototype renderer returns inert model data only. | Future cards could be mistaken for completed actions. | Keep copy preview-oriented and non-authoritative. |
| Runtime harness safety | Ready | Harness is inactive and metadata-only. | Future implementation could add side effects. | Keep harness no-op by default. |
| `index.html` script prevention | Ready | `public/index.html` does not load renderer scripts. | Script tag could be added too early. | Phase 12Y should not modify `public/index.html`. |
| Visible UI prevention | Ready | No renderer container exists. | Hidden or visible UI could appear accidentally. | Guard against renderer containers and UI strings. |
| DOM rendering prevention | Ready | No DOM card insertion exists in app runtime. | Future code could insert cards by default. | Keep DOM rendering out of Phase 12Y. |
| Unsafe API prevention | Ready | Phase 12W checks unsafe APIs in the harness source. | New APIs could be introduced near the harness. | Continue static unsafe API checks. |
| Click-handler prevention | Ready | No renderer click handlers exist. | Future buttons could imply execution. | Keep no click handlers that execute. |
| Execution-language prevention | Partially Ready | Docs guard unsafe completion language. | Future inert copy could say sent, called, purchased, paid, dispatched, completed. | Phase 12Y fixtures must reject execution language. |
| Excluded fixture protection | Ready | Phase 12V and 12W document excluded fixtures. | Marketplace or health prompts could be misclassified. | Keep excluded/high-risk fixtures inactive/no-op. |
| Planner metadata execution prevention | Ready | Docs state planner metadata is not execution authority. | Future planner wiring could become authoritative. | Keep planner metadata read-only for renderer. |
| selectedToolId protection | Ready | Required language states selectedToolId must not directly execute. | A selected tool ID could be used as a shortcut. | Require eligibility and sanitized action type too. |
| agentAction protection | Ready | Required language states agentAction must not directly execute. | Future agent action metadata could be over-trusted. | Require full guard sequence. |
| Provider handoff boundary | Ready | Provider handoff remains excluded and guarded. | Future provider copy could imply handoff. | Keep no provider handoff in Phase 12Y. |
| Permission boundary | Ready | Browser permissions remain excluded. | Location/camera prompts could be accidentally surfaced. | Keep no browser permissions. |
| Transaction boundary | Ready | Transactions, purchases, seller contact, and payment remain excluded. | Marketplace browse could drift toward buy/sell. | Keep marketplace browse/review only. |
| Health/emergency boundary | Ready | Health/telehealth and emergency remain excluded. | Health help copy could imply care or dispatch. | Keep health/emergency inactive/no-op. |
| Review options safety | Ready | Review options are preview/navigation-oriented and non-executing. | Future implementation could route too broadly. | Phase 12Y must return inert metadata/no-op state only. |
| Browser regression evidence | Ready | Phase 12U validated flag-off Standard User behavior. | Flag-on implementation will need new browser validation. | Run browser regression after Phase 12Y. |
| all-safe QA posture | Ready | Phase 12W passed `all-safe`; Phase 12X must keep it green. | Suite can miss visual regressions. | Pair all-safe with browser validation after implementation. |

## 5. Hard Preconditions Before Phase 12Y

Hard preconditions:

- disabled by default
- local/test-only
- flag disabled means render nothing
- eligibility false means render nothing
- flag enabled alone is not enough
- low risk only
- suggestion_only
- navigation_only
- no raw prompt-only activation
- no selectedToolId-only activation
- no agentAction-only activation
- no app startup activation
- no visible runtime UI by default
- no DOM rendering by default
- no execution
- no provider handoff
- no browser permissions
- no navigation
- no call execution
- no message execution
- no camera opening
- no location sharing
- no transaction
- no forms
- no health behavior
- no emergency dispatch claim

Planner metadata is not execution authority. `selectedToolId must not directly execute`, `agentAction must not directly execute`, `missingInputs must block execution`, `restricted actions must not execute`, `provider_handoff_only must not mean execution happened`, and `confirmationRequired must be honored`.

## 6. Minimum Acceptable Phase 12Y Implementation Shape

The smallest acceptable Phase 12Y implementation:

- extend or use `evaluateNexusLowRiskRendererRuntimeHarness(...)`
- add only local/test-only flag-on evaluation
- keep default behavior inactive
- do not modify `public/index.html`
- do not add renderer script tag
- do not add visible UI
- do not add DOM cards
- do not add buttons or click handlers
- do not invoke renderer unless local/test-only flag-on, eligibility true, and sanitized inert data are present
- return inert metadata/no-op state only
- excluded/high-risk fixtures return inactive/no-op
- no provider/permission/navigation/execution path

Phase 12Y must not turn the renderer into a visible runtime surface.

## 7. Phase 12Y Acceptance Criteria

Acceptance criteria:

- flag off returns inactive/no-op
- eligibility false returns inactive/no-op
- flag enabled alone is not enough
- local/test-only flag-on eligible low-risk fixtures return inert metadata only
- excluded/high-risk fixtures return inactive/no-op
- no visible UI by default
- no DOM rendering by default
- no script tag
- no unsafe APIs
- no click handlers
- no execution language
- all-safe remains green

## 8. Remaining Risks

Remaining risks:

- accidental production activation
- debug/test flag leakage
- confusing inert output with completed action
- future wiring from selectedToolId or agentAction
- unsafe marketplace language
- unsafe health/emergency language
- hidden DOM insertion
- permission/provider/navigation regressions
- browser validation gap after implementation

## 9. Decision

Decision: **Option A - Ready for Phase 12Y - Controlled Runtime Flag-On Test Harness Implementation**.

This readiness is narrow. Nexus is ready only for local/test-only metadata/no-op harness implementation.

Nexus is not ready for visible runtime UI, DOM cards, execution, provider handoff, permissions, navigation, or real-world actions. It is not ready for real execution.

## 10. Required QA Before and After Phase 12Y

Before Phase 12Y:

- static renderer QA must pass
- flag-off harness QA must pass
- flag-off browser regression QA must pass
- flag-on test harness plan QA must pass
- flag-on static QA must pass
- flag-on readiness review QA must pass
- `node scripts/qa-suite.js nexus-workforce` must pass
- `node scripts/qa-suite.js all-safe` must pass

After Phase 12Y implementation:

- repeat all static QA
- add local/test-only eligible fixture QA
- add excluded/high-risk fixture QA
- verify flag disabled means render nothing
- verify eligibility false means render nothing
- verify flag enabled alone is not enough
- browser-validate Standard User flag-off behavior
- browser-validate no visible runtime UI when flag off
- confirm no provider handoff, browser permissions, navigation, call execution, message execution, camera opening, location sharing, transaction, or emergency dispatch claim

## 11. Non-Goals

Phase 12X does not:

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

## 12. Recommended Next Phase

Recommended next phase:

**Phase 12Y - Controlled Runtime Flag-On Test Harness Implementation**

Required safety-language checklist:

- Controlled Runtime Flag-On Harness Readiness Review
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
- Phase 12Y
