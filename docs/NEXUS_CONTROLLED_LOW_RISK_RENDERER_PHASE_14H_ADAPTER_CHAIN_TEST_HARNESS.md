# Nexus Controlled Low-Risk Renderer Phase 14H Adapter Chain Test Harness

## Phase 14H Purpose

Phase 14H adds a local-safe, isolated QA harness for the complete test-only chain:

1. low-risk candidate metadata;
2. eligibility adapter;
3. safe text-only renderer payload;
4. runtime loader stub;
5. text-only renderer;
6. simulated mount point.

This phase proves the chain can work only when all three test-only flags are explicitly enabled:

- `enableControlledLowRiskRendererEligibilityAdapter === true`
- `enableControlledLowRiskRendererVisibleUi === true`
- `enableControlledLowRiskRendererLoader === true`

The adapter, loader, and renderer remain inactive in Standard User.

## Runtime Boundary

The Standard User build remains unwired:

- `public/index.html` does not load the adapter, loader, or renderer.
- `public/app.js` does not import, require, dynamically import, or reference the adapter, loader, or renderer.
- `server.js` does not inject or special-case the adapter, loader, or renderer.
- No visible app UI, buttons, links, forms, inputs, click handlers, routes, provider handoff, permission prompts, storage writes, fetch/network calls, navigation, or execution behavior are introduced.

## Harness Behavior

The QA harness may load these modules directly in Node:

- `public/nexus-controlled-low-risk-renderer-eligibility-adapter.js`
- `public/nexus-controlled-low-risk-text-only-renderer-loader.js`
- `public/nexus-controlled-low-risk-text-only-renderer.js`

The harness simulates a hidden mount point and verifies:

- all flags missing or false produces no payload and no render;
- adapter flag alone may build a payload, but loader still no-ops;
- adapter plus visible UI flags may build a payload, but loader still no-ops when loader flag is false;
- visible UI plus loader flags without adapter flag produces no adapter payload and no render;
- all three flags with valid low-risk metadata produces text-only preview output in the simulated mount;
- invalid, missing, high-risk, or excluded candidates do not render;
- missing renderer module/global no-ops safely;
- missing mount point no-ops safely;
- unsafe text remains plain text and never executable HTML.

## Allowed Candidates

Allowed low-risk test candidates include:

- agriculture training preview;
- irrigation learning preview;
- farm jobs/workforce preview;
- AgriTrade browse-only preview;
- crop issue educational help preview.

Each candidate must be low-risk, preview-only, and explicitly adapter-enabled.

## Excluded Candidates

Excluded and high-risk candidates include:

- call someone;
- send WhatsApp, Telegram, or SMS;
- show location;
- open camera;
- buy, sell, or pay;
- schedule appointment;
- emergency help;
- medical or telehealth action;
- provider handoff;
- account login;
- contact lookup;
- external navigation;
- URL opening;
- execution or action completion.

## Inert Output Contract

Rendered harness output must remain text-only, inert, and preview-only. It must not create:

- buttons;
- anchors;
- forms;
- inputs;
- handlers;
- scripts;
- iframes;
- navigation;
- provider handoff;
- permission prompts;
- storage writes;
- fetch/network calls;
- execution behavior.

## Standard User Browser Validation

Phase 14H browser validation uses the normal Standard User build:

- command: `node server.js`
- URL: `http://127.0.0.1:4182/`
- path: `Start as User`

Expected Standard User result:

- adapter remains unloaded;
- loader remains unloaded;
- renderer remains unloaded;
- no visible renderer card appears;
- hidden mount remains hidden and empty;
- no provider handoff, no permission prompts, no navigation from renderer, and no execution behavior appear;
- no browser console warn/error logs are introduced by the dormant harness files.

## Safety Conclusion

Phase 14H is a test-only chain harness phase. It proves the low-risk candidate metadata to renderer chain can work in isolation while preserving the production-facing Standard User boundary.
