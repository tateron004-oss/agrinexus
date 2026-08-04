"use strict";

const assert = require("node:assert/strict");
const { routeCommand } = require("../nexus-core/router");
const journeys = require("./fixtures/nexus-production-lifecycle-journeys");

let routedTurns = 0;
for (const journey of journeys) {
  let context = null;
  for (const [index, prompt] of journey.prompts.entries()) {
    const result = routeCommand(prompt, "connected", context);
    const expectedWorkspace = journey.id === "mobile-clinic" && index >= 2 ? "maps" : journey.id;
    assert.equal(result.accepted, true, `${journey.id} turn ${index + 1} did not route: ${prompt}`);
    assert.equal(result.workspace, expectedWorkspace, `${journey.id} turn ${index + 1} escaped its active lifecycle: ${prompt}`);
    routedTurns += 1;
    context = {
      activeWorkspace: result.workspace,
      parameters: result.parameters,
      transactionId: `${journey.id}-${index + 1}`,
      visual: {
        workspace: result.workspace,
        outcomeKind: "application",
        surfaceId: `${journey.id}-surface-${index + 1}`,
        summary: `${journey.title || journey.id} visible result`,
        items: ["First result", "Second result", "Third result"],
        selectedItem: null,
        viewport: null,
        sourceIds: ["source-1", "source-2", "source-3"],
        availableActions: ["inspect", "revise", "save", "close", "reopen"]
      }
    };
  }
}

assert.equal(routedTurns, 65);
console.log("Nexus production lifecycle routing: PASS (65 natural multi-turn requests across 13 lanes)");
