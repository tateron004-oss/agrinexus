# Nexus Sprint E1 - User Confirmation Product Boundary

Current HEAD: `6181465816680de40702b08c32ca5ee4823fc323`.

Sprint E1 begins the User Confirmation and Approval Framework after Sprint D closed the controlled staged action preview lane. Sprint D ended with review-only staged actions, `executionAuthority: false`, no provider handoff, no backend writes, no pending real-world actions, and no real-world execution.

Sprint E1 is documentation and deterministic QA only. It does not add runtime UI, route behavior, backend behavior, storage writes, provider handoff, calls, messages, payments, location sharing, camera access, medical/pharmacy workflows, emergency routing, or execution.

## Sprint E Purpose

Sprint E defines how Nexus may represent a user confirmation or approval-intent step for a staged action without executing the action. The goal is to make future confirmation surfaces understandable, reviewable, cancellable, evidence-aware, and risk-aware while preserving the final execution gate.

## User Confirmation Definition

A user confirmation is a user-facing approval-intent artifact that says the user is willing for Nexus to prepare or review the next step. It is not execution authority.

A confirmation object may summarize:

- what the user is reviewing;
- which staged action it relates to;
- what risk tier applies;
- what evidence or source packet is required;
- what limitations and blocked channels apply;
- what would still require a future final execution gate.

## Confirmation Is Not Execution

Confirmation does not mean Nexus has completed, dispatched, submitted, sent, called, paid, booked, shared, opened, routed, refilled, diagnosed, or written anything.

Confirmation must not produce copy such as:

- "I already did it"
- "I contacted them"
- "I sent it"
- "I called"
- "Payment complete"
- "Location shared"
- "Camera activated"
- "Appointment booked"
- "Prescription refilled"
- "Emergency dispatched"

## Approval Intent Is Not Provider Dispatch

Approval intent means the user has reviewed a proposed preparation step. Provider dispatch means a real-world provider, system, device, network, or external service is contacted or opened. Sprint E1 keeps these separate.

Approval intent must never dispatch:

- healthcare providers;
- pharmacies;
- emergency services;
- transportation providers;
- marketplace buyers or sellers;
- phone, SMS, WhatsApp, Telegram, email, or other communication providers;
- payment providers;
- camera, location, or native-device permission flows.

## Allowed Confirmation Categories

The allowed confirmation categories for this inert framework are:

- `reviewAcknowledgement`
- `prepareNextStep`
- `sourceReview`
- `riskDisclosureAcknowledgement`
- `cancelConfirmation`
- `notNow`

These categories are review-only. They do not authorize execution, provider handoff, backend writes, or pending real-world actions.

## Disallowed Execution Categories

The following remain disallowed from confirmation-as-execution:

- provider handoff;
- calls;
- messages;
- WhatsApp, SMS, Telegram, or email sending;
- payments, purchases, checkout, marketplace transactions, account creation, or money movement;
- location sharing or geolocation execution;
- camera, microphone, image capture, or image diagnosis;
- appointment booking;
- medical, pharmacy, prescription, refill, or FHIR workflows;
- emergency routing or dispatch;
- backend writes;
- real pending actions;
- live lookup unless a later source retrieval lane explicitly allows read-only retrieval with QA.

## Required Confirmation Fields

Every confirmation object must include:

- `confirmationId`
- `relatedStagedActionId`
- `confirmationType`
- `title`
- `summary`
- `approvalIntentOnly`
- `requiresFinalExecutionGate`
- `executionAuthority`
- `riskTier`
- `riskDisclosure`
- `blockedExecutionChannels`
- `evidenceRequirement`
- `sourcePacketRequirement`
- `userFacingLanguage`
- `safeUseNotes`
- `limitations`

Every confirmation object must require:

- `approvalIntentOnly: true`
- `requiresFinalExecutionGate: true`
- `executionAuthority: false`

## Standard User Safety Expectations

In Standard User:

- confirmation must be explicit and cancellable;
- confirmation must be visibly separate from execution;
- confirmation must not appear for high-risk workflows without later product-approved gates;
- confirmation must not infer approval from vague language such as `okay`, `sure`, or `sounds good`;
- confirmation metadata must not create hidden pending actions;
- confirmation controls must not trigger provider handoff, permissions, navigation, calls, messages, payments, health actions, marketplace transactions, location, camera, backend writes, or emergency behavior.

## No-Execution Authority

Sprint E1 grants no execution authority. Confirmation objects are approval-intent only and final-execution-gate required. Any future runtime preview must show that no action has been taken.

## No-Provider-Handoff Boundary

No confirmation object may open, prepare, or dispatch a provider handoff. Provider communication requires separate provider availability, consent, permission, compliance, audit, and final execution gates.

## No Call/Message/Payment/Location/Camera Boundary

Confirmation objects must block:

- call;
- message;
- WhatsApp;
- SMS;
- Telegram;
- email;
- payment;
- purchase;
- marketplace transaction;
- location;
- camera;
- image capture;
- media capture.

## No Medical/Pharmacy/Emergency Boundary

Confirmation objects must block medical, pharmacy, prescription, refill, telehealth execution, FHIR access, emergency routing, emergency dispatch, and clinical claims. Health-facing language must remain safety-oriented and must not claim live provider connection or medical action completion.

## No Backend Write / No Real Pending Action Boundary

Sprint E1 does not permit backend writes, audit persistence, database mutation, storage writes, or real pending actions. Fixture-only/test-only data may be introduced in later phases only if deterministic, local-safe, and restored.

## Browser Validation Requirements

Any future runtime-visible confirmation change requires Standard User browser validation using:

- `node server.js`
- `http://127.0.0.1:4182/`
- `Start as User`

Browser validation must confirm:

- flag-off behavior has no visible change;
- eligible flag-on behavior remains review-only if implemented;
- high-risk prompts remain blocked or gated;
- no unsafe controls appear;
- no hidden/debug metadata is visible;
- no provider handoff, calls, messages, payments, location, camera, medical/pharmacy, emergency, backend write, or pending real-world action occurs;
- console warning/error count is documented;
- `db.json` and runtime mutations are restored before commit.

## Rollback Strategy

If any future confirmation runtime preview behaves unsafely, rollback is immediate:

1. turn the confirmation feature flag off;
2. remove or disable the confirmation preview wiring;
3. restore runtime data such as `db.json`;
4. rerun focused confirmation QA;
5. rerun `node scripts/qa-suite.js nexus-workforce`;
6. rerun `node scripts/qa-suite.js all-safe`;
7. document the blocked behavior before retrying.

## Sprint E2 Readiness Recommendation

Sprint E2 should add an inert confirmation contract module and deterministic QA for the confirmation object shape. It should not render UI, wire Standard User behavior, write storage, call providers, create pending actions, write backend state, or execute anything.

## Sprint E1 Conclusion

Sprint E1 defines the product and safety boundary only. Nexus may model confirmation intent, but confirmation remains separate from execution, provider dispatch, backend mutation, and real-world action.
