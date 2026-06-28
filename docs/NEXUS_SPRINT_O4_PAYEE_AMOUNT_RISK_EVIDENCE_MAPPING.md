# Sprint O4 - Payee, Amount, Risk, and Evidence Mapping

Sprint O4 adds an inert mapping layer for payment intent drafts. The mapper derives payee identity clarity, amount/currency clarity, payment risk tier, and evidence requirements from the Sprint O2 contract and Sprint O3 fixture shapes.

This phase does not move money, call payment APIs, store credentials, open wallet handoffs, start checkout, contact payees, write backend state, write storage, or create pending real-world actions.

## Mapping Goals

Every payment intent preview candidate must keep these safety facts visible:

- payee identity requirement: the user must see which person, provider, seller, organization, or payment recipient is being discussed.
- amount and currency requirement: the amount and currency must be visible and source-backed before any future action.
- payment purpose requirement: the purpose must be visible and review-only.
- provider requirement: a configured sandbox or approved payment provider is required before any future provider action.
- consent requirement: explicit user approval is required before any future payment step.
- payee confirmation requirement: payee confirmation is required before any future transfer or payment.
- final execution gate requirement: a separate final execution gate is required before any future real-world action.
- source packet requirement: source-backed data is required before any future payment, checkout, wallet transfer, refund, or reversal.
- audit-ready state: any future action must be audit-controlled.

## Risk Tiers

All Sprint O payment intents remain `restricted`. A future lane may introduce lower-risk read-only informational states, but any money movement, checkout, wallet transfer, payment provider call, credential use, refund, or reversal remains restricted until provider, consent, audit, rollback, and final execution gates are complete.

## Clarification Rules

Ambiguous payees, amounts, currencies, methods, or purposes require clarification. Nexus must not guess the payee, infer an amount, choose a provider, open a wallet, start checkout, call a payment API, store credentials, or create a pending real-world action.

## Runtime Boundary

This mapper is contract-only. It must not be loaded by `public/index.html`, `public/app.js`, or `server.js`. It must not add UI, routes, network calls, storage writes, DOM rendering, event handlers, payment provider handoff, wallet transfer, checkout, money movement, credential storage, medical/pharmacy execution, emergency dispatch, backend writes, or autonomous execution.
