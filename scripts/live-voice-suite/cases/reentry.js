"use strict";
// Questions from a person coming home after prison or jail, answered from the checked guide (nexus/knowledge/reentry-guide.js): one for each topic, for the United States and California. Each must put its official sources and the date checked on the screen, and the first thing the
// topic says. The guide takes a question only from a person who says they are coming home, so each case begins "I just got out of prison"; the California ones name California, because the live rig is a guest and sends no state of its own. They change nothing on any account and never name a case.
const strict = (id, say, key) => ({ id: `reentry-${id}`, area: "reentry", say, timeoutMs: 45000, expect: { screen: ["text", "list"], text: key, notText: "I cannot find|not sure what you" } });

module.exports = Object.freeze([
  strict("start", "I just got out of prison. I just got out, where do I even start?", "walk you through any step"),
  strict("ssn-card", "I just got out of prison. I lost my social security card, how do I get a new one?", "free replacement card"),
  strict("id", "I just got out of prison. How do I get my birth certificate? I have no ID", "birth certificate"),
  strict("snap", "I just got out of prison. Can I get food stamps with a drug felony?", "the state you live in decides"),
  strict("health", "I just got out of prison. How do I get health insurance after I get out?", "Special Enrollment Period"),
  strict("ssi-ssdi", "I just got out of prison. Can I get my Social Security or SSI back after I get out?", "proof of release"),
  strict("housing", "I just got out of prison. Can I live in public housing with a record?", "public housing agency"),
  strict("bank", "I just got out of prison. How do I open a bank account when I just got out?", "bank or credit union account"),
  strict("money-owed", "I just got out of prison. I owe fines and fees from my case, what do I do?", "money owed from a court case"),
  strict("jobs", "I just got out of prison. Can a company refuse to hire me because I have a record?", "file a complaint with the EEOC"),
  strict("background-check", "I just got out of prison. How do I see what is on my background check?", "written permission"),
  strict("record-clearing", "I just got out of prison. Can I get my record cleared?", "record clearance means"),
  strict("supervision", "I just got out of prison. What do I have to do when I report to my officer?", "Your own paperwork"),
  strict("voting", "I just got out of prison. Can I vote if I have a felony?", "depends on your state"),
  strict("help", "I just got out of prison. Who can I call when I need help?", "Dial 211"),
  strict("school", "I just got out of prison. Can I go to college after prison?", "once you are released"),
  strict("phone-lifeline", "I just got out of prison. Is there a way to get a cheaper phone bill?", "lowers the monthly cost"),
  strict("scams", "I just got out of prison. How can I tell if a text or a call is a scam?", "four signs"),
  strict("phone-safety", "I just got out of prison. How do I keep my phone safe?", "lock it with a passcode"),
  strict("accounts", "I just got out of prison. What is a Login.gov account?", "one account you use"),
  strict("ca-id", "I just got out of prison in California. How do I get an ID in California when I just got out?", "California ID card"),
  strict("ca-medi-cal", "I just got out of prison in California. How do I get Medi-Cal when I'm getting out of prison?", "135 days before release"),
  strict("ca-calfresh", "I just got out of prison in California. Can I get food stamps in California with a drug conviction?", "prior drug conviction"),
  strict("ca-jobs", "I just got out of prison in California. Can a California employer ask about my record on the application?", "Fair Chance Act"),
  strict("ca-records", "I just got out of prison in California. How do I get a copy of my own criminal record in California?", "your own criminal record"),
  strict("ca-voting", "I just got out of prison in California. Can I vote in California if I was in prison?", "register and vote"),
  strict("ca-lifeline", "I just got out of prison in California. How do I get a cheap phone plan in California?", "California LifeLine")
]);
