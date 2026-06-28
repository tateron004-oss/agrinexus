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

const docName = "NEXUS_SPRINT_P1_LOCATION_DISPATCH_PRODUCT_BOUNDARY.md";
const qaName = "nexus-sprint-p1-location-dispatch-product-boundary-qa.js";

assert(exists("docs", docName), "P1 product boundary doc must exist.");
assert(exists("scripts", qaName), "P1 QA script must exist.");

const doc = read("docs", docName);
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

[
  "Sprint P1",
  "Location/Dispatch Product Boundary",
  "does not access live geolocation",
  "share location",
  "execute map actions",
  "dispatch services",
  "Location intent",
  "Dispatch intent",
  "Location target",
  "Consent packet",
  "Dry-run dispatch packet",
  "farm location sharing review",
  "care access location review",
  "transportation pickup review",
  "field agent dispatch review",
  "mobile clinic visit review",
  "provider service area review",
  "map route review",
  "ambiguous location or dispatch request",
  "blocked live location/dispatch request",
  "locationDispatchIntentId",
  "locationDispatchIntentType",
  "targetIdentityResolutionId",
  "requestedLocationDisplay",
  "locationPrecisionRequirement",
  "dispatchCategory",
  "dispatchPurpose",
  "providerOrServiceRequirement",
  "consentRequirement",
  "dryRunPacket",
  "`locationSharingConsentRequired: true`",
  "`providerConfirmationRequired: true`",
  "`userApprovalRequired: true`",
  "`finalExecutionGateRequired: true`",
  "`executionAuthority: false`",
  "access live geolocation",
  "open external maps or navigation",
  "write backend state",
  "write browser storage",
  "create real pending actions",
  "Standard User build must remain safe",
  "console warnings/errors are zero",
  "Sprint P2 Readiness"
].forEach(term => assert(doc.includes(term), `P1 doc must include: ${term}`));

const alias = "qa:nexus-sprint-p1-location-dispatch-product-boundary";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include P1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-o8-payment-safety-closeout-qa.js"), "P1 requires Sprint O closeout QA to remain in qa-suite.");

console.log("[nexus-sprint-p1-location-dispatch-product-boundary-qa] passed");
