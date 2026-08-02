"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  GOAL_SCHEMA,
  createContentActionService,
  createOpenAIGoalResolver,
  emptyArtifact,
  normalizeGoalRoute,
  normalizeWebSearchPayload
} = require("../nexus-core/content-action-service");
const { applicationDeadlineFallback, normalizeGuidedFieldValue, renderArtifactMarkup, shouldYieldTranscriptToGuidedEntry } = require("../browser/nexus-content-population-extension");

function artifact(kind, title) {
  return { ...emptyArtifact(kind, title), description: `Visible ${title}` };
}

async function main() {
  const browserSource = fs.readFileSync(path.resolve(__dirname, "..", "browser", "nexus-content-population-extension.js"), "utf8");
  assert.doesNotMatch(browserSource, /function\s+planContentAction|extractMarketplace|extractMusicQuery|pharmacist question card/i);
  assert.match(browserSource, /previousArtifact/);
  assert.match(browserSource, /visibleFields/);
  assert.match(browserSource, /recentConversation|history/);
  const editableWorkspace = {
    hidden: false,
    querySelectorAll() { return [{ readOnly: false, type: "text" }]; }
  };
  const editableDocument = { getElementById() { return editableWorkspace; } };
  assert.equal(shouldYieldTranscriptToGuidedEntry("Nexus, set care needed to blood pressure screening.", editableDocument), true);
  assert.equal(shouldYieldTranscriptToGuidedEntry("Nexus, find a mobile clinic in Kenya.", editableDocument), false);
  editableWorkspace.hidden = true;
  assert.equal(shouldYieldTranscriptToGuidedEntry("Nexus, set care needed to blood pressure screening.", editableDocument), false);
  const healthFallback = applicationDeadlineFallback({ requestId: "health-1", workspace: "health", command: "Nexus, record my blood pressure 140 over 90." });
  assert.equal(healthFallback.status, "ready");
  assert.deepEqual(healthFallback.artifact.fields.map((field) => field.label), ["Blood pressure or reading", "When measured", "Symptoms or notes"]);
  assert.equal(applicationDeadlineFallback({ requestId: "provider-1", workspace: "health", command: "Nexus, create a provider card for my doctor." }), null);
  assert.equal(applicationDeadlineFallback({ requestId: "images-1", workspace: "agriculture", command: "Nexus, show maize disease pictures." }), null);
  assert.equal(applicationDeadlineFallback({ requestId: "jobs-1", workspace: "workforce", command: "Nexus, search for farming jobs in Kenya." }).status, "ready");
  assert.equal(applicationDeadlineFallback({ requestId: "resume-1", workspace: "workforce", command: "Nexus, help me create a résumé." }), null);
  const careNeededField = { name: "careNeeded", value: "blood pressures screening." };
  assert.equal(normalizeGuidedFieldValue(careNeededField), "blood pressure screening.");
  assert.equal(careNeededField.value, "blood pressure screening.");
  assert.deepEqual(GOAL_SCHEMA.properties.capability.enum.includes("resume"), true);
  assert.deepEqual(GOAL_SCHEMA.properties.capability.enum.includes("images"), true);
  assert.equal(normalizeGoalRoute({ capability: "map", operation: "search", workspace: "maps" }).capability, "listings");
  assert.equal(normalizeGoalRoute({ capability: "map", operation: "open", workspace: "maps" }).capability, "map");

  const normalizedSources = normalizeWebSearchPayload({ output: [
    { type: "web_search_call", action: { type: "search", sources: [{ type: "url", url: "https://energy.gov.bb/policy" }] } },
    { type: "message", content: [{ type: "output_text", text: "Current policy orientation.", annotations: [{ type: "url_citation", title: "Regulator", url: "https://fairtradingcommission.gov.bb/renewables" }] }] }
  ] });
  assert.equal(normalizedSources.sources.length, 2);
  assert.match(normalizedSources.sources[0].title, /energy\.gov\.bb/);

  let openAIRequest;
  const resolver = createOpenAIGoalResolver({
    apiKey: "test-key",
    model: "gpt-5.6-sol",
    fetchImpl: async (_url, options) => {
      openAIRequest = JSON.parse(options.body);
      return {
        ok: true,
        async json() {
          return { output_text: JSON.stringify({
            capability: "resume", operation: "update", workspace: "workforce",
            query: "Add cooperative bookkeeping experience", location: "", needsLiveProvider: false,
            artifact: { ...artifact("document", "Amina's résumé"), sections: [{ heading: "Experience", body: "Cooperative bookkeeper", items: ["Managed weekly records"] }] },
            acknowledgement: "The revised résumé is visible."
          }) };
        }
      };
    }
  });
  const resolved = await resolver.resolve({
    command: "Work my two seasons keeping the cooperative's books into it",
    activeWorkspace: "workforce",
    previousArtifact: artifact("document", "Amina's résumé"),
    visibleFields: [{ id: "name", value: "Amina" }],
    history: [{ role: "user", content: "Make me a résumé for a warehouse role" }]
  });
  assert.equal(resolved.capability, "resume");
  assert.equal(openAIRequest.model, "gpt-5.6-sol");
  assert.equal(openAIRequest.text.format.type, "json_schema");
  assert.equal(openAIRequest.text.format.strict, true);
  assert.match(openAIRequest.instructions, /whole conversation/i);
  assert.match(openAIRequest.instructions, /Use listings when the goal is to discover businesses/i);
  assert.match(openAIRequest.input, /cooperative's books/);
  assert.match(openAIRequest.input, /Amina's résumé/);

  const providerQueries = [];
  const goals = [
    { capability: "music", operation: "play", workspace: "music", query: "Mulatu Astatke Ethiopian jazz", location: "", needsLiveProvider: true, artifact: artifact("media", "Music"), acknowledgement: "Music is visible." },
    { capability: "music", operation: "play", workspace: "music", query: "Mariya Takeuchi Japanese city pop", location: "", needsLiveProvider: true, artifact: artifact("media", "Music"), acknowledgement: "Music is visible." },
    { capability: "listings", operation: "search", workspace: "marketplace", query: "seed suppliers", location: "Huye, Rwanda", needsLiveProvider: true, artifact: artifact("list", "Seed suppliers"), acknowledgement: "Listings are visible." },
    { capability: "search", operation: "search", workspace: "live-knowledge", query: "recent soil restoration evidence in the Sahel", location: "", needsLiveProvider: true, artifact: artifact("list", "Sources"), acknowledgement: "Sources are visible." }
  ];
  const service = createContentActionService({
    goalResolver: { async resolve() { return goals.shift(); } },
    fetchImpl: async (url) => {
      providerQueries.push(String(url));
      return { ok: true, async json() { return [{ place_id: 9, osm_id: 42, osm_type: "node", name: "Huye Seed Cooperative", display_name: "Huye Seed Cooperative, Rwanda", type: "shop", category: "commercial" }]; } };
    },
    musicProvider: {
      async getMusicMediaSourceResultAsync({ mediaRequest }) {
        providerQueries.push(mediaRequest);
        const id = mediaRequest.includes("Mulatu") ? "ethiopia123" : "citypop456";
        return { sourceStatus: "source-result-available", sourceName: "YouTube Data API v3", sourceUrl: `https://www.youtube.com/watch?v=${id}`, resultSummary: `YouTube video found: ${mediaRequest}` };
      }
    }
  });
  const firstMusic = await service.execute({ command: "Surprise me with some horn-led music from Addis" });
  const secondMusic = await service.execute({ command: "Different direction—something glossy from 1980s Japan" });
  assert.match(firstMusic.artifact.media.embedUrl, /ethiopia123/);
  assert.match(secondMusic.artifact.media.embedUrl, /citypop456/);
  assert.notEqual(firstMusic.query, secondMusic.query);
  const places = await service.execute({ command: "Who nearby might sell improved bean seed?" });
  assert.equal(places.artifact.items[0].title, "Huye Seed Cooperative");
  assert.match(providerQueries.find((query) => query.includes("nominatim")), /seed\+suppliers.*Huye/i);
  const sources = await service.execute({ command: "Show me another reputable angle on that" }, {
    research: async ({ question }) => ({
      id: "evr_sahel", status: "cross-source-verified", verified: true, summary: "Cross-checked evidence.",
      sources: [{ id: "S1", title: "FAO source", organization: "fao.org", url: "https://www.fao.org/example", retrievedAt: "2026-07-31" }, { id: "S2", title: "World Bank source", organization: "worldbank.org", url: "https://www.worldbank.org/example", retrievedAt: "2026-07-31" }],
      question
    })
  });
  assert.equal(sources.evidence.verified, true);
  assert.equal(sources.artifact.items.length, 2);

  let publicMusicCalls = 0;
  const publicMusicService = createContentActionService({
    goalResolver: { async resolve() { return { capability: "music", operation: "play", workspace: "music", query: "Play desert blues by Tinariwen", location: "", needsLiveProvider: true, artifact: artifact("media", "Tinariwen"), acknowledgement: "Playing." }; } },
    fetchImpl: async () => ({ ok: true, async json() { publicMusicCalls += 1; return publicMusicCalls === 1 ? { results: [] } : { results: [{ trackName: "Track", artistName: "Tinariwen", previewUrl: "https://audio.example/preview.m4a", trackViewUrl: "https://music.example/track" }] }; } })
  });
  const publicMusic = await publicMusicService.execute({ command: "Try some desert blues" });
  assert.equal(publicMusicCalls, 2);
  assert.equal(publicMusic.artifact.media.kind, "audio");

  const failureService = createContentActionService({
    goalResolver: { async resolve() { return { capability: "music", operation: "play", workspace: "music", query: "Cape Verdean morna", location: "", needsLiveProvider: true, artifact: artifact("media", "Morna"), acknowledgement: "Playing." }; } },
    musicProvider: { async getMusicMediaSourceResultAsync() { return { sourceStatus: "source-result-unavailable", resultSummary: "YouTube credentials are unavailable." }; } },
    publicMusicProvider: false
  });
  const failure = await failureService.execute({ command: "Put on morna from Cabo Verde" });
  assert.equal(failure.status, "failed");
  assert.match(failure.recovery.message, /credentials are unavailable/i);
  assert.doesNotMatch(failure.acknowledgement, /playing/i);

  const markup = renderArtifactMarkup({
    schema: "nexus.content.result.v2", requestId: "render-1", status: "ready", capability: "intake", operation: "create", workspace: "telehealth",
    artifact: { ...artifact("form", "Visible intake"), fields: [{ id: "concern", label: "Main concern", type: "textarea", value: "", required: true, options: [] }] }
  });
  assert.match(markup, /data-nexus-visible-form/);
  assert.match(markup, /Main concern/);
  assert.match(markup, /aria-label="Main concern"/);
  assert.doesNotMatch(markup, /aria-label="Main concern \*"/);
  assert.doesNotMatch(markup, /<script/i);

  const locationMarkup = renderArtifactMarkup({
    schema: "nexus.content.result.v2", requestId: "render-2", status: "ready", capability: "intake", operation: "create", workspace: "agriculture",
    artifact: { ...artifact("form", "Maize Crop Help Intake"), fields: [{ id: "county", label: "County / area", type: "text", value: "Nakuru, Kenya." }] }
  });
  assert.match(locationMarkup, />County \/ area</);
  assert.match(locationMarkup, /aria-label="Location"/);

  const clinicMarkup = renderArtifactMarkup({
    schema: "nexus.content.result.v2", requestId: "render-3", status: "ready", capability: "listings", operation: "search", workspace: "mobile-clinic",
    artifact: { ...artifact("list", "Mobile clinics"), items: [{ id: "clinic-1", title: "Nakuru clinic" }] }
  });
  assert.match(clinicMarkup, /data-nexus-visible-form/);
  assert.match(clinicMarkup, /aria-label="Location"/);
  assert.match(clinicMarkup, /aria-label="Care needed"/);
  assert.match(clinicMarkup, /aria-label="Travel distance"/);

  console.log("Nexus open capability-layer unit acceptance: PASS (novel music, listings, sources, résumé context, form rendering, truthful failure)");
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
