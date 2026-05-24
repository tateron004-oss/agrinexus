const crypto = require("crypto");
const { recordAuditEvent } = require("../../runtime/audit");
const { assessEscalation, safetyReviewGuidance, buildCarePlanPrompt, loadCarePolicy } = require("./care-policy");
const { intakeToProviderPayload } = require("./fhir-mapper");

class HealthService {
  constructor({ repository, db, integrations, carePolicy = loadCarePolicy() }) {
    this.repository = repository;
    this.db = db;
    this.integrations = integrations;
    this.carePolicy = carePolicy;
  }

  async createIntake({ context, countryId, needSummary, riskLevel = "Routine" }) {
    const country = await this.requiredCountry(context.tenantId, countryId);
    const patientRef = `AN-PAT-${crypto.randomBytes(4).toString("hex").toUpperCase()}`;
    const intake = await this.repository.createIntake({
      tenantId: context.tenantId,
      countryId,
      createdBy: context.userId,
      patientRef,
      needSummary,
      riskLevel
    });
    const escalation = assessEscalation({ country, intake, policy: this.carePolicy });
    const telehealthSession = await this.integrations.telehealth.createSession({ intake, country });
    const ehrRecord = await this.integrations.ehr.syncIntake({
      intake,
      carePlan: null,
      payload: intakeToProviderPayload({ intake, country, carePlanText: null, policy: this.carePolicy })
    });
    await this.integrations.notifications.send({
      to: context.userId,
      subject: "Patient intake created",
      body: `${patientRef} intake opened for ${country.name}.`,
      metadata: { intakeId: intake.id, telehealthSessionId: telehealthSession.id, escalation }
    });
    await this.audit(context, "health.intake_created", intake.id, {
      countryId,
      telehealthSessionId: telehealthSession.id,
      ehrRecordId: ehrRecord.id
    });
    return { intake, country, telehealthSession, ehrRecord, escalation };
  }

  async escalateRepresentative({ context, intakeId }) {
    const intake = await this.updateIntake(intakeId, {
      queueStatus: "Representative connected",
      representativeStatus: "Connected"
    });
    const connection = await this.integrations.telehealth.connectRepresentative({ intake });
    await this.integrations.notifications.send({
      to: context.userId,
      subject: "Representative connected",
      body: `${intake.patient_ref} has been connected to a representative.`,
      metadata: { intakeId, connectionId: connection.id }
    });
    await this.audit(context, "health.representative_connected", intake.id, { connectionId: connection.id });
    return { intake, connection };
  }

  async runSafetyReview({ context, countryId }) {
    const country = await this.requiredCountry(context.tenantId, countryId);
    const guidance = safetyReviewGuidance({ country, policy: this.carePolicy });
    const result = await this.integrations.ai.run({ type: "safety", country });
    const aiRun = await this.repository.createAiRun({
      tenantId: context.tenantId,
      userId: context.userId,
      runType: "health.safety",
      provider: result.provider,
      model: result.model,
      prompt: { countryId, countryName: country.name, guidance },
      responseText: result.text,
      responseMetadata: result.metadata
    });
    await this.audit(context, "health.safety_review_completed", aiRun.id, { countryId });
    return { aiRun, recommendation: result.text, guidance };
  }

  async runMapInspector({ context, countryId }) {
    const country = await this.requiredCountry(context.tenantId, countryId);
    const result = await this.integrations.ai.run({ type: "inspector", country });
    const aiRun = await this.repository.createAiRun({
      tenantId: context.tenantId,
      userId: context.userId,
      runType: "health.inspector",
      provider: result.provider,
      model: result.model,
      prompt: { countryId, countryName: country.name },
      responseText: result.text,
      responseMetadata: result.metadata
    });
    await this.audit(context, "health.map_inspector_completed", aiRun.id, { countryId });
    return { aiRun, recommendation: result.text };
  }

  async generateCarePlan({ context, intakeId }) {
    const intake = await this.updateIntake(intakeId, {
      queueStatus: "Care plan generated"
    });
    const country = await this.requiredCountry(context.tenantId, intake.country_id);
    const prompt = buildCarePlanPrompt({ country, intake, policy: this.carePolicy });
    const result = await this.integrations.ai.run({ type: "careplan", country, intake, prompt });
    const ehrRecord = await this.integrations.ehr.syncIntake({
      intake,
      carePlan: result.text,
      payload: intakeToProviderPayload({ intake, country, carePlanText: result.text, policy: this.carePolicy })
    });
    const aiRun = await this.repository.createAiRun({
      tenantId: context.tenantId,
      userId: context.userId,
      runType: "health.care_plan",
      provider: result.provider,
      model: result.model,
      prompt,
      responseText: result.text,
      responseMetadata: { ...result.metadata, ehrRecordId: ehrRecord.id }
    });
    await this.audit(context, "health.care_plan_generated", aiRun.id, { intakeId, ehrRecordId: ehrRecord.id });
    return { intake, aiRun, ehrRecord, carePlan: result.text };
  }

  async updateIntake(intakeId, patch) {
    const intake = await this.repository.updateIntake(intakeId, patch);
    if (!intake) throw new Error("Patient intake not found.");
    return intake;
  }

  async requiredCountry(tenantId, countryId) {
    const country = await this.repository.getCountry(tenantId, countryId);
    if (!country) throw new Error("Country not found.");
    return country;
  }

  async audit(context, action, entityId, metadata) {
    return recordAuditEvent(this.db, context, {
      action,
      entityType: "health",
      entityId,
      metadata
    });
  }
}

module.exports = { HealthService };
