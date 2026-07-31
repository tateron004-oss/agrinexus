"use strict";

const crypto = require("node:crypto");

const CAPABILITIES = Object.freeze([
  "workspace", "search", "images", "map", "listings", "weather", "music",
  "media-control", "form", "document", "resume", "intake", "report",
  "question-card", "marketplace-draft", "reminder", "queue"
]);

const OPERATIONS = Object.freeze(["open", "create", "search", "play", "stop", "update", "review", "list"]);

function clean(value, limit = 1200) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, limit);
}

function safeHttpUrl(value) {
  try {
    const url = new URL(String(value || ""));
    return ["http:", "https:"].includes(url.protocol) ? url.href : "";
  } catch {
    return "";
  }
}

function fieldSchema() {
  return {
    type: "object",
    additionalProperties: false,
    required: ["id", "label", "type", "value", "required", "options"],
    properties: {
      id: { type: "string" }, label: { type: "string" },
      type: { type: "string", enum: ["text", "textarea", "number", "date", "email", "tel", "select", "checkbox"] },
      value: { type: "string" }, required: { type: "boolean" },
      options: { type: "array", items: { type: "string" } }
    }
  };
}

function artifactSchema() {
  return {
    type: "object",
    additionalProperties: false,
    required: ["kind", "title", "description", "fields", "sections", "items", "links", "media"],
    properties: {
      kind: { type: "string", enum: ["workspace", "list", "form", "document", "card", "draft", "media", "map", "queue", "status"] },
      title: { type: "string" }, description: { type: "string" },
      fields: { type: "array", items: fieldSchema() },
      sections: {
        type: "array", items: {
          type: "object", additionalProperties: false, required: ["heading", "body", "items"],
          properties: { heading: { type: "string" }, body: { type: "string" }, items: { type: "array", items: { type: "string" } } }
        }
      },
      items: {
        type: "array", items: {
          type: "object", additionalProperties: false,
          required: ["id", "title", "description", "sourceName", "sourceUrl", "imageUrl", "metadata"],
          properties: {
            id: { type: "string" }, title: { type: "string" }, description: { type: "string" },
            sourceName: { type: "string" }, sourceUrl: { type: "string" }, imageUrl: { type: "string" },
            metadata: { type: "array", items: { type: "string" } }
          }
        }
      },
      links: {
        type: "array", items: {
          type: "object", additionalProperties: false, required: ["label", "url"],
          properties: { label: { type: "string" }, url: { type: "string" } }
        }
      },
      media: {
        type: "object", additionalProperties: false,
        required: ["kind", "title", "provider", "sourceUrl", "embedUrl", "state"],
        properties: {
          kind: { type: "string" }, title: { type: "string" }, provider: { type: "string" },
          sourceUrl: { type: "string" }, embedUrl: { type: "string" },
          state: { type: "string", enum: ["none", "ready", "playing", "stopped", "unavailable"] }
        }
      }
    }
  };
}

const GOAL_SCHEMA = Object.freeze({
  type: "object",
  additionalProperties: false,
  required: ["capability", "operation", "workspace", "query", "location", "needsLiveProvider", "artifact", "acknowledgement"],
  properties: {
    capability: { type: "string", enum: CAPABILITIES },
    operation: { type: "string", enum: OPERATIONS },
    workspace: { type: "string" }, query: { type: "string" }, location: { type: "string" },
    needsLiveProvider: { type: "boolean" }, artifact: artifactSchema(), acknowledgement: { type: "string" }
  }
});

function emptyMedia(state = "none") {
  return { kind: "", title: "", provider: "", sourceUrl: "", embedUrl: "", state };
}

function emptyArtifact(kind = "status", title = "") {
  return { kind, title, description: "", fields: [], sections: [], items: [], links: [], media: emptyMedia() };
}

function outputText(payload) {
  if (clean(payload && payload.output_text, 200000)) return payload.output_text;
  for (const item of payload && payload.output || []) {
    for (const content of item && item.content || []) {
      if (content && content.type === "output_text" && content.text) return content.text;
    }
  }
  return "";
}

function createOpenAIGoalResolver({
  fetchImpl = globalThis.fetch,
  apiKey = process.env.OPENAI_API_KEY,
  model = process.env.NEXUS_CONTENT_MODEL || "gpt-5.6-sol"
} = {}) {
  return Object.freeze({
    async resolve(context = {}) {
      if (!apiKey) throw new Error("The conversational goal resolver is not configured (OPENAI_API_KEY is missing).");
      const response = await fetchImpl("https://api.openai.com/v1/responses", {
        method: "POST",
        headers: { authorization: `Bearer ${apiKey}`, "content-type": "application/json" },
        body: JSON.stringify({
          model,
          reasoning: { effort: "low" },
          store: false,
          instructions: [
            "Resolve the user's current goal from the whole conversation, not from exact trigger phrases.",
            "Application names describe capability workspaces, never scripts. Unexpected requests and follow-ups are normal.",
            "Use the previous visible artifact to interpret references such as it, that, another, change it, add, remove, review, or complete.",
            "For forms and documents, return a fully visible editable artifact. Preserve prior fields and content unless the user asks to change them.",
            "For search, images, maps, listings, weather, or music, set needsLiveProvider true and produce no invented provider results.",
            "Music may be any artist, track, genre, culture, language, or source. Put the actual requested media query in query.",
            "Never claim that a provider action succeeded. acknowledgement describes the requested outcome and is used only after UI verification.",
            "If a request is underspecified, build the most useful editable draft and leave unknown fields blank instead of inventing personal facts.",
            "Medical artifacts organize the user's questions and information; do not diagnose or prescribe."
          ].join("\n"),
          input: JSON.stringify({
            command: clean(context.command, 4000),
            requestedWorkspace: clean(context.requestedWorkspace, 120),
            activeWorkspace: clean(context.activeWorkspace, 120),
            previousArtifact: context.previousArtifact || null,
            visibleFields: context.visibleFields || [],
            recentConversation: Array.isArray(context.history) ? context.history.slice(-12) : []
          }),
          text: {
            verbosity: "low",
            format: { type: "json_schema", name: "nexus_content_goal", strict: true, schema: GOAL_SCHEMA }
          }
        })
      });
      if (!response.ok) throw new Error(`The conversational goal resolver failed (${response.status}).`);
      const payload = await response.json();
      const text = outputText(payload);
      if (!text) throw new Error("The conversational goal resolver returned no goal.");
      const goal = JSON.parse(text);
      if (!CAPABILITIES.includes(goal.capability) || !OPERATIONS.includes(goal.operation) || !goal.artifact) {
        throw new Error("The conversational goal resolver returned an invalid goal contract.");
      }
      return goal;
    }
  });
}

function normalizeArtifact(value) {
  const artifact = value && typeof value === "object" ? value : emptyArtifact();
  return {
    kind: clean(artifact.kind, 40) || "status",
    title: clean(artifact.title, 180) || "Nexus result",
    description: clean(artifact.description, 2000),
    fields: (Array.isArray(artifact.fields) ? artifact.fields : []).slice(0, 40).map((field, index) => ({
      id: clean(field.id, 80) || `field-${index + 1}`, label: clean(field.label, 180) || `Field ${index + 1}`,
      type: clean(field.type, 30) || "text", value: clean(field.value, 5000), required: Boolean(field.required),
      options: (Array.isArray(field.options) ? field.options : []).map((option) => clean(option, 180)).filter(Boolean).slice(0, 30)
    })),
    sections: (Array.isArray(artifact.sections) ? artifact.sections : []).slice(0, 30).map((section) => ({
      heading: clean(section.heading, 180), body: clean(section.body, 6000),
      items: (Array.isArray(section.items) ? section.items : []).map((item) => clean(item, 1200)).filter(Boolean).slice(0, 50)
    })),
    items: (Array.isArray(artifact.items) ? artifact.items : []).slice(0, 30).map((item, index) => ({
      id: clean(item.id, 100) || `item-${index + 1}`, title: clean(item.title, 240) || "Result",
      description: clean(item.description, 2400), sourceName: clean(item.sourceName, 240),
      sourceUrl: safeHttpUrl(item.sourceUrl), imageUrl: safeHttpUrl(item.imageUrl),
      metadata: (Array.isArray(item.metadata) ? item.metadata : []).map((entry) => clean(entry, 400)).filter(Boolean).slice(0, 20)
    })),
    links: (Array.isArray(artifact.links) ? artifact.links : []).map((link) => ({ label: clean(link.label, 180), url: safeHttpUrl(link.url) })).filter((link) => link.url).slice(0, 30),
    media: {
      kind: clean(artifact.media && artifact.media.kind, 40), title: clean(artifact.media && artifact.media.title, 240),
      provider: clean(artifact.media && artifact.media.provider, 180), sourceUrl: safeHttpUrl(artifact.media && artifact.media.sourceUrl),
      embedUrl: safeHttpUrl(artifact.media && artifact.media.embedUrl),
      state: ["none", "ready", "playing", "stopped", "unavailable"].includes(artifact.media && artifact.media.state) ? artifact.media.state : "none"
    }
  };
}

function resultEnvelope(goal, artifact, extra = {}) {
  return Object.freeze({
    schema: "nexus.content.result.v2",
    requestId: `ncr_${crypto.randomUUID()}`,
    status: extra.status || "ready",
    capability: goal.capability,
    operation: goal.operation,
    workspace: clean(goal.workspace, 120) || "live-knowledge",
    query: clean(goal.query, 1000),
    artifact: normalizeArtifact(artifact),
    acknowledgement: extra.status === "failed" ? "" : (clean(goal.acknowledgement, 300) || "The requested result is visible."),
    evidence: extra.evidence || null,
    recovery: extra.recovery || null
  });
}

function createContentActionService({ fetchImpl = globalThis.fetch, musicProvider = null, goalResolver = null } = {}) {
  const resolver = goalResolver || createOpenAIGoalResolver({ fetchImpl });

  async function music(goal) {
    if (!musicProvider || typeof musicProvider.getMusicMediaSourceResultAsync !== "function") {
      throw new Error("The live music search provider is not configured.");
    }
    const query = clean(goal.query) || "music";
    const found = await musicProvider.getMusicMediaSourceResultAsync({ mediaRequest: query });
    const sourceUrl = safeHttpUrl(found && found.sourceUrl);
    const videoId = /^https:\/\/(?:www\.)?youtube\.com\/watch\?v=([^&]+)/i.exec(sourceUrl)?.[1] || "";
    if (!videoId || found.sourceStatus !== "source-result-available") {
      throw new Error(clean(found && found.resultSummary) || `No playable live result was returned for ${query}.`);
    }
    const title = clean(found.resultSummary).replace(/^YouTube video found:\s*/i, "") || query;
    const artifact = emptyArtifact("media", `Now playing: ${title}`);
    artifact.description = `Live result for “${query}”.`;
    artifact.links = [{ label: "Open media source", url: sourceUrl }];
    artifact.media = { kind: "video", title, provider: clean(found.sourceName), sourceUrl, embedUrl: `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1`, state: "playing" };
    return artifact;
  }

  async function images(goal) {
    const query = clean(goal.query) || clean(goal.artifact && goal.artifact.title) || "images";
    const url = new URL("https://commons.wikimedia.org/w/api.php");
    url.searchParams.set("action", "query"); url.searchParams.set("generator", "search");
    url.searchParams.set("gsrsearch", `filetype:bitmap ${query}`); url.searchParams.set("gsrnamespace", "6");
    url.searchParams.set("gsrlimit", "8"); url.searchParams.set("prop", "imageinfo");
    url.searchParams.set("iiprop", "url|extmetadata"); url.searchParams.set("iiurlwidth", "720"); url.searchParams.set("format", "json");
    const response = await fetchImpl(url, { headers: { "user-agent": "Nexus-Genesis/1.0 (open-image-search)" } });
    if (!response.ok) throw new Error(`The live image provider failed (${response.status}).`);
    const payload = await response.json();
    const items = Object.values(payload && payload.query && payload.query.pages || {}).map((page) => {
      const info = page.imageinfo && page.imageinfo[0] || {};
      return { id: String(page.pageid || page.title), title: clean(page.title).replace(/^File:/, ""), description: clean(info.extmetadata && info.extmetadata.ImageDescription && info.extmetadata.ImageDescription.value), sourceName: "Wikimedia Commons", sourceUrl: info.descriptionurl || "", imageUrl: info.thumburl || info.url || "", metadata: [clean(info.extmetadata && info.extmetadata.LicenseShortName && info.extmetadata.LicenseShortName.value) || "See source for license"] };
    }).filter((item) => item.imageUrl && item.sourceUrl).slice(0, 8);
    if (!items.length) throw new Error(`The live image provider returned no source-labeled results for ${query}.`);
    const artifact = emptyArtifact("list", `Images: ${query}`); artifact.description = "Live, source-labeled image results."; artifact.items = items;
    return artifact;
  }

  async function listings(goal) {
    const query = clean(goal.query) || clean(goal.artifact && goal.artifact.title) || "places";
    const location = clean(goal.location);
    const url = new URL("https://nominatim.openstreetmap.org/search");
    url.searchParams.set("q", [query, location].filter(Boolean).join(" near "));
    url.searchParams.set("format", "jsonv2"); url.searchParams.set("addressdetails", "1"); url.searchParams.set("limit", "8");
    const response = await fetchImpl(url, { headers: { "user-agent": "Nexus-Genesis/1.0 (open-listings-search)" } });
    if (!response.ok) throw new Error(`The live listings provider failed (${response.status}).`);
    const payload = await response.json();
    const items = (Array.isArray(payload) ? payload : []).map((item) => ({
      id: clean(item.place_id || item.osm_id), title: clean(item.name || String(item.display_name || "").split(",")[0]) || "Listing",
      description: clean(item.display_name), sourceName: "OpenStreetMap / Nominatim",
      sourceUrl: item.osm_id ? `https://www.openstreetmap.org/${item.osm_type === "node" ? "node" : item.osm_type === "way" ? "way" : "relation"}/${encodeURIComponent(item.osm_id)}` : "",
      imageUrl: "", metadata: [item.type, item.category].map((value) => clean(value)).filter(Boolean)
    })).filter((item) => item.description);
    if (!items.length) throw new Error(`The live listings provider returned no places for ${[query, location].filter(Boolean).join(" near ")}.`);
    const artifact = emptyArtifact("list", clean(goal.artifact && goal.artifact.title) || `Listings for ${query}`); artifact.description = `Live place results${location ? ` near ${location}` : ""}.`; artifact.items = items;
    return artifact;
  }

  async function research(goal, context) {
    if (!context || typeof context.research !== "function") throw new Error("The reputable-source search provider is not configured.");
    const receipt = await context.research({ question: clean(goal.query) || clean(context.command), parentReceiptId: context.parentReceiptId || null });
    const artifact = emptyArtifact("list", clean(goal.artifact && goal.artifact.title) || "Live source results");
    artifact.description = clean(receipt.summary, 3000) || "Open the reputable sources below to inspect the current results.";
    artifact.items = (receipt.sources || []).map((source) => ({ id: source.id, title: source.title, description: source.organization || "Reputable source", sourceName: source.organization || "Approved source", sourceUrl: source.url, imageUrl: "", metadata: [source.publishedAt ? `Published ${source.publishedAt}` : "", source.retrievedAt ? `Retrieved ${source.retrievedAt}` : ""].filter(Boolean) }));
    if (!artifact.items.length) throw new Error(clean(receipt.summary) || "The reputable-source provider returned no visible links.");
    return { artifact, evidence: { receiptId: receipt.id, status: receipt.status, verified: Boolean(receipt.verified) } };
  }

  async function execute(request = {}, context = {}) {
    let goal;
    try {
      goal = await resolver.resolve(request);
    } catch (error) {
      const fallbackGoal = { capability: "workspace", operation: "open", workspace: request.activeWorkspace || request.requestedWorkspace || "live-knowledge", query: clean(request.command), acknowledgement: "", artifact: emptyArtifact("status", "Nexus needs its goal resolver") };
      fallbackGoal.artifact.description = clean(error.message);
      return resultEnvelope(fallbackGoal, fallbackGoal.artifact, { status: "failed", recovery: { message: clean(error.message), nextActions: ["Check the OpenAI provider configuration and retry the same natural-language request."] } });
    }
    try {
      let artifact = goal.artifact;
      let evidence = null;
      if (goal.capability === "music" && goal.operation === "play") artifact = await music(goal);
      else if (goal.capability === "media-control" && goal.operation === "stop") {
        artifact = emptyArtifact("media", "Playback stopped"); artifact.description = "The visible media player was cleared."; artifact.media = emptyMedia("stopped");
      } else if (goal.capability === "images") artifact = await images(goal);
      else if (goal.capability === "listings") artifact = await listings(goal);
      else if (goal.capability === "search") ({ artifact, evidence } = await research(goal, { ...context, command: request.command }));
      else if (goal.capability === "map") {
        if (!context || typeof context.map !== "function") throw new Error("The live map provider is not configured.");
        const map = await context.map(goal.query);
        artifact = emptyArtifact("map", clean(goal.artifact && goal.artifact.title) || "Live map");
        artifact.description = map.type === "route" ? `${map.origin.label} to ${map.destination.label}` : map.location.label;
        const focus = map.type === "route" ? map.destination : map.location;
        const span = 0.08;
        const bbox = Array.isArray(focus.boundingBox) && focus.boundingBox.length === 4
          ? `${focus.boundingBox[2]},${focus.boundingBox[0]},${focus.boundingBox[3]},${focus.boundingBox[1]}`
          : `${focus.lon - span},${focus.lat - span},${focus.lon + span},${focus.lat + span}`;
        artifact.media = { kind: "map", title: artifact.title, provider: "OpenStreetMap", sourceUrl: `https://www.openstreetmap.org/?mlat=${focus.lat}&mlon=${focus.lon}#map=12/${focus.lat}/${focus.lon}`, embedUrl: `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&marker=${encodeURIComponent(`${focus.lat},${focus.lon}`)}&layer=mapnik`, state: "ready" };
        artifact.links = [{ label: "Open interactive map", url: artifact.media.sourceUrl }];
        artifact.sections = [{ heading: map.type === "route" ? "Route summary" : "Location", body: artifact.description, items: map.type === "route" ? [`Distance: ${Math.round(map.distanceMeters / 100) / 10} km`, `Estimated driving time: ${Math.round(map.durationSeconds / 60)} minutes`] : [] }];
      } else if (goal.capability === "weather") {
        if (!context || typeof context.weather !== "function") throw new Error("The live weather provider is not configured.");
        const weather = await context.weather(goal.query);
        artifact = emptyArtifact("card", `Weather: ${weather.location}`);
        artifact.description = `${weather.temperatureC}°C now · high ${weather.highC}°C · low ${weather.lowC}°C · rain chance ${weather.rainChance}%`;
        artifact.links = [{ label: "Open weather source", url: weather.sourceUrl }];
      }
      return resultEnvelope(goal, artifact, { evidence });
    } catch (error) {
      const artifact = emptyArtifact("status", "Nexus could not complete that live request");
      artifact.description = clean(error.message);
      return resultEnvelope(goal, artifact, { status: "failed", recovery: { message: clean(error.message), nextActions: ["Try a broader query.", "Choose another live capability or source.", "Retry when the provider is available."] } });
    }
  }

  return Object.freeze({ execute, music, images, listings });
}

module.exports = {
  CAPABILITIES, GOAL_SCHEMA, clean, createContentActionService, createOpenAIGoalResolver,
  emptyArtifact, normalizeArtifact, outputText, resultEnvelope, safeHttpUrl
};
