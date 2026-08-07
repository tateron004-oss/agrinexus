"use strict";

const { createCommand, CHANNELS } = require("../contracts/command.js");
const { WORKSPACES, createWorkspaceMigrationRegistry } = require("./workspace-migration-registry.js");

function createWorkspaceTaskAdapter({ engine, registry = createWorkspaceMigrationRegistry() }) {
  if (!engine?.create) throw new Error("The authoritative task engine is required.");
  return Object.freeze({
    list: () => registry.list(),
    async create({ context, workspaceId, body = {}, channel = "api", locale = "en" }) {
      const workspace = registry.get(workspaceId);
      if (!workspace) return { status: 404, body: { error: `Unknown workspace: ${workspaceId}`, code: "unknown_workspace" } };
      const normalizedChannel = CHANNELS.includes(channel) ? channel : "api";
      const goal = String(body.goal || body.command || "").trim();
      if (!goal) return { status: 400, body: { error: "A workspace goal or command is required.", code: "goal_required" } };
      const suppliedSteps = Array.isArray(body.steps) ? body.steps : [];
      const steps = suppliedSteps.length ? suppliedSteps : [{
        title: `Review ${workspaceId} request`, toolId: null,
        input: { workspaceId, request: body.payload || {}, executionRequested: false }
      }];
      const task = await engine.create({
        command: createCommand({ correlationId: context.requestId, tenantId: context.tenantId,
          actorId: context.userId, channel: normalizedChannel, locale, text: goal,
          conversationId: body.conversationId }),
        goal, application: workspaceId, riskTier: body.riskTier || "low",
        priority: body.priority, dueAt: body.dueAt, steps
      });
      return { status: 201, body: { ...task, workspace: workspaceId,
        authoritative: true, durable: true, executionClaimed: false } };
    }
  });
}

module.exports = Object.freeze({ WORKSPACES, createWorkspaceTaskAdapter });
