const {
  defaultStatus,
  guardEnabled,
  guardMedicalText,
  requireConfirmation,
  safeText,
  safeList,
  ensureProfileStore,
  localRecord,
  saveRecord,
  response,
  createReminder,
  queueOffline
} = require("./medicalBridgeUtils");

const PROVIDER = "nexus-rtm-bridge";
const FLAG = "NEXUS_RTM_BRIDGE_ENABLED";
const INTAKES = "nexusRtmIntakes";
const ENTRIES = "nexusRtmActivityEntries";
const PLANS = "nexusFitnessTrainingPlans";
const ACTIVITY_TYPES = new Set(["therapy_activity", "exercise_rehab", "nutrition_behavior", "medication_adherence_discussion", "education_module", "symptom_function_note", "device_app_usage", "fitness_training"]);

function status(env = process.env) {
  return defaultStatus(PROVIDER, FLAG, env, {
    rtmScope: ["therapy/activity completion", "exercise/rehab activity", "diet/nutrition behavior", "medication adherence discussion prompts", "education module completion", "symptom/function notes", "device/app usage notes"],
    therapeuticPrescription: false
  });
}

function intake(body = {}, db, env = process.env) {
  const action = "rtm.intake";
  const disabled = guardEnabled(PROVIDER, action, FLAG, env);
  if (disabled) return disabled;
  const confirmation = requireConfirmation(body, PROVIDER, action);
  if (confirmation) return confirmation;
  const blocked = guardMedicalText(PROVIDER, action, [body.goal, body.notes], false);
  if (blocked) return blocked;
  const record = saveRecord(db, INTAKES, localRecord("rtm-intake", body, {
    participationGoal: safeText(body.participationGoal || body.goal || "organize participation for provider review", 240),
    supportFocus: safeList(body.supportFocus || "activity completion,education module"),
    learningResourceInterest: safeText(body.learningResourceInterest || "", 160),
    communityLocation: safeText(body.communityLocation || body.location, 160)
  }));
  return response(PROVIDER, action, "completed", "RTM intake saved locally for participation review only.", { intake: record });
}

function activityEntry(body = {}, db, env = process.env) {
  const action = "rtm.activity_entry";
  const disabled = guardEnabled(PROVIDER, action, FLAG, env);
  if (disabled) return disabled;
  const confirmation = requireConfirmation(body, PROVIDER, action);
  if (confirmation) return confirmation;
  const activityType = safeText(body.activityType || body.type || "therapy_activity", 80);
  // Found live (RPM/RTM adherence-math audit): same case-sensitivity gap as
  // rpmBridgeProvider's metric check -- "Fitness_Training" failed the raw
  // ACTIVITY_TYPES.has() check and was silently relabeled "therapy_activity"
  // (also a valid member), so a real logged workout vanished entirely from
  // fitnessProgress()'s exact-case "fitness_training" filter below.
  const normalizedActivityType = activityType.toLowerCase().trim().replace(/\s+/g, "_");
  const blocked = guardMedicalText(PROVIDER, action, [body.notes, body.activityDescription], false);
  if (blocked) return blocked;
  const record = saveRecord(db, ENTRIES, localRecord("rtm-entry", body, {
    activityType: ACTIVITY_TYPES.has(normalizedActivityType) ? normalizedActivityType : "therapy_activity",
    activityDescription: safeText(body.activityDescription || body.description || "participation entry", 240),
    completed: body.completed === true || String(body.completed).toLowerCase() === "true",
    dateTimeText: safeText(body.dateTimeText || body.dueAt || "not provided", 120),
    participationMinutes: Number.isFinite(Number(body.participationMinutes)) && body.participationMinutes !== "" && body.participationMinutes != null ? Number(body.participationMinutes) : null,
    notes: safeText(body.notes, 240),
    detailedMedicationListStored: false,
    automatedProviderAlertSent: false
  }), 200);
  return response(PROVIDER, action, "completed", "RTM activity entry saved locally. No therapeutic prescription, medication change, or automated alert occurred.", { entry: record });
}

function activityEntries(db) {
  return response(PROVIDER, "rtm.activity_entries", "completed", "RTM activity entries loaded.", { entries: ensureProfileStore(db, ENTRIES) });
}

function adherenceSummary(body = {}, db) {
  const entries = ensureProfileStore(db, ENTRIES).slice(0, 40);
  return response(PROVIDER, "rtm.adherence_summary", "prepared", "RTM participation summary prepared for provider review only.", {
    summary: {
      entryCount: entries.length,
      completedCount: entries.filter(item => item.completed).length,
      activityTypes: Array.from(new Set(entries.map(item => item.activityType))).filter(Boolean),
      missingData: entries.length ? [] : ["No RTM participation entries saved yet"],
      providerReviewNotes: ["Discuss participation patterns and barriers with the care team.", "Nexus does not prescribe therapy or change medications."]
    }
  });
}

function providerReport(body = {}, db) {
  const entries = ensureProfileStore(db, ENTRIES).slice(0, 30);
  return response(PROVIDER, "rtm.provider_report", "prepared", "RTM provider-review report prepared without treatment plan or medication advice.", {
    report: {
      reportType: "rtm_provider_review",
      participationGoal: safeText(body.participationGoal || "provider review", 120),
      activityTableSummary: entries.map(item => ({ activityType: item.activityType, completed: item.completed, dateTimeText: item.dateTimeText, participationMinutes: item.participationMinutes })),
      questionsForCareTeam: safeList(body.questionsForCareTeam || body.questions),
      learningResourceLinkSuggested: true
    }
  });
}

function trainingPlan(body = {}, db, env = process.env) {
  const action = "rtm.training_plan";
  const disabled = guardEnabled(PROVIDER, action, FLAG, env);
  if (disabled) return disabled;
  const confirmation = requireConfirmation(body, PROVIDER, action);
  if (confirmation) return confirmation;
  const blocked = guardMedicalText(PROVIDER, action, [body.goal, body.notes], false);
  if (blocked) return blocked;
  const record = saveRecord(db, PLANS, localRecord("fitness-plan", body, {
    goal: safeText(body.goal || "general fitness", 200),
    activityFocus: safeList(body.activityFocus || body.focus || "general activity"),
    weeklySessionTarget: Number(body.weeklySessionTarget) || null,
    durationWeeks: Number(body.durationWeeks) || null,
    notes: safeText(body.notes, 240)
  }), 20);
  return response(PROVIDER, action, "completed", "Training plan saved locally. This is general activity guidance, not a training program from a coach, trainer, or clinician.", { plan: record });
}

function trainingPlans(db) {
  return response(PROVIDER, "rtm.training_plans", "completed", "Training plans loaded.", { plans: ensureProfileStore(db, PLANS) });
}

// Found live: entries are stored in SUBMISSION order (saveRecord unshifts),
// not the order of the workout's own dateTimeText -- backfilling an older
// workout after today's already-logged one made the older one report as
// "most recent" simply because it was inserted later. Picks the entry with
// the latest PARSEABLE dateTimeText; falls back to submission order only
// when no entry has one, preserving the old behavior for that edge case
// rather than reporting nothing.
function mostRecentByDateTime(entries) {
  let best = null;
  let bestTime = -Infinity;
  for (const entry of entries) {
    const time = Date.parse(entry.dateTimeText);
    if (Number.isFinite(time) && time > bestTime) {
      bestTime = time;
      best = entry;
    }
  }
  return best || entries[0] || null;
}

function fitnessProgress(body = {}, db) {
  const entries = ensureProfileStore(db, ENTRIES).filter(item => item.activityType === "fitness_training");
  const totalMinutes = entries.reduce((sum, item) => sum + (Number(item.participationMinutes) || 0), 0);
  return response(PROVIDER, "rtm.fitness_progress", "prepared", "Fitness progress summary prepared from logged workouts.", {
    summary: {
      sessionCount: entries.length,
      totalMinutes,
      mostRecentActivity: mostRecentByDateTime(entries)?.activityDescription || null,
      missingData: entries.length ? [] : ["No workouts logged yet"]
    }
  });
}

function reminder(body = {}, db, env = process.env) {
  const disabled = guardEnabled(PROVIDER, "rtm.reminder", FLAG, env);
  if (disabled) return disabled;
  return createReminder(PROVIDER, "rtm.reminder", body, db, "RTM participation review");
}

function offline(body = {}, db, env = process.env) {
  const disabled = guardEnabled(PROVIDER, "rtm.offline", FLAG, env);
  if (disabled) return disabled;
  return queueOffline(PROVIDER, "rtm.offline", body, db, "rtm_participation_entry", body.summary || body.activityType || "manual RTM participation metadata");
}

module.exports = { status, intake, activityEntry, activityEntries, adherenceSummary, providerReport, reminder, offline, trainingPlan, trainingPlans, fitnessProgress };
