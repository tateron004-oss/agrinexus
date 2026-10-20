// Which diabetes or high blood pressure question is this? The same words are used by the server (nexus/knowledge/chronic-conditions.js answers it) and by the page (public/app.js), which takes such a question itself instead of
// leaving it to the voice model: the model answered "How do I keep track of my blood sugar?" with a reminders message and no source, and "I was just told I have high blood pressure, what should I do?" with a plan card that had none.
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.KyroChronicTopics = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  // chronicTopic(text) -> "diabetes" | "diabetes-care" | "high-blood-pressure" | "blood-pressure-care" | "blood-pressure-home" | "chronic-overview" | null. A pure text matcher: no sources, no answers, no records.
  //
  // Only a QUESTION or a request for help about the condition itself is taken. These are NEVER taken, and belong to the safety layer, the health tool (which keeps a person's own readings, with consent) and the medicine rules:
  // a record or a request to save or show the person's own readings or history; a reading with a number ("my blood pressure is 180 over 120", "my sugar is 350"); a statement of the person's own present state ("my blood sugar is low");
  // anything urgent or with symptoms (confusion, shaking, chest pain, trouble breathing, fainting, a seizure, vomiting); a medicine, an insulin dose or any question about changing one; pregnancy; and a health worker's list of patients.
  const ASKS = /(?:[?]|^(?:please\s+|kyro,?\s+|nexus,?\s+)?(?:how|what|which|when|where|why|should|can|could|do|does|is|are|am|will|would|tell me|explain|help me|i need|i want|i('| a)m looking for|i would like|i'd like|any|give me|find\b|show me|look(?:ing)? for|search for|teach me)\b)/i;
  const RECORD_OR_DRAFT = /^(?:please\s+)?(?:log|record|add|save|remind|set|create|draft|write|make|mark|delete|forget|call|text|send|play|open|start|translate|export|convert|register)\b/i;
  const WORKER_TALK = /\b(?:my patients?|my clients?|patients? with|how many (?:\w+ )?(?:patients|clients|people)|on my (?:list|register|caseload))\b/i;
  const OWN_RECORDS = /\bmy\s+(?:(?:blood pressure|blood sugar|blood glucose|glucose|bp)\s+)?(?:readings?|history|log|records?|results?|numbers|trend)\b|\bprovider summary\b|\bsummary (?:for|of) my\b/i;
  const READING = /\b\d{2,3}\s*(?:\/|over)\s*\d{2,3}\b|\b\d{2,3}\s*(?:mg\s*\/\s*dl|mg dl|mmol|mmhg)\b|\b(?:sugar|glucose|a1c|bp|pressure)\b[^.?!]{0,20}\b(?:is|was|of|at|reads?|read|hit|reached|came back)\b[^.?!]{0,15}\b\d/i;
  const OWN_STATE = /\bmy\s+(?:blood\s+)?(?:sugar|glucose|pressure|bp)\s+(?:is|was|has|have|got|just|keeps|gets|went|dropped|spiked|shot)\b/i;
  const NOT_FOR_A_GUIDE = /\b(?:emergency|urgent|severe|unconscious|faint(?:ed|ing)?|passed out|collaps\w*|seizures?|fits?|convuls\w*|confus\w*|shak(?:y|ing)|dizz\w+|sweat(?:y|ing)|chest pain|short(?:ness)? of breath|can'?t breathe|cannot breathe|trouble breathing|vomit\w*|ketoacidosis|dka|slurred|face (?:is )?droop\w*|suicid\w*|kill myself|end my life|hopeless|overdos\w*|medicines?|medications?|meds|pills?|tablets?|insulin|metformin|statins?|prescri\w+|injections?|doses?|dosage|units?|mg|pregnan\w*|preeclampsia)\b/i;

  const DIABETES_WORDS = /\b(?:diabet\w*|prediabet\w*|blood (?:sugar|glucose)|glucose|a1c|hba1c)\b/i;
  const BP_WORDS = /\b(?:blood pressure|hypertension|hypertensive|high bp|bp|dash (?:diet|eating plan))\b/i;
  const OVERVIEW = /\b(?:chronic (?:conditions?|diseases?|illness(?:es)?)|long[- ]term (?:health )?(?:conditions?|illness(?:es)?)|living with (?:a )?(?:chronic|long[- ]term))\b/i;
  // looking after yourself: first, because "how do I lower my blood pressure" has "blood pressure" and also a care word
  const CARE = /\b(?:lower\w*|reduc\w+|control\w*|manag\w+|treat\w*|track\w*|monitor\w*|measur\w+|at home|home (?:monitor|test|check|cuff)|cuff|diet|eat\w*|food|meal|salt|sodium|dash|exercis\w+|activity|walk\w*|weight|foot|feet|low blood sugar|hypoglyc\w*|live (?:well )?with|living with|lives with|take care|look(?:ing)? after|self[- ]care|sick days?|what should i do|what can i do|what do i do|how (?:do|can) i (?:keep|stay|improve|help)|check(?:ing)? (?:my|your|the)?\s*(?:blood (?:sugar|glucose)|blood pressure|bp|glucose)|test(?:ing)? (?:my|your|the)?\s*(?:blood sugar|glucose))\b/i;

  // checking or measuring blood pressure (at home): first, its own topic
  const HOME = /\b(?:at home|home (?:monitor\w*|test\w*|check\w*|cuff|blood pressure)|cuff|measur\w+|check(?:ing)? (?:my|your|the)?\s*(?:blood pressure|bp)|take (?:my|your|a) (?:blood pressure|bp))\b/i;

  function chronicTopic(text) {
    const value = String(text || "").replace(/\s+/g, " ").trim();
    if (!value || value.length > 300) return null;
    if (RECORD_OR_DRAFT.test(value) || !ASKS.test(value) || WORKER_TALK.test(value) || OWN_RECORDS.test(value) || READING.test(value) || OWN_STATE.test(value) || NOT_FOR_A_GUIDE.test(value)) return null;
    const diabetes = DIABETES_WORDS.test(value);
    const pressure = BP_WORDS.test(value);
    if (diabetes && pressure) return "chronic-overview";
    if (diabetes) return CARE.test(value) ? "diabetes-care" : "diabetes";
    if (pressure) return HOME.test(value) ? "blood-pressure-home" : CARE.test(value) ? "blood-pressure-care" : "high-blood-pressure";
    return OVERVIEW.test(value) ? "chronic-overview" : null;
  }

  return Object.freeze({ chronicTopic });
});
