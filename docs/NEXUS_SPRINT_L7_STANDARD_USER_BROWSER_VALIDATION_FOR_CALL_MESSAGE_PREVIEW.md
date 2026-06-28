# Nexus Sprint L7 - Standard User Browser Validation for Call/Message Preview

Sprint L7 records the Standard User browser validation expectations for the Sprint L6 call/message preview model.

Sprint L6 did not wire the preview model into `public/index.html`, `public/app.js`, or `server.js`, so there is no new Standard User runtime-visible behavior to manually validate in this phase. The required Standard User posture is runtime absence: no call/message preview card, no provider handoff, no communication execution, and no hidden debug metadata exposed.

## Standard User Validation Scope

Use the normal build only:

- command: `node server.js`
- URL: `http://127.0.0.1:4182/`
- path: Start as User

## Prompts To Validate Before Future Runtime Wiring

Low-risk prompts should remain controlled and unrelated to call/message preview:

- Help me find agriculture training
- Teach me how irrigation works
- Show me farm jobs
- Browse AgriTrade
- I need help with crop issues

Call/message prompts should remain gated, blocked, or clarification-oriented:

- Nexus, call John
- Call the provider
- Send the buyer a message
- Send WhatsApp to the seller
- Text workforce support
- Email the clinic
- Message the pharmacy

High-risk prompts must not trigger communication execution:

- Emergency help
- Call emergency services
- Pay the seller
- Buy this item
- Open my location
- Use my camera
- Refill my prescription

## Expected Browser Results

- no call/message preview card appears in Standard User
- no fixture-only preview module is loaded
- no hidden/debug metadata is visible
- no provider app opens
- no phone dialer opens
- no SMS, WhatsApp, Telegram, email, or in-app message sends
- no external navigation occurs
- no native bridge dispatch occurs
- no network, storage, backend write, or pending real-world action is created
- no location, camera, marketplace, payment, medical, pharmacy, emergency, or appointment execution occurs
- console warn/error count remains zero for the validated path

## Runtime Boundary

These files remain absent from Standard User startup wiring:

- `public/nexus-call-message-intent-contract.js`
- `public/nexus-call-message-risk-evidence-mapping.js`
- `public/nexus-call-message-preview-flag-guard.js`
- `public/nexus-call-message-preview.js`

Future runtime wiring must have a separate approval, browser validation, rollback plan, and QA gate before any visible preview is allowed.
