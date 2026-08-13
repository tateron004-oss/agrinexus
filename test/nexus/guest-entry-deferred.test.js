"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");

const app = fs.readFileSync("public/app.js", "utf8");
const index = fs.readFileSync("public/index.html", "utf8");

test("authoritative guest entry opens the protected Standard User orb experience", () => {
  assert.match(index, /data-testid="start-standard-user"/);
  assert.match(app, /guestStartBtn\.onclick = startGuestUserSession/);
  assert.match(app, /request\("\/api\/auth\/guest-session"/);
  assert.match(app, /data\?\.auth\?\.authenticated !== true/);
  assert.match(app, /data\?\.auth\?\.authoritative !== true/);
  assert.match(app, /data\?\.auth\?\.guest !== true/);
  assert.match(app, /data-nexus-orb="true"/);
  assert.match(app, /data-nexus-primary-voice-entry="true"/);
  assert.match(app, /handleNexusPrimaryVoiceButtonClick/);
  assert.doesNotMatch(app, /guestStartBtn\.disabled = true/);
  assert.doesNotMatch(app, /guestEntry\?\.remove\(\)/);
});
