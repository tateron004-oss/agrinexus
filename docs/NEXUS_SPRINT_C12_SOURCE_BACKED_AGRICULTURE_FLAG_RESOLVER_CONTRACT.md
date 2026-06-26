# Nexus Sprint C12 - Source-Backed Agriculture Flag Resolver Contract

## Purpose

Sprint C12 adds a fixture-only flag resolver contract for the future source-backed agriculture runtime mapping flag.

This sprint remains inert. It does not wire the resolver into Standard User runtime, does not import the C8 mapper, does not load new scripts in `public/index.html`, does not add a visible UI surface, and does not change backend behavior.

## Starting Checkpoint

- Previous pushed sprint: Sprint C11 - Source-Backed Agriculture Default-Off Runtime Wiring Contract
- Starting HEAD: `859e9398d5af8d5d8555ca9c1fc7141a1a22ad04`
- Contract module: `public/nexus-sprint-c12-source-backed-agriculture-flag-resolver-contract.js`
- C11 contract: `docs/NEXUS_SPRINT_C11_SOURCE_BACKED_AGRICULTURE_DEFAULT_OFF_RUNTIME_WIRING_CONTRACT.md`

## Contract Module

The contract module exports:

- `CONTRACT_VERSION`;
- `FLAG_NAME`;
- `resolveSourceBackedAgricultureRuntimeMappingFlag(input)`.

The canonical flag name remains:

- `enableSourceBackedAgricultureRuntimeMapping`

The resolver treats only an explicit fixture value of `true` as enabled. Missing, undefined, null, false, string, number, object, array, and malformed values resolve to disabled.

## Fixture-Only Boundary

The resolver is for deterministic QA and fixture modeling only. It must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`;
- Standard User startup;
- agriculture response-card runtime;
- planner;
- policy engine;
- provider registry;
- native bridge;
- confirmation paths;
- marketplace, health, map, camera, location, call, message, payment, or emergency flows.

## No Ambient Flag Sources

The resolver must not read:

- localStorage;
- sessionStorage;
- URL query parameters;
- cookies;
- server config;
- user profile data;
- role data;
- globals;
- environment variables;
- voice commands;
- typed commands.

All inputs must be passed explicitly by a deterministic QA fixture.

## Resolver Output Boundary

Resolver output must always keep these authorities false:

- `runtimeWiringAllowed`;
- `loadMapperAllowed`;
- `renderVisibleCardAllowed`;
- `executionAllowed`;
- `sideEffectsAllowed`;
- `providerHandoffAllowed`;
- `networkLookupAllowed`;
- `storageReadAllowed`;
- `storageWriteAllowed`;
- `backendWriteAllowed`;
- `permissionPromptAllowed`;
- `routeAutoOpenAllowed`;
- `modalAutoOpenAllowed`;
- `pendingActionCreationAllowed`.

Even when the fixture flag is `true`, the resolver grants no runtime authority. A later sprint must separately approve mapper loading, visible rendering, and browser validation.

## Standard User Boundary

Sprint C12 must not change Standard User behavior:

- no source-backed preview card from C8;
- no script tag for C12;
- no app import of C12;
- no server injection of C12;
- no hidden metadata surfaced;
- no provider handoff;
- no network lookup;
- no storage read or write;
- no backend write;
- no permission prompt;
- no route or modal auto-open;
- no pending action;
- no marketplace, payment, location, camera, medical, pharmacy, telehealth, appointment, call, message, or emergency execution.

## Sprint C12 QA Expectations

Sprint C12 QA must prove:

- this document exists;
- C11 recommends the fixture-only flag resolver;
- C12 module exists and is syntax-valid;
- C12 resolver returns enabled only for explicit boolean `true`;
- malformed values resolve to disabled;
- all authority flags remain false for enabled and disabled fixture states;
- C12 module contains no storage, network, provider, permission, route, modal, backend, or execution APIs;
- `public/index.html`, `public/app.js`, and `server.js` do not load C12;
- C8 mapper remains unloaded by active runtime;
- package alias and safe-suite wiring exist.

## Sprint C13 Recommendation

Sprint C13 should add a fixture-only source-backed agriculture eligibility handoff contract that combines prompt eligibility, C6 packet safety, C8 mapper safety, and C12 flag resolution without loading any of them into Standard User runtime.
