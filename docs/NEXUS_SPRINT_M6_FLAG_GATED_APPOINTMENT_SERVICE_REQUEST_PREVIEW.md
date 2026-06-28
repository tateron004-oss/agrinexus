# Sprint M6 - Flag-Gated Appointment/Service Request Preview

Sprint M6 adds an inert preview builder for appointment/service request candidates. The builder consumes the Sprint M4 risk/evidence mapper and Sprint M5 default-off flag guard. It is not wired into the Standard User runtime.

## Preview Conditions

The preview may be produced only when all conditions are true:

- the candidate validates against the Sprint M2 appointment/service contract.
- Sprint M4 mapping keeps the request non-restricted.
- Sprint M5 flag resolution is explicitly enabled.
- the caller uses the `local-safe-fixture` context.
- executionAuthority remains `false`.

Default behavior and Standard User behavior remain hidden.

## Preview Fields

When eligible in local-safe fixture context, the preview model may expose review-only text fields:

- title
- provider display
- service category
- requested time window
- user-provided time preference
- service location requirement
- request draft
- risk tier
- evidence requirement
- source packet requirement
- provider confirmation requirement
- user approval requirement
- final execution gate requirement
- safe use notes
- limitations

## Hard Safety Boundary

The preview model must not include buttons, links, forms, click handlers, event handlers, provider handoff, booking authority, communication authority, external navigation, native bridge access, network calls, storage writes, backend writes, permissions, camera, location sharing, payments, medical/pharmacy execution, emergency dispatch, marketplace transactions, or pending real-world actions.

`public/index.html`, `public/app.js`, and `server.js` must not load this preview builder in Sprint M6.
