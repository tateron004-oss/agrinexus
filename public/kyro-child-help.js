// Is this a CHILD speaking for themselves about something that happened to them (a pregnancy, touching, rape, abuse), or asking how to tell a grown-up? The same words are used by the server (nexus/knowledge/child-help.js answers it) and by
// the page (public/app.js), which takes such a turn itself instead of leaving it to the voice model, which had improvised an answer with no numbers and no sources.
// It is deliberately narrow: the child has to say something that makes them a child (an age under 18, "I am a kid", or a close relative or a teacher or coach doing it to "me"), and what they say must be about harm or a pregnancy.
// A parent talking about their child is public/kyro-parents-topics.js. An adult remembering childhood, a record or a draft, and anything about wanting to die or to hurt someone is never taken here: the safety layer answers those.
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.KyroChildHelp = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  // childHelpTopic(text) -> "child-pregnant" | "child-hurt" | "child-tell" | null. A pure text matcher: no sources, no answers, no records.
  const RECORD_OR_DRAFT = /^(?:please\s+)?(?:log|record|add|save|remind|set|create|draft|write|make|mark|delete|forget|call|text|send|play|open|start|translate|export|convert|register)\b/i;
  const NEVER = /\b(?:suicid\w*|kill myself|end my life|hurt myself|self[- ]harm|want to die|don'?t want to (?:live|be alive))\b|\b(?:i|we)\s+(?:want|wanna|am going|will|might|could)\s+(?:to\s+)?(?:hurt|hit|beat|kill|harm)\s+(?:my|the|our|him|her|them)\b/i;
  // an adult remembering, or a story: not a child asking for help now
  const LONG_AGO = /\b(?:when i was (?:a )?(?:kid|child|little|young|\d|[a-z]+teen|\w+ years)|as a (?:kid|child|girl|boy)|growing up|years ago|back then|used to|as a teen|in my childhood|my childhood)\b/i;
  const NUMBER_WORDS = "(?:five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen)";
  const AGE = new RegExp(`\\b(?:i\\s*(?:am|'m|’m)|im)\\s+(?:only\\s+|just\\s+|still\\s+)?(?:(?:[5-9]|1[0-7])|${NUMBER_WORDS})(?:[- ]?(?:years?|yrs?)(?:[- ]?old)?)?\\b(?!\\s*(?:minutes?|hours?|days?|weeks?|months?|percent|%|dollars?|kg|pounds?))`, "i");
  const KID_WORDS = /\b(?:i\s*(?:am|'m|’m)|im)\s+(?:only\s+)?(?:a\s+)?(?:kid|child|minor|little girl|little boy|schoolgirl|schoolboy|teenager|teen|preteen|pre-teen|young girl)\b/i;
  const RELATIVE = "(?:dad|daddy|father|step-?dad|step-?father|uncle|brother|step-?brother|cousin|grandfather|grandpa|teacher|coach|pastor|priest|neighbou?r|mom'?s boyfriend|mother'?s boyfriend|mum'?s boyfriend|older boy|older man)";
  const HURTS_ME = new RegExp(`\\b(?:my|our)\\s+${RELATIVE}\\b.{0,40}\\b(?:touch(?:es|ed|ing)|rap(?:es|ed|ing)|molest\\w*|abus\\w+|forc(?:es|ed|ing)|fondl\\w+|grop\\w+|undress\\w*)\\b(?!\\s+up\\b).{0,25}\\b(?:me|my body|my private)|(?:makes|made)\\s+me\\s+(?:have sex|sleep with|touch|take (?:off )?my clothes|undress)`, "i");
  const SOMEONE_HURTS_ME = /\b(?:someone|somebody|a man|a boy|an older (?:man|boy)|a grown[- ]?up|an adult|a teacher|a stranger)\b.{0,30}\b(?:touch(?:es|ed|ing)|rap(?:es|ed|ing)|molest\w*|forc(?:es|ed|ing)|abus\w+|hurt(?:s|ing)?)\b.{0,20}\b(?:me|my body|my private)/i;
  const HARM = /\b(?:rap(?:e|ed|ist)|molest\w*|incest|sexual(?:ly)? (?:abus\w+|assault\w*)|abus(?:e|ed|ing)|touch(?:es|ed|ing) me|hurt(?:s|ing)? me|forc(?:es|ed|ing) me|made me have sex|makes me have sex|sleep with me|touched my private)\b/i;
  const PREGNANT = /\b(?:pregnan\w*|expecting a baby|having a baby|missed my period|late for my period)\b/i;
  const TELL = /\bhow (?:do|can|should|would|could) i (?:tell|say|talk to|speak to|let)\s+(?:my\s+)?(?:mom|mum|mother|dad|father|parents?|aunt|auntie|teacher|nurse|someone|somebody|a grown[- ]?up|an adult|anyone)\b|\bwho (?:can|should|do) i tell\b|\bi (?:want|need) to tell (?:someone|somebody|a grown[- ]?up|an adult|my (?:mom|mum|mother|dad|father|parents?|teacher))\b/i;

  function childHelpTopic(text) {
    const said = String(text || "").trim();
    if (!said || said.length > 300) return null;
    if (RECORD_OR_DRAFT.test(said) || NEVER.test(said) || LONG_AGO.test(said)) return null;
    const isChild = AGE.test(said) || KID_WORDS.test(said);
    const pregnant = PREGNANT.test(said) && isChild;
    const hurt = (HARM.test(said) && isChild && /\b(?:i|me|my)\b/i.test(said)) || HURTS_ME.test(said) || (SOMEONE_HURTS_ME.test(said) && isChild);
    if (hurt && !/\bmy\s+(?:daughter|son|child|kid|niece|nephew|patient|client)\b/i.test(said)) return pregnant ? "child-pregnant" : "child-hurt";
    if (pregnant && !/\bmy\s+(?:daughter|niece|patient|client|wife|girlfriend|friend)\b/i.test(said)) return "child-pregnant";
    if (TELL.test(said) && (isChild || /\b(?:pregnan\w*|touch(?:es|ed|ing) me|rap(?:e|ed)|abus\w+|molest\w*|something (?:happened|bad happened))\b/i.test(said)) && !/\bmy\s+(?:daughter|son|child|kid|niece|nephew|patient|client)\b/i.test(said)) return "child-tell";
    return null;
  }

  return Object.freeze({ childHelpTopic });
});
