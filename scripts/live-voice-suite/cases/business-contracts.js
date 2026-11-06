"use strict";
// "Check my contract" (owner, 5 November 2026), SAID. A throwaway guest has no contract saved or uploaded, so the honest answer is how to give Kyro one, never a made-up review. The review itself (what it says about the money, the length and
// how to end it, and what to look at closely, with "not legal advice") is covered by test/nexus/contract-check-nov5.test.js on real contract text, because a whole contract is not something a person says aloud.
module.exports = Object.freeze([
  { id: "ct-no-contract", area: "contracts", say: "Check my contract.", timeoutMs: 90000,
    expect: { screen: ["text", "list", "document"], text: "do not have a contract of yours to check[\\s\\S]*upload", notText: "legal advice|I read" } },
  { id: "ct-uploaded-none", area: "contracts", say: "Review the contract I uploaded.", timeoutMs: 90000,
    expect: { screen: ["text", "list", "document"], text: "do not see an uploaded Word, PDF or text file of yours|do not have a contract of yours", notText: "I read" } },
  { id: "ct-make-is-not-check", area: "contracts", writes: true, say: "Create a service agreement for my client.", timeoutMs: 90000,
    expect: { screen: ["text", "list", "document"], notText: "do not have a contract of yours to check|I read" } }
]);
