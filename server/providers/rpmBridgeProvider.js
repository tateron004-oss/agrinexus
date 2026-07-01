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

const PROVIDER = "nexus-rpm-bridge";
const FLAG = "NEXUS_RPM_BRIDGE_ENABLED";
const INTAKES = "nexusRpmIntakes";
const READINGS = "nexusRpmDeviceReadings";
const METRICS = new Set(["blood_pressure", "blood_glucose", "pulse", "weight", "oxygen_saturation", "temperature"]);

function status(env = process.env) {
  return defaultStatus(PROVIDER, FLAG, env, {
    rpmScope: ["blood pressure", "blood glucose", "pulse", "weight", "oxygen saturation optional", "temperature optional"],
    dataSources: ["manual entry", "home device reading", "clinic reading", "community health worker entry", "future device integration placeholder"],
    liveDevicesConnected: false
  });
}

function intake(body = {}, db, env = process.env) {
  const action = "rpm.intake";
  const disabled = guardEnabled(PROVIDER, action, FLAG, env);
  if (disabled) return disabled;
  const confirmation = requireConfirmation(body, PROVIDER, action);
  if (confirmation) return confirmation;
  const blocked = guardMedicalText(PROVIDER, action, [body.goal, body.notes], false);
  if (blocked) return blocked;
  const record = saveRecord(db, INTAKES, localRecord("rpm-intake", body, {
    monitoringFocus: safeList(body.monitoringFocus || body.metrics || "blood_pressure,blood_glucose,pulse,weight"),
    dataSource: safeText(body.dataSource || "manual entry", 120),
    careTeamReviewGoal: safeText(body.careTeamReviewGoal || body.goal || "organize readings for provider review", 240),
    communityLocation: safeText(body.communityLocation || body.location, 160)
  }));
  return response(PROVIDER, action, "completed", "RPM intake saved locally for manual monitoring organization. No medical device was connected.", { intake: record });
}

function deviceReading(body = {}, db, env = process.env) {
  const action = "rpm.device_reading";
  const disabled = guardEnabled(PROVIDER, action, FLAG, env);
  if (disabled) return disabled;
  const confirmation = requireConfirmation(body, PROVIDER, action);
  if (confirmation) return confirmation;
  const metric = safeText(body.metric || body.type || "blood_pressure", 80);
  const blocked = guardMedicalText(PROVIDER, action, [body.notes], false);
  if (blocked) return blocked;
  const record = saveRecord(db, READINGS, localRecord("rpm-reading", body, {
    metric: METRICS.has(metric) ? metric : "blood_pressure",
    value: safeText(body.value || body.reading || "", 80),
    unit: safeText(body.unit || "", 40),
    systolic: Number(body.systolic) || null,
    diastolic: Number(body.diastolic) || null,
    pulse: Number(body.pulse) || null,
    dateTimeText: safeText(body.dateTimeText || body.dueAt || "not provided", 120),
    dataSource: safeText(body.dataSource || body.source || "manual", 120),
    notes: safeText(body.notes, 240),
    liveDeviceConnected: false,
    automatedAlertSent: false
  }), 200);
  return response(PROVIDER, action, "completed", "RPM reading saved locally for provider review. No device integration, alert, diagnosis, or treatment escalation occurred.", { reading: record });
}

function deviceReadings(db) {
  return response(PROVIDER, "rpm.device_readings", "completed", "RPM readings loaded.", { readings: ensureProfileStore(db, READINGS) });
}

function trendSummary(body = {}, db) {
  const readings = ensureProfileStore(db, READINGS).slice(0, 40);
  return response(PROVIDER, "rpm.trend_summary", "prepared", "RPM trend summary prepared for care-team review only.", {
    summary: {
      readingCount: readings.length,
      metricsPresent: Array.from(new Set(readings.map(item => item.metric))).filter(Boolean),
      missingData: readings.length ? [] : ["No RPM readings saved yet"],
      providerReviewNotes: ["Review repeated readings and context with the care team/community health worker.", "No automated provider alert was sent."]
    }
  });
}

function providerReport(body = {}, db) {
  const readings = ensureProfileStore(db, READINGS).slice(0, 30);
  return response(PROVIDER, "rpm.provider_report", "prepared", "RPM provider-review report prepared. No diagnosis, medication adjustment, or automated alert occurred.", {
    report: {
      reportType: "rpm_provider_review",
      monitoringGoal: safeText(body.monitoringGoal || "organize_readings", 120),
      readingTableSummary: readings.map(item => ({ metric: item.metric, value: item.value, unit: item.unit, systolic: item.systolic, diastolic: item.diastolic, pulse: item.pulse, dateTimeText: item.dateTimeText, dataSource: item.dataSource })),
      questionsForCareTeam: safeList(body.questionsForCareTeam || body.questions),
      noDeviceClaim: true
    }
  });
}

function reminder(body = {}, db, env = process.env) {
  const disabled = guardEnabled(PROVIDER, "rpm.reminder", FLAG, env);
  if (disabled) return disabled;
  return createReminder(PROVIDER, "rpm.reminder", body, db, "RPM reading review");
}

function offline(body = {}, db, env = process.env) {
  const disabled = guardEnabled(PROVIDER, "rpm.offline", FLAG, env);
  if (disabled) return disabled;
  return queueOffline(PROVIDER, "rpm.offline", body, db, "rpm_manual_reading", body.summary || body.metric || "manual RPM reading metadata");
}

module.exports = { status, intake, deviceReading, deviceReadings, trendSummary, providerReport, reminder, offline };
