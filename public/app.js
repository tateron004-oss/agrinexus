let data = null;
let map = null;
let layers = {};
let selectedLearningTrack = "All";
let selectedPersona = localStorage.getItem("agrinexusPersona") || "farmer";
let pendingWorkflow = null;
let lastFocusedElement = null;
let voiceRecognition = null;
let lastVoiceResponse = "Ready for a command.";
let voiceFirstMode = localStorage.getItem("agrinexusVoiceFirst") !== "off";
let voiceAutoRestart = voiceFirstMode;
let voiceStopRequested = false;
let voiceSpeaking = false;
let agentReasoningVisible = localStorage.getItem("agrinexusReasoningVisible") === "true";
const accessibilityPrefs = JSON.parse(localStorage.getItem("agrinexusAccessibility") || "{}");
const originalTextNodes = new WeakMap();
let deferredInstallPrompt = null;

const countryLanguageMap = {
  nigeria: "en",
  kenya: "sw",
  egypt: "ar",
  drc: "fr"
};
const voiceLocaleMap = {
  en: "en-US",
  fr: "fr-FR",
  sw: "sw-KE",
  ar: "ar-EG"
};
const voiceLanguageNames = {
  en: "English",
  fr: "French",
  sw: "Kiswahili",
  ar: "Arabic"
};
let voiceTranslationToken = 0;

const countryLanguageLabel = {
  nigeria: "English",
  kenya: "Kiswahili",
  egypt: "Arabic",
  drc: "Francais"
};

const countryDisplayLabel = {
  nigeria: "Nigeria - English",
  kenya: "Kenya - Kiswahili",
  egypt: "Egypt - Arabic",
  drc: "DRC - Francais"
};

const workspaceCopy = {
  dashboard: {
    title: "Dashboard",
    description: "Choose a simple action, run a pilot, or open a live module."
  },
  learning: {
    title: "Learning & Development",
    description: "Start courses, complete lessons, issue certificates, and translate training content."
  },
  workforce: {
    title: "Workforce",
    description: "Apply for roles, review skill gaps, plan shifts, and track workforce readiness."
  },
  health: {
    title: "AFAYAI Health",
    description: "Run accessible telehealth, triage visits, care plans, and patient support workflows."
  },
  trade: {
    title: "Agritrade",
    description: "Manage crops, buyers, orders, logistics, wallet actions, and market support."
  },
  map: {
    title: "Map & AI",
    description: "View country operations, drone missions, provider status, and location intelligence."
  },
  agent: {
    title: "Agent AI",
    description: "Use voice or text commands to route tasks across the platform."
  },
  integrations: {
    title: "Integrations",
    description: "Check live engine status, provider endpoints, API readiness, and production setup."
  },
  admin: {
    title: "Admin",
    description: "Review subscribers, system readiness, evidence, and operator controls."
  },
  profile: {
    title: "Profile",
    description: "Manage user settings, accessibility preferences, language, and saved progress."
  }
};

const workspaceTranslations = {
  fr: {
    "Dashboard": "Tableau de bord",
    "Choose a simple action, run a pilot, or open a live module.": "Choisissez une action simple, lancez un pilote ou ouvrez un module actif.",
    "Learning & Development": "Apprentissage et developpement",
    "Start courses, complete lessons, issue certificates, and translate training content.": "Commencez des cours, terminez des lecons, emettez des certificats et traduisez le contenu de formation.",
    "Workforce": "Main-d'oeuvre",
    "Apply for roles, review skill gaps, plan shifts, and track workforce readiness.": "Postulez a des roles, examinez les ecarts de competences, planifiez les quarts et suivez la preparation.",
    "AFAYAI Health": "Sante AFAYAI",
    "Run accessible telehealth, triage visits, care plans, and patient support workflows.": "Lancez la telesante accessible, le triage, les plans de soins et les flux de soutien patient.",
    "Agritrade": "Agritrade",
    "Manage crops, buyers, orders, logistics, wallet actions, and market support.": "Gerez cultures, acheteurs, commandes, logistique, wallet et support marche.",
    "Map & AI": "Carte et IA",
    "View country operations, drone missions, provider status, and location intelligence.": "Consultez operations pays, missions drone, etat fournisseur et intelligence geographique.",
    "Agent AI": "Agent IA",
    "Use voice or text commands to route tasks across the platform.": "Utilisez la voix ou le texte pour orienter les taches dans toute la plateforme.",
    "Integrations": "Integrations",
    "Check live engine status, provider endpoints, API readiness, and production setup.": "Verifiez l'etat des moteurs, endpoints fournisseurs, API et configuration production.",
    "Admin": "Admin",
    "Review subscribers, system readiness, evidence, and operator controls.": "Revoyez abonnes, preparation systeme, preuves et controles operateur.",
    "Profile": "Profil",
    "Manage user settings, accessibility preferences, language, and saved progress.": "Gerez parametres, preferences d'accessibilite, langue et progression sauvegardee."
  },
  sw: {
    "Dashboard": "Dashibodi",
    "Choose a simple action, run a pilot, or open a live module.": "Chagua hatua rahisi, endesha jaribio, au fungua moduli hai.",
    "Learning & Development": "Mafunzo na Maendeleo",
    "Start courses, complete lessons, issue certificates, and translate training content.": "Anza kozi, kamilisha masomo, toa vyeti, na tafsiri maudhui ya mafunzo.",
    "Workforce": "Nguvukazi",
    "Apply for roles, review skill gaps, plan shifts, and track workforce readiness.": "Omba nafasi, kagua mapungufu ya ujuzi, panga zamu, na fuatilia utayari wa kazi.",
    "AFAYAI Health": "Afya AFAYAI",
    "Run accessible telehealth, triage visits, care plans, and patient support workflows.": "Endesha teleshauri jumuishi, uchunguzi wa awali, mipango ya huduma, na msaada wa mgonjwa.",
    "Agritrade": "Agritrade",
    "Manage crops, buyers, orders, logistics, wallet actions, and market support.": "Simamia mazao, wanunuzi, oda, usafirishaji, pochi, na msaada wa soko.",
    "Map & AI": "Ramani na AI",
    "View country operations, drone missions, provider status, and location intelligence.": "Tazama shughuli za nchi, misheni za drone, hali ya watoa huduma, na taarifa za eneo.",
    "Agent AI": "Wakala AI",
    "Use voice or text commands to route tasks across the platform.": "Tumia amri za sauti au maandishi kuelekeza kazi kwenye jukwaa.",
    "Integrations": "Miunganisho",
    "Check live engine status, provider endpoints, API readiness, and production setup.": "Kagua hali ya injini, endpoints za watoa huduma, utayari wa API, na usanidi wa uzalishaji.",
    "Admin": "Admin",
    "Review subscribers, system readiness, evidence, and operator controls.": "Kagua watumiaji, utayari wa mfumo, ushahidi, na udhibiti wa mwendeshaji.",
    "Profile": "Wasifu",
    "Manage user settings, accessibility preferences, language, and saved progress.": "Simamia mipangilio, mapendeleo ya ufikivu, lugha, na maendeleo yaliyohifadhiwa."
  },
  ar: {
    "Dashboard": "\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",
    "Choose a simple action, run a pilot, or open a live module.": "\u0627\u062e\u062a\u0631 \u0625\u062c\u0631\u0627\u0621\u0627 \u0628\u0633\u064a\u0637\u0627 \u0623\u0648 \u0634\u063a\u0644 \u062a\u062c\u0631\u0628\u0629 \u0623\u0648 \u0627\u0641\u062a\u062d \u0648\u062d\u062f\u0629 \u0646\u0634\u0637\u0629.",
    "Learning & Development": "\u0627\u0644\u062a\u0639\u0644\u0645 \u0648\u0627\u0644\u062a\u0637\u0648\u064a\u0631",
    "Start courses, complete lessons, issue certificates, and translate training content.": "\u0627\u0628\u062f\u0623 \u0627\u0644\u062f\u0648\u0631\u0627\u062a \u0648\u0623\u0643\u0645\u0644 \u0627\u0644\u062f\u0631\u0648\u0633 \u0648\u0623\u0635\u062f\u0631 \u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a \u0648\u062a\u0631\u062c\u0645 \u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u062a\u062f\u0631\u064a\u0628.",
    "Workforce": "\u0627\u0644\u0642\u0648\u0649 \u0627\u0644\u0639\u0627\u0645\u0644\u0629",
    "Apply for roles, review skill gaps, plan shifts, and track workforce readiness.": "\u0642\u062f\u0645 \u0639\u0644\u0649 \u0627\u0644\u0648\u0638\u0627\u0626\u0641 \u0648\u0631\u0627\u062c\u0639 \u0641\u062c\u0648\u0627\u062a \u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0648\u062e\u0637\u0637 \u0627\u0644\u0648\u0631\u062f\u064a\u0627\u062a \u0648\u062a\u0627\u0628\u0639 \u0627\u0644\u062c\u0627\u0647\u0632\u064a\u0629.",
    "AFAYAI Health": "\u0635\u062d\u0629 AFAYAI",
    "Run accessible telehealth, triage visits, care plans, and patient support workflows.": "\u0634\u063a\u0644 \u0627\u0644\u0637\u0628 \u0639\u0646 \u0628\u0639\u062f \u0627\u0644\u0645\u064a\u0633\u0631 \u0648\u0627\u0644\u0641\u0631\u0632 \u0648\u062e\u0637\u0637 \u0627\u0644\u0631\u0639\u0627\u064a\u0629 \u0648\u062f\u0639\u0645 \u0627\u0644\u0645\u0631\u064a\u0636.",
    "Agritrade": "\u0627\u0644\u062a\u062c\u0627\u0631\u0629 \u0627\u0644\u0632\u0631\u0627\u0639\u064a\u0629",
    "Manage crops, buyers, orders, logistics, wallet actions, and market support.": "\u0623\u062f\u0631 \u0627\u0644\u0645\u062d\u0627\u0635\u064a\u0644 \u0648\u0627\u0644\u0645\u0634\u062a\u0631\u064a\u0646 \u0648\u0627\u0644\u0637\u0644\u0628\u0627\u062a \u0648\u0627\u0644\u0644\u0648\u062c\u0633\u062a\u064a\u0627\u062a \u0648\u0627\u0644\u0645\u062d\u0641\u0638\u0629 \u0648\u062f\u0639\u0645 \u0627\u0644\u0633\u0648\u0642.",
    "Map & AI": "\u0627\u0644\u062e\u0631\u064a\u0637\u0629 \u0648\u0627\u0644\u0630\u0643\u0627\u0621",
    "View country operations, drone missions, provider status, and location intelligence.": "\u0627\u0639\u0631\u0636 \u0639\u0645\u0644\u064a\u0627\u062a \u0627\u0644\u0628\u0644\u062f \u0648\u0645\u0647\u0627\u0645 \u0627\u0644\u062f\u0631\u0648\u0646 \u0648\u062d\u0627\u0644\u0629 \u0627\u0644\u0645\u0632\u0648\u062f \u0648\u0630\u0643\u0627\u0621 \u0627\u0644\u0645\u0648\u0642\u0639.",
    "Agent AI": "\u0648\u0643\u064a\u0644 \u0627\u0644\u0630\u0643\u0627\u0621",
    "Use voice or text commands to route tasks across the platform.": "\u0627\u0633\u062a\u062e\u062f\u0645 \u0623\u0648\u0627\u0645\u0631 \u0627\u0644\u0635\u0648\u062a \u0623\u0648 \u0627\u0644\u0646\u0635 \u0644\u062a\u0648\u062c\u064a\u0647 \u0627\u0644\u0645\u0647\u0627\u0645 \u0639\u0628\u0631 \u0627\u0644\u0645\u0646\u0635\u0629.",
    "Integrations": "\u0627\u0644\u062a\u0643\u0627\u0645\u0644\u0627\u062a",
    "Check live engine status, provider endpoints, API readiness, and production setup.": "\u0627\u0641\u062d\u0635 \u062d\u0627\u0644\u0629 \u0627\u0644\u0645\u062d\u0631\u0643\u0627\u062a \u0648\u0646\u0642\u0627\u0637 \u0627\u0644\u0645\u0632\u0648\u062f \u0648\u062c\u0627\u0647\u0632\u064a\u0629 API \u0648\u0625\u0639\u062f\u0627\u062f \u0627\u0644\u0625\u0646\u062a\u0627\u062c.",
    "Admin": "\u0627\u0644\u0625\u062f\u0627\u0631\u0629",
    "Review subscribers, system readiness, evidence, and operator controls.": "\u0631\u0627\u062c\u0639 \u0627\u0644\u0645\u0634\u062a\u0631\u0643\u064a\u0646 \u0648\u062c\u0627\u0647\u0632\u064a\u0629 \u0627\u0644\u0646\u0638\u0627\u0645 \u0648\u0627\u0644\u0623\u062f\u0644\u0629 \u0648\u062a\u062d\u0643\u0645 \u0627\u0644\u0645\u0634\u063a\u0644.",
    "Profile": "\u0627\u0644\u0645\u0644\u0641",
    "Manage user settings, accessibility preferences, language, and saved progress.": "\u0623\u062f\u0631 \u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0648\u062a\u0641\u0636\u064a\u0644\u0627\u062a \u0627\u0644\u0648\u0635\u0648\u0644 \u0648\u0627\u0644\u0644\u063a\u0629 \u0648\u0627\u0644\u062a\u0642\u062f\u0645 \u0627\u0644\u0645\u062d\u0641\u0648\u0638."
  }
};

const $ = selector => document.querySelector(selector);
const $$ = selector => Array.from(document.querySelectorAll(selector));
const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, character => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "\"": "&quot;",
  "'": "&#39;"
}[character]));
const learningCopy = {
  en: {
    studio: "Learning studio",
    title: "Learning & Development",
    intro: "Build readiness through guided courses, quizzes, certificates, and workforce-aligned skills.",
    readiness: "Readiness",
    focus: "Current focus",
    choose: "Choose a course",
    emptySummary: "Start a course to begin building a verified learning record.",
    quiz: "Complete quiz",
    certificate: "Issue certificate",
    completeLesson: "Complete lesson",
    record: "Learning Record",
    certificates: "Certificates",
    allTracks: "All tracks",
    complete: "complete",
    status: "Status",
    impact: "Readiness impact",
    duration: "Duration",
    continueCourse: "Continue course",
    startCourse: "Start course",
    path: "Learning path",
    active: "Active course",
    hours: "Learning hours",
    streak: "Streak",
    score: "Quiz score",
    noCertificates: "No certificates issued yet.",
    action: "action(s)"
  },
  fr: {
    studio: "Studio d'apprentissage",
    title: "Apprentissage et developpement",
    intro: "Renforcez la preparation avec des cours guides, des quiz, des certificats et des competences professionnelles.",
    readiness: "Preparation",
    focus: "Priorite actuelle",
    choose: "Choisir un cours",
    emptySummary: "Commencez un cours pour creer un dossier d'apprentissage verifie.",
    quiz: "Terminer le quiz",
    certificate: "Emettre le certificat",
    completeLesson: "Terminer la lecon",
    record: "Dossier d'apprentissage",
    certificates: "Certificats",
    allTracks: "Toutes les pistes",
    complete: "termine",
    status: "Statut",
    impact: "Impact preparation",
    duration: "Duree",
    continueCourse: "Continuer le cours",
    startCourse: "Commencer le cours",
    path: "Parcours",
    active: "Cours actif",
    hours: "Heures",
    streak: "Serie",
    score: "Score quiz",
    noCertificates: "Aucun certificat emis.",
    action: "action(s)"
  },
  sw: {
    studio: "Kituo cha kujifunza",
    title: "Mafunzo na maendeleo",
    intro: "Jenga utayari kupitia kozi, maswali, vyeti, na ujuzi wa kazi.",
    readiness: "Utayari",
    focus: "Lengo la sasa",
    choose: "Chagua kozi",
    emptySummary: "Anza kozi ili kujenga rekodi ya kujifunza iliyothibitishwa.",
    quiz: "Kamilisha jaribio",
    certificate: "Toa cheti",
    completeLesson: "Kamilisha somo",
    record: "Rekodi ya kujifunza",
    certificates: "Vyeti",
    allTracks: "Njia zote",
    complete: "imekamilika",
    status: "Hali",
    impact: "Ongezeko la utayari",
    duration: "Muda",
    continueCourse: "Endelea na kozi",
    startCourse: "Anza kozi",
    path: "Njia ya kujifunza",
    active: "Kozi hai",
    hours: "Saa za kujifunza",
    streak: "Mfululizo",
    score: "Alama ya jaribio",
    noCertificates: "Hakuna cheti kilichotolewa bado.",
    action: "hatua"
  },
  ar: {
    studio: "استوديو التعلم",
    title: "التعلم والتطوير",
    intro: "ابن الجاهزية عبر دورات موجهة واختبارات وشهادات ومهارات مرتبطة بالعمل.",
    readiness: "الجاهزية",
    focus: "التركيز الحالي",
    choose: "اختر دورة",
    emptySummary: "ابدأ دورة لبناء سجل تعلم موثق.",
    quiz: "إكمال الاختبار",
    certificate: "إصدار الشهادة",
    record: "سجل التعلم",
    certificates: "الشهادات",
    allTracks: "كل المسارات",
    complete: "مكتمل",
    status: "الحالة",
    impact: "تأثير الجاهزية",
    duration: "المدة",
    continueCourse: "متابعة الدورة",
    startCourse: "بدء الدورة",
    path: "مسار التعلم",
    active: "الدورة النشطة",
    hours: "ساعات التعلم",
    streak: "التتابع",
    score: "نتيجة الاختبار",
    noCertificates: "لا توجد شهادات بعد.",
    action: "إجراء"
  }
};

const platformCopy = {
  en: {
    nav: ["Dashboard", "Learning", "Workforce", "AFAYAI Health", "Agritrade", "Map & AI", "Agent AI", "Integrations", "Admin", "Profile"],
    logout: "Logout",
    dashboardTitle: "Command Dashboard",
    dashboardIntro: "Start real learning, workforce, health, trade, AI, and integration workflows from one operations queue.",
    learningTitle: "Learning & Development",
    learningIntro: "Build readiness through guided courses, quizzes, certificates, and workforce-aligned skills.",
    workforceTitle: "Workforce Pipeline",
    workforceIntro: "Move from training readiness into applications, interviews, mentor support, scheduled shifts, and paid placement opportunities.",
    healthTitle: "AFAYAI Health",
    healthIntro: "Manage patient intakes, representative escalation, safety reviews, and care-plan guidance from one supervised care desk.",
    tradeTitle: "Agritech + Agritrade",
    tradeIntro: "Manage product lots, buyer interest, wallet transactions, route checkpoints, and logistics handoffs.",
    mapTitle: "Global Map & AI",
    mapIntro: "Monitor country context, route movement, provider status, and AI recommendations from one operations view.",
    integrationsTitle: "Integrations",
    integrationsIntro: "Monitor sandbox and live-ready provider paths across learning, workforce, healthcare, AI, maps, and persistence.",
    adminTitle: "Admin Control Room",
    adminIntro: "Review users, module health, provider activity, and audit-style events across the platform.",
    profileTitle: "Unified Profile",
    profileIntro: "The profile reflects committed backend state across all platform domains.",
    languageToast: "Platform language updated"
  },
  fr: {
    nav: ["Tableau de bord", "Apprentissage", "Main-d'oeuvre", "Sante AFAYAI", "Agritrade", "Carte et IA", "Agent IA", "Integrations", "Admin", "Profil"],
    logout: "Deconnexion",
    dashboardTitle: "Tableau de commande",
    dashboardIntro: "Lancez les flux d'apprentissage, de main-d'oeuvre, de sante, de commerce, d'IA et d'integration depuis une seule file operationnelle.",
    learningTitle: "Apprentissage et developpement",
    learningIntro: "Renforcez la preparation avec des cours guides, des quiz, des certificats et des competences professionnelles.",
    workforceTitle: "Pipeline main-d'oeuvre",
    workforceIntro: "Passez de la preparation aux candidatures, entretiens, mentors, quarts planifies et opportunites remunerees.",
    healthTitle: "Sante AFAYAI",
    healthIntro: "Gerez les admissions patient, l'escalade representant, les revues securite et les plans de soins supervises.",
    tradeTitle: "Agritech + Agritrade",
    tradeIntro: "Gerez lots produits, interet acheteur, transactions wallet, points de route et passations logistiques.",
    mapTitle: "Carte globale et IA",
    mapIntro: "Surveillez pays, routes, fournisseurs et recommandations IA depuis une vue operationnelle.",
    integrationsTitle: "Integrations",
    integrationsIntro: "Surveillez les chemins fournisseurs locaux et prets pour le direct dans tous les modules.",
    adminTitle: "Salle de controle admin",
    adminIntro: "Revoyez utilisateurs, sante modules, activite fournisseurs et evenements d'audit.",
    profileTitle: "Profil unifie",
    profileIntro: "Le profil reflete l'etat backend engage dans tous les domaines.",
    languageToast: "Langue de la plateforme mise a jour"
  },
  sw: {
    nav: ["Dashibodi", "Mafunzo", "Nguvukazi", "Afya AFAYAI", "Agritrade", "Ramani na AI", "Wakala AI", "Miunganisho", "Admin", "Wasifu"],
    logout: "Toka",
    dashboardTitle: "Dashibodi ya Amri",
    dashboardIntro: "Anzisha kazi za mafunzo, nguvu kazi, afya, biashara, AI, na miunganisho kutoka foleni moja ya uendeshaji.",
    learningTitle: "Mafunzo na maendeleo",
    learningIntro: "Jenga utayari kupitia kozi, maswali, vyeti, na ujuzi wa kazi.",
    workforceTitle: "Mtiririko wa nguvukazi",
    workforceIntro: "Sogeza mtumiaji kutoka utayari wa mafunzo hadi maombi, mahojiano, mshauri, zamu, na ajira yenye malipo.",
    healthTitle: "Afya AFAYAI",
    healthIntro: "Simamia usajili wa wagonjwa, mwakilishi, ukaguzi wa usalama, na mipango ya huduma.",
    tradeTitle: "Agritech + Agritrade",
    tradeIntro: "Simamia bidhaa, wanunuzi, malipo ya wallet, vituo vya njia, na kazi za usafirishaji.",
    mapTitle: "Ramani ya dunia na AI",
    mapIntro: "Fuatilia nchi, njia, watoa huduma, na mapendekezo ya AI kutoka sehemu moja ya kazi.",
    integrationsTitle: "Miunganisho",
    integrationsIntro: "Fuatilia njia za watoa huduma katika mafunzo, kazi, afya, AI, ramani, na hifadhi.",
    adminTitle: "Chumba cha udhibiti",
    adminIntro: "Kagua watumiaji, afya ya moduli, shughuli za watoa huduma, na rekodi za ukaguzi.",
    profileTitle: "Wasifu uliounganishwa",
    profileIntro: "Wasifu unaonyesha hali ya backend katika kila eneo la jukwaa.",
    languageToast: "Lugha ya jukwaa imesasishwa"
  },
  ar: {
    nav: ["\u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645", "\u0627\u0644\u062a\u0639\u0644\u0645", "\u0627\u0644\u0642\u0648\u0649 \u0627\u0644\u0639\u0627\u0645\u0644\u0629", "\u0635\u062d\u0629 AFAYAI", "\u0627\u0644\u062a\u062c\u0627\u0631\u0629", "\u0627\u0644\u062e\u0631\u064a\u0637\u0629 \u0648\u0627\u0644\u0630\u0643\u0627\u0621", "\u0648\u0643\u064a\u0644 AI", "\u0627\u0644\u062a\u0643\u0627\u0645\u0644\u0627\u062a", "\u0627\u0644\u0625\u062f\u0627\u0631\u0629", "\u0627\u0644\u0645\u0644\u0641"],
    logout: "\u062a\u0633\u062c\u064a\u0644 \u062e\u0631\u0648\u062c",
    dashboardTitle: "\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",
    dashboardIntro: "\u0627\u0628\u062f\u0623 \u062a\u062f\u0641\u0642\u0627\u062a \u0627\u0644\u062a\u0639\u0644\u0645 \u0648\u0627\u0644\u0639\u0645\u0644 \u0648\u0627\u0644\u0635\u062d\u0629 \u0648\u0627\u0644\u062a\u062c\u0627\u0631\u0629 \u0648\u0627\u0644\u0630\u0643\u0627\u0621 \u0645\u0646 \u0637\u0627\u0628\u0648\u0631 \u0648\u0627\u062d\u062f.",
    learningTitle: "\u0627\u0644\u062a\u0639\u0644\u0645 \u0648\u0627\u0644\u062a\u0637\u0648\u064a\u0631",
    learningIntro: "\u0627\u0628\u0646 \u0627\u0644\u062c\u0627\u0647\u0632\u064a\u0629 \u0639\u0628\u0631 \u062f\u0648\u0631\u0627\u062a \u0648\u0627\u062e\u062a\u0628\u0627\u0631\u0627\u062a \u0648\u0634\u0647\u0627\u062f\u0627\u062a.",
    workforceTitle: "\u0645\u0633\u0627\u0631 \u0627\u0644\u0642\u0648\u0649 \u0627\u0644\u0639\u0627\u0645\u0644\u0629",
    workforceIntro: "\u062d\u0631\u0643 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0645\u0646 \u0627\u0644\u062a\u062f\u0631\u064a\u0628 \u0625\u0644\u0649 \u0627\u0644\u0637\u0644\u0628\u0627\u062a \u0648\u0627\u0644\u0645\u0642\u0627\u0628\u0644\u0627\u062a \u0648\u0627\u0644\u0639\u0645\u0644.",
    healthTitle: "\u0635\u062d\u0629 AFAYAI",
    healthIntro: "\u0623\u062f\u0631 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0627\u0644\u0645\u0631\u0636\u0649 \u0648\u0627\u0644\u062a\u0635\u0639\u064a\u062f \u0648\u062e\u0637\u0637 \u0627\u0644\u0631\u0639\u0627\u064a\u0629.",
    tradeTitle: "\u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0627\u0644\u0632\u0631\u0627\u0639\u064a\u0629 + \u0627\u0644\u062a\u062c\u0627\u0631\u0629",
    tradeIntro: "\u0623\u062f\u0631 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a \u0648\u0627\u0644\u0645\u062f\u0641\u0648\u0639\u0627\u062a \u0648\u0627\u0644\u0644\u0648\u062c\u0633\u062a\u064a\u0627\u062a.",
    mapTitle: "\u0627\u0644\u062e\u0631\u064a\u0637\u0629 \u0627\u0644\u0639\u0627\u0644\u0645\u064a\u0629 \u0648\u0627\u0644\u0630\u0643\u0627\u0621",
    mapIntro: "\u0631\u0627\u0642\u0628 \u0627\u0644\u0628\u0644\u062f \u0648\u0627\u0644\u0637\u0631\u064a\u0642 \u0648\u062d\u0627\u0644\u0629 \u0627\u0644\u0645\u0632\u0648\u062f.",
    integrationsTitle: "\u0627\u0644\u062a\u0643\u0627\u0645\u0644\u0627\u062a",
    integrationsIntro: "\u0631\u0627\u0642\u0628 \u0645\u0633\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u0632\u0648\u062f\u064a\u0646 \u0639\u0628\u0631 \u0643\u0644 \u0627\u0644\u0648\u062d\u062f\u0627\u062a.",
    adminTitle: "\u063a\u0631\u0641\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0627\u0644\u0625\u062f\u0627\u0631\u064a\u0629",
    adminIntro: "\u0631\u0627\u062c\u0639 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646 \u0648\u0635\u062d\u0629 \u0627\u0644\u0648\u062d\u062f\u0627\u062a \u0648\u0627\u0644\u062a\u062f\u0642\u064a\u0642.",
    profileTitle: "\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0645\u0648\u062d\u062f",
    profileIntro: "\u064a\u0639\u0643\u0633 \u0627\u0644\u0645\u0644\u0641 \u062d\u0627\u0644\u0629 \u0627\u0644\u0646\u0638\u0627\u0645 \u0639\u0628\u0631 \u0643\u0644 \u0627\u0644\u0645\u062c\u0627\u0644\u0627\u062a.",
    languageToast: "\u062a\u0645 \u062a\u062d\u062f\u064a\u062b \u0644\u063a\u0629 \u0627\u0644\u0645\u0646\u0635\u0629"
  }
};

const contentTranslations = {
  fr: {
    "Nexus, apply for that job": "Nexus, aide-moi a postuler a cet emploi",
    "Nexus, what can you do": "Nexus, que peux-tu faire",
    "Nexus, show voice help": "Nexus, affiche l'aide vocale",
    "Nexus, run full mission": "Nexus, lance la mission complete",
    "Nexus, test provider engines": "Nexus, teste les moteurs fournisseurs",
    "Nexus, open learning": "Nexus, ouvre l'apprentissage",
    "Nexus, open workforce": "Nexus, ouvre la main-d'oeuvre",
    "Nexus, open telehealth": "Nexus, ouvre la telesante",
    "Nexus, open agritrade": "Nexus, ouvre agritrade",
    "Nexus, open maps": "Nexus, ouvre les cartes",
    "Nexus, open admin": "Nexus, ouvre l'administration",
    "Nexus, build captions": "Nexus, cree les sous-titres",
    "Nexus, create audio guide": "Nexus, cree le guide audio",
    "Nexus, complete my lesson": "Nexus, termine ma lecon",
    "Nexus, issue my certificate": "Nexus, emets mon certificat",
    "Nexus, review my workforce gaps": "Nexus, analyse mes ecarts de preparation",
    "Nexus, schedule my shift": "Nexus, planifie mon quart",
    "Nexus, prepare me for an interview": "Nexus, prepare-moi pour un entretien",
    "Nexus, start telehealth intake": "Nexus, demarre l'admission telesante",
    "Nexus, connect me to a provider": "Nexus, connecte-moi a un fournisseur",
    "Nexus, capture vitals": "Nexus, capture les signes vitaux",
    "Nexus, create a referral": "Nexus, cree une reference",
    "Nexus, schedule my follow-up": "Nexus, planifie mon suivi",
    "Nexus, contact my buyer": "Nexus, contacte mon acheteur",
    "Nexus, create buyer order": "Nexus, cree une commande acheteur",
    "Nexus, run drone scan": "Nexus, lance le scan drone",
    "Nexus, assign field task": "Nexus, assigne une tache terrain",
    "Nexus, check my route risk": "Nexus, verifie le risque de mon trajet",
    "Command help": "Aide commandes",
    "Say or tap a command": "Dites ou touchez une commande",
    "Voice help": "Aide vocale",
    "Voice command help is open. Say a command or tap one to run it.": "L'aide vocale est ouverte. Dites une commande ou touchez-la pour l'executer.",
    "Voice command help opened": "Aide vocale ouverte",
    "Voice command help closed": "Aide vocale fermee",
    "Go to a workspace": "Aller a un espace de travail",
    "Use these when someone is new to the platform.": "Utilisez ceci quand une personne decouvre la plateforme.",
    "Open the main work areas without searching menus.": "Ouvrez les espaces principaux sans chercher dans les menus.",
    "Run training, accessibility, and certificate workflows.": "Lancez les flux de formation, accessibilite et certificat.",
    "Help a user find, prepare for, and apply to work.": "Aidez un utilisateur a trouver, preparer et demander un emploi.",
    "Telehealth": "Telesante",
    "Guide patients through care access and support.": "Guidez les patients vers l'acces aux soins et au support.",
    "Farm, Trade, And Drones": "Ferme, commerce et drones",
    "Support farmers, buyers, field teams, and crop intelligence.": "Soutenez agriculteurs, acheteurs, equipes terrain et intelligence agricole.",
    "English": "Anglais",
    "French": "Francais",
    "Kiswahili": "Kiswahili",
    "Arabic": "Arabe",
    "Start course": "Commencer le cours",
    "Complete lesson": "Terminer la lecon",
    "Complete quiz": "Terminer le quiz",
    "Issue certificate": "Emettre le certificat",
    "Build profile": "Creer le profil",
    "Apply to role": "Postuler",
    "Schedule interview": "Planifier l'entretien",
    "Assign mentor": "Assigner un mentor",
    "Start shift": "Demarrer le quart",
    "Start intake": "Demarrer l'admission",
    "Connect representative": "Connecter un representant",
    "Run safety review": "Lancer la revue securite",
    "Generate care plan": "Generer le plan de soins",
    "Create order": "Creer la commande",
    "Advance order": "Avancer la commande",
    "Post M-Pesa payment": "Publier paiement M-Pesa",
    "Run price AI": "Lancer IA prix",
    "Run route AI": "Lancer IA route",
    "Run command center": "Lancer le centre de commande",
    "Inspect route": "Inspecter la route",
    "Assess route risk": "Evaluer le risque route",
    "Test all providers": "Tester tous les fournisseurs",
    "Run health check": "Lancer le controle sante",
    "Open profile": "Ouvrir le profil",
    "Continue active course": "Continuer le cours actif",
    "Start learning record": "Demarrer le dossier d'apprentissage",
    "Build workforce pipeline": "Construire le pipeline main-d'oeuvre",
    "Move placement forward": "Faire avancer le placement",
    "Open care case": "Ouvrir un dossier de soins",
    "Review care operations": "Revoir les operations de soins",
    "Create market order": "Creer une commande marche",
    "Advance trade order": "Avancer la commande commerciale",
    "Run route intelligence": "Lancer l'intelligence route",
    "Test all engines": "Tester tous les moteurs",
    "Run platform health": "Controler la sante plateforme",
    "Review unified record": "Revoir le dossier unifie",
    "Today's Work Queue": "File de travail du jour",
    "Funding Demo Proof": "Preuves pour demo financement",
    "Active Operating Region": "Region operationnelle active",
    "Learner Workbench": "Poste de travail apprenant",
    "Training Catalog": "Catalogue de formation",
    "Training Evidence": "Preuves de formation",
    "Placement Desk": "Bureau de placement",
    "Readiness Gates": "Seuils de preparation",
    "Support & Handoff": "Support et passation",
    "Patient Access Desk": "Bureau acces patient",
    "Case Records": "Dossiers de cas",
    "Public Health Context": "Contexte de sante publique",
    "Market Operations Queue": "File operations marche",
    "Shipment Lane": "Couloir expedition",
    "Product & Payment Evidence": "Preuves produit et paiement",
    "Route Operations Desk": "Bureau operations route",
    "Intelligence Runs": "Analyses IA",
    "Geospatial Evidence": "Preuves geospatiales",
    "Connection Workbench": "Poste de connexion",
    "Module Activation Desk": "Bureau activation modules",
    "Setup Evidence": "Preuves de configuration",
    "Operator Queue": "File operateur",
    "Module Health Desk": "Bureau sante modules",
    "Audit & Activity Evidence": "Preuves audit et activite",
    "Ready": "Pret",
    "Start here": "Commencer ici",
    "Complete": "Termine",
    "Pending": "En attente",
    "Open": "Ouvert",
    "Connected": "Connecte",
    "Active": "Actif",
    "Tracked": "Suivi",
    "Audit": "Audit",
    "Activity": "Activite",
    "Provider": "Fournisseur",
    "Credentials": "Identifiants",
    "Status": "Statut",
    "Risk": "Risque",
    "Country": "Pays",
    "Route": "Route",
    "Checkpoint": "Point de controle",
    "Orders": "Commandes",
    "Facilities": "Etablissements",
    "Learning": "Apprentissage",
    "Workforce": "Main-d'oeuvre",
    "Healthcare": "Sante",
    "AgriTrade": "AgriTrade",
    "Integrations": "Integrations",
    "Admin": "Admin",
    "Profile": "Profil"
  },
  sw: {
    "Nexus, apply for that job": "Nexus, nisaidie kuomba kazi hii",
    "Nexus, what can you do": "Nexus, unaweza kufanya nini",
    "Nexus, show voice help": "Nexus, onyesha msaada wa sauti",
    "Nexus, run full mission": "Nexus, endesha kazi kamili",
    "Nexus, test provider engines": "Nexus, jaribu injini za huduma",
    "Nexus, open learning": "Nexus, fungua mafunzo",
    "Nexus, open workforce": "Nexus, fungua nguvukazi",
    "Nexus, open telehealth": "Nexus, fungua afya mtandao",
    "Nexus, open agritrade": "Nexus, fungua agritrade",
    "Nexus, open maps": "Nexus, fungua ramani",
    "Nexus, open admin": "Nexus, fungua admin",
    "Nexus, build captions": "Nexus, tengeneza maelezo ya video",
    "Nexus, create audio guide": "Nexus, tengeneza mwongozo wa sauti",
    "Nexus, complete my lesson": "Nexus, kamilisha somo langu",
    "Nexus, issue my certificate": "Nexus, toa cheti changu",
    "Nexus, review my workforce gaps": "Nexus, kagua mapungufu yangu ya kazi",
    "Nexus, schedule my shift": "Nexus, panga zamu yangu",
    "Nexus, prepare me for an interview": "Nexus, niandae kwa mahojiano",
    "Nexus, start telehealth intake": "Nexus, anza usajili wa afya mtandao",
    "Nexus, connect me to a provider": "Nexus, niunganishe na mtoa huduma",
    "Nexus, capture vitals": "Nexus, chukua vipimo muhimu",
    "Nexus, create a referral": "Nexus, tengeneza rufaa",
    "Nexus, schedule my follow-up": "Nexus, panga ufuatiliaji wangu",
    "Nexus, contact my buyer": "Nexus, wasiliana na mnunuzi wangu",
    "Nexus, create buyer order": "Nexus, tengeneza oda ya mnunuzi",
    "Nexus, run drone scan": "Nexus, endesha ukaguzi wa drone",
    "Nexus, assign field task": "Nexus, toa kazi ya shambani",
    "Nexus, check my route risk": "Nexus, kagua hatari ya njia yangu",
    "Command help": "Msaada wa amri",
    "Say or tap a command": "Sema au gusa amri",
    "Voice help": "Msaada wa sauti",
    "Voice command help is open. Say a command or tap one to run it.": "Msaada wa amri za sauti umefunguliwa. Sema amri au iguse ili kuitekeleza.",
    "Voice command help opened": "Msaada wa sauti umefunguliwa",
    "Voice command help closed": "Msaada wa sauti umefungwa",
    "Go to a workspace": "Nenda kwenye eneo la kazi",
    "Use these when someone is new to the platform.": "Tumia hizi mtu akiwa mpya kwenye jukwaa.",
    "Open the main work areas without searching menus.": "Fungua maeneo makuu bila kutafuta kwenye menyu.",
    "Run training, accessibility, and certificate workflows.": "Endesha kazi za mafunzo, ufikikaji, na vyeti.",
    "Help a user find, prepare for, and apply to work.": "Msaidie mtumiaji kupata, kujiandaa, na kuomba kazi.",
    "Telehealth": "Afya mtandao",
    "Guide patients through care access and support.": "Waongoze wagonjwa kupata huduma na msaada.",
    "Farm, Trade, And Drones": "Shamba, biashara, na drone",
    "Support farmers, buyers, field teams, and crop intelligence.": "Saidia wakulima, wanunuzi, timu za shamba, na taarifa za mazao.",
    "English": "Kiingereza",
    "French": "Kifaransa",
    "Kiswahili": "Kiswahili",
    "Arabic": "Kiarabu",
    "Start course": "Anza kozi",
    "Complete lesson": "Kamilisha somo",
    "Complete quiz": "Kamilisha jaribio",
    "Issue certificate": "Toa cheti",
    "Build profile": "Jenga wasifu",
    "Apply to role": "Omba nafasi",
    "Schedule interview": "Panga mahojiano",
    "Assign mentor": "Mpe mshauri",
    "Start shift": "Anza zamu",
    "Start intake": "Anza usajili",
    "Connect representative": "Unganisha mwakilishi",
    "Run safety review": "Fanya ukaguzi wa usalama",
    "Generate care plan": "Tengeneza mpango wa huduma",
    "Create order": "Tengeneza oda",
    "Advance order": "Sogeza oda",
    "Post M-Pesa payment": "Weka malipo ya M-Pesa",
    "Run price AI": "Endesha AI ya bei",
    "Run route AI": "Endesha AI ya njia",
    "Run command center": "Endesha kituo cha amri",
    "Inspect route": "Kagua njia",
    "Assess route risk": "Tathmini hatari ya njia",
    "Test all providers": "Jaribu watoa huduma wote",
    "Run health check": "Fanya ukaguzi wa afya",
    "Open profile": "Fungua wasifu",
    "Continue active course": "Endelea na kozi hai",
    "Start learning record": "Anza rekodi ya mafunzo",
    "Build workforce pipeline": "Jenga mtiririko wa nguvukazi",
    "Move placement forward": "Sogeza ajira mbele",
    "Open care case": "Fungua kesi ya huduma",
    "Review care operations": "Kagua shughuli za huduma",
    "Create market order": "Tengeneza oda ya soko",
    "Advance trade order": "Sogeza oda ya biashara",
    "Run route intelligence": "Endesha uchambuzi wa njia",
    "Test all engines": "Jaribu injini zote",
    "Run platform health": "Kagua afya ya jukwaa",
    "Review unified record": "Kagua rekodi iliyounganishwa",
    "Today's Work Queue": "Foleni ya kazi ya leo",
    "Funding Demo Proof": "Ushahidi wa demo ya ufadhili",
    "Active Operating Region": "Eneo hai la uendeshaji",
    "Learner Workbench": "Sehemu ya kazi ya mwanafunzi",
    "Training Catalog": "Orodha ya mafunzo",
    "Training Evidence": "Ushahidi wa mafunzo",
    "Placement Desk": "Dawati la ajira",
    "Readiness Gates": "Vigezo vya utayari",
    "Support & Handoff": "Msaada na makabidhiano",
    "Patient Access Desk": "Dawati la huduma ya mgonjwa",
    "Case Records": "Rekodi za kesi",
    "Public Health Context": "Muktadha wa afya ya umma",
    "Market Operations Queue": "Foleni ya shughuli za soko",
    "Shipment Lane": "Njia ya usafirishaji",
    "Product & Payment Evidence": "Ushahidi wa bidhaa na malipo",
    "Route Operations Desk": "Dawati la njia",
    "Intelligence Runs": "Uchambuzi wa AI",
    "Geospatial Evidence": "Ushahidi wa ramani",
    "Connection Workbench": "Sehemu ya miunganisho",
    "Module Activation Desk": "Dawati la kuwezesha moduli",
    "Setup Evidence": "Ushahidi wa usanidi",
    "Operator Queue": "Foleni ya mwendeshaji",
    "Module Health Desk": "Dawati la afya ya moduli",
    "Audit & Activity Evidence": "Ushahidi wa ukaguzi na shughuli",
    "Ready": "Tayari",
    "Start here": "Anza hapa",
    "Complete": "Imekamilika",
    "Pending": "Inasubiri",
    "Open": "Wazi",
    "Connected": "Imeunganishwa",
    "Active": "Hai",
    "Tracked": "Inafuatiliwa",
    "Audit": "Ukaguzi",
    "Activity": "Shughuli",
    "Provider": "Mtoa huduma",
    "Credentials": "Vitambulisho",
    "Status": "Hali",
    "Risk": "Hatari",
    "Country": "Nchi",
    "Route": "Njia",
    "Checkpoint": "Kituo",
    "Orders": "Oda",
    "Facilities": "Vituo",
    "Learning": "Mafunzo",
    "Workforce": "Nguvukazi",
    "Healthcare": "Afya",
    "AgriTrade": "AgriTrade",
    "Integrations": "Miunganisho",
    "Admin": "Admin",
    "Profile": "Wasifu"
  },
  ar: {
    "Nexus, apply for that job": "\u0646\u0643\u0633\u0633\u060c \u0633\u0627\u0639\u062f\u0646\u064a \u0639\u0644\u0649 \u0627\u0644\u062a\u0642\u062f\u064a\u0645 \u0644\u0647\u0630\u0647 \u0627\u0644\u0648\u0638\u064a\u0641\u0629",
    "Nexus, what can you do": "نكسس، ماذا يمكنك أن تفعل",
    "Nexus, show voice help": "نكسس، اعرض مساعدة الصوت",
    "Nexus, run full mission": "نكسس، شغل المهمة الكاملة",
    "Nexus, test provider engines": "نكسس، اختبر محركات المزودين",
    "Nexus, open learning": "نكسس، افتح التعلم",
    "Nexus, open workforce": "نكسس، افتح القوى العاملة",
    "Nexus, open telehealth": "نكسس، افتح الرعاية عن بعد",
    "Nexus, open agritrade": "نكسس، افتح أجريتريد",
    "Nexus, open maps": "نكسس، افتح الخرائط",
    "Nexus, open admin": "نكسس، افتح الإدارة",
    "Nexus, build captions": "نكسس، أنشئ التسميات التوضيحية",
    "Nexus, create audio guide": "نكسس، أنشئ دليلا صوتيا",
    "Nexus, complete my lesson": "نكسس، أكمل درسي",
    "Nexus, issue my certificate": "نكسس، أصدر شهادتي",
    "Nexus, review my workforce gaps": "نكسس، راجع فجوات جاهزيتي للعمل",
    "Nexus, schedule my shift": "نكسس، جدولة ورديتي",
    "Nexus, prepare me for an interview": "نكسس، حضرني للمقابلة",
    "Nexus, start telehealth intake": "نكسس، ابدأ استقبال الرعاية عن بعد",
    "Nexus, connect me to a provider": "نكسس، اربطني بمزود خدمة",
    "Nexus, capture vitals": "نكسس، سجل العلامات الحيوية",
    "Nexus, create a referral": "نكسس، أنشئ إحالة",
    "Nexus, schedule my follow-up": "نكسس، جدولة متابعتي",
    "Nexus, contact my buyer": "نكسس، تواصل مع المشتري",
    "Nexus, create buyer order": "نكسس، أنشئ طلب المشتري",
    "Nexus, run drone scan": "نكسس، شغل فحص الدرون",
    "Nexus, assign field task": "نكسس، عيّن مهمة ميدانية",
    "Nexus, check my route risk": "نكسس، افحص مخاطر طريقي",
    "Command help": "مساعدة الأوامر",
    "Say or tap a command": "قل أو اضغط على أمر",
    "Voice help": "مساعدة صوتية",
    "Voice command help is open. Say a command or tap one to run it.": "مساعدة الأوامر الصوتية مفتوحة. قل أمرا أو اضغط عليه لتشغيله.",
    "Voice command help opened": "تم فتح المساعدة الصوتية",
    "Voice command help closed": "تم إغلاق المساعدة الصوتية",
    "Go to a workspace": "اذهب إلى مساحة عمل",
    "Use these when someone is new to the platform.": "استخدم هذه عندما يكون الشخص جديدا على المنصة.",
    "Open the main work areas without searching menus.": "افتح مناطق العمل الرئيسية بدون البحث في القوائم.",
    "Run training, accessibility, and certificate workflows.": "شغل مسارات التدريب وإتاحة الوصول والشهادات.",
    "Help a user find, prepare for, and apply to work.": "ساعد المستخدم على العثور على العمل والاستعداد له والتقديم عليه.",
    "Telehealth": "الرعاية عن بعد",
    "Guide patients through care access and support.": "وجّه المرضى للوصول إلى الرعاية والدعم.",
    "Farm, Trade, And Drones": "الزراعة والتجارة والدرون",
    "Support farmers, buyers, field teams, and crop intelligence.": "ادعم المزارعين والمشترين وفرق الميدان وذكاء المحاصيل.",
    "English": "\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629",
    "French": "\u0627\u0644\u0641\u0631\u0646\u0633\u064a\u0629",
    "Kiswahili": "\u0627\u0644\u0633\u0648\u0627\u062d\u0644\u064a\u0629",
    "Arabic": "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
    "Start course": "\u0628\u062f\u0621 \u0627\u0644\u062f\u0648\u0631\u0629",
    "Complete lesson": "\u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u062f\u0631\u0633",
    "Complete quiz": "\u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u0627\u062e\u062a\u0628\u0627\u0631",
    "Issue certificate": "\u0625\u0635\u062f\u0627\u0631 \u0627\u0644\u0634\u0647\u0627\u062f\u0629",
    "Build profile": "\u0628\u0646\u0627\u0621 \u0627\u0644\u0645\u0644\u0641",
    "Apply to role": "\u062a\u0642\u062f\u064a\u0645 \u0637\u0644\u0628",
    "Schedule interview": "\u062c\u062f\u0648\u0644\u0629 \u0645\u0642\u0627\u0628\u0644\u0629",
    "Assign mentor": "\u062a\u0639\u064a\u064a\u0646 \u0645\u0631\u0634\u062f",
    "Start shift": "\u0628\u062f\u0621 \u0627\u0644\u0648\u0631\u062f\u064a\u0629",
    "Start intake": "\u0628\u062f\u0621 \u0627\u0644\u0627\u0633\u062a\u0642\u0628\u0627\u0644",
    "Connect representative": "\u0631\u0628\u0637 \u0645\u0645\u062b\u0644",
    "Run safety review": "\u062a\u0634\u063a\u064a\u0644 \u0645\u0631\u0627\u062c\u0639\u0629 \u0627\u0644\u0633\u0644\u0627\u0645\u0629",
    "Generate care plan": "\u0625\u0646\u0634\u0627\u0621 \u062e\u0637\u0629 \u0631\u0639\u0627\u064a\u0629",
    "Create order": "\u0625\u0646\u0634\u0627\u0621 \u0637\u0644\u0628",
    "Advance order": "\u062a\u0642\u062f\u064a\u0645 \u0627\u0644\u0637\u0644\u0628",
    "Run command center": "\u062a\u0634\u063a\u064a\u0644 \u0645\u0631\u0643\u0632 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",
    "Test all providers": "\u0627\u062e\u062a\u0628\u0627\u0631 \u0643\u0644 \u0627\u0644\u0645\u0632\u0648\u062f\u064a\u0646",
    "Run health check": "\u062a\u0634\u063a\u064a\u0644 \u0641\u062d\u0635 \u0627\u0644\u0635\u062d\u0629",
    "Today's Work Queue": "\u0637\u0627\u0628\u0648\u0631 \u0639\u0645\u0644 \u0627\u0644\u064a\u0648\u0645",
    "Funding Demo Proof": "\u062f\u0644\u064a\u0644 \u0639\u0631\u0636 \u0627\u0644\u062a\u0645\u0648\u064a\u0644",
    "Active Operating Region": "\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0646\u0634\u0637\u0629",
    "Learner Workbench": "\u0645\u0643\u062a\u0628 \u0627\u0644\u0645\u062a\u0639\u0644\u0645",
    "Training Catalog": "\u0643\u062a\u0627\u0644\u0648\u062c \u0627\u0644\u062a\u062f\u0631\u064a\u0628",
    "Training Evidence": "\u062f\u0644\u064a\u0644 \u0627\u0644\u062a\u062f\u0631\u064a\u0628",
    "Placement Desk": "\u0645\u0643\u062a\u0628 \u0627\u0644\u062a\u0648\u0638\u064a\u0641",
    "Patient Access Desk": "\u0645\u0643\u062a\u0628 \u0648\u0635\u0648\u0644 \u0627\u0644\u0645\u0631\u064a\u0636",
    "Market Operations Queue": "\u0637\u0627\u0628\u0648\u0631 \u0639\u0645\u0644\u064a\u0627\u062a \u0627\u0644\u0633\u0648\u0642",
    "Ready": "\u062c\u0627\u0647\u0632",
    "Start here": "\u0627\u0628\u062f\u0623 \u0647\u0646\u0627",
    "Complete": "\u0645\u0643\u062a\u0645\u0644",
    "Pending": "\u0642\u064a\u062f \u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0631",
    "Open": "\u0645\u0641\u062a\u0648\u062d",
    "Connected": "\u0645\u062a\u0635\u0644",
    "Active": "\u0646\u0634\u0637",
    "Status": "\u0627\u0644\u062d\u0627\u0644\u0629",
    "Risk": "\u0627\u0644\u062e\u0637\u0631",
    "Country": "\u0627\u0644\u0628\u0644\u062f",
    "Route": "\u0627\u0644\u0637\u0631\u064a\u0642",
    "Learning": "\u0627\u0644\u062a\u0639\u0644\u0645",
    "Workforce": "\u0627\u0644\u0642\u0648\u0649 \u0627\u0644\u0639\u0627\u0645\u0644\u0629",
    "Healthcare": "\u0627\u0644\u0635\u062d\u0629",
    "Integrations": "\u0627\u0644\u062a\u0643\u0627\u0645\u0644\u0627\u062a",
    "Profile": "\u0627\u0644\u0645\u0644\u0641"
  }
};

const deepContentTranslations = {
  fr: {
    "Unified AI Copilot": "Copilote IA unifie",
    "Executive Demo Run": "Demo executive",
    "Run full platform demo": "Lancer la demo complete",
    "AI Next Actions": "Prochaines actions IA",
    "Ask copilot": "Demander au copilote",
    "Run command AI": "Lancer l'IA de commande",
    "Map Inspector": "Inspecteur de carte",
    "Layer Status": "Etat des couches",
    "Route Intelligence": "Intelligence des routes",
    "AI Run History": "Historique des analyses IA",
    "Global Map & AI": "Carte mondiale et IA",
    "Command map": "Carte de commande",
    "AI desk": "Bureau IA",
    "Layers": "Couches",
    "Active country": "Pays actif",
    "Active route": "Route active",
    "Current checkpoint": "Point de controle actuel",
    "Facilities layer": "Couche des etablissements",
    "Command analysis": "Analyse de commande",
    "Inspector analysis": "Analyse de l'inspecteur",
    "Route risk": "Risque de route",
    "Latest insight": "Derniere analyse",
    "Tile provider": "Fournisseur de cartes",
    "Country markers": "Marqueurs de pays",
    "Route lines": "Lignes de route",
    "AI provider": "Fournisseur IA",
    "Analyze": "Analyser",
    "active checkpoint": "point de controle actif",
    "Country context": "Contexte pays",
    "route movement": "mouvement de route",
    "provider status": "etat fournisseur",
    "AI recommendations": "Recommandations IA",
    "patients": "patients",
    "facilities": "etablissements",
    "Facility": "Etablissement",
    "Health": "Sante",
    "Wallet": "Portefeuille",
    "AI": "IA",
    "completed": "termines",
    "quiz score": "score quiz",
    "certificate": "certificat",
    "learning hour": "heure d'apprentissage",
    "readiness": "preparation",
    "application": "candidature",
    "shift": "quart",
    "intake": "admission",
    "care plan": "plan de soins",
    "transaction": "transaction",
    "order": "commande"
  },
  sw: {
    "Unified AI Copilot": "Msaidizi wa AI uliounganishwa",
    "Executive Demo Run": "Onyesho la uongozi",
    "Run full platform demo": "Endesha onyesho kamili la jukwaa",
    "AI Next Actions": "Hatua zinazofuata za AI",
    "Ask copilot": "Uliza msaidizi",
    "Run command AI": "Endesha AI ya amri",
    "Map Inspector": "Mkaguzi wa ramani",
    "Layer Status": "Hali ya tabaka",
    "Route Intelligence": "Uchambuzi wa njia",
    "AI Run History": "Historia ya uchambuzi wa AI",
    "Global Map & AI": "Ramani ya kimataifa na AI",
    "Command map": "Ramani ya amri",
    "AI desk": "Dawati la AI",
    "Layers": "Tabaka",
    "Active country": "Nchi hai",
    "Active route": "Njia hai",
    "Current checkpoint": "Kituo cha sasa",
    "Facilities layer": "Tabaka la vituo",
    "Command analysis": "Uchambuzi wa amri",
    "Inspector analysis": "Uchambuzi wa mkaguzi",
    "Route risk": "Hatari ya njia",
    "Latest insight": "Maarifa ya karibuni",
    "Tile provider": "Mtoa ramani",
    "Country markers": "Alama za nchi",
    "Route lines": "Mistari ya njia",
    "AI provider": "Mtoa huduma wa AI",
    "Analyze": "Chambua",
    "active checkpoint": "kituo hai",
    "Country context": "Muktadha wa nchi",
    "route movement": "mwendo wa njia",
    "provider status": "hali ya mtoa huduma",
    "AI recommendations": "Mapendekezo ya AI",
    "patients": "wagonjwa",
    "facilities": "vituo",
    "Facility": "Kituo",
    "Health": "Afya",
    "Wallet": "Pochi",
    "AI": "AI",
    "completed": "zimekamilika",
    "quiz score": "alama ya jaribio",
    "certificate": "cheti",
    "learning hour": "saa ya mafunzo",
    "readiness": "utayari",
    "application": "ombi",
    "shift": "zamu",
    "intake": "usajili",
    "care plan": "mpango wa huduma",
    "transaction": "muamala",
    "order": "oda"
  },
  ar: {
    "Unified AI Copilot": "\u0645\u0633\u0627\u0639\u062f \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0645\u0648\u062d\u062f",
    "Executive Demo Run": "\u062a\u0634\u063a\u064a\u0644 \u0639\u0631\u0636 \u062a\u0646\u0641\u064a\u0630\u064a",
    "Run full platform demo": "\u062a\u0634\u063a\u064a\u0644 \u0639\u0631\u0636 \u0627\u0644\u0645\u0646\u0635\u0629 \u0627\u0644\u0643\u0627\u0645\u0644",
    "AI Next Actions": "\u0625\u062c\u0631\u0627\u0621\u0627\u062a \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u062a\u0627\u0644\u064a\u0629",
    "Ask copilot": "\u0627\u0633\u0623\u0644 \u0627\u0644\u0645\u0633\u0627\u0639\u062f",
    "Run command AI": "\u062a\u0634\u063a\u064a\u0644 \u0630\u0643\u0627\u0621 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",
    "Map Inspector": "\u0645\u0641\u062a\u0634 \u0627\u0644\u062e\u0631\u064a\u0637\u0629",
    "Layer Status": "\u062d\u0627\u0644\u0629 \u0627\u0644\u0637\u0628\u0642\u0627\u062a",
    "Route Intelligence": "\u0627\u0633\u062a\u062e\u0628\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u0633\u0627\u0631",
    "AI Run History": "\u0633\u062c\u0644 \u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0630\u0643\u0627\u0621",
    "Global Map & AI": "\u0627\u0644\u062e\u0631\u064a\u0637\u0629 \u0627\u0644\u0639\u0627\u0644\u0645\u064a\u0629 \u0648\u0627\u0644\u0630\u0643\u0627\u0621",
    "Command map": "\u062e\u0631\u064a\u0637\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",
    "AI desk": "\u0645\u0643\u062a\u0628 \u0627\u0644\u0630\u0643\u0627\u0621",
    "Layers": "\u0627\u0644\u0637\u0628\u0642\u0627\u062a",
    "Active country": "\u0627\u0644\u0628\u0644\u062f \u0627\u0644\u0646\u0634\u0637",
    "Active route": "\u0627\u0644\u0645\u0633\u0627\u0631 \u0627\u0644\u0646\u0634\u0637",
    "Current checkpoint": "\u0646\u0642\u0637\u0629 \u0627\u0644\u062a\u062d\u0642\u0642 \u0627\u0644\u062d\u0627\u0644\u064a\u0629",
    "Facilities layer": "\u0637\u0628\u0642\u0629 \u0627\u0644\u0645\u0631\u0627\u0641\u0642",
    "Command analysis": "\u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",
    "Inspector analysis": "\u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0645\u0641\u062a\u0634",
    "Route risk": "\u0645\u062e\u0627\u0637\u0631 \u0627\u0644\u0645\u0633\u0627\u0631",
    "Latest insight": "\u0622\u062e\u0631 \u0631\u0624\u064a\u0629",
    "Tile provider": "\u0645\u0632\u0648\u062f \u0627\u0644\u062e\u0631\u064a\u0637\u0629",
    "Country markers": "\u0639\u0644\u0627\u0645\u0627\u062a \u0627\u0644\u0628\u0644\u062f\u0627\u0646",
    "Route lines": "\u062e\u0637\u0648\u0637 \u0627\u0644\u0645\u0633\u0627\u0631",
    "AI provider": "\u0645\u0632\u0648\u062f \u0627\u0644\u0630\u0643\u0627\u0621",
    "Analyze": "\u062a\u062d\u0644\u064a\u0644",
    "active checkpoint": "\u0646\u0642\u0637\u0629 \u062a\u062d\u0642\u0642 \u0646\u0634\u0637\u0629",
    "Country context": "\u0633\u064a\u0627\u0642 \u0627\u0644\u0628\u0644\u062f",
    "route movement": "\u062d\u0631\u0643\u0629 \u0627\u0644\u0645\u0633\u0627\u0631",
    "provider status": "\u062d\u0627\u0644\u0629 \u0627\u0644\u0645\u0632\u0648\u062f",
    "AI recommendations": "\u062a\u0648\u0635\u064a\u0627\u062a \u0627\u0644\u0630\u0643\u0627\u0621",
    "patients": "\u0645\u0631\u0636\u0649",
    "facilities": "\u0645\u0631\u0627\u0641\u0642",
    "Facility": "\u0645\u0631\u0641\u0642",
    "Health": "\u0627\u0644\u0635\u062d\u0629",
    "Wallet": "\u0627\u0644\u0645\u062d\u0641\u0638\u0629",
    "AI": "\u0630\u0643\u0627\u0621",
    "completed": "\u0645\u0643\u062a\u0645\u0644",
    "quiz score": "\u0646\u062a\u064a\u062c\u0629 \u0627\u0644\u0627\u062e\u062a\u0628\u0627\u0631",
    "certificate": "\u0634\u0647\u0627\u062f\u0629",
    "learning hour": "\u0633\u0627\u0639\u0629 \u062a\u0639\u0644\u0645",
    "readiness": "\u0627\u0644\u062c\u0627\u0647\u0632\u064a\u0629",
    "application": "\u0637\u0644\u0628",
    "shift": "\u0648\u0631\u062f\u064a\u0629",
    "intake": "\u0627\u0633\u062a\u0642\u0628\u0627\u0644",
    "care plan": "\u062e\u0637\u0629 \u0631\u0639\u0627\u064a\u0629",
    "transaction": "\u0645\u0639\u0627\u0645\u0644\u0629",
    "order": "\u0637\u0644\u0628"
  }
};

Object.entries(deepContentTranslations).forEach(([lang, entries]) => {
  contentTranslations[lang] = { ...(contentTranslations[lang] || {}), ...entries };
});

const workflowPhraseTranslations = {
  fr: {
    "Geospatial command": "Commande geospatiale",
    "Command center run": "Execution du centre de commande",
    "Route inspection": "Inspection de route",
    "Focus map": "Centrer la carte",
    "AI analysis": "Analyse IA",
    "Command center run recorded": "Execution du centre de commande enregistree",
    "Route inspection recorded": "Inspection de route enregistree",
    "Route risk recorded": "Risque de route enregistre",
    "Layer": "Couche",
    "Markers": "Marqueurs",
    "Routes": "Routes",
    "Queue": "File",
    "Route stage": "Etape de route",
    "Focused": "Centre",
    "ready": "pret",
    "near the active country": "pres du pays actif",
    "with": "avec",
    "checkpoint": "point de controle",
    "country markers available": "marqueurs de pays disponibles",
    "route corridor": "couloir de route",
    "available": "disponible",
    "Local AI engine": "Moteur IA local",
    "configured through webhook provider": "configure via le fournisseur webhook",
    "synchronized learning, workforce, health, trade, and route activity": "a synchronise apprentissage, main-d'oeuvre, sante, commerce et activite de route",
    "Keep operators focused on": "Garder les operateurs concentres sur",
    "map inspector reviewed": "l'inspecteur de carte a examine",
    "confirms": "confirme",
    "is the active operational focus": "est le point operationnel actif",
    "route engine recommends monitoring": "le moteur de route recommande de surveiller",
    "then validating logistics events against provider deliveries before advancing the route": "puis de valider les evenements logistiques avec les livraisons fournisseur avant d'avancer la route",
    "Representative connected": "Representant connecte",
    "Moderate": "Modere",
    "Quality check": "Controle qualite",
    "In transit": "En transit",
    "Interview": "Entretien",
    "Eligible": "Eligible",
    "Operations": "Operations",
    "Evidence": "Preuves",
    "Context": "Contexte",
    "Countries": "Pays",
    "Patients": "Patients",
    "Facilities": "Etablissements",
    "Orders": "Commandes"
  },
  sw: {
    "Map & AI": "Ramani na AI",
    "Geospatial command": "Amri ya ramani",
    "Command center run": "Uendeshaji wa kituo cha amri",
    "Route inspection": "Ukaguzi wa njia",
    "Focus map": "Lenga ramani",
    "AI analysis": "Uchambuzi wa AI",
    "Command center run recorded": "Uendeshaji wa kituo cha amri umerekodiwa",
    "Route inspection recorded": "Ukaguzi wa njia umerekodiwa",
    "Route risk recorded": "Hatari ya njia imerekodiwa",
    "Layer": "Tabaka",
    "Markers": "Alama",
    "Routes": "Njia",
    "Queue": "Foleni",
    "Route stage": "Hatua ya njia",
    "Focused": "Imelengwa",
    "ready": "tayari",
    "near the active country": "karibu na nchi hai",
    "with": "na",
    "checkpoint": "kituo",
    "country markers available": "alama za nchi zinapatikana",
    "route corridor": "ukanda wa njia",
    "available": "zinapatikana",
    "Local AI engine": "Injini ya AI ya ndani",
    "configured through webhook provider": "imesanidiwa kupitia mtoa webhook",
    "synchronized learning, workforce, health, trade, and route activity": "ilisawazisha mafunzo, nguvukazi, afya, biashara, na shughuli za njia",
    "Keep operators focused on": "Weka waendeshaji wakilenga",
    "map inspector reviewed": "mkaguzi wa ramani alikagua",
    "confirms": "anathibitisha",
    "is the active operational focus": "ndilo lengo hai la uendeshaji",
    "route engine recommends monitoring": "injini ya njia inapendekeza kufuatilia",
    "then validating logistics events against provider deliveries before advancing the route": "kisha kuthibitisha matukio ya usafirishaji dhidi ya makabidhiano ya mtoa huduma kabla ya kusogeza njia",
    "Representative connected": "Mwakilishi ameunganishwa",
    "Moderate": "Wastani",
    "Quality check": "Ukaguzi wa ubora",
    "In transit": "Safarini",
    "Interview": "Mahojiano",
    "Eligible": "Anastahili",
    "Operations": "Shughuli",
    "Evidence": "Ushahidi",
    "Context": "Muktadha",
    "Countries": "Nchi",
    "Patients": "Wagonjwa",
    "Facilities": "Vituo",
    "Orders": "Oda",
    "Command": "Amri",
    "Inspect": "Kagua",
    "Insight": "Maarifa",
    "Analyze Nigeria, West Africa Corridor, and the active checkpoint together.": "Chambua Nigeria, Ukanda wa Afrika Magharibi, na kituo hai kwa pamoja.",
    "Inspect route movement, health pressure, provider state, and field risk.": "Kagua mwendo wa njia, shinikizo la afya, hali ya mtoa huduma, na hatari ya eneo.",
    "Assess logistics risk and push the insight into route intelligence.": "Tathmini hatari ya usafirishaji na sukuma maarifa kwenye uchambuzi wa njia.",
    "Use the selector to switch countries; the map, health queue, and route state update together.": "Tumia kichagua kubadilisha nchi; ramani, foleni ya afya, na hali ya njia husasishwa pamoja.",
    "The map is tied to health, logistics, country context, and AI recommendations.": "Ramani imeunganishwa na afya, usafirishaji, muktadha wa nchi, na mapendekezo ya AI.",
    "AI runs produce map insights and a visible audit trail instead of a static map screen.": "Uendeshaji wa AI huunda maarifa ya ramani na alama wazi za ukaguzi badala ya skrini tuli ya ramani.",
    "Country markers, facilities, routes, and provider status give the map operational context.": "Alama za nchi, vituo, njia, na hali ya mtoa huduma huipa ramani muktadha wa uendeshaji.",
    "Leaflet map uses OpenStreetMap tiles when network is available.": "Ramani ya Leaflet hutumia vigae vya OpenStreetMap mtandao unapopatikana.",
    "tutor analysis": "uchambuzi wa mkufunzi",
    "quizgen analysis": "uchambuzi wa jaribio",
    "route analysis": "uchambuzi wa njia",
    "copilot analysis": "uchambuzi wa msaidizi",
    "inspector analysis": "uchambuzi wa mkaguzi",
    "command analysis": "uchambuzi wa amri",
    "careplan analysis": "uchambuzi wa mpango wa huduma",
    "for": "kwa",
    "Open Learning": "Fungua Mafunzo",
    "Open Workforce": "Fungua Nguvukazi",
    "Open Health": "Fungua Afya",
    "Open Trade": "Fungua Biashara",
    "Open Map": "Fungua Ramani",
    "Open Integrations": "Fungua Miunganisho",
    "Continue training": "Endelea na mafunzo",
    "Review pipeline": "Kagua mtiririko",
    "Open care command": "Fungua amri ya huduma",
    "Manage active order": "Simamia oda hai",
    "Test live engines": "Jaribu injini hai",
    "Continue active training": "Endelea na mafunzo hai",
    "Move workforce placement": "Sogeza upangaji wa kazi",
    "Open care operations": "Fungua shughuli za huduma",
    "Advance trade route": "Sogeza njia ya biashara",
    "Learning records": "Rekodi za mafunzo",
    "Care records": "Rekodi za huduma",
    "Trade records": "Rekodi za biashara",
    "Provider records": "Rekodi za mtoa huduma",
    "AI activity": "Shughuli za AI",
    "Care operations": "Shughuli za huduma",
    "Training": "Mafunzo",
    "records": "rekodi",
    "event": "tukio",
    "providers": "watoa huduma",
    "domains": "nyanja",
    "stops": "vituo"
  },
  ar: {
    "Geospatial command": "\u0623\u0645\u0631 \u062c\u063a\u0631\u0627\u0641\u064a",
    "Command center run": "\u062a\u0634\u063a\u064a\u0644 \u0645\u0631\u0643\u0632 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",
    "Route inspection": "\u062a\u0641\u062a\u064a\u0634 \u0627\u0644\u0645\u0633\u0627\u0631",
    "Focus map": "\u062a\u0631\u0643\u064a\u0632 \u0627\u0644\u062e\u0631\u064a\u0637\u0629",
    "AI analysis": "\u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0630\u0643\u0627\u0621",
    "Layer": "\u0637\u0628\u0642\u0629",
    "Markers": "\u0639\u0644\u0627\u0645\u0627\u062a",
    "Routes": "\u0645\u0633\u0627\u0631\u0627\u062a",
    "Queue": "\u0637\u0627\u0628\u0648\u0631",
    "Route stage": "\u0645\u0631\u062d\u0644\u0629 \u0627\u0644\u0645\u0633\u0627\u0631",
    "Focused": "\u0645\u0631\u0643\u0632",
    "ready": "\u062c\u0627\u0647\u0632",
    "Representative connected": "\u0627\u0644\u0645\u0645\u062b\u0644 \u0645\u062a\u0635\u0644",
    "Moderate": "\u0645\u062a\u0648\u0633\u0637",
    "Quality check": "\u0641\u062d\u0635 \u0627\u0644\u062c\u0648\u062f\u0629",
    "In transit": "\u0642\u064a\u062f \u0627\u0644\u0646\u0642\u0644",
    "Interview": "\u0645\u0642\u0627\u0628\u0644\u0629",
    "Eligible": "\u0645\u0624\u0647\u0644",
    "Operations": "\u0639\u0645\u0644\u064a\u0627\u062a",
    "Evidence": "\u0623\u062f\u0644\u0629",
    "Context": "\u0633\u064a\u0627\u0642",
    "Countries": "\u0628\u0644\u062f\u0627\u0646",
    "Patients": "\u0645\u0631\u0636\u0649",
    "Facilities": "\u0645\u0631\u0627\u0641\u0642",
    "Orders": "\u0637\u0644\u0628\u0627\u062a"
  }
};

Object.entries(workflowPhraseTranslations).forEach(([lang, entries]) => {
  contentTranslations[lang] = { ...(contentTranslations[lang] || {}), ...entries };
});

Object.entries(workspaceTranslations).forEach(([lang, entries]) => {
  contentTranslations[lang] = { ...(contentTranslations[lang] || {}), ...entries };
});

const workflowModalTranslations = {
  fr: {
    "Workflow": "Flux de travail",
    "Learning workflow": "Flux apprentissage",
    "Accessible learning": "Apprentissage accessible",
    "Workforce workflow": "Flux main-d'oeuvre",
    "Health workflow": "Flux sante",
    "Accessible telehealth": "Telesante accessible",
    "Trade workflow": "Flux commerce",
    "AI workflow": "Flux IA",
    "Integration workflow": "Flux integration",
    "Admin workflow": "Flux admin",
    "Review the lesson context, confirm progress, and add a note before the learning record is updated.": "Revoyez le contexte de la lecon, confirmez la progression et ajoutez une note avant la mise a jour du dossier d'apprentissage.",
    "Start or continue the selected course and create a learning record tied to readiness.": "Commencez ou continuez le cours selectionne et creez un dossier d'apprentissage lie a la preparation.",
    "Prepare captions, transcript, and relay handoff for a hearing-impaired learner.": "Preparez les sous-titres, la transcription et la passation relais pour un apprenant malentendant.",
    "Prepare audio narration, screen-reader outline, and large-print summary for a visually impaired learner.": "Preparez la narration audio, le plan lecteur d'ecran et le resume gros caracteres pour un apprenant malvoyant.",
    "Prepare an SMS-friendly and offline lesson packet for rural low-bandwidth access.": "Preparez un paquet de lecon compatible SMS et hors ligne pour l'acces rural a faible bande passante.",
    "Review learning, certificates, and readiness before verifying the workforce profile.": "Revoyez l'apprentissage, les certificats et la preparation avant de verifier le profil main-d'oeuvre.",
    "Confirm readiness and record calendar plus notification provider events.": "Confirmez la preparation et enregistrez les evenements calendrier et notification.",
    "Match a mentor to readiness gaps and role fit.": "Associez un mentor aux ecarts de preparation et a l'adequation du role.",
    "Create the next paid shift after interview support is in place.": "Creez le prochain quart remunere apres la mise en place du soutien entretien.",
    "Confirm role fit, readiness, and provider handoff before submitting the application.": "Confirmez l'adequation du role, la preparation et la passation fournisseur avant de soumettre la candidature.",
    "Collect patient need, urgency, accessibility supports, language, caregiver, and callback details before opening the telehealth case.": "Collectez le besoin patient, l'urgence, les supports d'accessibilite, la langue, l'aidant et les details de rappel avant d'ouvrir le dossier de telesante.",
    "Create a telehealth access plan with captions, audio description, caregiver handoff, and low-bandwidth fallback.": "Creez un plan d'acces telesante avec sous-titres, description audio, passation aidant et solution faible bande passante.",
    "Start a caption relay session and transcript workflow for a hearing-impaired patient.": "Demarrez une session de relais sous-titres et un flux de transcription pour un patient malentendant.",
    "Notify a caregiver or community accessibility aide for supported telehealth follow-up.": "Informez un aidant ou un accompagnateur communautaire pour le suivi telesante assiste.",
    "Record plain-language telehealth, caregiver, translation, privacy, and assistive-format consent.": "Enregistrez le consentement en langage clair pour la telesante, l'aidant, la traduction, la confidentialite et les formats assistifs.",
    "Capture supervised vitals and triage evidence before clinical escalation.": "Capturez les signes vitaux supervises et les preuves de triage avant l'escalade clinique.",
    "Create a referral handoff to a partner clinic, representative, or community health worker.": "Creez une passation de reference vers une clinique partenaire, un representant ou un agent de sante communautaire.",
    "Schedule a low-bandwidth callback with SMS, caregiver packet, large-print, and audio support.": "Planifiez un rappel faible bande passante avec SMS, paquet aidant, gros caracteres et support audio.",
    "Prepare a buyer communication workflow with the active crop, order, route context, channel, and message draft before sending through live communications.": "Preparez un flux de communication acheteur avec la culture active, la commande, le contexte route, le canal et le brouillon avant l'envoi via communications en direct.",
    "Run a complete agritech drone workflow: compliant flight planning, crop intelligence, findings, map evidence, and field intervention tasks.": "Lancez un flux drone agritech complet : plan de vol conforme, intelligence culture, constats, preuves carte et taches terrain.",
    "Confirm the market, wallet, logistics, or AI action before the trade ledger changes.": "Confirmez l'action marche, wallet, logistique ou IA avant la modification du registre commercial.",
    "Run the AI engine with the active country, route, checkpoint, learning, workforce, health, trade, and provider context.": "Lancez le moteur IA avec le pays actif, la route, le point de controle, l'apprentissage, la main-d'oeuvre, la sante, le commerce et le contexte fournisseur.",
    "Confirm": "Confirmer",
    "Confirm action": "Confirmer l'action",
    "Record created": "Dossier cree",
    "Provider evidence": "Preuve fournisseur",
    "Workflow event and profile state update": "Evenement de flux et mise a jour du profil",
    "Activity and integration audit when applicable": "Activite et audit d'integration si applicable",
    "Workflow note": "Note du flux",
    "Voice or typed response": "Reponse vocale ou ecrite",
    "Say or type: confirm, yes, cancel": "Dites ou tapez : confirmer, oui, annuler",
    "Run response": "Executer la reponse",
    "Cancel": "Annuler",
    "Close": "Fermer",
    "Patient or household name": "Nom du patient ou du foyer",
    "Primary health need": "Besoin de sante principal",
    "Urgency": "Urgence",
    "Preferred language": "Langue preferee",
    "Accessibility needs": "Besoins d'accessibilite",
    "Best contact method": "Meilleur moyen de contact",
    "Caregiver or community aide": "Aidant ou relais communautaire"
  },
  sw: {
    "Workflow": "Mtiririko",
    "Learning workflow": "Mtiririko wa mafunzo",
    "Accessible learning": "Mafunzo jumuishi",
    "Workforce workflow": "Mtiririko wa nguvukazi",
    "Health workflow": "Mtiririko wa afya",
    "Accessible telehealth": "Teleshauri jumuishi",
    "Trade workflow": "Mtiririko wa biashara",
    "AI workflow": "Mtiririko wa AI",
    "Integration workflow": "Mtiririko wa miunganisho",
    "Admin workflow": "Mtiririko wa admin",
    "Review the lesson context, confirm progress, and add a note before the learning record is updated.": "Kagua muktadha wa somo, thibitisha maendeleo, na ongeza dokezo kabla rekodi ya mafunzo haijasasishwa.",
    "Start or continue the selected course and create a learning record tied to readiness.": "Anza au endelea na kozi iliyochaguliwa na uunde rekodi ya mafunzo inayohusiana na utayari.",
    "Prepare captions, transcript, and relay handoff for a hearing-impaired learner.": "Andaa manukuu, nakala ya maandishi, na makabidhiano ya relay kwa mwanafunzi mwenye changamoto ya kusikia.",
    "Prepare audio narration, screen-reader outline, and large-print summary for a visually impaired learner.": "Andaa maelezo ya sauti, muhtasari wa kisoma-skrini, na muhtasari wa maandishi makubwa kwa mwanafunzi mwenye changamoto ya kuona.",
    "Prepare an SMS-friendly and offline lesson packet for rural low-bandwidth access.": "Andaa kifurushi cha somo kinachofaa SMS na matumizi ya nje ya mtandao kwa ufikivu wa vijijini.",
    "Review learning, certificates, and readiness before verifying the workforce profile.": "Kagua mafunzo, vyeti, na utayari kabla ya kuthibitisha wasifu wa nguvukazi.",
    "Confirm readiness and record calendar plus notification provider events.": "Thibitisha utayari na urekodi matukio ya kalenda na arifa.",
    "Match a mentor to readiness gaps and role fit.": "Linganisha mshauri na mapengo ya utayari na nafasi inayofaa.",
    "Create the next paid shift after interview support is in place.": "Unda zamu inayofuata ya kulipwa baada ya msaada wa mahojiano kuwepo.",
    "Confirm role fit, readiness, and provider handoff before submitting the application.": "Thibitisha kufaa kwa nafasi, utayari, na makabidhiano ya mtoa huduma kabla ya kuwasilisha ombi.",
    "Collect patient need, urgency, accessibility supports, language, caregiver, and callback details before opening the telehealth case.": "Kusanya hitaji la mgonjwa, dharura, msaada wa ufikivu, lugha, mlezi, na maelezo ya kupigiwa simu kabla ya kufungua kesi ya teleshauri.",
    "Create a telehealth access plan with captions, audio description, caregiver handoff, and low-bandwidth fallback.": "Unda mpango wa ufikivu wa teleshauri wenye manukuu, maelezo ya sauti, makabidhiano kwa mlezi, na njia mbadala ya intaneti hafifu.",
    "Start a caption relay session and transcript workflow for a hearing-impaired patient.": "Anzisha kikao cha relay ya manukuu na mtiririko wa nakala kwa mgonjwa mwenye changamoto ya kusikia.",
    "Notify a caregiver or community accessibility aide for supported telehealth follow-up.": "Mjulishe mlezi au msaidizi wa jamii kwa ufuatiliaji wa teleshauri.",
    "Record plain-language telehealth, caregiver, translation, privacy, and assistive-format consent.": "Rekodi ridhaa ya lugha rahisi kwa teleshauri, mlezi, tafsiri, faragha, na miundo saidizi.",
    "Capture supervised vitals and triage evidence before clinical escalation.": "Chukua vipimo muhimu vilivyosimamiwa na ushahidi wa uchunguzi kabla ya kupandisha kesi.",
    "Create a referral handoff to a partner clinic, representative, or community health worker.": "Unda makabidhiano ya rufaa kwa kliniki mshirika, mwakilishi, au mhudumu wa afya wa jamii.",
    "Schedule a low-bandwidth callback with SMS, caregiver packet, large-print, and audio support.": "Panga kupigiwa simu kwa intaneti hafifu na SMS, kifurushi cha mlezi, maandishi makubwa, na msaada wa sauti.",
    "Prepare a buyer communication workflow with the active crop, order, route context, channel, and message draft before sending through live communications.": "Andaa mtiririko wa mawasiliano na mnunuzi kwa zao hai, oda, muktadha wa njia, kituo, na rasimu ya ujumbe kabla ya kutuma.",
    "Run a complete agritech drone workflow: compliant flight planning, crop intelligence, findings, map evidence, and field intervention tasks.": "Endesha mtiririko kamili wa drone ya agritech: mpango wa ndege unaotii sheria, taarifa za zao, matokeo, ushahidi wa ramani, na kazi za shambani.",
    "Confirm the market, wallet, logistics, or AI action before the trade ledger changes.": "Thibitisha hatua ya soko, pochi, usafirishaji, au AI kabla ya kubadilisha daftari la biashara.",
    "Run the AI engine with the active country, route, checkpoint, learning, workforce, health, trade, and provider context.": "Endesha injini ya AI kwa nchi hai, njia, kituo, mafunzo, nguvukazi, afya, biashara, na muktadha wa mtoa huduma.",
    "Confirm": "Thibitisha",
    "Confirm action": "Thibitisha hatua",
    "Record created": "Rekodi imeundwa",
    "Provider evidence": "Ushahidi wa mtoa huduma",
    "Workflow event and profile state update": "Tukio la mtiririko na sasisho la wasifu",
    "Activity and integration audit when applicable": "Shughuli na ukaguzi wa miunganisho inapohitajika",
    "Workflow note": "Dokezo la mtiririko",
    "Voice or typed response": "Jibu la sauti au maandishi",
    "Say or type: confirm, yes, cancel": "Sema au andika: thibitisha, ndiyo, ghairi",
    "Run response": "Endesha jibu",
    "Cancel": "Ghairi",
    "Close": "Funga",
    "Patient or household name": "Jina la mgonjwa au kaya",
    "Primary health need": "Hitaji kuu la afya",
    "Urgency": "Dharura",
    "Preferred language": "Lugha inayopendelewa",
    "Accessibility needs": "Mahitaji ya ufikivu",
    "Best contact method": "Njia bora ya mawasiliano",
    "Caregiver or community aide": "Mlezi au msaidizi wa jamii"
  },
  ar: {
    "Workflow": "\u0633\u064a\u0631 \u0639\u0645\u0644",
    "Learning workflow": "\u0633\u064a\u0631 \u0639\u0645\u0644 \u0627\u0644\u062a\u0639\u0644\u0645",
    "Accessible learning": "\u062a\u0639\u0644\u0645 \u0645\u064a\u0633\u0631",
    "Workforce workflow": "\u0633\u064a\u0631 \u0639\u0645\u0644 \u0627\u0644\u0642\u0648\u0649 \u0627\u0644\u0639\u0627\u0645\u0644\u0629",
    "Health workflow": "\u0633\u064a\u0631 \u0639\u0645\u0644 \u0627\u0644\u0635\u062d\u0629",
    "Accessible telehealth": "\u0637\u0628 \u0639\u0646 \u0628\u0639\u062f \u0645\u064a\u0633\u0631",
    "Trade workflow": "\u0633\u064a\u0631 \u0639\u0645\u0644 \u0627\u0644\u062a\u062c\u0627\u0631\u0629",
    "AI workflow": "\u0633\u064a\u0631 \u0639\u0645\u0644 \u0627\u0644\u0630\u0643\u0627\u0621",
    "Integration workflow": "\u0633\u064a\u0631 \u0639\u0645\u0644 \u0627\u0644\u062a\u0643\u0627\u0645\u0644",
    "Admin workflow": "\u0633\u064a\u0631 \u0639\u0645\u0644 \u0627\u0644\u0625\u062f\u0627\u0631\u0629",
    "Review the lesson context, confirm progress, and add a note before the learning record is updated.": "\u0631\u0627\u062c\u0639 \u0633\u064a\u0627\u0642 \u0627\u0644\u062f\u0631\u0633 \u0648\u0623\u0643\u062f \u0627\u0644\u062a\u0642\u062f\u0645 \u0648\u0623\u0636\u0641 \u0645\u0644\u0627\u062d\u0638\u0629 \u0642\u0628\u0644 \u062a\u062d\u062f\u064a\u062b \u0633\u062c\u0644 \u0627\u0644\u062a\u0639\u0644\u0645.",
    "Start or continue the selected course and create a learning record tied to readiness.": "\u0627\u0628\u062f\u0623 \u0623\u0648 \u062a\u0627\u0628\u0639 \u0627\u0644\u062f\u0648\u0631\u0629 \u0627\u0644\u0645\u062d\u062f\u062f\u0629 \u0648\u0623\u0646\u0634\u0626 \u0633\u062c\u0644 \u062a\u0639\u0644\u0645 \u0645\u0631\u062a\u0628\u0637\u0627 \u0628\u0627\u0644\u062c\u0627\u0647\u0632\u064a\u0629.",
    "Prepare captions, transcript, and relay handoff for a hearing-impaired learner.": "\u062c\u0647\u0632 \u0627\u0644\u062a\u0633\u0645\u064a\u0627\u062a \u0648\u0627\u0644\u0646\u0635 \u0648\u062a\u0633\u0644\u064a\u0645 \u0627\u0644\u062f\u0639\u0645 \u0644\u0645\u062a\u0639\u0644\u0645 \u0644\u062f\u064a\u0647 \u0636\u0639\u0641 \u0633\u0645\u0639.",
    "Prepare audio narration, screen-reader outline, and large-print summary for a visually impaired learner.": "\u062c\u0647\u0632 \u0633\u0631\u062f\u0627 \u0635\u0648\u062a\u064a\u0627 \u0648\u0645\u0644\u062e\u0635\u0627 \u0644\u0642\u0627\u0631\u0626 \u0627\u0644\u0634\u0627\u0634\u0629 \u0648\u0646\u0635\u0627 \u0643\u0628\u064a\u0631\u0627 \u0644\u0645\u062a\u0639\u0644\u0645 \u0644\u062f\u064a\u0647 \u0636\u0639\u0641 \u0628\u0635\u0631.",
    "Prepare an SMS-friendly and offline lesson packet for rural low-bandwidth access.": "\u062c\u0647\u0632 \u062d\u0632\u0645\u0629 \u062f\u0631\u0633 \u062a\u0646\u0627\u0633\u0628 \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0648\u0627\u0644\u0639\u0645\u0644 \u062f\u0648\u0646 \u0627\u062a\u0635\u0627\u0644 \u0644\u0644\u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u0631\u064a\u0641\u064a\u0629.",
    "Review learning, certificates, and readiness before verifying the workforce profile.": "\u0631\u0627\u062c\u0639 \u0627\u0644\u062a\u0639\u0644\u0645 \u0648\u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a \u0648\u0627\u0644\u062c\u0627\u0647\u0632\u064a\u0629 \u0642\u0628\u0644 \u062a\u062d\u0642\u0642 \u0645\u0644\u0641 \u0627\u0644\u0642\u0648\u0649 \u0627\u0644\u0639\u0627\u0645\u0644\u0629.",
    "Confirm readiness and record calendar plus notification provider events.": "\u0623\u0643\u062f \u0627\u0644\u062c\u0627\u0647\u0632\u064a\u0629 \u0648\u0633\u062c\u0644 \u0623\u062d\u062f\u0627\u062b \u0627\u0644\u062a\u0642\u0648\u064a\u0645 \u0648\u0627\u0644\u0625\u0634\u0639\u0627\u0631.",
    "Match a mentor to readiness gaps and role fit.": "\u0637\u0627\u0628\u0642 \u0645\u0631\u0634\u062f\u0627 \u0645\u0639 \u0641\u062c\u0648\u0627\u062a \u0627\u0644\u062c\u0627\u0647\u0632\u064a\u0629 \u0648\u0645\u0644\u0627\u0621\u0645\u0629 \u0627\u0644\u0648\u0638\u064a\u0641\u0629.",
    "Create the next paid shift after interview support is in place.": "\u0623\u0646\u0634\u0626 \u0627\u0644\u0648\u0631\u062f\u064a\u0629 \u0627\u0644\u0645\u062f\u0641\u0648\u0639\u0629 \u0627\u0644\u062a\u0627\u0644\u064a\u0629 \u0628\u0639\u062f \u062a\u062c\u0647\u064a\u0632 \u062f\u0639\u0645 \u0627\u0644\u0645\u0642\u0627\u0628\u0644\u0629.",
    "Confirm role fit, readiness, and provider handoff before submitting the application.": "\u0623\u0643\u062f \u0645\u0644\u0627\u0621\u0645\u0629 \u0627\u0644\u062f\u0648\u0631 \u0648\u0627\u0644\u062c\u0627\u0647\u0632\u064a\u0629 \u0648\u062a\u0633\u0644\u064a\u0645 \u0627\u0644\u0645\u0632\u0648\u062f \u0642\u0628\u0644 \u062a\u0642\u062f\u064a\u0645 \u0627\u0644\u0637\u0644\u0628.",
    "Collect patient need, urgency, accessibility supports, language, caregiver, and callback details before opening the telehealth case.": "\u0627\u062c\u0645\u0639 \u062d\u0627\u062c\u0629 \u0627\u0644\u0645\u0631\u064a\u0636 \u0648\u0627\u0644\u0625\u0644\u062d\u0627\u062d \u0648\u062f\u0639\u0645 \u0627\u0644\u0648\u0635\u0648\u0644 \u0648\u0627\u0644\u0644\u063a\u0629 \u0648\u0627\u0644\u0645\u0631\u0627\u0641\u0642 \u0648\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0642\u0628\u0644 \u0641\u062a\u062d \u062d\u0627\u0644\u0629 \u0627\u0644\u0637\u0628 \u0639\u0646 \u0628\u0639\u062f.",
    "Create a telehealth access plan with captions, audio description, caregiver handoff, and low-bandwidth fallback.": "\u0623\u0646\u0634\u0626 \u062e\u0637\u0629 \u0648\u0635\u0648\u0644 \u0644\u0644\u0637\u0628 \u0639\u0646 \u0628\u0639\u062f \u0645\u0639 \u062a\u0633\u0645\u064a\u0627\u062a \u0648\u0648\u0635\u0641 \u0635\u0648\u062a\u064a \u0648\u062a\u0633\u0644\u064a\u0645 \u0644\u0644\u0645\u0631\u0627\u0641\u0642 \u0648\u0628\u062f\u064a\u0644 \u0636\u0639\u064a\u0641 \u0627\u0644\u0627\u062a\u0635\u0627\u0644.",
    "Start a caption relay session and transcript workflow for a hearing-impaired patient.": "\u0627\u0628\u062f\u0623 \u062c\u0644\u0633\u0629 \u062a\u0633\u0645\u064a\u0627\u062a \u0648\u0646\u0635 \u0644\u0645\u0631\u064a\u0636 \u0644\u062f\u064a\u0647 \u0636\u0639\u0641 \u0633\u0645\u0639.",
    "Notify a caregiver or community accessibility aide for supported telehealth follow-up.": "\u0623\u062e\u0637\u0631 \u0645\u0631\u0627\u0641\u0642\u0627 \u0623\u0648 \u0645\u0633\u0627\u0639\u062f\u0627 \u0645\u062c\u062a\u0645\u0639\u064a\u0627 \u0644\u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u0637\u0628 \u0639\u0646 \u0628\u0639\u062f.",
    "Record plain-language telehealth, caregiver, translation, privacy, and assistive-format consent.": "\u0633\u062c\u0644 \u0645\u0648\u0627\u0641\u0642\u0629 \u0648\u0627\u0636\u062d\u0629 \u0644\u0644\u0637\u0628 \u0639\u0646 \u0628\u0639\u062f \u0648\u0627\u0644\u0645\u0631\u0627\u0641\u0642 \u0648\u0627\u0644\u062a\u0631\u062c\u0645\u0629 \u0648\u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629 \u0648\u0627\u0644\u062a\u0646\u0633\u064a\u0642 \u0627\u0644\u0645\u0633\u0627\u0639\u062f.",
    "Capture supervised vitals and triage evidence before clinical escalation.": "\u0627\u0644\u062a\u0642\u0637 \u0627\u0644\u0639\u0644\u0627\u0645\u0627\u062a \u0627\u0644\u062d\u064a\u0648\u064a\u0629 \u0627\u0644\u0645\u0634\u0631\u0641 \u0639\u0644\u064a\u0647\u0627 \u0648\u062f\u0644\u064a\u0644 \u0627\u0644\u0641\u0631\u0632 \u0642\u0628\u0644 \u0627\u0644\u062a\u0635\u0639\u064a\u062f \u0627\u0644\u0633\u0631\u064a\u0631\u064a.",
    "Create a referral handoff to a partner clinic, representative, or community health worker.": "\u0623\u0646\u0634\u0626 \u0625\u062d\u0627\u0644\u0629 \u0625\u0644\u0649 \u0639\u064a\u0627\u062f\u0629 \u0634\u0631\u064a\u0643\u0629 \u0623\u0648 \u0645\u0645\u062b\u0644 \u0623\u0648 \u0639\u0627\u0645\u0644 \u0635\u062d\u0629 \u0645\u062c\u062a\u0645\u0639\u064a.",
    "Schedule a low-bandwidth callback with SMS, caregiver packet, large-print, and audio support.": "\u062c\u062f\u0648\u0644 \u0627\u062a\u0635\u0627\u0644\u0627 \u0645\u0646\u0627\u0633\u0628\u0627 \u0644\u0636\u0639\u0641 \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0645\u0639 SMS \u0648\u062d\u0632\u0645\u0629 \u0644\u0644\u0645\u0631\u0627\u0641\u0642 \u0648\u0646\u0635 \u0643\u0628\u064a\u0631 \u0648\u062f\u0639\u0645 \u0635\u0648\u062a\u064a.",
    "Prepare a buyer communication workflow with the active crop, order, route context, channel, and message draft before sending through live communications.": "\u062c\u0647\u0632 \u0633\u064a\u0631 \u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u0627\u0644\u0645\u0634\u062a\u0631\u064a \u064a\u0634\u0645\u0644 \u0627\u0644\u0645\u062d\u0635\u0648\u0644 \u0627\u0644\u0646\u0634\u0637 \u0648\u0627\u0644\u0637\u0644\u0628 \u0648\u0633\u064a\u0627\u0642 \u0627\u0644\u0645\u0633\u0627\u0631 \u0648\u0627\u0644\u0642\u0646\u0627\u0629 \u0648\u0645\u0633\u0648\u062f\u0629 \u0627\u0644\u0631\u0633\u0627\u0644\u0629.",
    "Run a complete agritech drone workflow: compliant flight planning, crop intelligence, findings, map evidence, and field intervention tasks.": "\u0634\u063a\u0644 \u0633\u064a\u0631 \u062f\u0631\u0648\u0646 \u0632\u0631\u0627\u0639\u064a \u0643\u0627\u0645\u0644\u0627: \u062e\u0637\u0629 \u0637\u064a\u0631\u0627\u0646 \u0645\u062a\u0648\u0627\u0641\u0642\u0629\u060c \u0630\u0643\u0627\u0621 \u0627\u0644\u0645\u062d\u0635\u0648\u0644\u060c \u0646\u062a\u0627\u0626\u062c\u060c \u062f\u0644\u064a\u0644 \u0627\u0644\u062e\u0631\u064a\u0637\u0629\u060c \u0648\u0645\u0647\u0627\u0645 \u062a\u062f\u062e\u0644 \u0645\u064a\u062f\u0627\u0646\u064a.",
    "Confirm the market, wallet, logistics, or AI action before the trade ledger changes.": "\u0623\u0643\u062f \u0625\u062c\u0631\u0627\u0621 \u0627\u0644\u0633\u0648\u0642 \u0623\u0648 \u0627\u0644\u0645\u062d\u0641\u0638\u0629 \u0623\u0648 \u0627\u0644\u0644\u0648\u062c\u0633\u062a\u064a\u0627\u062a \u0623\u0648 \u0627\u0644\u0630\u0643\u0627\u0621 \u0642\u0628\u0644 \u062a\u063a\u064a\u064a\u0631 \u0633\u062c\u0644 \u0627\u0644\u062a\u062c\u0627\u0631\u0629.",
    "Run the AI engine with the active country, route, checkpoint, learning, workforce, health, trade, and provider context.": "\u0634\u063a\u0644 \u0645\u062d\u0631\u0643 \u0627\u0644\u0630\u0643\u0627\u0621 \u0645\u0639 \u0627\u0644\u0628\u0644\u062f \u0627\u0644\u0646\u0634\u0637 \u0648\u0627\u0644\u0645\u0633\u0627\u0631 \u0648\u0646\u0642\u0637\u0629 \u0627\u0644\u062a\u062d\u0642\u0642 \u0648\u0627\u0644\u062a\u0639\u0644\u0645 \u0648\u0627\u0644\u0642\u0648\u0649 \u0627\u0644\u0639\u0627\u0645\u0644\u0629 \u0648\u0627\u0644\u0635\u062d\u0629 \u0648\u0627\u0644\u062a\u062c\u0627\u0631\u0629 \u0648\u0633\u064a\u0627\u0642 \u0627\u0644\u0645\u0632\u0648\u062f.",
    "Confirm": "\u062a\u0623\u0643\u064a\u062f",
    "Confirm action": "\u062a\u0623\u0643\u064a\u062f \u0627\u0644\u0625\u062c\u0631\u0627\u0621",
    "Record created": "\u062a\u0645 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0633\u062c\u0644",
    "Provider evidence": "\u062f\u0644\u064a\u0644 \u0627\u0644\u0645\u0632\u0648\u062f",
    "Workflow event and profile state update": "\u062d\u062f\u062b \u0633\u064a\u0631 \u0639\u0645\u0644 \u0648\u062a\u062d\u062f\u064a\u062b \u062d\u0627\u0644\u0629 \u0627\u0644\u0645\u0644\u0641",
    "Activity and integration audit when applicable": "\u0627\u0644\u0646\u0634\u0627\u0637 \u0648\u062a\u062f\u0642\u064a\u0642 \u0627\u0644\u062a\u0643\u0627\u0645\u0644 \u0639\u0646\u062f \u0627\u0644\u062d\u0627\u062c\u0629",
    "Workflow note": "\u0645\u0644\u0627\u062d\u0638\u0629 \u0633\u064a\u0631 \u0627\u0644\u0639\u0645\u0644",
    "Voice or typed response": "\u0631\u062f \u0635\u0648\u062a\u064a \u0623\u0648 \u0645\u0643\u062a\u0648\u0628",
    "Say or type: confirm, yes, cancel": "\u0642\u0644 \u0623\u0648 \u0627\u0643\u062a\u0628: \u062a\u0623\u0643\u064a\u062f\u060c \u0646\u0639\u0645\u060c \u0625\u0644\u063a\u0627\u0621",
    "Run response": "\u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0631\u062f",
    "Cancel": "\u0625\u0644\u063a\u0627\u0621",
    "Close": "\u0625\u063a\u0644\u0627\u0642",
    "Patient or household name": "\u0627\u0633\u0645 \u0627\u0644\u0645\u0631\u064a\u0636 \u0623\u0648 \u0627\u0644\u0623\u0633\u0631\u0629",
    "Primary health need": "\u0627\u0644\u062d\u0627\u062c\u0629 \u0627\u0644\u0635\u062d\u064a\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629",
    "Urgency": "\u0627\u0644\u0625\u0644\u062d\u0627\u062d",
    "Preferred language": "\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0645\u0641\u0636\u0644\u0629",
    "Accessibility needs": "\u0627\u062d\u062a\u064a\u0627\u062c\u0627\u062a \u0627\u0644\u0648\u0635\u0648\u0644",
    "Best contact method": "\u0623\u0641\u0636\u0644 \u0637\u0631\u064a\u0642\u0629 \u062a\u0648\u0627\u0635\u0644",
    "Caregiver or community aide": "\u0627\u0644\u0645\u0631\u0627\u0641\u0642 \u0623\u0648 \u0627\u0644\u0645\u0633\u0627\u0639\u062f \u0627\u0644\u0645\u062c\u062a\u0645\u0639\u064a"
  }
};

Object.entries(workflowModalTranslations).forEach(([lang, entries]) => {
  contentTranslations[lang] = { ...(contentTranslations[lang] || {}), ...entries };
});

const wordTranslations = {
  fr: {
    "choose": "choisir", "simple": "simple", "action": "action", "run": "lancer", "pilot": "pilote", "open": "ouvrir", "live": "actif", "module": "module",
    "start": "commencer", "course": "cours", "courses": "cours", "complete": "terminer", "lesson": "lecon", "lessons": "lecons", "issue": "emettre", "certificate": "certificat", "certificates": "certificats", "training": "formation", "content": "contenu",
    "apply": "postuler", "role": "role", "roles": "roles", "review": "revoir", "skill": "competence", "skills": "competences", "gap": "ecart", "gaps": "ecarts", "plan": "planifier", "plans": "plans", "shift": "quart", "shifts": "quarts", "track": "suivre", "readiness": "preparation",
    "accessible": "accessible", "telehealth": "telesante", "triage": "triage", "visit": "visite", "visits": "visites", "care": "soins", "patient": "patient", "patients": "patients", "support": "soutien", "workflow": "flux", "workflows": "flux",
    "manage": "gerer", "crop": "culture", "crops": "cultures", "buyer": "acheteur", "buyers": "acheteurs", "order": "commande", "orders": "commandes", "logistics": "logistique", "wallet": "wallet", "market": "marche",
    "view": "voir", "country": "pays", "operations": "operations", "drone": "drone", "missions": "missions", "provider": "fournisseur", "status": "statut", "location": "emplacement", "intelligence": "intelligence",
    "voice": "voix", "text": "texte", "commands": "commandes", "route": "orienter", "tasks": "taches", "platform": "plateforme", "check": "verifier", "engine": "moteur", "engines": "moteurs", "api": "API", "production": "production", "setup": "configuration",
    "admin": "admin", "profile": "profil", "dashboard": "tableau", "learning": "apprentissage", "workforce": "main-d'oeuvre", "health": "sante", "trade": "commerce", "map": "carte", "agent": "agent", "integrations": "integrations"
  },
  sw: {
    "choose": "chagua", "simple": "rahisi", "action": "hatua", "run": "endesha", "pilot": "jaribio", "open": "fungua", "live": "hai", "module": "moduli",
    "start": "anza", "course": "kozi", "courses": "kozi", "complete": "kamilisha", "lesson": "somo", "lessons": "masomo", "issue": "toa", "certificate": "cheti", "certificates": "vyeti", "training": "mafunzo", "content": "maudhui",
    "apply": "omba", "role": "nafasi", "roles": "nafasi", "review": "kagua", "skill": "ujuzi", "skills": "ujuzi", "gap": "pengo", "gaps": "mapengo", "plan": "panga", "plans": "mipango", "shift": "zamu", "shifts": "zamu", "track": "fuatilia", "readiness": "utayari",
    "accessible": "jumuishi", "telehealth": "teleshauri", "triage": "uchunguzi", "visit": "ziara", "visits": "ziara", "care": "huduma", "patient": "mgonjwa", "patients": "wagonjwa", "support": "msaada", "workflow": "mtiririko", "workflows": "mitiririko",
    "manage": "simamia", "crop": "zao", "crops": "mazao", "buyer": "mnunuzi", "buyers": "wanunuzi", "order": "oda", "orders": "oda", "logistics": "usafirishaji", "wallet": "pochi", "market": "soko",
    "view": "tazama", "country": "nchi", "operations": "shughuli", "drone": "drone", "missions": "misheni", "provider": "mtoa huduma", "status": "hali", "location": "eneo", "intelligence": "uchambuzi",
    "voice": "sauti", "text": "maandishi", "commands": "amri", "route": "elekeza", "tasks": "kazi", "platform": "jukwaa", "check": "kagua", "engine": "injini", "engines": "injini", "api": "API", "production": "uzalishaji", "setup": "usanidi",
    "admin": "admin", "profile": "wasifu", "dashboard": "dashibodi", "learning": "mafunzo", "workforce": "nguvukazi", "health": "afya", "trade": "biashara", "map": "ramani", "agent": "wakala", "integrations": "miunganisho"
  },
  ar: {
    "choose": "\u0627\u062e\u062a\u0631", "simple": "\u0628\u0633\u064a\u0637", "action": "\u0625\u062c\u0631\u0627\u0621", "run": "\u0634\u063a\u0644", "pilot": "\u062a\u062c\u0631\u0628\u0629", "open": "\u0627\u0641\u062a\u062d", "live": "\u0646\u0634\u0637", "module": "\u0648\u062d\u062f\u0629",
    "start": "\u0627\u0628\u062f\u0623", "course": "\u062f\u0648\u0631\u0629", "courses": "\u062f\u0648\u0631\u0627\u062a", "complete": "\u0623\u0643\u0645\u0644", "lesson": "\u062f\u0631\u0633", "lessons": "\u062f\u0631\u0648\u0633", "certificate": "\u0634\u0647\u0627\u062f\u0629", "certificates": "\u0634\u0647\u0627\u062f\u0627\u062a", "training": "\u062a\u062f\u0631\u064a\u0628", "content": "\u0645\u062d\u062a\u0648\u0649",
    "apply": "\u0642\u062f\u0645", "role": "\u0648\u0638\u064a\u0641\u0629", "roles": "\u0648\u0638\u0627\u0626\u0641", "review": "\u0631\u0627\u062c\u0639", "skill": "\u0645\u0647\u0627\u0631\u0629", "skills": "\u0645\u0647\u0627\u0631\u0627\u062a", "gap": "\u0641\u062c\u0648\u0629", "gaps": "\u0641\u062c\u0648\u0627\u062a", "plan": "\u062e\u0637\u0629", "shift": "\u0648\u0631\u062f\u064a\u0629", "track": "\u062a\u0627\u0628\u0639", "readiness": "\u062c\u0627\u0647\u0632\u064a\u0629",
    "accessible": "\u0645\u064a\u0633\u0631", "telehealth": "\u0637\u0628 \u0639\u0646 \u0628\u0639\u062f", "triage": "\u0641\u0631\u0632", "care": "\u0631\u0639\u0627\u064a\u0629", "patient": "\u0645\u0631\u064a\u0636", "patients": "\u0645\u0631\u0636\u0649", "support": "\u062f\u0639\u0645", "workflow": "\u0633\u064a\u0631 \u0639\u0645\u0644",
    "manage": "\u0623\u062f\u0631", "crop": "\u0645\u062d\u0635\u0648\u0644", "buyer": "\u0645\u0634\u062a\u0631", "order": "\u0637\u0644\u0628", "logistics": "\u0644\u0648\u062c\u0633\u062a\u064a\u0627\u062a", "wallet": "\u0645\u062d\u0641\u0638\u0629", "market": "\u0633\u0648\u0642",
    "view": "\u0627\u0639\u0631\u0636", "country": "\u0628\u0644\u062f", "operations": "\u0639\u0645\u0644\u064a\u0627\u062a", "drone": "\u062f\u0631\u0648\u0646", "provider": "\u0645\u0632\u0648\u062f", "status": "\u062d\u0627\u0644\u0629", "location": "\u0645\u0648\u0642\u0639", "intelligence": "\u0630\u0643\u0627\u0621",
    "voice": "\u0635\u0648\u062a", "text": "\u0646\u0635", "commands": "\u0623\u0648\u0627\u0645\u0631", "tasks": "\u0645\u0647\u0627\u0645", "platform": "\u0645\u0646\u0635\u0629", "engine": "\u0645\u062d\u0631\u0643", "engines": "\u0645\u062d\u0631\u0643\u0627\u062a", "production": "\u0625\u0646\u062a\u0627\u062c", "setup": "\u0625\u0639\u062f\u0627\u062f"
  }
};

const demoAccessibilityTranslations = {
  fr: {
    "Investor simulation": "Simulation investisseur",
    "WOW Demo Mode": "Mode demo WOW",
    "Run a complete rural Nigeria scenario: accessible learning, workforce placement, telehealth accessibility, trade logistics, map intelligence, AI recommendations, notifications, and provider evidence.": "Lancer un scenario rural complet au Nigeria : apprentissage accessible, placement emploi, telesante accessible, logistique commerciale, intelligence carte, recommandations IA, notifications et preuves fournisseur.",
    "Run WOW investor demo": "Lancer la demo investisseur WOW",
    "Run standard demo": "Lancer la demo standard",
    "Accessible learner starts": "L'apprenant accessible demarre",
    "Training becomes work": "La formation devient emploi",
    "Telehealth meets ADA needs": "La telesante repond aux besoins d'accessibilite",
    "AI remains supervised": "L'IA reste supervisee",
    "Trade engine moves value": "Le moteur commerce cree de la valeur",
    "Investor proof appears": "Les preuves investisseur apparaissent",
    "Run the WOW demo to complete the rural Nigeria accessibility scenario.": "Lancez la demo WOW pour completer le scenario d'accessibilite rural au Nigeria.",
    "Learning records can become workforce readiness, applications, mentor support, and shifts.": "Les dossiers de formation deviennent preparation emploi, candidatures, mentorat et quarts.",
    "Captions, audio support, caregiver handoff, and low-bandwidth support are ready to run.": "Sous-titres, support audio, passation aidant et mode faible bande passante sont prets.",
    "Every simulated action creates state, activity, provider evidence, and notifications.": "Chaque action simulee cree un etat, une activite, des preuves fournisseur et des notifications.",
    "Telehealth course completed with captions, audio guide, screen-reader outline, and offline packet.": "Cours de telesante termine avec sous-titres, guide audio, plan lecteur d'ecran et paquet hors ligne.",
    "Candidate is verified, matched to a health access role, assigned mentor support, and scheduled for a paid shift.": "Le candidat est verifie, associe a un role d'acces sante, accompagne par un mentor et planifie pour un quart paye.",
    "Patient receives caption relay, audio description, caregiver notification, and low-bandwidth callback support.": "Le patient recoit relais sous-titres, description audio, notification aidant et rappel faible bande passante.",
    "AI guidance is recorded with safety review, care plan, route intelligence, and human oversight.": "Les conseils IA sont enregistres avec revue securite, plan de soins, intelligence route et supervision humaine.",
    "Nigeria product order advances through quality check with wallet and route evidence.": "La commande produit Nigeria avance au controle qualite avec preuves wallet et route.",
    "Provider events, notifications, activity, map context, and profile state update across the whole platform.": "Evenements fournisseur, notifications, activite, contexte carte et profil se mettent a jour sur toute la plateforme.",
    "Learning accommodation + certificate": "Amenagement apprentissage + certificat",
    "HRIS + calendar + notification": "SIRH + calendrier + notification",
    "Telehealth + EHR + notification": "Telesante + DME + notification",
    "AI run + governance trail": "Execution IA + piste gouvernance",
    "Market + payment + logistics": "Marche + paiement + logistique",
    "Audit-ready operating record": "Dossier operationnel pret audit",
    "Ready to simulate": "Pret a simuler",
    "Workflow chain": "Chaine de flux",
    "Access pathway": "Parcours d'acces",
    "Audit trail": "Piste d'audit",
    "Accessible Learning Mode": "Mode apprentissage accessible",
    "Convert active lessons into captioned, screen-reader, large-print, and low-bandwidth study support for hearing and visually impaired learners.": "Convertit les lecons actives en support sous-titre, lecteur d'ecran, gros caracteres et faible bande passante pour apprenants malentendants et malvoyants.",
    "Inclusive learning": "Apprentissage inclusif",
    "ADA support": "Support accessibilite",
    "Build captions": "Creer les sous-titres",
    "Create audio guide": "Creer le guide audio",
    "Send offline packet": "Envoyer le paquet hors ligne",
    "Assistive pathway": "Parcours d'assistance",
    "Rural access": "Acces rural",
    "Learner Accommodation Plan": "Plan d'amenagement apprenant",
    "Accessible Telehealth Session": "Session telesante accessible",
    "Prepare a care session with captions, visual-assist narration, caregiver handoff, language support, and low-bandwidth fallback.": "Prepare une session de soins avec sous-titres, narration visuelle, aidant, langue et secours faible bande passante.",
    "Inclusive telehealth": "Telesante inclusive",
    "Hearing + vision": "Audition + vision",
    "Build access plan": "Creer le plan d'acces",
    "Start caption relay": "Demarrer le relais sous-titres",
    "Notify caregiver": "Notifier l'aidant",
    "Patient support": "Support patient",
    "Accessibility Case Notes": "Notes de cas accessibilite",
    "Hearing support": "Support auditif",
    "Vision support": "Support visuel",
    "Bandwidth mode": "Mode bande passante",
    "Preferred formats": "Formats preferes",
    "Last accommodation": "Dernier amenagement",
    "Captions, transcript, and relay handoff": "Sous-titres, transcription et passation relais",
    "Audio guide, screen-reader outline, and large print": "Guide audio, plan lecteur d'ecran et gros caracteres",
    "No accessible lesson packet yet": "Aucun paquet de lecon accessible",
    "No accessible learning accommodations prepared yet.": "Aucun amenagement d'apprentissage accessible prepare.",
    "Active access case": "Cas d'acces actif",
    "Caption relay and transcript": "Relais sous-titres et transcription",
    "Audio description and large-print summary": "Description audio et resume gros caracteres",
    "Rural fallback": "Secours rural",
    "SMS, callback, and offline packet": "SMS, rappel et paquet hors ligne",
    "Last action": "Derniere action",
    "No accessibility session yet": "Aucune session accessibilite",
    "No telehealth accessibility notes recorded yet.": "Aucune note d'accessibilite telesante enregistree."
  },
  sw: {
    "Investor simulation": "Uigaji wa wawekezaji",
    "WOW Demo Mode": "Hali ya onyesho la WOW",
    "Run a complete rural Nigeria scenario: accessible learning, workforce placement, telehealth accessibility, trade logistics, map intelligence, AI recommendations, notifications, and provider evidence.": "Endesha tukio kamili la vijijini Nigeria: mafunzo jumuishi, upangaji wa kazi, teleshauri jumuishi, usafirishaji wa biashara, uchambuzi wa ramani, mapendekezo ya AI, arifa, na ushahidi wa watoa huduma.",
    "Run WOW investor demo": "Endesha onyesho la WOW kwa wawekezaji",
    "Run standard demo": "Endesha onyesho la kawaida",
    "Accessible learner starts": "Mwanafunzi jumuishi anaanza",
    "Training becomes work": "Mafunzo yanakuwa kazi",
    "Telehealth meets ADA needs": "Teleshauri inakidhi mahitaji ya ufikivu",
    "AI remains supervised": "AI inabaki chini ya usimamizi",
    "Trade engine moves value": "Injini ya biashara inasogeza thamani",
    "Investor proof appears": "Ushahidi wa wawekezaji unaonekana",
    "Run the WOW demo to complete the rural Nigeria accessibility scenario.": "Endesha onyesho la WOW kukamilisha tukio la ufikivu vijijini Nigeria.",
    "Learning records can become workforce readiness, applications, mentor support, and shifts.": "Rekodi za mafunzo zinaweza kuwa utayari wa kazi, maombi, msaada wa mshauri, na zamu.",
    "Captions, audio support, caregiver handoff, and low-bandwidth support are ready to run.": "Manukuu, msaada wa sauti, makabidhiano kwa mlezi, na msaada wa intaneti hafifu viko tayari.",
    "Every simulated action creates state, activity, provider evidence, and notifications.": "Kila kitendo cha uigaji huunda hali, shughuli, ushahidi wa mtoa huduma, na arifa.",
    "Telehealth course completed with captions, audio guide, screen-reader outline, and offline packet.": "Kozi ya teleshauri imekamilika kwa manukuu, mwongozo wa sauti, muhtasari wa kisoma-skrini, na kifurushi cha nje ya mtandao.",
    "Candidate is verified, matched to a health access role, assigned mentor support, and scheduled for a paid shift.": "Mgombea amethibitishwa, ameunganishwa na nafasi ya ufikivu wa afya, amepewa mshauri, na kupangiwa zamu ya kulipwa.",
    "Patient receives caption relay, audio description, caregiver notification, and low-bandwidth callback support.": "Mgonjwa hupokea relay ya manukuu, maelezo ya sauti, arifa ya mlezi, na msaada wa kupigiwa simu kwa intaneti hafifu.",
    "AI guidance is recorded with safety review, care plan, route intelligence, and human oversight.": "Mwongozo wa AI hurekodiwa pamoja na ukaguzi wa usalama, mpango wa huduma, uchambuzi wa njia, na usimamizi wa binadamu.",
    "Nigeria product order advances through quality check with wallet and route evidence.": "Oda ya bidhaa ya Nigeria inasonga kupitia ukaguzi wa ubora pamoja na ushahidi wa pochi na njia.",
    "Provider events, notifications, activity, map context, and profile state update across the whole platform.": "Matukio ya watoa huduma, arifa, shughuli, muktadha wa ramani, na hali ya wasifu husasishwa kote kwenye jukwaa.",
    "Learning accommodation + certificate": "Msaada wa mafunzo + cheti",
    "HRIS + calendar + notification": "HRIS + kalenda + arifa",
    "Telehealth + EHR + notification": "Teleshauri + EHR + arifa",
    "AI run + governance trail": "Uendeshaji wa AI + njia ya usimamizi",
    "Market + payment + logistics": "Soko + malipo + usafirishaji",
    "Audit-ready operating record": "Rekodi ya uendeshaji iliyo tayari kukaguliwa",
    "Ready to simulate": "Tayari kuiga",
    "Workflow chain": "Mnyororo wa mtiririko",
    "Access pathway": "Njia ya ufikivu",
    "Audit trail": "Njia ya ukaguzi",
    "Accessible Learning Mode": "Hali ya mafunzo jumuishi",
    "Convert active lessons into captioned, screen-reader, large-print, and low-bandwidth study support for hearing and visually impaired learners.": "Badilisha masomo hai kuwa msaada wenye manukuu, kisoma-skrini, maandishi makubwa, na matumizi ya intaneti hafifu kwa wanafunzi wenye changamoto ya kusikia au kuona.",
    "Inclusive learning": "Mafunzo jumuishi",
    "ADA support": "Msaada wa ufikivu",
    "Build captions": "Tengeneza manukuu",
    "Create audio guide": "Tengeneza mwongozo wa sauti",
    "Send offline packet": "Tuma kifurushi cha nje ya mtandao",
    "Assistive pathway": "Njia ya msaada",
    "Rural access": "Ufikivu vijijini",
    "Learner Accommodation Plan": "Mpango wa msaada wa mwanafunzi",
    "Accessible Telehealth Session": "Kikao cha teleshauri jumuishi",
    "Prepare a care session with captions, visual-assist narration, caregiver handoff, language support, and low-bandwidth fallback.": "Andaa kikao cha huduma chenye manukuu, usaidizi wa sauti kwa kuona, makabidhiano kwa mlezi, msaada wa lugha, na njia mbadala kwa intaneti hafifu.",
    "Inclusive telehealth": "Teleshauri jumuishi",
    "Hearing + vision": "Kusikia + kuona",
    "Build access plan": "Jenga mpango wa ufikivu",
    "Start caption relay": "Anza relay ya manukuu",
    "Notify caregiver": "Mjulishe mlezi",
    "Patient support": "Msaada wa mgonjwa",
    "Accessibility Case Notes": "Maelezo ya kesi ya ufikivu",
    "Hearing support": "Msaada wa kusikia",
    "Vision support": "Msaada wa kuona",
    "Bandwidth mode": "Hali ya intaneti",
    "Preferred formats": "Miundo inayopendelewa",
    "Last accommodation": "Msaada wa mwisho",
    "Captions, transcript, and relay handoff": "Manukuu, nakala ya maandishi, na makabidhiano ya relay",
    "Audio guide, screen-reader outline, and large print": "Mwongozo wa sauti, muhtasari wa kisoma-skrini, na maandishi makubwa",
    "No accessible lesson packet yet": "Hakuna kifurushi cha somo jumuishi bado",
    "No accessible learning accommodations prepared yet.": "Hakuna msaada wa mafunzo jumuishi uliotayarishwa bado.",
    "Active access case": "Kesi hai ya ufikivu",
    "Caption relay and transcript": "Relay ya manukuu na nakala ya maandishi",
    "Audio description and large-print summary": "Maelezo ya sauti na muhtasari wa maandishi makubwa",
    "Rural fallback": "Njia mbadala ya vijijini",
    "SMS, callback, and offline packet": "SMS, kupigiwa simu, na kifurushi cha nje ya mtandao",
    "Last action": "Hatua ya mwisho",
    "No accessibility session yet": "Hakuna kikao cha ufikivu bado",
    "No telehealth accessibility notes recorded yet.": "Hakuna maelezo ya ufikivu wa teleshauri yaliyorekodiwa bado.",
    "Captioned lesson packet": "Kifurushi cha somo lenye manukuu",
    "Audio guide and screen-reader outline": "Mwongozo wa sauti na muhtasari wa kisoma-skrini",
    "Offline low-bandwidth packet": "Kifurushi cha nje ya mtandao kwa intaneti hafifu",
    "Accessible telehealth plan": "Mpango wa teleshauri jumuishi",
    "Caption relay session": "Kikao cha relay ya manukuu",
    "Caregiver accessibility notification": "Arifa ya ufikivu kwa mlezi",
    "Access plan ready": "Mpango wa ufikivu uko tayari",
    "Caption relay active": "Relay ya manukuu inaendelea",
    "Caregiver notified": "Mlezi amejulishwa",
    "Accessibility prepared": "Ufikivu umetayarishwa"
  },
  ar: {
    "Investor simulation": "\u0645\u062d\u0627\u0643\u0627\u0629 \u0627\u0644\u0645\u0633\u062a\u062b\u0645\u0631",
    "WOW Demo Mode": "\u0648\u0636\u0639 \u0639\u0631\u0636 WOW",
    "Run WOW investor demo": "\u062a\u0634\u063a\u064a\u0644 \u0639\u0631\u0636 WOW \u0644\u0644\u0645\u0633\u062a\u062b\u0645\u0631",
    "Run standard demo": "\u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u0642\u064a\u0627\u0633\u064a",
    "Accessible learner starts": "\u0628\u062f\u0621 \u0627\u0644\u0645\u062a\u0639\u0644\u0645 \u0627\u0644\u0645\u064a\u0633\u0631",
    "Training becomes work": "\u0627\u0644\u062a\u062f\u0631\u064a\u0628 \u064a\u0635\u0628\u062d \u0639\u0645\u0644\u0627",
    "Telehealth meets ADA needs": "\u0627\u0644\u0637\u0628 \u0639\u0646 \u0628\u0639\u062f \u064a\u0644\u0628\u064a \u0627\u062d\u062a\u064a\u0627\u062c\u0627\u062a \u0627\u0644\u0648\u0635\u0648\u0644",
    "AI remains supervised": "\u0627\u0644\u0630\u0643\u0627\u0621 \u064a\u0628\u0642\u0649 \u062a\u062d\u062a \u0627\u0644\u0625\u0634\u0631\u0627\u0641",
    "Trade engine moves value": "\u0645\u062d\u0631\u0643 \u0627\u0644\u062a\u062c\u0627\u0631\u0629 \u064a\u062d\u0631\u0643 \u0627\u0644\u0642\u064a\u0645\u0629",
    "Investor proof appears": "\u062a\u0638\u0647\u0631 \u0623\u062f\u0644\u0629 \u0627\u0644\u0645\u0633\u062a\u062b\u0645\u0631",
    "Ready to simulate": "\u062c\u0627\u0647\u0632 \u0644\u0644\u0645\u062d\u0627\u0643\u0627\u0629",
    "Workflow chain": "\u0633\u0644\u0633\u0644\u0629 \u0627\u0644\u0639\u0645\u0644",
    "Access pathway": "\u0645\u0633\u0627\u0631 \u0627\u0644\u0648\u0635\u0648\u0644",
    "Audit trail": "\u0645\u0633\u0627\u0631 \u0627\u0644\u062a\u062f\u0642\u064a\u0642",
    "Accessible Learning Mode": "\u0648\u0636\u0639 \u0627\u0644\u062a\u0639\u0644\u0645 \u0627\u0644\u0645\u064a\u0633\u0631",
    "Inclusive learning": "\u062a\u0639\u0644\u0645 \u0634\u0627\u0645\u0644",
    "ADA support": "\u062f\u0639\u0645 \u0627\u0644\u0648\u0635\u0648\u0644",
    "Build captions": "\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062a\u0633\u0645\u064a\u0627\u062a",
    "Create audio guide": "\u0625\u0646\u0634\u0627\u0621 \u062f\u0644\u064a\u0644 \u0635\u0648\u062a\u064a",
    "Send offline packet": "\u0625\u0631\u0633\u0627\u0644 \u062d\u0632\u0645\u0629 \u0628\u062f\u0648\u0646 \u0627\u062a\u0635\u0627\u0644",
    "Assistive pathway": "\u0645\u0633\u0627\u0631 \u0645\u0633\u0627\u0639\u062f",
    "Rural access": "\u0648\u0635\u0648\u0644 \u0631\u064a\u0641\u064a",
    "Learner Accommodation Plan": "\u062e\u0637\u0629 \u062a\u064a\u0633\u064a\u0631 \u0627\u0644\u0645\u062a\u0639\u0644\u0645",
    "Accessible Telehealth Session": "\u062c\u0644\u0633\u0629 \u0637\u0628 \u0639\u0646 \u0628\u0639\u062f \u0645\u064a\u0633\u0631\u0629",
    "Inclusive telehealth": "\u0637\u0628 \u0639\u0646 \u0628\u0639\u062f \u0634\u0627\u0645\u0644",
    "Hearing + vision": "\u0633\u0645\u0639 + \u0628\u0635\u0631",
    "Build access plan": "\u0628\u0646\u0627\u0621 \u062e\u0637\u0629 \u0627\u0644\u0648\u0635\u0648\u0644",
    "Start caption relay": "\u0628\u062f\u0621 \u062e\u062f\u0645\u0629 \u0627\u0644\u062a\u0633\u0645\u064a\u0627\u062a",
    "Notify caregiver": "\u0625\u062e\u0637\u0627\u0631 \u0645\u0642\u062f\u0645 \u0627\u0644\u0631\u0639\u0627\u064a\u0629",
    "Patient support": "\u062f\u0639\u0645 \u0627\u0644\u0645\u0631\u064a\u0636",
    "Accessibility Case Notes": "\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u062d\u0627\u0644\u0629 \u0627\u0644\u0648\u0635\u0648\u0644",
    "Hearing support": "\u062f\u0639\u0645 \u0627\u0644\u0633\u0645\u0639",
    "Vision support": "\u062f\u0639\u0645 \u0627\u0644\u0628\u0635\u0631",
    "Bandwidth mode": "\u0648\u0636\u0639 \u0627\u0644\u0627\u062a\u0635\u0627\u0644",
    "Preferred formats": "\u0627\u0644\u0635\u064a\u063a \u0627\u0644\u0645\u0641\u0636\u0644\u0629",
    "Last accommodation": "\u0622\u062e\u0631 \u062a\u064a\u0633\u064a\u0631",
    "Active access case": "\u062d\u0627\u0644\u0629 \u0648\u0635\u0648\u0644 \u0646\u0634\u0637\u0629",
    "Rural fallback": "\u062e\u064a\u0627\u0631 \u0631\u064a\u0641\u064a \u0628\u062f\u064a\u0644",
    "Last action": "\u0622\u062e\u0631 \u0625\u062c\u0631\u0627\u0621",
    "Captioned lesson packet": "\u062d\u0632\u0645\u0629 \u062f\u0631\u0633 \u0628\u062a\u0633\u0645\u064a\u0627\u062a",
    "Audio guide and screen-reader outline": "\u062f\u0644\u064a\u0644 \u0635\u0648\u062a\u064a \u0648\u0645\u062e\u0637\u0637 \u0642\u0627\u0631\u0626 \u0627\u0644\u0634\u0627\u0634\u0629",
    "Offline low-bandwidth packet": "\u062d\u0632\u0645\u0629 \u0645\u0646\u062e\u0641\u0636\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a",
    "Accessible telehealth plan": "\u062e\u0637\u0629 \u0637\u0628 \u0639\u0646 \u0628\u0639\u062f \u0645\u064a\u0633\u0631\u0629",
    "Caption relay session": "\u062c\u0644\u0633\u0629 \u062a\u0633\u0645\u064a\u0627\u062a",
    "Caregiver accessibility notification": "\u0625\u062e\u0637\u0627\u0631 \u0645\u0642\u062f\u0645 \u0627\u0644\u0631\u0639\u0627\u064a\u0629 \u0628\u0627\u0644\u0648\u0635\u0648\u0644",
    "Access plan ready": "\u062e\u0637\u0629 \u0627\u0644\u0648\u0635\u0648\u0644 \u062c\u0627\u0647\u0632\u0629",
    "Caption relay active": "\u062e\u062f\u0645\u0629 \u0627\u0644\u062a\u0633\u0645\u064a\u0627\u062a \u0646\u0634\u0637\u0629",
    "Caregiver notified": "\u062a\u0645 \u0625\u062e\u0637\u0627\u0631 \u0645\u0642\u062f\u0645 \u0627\u0644\u0631\u0639\u0627\u064a\u0629"
  }
};

Object.entries(demoAccessibilityTranslations).forEach(([lang, entries]) => {
  contentTranslations[lang] = { ...(contentTranslations[lang] || {}), ...entries };
});

const moduleWideTranslations = {
  fr: {
    "Active Context": "Contexte actif",
    "Recent Activity": "Activite recente",
    "Current access status": "Etat d'acces actuel",
    "Candidate stage": "Etape candidat",
    "Role Marketplace": "Marche des roles",
    "Readiness and certificates determine eligibility": "La preparation et les certificats determinent l'eligibilite",
    "Candidate Profile": "Profil candidat",
    "Applications": "Candidatures",
    "Shift Schedule": "Planning des quarts",
    "AI Workforce Coach": "Coach IA main-d'oeuvre",
    "Workforce Provider Evidence": "Preuves fournisseur main-d'oeuvre",
    "Workforce Engine Tests": "Tests moteur main-d'oeuvre",
    "Build profile": "Creer le profil",
    "Schedule interview": "Planifier l'entretien",
    "Assign mentor": "Assigner un mentor",
    "Start shift": "Demarrer le quart",
    "Review readiness gaps": "Revoir les ecarts de preparation",
    "Prep interview": "Preparer l'entretien",
    "Test workforce engines": "Tester les moteurs main-d'oeuvre",
    "Active Case": "Cas actif",
    "Intake Queue": "File d'admission",
    "Care Plans": "Plans de soins",
    "Safety Reviews": "Revues de securite",
    "AI Governance": "Gouvernance IA",
    "Telehealth Provider Evidence": "Preuves fournisseur telesante",
    "Healthcare Engine Tests": "Tests moteur sante",
    "Run AI triage": "Lancer triage IA",
    "Run map inspector": "Lancer inspecteur carte",
    "Test healthcare engines": "Tester moteurs sante",
    "Product Market": "Marche produits",
    "Wallet Ledger": "Registre wallet",
    "Trade Route": "Route commerciale",
    "Trade Provider Evidence": "Preuves fournisseur commerce",
    "Trade Engine Tests": "Tests moteur commerce",
    "Create buyer order": "Creer commande acheteur",
    "Advance logistics": "Avancer logistique",
    "Post wallet payment": "Publier paiement wallet",
    "Run market AI": "Lancer IA marche",
    "Create trade order": "Creer commande commerciale",
    "Open Trade": "Ouvrir commerce",
    "Map Evidence": "Preuves carte",
    "Provider Workbench": "Poste fournisseur",
    "Provider Cards": "Cartes fournisseur",
    "Admin Control Room": "Salle de controle admin",
    "Module Records": "Dossiers modules",
    "Audit Feed": "Flux audit",
    "Production Readiness": "Preparation production",
    "Unified Profile": "Profil unifie",
    "Learning Provider Evidence": "Preuves fournisseur apprentissage",
    "Learning Engine Tests": "Tests moteur apprentissage",
    "AI Tutor": "Tuteur IA",
    "Ask AI tutor": "Demander au tuteur IA",
    "Generate quiz help": "Generer aide quiz",
    "Test learning engines": "Tester moteurs apprentissage",
    "Learning Record": "Dossier d'apprentissage",
    "Certificates": "Certificats",
    "Pathway": "Parcours",
    "Current focus": "Priorite actuelle",
    "Readiness": "Preparation",
    "Provider evidence": "Preuves fournisseur",
    "Provider Evidence": "Preuves fournisseur",
    "Engine Tests": "Tests moteur",
    "No provider evidence yet.": "Aucune preuve fournisseur.",
    "No AI guidance yet.": "Aucune guidance IA.",
    "No applications submitted yet.": "Aucune candidature soumise.",
    "No shifts scheduled yet.": "Aucun quart planifie.",
    "No patient intakes yet.": "Aucune admission patient.",
    "No care plans generated yet.": "Aucun plan de soins genere.",
    "No safety reviews run yet.": "Aucune revue securite lancee.",
    "No wallet transactions yet.": "Aucune transaction wallet.",
    "No orders created yet.": "Aucune commande creee.",
    "No AI run yet": "Aucune execution IA",
    "No events yet": "Aucun evenement",
    "No active intake": "Aucune admission active",
    "Start an intake to open a case": "Demarrer une admission pour ouvrir un cas",
    "Not connected": "Non connecte",
    "Connected": "Connecte",
    "Locked": "Verrouille",
    "Submitted": "Soumis",
    "Booked": "Reserve",
    "Reviewed": "Revise",
    "Needs intake": "Admission requise",
    "Needs profile": "Profil requis",
    "Needs readiness": "Preparation requise",
    "Ready to apply": "Pret a postuler",
    "Apply now": "Postuler maintenant",
    "Review gaps": "Revoir les ecarts",
    "Human review": "Revue humaine",
    "Required before committing AI-guided actions": "Requise avant de confirmer les actions guidees par IA",
    "Latest run": "Derniere execution",
    "Mode": "Mode",
    "Provider": "Fournisseur",
    "Records": "Dossiers",
    "Module": "Module",
    "Action": "Action",
    "Detail": "Detail",
    "Created": "Cree",
    "Live": "Direct",
    "Ready": "Pret",
    "Fallback": "Secours",
    "Sandbox": "Bac a sable",
    "Local": "Local",
    "Credential": "Identifiant",
    "Credential workflow": "Flux certificat",
    "Learning workflow": "Flux apprentissage",
    "Workforce workflow": "Flux main-d'oeuvre",
    "Health workflow": "Flux sante",
    "Trade workflow": "Flux commerce",
    "Confirm": "Confirmer",
    "Confirm action": "Confirmer l'action",
    "Cancel": "Annuler",
    "Close": "Fermer",
    "Record created": "Dossier cree",
    "Human oversight": "Supervision humaine",
    "Governance": "Gouvernance",
    "Assistive support": "Support d'assistance",
    "Country context": "Contexte pays",
    "Active case": "Cas actif",
    "Course context": "Contexte cours",
    "Learner need": "Besoin apprenant",
    "Assistive output": "Sortie d'assistance",
    "Prepared": "Prepare",
    "Access": "Acces",
    "Case": "Cas",
    "Safety": "Securite",
    "Course": "Cours",
    "Modules": "Modules",
    "Outcome": "Resultat",
    "Record": "Dossier",
    "Assessment": "Evaluation",
    "Credential": "Certificat",
    "Hours": "Heures",
    "Activity": "Activite",
    "Role": "Role",
    "Support": "Support",
    "Schedule": "Planning",
    "Notify": "Notifier",
    "Market": "Marche",
    "Payment": "Paiement",
    "Logistics": "Logistique",
    "Wallet": "Wallet",
    "Volume": "Volume",
    "Network": "Reseau"
  },
  sw: {
    "Active Context": "Muktadha hai",
    "Recent Activity": "Shughuli za karibuni",
    "Current access status": "Hali ya ufikivu wa sasa",
    "Candidate stage": "Hatua ya mgombea",
    "Role Marketplace": "Soko la nafasi",
    "Readiness and certificates determine eligibility": "Utayari na vyeti huamua ustahiki",
    "Candidate Profile": "Wasifu wa mgombea",
    "Applications": "Maombi",
    "Shift Schedule": "Ratiba ya zamu",
    "AI Workforce Coach": "Kocha wa AI wa nguvukazi",
    "Workforce Provider Evidence": "Ushahidi wa mtoa huduma wa nguvukazi",
    "Workforce Engine Tests": "Majaribio ya injini za nguvukazi",
    "Build profile": "Jenga wasifu",
    "Schedule interview": "Panga mahojiano",
    "Assign mentor": "Mpe mshauri",
    "Start shift": "Anza zamu",
    "Review readiness gaps": "Kagua mapengo ya utayari",
    "Prep interview": "Andaa mahojiano",
    "Test workforce engines": "Jaribu injini za nguvukazi",
    "Active Case": "Kesi hai",
    "Intake Queue": "Foleni ya usajili",
    "Care Plans": "Mipango ya huduma",
    "Safety Reviews": "Ukaguzi wa usalama",
    "AI Governance": "Usimamizi wa AI",
    "Telehealth Provider Evidence": "Ushahidi wa mtoa huduma wa teleshauri",
    "Healthcare Engine Tests": "Majaribio ya injini za afya",
    "Run AI triage": "Endesha upangaji wa AI",
    "Run map inspector": "Endesha mkaguzi wa ramani",
    "Test healthcare engines": "Jaribu injini za afya",
    "Product Market": "Soko la bidhaa",
    "Wallet Ledger": "Daftari la pochi",
    "Trade Route": "Njia ya biashara",
    "Trade Provider Evidence": "Ushahidi wa mtoa huduma wa biashara",
    "Trade Engine Tests": "Majaribio ya injini za biashara",
    "Create buyer order": "Tengeneza oda ya mnunuzi",
    "Advance logistics": "Sogeza usafirishaji",
    "Post wallet payment": "Weka malipo ya pochi",
    "Run market AI": "Endesha AI ya soko",
    "Create trade order": "Tengeneza oda ya biashara",
    "Open Trade": "Fungua biashara",
    "Map Evidence": "Ushahidi wa ramani",
    "Provider Workbench": "Sehemu ya kazi ya watoa huduma",
    "Provider Cards": "Kadi za watoa huduma",
    "Admin Control Room": "Chumba cha udhibiti",
    "Module Records": "Rekodi za moduli",
    "Audit Feed": "Mtiririko wa ukaguzi",
    "Production Readiness": "Utayari wa uzalishaji",
    "Unified Profile": "Wasifu uliounganishwa",
    "Learning Provider Evidence": "Ushahidi wa mtoa huduma wa mafunzo",
    "Learning Engine Tests": "Majaribio ya injini za mafunzo",
    "AI Tutor": "Mwalimu wa AI",
    "Ask AI tutor": "Uliza mwalimu wa AI",
    "Generate quiz help": "Tengeneza msaada wa jaribio",
    "Test learning engines": "Jaribu injini za mafunzo",
    "Learning Record": "Rekodi ya mafunzo",
    "Certificates": "Vyeti",
    "Pathway": "Njia",
    "Current focus": "Lengo la sasa",
    "Readiness": "Utayari",
    "Provider evidence": "Ushahidi wa mtoa huduma",
    "Provider Evidence": "Ushahidi wa mtoa huduma",
    "Engine Tests": "Majaribio ya injini",
    "No provider evidence yet.": "Hakuna ushahidi wa mtoa huduma bado.",
    "No AI guidance yet.": "Hakuna mwongozo wa AI bado.",
    "No applications submitted yet.": "Hakuna maombi yaliyowasilishwa bado.",
    "No shifts scheduled yet.": "Hakuna zamu zilizopangwa bado.",
    "No patient intakes yet.": "Hakuna usajili wa wagonjwa bado.",
    "No care plans generated yet.": "Hakuna mipango ya huduma iliyotengenezwa bado.",
    "No safety reviews run yet.": "Hakuna ukaguzi wa usalama ulioendeshwa bado.",
    "No wallet transactions yet.": "Hakuna miamala ya pochi bado.",
    "No orders created yet.": "Hakuna oda zilizotengenezwa bado.",
    "No AI run yet": "Hakuna uendeshaji wa AI bado",
    "No events yet": "Hakuna matukio bado",
    "No active intake": "Hakuna usajili hai",
    "Start an intake to open a case": "Anza usajili kufungua kesi",
    "Not connected": "Haijaunganishwa",
    "Connected": "Imeunganishwa",
    "Locked": "Imefungwa",
    "Submitted": "Imewasilishwa",
    "Booked": "Imepangwa",
    "Reviewed": "Imekaguliwa",
    "Needs intake": "Inahitaji usajili",
    "Needs profile": "Inahitaji wasifu",
    "Needs readiness": "Inahitaji utayari",
    "Ready to apply": "Tayari kuomba",
    "Apply now": "Omba sasa",
    "Review gaps": "Kagua mapengo",
    "Human review": "Mapitio ya binadamu",
    "Required before committing AI-guided actions": "Inahitajika kabla ya kuthibitisha hatua zinazoongozwa na AI",
    "Latest run": "Uendeshaji wa mwisho",
    "Mode": "Hali",
    "Provider": "Mtoa huduma",
    "Records": "Rekodi",
    "Module": "Moduli",
    "Action": "Hatua",
    "Detail": "Maelezo",
    "Created": "Imeundwa",
    "Live": "Moja kwa moja",
    "Ready": "Tayari",
    "Fallback": "Njia mbadala",
    "Sandbox": "Mazingira ya jaribio",
    "Local": "Ya ndani",
    "Credential workflow": "Mtiririko wa cheti",
    "Learning workflow": "Mtiririko wa mafunzo",
    "Workforce workflow": "Mtiririko wa nguvukazi",
    "Health workflow": "Mtiririko wa afya",
    "Trade workflow": "Mtiririko wa biashara",
    "Confirm": "Thibitisha",
    "Confirm action": "Thibitisha hatua",
    "Cancel": "Ghairi",
    "Close": "Funga",
    "Record created": "Rekodi imeundwa",
    "Human oversight": "Usimamizi wa binadamu",
    "Governance": "Usimamizi",
    "Assistive support": "Msaada wa ufikivu",
    "Country context": "Muktadha wa nchi",
    "Active case": "Kesi hai",
    "Course context": "Muktadha wa kozi",
    "Learner need": "Hitaji la mwanafunzi",
    "Assistive output": "Matokeo ya usaidizi",
    "Prepared": "Imetayarishwa",
    "Access": "Ufikivu",
    "Case": "Kesi",
    "Safety": "Usalama",
    "Course": "Kozi",
    "Modules": "Moduli",
    "Outcome": "Matokeo",
    "Record": "Rekodi",
    "Assessment": "Tathmini",
    "Credential": "Cheti",
    "Hours": "Saa",
    "Activity": "Shughuli",
    "Role": "Nafasi",
    "Support": "Msaada",
    "Schedule": "Ratiba",
    "Notify": "Arifu",
    "Market": "Soko",
    "Payment": "Malipo",
    "Logistics": "Usafirishaji",
    "Volume": "Kiasi",
    "Network": "Mtandao",
    "Profile": "Wasifu",
    "Interview": "Mahojiano",
    "Mentor": "Mshauri",
    "Shift": "Zamu",
    "Placement": "Upangaji kazi",
    "Calendar": "Kalenda",
    "HRIS": "HRIS",
    "EHR": "EHR",
    "Telehealth": "Teleshauri",
    "Notification provider": "Mtoa huduma wa arifa",
    "EHR provider": "Mtoa huduma wa EHR",
    "Telehealth provider": "Mtoa huduma wa teleshauri",
    "Certificate provider": "Mtoa huduma wa vyeti",
    "Payment provider": "Mtoa huduma wa malipo",
    "Logistics provider": "Mtoa huduma wa usafirishaji",
    "Market provider": "Mtoa huduma wa soko"
  },
  ar: {
    "Active Context": "\u0627\u0644\u0633\u064a\u0627\u0642 \u0627\u0644\u0646\u0634\u0637",
    "Recent Activity": "\u0627\u0644\u0646\u0634\u0627\u0637 \u0627\u0644\u0623\u062e\u064a\u0631",
    "Candidate Profile": "\u0645\u0644\u0641 \u0627\u0644\u0645\u0631\u0634\u062d",
    "Applications": "\u0627\u0644\u0637\u0644\u0628\u0627\u062a",
    "Shift Schedule": "\u062c\u062f\u0648\u0644 \u0627\u0644\u0648\u0631\u062f\u064a\u0627\u062a",
    "Active Case": "\u0627\u0644\u062d\u0627\u0644\u0629 \u0627\u0644\u0646\u0634\u0637\u0629",
    "Intake Queue": "\u0637\u0627\u0628\u0648\u0631 \u0627\u0644\u0627\u0633\u062a\u0642\u0628\u0627\u0644",
    "Care Plans": "\u062e\u0637\u0637 \u0627\u0644\u0631\u0639\u0627\u064a\u0629",
    "Safety Reviews": "\u0645\u0631\u0627\u062c\u0639\u0627\u062a \u0627\u0644\u0633\u0644\u0627\u0645\u0629",
    "AI Governance": "\u062d\u0648\u0643\u0645\u0629 \u0627\u0644\u0630\u0643\u0627\u0621",
    "Product Market": "\u0633\u0648\u0642 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a",
    "Wallet Ledger": "\u0633\u062c\u0644 \u0627\u0644\u0645\u062d\u0641\u0638\u0629",
    "Trade Route": "\u0645\u0633\u0627\u0631 \u0627\u0644\u062a\u062c\u0627\u0631\u0629",
    "Admin Control Room": "\u063a\u0631\u0641\u0629 \u0627\u0644\u062a\u062d\u0643\u0645",
    "Unified Profile": "\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0645\u0648\u062d\u062f",
    "Learning Record": "\u0633\u062c\u0644 \u0627\u0644\u062a\u0639\u0644\u0645",
    "Certificates": "\u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a",
    "Provider Evidence": "\u0623\u062f\u0644\u0629 \u0627\u0644\u0645\u0632\u0648\u062f",
    "Engine Tests": "\u0627\u062e\u062a\u0628\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u062d\u0631\u0643",
    "No applications submitted yet.": "\u0644\u0627 \u062a\u0648\u062c\u062f \u0637\u0644\u0628\u0627\u062a \u0628\u0639\u062f.",
    "No shifts scheduled yet.": "\u0644\u0627 \u062a\u0648\u062c\u062f \u0648\u0631\u062f\u064a\u0627\u062a \u0645\u062c\u062f\u0648\u0644\u0629.",
    "No patient intakes yet.": "\u0644\u0627 \u062a\u0648\u062c\u062f \u0627\u0633\u062a\u0642\u0628\u0627\u0644\u0627\u062a \u0645\u0631\u0636\u0649.",
    "No care plans generated yet.": "\u0644\u0627 \u062a\u0648\u062c\u062f \u062e\u0637\u0637 \u0631\u0639\u0627\u064a\u0629.",
    "No active intake": "\u0644\u0627 \u064a\u0648\u062c\u062f \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0646\u0634\u0637",
    "Not connected": "\u063a\u064a\u0631 \u0645\u062a\u0635\u0644",
    "Locked": "\u0645\u063a\u0644\u0642",
    "Submitted": "\u0645\u0642\u062f\u0645",
    "Human review": "\u0645\u0631\u0627\u062c\u0639\u0629 \u0628\u0634\u0631\u064a\u0629",
    "Latest run": "\u0622\u062e\u0631 \u062a\u0634\u063a\u064a\u0644",
    "Mode": "\u0627\u0644\u0648\u0636\u0639",
    "Records": "\u0633\u062c\u0644\u0627\u062a",
    "Module": "\u0648\u062d\u062f\u0629",
    "Action": "\u0625\u062c\u0631\u0627\u0621",
    "Detail": "\u062a\u0641\u0627\u0635\u064a\u0644",
    "Created": "\u062a\u0645 \u0627\u0644\u0625\u0646\u0634\u0627\u0621",
    "Confirm": "\u062a\u0623\u0643\u064a\u062f",
    "Cancel": "\u0625\u0644\u063a\u0627\u0621",
    "Close": "\u0625\u063a\u0644\u0627\u0642",
    "Record created": "\u062a\u0645 \u0625\u0646\u0634\u0627\u0621 \u0633\u062c\u0644",
    "Human oversight": "\u0625\u0634\u0631\u0627\u0641 \u0628\u0634\u0631\u064a",
    "Governance": "\u062d\u0648\u0643\u0645\u0629",
    "Assistive support": "\u062f\u0639\u0645 \u0645\u0633\u0627\u0639\u062f",
    "Active case": "\u062d\u0627\u0644\u0629 \u0646\u0634\u0637\u0629",
    "Case": "\u062d\u0627\u0644\u0629",
    "Safety": "\u0633\u0644\u0627\u0645\u0629",
    "Course": "\u062f\u0648\u0631\u0629",
    "Modules": "\u0648\u062d\u062f\u0627\u062a",
    "Outcome": "\u0646\u062a\u064a\u062c\u0629",
    "Record": "\u0633\u062c\u0644",
    "Assessment": "\u062a\u0642\u064a\u064a\u0645",
    "Credential": "\u0627\u0639\u062a\u0645\u0627\u062f",
    "Hours": "\u0633\u0627\u0639\u0627\u062a",
    "Role": "\u062f\u0648\u0631",
    "Support": "\u062f\u0639\u0645",
    "Schedule": "\u062c\u062f\u0648\u0644",
    "Notify": "\u0625\u062e\u0637\u0627\u0631",
    "Market": "\u0633\u0648\u0642",
    "Payment": "\u062f\u0641\u0639",
    "Logistics": "\u0644\u0648\u062c\u0633\u062a\u064a\u0627\u062a"
  }
};

Object.entries(moduleWideTranslations).forEach(([lang, entries]) => {
  contentTranslations[lang] = { ...(contentTranslations[lang] || {}), ...entries };
});

const learningContent = {
  tracks: {
    fr: { Digital: "Numerique", Field: "Terrain", Health: "Sante", Trade: "Commerce", Logistics: "Logistique", Intelligence: "Intelligence" },
    sw: { Digital: "Kidijitali", Field: "Shambani", Health: "Afya", Trade: "Biashara", Logistics: "Usafirishaji", Intelligence: "Uchambuzi" },
    ar: { Digital: "\u0631\u0642\u0645\u064a", Field: "\u0645\u064a\u062f\u0627\u0646\u064a", Health: "\u0635\u062d\u0629", Trade: "\u062a\u062c\u0627\u0631\u0629", Logistics: "\u0644\u0648\u062c\u0633\u062a\u064a\u0627\u062a", Intelligence: "\u0627\u0633\u062a\u062e\u0628\u0627\u0631\u0627\u062a" }
  },
  levels: {
    fr: { Foundation: "Fondation", Intermediate: "Intermediaire", Advanced: "Avance", Core: "Base" },
    sw: { Foundation: "Msingi", Intermediate: "Kati", Advanced: "Juu", Core: "Msingi" },
    ar: { Foundation: "\u0623\u0633\u0627\u0633\u064a", Intermediate: "\u0645\u062a\u0648\u0633\u0637", Advanced: "\u0645\u062a\u0642\u062f\u0645", Core: "\u0623\u0633\u0627\u0633\u064a" }
  },
  courses: {
    fr: {
      "digital-foundations": {
        title: "Bases numeriques",
        modules: ["Navigation de la plateforme", "Qualite de saisie des donnees", "Bases du flux mobile"],
        skills: ["Admission numerique", "Hygiene du profil", "Transfert de tache"]
      },
      "agritech-fundamentals": {
        title: "Fondamentaux agritech",
        modules: ["Bases du cycle agricole", "Observations terrain", "Flux de soutien aux producteurs"],
        skills: ["Preparation terrain", "Notes de culture", "Escalade des problemes"]
      },
      "telehealth-support": {
        title: "Soutien telesante",
        modules: ["Protocole d'admission patient", "Escalade de file", "Transfert du plan de soins"],
        skills: ["Admission telesante", "Escalade representant", "Gestion des donnees sensibles"]
      },
      "cold-chain-operations": {
        title: "Operations chaine du froid",
        modules: ["Controle de temperature", "Points de controle qualite", "Transfert export"],
        skills: ["Controles chaine du froid", "Revision qualite", "Coordination route"]
      },
      "route-safety-response": {
        title: "Reponse securite route",
        modules: ["Risque au checkpoint", "Reponse aux retards", "Documentation d'incident"],
        skills: ["Surveillance route", "Triage des risques", "Reponse operationnelle"]
      },
      "ai-operator-review": {
        title: "Revision operateur IA",
        modules: ["Revision des recommandations IA", "Limites de securite", "Notes d'audit"],
        skills: ["Revision IA", "Journal de decision", "Gouvernance"]
      }
    },
    sw: {
      "digital-foundations": {
        title: "Misingi ya kidijitali",
        modules: ["Kutumia jukwaa", "Ubora wa kuingiza data", "Misingi ya kazi kwa simu"],
        skills: ["Usajili wa kidijitali", "Usafi wa wasifu", "Makabidhiano ya kazi"]
      },
      "agritech-fundamentals": {
        title: "Misingi ya agritech",
        modules: ["Misingi ya mzunguko wa mazao", "Uchunguzi shambani", "Mtiririko wa msaada kwa mkulima"],
        skills: ["Utayari wa shamba", "Maandishi ya mazao", "Kupandisha tatizo"]
      },
      "telehealth-support": {
        title: "Msaada wa afya kwa mbali",
        modules: ["Taratibu za usajili wa mgonjwa", "Kupandisha foleni", "Makabidhiano ya mpango wa huduma"],
        skills: ["Usajili wa telehealth", "Kupandisha kwa mwakilishi", "Utunzaji wa data nyeti"]
      },
      "cold-chain-operations": {
        title: "Uendeshaji wa mnyororo baridi",
        modules: ["Udhibiti wa joto", "Vituo vya ukaguzi wa ubora", "Makabidhiano ya usafirishaji nje"],
        skills: ["Ukaguzi wa mnyororo baridi", "Mapitio ya ubora", "Uratibu wa njia"]
      },
      "route-safety-response": {
        title: "Majibu ya usalama wa njia",
        modules: ["Hatari ya kituo cha ukaguzi", "Majibu ya ucheleweshaji", "Nyaraka za tukio"],
        skills: ["Ufuatiliaji wa njia", "Upangaji wa hatari", "Majibu ya uendeshaji"]
      },
      "ai-operator-review": {
        title: "Mapitio ya mwendeshaji AI",
        modules: ["Mapitio ya mapendekezo ya AI", "Mipaka ya usalama", "Maelezo ya ukaguzi"],
        skills: ["Mapitio ya AI", "Kurekodi maamuzi", "Utawala"]
      }
    },
    ar: {
      "digital-foundations": { title: "\u0623\u0633\u0627\u0633\u064a\u0627\u062a \u0631\u0642\u0645\u064a\u0629", modules: ["\u0627\u0644\u062a\u0646\u0642\u0644 \u0641\u064a \u0627\u0644\u0645\u0646\u0635\u0629", "\u062c\u0648\u062f\u0629 \u0625\u062f\u062e\u0627\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a", "\u0623\u0633\u0627\u0633\u064a\u0627\u062a \u0627\u0644\u0639\u0645\u0644 \u0639\u0644\u0649 \u0627\u0644\u0647\u0627\u062a\u0641"], skills: ["\u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0631\u0642\u0645\u064a", "\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u0645\u0644\u0641", "\u062a\u0633\u0644\u064a\u0645 \u0627\u0644\u0645\u0647\u0627\u0645"] },
      "agritech-fundamentals": { title: "\u0623\u0633\u0627\u0633\u064a\u0627\u062a \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0627\u0644\u0632\u0631\u0627\u0639\u064a\u0629", modules: ["\u0623\u0633\u0627\u0633\u064a\u0627\u062a \u062f\u0648\u0631\u0629 \u0627\u0644\u0645\u062d\u0635\u0648\u0644", "\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0645\u064a\u062f\u0627\u0646\u064a\u0629", "\u0633\u064a\u0631 \u062f\u0639\u0645 \u0627\u0644\u0645\u0632\u0627\u0631\u0639"], skills: ["\u062c\u0627\u0647\u0632\u064a\u0629 \u0645\u064a\u062f\u0627\u0646\u064a\u0629", "\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0627\u0644\u0645\u062d\u0627\u0635\u064a\u0644", "\u062a\u0635\u0639\u064a\u062f \u0627\u0644\u0645\u0634\u0643\u0644\u0627\u062a"] },
      "telehealth-support": { title: "\u062f\u0639\u0645 \u0627\u0644\u0635\u062d\u0629 \u0639\u0646 \u0628\u0639\u062f", modules: ["\u0628\u0631\u0648\u062a\u0648\u0643\u0648\u0644 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0627\u0644\u0645\u0631\u064a\u0636", "\u062a\u0635\u0639\u064a\u062f \u0627\u0644\u0637\u0627\u0628\u0648\u0631", "\u062a\u0633\u0644\u064a\u0645 \u062e\u0637\u0629 \u0627\u0644\u0631\u0639\u0627\u064a\u0629"], skills: ["\u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0635\u062d\u064a \u0639\u0646 \u0628\u0639\u062f", "\u062a\u0635\u0639\u064a\u062f \u0644\u0644\u0645\u0645\u062b\u0644", "\u062d\u0645\u0627\u064a\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062d\u0633\u0627\u0633\u0629"] },
      "cold-chain-operations": { title: "\u0639\u0645\u0644\u064a\u0627\u062a \u0627\u0644\u0633\u0644\u0633\u0644\u0629 \u0627\u0644\u0628\u0627\u0631\u062f\u0629", modules: ["\u0627\u0644\u062a\u062d\u0643\u0645 \u0628\u0627\u0644\u062d\u0631\u0627\u0631\u0629", "\u0646\u0642\u0627\u0637 \u062c\u0648\u062f\u0629", "\u062a\u0633\u0644\u064a\u0645 \u0627\u0644\u062a\u0635\u062f\u064a\u0631"], skills: ["\u0641\u062d\u0635 \u0627\u0644\u0633\u0644\u0633\u0644\u0629 \u0627\u0644\u0628\u0627\u0631\u062f\u0629", "\u0645\u0631\u0627\u062c\u0639\u0629 \u0627\u0644\u062c\u0648\u062f\u0629", "\u062a\u0646\u0633\u064a\u0642 \u0627\u0644\u0645\u0633\u0627\u0631"] },
      "route-safety-response": { title: "\u0627\u0633\u062a\u062c\u0627\u0628\u0629 \u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0645\u0633\u0627\u0631", modules: ["\u0645\u062e\u0627\u0637\u0631 \u0646\u0642\u0637\u0629 \u0627\u0644\u062a\u0641\u062a\u064a\u0634", "\u0627\u0633\u062a\u062c\u0627\u0628\u0629 \u0644\u0644\u062a\u0623\u062e\u064a\u0631", "\u062a\u0648\u062b\u064a\u0642 \u0627\u0644\u062d\u0627\u062f\u062b"], skills: ["\u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u0645\u0633\u0627\u0631", "\u0641\u0631\u0632 \u0627\u0644\u0645\u062e\u0627\u0637\u0631", "\u0627\u0633\u062a\u062c\u0627\u0628\u0629 \u062a\u0634\u063a\u064a\u0644\u064a\u0629"] },
      "ai-operator-review": { title: "\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0634\u063a\u0644 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a", modules: ["\u0645\u0631\u0627\u062c\u0639\u0629 \u062a\u0648\u0635\u064a\u0627\u062a \u0627\u0644\u0630\u0643\u0627\u0621", "\u062d\u062f\u0648\u062f \u0627\u0644\u0633\u0644\u0627\u0645\u0629", "\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0627\u0644\u062a\u062f\u0642\u064a\u0642"], skills: ["\u0645\u0631\u0627\u062c\u0639\u0629 \u0627\u0644\u0630\u0643\u0627\u0621", "\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u0642\u0631\u0627\u0631", "\u0627\u0644\u062d\u0648\u0643\u0645\u0629"] }
    }
  }
};

const arabicLearningCopy = {
  studio: "\u0627\u0633\u062a\u0648\u062f\u064a\u0648 \u0627\u0644\u062a\u0639\u0644\u0645",
  title: "\u0627\u0644\u062a\u0639\u0644\u0645 \u0648\u0627\u0644\u062a\u0637\u0648\u064a\u0631",
  intro: "\u0627\u0628\u0646 \u0627\u0644\u062c\u0627\u0647\u0632\u064a\u0629 \u0639\u0628\u0631 \u062f\u0648\u0631\u0627\u062a \u0645\u0648\u062c\u0647\u0629 \u0648\u0627\u062e\u062a\u0628\u0627\u0631\u0627\u062a \u0648\u0634\u0647\u0627\u062f\u0627\u062a \u0648\u0645\u0647\u0627\u0631\u0627\u062a \u0645\u0631\u062a\u0628\u0637\u0629 \u0628\u0627\u0644\u0639\u0645\u0644.",
  readiness: "\u0627\u0644\u062c\u0627\u0647\u0632\u064a\u0629",
  focus: "\u0627\u0644\u062a\u0631\u0643\u064a\u0632 \u0627\u0644\u062d\u0627\u0644\u064a",
  choose: "\u0627\u062e\u062a\u0631 \u062f\u0648\u0631\u0629",
  emptySummary: "\u0627\u0628\u062f\u0623 \u062f\u0648\u0631\u0629 \u0644\u0628\u0646\u0627\u0621 \u0633\u062c\u0644 \u062a\u0639\u0644\u0645 \u0645\u0648\u062b\u0642.",
  quiz: "\u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u0627\u062e\u062a\u0628\u0627\u0631",
  certificate: "\u0625\u0635\u062f\u0627\u0631 \u0627\u0644\u0634\u0647\u0627\u062f\u0629",
  completeLesson: "\u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u062f\u0631\u0633",
  record: "\u0633\u062c\u0644 \u0627\u0644\u062a\u0639\u0644\u0645",
  certificates: "\u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a",
  allTracks: "\u0643\u0644 \u0627\u0644\u0645\u0633\u0627\u0631\u0627\u062a",
  complete: "\u0645\u0643\u062a\u0645\u0644",
  status: "\u0627\u0644\u062d\u0627\u0644\u0629",
  impact: "\u062a\u0623\u062b\u064a\u0631 \u0627\u0644\u062c\u0627\u0647\u0632\u064a\u0629",
  duration: "\u0627\u0644\u0645\u062f\u0629",
  continueCourse: "\u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u062f\u0648\u0631\u0629",
  startCourse: "\u0628\u062f\u0621 \u0627\u0644\u062f\u0648\u0631\u0629",
  path: "\u0645\u0633\u0627\u0631 \u0627\u0644\u062a\u0639\u0644\u0645",
  active: "\u0627\u0644\u062f\u0648\u0631\u0629 \u0627\u0644\u0646\u0634\u0637\u0629",
  hours: "\u0633\u0627\u0639\u0627\u062a \u0627\u0644\u062a\u0639\u0644\u0645",
  streak: "\u0627\u0644\u062a\u062a\u0627\u0628\u0639",
  score: "\u0646\u062a\u064a\u062c\u0629 \u0627\u0644\u0627\u062e\u062a\u0628\u0627\u0631",
  noCertificates: "\u0644\u0627 \u062a\u0648\u062c\u062f \u0634\u0647\u0627\u062f\u0627\u062a \u0628\u0639\u062f.",
  action: "\u0625\u062c\u0631\u0627\u0621"
};

async function request(path, options = {}) {
  const res = await fetch(path, {
    credentials: "same-origin",
    headers: { "content-type": "application/json", ...(options.headers || {}) },
    ...options,
    body: options.body ? JSON.stringify(options.body) : undefined
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(json.error || "Request failed");
  data = json.user ? json : data;
  return json;
}

function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  const sr = $("#screenReaderStatus");
  if (sr) sr.textContent = message;
  el.classList.remove("hidden");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => el.classList.add("hidden"), 2500);
}

function announce(message) {
  const sr = $("#screenReaderStatus");
  if (sr) sr.textContent = message;
}

function registerWebApp() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js")
      .then(() => updateInstallStatus("Web app mode is ready. You can install AgriNexus from this browser."))
      .catch(() => updateInstallStatus("Web app mode could not start here. You can still use AgriNexus in the browser."));
  }
  window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    deferredInstallPrompt = event;
    toast("AgriNexus can be installed as an app from this browser.");
  });
  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    toast("AgriNexus installed as an app.");
  });
}

function updateInstallStatus(message) {
  const status = $("#globalAssistantStatus");
  if (status && message) status.textContent = message;
}

async function installAgriNexusApp() {
  if (window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone) {
    toast("AgriNexus is already running as an app.");
    return;
  }
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    const choice = await deferredInstallPrompt.userChoice.catch(() => ({ outcome: "dismissed" }));
    deferredInstallPrompt = null;
    toast(choice.outcome === "accepted" ? "Installing AgriNexus app." : "Install canceled.");
    return;
  }
  const message = "If the install prompt does not appear, use your browser menu: Edge ... > Apps > Install this site as an app, or Chrome menu > Cast, save, and share > Install page as app.";
  updateInstallStatus(message);
  toast("Use the browser menu to install AgriNexus as an app.");
}

function applyAccessibilityPrefs() {
  const classMap = {
    largeText: "large-text",
    highContrast: "high-contrast",
    reducedMotion: "reduced-motion",
    screenReader: "screen-reader-mode"
  };
  Object.entries(classMap).forEach(([key, className]) => {
    document.body.classList.toggle(className, Boolean(accessibilityPrefs[key]));
    $$(`[data-accessibility="${key}"]`).forEach(button => button.setAttribute("aria-pressed", String(Boolean(accessibilityPrefs[key]))));
  });
}

function toggleAccessibilityPref(key) {
  accessibilityPrefs[key] = !accessibilityPrefs[key];
  localStorage.setItem("agrinexusAccessibility", JSON.stringify(accessibilityPrefs));
  applyAccessibilityPrefs();
  toast(`${key.replace(/([A-Z])/g, " $1")} ${accessibilityPrefs[key] ? "enabled" : "disabled"}`);
}

function activeCountry() {
  return data.countries.find(country => country.id === data.profile.activeCountryId) || data.countries[0];
}

function activeRoute() {
  return data.routes.find(route => route.id === data.profile.activeRouteId) || data.routes[0];
}

function money(value) {
  return `$${Number(value).toLocaleString()}`;
}

function row(label, value) {
  return `<div class="row"><span>${translateText(label)}</span><strong>${translateText(value)}</strong></div>`;
}

function learningText() {
  if (data.user?.language === "ar") return arabicLearningCopy;
  return learningCopy[data.user?.language] || learningCopy.en;
}

function languageCode() {
  return data.user?.language || "en";
}

function voiceLocale() {
  return voiceLocaleMap[languageCode()] || "en-US";
}

function voiceLanguageName() {
  return voiceLanguageNames[languageCode()] || "English";
}

function platformText() {
  return platformCopy[languageCode()] || platformCopy.en;
}

function setText(selector, value) {
  const el = $(selector);
  if (el) el.textContent = value;
}

function applyPlatformLanguage() {
  const copy = platformText();
  document.documentElement.lang = languageCode();
  document.body.setAttribute("dir", languageCode() === "ar" ? "rtl" : "ltr");
  $$(".nav").forEach((button, index) => {
    button.textContent = copy.nav[index] || button.textContent;
  });
  setText("#logoutBtn", copy.logout);
  setText("#dashboard .hero h2", copy.dashboardTitle);
  setText("#dashboard .hero p", copy.dashboardIntro);
  setText("#learningTitle", copy.learningTitle);
  setText("#learningIntro", copy.learningIntro);
  setText("#workforce .workforce-hub h2", copy.workforceTitle);
  setText("#workforce .workforce-hub p", copy.workforceIntro);
  setText("#health .health-command h2", copy.healthTitle);
  setText("#health .health-command p", copy.healthIntro);
  setText("#trade .trade-hub h2", copy.tradeTitle);
  setText("#trade .trade-hub p", copy.tradeIntro);
  setText("#map .map-command h2", copy.mapTitle);
  setText("#map .map-command p", copy.mapIntro);
  setText("#integrations .integration-hub h2", copy.integrationsTitle);
  setText("#integrations .integration-hub p", copy.integrationsIntro);
  setText("#admin .admin-hub h2", copy.adminTitle);
  setText("#admin .admin-hub p", copy.adminIntro);
  setText("#profile .section-head h2", copy.profileTitle);
  setText("#profile .section-head p", copy.profileIntro);
  const selector = $("#platformLanguageSelect");
  if (selector) selector.value = languageCode();
  refreshMicSupport();
}

function translateLiteral(value) {
  const map = contentTranslations[languageCode()];
  if (!map || !value) return value;
  return map[String(value).trim()] || value;
}

function translateByWordMap(value, lang) {
  const words = wordTranslations[lang];
  if (!words || !value) return value;
  return String(value).replace(/\b[A-Za-z][A-Za-z-]*\b/g, word => {
    if (/^(AgriNexus|AFAYAI|AI|API|M-Pesa|Nigeria|Kenya|Egypt|DRC|OpenStreetMap|Leaflet)$/i.test(word)) return word;
    const lower = word.toLowerCase();
    const translated = words[lower];
    if (!translated) return word;
    return word[0] === word[0].toUpperCase()
      ? translated.charAt(0).toUpperCase() + translated.slice(1)
      : translated;
  });
}

function translateText(value) {
  const lang = languageCode();
  const map = contentTranslations[lang];
  if (!value || lang === "en") return value;
  let output = String(value);
  const exact = map?.[output.trim()];
  if (exact) return output.replace(output.trim(), exact);
  Object.entries(map || {})
    .sort((a, b) => b[0].length - a[0].length)
    .forEach(([source, target]) => {
      if (source.length <= 4 || !output.includes(source)) return;
      const escaped = source.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      output = output.replace(new RegExp(`\\b${escaped}\\b`, "g"), target);
    });
  return translateByWordMap(output, lang);
}

function applyContentTranslations() {
  const map = contentTranslations[languageCode()];
  const roots = [
    "#dashboard", "#learning", "#workforce", "#health", "#trade",
    "#map", "#agent", "#integrations", "#admin", "#profile", "#workflowModal",
    "#workspaceBar", "#globalAssistantBar", "#accessibilityPanel"
  ];
  roots.forEach(selector => {
    const root = $(selector);
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      if (!originalTextNodes.has(node)) originalTextNodes.set(node, node.nodeValue);
      const text = originalTextNodes.get(node);
      const trimmed = text.trim();
      if (!trimmed) return;
      if (!map || languageCode() === "en") {
        node.nodeValue = text;
        return;
      }
      const translated = translateText(trimmed);
      if (translated === trimmed) {
        node.nodeValue = text;
        return;
      }
      node.nodeValue = text.replace(trimmed, translated);
    });
  });
  $$("[placeholder]").forEach(element => {
    if (!element.dataset.originalPlaceholder) element.dataset.originalPlaceholder = element.getAttribute("placeholder") || "";
    element.setAttribute("placeholder", translateText(element.dataset.originalPlaceholder));
  });
  $$("[aria-label]").forEach(element => {
    if (!element.dataset.originalAriaLabel) element.dataset.originalAriaLabel = element.getAttribute("aria-label") || "";
    element.setAttribute("aria-label", translateText(element.dataset.originalAriaLabel));
  });
}

function translatedTrack(track) {
  return learningContent.tracks[languageCode()]?.[track] || track;
}

function translatedLevel(level) {
  return learningContent.levels[languageCode()]?.[level] || level;
}

function translatedDuration(duration) {
  const lang = languageCode();
  if (lang === "en") return duration || "Self-paced";
  const value = duration || "Self-paced";
  const map = {
    fr: { "2 hours": "2 heures", "3 hours": "3 heures", "2.5 hours": "2,5 heures", "4 hours": "4 heures", "3.5 hours": "3,5 heures", "Self-paced": "Auto-rythme" },
    sw: { "2 hours": "saa 2", "3 hours": "saa 3", "2.5 hours": "saa 2.5", "4 hours": "saa 4", "3.5 hours": "saa 3.5", "Self-paced": "Kwa kasi yako" },
    ar: { "2 hours": "\u0633\u0627\u0639\u062a\u0627\u0646", "3 hours": "3 \u0633\u0627\u0639\u0627\u062a", "2.5 hours": "\u0633\u0627\u0639\u062a\u0627\u0646 \u0648\u0646\u0635\u0641", "4 hours": "4 \u0633\u0627\u0639\u0627\u062a", "3.5 hours": "3.5 \u0633\u0627\u0639\u0627\u062a", "Self-paced": "\u0628\u0627\u0644\u0648\u062a\u064a\u0631\u0629 \u0627\u0644\u0630\u0627\u062a\u064a\u0629" }
  };
  return map[lang]?.[value] || value;
}

function translatedCourse(course) {
  const translation = learningContent.courses[languageCode()]?.[course.id] || {};
  return {
    ...course,
    title: translation.title || course.title,
    track: translatedTrack(course.track),
    level: translatedLevel(course.level || "Core"),
    modules: translation.modules || course.modules || [],
    skills: translation.skills || course.skills || []
  };
}

function translatedModule(course, moduleTitle) {
  const localizedCourse = translatedCourse(course);
  const sourceModules = course.modules || [];
  const index = sourceModules.indexOf(moduleTitle);
  return index >= 0 ? (localizedCourse.modules || [])[index] || moduleTitle : translateText(moduleTitle);
}

function updateWorkspaceBar(sectionId) {
  const copy = workspaceCopy[sectionId] || workspaceCopy.dashboard;
  const title = $("#workspaceTitle");
  const description = $("#workspaceDescription");
  if (title) title.textContent = translateText(copy.title);
  if (description) description.textContent = translateText(copy.description);
}

function goSection(sectionId, options = {}) {
  const target = $(`#${sectionId}`);
  if (!target || !target.classList.contains("section")) sectionId = "dashboard";
  updateWorkspaceBar(sectionId);
  $$(".nav").forEach(item => {
    const active = item.dataset.section === sectionId;
    item.classList.toggle("active", active);
    if (active) item.setAttribute("aria-current", "page");
    else item.removeAttribute("aria-current");
  });
  $$(".section").forEach(section => {
    const active = section.id === sectionId || section.id === "accessibilityPanel";
    section.classList.toggle("active", section.id === sectionId);
    if (section.id !== "accessibilityPanel") section.setAttribute("aria-hidden", String(!active));
  });
  const activeSection = $(`#${sectionId}`);
  const main = $("#mainContent");
  if (activeSection && main && main.firstElementChild !== activeSection) {
    main.insertBefore(activeSection, main.firstElementChild);
  }
  if (options.updateHash !== false && window.location.hash !== `#${sectionId}`) {
    history.pushState({ sectionId }, "", `#${sectionId}`);
  }
  if (options.scroll !== false) {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: options.instant ? "auto" : "smooth" });
      activeSection?.focus({ preventScroll: true });
    });
  }
  if (sectionId === "map") setTimeout(() => map && map.invalidateSize(), 100);
  announce(`${sectionId} section opened`);
}

function courseEnrollment(courseId) {
  return (data.profile.enrollments || []).find(item => item.courseId === courseId);
}

function courseStatus(course) {
  const enrollment = courseEnrollment(course.id);
  const lang = languageCode();
  const labels = {
    en: { certified: "Certified", progress: "in progress", notStarted: "Not started" },
    fr: { certified: "Certifie", progress: "en cours", notStarted: "Pas commence" },
    sw: { certified: "Imethibitishwa", progress: "inaendelea", notStarted: "Haijaanza" },
    ar: { certified: "\u0645\u0639\u062a\u0645\u062f", progress: "\u0642\u064a\u062f \u0627\u0644\u062a\u0642\u062f\u0645", notStarted: "\u0644\u0645 \u064a\u0628\u062f\u0623" }
  }[lang] || {};
  if ((data.profile.completedCourses || []).includes(course.id)) return labels.certified;
  if (enrollment) return `${enrollment.progress || 0}% ${labels.progress}`;
  return labels.notStarted;
}

function activeCourse() {
  return data.courses.find(course => course.id === data.profile.activeCourseId)
    || data.courses.find(course => !(data.profile.completedCourses || []).includes(course.id))
    || data.courses[0];
}

function roleGate(role) {
  const missingCertificates = (role.requiredCertificates || []).filter(courseId => !(data.profile.completedCourses || []).includes(courseId));
  const missingReadiness = Math.max(0, role.minReadiness - data.profile.readiness);
  return {
    eligible: missingReadiness === 0 && missingCertificates.length === 0,
    missingReadiness,
    missingCertificates
  };
}

function firstEligibleRole() {
  return (data.roles || []).find(role => roleGate(role).eligible) || (data.roles || [])[0];
}

function firstProduct() {
  return (data.products || [])[0];
}

function aiRunComplete(type) {
  return (data.profile.aiRuns || []).some(run => run.type === type);
}

function aiRunsForModule(moduleName) {
  const typeModules = {
    Learning: ["tutor", "quizgen"],
    Workforce: ["workforce-coach", "interview-prep"],
    Healthcare: ["triage", "careplan", "inspector"],
    AgriTrade: ["trade-advisor", "price"],
    AI: ["copilot", "command"]
  };
  const types = typeModules[moduleName] || [];
  return (data.profile.aiRuns || []).filter(run => types.includes(run.type));
}

function renderAiEvidence(selector, moduleName, emptyText) {
  const target = $(selector);
  if (!target) return;
  const runs = aiRunsForModule(moduleName);
  target.innerHTML = runs.length
    ? runs.slice(0, 5).map(run => `<div><strong>${translateText(run.type)} - ${translateText(run.provider)}</strong><span>${translateText(run.text)}</span></div>`).join("")
    : `<div>${translateText(emptyText)}</div>`;
}

function integrationActionComplete(action) {
  return (data.profile.integrationEvents || []).some(event => event.action === action);
}

function moduleProviderEvents(moduleName) {
  return (data.profile.integrationEvents || []).filter(event => event.module === moduleName);
}

function moduleProviders(moduleName) {
  return (data.providers || []).filter(provider => provider.module === moduleName);
}

function renderProviderEvidence(selector, moduleName, emptyText) {
  const events = moduleProviderEvents(moduleName);
  const target = $(selector);
  if (!target) return;
  target.innerHTML = events.length
    ? events.slice(0, 8).map(event => `<div><strong>${translateText(event.providerName)}</strong><span>${translateText(event.action)} - ${translateText(event.status)} - ${translateText(event.detail)}</span></div>`).join("")
    : `<div>${translateText(emptyText)}</div>`;
}

function renderEnginePanel(selector, moduleName) {
  const target = $(selector);
  if (!target) return;
  const providers = moduleProviders(moduleName);
  target.innerHTML = providers.length
    ? providers.map(provider => row(provider.name, `${provider.status} - ${provider.mode}`)).join("")
    : row("Providers", "No providers configured");
}

function can(area) {
  return data.permissions?.[area] !== false;
}

function renderGovernancePanel() {
  const target = $("#aiGovernancePanel");
  if (!target) return;
  const runs = data.profile.aiRuns || [];
  target.innerHTML = runs.length
    ? runs.slice(0, 8).map(run => {
      const status = run.error
        ? "Provider error - review required"
        : run.reviewStatus === "approved"
        ? "Approved"
        : run.reviewStatus === "rejected"
        ? "Rejected"
        : "Awaiting human approval";
      const reviewer = run.reviewedBy ? `Reviewed by ${run.reviewedBy}` : "No provider error detected";
      const detail = run.error ? `${run.provider} error: ${run.error}` : `${run.provider} - ${reviewer}`;
      return `<div><strong>${translateText(run.type)} - ${translateText(status)}</strong><span>${translateText(detail)} - ${translateText(run.text)}</span></div>`;
    }).join("")
    : `<div>${translateText("No AI runs yet. Run an AI workflow to create review evidence.")}</div>`;
}

function renderNotificationPanel() {
  const target = $("#notificationPanel");
  if (!target) return;
  const notices = data.profile.notifications || [];
  target.innerHTML = notices.length
    ? notices.slice(0, 8).map(item => `<div><strong>${translateText(item.module)} - ${translateText(item.status)}</strong><span>${translateText(item.channel)}: ${translateText(item.message)}</span></div>`).join("")
    : `<div>${translateText("No notifications sent yet.")}</div>`;
}

function renderAgentReasoningPanel({ latestCommand, pendingAction, latestExecution }) {
  const stepsTarget = $("#agentReasoningSteps");
  if (!stepsTarget) return;
  const panel = stepsTarget.closest(".agent-reasoning-panel");
  if (panel) panel.classList.toggle("reasoning-visible", agentReasoningVisible);
  const metadata = latestCommand?.metadata || {};
  const hasCommand = Boolean(latestCommand?.command || pendingAction?.command);
  const selectedTool = pendingAction?.tool || metadata.tool || latestCommand?.intent || "";
  const selectedAction = pendingAction?.action || metadata.userFacingPlan || selectedTool || "No workflow selected yet.";
  const planner = pendingAction?.planner || metadata.planner || (selectedTool ? "deterministic workflow router" : "standing by");
  const confidence = Number(pendingAction?.confidence || metadata.confidence || 0);
  const confidenceText = confidence ? `${Math.round(confidence * 100)}% confidence` : (hasCommand ? "workflow routed" : "standing by");
  const rationale = pendingAction?.rationale || metadata.rationale || (hasCommand
    ? "Nexus matched the request against the available AgriNexus workflow tools and safety rules."
    : "Ask Nexus a natural-language request to see the agent reasoning path.");
  const evidence = latestExecution?.summary
    || latestCommand?.response
    || "Run or confirm a workflow to see the audit trail.";
  const steps = [
    {
      label: "1. Heard",
      title: "User request",
      detail: latestCommand?.command || pendingAction?.command || "No command submitted yet."
    },
    {
      label: "2. Understood",
      title: latestCommand?.intent || pendingAction?.tool || "Standing by",
      detail: rationale
    },
    {
      label: "3. Selected",
      title: selectedAction,
      detail: selectedTool ? `${planner} chose ${selectedTool}.` : "Nexus will choose a workflow when a request is submitted."
    },
    {
      label: "4. Next step",
      title: pendingAction ? "Waiting for confirmation" : (latestCommand?.status || "Ready"),
      detail: pendingAction ? "Say or type yes to run it, or no to cancel." : "Completed actions and responses are recorded as platform evidence."
    }
  ];
  $("#agentReasoningConfidence").textContent = translateText(confidenceText);
  $("#agentReasoningWorkflow").textContent = translateText(selectedTool ? `${selectedAction} (${selectedTool})` : "No workflow selected yet.");
  $("#agentReasoningEvidence").textContent = translateText(evidence);
  stepsTarget.innerHTML = steps.map(step => `
    <div class="reasoning-step">
      <small>${translateText(step.label)}</small>
      <strong>${translateText(step.title)}</strong>
      <span>${translateText(step.detail)}</span>
    </div>
  `).join("");
}

function missionStepHtml(step) {
  const status = step.status === "executed" ? "done" : step.status === "failed" ? "failed" : "pending";
  return `
    <div class="mission-step ${status}">
      <div>
        <strong>${translateText(`${step.module}: ${step.action}`)}</strong>
        <span>${translateText(step.result || step.detail || step.error || step.tool || "Workflow step")}</span>
      </div>
      <small>${translateText(step.status || "pending")}</small>
    </div>
  `;
}

function renderMissionDashboard() {
  const target = $("#missionDashboardPanel");
  if (!target || !data) return;
  const plans = data.profile.agentPlans || [];
  const executions = data.profile.agentExecutions || [];
  const pending = plans.filter(plan => plan.status === "awaiting-approval" || plan.status === "executing").slice(0, 2);
  const completed = executions.slice(0, 3);
  const cards = [];
  if (pending.length) {
    cards.push(...pending.map(plan => `
      <article class="mission-card">
        <div class="tag-row"><span>${translateText(plan.mode === "autopilot" ? "Autopilot mission" : "Mission plan")}</span><span>${translateText(plan.status)}</span></div>
        <div>
          <strong>${translateText(plan.goal || "Untitled mission")}</strong>
          <span>${translateText(`${plan.steps?.length || 0} step(s) awaiting approval. Created by ${plan.createdBy || "operator"}.`)}</span>
        </div>
        <div class="mission-step-list">${(plan.steps || []).slice(0, 5).map(missionStepHtml).join("")}</div>
      </article>
    `));
  }
  if (completed.length) {
    cards.push(...completed.map(execution => `
      <article class="mission-card">
        <div class="tag-row"><span>${translateText("Completed mission")}</span><span>${translateText(execution.status)}</span></div>
        <div>
          <strong>${translateText(execution.goal || "Mission execution")}</strong>
          <span>${translateText(execution.summary || "Mission completed.")}</span>
        </div>
        <div class="mission-step-list">${(execution.steps || []).slice(0, 5).map(missionStepHtml).join("")}</div>
      </article>
    `));
  }
  if (!cards.length) {
    cards.push(`
      <article class="mission-card">
        <div class="tag-row"><span>${translateText("No missions yet")}</span><span>${translateText("Ready")}</span></div>
        <div>
          <strong>${translateText("Start with an outcome")}</strong>
          <span>${translateText("Say: AgriNexus autopilot, help this farmer get from crop problem to buyer payment.")}</span>
        </div>
      </article>
    `);
  }
  target.innerHTML = cards.join("");
}

function renderAgentCenter() {
  const plan = (data.profile.agentPlans || [])[0];
  const executions = data.profile.agentExecutions || [];
  const commands = data.profile.agentCommands || [];
  const memory = data.profile.agentMemory || {};
  const briefings = data.profile.agentBriefings || [];
  const automation = data.automation || { readyCount: 0, total: 5, items: [] };
  const capabilities = data.capabilities || { operational: 0, total: 0, items: [] };
  const agentMode = $("#agentMode");
  if (!agentMode) return;
  const agentStepAction = step => {
    const moduleName = String(step?.module || "").toLowerCase();
    const action = String(step?.action || "").toLowerCase();
    if (moduleName.includes("learning")) return { workflow: "learning", action: action.includes("lesson") ? "lesson" : "start" };
    if (moduleName.includes("workforce")) return { workflow: "workforce", action: action.includes("shift") ? "shift" : action.includes("mentor") ? "mentor" : action.includes("interview") ? "interview" : action.includes("apply") ? "apply-role" : "build-profile", roleId: firstEligibleRole()?.id };
    if (moduleName.includes("health") || moduleName.includes("telehealth")) return { workflow: "health", action: action.includes("care") ? "careplan" : action.includes("representative") ? "representative" : action.includes("safety") ? "safety" : "intake" };
    if (moduleName.includes("trade")) return { workflow: "trade", action: action.includes("drone") ? "drone" : action.includes("wallet") || action.includes("payment") ? "wallet" : action.includes("advance") ? "advance" : "order", productId: firstProduct()?.id };
    if (moduleName.includes("map")) return { workflow: "ai", action: action.includes("risk") ? "route" : "inspector" };
    if (moduleName.includes("ai")) return { workflow: "ai", action: "command" };
    return { workflow: "ai", action: "command" };
  };
  agentMode.textContent = data.profile.aiProvider || data.providers.find(item => item.id === "openai")?.mode || "ready";
  $("#agentPlanStatus").textContent = plan?.status || "none";
  $("#agentPlanPanel").innerHTML = plan
    ? plan.steps.map(step => taskItem(`${step.module}: ${step.action}`, step.detail, step.status === "executed" ? "done" : "active", step.tool, agentStepAction(step))).join("")
    : taskItem("No agent plan yet", "Create a mission plan to see cross-module tool steps.", "pending", "Plan", { workflow: "ai", action: "command" });
  renderMissionDashboard();
  $("#agentToolPanel").innerHTML = [
    row("Learning", "course catalog, lesson progress, quizzes, certificates"),
    row("Workforce", "job matching, applications, interviews, mentors, shifts"),
    row("Telehealth", "intake, accessibility support, representative escalation, care plans"),
    row("Trade", "market review, pricing, wallet, logistics"),
    row("Drones", "field scans, crop health, yield estimate, route/map evidence"),
    row("Maps", "country context, route risk, checkpoint intelligence"),
    row("Governance", "human approval, audit events, provider evidence")
  ].join("");
  $("#agentMemoryPanel").innerHTML = [
    `<div><strong>Audience</strong><span>${translateText(memory.activeAudience || "government")}</span></div>`,
    `<div><strong>Mission</strong><span>${translateText(memory.activeMission || "rural transformation")}</span></div>`,
    `<div><strong>Last goal</strong><span>${translateText(memory.lastGoal || "No goal remembered yet")}</span></div>`,
    `<div><strong>Last summary</strong><span>${translateText(memory.lastSummary || "No summary yet")}</span></div>`
  ].join("");
  const latestCommand = commands[0];
  renderAgentReasoningPanel({ latestCommand, pendingAction: data.profile.agentPendingAction, latestExecution: executions[0] });
  $("#agentUnderstandingPanel").innerHTML = [
    `<div><strong>What I heard</strong><span>${translateText(latestCommand?.command || "No command yet")}</span></div>`,
    `<div><strong>What I understood</strong><span>${translateText(latestCommand?.intent || "Standing by")}</span></div>`,
    `<div><strong>What needs approval</strong><span>${translateText(plan?.status === "awaiting-approval" ? `${plan.steps.length} planned step(s)` : "No approval pending")}</span></div>`,
    `<div><strong>What I completed</strong><span>${translateText(executions[0]?.summary || "No execution yet")}</span></div>`
  ].join("");
  $("#agentBriefingPanel").innerHTML = briefings.length
    ? briefings.slice(0, 4).map(briefing => `<div><strong>${translateText(briefing.title)}</strong><span>${translateText(briefing.purpose)} - ${translateText(briefing.plainLanguageSummary)}</span></div>`).join("")
    : `<div>${translateText("No government briefing yet. Create one before the presentation.")}</div>`;
  const agentLog = [
    ...commands.slice(0, 4).map(item => ({ title: `Command - ${item.intent}`, detail: item.response })),
    ...executions.slice(0, 6).map(item => ({ title: `${item.status} - ${item.goal}`, detail: item.summary }))
  ];
  $("#agentLogPanel").innerHTML = agentLog.length
    ? agentLog.slice(0, 8).map(item => `<div><strong>${translateText(item.title)}</strong><span>${translateText(item.detail)}</span></div>`).join("")
    : `<div>${translateText("No agent execution yet. Create a plan, review it, then execute.")}</div>`;
  $("#capabilityScore").textContent = `${capabilities.operational || 0}/${capabilities.total || 0}`;
  $("#capabilityMatrixPanel").innerHTML = (capabilities.items || []).map(item => taskItem(
    item.title,
    item.detail,
    item.status === "operational" ? "ready" : item.status === "ready" ? "pending" : "blocked",
    item.status === "operational" ? "Live" : item.status === "ready" ? "Ready" : "Provider",
    String(item.title || "").toLowerCase().includes("provider") ? { workflow: "integrations", action: "test-all" } : { workflow: "ai", action: "command" }
  )).join("");
  $("#automationScore").textContent = `${automation.readyCount || 0}/${automation.total || 5}`;
  $("#automationReadinessPanel").innerHTML = (automation.items || []).map(item => taskItem(
    item.title,
    item.detail,
    item.status === "ready" ? "ready" : "blocked",
    item.status === "ready" ? "Ready" : "Needs setup",
    { workflow: "admin", action: "readiness" }
  )).join("");
  renderVoiceAssistant();
}

function currentSectionId() {
  return $(".section.active")?.id || "dashboard";
}

function sectionFromHash() {
  const id = String(window.location.hash || "").replace(/^#/, "");
  return $(`#${id}`)?.classList.contains("section") ? id : "dashboard";
}

function voiceCommandExamples() {
  return voiceCommandGroups().flatMap(group => group.commands);
}

function voiceCommandButton(command) {
  return `<button type="button" data-voice-example="${command}">${translateText(command)}</button>`;
}

function normalizeLocalizedVoiceCommand(rawCommand) {
  const value = String(rawCommand || "").trim();
  if (!value) return value;
  const localizedWake = value.replace(/^\s*(نكسس|نيكسس|أجرينيكسس|جارفيس|كوتش)\s*[,،:\-]?\s*/i, "Nexus, ");
  const lowered = localizedWake.toLowerCase();
  const langMap = contentTranslations[languageCode()] || {};
  const match = voiceCommandExamples().find(command => {
    const translated = langMap[command] || command;
    return translated.toLowerCase() === lowered || cleanWakeCommand(translated).toLowerCase() === cleanWakeCommand(localizedWake).toLowerCase();
  });
  return match || localizedWake;
}

function voiceCommandGroups() {
  return [
    {
      title: "Start here",
      helper: "Use these when someone is new to the platform.",
      commands: [
        "Nexus, what can you do",
        "Nexus, show voice help",
        "Nexus, run full mission",
        "Nexus, test provider engines"
      ]
    },
    {
      title: "Go to a workspace",
      helper: "Open the main work areas without searching menus.",
      commands: [
        "Nexus, open learning",
        "Nexus, open workforce",
        "Nexus, open telehealth",
        "Nexus, open agritrade",
        "Nexus, open maps",
        "Nexus, open admin"
      ]
    },
    {
      title: "Learning",
      helper: "Run training, accessibility, and certificate workflows.",
      commands: [
        "Nexus, build captions",
        "Nexus, create audio guide",
        "Nexus, complete my lesson",
        "Nexus, issue my certificate"
      ]
    },
    {
      title: "Workforce",
      helper: "Help a user find, prepare for, and apply to work.",
      commands: [
        "Nexus, apply for that job",
        "Nexus, review my workforce gaps",
        "Nexus, schedule my shift",
        "Nexus, prepare me for an interview"
      ]
    },
    {
      title: "Telehealth",
      helper: "Guide patients through care access and support.",
      commands: [
        "Nexus, start telehealth intake",
        "Nexus, connect me to a provider",
        "Nexus, capture vitals",
        "Nexus, create a referral",
        "Nexus, schedule my follow-up"
      ]
    },
    {
      title: "Farm, Trade, And Drones",
      helper: "Support farmers, buyers, field teams, and crop intelligence.",
      commands: [
        "Nexus, contact my buyer",
        "Nexus, create buyer order",
        "Nexus, run drone scan",
        "Nexus, assign field task",
        "Nexus, check my route risk"
      ]
    }
  ];
}

function renderVoiceAssistant() {
  const transcript = $("#voiceTranscript");
  if (!transcript) return;
  transcript.textContent = lastVoiceResponse;
  const status = $("#voiceStatus");
  if (status) status.textContent = voiceRecognition ? "listening-ready" : voiceFirstMode ? "voice-first" : "standby";
  ["#voiceFirstBtn", "#globalVoiceFirstBtn"].forEach(selector => {
    const button = $(selector);
    if (!button) return;
    button.classList.toggle("primary", voiceFirstMode);
    button.setAttribute("aria-pressed", String(voiceFirstMode));
  });
  const suggestions = $("#voiceSuggestions");
  if (suggestions) {
    suggestions.innerHTML = voiceCommandExamples()
      .map(voiceCommandButton)
      .join("");
    $$("[data-voice-example]").forEach(button => {
      button.onclick = () => runVoiceExample(button);
    });
  }
  const guide = $("#globalVoiceGuide");
  if (guide) {
    guide.innerHTML = voiceCommandExamples().slice(0, 8)
      .map(voiceCommandButton)
      .join("");
  }
  renderVoiceHelpPanel();
  renderJarvisLayer();
}

function renderVoiceHelpPanel() {
  const content = $("#voiceHelpContent");
  if (!content) return;
  content.innerHTML = voiceCommandGroups().map(group => `
    <article class="voice-help-group">
      <div>
        <strong>${translateText(group.title)}</strong>
        <span>${translateText(group.helper)}</span>
      </div>
      <div class="voice-help-commands">
        ${group.commands.map(voiceCommandButton).join("")}
      </div>
    </article>
  `).join("");
}

function openVoiceHelp() {
  openAskNexus();
  renderVoiceHelpPanel();
  $("#voiceHelpPanel")?.classList.remove("hidden");
  $("#globalAssistantStatus").textContent = translateText("Voice command help is open. Say a command or tap one to run it.");
  $("#voiceHelpContent button")?.focus();
  announce(translateText("Voice command help opened"));
}

function closeVoiceHelp() {
  $("#voiceHelpPanel")?.classList.add("hidden");
  announce(translateText("Voice command help closed"));
}

async function runVoiceExample(button) {
  const command = button?.dataset.voiceExample || "";
  if (!command) return;
  setCommandInputs(command);
  openAskNexus();
  await handleVoiceCommand(command);
}

function jarvisInsights() {
  if (!data) return [];
  const readiness = data.admin?.readiness || {};
  const automation = data.automation || {};
  const plan = (data.profile.agentPlans || [])[0];
  const latestCommand = (data.profile.agentCommands || [])[0];
  return [
    { title: "Readiness", detail: `${readiness.readyCount || 0}/${readiness.total || 0} production checks ready`, status: readiness.status === "production-ready" ? "ready" : "pending", label: readiness.status || "Status" },
    { title: "Automation", detail: `${automation.readyCount || 0}/${automation.total || 5} automation unlocks ready`, status: automation.status === "production-ready" ? "ready" : "pending", label: "Auto" },
    { title: "Plan", detail: plan ? `${plan.status}: ${plan.goal}` : "No active plan yet", status: plan ? "ready" : "pending", label: plan?.status || "None" },
    { title: "Last command", detail: latestCommand?.response || "No command yet", status: latestCommand ? "ready" : "pending", label: latestCommand?.intent || "Ready" }
  ];
}

function renderJarvisLayer() {
  const dock = $("#jarvisDock");
  if (!dock || !data) return;
  dock.classList.remove("hidden");
  const mode = $("#jarvisMode");
  if (mode) mode.textContent = voiceRecognition ? "listening" : data.profile.agentMemory?.lastStatus || "standby";
  const summary = $("#jarvisSummary");
  if (summary) summary.textContent = lastVoiceResponse || data.profile.agentMemory?.lastSummary || "Ready to operate across the platform.";
  const globalStatus = $("#globalAssistantStatus");
  if (globalStatus) globalStatus.textContent = lastVoiceResponse || data.profile.agentMemory?.lastSummary || "Ready";
  const panel = $("#jarvisInsightPanel");
  if (panel) {
    panel.innerHTML = jarvisInsights().map(item => taskItem(item.title, item.detail, item.status, item.label)).join("");
  }
  renderConversationPanel();
}

function renderConversationPanel() {
  const panel = $("#globalConversationPanel");
  if (!panel || !data) return;
  const turns = data.profile.agentConversation || [];
  const pending = data.profile.agentPendingAction;
  const recentTurns = turns.slice(-8);
  const pendingHtml = pending
    ? `<div class="conversation-turn assistant"><strong>Pending</strong><span>${escapeHtml(`Ready to ${String(pending.action || "run this workflow").toLowerCase()}. Use Yes, do it or No, cancel.`)}</span></div>`
    : "";
  panel.innerHTML = (recentTurns.length ? recentTurns.map(turn => `
    <div class="conversation-turn ${turn.role === "user" ? "user" : "assistant"}">
      <strong>${turn.role === "user" ? "You" : "AgriNexus"}</strong>
      <span>${escapeHtml(turn.text)}</span>
    </div>
  `).join("") : `<div class="conversation-turn assistant"><strong>AgriNexus</strong><span>Ask me to open telehealth, apply for a job, start training, contact a buyer, run a drone scan, or check provider engines.</span></div>`) + pendingHtml;
}

function latestOnboardingRun() {
  return (data.profile.onboardingRuns || [])[0];
}

function renderLaunchSupportPanels() {
  const run = latestOnboardingRun();
  const tickets = data.profile.supportTickets || [];
  const pilotTarget = $("#localPilotReport");
  if (pilotTarget) {
    const pilots = data.profile.localPilotRuns || [];
    pilotTarget.innerHTML = pilots.length
      ? pilots.slice(0, 3).map(pilot => `<div><strong>${translateText(pilot.title)} - ${translateText(pilot.status)}</strong><span>${translateText(pilot.summary)}</span><span>${(pilot.outcomes || []).slice(0, 3).map(item => translateText(item)).join(" | ")}</span></div>`).join("")
      : "<div><strong>Ready to run</strong><span>Choose a pilot scenario to create local evidence before live engines are connected.</span></div>";
  }
  const onboardingTarget = $("#onboardingPanel");
  if (onboardingTarget) {
    onboardingTarget.innerHTML = run
      ? run.steps.map(step => `<div><strong>${step.title}</strong><span>${step.status} - ${step.action}</span></div>`).join("")
      : "<div>Start the walkthrough to create a guided first-run path.</div>";
  }
  const supportTarget = $("#supportPanel");
  if (supportTarget) {
    supportTarget.innerHTML = tickets.length
      ? tickets.slice(0, 4).map(ticket => `<div><strong>${ticket.ticketNumber} - ${ticket.subject}</strong><span>${ticket.status} - ${ticket.module} - ${ticket.priority}</span></div>`).join("")
      : "<div>No support tickets yet.</div>";
  }
}

function applyPermissions() {
  $$("[data-workflow], [data-ai], [data-workforce], [data-health], [data-pay], [data-module-test], [data-command-preset], [data-pilot-scenario], [data-persona], [data-simple-command], [data-simple-section], [data-simple-pilot], [data-simple-demo], [data-simple-mission], [data-simple-action], .provider-test, #adminHealthCheck, #liveServiceCheckBtn, #aiConsoleRun, #agentPlanBtn, #agentExecuteBtn, #agentBriefingBtn, #agentMissionBtn, #missionResumeBtn, #missionAutopilotBtn, #demoRunBtn, #wowDemoBtn, #startOnboardingBtn, #openSupportBtn, #inviteSubscriberBtn, [data-ai-review], [data-notify], #voiceListenBtn, #voiceRunBtn, #voiceFirstBtn, #voiceSpeakBtn, #voiceHelpBtn, #globalListenBtn, #globalRunBtn, #globalYesBtn, #globalNoBtn, #globalReadBtn, #globalVoiceHelpBtn, #globalInstallBtn, #jarvisListenBtn, #jarvisRunBtn, #jarvisMissionBtn, #jarvisReadBtn").forEach(element => {
    const area = element.dataset.workflow
      || (element.dataset.ai ? "ai" : null)
      || (element.dataset.workforce ? "workforce" : null)
      || (element.dataset.health ? "health" : null)
      || (element.dataset.pay ? "trade" : null)
      || (element.dataset.moduleTest ? "integrations" : null)
      || (element.dataset.commandPreset ? "ai" : null)
      || (element.dataset.pilotScenario ? "ai" : null)
      || (element.dataset.persona ? "ai" : null)
      || (element.dataset.simpleCommand ? "ai" : null)
      || (element.dataset.simpleSection ? element.dataset.simpleSection : null)
      || (element.dataset.simplePilot ? "ai" : null)
      || (element.dataset.simpleDemo ? "admin" : null)
      || (element.dataset.simpleMission ? "ai" : null)
      || (element.dataset.simpleAction ? "ai" : null)
      || (element.classList.contains("provider-test") ? "integrations" : null)
      || (element.id === "adminHealthCheck" ? "admin" : null)
      || (element.id === "liveServiceCheckBtn" ? "admin" : null)
      || (element.id === "aiConsoleRun" ? "ai" : null)
      || (element.id === "agentPlanBtn" ? "ai" : null)
      || (element.id === "agentExecuteBtn" ? "ai" : null)
      || (element.id === "agentBriefingBtn" ? "ai" : null)
      || (element.id === "voiceListenBtn" ? "ai" : null)
      || (element.id === "voiceRunBtn" ? "ai" : null)
      || (element.id === "voiceFirstBtn" ? "ai" : null)
      || (element.id === "voiceHelpBtn" ? "ai" : null)
      || (element.id === "voiceSpeakBtn" ? "ai" : null)
      || (element.id === "globalListenBtn" ? "ai" : null)
      || (element.id === "globalRunBtn" ? "ai" : null)
      || (element.id === "globalVoiceFirstBtn" ? "ai" : null)
      || (element.id === "globalVoiceHelpBtn" ? "ai" : null)
      || (element.id === "globalYesBtn" ? "ai" : null)
      || (element.id === "globalNoBtn" ? "ai" : null)
      || (element.id === "globalReadBtn" ? "ai" : null)
      || (element.id === "globalInstallBtn" ? "ai" : null)
      || (element.id === "jarvisListenBtn" ? "ai" : null)
      || (element.id === "jarvisRunBtn" ? "ai" : null)
      || (element.id === "jarvisMissionBtn" ? "ai" : null)
      || (element.id === "jarvisReadBtn" ? "ai" : null)
      || (element.id === "startOnboardingBtn" ? "profile" : null)
      || (element.id === "openSupportBtn" ? "profile" : null)
      || (element.id === "inviteSubscriberBtn" ? "admin" : null)
      || (element.id === "demoRunBtn" ? "admin" : null)
      || (element.id === "wowDemoBtn" ? "admin" : null)
      || (element.dataset.aiReview ? "governance" : null)
      || (element.dataset.notify ? "notifications" : null);
    if (!area) return;
    const allowed = can(area);
    element.disabled = !allowed;
    element.title = allowed ? "" : `Your role cannot run ${area} workflows`;
  });
}

function applyAccessibilityAttributes() {
  $$("button").forEach(button => {
    if (!button.getAttribute("type")) button.setAttribute("type", "button");
    const label = button.textContent.trim();
    if (label && !button.getAttribute("aria-label")) button.setAttribute("aria-label", label);
  });
  $$(".section").forEach(section => section.setAttribute("tabindex", "-1"));
  const mapCanvas = $("#mapCanvas");
  if (mapCanvas && data) {
    mapCanvas.setAttribute("aria-label", `Interactive operations map. Active country ${activeCountry().name}. Active route ${activeRoute().name}. Current checkpoint ${data.profile.activeCheckpoint}. Route and facility details are also available in text panels beside the map.`);
  }
}

function renderProcessBoard(selector, steps) {
  const target = $(selector);
  if (!target) return;
  target.innerHTML = steps.map((step, index) => `
    <article class="process-step ${step.status}" data-workflow="${step.workflow}" data-action="${step.action}" ${step.productId ? `data-product-id="${step.productId}"` : ""} ${step.roleId ? `data-role-id="${step.roleId}"` : ""}>
      <span class="process-index">${index + 1}</span>
      <div class="tag-row"><span>${translateText(step.module)}</span><span>${translateText(step.statusLabel)}</span></div>
      <h3>${translateText(step.title)}</h3>
      <p>${translateText(step.text)}</p>
      <button class="${step.primary ? "primary" : ""}" data-workflow="${step.workflow}" data-action="${step.action}" ${step.productId ? `data-product-id="${step.productId}"` : ""} ${step.roleId ? `data-role-id="${step.roleId}"` : ""}>${translateText(step.button)}</button>
    </article>
  `).join("");
}

function taskActionAttrs(action = {}) {
  if (!action || !Object.keys(action).length) return "";
  const attrs = [];
  if (action.workflow) attrs.push(`data-workflow="${action.workflow}"`);
  if (action.action) attrs.push(`data-action="${action.action}"`);
  if (action.section) attrs.push(`data-jump="${action.section}"`);
  if (action.ai) attrs.push(`data-ai="${action.ai}"`);
  if (action.mapAction) attrs.push(`data-map-action="${action.mapAction}"`);
  if (action.providerId) attrs.push(`data-provider="${action.providerId}"`);
  if (action.module) attrs.push(`data-module-test="${action.module}"`);
  if (action.roleId) attrs.push(`data-role-id="${action.roleId}"`);
  if (action.productId) attrs.push(`data-product-id="${action.productId}"`);
  return attrs.join(" ");
}

function taskItem(title, detail, status = "ready", label = "Ready", action = null) {
  const actionAttrs = taskActionAttrs(action);
  const statusControl = actionAttrs
    ? `<button class="task-chip-action" type="button" ${actionAttrs}>${translateText(label)}</button>`
    : `<small>${translateText(label)}</small>`;
  return `
    <div class="task-item ${status}">
      <div><strong>${translateText(title)}</strong><span>${translateText(detail)}</span></div>
      ${statusControl}
    </div>
  `;
}

function renderWorkspace(selector, panels) {
  const target = $(selector);
  if (!target) return;
  target.innerHTML = panels.map(panel => `
    <article class="workspace-panel">
      <div class="tag-row"><span>${translateText(panel.eyebrow)}</span><span>${translateText(panel.metric)}</span></div>
      <h3>${translateText(panel.title)}</h3>
      <p>${translateText(panel.summary)}</p>
      <div class="task-list">${panel.items.join("")}</div>
    </article>
  `).join("");
}

function simpleHomeActions() {
  const common = [
    { label: "Ask AgriNexus", detail: "Tell the assistant what you need in plain language.", command: "help me", primary: true },
    { label: "View my record", detail: "Open the unified profile with learning, work, care, farmer, and activity evidence.", section: "profile" }
  ];
  const byPersona = {
    farmer: [
      { label: "Sell my crop", detail: "Prepare a buyer contact workflow for the active crop/order.", command: "contact my buyer", primary: true },
      { label: "Scan my field", detail: "Run drone field intelligence and create a field follow-up task.", command: "run drone scan" },
      { label: "Check my route", detail: "Review map and route risk for the active corridor.", command: "assess route risk" },
      { label: "Run farmer pilot", detail: "Create local pilot evidence for farmer market access.", pilot: "farmer-market" }
    ],
    learner: [
      { label: "Learn a skill", detail: "Start or continue the active training path.", command: "start training path", primary: true },
      { label: "Complete lesson", detail: "Finish the current lesson and update learning progress.", command: "complete my lesson" },
      { label: "Get certificate", detail: "Issue a certificate after training progress is ready.", command: "issue my certificate" },
      { label: "Accessibility help", detail: "Prepare captions, audio guide, or offline packet.", section: "learning" }
    ],
    worker: [
      { label: "Apply for work", detail: "Apply for the best matched role and record the next step.", command: "apply for that job", primary: true },
      { label: "Review gaps", detail: "Open workforce readiness and role matching.", command: "review readiness gaps" },
      { label: "Schedule shift", detail: "Create a paid shift after workforce support is ready.", command: "schedule my shift" },
      { label: "Find mentor", detail: "Assign mentor support for the candidate.", command: "assign mentor" }
    ],
    health: [
      { label: "Start telehealth", detail: "Open accessible intake with language and caregiver support.", command: "start telehealth intake", primary: true },
      { label: "Capture vitals", detail: "Record supervised vitals and triage evidence.", command: "capture vitals" },
      { label: "Caregiver support", detail: "Notify caregiver or community accessibility aide.", command: "notify caregiver" },
      { label: "Follow-up", detail: "Schedule a low-bandwidth callback and support packet.", command: "schedule follow up" }
    ],
    government: [
      { label: "Run local pilot", detail: "Create local evidence across every major workflow.", pilot: "rural-access", primary: true },
      { label: "Government briefing", detail: "Prepare a plain-language briefing for leaders.", command: "prepare government briefing" },
      { label: "Readiness check", detail: "Review what is ready and what needs live engines.", command: "what is the readiness status" },
      { label: "Provider test", detail: "Test local provider engine readiness.", command: "test provider engines" }
    ],
    partner: [
      { label: "WOW demo", detail: "Run the investor scenario across accessibility, health, work, trade, AI, and evidence.", demo: "wow", primary: true },
      { label: "Run full mission", detail: "Execute the agentic cross-module mission.", mission: "full" },
      { label: "Test provider engines", detail: "Run the live/local provider readiness workflow.", workflow: "integrations", action: "test-all" },
      { label: "Open readiness", detail: "Review production readiness, subscribers, and audit views.", workflow: "admin", action: "readiness" }
    ]
  };
  return [...(byPersona[selectedPersona] || byPersona.farmer), ...common].slice(0, 6);
}

function renderSimpleHome() {
  $$("[data-persona]").forEach(button => {
    button.classList.toggle("active", button.dataset.persona === selectedPersona);
  });
  const target = $("#simpleActionGrid");
  if (!target) return;
  target.innerHTML = simpleHomeActions().map((action, index) => {
    const attrs = action.workflow
      ? `data-workflow="${escapeHtml(action.workflow)}" data-action="${escapeHtml(action.action || "review")}"`
      : action.command
        ? `data-simple-command="${escapeHtml(action.command)}"`
        : action.section
          ? `data-simple-section="${escapeHtml(action.section)}"`
          : action.pilot
            ? `data-simple-pilot="${escapeHtml(action.pilot)}"`
            : action.demo
              ? `data-simple-demo="${escapeHtml(action.demo)}"`
              : action.mission
                ? `data-simple-mission="${escapeHtml(action.mission)}"`
                : `data-simple-action="continue"`;
    return `<button type="button" class="simple-action ${action.primary ? "primary" : ""}" ${attrs}>
      <strong>${index + 1}. ${escapeHtml(action.label)}</strong>
      <span>${escapeHtml(action.detail)}</span>
    </button>`;
  }).join("");
}

function renderWorkflowBoards(country, route) {
  const product = firstProduct();
  const role = firstEligibleRole();
  const latestOrder = data.profile.orders[data.profile.orders.length - 1];
  const activeLearningCourse = activeCourse();
  const activeLearningEnrollment = activeLearningCourse ? courseEnrollment(activeLearningCourse.id) : null;
  const hasProfile = (data.profile.workforceBadges || []).includes("Profile Verified");
  const hasInterview = (data.profile.interviews || 0) > 0;
  const hasMentor = data.profile.mentor === "Assigned";
  const hasShift = (data.profile.shiftSchedule || []).length > 0;
  const hasApplication = (data.profile.applications || []).length > 0;
  const hasIntake = (data.profile.healthIntakes || []).length > 0;
  const hasRep = (data.profile.representativeConnections || 0) > 0;
  const hasSafety = (data.profile.safetyReviews || []).length > 0;
  const hasCarePlan = (data.profile.carePlans || []).length > 0;
  renderProcessBoard("#dashboardProcess", [
    { module: "Learning", title: activeLearningEnrollment ? "Continue active course" : "Start learning record", text: activeLearningCourse ? `${translatedCourse(activeLearningCourse).title}: complete lessons, quiz, and certificate from the learning studio.` : "Open the learning studio and start a verified course.", workflow: "learning", action: activeLearningEnrollment ? "lesson" : "start", status: activeLearningEnrollment?.progress >= 100 ? "done" : "active", statusLabel: activeLearningEnrollment ? `${activeLearningEnrollment.progress || 0}%` : "Start here", button: activeLearningEnrollment ? "Complete lesson" : "Start course", primary: true },
    { module: "Workforce", title: hasApplication ? "Move placement forward" : "Build workforce pipeline", text: hasApplication ? "Schedule interview, assign mentor, and move into a paid shift." : "Verify the candidate profile and submit a role application.", workflow: "workforce", action: hasProfile ? "apply-role" : "build-profile", roleId: role?.id, status: hasShift ? "done" : "active", statusLabel: data.profile.candidateStage || "Ready", button: hasProfile ? "Apply to role" : "Build profile" },
    { module: "Healthcare", title: hasCarePlan ? "Review care operations" : "Open care case", text: hasCarePlan ? "Run safety, representative, and AI care-plan follow-up." : `Start a patient intake for ${country.name} and move it through care planning.`, workflow: "health", action: hasIntake ? "careplan" : "intake", status: hasCarePlan ? "done" : "active", statusLabel: country.queue, button: hasIntake ? "Generate care plan" : "Start intake" },
    { module: "AgriTrade", title: latestOrder ? "Advance trade order" : "Create market order", text: latestOrder ? `${latestOrder.orderNumber} is at ${latestOrder.stage}; move it to the next checkpoint.` : product ? `Create a buyer order for ${product.name}.` : "Open the product market and create an order.", workflow: "trade", action: latestOrder ? "advance" : "order", productId: product?.id, status: latestOrder?.stage === "Delivered" ? "done" : "active", statusLabel: latestOrder?.stage || "Ready", button: latestOrder ? "Advance order" : "Create order" },
    { module: "Map & AI", title: "Run route intelligence", text: `Analyze ${route.name}, ${country.name}, and ${data.profile.activeCheckpoint}.`, workflow: "ai", action: "command", status: aiRunComplete("command") ? "done" : "active", statusLabel: data.profile.aiProvider || "AI ready", button: "Run command center" },
    { module: "Integrations", title: "Test all engines", text: "Exercise all configured provider endpoints and write integration events.", workflow: "integrations", action: "test-all", status: integrationActionComplete("provider.test_all") ? "done" : "active", statusLabel: `${data.providers.length} providers`, button: "Test all providers" },
    { module: "Admin", title: "Run platform health", text: "Refresh module health, readiness, and audit evidence from the admin console.", workflow: "admin", action: "health-check", status: integrationActionComplete("admin.health_check") ? "done" : "active", statusLabel: data.admin?.readiness?.status || "Ready", button: "Run health check" },
    { module: "Profile", title: "Review unified record", text: "Open the consolidated learning, workforce, health, trade, wallet, and AI record.", workflow: "profile", action: "open", status: "active", statusLabel: "Unified", button: "Open profile" }
  ]);

  renderProcessBoard("#workforceProcess", [
    { module: "Workforce", title: "Verify candidate profile", text: "Build the workforce record from learning readiness, badges, and certificates.", workflow: "workforce", action: "build-profile", status: hasProfile ? "done" : "active", statusLabel: hasProfile ? "Complete" : "Start here", button: "Build profile", primary: true },
    { module: "Workforce", title: "Submit an application", text: role ? `Apply for ${role.title} or review the exact readiness gaps for that role.` : "Load the role marketplace and pick an opportunity.", workflow: "workforce", action: "apply-role", roleId: role?.id, status: hasApplication ? "done" : hasProfile ? "active" : "blocked", statusLabel: hasApplication ? "Submitted" : hasProfile ? "Ready" : "Needs profile", button: hasApplication ? "Open application" : "Apply to role" },
    { module: "Workforce", title: "Schedule interview", text: "Create the interview event and provider notification for workforce operations.", workflow: "workforce", action: "interview", status: hasInterview ? "done" : data.profile.readiness >= 50 ? "active" : "blocked", statusLabel: hasInterview ? "Booked" : data.profile.readiness >= 50 ? "Ready" : "Needs readiness", button: "Schedule interview" },
    { module: "Workforce", title: "Mentor and shift", text: "Assign the mentor, then schedule a paid shift once the interview is in place.", workflow: "workforce", action: hasMentor ? "shift" : "mentor", status: hasShift ? "done" : hasInterview ? "active" : "blocked", statusLabel: hasShift ? "Shift ready" : hasMentor ? "Mentor ready" : "Pending", button: hasMentor ? "Start shift" : "Assign mentor" }
  ]);

  renderProcessBoard("#healthProcess", [
    { module: "Healthcare", title: "Open patient intake", text: `Start a supervised care case for ${country.name} using the telehealth provider path.`, workflow: "health", action: "intake", status: hasIntake ? "done" : "active", statusLabel: hasIntake ? "Open" : "Start here", button: "Start intake", primary: true },
    { module: "Healthcare", title: "Connect representative", text: "Escalate the case to a human representative and record the notification event.", workflow: "health", action: "representative", status: hasRep ? "done" : hasIntake ? "active" : "blocked", statusLabel: hasRep ? "Connected" : hasIntake ? "Ready" : "Needs intake", button: "Connect representative" },
    { module: "Healthcare", title: "Run safety review", text: "Log heat, queue, data quality, and safety oversight before guidance is generated.", workflow: "health", action: "safety", status: hasSafety ? "done" : hasIntake ? "active" : "blocked", statusLabel: hasSafety ? "Reviewed" : "Pending", button: "Run safety review" },
    { module: "Healthcare", title: "Generate care plan", text: "Use the AI care-plan engine and sync the result through the health provider path.", workflow: "health", action: "careplan", status: hasCarePlan ? "done" : hasSafety ? "active" : "blocked", statusLabel: hasCarePlan ? "Active" : "Pending", button: "Generate care plan" }
  ]);

  renderProcessBoard("#tradeProcess", [
    { module: "AgriTrade", title: "Create buyer order", text: product ? `Start an order for ${product.name} and attach it to a route.` : "Load products and open the order workflow.", workflow: "trade", action: "order", productId: product?.id, status: latestOrder ? "done" : "active", statusLabel: latestOrder ? "Created" : "Start here", button: "Create order", primary: true },
    { module: "AgriTrade", title: "Advance logistics", text: latestOrder ? `Move ${latestOrder.orderNumber} from ${latestOrder.stage} to the next checkpoint.` : "Create an order before advancing logistics.", workflow: "trade", action: "advance", status: latestOrder?.stageIndex > 1 ? "done" : latestOrder ? "active" : "blocked", statusLabel: latestOrder ? latestOrder.stage : "Needs order", button: "Advance order" },
    { module: "AgriTrade", title: "Post wallet payment", text: "Record a payment provider transaction and update the wallet ledger.", workflow: "trade", action: "wallet", status: (data.profile.walletTransactions || []).length ? "done" : "active", statusLabel: (data.profile.walletTransactions || []).length ? "Posted" : "Ready", button: "Post M-Pesa payment" },
    { module: "AgriTrade", title: "Run market AI", text: "Generate price guidance and route risk from the AI engine.", workflow: "trade", action: aiRunComplete("price") ? "route" : "price", status: aiRunComplete("price") && aiRunComplete("route") ? "done" : latestOrder ? "active" : "blocked", statusLabel: aiRunComplete("price") && aiRunComplete("route") ? "Complete" : "Pending", button: aiRunComplete("price") ? "Run route AI" : "Run price AI" }
  ]);

  renderProcessBoard("#mapProcess", [
    { module: "Map & AI", title: "Command center run", text: `Analyze ${country.name}, ${route.name}, and the active checkpoint together.`, workflow: "ai", action: "command", status: aiRunComplete("command") ? "done" : "active", statusLabel: aiRunComplete("command") ? "Complete" : "Ready", button: "Run command center", primary: true },
    { module: "Map & AI", title: "Route inspection", text: "Inspect route movement, health pressure, provider state, and field risk.", workflow: "ai", action: "inspector", status: aiRunComplete("inspector") ? "done" : "active", statusLabel: aiRunComplete("inspector") ? "Complete" : "Ready", button: "Inspect route" },
    { module: "Map & AI", title: "Route risk", text: "Assess logistics risk and push the insight into route intelligence.", workflow: "ai", action: "route", status: aiRunComplete("route") ? "done" : "active", statusLabel: aiRunComplete("route") ? "Complete" : "Ready", button: "Assess route risk" },
    { module: "Map & AI", title: "Country context", text: "Use the selector to switch countries; the map, health queue, and route state update together.", workflow: "map", action: "focus", status: "active", statusLabel: country.name, button: "Focus map" }
  ]);

  renderProcessBoard("#integrationProcess", [
    { module: "Integrations", title: "Test all providers", text: "Exercise every configured provider endpoint and record the integration audit events.", workflow: "integrations", action: "test-all", status: integrationActionComplete("provider.test_all") ? "done" : "active", statusLabel: integrationActionComplete("provider.test_all") ? "Complete" : "Ready", button: "Test all providers", primary: true },
    { module: "Integrations", title: "Open provider cards", text: "Inspect individual provider status, mode, detail, and live-readiness signal.", workflow: "integrations", action: "focus-cards", status: "active", statusLabel: `${data.providers.length} tracked`, button: "Review providers" },
    { module: "Integrations", title: "Run admin check", text: "Record a platform-wide provider health check from the operations console.", workflow: "admin", action: "health-check", status: integrationActionComplete("admin.health_check") ? "done" : "active", statusLabel: integrationActionComplete("admin.health_check") ? "Logged" : "Ready", button: "Run health check" },
    { module: "Integrations", title: "Review readiness", text: "Check what is connected, what is local-optimized, and what needs live credentials.", workflow: "admin", action: "readiness", status: data.admin?.readiness?.status === "production-ready" ? "done" : "active", statusLabel: data.admin?.readiness?.status || "Ready", button: "Open readiness" }
  ]);

  renderProcessBoard("#adminProcess", [
    { module: "Admin", title: "Run platform health", text: "Refresh provider checks, module records, and audit events.", workflow: "admin", action: "health-check", status: integrationActionComplete("admin.health_check") ? "done" : "active", statusLabel: integrationActionComplete("admin.health_check") ? "Logged" : "Ready", button: "Run health check", primary: true },
    { module: "Admin", title: "Review module records", text: "Confirm each domain is producing backend records and not just UI content.", workflow: "admin", action: "modules", status: "active", statusLabel: `${data.admin?.modules?.length || 0} modules`, button: "Review modules" },
    { module: "Admin", title: "Review audit feed", text: "Inspect the latest provider, workflow, and activity events.", workflow: "admin", action: "audit", status: (data.admin?.audit || []).length ? "done" : "active", statusLabel: (data.admin?.audit || []).length ? "Has events" : "Empty", button: "Open audit" },
    { module: "Admin", title: "Production readiness", text: "See the readiness score and remaining setup steps for live deployment.", workflow: "admin", action: "readiness", status: data.admin?.readiness?.status === "production-ready" ? "done" : "active", statusLabel: `${data.admin?.readiness?.readyCount || 0}/${data.admin?.readiness?.total || 0}`, button: "Open readiness" }
  ]);
}

function render() {
  if (!data) return;
  const country = activeCountry();
  const route = activeRoute();
  $("#loginView").classList.add("hidden");
  $("#appView").classList.remove("hidden");
  $("#userLine").textContent = `${data.user.name} - ${data.user.role}`;
  applyPlatformLanguage();

  $("#countrySelect").innerHTML = [
    `<option value="language:en">English</option>`,
    ...data.countries.map(item => `<option value="${item.id}">${countryDisplayLabel[item.id] || `${item.name} - ${countryLanguageLabel[item.id] || "Language"}`}</option>`)
  ].join("");
  $("#countrySelect").value = languageCode() === "en" ? "language:en" : country.id;

  $("#kpiCountries").textContent = data.countries.length;
  $("#kpiPatients").textContent = data.countries.reduce((sum, item) => sum + item.patients, 0).toLocaleString();
  $("#kpiFacilities").textContent = data.countries.reduce((sum, item) => sum + item.facilities, 0);
  $("#kpiOrders").textContent = data.profile.orders.length;
  renderSimpleHome();

  $("#contextPanel").innerHTML = [
    row("Country", country.name),
    row("Route", route.name),
    row("Checkpoint", data.profile.activeCheckpoint),
    row("Risk", country.risk),
    row("Heat", `${country.heat} C`),
    row("Queue", country.queue)
  ].join("");

  $("#activityFeed").innerHTML = data.profile.activity.map(item => `<div>${translateText(item)}</div>`).join("");
  const activeCourseForDashboard = activeCourse();
  const dashboardLatestOrder = data.profile.orders[data.profile.orders.length - 1];
  const dashboardCards = [
    {
      section: "learning",
      eyebrow: "Learning",
      title: activeCourseForDashboard ? "Continue training" : "Start training",
      text: activeCourseForDashboard ? `${translatedCourse(activeCourseForDashboard).title} - ${courseStatus(activeCourseForDashboard)}` : "Open the learning studio and begin a verified course.",
      metric: `${data.profile.readiness}% readiness`,
      action: "Open Learning"
    },
    {
      section: "workforce",
      eyebrow: "Workforce",
      title: "Review pipeline",
      text: `${data.profile.candidateStage}, ${data.profile.eligibility}, ${(data.profile.shiftSchedule || []).length} shift(s) scheduled.`,
      metric: `${(data.profile.applications || []).length} application(s)`,
      action: "Open Workforce"
    },
    {
      section: "health",
      eyebrow: "Health",
      title: "Open care command",
      text: `${country.name}: ${country.queue}, ${country.risk} risk, ${(data.profile.carePlans || []).length} care plan(s).`,
      metric: `${country.facilities} facilities`,
      action: "Open Health"
    },
    {
      section: "trade",
      eyebrow: "Agritrade",
      title: dashboardLatestOrder ? "Manage active order" : "Create trade order",
      text: dashboardLatestOrder ? `${dashboardLatestOrder.orderNumber || dashboardLatestOrder.id} is at ${dashboardLatestOrder.stage}.` : `Open the market for ${country.name} products and wallet activity.`,
      metric: `${data.profile.orders.length} order(s)`,
      action: "Open Trade"
    },
    {
      section: "map",
      eyebrow: "Map & AI",
      title: "Run route intelligence",
      text: `${route.name}, active checkpoint ${data.profile.activeCheckpoint}.`,
      metric: data.profile.aiProvider || "AI ready",
      action: "Open Map"
    },
    {
      section: "integrations",
      eyebrow: "Integrations",
      title: "Test live engines",
      text: `${data.providers.filter(provider => provider.status === "connected").length}/${data.providers.length} providers connected or ready.`,
      metric: (data.profile.integrationEvents || [])[0]?.action || "No events yet",
      action: "Open Integrations"
    }
  ];
  $("#dashboardActions").innerHTML = dashboardCards.map(card => `
    <article class="dashboard-card" data-jump="${card.section}">
      <div class="tag-row"><span>${card.eyebrow}</span><span>${card.metric}</span></div>
      <h3>${card.title}</h3>
      <p>${card.text}</p>
      <button class="primary dashboard-jump" data-jump="${card.section}">${card.action}</button>
    </article>
  `).join("");
  const demoMoments = data.profile.demoMoments || [
    { title: "Accessible learner starts", detail: "Run the WOW demo to complete the rural Nigeria accessibility scenario.", evidence: "Ready to simulate", status: "active" },
    { title: "Training becomes work", detail: "Learning records can become workforce readiness, applications, mentor support, and shifts.", evidence: "Workflow chain", status: "active" },
    { title: "Telehealth meets ADA needs", detail: "Captions, audio support, caregiver handoff, and low-bandwidth support are ready to run.", evidence: "Access pathway", status: "active" },
    { title: "Investor proof appears", detail: "Every simulated action creates state, activity, provider evidence, and notifications.", evidence: "Audit trail", status: "active" }
  ];
  $("#demoStoryboard").innerHTML = demoMoments.map((moment, index) => `
    <article class="demo-moment ${moment.status || "active"}">
      <div class="tag-row"><span>Moment ${index + 1}</span><span>${data.profile.demoScore || 0}%</span></div>
      <strong>${translateText(moment.title)}</strong>
      <span>${translateText(moment.detail)}</span>
      <small>${translateText(moment.evidence)}</small>
    </article>
  `).join("");
  $("#copilotPanel").innerHTML = [
    row("Mode", data.providers.find(item => item.id === "openai")?.mode || data.profile.aiProvider || "fallback"),
    row("Latest run", (data.profile.aiRuns || [])[0]?.type || "None"),
    row("Context", `${country.name} - ${route.name} - ${data.profile.activeCheckpoint}`),
    row("Human review", "Required before committing AI-guided actions")
  ].join("");
  renderAiEvidence("#copilotRecommendations", "AI", "No copilot recommendation yet. Ask the copilot to create the next-action guidance.");

  renderWorkspace("#dashboardWorkspace", [
    {
      eyebrow: "Operations",
      metric: `${dashboardCards.length} domains`,
      title: "Today's Work Queue",
      summary: "A single cross-module queue for the work a coordinator can actually move.",
      items: [
        taskItem("Continue active training", activeCourseForDashboard ? courseStatus(activeCourseForDashboard) : "No active course selected", "live", `${data.profile.readiness}%`),
        taskItem("Move workforce placement", `${data.profile.candidateStage} with ${(data.profile.applications || []).length} application(s)`, (data.profile.applications || []).length ? "ready" : "pending", data.profile.eligibility),
        taskItem("Open care operations", `${country.name}: ${country.queue}`, country.risk === "High" ? "blocked" : "live", country.risk),
        taskItem("Advance trade route", dashboardLatestOrder ? `${dashboardLatestOrder.orderNumber} at ${dashboardLatestOrder.stage}` : "No order created yet", dashboardLatestOrder ? "ready" : "pending", dashboardLatestOrder ? "Active" : "Create")
      ]
    },
    {
      eyebrow: "Evidence",
      metric: `${data.profile.integrationEvents.length} event(s)`,
      title: "Funding Demo Proof",
      summary: "Records created by workflows are visible as activity, provider events, and module state.",
      items: [
        taskItem("Learning records", `${data.profile.enrollments?.length || 0} enrollment(s), ${data.profile.certificates?.length || 0} certificate(s)`, "ready", "Tracked"),
        taskItem("Care records", `${data.profile.healthIntakes?.length || 0} intake(s), ${data.profile.carePlans?.length || 0} care plan(s)`, "ready", "Tracked"),
        taskItem("Trade records", `${data.profile.orders?.length || 0} order(s), ${data.profile.walletTransactions?.length || 0} wallet tx`, "ready", "Tracked"),
        taskItem("Provider records", (data.profile.integrationEvents || [])[0]?.action || "No provider event yet", "live", "Audit")
      ]
    },
    {
      eyebrow: "Context",
      metric: country.name,
      title: "Active Operating Region",
      summary: "Country, route, health, and logistics state move together across the platform.",
      items: [
        taskItem("Route", route.name, "live", `${route.checkpoints.length} stops`),
        taskItem("Checkpoint", data.profile.activeCheckpoint, "live", data.profile.routeStage),
        taskItem("Facilities", `${country.facilities} facilities, ${country.patients.toLocaleString()} patients`, "ready", country.queue),
        taskItem("AI activity", data.profile.aiActivity || "No AI run yet", data.profile.aiRuns?.length ? "ready" : "pending", data.profile.aiProvider || "Fallback")
      ]
    }
  ]);

  const currentCourse = activeCourse();
  const localizedCurrentCourse = currentCourse ? translatedCourse(currentCourse) : null;
  const copy = learningText();
  $("#learning").setAttribute("dir", languageCode() === "ar" ? "rtl" : "ltr");
  const currentEnrollment = currentCourse ? courseEnrollment(currentCourse.id) : null;
  const currentProgress = currentEnrollment?.progress || ((data.profile.completedCourses || []).includes(currentCourse?.id) ? 100 : 0);
  $("#learningEyebrow").textContent = copy.studio;
  $("#learningTitle").textContent = platformText().learningTitle || copy.title;
  $("#learningIntro").textContent = platformText().learningIntro || copy.intro;
  $("#learningScoreLabel").textContent = copy.readiness;
  $("#currentFocusLabel").textContent = copy.focus;
  $("#startActiveCourseBtn").textContent = currentEnrollment ? copy.continueCourse : copy.startCourse;
  $("#completeLessonBtn").textContent = copy.completeLesson || "Complete lesson";
  $("#quizBtn").textContent = copy.quiz;
  $("#certBtn").textContent = copy.certificate;
  $("#learningRecordTitle").textContent = copy.record;
  $("#certificatesTitle").textContent = copy.certificates;
  $$(".language-option").forEach(button => button.classList.toggle("active", button.dataset.language === (data.user?.language || "en")));
  $("#learningScore").textContent = `${data.profile.readiness}%`;
  $("#activeCourseTrack").textContent = localizedCurrentCourse?.track || "Pathway";
  $("#activeCourseTitle").textContent = localizedCurrentCourse?.title || copy.choose;
  $("#activeCourseSummary").textContent = currentCourse
    ? `${localizedCurrentCourse.level || "Core"} - ${translatedDuration(currentCourse.duration)} - ${courseStatus(currentCourse)}`
    : copy.emptySummary;
  $("#activeCourseModules").innerHTML = (localizedCurrentCourse?.skills || localizedCurrentCourse?.modules || [])
    .map(skill => `<span>${skill}</span>`)
    .join("");
  const activeModules = localizedCurrentCourse?.modules || [];
  const completedModules = currentEnrollment?.completedModules || [];
  const activeModuleIndex = currentEnrollment?.activeModuleIndex || 0;
  $("#lessonWorkspace").innerHTML = currentCourse ? `
    <div class="lesson-head">
      <strong>${localizedCurrentCourse.title}</strong>
      <span>${completedModules.length}/${activeModules.length} ${copy.complete}</span>
    </div>
    <div class="lesson-list">
      ${activeModules.map((module, index) => `
        <button class="lesson-step ${completedModules.includes(index) ? "done" : ""} ${index === activeModuleIndex ? "active" : ""}" data-course="${currentCourse.id}" data-module-index="${index}">
          <span>${index + 1}</span>
          <strong>${module}</strong>
          <small>${completedModules.includes(index) ? courseStatus({ id: currentCourse.id }) : copy.completeLesson || "Complete lesson"}</small>
        </button>
      `).join("")}
    </div>
  ` : "";
  $("#activeCourseProgress").style.width = `${currentProgress}%`;

  const tracks = Array.from(new Set(data.courses.map(course => course.track)));
  if (selectedLearningTrack !== "All" && !tracks.includes(selectedLearningTrack)) selectedLearningTrack = "All";
  $("#trackStrip").innerHTML = ["All", ...tracks].map(track => {
    const trackCourses = track === "All" ? data.courses : data.courses.filter(course => course.track === track);
    const complete = trackCourses.filter(course => (data.profile.completedCourses || []).includes(course.id)).length;
    const label = track === "All" ? copy.allTracks : translatedTrack(track);
    return `<article class="track-card ${selectedLearningTrack === track ? "active" : ""}" data-track="${track}"><strong>${label}</strong><span>${complete}/${trackCourses.length} ${copy.complete}</span></article>`;
  }).join("");

  const visibleCourses = selectedLearningTrack === "All"
    ? data.courses
    : data.courses.filter(course => course.track === selectedLearningTrack);

  $("#learningStats").innerHTML = [
    row(copy.path, data.profile.learningPath || data.profile.careerTrack),
    row(copy.active, localizedCurrentCourse?.title || copy.choose),
    row(copy.hours, `${data.profile.learningHours || 0}`),
    row(copy.streak, `${data.profile.learningStreak || 0} ${copy.action}`),
    row(copy.score, `${data.profile.quizScore || 0}`),
    row(copy.certificates, (data.profile.certificates || []).length)
  ].join("");

  const catalog = data.learningCatalog || {
    total: data.courses.length,
    completed: (data.profile.completedCourses || []).length,
    courses: visibleCourses
  };
  $("#learningCatalogSummary").innerHTML = [
    row("Available courses", catalog.total || data.courses.length),
    row("Completed", catalog.completed || 0),
    row("Selected track", selectedLearningTrack === "All" ? copy.allTracks : translatedTrack(selectedLearningTrack)),
    row("Provider mode", (catalog.courses || [])[0]?.providerStatus === "live-provider" ? "Live catalog" : "Local catalog")
  ].join("");

  $("#learningCatalogPanel").innerHTML = visibleCourses.map(course => {
    const catalogCourse = (catalog.courses || []).find(item => item.id === course.id) || course;
    const localizedCourse = translatedCourse(course);
    const enrollment = courseEnrollment(course.id);
    const workforceLinks = catalogCourse.workforceLinks || [];
    return `
      <article class="catalog-card ${catalogCourse.enrollmentStatus === "certified" ? "complete" : ""}" data-course-card="${course.id}">
        <div class="tag-row"><span>${catalogCourse.catalogNumber || course.id}</span><span>${localizedCourse.track}</span><span>${localizedCourse.level || "Core"}</span></div>
        <h3>${localizedCourse.title}</h3>
        <p>${translateText((catalogCourse.outcomes || [])[0] || `${course.readiness}% readiness impact`)}</p>
        <div class="catalog-meta">
          ${row("Next lesson", translatedModule(course, catalogCourse.nextLesson || (course.modules || [])[0] || course.title))}
          ${row("Duration", translatedDuration(course.duration))}
          ${row("Workforce link", workforceLinks.map(role => role.title).join(", ") || "General readiness")}
          ${row("Accessibility", (catalogCourse.accessibility || []).slice(0, 3).join(", "))}
        </div>
        <div class="progress"><span style="width:${enrollment?.progress || catalogCourse.progress || 0}%"></span></div>
        <div class="action-row">
          <button class="primary course" data-course="${course.id}">${enrollment ? copy.continueCourse : copy.startCourse}</button>
          <button class="catalog-lesson" data-course="${course.id}" type="button">${copy.completeLesson || "Complete lesson"}</button>
        </div>
      </article>
    `;
  }).join("");

  $("#courseGrid").innerHTML = visibleCourses.map(course => {
    const localizedCourse = translatedCourse(course);
    const enrollment = courseEnrollment(course.id);
    const certified = (data.profile.completedCourses || []).includes(course.id);
    return `
    <article class="course-card ${certified ? "complete" : ""}" data-course-card="${course.id}">
      <div class="tag-row"><span>${localizedCourse.track}</span><span>${localizedCourse.level || "Core"}</span></div>
      <h3>${localizedCourse.title}</h3>
      <p>${(localizedCourse.modules || []).join(", ")}</p>
      <div class="skill-list">${(localizedCourse.skills || []).map(skill => `<span>${skill}</span>`).join("")}</div>
      <div class="progress"><span style="width:${enrollment?.progress || (certified ? 100 : 0)}%"></span></div>
      ${row(copy.status, courseStatus(course))}
      ${row(copy.impact, `+${course.readiness}%`)}
      ${row(copy.duration, translatedDuration(course.duration))}
      <button class="primary course" data-course="${course.id}">${enrollment ? copy.continueCourse : copy.startCourse}</button>
    </article>
  `}).join("");

  $("#certificateList").innerHTML = (data.profile.certificates || []).length
    ? data.profile.certificates.map(cert => {
      const course = data.courses.find(item => item.id === cert.courseId);
      return `<div>${cert.certificateNumber || cert.id} - ${course ? translatedCourse(course).title : cert.title || "Certificate"}</div>`;
    }).join("")
    : `<div>${copy.noCertificates}</div>`;

  const accessProfile = data.profile.accessibilityProfile || {};
  const learningAccommodations = data.profile.learningAccommodations || [];
  const advancedLearningOps = [
    ...(data.profile.learningAssignments || []).map(item => ({ title: item.assignmentNumber, detail: `${item.courseTitle} - ${item.status}` })),
    ...(data.profile.quizAttempts || []).map(item => ({ title: item.attemptNumber, detail: `${item.courseTitle} - ${item.score}% - ${item.status}` })),
    ...(data.profile.instructorNotes || []).map(item => ({ title: item.noteNumber, detail: `${item.courseTitle} - ${item.status}` })),
    ...(data.profile.learningProgressReports || []).map(item => ({ title: item.reportNumber, detail: `${item.courseTitle} - ${item.progress}% progress` })),
    ...(data.profile.learningTranscripts || []).map(item => ({ title: item.transcriptNumber, detail: `${item.learnerName} - ${item.status}` })),
    ...(data.profile.learningCohorts || []).map(item => ({ title: item.cohortNumber, detail: `${item.cohortName} - ${item.learnerCount} learners` }))
  ];
  $("#learningAccessPanel").innerHTML = [
    row("Hearing support", accessProfile.hearingSupport ? "Captions, transcript, and relay handoff" : "Not configured"),
    row("Vision support", accessProfile.visualSupport ? "Audio guide, screen-reader outline, and large print" : "Not configured"),
    row("Bandwidth mode", accessProfile.bandwidth || "low"),
    row("Preferred formats", (accessProfile.preferredFormats || []).join(", ") || "None"),
    row("Last accommodation", learningAccommodations[0]?.title || "No accessible lesson packet yet")
  ].join("");

  $("#learningAccommodationList").innerHTML = learningAccommodations.length
    ? learningAccommodations.map(item => `<div><strong>${item.title}</strong><span>${item.courseTitle} - ${(item.supports || []).join(", ")}</span></div>`).join("")
    : "<div>No accessible learning accommodations prepared yet.</div>";

  renderProviderEvidence("#learningIntegrationPanel", "Learning", "No learning provider evidence yet. Start a course, complete a lesson, finish a quiz, issue a certificate, or test learning engines.");
  renderEnginePanel("#learningEnginePanel", "Learning");
  renderAiEvidence("#learningAiPanel", "Learning", "No AI tutor guidance yet. Ask the tutor for lesson support or quiz help.");
  $("#learningAdvancedPanel").innerHTML = [
    row("Assignments", (data.profile.learningAssignments || []).length),
    row("Quiz attempts", (data.profile.quizAttempts || []).length),
    row("Instructor notes", (data.profile.instructorNotes || []).length),
    row("Progress reports", (data.profile.learningProgressReports || []).length),
    row("Transcripts", (data.profile.learningTranscripts || []).length),
    row("Cohorts", (data.profile.learningCohorts || []).length)
  ].join("");
  $("#learningAdvancedList").innerHTML = advancedLearningOps.length
    ? advancedLearningOps.slice(0, 12).map(item => `<div><strong>${item.title}</strong><span>${item.detail}</span></div>`).join("")
    : "<div>No advanced learning operations have been run yet.</div>";

  renderWorkspace("#learningWorkspace", [
    {
      eyebrow: copy.studio,
      metric: `${visibleCourses.length} course(s)`,
      title: "Learner Workbench",
      summary: "Course work, lessons, quizzes, and certificate proof are managed from this desk.",
      items: [
        taskItem(localizedCurrentCourse?.title || copy.choose, `${currentProgress}% ${copy.complete}`, currentProgress ? "live" : "pending", courseStatus(currentCourse)),
        taskItem(copy.completeLesson || "Complete lesson", `${(currentEnrollment?.completedModules || []).length}/${localizedCurrentCourse?.modules?.length || 0} module(s) complete`, currentProgress >= 90 ? "ready" : "live", "Lesson"),
        taskItem(copy.quiz, `${data.profile.quizScore || 0} current score`, data.profile.quizScore ? "ready" : "pending", "Assessment"),
        taskItem(copy.certificate, `${data.profile.certificates?.length || 0} certificate(s) issued`, data.profile.certificates?.length ? "ready" : "pending", "Credential")
      ]
    },
    {
      eyebrow: "Classroom",
      metric: selectedLearningTrack === "All" ? copy.allTracks : translatedTrack(selectedLearningTrack),
      title: "Training Catalog",
      summary: "Each course is clickable and connected to enrollment, progress, and workforce readiness.",
      items: visibleCourses.slice(0, 4).map(course => {
        const localized = translatedCourse(course);
        const enrollment = courseEnrollment(course.id);
        return taskItem(localized.title, `${localized.track} - ${translatedDuration(course.duration)}`, enrollment ? "live" : "pending", enrollment ? `${enrollment.progress}%` : `+${course.readiness}%`);
      })
    },
    {
      eyebrow: "Outcomes",
      metric: `${data.profile.readiness}%`,
      title: "Training Evidence",
      summary: "Funding reviewers can see the learning record turn into workforce readiness.",
      items: [
        taskItem("Learning hours", `${data.profile.learningHours || 0} hour(s) logged`, "ready", "Hours"),
        taskItem("Learning streak", `${data.profile.learningStreak || 0} action(s) completed`, "ready", "Activity"),
        taskItem("Career path", data.profile.learningPath || data.profile.careerTrack, "live", "Pathway"),
        taskItem("Certificate provider", integrationActionComplete("certificate.issued") ? "Certificate event recorded" : "Issue a certificate to record event", integrationActionComplete("certificate.issued") ? "ready" : "pending", "Provider")
      ]
    }
  ]);

  $("#readiness").textContent = `${data.profile.readiness}%`;
  $("#workforceProgress").style.width = `${data.profile.readiness}%`;
  $("#eligibility").textContent = data.profile.eligibility;
  $("#stage").textContent = data.profile.candidateStage;
  $("#earnings").textContent = money(data.profile.earnings);

  const pipeline = [
    ["Profile", (data.profile.workforceBadges || []).includes("Profile Verified")],
    ["Interview", (data.profile.interviews || 0) > 0],
    ["Mentor", data.profile.mentor === "Assigned"],
    ["Shift", (data.profile.shiftSchedule || []).length > 0],
    ["Placement", (data.profile.applications || []).length > 0]
  ];
  $("#pipelineSteps").innerHTML = pipeline.map(([label, complete], index) => `
    <article class="${complete ? "done" : ""}">
      <span>${index + 1}</span>
      <strong>${label}</strong>
      <small>${complete ? "Complete" : "Pending"}</small>
    </article>
  `).join("");

  $("#workforcePanel").innerHTML = [
    row("Learning path", data.profile.learningPath || data.profile.careerTrack),
    row("Certificates", (data.profile.certificates || []).length),
    row("Applications", (data.profile.applications || []).length),
    row("Interviews", data.profile.interviews || 0),
    row("Mentor", data.profile.mentor),
    row("Next shift", data.profile.nextShift),
    row("Badges", (data.profile.workforceBadges || []).join(", ") || "None")
  ].join("");

  $("#applicationList").innerHTML = (data.profile.applications || []).length
    ? data.profile.applications.map(app => `<div><strong>${app.roleTitle}</strong><span>${app.status} - ${money(app.rate || 0)}/shift</span></div>`).join("")
    : "<div>No applications submitted yet.</div>";

  $("#shiftList").innerHTML = (data.profile.shiftSchedule || []).length
    ? data.profile.shiftSchedule.map(shift => `<div><strong>${shift.role}</strong><span>${shift.status} - ${new Date(shift.startsAt).toLocaleString()}</span></div>`).join("")
    : "<div>No shifts scheduled yet.</div>";

  const workforceOps = [
    ...(data.profile.workforceOnboarding || []).map(item => ({ title: item.packetNumber, detail: `${item.role} - ${item.status}` })),
    ...(data.profile.workforceDocuments || []).map(item => ({ title: item.documentNumber, detail: `${item.role} - ${item.status}` })),
    ...(data.profile.timesheets || []).map(item => ({ title: item.timesheetNumber, detail: `${item.hours} hours - ${item.status}` })),
    ...(data.profile.payrollApprovals || []).map(item => ({ title: item.payrollNumber, detail: `${money(item.amount || 0)} - ${item.status}` })),
    ...(data.profile.performanceReviews || []).map(item => ({ title: item.reviewNumber, detail: `${item.score}% - ${item.status}` })),
    ...(data.profile.shiftRequests || []).map(item => ({ title: item.requestNumber, detail: `${item.role} - ${item.status}` }))
  ];
  $("#workforceAdvancedPanel").innerHTML = [
    row("Onboarding", (data.profile.workforceOnboarding || []).length),
    row("Documents", (data.profile.workforceDocuments || []).length),
    row("Timesheets", (data.profile.timesheets || []).length),
    row("Payroll", (data.profile.payrollApprovals || []).length),
    row("Reviews", (data.profile.performanceReviews || []).length),
    row("Shift requests", (data.profile.shiftRequests || []).length)
  ].join("");
  $("#workforceAdvancedList").innerHTML = workforceOps.length
    ? workforceOps.slice(0, 10).map(item => `<div><strong>${item.title}</strong><span>${item.detail}</span></div>`).join("")
    : "<div>No advanced workforce operations have been run yet.</div>";

  renderProviderEvidence("#workforceIntegrationPanel", "Workforce", "No workforce provider evidence yet. Build profile, schedule interview, assign mentor, start a shift, or test workforce engines.");
  renderEnginePanel("#workforceEnginePanel", "Workforce");
  renderAiEvidence("#workforceAiPanel", "Workforce", "No workforce AI coaching yet. Ask the coach to review readiness gaps or prep the interview.");

  $("#roleGrid").innerHTML = data.roles.map(role => {
    const gate = roleGate(role);
    const missingCourses = gate.missingCertificates.map(id => data.courses.find(course => course.id === id)?.title || id).join(", ");
    return `
    <article class="role-card ${gate.eligible ? "role-ready" : "role-locked"}" data-role-card="${role.id}">
      <div class="tag-row"><span>${role.level}</span><span>${role.country}</span><span>${money(role.rate || 0)}/shift</span></div>
      <h3>${role.title}</h3>
      <p>${role.description || `${role.level} role in ${role.country}.`}</p>
      ${row("Readiness gate", `${data.profile.readiness}% / ${role.minReadiness}%`)}
      ${row("Certificates", missingCourses || "Met")}
      ${row("Status", gate.eligible ? "Ready to apply" : "Locked")}
      <button class="primary apply" data-role="${role.id}">${gate.eligible ? "Apply now" : "Review gaps"}</button>
    </article>
  `}).join("");

  renderWorkspace("#workforceWorkspace", [
    {
      eyebrow: "Talent queue",
      metric: data.profile.candidateStage,
      title: "Placement Desk",
      summary: "A coordinator can see exactly what is blocking or moving the candidate toward paid work.",
      items: [
        taskItem("Profile verification", (data.profile.workforceBadges || []).includes("Profile Verified") ? "Candidate profile verified against learning record" : "Verify profile to unlock placement steps", (data.profile.workforceBadges || []).includes("Profile Verified") ? "ready" : "pending", (data.profile.workforceBadges || []).includes("Profile Verified") ? "Done" : "Open", { workflow: "workforce", action: "build-profile" }),
        taskItem("Application pipeline", `${(data.profile.applications || []).length} submitted application(s)`, (data.profile.applications || []).length ? "ready" : "pending", "Apply", { workflow: "workforce", action: "apply-role", roleId: firstEligibleRole()?.id }),
        taskItem("Interview", `${data.profile.interviews || 0} interview(s) scheduled`, data.profile.interviews ? "ready" : "pending", "Calendar", { workflow: "workforce", action: "interview" }),
        taskItem("Shift schedule", `${(data.profile.shiftSchedule || []).length} shift(s), ${money(data.profile.earnings || 0)} earnings`, (data.profile.shiftSchedule || []).length ? "live" : "pending", "Shift", { workflow: "workforce", action: "shift" })
      ]
    },
    {
      eyebrow: "Role matching",
      metric: `${data.roles.length} role(s)`,
      title: "Readiness Gates",
      summary: "Roles show required readiness and certificates, so the path from training to work is visible.",
      items: data.roles.slice(0, 4).map(role => {
        const gate = roleGate(role);
        const missing = gate.missingReadiness ? `${gate.missingReadiness}% readiness gap` : "Readiness met";
        return taskItem(role.title, `${role.country} - ${missing}`, gate.eligible ? "ready" : "blocked", gate.eligible ? "Apply" : "Review", { workflow: "workforce", action: "apply-role", roleId: role.id });
      })
    },
    {
      eyebrow: "Operations",
      metric: data.profile.mentor,
      title: "Support & Handoff",
      summary: "Mentor, calendar, notification, and HRIS events show workforce support is more than a card click.",
      items: [
        taskItem("Mentor", data.profile.mentor === "Assigned" ? "Mentor matched for readiness coaching" : "Assign mentor for role fit", data.profile.mentor === "Assigned" ? "ready" : "pending", data.profile.mentor, { workflow: "workforce", action: "mentor" }),
        taskItem("Next shift", data.profile.nextShift || "No shift scheduled", data.profile.nextShift ? "live" : "pending", "Schedule", { workflow: "workforce", action: "shift" }),
        taskItem("HRIS sync", integrationActionComplete("application.submitted") || integrationActionComplete("mentor.assigned") ? "Workforce provider event recorded" : "Submit application or mentor assignment", integrationActionComplete("application.submitted") ? "ready" : "pending", "HRIS", { module: "Workforce" }),
        taskItem("Notifications", integrationActionComplete("notification.sent") ? "Interview notification recorded" : "Schedule interview to send notification", integrationActionComplete("notification.sent") ? "ready" : "pending", "Notify", { workflow: "workforce", action: "interview" })
      ]
    }
  ]);

  const intakes = data.profile.healthIntakes || [];
  const carePlans = data.profile.carePlans || [];
  const safetyReviews = data.profile.safetyReviews || [];
  const telehealthAccess = data.profile.telehealthAccessibility || [];
  const telehealthConsents = data.profile.telehealthConsents || [];
  const telehealthVitals = data.profile.telehealthVitals || [];
  const telehealthReferrals = data.profile.telehealthReferrals || [];
  const telehealthFollowUps = data.profile.telehealthFollowUps || [];
  const advancedHealthOps = [
    ...(data.profile.telehealthAppointments || []).map(item => ({ title: item.appointmentNumber, detail: `${item.patientRef} - ${item.status} - ${item.modality}` })),
    ...(data.profile.telehealthProviderAssignments || []).map(item => ({ title: item.assignmentNumber, detail: `${item.patientRef} - ${item.providerName} - ${item.status}` })),
    ...(data.profile.patientHistoryRecords || []).map(item => ({ title: item.historyNumber, detail: `${item.patientRef} - ${item.status} - ${item.conditions}` })),
    ...(data.profile.telehealthPrescriptionPackets || []).map(item => ({ title: item.packetNumber, detail: `${item.patientRef} - ${item.status}` })),
    ...(data.profile.telehealthEmergencyEscalations || []).map(item => ({ title: item.escalationNumber, detail: `${item.patientRef} - ${item.status} - ${item.destination}` })),
    ...(data.profile.careTeamNotes || []).map(item => ({ title: item.noteNumber, detail: `${item.patientRef} - ${item.status}` })),
    ...(data.profile.telehealthOutcomeReviews || []).map(item => ({ title: item.outcomeNumber, detail: `${item.patientRef} - ${item.status} - ${item.nextStep}` }))
  ];
  const activeIntake = intakes[0];
  $("#healthQueue").textContent = country.queue;
  $("#healthPanel").innerHTML = [
    row("Country", country.name),
    row("Patient ref", activeIntake?.patientRef || "No active intake"),
    row("Patient", activeIntake?.patientName || "No active intake"),
    row("Need", activeIntake?.needSummary || "Start an intake to open a case"),
    row("Accessibility", activeIntake?.accessibilityNeeds || "Not recorded yet"),
    row("Contact", activeIntake?.contactMethod || "Not recorded yet"),
    row("Risk", activeIntake?.riskLevel || country.risk),
    row("Representative", activeIntake?.representativeStatus || "Not connected"),
    row("Heat index", `${country.heat} C`)
  ].join("");

  $("#intakeList").innerHTML = intakes.length
    ? intakes.map(item => `<div><strong>${item.patientRef} - ${item.patientName || "Patient"}</strong><span>${item.riskLevel} - ${item.queueStatus} - ${item.contactMethod || "contact pending"}</span></div>`).join("")
    : "<div>No patient intakes yet.</div>";

  $("#intakeSimulationPanel").innerHTML = [
    row("Scenario", `${country.name} accessible telehealth intake`),
    row("Language", voiceLanguageName()),
    row("Patient", activeIntake?.patientName || "Amina Community Patient"),
    row("Support", "captions, audio guide, caregiver handoff"),
    row("Evidence created", `${telehealthConsents.length} consent, ${telehealthVitals.length} vitals, ${telehealthFollowUps.length} follow-up`)
  ].join("");

  $("#carePlanList").innerHTML = carePlans.length
    ? carePlans.map(plan => `<div><strong>${plan.patientRef}</strong><span>${plan.status} - ${plan.provider}</span></div>`).join("")
    : "<div>No care plans generated yet.</div>";

  $("#safetyReviewList").innerHTML = safetyReviews.length
    ? safetyReviews.map(review => `<div><strong>${data.countries.find(item => item.id === review.countryId)?.name || review.countryId}</strong><span>${review.riskLevel} risk - ${review.dataQuality}% data quality</span></div>`).join("")
    : "<div>No safety reviews run yet.</div>";

  $("#healthAiPanel").innerHTML = [
    row("Risk", country.risk),
    row("Safety override", `${country.safety}%`),
    row("Data quality", `${country.quality}%`),
    row("Representative connections", data.profile.representativeConnections || 0),
    row("Latest AI", data.profile.aiActivity)
  ].join("");

  const healthAccessProfile = data.profile.accessibilityProfile || {};
  $("#telehealthAccessPanel").innerHTML = [
    row("Active access case", telehealthAccess[0]?.patientRef || activeIntake?.patientRef || "No active intake"),
    row("Hearing support", healthAccessProfile.hearingSupport ? "Caption relay and transcript" : "Not configured"),
    row("Vision support", healthAccessProfile.visualSupport ? "Audio description and large-print summary" : "Not configured"),
    row("Rural fallback", healthAccessProfile.bandwidth === "low" ? "SMS, callback, and offline packet" : "Standard data session"),
    row("Consent", telehealthConsents[0]?.status || "Not recorded"),
    row("Vitals", telehealthVitals[0] ? `${telehealthVitals[0].triageLevel} triage` : "Not captured"),
    row("Referral", telehealthReferrals[0]?.status || "Not sent"),
    row("Follow-up", telehealthFollowUps[0]?.scheduleWindow || "Not scheduled"),
    row("Last action", telehealthAccess[0]?.title || "No accessibility session yet")
  ].join("");

  $("#healthAccessibilityList").innerHTML = telehealthAccess.length
    ? telehealthAccess.map(item => `<div><strong>${item.title}</strong><span>${item.patientRef} - ${(item.supports || []).join(", ")}</span></div>`).join("")
    : "<div>No telehealth accessibility notes recorded yet.</div>";

  $("#healthAdvancedPanel").innerHTML = [
    row("Appointments", (data.profile.telehealthAppointments || []).length),
    row("Providers", (data.profile.telehealthProviderAssignments || []).length),
    row("History records", (data.profile.patientHistoryRecords || []).length),
    row("Care packets", (data.profile.telehealthPrescriptionPackets || []).length),
    row("Escalations", (data.profile.telehealthEmergencyEscalations || []).length),
    row("Care notes", (data.profile.careTeamNotes || []).length),
    row("Outcome reviews", (data.profile.telehealthOutcomeReviews || []).length)
  ].join("");
  $("#healthAdvancedList").innerHTML = advancedHealthOps.length
    ? advancedHealthOps.slice(0, 12).map(item => `<div><strong>${item.title}</strong><span>${item.detail}</span></div>`).join("")
    : "<div>No advanced telehealth operations have been run yet.</div>";

  renderProviderEvidence("#healthIntegrationPanel", "Healthcare", "No telehealth provider evidence yet. Start intake, connect a representative, run safety review, generate care plan, or test healthcare engines.");
  renderEnginePanel("#healthEnginePanel", "Healthcare");

  renderWorkspace("#healthWorkspace", [
    {
      eyebrow: "Care queue",
      metric: country.queue,
      title: "Patient Access Desk",
      summary: "The health module behaves like a supervised intake queue with escalation and care-plan outcomes.",
      items: [
        taskItem("Active intake", activeIntake?.patientRef || "No active intake", activeIntake ? "live" : "pending", activeIntake?.riskLevel || "Open", { workflow: "health", action: "intake" }),
        taskItem("Representative", activeIntake?.representativeStatus || "Not connected", activeIntake?.representativeStatus === "Connected" ? "ready" : "pending", "Human", { workflow: "health", action: "representative" }),
        taskItem("Safety review", safetyReviews[0]?.recommendation || "Run a safety review before autonomous guidance", safetyReviews.length ? "ready" : "pending", safetyReviews.length ? "Done" : "Review", { workflow: "health", action: "safety" }),
        taskItem("Care plan", carePlans[0]?.text || "Generate a care plan from the active intake", carePlans.length ? "live" : "pending", carePlans[0]?.provider || "AI", { workflow: "health", action: "careplan" })
      ]
    },
    {
      eyebrow: "Clinical evidence",
      metric: `${intakes.length} intake(s)`,
      title: "Case Records",
      summary: "Intakes, safety reviews, and care plans create auditable records for the reviewer.",
      items: [
        taskItem("Telehealth provider", integrationActionComplete("intake.created") ? "Intake provider event recorded" : "Start an intake to record provider event", integrationActionComplete("intake.created") ? "ready" : "pending", "Telehealth", { workflow: "health", action: "intake" }),
        taskItem("Notification provider", integrationActionComplete("representative.connected") ? "Representative notification recorded" : "Connect representative to record event", integrationActionComplete("representative.connected") ? "ready" : "pending", "Notify", { workflow: "health", action: "representative" }),
        taskItem("EHR provider", integrationActionComplete("care_plan.synced") || integrationActionComplete("safety.review") ? "Care or safety event synced" : "Run safety or care plan", integrationActionComplete("care_plan.synced") ? "ready" : "pending", "EHR", { workflow: "health", action: "careplan" }),
        taskItem("Consent + vitals", telehealthConsents.length && telehealthVitals.length ? "Consent and triage vitals captured" : "Record consent and capture vitals", telehealthConsents.length && telehealthVitals.length ? "ready" : "pending", "Clinical", { workflow: "health", action: telehealthConsents.length ? "vitals" : "consent" }),
        taskItem("Referral + follow-up", telehealthReferrals.length && telehealthFollowUps.length ? "Referral sent and callback scheduled" : "Create referral and schedule follow-up", telehealthReferrals.length && telehealthFollowUps.length ? "ready" : "pending", "Continuity", { workflow: "health", action: telehealthReferrals.length ? "followup" : "referral" }),
        taskItem("AI oversight", data.profile.aiActivity || "No AI guidance yet", data.profile.aiActivity ? "live" : "pending", data.profile.aiProvider || "Fallback", { workflow: "ai", action: "careplan" })
      ]
    },
    {
      eyebrow: "Region",
      metric: country.risk,
      title: "Public Health Context",
      summary: "Country heat, queue, safety, and facility load remain visible while care work is active.",
      items: [
        taskItem("Heat index", `${country.heat} C`, country.heat >= 38 ? "blocked" : "ready", "Heat", { workflow: "health", action: "safety" }),
        taskItem("Facilities", `${country.facilities} active facilities`, "ready", "Network", { mapAction: "focus" }),
        taskItem("Patients", `${country.patients.toLocaleString()} patient records`, "live", "Volume", { workflow: "health", action: "intake" }),
        taskItem("Data quality", `${country.quality}% quality, ${country.safety}% safety override`, "ready", "Governed", { workflow: "health", action: "safety" })
      ]
    }
  ]);

  $("#walletPanel").innerHTML = [
    row("Balance", money(data.profile.wallet)),
    row("Transactions", data.profile.walletTransactions.length),
    row("Last transaction", data.profile.walletTransactions[0]?.provider || "None")
  ].join("");

  $("#walletLedger").innerHTML = data.profile.walletTransactions.length
    ? data.profile.walletTransactions.map(tx => `<div><strong>${tx.provider}</strong><span>${tx.type || "credit"} ${money(tx.amount)} - ${tx.status || "posted"}</span></div>`).join("")
    : "<div>No wallet transactions yet.</div>";

  const latestOrder = data.profile.orders[data.profile.orders.length - 1];
  $("#tradeOrderCount").textContent = data.profile.orders.length;
  $("#productGrid").innerHTML = (data.products || []).map(product => {
    const productCountry = data.countries.find(item => item.id === product.countryId);
    return `
      <article class="product-card" data-product-card="${product.id}">
        <div class="tag-row"><span>${product.category}</span><span>${productCountry?.name || "Regional"}</span></div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        ${row("Price", `${money(product.price)} / ${product.unit}`)}
        ${row("Buyer interest", `${product.buyerInterest}%`)}
        ${row("Quality", product.quality)}
        <button class="primary order" data-product-id="${product.id}">Create order</button>
      </article>
    `;
  }).join("");

  $("#logisticsPanel").innerHTML = [
    row("Orders", data.profile.orders.length),
    row("Route", route.name),
    row("Stage", latestOrder?.stage || data.profile.routeStage),
    row("Checkpoint", latestOrder?.checkpoint || data.profile.activeCheckpoint),
    row("Latest order", latestOrder?.orderNumber || "None")
  ].join("");

  $("#orderTimeline").innerHTML = latestOrder?.timeline?.length
    ? latestOrder.timeline.map(item => `<div><strong>${item.label}</strong><span>${item.checkpoint}</span></div>`).join("")
    : "<div>Create an order to start the logistics timeline.</div>";

  $("#orderBook").innerHTML = data.profile.orders.length
    ? data.profile.orders.slice().reverse().map(order => `<div><strong>${order.orderNumber || order.id}</strong><span>${order.product} - ${order.stage} - ${money(order.total || 0)}</span></div>`).join("")
    : "<div>No trade orders yet.</div>";

  $("#tradeEvents").innerHTML = (data.profile.tradeEvents || []).length
    ? data.profile.tradeEvents.map(event => `<div><strong>${event.type}</strong><span>${event.label}</span></div>`).join("")
    : "<div>No trade events yet.</div>";
  const tradeOps = [
    ...(data.profile.tradeQuotes || []).map(item => ({ title: item.quoteNumber, detail: `${item.productName} - ${item.status} - ${money(item.price || 0)}` })),
    ...(data.profile.qualityInspections || []).map(item => ({ title: item.inspectionNumber, detail: `${item.productName} - ${item.grade} - ${item.status}` })),
    ...(data.profile.coldChainChecks || []).map(item => ({ title: item.checkNumber, detail: `${item.productName} - ${item.temperatureC} C - ${item.status}` })),
    ...(data.profile.exportReadiness || []).map(item => ({ title: item.exportNumber, detail: `${item.productName} - ${item.status}` })),
    ...(data.profile.contractPackets || []).map(item => ({ title: item.contractNumber, detail: `${item.productName} - ${item.status}` })),
    ...(data.profile.paymentReleases || []).map(item => ({ title: item.releaseNumber, detail: `${money(item.amount || 0)} - ${item.status}` }))
  ];
  $("#tradeAdvancedPanel").innerHTML = [
    row("Quotes", (data.profile.tradeQuotes || []).length),
    row("Quality inspections", (data.profile.qualityInspections || []).length),
    row("Cold-chain checks", (data.profile.coldChainChecks || []).length),
    row("Export packets", (data.profile.exportReadiness || []).length),
    row("Contracts", (data.profile.contractPackets || []).length),
    row("Payment releases", (data.profile.paymentReleases || []).length)
  ].join("");
  $("#tradeAdvancedList").innerHTML = tradeOps.length
    ? tradeOps.slice(0, 10).map(item => `<div><strong>${item.title}</strong><span>${item.detail}</span></div>`).join("")
    : "<div>No advanced trade operations have been run yet.</div>";
  const droneMissions = data.profile.droneMissions || [];
  const droneScans = data.profile.droneScans || [];
  const droneFindings = data.profile.droneFindings || [];
  const fieldInterventions = data.profile.fieldInterventions || [];
  const advancedDroneOps = [
    ...(data.profile.droneFieldReports || []).map(item => ({ title: item.reportRef, detail: `${item.productName} - ${item.cropHealthScore}% health - ${item.status}` })),
    ...(data.profile.droneIrrigationPlans || []).map(item => ({ title: item.planRef, detail: `${item.productName} - ${item.waterRecommendation}` })),
    ...(data.profile.dronePestAlerts || []).map(item => ({ title: item.alertRef, detail: `${item.productName} - ${item.riskLevel} - ${item.status}` })),
    ...(data.profile.droneSprayPlans || []).map(item => ({ title: item.sprayRef, detail: `${item.productName} - ${item.status}` })),
    ...(data.profile.droneYieldForecasts || []).map(item => ({ title: item.forecastRef, detail: `${item.productName} - ${item.estimate} - ${item.buyerReadiness}` })),
    ...(data.profile.droneComplianceAudits || []).map(item => ({ title: item.auditRef, detail: `${item.productName} - ${item.status}` }))
  ];
  const latestDroneMission = droneMissions[0];
  const latestDroneScan = droneScans[0];
  const latestFieldIntervention = fieldInterventions[0];
  $("#dronePanel").innerHTML = [
    row("Latest mission", latestDroneMission?.missionRef || "No flight plan yet"),
    row("Latest scan", latestDroneScan?.scanRef || "No drone scan yet"),
    row("Crop health", latestDroneScan ? `${latestDroneScan.cropHealthScore}%` : "Awaiting scan"),
    row("Stress alert", latestDroneScan?.stressAlert || "Awaiting scan"),
    row("Yield estimate", latestDroneScan?.yieldEstimate || "Awaiting scan"),
    row("Field reports", (data.profile.droneFieldReports || []).length),
    row("Irrigation plans", (data.profile.droneIrrigationPlans || []).length),
    row("Pest alerts", (data.profile.dronePestAlerts || []).length),
    row("Yield forecasts", (data.profile.droneYieldForecasts || []).length),
    row("Compliance audits", (data.profile.droneComplianceAudits || []).length),
    row("Compliance", latestDroneMission ? latestDroneMission.complianceChecks.join(", ") : "Awaiting flight plan"),
    row("Field task", latestFieldIntervention?.taskRef || "No intervention assigned"),
    row("Provider", data.providers.find(item => item.id === "field-drones")?.status || "sandbox")
  ].join("");
  $("#droneMissionList").innerHTML = droneMissions.length
    ? droneMissions.map(mission => `<div><strong>${mission.missionRef} - ${mission.productName}</strong><span>${mission.status} - ${mission.flightWindow} - ${mission.objective}</span></div>`).join("")
    : "<div>No drone missions planned yet.</div>";
  $("#droneScanList").innerHTML = droneScans.length
    ? droneScans.map(scan => {
      const finding = droneFindings.find(item => item.scanId === scan.id);
      return `<div><strong>${scan.scanRef} - ${scan.productName}</strong><span>${scan.cropHealthScore}% health - ${scan.stressAlert} - ${finding?.severity || "watch"} - ${scan.recommendation}</span></div>`;
    }).join("")
    : "<div>No drone scans yet.</div>";
  $("#fieldInterventionList").innerHTML = fieldInterventions.length
    ? fieldInterventions.map(task => `<div><strong>${task.taskRef} - ${task.productName}</strong><span>${task.priority} - ${task.status} - ${(task.actions || []).join(", ")}</span></div>`).join("")
    : "<div>No field interventions assigned yet.</div>";
  $("#advancedDroneList").innerHTML = advancedDroneOps.length
    ? advancedDroneOps.slice(0, 12).map(item => `<div><strong>${item.title}</strong><span>${item.detail}</span></div>`).join("")
    : "<div>No advanced drone operations have been run yet.</div>";
  renderAiEvidence("#tradeAiPanel", "AgriTrade", "No trade advisor guidance yet. Ask the advisor to review pricing, route, buyer, and wallet context.");
  renderAiEvidence("#tradeAiEvidence", "AgriTrade", "No trade AI evidence yet. Run price AI or trade advisor.");

  renderWorkspace("#tradeWorkspace", [
    {
      eyebrow: "Order desk",
      metric: `${data.profile.orders.length} active`,
      title: "Market Operations Queue",
      summary: "The trade module shows order creation, payment, logistics, and buyer-market activity together.",
      items: [
        taskItem("Latest order", latestOrder ? `${latestOrder.orderNumber} for ${latestOrder.product}` : "No order created yet", latestOrder ? "live" : "pending", latestOrder?.stage || "Create", { workflow: "trade", action: latestOrder ? "advance" : "order", productId: firstProduct()?.id }),
        taskItem("Route stage", latestOrder ? `${latestOrder.stage} at ${latestOrder.checkpoint}` : data.profile.routeStage, latestOrder ? "ready" : "pending", "Logistics", { workflow: "trade", action: "advance" }),
        taskItem("Wallet balance", `${money(data.profile.wallet || 0)} across ${data.profile.walletTransactions.length} transaction(s)`, data.profile.walletTransactions.length ? "ready" : "pending", "Wallet", { workflow: "trade", action: "wallet" }),
        taskItem("Buyer market", `${data.products.length} product lots available`, "live", "Market", { workflow: "trade", action: "order", productId: firstProduct()?.id })
      ]
    },
    {
      eyebrow: "Logistics",
      metric: route.name,
      title: "Shipment Lane",
      summary: "Orders move checkpoint by checkpoint, and the map context follows the active route.",
      items: [
        taskItem("Current checkpoint", latestOrder?.checkpoint || data.profile.activeCheckpoint, "live", data.profile.routeStage, { mapAction: "focus" }),
        taskItem("Timeline", latestOrder?.timeline?.[0]?.label || "No timeline yet", latestOrder ? "ready" : "pending", latestOrder ? `${latestOrder.timeline.length} event(s)` : "None", { workflow: "trade", action: "advance" }),
        taskItem("Logistics provider", integrationActionComplete("checkpoint.updated") ? "Checkpoint provider event recorded" : "Advance an order to record logistics", integrationActionComplete("checkpoint.updated") ? "ready" : "pending", "Provider", { workflow: "trade", action: "advance" }),
        taskItem("Route AI", aiRunComplete("route") ? "Route risk analysis recorded" : "Run route AI for shipment risk", aiRunComplete("route") ? "ready" : "pending", "AI", { workflow: "ai", action: "route" })
      ]
    },
    {
      eyebrow: "Commercial",
      metric: `${data.products.length} lots`,
      title: "Product & Payment Evidence",
      summary: "Products, wallet transactions, and provider events make the trading workflow reviewable.",
      items: [
        taskItem("Market provider", integrationActionComplete("order.created") ? "Order creation event recorded" : "Create order to record market event", integrationActionComplete("order.created") ? "ready" : "pending", "Market", { workflow: "trade", action: "order", productId: firstProduct()?.id }),
        taskItem("Payment provider", integrationActionComplete("wallet.transaction") ? "Wallet provider event recorded" : "Post wallet payment", integrationActionComplete("wallet.transaction") ? "ready" : "pending", "Payment", { workflow: "trade", action: "wallet" }),
        taskItem("Price AI", aiRunComplete("price") ? "Price analysis recorded" : "Run price AI", aiRunComplete("price") ? "ready" : "pending", "AI", { workflow: "ai", action: "price" }),
        taskItem("Trade events", (data.profile.tradeEvents || [])[0]?.label || "No trade events yet", (data.profile.tradeEvents || []).length ? "live" : "pending", "Ledger", { workflow: "trade", action: "advance" }),
        taskItem("Drone mission", latestDroneMission ? `${latestDroneMission.productName}: ${latestDroneMission.status}` : "Plan a compliant drone mission", latestDroneMission ? "ready" : "pending", "Flight", { workflow: "trade", action: "drone-plan", productId: firstProduct()?.id }),
        taskItem("Drone intelligence", latestDroneScan ? `${latestDroneScan.productName}: ${latestDroneScan.cropHealthScore}% health` : "Run drone scan for field evidence", latestDroneScan ? "live" : "pending", "Drone", { workflow: "trade", action: "drone", productId: firstProduct()?.id }),
        taskItem("Field intervention", latestFieldIntervention ? `${latestFieldIntervention.productName}: ${latestFieldIntervention.priority}` : "Assign field task from drone evidence", latestFieldIntervention ? "ready" : "pending", "Task", { workflow: "trade", action: "drone-intervention", productId: firstProduct()?.id })
      ]
    }
  ]);

  $("#mapPanel").innerHTML = [
    row("Country", country.name),
    row("Route", route.name),
    row("Checkpoint", data.profile.activeCheckpoint),
    row("Risk", country.risk),
    row("Queue", country.queue),
    row("Route stage", data.profile.routeStage)
  ].join("");

  const openAiProvider = data.providers.find(item => item.id === "openai") || {};
  const mapsProvider = data.providers.find(item => item.id === "maps") || {};
  const latestRun = (data.profile.aiRuns || [])[0];
  $("#aiStatus").innerHTML = [
    `<span>${openAiProvider.mode || "fallback"}</span>`,
    `<small>${latestRun ? latestRun.type : "Standing by"}</small>`
  ].join("");
  $("#layerStatus").innerHTML = [
    row("Tile provider", mapsProvider.status || "ready"),
    row("Routes", data.routes.length),
    row("Facilities", country.facilities),
    row("Country markers", data.countries.length),
    row("AI provider", openAiProvider.mode || data.profile.aiProvider || "fallback")
  ].join("");
  $("#routeIntel").innerHTML = (data.profile.mapInsights || []).length
    ? data.profile.mapInsights.map(item => `<div><strong>${item.label}</strong><span>${item.checkpoint} - ${item.detail}</span></div>`).join("")
    : `<div><strong>${route.name}</strong><span>${route.checkpoints.length} checkpoints ready for AI inspection.</span></div>`;
  $("#aiRunHistory").innerHTML = (data.profile.aiRuns || []).length
    ? data.profile.aiRuns.map(run => `<div><strong>${run.type} - ${run.countryName}</strong><span>${run.provider}${run.model ? ` (${run.model})` : ""} - ${run.checkpoint}</span></div>`).join("")
    : "<div>No AI runs yet. Use the command center or route tools to generate one.</div>";
  const advancedMapOps = [
    ...(data.profile.farmerLocations || []).map(item => ({ title: item.locationNumber, detail: `${item.farmerName} - ${item.status}` })),
    ...(data.profile.fieldZones || []).map(item => ({ title: item.zoneNumber, detail: `${item.zoneName} - ${item.status}` })),
    ...(data.profile.facilityRoutes || []).map(item => ({ title: item.routeNumber, detail: `${item.origin} to ${item.destination} - ${item.status}` })),
    ...(data.profile.routeDisruptions || []).map(item => ({ title: item.disruptionNumber, detail: `${item.checkpoint} - ${item.severity} - ${item.status}` })),
    ...(data.profile.mapRiskLayers || []).map(item => ({ title: item.layerNumber, detail: `${item.score} risk score - ${item.status}` })),
    ...(data.profile.mapEvidencePackets || []).map(item => ({ title: item.packetNumber, detail: `${item.status} - ${(item.evidence || []).join(", ")}` }))
  ];
  $("#mapAdvancedPanel").innerHTML = [
    row("Farmer locations", (data.profile.farmerLocations || []).length),
    row("Field zones", (data.profile.fieldZones || []).length),
    row("Facility routes", (data.profile.facilityRoutes || []).length),
    row("Disruptions", (data.profile.routeDisruptions || []).length),
    row("Risk layers", (data.profile.mapRiskLayers || []).length),
    row("Evidence packets", (data.profile.mapEvidencePackets || []).length)
  ].join("");
  $("#mapAdvancedList").innerHTML = advancedMapOps.length
    ? advancedMapOps.slice(0, 10).map(item => `<div><strong>${translateText(item.title)}</strong><span>${translateText(item.detail)}</span></div>`).join("")
    : `<div>${translateText("No advanced map operations have been run yet.")}</div>`;

  $("#mapQuickActions").innerHTML = [
    `<button class="primary" type="button" data-map-action="command"><strong>${translateText("Run operations desk")}</strong><span>${translateText("Create command-center AI evidence for the active country and checkpoint.")}</span></button>`,
    `<button type="button" data-map-action="inspector"><strong>${translateText("Run intelligence inspection")}</strong><span>${translateText("Inspect route movement, provider state, and field risk.")}</span></button>`,
    `<button type="button" data-map-action="route"><strong>${translateText("Create geospatial evidence")}</strong><span>${translateText("Assess route risk and write map intelligence evidence.")}</span></button>`
  ].join("");

  renderWorkspace("#mapWorkspace", [
    {
      eyebrow: "Command map",
      metric: route.name,
      title: "Route Operations Desk",
      summary: "The map is tied to health, logistics, country context, and AI recommendations.",
      items: [
        taskItem("Active country", `${country.name}: ${country.queue}`, "live", country.risk, { mapAction: "focus" }),
        taskItem("Active route", `${route.name} with ${route.checkpoints.length} checkpoint(s)`, "ready", data.profile.routeStage, { workflow: "ai", action: "route" }),
        taskItem("Current checkpoint", data.profile.activeCheckpoint, "live", "Focused", { mapAction: "focus" }),
        taskItem("Facilities layer", `${country.facilities} facilities near the active country`, "ready", "Layer", { mapAction: "focus" }),
        `<button class="primary workspace-action" type="button" data-map-action="command">${translateText("Run operations desk")}</button>`
      ]
    },
    {
      eyebrow: "AI desk",
      metric: openAiProvider.mode || "fallback",
      title: "Intelligence Runs",
      summary: "AI runs produce map insights and a visible audit trail instead of a static map screen.",
      items: [
        taskItem("Command analysis", aiRunComplete("command") ? "Command center run recorded" : "Run command center", aiRunComplete("command") ? "ready" : "pending", "Command", { workflow: "ai", action: "command" }),
        taskItem("Inspector analysis", aiRunComplete("inspector") ? "Route inspection recorded" : "Run route inspector", aiRunComplete("inspector") ? "ready" : "pending", "Inspect", { workflow: "ai", action: "inspector" }),
        taskItem("Route risk", aiRunComplete("route") ? "Route risk recorded" : "Assess route risk", aiRunComplete("route") ? "ready" : "pending", "Risk", { workflow: "ai", action: "route" }),
        taskItem("Latest insight", (data.profile.mapInsights || [])[0]?.detail || "No insight yet", (data.profile.mapInsights || []).length ? "live" : "pending", "Insight", { workflow: "ai", action: "inspector" }),
        `<button class="primary workspace-action" type="button" data-map-action="inspector">${translateText("Run intelligence inspection")}</button>`,
        `<button class="workspace-action" type="button" data-map-action="route">${translateText("Create geospatial evidence")}</button>`
      ]
    },
    {
      eyebrow: "Layers",
      metric: `${data.countries.length} countries`,
      title: "Geospatial Evidence",
      summary: "Country markers, facilities, routes, and provider status give the map operational context.",
      items: [
        taskItem("Tile provider", mapsProvider.detail || mapsProvider.status || "Ready", mapsProvider.status === "needs-credentials" ? "blocked" : "ready", mapsProvider.status || "Ready", { providerId: "maps" }),
        taskItem("Country markers", `${data.countries.length} country markers available`, "ready", "Markers", { mapAction: "focus" }),
        taskItem("Route lines", `${data.routes.length} route corridor(s) available`, "ready", "Routes", { workflow: "ai", action: "route" }),
        taskItem("AI provider", openAiProvider.detail || data.profile.aiProvider || "Fallback simulation", openAiProvider.status === "needs-credentials" ? "blocked" : "ready", openAiProvider.mode || "AI", { providerId: "openai" }),
        `<button class="primary workspace-action" type="button" data-map-action="focus">${translateText("Focus map context")}</button>`,
        `<button class="workspace-action" type="button" data-map-action="route">${translateText("Assess route risk")}</button>`
      ]
    }
  ]);

  $("#integrationCount").textContent = data.providers.length;
  $("#providerGrid").innerHTML = data.providers.map(provider => `
    <article class="provider-card ${provider.status === "connected" ? "provider-connected" : provider.status === "needs-credentials" ? "provider-needs" : "provider-ready"}">
      <div class="tag-row"><span>${provider.module}</span><span>${provider.mode}</span></div>
      <h3>${provider.name}</h3>
      <p>${provider.detail}</p>
      ${row("Status", provider.status)}
      <button class="primary provider-test" data-provider="${provider.id}">Test provider</button>
    </article>
  `).join("");
  const readiness = data.admin?.readiness || { checks: [], nextSteps: [], readyCount: 0, total: 0, status: "unknown", moduleReadiness: [] };
  $("#moduleActivation").innerHTML = (readiness.moduleReadiness || []).map(module => `
    <div><strong>${module.module}</strong><span>${module.status} - ${module.readyCount}/${module.total} live check(s)</span></div>
  `).join("");
  $("#liveChecklist").innerHTML = readiness.checks.length
    ? readiness.checks.map(check => `<div><strong>${check.module}: ${check.label}</strong><span>${check.ready ? "Ready" : check.detail}</span></div>`).join("")
    : "<div>No live checks are registered.</div>";

  $("#integrationEvents").innerHTML = (data.profile.integrationEvents || []).length
    ? data.profile.integrationEvents.map(event => `<div><strong>${event.providerName}</strong><span>${event.action} - ${event.status}</span></div>`).join("")
    : "<div>No integration events yet. Run a workflow or test a provider.</div>";

  $("#environmentPanel").innerHTML = [
    row("Persistence", data.providers.find(item => item.id === "database")?.mode || "unknown"),
    row("OpenAI", data.providers.find(item => item.id === "openai")?.mode || "unknown"),
    row("Workforce providers", data.providers.filter(item => item.module === "Workforce").length),
    row("Healthcare providers", data.providers.filter(item => item.module === "Healthcare").length),
    row("Last event", (data.profile.integrationEvents || [])[0]?.action || "None")
  ].join("");

  renderWorkspace("#integrationWorkspace", [
    {
      eyebrow: "Provider queue",
      metric: `${data.providers.length} providers`,
      title: "Connection Workbench",
      summary: "Each provider can be tested individually or as a complete workflow engine set.",
      items: [
        taskItem("Connected providers", `${data.providers.filter(provider => provider.status === "connected").length}/${data.providers.length} connected`, "live", "Status", { workflow: "integrations", action: "focus-cards" }),
        taskItem("Needs credentials", `${data.providers.filter(provider => provider.status === "needs-credentials").length} provider(s) need credentials`, data.providers.some(provider => provider.status === "needs-credentials") ? "blocked" : "ready", "Credentials", { workflow: "admin", action: "readiness" }),
        taskItem("Test all", integrationActionComplete("provider.test_all") ? "All-provider test event recorded" : "Run full provider test", integrationActionComplete("provider.test_all") ? "ready" : "pending", "Test", { workflow: "integrations", action: "test-all" }),
        taskItem("Latest event", (data.profile.integrationEvents || [])[0]?.detail || "No integration event yet", (data.profile.integrationEvents || []).length ? "live" : "pending", "Event", { workflow: "integrations", action: "focus-cards" })
      ]
    },
    {
      eyebrow: "Readiness",
      metric: readiness.status,
      title: "Module Activation Desk",
      summary: "Live-readiness checks are grouped by module so reviewers can see what is production-shaped.",
      items: (readiness.moduleReadiness || []).slice(0, 4).map(module => taskItem(module.module, `${module.readyCount}/${module.total} live check(s) ready`, module.readyCount === module.total ? "ready" : "pending", module.status, { module: module.module }))
    },
    {
      eyebrow: "Environment",
      metric: `${readiness.readyCount}/${readiness.total}`,
      title: "Setup Evidence",
      summary: "Preflight status, persistence, AI, and provider modes are visible from one operational view.",
      items: [
        taskItem("Persistence", data.providers.find(item => item.id === "database")?.detail || "Database status unknown", data.providers.find(item => item.id === "database")?.status === "connected" ? "ready" : "pending", "DB", { providerId: "database" }),
        taskItem("AI provider", data.providers.find(item => item.id === "openai")?.detail || "AI provider status unknown", data.providers.find(item => item.id === "openai")?.status === "connected" ? "ready" : "pending", "AI", { providerId: "openai" }),
        taskItem("Next setup", readiness.nextSteps[0] || "Production readiness checks are complete", readiness.nextSteps.length ? "pending" : "ready", readiness.nextSteps.length ? "Todo" : "Done", { workflow: "admin", action: "readiness" }),
        taskItem("Audit depth", `${data.profile.integrationEvents.length} integration event(s) retained`, "live", "Audit", { workflow: "admin", action: "audit" })
      ]
    }
  ]);

  $("#adminUsers").innerHTML = (data.admin?.users || []).map(user => `<div><strong>${user.name}</strong><span>${user.role} - ${user.email}</span></div>`).join("");
  $("#adminSubscribers").innerHTML = (data.admin?.subscribers || []).length
    ? data.admin.subscribers.map(subscriber => `<div><strong>${subscriber.name}</strong><span>${subscriber.status} - ${subscriber.email} - ${subscriber.plan} - ${subscriber.seats} seat(s)</span></div>`).join("")
    : "<div>No pilot subscribers invited yet.</div>";
  $("#adminModules").innerHTML = (data.admin?.modules || []).map(module => `<div><strong>${module.name}</strong><span>${module.status} - ${module.records} record(s)</span></div>`).join("");
  $("#adminAudit").innerHTML = (data.admin?.audit || []).length
    ? data.admin.audit.map(event => `<div><strong>${event.type}</strong><span>${event.detail}</span></div>`).join("")
    : "<div>No audit events yet.</div>";
  const adminAiProvider = data.providers.find(item => item.id === "openai") || {};
  const adminLatestAiRun = (data.profile.aiRuns || [])[0];
  $("#aiConsoleMode").textContent = adminAiProvider.mode || data.profile.aiProvider || "fallback";
  $("#aiConsoleProvider").textContent = adminLatestAiRun?.provider || data.profile.aiProvider || "standing by";
  $("#aiConsolePanel").innerHTML = [
    row("Mode", adminAiProvider.mode || "fallback"),
    row("Status", adminAiProvider.status || "ready"),
    row("Detail", adminAiProvider.detail || "AI provider status unavailable"),
    row("Model", data.profile.aiModel || adminLatestAiRun?.model || "Configured on server"),
    row("Last response ID", data.profile.aiResponseId || adminLatestAiRun?.responseId || "None"),
    row("Last error", data.profile.aiError || adminLatestAiRun?.error || "None")
  ].join("");
  $("#aiConsoleResult").innerHTML = adminLatestAiRun
    ? [
      `<div><strong>${adminLatestAiRun.type} - ${adminLatestAiRun.countryName}</strong><span>${adminLatestAiRun.text}</span></div>`,
      `<div><strong>Provider</strong><span>${adminLatestAiRun.provider}${adminLatestAiRun.model ? ` - ${adminLatestAiRun.model}` : ""}</span></div>`,
      `<div><strong>Checkpoint</strong><span>${adminLatestAiRun.routeName} - ${adminLatestAiRun.checkpoint}</span></div>`
    ].join("")
    : "<div>No AI run yet. Run a test to create AI evidence.</div>";
  renderGovernancePanel();
  renderNotificationPanel();
  renderAgentCenter();
  $("#productionReadiness").innerHTML = [
    row("Status", readiness.status),
    row("Ready checks", `${readiness.readyCount}/${readiness.total}`),
    ...readiness.checks.map(check => row(check.label, check.ready ? "Ready" : "Needs setup"))
  ].join("");
  $("#setupSteps").innerHTML = readiness.nextSteps.length
    ? readiness.nextSteps.map(step => `<div>${step}</div>`).join("")
    : "<div>Production readiness checks are complete.</div>";
  const production = data.production || data.admin?.production || { items: [] };
  $("#productionCompleteness").innerHTML = (production.items || []).map(item => `
    <div>
      <strong>${item.title}</strong>
      <span>${item.ready ? "Ready" : "Needs setup"} - ${item.detail}</span>
    </div>
  `).join("");
  const productionPlan = data.productionPlan || { workstreams: [], readyCount: 0, total: 10, status: "unknown" };
  $("#productionOperationsPlan").innerHTML = (productionPlan.workstreams || []).map(item => `
    <div>
      <strong>${item.title}</strong>
      <span>${item.status} - ${item.evidence}</span>
      ${item.ready ? "" : `<small>${(item.missing || []).slice(0, 2).join(" | ")}</small>`}
    </div>
  `).join("") || "<div>No production operations plan available.</div>";
  const liveChecks = data.profile.liveServiceChecks || [];
  $("#liveServiceCheckPanel").innerHTML = liveChecks.length
    ? liveChecks.slice(0, 2).map(report => `
      <div>
        <strong>${translateText(`Live service check - ${report.status}`)}</strong>
        <span>${translateText(`${report.readyCount}/${report.total} ready - ${new Date(report.createdAt).toLocaleString()}`)}</span>
        ${(report.checks || []).map(check => `<small>${translateText(check.title)}: ${translateText(check.status)}</small>`).join("")}
      </div>
    `).join("")
    : "<div>Run the live service check after Render environment variables are set.</div>";
  const usage = data.admin?.usage || { totalEvents: 0, modules: {}, latest: [] };
  const supportTickets = data.admin?.supportTickets || [];
  $("#adminUsagePanel").innerHTML = [
    `<div><strong>Usage events</strong><span>${usage.totalEvents} tracked action(s)</span></div>`,
    `<div><strong>Support tickets</strong><span>${supportTickets.length} open or historical ticket(s)</span></div>`,
    ...Object.entries(usage.modules || {}).map(([module, count]) => `<div><strong>${module}</strong><span>${count} action(s)</span></div>`).slice(0, 5)
  ].join("");

  renderWorkspace("#adminWorkspace", [
    {
      eyebrow: "Control room",
      metric: readiness.status,
      title: "Operator Queue",
      summary: "Admin work is framed around health checks, module status, audit events, and readiness.",
      items: [
        taskItem("Health check", integrationActionComplete("admin.health_check") ? "Platform health check recorded" : "Run platform health check", integrationActionComplete("admin.health_check") ? "ready" : "pending", "Check", { workflow: "admin", action: "health-check" }),
        taskItem("Production readiness", `${readiness.readyCount}/${readiness.total} checks ready`, readiness.readyCount === readiness.total ? "ready" : "pending", readiness.status, { workflow: "admin", action: "readiness" }),
        taskItem("Audit feed", `${(data.admin?.audit || []).length} audit item(s) visible`, (data.admin?.audit || []).length ? "live" : "pending", "Audit", { workflow: "admin", action: "audit" }),
        taskItem("Users", `${data.admin?.users?.length || 0} platform user(s)`, "ready", "Users", { workflow: "admin", action: "modules" })
      ]
    },
    {
      eyebrow: "Modules",
      metric: `${data.admin?.modules?.length || 0} modules`,
      title: "Module Health Desk",
      summary: "Every core domain reports record counts so empty placeholder modules are easy to spot.",
      items: (data.admin?.modules || []).slice(0, 5).map(module => taskItem(module.name, `${module.records} record(s) in backend state`, module.records ? "ready" : "pending", module.status, { workflow: "integrations", action: "test-module", module: module.name }))
    },
    {
      eyebrow: "Governance",
      metric: `${data.profile.activity.length} activity`,
      title: "Audit & Activity Evidence",
      summary: "Workflow actions leave traces in recent activity, provider events, and admin audit views.",
      items: [
        taskItem("Latest activity", data.profile.activity[0] || "No activity yet", data.profile.activity.length ? "live" : "pending", "Activity", { workflow: "profile", action: "open" }),
        taskItem("Latest integration", (data.profile.integrationEvents || [])[0]?.action || "No integration yet", (data.profile.integrationEvents || []).length ? "live" : "pending", "Provider", { workflow: "integrations", action: "focus-cards" }),
        taskItem("Latest admin audit", (data.admin?.audit || [])[0]?.detail || "No admin audit yet", (data.admin?.audit || []).length ? "live" : "pending", "Admin", { workflow: "admin", action: "audit" }),
        taskItem("Next setup", readiness.nextSteps[0] || "No remaining setup steps", readiness.nextSteps.length ? "pending" : "ready", readiness.nextSteps.length ? "Todo" : "Done", { workflow: "admin", action: "readiness" })
      ]
    }
  ]);

  renderWorkflowBoards(country, route);
  renderLaunchSupportPanels();

  $("#profileGrid").innerHTML = [
    ["Learning", `${data.profile.completedCourses.length} completed, ${data.profile.quizScore} quiz score, ${data.profile.certificates.length} certificate(s), ${data.profile.learningHours || 0} learning hour(s).`],
    ["Workforce", `${data.profile.readiness}% readiness, ${data.profile.eligibility}, ${data.profile.candidateStage}, ${(data.profile.applications || []).length} application(s), ${(data.profile.shiftSchedule || []).length} shift(s).`],
    ["Health", `${country.name}: ${country.queue}, ${country.risk} risk, ${intakes.length} intake(s), ${carePlans.length} care plan(s).`],
    ["Wallet", `${money(data.profile.wallet)} across ${data.profile.walletTransactions.length} transaction(s).`],
    ["Orders", `${data.profile.orders.length} order(s) on ${route.name}.`],
    ["AI", `${data.profile.aiActivity} Provider: ${data.profile.aiProvider || "offline-simulation"}${data.profile.aiModel ? ` (${data.profile.aiModel})` : ""}.`]
  ].map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("");

  applyContentTranslations();
  bindDynamic();
  applyPermissions();
  applyAccessibilityPrefs();
  applyAccessibilityAttributes();
  renderMap();
  const hashSection = sectionFromHash();
  if (hashSection !== currentSectionId()) goSection(hashSection, { updateHash: false, scroll: false });
}

function renderMap() {
  if (!window.L || !data) return;
  const country = activeCountry();
  const route = activeRoute();
  if (!map) {
    map = L.map("mapCanvas").setView([8, 20], 3);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: "OpenStreetMap" }).addTo(map);
    layers.routes = L.layerGroup().addTo(map);
    layers.markers = L.layerGroup().addTo(map);
    layers.facilities = L.layerGroup().addTo(map);
  }
  layers.routes.clearLayers();
  layers.markers.clearLayers();
  layers.facilities.clearLayers();

  data.routes.forEach(item => {
    const active = item.id === route.id;
    L.polyline(item.points, { color: active ? "#176fc7" : item.color, weight: active ? 5 : 3, opacity: .85 }).addTo(layers.routes);
    item.checkpoints.forEach((checkpoint, index) => {
      const point = item.points[Math.min(index, item.points.length - 1)];
      L.circleMarker(point, { radius: checkpoint === data.profile.activeCheckpoint ? 9 : 6, color: item.color, fillColor: "white", fillOpacity: 1, weight: 3 })
        .addTo(layers.routes)
        .bindTooltip(translateText(checkpoint));
    });
  });

  data.countries.forEach(item => {
    L.marker([item.lat, item.lng])
      .addTo(layers.markers)
      .bindPopup(`<strong>${translateText(item.name)}</strong><br>${item.patients.toLocaleString()} ${translateText("patients")}<br>${item.facilities} ${translateText("facilities")}`);
  });

  [[country.lat + .7, country.lng - .8], [country.lat - .5, country.lng + .9], [country.lat + .3, country.lng + .5]].forEach((point, index) => {
    L.circleMarker(point, { radius: 6, color: "#1b8f68", fillColor: "#1b8f68", fillOpacity: .65 }).addTo(layers.facilities).bindTooltip(`${translateText("Facility")} ${index + 1}`);
  });
  map.setView([country.lat, country.lng], country.zoom);
  setTimeout(() => map.invalidateSize(), 100);
}

function closeWorkflowModal() {
  pendingWorkflow = null;
  $("#workflowModal")?.classList.add("hidden");
  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") lastFocusedElement.focus();
}

function workflowSpeechText() {
  if (!pendingWorkflow) return "No workflow is open.";
  const checklist = (pendingWorkflow.checklist || [])
    .slice(0, 4)
    .map(item => `${item.title}: ${item.detail}`)
    .join(". ");
  return [
    pendingWorkflow.title,
    pendingWorkflow.summary,
    pendingWorkflow.record ? `Record created: ${pendingWorkflow.record}` : "",
    pendingWorkflow.provider ? `Provider evidence: ${pendingWorkflow.provider}` : "",
    checklist ? `Checklist: ${checklist}` : "",
    "Say yes to confirm, no to cancel, or read to hear this again."
  ].filter(Boolean).join(". ");
}

function readWorkflowModal() {
  const text = workflowSpeechText();
  setVoiceResponse(text, true);
  const prompt = $("#workflowVoicePrompt");
  if (prompt) prompt.textContent = "Reading workflow. Say yes to confirm, no to cancel, or read to hear it again.";
}

function openWorkflowModal(config) {
  pendingWorkflow = config;
  lastFocusedElement = document.activeElement;
  $("#workflowEyebrow").textContent = translateText(config.eyebrow || "Workflow");
  $("#workflowTitle").textContent = translateText(config.title);
  $("#workflowSummary").textContent = translateText(config.summary);
  $("#workflowFields").innerHTML = (config.fields || []).map(field => {
    const value = field.value || "";
    const options = field.options || [];
    if (field.type === "select") {
      return `<label class="field-label">${translateText(field.label)}<select data-workflow-field="${field.name}">${options.map(option => `<option value="${option.value}" ${option.value === value ? "selected" : ""}>${translateText(option.label)}</option>`).join("")}</select></label>`;
    }
    if (field.type === "textarea") {
      return `<label class="field-label">${translateText(field.label)}<textarea rows="${field.rows || 3}" data-workflow-field="${field.name}" placeholder="${translateText(field.placeholder || "")}">${translateText(value)}</textarea></label>`;
    }
    return `<label class="field-label">${translateText(field.label)}<input data-workflow-field="${field.name}" value="${translateText(value)}" placeholder="${translateText(field.placeholder || "")}"></label>`;
  }).join("");
  $("#workflowChecklist").innerHTML = (config.checklist || []).map(item => taskItem(item.title, item.detail, item.status || "ready", item.label || "Ready")).join("");
  $("#workflowOutcome").innerHTML = [
    row("Action", config.confirmLabel || "Confirm action"),
    row("Record created", config.record || "Workflow event and profile state update"),
    row("Provider evidence", config.provider || "Activity and integration audit when applicable")
  ].join("");
  $("#workflowNote").value = config.note || "";
  $("#workflowConfirm").textContent = translateText(config.confirmLabel || "Confirm action");
  $("#workflowVoiceInput").value = "";
  $("#workflowVoicePrompt").textContent = translateText("Voice ready: say yes to confirm, no to cancel, or read to hear this workflow.");
  $("#workflowModal").classList.remove("hidden");
  $("#workflowConfirm").focus();
  const instruction = `${translateText(config.title)}. ${translateText(config.summary)}. Say yes to confirm, no to cancel, or read to hear the workflow.`;
  announce(instruction);
  setVoiceResponse(instruction);
}

function workflowFieldValues() {
  return Object.fromEntries($$("[data-workflow-field]").map(field => [field.dataset.workflowField, field.value]));
}

function lessonWorkflowConfig(course, moduleIndex) {
  const localized = translatedCourse(course);
  const enrollment = courseEnrollment(course.id) || {};
  const modules = localized.modules || [];
  const selectedIndex = Math.max(0, Math.min(moduleIndex ?? enrollment.activeModuleIndex ?? 0, Math.max(0, modules.length - 1)));
  return {
    eyebrow: "Learning workflow",
    title: `Complete lesson: ${modules[selectedIndex] || localized.title}`,
    summary: "Review the lesson context, confirm progress, and add a note before the learning record is updated.",
    confirmLabel: "Complete lesson",
    record: "Enrollment progress, learning hours, readiness, and active module state",
    provider: "Learning record updates immediately; certificate provider is used when issuing credentials.",
    path: "/api/learning/lesson",
    body: { courseId: course.id, moduleIndex: selectedIndex },
    success: "Lesson completed",
    checklist: [
      { title: localized.title, detail: `${enrollment.progress || 0}% current progress`, status: enrollment.progress ? "live" : "pending", label: "Course" },
      { title: "Selected module", detail: modules[selectedIndex] || "Core lesson", status: "live", label: `Step ${selectedIndex + 1}` },
      { title: "Completion evidence", detail: "Progress, hours, readiness, and activity feed will update.", status: "ready", label: "Record" }
    ]
  };
}

function roleWorkflowConfig(roleId) {
  const role = data.roles.find(item => item.id === roleId) || firstEligibleRole();
  if (!role) return null;
  const gate = roleGate(role);
  const missingCourses = gate.missingCertificates.map(id => data.courses.find(course => course.id === id)?.title || id);
  const blocked = !gate.eligible;
  return {
    eyebrow: blocked ? "Readiness review" : "Workforce application",
    title: blocked ? `Review gaps: ${role.title}` : `Apply for role: ${role.title}`,
    summary: blocked
      ? "This role is not unlocked yet. Review the exact readiness and certificate gaps before submitting."
      : "Confirm role fit, readiness, and provider handoff before submitting the application.",
    confirmLabel: blocked ? "Open learning path" : "Submit application",
    record: blocked ? "No application is submitted; use this review to guide training next steps." : "Application, candidate stage, HRIS event, and activity feed",
    provider: blocked ? "Learning and readiness gates determine eligibility." : "Workforce HRIS provider records the application event.",
    path: blocked ? null : "/api/workforce/apply",
    body: { roleId: role.id },
    success: blocked ? "Review gaps opened" : "Application submitted",
    redirectSection: blocked ? "learning" : null,
    checklist: [
      { title: "Readiness gate", detail: `${data.profile.readiness}% current / ${role.minReadiness}% required`, status: gate.missingReadiness ? "blocked" : "ready", label: gate.missingReadiness ? `${gate.missingReadiness}% gap` : "Met" },
      { title: "Certificates", detail: missingCourses.length ? missingCourses.join(", ") : "Required certificates are complete", status: missingCourses.length ? "blocked" : "ready", label: missingCourses.length ? "Gaps" : "Met" },
      { title: "Role terms", detail: `${role.country} - ${role.level} - ${money(role.rate || 0)}/shift`, status: "live", label: "Role" }
    ]
  };
}

function simpleWorkflowConfig({ eyebrow, title, summary, confirmLabel, path, body, success, record, provider, checklist }) {
  return { eyebrow, title, summary, confirmLabel, path, body, success, record, provider, checklist };
}

function learningAccessibilityWorkflowConfig(mode) {
  const course = activeCourse() || data.courses[0];
  const localized = course ? translatedCourse(course) : null;
  const labels = {
    caption: {
      title: "Build captions",
      summary: "Prepare captions, transcript, and relay handoff for a hearing-impaired learner.",
      confirm: "Build captions",
      support: "Captions, transcript, and sign-language handoff prompt"
    },
    visual: {
      title: "Create audio guide",
      summary: "Prepare audio narration, screen-reader outline, and large-print summary for a visually impaired learner.",
      confirm: "Create audio guide",
      support: "Audio narration, screen-reader outline, and large-print lesson summary"
    },
    "low-bandwidth": {
      title: "Send offline packet",
      summary: "Prepare an SMS-friendly and offline lesson packet for rural low-bandwidth access.",
      confirm: "Send offline packet",
      support: "SMS summary, offline packet, and community aide checklist"
    }
  };
  const selected = labels[mode] || labels.caption;
  return simpleWorkflowConfig({
    eyebrow: "Accessible learning",
    title: `${selected.title}: ${localized?.title || "Active course"}`,
    summary: selected.summary,
    confirmLabel: selected.confirm,
    path: "/api/learning/accessibility",
    body: { courseId: course?.id, mode },
    success: "Accessible learning support prepared",
    record: "Learner accommodation record, accessibility profile, learning activity, and provider evidence",
    provider: "Learning provider evidence records the accessibility-ready packet for audit.",
    checklist: [
      { title: "Learner need", detail: "Supports hearing and visual impairment workflows without requiring high bandwidth.", status: "ready", label: "Access" },
      { title: "Course context", detail: localized?.title || "Active course", status: "live", label: "Lesson" },
      { title: "Assistive output", detail: selected.support, status: "ready", label: "Prepared" }
    ]
  });
}

function workflowConfig(workflow, action, element) {
  if (workflow === "learning") {
    const course = activeCourse();
    if (!course) return null;
    const advancedLearningActions = new Set(["assignment", "quiz-attempt", "note", "report", "transcript", "cohort"]);
    if (advancedLearningActions.has(action)) {
      const labels = {
        assignment: ["Create assignment", "Create a practical assignment tied to the active course and workforce-ready reflection.", "Create assignment"],
        "quiz-attempt": ["Record quiz attempt", "Record a quiz attempt, score, feedback, and certificate readiness evidence.", "Record attempt"],
        note: ["Record instructor note", "Add an instructor note for progress, accessibility, and readiness coaching.", "Record note"],
        report: ["Generate progress report", "Generate a learner progress report with readiness, hours, modules, and recommendation.", "Generate report"],
        transcript: ["Issue learner transcript", "Issue a transcript with completed courses, certificates, and readiness evidence.", "Issue transcript"],
        cohort: ["Create cohort", "Create a facilitated learning cohort for a rural learner group.", "Create cohort"]
      };
      const [title, summary, confirmLabel] = labels[action];
      return simpleWorkflowConfig({
        eyebrow: "Advanced learning",
        title,
        summary,
        confirmLabel,
        path: "/api/learning/advanced",
        body: { type: action, courseId: course.id },
        success: "Advanced learning operation complete",
        record: "Learning operation record, active course, provider evidence, readiness context, and activity feed",
        provider: "Learning course and certificate provider evidence is recorded for audit.",
        checklist: [
          { title: "Active course", detail: translatedCourse(course).title, status: "live", label: translatedCourse(course).track },
          { title: "Learner progress", detail: `${courseEnrollment(course.id)?.progress || 0}% progress, ${data.profile.learningHours || 0} hour(s)`, status: "ready", label: "Record" },
          { title: "Evidence", detail: "This action creates a concrete classroom operations record.", status: "ready", label: "Audit" }
        ]
      });
    }
    if (action === "lesson") {
      const enrollment = courseEnrollment(course.id);
      return lessonWorkflowConfig(course, enrollment?.activeModuleIndex || 0);
    }
    return simpleWorkflowConfig({
      eyebrow: "Learning workflow",
      title: `Start course: ${translatedCourse(course).title}`,
      summary: "Start or continue the selected course and create a learning record tied to readiness.",
      confirmLabel: "Start course",
      path: "/api/learning/start",
      body: { courseId: course.id },
      success: "Course started",
      record: "Enrollment, readiness, learning streak, and activity feed",
      provider: "Certificate provider becomes active after quiz and credential issue.",
      checklist: [
        { title: "Course", detail: translatedCourse(course).title, status: "live", label: translatedCourse(course).track },
        { title: "Modules", detail: (translatedCourse(course).modules || []).join(", "), status: "ready", label: `${course.readiness}%` },
        { title: "Outcome", detail: "Readiness increases and the course becomes active.", status: "ready", label: "Record" }
      ]
    });
  }
  if (workflow === "workforce") {
    if (action === "apply-role") return roleWorkflowConfig(element.dataset.roleId || firstEligibleRole()?.id);
    const advancedActions = new Set(["onboarding", "document", "timesheet", "payroll", "evaluation", "shift-request"]);
    if (advancedActions.has(action)) {
      const labels = {
        onboarding: ["Prepare onboarding packet", "Create a worker onboarding packet with identity, certificates, role expectations, safety briefing, and payment setup.", "Create packet"],
        document: ["Verify documents", "Record identity, certificate proof, work authorization, and emergency contact checks.", "Verify documents"],
        timesheet: ["Submit timesheet", "Submit worked hours for the active role and prepare payroll evidence.", "Submit timesheet"],
        payroll: ["Approve payroll", "Approve payment from the latest timesheet and update earnings.", "Approve payroll"],
        evaluation: ["Complete performance review", "Record supervisor feedback, score, strengths, and next coaching step.", "Complete review"],
        "shift-request": ["Create shift request", "Open a shift swap or schedule adjustment request for manager review.", "Create request"]
      };
      const [title, summary, confirmLabel] = labels[action];
      return simpleWorkflowConfig({
        eyebrow: "Advanced workforce",
        title,
        summary,
        confirmLabel,
        path: "/api/workforce/advanced",
        body: { type: action },
        success: "Advanced workforce operation complete",
        record: "Operational workforce record, HRIS/calendar/shift provider event, activity feed, and readiness/earnings when applicable",
        provider: "HRIS, calendar, shift, payroll, and notification evidence is recorded for audit.",
        checklist: [
          { title: "Candidate", detail: `${data.profile.candidateStage} - ${data.profile.eligibility}`, status: "live", label: "Profile" },
          { title: "Role context", detail: data.profile.applications?.[0]?.roleTitle || firstEligibleRole()?.title || "Best available role", status: "ready", label: "Role" },
          { title: "Evidence", detail: "A concrete operation record and provider event will be created.", status: "ready", label: "Audit" }
        ]
      });
    }
    const labels = {
      "build-profile": ["Verify candidate profile", "Review learning, certificates, and readiness before verifying the workforce profile.", "Build profile"],
      interview: ["Schedule interview", "Confirm readiness and record calendar plus notification provider events.", "Schedule interview"],
      mentor: ["Assign mentor", "Match a mentor to readiness gaps and role fit.", "Assign mentor"],
      shift: ["Schedule shift", "Create the next paid shift after interview support is in place.", "Start shift"]
    };
    const [title, summary, confirmLabel] = labels[action] || ["Workforce action", "Complete workforce action.", "Confirm"];
    return simpleWorkflowConfig({
      eyebrow: "Workforce workflow",
      title,
      summary,
      confirmLabel,
      path: "/api/workforce/action",
      body: { type: action },
      success: "Workforce updated",
      record: "Candidate stage, readiness, schedule, earnings, and activity feed",
      provider: "Calendar, notification, and HRIS events are recorded when applicable.",
      checklist: [
        { title: "Candidate stage", detail: data.profile.candidateStage, status: "live", label: data.profile.eligibility },
        { title: "Readiness", detail: `${data.profile.readiness}% readiness with ${(data.profile.certificates || []).length} certificate(s)`, status: "ready", label: "Profile" },
        { title: "Current support", detail: `${data.profile.interviews || 0} interview(s), mentor ${data.profile.mentor}`, status: "ready", label: "Support" }
      ]
    });
  }
  if (workflow === "health") {
    const accessAction = ["accessibility", "caption", "caregiver", "consent", "vitals", "referral", "followup"].includes(action);
    const advancedHealthActions = new Set(["appointment", "provider", "history", "prescription", "emergency", "note", "outcome"]);
    const titleMap = {
      intake: "Start intake",
      representative: "Connect representative",
      safety: "Run safety review",
      inspector: "Inspect route",
      careplan: "Generate care plan",
      accessibility: "Build access plan",
      caption: "Start caption relay",
      caregiver: "Notify caregiver",
      consent: "Record consent",
      vitals: "Capture vitals",
      referral: "Create referral",
      followup: "Schedule follow-up",
      appointment: "Schedule appointment",
      provider: "Assign provider",
      history: "Record patient history",
      prescription: "Build care packet",
      emergency: "Escalate emergency",
      note: "Record care-team note",
      outcome: "Review outcome"
    };
    const summaryMap = {
      intake: "Collect patient need, urgency, accessibility supports, language, caregiver, and callback details before opening the telehealth case.",
      accessibility: "Create a telehealth access plan with captions, audio description, caregiver handoff, and low-bandwidth fallback.",
      caption: "Start a caption relay session and transcript workflow for a hearing-impaired patient.",
      caregiver: "Notify a caregiver or community accessibility aide for supported telehealth follow-up.",
      consent: "Record plain-language telehealth, caregiver, translation, privacy, and assistive-format consent.",
      vitals: "Capture supervised vitals and triage evidence before clinical escalation.",
      referral: "Create a referral handoff to a partner clinic, representative, or community health worker.",
      followup: "Schedule a low-bandwidth callback with SMS, caregiver packet, large-print, and audio support.",
      appointment: "Schedule a real telehealth appointment record with language, accessibility, modality, and fallback channel.",
      provider: "Assign a provider or partner clinic desk to the active patient case.",
      history: "Record patient history for allergies, conditions, medications, caregiver context, and rural access barriers.",
      prescription: "Build a clinician-review care packet with care plan, referral, vitals, history, and accessibility needs.",
      emergency: "Open an emergency escalation to a community health worker, partner clinic, or urgent care path.",
      note: "Record a care-team note that keeps the clinical handoff auditable.",
      outcome: "Review the follow-up outcome and record the next step for continuity of care."
    };
    const intakeFields = action === "intake" ? [
      { name: "patientName", label: "Patient or household name", value: "Community patient", placeholder: "Name or household reference" },
      { name: "needSummary", label: "Primary health need", type: "textarea", rows: 3, value: `${activeCountry().name} intake for heat, queue, field access, and care support` },
      { name: "urgency", label: "Urgency", type: "select", value: activeCountry().risk === "High" ? "High" : "Routine", options: [
        { value: "Routine", label: "Routine" },
        { value: "Priority", label: "Priority" },
        { value: "High", label: "High" },
        { value: "Emergency", label: "Emergency" }
      ] },
      { name: "preferredLanguage", label: "Preferred language", type: "select", value: languageCode(), options: [
        { value: "en", label: "English" },
        { value: "fr", label: "French" },
        { value: "sw", label: "Kiswahili" },
        { value: "ar", label: "Arabic" }
      ] },
      { name: "accessibilityNeeds", label: "Accessibility needs", value: "Captions, audio narration, large print, caregiver handoff", placeholder: "Captions, audio, screen reader, caregiver, etc." },
      { name: "contactMethod", label: "Best contact method", type: "select", value: "Low-bandwidth callback", options: [
        { value: "Low-bandwidth callback", label: "Low-bandwidth callback" },
        { value: "SMS", label: "SMS" },
        { value: "WhatsApp", label: "WhatsApp" },
        { value: "Community aide", label: "Community aide" }
      ] },
      { name: "caregiverName", label: "Caregiver or community aide", value: "Community accessibility aide", placeholder: "Caregiver, aide, or trusted contact" }
    ] : [];
    return simpleWorkflowConfig({
      eyebrow: accessAction ? "Accessible telehealth" : "Health workflow",
      title: translateLiteral(titleMap[action] || "Health action"),
      summary: summaryMap[action] || "Confirm the care operation before updating the case queue, safety evidence, and provider trail.",
      confirmLabel: translateLiteral(titleMap[action] || "Confirm"),
      path: advancedHealthActions.has(action) ? "/api/health/advanced" : "/api/health/action",
      body: { type: action },
      fields: intakeFields,
      success: "Health action complete",
      record: advancedHealthActions.has(action) ? "Advanced care operation record, active intake status, EHR/telehealth/notification evidence, and activity feed" : accessAction ? "Telehealth accessibility case note, active intake status, provider evidence, and activity feed" : "Intake queue, representative status, safety review, care plan, or AI activity",
      provider: "Telehealth, notification, EHR, and AI provider events are recorded when applicable.",
      checklist: [
        { title: "Country context", detail: `${activeCountry().name}: ${activeCountry().queue}`, status: "live", label: activeCountry().risk },
        { title: "Active case", detail: (data.profile.healthIntakes || [])[0]?.patientRef || "No intake yet", status: (data.profile.healthIntakes || []).length ? "ready" : "pending", label: "Case" },
        { title: accessAction ? "Assistive support" : "Governance", detail: accessAction ? "Captions, visual support, caregiver handoff, and rural fallback remain attached to the session." : `${activeCountry().quality}% data quality, ${activeCountry().safety}% safety override`, status: "ready", label: accessAction ? "Access" : "Safety" }
      ]
    });
  }
  if (workflow === "trade") {
    const productId = element.dataset.productId || firstProduct()?.id;
    const product = data.products.find(item => item.id === productId) || firstProduct();
    const latestOrder = data.profile.orders[data.profile.orders.length - 1];
    const titleMap = { order: "Create order", advance: "Advance order", wallet: "Post M-Pesa payment", "drone-plan": "Plan drone mission", drone: "Run drone field scan", "drone-intervention": "Assign field intervention", "drone-report": "Create drone field report", "drone-irrigation": "Create irrigation plan", "drone-pest": "Create pest alert", "drone-spray": "Create spray plan", "drone-yield": "Create yield forecast", "drone-compliance": "Run drone compliance audit", quote: "Send buyer quote", quality: "Run quality inspection", "cold-chain": "Run cold-chain check", export: "Prepare export packet", contract: "Draft contract packet", release: "Release payment", price: "Run price AI", route: "Run route AI", "trade-advisor": "Review trade next step" };
    titleMap["buyer-contact"] = "Contact buyer";
    const pathMap = {
      order: "/api/trade/order",
      advance: "/api/trade/advance",
      wallet: "/api/trade/wallet",
      "buyer-contact": "/api/trade/buyer-contact",
      "drone-plan": "/api/trade/drone-mission",
      drone: "/api/trade/drone-scan",
      "drone-intervention": "/api/trade/drone-intervention",
      "drone-report": "/api/trade/drone-advanced",
      "drone-irrigation": "/api/trade/drone-advanced",
      "drone-pest": "/api/trade/drone-advanced",
      "drone-spray": "/api/trade/drone-advanced",
      "drone-yield": "/api/trade/drone-advanced",
      "drone-compliance": "/api/trade/drone-advanced",
      quote: "/api/trade/advanced",
      quality: "/api/trade/advanced",
      "cold-chain": "/api/trade/advanced",
      export: "/api/trade/advanced",
      contract: "/api/trade/advanced",
      release: "/api/trade/advanced"
    };
    const isDroneAction = ["drone-plan", "drone", "drone-intervention"].includes(action);
    const isAdvancedDroneAction = ["drone-report", "drone-irrigation", "drone-pest", "drone-spray", "drone-yield", "drone-compliance"].includes(action);
    const isAdvancedTrade = ["quote", "quality", "cold-chain", "export", "contract", "release"].includes(action);
    const droneTypeMap = { "drone-report": "field-report", "drone-irrigation": "irrigation", "drone-pest": "pest", "drone-spray": "spray", "drone-yield": "yield", "drone-compliance": "compliance" };
    return simpleWorkflowConfig({
      eyebrow: "Trade workflow",
      title: titleMap[action] || "Trade action",
      summary: action === "buyer-contact" ? "Prepare a buyer communication workflow with the active crop, order, route context, channel, and message draft before sending through live communications." : isDroneAction ? "Run a complete agritech drone workflow: compliant flight planning, crop intelligence, findings, map evidence, and field intervention tasks." : isAdvancedDroneAction ? "Create farmer-facing drone intelligence that turns aerial evidence into irrigation, pest, spray, yield, compliance, and buyer-readiness decisions." : isAdvancedTrade ? "Create a concrete commercial operations record with provider evidence for quote, quality, cold-chain, export, contract, or payment release." : "Confirm the market, wallet, logistics, or AI action before the trade ledger changes.",
      confirmLabel: titleMap[action] || "Confirm",
      path: pathMap[action] || "/api/ai/run",
      body: action === "order" ? { productId } : action === "wallet" ? { provider: "M-Pesa", amount: 120 } : action === "buyer-contact" ? { productId } : isDroneAction ? { productId } : isAdvancedDroneAction ? { type: droneTypeMap[action], productId } : isAdvancedTrade ? { type: action, productId } : action === "advance" ? {} : { type: action },
      success: action === "buyer-contact" ? "Buyer contact prepared" : action === "wallet" ? "Payment posted" : action === "advance" ? "Order advanced" : action === "order" ? "Order created" : action === "drone-plan" ? "Drone mission planned" : action === "drone" ? "Drone scan complete" : action === "drone-intervention" ? "Field intervention assigned" : isAdvancedDroneAction ? "Advanced drone operation complete" : isAdvancedTrade ? "Advanced trade operation complete" : "AI action complete",
      record: "Order book, wallet ledger, route timeline, drone mission, field scan, intervention task, trade event, or AI evidence",
      provider: "Market, drone, payment, logistics, or AI provider event is recorded.",
      checklist: [
        { title: "Product/order", detail: latestOrder ? `${latestOrder.orderNumber} - ${latestOrder.stage}` : product?.name || "No product selected", status: latestOrder || product ? "live" : "pending", label: "Trade" },
        { title: "Buyer contact", detail: (data.profile.buyerContacts || [])[0]?.buyerName || "No buyer contact yet", status: (data.profile.buyerContacts || []).length ? "ready" : "pending", label: "Buyer" },
        { title: "Route", detail: activeRoute().name, status: "ready", label: data.profile.activeCheckpoint },
        { title: "Wallet", detail: `${money(data.profile.wallet || 0)} current balance`, status: "ready", label: "Wallet" },
        { title: "Drone mission", detail: (data.profile.droneMissions || [])[0]?.missionRef || "No flight plan yet", status: (data.profile.droneMissions || []).length ? "ready" : "pending", label: "Flight" },
        { title: "Drone evidence", detail: (data.profile.droneScans || [])[0]?.scanRef || "No scan yet", status: (data.profile.droneScans || []).length ? "ready" : "pending", label: "Field" },
        { title: "Intervention", detail: (data.profile.fieldInterventions || [])[0]?.taskRef || "No field task yet", status: (data.profile.fieldInterventions || []).length ? "ready" : "pending", label: "Task" }
      ]
    });
  }
  if (workflow === "ai") {
    const titleMap = {
      command: "Run command center",
      copilot: "Ask unified copilot",
      tutor: "Ask AI tutor",
      quizgen: "Generate quiz help",
      "workforce-coach": "Review readiness gaps",
      "interview-prep": "Prep interview",
      triage: "Run health triage",
      inspector: "Inspect route",
      route: "Assess route risk",
      careplan: "Generate care-plan guidance",
      price: "Run price AI",
      "trade-advisor": "Review trade next step"
    };
    return simpleWorkflowConfig({
      eyebrow: "AI workflow",
      title: titleMap[action] || "Run AI workflow",
      summary: "Run the AI engine with the active country, route, checkpoint, learning, workforce, health, trade, and provider context.",
      confirmLabel: titleMap[action] || "Run AI",
      path: "/api/ai/run",
      body: { type: action },
      success: "AI action complete",
      record: "AI run history, module evidence, map insight, activity feed, provider status, and response evidence",
      provider: "OpenAI, local AI webhook, or fallback provider is recorded on each run.",
      checklist: [
        { title: "AI mode", detail: data.providers.find(item => item.id === "openai")?.mode || data.profile.aiProvider || "fallback", status: "live", label: "Provider" },
        { title: "Route context", detail: `${activeRoute().name} - ${data.profile.activeCheckpoint}`, status: "ready", label: "Map" },
        { title: "Operating country", detail: `${activeCountry().name}: ${activeCountry().risk} risk`, status: "ready", label: "Context" },
        { title: "Human review", detail: "AI guidance is logged for operator review before real-world action.", status: "ready", label: "Governed" }
      ]
    });
  }
  if (workflow === "map") {
    const advancedMapLabels = {
      "farmer-location": ["Map farmer location", "Create a farmer or producer-group location record tied to the active route, country, accessibility needs, provider audit, and map evidence.", "Map farmer"],
      "field-zone": ["Create field zone", "Create an operational field zone that links crop focus, country risk, drone scans, and route context.", "Create field zone"],
      "facility-route": ["Build facility route", "Prepare a route between rural access points and facility hubs for care, crop movement, and workforce teams.", "Build route"],
      disruption: ["Record route disruption", "Record a disruption, severity, mitigation plan, and route intelligence evidence for the active checkpoint.", "Record disruption"],
      "risk-layer": ["Generate risk layer", "Generate a composite map risk layer across road access, clinic reach, market movement, weather exposure, and workforce coverage.", "Generate layer"],
      evidence: ["Compile map evidence packet", "Compile farmer locations, field zones, facility routes, disruptions, risk layers, and AI insights into a map evidence packet.", "Compile packet"]
    };
    if (advancedMapLabels[action]) {
      const [title, summary, confirmLabel] = advancedMapLabels[action];
      return simpleWorkflowConfig({
        eyebrow: "Advanced map",
        title,
        summary,
        confirmLabel,
        path: "/api/map/advanced",
        body: { type: action },
        success: "Advanced map operation complete",
        record: "Map operation record, country and route context, provider audit event, map insight, and activity feed evidence",
        provider: "Maps provider evidence is recorded for audit and live engine testing.",
        checklist: [
          { title: "Country", detail: `${activeCountry().name}: ${activeCountry().queue}`, status: "live", label: activeCountry().risk },
          { title: "Route", detail: `${activeRoute().name} - ${data.profile.activeCheckpoint}`, status: "ready", label: data.profile.routeStage },
          { title: "Audit", detail: "This operation writes a concrete map intelligence record.", status: "ready", label: "Evidence" }
        ]
      });
    }
    return simpleWorkflowConfig({
      eyebrow: "Map workflow",
      title: "Focus map context",
      summary: "Confirm the active country and route context before opening the geospatial workspace.",
      confirmLabel: "Focus map",
      path: "/api/workflow/record",
      body: { module: "Map", action: "map.context_focused", section: "map", providerId: "maps", detail: `Map focused on ${activeCountry().name} and ${activeRoute().name}.` },
      redirectSection: "map",
      success: "Map focused",
      record: "Map focus event, active country, route checkpoint, and activity feed evidence",
      provider: "Map layers and AI evidence remain visible in the route intelligence panels.",
      checklist: [
        { title: "Country", detail: `${activeCountry().name}: ${activeCountry().queue}`, status: "live", label: activeCountry().risk },
        { title: "Route", detail: `${activeRoute().name} - ${data.profile.activeCheckpoint}`, status: "ready", label: data.profile.routeStage },
        { title: "Map provider", detail: data.providers.find(item => item.id === "maps")?.detail || "Map provider ready", status: "ready", label: "Layer" }
      ]
    });
  }
  if (workflow === "integrations") {
    if (action === "test-all") {
      return simpleWorkflowConfig({
        eyebrow: "Integration workflow",
        title: "Test all providers",
        summary: "Run a provider check across every configured engine and record audit evidence.",
        confirmLabel: "Test all providers",
        path: "/api/integrations/test-all",
        body: {},
        success: "All providers tested",
        record: "Integration events for every provider plus a test-all summary event",
        provider: "Webhook-backed providers receive test dispatches when configured.",
        checklist: [
          { title: "Provider count", detail: `${data.providers.length} provider(s) tracked`, status: "live", label: "Providers" },
          { title: "Connected", detail: `${data.providers.filter(provider => provider.status === "connected").length} connected provider(s)`, status: "ready", label: "Ready" },
          { title: "Needs credentials", detail: `${data.providers.filter(provider => provider.status === "needs-credentials").length} provider(s) need credentials`, status: data.providers.some(provider => provider.status === "needs-credentials") ? "blocked" : "ready", label: "Credentials" }
        ]
      });
    }
    if (action === "test-provider") {
      const provider = data.providers.find(item => item.id === element.dataset.providerId) || data.providers[0];
      if (!provider) return null;
      return simpleWorkflowConfig({
        eyebrow: "Provider workflow",
        title: `Test provider: ${provider.name}`,
        summary: "Confirm this provider test before sending the configured webhook/sandbox check.",
        confirmLabel: "Test provider",
        path: "/api/integrations/test",
        body: { providerId: provider.id },
        success: "Provider test complete",
        record: "Provider test event, delivery status, and admin activity",
        provider: `${provider.mode} - ${provider.detail}`,
        checklist: [
          { title: "Provider", detail: provider.name, status: "live", label: provider.module },
          { title: "Mode", detail: provider.mode, status: provider.status === "needs-credentials" ? "blocked" : "ready", label: provider.status },
          { title: "Detail", detail: provider.detail, status: "ready", label: "Config" }
        ]
      });
    }
    if (action === "test-module") {
      const moduleName = element.dataset.module || "Workforce";
      const providers = moduleProviders(moduleName);
      return simpleWorkflowConfig({
        eyebrow: "Module engine workflow",
        title: `Test ${moduleName} engines`,
        summary: `Run every configured ${moduleName} provider from this module workspace and write integration evidence back to the platform.`,
        confirmLabel: "Test engines",
        path: "/api/integrations/test-module",
        body: { module: moduleName },
        success: `${moduleName} engines tested`,
        record: "Module provider test events, summary event, delivery status, and activity feed",
        provider: "Sandbox engines complete locally; live-mode providers dispatch to configured webhooks.",
        checklist: [
          { title: "Provider count", detail: `${providers.length} ${moduleName} provider(s) configured`, status: providers.length ? "live" : "blocked", label: "Providers" },
          { title: "Connected", detail: `${providers.filter(provider => provider.status === "connected").length} connected provider(s)`, status: "ready", label: "Ready" },
          { title: "Latest module event", detail: moduleProviderEvents(moduleName)[0]?.action || "No event yet", status: moduleProviderEvents(moduleName).length ? "ready" : "pending", label: "Audit" }
        ]
      });
    }
    return simpleWorkflowConfig({
      eyebrow: "Integration workflow",
      title: "Review provider cards",
      summary: "Open the integration workspace and review provider readiness, events, and setup evidence.",
      confirmLabel: "Review providers",
      path: "/api/workflow/record",
      body: { module: "Integrations", action: "integrations.reviewed", section: "integrations", detail: "Provider readiness cards reviewed from the integration workspace." },
      redirectSection: "integrations",
      success: "Provider cards ready",
      record: "Integration review event, provider status snapshot, and activity feed evidence",
      provider: "Provider cards can then be tested individually.",
      checklist: [
        { title: "Provider cards", detail: `${data.providers.length} provider card(s) available`, status: "live", label: "Cards" },
        { title: "Latest event", detail: (data.profile.integrationEvents || [])[0]?.action || "No event yet", status: (data.profile.integrationEvents || []).length ? "ready" : "pending", label: "Audit" },
        { title: "Readiness", detail: data.admin?.readiness?.status || "unknown", status: "ready", label: `${data.admin?.readiness?.readyCount || 0}/${data.admin?.readiness?.total || 0}` }
      ]
    });
  }
  if (workflow === "admin") {
    if (action === "health-check") {
      return simpleWorkflowConfig({
        eyebrow: "Admin workflow",
        title: "Run platform health check",
        summary: "Confirm the platform-wide health check before provider and module audit events are recorded.",
        confirmLabel: "Run health check",
        path: "/api/admin/health-check",
        body: {},
        success: "Admin health check complete",
        record: "Admin audit entries and provider health events",
        provider: "Every configured provider is checked from the admin console.",
        checklist: [
          { title: "Readiness", detail: `${data.admin?.readiness?.readyCount || 0}/${data.admin?.readiness?.total || 0} checks ready`, status: "ready", label: data.admin?.readiness?.status || "Status" },
          { title: "Modules", detail: `${data.admin?.modules?.length || 0} modules reporting`, status: "live", label: "Modules" },
          { title: "Audit", detail: `${data.admin?.audit?.length || 0} audit item(s) visible`, status: "ready", label: "Audit" }
        ]
      });
    }
    return simpleWorkflowConfig({
      eyebrow: "Admin workflow",
      title: action === "readiness" ? "Review production readiness" : action === "modules" ? "Review module records" : "Review audit feed",
      summary: "Open the admin control room section for deeper inspection without changing platform state.",
      confirmLabel: action === "readiness" ? "Open readiness" : action === "modules" ? "Review modules" : "Open audit",
      path: "/api/workflow/record",
      body: { module: "Admin", action: `admin.${action || "review"}.reviewed`, section: "admin", detail: `Admin ${action || "control room"} review completed.` },
      redirectSection: "admin",
      success: "Admin console ready",
      record: "Admin review event, readiness status, module record count, and activity feed evidence",
      provider: "Admin health check can be run when an auditable event is needed.",
      checklist: [
        { title: "Readiness", detail: data.admin?.readiness?.status || "unknown", status: "ready", label: `${data.admin?.readiness?.readyCount || 0}/${data.admin?.readiness?.total || 0}` },
        { title: "Modules", detail: (data.admin?.modules || []).map(module => `${module.name}: ${module.records}`).join(", "), status: "live", label: "Records" },
        { title: "Latest audit", detail: (data.admin?.audit || [])[0]?.detail || "No audit yet", status: (data.admin?.audit || []).length ? "ready" : "pending", label: "Audit" }
      ]
    });
  }
  if (workflow === "support") {
    return simpleWorkflowConfig({
      eyebrow: "Support workflow",
      title: "Open support ticket",
      summary: "Capture a real support request, missing setup item, user confusion, or launch blocker for admin follow-up.",
      confirmLabel: "Open ticket",
      path: "/api/support/ticket",
      body: { subject: "Launch readiness support", module: "Platform", priority: "standard" },
      success: "Support ticket opened",
      record: "Support queue, usage event, activity feed, and email provider evidence",
      provider: "Email delivery provider records support.ticket_opened when configured.",
      checklist: [
        { title: "Requester", detail: data.user?.email || "Signed-in user", status: "ready", label: "User" },
        { title: "Latest ticket", detail: (data.profile.supportTickets || [])[0]?.ticketNumber || "No ticket yet", status: (data.profile.supportTickets || []).length ? "ready" : "pending", label: "Support" },
        { title: "Provider", detail: data.providers.find(item => item.id === "email-delivery")?.detail || "Email provider not configured", status: "ready", label: "Email" }
      ]
    });
  }
  if (workflow === "onboarding") {
    return simpleWorkflowConfig({
      eyebrow: "Launch workflow",
      title: "Start guided walkthrough",
      summary: "Create a first-run checklist that helps a new user understand the dashboard, modules, AI, support, and admin readiness path.",
      confirmLabel: "Start walkthrough",
      path: "/api/onboarding/start",
      body: { scenario: "first-live-pilot" },
      success: "Walkthrough started",
      record: "Onboarding run, usage event, activity feed, and provider evidence",
      provider: "Auth/user provider records onboarding.started for launch analytics.",
      checklist: [
        { title: "Scenario", detail: "First live pilot", status: "ready", label: "Pilot" },
        { title: "Modules", detail: "Dashboard, learning, workforce, health, trade, admin", status: "ready", label: "Tour" },
        { title: "Latest run", detail: latestOnboardingRun()?.status || "No run yet", status: latestOnboardingRun() ? "ready" : "pending", label: "Guide" }
      ]
    });
  }
  if (workflow === "subscriber") {
    return simpleWorkflowConfig({
      eyebrow: "Subscriber workflow",
      title: "Invite pilot subscriber",
      summary: "Create a pilot subscriber account record so the first live launch has a real admin-managed user/customer path.",
      confirmLabel: "Invite subscriber",
      path: "/api/admin/subscriber",
      body: { name: "Pilot subscriber", email: "pilot-user@example.com", plan: "pilot", seats: 1 },
      success: "Subscriber invited",
      record: "Subscriber account, usage event, admin audit, and auth provider evidence",
      provider: "Auth provider records subscriber.invited when configured.",
      checklist: [
        { title: "Current subscribers", detail: `${(data.admin?.subscribers || []).length} subscriber(s) tracked`, status: "ready", label: "Admin" },
        { title: "Billing provider", detail: data.providers.find(item => item.id === "billing-subscriptions")?.status || "not configured", status: "ready", label: "Billing" },
        { title: "Auth provider", detail: data.providers.find(item => item.id === "auth-users")?.status || "not configured", status: "ready", label: "Auth" }
      ]
    });
  }
  if (workflow === "profile") {
    return simpleWorkflowConfig({
      eyebrow: "Profile workflow",
      title: "Review unified profile",
      summary: "Open the consolidated platform record across learning, workforce, health, trade, wallet, and AI.",
      confirmLabel: "Open profile",
      path: "/api/workflow/record",
      body: { module: "Profile", action: "profile.reviewed", section: "profile", detail: "Unified profile reviewed across learning, workforce, health, trade, wallet, and AI." },
      redirectSection: "profile",
      success: "Unified profile ready",
      record: "Profile review event, unified record snapshot, and activity feed evidence",
      provider: "Profile evidence comes from module records and provider events.",
      checklist: [
        { title: "Learning", detail: `${data.profile.completedCourses.length} completed course(s), ${data.profile.certificates.length} certificate(s)`, status: "ready", label: "Learning" },
        { title: "Workforce", detail: `${(data.profile.applications || []).length} application(s), ${(data.profile.shiftSchedule || []).length} shift(s)`, status: "ready", label: "Workforce" },
        { title: "Trade and AI", detail: `${data.profile.orders.length} order(s), ${(data.profile.aiRuns || []).length} AI run(s)`, status: "live", label: "Evidence" }
      ]
    });
  }
  return null;
}

function runWorkflowAction(workflow, action, element) {
  const config = workflowConfig(workflow, action, element);
  if (config) return openWorkflowModal(config);
  if (workflow === "learning") {
    const course = activeCourse();
    if (!course) return toast("No learning courses available");
    if (action === "lesson") {
      const enrollment = courseEnrollment(course.id);
      return mutate("/api/learning/lesson", { courseId: course.id, moduleIndex: enrollment?.activeModuleIndex || 0 }, "Lesson completed");
    }
    return mutate("/api/learning/start", { courseId: course.id }, "Course started");
  }
  if (workflow === "workforce") {
    if (action === "apply-role") {
      const roleId = element.dataset.roleId || firstEligibleRole()?.id;
      if (!roleId) return toast("No workforce roles available");
      return mutate("/api/workforce/apply", { roleId }, "Application submitted");
    }
    return mutate("/api/workforce/action", { type: action }, "Workforce updated");
  }
  if (workflow === "health") return mutate("/api/health/action", { type: action }, "Health action complete");
  if (workflow === "trade") {
    if (action === "order") {
      const productId = element.dataset.productId || firstProduct()?.id;
      if (!productId) return toast("No trade products available");
      return mutate("/api/trade/order", { productId }, "Order created");
    }
    if (action === "advance") return mutate("/api/trade/advance", {}, "Order advanced");
    if (action === "wallet") return mutate("/api/trade/wallet", { provider: "M-Pesa", amount: 120 }, "Payment posted");
    if (action === "drone-plan") return mutate("/api/trade/drone-mission", { productId: firstProduct()?.id }, "Drone mission planned");
    if (action === "drone") return mutate("/api/trade/drone-scan", { productId: firstProduct()?.id }, "Drone scan complete");
    if (action === "drone-intervention") return mutate("/api/trade/drone-intervention", {}, "Field intervention assigned");
    return mutate("/api/ai/run", { type: action }, "AI action complete");
  }
  if (workflow === "ai") return mutate("/api/ai/run", { type: action }, "AI action complete");
  if (workflow === "map") {
    goSection("map");
    renderMap();
    return toast("Map focused");
  }
  if (workflow === "integrations") {
    if (action === "test-all") return mutate("/api/integrations/test-all", {}, "All providers tested");
    goSection("integrations");
    return toast("Provider cards ready");
  }
  if (workflow === "admin") {
    if (action === "health-check") return mutate("/api/admin/health-check", {}, "Admin health check complete");
    goSection("admin");
    return toast("Admin console ready");
  }
  if (workflow === "profile") {
    goSection("profile");
    return toast("Unified profile ready");
  }
}

function openGuidedIntakeSimulation() {
  const country = activeCountry();
  openWorkflowModal({
    eyebrow: "Guided telehealth intake",
    title: "Run patient intake simulation",
    summary: "Create a realistic intake record with consent, vitals, accessibility support, referral, follow-up, and provider evidence.",
    confirmLabel: "Run guided intake",
    path: "/api/health/intake-simulation",
    body: {
      patientName: "Amina Community Patient",
      needSummary: `${country.name} patient needs accessible telehealth intake, language support, and rural follow-up`,
      urgency: country.risk === "High" || country.heat >= 38 ? "Priority" : "Routine",
      preferredLanguage: languageCode(),
      accessibilityNeeds: "Captions, audio narration, large-print summary, caregiver handoff",
      contactMethod: "Voice callback plus SMS summary",
      caregiverName: "Community accessibility aide"
    },
    success: "Guided intake simulation complete",
    record: "Patient intake, consent, vitals, accessibility packet, referral, follow-up, and provider events",
    provider: "Telehealth, EHR, and notification provider evidence is recorded. Live providers dispatch when credentials are connected.",
    checklist: [
      { title: "Country context", detail: country.name, status: "live", label: country.risk },
      { title: "Language", detail: voiceLanguageName(), status: "ready", label: "Translate" },
      { title: "Accessibility", detail: "Captions, audio, large-print, caregiver, low-bandwidth", status: "ready", label: "Inclusive" },
      { title: "Audit trail", detail: "Creates multiple healthcare provider evidence events", status: "ready", label: "Evidence" }
    ]
  });
}

function bindDynamic() {
  $$("[data-persona]").forEach(button => {
    button.onclick = () => {
      selectedPersona = button.dataset.persona || "farmer";
      localStorage.setItem("agrinexusPersona", selectedPersona);
      renderSimpleHome();
      toast(`${button.textContent.trim()} view selected`);
    };
  });
  $$("[data-simple-command], [data-simple-section], [data-simple-pilot], [data-simple-demo], [data-simple-mission], [data-simple-action]").forEach(button => {
    button.onclick = runSimpleAction;
  });
  $$(".course").forEach(button => button.onclick = () => {
    const course = data.courses.find(item => item.id === button.dataset.course);
    if (course) {
      data.profile.activeCourseId = course.id;
      openWorkflowModal(workflowConfig("learning", "start", { dataset: {} }));
    }
  });
  $$(".course-card").forEach(card => card.onclick = event => {
    if (event.target.closest("button")) return;
    const course = data.courses.find(item => item.id === card.dataset.courseCard);
    if (course) {
      data.profile.activeCourseId = course.id;
      openWorkflowModal(workflowConfig("learning", "start", { dataset: {} }));
    }
  });
  $$(".track-card").forEach(card => card.onclick = () => {
    selectedLearningTrack = card.dataset.track;
    render();
    toast(selectedLearningTrack === "All" ? "Showing all tracks" : `${selectedLearningTrack} track selected`);
  });
  $$(".lesson-step").forEach(button => button.onclick = () => {
    const course = data.courses.find(item => item.id === button.dataset.course);
    if (course) openWorkflowModal(lessonWorkflowConfig(course, Number(button.dataset.moduleIndex)));
  });
  $$(".catalog-lesson").forEach(button => button.onclick = event => {
    event.stopPropagation();
    const course = data.courses.find(item => item.id === button.dataset.course);
    const enrollment = course ? courseEnrollment(course.id) : null;
    if (course) openWorkflowModal(lessonWorkflowConfig(course, enrollment?.activeModuleIndex || 0));
  });
  $$(".apply").forEach(button => button.onclick = () => openWorkflowModal(roleWorkflowConfig(button.dataset.role)));
  $$(".role-card").forEach(card => card.onclick = event => {
    if (event.target.closest("button")) return;
    openWorkflowModal(roleWorkflowConfig(card.dataset.roleCard));
  });
  $$(".order").forEach(button => button.onclick = () => openWorkflowModal(workflowConfig("trade", "order", { dataset: { productId: button.dataset.productId } })));
  $$(".product-card").forEach(card => card.onclick = event => {
    if (event.target.closest("button")) return;
    openWorkflowModal(workflowConfig("trade", "order", { dataset: { productId: card.dataset.productCard } }));
  });
  $$(".provider-test").forEach(button => button.onclick = () => openWorkflowModal(workflowConfig("integrations", "test-provider", { dataset: { providerId: button.dataset.provider } })));
  $$(".provider-card").forEach(card => card.onclick = event => {
    if (event.target.closest("button")) return;
    const providerId = card.querySelector("[data-provider]")?.dataset.provider;
    if (providerId) openWorkflowModal(workflowConfig("integrations", "test-provider", { dataset: { providerId } }));
  });
  $$("[data-module-test]").forEach(button => button.onclick = event => {
    event.stopPropagation();
    openWorkflowModal(workflowConfig("integrations", "test-module", { dataset: { module: button.dataset.moduleTest } }));
  });
  $$("[data-workflow]").forEach(element => element.onclick = event => {
    event.stopPropagation();
    runWorkflowAction(element.dataset.workflow, element.dataset.action, element);
  });
  $$(".dashboard-jump").forEach(button => button.onclick = event => {
    event.stopPropagation();
    goSection(button.dataset.jump);
  });
  $$(".dashboard-card").forEach(card => card.onclick = () => goSection(card.dataset.jump));
}

async function mutate(path, body, success) {
  try {
    data = await request(path, { method: "POST", body });
    render();
    toast(success);
  } catch (error) {
    toast(error.message);
  }
}

async function runAdminHealthCheckDirect() {
  const button = $("#adminHealthCheck");
  if (button) {
    button.disabled = true;
    button.setAttribute("aria-busy", "true");
    button.textContent = "Running...";
  }
  announce("Checking providers, modules, audit events, and readiness.");
  try {
    data = await request("/api/admin/health-check", { method: "POST", body: {} });
    render();
    goSection("admin", { instant: true });
    const message = `Health check complete. ${(data.profile.integrationEvents || []).filter(event => event.action === "admin.health_check").length} admin health event(s) are now recorded.`;
    setVoiceResponse(message);
    toast("Admin health check complete");
  } catch (error) {
    announce(error.message || "Health check failed.");
    toast(error.message || "Health check failed");
  } finally {
    const refreshedButton = $("#adminHealthCheck");
    if (refreshedButton) {
      refreshedButton.disabled = false;
      refreshedButton.removeAttribute("aria-busy");
      refreshedButton.textContent = "Run health check";
    }
  }
}

async function runLiveServiceCheck() {
  const button = $("#liveServiceCheckBtn");
  if (button) {
    button.disabled = true;
    button.setAttribute("aria-busy", "true");
    button.textContent = "Checking live services...";
  }
  try {
    data = await request("/api/production/live-service-check", { method: "POST", body: {} });
    render();
    goSection("admin", { instant: true });
    const result = data.liveServiceCheckResult || (data.profile.liveServiceChecks || [])[0];
    const message = `Live service check complete. ${result?.readyCount || 0}/${result?.total || 0} services are ready.`;
    setVoiceResponse(message, true);
    toast("Live service check complete");
  } catch (error) {
    toast(error.message || "Live service check failed");
  } finally {
    const refreshedButton = $("#liveServiceCheckBtn");
    if (refreshedButton) {
      refreshedButton.disabled = false;
      refreshedButton.removeAttribute("aria-busy");
      refreshedButton.textContent = "Run live service check";
    }
  }
}

function openHealthWorkflow(action, element = { dataset: {} }) {
  const config = workflowConfig("health", action, element);
  const status = $("#healthActionStatus");
  const title = config?.title || "Health workflow";
  if (!config) {
    if (status) status.textContent = "Health workflow could not be opened.";
    toast("Health workflow could not be opened");
    return;
  }
  if (status) status.textContent = `${title} opened. Review the details and confirm to run it.`;
  openWorkflowModal(config);
}

async function confirmPendingWorkflow() {
  if (!pendingWorkflow) return;
  const workflow = pendingWorkflow;
  const note = $("#workflowNote").value.trim();
  closeWorkflowModal();
  if (!workflow.path) {
    if (workflow.redirectSection) goSection(workflow.redirectSection);
    toast(workflow.success || "Workflow reviewed");
    return;
  }
  await mutate(workflow.path, { ...(workflow.body || {}), ...workflowFieldValues(), note }, workflow.success || "Workflow complete");
  if (workflow.redirectSection) goSection(workflow.redirectSection);
}

async function reviewLatestAi(decision) {
  const run = (data.profile.aiRuns || [])[0];
  if (!run) return toast("Run an AI workflow first");
  await mutate("/api/ai/review", { runId: run.id, decision, note: `${decision} from governance board` }, decision === "reject" ? "AI guidance rejected" : "AI guidance approved");
}

async function createAgentPlan() {
  const status = $("#agentActionStatus");
  const goal = $("#agentGoal")?.value?.trim() || "Create an AgriNexus cross-module plan.";
  if (status) status.textContent = "Creating supervised agent plan across learning, workforce, telehealth, trade, drones, maps, and provider evidence...";
  try {
    data = await request("/api/agent/plan", { method: "POST", body: { goal } });
    render();
    goSection("agent", { instant: true });
    const plan = (data.profile.agentPlans || [])[0];
    const message = `Agent plan created with ${plan?.steps?.length || 0} live workflow step(s). Review the plan, then click Execute approved plan.`;
    if ($("#agentActionStatus")) $("#agentActionStatus").textContent = message;
    setVoiceResponse(message);
    toast("Agent plan created");
  } catch (error) {
    if (status) status.textContent = error.message;
    toast(error.message);
  }
}

async function executeAgentPlan() {
  const status = $("#agentActionStatus");
  if (status) status.textContent = "Preparing approved agent execution...";
  try {
    let plan = (data.profile.agentPlans || [])[0];
    if (!plan) {
      const goal = $("#agentGoal")?.value?.trim() || "Create an AgriNexus cross-module plan.";
      data = await request("/api/agent/plan", { method: "POST", body: { goal } });
      plan = (data.profile.agentPlans || [])[0];
    }
    data = await request("/api/agent/execute", { method: "POST", body: { planId: plan.id, approved: true, note: "Approved from Agent Command Center" } });
    render();
    goSection("agent", { instant: true });
    const execution = (data.profile.agentExecutions || [])[0];
    const message = execution?.summary || "Agent plan executed across connected workflows.";
    if ($("#agentActionStatus")) $("#agentActionStatus").textContent = message;
    setVoiceResponse(message, true);
    toast("Agent plan executed");
  } catch (error) {
    if (status) status.textContent = error.message;
    toast(error.message);
  }
}

function setVoiceResponse(message, speak = false) {
  const token = ++voiceTranslationToken;
  lastVoiceResponse = message;
  const transcript = $("#voiceTranscript");
  if (transcript) transcript.textContent = message;
  const summary = $("#jarvisSummary");
  if (summary) summary.textContent = message;
  const globalStatus = $("#globalAssistantStatus");
  if (globalStatus) globalStatus.textContent = message;
  announce(message);
  toast(message);
  if (languageCode() !== "en") {
    request("/api/translate", {
      method: "POST",
      body: { text: message, sourceLanguage: "en", targetLanguage: languageCode(), context: "voice-response" }
    }).then(result => {
      if (token !== voiceTranslationToken) return;
      const translated = result.translationResult?.translatedText || message;
      lastVoiceResponse = translated;
      if (transcript) transcript.textContent = translated;
      if (summary) summary.textContent = translated;
      if (globalStatus) globalStatus.textContent = translated;
      announce(translated);
      if (speak || voiceFirstMode) speakVoiceResponse(translated);
    }).catch(() => {
      if (speak || voiceFirstMode) speakVoiceResponse(message);
    });
    return;
  }
  if (speak || voiceFirstMode) speakVoiceResponse(message);
}

async function createGovernmentBriefing() {
  const status = $("#agentActionStatus");
  if (status) status.textContent = "Creating government-ready briefing from current platform evidence...";
  try {
    data = await request("/api/agent/briefing", { method: "POST", body: { purpose: "government presentation" } });
    render();
    goSection("agent", { instant: true });
    const briefing = data.briefingResult || (data.profile.agentBriefings || [])[0];
    const message = briefing?.plainLanguageSummary || "Government briefing created.";
    if ($("#agentActionStatus")) $("#agentActionStatus").textContent = message;
    setVoiceResponse(message);
    toast("Government briefing created");
  } catch (error) {
    if (status) status.textContent = error.message;
    toast(error.message);
  }
}

function toggleVoiceFirstMode() {
  voiceFirstMode = !voiceFirstMode;
  voiceAutoRestart = voiceFirstMode;
  localStorage.setItem("agrinexusVoiceFirst", voiceFirstMode ? "on" : "off");
  ["#voiceFirstBtn", "#globalVoiceFirstBtn"].forEach(selector => {
    const button = $(selector);
    if (!button) return;
    button.classList.toggle("primary", voiceFirstMode);
    button.setAttribute("aria-pressed", String(voiceFirstMode));
  });
  setVoiceStatus(voiceFirstMode ? "voice-first" : "standby");
  setVoiceResponse(voiceFirstMode ? "Voice-first mode is on. Nexus will listen after each response when the browser allows it, and will read responses aloud." : "Voice-first mode is off.", voiceFirstMode);
  if (voiceFirstMode) startVoiceListening();
}

function chooseSpeechVoice(locale) {
  if (!("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices?.() || [];
  const language = locale.split("-")[0];
  return voices.find(voice => voice.lang === locale)
    || voices.find(voice => voice.lang?.toLowerCase().startsWith(`${language}-`))
    || null;
}

function speakVoiceResponse(textOverride) {
  const text = textOverride || lastVoiceResponse;
  voiceSpeaking = true;
  voiceAutoRestart = false;
  const updateVoiceOutputStatus = message => {
    const localStatus = $("#voicePlaybackStatus");
    const globalStatus = $("#globalVoiceOutputStatus");
    if (localStatus) localStatus.textContent = message;
    if (globalStatus) globalStatus.textContent = message;
  };
  const finishSpeaking = () => {
    voiceSpeaking = false;
    voiceAutoRestart = voiceFirstMode;
    if (voiceFirstMode && !voiceRecognition && !voiceStopRequested && !document.hidden) {
      setTimeout(() => {
        if (!voiceRecognition && voiceFirstMode && !voiceSpeaking && !voiceStopRequested) startVoiceListening();
      }, 700);
    }
  };
  const browserSpeak = () => {
    updateVoiceOutputStatus("OpenAI voice audio is not available, so robotic browser speech is turned off.");
    toast("OpenAI voice unavailable. Browser voice fallback is off.");
    finishSpeaking();
  };
  updateVoiceOutputStatus("Requesting OpenAI voice audio...");
  request("/api/voice/speak", { method: "POST", body: { text, language: languageCode(), locale: voiceLocale(), forceOpenAi: true, voice: "coral" } })
    .then(result => {
      const audioDataUrl = result.voiceResult?.audioDataUrl;
      if (result.voiceResult?.error) {
        updateVoiceOutputStatus(`OpenAI voice error: ${result.voiceResult.error}`);
        toast("OpenAI voice error. Check Render logs for /api/voice/speak.");
        finishSpeaking();
        return;
      }
      if (audioDataUrl) {
        const audio = new Audio(audioDataUrl);
        const voice = result.voiceResult?.voice || "OpenAI";
        const model = result.voiceResult?.model || "speech";
        updateVoiceOutputStatus(`Using OpenAI voice: ${voice} (${model}).`);
        audio.onended = finishSpeaking;
        audio.onerror = finishSpeaking;
        audio.play().catch(() => {
          updateVoiceOutputStatus("OpenAI audio was created, but the browser blocked playback. Click Read response again.");
          finishSpeaking();
        });
        return;
      }
      updateVoiceOutputStatus(`OpenAI voice returned no audio. Provider: ${result.voiceResult?.provider || "unknown"}.`);
      finishSpeaking();
    })
    .catch(error => {
      if (/sign in required/i.test(error.message || "")) {
        updateVoiceOutputStatus("Your session expired after redeploy. Sign in again, then press Read response.");
        toast("Please sign in again to use OpenAI voice.");
        finishSpeaking();
        return;
      }
      updateVoiceOutputStatus(`OpenAI voice unavailable: ${error.message || "speech request failed"}. Robotic browser voice is off.`);
      toast("OpenAI voice unavailable. Check Render environment values.");
      finishSpeaking();
    });
}

function setVoiceStatus(status) {
  const statusEl = $("#voiceStatus");
  if (statusEl) statusEl.textContent = status;
  const globalStatus = $("#globalAssistantStatus");
  if (globalStatus) globalStatus.textContent = status === "listening" ? "Listening now. Speak your request." : lastVoiceResponse || status;
  const jarvisMode = $("#jarvisMode");
  if (jarvisMode) jarvisMode.textContent = status;
  const panel = $(".voice-command");
  if (panel) panel.classList.toggle("voice-listening", status === "listening");
  const bar = $("#globalAssistantBar");
  if (bar) bar.classList.toggle("voice-listening", status === "listening");
}

function refreshMicSupport() {
  const supported = Boolean(window.SpeechRecognition || window.webkitSpeechRecognition);
  const secureEnough = window.isSecureContext || ["localhost", "127.0.0.1"].includes(location.hostname);
  const ready = supported && secureEnough;
  const languageName = voiceLanguageName();
  const locale = voiceLocale();
  const status = $("#globalMicStatus");
  if (status) {
    status.classList.toggle("ready", ready);
    status.classList.toggle("blocked", !ready);
    status.textContent = ready
      ? `Microphone ready for ${languageName} (${locale}). Click Mic, then allow browser access.`
      : `${languageName} voice input is not available in this browser. Type your request and click Run command.`;
  }
  ["#globalListenBtn", "#voiceListenBtn", "#jarvisListenBtn", "#workflowListenBtn"].forEach(selector => {
    const button = $(selector);
    if (!button) return;
    button.disabled = !ready;
    button.title = ready ? "Use your microphone to ask AgriNexus" : "Use typed command in this browser";
    if (!ready) {
      if (selector === "#globalListenBtn") button.textContent = "Mic unavailable";
      if (selector === "#voiceListenBtn") button.textContent = "Mic unavailable";
      if (selector === "#jarvisListenBtn") button.textContent = "Mic unavailable";
      return;
    }
    if (selector === "#globalListenBtn") button.textContent = voiceRecognition ? "Stop listening" : "Mic: Start listening";
    if (selector === "#voiceListenBtn") button.textContent = voiceRecognition ? "Stop listening" : "Mic: Start listening";
    if (selector === "#jarvisListenBtn") button.textContent = voiceRecognition ? "Stop" : "Listen";
  });
  const voiceFirstButton = $("#globalVoiceFirstBtn");
  if (voiceFirstButton) {
    voiceFirstButton.classList.toggle("primary", voiceFirstMode);
    voiceFirstButton.setAttribute("aria-pressed", String(voiceFirstMode));
  }
}

function cleanWakeCommand(command) {
  return String(command || "")
    .replace(/^\s*(hey\s+)?(nexus|jarvis|agrinexus|coach)\s*[,:\-]?\s*/i, "")
    .trim();
}

function setCommandInputs(command) {
  const value = command || "";
  if ($("#globalCommandInput")) $("#globalCommandInput").value = value;
  if ($("#voiceTextCommand")) $("#voiceTextCommand").value = value;
  if ($("#jarvisCommandInput")) $("#jarvisCommandInput").value = value;
  if ($("#workflowVoiceInput")) $("#workflowVoiceInput").value = value;
}

function openAskNexus() {
  const globalInput = $("#globalCommandInput");
  const globalBar = $("#globalAssistantBar");
  const panel = $("#jarvisPanel");
  const toggle = $("#jarvisToggle");
  const dockInput = $("#jarvisCommandInput");
  if (globalBar) globalBar.classList.remove("hidden");
  if (panel) panel.classList.add("hidden");
  if (toggle) toggle.setAttribute("aria-expanded", "true");
  globalBar?.classList.add("assistant-attention");
  setTimeout(() => {
    globalBar?.classList.remove("assistant-attention");
  }, 1600);
  if (globalBar && window.matchMedia("(max-width: 980px)").matches) {
    globalBar.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    globalBar?.scrollIntoView?.({ behavior: "smooth", block: "nearest" });
  }
  setTimeout(() => {
    (globalInput || dockInput)?.focus();
  }, 220);
  setVoiceResponse("Ask AgriNexus is open. Type a request or use the Mic button.");
  announce("Ask AgriNexus opened");
}

function closeAskNexus() {
  const panel = $("#jarvisPanel");
  const globalBar = $("#globalAssistantBar");
  const toggle = $("#jarvisToggle");
  if (panel) panel.classList.add("hidden");
  if (globalBar) globalBar.classList.add("hidden");
  if (toggle) toggle.setAttribute("aria-expanded", "false");
  setVoiceResponse("Ask AgriNexus closed.");
  announce("Ask AgriNexus closed");
}

function toggleAskNexus() {
  const globalBar = $("#globalAssistantBar");
  if (!globalBar || globalBar.classList.contains("hidden")) {
    openAskNexus();
  } else {
    closeAskNexus();
  }
}

function openWorkflowByVoice(workflow, action, response, dataset = {}) {
  const config = workflowConfig(workflow, action, { dataset });
  if (!config) {
    runWorkflowAction(workflow, action, { dataset });
    setVoiceResponse(response || "Workflow command sent.");
    return;
  }
  openWorkflowModal(config);
  setVoiceResponse(`${response || "Workflow staged."} Review the workflow, then say confirm or use the confirm button.`);
}

function voiceStatusSummary() {
  const readiness = data.admin?.readiness;
  const automation = data.automation;
  const plan = (data.profile.agentPlans || [])[0];
  return [
    `Current section: ${currentSectionId()}.`,
    `Production readiness: ${readiness?.readyCount || 0} of ${readiness?.total || 0}.`,
    `Automation readiness: ${automation?.readyCount || 0} of ${automation?.total || 5}.`,
    `Latest agent plan: ${plan?.status || "none"}.`
  ].join(" ");
}

function commandGoal(command) {
  return command
    .replace(/^(please\s+)?(create|build|make|generate)\s+(an?\s+)?(agent\s+)?plan( for| to)?/i, "")
    .replace(/^(please\s+)?plan( for| to)?/i, "")
    .trim();
}

async function handleVoiceCommand(rawCommand) {
  if (!data) return setVoiceResponse("Sign in first, then I can operate the platform.");
  const command = cleanWakeCommand(normalizeLocalizedVoiceCommand(rawCommand));
  const lower = command.toLowerCase();
  if (!lower) return setVoiceResponse("Give me a command, and I will route it.");

  if (!$("#workflowModal").classList.contains("hidden")) {
    if (lower === "read" || lower.includes("read this") || lower.includes("read workflow") || lower.includes("repeat")) {
      readWorkflowModal();
      return;
    }
    if (lower === "yes" || lower.includes("confirm") || lower.includes("approve") || lower.includes("yes do it") || lower.includes("do it") || lower.includes("submit")) {
      await confirmPendingWorkflow();
      setVoiceResponse("Confirmed. I completed the staged workflow.", true);
      return;
    }
    if (lower === "no" || lower.includes("cancel") || lower.includes("close") || lower.includes("stop")) {
      closeWorkflowModal();
      setVoiceResponse("Canceled the staged workflow.");
      return;
    }
  }

  const sectionAliases = {
    dashboard: ["dashboard", "home", "control room"],
    learning: ["learning", "training", "course", "courses", "development"],
    workforce: ["workforce", "jobs", "job", "role", "roles", "candidate"],
    health: ["health", "telehealth", "afayai", "care", "patient"],
    trade: ["trade", "agritrade", "agritech", "market", "wallet", "drone"],
    map: ["map", "route", "routes", "country"],
    agent: ["agent", "jarvis", "assistant", "voice", "command center"],
    integrations: ["integration", "integrations", "provider", "providers", "engines"],
    admin: ["admin", "readiness", "governance"],
    profile: ["profile", "record", "records"]
  };
  for (const [section, aliases] of Object.entries(sectionAliases)) {
    if ((lower.startsWith("open ") || lower.startsWith("go to ") || lower.startsWith("show ") || lower.startsWith("take me to ") || lower.startsWith("navigate to ")) && aliases.some(alias => lower.includes(alias))) {
      goSection(section);
      setVoiceResponse(`Opened ${section}.`, true);
      return;
    }
  }

  if (lower.includes("voice help") || lower.includes("command help") || lower.includes("show help") || lower.includes("what can you do")) {
    openVoiceHelp();
    setVoiceResponse("I can open modules, build captions, create audio guides, complete lessons, issue certificates, apply for roles, schedule shifts, start telehealth intake, connect a provider, capture vitals, contact a buyer, create orders, run drone scans, test engines, create plans, and read responses aloud.", true);
    return;
  }
  if (lower.includes("voice demo") || lower.includes("jarvis demo") || lower.includes("show voice") || lower.includes("show jarvis")) {
    goSection("agent");
    openAskNexus();
    setVoiceResponse("Jarvis-style voice demo is ready. Try saying: open telehealth, apply for that job, contact my buyer, test provider engines, or run full mission. Say yes to confirm any staged workflow.", true);
    return;
  }
  if (lower.includes("show reasoning") || lower.includes("show how you decide") || lower.includes("show agent thinking")) {
    agentReasoningVisible = true;
    localStorage.setItem("agrinexusReasoningVisible", "true");
    render();
    goSection("agent");
    setVoiceResponse("Agent reasoning is visible for demo mode. I will still operate by voice.", true);
    return;
  }
  if (lower.includes("hide reasoning") || lower.includes("hide agent thinking") || lower.includes("simple mode")) {
    agentReasoningVisible = false;
    localStorage.setItem("agrinexusReasoningVisible", "false");
    render();
    setVoiceResponse("Simple voice mode is on. I will keep reasoning in the background and talk you through the next action.", true);
    return;
  }
  if (lower.includes("turn on voice") || lower.includes("voice first") || lower.includes("hands free") || lower.includes("hands-free")) {
    if (!voiceFirstMode) toggleVoiceFirstMode();
    else setVoiceResponse("Voice-first mode is already on. Say a command when the microphone is listening.", true);
    return;
  }
  if (lower.includes("turn off voice") || lower.includes("stop voice first") || lower.includes("stop hands free") || lower.includes("stop hands-free")) {
    if (voiceFirstMode) toggleVoiceFirstMode();
    else setVoiceResponse("Voice-first mode is already off.");
    return;
  }
  if (lower.includes("status") || lower.includes("readiness") || lower.includes("what is left")) {
    setVoiceResponse(voiceStatusSummary(), true);
    return;
  }
  if (lower.includes("create") && lower.includes("plan") || lower.startsWith("plan ")) {
    const goal = commandGoal(command) || $("#agentGoal")?.value?.trim() || "Create an AgriNexus cross-module plan.";
    $("#agentGoal").value = goal;
    await createAgentPlan();
    setVoiceResponse("Agent plan created. Review it, then say execute approved plan when ready.", true);
    return;
  }
  if ((lower.includes("execute") || lower.includes("run")) && lower.includes("plan")) {
    await executeAgentPlan();
    setVoiceResponse("Approved agent plan executed across the connected workflow tools.", true);
    return;
  }
  if (lower.includes("wow") || lower.includes("investor demo")) {
    await runWowDemo();
    setVoiceResponse("WOW demo completed and evidence was added to the platform.", true);
    return;
  }
  if (lower.includes("standard demo")) {
    await runExecutiveDemo();
    setVoiceResponse("Standard demo completed.", true);
    return;
  }

  if (lower.includes("build caption") || lower.includes("caption lesson") || lower.includes("learning caption")) {
    goSection("learning");
    openWorkflowModal(learningAccessibilityWorkflowConfig("caption"));
    return setVoiceResponse("Caption workflow is ready. Say confirm to build captions or cancel to close it.", true);
  }
  if (lower.includes("audio guide") || lower.includes("screen reader") || lower.includes("visual guide")) {
    goSection("learning");
    openWorkflowModal(learningAccessibilityWorkflowConfig("visual"));
    return setVoiceResponse("Audio guide workflow is ready. Say confirm to create it or cancel to close it.", true);
  }
  if (lower.includes("offline packet") || lower.includes("low bandwidth") || lower.includes("send packet")) {
    goSection("learning");
    openWorkflowModal(learningAccessibilityWorkflowConfig("low-bandwidth"));
    return setVoiceResponse("Offline learning packet workflow is ready. Say confirm to prepare it or cancel to close it.", true);
  }
  if (lower.includes("start course") || lower.includes("begin course") || lower.includes("start training")) {
    goSection("learning");
    return openWorkflowByVoice("learning", "start", "Course start workflow is ready.");
  }
  if (lower.includes("complete lesson") || lower.includes("my lesson")) {
    goSection("learning");
    return openWorkflowByVoice("learning", "lesson", "Lesson completion workflow is ready.");
  }
  if (lower.includes("quiz")) {
    goSection("learning");
    $("#quizBtn")?.click();
    return setVoiceResponse("Quiz workflow opened.", true);
  }
  if (lower.includes("certificate")) {
    goSection("learning");
    $("#certBtn")?.click();
    return setVoiceResponse("Certificate workflow opened.", true);
  }

  if (lower.includes("build profile")) {
    goSection("workforce");
    return openWorkflowByVoice("workforce", "build-profile", "Workforce profile workflow is ready.");
  }
  if ((lower.includes("apply") || lower.includes("application")) && (lower.includes("job") || lower.includes("role") || lower.includes("workforce") || lower.includes("position"))) {
    goSection("workforce");
    return openWorkflowByVoice("workforce", "apply-role", "Role application workflow is ready.", { roleId: firstEligibleRole()?.id });
  }
  if (lower.includes("interview")) {
    goSection("workforce");
    return openWorkflowByVoice("workforce", "interview", "Interview scheduling workflow is ready.");
  }
  if (lower.includes("mentor")) {
    goSection("workforce");
    return openWorkflowByVoice("workforce", "mentor", "Mentor assignment workflow is ready.");
  }
  if (lower.includes("shift")) {
    goSection("workforce");
    return openWorkflowByVoice("workforce", "shift", "Shift scheduling workflow is ready.");
  }

  if (lower.includes("intake") || lower.includes("patient intake") || lower.includes("telehealth intake")) {
    goSection("health");
    return openWorkflowByVoice("health", "intake", "Telehealth intake workflow is ready.");
  }
  if (lower.includes("provider") || lower.includes("representative") || lower.includes("connect me") || lower.includes("reach a doctor") || lower.includes("reach a nurse")) {
    goSection("health");
    return openWorkflowByVoice("health", "representative", "Provider connection workflow is ready.");
  }
  if (lower.includes("safety")) {
    goSection("health");
    return openWorkflowByVoice("health", "safety", "Safety review workflow is ready.");
  }
  if (lower.includes("care plan") || lower.includes("careplan")) {
    goSection("health");
    return openWorkflowByVoice("health", "careplan", "Care plan workflow is ready.");
  }
  if (lower.includes("caption relay") || (lower.includes("caption") && lower.includes("health"))) {
    goSection("health");
    return openWorkflowByVoice("health", "caption", "Caption relay workflow is ready.");
  }
  if (lower.includes("caregiver")) {
    goSection("health");
    return openWorkflowByVoice("health", "caregiver", "Caregiver notification workflow is ready.");
  }
  if (lower.includes("consent")) {
    goSection("health");
    return openWorkflowByVoice("health", "consent", "Consent workflow is ready.");
  }
  if (lower.includes("vitals") || lower.includes("vital signs")) {
    goSection("health");
    return openWorkflowByVoice("health", "vitals", "Vitals capture workflow is ready.");
  }
  if (lower.includes("referral")) {
    goSection("health");
    return openWorkflowByVoice("health", "referral", "Referral workflow is ready.");
  }
  if (lower.includes("follow up") || lower.includes("follow-up") || lower.includes("callback")) {
    goSection("health");
    return openWorkflowByVoice("health", "followup", "Follow-up workflow is ready.");
  }
  if (lower.includes("accessibility") || lower.includes("accessible telehealth")) {
    goSection("health");
    return openWorkflowByVoice("health", "accessibility", "Accessible telehealth workflow is ready.");
  }

  if ((lower.includes("buyer") || lower.includes("customer")) && (lower.includes("speak") || lower.includes("talk") || lower.includes("call") || lower.includes("message") || lower.includes("contact"))) {
    goSection("trade");
    return openWorkflowByVoice("trade", "buyer-contact", "Buyer contact workflow is ready.", { productId: firstProduct()?.id });
  }
  if (lower.includes("flight plan") || lower.includes("drone mission") || lower.includes("plan drone")) {
    goSection("trade");
    return openWorkflowByVoice("trade", "drone-plan", "Drone mission workflow is ready.", { productId: firstProduct()?.id });
  }
  if (lower.includes("intervention") || lower.includes("field task") || lower.includes("assign field")) {
    goSection("trade");
    return openWorkflowByVoice("trade", "drone-intervention", "Drone field intervention workflow is ready.", { productId: firstProduct()?.id });
  }
  if (lower.includes("drone")) {
    goSection("trade");
    return openWorkflowByVoice("trade", "drone", "Drone field scan workflow is ready.", { productId: firstProduct()?.id });
  }
  if (lower.includes("create order") || lower.includes("buyer order") || lower.includes("sell crop") || lower.includes("sell my crop")) {
    goSection("trade");
    return openWorkflowByVoice("trade", "order", "Buyer order workflow is ready.", { productId: firstProduct()?.id });
  }
  if (lower.includes("advance order") || lower.includes("logistics") || lower.includes("ship")) {
    goSection("trade");
    return openWorkflowByVoice("trade", "advance", "Logistics advance workflow is ready.");
  }
  if (lower.includes("payment") || lower.includes("wallet") || lower.includes("m-pesa")) {
    goSection("trade");
    return openWorkflowByVoice("trade", "wallet", "Wallet payment workflow is ready.");
  }
  if (lower.includes("price")) return openWorkflowByVoice("ai", "price", "Price AI workflow is ready.");
  if (lower.includes("route risk") || lower.includes("assess route")) return openWorkflowByVoice("ai", "route", "Route risk AI workflow is ready.");
  if (lower.includes("command center")) return openWorkflowByVoice("ai", "command", "Command center AI workflow is ready.");
  if (lower.includes("copilot")) return openWorkflowByVoice("ai", "copilot", "Copilot workflow is ready.");
  if (lower.includes("tutor")) return openWorkflowByVoice("ai", "tutor", "AI tutor workflow is ready.");
  if (lower.includes("triage")) return openWorkflowByVoice("ai", "triage", "AI triage workflow is ready.");
  if (lower.includes("trade advisor")) return openWorkflowByVoice("ai", "trade-advisor", "Trade advisor workflow is ready.");
  if (lower.includes("workforce coach") || lower.includes("readiness gaps") || lower.includes("workforce gaps") || lower.includes("review gaps")) return openWorkflowByVoice("ai", "workforce-coach", "Workforce coach workflow is ready.");

  if (lower.includes("test") && (lower.includes("provider") || lower.includes("engine"))) {
    goSection("integrations");
    return openWorkflowByVoice("integrations", "test-all", "Provider test workflow is ready.");
  }
  if (lower.includes("health check")) {
    goSection("admin");
    return openWorkflowByVoice("admin", "health-check", "Admin health check workflow is ready.");
  }

  await runBackendAgentCommand(command);
}

async function runBackendAgentCommand(command) {
  try {
    data = await request("/api/agent/command", {
      method: "POST",
      body: {
        command,
        confirm: false,
        conversational: true,
        inputMode: "voice",
        outputMode: "voice",
        note: "Command submitted from Nexus Voice Assistant"
      }
    });
    render();
    const result = data.commandResult || {};
    if (result.metadata?.redirectSection) goSection(result.metadata.redirectSection);
    setVoiceResponse(result.response || "Command completed.", true);
  } catch (error) {
    setVoiceResponse(error.message || "Command failed.");
  }
}

async function answerGlobalConversation(answer) {
  setCommandInputs(answer);
  await handleVoiceCommand(answer);
}

async function runPresetCommand(event) {
  const command = event.currentTarget.dataset.commandPreset || "";
  if (!command) return;
  goSection("dashboard");
  setCommandInputs(command);
  await handleVoiceCommand(command);
}

async function runLocalPilotScenario(event) {
  const scenario = event.currentTarget.dataset.pilotScenario || "rural-access";
  await mutate("/api/pilot/run", { scenario }, "Local pilot evidence report created");
  goSection("dashboard");
}

async function runSimpleAction(eventOrButton) {
  const button = eventOrButton?.currentTarget || eventOrButton;
  const status = $("#simpleActionStatus");
  if (!button) return;
  const label = button.querySelector("strong")?.textContent || button.textContent.trim() || "Selected action";
  if (status) status.textContent = `${label} is running...`;
  if (button.dataset.simpleCommand) {
    setCommandInputs(button.dataset.simpleCommand);
    openAskNexus();
    await handleVoiceCommand(button.dataset.simpleCommand);
    if ($("#simpleActionStatus")) $("#simpleActionStatus").textContent = `${label} sent to Ask AgriNexus. Review the response or confirm the opened workflow.`;
    return;
  }
  if (button.dataset.simpleSection) {
    goSection(button.dataset.simpleSection);
    if (status) status.textContent = `${label} opened.`;
    return;
  }
  if (button.dataset.simplePilot) {
    await mutate("/api/pilot/run", { scenario: button.dataset.simplePilot }, "Local pilot evidence report created");
    goSection("dashboard");
    if ($("#simpleActionStatus")) $("#simpleActionStatus").textContent = `${label} completed and evidence was added below.`;
    return;
  }
  if (button.dataset.simpleDemo === "wow") {
    await runWowDemo();
    if ($("#simpleActionStatus")) $("#simpleActionStatus").textContent = `${label} completed. Review the demo storyboard and evidence.`;
    return;
  }
  if (button.dataset.simpleMission === "full") {
    await runJarvisFullMission();
    if ($("#simpleActionStatus")) $("#simpleActionStatus").textContent = `${label} sent to the agent command center. Review the plan, execution, and evidence.`;
    return;
  }
  const latest = (data.profile.agentCommands || [])[0];
  if (latest?.metadata?.redirectSection) goSection(latest.metadata.redirectSection);
  else goSection("dashboard");
  if (status) status.textContent = latest?.response || "Returned to the dashboard. Choose a workflow to continue.";
}

async function runVoiceTextCommand() {
  const input = $("#voiceTextCommand");
  await handleVoiceCommand(input?.value || "");
}

async function runGlobalCommand() {
  const input = $("#globalCommandInput");
  setCommandInputs(input?.value || "");
  await handleVoiceCommand(input?.value || "");
}

async function runJarvisCommand() {
  const input = $("#jarvisCommandInput");
  const command = input?.value || "";
  setCommandInputs(command);
  await handleVoiceCommand(command);
}

async function runWorkflowVoiceResponse() {
  const input = $("#workflowVoiceInput");
  const command = input?.value || "";
  setCommandInputs(command);
  await handleVoiceCommand(command);
}

async function runJarvisFullMission() {
  const mission = "Nexus, run full mission for learning, workforce, accessible telehealth, trade, drone, maps, AI, translation, and provider evidence";
  setCommandInputs(mission);
  await handleVoiceCommand(mission);
}

async function startFarmerAutopilotMission() {
  const mission = "AgriNexus autopilot, help this farmer get from crop problem to buyer payment";
  setCommandInputs(mission);
  openAskNexus();
  await handleVoiceCommand(mission);
}

async function resumeNextMission() {
  const plan = (data.profile.agentPlans || []).find(item => item.status === "awaiting-approval") || (data.profile.agentPlans || [])[0];
  if (!plan) {
    setVoiceResponse("No mission is waiting. Start an autopilot mission first.", true);
    return;
  }
  await executeAgentPlan();
}

function startVoiceListening() {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition) {
    refreshMicSupport();
    setVoiceResponse("Microphone voice input is not available in this browser. Type your request in Ask AgriNexus and click Run command.");
    return;
  }
  if (voiceRecognition) {
    voiceStopRequested = true;
    voiceRecognition.stop();
    voiceRecognition = null;
    setVoiceStatus("standby");
    refreshMicSupport();
    return;
  }
  voiceStopRequested = false;
  voiceRecognition = new Recognition();
  voiceRecognition.lang = voiceLocale();
  voiceRecognition.interimResults = false;
  voiceRecognition.continuous = false;
  voiceRecognition.onstart = () => {
    setVoiceStatus("listening");
    const status = $("#globalMicStatus");
    if (status) status.textContent = `Listening in ${voiceLanguageName()} (${voiceLocale()}). Say a command like "Nexus, start telehealth intake."`;
    refreshMicSupport();
  };
  voiceRecognition.onerror = event => {
    setVoiceStatus("standby");
    const message = event.error === "not-allowed"
      ? "Microphone permission was blocked. Click the browser permission icon near the address bar and allow microphone access, or type your request."
      : `Voice input stopped: ${event.error || "microphone unavailable"}`;
    setVoiceResponse(message);
    voiceStopRequested = true;
    voiceRecognition = null;
    refreshMicSupport();
  };
  voiceRecognition.onend = () => {
    setVoiceStatus(voiceFirstMode ? "voice-first" : "standby");
    voiceRecognition = null;
    refreshMicSupport();
    if (voiceFirstMode && voiceAutoRestart && !voiceSpeaking && !voiceStopRequested && !document.hidden) {
      setTimeout(() => {
        if (!voiceRecognition && voiceFirstMode && voiceAutoRestart && !voiceSpeaking) startVoiceListening();
      }, 900);
    }
  };
  voiceRecognition.onresult = event => {
    const command = event.results?.[0]?.[0]?.transcript || "";
    setCommandInputs(command);
    setVoiceResponse(`Heard: ${command}`);
    request("/api/voice/transcribe", { method: "POST", body: { transcript: command, language: languageCode(), locale: voiceLocale() } }).catch(() => {});
    handleVoiceCommand(command);
  };
  voiceRecognition.start();
}

async function sendModuleNotification(moduleName) {
  await mutate("/api/notifications/send", {
    module: moduleName,
    channel: "workflow",
    message: `${moduleName} workflow update sent for operator review.`
  }, `${moduleName} notification sent`);
}

async function runExecutiveDemo() {
  await mutate("/api/demo/run", {}, "Full platform demo completed");
}

async function runWowDemo() {
  await mutate("/api/demo/wow", {}, "WOW investor demo completed");
  goSection("dashboard");
}

function bindStatic() {
  document.addEventListener("click", event => {
    if (event.target.closest("#adminHealthCheck")) {
      event.preventDefault();
      event.stopPropagation();
      runAdminHealthCheckDirect();
      return;
    }
    const workflowButton = event.target.closest("[data-workflow][data-action]");
    if (workflowButton) {
      event.preventDefault();
      event.stopPropagation();
      const config = workflowConfig(workflowButton.dataset.workflow, workflowButton.dataset.action, workflowButton);
      if (config) openWorkflowModal(config);
      return;
    }
    const moduleTestButton = event.target.closest("[data-module-test]");
    if (moduleTestButton) {
      event.preventDefault();
      event.stopPropagation();
      openWorkflowModal(workflowConfig("integrations", "test-module", { dataset: { module: moduleTestButton.dataset.moduleTest } }));
      return;
    }
    const providerTestButton = event.target.closest(".provider-test");
    if (providerTestButton) {
      event.preventDefault();
      event.stopPropagation();
      const providerId = providerTestButton.dataset.provider;
      const provider = data.providers.find(item => item.id === providerId);
      const status = $("#aiConsoleStatus");
      if (status && providerId === "openai") {
        status.textContent = `${provider?.name || "OpenAI"} provider test opened. Confirm to test the live AI engine and record evidence.`;
      }
      openWorkflowModal(workflowConfig("integrations", "test-provider", { dataset: { providerId } }));
      return;
    }
    const providerChip = event.target.closest("[data-provider]");
    if (providerChip && !providerChip.classList.contains("provider-test")) {
      event.preventDefault();
      event.stopPropagation();
      openWorkflowModal(workflowConfig("integrations", "test-provider", { dataset: { providerId: providerChip.dataset.provider } }));
      return;
    }
    const providerCard = event.target.closest(".provider-card");
    if (providerCard && !event.target.closest("button")) {
      event.preventDefault();
      event.stopPropagation();
      const providerId = providerCard.querySelector("[data-provider]")?.dataset.provider;
      if (providerId) {
        openWorkflowModal(workflowConfig("integrations", "test-provider", { dataset: { providerId } }));
      }
      return;
    }
    if (event.target.closest("#aiConsoleRun")) {
      event.preventDefault();
      event.stopPropagation();
      const aiType = $("#aiConsoleType")?.value || "command";
      const status = $("#aiConsoleStatus");
      if (status) status.textContent = `${aiType} AI workflow opened. Confirm to run it through the configured engine.`;
      openWorkflowModal({
        ...workflowConfig("ai", aiType, { dataset: {} }),
        title: `Run AI test: ${aiType}`,
        confirmLabel: "Run AI test",
        success: "AI test complete"
      });
      return;
    }
    const learningAccessButton = event.target.closest("[data-learning-access]");
    if (learningAccessButton) {
      event.preventDefault();
      event.stopPropagation();
      openWorkflowModal(learningAccessibilityWorkflowConfig(learningAccessButton.dataset.learningAccess));
      return;
    }
    const workforceButton = event.target.closest("[data-workforce]");
    if (workforceButton) {
      event.preventDefault();
      event.stopPropagation();
      openWorkflowModal(workflowConfig("workforce", workforceButton.dataset.workforce, { dataset: {} }));
      return;
    }
    const healthButton = event.target.closest("[data-health]");
    if (healthButton) {
      event.preventDefault();
      event.stopPropagation();
      openHealthWorkflow(healthButton.dataset.health, healthButton);
      return;
    }
    const payButton = event.target.closest("[data-pay]");
    if (payButton) {
      event.preventDefault();
      event.stopPropagation();
      const [provider, amount] = payButton.dataset.pay.split(":");
      openWorkflowModal({
        ...workflowConfig("trade", "wallet", { dataset: {} }),
        body: { provider, amount: Number(amount) },
        confirmLabel: `${provider} ${Number(amount) >= 0 ? "+" : ""}${amount}`
      });
      return;
    }
    const courseButton = event.target.closest(".course");
    if (courseButton) {
      event.preventDefault();
      event.stopPropagation();
      const course = data.courses.find(item => item.id === courseButton.dataset.course);
      if (course) {
        data.profile.activeCourseId = course.id;
        openWorkflowModal(workflowConfig("learning", "start", { dataset: {} }));
      }
      return;
    }
    const lessonButton = event.target.closest(".lesson-step");
    if (lessonButton) {
      event.preventDefault();
      event.stopPropagation();
      const course = data.courses.find(item => item.id === lessonButton.dataset.course);
      if (course) openWorkflowModal(lessonWorkflowConfig(course, Number(lessonButton.dataset.moduleIndex)));
      return;
    }
    const roleButton = event.target.closest(".apply");
    if (roleButton) {
      event.preventDefault();
      event.stopPropagation();
      openWorkflowModal(roleWorkflowConfig(roleButton.dataset.role));
      return;
    }
    const orderButton = event.target.closest(".order");
    if (orderButton) {
      event.preventDefault();
      event.stopPropagation();
      openWorkflowModal(workflowConfig("trade", "order", { dataset: { productId: orderButton.dataset.productId } }));
      return;
    }
    const jumpButton = event.target.closest("[data-jump]");
    if (jumpButton) {
      event.preventDefault();
      event.stopPropagation();
      goSection(jumpButton.dataset.jump);
      return;
    }
    const aiReviewButton = event.target.closest("[data-ai-review]");
    if (aiReviewButton) {
      event.preventDefault();
      event.stopPropagation();
      reviewLatestAi(aiReviewButton.dataset.aiReview);
      return;
    }
    const notifyButton = event.target.closest("[data-notify]");
    if (notifyButton) {
      event.preventDefault();
      event.stopPropagation();
      sendModuleNotification(notifyButton.dataset.notify);
      return;
    }
    const courseCard = event.target.closest(".course-card");
    if (courseCard) {
      event.preventDefault();
      event.stopPropagation();
      const course = data.courses.find(item => item.id === courseCard.dataset.courseCard);
      if (course) {
        data.profile.activeCourseId = course.id;
        openWorkflowModal(workflowConfig("learning", "start", { dataset: {} }));
      }
      return;
    }
    const trackCard = event.target.closest(".track-card");
    if (trackCard) {
      event.preventDefault();
      event.stopPropagation();
      selectedLearningTrack = trackCard.dataset.track;
      render();
      toast(selectedLearningTrack === "All" ? "Showing all tracks" : `${selectedLearningTrack} track selected`);
      return;
    }
    const roleCard = event.target.closest(".role-card");
    if (roleCard) {
      event.preventDefault();
      event.stopPropagation();
      openWorkflowModal(roleWorkflowConfig(roleCard.dataset.roleCard));
      return;
    }
    const productCard = event.target.closest(".product-card");
    if (productCard) {
      event.preventDefault();
      event.stopPropagation();
      openWorkflowModal(workflowConfig("trade", "order", { dataset: { productId: productCard.dataset.productCard } }));
      return;
    }
    const aiButton = event.target.closest("[data-ai]");
    if (aiButton) {
      event.preventDefault();
      event.stopPropagation();
      const status = $("#copilotActionStatus");
      if (status && aiButton.dataset.ai === "copilot") status.textContent = "Copilot workflow opened. Confirm to create AI guidance and evidence.";
      openWorkflowModal(workflowConfig("ai", aiButton.dataset.ai, { dataset: {} }));
      return;
    }
    const mapButton = event.target.closest("[data-map-action]");
    if (mapButton) {
      event.preventDefault();
      event.stopPropagation();
      const action = mapButton.dataset.mapAction;
      openWorkflowModal(workflowConfig(action === "focus" ? "map" : "ai", action, { dataset: {} }));
      return;
    }
    const personaButton = event.target.closest("[data-persona]");
    if (personaButton) {
      event.preventDefault();
      event.stopPropagation();
      selectedPersona = personaButton.dataset.persona || "farmer";
      localStorage.setItem("agrinexusPersona", selectedPersona);
      renderSimpleHome();
      const status = $("#simpleActionStatus");
      if (status) status.textContent = `${personaButton.textContent.trim()} actions are ready. Choose one below.`;
      toast(`${personaButton.textContent.trim()} view selected`);
      return;
    }
    const simpleButton = event.target.closest("[data-simple-command], [data-simple-section], [data-simple-pilot], [data-simple-demo], [data-simple-mission], [data-simple-action]");
    if (simpleButton) {
      event.preventDefault();
      event.stopPropagation();
      runSimpleAction(simpleButton);
      return;
    }
    if (event.target.closest("#workspaceAskBtn")) {
      event.preventDefault();
      event.stopPropagation();
      openAskNexus();
      return;
    }
    if (event.target.closest("#globalCloseBtn") || event.target.closest("#jarvisCloseBtn")) {
      event.preventDefault();
      event.stopPropagation();
      closeAskNexus();
      return;
    }
    if (event.target.closest("#globalListenBtn") || event.target.closest("#jarvisListenBtn")) {
      event.preventDefault();
      event.stopPropagation();
      startVoiceListening();
      return;
    }
    if (event.target.closest("#jarvisRunBtn")) {
      event.preventDefault();
      event.stopPropagation();
      runJarvisCommand();
      return;
    }
    if (event.target.closest("#globalRunBtn")) {
      event.preventDefault();
      event.stopPropagation();
      runGlobalCommand();
      return;
    }
    if (event.target.closest("#globalVoiceFirstBtn")) {
      event.preventDefault();
      event.stopPropagation();
      toggleVoiceFirstMode();
      return;
    }
    if (event.target.closest("#globalYesBtn")) {
      event.preventDefault();
      event.stopPropagation();
      answerGlobalConversation("yes");
      return;
    }
    if (event.target.closest("#globalNoBtn")) {
      event.preventDefault();
      event.stopPropagation();
      if (!$("#workflowModal")?.classList.contains("hidden")) {
        answerGlobalConversation("no");
      } else {
        closeAskNexus();
      }
      return;
    }
    if (event.target.closest("#globalReadBtn") || event.target.closest("#jarvisReadBtn")) {
      event.preventDefault();
      event.stopPropagation();
      speakVoiceResponse();
      return;
    }
    if (event.target.closest("#globalInstallBtn")) {
      event.preventDefault();
      event.stopPropagation();
      installAgriNexusApp();
      return;
    }
    if (event.target.closest("#globalVoiceHelpBtn") || event.target.closest("#voiceHelpBtn")) {
      event.preventDefault();
      event.stopPropagation();
      openVoiceHelp();
      return;
    }
    if (event.target.closest("#voiceHelpCloseBtn")) {
      event.preventDefault();
      event.stopPropagation();
      closeVoiceHelp();
      return;
    }
    const voiceExampleButton = event.target.closest("[data-voice-example]");
    if (voiceExampleButton) {
      event.preventDefault();
      event.stopPropagation();
      runVoiceExample(voiceExampleButton);
      return;
    }
    if (event.target.closest("#jarvisMissionBtn") || event.target.closest("#agentMissionBtn")) {
      event.preventDefault();
      event.stopPropagation();
      runJarvisFullMission();
      return;
    }
    if (event.target.closest("#workflowConfirm")) {
      event.preventDefault();
      event.stopPropagation();
      confirmPendingWorkflow();
      return;
    }
    if (event.target.closest("#workflowRunVoiceBtn")) {
      event.preventDefault();
      event.stopPropagation();
      runWorkflowVoiceResponse();
      return;
    }
    if (event.target.closest("#workflowReadBtn")) {
      event.preventDefault();
      event.stopPropagation();
      readWorkflowModal();
      return;
    }
    if (event.target.closest("#workflowListenBtn")) {
      event.preventDefault();
      event.stopPropagation();
      startVoiceListening();
      return;
    }
    if (event.target.closest("[data-close-workflow]")) {
      event.preventDefault();
      event.stopPropagation();
      closeWorkflowModal();
    }
  }, true);

  document.addEventListener("keydown", event => {
    if (event.target?.id === "workflowVoiceInput" && event.key === "Enter") {
      event.preventDefault();
      runWorkflowVoiceResponse();
    }
  });

  window.addEventListener("hashchange", () => {
    goSection(sectionFromHash(), { updateHash: false, instant: true });
  });

  $("#topSettingsToggle").onclick = () => {
    const panel = $("#topActions");
    const open = !panel.classList.contains("open");
    panel.classList.toggle("open", open);
    $("#topSettingsToggle").setAttribute("aria-expanded", String(open));
    announce(open ? "Settings opened" : "Settings closed");
  };

  $("#loginForm").addEventListener("submit", async event => {
    event.preventDefault();
    try {
      data = await request("/api/login", { method: "POST", body: { email: $("#email").value, password: $("#password").value } });
      render();
      toast("Signed in");
    } catch (error) {
      $("#loginMessage").textContent = error.message;
    }
  });

  $("#logoutBtn").onclick = async () => {
    await request("/api/logout", { method: "POST" });
    location.reload();
  };

  $("#countrySelect").onchange = async event => {
    const value = event.target.value;
    if (value.startsWith("language:")) {
      const language = value.replace("language:", "");
      await mutate("/api/user/language", { language }, platformCopy[language]?.languageToast || "Platform language updated");
      return;
    }
    const countryId = value;
    const language = countryLanguageMap[countryId] || languageCode();
    try {
      data = await request("/api/context", { method: "POST", body: { countryId } });
      data.user.language = language;
      data.profile.accessibilityProfile = {
        ...(data.profile.accessibilityProfile || {}),
        language
      };
      render();
      toast(platformCopy[language]?.languageToast || "Country and language context updated");
    } catch (error) {
      toast(error.message);
    }
  };

  $$(".nav").forEach(button => {
    button.onclick = () => goSection(button.dataset.section, { instant: true });
  });
  $("#workspaceAskBtn").onclick = openAskNexus;
  $("#accessibilityToggle").onclick = () => {
    const panel = $("#accessibilityPanel");
    const willOpen = panel.classList.contains("hidden");
    panel.classList.toggle("hidden", !willOpen);
    $("#accessibilityToggle").setAttribute("aria-expanded", String(willOpen));
    if (willOpen) panel.querySelector("button")?.focus();
    announce(willOpen ? "Accessibility tools opened" : "Accessibility tools closed");
  };
  $$("[data-accessibility]").forEach(button => {
    button.onclick = () => toggleAccessibilityPref(button.dataset.accessibility);
  });

  $$(".language-option").forEach(button => {
    button.onclick = () => mutate("/api/user/language", { language: button.dataset.language }, platformText().languageToast);
  });
  const platformLanguageSelect = $("#platformLanguageSelect");
  if (platformLanguageSelect) {
    platformLanguageSelect.onchange = event => {
      mutate("/api/user/language", { language: event.target.value }, platformCopy[event.target.value]?.languageToast || "Platform language updated");
    };
  }

  $("#quizBtn").onclick = () => openWorkflowModal({
    eyebrow: "Learning assessment",
    title: "Complete quiz",
    summary: "Confirm assessment readiness before quiz score, progress, readiness, and activity state update.",
    confirmLabel: "Complete quiz",
    path: "/api/learning/quiz",
    body: {},
    success: "Quiz completed",
    record: "Quiz score, enrollment progress, learning hours, readiness, and activity feed",
    provider: "Certificate provider can issue credential after quiz progress exists.",
    checklist: [
      { title: "Active course", detail: translatedCourse(activeCourse()).title, status: "live", label: courseStatus(activeCourse()) },
      { title: "Current score", detail: `${data.profile.quizScore || 0}`, status: data.profile.quizScore ? "ready" : "pending", label: "Score" },
      { title: "Credential path", detail: "A quiz score unlocks certificate issue workflow.", status: "ready", label: "Next" }
    ]
  });
  $("#certBtn").onclick = () => openWorkflowModal({
    eyebrow: "Credential workflow",
    title: "Issue certificate",
    summary: "Confirm the credential issue and provider evidence before adding a certificate to the learner profile.",
    confirmLabel: "Issue certificate",
    path: "/api/learning/certificate",
    body: {},
    success: "Certificate issued",
    record: "Certificate number, completed course, readiness, provider event, and activity feed",
    provider: "Learning certificate provider records certificate.issued.",
    checklist: [
      { title: "Active course", detail: translatedCourse(activeCourse()).title, status: "live", label: courseStatus(activeCourse()) },
      { title: "Quiz score", detail: `${data.profile.quizScore || 0}`, status: data.profile.quizScore ? "ready" : "blocked", label: data.profile.quizScore ? "Ready" : "Quiz first" },
      { title: "Certificate count", detail: `${data.profile.certificates?.length || 0} certificate(s) already issued`, status: "ready", label: "Record" }
    ]
  });
  $("#startActiveCourseBtn").onclick = () => {
    const course = activeCourse();
    if (course) openWorkflowModal(workflowConfig("learning", "start", { dataset: {} }));
  };
  $("#completeLessonBtn").onclick = () => {
    const course = activeCourse();
    const enrollment = course ? courseEnrollment(course.id) : null;
    if (course) openWorkflowModal(lessonWorkflowConfig(course, enrollment?.activeModuleIndex || 0));
  };
  $$("[data-learning-access]").forEach(button => button.onclick = () => openWorkflowModal(learningAccessibilityWorkflowConfig(button.dataset.learningAccess)));
  $$("[data-workforce]").forEach(button => button.onclick = () => openWorkflowModal(workflowConfig("workforce", button.dataset.workforce, { dataset: {} })));
  $$("[data-health]").forEach(button => button.onclick = () => openHealthWorkflow(button.dataset.health, button));
  $("#runIntakeSimulationBtn").onclick = openGuidedIntakeSimulation;
  $$(".order").forEach(button => button.onclick = () => openWorkflowModal(workflowConfig("trade", "order", { dataset: { productId: button.dataset.productId } })));
  $("#advanceOrderBtn").onclick = () => openWorkflowModal(workflowConfig("trade", "advance", { dataset: {} }));
  $("#droneMissionBtn").onclick = () => openWorkflowModal(workflowConfig("trade", "drone-plan", { dataset: { productId: firstProduct()?.id } }));
  $("#droneScanBtn").onclick = () => openWorkflowModal(workflowConfig("trade", "drone", { dataset: { productId: firstProduct()?.id } }));
  $("#droneInterventionBtn").onclick = () => openWorkflowModal(workflowConfig("trade", "drone-intervention", { dataset: { productId: firstProduct()?.id } }));
  $$("[data-pay]").forEach(button => button.onclick = () => {
    const [provider, amount] = button.dataset.pay.split(":");
    openWorkflowModal({
      ...workflowConfig("trade", "wallet", { dataset: {} }),
      body: { provider, amount: Number(amount) },
      confirmLabel: `${provider} ${Number(amount) >= 0 ? "+" : ""}${amount}`
    });
  });
  $$("[data-ai]").forEach(button => button.onclick = () => openWorkflowModal(workflowConfig("ai", button.dataset.ai, { dataset: {} })));
  $("#aiConsoleRun").onclick = () => openWorkflowModal({
    ...workflowConfig("ai", $("#aiConsoleType").value, { dataset: {} }),
    title: `Run AI test: ${$("#aiConsoleType").value}`,
    confirmLabel: "Run AI test",
    success: "AI test complete"
  });
  $("#billingCheckoutBtn").onclick = () => openWorkflowModal({
    eyebrow: "Billing workflow",
    title: "Test subscription checkout",
    summary: "Confirm the billing provider workflow before creating a subscription checkout event.",
    confirmLabel: "Test billing checkout",
    path: "/api/billing/checkout",
    body: { plan: "standard" },
    success: "Billing workflow tested",
    record: "Billing provider event, admin audit trail, and subscription readiness evidence",
    provider: "Live checkout requires BILLING_PROVIDER, BILLING_WEBHOOK_URL, BILLING_PROVIDER_API_KEY, and BILLING_PRICE_ID.",
    checklist: [
      { title: "Billing provider", detail: data.providers.find(item => item.id === "billing-subscriptions")?.detail || "Billing provider not configured", status: data.providers.find(item => item.id === "billing-subscriptions")?.status === "connected" ? "ready" : "pending", label: "Billing" },
      { title: "Legal pages", detail: "Terms, Privacy, and Refund Policy are available from Admin.", status: "ready", label: "Legal" },
      { title: "Subscriber path", detail: "Checkout event is recorded for admin review.", status: "ready", label: "Audit" }
    ]
  });
  $("#startOnboardingBtn").onclick = () => openWorkflowModal(workflowConfig("onboarding", "start", { dataset: {} }));
  $("#openSupportBtn").onclick = () => openWorkflowModal(workflowConfig("support", "ticket", { dataset: {} }));
  $("#inviteSubscriberBtn").onclick = () => openWorkflowModal(workflowConfig("subscriber", "invite", { dataset: {} }));
  $("#agentPlanBtn").onclick = createAgentPlan;
  $("#agentExecuteBtn").onclick = executeAgentPlan;
  $("#agentBriefingBtn").onclick = createGovernmentBriefing;
  $("#agentMissionBtn").onclick = runJarvisFullMission;
  $("#missionResumeBtn").onclick = resumeNextMission;
  $("#missionAutopilotBtn").onclick = startFarmerAutopilotMission;
  $("#voiceListenBtn").onclick = startVoiceListening;
  $("#voiceRunBtn").onclick = runVoiceTextCommand;
  $("#voiceFirstBtn").onclick = toggleVoiceFirstMode;
  $("#voiceSpeakBtn").onclick = speakVoiceResponse;
  $("#voiceHelpBtn").onclick = openVoiceHelp;
  $("#voiceTextCommand").addEventListener("keydown", event => {
    if (event.key === "Enter") runVoiceTextCommand();
  });
  $("#globalListenBtn").onclick = startVoiceListening;
  $("#globalRunBtn").onclick = runGlobalCommand;
  $("#globalVoiceFirstBtn").onclick = toggleVoiceFirstMode;
  $("#globalYesBtn").onclick = () => answerGlobalConversation("yes");
  $("#globalNoBtn").onclick = () => answerGlobalConversation("no");
  $("#globalReadBtn").onclick = speakVoiceResponse;
  $("#globalVoiceHelpBtn").onclick = openVoiceHelp;
  $("#voiceHelpCloseBtn").onclick = closeVoiceHelp;
  $("#globalInstallBtn").onclick = installAgriNexusApp;
  $("#globalCloseBtn").onclick = closeAskNexus;
  $("#globalCommandInput").addEventListener("keydown", event => {
    if (event.key === "Enter") runGlobalCommand();
  });
  refreshMicSupport();
  $("#jarvisToggle").onclick = toggleAskNexus;
  $("#jarvisCloseBtn").onclick = closeAskNexus;
  $("#jarvisListenBtn").onclick = startVoiceListening;
  $("#jarvisRunBtn").onclick = runJarvisCommand;
  $("#jarvisMissionBtn").onclick = runJarvisFullMission;
  $("#jarvisReadBtn").onclick = speakVoiceResponse;
  $("#jarvisCommandInput").addEventListener("keydown", event => {
    if (event.key === "Enter") runJarvisCommand();
  });
  $$("[data-command-preset]").forEach(button => {
    button.onclick = runPresetCommand;
  });
  $$("[data-pilot-scenario]").forEach(button => {
    button.onclick = runLocalPilotScenario;
  });
  const adminHealthCheck = $("#adminHealthCheck");
  if (adminHealthCheck) adminHealthCheck.onclick = runAdminHealthCheckDirect;
  const liveServiceCheck = $("#liveServiceCheckBtn");
  if (liveServiceCheck) liveServiceCheck.onclick = runLiveServiceCheck;
  $("#demoRunBtn").onclick = runExecutiveDemo;
  $("#wowDemoBtn").onclick = runWowDemo;
  $$("[data-ai-review]").forEach(button => button.onclick = () => reviewLatestAi(button.dataset.aiReview));
  $$("[data-notify]").forEach(button => button.onclick = () => sendModuleNotification(button.dataset.notify));
  $("#workflowClose").onclick = closeWorkflowModal;
  $("#workflowCancel").onclick = closeWorkflowModal;
  $("#workflowModal").onclick = event => {
    if (event.target.id === "workflowModal") closeWorkflowModal();
  };
  document.addEventListener("keydown", event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      openAskNexus();
    }
    if (event.key === "Escape" && !$("#workflowModal").classList.contains("hidden")) {
      closeWorkflowModal();
      return;
    }
    if (event.key === "Escape" && (!$("#jarvisPanel")?.classList.contains("hidden") || !$("#globalAssistantBar")?.classList.contains("hidden"))) {
      closeAskNexus();
      return;
    }
    if (event.key === "Tab" && !$("#workflowModal").classList.contains("hidden")) {
      const focusable = $$("#workflowModal button, #workflowModal input, #workflowModal select, #workflowModal textarea").filter(item => !item.disabled && item.offsetParent !== null);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
}

async function boot() {
  registerWebApp();
  bindStatic();
  try {
    data = await request("/api/state");
    render();
  } catch {
    $("#loginView").classList.remove("hidden");
  }
}

boot();
