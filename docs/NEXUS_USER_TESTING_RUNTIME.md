# Nexus User Testing Runtime

The Nexus user testing runtime is a local-safe product layer for end-to-end Standard User testing. It connects persistent memory, prediction, provider credential gates, consent, receipts, role dashboards, and outcome verification without claiming unsupported live execution.

## Active Local Capability

- Persistent memory records for health, agriculture, marketplace, logistics, learning, workforce, communications, drone planning, provider preparation, pharmacy preparation, mobile clinic preparation, and platform feedback.
- Receipts and audit events for every local action.
- Predictive next-step snapshots with confidence, missing data, and safety notes.
- Confirmation and consent gates for sensitive workflows.
- Outcome verification for prepared, queued, blocked, failed-safe, local-completed, and verified outcomes.
- Role-based dashboard surfaces for Standard User, Patient/Health User, Farmer, Buyer, Seller, Learner/Applicant, Employer, Provider, Pharmacy, Mobile Clinic, and Admin/Review.
- Deterministic end-to-end harness flows for controlled user testing.

## Database Behavior

When a production database is not configured, Nexus shows:

`Local memory active. Production database not connected.`

Local memory uses the existing development JSON store. Production database variables are detected by name only and secret values are never exposed.

## Provider Gates

Provider lanes include live knowledge/search, database/storage, maps, email, SMS, WhatsApp, telehealth, payments, marketplace, logistics, pharmacy/provider referral, mobile clinic, LMS/workforce, drone service, file/media storage, and admin/review queues.

Credential readiness reports missing environment variable names only. Sensitive lanes remain blocked or confirmation-gated unless a provider is configured, user consent is captured, a final execution gate passes, an audit event is recorded, and outcome verification is possible.

## Safety Boundaries

This layer does not diagnose, prescribe, change medication, book appointments, move money, place orders, contact providers, send messages, place calls, share location, dispatch vehicles, or task drones. It prepares, gates, records, verifies, and reports truthful local outcomes.

## QA

Run:

```bash
npm run qa:nexus-user-testing-runtime
node scripts/qa-suite.js nexus-workforce
node scripts/qa-suite.js all-safe
```
