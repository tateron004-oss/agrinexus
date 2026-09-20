"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const source = fs.readFileSync(path.join(__dirname, "../../scripts/provider-engines.js"), "utf8");
const start = source.indexOf('"health.emergency-guidance": {');
const block = source.slice(start, source.indexOf('"telehealth.prepare"', start));
assert.ok(start > 0 && block.length > 200, "the emergency guidance evidence must stay findable");

// The emergency guidance used to begin "Call 911 or your local emergency number", which is a US number; the people
// using Nexus are mostly in Africa.
test("the emergency guidance leads with the person's own local number, not a US-only one", () => {
  const safety = block.match(/safetyResponse: "([^"]+)"/)[1];
  const first = block.match(/immediateActions: \[\s*"([^"]+)"/)[1];
  assert.match(safety, /^This may be a medical emergency\. Call your local emergency number now/);
  assert.match(first, /^Call your local emergency number now/);
  assert.doesNotMatch(safety, /^This may be a medical emergency\. Call 911/);
  assert.doesNotMatch(first, /^Call 911/);
});

test("it names the well-established numbers for the regions Nexus serves, without claiming to dispatch anyone", () => {
  const safety = block.match(/safetyResponse: "([^"]+)"/)[1];
  assert.match(safety, /999 or 112 in Kenya/); assert.match(safety, /112 in Nigeria/); assert.match(safety, /911 in the U\.S\./);
  assert.match(safety, /Do not wait for Nexus or drive yourself/, "the urgent instructions are unchanged");
  assert.match(block, /emergencyServicesDispatched: false/);
  assert.match(block, /Nexus cannot diagnose this condition or dispatch emergency services\./);
  assert.match(block, /"Do not wait for Nexus and do not drive yourself\."/);
});
