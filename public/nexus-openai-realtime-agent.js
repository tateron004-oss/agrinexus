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

function microphoneProofForStream(stream) {
  const tracks = typeof stream?.getAudioTracks === "function" ? stream.getAudioTracks() : [];
  const liveTrack = tracks.find(track => track && track.enabled !== false && track.readyState === "live") || null;
  return {
    streamActive: Boolean(stream?.active),
    trackCount: tracks.length,
    trackState: liveTrack?.readyState || tracks[0]?.readyState || "none",
    trackEnabled: liveTrack ? liveTrack.enabled !== false : false,
    trackMuted: liveTrack ? Boolean(liveTrack.muted) : false,
    hasLiveTrack: Boolean(liveTrack),
    microphoneTrack: liveTrack
  };
}

async function connectSessionWithMicrophoneProof(session, connectOptions = {}, emit = () => {}) {
  if (!navigator.mediaDevices?.getUserMedia) throw new Error("Browser microphone capture is unavailable.");
  const mediaDevices = navigator.mediaDevices;
  const originalGetUserMedia = mediaDevices.getUserMedia.bind(mediaDevices);
  let requested = false;
  let acquiredStream = null;
  mediaDevices.getUserMedia = async constraints => {
    requested = true;
    emit("media_stream_requested", { audioRequested: Boolean(constraints?.audio) });
    try {
      acquiredStream = await originalGetUserMedia(constraints);
      const proof = microphoneProofForStream(acquiredStream);
      emit("media_stream_acquired", {
        streamActive: proof.streamActive,
        trackCount: proof.trackCount,
        trackState: proof.trackState,
        trackEnabled: proof.trackEnabled,
        hasLiveTrack: proof.hasLiveTrack
      });
      if (proof.microphoneTrack) {
        proof.microphoneTrack.addEventListener("ended", () => emit("microphone_track_ended", { trackState: proof.microphoneTrack.readyState }), { once: true });
        proof.microphoneTrack.addEventListener("mute", () => emit("microphone_track_muted", { trackState: proof.microphoneTrack.readyState }));
        proof.microphoneTrack.addEventListener("unmute", () => emit("microphone_track_unmuted", { trackState: proof.microphoneTrack.readyState }));
      }
      return acquiredStream;
    } catch (error) {
      const normalized = normalizeError(error);
      emit("media_stream_failed", { type: normalized.type, message: normalized.message });
      throw error;
    }
  };
  try {
    await session.connect(connectOptions);
  } finally {
    mediaDevices.getUserMedia = originalGetUserMedia;
  }
  const proof = microphoneProofForStream(acquiredStream);
  if (!requested) throw new Error("OpenAI Realtime did not request browser microphone capture.");
  if (!proof.hasLiveTrack) throw new Error("OpenAI Realtime connected without a live microphone track.");
  emit("microphone_track_live", {
    streamActive: proof.streamActive,
    trackCount: proof.trackCount,
    trackState: proof.trackState,
    trackEnabled: proof.trackEnabled,
    trackMuted: proof.trackMuted
  });
  return { stream: acquiredStream, microphoneTrack: proof.microphoneTrack, proof };
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
    instructions: `${options.instructions || ""} General conversation, greetings, presence checks, emotional support, capability questions, casual questions, and contextual follow-ups must be answered directly by the model without a function tool. Call a Nexus tool only for a genuine weather, source retrieval, map, agriculture, health-preparation, workforce, marketplace, communication, workflow, provider-readiness, calculation/data, file, visual, memory, reminder, calendar, export, browser-action, or receipt request. Keep every tool result, provider failure, clarification, and capability answer inside the current voice conversation unless the user explicitly asks to navigate. Never open or mention opening AI Help, dashboards, workspaces, plans, or mode panels unless navigation was explicitly requested.`,
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

  const microphone = await connectSessionWithMicrophoneProof(session, {
    apiKey: options.clientSecret,
    model: options.model || "gpt-realtime-2"
  }, emit);

  return {
    session,
    mediaStream: microphone.stream,
    microphoneTrack: microphone.microphoneTrack,
    getMicrophoneProof() {
      return microphoneProofForStream(microphone.stream);
    },
    close(reason = "closed") {
      emit("closing", { reason });
      session.close();
      try {
        microphone.stream?.getTracks?.().forEach(track => track.stop());
      } catch {
        // Browser media stream may already be stopped.
      }
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
