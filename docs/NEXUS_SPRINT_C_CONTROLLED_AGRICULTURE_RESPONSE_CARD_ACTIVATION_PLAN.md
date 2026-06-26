# Nexus Sprint C Controlled Agriculture Response Card Activation Plan

## Purpose

Sprint C activates the first controlled low-risk visible Nexus service layer for Standard Users: agriculture support response cards. The activation must preserve the existing Standard User safety posture while giving Nexus a clearer review-only card surface for safe agriculture support prompts.

This plan is intentionally narrow. It does not enable autonomous execution, provider handoff, marketplace transactions, medical workflows, location sharing, camera access, microphone activation, payments, calls, messages, appointments, account changes, or emergency dispatch.

## Feature Flag

The Sprint C visible agriculture card lane is guarded by:

`NEXUS_CONTROLLED_AGRICULTURE_RESPONSE_CARDS_ENABLED`

Default behavior remains safe and inert unless this explicit Sprint C flag is enabled in a controlled validation context. The existing Phase 101 agriculture support card behavior remains protected by its own validated contract and must not be hard-renamed or silently weakened.

## Flag-Off Behavior

When `NEXUS_CONTROLLED_AGRICULTURE_RESPONSE_CARDS_ENABLED` is false or absent:

- Sprint C must not add a new visible agriculture response card.
- Sprint C must not add a new execution path.
- Sprint C must not change Standard User routing.
- Sprint C must not alter the hidden low-risk renderer mount point.
- Sprint C must not trigger provider, permission, network, storage, navigation, modal, or external behavior.

## Flag-On Behavior

When `NEXUS_CONTROLLED_AGRICULTURE_RESPONSE_CARDS_ENABLED` is explicitly true in a controlled validation context:

- Eligible low-risk agriculture prompts may render one visible review-only agriculture support card.
- The card must explain safe first checks, uncertainty, source/freshness status, and local expert escalation.
- The card must disclose that no action has been taken.
- Review-only controls must remain disabled or non-executing.
- High-risk and excluded prompts must not render a Sprint C card.

## Eligible Prompt Scope

Eligible prompts are low-risk agriculture support requests such as:

- Help me with crop issues.
- Teach me how irrigation works.
- Help me find agriculture training.
- What should I check if my crops are yellowing?
- How do I prepare soil for planting?

## Excluded Prompt Scope

Sprint C must not render a card for prompts that request or imply:

- calls, SMS, WhatsApp, Telegram, email, or other messages
- provider handoff or provider contact
- location sharing, maps, GPS, or "near me" behavior
- camera, photo, upload, microphone, or media capture
- payment, checkout, purchase, order, buy, sell, buyer, seller, shipment, or delivery
- appointments, booking, scheduling, account/profile changes, or identity actions
- medical, pharmacy, telehealth, emergency, dispatch, or diagnosis behavior
- exact chemical dose, pesticide rate, restricted application, or guaranteed yield claims
- external navigation or external service opening

Manual excluded-prompt validation must include:

- Call my farmer.
- Send this on WhatsApp.
- Buy fertilizer.
- Use my location.
- Take a picture of this plant.
- Book an appointment.
- Pay for seeds.
- This is an emergency.

## No-Execution Authority

Sprint C agriculture cards have no execution authority:

- `executionAuthority: false`
- no provider handoff
- no pending action creation
- no call/message/contact action
- no payment or marketplace transaction
- no location/camera/microphone permission request
- no route auto-open
- no modal auto-open
- no confirmation prompt for execution
- no background network/storage side effect beyond existing normal app behavior

## Manual Standard User Browser Validation Expectations

Validation must use the normal Standard User build:

- command: `node server.js`
- URL: `http://127.0.0.1:4182/`
- path: Start as User

Flag-off validation must confirm:

- no new Sprint C agriculture card appears
- hidden renderer mount remains hidden and empty
- existing Standard User low-risk behavior remains stable
- excluded/high-risk prompts do not render a Sprint C card
- no console errors appear

Flag-on validation must confirm:

- eligible agriculture prompts render at most one review-only card
- excluded/high-risk prompts render no card
- no permission prompt, provider handoff, auto navigation, modal, purchase, payment, call, message, location, camera, account, medical, pharmacy, or emergency action occurs
- controls remain review-only and non-executing

## QA Protection

The Sprint C activation plan is protected by:

- `scripts/nexus-sprint-c-agriculture-response-card-activation-plan-qa.js`
- `npm run qa:nexus-sprint-c-agriculture-response-card-plan`
- local-safe suite wiring
