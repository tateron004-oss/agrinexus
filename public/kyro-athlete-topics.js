// Which question about being an ATHLETE (from a school team to a professional) is this? The same words are used by the server (nexus/knowledge/athlete-guide.js answers it) and by the page (public/app.js), which takes such a question
// itself instead of leaving it to the voice model (which would answer from memory, with no sources, and could state a rule wrongly: what a college athlete may be paid, what is allowed in a supplement, what to do after a blow to the head).
// It is deliberately narrow: a topic is taken only when the question names an athlete word (athlete, a sport, a team, a race, NCAA ...) or, for food, rest and training, a training word, AND the thing asked (eating, under-fuelling,
// supplements and doping, training amounts, sleep and a strained muscle, a concussion, heat, pressure and mental health, abuse in sport, eligibility, name-image-likeness deals, agents, taxes, endorsements, starting a business, a youth club,
// money after sport). An order to make or save something ("make me a meal plan", "log a workout"), a person's own records, the calendar, and anything that sounds like a personal emergency or wanting to die is never taken.
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.KyroAthleteTopics = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  // athleteTopic(text) -> "athlete-overview" | "athlete-nutrition" | "athlete-energy" | "athlete-supplements" | "athlete-training" | "athlete-recovery" | "athlete-concussion" | "athlete-heat" | "athlete-mental" | "athlete-safesport"
  //   | "athlete-eligibility" | "athlete-nil" | "athlete-agent" | "athlete-taxes" | "athlete-brand" | "athlete-business" | "athlete-club" | "athlete-money" | null.
  // A pure text matcher: no sources, no answers, no records.
  const NOT_A_GUIDE_QUESTION = /^(?:please\s+)?(?:log|record|add|save|remind|set|mark|delete|remove|forget|call|text|send|play|open|translate|export|cancel|schedule|email|message|read|make|build|create|write|draft|generate|design|show|list|undo|start (?:a|my) (?:timer|stopwatch|workout log))\b/i;
  const CALENDAR_OR_RECORDS = /\b(?:my calendar|my schedule|my appointments?|my invoices?|my customers?|my leads?|on my list|my training log|my workout log|my notes?|my stats|my scores?)\b/i;
  const PERSONAL_EMERGENCY = /\b(?:suicid\w*|kill myself|end my life|hurt myself|self[- ]harm|overdos\w+|911|ambulance|heart attack|can'?t breathe|cannot breathe|chest pain|passed out|pass(?:ing)? out|fainted|collapsed|unconscious|seizure|seizing|not breathing|i(?:'m| am) in (?:a )?crisis|domestic violence|rape[d]?|abus(?:e[ds]?|ing) me|touched me|molest\w*)\b/i;
  // an athlete word: the person, a sport, a team or league. "track" and "player" alone are not (a music player, tracking spending).
  const ATHLETE = /\b(?:athletes?|student[- ]athletes?|athletics|athletic (?:department|scholarship|director|program|career|performance)|sports?|sportsmen|sportswomen|(?:pro|professional|college|collegiate|high school|youth|club|varsity|amateur|elite|olympic) (?:players?|runners?|swimmers?|wrestlers?)|varsity|ncaa|naia|nfhs|usada|wada|olympi\w+|paralympi\w+|football|soccer|basketball|baseball|softball|volleyball|track and field|track team|track meet|runners?|sprinters?|marathon\w*|wrestl\w+|swimm\w+|gymnast\w*|boxers?|boxing|cyclists?|triathl\w+|rugby|cricket|hockey|lacrosse|tennis|golfers?|weightlift\w+|powerlift\w+|crossfit|preseason|pre-season|offseason|off-season|in-season|game day|race day|my team|our team|teammates?)\b/i;
  // training words, enough for food, rest and training questions on their own
  const TRAINING_WORD = /\b(?:training|trains?|trained|workouts?|work out|practice|practices|scrimmage|competitions?|tournaments?|race|races|games?|match|matches|lifting|lift|lifts|running|jogging|cycling|swimming|conditioning|strength and conditioning|cardio|sprints?|drills?)\b/i;

  const POSITIVE = [
    // taxes on what an athlete earns or is given
    ["athlete-taxes", text => /\b(?:tax(?:es|ed|able|ation)?|1099|w-?2|w-?9|irs|self[- ]employ\w*|estimated (?:tax|payments?)|write[- ]?offs?|deduct\w*|jock tax|multi[- ]state|other states|nonresident|1040|schedule c)\b/i.test(text) && (ATHLETE.test(text) || /\b(?:scholarship|nil|sponsorship|signing bonus|prize money|appearance fees?|endorsement)\b/i.test(text))],
    // being hit in the head
    ["athlete-concussion", text => /\b(?:concussions?|head injur\w+|blow to the head|hit (?:in|on) the head|hit (?:my|his|her|their) head|bump(?:ed)? (?:my|his|her|their) head|knocked out|dizzy after|return[- ]to[- ]play|heads up)\b/i.test(text) && (ATHLETE.test(text) || TRAINING_WORD.test(text) || /\bconcussions?\b/i.test(text))],
    // heat illness
    ["athlete-heat", text => /\b(?:heat (?:illness|exhaustion|stroke|cramps?)|heatstroke|overheat\w*|in the heat|in (?:hot|humid) weather|hot weather|hot day|humidity)\b/i.test(text) && (ATHLETE.test(text) || TRAINING_WORD.test(text))],
    // doping, banned substances, supplements
    ["athlete-supplements", text => (/\b(?:dop(?:e|ing)|anti[- ]doping|banned (?:substances?|list)|prohibited (?:substances?|list)|drug test\w*|tue|therapeutic use exemptions?|usada|wada|aiu|adak|global dro|athletics integrity|failed (?:a )?drug test)\b/i.test(text)
        || /\b(?:supplements?|creatine|pre[- ]workout|protein powders?|energy drinks?|steroids?|stimulants?|performance[- ]enhancing)\b/i.test(text) && (ATHLETE.test(text) || TRAINING_WORD.test(text)))],
    // eating too little for the training, eating disorders
    ["athlete-energy", text => (/\b(?:red-?s|relative energy deficiency|low energy availability|under[- ]?(?:eating|fuel\w*)|not eating enough|eating disorders?|anorexi\w+|bulimi\w+|disordered eating|female athlete triad|cutting weight|make weight|weight cut)\b/i.test(text)
        || /\b(?:lose|losing|cut|cutting|drop|dropping) (?:weight|pounds|kilos?)\b/i.test(text) && ATHLETE.test(text)) && (ATHLETE.test(text) || TRAINING_WORD.test(text) || /\bred-?s\b|relative energy deficiency|female athlete triad/i.test(text))],
    // what to eat and drink
    ["athlete-nutrition", text => /\b(?:eat|eating|food|foods|meals?|snacks?|nutrition|diet|carbs?|carbohydrates?|protein|hydrat\w+|drink(?:ing)?|fluids?|water|electrolytes?|sports drinks?|fuel(?:ing)?|calories)\b/i.test(text) && (ATHLETE.test(text) || TRAINING_WORD.test(text)) && !/\b(?:diabet\w+|blood sugar|pregnan\w+|allerg\w+|kidney|cancer)\b/i.test(text)],
    // pressure, anxiety, burnout
    ["athlete-mental", text => /\b(?:pressure|stress(?:ed)?|anxi\w+|burn(?:ed|t)?[- ]?out|depress\w+|mental health|performance anxiety|choking|overwhelm\w*|panic|sad|lonely|struggling|confidence|fear of failure)\b/i.test(text) && (ATHLETE.test(text) || /\b(?:coach|scholarship|recruit\w*|tryouts?|my sport)\b/i.test(text))],
    // abuse, misconduct, a coach who crosses a line
    ["athlete-safesport", text => /\bsafe ?sport\b/i.test(text) || (/\b(?:safe ?sport|us center for safesport|u\.?s\.? center for safesport|abuse|misconduct|grooming|hazing|bullying|harass\w+|inappropriate|mandatory report\w*|report (?:a|an|my) coach)\b/i.test(text) && (ATHLETE.test(text) || /\b(?:coach|coaches|trainer|team|club)\b/i.test(text)))],
    // a pulled muscle, resting, sleeping, overuse
    ["athlete-recovery", text => (/\b(?:sleep|rest days?|recover\w*|overuse|overtrain\w*|burnout|sore(?:ness)?|strain(?:ed)?|pulled (?:a )?muscle|hamstring|groin|calf|quad|shin splints|sprain\w*|tendon\w*|stress fracture|injur\w+|tight(?:ened|ens)?|cramps?)\b/i.test(text)) && (ATHLETE.test(text) || TRAINING_WORD.test(text))],
    // how much to train
    ["athlete-training", text => /\b(?:how (?:often|many|much|long)|how many days|minutes (?:a|per) (?:day|week)|strength training|resistance training|lift(?:ing)? weights|weight training|conditioning|warm[- ]?up|cool[- ]?down|stretch\w*|off[- ]?season|periodi[sz]ation|training load|overload|train(?:ing)? (?:for|every|each|too|enough))\b/i.test(text) && (ATHLETE.test(text) || TRAINING_WORD.test(text)) && !/\b(?:job training|on[- ]the[- ]job|training course|training video)\b/i.test(text)],
    // who may play: eligibility, recruiting, scholarships
    ["athlete-eligibility", text => /\b(?:eligib\w+|eligibility center|amateur(?:ism)?|recruit\w*|scholarships?|transfer portal|redshirt\w*|commit(?:ment|ted)? to|signing day|national letter of intent|nli|college (?:coach|coaches|scout\w*)|play (?:in )?college|play (?:d1|d2|d3|division)|d1|d2|d3|division (?:i|1|ii|2|iii|3)|naia|njcaa|junior college|walk[- ]on|clearinghouse)\b/i.test(text) && (ATHLETE.test(text) || /\b(?:scholarships?|recruit\w*|eligibility|transfer portal|redshirt\w*|signing day|national letter of intent)\b/i.test(text))],
    // paid deals for a college or school athlete
    ["athlete-nil", text => (/\b(?:nil|name,? image,? (?:and|&) likeness|name image likeness|collective|revenue[- ]shar\w+|house settlement|college sports commission|nil go|sponsorships?|endorsement deals?|brand deals?|get paid|pay(?:ing)? (?:college|student) athletes?|paid (?:as|for being) (?:a )?(?:college|student|high school))\b/i.test(text) && (/\b(?:college|collegiate|student[- ]athletes?|ncaa|naia|high school|school|university|d1|d2|d3|varsity|nil|name,? image)\b/i.test(text)))],
    // choosing and dealing with an agent or manager
    ["athlete-agent", text => /\b(?:agents?|sports agent|athlete agent|representation|manager|certified agent|agent contract|agent fees?|commission)\b/i.test(text) && (ATHLETE.test(text) || /\b(?:nfl|nba|mlb|nhl|wnba|mls|professional)\b/i.test(text)) && !/\b(?:real estate|travel|insurance|customer service)\b/i.test(text)],
    // endorsements and posting about a brand (the FTC)
    ["athlete-brand", text => (/\b(?:personal brand\w*|my brand|build (?:a|my) brand|brand building|social media (?:following|presence|account)|influencers?|content creator|endorse\w*|sponsor\w*|#ad|disclos\w+|paid partnership|merch(?:andise)?|apparel line|my (?:own )?(?:clothing|apparel|shoe|supplement) (?:line|brand|company))\b/i.test(text) && (ATHLETE.test(text) || /\b(?:as an? (?:athlete|player))\b/i.test(text)))],
    // starting a business: an academy, camps, a gym, apparel
    ["athlete-business", text => (/\b(?:start|starting|open|opening|launch\w*|run|running|set up|setting up|found\w*|incorporat\w+|register\w*|trademark\w*|llc|business plan|business idea|entrepreneur\w*)\b/i.test(text) && /\b(?:academy|academies|camps?|clinics?|gym|training (?:business|facility|center|centre|company)|coaching business|sports (?:business|company|brand|agency|facility|academy)|apparel|clothing line|brand|lessons|personal training|trainer business|athlete[- ]owned|my sport)\b/i.test(text) && (ATHLETE.test(text) || /\b(?:academy|academies|camps?|coaching business|training (?:business|facility|center|centre)|personal training|trainer business)\b/i.test(text)))
        || /\b(?:trademark|llc|ein)\b/i.test(text) && /\b(?:my name|my brand|my logo|nickname|catchphrase)\b/i.test(text) && ATHLETE.test(text)],
    // running a youth club, league or team's money and rules
    ["athlete-club", text => (/\b(?:club|league|team|booster|recreation(?:al)?|travel team|youth)\b/i.test(text) && /\b(?:nonprofit|non-profit|501\s*\(?c\)?|tax[- ]exempt|registration|registrations|fees?|dues|waivers?|liability|insurance|volunteers?|background checks?|fundrais\w+|manage|managing|run(?:ning)?|start(?:ing)?|organi[sz]e|organi[sz]ing|treasurer|coaches' certification)\b/i.test(text) && /\b(?:soccer|football|basketball|baseball|softball|volleyball|swim\w*|track|hockey|lacrosse|rugby|cricket|tennis|wrestl\w+|gymnast\w*|youth sports?|sports? (?:club|league|team)|athletic (?:club|league))\b/i.test(text))],
    // money, saving and a career after playing
    ["athlete-money", text => (/\b(?:retire\w*|after (?:i|my|the) (?:stop|retire|career)|after (?:i|we) (?:stop|quit|finish) (?:playing|competing)|after (?:sport|playing|my career)|short career|career[- ]ending|financial (?:advisor|adviser|planning|literacy)|invest\w*|budget\w*|saving|savings|pension|insurance|disability insurance|scam|scams|fraud|bad advice|go broke|broke after|spend(?:ing)? (?:my|the) money|big contract|signing bonus|lump sum|windfall|nest egg|second career|transition(?:ing)? (?:out of|from))\b/i.test(text) && (ATHLETE.test(text) || /\b(?:signing bonus|big contract|my career (?:ends|is over)|when i retire|after i retire|after my playing days|playing days|stop(?:ped)? playing|quit playing)\b/i.test(text)))],
    // what Kyro can do for an athlete
    ["athlete-overview", text => (ATHLETE.test(text) || /\bcoach(?:es)?\b/i.test(text)) && /\b(?:what can you (?:do|help)|how can you help|can you help|help (?:me |us )?(?:with|as)|what (?:do|does|can) kyro|(?:athlete|athletes|sports|sport) (?:tools?|capabilit\w+|help|guide|information|resources?|support)|information (?:for|about) (?:an? )?athletes?|resources? for (?:an? )?athletes?|support (?:for )?athletes?)\b/i.test(text)]
  ];

  const ASKS = /(?:[?]|^(?:please\s+|kyro,?\s+|nexus,?\s+)?(?:how|what|which|when|where|why|who|should|can|could|do|does|is|are|will|would|tell me|explain|help me|i need|i want|i('| a)m looking for|i would like|i'd like|any|give me|walk me|teach me|my|our|i am|i'm|we are|we're|we have|we run|the|as an? athlete|i play|i coach|i manage|i got|i have|i just|i was|i had)\b)/i;

  function athleteTopic(text) {
    const value = String(text || "").replace(/\s+/g, " ").trim();
    if (!value || value.length > 300) return null;
    if (NOT_A_GUIDE_QUESTION.test(value) || CALENDAR_OR_RECORDS.test(value) || PERSONAL_EMERGENCY.test(value)) return null;
    if (!ASKS.test(value)) return null;
    for (const [topic, test] of POSITIVE) if (test(value)) return topic;
    return null;
  }

  return Object.freeze({ athleteTopic });
});
