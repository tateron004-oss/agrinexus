"use strict";
class DeviceRepository{
  constructor(db){if(!db?.query)throw new Error("A database runtime is required.");this.db=db;}
  async register(item){if(!item.deviceId||!item.tenantId||!item.userId||!item.platform)throw new Error("Device, tenant, user, and platform are required.");const r=await this.db.query(`insert into nexus_devices(device_id,tenant_id,user_id,platform,capabilities,push_endpoint,push_key_ciphertext)
    values ($1,$2,$3,$4,$5,$6,$7) on conflict (device_id) do update set capabilities=excluded.capabilities,push_endpoint=excluded.push_endpoint,
    push_key_ciphertext=excluded.push_key_ciphertext,state='active',last_seen_at=now(),updated_at=now() returning *`,[item.deviceId,item.tenantId,item.userId,item.platform,item.capabilities||[],item.pushEndpoint||null,item.pushKeyCiphertext||null]);return (r.rows||r)[0];}
  async revoke({tenantId,userId,deviceId}){const r=await this.db.query("update nexus_devices set state='revoked',push_endpoint=null,push_key_ciphertext=null,updated_at=now() where tenant_id=$1 and user_id=$2 and device_id=$3 returning device_id",[tenantId,userId,deviceId]);return Boolean((r.rows||r)[0]);}
}
module.exports=Object.freeze({DeviceRepository});

