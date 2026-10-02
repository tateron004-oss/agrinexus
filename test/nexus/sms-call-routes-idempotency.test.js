"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const source = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");

// Found live (fresh-module audit): unlike every other real-external-side-effect action in this file (the
// AI-tool-call nexus_communications path for these exact same Twilio functions, calendar, email, Zoom --
// see /api/nexus/tools/zoom/meeting's own "Found live" comment for the identical bug shape), these six raw
// HTTP routes had no idempotency protection at all. The Provider Contact Bridge UI
// (public/app.js's runNexusProviderContactBridgeAction) has no disable-on-click guard, so a genuine
// double-click or slow-response retry sent two real SMS messages / placed two real calls to a real third
// party's phone number. Source-shape checked (matching the established pattern in
// telehealth-session-create-idempotency.test.js) since these routes call out to real Twilio credentials,
// which aren't exercised live in this test suite.
function routeBlock(pathname) {
  const start = source.indexOf(`if (url.pathname === "${pathname}" && req.method === "POST") {`);
  assert.ok(start > 0, `could not locate the ${pathname} route in server.js`);
  const end = source.indexOf("\n  }", start);
  return source.slice(start, end);
}

test("/api/nexus/tools/sms/send is routed through withActionLifecycle for idempotency", () => {
  const block = routeBlock("/api/nexus/tools/sms/send");
  assert.match(block, /await withActionLifecycle\(/);
  assert.match(block, /provider: "twilio", action: "sms\.send"/);
});

test("/api/nexus/tools/whatsapp/send is routed through withActionLifecycle for idempotency", () => {
  const block = routeBlock("/api/nexus/tools/whatsapp/send");
  assert.match(block, /await withActionLifecycle\(/);
  assert.match(block, /provider: "twilio", action: "whatsapp\.send"/);
});

test("/api/nexus/tools/call/start is routed through withActionLifecycle for idempotency", () => {
  const block = routeBlock("/api/nexus/tools/call/start");
  assert.match(block, /await withActionLifecycle\(/);
  assert.match(block, /provider: "twilio", action: "call\.start"/);
});

test("/api/nexus/tools/communications/sms/send is routed through withActionLifecycle for idempotency", () => {
  const block = routeBlock("/api/nexus/tools/communications/sms/send");
  assert.match(block, /await withActionLifecycle\(/);
  assert.match(block, /provider: "communicationsBridge", action: "sms\.send"/);
});

test("/api/nexus/tools/communications/whatsapp/send is routed through withActionLifecycle for idempotency", () => {
  const block = routeBlock("/api/nexus/tools/communications/whatsapp/send");
  assert.match(block, /await withActionLifecycle\(/);
  assert.match(block, /provider: "communicationsBridge", action: "whatsapp\.send"/);
});

test("/api/nexus/tools/communications/call/start is routed through withActionLifecycle for idempotency", () => {
  const block = routeBlock("/api/nexus/tools/communications/call/start");
  assert.match(block, /await withActionLifecycle\(/);
  assert.match(block, /provider: "communicationsBridge", action: "call\.start"/);
});
