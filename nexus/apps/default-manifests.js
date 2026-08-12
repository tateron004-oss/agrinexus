"use strict";

const DEFINITIONS = [
  ["agriculture", "Agriculture Help", ["knowledge.search", "agriculture.assess", "weather.read", "maps.view"], ["low", "medium"]],
  ["health", "Health and Chronic Care", ["health.emergency-guidance", "health.intake", "health.record", "health.predict", "telehealth.prepare"], ["low", "medium", "high", "critical", "regulated"]],
  ["telehealth", "Telehealth Intake", ["telehealth.prepare", "documents.form", "communications.schedule"], ["medium", "high", "regulated"]],
  ["mobile-clinic", "Mobile Clinic", ["clinic.find", "maps.route", "communications.schedule"], ["low", "medium"]],
  ["pharmacy", "Pharmacy Support", ["pharmacy.find", "medication.educate", "communications.contact"], ["low", "medium", "regulated"]],
  ["learning", "Learning and Literacy", ["learning.plan", "knowledge.search", "documents.create"], ["low"]],
  ["workforce", "Jobs and Workforce", ["jobs.search", "resume.create", "documents.create"], ["low"]],
  ["marketplace", "AgriTrade Marketplace", ["marketplace.search", "marketplace.list", "logistics.plan"], ["low", "medium", "high"]],
  ["maps", "Maps and Field Visit", ["maps.view", "maps.route", "location.read"], ["low", "medium"]],
  ["music-media", "Music and Media", ["media.search", "media.play", "images.search", "video.play"], ["low"]],
  ["documents", "Documents and Guided Entry", ["documents.create", "documents.form", "documents.save", "files.read"], ["low", "medium", "regulated"]],
  ["reminders", "Reminders and Calendar", ["reminders.schedule", "calendar.read", "calendar.write"], ["low", "medium"]],
  ["offline-queue", "Offline Queue", ["offline.sync", "tasks.resume"], ["low", "medium", "high", "regulated"]],
  ["live-knowledge", "Live Knowledge", ["knowledge.search", "weather.read", "images.search", "sources.render"], ["low"]],
  ["communications", "Communications", ["communications.contact", "communications.send", "video.session"], ["medium", "high"]],
  ["operations", "Operations", ["drone.plan", "payments.prepare", "admin.review"], ["medium", "high", "regulated"]]
];

function defaultApplicationManifests() {
  return DEFINITIONS.map(([applicationId, title, capabilities, riskTiers]) => ({
    applicationId, title, capabilities, riskTiers,
    description: `${title} capabilities governed by the authoritative Nexus task lifecycle.`,
    artifactKinds: applicationId === "documents" ? ["document", "form"] : [],
    verificationMethods: ["provider_receipt", "visible_outcome"]
  }));
}

module.exports = Object.freeze({ defaultApplicationManifests });
