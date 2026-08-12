"use strict";

const APPLICATION_TO_WORKSPACE = Object.freeze({
  agriculture: "agriculture",
  health: "health",
  telehealth: "telehealth",
  "mobile-clinic": "mobile-clinic",
  pharmacy: "pharmacy",
  learning: "learning",
  workforce: "workforce",
  marketplace: "trade",
  maps: "map",
  "music-media": "media",
  documents: "documents",
  reminders: "reminders",
  "offline-queue": "offline",
  "live-knowledge": "live-knowledge",
  communications: "communications",
  operations: "operations"
});

const APPLICATION_PRESENTATION = Object.freeze({
  agriculture: "assessment",
  health: "health-support",
  telehealth: "form",
  "mobile-clinic": "location-list",
  pharmacy: "location-list",
  learning: "learning-plan",
  workforce: "document",
  marketplace: "listing",
  maps: "map",
  "music-media": "media-player",
  documents: "document",
  reminders: "reminder",
  "offline-queue": "task-list",
  "live-knowledge": "source-answer",
  communications: "communication",
  operations: "operation"
});

function createWorkspaceOutcome({ command, plan, task, state, response, outcome }) {
  const application = required(plan?.application, "Application");
  const workspace = APPLICATION_TO_WORKSPACE[application];
  if (!workspace) throw new Error(`No authoritative workspace is registered for ${application}.`);
  const inputs = mergeStepObjects(plan?.steps, "input");
  const outputs = mergeStepObjects(task?.steps, "output");
  return Object.freeze({
    schema: "nexus.workspace-outcome.v2",
    commandId: required(command?.commandId, "Command ID"),
    correlationId: required(command?.correlationId, "Correlation ID"),
    conversationId: required(command?.conversationId, "Conversation ID"),
    taskId: task?.taskId || null,
    originalText: required(command?.text, "Original command text"),
    channel: required(command?.channel, "Command channel"),
    application,
    workspace,
    operation: operationFor(application, inputs),
    state,
    completed: state === "completed",
    data: Object.freeze({ ...inputs, ...outputs }),
    response: String(response || ""),
    presentation: Object.freeze({
      kind: required(APPLICATION_PRESENTATION[application], "Presentation kind"),
      renderer: "passive-ui",
      interaction: "receipt-only",
      commandAuthority: false,
      completionAuthority: false
    }),
    verification: Object.freeze({
      providerVerified: outcome?.verified === true,
      renderRequired: true,
      renderVerified: false
    })
  });
}

function mergeStepObjects(steps = [], key) {
  return (steps || []).reduce((combined, step) => {
    const value = step?.[key];
    return value && typeof value === "object" && !Array.isArray(value)
      ? Object.assign(combined, value)
      : combined;
  }, {});
}

function operationFor(application, input) {
  if (application === "maps") return input.origin && input.destination ? "show_route" : "show_location";
  if (application === "music-media") return input.action || "play_media";
  if (application === "health") return input.intakeType === "blood-pressure" ? "record_blood_pressure" : "health_support";
  if (application === "reminders") return "schedule_reminder";
  if (application === "agriculture") return "agriculture_assessment";
  if (application === "live-knowledge") return "show_answer";
  return "show_result";
}

function required(value, label) {
  const normalized = String(value || "").trim();
  if (!normalized) throw new Error(`${label} is required.`);
  return normalized;
}

module.exports = Object.freeze({ APPLICATION_TO_WORKSPACE, APPLICATION_PRESENTATION, createWorkspaceOutcome });
