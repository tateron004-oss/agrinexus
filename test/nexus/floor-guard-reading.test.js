"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const floor = require("../../nexus/brain/floor-guard.js");
const { scamGuardReply } = require("../../nexus/brain/scam-guard.js");
const { contentGuardReply } = require("../../nexus/brain/content-guard.js");

test("money: sends and withdrawals are refused, balances are not guessed, receipts and sales are records", () => {
  const expect = {
    "send 5000 to John on mpesa": "send", "withdraw 10000 from my wallet": "send", "tuma elfu mbili kwa Juma": "send", "make a payment": "send", "pay the driver 2000": "send",
    "what's my wallet balance": "balance", "check my balance": "balance", "salio langu ni ngapi": "balance",
    "nimepokea elfu tano kwa mpesa kutoka kwa Otieno": "record", "sold 1 goat 12000 cash and 3 chickens 4500 mpesa": "record", "John paid me 3000 on mpesa": "record", "paid John 5000": "record",
    "send 50 bags of maize to Nairobi": null, "pay attention to 5 things": null, "give 5 examples to my class": null, "tuma ujumbe kwa Juma": null, "how much should I sell 20 bags for": null,
    "what is the price of maize in Nakuru market today": null, "text John that his order is ready": null, "withdraw my application": null, "I want to sell maize": null
  };
  for (const [phrase, kind] of Object.entries(expect)) assert.equal(floor.moneyRequest(phrase), kind, phrase);
});

test("certificates: issue, list, lost and job questions are told apart; other kinds of certificate are left alone", () => {
  assert.equal(floor.certificateRequest("give me my certificate").kind, "certificate-issue");
  assert.equal(floor.certificateRequest("show my certificates").kind, "certificate-list");
  assert.equal(floor.certificateRequest("my certificate was stolen").kind, "certificate-lost");
  assert.equal(floor.certificateRequest("what jobs can I do with a form four certificate").kind, "jobs-question");
  assert.equal(floor.certificateRequest("get me a certificate of origin"), null);
  assert.equal(floor.certificateRequest("birth certificate"), null);
});

test("learning and work: questions are read-only; only explicit wording may change anything", () => {
  assert.equal(floor.learningRequest("what courses do you have").kind, "courses-list");
  assert.equal(floor.learningRequest("how far am I").kind, "progress");
  assert.equal(floor.learningRequest("how far is Kakamega"), null);
  assert.equal(floor.learningRequest("continue my course"), null);
  assert.equal(floor.learningRequest("complete my lesson").kind, "complete-lesson");
  assert.equal(floor.workRequest("show my applications").kind, "applications-list");
  assert.equal(floor.workRequest("withdraw my application").kind, "application-withdraw");
  assert.equal(floor.workRequest("jobs for old people, i am 62").kind, "jobs-question");
  assert.equal(floor.workRequest("apply for the telehealth assistant job").kind, "apply");
  assert.equal(floor.workRequest("Submit my application").kind, "apply");
  assert.equal(floor.workRequest("What jobs can I apply for in Kenya or South Africa?").kind, "jobs-question");
  assert.equal(floor.certificateRequest("do all 10 without adding real credentials"), null);
  assert.equal(floor.workRequest("it does not work"), null);
});

test("the keyword router may run a demo-record tool only for an explicit request", () => {
  const no = [["trade.market_review", "what is the price of maize in Nakuru market today"], ["trade.market_review", "order me a pizza"], ["drone.intervention_task", "how much water does tomato need with drip irrigation"], ["learning.start_or_continue", "what courses do you have"], ["workforce.match_role", "show my applications"], ["trade.wallet_payment", "send 5000 to John on mpesa"], ["ai.copilot", "book a flight"]];
  for (const [tool, phrase] of no) assert.equal(floor.toolMayRunFromLooseText(tool, phrase), false, `${tool}: ${phrase}`);
  const yes = [["trade.market_review", "create an order for maize"], ["drone.field_scan", "my field needs a drone scan before selling"], ["learning.start_or_continue", "continue my course"], ["workforce.match_role", "match me to a role"], ["map.route_risk", "check my route risk"]];
  for (const [tool, phrase] of yes) assert.equal(floor.toolMayRunFromLooseText(tool, phrase), true, `${tool}: ${phrase}`);
});

test("roles are found by the words in their name", () => {
  const roles = [{ id: "field-agent", title: "Field Operations Agent" }, { id: "telehealth-assistant", title: "Telehealth Access Assistant" }, { id: "cold-chain-associate", title: "Cold Chain Quality Associate" }];
  assert.deepEqual(floor.matchRoles(roles, floor.askedRoleName("apply for the telehealth assistant job")).map(role => role.id), ["telehealth-assistant"]);
  assert.deepEqual(floor.matchRoles(roles, floor.askedRoleName("apply for a job at cold chain")).map(role => role.id), ["cold-chain-associate"]);
  assert.deepEqual(floor.matchRoles(roles, floor.askedRoleName("apply for the first one")), []);
  assert.deepEqual(floor.matchRoles(roles, floor.askedRoleName("apply for a job at the moon")), []);
});

test("scams: PIN requests, fees for a job and ID copies to strangers get a warning in the language used; ordinary talk does not", () => {
  for (const phrase of ["recruiter wants my ID and mpesa PIN", "the loan officer needs my ID card and my M-Pesa PIN"]) assert.equal(scamGuardReply(phrase).kind, "scam-credential", phrase);
  for (const phrase of ["pay 5000 to get a job abroad", "the agency says I must pay a fee first for the visa"]) assert.equal(scamGuardReply(phrase).kind, "scam-fee", phrase);
  assert.equal(scamGuardReply("should I send my ID to a recruiter on whatsapp").kind, "scam-identity");
  assert.match(scamGuardReply("mwajiri anataka pin yangu").reply, /Usimpe mtu yeyote PIN/);
  assert.equal(scamGuardReply("mwajiri anataka pin yangu").language, "sw");
  // The plain cases the safety rules already answer keep their wording.
  for (const phrase of ["someone called asking for my otp", "should I give my pin to the agent"]) assert.equal(scamGuardReply(phrase), null, phrase);
  for (const phrase of ["how do I change my pin", "I forgot my password", "pay school fees 5000", "send 5000 to John on mpesa", "my job interview is tomorrow"]) assert.equal(scamGuardReply(phrase), null, phrase);
  // It is part of the shared content guard, so the planner, the phone line and the older route all give it.
  assert.equal(contentGuardReply("recruiter wants my ID and mpesa PIN").kind, "scam-credential");
});

test("sms: a text message request is recognised, a message to a buyer or a call is left to its own steps", () => {
  assert.equal(floor.smsRequest("send an sms to +254712345678 saying hello"), true);
  assert.equal(floor.smsRequest("text John that his order is ready"), true);
  assert.equal(floor.smsRequest("send an sms to the buyer"), false);
  assert.equal(floor.smsRequest("call John"), false);
  assert.equal(floor.smsRequest("Voice callback plus SMS"), false);
});
