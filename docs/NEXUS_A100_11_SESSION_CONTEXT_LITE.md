# Nexus A100-11 Session Context-Lite

Sprint A100-11 adds a safe-autonomy review contract for Session Context-Lite.

Objective: Carries short-lived context while preventing memory from becoming execution authority.

## Runtime Boundary

This sprint is implemented as a server-side, QA-covered contract. It is not loaded by public/app.js, public/index.html, or server.js. Standard User runtime behavior remains unchanged unless a later approved activation sprint explicitly wires it through existing safety gates.

## Supported Lanes

- topic
- lastRequest
- locale
- mode
- expires

## Safety Boundary

The artifact is review-only and has no execution authority. No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts. No secrets are exposed to the browser, and no backend mutation is performed.

## QA

Run:

```text
npm run qa:nexus-a100-11-session-context-lite
```
