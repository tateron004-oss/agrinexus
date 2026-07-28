# Nexus Genesis Clean Foundation

This directory is the isolated replacement for the coupled legacy voice path.
It does not modify or depend on the protected production runtime.

## Non-negotiable invariants

1. Nexus is the sole microphone owner.
2. Microphone acquisition begins only from a real user gesture.
3. A live track exists before an ephemeral Realtime session is requested.
4. Workspace routing is disabled until Realtime is connected.
5. Every connection transition emits an immutable receipt.
6. Failures identify the exact boundary and release owned resources.
7. Existing workspaces are reached through adapters; they are not copied into the
   connection runtime.

## Certification order

1. State-machine and ownership unit tests.
2. Authenticated session contract.
3. Browser microphone acquisition.
4. OpenAI Realtime WebRTC connection.
5. One spoken response.
6. Workspace routing and visible acknowledgement.
7. Continuous listening, barge-in, recovery, and all application lanes.
8. Physical Windows certification.

Run the foundation test:

```bash
node rebuild/tests/nexus-core.test.js
node rebuild/tests/nexus-voice-foundation.test.js
```

## Clean runtime modules

- `session-authority.js`: restart-safe HMAC-signed authentication contract.
- `microphone-controller.js`: the only browser microphone owner.
- `realtime-connector.js`: WebRTC offer, ephemeral session, SDP answer, and data channel.
- `voice-foundation.js`: the ordered authenticated voice startup and shutdown boundary.
- `voice-session-service.js`: authenticated short-lived Realtime credential issuance.
- `browser-runtime.js`: remote audio, Realtime configuration, command routing, and visible receipts.

These modules are dependency-injected so browser, server, and provider boundaries can
be certified independently before the clean runtime is allowed to replace production.
