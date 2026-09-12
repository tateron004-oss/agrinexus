"use strict";

const assert = require("node:assert/strict");
const { routeCommand } = require("../nexus-core/router");
const {
  ApprovedEvidenceService
} = require("../nexus-core/approved-evidence-service");
const {
  classifyEvidenceDomain
} = require("../nexus-core/approved-source-registry");

const question = "Nexus, how do I cook an apple pie?";
const classification = classifyEvidenceDomain(question);
assert.equal(classification.key, "culinary");
assert.ok(classification.approvedDomains.includes("kingarthurbaking.com"));

const routed = routeCommand(question, "connected");
assert.equal(routed.workspace, "live-knowledge");

const searched = [];
const receipts = new Map();
const service = new ApprovedEvidenceService({
  searchProvider: async (request) => {
    searched.push(request);
    return {
      provider: "certification-provider",
      results: [
        {
          title: "Apple Pie Recipe",
          url: "https://www.kingarthurbaking.com/recipes/apple-pie-recipe",
          content: "Prepare the pastry and apple filling, assemble the pie, then bake until the crust is golden and the filling bubbles."
        },
        {
          title: "Four Steps to Food Safety",
          url: "https://www.foodsafety.gov/keep-food-safe/4-steps-to-food-safety",
          content: "Clean hands and surfaces before preparing food and keep ingredients handled safely."
        }
      ]
    };
  },
  receiptStore: {
    save(receipt) {
      receipts.set(receipt.id, receipt);
      return receipt;
    },
    get(id) {
      return receipts.get(id) || null;
    }
  },
  now: () => new Date("2026-07-29T12:00:00.000Z")
});

(async () => {
  const recipe = await service.research({ question });
  assert.equal(searched[0].domain, "culinary");
  assert.equal(recipe.status, "cross-source-verified");
  assert.equal(recipe.sources.length, 2);
  assert.match(recipe.summary, /pastry and apple filling/i);
  assert.doesNotMatch(recipe.summary, /google|yahoo|new (browser )?tab/i);

  const nextStep = await service.research({
    question: "Walk me through the next step.",
    parentReceiptId: recipe.id
  });
  assert.equal(nextStep.parentReceiptId, recipe.id);
  assert.match(nextStep.effectiveQuestion, /Follow-up to: Nexus, how do I cook an apple pie\?/);

  console.log("Nexus internal internet answer and guided recipe context passed.");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
