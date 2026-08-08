"use strict";

function evaluateObservabilityAlerts(events, { latencyMs = 1000, costMicros = 5 } = {}) {
  if (!Array.isArray(events)) throw new Error("Observability events are required.");
  return events.flatMap(event => {
    const alerts = [];
    if (["failed", "error"].includes(event.outcome)) alerts.push({ kind: "execution-failure", severity: "critical", traceId: event.trace_id });
    if (Number(event.duration_ms || 0) >= latencyMs) alerts.push({ kind: "latency-budget", severity: "warning", traceId: event.trace_id });
    if (Number(event.cost_micros || 0) >= costMicros) alerts.push({ kind: "cost-threshold", severity: "warning", traceId: event.trace_id });
    return alerts;
  });
}

module.exports = Object.freeze({ evaluateObservabilityAlerts });
