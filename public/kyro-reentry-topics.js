// Which question is about COMING HOME after prison or jail? Asked by a person who has just come home or is about to (or by someone helping them): getting an ID and a Social Security card back, food help, health coverage, benefits, housing, a bank account, work and a record,
// clearing a record, supervision, voting, school, a phone, scams and staying safe on a phone or a library computer, where to get help. The same words are used by the server (nexus/knowledge/reentry-guide.js answers it from the official pages of the United States
// and of California) and by the page (public/app.js), which takes such a question itself instead of leaving it to the voice model (which would answer from memory, with no sources, and could state a rule or a deadline wrongly for a person who is about to act on it).
// It is deliberately narrow. A question is taken ONLY when the person says they are coming home or have a record or are under supervision (just got out, prison, jail, felony, parole, my record, halfway house, reentry) AND asks about one of the subjects; the same
// subject asked by anyone else ("how do I replace my Social Security card?") stays with the rest of Kyro. It is a question or a request to learn, never an order or a record ("remind me about my parole meeting"), never a personal emergency, and never a question
// about Kenya or Nigeria (this guide has only United States pages; the rest of Kyro answers those as before). A person who names California gets California's rule where the guide has one (otherwise the federal rule, with a line saying so).
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.KyroReentryTopics = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  // reentryTopic(text, { country: "ke" | "ng" | null }) -> "reentry-..." | "ca-reentry-..." | null. A pure text matcher: no sources, no answers, no records.
  const NOT_A_GUIDE_QUESTION = /^(?:please\s+)?(?:log|record|add|save|remind|set|mark|delete|remove|forget|call|text|send|play|open|translate|export|cancel|schedule|email|message|read|make me|build|create|write|draft|generate|update|print|show (?:me )?my|apply|file|fill)\b(?!\s+(?:me|us)\s+(?:how|through)\b)/i;
  const BUSINESS_TALK = /\b(?:my|our) (?:business|company|shop|store|farm|organi[sz]ation|employees?|customers?)\b|\bat (?:my|our) (?:business|company|shop|store)\b/i;
  const CALENDAR_OR_NOTES = /\b(?:my calendar|my schedule|my appointments?|my notes?|on my list|my reminders?|my invoices?)\b/i;
  // a personal emergency is never taken here (the safety layer answers it)
  const PERSONAL_EMERGENCY = /\b(?:suicid\w*|kill (?:myself|himself|herself|themselves)|end my life|hurt(?:ing)? (?:myself|himself|herself|themselves)|self[- ]harm|overdos\w+|911|ambulance|can'?t breathe|cannot breathe|chest pain|abus(?:e[ds]?|ing)|molest\w*|rape[d]?|in danger right now|being (?:hurt|attacked|threatened)|i am in (?:a )?crisis|i'?m in (?:a )?crisis)\b/i;
  const CALIFORNIA = /\b(?:california|calif\.?|cdcr|medi-?cal|calfresh|cal-?id|caljobs)\b/i;
  const KENYA = /\b(?:kenya\w*|nairobi|mombasa|kisumu|nakuru|eldoret)\b/i;
  const NIGERIA = /\b(?:nigeria\w*|lagos|abuja|kano|ibadan|port harcourt)\b/i;

  // the person says they are coming home, have a record, or are under supervision
  const REENTRY_CONTEXT = /\b(?:just (?:got|get|came|come|getting|coming) (?:out|home)|(?:got|get|getting|coming|came|come|released|home|out) (?:out )?(?:of|from) (?:prison|jail|lockup|county|state prison|incarceration)|(?:was|been|am|will be|being) (?:released|incarcerated|locked up|in (?:prison|jail))|(?:recently|newly|just) released|release date|re-?entry|re-?entering|incarcerat\w+|formerly incarcerated|after (?:prison|jail|incarceration)|leaving (?:prison|jail)|out of (?:prison|jail)|(?:in|from|to|out of|after|leaving) (?:the )?(?:prison|jail)|coming home|came home|parole\w*|probation|supervised release|halfway house|ankle (?:monitor|bracelet)|felon\w*|felony|convict\w*|(?:criminal|arrest) records?|restitution|(?:have|had|got|with) (?:a |an )?(?:criminal |felony |prison )?record|(?:a|my|the|with a) records?\b[^.!?]{0,30}\b(?:felony|prison|jail|conviction|criminal|background)|my record|with a record|(?:did|served|doing) (?:time|\d+ years?)|ex-?(?:offender|con|inmate|prisoner))\b/i;

  const ASKS = /(?:[?]|^(?:please\s+|kyro,?\s+|nexus,?\s+)?(?:how|what|which|when|where|why|who|should|can|could|do(?! not\b)|does|is|are|will|would|am|tell me|explain|help me|i need|i want|i('| a)m (?:on|in|looking|worried|trying|not sure|just|coming|getting|out)|i (?:think|have|got|just|get|am|was|need|want|can'?t|don'?t|do not|lost|owe|owed|had)|my (?:id|card|record|parole|probation|license)|any|give me|walk me|walk us|take me through|guide me through|talk me through|step[- ]by[- ]step|what are the steps|teach me|learn|find\b|looking for|where do i)\b)/i;

  // the questions in the order they are told apart; the first that fits is the subtopic
  const SUBTOPICS = [
    ["ssn", /\b(?:social security (?:card|number)|ssn|ss card|social card)\b/i],
    ["snap", /\b(?:snap\b|food stamps?|food (?:help|benefits?|assistance)|calfresh|ebt\b|something to eat|groceries)\b/i],
    ["ssi", /\b(?:ssi\b|ssdi|supplemental security|social security (?:check|checks|payments?|benefits?|disability|money)|disability (?:check|checks|benefits?|payments?|money)|my (?:benefit|disability) (?:check|payments?)|(?:checks?|payments?|benefits?) (?:stopped|restart\w*|start again))\b/i],
    ["health", /\b(?:medicaid|medi-?cal|medicare|health (?:insurance|coverage|care|plan)|insurance for my health|see a doctor|need a doctor|medical (?:care|coverage|insurance)|prescriptions?|medications?)\b/i],
    ["id", /\b(?:ids?|identification|birth certificate|driver'?s? licen[sc]e|state id|real id|photo id|dmv|id card|release (?:money|allowance|funds)|gate money|cal-?id|money (?:do )?(?:i|you) (?:get|receive)\b[^.!?]{0,30}\b(?:leave|leaving|released|release|get out)|money when i (?:leave|get out))\b/i],
    ["bank", /\b(?:bank(?:ing)?|checking account|savings account|check[- ]cashing|cash(?:ing)? a check|prepaid (?:debit )?cards?|debit card|credit union|second[- ]chance (?:account|checking)|direct deposit)\b/i],
    ["money-owed", /\b(?:fines?|restitution|court (?:debt|costs?|fees?)|owe\w* (?:money|the court|restitution)|payment plan|fees (?:i owe|owed))\b/i],
    ["housing", /\b(?:housing|apartments?|landlords?|renting|lease|section 8|vouchers?|public housing|shelters?|homeless\w*|(?:place|somewhere|nowhere|no where) to (?:live|stay|sleep|go)|roof over my head|find a room|sleep(?:ing)? (?:in my car|outside|on the street))\b/i],
    ["clearing", /\b(?:expung\w+|seal(?:ing|ed)? (?:my |a )?(?:record|conviction|case)|clear\w* (?:old |my |a |any |the )?(?:records?|convictions?)|clean slate|set aside|pardon\w*|record (?:clearing|relief)|dismiss\w* (?:my |a )?(?:conviction|case|record)|1203\.?4|certificate of rehabilitation|fresh start|get my record (?:cleared|sealed|wiped)|help(?:ing)? with my record|(?:lawyer|attorney|legal aid)\b[^.!?]{0,30}\b(?:record|conviction))\b/i],
    ["voting", /\b(?:vot(?:e|ing|er|ers)|register(?:ing)? to vote|ballots?|elections?)\b/i],
    ["background", /\b(?:background (?:check|report|record)s?|rap sheet|copy of my (?:own )?(?:criminal )?(?:record|history)|(?:see|get|read) my (?:own )?(?:criminal )?record|my own (?:criminal )?record|criminal history (?:report|record)|credit report|errors? on my (?:record|report)|dispute\w*|(?:see|get|ask for) (?:a copy of )?the report)\b/i],
    ["jobs", /\b(?:jobs?|(?:find|finding|get|getting|look(?:ing)? for|need|want|apply(?:ing)? for) (?:a )?work\b|workforce|employ\w+|hir(?:e|ed|es|ing)|interview\w*|resume|bonding|bonded|american job center|job center|tax credit|boss)\b/i],
    ["school", /\b(?:ged|high school equivalency|hiset|school|college|classes|class|pell|financial aid|fafsa|student (?:aid|loans?)|training|certificate program|trade school|adult education|diploma)\b/i],
    ["ai", /\b(?:ai|a\.i\.|artificial intelligence|chat ?bots?|chat ?gpt|ai assistants?)\b/i],
    ["library", /\b(?:library|public|shared) computers?\b|\bcomputers? (?:at|in) the library\b|\bat the library\b/i],
    ["phone-safety", /\b(?:passcode|lock(?:ing)? (?:my |the )?phone|spam (?:calls?|texts?)|robocalls?|(?:safe|safely|safety)\b[^.!?]{0,30}\b(?:phone|computer|online|internet)|(?:phone|computer|online|internet)\b[^.!?]{0,30}\b(?:safe|safely|safety))\b/i],
    ["accounts", /\b(?:login\.?gov|log ?in|email (?:address|account)|e-?mail|(?:create|make|set up|open) an? (?:online )?account|sign up for|passwords?)\b/i],
    ["scams", /\b(?:scams?|scammed|fraud\w*|identity theft|fake (?:call|text|message|email|website)|phishing|trick(?:ed|s|ing) (?:me|us)|conned|cheated (?:me|us)|ripped (?:me|us) off|stole (?:my )?money|took my money)\b/i],
    ["phone", /\b(?:lifeline|free phone|phone (?:plan|service|bill)|cell ?phone|(?:free|cheap(?:er)?|low[- ]cost|affordable) (?:phone|internet)|internet (?:service|plan|access)|wi-?fi|data plan|affordable connectivity|a phone|my phone|smartphone)\b/i],
    ["supervision", /\b(?:parole (?:officer|rules?|conditions?|meetings?|hearings?|violations?|requirements?)|probation (?:officer|rules?|conditions?|meetings?|hearings?|violations?|requirements?)|(?:how|what) (?:does|do|is|are) (?:parole|probation|supervised release)|supervis\w+|check[- ]?ins?|ankle (?:monitor|bracelet)|halfway house|conditions? of (?:my )?(?:release|parole|probation)|my officer|reporting to)\b/i],
    ["help", /\b(?:hotlines?|988|211|legal aid|lawyer|attorney|treatment|counsel(?:ing|or)|case manager|reentry (?:program|services?|center)|who (?:can|do|should) i (?:call|talk to|ask|contact)|where (?:can|do|should) i (?:get|find) help|need help|someone to talk to|help me)\b/i],
    ["start", /\b(?:where (?:do|should) i (?:start|begin)|first (?:week|thing|steps?|days?)|what (?:do|should) i do|what to do (?:first|now|next)|just (?:got|get|came|come) (?:out|home)|came home|now that i'?m (?:home|out)|take care of|coming home|re-?entry|first things|get started|getting started|need to do|after (?:prison|jail)|what now|released|when i (?:get|am) out|what do i get|i get out)\b/i]
  ];

  const US_OF = { start: "reentry-start", ssn: "reentry-ssn-card", id: "reentry-id", snap: "reentry-snap", health: "reentry-health", ssi: "reentry-ssi-ssdi", housing: "reentry-housing", bank: "reentry-bank", "money-owed": "reentry-money-owed", jobs: "reentry-jobs", background: "reentry-background-check", clearing: "reentry-record-clearing", supervision: "reentry-supervision", voting: "reentry-voting", help: "reentry-help", school: "reentry-school", phone: "reentry-phone-lifeline", scams: "reentry-scams", "phone-safety": "reentry-phone-safety", ai: "reentry-ai-basics", library: "reentry-library-computer", accounts: "reentry-accounts" };
  const CA_OF = { id: "ca-reentry-id", health: "ca-reentry-medi-cal", snap: "ca-reentry-calfresh", jobs: "ca-reentry-jobs", background: "ca-reentry-records", clearing: "ca-reentry-records", voting: "ca-reentry-voting", phone: "ca-reentry-lifeline" };

  // "background check" for a job is about an employer; the person's own report is about their record
  const EMPLOYER_WORDS = /\b(?:employ\w*|jobs?|hir(?:e|ed|es|ing)|work|boss|apply(?:ing)?)\b/i;

  function subtopicOf(text) {
    for (const [key, test] of SUBTOPICS) {
      if (!test.test(text)) continue;
      // a phone word keeps a question with phone safety ("locking my phone and using a public computer")
      if (key === "library" && /\b(?:passcode|lock(?:ing)?|spam|robocalls?|my phone|the phone)\b/i.test(text)) continue;
      if (key === "background" && /background (?:check|report)/i.test(text) && EMPLOYER_WORDS.test(text) && !/\b(?:my own|copy of|rap sheet|dispute\w*|errors?)\b/i.test(text)) return "jobs";
      return key;
    }
    return null;
  }

  // California is named (a CDCR, Medi-Cal or CalFresh word is a California word); a device's state is not guessed
  function placeOf(text) {
    return CALIFORNIA.test(text) ? "ca" : "us";
  }

  function reentryTopic(text, options) {
    const value = String(text || "").replace(/[’]/g, "'").replace(/\s+/g, " ").trim();
    if (!value || value.length > 300) return null;
    if (NOT_A_GUIDE_QUESTION.test(value) || CALENDAR_OR_NOTES.test(value) || PERSONAL_EMERGENCY.test(value) || BUSINESS_TALK.test(value)) return null;
    if (KENYA.test(value) || NIGERIA.test(value) || (options && (options.country === "ke" || options.country === "ng"))) return null;
    if (!REENTRY_CONTEXT.test(value) || !ASKS.test(value)) return null;
    const sub = subtopicOf(value);
    if (!sub) return null;
    if (placeOf(value) === "ca") return CA_OF[sub] || US_OF[sub] || null;
    return US_OF[sub] || null;
  }

  const clean = text => String(text || "").replace(/[’]/g, "'").replace(/\s+/g, " ").trim();
  const NOT_THIS_GUIDE = value => NOT_A_GUIDE_QUESTION.test(value) || CALENDAR_OR_NOTES.test(value) || PERSONAL_EMERGENCY.test(value) || BUSINESS_TALK.test(value) || KENYA.test(value) || NIGERIA.test(value);

  // The voice system hands over what a person says in pieces, cut at a pause: "I just got out of prison." arrives first and "How do I see what is on my background check?" arrives alone, without the words that show they are coming home
  // (found by the live voice test on 26 October 2026: the second piece was answered from memory, with no sources). The page remembers the words that showed it, for a short while, and joins them to a later question.
  // contextOf(text) -> the sentence that shows the person is coming home, to remember, or null. A sentence that already asks about a subject was answered when it was said, and is not remembered.
  function contextOf(text) {
    const value = clean(text);
    if (!value || value.length > 300 || NOT_THIS_GUIDE(value) || !REENTRY_CONTEXT.test(value)) return null;
    const sentence = value.split(/(?<=[.?!])\s+/).find(part => REENTRY_CONTEXT.test(part)) || "";
    if (!sentence || sentence.length > 120) return null;
    const sub = subtopicOf(sentence);
    return sub && sub !== "start" ? null : sentence;
  }
  // withContext(text, remembered, options) -> the remembered sentence and the question joined (to be asked as one), or null when the question is an order, a record, an emergency or not about a subject of this guide.
  function withContext(text, remembered, options) {
    const value = clean(text);
    const before = clean(remembered);
    if (!value || !before || value.length > 300 || NOT_THIS_GUIDE(value)) return null;
    // (the question itself must name a subject: the remembered words alone would point to the start topic for any question at all)
    if (!subtopicOf(value)) return null;
    const joined = `${before} ${value}`;
    return reentryTopic(joined, options) ? joined : null;
  }

  return Object.freeze({ reentryTopic, contextOf, withContext, placeOf, CALIFORNIA, REENTRY_CONTEXT });
});
