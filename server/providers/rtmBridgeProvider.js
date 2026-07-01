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
const ACTIVITY_TYPES = new Set(["therapy_activity", "exercise_rehab", "nutrition_behavior", "medication_adherence_discussion", "education_module", "symptom_function_note", "device_app_usage"]);

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
  const blocked = guardMedicalText(PROVIDER, action, [body.notes, body.activityDescription], false);
  if (blocked) return blocked;
  const record = saveRecord(db, ENTRIES, localRecord("rtm-entry", body, {
    activityType: ACTIVITY_TYPES.has(activityType) ? activityType : "therapy_activity",
    activityDescription: safeText(body.activityDescription || body.description || "participation entry", 240),
    completed: body.completed === true || String(body.completed).toLowerCase() === "true",
    dateTimeText: safeText(body.dateTimeText || body.dueAt || "not provided", 120),
    participationMinutes: Number(body.participationMinutes) || null,
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

module.exports = { status, intake, activityEntry, activityEntries, adherenceSummary, providerReport, reminder, offline };
