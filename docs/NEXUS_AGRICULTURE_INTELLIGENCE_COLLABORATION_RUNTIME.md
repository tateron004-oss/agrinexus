# Nexus Agriculture Intelligence and Collaboration Runtime

## Purpose

Nexus Agriculture Intelligence and Collaboration Runtime adds a working agriculture coordination layer for Standard User and provider/admin review. It prepares source-labeled packets, readiness evidence, review queues, and receipts across crop, weather, soil, livestock, marketplace, logistics, drone, finance, farm profile, and training workflows.

The runtime is implementation-first but truthfulness-gated. Nexus can prepare and review agriculture work now. Live production execution remains gated by provider credentials, source authorization, user confirmation, expert/admin review, audit, and legal/regulatory requirements.

## Provider and Source Categories

The central registry is implemented in `public/nexus-agriculture-collaboration-runtime.js` and includes:

- Weather / climate / heat risk: NOAA, OpenWeather, Tomorrow.io, NASA POWER, Visual Crossing, ECMWF placeholder, CHIRPS placeholder.
- Satellite / remote sensing: NASA Earthdata, NASA MODIS, Landsat/USGS, Sentinel/Copernicus, Google Earth Engine placeholder, Planet Labs placeholder, Maxar placeholder.
- Soil / land / water: USDA NRCS Soil Survey / SSURGO, SoilGrids, FAO soil placeholder, local soil lab placeholder, irrigation district placeholder.
- Crop advisory / extension: USDA resources, state extension services, FAO crop resources, CGIAR resources.
- Pest / disease / plant health: PlantVillage, CABI, EPPO placeholder, local extension plant clinic.
- Livestock / animal health: FAO livestock resources, local veterinary provider placeholder.
- Marketplace / buyer-seller / trade: AgriTrade internal marketplace, generic marketplace adapter, commodity price provider.
- Logistics / shipment / cold chain: internal route/shipment tracker, carrier API placeholder, cold chain provider.
- Farm management / records: local farm profile registry.
- Drone / field operations: DroneDeploy placeholder, DJI/cloud provider, Pix4D placeholder.
- Finance / insurance / grants: grant provider placeholder, crop insurance provider placeholder, payment/escrow placeholder.
- Learning / workforce / extension training: Koachlearn/Nexus learning, extension training provider.

Each provider exposes safe readiness metadata only: required env names, configured status, source mode, supported actions, blocked actions, standards, receipt support, and execution state. Secret values are never returned.

## Environment Variables

Core flags:

- `NEXUS_AGRICULTURE_ENABLED`
- `NEXUS_AGRICULTURE_LIVE_SOURCES_ENABLED`
- `NEXUS_AGRICULTURE_SYNTHETIC_DATA_ENABLED`
- `NEXUS_AGRICULTURE_MARKETPLACE_ENABLED`
- `NEXUS_AGRICULTURE_LOGISTICS_ENABLED`
- `NEXUS_AGRICULTURE_DRONE_ENABLED`
- `NEXUS_AGRICULTURE_FINANCE_ENABLED`
- `NEXUS_AGRICULTURE_EXPERT_REVIEW_CONFIRMED`
- `NEXUS_AGRICULTURE_ADMIN_REVIEW_CONFIRMED`

Provider credentials are detected by name only, including `OPENWEATHER_API_KEY`, `TOMORROW_IO_API_KEY`, `NASA_EARTHDATA_TOKEN`, `USDA_API_KEY`, `SOILGRIDS_API_KEY`, `PLANTVILLAGE_API_KEY`, `CABI_API_KEY`, `FAO_API_KEY`, `AGRITRADE_PROVIDER_API_KEY`, `AGRITRADE_MARKETPLACE_API_KEY`, `AGRITRADE_CARRIER_API_KEY`, `AGRITRADE_COLD_CHAIN_API_KEY`, `DRONEDEPLOY_API_KEY`, `PIX4D_API_KEY`, `DJI_CLOUD_API_KEY`, `AGRITRADE_PAYMENT_API_KEY`, and `KOACHLEARN_API_KEY`.

## Runtime Routes

Server routes expose safe metadata and action preparation:

- `GET /api/agriculture-collaboration/status`
- `GET /api/agriculture-collaboration/sources`
- `GET /api/agriculture-collaboration/evidence`
- `POST /api/agriculture-collaboration/action`
- `POST /api/agriculture-collaboration/execute`

`/execute` is an execution gate checker. It does not silently send, post, pay, schedule, fly, track, or submit. It returns blocked statuses unless all provider, confirmation, review, and authorization requirements are satisfied.

## Safety Levels

- Level 1 Prepare only: crop advisory, irrigation checklist, field scouting report, listing/message drafts.
- Level 2 Communicate: buyer/seller, farmer reminder, or extension handoff communication; requires provider and confirmation.
- Level 3 Schedule / coordinate: extension visit, mobile agriculture support, pickup/delivery, training; requires provider and confirmation.
- Level 4 Marketplace / logistics execution: live listing, offer, shipment update, cancellation, delivery; blocked by default.
- Level 5 Regulated / expert-only advisory: pesticide, veterinary, insurance, loan/grant, export/customs; preparation only until expert/admin review.
- Level 6 Drone / field operation execution: flight, mission upload, spraying; blocked by default and requires provider, licensed/human approval, confirmation, and compliance review.

## Workflow Behavior

Weather/climate/heat risk:
Nexus can prepare weather and heat-risk packets. It never claims live weather unless a configured live source is active. Synthetic or fallback data is labeled.

Soil/irrigation/water:
Nexus can prepare irrigation and soil summaries. It does not claim a soil lab result unless a configured source or user-entered/uploaded result exists.

Crop/pest/disease:
Nexus can prepare crop and pest/disease advisory packets. Pesticide or chemical decisions require label, legal, local extension, and licensed/expert review.

Livestock:
Nexus can prepare livestock support and veterinary handoff checklists. It does not diagnose animals or prescribe treatment.

Marketplace:
Nexus can prepare listing drafts, buyer/seller messages, trade match summaries, and transaction receipts. It does not post listings, contact buyers/sellers, process payments, or accept offers unless configured and confirmed.

Logistics:
Nexus can prepare shipment plans, route plans, cold-chain checklists, and tracking-readiness summaries. It does not claim live carrier tracking or delivery updates unless a carrier source is configured.

Drone/field observation:
Nexus can prepare drone field observation packets and mission plans. It does not launch drones, scan fields, or execute spraying.

Farm profile/memory/delete:
Nexus can prepare local/session farm profile, intake, buyer/seller deactivation, and delete/deactivation receipts. It does not claim production persistent storage when only local/session state is used.

## Standard User and Admin UI

The Standard User workspace includes an Agriculture Intelligence panel with cards for Crop Advisory, Pest / Disease Help, Soil / Irrigation, Weather / Heat Risk, Livestock Support, Marketplace Listing, Buyer Message, Seller Message, Trade Match, Shipment Plan, Shipment Tracking, Cold Chain, Drone Field Observation, Extension Service Handoff, Farm Profile / Intake, Training / Workforce, and Finance / Grants Packet.

Provider/admin review areas show:

- Agriculture Source Readiness Matrix
- Agriculture Provider Evidence
- Expert/Admin Review Queue
- Agriculture Receipts

## Receipts and Source Labels

Every prepared agriculture result includes:

- source provider and category
- source mode: live, sandbox, synthetic, localFallback, or blocked
- freshness/confidence note
- missing credentials
- confirmation and review requirements
- blocked execution reason
- next steps
- receipt ID

Approved language includes “supported but not connected,” “prepared locally and has not been sent,” “live weather source is not configured,” and “drone mission is prepared only; no flight has been executed.”

## Testing

Run:

```bash
npm run qa:nexus-agriculture-provider-registry
npm run qa:nexus-agriculture-runtime
npm run qa:nexus-agriculture-source-readiness
npm run qa:nexus-agriculture-weather-climate
npm run qa:nexus-agriculture-soil-irrigation
npm run qa:nexus-agriculture-crop-pest-disease
npm run qa:nexus-agriculture-livestock
npm run qa:nexus-agriculture-marketplace
npm run qa:nexus-agriculture-logistics
npm run qa:nexus-agriculture-drone-field
npm run qa:nexus-agriculture-farm-profile
npm run qa:nexus-agriculture-ui-readiness
npm run qa:nexus-agriculture-provider-evidence
npm run qa:nexus-agriculture-receipts
npm run qa:nexus-agriculture-safety-gates
node scripts/qa-suite.js agriculture
node scripts/qa-suite.js all-safe
```

## Activation Notes

Live production execution remains blocked until the real provider/source category is configured, source authorization is granted, user confirmation is captured, expert/admin review is satisfied where required, and legal/regulatory requirements are met. Nexus Agriculture Intelligence and Collaboration Runtime is fully implemented on the Nexus side. Live production execution remains gated only by real provider credentials, source authorization, vendor approval, user confirmation, expert/admin review, and legal/regulatory requirements.
