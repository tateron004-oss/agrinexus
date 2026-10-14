"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

// Found by the Standard User test: asking for a pharmacy or a clinic by voice was answered "go to Google Maps". The page has a real places search, and the voice model was never told to use it.
const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
const start = server.indexOf("function openAiRealtimeInstructions(");
const end = server.indexOf("function nexusRealtimeCallableToolSchemas(", start);
const instructions = server.slice(start, end);

test("the voice model is told to search for pharmacies and clinics itself, and never to send the person to Google", () => {
  assert.ok(start > 0 && end > start);
  assert.match(instructions, /asks to find a pharmacy, chemist, clinic, hospital, health post or mobile clinic near them or near a named place/);
  assert.match(instructions, /you must call nexus_health_preparation with their complete request\. It searches real places/);
  assert.match(instructions, /never tell them to use Google, Google Maps or another app/);
  assert.match(instructions, /Never tell the person to use Google, Google Maps, a search engine or another app for something Nexus can do itself/);
  // (the rest of the rule about health is still there, ahead of it)
  assert.ok(instructions.indexOf("find a pharmacy, chemist") < instructions.indexOf("start or join a telehealth video call"), "placed with the health rules");
});

// When "hello" took ninety seconds nothing said where the time went: the server now writes down a slow voice session start.
test("a slow voice session start is written to the log", () => {
  const block = server.slice(server.indexOf('url.pathname === "/api/voice/realtime/session" && req.method === "POST"'), server.indexOf('url.pathname === "/api/voice/realtime/stall-report"'));
  assert.match(block, /const mintStartedAt = Date\.now\(\);\s*const session = await openAiRealtimeClientSecret\(/);
  assert.match(block, /if \(mintMs > 4000\) console\.warn\("\[voice-session-slow\]"/);
});
