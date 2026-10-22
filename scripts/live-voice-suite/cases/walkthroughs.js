"use strict";
// "Walk me through ...": Kyro opens a walkthrough, shows its first step with an official page and reads it out; "next" shows the second step. One case for each area: the United States money guide, Kenya, Nigeria and the athlete guide. They
// change nothing on the account: the person does each step, and Kyro files, pays and applies for nothing.
const walk = (id, say, first) => ({ id: `walk-${id}`, area: "walkthroughs", say, timeoutMs: 60000, expect: { screen: "walkthrough", text: first }, then: [{ say: "Next." }, { expect: { screen: "walkthrough", text: "Step 2 of" }, timeoutMs: 25000 }] });

module.exports = Object.freeze([
  walk("budget", "Walk me through making a budget.", "Write down every source of income"),
  walk("credit-report", "Walk me through checking my credit report.", "Get your free reports"),
  walk("debt-collector", "Walk me through dealing with a debt collector.", "Know what a collector may not do"),
  walk("kra-pin", "Walk me through getting a KRA PIN and filing my return in Kenya.", "Have your ID details ready"),
  walk("sacco", "Walk me through checking a SACCO is licensed in Kenya.", "Open SASRA's lists"),
  walk("ndic", "Walk me through checking a bank is covered by the NDIC in Nigeria.", "Open the NDIC's Banks We Cover page"),
  walk("micro-pension", "Walk me through opening a Micro Pension Plan in Nigeria.", "Check you can join"),
  walk("athletics-kenya", "Walk me through registering with Athletics Kenya.", "Gather your identity papers"),
  walk("student-visa", "Walk me through getting a US student visa as an athlete.", "Get accepted by an approved school")
]);
