# Sprint M3 - Fixture-Only Appointment/Service Request Harness

Sprint M3 adds deterministic local fixtures for appointment/service request intent. These fixtures exercise safe request categories, blocked high-risk cases, and clarification needs without booking appointments, dispatching providers, sending messages, writing backend state, or creating pending real-world actions.

## Fixture Coverage

- agriculture support appointment request
- workforce/training appointment request
- provider consultation request
- field visit request
- logistics coordination request
- blocked emergency service request
- blocked medical/pharmacy service request
- ambiguous provider request requiring clarification

## Harness Boundary

The harness reads `fixtures/nexus/appointment-service-requests.json`, validates each fixture through the inert M2 contract, confirms no execution authority, confirms provider identity fields, communication intent requirements, timing/availability fields, and blocked channels, then prints deterministic results.

The harness must not mutate files, not use network, not use DOM, not write `db.json`, not write storage, not dispatch providers, not book appointments, not send messages, not make calls, or not create pending real-world actions.
