"use strict";

const assert = require("node:assert/strict");
const test = require("node:test");
const { NexusAuthoritativeOutcomeRenderer } = require("../../public/nexus-authoritative-outcome-renderer.js");

function outcome(overrides = {}) {
  return { schema: "nexus.workspace-outcome.v1", commandId: "cmd_1", correlationId: "trace_1",
    conversationId: "cnv_1", channel: "typed", taskId: "tsk_1", application: "maps", workspace: "map",
    operation: "show_route", data: { origin: "Nairobi", destination: "Nakuru" }, response: "Route ready.", ...overrides };
}

test("passive renderer consumes typed server data and acknowledges visible outcome", async () => {
  let rendered; let acknowledged;
  const renderer = new NexusAuthoritativeOutcomeRenderer({ adapters: { map: { render: async data => {
    rendered = data; return { rendered: true, visible: true, evidence: { endpoints: [data.origin, data.destination] } };
  } } }, acknowledge: async value => { acknowledged = value; return { schema: "nexus.behavior-acknowledgement.v1", completed: true }; } });
  const result = await renderer.render(outcome());
  assert.deepEqual(rendered, { origin: "Nairobi", destination: "Nakuru" });
  assert.equal(acknowledged.commandId, "cmd_1");
  assert.equal(result.acknowledged, true);
});

test("new turn supersedes an unfinished renderer and prevents stale acknowledgement", async () => {
  const releases = []; const acknowledgements = [];
  const renderer = new NexusAuthoritativeOutcomeRenderer({ adapters: { map: { render: () => new Promise(resolve => releases.push(resolve)) } },
    acknowledge: async value => { acknowledgements.push(value); return { schema: "nexus.behavior-acknowledgement.v1", completed: true }; } });
  const first = renderer.render(outcome());
  await Promise.resolve();
  const second = renderer.render(outcome({ commandId: "cmd_2", correlationId: "trace_2" }));
  await Promise.resolve();
  releases[0]({ rendered: true, visible: true });
  releases[1]({ rendered: true, visible: true });
  assert.equal((await first).stale, true);
  assert.equal((await second).acknowledged, true);
  assert.deepEqual(acknowledgements.map(item => item.commandId), ["cmd_2"]);
});

test("renderer fails closed when no visible or audible proof exists", async () => {
  const renderer = new NexusAuthoritativeOutcomeRenderer({ adapters: { map: { render: async () => ({ rendered: true, visible: false }) } }, acknowledge: async () => ({}) });
  await assert.rejects(() => renderer.render(outcome()), /not visibly or audibly verified/);
});
