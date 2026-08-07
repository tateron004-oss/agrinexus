const { createId, assertId } = require("./identifiers.js");

const CHANNELS = Object.freeze(["voice", "typed", "api", "worker", "provider"]);

function requireText(value, name) {
  if (typeof value !== "string" || !value.trim()) throw new Error(`${name} is required.`);
  return value.trim();
}

function createCommand(input = {}, now = () => new Date()) {
  const channel = requireText(input.channel, "Command channel");
  if (!CHANNELS.includes(channel)) throw new Error(`Unsupported command channel: ${channel}`);

  const command = {
    schema: "nexus.command.v1",
    commandId: input.commandId || createId("command"),
    correlationId: requireText(input.correlationId, "Correlation ID"),
    conversationId: input.conversationId || createId("conversation"),
    tenantId: requireText(input.tenantId, "Tenant ID"),
    actorId: requireText(input.actorId, "Actor ID"),
    channel,
    locale: input.locale || "en",
    text: requireText(input.text, "Command text"),
    taskId: input.taskId || null,
    occurredAt: now().toISOString(),
    metadata: Object.freeze({ ...(input.metadata || {}) })
  };

  assertId("command", command.commandId);
  assertId("conversation", command.conversationId);
  if (command.taskId) assertId("task", command.taskId);
  return Object.freeze(command);
}

module.exports = Object.freeze({ CHANNELS, createCommand });
