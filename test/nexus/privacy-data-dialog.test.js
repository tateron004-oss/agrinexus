"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

// The "Privacy & data" button used to be a browser OK/Cancel box where OK meant DELETE EVERYTHING and Cancel meant EXPORT -- the opposite
// of what those buttons say to a person (or a screen reader). It is now a screen with plainly labelled buttons. These checks pin the safety
// properties; the behaviour itself was exercised in a real browser (open, delete panel, wrong word refused, Escape/backdrop/Close, no
// duplicate dialogs, erase called with confirmed:true only after DELETE).
const source = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const start = source.indexOf("function openPrivacyDataDialog()");
const end = source.indexOf("function ensureKyroVoiceIntakeStyles()");
const dialog = source.slice(start, end);

test("the privacy button opens the dialog and no longer uses a browser confirm/prompt", () => {
  assert.ok(start > 0 && end > start);
  assert.match(source, /privacyDataBtn\.onclick = \(\) => openPrivacyDataDialog\(\);/);
  assert.doesNotMatch(source, /Click OK to permanently DELETE/);
  assert.doesNotMatch(dialog, /window\.(confirm|prompt)\(/);
});

test("the buttons say what they do, the safe action comes first, and there is a Close", () => {
  const labels = [...dialog.matchAll(/data-pd="([a-z-]+)"(?: disabled)?>\$\{escapeHtml\(translateText\("([^"]+)"\)\)\}/g)].map(match => [match[1], match[2]]);
  assert.deepEqual(labels.map(label => label[0]), ["export", "erase-start", "erase-confirm", "erase-cancel", "close"]);
  assert.equal(labels[0][1], "Download a copy of my data");
  assert.equal(labels[1][1], "Delete my account and data");
  assert.ok(dialog.indexOf('data-pd="export"') < dialog.indexOf('data-pd="erase-start"'), "the safe action must be listed before the destructive one");
});

test("deleting needs a separate step, the typed word, and sends confirmed:true only from the confirm button", () => {
  const eraseCalls = [...dialog.matchAll(/\/api\/account\/erase/g)];
  assert.equal(eraseCalls.length, 1, "exactly one place may call the erase route");
  const calledAt = dialog.indexOf("/api/account/erase");
  const guardAt = dialog.indexOf('toUpperCase() !== "DELETE"', dialog.indexOf('action === "erase-confirm"'));
  assert.ok(guardAt > 0 && guardAt < calledAt, "the DELETE check must run before the erase call, inside the confirm handler");
  assert.match(dialog, /erase-confirm" disabled>/, "the confirm button starts disabled");
  assert.match(dialog, /body: \{ confirmed: true \}/);
});

test("it can be dismissed (Escape, backdrop, Close) and only one can be open", () => {
  assert.match(dialog, /event\.key === "Escape"/);
  assert.match(dialog, /event\.target === overlay/);
  assert.match(dialog, /if \(document\.getElementById\("privacyDataDialog"\)\) return;/);
  assert.match(dialog, /role", "dialog"/);
  assert.match(dialog, /aria-modal/);
});

test("the export link only ever points at a path on this site", () => {
  assert.match(dialog, /\/\^\\\/\[\^\/\\\\\]\/\.test\(String\(result\.downloadPath/);
});
