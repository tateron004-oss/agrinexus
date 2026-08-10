#!/usr/bin/env node
"use strict";
const fs = require("node:fs");
const path = require("node:path");

function required(value, label) { if (!value) throw new Error(`${label} is required.`); return value; }
async function requestJson(url, init = {}, fetchFn = fetch) {
  const response = await fetchFn(url, init); const text = await response.text(); let body;
  try { body = JSON.parse(text); } catch { body = { raw: text.slice(0, 500) }; }
  return { response, body };
}
async function run(env = process.env, fetchFn = fetch) {
  const base = required(env.NEXUS_BASE_URL, "NEXUS_BASE_URL").replace(/\/$/, "");
  const token = required(env.NEXUS_ACCEPTANCE_TOKEN, "NEXUS_ACCEPTANCE_TOKEN");
  const releaseSha = required(env.EXPECTED_RELEASE_SHA, "EXPECTED_RELEASE_SHA");
  const path1Baseline = required(env.NEXUS_PATH1_BASELINE, "NEXUS_PATH1_BASELINE");
  const result = await requestJson(`${base}/api/nexus/runtime/path2/certification?path1Baseline=${encodeURIComponent(path1Baseline)}`,
    { headers: { accept: "application/json", authorization: `Bearer ${token}`, "cache-control": "no-cache" } }, fetchFn);
  if (result.body?.releaseSha !== releaseSha) throw new Error("Path 2 certification status is not bound to the active exact release.");
  const output = env.NEXUS_PATH2_STATUS_OUTPUT || path.join("output", "nexus-path2-certification-status.json");
  fs.mkdirSync(path.dirname(output), { recursive: true }); fs.writeFileSync(output, JSON.stringify(result.body, null, 2));
  const pending = Object.entries(result.body?.lanes || {}).filter(([, lane]) => lane.certified !== true).map(([lane]) => lane);
  console.log(JSON.stringify({ certified: result.body?.certified === true, releaseSha, stabilityPasses: result.body?.stabilityPasses,
    pending, output }));
  if (result.body?.certified !== true && env.NEXUS_PATH2_ALLOW_PENDING !== "true") throw new Error(`Path 2 certification remains pending: ${pending.join(", ")}`);
  return result.body;
}
if (require.main === module) run().catch(error => { console.error(error.message); process.exit(1); });
module.exports = Object.freeze({ requestJson, run });
