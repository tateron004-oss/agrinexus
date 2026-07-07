# Nexus Persistent Memory Layer

Nexus now has a shared persistent-memory runtime for Standard User workflows. It supports creating, reading, updating, archiving/inactivating, searching, and locally clearing demo-safe records, plus receipt creation and predictive-context export.

## What Is Stored

Memory records use a consistent schema with `id`, `type`, `title/name`, `status`, timestamps, role/source fields, `payload`, consent/risk fields, related record IDs, receipt IDs, and a truthful `persistenceScope`.

Supported record areas include health intakes, chronic illness/RPM/RTM support, farmer/farm/crop issues, buyers, sellers, listings, transactions, shipments, learning progress, workforce/applicant/employer profiles, provider/clinic/pharmacy/mobile clinic records, drone missions, predictive intelligence records, and audit receipts.

## Persistence Scope

The Standard User web app uses browser-local memory when a production database is not configured:

`Local memory active. Production database not connected.`

The server exposes a JSON/dev-store backed memory API for local/runtime workflows. Database readiness detects common environment variables such as `DATABASE_URL`, `NEXUS_DATABASE_URL`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `FIREBASE_PROJECT_ID`, and `MONGODB_URI`, but never exposes secret values.

## Receipts

Every meaningful memory action creates a receipt with action, result, status, timestamp, persistence scope, actor role, blocked reason when relevant, and next step. Receipts state what happened locally and do not claim provider submission, payment completion, shipment GPS tracking, drone dispatch, diagnosis, prescribing, or emergency handling.

## Safety Limits

Local memory is not a production medical, financial, legal, provider, payment, shipment, drone, or emergency record system unless production database and compliance controls are configured. Sensitive records should be archived/inactivated by default; hard local clear is reserved for demo-safe local records.

## Runtime Surfaces

The Standard User UI shows a compact Memory & Records card and a full memory panel after memory commands. Supported commands include saving patient/crop/buyer/shipment records, showing saved records, showing receipts, archiving/inactivating a record, clearing local demo records, and exposing predictive context.

## QA

Run:

```bash
node scripts/nexus-persistent-memory-layer-qa.js
npm.cmd run qa:nexus-persistent-memory-layer
node scripts/qa-suite.js nexus-workforce
node scripts/qa-suite.js all-safe
```
