"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { createServerRuntimeAdapter } = require("../../nexus/compat/server-runtime-adapter.js");

test("acceptance consent-audit probe preserves release-scoped grant and revoke receipts", async () => {
  const sha = "c".repeat(40); let consent; const events = [];
  const runtime = { ready: Promise.resolve(), consents: {
    async grant(input) { consent = { consent_id: "consent_probe", state: "granted", granted_at: new Date(), receipt: input.receipt }; return consent; },
    async revoke() { consent = { ...consent, state: "revoked", revoked_at: new Date() }; return consent; }
  }, audit: { async record(input) { events.push({ event_id: `event_${events.length}`, event_type: input.eventType, release_sha: sha }); } },
  db: { async query(sql) { return sql.includes("nexus_consents") ? { rows: [consent] } : { rows: events }; } } };
  const adapter = createServerRuntimeAdapter({ env: { NEXUS_ACCEPTANCE_TOKEN: "secret", RENDER_GIT_COMMIT: sha },
    resolveUser: async () => null, readJson: async () => ({ releaseSha: sha }), createRuntimeFn: () => runtime });
  let status; let body;
  await adapter.handle({ method: "POST", headers: { authorization: "Bearer secret" } }, {},
    new URL("https://production/api/nexus/runtime/production-acceptance/probes/consent-audit"), (_res, code, value) => { status = code; body = value; });
  assert.equal(status, 200); assert.equal(body.ok, true); assert.equal(body.releaseSha, sha);
  assert.equal(body.immutableReceipts, true); assert.equal(body.auditEventCount, 2); assert.equal(body.receiptPreserved, true);
});
