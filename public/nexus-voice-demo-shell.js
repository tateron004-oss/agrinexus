(function () {
  "use strict";

  const STATUS_READY = "Voice ready";
  const STATUS_LISTENING = "Listening...";
  const STATUS_PROCESSING = "Processing...";
  const STATUS_SPEAKING = "Speaking...";
  const STATUS_UNSUPPORTED = "Voice not supported in this browser";
  const COMMAND_SOURCE = "phase-16a-push-to-talk";
  const DEFAULT_LANGUAGE = "en";
  const KENYA_DEMO_MUSIC_RESPONSE = "Absolutely. I'll play a Kenya-inspired demo rhythm. This is local demo audio, and I'm not opening an outside music service.";
  const MUSIC_USER_INTERACTION_REQUIRED = "Music playback needs a user interaction in this browser. Please click the play control.";
  const MUSIC_STOPPED_RESPONSE = "Music stopped.";
  const DEMO_MUSIC_DURATION_MS = 24000;
  const DEMO_LANGUAGES = {
    en: {
      label: "English",
      speechLang: "en-US",
      changeResponse: "Language changed to English. How can I help you?",
      intro: "Good morning. I am Nexus, your voice-operated access assistant. I'm ready to help with telehealth, pharmacy support, mobile clinic access, transportation-to-care, workforce resources, and agriculture services. How can I assist you today?",
      health: {
        emergency: "If this may be an emergency, call local emergency services now. I cannot dispatch emergency help in this demo.",
        execution: "For safety, I cannot complete that healthcare action automatically. I can help you review what would be needed before anything is shared, scheduled, sent, submitted, or contacted.",
        telehealth: "Nexus can help with telehealth access. I can guide you through the information usually needed for a visit and prepare a safe next-step review. I have not scheduled an appointment or contacted a provider.",
        mobileClinic: "I can help you review mobile clinic and rural health access options. In this demo, I can prepare next steps, but I will not request your location, contact a clinic, or dispatch services.",
        pharmacy: "I can help you review pharmacy access steps, refill questions, or transportation needs. I have not submitted a refill, and I cannot request, change, or submit medication orders in this demo.",
        transportation: "I can help you think through care access and transportation options. I have not shared your location, contacted anyone, scheduled an appointment, or scheduled a ride.",
        default: "I can help with health access navigation. This demo prepares safe review-only next steps and does not contact providers, share information, schedule care, request location, or complete healthcare actions."
      }
    },
    es: {
      label: "Spanish",
      speechLang: "es-ES",
      changeResponse: "Idioma cambiado a español. ¿Cómo puedo ayudarle?",
      intro: "Buenos días. Soy Nexus, su asistente de acceso operado por voz. Puedo orientar sobre telesalud, apoyo de farmacia, acceso a clínicas móviles, transporte para recibir atención, recursos laborales y servicios agrícolas. ¿Cómo puedo ayudarle?",
      health: {
        emergency: "Si esto puede ser una emergencia, llame ahora a los servicios locales de emergencia. No puedo enviar ayuda de emergencia en esta demostración.",
        execution: "Por seguridad, no puedo completar automáticamente esa acción de salud. Puedo ayudarle a revisar lo necesario antes de compartir, programar, enviar, solicitar o contactar a alguien.",
        telehealth: "Nexus puede ayudar con el acceso a telesalud. Puedo guiarle por la información que suele necesitarse para una visita y preparar una revisión segura del siguiente paso. No he programado una cita ni contactado a un proveedor.",
        mobileClinic: "Puedo ayudarle a revisar opciones de clínica móvil y acceso de salud rural. En esta demostración puedo preparar próximos pasos, pero no solicitaré su ubicación, no contactaré a una clínica ni enviaré servicios.",
        pharmacy: "Puedo ayudarle a revisar pasos de acceso a farmacia, preguntas de resurtido o necesidades de transporte. No he enviado un resurtido y no puedo solicitar, cambiar ni enviar órdenes de medicamentos en esta demostración.",
        transportation: "Puedo ayudarle a pensar en opciones de acceso a la atención y transporte. No he compartido su ubicación, contactado a nadie, programado una cita ni programado transporte.",
        default: "Puedo ayudar con navegación de acceso a salud. Esta demostración prepara próximos pasos solo para revisión y no contacta proveedores, comparte información, programa atención, solicita ubicación ni completa acciones de salud."
      }
    },
    fr: {
      label: "French",
      speechLang: "fr-FR",
      changeResponse: "Langue changée en français. Comment puis-je vous aider?",
      intro: "Bonjour. Je suis Nexus, votre assistant d'accès à commande vocale. Je peux vous orienter pour la télésanté, le soutien en pharmacie, l'accès aux cliniques mobiles, le transport vers les soins, les ressources professionnelles et les services agricoles. Comment puis-je vous aider?",
      health: {
        emergency: "Si cela peut être une urgence, appelez maintenant les services d'urgence locaux. Je ne peux pas envoyer d'aide d'urgence dans cette démonstration.",
        execution: "Par sécurité, je ne peux pas effectuer automatiquement cette action de santé. Je peux vous aider à vérifier ce qui serait nécessaire avant tout partage, rendez-vous, envoi, demande ou contact.",
        telehealth: "Nexus peut aider à l'accès à la télésanté. Je peux vous guider dans les informations habituellement nécessaires pour une visite et préparer une revue sûre de la prochaine étape. Je n'ai pas pris de rendez-vous ni contacté de fournisseur.",
        mobileClinic: "Je peux vous aider à examiner les options de clinique mobile et d'accès aux soins ruraux. Dans cette démonstration, je peux préparer les prochaines étapes, mais je ne demanderai pas votre position, ne contacterai pas de clinique et n'enverrai pas de services.",
        pharmacy: "Je peux vous aider à examiner les étapes d'accès à la pharmacie, les questions de renouvellement ou les besoins de transport. Je n'ai pas soumis de renouvellement et je ne peux pas demander, modifier ou envoyer d'ordonnances dans cette démonstration.",
        transportation: "Je peux vous aider à réfléchir aux options d'accès aux soins et de transport. Je n'ai pas partagé votre position, contacté quelqu'un, pris de rendez-vous ni programmé de trajet.",
        default: "Je peux aider à la navigation d'accès aux soins. Cette démonstration prépare uniquement des prochaines étapes à examiner et ne contacte pas de fournisseurs, ne partage pas d'informations, ne programme pas de soins, ne demande pas la position et n'effectue pas d'actions de santé."
      }
    },
    ar: {
      label: "Arabic",
      speechLang: "ar",
      changeResponse: "تم تغيير اللغة إلى العربية. كيف يمكنني مساعدتك؟",
      intro: "صباح الخير. أنا Nexus، مساعدك الصوتي للوصول إلى الخدمات. يمكنني إرشادك في الرعاية عن بعد، ودعم الصيدلية، والوصول إلى العيادات المتنقلة، والنقل إلى الرعاية، وموارد العمل، والخدمات الزراعية. كيف يمكنني مساعدتك اليوم؟",
      health: {
        emergency: "إذا كان هذا قد يكون حالة طارئة، فاتصل بخدمات الطوارئ المحلية الآن. لا يمكنني إرسال مساعدة طارئة في هذا العرض التجريبي.",
        execution: "للسلامة، لا يمكنني إكمال هذا الإجراء الصحي تلقائياً. يمكنني مساعدتك في مراجعة ما يلزم قبل مشاركة أي معلومات أو تحديد موعد أو إرسال طلب أو التواصل مع أي جهة.",
        telehealth: "يمكن لـ Nexus المساعدة في الوصول إلى الرعاية عن بعد. يمكنني إرشادك إلى المعلومات المطلوبة عادة للزيارة وإعداد مراجعة آمنة للخطوة التالية. لم أحدد موعداً ولم أتواصل مع مقدم رعاية.",
        mobileClinic: "يمكنني مساعدتك في مراجعة خيارات العيادة المتنقلة والوصول إلى الرعاية الريفية. في هذا العرض، يمكنني إعداد الخطوات التالية، لكنني لن أطلب موقعك أو أتواصل مع عيادة أو أرسل خدمات.",
        pharmacy: "يمكنني مساعدتك في مراجعة خطوات الوصول إلى الصيدلية أو أسئلة إعادة الصرف أو احتياجات النقل. لم أرسل طلب إعادة صرف ولا يمكنني طلب أو تغيير أو إرسال أوامر دواء في هذا العرض.",
        transportation: "يمكنني مساعدتك في التفكير في خيارات الوصول إلى الرعاية والنقل. لم أشارك موقعك أو أتواصل مع أحد أو أحدد موعداً أو أرتب رحلة.",
        default: "يمكنني المساعدة في توجيه الوصول إلى الرعاية الصحية. هذا العرض يجهز خطوات مراجعة آمنة فقط ولا يتواصل مع مقدمي الرعاية أو يشارك معلومات أو يحدد رعاية أو يطلب الموقع أو يكمل إجراءات صحية."
      }
    },
    pt: {
      label: "Portuguese",
      speechLang: "pt-PT",
      changeResponse: "Idioma alterado para português. Como posso ajudar?",
      intro: "Bom dia. Eu sou Nexus, seu assistente de acesso operado por voz. Posso orientar sobre telessaúde, apoio de farmácia, acesso a clínica móvel, transporte para cuidados, recursos de trabalho e serviços agrícolas. Como posso ajudar hoje?",
      health: {
        emergency: "Se isto puder ser uma emergência, ligue agora para os serviços locais de emergência. Não posso enviar ajuda de emergência nesta demonstração.",
        execution: "Por segurança, não posso concluir automaticamente essa ação de saúde. Posso ajudar a rever o que seria necessário antes de qualquer informação ser partilhada, marcada, enviada, solicitada ou contactada.",
        telehealth: "Nexus pode ajudar com acesso à telessaúde. Posso orientar pelas informações normalmente necessárias para uma consulta e preparar uma revisão segura do próximo passo. Não marquei consulta nem contactei um prestador.",
        mobileClinic: "Posso ajudar a rever opções de clínica móvel e acesso rural à saúde. Nesta demonstração, posso preparar próximos passos, mas não pedirei a sua localização, não contactarei uma clínica e não enviarei serviços.",
        pharmacy: "Posso ajudar a rever passos de acesso à farmácia, perguntas de renovação ou necessidades de transporte. Não enviei renovação e não posso solicitar, alterar ou enviar pedidos de medicação nesta demonstração.",
        transportation: "Posso ajudar a pensar em opções de acesso a cuidados e transporte. Não partilhei a sua localização, não contactei ninguém, não marquei consulta e não agendei transporte.",
        default: "Posso ajudar na navegação de acesso à saúde. Esta demonstração prepara próximos passos apenas para revisão e não contacta prestadores, partilha informações, agenda cuidados, pede localização ou conclui ações de saúde."
      }
    },
    sw: {
      label: "Swahili",
      speechLang: "sw",
      changeResponse: "Lugha imebadilishwa kuwa Kiswahili. Ninawezaje kukusaidia?",
      intro: "Habari za asubuhi. Mimi ni Nexus, msaidizi wako wa ufikiaji kwa sauti. Ninaweza kukuongoza kuhusu huduma ya afya kwa mbali, msaada wa duka la dawa, kliniki tembezi, usafiri wa kwenda kupata huduma, rasilimali za kazi, na huduma za kilimo. Ninawezaje kukusaidia leo?",
      health: {
        emergency: "Ikiwa hili linaweza kuwa dharura, piga huduma za dharura za eneo lako sasa. Siwezi kutuma msaada wa dharura katika onyesho hili.",
        execution: "Kwa usalama, siwezi kukamilisha kitendo hicho cha afya kiotomatiki. Ninaweza kukusaidia kukagua kinachohitajika kabla taarifa yoyote haijashirikiwa, kupangwa, kutumwa, kuombwa, au mtu kuwasiliana.",
        telehealth: "Nexus inaweza kusaidia kufikia huduma ya afya kwa mbali. Ninaweza kukuongoza kuhusu taarifa zinazohitajika kwa ziara na kuandaa mapitio salama ya hatua inayofuata. Sijapanga miadi wala kuwasiliana na mtoa huduma.",
        mobileClinic: "Ninaweza kukusaidia kukagua chaguo za kliniki tembezi na huduma za afya vijijini. Katika onyesho hili, ninaweza kuandaa hatua zinazofuata, lakini sitaomba eneo lako, sitawasiliana na kliniki, wala kutuma huduma.",
        pharmacy: "Ninaweza kukusaidia kukagua hatua za kupata msaada wa duka la dawa, maswali ya kujaza upya dawa, au mahitaji ya usafiri. Sijatuma ombi la kujaza dawa na siwezi kuomba, kubadilisha, au kutuma maagizo ya dawa katika onyesho hili.",
        transportation: "Ninaweza kukusaidia kufikiria kuhusu chaguo za kupata huduma na usafiri. Sijashiriki eneo lako, sijawasiliana na mtu yeyote, sijapanga miadi, wala kupanga safari.",
        default: "Ninaweza kusaidia kuelekeza ufikiaji wa huduma ya afya. Onyesho hili huandaa hatua za kukagua tu na haliwasiliani na watoa huduma, halishiriki taarifa, halipangi huduma, haliombi eneo, wala kukamilisha vitendo vya afya."
      }
    }
  };

  let activeRecognition = null;
  let isSpeaking = false;
  let selectedLanguage = DEFAULT_LANGUAGE;
  let isDemoMusicPlaying = false;
  let demoMusicContext = null;
  let demoMusicGain = null;
  let demoMusicNodes = [];
  let demoMusicTimers = [];

  function $(selector) {
    return document.querySelector(selector);
  }

  function button() {
    return $("#nexusVoiceDemoTalkBtn");
  }

  function introButton() {
    return $("#nexusVoiceDemoIntroBtn");
  }

  function stopMusicButton() {
    return $("#nexusVoiceDemoStopMusicBtn");
  }

  function languageSelector() {
    return $("#nexusVoiceDemoLanguageSelect");
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

  function currentLanguageConfig() {
    return DEMO_LANGUAGES[selectedLanguage] || DEMO_LANGUAGES[DEFAULT_LANGUAGE];
  }

  function voiceMatchesLanguage(voice, speechLang) {
    const language = String(voice?.lang || "").toLowerCase();
    const target = String(speechLang || "").toLowerCase();
    const base = target.split("-")[0];
    return Boolean(language && (language === target || language.startsWith(`${base}-`) || language === base));
  }

  function choosePolishedVoice(languageKey = selectedLanguage) {
    if (!speechSynthesisSupported() || typeof window.speechSynthesis.getVoices !== "function") return null;
    const config = DEMO_LANGUAGES[languageKey] || DEMO_LANGUAGES[DEFAULT_LANGUAGE];
    const voices = window.speechSynthesis.getVoices() || [];
    const languageVoices = voices.filter(voice => voiceMatchesLanguage(voice, config.speechLang));
    const preferred = languageVoices.find(voice => /\b(natural|neural|enhanced|premium|system)\b/i.test(String(voice.name || "")))
      || languageVoices.find(voice => /\b(microsoft|google|apple)\b/i.test(String(voice.name || "")))
      || languageVoices.find(voice => voice.default)
      || languageVoices[0];
    return preferred || null;
  }

  function choosePolishedEnglishVoice() {
    return choosePolishedVoice("en");
  }

  function normalizeCommand(command) {
    return String(command || "")
      .replace(/[“”]/g, "\"")
      .replace(/[’]/g, "'")
      .replace(/\s+/g, " ")
      .trim();
  }

  function stopActiveRecognition() {
    if (!activeRecognition) return;
    try {
      activeRecognition.stop();
    } catch (error) {
      // Recognition stop is best-effort in browser implementations.
    }
    activeRecognition = null;
  }

  function isKenyaMusicCommand(command) {
    const text = normalizeCommand(command).toLowerCase();
    return /\b(play|start)\b.*\b(music|rhythm|song|audio)\b.*\b(kenya|kenyan)\b/.test(text)
      || /\b(play|start)\b.*\b(kenyan)\b.*\b(music|rhythm|song|audio)\b/.test(text);
  }

  function isStopMusicCommand(command) {
    const text = normalizeCommand(command).toLowerCase();
    return /\b(stop|pause|end)\b.*\b(music|rhythm|song|audio)\b/.test(text);
  }

  function stopDemoMusic(options = {}) {
    demoMusicTimers.forEach(timer => window.clearTimeout(timer));
    demoMusicTimers = [];
    demoMusicNodes.forEach(node => {
      try {
        node.stop();
      } catch (error) {
        // Stopping already-ended oscillators is harmless.
      }
      try {
        node.disconnect();
      } catch (error) {
        // Disconnect is best-effort for browser audio nodes.
      }
    });
    demoMusicNodes = [];
    if (demoMusicGain) {
      try {
        demoMusicGain.disconnect();
      } catch (error) {
        // Disconnect is best-effort.
      }
    }
    demoMusicGain = null;
    const context = demoMusicContext;
    demoMusicContext = null;
    isDemoMusicPlaying = false;
    if (context && context.state !== "closed") {
      try {
        void context.close();
      } catch (error) {
        // Closing Web Audio is best-effort across browsers.
      }
    }
    if (options.announce) {
      setStatus(STATUS_READY);
      setTranscript(MUSIC_STOPPED_RESPONSE);
      speak(MUSIC_STOPPED_RESPONSE);
    }
  }

  function startKenyaDemoMusic() {
    stopActiveRecognition();
    stopDemoMusic({ announce: false });
    const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextCtor) {
      setTranscript(MUSIC_USER_INTERACTION_REQUIRED);
      setStatus(STATUS_READY);
      return false;
    }
    try {
      const context = new AudioContextCtor();
      demoMusicContext = context;
      demoMusicGain = context.createGain();
      demoMusicGain.gain.setValueAtTime(0.0001, context.currentTime);
      demoMusicGain.gain.exponentialRampToValueAtTime(0.12, context.currentTime + 0.08);
      demoMusicGain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + (DEMO_MUSIC_DURATION_MS / 1000));
      demoMusicGain.connect(context.destination);
      const pattern = [196, 247, 294, 247, 220, 262, 330, 262];
      const startAt = context.currentTime + 0.05;
      const beat = 0.28;
      const cycles = Math.floor((DEMO_MUSIC_DURATION_MS / 1000) / (pattern.length * beat));
      for (let cycle = 0; cycle < cycles; cycle += 1) {
        pattern.forEach((frequency, index) => {
          const oscillator = context.createOscillator();
          const noteGain = context.createGain();
          const noteStart = startAt + ((cycle * pattern.length) + index) * beat;
          oscillator.type = index % 2 === 0 ? "sine" : "triangle";
          oscillator.frequency.setValueAtTime(frequency, noteStart);
          noteGain.gain.setValueAtTime(0.0001, noteStart);
          noteGain.gain.exponentialRampToValueAtTime(index % 2 === 0 ? 0.18 : 0.1, noteStart + 0.025);
          noteGain.gain.exponentialRampToValueAtTime(0.0001, noteStart + beat * 0.82);
          oscillator.connect(noteGain);
          noteGain.connect(demoMusicGain);
          oscillator.start(noteStart);
          oscillator.stop(noteStart + beat * 0.9);
          demoMusicNodes.push(oscillator);
        });
      }
      const stopTimer = window.setTimeout(() => stopDemoMusic({ announce: false }), DEMO_MUSIC_DURATION_MS);
      demoMusicTimers.push(stopTimer);
      isDemoMusicPlaying = true;
      if (typeof context.resume === "function" && context.state === "suspended") {
        void context.resume();
      }
      return true;
    } catch (error) {
      stopDemoMusic({ announce: false });
      setTranscript(MUSIC_USER_INTERACTION_REQUIRED);
      setStatus(STATUS_READY);
      return false;
    }
  }

  function languageKeyFromText(text) {
    const normalized = normalizeCommand(text).toLowerCase();
    if (/\b(english|ingles|inglés|anglais|ingl[eê]s|kiingereza|الانجليزية|الإنجليزية)\b/.test(normalized)) return "en";
    if (/\b(spanish|espanol|español|espagnol|espanhol|kihispania|الاسبانية|الإسبانية)\b/.test(normalized)) return "es";
    if (/\b(french|francais|français|frances|francês|kifaransa|الفرنسية)\b/.test(normalized)) return "fr";
    if (/\b(arabic|arabe|arabe|ar[áa]bigo|kiarabu|العربية)\b/.test(normalized)) return "ar";
    if (/\b(portuguese|portugues|português|portugais|kireno|البرتغالية)\b/.test(normalized)) return "pt";
    if (/\b(swahili|kiswahili|السواحيلية)\b/.test(normalized)) return "sw";
    return "";
  }

  function isLanguageSwitchCommand(command) {
    const text = normalizeCommand(command).toLowerCase();
    if (!languageKeyFromText(text)) return false;
    if (/^\s*(english|spanish|french|arabic|portuguese|swahili|kiswahili)\s*(please)?\s*$/i.test(text)) return true;
    return /\b(switch|speak|change|set|use)\b.*\b(language|english|spanish|french|arabic|portuguese|swahili|espanol|español|francais|français|portugues|português|kiswahili)\b/.test(text)
      || /\b(language)\b.*\b(english|spanish|french|arabic|portuguese|swahili|espanol|español|francais|français|portugues|português|kiswahili)\b/.test(text);
  }

  function setDemoLanguage(languageKey, options = {}) {
    if (!DEMO_LANGUAGES[languageKey]) return "";
    selectedLanguage = languageKey;
    document.documentElement.lang = DEMO_LANGUAGES[languageKey].speechLang || languageKey;
    document.documentElement.dir = languageKey === "ar" ? "rtl" : "ltr";
    const selector = languageSelector();
    if (selector && selector.value !== languageKey) selector.value = languageKey;
    const response = DEMO_LANGUAGES[languageKey].changeResponse;
    setTranscript(response);
    setStatus(STATUS_READY);
    if (options.speak !== false) speak(response);
    return response;
  }

  function isHighRiskPrompt(command) {
    const text = normalizeCommand(command).toLowerCase();
    if (isEmergencyPrompt(text)) return true;
    if (isHealthAccessPrompt(text)) return false;
    return /\b(call|phone|dial|text|message|whatsapp|telegram|sms|email|contact|send|camera|video|microphone|location|locate|gps|buy|sell|purchase|payment|pay|checkout|account|login|identity|verify|appointment|schedule|doctor|provider|telehealth|emergency|dispatch|ambulance|diagnose|llamar|llamada|mensaje|ubicaci[oó]n|c[aá]mara|comprar|vender|pago|emergencia|appeler|message|localisation|cam[eé]ra|paiement|urgence|اتصل|رسالة|موقع|كاميرا|دفع|طوارئ|ligar|mensagem|localiza[cç][aã]o|pagamento|emerg[eê]ncia|piga|ujumbe|eneo|kamera|malipo|dharura)\b/.test(text);
  }

  function isEmergencyPrompt(command) {
    const text = normalizeCommand(command).toLowerCase();
    return /\b(emergency|ambulance|cannot breathe|can't breathe|cant breathe|chest pain|not breathing|stroke|heart attack|emergencia|ambulancia|no puede respirar|urgence|ambulance|ne respire pas|طوارئ|إسعاف|لا يتنفس|emerg[eê]ncia|ambul[aâ]ncia|n[aã]o respira|dharura|gari la wagonjwa|hapumui)\b/.test(text);
  }

  function isHealthExecutionPrompt(command) {
    const text = normalizeCommand(command).toLowerCase();
    return /\b(call my doctor|call the doctor|contact (a )?(doctor|provider|clinic|pharmacy)|send my medical|send medical|medical records?|health records?|refill my prescription|refill prescription|submit (a )?refill|request (a )?refill|tell the pharmacy|change medication|schedule (my )?(appointment|visit)|book (an )?appointment|send my location|share my location|telehealth video|video call|provider video|open video|show injury|camera preview|use (my )?camera|open (the )?camera|dispatch (a )?mobile clinic|diagnose|diagnosis|llamar.*(doctor|m[eé]dico)|contactar.*(doctor|m[eé]dico|cl[ií]nica|farmacia)|programar.*cita|enviar.*ubicaci[oó]n|usar.*c[aá]mara|diagn[oó]stic|appeler.*(docteur|m[eé]decin)|contacter.*(clinique|pharmacie)|prendre.*rendez-vous|envoyer.*localisation|utiliser.*cam[eé]ra|تشخيص|موعد|طبيب|كاميرا|موقع|ligar.*(doutor|m[eé]dico)|marcar.*consulta|enviar.*localiza[cç][aã]o|usar.*c[aâ]mera|piga.*daktari|ratibu.*miadi|tuma.*eneo|tumia.*kamera)\b/.test(text);
  }

  function isHealthAccessPrompt(command) {
    const text = normalizeCommand(command).toLowerCase();
    if (isEmergencyPrompt(text) || isHealthExecutionPrompt(text)) return false;
    return /\b(telehealth|mobile clinic|pharmacy support|pharmacy access|medication|medicine|refill request|rural health|access care|care access|care navigation|community health|doctor.*transportation|transportation.*(doctor|care|clinic)|prepare.*telehealth|health workflow|health access)\b/.test(text);
  }

  function healthAccessResponse(command) {
    const text = normalizeCommand(command).toLowerCase();
    const health = currentLanguageConfig().health;
    if (isEmergencyPrompt(text)) {
      return health.emergency;
    }
    if (isHealthExecutionPrompt(text)) {
      return health.execution;
    }
    if (/\b(telehealth|prepare.*telehealth)\b/.test(text)) {
      return health.telehealth;
    }
    if (/\b(mobile clinic|rural health|community health)\b/.test(text)) {
      return health.mobileClinic;
    }
    if (/\b(pharmacy|medication|medicine|refill request)\b/.test(text)) {
      return health.pharmacy;
    }
    if (/\b(transportation|ride|access care|care access|care navigation|doctor)\b/.test(text)) {
      return health.transportation;
    }
    return health.default;
  }

  function introResponse() {
    return currentLanguageConfig().intro;
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
      const config = currentLanguageConfig();
      const polishedVoice = choosePolishedVoice(selectedLanguage) || choosePolishedEnglishVoice();
      if (polishedVoice) {
        utterance.voice = polishedVoice;
        utterance.lang = polishedVoice.lang || config.speechLang;
      } else {
        utterance.lang = config.speechLang;
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
    if (isStopMusicCommand(transcript)) {
      stopDemoMusic({ announce: true });
      bridge?.showResponse?.(MUSIC_STOPPED_RESPONSE, { source: COMMAND_SOURCE, musicDemo: true, blocked: false });
      return;
    }
    if (isKenyaMusicCommand(transcript)) {
      const started = startKenyaDemoMusic();
      const response = started ? KENYA_DEMO_MUSIC_RESPONSE : MUSIC_USER_INTERACTION_REQUIRED;
      bridge?.showResponse?.(response, { source: COMMAND_SOURCE, musicDemo: true, blocked: false });
      setTranscript(response);
      speak(response);
      return;
    }
    if (isLanguageSwitchCommand(transcript)) {
      const languageKey = languageKeyFromText(transcript);
      const response = setDemoLanguage(languageKey, { speak: false });
      bridge?.showResponse?.(response, { source: COMMAND_SOURCE, languageSwitch: true, blocked: false });
      speak(response);
      return;
    }
    if (isEmergencyPrompt(transcript) || isHealthExecutionPrompt(transcript) || isHealthAccessPrompt(transcript)) {
      const blocked = isEmergencyPrompt(transcript) || isHealthExecutionPrompt(transcript);
      const response = healthAccessResponse(transcript);
      bridge?.showResponse?.(response, { source: COMMAND_SOURCE, blocked, healthAccess: true, language: selectedLanguage });
      setTranscript(`Heard: ${transcript}`);
      speak(response);
      return;
    }
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

  function changeLanguageFromSelector(event) {
    const languageKey = event?.currentTarget?.value;
    const response = setDemoLanguage(languageKey);
    const bridge = window.NexusVoiceDemoShellBridge;
    if (response) bridge?.showResponse?.(response, { source: COMMAND_SOURCE, languageSwitch: true, blocked: false });
  }

  function stopMusicFromButton() {
    stopDemoMusic({ announce: true });
    const bridge = window.NexusVoiceDemoShellBridge;
    bridge?.showResponse?.(MUSIC_STOPPED_RESPONSE, { source: COMMAND_SOURCE, musicDemo: true, blocked: false });
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
    recognition.lang = currentLanguageConfig().speechLang || document.documentElement.lang || navigator.language || "en-US";
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
    const selector = languageSelector();
    const stopMusic = stopMusicButton();
    if (!talkButton) return;
    setStatus(recognitionCtor() ? STATUS_READY : STATUS_UNSUPPORTED);
    talkButton.addEventListener("click", startPushToTalk);
    intro?.addEventListener("click", introduceNexus);
    selector?.addEventListener("change", changeLanguageFromSelector);
    stopMusic?.addEventListener("click", stopMusicFromButton);
    quickPromptButtons().forEach(promptButton => {
      promptButton.addEventListener("click", runQuickPrompt);
    });
  }

  window.NexusVoiceDemoShell = {
    startPushToTalk,
    introduceNexus,
    setDemoLanguage,
    startKenyaDemoMusic,
    stopDemoMusic,
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
