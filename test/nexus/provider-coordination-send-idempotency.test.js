"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const source = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");

// Found live (telehealth/pharmacy audit): sendNexusProviderCoordinationPacket's
// real email and SMS/WhatsApp sends (shared by both
// POST /api/nexus/pharmacy/send-referral and POST /api/nexus/mobile-clinic/send-request)
// had no idempotency protection at all -- unlike the sibling telehealth /notify
// route, already fixed for the identical issue. A retry or double-submit sent
// the same real message twice to the pharmacy's/clinic's configured
// destination. Source-shape checked for the same reason as the sibling
// telehealth-session-create-idempotency.test.js: the network call isn't
// easily mocked live through this dispatch path.
test("sendNexusProviderCoordinationPacket's real email and SMS/WhatsApp sends are each routed through withActionLifecycle for idempotency", () => {
  const start = source.indexOf("async function sendNexusProviderCoordinationPacket(");
  assert.ok(start > 0, "could not locate sendNexusProviderCoordinationPacket in server.js");
  const end = source.indexOf("\nfunction nexusGlobalMarketplaceLogisticsIntent(", start);
  assert.ok(end > start, "could not find the end of sendNexusProviderCoordinationPacket in server.js");
  const block = source.slice(start, end);
  assert.match(block, /provider: "nexus-provider-coordination", action: `\$\{config\.lane\}\.referral\.email`/);
  assert.match(block, /provider: "nexus-provider-coordination", action: `\$\{config\.lane\}\.referral\.\$\{mode\}`/);
  assert.equal((block.match(/await withActionLifecycle\(/g) || []).length, 2, "both the email and sms/whatsapp sends must each go through withActionLifecycle");
  // This one function backs BOTH the pharmacy and mobile-clinic lanes (config.lane
  // varies by caller) -- confirming the action name folds in config.lane means a
  // pharmacy referral and a mobile-clinic request for otherwise-similar content
  // can never collide on the same idempotency key.
  assert.match(block, /config\.lane/);
});
