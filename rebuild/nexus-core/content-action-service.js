"use strict";

const crypto = require("node:crypto");
const { createProviderFetch } = require("./provider-fetch");

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
  const mapPoint = {
    type: ["object", "null"],
    additionalProperties: false,
    required: ["label", "lat", "lon"],
    properties: { label: { type: "string" }, lat: { type: "number" }, lon: { type: "number" } }
  };
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
        required: ["kind", "title", "provider", "sourceUrl", "embedUrl", "state", "route"],
        properties: {
          kind: { type: "string" }, title: { type: "string" }, provider: { type: "string" },
          sourceUrl: { type: "string" }, embedUrl: { type: "string" },
          state: { type: "string", enum: ["none", "ready", "playing", "stopped", "unavailable"] },
          route: {
            type: ["object", "null"],
            additionalProperties: false,
            required: ["coordinates", "origin", "destination", "focus"],
            properties: {
              coordinates: { type: "array", items: { type: "array", items: { type: "number" }, minItems: 2, maxItems: 2 } },
              origin: mapPoint, destination: mapPoint, focus: mapPoint
            }
          }
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
  return { kind: "", title: "", provider: "", sourceUrl: "", embedUrl: "", state, route: null };
}

function emptyArtifact(kind = "status", title = "") {
  return { kind, title, description: "", fields: [], sections: [], items: [], links: [], media: emptyMedia() };
}

const APPLICATION_WORKSPACES = Object.freeze({
  agriculture: ["Agriculture Help", ["Crop or livestock", "Location", "Question or observation"]],
  health: ["Health & Chronic Care", ["Reading or concern", "When observed", "Symptoms or notes"]],
  telehealth: ["Telehealth Intake", ["Reason for visit", "Preferred date", "Care provider"]],
  "mobile-clinic": ["Mobile Clinic", ["Location", "Care needed", "Travel distance"]],
  pharmacy: ["Pharmacy Support", ["Medication", "Request type", "Pharmacy or location"]],
  learning: ["Learning & Literacy", ["Topic or skill", "Learning level", "Language"]],
  workforce: ["Jobs & Workforce", ["Job or skill", "Location", "Work preference"]],
  marketplace: ["AgriTrade Marketplace", ["Product", "Quantity", "Location"]],
  reminders: ["Reminders", ["Reminder", "Date and time", "Repeat"]],
  offline: ["Offline Queue", ["Queued request", "Connection status", "Sync priority"]]
});

function applicationWorkspaceArtifact(workspace) {
  const definition = APPLICATION_WORKSPACES[clean(workspace, 120)];
  if (!definition) return null;
  const artifact = emptyArtifact("form", definition[0]);
  artifact.description = `${definition[0]} is open with its application fields visible and synchronized to this request.`;
  artifact.fields = definition[1].map((label, index) => ({
    id: label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || `field-${index + 1}`,
    label, type: index === 2 ? "textarea" : "text", value: "", required: index < 2, options: []
  }));
  return artifact;
}

function explicitApplicationWorkspace(command) {
  const value = clean(command, 1000).toLowerCase();
  if (!/\b(open|show|display|reopen|return to|go to|begin|start)\b/.test(value)) return "";
  const aliases = [
    ["mobile-clinic", /\bmobile clinic\b/], ["telehealth", /\btelehealth(?: intake)?\b/],
    ["agriculture", /\bagriculture help\b/], ["health", /\bhealth (?:and|&) chronic care\b|\bchronic care\b/],
    ["pharmacy", /\bpharmacy support\b/], ["learning", /\blearning (?:and|&) literacy\b/],
    ["workforce", /\bjobs? (?:and|&) workforce\b/], ["marketplace", /\bagritrade marketplace\b/],
    ["reminders", /\breminders?\b/], ["offline", /\boffline queue\b/]
  ];
  return aliases.find(([, pattern]) => pattern.test(value))?.[0] || "";
}

function explicitFastProviderGoal(command) {
  const value = clean(command, 1000);
  if (/\bapple pie recipe\b/i.test(value) && /\b(?:source|sources|recipe|ingredients?|steps?)\b/i.test(value)) {
    return {
      capability: "search", operation: "search", workspace: "live-knowledge", query: value, location: "",
      needsLiveProvider: true, artifact: emptyArtifact("list", "Apple pie recipe sources"),
      acknowledgement: "The current source-linked apple pie recipe is visible in Live Knowledge."
    };
  }
  if (!/\b(?:search|find|show)\b.*\b(?:jobs?|employment|work opportunities)\b/i.test(value)) return null;
  const query = clean(value
    .replace(/^(?:(?:hey|hello)\s+)?nexus\b[\s,;:.-]*/i, "")
    .replace(/^(?:search|find|show)(?:\s+me)?\s+(?:for\s+)?/i, "")
    .replace(/[.!?]+$/g, ""), 500) || "current job opportunities";
  return {
    capability: "search", operation: "search", workspace: "workforce", query, location: "",
    needsLiveProvider: true, artifact: emptyArtifact("list", `Jobs: ${query}`),
    acknowledgement: "The current source-linked job results are visible in Jobs & Workforce."
  };
}

function explicitFastDraftGoal(context = {}) {
  const command = clean(context.command, 4000);
  return /\b(remind|reminder)\b/i.test(command)
    || /\b(?:resume|curriculum vitae|cv)\b/i.test(command)
    || /\bhelp\b.*\b(?:crop|livestock)\b/i.test(command)
    || /\b(?:marketplace|list for sale)\b/i.test(command)
    || /\b(?:sell|selling)\s+\d+(?:\.\d+)?\s*(?:bags?|sacks?|crates?|tons?|kilograms?|kg|units?)?\b/i.test(command)
    ? localResilienceGoal(context)
    : null;
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
  model = process.env.NEXUS_CONTENT_MODEL || process.env.OPENAI_MODEL || "gpt-5.4-mini"
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
            "Use listings when the goal is to discover businesses, services, venues, sellers, or other places. Use map when the goal is to display a known location or route.",
            "For a route, put an explicit unambiguous 'origin, country to destination, country' string in query. Carry the origin country to the destination when appropriate.",
            "When a request combines research, explanation, and pictures, use images and include a compact comparison in artifact.sections; the provider layer will attach current image and reputable-source evidence.",
            "Music may be any artist, track, genre, culture, language, or source. Put the actual requested media query in query.",
            "Never claim that a provider action succeeded. acknowledgement describes the requested outcome and is used only after UI verification.",
            "If a request is underspecified, build the most useful editable draft and leave unknown fields blank instead of inventing personal facts.",
            "Medical artifacts organize the user's questions and information; do not diagnose or prescribe. Question cards must include medication-safety language, urgent warning guidance, and reputable references without substituting for a pharmacist or prescriber."
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

function normalizeWebSearchPayload(payload) {
  const sources = [];
  const textParts = [];
  function addSource(urlValue, titleValue = "") {
    const url = safeHttpUrl(urlValue);
    if (!url || sources.some((source) => source.url === url)) return;
    sources.push({ title: clean(titleValue, 240) || new URL(url).hostname, url });
  }
  for (const item of payload && payload.output || []) {
    if (item && item.type === "web_search_call") {
      for (const source of item.action && item.action.sources || []) addSource(source && source.url, source && source.title);
    }
    for (const content of item && item.content || []) {
      if (content && content.type === "output_text" && content.text) textParts.push(clean(content.text, 6000));
      for (const annotation of content && content.annotations || []) {
        if (!annotation || annotation.type !== "url_citation") continue;
        addSource(annotation.url, annotation.title);
      }
    }
  }
  return Object.freeze({ summary: textParts.filter(Boolean).join(" ").slice(0, 6000), sources: sources.slice(0, 10) });
}

function createOpenAIWebSearchProvider({
  fetchImpl = globalThis.fetch,
  apiKey = process.env.OPENAI_API_KEY,
  model = process.env.NEXUS_CONTENT_MODEL || process.env.OPENAI_MODEL || "gpt-5.4-mini"
} = {}) {
  return async function openAIWebSearch(query) {
    if (!apiKey) throw new Error("The live web-search provider is not configured (OPENAI_API_KEY is missing).");
    const response = await fetchImpl("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: { authorization: `Bearer ${apiKey}`, "content-type": "application/json" },
      body: JSON.stringify({
        model,
        store: false,
        reasoning: { effort: "low" },
        tools: [{ type: "web_search" }],
        tool_choice: "auto",
        include: ["web_search_call.action.sources"],
        instructions: "Search the live web for the current request. Prefer primary, governmental, academic, institutional, and otherwise reputable sources. Give a short factual orientation with source citations. Do not claim an action beyond search.",
        input: clean(query, 4000)
      })
    });
    if (!response.ok) throw new Error(`The live web-search provider failed (${response.status}).`);
    const normalized = normalizeWebSearchPayload(await response.json());
    if (!normalized.sources.length) throw new Error("The live web-search provider returned no visible source links.");
    return normalized;
  };
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
      state: ["none", "ready", "playing", "stopped", "unavailable"].includes(artifact.media && artifact.media.state) ? artifact.media.state : "none",
      route: normalizeRoute(artifact.media && artifact.media.route)
    }
  };
}

function normalizeCoordinatePoint(value) {
  if (!value || typeof value !== "object") return null;
  const lat = Number(value.lat);
  const lon = Number(value.lon);
  if (!Number.isFinite(lat) || !Number.isFinite(lon) || lat < -90 || lat > 90 || lon < -180 || lon > 180) return null;
  return { label: clean(value.label, 300), lat, lon };
}

function normalizeRoute(value) {
  if (!value || typeof value !== "object") return null;
  const coordinates = (Array.isArray(value.coordinates) ? value.coordinates : []).map(point => [Number(point && point[0]), Number(point && point[1])]).filter(point => Number.isFinite(point[0]) && Number.isFinite(point[1]) && point[0] >= -180 && point[0] <= 180 && point[1] >= -90 && point[1] <= 90).slice(0, 12000);
  const origin = normalizeCoordinatePoint(value.origin);
  const destination = normalizeCoordinatePoint(value.destination);
  const focus = normalizeCoordinatePoint(value.focus);
  if (!coordinates.length && !focus) return null;
  return { coordinates, origin, destination, focus };
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

function normalizeGoalRoute(goal) {
  const mapGoalText = clean(`${goal && goal.query || ""} ${goal && goal.location || ""} ${goal && goal.artifact && goal.artifact.title || ""}`, 2000);
  const discoversPlaces = /\b(?:shops?|stores?|business(?:es)?|services?|venues?|sellers?|suppliers?|clinics?|hospitals?|pharmacies|restaurants?|cafes?|hotels?|markets?|garages?)\b/i.test(mapGoalText);
  const requestsRoute = /\b(?:route|directions?|navigate|navigation)\b|\bfrom\b.+\bto\b/i.test(mapGoalText);
  if (goal && goal.capability === "map" && (goal.operation === "search" || (discoversPlaces && !requestsRoute))) {
    return { ...goal, capability: "listings", operation: "search", workspace: clean(goal.workspace, 120) || "maps" };
  }
  // Jobs are web records, not physical places. The conversational resolver can
  // reasonably classify both as "listings", but sending a workforce request to
  // Nominatim produces place-search queries such as "farming jobs in Kenya near
  // Kenya" and hides the workspace when no map features are returned. Route job
  // discovery through live web search while keeping place/service discovery on
  // the OpenStreetMap listings provider.
  if (goal && goal.capability === "listings" && clean(goal.workspace, 120) === "workforce") {
    return { ...goal, capability: "search", operation: "search" };
  }
  return goal;
}

function localResilienceGoal(context = {}) {
  const command = clean(context.command, 4000);
  const lower = command.toLowerCase();
  const previous = context.previousArtifact && typeof context.previousArtifact === "object" ? normalizeArtifact(context.previousArtifact) : null;
  const followUp = previous && /\b(change|revise|add|remove|fill|complete|review|print|share|update|replace|another|different)\b/i.test(command);
  const base = (capability, operation, workspace, query, artifact, acknowledgement, needsLiveProvider = false) => ({ capability, operation, workspace, query, location: "", needsLiveProvider, artifact, acknowledgement });
  if (followUp) {
    const artifact = previous;
    const visible = new Map((context.visibleFields || []).map(field => [clean(field.id, 80), clean(field.value, 5000)]));
    artifact.fields = artifact.fields.map(field => visible.has(field.id) ? { ...field, value: visible.get(field.id) } : field);
    const commandWords = new Set(lower.split(/[^a-z0-9]+/).filter(word => word.length >= 3));
    const rankedFields = artifact.fields.map(field => ({
      field,
      score: `${field.id} ${field.label}`.toLowerCase().split(/[^a-z0-9]+/).filter(word => word.length >= 3 && commandWords.has(word)).length
    })).sort((left, right) => right.score - left.score);
    const semanticTargetId = /\b(?:work\s+experience|experience\s+(?:bullets?|section)|employment|job\s+history|harvest\s+crews?)\b/i.test(command) ? "experience"
      : /\b(?:professional\s+summary|career\s+profile|profile\s+section)\b/i.test(command) ? "professional-summary"
      : /\b(?:skills?\s+(?:section|list)|competenc|proficien)\w*/i.test(command) ? "skills"
      : /\b(?:education|training|degree|certificate|diploma)\b/i.test(command) ? "education"
      : /\b(?:contact\s+(?:details?|information)|phone|email|address)\b/i.test(command) ? "contact"
      : /\b(?:full\s+name|candidate(?:'s)?\s+name)\b/i.test(command) ? "full-name" : "";
    const target = artifact.fields.find(field => field.id === semanticTargetId)
      || (rankedFields[0] && rankedFields[0].score > 0 ? rankedFields[0].field : null);
    if (target) {
      const quotedValues = [...command.matchAll(/[\u0022\u201c\u201d\u2018\u2019]([^\u0022\u201c\u201d\u2018\u2019]{12,})[\u0022\u201c\u201d\u2018\u2019]/g)]
        .map(match => clean(match[1], 5000)).filter(Boolean).sort((left, right) => right.length - left.length);
      const fieldSignals = {
        experience: /\b(experience|work|worked|role|job|crew|coordinat|managed|responsib|harvest)\w*/ig,
        skills: /\b(skill|proficien|competenc|able|equipment|tool|technical|safety)\w*/ig,
        education: /\b(education|school|degree|certificate|training|course|diploma)\w*/ig,
        "professional-summary": /\b(summary|profile|professional|years?|reliable|experienced)\w*/ig,
        contact: /\b(contact|phone|email|address|location)\w*/ig,
        "full-name": /\b(name|called)\w*/ig
      };
      const signalPattern = fieldSignals[target.id] || new RegExp(`${target.label || target.id}`.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "ig");
      const focusedValues = command.split(/(?<=[.!?])\s+/).map(sentence => ({
        value: clean(sentence.replace(/^.*?(?:revision|response):\s*/i, ""), 5000),
        score: (sentence.match(signalPattern) || []).length
      })).filter(item => item.value.length >= 12 && item.score > 0).sort((left, right) => right.score - left.score || right.value.length - left.value.length);
      const explicitValue = quotedValues[0] || (command.length >= 120 ? focusedValues[0] && focusedValues[0].value : /\b(?:with|as)\s+(.+)$/i.exec(command)?.[1]);
      const targetPattern = `${target.label || target.id}`.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+");
      const suppliedValue = clean(explicitValue || command
        .replace(/^(?:please\s+)?(?:change|revise|add|remove|fill|complete|update|replace)\s+/i, "")
        .replace(new RegExp(`\\s+to\\s+(?:the\\s+)?${targetPattern}[.!?]*$`, "i"), ""), 5000);
      target.value = /\b(add|include|append)\b/i.test(command) && target.value ? `${target.value}\n${suppliedValue}` : suppliedValue;
    } else {
      artifact.sections.push({ heading: "Requested revision", body: command, items: [] });
    }
    const capability = /résumé|resume|cv/i.test(artifact.title) ? "resume" : artifact.kind === "form" ? "form" : artifact.kind === "card" ? "question-card" : "document";
    return base(capability, "update", clean(context.activeWorkspace, 120) || "workspace", command, artifact, "The revised visible artifact is ready.");
  }
  if (/(?:\b(?:resume|curriculum vitae|cv)\b|résumé)/i.test(command)) {
    const years = /\b(\d{1,2})\s+years?\b/i.exec(command)?.[1] || "";
    const role = clean(command.replace(/^.*?(?:\b(?:resume|curriculum vitae|cv)\b|résumé)(?:\s+for)?/i, ""), 300);
    const artifact = emptyArtifact("document", "Editable résumé draft");
    artifact.description = "A visible editable résumé draft. Unknown personal facts remain blank for voice-guided completion.";
    artifact.fields = [
      { id: "full-name", label: "Full name", type: "text", value: "", required: true, options: [] },
      { id: "contact", label: "Contact details", type: "textarea", value: "", required: true, options: [] },
      { id: "professional-summary", label: "Professional summary", type: "textarea", value: role ? `${years ? `${years} years of ` : ""}${role}` : "", required: false, options: [] },
      { id: "experience", label: "Work experience", type: "textarea", value: years ? `${years} years of relevant experience` : "", required: false, options: [] },
      { id: "skills", label: "Skills", type: "textarea", value: "", required: false, options: [] },
      { id: "education", label: "Education and training", type: "textarea", value: "", required: false, options: [] }
    ];
    return base("resume", "create", "workforce", command, artifact, "The editable résumé is visible and ready for your next change.");
  }
  if (/\bhelp\b.*\b(?:crop|livestock)\b/i.test(command)) {
    const crop = clean(/\b(?:my\s+)?([a-z][a-z-]*)\s+crop\b/i.exec(command)?.[1] || "", 120);
    const livestock = clean(/\b(?:my\s+)?([a-z][a-z-]*)\s+livestock\b/i.exec(command)?.[1] || "", 120);
    const location = clean(/\bin\s+([a-z][a-z .'-]*?)(?:[.!?]|$)/i.exec(command)?.[1] || "", 180);
    const artifact = emptyArtifact("form", "Agriculture Help");
    artifact.description = "An editable Agriculture Help request populated only with the details supplied in this conversation.";
    artifact.fields = [
      { id: "crop-or-livestock", label: "Crop or livestock", type: "text", value: crop || livestock, required: true, options: [] },
      { id: "location", label: "Location", type: "text", value: location, required: true, options: [] },
      { id: "question-or-observation", label: "Question or observation", type: "textarea", value: command, required: false, options: [] }
    ];
    return base("form", "create", "agriculture", command, artifact, "The populated Agriculture Help request is visible and synchronized with this request.");
  }
  if (/\b(question|questions|checklist)\b/i.test(command) && /\b(pharmacist|medicine|medication|prescription|drug|clinician|doctor)\b/i.test(command)) {
    const artifact = emptyArtifact("card", "Medication conversation question card");
    artifact.description = "A printable, shareable preparation card for a pharmacist or prescriber. It is not medical advice and does not replace professional care.";
    artifact.sections = [
      { heading: "Questions to ask", body: "Use the questions that fit your situation.", items: ["What is this medicine for, and how will I know it is working?", "How and when should I take it, and what should I do if I miss a dose?", "Which side effects are common, and which require urgent help?", "Could it interact with my other medicines, supplements, foods, alcohol, or health conditions?", "What monitoring or follow-up do I need?", "Are there activities I should avoid, and how should I store it?"] },
      { heading: "Bring with you", body: "Share an up-to-date list so the pharmacist can check safety.", items: ["All prescription and non-prescription medicines", "Vitamins, supplements, and allergies", "Relevant conditions, pregnancy or breastfeeding status, and recent readings or symptoms"] },
      { heading: "Safety note", body: "Do not start, stop, split, or change a prescribed dose without checking with the prescriber or pharmacist. Seek emergency help for severe trouble breathing, swelling, fainting, chest pain, or other emergency symptoms.", items: [] }
    ];
    artifact.links = [
      { label: "FDA · Questions to Ask Your Healthcare Professional", url: "https://www.fda.gov/drugs/resources-you-drugs/questions-ask-your-healthcare-professional" },
      { label: "MedlinePlus · Medicines", url: "https://medlineplus.gov/medicines.html" },
      { label: "NHS · Medicines information", url: "https://www.nhs.uk/medicines/" }
    ];
    return base("question-card", "create", "pharmacy", command, artifact, "The readable medication question card is visible and ready to print or share.");
  }
  if (/\b(image|images|picture|pictures|photo|photos|symptom|symptoms)\b/i.test(command) && /\b(show|find|search|research|compare|identify)\b/i.test(command)) return base("images", "search", "live-knowledge", command, emptyArtifact("list", "Live image research"), "The source-attributed image research is visible.", true);
  if (/\b(map|route|directions|navigate|navigation)\b/i.test(command)) return normalizeGoalRoute(base("map", "open", "maps", command, emptyArtifact("map", "Live map and route"), "The validated live map and route are visible.", true));
  if (/\b(play|listen|music|song|artist|album|genre)\b/i.test(command)) return base(/\b(stop|quiet|pause)\b/i.test(command) ? "media-control" : "music", /\b(stop|quiet|pause)\b/i.test(command) ? "stop" : "play", "music", command, emptyArtifact("media", "Live music results"), "The requested authorized music source is visible.", true);
  if (/\b(research|sources?|websites?|look up|search the (?:web|internet)|current information)\b/i.test(command)) return base("search", "search", "live-knowledge", command, emptyArtifact("list", "Live reputable sources"), "The current reputable sources are visible.", true);
  if (/\b(intake|form|questionnaire)\b/i.test(command)) {
    const artifact = emptyArtifact("form", "Editable intake form");
    artifact.description = "A visible intake draft with blank fields for details that were not provided.";
    artifact.fields = ["Name", "Contact", "Main concern", "Relevant history", "Requested next step"].map((label, index) => ({ id: `field-${index + 1}`, label, type: index >= 2 ? "textarea" : "text", value: "", required: index < 3, options: [] }));
    return base("intake", "create", "intake", command, artifact, "The editable intake form is visible.");
  }
  if (/\b(marketplace|listing|list for sale|seller|buyer|sell|selling)\b/i.test(command)) {
    const amount = /\b(\d+(?:\.\d+)?)\s*(bags?|sacks?|crates?|tons?|kilograms?|kg|units?)?\b/i.exec(command);
    const item = clean(
      /\b\d+(?:\.\d+)?\s*(?:bags?|sacks?|crates?|tons?|kilograms?|kg|units?)?\s+(?:of\s+)?([a-z][a-z\s'-]*?)(?:[.!?]|$)/i.exec(command)?.[1]
      || /\b(?:sell|selling|list(?:ing)?(?:\s+for\s+sale)?)\s+([a-z][a-z\s'-]*?)(?:[.!?]|$)/i.exec(command)?.[1]
      || "",
      180
    );
    const artifact = emptyArtifact("draft", "Editable marketplace draft");
    artifact.description = "A visible marketplace draft. Review every detail before publishing or contacting anyone.";
    artifact.fields = [
      { id: "item", label: "Item or service", type: "text", value: item, required: true, options: [] },
      { id: "quantity", label: "Quantity", type: "text", value: amount ? [amount[1], amount[2]].filter(Boolean).join(" ") : "", required: true, options: [] },
      { id: "price", label: "Price and currency", type: "text", value: "", required: false, options: [] },
      { id: "location", label: "Location", type: "text", value: "", required: true, options: [] },
      { id: "description", label: "Description and collection or delivery terms", type: "textarea", value: "", required: false, options: [] }
    ];
    return base("marketplace-draft", "create", "marketplace", command, artifact, "The editable marketplace draft is visible for review.");
  }
  if (/\b(remind|reminder)\b/i.test(command)) {
    const artifact = emptyArtifact("card", "Reminder draft");
    artifact.description = "A visible reminder draft. Confirm the task and time before relying on it.";
    artifact.fields = [
      { id: "task", label: "Task", type: "textarea", value: clean(command.replace(/^.*?\bremind(?:er)?\b(?:\s+me)?(?:\s+to)?/i, ""), 1200), required: true, options: [] },
      { id: "when", label: "When", type: "text", value: /\b(today|tonight|tomorrow|next\s+\w+|\w+day(?:\s+(?:morning|afternoon|evening))?|\d{1,2}(?::\d{2})?\s*(?:am|pm))\b/i.exec(command)?.[0] || "", required: true, options: [] }
    ];
    return base("reminder", "create", "reminders", command, artifact, "The visible reminder draft is ready for confirmation.");
  }
  if (/\b(report|document|brief|letter|draft)\b/i.test(command)) {
    const artifact = emptyArtifact("document", "Editable document draft");
    artifact.description = command;
    artifact.sections = [{ heading: "Draft", body: "Use voice or typing to add, revise, review, and complete this document.", items: [] }];
    return base("document", "create", "documents", command, artifact, "The editable document draft is visible.");
  }
  return null;
}

function createContentActionService({ fetchImpl = globalThis.fetch, musicProvider = null, goalResolver = null, webSearchProvider = null, publicMusicProvider = true } = {}) {
  const providerFetch = createProviderFetch({ fetchImpl });
  const resolver = goalResolver || createOpenAIGoalResolver({ fetchImpl });
  const liveWebSearch = webSearchProvider || createOpenAIWebSearchProvider({ fetchImpl });

  async function publicMusic(goal) {
    const query = clean(goal.query) || "music";
    const cleanedQuery = clean(query
      .replace(/^(?:hey[\s,]+)?nexus[\s,;:.-]*/i, "")
      .replace(/\b(?:please|find(?:\s+and)?|search(?:\s+for)?|play|put on|listen to|bring up|open|some|music|songs?|tracks?|for me)\b/ig, " ")
      .replace(/\b(?:authorized|official|valid|source choices?)\b/ig, " ")
      .replace(/[,;]\s*(?:and\s+)?(?:show|display|open|list)\b.*$/i, "")
      .replace(/^[\s,;:.-]+|[\s,;:.-]+$/g, "")) || query;
    const searches = [query, cleanedQuery];
    let track = null;
    let tracks = [];
    let providerError = null;
    for (const search of searches) {
      const url = new URL("https://itunes.apple.com/search");
      url.searchParams.set("term", search);
      url.searchParams.set("media", "music");
      url.searchParams.set("entity", "song");
      url.searchParams.set("limit", "12");
      try {
        const response = await providerFetch(url, { headers: { "user-agent": "Nexus-Genesis/1.0 (public-music-search)" } });
        if (!response.ok) throw new Error(`The public music provider failed (${response.status}).`);
        const payload = await response.json();
        tracks = (Array.isArray(payload && payload.results) ? payload.results : []).filter((item) => safeHttpUrl(item.previewUrl) && safeHttpUrl(item.trackViewUrl));
        track = tracks[0] || null;
        if (track) break;
      } catch (error) {
        providerError = error;
      }
    }
    if (!track) throw providerError || new Error(`No playable public preview was returned for ${query}.`);
    const title = [clean(track.trackName, 220), clean(track.artistName, 180)].filter(Boolean).join(" — ") || query;
    const artifact = emptyArtifact("media", `Now playing: ${title}`);
    artifact.description = `Live public music preview for “${query}”.`;
    artifact.description = `Live authorized music results for ${query}. The first public preview is ready and every choice remains tied to this request.`;
    artifact.links = [{ label: "Open music source", url: track.trackViewUrl }];
    artifact.items = tracks.slice(0, 8).map((item, index) => ({
      id: clean(item.trackId || `track-${index + 1}`),
      title: [clean(item.trackName, 220), clean(item.artistName, 180)].filter(Boolean).join(" — ") || `Music choice ${index + 1}`,
      description: [clean(item.collectionName, 220), clean(item.primaryGenreName, 120)].filter(Boolean).join(" · "),
      sourceName: "Apple Music / iTunes Search API", sourceUrl: item.trackViewUrl,
      imageUrl: safeHttpUrl(String(item.artworkUrl100 || "").replace(/100x100bb/i, "600x600bb")),
      metadata: [item.releaseDate ? `Released ${String(item.releaseDate).slice(0, 10)}` : "", item.trackTimeMillis ? `${Math.round(item.trackTimeMillis / 1000)} seconds` : ""].filter(Boolean)
    }));
    artifact.media = { kind: "audio", title, provider: "Apple Music / iTunes Search API", sourceUrl: track.trackViewUrl, embedUrl: track.previewUrl, state: "playing", route: null };
    return artifact;
  }

  async function music(goal) {
    if (!musicProvider || typeof musicProvider.getMusicMediaSourceResultAsync !== "function") {
      if (publicMusicProvider) return publicMusic(goal);
      throw new Error("The live music search provider is not configured.");
    }
    const query = clean(goal.query) || "music";
    const found = await musicProvider.getMusicMediaSourceResultAsync({ mediaRequest: query });
    const sourceUrl = safeHttpUrl(found && found.sourceUrl);
    const videoId = /^https:\/\/(?:www\.)?youtube\.com\/watch\?v=([^&]+)/i.exec(sourceUrl)?.[1] || "";
    if (!videoId || found.sourceStatus !== "source-result-available") {
      if (publicMusicProvider) return publicMusic(goal);
      throw new Error(clean(found && found.resultSummary) || `No playable live result was returned for ${query}.`);
    }
    const title = clean(found.resultSummary).replace(/^YouTube video found:\s*/i, "") || query;
    const artifact = emptyArtifact("media", `Now playing: ${title}`);
    artifact.description = `Live result for “${query}”.`;
    artifact.links = [{ label: "Open media source", url: sourceUrl }];
    artifact.media = { kind: "video", title, provider: clean(found.sourceName), sourceUrl, embedUrl: `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1`, state: "playing", route: null };
    return artifact;
  }

  async function images(goal) {
    const rawQuery = clean(goal.query) || clean(goal.artifact && goal.artifact.title) || "images";
    const querySegments = rawQuery.split(/[.!?]+/).map(segment => clean(segment
      .replace(/^(?:hey[\s,]+)?nexus[\s,;:.-]*/i, "")
      .replace(/\b(?:please|show|display|find|search(?: for)?|research|bring up|source[- ]label(?:ed|s)?|with source labels?|images?|photos?|pictures?|explain|compare|tell me|give me)\b/ig, " ")
      .replace(/\b(?:me|of common)\b/ig, " "))).filter(segment => segment.length >= 3);
    const conversationalQuery = querySegments[0] || rawQuery;
    const cropDisease = /\b([a-z][a-z-]*)\s+diseases?\b/i.exec(rawQuery);
    const query = cropDisease
      ? `${clean(cropDisease[1], 80)} disease symptoms`
      : conversationalQuery;
    function stripMarkup(value) { return clean(String(value || "").replace(/<[^>]+>/g, " ").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, "&"), 1200); }
    function subjectTerms(value) {
      const generic = new Set(["with", "from", "that", "this", "common", "kenya", "disease", "symptom", "infection", "picture", "image", "photo"]);
      const terms = String(value || "").toLowerCase().split(/[^a-z0-9]+/)
        .filter(word => word.length >= 4).map(word => word.endsWith("s") ? word.slice(0, -1) : word).filter(word => !generic.has(word));
      if (terms.includes("maize") && !terms.includes("corn")) terms.push("corn");
      return terms;
    }
    async function wikipediaLookup(searchQuery) {
      const searchUrl = new URL("https://en.wikipedia.org/w/api.php");
      searchUrl.searchParams.set("action", "query"); searchUrl.searchParams.set("list", "search");
      searchUrl.searchParams.set("srsearch", searchQuery); searchUrl.searchParams.set("srlimit", "14"); searchUrl.searchParams.set("format", "json");
      const searchResponse = await providerFetch(searchUrl, { headers: { "user-agent": "Nexus-Genesis/1.0 (relevant-image-research)" } });
      if (!searchResponse.ok) throw new Error(`The image topic provider failed (${searchResponse.status}).`);
      const searchPayload = await searchResponse.json();
      const searchItems = Array.isArray(searchPayload && searchPayload.query && searchPayload.query.search) ? searchPayload.query.search : [];
      const topicWords = subjectTerms(query);
      const diseaseRequest = /\b(disease|symptom|infection|pest)\b/i.test(query);
      const relevant = searchItems.filter(item => {
        const title = String(item.title || "").toLowerCase();
        const text = `${title} ${stripMarkup(item.snippet)}`.toLowerCase();
        const topicMatches = topicWords.filter(word => text.includes(word)).length;
        const pathology = /\b(disease|symptom|virus|viral|blight|rust|necrosis|wilt|smut|mildew|rot|streak|fung|bacter|pest)\b/i.test(text);
        const titleRelevant = topicWords.some(word => title.includes(word)) || /\b(disease|virus|blight|rust|necrosis|wilt|smut|mildew|rot|streak|fung|bacter|pest)\b/i.test(title);
        return topicMatches >= 1 && titleRelevant && (!diseaseRequest || pathology);
      }).slice(0, 10);
      if (!relevant.length) return [];
      const pageUrl = new URL("https://en.wikipedia.org/w/api.php");
      pageUrl.searchParams.set("action", "query"); pageUrl.searchParams.set("prop", "pageimages|info");
      pageUrl.searchParams.set("piprop", "thumbnail"); pageUrl.searchParams.set("pithumbsize", "960"); pageUrl.searchParams.set("inprop", "url");
      pageUrl.searchParams.set("titles", relevant.map(item => item.title).join("|")); pageUrl.searchParams.set("format", "json");
      const pageResponse = await providerFetch(pageUrl, { headers: { "user-agent": "Nexus-Genesis/1.0 (relevant-image-research)" } });
      if (!pageResponse.ok) throw new Error(`The image thumbnail provider failed (${pageResponse.status}).`);
      const pagePayload = await pageResponse.json();
      const snippets = new Map(relevant.map(item => [item.title, stripMarkup(item.snippet)]));
      const pages = Object.values(pagePayload && pagePayload.query && pagePayload.query.pages || {});
      const pageItems = pages.map(page => ({
        id: `wikipedia-${page.pageid}`, title: clean(page.title), description: snippets.get(page.title) || "Topic background and source image.",
        sourceName: "Wikipedia / Wikimedia", sourceUrl: page.fullurl || "", imageUrl: page.thumbnail && page.thumbnail.source || "",
        metadata: ["Live topic match", page.touched ? `Source updated ${String(page.touched).slice(0, 10)}` : ""].filter(Boolean)
      })).filter(item => item.sourceUrl && item.imageUrl);
      const missingImageTitles = pages.filter(page => !(page.thumbnail && page.thumbnail.source)).map(page => page.title).slice(0, 2);
      for (const title of missingImageTitles) {
        try {
          const commonsItems = await lookup(title);
          for (const item of commonsItems) if (!pageItems.some(existing => existing.sourceUrl === item.sourceUrl)) pageItems.push(item);
        } catch {}
      }
      return pageItems;
    }
    async function openverseLookup(searchQuery) {
      const url = new URL("https://api.openverse.org/v1/images/");
      url.searchParams.set("q", searchQuery); url.searchParams.set("page_size", "12");
      const response = await providerFetch(url, { headers: { "user-agent": "Nexus-Genesis/1.0 (open-image-research)" } });
      if (!response.ok) throw new Error(`The Openverse image provider failed (${response.status}).`);
      const payload = await response.json();
      const subjectWords = subjectTerms(query);
      const diseaseRequest = /\b(disease|symptom|infection|pest)\b/i.test(query);
      return (Array.isArray(payload && payload.results) ? payload.results : []).filter(item => {
        const title = String(item.title || "").toLowerCase();
        const text = `${title} ${item.description || ""} ${(item.tags || []).map(tag => tag.name || tag).join(" ")}`.toLowerCase();
        const subjectMatch = subjectWords.some(word => text.includes(word));
        const pathology = /\b(disease|symptom|virus|viral|blight|rust|necrosis|wilt|smut|mildew|rot|streak|fung|bacter|pest|lesion)\b/i.test(text);
        const titleSubject = subjectWords.some(word => title.includes(word));
        const titlePathology = /\b(disease|symptom|virus|blight|rust|necrosis|wilt|smut|mildew|rot|streak|fung|bacter|pest|lesion)\b/i.test(title);
        const titleRelevant = diseaseRequest ? titleSubject && titlePathology : titleSubject || titlePathology;
        return subjectMatch && titleRelevant && (!diseaseRequest || pathology);
      }).map((item, index) => ({
        id: clean(item.id || `openverse-${index + 1}`), title: clean(item.title, 260) || `Image result ${index + 1}`,
        description: clean(item.creator ? `Image by ${item.creator}` : "Openly licensed image result."),
        sourceName: clean(item.source || item.provider || "Openverse"),
        sourceUrl: safeHttpUrl(item.foreign_landing_url || item.detail_url), imageUrl: safeHttpUrl(item.thumbnail || item.url),
        metadata: [clean(item.license, 80) ? `${String(item.license).toUpperCase()} license` : "See source for license", item.creator ? `Creator: ${clean(item.creator, 160)}` : ""].filter(Boolean)
      })).filter(item => item.sourceUrl && item.imageUrl).slice(0, 8);
    }
    async function lookup(searchQuery) {
      const url = new URL("https://commons.wikimedia.org/w/api.php");
      url.searchParams.set("action", "query"); url.searchParams.set("generator", "search");
      url.searchParams.set("gsrsearch", `filetype:bitmap ${searchQuery}`); url.searchParams.set("gsrnamespace", "6");
      url.searchParams.set("gsrlimit", "8"); url.searchParams.set("prop", "imageinfo");
      url.searchParams.set("iiprop", "url|extmetadata"); url.searchParams.set("iiurlwidth", "720"); url.searchParams.set("format", "json");
      const response = await providerFetch(url, { headers: { "user-agent": "Nexus-Genesis/1.0 (open-image-search)" } });
      if (!response.ok) throw new Error(`The live image provider failed (${response.status}).`);
      const payload = await response.json();
      const requiredWords = subjectTerms(query);
      const diseaseRequest = /\b(disease|symptom|infection|pest)\b/i.test(query);
      return Object.values(payload && payload.query && payload.query.pages || {}).map((page) => {
        const info = page.imageinfo && page.imageinfo[0] || {};
        return { id: String(page.pageid || page.title), title: clean(page.title).replace(/^File:/, ""), description: clean(info.extmetadata && info.extmetadata.ImageDescription && info.extmetadata.ImageDescription.value), sourceName: "Wikimedia Commons", sourceUrl: info.descriptionurl || "", imageUrl: info.thumburl || info.url || "", metadata: [clean(info.extmetadata && info.extmetadata.LicenseShortName && info.extmetadata.LicenseShortName.value) || "See source for license"] };
      }).filter((item) => {
        const title = String(item.title || "").toLowerCase();
        const text = `${title} ${stripMarkup(item.description)}`.toLowerCase();
        const topicMatch = requiredWords.some(word => text.includes(word));
        const pathology = /\b(disease|symptom|virus|viral|blight|rust|necrosis|wilt|smut|mildew|rot|streak|fung|bacter|pest)\b/i.test(text);
        const titleRelevant = requiredWords.some(word => title.includes(word)) || /\b(disease|virus|blight|rust|necrosis|wilt|smut|mildew|rot|streak|fung|bacter|pest)\b/i.test(title);
        return item.imageUrl && item.sourceUrl && topicMatch && titleRelevant && (!diseaseRequest || pathology);
      }).slice(0, 8);
    }
    async function wikipediaSummaryLookup(topic) {
      const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(String(topic || "").trim().replace(/\s+/g, "_"))}`;
      const response = await providerFetch(url, { headers: { "user-agent": "Nexus-Genesis/1.0 (source-attributed-image-fallback)" } });
      if (!response.ok) return null;
      const payload = await response.json();
      const sourceUrl = safeHttpUrl(payload.content_urls && payload.content_urls.desktop && payload.content_urls.desktop.page);
      const imageUrl = safeHttpUrl(payload.thumbnail && payload.thumbnail.source);
      if (!sourceUrl || !imageUrl) return null;
      return {
        id: `wikipedia-summary-${clean(payload.pageid || payload.title, 120)}`,
        title: clean(payload.title, 260),
        description: clean(payload.extract, 1200) || "Live topic summary and source image.",
        sourceName: "Wikipedia / Wikimedia",
        sourceUrl,
        imageUrl,
        metadata: ["Live canonical topic fallback"]
      };
    }
    const comparisonTerms = (goal.artifact && goal.artifact.sections || [])
      .flatMap(section => [section.heading, ...(section.items || [])])
      .map(value => clean(value, 180)).filter(Boolean);
    const cropAliasQuery = /\bmaize\b/i.test(query) ? query.replace(/\bmaize\b/ig, "corn") : "";
    const expansions = /\b(disease|symptom|infection|pest)\b/i.test(query) ? [cropAliasQuery, `${query} leaf blight`, `${query} virus rust`].filter(Boolean) : [];
    const targetedQueries = [...new Set([query, ...expansions, ...querySegments.slice(1), ...comparisonTerms.map(term => `${term} ${query}`)])].slice(0, 4);
    let items = [];
    let imageError = null;
    for (const targetedQuery of targetedQueries) {
      const found = [];
      try { found.push(...await wikipediaLookup(targetedQuery)); } catch (error) { imageError = error; }
      if (found.length < 4) try { found.push(...await openverseLookup(targetedQuery)); } catch (error) { imageError = error; }
      if (found.length < 2) try { found.push(...await lookup(targetedQuery)); } catch (error) { imageError = error; }
      for (const item of found) if (!items.some(existing => existing.sourceUrl === item.sourceUrl)) items.push(item);
      if (items.length >= 6) break;
    }
    if (items.length < 3) {
      const crop = subjectTerms(query)[0] || "";
      const canonicalTopics = crop ? [
        `${crop} mosaic viruses`, `${crop} brown streak virus disease`, `${crop} bacterial blight`,
        `${crop} leaf blight`, `${crop} rust`, `${crop} smut`
      ] : [];
      for (const topic of canonicalTopics) {
        if (items.length >= 4) break;
        try {
          const item = await wikipediaSummaryLookup(topic);
          if (item && !items.some(existing => existing.sourceUrl === item.sourceUrl)) items.push(item);
        } catch (error) { imageError = error; }
      }
    }
    const retries = [];
    if (/\s+in\s+/i.test(query)) {
      const [subject, location] = query.split(/\s+in\s+/i, 2);
      retries.push(`${location.replace(/,.*$/, "")} ${subject}`);
    }
    const location = clean(goal.location).replace(/,.*$/, "");
    if (location) retries.push(`${location} ${query.replace(new RegExp(location.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "ig"), "")}`);
    const words = query.replace(/\b(?:photographs?|photos?|pictures?|images?)\b/ig, " ").split(/\s+/).filter(Boolean);
    if (words.length > 2) retries.push(`${words.slice(-2).join(" ")} ${words.slice(0, -2).join(" ")}`, `${words.at(-1)} ${words.slice(0, -1).join(" ")}`);
    for (const retry of [...new Set(retries.map((value) => clean(value)).filter((value) => value && value.toLowerCase() !== query.toLowerCase()))].slice(0, 3)) {
      if (items.length >= 4) break;
      try {
        const found = await lookup(retry);
        for (const item of found) if (!items.some(existing => existing.sourceUrl === item.sourceUrl)) items.push(item);
      } catch (error) { imageError = error; }
    }
    if (!items.length) throw imageError || new Error(`The live image provider returned no source-labeled results for ${query}.`);
    const artifact = emptyArtifact("list", clean(goal.artifact && goal.artifact.title) || `Images: ${query}`);
    artifact.description = clean(goal.artifact && goal.artifact.description, 2000) || "Live, source-attributed image results with comparison guidance.";
    artifact.sections = Array.isArray(goal.artifact && goal.artifact.sections) ? [...goal.artifact.sections] : [];
    artifact.items = items.slice(0, 12);
    try {
      const live = await liveWebSearch(`${rawQuery} reputable symptom identification sources`);
      artifact.links = live.sources.slice(0, 8).map(source => ({ label: source.title || new URL(source.url).hostname, url: source.url }));
      if (live.summary) artifact.sections.push({ heading: "Source-backed comparison", body: clean(live.summary, 3000), items: [] });
    } catch (error) {
      artifact.sections.push({ heading: "Source retrieval note", body: `Every thumbnail links to its image source. Additional live reference search was unavailable: ${clean(error.message, 400)}`, items: [] });
    }
    return artifact;
  }

  async function listings(goal) {
    const query = clean(goal.query) || clean(goal.artifact && goal.artifact.title) || "places";
    const location = clean(goal.location);
    const subject = location ? query.replace(new RegExp(`\\s+near\\s+${location.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}.*$`, "i"), "") : query;
    async function lookup(searchQuery) {
      const url = new URL("https://nominatim.openstreetmap.org/search");
      url.searchParams.set("q", searchQuery);
      url.searchParams.set("format", "jsonv2"); url.searchParams.set("addressdetails", "1"); url.searchParams.set("limit", "8");
      const response = await providerFetch(url, { headers: { "user-agent": "Nexus-Genesis/1.0 (open-listings-search)" } });
      if (!response.ok) throw new Error(`The live listings provider failed (${response.status}).`);
      const payload = await response.json();
      return (Array.isArray(payload) ? payload : []).map((item) => ({
      id: clean(item.place_id || item.osm_id), title: clean(item.name || String(item.display_name || "").split(",")[0]) || "Listing",
      description: clean(item.display_name), sourceName: "OpenStreetMap / Nominatim",
      sourceUrl: item.osm_id ? `https://www.openstreetmap.org/${item.osm_type === "node" ? "node" : item.osm_type === "way" ? "way" : "relation"}/${encodeURIComponent(item.osm_id)}` : "",
      imageUrl: "", metadata: [item.type, item.category].map((value) => clean(value)).filter(Boolean)
      })).filter((item) => item.description);
    }
    const searches = [[subject, location].filter(Boolean).join(" near ")];
    const broader = subject.replace(/\brepairs?\b/ig, " ").replace(/\bshops\b/ig, "shop").replace(/\s+/g, " ").trim();
    if (broader && broader.toLowerCase() !== subject.toLowerCase()) searches.push([broader, location].filter(Boolean).join(" near "));
    const clinicRequest = /\b(mobile\s+clinic|clinic|health\s+(?:centre|center|facility)|medical\s+facility)\b/i.test(`${query} ${subject}`);
    const country = clean(location || /\bin\s+([A-Za-z][A-Za-z .'-]{2,80})/i.exec(query)?.[1], 100)
      .replace(/[?.!,;:]+$/, "");
    if (clinicRequest) {
      const clinicLocations = [...new Set([location, country].map(value => clean(value, 100)).filter(Boolean))];
      for (const place of clinicLocations) {
        searches.push(`clinic, ${place}`, `health centre, ${place}`, `hospital, ${place}`);
      }
      if (!clinicLocations.length) searches.push("clinic", "health centre", "hospital");
    }
    let items = [];
    let providerError = null;
    for (const search of [...new Set(searches.filter(Boolean))].slice(0, 8)) {
      try {
        items = await lookup(search);
      } catch (error) {
        providerError = error;
        continue;
      }
      if (items.length) break;
    }
    if (!items.length && clinicRequest) {
      const area = country || location || "the requested area";
      const sourceQuery = ["clinic health centre hospital", country || location].filter(Boolean).join(" ");
      const artifact = emptyArtifact("list", `Clinic search recovery for ${area}`);
      artifact.description = providerError
        ? `The live place provider was unavailable, so Nexus did not invent clinic listings for ${area}.`
        : `The live place provider returned no verified clinic listings for ${area}. Nexus did not invent results.`;
      artifact.sections = [{
        heading: "Useful recovery actions",
        body: "Broaden the request to a city or county, retry the live search, or inspect the current OpenStreetMap source directly. For urgent medical needs, use the local emergency service or nearest known health facility.",
        items: ["Try a city-level request such as “find clinics near Nairobi, Kenya.”", "Retry to check the live provider again.", "Open the source search and verify a facility before travelling."]
      }];
      artifact.links = [{
        label: `Search OpenStreetMap for health facilities in ${area}`,
        url: `https://www.openstreetmap.org/search?query=${encodeURIComponent(sourceQuery)}`
      }];
      return { artifact, recovered: true, providerError: clean(providerError && providerError.message, 400) };
    }
    if (!items.length) throw providerError || new Error(`The live listings provider returned no places for ${[query, location].filter(Boolean).join(" near ")}.`);
    const artifact = emptyArtifact("list", clean(goal.artifact && goal.artifact.title) || `Listings for ${query}`); artifact.description = `Live place results${location ? ` near ${location}` : ""}.`; artifact.items = items;
    return { artifact, recovered: false, providerError: "" };
  }

  async function research(goal, context) {
    const query = clean(goal.query) || clean(context && context.command);
    const artifact = emptyArtifact("list", clean(goal.artifact && goal.artifact.title) || "Live source results");
    if (context && typeof context.research === "function") {
      const receipt = await context.research({ question: query, parentReceiptId: context.parentReceiptId || null });
      artifact.description = clean(receipt.summary, 3000) || "Open the reputable sources below to inspect the current results.";
      artifact.items = (receipt.sources || []).map((source) => ({ id: source.id, title: source.title, description: source.organization || "Reputable source", sourceName: source.organization || "Approved source", sourceUrl: source.url, imageUrl: "", metadata: [source.publishedAt ? `Published ${source.publishedAt}` : "", source.retrievedAt ? `Retrieved ${source.retrievedAt}` : ""].filter(Boolean) }));
      if (artifact.items.length) return { artifact, evidence: { receiptId: receipt.id, status: receipt.status, verified: Boolean(receipt.verified), provider: receipt.provider } };
    }
    const live = await liveWebSearch(query);
    artifact.description = clean(live.summary, 3000) || "Open the live sources below to inspect the current results.";
    artifact.items = live.sources.map((source, index) => ({ id: `W${index + 1}`, title: source.title, description: "Live web source", sourceName: new URL(source.url).hostname.replace(/^www\./, ""), sourceUrl: source.url, imageUrl: "", metadata: ["Retrieved live"] }));
    const organizations = [...new Set(artifact.items.map((item) => item.sourceName))];
    return { artifact, evidence: { receiptId: null, status: organizations.length >= 2 ? "cross-source-live" : "single-source-live", verified: organizations.length >= 2, provider: "openai-web-search" } };
  }

  async function execute(request = {}, context = {}) {
    let goal;
    try {
      const explicitWorkspace = explicitApplicationWorkspace(request.command);
      const fastProviderGoal = explicitFastProviderGoal(request.command);
      const fastDraftGoal = explicitFastDraftGoal(request);
      goal = explicitWorkspace
        ? {
          capability: "workspace", operation: "open", workspace: explicitWorkspace, query: clean(request.command), location: "",
          needsLiveProvider: false, artifact: applicationWorkspaceArtifact(explicitWorkspace),
          acknowledgement: `${APPLICATION_WORKSPACES[explicitWorkspace][0]} is visibly open and synchronized with this request.`
        }
        : fastProviderGoal || fastDraftGoal || normalizeGoalRoute(await resolver.resolve(request));
    } catch (error) {
      goal = localResilienceGoal(request);
      if (!goal) {
        const fallbackGoal = { capability: "workspace", operation: "open", workspace: request.activeWorkspace || request.requestedWorkspace || "live-knowledge", query: clean(request.command), acknowledgement: "", artifact: emptyArtifact("status", "Nexus needs its goal resolver") };
        fallbackGoal.artifact.description = clean(error.message);
        return resultEnvelope(fallbackGoal, fallbackGoal.artifact, { status: "failed", recovery: { message: clean(error.message), nextActions: ["Check the OpenAI provider configuration and retry the same natural-language request."] } });
      }
    }
    try {
      let artifact = goal.artifact;
      let evidence = null;
      if (goal.capability === "workspace") {
        const applicationArtifact = applicationWorkspaceArtifact(goal.workspace);
        const hasContent = (artifact.fields || []).length || (artifact.sections || []).length || (artifact.items || []).length;
        if (applicationArtifact && !hasContent) {
          artifact = applicationArtifact;
          goal = { ...goal, acknowledgement: `${applicationArtifact.title} is visibly open and synchronized with this request.` };
        }
      }
      if (goal.capability === "music" && goal.operation === "play") artifact = await music(goal);
      else if (goal.capability === "media-control" && goal.operation === "stop") {
        artifact = emptyArtifact("media", "Playback stopped"); artifact.description = "The visible media player was cleared."; artifact.media = emptyMedia("stopped");
      } else if (goal.capability === "images") artifact = await images(goal);
      else if (goal.capability === "listings") {
        const listingResult = await listings(goal);
        if (listingResult.recovered) {
          throw new Error(listingResult.providerError || listingResult.artifact.description || "The live place provider returned no verified listings.");
        }
        artifact = listingResult.artifact;
      }
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
        const sourceUrl = map.type === "route"
          ? `https://www.openstreetmap.org/directions?engine=fossgis_osrm_car&route=${encodeURIComponent(`${map.origin.lat},${map.origin.lon};${map.destination.lat},${map.destination.lon}`)}`
          : `https://www.openstreetmap.org/?mlat=${focus.lat}&mlon=${focus.lon}#map=12/${focus.lat}/${focus.lon}`;
        artifact.media = {
          kind: "map", title: artifact.title, provider: "OpenStreetMap + OSRM", sourceUrl,
          embedUrl: `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&marker=${encodeURIComponent(`${focus.lat},${focus.lon}`)}&layer=mapnik`, state: "ready",
          route: {
            coordinates: map.type === "route" ? map.geometry.coordinates : [],
            origin: map.type === "route" ? map.origin : null,
            destination: map.type === "route" ? map.destination : null,
            focus
          }
        };
        artifact.links = [{ label: "Open interactive map", url: artifact.media.sourceUrl }];
        artifact.sections = [{ heading: map.type === "route" ? "Route summary" : "Location", body: artifact.description, items: map.type === "route" ? [`Distance: ${Math.round(map.distanceMeters / 100) / 10} km`, `Estimated driving time: ${Math.round(map.durationSeconds / 60)} minutes`] : [] }];
      } else if (goal.capability === "weather") {
        if (!context || typeof context.weather !== "function") throw new Error("The live weather provider is not configured.");
        const weather = await context.weather(goal.query);
        artifact = emptyArtifact("card", `Weather: ${weather.location}`);
        artifact.description = `${weather.temperatureC}°C now · high ${weather.highC}°C · low ${weather.lowC}°C · rain chance ${weather.rainChance}%`;
        artifact.links = [{ label: "Open weather source", url: weather.sourceUrl }];
        evidence = { status: weather.status, provider: weather.sourceName || "Open-Meteo", weather };
      } else if (goal.capability === "question-card") {
        artifact = normalizeArtifact(artifact);
        const cardText = `${artifact.description} ${(artifact.sections || []).map(section => `${section.heading} ${section.body} ${(section.items || []).join(" ")}`).join(" ")}`;
        if (!/not medical advice|do not (?:start|stop|change)|urgent|emergency|pharmacist|prescriber/i.test(cardText)) {
          artifact.sections.push({ heading: "Medication safety", body: "This card helps prepare for a conversation and is not medical advice. Do not start, stop, split, or change a prescribed medicine without checking with a pharmacist or prescriber. Seek urgent or emergency help for severe or rapidly worsening symptoms.", items: [] });
        }
        try {
          const live = await liveWebSearch(`${goal.query || request.command} official medication safety patient resources`);
          artifact.links = live.sources.slice(0, 8).map(source => ({ label: source.title || new URL(source.url).hostname, url: source.url }));
          evidence = { status: "live-references", provider: "openai-web-search", sourceCount: artifact.links.length };
        } catch (error) {
          artifact.sections.push({ heading: "Reference status", body: `The question card is available, but live reputable references could not be attached: ${clean(error.message, 400)}`, items: [] });
          evidence = { status: "reference-provider-unavailable", provider: "openai-web-search", error: clean(error.message, 300) };
        }
      }
      return resultEnvelope(goal, artifact, { evidence });
    } catch (error) {
      const artifact = emptyArtifact("status", "Nexus could not complete that live request");
      artifact.description = clean(error.message);
      return resultEnvelope(goal, artifact, { status: "failed", recovery: { message: clean(error.message), nextActions: ["Try a broader query.", "Choose another live capability or source.", "Retry when the provider is available."] } });
    }
  }

  return Object.freeze({ execute, music, images, listings, research });
}

module.exports = {
  CAPABILITIES, GOAL_SCHEMA, clean, createContentActionService, createOpenAIGoalResolver,
  createOpenAIWebSearchProvider, emptyArtifact, normalizeArtifact, normalizeWebSearchPayload,
  normalizeGoalRoute, outputText, resultEnvelope, safeHttpUrl
};
