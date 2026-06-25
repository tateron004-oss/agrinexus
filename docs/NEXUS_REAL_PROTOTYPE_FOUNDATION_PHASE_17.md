# Nexus Real Prototype Foundation Phase 17

Phase: 17 - Nexus Real Prototype Foundation Sprint
Status: source-ready architecture, provider-ready workflow contracts, permission gates, and audit-controlled future execution

## Product Direction

Nexus is no longer framed as a temporary meeting demo. Nexus Workforce AI is the actual prototype foundation for a voice-operated, multilingual, health-access capable, agriculture/workforce capable assistant that can grow into source-backed answers, provider-ready workflows, permission-gated regulated actions, and audit-controlled execution.

Phase 17 does not activate live regulated systems by default. It creates the contracts that make real integrations and permission-gated actions possible without unsafe shortcuts.

Nexus should use language such as:

- "requires a verified source";
- "requires a provider integration";
- "requires your approval";
- "requires consent and audit logging";
- "I can prepare the next step";
- "I cannot execute that action until the required connection is active";
- "not connected yet".

Nexus should avoid new user-facing language that implies a throwaway prototype, unsupported placeholder workflow, or completed action that has not actually happened.

## 1. Real Source Registry

The Phase 17 source registry is `public/nexus-real-data-source-registry.js`.

It defines source/action metadata for:

- provider directory data;
- telehealth provider data;
- pharmacy data and prescription/refill workflows;
- mobile clinic schedules;
- transportation resources;
- location sharing;
- payments;
- medical records/FHIR;
- provider contact;
- emergency dispatch.

Each source/action category includes:

- data owner;
- source type;
- public/partner/regulated status;
- prototype readiness;
- integration method;
- data freshness fields;
- permission requirements;
- compliance requirements;
- action risk level;
- whether live action is currently enabled;
- whether user approval is required;
- approval gates;
- audit requirements;
- future implementation phase.

Every Phase 17 category must default to `liveActionEnabled: false` until a later reviewed phase explicitly configures a source, provider adapter, permission gate, approval gate, and audit path.

## 1A. Real-Time Connector Registry

Nexus must model every future real-time capability as a connector. The connector registry is part of `public/nexus-real-data-source-registry.js` and remains metadata-only in Phase 17.

Required real-time connector categories:

1. Provider directory connector
2. Clinic connector
3. Telehealth connector
4. Mobile clinic schedule connector
5. Pharmacy directory connector
6. Prescription/refill workflow connector
7. Transportation connector
8. Location connector
9. Payment connector
10. Medical records / FHIR connector
11. Emergency response connector
12. Workforce program connector
13. Agriculture resource connector
14. Community services connector

Every connector must include:

- `id`;
- `connectorName`;
- `providerSourceName`;
- `providerSourceType`;
- `integrationMethod`;
- `liveConnectionStatus`;
- `dataFreshnessModel`;
- `authenticationRequirements`;
- `consentRequirements`;
- `permissionRequirements`;
- `complianceRequirements`;
- `auditRequirements`;
- `actionCapabilities`;
- `actionRiskTier`;
- `executionCurrentlyEnabled`;
- `userApprovalRequired`;
- `providerConfirmationRequired`;
- `futureImplementationPhase`.

Connector live connection status must be one of:

- `not_connected_yet`;
- `source_ready`;
- `partner_required`;
- `compliance_required`;
- `configured_in_future_phase`.

Connector execution must remain `executionCurrentlyEnabled: false` until a future reviewed phase connects the provider/source, verifies permissions, adds confirmation gates, and records audit events.

## 1B. Real-Time Connector Answer Posture

Nexus should be able to answer questions about real providers, real-time data, and regulated capabilities without claiming unsupported live execution.

Expected answers:

- "Nexus, what real providers can you connect to?" Nexus should explain that provider directory, clinic, telehealth, pharmacy, transportation, workforce, agriculture, and community-service connectors are planned or source-ready by category, but live provider connection requires an active connector, user approval, audit logging, and provider confirmation.
- "Nexus, what data sources do you need?" Nexus should explain it needs verified public sources, partner operational feeds, regulated data integrations, and approved high-risk action providers.
- "Nexus, can you use real-time data?" Nexus should explain it can use real-time data once an approved connector is configured, authenticated, permissioned, and auditable.
- "Nexus, can you schedule with a provider?" Nexus should explain scheduling requires a clinic or telehealth connector, user approval, provider confirmation, and audit logging.
- "Nexus, can you access medical records?" Nexus should explain medical records require a regulated FHIR connector, identity confirmation, patient consent, scoped authorization, and audit logging.
- "Nexus, can you process payments?" Nexus should explain payments require an approved payment connector, authorization, final confirmation, compliance controls, and audit logging.
- "Nexus, can you share my location?" Nexus should explain location sharing requires browser permission, purpose-specific consent, user approval, and audit logging.
- "Nexus, can you dispatch emergency help?" Nexus should explain emergency dispatch requires an approved emergency response connector, regional/legal approval, user confirmation, location permission if shared, and audit logging.

This answer posture should be confident and implementation-oriented: Nexus is being built for real-time provider and source integrations, but actual actions require the proper connector, permission, consent, audit logging, and provider confirmation.

## 2. Source-Backed Answer Contract

Source-backed answers must distinguish between general guidance and verified-source claims.

Required answer metadata:

- source name;
- source type;
- owner or publisher;
- last verified timestamp;
- stale-after rule;
- integration status;
- whether the answer is public, partner-provided, regulated, or high-risk;
- whether the answer can be used for action;
- next required approval gate.

Answer behavior:

- If a verified source exists, Nexus may summarize it with attribution and freshness.
- If the source is missing, Nexus should say it requires a verified source.
- If the source is stale, Nexus should warn before relying on it.
- If a live provider connection is not configured, Nexus should say it is not connected yet.
- Nexus must not claim live data, a provider integration, or completed action unless that source and adapter are configured.

## 3. Provider/Action Readiness Model

Every real provider or regulated action should have a readiness state:

- `available-now`: safe local or public capability already available without regulated execution.
- `source-ready`: source contract exists, but live integration is not active.
- `partner-required`: partner agreement, roster, schedule, or operational feed is required.
- `compliance-required`: regulated data or privacy review is required before use.
- `future-execution`: action adapter is planned but execution is disabled by default.

Readiness must be visible to policy and QA before any execution phase begins.

## 4. Permission And Consent Model

Nexus must separate:

- no-permission informational guidance;
- user click confirmation;
- browser/device permission;
- identity confirmation;
- patient or account consent;
- provider authorization;
- admin or role-based approval;
- final execution confirmation.

Provider/contact/location/payment/medical/prescription/emergency workflows require explicit user approval and an audit trail before any future action.

## 5. Audit-Controlled Action Model

Future high-risk actions must use this lifecycle:

```text
Intent -> source lookup -> risk policy -> permission gate -> confirmation gate -> approved adapter -> audit result
```

Audit events must cover:

- source used;
- freshness shown;
- stale warning;
- permission requested/granted/denied;
- confirmation shown/accepted/rejected/cancelled;
- blocked reason;
- provider adapter selected;
- result status;
- redaction applied;
- retention or expiry rule.

Audit logging must not itself trigger execution.

## 6. Real Data Acquisition Roadmap

Phase 17A establishes the roadmap and metadata registry. Future work should acquire data through three paths:

- Public data source path: public directories, public schedules, public emergency/resource pages, and public transportation resources.
- Partner data source path: provider rosters, pharmacy support desks, mobile clinic operators, workforce partners, marketplace partners, and transport partners.
- Regulated data path: FHIR, prescriptions, medical records, identity-sensitive records, payment records, and emergency-service handoffs.

Each path must keep provenance, freshness, permission, compliance, and audit requirements explicit.

## 7. Public Data Source Path

Public data may be used for source-backed guidance when:

- terms permit use;
- source attribution is shown;
- freshness is tracked;
- stale data is labeled;
- Nexus does not convert public data into provider contact, booking, dispatch, payment, or account action without approval.

Examples:

- public provider directories;
- public transportation resources;
- public health access pages;
- public mobile clinic schedule pages;
- public emergency numbers.

## 8. Partner Data Source Path

Partner data requires:

- a data owner;
- an integration method;
- source freshness;
- a data-use agreement;
- role boundaries;
- partner-approved display language;
- audit coverage.

Examples:

- telehealth provider availability;
- mobile clinic schedules;
- pharmacy support routing;
- transportation partner resources;
- workforce support contacts.

## 9. Regulated Data Path

Regulated data requires:

- identity confirmation;
- scoped consent;
- compliance review;
- minimum necessary display;
- redaction;
- retention policy;
- audit logging;
- explicit confirmation before sharing.

Examples:

- prescriptions;
- refill status;
- medical records;
- FHIR resources;
- patient context;
- payment/account data.

## 10. Future Provider Integrations

Provider integrations must never be called from raw prompt parsing.

Future provider adapters may include:

- provider directory API;
- telehealth provider API;
- pharmacy API;
- mobile clinic scheduling feed;
- transportation partner feed;
- browser geolocation;
- payment processor;
- FHIR/OAuth provider;
- phone/WhatsApp/Telegram/SMS/email handoff;
- emergency-service handoff.

Each adapter must remain inactive until configured with permissions, confirmation, and audit.

## 11. Healthcare Access Prototype Workflows

Nexus can prepare healthcare access steps, explain boundaries, and guide users through health-access workflows. It must not claim:

- a live provider is connected unless configured;
- a medical diagnosis has been made;
- a refill has been submitted;
- an appointment has been scheduled;
- emergency services have been dispatched;
- protected health information has been transmitted.

Safe language:

- "I can prepare the next step."
- "This requires a provider integration."
- "This requires consent and audit logging."
- "I cannot execute that action until the required connection is active."

## 12. Location-Sharing Path

Location sharing requires:

- user-initiated request;
- browser/device permission;
- purpose-specific consent;
- precision control;
- no background tracking;
- no reuse without consent;
- audit before external sharing.

Location is not live-enabled by the Phase 17 registry.

## 13. Payment Path

Payments require:

- approved payment provider;
- identity or account authorization;
- amount/payee/fee review;
- final confirmation;
- receipt/audit record;
- provider compliance.

No payment, payout, checkout, buy, sell, or transfer is live-enabled by Phase 17.

## 14. Prescription/Pharmacy Path

Prescription and refill workflows require:

- identity confirmation;
- patient consent;
- pharmacy/provider authorization;
- regulated source;
- no prescribing claim;
- pharmacy handoff confirmation;
- audit and redaction.

Nexus may prepare a refill-support next step only when the required source and provider workflow are configured.

## 15. Medical Records/FHIR Path

FHIR and medical record access requires:

- SMART-on-FHIR/OAuth or equivalent approved integration;
- scoped consent;
- provider/patient authorization;
- minimum necessary display;
- redaction;
- retention controls;
- audit before access, display, or sharing.

No medical record is fetched, stored, translated, or shared by Phase 17 registry metadata.

## 16. Emergency Dispatch Path

Emergency workflows require the strongest boundaries:

- lead with local emergency services guidance;
- do not claim dispatch;
- do not share location without permission;
- do not contact emergency services without approved regional/legal implementation;
- audit emergency intent and blocked/fallback outcomes.

Emergency dispatch remains future execution only.

## 17. Capability State Labels

Nexus must distinguish:

- Available now: safe current prototype capability.
- Source-ready: registry contract exists and can support source-backed answers after source configuration.
- Partner-required: partner data or provider integration is required.
- Compliance-required: regulated review, consent, privacy, or identity controls are required.
- Future execution: action adapter is planned but disabled by default.

This distinction prevents unsupported claims while keeping the roadmap oriented toward real implementation.

## QA Expectations

QA must verify:

- no unsupported claim of live data;
- no unsupported claim of provider integration;
- no unsupported claim of completed action;
- all high-risk actions remain execution-disabled by default;
- source registry defaults live integrations to inactive unless explicitly configured;
- action planner defaults execution to false;
- user approval is required for provider, contact, location, payment, medical, prescription, and emergency workflows;
- the source registry remains unimported by Standard User runtime until a later reviewed phase.

## Current Phase 17 Boundary

Phase 17 builds real architecture for future execution. It does not activate real calls, messages, prescriptions, provider contact, payments, medical record access, location sharing, or emergency dispatch without the required provider integration, consent, approval, and audit controls.
