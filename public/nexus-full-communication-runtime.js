(function initNexusFullCommunicationRuntime(root, factory) {
  const runtime = factory(root);
  if (typeof module === "object" && module.exports) {
    module.exports = runtime;
  }
  if (root) {
    root.NexusFullCommunicationRuntime = runtime;
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusFullCommunicationRuntimeFactory(root) {
  "use strict";

  const SUPPORTED_LANGUAGES = Object.freeze({
    en: { label: "English", locale: "en-US", dir: "ltr" },
    es: { label: "Spanish", locale: "es-ES", dir: "ltr" },
    fr: { label: "French", locale: "fr-FR", dir: "ltr" },
    sw: { label: "Kiswahili", locale: "sw-KE", dir: "ltr" },
    ar: { label: "Arabic", locale: "ar", dir: "rtl" },
    pt: { label: "Portuguese", locale: "pt-BR", dir: "ltr" }
  });

  const INPUT_TYPES = Object.freeze([
    "click",
    "typed_chat",
    "voice_transcript",
    "spoken_followup",
    "provider_card",
    "message_action",
    "call_action",
    "suggestion",
    "receipt_action",
    "saved_record_action",
    "system"
  ]);

  const OUTPUT_TYPES = Object.freeze([
    "screen_response",
    "spoken_response",
    "workspace_route",
    "prepared_message",
    "prepared_call",
    "confirmation_request",
    "receipt",
    "blocked_provider_notice",
    "fallback_notice"
  ]);

  const RESULT_STATUSES = Object.freeze([
    "answered_local",
    "routed",
    "prepared_local",
    "queued_for_review",
    "requires_confirmation",
    "requires_provider",
    "blocked_missing_credentials",
    "blocked_unsupported_browser",
    "blocked_safety_review",
    "failed",
    "completed_verified"
  ]);

  const CHANNELS = Object.freeze(["email", "sms", "whatsapp", "notification", "provider_message", "telegram"]);

  const COMMUNICATION_PROVIDER_LANES = Object.freeze({
    "browser-voice-input": {
      capability: "Browser voice input",
      env: [],
      supportedActions: ["press_to_talk", "transcript_display"],
      unavailableActions: ["background_listening"]
    },
    "browser-voice-output": {
      capability: "Browser voice output",
      env: [],
      supportedActions: ["speak_response", "repeat", "stop_speaking"],
      unavailableActions: ["server_tts_without_provider"]
    },
    "live-knowledge": {
      capability: "Live knowledge/search",
      env: ["TAVILY_API_KEY", "BRAVE_SEARCH_API_KEY", "EXA_API_KEY", "NEXUS_LIVE_KNOWLEDGE_API_KEY"],
      supportedActions: ["source_backed_answer_if_configured"],
      unavailableActions: ["fake_citations"]
    },
    email: {
      capability: "Email delivery",
      env: ["SMTP_HOST", "SMTP_USER", "SMTP_PASS", "SENDGRID_API_KEY", "GMAIL_CLIENT_ID", "MICROSOFT_GRAPH_CLIENT_ID"],
      supportedActions: ["prepare_email", "review_draft", "confirm_before_send"],
      unavailableActions: ["silent_email_send"]
    },
    sms: {
      capability: "SMS delivery",
      env: ["TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_PHONE_NUMBER", "NEXUS_SMS_PROVIDER", "NEXUS_COMMUNICATIONS_API_KEY"],
      supportedActions: ["prepare_sms", "review_draft", "confirm_before_send"],
      unavailableActions: ["silent_sms_send"]
    },
    whatsapp: {
      capability: "WhatsApp delivery",
      env: ["TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_PHONE_NUMBER", "WHATSAPP_BUSINESS_TOKEN", "NEXUS_WHATSAPP_PROVIDER"],
      supportedActions: ["prepare_whatsapp", "review_draft", "confirm_before_send"],
      unavailableActions: ["silent_whatsapp_send"]
    },
    notification: {
      capability: "Notification provider",
      env: ["NEXUS_NOTIFICATION_PROVIDER", "NEXUS_NOTIFICATION_API_KEY"],
      supportedActions: ["prepare_notification", "review_notification"],
      unavailableActions: ["silent_push_notification"]
    },
    "telephony-outbound": {
      capability: "Telephony outbound calling",
      env: ["TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_PHONE_NUMBER", "NEXUS_TELEPHONY_PROVIDER", "NEXUS_TELEPHONY_API_KEY"],
      supportedActions: ["prepare_call", "generate_call_script", "confirm_before_call"],
      unavailableActions: ["silent_call"]
    },
    "telephony-inbound": {
      capability: "Telephony inbound calling",
      env: ["TWILIO_VOICE_WEBHOOK_URL", "NEXUS_TELEPHONY_WEBHOOK_URL"],
      supportedActions: ["show_inbound_readiness"],
      unavailableActions: ["claim_inbound_active_without_webhook"]
    },
    "provider-clinic-message": {
      capability: "Provider/clinic messaging",
      env: ["NEXUS_PROVIDER_MESSAGE_API_KEY", "NEXUS_CLINIC_PROVIDER_ENDPOINT"],
      supportedActions: ["prepare_provider_message", "consent_review"],
      unavailableActions: ["provider_contact_without_consent"]
    },
    "pharmacy-message": {
      capability: "Pharmacy messaging",
      env: ["NEXUS_PHARMACY_PROVIDER_API_KEY", "NEXUS_PHARMACY_PROVIDER_ENDPOINT"],
      supportedActions: ["prepare_pharmacy_message", "consent_review"],
      unavailableActions: ["refill_or_prescription_execution"]
    },
    "mobile-clinic-message": {
      capability: "Mobile clinic communication",
      env: ["NEXUS_MOBILE_CLINIC_PROVIDER_API_KEY", "NEXUS_MOBILE_CLINIC_ENDPOINT"],
      supportedActions: ["prepare_mobile_clinic_message"],
      unavailableActions: ["dispatch_mobile_clinic"]
    },
    "marketplace-message": {
      capability: "Marketplace buyer/seller communication",
      env: ["NEXUS_MARKETPLACE_PROVIDER_API_KEY", "NEXUS_MARKETPLACE_ENDPOINT"],
      supportedActions: ["prepare_buyer_seller_message"],
      unavailableActions: ["order_purchase_payment"]
    },
    "logistics-message": {
      capability: "Logistics communication",
      env: ["NEXUS_LOGISTICS_PROVIDER_API_KEY", "NEXUS_LOGISTICS_ENDPOINT"],
      supportedActions: ["prepare_logistics_message"],
      unavailableActions: ["dispatch_or_live_tracking_claim"]
    },
    "workforce-message": {
      capability: "Employer/workforce communication",
      env: ["NEXUS_WORKFORCE_PROVIDER_API_KEY", "NEXUS_WORKFORCE_ENDPOINT"],
      supportedActions: ["prepare_employer_message"],
      unavailableActions: ["submit_application_without_review"]
    },
    "admin-review-queue": {
      capability: "Admin/review queue communication",
      env: [],
      supportedActions: ["queue_for_review", "local_receipt"],
      unavailableActions: ["external_send_without_provider"]
    }
  });

  const LOCALIZED = Object.freeze({
    en: {
      canHelp: "I can listen, answer, speak, route, prepare messages and calls, show provider readiness, and create local receipts. Real external communication requires provider credentials and your confirmation.",
      welcome: "You're welcome.",
      blockedProvider: "Real execution requires connected provider credentials.",
      localPrepared: "Nexus prepared this locally. No external message was sent.",
      noCall: "No call was placed.",
      noMessage: "No message was sent.",
      noLiveKnowledge: "I can provide general local-safe guidance, but live internet/source-backed knowledge is not connected right now.",
      notDiagnosis: "This is general guidance, not a diagnosis.",
      emergency: "Please contact local emergency services directly if this may be an emergency."
    },
    es: {
      canHelp: "Puedo escuchar, responder, hablar, abrir areas, preparar mensajes y llamadas, mostrar proveedores y crear recibos locales. La comunicacion externa real requiere credenciales y confirmacion.",
      welcome: "Con gusto.",
      blockedProvider: "La ejecucion real requiere credenciales de proveedor conectadas.",
      localPrepared: "Nexus preparo esto localmente. No se envio ningun mensaje externo.",
      noCall: "No se realizo ninguna llamada.",
      noMessage: "No se envio ningun mensaje.",
      noLiveKnowledge: "Puedo dar orientacion general local, pero el conocimiento en vivo no esta conectado ahora.",
      notDiagnosis: "Esta es orientacion general, no un diagnostico.",
      emergency: "Contacte servicios de emergencia locales directamente si esto puede ser una emergencia."
    },
    fr: {
      canHelp: "Je peux ecouter, repondre, parler, router, preparer des messages et appels, montrer l'etat des fournisseurs et creer des recus locaux. La communication externe reelle exige des identifiants et votre confirmation.",
      welcome: "Avec plaisir.",
      blockedProvider: "L'execution reelle exige des identifiants de fournisseur connectes.",
      localPrepared: "Nexus a prepare ceci localement. Aucun message externe n'a ete envoye.",
      noCall: "Aucun appel n'a ete passe.",
      noMessage: "Aucun message n'a ete envoye.",
      noLiveKnowledge: "Je peux fournir des conseils generaux locaux, mais la connaissance en direct n'est pas connectee.",
      notDiagnosis: "Ceci est une orientation generale, pas un diagnostic.",
      emergency: "Contactez directement les services d'urgence locaux si cela peut etre une urgence."
    },
    sw: {
      canHelp: "Ninaweza kusikiliza, kujibu, kusema, kuelekeza, kuandaa ujumbe na simu, kuonyesha utayari wa watoa huduma, na kuunda risiti za ndani. Mawasiliano ya nje yanahitaji vitambulisho na uthibitisho wako.",
      welcome: "Karibu.",
      blockedProvider: "Utekelezaji halisi unahitaji vitambulisho vya mtoa huduma vilivyounganishwa.",
      localPrepared: "Nexus imeandaa hii ndani. Hakuna ujumbe wa nje uliotumwa.",
      noCall: "Hakuna simu iliyopigwa.",
      noMessage: "Hakuna ujumbe uliotumwa.",
      noLiveKnowledge: "Ninaweza kutoa mwongozo wa jumla wa ndani, lakini maarifa ya moja kwa moja hayajaunganishwa.",
      notDiagnosis: "Huu ni mwongozo wa jumla, si utambuzi wa kitabibu.",
      emergency: "Wasiliana moja kwa moja na huduma za dharura za eneo lako ikiwa hili linaweza kuwa dharura."
    },
    ar: {
      canHelp: "يمكنني الاستماع والرد والتحدث والتوجيه وتحضير الرسائل والمكالمات وعرض جاهزية المزودين وإنشاء إيصالات محلية. الاتصال الخارجي الحقيقي يتطلب بيانات اعتماد وتأكيدك.",
      welcome: "على الرحب والسعة.",
      blockedProvider: "التنفيذ الحقيقي يتطلب بيانات اعتماد مزود متصلة.",
      localPrepared: "أعد Nexus هذا محليا. لم يتم إرسال أي رسالة خارجية.",
      noCall: "لم يتم إجراء أي مكالمة.",
      noMessage: "لم يتم إرسال أي رسالة.",
      noLiveKnowledge: "يمكنني تقديم إرشاد عام محلي، لكن المعرفة المباشرة غير متصلة الآن.",
      notDiagnosis: "هذا إرشاد عام وليس تشخيصا.",
      emergency: "اتصل بخدمات الطوارئ المحلية مباشرة إذا كان هذا قد يكون طارئا."
    },
    pt: {
      canHelp: "Posso ouvir, responder, falar, encaminhar, preparar mensagens e chamadas, mostrar prontidao de provedores e criar recibos locais. Comunicacao externa real exige credenciais e sua confirmacao.",
      welcome: "De nada.",
      blockedProvider: "A execucao real requer credenciais de provedor conectadas.",
      localPrepared: "Nexus preparou isto localmente. Nenhuma mensagem externa foi enviada.",
      noCall: "Nenhuma chamada foi feita.",
      noMessage: "Nenhuma mensagem foi enviada.",
      noLiveKnowledge: "Posso dar orientacao geral local, mas conhecimento ao vivo nao esta conectado agora.",
      notDiagnosis: "Isto e orientacao geral, nao diagnostico.",
      emergency: "Contate diretamente os servicos de emergencia locais se isto puder ser uma emergencia."
    }
  });

  let lastResult = null;
  let receipts = [];
  let muted = false;

  function nowIso() {
    return new Date().toISOString();
  }

  function makeId(prefix) {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  }

  function clean(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function lower(value) {
    return clean(value).toLowerCase();
  }

  function canonicalLanguage(language = "en") {
    const raw = String(language || "en").toLowerCase();
    if (raw.startsWith("es")) return "es";
    if (raw.startsWith("fr")) return "fr";
    if (raw.startsWith("sw")) return "sw";
    if (raw.startsWith("ar")) return "ar";
    if (raw.startsWith("pt")) return "pt";
    return "en";
  }

  function localized(language, key) {
    const code = canonicalLanguage(language);
    return LOCALIZED[code]?.[key] || LOCALIZED.en[key] || "";
  }

  function envPresent(env, name) {
    const value = clean(env && env[name]);
    return Boolean(value && !/replace-with|your-|example|changeme|placeholder/i.test(value));
  }

  function anyEnvPresent(env, names = []) {
    return names.some(name => envPresent(env, name));
  }

  function browserSupport(env = root) {
    return {
      speechRecognition: Boolean(env?.SpeechRecognition || env?.webkitSpeechRecognition),
      speechSynthesis: Boolean(env?.speechSynthesis && env?.SpeechSynthesisUtterance),
      indefiniteBackgroundListening: false
    };
  }

  function providerLaneStatus(env = {}, laneId, support = browserSupport(root)) {
    const lane = COMMUNICATION_PROVIDER_LANES[laneId];
    if (!lane) return null;
    const isBrowserInput = laneId === "browser-voice-input";
    const isBrowserOutput = laneId === "browser-voice-output";
    const browserReady = isBrowserInput ? support.speechRecognition : isBrowserOutput ? support.speechSynthesis : null;
    const configured = lane.env.length === 0 ? true : anyEnvPresent(env, lane.env);
    const missingEnvNames = lane.env.length && !configured ? lane.env.slice() : [];
    const statusLabel = isBrowserInput || isBrowserOutput
      ? (browserReady ? "browser_supported" : "browser_unsupported")
      : configured
        ? "configured"
        : lane.env.length
          ? "missing_credentials"
          : "available_local";
    return {
      providerId: laneId,
      capability: lane.capability,
      configured,
      enabled: true,
      ready: statusLabel === "configured" || statusLabel === "available_local" || statusLabel === "browser_supported",
      testModeAvailable: true,
      missingEnvNames,
      statusLabel,
      blockedReason: missingEnvNames.length ? "Provider credentials are missing. Only env names are reported." : "",
      supportedActions: lane.supportedActions.slice(),
      unavailableActions: lane.unavailableActions.slice(),
      lastCheckAt: nowIso()
    };
  }

  function communicationProviderReadiness(env = {}, support = browserSupport(root)) {
    const lanes = Object.keys(COMMUNICATION_PROVIDER_LANES).map(id => providerLaneStatus(env, id, support));
    const readyCount = lanes.filter(lane => lane.ready).length;
    return {
      ok: true,
      runtime: "nexus-full-communication-runtime",
      status: readyCount === lanes.length ? "ready" : "local_safe_with_provider_gates",
      lanes,
      readyCount,
      total: lanes.length,
      noSecretValues: true,
      noExternalExecutionWithoutConfirmation: true,
      lastCheckAt: nowIso()
    };
  }

  function detectChannel(text = "") {
    const value = lower(text);
    if (/\b(whatsapp|wa)\b/.test(value)) return "whatsapp";
    if (/\b(sms|text message|text the)\b/.test(value)) return "sms";
    if (/\b(email|mail)\b/.test(value)) return "email";
    if (/\b(telegram)\b/.test(value)) return "telegram";
    if (/\b(notification|notify)\b/.test(value)) return "notification";
    if (/\b(provider message|clinic message|pharmacy message|message the clinic|message pharmacy)\b/.test(value)) return "provider_message";
    return "notification";
  }

  function recipientTypeFor(text = "") {
    const value = lower(text);
    if (/\b(pharmacy|medicine|refill)\b/.test(value)) return "pharmacy";
    if (/\b(clinic|doctor|nurse|provider|telehealth|hospital)\b/.test(value)) return "clinic";
    if (/\b(mobile clinic|clinic van)\b/.test(value)) return "mobile_clinic";
    if (/\b(seller|vendor)\b/.test(value)) return "seller";
    if (/\b(buyer|customer)\b/.test(value)) return "buyer";
    if (/\b(logistics|driver|shipment|delivery)\b/.test(value)) return "logistics_provider";
    if (/\b(employer|job|workforce|recruiter)\b/.test(value)) return "employer";
    return "general_contact";
  }

  function detectIntent(text = "") {
    const value = lower(text);
    if (/\b(stop|cancel|nevermind|never mind|parar|simamisha)\b/.test(value)) return "cancellation_command";
    if (/\b(repeat|say that again|rudia|repete)\b/.test(value)) return "repeat_command";
    if (/\b(thank you|thanks|gracias|merci|asante|obrigad)\b/.test(value)) return "polite_social";
    if (/\b(what can nexus do|what can i do here|what is nexus|what is connected|what communications are connected|why is this blocked|provider readiness|communication status|communications status)\b/.test(value)) return "provider_readiness_question";
    if (/\b(emergency|911|999|112|dispatch ambulance|call emergency)\b/.test(value)) return "safety_sensitive_question";
    if (/\b(prepare|draft|send|message|email|sms|whatsapp|telegram|notify|notification)\b/.test(value)) return "message_preparation_request";
    if (/\b(call|phone|dial|receive calls|inbound call)\b/.test(value)) return "call_preparation_request";
    if (/\?$|^(what|how|why|when|where|who|can|should|do|does|is|are|tell me|explain|describe)\b/.test(value)) return "open_ended_question";
    return "direct_command_or_dialogue";
  }

  function sourceModeFor(text = "") {
    const value = lower(text);
    if (/\b(diabetes|hypertension|blood pressure|obesity|chronic|rpm|rtm|chw|health|clinic|pharmacy|medicine|telehealth|heat)\b/.test(value)) return "health";
    if (/\b(crop|farm|irrigation|pest|disease|soil|yellow leaves|tomato|blight)\b/.test(value)) return "agriculture";
    if (/\b(marketplace|agritrade|buyer|seller|transaction|payment|vendor)\b/.test(value)) return "marketplace";
    if (/\b(route|logistics|shipment|field visit|delivery)\b/.test(value)) return "logistics";
    if (/\b(training|literacy|job|workforce|resume|employer|course)\b/.test(value)) return "workforce";
    if (/\b(drone|field survey|mission)\b/.test(value)) return "drone";
    return "communications";
  }

  function isSensitive(sourceMode, channel) {
    return ["health", "marketplace", "logistics", "workforce", "drone"].includes(sourceMode)
      || ["sms", "whatsapp", "email", "provider_message", "telegram"].includes(channel);
  }

  function buildCommunicationRequest(input = {}, options = {}) {
    const rawInput = typeof input === "string" ? input : input.rawInput || input.command || input.messageBody || "";
    const normalizedInput = clean(rawInput);
    const language = canonicalLanguage(input.language || options.language || "en");
    const intentType = input.intentType || detectIntent(normalizedInput);
    const communicationChannel = input.communicationChannel || detectChannel(normalizedInput);
    const sourceMode = input.sourceMode || sourceModeFor(normalizedInput);
    const recipientType = input.recipientType || recipientTypeFor(normalizedInput);
    const providerRequired = ["message_preparation_request", "call_preparation_request"].includes(intentType);
    const requiresConfirmation = Boolean(input.requiresConfirmation ?? isSensitive(sourceMode, communicationChannel));
    return {
      communicationId: input.communicationId || makeId("comm"),
      rawInput,
      normalizedInput,
      inputType: input.inputType || options.inputType || "typed_chat",
      language,
      sourceMode,
      relatedWorkspaceId: input.relatedWorkspaceId || options.relatedWorkspaceId || "",
      relatedRecordId: input.relatedRecordId || options.relatedRecordId || "",
      intentType,
      communicationChannel,
      recipientType,
      recipientName: clean(input.recipientName || ""),
      recipientContact: clean(input.recipientContact || ""),
      messageBody: clean(input.messageBody || ""),
      callScript: clean(input.callScript || ""),
      providerRequired,
      providerStatus: input.providerStatus || "unknown",
      requiresConfirmation,
      consentStatus: input.consentStatus || (requiresConfirmation ? "required" : "not_required"),
      resultStatus: input.resultStatus || "answered_local",
      receiptId: input.receiptId || "",
      timestamp: input.timestamp || nowIso()
    };
  }

  function messageDraftFor(request) {
    const purpose = request.normalizedInput || "communication follow-up";
    const recipient = request.recipientName || request.recipientType.replace(/_/g, " ");
    if (request.sourceMode === "health") {
      return `Hello ${recipient}. I am preparing a Nexus health access note for review. The purpose is: ${purpose}. Please review and advise through the appropriate care channel.`;
    }
    if (request.sourceMode === "agriculture") {
      return `Hello ${recipient}. I am preparing an agriculture support note. The farmer request is: ${purpose}. Please review crop context before any recommendation.`;
    }
    if (request.sourceMode === "marketplace") {
      return `Hello ${recipient}. I am preparing a marketplace message for review. Request: ${purpose}. No order, payment, or shipment is confirmed in this draft.`;
    }
    if (request.sourceMode === "workforce") {
      return `Hello ${recipient}. I am preparing a workforce support message. Request: ${purpose}. Please review fit, next steps, and required documents.`;
    }
    return `Hello ${recipient}. Nexus prepared this message for review: ${purpose}. Please confirm recipient, purpose, and included information before sending.`;
  }

  function createReceipt(request, status, overrides = {}) {
    return {
      receiptId: overrides.receiptId || makeId("comm-receipt"),
      communicationId: request.communicationId,
      action: overrides.action || request.intentType,
      channel: request.communicationChannel,
      result: overrides.result || status,
      status,
      timestamp: nowIso(),
      language: request.language,
      recipientType: request.recipientType,
      recipientName: request.recipientName || request.recipientType.replace(/_/g, " "),
      providerUsed: overrides.providerUsed || "",
      blockedReason: overrides.blockedReason || "",
      nextStep: overrides.nextStep || "Review the prepared communication, confirm details, then connect provider credentials before external execution.",
      verificationStatus: overrides.verificationStatus || "local_receipt_created"
    };
  }

  function prepareMessage(input = {}, options = {}) {
    const request = buildCommunicationRequest(input, { ...options, inputType: options.inputType || "message_action" });
    request.intentType = "message_preparation_request";
    request.providerRequired = true;
    request.messageBody = request.messageBody || messageDraftFor(request);
    request.resultStatus = "prepared_local";
    const receipt = createReceipt(request, "prepared_local", {
      result: `${request.communicationChannel} prepared locally. No message was sent.`,
      blockedReason: "provider_credentials_required"
    });
    request.receiptId = receipt.receiptId;
    receipts.unshift(receipt);
    return {
      ok: true,
      outputType: "prepared_message",
      request,
      message: `${localized(request.language, "localPrepared")} ${localized(request.language, "noMessage")}`,
      confirmation: {
        required: request.requiresConfirmation,
        summary: "Review recipient, channel, purpose, data included, provider readiness, and risk note before any future send.",
        cancelAvailable: true
      },
      receipt,
      resultStatus: "prepared_local",
      noExecutionAuthorized: true,
      noExternalMessageSent: true,
      noSecretValues: true
    };
  }

  function answerLocally(text = "", options = {}) {
    const request = buildCommunicationRequest(text, options);
    const language = request.language;
    let answer = localized(language, "canHelp");
    if (request.intentType === "polite_social") answer = localized(language, "welcome");
    if (request.intentType === "cancellation_command") answer = "Stopped. No external action was taken.";
    if (request.intentType === "repeat_command") answer = options.lastResponse || "I can repeat the last Nexus response when one is available.";
    if (request.intentType === "safety_sensitive_question") answer = `${localized(language, "emergency")} Nexus cannot call or dispatch emergency services.`;
    if (request.sourceMode === "health" && request.intentType === "open_ended_question") {
      answer = `Nexus can help organize symptoms, chronic care context, RPM/RTM readings, questions, and provider-ready summaries. ${localized(language, "notDiagnosis")}`;
    }
    if (request.sourceMode === "agriculture" && request.intentType === "open_ended_question") {
      answer = "Nexus can help collect crop type, location text, timeline, photos if supported, irrigation, soil, pest, disease, and market context. Live source-backed advice requires a configured knowledge provider.";
    }
    if (request.sourceMode === "marketplace") {
      answer = "Nexus can prepare buyer/seller messages and marketplace review packets. It will not create orders, send messages, or process payments without configured providers, review, and confirmation.";
    }
    if (request.sourceMode === "logistics") {
      answer = "Nexus can prepare logistics messages and route context. It does not claim live GPS or dispatch without a configured provider and confirmation.";
    }
    if (request.sourceMode === "workforce") {
      answer = "Nexus can prepare training, job, resume, and employer communication drafts. It will not submit an application or contact an employer without review and confirmation.";
    }
    const receipt = createReceipt(request, "answered_local", {
      result: "Screen and spoken response prepared locally.",
      blockedReason: request.providerRequired ? "provider_credentials_required" : ""
    });
    request.receiptId = receipt.receiptId;
    receipts.unshift(receipt);
    return {
      ok: true,
      outputType: "screen_response",
      request,
      answer,
      spokenSummary: answer,
      recommendedNextStep: "Ask a follow-up, choose a workspace, or prepare a message/call for review.",
      availableActions: ["Prepare message", "Prepare call", "Check provider readiness", "Open related workspace"],
      blockedActions: ["No SMS, email, WhatsApp, Telegram, call, provider contact, payment, booking, or dispatch was executed."],
      sources: [],
      confidence: "local_safe",
      receipt,
      resultStatus: "answered_local",
      noExecutionAuthorized: true,
      noSecretValues: true
    };
  }

  function shouldHandleBeforeLegacy(text = "") {
    const intent = detectIntent(text);
    return [
      "provider_readiness_question",
      "message_preparation_request",
      "call_preparation_request",
      "safety_sensitive_question"
    ].includes(intent);
  }

  async function process(input = {}, options = {}) {
    const text = typeof input === "string" ? input : input.rawInput || input.command || "";
    const intent = detectIntent(text);
    if (intent === "message_preparation_request") {
      lastResult = prepareMessage({ ...(typeof input === "object" ? input : {}), rawInput: text }, options);
      render(lastResult);
      return lastResult;
    }
    if (intent === "call_preparation_request" && root?.NexusTelephonyCallRuntime?.prepareCall) {
      const providerStatus = options.providerStatus || root.NexusTelephonyCallRuntime.detectTelephonyProviderStatus?.({});
      const callResult = root.NexusTelephonyCallRuntime.prepareCall(text, {
        providerStatus,
        language: options.language || currentLanguage(),
        sourceMode: options.sourceMode || "full_communication_runtime"
      });
      lastResult = {
        ok: true,
        outputType: "prepared_call",
        request: buildCommunicationRequest(text, { ...options, inputType: "call_action" }),
        answer: callResult.message || `${localized(options.language, "noCall")} Call script prepared locally.`,
        call: callResult.call,
        receipt: callResult.receipt,
        resultStatus: callResult.resultStatus,
        noExecutionAuthorized: true,
        noSecretValues: true
      };
      render(lastResult);
      return lastResult;
    }
    const dialogue = root?.NexusOpenDialogueRuntime;
    if (dialogue?.respondAsync && ["open_ended_question", "provider_readiness_question", "polite_social", "cancellation_command", "repeat_command"].includes(intent)) {
      const result = await dialogue.respondAsync(text, {
        language: options.language || currentLanguage(),
        navigationRuntime: root?.NexusUniversalNavigationRuntime,
        inputType: options.inputType || "typed_chat",
        skipLiveKnowledge: false
      });
      lastResult = {
        ...result,
        ok: true,
        outputType: "screen_response",
        request: buildCommunicationRequest(text, options),
        receipt: createReceipt(buildCommunicationRequest(text, options), "answered_local", { result: "Open dialogue answered locally or with configured sources." }),
        noExecutionAuthorized: true,
        noSecretValues: true
      };
      receipts.unshift(lastResult.receipt);
      render(lastResult);
      return lastResult;
    }
    lastResult = answerLocally(text, options);
    render(lastResult);
    return lastResult;
  }

  function currentLanguage() {
    const doc = root?.document;
    return canonicalLanguage(
      doc?.querySelector?.("#platformLanguageSelect")?.value
      || doc?.querySelector?.("#nexusVoiceDemoLanguageSelect")?.value
      || doc?.documentElement?.lang
      || "en"
    );
  }

  function host() {
    return root?.document?.querySelector?.("#nexusFullCommunicationRuntime") || null;
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[char]));
  }

  function renderProviderStatus(status = communicationProviderReadiness({})) {
    const h = host();
    if (!h) return;
    const lanes = Array.isArray(status.lanes) ? status.lanes : [];
    const list = h.querySelector("[data-nexus-full-communication-providers]");
    if (list) {
      list.innerHTML = lanes.slice(0, 8).map(lane => `
        <span data-nexus-full-communication-provider="${escapeHtml(lane.providerId)}">
          <b>${escapeHtml(lane.capability)}</b>
          <small>${escapeHtml(lane.statusLabel)}${lane.missingEnvNames?.length ? `: ${escapeHtml(lane.missingEnvNames.join(", "))}` : ""}</small>
        </span>
      `).join("");
    }
    const statusNode = h.querySelector("[data-nexus-full-communication-status]");
    if (statusNode) statusNode.textContent = `${status.status || "local_safe_with_provider_gates"} (${status.readyCount || 0}/${status.total || lanes.length} ready)`;
  }

  function render(result = lastResult) {
    const h = host();
    if (!h || !result) return result;
    h.lang = result.request?.language || currentLanguage();
    h.dir = h.lang === "ar" ? "rtl" : "ltr";
    const response = h.querySelector("[data-nexus-full-communication-response]");
    const transcript = h.querySelector("[data-nexus-full-communication-transcript]");
    const draft = h.querySelector("[data-nexus-full-communication-draft]");
    const confirmation = h.querySelector("[data-nexus-full-communication-confirmation]");
    const receiptsNode = h.querySelector("[data-nexus-full-communication-receipts]");
    if (response) response.textContent = result.answer || result.message || "Nexus communication runtime is ready.";
    if (transcript) transcript.textContent = result.request?.normalizedInput || result.request?.rawInput || "No transcript yet.";
    if (draft) draft.textContent = result.request?.messageBody || result.call?.script || "Message or call script appears here after preparation.";
    if (confirmation) {
      confirmation.textContent = result.confirmation?.required || result.request?.requiresConfirmation
        ? "Confirmation required before any external communication. Cancel path is available."
        : "No external communication was requested.";
    }
    if (receiptsNode) {
      receiptsNode.innerHTML = receipts.slice(0, 4).map(receipt => `
        <article>
          <strong>${escapeHtml(receipt.channel || receipt.action)}</strong>
          <span>${escapeHtml(receipt.result || receipt.status)}</span>
          <small>${escapeHtml(receipt.receiptId)} | ${escapeHtml(receipt.verificationStatus)}</small>
        </article>
      `).join("");
    }
    return result;
  }

  async function refreshStatus() {
    try {
      const response = await fetch("/api/communication/status");
      const status = await response.json();
      renderProviderStatus(status);
      return status;
    } catch {
      const status = communicationProviderReadiness({});
      renderProviderStatus(status);
      return status;
    }
  }

  async function handleClick(event) {
    const button = event?.target?.closest?.("[data-nexus-full-communication-action]");
    if (!button) return false;
    const action = button.getAttribute("data-nexus-full-communication-action");
    if (action === "status") {
      await refreshStatus();
      return true;
    }
    if (action === "mute") {
      muted = !muted;
      button.textContent = muted ? "Unmute" : "Mute";
      return true;
    }
    if (action === "stop") {
      root?.speechSynthesis?.cancel?.();
      const h = host();
      const status = h?.querySelector?.("[data-nexus-full-communication-status]");
      if (status) status.textContent = "Speech stopped. No external action was taken.";
      return true;
    }
    if (action === "repeat") {
      const text = lastResult?.spokenSummary || lastResult?.answer || lastResult?.message || "";
      if (text && root?.speechSynthesis && root?.SpeechSynthesisUtterance && !muted) {
        const utterance = new root.SpeechSynthesisUtterance(text);
        utterance.lang = SUPPORTED_LANGUAGES[currentLanguage()]?.locale || "en-US";
        utterance.rate = 0.92;
        utterance.pitch = 0.9;
        utterance.volume = 1;
        root.speechSynthesis.cancel();
        root.speechSynthesis.speak(utterance);
      }
      return true;
    }
    return false;
  }

  function mount() {
    const h = host();
    if (!h || h.dataset.nexusFullCommunicationMounted === "true") return h;
    h.dataset.nexusFullCommunicationMounted = "true";
    h.addEventListener("click", event => {
      void handleClick(event);
    });
    renderProviderStatus(communicationProviderReadiness({}));
    render(answerLocally("What can Nexus do?", { language: currentLanguage(), inputType: "system" }));
    return h;
  }

  return Object.freeze({
    INPUT_TYPES,
    OUTPUT_TYPES,
    RESULT_STATUSES,
    CHANNELS,
    SUPPORTED_LANGUAGES,
    COMMUNICATION_PROVIDER_LANES,
    browserSupport,
    communicationProviderReadiness,
    providerLaneStatus,
    buildCommunicationRequest,
    detectIntent,
    detectChannel,
    prepareMessage,
    answerLocally,
    shouldHandleBeforeLegacy,
    process,
    render,
    renderProviderStatus,
    refreshStatus,
    mount,
    getLastResult: () => lastResult,
    getReceipts: () => receipts.slice()
  });
});
