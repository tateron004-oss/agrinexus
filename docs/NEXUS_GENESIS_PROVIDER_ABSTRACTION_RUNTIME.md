# Nexus Genesis Provider Abstraction Runtime

This runtime adds a vendor-neutral provider layer for Nexus Genesis. It lets Nexus inspect capabilities, choose an eligible provider path, explain blocked states, create receipts, and preserve a local fallback when external credentials or approvals are missing.

## Runtime Contract

- Module: `public/nexus-genesis-provider-abstraction.js`
- Service ID: `nexus_genesis_vendor_neutral_provider_abstraction`
- Schema: `nexus.genesis.provider-abstraction.v1`
- Packet types:
  - `nexus_genesis_provider_abstraction_status_packet`
  - `nexus_genesis_provider_abstraction_capability_status_packet`
  - `nexus_genesis_provider_abstraction_execution_packet`
  - `nexus_genesis_provider_abstraction_receipt`

## Provider Families

The registry covers AI, cloud, voice and translation, maps, weather, climate, communications, payments, healthcare, workforce, learning, agriculture, logistics, drones, and finance providers.

Nexus does not require AWS. AWS, Azure, Google Cloud, local deployment, and hybrid deployment are modeled as interchangeable provider paths. The router selects by capability, data class, jurisdiction, credentials, policy gates, cost/quota metadata, fallback priority, and local fallback availability.

## Safety Gates

The provider abstraction does not grant live external execution by itself.

High-impact actions require:

- configured provider credentials
- jurisdiction and data-class approval
- consent where personal, health, payment, employment, location, or regulated data is involved
- explicit user confirmation
- audit receipt
- outcome verification
- no silent send, call, booking, payment, dispatch, provider handoff, or regulated submission

Acknowledgement, queueing, or preparation is not treated as a final real-world outcome.

## API Endpoints

- `GET /api/nexus/provider-abstraction/status`
- `GET /api/nexus/provider-abstraction/providers`
- `GET /api/nexus/provider-abstraction/capabilities`
- `GET /api/nexus/provider-abstraction/sdk`
- `POST /api/nexus/provider-abstraction/select`
- `POST /api/nexus/provider-abstraction/policy`
- `POST /api/nexus/provider-abstraction/execute`
- `POST /api/nexus/provider-abstraction/receipt`
- `POST /api/nexus/provider-abstraction/capability-status`

Responses list missing environment variable names only. Secret values are never returned.

## Standard User Commands

The Standard User command surface can answer:

- Which providers are connected?
- Is AWS required?
- Which AI model is Nexus using?
- Can Nexus send messages?
- Can Nexus book appointments?
- Can Nexus process payments?
- What is running locally?
- What is production authorized?
- Why is this action unavailable?

These produce visible provider status cards and do not execute external provider actions.

## Current Execution State

Implemented now:

- provider registry
- capability registry
- data-class registry
- provider readiness checks
- policy evaluation
- provider selection
- local fallback execution packet
- blocked external execution packet
- receipt creation
- outcome verification contract
- Standard User capability status routing
- server API endpoints

Blocked until later provider-specific activation:

- live SMS, WhatsApp, email, calls, video rooms, payments, booking, pharmacy, EHR/FHIR, lab, referral, logistics dispatch, buyer contact, training enrollment, employer application, drone mission execution, and regulated submissions

Those capabilities can be made live only through provider-specific adapters that satisfy the same credential, consent, confirmation, audit, and outcome-verification contract.

## Provider Orchestration Runtime

Phase continuation adds `public/nexus-genesis-provider-orchestration.js`, a runtime layer above the vendor-neutral provider abstraction. The orchestration layer keeps Nexus production-oriented while preserving the no-silent-execution boundary.

Runtime responsibilities:

- create one adapter contract for every registered provider
- classify adapter families across AI, cloud, communications, maps/weather, healthcare, workforce, agriculture, logistics, payments, and local fallback
- evaluate execution readiness before provider use
- enforce data-class, jurisdiction, consent, confirmation, quota, idempotency, replay, timeout, retry, and circuit-breaker gates
- create review queues for provider requests that are not ready for live execution
- run dry-run/local fallback execution packets without contacting external providers
- cancel queued provider requests
- administratively disable or roll back providers
- keep retry, fallback, telemetry, incident, and circuit-breaker history in runtime memory
- verify that provider acknowledgements are not treated as final outcomes
- expose a public-safe SDK description for future provider adapters

The orchestration layer does not activate live external execution by itself. It makes provider execution safer to activate later by requiring:

- a concrete adapter contract
- explicit provider configuration
- allowed data class and jurisdiction
- consent where required
- final user confirmation where required
- idempotency and replay protection
- bounded retry and timeout behavior
- circuit-breaker protection
- audit receipt and outcome verification

## Provider Orchestration API

Public-safe local endpoints:

- `GET /api/nexus/provider-orchestration/status`
- `GET /api/nexus/provider-orchestration/console`
- `GET /api/nexus/provider-orchestration/configuration-controls`
- `GET /api/nexus/provider-orchestration/capability-matrix`
- `GET /api/nexus/provider-orchestration/security-privacy-review`
- `GET /api/nexus/provider-orchestration/end-to-end-readiness`
- `GET /api/nexus/provider-orchestration/sdk`
- `POST /api/nexus/provider-orchestration/capability-report`
- `POST /api/nexus/provider-orchestration/readiness`
- `POST /api/nexus/provider-orchestration/queue`
- `POST /api/nexus/provider-orchestration/execute-dry-run`
- `POST /api/nexus/provider-orchestration/cancel`
- `POST /api/nexus/provider-orchestration/disable-provider`
- `POST /api/nexus/provider-orchestration/rollback-provider`
- `POST /api/nexus/provider-orchestration/verify-outcome`
- `POST /api/nexus/provider-orchestration/data-transfer-receipt`

These endpoints return normalized packets and never return provider secret values. Missing configuration is reported by environment variable name only.

## Standard User Orchestration Commands

The Standard User Ask Nexus flow now recognizes provider orchestration questions such as:

- Show provider console and retry history.
- Which adapter handles SMS?
- Show provider health.
- Show quota and cost estimate.
- Queue provider request.
- Cancel provider request.
- Show provider telemetry.
- Show provider incident history.
- Roll back provider.
- Show provider SDK.
- What is the execution state?
- Show provider configuration controls.
- Create a data transfer receipt.
- Show provider security and privacy review.
- Show provider completion report.

The response is a visible provider orchestration card that summarizes adapter count, execution state, circuit state, quota state, duplicate/replay protection, and whether external execution is authorized. The card always states that receipts and outcome verification are required before a live provider action can be treated as complete.

## Orchestration Execution States

Current normalized states:

- `local_completed`
- `queued`
- `credential-blocked`
- `consent-blocked`
- `confirmation-blocked`
- `jurisdiction-blocked`
- `data-class-blocked`
- `quota-blocked`
- `circuit-open`
- `cancelled`
- `duplicate-blocked`
- `replay-blocked`
- `provider-prepared`
- `not production-authorized`
- `failed-safe`

Live calls, messages, bookings, payments, pharmacy requests, EHR/FHIR exchange, logistics dispatch, buyer contact, training enrollment, employer application, drone missions, and regulated submissions remain blocked until provider-specific activation satisfies the adapter contract and all approval gates.

## Completion Readiness Runtime

The orchestration runtime also exposes a completion-readiness layer for end-to-end Standard User testing. This layer is implemented in code, not as a static checklist.

Completion surfaces:

- `providerConfigurationControls(env)` lists every provider, its missing environment variable names, classification, enablement path, disable support, rollback support, and secret-return status.
- `capabilityStatusMatrix(env)` maps every capability to available adapters, selected provider state, local fallback, consent/confirmation requirements, outcome verification, and missing configuration.
- `createDataTransferReceipt(request, env)` produces a data-transfer receipt with data class, country, jurisdiction, consent, confirmation, retention, residency, deletion, correction, revocation, and blocked-state fields.
- `securityPrivacyReview(env)` performs deterministic security, privacy, adversarial, accessibility, jurisdiction, credential-state, fallback-state, and receipt-state checks.
- `endToEndReadinessReport(env)` aggregates providers, capabilities, policy rules, data-governance controls, provider classifications, capability classifications, production limitations, and Standard User testing readiness.

Data-governance controls cover:

- privacy
- retention
- residency
- deletion
- revocation
- data transfer

The readiness report can classify capabilities and providers as local, configured, credential-blocked, consent-blocked, confirmation-blocked, degraded, disabled, not production-authorized, or other explicit blocked states. It does not authorize production live execution.

Standard User end-to-end testing readiness means:

- every provider has an adapter contract
- every capability has a status classification
- missing credentials are shown by variable name only
- live execution stays disabled by default
- local/offline fallback is available where modeled
- consent, confirmation, receipts, and outcome verification remain required for high-impact action lanes
- security, privacy, adversarial, accessibility, fallback, credential, and receipt checks pass

This is enough for complete Standard User provider-status testing. It is not a claim that every external vendor is live in production.
