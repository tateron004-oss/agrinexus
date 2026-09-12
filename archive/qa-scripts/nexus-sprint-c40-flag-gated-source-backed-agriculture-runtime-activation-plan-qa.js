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
  for (const term of terms) {
    assert(source.includes(term), `${label} must include: ${term}`);
  }
}

const docName = "NEXUS_SPRINT_C40_FLAG_GATED_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_PLAN.md";
const qaName = "nexus-sprint-c40-flag-gated-source-backed-agriculture-runtime-activation-plan-qa.js";

assert(exists("docs", docName), "Sprint C40 flag-gated activation plan must exist.");
assert(exists("scripts", qaName), "Sprint C40 flag-gated activation plan QA must exist.");

const doc = read("docs", docName);
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Current HEAD: `8673f09aa22651dc5cf2fb44d612fce208198729`",
  "Sprint C39",
  "Ron/product ownership approved",
  "NEXUS_SOURCE_BACKED_AGRICULTURE_PREVIEW_ENABLED",
  "default to false / disabled",
  "Flag-Off Expected Behavior",
  "Standard User visible behavior remains unchanged",
  "Flag-On Expected Behavior",
  "controlled source-backed preview card",
  "review-only",
  "Evidence & Verification",
  "Eligible Low-Risk Agriculture Prompt Families",
  "Excluded and High-Risk Prompt Families",
  "Source Packet Requirements",
  "No Live Lookup and No Network Behavior",
  "No Execution Boundary",
  "Manual Standard User Browser Validation Plan",
  "Rollback Strategy",
  "Sprint C41 Readiness Recommendation"
], "Sprint C40 activation plan");

assertIncludes(doc, [
  "agriculture training guidance",
  "irrigation education",
  "general crop issue support",
  "field support education",
  "AgriTrade education or marketplace overview without buy/sell execution"
], "Sprint C40 eligible prompt families");

assertIncludes(doc, [
  "image diagnosis",
  "camera-based crop analysis",
  "precise location sharing",
  "provider contact",
  "calls",
  "messages",
  "WhatsApp, Telegram, SMS, email, or phone-provider behavior",
  "payments",
  "marketplace buy/sell/listing/checkout/order behavior",
  "medical, pharmacy, telehealth, prescription, or emergency workflows",
  "backend writes",
  "pending agent actions",
  "live lookup or network retrieval"
], "Sprint C40 excluded prompt families");

assertIncludes(doc, [
  "source title",
  "data owner",
  "source type",
  "source date or freshness indicator",
  "confidence level",
  "verification state",
  "limitation or boundary text",
  "no-live-lookup statement"
], "Sprint C40 evidence and verification requirements");

assertIncludes(doc, [
  "must not introduce fetch",
  "WebSocket",
  "EventSource",
  "XHR",
  "third-party API calls",
  "external navigation",
  "backend source retrieval",
  "network side effects"
], "Sprint C40 no network requirements");

assertIncludes(doc, [
  "must not execute",
  "stage",
  "confirm",
  "dispatch",
  "submit",
  "send",
  "call",
  "pay",
  "buy",
  "sell",
  "schedule",
  "refill",
  "diagnose",
  "request location",
  "request camera"
], "Sprint C40 no execution requirements");

const alias = "qa:nexus-sprint-c40-flag-gated-source-backed-agriculture-runtime-activation-plan";
const command = `node scripts/${qaName}`;
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint C40 QA.");

console.log("[nexus-sprint-c40-flag-gated-source-backed-agriculture-runtime-activation-plan-qa] passed");
