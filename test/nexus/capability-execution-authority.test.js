"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { CapabilityAdapterRegistry } = require("../../nexus/tools/capability-adapter-registry.js");
const { OutcomeVerifierRegistry } = require("../../nexus/verification/verifier-registry.js");
const { CapabilityExecutionAuthority } = require("../../nexus/runtime/capability-execution-authority.js");

test("authoritative execution requires one adapter and one verifier for the same tool", async () => {
  const adapters = new CapabilityAdapterRegistry([{ toolId: "media.play", implementation: "youtube",
    execute: async ({ input }) => ({ playerState: input.playerState }) }]);
  const verifiers = new OutcomeVerifierRegistry([{ toolId: "media.play", method: "genuine_player_state",
    verify: async ({ result }) => ({ verified: result.playerState === 1, playerState: result.playerState }) }]);
  const authority = new CapabilityExecutionAuthority({ adapters, verifiers });
  const passed = await authority.execute({ tool: { tool_id: "media.play" }, input: { playerState: 1 } });
  assert.equal(passed.verification.verified, true);
  assert.equal(passed.verification.adapterVersion, 1);
  await assert.rejects(() => authority.execute({ tool: { tool_id: "media.play" }, input: { playerState: 3 } }),
    error => error.code === "outcome_unverified");
});

test("missing ownership fails closed before execution", async () => {
  const adapters = new CapabilityAdapterRegistry();
  const verifiers = new OutcomeVerifierRegistry();
  const authority = new CapabilityExecutionAuthority({ adapters, verifiers });
  await assert.rejects(() => authority.execute({ tool: { tool_id: "maps.view" }, input: {} }),
    error => error.code === "authoritative_adapter_missing");
});

test("registries reject duplicate owners", () => {
  const adapters = new CapabilityAdapterRegistry([{ toolId: "knowledge.search", implementation: "provider",
    execute: async () => ({}) }]);
  assert.throws(() => adapters.register({ toolId: "knowledge.search", implementation: "other",
    execute: async () => ({}) }), error => error.code === "adapter_already_registered");
});
