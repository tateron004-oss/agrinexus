(function () {
  "use strict";

  const STATUS_READY = "Voice ready";
  const STATUS_LISTENING = "Listening...";
  const STATUS_PROCESSING = "Processing...";
  const STATUS_SPEAKING = "Speaking...";
  const STATUS_UNSUPPORTED = "Voice not supported in this browser";
  const COMMAND_SOURCE = "phase-16a-push-to-talk";

  let activeRecognition = null;
  let isSpeaking = false;

  function $(selector) {
    return document.querySelector(selector);
  }

  function button() {
    return $("#nexusVoiceDemoTalkBtn");
  }

  function introButton() {
    return $("#nexusVoiceDemoIntroBtn");
  }

  function statusNode() {
    return $("#nexusVoiceDemoStatus");
  }

  function transcriptNode() {
    return $("#nexusVoiceDemoTranscript");
  }

  function quickPromptButtons() {
    return [...document.querySelectorAll("[data-nexus-voice-demo-prompt]")];
  }

  function setStatus(message) {
    const target = statusNode();
    if (target) target.textContent = message;
  }

  function setTranscript(message) {
    const target = transcriptNode();
    if (target) target.textContent = message;
  }

  function recognitionCtor() {
    return window.SpeechRecognition || window.webkitSpeechRecognition || null;
  }

  function speechSynthesisSupported() {
    return Boolean(window.speechSynthesis && window.SpeechSynthesisUtterance);
  }

  function choosePolishedEnglishVoice() {
    if (!speechSynthesisSupported() || typeof window.speechSynthesis.getVoices !== "function") return null;
    const voices = window.speechSynthesis.getVoices() || [];
    const englishVoices = voices.filter(voice => /^en\b/i.test(String(voice.lang || "")));
    const preferred = englishVoices.find(voice => /\b(natural|neural|enhanced|premium|system)\b/i.test(String(voice.name || "")))
      || englishVoices.find(voice => /\b(microsoft|google|apple)\b/i.test(String(voice.name || "")))
      || englishVoices.find(voice => voice.default)
      || englishVoices[0];
    return preferred || null;
  }

  function normalizeCommand(command) {
    return String(command || "")
      .replace(/[“”]/g, "\"")
      .replace(/[’]/g, "'")
      .replace(/\s+/g, " ")
      .trim();
  }

  function isHighRiskPrompt(command) {
    const text = normalizeCommand(command).toLowerCase();
    if (isEmergencyPrompt(text)) return true;
    if (isHealthAccessPrompt(text)) return false;
    return /\b(call|phone|dial|text|message|whatsapp|telegram|sms|email|contact|send|camera|video|microphone|location|locate|gps|buy|sell|purchase|payment|pay|checkout|account|login|identity|verify|appointment|schedule|doctor|provider|telehealth|emergency|dispatch|ambulance|diagnose)\b/.test(text);
  }

  function isEmergencyPrompt(command) {
    const text = normalizeCommand(command).toLowerCase();
    return /\b(emergency|ambulance|cannot breathe|can't breathe|cant breathe|chest pain|not breathing|stroke|heart attack)\b/.test(text);
  }

  function isHealthExecutionPrompt(command) {
    const text = normalizeCommand(command).toLowerCase();
    return /\b(call my doctor|call the doctor|contact (a )?(doctor|provider|clinic|pharmacy)|send my medical|send medical|medical records?|health records?|refill my prescription|refill prescription|submit (a )?refill|request (a )?refill|tell the pharmacy|change medication|schedule (my )?(appointment|visit)|book (an )?appointment|send my location|share my location|telehealth video|video call|provider video|open video|show injury|camera preview|use (my )?camera|open (the )?camera|dispatch (a )?mobile clinic|diagnose|diagnosis)\b/.test(text);
  }

  function isHealthAccessPrompt(command) {
    const text = normalizeCommand(command).toLowerCase();
    if (isEmergencyPrompt(text) || isHealthExecutionPrompt(text)) return false;
    return /\b(telehealth|mobile clinic|pharmacy support|pharmacy access|medication|medicine|refill request|rural health|access care|care access|care navigation|community health|doctor.*transportation|transportation.*(doctor|care|clinic)|prepare.*telehealth|health workflow|health access)\b/.test(text);
  }

  function healthAccessResponse(command) {
    const text = normalizeCommand(command).toLowerCase();
    if (isEmergencyPrompt(text)) {
      return "If this may be an emergency, call local emergency services now. I cannot dispatch emergency help in this demo.";
    }
    if (isHealthExecutionPrompt(text)) {
      return "For safety, I cannot complete that healthcare action automatically. I can help you review what would be needed before anything is shared, scheduled, sent, submitted, or contacted.";
    }
    if (/\b(telehealth|prepare.*telehealth)\b/.test(text)) {
      return "Nexus can help with telehealth access. I can guide you through the information usually needed for a visit and prepare a safe next-step review. I have not scheduled an appointment or contacted a provider.";
    }
    if (/\b(mobile clinic|rural health|community health)\b/.test(text)) {
      return "I can help you review mobile clinic and rural health access options. In this demo, I can prepare next steps, but I will not request your location, contact a clinic, or dispatch services.";
    }
    if (/\b(pharmacy|medication|medicine|refill request)\b/.test(text)) {
      return "I can help you review pharmacy access steps, refill questions, or transportation needs. I have not submitted a refill, and I cannot request, change, or submit medication orders in this demo.";
    }
    if (/\b(transportation|ride|access care|care access|care navigation|doctor)\b/.test(text)) {
      return "I can help you think through care access and transportation options. I have not shared your location, contacted anyone, scheduled an appointment, or scheduled a ride.";
    }
    return "I can help with health access navigation. This demo prepares safe review-only next steps and does not contact providers, share information, schedule care, request location, or complete healthcare actions.";
  }

  function introResponse() {
    return "Good morning. I am Nexus, your voice-operated access assistant. I'm ready to help with telehealth, pharmacy support, mobile clinic access, transportation-to-care, workforce resources, and agriculture services. How can I assist you today?";
  }

  function safeFallbackResponse(command) {
    const text = normalizeCommand(command).toLowerCase();
    if (!text || /\b(good morning|hello|hi|hey)\b/.test(text)) {
      return introResponse();
    }
    if (isEmergencyPrompt(text) || isHealthExecutionPrompt(text) || isHealthAccessPrompt(text)) return healthAccessResponse(text);
    if (isHighRiskPrompt(text)) {
      return "I can prepare that request, but I will not execute calls, messages, location, camera, payments, health, emergency, provider, or account actions from voice.";
    }
    if (/\b(training|course|agriculture training)\b/.test(text)) return "I can help with agriculture training. This is a safe preview path.";
    if (/\b(irrigation|teach|lesson|learn)\b/.test(text)) return "I can teach that in Learning. This is preview only.";
    if (/\b(job|jobs|career|workforce)\b/.test(text)) return "I found the jobs and workforce path. Nexus can preview roles and readiness.";
    if (/\b(agritrade|marketplace|trade|browse)\b/.test(text)) return "AgriTrade can be reviewed as a marketplace module. This voice demo does not buy, sell, pay, or contact a buyer.";
    if (/\b(crop|crops|farm|field|soil|pest)\b/.test(text)) return "I can help with crop and field support. This is guidance only.";
    return "I can help with that. In this demo, Nexus gives a safe preview and waits for visible controls before any important action.";
  }

  function speak(text) {
    const message = normalizeCommand(text);
    if (!message) return;
    if (!speechSynthesisSupported()) {
      setStatus("Spoken response is not supported in this browser");
      return;
    }
    try {
      window.speechSynthesis.cancel();
      const utterance = new window.SpeechSynthesisUtterance(message);
      const polishedVoice = choosePolishedEnglishVoice();
      if (polishedVoice) {
        utterance.voice = polishedVoice;
        utterance.lang = polishedVoice.lang || "en-US";
      } else {
        utterance.lang = "en-US";
      }
      utterance.rate = 0.92;
      utterance.pitch = 0.9;
      utterance.volume = 1;
      utterance.onstart = () => {
        isSpeaking = true;
        setStatus(STATUS_SPEAKING);
      };
      utterance.onend = () => {
        isSpeaking = false;
        setStatus(STATUS_READY);
      };
      utterance.onerror = () => {
        isSpeaking = false;
        setStatus(STATUS_READY);
      };
      window.speechSynthesis.speak(utterance);
    } catch (error) {
      isSpeaking = false;
      setStatus("Spoken response is not supported in this browser");
    }
  }

  async function routeTranscript(command) {
    const transcript = normalizeCommand(command);
    if (!transcript) {
      setStatus(STATUS_READY);
      return;
    }
    setStatus(STATUS_PROCESSING);
    setTranscript(`Heard: ${transcript}`);
    const bridge = window.NexusVoiceDemoShellBridge;
    const highRisk = isHighRiskPrompt(transcript) || Boolean(bridge?.isHighRiskPrompt?.(transcript));
    if (highRisk) {
      const response = safeFallbackResponse(transcript);
      bridge?.showResponse?.(response, { source: COMMAND_SOURCE, blocked: true });
      setTranscript(`Guarded: ${transcript}`);
      speak(response);
      return;
    }
    try {
      const result = await bridge?.submitSafeTranscript?.(transcript, { source: COMMAND_SOURCE });
      const response = normalizeCommand(result?.response) || safeFallbackResponse(transcript);
      setTranscript(`Heard: ${transcript}`);
      speak(response);
    } catch (error) {
      const response = safeFallbackResponse(transcript);
      setTranscript(`Heard: ${transcript}`);
      speak(response);
    }
  }

  function runQuickPrompt(event) {
    const prompt = normalizeCommand(event?.currentTarget?.dataset?.nexusVoiceDemoPrompt);
    if (!prompt) return;
    const bridge = window.NexusVoiceDemoShellBridge;
    const response = safeFallbackResponse(prompt);
    const blocked = isHighRiskPrompt(prompt) || Boolean(bridge?.isHighRiskPrompt?.(prompt));
    setStatus(STATUS_PROCESSING);
    setTranscript(`Demo prompt: ${prompt}`);
    bridge?.showResponse?.(response, { source: COMMAND_SOURCE, blocked, quickPrompt: true });
    speak(response);
  }

  function introduceNexus() {
    const response = introResponse();
    const bridge = window.NexusVoiceDemoShellBridge;
    setStatus(speechSynthesisSupported() ? STATUS_SPEAKING : "Spoken response is not supported in this browser");
    setTranscript(response);
    bridge?.showResponse?.(response, { source: COMMAND_SOURCE, introduction: true, blocked: false });
    if (speechSynthesisSupported()) speak(response);
  }

  function startPushToTalk() {
    if (activeRecognition) {
      try {
        activeRecognition.stop();
      } catch (error) {
        // Recognition stop is best-effort in browser implementations.
      }
      activeRecognition = null;
      setStatus(STATUS_READY);
      return;
    }
    if (isSpeaking && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      isSpeaking = false;
    }
    const Recognition = recognitionCtor();
    if (!Recognition) {
      setStatus(STATUS_UNSUPPORTED);
      setTranscript("Browser speech recognition support varies. You can type the same Nexus command, and the safety behavior remains the same.");
      speak("Browser speech recognition support varies. You can type the same Nexus command, and the safety behavior remains the same.");
      return;
    }
    const recognition = new Recognition();
    activeRecognition = recognition;
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.lang = document.documentElement.lang || navigator.language || "en-US";
    recognition.onstart = () => {
      setStatus(STATUS_LISTENING);
      setTranscript("Listening for one Nexus command.");
    };
    recognition.onerror = event => {
      activeRecognition = null;
      const blocked = event?.error === "not-allowed" || event?.error === "service-not-allowed";
      const message = blocked
        ? "Microphone permission was blocked. Browser speech recognition support varies. You can type the same Nexus command, and the safety behavior remains the same."
        : "Voice recognition paused. Browser speech recognition support varies. You can type the same Nexus command, and the safety behavior remains the same.";
      setStatus(blocked ? "Microphone permission blocked" : STATUS_READY);
      setTranscript(message);
      if (!blocked) speak(message);
    };
    recognition.onend = () => {
      activeRecognition = null;
      if (!isSpeaking && statusNode()?.textContent === STATUS_LISTENING) setStatus(STATUS_READY);
    };
    recognition.onresult = event => {
      let transcript = "";
      for (let index = event.resultIndex || 0; index < event.results.length; index += 1) {
        const result = event.results[index];
        if (result.isFinal || !transcript) transcript = normalizeCommand(result?.[0]?.transcript || transcript);
      }
      void routeTranscript(transcript);
    };
    recognition.start();
  }

  function init() {
    const talkButton = button();
    const intro = introButton();
    if (!talkButton) return;
    setStatus(recognitionCtor() ? STATUS_READY : STATUS_UNSUPPORTED);
    talkButton.addEventListener("click", startPushToTalk);
    intro?.addEventListener("click", introduceNexus);
    quickPromptButtons().forEach(promptButton => {
      promptButton.addEventListener("click", runQuickPrompt);
    });
  }

  window.NexusVoiceDemoShell = {
    startPushToTalk,
    introduceNexus,
    routeTranscript,
    runQuickPrompt,
    isHighRiskPrompt,
    speechSynthesisSupported,
    recognitionSupported: () => Boolean(recognitionCtor())
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
}());
