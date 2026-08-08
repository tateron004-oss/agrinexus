"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { evaluateObservabilityAlerts } = require("../../nexus/observability/alert-evaluator.js");

test("alert evaluator emits failure, latency, and cost alerts with trace identity", () => {
  const alerts = evaluateObservabilityAlerts([{ trace_id: "trace-1", outcome: "error", duration_ms: 1250, cost_micros: 7 }]);
  assert.deepEqual(alerts.map(item => item.kind), ["execution-failure", "latency-budget", "cost-threshold"]);
  assert.equal(alerts.every(item => item.traceId === "trace-1"), true);
});
