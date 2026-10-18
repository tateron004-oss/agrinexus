"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const items = require("../../nexus/personal/items.js");
const dispatch = require("../../nexus/business/voice-dispatch.js");
const crm = require("../../nexus/business/crm-voice.js");
const automation = require("../../public/kyro-automation-commands.js");
const { extractAssistantReminderTask } = require("../../nexus/reminders/time-phrase.js");
const { completeRemainingWorkspacePlan } = require("../../nexus/brain/planner.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");

const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const today = "2026-10-17";

// Found by the second off-script voice audit (111 spoken requests in fresh wording, read from the live site): each of these sentences was not understood and answered "I couldn't ...".

test("a closing 'as well', 'too' or 'also' is not part of the list item, and 'what did I jot down about X' finds the note", () => {
  for (const say of ["Put tomatoes on my shopping list as well.", "Add tomatoes to my shopping list too.", "Add tomatoes to my shopping list also"]) assert.deepEqual(items.readRequest(say, today), { action: "todo-add", list: "shopping", text: "tomatoes" }, say);
  for (const [say, query] of [["What did I jot down about the tractor?", "the tractor"], ["What did I write down about the pump?", "the pump"], ["What did I note about the gate?", "the gate"]]) assert.deepEqual(items.readRequest(say, today), { action: "note-find", query }, say);
  assert.deepEqual(items.readRequest("Jot down that the tractor needs diesel.", today), { action: "note-add", text: "tractor needs diesel" });
});

test("'wake me up ... with a reminder to ...' is a reminder: it is routed, and the task is what to do, not the wake-up words", () => {
  const full = { applications: defaultApplicationManifests(), tools: [{ toolId: "reminders.schedule" }] };
  for (const say of ["Wake me up tomorrow at 6 am with a reminder to check the irrigation.", "Set a reminder for tomorrow at 9 am to call the supplier."]) {
    assert.equal(completeRemainingWorkspacePlan(say, full)?.steps[0].toolId, "reminders.schedule", say);
  }
  // (a bare "six" is asked about, never guessed)
  const asked = completeRemainingWorkspacePlan("Wake me up tomorrow at six with a reminder to check the irrigation.", full);
  assert.equal(asked.application, "reminders"); assert.equal(asked.steps.length, 0); assert.match(asked.clarification, /morning or in the evening/);
  assert.equal(extractAssistantReminderTask("Wake me up tomorrow at 6 am with a reminder to check the irrigation."), "check the irrigation.");
  assert.equal(extractAssistantReminderTask("Wake me up at six tomorrow to check the irrigation."), "check the irrigation.");
  assert.equal(extractAssistantReminderTask("Wake me up at 6 am tomorrow."), "Wake me up.", "a plain wake-up with no task is left as it was");
});

test("'send a message to my X automation saying Y' and 'tell my X automation Y' name the automation first and the words after; ordinary messages to people are not automations", () => {
  assert.deepEqual(automation.parseTrigger("Send a message to my sales sheet automation saying new order."), { connection: "sales sheet", text: "new order" });
  assert.deepEqual(automation.parseTrigger("Send a text to my Zapier test automation saying hello"), { connection: "Zapier test", text: "hello" });
  assert.deepEqual(automation.parseTrigger("Tell my sales sheet automation that Grace paid"), { connection: "sales sheet", text: "Grace paid" });
  assert.deepEqual(automation.parseTrigger("Send new customer Grace to my sales sheet automation"), { connection: "sales sheet", text: "new customer Grace" });
  for (const say of ["Send a message to my mother saying hello", "Tell my brother that dinner is ready", "Show my automations"]) assert.equal(automation.parseTrigger(say), null, say);
});

test("'what does my Farm Rules document say?' names the document to open, and nearby questions name none", () => {
  const source = app.slice(app.indexOf("const KYRO_NAMED_DOCUMENT = "), app.indexOf("// Opens the saved document whose title has all of those words"));
  const context = {};
  vm.runInNewContext(`${source}\nthis.named = kyroNamedDocument;`, context);
  assert.equal(context.named("What does my Farm Rules document say?"), "Farm Rules");
  assert.equal(context.named("What's in the Sales Plan file?"), "Sales Plan");
  assert.equal(context.named("Open the Sales Plan document."), "Sales Plan");
  for (const say of ["What is a document?", "What does a document do?", "What is in the document?", "Open documents."]) assert.equal(context.named(say), "", say);
});

test("who is late paying, a rundown of the business, and a grant said as news are understood as the owner's own records", () => {
  for (const say of ["Is anybody late paying me?", "Who is behind on their payments?", "Are my customers slow to pay?"]) assert.equal(dispatch.classify(say), "listInvoices", say);
  for (const say of ["Give me a quick rundown of the business.", "Give me an overview of my nonprofit", "Snapshot of our business"]) assert.equal(dispatch.classify(say), "dashboard", say);
  for (const say of ["We were promised a grant of three thousand dollars from the Hope Foundation due next March.", "I was awarded a grant of 500 dollars from Green Fund"]) assert.equal(dispatch.classify(say), "addGrant", say);
  for (const say of ["Give me an overview of business structures", "What is a business overview?", "Did we get a grant?", "How do I get a grant?", "Is anyone coming to the meeting?"]) assert.ok(!["dashboard", "addGrant", "listInvoices"].includes(dispatch.classify(say)), say);
  assert.equal(crm.classifyCrm("Is anybody late paying me?"), "listInvoices");
});
