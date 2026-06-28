# Nexus RT4 - Provider-Specific Live Adoption Harnesses

RT4 adds a developer/QA-only harness for every registered read-only live provider lane: weather, agriculture context, news/security/conflict, job search/application preparation, shipment tracking, and music/media.

The harness exercises each provider adapter through safe scenarios: missing required input, disabled/default config, mock/missing-key config, live-ready/configured shape, and provider-error normalization. It does not perform network calls, does not load Standard User runtime, and does not activate provider execution.

## Provider Safety Expectations

- Weather requires explicit location text and never uses browser geolocation.
- Agriculture context remains source-backed guidance only, with no chemical certainty, purchases, marketplace action, camera diagnosis, or provider contact.
- News/security/conflict stays awareness-only, source-backed, time-stamped, and avoids tactical harm, panic guidance, political persuasion, or emergency execution.
- Job search supports read-only job information and preparation only; no application submission, account login, resume upload, employer messaging, or interview booking.
- Shipment tracking requires explicit tracking/reference text and never logs into accounts, exposes addresses, changes delivery, dispatches, routes, or contacts carriers.
- Music/media remains read-only information lookup; no purchases, streaming action, paid service handoff, account login, playback control, or copyrighted content dumping.

## Harness Contract

The RT4 harness returns sanitized scenario summaries only. Each summary must preserve `safeReadOnly: true`, `noExecutionAuthorized: true`, `noBackendWritePerformed: true`, `noLocationPermissionRequested: true`, and `noProviderContactAuthorized: true`.

The harness is not imported by `server.js`, `public/app.js`, or `public/index.html`. It is available to local QA only and remains safe when provider credentials are absent.
