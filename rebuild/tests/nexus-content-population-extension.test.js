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
const { NexusContentPopulationController, applicationDeadlineFallback, canonicalCommandKey, canonicalizeLeadingSpokenNumber, inputTypeForField, isApplicationRouteCommand, normalizeGuidedFieldValue, outcomeKind, renderArtifactMarkup, shieldApplicationRouteFromGuidedEntry, shouldYieldToProtectedRenderer, shouldYieldTranscriptToGuidedEntry } = require("../browser/nexus-content-population-extension");

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
  assert.equal(canonicalCommandKey("Nexus, start a digital literacy course."), canonicalCommandKey("start a digital literacy course"));
  assert.equal(isApplicationRouteCommand("Nexus, start a digital literacy course."), true);
  assert.equal(isApplicationRouteCommand("Nexus, set topic or skill to phishing email safety."), false);
  editableWorkspace.hidden = false;
  let restoreShield;
  assert.equal(shieldApplicationRouteFromGuidedEntry("Nexus, start a digital literacy course.", editableDocument, (restore) => { restoreShield = restore; }), true);
  assert.equal(editableWorkspace.hidden, true);
  restoreShield();
  assert.equal(editableWorkspace.hidden, false);
  const coalescedEvents = [];
  const coalescingController = new NexusContentPopulationController({
    windowObject: { dispatchEvent(event) { coalescedEvents.push(event); } },
    documentObject: null,
    fetchImpl: null
  });
  coalescingController.activeWorkspace = "learning";
  coalescingController.pending.set("route-tool-call", {
    detail: { requestId: "route-tool-call", workspace: "learning", command: "start a digital literacy course" },
    commandKey: canonicalCommandKey("start a digital literacy course")
  });
  coalescingController.open({ requestId: "final-transcript", workspace: "learning", command: "Nexus, start a digital literacy course." });
  assert.deepEqual([...coalescingController.pending.keys()], ["route-tool-call"]);
  assert.equal(coalescedEvents.at(-1).detail.requestId, "final-transcript");
  assert.equal(coalescedEvents.at(-1).detail.outcomeVerified, false);
  let transcriptTimers = 0;
  const transcriptStages = [];
  const transcriptController = new NexusContentPopulationController({
    windowObject: {
      dispatchEvent(event) { transcriptStages.push(event.detail); },
      setTimeout() { transcriptTimers += 1; return transcriptTimers; },
      clearTimeout() {}
    },
    documentObject: editableDocument,
    fetchImpl: null
  });
  transcriptController.onReceipt({ detail: {
    type: "transcript.final",
    detail: { transcript: "Nexus, sell 50 bags of maize." }
  } });
  assert.equal(transcriptTimers, 0, "Application transcripts must not schedule a second synthetic workspace route.");
  assert.ok(transcriptStages.some((stage) => stage.type === "transcript.application-route-shielded"));
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
  assert.equal(canonicalizeLeadingSpokenNumber("twenty bags."), "20 bags.");
  assert.equal(canonicalizeLeadingSpokenNumber("one hundred and twenty-five kilograms"), "125 kilograms");
  assert.equal(canonicalizeLeadingSpokenNumber("two point five liters"), "2.5 liters");
  assert.equal(canonicalizeLeadingSpokenNumber("maize in twenty bags"), "maize in twenty bags");
  const quantityField = { name: "quantity", value: "twenty bags." };
  assert.equal(normalizeGuidedFieldValue(quantityField), "20 bags.");
  assert.equal(quantityField.value, "20 bags.");
  const doseField = { id: "dose", value: "two point five milliliters" };
  assert.equal(normalizeGuidedFieldValue(doseField), "2.5 milliliters");
  const productField = { name: "product", value: "twenty bags of maize" };
  assert.equal(normalizeGuidedFieldValue(productField), "twenty bags of maize");
  const queuedAgricultureField = { name: "queuedRequest", value: "find maze treatment guidance." };
  assert.equal(normalizeGuidedFieldValue(queuedAgricultureField), "find maize treatment guidance.");
  assert.equal(queuedAgricultureField.value, "find maize treatment guidance.");
  const queuedAgricultureVariantField = { name: "queuedRequest", value: "find Mase treatment guidance." };
  assert.equal(normalizeGuidedFieldValue(queuedAgricultureVariantField), "find maize treatment guidance.");
  assert.equal(queuedAgricultureVariantField.value, "find maize treatment guidance.");
  const queuedDirectionsField = { name: "queuedRequest", value: "find the maze entrance" };
  assert.equal(normalizeGuidedFieldValue(queuedDirectionsField), "find the maze entrance");
  const learningTopicField = { name: "topic", value: "phishing emails safety." };
  assert.equal(normalizeGuidedFieldValue(learningTopicField), "phishing email safety.");
  assert.equal(learningTopicField.value, "phishing email safety.");
  const learningInboxField = { name: "topic", value: "organizing emails safely" };
  assert.equal(normalizeGuidedFieldValue(learningInboxField), "organizing emails safely");
  assert.equal(inputTypeForField({ id: "quantity", label: "Quantity", type: "number" }), "text");
  assert.equal(inputTypeForField({ id: "dose", label: "Dose", type: "number" }), "text");
  assert.equal(inputTypeForField({ id: "householdSize", label: "Household size", type: "number" }), "number");
  assert.equal(inputTypeForField({ id: "time", label: "Date and time", type: "date" }), "text");
  assert.equal(inputTypeForField({ id: "preferredDate", label: "Preferred date", type: "date" }), "date");
  assert.equal(outcomeKind("search", "workforce"), "application");
  assert.equal(outcomeKind("search", "live-knowledge"), "evidence");
  assert.equal(shouldYieldToProtectedRenderer("Nexus, plan a route from Nairobi to Nakuru.", "maps"), true);
  assert.equal(shouldYieldToProtectedRenderer("Nexus, play Stevie Wonder.", "music"), true);
  assert.equal(shouldYieldToProtectedRenderer("Nexus, show today's weather in Nairobi.", "live-knowledge"), true);
  assert.equal(shouldYieldToProtectedRenderer("Nexus, show pictures of maize diseases.", "agriculture"), true);
  assert.equal(shouldYieldToProtectedRenderer("Nexus, help me create a résumé.", "workforce"), true);
  assert.equal(shouldYieldToProtectedRenderer("Nexus, create a provider card for my doctor.", "health"), true);
  assert.equal(shouldYieldToProtectedRenderer("Nexus, sell 50 bags of maize.", "marketplace"), false);
  const certificationOwnership = [
    ["agriculture", "Nexus, help with my maize crop in Kenya.", false],
    ["health", "Nexus, record my blood pressure 140 over 90.", false],
    ["telehealth", "Nexus, begin a telehealth intake.", false],
    ["mobile-clinic", "Nexus, find a mobile clinic in Kenya.", false],
    ["pharmacy", "Nexus, open pharmacy support.", false],
    ["learning", "Nexus, start a digital literacy course.", false],
    ["workforce", "Nexus, search for farming jobs in Kenya.", false],
    ["marketplace", "Nexus, sell 50 bags of maize.", false],
    ["maps", "Nexus, plan a route from Nairobi to Nakuru.", true],
    ["music", "Nexus, play Stevie Wonder.", true],
    ["reminders", "Nexus, remind me tonight at 8 PM to check my blood pressure.", false],
    ["offline", "Nexus, show my offline queue.", false],
    ["live-knowledge", "Nexus, show today's weather in Nairobi, Kenya.", true],
    ["maps", "Nexus, reset the map and show Mombasa, Kenya.", true],
    ["agriculture", "Nexus, show me pictures of possible maize diseases.", true],
    ["workforce", "Nexus, help me create a résumé.", true],
    ["live-knowledge", "Nexus, show an apple pie recipe with ingredients, steps, and sources.", true],
    ["health", "Nexus, create a provider card for my doctor about blood pressure 140 over 90.", true],
    ["live-knowledge", "Nexus, open the pilot evidence dashboard.", true]
  ];
  for (const [workspace, command, expectedYield] of certificationOwnership) {
    assert.equal(shouldYieldToProtectedRenderer(command, workspace), expectedYield, `${workspace}: ${command}`);
  }
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

  const quantityMarkup = renderArtifactMarkup({
    schema: "nexus.content.result.v2", requestId: "render-quantity", status: "ready", capability: "marketplace", operation: "create", workspace: "marketplace",
    artifact: { ...artifact("form", "Marketplace listing"), fields: [{ id: "quantity", label: "Quantity", type: "number", value: "50", required: true, options: [] }] }
  });
  assert.match(quantityMarkup, /name="quantity" type="text"/);
  assert.doesNotMatch(quantityMarkup, /name="quantity" type="number"/);

  const clinicMarkup = renderArtifactMarkup({
    schema: "nexus.content.result.v2", requestId: "render-3", status: "ready", capability: "listings", operation: "search", workspace: "mobile-clinic",
    artifact: { ...artifact("list", "Mobile clinics"), items: [{ id: "clinic-1", title: "Nakuru clinic" }] }
  });
  assert.match(clinicMarkup, /data-nexus-visible-form/);
  assert.match(clinicMarkup, /aria-label="Location"/);
  assert.match(clinicMarkup, /aria-label="Care needed"/);
  assert.match(clinicMarkup, /aria-label="Travel distance"/);

  const requiredEditFields = [
    ["agriculture", "Location"], ["health", "Symptoms or notes"], ["telehealth", "Reason for visit"],
    ["pharmacy", "Medication"], ["learning", "Topic or skill"], ["marketplace", "Quantity"],
    ["reminders", "Date and time"], ["offline", "Queued request"]
  ];
  for (const [workspace, label] of requiredEditFields) {
    const genericMarkup = renderArtifactMarkup({
      schema: "nexus.content.result.v2", requestId: `generic-${workspace}`, status: "ready", capability: "workspace", operation: "open", workspace,
      artifact: artifact("workspace", `${workspace} workspace`)
    });
    assert.ok(genericMarkup.includes(`aria-label="${label}"`), `${workspace} must retain ${label}`);
  }

  console.log("Nexus open capability-layer unit acceptance: PASS (novel music, listings, sources, résumé context, form rendering, truthful failure)");
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
