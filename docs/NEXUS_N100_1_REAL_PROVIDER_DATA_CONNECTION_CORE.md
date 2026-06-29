# N100-1 Real Provider and Data Connection Core

## Purpose

N100-1 establishes a practical, read-only provider/data connection core for Nexus. It lets a developer or QA script ask common Standard User questions and receive normalized source-aware answers without activating live Standard User behavior or real-world actions.

The core is intentionally implemented as a server-side contract module:

- `server/nexus-n100-real-provider-data-core.js`

It is not imported by `public/index.html`, `public/app.js`, or `server.js`.

## Covered Question Set

The N100-1 core covers these starter questions:

- What is the weather in Stockton, CA?
- Should I irrigate this week?
- What current crop disease updates should farmers know?
- Find agriculture training resources.
- Find farm jobs near Stockton, CA.
- What current agriculture news should farmers know?
- Find agriculture training videos.
- Browse AgriTrade options.
- Track this shipment TEST123.
- Find nearby agriculture training in Stockton, CA.

## Provider/Data Sources

Where practical, N100-1 routes through existing read-only provider lanes:

- Weather: Open-Meteo public provider
- Agriculture context and crop support: Wikipedia public search
- Agriculture news and food/security updates: ReliefWeb public provider
- Farm jobs/workforce: Remotive public jobs API
- Training videos/media discovery: Internet Archive public search

Where a safe public connector is not yet available, N100-1 returns a normalized source-readiness result instead of guessing or executing:

- AgriTrade browse-only options
- Shipment tracking readiness
- Nearby training readiness

## Safety Posture

Every N100-1 response must preserve:

- `noExecutionAuthorized: true`
- `noLocationPermissionRequested: true`
- `noDispatchAuthorized: true`
- `providerHandoffAllowed: false`
- `noProviderContactAuthorized: true`
- `noBackendWritePerformed: true`

The module must not:

- request browser geolocation
- infer or store user location
- contact providers
- call, message, dispatch, book, buy, pay, submit, or schedule
- activate camera or microphone
- trigger medical, pharmacy, emergency, marketplace, or transportation execution
- write to the backend or browser storage

## Standard User Runtime

N100-1 does not activate Standard User runtime behavior. It creates a source connection core that can be tested deterministically and later used by a separately gated runtime integration phase.

## QA

The focused QA script is:

- `scripts/nexus-n100-1-real-provider-data-core-qa.js`

It verifies:

- the module exists and exports the expected core functions
- all N100-1 starter questions produce safe read-only answers
- deterministic fake providers cover public source calls
- high-risk prompts remain blocked
- no Standard User runtime imports or script tags were introduced
- unsafe behaviors such as geolocation, provider handoff, storage writes, and execution are absent

