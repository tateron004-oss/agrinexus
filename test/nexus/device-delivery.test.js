"use strict";const assert=require("node:assert/strict");const test=require("node:test");const fs=require("node:fs");const path=require("node:path");const {DeviceRepository}=require("../../nexus/devices/repository.js");const {NotificationRepository}=require("../../nexus/notifications/repository.js");
function db(results=[]){const calls=[];const x={calls,async transaction(work){return work(x);},async query(sql,params){calls.push({sql,params});return results.shift()||{rows:[]};}};return x;}
test("device delivery migration persists native capabilities and reliable notifications",()=>{const sql=fs.readFileSync(path.join(__dirname,"../../foundation/migrations/008_nexus_device_delivery.sql"),"utf8");assert.match(sql,/create table if not exists nexus_devices/);assert.match(sql,/push_key_ciphertext/);assert.match(sql,/nexus_notifications_idempotency_idx/);});
test("the notifications delivery-lease migration adds the recovery column and its supporting index",()=>{const sql=fs.readFileSync(path.join(__dirname,"../../foundation/migrations/022_nexus_notifications_delivery_lease.sql"),"utf8");assert.match(sql,/alter table nexus_notifications add column if not exists lease_expires_at timestamptz/);assert.match(sql,/nexus_notifications_stale_delivering_idx/);});
test("the notifications leased_by migration adds the fencing column",()=>{const sql=fs.readFileSync(path.join(__dirname,"../../foundation/migrations/023_nexus_notifications_leased_by.sql"),"utf8");assert.match(sql,/alter table nexus_notifications add column if not exists leased_by text/);});
test("device registration is tenant-owned and revocation erases delivery secrets",async()=>{const x=db([{rows:[{device_id:"phone"}]}]);const repo=new DeviceRepository(x);await repo.register({deviceId:"phone",tenantId:"t",userId:"u",platform:"android",capabilities:["push","gps"]});await repo.revoke({tenantId:"t",userId:"u",deviceId:"phone"});assert.ok(x.calls.some(call=>/on conflict/.test(call.sql)));assert.ok(x.calls.some(call=>/push_endpoint=null,push_key_ciphertext=null/.test(call.sql)));});
test("notifications are idempotent and claimed with skip-locked delivery",async()=>{const x=db([{rows:[{notification_id:"n"}]},{rows:[]}]);const repo=new NotificationRepository(x);await repo.enqueue({tenantId:"t",userId:"u",channel:"push",content:{title:"Reminder"},idempotencyKey:"task:1"});await repo.claim();assert.match(x.calls[0].sql,/on conflict \(tenant_id,idempotency_key\)/);assert.match(x.calls[1].sql,/for update skip locked/);});

// Found live (delivery-pipeline audit): a worker crash between claim() and
// delivered()/failed() (a window spanning a real push-service network call)
// permanently stranded a notification -- nothing ever re-queried a
// 'delivering' row, unlike job-repository.js's own real lease pattern. This
// drives a faithful in-memory reimplementation of the actual SQL (not just
// a pattern match on the query string) to prove the real recovery behavior.
function fakeNotificationsTable() {
  const rows = [];
  return {
    rows,
    async query(sql, params) {
      if (/^insert into nexus_notifications/.test(sql)) {
        const row = { notification_id: params[0], tenant_id: params[1], user_id: params[2], state: "queued", attempts: 0, scheduled_at: params[7], lease_expires_at: null, leased_by: null };
        rows.push(row);
        return { rows: [row] };
      }
      if (/^update nexus_notifications n set state='delivering'/.test(sql)) {
        const [limit, leaseSeconds, workerId] = params;
        const now = Date.now();
        const claimable = rows.filter(row =>
          (row.state === "queued" && new Date(row.scheduled_at || 0).getTime() <= now) ||
          (row.state === "delivering" && row.lease_expires_at !== null && new Date(row.lease_expires_at).getTime() < now)
        ).slice(0, limit);
        for (const row of claimable) {
          row.state = "delivering";
          row.attempts += 1;
          row.lease_expires_at = new Date(now + leaseSeconds * 1000).toISOString();
          row.leased_by = workerId ?? null;
        }
        return { rows: claimable };
      }
      if (/^update nexus_notifications set state='delivered'/.test(sql)) {
        const [id, workerId] = params;
        const row = rows.find(item => item.notification_id === id && item.state === "delivering" && (item.leased_by ?? null) === (workerId ?? null));
        if (!row) return { rows: [] };
        row.state = "delivered"; row.lease_expires_at = null; row.leased_by = null;
        return { rows: [row] };
      }
      if (/^update nexus_notifications set\s+state=case when attempts>=5/.test(sql)) {
        const [id, error, workerId] = params;
        const row = rows.find(item => item.notification_id === id && item.state === "delivering" && (item.leased_by ?? null) === (workerId ?? null));
        if (!row) return { rows: [] };
        row.state = row.attempts >= 5 ? "failed" : "queued";
        row.last_error = error; row.lease_expires_at = null; row.leased_by = null;
        return { rows: [row] };
      }
      return { rows: [] };
    }
  };
}

test("a stranded 'delivering' notification (worker crashed, lease expired) is reclaimed on the next poll instead of being lost forever", async () => {
  const table = fakeNotificationsTable();
  const repo = new NotificationRepository(table);
  await repo.enqueue({ tenantId: "t", userId: "u", channel: "push", content: { title: "Reminder" }, idempotencyKey: "task:1" });

  // Worker A claims it with the shortest real lease claim() allows (its own
  // Math.max(leaseSeconds,1) floor), then crashes -- never calls
  // delivered()/failed().
  const firstClaim = await repo.claim(25, 1);
  assert.equal(firstClaim.length, 1);
  assert.equal(firstClaim[0].state, "delivering");

  // A second claim() attempted immediately (lease still fresh) must NOT
  // re-claim the same in-flight row -- that would risk a real duplicate
  // push send while worker A might still be mid-flight.
  const immediateReclaim = await repo.claim();
  assert.equal(immediateReclaim.length, 0, "a fresh lease must not be reclaimed by another worker");

  // Once the short lease actually expires, the stranded row must become
  // claimable again -- this is the real fix: previously nothing ever
  // reclaimed a 'delivering' row at all, so it would stay lost forever.
  await new Promise(resolve => setTimeout(resolve, 1100));
  const recoveredClaim = await repo.claim();
  assert.equal(recoveredClaim.length, 1, "the stranded notification must be reclaimed once its lease has expired");
  assert.equal(recoveredClaim[0].attempts, 2, "a real retry attempt, not a silent loss");

  const delivered = await repo.delivered(recoveredClaim[0].notification_id);
  assert.equal(delivered.state, "delivered");
});

// Found live (delivery-pipeline audit, follow-up to the lease-recovery fix
// above): claim() had no ownership/fencing token at all (unlike
// job-repository.js's leased_by), so once a stranded row was reclaimed by a
// SECOND worker, the FIRST worker's eventual delivered()/failed() call (its
// slow send finally resolving after its lease had already expired) could
// still land -- silently overwriting whatever the second worker was doing,
// with no ownership check. notifications.deliver runs off every worker
// instance's own local poll loop (not the durable per-tenant job queue), so
// this is reachable in any multi-instance deployment.
test("a worker whose lease already expired and was reclaimed by another worker can never close out that other worker's delivery", async () => {
  const table = fakeNotificationsTable();
  const repo = new NotificationRepository(table);
  await repo.enqueue({ tenantId: "t", userId: "u", channel: "push", content: { title: "Reminder" }, idempotencyKey: "task:1" });

  // Worker A claims with a 1s lease and starts a slow send that will not
  // resolve until long after the lease has expired.
  const claimedByA = await repo.claim(25, 1, "worker-A");
  assert.equal(claimedByA[0].leased_by, "worker-A");

  // The lease expires and worker B reclaims the same row before A's slow
  // send finishes.
  await new Promise(resolve => setTimeout(resolve, 1100));
  const claimedByB = await repo.claim(25, 60, "worker-B");
  assert.equal(claimedByB.length, 1);
  assert.equal(claimedByB[0].leased_by, "worker-B");

  // A's slow send now finally fails. Its failed() call must be refused --
  // the row is no longer A's to close out -- and must NOT flip the row out
  // from under B's still-in-flight delivery.
  const staleFailure = await repo.failed(claimedByA[0].notification_id, { code: "timeout" }, "worker-A");
  assert.equal(staleFailure, null, "a worker that lost its lease must not be able to mark the row failed");
  assert.equal(table.rows[0].state, "delivering", "the row must still belong to worker B, unaffected by A's stale call");
  assert.equal(table.rows[0].leased_by, "worker-B");

  // B's send genuinely succeeds and must be able to close the row out.
  const delivered = await repo.delivered(claimedByB[0].notification_id, "worker-B");
  assert.ok(delivered, "the worker that actually holds the lease must still be able to mark it delivered");
  assert.equal(delivered.state, "delivered");
});

// Found live (delivery-reliability follow-up audit): failed() requeued a
// notification with scheduled_at untouched, so retries were only ever
// paced by the worker's fixed poll interval, not real backoff -- a
// transient outage burned through all 5 attempts in about two and a half
// minutes, then permanently and silently dropped the notification with no
// further retry. This asserts on the real SQL text failed() sends (the
// same convention this file already uses for claim()'s "for update skip
// locked" clause just above) rather than a fake that could compute its own
// answer regardless of what the real query actually says -- a fake keyed
// only on the query's shared "state=case when attempts>=5" prefix can't
// tell the pre-fix and post-fix SQL apart, since the new clause is
// additional text, not a change to that shared prefix.
test("a failed delivery is scheduled with real exponential backoff (30s, 60s, 120s, 240s), capped at 5 minutes, and the cap/terminal-failure behavior is unchanged", async () => {
  const x = db([{ rows: [{ notification_id: "n", state: "queued", attempts: 1 }] }]);
  const repo = new NotificationRepository(x);
  await repo.failed("n", { code: "delivery_failed", message: "simulated transient outage" });
  const sql = x.calls[0].sql.replace(/\s+/g, " ");
  assert.match(sql, /state=case when attempts>=5 then 'failed' else 'queued' end/, "the attempt cap and terminal state must be unchanged from before this fix");
  assert.match(sql, /scheduled_at=case when attempts>=5 then scheduled_at else now\(\)\+make_interval\(secs=>least\(30\*power\(2,greatest\(attempts-1,0\)\),300\)\) end/,
    "must add real exponential backoff (30 * 2^(attempts-1) seconds, capped at 300s) rather than leaving scheduled_at untouched");
});
test("listPushable reads real push secrets that list()/PUBLIC_COLUMNS deliberately withholds from client-facing calls",async()=>{const x=db([{rows:[{device_id:"phone",push_provider:"webpush",push_endpoint:"https://push.example/ep",push_key_ciphertext:"v1.iv.tag.data"}]}]);const repo=new DeviceRepository(x);const rows=await repo.listPushable({tenantId:"t",userId:"u"});assert.equal(rows[0].push_endpoint,"https://push.example/ep");assert.equal(rows[0].push_key_ciphertext,"v1.iv.tag.data");assert.match(x.calls[0].sql,/push_key_ciphertext/);assert.match(x.calls[0].sql,/state='active'/);assert.match(x.calls[0].sql,/push_state='registered'/);});
