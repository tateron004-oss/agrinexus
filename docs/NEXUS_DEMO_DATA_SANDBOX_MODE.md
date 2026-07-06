# Nexus Demo Data / Sandbox Mode

Nexus Demo Data / Sandbox Mode lets testers load fictional records into the Standard User experience so every major Nexus mode can be demonstrated without real patients, providers, vendors, employers, buyers, sellers, payments, carriers, drone partners, or external execution.

## What It Does

- Adds visible `Load Demo Data`, `Reset Demo Data`, `Show Demo Records`, and `Hide Demo Records` controls.
- Marks sandbox content with `recordSource: "demo"`, `demo: true`, and a visible `Demo / Sandbox` badge.
- Seeds the mini-app launcher, Agentic Mission Workspace, Activity & Receipts, and mode detail surfaces with fictional records.
- Keeps real provider readiness, Render Credential Setup, and Activation Center controls visible.

## Sections Seeded

- Health & Care: fictional chronic care, diabetes, hypertension, obesity, RPM, RTM, telehealth, pharmacy, mobile clinic, and deactivated-patient examples.
- Agriculture & Food Security: fictional farm, crop issue, weather-risk, pest/disease, soil/crop, market price, input request, and buyer linkage examples.
- Trade & Marketplace: fictional buyer, seller, listing, order, adjustment, cancellation, dispute/refund, and closed-business examples.
- Logistics & Maps: fictional shipment, route, pickup/dropoff, route receipt, tracking request, and timeline examples.
- Learning & Workforce: fictional learner, learning path, training referral, LMS draft, applicant, resume, job, employer, outreach, interview, and inactive examples.
- Drone & Field Operations: fictional mission request, survey target, provider/equipment, compliance checklist, imagery placeholder, receipt, and archived/cancelled examples.
- Communications & Media: fictional email, SMS, WhatsApp, voice/call, media, translation, and readiness receipts.
- Provider Activation: fictional test-ready, missing-credential, vendor-required, fallback, activation receipt, and Render checklist examples.

## Demo Missions

Sandbox Mode seeds nine guided missions:

1. Patient care preparation mission.
2. Crop/weather risk mission.
3. Buyer/seller transaction mission.
4. Shipment tracking mission.
5. Applicant job support mission.
6. Learner training referral mission.
7. Drone mission planning mission.
8. Provider readiness mission.
9. Communication preparation mission.

Each mission includes a goal, what Nexus understands, collected information, missing information, next step, provider readiness, receipt/timeline, and safety note.

## What It Does Not Do

- Does not diagnose, prescribe, or claim provider review.
- Does not send SMS, WhatsApp, email, phone calls, or Telegram messages.
- Does not book telehealth, pharmacy, mobile clinic, logistics, field visit, or employer actions.
- Does not process payments, refunds, purchases, or marketplace transactions.
- Does not dispatch drones, carriers, clinics, emergency services, or providers.
- Does not expose secrets or fake credentials.
- Does not set `NEXUS_ALLOW_LIVE_EXECUTION=true`.

## Reset Behavior

`Reset Demo Data` removes sandbox records only. Real records, provider readiness, credentials, environment settings, and non-demo receipts are not changed.

## Environment Flags

```bash
NEXUS_DEMO_DATA_ENABLED=true
NEXUS_DEMO_DATA_AUTOLOAD=false
NEXUS_DEMO_DATA_ALLOW_RESET=true
```

Autoload remains off by default. Demo data is loaded by explicit user action in the Standard User UI.

## QA

Run:

```bash
npm.cmd run qa:nexus-demo-data-sandbox-mode
node scripts/qa-suite.js all-safe
node scripts/qa-suite.js nexus-workforce
```

Browser validation should confirm demo controls appear, demo records load, mini-app counts update, mission and receipt panels populate, reset removes demo records only, no secrets appear, and no fake external execution claims appear.
