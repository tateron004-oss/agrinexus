# Nexus A100-17 Source-Backed Answer Previews

Sprint A100-17 adds a safe-autonomy review contract for Source-Backed Answer Previews.

Objective: Creates source-aware answer preview packets without live fetch or unsupported claims.

## Runtime Boundary

This sprint is implemented as a server-side, QA-covered contract. It is not loaded by public/app.js, public/index.html, or server.js. Standard User runtime behavior remains unchanged unless a later approved activation sprint explicitly wires it through existing safety gates.

## Supported Lanes

- source
- citation
- freshness
- confidence
- claim

## Safety Boundary

The artifact is review-only and has no execution authority. No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts. No secrets are exposed to the browser, and no backend mutation is performed.

## QA

Run:

```text
npm run qa:nexus-a100-17-source-backed-answer-previews
```
