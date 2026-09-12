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

function createFakeTarget() {
  const appended = [];
  const doc = {
    createElement() {
      return {
        className: "",
        attributes: {},
        innerHTML: "",
        setAttribute(name, value) {
          this.attributes[name] = String(value);
        }
      };
    }
  };
  return {
    ownerDocument: doc,
    appended,
    querySelectorAll() {
      return [];
    },
    appendChild(element) {
      appended.push(element);
    }
  };
}

const docName = "NEXUS_SPRINT_C42_FLAG_ON_CONTROLLED_AGRICULTURE_PREVIEW_IMPLEMENTATION.md";
const qaName = "nexus-sprint-c42-flag-on-controlled-agriculture-preview-implementation-qa.js";
const moduleName = "nexus-agriculture-support-response-card.js";
const flagName = "NEXUS_SOURCE_BACKED_AGRICULTURE_PREVIEW_ENABLED";

assert(exists("docs", docName), "Sprint C42 implementation doc must exist.");
assert(exists("scripts", qaName), "Sprint C42 implementation QA must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const cards = require(path.join(root, "public", moduleName));

assertIncludes(doc, [
  "Current HEAD: `283ac7e4d67bf6b6dd6454c561bd23da0ec3ce01`",
  "Sprint C41",
  "public/nexus-agriculture-support-response-card.js",
  flagName,
  "disabled by default",
  "Flag-Off Behavior",
  "Flag-On Behavior",
  "Eligible Low-Risk Prompt Families",
  "Excluded and High-Risk Prompt Families",
  "Evidence & Verification",
  "Source Packets",
  "No-Execution Guarantees",
  "Browser Validation Requirement",
  "Sprint C43 Readiness Recommendation"
], "Sprint C42 doc");

assert(cards.SOURCE_BACKED_AGRICULTURE_PREVIEW_FLAG_NAME === flagName, "C42 runtime module must expose canonical flag name.");
assert(typeof cards.buildSourceBackedAgriculturePreviewCard === "function", "C42 builder must exist.");
assert(typeof cards.renderSourceBackedAgriculturePreviewCard === "function", "C42 renderer must exist.");
assert(typeof cards.isSourceBackedAgriculturePreviewEnabled === "function", "C42 flag helper must exist.");
assert(typeof cards.setSourceBackedAgriculturePreviewValidationEnabled === "function", "C42 validation-only flag setter must exist for browser validation.");

cards.setSourceBackedAgriculturePreviewValidationEnabled(false);
assert(cards.isSourceBackedAgriculturePreviewEnabled({}) === false, "C42 flag helper must default false.");
assert(cards.isSourceBackedAgriculturePreviewEnabled({ [flagName]: false }) === false, "C42 flag helper must reject false.");
assert(cards.isSourceBackedAgriculturePreviewEnabled({ [flagName]: "true" }) === false, "C42 flag helper must reject string true.");
assert(cards.isSourceBackedAgriculturePreviewEnabled({ [flagName]: true }) === true, "C42 flag helper must allow explicit boolean true.");
assert(cards.setSourceBackedAgriculturePreviewValidationEnabled("true") === false, "C42 validation setter must reject string true.");
assert(cards.isSourceBackedAgriculturePreviewEnabled({}) === false, "C42 validation setter must stay off unless boolean true.");
assert(cards.setSourceBackedAgriculturePreviewValidationEnabled(true) === true, "C42 validation setter must allow explicit boolean true.");
assert(cards.isSourceBackedAgriculturePreviewEnabled({}) === true, "C42 validation setter must enable browser validation without storage or UI.");
cards.setSourceBackedAgriculturePreviewValidationEnabled(false);
assert(cards.isSourceBackedAgriculturePreviewEnabled({}) === false, "C42 validation setter must be resettable to false.");

assert(cards.buildSourceBackedAgriculturePreviewCard("Help me find agriculture training", { globalRef: {} }) === null, "C42 source-backed card must not build while flag is off.");
assert(cards.renderSourceBackedAgriculturePreviewCard("Help me find agriculture training", createFakeTarget(), { globalRef: {} }) === null, "C42 source-backed renderer must not render while flag is off.");

[
  "Help me find agriculture training",
  "Teach me how irrigation works",
  "I need help with crop issues",
  "I need field support for my farm",
  "Browse AgriTrade"
].forEach(prompt => {
  const card = cards.buildSourceBackedAgriculturePreviewCard(prompt, { globalRef: { [flagName]: true } });
  assert(card, `C42 source-backed card must build for eligible prompt: ${prompt}`);
  assert(card.schemaVersion === "nexus.sprintC42.sourceBackedAgriculturePreviewCard.v1", "C42 card schema must be stable.");
  assert(card.reviewOnly === true, "C42 card must be review-only.");
  assert(card.evidenceAndVerification && card.evidenceAndVerification.noLiveLookup.includes("No live lookup"), "C42 card must include Evidence & Verification no-live-lookup disclosure.");
  assert(card.executionAuthority === false, "C42 card must not grant execution authority.");
  assert(card.providerHandoffAllowed === false, "C42 card must block provider handoff.");
  assert(card.pendingActionCreationAllowed === false, "C42 card must block pending action creation.");
  assert(card.networkSideEffectAllowed === false && card.liveLookupAllowed === false, "C42 card must block network/live lookup.");
});

[
  "Call an agronomist",
  "Message the seller on WhatsApp",
  "Buy seeds",
  "Sell my crop",
  "Use my camera to diagnose this plant",
  "Find my location",
  "Schedule a telehealth appointment",
  "Emergency pesticide poisoning",
  "Tell me the pesticide dose rate to spray"
].forEach(prompt => {
  assert(cards.buildSourceBackedAgriculturePreviewCard(prompt, { globalRef: { [flagName]: true } }) === null, `C42 must not build for excluded prompt: ${prompt}`);
});

const fakeTarget = createFakeTarget();
const renderResult = cards.renderSourceBackedAgriculturePreviewCard("Teach me how irrigation works", fakeTarget, { globalRef: { [flagName]: true } });
assert(renderResult && renderResult.element, "C42 renderer must return an inert rendered element for eligible flag-on prompt.");
const renderedHtml = renderResult.element.innerHTML;
assert(renderedHtml.includes("Evidence &amp; Verification"), "C42 rendered card must show Evidence & Verification.");
assert(renderedHtml.includes("No action has been taken."), "C42 rendered card must disclose no action.");
assert(!/<button\b/i.test(renderedHtml), "C42 source-backed preview must not render buttons.");
assert(!/<a\b/i.test(renderedHtml), "C42 source-backed preview must not render links.");
assert(renderResult.element.attributes["data-execution-authority"] === "false", "C42 rendered element must mark no execution authority.");
assert(renderResult.element.attributes["data-provider-handoff"] === "false", "C42 rendered element must mark no provider handoff.");
assert(renderResult.element.attributes["data-network-side-effect"] === "false", "C42 rendered element must mark no network side effect.");

[
  "fetch(",
  "XMLHttpRequest",
  "WebSocket",
  "EventSource",
  "navigator.geolocation",
  "getCurrentPosition",
  "watchPosition",
  "getUserMedia",
  "window.open",
  "location.href",
  "tel:",
  "mailto:",
  "localStorage.setItem",
  "sessionStorage.setItem",
  "PaymentRequest",
  "navigator.sendBeacon"
].forEach(forbidden => assert(!moduleSource.includes(forbidden), `C42 module must not include forbidden runtime side effect: ${forbidden}`));

assertIncludes(moduleSource, [
  "LOCAL_SOURCE_PACKETS",
  "Evidence &amp; Verification",
  "No live lookup, network request, provider contact, or backend write was performed.",
  "data-nexus-source-backed-agriculture-preview-card",
  "data-execution-authority\", \"false\"",
  "data-provider-handoff\", \"false\"",
  "data-pending-action-creation\", \"false\"",
  "data-network-side-effect\", \"false\""
], "C42 runtime implementation");

const alias = "qa:nexus-sprint-c42-flag-on-controlled-agriculture-preview-implementation";
const command = `node scripts/${qaName}`;
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint C42 QA.");

console.log("[nexus-sprint-c42-flag-on-controlled-agriculture-preview-implementation-qa] passed");
