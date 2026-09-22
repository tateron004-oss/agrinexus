"use strict";
const { NexusRuntimeError } = require("../runtime/authoritative-task-engine.js");
const USER_SCHEDULABLE_JOB_TYPES = Object.freeze(["notifications.deliver"]);
function createControlApi(runtime) {
  return Object.freeze({
    async registerDevice(r) { permit(r.context,"devices:write"); const deviceId=req(r.body.deviceId,"Device ID"); let pushKeyCiphertext=null; if(r.body.pushSubscription){if(!runtime.deviceTokens)throw new NexusRuntimeError("device_token_key_missing","Push registration is unavailable because encrypted token storage is not configured.",503);pushKeyCiphertext=runtime.deviceTokens.encrypt(r.body.pushSubscription,`${r.context.tenantId}:${r.context.userId}:${deviceId}`);} return respond(async()=>deviceResult(await runtime.devices.register({deviceId,tenantId:r.context.tenantId,userId:r.context.userId,appVersion:r.body.appVersion,permissions:r.body.permissions,lifecycleState:r.body.lifecycleState,platform:req(r.body.platform,"Platform"),capabilities:r.body.capabilities||[],pushEndpoint:r.body.pushEndpoint,pushKeyCiphertext})),201); },
    async listDevices(r) { permit(r.context,"devices:write"); return respond(async()=>({ authoritative:true,devices:await runtime.devices.list({tenantId:r.context.tenantId,userId:r.context.userId}) })); },
    async deviceLifecycle(r) { permit(r.context,"devices:write"); return respond(async()=>deviceResult(await runtime.devices.lifecycle({tenantId:r.context.tenantId,userId:r.context.userId,deviceId:r.params.deviceId,state:r.body.state,eventId:r.body.eventId,payload:r.body.payload,occurredAt:r.body.occurredAt}))); },
    // Accepts either a real W3C PushSubscription's keys (webpush: {p256dh,
    // auth}) or the legacy opaque-token shape (apns/fcm) -- widened so a real
    // webpush subscription isn't forced through a {token} shape that would
    // silently clobber what registerDevice already stored.
    async registerPush(r) { permit(r.context,"devices:write"); if(!runtime.deviceTokens)throw new NexusRuntimeError("device_token_key_missing","Encrypted push storage is unavailable.",503); const secretPayload=r.body.pushSubscription&&typeof r.body.pushSubscription==="object"?r.body.pushSubscription:{token:req(r.body.token,"Push token")}; const pushKeyCiphertext=runtime.deviceTokens.encrypt(secretPayload,`${r.context.tenantId}:${r.context.userId}:${r.params.deviceId}`); return respond(async()=>deviceResult(await runtime.devices.registerPush({tenantId:r.context.tenantId,userId:r.context.userId,deviceId:r.params.deviceId,provider:r.body.provider,pushKeyCiphertext}))); },
    async revokeDevice(r) { permit(r.context,"devices:write"); return respond(async()=>({revoked:await runtime.devices.revoke({tenantId:r.context.tenantId,userId:r.context.userId,deviceId:r.params.deviceId})})); },
    // jobType is restricted to the one type a "reminders:write"-only caller
    // may legitimately schedule. The worker (nexus/workers/worker.js)
    // dispatches purely by this string with no re-check of who created the
    // schedule, so accepting an arbitrary caller-supplied jobType here would
    // let an ordinary user trigger privileged system jobs -- e.g.
    // "deletion.execute" or "retention.sweep", both meant only for internal/
    // cron triggering -- by scheduling one for themselves.
    async createSchedule(r) { permit(r.context,"reminders:write"); const jobType=r.body.jobType||"notifications.deliver"; if(!USER_SCHEDULABLE_JOB_TYPES.includes(jobType))throw new NexusRuntimeError("invalid_input",`jobType must be one of: ${USER_SCHEDULABLE_JOB_TYPES.join(", ")}.`); return respond(()=>runtime.schedules.create({tenantId:r.context.tenantId,ownerId:r.context.userId,taskId:r.body.taskId,jobType,payload:r.body.payload,cadence:r.body.cadence,timezone:req(r.body.timezone,"Timezone"),nextRunAt:req(r.body.nextRunAt,"Next run")}),201); },
    async createNotification(r) { permit(r.context,"notifications:write"); return respond(()=>runtime.notifications.enqueue({tenantId:r.context.tenantId,userId:r.context.userId,taskId:r.body.taskId,deviceId:r.body.deviceId,channel:req(r.body.channel,"Channel"),content:r.body.content,scheduledAt:r.body.scheduledAt,idempotencyKey:req(r.body.idempotencyKey,"Idempotency key")}),201); },
    // The one moment nothing else will trigger this request's execution on its own (mirrors AuthoritativeTaskEngine.create()'s immediate
    // "agent.advance-task" enqueue): "deletion.execute" is an internal-only job type (see the note on createSchedule above) that nothing else
    // ever enqueues, so without this the request would sit at 'queued' forever. A crashed or lost job is caught later by deletion.sweep instead,
    // so this key only needs to dedupe repeated calls for the same request, not future re-drives.
    async requestDeletion(r) { permit(r.context,"privacy:delete"); const subjectId=r.body.subjectId||r.context.userId; if(subjectId!==r.context.userId&&!r.context.can("privacy:delete:any"))throw new NexusRuntimeError("permission_denied","Deleting another subject requires privacy:delete:any.",403); return respond(async()=>{ const request=await runtime.dataLifecycle.requestDeletion({tenantId:r.context.tenantId,subjectId,requestedBy:r.context.userId}); if(runtime.jobs)await runtime.jobs.enqueue({tenantId:r.context.tenantId,jobType:"deletion.execute",idempotencyKey:`deletion-execute:${request.request_id}`,payload:{requestId:request.request_id}}); return request; },202); }
  });
}
async function respond(work,status=200){return{status,body:await work()};}
function req(value,label){if(!String(value||"").trim())throw new NexusRuntimeError("invalid_input",`${label} is required.`);return value;}
function permit(context,permission){if(!context.can(permission))throw new NexusRuntimeError("permission_denied",`Missing permission: ${permission}`,403);}
module.exports=Object.freeze({createControlApi});

function deviceResult(device){if(!device)throw new NexusRuntimeError("device_not_found","An active device owned by this user is required.",404);return device;}
