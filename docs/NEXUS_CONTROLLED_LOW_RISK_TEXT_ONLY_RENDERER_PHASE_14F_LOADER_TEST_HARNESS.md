# Nexus Controlled Low-Risk Text-Only Renderer Phase 14F Loader Test Harness

## Phase 14F Purpose

Phase 14F adds a local-safe, isolated QA harness for the Phase 14D runtime loader stub. The harness proves that the loader can bridge to the Phase 14A text-only renderer only inside a test-controlled environment where both explicit flags are enabled:

- `enableControlledLowRiskRendererVisibleUi === true`
- `enableControlledLowRiskRendererLoader === true`

This phase does not activate the loader or renderer in the Standard User runtime.

## Runtime Boundary

The Standard User build remains unwired:

- `public/index.html` does not load the renderer or loader with script tags.
- `public/app.js` does not import, require, dynamically import, or reference the renderer or loader.
- `server.js` does not inject or special-case the renderer or loader.
- The hidden renderer mount remains hidden, empty, default-off, and non-executing.

No runtime behavior is changed by this phase.

## Test Harness Scope

The Phase 14F QA harness may load these files directly in Node:

- `public/nexus-controlled-low-risk-text-only-renderer.js`
- `public/nexus-controlled-low-risk-text-only-renderer-loader.js`

The harness simulates a DOM mount point and verifies:

- missing or false flags produce no render;
- each single flag alone produces no render;
- both flags together allow only safe low-risk preview payloads to render;
- invalid, missing, high-risk, or excluded payloads are rejected without crashing;
- missing renderer API or missing mount point no-op safely;
- unsafe text remains text, not HTML;
- no buttons, links, forms, inputs, click handlers, scripts, iframes, navigation, provider handoff, permission prompts, storage, fetch/network calls, or execution behavior are introduced.

## Allowed Harness Payloads

Allowed low-risk payloads are limited to the existing Phase 14A categories:

- agriculture training preview;
- irrigation learning preview;
- farm jobs/workforce preview;
- AgriTrade browse-only preview;
- crop issue educational help preview.

These payloads remain preview-only and text-only.

## Excluded Harness Payloads

The harness rejects categories representing:

- calls;
- WhatsApp, Telegram, SMS, or message sending;
- location;
- camera;
- buy, sell, payment, or marketplace transaction;
- schedule appointment;
- emergency help;
- medical or telehealth action;
- provider handoff;
- account login;
- contact lookup;
- external navigation.

## Standard User Browser Validation

Phase 14F browser validation uses the normal Standard User build:

- command: `node server.js`
- URL: `http://127.0.0.1:4182/`
- path: `Start as User`

Required Standard User result:

- loader remains unloaded;
- renderer remains unloaded;
- no visible renderer card appears;
- hidden mount remains hidden and empty;
- no new buttons, links, forms, navigation, provider handoff, permissions, storage, network calls, or execution appear;
- no provider handoff, no permission prompts, and no execution behavior are introduced;
- no browser console warn/error logs are introduced by the dormant harness files.

## Safety Conclusion

Phase 14F is a test-only harness phase. It proves that the Phase 14D loader can safely invoke the Phase 14A renderer in isolation when both flags are explicitly enabled, while preserving the Standard User boundary that keeps the loader and renderer unloaded, inactive, and invisible by default.
