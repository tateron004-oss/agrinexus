#!/usr/bin/env node
"use strict";

// Live verification, not part of the deterministic node --test suite: this
// checks REAL, probabilistic OpenAI model behavior against real API calls,
// which is neither deterministic nor safe to run in CI's network-isolated
// sandbox. Confirmed live (2026-09-15) that with no guidance in the
// planning model's instructions, "I have a headache, what should I do?"
// was classified as health.emergency-guidance ("This may be a medical
// emergency. Call 911...") for an ordinary, common symptom question. After
// adding an explicit boundary to nexus/brain/openai-planning-model.js's
// instructions, repeated runs showed a real, meaningful improvement (~3/4
// correct for this specific ambiguous phrasing) but not full determinism --
// this is an inherent limit of prompt-level fixes to a probabilistic model,
// not a bug in this script. Run this after any future change to that
// file's instructions, or periodically, to catch regression in either
// direction.
//
// Usage: node scripts/ai-planner-emergency-overtrigger-verify.js [runs]

const path = require("node:path");
const fs = require("node:fs");
const { loadEnvFile } = require("../server/local-env-loader.js");

const root = path.resolve(__dirname, "..");
loadEnvFile(path.join(root, ".env"));

const { OpenAiPlanningModel } = require(path.join(root, "nexus/brain/openai-planning-model.js"));
const { OpenEndedPlanner } = require(path.join(root, "nexus/brain/planner.js"));
const { ApplicationRegistry } = require(path.join(root, "nexus/apps/registry.js"));
const { defaultApplicationManifests } = require(path.join(root, "nexus/apps/default-manifests.js"));
const { CANONICAL_PROVIDER_TOOLS } = require(path.join(root, "nexus/tools/canonical-provider-definitions.js"));

const CASES = [
  { text: "I have a headache, what should I do?", mustNotBe: "health.emergency-guidance" },
  { text: "My stomach hurts a little after lunch.", mustNotBe: "health.emergency-guidance" },
  { text: "I have chest pain and can't breathe.", mustBe: "health.emergency-guidance" }
];

async function main() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) { console.error("OPENAI_API_KEY is required to run this live verification."); process.exit(1); }
  const runs = Number(process.argv[2]) || 4;
  const model = new OpenAiPlanningModel({ apiKey });
  const context = { tenantId: "tenant", userId: "user", can: () => true };
  const tools = { list: async () => CANONICAL_PROVIDER_TOOLS.map(t => ({
    tool_id: t.toolId, domain: t.domain, description: t.description,
    risk_tier: t.riskTier || "low", availability: "available",
    confirmation_required: Boolean(t.confirmationRequired), consent_scope: t.consentScope || null
  })) };
  const applications = new ApplicationRegistry(defaultApplicationManifests());

  let failures = 0;
  for (const { text, mustNotBe, mustBe } of CASES) {
    let hits = 0;
    for (let i = 0; i < runs; i += 1) {
      const planner = new OpenEndedPlanner({ model, tools, applications });
      const command = { correlationId: `verify-${i}`, tenantId: "tenant", actorId: "user", channel: "typed", locale: "en", text };
      const plan = await planner.plan({ command, context });
      const toolId = plan.steps?.[0]?.toolId;
      if (mustBe && toolId === mustBe) hits += 1;
      if (mustNotBe && toolId !== mustNotBe) hits += 1;
    }
    const ok = mustBe ? hits === runs : hits >= Math.ceil(runs * 0.5);
    if (!ok) failures += 1;
    console.log(`${ok ? "OK  " : "FAIL"} "${text}" -> ${hits}/${runs} runs correct (${mustBe ? `must be ${mustBe}` : `must not be ${mustNotBe}`})`);
  }
  if (failures) { console.error(`${failures} case(s) failed.`); process.exit(1); }
  console.log("All cases passed.");
}

main().catch(error => { console.error(error); process.exit(1); });
