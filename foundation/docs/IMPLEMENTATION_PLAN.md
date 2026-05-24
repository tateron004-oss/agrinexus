# Implementation Plan

## Phase 1: Foundation

Status: complete at foundation level.

Deliverables:

- PostgreSQL schema and seed migrations.
- Rich demo seed data for cross-module workflows.
- Module boundaries.
- Request context shape: tenant, user, roles, permissions.
- Audit-event contract.
- Provider adapter contracts.

## Phase 2: Database Runtime

Status: started.

Deliverables:

- Database client. PostgreSQL adapter added; requires `pg` package and `DATABASE_URL` to run live.
- Migration runner. Started in `foundation/src/runtime/migrations.js`.
- Repository helpers. Started with auth repository.
- Seed command. Covered by seed migration and seed coverage smoke; live execution requires PostgreSQL.
- Health check endpoint. Complete as `GET /system/health`.

Recommended dependency once package installation is available:

- `pg` for PostgreSQL.
- `bcrypt` or `argon2` for password hashing.
- `jose` or a signed cookie/session library for auth tokens.

## Phase 3: Real Auth

Status: started.

Deliverables:

- Login/logout/me/session refresh. Foundation complete.
- Password hashing. Development PBKDF2 implementation added; replace with Argon2id/bcrypt before production users.
- Signed sessions. HMAC token helper hardened with rotation IDs and identity claims.
- Role assignment. Admin route complete.
- Tenant isolation middleware. Route runtime started; middleware still pending.
- Permission checks. Route runtime complete for foundation routes.

## Phase 4: Core Domain Port

Status: started.

Deliverables:

- Countries API. Route skeleton started.
- Facilities API. Route skeleton started.
- Program metrics API.
- Unified profile read model.
- Audit events API. Complete as admin-only `GET /admin/audit-events`.

## Phase 5: Product Modules

Status: started.

Deliverables:

- Learning: enrollments, quizzes, certificates. Route/service skeleton started.
- Workforce: applications, interviews, shifts, mentors. Foundation complete with sandbox provider adapters; real providers require credentials.
- Health: intakes, queue, representative escalation, care-plan AI. Foundation complete with sandbox and webhook provider adapters plus care/safety policy rules.
- Trade: products, orders, wallet ledger, payment provider events. Foundation complete with sandbox payments, pricing, and logistics adapters.
- AI: command center, price guidance, route risk, care-plan runs, and run history. Foundation complete with OpenAI adapter and offline fallback.
- Maps: facility layers, route layers, risk layer, and combined GeoJSON. Foundation complete with OpenStreetMap default and Mapbox-ready config.

## Phase 6: Provider Integrations

Deliverables:

- OpenAI Responses API adapter. Foundation complete; requires `OPENAI_API_KEY`.
- Map tile/geocoding adapter. Foundation complete for tile provider metadata; live geocoding/GPS feed still requires provider selection.
- Payment adapter interfaces and sandbox implementations.
- SMS/voice/video adapter interfaces and sandbox implementations.
- Certificate PDF renderer.

## Phase 7: Production Hardening

Deliverables:

- Tests.
- System/provider diagnostics.
- Admin operational history.
- Logs and metrics.
- Backups.
- Deployment.
- Environment-specific config.
- Security review.
