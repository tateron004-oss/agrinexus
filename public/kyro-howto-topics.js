// Which request is "walk me through using this part of Kyro"? The same words are used by the server (nexus/knowledge/howto-walkthroughs.js has the steps) and by the page (public/app.js takes such a turn itself instead of leaving it to
// the voice model, which would explain from memory and could tell a person something Kyro cannot do). It is deliberately narrow: a topic is taken only when the words ASK to be taught or walked through AND name a part of Kyro
// (the shopping list, the farm log, reminders, a trusted circle, ...). A plain use of the feature ("show my notes", "add a reminder for six") is never taken: that is the feature itself, and it still does what it did. A question
// that is about a guide's subject ("walk me through registering a business") has no part-of-Kyro word and is the guide's. The person's own records, orders ("send", "call"), and any personal emergency are never taken.
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.KyroHowtoTopics = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  // howtoTopic(text) -> "howto-start" | "howto-lists" | ... | null     A pure text matcher: no steps, no records.
  const NOT_A_GUIDE_QUESTION = /^(?:please\s+)?(?:log|record|add|save|remind|set|mark|delete|remove|forget|call|text|send|play|open|translate|export|cancel|schedule|email|message|pray|read|show|find|create|make|write|start|build)\b(?!\s+(?:me|us)\s+(?:how|through)\b)/i;
  const PERSONAL_EMERGENCY = /\b(?:suicid\w*|kill myself|end my life|hurt myself|self[- ]harm|overdos\w+|911|ambulance|heart attack|can'?t breathe|i(?:'m| am) in (?:a )?crisis|domestic violence|abuse[ds]?|being hurt|in danger)\b/i;
  // being walked through or taught: "walk me through", "teach me", "show me how to use", "how do I use", "step by step", "what are the steps"
  const ASK = /\b(?:(?:walk|guide|talk|take|lead|teach|show) (?:me|us) (?:through|how to|how i can|how we can|to use|about)|walk us|teach (?:me|us)|step[- ]by[- ]step|what are the steps|how (?:do|can|would|should) (?:i|we) (?:use|set up|get started with|start using|learn)|learn(?:ing)? (?:to use|how to use)|help me (?:learn|get started with|understand how to use))\b/i;
  // "show me how to register my business" and the like are a guide's: a part of Kyro must be named
  const FEATURES = [
    ["howto-start", /\b(?:using|use|talking to|talk to|speaking to|speak to|getting started with|get started with|start(?:ing)? with|learn(?:ing)? to use) (?:kyro|the app|the orb|nexus)\b|\bgetting started\b|\bhow (?:does|do) kyro work\b|\bhow to use kyro\b/i],
    ["howto-lists", /\b(?:shopping|to-?do|grocery|packing|task|seed|supply) ?(?:lists?|checklists?)\b|\bchecklists?\b|\bmy lists\b/i],
    ["howto-offline", /\boffline (?:notes?|queue|screen)\b|\bwithout (?:the )?internet\b|\bno signal\b/i],
    ["howto-notes", /\b(?:the |my |a )?notes? (?:screen|page|feature)\b|\bwriting (?:a )?notes?\b|\btaking notes?\b|\bsaving (?:a )?notes?\b|\bkeeping notes\b|\busing (?:the |my )?notes\b/i],
    ["howto-calendar", /\b(?:the |my )?calendar\b/i],
    ["howto-reminders", /\breminders?\b/i],
    ["howto-contacts", /\b(?:my )?contacts?\b(?= (?:list|book|screen))|\bsav(?:e|ing) (?:a )?(?:phone )?numbers?\b|\bcontacts\b|\baddress book\b/i],
    ["howto-memory", /\bwhat kyro (?:knows|remembers)\b|\bkyro remembers\b|\bmemory book\b|\bhow kyro remembers\b/i],
    ["howto-brief", /\bmorning brief\b|\bweather alerts?\b|\bweekly summary\b/i],
    ["howto-ask", /\basking (?:kyro )?(?:questions|for (?:pictures|videos|music))\b|\bfind(?:ing)? (?:pictures|videos)\b|\bplaying music\b|\bpictures and videos\b|\bsearch(?:ing)? the web\b/i],
    ["howto-farm-log", /\bfarm log\b|\blogging (?:the )?(?:rain|rainfall|harvests?|soil)\b|\brain, tank, soil\b/i],
    ["howto-fields", /\b(?:my )?fields? and planting\b|\bplanting (?:records?|log)\b|\brecording (?:a )?(?:field|planting)\b/i],
    ["howto-stock", /\bstock in the shed\b|\bshed stock\b|\bfarm stock\b|\bfarm inventory\b|\bshed inventory\b/i],
    ["howto-animals", /\b(?:farm )?animal records?\b|\bkeeping (?:track of )?(?:my )?(?:farm )?animals\b|\blivestock records?\b|\bmy animals in kyro\b/i],
    ["howto-farm-money", /\bfarm (?:money|income|expenses|accounts)\b|\bmoney in and out of the farm\b/i],
    ["howto-farm-buyers", /\bfarm buyers\b|\bbuyers and orders\b|\bnotice board\b|\bfarm orders\b/i],
    ["howto-farm-tasks", /\bfarm (?:tasks|workers|journal|reports)\b|\bco-?op records?\b|\bfarm budget and loans\b/i],
    ["howto-market-prices", /\bmarket prices\b|\bcrop advice\b|\bcrop help\b/i],
    ["howto-maps", /\b(?:the )?map(?:s)?(?: screen| feature)?\b(?= (?:and|or|in|on|with|to find))|\busing (?:the )?maps?\b|\bmaps, routes\b|\bdelivery times\b|\bfind(?:ing)? (?:a )?route\b/i],
    ["howto-gps", /\bgps\b|\bsav(?:e|ing) (?:my )?home\b|\btake me home\b/i],
    ["howto-bp-log", /\blog(?:ging)? (?:my )?blood pressure\b|\bblood pressure (?:log|diary|readings? in kyro)\b|\brecord(?:ing)? (?:my )?blood pressure (?:in|with) kyro\b/i],
    ["howto-sugar-log", /\blog(?:ging)? (?:my )?blood sugar\b|\bblood sugar (?:log|diary|readings? in kyro)\b|\brecord(?:ing)? (?:my )?blood sugar (?:in|with) kyro\b/i],
    ["howto-wellbeing-log", /\b(?:sleep|mood|water|weight|workout)\b[^.!?]{0,30}\b(?:log|logging|tracking|track)\b|\b(?:log|logging|tracking|track)\b[^.!?]{0,30}\b(?:sleep|mood|water|weight|workouts?)\b/i],
    ["howto-medicine-reminders", /\b(?:medicine|medication|pill) reminders?\b|\bmedic(?:ine|ation)s? in kyro\b/i],
    ["howto-checkins", /\bcheck-?ins?\b|\bdaily check ?in\b/i],
    ["howto-circle", /\btrusted circle\b|\bemergency (?:alerts?|contacts?)\b|\bmy circle\b/i],
    ["howto-health-worker", /\bhealth worker (?:record book|records?|book)\b|\bcommunity health worker records?\b/i],
    ["howto-find-care", /\bfind(?:ing)? (?:a )?(?:clinic|pharmacy)(?: or (?:a )?(?:clinic|pharmacy))?(?: with kyro| in kyro)\b|\btelehealth (?:request|help)\b/i],
    ["howto-business-records", /\bcrm\b|\bbusiness record book\b|\bcustomer records?\b|\b(?:customers?|clients?|leads|donors|volunteers) (?:in|with) kyro\b|\bbusiness page\b/i],
    ["howto-invoices", /\binvoices?\b|\bincome and expenses\b|\bsales and expenses\b|\breceipts? in kyro\b/i],
    ["howto-property", /\bproperty listings?\b|\bshowings?\b|\breal estate (?:records?|listings?)\b/i],
    ["howto-drafts", /\b(?:flyer|agreement|pitch|marketing) drafts?\b|\bdrafts? (?:of )?(?:a )?(?:flyer|agreement|pitch)\b|\bmaking (?:a )?(?:flyer|pitch)\b/i],
    ["howto-jobs", /\bjob search\b|\bfinding jobs\b|\bsearching for jobs\b|\blessons and courses\b|\blearning (?:screen|section)\b/i],
    ["howto-upload", /\buploads?\b|\bupload(?:ing)? a (?:file|picture|photo|pdf|document)\b/i],
    ["howto-documents", /\bdocuments? (?:screen|page|and exports)\b|\bmaking (?:a )?documents? (?:in|with) kyro\b|\bexports?\b/i],
    ["howto-privacy", /\bdownload(?:ing)? (?:all )?my (?:data|information)\b|\bdelet(?:e|ing) my (?:data|account)\b|\bprivacy (?:settings|screen|and data)\b|\bmy data\b/i],
    ["howto-install", /\binstall(?:ing)? (?:kyro|the app)\b|\badd(?:ing)? (?:kyro )?to (?:my )?home screen\b|\bkyro as an app\b/i],
    ["howto-signin", /\bsign(?:ing)? in\b|\bguest (?:mode|account)\b|\bstay(?:ing)? signed in\b|\bsigned in\b/i],
    ["howto-automations", /\bautomations?\b/i],
    ["howto-screens", /\b(?:open(?:ing)?|clos(?:e|ing)) (?:the )?screens?\b|\bscreens? (?:open|close)\b/i],
    ["howto-language", /\b(?:chang(?:e|ing)|switch(?:ing)?) (?:the |my )?language\b|\btalk(?:ing)? (?:to kyro )?in (?:swahili|spanish)\b/i]
  ];

  function howtoTopic(text) {
    const said = String(text == null ? "" : text).replace(/\s+/g, " ").trim();
    if (!said || said.length > 220) return null;
    const plain = said.replace(/^(?:(?:hey|hi|hello|ok|okay)[,.!]?\s+)?(?:(?:kyro|nexus)[,.:!]?\s+)?/i, "");
    if (NOT_A_GUIDE_QUESTION.test(plain) || PERSONAL_EMERGENCY.test(plain) || !ASK.test(plain)) return null;
    // a "my ..." records request is the feature, not the lesson: "walk me through my notes" is not taught as how to use notes
    if (/\b(?:through|show me|take me through)\s+(?:my|our)\s+(?!own\b)/i.test(plain) && !/\b(?:using|use|setting up|how to)\b/i.test(plain)) return null;
    for (const [topic, pattern] of FEATURES) if (pattern.test(plain)) return topic;
    return null;
  }

  return Object.freeze({ howtoTopic, TOPICS: Object.freeze(FEATURES.map(([topic]) => topic)) });
});
