# Nexus RP6 Shipment Tracking Real Provider Activation

RP6 adopts the shipment-tracking provider lane for controlled read-only package and logistics status lookup. It prepares future carrier/provider adoption while preserving safe skipped/mock behavior when source credentials or carrier endpoints are not configured.

## Activation Scope

- Provider category: Shipment tracking/logistics status
- Provider id: `shipment-tracking`
- Mode: developer/QA-only provider validation
- Runtime status: Standard User remains default-off and unchanged
- Live action status: no execution authorized

## Required Configuration

```powershell
$env:NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED="true"
$env:NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED="true"
$env:NEXUS_SHIPMENT_TRACKING_PROVIDER_ENABLED="true"
$env:NEXUS_SHIPMENT_TRACKING_PROVIDER_API_KEY="<shipment-tracking-api-key>"
```

Candidate providers include AfterShip, EasyPost, Shippo, DHL carrier adapter, FedEx carrier adapter, UPS carrier adapter, and postal/local carrier adapter.

## Test Prompts

- `Track this shipment AB12345678.`
- `Where is package AB12345678?`
- `Change delivery address for AB12345678.`
- `Call the carrier.`
- `Send a driver.`

## Allowed Results

- read-only shipment status lookup
- redacted tracking reference
- source-backed carrier status summary when a real source is configured
- citations/source metadata when available
- retrievedAt/freshness policy
- carrier unavailable or missing tracking number fallback

## Blocked Behavior

RP6 must not expose the raw tracking number unnecessarily, change delivery address, change delivery instructions, contact carriers, call/message carriers, dispatch a driver, submit claims, create accounts, log into carrier accounts, process payment, expose addresses, or create backend shipment state.

## Current Validation Status

The current provider module supports deterministic safe states: missing tracking number asks for a tracking number, missing config returns provider-unavailable, mock mode returns a source-shaped in-transit result with redacted tracking, and live-ready config returns a future read-only query-ready state without performing a network request.

## RP6 QA Expectations

RP6 QA verifies explicit tracking references normalize into safe read-only shipment results, missing tracking input is handled safely, delivery-change and carrier-contact prompts do not gain execution authority, live-ready mode does not execute network behavior, Standard User runtime is not wired to this provider rollout, and all output preserves no-delivery-change/no-carrier-contact/no-driver-dispatch/no-payment/no-account/no-backend-write boundaries.
