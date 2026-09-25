"use strict";
const {createId}=require("../contracts/identifiers.js");
class NotificationRepository{
  constructor(db){if(!db?.query)throw new Error("A database runtime is required.");this.db=db;}
  async enqueue(item){if(!item.tenantId||!item.userId||!item.channel||!item.idempotencyKey)throw new Error("Notification tenant, user, channel, and idempotency key are required.");const r=await this.db.query(`insert into nexus_notifications(notification_id,tenant_id,user_id,task_id,device_id,channel,content,scheduled_at,idempotency_key)
    values ($1,$2,$3,$4,$5,$6,$7,$8,$9) on conflict (tenant_id,idempotency_key) where idempotency_key is not null do update set idempotency_key=excluded.idempotency_key returning *`,[item.notificationId||createId("notification"),item.tenantId,item.userId,item.taskId||null,item.deviceId||null,item.channel,item.content||{},item.scheduledAt||new Date(),item.idempotencyKey]);return (r.rows||r)[0];}
  // Found live (delivery-pipeline audit): a worker crash between this
  // claim() and the matching delivered()/failed() call (a window that
  // spans a real network call to the push service) permanently stranded
  // the notification -- nothing ever re-queried a 'delivering' row, so it
  // was silently lost forever with no retry and no trace. Mirrors
  // job-repository.js's own real lease pattern: a 'delivering' row whose
  // lease has expired is treated as claimable again, the same as a fresh
  // 'queued' one, so a crashed worker's in-flight notifications recover on
  // the next poll cycle instead of vanishing.
  async claim(limit=25,leaseSeconds=120){const r=await this.db.query(`update nexus_notifications n set state='delivering',attempts=attempts+1,lease_expires_at=now()+make_interval(secs=>$2) from
    (select notification_id from nexus_notifications where (state='queued' and coalesce(scheduled_at,now())<=now()) or (state='delivering' and lease_expires_at<now()) order by scheduled_at,created_at for update skip locked limit $1) q
    where n.notification_id=q.notification_id returning n.*`,[Math.min(Math.max(limit,1),100),Math.max(leaseSeconds,1)]);return r.rows||r;}
  // Upcoming reminders only: still queued, and specifically reminders (other
  // notification kinds share this table but carry no content.reminderText).
  // Scoped to the owner -- a user can never list or cancel another user's.
  async listReminders({tenantId,userId,limit=50}){if(!tenantId||!userId)throw new Error("Tenant and user are required.");const r=await this.db.query(`select notification_id,task_id,content,scheduled_at,created_at from nexus_notifications
    where tenant_id=$1 and user_id=$2 and state='queued' and (content->>'reminderText') is not null
    order by scheduled_at nulls last,created_at limit $3`,[tenantId,userId,Math.min(Math.max(limit,1),200)]);return r.rows||r;}
  // Only a still-queued reminder can be cancelled; one already delivering or
  // delivered is history, not something to rewrite. Returns null in that case.
  async cancelReminder({tenantId,userId,notificationId}){if(!tenantId||!userId||!notificationId)throw new Error("Tenant, user, and reminder are required.");const r=await this.db.query(`update nexus_notifications set state='cancelled'
    where notification_id=$1 and tenant_id=$2 and user_id=$3 and state='queued' and (content->>'reminderText') is not null returning notification_id,content,scheduled_at`,[notificationId,tenantId,userId]);return (r.rows||r)[0]||null;}
  // Whether a notification with this idempotency key already exists for the tenant (used so a daily brief is queued at most once per local day).
  async existsByKey({tenantId,idempotencyKey}){if(!tenantId||!idempotencyKey)return false;const r=await this.db.query("select 1 from nexus_notifications where tenant_id=$1 and idempotency_key=$2 limit 1",[tenantId,idempotencyKey]);return (r.rows||r).length>0;}
  async delivered(notificationId){const r=await this.db.query("update nexus_notifications set state='delivered',delivered_at=now(),last_error=null,lease_expires_at=null where notification_id=$1 and state='delivering' returning *",[notificationId]);return (r.rows||r)[0]||null;}
  async failed(notificationId,error){const r=await this.db.query("update nexus_notifications set state=case when attempts>=5 then 'failed' else 'queued' end,last_error=$2,lease_expires_at=null where notification_id=$1 and state='delivering' returning *",[notificationId,error]);return (r.rows||r)[0]||null;}
}
module.exports=Object.freeze({NotificationRepository});

