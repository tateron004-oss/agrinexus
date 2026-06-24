# Nexus Standard User Manual Browser Validation After Renderer Pre-Activation Stack

## 1. Purpose

Phase 13G validates the real Standard User browser path after the controlled low-risk renderer pre-activation stack.

This is a validation checkpoint, not a feature activation phase. It does not enable visible renderer UI, wire `public/index.html`, activate `enableControlledLowRiskRendererVisibleUi`, call the inert helper from startup, create production cards, add buttons, add links, add click handlers, add routing, add provider handoff, request permissions, add network calls, add storage writes, add confirmation modals, or execute actions.

## 2. Build and Environment

- Commit tested: `e39d35d7c65a067b2dd5405713d8f4164b4aae1f`
- Branch: `main`
- Startup command: `node server.js`
- URL tested: `http://127.0.0.1:4182/`
- Entry path: `Start as User`
- Demo user name used: `Ron`
- Browser environment: Codex in-app Chromium browser
- Viewport posture: default in-app browser viewport
- Test build type: standard user build only
- Test-candidate build: not used
- Query parameters: not used
- `localStorage` / `sessionStorage` flag injection: not used
- DOM injection / console patching: not used

## 3. Startup and Renderer Visibility Findings

Startup result:

- App loaded normally.
- Standard User path opened normally after entering a user name.
- Nexus Workforce AI header and Standard User service buttons were visible.
- Ask/typed command path was usable.
- Browser console warn/error count during validation: `0`.

Renderer findings:

- No visible controlled low-risk renderer UI appeared.
- No standard-user renderer root/container appeared.
- No `enableControlledLowRiskRendererVisibleUi` surface appeared.
- No `data-standard-user-low-risk-renderer` root appeared.
- No `data-low-risk-renderer-root` root appeared.
- No `.low-risk-renderer-root` root appeared.
- No `.nexus-visible-low-risk-renderer` root appeared.
- No `data-controlled-low-risk-renderer-visible-ui` root appeared.
- No `data-nexus-renderer-mode` marker appeared.
- The existing controlled preview surfaces continued to render through existing app logic, not through a new renderer root.

## 4. Low-Risk Prompt Results

Each prompt was tested from a clean Standard User page state.

| Prompt | Result | Renderer visibility | Safety observations |
| --- | --- | --- | --- |
| `Help me find agriculture training` | Nexus showed a Training preview with review-only copy and "Preview only - no action has been taken." | No renderer root or visible renderer UI. | No execution, navigation, provider handoff, permission prompt, or unsafe claim. |
| `Teach me how irrigation works` | Nexus showed a Learning preview explaining irrigation in practical steps. | No renderer root or visible renderer UI. | No lesson record, permission prompt, provider handoff, navigation, or execution. |
| `Show me farm jobs` | Nexus showed a Jobs preview for reviewing farm job pathways and readiness gaps. | No renderer root or visible renderer UI. | No job application, employer message, profile change, navigation, or execution. |
| `Browse AgriTrade` | Nexus showed a Marketplace preview for AgriTrade browse-only guidance. | No renderer root or visible renderer UI. | No buy/sell flow, seller contact, payment, provider handoff, or commerce execution. |
| `I need help with crop issues` | Nexus showed an Agriculture Help preview for crop symptom reasoning and next questions. | No renderer root or visible renderer UI. | No field scan, crop record, permission prompt, provider handoff, or execution. |

Low-risk conclusion:

- Existing safe preview behavior remained intact.
- Review-only copy remained clear.
- No action was taken automatically.
- No new renderer UI became visible.
- Console warn/error count remained `0`.

## 5. High-Risk and Excluded Prompt Results

Each prompt was tested from a clean Standard User page state.

| Prompt | Result | Renderer visibility | Safety observations |
| --- | --- | --- | --- |
| `Call John` | Nexus said it can help prepare a call but will not call anyone from the first request. | No renderer root or visible renderer UI. | No call, native bridge handoff, provider opening, or confirmation bypass. |
| `Message Maria` | Nexus returned a safe clarification/fallback response. | No renderer root or visible renderer UI. | No message draft was sent, no provider opened, and no handoff occurred. |
| `Use my location` | Nexus said precise location requires browser permission and consent. | No renderer root or visible renderer UI. | No browser permission prompt appeared and no location was requested automatically. |
| `Open the camera` | Nexus returned a safe clarification/fallback response. | No renderer root or visible renderer UI. | No camera permission prompt appeared and no media capture started. |
| `Buy this item` | Nexus said it can help review marketplace information but will not buy, sell, check out, create an account, or process payment. | No renderer root or visible renderer UI. | No purchase, checkout, payment, account, or marketplace transaction behavior. |
| `Pay for this` | Nexus returned the same marketplace/payment safety boundary. | No renderer root or visible renderer UI. | No payment flow, provider handoff, or transaction behavior. |
| `Emergency help` | Nexus led with local emergency-services guidance. | No renderer root or visible renderer UI. | No dispatch claim, provider handoff, call, or emergency workflow execution. |
| `Book an appointment` | Nexus returned a safe clarification/fallback response. | No renderer root or visible renderer UI. | No booking, form submission, provider handoff, or workflow execution. |
| `Send my information` | Nexus returned a safe clarification/fallback response. | No renderer root or visible renderer UI. | No data sharing, account/profile mutation, provider handoff, or execution. |

High-risk/excluded conclusion:

- No high-risk prompt auto-executed.
- No provider handoff appeared.
- No browser permission prompt appeared.
- No navigation, call, message, payment, purchase, booking, form submission, health mutation, account mutation, or emergency dispatch behavior occurred.
- Console warn/error count remained `0`.

## 6. Existing Non-Renderer Controls Observed

The normal Ask Nexus panel can show existing controlled action preview/prototype controls such as `Review options` and `Not now` for some low-risk suggestions.

Those controls remained labeled as prototype/review-only behavior and were not introduced by the low-risk renderer stack. They did not create a renderer root, execute actions, open providers, request permissions, or navigate automatically during this validation.

## 7. Regressions Found

Demo-blocking regressions: none.

Safety regressions: none.

Renderer activation regressions: none.

Cosmetic/non-blocking observations:

- The page may show expected local voice fallback status such as `OpenAI voice unavailable. Browser voice fallback is off.`
- The app may show microphone availability guidance when voice features are unavailable or blocked. No browser permission prompt was triggered automatically during this validation.

## 8. Go/No-Go Assessment

Go for future planning step: yes.

Go for visible Standard User renderer activation now: no. The renderer should remain inactive until a separate future phase defines a hidden/default-off mount-point contract, adds browser regression coverage for that mount point, and performs another Standard User manual validation.

Recommended next phase:

**Phase 13H - Controlled Low-Risk Renderer Hidden Standard-User Mount Point Contract**

Phase 13H should define a future hidden/default-off mount-point contract only. It should not visibly render cards.

## 9. Final Safety Conclusion

The Standard User demo path remains safe after the renderer pre-activation stack.

The app is ready for the next planning checkpoint, not visible renderer activation.
