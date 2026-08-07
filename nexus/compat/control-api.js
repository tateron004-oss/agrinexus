"use strict";
const { NexusRuntimeError } = require("../runtime/authoritative-task-engine.js");
function createControlApi(runtime) {
  return Object.freeze({
    async registerDevice(r) { permit(r.context,"devices:write"); return respond(()=>runtime.devices.register({deviceId:req(r.body.deviceId,"Device ID"),tenantId:r.context.tenantId,userId:r.context.userId,platform:req(r.body.platform,"Platform"),capabilities:r.body.capabilities||[],pushEndpoint:r.body.pushEndpoint,pushKeyCiphertext:r.body.pushKeyCiphertext}),201); },
    async revokeDevice(r) { permit(r.context,"devices:write"); return respond(async()=>({revoked:await runtime.devices.revoke({tenantId:r.context.tenantId,userId:r.context.userId,deviceId:r.params.deviceId})})); },
    async createSchedule(r) { permit(r.context,"reminders:write"); return respond(()=>runtime.schedules.create({tenantId:r.context.tenantId,ownerId:r.context.userId,taskId:r.body.taskId,jobType:r.body.jobType||"notifications.deliver",payload:r.body.payload,cadence:r.body.cadence,timezone:req(r.body.timezone,"Timezone"),nextRunAt:req(r.body.nextRunAt,"Next run")}),201); },
    async createNotification(r) { permit(r.context,"notifications:write"); return respond(()=>runtime.notifications.enqueue({tenantId:r.context.tenantId,userId:r.context.userId,taskId:r.body.taskId,deviceId:r.body.deviceId,channel:req(r.body.channel,"Channel"),content:r.body.content,scheduledAt:r.body.scheduledAt,idempotencyKey:req(r.body.idempotencyKey,"Idempotency key")}),201); },
    async requestDeletion(r) { permit(r.context,"privacy:delete"); const subjectId=r.body.subjectId||r.context.userId; if(subjectId!==r.context.userId&&!r.context.can("privacy:delete:any"))throw new NexusRuntimeError("permission_denied","Deleting another subject requires privacy:delete:any.",403); return respond(()=>runtime.dataLifecycle.requestDeletion({tenantId:r.context.tenantId,subjectId,requestedBy:r.context.userId}),202); }
  });
}
async function respond(work,status=200){return{status,body:await work()};}
function req(value,label){if(!String(value||"").trim())throw new NexusRuntimeError("invalid_input",`${label} is required.`);return value;}
function permit(context,permission){if(!context.can(permission))throw new NexusRuntimeError("permission_denied",`Missing permission: ${permission}`,403);}
module.exports=Object.freeze({createControlApi});
