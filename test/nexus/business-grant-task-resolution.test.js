"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const voiceDispatch = require("../../nexus/business/voice-dispatch.js");

// Found live (business/CRM audit, 2026-09-28): resolveGrant/resolveTask used
// Array.find, which picks whichever matching grant/task comes FIRST in the
// array, not the most specific one actually named -- the exact bug class
// already found and fixed for resolveListingIndex (see
// business-real-estate.test.js). A funder's renewal/follow-on grant sharing
// a name prefix with an earlier one from the same funder ("Ford Foundation" /
// "Ford Foundation Youth Innovation Fund", an ordinary real-world naming
// pattern) could silently mark the wrong grant awarded; a task titled
// "Follow up with buyer" and another "Follow up with buyer about financing"
// had the same problem for "mark X as done".

test("resolveGrant picks the most specific (longest) matching funder/program name, not just the first one in array order", () => {
  const grants = [
    { funderName: "Ford Foundation", program: "General support", status: "submitted" },
    { funderName: "Ford Foundation Youth Innovation Fund", program: "Youth programs", status: "submitted" }
  ];
  assert.equal(voiceDispatch.resolveGrant(grants, "set the Ford Foundation Youth Innovation Fund grant status to awarded"), grants[1]);
  assert.equal(voiceDispatch.resolveGrant(grants, "set the Ford Foundation grant status to awarded"), grants[0]);
  // Unaffected when the array order is reversed.
  const reversed = [grants[1], grants[0]];
  assert.equal(voiceDispatch.resolveGrant(reversed, "set the Ford Foundation Youth Innovation Fund grant status to awarded"), grants[1]);
});

test("resolveGrant matches on the program name too, with the same longest-match preference", () => {
  const grants = [
    { funderName: "Acme Trust", program: "Water access" },
    { funderName: "Acme Trust", program: "Water access expansion phase two" }
  ];
  assert.equal(voiceDispatch.resolveGrant(grants, "mark the water access expansion phase two grant as awarded"), grants[1]);
});

test("resolveGrant returns null (ambiguous) rather than guessing when nothing or two equally-specific grants match", () => {
  const grants = [{ funderName: "Acme Trust", program: "Water" }, { funderName: "Beta Fund", program: "Roads" }];
  assert.equal(voiceDispatch.resolveGrant(grants, "set the Gamma grant to awarded"), null);
  const tied = [{ funderName: "Acme Trust" }, { funderName: "Acme Trust" }];
  assert.equal(voiceDispatch.resolveGrant(tied, "set the Acme Trust grant to awarded"), null, "a genuine tie must be left ambiguous, not guessed");
});

test("resolveTask picks the most specific (longest) matching title, not just the first one in array order", () => {
  const tasks = [
    { title: "Follow up with buyer", status: "todo" },
    { title: "Follow up with buyer about financing", status: "todo" }
  ];
  assert.equal(voiceDispatch.resolveTask(tasks, "mark follow up with buyer about financing as done"), tasks[1]);
  assert.equal(voiceDispatch.resolveTask(tasks, "mark follow up with buyer as done"), tasks[0]);
  const reversed = [tasks[1], tasks[0]];
  assert.equal(voiceDispatch.resolveTask(reversed, "mark follow up with buyer about financing as done"), tasks[1]);
});

test("resolveTask returns null (ambiguous) rather than guessing when nothing or two equally-specific tasks match", () => {
  const tasks = [{ title: "Call the vet" }, { title: "Order seeds" }];
  assert.equal(voiceDispatch.resolveTask(tasks, "mark plant maize as done"), null);
  const tied = [{ title: "Call the vet" }, { title: "Call the vet" }];
  assert.equal(voiceDispatch.resolveTask(tied, "mark call the vet as done"), null, "a genuine tie must be left ambiguous, not guessed");
});

// Found live (systemic ambiguous-match sweep, 2026-09-28): unlike its
// siblings above (all fixed this session), resolveAppointmentIndex still
// used plain findIndex -- whichever appointment happens to be first in the
// array wins. It's used by syncAppointment to decide which appointment gets
// pushed to the user's real calendar provider, so a wrong pick is a real,
// unreviewed external side effect on the wrong record.
test("resolveAppointmentIndex picks the most specific (longest) matching title, not just the first one in array order", () => {
  const appointments = [
    { title: "Vet visit", status: "pending" },
    { title: "Vet visit follow-up", status: "pending" }
  ];
  assert.equal(voiceDispatch.resolveAppointmentIndex(appointments, "sync my vet visit follow-up appointment"), 1);
  assert.equal(voiceDispatch.resolveAppointmentIndex(appointments, "sync my vet visit appointment"), 0);
  const reversed = [appointments[1], appointments[0]];
  assert.equal(voiceDispatch.resolveAppointmentIndex(reversed, "sync my vet visit follow-up appointment"), 0);
});

test("resolveAppointmentIndex still falls back to the one unsynced appointment for a pronoun-style reference, and refuses a genuine tie", () => {
  const appointments = [{ title: "Vet visit", status: "pending" }, { title: "Vet visit follow-up", status: "synced" }];
  assert.equal(voiceDispatch.resolveAppointmentIndex(appointments, "sync the appointment"), 0);
  const tied = [{ title: "Vet visit", status: "pending" }, { title: "Vet visit", status: "pending" }];
  assert.equal(voiceDispatch.resolveAppointmentIndex(tied, "sync my vet visit appointment"), -1, "a genuine tie must be left ambiguous, not guessed");
});

// Found live (systemic ambiguous-match sweep, 2026-09-28): the top-level
// workspace resolver used by every single business operation (leads,
// transactions, invoices, grants, tasks, listings, appointments) still used
// plain Array.find -- the exact bug already fixed for its siblings above.
// Two workspaces "Grace" and "Grace's Bakery" (an ordinary real-world naming
// collision): "log a $50 expense for Grace's Bakery" could silently record
// into the wrong, shorter-named workspace depending purely on array order.
test("resolveBusinessClient picks the most specific (longest) matching workspace name, not just the first one in array order", async () => {
  const clients = [
    { record_id: "rec_1", data: { info: { businessName: "Grace" } } },
    { record_id: "rec_2", data: { info: { businessName: "Grace's Bakery" } } }
  ];
  const businessRequest = async () => ({ body: { clients } });
  const named = await voiceDispatch.resolveBusinessClient(businessRequest, "log a $50 expense for Grace's Bakery");
  assert.equal(named.client, clients[1]);
  const plain = await voiceDispatch.resolveBusinessClient(businessRequest, "log a $50 expense for Grace");
  assert.equal(plain.client, clients[0]);
  // Unaffected when the array order is reversed.
  const reversed = [clients[1], clients[0]];
  const reversedRequest = async () => ({ body: { clients: reversed } });
  const namedReversed = await voiceDispatch.resolveBusinessClient(reversedRequest, "log a $50 expense for Grace's Bakery");
  assert.equal(namedReversed.client, clients[1]);
});

test("resolveBusinessClient falls back to the most recently updated workspace when no name is spoken, unaffected by the longest-match fix", async () => {
  const clients = [
    { record_id: "rec_1", data: { info: { businessName: "Riverside Farm" } } },
    { record_id: "rec_2", data: { info: { businessName: "Downtown Clinic" } } }
  ];
  const businessRequest = async () => ({ body: { clients } });
  const resolved = await voiceDispatch.resolveBusinessClient(businessRequest, "show me the dashboard");
  assert.equal(resolved.client, clients[0]);
});
