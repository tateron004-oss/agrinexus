"use strict";

const assert = require("node:assert/strict");
const { NexusVoiceFormController } = require("../nexus-core/voice-form-controller");

const storageData = new Map();
const storage = {
  getItem: (key) => storageData.get(key) || null,
  setItem: (key, value) => storageData.set(key, value)
};
const values = { experience: "", skills: "" };
const fields = () => [
  { key: "experience", label: "Résumé experience", get: () => values.experience, set: (value, append) => { values.experience = append && values.experience ? `${values.experience} ${value}` : value; } },
  { key: "skills", label: "Résumé skills", get: () => values.skills, set: (value, append) => { values.skills = append && values.skills ? `${values.skills} ${value}` : value; } }
];
const receipts = [];
const controller = new NexusVoiceFormController({
  fields,
  storage,
  scope: () => "workforce",
  onReceipt: (receipt) => receipts.push(receipt)
});

assert.equal(controller.handle("Nexus, add supervised a team of eight employees to experience").action, "update");
assert.match(values.experience, /eight employees/);
assert.equal(controller.handle("Nexus, change experience to supervised a team of twelve employees").action, "correct");
assert.match(values.experience, /twelve employees/);
assert.equal(controller.handle("Nexus, add forklift operation and inventory control to skills").action, "update");
assert.match(values.skills, /forklift operation/);

const readback = controller.handle("Nexus, read my resume back");
assert.equal(readback.action, "readback");
assert.match(readback.readback, /twelve employees/);

assert.equal(controller.handle("Nexus, save this resume draft").action, "save");
values.experience = "";
values.skills = "";
assert.equal(controller.handle("Nexus, reopen this resume draft").action, "reopen");
assert.match(values.experience, /twelve employees/);

const guarded = controller.handle("Nexus, submit this application");
assert.equal(guarded.action, "confirmation-required");
assert.equal(guarded.requiresConfirmation, true);
const confirmed = controller.handle("Nexus, confirm");
assert.equal(confirmed.action, "confirm");
assert.equal(confirmed.externalExecution, false);

assert.ok(receipts.some((receipt) => receipt.type === "voice-form.updated"));
assert.ok(receipts.some((receipt) => receipt.type === "voice-form.corrected"));
assert.ok(receipts.some((receipt) => receipt.type === "voice-form.saved"));
assert.ok(receipts.some((receipt) => receipt.type === "voice-form.reopened"));
assert.ok(receipts.some((receipt) => receipt.type === "voice-form.confirmation-required"));
console.log("Nexus clean voice-assisted form entry passed.");
