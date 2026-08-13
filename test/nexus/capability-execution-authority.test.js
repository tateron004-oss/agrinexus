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

test("governed execution emits the request correlation identifier for durable observability", async () => {
  const observed = [];
  const adapters = new CapabilityAdapterRegistry([{ toolId: "knowledge.search", implementation: "provider",
    execute: async () => ({ answer: "water stress" }) }]);
  const verifiers = new OutcomeVerifierRegistry([{ toolId: "knowledge.search", method: "result_present",
    verify: async () => ({ verified: true }) }]);
  const authority = new CapabilityExecutionAuthority({ adapters, verifiers,
    observe: async event => observed.push(event) });
  await authority.execute({ tool: { tool_id: "knowledge.search" }, input: {},
    context: { tenantId: "tenant-1", userId: "user-1", correlationId: "correlation-request-1" },
    taskId: "tsk_1", stepId: "stp_1" });
  assert.equal(observed.length, 2);
  assert.deepEqual(observed.map(event => event.correlationId),
    ["correlation-request-1", "correlation-request-1"]);
  assert.deepEqual(observed.map(event => event.eventType),
    ["adapter.started", "verification.passed"]);
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
