"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { classify, extractLeadArgs, extractIntakeArgs, extractAppointmentArgs, extractListingArgs, run } = require("../../nexus/business/voice-dispatch.js");

// Found live: (1) a person's name swallowed the rest of the sentence ("Amina Wanjiru phone 0712345678"), and (2) "add a showing at <address>"
// created a bogus property LISTING instead of a showing appointment.

test("a customer's name is only the name, not the rest of the sentence", () => {
  const cases = [
    ["add a customer named Amina Wanjiru phone 0712345678", "Amina Wanjiru"],
    ["add a customer named Amina Wanjiru and she buys maize", "Amina Wanjiru"],
    ["add a customer named Amina Wanjiru who buys maize every week", "Amina Wanjiru"],
    ["Add a donor called John Otieno from Kisumu", "John Otieno"],
    ["add customer Amina Wanjiru phone 0712345678", "Amina Wanjiru"],
    ["add customer Amina Wanjiru, phone 0712345678", "Amina Wanjiru"],
    ["add a volunteer named Peter Kamau on Saturdays", "Peter Kamau"],
    ["add a customer named John Otieno owes me money", "John Otieno"],
    ["add a customer named Amina Wanjiru Phone 0712345678", "Amina Wanjiru"],
    ["add a customer named Grace", "Grace"],
    ["add a donor called Hope and Light Foundation", "Hope and Light Foundation"],
    ["add a customer named Mary Ann van der Berg", "Mary Ann van der Berg"],
    ["add a donor named Friends of the Earth", "Friends of the Earth"]
  ];
  for (const [text, name] of cases) assert.equal(extractLeadArgs(text).name, name, text);
  assert.equal(extractLeadArgs("add a customer named Amina Wanjiru phone 0712345678").contact, "0712345678", "the phone is still read");
  assert.equal(extractLeadArgs("add a customer named a b c d e f g h i").name.split(" ").length, 5, "never more than five words");
});

test("an intake's name is trimmed the same way", () => {
  assert.equal(extractIntakeArgs("take an intake for Grace Otieno who needs help with a loan").name, "Grace Otieno");
  assert.equal(extractIntakeArgs("take an intake, the client is called Grace Otieno and she needs a loan").name, "Grace Otieno");
});

test("a showing, viewing or site visit is an appointment at a property, not a new listing", () => {
  for (const text of ["Add a showing at 12 Moi Avenue tomorrow at 3pm", "schedule a showing at 456 Oak Street on Friday", "add a showing for the house at 12 Moi Avenue", "book a viewing of 12 Moi Avenue at 3pm", "arrange a site visit at the Kisumu plot on Monday at 10am", "add a showing for buyer Grace at 12 Moi Avenue tomorrow"]) {
    assert.equal(classify(text), "addAppointment", text);
  }
  assert.deepEqual(extractAppointmentArgs("Add a showing at 12 Moi Avenue tomorrow at 3pm"), { title: "Showing at 12 Moi Avenue", start: "tomorrow at 3pm" });
  assert.deepEqual(extractAppointmentArgs("schedule a showing at 456 Oak Street on Friday"), { title: "Showing at 456 Oak Street", start: "Friday" });
  assert.deepEqual(extractAppointmentArgs("book a viewing of 12 Moi Avenue at 3pm"), { title: "Viewing of 12 Moi Avenue", start: "3pm" });
  assert.deepEqual(extractAppointmentArgs("arrange a site visit at the Kisumu plot on Monday at 10am"), { title: "Site visit at the Kisumu plot", start: "Monday at 10am" });
  assert.deepEqual(extractAppointmentArgs("add a showing for the house at 12 Moi Avenue"), { title: "Showing for the house at 12 Moi Avenue", start: "" }, "the address is not mistaken for a time");
});

test("real listings and the older appointment phrasing are unchanged", () => {
  assert.equal(classify("add a listing at 12 Moi Avenue for 5 million shillings"), "addListing");
  assert.equal(classify("List 123 Main Street for $450,000"), "addListing");
  assert.equal(classify("add a customer named Grace"), "addLead");
  assert.equal(classify("add a buyer named Grace Otieno"), "addLead");
  assert.deepEqual(extractAppointmentArgs("Add an appointment called Client meeting on Friday at 2pm"), { title: "Client meeting", start: "Friday at 2pm" });
  assert.deepEqual(JSON.parse(JSON.stringify(extractAppointmentArgs("Schedule an appointment for a showing at 123 Main St on Friday 2pm"))), { title: "a showing at 123 Main St", start: "Friday 2pm" }, "the place stays in the title and the start is the day and time");
});

test("a listing's address stops before a day or time word", () => {
  assert.equal(extractListingArgs("List 12 Moi Avenue tomorrow for 5 million shillings").address, "12 Moi Avenue");
  assert.equal(extractListingArgs("add a listing at 456 Oak Street on Friday").address, "456 Oak Street");
  assert.equal(extractListingArgs("List 789 Pine Rd for 450,000 dollars").address, "789 Pine Rd");
});

test("saying it through the real handler adds a showing appointment and never touches the listings", async () => {
  const client = { record_id: "rec_1", version: 1, data: { info: { businessName: "Sunrise Realty" }, editable: { appointments: [], leads: [], listings: [] } } };
  const businessRequest = async ({ method, body }) => {
    if (method === "GET") return { body: { clients: [client] } };
    client.data = { ...client.data, editable: body.editable };
    return { body: { ...client, data: client.data } };
  };
  const asked = await run({ command: "Add a showing at 12 Moi Avenue tomorrow at 3pm", confirmed: false, businessRequest });
  assert.equal(asked.status, "needs-confirmation");
  assert.match(asked.response, /appointment "Showing at 12 Moi Avenue" tomorrow at 3pm to "Sunrise Realty"/);
  assert.doesNotMatch(asked.response, / on tomorrow/);
  const done = await run({ command: "Add a showing at 12 Moi Avenue tomorrow at 3pm", confirmed: true, businessRequest });
  assert.equal(done.status, "completed");
  assert.deepEqual(client.data.editable.appointments.map(item => [item.title, item.start]), [["Showing at 12 Moi Avenue", "tomorrow at 3pm"]]);
  assert.equal(client.data.editable.listings.length, 0, "no bogus property listing was created");
  assert.equal(client.data.editable.leads.length, 0);
});

test("saying it through the real handler saves the customer under just their name", async () => {
  const client = { record_id: "rec_1", version: 1, data: { info: { businessName: "Mama Mboga" }, editable: { appointments: [], leads: [], listings: [] } } };
  const businessRequest = async ({ method, body }) => {
    if (method === "GET") return { body: { clients: [client] } };
    client.data = { ...client.data, editable: body.editable };
    return { body: { ...client, data: client.data } };
  };
  const done = await run({ command: "add a customer named Amina Wanjiru phone 0712345678", confirmed: true, businessRequest });
  assert.equal(done.status, "completed", JSON.stringify(done).slice(0, 200));
  assert.equal(client.data.editable.leads.length, 1);
  assert.equal(client.data.editable.leads[0].name, "Amina Wanjiru");
});
