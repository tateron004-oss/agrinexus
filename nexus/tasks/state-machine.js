const { createId, assertId } = require("../contracts/identifiers.js");

const STATES = Object.freeze([
  "draft",
  "clarifying",
  "planned",
  "awaiting_consent",
  "awaiting_confirmation",
  "queued",
  "running",
  "verifying",
  "completed",
  "cancelled",
  "blocked",
  "failed",
  "expired"
]);

const TERMINAL_STATES = Object.freeze(["completed", "cancelled", "blocked", "failed", "expired"]);

const TRANSITIONS = Object.freeze({
  draft: ["clarifying", "planned", "cancelled", "blocked", "expired"],
  clarifying: ["planned", "cancelled", "blocked", "expired"],
  planned: ["awaiting_consent", "awaiting_confirmation", "queued", "cancelled", "blocked", "expired"],
  awaiting_consent: ["awaiting_confirmation", "queued", "cancelled", "blocked", "expired"],
  awaiting_confirmation: ["queued", "cancelled", "blocked", "expired"],
  queued: ["running", "cancelled", "blocked", "failed", "expired"],
  running: ["verifying", "cancelled", "blocked", "failed"],
  verifying: ["completed", "queued", "blocked", "failed"],
  completed: [],
  cancelled: [],
  blocked: [],
  failed: [],
  expired: []
});

function required(value, name) {
  if (typeof value !== "string" || !value.trim()) throw new Error(`${name} is required.`);
  return value.trim();
}

function createTask(input = {}, now = () => new Date()) {
  const timestamp = now().toISOString();
  const task = {
    schema: "nexus.task.v1",
    taskId: input.taskId || createId("task"),
    tenantId: required(input.tenantId, "Tenant ID"),
    ownerId: required(input.ownerId, "Task owner ID"),
    conversationId: required(input.conversationId, "Conversation ID"),
    correlationId: required(input.correlationId, "Correlation ID"),
    goal: required(input.goal, "Task goal"),
    application: input.application || "general",
    riskTier: input.riskTier || "low",
    state: "draft",
    version: 1,
    createdAt: timestamp,
    updatedAt: timestamp,
    history: Object.freeze([])
  };
  assertId("task", task.taskId);
  assertId("conversation", task.conversationId);
  return Object.freeze(task);
}

function transitionTask(task, nextState, context = {}, now = () => new Date()) {
  if (!task || task.schema !== "nexus.task.v1") throw new Error("A valid Nexus task is required.");
  if (!STATES.includes(nextState)) throw new Error(`Unknown Nexus task state: ${nextState}`);
  if (!TRANSITIONS[task.state].includes(nextState)) {
    throw new Error(`Illegal Nexus task transition: ${task.state} -> ${nextState}`);
  }
  if (!context.actorId) throw new Error("Transition actor ID is required.");
  if (!context.reason) throw new Error("Transition reason is required.");

  const occurredAt = now().toISOString();
  const event = Object.freeze({
    eventId: createId("event"),
    from: task.state,
    to: nextState,
    actorId: context.actorId,
    reason: context.reason,
    occurredAt,
    metadata: Object.freeze({ ...(context.metadata || {}) })
  });

  return Object.freeze({
    ...task,
    state: nextState,
    version: task.version + 1,
    updatedAt: occurredAt,
    history: Object.freeze([...task.history, event])
  });
}

function isTerminal(task) {
  return Boolean(task && TERMINAL_STATES.includes(task.state));
}

module.exports = Object.freeze({ STATES, TERMINAL_STATES, TRANSITIONS, createTask, transitionTask, isTerminal });
