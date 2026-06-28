# Sprint M2 - Inert Appointment/Service Request Contract

Sprint M2 adds an inert contract for appointment/service request intent. The contract gives Nexus a deterministic way to validate request-shaped data without booking appointments, contacting providers, dispatching services, writing backend state, or creating real pending actions.

## Contract Purpose

The contract represents a review-only request packet. It can describe the provider/service identity requirement, requested category, timing preference, location requirement, communication requirement, draft request, risk tier, evidence requirement, and limitations.

## Supported Service Request Types

- appointment-request
- service-request
- field-visit-request
- consultation-request
- coordination-request
- clarification-required
- blocked-request
- unknown

## Supported Service Categories

- agriculture-support
- training-workforce
- provider-consultation
- field-visit
- logistics-coordination
- health-service-caution-only
- emergency-service-blocked
- user-provided-service

## Required Safety State

Every valid appointment/service request must include:

- `providerConfirmationRequired: true`
- `userApprovalRequired: true`
- `finalExecutionGateRequired: true`
- `executionAuthority: false`

The contract also requires provider identity fields, timing/availability fields, communication intent requirements, evidence requirements, source packet requirements, blocked execution channels, safe use notes, and limitations.

## Blocked Execution Channels

Blocked channels must include booking, provider-dispatch, provider-handoff, call, message, SMS, WhatsApp, Telegram, email, payment, purchase, marketplace-transaction, location, camera, image-capture, emergency, medical, pharmacy, backend-write, storage-write, network-call, and pending-action.

## Runtime Boundary

This module is inert. It must not mutate DOM, add event listeners, fetch network resources, write storage, write backend state, create provider dispatch, book appointments, send messages, make calls, create pending real-world actions, or execute service requests.

The module is not loaded by `public/index.html`, `public/app.js`, or `server.js`.
