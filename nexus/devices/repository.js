"use strict";
const { createId } = require("../contracts/identifiers.js");
const PLATFORMS = Object.freeze(["web", "android", "ios", "windows", "macos", "linux"]);
const LIFECYCLE_STATES = Object.freeze(["foreground", "background", "suspended", "terminated"]);
const PUBLIC_COLUMNS = "device_id,platform,app_version,permission_state,capabilities,lifecycle_state,push_provider,push_state,state,last_seen_at";
class DeviceRepository {
  constructor(db) { if (!db?.query) throw new Error("A database runtime is required."); this.db = db; }
  async register(item) {
    const platform = allowed(item.platform === "pwa" ? "web" : item.platform, PLATFORMS, "platform");
    const capabilities = Array.isArray(item.capabilities) ? item.capabilities : Object.keys(item.capabilities || {}).filter(key => item.capabilities[key] === true);
    if (capabilities.some(value => typeof value !== "string")) throw invalid("Capabilities must be strings.");
    const result = await this.db.query(`insert into nexus_devices
      (device_id,tenant_id,user_id,platform,capabilities,push_endpoint,push_key_ciphertext,app_version,permission_state,lifecycle_state)
      values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) on conflict (device_id) do update set
      capabilities=excluded.capabilities,app_version=excluded.app_version,permission_state=excluded.permission_state,
      lifecycle_state=excluded.lifecycle_state,last_seen_at=now(),updated_at=now(),
      push_endpoint=coalesce(excluded.push_endpoint,nexus_devices.push_endpoint),
      push_key_ciphertext=coalesce(excluded.push_key_ciphertext,nexus_devices.push_key_ciphertext)
      where nexus_devices.tenant_id=excluded.tenant_id and nexus_devices.user_id=excluded.user_id
      and nexus_devices.state='active' returning ${PUBLIC_COLUMNS}`,
      [required(item.deviceId,"deviceId"),required(item.tenantId,"tenantId"),required(item.userId,"userId"),platform,capabilities,
        item.pushEndpoint || null,item.pushKeyCiphertext || null,String(item.appVersion || ""),item.permissions || {},
        allowed(item.lifecycleState || "foreground", LIFECYCLE_STATES, "lifecycle state")]);
    return (result.rows || result)[0] || null;
  }
  async list({ tenantId,userId }) {
    const result = await this.db.query(`select ${PUBLIC_COLUMNS} from nexus_devices where tenant_id=$1 and user_id=$2 order by last_seen_at desc`,[tenantId,userId]);
    return result.rows || result;
  }
  // PUBLIC_COLUMNS deliberately excludes the push endpoint/ciphertext (client-
  // facing list()/register() must stay secret-free) -- this is the one place
  // real push delivery needs to read them.
  async listPushable({ tenantId,userId }) {
    const result = await this.db.query(
      `select device_id,push_provider,push_endpoint,push_key_ciphertext from nexus_devices
       where tenant_id=$1 and user_id=$2 and state='active' and push_state='registered'
       and push_endpoint is not null and push_key_ciphertext is not null`,
      [tenantId,userId]);
    return result.rows || result;
  }
  async registerPush({ tenantId,userId,deviceId,provider,pushKeyCiphertext }) {
    if (!pushKeyCiphertext) throw invalid("Encrypted push registration is required.");
    const result = await this.db.query(`update nexus_devices set push_provider=$4,push_key_ciphertext=$5,push_state='registered',updated_at=now()
      where tenant_id=$1 and user_id=$2 and device_id=$3 and state='active' returning ${PUBLIC_COLUMNS}`,
      [tenantId,userId,deviceId,allowed(provider,["apns","fcm","webpush"],"push provider"),pushKeyCiphertext]);
    return (result.rows || result)[0] || null;
  }
  async lifecycle({ tenantId,userId,deviceId,state,eventId,payload={},occurredAt=new Date() }) {
    const next = allowed(state,LIFECYCLE_STATES,"lifecycle state");
    const timestamp = new Date(occurredAt); if (!Number.isFinite(timestamp.getTime())) throw invalid("Invalid lifecycle timestamp.");
    return this.db.transaction(async trx => {
      const result = await trx.query(`update nexus_devices set lifecycle_state=$4,last_seen_at=now(),updated_at=now()
        where tenant_id=$1 and user_id=$2 and device_id=$3 and state='active' returning ${PUBLIC_COLUMNS}`, [tenantId,userId,deviceId,next]);
      const device = (result.rows || result)[0]; if (!device) return null;
      await trx.query(`insert into nexus_device_events(event_id,tenant_id,user_id,device_id,event_type,payload,occurred_at)
        values ($1,$2,$3,$4,$5,$6,$7) on conflict (device_id,event_id) do nothing`,
        [eventId || createId("event"),tenantId,userId,deviceId,`app.${next}`,payload,timestamp]);
      return device;
    });
  }
  async revoke({ tenantId,userId,deviceId }) {
    const result = await this.db.query("update nexus_devices set state='revoked',push_endpoint=null,push_key_ciphertext=null,push_provider=null,push_state='revoked',updated_at=now() where tenant_id=$1 and user_id=$2 and device_id=$3 returning device_id",[tenantId,userId,deviceId]);
    return Boolean((result.rows || result)[0]);
  }
}
function invalid(message) { return Object.assign(new Error(message), { code:"invalid_input",status:400 }); }
function required(value,name) { const text=String(value || "").trim(); if (!text) throw invalid(`${name} is required.`); return text; }
function allowed(value,values,name) { const text=required(value,name); if (!values.includes(text)) throw invalid(`Invalid ${name}.`); return text; }
module.exports=Object.freeze({ DeviceRepository,PLATFORMS,LIFECYCLE_STATES });
