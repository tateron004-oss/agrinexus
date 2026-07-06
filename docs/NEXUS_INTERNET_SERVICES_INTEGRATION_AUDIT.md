# Nexus Internet Services Integration Audit

This document describes the repeatable Nexus Internet Services Integration Audit added to the platform. The audit checks every major Nexus mode against provider-lane mapping, fallback behavior, receipt/audit coverage, Ask Nexus route coverage, UI status language, and safety gates.

## What The Audit Checks

The audit answers mode by mode:

- whether the mode is connected to the internet services/provider readiness model
- which provider lanes it can use
- which actions are live-internet-capable
- which actions are public/read-only retrieval
- which actions require credentials, vendors, consent, or confirmation
- which actions remain local fallback only
- which actions are blocked for safety
- whether UI status language is present
- whether receipts/audit events are mapped
- whether Ask Nexus has a route or command for the mode
- whether demo/sandbox records are clearly local-only

The audit does not enable live execution. Integration status is not execution authority.

## API Routes

- `GET /api/nexus/internet-integration-audit`
- `GET /api/nexus/internet-integration-audit/summary`
- `GET /api/nexus/internet-integration-audit/modes`
- `GET /api/nexus/internet-integration-audit/gaps`

Responses include provider lane names, missing env variable names, status definitions, gaps, and recommended next steps. Secret values are never returned.

## Mode Inventory

The canonical inventory covers:

1. Ask Nexus / Command Center
2. Provider Activation / Connect Everything
3. Live Knowledge / Source Search
4. Agriculture & Food Security
5. Weather / Heat Risk
6. Maps / Routing / Trade Routes
7. Shipment / Logistics
8. Marketplace / Trade
9. Payments / Transactions
10. Communications
11. Media / Music / YouTube
12. Translation / Language
13. Learning / Training / LMS
14. Workforce / Applicant / Employer
15. Drone & Field Operations
16. Storage / Imagery / Files
17. Healthcare / Intake
18. Chronic Care / DM / HTN / Obesity
19. RPM / RTM
20. Telehealth / Video
21. Pharmacy
22. Mobile Clinic
23. Activity / Receipts / Audit
24. Demo / Sandbox Mode
25. Render Credential Setup

## Status Definitions

- `integrated_live_ready`: provider credentials, safety gates, and receipts are ready for a configured lane.
- `integrated_test_ready`: the mode can be safely tested without live external execution.
- `integrated_missing_credentials`: provider lane exists but required env variables are missing.
- `integrated_vendor_required`: partner/vendor setup is required before live action.
- `integrated_public_fallback`: public/read-only fallback exists.
- `integrated_local_fallback`: local preparation works without live provider execution.
- `integrated_blocked_for_safety`: mode is intentionally blocked from execution until safety/compliance gates are complete.
- `partially_integrated`: several mappings exist but at least one dependency remains.
- `not_integrated`: no provider/fallback mapping exists.
- `unknown`: audit cannot classify the mode.

## How To Run

```bash
npm run qa:nexus-internet-services-integration-audit
node scripts/qa-suite.js all-safe
```

Developers can also inspect the API:

```bash
curl http://127.0.0.1:4182/api/nexus/internet-integration-audit
curl http://127.0.0.1:4182/api/nexus/internet-integration-audit/summary
```

## UI

The Standard User Internet Services & Activation Center now includes an **Internet Services Integration Audit** panel. It shows summary cards, filters, mode-by-mode cards, provider lanes, missing credential names, vendor requirements, local fallback behavior, receipt/audit mapping, Ask Nexus command coverage, gaps, and a copyable Markdown report.

## Safety Rules

- No fake citations.
- No secret values.
- No hidden send/call/payment/booking/dispatch/provider handoff.
- Demo/sandbox records never count as live internet execution.
- Healthcare remains no-diagnosis and no-prescription unless approved regulated systems are configured later.
- Payments, pharmacy, mobile clinic dispatch, drone dispatch, LMS enrollment, employer contact, shipment live tracking, communications sends, and provider handoff require explicit gates and receipts.

## Current Limitations

The audit proves mapping and readiness. It does not prove that a missing live provider credential works. Live provider proof still requires one-lane-at-a-time credentialed smoke tests with receipts.
