"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const commands = require("../../public/kyro-automation-commands.js");
const businessVoice = require("../../nexus/business/voice-dispatch.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");

// Found by the first voice test of automations on the live site (21 October):
//  1. "I want to connect Zapier" was taken for a general workflow request and asked for a confirmation, because the automation words only accepted "connect Zapier" without an opening like "I want to".
//  2. "Send new customer Grace to my sales sheet automation" was answered by the business record book ("You have no business or nonprofit workspace yet"), because "new customer" read as adding a customer.

test("the ways people begin a sentence, 'I want to', 'I'd like to', 'let me', 'help me', are understood in front of an automation request", () => {
  for (const said of ["I want to connect Zapier.", "I want to connect Zapier", "I would like to set up Zapier", "I'd like to connect Make", "connect to Zapier", "Kyro, connect with Zapier", "Can you connect my account to Zapier?",
    "let me connect Make", "help me set up an automation", "I need to link up n8n", "please connect Kyro to IFTTT", "open automations", "connect Zapier", "I want to set up an automation"])
    assert.equal(commands.isOpen(said), true, said);
  for (const said of ["I want to connect with my friend", "connect me to the cooperative", "I want to make a plan", "show my automations", "connect my sales sheet to maize", "I want to sell maize", "help me with my crops"])
    assert.equal(commands.isOpen(said), false, said);
  assert.deepEqual({ ...commands.parseTrigger("I want to send new customer Grace to my sales sheet automation") }, { connection: "sales sheet", text: "new customer Grace" });
  assert.deepEqual({ ...commands.parseTrigger("Kyro, please test my sales sheet automation") }, { connection: "sales sheet", text: "Test from Kyro" });
  assert.equal(commands.isList("Can you show my automations"), true);
});

test("the business record book never takes an automation sentence, and still takes its own", () => {
  for (const said of ["Send new customer Grace to my sales sheet automation", "I want to send new customer Grace to my sales sheet automation", "Add new lead Joseph to my leads zap", "show my automations", "connect Zapier", "open automations"])
    assert.ok(!businessVoice.classify(said), said);
  assert.equal(businessVoice.classify("Add a customer named Grace"), "addLead");
  assert.equal(businessVoice.classify("show my customers"), "listLeads");
});

const sheet = { record_id: "rec_1", version: 1, created_at: "2026-10-16T00:00:00Z", provenance: {}, data: { name: "Sales sheet", url: "https://hooks.zapier.com/hooks/catch/123/abc/", host: "hooks.zapier.com", secret: "s3cret" } };
function planner({ connected, workspaces }) {
  return new OpenEndedPlanner({
    model: { plan: async () => { throw new Error("the AI model must not be asked"); } },
    automationRecords: { list: async () => (connected ? [sheet] : []) },
    businessWorkspaces: { count: async () => workspaces },
    tools: { list: async () => [{ tool_id: "automations.trigger", domain: "automations", description: "", risk_tier: "regulated", confirmation_required: true }] },
    applications: { list: () => [{ applicationId: "communications", capabilities: ["automations.trigger"], riskTiers: ["regulated"] }] },
    memory: { recent: async () => [], search: async () => [] }
  });
}
const ask = (instance, text) => instance.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en" }, context: { timeZone: "America/Chicago" } });

test("through the planner, for a person with no business workspace: a send to a connected automation is planned, an unknown one is said plainly, and the list answers; the workspace reply is not used", async () => {
  const withSheet = planner({ connected: true, workspaces: 0 });
  const send = await ask(withSheet, "Send new customer Grace to my sales sheet automation");
  assert.equal(send.application, "communications");
  assert.deepEqual(send.steps.map(step => [step.toolId, step.input]), [["automations.trigger", { connection: "Sales sheet", text: "new customer Grace" }]]);
  const spokenWay = await ask(withSheet, "I want to send new customer Grace to my sales sheet automation");
  assert.equal(spokenWay.steps[0]?.toolId, "automations.trigger");
  const none = planner({ connected: false, workspaces: 0 });
  const unknown = await ask(none, "Send new customer Grace to my sales sheet automation");
  assert.match(unknown.response, /could not find an automation called sales sheet, so nothing was sent/);
  assert.doesNotMatch(unknown.response, /business or nonprofit workspace/);
  assert.match((await ask(none, "Show my automations")).response, /no automations connected yet/);
  assert.equal(await none.noBusinessWorkspaceAnswer("Send new customer Grace to my sales sheet automation", {}), null);
});

test("a person with no workspace who really means a customer is still told so", async () => {
  const none = planner({ connected: false, workspaces: 0 });
  assert.match(String(await none.noBusinessWorkspaceAnswer("Add a customer named Grace", {})), /no business or nonprofit workspace/);
});
