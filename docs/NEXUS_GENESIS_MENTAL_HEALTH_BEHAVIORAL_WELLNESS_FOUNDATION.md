# Nexus Genesis Mental Health & Behavioral Wellness Foundation

## Scope Implemented

Nexus now includes a first-class `mental_health_behavioral_wellness` runtime foundation. The foundation is code-backed, shared by browser and server, and designed for supportive conversation, crisis override, privacy-sensitive handling, evidence governance, and verified-provider readiness.

## Runtime Module

Primary module:

- `public/nexus-mental-health-behavioral-wellness.js`

The module exposes:

- `shouldHandle(input)`
- `classifyState(input, context)`
- `buildSupportPacket(input, context)`
- `status(env)`

## State Machine

The foundation defines observable states including:

- ordinary conversation
- emotional support
- grief support
- sleep support
- caregiver support
- substance-use concern
- optional screening
- care preparation
- provider search
- longitudinal trend review
- social-service need
- elevated concern
- urgent concern
- immediate danger
- abuse or safeguarding concern
- medical emergency
- consent blocked
- location required
- professional review required

Direct crisis, abuse, safeguarding, violence, and emergency language overrides ordinary workflows.

## Server Endpoints

- `GET /api/nexus/mental-health/status`
- `POST /api/nexus/mental-health/classify`
- `POST /api/nexus/mental-health/support`

These endpoints return source/provider readiness metadata, support packets, and classification results. They do not write records, contact providers, dispatch emergency services, book appointments, diagnose, prescribe, or expose secrets.

## Standard User Integration

The Genesis command path now prioritizes mental-health and behavioral-wellness language before generic workflow routing. Supported examples include:

- "I feel overwhelmed."
- "Help me calm down."
- "Find a therapist near me."
- "Can I take a PHQ screening?"
- "Do not remember this conversation."
- "I have a plan to end my life."

Supportive dialogue may remain conversational. Structured needs such as crisis, provider search, screening, care preparation, or privacy controls can open the focused mission workspace.

## Evidence Governance

The foundation seeds six governed evidence collection contracts:

- clinical guidance
- screening and assessment instruments
- crisis and suicide-care resources
- verified providers and services
- patient, family, and caregiver education
- workforce development

These are metadata contracts, not hard-coded clinical guidance. Future source ingestion must add canonical source records with versioning, licensing, jurisdiction, publication date, reviewer, and verification receipts.

## Provider Trust

Provider sources are represented as readiness contracts:

- SAMHSA-style treatment locator contract
- official licensing board contract
- local crisis-resource registry contract

Provider execution remains disabled until source, jurisdiction, credential, consent, confirmation, and audit requirements are satisfied.

## Safety Boundaries

Nexus must not:

- diagnose
- prescribe
- change medication
- declare a person safe
- claim crisis resolution
- contact providers without approval
- book appointments without approval
- dispatch emergency services
- store sensitive mental-health memory by default
- share mental-health information across unrelated modules

Mental-health memory defaults to session-only. Sharing, persistent memory, correction, export, and deletion require explicit user controls and audit support.

## QA

Focused QA:

- `scripts/nexus-mental-health-behavioral-wellness-qa.js`

Package alias:

- `npm run qa:nexus-mental-health-behavioral-wellness`

The QA verifies open-dialogue routing, crisis override, screening consent blocking, provider readiness, privacy defaults, server routes, Standard User wiring, and no-fake-execution claims.
