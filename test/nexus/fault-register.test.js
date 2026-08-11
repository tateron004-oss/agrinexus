"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { FAULTS, validateFaultClosure } = require("../../nexus/acceptance/fault-register.js");
const sha = "b".repeat(40);

test("the binding register contains exactly all 30 fault obligations", () => assert.equal(FAULTS.length, 30));

test("release fails closed if even one fault lacks implementation, tests, or proof", () => {
  const evidence = FAULTS.slice(0, 29).map(fault => ({ fault, status: "closed", releaseSha: sha,
    implementation: "implemented", tests: ["test"], proofs: ["proof"] }));
  assert.throws(() => validateFaultClosure({ releaseSha: sha, evidence }), error =>
    error.code === "fault_register_incomplete" && error.openFaults.length === 1);
});

test("release closes only when all 30 obligations are exact-release proven", () => {
  const evidence = FAULTS.map(fault => ({ fault, status: "closed", releaseSha: sha,
    implementation: "implemented", tests: ["test"], proofs: ["proof"] }));
  assert.equal(validateFaultClosure({ releaseSha: sha, evidence }).faultCount, 30);
});
