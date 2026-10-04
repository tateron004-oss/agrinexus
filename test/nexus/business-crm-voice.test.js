"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const voiceDispatch = require("../../nexus/business/voice-dispatch.js");
const { classifyCrm } = require("../../nexus/business/crm-voice.js");

const { classify, precheck, run, extractTaskArgs, extractGrantArgs, isReadIntent } = voiceDispatch;

// The business assistant could ADD a customer, an invoice or a task by voice but not read any of them back, mark an invoice paid or set a follow-up day -- those only existed on
// the Business services web page. "Who are my customers", "who owes me money" and "mark invoice INV-1001 as paid" went to the general AI, which has no access to the workspace.
// Also: a due date or grant deadline said by voice ("Friday") was stored as the WORD, and the reminder sweeps only read real dates, so those reminders never fired.

const TODAY_ZONE = "Africa/Nairobi";
function workspace(overrides = {}) {
  const editable = {
    leads: [
      { name: "Grace Otieno", contact: "+254712345678", type: "customer", need: "", stage: "new", nextAction: "", followUpDate: "" },
      { name: "John Kamau", contact: "", type: "customer", need: "", stage: "new", nextAction: "", followUpDate: "" },
      { name: "Hope Church Trust", contact: "", type: "donor", need: "", stage: "new", nextAction: "", followUpDate: "" },
      { name: "Amina Hassan", contact: "", type: "volunteer", need: "", stage: "new", nextAction: "", followUpDate: "" }
    ],
    invoices: [
      { invoiceNumber: "INV-1001", clientName: "Grace Otieno", date: "2026-10-01", dueDate: "", notes: "", status: "draft" },
      { invoiceNumber: "INV-1002", clientName: "John Kamau", date: "2026-10-02", dueDate: "", notes: "", status: "paid" },
      { invoiceNumber: "INV-1003", clientName: "John Kamau", date: "2026-10-03", dueDate: "", notes: "", status: "sent" }
    ],
    invoiceItems: [
      { invoiceNumber: "INV-1001", description: "maize", quantity: 5, unitPrice: 500, currency: "KES" },
      { invoiceNumber: "INV-1002", description: "beans", quantity: 2, unitPrice: 1000, currency: "KES" },
      { invoiceNumber: "INV-1003", description: "seed", quantity: 1, unitPrice: 1500, currency: "KES" },
      { invoiceNumber: "INV-1003", description: "freight", quantity: 1, unitPrice: 20, currency: "USD" }
    ],
    grants: [{ funderName: "County Fund", program: "Water", amount: 200000, currency: "KES", deadline: "2026-11-01", status: "researching", notes: "" }],
    tasks: [{ title: "Call the vet", status: "todo", dueDate: "2026-10-09", assignee: "Juma", priority: "medium" }, { title: "Order seed", status: "done", dueDate: "", assignee: "", priority: "medium" }],
    appointments: [{ title: "Vet visit", start: "Friday at 10" }],
    transactions: [], listings: [], ...overrides.editable
  };
  const client = { record_id: "rec_1", version: 4, data: { info: { businessName: "Mama Grace Shop" }, editable } };
  const saves = [];
  const businessRequest = async ({ method, body }) => {
    if (method === "GET") return { body: { clients: [client] } };
    saves.push(body);
    client.version += 1; client.data = { ...client.data, editable: body.editable };
    return { body: client };
  };
  return { client, saves, businessRequest };
}
const say = (ws, command, confirmed = true) => run({ command, confirmed, businessRequest: ws.businessRequest, timeZone: TODAY_ZONE });

test("the phrases are recognised, and look-alikes are not", () => {
  const yes = { listLeads: ["list my customers", "Who are my customers?", "show me my leads", "how many customers do I have", "what donors do I have"], listInvoices: ["list my invoices", "what invoices are unpaid", "who owes me money", "which invoices have not been paid"], markInvoicePaid: ["Mark invoice INV-1001 as paid", "mark invoice 1001 as paid", "INV-1001 has been paid", "Grace Otieno paid her invoice"], setFollowUp: ["set a follow-up for Grace Otieno on Friday", "follow up with Grace Otieno on Friday"], listGrants: ["what grants do I have"], listAppointments: ["list my appointments"], listTasks: ["what tasks do I have"] };
  for (const [intent, phrases] of Object.entries(yes)) for (const phrase of phrases) { assert.equal(classifyCrm(phrase), intent, phrase); assert.equal(classify(phrase), intent, `classify: ${phrase}`); }
  for (const phrase of ["add a customer named Grace", "create an invoice for Grace Otieno", "generate an invoice pdf", "show me my income this month", "how much did I spend on seed", "add a task to call the vet", "schedule an appointment with the vet on Monday", "What is the weather", "show my contacts", "I paid the invoice yesterday", "how many customers did I sell to", "how many customers did I get this month", "show my listings"]) {
    assert.equal(classifyCrm(phrase), null, phrase);
  }
  assert.equal(isReadIntent("listInvoices"), true); assert.equal(isReadIntent("markInvoicePaid"), false);
  assert.equal(precheck("who owes me money", {}).toolId, "business.query");
  assert.equal(precheck("mark invoice INV-1001 as paid", {}).toolId, "business.manage");
});

test("customers and leads are read back by voice, by type, with follow-up days", async () => {
  const ws = workspace();
  assert.equal((await say(ws, "who are my customers")).response, '"Mama Grace Shop" has 2 customers: Grace Otieno and John Kamau.');
  assert.equal((await say(ws, "how many donors do I have")).response, '"Mama Grace Shop" has 1 donor: Hope Church Trust.');
  assert.match((await say(ws, "show me my leads")).response, /^"Mama Grace Shop" has 4 leads: Grace Otieno, John Kamau, Hope Church Trust and Amina Hassan\.$/);
  assert.match((await say(ws, "list my landlords")).response, /has no landlords yet/);
  ws.client.data.editable.leads[0].followUpDate = "2099-01-05";
  assert.match((await say(ws, "who are my customers")).response, /Grace Otieno \(follow up .*\)/);
});

test("invoices are read back, and 'who owes me money' adds up what is unpaid per currency", async () => {
  const ws = workspace();
  const all = (await say(ws, "list my invoices")).response;
  assert.match(all, /has 3 invoices: INV-1001 for Grace Otieno, KES 2,500, not paid; INV-1002 for John Kamau, KES 2,000, paid; and INV-1003 for John Kamau, KES 1,500 and \$20\.00, not paid/);
  const owed = (await say(ws, "who owes me money")).response;
  assert.match(owed, /^2 invoices in "Mama Grace Shop" not marked paid: INV-1001 for Grace Otieno, KES 2,500; and INV-1003 for John Kamau, KES 1,500 and \$20\.00\./);
  assert.match(owed, /In all, KES 4,000 and \$20\.00 has not been paid yet\./);
  const paidUp = workspace({ editable: { invoices: [{ invoiceNumber: "INV-1", clientName: "A", status: "paid", date: "", dueDate: "", notes: "" }], invoiceItems: [] } });
  assert.equal((await say(paidUp, "what invoices are unpaid")).response, 'Every invoice in "Mama Grace Shop" is marked paid.');
  assert.match((await say(workspace({ editable: { invoices: [], invoiceItems: [] } }), "list my invoices")).response, /has no invoices yet/);
});

test("grants, appointments and tasks are read back; tasks default to what is still open", async () => {
  const ws = workspace();
  assert.match((await say(ws, "what grants do I have")).response, /is tracking 1 grant: County Fund \(Water\), KES 200,000, researching, deadline 2026-11-01\./);
  assert.match((await say(ws, "list my appointments")).response, /has 1 appointment: Vet visit on Friday at 10\./);
  const open = (await say(ws, "what tasks do I have")).response;
  assert.match(open, /has 1 open task: Call the vet, due .*, for Juma\./);
  assert.doesNotMatch(open, /Order seed/);
  assert.match((await say(ws, "list all my tasks")).response, /has 2 tasks:/);
});

test("marking an invoice paid asks first, then changes only that invoice", async () => {
  const ws = workspace();
  const ask = await say(ws, "mark invoice INV-1001 as paid", false);
  assert.equal(ask.status, "needs-confirmation");
  assert.match(ask.response, /I can mark invoice INV-1001 for Grace Otieno \(KES 2,500\) as paid in "Mama Grace Shop"\. Should I go ahead\?/);
  assert.equal(ws.saves.length, 0, "nothing is saved before the yes");
  const done = await say(ws, "mark invoice INV-1001 as paid", true);
  assert.equal(done.status, "completed");
  assert.match(done.response, /^Marked invoice INV-1001 for Grace Otieno \(KES 2,500\) as paid in "Mama Grace Shop"\.$/);
  assert.deepEqual(ws.client.data.editable.invoices.map(item => [item.invoiceNumber, item.status]), [["INV-1001", "paid"], ["INV-1002", "paid"], ["INV-1003", "sent"]]);
  assert.equal(ws.saves.length, 1);
  assert.equal(ws.saves[0].editable.invoiceItems.length, 4, "nothing else is lost");
});

test("an invoice is found by number in several spoken forms, or by the client's name; unclear or unknown ones ask", async () => {
  for (const phrase of ["mark invoice 1001 as paid", "INV-1001 has been paid", "set invoice INV-1001 to paid", "Mark INV-1001 as paid"]) {
    const ws = workspace(); const reply = await say(ws, phrase);
    assert.match(reply.response, /Marked invoice INV-1001/, phrase);
  }
  const byName = workspace(); assert.match((await say(byName, "Grace Otieno paid her invoice")).response, /Marked invoice INV-1001 for Grace Otieno/);
  const two = workspace({ editable: { invoices: [{ invoiceNumber: "INV-1", clientName: "Grace Otieno", status: "sent", date: "", dueDate: "", notes: "" }, { invoiceNumber: "INV-2", clientName: "Grace Otieno", status: "sent", date: "", dueDate: "", notes: "" }], invoiceItems: [] } });
  const ambiguous = await say(two, "Grace Otieno paid her invoice");
  assert.equal(ambiguous.status, "needs-input"); assert.match(ambiguous.response, /Grace Otieno has 2 invoices: INV-1 and INV-2\. Which one/);
  assert.equal(two.saves.length, 0);
  const unknown = workspace(); const none = await say(unknown, "mark invoice INV-9999 as paid");
  assert.equal(none.status, "needs-input"); assert.match(none.response, /could not find that invoice/); assert.equal(unknown.saves.length, 0);
  const already = workspace(); const again = await say(already, "mark invoice INV-1002 as paid");
  assert.equal(again.status, "completed"); assert.match(again.response, /already marked paid/); assert.equal(already.saves.length, 0);
});

test("a follow-up day is set on the right person as a real date, after a yes", async () => {
  const ws = workspace();
  const ask = await say(ws, "set a follow-up for Grace Otieno on 15 October 2099", false);
  assert.equal(ask.status, "needs-confirmation"); assert.match(ask.response, /I can set a follow-up with Grace Otieno for .* in "Mama Grace Shop"\. Should I go ahead\?/);
  assert.equal(ws.saves.length, 0);
  const done = await say(ws, "set a follow-up for Grace Otieno on 15 October 2099", true);
  assert.equal(done.status, "completed"); assert.match(done.response, /^Set a follow-up with Grace Otieno for .* I will remind you when it is due\.$/);
  assert.deepEqual(ws.client.data.editable.leads.map(lead => [lead.name, lead.followUpDate]), [["Grace Otieno", "2099-10-15"], ["John Kamau", ""], ["Hope Church Trust", ""], ["Amina Hassan", ""]]);
  const bare = workspace(); const bareDone = await say(bare, "follow up with John Kamau on 2099-03-02", true);
  assert.equal(bare.client.data.editable.leads[1].followUpDate, "2099-03-02", bareDone.response);
});

test("a follow-up that cannot be set asks the right question and saves nothing", async () => {
  const ws = workspace();
  const noDay = await say(ws, "set a follow-up for Grace Otieno"); assert.equal(noDay.status, "needs-input"); assert.match(noDay.response, /Which day should I set the follow-up with Grace Otieno for/);
  const unknown = await say(ws, "set a follow-up for Nobody Known on Friday"); assert.equal(unknown.status, "needs-input"); assert.match(unknown.response, /could not find that person.*Grace Otieno/);
  const past = await say(ws, "set a follow-up for Grace Otieno on 2020-01-01"); assert.equal(past.status, "needs-input"); assert.match(past.response, /already passed/);
  assert.equal(ws.saves.length, 0);
  const empty = workspace({ editable: { leads: [] } }); assert.match((await say(empty, "set a follow-up for Grace on Friday")).response, /no customers or leads yet/);
});

test("with no workspace at all, these say so instead of guessing", async () => {
  const none = { businessRequest: async () => ({ body: { clients: [] } }) };
  for (const phrase of ["who are my customers", "mark invoice INV-1001 as paid", "set a follow-up for Grace on Friday"]) {
    const reply = await run({ command: phrase, confirmed: true, businessRequest: none.businessRequest });
    assert.equal(reply.status, "needs-input", phrase); assert.match(reply.response, /do not have a business or nonprofit workspace/);
  }
});

test("a task due date and a grant deadline said by voice are stored as real dates (so the reminder sweeps can see them), and read back as said", async () => {
  const today = "2026-10-04"; // a Sunday
  const task = extractTaskArgs("add a task to call the vet due Friday", {}, { today });
  assert.equal(task.dueDate, "2026-10-09"); assert.equal(task.dueDateText, "Friday");
  assert.equal(extractTaskArgs("add a task to call the vet due 15 October", {}, { today }).dueDate, "2026-10-15");
  assert.equal(extractTaskArgs("add a task to call the vet due soon", {}, { today }).dueDate, "soon", "a day we cannot read is kept as said, not lost");
  assert.equal(extractTaskArgs("add a task to call the vet due Friday", {}).dueDate, "Friday", "without a 'today' nothing changes (callers that do not pass one are unaffected)");
  const grant = extractGrantArgs("add a grant from the county fund called water deadline 20 November", {}, { today });
  assert.equal(grant.deadline, "2026-11-20"); assert.equal(grant.deadlineText, "20 November");

  const ws = workspace();
  const confirm = await say(ws, "add a task to call the vet due Friday", false);
  assert.match(confirm.response, /due Friday\. Should I go ahead\?/, "the person hears the word they said");
  await say(ws, "add a task to order feed due tomorrow", true);
  const saved = ws.client.data.editable.tasks.find(item => item.title.toLowerCase().includes("order feed"));
  assert.match(saved.dueDate, /^\d{4}-\d{2}-\d{2}$/, `stored as a real date, not the word: ${saved.dueDate}`);
});
