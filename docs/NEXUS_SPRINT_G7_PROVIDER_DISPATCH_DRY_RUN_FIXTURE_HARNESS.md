# Nexus Sprint G7 - Provider Dispatch Dry-Run Fixture Harness

Sprint G7 adds a fixture-only harness for the Sprint G6 provider dispatch dry-run contract.

This phase does not add runtime UI, provider adapters, provider handoff, calls, messages, WhatsApp, Telegram, SMS, email, payments, location sharing, camera or microphone access, medical/pharmacy behavior, emergency routing, marketplace transactions, backend writes, storage writes, network calls, or pending real-world actions.

## Purpose

The harness proves representative provider dispatch dry-run candidates normalize through the inert G6 contract and fail closed when required safety state is missing.

## Fixture Coverage

The harness covers:

- complete provider dispatch review dry-run;
- missing final execution gate;
- missing permission state;
- missing consent state;
- missing audit state;
- missing provider availability;
- missing user approval;
- attempted dispatch authority escalation;
- attempted network escalation;
- attempted storage escalation;
- attempted backend write escalation;
- incomplete blocked dispatch channels.

## Required Safety Properties

Every fixture must preserve:

- `dryRunOnly: true`;
- `executionAuthority: false`;
- `dispatchAllowed: false`;
- `networkAllowed: false`;
- `storageWriteAllowed: false`;
- `backendWriteAllowed: false`;
- `executionAllowed: false`.

## Runtime Boundary

The harness is not imported by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

The harness is local-safe QA only. It is not a dispatch queue, provider adapter, pending-action store, or audit writer.

## Closeout

Sprint G7 strengthens the provider dispatch simulation lane while preserving the no-dispatch boundary.
