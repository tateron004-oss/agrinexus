# Nexus Sprint AO3 - Stale Data Alerts Flag Contract Harness

Current base: `e37ae96047b7f1cf4cd13a2eeae02373f3797bf9`

Sprint AO3 adds documentation, fixture, and deterministic QA only. It does not load Stale Data Alerts into Standard User runtime, render stale-data UI, monitor source freshness, detect stale sources, route stale warnings, render stale dashboards, create stale-data alerts, create admin stale-data queues, write storage, write audit records, retrieve provider, clinic, telehealth, pharmacy, scheduling, medical record, FHIR, prescription, location, camera, microphone, communications, transportation, health, marketplace, emergency, identity, account, profile, or regulated data, connect providers, contact providers, create telehealth sessions, schedule appointments, request prescription refills, access medical records, share location, activate camera or microphone, process payments, execute marketplace transactions, make unsupported live claims, make unsupported current data claims, make unsupported freshness claims, give medical advice, diagnose, prescribe, dispatch transportation, dispatch emergency help, or execute actions.

## Added Artifacts

- `fixtures/nexus/stale-data-alerts-feature-flags.json`
- `scripts/nexus-sprint-ao3-stale-data-alerts-flag-contract-harness.js`

## Fixture Coverage

The fixture set covers:

- default-off state;
- flag-on visible-only local/test state;
- unsafe authority attempt;
- enabled without visible permission.

The unsafe authority fixture uses an explicit `unsafeAuthorityAttempt` marker that the harness expands into every protected Stale Data Alerts flag field before normalization. This keeps the fixture readable while still proving that all protected authority fields normalize back to false.

Every fixture must preserve:

- all protected Stale Data Alerts preview, runtime, provider, regulated, storage, network, route, policy, confirmation, permission, privacy, audit, and execution fields as `false`;
- `noExecution: true`.

## Runtime Boundary

The harness is a Node QA utility only. It must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

The harness must not include DOM, storage, network, provider handoff, permissions, navigation, native bridge, workflow, stale source detection, source freshness monitoring, stale warning routing, stale dashboard rendering, admin stale-data queue runtime, health execution, telehealth execution, pharmacy execution, medical record access, provider contact, scheduling, location, camera, microphone, payment, transportation dispatch, emergency, marketplace transaction, unsupported live claim execution, unsupported current data claim execution, unsupported freshness claim execution, or execution APIs.

## Relationship To Sprint AO2

Sprint AO2 defines the default-off Stale Data Alerts feature flag contract. Sprint AO3 proves the contract with deterministic fixtures, including unsafe authority attempts that must normalize back to no-execution.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint AO4 - Stale Data Alerts Runtime Absence Regression Guard`
