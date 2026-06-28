# Sprint K5 - Flag-Off Identity Resolution Regression Guard

Sprint K5 defines the default-off guard for contact/provider identity resolution preview. The guard proves that identity preview remains inactive in normal Standard User runtime unless a later approved phase explicitly enables a test-safe flag.

## Default-Off Contract

The feature flag is:

`enableContactProviderIdentityPreview`

Default behavior:

- absent flag returns disabled
- false flag returns disabled
- non-boolean flag returns disabled
- runtime Standard User context returns disabled
- flag-only context cannot create execution authority
- candidate validation failures keep preview disabled

The guard never grants:

- provider dispatch
- provider handoff
- calls
- messages
- WhatsApp
- Telegram
- SMS
- email
- payments
- marketplace transactions
- location sharing
- camera or media access
- medical or pharmacy workflow execution
- emergency routing
- backend writes
- storage writes
- network calls
- native bridge execution
- pending real-world actions

## Runtime Boundary

K5 does not load in:

- `public/index.html`
- `public/app.js`
- `server.js`

It adds no UI, no route, no event handler, no permission prompt, no provider adapter, no storage, and no backend behavior.

## Future Activation Requirement

A future phase may only use this guard if it preserves:

- explicit default-off behavior
- local/test-safe opt-in
- validated identity candidate
- visible preview only
- `executionAllowed: false`
- `executionAuthority: false`
- no provider/contact execution
- final execution gate required before any real-world action

## QA Protection

The K5 QA verifies default-off behavior, flag-only denial, validation-dependent allowance for fixture-only contexts, runtime absence, package alias, safe-suite wiring, and no side-effect APIs.
