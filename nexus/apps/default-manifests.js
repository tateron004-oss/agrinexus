"use strict";

const DEFINITIONS = [
  ["agriculture", "Agriculture Help", ["knowledge.search", "maps.view"], ["low", "medium"]],
  ["health", "Health and Chronic Care", ["health.emergency-guidance", "health.record", "telehealth.prepare"], ["low", "medium", "high", "critical", "regulated"]],
  ["telehealth", "Telehealth Intake", ["telehealth.prepare"], ["medium", "high", "regulated"]],
  ["mobile-clinic", "Mobile Clinic", ["clinic.find"], ["low", "medium"]],
  ["pharmacy", "Pharmacy Support", ["pharmacy.find"], ["low", "medium", "regulated"]],
  ["learning", "Learning and Literacy", ["knowledge.search", "documents.create"], ["low"]],
  ["workforce", "Jobs and Workforce", ["jobs.search", "resume.create", "documents.create"], ["low"]],
  ["marketplace", "AgriTrade Marketplace", ["marketplace.search"], ["low", "medium", "high"]],
  ["maps", "Maps and Field Visit", ["maps.view"], ["low", "medium"]],
  ["music-media", "Music and Media", ["media.play"], ["low"]],
  ["documents", "Documents and Guided Entry", ["documents.create"], ["low", "medium", "regulated"]],
  ["reminders", "Reminders and Calendar", ["reminders.schedule"], ["low", "medium"]],
  ["offline-queue", "Offline Queue", ["offline.sync"], ["low", "medium", "high", "regulated"]],
  ["live-knowledge", "Live Knowledge", ["knowledge.search"], ["low"]],
  ["images", "Images", ["images.search"], ["low"]],
  ["communications", "Communications", ["communications.send"], ["medium", "high"]],
  ["operations", "Operations", ["drone.plan"], ["medium", "high", "regulated"]]
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
