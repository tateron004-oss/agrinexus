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
