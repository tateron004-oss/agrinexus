const crypto = require("node:crypto");
const productionRuntime = require("./nexusProductionRuntime");
const mediaMode = require("./nexusMediaMode");
const { safeText } = require("./nexusRuntimeAudit");

const PROVIDER_CONNECTORS = [
  "telehealth provider connector",
  "pharmacy provider connector",
  "mobile clinic provider connector",
  "community health worker connector",
  "agriculture expert connector",
  "workforce partner connector",
  "marketplace inquiry connector",
  "generic HTTP/webhook connector"
];

const MATRIX = [
  ["agentic brain", "Complete and locally executable"],
  ["voice command runtime", "Complete and locally executable"],
  ["task manager", "Complete and locally executable"],
  ["case memory", "Complete and locally executable"],
  ["chronic disease DM/obesity/HTN support", "Complete and locally executable"],
  ["RPM manual readings", "Complete and locally executable"],
  ["RTM participation context", "Complete and locally executable"],
  ["provider registry", "Complete and live-executable when configured"],
  ["provider/admin queue", "Complete and locally executable"],
  ["telehealth connector", "Complete but waiting for credentials/provider"],
  ["pharmacy connector", "Complete but waiting for credentials/provider"],
  ["mobile clinic connector", "Complete but waiting for credentials/provider"],
  ["SMS connector", "Complete and live-executable when configured"],
  ["WhatsApp connector", "Complete and live-executable when configured"],
  ["email connector", "Complete and live-executable when configured"],
  ["calendar connector", "Complete but waiting for credentials/provider"],
  ["marketplace connector", "Complete and live-executable when configured"],
  ["LMS connector", "Complete and live-executable when configured"],
  ["agriculture provider connector", "Complete but waiting for credentials/provider"],
  ["workforce connector", "Complete but waiting for credentials/provider"],
  ["drone service connector", "Blocked by compliance/vendor/legal requirement"],
  ["payment gate", "Blocked by compliance/vendor/legal requirement"],
  ["offline queue", "Complete and locally executable"],
  ["reminders", "Complete and locally executable"],
  ["follow-ups", "Complete and locally executable"],
  ["verification", "Complete and locally executable"],
  ["media/music provider handoff", "Complete as safe search handoff; playback requires user/provider action"],
  ["security", "Complete and locally executable"],
  ["compliance gates", "Complete and locally executable"],
  ["deployment readiness", "Complete but waiting for credentials/provider"]
].map(([capability, status]) => ({ capability, status }));

const CHRONIC_DISEASE_PROGRAMS = Object.freeze({
  dm: {
    id: "dm",
    label: "Diabetes Mellitus (DM)",
    commonTerms: ["diabetes", "diabetic", "dm", "glucose", "blood sugar", "a1c"],
    rpmSignals: ["glucose", "A1c context", "weight", "blood pressure when relevant"],
    rtmSignals: ["nutrition pattern", "activity participation", "medication adherence discussion prep", "symptom/barrier notes"]
  },
  obesity: {
    id: "obesity",
    label: "Obesity / weight-management support",
    commonTerms: ["obesity", "weight", "bmi", "nutrition", "activity", "physical activity"],
    rpmSignals: ["weight", "BMI context if user-provided", "blood pressure when relevant", "glucose when relevant"],
    rtmSignals: ["nutrition goals", "activity participation", "sleep/stress/barrier notes", "therapy or coaching participation"]
  },
  htn: {
    id: "htn",
    label: "Hypertension (HTN)",
    commonTerms: ["hypertension", "htn", "blood pressure", "bp"],
    rpmSignals: ["blood pressure", "pulse if user-provided", "weight when relevant"],
    rtmSignals: ["sodium/activity context", "medication adherence discussion prep", "symptom/barrier notes"]
  }
});

function ensureBrain(db = {}) {
  db.profile = db.profile || {};
  db.profile.nexusAgenticTasks = Array.isArray(db.profile.nexusAgenticTasks) ? db.profile.nexusAgenticTasks : [];
  db.profile.nexusProviderQueue = Array.isArray(db.profile.nexusProviderQueue) ? db.profile.nexusProviderQueue : [];
  db.profile.nexusAgenticBrainActivity = Array.isArray(db.profile.nexusAgenticBrainActivity) ? db.profile.nexusAgenticBrainActivity : [];
  return db.profile;
}

function now() {
  return new Date().toISOString();
}

function id(prefix) {
  return `${prefix}-${crypto.randomUUID()}`;
}

function cleanGoal(value = "") {
  return safeText(String(value || "").replace(/^nexus,\s*/i, "").trim(), 500);
}

function addActivity(profile, event) {
  profile.nexusAgenticBrainActivity.unshift({
    activityId: id("nexus-brain-activity"),
    createdAt: now(),
    ...event,
    secretsStored: false,
    externalExecutionWithoutConfirmation: false
  });
  profile.nexusAgenticBrainActivity = profile.nexusAgenticBrainActivity.slice(0, 100);
}

function activeTask(profile, taskId = "") {
  if (taskId) return profile.nexusAgenticTasks.find(task => task.taskId === taskId);
  return profile.nexusAgenticTasks.find(task => task.status === "active" || task.status === "waiting_for_confirmation")
    || profile.nexusAgenticTasks[0];
}

function extractReading(goal = "") {
  const match = String(goal).match(/(\d{2,3})\s*(?:over|\/)\s*(\d{2,3})(?:\s+([^.,;]+))?/i);
  if (!match) return null;
  return {
    type: "blood_pressure",
    systolic: Number(match[1]),
    diastolic: Number(match[2]),
    context: safeText(match[3] || "user supplied reading", 120),
    rpm: true,
    rtm: false,
    source: "user_text",
    capturedAt: now()
  };
}

function extractReminderRequest(goal = "") {
  const text = String(goal || "");
  const lower = text.toLowerCase();
  const inHours = lower.match(/\bin\s+(\d{1,2})\s+hours?\b/);
  const inDays = lower.match(/\bin\s+(\d{1,2})\s+days?\b/);
  let timing = "";
  if (/\btomorrow morning\b/.test(lower)) timing = "tomorrow morning";
  else if (/\btomorrow afternoon\b/.test(lower)) timing = "tomorrow afternoon";
  else if (/\btomorrow evening\b/.test(lower)) timing = "tomorrow evening";
  else if (/\btomorrow\b/.test(lower)) timing = "tomorrow";
  else if (/\btonight\b/.test(lower)) timing = "tonight";
  else if (/\bnext week\b/.test(lower)) timing = "next week";
  else if (inHours) timing = `in ${inHours[1]} hours`;
  else if (inDays) timing = `in ${inDays[1]} days`;
  else if (/\bfollow up after\b|\bcheck again\b|\brepeat\b/.test(lower)) timing = "follow-up interval";
  if (!timing && !/\bremind|reminder|follow up|check again|repeat\b/.test(lower)) return null;
  return {
    timing: timing || "requested time",
    localOnly: true,
    noCalendarProvider: true,
    noExternalNotification: true,
    purpose: safeText(text, 220)
  };
}

function detectChronicPrograms(goal = "") {
  const text = String(goal || "").toLowerCase();
  const detected = Object.values(CHRONIC_DISEASE_PROGRAMS).filter(program =>
    program.commonTerms.some(term => new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(text))
  );
  return detected.length ? detected.map(program => program.id) : [];
}

function detectSymptoms(goal = "") {
  const text = String(goal || "").toLowerCase();
  const symptomMap = [
    ["chest_pain", /chest pain|chest pressure|pain in my chest/],
    ["shortness_of_breath", /shortness of breath|trouble breathing|cannot breathe|hard to breathe/],
    ["severe_headache", /severe headache|bad headache|worst headache/],
    ["dizziness", /dizzy|dizziness|lightheaded/],
    ["vision_changes", /vision changes|blurry vision|blurred vision/],
    ["swelling", /swelling|swollen/],
    ["confusion", /confusion|confused/],
    ["nausea", /nausea|nauseous|vomiting/],
    ["fatigue", /fatigue|tired|weakness|severe weakness/],
    ["excessive_thirst", /excessive thirst|very thirsty|thirsty all the time/],
    ["frequent_urination", /frequent urination|urinating a lot|peeing a lot/],
    ["pain", /pain|hurts|sore/],
    ["mobility_limitation", /hard to walk|trouble walking|mobility|limp|limited movement/]
  ];
  return symptomMap.filter(([, pattern]) => pattern.test(text)).map(([id]) => id);
}

function detectDateTimeContext(goal = "") {
  const text = String(goal || "").toLowerCase();
  const phrases = [
    "yesterday morning",
    "yesterday evening",
    "this morning",
    "after dinner",
    "before meal",
    "after meal",
    "bedtime",
    "last night",
    "tonight",
    "today",
    "yesterday",
    "tomorrow morning",
    "tomorrow afternoon",
    "tomorrow evening",
    "tomorrow",
    "next week"
  ];
  return phrases.find(phrase => text.includes(phrase)) || "";
}

function buildFollowUpQuestions(goal = "", parts = [], measurement = null, programs = chronicProgramSummary([])) {
  const text = String(goal || "").toLowerCase();
  const questions = [];
  const programIds = new Set(programs.programs.map(program => program.id));
  if (programIds.has("htn") || measurement?.type === "blood_pressure") {
    questions.push("When was the blood pressure reading taken and was it at rest?");
    questions.push("Are there urgent symptoms such as chest pain, severe headache, shortness of breath, weakness, or vision changes?");
    questions.push("Should this be added to a provider-ready summary?");
  }
  if (programIds.has("dm") || measurement?.type === "glucose") {
    questions.push("Was the glucose reading fasting, before meal, after meal, or bedtime?");
    questions.push("When was the glucose reading taken?");
    questions.push("Are there urgent symptoms such as confusion, vomiting, severe weakness, or blurry vision?");
  }
  if (programIds.has("obesity") || /weight|mobility|nutrition|exercise|food access|transportation|sleep|stress/.test(text)) {
    questions.push("What is the main goal: weight support, mobility, nutrition, activity, or provider support?");
    questions.push("Are food access, transportation, mobility, sleep, stress, or pain barriers involved?");
  }
  if (measurement?.rtm || /therapy|pain|rtm|function|mobility/.test(text)) {
    questions.push("What activity or therapy was completed?");
    questions.push("What is the pain level from 0 to 10?");
    questions.push("Is function better, worse, or unchanged?");
  }
  if (parts.includes("agriculture")) {
    questions.push("What crop is affected?");
    questions.push("What symptoms do you see?");
    questions.push("Do you want training, field visit prep, marketplace prep, or drone mission prep?");
  }
  if (parts.includes("workforce") || parts.includes("learning")) {
    questions.push("Are you looking for jobs, training, certification, digital literacy, AI literacy, or language support?");
    questions.push("What skill level are you starting from?");
  }
  if (parts.includes("pharmacy")) questions.push("What medication, refill, side effect, cost, or access question should be prepared for pharmacist/provider review?");
  if (parts.includes("telehealth")) questions.push("What do you want the provider to review during a telehealth visit?");
  if (parts.includes("mobile_clinic")) questions.push("What general area, access barrier, and preferred timing should a mobile clinic reviewer see?");
  return [...new Set(questions)].slice(0, 8);
}

function chronicProgramSummary(programIds = []) {
  const programs = programIds.map(id => CHRONIC_DISEASE_PROGRAMS[id]).filter(Boolean);
  return {
    programs: programs.map(program => ({ id: program.id, label: program.label })),
    rpmEnabled: programs.length > 0,
    rtmEnabled: programs.length > 0,
    rpmSignals: [...new Set(programs.flatMap(program => program.rpmSignals))],
    rtmSignals: [...new Set(programs.flatMap(program => program.rtmSignals))],
    deviceConnected: false,
    providerTransmissionEnabled: false,
    providerReviewRequired: true
  };
}

function extractClinicalMeasurement(goal = "") {
  const bloodPressure = extractReading(goal);
  if (bloodPressure) return bloodPressure;
  const text = String(goal || "");
  const glucose = text.match(/\b(?:(?:glucose|blood sugar)\s*(?:is|was|=|:)?|fasting sugar\s*(?:is|was|=|:)?)\s*(\d{2,3})\b/i);
  if (glucose) {
    return {
      type: "glucose",
      value: Number(glucose[1]),
      unit: "mg/dL",
      context: safeText(text.replace(glucose[0], "").trim() || "user supplied glucose reading", 120),
      rpm: true,
      rtm: false,
      source: "user_text",
      capturedAt: now()
    };
  }
  const weight = text.match(/\b(?:weight|weigh)\s*(?:is|was|=|:)?\s*(\d{2,3}(?:\.\d+)?)\s*(lb|lbs|pounds|kg|kilograms)?\b/i);
  if (weight) {
    return {
      type: "weight",
      value: Number(weight[1]),
      unit: weight[2] || "user_provided_unit",
      context: safeText(text.replace(weight[0], "").trim() || "user supplied weight reading", 120),
      rpm: true,
      rtm: false,
      source: "user_text",
      capturedAt: now()
    };
  }
  if (/\b(activity|walking|exercise|nutrition|meal|diet|sleep|stress|adherence|therapy|participation|barrier|pain|functional limitation|mobility limitation|movement|range of motion|rtm)\b/i.test(text)) {
    return {
      type: "rtm_context",
      summary: safeText(text, 220),
      rpm: false,
      rtm: true,
      source: "user_text",
      capturedAt: now()
    };
  }
  return null;
}

function inferGoalParts(goal = "") {
  const text = goal.toLowerCase();
  const parts = [];
  if (/what can nexus do|what nexus can help|help me figure out|i need support|what is open|what did you prepare|what still needs a real provider|active cases|current tasks|summarize my current tasks|show what nexus can help/.test(text)) parts.push("general_assistant");
  if (mediaMode.isMediaCommand(text)) parts.push("media");
  if (/blood pressure|bp\b|hypertension|htn\b|diabetes|diabetic|dm\b|glucose|blood sugar|fasting sugar|a1c|obesity|weight|bmi|rpm|rtm|remote patient|remote therapeutic|reading|provider|doctor|care team|provider report|care summary|clinical summary|telehealth|pharmacy|medication|mobile clinic|follow-up|follow up|pain|therapy|mobility/.test(text)) parts.push("medical");
  if (/provider report|care team report|care summary|clinical summary|provider summary|provider-ready|report/.test(text)) parts.push("provider_report");
  if (/telehealth|video visit|virtual visit/.test(text)) parts.push("telehealth");
  if (/pharmacy|medication|medicine|refill/.test(text)) parts.push("pharmacy");
  if (/mobile clinic|clinic visit|clinic request/.test(text)) parts.push("mobile_clinic");
  if (/remind|reminder|tonight|tomorrow|later|next week|in \d{1,2} (hours|days)|check again|repeat/.test(text)) parts.push("reminder");
  if (/respond|response|check if|verify|follow-up questions|follow up questions/.test(text)) parts.push("follow_up");
  if (/agriculture|training|irrigation|crop|farmer|maize|corn|field visit|yellow spots|drone mission/.test(text)) parts.push("agriculture");
  if (/marketplace|agritrade|buyer|seller|inquiry/.test(text)) parts.push("marketplace");
  if (/jobs|workforce|farm work|digital literacy|ai literacy|learn ai|ai for work|training pathway|certification|employment/.test(text)) parts.push("workforce");
  if (/drone/.test(text)) parts.push("drone");
  if (/field visit|route|map/.test(text)) parts.push("maps");
  if (/course|enroll|lms|learn ai|training pathway|certification/.test(text)) parts.push("learning");
  if (/text|sms|whatsapp|email|message/.test(text)) parts.push("communications");
  if (/queue.*offline|offline/.test(text)) parts.push("offline");
  if (/confirm/.test(text)) parts.push("confirm");
  if (/cancel/.test(text)) parts.push("cancel");
  if (/continue|resume/.test(text)) parts.push("continue");
  if (/verify result|verify|provider responded/.test(text)) parts.push("verify");
  return [...new Set(parts)];
}

function buildProviderReport(goal = "", taskType = "medical_follow_up") {
  const measurement = extractClinicalMeasurement(goal);
  const reminder = extractReminderRequest(goal);
  const parts = inferGoalParts(goal);
  const programs = chronicProgramSummary(detectChronicPrograms(goal));
  const text = String(goal || "");
  const symptoms = detectSymptoms(goal);
  const followUpQuestions = buildFollowUpQuestions(goal, parts, measurement, programs);
  return {
    reportId: id("nexus-provider-report"),
    status: "local_preparation_only",
    packageType: parts.includes("telehealth") ? "Telehealth Prep"
      : parts.includes("pharmacy") ? "Pharmacy Questions"
      : parts.includes("mobile_clinic") ? "Mobile Clinic Request"
      : measurement?.rpm || measurement?.rtm ? "RPM/RTM Report"
      : "Provider Summary",
    conditionOrConcern: safeText(programs.programs.map(program => program.label).join(", ") || (taskType === "medical_follow_up" ? "Health access or chronic-care concern" : "User-requested follow-up"), 180),
    userStatedHistoryContext: safeText(text, 500),
    userReportedReadings: measurement ? [measurement] : [],
    symptomsReported: symptoms,
    dateTimeContext: safeText(detectDateTimeContext(goal) || measurement?.context || reminder?.timing || "not provided", 120),
    pharmacyQuestions: parts.includes("pharmacy") ? ["Medication/refill concern captured for provider/pharmacist review only."] : [],
    mobilityAccessBarriers: /mobility|transport|ride|access|barrier|clinic/i.test(text) ? [safeText(text, 160)] : [],
    socialBarriers: /food access|transportation|housing|cost|language|work|childcare/i.test(text) ? [safeText(text, 180)] : [],
    telehealthRequest: parts.includes("telehealth"),
    mobileClinicRequest: parts.includes("mobile_clinic"),
    referralPrep: /referral|specialist|care team|doctor|provider/i.test(text),
    rpmSummary: measurement?.rpm ? `${measurement.type} reading captured from user text.` : "No RPM reading captured yet.",
    rtmSummary: measurement?.rtm ? "RTM participation/function note captured from user text." : "No RTM note captured yet.",
    followUpQuestions,
    consentNote: "External sharing requires user consent, configured provider integration, final approval, audit logging, and verification.",
    redFlagSafetyLanguage: "If symptoms may be urgent or severe, seek local emergency help now. Nexus cannot dispatch emergency services.",
    providerReviewStatement: "Prepared by Nexus for licensed provider review; Nexus does not diagnose, prescribe, or replace clinical care. Nexus is not sending this externally until an approved provider pathway is configured and confirmed."
  };
}

function buildChronicIntake(goal = "") {
  const parts = inferGoalParts(goal);
  const programs = chronicProgramSummary(detectChronicPrograms(goal));
  const measurement = extractClinicalMeasurement(goal);
  const symptoms = detectSymptoms(goal);
  return {
    intakeId: id("nexus-chronic-intake"),
    status: "local_preparation_only",
    conditionCategories: programs.programs.map(program => program.id),
    conditionLabels: programs.programs.map(program => program.label),
    userConcern: safeText(goal, 500),
    reading: measurement || null,
    symptomsReported: symptoms,
    dateTimeContext: safeText(detectDateTimeContext(goal) || measurement?.context || "not provided", 120),
    rpmEnabled: programs.rpmEnabled || Boolean(measurement?.rpm),
    rtmEnabled: programs.rtmEnabled || Boolean(measurement?.rtm),
    followUpQuestions: buildFollowUpQuestions(goal, parts, measurement, programs),
    urgentSafetyLanguage: symptoms.some(item => ["chest_pain", "shortness_of_breath", "confusion"].includes(item))
      ? "Urgent symptoms were mentioned. Seek local emergency help now if symptoms are severe, worsening, or feel unsafe."
      : "Nexus can organize information for provider review, but it does not diagnose, prescribe, or replace care.",
    localOnly: true,
    noDiagnosis: true,
    noMedicationChanges: true,
    providerReviewRequired: true
  };
}

function buildTelehealthPrep(goal = "") {
  return {
    packageId: id("nexus-telehealth-prep"),
    status: "local_preparation_only",
    visitPurpose: safeText(goal, 300),
    itemsToReview: ["main concern", "reported readings or symptoms", "questions for provider", "access or language needs"],
    userApprovalRequiredBeforeScheduling: true,
    providerIntegrationRequired: true,
    noVisitLaunched: true
  };
}

function buildPharmacyQuestionPackage(goal = "") {
  return {
    packageId: id("nexus-pharmacy-questions"),
    status: "local_preparation_only",
    questions: [safeText(goal, 260)],
    reviewTopics: ["medication question", "refill access question", "side effect or cost question if user-provided"],
    pharmacistOrProviderReviewRequired: true,
    noRefillRequested: true,
    noMedicationChange: true
  };
}

function buildMobileClinicRequest(goal = "") {
  return {
    packageId: id("nexus-mobile-clinic-request"),
    status: "local_preparation_only",
    requestSummary: safeText(goal, 300),
    neededBeforeDispatch: ["general service area", "service type", "availability", "provider/operator integration", "user consent", "final approval"],
    noDispatchAuthorized: true,
    providerIntegrationRequired: true
  };
}

function buildAgriculturePlan(goal = "") {
  const text = String(goal || "");
  const cropMatch = text.match(/\b(maize|corn|tomato|rice|beans|cassava|potato|wheat|sorghum|cotton|coffee|cocoa)\b/i);
  const symptomMatch = text.match(/\b(yellow spots|spots|wilting|pest|disease|mold|fungus|dry leaves|stunted|rot|blight)\b/i);
  return {
    planId: id("nexus-agriculture-plan"),
    status: "local_preparation_only",
    crop: cropMatch ? cropMatch[1] : "not provided",
    visibleSymptoms: symptomMatch ? symptomMatch[1] : "not provided",
    supportTypes: [
      /training|learn|course/i.test(text) ? "training pathway" : "",
      /field visit|visit/i.test(text) ? "field visit preparation" : "",
      /drone/i.test(text) ? "drone mission preparation" : "",
      /market|agritrade|sell|buyer/i.test(text) ? "marketplace preparation" : ""
    ].filter(Boolean),
    practicalNextSteps: [
      "Record crop, symptoms, approximate field area, and recent weather or irrigation context.",
      "Capture photos only if the user chooses a safe approved image workflow later.",
      "Review local extension or expert guidance before treatment decisions."
    ],
    followUpQuestions: buildFollowUpQuestions(goal, inferGoalParts(goal), null, chronicProgramSummary([])),
    noDroneDispatch: true,
    noMarketplaceTransaction: true,
    noLocationSharing: true
  };
}

function buildWorkforcePathway(goal = "") {
  const text = String(goal || "");
  return {
    pathwayId: id("nexus-workforce-pathway"),
    status: "local_preparation_only",
    pathwayType: /ai literacy|artificial intelligence|learn ai|ai for work/i.test(text) ? "AI literacy support"
      : /digital literacy|computer|phone skills/i.test(text) ? "digital literacy support"
      : /certification|certificate/i.test(text) ? "certification preparation"
      : /job|work|employment|farm work/i.test(text) ? "jobs and employment preparation"
      : "training and literacy support",
    languagePreference: /swahili|kiswahili/i.test(text) ? "sw" : /french/i.test(text) ? "fr" : /spanish/i.test(text) ? "es" : /arabic/i.test(text) ? "ar" : /portuguese/i.test(text) ? "pt" : "not provided",
    recommendedNextStep: "Prepare a local training or job-readiness checklist and identify partner programs once connected.",
    followUpQuestions: buildFollowUpQuestions(goal, inferGoalParts(goal), null, chronicProgramSummary([])),
    partnerConnectionStatus: "not_connected",
    noApplicationSubmitted: true,
    noEnrollmentSubmitted: true
  };
}

function providerOnboardingReadinessFor(task = {}) {
  const medical = task.type === "medical_follow_up";
  return {
    readinessId: id("nexus-provider-onboarding"),
    status: "ready_for_provider_onboarding_contract",
    providerProfileSchema: {
      providerName: "",
      organizationName: "",
      serviceTypes: ["physician", "clinic", "telehealth", "pharmacy", "mobile clinic", "lab", "community health worker", "care coordinator", "agriculture expert", "workforce partner"],
      supportedConditions: ["DM", "HTN", "obesity", "RPM", "RTM"],
      serviceArea: "",
      supportedLanguages: ["English", "Spanish", "French", "Arabic", "Portuguese", "Swahili"],
      contactMethods: [],
      verificationStatus: "unverified",
      licensingCredentialStatus: "not_verified",
      consentRequired: true,
      dataSharingPermissionRequired: true,
      providerQueueDestination: "local_queue_placeholder",
      integrationStatus: "local-only"
    },
    matchedServiceTypes: medical ? ["physician", "clinic", "telehealth", "pharmacy", "mobile clinic"] : [providerCategoryFor(task.type)],
    externalSendBlockedUntil: ["verified provider", "live integration", "user consent", "final approval", "audit event", "verification result"],
    blockExternalSend: true
  };
}

function buildSafetyGate(goal = "", parts = []) {
  const text = String(goal || "").toLowerCase();
  const blocked = [
    ["diagnosis", /diagnose|what do i have|tell me my disease/],
    ["medication_change", /change my medication|increase my dose|stop my medication|prescribe/],
    ["provider_send", /send .*doctor|send .*provider|send .*pharmacy|contact .*doctor|contact .*provider/],
    ["call", /call .*doctor|phone .*doctor|call .*provider|call .*pharmacy/],
    ["message", /text .*pharmacy|message .*doctor|whatsapp|telegram|sms/],
    ["payment", /pay|payment|buy my medicine|checkout|purchase/],
    ["appointment_booking", /book .*appointment|schedule .*appointment/],
    ["location_sharing", /send my location|share my location|use my location/],
    ["camera", /use my camera|open camera|take a photo/],
    ["drone_dispatch", /send a drone|dispatch a drone|fly a drone|drone mission|drone request/],
    ["mobile_clinic_dispatch", /dispatch a mobile clinic|send a mobile clinic now/],
    ["lab_order", /order labs|lab order/],
    ["prescription_refill", /refill my prescription|request refill/]
  ].filter(([, pattern]) => pattern.test(text)).map(([id]) => id);
  return {
    gateId: id("nexus-safety-gate"),
    status: blocked.length ? "blocked_or_confirmation_gated" : "local_preparation_allowed",
    blockedCategories: blocked,
    highRisk: blocked.length > 0 || parts.some(part => ["communications", "drone", "marketplace"].includes(part)),
    localPreparationAvailable: true,
    externalExecutionAuthorized: false,
    userFacingMessage: blocked.length
      ? "I can prepare the information locally, but I cannot complete that real-world action without the required verified connector, consent, final approval, audit logging, and safety gate."
      : "This can stay in local preparation mode until a verified connector and approval path are available."
  };
}

function emergencyDetected(goal = "") {
  return /\b(chest pain|trouble breathing|cannot breathe|severe bleeding|stroke|seizure|unconscious|suicidal|emergency|911|112|999)\b/i.test(goal);
}

function taskTypeFor(parts = []) {
  if (parts.includes("communications")) return "communications_draft";
  if (parts.includes("medical")) return "medical_follow_up";
  if (parts.includes("workforce")) return "workforce_support";
  if (parts.includes("drone")) return "drone_service_request";
  if (parts.includes("maps")) return "field_visit_plan";
  if (parts.includes("marketplace")) return "marketplace_inquiry";
  if (parts.includes("learning")) return "learning_enrollment";
  if (parts.includes("agriculture")) return "agriculture_training";
  if (parts.includes("offline")) return "offline_queue";
  if (parts.includes("reminder")) return "reminder";
  return "general_follow_up";
}

function providerCategoryFor(taskType) {
  return {
    medical_follow_up: "telehealth/chronic care provider",
    agriculture_training: "agriculture expert",
    marketplace_inquiry: "marketplace/community partner",
    workforce_support: "workforce partner",
    drone_service_request: "drone service reviewer",
    field_visit_plan: "maps/route reviewer",
    learning_enrollment: "LMS/course reviewer",
    communications_draft: "communications provider",
    reminder: "local reminder",
    offline_queue: "offline queue"
  }[taskType] || "general provider/admin queue";
}

function createTask(profile, goal, plan, options = {}) {
  const parts = inferGoalParts(goal);
  const taskType = options.taskType || taskTypeFor(parts);
  const task = {
    taskId: id("nexus-task"),
    caseId: taskType === "medical_follow_up" ? id("nexus-case") : "",
    type: taskType,
    title: safeText(goal || plan.userGoal || taskType, 140),
    status: plan.missingInformation?.length ? "needs_information" : plan.requiresConfirmation ? "waiting_for_confirmation" : "active",
    userGoal: safeText(goal || plan.userGoal, 500),
    domain: plan.domain,
    intent: plan.intent,
    capabilities: plan.capabilities || [],
    missingInformation: plan.missingInformation || [],
    chronicPrograms: taskType === "medical_follow_up" ? chronicProgramSummary(detectChronicPrograms(goal)) : chronicProgramSummary([]),
    readings: [],
    rtmNotes: [],
    chronicIntake: null,
    providerReport: null,
    preparationPackages: [],
    agriculturePlan: null,
    workforcePathway: null,
    safetyGate: buildSafetyGate(goal, parts),
    providerOnboardingReadiness: null,
    reminderRequest: extractReminderRequest(goal),
    compositeIntents: parts.filter(part => !["confirm", "cancel", "continue", "verify"].includes(part)),
    providerQueueId: "",
    reminderId: "",
    followUpId: "",
    localDraftId: "",
    verification: { status: "not_verified", checkedAt: "" },
    history: [{
      at: now(),
      event: "task_created",
      summary: "Nexus created an active task record. No external action was executed."
    }],
    createdAt: now(),
    updatedAt: now()
  };
  const measurement = extractClinicalMeasurement(goal);
  if (measurement?.rpm) {
    task.readings.push(measurement);
    task.missingInformation = task.missingInformation.filter(item => !/reading/i.test(item));
    task.status = task.requiresConfirmation ? "waiting_for_confirmation" : "active";
  }
  if (measurement?.rtm) {
    task.rtmNotes.push(measurement);
    task.status = task.requiresConfirmation ? "waiting_for_confirmation" : "active";
  }
  if (taskType === "medical_follow_up") {
    task.chronicIntake = buildChronicIntake(goal);
  }
  if (parts.includes("provider_report") || /care team|provider|pharmacy|telehealth|mobile clinic/i.test(goal)) {
    task.providerReport = buildProviderReport(goal, taskType);
    task.missingInformation = task.missingInformation.filter(item => !/clearer goal|target capability/i.test(item));
    if (!task.missingInformation.length && task.status === "needs_information") task.status = "active";
  }
  if (parts.includes("telehealth")) task.preparationPackages.push(buildTelehealthPrep(goal));
  if (parts.includes("pharmacy")) task.preparationPackages.push(buildPharmacyQuestionPackage(goal));
  if (parts.includes("mobile_clinic")) task.preparationPackages.push(buildMobileClinicRequest(goal));
  if (parts.includes("agriculture") || parts.includes("drone") || parts.includes("marketplace")) task.agriculturePlan = buildAgriculturePlan(goal);
  if (parts.includes("workforce") || parts.includes("learning")) task.workforcePathway = buildWorkforcePathway(goal);
  task.providerOnboardingReadiness = providerOnboardingReadinessFor(task);
  profile.nexusAgenticTasks.unshift(task);
  profile.nexusAgenticTasks = profile.nexusAgenticTasks.slice(0, 75);
  addActivity(profile, { eventType: "task_created", taskId: task.taskId, status: task.status, summary: task.title });
  return task;
}

function addTaskHistory(task, event, summary) {
  task.history.unshift({ at: now(), event, summary: safeText(summary, 300) });
  task.history = task.history.slice(0, 50);
  task.updatedAt = now();
}

function createProviderQueueItem(profile, task, plan, env = process.env) {
  const configured = plan.connectorReadiness && Object.values(plan.connectorReadiness).some(item => item.executionEnabled === true);
  const item = {
    queueId: id("nexus-provider-queue"),
    taskId: task.taskId,
    caseId: task.caseId || "",
    providerCategory: providerCategoryFor(task.type),
    status: configured ? "ready_for_configured_submission" : "queued_local_review",
    liveSubmissionEnabled: configured,
    submittedLive: false,
    blockedReason: configured ? "" : "provider_connector_missing_or_disabled",
    visiblePurpose: safeText(task.userGoal, 220),
    chronicPrograms: task.chronicPrograms || chronicProgramSummary([]),
    rpmReadingCount: Array.isArray(task.readings) ? task.readings.length : 0,
    rtmNoteCount: Array.isArray(task.rtmNotes) ? task.rtmNotes.length : 0,
    response: "",
    reviewedBy: "",
    createdAt: now(),
    updatedAt: now(),
    noFakeProviderContact: true,
    connectorsAvailable: PROVIDER_CONNECTORS
  };
  profile.nexusProviderQueue.unshift(item);
  profile.nexusProviderQueue = profile.nexusProviderQueue.slice(0, 75);
  task.providerQueueId = item.queueId;
  addTaskHistory(task, "provider_queue_prepared", configured ? "Provider connector is configured; final confirmation is still required." : "Provider request queued locally because live connector is missing or disabled.");
  addActivity(profile, { eventType: "provider_queue_prepared", taskId: task.taskId, providerQueueId: item.queueId, status: item.status });
  return item;
}

function createFollowUp(profile, task) {
  const followUpId = id("nexus-follow-up");
  task.followUpId = followUpId;
  addTaskHistory(task, "follow_up_created", "Follow-up check created locally. No provider response was invented.");
  addActivity(profile, { eventType: "follow_up_created", taskId: task.taskId, followUpId, status: "local_only" });
  return { followUpId, status: "local_only", message: "Follow-up created locally for later status verification." };
}

function buildCapabilityResponse(profile) {
  const openTasks = profile.nexusAgenticTasks.filter(task => !["completed", "cancelled"].includes(task.status));
  return {
    ok: true,
    status: "capability_summary",
    message: "Nexus can organize agriculture, healthcare/chronic-care, provider/care-team prep, marketplace/AgriTrade prep, workforce/jobs, learning/literacy, maps/field visit planning, communications drafts, Media/Music provider search handoffs, multilingual commands, offline prep, reminders/continuity, safety gates, production capability status, RPM/RTM, telehealth prep, pharmacy questions, mobile clinic requests, and provider-onboarding packages. Live provider contact, diagnosis, prescribing, payment, emergency dispatch, calls, messages, location, camera, drone dispatch, and credentialed media playback remain gated until configured and approved.",
    modesCovered: [
      "healthcare_chronic_care",
      "provider_care_team",
      "agriculture",
      "marketplace_agritrade",
      "workforce_jobs",
      "learning_literacy",
      "maps_location_planning",
      "communications",
      "media_music",
      "voice_natural_command",
      "multilingual",
      "offline",
      "reminder_continuity",
      "safety_confirmation",
      "admin_developer_testing",
      "production_capability_status"
    ],
    activeTaskCount: openTasks.length,
    activeCases: openTasks.slice(0, 8).map(task => ({
      taskId: task.taskId,
      type: task.type,
      status: task.status,
      title: task.title,
      localOnly: true,
      needsRealProvider: Boolean(task.providerQueueId || task.providerReport || task.providerOnboardingReadiness)
    })),
    stillNeedsRealProvider: ["provider connector", "verified provider profile", "user consent", "final approval", "audit event", "result verification"],
    noExternalExecutionAuthorized: true
  };
}

async function handleCommand(body = {}, db = {}, env = process.env) {
  const profile = ensureBrain(db);
  const goal = cleanGoal(body.command || body.userGoal || body.goal || "");
  const taskId = body.taskId || "";
  const parts = inferGoalParts(goal);
  const suppliedMeasurement = extractClinicalMeasurement(goal);
  if (!goal) return { ok: false, status: "missing_goal", message: "Tell Nexus what task or result you want." };

  if (parts.includes("media")) {
    const result = mediaMode.buildMediaResponse(goal);
    addActivity(profile, { eventType: result.auditEvent.eventType, status: result.status, summary: goal });
    return result;
  }

  if (parts.includes("general_assistant") && /what can nexus do|what nexus can help|what still needs a real provider|show my active cases|active cases|current tasks|what is open|show what nexus can help/i.test(goal)) {
    const summary = buildCapabilityResponse(profile);
    addActivity(profile, { eventType: "capability_summary", status: "local_only", summary: goal });
    return summary;
  }

  if (emergencyDetected(goal)) {
    const plan = productionRuntime.plan({ userGoal: goal }, db, env);
    addActivity(profile, { eventType: "emergency_blocked", status: "blocked_emergency", summary: goal });
    return {
      ok: false,
      status: "blocked_emergency",
      plan,
      safetyGate: buildSafetyGate(goal, parts),
      message: "This sounds urgent. Seek local emergency help now. Nexus cannot dispatch emergency services or route this as a routine task."
    };
  }

  let task = activeTask(profile, taskId);
  if (suppliedMeasurement && (!task || task.type !== "medical_follow_up")) {
    task = profile.nexusAgenticTasks.find(item => item.type === "medical_follow_up" && !["completed", "cancelled"].includes(item.status)) || task;
  }
  if (parts.includes("cancel") && task) {
    task.status = "cancelled";
    addTaskHistory(task, "task_cancelled", "User cancelled the task. No external action was executed.");
    addActivity(profile, { eventType: "task_cancelled", taskId: task.taskId, status: task.status });
    return { ok: true, status: "cancelled", task, message: "Task cancelled locally. No provider action was executed." };
  }
  if ((parts.includes("continue") || parts.includes("verify")) && task) {
    if (parts.includes("verify")) return verifyTask({ taskId: task.taskId }, db, env);
    addTaskHistory(task, "task_resumed", "User resumed the task.");
    return { ok: true, status: "resumed", task, message: `Resuming ${task.title}. Current status: ${task.status}.` };
  }

  const plan = productionRuntime.plan({ userGoal: goal, confirmed: body.confirmed === true }, db, env);
  const shouldCreateNew = !suppliedMeasurement && (!task || !parts.includes("confirm") || parts.some(part => ["medical", "agriculture", "marketplace", "workforce", "drone", "maps", "learning", "communications", "offline", "reminder"].includes(part)));
  if (shouldCreateNew && !parts.includes("confirm")) {
    task = createTask(profile, goal, plan);
  }
  if (!task) task = createTask(profile, goal, plan);
  task.readings = Array.isArray(task.readings) ? task.readings : [];
  task.rtmNotes = Array.isArray(task.rtmNotes) ? task.rtmNotes : [];
  task.chronicPrograms = task.chronicPrograms || chronicProgramSummary([]);
  task.compositeIntents = [...new Set([...(Array.isArray(task.compositeIntents) ? task.compositeIntents : []), ...parts.filter(part => !["confirm", "cancel", "continue", "verify"].includes(part))])];

  if (task.type === "medical_follow_up") {
    const currentPrograms = new Set(task.chronicPrograms?.programs?.map(program => program.id) || []);
    for (const programId of detectChronicPrograms(goal)) currentPrograms.add(programId);
    task.chronicPrograms = chronicProgramSummary([...currentPrograms]);
    task.chronicIntake = task.chronicIntake || buildChronicIntake(goal);
  }
  task.safetyGate = buildSafetyGate(goal, parts);

  const reading = suppliedMeasurement;
  if (reading?.rpm && !task.readings.some(item => item.type === reading.type && item.value === reading.value && item.systolic === reading.systolic && item.diastolic === reading.diastolic && item.context === reading.context)) {
    task.readings.push(reading);
    task.missingInformation = task.missingInformation.filter(item => !/reading/i.test(item));
    addTaskHistory(task, "rpm_reading_added", `${reading.type || "RPM"} reading added for provider review.`);
  }
  if (reading?.rtm && !task.rtmNotes.some(item => item.summary === reading.summary)) {
    task.rtmNotes.push(reading);
    addTaskHistory(task, "rtm_context_added", "RTM participation or behavior context added for provider review.");
  }
  if (task.providerReport && reading) {
    const reportReadings = Array.isArray(task.providerReport.userReportedReadings) ? task.providerReport.userReportedReadings : [];
    const alreadyInReport = reportReadings.some(item =>
      item.type === reading.type
      && item.value === reading.value
      && item.systolic === reading.systolic
      && item.diastolic === reading.diastolic
      && item.context === reading.context
    );
    if (!alreadyInReport) task.providerReport.userReportedReadings = [...reportReadings, reading];
    task.providerReport.dateTimeContext = safeText(reading.context || task.providerReport.dateTimeContext || "not provided", 120);
    task.providerReport.telehealthRequest = Boolean(task.providerReport.telehealthRequest || parts.includes("telehealth"));
    task.providerReport.mobileClinicRequest = Boolean(task.providerReport.mobileClinicRequest || parts.includes("mobile_clinic"));
    task.providerReport.rpmSummary = reading.rpm ? `${reading.type} reading captured from user text.` : task.providerReport.rpmSummary;
    task.providerReport.rtmSummary = reading.rtm ? "RTM participation/function note captured from user text." : task.providerReport.rtmSummary;
  }

  let execution = null;
  let providerQueue = null;
  let followUp = null;
  const reminderRequest = extractReminderRequest(goal);
  if (reminderRequest) task.reminderRequest = reminderRequest;
  if ((parts.includes("provider_report") || /care team report|provider summary|provider report|care summary/i.test(goal)) && !task.providerReport) {
    task.providerReport = buildProviderReport(goal, task.type);
    task.missingInformation = task.missingInformation.filter(item => !/clearer goal|target capability/i.test(item));
  }
  task.preparationPackages = Array.isArray(task.preparationPackages) ? task.preparationPackages : [];
  if (parts.includes("telehealth") && !task.preparationPackages.some(item => item.packageId?.startsWith("nexus-telehealth-prep"))) task.preparationPackages.push(buildTelehealthPrep(goal));
  if (parts.includes("pharmacy") && !task.preparationPackages.some(item => item.packageId?.startsWith("nexus-pharmacy-questions"))) task.preparationPackages.push(buildPharmacyQuestionPackage(goal));
  if (parts.includes("mobile_clinic") && !task.preparationPackages.some(item => item.packageId?.startsWith("nexus-mobile-clinic-request"))) task.preparationPackages.push(buildMobileClinicRequest(goal));
  if ((parts.includes("agriculture") || parts.includes("drone") || parts.includes("marketplace")) && !task.agriculturePlan) task.agriculturePlan = buildAgriculturePlan(goal);
  if ((parts.includes("workforce") || parts.includes("learning")) && !task.workforcePathway) task.workforcePathway = buildWorkforcePathway(goal);
  task.providerOnboardingReadiness = task.providerOnboardingReadiness || providerOnboardingReadinessFor(task);
  const needsProvider = task.type === "medical_follow_up" || parts.includes("provider_report") || /provider|pharmacy|clinic|marketplace|expert|partner|care team/i.test(goal);
  if (needsProvider) providerQueue = createProviderQueueItem(profile, task, plan, env);
  if (parts.includes("follow_up") || /respond|response|check/i.test(goal)) followUp = createFollowUp(profile, task);
  if (parts.includes("reminder")) {
    const reminderGoal = reminderRequest?.timing ? `Remind me ${reminderRequest.timing}.` : "Remind me to follow up.";
    execution = await productionRuntime.execute({ userGoal: reminderGoal, confirmed: true }, db, env);
    task.reminderId = execution.executionResult?.referenceId || "";
    addTaskHistory(task, "reminder_created", `Local in-app reminder created for ${reminderRequest?.timing || "the requested follow-up time"}.`);
  }
  if (parts.includes("offline")) {
    execution = await productionRuntime.execute({ userGoal: "Queue this offline.", confirmed: true }, db, env);
    addTaskHistory(task, "offline_queue_created", "Local offline queue record created.");
  }
  if (body.confirmed === true || parts.includes("confirm")) {
    execution = await productionRuntime.execute({ plan, userGoal: goal, confirmed: true }, db, env);
    addTaskHistory(task, "execution_attempted", execution.executionResult?.message || "Confirmed execution attempted through gated runtime.");
  }
  if (task.status === "needs_information" && task.missingInformation.length === 0) task.status = "active";
  task.updatedAt = now();

  return {
    ok: true,
    status: task.status,
    task,
    plan,
    execution,
    providerQueue,
    followUp,
    preparedCards: buildPreparedCards(task, providerQueue, execution),
    message: buildBrainMessage(task, plan, execution, providerQueue)
  };
}

function buildPreparedCards(task, providerQueue, execution) {
  const cards = [];
  if (task.chronicIntake) cards.push({ type: "active_case", title: "Active chronic-care case", status: task.status, localOnly: true, summary: task.chronicIntake.userConcern });
  if (task.providerReport) cards.push({ type: "provider_summary_ready", title: task.providerReport.packageType || "Provider summary ready", status: task.providerReport.status, localOnly: true, needsRealProvider: true });
  for (const item of task.preparationPackages || []) cards.push({ type: "preparation_package", title: item.packageId?.includes("telehealth") ? "Telehealth prep ready" : item.packageId?.includes("pharmacy") ? "Pharmacy questions ready" : "Mobile clinic request ready", status: item.status, localOnly: true, needsRealProvider: true });
  if (task.reminderRequest) cards.push({ type: "reminder_created", title: "Local reminder prepared", status: task.reminderRequest.timing, localOnly: true, executionReference: task.reminderId || execution?.executionResult?.referenceId || "" });
  if (task.readings?.length) cards.push({ type: "rpm_reading_logged", title: "RPM reading logged locally", status: `${task.readings.length} reading(s)`, localOnly: true });
  if (task.rtmNotes?.length) cards.push({ type: "rtm_note_logged", title: "RTM note logged locally", status: `${task.rtmNotes.length} note(s)`, localOnly: true });
  if (task.agriculturePlan) cards.push({ type: "agriculture_task_prepared", title: "Agriculture task prepared", status: task.agriculturePlan.status, localOnly: true });
  if (task.workforcePathway) cards.push({ type: "workforce_pathway_prepared", title: "Workforce/training pathway prepared", status: task.workforcePathway.status, localOnly: true });
  if (task.safetyGate?.highRisk) cards.push({ type: "safety_gated_action", title: "Safety gate applied", status: task.safetyGate.status, blockedCategories: task.safetyGate.blockedCategories, localOnly: true });
  if (providerQueue) cards.push({ type: "provider_queue_ready", title: "Provider/admin review queue prepared", status: providerQueue.status, localOnly: true, needsRealProvider: true });
  return cards;
}

function buildBrainMessage(task, plan, execution, providerQueue) {
  if (task.missingInformation?.length) return `I created the task and need ${task.missingInformation.join(", ")} before final execution.`;
  if (task.providerReport && task.reminderRequest && providerQueue?.status === "queued_local_review") return `I prepared a local provider-ready summary and a local reminder for ${task.reminderRequest.timing}. The provider connector is not configured, so Nexus did not contact anyone.`;
  if (task.providerReport && providerQueue?.status === "queued_local_review") return "I prepared a local provider-ready summary for review. The provider connector is not configured, so Nexus did not contact a provider.";
  if (task.reminderRequest && execution?.executionResult?.message) return `Local reminder prepared for ${task.reminderRequest.timing}. ${execution.executionResult.message}`;
  if (providerQueue?.status === "queued_local_review") return "I prepared a provider/admin queue item locally. The connector is not configured, so Nexus did not contact a provider.";
  if (execution?.executionResult?.message) return execution.executionResult.message;
  return `Task is active: ${task.title}. Nexus can continue, verify, complete, or cancel it.`;
}

function listTasks(db = {}) {
  const profile = ensureBrain(db);
  return {
    ok: true,
    tasks: profile.nexusAgenticTasks,
    providerQueue: profile.nexusProviderQueue,
    activity: profile.nexusAgenticBrainActivity,
    matrix: MATRIX
  };
}

function updateTask(body = {}, db = {}) {
  const profile = ensureBrain(db);
  const task = activeTask(profile, body.taskId || "");
  if (!task) return { ok: false, status: "not_found", message: "No Nexus task found." };
  const status = body.status === "completed" ? "completed" : body.status === "cancelled" ? "cancelled" : "active";
  task.status = status;
  addTaskHistory(task, status === "completed" ? "task_completed" : status === "cancelled" ? "task_cancelled" : "task_updated", `Task marked ${status}.`);
  addActivity(profile, { eventType: "task_updated", taskId: task.taskId, status });
  return { ok: true, status, task };
}

function providerRespond(body = {}, db = {}) {
  const profile = ensureBrain(db);
  const item = profile.nexusProviderQueue.find(entry => entry.queueId === body.queueId || entry.taskId === body.taskId);
  if (!item) return { ok: false, status: "not_found", message: "No provider/admin queue item found." };
  const task = profile.nexusAgenticTasks.find(entry => entry.taskId === item.taskId);
  item.status = body.status === "reviewed" ? "reviewed" : "local_response_recorded";
  item.response = safeText(body.response || "Provider/admin reviewed locally. No diagnosis, prescription, booking, or external contact was generated by Nexus.", 500);
  item.reviewedBy = safeText(body.reviewedBy || "local provider/admin reviewer", 120);
  item.updatedAt = now();
  if (task) {
    task.status = "provider_response_available";
    addTaskHistory(task, "provider_response_recorded", "Provider/admin response recorded locally for user verification.");
  }
  addActivity(profile, { eventType: "provider_response_recorded", taskId: item.taskId, providerQueueId: item.queueId, status: item.status });
  return { ok: true, status: item.status, providerQueueItem: item, task };
}

function verifyTask(body = {}, db = {}, env = process.env) {
  const profile = ensureBrain(db);
  const task = activeTask(profile, body.taskId || "");
  if (!task) return { ok: false, status: "not_found", message: "No Nexus task found to verify." };
  const providerItem = profile.nexusProviderQueue.find(item => item.taskId === task.taskId);
  const verification = {
    status: providerItem?.status === "local_response_recorded" || providerItem?.status === "reviewed" ? "provider_response_available" : task.reminderId || task.followUpId || task.providerQueueId ? "verified_local_record" : "verification_pending",
    taskId: task.taskId,
    providerQueueId: providerItem?.queueId || "",
    liveProviderContacted: providerItem?.submittedLive === true,
    checkedAt: now(),
    noFakeSuccess: true,
    connectorRuntimeEnabled: productionRuntime.status(db, env).liveExecutionEnabled === true
  };
  task.verification = verification;
  addTaskHistory(task, "task_verified", `Verification status: ${verification.status}.`);
  addActivity(profile, { eventType: "task_verified", taskId: task.taskId, status: verification.status });
  return { ok: true, status: verification.status, task, verification, providerQueueItem: providerItem || null };
}

function status(db = {}, env = process.env) {
  const profile = ensureBrain(db);
  return {
    ok: true,
    runtime: "nexus_intelligent_agentic_brain",
    activeTaskCount: profile.nexusAgenticTasks.filter(task => ["active", "needs_information", "waiting_for_confirmation", "provider_response_available"].includes(task.status)).length,
    providerQueueCount: profile.nexusProviderQueue.length,
    providerConnectors: PROVIDER_CONNECTORS,
    matrix: MATRIX,
    productionRuntime: productionRuntime.status(db, env),
    safety: {
      noDiagnosis: true,
      noPrescription: true,
      noFakeProviderContact: true,
      noSilentExecution: true,
      confirmationRequiredForExternalActions: true,
      emergencyRoutineExecutionBlocked: true
    }
  };
}

module.exports = {
  PROVIDER_CONNECTORS,
  MATRIX,
  ensureBrain,
  handleCommand,
  listTasks,
  updateTask,
  providerRespond,
  verifyTask,
  status
};
