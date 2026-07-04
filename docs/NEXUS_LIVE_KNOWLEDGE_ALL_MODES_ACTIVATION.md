# Nexus Live Knowledge All-Modes Activation

## Purpose

Nexus Live Knowledge is now a shared platform capability for all Nexus modes. It gives the Standard User runtime a single safe path for source-backed research packets while preserving provider, medical, communications, marketplace, payment, location, and dispatch safety gates.

This is not a provider handoff or execution lane. It is a research and citation layer that can support downstream workflows only after separate review, confirmation, permission, and audit controls.

## Runtime Endpoints

### GET `/api/nexus/live-knowledge/status`

Returns the current Live Knowledge readiness state:

- enabled or disabled
- configured or credential-blocked
- selected provider
- supported providers
- required environment variable names
- missing environment variable names only
- citation capability
- testability status
- safe domains
- timestamp
- no secret values

### POST `/api/nexus/live-knowledge/query`

Accepts:

- `query`
- `domain`
- `mode`
- `locale`
- `maxResults`
- `safetyContext`

Returns:

- `ok`
- `status`
- `provider`
- `domain`
- `mode`
- `query`
- `summary`
- `citations`
- `sources`
- `safetyNotes`
- `recommendedNextSteps`
- `requiresReview`
- `requiresConfirmationForNextAction`
- `timestamp`
- `liveKnowledgeResearchPacket`

## Provider Priority

Default provider selection is `auto`.

Priority order:

1. Tavily through `TAVILY_API_KEY`
2. Brave through `BRAVE_SEARCH_API_KEY`
3. Exa through `EXA_API_KEY`
4. generic fallback through `NEXUS_LIVE_KNOWLEDGE_API_KEY`

Allowed all-mode selector values:

- `auto`
- `tavily`
- `brave`
- `exa`

The generic fallback represents a provider-key shape and controlled adapter-readiness state. It does not fabricate citations when a provider-specific adapter is not active.

## Research Packet Contract

The shared packet type is:

`live_knowledge_research_packet`

Each packet includes:

- query
- domain
- mode
- provider
- status
- cited summary
- citations
- source list
- safety class
- safety notes
- recommended next safe action
- downstream confirmation requirement
- clinical/provider review requirement
- timestamp
- no-execution guarantees

## All Nexus Modes

Live Knowledge can support research context for:

- agriculture
- crop support
- farm planning
- field visit preparation
- logistics and route planning
- training
- workforce
- employer support
- chronic disease education
- diabetes
- hypertension
- obesity
- RPM
- RTM
- CHW support
- telehealth preparation
- pharmacy education
- mobile clinic preparation
- marketplace research
- communications preparation
- email
- SMS
- WhatsApp
- phone
- Telegram

## Standard User UI

The Standard User Knowledge rail now shows:

- selected provider
- testability state
- supported provider names
- citation capability
- missing environment variable names only
- safe domains
- answer card provider
- domain and mode
- packet type
- citations when available
- credential-blocked or provider-error states when needed
- safety notes and recommended next safe steps

The Activation Center keeps Live Knowledge under the existing Resource Assistant lane so the activation count remains stable while making the capability visible.

## Safety Rules

No live actions are authorized by a research result.

Live Knowledge does not:

- diagnose
- prescribe
- contact providers
- send SMS, WhatsApp, email, Telegram, or calls
- create marketplace listings
- process payments
- request browser location
- dispatch transport, field visits, mobile clinics, or emergency help
- fabricate citations
- expose API keys or provider secrets

Health, pharmacy, telehealth, chronic disease, RPM, RTM, and CHW research remains education and preparation only. Communications and marketplace research remains preparation only. Maps, logistics, and field support research uses typed context only and does not request device location.

## Credential-Blocked Behavior

When Live Knowledge is disabled or missing provider credentials, Nexus returns a controlled response with:

- credential-blocked or disabled status
- missing environment variable names only
- zero fake citations
- safety notes
- recommended next safe actions
- a research packet that can be saved or reviewed locally

## Provider Error Behavior

If a configured provider fails, Nexus returns a controlled provider-error response. It does not fabricate sources, does not retry through unsafe paths, and does not authorize external action.

## QA Coverage

`scripts/nexus-live-knowledge-all-modes-qa.js` verifies:

- status endpoint
- query endpoint
- provider priority
- supported providers
- required environment variables
- missing-config behavior
- all-mode domain coverage
- packet contract
- Standard User UI labels
- Activation Center lane mapping
- runtime registry exposure
- no-execution safety text
- no secret exposure
- package alias and safe-suite wiring

