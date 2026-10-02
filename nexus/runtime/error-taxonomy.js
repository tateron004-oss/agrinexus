"use strict";

// Found live (fresh-module audit): rules are evaluated top-to-bottom and stop at the first match, so a
// genuinely transient, retryable failure whose message names the tool (e.g. "Tool X render timed out")
// used to hit execution_failed's broad /tool|executor|receipt/ match before ever reaching render_timeout's
// narrower, more specific pattern -- misclassifying it as non-retryable (retryable is only true for
// database_unavailable/provider_unavailable/render_timeout below). render_timeout is moved ahead of
// execution_failed so the more specific timeout pattern gets first look; render_failed's own broad
// /render|workspace|browser/ match already correctly sits after it.
const RULES = Object.freeze([
  ["identity_failed", /identity|membership|tenant|principal|permission|unauthor/i],
  ["database_unavailable", /database|postgres|pgvector|migration|connection|ECONNREFUSED/i],
  ["planning_failed", /plan|planning|model|openai/i],
  ["provider_unavailable", /provider.*(missing|unavailable|config)|fetch_unavailable/i],
  ["render_timeout", /render.*timeout|timeout.*render/i],
  ["execution_failed", /execution|executor|tool|receipt/i],
  ["render_failed", /render|workspace|browser/i],
  ["verification_failed", /verify|verification|evidence|acknowledg/i]
]);

function classifyRuntimeError(error = {}) {
  const originalCode = String(error.code || error.name || "");
  const searchable = `${originalCode} ${error.message || ""}`;
  const category = RULES.find(([, pattern]) => pattern.test(searchable))?.[0] || "runtime_unavailable";
  return Object.freeze({ category, code: originalCode || category,
    message: publicMessage(category), retryable: ["database_unavailable", "provider_unavailable", "render_timeout"].includes(category) });
}

function publicMessage(category) {
  return {
    identity_failed: "Nexus could not bind the active user and tenant identity.",
    database_unavailable: "Nexus could not verify its authoritative PostgreSQL store.",
    planning_failed: "Nexus could not produce an authoritative plan for this request.",
    provider_unavailable: "The required capability provider is unavailable.",
    execution_failed: "The selected capability did not complete execution.",
    render_failed: "The authoritative result could not be rendered.",
    render_timeout: "The authoritative result was not rendered before the verification deadline.",
    verification_failed: "Nexus could not verify the requested user-visible or audible outcome.",
    runtime_unavailable: "The authoritative Nexus runtime is unavailable."
  }[category];
}

module.exports = Object.freeze({ classifyRuntimeError });
