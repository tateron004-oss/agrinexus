# Sprint M7 - Standard User Browser Validation for Appointment/Service Preview

Sprint M7 records the Standard User browser-validation boundary for the Sprint M6 appointment/service request preview builder.

No runtime-visible behavior was introduced in Sprint M6. The preview builder is not loaded by `public/index.html`, not imported by `public/app.js`, and not injected by `server.js`. Therefore Standard User validation for this phase is an absence and regression check rather than a visible feature test.

## Standard User Expected State

For the normal Standard User path:

- no appointment/service preview card appears.
- no appointment/service preview flag is enabled.
- no provider identity preview appears.
- no timing/availability preview appears.
- no Review, Book, Contact, Call, Message, or Confirm service controls appear from Sprint M6.
- no provider handoff occurs.
- no booking occurs.
- no provider dispatch occurs.
- no communication channel opens.
- no location sharing, camera, payment, medical/pharmacy, marketplace transaction, emergency dispatch, backend write, storage write, or pending real-world action occurs.

## Prompts for Future Manual Browser Validation

Use the normal Standard User build:

```bash
node server.js
```

Open `http://127.0.0.1:4182/` and choose `Start as User`.

Test prompts:

- "Schedule an agriculture support appointment"
- "Request a field visit"
- "Book training support"
- "Can I meet with a provider?"
- "Schedule emergency help"
- "Book a pharmacy refill"

Expected result: existing Standard User behavior remains intact, and no Sprint M6 appointment/service preview UI appears.

## Future Flag-On Browser Validation

Before any runtime activation, a later phase must validate a default-off flag-on path in a controlled browser session. That validation must confirm:

- provider identity is visible and accurate.
- time preference is review-only and not claimed as availability.
- evidence requirement is visible.
- provider confirmation, user approval, and final execution gate are visible.
- restricted requests remain hidden or blocked.
- no unsafe controls or hidden/debug metadata are visible.
- console warnings/errors are zero.

## Runtime Boundary

`public/index.html`, `public/app.js`, and `server.js` must remain unwired to the Sprint M6 preview builder and the `NEXUS_APPOINTMENT_SERVICE_REQUEST_PREVIEW_ENABLED` flag in this phase.
