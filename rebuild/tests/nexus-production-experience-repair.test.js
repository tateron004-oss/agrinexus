"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { createContentActionService, emptyArtifact } = require("../nexus-core/content-action-service");
const { createOpenMapProvider, parseMapRequest } = require("../nexus-core/map-service");
const { renderArtifactMarkup } = require("../browser/nexus-content-population-extension");

function failingResolver() { return { async resolve() { throw new Error("Goal provider unavailable for resilience test."); } }; }

async function main() {
  const noNetwork = async () => { throw new Error("Network should not be used for this artifact."); };
  const resilient = createContentActionService({ goalResolver: failingResolver(), fetchImpl: noNetwork, webSearchProvider: async () => { throw new Error("Reference provider unavailable."); } });

  const resume = await resilient.execute({ command: "Please build a CV for a vineyard technician with 7 years of experience." });
  assert.equal(resume.status, "ready");
  assert.equal(resume.capability, "resume");
  assert.equal(resume.artifact.kind, "document");
  assert.ok(resume.artifact.fields.length >= 5);
  assert.match(resume.artifact.fields.find(field => field.id === "experience").value, /7 years/i);

  const revised = await resilient.execute({
    command: "Add four seasons maintaining irrigation pumps to the work experience.",
    activeWorkspace: "workforce",
    previousArtifact: resume.artifact,
    visibleFields: resume.artifact.fields.map(field => ({ id: field.id, value: field.value }))
  });
  assert.equal(revised.status, "ready");
  assert.match(revised.artifact.fields.find(field => field.id === "experience").value, /irrigation pumps/i);

  const spokenRevision = await resilient.execute({
    command: "Update the visible resume. Nice addition. In summary, the candidate now has three years coordinating harvest crews. Put that in the experience bullets and keep the document editable.",
    activeWorkspace: "workforce",
    previousArtifact: revised.artifact,
    visibleFields: revised.artifact.fields.map(field => ({ id: field.id, value: field.value }))
  });
  assert.equal(spokenRevision.status, "ready");
  assert.match(spokenRevision.artifact.fields.find(field => field.id === "experience").value, /three years coordinating harvest crews/i);

  const card = await resilient.execute({ command: "Make a printable checklist of questions for my pharmacist about a newly prescribed antibiotic." });
  assert.equal(card.status, "ready");
  assert.equal(card.capability, "question-card");
  assert.equal(card.artifact.kind, "card");
  assert.ok(card.artifact.links.some(link => /fda\.gov/.test(link.url)));
  assert.match(card.artifact.sections.map(section => section.body).join(" "), /do not start, stop/i);

  const marketplace = await resilient.execute({ command: "Draft a marketplace listing for 24 crates of mangoes in Accra." });
  assert.equal(marketplace.status, "ready");
  assert.equal(marketplace.capability, "marketplace-draft");
  assert.ok(marketplace.artifact.fields.length >= 4);

  let clinicProviderCalls = 0;
  const clinicRecoveryService = createContentActionService({
    goalResolver: { async resolve() { return {
      capability: "listings", operation: "search", workspace: "mobile-clinic",
      query: "mobile clinic in Kenya", location: "Kenya", needsLiveProvider: true,
      artifact: emptyArtifact("list", "Mobile clinics in Kenya"), acknowledgement: "Clinic listings are visible."
    }; } },
    fetchImpl: async () => {
      clinicProviderCalls += 1;
      return { ok: true, status: 200, async json() { return []; } };
    }
  });
  const clinicRecovery = await clinicRecoveryService.execute({ command: "Nexus, find a mobile clinic in Kenya." });
  assert.equal(clinicRecovery.status, "ready");
  assert.equal(clinicRecovery.workspace, "mobile-clinic");
  assert.equal(clinicRecovery.evidence.status, "truthful-no-results-recovery");
  assert.ok(clinicProviderCalls >= 3);
  assert.ok(clinicRecovery.artifact.links.some(link => /openstreetmap\.org\/search/.test(link.url)));
  assert.match(clinicRecovery.acknowledgement, /No verified clinic listings were returned/i);
  assert.doesNotMatch(clinicRecovery.acknowledgement, /Clinic listings are visible/i);

  let workforcePlaceCalls = 0;
  let workforceWebQuery = "";
  const workforceService = createContentActionService({
    goalResolver: { async resolve() { return {
      capability: "listings", operation: "search", workspace: "workforce",
      query: "farming jobs in Kenya", location: "Kenya", needsLiveProvider: true,
      artifact: emptyArtifact("list", "Farming jobs in Kenya"), acknowledgement: "The job results are visible."
    }; } },
    fetchImpl: async () => {
      workforcePlaceCalls += 1;
      throw new Error("Workforce job searches must not call the place-listings provider.");
    },
    webSearchProvider: async query => {
      workforceWebQuery = query;
      return {
        summary: "Current farming opportunities from live sources.",
        sources: [
          { title: "Agriculture jobs in Kenya", url: "https://jobs.example.org/kenya-agriculture" },
          { title: "Kenya workforce opportunities", url: "https://work.example.org/kenya" }
        ]
      };
    }
  });
  const workforce = await workforceService.execute({ command: "Nexus, search for farming jobs in Kenya." });
  assert.equal(workforce.status, "ready");
  assert.equal(workforce.workspace, "workforce");
  assert.equal(workforce.capability, "search");
  assert.equal(workforceWebQuery, "farming jobs in Kenya");
  assert.equal(workforcePlaceCalls, 0);
  assert.equal(workforce.artifact.items.length, 2);
  assert.ok(workforce.artifact.items.every(item => item.sourceUrl));

  assert.deepEqual(parseMapRequest("Nairobi, Kenya to Nakuru, Kenya"), { type: "route", origin: "Nairobi, Kenya", destination: "Nakuru, Kenya" });
  assert.deepEqual(parseMapRequest("Show a map of Nairobi, Kenya and give me directions to Nakuru."), { type: "route", origin: "Nairobi, Kenya", destination: "Nakuru, Kenya" });
  const mapRequests = [];
  const mapProvider = createOpenMapProvider({ fetchImpl: async input => {
    const url = String(input);
    mapRequests.push(url);
    if (url.includes("nominatim")) {
      const query = new URL(url).searchParams.get("q");
      const nairobi = /nairobi/i.test(query);
      return { ok: true, status: 200, async json() { return [{ display_name: nairobi ? "Nairobi, Kenya" : "Nakuru, Kenya", lat: nairobi ? "-1.286389" : "-0.303099", lon: nairobi ? "36.817223" : "36.080025", type: "city", addresstype: "city", category: "place", address: { country_code: "ke" }, boundingbox: ["-1.45", "-1.15", "36.65", "36.95"] }]; } };
    }
    return { ok: true, status: 200, async json() { return { code: "Ok", routes: [{ distance: 158000, duration: 9300, geometry: { coordinates: [[36.817223, -1.286389], [36.44, -0.72], [36.080025, -0.303099]] } }] }; } };
  } });
  const route = await mapProvider("Nairobi, Kenya to Nakuru, Kenya");
  assert.equal(route.type, "route");
  assert.equal(route.origin.label, "Nairobi, Kenya");
  assert.equal(route.destination.label, "Nakuru, Kenya");
  assert.equal(route.geometry.coordinates.length, 3);
  assert.ok(mapRequests.some(url => /router\.project-osrm\.org/.test(url)));

  const mapGoal = { capability: "map", operation: "open", workspace: "maps", query: "Nairobi, Kenya to Nakuru, Kenya", location: "Kenya", needsLiveProvider: true, artifact: emptyArtifact("map", "Nairobi to Nakuru"), acknowledgement: "The route is visible." };
  const mapService = createContentActionService({ goalResolver: { async resolve() { return mapGoal; } }, fetchImpl: noNetwork });
  const visibleMap = await mapService.execute({ command: "Show that route" }, { map: () => Promise.resolve(route) });
  assert.equal(visibleMap.status, "ready");
  assert.ok(visibleMap.artifact.media.route.coordinates.length >= 3);
  const mapMarkup = renderArtifactMarkup(visibleMap);
  assert.match(mapMarkup, /nexus-content-map-route/);
  assert.match(mapMarkup, /Nairobi, Kenya/);

  let musicQuery = "";
  const musicService = createContentActionService({
    goalResolver: failingResolver(),
    fetchImpl: async input => {
      musicQuery = new URL(String(input)).searchParams.get("term");
      return { ok: true, status: 200, async json() { return { results: musicQuery === "Stevie Wonder" ? [{ trackId: 1, trackName: "Superstition", artistName: "Stevie Wonder", previewUrl: "https://audio.example/superstition.m4a", trackViewUrl: "https://music.example/superstition", artworkUrl100: "https://image.example/100x100bb.jpg", primaryGenreName: "R&B" }] : [] }; } };
    }
  });
  const music = await musicService.execute({ command: "Nexus, find and play some Stevie Wonder music." });
  assert.equal(music.status, "ready");
  assert.equal(music.capability, "music");
  assert.equal(musicQuery, "Stevie Wonder");
  assert.equal(music.artifact.items.length, 1);

  const productionScript = fs.readFileSync(path.resolve(__dirname, "..", "browser", "nexus-production-capability-bridge.js"), "utf8");
  const productionCss = fs.readFileSync(path.resolve(__dirname, "..", "browser", "nexus-production-capability-bridge.css"), "utf8");
  assert.ok(productionScript.includes("voice\\/realtime\\/tool"));
  assert.match(productionScript, /renderer\.acknowledged/);
  assert.match(productionScript, /timed-out-after/);
  assert.match(productionScript, /provider\.retry/);
  assert.match(productionScript, /activeCertifiedGuidedEntry/);
  assert.match(productionScript, /guided-entry\.owner-preserved/);
  assert.match(productionScript, /superseded-by-new-request/);
  assert.match(productionScript, /workspace\.closed/);
  assert.match(productionScript, /request\.cancelled/);
  assert.match(productionScript, /workspace\.previous-visible/);
  assert.match(productionScript, /media\.paused/);
  assert.match(productionScript, /media\.resumed/);
  assert.match(productionScript, /accessibility\.text-resized/);
  assert.match(productionScript, /accessibility\.read-aloud/);
  assert.match(productionScript, /request\.retry-by-voice/);
  assert.match(productionCss, /#0c2530/);
  assert.doesNotMatch(productionCss.split("@media print")[0], /background:\s*(?:#fff|white|rgba\(255,\s*255,\s*255)/i);

  console.log("Nexus production experience repair: PASS (general documents, field follow-up, medication card, marketplace, validated route, arbitrary music, recovery and accessibility)");
}

main().catch(error => { console.error(error); process.exitCode = 1; });
