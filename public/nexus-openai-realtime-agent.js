import { RealtimeAgent, RealtimeSession, tool } from "@openai/agents/realtime";

const NEXUS_REALTIME_TOOL_PARAMETERS = {
  type: "object",
  additionalProperties: false,
  properties: {
    command: { type: "string", description: "The user's plain-language Nexus request." },
    query: { type: "string", description: "A concise source, weather, route, or workflow query." },
    capability: {
      type: "string",
      enum: [
        "general",
        "weather",
        "live-knowledge",
        "maps-routing",
        "agriculture",
        "health-preparation",
        "workforce",
        "learning-training",
        "marketplace-trade",
        "logistics",
        "communications",
        "workflow",
        "provider-readiness",
        "receipts-history"
      ],
      description: "The safest Nexus capability lane for the request."
    },
    language: { type: "string", description: "The user's active language or BCP-47 language code." },
    location: { type: "string", description: "Optional user-provided location text. Never infer precise location." },
    confirmed: { type: "boolean", description: "True only after explicit in-turn user confirmation." }
  },
  required: ["command"]
};

const NEXUS_REALTIME_TOOL_DEFINITIONS = [
  ["nexus_general_conversation", "General conversation, contextual follow-up, clarification, correction, language switching, and capability explanation."],
  ["nexus_live_knowledge", "Current or source-backed research using Nexus Live Knowledge and evidence receipts."],
  ["nexus_weather", "Weather and forecast support using configured read-only providers or truthful missing-location/provider states."],
  ["nexus_maps_route", "Maps, typed-location route planning, field visits, logistics, and travel preparation without geolocation or dispatch."],
  ["nexus_agriculture", "Agriculture, crops, field planning, predictive agriculture, and farmer support."],
  ["nexus_health_preparation", "Health literacy, chronic-care, RPM/RTM, telehealth prep, pharmacy prep, and provider summaries without diagnosis or prescribing."],
  ["nexus_workforce_learning", "Learning, literacy, training, jobs, workforce pathways, and career support."],
  ["nexus_marketplace_logistics", "Marketplace, buyer/seller, vendor research, logistics, and shipment planning without payment or purchase execution."],
  ["nexus_communications", "SMS, WhatsApp, email, phone, and Telegram preparation with confirmation-gated execution."],
  ["nexus_workflow", "Structured workflow support only when the user clearly asks for it."],
  ["nexus_provider_readiness", "Provider readiness, missing environment variable names, connector status, and blocked states without secrets."]
];

function safeText(value, max = 900) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, max);
}

function normalizeError(error) {
  const source = error && typeof error === "object" ? error : {};
  const nested = source.error && typeof source.error === "object" ? source.error : {};
  return {
    type: String(source.type || source.code || nested.type || nested.code || "openai-realtime-runtime-error").slice(0, 80),
    message: String(source.message || nested.message || error || "OpenAI Realtime runtime error.").slice(0, 240)
  };
}

function responseForModel(result = {}) {
  return JSON.stringify({
    ok: Boolean(result.ok !== false),
    status: result.status || "completed",
    response: safeText(result.response || result.spoken || result.answer || "Nexus completed the tool request.", 1200),
    citations: Array.isArray(result.citations) ? result.citations.slice(0, 5) : [],
    sources: Array.isArray(result.sources) ? result.sources.slice(0, 5) : [],
    missingInformation: result.missingInformation || [],
    missingEnvVars: result.missingEnvVars || result.missingEnv || [],
    blockedReason: result.blockedReason || null,
    providerAttempted: Boolean(result.providerAttempted || result.provider?.attempted),
    providerSucceeded: Boolean(result.providerSucceeded || result.provider?.succeeded),
    executionAttempted: Boolean(result.executionAttempted || result.execution?.attempted),
    executionVerified: Boolean(result.executionVerified || result.execution?.verified),
    noSecretValuesReturned: true,
    noUngatedExecution: true,
    instruction: "Explain this Nexus result naturally. Do not read JSON, route names, internal status labels, credentials, or metadata aloud."
  });
}

function createNexusRealtimeTool(name, description, options) {
  return tool({
    name,
    description,
    strict: false,
    parameters: NEXUS_REALTIME_TOOL_PARAMETERS,
    timeoutMs: Number(options.toolTimeoutMs || 15000),
    timeoutBehavior: "error_as_result",
    needsApproval: false,
    async execute(input) {
      const args = input && typeof input === "object" ? input : {};
      const command = safeText(args.command || args.query || options.lastUserCommand?.() || "", 900);
      const result = await options.callNexusTool(name, {
        ...args,
        command,
        language: args.language || options.language?.() || "en"
      });
      options.onToolResult?.(name, result);
      return responseForModel(result);
    },
    errorFunction(_context, error) {
      const normalized = normalizeError(error);
      return responseForModel({
        ok: false,
        status: "failed-truthfully",
        response: "The Nexus tool layer could not complete that request right now.",
        blockedReason: normalized.type
      });
    }
  });
}

function createNexusRealtimeTools(options) {
  return NEXUS_REALTIME_TOOL_DEFINITIONS.map(([name, description]) => createNexusRealtimeTool(name, description, options));
}

export async function startNexusOpenAiRealtimeGenesisSession(options = {}) {
  if (!options.clientSecret) throw new Error("OpenAI Realtime client secret is required.");
  const language = options.language?.() || "en";
  const agent = new RealtimeAgent({
    name: "Nexus Genesis",
    voice: options.voice || "marin",
    instructions: options.instructions,
    tools: createNexusRealtimeTools(options)
  });
  const session = new RealtimeSession(agent, {
    transport: "webrtc",
    model: options.model || "gpt-realtime-2",
    config: options.clientConfig || {},
    context: {
      nexusRuntime: "openai-agents-realtime",
      language,
      noSecretValuesReturned: true,
      noUngatedExecution: true
    },
    toolErrorFormatter: error => {
      const normalized = normalizeError(error);
      return `The Nexus tool layer failed truthfully: ${normalized.type}. Ask one concise follow-up question.`;
    }
  });

  const emit = (event, payload = {}) => options.onEvent?.(event, payload);
  session.on("connection_change", status => emit("connection_change", { status }));
  session.on("audio_start", () => emit("audio_start", { assistantSpeaking: true }));
  session.on("audio_stopped", () => emit("audio_stopped", { assistantSpeaking: false }));
  session.on("audio_interrupted", () => emit("audio_interrupted", { interrupted: true }));
  session.on("agent_start", () => emit("agent_start", { processing: true }));
  session.on("agent_end", (_context, _agent, output) => emit("agent_end", { output: safeText(output, 1200) }));
  session.on("agent_tool_start", (_context, _agent, toolRef) => emit("agent_tool_start", { toolName: toolRef?.name || "" }));
  session.on("agent_tool_end", (_context, _agent, toolRef, result) => emit("agent_tool_end", { toolName: toolRef?.name || "", result: safeText(result, 400) }));
  session.on("history_updated", history => emit("history_updated", { turnCount: Array.isArray(history) ? history.length : 0 }));
  session.on("history_added", item => emit("history_added", { type: item?.type || "", role: item?.role || "" }));
  session.on("transport_event", event => {
    const type = String(event?.type || event?.event?.type || "");
    emit("transport_event", { type });
  });
  session.on("error", error => emit("error", normalizeError(error)));

  await session.connect({
    apiKey: options.clientSecret,
    model: options.model || "gpt-realtime-2"
  });

  return {
    session,
    close(reason = "closed") {
      emit("closing", { reason });
      session.close();
    },
    interrupt() {
      session.interrupt();
    },
    mute(value) {
      session.mute(Boolean(value));
    },
    sendMessage(text) {
      session.sendMessage(String(text || ""));
    }
  };
}

export function normalizeNexusOpenAiRealtimeError(error) {
  return normalizeError(error);
}
