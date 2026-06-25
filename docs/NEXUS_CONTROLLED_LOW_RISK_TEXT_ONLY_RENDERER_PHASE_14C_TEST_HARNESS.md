# Nexus Controlled Low-Risk Text-Only Renderer Phase 14C Test Harness

## Purpose

Phase 14C adds a local-safe isolated test harness for the dormant Phase 14A text-only renderer. The harness proves the renderer can render safe low-risk text previews only when an explicit test-controlled config uses:

```js
enableControlledLowRiskRendererVisibleUi === true
```

This phase does not activate the renderer in the Standard User runtime.

## Runtime Boundary

The renderer remains unloaded and inactive in normal Standard User use:

- no script tag in `public/index.html`;
- no import, require, dynamic import, or helper call in `public/app.js`;
- no backend injection or config activation in `server.js`;
- no buttons, links, forms, event handlers, routing, provider handoff, permission prompts, storage writes, fetch calls, navigation, or execution behavior.

Standard User browser validation must continue to show:

- the renderer module is not loaded;
- the hidden mount remains hidden;
- the hidden mount remains empty;
- `aria-hidden="true"`;
- `data-visible-renderer-enabled="false"`;
- no visible renderer card.

## Harness Model

The harness runs in Node using a controlled fake document and fake elements. It loads:

```text
public/nexus-controlled-low-risk-text-only-renderer.js
```

The harness may simulate a mount point and may pass strict test config with `enableControlledLowRiskRendererVisibleUi: true`. This is local-safe test behavior only and does not add runtime wiring.

## Allowed Low-Risk Harness Payloads

The harness validates safe text-only rendering for:

- agriculture training preview;
- irrigation learning preview;
- farm jobs/workforce preview;
- AgriTrade browse-only preview;
- crop issue educational help preview.

Allowed model categories are:

- `agriculture_training`;
- `irrigation_learning`;
- `farm_jobs_workforce_discovery`;
- `agritrade_marketplace_preview`;
- `crop_issue_education_help`.

## Disabled and Invalid Payload Behavior

When the flag is false or missing:

- render returns false;
- mount remains hidden;
- mount remains empty;
- `aria-hidden` remains true;
- `data-visible-renderer-enabled` remains false.

Missing, malformed, unsupported, high-risk, or excluded payloads must render nothing.

## Text Safety Requirements

Rendered content must use safe text assignment only. Unsafe text payloads, including HTML-looking strings, must remain text and must not become executable DOM.

The renderer must not create:

- buttons;
- anchors;
- forms;
- inputs;
- click handlers;
- scripts;
- iframes;
- provider handoff;
- permission prompts;
- storage writes;
- fetch/network calls;
- navigation;
- execution behavior.

## Excluded and High-Risk Payloads

The harness must reject payloads related to:

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
- external navigation.

## QA Guard

The Phase 14C guard is:

```text
scripts/nexus-controlled-low-risk-text-only-renderer-phase-14c-test-harness-qa.js
```

The package alias is:

```text
npm.cmd run qa:nexus-controlled-low-risk-text-only-renderer-phase-14c-test-harness
```

The guard verifies both positive isolated harness behavior and negative runtime-boundary behavior.

## Acceptance Criteria

Phase 14C is acceptable only if:

- Phase 14A QA passes;
- Phase 14B load-boundary QA passes;
- Phase 14C harness QA passes;
- `qa-suite.js all-safe` passes;
- `qa-suite.js nexus-workforce` passes;
- browser validation confirms no Standard User renderer activation;
- only documentation, QA, package alias, and QA suite entries are changed.
