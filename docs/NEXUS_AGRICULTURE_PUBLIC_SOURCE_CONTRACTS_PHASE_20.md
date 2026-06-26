# Nexus Agriculture Public Source Contracts Phase 20

Phase: 20 - Agriculture public sources
Roadmap row: "Connect extension/weather/soil source contracts"
Status: metadata-only agriculture source maps, no live ingestion, no runtime activation

## Purpose

Phase 20 specializes the Phase 19 public data connector baseline for farmer-facing and agriculture support answers. Nexus must help farmers and rural communities with useful guidance while clearly distinguishing general information from verified agriculture-source-backed guidance.

This phase does not call agriculture APIs, fetch weather, diagnose crops, contact extension officers, contact buyers, schedule services, dispatch drones, execute AgriTrade transactions, process payments, or activate any provider/service connector.

## Agriculture Source Map

The inert source map is defined in:

- `public/nexus-agriculture-public-source-contracts.js`

It defines contracts for:

- agriculture extension advisory sources;
- public weather and climate sources;
- soil and fertilizer guidance sources;
- irrigation and water-resource sources;
- crop pest and disease authority sources;
- crop calendar and planting-window sources;
- public market context sources;
- farmer cooperative public information sources.

Each contract must include:

- `sourceId`;
- `domain`;
- `displayName`;
- `sourceOwnerType`;
- `agricultureSourceCategory`;
- `supportedFarmerQuestions`;
- `expectedDataFields`;
- `sourceVerificationRequirements`;
- `freshnessRequirements`;
- `regionalizationRequirements`;
- `languageLocalizationRequirements`;
- `allowedResponseStates`;
- `forbiddenClaims`;
- `permissionRequirements`;
- `auditRequirements`;
- disabled runtime/action flags.

## Answer Posture

Nexus may eventually use these agriculture sources for `source_backed_guidance` only when source ownership, source terms, region, language, and freshness are known.

When no verified agriculture source is configured, Nexus must use `general_guidance` or `unavailable_source_fallback`, and should say:

- "I can give general guidance, but verified local crop guidance requires a trusted agriculture source."
- "I need a verified source for local weather, soil, pest, irrigation, or market conditions."
- "I can prepare what to check next, but I cannot confirm local conditions without a source."

## Farmer Safety Boundaries

Nexus must not:

- claim a crop diagnosis is final;
- imply local pest/disease presence without a verified source;
- must not present general crop advice as verified local guidance;
- claim weather, soil, fertilizer, market price, or irrigation data is current without freshness metadata;
- contact an agriculture extension officer without approval;
- contact a buyer or seller without approval;
- create or submit AgriTrade buy/sell actions;
- process payments;
- dispatch logistics, drones, field agents, or emergency services;
- request or share precise location silently.

## Source Disclosure Rules

Agriculture source-backed answers must disclose:

- source owner or source category;
- region covered;
- language/localization boundary;
- last verified or last updated timestamp;
- stale-after rule;
- whether the answer is general guidance or verified source-backed guidance;
- unavailable-source fallback when source data is missing or stale.

## QA Expectations

QA must verify:

- every required agriculture source category exists;
- all contracts keep runtime and action flags disabled;
- each source includes verification, freshness, regionalization, language, permission, and audit requirements;
- source-backed states include `source_backed_guidance` and `unavailable_source_fallback`;
- forbidden claims block crop diagnosis, current conditions without freshness, buyer/seller contact, payments, AgriTrade transactions, logistics, drone dispatch, and silent location sharing;
- Standard User runtime files do not import or load the agriculture source contract module.

## Future Work

Later agriculture phases may add verified source ingestion, but only after source owner, terms, freshness, regional scope, localization, attribution, and QA are complete. Marketplace, buyer/seller, payment, logistics, drone, and provider contact behavior must remain permission-gated and disabled until explicitly approved.
