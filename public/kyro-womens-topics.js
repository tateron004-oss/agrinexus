// Which women's-health question is this? The same words are used by the server (nexus/knowledge/womens-health-topics.js re-exports this file) and by the page (public/app.js), which takes such a question itself
// instead of leaving it to the voice model: the model rewords a question when it calls a tool, and the reworded one sometimes missed the checked guide.
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.KyroWomensTopics = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  // Which women's-health question is this? A pure text matcher for the checked women's health guide (womens-health.js): no sources, no answers, no records.
  //
  // womensHealthTopic(text) -> a topic id, or null.
  //   Only a QUESTION or a request for help is taken. A record ("log my period"), a draft, a third-person health worker's list ("who is pregnant", "Mary is pregnant, due 12 March"), a sentence about a medicine or a dose, and
  //   anything that sounds urgent or unsafe (bleeding, labour, a baby not moving, a fit, harm by another person, thoughts of self-harm) are NOT taken: those belong to the safety layer (public/kyro-care-phrases.js,
  //   nexus/companion/safety.js), the medicine rules and the health worker's own tool, which come first and must never be answered with a general guide.

  const ASKS = /(?:[?]|^(?:please\s+|kyro,?\s+|nexus,?\s+)?(?:how|what|which|when|where|why|should|can|could|do|does|is|are|am|will|would|tell me|explain|help me|i need|i want|i('| a)m looking for|i would like|i'd like|any|give me|find\b|show me|look(?:ing)? for|search for|teach me|walk me|walk us|take me through|guide me through|talk me through|step[- ]by[- ]step|what are the steps)\b)/i;
  const RECORD_OR_DRAFT = /^(?:please\s+)?(?:log|record|add|save|remind|set|create|draft|write|make|mark|delete|forget|call|text|send|play|open|start|translate|export|convert|register)\b/i;
  // a health worker asking about the people they follow, or noting one
  // ("which screenings should I have at 45?" is a woman's own question, not a worker asking which of her patients is due)
  const WORKER_TALK = /^(?:who\b|which\b(?!\s+(?:health\s+)?(?:screenings?|tests?|check-?ups?|exams?)\b))|\b(?:my patients?|my clients?|expected delivery|edd|due (?:this|next) (?:week|month)|antenatal list|pregnancy list|how many (?:\w+ )?(?:women|patients|clients)|on my (?:list|register|caseload))\b/i;
  // anything urgent, unsafe or about a medicine goes to the layers that handle those (see the comment at the top)
  const NOT_FOR_A_GUIDE = /\b(?:bleed(?:ing)?|bled|haemorrhag\w*|hemorrhag\w*|clots?|seizures?|fits?|convuls\w*|fever|faint(?:ed|ing)?|unconscious|collaps\w*|can'?t breathe|cannot breathe|trouble breathing|short(?:ness)? of breath|chest pain|severe|emergency|urgent|suicid\w*|kill myself|end my life|hopeless|hurt(?:s|ing)? me|hits? me|beats? me|abus\w*|rap(?:e|ed|ist)|assault\w*|violen\w*|overdos\w*|miscarr\w*|labou?r|contractions?|water (?:has )?broke|baby (?:is )?(?:not|isn'?t) moving|stopped moving|ectopic|doses?|dosage|how much\b.*\b(?:take|give)|ibuprofen|paracetamol|acetaminophen|aspirin|antibiotics?|painkillers?|(?:is|are) .{0,40}\bsafe (?:to take|in pregnancy|while pregnant|when pregnant)|mg|calf|calves|lambs?|piglets?|puppy|puppies|kittens?|foals?)\b/i;

  const MATCHERS = [
    // where and how to get the care itself: before the subject matchers, which would otherwise answer "where can I get a Pap smear" with what a Pap smear is
    ["finding-care", /\b(?:(?:where|who)\b.{0,50}\b(?:get|find|go|have|see|book|do|access|afford|apply)|how (?:do|can|could|would) (?:i|we)\b.{0,12}\b(?:find|access|afford|book|apply for))\b.{0,70}\b(?:pap (?:smear|test)|smear test|cervical (?:screening|cancer screening)|mammograms?|breast (?:screening|exam|check)|family planning|birth control|contracepti\w*|iud|antenatal|ante-?natal|prenatal|pre-?natal|maternity|midwi\w+|gyn(?:a)?ecolog\w*|ob-?gyn|women'?s (?:health|clinic|care|services)|postnatal|postpartum|menopause|hpv (?:vaccine|vaccination|shot)|well[- ]woman|reproductive health)\b/i],
    ["finding-care", /\b(?:low[- ]cost|free|cheap|affordable|sliding[- ]scale)\b.{0,40}\b(?:women'?s health|family planning|birth control|contracepti\w*|prenatal|antenatal|pap (?:smear|test)|mammograms?|gyn(?:a)?ecolog\w*|reproductive health)\b/i],
    ["finding-care", /\b(?:women'?s health|family planning|antenatal|ante-?natal|prenatal|maternity|well[- ]woman|reproductive health)\s+(?:clinics?|care|services?|centres?|centers?)\b/i],
    // infections and HIV: before the subject matchers (a question about HIV in pregnancy, or about condoms and HIV, is this topic's), and only when it is about a woman or the person asking (a bare "what is HIV" is left alone)
    ["sti-hiv", /^(?=.*\b(?:stis?|stds?|sexually transmitted|hiv|aids|chlamydia|gonorrh\w+|syphilis|genital herpes|trichomon\w+)\b)(?=.*\b(?:women|woman|female|girls?|i|my|me|myself|pregnan\w*|partner|boyfriend|husband|herself)\b)/i],
    ["pcos", /\b(?:pcos|polycystic ovar\w+)\b/i],
    ["breastfeeding", /\b(?:breast-?feed\w*|breast milk|nursing (?:my |a )?(?:baby|newborn)|lactat\w+)\b/i],
    // heart disease asked about women (a plain heart question is not this guide's)
    ["heart-health", /^(?=.*\b(?:heart (?:disease|attack|health|problems?|conditions?)|cardiovascular|stroke)\b)(?=.*\b(?:women|woman|female|girls?|ladies)\b)/i],
    ["cervical-screening", /\b(?:pap (?:smear|test)s?|smear tests?|cervical (?:cancer|screening|smear|cells?|check)|hpv(?: vaccin\w*| test| shot)?|human papillomavirus)\b/i],
    ["breast-health", /\b(?:mammograms?|breast (?:cancer|screening|lump|lumps|exam|self[- ]exam|check|health|changes?)|lump in (?:my |the )?breast)\b/i],
    ["contraception", /\b(?:birth control|contracepti\w*|family planning|the pill|iuds?|morning[- ]after|plan b|prevent(?:ing)? (?:a )?pregnancy|not get(?:ting)? pregnant|spacing (?:my )?(?:children|births)|depo[- ]?provera|tubal ligation|condoms?)\b/i],
    ["periods-cycle", /\b(?:menstrua\w*|(?:my|a|the|painful|heavy|irregular|missed|late|no|long|short) periods?|period (?:pain|cramps?|problems?)|periods? (?:are|is|have|has|stopped)|irregular cycles?|my cycle|cycle (?:is|has|length))\b/i],
    ["menopause", /\b(?:menopaus\w*|perimenopaus\w*|hot (?:flashes|flushes|flash|flush)|change of life)\b/i],
    ["postpartum", /\b(?:postpartum|post-?partum|postnatal|post-?natal|baby blues|after (?:having|giving birth|birth|the birth|delivery|delivering)|(?:weeks|months) after (?:birth|delivery|having (?:a|my) baby)|new mom|new mother|new mum)\b/i],
    ["prenatal-care", /\b(?:prenatal|pre-?natal|antenatal|ante-?natal|pregnan\w*|expecting (?:a )?(?:baby|child)|anc visits?|first trimester|second trimester|third trimester|trimester)\b/i],
    // which check-ups and screenings, by age (after the single-subject matchers above: "how often should I get a Pap smear" is the cervical answer)
    ["checkups", /^(?=.*\b(?:screenings?|check-?ups?|well[- ]woman|annual (?:exam|visit)|yearly (?:exam|visit))\b)(?=.*(?:\b(?:health|medical|doctor|nurse|clinic|woman|women|female|cancer|cholesterol)\b|\b(?:should|do) i (?:have|get|need)\b))(?=.*\b(?:women|woman|female|age|aged|years old|years-old|i|my)\b)/i],
    ["womens-health-overview", /\b(?:women'?s health|health for women|care for women|female health|health of women)\b/i]
  ];

  function womensHealthTopic(text) {
    const value = String(text || "").replace(/\s+/g, " ").trim();
    if (!value || value.length > 300) return null;
    if (RECORD_OR_DRAFT.test(value) || !ASKS.test(value) || WORKER_TALK.test(value) || NOT_FOR_A_GUIDE.test(value)) return null;
    // the business programmes ("women's business center", "women-owned business") are not health
    if (/\bwomen'?s business\b|\bwomen[- ]owned\b|\bwoman[- ]owned\b|\bwosb\b/i.test(value)) return null;
    for (const [topic, pattern] of MATCHERS) if (pattern.test(value)) return topic;
    return null;
  }

  // "Find a women's health clinic near me", "an antenatal clinic near Kisumu": a clinic search for this kind of care. The clinic search still runs; the answer adds that Kyro cannot tell which clinics offer it.
  const WOMENS_CARE_SEARCH = /\b(?:women'?s (?:health|clinic|care)|family planning|antenatal|ante-?natal|prenatal|pre-?natal|maternity|well[- ]woman|gyn(?:a)?ecolog\w*|ob-?gyn|reproductive health)\b/i;
  function isWomensCareSearch(text) { return WOMENS_CARE_SEARCH.test(String(text || "")); }
  const WOMENS_CARE_NOTE = Object.freeze({
    en: "I cannot tell which of these offer women's health care, so ask when you call.",
    sw: "Siwezi kujua ni zipi kati ya hizi zinatoa huduma za afya ya wanawake, kwa hiyo uliza unapopiga simu."
  });

  return Object.freeze({ womensHealthTopic, isWomensCareSearch, WOMENS_CARE_NOTE });
});
