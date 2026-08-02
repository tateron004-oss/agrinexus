(function installNexusRealtimeRouteDeduper(globalObject) {
  "use strict";

  function normalize(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function isDirectResumeCommand(value) {
    const command = normalize(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    return /\b(help|create|make|build|start)\b/.test(command) && /\b(resume|curriculum vitae|cv)\b/.test(command);
  }

  function install(windowObject = globalObject) {
    const prototype = windowObject?.RTCPeerConnection?.prototype;
    if (!prototype || prototype.__nexusRealtimeRouteDeduper) return false;
    const nativeCreateDataChannel = prototype.createDataChannel;
    if (typeof nativeCreateDataChannel !== "function") return false;
    Object.defineProperty(prototype, "__nexusRealtimeRouteDeduper", { value: true });
    prototype.createDataChannel = function createDeduplicatedDataChannel(...args) {
      const channel = nativeCreateDataChannel.apply(this, args);
      const transcripts = new Map();
      let latestInputItemId = "";
      channel.addEventListener("message", (event) => {
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
        if (message.type !== "response.output_item.added" || message.item?.type !== "function_call" || message.item?.name !== "route_nexus_command") return;
        const transcript = transcripts.get(latestInputItemId) || "";
        if (!isDirectResumeCommand(transcript) || channel.readyState !== "open") return;
        channel.send(JSON.stringify({ type: "response.cancel", ...(message.response_id ? { response_id: message.response_id } : {}) }));
        windowObject.dispatchEvent?.(new windowObject.CustomEvent("nexus.realtime.route-deduplicated", {
          detail: Object.freeze({ command: normalize(transcript), capability: "resume", responseId: normalize(message.response_id) })
        }));
      });
      return channel;
    };
    return true;
  }

  const exported = Object.freeze({ install, isDirectResumeCommand, normalize });
  if (typeof module !== "undefined" && module.exports) module.exports = exported;
  if (globalObject?.document) install(globalObject);
})(typeof window !== "undefined" ? window : globalThis);
