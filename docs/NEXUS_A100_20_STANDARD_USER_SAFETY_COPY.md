# Nexus A100-20 Standard User Safety Copy

Sprint A100-20 adds a safe-autonomy review contract for Standard User Safety Copy.

Objective: Standardizes practical copy that distinguishes preview, review, permission, and execution.

## Runtime Boundary

This sprint is implemented as a server-side, QA-covered contract. It is not loaded by public/app.js, public/index.html, or server.js. Standard User runtime behavior remains unchanged unless a later approved activation sprint explicitly wires it through existing safety gates.

## Supported Lanes

- preview
- review
- permission
- execution
- blocked

## Safety Boundary

The artifact is review-only and has no execution authority. No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts. No secrets are exposed to the browser, and no backend mutation is performed.

## QA

Run:

```text
npm run qa:nexus-a100-20-standard-user-safety-copy
```
