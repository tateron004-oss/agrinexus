const { recordAuditEvent } = require("../../runtime/audit");
const { chooseShift } = require("./shift-policy");

class WorkforceService {
  constructor({ repository, db, integrations }) {
    this.repository = repository;
    this.db = db;
    this.integrations = integrations;
  }

  async buildProfile({ context }) {
    const profile = await this.requiredProfile(context.userId);
    const updated = await this.repository.updateCandidateProfile(profile.id, {
      eligibility: this.eligibilityFor(profile.readiness_score),
      pipelineStage: "Shortlist"
    });
    await this.audit(context, "workforce.profile_built", profile.id, {});
    return { profile: updated };
  }

  async scheduleInterview({ context }) {
    const profile = await this.requiredProfile(context.userId);
    if (profile.readiness_score < 50) throw new Error("Reach 50% readiness before scheduling an interview.");
    const calendarEvent = await this.integrations.calendar.createInterviewEvent({
      candidateProfileId: profile.id,
      title: "AgriNexus Workforce Interview",
      startsAt: "Next available interview slot",
      metadata: { readinessScore: profile.readiness_score }
    });
    const updated = await this.repository.updateCandidateProfile(profile.id, {
      pipelineStage: "Interview"
    });
    await this.integrations.notifications.send({
      to: context.userId,
      subject: "Interview scheduled",
      body: "Your workforce interview has been scheduled.",
      metadata: { calendarEventId: calendarEvent.id }
    });
    await this.audit(context, "workforce.interview_scheduled", profile.id, { calendarEventId: calendarEvent.id });
    return { profile: updated, calendarEvent };
  }

  async assignMentor({ context }) {
    const profile = await this.requiredProfile(context.userId);
    const updated = await this.repository.updateCandidateProfile(profile.id, {
      mentorStatus: "Assigned"
    });
    const notification = await this.integrations.notifications.send({
      to: context.userId,
      subject: "Mentor assigned",
      body: "A mentor has been assigned to your candidate profile.",
      metadata: { candidateProfileId: profile.id }
    });
    await this.audit(context, "workforce.mentor_assigned", profile.id, { notificationId: notification.id });
    return { profile: updated, notification };
  }

  async startShift({ context, routeName, preferredStart }) {
    const profile = await this.requiredProfile(context.userId);
    const plannedShift = chooseShift({
      readinessScore: profile.readiness_score,
      routeName,
      preferredStart
    });
    const shift = await this.integrations.scheduler.createShift({
      candidateProfileId: profile.id,
      routeName: plannedShift.routeName,
      preferredStart: plannedShift.startsAt,
      policy: plannedShift
    });
    const updated = await this.repository.updateCandidateProfile(profile.id, {
      nextShift: shift.title || plannedShift.title
    });
    await this.integrations.notifications.send({
      to: context.userId,
      subject: "Shift scheduled",
      body: `${shift.title} has been added to your workforce plan.`,
      metadata: { shiftId: shift.id }
    });
    await this.audit(context, "workforce.shift_started", profile.id, { shiftId: shift.id });
    return { profile: updated, shift };
  }

  async estimateEarnings({ context }) {
    const profile = await this.requiredProfile(context.userId);
    const estimate = 160 + Math.round((profile.readiness_score || 0) * 3.2);
    const updated = await this.repository.updateCandidateProfile(profile.id, {
      earningsEstimate: estimate
    });
    await this.audit(context, "workforce.earnings_estimated", profile.id, { estimate });
    return { profile: updated };
  }

  async applyToRole({ context, roleId }) {
    const profile = await this.requiredProfile(context.userId);
    const role = await this.repository.getRole(context.tenantId, roleId);
    if (!role) throw new Error("Workforce role not found.");
    if ((profile.readiness_score || 0) < role.min_readiness) {
      throw new Error(`${role.title} requires ${role.min_readiness}% readiness.`);
    }
    const application = await this.repository.createApplication({
      candidateProfileId: profile.id,
      workforceRoleId: role.id
    });
    const hrisRecord = await this.integrations.hris.syncApplication({
      application,
      role,
      profile
    });
    const notification = await this.integrations.notifications.send({
      to: context.userId,
      subject: "Application submitted",
      body: `${role.title} application has been submitted.`,
      metadata: { applicationId: application.id, hrisRecordId: hrisRecord.id }
    });
    const updated = await this.repository.updateCandidateProfile(profile.id, {
      pipelineStage: "Interview"
    });
    await this.audit(context, "workforce.application_submitted", application.id, {
      roleId: role.id,
      roleTitle: role.title,
      hrisRecordId: hrisRecord.id,
      notificationId: notification.id
    });
    return { profile: updated, application, role, hrisRecord, notification };
  }

  async requiredProfile(userId) {
    const profile = await this.repository.getCandidateProfile(userId);
    if (!profile) throw new Error("Candidate profile not found.");
    return profile;
  }

  eligibilityFor(readinessScore) {
    return readinessScore >= 55 ? "Eligible" : "Locked";
  }

  async audit(context, action, entityId, metadata) {
    return recordAuditEvent(this.db, context, {
      action,
      entityType: "workforce",
      entityId,
      metadata
    });
  }
}

module.exports = { WorkforceService };
