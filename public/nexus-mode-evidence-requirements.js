(function nexusModeEvidenceRequirementsModule(globalScope) {
  "use strict";

  const MODE_REQUIREMENTS = Object.freeze({
    agriculture: Object.freeze({
      mode: "agriculture",
      label: "Agriculture support",
      requiredEvidenceFields: Object.freeze(["source owner", "source type", "freshness", "confidence", "local applicability"]),
      limitations: Object.freeze([
        "General guidance only unless a verified agriculture source is connected.",
        "Local crop, soil, weather, pest, and chemical conditions can change the right next step.",
        "Chemical, pesticide, herbicide, fungicide, insecticide, and fertilizer decisions require label directions, local regulation, PPE, and qualified local guidance."
      ]),
      blockedClaims: Object.freeze(["definitive diagnosis", "guaranteed yield", "chemical application instruction", "live expert review completed"])
    }),
    telehealth: Object.freeze({
      mode: "telehealth",
      label: "Health and telehealth access",
      requiredEvidenceFields: Object.freeze(["verified provider", "consent", "clinical scope", "data freshness", "audit readiness"]),
      limitations: Object.freeze([
        "Health access guidance is not a medical diagnosis.",
        "A live provider, appointment, prescription, refill, or clinical action requires verified integration, consent, and audit controls.",
        "Emergency concerns require local emergency services or local urgent care pathways."
      ]),
      blockedClaims: Object.freeze(["diagnosis completed", "provider contacted", "appointment scheduled", "prescription or refill submitted", "emergency dispatch started"])
    }),
    logistics: Object.freeze({
      mode: "logistics",
      label: "Logistics and transportation",
      requiredEvidenceFields: Object.freeze(["route source", "provider availability", "permission state", "freshness", "service boundary"]),
      limitations: Object.freeze([
        "Transportation and route guidance is informational unless a verified provider connector is active.",
        "No ride, route dispatch, shipment, or location sharing starts without explicit permission and provider readiness."
      ]),
      blockedClaims: Object.freeze(["ride dispatched", "location shared", "shipment scheduled", "provider contacted"])
    }),
    marketplace: Object.freeze({
      mode: "marketplace",
      label: "Marketplace and AgriTrade",
      requiredEvidenceFields: Object.freeze(["listing source", "counterparty status", "terms", "freshness", "transaction boundary"]),
      limitations: Object.freeze([
        "Marketplace guidance remains browse/review only unless verified commerce, consent, payment, and audit controls are active.",
        "No buy, sell, payment, checkout, buyer contact, seller contact, order, or delivery action has started."
      ]),
      blockedClaims: Object.freeze(["purchase completed", "sale posted", "payment started", "buyer contacted", "seller contacted", "delivery arranged"])
    }),
    workforce: Object.freeze({
      mode: "workforce",
      label: "Workforce resources",
      requiredEvidenceFields: Object.freeze(["program source", "eligibility boundary", "freshness", "application boundary"]),
      limitations: Object.freeze([
        "Workforce guidance can review options and readiness, but it does not submit applications or contact employers.",
        "Program availability and eligibility must be verified against the source before a real application step."
      ]),
      blockedClaims: Object.freeze(["application submitted", "employer contacted", "job secured", "identity verified"])
    }),
    learning: Object.freeze({
      mode: "learning",
      label: "Learning and training",
      requiredEvidenceFields: Object.freeze(["content source", "learning level", "freshness", "record boundary"]),
      limitations: Object.freeze([
        "Learning guidance is informational unless a verified course or record connector is active.",
        "No certificate, account record, enrollment, or transcript action has started."
      ]),
      blockedClaims: Object.freeze(["course enrolled", "certificate issued", "record updated", "account created"])
    }),
    maps: Object.freeze({
      mode: "maps",
      label: "Maps and location",
      requiredEvidenceFields: Object.freeze(["map source", "permission state", "freshness", "precision boundary"]),
      limitations: Object.freeze([
        "Map guidance does not use precise user location unless the user grants permission through the browser.",
        "No location has been requested, shared, stored, or sent to a provider."
      ]),
      blockedClaims: Object.freeze(["location shared", "GPS activated", "provider notified", "route dispatched"])
    }),
    general: Object.freeze({
      mode: "general",
      label: "General Nexus guidance",
      requiredEvidenceFields: Object.freeze(["source status", "freshness", "confidence", "execution boundary"]),
      limitations: Object.freeze([
        "Nexus can explain safe next steps, but it must not invent sources, freshness, confidence, providers, or action success.",
        "Actions that affect people, money, health, location, identity, providers, messages, calls, marketplace, camera, or emergency pathways require later permission and audit controls."
      ]),
      blockedClaims: Object.freeze(["action completed", "provider contacted", "permission granted", "live source checked"])
    })
  });

  const DOMAIN_MODE_MAP = Object.freeze({
    "agriculture-support": "agriculture",
    "source-review": "general",
    "health-medical-request": "telehealth",
    "appointment-request": "telehealth",
    "emergency-request": "telehealth",
    "communication-request": "general",
    "marketplace-request": "marketplace",
    "payment-request": "marketplace",
    "location-request": "maps",
    "camera-media-request": "telehealth",
    "general-assistant": "general"
  });

  function cloneRequirements(record) {
    return Object.freeze({
      mode: record.mode,
      label: record.label,
      requiredEvidenceFields: record.requiredEvidenceFields.slice(),
      limitations: record.limitations.slice(),
      blockedClaims: record.blockedClaims.slice()
    });
  }

  function normalizeMode(mode) {
    const value = String(mode || "").trim().toLowerCase();
    return Object.prototype.hasOwnProperty.call(MODE_REQUIREMENTS, value) ? value : "general";
  }

  function modeForIntentDomain(intentDomain) {
    const domain = String(intentDomain || "").trim();
    return DOMAIN_MODE_MAP[domain] || "general";
  }

  function getModeEvidenceRequirements(mode) {
    return cloneRequirements(MODE_REQUIREMENTS[normalizeMode(mode)]);
  }

  function assertModeEvidenceRequirementsSafe(requirements) {
    if (!requirements || typeof requirements !== "object") return false;
    if (!Object.prototype.hasOwnProperty.call(MODE_REQUIREMENTS, requirements.mode)) return false;
    if (!Array.isArray(requirements.requiredEvidenceFields) || requirements.requiredEvidenceFields.length < 3) return false;
    if (!Array.isArray(requirements.limitations) || requirements.limitations.length < 1) return false;
    if (!Array.isArray(requirements.blockedClaims) || requirements.blockedClaims.length < 1) return false;
    const limitations = requirements.limitations.join(" ");
    return !/\b(executed|completed|contacted a provider|paid|shared location|diagnosed)\b/i.test(limitations);
  }

  const api = Object.freeze({
    MODE_REQUIREMENTS,
    DOMAIN_MODE_MAP,
    modeForIntentDomain,
    getModeEvidenceRequirements,
    assertModeEvidenceRequirementsSafe
  });

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }

  if (globalScope) {
    globalScope.NexusModeEvidenceRequirements = api;
  }
})(typeof window !== "undefined" ? window : globalThis);
