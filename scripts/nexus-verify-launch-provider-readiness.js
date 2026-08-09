#!/usr/bin/env node
"use strict";

const { classifyProviders } = require("./lib/nexus-launch-provider-profile.js");

async function run(env = process.env) {
  const base = String(env.NEXUS_CLEAN_BASE_URL || "").replace(/\/+$/, "");
  if (!base) throw new Error("NEXUS_CLEAN_BASE_URL is required.");
  const response = await fetch(`${base}/api/integrations`, { headers: { accept: "application/json", "cache-control": "no-cache" } });
  if (!response.ok) throw new Error(`Production integrations returned HTTP ${response.status}.`);
  const profile = classifyProviders(await response.json());
  if (!profile.ready) throw new Error(`Required launch providers are unavailable: ${profile.requiredGaps.map(item => item.id).join(", ")}.`);
  console.log(JSON.stringify({ ready: true, profile: profile.profile, requiredReady: `${profile.requiredReadyCount}/${profile.requiredCount}` }, null, 2));
  return profile;
}

if (require.main === module) run().catch(error => { console.error(error.message); process.exit(1); });
module.exports = Object.freeze({ run });
