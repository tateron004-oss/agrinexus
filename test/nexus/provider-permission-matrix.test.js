"use strict";
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const test = require("node:test");
const assert = require("node:assert/strict");

function loadFunctions(...names) {
  const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
  const source = names.map(name => {
    const start = server.indexOf(`function ${name}(`);
    assert.ok(start >= 0, `function ${name} not found in server.js`);
    return server.slice(start, server.indexOf("\nfunction ", start + 1));
  }).join("\n");
  const context = vm.createContext({});
  vm.runInContext(source, context);
  return context;
}

test("Standard User and Investor do not get provider-queue access", () => {
  const { canUse } = loadFunctions("permissionsForRole", "canUse");
  assert.equal(canUse({ role: "Standard User" }, "provider-queue"), false);
  assert.equal(canUse({ role: "Investor" }, "provider-queue"), false);
});

test("Admin and Provider Reviewer both get provider-queue access", () => {
  const { canUse } = loadFunctions("permissionsForRole", "canUse");
  assert.equal(canUse({ role: "Admin" }, "provider-queue"), true);
  assert.equal(canUse({ role: "Provider Reviewer" }, "provider-queue"), true);
});

test("Provider Reviewer keeps health/notifications/profile but not admin-only areas", () => {
  const { permissionsForRole } = loadFunctions("permissionsForRole", "canUse");
  const perms = permissionsForRole("Provider Reviewer");
  assert.equal(perms.health, true);
  assert.equal(perms.notifications, true);
  assert.equal(perms.profile, true);
  assert.equal(perms["provider-queue"], true);
  assert.equal(perms.admin, false);
  assert.equal(perms.governance, false);
  assert.equal(perms.integrations, false);
  assert.equal(perms.trade, false);
});

test("an unrecognized role falls back to Standard User permissions, not a crash", () => {
  const { permissionsForRole, canUse } = loadFunctions("permissionsForRole", "canUse");
  assert.deepEqual(permissionsForRole("Coordinator"), permissionsForRole("Standard User"));
  assert.equal(canUse({ role: "Coordinator" }, "provider-queue"), false);
});

test("canUse is null-safe for a missing or guest user instead of throwing", () => {
  const { canUse } = loadFunctions("permissionsForRole", "canUse");
  assert.equal(canUse(null, "provider-queue"), false);
  assert.equal(canUse(undefined, "health"), false);
});
