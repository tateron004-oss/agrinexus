# Nexus Sprint K1 - Contact and Provider Identity Product Boundary

Sprint K1 defines the product boundary for future contact and provider identity resolution.

This phase is documentation and deterministic QA only. It does not add runtime UI, identity lookup, contact lookup, provider lookup, provider dispatch, provider handoff, calls, messages, WhatsApp, Telegram, SMS, email, scheduling, payments, purchases, location sharing, camera or microphone access, medical/pharmacy behavior, emergency routing, marketplace transactions, backend writes, storage writes, network calls, or pending real-world actions.

## Product Boundary

Contact and provider identity resolution means Nexus may eventually help determine who or which organization a user appears to mean before any action is prepared. It is not permission to contact, call, message, schedule, dispatch, pay, buy, share location, open camera, access medical data, or execute provider workflows.

## Identity Resolution Scope

Allowed future resolution inputs are:

- typed or voice user phrase;
- selected lane or workflow context;
- user-visible candidate label;
- source type;
- confidence tier;
- evidence summary;
- missing information prompt;
- ambiguity prompt;
- safe fallback message.

Disallowed in this phase:

- live contact search;
- live provider search;
- hidden identity matching;
- device contacts;
- native bridge contacts;
- provider API calls;
- background network lookup;
- storage of resolved identities;
- real pending action creation.

## Confirmation Versus Execution

A user can approve an identity candidate only as an intent signal. Approval is not execution. A separate final execution gate remains required before any real-world action can occur.

The boundary requires:

- `identityResolutionOnly: true`;
- `approvalIntentOnly: true`;
- `finalExecutionGateRequired: true`;
- `executionAuthority: false`;
- `providerDispatchAllowed: false`;
- `providerHandoffAllowed: false`;
- `communicationAllowed: false`;
- `networkAllowed: false`;
- `storageWriteAllowed: false`;
- `backendWriteAllowed: false`.

## High-Risk Domains

Identity resolution remains restricted for:

- healthcare and telehealth;
- pharmacy and prescriptions;
- emergency support;
- marketplace buyer or seller contact;
- payments and purchases;
- transportation dispatch;
- minors or family support;
- account/profile identity;
- location and camera flows.

## Standard User Expectation

The Standard User build may eventually show an identity preview only after a future gated phase. It must not execute communication, open a provider, open external navigation, activate permissions, write backend state, or create a real pending action.

## QA Expectation

QA must prove this boundary exists, the no-execution language is explicit, and no Sprint K1 artifact is loaded by `public/index.html`, `public/app.js`, or `server.js`.
