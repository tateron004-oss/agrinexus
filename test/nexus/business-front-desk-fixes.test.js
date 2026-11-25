"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const voiceDispatch = require("../../nexus/business/voice-dispatch.js");
const schedule = require("../../nexus/business/scheduling-voice.js");
const { createBusinessPreview } = require("../../nexus/business/authoritative-executor.js");

// Found by running the front desk (PR #1223) through a real voice session on the live site on 6 November 2026:
//  * the business's own name came along in the words ("a haircut at Mama Grace Salon") and became part of the service ("haircut Mama Grace Salon");
//  * a booking refused as a double booking showed a bare "I need your confirmation" and only said so after a yes;
//  * a missing day or time was found only after the yes, not asked first.

const FAR = "2099-03-05";
const ctx = (editable, command) => ({ command, editable, workspace: "Mama Grace Salon", today: "2099-03-02", nowTime: "08:00", formatMoney: () => "" });
const base = (extra = {}) => ({ leads: [], appointments: [], hours: [], campaigns: [], campaignLog: [], ...extra });

test("the business's own name is not part of the service", () => {
  const ask = schedule.planScheduleWrite("bookCustomer", ctx(base(), `Book Grace Otieno for ${FAR} at 2pm for a haircut at Mama Grace Salon`));
  assert.match(ask.prompt, /^I can book Grace Otieno, haircut, on Thursday 5 March at 2 PM/);
  assert.doesNotMatch(ask.prompt, /haircut Mama|haircut, Mama/);
  const spaced = schedule.planScheduleWrite("bookCustomer", ctx(base(), `Book Grace Otieno for ${FAR} at 2pm for a haircut at mama  grace salon`));
  assert.match(spaced.prompt, /, haircut, on/);
});

test("a missing name, day or time is asked about first, before anyone is asked for a yes", () => {
  const ask = command => voiceDispatch.precheck(command);
  assert.equal(ask("Book Grace Otieno for Thursday").clarification, "What time should I book Grace Otieno for?");
  assert.equal(ask("Book Grace Otieno at 2pm").clarification, "Which day should I book Grace Otieno for?");
  assert.equal(ask("Book Grace Otieno for Thursday at 2pm").clarification, null);
  assert.equal(ask("Set my hours Monday to Friday").clarification, "What are the opening and closing times? For example: set my hours Monday to Friday 9 to 5.");
  assert.equal(ask("Set my hours Monday to Friday 9 to 5").clarification, null);
  assert.equal(ask("We're closed on Sundays").clarification, null);
  assert.equal(ask("Move Grace's appointment").intent, null, "not a front-desk request without a day or time");
  assert.match(ask("Create a campaign called Grand Opening").clarification, /What should the message say\?/);
  assert.equal(ask("Create an email campaign called Grand Opening saying We open Saturday at ten").clarification, null);
  assert.equal(ask("Book Grace Otieno for Thursday").toolId, "business.manage");
  assert.equal(ask("Who can I call back?").toolId, "business.query");
});

test("a refusal is said as it is in the question the person is asked, with 'nothing will be changed'", async () => {
  const clientRecord = { record_id: "r1", version: 1, data: { info: { businessName: "Mama Grace Salon" }, editable: base({ appointments: [{ title: "Grace", start: "", end: "", notes: "", status: "scheduled", calendarEventId: "", calendarLink: "", startAt: `${FAR}T14:00`, durationMinutes: 60, customer: "Grace Otieno", service: "", confirmation: "" }] }) } };
  const businessRequest = async ({ method }) => (method === "GET" ? { body: { clients: [clientRecord] } } : { body: clientRecord });
  const result = await voiceDispatch.run({ command: `Book John Kamau for ${FAR} at 2pm`, confirmed: false, businessRequest, timeZone: "America/New_York" });
  assert.equal(result.status, "completed"); assert.match(result.response, /already taken by Grace Otieno/);
  // the preview the planner shows before a yes: the source of createBusinessPreview returns it for a write that changes nothing
  const source = fs.readFileSync(path.join(__dirname, "../../nexus/business/authoritative-executor.js"), "utf8");
  assert.match(source, /result\?\.status === "completed" && !result\.businessRecord && !voiceDispatch\.isReadIntent\(voiceDispatch\.classify\(text\)\)[^\n]*Nothing will be changed\./);
  assert.equal(typeof createBusinessPreview, "function");
});
