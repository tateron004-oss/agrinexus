"use strict";
const crypto = require("crypto");

function createNotificationProviders({ env=process.env, fetchFn=globalThis.fetch }={}) {
  let config=[];
  if(env.NEXUS_NOTIFICATION_PROVIDERS_JSON){try{config=JSON.parse(env.NEXUS_NOTIFICATION_PROVIDERS_JSON);}catch{throw coded("notification_provider_config_invalid","Notification provider configuration must be valid JSON.");}}
  if(!Array.isArray(config))throw coded("notification_provider_config_invalid","Notification provider configuration must be an array.");
  const providers={};
  for(const item of config){
    for(const field of ["channel","endpoint","receiptSecret"])if(!String(item?.[field]||"").trim())throw coded("notification_provider_config_invalid",`Notification provider requires ${field}.`);
    if(!/^https:\/\//i.test(item.endpoint))throw coded("notification_provider_config_invalid",`Notification provider ${item.channel} endpoint must use HTTPS.`);
    if(providers[item.channel])throw coded("notification_provider_config_invalid",`Duplicate notification channel ${item.channel}.`);
    providers[item.channel]=async notification=>{
      const response=await fetchFn(item.endpoint,{method:"POST",headers:{"content-type":"application/json","accept":"application/json","idempotency-key":notification.idempotency_key,
        "x-nexus-tenant-id":notification.tenant_id},body:JSON.stringify({schema:"nexus.notification-request.v1",notification})});
      const body=await response.json().catch(()=>({}));
      if(!response.ok)throw coded(body.code||"notification_provider_failed",body.message||`Notification provider returned HTTP ${response.status}.`);
      const receipt=body.receipt;const expected=receipt&&crypto.createHmac("sha256",item.receiptSecret).update(canonical(receipt)).digest("hex");
      const signature=String(receipt?.signature||"");const verified=Boolean(expected&&signature.length===expected.length&&crypto.timingSafeEqual(Buffer.from(signature),Buffer.from(expected))&&
        receipt.schema==="nexus.notification-receipt.v1"&&receipt.notificationId===notification.notification_id&&receipt.channel===notification.channel&&receipt.outcome==="delivered");
      return {verified,method:"signed_notification_receipt",providerReceiptId:verified?receipt.receiptId:null};
    };
  }
  return Object.freeze(providers);
}
function canonical(r){return[r.schema,r.receiptId,r.notificationId,r.channel,r.outcome,r.occurredAt].join("\n");}
function coded(code,message){const e=new Error(message);e.code=code;return e;}
module.exports=Object.freeze({createNotificationProviders,canonical});
