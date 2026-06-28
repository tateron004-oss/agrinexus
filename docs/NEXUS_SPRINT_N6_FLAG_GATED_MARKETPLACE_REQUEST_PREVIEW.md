# Sprint N6 - Flag-Gated Marketplace Request Preview

Sprint N6 adds an inert preview builder for marketplace request candidates. The builder consumes the Sprint N4 risk/evidence mapper and Sprint N5 default-off flag guard. It is not wired into the Standard User runtime.

## Preview Conditions

The preview may be produced only when all conditions are true:

- the candidate validates against the Sprint N2 marketplace request contract.
- Sprint N4 mapping keeps the request non-restricted.
- Sprint N5 flag resolution is explicitly enabled.
- the caller uses the `local-safe-fixture` context.
- executionAuthority remains `false`.

Default behavior and Standard User behavior remain hidden.

## Preview Fields

When eligible in local-safe fixture context, the preview model may expose review-only text fields:

- title
- product display
- seller display
- marketplace category
- requested quantity
- budget or price interest
- availability requirement
- logistics requirement
- request draft
- risk tier
- evidence requirement
- source packet requirement
- seller confirmation requirement
- user approval requirement
- final execution gate requirement
- safe use notes
- limitations

## Hard Safety Boundary

The preview model must not include buttons, links, forms, click handlers, event handlers, seller handoff, payment authority, checkout authority, order authority, communication authority, external navigation, native bridge access, network calls, storage writes, backend writes, permissions, camera, location sharing, medical/pharmacy execution, emergency dispatch, or pending real-world actions.

`public/index.html`, `public/app.js`, and `server.js` must not load this preview builder in Sprint N6.
