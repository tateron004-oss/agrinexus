const crypto = require("node:crypto");
const productionRuntime = require("./nexusProductionRuntime");
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

function detectChronicPrograms(goal = "") {
  const text = String(goal || "").toLowerCase();
  const detected = Object.values(CHRONIC_DISEASE_PROGRAMS).filter(program =>
    program.commonTerms.some(term => new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(text))
  );
  return detected.length ? detected.map(program => program.id) : [];
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
  const glucose = text.match(/\b(?:glucose|blood sugar)\s*(?:is|was|=|:)?\s*(\d{2,3})\b/i);
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
  if (/\b(activity|walking|exercise|nutrition|meal|diet|sleep|stress|adherence|therapy|participation|barrier)\b/i.test(text)) {
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
  if (/blood pressure|bp\b|hypertension|htn\b|diabetes|diabetic|dm\b|glucose|a1c|obesity|weight|bmi|rpm|rtm|remote patient|remote therapeutic|reading|provider|doctor|telehealth|follow-up|follow up/.test(text)) parts.push("medical");
  if (/remind|tonight|tomorrow|later/.test(text)) parts.push("reminder");
  if (/respond|response|check if|verify/.test(text)) parts.push("follow_up");
  if (/agriculture|training|irrigation|crop|farmer/.test(text)) parts.push("agriculture");
  if (/marketplace|agritrade|buyer|seller|inquiry/.test(text)) parts.push("marketplace");
  if (/jobs|workforce/.test(text)) parts.push("workforce");
  if (/drone/.test(text)) parts.push("drone");
  if (/field visit|route|map/.test(text)) parts.push("maps");
  if (/course|enroll|lms/.test(text)) parts.push("learning");
  if (/text|sms|whatsapp|email|message/.test(text)) parts.push("communications");
  if (/queue.*offline|offline/.test(text)) parts.push("offline");
  if (/confirm/.test(text)) parts.push("confirm");
  if (/cancel/.test(text)) parts.push("cancel");
  if (/continue|resume/.test(text)) parts.push("continue");
  if (/verify result|verify|provider responded/.test(text)) parts.push("verify");
  return [...new Set(parts)];
}

function emergencyDetected(goal = "") {
  return /\b(chest pain|trouble breathing|cannot breathe|severe bleeding|stroke|seizure|unconscious|suicidal|emergency|911|112|999)\b/i.test(goal);
}

function taskTypeFor(parts = []) {
  if (parts.includes("communications")) return "communications_draft";
  if (parts.includes("medical")) return "medical_follow_up";
  if (parts.includes("agriculture")) return "agriculture_training";
  if (parts.includes("marketplace")) return "marketplace_inquiry";
  if (parts.includes("workforce")) return "workforce_support";
  if (parts.includes("drone")) return "drone_service_request";
  if (parts.includes("maps")) return "field_visit_plan";
  if (parts.includes("learning")) return "learning_enrollment";
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

async function handleCommand(body = {}, db = {}, env = process.env) {
  const profile = ensureBrain(db);
  const goal = cleanGoal(body.command || body.userGoal || body.goal || "");
  const taskId = body.taskId || "";
  const parts = inferGoalParts(goal);
  const suppliedMeasurement = extractClinicalMeasurement(goal);
  if (!goal) return { ok: false, status: "missing_goal", message: "Tell Nexus what task or result you want." };

  if (emergencyDetected(goal)) {
    const plan = productionRuntime.plan({ userGoal: goal }, db, env);
    addActivity(profile, { eventType: "emergency_blocked", status: "blocked_emergency", summary: goal });
    return {
      ok: false,
      status: "blocked_emergency",
      plan,
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

  if (task.type === "medical_follow_up") {
    const currentPrograms = new Set(task.chronicPrograms?.programs?.map(program => program.id) || []);
    for (const programId of detectChronicPrograms(goal)) currentPrograms.add(programId);
    task.chronicPrograms = chronicProgramSummary([...currentPrograms]);
  }

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

  let execution = null;
  let providerQueue = null;
  let followUp = null;
  const needsProvider = task.type === "medical_follow_up" || parts.includes("provider") || /provider|pharmacy|clinic|marketplace|expert|partner/i.test(goal);
  if (needsProvider) providerQueue = createProviderQueueItem(profile, task, plan, env);
  if (parts.includes("follow_up") || /respond|response|check/i.test(goal)) followUp = createFollowUp(profile, task);
  if (parts.includes("reminder")) {
    execution = await productionRuntime.execute({ userGoal: "Remind me tonight.", confirmed: true }, db, env);
    task.reminderId = execution.executionResult?.referenceId || "";
    addTaskHistory(task, "reminder_created", "Local in-app reminder created after user command.");
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
    message: buildBrainMessage(task, plan, execution, providerQueue)
  };
}

function buildBrainMessage(task, plan, execution, providerQueue) {
  if (task.missingInformation?.length) return `I created the task and need ${task.missingInformation.join(", ")} before final execution.`;
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
