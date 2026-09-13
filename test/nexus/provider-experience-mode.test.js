"use strict";
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const test = require("node:test");
const assert = require("node:assert/strict");

function loadWithData(data, ...names) {
  const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
  const source = names.map(name => {
    const start = app.indexOf(`function ${name}(`);
    assert.ok(start >= 0, `function ${name} not found in public/app.js`);
    return app.slice(start, app.indexOf("\nfunction ", start + 1));
  }).join("\n");
  const context = vm.createContext({ data });
  vm.runInContext(`function can(area){return data?.permissions?.[area]!==false;}\n${source}`, context);
  return context;
}

// Mirrors permissionsForRole("Provider Reviewer")'s real output shape in
// server.js -- every permission key is explicitly present (true or false),
// never omitted, since the real can() there is opt-out (missing !== false).
const providerPermissions = {
  learning: false, workforce: false, health: true, trade: false, map: false, ai: false,
  integrations: false, admin: false, profile: true, notifications: true, governance: false, "provider-queue": true
};

test("a Provider Reviewer defaults into provider mode and is restricted to it", () => {
  const context = loadWithData(
    { user: { role: "Provider Reviewer" }, permissions: providerPermissions },
    "defaultExperienceMode", "allowedExperienceModes"
  );
  assert.equal(context.defaultExperienceMode(), "provider");
  assert.deepEqual([...context.allowedExperienceModes()], ["provider"]);
});

test("Standard User and Investor role labels still resolve exactly as before, and never pick up the new provider mode", () => {
  const standard = loadWithData(
    { user: { role: "Standard User" }, permissions: { learning: true, workforce: true, health: true, trade: true, map: true, ai: true, notifications: true, profile: true } },
    "defaultExperienceMode", "allowedExperienceModes"
  );
  assert.equal(standard.defaultExperienceMode(), "user");
  assert.deepEqual([...standard.allowedExperienceModes()], ["user"]);

  const investor = loadWithData(
    { user: { role: "Investor" }, permissions: { integrations: true, admin: false } },
    "defaultExperienceMode", "allowedExperienceModes"
  );
  assert.equal(investor.defaultExperienceMode(), "investor");
  assert.ok(!investor.allowedExperienceModes().includes("provider"));
  assert.ok(!investor.allowedExperienceModes().includes("admin"));
});

test("sectionPermissionArea maps the new cases section to the provider-queue permission", () => {
  const context = loadWithData({}, "sectionPermissionArea");
  assert.equal(context.sectionPermissionArea("cases"), "provider-queue");
});

test("a Provider Reviewer can open only dashboard, health, cases, and profile sections", () => {
  const context = loadWithData(
    { user: { role: "Provider Reviewer" }, permissions: providerPermissions },
    "sectionPermissionArea", "canOpenSection"
  );
  for (const allowed of ["dashboard", "health", "cases", "profile"]) {
    assert.equal(context.canOpenSection(allowed), true, allowed);
  }
  for (const blocked of ["learning", "workforce", "trade", "map", "agent", "integrations", "admin"]) {
    assert.equal(context.canOpenSection(blocked), false, blocked);
  }
});
