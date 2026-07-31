"use strict";

const assert = require("node:assert/strict");
const { NexusGuidedEntryTransactionController } = require("../nexus-core/guided-entry-transaction-controller");

const data = new Map();
const storage = {
  getItem: (key) => data.get(key) || null,
  setItem: (key, value) => data.set(key, value)
};
const values = { experience: "", skills: "" };
const fields = () => [
  { key: "experience", label: "Résumé experience", get: () => values.experience, set: (value) => { values.experience = value; } },
  { key: "skills", label: "Résumé skills", get: () => values.skills, set: (value) => { values.skills = value; } }
];
const receipts = [];
let releaseRender;
let delayRender = false;
let visibleGeneration = null;
let replaceGenerationDuringSettle = false;
const controller = new NexusGuidedEntryTransactionController({
  fields,
  storage,
  context: () => ({ userId: "ron", processId: "workforce", documentId: "resume" }),
  onReceipt: (receipt) => receipts.push(receipt),
  idFactory: (() => { let id = 0; return () => `tx-${++id}`; })(),
  ensureAuthoritativeDocument: async () => {
    if (delayRender) await new Promise((resolve) => { releaseRender = resolve; });
    return true;
  },
  mountGeneration: (envelope) => { visibleGeneration = envelope.generationId; },
  visibleGeneration: () => visibleGeneration,
  settleVisibleDocument: async () => {
    if (replaceGenerationDuringSettle) visibleGeneration = "late-competing-render";
  }
});

(async () => {
  await controller.execute("Nexus, add led a team of eight employees to experience", { requestId: "update-1" });
  await controller.execute("Nexus, add forklift operation to skills", { requestId: "update-2" });
  await controller.execute("Nexus, save this resume draft", { requestId: "save-1" });
  values.experience = "";
  values.skills = "";
  const reopened = await controller.execute("Nexus, reopen this resume draft", { requestId: "reopen-1" });
  assert.equal(reopened.action, "reopen");
  assert.equal(reopened.visibleValuesVerified, true);
  assert.match(values.experience, /eight employees/);
  assert.match(values.skills, /forklift/);
  const receipt = receipts.find((item) => item.type === "voice-form.reopened");
  assert.equal(receipt.schema, "nexus.guided-entry.transaction-receipt.v2");
  assert.equal(receipt.detail.requestId, "reopen-1");
  assert.equal(receipt.detail.visibleValuesVerified, true);
  assert.equal(receipt.detail.visibleValues.experience, values.experience);

  const duplicate = await controller.execute("Nexus, reopen this resume draft", { requestId: "reopen-1" });
  assert.equal(duplicate.action, "rejected");
  assert.equal(duplicate.reason, "duplicate-request");

  delayRender = true;
  const stalePromise = controller.execute("Nexus, reopen this resume draft", { requestId: "reopen-old" });
  await Promise.resolve();
  delayRender = false;
  const current = await controller.execute("Nexus, reopen this resume draft", { requestId: "reopen-new" });
  assert.equal(current.action, "reopen");
  releaseRender();
  const stale = await stalePromise;
  assert.equal(stale.action, "rejected");
  assert.equal(stale.reason, "superseded-during-render");

  replaceGenerationDuringSettle = true;
  const replaced = await controller.execute("Nexus, reopen this resume draft", { requestId: "reopen-replaced" });
  assert.equal(replaced.action, "rejected");
  assert.equal(replaced.reason, "visible-generation-replaced");
  assert.ok(receipts.some((item) => (
    item.type === "guided-entry.transaction-rejected"
    && item.detail.generationId === "reopen-replaced:generation"
  )));

  controller.cancelAll();
  assert.ok(receipts.some((item) => item.type === "guided-entry.transaction-cancelled"));
  console.log("Nexus Guided Entry v2 single-owner transaction controller passed.");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
