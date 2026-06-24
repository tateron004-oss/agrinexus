# Nexus Controlled Low-Risk Renderer Visible UI Design Contract

## 1. Purpose and Scope

Phase 13A defines the **Controlled Low-Risk Renderer Visible UI Design Contract** for a future safe visible renderer card.

This is a design-contract phase, not a feature activation phase. It does not enable visible renderer UI, wire `public/index.html`, add DOM cards, add buttons, add click handlers, add route changes, add provider handoff, request browser permissions, or execute actions.

## 2. Relationship to Phases 12Y and 12Z

Phase 12Y implemented a local/test-only metadata/no-op flag-on harness through `evaluateNexusLowRiskRendererRuntimeHarness(...)`.

Phase 12Z validated that the Standard User browser build remains unwired and safe after the Phase 12Y harness.

Phase 13A defines what a future visible low-risk card may eventually display and what it must never do before any actual DOM rendering is enabled.

## 3. Why Visible Rendering Is Still Not Enabled

Visible rendering is still not enabled because the current system has only proven metadata/no-op harness behavior. Before rendering a visible card, the project needs a strict design contract that protects user expectations, avoids accidental execution claims, and keeps high-impact actions behind separate gates.

The renderer must remain disabled by default until a future phase implements and validates an inert DOM prototype behind a test fixture only.

## 4. Allowed Future Card Fields

Allowed future visible content:

- short category label:
  - Learning
  - Training
  - Jobs
  - Marketplace Review
  - Agriculture Help
- short plain-language summary
- non-executing explanation of what Nexus can help the user review
- safe review-only posture
- optional inert metadata:
  - `category`
  - `displayTitle`
  - `summary`
  - `riskTier`
  - `allowedSurface`
  - `requiresConfirmation`
  - `executionAllowed`

Allowed copy should say that Nexus can help the user review options, compare choices, or understand a safe next step. It must not say an action has happened.

## 5. Prohibited Fields and Actions

Prohibited fields/actions:

- No direct call/message/location/camera/payment/purchase/emergency/health mutation behavior.
- No provider handoff.
- No permission prompt.
- No form submission.
- No user-data transmission.
- No account changes.
- No external navigation unless separately approved by a future gated phase.
- No automatic routing.
- No hidden execution.
- No uncontrolled click handlers.
- No DOM insertion from raw or untrusted model text.
- direct call behavior
- direct message behavior
- location sharing
- camera opening
- payment
- purchase
- emergency behavior
- health mutation
- provider handoff
- permission prompt
- form submission
- user-data transmission
- account changes
- external navigation unless separately approved by a future gated phase
- automatic routing
- hidden execution
- uncontrolled click handlers
- buttons that imply execution, booking, purchase, calling, messaging, payment, emergency dispatch, or health action
- DOM insertion from raw or untrusted model text

The future card must not include executable payloads, provider payloads, permission payloads, route commands, transaction payloads, contact payloads, call payloads, message payloads, DOM nodes from model text, or click handlers from model text.

## 6. Required Safety Language

Required safety language for any future visible card:

- Nexus is helping you review options.
- No action has been taken.
- Review only.
- Any future action must be separate, explicit, confirmed, and gated.
- This card cannot call, message, pay, buy, book, share location, open camera, submit forms, mutate health workflows, or dispatch emergency services.

Unsafe wording remains prohibited:

- sent
- called
- purchased
- paid
- booked
- dispatched
- submitted
- completed
- diagnosed
- connected to provider

## 7. DOM Safety Rules

DOM safety rules:

- no DOM insertion from raw or untrusted model text
- all future visible strings must be escaped or rendered through trusted text APIs
- card structure must be fixed by code, not supplied by model output
- no HTML from harness metadata
- no script execution from metadata
- no dynamic renderer script tag from Standard User `public/index.html`
- no visible runtime UI when flag off
- no DOM rendering when flag off
- no renderer invocation when flag off

## 8. Click Handler Restrictions

Click handler restrictions:

- no uncontrolled click handlers
- no click handler from metadata
- no click handler that executes actions
- no click handler that opens providers
- no click handler that requests permissions
- no click handler that navigates externally
- no click handler that submits forms
- no click handler that calls, messages, pays, buys, books, shares location, opens camera, mutates health workflows, or claims emergency dispatch

Any future interactive control must be introduced in a separate gated phase and must remain review-only unless another explicit permission/confirmation phase approves more.

## 9. Navigation Restrictions

Navigation restrictions:

- no automatic routing
- no external navigation
- no route command from renderer metadata
- no browser location mutation
- no workflow opening from metadata alone
- no `selectedToolId` direct navigation
- no `agentAction` direct navigation

Future navigation, if approved, must route through existing authoritative handlers and remain user-click-required.

## 10. Provider, Permission, and Action Exclusions

Provider/permission/action exclusions:

- no provider handoff
- no browser permissions
- no call execution
- no message execution
- no camera opening
- no location sharing
- no transaction
- no purchase
- no payment
- no account mutation
- no health mutation
- no emergency dispatch claim
- no job application submission
- no seller contact
- no form submission

planner metadata is not execution authority. `selectedToolId must not directly execute`, `agentAction must not directly execute`, `missingInputs must block execution`, `restricted actions must not execute`, `provider_handoff_only must not mean execution happened`, and `confirmationRequired must be honored`.

## 11. Required QA Gates Before Visible Implementation

Required QA gates before any future visible implementation:

- design contract QA must pass
- Phase 12Y harness implementation QA must pass
- Phase 12Z browser regression QA must pass
- low-risk renderer static QA must pass
- Nexus Workforce suite must pass
- all-safe suite must pass
- browser regression must prove flag-off Standard User behavior remains unchanged
- browser regression must prove no provider/permission/navigation/execution behavior appears
- future DOM prototype QA must prove inert rendering only

## 12. Non-Goals

Phase 13A does not:

- enable visible renderer UI
- wire `public/index.html` to a renderer surface
- add active DOM cards
- add buttons
- add click handlers
- add route changes
- add provider handoff
- add browser permission prompts
- add high-risk action behavior
- change Standard User demo behavior

## 13. Recommended Next Phase

Recommended next phase:

**Phase 13B - Controlled Low-Risk Renderer Inert DOM Prototype Behind Test Fixture Only**

Phase 13B should create an inert, test-only DOM prototype that is not wired into Standard User `public/index.html` and cannot execute actions.
