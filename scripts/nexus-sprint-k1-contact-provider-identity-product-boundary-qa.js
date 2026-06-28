const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertIncludes(source, terms, label) {
  terms.forEach(term => assert(source.includes(term), `${label} must include: ${term}`));
}

const docName = "NEXUS_SPRINT_K1_CONTACT_PROVIDER_IDENTITY_PRODUCT_BOUNDARY.md";
const qaName = "nexus-sprint-k1-contact-provider-identity-product-boundary-qa.js";

assert(exists("docs", docName), "K1 product boundary doc must exist.");
assert(exists("scripts", qaName), "K1 QA script must exist.");

const doc = read("docs", docName);
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");

assertIncludes(doc, [
  "Sprint K1",
  "Contact and Provider Identity Product Boundary",
  "documentation and deterministic QA only",
  "does not add runtime UI",
  "identity lookup",
  "contact lookup",
  "provider lookup",
  "provider dispatch",
  "provider handoff",
  "calls",
  "messages",
  "WhatsApp",
  "Telegram",
  "SMS",
  "email",
  "scheduling",
  "payments",
  "purchases",
  "location sharing",
  "camera or microphone access",
  "medical/pharmacy behavior",
  "emergency routing",
  "marketplace transactions",
  "backend writes",
  "storage writes",
  "network calls",
  "pending real-world actions",
  "Approval is not execution",
  "final execution gate",
  "identityResolutionOnly: true",
  "approvalIntentOnly: true",
  "finalExecutionGateRequired: true",
  "executionAuthority: false",
  "providerDispatchAllowed: false",
  "providerHandoffAllowed: false",
  "communicationAllowed: false",
  "networkAllowed: false",
  "storageWriteAllowed: false",
  "backendWriteAllowed: false",
  "Standard User build",
  "public/index.html",
  "public/app.js",
  "server.js"
], "K1 doc");

[index, app, server].forEach((source, indexNumber) => {
  const label = ["index.html", "app.js", "server.js"][indexNumber];
  assert(!source.includes(docName), `${label} must not load the K1 doc.`);
  assert(!source.includes(qaName), `${label} must not load the K1 QA.`);
});

const alias = "qa:nexus-sprint-k1-contact-provider-identity-product-boundary";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint K1 QA.");

console.log("[nexus-sprint-k1-contact-provider-identity-product-boundary-qa] passed");
