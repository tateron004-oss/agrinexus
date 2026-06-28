# Nexus RT3 - Unified Live Source Orchestrator

## Purpose

RT3 adds an inert unified live source orchestrator. It receives a user query, classifies the intent, selects a registered provider, calls the existing read-only provider adapter path, and returns a normalized source-backed result object.

The orchestrator is not wired into Standard User runtime, `server.js`, or `public/app.js`.

## Supported Read-Only Intents

- weather lookup
- agriculture context lookup
- news/security/conflict lookup
- job search information lookup
- shipment tracking lookup with explicit tracking/reference text only
- music/media information lookup

## Output Contract

The orchestrator returns request id, intent, normalized query, selected provider, provider status, allowed flag, blocked reason, risk tier, retrieved time, results, citations, confidence, audit event, safety posture, user-facing summary, suggested follow-ups, and no-execution fields.

## Safety Boundary

Execution-like requests are blocked or downgraded. Emergency, dispatch, call, message, payment, booking, form submission, application submission, provider contact, private-account access, location permission, browser geolocation, camera/microphone, marketplace transaction, medical/pharmacy, backend write, and hidden auto-navigation behavior remain disallowed.

