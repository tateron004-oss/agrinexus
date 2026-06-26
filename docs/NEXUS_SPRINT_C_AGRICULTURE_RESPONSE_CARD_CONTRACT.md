# Nexus Sprint C Agriculture Response Card Contract

## Contract Purpose

The Sprint C agriculture response card is a visible, low-risk, review-only Standard User surface for safe agriculture support prompts. It is a response contract, not an action contract. The card may help the user understand safe next checks, uncertainty, source/freshness status, and when to consult a local expert.

The card must never become an execution surface.

## Required Card Fields

Every Sprint C agriculture response card must include:

- `id`: stable card identifier.
- `schemaVersion`: stable schema version.
- `riskTier`: `low`.
- `category`: `agriculture-support`.
- `title`: user-visible card title.
- `summary`: short user-visible summary.
- `guidance`: list of safe general guidance items.
- `reviewOnlyActions`: list of disabled or inert review-only actions.
- `blockedActions`: list of explicitly blocked action categories.
- `sourceStatus`: source/freshness/confidence status.
- `executionAuthority`: `false`.
- `providerHandoffAllowed`: `false`.
- `pendingActionCreationAllowed`: `false`.
- `storageSideEffectAllowed`: `false`.
- `networkSideEffectAllowed`: `false`.
- `routeAutoOpenAllowed`: `false`.
- `modalAutoOpenAllowed`: `false`.
- `confirmationPromptForExecutionAllowed`: `false`.

## Review-Only Actions

Allowed review-only actions may describe:

- reviewing safe first checks
- reading general agriculture guidance
- checking source/freshness status
- preparing questions for a qualified local agriculture expert

Review-only actions must not execute, stage, dispatch, route, navigate, call, message, purchase, sell, schedule, share, upload, or request permissions.

## Blocked Actions

The card must explicitly block:

- provider handoff
- call/message/contact behavior
- SMS, WhatsApp, Telegram, email, and phone-provider behavior
- payment, checkout, wallet, purchase, buy, sell, order, buyer/seller contact, shipment, or delivery
- location sharing, GPS, maps, "near me", or route behavior
- camera, photo, image upload, microphone, or media capture
- appointment booking or scheduling
- account/profile/identity behavior
- medical, pharmacy, telehealth, emergency, or dispatch behavior
- exact pesticide, herbicide, fungicide, insecticide, fertilizer, chemical dose, mixture, or restricted application instructions
- external navigation or external service opening

## No Pending Action Creation

The card must not create:

- `agentPendingAction`
- pending communications actions
- pending payment actions
- pending marketplace actions
- pending health actions
- pending appointment actions
- pending location/camera actions
- pending provider handoffs

## No Storage, Network, Or Runtime Side Effects

Rendering the card must not introduce:

- new fetch calls
- external URLs
- `window.open`
- `location.href` navigation
- localStorage/sessionStorage writes
- sendBeacon calls
- WebSocket calls
- provider SDK calls
- native bridge calls
- permission prompts

Existing normal app behavior may continue unchanged outside the card.

## No Auto-Open Behavior

The card must not auto-open:

- app sections
- routes
- workflow modals
- confirmation modals
- provider handoff cards
- external links
- phone/SMS/WhatsApp/Telegram/email surfaces
- camera/location permission prompts

## Eligible And Excluded Prompt Relationship

The card may be built only for eligible low-risk agriculture support prompts after the Sprint C feature flag permits rendering. Excluded or high-risk prompts must return no card.

The contract preserves AgriNexus, AgriTrade, agriculture, workforce, health, telehealth, map/location, music, learning, and provider safety boundaries.

