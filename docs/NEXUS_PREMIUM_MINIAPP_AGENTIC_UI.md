# Nexus Premium Mini-App Agentic UI

## What changed

The Standard User experience now opens as a premium command landing with a mini-app launcher, mission workspace, activity and receipts layer, unified status badges, and a polished Activation Center summary. The goal is to keep Nexus approachable as a landing-page-style assistant while making it feel more like an agentic command center.

## Landing page / mini-app feel

The first screen still starts with Ask Nexus, prompt chips, visual launcher cards, recent work, local status, and low-bandwidth controls. Provider/operator depth remains available, but it is kept behind the Activation Center and review workspace rather than replacing the user-facing home.

## Command Landing

The command hero now includes:

- Start Mission
- Continue Mission
- View Receipts
- Provider Readiness
- Prompt chips for care summaries, crop/weather risk, shipment tracking, buyer/seller packets, job prep, training referrals, drone planning, and connected-service tests
- Plain-language status chips for online/local fallback, provider connection state, live execution gate, low-bandwidth readiness, receipts, and credential gaps

## Mini-App Intelligence Launcher

The new grouped mini-app launcher keeps the existing workflows but organizes them into eight product areas:

- Health & Care
- Agriculture & Food Security
- Trade & Marketplace
- Logistics & Maps
- Learning & Workforce
- Drone & Field Operations
- Communications & Media
- Provider Activation

Each card includes a purpose, readiness badge, summary, primary action, and secondary status/details action. The cards route into existing Nexus commands and focused workflow windows.

## Mission Workspace

The Agentic Mission Workspace summarizes the current Nexus task using existing workflow, packet, action history, and recent-workflow state. It shows the mission goal, what Nexus understands, collected information, missing information, recommended next step, provider readiness, consent/confirmation status, receipt/timeline, and safety note.

Mission statuses include draft, collecting info, ready to prepare, locally prepared, needs credentials, needs consent, needs confirmation, vendor required, live ready, executed with receipt, and blocked for safety.

## Status badges

Status language is unified around user-safe trust labels such as prepared locally, connected and test-ready, provider credentials missing, vendor endpoint required, live action requires confirmation, executed with receipt, blocked for safety, low-bandwidth mode active, and offline queue ready.

## Activity & Receipts

The Activity & Receipts panel summarizes recent missions, packets, and action history. It explicitly separates what happened from what did not happen, preserving no-secret and no-fake-execution language.

The premium activity layer does not expose secrets, provider tokens, API keys, full private credentials, or hidden execution metadata.

## Activation Center improvements

The Activation Center now includes a Nexus Online Readiness summary with connected, test-ready, live-ready, missing-credential, vendor-required, local fallback, and failed-test counts. Existing Connect Everything, Render Credential Setup, missing credential checklist, provider test controls, and provider matrix remain visible.

## Mobile and accessibility

The premium layer adds single-column mobile layouts, large touch targets, focus-visible states, reduced-motion handling, and low-bandwidth-safe simplified surfaces. Gated and disabled states continue to explain why they cannot execute.

## QA

Primary QA:

```bash
node scripts/nexus-premium-miniapp-agentic-ui-qa.js
npm.cmd run qa:nexus-premium-miniapp-agentic-ui
node scripts/qa-suite.js all-safe
```

Existing provider, internet services, Render credential, and workforce safe suites should remain green.

## Known limitations

Live actions still require configured providers, credentials, consent, confirmation, and audit receipts. Nexus does not diagnose, prescribe, dispatch, pay, contact providers, send messages, place calls, share location, launch drones, or claim live execution without those gates.
