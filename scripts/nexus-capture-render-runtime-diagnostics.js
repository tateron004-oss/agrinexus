#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const {
  createClient,
  resolveUniqueService,
  fetchDeployDiagnostics
} = require("./nexus-render-release-controller.js");

async function run(env = process.env, options = {}) {
  if (!env.RENDER_API_KEY) throw new Error("RENDER_API_KEY is required.");
  const releaseSha = String(env.EXPECTED_RELEASE_SHA || "").trim();
  if (!/^[0-9a-f]{40}$/.test(releaseSha)) throw new Error("EXPECTED_RELEASE_SHA must be a full commit SHA.");
  const client = options.client || createClient({ apiKey: env.RENDER_API_KEY, fetchImpl: options.fetchImpl });
  const service = await resolveUniqueService(client, "nexus-genesis-certified");
  const startTime = env.NEXUS_RUNTIME_DIAGNOSTIC_START || new Date(Date.now() - (15 * 60 * 1000)).toISOString();
  const diagnostics = await fetchDeployDiagnostics(client, service, { createdAt: startTime }, {
    attempts: options.attempts || 2,
    retryMs: options.retryMs || 1000
  });
  const record = {
    schema: "nexus.render-runtime-failure-diagnostics.v1",
    releaseSha,
    service: service.name,
    capturedAt: new Date().toISOString(),
    startTime,
    diagnostics
  };
  fs.mkdirSync("output", { recursive: true });
  fs.writeFileSync("output/nexus-production-render-runtime-diagnostics.json", JSON.stringify(record, null, 2));
  console.log(JSON.stringify({ releaseSha, service: service.name, captured: diagnostics.length }, null, 2));
  return record;
}

if (require.main === module) run().catch(error => { console.error(error.message); process.exit(1); });
module.exports = Object.freeze({ run });
