# Phase 14J - Controlled Low-Risk Renderer Candidate Payload Contract

## 1. Purpose And Checkpoint

Phase 14J defines the safe candidate payload shape that future runtime integration must produce before any payload is considered by the Phase 14G eligibility adapter.

Current checkpoint:

- Branch: `main`
- Remote checkpoint: `999c3de9af3ae2e7f28ff6a121789211a4a2422a`
- Latest completed phase: Phase 14I, `Audit low-risk renderer eligibility source candidates phase 14I`

This phase is contract, documentation, and QA only. It does not wire the candidate contract, eligibility adapter, loader, or text-only renderer into Standard User runtime.

## 2. Contract Schema

The standalone contract module is:

- `public/nexus-controlled-low-risk-renderer-candidate-contract.js`

The module exposes isolated harness helpers only:

- `normalizeControlledLowRiskRendererCandidate(candidate)`
- `validateControlledLowRiskRendererCandidate(candidate)`

The normalized output is a frozen plain object with only approved preview metadata.

## 3. Required Fields

Accepted candidates must include:

- `category`
- `title`
- `summary`
- `previewOnly`
- `riskTier`
- `source`

Required field rules:

- `previewOnly` must be exactly `true`.
- `riskTier` must normalize to exactly `low`.
- `category` must map to an allowed low-risk preview category.
- `title` must be plain text.
- `summary` must be plain text.
- `source` must be plain text and identify the upstream candidate source, such as `controlled-action-readiness`.

## 4. Optional Safe Fields

Optional accepted fields:

- `selectedToolId`
- `readiness`
- `reason`

`selectedToolId` and `reason` must be plain text. `readiness` may include only safe boolean or text status fields:

- `isReady`
- `ready`
- `previewReady`
- `metadataOnly`
- `previewOnly`
- `requiresPermission`
- `requiresConfirmation`
- `hasMissingInput`
- `reason`
- `source`
- `status`
- `riskTier`
- `selectedToolId`
- `category`

Unknown top-level fields are rejected instead of being silently dropped. This keeps the future renderer contract from becoming an action envelope by accident.

## 5. Forbidden Fields

The payload must not include executable, provider, permission, routing, storage, or transaction fields at any level.

Forbidden field names include:

- `url`, `href`, `link`, `links`
- `button`, `buttons`
- `form`, `forms`
- `input`, `inputs`
- `handler`, `handlers`, `onClick`, `click`
- `route`, `routing`, `navigate`, `navigation`
- `provider`, `providerHandoff`, `handoff`
- `permission`, `permissions`
- `camera`, `microphone`, `location`, `map`
- `contact`, `contacts`, `phone`, `call`, `message`, `sms`, `whatsapp`, `telegram`
- `payment`, `buy`, `sell`, `purchase`, `checkout`
- `appointment`, `schedule`, `emergency`, `dispatch`, `medical`, `telehealth`
- `fetch`, `network`, `storage`
- `execute`, `execution`, `action`, `actions`
- `completion`, `completed`

Forbidden fields cause rejection even when nested under `readiness` or another object.

## 6. Allowed Low-Risk Categories

The contract accepts only these low-risk preview categories:

- `agriculture training`
- `irrigation learning`
- `farm jobs/workforce preview`
- `AgriTrade browse-only preview`
- `crop issue educational help`

Common selected tool IDs may map into these categories, including:

- `workforce.training`
- `learning.start`
- `workforce.job_pathways`
- `marketplace.agritrade`
- `workforce.field_support`
- `agriculture.help`

## 7. Rejected High-Risk And Excluded Categories

The contract rejects high-risk or excluded action categories, including:

- calls, phone, contact, messages, WhatsApp, Telegram, or SMS
- camera, microphone, location, map permission, or telehealth
- buy, sell, purchase, checkout, payment, or marketplace transaction execution
- appointment scheduling, emergency dispatch, medical diagnosis, provider handoff, or real-world completion claims

The contract remains preview metadata only. It cannot stage, confirm, or execute anything.

## 8. Normalization And Sanitization Rules

Text values are normalized as plain text:

- control characters are removed
- repeated whitespace is collapsed
- `<` and `>` are escaped
- text is length-limited

Unsafe HTML or script text is preserved only as escaped plain text. It is never interpreted as HTML and never becomes buttons, links, forms, handlers, provider handoff, navigation, permission prompts, storage, network calls, or execution.

## 9. Future Integration Point From Phase 14I

Phase 14I recommended the future integration point after:

`buildControlledActionPreviewReadinessFromMetadata(...)`

That function already confirms low-risk, no-permission, no-missing-input, preview-only readiness. A future candidate builder may convert that readiness object into this Phase 14J contract shape. Only after this contract accepts the payload should the Phase 14G eligibility adapter be considered.

## 10. Why This Contract Sits Before The Phase 14G Adapter

The Phase 14G adapter decides whether a candidate is eligible for the controlled low-risk renderer harness. The Phase 14J contract defines what a candidate is allowed to contain before it reaches that adapter, so this contract sits before the Phase 14G adapter in any future chain.

This ordering protects Standard User by ensuring:

- raw intent parsing never becomes renderer authority
- selected tool metadata never becomes execution authority
- renderer candidates cannot carry hidden routes or provider instructions
- future wiring must pass through a narrow preview-only schema first

## 11. Runtime Behavior

No runtime behavior changed in Phase 14J.

Standard User remains unwired:

- `public/index.html` does not load the candidate contract, adapter, loader, or renderer.
- `public/app.js` does not import or reference the candidate contract, adapter, loader, or renderer.
- `server.js` does not inject or special-case the candidate contract, adapter, loader, or renderer.
- The hidden renderer mount remains present, hidden, empty, and default-off.

## 12. QA Commands

Phase 14J validation includes:

- `git diff --check`
- `node --check server.js`
- `node --check public/app.js`
- `node --check public/nexus-controlled-low-risk-text-only-renderer.js`
- `node --check public/nexus-controlled-low-risk-text-only-renderer-loader.js`
- `node --check public/nexus-controlled-low-risk-renderer-eligibility-adapter.js`
- `node --check public/nexus-controlled-low-risk-renderer-candidate-contract.js`
- `node --check scripts/qa-suite.js`
- `node --check scripts/nexus-controlled-low-risk-renderer-phase-14j-candidate-payload-contract-qa.js`
- `node scripts/nexus-controlled-low-risk-renderer-phase-14j-candidate-payload-contract-qa.js`
- `npm.cmd run qa:nexus-controlled-low-risk-renderer-phase-14j-candidate-payload-contract`
- Phase 14A through Phase 14I QA scripts and aliases
- `node scripts/qa-suite.js all-safe`
- `node scripts/qa-suite.js nexus-workforce`

## 13. Standard User Confirmation

Phase 14J does not activate the candidate contract in Standard User. The contract file exists for future isolated validation only, and the current app continues to show the same low-risk previews and high-risk guardrails as before.
