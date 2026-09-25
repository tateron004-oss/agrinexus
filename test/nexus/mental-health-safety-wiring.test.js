"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const appJsPath = path.join(__dirname, "..", "..", "public", "app.js");
const source = fs.readFileSync(appJsPath, "utf8");

function extractFunction(name) {
  const start = source.indexOf(`function ${name}(`);
  assert.ok(start > 0, `could not locate function ${name} in app.js`);
  // The body's real "{" comes after the parameter list's matching ")" --
  // a default-parameter object literal like "packet = {}" has its own "{"
  // long before that, which would end brace-balancing far too early.
  const parenStart = source.indexOf("(", start);
  let parenDepth = 0;
  let parenEnd = parenStart;
  for (; parenEnd < source.length; parenEnd += 1) {
    if (source[parenEnd] === "(") parenDepth += 1;
    else if (source[parenEnd] === ")") {
      parenDepth -= 1;
      if (parenDepth === 0) break;
    }
  }
  const bodyStart = source.indexOf("{", parenEnd);
  let depth = 0;
  let i = bodyStart;
  for (; i < source.length; i += 1) {
    if (source[i] === "{") depth += 1;
    else if (source[i] === "}") {
      depth -= 1;
      if (depth === 0) break;
    }
  }
  return source.slice(start, i + 1);
}

function loadRenderNexusMentalHealthSupportCard() {
  const context = { console };
  vm.createContext(context);
  return vm.runInContext(`(function () {\n${extractFunction("renderNexusMentalHealthSupportCard")}\nreturn renderNexusMentalHealthSupportCard;\n})()`, context);
}

// Found live 2026-09-25: this card only ever showed a jurisdiction ID
// ("us") and a step count ("Safety plan steps: 4") -- never the actual
// hotline numbers or the actual step text, even for a genuine crisis
// classification with real resources already computed in the packet.
test("the mental-health card surfaces real crisis numbers and real safety-plan step text, not just an id/count", () => {
  const render = loadRenderNexusMentalHealthSupportCard();
  const packet = {
    classification: { state: "immediate_danger", action: "supportive_dialogue", riskTier: "crisis", professionalReviewRequired: true, crisisOverride: true },
    safety: { noDiagnosis: true, noProviderContacted: true },
    jurisdictionEscalation: { jurisdictionId: "us", escalation: { resourceTypes: ["988 Suicide & Crisis Lifeline", "local emergency services"], displayRules: ["988", "911"] } },
    safetyPlan: { steps: ["Move away from immediate means of harm when possible.", "Tell one trusted person what is happening if safe to do so."] },
    userVisibleStatus: "test"
  };
  const card = render(packet);
  const jurisdictionBullet = card.bullets.find(b => b.startsWith("Jurisdiction escalation:"));
  assert.match(jurisdictionBullet, /988/);
  assert.match(jurisdictionBullet, /911/);
  assert.ok(card.bullets.includes("Safety step: Move away from immediate means of harm when possible."));
  assert.ok(card.bullets.includes("Safety step: Tell one trusted person what is happening if safe to do so."));
});

test("an unconfirmed jurisdiction (no real numbers) still just reports the id, not a fabricated number", () => {
  const render = loadRenderNexusMentalHealthSupportCard();
  const packet = {
    classification: { state: "elevated_concern", crisisOverride: true },
    jurisdictionEscalation: { jurisdictionId: "generic", escalation: { resourceTypes: ["local emergency services"], displayRules: ["ask for city/region if safe"] } },
    safetyPlan: { steps: [] }
  };
  const card = render(packet);
  const jurisdictionBullet = card.bullets.find(b => b.startsWith("Jurisdiction escalation:"));
  assert.equal(jurisdictionBullet, "Jurisdiction escalation: generic");
  assert.ok(card.bullets.includes("Safety plan steps: 0"));
});

// Found live: this dispatcher was the one command-entry point that never
// checked mental-health/crisis safety before routing to the generic intent
// classifier, unlike every other dispatcher in this file.
test("routeNexusCommandCenterCommunicationSubmit checks mental-health safety before the generic intent-driven workflow router", () => {
  const fnStart = source.indexOf("function routeNexusCommandCenterCommunicationSubmit(");
  assert.ok(fnStart > 0, "could not locate routeNexusCommandCenterCommunicationSubmit");
  const fnEnd = source.indexOf("\nfunction ", fnStart + 10);
  const body = source.slice(fnStart, fnEnd);
  const mentalHealthCallIndex = body.indexOf("handleNexusMentalHealthBehavioralWellnessCommand(command");
  const genericRouterCallIndex = body.indexOf("routeNexusIntentDrivenWorkflowCommand(command");
  assert.ok(mentalHealthCallIndex > 0, "handleNexusMentalHealthBehavioralWellnessCommand is not called in this dispatcher");
  assert.ok(genericRouterCallIndex > 0, "routeNexusIntentDrivenWorkflowCommand is not called in this dispatcher");
  assert.ok(mentalHealthCallIndex < genericRouterCallIndex, "mental-health safety check must run before the generic intent-driven workflow router");
});

// Found live: the "Nexus answer" box read "Mode: undefined, Status: support"
// for every mental-health mission, because the mission object it built had
// no mode/goal fields even though the shared mission-snapshot renderer
// unconditionally reads both.
test("the mental-health mission object carries mode and goal, matching what the shared mission-snapshot renderer expects", () => {
  const handlerStart = source.indexOf("function handleNexusMentalHealthBehavioralWellnessCommand(");
  const handlerEnd = source.indexOf("\nfunction ", handlerStart + 10);
  const body = source.slice(handlerStart, handlerEnd);
  const missionLiteralMatch = body.match(/agenticMission:\s*\{([^}]*)\}/s);
  assert.ok(missionLiteralMatch, "could not find the agenticMission object literal");
  assert.match(missionLiteralMatch[1], /mode:/);
  assert.match(missionLiteralMatch[1], /goal:/);
});
