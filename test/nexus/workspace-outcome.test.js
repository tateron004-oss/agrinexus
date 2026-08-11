"use strict";

const assert = require("node:assert/strict");
const test = require("node:test");
const { createWorkspaceOutcome } = require("../../nexus/contracts/workspace-outcome.js");

const command = text => ({ commandId: "cmd_1", correlationId: "cor_1", conversationId: "cnv_1", channel: "typed", text });

test("server outcome preserves agriculture entities and original command", () => {
  const result = createWorkspaceOutcome({
    command: command("My tomato leaves have yellow spots. What should I do?"),
    plan: { application: "agriculture", steps: [{ input: { crop: "tomato", observations: ["yellow spots on leaves"] } }] },
    task: { taskId: "tsk_1", steps: [{ output: { assessment: "Inspect for fungal disease." } }] },
    state: "completed", response: "Assessment ready.", outcome: { verified: true }
  });
  assert.equal(result.workspace, "agriculture");
  assert.equal(result.operation, "agriculture_assessment");
  assert.equal(result.originalText, "My tomato leaves have yellow spots. What should I do?");
  assert.equal(result.data.crop, "tomato");
  assert.deepEqual(result.data.observations, ["yellow spots on leaves"]);
  assert.equal(result.verification.renderVerified, false);
});

test("server outcome retains both map endpoints", () => {
  const result = createWorkspaceOutcome({
    command: command("Show me the route from Nairobi to Nakuru"),
    plan: { application: "maps", steps: [{ input: { origin: "Nairobi", destination: "Nakuru" } }] },
    task: { taskId: "tsk_2", steps: [] }, state: "completed", outcome: { verified: true }
  });
  assert.equal(result.operation, "show_route");
  assert.deepEqual({ origin: result.data.origin, destination: result.data.destination }, { origin: "Nairobi", destination: "Nakuru" });
});

test("workspace selection is server-owned and rejects unknown applications", () => {
  assert.throws(() => createWorkspaceOutcome({ command: command("Do something"), plan: { application: "legacy-browser", steps: [] }, task: {}, state: "completed" }), /No authoritative workspace/);
});
