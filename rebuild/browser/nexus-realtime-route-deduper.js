(function installNexusRealtimeRouteDeduper(globalObject) {
  "use strict";

  function normalize(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function isDirectResumeCommand(value) {
    const command = normalize(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    return /\b(help|create|make|build|start)\b/.test(command) && /\b(resume|curriculum vitae|cv)\b/.test(command);
  }

  function isDirectApplicationCommand(value) {
    const command = normalize(value);
    const wake = command.match(/^(?:(?:hey|hello)\s+)?nexus\b[\s,;:.-]*(.*)$/i);
    if (!wake) return false;
    const request = normalize(wake[1]);
    if (/^(?:set|change|correct|update|add|replace|read|review|save|reopen|restore|submit|confirm)\b/i.test(request)) return false;
    if (/\b(?:recipe|ingredients?)\b/i.test(request)) return false;
    if (/^sell\b/i.test(request)) return /^sell\s+\d/i.test(request);
    return /^(?:help|open|start|begin|record|find|search|plan|play|show|remind|create|make|build)\b/i.test(request);
  }

  function normalizeAgriculturalTranscript(value) {
    return normalize(value).replace(
      /\b(?:ma(?:ize|ze|se|ys|y['\u2019]s)|me['\u2019]?s)\b(?:['\u2019](?:s\b)?(?=\s))?(?=\s+(?:crop|disease|diseases|pest|plant|seed|treatment)\b)/gi,
      "maize"
    );
  }

  function normalizeRealtimeMessageData(value) {
    let message;
    try { message = JSON.parse(String(value || "")); } catch { return value; }
    if (message.type !== "conversation.item.input_audio_transcription.completed") return value;
    if (/^(?:(?:hey|hello)\s+)?nexus\b[\s,;:.-]*(?:set|change|correct|update|add|replace)\b/i.test(normalize(message.transcript))) return value;
    const transcript = normalizeAgriculturalTranscript(message.transcript);
    return transcript === normalize(message.transcript) ? value : JSON.stringify({ ...message, transcript });
  }

  function install(windowObject = globalObject) {
    const prototype = windowObject?.RTCPeerConnection?.prototype;
    if (!prototype || prototype.__nexusRealtimeRouteDeduper) return false;
    const nativeCreateDataChannel = prototype.createDataChannel;
    if (typeof nativeCreateDataChannel !== "function") return false;
    Object.defineProperty(prototype, "__nexusRealtimeRouteDeduper", { value: true });
    prototype.createDataChannel = function createDeduplicatedDataChannel(...args) {
      const channel = nativeCreateDataChannel.apply(this, args);
      const nativeAddEventListener = channel.addEventListener.bind(channel);
      const transcripts = new Map();
      const cancelledResponseIds = new Set();
      let latestInputItemId = "";
      nativeAddEventListener("message", (event) => {
        let message;
        try { message = JSON.parse(String(event.data || "")); } catch { return; }
        if (message.type === "conversation.item.input_audio_transcription.delta") {
          latestInputItemId = normalize(message.item_id) || latestInputItemId;
          transcripts.set(latestInputItemId, `${transcripts.get(latestInputItemId) || ""}${message.delta || ""}`);
          return;
        }
        if (message.type === "conversation.item.input_audio_transcription.completed") {
          latestInputItemId = normalize(message.item_id) || latestInputItemId;
          transcripts.set(latestInputItemId, normalize(message.transcript));
          return;
        }
        const routeArgumentsCompleted = message.type === "response.function_call_arguments.done" && message.name === "route_nexus_command";
        if (!routeArgumentsCompleted) return;
        const transcript = transcripts.get(latestInputItemId) || "";
        if (!isDirectApplicationCommand(transcript) || channel.readyState !== "open") return;
        const responseId = normalize(message.response_id);
        if (responseId && cancelledResponseIds.has(responseId)) return;
        if (responseId) cancelledResponseIds.add(responseId);
        if (message.call_id) channel.send(JSON.stringify({
          type: "conversation.item.create",
          item: {
            type: "function_call_output",
            call_id: message.call_id,
            output: JSON.stringify({ accepted: true, code: "duplicate-route-coalesced", message: "The final transcript owns this application route." })
          }
        }));
        windowObject.dispatchEvent?.(new windowObject.CustomEvent("nexus.realtime.route-deduplicated", {
          detail: Object.freeze({ command: normalize(transcript), capability: isDirectResumeCommand(transcript) ? "resume" : "application", responseId })
        }));
      });
      channel.addEventListener = function addNormalizedRealtimeListener(type, listener, options) {
        if (type !== "message" || !listener) return nativeAddEventListener(type, listener, options);
        return nativeAddEventListener(type, function normalizedRealtimeListener(event) {
          let message;
          try { message = JSON.parse(String(event.data || "")); } catch { message = null; }
          if (message?.type === "response.function_call_arguments.done" && cancelledResponseIds.has(normalize(message.response_id))) return;
          const data = normalizeRealtimeMessageData(event.data);
          if (data === event.data) {
            if (typeof listener === "function") return listener.call(this, event);
            return listener.handleEvent?.(event);
          }
          const normalizedEvent = Object.create(event);
          Object.defineProperty(normalizedEvent, "data", { value: data, enumerable: true });
          if (typeof listener === "function") return listener.call(this, normalizedEvent);
          return listener.handleEvent?.(normalizedEvent);
        }, options);
      };
      return channel;
    };
    return true;
  }

  const exported = Object.freeze({ install, isDirectApplicationCommand, isDirectResumeCommand, normalize, normalizeAgriculturalTranscript, normalizeRealtimeMessageData });
  if (typeof module !== "undefined" && module.exports) module.exports = exported;
  if (globalObject?.document) install(globalObject);
})(typeof window !== "undefined" ? window : globalThis);
