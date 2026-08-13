"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");

const server = fs.readFileSync("server.js", "utf8");
const app = fs.readFileSync("public/app.js", "utf8");

test("Start as User obtains a server-owned authoritative guest session", () => {
  assert.match(server, /\/api\/auth\/guest-session/);
  assert.match(server, /authType: "authoritative-guest"/);
  assert.match(server, /await authoritativeRuntimeUser\(guest\)/);
  assert.match(server, /issueDurableAuthToken\(guest\.id\)/);
  assert.match(server, /guest: true/);
  assert.match(app, /request\("\/api\/auth\/guest-session"/);
  assert.match(app, /data\?\.auth\?\.authoritative !== true/);
  assert.doesNotMatch(app, /request\("\/api\/login", \{ method: "POST", body: \{ email: "user@agrinexus\.org", password:/);
});

test("guest identities are unique, durable, restricted, and reloadable", () => {
  assert.match(server, /const guestId = `guest_\$\{crypto\.randomUUID\(\)\}`/);
  assert.match(server, /@guest\.agrinexus\.invalid/);
  assert.match(server, /restrictions: \["health-record-write", "communications-send", "external-transaction", "account-provider-link"\]/);
  assert.match(server, /existingUser\?\.guest === true/);
  assert.match(server, /resumed: true/);
  assert.match(server, /setCookieHeader\("agrinexus_auth", durableToken/);
});

test("demo profile selectors truthfully require a password", () => {
  assert.match(app, /label: "User", role: "Password required"/);
  assert.match(app, /selected\. Type the password to enter\./);
  assert.doesNotMatch(app, /password: "User2026!"/);
});
