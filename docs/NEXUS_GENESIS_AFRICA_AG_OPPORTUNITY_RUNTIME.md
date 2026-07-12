# Nexus Genesis Africa Agriculture Opportunity Runtime

## Purpose

The Nexus Genesis Africa agriculture opportunity runtime adds a local, source-governed planning lane for youth and women pursuing agriculture, training, rural enterprise, and workforce pathways across African contexts. It is implemented as the `africa_youth_women_agricultural_opportunity_intelligence` capability.

## What It Can Do Now

- Interpret Standard User commands about starting farming, choosing agriculture pathways, women-focused barriers, youth training, drone agriculture, crop buyers, finance, and market/logistics readiness.
- Build a local advisory opportunity packet with country context, participant profile, detected barriers, recommended pathways, missing information, model/source receipts, and capability boundaries.
- Expose server routes for status, registries, evaluation, and capability status.
- Render a visible Standard User result card through the Ask Nexus command path.

## Supported Country Registry

The initial registry covers Kenya, Ghana, Nigeria, Tanzania, Uganda, Rwanda, Zambia, South Africa, Senegal, and Ethiopia. Each entry includes language and agriculture-sector context. Production use still requires country-specific validation and official source updates.

## Source and Model Governance

The runtime includes a source registry for national agriculture, labor, youth, women/gender, meteorological, regional, international, training, cooperative, buyer, and finance-program sources. It also registers predictive/advisory models for learner readiness, agriculture pathway fit, farm/climate readiness, market opportunity, women participation barriers, youth employment, cooperatives, and program impact.

## Safety and Production Limits

Nexus does not contact buyers, enroll users in training, apply for financing, dispatch transport or drones, enroll cooperatives, guarantee income, guarantee yield, guarantee employment, or make provider referrals from this runtime. Consent, verified providers, local validation, confirmation, and governance gates are required before any real-world execution.

## API Surface

- `GET /api/nexus/africa-ag-opportunity/status`
- `GET /api/nexus/africa-ag-opportunity/registries`
- `POST /api/nexus/africa-ag-opportunity/evaluate`
- `POST /api/nexus/africa-ag-opportunity/capability-status`

## Example Commands

- `Nexus, help me start farming.`
- `What agriculture pathway fits me?`
- `I am a young woman and need income.`
- `I need childcare to attend training.`
- `I want to learn drone agriculture.`
- `Find buyers for my crops.`
- `Find financing.`
- `Show Africa youth and women agriculture capability status and production limitations.`
