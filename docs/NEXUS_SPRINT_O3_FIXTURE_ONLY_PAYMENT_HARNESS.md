# Sprint O3 - Fixture-Only Payment Harness

Sprint O3 adds deterministic local fixtures for payment intent data. These fixtures exercise payment review categories, mobile money review, service fee review, refund/reversal review, blocked execution cases, and clarification needs without moving money, starting checkout, calling payment APIs, storing credentials, writing backend state, or creating pending real-world actions.

## Fixture Coverage

- marketplace payment review
- mobile money transfer review
- service payment review
- transportation fare review
- provider fee review
- refund or reversal review
- blocked payment execution request
- ambiguous payment request requiring clarification

## Harness Boundary

The harness reads `fixtures/nexus/payment-intents.json`, validates each fixture through the inert O2 contract, confirms no execution authority, confirms payee identity fields, amount/currency fields, consent requirements, dry-run packet requirements, and blocked channels, then prints deterministic results.

The harness must not mutate files, not use network, not use DOM, not write `db.json`, not write storage, not call payment APIs, not store credentials, not open wallet handoffs, not start checkout, not move money, and not create pending real-world actions.
