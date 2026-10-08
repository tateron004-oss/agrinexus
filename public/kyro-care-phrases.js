(function (root, factory) {
  const crisis = typeof module === "object" && module.exports ? require("./kyro-crisis-phrases.js") : root.KyroCrisisPhrases;
  const api = factory(crisis);
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.KyroCarePhrases = api;
})(typeof window !== "undefined" ? window : globalThis, function (crisis) {
  "use strict";

  // What a mother, or someone caring for a mother or a small child, may say when something is wrong: danger signs in pregnancy, labour, a newborn or a child that need a health worker NOW, and the
  // hard things after a birth (feeling you cannot cope, fear of hurting the baby, a baby lost), a partner who hurts her, or someone else being harmed. Found by the persona audit ("Mama Achieng"): about
  // 155 of 250 danger-sign sentences, English and Kiswahili, got no urgent guidance at all. Like kyro-crisis-phrases.js this only RECOGNISES; the replies live in nexus/i18n and must be reviewed by a
  // clinician, a midwife and a women's or children's protection organisation before they are relied on. It leans toward catching: a false trigger costs one calm reply.
  const normalize = text => crisis.normalize(text)
    .replace(/\bbleding\b|\bbleeding\b|\bbleedin\b/g, "bleeding")
    .replace(/\bbreething\b|\bbreathin\b/g, "breathing")
    .replace(/\bnt moving\b/g, "not moving")
    .replace(/\bno breathing\b/g, "not breathing")
    .replace(/\bdiarrhea\b|\bdiarhoea\b/g, "diarrhoea")
    .replace(/\s+/g, " ").trim();
  const any = (patterns, text) => patterns.some(pattern => pattern.test(text));

  // ---- who and what ----
  // "am 36 weeks" / "at 36 weeks" (no other word for pregnancy) and "I am 9 months" are how people say it aloud; "ujauzito" is the formal Kiswahili word for a pregnancy.
  const PREGNANT = /\b(?:pregnan\w*|expecting|antenatal|mimba|mjamzito|ujauzito|nina mimba|\d+\s*(?:weeks?|months?) (?:pregnant|along)|(?:weeks?|months?) pregnant|miezi \w+ ya mimba|wiki \d+ za (?:mimba|ujauzito))\b|\b(?:i am|i'm|am|im|now|at) (?:1[2-9]|2\d|3\d|4[0-2]) weeks?\b(?! (?:old|ago|since|from|to go|late|of age|in))|\b(?:i am|i'm|am|im) (?:[789]|seven|eight|nine) months?\b(?! (?:old|ago|into|since|of age|in))/;
  const BABY = /\b(?:baby|babies|newborn|new born|new-born|infant|mtoto mchanga|mtoto)\b/;
  const CHILD_WORDS = /\b(?:child|children|kid|toddler|son|daughter|boy|girl|baby|newborn|infant|mtoto|binti|mwanangu|kijana)\b|\b\d+[ -]?(?:year|month|week)s?[ -]?old\b/;
  const MINE = /\b(?:my|our|the|mtoto wangu|mwanangu|binti yangu)\b/;
  // "baby is breathing very fast", "she is not waking": the baby or child is spoken of without "my" or "the".
  const ANAPHOR = /\b(?:she|he|her|his)\b|^(?:a )?(?:baby|child|infant|newborn|toddler|kid)\b/;
  // Animals: a poison, a sickness or a bite is then not about a person.
  const ANIMAL = /\b(?:cow|cows|cattle|calf|calves|bull|goat|goats|sheep|lamb|pig|pigs|chicken|chickens|hen|hens|poultry|dog|dogs|cat|cats|donkey|livestock|ng'?ombe|mbuzi|kondoo|nguruwe|kuku|mbwa|paka|punda|ndama)\b/;
  const BLEED = /\b(?:bleed\w*|losing blood|blood (?:is )?(?:coming|flowing|pouring)|heavy blood|damu(?: nyingi)?|kutokwa(?: na)? damu|ninatokwa(?: na)? damu|ninatoka damu|nimeanza kutokwa|anatokwa damu|inatoka damu)\b/;
  const FIT = /\b(?:fits?|convuls\w*|seizures?|kifafa|degedege|fitting)\b/;
  const BIRTH_DONE = /\b(?:delivered|gave birth|just given birth|after (?:birth|delivery|giving birth)|the placenta|placenta is not out|nimejifungua|baada ya kuzaa|nimezaa)\b/;
  const NOT_NOW = /\b(?:next (?:week|month)|soon|due (?:in|on)|in (?:a )?(?:week|month|december|january|february|march|april|may|june|july|august|september|october|november)|weeks? (?:from now|to go)|when (?:the )?(?:baby|labou?r)|what to do|how do i know|is it normal|signs? of|what is)\b/;

  // ---- tiers: "now" is a health worker immediately; "today" is a clinic the same day ----
  // Poison, a swallowed object, a burn, a snake bite: each has its own first-aid line.
  const SWALLOW_VERB = /\b(?:swallow\w*|drank|drunk|ate|eaten|took|taken|licked|chewed|amekunywa|amemeza|amekula|amelamba)\b/;
  const SWALLOW_THING = /\b(?:batter(?:y|ies)|kerosene|paraffin|petrol|diesel|bleach|detergent|washing (?:powder|liquid)|poison\w*|pesticide|rat poison|insecticide|acid|medicines?|tablets?|pills?|iron (?:tablets?|pills?)|malaria (?:medicine|tablets?)|coins?|beans?|stones?|something|kitu|sumu|mafuta ya taa|dawa|vidonge|sarafu|betri)\b/;
  const BURN = /\b(?:burn\w*|scald\w*|hot (?:water|oil|porridge|tea|soup)|touched the fire|fell in(?:to)? the fire|ameungua|ameungua na moto|maji moto|moto)\b/;
  const SNAKE = /\b(?:snake|nyoka)\b/;
  // Swallowing: the plain verbs only (no "took"), and the things that are poison to anyone. "dawa ya kuua wadudu" is a pesticide ("dawa" alone could be a medicine).
  const SWALLOW_VERB_PLAIN = /\b(?:swallow\w*|drank|drunk|ate|eaten|licked|amekunywa|amemeza|amekula|nimekunywa|nimemeza|nimekula|alikunywa|alimeza|walikunywa|wamekunywa|wamemeza)\b/;
  const STRONG_POISON = /\b(?:poison\w*|pesticide|insecticide|herbicide|weedkiller|rat poison|bleach|kerosene|paraffin|petrol|diesel|sumu|dawa ya (?:kuua|kuulia|panya|kunyunyuzia)|mafuta ya taa|petroli|dizeli)\b/;
  const RISKY_FOOD = /\b(?:cassava|muhogo|mihogo|mushrooms?|uyoga|wild (?:berries|fruits?|plants?|seeds?|mushrooms?)|unknown (?:plant|fruit|berries|seeds?|mushrooms?)|castor (?:seeds?|beans?))\b/;
  const FOOD_SYMPTOM = /\b(?:vomit\w*|throwing up|dizz\w*|faint\w*|fits?|convuls\w*|seizures?|drowsy|unconscious|kutapika|anatapika|natapika|kizunguzungu|degedege)\b/;
  const SPRAY_WORD = /\b(?:spray\w*|pesticide|insecticide|herbicide|fungicide|agrochemical|weedkiller|chemicals?|dawa ya (?:kuua wadudu|kunyunyuzia|kuulia magugu|mimea|wadudu)|nimepulizia|nilipulizia|ninapulizia|amepulizia|alipulizia|kupulizia|nimenyunyiza|nilinyunyiza|nimenyunyizia|nilinyunyizia|tulipulizia)\b/;
  const SPRAY_SYMPTOM = /\b(?:headache|head ache|dizz\w*|vomit\w*|throwing up|nausea|nauseous|feel(?:ing)? sick|faint\w*|blurred|blurry|shaking|twitch\w*|chest tight\w*|short of breath|cannot breathe|can'?t breathe|difficulty breathing|burning (?:eyes|skin|throat)|eyes (?:are )?burning|rash|itch\w*|stomach (?:pain|cramps?)|diarrhoea|kizunguzungu|kichwa kinauma|kuumwa na kichwa|naumwa kichwa|ninaumwa kichwa|kutapika|natapika|ninatapika|anatapika|kichefuchefu|macho yanauma|ngozi inawasha|kupumua kwa shida|napumua kwa shida)\b/;
  // A person (not only an animal) is the one with the symptoms: "I was spraying near my cow shed and I feel dizzy" is still a person to be seen.
  const SPEAKER_UNWELL = /\b(?:i|i'm|we|my (?:head|eyes|skin|chest|stomach|hands?)|nina|natapika|ninatapika|naumwa|ninaumwa|nimepulizia|nilipulizia|nimenyunyiza|kichwa changu|macho yangu)\b/;
  const SPRAY_QUESTION =/\b(?:symptoms? of|signs? of|how (?:do|can|should|to)|is it (?:safe|normal)|what are the|remind|reminder|schedule)\b/;
  // "I burnt the beans": cooking, not a burn on a person (unless a hand, a child or skin is named too).
  const COOKING_BURN = /\bburn(?:t|ed) (?:the |my |our )?(?:beans|ugali|chapati|chapatis|meat|porridge|sukuma|vegetables|toast|bread|githeri|cabbage|potatoes|tea|supper|dinner|lunch|breakfast|pot|sauce|stew|onions?|eggs?|fish|chicken|pan|food|maize|rice)\b/;
  const BODY_PART = /\b(?:hand|hands|arm|arms|leg|legs|foot|feet|skin|finger|fingers|face|child|baby|son|daughter|toddler|mkono|mguu|mtoto)\b/;
  // ---- a symptom that is said NOT to be there ----
  // "my baby has no fever", "mtoto hana homa", "she is not vomiting": the absence of a fever, a cough, vomiting, diarrhoea, a rash, bleeding or pain is GOOD news and must not be read as the symptom.
  // ONLY these symptoms: when something that should be there is missing ("not feeding", "not breathing", "not waking", "no urine", "not drinking", "no movement", "haamki", "hapumui", "hanyonyi") that IS the
  // danger, and none of those words are removed by anything below. Anything not recognised here is left as it was, so an unusual wording still alarms. Reviewed list: the PR "Needs clinician check".
  const SYMPTOM_EN = "(?:fever(?:s|ish)?|(?:a |any |high )?temperature|hot body|cough(?:s|ing|ed)?|vomit(?:s|ing|ed)?|throwing up|threw up|diarrhoea|loose stools?|rash(?:es)?|bleed(?:ing)?|blood in (?:the |his |her )?(?:stool|poo|urine)|pains?)";
  const SYMPTOM_SW = "(?:homa|kikohozi|kutapika|kuhara|kuharisha|vipele|upele|maumivu|kutokwa(?: na)? damu)";
  // a word that may sit between the "no" and the symptom without changing what is meant ("no high fever", "does not have a fever", "has not been coughing"); anything else keeps the symptom
  const FILLER = "(?:(?:a|an|any|the|in|have|has|had|got|having|been|even|really|much|high|visible|obvious|heavy|severe|bad|real|very|signs? of|sign of|any kind of|more than a) )*";
  // "no fever or vomiting" negates both; "no fever and vomiting" or "no fever, vomiting" is left alone (it may mean the second one is there).
  const LIST_EN = `(?:(?:, ?${FILLER}${SYMPTOM_EN})*,? ?(?:or|nor) ${FILLER}${SYMPTOM_EN})?`;
  const NEGATED_EN = new RegExp(`\\b(?:no|without|zero|never had|never has|never (?:a|any)|(?:does ?n[o']?t|do ?n[o']?t|did ?n[o']?t|has ?n[o']?t|have ?n[o']?t|had ?n[o']?t|is ?n[o']?t|isn'?t|ain'?t|was ?n[o']?t|wasn'?t|are ?n[o']?t|aren'?t|not|not even|never)|(?:has|have|had|got|with|having) no|there (?:is|was|are) no) ${FILLER}${SYMPTOM_EN}${LIST_EN}(?![a-z])`, "g");
  const NEGATED_SW = new RegExp(`\\b(?:hana|hakuna|haina|hawana|bila|pasipo|sina|hatuna|hakuna dalili za|hana dalili za) ${"(?:(?:ya|na|dalili za) )?"}${SYMPTOM_SW}(?: (?:wala|au|na) ${SYMPTOM_SW})*(?![a-z])|\\bhakuna damu(?![a-z])|\\b(?:hatapiki|hatapishi|hakohoi|haharishi|hahari|hatokwi damu|hatoki damu|hajatapika|hajaharisha|hajakohoa|hajatokwa na damu)(?![a-z])`, "g");
  // The same sentence with every negated reassuring symptom taken out (replaced by a space). Used only to look for danger signs; "plain" itself is kept for the words around them.
  const withoutNegatedSymptoms = text => String(text ?? "").toLowerCase().replace(/[’]/g, "'").replace(NEGATED_EN, " ").replace(NEGATED_SW, " ").replace(/\s+/g, " ").trim();
  const SNAKE_BITE = /\b(?:bit|bitten|bite|bites|sting|stung|amemuuma|ameuma|amenigonga|amemgonga|kuuma|kung'ata|ameng'ata)\b/;

  // Found by the user-journey sweep: these were missed for a baby or a child. Shaking all over or eyes rolled back (a fit); fast breathing with the chest pulling in; cannot be woken, limp or not answering.
  const SIGN_FIT_SHAKING = /\b(?:shaking all over|(?:whole|entire) body (?:is )?(?:shaking|jerking)|jerking|eyes? (?:are |is |were |was )?(?:rolled|rolling|roll\w*|turned|turning) (?:back|up|upwards?)|rolled (?:back )?(?:his|her|their) eyes|macho (?:yamegeuka|yamepinduka|yanageuka|yamepandisha)|anatetemeka mwili (?:mzima|wote)|mwili (?:mzima|wote) unatetemeka|anatikisika)\b/;
  const SIGN_FAST_BREATHING = /\b(?:breath\w* (?:very |too |so |really )?(?:fast|quickly|hard)|fast breath\w*|rapid breath\w*|chest (?:is |was )?(?:pull\w*|suck\w*|cav\w*|indrawing|indrawn)|chest indrawing|ribs (?:are )?(?:showing|pulling)|nostrils flaring|kifua (?:kinavuta|kinaingia|kinavutika|kinashuka)(?: ndani)?|anapumua (?:kwa )?(?:kasi|haraka)|pumzi ya haraka)\b/;
  const SIGN_CANNOT_WAKE = /\b(?:(?:cannot|can'?t|could not|couldn'?t|can not|won'?t|will not|unable to|not able to|does ?n[o']t|did not|didn'?t) (?:be )?(?:wake|woken|waken|waking|wake up|respond)|not (?:be )?woken|unresponsive|not responding|limp|floppy|hawezi kuamshwa|hawezi kuamka|hazindukani|haamki|hajibu|amelegea)\b(?!\s+(?:up\s+)?(?:for|to|in|early|until|till|when|before|at|on|by)\b)/;

  // ---- baby (a few weeks to a year) and small child danger signs ----
  const BABY_NOW = [
    /\b(?:not (?:feeding|breastfeeding|sucking|taking (?:the )?breast)|no longer (?:feeding|breastfeeding|sucking|taking (?:the )?breast)|stopped (?:feeding|breastfeeding|sucking)|won'?t (?:feed|suck|breastfeed)|refus\w* (?:to )?(?:feed|breast)|hanyonyi|hanyonyi)\b/,
    /\b(?:very sleepy|too sleepy|cannot (?:be )?wake|can'?t (?:be )?wake|will not wake|won'?t wake|floppy|limp|weak and sleepy|mtoto amelala sana|hawezi kuamka)\b/,
    /\b(?:fever|hot body|very hot|high temperature|temperature (?:of )?(?:3[89]|4\d)|mwili moto|homa)\b/,
    /\b(?:cold (?:and )?(?:not moving|and weak|body)|not crying|did not cry|no cry|hasn'?t cried|hailii)\b/,
    /\b(?:yellow|jaundice|manjano)\b/,
    /\b(?:breathing (?:very )?fast|fast breathing|chest (?:is )?pull\w*|chest pulling in|grunting|panting|hapumui|anapumua kwa shida|anapumua haraka|hapumui vizuri|blue (?:lips|skin|colou?r)?|turning blue|is blue)\b/,
    /\b(?:cord|kitovu)\b[^.!?]{0,40}\b(?:red|pus|smell\w*|bleed\w*|infect\w*|usaha|damu|inanuka)\b|\b(?:red|pus|smell\w*|bleed\w*|usaha)\b[^.!?]{0,20}\b(?:cord|kitovu)\b/,
    /\b(?:green vomit|vomiting green|bile|vomit\w* everything|cannot keep (?:anything|milk) down|belly (?:is )?(?:very )?(?:big|hard|swollen)|stomach (?:is )?(?:very )?(?:big|hard|swollen))\b/,
    /\b(?:not passed urine|no urine|hasn'?t (?:passed|had) (?:any )?urine|sunken (?:eyes|fontanelle|soft spot)|fontanelle (?:is )?sunken|hajakojoa)\b/,
    // The same missing function said another way ("is not passing urine", "no wet nappies") and no movement at all: found while testing the negation handling (a missing function is the danger, never the reassuring kind).
    /\b(?:(?:not|isn'?t|is not|stopped|stops|won'?t|hasn'?t|has not) (?:passing|pass|making|wetting) (?:any |a )?(?:urine|water|nappy|diaper|nappies|diapers)|(?:not|isn'?t|is not|stopped|stops) urinating|no wet (?:nappies|nappy|diapers?)|no movement|no pee|hasn'?t peed)\b/,
    /\b(?:stiff neck|bulging fontanelle|pus in the eyes?|pus (?:from|in) (?:the )?eyes?)\b/,
    /\b(?:fits?|convuls\w*|seizures?|kifafa|degedege|shaking all over)\b/,
    SIGN_FIT_SHAKING, SIGN_FAST_BREATHING, SIGN_CANNOT_WAKE,
    /\b(?:diarrhoea|kuhara|anaharisha)\b[^.!?]{0,40}\b(?:very weak|weak|sunken|blood|damu|dehydrat\w*|not drinking|hanywi)\b|\b(?:very weak|weak|sunken eyes|blood)\b[^.!?]{0,30}\b(?:diarrhoea|kuhara)\b/
  ];
  const CHILD_NOW = [
    /\b(?:fits?|convuls\w*|seizures?|kifafa|degedege|fitting)\b/,
    SIGN_FIT_SHAKING, SIGN_FAST_BREATHING, SIGN_CANNOT_WAKE,
    /\b(?:unconscious|not (?:waking|responding)|won'?t wake|will not wake|cannot (?:be )?wake|passed out|collapsed|amezimia|amepoteza fahamu|hajitambui|hasemi)\b/,
    /\b(?:not breathing|stopped breathing|hapumui|anapumua kwa shida|hapumui vizuri|difficulty breathing|struggling to breathe|breathing (?:very )?fast|chest (?:is )?pull\w*|wheezing and (?:cannot|can'?t)|turning blue|blue lips)\b/,
    /\b(?:stiff neck)\b[^.!?]{0,40}\b(?:fever|homa)\b|\b(?:fever|homa)\b[^.!?]{0,40}\b(?:stiff neck)\b|\brash (?:that )?(?:does ?n[o']t|doesn'?t|will not) fade\b|\bpurple (?:rash|spots)\b/,
    /\b(?:very pale|very weak|too weak|cannot (?:stand|walk|drink)|can'?t (?:stand|walk|drink)|not drinking|hanywi|sunken eyes|passing blood|blood in (?:the )?(?:stool|poo)|anaharisha damu|dark urine|swollen (?:face|feet) and (?:hands|urine))\b/,
    /\b(?:nearly drowned|almost drowned|fell in(?:to)? the (?:water|river|well|pond)|has fallen in the water|was under (?:the )?water)\b/,
    /\b(?:fell|fallen|hit (?:his|her|the) head|head injury|bumped (?:his|her) head|ameanguka|amepiga kichwa)\b[^.!?]{0,60}\b(?:not waking|vomit\w*|bleeding|sleepy|confused|drowsy|fits?|hasn'?t cried|won'?t wake|kichwa|anatapika|damu)\b/,
    /\b(?:very thin|swollen feet|looks very thin)\b[^.!?]{0,40}\b(?:swollen|thin|not eating)\b/
  ];
  const CHILD_TODAY = [
    /\b(?:fever|hot body|high temperature|mwili moto|homa)\b/,
    /\b(?:diarrhoea|kuhara|anaharisha|vomiting|vomits|kutapika|anatapika)\b/,
    /\b(?:cough(?:ing)? for (?:\d+|three|four|five|a few|many) days|cough for (?:\d+|three|four|five) days)\b[^.!?]{0,30}\b(?:days|siku)?\b|\bkikohozi\b[^.!?]{0,30}\b(?:siku|wiki|days|weeks)\b/,
    /\b(?:wheez\w*|not eating|refus\w* (?:to )?eat|very thin|swollen feet|rash all over)\b/
  ];
  // "my baby has a cold and a blocked nose", "my child has a fever for 3 days": the first is not a danger sign, the second is a same-day clinic visit.
  const NOT_A_SIGN = /\b(?:teething|just a cold|blocked nose|runny nose|a cold and|sleeps? (?:too much|a lot|all day)|crying (?:a lot|all the time)|cries a lot|is it normal|how (?:do|can|should)|what (?:is|are|should)|when (?:should|do|can)|can i|should i)\b/;

  // ---- pregnancy and birth ----
  // Kiswahili: the baby is not playing (moving) in the belly, or the mother cannot feel it. "sijisikii" here is "I do not feel", not low mood (see POSTNATAL).
  const FETAL_MOVEMENT_SW = /\bmtoto (?:tumboni )?(?:hachezi|hasogei|hapigi teke|hatikisiki)\b|\b(?:sijisikii|sihisi|simhisi|sijahisi|sijamhisi|sioni|siwezi kuhisi|siwezi kumhisi|siwezi kusikia)\b[^.!?]{0,25}\b(?:mtoto|mimba)\b[^.!?]{0,20}\b(?:akicheza|akisogea|anacheza|anasogea|kucheza|kusogea|teke|tumboni)\b|\bhachezi tumboni\b/;
  const PREG_SIGNS = [
    BLEED,
    FIT,
    /\b(?:severe|very bad|terrible|bad|strong|makali)\b[^.!?]{0,20}\b(?:headache|head ache|maumivu ya kichwa)\b|\bheadache\b[^.!?]{0,30}\b(?:blur\w*|vision|eyes|swollen)\b/,
    /\b(?:blur\w*|blurry|vision (?:is )?(?:blur\w*|bad|dim)|cannot see (?:well|properly)|can'?t see (?:well|properly)|seeing (?:spots|flashes)|ukungu|naona ukungu)\b/,
    /\b(?:swollen|swelling|swell\w*|vimevimba|uvimbe)\b[^.!?]{0,30}\b(?:face|hands?|eyes|uso|mikono)\b|\b(?:face|hands?)\b[^.!?]{0,20}\b(?:swollen|swelling|vimevimba)\b/,
    /\b(?:severe|very bad|too much|terrible|bad|strong|makali|sana)\b[^.!?]{0,25}\b(?:belly|stomach|abdominal|tumbo)\b[^.!?]{0,15}\b(?:pain|hurts?|uma|linauma|maumivu)?\b|\b(?:belly|stomach|tumbo)\b[^.!?]{0,15}\b(?:pain|hurts|linauma)\b[^.!?]{0,20}\b(?:severe|very|too much|sana|makali)\b/,
    /\b(?:fever|high temperature|chills and fever|homa|temperature (?:is |of |was |at )?(?:3[89]|4\d)|temp(?:erature)? (?:is |of |was |at )?(?:10[0-9]|1[1-9]\d))\b/,
    /\b(?:baby|mtoto)\b[^.!?]{0,25}\b(?:has ?n[o']t|not|stopped|no longer|hasogei|hasongi|hasogei)\b[^.!?]{0,15}\b(?:mov\w*|kick\w*|sogea|sogei)\b|\b(?:not|haven'?t|have not|hasn'?t)\b[^.!?]{0,15}\b(?:felt|feel|feeling|seen)\b[^.!?]{0,15}\b(?:baby|the baby)\b[^.!?]{0,10}\b(?:move\w*|kick\w*)\b|\bmtoto (?:tumboni )?hasogei\b|\bhasogei tangu\b/,
    /\b(?:water|waters|maji)\b[^.!?]{0,15}\b(?:broke|broken|burst|leak\w*|yamenitoka|yamevunjika|yamepasuka|yamevuja)\b|\b(?:my )?waters? (?:have )?broke(?:n)?\b|\bmaji ya uzazi yamepasuka\b/,
    /\b(?:fell|fall|fallen|slipped|nilianguka|nimeanguka|kicked|hit|punched)\b[^.!?]{0,40}\b(?:belly|stomach|tumbo|on my belly)\b|\b(?:i )?(?:fell|slipped|have fallen|nilianguka|nimeanguka|nimeteleza)\b/,
    /\b(?:dizz\w*|faint\w*|kizunguzungu|nimezimia)\b/,
    /\b(?:vomiting all day|cannot keep (?:any )?food down|can'?t keep (?:any )?food down|nimetapika siku nzima|kutapika siku nzima)\b/,
    /\b(?:pain|maumivu|uchungu)\b[^.!?]{0,20}\b(?:and|na)\b[^.!?]{0,20}\b(?:bleed\w*|damu)\b/,
    // Added after the user-journey sweep (keep these AFTER index 8: PREG_SIGNS[7] and [8] are used on their own in careSign).
    // Pain on ONE side of the belly (early pregnancy: may be outside the womb). Order of the words does not matter.
    /^(?=.*\b(?:belly|stomach|abdomen|abdominal|tummy)\b)(?=.*\b(?:one side|left side|right side|one-sided)\b)(?=.*\b(?:pain\w*|hurts?|aching|cramp\w*|stabbing)\b)/,
    /^(?=.*\btumbo\b)(?=.*\bupande (?:mmoja|wa kushoto|wa kulia)\b)(?=.*\b(?:ninaumwa|naumwa|anaumwa|ananiuma|linaniuma|linauma|inauma|kuumwa|maumivu)\b)/,
    // Kiswahili: strong belly pain ("ninaumwa tumbo sana"), and the baby not playing (moving) in the belly.
    /^(?=.*\btumbo\b)(?=.*\b(?:sana|makali|kali|vibaya|kupindukia)\b)(?=.*\b(?:ninaumwa|naumwa|anaumwa|ananiuma|linaniuma|linauma|inauma|kuumwa|maumivu)\b)/,
    FETAL_MOVEMENT_SW
  ];
  const LABOUR = [
    /\b(?:in labou?r|labou?r (?:pains?|has started|started|is starting)|contractions?|my pains? (?:have )?started|pains? every \d+ minutes|going into labou?r|nimeanza kuhisi uchungu|uchungu umeanza|nina uchungu|uchungu wa kuzaa|uchungu wa (?:kujifungua|uzazi)|(?:yuko na|ameanza|anaanza) uchungu|ameanza kujifungua|anajifungua|maji ya uzazi)\b/,
    /\b(?:the )?baby (?:is )?(?:coming|crowning)\b|\bbaby's coming\b|\bi can see the (?:baby'?s )?head\b|\bmtoto anakuja\b|\bnimeanza kujifungua\b/,
    /\bi think i am going into labou?r\b/
  ];

  // The sign a sentence shows, or null. { category } where category is one of:
  //   labour, pregnancy, postpartum, baby, baby_today, child, child_today, poison, burn, snake, injury
  function careSign(text) {
    const plain = normalize(text);
    if (!plain || plain.length > 500) return null;
    // The same sentence without the symptoms said NOT to be there ("no fever", "hana homa"): the danger signs below are looked for in this, never in a symptom that is absent.
    const signs = withoutNegatedSymptoms(plain);
    const pregnant = PREGNANT.test(plain) && !/\b(?:not|no longer|never|am not|isn'?t|am n'?t) (?:\w+ )?pregnant\b/.test(plain);
    const hasBaby = BABY.test(plain);
    const hasChild = CHILD_WORDS.test(plain);
    const notNow = NOT_NOW.test(plain);
    // swallowed / burned / bitten: the person is almost always talking about a child, and these are urgent for anyone
    if (SWALLOW_VERB.test(plain) && SWALLOW_THING.test(plain) && (hasChild || /\b(?:i|we)\b/.test(plain) && /\b(?:poison|pesticide|bleach|kerosene|paraffin|rat poison)\b/.test(plain)) && !NOT_A_SIGN.test(plain) && !/\bi (?:took|take|have taken|just took) my\b/.test(plain)) return { category: "poison" };
    // Someone else (not a child), or a Kiswahili speaker, who has clearly swallowed a poison: "nimekunywa dawa ya kuua wadudu kwa makosa", "my grandfather drank pesticide". Only the plain swallowing verbs here, never "took", and never an animal.
    if (SWALLOW_VERB_PLAIN.test(plain) && STRONG_POISON.test(plain) && !ANIMAL.test(plain) && !NOT_A_SIGN.test(plain)) return { category: "poison" };
    // Cassava, mushrooms and wild fruit or seeds, followed by vomiting, dizziness, a fit or fainting: treated as a poisoning.
    if (SWALLOW_VERB_PLAIN.test(plain) && RISKY_FOOD.test(plain) && FOOD_SYMPTOM.test(plain) && !ANIMAL.test(plain) && !NOT_A_SIGN.test(plain)) return { category: "poison" };
    // Sprayed (or handled) a pesticide or chemical and now has symptoms: headache, dizzy, vomiting, burning eyes, a rash, trouble breathing. Not a question about spraying and not an animal.
    if (SPRAY_WORD.test(plain) && SPRAY_SYMPTOM.test(plain) && (!ANIMAL.test(plain) || SPEAKER_UNWELL.test(plain)) && !SPRAY_QUESTION.test(plain)) return { category: "poison" };
    if (SNAKE.test(plain) && SNAKE_BITE.test(plain) && !/\b(?:saw|see|killed|how to|what to do about|cow|goat|dog|sheep|chicken|cat|calf|ng'ombe|mbuzi|mbwa|kuku)\b/.test(plain)) return { category: "snake" };
    if (BURN.test(plain) && (hasChild || /\b(?:i|my)\b/.test(plain)) && /\b(?:burn\w*|scald\w*|ameungua|touched the fire|hot (?:water|oil))\b/.test(plain) && !NOT_A_SIGN.test(plain) && !/\b(?:sunburn|burn(?:ing)? (?:the )?(?:rubbish|waste|charcoal|maize|field|bush)|burnt (?:the )?(?:food|maize|rice))\b/.test(plain) && !(COOKING_BURN.test(plain) && !BODY_PART.test(plain))) return { category: "burn" };
    if (any(LABOUR, plain) && !notNow && !/\bnext week\b/.test(plain)) return { category: "labour" };
    if (BLEED.test(signs) && BIRTH_DONE.test(plain)) return { category: "postpartum" };
    if (/\b(?:miscarriage|lost (?:the|my) (?:pregnancy|baby)|mimba imeharibika|nimeharibu mimba)\b/.test(plain) && BLEED.test(signs)) return { category: "pregnancy" };
    // a baby only a few weeks old, or any baby: danger signs
    if (hasBaby && !NOT_A_SIGN.test(plain) && !pregnant && (MINE.test(plain) || /\bmtoto\b/.test(plain) || ANAPHOR.test(plain)) && any(BABY_NOW, signs) && !/\b(?:my baby (?:was|is) (?:born|due)|born (?:small|early))\b/.test(plain)) return { category: "baby" };
    if (/\b(?:born|was born|nimejifungua|nimezaa)\b/.test(plain) && hasBaby && /\b(?:not crying|is not crying|does not cry|small|1\.\d ?kg|very small|7 months|early|cold)\b/.test(plain)) return { category: "baby" };
    // A stiff neck next to a fever that is said NOT to be there is still a stiff neck in a child: kept alarming as before (the one place a negated fever used to count by accident).
    const childNow = any(CHILD_NOW, signs) || (/\bstiff neck\b/.test(plain) && /\b(?:fever|homa)\b/.test(plain));
    if (hasChild && !hasBaby && !NOT_A_SIGN.test(plain) && childNow) return { category: "child" };
    if (hasBaby && !NOT_A_SIGN.test(plain) && (MINE.test(plain) || /\bmtoto\b/.test(plain) || ANAPHOR.test(plain)) && childNow) return { category: "baby" };
    if (hasChild && /\b(?:fell|ameanguka|fallen|baby fell off|fell off)\b/.test(plain) && /\b(?:head|kichwa|crying a lot|bleeding|damu)\b/.test(plain)) return { category: "injury" };
    // A raised blood pressure in pregnancy is not a number to log: 140/90 needs a health worker the same day, 160/110 now. A question about it ("is 150/95 safe in pregnancy?") is answered too.
    // "juu ya" is how Kiswahili says "over" ("presha yangu ni 160 juu ya 110"); without it the pressure was staged as a reading to save and the mother was not told to go now.
    const pressure = plain.match(/\b(\d{2,3})\s*(?:over|juu ya|\/)\s*(\d{2,3})\b/);
    if (pregnant && pressure) {
      const top = Number(pressure[1]); const bottom = Number(pressure[2]);
      if (top > bottom && top >= 90 && top <= 300 && bottom >= 40 && bottom <= 200) {
        if (top >= 160 || bottom >= 110) return { category: "pregnancy_bp_high" };
        if (top >= 140 || bottom >= 90) return { category: "pregnancy_bp" };
      }
    }
    if (pregnant && !NOT_A_SIGN.test(plain) && !notNow && any(PREG_SIGNS, signs)) return { category: "pregnancy" };
    if (!notNow && !NOT_A_SIGN.test(plain) && any([PREG_SIGNS[7], PREG_SIGNS[8], FETAL_MOVEMENT_SW], plain)) return { category: "pregnancy" };
    if (hasChild && !NOT_A_SIGN.test(plain) && (MINE.test(plain) || /\bmtoto\b/.test(plain)) && any(CHILD_TODAY, signs)) return { category: hasBaby ? "baby_today" : "child_today" };
    return null;
  }

  // ---- after a birth ----
  // Feeling you cannot cope, empty, angry or sad since the baby came: common, treatable, and to be told to a health worker. Never answered as a task.
  const POSTNATAL = [
    /\b(?:don'?t|do not|cannot|can'?t|could not|couldn'?t) (?:want|love|feel|bond|cope)\b[^.!?]{0,25}\b(?:the baby|my baby|this baby|my child|my children|the child)\b/,
    /\b(?:i )?(?:can'?t|cannot|can not|could not) cope\b[^.!?]{0,20}\b(?:with )?(?:the )?(?:baby|my baby|my children|the children|motherhood|being a mother)\b/,
    // "sijisikii" is "I do not feel (like)": low mood when it is about loving or looking after the baby, but "sijisikii mtoto akicheza" is "I cannot feel the baby playing (moving)" -- a danger sign in pregnancy, never low mood.
    /\b(?:siwezi|sijisikii|sipendi)\b[^.!?]{0,20}\b(?:kumpenda|kumtunza)\b|\b(?:siwezi|sipendi|sijisikii)\b[^.!?]{0,20}\bmtoto\b(?![^.!?]{0,20}\b(?:akicheza|akisogea|anacheza|anasogea|kucheza|kusogea|teke|tumboni)\b)|\bsipendi mtoto huyu\b|\bnimechoka sana na (?:huyu )?mtoto\b/,
    /\b(?:i )?(?:don'?t|do not) feel anything for (?:my|the) (?:baby|child)\b/,
    /\bi (?:feel|am) (?:like )?(?:a )?(?:bad|terrible|useless|failing as a?) (?:mother|mum|mom)\b|\bi(?:'m| am) (?:a )?(?:bad|terrible|useless) (?:mother|mum|mom)\b|\bi(?:'m| am) failing my (?:children|baby|child)\b|\bi feel i am failing my (?:children|baby|child)\b/,
    /\bi wish i (?:did not|didn'?t|had not|hadn'?t) have (?:this|the|a) (?:baby|child)\b|\bi regret having (?:this baby|a baby|children|kids)\b|\bi do not want (?:this|the) baby\b|\bi don'?t want (?:this|the) baby\b/,
    /\bbaby blues\b|\bpost-?natal depress\w*\b/,
    /\b(?:since|after) (?:the baby|i gave birth|giving birth|i had the baby|the birth)\b[^.!?]{0,60}\b(?:sad|cry\w*|empty|low|depress\w*|can'?t cope|cannot cope|hopeless|numb|angry|anxious|scared all the time|not (?:sleeping|eating)|go mad|going mad)\b/,
    /\bi (?:feel|am) (?:so )?(?:sad|low|empty|numb|hopeless)\b[^.!?]{0,40}\b(?:since|after) (?:the baby|i gave birth|giving birth)\b/,
    /\b(?:i )?(?:cry|crying) every day\b[^.!?]{0,40}\b(?:baby|since|after)\b|\bi cannot get out of bed\b[^.!?]{0,30}\b(?:baby|since)\b|\bi (?:don'?t|do not) want to get out of bed to feed the baby\b/,
    /\bi(?:'m| am) (?:too|so) tired to (?:look after|care for) (?:my )?(?:baby|children|child)\b|\bi am so tired i could scream at the (?:child|baby|children)\b|\bi am angry all the time at my (?:children|baby|child)\b/,
    /\bi want to run away and leave (?:my )?(?:baby|children|child|kids)\b|\bsometimes i want to leave the baby and run away\b|\bmy (?:baby|children) (?:is|are) better off with (?:another|someone else|a different) (?:mother|mum|mom|person)\b/,
    /\b(?:baby|child|children|kids)\b[^.!?]{0,25}\b(?:would be|is|are|will be) (?:much )?better (?:off )?without me\b/,
    /\bi cry every day and i don'?t want to see anyone\b|\bi am so low since i gave birth\b|\bi have not slept in days since the baby\b/
  ];
  // Thoughts or acts that could hurt the baby: shaking, throwing, hitting, voices. A different, urgent reply from low mood.
  const BABY_AT_RISK = [
    /\b(?:want|wanted|feel like|felt like|going to|could|might|will) (?:to )?(?:shake|throw|smother|suffocate|drop|hit|beat|strangle|hurt|harm|kill)\b[^.!?]{0,20}\b(?:the baby|my baby|my child|the child|my son|my daughter|baby)\b/,
    /\b(?:i )?(?:shook|have shaken|hit|beat|threw|dropped|slapped|smothered)\b[^.!?]{0,15}\b(?:the baby|my baby|my child|my son|my daughter|the child)\b/,
    /\bi (?:think about|keep thinking about|have (?:bad )?thoughts? about) (?:hurting|harming|killing|shaking) (?:my|the) (?:baby|child|children)\b|\bi have bad thoughts about the baby\b/,
    /\bi hear voices\b[^.!?]{0,40}\b(?:baby|child|hurt|kill)\b|\bvoices (?:telling|tell|are telling) me to (?:hurt|kill|harm)\b/,
    /\bi am so angry i could (?:hurt|hit|harm|kill|shake) (?:my |the )?(?:child|baby|children|kids)\b/,
    /\bi want to (?:throw|give away|sell|abandon|leave) (?:the |my |this )?baby (?:away)?\b|\bi want to sell my baby\b|\bi want to take the baby and die\b/,
    /\b(?:nataka|nitamuua|nitamdhuru|naogopa nitamdhuru|nataka kumuua|nataka kumpiga)\b[^.!?]{0,20}\b(?:mtoto|kumdhuru|kumuua)\b|\bnaogopa nitamdhuru mtoto\b|\bnataka kumuua mtoto\b/,
    /\bi (?:hit|slapped|beat) my (?:child|baby|son|daughter)\b[^.!?]{0,30}\b(?:too hard|bleeding|and (?:he|she) is)\b/,
    // "ninahisi kumdhuru mtoto wangu" (I feel like hurting my baby), "nawaza kumuua mtoto", "naogopa kumpiga mtoto".
    /\b(?:ninahisi|nahisi|najisikia|ninajisikia|ninawaza|nawaza|nafikiria|ninafikiria|nina mawazo ya|naogopa|ninaogopa|nimeanza kuhisi)\b[^.!?]{0,25}\b(?:kumdhuru|kumuua|kumpiga|kumtikisa|kumsonga|kumtupa|kumchoma)\b[^.!?]{0,20}\bmtoto\b/
  ];
  // A baby lost: miscarriage, stillbirth, a child who died. Grief first; bleeding or pain is a danger sign (careSign) and is answered before this.
  const GRIEF = [
    /\b(?:i had a miscarriage|i have a miscarriage|i(?:'ve| have) had a miscarriage|i lost (?:the |my )(?:baby|pregnancy|child|son|daughter)|my (?:baby|child|son|daughter) (?:died|has died|is dead|passed away)|my baby was stillborn|stillbirth)\b/,
    /\b(?:mtoto wangu amefariki|mtoto amefariki|mimba imeharibika|nimepoteza mtoto|nimepoteza mimba|mtoto amekufa)\b/
  ];

  // ---- being hurt by a partner, and others being hurt ----
  const PARTNER = "(?:my )?(?:husband|man|partner|boyfriend|ex|ex-husband|baba (?:watoto|\\w+)|mume wangu|mume|mpenzi wangu|he|she)";
  const HIT_VERB = "(?:beat(?:s|ing)?|beaten|hit(?:s|ting)?|slap(?:s|ped|ping)?|chok(?:es|ed|ing)|kick(?:s|ed|ing)|punch(?:es|ed|ing)|whip(?:s|ped)?|stab(?:s|bed)?|burn(?:s|ed|t)|threaten(?:s|ed|ing)?|attack(?:s|ed|ing)?|abus(?:es|ed|ing))";
  const ABUSE_MORE = [
    new RegExp(`\\b${PARTNER} (?:is |was |has |keeps |always )?${HIT_VERB} (?:me|my (?:belly|stomach|face|head|back)|us)\\b`),
    new RegExp(`\\b(?:he|my husband|my man|my partner|husband) (?:is )?${HIT_VERB} me\\b`),
    /\b(?:i am|i'?m|i feel) (?:so )?(?:afraid|scared|terrified|frightened) (?:of|for) (?:my )?(?:husband|man|partner|boyfriend|him|home|going home|my life)\b|\b(?:naogopa|ninaogopa) (?:mume wangu|nyumbani|kurudi nyumbani)\b|\bi am afraid to go home\b|\bsijisikii salama nyumbani\b/,
    /\b(?:he|my husband|my man|husband) (?:will|is going to|threatens to|said he will|says he will|has threatened to) (?:kill|beat|hurt|stab|burn) me\b|\bi'?m afraid he will (?:kill|hurt|beat) me\b|\bhe (?:will|is going to) kill me\b|\bameniambia ataniua\b|\bataniua\b/,
    /\b(?:he|my husband|my man) (?:has|had) a (?:panga|knife|machete|gun|stick)\b[^.!?]{0,30}\b(?:looking for me|outside|coming|is here)\b|\bhe is outside the door and he is drunk\b/,
    /\bi (?:am|'m) hiding (?:from|at)\b[^.!?]{0,40}\b(?:husband|him|his|house)\b|\bi ran away from (?:home|my husband|him)\b|\bi have nowhere to sleep (?:tonight )?with my (?:child|children|baby)\b|\b(?:he|my husband|my man) (?:threw|has thrown|throws|chased|has chased|locked|has locked|kicked|has kicked) (?:me|us)\b[^.!?]{0,30}\b(?:out|house|home|in|room)\b|\b(?:he|my husband) (?:has )?(?:thrown|chased) me out\b|\bamenifukuza (?:nyumbani|na mtoto)\b|\bnimefukuzwa nyumbani\b/,
    /\b(?:he|my husband|my man) (?:forces?|forced|makes?|made) (?:himself on )?me\b[^.!?]{0,30}\b(?:sleep with|sex|to have sex|himself)\b|\b(?:he|my husband) forces himself on me\b|\bhe (?:raped|rapes) me\b|\bhe forces me to sleep with him\b|\b(?:a|some) man forced me\b|\bmume wangu ananilazimisha\b|\bnimebakwa\b|\balinibaka\b|\bananibaka\b/,
    /\b(?:he|my husband) (?:takes|took|has taken|forces me to give|makes me give|won'?t let me keep) (?:all )?(?:my )?(?:market )?(?:money|pesa)\b|\bananiambia nimpe pesa zote\b|\bananinyang'anya pesa\b|\b(?:he|my husband) (?:does not|doesn'?t|will not|won'?t|never) (?:let|allow) me (?:go|to go|leave|out|see)\b|\b(?:he|my husband) (?:locked|locks) me in\b|\b(?:he|my husband) (?:checks|reads|has taken) my phone\b|\bhe does not let me go to the clinic\b/,
    /\b(?:mume wangu|ananipiga|ananichapa|amenipiga|ananipiga mimi|ananipiga kila siku)\b[^.!?]{0,30}\b(?:ananipiga|amenipiga|ananichapa|mimi na mtoto|na nina mimba|jana|kila siku)?\b|\bmume wangu (?:ananipiga|amenipiga|ananichapa)\b|\b(?:ananipiga|ananichapa|amenipiga)\b/,
    /\b(?:he|my husband|my man|husband|my husban|mi husband|my in-laws?) (?:\w+ ){0,2}(?:beats?|hits?|hit|slapped|beat)\b[^.!?]{0,10}\bme\b|\bhusband (?:beat|hit) me again\b|\bmy man beats me\b|\bhe is beating me\b|\bhe (?:beats|hit|slapped|kicked) me\b/
  ];
  // Someone else is being hurt (a neighbour, a friend, a child), or a girl is at risk of being cut or married off.
  const ABUSE_OTHER = [
    /\b(?:he|my husband|her husband|his father|the father|their father) (?:beats?|hits?|is beating|is hitting|beat|hit|slaps?|whips?) (?:my|the|his|her|their) (?:\d+[ -]?year[ -]?old|child|children|kids?|son|daughter|baby|toddler)\b|\bmy son is being beaten\b|\bhe beats my child\b|\bhe hit my daughter\b|\bmy husband beats my \d+ ?year old\b/,
    /\b(?:my )?(?:neighbou?r|neighbou?r'?s|friend|friend'?s|sister|sister'?s|cousin|colleague)\b[^.!?]{0,30}\b(?:beat(?:s|ing)?|hit(?:s|ting)?|locks?|locked|abus\w*|rap\w*)\b[^.!?]{0,20}\b(?:her|his|them|child|children|in|wife|daughter|son)\b/,
    /\b(?:a man|someone|somebody|my daughter'?s teacher|the teacher|a teacher|uncle|stepfather|my boss)\b[^.!?]{0,25}\b(?:touched|touches|molest\w*|rap\w*|asking (?:her|him) for sex|forced)\b[^.!?]{0,20}\b(?:my daughter|my son|my niece|my child|her|him|girl|boy)\b/,
    /\bmy (?:daughter|niece|sister|cousin)'?s? (?:teacher )?(?:is|was) asking (?:her )?for sex\b|\bmy daughter'?s teacher is asking her for sex\b/,
    /\b(?:they|he|she|my (?:mother in law|father|grandmother|aunt|uncle)|the family|elders?|wazee)\b[^.!?]{0,30}\b(?:want|wants|plan|planning|are going|going|says?|insist\w*|wanataka|anataka)\b[^.!?]{0,30}\b(?:cut|circumcis\w*|mutilat\w*|marry off|marry|kumkeketa|kumtahiri|kumuoza)\b[^.!?]{0,30}\b(?:my )?(?:daughter|niece|girl|binti|mtoto|sister|her)\b|\b(?:wanataka|anataka) (?:kumkeketa|kumtahiri|kumuoza) (?:binti|mtoto)\b/,
    /\bmy (?:niece|daughter|sister|cousin) is being (?:married off|forced to marry|married)\b[^.!?]{0,20}\b(?:at )?\d{1,2}\b|\bmarried off at 1\d\b/,
    /\bmy (?:sister|niece|daughter|cousin) is 1\d(?: years? old)? and (?:is )?pregnant\b|\bmy (?:\d{1,2}[ -]?year[ -]?old|1\d[ -]?year[ -]?old|young) (?:sister|niece|daughter|cousin) is pregnant\b|\bmy (?:sister|niece|cousin) is pregnant and (?:she is|is) (?:only )?1\d\b|\bmy 1\d year old sister is pregnant\b|\bmy sister is pregnant and she is only 1\d\b|\bmdogo wangu ana mimba ana miaka 1\d\b/,
    /\b(?:i am|i'?m|i was) afraid (?:that )?(?:my husband|he|she|they|someone|the father) (?:will|might|is going to) (?:hurt|hit|kill|beat|harm) (?:the|my) (?:baby|child|children)\b/,
    // Someone else raped or defiled ("my girl was raped", "binti yangu amebakwa"): the girl or woman, a child, a relative or a friend.
    /\b(?:my|our|the|a)\s+(?:\w+\s+){0,2}?(?:girl|daughter|son|boy|child|niece|nephew|sister|wife|mother|friend|neighbou?r|student|pupil|toddler|baby)\b[^.!?]{0,20}\b(?:was|were|has been|have been|got|is being|being)\s+(?:raped|defiled|molested|sexually (?:assaulted|abused))\b|\b(?:raped|defiled|molested)\s+(?:my|our|the)\s+(?:\w+\s+){0,2}?(?:girl|daughter|son|boy|child|niece|nephew|sister|wife|mother|friend|student|pupil|toddler|baby)\b/,
    /\b(?:amebakwa|alibakwa|amenajisiwa|alinajisiwa|alimbaka|amembaka|wamembaka|walimbaka|anambaka|ananajisiwa)\b/
  ];
  // A friend or relative who says she wants to die: stay with her, do not leave her alone, help her reach someone. Not the reply for abuse.
  const FRIEND_CRISIS = [
    /\bmy (?:friend|sister|brother|mother|mum|mom|father|dad|son|daughter|cousin|neighbou?r|colleague|husband|wife|aunt|uncle)\b[^.!?]{0,30}\b(?:wants? to (?:die|kill (?:herself|himself|themselves))|is suicidal|says (?:she|he|they) wants? to die|talks? about (?:dying|suicide|killing (?:herself|himself))|(?:tried|trying) to kill (?:herself|himself)|has (?:swallowed|taken) (?:poison|too many))\b/
  ];
  // not violence: "my husband beats me at draughts", "he hit me up on whatsapp"
  const NOT_VIOLENCE = /\b(?:at (?:draughts|checkers|cards|chess|football|a game|scrabble|dominoes|bao|ludo)|hit me up|beats me to (?:the|it|market)|beat me to (?:the|it)|beat me in|beats me in|hit me with the ball|with the ball)\b/;

  // ---- wanting to die, more ways ----
  const SELF_HARM_MORE = [
    /\b(?:i )?(?:want|wanna|going|will|am going|plan|planning|intend|decided) (?:to )?(?:drink|swallow|take) (?:poison|pesticide|bleach|rat poison|kerosene|paraffin|all my pills|an overdose)\b|\bi(?:'ll| will) (?:drink|swallow) (?:poison|pesticide|bleach|rat poison)\b/,
    /\bnitajiua\b|\bnitakunywa sumu\b|\bnataka kuruka (?:mto|kutoka|chini)\b|\bnataka kunywa sumu\b/,
    /\bi want to take the baby and die\b|\bi want to (?:die|kill myself) (?:with|and) (?:the )?(?:baby|my baby|my children)\b|\bnataka kufa na mtoto\b/,
    /\bi want to jump (?:in|into|off|from) (?:the )?(?:river|bridge|well|building|tree|cliff)\b/
  ];

  const adultContext = text => /\b(?:my )?(?:husband|man|partner|boyfriend|ex|mume|in-laws?|baba watoto)\b|\bpregnan|\bmimba\b|\bmjamzito\b|\bmy (?:baby|child|children|kids)\b|\bmtoto wangu\b|\bmy husban\b|\bmi husband\b/.test(normalize(text));
  const test = (patterns, text, limit = 500) => { const plain = normalize(text); return plain.length > 0 && plain.length <= limit && any(patterns, plain); };
  // Asking for a dose, or whether a medicine is safe, for a baby, a child, in pregnancy or while breastfeeding: Kyro cannot give a dose and says who can. Not a reminder or a record
  // ("remind me to give my baby his medicine at 8"), and not a question about animals.
  const MEDICINE_THING = /\b(?:ibuprofen|brufen|paracetamol|panadol|acetaminophen|aspirin|diclofenac|amoxicillin|amoxil|antibiotics?|cough (?:syrup|medicine)|medicines?|medications?|tablets?|pills?|syrup|drops|dawa|vidonge|metronidazole|flagyl|coartem|artemether|malaria (?:medicine|tablets?)|quinine|iron (?:tablets?|pills?)|folic acid|herbs?|herbal|traditional medicine|painkillers?|laxatives?|antihistamines?|piriton|dexamethasone|steroids?|ointment|cream)\b/;
  const MEDICINE_QUESTION = /\b(?:how (?:much|many|often)|what (?:dose|dosage)|dose|dosage|can i (?:take|give|use|drink)|can (?:my|a) (?:baby|child|toddler|son|daughter|pregnant woman)|can she (?:take|have)|can he (?:take|have)|is it (?:safe|ok|okay|alright)|is (?:\w+ ){1,3}safe|safe (?:to|for|in)|should i (?:take|give)|may i (?:take|give)|nitumie|naweza kumpa|nimpe|ni salama|kiasi gani)\b/;
  const MEDICINE_AUDIENCE = /\b(?:pregnan\w*|breastfeed\w*|breast feeding|nursing mother|expecting|baby|babies|newborn|infant|toddler|child|children|kid|kids|my \d+[ -]?(?:year|month|week)s?[ -]?old|mtoto|mjamzito|mimba|ninanyonyesha)\b/;
  const NOT_A_QUESTION_ABOUT_DOSE = /\b(?:remind|reminder|schedule|record|log|add (?:a|my)|save|buy|bought|price|cost|sell|selling|stock|order|cow|goat|sheep|dog|cat|chicken|hens?|calf|calves|cattle|livestock|ng'ombe|mbuzi)\b/;
  const medicineQuestion = text => {
    const plain = normalize(text);
    return plain.length > 0 && plain.length <= 300 && MEDICINE_THING.test(plain) && MEDICINE_QUESTION.test(plain) && MEDICINE_AUDIENCE.test(plain) && !NOT_A_QUESTION_ABOUT_DOSE.test(plain);
  };
  const INFO_QUESTION = /^(?:what (?:is|are)|how do i know|how can i|how to|is it normal|can you (?:tell|explain)|tell me about|explain)\b/;
  const postnatal = text => !INFO_QUESTION.test(normalize(text)) && test(POSTNATAL, text);
  const friendCrisis = text => test(FRIEND_CRISIS, text);
  const babyAtRisk = text => test(BABY_AT_RISK, text);
  const grief = text => test(GRIEF, text);
  const abuseMore = text => { const plain = normalize(text); return plain.length > 0 && plain.length <= 500 && !NOT_VIOLENCE.test(plain) && any(ABUSE_MORE, plain); };
  const abuseOther = text => { const plain = normalize(text); return plain.length > 0 && plain.length <= 500 && !NOT_VIOLENCE.test(plain) && any(ABUSE_OTHER, plain); };
  const selfHarmMore = text => test(SELF_HARM_MORE, text);
  const notViolence = text => NOT_VIOLENCE.test(normalize(text));

  return Object.freeze({ normalize, careSign, friendCrisis, postnatal, babyAtRisk, grief, abuseMore, abuseOther, selfHarmMore, adultContext, notViolence, medicineQuestion, withoutNegatedSymptoms });
});
