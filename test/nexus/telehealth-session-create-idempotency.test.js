"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const source = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");

// Found live (uploads/telehealth/permissions follow-up audit):
// telehealth/session/create's videoProvider:"daily"/"zoom" branches create a
// real external video room (dailyProvider.createRoom / zoomProvider.createMeeting)
// but had no idempotency protection at all, unlike every other real-
// external-effect action in this file (SMS/calendar/email/Zoom-meeting via
// /api/nexus/tools/zoom/meeting) -- a retry/double-submit created a second
// real, billable room. This route is dispatched generically alongside dozens
// of purely-local intake/save/reminder routes in the same medicalPostRoutes
// table, so rather than mocking the network live end-to-end (the provider's
// own fetchImpl injection isn't threaded through this dispatch path), this
// confirms the fix is actually wired: the route is special-cased through
// withActionLifecycle before falling back to the generic dispatch used by
// every other route in the same table.
test("the medicalPostRoutes dispatcher routes telehealth/session/create through withActionLifecycle for idempotency", () => {
  const start = source.indexOf("if (req.method === \"POST\" && medicalPostRoutes[url.pathname]) {");
  assert.ok(start > 0, "could not locate the medicalPostRoutes dispatcher in server.js");
  const end = source.indexOf("\n  }", start);
  const block = source.slice(start, end);
  assert.match(block, /url\.pathname === "\/api\/nexus\/tools\/telehealth\/session\/create"\s*\n\s*\?\s*await withActionLifecycle\(/);
  assert.match(block, /provider: "telehealth-bridge", action: "telehealth\.session\.create"/);
});
