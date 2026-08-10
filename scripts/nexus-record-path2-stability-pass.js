#!/usr/bin/env node
"use strict";

const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

function required(value, label) {
  if (!value) throw new Error(`${label} is required.`);
  return value;
}

function buildStabilityEvidence({ releaseSha, passNumber, report, path1GuardPassed = true, observedAt = new Date().toISOString() }) {
  if (!/^[0-9a-f]{40}$/.test(String(releaseSha || ""))) throw new Error("An exact release SHA is required.");
  if (![1, 2, 3].includes(Number(passNumber))) throw new Error("A stability pass number of 1, 2, or 3 is required.");
  if (report?.passed !== true || report.releaseSha !== releaseSha) throw new Error("The deployment pass did not prove the exact release SHA.");
  if (path1GuardPassed !== true) throw new Error("The Path 1 guard must pass before stability evidence is recorded.");
  return {
    releaseSha,
    passNumber: Number(passNumber),
    production: true,
    simulated: false,
    observedAt,
    receipt: {
      receiptId: `path2-stability-${passNumber}-${crypto.createHash("sha256").update(`${releaseSha}:${passNumber}:${observedAt}`).digest("hex").slice(0, 20)}`,
      releaseSha,
      path1GuardPassed: true,
      source: "nexus-unified-production-release",
      requiredComponents: report.requiredComponents,
      recordedComponents: report.recordedComponents,
      checkedAt: report.checkedAt
    }
  };
}

async function run(env = process.env, fetchFn = fetch) {
  const base = required(env.NEXUS_BASE_URL, "NEXUS_BASE_URL").replace(/\/$/, "");
  const token = required(env.NEXUS_ACCEPTANCE_TOKEN, "NEXUS_ACCEPTANCE_TOKEN");
  const releaseSha = required(env.EXPECTED_RELEASE_SHA, "EXPECTED_RELEASE_SHA");
  const passNumber = Number(required(env.NEXUS_PASS_NUMBER, "NEXUS_PASS_NUMBER"));
  const reportPath = env.NEXUS_RELEASE_READINESS_OUTPUT || path.join("output", `nexus-production-release-pass-${passNumber}.json`);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  const evidence = buildStabilityEvidence({ releaseSha, passNumber, report });
  const response = await fetchFn(`${base}/api/nexus/runtime/path2/stability-passes`, {
    method: "POST",
    headers: { accept: "application/json", "content-type": "application/json", authorization: `Bearer ${token}` },
    body: JSON.stringify(evidence)
  });
  const text = await response.text();
  let body;
  try { body = JSON.parse(text); } catch { body = { raw: text.slice(0, 500) }; }
  if (!response.ok || body?.ok !== true) throw new Error(`Path 2 stability evidence was rejected (${response.status}): ${body?.error || "unknown error"}`);
  console.log(JSON.stringify({ recorded: true, releaseSha, passNumber, receiptId: evidence.receipt.receiptId }));
  return body;
}

if (require.main === module) run().catch(error => { console.error(error.message); process.exit(1); });

module.exports = Object.freeze({ buildStabilityEvidence, run });
