# Sprint O6 - Flag-Gated Payment Preview

Sprint O6 adds an inert preview builder for payment intent candidates. The builder consumes the Sprint O4 risk/evidence mapper and Sprint O5 default-off flag guard. It is not wired into the Standard User runtime.

## Preview Conditions

The preview may be produced only when all conditions are true:

- the candidate validates against the Sprint O2 payment intent contract.
- Sprint O4 mapping keeps the intent dry-run-only and non-executing.
- Sprint O5 flag resolution is explicitly enabled.
- the caller uses the `local-safe-fixture` context.
- executionAuthority remains `false`.

Default behavior and Standard User behavior remain hidden.

## Preview Fields

When eligible in local-safe fixture context, the preview model may expose review-only text fields:

- title
- payee display
- payer display
- payment category
- amount display
- currency display
- payment purpose
- payment method preference
- provider requirement
- consent requirement
- dry-run packet
- risk tier
- evidence requirement
- source packet requirement
- payee confirmation requirement
- user approval requirement
- final execution gate requirement
- safe use notes
- limitations

## Hard Safety Boundary

The preview model must not include buttons, links, forms, click handlers, event handlers, payment provider handoff, wallet transfer authority, checkout authority, credential storage, provider payment intent authority, communication authority, external navigation, native bridge access, network calls, storage writes, backend writes, permissions, camera, location sharing, medical/pharmacy execution, emergency dispatch, or pending real-world actions.

`public/index.html`, `public/app.js`, and `server.js` must not load this preview builder in Sprint O6.
