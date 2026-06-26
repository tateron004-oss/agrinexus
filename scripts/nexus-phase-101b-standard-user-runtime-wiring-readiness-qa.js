const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_PHASE_101B_STANDARD_USER_RUNTIME_WIRING_READINESS.md"),
  module: path.join(root, "public", "nexus-agriculture-support-response-card.js"),
  index: path.join(root, "public", "index.html")
};

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-phase-101b-standard-user-runtime-wiring-readiness-qa] ${message}`);
    process.exit(1);
  }
}

Object.values(paths).forEach(filePath => {
  assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`);
});

const doc = fs.readFileSync(paths.doc, "utf8");
const moduleSource = fs.readFileSync(paths.module, "utf8");
const index = fs.readFileSync(paths.index, "utf8");
const phase101 = require(paths.module);

assert(typeof phase101.buildAgricultureSupportCard === "function", "Phase 101 module must export buildAgricultureSupportCard.");
assert(typeof phase101.renderAgricultureSupportCard === "function", "Phase 101 module must export renderAgricultureSupportCard.");
assert(phase101.buildAgricultureSupportCard("My maize leaves are turning yellow"), "safe agriculture prompt must still build a card.");
assert(phase101.buildAgricultureSupportCard("Call an agronomist") === null, "call/provider prompt must not build a card.");

[
  "public/index.html",
  "public/nexus-voice-demo-shell.js",
  "nexus-agriculture-support-response-card.js",
  "normal Standard User build",
  "GitHub connector exposes whole-file replacement and not patch insertion",
  "No provider contacted",
  "No message sent",
  "No purchase made",
  "No location shared",
  "No permission prompt",
  "Phase 101C"
].forEach(required => assert(doc.includes(required), `readiness doc must include ${required}.`));

[
  "fetch(",
  "XMLHttpRequest",
  "navigator.geolocation",
  "getCurrentPosition",
  "watchPosition",
  "getUserMedia",
  "PaymentRequest",
  "navigator.sendBeacon",
  "localStorage.setItem"
].forEach(forbidden => assert(!moduleSource.includes(forbidden), `Phase 101 module must still avoid ${forbidden}.`));

const loaderPresent = index.includes("nexus-agriculture-support-response-card.js");
assert(!loaderPresent, "This readiness guard expects Phase 101C to perform the actual index.html loader insertion, not Phase 101B.");

console.log("[nexus-phase-101b-standard-user-runtime-wiring-readiness-qa] passed");
