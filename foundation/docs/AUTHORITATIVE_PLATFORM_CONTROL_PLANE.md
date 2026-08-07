# Authoritative Platform Control Plane

## Delivered in this change

The production repository now has a single backend lifecycle under `nexus/`. The `foundation/` directory
contains migration/bootstrap compatibility only and does not contain a second task engine:

- PostgreSQL tables for conversations, tasks, steps, participants, tools, executions, jobs, attempts,
  semantic memory, consent, documents, versions, webhooks, notifications, and offline sync operations.
- pgvector-backed memory with mandatory provenance, confidence and verification state, expiration,
  correction, deletion, tenant/user scoping, and role-gated health retrieval.
- A central tool definition contract covering schemas, availability, permissions, roles, risk,
  confirmation, consent, timeouts, retries, verification, data classification, cost, and feature flags.
- One task state machine for creation, transitions, approval, execution, verification, failure, and receipts.
- Idempotency enforcement in both task steps and execution records.
- A PostgreSQL job queue using transactional claims and `FOR UPDATE SKIP LOCKED`, leases, heartbeats,
  exponential retry, and terminal dead-letter state.
- A worker runtime that refuses jobs without real registered handlers.
- Production startup guards for database, session secret, and password pepper configuration.
- PostgreSQL connection-pool and timeout controls.
- A pgvector-enabled local PostgreSQL image and a manual, backup-first rollback script.

## Truthful deployment status

This is the authoritative backend seam, not a claim that the whole product is migrated. The large root
`server.js` and browser runtime still contain legacy routers and JSON/local persistence. They must be moved
behind `AuthoritativeTaskEngine`, one capability at a time, before removal. No external provider was marked available,
no managed database or object store was provisioned, and no cloud worker was deployed by this source change.

## Required activation order

1. Provision separate development, staging, and production PostgreSQL instances with pgvector.
2. Configure production secrets and backup/point-in-time recovery policies.
3. Run the forward migrations in staging, exercise rollback from a backup, then promote them to production.
4. Deploy independent API and worker processes using the same exact release identity.
5. Register only real tool executors; leave disconnected providers `unavailable`.
6. Route legacy application actions through `AuthoritativeTaskEngine` and compare receipts during migration.
7. Move document bytes to managed object storage while retaining metadata/version records in PostgreSQL.
8. Add centralized logs, traces, metrics, security alerts, and queue/worker dashboards.
9. Run tenant-isolation, failure-recovery, offline-sync, security, accessibility, and load suites.
10. Remove legacy paths only after three consecutive integrated passes on one exact production release.

## Verification commands

```powershell
node foundation/scripts/check.js
node --test test/nexus/*.test.js
```

The Nexus tests cover explicit confirmation, tenant isolation, disconnected-tool refusal, verified
execution receipts, and repeat-call idempotency. Database migration verification additionally requires a
PostgreSQL server with the vector extension installed.
