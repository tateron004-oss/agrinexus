// Which question is about SPECIAL EDUCATION and ADHD, asked by a parent, a teacher or a school administrator? An evaluation, an IEP or a 504 plan, parent rights, a disagreement with a school, discipline, student records, birth to three, ADHD, autism, dyslexia, resources for
// teachers, where to get help. The same words are used by the server (nexus/knowledge/special-ed-guide.js answers it from the official pages of the United States, California, Delaware, Kenya and Nigeria) and by the page (public/app.js), which takes such a question itself instead
// of leaving it to the voice model (which would answer from memory, with no sources, and could state a deadline or a right wrongly for a family that is about to act on it).
// It is deliberately narrow. It is a question or a request to learn, never an order or a record ("log my student's IEP notes", "remind me about the IEP meeting"), and never a child's own safety or a personal emergency (the safety layer answers those). A person who names California or
// Delaware gets that state's rule where the guide has one (otherwise the federal rule, with a line saying so); a person who names Kenya or Nigeria, or whose device is in either (the caller passes the country), gets that country's. Everyone else gets the federal rule.
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.KyroSpecialEdTopics = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  // specialEdTopic(text, { country: "ke" | "ng" | null, state: "ca" | "de" | null }) -> "sped-..." | "ca-sped-..." | "de-sped-..." | "ke-sped-..." | "ng-sped-..." | null. A pure text matcher: no sources, no answers, no records.
  const NOT_A_GUIDE_QUESTION = /^(?:please\s+)?(?:log|record|add|save|remind|set|mark|delete|remove|forget|call|text|send|play|open|translate|export|cancel|schedule|email|message|read|make me|build|create|write|draft|generate|update|print|show (?:me )?my)\b(?!\s+(?:me|us)\s+(?:how|through)\b)/i;
  const BUSINESS_TALK = /\b(?:my|our) (?:business|company|shop|store|farm|organi[sz]ation|employees?|customers?)\b|\bat (?:my|our) (?:business|company|shop|store|work)\b/i;
  const CALENDAR_OR_RECORDS = /\b(?:my calendar|my schedule|my appointments?|my notes?|on my list|my reminders?|my invoices?|my customers?|my clients?|my students'? (?:records?|files?|names?)|my caseload)\b/i;
  // a personal emergency, or harm to or by a child, is never taken here
  const PERSONAL_EMERGENCY = /\b(?:suicid\w*|kill (?:myself|himself|herself|themselves)|end my life|hurt(?:ing)? (?:myself|himself|herself|themselves)|self[- ]harm|overdos\w+|911|ambulance|can'?t breathe|cannot breathe|chest pain|abus(?:e[ds]?|ing)|molest\w*|rape[d]?|in danger right now|being (?:hurt|attacked|threatened)|i am in (?:a )?crisis|i'?m in (?:a )?crisis)\b/i;
  // places and agencies that name a state or a country (a word that two places share, such as "Dover" or "CDE", is not here: a wrong state's rule is worse than the federal one)
  const CALIFORNIA = /\b(?:california|calif\.?|selpa|early start|regional center|disability rights california|family empowerment centers?|office of administrative hearings)\b/i;
  const DELAWARE = /\b(?:delaware|ddoe|capital school district|birth to three|sparc|parent information center|disability rights delaware)\b/i;
  const KENYA = /\b(?:kenya\w*|kise|knec|kcse|kcpe|kpsea|earcs?|educational assessment (?:and )?resource|national council for persons with disabilities|nairobi|mombasa|kisumu|nakuru|eldoret)\b/i;
  const NIGERIA = /\b(?:nigeria\w*|waec|neco|nerdc|ubec|national commission for persons with disabilities|nhrc|human rights commission|lagos|abuja|kano|ibadan|port harcourt)\b/i;

  // is this about special education at all? Specific words, or a school word with a child and a test, or (for a named place) a disability word with a school word
  const SPECIAL_ED = /\b(?:iep|ieps|individuali[sz]ed education(?:al)? (?:program|plan)|504(?: plan)?|section 504|special education|special ed|special needs|idea\b|child find|fape|free appropriate public education|least restrictive|procedural safeguards|prior written notice|(?:parent|parents'?) rights notice|notice of parent rights|state complaint|complaint with the state|adhd|a\.d\.h\.d|attention[- ]deficit|hyperactiv\w*|autis\w*|\basd\b|asperger\w*|dyslexi\w*|dysgraphia|dyscalculia|learning (?:disabilit\w+|disorder|difference)s?|reading disorder|selpa|early start|early intervention|birth to (?:3|three)|due process|manifestation determination|resource (?:room|teacher)|inclusive education|inclusion (?:committee|standards?)|assessment (?:and resource )?cent(?:er|re)s?|earcs?|kise|ncpwd|adderall|ritalin|concerta|vyvanse|methylphenidate|parent cent(?:er|re)s?|parent (?:training|information) (?:and information )?cent(?:er|re)s?|parent center hub|protection and advocacy|pbis|iris center|what works clearinghouse|intensive intervention|classroom (?:behavio\w+|management)|family empowerment|disability rights (?:california|delaware)|sparc|regional center|developmental(?:ly)? delay\w*|speech delay|national (?:council|commission) for persons with disabilities|school'?s? (?:evaluation|assessment)|school records?|ferpa|(?:privacy|confidential\w*)\b[^.!?]{0,30}\b(?:student|school) (?:information|data|records?)|(?:student|child) (?:information|data|records?)\b[^.!?]{0,40}\b(?:share|allowed|see|give|privacy|ferpa)|(?:share|allowed|give)\b[^.!?]{0,40}\b(?:student|child) (?:information|data|records?)|share\b[^.!?]{0,20}\babout (?:a |the |my )?(?:student|child)|school\b[^.!?]{0,40}\bmedicat\w+|medicat\w+[^.!?]{0,40}\bschool|(?:toddler|baby|infant|young child)\b[^.!?]{0,30}\b(?:not|isn'?t|doesn'?t|can'?t)\b[^.!?]{0,15}\b(?:talk\w*|walk\w*|speak\w*|respond\w*)|disabilit(?:y|ies)\b[^.!?]{0,40}\b(?:schools?|students?|child|children|learners?|education|class|teachers?)|(?:schools?|students?|child|children|learners?|education|class|teachers?)\b[^.!?]{0,40}\bdisabilit(?:y|ies))\b/i;
  // "how do I ask the school to test my child", "a student needs to be evaluated", "refer a student for testing": the commonest questions of all, with none of the special words in them
  const ASK_SCHOOL_TO_TEST = /\b(?:school|teacher|district|principal)\b[^.!?]{0,40}\b(?:test|evaluate|assess)\b[^.!?]{0,30}\b(?:child|son|daughter|student|kid|him|her|them)\b|\b(?:ask|request|get)\b[^.!?]{0,30}\b(?:child|son|daughter|student|kid)\b[^.!?]{0,20}\b(?:tested|evaluated|assessed)\b|\b(?:student|child|learner|kid)s?\b[^.!?]{0,30}\b(?:needs?|should be|to be|should get)\b[^.!?]{0,20}\b(?:evaluated|tested|assessed|an evaluation|testing)\b|\brefer(?:ring)? (?:a |the |my )?(?:student|child|learner)s?\b/i;
  // a state named with an evaluation, a timeline or a deadline ("the Delaware timelines for an evaluation"), unless it is about a business or a house
  const NOT_EDUCATION = /\b(?:business|company|property|home|house|car|job|employee|stock|loan|credit)\b/i;
  const NAMED_STATE_EVALUATION = text => (CALIFORNIA.test(text) || DELAWARE.test(text)) && /\b(?:evaluation|assessment|timelines?|deadlines?|(?:turns?|turning) (?:3|three))\b/i.test(text) && !NOT_EDUCATION.test(text);
  // Kenya and Nigeria: a disability word (or an examination body, a building rule, a commission) together with a school word, because on a device there the country is not said
  const DISABILITY_WORD = /\b(?:disabilit\w+|special needs|wheelchair|braille|blind|deaf|hearing aid|sign language|large print|assistive|autis\w*|adhd|dyslexi\w*|learning difficult\w+|extra time|accessib\w+|ramps?|regulation \d{2,3})\b/i;
  const EDU_CONTEXT = /\b(?:schools?|teachers?|head ?teachers?|students?|learners?|candidates?|child|children|son|daughter|class(?:room)?|exams?|waec|neco|knec|kcse|kcpe|kpsea)\b/i;
  const AFRICA_DOMAIN = text => EDU_CONTEXT.test(text) && (DISABILITY_WORD.test(text) || /\b(?:human rights commission|national (?:council|commission) for persons)\b/i.test(text));
  const ASKS = /(?:[?]|^(?:please\s+|kyro,?\s+|nexus,?\s+)?(?:how|what|which|when|where|why|who|should|can|could|do(?! not\b)|does|is|are|will|would|am|tell me|explain|help me|i need|i want|i('| a)m (?:looking|worried|trying|not sure|a (?:parent|teacher))|i (?:think|have|got|received|get|am|was|teach|work|need|want|disagree)|my (?:child|son|daughter|student|students|kid|school|teacher|class)|(?:a|an|the) (?:parent|teacher|school|student|child|principal|administrator|head ?teacher)|i would like|i'd like|any|give me|walk me|walk us|take me through|guide me through|talk me through|step[- ]by[- ]step|what are the steps|teach me|learn|find\b|looking for)\b)/i;

  const ADHD_WORD = /\b(?:adhd|a\.d\.h\.d|attention[- ]deficit|hyperactiv\w*)\b/i;
  const ADHD_AT_SCHOOL = /\b(?:qualif\w+|eligib\w+|accommodat\w+|class(?:room)?|teachers?|homework|iep|school|students?|behavio\w+|special education)\b/i;
  const MEDICINE_BRAND = /\b(?:adderall|ritalin|concerta|vyvanse|methylphenidate)\b/i;
  const MEDICINE = /\b(?:medication|medicine|meds|adderall|ritalin|concerta|vyvanse|methylphenidate|dose|dosage|pills?)\b/i;
  const TEACHER_SPEAKING = /\b(?:my (?:class|classroom|students|learners)|i teach|as a teacher|in my school)\b/i;
  // an agency's name is not the subject ("Disability Rights Delaware" is a place to call, not a question about rights); a more specific subject beats "what is special education"
  const AGENCY_HELP = /\b(?:disability rights (?:california|delaware)|family empowerment|parent information center|national (?:council|commission) for persons with disabilities)\b/i;
  const OTHER_SUBJECT = /\b(?:due process|mediat\w+|complain\w*|dispute\w*|disagree\w*|504|iep|evaluat\w+|assess\w+|rights?|records?|discipline|suspen\w+|early intervention|autis\w*|adhd)\b/i;
  const OVERVIEW_FIRST = /\b(?:what(?:'s| is| are)|explain|tell me about|what does)\b[^.!?]{0,25}\b(?:special education|special ed|idea|fape|child find|least restrictive|free appropriate public education)\b|\bwho (?:qualifies|is eligible|is covered)\b[^.!?]{0,30}\b(?:special education|special ed|idea)\b|\b(?:who|which)\b[^.!?]{0,20}\b(?:covered|protected)\b[^.!?]{0,30}\b(?:special education|idea|law)\b/i;

  // the questions in the order they are told apart; the first that fits is the subtopic
  const SUBTOPICS = [
    ["discipline", /\b(?:suspen\w+|expel\w*|expulsion|discipline\w*|manifestation determination|removed from (?:school|class)|detention)\b/i],
    ["privacy", /\b(?:ferpa|student records?|education(?:al)? records?|school records?|confidential\w*|privacy|share (?:my |the |a )?(?:child'?s |student'?s )?(?:records?|information|iep)|who can see (?:my |the )?(?:child'?s )?(?:iep|records?)|(?:share|allowed|give)\b[^.!?]{0,40}\bstudent (?:information|data|records?)|share\b[^.!?]{0,20}\babout (?:a |the |my )?(?:student|child))\b/i],
    ["504", /\b(?:504|section 504)\b/i],
    ["disagree", /\b(?:disagree\w*|dispute\w*|complain\w*|mediat\w+|due process|state complaint|complaint with the state|hearing officer|appeal\w*|refus(?:e|ed|es|ing)\b|won'?t (?:give|provide|evaluate|test|let|follow|admit|take)|will not (?:give|provide|evaluate|test|let|follow|admit|take|accept)|turned (?:my|our) child away|denied|not following|(?:isn'?t|is not|not) (?:being )?(?:followed|implemented)|fight (?:the|my) school|advocate for my|human rights commission|sue\b)\b/i],
    ["early", /\b(?:birth to (?:3|three)|early intervention|early start|part c|under (?:3|three)|turn(?:s|ing)? (?:3|three)|preschool\w*|pre-?k\b|age (?:3|three)|three[- ]year[- ]old|developmental(?:ly)? delay\w*|speech delay|(?:toddler|baby|infant|young child)\b[^.!?]{0,30}\b(?:not|isn'?t|doesn'?t|can'?t)\b[^.!?]{0,15}\b(?:talk\w*|walk\w*|speak\w*|respond\w*))\b/i],
    ["adhd-school", null],
    ["exams", /\b(?:exams?|examinations?|waec|neco|kcse|kcpe|kpsea|knec|jamb|extra time|testing accommodations?)\b/i],
    ["evaluation", /\b(?:evaluat\w+|assess(?:ment|ments|ed|ing)?|test(?:ed|ing)? (?:my |the |a )?(?:child|son|daughter|student|him|her)|eligib\w+|qualif\w+|independent educational|iee\b|request(?:ing)? (?:an? )?(?:evaluation|assessment)|ask(?:ing)? (?:the |my |our )?school to (?:test|evaluate|assess)|(?:school|teacher|district)\b[^.!?]{0,40}\b(?:test|evaluate|assess)\b[^.!?]{0,30}\b(?:child|son|daughter|student|kid|him|her|them)|(?:child|son|daughter|student|kid)\b[^.!?]{0,20}\b(?:tested|evaluated|assessed)|refer(?:ring)? (?:a |the |my )?(?:student|child|learner)s?)\b/i],
    ["iep", /\b(?:ieps?|individuali[sz]ed education(?:al)? (?:program|plan)|iep (?:meeting|team)|annual review|transition (?:plan|services)|goals? (?:for|in) (?:my child|the iep|his|her)|inclusion (?:committee|standards?))\b/i],
    ["rights", /\b(?:rights?|procedural safeguards|prior written notice|consent|notice of (?:meeting|action)|access (?:to )?(?:my )?(?:child'?s )?records?|copy of (?:my child'?s |the )?(?:evaluation|iep)|rights notice)\b/i],
    ["adhd", /\b(?:adhd|a\.d\.h\.d|attention[- ]deficit|hyperactiv\w*)\b/i],
    ["autism", /\b(?:autis\w*|asd|asperger\w*)\b/i],
    ["ld", /\b(?:dyslexi\w*|dysgraphia|dyscalculia|learning (?:disabilit\w+|disorder|difference)s?|reading disorder)\b/i],
    ["accessibility", /\b(?:ramps?|accessib\w+ (?:building|school|toilet|classroom|rules?|regulations?)|accessibility|infrastructure|regulation \d{2,3})\b/i],
    ["teacher", /\b(?:teacher resources?|resources for teachers?|classroom (?:strategies|management|supports?|behavio\w+)|behavio\w+ (?:management|plan|interventions?|supports?)|pbis|iris center|what works clearinghouse|intensive intervention|(?:support(?:ing)?|help(?:ing)?|teach(?:ing)?) (?:a |my |the )?(?:students?|children|learners?|kids?) with|strategies for (?:students|children|learners|kids) with|differentiat\w+|inclusive (?:classroom|teaching)|sign language|braille (?:materials|curriculum)|teaching materials|training\b[^.!?]{0,30}\bteachers?|teachers?\b[^.!?]{0,40}\b(?:training|courses?))\b/i],
    ["get-help", /\b(?:where (?:can|do|should) (?:i|we) (?:get|find) (?:help|support)|who (?:can|do|should) (?:i|we) (?:call|contact|ask|talk to)|who can help|parent (?:center|centre|training|information)|protection and advocacy|advocate|find (?:my|our|the) (?:state|selpa)|selpa|resources? for (?:parents|families)|support group|help for (?:parents|families)|organi[sz]ations?[^.!?]{0,20}\bhelp\w*|disability rights (?:california|delaware)|family empowerment|parent information center|register(?:ing)? (?:my |a )?(?:child|learner)|national (?:council|commission) for persons with disabilities|scholarships?|bursar(?:y|ies)|grants?|funding|wheelchair|hearing aids?|assistive)\b/i],
    ["overview", /\b(?:special education|special ed|idea\b|least restrictive|who (?:qualifies|is eligible|is covered)|special needs|disabilit(?:y|ies)|inclusive education)\b/i]
  ];

  // the topic of each state or country for each subtopic; a subtopic a state has no page for is the federal topic (the answer says so)
  const US_OF = { overview: "sped-overview", evaluation: "sped-evaluation", iep: "sped-iep", early: "sped-early", rights: "sped-rights", disagree: "sped-disagree", "504": "sped-504", discipline: "sped-discipline", privacy: "sped-privacy", "get-help": "sped-get-help", adhd: "sped-adhd", "adhd-school": "sped-adhd-school", autism: "sped-autism", ld: "sped-learning-disability", teacher: "sped-teacher-resources", exams: "sped-iep", accessibility: "sped-overview" };
  const DE_OF = { evaluation: "de-sped-evaluation", iep: "de-sped-iep", adhd: "de-sped-adhd", "adhd-school": "de-sped-adhd", disagree: "de-sped-disagree", "get-help": "de-sped-get-help", early: "de-sped-early", "504": "de-sped-504" };
  const CA_OF = { evaluation: "ca-sped-evaluation", iep: "ca-sped-iep", rights: "ca-sped-rights", disagree: "ca-sped-disagree", early: "ca-sped-early-start", "get-help": "ca-sped-get-help", "504": "ca-sped-504" };
  const KE_OF = { overview: "ke-sped-rights", rights: "ke-sped-rights", disagree: "ke-sped-rights", "504": "ke-sped-rights", discipline: "ke-sped-rights", privacy: "ke-sped-rights", evaluation: "ke-sped-assessment", early: "ke-sped-assessment", iep: "ke-sped-assessment", "get-help": "ke-sped-register-support", exams: "ke-sped-exams", teacher: "ke-sped-teachers", adhd: "ke-sped-teachers", "adhd-school": "ke-sped-teachers", autism: "ke-sped-teachers", ld: "ke-sped-teachers", accessibility: "ke-sped-rights" };
  const NG_OF = { overview: "ng-sped-inclusion-standards", rights: "ng-sped-inclusion-standards", evaluation: "ng-sped-inclusion-standards", iep: "ng-sped-inclusion-standards", early: "ng-sped-inclusion-standards", "504": "ng-sped-inclusion-standards", discipline: "ng-sped-inclusion-standards", privacy: "ng-sped-inclusion-standards", accessibility: "ng-sped-accessibility", disagree: "ng-sped-complaints-help", "get-help": "ng-sped-complaints-help", exams: "ng-sped-exams", teacher: "ng-sped-teachers", adhd: "ng-sped-teachers", "adhd-school": "ng-sped-teachers", autism: "ng-sped-teachers", ld: "ng-sped-teachers" };

  // which place is meant: a named one wins (and two named ones, or one of each, mean none: the federal rule); otherwise the device's (country, or a state the caller knows)
  function placeOf(text, options) {
    const named = [["ca", CALIFORNIA.test(text)], ["de", DELAWARE.test(text)], ["ke", KENYA.test(text)], ["ng", NIGERIA.test(text)]].filter(entry => entry[1]).map(entry => entry[0]);
    if (named.length === 1) return named[0];
    if (named.length > 1) return "us";
    const country = options && (options.country === "ke" || options.country === "ng") ? options.country : null;
    if (country) return country;
    const state = options && (options.state === "ca" || options.state === "de") ? options.state : null;
    return state || "us";
  }

  function subtopicOf(text) {
    const adhd = ADHD_WORD.test(text);
    if (MEDICINE_BRAND.test(text)) return "adhd";
    if (AGENCY_HELP.test(text)) return "get-help";
    if (OVERVIEW_FIRST.test(text) && !OTHER_SUBJECT.test(text)) return "overview";
    for (const [key, test] of SUBTOPICS) {
      if (key === "adhd-school") { if (adhd && ADHD_AT_SCHOOL.test(text) && !MEDICINE.test(text)) return key; continue; }
      if ((key === "adhd" || key === "autism" || key === "ld") && TEACHER_SPEAKING.test(text)) return "teacher";
      if (key === "adhd" && MEDICINE.test(text) && (adhd || /\b(?:my|our) (?:child|son|daughter|student|kid)\b/i.test(text))) return key;
      if (test.test(text)) {
        // a disagreement with an evaluation is about the evaluation (the right to an independent one)
        if (key === "disagree" && /\b(?:evaluat\w+|assess\w+)\b/i.test(text) && !/\b(?:state complaint|due process|mediat\w+|complain\w*)\b/i.test(text)) return "evaluation";
        return key;
      }
    }
    return null;
  }

  function specialEdTopic(text, options) {
    const value = String(text || "").replace(/[’]/g, "'").replace(/\s+/g, " ").trim();
    if (!value || value.length > 300) return null;
    if (NOT_A_GUIDE_QUESTION.test(value) || CALENDAR_OR_RECORDS.test(value) || PERSONAL_EMERGENCY.test(value) || BUSINESS_TALK.test(value)) return null;
    const place = placeOf(value, options);
    const aboutIt = SPECIAL_ED.test(value) || ASK_SCHOOL_TO_TEST.test(value) || NAMED_STATE_EVALUATION(value) || ((place === "ke" || place === "ng") && AFRICA_DOMAIN(value));
    if (!aboutIt) return null;
    if (!ASKS.test(value)) return null;
    const sub = subtopicOf(value) || "overview";
    if (place === "ca") return CA_OF[sub] || US_OF[sub] || null;
    if (place === "de") return DE_OF[sub] || US_OF[sub] || null;
    if (place === "ke") return KE_OF[sub] || KE_OF.overview;
    if (place === "ng") return NG_OF[sub] || NG_OF.overview;
    return US_OF[sub] || null;
  }

  return Object.freeze({ specialEdTopic, placeOf, CALIFORNIA, DELAWARE, KENYA, NIGERIA });
});
