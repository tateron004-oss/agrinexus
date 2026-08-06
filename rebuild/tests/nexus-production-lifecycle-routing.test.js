"use strict";

const assert = require("node:assert/strict");
const { routeCommand } = require("../nexus-core/router");
const { PRODUCTION_CAPABILITY_REGISTRY } = require("../nexus-core/production-capability-registry");
const journeys = require("./fixtures/nexus-production-lifecycle-journeys");
const registeredRoutes = new Set(PRODUCTION_CAPABILITY_REGISTRY.map(entry => entry.route));

let routedTurns = 0;
for (const journey of journeys) {
  let context = null;
  for (const [index, prompt] of journey.prompts.entries()) {
    const result = routeCommand(prompt, "connected", context);
    assert.equal(result.accepted, true, `${journey.id} turn ${index + 1} did not route: ${prompt}`);
    assert.ok(registeredRoutes.has(result.workspace), `${journey.id} turn ${index + 1} routed outside the capability registry: ${result.workspace}`);
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

assert.equal(routedTurns, 105);
console.log("Nexus production lifecycle routing: PASS (105 natural multi-turn requests across 21 lanes)");
