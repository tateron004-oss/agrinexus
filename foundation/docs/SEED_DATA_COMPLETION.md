# Seed Data Completion Status

The demo seed data is now rich enough to support meaningful backend and frontend workflows.

## Completed

- Demo tenant.
- Countries with program metrics.
- Roles and demo coordinator user.
- Routes with checkpoint coordinates.
- Facilities with operational metadata.
- Courses across digital, field, care, trade, logistics, and AI tracks.
- Learner and candidate profiles.
- Workforce roles and one seeded application.
- Patient intakes across routine, moderate, high, and critical scenarios.
- Products across active countries.
- Trade orders with route/checkpoint context.
- Wallet account and wallet transactions.
- AI run history.
- Audit event history.
- Seed coverage smoke test.

## Primary Demo Scenarios

- Nigeria command center with heat-risk health queue and Lagos corridor activity.
- Kenya export route with Mombasa handoff and cold-chain quality checks.
- Egypt heat-response care-plan scenario.
- DRC mobile resilience field escalation scenario.
- Workforce role application for telehealth intake operations.
- Wallet balance with posted credit and debit activity.

## Files

```text
foundation/migrations/002_seed_demo.sql
foundation/scripts/seed-coverage-smoke.js
```

## Verification

```text
node foundation/scripts/seed-coverage-smoke.js
node foundation/scripts/foundation-smoke.js
```

## Remaining Real-World Blockers

These require live database setup:

- Run migrations against PostgreSQL.
- Validate seed insert execution with the `pg` adapter.
- Add tenant-specific production seed/import tooling.
