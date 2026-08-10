#!/usr/bin/env node
"use strict";
const fs = require("node:fs");
const { validateSession } = require("../nexus/path2/evidence-repository.js");

function required(value, label) { if (!value) throw new Error(`${label} is required.`); return value; }
async function run(env = process.env, fetchFn = fetch) {
  const base = required(env.NEXUS_BASE_URL, "NEXUS_BASE_URL").replace(/\/$/, "");
  const token = required(env.NEXUS_ACCEPTANCE_TOKEN, "NEXUS_ACCEPTANCE_TOKEN");
  const releaseSha = required(env.EXPECTED_RELEASE_SHA, "EXPECTED_RELEASE_SHA");
  const inputPath = required(env.NEXUS_USABILITY_SESSION_FILE, "NEXUS_USABILITY_SESSION_FILE");
  const input = JSON.parse(fs.readFileSync(inputPath, "utf8"));
  if (input.releaseSha !== releaseSha) throw new Error("Usability observation does not target the active exact release.");
  validateSession(input);
  const response = await fetchFn(`${base}/api/nexus/runtime/path2/usability-sessions`, { method: "POST",
    headers: { accept: "application/json", "content-type": "application/json", authorization: `Bearer ${token}` },
    body: JSON.stringify(input) });
  const text = await response.text(); let body;
  try { body = JSON.parse(text); } catch { body = { raw: text.slice(0, 500) }; }
  if (!response.ok || body?.ok !== true) throw new Error(`Usability observation was rejected (${response.status}): ${body?.error || "unknown error"}`);
  console.log(JSON.stringify({ recorded: true, releaseSha, participantId: input.participantId, locale: input.locale,
    sessionId: body.session?.session_id || body.session?.sessionId || null }));
  return body;
}
if (require.main === module) run().catch(error => { console.error(error.message); process.exit(1); });
module.exports = Object.freeze({ run });
