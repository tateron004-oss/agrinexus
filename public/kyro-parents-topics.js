// Which parent's question about a child's growing up and safety is this? The same words are used by the server (nexus/knowledge/parents-guide.js answers it) and by the page (public/app.js), which takes such a question itself instead of
// leaving it to the voice model. It is spoken by a PARENT or caregiver about their own child ("my daughter", "my 12 year old"), or is the general question of how to spot abuse or whom to call; a child speaking about themselves is not taken
// here (a guide for the child is a different thing and needs a child protection specialist), and nothing about harming a child or oneself is ever taken.
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.KyroParentsTopics = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  // parentsTopic(text) -> "parents-overview" | "talk-with-your-child" | "signs-of-abuse" | "child-tells-you" | "young-girl-pregnant" | "get-help-now" | null. A pure text matcher: no sources, no answers, no records.
  const ASKS = /(?:[?]|^(?:please\s+|kyro,?\s+|nexus,?\s+)?(?:how|what|which|when|where|why|who|should|can|could|do|does|is|are|am|will|would|tell me|explain|help me|i need|i want|i('| a)m looking for|i would like|i'd like|any|give me|find\b|show me|look(?:ing)? for|search for|teach me)\b)/i;
  const RECORD_OR_DRAFT = /^(?:please\s+)?(?:log|record|add|save|remind|set|create|draft|write|make|mark|delete|forget|call|text|send|play|open|start|translate|export|convert|register)\b/i;
  const WORKER_TALK = /\b(?:my patients?|my clients?|my cases?|my caseload|patients? with|on my (?:list|register|caseload))\b/i;
  // never: harm to oneself, or to a child by the speaker
  const NEVER = /\b(?:suicid\w*|kill myself|end my life|hurt myself|self[- ]harm)\b|\b(?:i|we)\s+(?:want|wanna|am going|will|might|could)\s+(?:to\s+)?(?:hurt|hit|beat|kill|harm)\s+(?:my|the|our)\b/i;
  const CHILD = "(?:daughters?|sons?|child(?:ren)?|kids?|teens?|teenagers?|girls?|boys?|nieces?|nephews?|granddaughters?|grandsons?|stepdaughters?|stepsons?|pre-?teens?|adolescents?)";
  const MY_CHILD = new RegExp(`\\b(?:my|our)\\s+(?:[\\w-]+\\s+){0,3}${CHILD}\\b|\\b(?:my|our)\\s+\\d{1,2}[- ]?(?:years?|yrs?)?[- ]?old\\b`, "i");
  const ANY_CHILD = new RegExp(`\\b${CHILD}\\b`, "i");
  const YOUNG = /\b(?:(?:[5-9]|1[0-5])[- ]?(?:years?|yrs?)?[- ]?old|(?:is|was|turned|just turned|are) (?:[5-9]|1[0-5])\b|(?:five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen)(?:[- ]years?[- ]old)?|pre-?teens?|little girl|young girl|young daughter|only a (?:kid|child|girl)|a child)\b/i;
  const ABUSE = /\b(?:rap(?:e|ed|ist)|molest\w*|incest|sexual(?:ly)? (?:abus\w+|assault\w*|exploit\w*|touch\w*)|sexual abuse|abus\w+|assault\w*|groom\w*|touched (?:her|him|them)|forced (?:her|him|them))\b|\btouch\w*\b.{0,20}\bsexual\w*|\bsexual\w*.{0,20}\btouch\w*/i;

  const POSITIVE = [
    // a young girl is pregnant: the parent's question or statement
    ["young-girl-pregnant", text => /\b(?:pregnan\w*|expecting a baby)\b/i.test(text) && /\b(?:my|our)\s+(?:[\w-]+\s+){0,3}(?:daughters?|girls?|nieces?|granddaughters?|stepdaughters?|pre-?teens?|child|kid|teen|teenager)\b/i.test(text) && YOUNG.test(text), false],
    // signs of abuse or grooming (before "a child has told": "how do I know if my child is being abused?" is a question about signs)
    ["signs-of-abuse", text => ABUSE.test(text) && ANY_CHILD.test(text) && /\b(?:signs?|symptoms?|warning|red flags?|how (?:do|can|would|will) (?:i|you|we) (?:know|tell|spot|recogni[sz]e|find out)|is (?:my|the|a) [\w ]{0,20}being|could (?:my|the) [\w ]{0,20}be)\b/i.test(text), true],
    // a child has told, or a parent says a child was abused
    ["child-tells-you", text => MY_CHILD.test(text) && (/\b(?:tell|tells|told|telling|said|says|disclos\w+|confided|opened up|admitted)\b/i.test(text) && ABUSE.test(text) || new RegExp(`\\b(?:my|our)\\s+(?:[\\w-]+\\s+){0,3}${CHILD}\\s+(?:was|got|has been|is being|is)\\s+(?:rap(?:e|ed)|molest\\w*|sexually (?:abus\\w+|assault\\w*)|abus\\w+|assault\\w*|touched)`, "i").test(text) || /\bwhat (?:do|should|can) (?:i|we) do if\b.{0,40}\b(?:abus\w+|molest\w+|rap(?:e|ed))\b/i.test(text)), false],
    // who to call, where to report
    ["get-help-now", text => ANY_CHILD.test(text) && ABUSE.test(text) && /\b(?:who (?:do|can|should|would) (?:i|we) (?:call|contact|report|tell|ask)|where (?:do|can|should) (?:i|we) (?:call|go|report|get help|find help)|how (?:do|can|should) (?:i|we) report|helplines?|hotlines?|child protect\w+|cps|report(?:ing)? (?:child )?abuse)\b/i.test(text), true],
    // talking with a child about the body, growing up, relationships and safety
    ["talk-with-your-child", text => (MY_CHILD.test(text) || /\b(?:a|my) (?:daughter|son|child|teen|girl|boy)\b/i.test(text)) && /\b(?:talk\w*|speak|discuss\w*|explain|teach|tell|say|ask|conversation|open up|get (?:him|her|them) to (?:talk|open up|tell me)|bring up)\b/i.test(text) && /\b(?:sex|sexual\w*|periods?|menstruat\w+|puberty|growing up|their body|her body|his body|bodies|dating|relationships?|boyfriends?|girlfriends?|consent|private parts|where babies come from|birds and the bees|pregnan\w+|hiding something|keeping secrets?|first period)\b/i.test(text), true],
    // what Kyro can do for parents
    ["parents-overview", text => /\bhow (?:can|could|would|does) (?:you|kyro|this)\b.{0,30}\b(?:help|support|assist)\b.{0,50}\b(?:parents?|my (?:child|daughter|son|kids?|teen)|single (?:mom|mother|dad|father|parent))\b/i.test(text) || /\b(?:single (?:mom|mother|dad|father|parent)|as a (?:parent|mother|father))\b.{0,60}\b(?:help|support)\b.{0,40}\b(?:child|daughter|son|kids?|teen)\b/i.test(text), true]
  ];

  function parentsTopic(text) {
    const value = String(text || "").replace(/\s+/g, " ").trim();
    if (!value || value.length > 300) return null;
    if (RECORD_OR_DRAFT.test(value) || WORKER_TALK.test(value) || NEVER.test(value)) return null;
    for (const [topic, test, needsAsk] of POSITIVE) {
      if (needsAsk && !ASKS.test(value)) continue;
      if (test(value)) return topic;
    }
    return null;
  }

  return Object.freeze({ parentsTopic });
});
