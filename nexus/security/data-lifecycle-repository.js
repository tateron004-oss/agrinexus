"use strict";
const { createId } = require("../contracts/identifiers.js");

class DataLifecycleRepository {
  // objectStorage is optional (undefined in any environment without real S3 configured, matching
  // createObjectStore()'s own null-when-unconfigured contract) -- when present, it lets executeDeletion/
  // purgeExpired actually delete the real object bytes an artifact's object_key points to, not just null
  // the DB pointer. See the "Found live" comment on the artifacts erasure below for why that mattered.
  constructor(db, { objectStorage } = {}) { if (!db?.query || !db?.transaction) throw new Error("A transactional database runtime is required."); this.db=db; this.objectStorage=objectStorage||null; }
  async requestDeletion({tenantId,subjectId,requestedBy}) {
    if(!tenantId||!subjectId||!requestedBy) throw new Error("Deletion tenant, subject, and requester are required.");
    const result=await this.db.query(`insert into nexus_deletion_requests(request_id,tenant_id,subject_id,requested_by)
      values ($1,$2,$3,$4) returning *`,[createId("deletionRequest"),tenantId,subjectId,requestedBy]);
    return (result.rows||result)[0];
  }
  async executeDeletion({tenantId,requestId}) {
    let artifactObjectKeys=[];
    const outcome = await this.db.transaction(async trx=>{
      const locked=await trx.query(`select * from nexus_deletion_requests where tenant_id=$1 and request_id=$2 for update`,[tenantId,requestId]);
      const request=(locked.rows||locked)[0]; if(!request) throw new Error("Deletion request not found.");
      const holds=await trx.query(`select hold_id from nexus_legal_holds where tenant_id=$1 and state='active' and (subject_id is null or subject_id=$2) limit 1`,[tenantId,request.subject_id]);
      if((holds.rows||holds)[0]) { await trx.query(`update nexus_deletion_requests set state='blocked',verification=$3 where tenant_id=$1 and request_id=$2`,[tenantId,requestId,{reason:"legal_hold"}]); return {state:"blocked",reason:"legal_hold"}; }
      // Found live: some record writers (e.g. WorkspaceStateRepository.stage(),
      // now fixed) left subject_id NULL for a "standard"-classification record
      // instead of defaulting it to the owner -- and NULL never equals a real
      // subject_id in SQL, so those rows silently survived a subject-scoped
      // erasure. Also catching (subject_id is null and owner_id=$2) here is
      // defense-in-depth against any future writer that makes the same
      // mistake, on top of fixing it at the source.
      await trx.query(`update nexus_records set state='deleted',data='{}'::jsonb,provenance='{}'::jsonb,deleted_at=now(),updated_at=now() where tenant_id=$1 and (subject_id=$2 or (subject_id is null and owner_id=$2)) and deleted_at is null`,[tenantId,request.subject_id]);
      // title/metadata wiped too, not just the object pointer -- a title like "Mum's biopsy results.pdf" is
      // itself personal data, and leaving it behind after "deletion" while only nulling object_key was a gap.
      // Found live (restriction-bypass follow-up audit): nulling object_key here (and in purgeExpired below)
      // was the ONLY thing that ever happened to a real artifact's bytes -- nothing ever told the actual S3
      // object to delete itself, so an uploaded document/photo survived "erasure" forever in the bucket,
      // orphaned but fully intact. Captured via a CTE (one query, not an extra positional call) so the real
      // key can be purged from object storage after this transaction commits -- see below.
      const artifactRows=await trx.query(`with target as (select artifact_id,object_key from nexus_artifacts where tenant_id=$1 and owner_id=$2 and deleted_at is null)
        update nexus_artifacts a set state='deleted',title='',metadata='{}'::jsonb,object_key=null,deleted_at=now(),updated_at=now()
        from target where a.artifact_id=target.artifact_id returning target.object_key`,[tenantId,request.subject_id]);
      artifactObjectKeys=(artifactRows.rows||artifactRows).map(row=>row.object_key).filter(Boolean);
      await trx.query(`update nexus_record_versions v set data='{}'::jsonb,provenance='{}'::jsonb
        from nexus_records r where v.record_id=r.record_id and r.tenant_id=$1 and (r.subject_id=$2 or (r.subject_id is null and r.owner_id=$2))`,[tenantId,request.subject_id]);
      // Found live: nexus_tasks/nexus_task_steps/nexus_tool_executions were entirely absent from this sweep --
      // every task a person ever asked Kyro to do (task_document holds the original goal text and outcome;
      // step input/output and the raw tool-execution request/response carry the real PII passed to and from
      // every executor: message content, phone numbers dialed, addresses, health data) survived a "verified"
      // erasure in full. Tasks have no 'deleted' state in their FSM (see tasks/state-machine.js), so the
      // content columns are wiped in place instead, the same treatment nexus_record_versions gets above.
      const tasks=await trx.query(`update nexus_tasks set goal='[erased]',task_document='{}'::jsonb,outcome=null,updated_at=now() where tenant_id=$1 and owner_id=$2 returning task_id`,[tenantId,request.subject_id]);
      await trx.query(`update nexus_task_steps s set title='[erased]',input='{}'::jsonb,output=null,error=null
        from nexus_tasks t where s.task_id=t.task_id and t.tenant_id=$1 and t.owner_id=$2`,[tenantId,request.subject_id]);
      // Found live (data-lifecycle full-file audit): this only ever matched the task's OWNER, not the row's own
      // actor_id -- unlike nexus_messages just below, which already handles exactly this scenario ("a person's
      // own words in someone else's shared conversation are erased too"). A delegate (nexus_delegations) acting
      // on another person's task leaves their own submitted request/response content -- message text, phone
      // numbers dialed, addresses, health data, per this function's own comment above -- on that OTHER person's
      // task, surviving the delegate's own account erasure. e.tenant_id is this table's own real column (not
      // just via the join), used as the tenant guard so the actor_id branch can never reach across tenants.
      await trx.query(`update nexus_tool_executions e set request='{}'::jsonb,response=null,error=null,receipt=null,provider_request_id=null
        from nexus_tasks t where e.task_id=t.task_id and e.tenant_id=$1 and (t.owner_id=$2 or e.actor_id=$2)`,[tenantId,request.subject_id]);
      // Found live (data-lifecycle full-file audit): nexus_outcome_evidence/nexus_outcome_verifications
      // (verification/outcome-repository.js's verify()) were entirely absent from this sweep -- the same class
      // of per-task evidence nexus_task_steps/nexus_tool_executions just above already get wiped for, joined
      // the identical way, just never added when those two were. observed/details jsonb carry the real evidence
      // a tool's outcome was actually verified against (e.g. what was actually confirmed/sent); locator/checksum
      // can reference a real asset. Neither table has its own subject/owner column, so both are reached the same
      // way task_steps/tool_executions are: joined to the owning task.
      await trx.query(`update nexus_outcome_evidence x set observed='{}'::jsonb,locator=null,checksum=null
        from nexus_tasks t where x.task_id=t.task_id and t.tenant_id=$1 and t.owner_id=$2`,[tenantId,request.subject_id]);
      await trx.query(`update nexus_outcome_verifications x set details='{}'::jsonb
        from nexus_tasks t where x.task_id=t.task_id and t.tenant_id=$1 and t.owner_id=$2`,[tenantId,request.subject_id]);
      // Found live (data-lifecycle full-file audit): nexus_predictions (real per-person ML prediction data,
      // including the explicit "health"/"clinical" domain path -- models/repository.js's own highRisk check)
      // was never referenced anywhere in this file. It carries a direct subject_id column, so no join is needed.
      const predictions=await trx.query(`update nexus_predictions set input_provenance='{}'::jsonb,output='{}'::jsonb
        where tenant_id=$1 and subject_id=$2 returning prediction_id`,[tenantId,request.subject_id]);
      // Found live: a recurring schedule (weather/daily-brief/weekly-brief/check-in, or a person's own reminder)
      // kept dispatching -- ScheduleRepository.dispatchDue only ever looks at state='active' -- regardless of an
      // erasure, since nothing here ever touched nexus_schedules. Cancelling stops all future dispatch and wipes
      // the payload, which can carry arbitrary user-supplied reminder text.
      const schedules=await trx.query(`update nexus_schedules set state='cancelled',payload='{}'::jsonb,updated_at=now() where tenant_id=$1 and owner_id=$2 and state<>'cancelled' returning schedule_id`,[tenantId,request.subject_id]);
      // The newer nexus/ runtime (companion, farm and health toolkits, navigation, reminders) keeps its data here, not in nexus_records, so an
      // erasure that skipped this table would leave most of what a person actually built with Kyro behind. No legal-hold carve-out here (unlike
      // the health toolkit's own "erase my records" self-service, which keeps a small name-free log): an account-level erasure is total.
      const memoryItems=await trx.query(`delete from nexus_memory_items where tenant_id=$1 and principal_id=$2 returning memory_id`,[tenantId,request.subject_id]);
      // Conversations/messages, documents, and notifications were the last subject-linked tables the general
      // AI-agent layer (not the companion/farm/health toolkits above) writes to that "account deletion" still left
      // untouched -- found auditing Kyro's full capability set. Conversations use the same soft-delete state their
      // own check constraint already defines; messages and document versions have no such lifecycle column, so
      // their content is wiped in place, matching how nexus_record_versions is handled above. Notifications are
      // hard-deleted -- pure delivery-attempt history with no versioning/audit need, same treatment as memory items.
      const conversations=await trx.query(`update nexus_conversations set state='deleted',title=null,summary=null,updated_at=now() where tenant_id=$1 and owner_id=$2 and state<>'deleted' returning conversation_id`,[tenantId,request.subject_id]);
      // Scoped by conversation ownership OR direct authorship, so a person's own words in someone else's shared
      // conversation are erased too, without touching that conversation's other participants' messages.
      const messages=await trx.query(`update nexus_messages set content='{}'::jsonb,provenance='{}'::jsonb where tenant_id=$1 and (actor_id=$2 or conversation_id in (select conversation_id from nexus_conversations where tenant_id=$1 and owner_id=$2))`,[tenantId,request.subject_id]);
      const documents=await trx.query(`update nexus_documents set state='deleted',title='',metadata='{}'::jsonb,deleted_at=now(),updated_at=now() where tenant_id=$1 and owner_id=$2 and deleted_at is null returning document_id`,[tenantId,request.subject_id]);
      const documentVersions=await trx.query(`update nexus_document_versions v set content='{}'::jsonb,object_key=null
        from nexus_documents d where v.document_id=d.document_id and d.tenant_id=$1 and d.owner_id=$2`,[tenantId,request.subject_id]);
      const notifications=await trx.query(`delete from nexus_notifications where tenant_id=$1 and user_id=$2 returning notification_id`,[tenantId,request.subject_id]);
      // Found live: nexus_devices (a real webpush/FCM/APNs endpoint URL and
      // an encrypted push auth secret, per registered device) and
      // nexus_device_events were entirely absent from this erasure sweep --
      // the only path that ever cleared them was revoke(), one device at a
      // time, by the person's own explicit choice. An account erasure left
      // every device a person never manually revoked fully wired to receive
      // push forever. Revoked (not hard-deleted) the same way explicit
      // single-device revoke() already does, so the row's own history stays
      // consistent; the secret-bearing columns are nulled either way.
      const devices=await trx.query(`update nexus_devices set state='revoked',push_endpoint=null,push_key_ciphertext=null,push_provider=null,push_state='revoked',updated_at=now() where tenant_id=$1 and user_id=$2 and state<>'revoked' returning device_id`,[tenantId,request.subject_id]);
      const deviceEvents=await trx.query(`delete from nexus_device_events where tenant_id=$1 and user_id=$2 returning event_id`,[tenantId,request.subject_id]);
      // Found live (export/compliance follow-up audit): nexus_consents was entirely absent from this sweep --
      // recordConfirmedConsent() (behavior-spine.js) stores the real recipient address (phone/email the person
      // actually sent a message or placed a call to) and up to 200 characters of the person's own literal
      // confirmation text (which, per the confirmation prompt's own design, routinely echoes the outbound
      // message content itself) in `recipient`/`receipt`. Revoked the same way nexus_devices is above, and the
      // PII-bearing columns are nulled either way so the row's own audit history stays consistent.
      const consents=await trx.query(`update nexus_consents set state='revoked',revoked_at=now(),recipient=null,receipt='{}'::jsonb where tenant_id=$1 and subject_id=$2 and state<>'revoked' returning consent_id`,[tenantId,request.subject_id]);
      // Found live (fresh-module audit): nexus_sync_operations (nexus/sync/repository.js) was entirely
      // absent from this sweep -- it stores a real per-device offline-sync history (whatever entity a
      // person's device queued while offline: a health reading, a business record, a farm log entry) keyed
      // directly by tenant_id/user_id. It carries no versioning/audit requirement of its own (it's
      // delivery-attempt/conflict history, not a record of truth -- the same character as notifications and
      // device events above), so it's hard-deleted the same way those are, rather than soft-deleted like
      // nexus_records/nexus_artifacts.
      const syncOperations=await trx.query(`delete from nexus_sync_operations where tenant_id=$1 and user_id=$2 returning sync_id`,[tenantId,request.subject_id]);
      // Found live (fresh-module audit): nexus_audit_events (AuditRepository.record(), written on every
      // engine.execute()/transition()/create() call) was entirely absent from this sweep -- actor_id is a
      // direct identifier of the erasing person, and the event stream itself (what tools they invoked, when,
      // and the outcome) is their own activity history. After a "verified" erasure, any tenant member with
      // observability:read/admin could still query the audit-review surface for that now-supposedly-erased
      // actor_id and see their full trail. Unlike notifications/device-events (pure delivery-attempt history,
      // hard-deleted), the audit trail's own structural shape (event_type/outcome/timing/task linkage) is a
      // genuine compliance record this codebase deliberately keeps elsewhere (see knownUnownedProfileGaps'
      // own note on audit logs being "retained as an audit/compliance trail") -- so only the direct identifier
      // is nulled here, the same treatment nexus_consents gets just above, not a hard delete.
      const auditEvents=await trx.query(`update nexus_audit_events set actor_id=null where tenant_id=$1 and actor_id=$2 returning event_id`,[tenantId,request.subject_id]);
      const verification={recordVersionsErased:true,recordsErased:true,artifactPointersErased:true,memoryItemsErased:true,memoryItemsCount:(memoryItems.rows||memoryItems).length,
        syncOperationsErased:true,syncOperationsCount:(syncOperations.rows||syncOperations).length,
        conversationsErased:true,conversationsCount:(conversations.rows||conversations).length,
        messagesErased:true,
        documentsErased:true,documentsCount:(documents.rows||documents).length,
        documentVersionsErased:true,
        notificationsErased:true,notificationsCount:(notifications.rows||notifications).length,
        devicesErased:true,devicesCount:(devices.rows||devices).length,
        deviceEventsErased:true,deviceEventsCount:(deviceEvents.rows||deviceEvents).length,
        tasksErased:true,tasksCount:(tasks.rows||tasks).length,
        taskStepsErased:true,toolExecutionsErased:true,
        outcomeEvidenceErased:true,outcomeVerificationsErased:true,
        predictionsErased:true,predictionsCount:(predictions.rows||predictions).length,
        schedulesCancelled:true,schedulesCount:(schedules.rows||schedules).length,
        consentsErased:true,consentsCount:(consents.rows||consents).length,
        auditActorIdentifiersErased:true,auditEventsCount:(auditEvents.rows||auditEvents).length,
        verifiedAt:new Date().toISOString()};
      await trx.query(`update nexus_deletion_requests set state='verified',verification=$3,completed_at=now() where tenant_id=$1 and request_id=$2`,[tenantId,requestId,verification]);
      return {state:"verified",verification};
    });
    // Real object bytes are purged after the transaction commits, never inside it -- a slow or failing S3
    // call must never hold the erasure transaction's locks open. A purge failure does not undo the
    // already-committed DB erasure (the pointer is gone either way, so there's nothing left for a retry of
    // executeDeletion itself to find); it's recorded on the request's own verification record instead of
    // being silently swallowed, matching this codebase's standing rule that a verification claim must be
    // honest about what actually happened.
    if (this.objectStorage && artifactObjectKeys.length) {
      const settled = await Promise.allSettled(artifactObjectKeys.map(key => this.objectStorage.remove(key)));
      const purged = settled.filter(item => item.status === "fulfilled").length;
      const failed = settled.length - purged;
      outcome.verification.artifactObjectsPurged = purged;
      if (failed) outcome.verification.artifactObjectPurgeFailures = failed;
      await this.db.query(`update nexus_deletion_requests set verification=$3 where tenant_id=$1 and request_id=$2`,[tenantId,requestId,outcome.verification]);
    }
    return outcome;
  }
  // Found live (job-queue/schedule-dispatch follow-up audit): a request
  // whose executeDeletion() deterministically fails (a real, reproducible
  // bug, a malformed legacy row, a constraint violation) never left
  // state='queued' -- the whole erasure transaction rolls back on any
  // throw. deletion.sweep's own listStaleQueued only checks state='queued',
  // with no awareness of whether a job for this request already ran and
  // exhausted its retries, so the same permanently-failing request got
  // re-enqueued as a brand-new job forever, with unbounded nexus_worker_jobs
  // row growth and no way for anyone to ever see "this failed" -- despite
  // the schema's own check constraint already reserving a 'failed' state
  // for exactly this. Called by the deletion.execute job handler only once
  // the underlying job has exhausted its own retry budget, so a single
  // transient failure still gets its normal retries first.
  async markFailed({tenantId,requestId,error}) {
    if(!tenantId||!requestId) throw new Error("Deletion tenant and request are required.");
    const result=await this.db.query(`update nexus_deletion_requests set state='failed',verification=$3
      where tenant_id=$1 and request_id=$2 and state='queued' returning *`,[tenantId,requestId,{reason:"execution_failed",error:String(error||"").slice(0,500)}]);
    return (result.rows||result)[0]||null;
  }
  // Deletion requests that are still 'queued' well after they should have been picked up: the immediate enqueue at request time (see
  // control-api.js's requestDeletion) either never happened or its job was lost. Mirrors AuthoritativeTaskEngine's stale-task sweep for the
  // same reason -- a crashed or missed job must never strand an erasure request forever.
  async listStaleQueued({staleBefore,limit=50}) {
    const result=await this.db.query(`select tenant_id,request_id from nexus_deletion_requests where state='queued' and requested_at<=$1
      order by requested_at limit $2`,[staleBefore,Math.min(Math.max(limit,1),500)]);
    return result.rows||result;
  }
  // Found live: the legal-hold check here only matched tenant_id, unlike
  // executeDeletion()'s own hold check a few lines above, which correctly
  // scopes to "(subject_id is null or subject_id=<the specific person>)".
  // A hold placed on ONE specific subject (subject_id set, not tenant-wide)
  // silently blocked retention purging of every OTHER subject's artifacts
  // in the same tenant, not just the held subject's -- as soon as any
  // artifact anywhere in the tenant had a past retention_until, the
  // correlated "not exists" subquery found the (irrelevant) hold and
  // skipped purging tenant-wide. Fixed to match owner_id (nexus_artifacts'
  // own ownership column) against the hold's subject_id, the same
  // null-means-tenant-wide semantics executeDeletion() already uses.
  async purgeExpired({limit=100}) {
    const result=await this.db.query(`with expired as (select artifact_id,object_key from nexus_artifacts where retention_until<now() and deleted_at is null
      and not exists (select 1 from nexus_legal_holds h where h.tenant_id=nexus_artifacts.tenant_id and h.state='active' and (h.subject_id is null or h.subject_id=nexus_artifacts.owner_id))
      order by retention_until for update skip locked limit $1) update nexus_artifacts a set state='deleted',object_key=null,deleted_at=now(),updated_at=now()
      from expired where a.artifact_id=expired.artifact_id returning a.artifact_id,expired.object_key`,[Math.min(Math.max(limit,1),500)]);
    const rows=result.rows||result;
    // Same real-object-deletion gap as executeDeletion above, for the separate retention-expiry sweep path --
    // best-effort here (no per-row verification record to patch on failure; the next sweep simply won't see
    // these rows again since they're already marked deleted, same as any other best-effort background job in
    // this codebase).
    if (this.objectStorage) {
      const keys=rows.map(row=>row.object_key).filter(Boolean);
      if (keys.length) await Promise.allSettled(keys.map(key=>this.objectStorage.remove(key)));
    }
    return rows;
  }
  async recordBackupEvidence({releaseSha,backupId,state,checksum,metadata={}}) {
    if(!releaseSha||!backupId||!checksum||!["created","restore_verified","failed"].includes(state)) throw new Error("Valid backup evidence is required.");
    const result=await this.db.query(`insert into nexus_backup_evidence(evidence_id,release_sha,backup_id,state,checksum,metadata,verified_at)
      values ($1,$2,$3,$4,$5,$6,case when $4='restore_verified' then now() else null end) returning *`,[createId("backupEvidence"),releaseSha,backupId,state,checksum,metadata]);
    return (result.rows||result)[0];
  }
}
module.exports=Object.freeze({DataLifecycleRepository});

