# Nexus Unified Brain Runtime

## Purpose

The Nexus Unified Brain Runtime coordinates completed Nexus runtimes as one conversational assistant. It does not replace domain runtimes. It sits above them, classifies open-ended goals, creates mission plans, routes each step to the correct runtime, records mission receipts, and keeps every external action gated.

## Architecture

Runtime file:

- `public/nexus-unified-brain-runtime.js`

Server routes:

- `GET /api/nexus-brain/status`
- `POST /api/nexus-brain/plan`
- `POST /api/nexus-brain/execute-step`
- `GET /api/nexus-brain/mission-receipt`

Browser UI:

- Standard User `Nexus Unified Brain` mission workspace in `public/index.html`
- Mounted from `public/app.js`
- Reached from typed Ask Nexus, keyboard submit paths, and voice/open-dialogue flow

## Routed Runtimes

The brain routes to:

- Nexus Full Communication Runtime for message drafts, call scripts, provider messages, buyer/seller messages, employer messages, clinic/pharmacy messages, and communication readiness.
- Nexus Agriculture Intelligence and Collaboration Runtime for crop, pest, soil, irrigation, weather, livestock, marketplace, logistics, drone, farm profile, extension, and agriculture receipt workflows.
- Nexus Healthcare Collaboration Runtime for chronic care, RPM/RTM, telehealth, mobile care, pharmacy handoff, provider packets, FHIR/HIE readiness, and clinician-review workflows.
- Local fallback packets for learning, workforce, and generic mission steps when no specialized runtime exists.

## Supported Domains

- communication
- healthcare
- agriculture
- mobile health
- pharmacy
- learning
- workforce/jobs
- marketplace/trade
- logistics/shipment
- drone/field operations
- provider/admin
- general help
- emergency/safety
- unknown/missing context

## Mission Planning

Every mission includes:

- `missionId`
- user goal and understood goal
- domains
- steps
- required, available, and missing inputs
- recommended next step
- safety flags
- provider readiness
- execution readiness
- prepared items
- blocked items
- mission receipt

Built-in mission templates include:

- Farmer Crop-to-Market Mission
- Patient Mobile Care Mission
- Farmer Health + Farm Mission
- Job Seeker Learning-to-Employment Mission
- Marketplace Shipment Mission
- Drone Field Observation Mission
- General Mission

## Safety Gates

The Unified Brain never claims execution unless the underlying runtime/provider reports it. It blocks or prepares locally for:

- emergency health language
- clinical diagnosis, prescribing, medication changes, PHI access, and emergency dispatch
- pesticide, chemical, veterinary, drone, insurance, loan, grant, customs, or export actions
- marketplace posting, payment, offer acceptance, refunds, and transaction cancellation
- calls, messages, WhatsApp, SMS, email, Telegram, scheduling, or provider contact without confirmation and configured provider gates

## Receipts

Mission receipts link:

- communication receipt IDs
- agriculture receipt IDs
- healthcare receipt IDs
- workforce/local fallback receipt IDs
- prepared steps
- blocked steps
- missing information
- source modes
- confirmation and review requirements

If no persistent storage is configured, mission memory and receipts are session/local only and labeled that way.

## Provider Evidence

The Standard User workspace and API status show:

- available runtimes
- provider/source readiness summary
- supported domains
- routing map
- active safety gates
- no-secret/no-fake-execution guarantees

## What Nexus Can Claim

Nexus can say:

- it understood a multi-domain goal
- it prepared a mission plan
- it prepared local packets/drafts/receipts
- a step is blocked, missing credentials, waiting for confirmation, or waiting for review
- a runtime is available or not found

Nexus cannot claim:

- a message/call was sent unless the communication provider reports success
- a telehealth visit, pharmacy action, provider handoff, payment, shipment, marketplace action, drone action, EHR/HIE access, or emergency response completed unless the configured provider reports success and required gates are satisfied
- clinical diagnosis, prescription, pesticide/veterinary authority, government/source authority, or live source data without configured source evidence

## Activation Dependencies

Live production execution remains gated by:

- real provider credentials
- source authorization
- vendor approval
- user consent and confirmation
- clinician, expert, provider, or admin review
- audit logging
- legal/regulatory requirements
