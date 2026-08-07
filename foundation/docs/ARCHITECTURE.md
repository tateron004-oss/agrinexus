# AgriNexus Production Architecture

This directory supplies PostgreSQL bootstrap, shared infrastructure, and compatibility modules. The single
authoritative task, tool, consent, memory, execution, and worker runtime lives under `nexus/`; foundation is
not a competing agent or task engine.

## Modules

| Module | Owns | Replaces Prototype Behavior |
| --- | --- | --- |
| `auth` | tenants, users, roles, sessions, permissions | demo email/password check |
| `core` | countries, facilities, program metrics, audit events | hardcoded country objects |
| `learning` | courses, enrollments, quizzes, certificates | in-browser course counters |
| `workforce` | candidate profiles, roles, applications, shifts | simulated readiness/job flow |
| `health` | patient intakes, queue, escalation, care plans | simulated AFAYAI buttons |
| `trade` | products, orders, wallet accounts, transactions | simulated orders and wallet math |
| `ai` | OpenAI runs, prompts, outputs, trace metadata | canned AI strings |
| `maps` | facilities, routes, checkpoints, risk layers | seeded map markers and route lines |
| `system` | health checks, provider diagnostics, module registry | no prototype equivalent |
| `admin` | audit events, AI run oversight, operational history | no prototype equivalent |

## Database

The foundation schema targets PostgreSQL 15+:

- `foundation/migrations/001_initial_schema.sql`
- `foundation/migrations/002_seed_demo.sql`
- `foundation/migrations/003_nexus_unified_runtime.sql`

Rollback SQL is kept outside the forward migration directory at
`foundation/rollbacks/003_nexus_unified_runtime.sql`; it must only be run after a backup and worker drain.

The schema is multi-tenant from the start. Every operational table that needs isolation includes `tenant_id`.
The third migration requires pgvector and makes PostgreSQL the system of record for conversations,
tasks, execution receipts, queued work, semantic memory, documents, consent, notifications, webhooks,
and offline synchronization. Client-side state is an offline cache only.

## Authoritative runtime boundary

New production actions enter through `nexus/runtime/authoritative-task-engine.js`. Its state machine is the single lifecycle
authority for planning, approval, execution, verification, and receipts. Tools are unavailable until a
registry row says they are available and a real executor is configured. Idempotency keys prevent duplicate
execution. `nexus/workers/job-repository.js` uses PostgreSQL row locks and `SKIP LOCKED` for independent cloud workers;
`NexusWorker` supplies retry/dead-letter behavior. The Nexus memory repository requires provenance, scopes every
query to tenant and user, restricts health-memory retrieval by role, and supports correction and deletion.

Legacy prototype routers remain compatibility surfaces during migration; they must delegate into this
control plane before they can be removed. They are not an alternative production system of record.

The demo seed migration now populates cross-module scenarios for countries, facilities, routes, courses, workforce roles, health intakes, products, trade orders, wallet activity, AI runs, and audit events.

## Integration Boundaries

External providers should attach through module services, not directly from route handlers:

- OpenAI -> `ai`
- Map tiles/geocoding/GIS -> `maps`
- M-Pesa/MTN/Airtel/bank -> `trade`
- SMS/voice/video/EHR -> `health`
- calendar/notifications/HRIS -> `workforce`
- certificate PDF renderer -> `learning`

## Migration Strategy

1. Keep `server.js` working as the runnable prototype.
2. Add a real database connection layer under `foundation/src`.
3. Port one module at a time from JSON file state to PostgreSQL.
4. Add authentication and tenant-aware request context.
5. Replace prototype API endpoints with module route handlers.
6. Add provider adapters behind each module boundary.
7. Add tests per module before removing JSON fallback.

## Security Requirements

- Passwords must be hashed with Argon2id or bcrypt before real users are enabled.
- Sessions must be signed, expiring, and tenant-scoped.
- Session refresh must rotate signed token IDs.
- Admin user and role routes must remain admin-only.
- API keys must remain server-side only.
- Every write must emit an `audit_events` row.
- Admin history routes must remain admin-only.
- System diagnostics must not expose secrets or raw API keys.
- Health data must be treated as sensitive and protected by role permissions.
- Wallet/provider events must use idempotency keys before real money movement.

## Production Checklist

- PostgreSQL database
- Migration runner
- Secrets management
- Real auth/session implementation
- Role-based authorization middleware
- Audit logging middleware
- OpenAI provider adapter
- Map provider adapter
- Payment provider adapters
- Telehealth/SMS provider adapters
- Background jobs
- Structured logs
- Backups
- Automated tests
- Deployment config
