# Acceptance data hygiene

The protected production deploy ends by driving the live site as the production-acceptance principal. Every run created test
records for that principal and nothing ever removed them. This page explains what that broke, what now cleans it up, the safety
limits of the cleanup, how to read the new failure messages, and a one-time manual unblock.

## What went wrong

On the last two production releases the `lists` browser capability probe failed on both attempts with

    503 code=outcome_unverified category=runtime_unavailable error=The authoritative verifier rejected the lists.create outcome

and it had passed on every earlier release.

`nexus/lists/executor.js` allows at most `MAX_LISTS_PER_ACCOUNT = 200` lists per account (and `MAX_ITEMS_PER_LIST = 500`). At the
cap the executor returns `{ persisted:false, reason:"list_cap_reached" }`, the verifier rejects that (nothing was written), and
the pipeline log showed only the generic sentence above. The cap is a legitimate limit for real users and was not changed.

The cause strongly supported by the repository: `scripts/nexus-run-browser-capability-probes.js` runs the `lists` scenario
("Create a checklist called Farm Chores ...") through `/api/nexus/runtime/production-acceptance/probes/behavior-turn` **twice per
run** (a `pre-cutover` and a `post-cutover` execution), each creating one checklist for the acceptance principal. At two lists per
run the account reaches 200 after about 100 runs, which is consistent with 47 deploys in four days plus reruns and the weeks of
pipeline history before that. Once the cap is reached every later run fails, on every attempt, until something removes lists.

**Status of this diagnosis: strongly supported, not confirmed.** Production data cannot be read from the repository. The first
production run with the new diagnostics will say so directly: the failure line will read `(reason=list_cap_reached max=200)` if it
is the cap, and will name whatever it really is otherwise. Nothing in this change depends on the diagnosis being right: the
cleanup is harmless if the account is not at the cap.

Correction to the original brief: `scripts/nexus-21-objective-production-acceptance.js` (the three acceptance passes) is read-only
(GET requests only) and creates no records. The records come from the browser capability probe step, which runs before the passes.

### The acceptance principal is a real user row

`acceptancePrincipal()` (`nexus/compat/server-runtime-adapter.js`) is the active membership holding the `acceptance:identity`
permission. Migration `011_nexus_production_acceptance_identity.sql` grants that membership to the **oldest active user** in the
database, so the acceptance account is an ordinary user account. The 200-list cap counts *all* of that account's lists, so lists
the person who owns the account made for themselves count toward the same 200. This is why the cleanup cannot simply delete the
account's lists: it must delete only what the acceptance route created (see "How cleanup decides what to remove").

## What the probes create, and the caps that apply

Per browser-probe run (`SCENARIOS` x 2 executions each, plus one voice-equivalence turn). Only records stored for the acceptance
principal are listed. "Refusal cap" means the executor refuses to create more once reached.

| Capability (scenario) | Record created per execution | Per run | Refusal cap | Runs until cap | At risk? |
|---|---|---|---|---|---|
| lists | `nexus_records` workspace `lists` type `checklist` | 2 | **200 per account** (`MAX_LISTS_PER_ACCOUNT`) | **about 100** | **Reached; this is the failure** |
| reminders | `nexus_notifications` queued push (due "tomorrow 9 AM") | 2 | none | n/a | Silent growth. `reminders.list` only reads a 200-row window; the reminders also stay queued and are claimed by the delivery worker when due |
| documents (also learning, workforce when the planner picks `documents.create` / `resume.create`) | `nexus_documents` row + version (+ export file on the web server disk) | 2 or more | none (`documents.list` reads a 200-row window) | n/a | Silent growth of rows and files |
| health | `nexus_records` workspace `health-records` type `health_observation` | 2 | none (readings summaries read 200-row windows) | n/a | Silent growth |
| telehealth | `nexus_records` workspace `telehealth-intakes` type `telehealth_intake` | 2 | none | n/a | Silent growth |
| operations | `nexus_records` workspace `field-operations` type `field_operation_plan` | 2 | none | n/a | Silent growth |
| communications | none (the gate is held; nothing is sent) | 0 | n/a | n/a | No |
| offline-queue, business, agriculture, mobile-clinic, pharmacy, marketplace, maps, logistics, music-media, live-knowledge, images, videos | none beyond task bookkeeping | 0 | n/a | n/a | No |
| every scenario (bookkeeping) | task, task steps, conversation, execution, audit/observability events, `authoritative-workspace-state` record | about 43 tasks | none | n/a | Not capped, not cleaned (see limits) |

So **lists is the only capability reachable by the probes that has a hard refusal cap**, and it is the one that has been hit. No
other capability will start failing the way lists did from record count alone. Reminders, documents and health records keep
growing without any limit tripping, and a read window of 200 rows is the only thing that eventually saturates; that does not fail
a probe, but it is the same leak and is cleaned too. Other caps in the code (`MAX_ENTRIES`, `MAX_PATIENTS`, `MAX_ACTIVE_PER_PERSON`,
`MAX_CONTACTS`, `MAX_ITEMS`, ...) belong to features the probes do not exercise. The daily cost limit
(`NEXUS_DAILY_COST_LIMIT_CENTS`) is not configured.

## What changed

1. **The failure now names its reason.** `nexus/runtime/capability-execution-authority.js` appends the verifier's own reason to the
   503 message, and `verifyListsCreateOutcome` passes the executor's refusal through. The line now reads

       The authoritative verifier rejected the lists.create outcome (reason=list_cap_reached max=200).

2. **The acceptance run cleans up its own data.** A new token-protected route,
   `POST /api/nexus/runtime/production-acceptance/cleanup`, implemented in `nexus/acceptance/data-hygiene.js`, removes the
   acceptance principal's old test records. `scripts/nexus-run-browser-capability-probes.js` calls it once, at the start of the
   run, before it launches the browser or creates any new record (`scripts/lib/nexus-acceptance-cleanup.js`).

3. **The candidate job proves the SQL against a real database.** `scripts/nexus-preproduction-black-box.js` calls the cleanup in
   dry-run mode against the loopback candidate (real PostgreSQL, candidate-only token). A dry run reads and also prepares every write
   statement with an empty id list, so a SQL or schema mistake fails the candidate job instead of a production deploy.

Verification is not weakened. Every scenario still creates a fresh record in both phases and verifies it through the same
authoritative verifier and the same browser acknowledgement. The deploy gate, the probe meanings and the lists cap are unchanged.

## How cleanup decides what to remove

All of these are structural, and each is covered by a test in `test/nexus/acceptance-data-hygiene.test.js`.

* **The principal is never supplied by a caller.** The route takes it from `acceptancePrincipal()`; the body cannot name a tenant,
  user, workspace or type. `cleanup()` re-checks in the database that the tenant and user it was handed hold an active
  `acceptance:identity` membership and otherwise refuses with `acceptance_cleanup_refused` (403) before reading any row.
* **Only rows made by the acceptance route.** Because the account is a real user, owner scoping is not enough. A row is eligible
  only if its `task_id` belongs to a task of that tenant and user whose `correlation_id` is exactly `acceptance-<uuid>` (the shape
  the behavior-turn route generates). The user's own lists, records without a task, and tasks created by ordinary requests are never
  matched. Every UPDATE repeats the tenant, owner and task condition, so a mistake in candidate selection cannot widen the effect.
* **Allowlisted types only:** `lists/checklist`, `health-records/health_observation`, `health-records/chronic_disease_reading`,
  `health-records/chronic_disease_intake`, `telehealth-intakes/telehealth_intake`, `field-operations/field_operation_plan`,
  acceptance-task documents, and queued reminders.
* **Old and surplus only.** A row is removed only if it is older than a safety window (default 30 minutes, clamped to 10 to 1440)
  and is not among the newest N of its type (default 10, clamped to 1 to 100). The evidence of the run in flight always survives.
* **Nothing is hard-deleted.** Records and documents are soft-deleted (`deleted_at` set, the same thing the product's archive does,
  and what the cap count already ignores), and queued reminders are cancelled (the product's own cancel). Delivered reminders are
  never rewritten.
* **Bounded.** Each call removes at most 200 rows per type per batch and 5 batches (1000 per type). If the bound is hit the response
  says `complete:false` and the next call continues. Dry-run mode (`"dryRun": true`) changes nothing.
* **Idempotent and count-only.** Running it again removes nothing more. The response and the server log carry counts and the
  parameters used, never ids, contents or account identifiers. A database failure is returned as a fixed sentence with a short code,
  never the raw database error.
* **Fails safe.** A cleanup failure never alters or hides a probe result: the probes still run. It is printed as a
  `::warning title=Acceptance data CLEANUP failed::` annotation, a JSON line `{"acceptanceCleanup":{"ok":false,...}}`, recorded as
  `acceptanceCleanup` in `output/nexus-production-probes.json`, and named in the step's error text if a scenario also fails. It
  fails the step by itself only when `NEXUS_ACCEPTANCE_CLEANUP_REQUIRED=true` is set. `NEXUS_ACCEPTANCE_CLEANUP=off` disables the
  call, and `NEXUS_ACCEPTANCE_CLEANUP_DRY_RUN=true` makes it report without removing.

### Limits

* Rows with no task, or tasks not created by the acceptance route, are not touched. If the acceptance account is at its cap
  because of the account owner's own lists, cleanup cannot help; the new message (`reason=list_cap_reached max=200`) plus the count
  query below will show that, and the answer is a decision for the owner, not the harness.
* Soft-deleted rows stay in the database (versions included). The cleanup frees the cap and the read windows; it does not shrink
  storage. Export files already written to the web server's disk for documents are not deleted.
* The per-turn bookkeeping (tasks, steps, conversations, executions, audit and observability events, workspace-state records) is not
  cleaned. None of it is capped; it is the audit trail.
* A person who is the acceptance account and also sets a request id that looks like `acceptance-<uuid>` on their own requests
  would make those requests' records eligible. That is their own account, and the 30-minute window and retention still apply.
* The cleanup SQL was exercised against fakes in the unit tests and against a real PostgreSQL schema only through the candidate
  job's dry run (reads, plus write statements prepared with no matching rows). The first real removal happens in production.

## Reading the failure reasons

| Message ends with | Meaning | What to do |
|---|---|---|
| `(reason=list_cap_reached max=200)` | The account holds 200 live lists. Nothing was written. | Check the cleanup line above it in the same log. If cleanup ran and succeeded and the cap is still reached, the lists belong to the account owner; see the count query below. |
| `(reason=list_create_incomplete)` | The executor returned something that is not a persisted list. | A real defect in list creation, not the cap. |
| no parenthesis | The verifier gave no reason. | As before this change; look at `adapter.failed` / `verification.failed` observability events for the task. |

Cleanup lines in the `Produce and record exact-release production evidence` step log:

* `{"acceptanceCleanup":{"ok":true,"total":243,"counts":{"lists":243,...},"complete":true,...}}`: it ran. `complete:false` means more
  remains and the next deploy continues.
* `{"acceptanceCleanup":{"ok":false,"status":503,"code":"..."}}` with the `Acceptance data CLEANUP failed` warning: the cleanup
  itself failed. `acceptance_identity_unavailable` means no membership holds `acceptance:identity`; `acceptance_authentication_required`
  or `evidence_sha_mismatch` means the call was rejected before touching data.

## One-time manual unblock (only if needed)

You normally do not need this. The deploy of this change runs its own cleanup before its own `lists` probe, so it clears the
backlog and passes in the same run. Use this only if a different change must pass the production gate **before** this one is
deployed.

This is destructive (it hides lists from the account) and must be reviewed first. Nothing here has been run against production.
Use the Render PostgreSQL console (Render dashboard, the database, "Connect", psql) with a read-write role.

1. Find the acceptance principal and count first. Do not continue unless the numbers match what you expect.

   ```sql
   select tenant_id, user_id, role
   from nexus_organization_memberships
   where state = 'active' and 'acceptance:identity' = any(permissions);

   select count(*) as live_lists,
          count(*) filter (where t.correlation_id ~ '^acceptance-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$') as made_by_acceptance
   from nexus_records r
   left join nexus_tasks t on t.task_id = r.task_id and t.tenant_id = r.tenant_id
   where r.workspace_id = 'lists' and r.record_type = 'checklist' and r.deleted_at is null
     and (r.tenant_id, r.owner_id) in (
       select tenant_id, user_id from nexus_organization_memberships
       where state = 'active' and 'acceptance:identity' = any(permissions));
   ```

   `live_lists` of 200 with a large `made_by_acceptance` confirms the diagnosis. If `made_by_acceptance` is small, the lists are not
   the harness's and this fix will not help.

2. Hide the harness's old lists (keeps the 10 newest and anything from the last 30 minutes). Run inside a transaction and read the
   row count before committing:

   ```sql
   begin;
   update nexus_records r
   set deleted_at = now(), state = 'deleted', updated_at = now()
   where r.workspace_id = 'lists' and r.record_type = 'checklist' and r.deleted_at is null
     and r.created_at < now() - interval '30 minutes'
     and (r.tenant_id, r.owner_id) in (
       select tenant_id, user_id from nexus_organization_memberships
       where state = 'active' and 'acceptance:identity' = any(permissions))
     and r.task_id in (
       select task_id from nexus_tasks
       where correlation_id ~ '^acceptance-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$')
     and r.record_id not in (
       select r2.record_id from nexus_records r2
       where r2.tenant_id = r.tenant_id and r2.owner_id = r.owner_id
         and r2.workspace_id = 'lists' and r2.record_type = 'checklist' and r2.deleted_at is null
       order by r2.created_at desc limit 10);
   -- psql prints "UPDATE <n>". If n matches made_by_acceptance minus about 10, run: commit;  otherwise: rollback;
   ```

3. Re-run the failed deploy step. Rows are only soft-deleted: to undo, set `deleted_at = null, state = 'active'` for the ids you
   captured (add `returning record_id` to the update if you want that list).

Do not hard-delete (`delete from nexus_records`) unless you have separately decided to; `nexus_record_versions` cascades with it.
