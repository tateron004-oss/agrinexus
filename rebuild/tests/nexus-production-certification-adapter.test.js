"use strict";

const assert = require("node:assert/strict");
const { PassThrough } = require("node:stream");
const { createProductionCertificationAdapter, isCertificationRequest } = require("../production-certification-adapter");
const { compareProductionIdentity } = require("../../scripts/nexus-production-certification-preflight");

assert.equal(isCertificationRequest({ url: "/certification", headers: { host: "local" } }), true);
assert.equal(isCertificationRequest({ url: "/api/state", headers: { host: "local", referer: "https://local/certification/" } }), true);
assert.equal(isCertificationRequest({ url: "/api/state", headers: { host: "local" } }), false);

const deployed = "7".repeat(40);
const adapter = createProductionCertificationAdapter({
  root: process.cwd(),
  env: { RENDER_GIT_COMMIT: deployed, NEXUS_RUNTIME_SOURCE_SHA: "b".repeat(40) },
  startChild: false
});
assert.equal(adapter.identity.deployedReleaseSha, deployed);
assert.equal(adapter.identity.runtimeSourceSha, "b".repeat(40));
assert.deepEqual(compareProductionIdentity(adapter.identity, {
  deployedReleaseSha: deployed,
  runtimeSourceSha: "b".repeat(40)
}), []);
assert.deepEqual(compareProductionIdentity({
  schema: "nexus.certification.identity.v1",
  releaseSha: deployed,
  bundleSha256: "c".repeat(64)
}, {
  deployedReleaseSha: deployed,
  runtimeSourceSha: "b".repeat(40)
}), []);
assert.deepEqual(compareProductionIdentity({
  schema: "nexus.certification.identity.v1",
  releaseSha: "d".repeat(40),
  bundleSha256: "c".repeat(64)
}, {
  deployedReleaseSha: deployed,
  runtimeSourceSha: "b".repeat(40)
}), ["deployed-release-sha"]);

const request = new PassThrough();
request.url = "/certification/api/certification/identity";
request.headers = { host: "local" };
const response = new PassThrough();
let status;
let headers;
response.writeHead = (nextStatus, nextHeaders) => { status = nextStatus; headers = nextHeaders; };
let body = "";
response.on("data", chunk => { body += chunk; });

(async () => {
  assert.equal(await adapter.handle(request, response), true);
  assert.equal(status, 200);
  assert.equal(headers["cache-control"], "no-store");
  assert.equal(JSON.parse(body).runtimeSourceSha, "b".repeat(40));
  console.log("Nexus production certification adapter: PASS");
})().catch(error => { console.error(error.stack || error.message); process.exitCode = 1; });
