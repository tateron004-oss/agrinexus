(function initNexusOpenDialogueRuntime(root, factory) {
  const runtime = factory(root);
  if (typeof module === "object" && module.exports) {
    module.exports = runtime;
  }
  if (root) {
    root.NexusOpenDialogueRuntime = runtime;
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusOpenDialogueRuntimeFactory(root) {
  "use strict";

  const SUPPORTED_LANGUAGES = Object.freeze({
    en: { label: "English", locale: "en-US", dir: "ltr" },
    es: { label: "Spanish", locale: "es-ES", dir: "ltr" },
    fr: { label: "French", locale: "fr-FR", dir: "ltr" },
    sw: { label: "Kiswahili", locale: "sw-KE", dir: "ltr" },
    ar: { label: "Arabic", locale: "ar", dir: "rtl" },
    pt: { label: "Portuguese", locale: "pt-BR", dir: "ltr" }
  });

  const LOCALIZED_RESPONSES = Object.freeze({
    en: {
      opened: "I opened the related workspace.",
      welcome: "You're welcome. I'm here when you need help.",
      inputUnavailable: "Voice input is unavailable in this browser. You can type the same command in Ask Nexus.",
      outputUnavailable: "Voice output is unavailable in this browser. Nexus response is shown on screen.",
      providerRequired: "This action requires provider activation.",
      localSafe: "This is local-safe test data.",
      credentialsRequired: "Real execution requires connected provider credentials.",
      canHelp: "I can help with health access, agriculture, marketplace, logistics, learning, workforce, communications, provider readiness, and safe local records.",
      next: "What would you like to do next?",
      answerAndOpen: "I can answer that and also open the related workspace.",
      noLiveKnowledge: "I can provide general local-safe guidance, but live internet/source-backed knowledge is not connected right now.",
      notDiagnosis: "This is general guidance, not a diagnosis.",
      emergency: "Please seek urgent help if this may be an emergency."
    },
    es: {
      opened: "Abrí el espacio de trabajo relacionado.",
      welcome: "Con gusto. Estoy aquí cuando necesite ayuda.",
      inputUnavailable: "La entrada de voz no está disponible en este navegador. Puede escribir el mismo comando en Ask Nexus.",
      outputUnavailable: "La salida de voz no está disponible en este navegador. La respuesta de Nexus se muestra en pantalla.",
      providerRequired: "Esta acción requiere activación de proveedor.",
      localSafe: "Estos son datos locales seguros de prueba.",
      credentialsRequired: "La ejecución real requiere credenciales de proveedor conectadas.",
      canHelp: "Puedo ayudar con acceso a salud, agricultura, mercado, logística, aprendizaje, empleo, comunicaciones, preparación de proveedores y registros locales seguros.",
      next: "¿Qué le gustaría hacer ahora?",
      answerAndOpen: "Puedo responder eso y también abrir el espacio de trabajo relacionado.",
      noLiveKnowledge: "Puedo dar orientación general local-segura, pero el conocimiento en vivo de internet/fuentes no está conectado ahora.",
      notDiagnosis: "Esta es orientación general, no un diagnóstico.",
      emergency: "Busque ayuda urgente si esto puede ser una emergencia."
    },
    fr: {
      opened: "J'ai ouvert l'espace de travail lié.",
      welcome: "Avec plaisir. Je suis là quand vous avez besoin d'aide.",
      inputUnavailable: "La saisie vocale n'est pas disponible dans ce navigateur. Vous pouvez taper la même commande dans Ask Nexus.",
      outputUnavailable: "La sortie vocale n'est pas disponible dans ce navigateur. La réponse de Nexus est affichée à l'écran.",
      providerRequired: "Cette action nécessite l'activation d'un fournisseur.",
      localSafe: "Ce sont des données de test locales et sûres.",
      credentialsRequired: "L'exécution réelle nécessite des identifiants de fournisseur connectés.",
      canHelp: "Je peux aider avec l'accès aux soins, l'agriculture, le marché, la logistique, l'apprentissage, l'emploi, les communications, la préparation des fournisseurs et les dossiers locaux sûrs.",
      next: "Que voulez-vous faire ensuite?",
      answerAndOpen: "Je peux répondre et aussi ouvrir l'espace de travail lié.",
      noLiveKnowledge: "Je peux fournir une orientation générale locale, mais la connaissance internet/source en direct n'est pas connectée maintenant.",
      notDiagnosis: "Ceci est une orientation générale, pas un diagnostic.",
      emergency: "Cherchez une aide urgente si cela peut être une urgence."
    },
    sw: {
      opened: "Nimefungua eneo husika la kazi.",
      welcome: "Karibu. Niko hapa unapohitaji msaada.",
      inputUnavailable: "Sauti ya kuingiza haipatikani katika kivinjari hiki. Unaweza kuandika amri ile ile kwenye Ask Nexus.",
      outputUnavailable: "Sauti ya kujibu haipatikani katika kivinjari hiki. Jibu la Nexus linaonyeshwa kwenye skrini.",
      providerRequired: "Kitendo hiki kinahitaji mtoa huduma kuwezeshwa.",
      localSafe: "Hizi ni data za majaribio za ndani zilizo salama.",
      credentialsRequired: "Utekelezaji halisi unahitaji vitambulisho vya mtoa huduma vilivyounganishwa.",
      canHelp: "Ninaweza kusaidia huduma za afya, kilimo, soko, usafirishaji, mafunzo, ajira, mawasiliano, utayari wa watoa huduma, na rekodi salama za ndani.",
      next: "Ungependa kufanya nini baadaye?",
      answerAndOpen: "Ninaweza kujibu hilo na pia kufungua eneo husika la kazi.",
      noLiveKnowledge: "Ninaweza kutoa mwongozo wa jumla wa ndani, lakini maarifa ya moja kwa moja ya intaneti/vyanzo hayajaunganishwa sasa.",
      notDiagnosis: "Huu ni mwongozo wa jumla, si utambuzi wa kitabibu.",
      emergency: "Tafuta msaada wa dharura ikiwa hili linaweza kuwa dharura."
    },
    ar: {
      opened: "\u0641\u062a\u062d\u062a \u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0645\u0631\u062a\u0628\u0637\u0629.",
      welcome: "\u0639\u0641\u0648\u0627. \u0623\u0646\u0627 \u0647\u0646\u0627 \u0639\u0646\u062f\u0645\u0627 \u062a\u062d\u062a\u0627\u062c \u0625\u0644\u0649 \u0645\u0633\u0627\u0639\u062f\u0629.",
      inputUnavailable: "\u0625\u062f\u062e\u0627\u0644 \u0627\u0644\u0635\u0648\u062a \u063a\u064a\u0631 \u0645\u062a\u0627\u062d \u0641\u064a \u0647\u0630\u0627 \u0627\u0644\u0645\u062a\u0635\u0641\u062d. \u064a\u0645\u0643\u0646\u0643 \u0643\u062a\u0627\u0628\u0629 \u0646\u0641\u0633 \u0627\u0644\u0623\u0645\u0631 \u0641\u064a Ask Nexus.",
      outputUnavailable: "\u0625\u062e\u0631\u0627\u062c \u0627\u0644\u0635\u0648\u062a \u063a\u064a\u0631 \u0645\u062a\u0627\u062d \u0641\u064a \u0647\u0630\u0627 \u0627\u0644\u0645\u062a\u0635\u0641\u062d. \u062a\u0638\u0647\u0631 \u0625\u062c\u0627\u0628\u0629 Nexus \u0639\u0644\u0649 \u0627\u0644\u0634\u0627\u0634\u0629.",
      providerRequired: "\u0647\u0630\u0627 \u0627\u0644\u0625\u062c\u0631\u0627\u0621 \u064a\u062a\u0637\u0644\u0628 \u062a\u0641\u0639\u064a\u0644 \u0645\u0632\u0648\u062f \u062e\u062f\u0645\u0629.",
      localSafe: "\u0647\u0630\u0647 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u062e\u062a\u0628\u0627\u0631 \u0645\u062d\u0644\u064a\u0629 \u0622\u0645\u0646\u0629.",
      credentialsRequired: "\u0627\u0644\u062a\u0646\u0641\u064a\u0630 \u0627\u0644\u062d\u0642\u064a\u0642\u064a \u064a\u062a\u0637\u0644\u0628 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0639\u062a\u0645\u0627\u062f \u0645\u0632\u0648\u062f \u0645\u062a\u0635\u0644.",
      canHelp: "\u064a\u0645\u0643\u0646\u0646\u064a \u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629 \u0641\u064a \u0627\u0644\u0635\u062d\u0629 \u0648\u0627\u0644\u0632\u0631\u0627\u0639\u0629 \u0648\u0627\u0644\u0633\u0648\u0642 \u0648\u0627\u0644\u0644\u0648\u062c\u0633\u062a\u064a\u0627\u062a \u0648\u0627\u0644\u062a\u0639\u0644\u0645 \u0648\u0627\u0644\u0639\u0645\u0644 \u0648\u0627\u0644\u0627\u062a\u0635\u0627\u0644\u0627\u062a \u0648\u062c\u0627\u0647\u0632\u064a\u0629 \u0627\u0644\u0645\u0632\u0648\u062f\u064a\u0646 \u0648\u0627\u0644\u0633\u062c\u0644\u0627\u062a \u0627\u0644\u0645\u062d\u0644\u064a\u0629 \u0627\u0644\u0622\u0645\u0646\u0629.",
      next: "\u0645\u0627\u0630\u0627 \u062a\u0631\u064a\u062f \u0623\u0646 \u062a\u0641\u0639\u0644 \u0628\u0639\u062f \u0630\u0644\u0643\u061f",
      answerAndOpen: "\u064a\u0645\u0643\u0646\u0646\u064a \u0627\u0644\u0625\u062c\u0627\u0628\u0629 \u0648\u0641\u062a\u062d \u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0645\u0631\u062a\u0628\u0637\u0629.",
      noLiveKnowledge: "\u064a\u0645\u0643\u0646\u0646\u064a \u062a\u0642\u062f\u064a\u0645 \u0625\u0631\u0634\u0627\u062f \u0639\u0627\u0645 \u0645\u062d\u0644\u064a \u0622\u0645\u0646\u060c \u0644\u0643\u0646 \u0645\u0639\u0631\u0641\u0629 \u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a/\u0627\u0644\u0645\u0635\u0627\u062f\u0631 \u0627\u0644\u0645\u0628\u0627\u0634\u0631\u0629 \u063a\u064a\u0631 \u0645\u062a\u0635\u0644\u0629 \u0627\u0644\u0622\u0646.",
      notDiagnosis: "\u0647\u0630\u0627 \u0625\u0631\u0634\u0627\u062f \u0639\u0627\u0645\u060c \u0648\u0644\u064a\u0633 \u062a\u0634\u062e\u064a\u0635\u0627.",
      emergency: "\u0627\u0637\u0644\u0628 \u0645\u0633\u0627\u0639\u062f\u0629 \u0639\u0627\u062c\u0644\u0629 \u0625\u0630\u0627 \u0643\u0627\u0646 \u0647\u0630\u0627 \u0642\u062f \u064a\u0643\u0648\u0646 \u0637\u0627\u0631\u0626\u0627."
    },
    pt: {
      opened: "Abri o espaço de trabalho relacionado.",
      welcome: "De nada. Estou aqui quando precisar de ajuda.",
      inputUnavailable: "A entrada de voz não está disponível neste navegador. Pode digitar o mesmo comando no Ask Nexus.",
      outputUnavailable: "A saída de voz não está disponível neste navegador. A resposta do Nexus é mostrada na tela.",
      providerRequired: "Esta ação requer ativação de provedor.",
      localSafe: "Estes são dados locais seguros de teste.",
      credentialsRequired: "A execução real requer credenciais de provedor conectadas.",
      canHelp: "Posso ajudar com acesso à saúde, agricultura, mercado, logística, aprendizagem, trabalho, comunicações, prontidão de provedores e registros locais seguros.",
      next: "O que gostaria de fazer a seguir?",
      answerAndOpen: "Posso responder e também abrir o espaço de trabalho relacionado.",
      noLiveKnowledge: "Posso fornecer orientação geral local-segura, mas conhecimento ao vivo da internet/fontes não está conectado agora.",
      notDiagnosis: "Isto é orientação geral, não um diagnóstico.",
      emergency: "Procure ajuda urgente se isto puder ser uma emergência."
    }
  });

  const COMMAND_ALIASES = Object.freeze({
    stop: ["stop", "cancel", "detener", "cancelar", "arreter", "simamisha", "\u0625\u064a\u0642\u0627\u0641", "parar"],
    repeat: ["repeat", "repeat that", "say that again", "repite", "repita", "repete", "repeter", "rudia", "\u0643\u0631\u0631"],
    thanks: ["thank you", "thanks", "gracias", "merci", "asante", "\u0634\u0643\u0631\u0627", "obrigado", "obrigada"],
    capabilities: ["what can nexus do", "what is nexus", "what can i do here", "que puede hacer nexus", "qu'est-ce que nexus", "nexus inaweza kufanya nini", "o que nexus pode fazer"],
    connected: ["what is connected", "provider readiness", "database status", "payment status", "telehealth status", "map provider status", "internet services", "activate providers"],
    health: ["health help", "chronic illness", "diabetes", "hypertension", "blood pressure", "obesity", "heat illness", "pharmacy", "mobile clinic", "medicine", "provider referral"],
    agriculture: ["crop issue", "yellow leaves", "plants are sick", "pest problem", "irrigation", "soil problem", "farm support", "agriculture training"],
    marketplace: ["marketplace", "buyer", "seller", "transaction", "sell produce", "buy produce", "cancel order", "add to transaction"],
    logistics: ["track shipment", "shipment delayed", "route planning", "plan route", "delivery status", "logistics"],
    learning: ["training", "course", "digital skills", "job help", "resume", "interview", "employer match", "farm logistics job"],
    drone: ["drone mission", "field survey", "crop imaging", "flight checklist", "drone support"],
    communications: ["send sms", "prepare sms", "prepare email", "whatsapp", "phone call", "telegram", "message clinic"]
  });

  const DOMAIN_PATTERNS = Object.freeze([
    ["health", /\b(health|chronic|diabetes|hypertension|blood pressure|obesity|heat illness|pharmacy|medicine|clinic|telehealth|provider|wellness|sick|fever|rpm|rtm|chw|community health)\b/i],
    ["learning_workforce", /\b(training|course|learn|literacy|job|workforce|resume|interview|employer|employment|skills)\b/i],
    ["agriculture", /\b(crop|farm|farmer|leaf|leaves|yellow|pest|disease|soil|irrigation|tomato|blight|harvest|food security|climate-smart)\b/i],
    ["marketplace", /\b(marketplace|agritrade|buyer|seller|listing|transaction|sell|buy|produce|dispute|cancel)\b/i],
    ["logistics", /\b(shipment|route|delivery|logistics|field visit|cold-chain|cold chain|delayed|tracking)\b/i],
    ["drone", /\b(drone|field survey|crop imaging|flight checklist|mission)\b/i],
    ["communications", /\b(sms|email|whatsapp|telegram|phone call|message|notification|contact)\b/i],
    ["provider_activation", /\b(provider readiness|what is connected|internet services|database status|payment status|telehealth status|map provider status|activate providers|credentials)\b/i]
  ]);

  const WORKSPACE_BY_DOMAIN = Object.freeze({
    health: "chronic-care",
    agriculture: "crop-support",
    marketplace: "marketplace-home",
    logistics: "logistics-home",
    learning_workforce: "workforce-home",
    drone: "mission-planner",
    communications: "communications-home",
    provider_activation: "provider-activation-home"
  });

  function normalizeInput(input) {
    return String(input || "")
      .replace(/[“”]/g, "\"")
      .replace(/[‘’]/g, "'")
      .replace(/\s+/g, " ")
      .trim();
  }

  function normalizeLower(input) {
    return normalizeInput(input).toLowerCase();
  }

  function canonicalLanguage(language) {
    const code = String(language || "en").toLowerCase().split("-")[0];
    return SUPPORTED_LANGUAGES[code] ? code : "en";
  }

  function localized(language, key) {
    const lang = canonicalLanguage(language);
    return LOCALIZED_RESPONSES[lang]?.[key] || LOCALIZED_RESPONSES.en[key] || "";
  }

  function hasAlias(lower, key) {
    return (COMMAND_ALIASES[key] || []).some(alias => lower.includes(alias));
  }

  function isQuestion(lower) {
    return /\?$/.test(lower)
      || /^(what|how|why|when|where|who|which|can|should|do|does|is|are|tell me|explain|describe)\b/i.test(lower)
      || /^(que|como|por que|pourquoi|comment|kwa nini|jinsi|o que|como)\b/i.test(lower);
  }

  function detectDomain(lower) {
    const found = DOMAIN_PATTERNS.find(([, pattern]) => pattern.test(lower));
    return found ? found[0] : "general";
  }

  function classify(input, options = {}) {
    const rawInput = normalizeInput(input);
    const lower = normalizeLower(rawInput);
    const language = canonicalLanguage(options.language);
    const domain = detectDomain(lower);
    const navigationRuntime = options.navigationRuntime || root?.NexusUniversalNavigationRuntime || null;
    const route = navigationRuntime?.route?.(rawInput, { inputType: options.inputType || "text", currentWorkspaceId: options.currentWorkspaceId || "" }) || null;
    if (!rawInput) return { intentType: "unknown", domain, language, route, shouldHandleInApp: false };
    if (hasAlias(lower, "stop")) return { intentType: "cancellation", domain, language, route, shouldHandleInApp: true };
    if (hasAlias(lower, "repeat")) return { intentType: "repeat", domain, language, route, shouldHandleInApp: true };
    if (hasAlias(lower, "thanks")) return { intentType: "polite_social", domain, language, route, shouldHandleInApp: true };
    if (hasAlias(lower, "capabilities")) return { intentType: "global_capability_question", domain: "general", language, route, shouldHandleInApp: true };
    if (hasAlias(lower, "connected")) return { intentType: "provider_readiness_question", domain: "provider_activation", language, route, shouldHandleInApp: true };
    if (/\b(emergency|not breathing|unconscious|severe chest pain|dispatch ambulance)\b/i.test(lower)) return { intentType: "safety_sensitive_question", domain: "health", language, route, shouldHandleInApp: true };
    if (isQuestion(lower)) return { intentType: "open_ended_question", domain, language, route, shouldHandleInApp: true };
    if (route?.matchedMiniApp && /\b(open|start|show|go to|launch)\b/i.test(lower)) return { intentType: "direct_navigation_command", domain, language, route, shouldHandleInApp: false };
    if (domain !== "general" && /\b(help|support|need|prepare|review|explain)\b/i.test(lower)) return { intentType: "workspace_explanation_request", domain, language, route, shouldHandleInApp: true };
    return { intentType: "unknown_or_unclear_request", domain, language, route, shouldHandleInApp: false };
  }

  function safetyNotesFor(domain, language) {
    const common = [localized(language, "credentialsRequired")];
    if (domain === "health") return [localized(language, "notDiagnosis"), localized(language, "emergency"), ...common];
    if (domain === "agriculture") return ["Educational planning only. Confirm treatment decisions with local experts.", localized(language, "noLiveKnowledge")];
    if (domain === "marketplace") return ["No buyer contact, order, cancellation, shipment, or payment is executed without provider activation and confirmation."];
    if (domain === "logistics") return ["No live GPS or shipment tracking is claimed unless a connected provider returns it."];
    if (domain === "drone") return ["No drone flight, imagery capture, or dispatch occurs without a configured provider and compliance approval."];
    if (domain === "communications") return ["No SMS, email, WhatsApp, Telegram, phone call, or provider contact is sent without confirmation and provider credentials."];
    return common;
  }

  function answerFor(input, classification, options = {}) {
    const language = classification.language || canonicalLanguage(options.language);
    const domain = classification.domain || "general";
    const lower = normalizeLower(input);
    if (classification.intentType === "polite_social") return localized(language, "welcome");
    if (classification.intentType === "cancellation") return "Stopped. Nexus is ready when you are. No live action was taken.";
    if (classification.intentType === "repeat") return options.lastResponse || "I can repeat the last response when one is available.";
    if (classification.intentType === "global_capability_question") return `${localized(language, "canHelp")} ${localized(language, "next")}`;
    if (classification.intentType === "provider_readiness_question") return "Nexus can show provider readiness for live knowledge, database, maps, email, SMS, WhatsApp, telehealth, payments, marketplace, logistics, pharmacy, mobile clinic, LMS, workforce, drone, file storage, and admin review queues. Missing credentials are shown by environment variable name only; secret values are never shown.";
    if (classification.intentType === "safety_sensitive_question") return `${localized(language, "emergency")} Nexus can prepare local support information, but it cannot dispatch emergency help.`;
    if (domain === "health") {
      if (/\b(heat|hot|overheat|dehydration)\b/i.test(lower)) return "Heat illness can become serious with confusion, fainting, very high body temperature, severe weakness, or symptoms that do not improve after cooling and fluids. If this may be an emergency, seek urgent medical help. I can open Heat Risk Support and prepare a local support record. This is general guidance, not a medical diagnosis.";
      if (/\b(blood pressure|hypertension|high blood pressure)\b/i.test(lower)) return "High blood pressure means blood is pushing against artery walls with more force than expected. Nexus can help record readings, prepare questions, and build a provider-ready summary. This is general guidance, not a diagnosis or medication advice.";
      return "Nexus can help organize health access, chronic care, RPM/RTM readings, pharmacy questions, mobile clinic needs, and provider-ready summaries. It does not diagnose, prescribe, book visits, contact providers, or handle emergencies without the required connected systems and approvals.";
    }
    if (domain === "agriculture") return "Yellowing leaves or crop stress can come from water stress, nutrient deficiency, pests, disease, soil conditions, or weather. Observe which leaves are affected, whether symptoms are spreading, and what changed recently. Nexus can narrow it down by collecting crop type, location text, photos if supported, timing, irrigation, and whether symptoms are spreading. I can open Crop Support and prepare a local crop issue record. Live agriculture guidance requires a connected knowledge provider.";
    if (domain === "marketplace") return "To sell produce to buyers, start with product, quantity, quality, location, price notes, delivery needs, and buyer questions. Nexus can prepare a listing draft or buyer/seller packet. It will not contact buyers, create orders, cancel orders, or process payments without provider activation and confirmation.";
    if (domain === "logistics") return "Shipment delays can happen because of route conditions, weather, carrier status, loading delays, missing documents, or handoff gaps. Nexus can prepare a shipment packet or route plan, but live GPS or carrier status requires a connected logistics provider.";
    if (domain === "learning_workforce") return "For farm logistics jobs, useful training can include digital literacy, basic logistics, cold-chain handling, route planning, safety, customer communication, and agriculture market basics. Nexus can open workforce support and prepare a training-to-job path.";
    if (domain === "drone") return "Nexus can prepare drone mission scope, field survey objectives, flight readiness questions, and expert review packets. It does not launch drones, capture imagery, or approve flights without a configured drone provider and compliance approval.";
    if (domain === "communications") return "Nexus can prepare SMS, email, WhatsApp, phone, or Telegram drafts with recipient, purpose, language, and confirmation details. It will not send or call without provider credentials, explicit confirmation, audit, and outcome verification.";
    return "I can answer that in local-safe mode and route you to the right workspace when useful. Tell me the domain: health, agriculture, marketplace, logistics, learning, workforce, communications, provider readiness, or drone support.";
  }

  function missingInfoFor(domain) {
    const map = {
      health: ["Symptoms or concern", "Timing", "Readings if available", "Urgency", "Preferred language"],
      agriculture: ["Crop type", "Visible signs", "Timing", "Water/soil notes", "Region or location text"],
      marketplace: ["Buyer or seller role", "Product", "Quantity", "Location", "Delivery/payment needs"],
      logistics: ["Origin", "Destination", "Shipment reference if any", "Timing", "Carrier if known"],
      learning_workforce: ["Goal", "Current skills", "Language", "Time available", "Target job"],
      drone: ["Field objective", "Field area", "Crop", "Safety constraints", "Provider status"],
      communications: ["Recipient display", "Channel", "Purpose", "Draft content", "Confirmation"]
    };
    return map[domain] || ["What you want to do next", "Which workspace you want to use"];
  }

  function availableActionsFor(domain) {
    const map = {
      health: ["Open chronic care support", "Record reading", "Prepare provider summary"],
      agriculture: ["Open crop support", "Prepare expert checklist", "Run live knowledge if configured"],
      marketplace: ["Prepare listing", "Prepare buyer question", "Review payment gate"],
      logistics: ["Plan route", "Prepare shipment packet", "Review tracking provider status"],
      learning_workforce: ["Open training support", "Prepare resume", "Build skills checklist"],
      drone: ["Prepare mission plan", "Review flight checklist", "Explain provider blocked state"],
      communications: ["Prepare draft", "Review recipient", "Show confirmation gate"],
      provider_activation: ["Show readiness", "List missing env names", "Explain provider gates"]
    };
    return map[domain] || ["Open related workspace", "Ask a follow-up", "Save local note if supported"];
  }

  function blockedActionsFor(domain) {
    return [
      "No fake live internet, citations, provider execution, payment, shipment tracking, drone dispatch, telehealth, SMS, email, WhatsApp, pharmacy fulfillment, medical diagnosis, or emergency dispatch",
      ...safetyNotesFor(domain, "en")
    ];
  }

  function responseSchema(input, options = {}) {
    const language = canonicalLanguage(options.language);
    const classification = classify(input, {
      ...options,
      language,
      navigationRuntime: options.navigationRuntime || root?.NexusUniversalNavigationRuntime || null
    });
    const route = classification.route || null;
    const domain = classification.domain || "general";
    const workspaceId = WORKSPACE_BY_DOMAIN[domain] || route?.matchedMiniApp || "";
    const liveKnowledgeConfigured = Boolean(options.liveKnowledgeConfigured || options.liveKnowledgeResult?.sources?.length);
    const answer = answerFor(input, classification, options);
    const providerRequirements = domain === "provider_activation"
      ? ["Configured provider credentials", "Consent where required", "Audit logging", "Outcome verification"]
      : liveKnowledgeConfigured ? [] : ["Live knowledge/search provider not configured for source-backed current results"];
    return {
      responseId: `nexus-open-dialogue-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
      rawInput: normalizeInput(input),
      normalizedInput: normalizeLower(input),
      language,
      intentType: classification.intentType,
      domain,
      sourceMode: options.sourceMode || options.inputType || "typed_or_voice",
      relatedWorkspaceId: workspaceId,
      answer,
      spokenSummary: answer.length > 240 ? `${answer.slice(0, 237)}...` : answer,
      reasoningTrace: [
        `intent=${classification.intentType}`,
        `domain=${domain}`,
        `workspace=${workspaceId || "none"}`,
        liveKnowledgeConfigured ? "liveKnowledge=configured_or_mocked" : "liveKnowledge=not_configured"
      ],
      safetyNotes: safetyNotesFor(domain, language),
      missingInfo: missingInfoFor(domain),
      recommendedNextStep: workspaceId ? `Open ${workspaceId.replace(/-/g, " ")} or answer the missing information.` : localized(language, "next"),
      suggestedWorkspace: workspaceId ? {
        id: workspaceId,
        routeTarget: route?.routeTarget || workspaceId,
        label: route?.workspace?.title || workspaceId.replace(/-/g, " ")
      } : null,
      availableActions: availableActionsFor(domain),
      blockedActions: blockedActionsFor(domain),
      providerRequirements,
      liveKnowledgeUsed: Boolean(options.liveKnowledgeResult?.sources?.length),
      sources: options.liveKnowledgeResult?.sources || [],
      confidence: classification.intentType === "unknown_or_unclear_request" ? 0.45 : 0.82,
      requiresConfirmation: /communications|marketplace|logistics|drone|health/.test(domain) && /\b(send|submit|pay|dispatch|book|contact|call|message|refill|diagnose|prescribe)\b/i.test(normalizeLower(input)),
      receiptEligible: true,
      timestamp: new Date().toISOString(),
      shouldHandleInApp: classification.shouldHandleInApp,
      noExecutionAuthorized: true
    };
  }

  async function respondAsync(input, options = {}) {
    const base = responseSchema(input, options);
    const wantsLive = /\b(current|latest|source|sources|citation|research|internet|today|best practices)\b/i.test(base.normalizedInput);
    if (!wantsLive || base.liveKnowledgeUsed || options.skipLiveKnowledge) return base;
    const fetcher = options.liveKnowledgeFetcher || (root?.fetch ? async query => {
      const response = await root.fetch("/api/nexus/live-knowledge/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, source: "open-dialogue-runtime" })
      });
      return response.ok ? response.json() : null;
    } : null);
    if (!fetcher) {
      base.providerRequirements.push(localized(base.language, "noLiveKnowledge"));
      return base;
    }
    try {
      const live = await fetcher(base.rawInput);
      const sources = live?.sources || live?.results || live?.answer?.sources || [];
      if (Array.isArray(sources) && sources.length) {
        return {
          ...base,
          liveKnowledgeUsed: true,
          sources,
          answer: live.answer || live.summary || base.answer,
          spokenSummary: live.summary || base.spokenSummary,
          providerRequirements: [],
          reasoningTrace: [...base.reasoningTrace, "liveKnowledge=provider_returned_sources"]
        };
      }
    } catch (error) {
      return {
        ...base,
        providerRequirements: [...base.providerRequirements, "Live knowledge provider returned a safe error"],
        safetyNotes: [...base.safetyNotes, "No fake citations were generated."]
      };
    }
    return {
      ...base,
      providerRequirements: [...base.providerRequirements, localized(base.language, "noLiveKnowledge")],
      safetyNotes: [...base.safetyNotes, "No fake citations were generated."]
    };
  }

  function shouldHandleBeforeLegacy(input, options = {}) {
    return classify(input, options).shouldHandleInApp;
  }

  return Object.freeze({
    SUPPORTED_LANGUAGES,
    LOCALIZED_RESPONSES,
    COMMAND_ALIASES,
    classify,
    respond: responseSchema,
    respondAsync,
    shouldHandleBeforeLegacy,
    canonicalLanguage,
    localized
  });
});
