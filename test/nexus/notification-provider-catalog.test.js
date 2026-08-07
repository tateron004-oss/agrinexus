"use strict";
const assert=require("node:assert/strict");const crypto=require("crypto");const test=require("node:test");
const {createNotificationProviders,canonical}=require("../../nexus/notifications/provider-catalog.js");
test("configured notification delivery requires a signed provider receipt",async()=>{
  const notification={notification_id:"note-1",tenant_id:"tenant-1",channel:"push",idempotency_key:"once"};
  const receipt={schema:"nexus.notification-receipt.v1",receiptId:"provider-1",notificationId:"note-1",channel:"push",outcome:"delivered",occurredAt:"2026-08-07T12:00:00Z"};
  receipt.signature=crypto.createHmac("sha256","secret").update(canonical(receipt)).digest("hex");let request;
  const providers=createNotificationProviders({env:{NEXUS_NOTIFICATION_PROVIDERS_JSON:JSON.stringify([{channel:"push",endpoint:"https://push.example/deliver",receiptSecret:"secret"}])},fetchFn:async(_url,options)=>(request=options,{ok:true,json:async()=>({receipt})})});
  const result=await providers.push(notification);assert.equal(result.verified,true);assert.equal(request.headers["idempotency-key"],"once");
  receipt.signature="0".repeat(64);assert.equal((await providers.push(notification)).verified,false);
});
test("notification providers fail closed when absent or insecure",()=>{assert.deepEqual(Object.keys(createNotificationProviders({env:{}})),[]);assert.throws(()=>createNotificationProviders({env:{NEXUS_NOTIFICATION_PROVIDERS_JSON:JSON.stringify([{channel:"sms",endpoint:"http://bad",receiptSecret:"x"}])}}),/HTTPS/);});
