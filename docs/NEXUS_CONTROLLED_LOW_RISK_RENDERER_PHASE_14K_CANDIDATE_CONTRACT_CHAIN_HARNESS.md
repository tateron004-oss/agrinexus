# Phase 14K - Controlled Low-Risk Renderer Candidate Contract Chain Harness

## 1. Purpose And Checkpoint

Phase 14K adds a local-safe, isolated QA harness for the complete test-only chain:

raw candidate metadata -> candidate contract validation/normalization -> eligibility adapter -> safe renderer payload -> loader -> text-only renderer -> simulated mount point

Current checkpoint:

- Branch: `main`
- Remote checkpoint: `008911aae6c7ec15a6c5b9c660c4a26545233252`
- Latest completed phase: Phase 14J, `Add low-risk renderer candidate payload contract phase 14J`

This phase proves the chain can work in an isolated harness while Standard User remains unwired.

## 2. Files In The Harness Chain

The isolated harness loads:

- `public/nexus-controlled-low-risk-renderer-candidate-contract.js`
- `public/nexus-controlled-low-risk-renderer-eligibility-adapter.js`
- `public/nexus-controlled-low-risk-text-only-renderer-loader.js`
- `public/nexus-controlled-low-risk-text-only-renderer.js`

The runtime app does not load these files through `public/index.html`, `public/app.js`, or `server.js`.

## 3. Required Test-Only Flags

The harness may set these flags only inside isolated QA objects:

- `enableControlledLowRiskRendererEligibilityAdapter === true`
- `enableControlledLowRiskRendererVisibleUi === true`
- `enableControlledLowRiskRendererLoader === true`

These flags remain absent from Standard User startup and do not grant runtime execution authority.

## 4. Chain Behavior Proved

The Phase 14K QA proves:

- all missing or false flags keep the mount hidden and empty
- adapter-disabled candidates normalize through the contract but produce no adapter payload
- visible-UI-disabled and loader-disabled paths do not render
- all required flags plus valid low-risk preview candidates render only in the simulated mount
- high-risk, excluded, missing, invalid, and forbidden-field candidates do not render
- missing renderer and missing mount conditions no-op safely without crashing
- Unsafe text such as `<script>`, `<img onerror=...>`, `javascript:`, and raw HTML remains inert text

## 5. Allowed Low-Risk Harness Candidates

The harness allows only preview-only low-risk examples:

- agriculture training preview
- irrigation learning preview
- farm jobs/workforce preview
- AgriTrade browse-only preview
- crop issue educational help preview

## 6. Rejected Excluded And High-Risk Candidates

Rejected examples include:

- call someone
- send WhatsApp, Telegram, or SMS
- show location
- open camera
- buy, sell, or pay
- schedule appointment
- emergency help
- medical or telehealth action
- provider handoff
- account login
- contact lookup
- external navigation
- URL opening
- execution or action completion

## 7. Unsafe Text And Inert Render Contract

When the full test-only chain is enabled in the harness, rendered output must remain:

- text-only
- preview-only
- non-clickable
- non-navigating
- non-executing
- free of buttons, anchors, forms, inputs, scripts, iframes, handlers, provider handoff, permission prompts, storage writes, fetch/network calls, and execution behavior

The simulated mount may reveal only under the harness with all test-only flags true. Even then it must retain:

- `data-execution-allowed="false"`
- `data-provider-handoff="false"`
- `data-permission-request="false"`
- `data-navigation-allowed="false"`

## 8. Standard User Runtime Boundary

No Standard User behavior changed in Phase 14K.

Standard User remains unwired:

- no script tag was added to `public/index.html`
- no import, require, or dynamic import was added to `public/app.js`
- no server injection or special-case was added to `server.js`
- no visible UI, buttons, links, forms, inputs, click handlers, routing, provider handoff, permission prompts, storage writes, fetch/network calls, navigation, or execution behavior was added

## 9. QA Commands

Phase 14K validation includes:

- `git diff --check`
- `node --check server.js`
- `node --check public/app.js`
- `node --check public/nexus-controlled-low-risk-text-only-renderer.js`
- `node --check public/nexus-controlled-low-risk-text-only-renderer-loader.js`
- `node --check public/nexus-controlled-low-risk-renderer-eligibility-adapter.js`
- `node --check public/nexus-controlled-low-risk-renderer-candidate-contract.js`
- `node --check scripts/qa-suite.js`
- Phase 14A through Phase 14K `node --check` commands
- Phase 14A through Phase 14K direct QA commands
- Phase 14A through Phase 14K npm QA aliases
- `node scripts/qa-suite.js all-safe`
- `node scripts/qa-suite.js nexus-workforce`

## 10. Browser Validation Expectation

Manual Standard User browser validation must continue to show:

- candidate contract unloaded
- adapter unloaded
- loader unloaded
- renderer unloaded
- no visible renderer card
- hidden mount remains hidden and empty
- no Phase 14K-introduced permissions, provider handoff, navigation, storage, network, or execution
- no browser console warn/error logs
