"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { NexusVoiceFormController } = require("../nexus-core/voice-form-controller");
const {
  guidedEntryProcessForDocument,
  isDraftReopenCommand,
  isGuidedEntryFollowUp,
  shouldPreserveGuidedDocument
} = require("../browser/nexus-clean-entry");

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
assert.equal(controller.handle("Nexus, my skills are irrigation planning and team leadership").action, "update");
assert.equal(values.skills, "irrigation planning and team leadership");

const readback = controller.handle("Nexus, read my resume back");
assert.equal(readback.action, "readback");
assert.match(readback.readback, /twelve employees/);

assert.equal(controller.handle("Nexus, save this resume draft").action, "save");
values.experience = "";
values.skills = "";
const reopened = controller.handle("Nexus, reopen this resume draft", { requestId: "reopen-final-form" });
assert.equal(reopened.action, "reopen");
assert.match(values.experience, /twelve employees/);
assert.equal(reopened.visibleValuesVerified, true);
assert.equal(reopened.committedFormVersion, 1);
assert.deepEqual(reopened.verifiedRestoredFields.map((item) => item.field), ["experience", "skills"]);
assert.equal(
  controller.handle("Nexus, reopen this resume draft", { requestId: "reopen-final-form" }).action,
  "rejected",
  "A duplicate reopen request must not replace the committed form."
);
assert.equal(
  controller.engine.handle("Nexus, reopen this resume draft", {
    requestId: "older-delayed-reopen",
    transactionSequence: 1
  }).action,
  "rejected",
  "An older delayed reopen transaction must not replace the committed form."
);

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
const reopenedReceipt = receipts.find((receipt) => receipt.type === "voice-form.reopened");
assert.equal(reopenedReceipt.detail.requestId, "reopen-final-form");
assert.equal(reopenedReceipt.detail.committedFormVersion, 1);
assert.equal(reopenedReceipt.detail.visibleValuesVerified, true);
assert.deepEqual(reopenedReceipt.detail.verifiedRestoredFields.map((item) => item.field), ["experience", "skills"]);
assert.ok(receipts.some((receipt) => receipt.type === "guided-entry.transaction-rejected"));
assert.ok(receipts.some((receipt) => receipt.type === "voice-form.confirmation-required"));
assert.equal(isDraftReopenCommand("Nexus, reopen this resume draft."), true);
assert.equal(isDraftReopenCommand("Nexus, help me create a resume."), false);
assert.equal(guidedEntryProcessForDocument("resume", "offline"), "workforce");
assert.equal(guidedEntryProcessForDocument("provider-card", "maps"), "health");
assert.equal(guidedEntryProcessForDocument("lesson", "learning"), "learning");
assert.equal(isGuidedEntryFollowUp("Nexus, add forklift operation to skills."), true);
assert.equal(isGuidedEntryFollowUp("Nexus, help me create a resume."), false);
assert.equal(shouldPreserveGuidedDocument({
  activeWorkspace: "workforce",
  activeDocument: "resume",
  requestedWorkspace: "workforce",
  command: "Nexus, add forklift operation to skills.",
  editableFieldCount: 4
}), true, "A routed form follow-up must preserve its active specialized document.");
assert.equal(shouldPreserveGuidedDocument({
  activeWorkspace: "workforce",
  activeDocument: "resume",
  requestedWorkspace: "health",
  command: "Nexus, record blood pressure is 140 over 90.",
  editableFieldCount: 4
}), false, "Switching processes must not preserve the prior document.");
const browserEntry = fs.readFileSync(path.join(__dirname, "../browser/nexus-clean-entry.js"), "utf8");
assert.match(
  browserEntry,
  /const guidedEnvelope = isDraftReopenCommand\(detail\.command\)[\s\S]*guidedEntryController\?\.begin\(detail\.command,[\s\S]*if \(guidedEnvelope && visibleFormFields\(\)\.length > 0\)[\s\S]*guidedEntryController\?\.commit\(guidedEnvelope\)/,
  "The replacement controller must acquire final-screen ownership before rendering and commit the same generation."
);
assert.match(
  browserEntry,
  /if \(specializedIntent && !preserveGuidedDocument\)/,
  "A guided reopen must not permit a competing specialized renderer to replace the authoritative form."
);
assert.match(
  browserEntry,
  /mountGeneration:[\s\S]*guidedEntryGeneration[\s\S]*visibleGeneration:/,
  "The browser must mount and verify the controller's final-screen generation."
);
assert.match(
  browserEntry,
  /if \(!isDraftReopenCommand\(transcript\)[\s\S]*guidedEntryController\?\.execute/,
  "The final transcript path must leave reopen exclusively to the rendered-document transaction."
);
assert.match(
  browserEntry,
  /preserveGuidedDocument[\s\S]*shouldPreserveGuidedDocument[\s\S]*if \(!preserveGuidedDocument\)[\s\S]*renderWorkspace/,
  "Same-process guided-entry tool calls must not replace the active specialized document."
);
assert.match(
  browserEntry,
  /processId:\s*workspace\?\.dataset\?\.guidedEntryProcess[\s\S]*workspace\?\.dataset\?\.workspace/,
  "Guided drafts must use the document's canonical process identity before the route workspace fallback."
);
assert.doesNotMatch(browserEntry, /NexusVoiceFormController/, "The legacy form controller must not own browser commands.");
assert.match(
  browserEntry,
  /const label = labels\[receipt\.type\];\s*if \(!label\) return;/,
  "Generic transaction receipts must not replace an authoritative confirmation-required proof."
);
assert.doesNotMatch(
  browserEntry,
  /labels\[receipt\.type\]\s*\|\|\s*"Voice form updated\."/,
  "Unknown receipt types must not overwrite the visible Guided Entry state."
);
console.log("Nexus clean voice-assisted form entry passed.");
