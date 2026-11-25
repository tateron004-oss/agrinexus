"use strict";
// The front desk of a small business (phase 1 of the small-business assistant team, 5 November 2026), SAID, not typed: business hours, booking a named customer without a double booking, who is free when,
// the confirmation (refused with no number or email on file, never claimed as sent), permission to call back, quotes asked for, and cancelling. One journey in one workspace, so each step builds on the last.
// Days are said as "next Wednesday" so the journey works whatever day it runs; the default week is Monday to Friday, 9 to 5.
const SCREEN = ["text", "list", "document"];
module.exports = Object.freeze([
  { id: "fd-journey", area: "frontdesk", writes: true, say: "Start a business called Mama Grace Salon.", timeoutMs: 90000, expect: { screen: SCREEN, text: "Mama Grace Salon" },
    then: [
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Started a business" } },
      // hours
      { say: "Set my hours Monday to Friday 8 to 6.", timeoutMs: 90000, expect: { screen: SCREEN, text: "set the hours of[\\s\\S]*8 AM to 6 PM" } },
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Set the hours of[\\s\\S]*8 AM to 6 PM" } },
      { say: "What are my hours?", timeoutMs: 60000, expect: { screen: SCREEN, text: "Monday 8 AM to 6 PM[\\s\\S]*Friday 8 AM to 6 PM", notText: "no business hours saved" } },
      // booking
      { say: "Book Grace Wells for next Wednesday at 2 p.m. for a haircut.", timeoutMs: 90000, expect: { screen: SCREEN, text: "book Grace Wells[\\s\\S]*haircut[\\s\\S]*2 PM", notText: "could not tell|workforce" } },
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Booked Grace Wells[\\s\\S]*2 PM" } },
      { say: "Am I free next Wednesday at 2 p.m.?", timeoutMs: 60000, expect: { screen: SCREEN, text: "taken by Grace Wells" } },
      { say: "Book John Smith for next Wednesday at 2 p.m.", timeoutMs: 90000, expect: { screen: SCREEN, text: "already taken by Grace Wells[\\s\\S]*next openings", notText: "I can book" } },
      { say: "What is open next Wednesday?", timeoutMs: 60000, expect: { screen: SCREEN, text: "Free:[\\s\\S]*Booked: Grace Wells at 2 PM" } },
      { say: "Am I free next Sunday at 10 a.m.?", timeoutMs: 60000, expect: { screen: SCREEN, text: "is closed[\\s\\S]*next openings" } },
      // the confirmation: nothing is claimed as sent. A guest is told it needs a full account; a signed-in owner with no number on file is told there is no usable number. Either way it is refused.
      { say: "Send Grace Wells her confirmation.", timeoutMs: 90000, expect: { said: "full account|no usable phone number|couldn.t send|can.t send|not set up", notSaid: "(?:I|I have|I've) sent|has been sent|was sent" } },
      // permission to be called back
      { say: "Grace Wells agreed to be called back.", timeoutMs: 90000, expect: { screen: SCREEN, text: "Grace Wells agreed to be called back" } },
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Noted[\\s\\S]*Grace Wells agreed to be called back" } },
      { say: "Who can I call back?", timeoutMs: 60000, expect: { screen: SCREEN, text: "agreed to be called back: Grace Wells", notText: "follow-up" } },
      // a quote
      { say: "Grace Wells asked for a quote for a fence.", timeoutMs: 90000, expect: { screen: SCREEN, text: "asked for a quote for a fence" } },
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Noted[\\s\\S]*quote" } },
      { say: "Who is waiting on a quote?", timeoutMs: 60000, expect: { screen: SCREEN, text: "waiting on a quote: Grace Wells" } },
      // cancelling gives the time back
      { say: "Cancel Grace Wells's appointment.", timeoutMs: 90000, expect: { screen: SCREEN, text: "cancel Grace Wells's booking" } },
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Cancelled Grace Wells's booking[\\s\\S]*free again" } },
      { say: "Am I free next Wednesday at 2 p.m.?", timeoutMs: 60000, expect: { screen: SCREEN, text: "is free for an hour" } }
    ] }
]);
