"use strict";
const test=require("node:test"); const assert=require("node:assert/strict");
const {S3ObjectStore,createObjectStore,normalizeS3Endpoint}=require("../../nexus/storage/object-store.js");
test("incomplete object storage configuration never creates a local production fallback",()=>assert.equal(createObjectStore({NODE_ENV:"production",S3_BUCKET:"bucket"}),null));
test("object storage normalizes common managed-host endpoint values",()=>{
  assert.equal(normalizeS3Endpoint(" account.r2.cloudflarestorage.com "),"https://account.r2.cloudflarestorage.com");
  assert.equal(normalizeS3Endpoint("'https://account.r2.cloudflarestorage.com/'"),"https://account.r2.cloudflarestorage.com");
  assert.equal(normalizeS3Endpoint(""),undefined);
  assert.throws(()=>normalizeS3Endpoint("ftp://object-store.example.com"),/HTTP\(S\)/);
});
test("object keys are tenant and owner scoped and content is checksummed",async()=>{const calls=[];const store=new S3ObjectStore({bucket:"bucket",region:"us-east-1",accessKeyId:"id",secretAccessKey:"secret",client:{send:async command=>{calls.push(command.input);return {};}}});
 const key=store.key({tenantId:"tenant/one",ownerId:"owner two",artifactId:"artifact_1",filename:"report.pdf"});assert.equal(key,"nexus/tenant_one/owner_two/artifact_1/report.pdf");
 const result=await store.put({key,body:Buffer.from("hello"),contentType:"text/plain"});assert.equal(result.sizeBytes,5);assert.equal(result.checksum.length,64);assert.equal(calls[0].Bucket,"bucket");});
