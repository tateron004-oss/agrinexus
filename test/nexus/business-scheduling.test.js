"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const voiceDispatch = require("../../nexus/business/voice-dispatch.js");
const schedule = require("../../nexus/business/scheduling-voice.js");

const { classifySchedule, readSchedule, planScheduleWrite } = schedule;

// Phase 1 of the small-business assistant team (owner, 5 November 2026): the front desk. Business hours, who is free when, booking a named customer without a double booking, moving and cancelling,
// the confirmation sent to the customer (marked sent only when the provider really sent it), who agreed to be called back, and the quotes people asked for.
// The pure functions take the day and the clock as inputs: 2099-03-02 is a Monday.

const TODAY = "2099-03-02";
const NOW = "08:00";
const THU = "2099-03-05";
const FRI = "2099-03-06";
const SUN = "2099-03-08";

function editableWith(overrides = {}) {
  return {
    leads: [
      { name: "Grace Otieno", contact: "+254712345678", type: "customer", need: "", stage: "new", nextAction: "", followUpDate: "", callConsent: "", callConsentDate: "" },
      { name: "John Kamau", contact: "john@example.com", type: "customer", need: "", stage: "new", nextAction: "", followUpDate: "" },
      { name: "Amina Hassan", contact: "0712 345 678", type: "customer", need: "", stage: "new", nextAction: "", followUpDate: "" }
    ],
    appointments: [], hours: [], invoices: [], invoiceItems: [], tasks: [], grants: [], transactions: [], listings: [],
    ...overrides
  };
}
const book = (day, time, customer, extra = {}) => ({ title: customer, start: "", end: "", notes: "", status: "scheduled", calendarEventId: "", calendarLink: "", startAt: `${day}T${time}`, durationMinutes: 60, customer, service: "", confirmation: "", ...extra });
const ctx = (editable, command) => ({ command, editable, workspace: "Mama Grace Salon", today: TODAY, nowTime: NOW, formatMoney: (c, a) => `${c} ${a}` });
const read = (editable, command) => readSchedule(classifySchedule(command), ctx(editable, command));
const plan = (editable, command) => planScheduleWrite(classifySchedule(command), ctx(editable, command));

test("the front-desk phrases are recognised, and look-alikes are left to the other tools", () => {
  const yes = {
    bookCustomer: ["Book Grace Otieno for Thursday at 2pm for a haircut", "Please book Grace Otieno on Friday at 10am for 30 minutes", "Schedule an appointment for Grace Otieno on Friday at 10am", "Kyro, book John Kamau for 2099-03-05 at 3pm"],
    checkAvailability: ["Am I free Thursday at 2?", "What's open on Friday?", "When is my next opening?", "Do I have any openings tomorrow?", "Is Thursday at 2 free?", "What is my availability next week", "What are the next available slots"],
    showHours: ["What are my hours?", "When are we open?"],
    setHours: ["Set my hours Monday to Friday 9 to 5", "We're closed on Sundays", "We are open Saturday 10 to 2", "Change my business hours to weekdays 8am to 6pm"],
    confirmBooking: ["Send Grace Otieno her confirmation", "Text Grace the confirmation", "Confirm Grace Otieno's appointment"],
    cancelBooking: ["Cancel Grace Otieno's appointment", "Can you cancel Grace's booking?"],
    moveBooking: ["Move Grace's appointment to Friday at 3pm", "Reschedule Grace Otieno's booking to Friday"],
    recordCallConsent: ["Grace Otieno agreed to be called back", "John Kamau said it is okay to call him", "Amina Hassan does not want calls", "Amina Hassan opted out of calls"],
    listCallbacks: ["Who can I call back?", "Who agreed to be called?"],
    requestQuote: ["Grace Otieno asked for a quote for a fence", "Amina Hassan wants an estimate for painting, follow up on Friday"],
    quoteSent: ["I sent Grace Otieno the quote"],
    listQuotes: ["Who is waiting on a quote?", "Which quotes are pending?"]
  };
  for (const [intent, phrases] of Object.entries(yes)) for (const phrase of phrases) {
    assert.equal(classifySchedule(phrase), intent, phrase);
    assert.equal(voiceDispatch.classify(phrase), intent, `dispatch: ${phrase}`);
  }
  const no = ["Add an appointment with the donor Maria Chen on Friday at 3pm", "schedule an appointment with the vet on Monday", "Book an appointment with my doctor", "Book a table for Friday at 7pm", "Book a flight for Tuesday at 9am",
    "What is the weather", "What's open near me", "Is the pharmacy open on Sunday near me", "add a customer named Grace", "list my appointments", "mark invoice INV-1001 as paid", "send the invoice to Grace", "Send the grant confirmation"];
  for (const phrase of no) assert.equal(classifySchedule(phrase), null, phrase);
  for (const intent of schedule.SCHEDULE_READ_INTENTS) assert.equal(voiceDispatch.isReadIntent(intent), true, intent);
  for (const intent of schedule.SCHEDULE_WRITE_INTENTS) assert.equal(voiceDispatch.isReadIntent(intent), false, intent);
});

test("hours: none saved means Monday to Friday, 9 to 5, and it is said; saved hours are used", () => {
  assert.deepEqual(schedule.hoursFor(editableWith(), THU), { open: "09:00", close: "17:00", assumed: true });
  assert.equal(schedule.hoursFor(editableWith(), SUN), null);
  const saved = editableWith({ hours: [{ day: "thursday", open: "10:00", close: "14:00" }] });
  assert.deepEqual(schedule.hoursFor(saved, THU), { open: "10:00", close: "14:00", assumed: false });
  assert.equal(schedule.hoursFor(saved, FRI), null, "a day with no row is closed");
  assert.match(read(editableWith(), "What are my hours?"), /no business hours saved\. I have no business hours saved, so I assumed Monday to Friday, 9 to 5/);
  assert.match(read(saved, "What are my hours?"), /^"Mama Grace Salon" is open: Thursday 10 AM to 2 PM\. It is closed on the other days\.$/);
});

test("setting hours: days, a range of days, closed days, and the times, each asked about when missing", () => {
  assert.deepEqual(schedule.daysIn("Monday to Friday"), [1, 2, 3, 4, 5]);
  assert.deepEqual(schedule.daysIn("weekends"), [6, 0]);
  assert.deepEqual(schedule.daysIn("Sundays and Saturdays"), [0, 6]);
  assert.deepEqual(schedule.daysIn("every day"), [0, 1, 2, 3, 4, 5, 6]);
  assert.deepEqual(schedule.timeRange("9 to 5"), { open: "09:00", close: "17:00" });
  assert.deepEqual(schedule.timeRange("8am to 6pm"), { open: "08:00", close: "18:00" });
  assert.deepEqual(schedule.timeRange("from nine to five"), { open: "09:00", close: "17:00" });
  assert.deepEqual(schedule.timeRange("10 to 2"), { open: "10:00", close: "14:00" });
  assert.deepEqual(schedule.timeRange("8 to 8"), { open: "08:00", close: "20:00" }, "a closing hour that is not after the opening one is the evening");
  assert.equal(schedule.timeRange("open all day"), null);

  const ask = plan(editableWith(), "Set my hours Monday to Friday 8 to 6");
  assert.match(ask.prompt, /^I can set the hours of "Mama Grace Salon" to 8 AM to 6 PM on Mondays, Tuesdays, Wednesdays, Thursdays and Fridays\. Should I go ahead\?$/);
  const after = ask.apply(editableWith());
  assert.deepEqual(after.hours.map(row => [row.day, row.open, row.close]), [["monday", "08:00", "18:00"], ["tuesday", "08:00", "18:00"], ["wednesday", "08:00", "18:00"], ["thursday", "08:00", "18:00"], ["friday", "08:00", "18:00"]]);

  const closed = plan(editableWith(), "We're closed on Fridays");
  assert.match(closed.prompt, /mark "Mama Grace Salon" as closed on Fridays/);
  assert.deepEqual(closed.apply(editableWith()).hours.map(row => row.day), ["monday", "tuesday", "wednesday", "thursday"], "closing a day from the assumed week keeps the other four");

  const saturday = plan(editableWith({ hours: after.hours }), "We are open Saturday 10 to 2");
  assert.deepEqual(saturday.apply(editableWith({ hours: after.hours })).hours.at(-1), { day: "saturday", open: "10:00", close: "14:00" });
  assert.match(plan(editableWith(), "We are open on weekends").response ?? "", /What are the opening and closing times/);
});

test("availability: a free time, a taken time, a closed day, outside the hours, a whole day and the next openings", () => {
  const busy = editableWith({ appointments: [book(THU, "14:00", "John Kamau"), book(THU, "09:00", "Amina Hassan", { durationMinutes: 30 })] });
  assert.match(read(busy, `Am I free ${THU} at 10am?`), /^Yes, Thursday 5 March at 10 AM is free for an hour in "Mama Grace Salon"\./);
  const taken = read(busy, `Am I free ${THU} at 2pm?`);
  assert.match(taken, /^No, Thursday 5 March at 2 PM is taken by John Kamau \(2 PM to 3 PM\)\. The next openings are /);
  assert.match(taken, /Thursday 5 March at 3 PM/, "the next opening after the taken one");
  assert.match(read(busy, `Am I free ${SUN} at 10am?`), /is closed Sunday 8 March\. The next openings are Monday 9 March at 9 AM/);
  assert.match(read(busy, `Am I free ${THU} at 6pm?`), /outside the hours of "Mama Grace Salon", which are 9 AM to 5 PM that day\./);
  const day = read(busy, `What's open on ${THU}?`);
  assert.match(day, /is open 9 AM to 5 PM\. Free: 9:30 AM to 2 PM and 3 PM to 5 PM\. Booked: Amina Hassan at 9 AM and John Kamau at 2 PM\./);
  const next = read(busy, "When is my next opening?");
  assert.match(next, /^The next openings in "Mama Grace Salon" are /);
  const full = editableWith({ hours: [{ day: "thursday", open: "09:00", close: "10:00" }], appointments: [book(THU, "09:00", "John Kamau")] });
  assert.match(read(full, `What's open on ${THU}?`), /is fully booked Thursday 5 March\./);
  // a longer visit needs a longer gap
  const long = read(busy, `Am I free ${THU} at 1:30pm for 2 hours?`);
  assert.match(long, /^No, Thursday 5 March at 1:30 PM is taken by John Kamau/);
});

test("booking a customer: the question, then the booking, with a real day and time, and a new customer is added", () => {
  const empty = editableWith();
  const ask = plan(empty, `Book Grace Otieno for ${THU} at 2pm for a haircut`);
  assert.match(ask.prompt, /^I can book Grace Otieno, haircut, on Thursday 5 March at 2 PM for an hour in "Mama Grace Salon"\. Should I go ahead\?/);
  assert.match(ask.prompt, /I have no business hours saved, so I assumed/);
  const done = ask.apply(empty);
  assert.equal(done.appointments.length, 1);
  assert.deepEqual({ ...done.appointments[0], start: undefined }, { title: "Grace Otieno - a haircut".replace("a haircut", "haircut"), start: undefined, end: "", notes: "", status: "scheduled", calendarEventId: "", calendarLink: "", startAt: `${THU}T14:00`, durationMinutes: 60, customer: "Grace Otieno", service: "haircut", confirmation: "" });
  assert.equal(done.leads.length, 3, "Grace was already a customer: not added again");
  assert.match(ask.done, /^Booked Grace Otieno, haircut, on Thursday 5 March at 2 PM in "Mama Grace Salon"\. Say "send Grace the confirmation" to tell them\.$/);

  const stranger = plan(empty, `Book Wanjiru Njeri for ${THU} at 10am for 30 minutes`);
  assert.match(stranger.prompt, /Wanjiru Njeri on Thursday 5 March at 10 AM for 30 minutes in "Mama Grace Salon", and add Wanjiru Njeri to your customers/);
  const withStranger = stranger.apply(empty);
  assert.equal(withStranger.leads.at(-1).name, "Wanjiru Njeri"); assert.equal(withStranger.leads.at(-1).stage, "booked");
  assert.equal(withStranger.appointments[0].durationMinutes, 30);
  assert.match(stranger.done, /I have no phone number or email for Wanjiru yet/);
});

test("booking is refused, with the next openings, when the day is closed, the time is taken or outside the hours; it asks for what is missing", () => {
  const busy = editableWith({ appointments: [book(THU, "14:00", "John Kamau")] });
  const taken = plan(busy, `Book Grace Otieno for ${THU} at 2:30pm`);
  assert.equal(taken.info, true); assert.match(taken.response, /^Thursday 5 March at 2:30 PM is already taken by John Kamau, so I did not book Grace Otieno\. The next openings are Thursday 5 March at 3 PM/);
  assert.match(plan(busy, `Book Grace Otieno for ${SUN} at 10am`).response, /is closed Sunday 8 March, so I did not book Grace Otieno\./);
  assert.match(plan(busy, `Book Grace Otieno for ${THU} at 8am`).response, /outside the hours of "Mama Grace Salon" \(9 AM to 5 PM\)/);
  assert.match(plan(busy, `Book Grace Otieno for ${THU} at 4:30pm for 2 hours`).response, /outside the hours/);
  const lateMorning = planScheduleWrite("bookCustomer", { ...ctx(busy, "Book Grace Otieno for 2099-03-02 at 10am"), nowTime: "10:30" });
  assert.match(lateMorning.response, /^Today at 10 AM has already passed, so I did not book Grace Otieno\./, "earlier today");
  const sameTwice = editableWith({ appointments: [book(THU, "14:00", "Grace Otieno")] });
  assert.match(plan(sameTwice, `Book Grace Otieno for ${THU} at 2pm`).response, /already booked for Thursday 5 March at 2 PM/);
  const cancelled = editableWith({ appointments: [book(THU, "14:00", "John Kamau", { status: "cancelled" })] });
  assert.match(plan(cancelled, `Book Grace Otieno for ${THU} at 2pm`).prompt, /^I can book Grace Otieno/, "a cancelled booking frees its time");
  assert.equal(classifySchedule("Book Grace Otieno for Thursday"), "bookCustomer", "a day with no time is asked about, not dropped");
  assert.match(plan(busy, "Book Grace Otieno for Thursday").response, /What time on .*should I book Grace Otieno for\?/);
  assert.match(plan(busy, "Book Grace Otieno at 2pm").response, /Which day should I book Grace Otieno for\?/);
  assert.match(plan(editableWith(), `Book Grace Otieno for ${THU} at 2pm`).prompt, /Should I go ahead/);
});

test("cancelling and moving a booking: found by the customer's name, the right one, and refused when the new time is not free", () => {
  const ws = editableWith({ appointments: [book(THU, "14:00", "Grace Otieno"), book(FRI, "10:00", "John Kamau"), book(FRI, "15:00", "Grace Otieno")] });
  const ambiguous = plan(ws, "Cancel Grace Otieno's appointment");
  assert.equal(ambiguous.missingInformation[0], "date"); assert.match(ambiguous.response, /Grace Otieno has 2 bookings: Thursday 5 March at 2 PM and Friday 6 March at 3 PM\. Say the day/);
  const onDay = plan(ws, `Cancel Grace Otieno's appointment on ${FRI}`);
  assert.match(onDay.prompt, /cancel Grace Otieno's booking on Friday 6 March at 3 PM/);
  const cancelled = onDay.apply(ws);
  assert.deepEqual(cancelled.appointments.map(row => row.status), ["scheduled", "scheduled", "cancelled"]);
  assert.match(plan(ws, "Cancel Nobody Known's appointment").response, /could not find an upcoming booking for Nobody Known/);

  const one = editableWith({ appointments: [book(THU, "14:00", "Grace Otieno")] });
  const move = plan(one, `Move Grace Otieno's appointment to ${FRI} at 3pm`);
  assert.match(move.prompt, /move Grace Otieno's booking from Thursday 5 March at 2 PM to Friday 6 March at 3 PM/);
  const moved = move.apply(one).appointments[0];
  assert.equal(moved.startAt, `${FRI}T15:00`); assert.equal(moved.confirmation, "", "they must be told again");
  const clash = editableWith({ appointments: [book(THU, "14:00", "Grace Otieno"), book(FRI, "15:00", "John Kamau")] });
  assert.match(plan(clash, `Move Grace Otieno's appointment to ${FRI} at 3pm`).response, /^Friday 6 March at 3 PM is taken by John Kamau, so I did not move Grace Otieno's booking\./);
  assert.equal(classifySchedule("Move Grace Otieno's appointment"), null, "with no day or time it is not a move request");
  assert.match(planScheduleWrite("moveBooking", ctx(one, "Move Grace Otieno's appointment")).response, /When should I move Grace Otieno's booking to\?/);
  const sameSlotMove = plan(one, `Move Grace Otieno's appointment to ${THU} at 2:30pm`);
  assert.match(sameSlotMove.prompt, /to Thursday 5 March at 2:30 PM/, "it does not clash with itself");
});

test("the confirmation: written from the facts only, to the saved phone or email, and refused when there is nowhere to send it", () => {
  const ws = editableWith({ appointments: [book(THU, "14:00", "Grace Otieno", { service: "haircut" }), book(FRI, "10:00", "John Kamau"), book(FRI, "11:00", "Amina Hassan")] });
  const text = plan(ws, "Send Grace Otieno her confirmation");
  assert.equal(text.send.channel, "sms"); assert.equal(text.send.to, "+254712345678");
  assert.equal(text.send.message, "Hi Grace, this confirms your haircut with Mama Grace Salon on Thursday 5 March at 2 PM. If you need to change it, please get in touch with us.");
  assert.match(text.prompt, /^I can text Grace Otieno at \+254712345678: "Hi Grace, this confirms your haircut/);
  assert.match(text.prompt, /Should I send it\?$/);
  assert.equal(text.apply(ws).appointments[0].confirmation, "sent");
  const mail = plan(ws, "Send John Kamau his confirmation");
  assert.equal(mail.send.channel, "email"); assert.equal(mail.send.to, "john@example.com"); assert.match(mail.send.message, /your appointment with Mama Grace Salon on Friday 6 March at 10 AM/);
  const noCode = plan(ws, "Send Amina Hassan her confirmation");
  assert.equal(noCode.info, true); assert.match(noCode.response, /no usable phone number or email for Amina Hassan.*0712 345 678.*country code/);
  assert.match(plan(editableWith(), "Send Grace Otieno her confirmation").response, /could not find an upcoming booking for Grace Otieno/);
  const already = editableWith({ appointments: [book(THU, "14:00", "Grace Otieno", { confirmation: "sent" })] });
  assert.match(plan(already, "Send Grace Otieno her confirmation").response, /was already sent a confirmation/);
  assert.match(plan(already, "Send Grace Otieno her confirmation again").prompt, /^I can text Grace Otieno/);
});

test("permission to call back: recorded on the person, listed, withdrawn, and never guessed", () => {
  const ws = editableWith();
  const yes = plan(ws, "Grace Otieno agreed to be called back");
  assert.match(yes.prompt, /note in "Mama Grace Salon" that Grace Otieno agreed to be called back, as of today\. Should I go ahead\?/);
  const after = yes.apply(ws);
  assert.equal(after.leads[0].callConsent, "yes"); assert.equal(after.leads[0].callConsentDate, TODAY);
  assert.equal(after.leads[1].callConsent, undefined, "nobody else is touched");
  assert.match(read(after, "Who can I call back?"), /^1 person in "Mama Grace Salon" agreed to be called back: Grace Otieno \(since today\)\.$/);
  const no = plan(after, "Grace Otieno does not want calls anymore");
  const withdrawn = no.apply(after);
  assert.equal(withdrawn.leads[0].callConsent, "no");
  assert.match(read(withdrawn, "Who can I call back?"), /Nobody in "Mama Grace Salon" has told you they agree.*1 person asked not to be called/);
  assert.match(read(editableWith(), "Who can I call back?"), /Nobody in "Mama Grace Salon" has told you they agree to be called back yet\./);
  const newcomer = plan(ws, "Wanjiru Njeri agreed to be called back");
  assert.match(newcomer.prompt, /and add Wanjiru Njeri to your customers/);
  assert.equal(newcomer.apply(ws).leads.at(-1).callConsent, "yes");
});

test("quotes: requested with what for and a follow-up day, listed, and marked sent", () => {
  const ws = editableWith();
  const ask = plan(ws, `Grace Otieno asked for a quote for a fence, follow up on ${FRI}`);
  assert.match(ask.prompt, /note in "Mama Grace Salon" that Grace Otieno asked for a quote for a fence, with a follow-up on Friday 6 March\. Should I go ahead\?/);
  const after = ask.apply(ws);
  assert.deepEqual([after.leads[0].stage, after.leads[0].followUpDate, after.leads[0].need], ["quote requested", FRI, "a fence"]);
  assert.match(read(after, "Who is waiting on a quote?"), /^1 person in "Mama Grace Salon" is waiting on a quote: Grace Otieno \(fence\), follow up Friday 6 March\.$/);
  const noDay = plan(ws, "John Kamau wants an estimate for painting");
  assert.match(noDay.prompt, /I picked two days from now since you did not say\) on Wednesday 4 March/);
  const sent = plan(after, "I sent Grace Otieno the quote");
  assert.equal(sent.apply(after).leads[0].stage, "quoted");
  assert.match(read(sent.apply(after), "Who is waiting on a quote?"), /Nobody in "Mama Grace Salon" is waiting on a quote\./);
  assert.match(plan(ws, "I sent Grace Otieno the quote").response, /is not waiting on a quote/);
});

// ---- end to end through the business dispatcher, with a fake workspace and a fake sender
function workspaceApi(editable) {
  const client = { record_id: "rec_1", version: 1, data: { info: { businessName: "Mama Grace Salon" }, editable } };
  const saves = [];
  const businessRequest = async ({ method, body }) => {
    if (method === "GET") return { body: { clients: [client] } };
    saves.push(body); client.version += 1; client.data = { ...client.data, editable: body.editable };
    return { body: client };
  };
  return { client, saves, businessRequest };
}
const FAR_THU = "2099-03-05";

test("through the dispatcher: nothing is saved before the yes; the yes books once; the same words again do not double-book", async () => {
  const ws = workspaceApi(editableWith());
  const say = (command, confirmed) => voiceDispatch.run({ command, confirmed, businessRequest: ws.businessRequest, timeZone: "America/New_York" });
  const ask = await say(`Book Grace Otieno for ${FAR_THU} at 2pm for a haircut`, false);
  assert.equal(ask.status, "needs-confirmation"); assert.match(ask.response, /I can book Grace Otieno, haircut, on/);
  assert.equal(ws.saves.length, 0);
  const done = await say(`Book Grace Otieno for ${FAR_THU} at 2pm for a haircut`, true);
  assert.equal(done.status, "completed"); assert.equal(ws.saves.length, 1);
  assert.equal(ws.client.data.editable.appointments[0].startAt, `${FAR_THU}T14:00`);
  const again = await say(`Book John Kamau for ${FAR_THU} at 2pm`, true);
  assert.equal(again.status, "completed"); assert.match(again.response, /already taken by Grace Otieno/); assert.equal(ws.saves.length, 1, "nothing more is saved");
  const free = await say(`Am I free ${FAR_THU} at 2pm?`, false);
  assert.equal(free.status, "completed"); assert.match(free.response, /^No, .* is taken by Grace Otieno/);
  const hours = await say("Set my hours Monday to Friday 8 to 6", true);
  assert.equal(hours.status, "completed"); assert.equal(ws.client.data.editable.hours.length, 5);
});

test("through the dispatcher: the confirmation is marked sent only when the provider really sent it", async () => {
  const sentMessages = [];
  const ok = workspaceApi(editableWith({ appointments: [book(FAR_THU, "14:00", "Grace Otieno")] }));
  const send = (command, confirmed, workspace, sendMessage) => voiceDispatch.run({ command, confirmed, businessRequest: workspace.businessRequest, timeZone: "America/New_York", sendMessage });
  const ask = await send("Send Grace Otieno her confirmation", false, ok, async input => { sentMessages.push(input); });
  assert.equal(ask.status, "needs-confirmation"); assert.equal(sentMessages.length, 0, "nothing goes out before the yes");
  const done = await send("Send Grace Otieno her confirmation", true, ok, async input => { sentMessages.push(input); return { sid: "SM1" }; });
  assert.equal(done.status, "completed"); assert.equal(sentMessages.length, 1); assert.equal(sentMessages[0].to, "+254712345678");
  assert.equal(ok.client.data.editable.appointments[0].confirmation, "sent");

  const failing = workspaceApi(editableWith({ appointments: [book(FAR_THU, "14:00", "Grace Otieno")] }));
  const failed = await send("Send Grace Otieno her confirmation", true, failing, async () => { throw new Error("I could not send it: text message sending is not set up on this server yet, so nothing was sent."); });
  assert.equal(failed.status, "needs-input"); assert.match(failed.response, /nothing was sent/);
  assert.equal(failing.saves.length, 0); assert.equal(failing.client.data.editable.appointments[0].confirmation, "", "not marked sent");

  const noSender = workspaceApi(editableWith({ appointments: [book(FAR_THU, "14:00", "Grace Otieno")] }));
  const none = await voiceDispatch.run({ command: "Send Grace Otieno her confirmation", confirmed: true, businessRequest: noSender.businessRequest });
  assert.match(none.response, /sending a message is not available from here/); assert.equal(noSender.saves.length, 0);
});

test("the older add-an-appointment command also records a real day and time when one was said, and keeps its words", async () => {
  const ws = workspaceApi(editableWith());
  const done = await voiceDispatch.run({ command: "Add an appointment called Site visit tomorrow at 3pm", confirmed: true, businessRequest: ws.businessRequest, timeZone: "America/New_York" });
  assert.equal(done.status, "completed");
  const row = ws.client.data.editable.appointments[0];
  assert.equal(row.title, "Site visit"); assert.match(row.startAt, /^\d{4}-\d{2}-\d{2}T15:00$/); assert.equal(row.durationMinutes, 60); assert.equal(row.start, "tomorrow at 3pm");
  const words = workspaceApi(editableWith());
  await voiceDispatch.run({ command: "Add an appointment called Vet visit on Friday", confirmed: true, businessRequest: words.businessRequest, timeZone: "America/New_York" });
  assert.equal(words.client.data.editable.appointments[0].startAt, "", "a day with no time stays words only");
});

test("the workspace keeps the new fields when saved, and an older saved workspace reads back as it was", () => {
  const source = require("node:fs").readFileSync(require.resolve("../../nexus/business/service.js"), "utf8");
  assert.match(source, /startAt: "", durationMinutes: 0, customer: "", service: "", confirmation: "" \}, 400, new Set\(\["durationMinutes"\]\)/);
  assert.match(source, /hours: rows\(input\.hours === undefined \? \(starter\.hours \|\| \[\]\) : input\.hours, \{ day: "", open: "", close: "" \}, 7\)/);
  assert.match(source, /consent: "", consentDate: "", callConsent: "", callConsentDate: "" \}\)/);
});
