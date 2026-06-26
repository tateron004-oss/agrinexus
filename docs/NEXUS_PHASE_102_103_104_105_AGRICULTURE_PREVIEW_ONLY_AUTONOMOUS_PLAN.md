# Nexus Phase 102/103/104/105 Agriculture Preview-Only Autonomous Plan

## Purpose

This bundle follows Phase 101C by hardening agriculture source readiness and preparing a local, inert intent-routing bridge for preview-only autonomous agriculture support.

The work is intentionally bounded:

- no live source lookup;
- no provider contact;
- no call, message, WhatsApp, SMS, Telegram, or email;
- no payment, marketplace transaction, location sharing, camera, upload, diagnosis, prescription, medical action, pharmacy action, appointment scheduling, transportation dispatch, or emergency dispatch;
- no backend behavior change;
- no Standard User runtime import of the new Phase 102/103/104 modules.

## Phase 102: Agriculture Source Registry Hardening

`public/nexus-agriculture-source-registry-phase-102.js` defines a source-ready registry for agriculture extension, weather/climate, soil/fertilizer, irrigation/water, pest/disease, and market context categories.

The registry records:

- required citation fields;
- freshness fields;
- source owner expectations;
- fallback guidance;
- audit events;
- disabled live/execution flags.

All live and execution flags default to `false`.

## Phase 103: Source Selection Contract

`public/nexus-agriculture-source-selection-phase-103.js` maps safe agriculture prompt categories to a source candidate observation.

The selection contract may say which source category should be reviewed, but it cannot claim that live data was fetched or that local source-backed guidance exists.

If a verified source is unavailable, Nexus must use `general guidance` or an unavailable-source fallback.

## Phase 104: Local Agriculture Intent Router

`public/nexus-agriculture-intent-router-phase-104.js` adds a local-only router contract.

Safe agriculture prompts may route to:

`agriculture_support_review_preview`

Excluded or high-risk prompts route to:

`blocked_or_existing_safety_router`

The router always returns:

- `canExecute: false`
- `executionAuthority: "none"`
- no provider contact;
- no payment;
- no marketplace transaction;
- no location sharing;
- no camera;
- no medical action;
- no emergency dispatch.

## Phase 105: Runtime Integration Plan

The safest first runtime integration lane remains:

Source-backed agriculture support response cards, still preview-only and no-execution.

Before runtime integration, the app must prove:

1. the source registry can identify candidate sources without live lookup;
2. source-backed claims require verified source metadata, freshness, citation, confidence, and region;
3. missing or stale sources fall back to general guidance;
4. the intent router blocks high-risk/action requests;
5. the renderer shows no-execution disclosures;
6. no app/server path imports Phase 102/103/104 modules until a dedicated browser-validation phase.

## QA Coverage

The deterministic QA scripts are:

- `scripts/nexus-phase-102-agriculture-source-registry-hardening-qa.js`
- `scripts/nexus-phase-103-agriculture-source-selection-contract-qa.js`
- `scripts/nexus-phase-104-agriculture-intent-router-local-qa.js`
- `scripts/nexus-phase-105-preview-only-autonomous-runtime-integration-plan-qa.js`

These scripts verify the contracts are present, inert, package aliases exist, safe-suite wiring exists, and active runtime files do not import the new local modules.
