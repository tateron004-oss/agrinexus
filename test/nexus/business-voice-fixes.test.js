"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const voiceDispatch = require("../../nexus/business/voice-dispatch.js");

const { classify, precheck, run, extractBusinessName, extractLeadArgs, extractIntakeArgs, extractTaskArgs, extractGrantArgs, extractAppointmentArgs, formatMoney } = voiceDispatch;

// Found by an independent capability audit of the business and CRM tools (every item reproduced by running the real dispatcher).

const plain = value => JSON.parse(JSON.stringify(value));

test("a workspace name keeps its words but not a trailing place", () => {
  assert.equal(extractBusinessName("Start a business called Green Acres Farm Supply in Kisumu"), "Green Acres Farm Supply");
  assert.equal(extractBusinessName("Start a nonprofit called Hope in Action"), "Hope in Action");
  assert.equal(extractBusinessName("Start a business called Light in the Darkness Ministry"), "Light in the Darkness Ministry");
  assert.equal(extractBusinessName("Start a business called Hope Water Initiative"), "Hope Water Initiative");
});

test("an email is kept whole, and a name keeps its title and apostrophe", () => {
  assert.equal(extractLeadArgs("Add a donor named Maria Chen email maria@example.org").contact, "maria@example.org");
  assert.equal(extractLeadArgs("Add a donor named Maria Chen email maria@example.org").name, "Maria Chen");
  assert.equal(extractLeadArgs("Add a donor named Dr. John O'Neil").name, "Dr John O'Neil");
  assert.equal(extractLeadArgs("Add a customer named Grace Otieno phone 0712345678").contact, "0712345678");
  assert.equal(extractIntakeArgs("Take an intake for Dr. Joseph Mwangi who needs a loan application").name, "Dr Joseph Mwangi");
});

test("a task keeps its due date and owner even with no commas", () => {
  const today = { today: "2026-10-05" };
  assert.deepEqual(plain(extractTaskArgs("Add a task to call the borehole contractor due Friday", {}, today)), { title: "call the borehole contractor", assignee: "", dueDate: "2026-10-09", dueDateText: "Friday", priority: "medium" });
  const full = plain(extractTaskArgs("Add a task called Send thank-you letters assigned to Amina high priority due tomorrow", {}, today));
  assert.deepEqual([full.title, full.assignee, full.dueDate, full.priority], ["Send thank-you letters", "Amina", "2026-10-06", "high"]);
  const commas = plain(extractTaskArgs("Add a task called Send thank-you letters, assigned to Amina, high priority, due tomorrow", {}, today));
  assert.deepEqual([commas.title, commas.assignee, commas.dueDate], ["Send thank-you letters", "Amina", "2026-10-06"]);
});

test("a grant's program and funder are told apart, and 'deadline' is not a funder", () => {
  const grant = plain(extractGrantArgs("Add a grant called Clean Water Fund from the Gates Foundation for 5000 dollars deadline 15 November", {}, { today: "2026-10-05" }));
  assert.deepEqual([grant.program, grant.funderName, grant.amount, grant.deadline], ["Clean Water Fund", "Gates Foundation", 5000, "2026-11-15"]);
  assert.equal(extractGrantArgs("Add a grant with deadline Friday", {}, { today: "2026-10-05" }).funderName, "");
  assert.match(precheck("Add a grant with deadline Friday").clarification, /name of the funder/);
});

test("an appointment's start is where the day or time begins, so the place stays in the title", () => {
  assert.deepEqual(plain(extractAppointmentArgs("Book an appointment for site visit at 12 Moi Avenue tomorrow at 3pm")), { title: "site visit at 12 Moi Avenue", start: "tomorrow at 3pm" });
  assert.deepEqual(plain(extractAppointmentArgs("Schedule an appointment called Board meeting at 10am tomorrow")), { title: "Board meeting", start: "10am tomorrow" });
  assert.deepEqual(plain(extractAppointmentArgs("Add an appointment with the donor Maria Chen on Friday at 3pm")), { title: "the donor Maria Chen", start: "Friday at 3pm" });
  assert.deepEqual(plain(extractAppointmentArgs("Add a showing at 123 Main Street tomorrow at 3pm")), { title: "Showing at 123 Main Street", start: "tomorrow at 3pm" });
});

test("an open house is an appointment, not a duplicate listing, and a status can be set from the address alone", () => {
  assert.equal(classify("Add an open house at 45 Oak Avenue on Saturday at 2pm"), "addAppointment");
  assert.deepEqual(plain(extractAppointmentArgs("Add an open house at 45 Oak Avenue on Saturday at 2pm")), { title: "Open house at 45 Oak Avenue", start: "Saturday at 2pm" });
  assert.equal(classify("Mark 123 Main Street as sold"), "updateListingStatus");
  assert.equal(classify("Mark the 123 Main Street listing as sold"), "updateListingStatus");
  assert.equal(classify("List 123 Main Street for $450,000"), "addListing", "a real listing is still a listing");
});

test("a plan about people or a business plan is not a new person or a new workspace", () => {
  assert.equal(classify("Create a volunteer coordination plan"), "generateStrategy");
  assert.equal(classify("Draft a donor stewardship plan"), "generateStrategy");
  assert.equal(classify("Add a volunteer named Joyce Achieng"), "addLead");
  assert.equal(classify("Create a business plan for my bakery"), null);
  assert.equal(classify("Start a business called Green Acres Farm Supply"), "createWorkspace");
  assert.equal(classify("Generate the business plan PDF"), "generateBusinessPlanPdf");
});

test("US dollar amounts have thousands separators", () => {
  assert.equal(formatMoney("USD", 450000), "$450,000.00");
  assert.equal(formatMoney("USD", 12.5), "$12.50");
  assert.equal(formatMoney("KES", 6000), "KES 6,000");
});

// ---- through run() with a fake workspace ----
function workspace(editable = {}) {
  const client = { record_id: "rec_1", version: 1, data: { info: { businessName: "Hope Water" }, editable: { leads: [], transactions: [], ...editable } } };
  const saved = [];
  const businessRequest = async ({ method, body }) => {
    if (method === "GET") return { body: { clients: [client] } };
    saved.push(body); client.data.editable = body.editable; client.version += 1; return { body: { ...client } };
  };
  return { client, saved, businessRequest };
}

test("adding the same person twice says so and saves nothing", async () => {
  const ws = workspace({ leads: [{ name: "Maria Chen", contact: "", type: "donor", need: "", stage: "new", nextAction: "", followUpDate: "" }] });
  const again = await run({ command: "Add a donor named Maria Chen", confirmed: true, businessRequest: ws.businessRequest });
  assert.match(again.response, /Maria Chen is already on your list as a donor/);
  assert.equal(ws.saved.length, 0);
  const other = await run({ command: "Add a customer named Maria Chen", confirmed: true, businessRequest: ws.businessRequest });
  assert.match(other.response, /^Added Maria Chen as a customer/, "the same name as a different kind of person is allowed");
});

test("a donation from someone on the list is tied to them, and 'show my donations' reads them back per currency", async () => {
  const ws = workspace({ leads: [{ name: "Maria Chen", contact: "", type: "donor", need: "", stage: "new", nextAction: "", followUpDate: "" }] });
  const empty = await run({ command: "Show my donations", businessRequest: ws.businessRequest });
  assert.match(empty.response, /No donations are logged in "Hope Water" yet/);
  const logged = await run({ command: "Record a donation of 50 dollars from Maria Chen", confirmed: true, businessRequest: ws.businessRequest });
  assert.match(logged.response, /Recorded as a donation from Maria Chen\./);
  const row = ws.saved[0].editable.transactions[0];
  assert.deepEqual([row.type, row.category, row.description, row.amount, row.currency], ["income", "donation", "Donation from Maria Chen", 50, "USD"]);
  await run({ command: "Record a donation of 2000 shillings from Maria Chen", confirmed: true, businessRequest: ws.businessRequest });
  await run({ command: "Log a 500 shilling expense for seed", confirmed: true, businessRequest: ws.businessRequest });
  const shown = await run({ command: "How much have donors given", businessRequest: ws.businessRequest });
  assert.match(shown.response, /^Donations in "Hope Water": \$50\.00 from 1 gift \(Maria Chen \$50\.00\); KES 2,000 from 1 gift \(Maria Chen KES 2,000\)\.$/);
  assert.doesNotMatch(shown.response, /seed|500/, "an expense is not a donation");
});

test("the summary says '1 customer', not '1 customers'", async () => {
  const ws = workspace({ leads: [{ name: "Grace Otieno", contact: "", type: "customer", need: "", stage: "new", nextAction: "", followUpDate: "" }], listings: [], invoices: [], invoiceItems: [], grants: [], tasks: [], appointments: [] });
  const summary = await run({ command: "How is my business doing", businessRequest: ws.businessRequest });
  assert.match(summary.response, /1 customer, 0 donors, 0 sponsors, 0 volunteers/);
});

test("'Add Grace Otieno to my customers', 'as a customer' and 'New customer: Grace Otieno' name the person, and a task or a reminder is not a person", () => {
  for (const text of ["Add Grace Otieno to my customers", "Add Grace Otieno as a customer", "New customer: Grace Otieno"]) {
    assert.equal(classify(text), "addLead", text);
    assert.deepEqual(plain(extractLeadArgs(text)), { name: "Grace Otieno", type: "customer", contact: "" }, text);
  }
  assert.equal(extractLeadArgs("Add Maria Chen as a donor").type, "donor");
  assert.equal(precheck("Add Grace Otieno to my customers").clarification, null, "the name is not asked for again");
  assert.equal(classify("Add a project task to update the donor list"), "addTask");
  assert.equal(classify("Remind me to follow up with Grace tomorrow"), null, "a reminder is for the reminder tools");
  assert.equal(classify("Set a follow-up with Grace Otieno on Friday"), "setFollowUp");
  assert.equal(classify("Show my customers"), "listLeads");
});
