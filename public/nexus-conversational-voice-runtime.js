(function initNexusConversationalVoiceRuntime(root, factory) {
  const runtime = factory(root);
  if (typeof module === "object" && module.exports) {
    module.exports = runtime;
  }
  if (root) {
    root.NexusConversationalVoiceRuntime = runtime;
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusConversationalVoiceRuntimeFactory(root) {
  "use strict";

  const VOICE_STATES = Object.freeze([
    "unavailable",
    "idle",
    "listening",
    "processing",
    "reasoning",
    "routing",
    "speaking",
    "paused",
    "error"
  ]);

  const FALLBACKS = Object.freeze({
    voiceInputUnavailable: "Voice input is unavailable in this browser. Open Nexus in a supported browser for the voice front door; structured fields appear only after Nexus opens a workflow.",
    voiceOutputUnavailable: "Voice output is unavailable in this browser. Nexus response is shown on screen.",
    selectedLanguageInputUnsupported: "Voice input may not be supported for the selected language in this browser. Keep using voice where supported; structured fields appear only after Nexus opens a workflow.",
    selectedLanguageOutputUnsupported: "Voice output may not be available for the selected language in this browser. Nexus will show the response on screen."
  });

  const LOCALE_MAP = Object.freeze({
    en: "en-US",
    es: "es-ES",
    fr: "fr-FR",
    sw: "sw-KE",
    ar: "ar",
    pt: "pt-BR"
  });

  const UI_LABELS = Object.freeze({
    en: { listen: "Listen", stop: "Stop", repeat: "Repeat", mute: "Mute", unmute: "Unmute", send: "Ask", ready: "Conversation ready" },
    es: { listen: "Escuchar", stop: "Parar", repeat: "Repetir", mute: "Silenciar", unmute: "Sonido", send: "Preguntar", ready: "Conversacion lista" },
    fr: { listen: "Ecouter", stop: "Arreter", repeat: "Repeter", mute: "Muet", unmute: "Son", send: "Demander", ready: "Conversation prete" },
    sw: { listen: "Sikiliza", stop: "Simama", repeat: "Rudia", mute: "Nyamazisha", unmute: "Sauti", send: "Uliza", ready: "Mazungumzo tayari" },
    ar: { listen: "استمع", stop: "إيقاف", repeat: "كرر", mute: "كتم", unmute: "صوت", send: "اسأل", ready: "المحادثة جاهزة" },
    pt: { listen: "Ouvir", stop: "Parar", repeat: "Repetir", mute: "Silenciar", unmute: "Som", send: "Perguntar", ready: "Conversa pronta" }
  });

  let state = "idle";
  let recognition = null;
  let lastResponse = "";
  let lastResult = null;
  let muted = false;
  let mounted = false;
  // Found live (fresh-module frontend audit): processTranscript() is called from three independent entry
  // points (a voice result, typed "send", a follow-up prompt click) with no in-flight guard. If a slower
  // call (e.g. the live-knowledge/dialogue path) is still awaiting its result when a newer, faster call
  // starts and finishes first, the SLOWER call's eventual result still overwrites lastResponse/lastResult
  // and speaks/renders -- so the UI can end up showing and speaking the answer to a stale, already-abandoned
  // question after the person has already moved on. transcriptGeneration is bumped at the start of every
  // processTranscript() call; each of its three branches checks, right after its own await, whether it's
  // still the latest call before rendering/speaking -- the same generation-check pattern already used
  // correctly elsewhere in this codebase (kyro-navigation.js's sessionGeneration, nexus-genesis-voice-
  // runtime-manager.js's processTurn).
  let transcriptGeneration = 0;

  function canonicalLanguage(language) {
    const raw = String(language || "en").toLowerCase();
    if (raw.startsWith("es")) return "es";
    if (raw.startsWith("fr")) return "fr";
    if (raw.startsWith("sw")) return "sw";
    if (raw.startsWith("ar")) return "ar";
    if (raw.startsWith("pt")) return "pt";
    return "en";
  }

  function localeForLanguage(language) {
    return LOCALE_MAP[canonicalLanguage(language)] || LOCALE_MAP.en;
  }

  function currentLanguage() {
    const doc = root?.document;
    const selected = doc?.querySelector?.("#platformLanguageSelect")?.value
      || doc?.querySelector?.("#nexusVoiceDemoLanguageSelect")?.value
      || doc?.documentElement?.lang
      || "en";
    return canonicalLanguage(selected);
  }

  function recognitionConstructor(env = root) {
    return env?.SpeechRecognition || env?.webkitSpeechRecognition || null;
  }

  function detectSupport(env = root) {
    return {
      speechRecognition: Boolean(recognitionConstructor(env)),
      speechSynthesis: Boolean(env?.speechSynthesis && env?.SpeechSynthesisUtterance),
      selectedLanguage: currentLanguage(),
      selectedLocale: localeForLanguage(currentLanguage())
    };
  }

  function setState(nextState, detail = "") {
    state = VOICE_STATES.includes(nextState) ? nextState : "error";
    renderStatus(detail);
    return state;
  }

  function label(key, language = currentLanguage()) {
    return UI_LABELS[canonicalLanguage(language)]?.[key] || UI_LABELS.en[key] || key;
  }

  function host() {
    return root?.document?.querySelector?.("#nexusMultilingualVoiceRuntime") || null;
  }

  function renderStatus(detail = "") {
    const h = host();
    if (!h) return;
    const language = currentLanguage();
    const status = h.querySelector("[data-nexus-conversation-state]");
    const support = h.querySelector("[data-nexus-conversation-support]");
    const locale = h.querySelector("[data-nexus-conversation-locale]");
    h.dataset.voiceState = state;
    h.lang = language;
    h.dir = language === "ar" ? "rtl" : "ltr";
    if (status) status.textContent = detail || `${label("ready", language)}: ${state}`;
    if (support) {
      const detected = detectSupport(root);
      const input = detected.speechRecognition ? "voice input ready" : "type fallback ready";
      const output = detected.speechSynthesis ? "speech output ready" : "screen output ready";
      support.textContent = `${input}; ${output}`;
    }
    if (locale) locale.textContent = localeForLanguage(language);
    h.querySelectorAll("[data-nexus-conversation-label]").forEach(node => {
      const key = node.getAttribute("data-nexus-conversation-label");
      node.textContent = key === "mute" ? label(muted ? "unmute" : "mute", language) : label(key, language);
    });
  }

  function renderTranscript(text = "", confidence) {
    const h = host();
    if (!h) return;
    const transcript = h.querySelector("[data-nexus-conversation-transcript]");
    const confidenceNode = h.querySelector("[data-nexus-conversation-confidence]");
    if (transcript) transcript.textContent = text || "Transcript will appear here.";
    if (confidenceNode) confidenceNode.textContent = Number.isFinite(confidence) ? `confidence ${Math.round(confidence * 100)}%` : "";
  }

  function renderDialogueResult(result = {}) {
    lastResult = result;
    lastResponse = result.answer || result.spokenSummary || "";
    const h = host();
    if (!h) return result;
    const response = h.querySelector("[data-nexus-conversation-response]");
    const next = h.querySelector("[data-nexus-conversation-next]");
    const blocked = h.querySelector("[data-nexus-conversation-blocked]");
    const sources = h.querySelector("[data-nexus-conversation-sources]");
    if (response) response.textContent = lastResponse || "Nexus is ready.";
    if (next) next.textContent = result.recommendedNextStep || "Ask a follow-up or choose a workspace.";
    if (blocked) {
      const blockedActions = Array.isArray(result.blockedActions) ? result.blockedActions.slice(0, 3).join("; ") : "";
      blocked.textContent = blockedActions || "No execution was authorized.";
    }
    if (sources) {
      const sourceList = Array.isArray(result.sources) && result.sources.length
        ? result.sources.slice(0, 3).map(source => source.title || source.url || source.source || "source").join(" | ")
        : "No live citations shown unless a configured provider returns sources.";
      sources.textContent = sourceList;
    }
    renderStatus(result.intentType === "direct_navigation_command" ? "Routing safely" : "Answered safely");
    return result;
  }

  function chooseVoice(language = currentLanguage()) {
    const synthesis = root?.speechSynthesis;
    if (!synthesis?.getVoices) return null;
    const locale = localeForLanguage(language).toLowerCase();
    const voices = synthesis.getVoices() || [];
    const exact = voices.find(voice => String(voice.lang || "").toLowerCase() === locale);
    if (exact) return exact;
    const family = locale.split("-")[0];
    const sameFamily = voices.find(voice => String(voice.lang || "").toLowerCase().startsWith(family));
    return sameFamily || voices.find(voice => /natural|online|enhanced|system/i.test(voice.name || "")) || voices[0] || null;
  }

  function speak(text = lastResponse, options = {}) {
    const message = String(text || "").trim();
    if (!message || muted) return { spoken: false, reason: muted ? "muted" : "empty" };
    if (!root?.speechSynthesis || !root?.SpeechSynthesisUtterance) {
      renderStatus(FALLBACKS.voiceOutputUnavailable);
      return { spoken: false, reason: "unsupported", fallback: FALLBACKS.voiceOutputUnavailable };
    }
    const language = canonicalLanguage(options.language || currentLanguage());
    const utterance = new root.SpeechSynthesisUtterance(message);
    utterance.lang = localeForLanguage(language);
    utterance.rate = 0.92;
    utterance.pitch = 0.9;
    utterance.volume = 1;
    const voice = chooseVoice(language);
    if (voice) utterance.voice = voice;
    utterance.onstart = () => setState("speaking", "Speaking response");
    utterance.onend = () => setState("idle", "Conversation ready");
    utterance.onerror = () => setState("error", FALLBACKS.selectedLanguageOutputUnsupported);
    root.speechSynthesis.cancel();
    root.speechSynthesis.speak(utterance);
    return { spoken: true, locale: utterance.lang, voice: voice?.name || "default" };
  }

  function stop() {
    if (recognition) {
      try { recognition.stop(); } catch { /* ignore stop races */ }
      recognition = null;
    }
    if (root?.speechSynthesis?.cancel) root.speechSynthesis.cancel();
    setState("paused", "Voice stopped");
    return true;
  }

  function repeat() {
    if (!lastResponse) {
      renderStatus("No previous Nexus response to repeat.");
      return false;
    }
    speak(lastResponse);
    return true;
  }

  async function processTranscript(transcript, meta = {}) {
    const text = String(transcript || "").trim();
    if (!text) {
      setState("idle", "No transcript captured.");
      return null;
    }
    transcriptGeneration += 1;
    const generation = transcriptGeneration;
    renderTranscript(text, meta.confidence);
    setState("reasoning", "Nexus is preparing your plan");
    const brainRuntime = root?.NexusUnifiedBrainRuntime;
    if (brainRuntime?.shouldHandleBeforeLegacy?.(text, { language: currentLanguage(), inputType: meta.source || "voice" })) {
      const result = await brainRuntime.process(text, {
        language: currentLanguage(),
        inputType: meta.source || "voice",
        sourceMode: "conversation_shell"
      });
      if (generation !== transcriptGeneration) return result; // a newer processTranscript() call has since started; let it own the UI/speech
      if (brainRuntime.mount) brainRuntime.mount();
      if (brainRuntime.render) brainRuntime.render(result);
      const summary = result?.conversationalResponse || result?.userVisibleStatus || result?.understoodGoal || "Nexus prepared a unified mission plan.";
      // Found live: this called renderResponse(...), a function that is never defined anywhere in
      // this file (only renderDialogueResult/renderStatus/renderTranscript exist) -- every command
      // the Unified Brain Runtime intercepts (a broad, realistic set) hit this ReferenceError.
      // processTranscript() is always invoked as `void processTranscript(...)`, so the rejection was
      // silently swallowed: the UI stayed stuck on "Nexus is preparing your plan" forever, nothing was
      // rendered or spoken, and setState("idle", ...) right below was never reached. Uses the same
      // renderDialogueResult() the sibling agriculture-runtime branch already calls a few lines down,
      // with the field names it actually expects (answer, not text).
      renderDialogueResult({
        answer: summary,
        intentType: "unified_brain_mission"
      });
      setState("idle", "Mission plan prepared safely");
      return result;
    }
    const agricultureRuntime = root?.NexusAgricultureCollaborationRuntime;
    if (agricultureRuntime?.shouldHandleBeforeLegacy?.(text, { language: currentLanguage(), inputType: meta.source || "voice" })) {
      const result = await agricultureRuntime.process(text, {
        language: currentLanguage(),
        inputType: meta.source || "voice",
        sourceMode: "conversation_shell"
      });
      if (generation !== transcriptGeneration) return result;
      agricultureRuntime.mount?.();
      agricultureRuntime.render?.(result);
      const answer = result.userVisibleStatus || result.answer || result.message || "Nexus prepared an agriculture packet locally. No external agriculture action was executed.";
      renderDialogueResult({
        answer,
        spokenSummary: answer,
        recommendedNextStep: "Review the agriculture packet, source labels, missing credentials, and receipt.",
        blockedActions: ["No agriculture execution was authorized."],
        sources: result.sourceLabels || []
      });
      if (!muted && meta.source !== "typed") {
        speak(answer, { language: currentLanguage() });
      } else {
        setState("idle", "Agriculture packet prepared safely");
      }
      return result;
    }
    const dialogue = root?.NexusOpenDialogueRuntime;
    let result = null;
    if (dialogue?.respondAsync) {
      result = await dialogue.respondAsync(text, {
        language: currentLanguage(),
        navigationRuntime: root?.NexusUniversalNavigationRuntime,
        inputType: meta.source || "voice",
        skipLiveKnowledge: false
      });
    } else {
      result = {
        answer: "Nexus received your request. The dialogue runtime is not loaded, so I will use the standard Ask Nexus path.",
        spokenSummary: "Nexus received your request.",
        recommendedNextStep: "Type the same command in Ask Nexus.",
        blockedActions: ["No execution was authorized."],
        sources: []
      };
    }
    if (generation !== transcriptGeneration) return result;
    renderDialogueResult(result);
    if (!muted && meta.source !== "typed") {
      speak(result.spokenSummary || result.answer || "", { language: currentLanguage() });
    } else {
      setState("idle", "Answered safely");
    }
    return result;
  }

  function startListening() {
    const Constructor = recognitionConstructor(root);
    if (!Constructor) {
      setState("unavailable", FALLBACKS.voiceInputUnavailable);
      return { started: false, reason: "unsupported", fallback: FALLBACKS.voiceInputUnavailable };
    }
    stop();
    // Found live (fresh-module frontend audit): onend/onerror checked the shared module-level `state` and
    // unconditionally nulled the shared `recognition` variable, with nothing tying either check to THIS
    // specific recognition instance. If recognition.stop() doesn't synchronously cancel the browser's
    // already-queued "end" event (it generally doesn't), and a fresh startListening() call replaces
    // `recognition` with a new instance before the old one's onend fires, the stale onend still saw
    // state === "listening" (now true for the NEW session) and flipped it back to idle -- and nulled
    // `recognition`, discarding the new, still-active instance. Capturing the instance in this closure and
    // checking recognition === instance before acting makes a stale event from an already-replaced
    // instance a no-op instead.
    const instance = new Constructor();
    recognition = instance;
    recognition.lang = localeForLanguage(currentLanguage());
    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.maxAlternatives = 1;
    recognition.onstart = () => { if (recognition === instance) setState("listening", "Listening for one Nexus command"); };
    recognition.onerror = event => {
      if (recognition !== instance) return;
      recognition = null;
      setState("error", event?.error === "language-not-supported" ? FALLBACKS.selectedLanguageInputUnsupported : "Voice input stopped safely.");
    };
    recognition.onend = () => {
      if (recognition !== instance) return;
      if (state === "listening") setState("idle", "Voice input ended");
      recognition = null;
    };
    recognition.onresult = event => {
      const result = event?.results?.[0]?.[0];
      const transcript = result?.transcript || "";
      const confidence = Number.isFinite(result?.confidence) ? result.confidence : undefined;
      setState("processing", "Processing transcript");
      void processTranscript(transcript, { confidence, source: "voice" });
    };
    try {
      recognition.start();
      return { started: true, locale: recognition.lang };
    } catch (error) {
      recognition = null;
      setState("error", "Voice input could not start. Please type the command instead.");
      return { started: false, reason: "start_failed" };
    }
  }

  function sendTypedInput() {
    const input = host()?.querySelector("#nexusConversationTextInput");
    const text = input?.value || "";
    if (input) input.value = "";
    return processTranscript(text, { source: "typed" });
  }

  function mount() {
    const h = host();
    if (!h || mounted) return false;
    mounted = true;
    h.addEventListener("click", event => {
      const action = event.target?.closest?.("[data-nexus-conversation-action]")?.getAttribute("data-nexus-conversation-action");
      if (!action) return;
      if (action === "listen") startListening();
      if (action === "stop") stop();
      if (action === "repeat") repeat();
      if (action === "mute") {
        muted = !muted;
        if (muted && root?.speechSynthesis?.cancel) root.speechSynthesis.cancel();
        renderStatus(muted ? "Spoken replies muted" : "Spoken replies enabled");
      }
      if (action === "send") void sendTypedInput();
      if (action === "followup") void processTranscript(event.target?.getAttribute("data-nexus-conversation-prompt") || "", { source: "followup" });
    });
    h.addEventListener("keydown", event => {
      if (event.key === "Enter" && event.target?.id === "nexusConversationTextInput") {
        event.preventDefault();
        void sendTypedInput();
      }
    });
    renderStatus(label("ready"));
    return true;
  }

  if (root?.document?.readyState === "loading") {
    root.document.addEventListener("DOMContentLoaded", mount, { once: true });
  } else {
    setTimeout(mount, 0);
  }

  return Object.freeze({
    VOICE_STATES,
    FALLBACKS,
    LOCALE_MAP,
    UI_LABELS,
    canonicalLanguage,
    localeForLanguage,
    detectSupport,
    recognitionConstructor,
    currentLanguage,
    chooseVoice,
    speak,
    stop,
    repeat,
    processTranscript,
    startListening,
    renderDialogueResult,
    renderStatus,
    mount,
    getState: () => state,
    isMuted: () => muted,
    getLastResult: () => lastResult
  });
});
