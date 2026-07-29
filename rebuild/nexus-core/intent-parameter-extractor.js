"use strict";

const WORKFLOW_RULES = Object.freeze([
  ["maps", /\b(map|maps|route|directions|navigate|location)\b/i],
  ["reminders", /\b(remind|reminder)\b/i],
  ["health", /\b(health|blood pressure|diabetes|hypertension|weight|medicine)\b/i],
  ["telehealth", /\b(telehealth|doctor|clinician|video visit)\b/i],
  ["mobile-clinic", /\b(mobile clinic|clinic visit)\b/i],
  ["pharmacy", /\b(pharmacy|pharmacist|prescription)\b/i],
  ["offline", /\b(offline|sync|queue)\b/i],
  ["workforce", /(?:\b(job|jobs|work|career|employment|resume|cv)\b|résumé)/i],
  ["marketplace", /\b(sell|buy|buyer|market|marketplace|trade)\b/i],
  ["agriculture", /\b(agriculture|agricultural|farm|farmer|crop|maize|soil|weather for my field)\b/i],
  ["learning", /\b(learn|lesson|course|literacy|training)\b/i],
  ["music", /\b(play|music|song|songs)\b/i],
  ["live-knowledge", /\b(search the (web|internet)|look up|latest|current news|live knowledge|approved source|weather|forecast|pilot evidence|evidence dashboard|implementation report|learning brief|scale-up options|(show|display) (me )?(the )?(source|sources|reference|references|evidence|link|links|website|websites|resource|resources)|open (the )?(source|reference|link|website)|cite|citation)\b/i]
]);

function cleanText(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .replace(/^[\s,;:.-]+|[\s,;:?.!-]+$/g, "")
    .trim();
}

function stripConversationFrame(value) {
  let text = cleanText(value)
    .replace(/^(?:hey\s+|hello\s+|good\s+(?:morning|afternoon|evening)[\s,]+)?nexus\b[\s,;:.-]*/i, "")
    .replace(/^(?:(?:please|kindly)[\s,]+|(?:could|can|would|will)\s+you\s+)/i, "")
    .replace(/^(?:i(?:'d|\s+would)?\s+like\s+(?:you\s+)?to|i\s+want\s+(?:you\s+)?to|help\s+me\s+to?)\s+/i, "");
  return cleanText(text.replace(/\s+(?:please|for me)$/i, ""));
}

function providerCardRequest(text) {
  return (
    /\b(card|summary)\b.*\b(doctor|physician|provider|pharmacist)\b/i.test(text)
    || /\b(doctor|physician|provider|pharmacist)\b.*\b(card|summary)\b/i.test(text)
  );
}

function detectWorkflow(text) {
  if (providerCardRequest(text)) return "health";
  const match = WORKFLOW_RULES.find(([, pattern]) => pattern.test(text));
  return match ? match[0] : null;
}

function locationAfterPreposition(text) {
  const match = /\b(?:in|near|around|for|at)\s+([a-z][a-z .'-]*(?:,\s*[a-z][a-z .'-]*)?)$/i.exec(text);
  return cleanText(match && match[1]);
}

function extractBloodPressure(text) {
  const match = /\b(\d{2,3})\s*(?:over|\/)\s*(\d{2,3})\b/i.exec(text);
  return match ? Object.freeze({ systolic: Number(match[1]), diastolic: Number(match[2]) }) : null;
}

function extractMarketplace(text) {
  const action = /\b(sell|buy)\b/i.exec(text);
  const quantity = /\b(\d+(?:\.\d+)?)\s+(bags?|sacks?|kg|kilograms?|tons?|crates?|units?)\s+of\s+([a-z][a-z -]*?)(?=\s+(?:in|near|at)\b|$)/i.exec(text);
  return {
    action: action ? action[1].toLowerCase() : "open",
    quantity: quantity ? Number(quantity[1]) : null,
    unit: quantity ? quantity[2].toLowerCase() : null,
    product: quantity ? cleanText(quantity[3]) : null,
    location: locationAfterPreposition(text) || null
  };
}

function extractReminder(text) {
  const timing = /\b(today|tonight|tomorrow(?:\s+(?:morning|afternoon|evening))?|(?:on\s+)?(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday)|at\s+\d{1,2}(?::\d{2})?\s*(?:am|pm)?)\b/i.exec(text);
  const task = cleanText(text
    .replace(/^(?:set|create|add)?\s*(?:a\s+)?reminder\s+(?:for\s+me\s+)?(?:to\s+)?/i, "")
    .replace(/^remind\s+me\s+/i, "")
    .replace(/\b(today|tonight|tomorrow(?:\s+(?:morning|afternoon|evening))?|(?:on\s+)?(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday)|at\s+\d{1,2}(?::\d{2})?\s*(?:am|pm)?)\b/ig, ""));
  return { action: "create", task: task || null, timing: timing ? cleanText(timing[1]) : null };
}

function extractMusicQuery(text) {
  return cleanText(text
    .replace(/^(?:play|open|start|put\s+on)\s+/i, "")
    .replace(/\b(?:music|media|songs?)\b/ig, " ")) || "Kenyan";
}

function extractParameters(workflow, text) {
  const location = locationAfterPreposition(text) || null;
  if (workflow === "health") {
    return { action: providerCardRequest(text) ? "provider-card" : /\brecord\b/i.test(text) ? "record-reading" : "open", bloodPressure: extractBloodPressure(text) };
  }
  if (workflow === "marketplace") return extractMarketplace(text);
  if (workflow === "reminders") return extractReminder(text);
  if (workflow === "music") return { action: "play", query: extractMusicQuery(text) };
  if (workflow === "workforce") {
    return { action: /(?:\b(resume|cv)\b|résumé)/i.test(text) ? "resume" : "search-jobs", query: /\b(farming|agricultural|technology|healthcare)\b/i.exec(text)?.[1] || null, location };
  }
  if (workflow === "live-knowledge") {
    return { action: /\b(weather|forecast)\b/i.test(text) ? "weather" : /\b(pilot evidence|evidence dashboard)\b/i.test(text) ? "pilot-dashboard" : /\b(websites?|sources?|references?|links?|resources?)\b/i.test(text) ? "source-directory" : "research", location, topic: cleanText(text) };
  }
  if (workflow === "agriculture") {
    return { action: /\b(picture|pictures|image|images|photo|photos)\b/i.test(text) ? "images" : "support", crop: /\b(maize|corn|wheat|rice|coffee|tea)\b/i.exec(text)?.[1]?.toLowerCase() || null, location };
  }
  if (workflow === "maps") return { action: /\b(route|directions|navigate)\b/i.test(text) ? "route" : "show-place" };
  return { action: "open", location };
}

function extractIntentAndParameters(command) {
  const original = String(command || "").trim();
  const utterance = stripConversationFrame(original);
  const workflow = detectWorkflow(utterance);
  return Object.freeze({
    original,
    utterance,
    workflow,
    parameters: Object.freeze(workflow ? extractParameters(workflow, utterance) : {})
  });
}

module.exports = {
  WORKFLOW_RULES,
  cleanText,
  stripConversationFrame,
  extractIntentAndParameters
};
