"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const { JOURNEYS, fieldIdentityMatches, normalizeFieldIdentity } = require("./nexus-physical-journey-contract");
const { renderArtifactMarkup } = require("../browser/nexus-content-population-extension");

assert.equal(JOURNEYS.length, 19, "the complete physical journey matrix must remain covered");
assert.equal(new Set(JOURNEYS.map((journey) => journey.app)).size, JOURNEYS.length, "journey names must be unique");

const requiredOutcomeLanes = new Map([
  ["Live Weather", { visual: "weather", links: true }],
  ["Maps", { visual: "map" }],
  ["Agriculture Images", { visual: "agriculture-images", links: true }],
  ["Internet Sources and Recipe", { visual: "evidence", links: true }],
  ["Music and Media", { media: true }],
  ["Résumé Builder", { visual: "resume", controls: 2 }],
  ["Provider Contact Card", { visual: "provider-card", controls: 2 }]
]);

for (const [app, requirement] of requiredOutcomeLanes) {
  const journey = JOURNEYS.find((candidate) => candidate.app === app);
  assert.ok(journey, `${app} must remain in the physical matrix`);
  if (requirement.visual) assert.equal(journey.visual, requirement.visual, `${app} must retain rendered visual proof`);
  if (requirement.links) assert.equal(journey.links, true, `${app} must retain visible source-link proof`);
  if (requirement.media) assert.ok(journey.media instanceof RegExp, `${app} must retain audible media identity proof`);
  if (requirement.controls) assert.equal(journey.controls?.length, requirement.controls, `${app} must retain usable control proof`);
}

const editJourneys = JOURNEYS.filter((journey) => journey.edit);
assert.equal(editJourneys.length, 10, "all ten voice-edit journeys must remain covered");
for (const journey of editJourneys) {
  const contract = journey.edit.field;
  assert.match(contract.identity, /^[A-Za-z][A-Za-z0-9]*$/, `${journey.app} needs a stable semantic field identity`);
  assert.ok(contract.labels.length >= 1, `${journey.app} needs an explicitly declared compatible label`);
  assert.equal(new Set(contract.labels.map(normalizeFieldIdentity)).size, contract.labels.length, `${journey.app} labels must be distinct`);
  assert.ok(contract.expectedValue instanceof RegExp, `${journey.app} must verify the entered value`);
  assert.ok(fieldIdentityMatches(contract.identity, contract), `${journey.app} semantic identity must resolve`);
  for (const label of contract.labels) assert.ok(fieldIdentityMatches(label, contract), `${journey.app} compatible label ${label} must resolve`);

  const markup = renderArtifactMarkup({
    schema: "nexus.content.result.v2",
    requestId: `drift-${normalizeFieldIdentity(journey.app)}`,
    status: "ready",
    capability: "workspace",
    operation: "open",
    workspace: journey.workspace,
    acknowledgement: "Visible current-turn result.",
    artifact: {
      kind: "form", title: journey.app, description: "Certification drift contract",
      fields: [{ id: contract.identity, label: contract.labels[0], type: "text", value: "" }],
      sections: [], items: [], links: [], media: { state: "none" }
    }
  });
  assert.match(markup, new RegExp(`(?:id|name)="${contract.identity}"`), `${journey.app} must render semantic identity`);
  assert.match(markup, /aria-label=/, `${journey.app} must retain an accessible compatible label`);
}

for (const seed of [1, 2, 3]) {
  for (const journey of JOURNEYS) {
    const request = journey.command.replace(/^Nexus,\s*/i, "").replace(/[.]$/, "");
    const variants = [`Nexus, ${request.charAt(0).toLowerCase() + request.slice(1)}.`, `Hey Nexus, please ${request.charAt(0).toLowerCase() + request.slice(1)}.`, `Nexus, could you ${request.charAt(0).toLowerCase() + request.slice(1)}?`];
    assert.match(variants[seed - 1], /Nexus/i, `${journey.app} rotation ${seed} must preserve Nexus addressing`);
    for (const token of request.toLowerCase().match(/[a-z0-9]+/g).filter((token) => token.length >= 5)) {
      assert.ok(variants[seed - 1].toLowerCase().includes(token), `${journey.app} rotation ${seed} must preserve intent token ${token}`);
    }
  }
}

const physicalSource = fs.readFileSync("rebuild/tests/nexus-windows-physical-certification.spec.js", "utf8");
const cleanEntrySource = fs.readFileSync("rebuild/browser/nexus-clean-entry.js", "utf8");
assert.match(cleanEntrySource, /name="name" aria-label="Résumé full name"/, "résumé semantic identity must match production markup");
const resumeContract = JOURNEYS.find((journey) => journey.app === "Résumé Builder").edit.field;
assert.equal(resumeContract.identity, "name", "résumé journey must consume the production field identity");
for (const proof of [
  /workspace\.visible.*outcomeVerified/s,
  /data-populated.*true/,
  /evidence-source-link/,
  /a\[href\^='http'\]/,
  /nexus-map-canvas/,
  /nexus-map-link/,
  /nexus-app-surface.*media/s,
  /audio\.remote-attached/,
  /conversation\.return-to-listening/,
  /transactionId/
]) assert.match(physicalSource, proof, `physical certification must preserve ${proof}`);
assert.doesNotMatch(physicalSource, /getByLabel\(requiredFieldLabel/, "physical edits must not depend on one exact display label");
assert.match(physicalSource, /fieldIdentityMatches/, "physical edits must verify semantic receipt identity");
assert.match(physicalSource, /currentReceipt.*detail.*value/s, "physical edits must verify the current receipt value");

console.log("Nexus physical certification drift contract: PASS (19 journeys, semantic fields, compatible labels, strict outcomes)");
