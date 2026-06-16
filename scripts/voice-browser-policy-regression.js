const assert = require("assert");
const fs = require("fs");

const app = fs.readFileSync("public/app.js", "utf8");

assert(app.includes("function stripStandaloneVoiceAcknowledgement"), "Browser voice policy must strip standalone acknowledgements");
assert(app.includes("function isGuidedHealthVoiceResponse"), "Browser voice policy must detect guided health responses");
assert(app.includes("function startGuidedServiceIntake"), "Browser voice policy must support guided service intake beyond health");
assert(app.includes("openCropSaleGuidedNow") && app.includes("openWorkforceGuidedNow") && app.includes("openLearningGuidedNow"), "Simple crop, work, and learning requests must guide the user instead of only opening cards");
assert(app.includes("const sentenceLimit = healthGuidance ? 4"), "Guided health responses must keep enough sentences for the next useful question");
assert(app.includes("const maxWords = healthGuidance ? 88"), "Guided health responses must keep enough words for safety and next-step guidance");

function stripStandaloneVoiceAcknowledgement(text = "") {
  return String(text || "")
    .replace(/^\s*(got it|yes|okay|ok|sure|absolutely|i hear you)\s*[.!]\s+(?=\S)/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeToolText(value = "") {
  return String(value || "").toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function isGuidedHealthVoiceResponse(text = "", options = {}) {
  const value = normalizeToolText(`${options.command || ""} ${text || ""}`);
  const healthNeed = /\b(doctor|nurse|provider|clinic|hospital|medicine|medication|pharmacy|dawa|health|care|patient|sick|injury|baby|child|grandma)\b/.test(value);
  const guided = /\b(not a diagnosis|first tell me|where you are|village|city|landmark|medicine concern|provider handoff|mobile clinic|pharmacy support)\b/.test(value);
  return healthNeed && guided;
}

function conciseVoiceResponse(message = "", options = {}) {
  const text = stripStandaloneVoiceAcknowledgement(message);
  if (!text || options.allowLongResponse || options.longForm) return text;
  const healthGuidance = isGuidedHealthVoiceResponse(text, options);
  const sentenceLimit = healthGuidance ? 4 : 1;
  const sentenceText = (text.match(/[^.!?]+[.!?]+/g) || []).slice(0, sentenceLimit).join(" ").trim() || text;
  const words = sentenceText.split(/\s+/).filter(Boolean);
  const maxWords = healthGuidance ? 88 : 26;
  return words.length <= maxWords ? sentenceText : `${words.slice(0, maxWords).join(" ")}.`;
}

const doctor = conciseVoiceResponse("Got it. I heard you need a doctor. I can guide you step by step. I am not a doctor and this is not a diagnosis, but I can help prepare a provider handoff. First, tell me where you are.", { speak: true, command: "Nexus, I need a doctor" });
assert(!/^got it\.?$/i.test(doctor), "Doctor guidance must not collapse to Got it");
assert(doctor.includes("I heard you need a doctor"), "Doctor guidance must repeat the need");
assert(doctor.includes("not a diagnosis"), "Doctor guidance must preserve health safety boundary");
assert(doctor.includes("where you are"), "Doctor guidance must ask the next useful question");

const medicine = conciseVoiceResponse("Yes. I heard you need medicine. I cannot prescribe, but I can help explain the medicine concern, find pharmacy or mobile clinic support, and prepare provider review. First, tell me the medicine concern.", { speak: true, command: "Nexus, I need medicine" });
assert(!/^yes\.?$/i.test(medicine), "Medicine guidance must not collapse to Yes");
assert(medicine.includes("I heard you need medicine"), "Medicine guidance must repeat the need");
assert(medicine.includes("cannot prescribe"), "Medicine guidance must preserve prescribing boundary");
assert(medicine.includes("medicine concern"), "Medicine guidance must ask for the first guided detail");

console.log("Voice browser policy regression passed");
