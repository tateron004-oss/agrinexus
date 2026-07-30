"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  NexusUniversalGuidedEntryEngine,
  STORE_KEY
} = require("../nexus-core/universal-guided-entry-engine");
const { PROCESS_SCHEMAS } = require("../nexus-core/guided-entry-schemas");

const data = new Map();
const storage = {
  getItem: (key) => data.get(key) || null,
  setItem: (key, value) => data.set(key, value)
};
const state = {
  context: { userId: "ron", processId: "workforce", documentId: "resume-1" },
  values: {}
};
const definitions = {
  workforce: [["experience", "Résumé experience"], ["skills", "Résumé skills"]],
  health: [["reading", "Blood pressure or reading"], ["symptoms", "Symptoms or notes"]],
  telehealth: [["reason", "Reason for visit"], ["provider", "Care provider"]],
  learning: [["topic", "Topic or skill"], ["level", "Learning level"]],
  marketplace: [["product", "Product"], ["quantity", "Quantity"]],
  agriculture: [["subject", "Crop or livestock"], ["observation", "What are you seeing?"]],
  "mobile-clinic": [["location", "Location"], ["careNeeded", "Care needed"]],
  pharmacy: [["medication", "Medication"], ["requestType", "Request type"]]
};
function fieldKey(processId, key) {
  return `${processId}:${key}`;
}
function fields() {
  return definitions[state.context.processId].map(([key, label]) => ({
    key,
    label,
    get: () => state.values[fieldKey(state.context.processId, key)] || "",
    set: (value, append) => {
      const storageKey = fieldKey(state.context.processId, key);
      state.values[storageKey] = append && state.values[storageKey]
        ? `${state.values[storageKey]} ${value}`
        : value;
    }
  }));
}
const receipts = [];
let sequence = 0;
const engine = new NexusUniversalGuidedEntryEngine({
  fields,
  storage,
  context: () => state.context,
  onReceipt: (receipt) => receipts.push(receipt),
  idFactory: () => `tx-${++sequence}`,
  now: () => "2026-07-30T12:00:00.000Z"
});

assert.deepEqual(
  Object.keys(PROCESS_SCHEMAS).sort(),
  ["agriculture", "health", "learning", "marketplace", "mobile-clinic", "pharmacy", "reminders", "telehealth", "workforce"].sort()
);

const scenarios = [
  ["workforce", "resume-1", "Nexus, add supervised eight employees to experience", "experience", "eight employees"],
  ["health", "reading-1", "Nexus, record blood pressure is 140 over 90", "reading", "140 over 90"],
  ["telehealth", "intake-1", "Nexus, enter reason for visit is diabetes follow-up", "reason", "diabetes follow-up"],
  ["learning", "lesson-1", "Nexus, set topic is reading farm instructions", "topic", "reading farm instructions"],
  ["marketplace", "listing-1", "Nexus, enter quantity is 50 bags", "quantity", "50 bags"],
  ["agriculture", "assessment-1", "Nexus, enter crop is maize", "subject", "maize"],
  ["mobile-clinic", "visit-1", "Nexus, enter care needed is blood pressure screening", "careNeeded", "blood pressure screening"],
  ["pharmacy", "questions-1", "Nexus, enter medication is metformin", "medication", "metformin"]
];

for (const [processId, documentId, command, key, expected] of scenarios) {
  state.context = { userId: "ron", processId, documentId };
  const result = engine.handle(command);
  assert.equal(result.action, "update", `${processId} uses the common update transaction`);
  assert.match(state.values[fieldKey(processId, key)], new RegExp(expected, "i"));
  const save = engine.handle(`Nexus, save this ${processId === "marketplace" ? "listing" : "form"} draft`);
  assert.equal(save.action, "save", `${processId} uses the common versioned draft store`);
}

state.context = { userId: "ron", processId: "health", documentId: "reading-1" };
state.values[fieldKey("health", "reading")] = "";
assert.equal(engine.handle("Nexus, reopen this intake draft").action, "reopen");
assert.equal(state.values[fieldKey("health", "reading")], "140 over 90");

state.context = { userId: "ron", processId: "workforce", documentId: "resume-1" };
assert.equal(engine.handle("Nexus, change experience to supervised twelve employees").action, "correct");
assert.match(state.values[fieldKey("workforce", "experience")], /twelve/);
assert.equal(engine.handle("Nexus, undo the last change").action, "undo");
assert.match(state.values[fieldKey("workforce", "experience")], /eight/);

state.context = { userId: "ron", processId: "health", documentId: "reading-1" };
const guarded = engine.handle("Nexus, submit this intake");
assert.equal(guarded.action, "confirmation-required");
assert.equal(guarded.requiresConfirmation, true);
assert.ok(guarded.missingFields.includes("symptoms"));
assert.equal(engine.handle("Nexus, confirm").externalExecution, false);

state.context = { userId: "ron", processId: "marketplace", documentId: "listing-1" };
engine.handle("Nexus, enter product is maize");
engine.handle("Nexus, save this listing draft");
state.context = { userId: "ron", processId: "health", documentId: "reading-1" };
state.values[fieldKey("health", "reading")] = "";
engine.handle("Nexus, reopen this intake draft");
assert.equal(state.values[fieldKey("health", "reading")], "140 over 90", "marketplace data cannot contaminate health");
assert.notEqual(state.values[fieldKey("health", "reading")], "maize");

state.context = { userId: "ron", processId: "workforce", documentId: "resume-natural-language" };
assert.equal(engine.handle("Nexus, my skills are forklift operation and inventory control").action, "update");
assert.equal(state.values[fieldKey("workforce", "skills")], "forklift operation and inventory control");
assert.equal(engine.handle("Nexus, skills are farm equipment and team leadership").action, "update");
assert.equal(state.values[fieldKey("workforce", "skills")], "farm equipment and team leadership");
assert.equal(engine.handle("Nexus, add crop planning to my skills").action, "update");
assert.match(state.values[fieldKey("workforce", "skills")], /crop planning/);

state.context = { userId: "different-user", processId: "health", documentId: "reading-1" };
assert.equal(engine.handle("Nexus, reopen this intake draft").handled, false, "drafts are isolated by user");

const records = JSON.parse(data.get(STORE_KEY));
assert.ok(Object.keys(records).every((key) => key.split("::").length === 4));
assert.ok(receipts.every((receipt) => receipt.detail.userId && receipt.detail.processId && receipt.detail.documentId));
assert.ok(receipts.some((receipt) => receipt.type === "guided-entry.context-switched"));
assert.ok(receipts.some((receipt) => receipt.detail.visiblySynchronized === true));
assert.ok(receipts.some((receipt) => receipt.detail.draftVersion >= 1));

const browserHtml = fs.readFileSync(path.join(__dirname, "../browser/index.html"), "utf8");
const browserEntry = fs.readFileSync(path.join(__dirname, "../browser/nexus-clean-entry.js"), "utf8");
const cleanServer = fs.readFileSync(path.join(__dirname, "../server.js"), "utf8");
assert.match(browserHtml, /id="nexus-guided-entry"/, "typed guided entry must be visible in every active workspace");
assert.match(
  browserEntry,
  /guidedEntryForm\.addEventListener\("submit"[\s\S]*guidedEntryController\.execute\(command\)/,
  "typed and spoken updates must use the same guided entry controller"
);
assert.match(
  browserEntry,
  /NexusGuidedEntryTransactionController/,
  "The browser must use the replacement single-owner transaction controller."
);
assert.match(browserEntry, /processId:[\s\S]*documentId:/, "browser adapter must bind process and document identity");
assert.match(
  browserEntry,
  /activeWorkspaceRequest[\s\S]*request-superseded[\s\S]*ownsWorkspace/,
  "one authoritative request must own the visible workspace"
);
assert.match(
  browserEntry,
  /stagedAppSurface[\s\S]*if \(!ownsWorkspace\(\)\) return;[\s\S]*replaceChildren/,
  "slow specialized visuals must stage output and commit only while they own the workspace"
);
assert.match(cleanServer, /userId:\$\{JSON\.stringify\(issued\.session\.userId\)\}/, "authenticated user identity must survive session renewal");

console.log("Nexus Universal Guided Entry Engine passed across eight process adapters.");
