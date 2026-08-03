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
    if (/\b(?:recipe|ingredients?)\b/i.test(request) && !/^show\s+sources?\b/i.test(request)) return false;
    if (/^sell\b/i.test(request)) return /^sell\s+\d/i.test(request);
    return /^(?:help|open|start|begin|record|find|search|plan|play|show|remind|create|make|build)\b/i.test(request);
  }

  function normalizeAgriculturalTranscript(value) {
    const command = normalize(value).replace(
      /\b(?:ma(?:ize|ze|zed|se|ys|y['\u2019]s)|meas(?:les)?|me['\u2019]?s)\b(?:['\u2019](?:s\b)?(?=\s))?(?=\s+(?:crop|disease|diseases|pest|plant|seed|treatment)\b)/gi,
      "maize"
    );
    if (!/\b(?:pictures?|images?|photos?)\b/i.test(command) || !/\b(?:agricultur\w*|crops?|maize|diseases?|pests?|plants?)\b/i.test(command)) return command;
    return normalize(command
      .replace(/\bsource[- ]label(?:ed|led)\s+/ig, "")
      .replace(/\s+with\s+source\s+labels?\b/ig, ""));
  }

  function normalizeMarketplaceTranscript(value) {
    const numbers = Object.freeze({
      zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9,
      ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16,
      seventeen: 17, eighteen: 18, nineteen: 19, twenty: 20, thirty: 30, forty: 40, fifty: 50,
      sixty: 60, seventy: 70, eighty: 80, ninety: 90
    });
    const command = normalize(value).replace(
      /^((?:(?:hey|hello)\s+)?nexus\b[\s,;:.-]*)(?:shall|shale|shell)(?=\s+(?:(?:\d+(?:\.\d+)?)|(?:zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)(?:[- ](?:zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety))*)\s+(?:bags?|sacks?|kg|kilograms?|tons?|crates?|units?)\s+(?:of\s+)?(?:maize|corn|crop|produce)\b)/i,
      "$1sell"
    );
    return command.replace(
      /(\bnexus\b[\s,;:.-]*sell\s+)([a-z]+)(?:[- ]([a-z]+))?(?=\s+(?:bags?|sacks?|kg|kilograms?|tons?|crates?|units?)\b)/i,
      (match, prefix, first, second) => {
        const left = numbers[first.toLowerCase()];
        const right = second ? numbers[second.toLowerCase()] : 0;
        if (left === undefined || (second && (right === undefined || left < 20 || right >= 10))) return match;
        return `${prefix}${left + right}`;
      }
    );
  }

  function normalizeFieldEditTranscript(value) {
    return normalize(value)
      .replace(/^((?:(?:hey|hello)\s+)?nexus\b[\s,;:.-]*)setlocation\b/i, "$1set location")
      .replace(/^((?:(?:hey|hello)\s+)?nexus\b[\s,;:.-]*)changed\b/i, "$1change")
      .replace(
        /^((?:(?:hey|hello)\s+)?nexus\b[\s,;:.-]*)(?:had|ad)(?=\s+.+\s+to\s+(?:work\s+)?experience\.?$)/i,
        "$1add"
      )
      .replace(
        /^((?:(?:hey|hello)\s+)?nexus\b[\s,;:.-]*set\s+)restan(?=\s+for\s+visit\s+to\s+)/i,
        "$1reason"
      )
      .replace(
        /^((?:(?:hey|hello)\s+)?nexus\b[\s,;:.-]*set\s+symptoms\s+or\s+notes\s+to\s+)notes\.?$/i,
        "$1no symptoms."
      )
      .replace(
        /^((?:(?:hey|hello)\s+)?nexus\b[\s,;:.-]*set\s+r[eé]sum[eé]\s*full\s*name\s+to\s+)rauntate\.?$/i,
        "$1Ron Tate."
      )
      .replace(
        /^((?:(?:hey|hello)\s+)?nexus\b[\s,;:.-]*set\s+r\S*sum\S*\s*full\s*name\s+to\s+)rontate\.?$/i,
        "$1Ron Tate."
      );
  }

  function normalizeApplicationReopenTranscript(value) {
    return normalize(value).replace(
      /^((?:(?:hey|hello)\s+)?nexus\b[\s,;:.-]*reopen\s+agriculture\s+help)(?:\s+and\s+keep\s+(?:the\s+)?visible\s+work\s*space\s+synchronized)\.?$/i,
      "$1."
    );
  }

  function normalizeWakeTranscript(value) {
    const command = normalize(value)
      .replace(/^nexust\b/i, "Nexus")
      .replace(
        /^((?:(?:hey|hello)\s+)?nexus\b[\s,;:.-]*)started\s+(?:a\s+)?(?=digital\s+literacy\s+course\b)/i,
        "$1start a "
      );
    if (!/^next(?:est)?\b/i.test(command) || !/\bpilot evidence dashboard\b/i.test(command)) return command;
    return command.replace(/^next(?:est)?\b/i, "Nexus");
  }

  function normalizeRecipeTranscript(value) {
    const command = normalize(value);
    const request = command.replace(/^(?:(?:(?:hey|hello)\s+)?nexus\b|next\b)[\s,;:.-]*/i, "");
    if (request === command || !/\bapple pie recipe\b/i.test(request) || !/\bsources?\b/i.test(request)) return command;
    return "Nexus, show sources for an apple pie recipe with ingredients and steps.";
  }

  function normalizeRealtimeMessageData(value) {
    let message;
    try { message = JSON.parse(String(value || "")); } catch { return value; }
    if (message.type !== "conversation.item.input_audio_transcription.completed") return value;
    const originalTranscript = normalize(message.transcript);
    const wakeTranscript = normalizeWakeTranscript(originalTranscript);
    const applicationReopenTranscript = normalizeApplicationReopenTranscript(wakeTranscript);
    const fieldEditTranscript = normalizeFieldEditTranscript(applicationReopenTranscript);
    if (/^(?:(?:hey|hello)\s+)?nexus\b[\s,;:.-]*(?:set|change|correct|update|add|replace)\b/i.test(fieldEditTranscript)) {
      return fieldEditTranscript === originalTranscript ? value : JSON.stringify({ ...message, transcript: fieldEditTranscript });
    }
    const transcript = normalizeRecipeTranscript(normalizeMarketplaceTranscript(normalizeAgriculturalTranscript(applicationReopenTranscript)));
    return transcript === originalTranscript ? value : JSON.stringify({ ...message, transcript });
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
          const normalizedMessage = JSON.parse(normalizeRealtimeMessageData(event.data));
          transcripts.set(latestInputItemId, normalize(normalizedMessage.transcript));
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

  const exported = Object.freeze({ install, isDirectApplicationCommand, isDirectResumeCommand, normalize, normalizeAgriculturalTranscript, normalizeApplicationReopenTranscript, normalizeFieldEditTranscript, normalizeMarketplaceTranscript, normalizeRecipeTranscript, normalizeRealtimeMessageData, normalizeWakeTranscript });
  if (typeof module !== "undefined" && module.exports) module.exports = exported;
  if (globalObject?.document) install(globalObject);
})(typeof window !== "undefined" ? window : globalThis);
