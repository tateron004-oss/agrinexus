# Nexus Controlled Low-Risk Renderer Phase 14G Eligibility Adapter Stub

## Phase 14G Purpose

Phase 14G adds a standalone, default-off eligibility adapter stub for future controlled low-risk text-only rendering. The adapter shapes already-authorized low-risk suggestion or intent metadata into a renderer-safe payload, but it does not load, call, or activate the Phase 14A renderer or Phase 14D loader.

This phase begins the bridge from low-risk eligibility metadata to safe renderer payloads while preserving the Standard User runtime boundary.

## Runtime Boundary

The adapter is not active in Standard User:

- `public/index.html` does not load the adapter, loader, or renderer.
- `public/app.js` does not import, require, dynamically import, or reference the adapter, loader, or renderer.
- `server.js` does not inject or special-case the adapter, loader, or renderer.
- No visible UI, buttons, links, forms, inputs, click handlers, routes, provider handoff, permission prompts, storage writes, fetch/network calls, navigation, or execution behavior are introduced.

## Adapter Contract

The adapter file is:

- `public/nexus-controlled-low-risk-renderer-eligibility-adapter.js`

The adapter exposes a test-callable API when evaluated directly:

- `NexusControlledLowRiskRendererEligibilityAdapter`
- `buildControlledLowRiskRendererPayload(candidate)`

The adapter remains disabled unless the candidate explicitly includes:

- `enableControlledLowRiskRendererEligibilityAdapter === true`

The adapter must never set or enable:

- `enableControlledLowRiskRendererVisibleUi`
- `enableControlledLowRiskRendererLoader`

The adapter must never call:

- `renderControlledLowRiskTextModel`
- `renderControlledLowRiskTextOnlyPreview`
- any renderer or loader global

## Allowed Low-Risk Inputs

The adapter may return a payload only for preview-only, low-risk candidates in these categories:

- agriculture training;
- irrigation learning;
- farm jobs/workforce preview;
- AgriTrade browse-only preview;
- crop issue educational help.

The candidate must be explicitly low-risk and preview-only.

## Output Payload

The adapter output is text-only and limited to safe fields:

- `category`
- `title`
- `summary`
- `previewOnly`
- `riskTier`

The adapter always returns:

- `previewOnly: true`
- `riskTier: "low"`

All text is sanitized so unsafe HTML or script-like content remains plain text. The output must not include buttons, links, URLs, forms, handlers, provider fields, permission fields, storage fields, fetch/network fields, navigation fields, execution fields, contact fields, location fields, camera fields, microphone fields, payment fields, call fields, or message fields.

## Excluded Inputs

The adapter returns `null` for missing, invalid, high-risk, or excluded metadata, including:

- call;
- message;
- WhatsApp;
- Telegram;
- SMS;
- local phone;
- location;
- map permission;
- camera;
- microphone;
- buy;
- sell;
- payment;
- appointment scheduling;
- emergency;
- medical or telehealth action;
- provider handoff;
- account login;
- contact lookup;
- external navigation;
- URL opening;
- execution or action completion.

## Standard User Browser Validation

Phase 14G browser validation uses the normal Standard User build:

- command: `node server.js`
- URL: `http://127.0.0.1:4182/`
- path: `Start as User`

Expected result:

- eligibility adapter remains unloaded;
- loader remains unloaded;
- renderer remains unloaded;
- no visible renderer card appears;
- hidden mount remains hidden and empty;
- no provider handoff, no permission prompts, and no execution behavior are introduced;
- no browser console warn/error logs are introduced by the dormant adapter file.

## Safety Conclusion

Phase 14G is a default-off adapter stub phase. It adds a testable payload-shaping boundary without changing Standard User behavior, without activating the renderer or loader, and without adding any execution authority.
