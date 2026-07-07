# Nexus Demo Provider Dataset

## Implementation Purpose

The Nexus demo provider dataset gives Standard User testing realistic local-safe provider records across health, pharmacy, mobile clinic, agriculture, drone/field operations, marketplace, payments, logistics, maps, communications, learning, workforce, admin review, live knowledge, storage, files/media, and regional Africa support.

These records are usable for end-to-end testing, provider readiness displays, workspace routing, local packets, review queues, and safe next-step preparation.

## provider categories seeded

- Health and chronic care providers
- Pharmacy providers
- Mobile clinic providers
- Agriculture support providers
- Drone and field operations providers
- Marketplace and AgriTrade providers
- Payments and mobile money placeholders
- Logistics and shipment providers
- Maps, routing, and geocoding providers
- Communications providers
- Learning and LMS providers
- Workforce and employer providers
- Provider, clinic, and admin review queues
- Live knowledge and internet service providers
- Database and storage providers
- File, media, and document providers
- Regional, global, and Africa support providers

## dummy/test provider rules

Every record is labeled and modeled as:

- demo provider
- local-safe test data
- test mode
- not live connected
- provider credentials required for real execution

No seeded provider is a contracted real-world partner. No seeded provider defaults to live, ready, configured, or connected.

## Local Capabilities

Demo providers can support local-safe testing for:

- intake and packet preparation
- provider-readiness display
- marketplace buyer/seller/listing review
- local route and shipment preparation
- learning and workforce sample flows
- communications draft preparation
- drone mission planning without launch
- admin/review queue examples
- receipt/audit examples

## what remains blocked by real credentials

Real execution still requires approved credentials, provider configuration, consent, confirmation, audit, and outcome verification. Blocked actions include real payments, SMS/email/WhatsApp sends, calls, provider contact, pharmacy fulfillment, telehealth scheduling, shipment tracking, drone dispatch, file upload to provider storage, and clinical referral submission.

## QA verifies provider coverage

`scripts/nexus-demo-provider-dataset-qa.js` verifies required schema fields, service-lane coverage, truthful demo/test flags, no live-connected defaults, UI/status endpoint wiring, safe labels, and no fake execution claims.
