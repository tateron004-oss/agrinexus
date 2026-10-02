"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (admin/investor dashboard audit): /api/nexus/operations/action
// and /api/nexus/operations/command are deliberately pre-auth (usable with
// no signed-in session at all), but when there was no real user, both routes
// fell back to `db.users.find(account => account.role === "Standard User")`
// -- the SAME real seeded account for every anonymous caller, server-wide.
// Since runNexusOperationsAction attributes every record's ownerId to
// user.id, two completely unrelated, unauthenticated browser sessions
// collided on the identical ownerId: Visitor A creates a real chronic-care
// profile (real patient name, medications, allergies), and unrelated
// Visitor B's very next pre-auth request -- a read with no ID, which falls
// back to "the most recent record this owner has" -- silently returns A's
// real record back to B.
const root = path.resolve(__dirname, "..", "..");
const port = 4711;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-anonymous-operations-cross-visitor-isolation-db.json");

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitFor(url) {
  for (let i = 0; i < 80; i += 1) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error(`${url} did not become reachable`);
}

async function postAnonymous(pathname, body = {}) {
  // Deliberately no cookie at all -- simulates a genuinely separate,
  // never-logged-in browser session, the real-world case this route is
  // designed to serve.
  const res = await fetch(`${base}${pathname}`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
  const responseBody = await res.json();
  return { status: res.status, json: responseBody.nexusOperationsResult || responseBody };
}

let server;

test.before(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
});

test.after(() => {
  server.kill();
  fs.rmSync(tempDbPath, { force: true });
});

// create_chronic_care_profile/show_chronic_care_timeline (the actions this test originally used) are
// now correctly refused for an anonymous caller entirely -- see
// nexus-operations-health-write-restriction-and-caps.test.js, a separate, later fix for a real
// unauthenticated-PHI-write bug. That fix is orthogonal to the cross-visitor isolation this test is
// actually about (the deviceId-based anonymousOperationsIdentity mechanism applies to every pre-auth
// action, not just health ones), so this test now exercises the same isolation logic against
// create_shipment/show_shipment_timeline instead, which are not health-write-gated.
test("two unrelated anonymous (never signed in) visitors never collide on the same pre-auth record", async () => {
  const created = await postAnonymous("/api/nexus/operations/action", {
    action: "create_shipment",
    origin: "Anonymous Visitor A Farm",
    destination: "Anonymous Visitor A Market",
    productType: "maize"
  });
  assert.equal(created.json.ok, true, JSON.stringify(created.json));
  const visitorAShipmentId = created.json.record.shipmentId;

  // A completely separate anonymous request -- no cookie, no ID supplied --
  // relying on the omitted-ID "most recent record" fallback.
  const readByAnotherVisitor = await postAnonymous("/api/nexus/operations/action", { action: "show_shipment_timeline" });
  assert.equal(readByAnotherVisitor.json.ok, true, JSON.stringify(readByAnotherVisitor.json));
  assert.notEqual(readByAnotherVisitor.json.record?.shipmentId, visitorAShipmentId,
    "an unrelated anonymous visitor must never be handed a different anonymous visitor's real record via the omitted-ID fallback");

  // A different anonymous visitor supplying the real ID directly must also
  // be refused (the ownership check itself, not just the fallback).
  const readByIdByAnotherVisitor = await postAnonymous("/api/nexus/operations/action", { action: "show_shipment_timeline", shipmentId: visitorAShipmentId });
  assert.notEqual(readByIdByAnotherVisitor.json.record?.shipmentId, visitorAShipmentId,
    "an unrelated anonymous visitor must never be able to view another anonymous visitor's real record by its real ID either");
});

test("the SAME anonymous visitor (same deviceId) keeps real continuity across separate requests, unaffected by the cross-visitor fix", async () => {
  const deviceId = "same-anonymous-browser-device";
  const created = await postAnonymous("/api/nexus/operations/action", {
    action: "create_shipment", origin: "Same Device Farm", destination: "Same Device Market", productType: "maize", deviceId
  });
  assert.equal(created.json.ok, true, JSON.stringify(created.json));

  // A later, separate request from the SAME device (the real, intended
  // behavior for one anonymous visitor's own multi-step session) must still
  // find their own record via the omitted-ID fallback.
  const readBySameDevice = await postAnonymous("/api/nexus/operations/action", { action: "show_shipment_timeline", deviceId });
  assert.equal(readBySameDevice.json.record?.shipmentId, created.json.record.shipmentId,
    "the same anonymous browser (same deviceId) must still find its own prior record across separate requests");
});
