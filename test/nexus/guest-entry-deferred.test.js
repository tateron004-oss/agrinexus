"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const app = fs.readFileSync("public/app.js", "utf8");

test("unsupported guest entry is absent from the release-critical interface", () => {
  assert.match(app, /guestStartBtn\.disabled = true/);
  assert.match(app, /guestStartBtn\.removeAttribute\("onclick"\)/);
  assert.match(app, /guestEntry\?\.remove\(\)/);
  assert.doesNotMatch(app, /guestStartBtn\.onclick = startGuestUserSession/);
});
