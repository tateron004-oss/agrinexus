# Nexus Sprint C11 - Source-Backed Agriculture Default-Off Runtime Wiring Contract

## Purpose

Sprint C11 defines the exact contract a future runtime wiring sprint must follow before connecting the C8 source-backed agriculture visible-preview mapper to Standard User runtime.

This sprint is inert documentation and QA only. It does not add runtime feature flag code, does not import or load the C8 mapper, does not render a visible card, and does not change Standard User behavior.

## Starting Checkpoint

- Previous pushed sprint: Sprint C10 - Source-Backed Agriculture Default-Off Wiring Readiness Audit
- Starting HEAD: `3e460ae2d1aa592f4236bdcbc0a1642242ababdf`
- C8 mapper: `public/nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js`
- C10 readiness audit: `docs/NEXUS_SPRINT_C10_SOURCE_BACKED_AGRICULTURE_DEFAULT_OFF_WIRING_READINESS_AUDIT.md`

## Canonical Future Flag

The approved future flag name is:

- `enableSourceBackedAgricultureRuntimeMapping`

The flag must be a boolean. The default must be `false`.

Any future runtime implementation must treat missing, undefined, null, non-boolean, string, numeric, object, array, or malformed flag values as `false`.

## Prohibited Flag Sources Until Separately Approved

The future flag must not be enabled by:

- localStorage;
- sessionStorage;
- URL query parameters;
- cookies;
- server config;
- user profile data;
- role data;
- hidden debug state;
- browser devtools snippets;
- voice commands;
- typed commands.

Any of those activation sources requires a separate review sprint, deterministic QA, and browser validation.

## Flag-Off Runtime Contract

When `enableSourceBackedAgricultureRuntimeMapping` is `false`, runtime must behave as though the C8 mapper does not exist:

- no C8 mapper script tag;
- no C8 import, require, or dynamic import;
- no C8 helper reference;
- no C6 fixture packet generated;
- no C8 preview model generated;
- no visible source-backed agriculture preview card from C8;
- no hidden source-backed agriculture preview metadata;
- no DOM insertions;
- no route changes;
- no modal openings;
- no pending actions;
- no confirmation state changes;
- no provider handoff;
- no network lookup;
- no storage write;
- no backend write;
- no permission prompt;
- no marketplace transaction;
- no payment;
- no location, camera, microphone, upload, or media capture;
- no medical, pharmacy, telehealth, appointment, or emergency execution.

## Future Flag-On Runtime Contract

If a later sprint explicitly enables the flag, the runtime must still be preview-only:

- only low-risk agriculture support prompts may be eligible;
- C6 packet eligibility must pass;
- C8 mapper eligibility must pass;
- C8 `visiblePreviewAllowed` must be `true`;
- C8 `renderDomAllowed` must remain `false` unless a separate renderer sprint approves DOM output;
- every execution authority flag must be exactly `false`;
- the visible surface must show `Evidence & Verification`;
- the visible surface must show source name, source type, contract ID, verification status, freshness, confidence, local applicability warning, and claims Nexus is not making;
- the visible surface must show `No action has been taken.`;
- controls must be disabled, inert, or review-only;
- no provider, payment, marketplace, location, camera, medical, pharmacy, telehealth, appointment, emergency, call, or message execution may occur.

## Future Loader Sequence

A future runtime implementation may only proceed in this order:

1. Read the explicit boolean flag.
2. If the flag is not exactly `true`, stop before loading the C8 mapper.
3. Validate prompt eligibility through existing low-risk agriculture boundaries.
4. Build or receive a safe source-backed agriculture packet.
5. Validate all C6 no-execution flags.
6. Map the packet through C8.
7. Reject any model that is not `visiblePreviewAllowed: true`.
8. Render only through a separately approved, inert, source-backed agriculture preview surface.
9. Preserve all no-execution, permission, provider, confirmation, audit, and browser-validation requirements.

## Excluded Prompt Contract

The future flag must not allow source-backed agriculture previews for:

- `Call an extension worker`;
- `Message the seller`;
- `Buy seeds`;
- `Pay for fertilizer`;
- `Use my location to find farms near me`;
- `Open my camera for crop diagnosis`;
- `Schedule an appointment`;
- `Emergency pesticide poisoning`;
- `Tell me the pesticide dose to spray`;
- `Sell my crop`.

## Future Browser Validation Contract

Before a future flag-on runtime sprint can be committed, it must complete the Sprint C9 browser validation plan and document:

- browser and OS;
- Standard User path;
- safe prompt results;
- excluded prompt results;
- console warnings and errors;
- network requests;
- storage writes;
- `db.json` mutations;
- route changes;
- modal openings;
- permission prompts;
- runtime mutation restoration.

## Sprint C11 QA Expectations

Sprint C11 QA must prove:

- this contract document exists;
- C10 recommends this contract;
- C8 mapper exists and remains available for QA only;
- active runtime files do not contain the future flag name;
- active runtime files do not load C8;
- prohibited flag sources are documented;
- flag-off behavior is documented as equivalent to no mapper;
- flag-on behavior remains preview-only and non-executing;
- excluded prompt contract is documented;
- browser validation remains mandatory before runtime-visible mapping;
- package alias and safe-suite wiring exist.

## Sprint C12 Recommendation

Sprint C12 should create a fixture-only flag resolver contract that models the future boolean flag behavior without wiring it into `public/index.html`, `public/app.js`, or `server.js`.
