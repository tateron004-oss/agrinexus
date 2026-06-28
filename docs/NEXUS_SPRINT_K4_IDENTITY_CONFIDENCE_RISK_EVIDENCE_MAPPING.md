# Sprint K4 - Identity Confidence, Risk, and Evidence Mapping

Sprint K4 adds an inert mapping contract for contact/provider identity resolution. The mapper converts fixture-style identity signals into a review-only candidate that can explain confidence, risk, and evidence without resolving live contacts or providers.

## Purpose

Nexus must eventually understand who or what a user means when they say things like "call John", "message the seller", or "contact my clinic". K4 defines the safe interpretation layer before any runtime activation:

- confidence is based on visible evidence, ambiguity, and missing information
- risk is based on entity type and requested action type
- evidence is summarized for review only
- output is validated by the K2 inert identity contract
- execution authority always remains false

## Mapping Rules

Confidence tiers:

- `high`: exact visible label or verified fixture evidence
- `medium`: partial visible evidence or provider/organization context
- `low`: role-only or weak phrase evidence
- `ambiguous`: multiple candidates or unresolved duplicate target
- `missing`: no target or required identifying information

Risk tiers:

- `low`: education or browse-only identity context
- `medium`: non-sensitive workforce or organization review context
- `high`: contact, provider, healthcare, pharmacy, marketplace, transportation, call, message, or scheduling context
- `restricted`: emergency context or requests that cannot safely proceed without a separate emergency boundary

Evidence mapping:

- keeps only non-sensitive summaries
- avoids phone numbers, addresses, medical details, payment data, provider credentials, and private contact identifiers
- records source surface and language for review
- records missing-information and ambiguity states without guessing

## Non-Execution Boundary

K4 does not:

- load in `public/index.html`
- load in `public/app.js`
- load in `server.js`
- call providers
- look up contacts
- open phone, WhatsApp, Telegram, SMS, or email
- request permissions
- use network calls
- write storage or backend state
- create pending real-world actions
- bypass confirmation or final execution gates

Every candidate produced by K4 keeps:

- `identityResolutionOnly: true`
- `approvalIntentOnly: true`
- `finalExecutionGateRequired: true`
- `executionAuthority: false`
- `providerDispatchAllowed: false`
- `providerHandoffAllowed: false`
- `communicationAllowed: false`
- `executionAllowed: false`

## QA Protection

The K4 QA verifies the document, mapper module, package alias, safe-suite wiring, representative confidence/risk/evidence cases, K2 contract validation, runtime absence, and no side-effect APIs.
