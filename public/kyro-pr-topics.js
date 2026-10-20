// Which question about PUBLIC RELATIONS and EVENTS for a small business is this? The same words are used by the server (nexus/knowledge/pr-events-guide.js answers it) and by the page (public/app.js), which takes such a question itself
// instead of leaving it to the voice model (which would answer from memory, with no sources, and could state a rule wrongly). It is deliberately narrow: a topic is taken only when the question names the thing (a press release, a crisis
// communication plan, an influencer disclosure, an event to plan or make accessible, hiring a PR firm ...). A person's own records, the calendar, "add an event", a drafting order for something else, fake reviews (the technology guide's),
// and anything about a personal emergency or wanting to die is never taken.
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.KyroPrTopics = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  // prTopic(text) -> "pr-overview" | "press-release" | "influencer-disclosure" | "ad-rules" | "crisis-communication" | "event-planning" | "event-permits" | "event-accessibility" | "hire-pr-firm" | "measure-results"
  //                  | "stakeholder-engagement" | "brand-strategy" | null. A pure text matcher: no sources, no answers, no records.
  const NOT_A_GUIDE_QUESTION = /^(?:please\s+)?(?:log|record|add|save|remind|set|mark|delete|remove|forget|call|text|send|play|open|translate|export|register|cancel|schedule)\b/i;
  const CALENDAR_OR_RECORDS = /\b(?:my calendar|my schedule|my appointments?|my invoices?|my customers?|my leads?|on my list)\b/i;
  const PERSONAL_EMERGENCY = /\b(?:suicid\w*|kill myself|end my life|hurt myself|self[- ]harm|overdos\w+|911|ambulance|heart attack|can'?t breathe|i(?:'m| am) in (?:a )?crisis|domestic violence|abuse[ds]?|rape[d]?)\b/i;
  // the fake review / testimonial rule has its own answer in the technology guide
  const FAKE_REVIEWS = /\b(?:fake|bought|buy(?:ing)?|paid[- ]for|incentivi[sz]ed?|ai[- ]generated)\s+(?:reviews?|testimonials?)\b|\breviews? and testimonials? rule\b/i;
  const BUSINESS_WORDS = /\b(?:business|company|brand|customers?|clients?|press|media|reporters?|public|reputation|staff|employees|communications?|pr|publicity|event)\b/i;

  const POSITIVE = [
    // influencer / sponsored posts: what must be disclosed
    ["influencer-disclosure", text => /\b(?:influencers?|sponsored (?:posts?|content)|paid partnerships?|brand ambassadors?|affiliate links?|gifted (?:products?|items?)|#ad|#sponsored)\b/i.test(text) && /\b(?:disclos\w*|rules?|legal|law|required|require|have to|need to|must|label|ftc|say|tell)\b/i.test(text)],
    // the FTC's advertising rules
    ["ad-rules", text => /\btruth[- ]in[- ]advertising\b|\bis (?:my|this|our) (?:ad|advert\w*|campaign|claim)\b.{0,20}\b(?:legal|allowed|ok|okay|compliant)\b|\b(?:advertis\w+|ad|ads|marketing) (?:rules?|laws?|regulations?|standards?|compliance)\b|\b(?:rules?|laws?) (?:for|about|on) (?:advertis\w+|ads|marketing claims?)\b|\bwhat can i (?:say|claim) in (?:my |an? )?(?:ad|ads|advert\w*|marketing)\b|\bftc\b.{0,30}\b(?:advertis\w+|marketing|claims?)\b/i.test(text)],
    // a crisis: only with a business / reputation word, so "crisis plan" alone is never taken
    ["crisis-communication", text => (/\bcrisis (?:communications?|management|statement|response|pr)\b|\bpr crisis\b|\bbad (?:press|publicity)\b|\bnegative (?:press|publicity|coverage|attention)\b|\breputation (?:crisis|damage|management)\b|\bdamage control\b|\bholding statement\b|\bpublic apology\b|\b(?:handle|handling|respond(?:ing)? to) (?:a |the )?(?:scandal|backlash|controversy|negative review)\b/i.test(text) || (/\bcrisis (?:plan|planning)\b/i.test(text) && BUSINESS_WORDS.test(text) && /\b(?:business|company|brand|press|media|reputation|communications?|customers?)\b/i.test(text)))],
    // making an event accessible
    ["event-accessibility", text => /\b(?:event|conference|meeting|workshop|webinar|launch|party|gala|fundraiser|open house)\b.{0,60}\b(?:accessib\w+|\bada\b|sign language|interpreter|captioning|disabilit\w+|wheelchair)\b|\b(?:accessib\w+|\bada\b)\b.{0,60}\b(?:event|conference|workshop|webinar|launch)\b|\b(?:sign language|interpreter|captioning|captions)\b.{0,40}\b(?:event|conference|workshop|webinar|launch|party|gala)\b/i.test(text)],
    // a permit or insurance for an event
    ["event-permits", text => /\b(?:permits?|licen[cs]es?|insurance)\b.{0,50}\b(?:event|festival|pop-?up|street fair|grand opening|ribbon[- ]cutting)\b|\b(?:event|festival|pop-?up|street fair|grand opening)\b.{0,50}\b(?:permits?|licen[cs]es?)\b/i.test(text)],
    // hiring a PR, communications or event firm
    ["hire-pr-firm", text => /\b(?:hire|hiring|choose|choosing|find|select|selecting|work(?:ing)? with|brief(?:ing)?|what to ask|what (?:should|do) i ask|questions? (?:to ask|for))\b.{0,40}\b(?:pr (?:firm|agency|company)|public relations (?:firm|agency|company)|publicists?|event (?:planners?|production|company|companies|producers?|agency)|communications? (?:firm|agency)|marketing agency|an? agency)\b|\bpr (?:brief|proposal)\b|\bbrief (?:for|to) (?:a|an|my|the) (?:pr|event|agency|publicist)\b/i.test(text)],
    // press releases and media relations
    ["press-release", text => /\bpress (?:releases?|kit)\b|\bmedia (?:relations|list|kit|pitch|outreach)\b|\bpitch(?:ing)? (?:a |the )?(?:reporters?|journalists?|editors?|story|stories|media)\b|\b(?:get|getting) (?:press|media|news) (?:coverage|attention)\b|\bget (?:in|into) the (?:news|paper|newspaper)\b|\bget (?:covered|featured) (?:by|in) (?:the )?(?:news|media|press|local)\b/i.test(text)],
    // planning an event
    ["event-planning", text => (/\b(?:plan(?:ning)?|organi[sz](?:e|ing)|run(?:ning)?|host(?:ing)?|put(?:ting)? on|produc(?:e|ing)|throw(?:ing)?)\s+(?:an?\s+|my\s+|our\s+)?(?:[a-z'-]+\s+){0,2}(?:event|launch|grand opening|open house|ribbon[- ]cutting|networking event|pop-?up|product launch)\b/i.test(text) || /\bevent (?:checklist|planning|production|run[- ]of[- ]show|timeline|budget)\b|\brun[- ]of[- ]show\b|\bhow (?:do|can|should) i (?:launch|open) (?:my|a|the) (?:business|shop|store|product)\b.{0,30}\bevent\b/i.test(text))],
    // measuring results
    ["measure-results", text => /\b(?:measure|track|prove|report on|tell if)\b.{0,40}\b(?:pr|public relations|media coverage|publicity|campaign|event|brand awareness)\b.{0,30}\b(?:results?|success|impact|roi|worth(?:while)?|worked|working)\b|\bpr (?:analytics|metrics|results|roi)\b|\bhow (?:do|can) i (?:know|tell) (?:if|whether) (?:my )?(?:pr|publicity|event|campaign)\b/i.test(text)],
    // stakeholders
    ["stakeholder-engagement", text => /\bstakeholders?\b.{0,40}\b(?:engage\w*|communicat\w*|plan|map\w*|list|identify)\b|\b(?:engage|engaging|identify|identifying|communicate with)\s+(?:my |our |the )?stakeholders?\b|\bstakeholder (?:engagement|communications?)\b/i.test(text)],
    // brand strategy
    ["brand-strategy", text => /\bbrand (?:strategy|identity|story|voice|positioning|messaging|guidelines)\b|\b(?:build|building|create|creating|develop|developing|define|defining) (?:my |a |our )?brand\b|\bhow (?:do|can) i (?:brand|rebrand)\b/i.test(text)],
    // what Kyro can do for PR and events
    ["pr-overview", text => /\b(?:what is|what's|explain|how does|how do i do|help (?:me )?with|can you help (?:me )?with|how (?:can|could) you help)\b.{0,50}\b(?:pr|public relations|publicity|event (?:planning|production))\b/i.test(text) && !/\b(?:calendar|schedule|appointment|invoice)\b/i.test(text)]
  ];

  const ASKS = /(?:[?]|^(?:please\s+|kyro,?\s+|nexus,?\s+)?(?:how|what|which|when|where|why|who|should|can|could|do|does|is|are|will|would|tell me|explain|help me|i need|i want|i('| a)m looking for|i would like|i'd like|any|give me|show me|walk me|write|draft|make|create|prepare|teach me)\b)/i;

  function prTopic(text) {
    const value = String(text || "").replace(/\s+/g, " ").trim();
    if (!value || value.length > 300) return null;
    if (NOT_A_GUIDE_QUESTION.test(value) || CALENDAR_OR_RECORDS.test(value) || PERSONAL_EMERGENCY.test(value) || FAKE_REVIEWS.test(value)) return null;
    if (!ASKS.test(value)) return null;
    for (const [topic, test] of POSITIVE) if (test(value)) return topic;
    return null;
  }

  return Object.freeze({ prTopic });
});
