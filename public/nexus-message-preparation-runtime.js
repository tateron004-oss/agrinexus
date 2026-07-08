(function initNexusMessagePreparationRuntime(root, factory) {
  const runtime = factory(root);
  if (typeof module === "object" && module.exports) {
    module.exports = runtime;
  }
  if (root) {
    root.NexusMessagePreparationRuntime = runtime;
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusMessagePreparationRuntimeFactory(root) {
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
    "typed_chat",
    "voice_transcript",
    "click",
    "suggestion",
    "provider_card",
    "saved_record",
    "receipt_action",
    "system"
  ]);

  const CHANNELS = Object.freeze([
    "email",
    "sms",
    "whatsapp",
    "notification",
    "provider_message",
    "clinic_message",
    "pharmacy_message",
    "mobile_clinic_message",
    "marketplace_message",
    "logistics_message",
    "workforce_message",
    "admin_review_message",
    "drone_coordination_message"
  ]);

  const RECIPIENT_TYPES = Object.freeze([
    "user",
    "patient",
    "caregiver",
    "clinic",
    "provider",
    "pharmacy",
    "mobile_clinic",
    "community_health_worker",
    "buyer",
    "seller",
    "logistics_provider",
    "driver",
    "employer",
    "applicant",
    "learner",
    "admin",
    "review_queue",
    "drone_provider",
    "field_operator",
    "custom_recipient"
  ]);

  const RESULT_STATUSES = Object.freeze([
    "prepared_local",
    "draft_ready",
    "queued_for_review",
    "requires_confirmation",
    "requires_provider",
    "blocked_missing_credentials",
    "blocked_safety_review",
    "failed",
    "sent_verified"
  ]);

  const PROVIDER_STATUSES = Object.freeze([
    "local_only",
    "demo_available",
    "test_mode",
    "missing_credentials",
    "configured",
    "ready",
    "disabled",
    "blocked"
  ]);

  const PROVIDER_LANES = Object.freeze({
    email: {
      capability: "Email delivery",
      env: ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "SENDGRID_API_KEY", "GMAIL_CLIENT_ID", "GMAIL_CLIENT_SECRET", "MICROSOFT_GRAPH_CLIENT_ID", "MICROSOFT_GRAPH_CLIENT_SECRET", "NEXUS_EMAIL_PROVIDER", "NEXUS_EMAIL_API_KEY", "NEXUS_EMAIL_FROM_ADDRESS"],
      enabledEnv: ["NEXUS_EMAIL_ENABLED", "NEXUS_MESSAGES_ENABLED"],
      supportedActions: ["prepare_email", "review_draft", "confirm_before_send"],
      unavailableActions: ["silent_email_send", "fake_email_delivery"]
    },
    sms: {
      capability: "SMS delivery",
      env: ["TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_PHONE_NUMBER", "VONAGE_API_KEY", "VONAGE_API_SECRET", "VONAGE_PHONE_NUMBER", "NEXUS_SMS_PROVIDER", "NEXUS_SMS_API_KEY", "NEXUS_SMS_FROM_NUMBER"],
      enabledEnv: ["NEXUS_SMS_ENABLED", "NEXUS_MESSAGES_ENABLED"],
      supportedActions: ["prepare_sms", "review_draft", "confirm_before_send"],
      unavailableActions: ["silent_sms_send", "fake_sms_delivery"]
    },
    whatsapp: {
      capability: "WhatsApp delivery",
      env: ["WHATSAPP_BUSINESS_TOKEN", "WHATSAPP_PHONE_NUMBER_ID", "TWILIO_WHATSAPP_FROM", "VONAGE_WHATSAPP_NUMBER", "NEXUS_WHATSAPP_PROVIDER", "NEXUS_WHATSAPP_API_KEY"],
      enabledEnv: ["NEXUS_WHATSAPP_ENABLED"],
      supportedActions: ["prepare_whatsapp", "review_draft", "confirm_before_send"],
      unavailableActions: ["silent_whatsapp_send", "fake_whatsapp_delivery"]
    },
    notification: {
      capability: "Notification provider",
      env: ["NEXUS_NOTIFICATION_PROVIDER", "NEXUS_NOTIFICATION_API_KEY"],
      enabledEnv: ["NEXUS_NOTIFICATION_ENABLED"],
      supportedActions: ["prepare_notification", "queue_for_review"],
      unavailableActions: ["silent_push_notification"]
    },
    provider_message: {
      capability: "Provider/clinic messaging",
      env: ["NEXUS_PROVIDER_MESSAGE_API_KEY", "NEXUS_CLINIC_PROVIDER_ENDPOINT"],
      enabledEnv: ["NEXUS_PROVIDER_MESSAGES_ENABLED"],
      supportedActions: ["prepare_provider_message", "consent_review"],
      unavailableActions: ["provider_contact_without_consent"]
    },
    clinic_message: {
      capability: "Clinic messaging",
      env: ["NEXUS_CLINIC_PROVIDER_ENDPOINT", "NEXUS_PROVIDER_MESSAGE_API_KEY"],
      enabledEnv: ["NEXUS_CLINIC_MESSAGES_ENABLED", "NEXUS_PROVIDER_MESSAGES_ENABLED"],
      supportedActions: ["prepare_clinic_message", "consent_review"],
      unavailableActions: ["clinic_contact_without_consent"]
    },
    pharmacy_message: {
      capability: "Pharmacy messaging",
      env: ["NEXUS_PHARMACY_PROVIDER_API_KEY", "NEXUS_PHARMACY_PROVIDER_ENDPOINT"],
      enabledEnv: ["NEXUS_PHARMACY_MESSAGES_ENABLED"],
      supportedActions: ["prepare_pharmacy_message", "consent_review"],
      unavailableActions: ["refill_or_prescription_execution"]
    },
    mobile_clinic_message: {
      capability: "Mobile clinic communication",
      env: ["NEXUS_MOBILE_CLINIC_PROVIDER_API_KEY", "NEXUS_MOBILE_CLINIC_ENDPOINT"],
      enabledEnv: ["NEXUS_MOBILE_CLINIC_MESSAGES_ENABLED"],
      supportedActions: ["prepare_mobile_clinic_message"],
      unavailableActions: ["dispatch_mobile_clinic"]
    },
    marketplace_message: {
      capability: "Marketplace buyer/seller communication",
      env: ["NEXUS_MARKETPLACE_PROVIDER_API_KEY", "NEXUS_MARKETPLACE_ENDPOINT"],
      enabledEnv: ["NEXUS_MARKETPLACE_MESSAGES_ENABLED"],
      supportedActions: ["prepare_buyer_seller_message"],
      unavailableActions: ["order_purchase_payment"]
    },
    logistics_message: {
      capability: "Logistics communication",
      env: ["NEXUS_LOGISTICS_PROVIDER_API_KEY", "NEXUS_LOGISTICS_ENDPOINT"],
      enabledEnv: ["NEXUS_LOGISTICS_MESSAGES_ENABLED"],
      supportedActions: ["prepare_logistics_message"],
      unavailableActions: ["dispatch_or_live_tracking_claim"]
    },
    workforce_message: {
      capability: "Employer/workforce communication",
      env: ["NEXUS_WORKFORCE_PROVIDER_API_KEY", "NEXUS_WORKFORCE_ENDPOINT"],
      enabledEnv: ["NEXUS_WORKFORCE_MESSAGES_ENABLED"],
      supportedActions: ["prepare_employer_message"],
      unavailableActions: ["submit_application_without_review"]
    },
    admin_review_message: {
      capability: "Admin/review queue communication",
      env: [],
      enabledEnv: [],
      supportedActions: ["queue_for_review", "local_receipt"],
      unavailableActions: ["external_send_without_provider"]
    },
    drone_coordination_message: {
      capability: "Drone coordination messaging",
      env: ["NEXUS_DRONE_PROVIDER_API_KEY", "NEXUS_DRONE_PROVIDER_ENDPOINT"],
      enabledEnv: ["NEXUS_DRONES_ENABLED"],
      supportedActions: ["prepare_drone_coordination_message"],
      unavailableActions: ["dispatch_drone", "approve_flight"]
    }
  });

  const UI_LABELS = Object.freeze({
    en: {
      prepared: "Prepared locally - not sent.",
      confirmation: "Confirmation is required before any external communication.",
      missingRecipient: "Recipient details are missing. Nexus can keep this as a draft or review item.",
      missingProvider: "Real sending requires communication provider credentials.",
      localizationFallback: "Full message localization is not available for this language yet. Nexus is using available translated labels and default guidance."
    },
    es: {
      prepared: "Preparado localmente - no enviado.",
      confirmation: "Se requiere confirmacion antes de cualquier comunicacion externa.",
      missingRecipient: "Faltan detalles del destinatario. Nexus puede mantener esto como borrador o elemento de revision.",
      missingProvider: "El envio real requiere credenciales del proveedor de comunicacion.",
      localizationFallback: "La localizacion completa del mensaje aun no esta disponible para este idioma. Nexus usa etiquetas traducidas disponibles y guia predeterminada."
    },
    fr: {
      prepared: "Prepare localement - non envoye.",
      confirmation: "Une confirmation est requise avant toute communication externe.",
      missingRecipient: "Les details du destinataire manquent. Nexus peut garder ceci comme brouillon ou element de revue.",
      missingProvider: "L'envoi reel exige des identifiants de fournisseur de communication.",
      localizationFallback: "La localisation complete du message n'est pas encore disponible pour cette langue. Nexus utilise les libelles traduits disponibles et les conseils par defaut."
    },
    sw: {
      prepared: "Imeandaliwa ndani - haijatumwa.",
      confirmation: "Uthibitisho unahitajika kabla ya mawasiliano yoyote ya nje.",
      missingRecipient: "Maelezo ya mpokeaji hayapo. Nexus inaweza kuweka hii kama rasimu au kipengee cha ukaguzi.",
      missingProvider: "Kutuma halisi kunahitaji vitambulisho vya mtoa huduma ya mawasiliano.",
      localizationFallback: "Ujanibishaji kamili wa ujumbe haupo bado kwa lugha hii. Nexus inatumia lebo zilizotafsiriwa na mwongozo wa msingi."
    },
    ar: {
      prepared: "Prepared locally - not sent.",
      confirmation: "Confirmation is required before any external communication.",
      missingRecipient: "Recipient details are missing. Nexus can keep this as a draft or review item.",
      missingProvider: "Real sending requires communication provider credentials.",
      localizationFallback: "Full message localization is not available for this language yet. Nexus is using available translated labels and default guidance."
    },
    pt: {
      prepared: "Preparado localmente - nao enviado.",
      confirmation: "A confirmacao e obrigatoria antes de qualquer comunicacao externa.",
      missingRecipient: "Faltam detalhes do destinatario. Nexus pode manter isto como rascunho ou item de revisao.",
      missingProvider: "O envio real requer credenciais do provedor de comunicacao.",
      localizationFallback: "A localizacao completa da mensagem ainda nao esta disponivel para este idioma. Nexus usa rotulos traduzidos disponiveis e orientacao padrao."
    }
  });

  const preparedMessages = [];
  const receipts = [];
  let lastResult = null;

  function nowIso() {
    return new Date().toISOString();
  }

  function makeId(prefix) {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  }

  function clean(value) {
    return String(value || "").trim();
  }

  function lower(value) {
    return clean(value).toLowerCase();
  }

  function canonicalLanguage(language) {
    const key = lower(language || "en").slice(0, 2);
    return SUPPORTED_LANGUAGES[key] ? key : "en";
  }

  function labels(language) {
    return UI_LABELS[canonicalLanguage(language)] || UI_LABELS.en;
  }

  function hasValue(env, name) {
    return Boolean(clean(env?.[name]));
  }

  function enabledState(env, names) {
    if (!names?.length) return true;
    return names.some(name => /^true$/i.test(clean(env?.[name])));
  }

  function laneStatus(env = {}, channel = "notification") {
    const lane = PROVIDER_LANES[channel] || PROVIDER_LANES.notification;
    const configured = lane.env.length === 0 || lane.env.some(name => hasValue(env, name));
    const enabled = enabledState(env, lane.enabledEnv);
    const ready = configured && enabled;
    const missingEnvNames = lane.env.filter(name => !hasValue(env, name));
    const statusLabel = lane.env.length === 0
      ? "local_only"
      : !enabled
        ? "disabled"
        : configured
          ? "configured"
          : "missing_credentials";
    return {
      providerId: channel,
      capability: lane.capability,
      configured,
      enabled,
      ready,
      testModeAvailable: channel === "admin_review_message" || statusLabel === "configured",
      missingEnvNames,
      statusLabel,
      blockedReason: ready ? "" : lane.env.length === 0 ? "local_review_only" : enabled ? "missing_credentials" : "provider_disabled",
      supportedActions: lane.supportedActions.slice(),
      unavailableActions: lane.unavailableActions.slice(),
      lastCheckAt: nowIso(),
      noSecretValues: true
    };
  }

  function providerReadiness(env = {}) {
    const lanes = CHANNELS.map(channel => laneStatus(env, channel));
    return {
      ok: true,
      runtime: "nexus-message-preparation-runtime",
      lanes,
      readyCount: lanes.filter(lane => lane.ready).length,
      total: lanes.length,
      providerStatuses: PROVIDER_STATUSES.slice(),
      noSecretValues: true,
      noExternalSendWithoutConfirmation: true,
      lastCheckAt: nowIso()
    };
  }

  function detectChannel(text = "") {
    const value = lower(text);
    if (/\b(whatsapp|wa)\b/.test(value)) return "whatsapp";
    if (/\b(sms|text|text message)\b/.test(value)) return "sms";
    if (/\b(email|mail)\b/.test(value)) return "email";
    if (/\b(drone|field survey|field operator)\b/.test(value)) return "drone_coordination_message";
    if (/\b(pharmacy|medication|medicine|refill)\b/.test(value)) return "pharmacy_message";
    if (/\b(mobile clinic|clinic van)\b/.test(value)) return "mobile_clinic_message";
    if (/\b(clinic|provider|doctor|nurse|telehealth|health support)\b/.test(value)) return "clinic_message";
    if (/\b(buyer|seller|marketplace|agritrade|order)\b/.test(value)) return "marketplace_message";
    if (/\b(logistics|shipment|driver|delivery|route update)\b/.test(value)) return "logistics_message";
    if (/\b(employer|workforce|applicant|training referral|job referral|learner)\b/.test(value)) return "workforce_message";
    if (/\b(admin|review queue|safety review)\b/.test(value)) return "admin_review_message";
    if (/\b(notify|notification)\b/.test(value)) return "notification";
    if (/\b(message|send|draft|prepare)\b/.test(value)) return "provider_message";
    return "notification";
  }

  function detectRecipientType(text = "", channel = "") {
    const value = lower(text);
    if (/\b(patient)\b/.test(value)) return "patient";
    if (/\b(caregiver|family)\b/.test(value)) return "caregiver";
    if (/\b(chw|community health worker)\b/.test(value)) return "community_health_worker";
    if (/\b(drone provider|drone)\b/.test(value) || channel === "drone_coordination_message") return "drone_provider";
    if (/\b(pharmacy|pharmacist|medicine|refill)\b/.test(value) || channel === "pharmacy_message") return "pharmacy";
    if (/\b(mobile clinic|clinic van)\b/.test(value) || channel === "mobile_clinic_message") return "mobile_clinic";
    if (/\b(clinic|doctor|nurse|hospital)\b/.test(value) || channel === "clinic_message") return "clinic";
    if (/\b(provider|care team|telehealth)\b/.test(value) || channel === "provider_message") return "provider";
    if (/\b(buyer)\b/.test(value)) return "buyer";
    if (/\b(seller|vendor)\b/.test(value)) return "seller";
    if (/\b(driver)\b/.test(value)) return "driver";
    if (/\b(logistics|shipment|delivery)\b/.test(value) || channel === "logistics_message") return "logistics_provider";
    if (/\b(employer|job)\b/.test(value) || channel === "workforce_message") return "employer";
    if (/\b(applicant)\b/.test(value)) return "applicant";
    if (/\b(learner|student)\b/.test(value)) return "learner";
    if (/\b(admin)\b/.test(value)) return "admin";
    if (/\b(review queue|review)\b/.test(value) || channel === "admin_review_message") return "review_queue";
    if (/\b(field operator)\b/.test(value)) return "field_operator";
    if (/\b(user|me|myself)\b/.test(value)) return "user";
    return "custom_recipient";
  }

  function detectSourceMode(text = "", channel = "") {
    const value = lower(text);
    if (channel === "drone_coordination_message" || /\b(drone|field survey)\b/.test(value)) return "drone";
    if (["provider_message", "clinic_message", "pharmacy_message", "mobile_clinic_message"].includes(channel) || /\b(health|clinic|pharmacy|provider|patient|blood pressure|heat illness|medication|refill)\b/.test(value)) return "health";
    if (channel === "marketplace_message" || /\b(buyer|seller|marketplace|agritrade|order|crop sale)\b/.test(value)) return "marketplace";
    if (channel === "logistics_message" || /\b(logistics|shipment|route|delivery)\b/.test(value)) return "logistics";
    if (channel === "workforce_message" || /\b(workforce|employer|applicant|training|job|learner)\b/.test(value)) return "workforce";
    if (/\b(crop|farm|agriculture|field)\b/.test(value)) return "agriculture";
    return "communications";
  }

  function isMessageRequest(text = "") {
    const value = lower(text);
    return /\b(prepare|draft|compose|write|send|message|email|sms|text|whatsapp|notify|notification|can nexus message)\b/.test(value)
      || /\b(provider follow-up|employer referral|buyer|seller|logistics|mobile clinic|pharmacy|drone provider)\b/.test(value);
  }

  function isSensitiveRequest(channel, sourceMode, text = "") {
    return ["health", "marketplace", "logistics", "workforce", "drone"].includes(sourceMode)
      || !["notification"].includes(channel)
      || /\b(patient|medication|payment|transaction|dispute|shipment escalation|referral|personal|health|pharmacy|mobile clinic|drone)\b/i.test(text);
  }

  function subjectFor(request) {
    if (request.subject) return request.subject;
    if (request.channel === "email") return `Nexus ${request.recipientType.replace(/_/g, " ")} message`;
    if (request.channel === "pharmacy_message") return "Nexus pharmacy support message";
    if (request.channel === "mobile_clinic_message") return "Nexus mobile clinic support message";
    if (request.channel === "marketplace_message") return "Nexus marketplace message";
    if (request.channel === "logistics_message") return "Nexus logistics message";
    if (request.channel === "workforce_message") return "Nexus workforce message";
    if (request.channel === "drone_coordination_message") return "Nexus drone coordination message";
    return "Nexus prepared message";
  }

  function draftTemplate(request) {
    const purpose = request.purpose || request.normalizedInput || "support follow-up";
    if (request.channel === "pharmacy_message") {
      return "Hello, this is a Nexus-prepared pharmacy support message. A user is requesting help related to medication or pharmacy routing. Please review and follow up through your normal process. No pharmacy fulfillment has been confirmed by Nexus.";
    }
    if (request.channel === "mobile_clinic_message") {
      return "Hello, this is a Nexus-prepared mobile clinic support message. A user may need mobile clinic support. Please review service area, availability, and follow-up needs. This is not an emergency dispatch.";
    }
    if (request.channel === "marketplace_message") {
      return "Hello, this is a Nexus-prepared marketplace message about a buyer/seller transaction. Please review the order details, status, and any requested changes before taking action.";
    }
    if (request.channel === "logistics_message") {
      return "Hello, this is a Nexus-prepared logistics message about a shipment or route update. Please review the shipment details and confirm status through the proper logistics provider.";
    }
    if (request.channel === "workforce_message") {
      return "Hello, this is a Nexus-prepared workforce message regarding applicant, training, or job referral support. Please review the candidate or training details when available.";
    }
    if (request.channel === "drone_coordination_message") {
      return "Hello, this is a Nexus-prepared drone coordination message. A field survey or drone mission may be needed. No drone has been dispatched by Nexus unless a real drone provider confirms it.";
    }
    if (["provider_message", "clinic_message"].includes(request.channel) || request.sourceMode === "health") {
      return "Hello, this is a Nexus-prepared message. A user is requesting health support and may need provider review. Please review the attached or provided summary when available. This message was prepared locally and has not been sent by Nexus unless a communication provider is active.";
    }
    return `Hello, this is a Nexus-prepared ${request.channel.replace(/_/g, " ")} for ${request.recipientType.replace(/_/g, " ")} review. Purpose: ${purpose}. Please confirm recipient, purpose, and included information before any external sending.`;
  }

  function missingInfoFor(request) {
    const missing = [];
    if (!request.recipientName && request.recipientType === "custom_recipient") missing.push("recipient name or type");
    if (!request.recipientContact && ["email", "sms", "whatsapp"].includes(request.channel)) missing.push("recipient contact");
    if (!request.purpose) missing.push("message purpose");
    return missing;
  }

  function safetyNotesFor(request, missingInfo) {
    const notes = [
      "Prepared locally - not sent.",
      "Review recipient, channel, purpose, and included data before any external communication.",
      "Real sending requires provider credentials, consent, confirmation, and provider success verification."
    ];
    if (request.sourceMode === "health") notes.push("Nexus does not diagnose, prescribe, confirm pharmacy fulfillment, or contact providers without consent and configured providers.");
    if (request.channel === "mobile_clinic_message") notes.push("This is not an emergency dispatch or mobile clinic dispatch.");
    if (request.channel === "marketplace_message") notes.push("No order, payment, buyer contact, seller contact, or dispute escalation was executed.");
    if (request.channel === "drone_coordination_message") notes.push("No drone mission, flight, field dispatch, or image capture was executed.");
    if (missingInfo.length) notes.push(`Missing information: ${missingInfo.join(", ")}.`);
    return notes;
  }

  function buildMessageRequest(input = {}, options = {}) {
    const rawInput = typeof input === "string" ? input : input.rawInput || input.command || input.purpose || "";
    const normalizedInput = clean(rawInput);
    const language = canonicalLanguage(input.language || options.language || currentLanguage());
    const channel = CHANNELS.includes(input.channel) ? input.channel : detectChannel(normalizedInput);
    const recipientType = RECIPIENT_TYPES.includes(input.recipientType) ? input.recipientType : detectRecipientType(normalizedInput, channel);
    const sourceMode = input.sourceMode || detectSourceMode(normalizedInput, channel);
    const purpose = clean(input.purpose || normalizedInput);
    const provider = laneStatus(options.env || {}, channel);
    const requiresConfirmation = Boolean(input.requiresConfirmation ?? isSensitiveRequest(channel, sourceMode, normalizedInput));
    const request = {
      messageId: input.messageId || makeId("msg"),
      rawInput,
      normalizedInput,
      inputType: INPUT_TYPES.includes(input.inputType || options.inputType) ? input.inputType || options.inputType : "typed_chat",
      sourceMode,
      relatedWorkspaceId: clean(input.relatedWorkspaceId || options.relatedWorkspaceId || workspaceFor(channel)),
      relatedRecordId: clean(input.relatedRecordId || options.relatedRecordId || ""),
      language,
      channel,
      recipientType,
      recipientName: clean(input.recipientName || ""),
      recipientContact: clean(input.recipientContact || ""),
      purpose,
      subject: clean(input.subject || ""),
      draftBody: clean(input.draftBody || ""),
      safetyNotes: [],
      providerRequired: channel !== "admin_review_message",
      providerStatus: provider.statusLabel,
      missingEnvNames: provider.missingEnvNames.slice(),
      requiresConfirmation,
      consentStatus: requiresConfirmation ? "required" : "not_required",
      resultStatus: "prepared_local",
      receiptId: "",
      createdAt: input.createdAt || nowIso(),
      updatedAt: nowIso()
    };
    request.subject = subjectFor(request);
    request.draftBody = request.draftBody || draftTemplate(request);
    const missingInfo = missingInfoFor(request);
    request.missingInfo = missingInfo;
    request.safetyNotes = safetyNotesFor(request, missingInfo);
    request.resultStatus = missingInfo.length ? "requires_confirmation" : provider.ready ? "draft_ready" : "blocked_missing_credentials";
    if (channel === "admin_review_message") request.resultStatus = "queued_for_review";
    return request;
  }

  function workspaceFor(channel) {
    return ({
      email: "email-prep",
      sms: "sms-prep",
      whatsapp: "whatsapp-prep",
      notification: "notification-prep",
      provider_message: "provider-message-prep",
      clinic_message: "clinic-message-prep",
      pharmacy_message: "pharmacy-message-prep",
      mobile_clinic_message: "mobile-clinic-message-prep",
      marketplace_message: "marketplace-message-prep",
      logistics_message: "logistics-message-prep",
      workforce_message: "workforce-message-prep",
      admin_review_message: "admin-review-message-prep",
      drone_coordination_message: "drone-message-prep"
    })[channel] || "message-prep";
  }

  function createReceipt(request, overrides = {}) {
    const receipt = {
      receiptId: overrides.receiptId || makeId("message-receipt"),
      messageId: request.messageId,
      action: overrides.action || "prepare_message",
      channel: request.channel,
      recipientType: request.recipientType,
      recipientName: request.recipientName || request.recipientType.replace(/_/g, " "),
      result: overrides.result || `${request.channel.replace(/_/g, " ")} prepared locally. No message was sent.`,
      status: overrides.status || request.resultStatus || "prepared_local",
      timestamp: nowIso(),
      language: request.language,
      providerUsed: overrides.providerUsed || "",
      blockedReason: overrides.blockedReason || (request.missingEnvNames.length ? `Missing ${request.missingEnvNames.join(", ")}` : ""),
      nextStep: overrides.nextStep || "Review the draft, fill missing recipient details, confirm consent, and connect provider credentials before any real send.",
      verificationStatus: overrides.verificationStatus || "local_receipt_created"
    };
    receipts.unshift(receipt);
    return receipt;
  }

  function savePreparedMessageHook(request, receipt) {
    const record = {
      messageId: request.messageId,
      receiptId: receipt.receiptId,
      channel: request.channel,
      recipientType: request.recipientType,
      sourceMode: request.sourceMode,
      relatedWorkspaceId: request.relatedWorkspaceId,
      relatedRecordId: request.relatedRecordId,
      resultStatus: request.resultStatus,
      createdAt: request.createdAt,
      durablePersistence: false,
      noSensitivePersistenceWithoutConsent: true
    };
    preparedMessages.unshift(record);
    return record;
  }

  function prepareMessage(input = {}, options = {}) {
    const request = buildMessageRequest(input, options);
    const receipt = createReceipt(request);
    request.receiptId = receipt.receiptId;
    const recordHook = savePreparedMessageHook(request, receipt);
    const l = labels(request.language);
    const result = {
      ok: true,
      runtime: "nexus-message-preparation-runtime",
      outputType: "prepared_message",
      request,
      message: `${l.prepared} ${l.missingProvider}`,
      confirmation: {
        required: request.requiresConfirmation,
        summary: l.confirmation,
        channel: request.channel,
        recipient: request.recipientName || request.recipientType,
        dataIncluded: ["purpose", "recipient type", "draft body", "related record reference when present"],
        providerReadiness: request.providerStatus,
        safetyNote: request.safetyNotes.join(" "),
        ifApproved: request.missingEnvNames.length ? "Save or queue the prepared message locally only." : "Provider sending still requires a separate confirmed send action.",
        ifProviderMissing: "External sending remains blocked.",
        cancelAvailable: true
      },
      providerReadiness: laneStatus(options.env || {}, request.channel),
      receipt,
      recordHook,
      resultStatus: request.resultStatus,
      noExternalMessageSent: true,
      noExecutionAuthorized: true,
      noSecretValues: true
    };
    lastResult = result;
    render(result);
    return result;
  }

  function attemptSend(input = {}, options = {}) {
    const request = buildMessageRequest(input, options);
    const provider = laneStatus(options.env || {}, request.channel);
    if (!options.confirmed) {
      request.resultStatus = "requires_confirmation";
      const receipt = createReceipt(request, {
        status: "requires_confirmation",
        result: "External sending blocked. Explicit confirmation is required.",
        blockedReason: "confirmation_required"
      });
      return {
        ok: false,
        runtime: "nexus-message-preparation-runtime",
        status: "requires_confirmation",
        request,
        receipt,
        noExternalMessageSent: true,
        noExecutionAuthorized: true,
        noSecretValues: true
      };
    }
    if (!provider.ready || request.missingInfo.length) {
      request.resultStatus = provider.ready ? "requires_confirmation" : "blocked_missing_credentials";
      const receipt = createReceipt(request, {
        status: request.resultStatus,
        result: `${request.channel.replace(/_/g, " ")} prepared locally. No message was sent.`,
        blockedReason: request.missingInfo.length ? `Missing ${request.missingInfo.join(", ")}` : `Missing ${provider.missingEnvNames.join(", ")}`
      });
      return {
        ok: false,
        runtime: "nexus-message-preparation-runtime",
        status: request.resultStatus,
        request,
        providerReadiness: provider,
        receipt,
        noExternalMessageSent: true,
        noExecutionAuthorized: true,
        noSecretValues: true
      };
    }
    const receipt = createReceipt(request, {
      status: "requires_provider",
      result: "Provider appears configured, but real sending adapter execution is not invoked by this local-safe runtime.",
      blockedReason: "send_adapter_not_enabled"
    });
    return {
      ok: false,
      runtime: "nexus-message-preparation-runtime",
      status: "requires_provider",
      request,
      receipt,
      noExternalMessageSent: true,
      noExecutionAuthorized: true,
      noSecretValues: true
    };
  }

  const messageSenderAdapter = Object.freeze({
    prepareMessage,
    validateProviderReadiness: laneStatus,
    requireConfirmation: request => Boolean(request?.requiresConfirmation),
    sendEmail: input => attemptSend({ ...input, channel: "email" }, { confirmed: false }),
    sendSms: input => attemptSend({ ...input, channel: "sms" }, { confirmed: false }),
    sendWhatsApp: input => attemptSend({ ...input, channel: "whatsapp" }, { confirmed: false }),
    sendNotification: input => attemptSend({ ...input, channel: "notification" }, { confirmed: false }),
    createReceipt,
    verifyProviderResult: result => Boolean(result?.providerMessageId && result?.status === "sent_verified")
  });

  function shouldHandleBeforeLegacy(text = "") {
    return isMessageRequest(text);
  }

  function process(input = {}, options = {}) {
    const text = typeof input === "string" ? input : input.rawInput || input.command || input.purpose || "";
    if (!shouldHandleBeforeLegacy(text)) return null;
    return prepareMessage({ ...(typeof input === "object" ? input : {}), rawInput: text }, options);
  }

  function currentLanguage() {
    try {
      const select = root?.document?.querySelector?.("#demoLanguageSelect, #loginLanguage");
      return canonicalLanguage(select?.value || root?.localStorage?.getItem?.("agrinexusLoginLanguage") || "en");
    } catch (_) {
      return "en";
    }
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#39;"
    })[char]);
  }

  function host() {
    return root?.document?.querySelector?.("#nexusMessagePreparationRuntime") || null;
  }

  function renderProviderReadiness(target, readiness) {
    if (!target) return;
    target.innerHTML = readiness.lanes.map(lane => `
      <span data-nexus-message-provider="${escapeHtml(lane.providerId)}">
        <b>${escapeHtml(lane.capability)}</b>
        <small>${escapeHtml(lane.statusLabel)}${lane.missingEnvNames.length ? `: ${escapeHtml(lane.missingEnvNames.join(", "))}` : ""}</small>
      </span>
    `).join("");
  }

  function render(result = lastResult) {
    const h = host();
    if (!h) return;
    const language = canonicalLanguage(result?.request?.language || currentLanguage());
    h.setAttribute("dir", SUPPORTED_LANGUAGES[language].dir);
    const status = h.querySelector("[data-nexus-message-prep-status]");
    const channel = h.querySelector("[data-nexus-message-prep-channel]");
    const recipient = h.querySelector("[data-nexus-message-prep-recipient]");
    const subject = h.querySelector("[data-nexus-message-prep-subject]");
    const purpose = h.querySelector("[data-nexus-message-prep-purpose]");
    const draft = h.querySelector("[data-nexus-message-prep-draft]");
    const confirmation = h.querySelector("[data-nexus-message-prep-confirmation]");
    const receiptsNode = h.querySelector("[data-nexus-message-prep-receipts]");
    const providers = h.querySelector("[data-nexus-message-prep-providers]");
    const request = result?.request || null;
    const l = labels(language);
    if (status) status.textContent = request ? `${l.prepared} ${request.resultStatus}` : "Message preparation ready.";
    if (channel) channel.textContent = request?.channel?.replace(/_/g, " ") || "No channel selected";
    if (recipient) recipient.textContent = request ? `${request.recipientType.replace(/_/g, " ")}${request.recipientName ? ` - ${request.recipientName}` : ""}` : "Recipient not selected";
    if (subject) subject.textContent = request?.subject || "Subject appears here for email or routed message.";
    if (purpose) purpose.textContent = request?.purpose || "Purpose appears here after Ask Nexus prepares a message.";
    if (draft) draft.textContent = request?.draftBody || "Draft body appears here.";
    if (confirmation) confirmation.textContent = request ? result.confirmation.safetyNote : "Confirmation, missing info, and provider gate details appear here.";
    if (receiptsNode) {
      receiptsNode.innerHTML = receipts.slice(0, 4).map(receipt => `
        <article>
          <strong>${escapeHtml(receipt.channel.replace(/_/g, " "))}</strong>
          <span>${escapeHtml(receipt.result)}</span>
          <small>${escapeHtml(receipt.receiptId)} | ${escapeHtml(receipt.verificationStatus)}</small>
        </article>
      `).join("");
    }
    renderProviderReadiness(providers, providerReadiness({}));
  }

  function refreshStatus(env = {}) {
    const readiness = providerReadiness(env);
    const h = host();
    if (h) {
      const status = h.querySelector("[data-nexus-message-prep-status]");
      if (status) status.textContent = `Message providers: ${readiness.readyCount}/${readiness.total} ready`;
      renderProviderReadiness(h.querySelector("[data-nexus-message-prep-providers]"), readiness);
    }
    return readiness;
  }

  function mount() {
    refreshStatus({});
    render(lastResult);
    return true;
  }

  return Object.freeze({
    INPUT_TYPES,
    CHANNELS,
    RECIPIENT_TYPES,
    RESULT_STATUSES,
    PROVIDER_STATUSES,
    PROVIDER_LANES,
    SUPPORTED_LANGUAGES,
    buildMessageRequest,
    providerReadiness,
    laneStatus,
    detectChannel,
    detectRecipientType,
    detectSourceMode,
    isMessageRequest,
    prepareMessage,
    attemptSend,
    messageSenderAdapter,
    shouldHandleBeforeLegacy,
    process,
    render,
    refreshStatus,
    mount,
    getPreparedMessages: () => preparedMessages.slice(),
    getReceipts: () => receipts.slice(),
    getLastResult: () => lastResult
  });
});
