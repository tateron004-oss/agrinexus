"use strict";

const assert = require("node:assert/strict");
const { routeCommand } = require("../nexus-core/router");
const {
  createConversationContext,
  rememberCompletedTurn
} = require("../nexus-core/conversation-context");

function completed(context, command, transactionId, visualContext = null) {
  const resolution = routeCommand(command, "connected", context);
  assert.equal(resolution.accepted, true, command);
  return {
    resolution,
    context: rememberCompletedTurn(context, {
      ...resolution,
      transactionId,
      acknowledgement: { visualContext }
    })
  };
}

let context = createConversationContext();
const mapVisual = {
  workspace: "maps",
  outcomeKind: "map",
  surfaceId: "map-surface-1",
  summary: "Map centered on Mombasa, Kenya",
  items: ["Mombasa", "Mombasa County"],
  selectedItem: "Mombasa"
};
let turn = completed(context, "Show me a map of Mombasa, Kenya", "map-1", mapVisual);
context = turn.context;
assert.equal(context.activeWorkspace, "maps");
assert.equal(context.visual.surfaceId, "map-surface-1");

let followUp = routeCommand("What does this marker show?", "connected", context);
assert.equal(followUp.workspace, "maps");
assert.equal(followUp.visualFollowUp, true);
assert.equal(followUp.visualReference.action, "explain");
assert.equal(followUp.visualReference.surfaceId, "map-surface-1");

followUp = routeCommand("Open the second result", "connected", context);
assert.equal(followUp.workspace, "maps");
assert.equal(followUp.visualFollowUp, true);
assert.equal(followUp.visualReference.ordinal, "second");

followUp = routeCommand("Now zoom out to see all of Kenya", "connected", context);
assert.equal(followUp.workspace, "maps");
assert.equal(followUp.contextual, true);
assert.equal(followUp.parameters.place, "Kenya");
assert.equal(followUp.previousTransactionId, "map-1");

turn = completed(context, "Now zoom out to see all of Kenya", "map-2");
context = turn.context;
followUp = routeCommand("What about Abuja, Nigeria on the map?", "connected", context);
assert.equal(followUp.workspace, "maps");
assert.equal(followUp.parameters.place, "Abuja, Nigeria");

const explicitSwitch = routeCommand("Show me today's weather in Nairobi, Kenya", "connected", context);
assert.equal(explicitSwitch.workspace, "live-knowledge");
assert.equal(explicitSwitch.contextual, false);

const staleWorkforceContext = completed(
  createConversationContext(),
  "Search farming jobs in Kenya",
  "workforce-stale"
).context;
const explicitAgricultureReopen = routeCommand(
  "Nexus, reopen Agriculture Help and keep the visible workspace synchronized.",
  "connected",
  staleWorkforceContext
);
assert.equal(explicitAgricultureReopen.workspace, "agriculture");
assert.equal(explicitAgricultureReopen.contextual, false);

context = rememberCompletedTurn(context, { ...explicitSwitch, transactionId: "weather-1" });
followUp = routeCommand("What about tomorrow?", "connected", context);
assert.equal(followUp.workspace, "live-knowledge");
assert.equal(followUp.contextual, true);
assert.equal(followUp.previousTransactionId, "weather-1");

followUp = routeCommand("Why will it change?", "connected", context);
assert.equal(followUp.workspace, "live-knowledge");
assert.equal(followUp.contextual, true);

followUp = routeCommand("Tell me more about that", "connected", context);
assert.equal(followUp.workspace, "live-knowledge");
assert.equal(followUp.contextual, true);

const unrelatedConversation = routeCommand("Tell me a story about courage", "connected", context);
assert.equal(unrelatedConversation.accepted, false);
assert.equal(unrelatedConversation.code, "conversation");

const noContext = routeCommand("What about Abuja?", "connected", createConversationContext());
assert.equal(noContext.accepted, true);
assert.equal(noContext.workspace, "live-knowledge");
assert.equal(noContext.contextual, false);
assert.equal(noContext.code, "workspace-route-resolved");

const sequences = [
  {
    first: "Sell 50 bags of maize in Kenya",
    followUp: "Change it to 25 bags of maize",
    workspace: "marketplace",
    expected: { action: "sell", quantity: 25, product: "maize", location: "Kenya" }
  },
  {
    first: "Record my blood pressure as 140 over 90",
    followUp: "And now record 150 over 95",
    workspace: "health",
    expected: { action: "record-reading", bloodPressure: { systolic: 150, diastolic: 95 } }
  },
  {
    first: "Play Kenyan music",
    followUp: "Make it gospel music",
    workspace: "music",
    expected: { action: "play", query: "gospel" }
  },
  {
    first: "Show today's weather in Nairobi, Kenya",
    followUp: "What about tomorrow?",
    workspace: "live-knowledge",
    expected: { action: "weather", location: "Nairobi, Kenya" }
  }
];

const visualWorkflows = [
  ["agriculture", "Help me diagnose my maize crop", "What does the second picture show?"],
  ["health", "Record my blood pressure as 140 over 90", "Explain this reading"],
  ["telehealth", "Start a telehealth intake", "Open the next section"],
  ["mobile-clinic", "Find a mobile clinic visit", "Which one is closest?"],
  ["pharmacy", "Open pharmacy support", "Explain that medication card"],
  ["learning", "Find a literacy course", "Open the second course"],
  ["workforce", "Search farming jobs in Kenya", "Tell me more about this job"],
  ["marketplace", "Sell 50 bags of maize in Kenya", "Change this listing to 25 bags"],
  ["maps", "Show me a map of Mombasa, Kenya", "What does that marker show?"],
  ["music", "Play Kenyan music", "Play the next one"],
  ["reminders", "Remind me to take my medicine", "Change this reminder to tomorrow"],
  ["offline", "Show my offline queue", "Open the first item"],
  ["live-knowledge", "Search the internet for Kenya weather", "Open the second source"]
];

for (const [workspace, first, follow] of visualWorkflows) {
  const visual = {
    workspace,
    outcomeKind: "application",
    surfaceId: `${workspace}-surface`,
    summary: `${workspace} visible result`,
    items: ["First result", "Second result"]
  };
  const active = completed(createConversationContext(), first, `${workspace}-1`, visual).context;
  const result = routeCommand(follow, "connected", active);
  assert.equal(result.workspace, workspace, follow);
  assert.equal(result.contextual, true, follow);
  assert.equal(result.visualFollowUp, true, follow);
  assert.equal(result.visualContext.surfaceId, `${workspace}-surface`, follow);
}

for (const [index, sequence] of sequences.entries()) {
  const first = completed(createConversationContext(), sequence.first, `sequence-${index}`).context;
  const result = routeCommand(sequence.followUp, "connected", first);
  assert.equal(result.workspace, sequence.workspace, sequence.followUp);
  assert.equal(result.contextual, true, sequence.followUp);
  for (const [key, value] of Object.entries(sequence.expected)) {
    assert.deepEqual(result.parameters[key], value, `${sequence.followUp}: ${key}`);
  }
}

console.log("Nexus multi-turn conversation context: PASS");
