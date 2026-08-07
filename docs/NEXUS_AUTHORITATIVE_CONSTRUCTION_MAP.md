# Nexus Authoritative Construction Map

Status: authoritative construction baseline

Audited commit: `75051380ce9bed752f1f8d49066b8a1fd312b5e9`

Construction branch: `rebuild/nexus-genesis-clean-foundation`

Recovery branch: `recovery/pre-unified-construction-75051380`

Canonical production host: `https://nexus-genesis-certified.onrender.com`

This document is the single implementation map for completing Nexus. It replaces the
repository's phase ledgers, readiness contracts, repair workflows, and subsystem-specific
roadmaps as construction authority. Older documents remain historical evidence only.

## 1. Audit verdict

The repository contains substantial working capability, but it is not one system.
There are three architectural centers:

1. The protected legacy production application in `server.js`, `public/`, and `server/`.
2. The isolated voice and visual runtime in `rebuild/`.
3. The PostgreSQL-oriented modular backend in `foundation/`.

The current release branch also starts three competing certification workflows on push:

- `nexus-clean-windows-certification.yml`
- `nexus-release-certification-v2.yml`
- `nexus-voice-form-entry-certification.yml`

The codebase has 2,721 files, including 1,215 scripts, 699 documentation files, 255 public
files, 144 server modules, 66 rebuild files, and 18 GitHub Actions workflows. The protected
legacy runtime includes a roughly 49,000-line server and 56,000-line browser application.
Nexus therefore has many implemented capabilities but no authoritative runtime ownership.

The construction decision is:

- `rebuild/nexus-core` becomes the protected voice/interaction adapter, not a second backend.
- `foundation/src` becomes the starting point for the durable application platform.
- A new additive `nexus/` package becomes the sole runtime, task, tool, worker, policy,
  storage, and application orchestration authority.
- Existing legacy and rebuild interfaces are migrated behind adapters, verified, and then
  retired in controlled slices.
- Production certification becomes one managed-cloud workflow invoked only for a release
  candidate, never three push-driven Windows workflows.

## 2. Non-negotiable invariants

1. The only user-facing production host is `https://nexus-genesis-certified.onrender.com`.
2. A release is identified by exact Git SHA, deployment identity, browser bundle identity,
   database migration level, and certification evidence set.
3. Nexus is the sole microphone owner. Voice remains continuous, supports barge-in, and
   returns to listening after every response or recoverable failure.
4. Nexus never reports success until the requested visible, audible, stored, or external
   outcome is verified.
5. External actions require the policy decision, identity, scope, consent, confirmation,
   idempotency, execution receipt, and outcome verification appropriate to their risk.
6. Health guidance preserves emergency escalation, consent, privacy, and human review.
7. Every task, memory, consent decision, tool attempt, worker transition, and result has a
   durable audit event with a correlation ID.
8. No browser bundle, route handler, workspace, or provider owns a competing task engine.
9. No demo, simulation, dry run, or local-only record can be labeled as live execution.
10. The protected-foundation guard must pass before and after every publication.

## 3. Target architecture

| Layer | Sole owner | Contract |
| --- | --- | --- |
| Experience | protected UI plus `rebuild/browser` during migration | Renders runtime state and artifacts; never decides task truth |
| Voice | `rebuild/nexus-core` behind `nexus/adapters/voice` | Owns mic, Realtime transport, speech events, wake/barge-in lifecycle |
| API | `nexus/api` mounted by the production server | Authenticated commands, tasks, artifacts, consent, memory, status |
| Brain | `nexus/runtime` | Understands goals, maintains dialogue context, produces task plans |
| Task engine | `nexus/tasks` | Durable state machine for goals, steps, dependencies, approvals, retries |
| Tool plane | `nexus/tools` | Typed registry, policy preflight, provider execution, verification receipts |
| Application plane | `nexus/apps` | Domain skills/workspaces expressed as task and artifact adapters |
| Identity/policy | `nexus/identity` and `nexus/policy` | Tenant/user/service identity, RBAC/ABAC, consent, confirmation, risk controls |
| Data | `nexus/data` | PostgreSQL repositories, migrations, transactions, tenancy, retention |
| Memory | `nexus/memory` | Working, episodic, semantic, profile, and domain memory with provenance |
| Workers | `nexus/workers` | Durable queue consumers, schedules, retries, leases, dead letters |
| Storage | `nexus/storage` | Object metadata, signed access, malware/type/size validation, lifecycle |
| Observability | `nexus/observability` | Structured events, traces, metrics, redaction, release/correlation identity |
| Deployment | one Render release path | Immutable exact-SHA build, migrate, deploy, health, rollback |
| Certification | one managed-cloud workflow | Integrated API/browser/voice-provider/outcome certification and evidence |

## 4. Repository inventory and decisions

### Brain and orchestration

| Existing component | Evidence | Decision |
| --- | --- | --- |
| `server/nexusAgenticBrainRuntime.js` | Task lists, local queues, command handling, verification | Extract useful intent/task semantics; replace as runtime authority |
| `server/nexusProductionRuntime.js` | plan/execute/verify APIs | Preserve contracts as compatibility adapter; replace implementation |
| `server/nexus-assistant-runtime-entrypoint.js` | assistant response entrypoint | Migrate response composition into the unified runtime |
| `public/nexus-unified-brain-runtime.js` | browser-side mission state | Keep only presentation adapter; remove browser brain decisions |
| autonomy workflow modules | goal classifier, planner, runner, session state, recovery | Consolidate into durable task engine; remove parallel state machines |
| `rebuild/nexus-core/router.js` | clean voice intent routing | Keep as voice-to-command adapter; backend remains authoritative |

Target: one command envelope enters `nexus/runtime`, creates or resumes one durable task,
and all later voice, typed, worker, provider, and workspace events reference its IDs.

### Voice

| Existing component | Decision |
| --- | --- |
| `rebuild/nexus-core/microphone-controller.js` | Keep; sole microphone ownership implementation |
| `connection-machine.js`, `voice-foundation.js`, `realtime-connector.js` | Keep and harden behind a voice adapter |
| `openai-provider.js`, `voice-session-service.js` | Keep server-side ephemeral credential boundary |
| `browser-runtime.js` | Keep transport/event handling; remove application authority |
| protected legacy voice files | Preserve until replacement certification proves parity |
| other voice routers/managers in `public/` and `server/` | Inventory call sites, adapt temporarily, then remove |

Voice certification will validate actual browser audio input/output in managed cloud where
possible and use deterministic media-device fixtures for repeatability. A small explicit
physical-device acceptance suite may remain a hardware compatibility test, but it will not
own releases or require a single personal Windows runner.

### Tools and providers

`server/providers/` contains browser, calendar, communications, documents, drone, maps,
marketplace, medical, RPM/RTM, telehealth, pharmacy, payment, reminders, storage-adjacent,
learning, Zoom, Twilio, and other bridges. Source-provider modules separately implement
weather, music/media, jobs, agriculture, shipment, news/security, and live knowledge.

Decision:

- Keep provider-specific protocol code that performs real operations.
- Wrap every provider in one typed tool contract: input schema, output schema, required
  identity, risk tier, consent rule, timeout, retry policy, idempotency policy, verifier,
  and redaction policy.
- Replace environment-flag scattering with one provider registry and startup validation.
- Remove placeholder, preview, simulated, and local-queue providers from production tool
  selection. They may exist only under an explicitly labeled test fixture registry.
- A tool call is not complete until its verifier produces an outcome receipt.

### Memory

Existing memory is divided among browser persistence, JSON database fields, session-context
modules, strong-follow-up memory, autonomy session state, and readiness contracts.

Target memory classes:

| Class | Purpose | Retention/control |
| --- | --- | --- |
| Working | Current dialogue and active task context | Short TTL; task scoped |
| Episodic | Prior interactions and outcomes | User-visible; deletable; provenance required |
| Semantic | Stable facts and preferences | Explicit confidence/source; correction history |
| Profile | Identity, accessibility, language, voice preferences | Versioned; consent controlled |
| Domain | Health, agriculture, learning, workforce records | Separate policy and retention scopes |

All memory reads are scoped by tenant, principal, purpose, and task. Memory never grants
execution authority. Sensitive memory is encrypted at rest and excluded from logs.

### Tasks

The authoritative task state machine is:

`draft -> clarifying -> planned -> awaiting_consent -> awaiting_confirmation -> queued -> running -> verifying -> completed`

Terminal/exception states are `cancelled`, `blocked`, `failed`, and `expired`. Recovery
creates a new attempt while preserving the prior immutable attempt and receipt chain.

Required durable entities:

- goals, tasks, task_steps, task_dependencies, task_attempts
- approvals, consents, confirmations, policy_decisions
- tool_calls, provider_attempts, verification_receipts
- artifacts, artifact_versions, task_artifact_links
- worker_jobs, schedules, leases, retries, dead_letters
- conversation_turns, memory_items, memory_sources
- audit_events and release/certification evidence

### Database and storage

`foundation/migrations/001_initial_schema.sql` and the modular repositories are the best
existing database starting point. They already establish PostgreSQL, multi-tenancy, core
domains, audit records, and module boundaries. They do not yet provide the complete unified
task/memory/worker model.

Decision:

- Keep and extend PostgreSQL migrations; use no production JSON persistence.
- Add transactional outbox/inbox tables for reliable workers and provider callbacks.
- Add schema migration locking and startup compatibility checks.
- Add backup, restore, retention, and point-in-time recovery requirements.
- Add an object-storage abstraction for user documents, generated artifacts, media metadata,
  and certification evidence. Store object metadata and access policy in PostgreSQL.
- Never store provider credentials, raw secrets, or unrestricted signed URLs in records.

### Identity, authorization, consent, and security

The foundation auth module, permission runtime, and request context are the starting point.
The clean voice session authority provides a useful short-lived signed-session boundary.
The current PBKDF2 development password implementation must not be used for production.

Target controls:

- Argon2id password hashing or external OIDC; rotation-safe signed sessions.
- Tenant isolation enforced in middleware and repository queries.
- User, provider, administrator, worker, and deployment service identities.
- RBAC plus resource/purpose/risk attributes for sensitive operations.
- Consent receipts record subject, scope, purpose, recipient, version, expiry, and revocation.
- Step-up authentication and final confirmation for high-impact actions.
- CSRF, secure cookies, strict origins, rate limits, payload limits, SSRF controls, secure
  headers, dependency scanning, secret scanning, and audit-log redaction.
- Health, payment, communications, location, camera, and drone policies remain deny-by-default.

### Workers

There is no authoritative durable worker system. Current queues are mainly JSON/local state
or workflow-specific behavior.

Build:

- PostgreSQL-backed job queue first, with `FOR UPDATE SKIP LOCKED`, leases, heartbeats,
  bounded retries, exponential backoff, idempotency keys, and dead-letter review.
- Separate worker roles for tool execution, provider callbacks, scheduled reminders,
  memory processing, artifact generation, notification delivery, and certification.
- Workers call the same task/tool/policy services as synchronous API paths.
- No worker may bypass consent, confirmation, tenancy, or verification.

### Applications and workspaces

Every application becomes a manifest plus domain adapter, not a router or independent brain.

Required migration lanes:

1. Agriculture Help and predictive agriculture
2. Health and Chronic Care: diabetes, hypertension, obesity, RPM/RTM
3. Telehealth Intake
4. Mobile Clinic
5. Pharmacy Support
6. Learning and Literacy
7. Jobs and Workforce
8. AgriTrade Marketplace and logistics
9. Maps and Field Visit
10. Music and Media
11. Reminders and Calendar
12. Offline Queue and synchronization
13. Documents and Guided Entry
14. Communications and provider contact
15. Live Knowledge, images, lists, weather, news, and sources
16. Sessions/video, LMS, drone, payment readiness, and administration

Each manifest declares intents, required fields, task templates, tools, risk rules, artifact
renderers, validators, and verification rules. Workspaces render task state and artifacts and
send commands back to the same API. They do not execute providers directly.

### Observability

Current audit events are fragmented across runtime modules and local stores.

Build one event envelope containing event ID, timestamp, tenant, actor, session, conversation,
task, step, tool, attempt, release, trace, correlation, event type, outcome, latency, provider,
and redacted metadata. Emit structured JSON logs, traces, and metrics from the same envelope.
Never log secrets, raw health content, full messages, audio, or unrestricted documents.

Minimum release dashboards/alerts cover authentication, command latency, voice connection,
tool success and verification, queue age, retry/dead-letter rate, database health, provider
health, deployment identity mismatch, certification result, and error-budget burn.

### Deployment

The final path is one immutable release:

1. Validate protected foundation and source integrity.
2. Build once and attach Git SHA/build identity.
3. Run unit, contract, integration, security, migration, and browser tests.
4. Deploy the exact artifact to a non-production release environment.
5. Run migrations under a lock and execute smoke/certification gates.
6. Promote the identical artifact to Nexus Certified.
7. Verify host, Git SHA, browser bundle, migration level, providers, and health.
8. Run managed-cloud production certification and publish evidence.
9. Roll back automatically on identity mismatch or critical outcome failure.

No deployment workflow may edit source, repair a build, commit generated changes, or select a
different SHA after testing.

### Certification

Replace the 18-workflow release maze with these eventual workflows:

| Workflow | Trigger | Purpose |
| --- | --- | --- |
| `nexus-ci.yml` | pull request/push | Fast deterministic unit, contract, lint, security, build tests |
| `nexus-release.yml` | explicit release candidate | Build exact artifact, migrate staging, integrated certification, promote |
| `nexus-production-certification.yml` | release completion/manual | Exact-host/SHA outcome verification and evidence publication |
| `nexus-hardware-compatibility.yml` | manual/scheduled | Optional physical-device compatibility; never release authority |

Certification must cover identity/SHA/bundle, auth/tenancy, durable task lifecycle, memory,
consent, workers/recovery, every application lane, continuous multilingual voice, barge-in,
images, source-backed lists, correct map coordinates/viewports, audible music, usable and
persisted documents/forms, cross-application continuity, provider resilience, truthful
failure, security boundaries, accessibility, responsive UI, and rollback readiness.

## 5. Keep, replace, remove summary

### Keep and integrate

- Protected user experience and proven voice invariants until certified replacement.
- Clean voice ownership/Realtime modules in `rebuild/nexus-core`.
- PostgreSQL migrations, modular repositories, request context, audit concepts, and domain
  service boundaries in `foundation/`.
- Real provider adapters and outcome verification logic.
- High-value application policies, schemas, domain validations, and safety rules.
- Tests that assert user-visible/audible/stored outcomes rather than implementation strings.

### Replace through adapters

- Legacy brain, planner, action executor, verifier, and task stores.
- Browser-owned intelligence, routing truth, memory, and success decisions.
- JSON/local production persistence.
- Scattered environment/provider readiness checks.
- Parallel consent, approval, audit, session, and queue implementations.
- Direct workspace-to-provider execution.

### Remove after migration proof

- Duplicate routers and state machines.
- Readiness-only and simulation-only runtime modules from production loading.
- Build-number repair workflows and source-mutating Actions.
- Automatic Windows certification triggers and competing release controllers.
- Obsolete bundles, patches, trigger files, local-only success paths, and historical release
  scripts that are not invoked by the authoritative build.
- Documentation that claims authority outside this map; retain only as archived evidence.

## 6. Continuous construction sequence and gates

| Train | Work | Exit gate |
| --- | --- | --- |
| 0. Freeze | Stop automatic release triggers; preserve recovery branch | No certification loop; recovery ref resolves to audited SHA |
| 1. Kernel | Add `nexus/` contracts, IDs, command envelope, task state machine, policy/tool interfaces | Unit and invariant tests pass |
| 2. Durability | Add task/memory/consent/audit/worker migrations and repositories | Restart and transaction recovery tests pass |
| 3. Identity/security | Integrate auth, tenancy, permissions, consent, secrets, redaction | Adversarial and isolation tests pass |
| 4. Tool plane | Wrap real providers, idempotency, retries, verification | Contract tests and truthful failure pass |
| 5. Voice bridge | Connect clean voice events to unified commands/tasks | Continuous voice lifecycle and barge-in pass |
| 6. Workspace migration | Move every application manifest and renderer | Each lane completes visible/audible/stored outcome tests |
| 7. Removal | Disable and delete duplicate runtime paths and repair workflows | Dependency graph has one owner per responsibility |
| 8. Cloud release | Add managed CI/release/certification and exact artifact promotion | Cloud integrated certification passes |
| 9. Production | Deploy one exact SHA to Nexus Certified | Host/SHA/bundle/migration identity and all outcomes pass |

Construction proceeds train by train without routine pauses. A train stops only for a failed
invariant that cannot be repaired safely, a protected-file change lacking explicit file-level
authorization, missing credentials/infrastructure needed for that train, or a material product
or safety decision that cannot be inferred.

## 7. Immediate file plan

The first additive implementation creates:

- `nexus/contracts/` for identifiers, commands, events, tasks, tools, artifacts, and errors
- `nexus/runtime/` for the sole command/dialogue orchestration service
- `nexus/tasks/` for state transitions, planning, attempts, and verification
- `nexus/policy/` for risk, consent, confirmation, and execution authorization
- `nexus/tools/` for registry, dispatcher, provider adapters, idempotency, and verification
- `nexus/data/` for PostgreSQL repositories, transactions, migrations, and outbox/inbox
- `nexus/memory/`, `nexus/workers/`, `nexus/storage/`, and `nexus/observability/`
- `nexus/apps/` for application manifests and domain adapters
- `nexus/api/` for the authenticated compatibility and target API
- `test/nexus/` for unit, contract, integration, restart, security, and application tests

The first protected changes eventually required are expected to include the production server
mount, browser entry/bundle wiring, service worker/cache identity, and the protected Windows
workflow retirement. They must be named and authorized individually after additive runtime
tests pass; the protected manifest is updated only after the new release passes its required
certification.

## 8. Definition of finished

Nexus is construction-complete only when a signed-in user can speak or type an unfamiliar,
open-ended goal; Nexus can clarify it, create a durable task, obtain required consent and
confirmation, execute real configured tools through workers, recover across restart, render
and persist the correct artifacts in the appropriate workspace, verify the outcome, explain
truthfully what happened, remember only permitted information, and continue across application
lanes—while one managed release system proves the exact deployed SHA and all protected voice,
security, health, and user-outcome invariants on Nexus Certified.
