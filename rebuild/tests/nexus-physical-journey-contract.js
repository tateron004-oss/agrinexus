"use strict";

const field = (identity, labels, expectedValue) => Object.freeze({
  identity,
  labels: Object.freeze(labels),
  expectedValue
});

const JOURNEYS = Object.freeze([
  { app: "Agriculture Help", workspace: "agriculture", command: "Nexus, help with my maize crop in Kenya.", edit: { command: "Nexus, set location to Nakuru, Kenya.", field: field("location", ["Location", "County / area"], /Nakuru/i) } },
  { app: "Health and Chronic Care", workspace: "health", command: "Nexus, record my blood pressure 140 over 90.", edit: { command: "Nexus, set symptoms or notes to no symptoms.", field: field("symptoms", ["Symptoms", "Symptoms or notes"], /no symptoms/i) } },
  { app: "Telehealth Intake", workspace: "telehealth", command: "Nexus, begin a telehealth intake.", edit: { command: "Nexus, set reason for visit to blood pressure review.", field: field("reason", ["Reason for visit"], /blood pressure review/i) } },
  { app: "Mobile Clinic", workspace: "mobile-clinic", command: "Nexus, find a mobile clinic in Kenya.", edit: { command: "Nexus, set care needed to blood pressure screening.", field: field("careNeeded", ["Care needed"], /blood pressure screening/i) } },
  { app: "Pharmacy Support", workspace: "pharmacy", command: "Nexus, open pharmacy support.", edit: { command: "Nexus, set medication to metformin.", field: field("medication", ["Medication"], /metformin/i) } },
  { app: "Learning and Literacy", workspace: "learning", command: "Nexus, start a digital literacy course.", edit: { command: "Nexus, set topic or skill to phishing email safety.", field: field("topic", ["Topic or skill"], /phishing email safety/i) } },
  { app: "Jobs and Workforce", workspace: "workforce", command: "Nexus, search for farming jobs in Kenya." },
  { app: "AgriTrade Marketplace", workspace: "marketplace", command: "Nexus, sell 50 bags of maize.", edit: { command: "Nexus, change quantity to 20 bags.", field: field("quantity", ["Quantity"], /20 bags/i) } },
  { app: "Logistics and Routes", workspace: "maps", command: "Nexus, plan a route from Nairobi to Nakuru.", mapText: /Nairobi|Nakuru/i },
  { app: "Music and Media", workspace: "music", command: "Nexus, play Stevie Wonder.", media: /Stevie Wonder/i },
  { app: "Reminders", workspace: "reminders", command: "Nexus, remind me tonight at 8 PM to check my blood pressure.", edit: { command: "Nexus, change date and time to tonight at 7:30 PM.", field: field("time", ["Date and time"], /7:30/i) } },
  { app: "Offline Queue", workspace: "offline", command: "Nexus, show my offline queue.", edit: { command: "Nexus, set queued request to find maize treatment guidance.", field: field("queuedRequest", ["Queued request"], /(?:maize|mazed) treatment guidance/i) } },
  { app: "Live Weather", workspace: "live-knowledge", command: "Nexus, show today's weather in Nairobi, Kenya.", visual: "weather", links: true },
  { app: "Maps", workspace: "maps", command: "Nexus, reset the map and show Mombasa, Kenya.", visual: "map", mapText: /Mombasa/i },
  { app: "Agriculture Images", workspace: "agriculture", command: "Nexus, show me pictures of possible maize diseases.", visual: "agriculture-images", links: true },
  { app: "Résumé Builder", workspace: "workforce", command: "Nexus, help me create a résumé.", visual: "resume", edit: { command: "Nexus, set résumé full name to Ron Tate.", field: field("fullName", ["Résumé full name", "Full name"], /Ron Tate/i) }, controls: ["[data-resume-action='print']", "[data-resume-action='download']"] },
  { app: "Internet Sources and Recipe", workspace: "live-knowledge", command: "Nexus, show an apple pie recipe with ingredients, steps, and sources.", visual: "evidence", links: true },
  { app: "Provider Contact Card", workspace: "health", command: "Nexus, create a provider card for my doctor about blood pressure 140 over 90.", visual: "provider-card", controls: ["[data-provider-card-action='read']", "[data-provider-card-action='print']"] },
  { app: "Pilot Evidence", workspace: "live-knowledge", command: "Nexus, open the pilot evidence dashboard.", visual: "pilot-dashboard" }
]);

function normalizeFieldIdentity(value) {
  return String(value || "").normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function fieldIdentityMatches(actual, contract) {
  const expected = normalizeFieldIdentity(contract.identity);
  const compatible = [contract.identity, ...contract.labels].map(normalizeFieldIdentity);
  return normalizeFieldIdentity(actual) === expected || compatible.includes(normalizeFieldIdentity(actual));
}

module.exports = Object.freeze({ JOURNEYS, fieldIdentityMatches, normalizeFieldIdentity });
