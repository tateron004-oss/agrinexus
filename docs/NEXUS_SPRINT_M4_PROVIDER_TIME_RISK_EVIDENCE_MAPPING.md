# Sprint M4 - Provider, Time, Risk, and Evidence Mapping

Sprint M4 adds an inert mapping layer for appointment and service request drafts. The mapper derives provider identity clarity, timing clarity, risk tier, and evidence requirements from the Sprint M2 contract and Sprint M3 fixture shapes.

This phase does not book appointments, perform provider dispatch, contact anyone, request location, open communication channels, write backend state, write storage, or create pending real-world actions.

## Mapping Goals

Every appointment/service request preview candidate must keep these safety facts visible:

- provider identity requirement: the user must see which provider or service desk is being discussed.
- timing/availability expectation: Nexus may preserve the requested time preference, but availability must be verified later by a real source or provider.
- user approval requirement: user approval is always required before any future action.
- provider confirmation requirement: provider confirmation is always required before any future booking or service action.
- final execution gate requirement: a separate final execution gate is required before any future real-world action.
- source packet requirement: source-backed data is required before any future scheduling, dispatch, contact, or service request.
- audit-ready state: any future action must be audit-controlled.

## Risk Tiers

- `medium`: low-impact preparation or review, such as agriculture support or workforce/training service review.
- `high`: high-risk provider consultation, field visit, logistics coordination, ambiguous provider, ambiguous timing, or any request that may later involve travel, provider contact, location, or sensitive coordination.
- `restricted`: emergency, medical, pharmacy, payment, marketplace transaction, diagnosis, prescription, camera, or location-sharing execution requests.

## Clarification Rules

Ambiguous providers or unclear time windows require clarification. Nexus must not guess the provider, invent availability, stage booking, open a provider channel, or create a pending real-world action.

## Runtime Boundary

This mapper is contract-only. It must not be loaded by `public/index.html`, `public/app.js`, or `server.js`. It must not add UI, routes, network calls, storage writes, DOM rendering, event handlers, provider handoff, communication execution, location sharing, camera access, payments, medical/pharmacy execution, emergency dispatch, backend writes, or autonomous execution.
