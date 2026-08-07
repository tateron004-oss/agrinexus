"use strict";
const {createId}=require("../contracts/identifiers.js");
class NotificationRepository{
  constructor(db){if(!db?.query)throw new Error("A database runtime is required.");this.db=db;}
  async enqueue(item){if(!item.tenantId||!item.userId||!item.channel||!item.idempotencyKey)throw new Error("Notification tenant, user, channel, and idempotency key are required.");const r=await this.db.query(`insert into nexus_notifications(notification_id,tenant_id,user_id,task_id,device_id,channel,content,scheduled_at,idempotency_key)
    values ($1,$2,$3,$4,$5,$6,$7,$8,$9) on conflict (tenant_id,idempotency_key) where idempotency_key is not null do update set idempotency_key=excluded.idempotency_key returning *`,[item.notificationId||createId("notification"),item.tenantId,item.userId,item.taskId||null,item.deviceId||null,item.channel,item.content||{},item.scheduledAt||new Date(),item.idempotencyKey]);return (r.rows||r)[0];}
  async claim(limit=25){const r=await this.db.query(`update nexus_notifications n set state='delivering',attempts=attempts+1 from
    (select notification_id from nexus_notifications where state='queued' and coalesce(scheduled_at,now())<=now() order by scheduled_at,created_at for update skip locked limit $1) q
    where n.notification_id=q.notification_id returning n.*`,[Math.min(Math.max(limit,1),100)]);return r.rows||r;}
  async delivered(notificationId){const r=await this.db.query("update nexus_notifications set state='delivered',delivered_at=now(),last_error=null where notification_id=$1 and state='delivering' returning *",[notificationId]);return (r.rows||r)[0]||null;}
  async failed(notificationId,error){const r=await this.db.query("update nexus_notifications set state=case when attempts>=5 then 'failed' else 'queued' end,last_error=$2 where notification_id=$1 and state='delivering' returning *",[notificationId,error]);return (r.rows||r)[0]||null;}
}
module.exports=Object.freeze({NotificationRepository});

