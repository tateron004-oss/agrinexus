# Nexus All-Modes Activation Runtime

## What Was Implemented

Nexus now has an all-modes activation runtime that connects the existing Standard User modes, persistent operation records, receipts, audit logs, provider readiness checks, and safe local fallback behavior into one backend-supported activation foundation.

The runtime does not fake live execution. It prepares local packets and records now, and it can move to live execution only when the required provider credentials, consent, confirmation, approvals, and adapter receipt are present.

## Activation Registry Structure

Each activation registry entry includes:

- `id`
- `label`
- `category`
- `modeIds`
- `actionIds`
- `description`
- `providerType`
- `requiredEnv`
- `optionalEnv`
- `requiresConsent`
- `requiresConfirmation`
- `requiresAdminApproval`
- `requiresVendorApproval`
- `supportsLocalFallback`
- `localFallbackActions`
- `liveActions`
- `blockedActions`
- `riskLevel`
- `status`
- `missingEnv`
- `configured`
- `testability`
- `lastChecked`
- `safeFallbackMessage`
- `successReceiptType`
- `auditEventTypes`
- `recordTypesAffected`

Registry categories:

- Foundation
- Communications
- Live Knowledge / AI Search
- Healthcare
- Marketplace / Trade
- Agriculture
- Maps / Logistics / Shipment
- Workforce / Career / Hiring
- Learning / Training / LMS
- Drone Support
- Media / Music
- Admin / Provider / Vendor Operations

## Provider Categories

The runtime exposes adapter descriptors for:

- Live knowledge
- Email
- SMS
- WhatsApp
- Telegram
- Phone/call handoff
- Telehealth/video
- Pharmacy
- Mobile clinic
- RPM/RTM provider sync
- Payment
- Marketplace/order
- Employer/ATS/CRM
- LMS/enrollment
- Maps/geocoding/routing
- Shipment tracking
- Drone dispatch
- Drone imagery/storage
- Media/YouTube/external media
- Generic provider endpoint

Adapters report missing environment variable names only. Secret values are not returned.

## Live Execution Gate

The live execution gate returns one of:

- `local_prepared`
- `blocked_missing_credentials`
- `consent_required`
- `confirmation_required`
- `approval_required`
- `vendor_required`
- `blocked_for_safety`
- `live_executed`
- `cancelled`
- `failed`

Sensitive actions such as communications, provider handoff, telehealth, pharmacy, mobile clinic, payments, LMS enrollment, employer outreach, logistics dispatch, drone dispatch, imagery upload, and shipment sync are routed through the gate.

Nexus can only claim `live_executed` after a configured provider adapter returns a valid external receipt. Without that receipt, Nexus reports local preparation or a gated/blocked status.

## AI Agent Routing Behavior

The runtime includes command-to-action planning for user goals such as:

- preparing SMS, WhatsApp, email, Telegram, and call handoffs
- creating pharmacy, telehealth, mobile clinic, and provider packets
- saving RPM/RTM readings
- preparing training/LMS enrollment requests
- preparing applicant, employer, and workforce packets
- creating drone mission requests
- gating drone dispatch and imagery upload
- tracking shipments and routes
- canceling transactions locally unless a payment/order provider is configured
- researching through live knowledge when configured

The plan identifies the target mode, action, provider lane, missing configuration, local fallback, and next step.

## Memory And Lifecycle Behavior

The runtime uses existing persistent operation memory for:

- Patients
- Intakes
- Chronic care profiles
- RPM/RTM readings
- Provider packets
- Buyers and sellers
- Transactions
- Applicants
- Employers
- Learners
- Training referrals
- Drone providers
- Drone equipment
- Drone missions
- Shipments
- Provider/vendor records
- Communications receipts

Lifecycle states supported:

- `active`
- `inactive`
- `deactivated`
- `deleted`
- `deceased`
- `closed`
- `cancelled`
- `expired`
- `archived`

Lifecycle changes create receipts and audit events and clearly state local-only versus live-synced status.

## Receipt And Audit Structure

Receipts include:

- receipt ID
- timestamp
- mode/action
- provider lane
- gate status
- missing credentials
- consent/confirmation/approval status
- local record or action ID
- external receipt placeholder when absent
- what Nexus did
- what Nexus did not do
- safety note and next step

Audit events include:

- activation matrix viewed
- provider lane checked
- provider test requested/passed/failed
- live execution gate checked
- local fallback created
- consent/confirmation/approval/vendor required
- live action blocked/cancelled/executed
- unsafe action blocked
- record created/updated/deactivated/deleted
- patient marked deceased
- business marked closed
- transaction cancel/adjust requested
- external execution failed

No secrets are stored in audit logs.

## API Surface

Implemented endpoints:

- `GET /api/nexus/activation-matrix`
- `GET /api/nexus/live-execution-status`
- `POST /api/nexus/provider/test`
- `POST /api/nexus/live-execution/prepare`
- `POST /api/nexus/live-execution/confirm`
- `POST /api/nexus/live-execution/cancel`
- `POST /api/nexus/records/lifecycle`
- `GET /api/nexus/operation-receipts`
- `GET /api/nexus/audit-log`

## Safety Rules

Nexus must not claim:

- doctor review
- pharmacy receipt
- clinic dispatch
- drone dispatch
- payment processing
- external transaction cancellation
- employer contact
- learner enrollment
- live shipment tracking
- sent message
- created video visit
- provider/vendor acceptance

unless a configured adapter executes and returns a valid receipt.

Healthcare remains no-diagnosis, no-prescription, and not a replacement for professional medical care. Emergency language directs the user to local emergency services.

## QA Commands

Required focused QA:

```bash
node --check scripts/nexus-all-modes-activation-runtime-qa.js
npm run qa:nexus-all-modes-activation-runtime
```

Required broad QA:

```bash
git diff --check
node --check server.js
node --check public/app.js
node --check scripts/qa-suite.js
node scripts/qa-suite.js nexus-workforce
node scripts/qa-suite.js all-safe
```

## Remaining Limitations

Live execution remains blocked until the relevant provider or vendor credentials are configured and the action passes consent, confirmation, approval, and adapter receipt checks. This is intentional; the platform is activation-ready without making false live claims.
