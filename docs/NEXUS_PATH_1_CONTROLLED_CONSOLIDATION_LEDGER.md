# Nexus Path 1 Controlled Consolidation Ledger

## Governing decision

Path 1 is a controlled migration, not a rewrite or cleanup campaign. The production chain will converge on one web runtime, database, worker system, provider layer, tool registry, object store, deployment path, and evidence model.

No source code, protected file, database record, stored artifact, schema, route, workflow, or configuration is authorized for deletion. Legacy status means **inventory and migration required**; it never means safe to remove.

## Frozen baseline

- Git baseline at ledger creation: `5e1a54b6b0a6d7e7080daa1144105a51e53631b2`
- Production host: `https://nexus-genesis-certified.onrender.com`
- Protected manifest: `.github/nexus-protected-foundation.json`
- Protected guard at ledger creation: 13/13 passed
- Rollback rule: every migration retains the last proven release and its legacy implementation

## Authoritative topology target

| Responsibility | Authoritative target | Initial state |
|---|---|---|
| User-facing web runtime | `nexus-genesis-certified` running root `server.js` | Verify live |
| Durable operational data | `nexus-postgres` | Verify live and linked |
| Background execution | `nexus-background-worker` | Verify live and linked |
| Provider execution | `agrinexus-provider-engines` | Verify live and governed |
| Artifact storage | S3-compatible object store | Verify configured; no production local fallback |
| Deployment | `nexus-unified-production-release.yml` | Verify exact-SHA execution |
| Acceptance evidence | `nexus-21-objective-production-acceptance.yml` | Repair/verify browser-visible proof |
| Physical voice proof | Protected Windows certification | Final gate |

## Protected-file treatment

All files named by `.github/nexus-protected-foundation.json` remain frozen at their approved hashes. A protected file can remain active, shadowed, or retained for rollback, but it cannot be edited, moved, renamed, regenerated, unprotected, or deleted without Ron Tate explicitly naming the file and authorizing the exact protected-baseline change.

The protected guard must pass before and after each additive migration increment. A manifest hash must never be updated merely to make a check pass.

## Workspace migration ledger

Every workspace starts at `inventory`. None is declared authoritative by this ledger.

| Workspace | State | Legacy read | Legacy write | Required evidence before cutover |
|---|---|---:|---:|---|
| Agriculture | Inventory | Allowed | Blocked | Contract, isolation, durable write, receipt, browser outcome |
| Health | Inventory | Allowed | Blocked | Contract, isolation, durable write, receipt, browser outcome |
| Chronic Care | Inventory | Allowed | Blocked | Contract, isolation, durable write, receipt, browser outcome |
| Telehealth | Inventory | Allowed | Blocked | Contract, isolation, durable write, receipt, browser outcome |
| Mobile Clinic | Inventory | Allowed | Blocked | Contract, isolation, durable write, receipt, browser outcome |
| Pharmacy | Inventory | Allowed | Blocked | Contract, isolation, durable write, receipt, browser outcome |
| Learning | Inventory | Allowed | Blocked | Contract, isolation, durable write, receipt, browser outcome |
| Workforce | Inventory | Allowed | Blocked | Contract, isolation, durable write, receipt, browser outcome |
| Marketplace | Inventory | Allowed | Blocked | Contract, isolation, durable write, receipt, browser outcome |
| Maps | Inventory | Allowed | Blocked | Contract, isolation, durable write, receipt, browser outcome |
| Music and Media | Inventory | Allowed | Blocked | Contract, isolation, durable write, receipt, browser outcome |
| Documents and Guided Entry | Inventory | Allowed | Blocked | Contract, isolation, durable write, receipt, browser outcome |
| Reminders | Inventory | Allowed | Blocked | Contract, isolation, durable write, receipt, browser outcome |
| Offline Queue | Inventory | Allowed | Blocked | Contract, isolation, durable write, receipt, browser outcome |
| Live Knowledge | Inventory | Allowed | Blocked | Contract, isolation, durable write, receipt, browser outcome |

## Required migration sequence

1. Inventory current consumers, storage, routes, providers, tests, and protected dependencies.
2. Record the existing working behavior and exact rollback release.
3. Add the authoritative path alongside the legacy path.
4. Prove contract, tenant isolation, durable write, receipt, and browser-visible outcome.
5. Cut over only the proven workspace at an exact production SHA.
6. Observe three stable production passes and complete physical voice certification.
7. Disable the legacy path while retaining its code and data for rollback.
8. Removal remains out of scope and requires separate explicit authorization.

## Stop conditions

Work stops before mutation when a change would touch a protected file, delete or rewrite existing code/data, perform a destructive schema migration, remove rollback, widen production targets, silently enable a fallback, or declare success without visible/audible production evidence.
