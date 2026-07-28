"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "browser", "index.html"), "utf8");
const css = fs.readFileSync(path.join(root, "browser", "nexus-clean.css"), "utf8");
const entry = fs.readFileSync(path.join(root, "browser", "nexus-clean-entry.js"), "utf8");

assert.match(html, /Hello Ron, how can I help\?/);
assert.match(html, /id="nexus-orb"/);
assert.match(html, /aria-label="Speak to Nexus"/);
assert.match(html, /id="nexus-audio"/);
assert.doesNotMatch(html, /card|dashboard|navigation/i);
assert.match(css, /prefers-reduced-motion/);
assert.match(entry, /new NexusMicrophoneController/);
assert.match(entry, /new NexusRealtimeConnector/);
assert.match(entry, /nexus\.clean\.workspace\.acknowledged/);
assert.match(entry, /\/api\/voice\/session/);
assert.match(entry, /\/v1\/realtime\/calls/);
assert.doesNotMatch(entry, /public\/app\.js|legacy/i);
assert.doesNotMatch(entry, /browserVerificationSecret|NexusSessionAuthority/);

console.log("Nexus clean browser shell: PASS");
