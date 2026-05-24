# AgriNexus Production Architecture

This foundation layer is the production backbone for the full AgriNexus platform. It sits beside the current prototype so we can keep the demo runnable while replacing prototype internals with real services.

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

The schema is multi-tenant from the start. Every operational table that needs isolation includes `tenant_id`.

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
