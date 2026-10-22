(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.KyroIntakeForms = api;
})(typeof window !== "undefined" ? window : globalThis, function () {
  "use strict";

  // Form definitions for public/kyro-voice-intake.js's generic engine. Each entry here is a plain
  // data definition -- field list, questions, validation, readback -- with no engine or voice logic
  // of its own. Adding a second form later (telehealth intake, job application, etc.) means adding a
  // new entry here, not touching the engine or the Realtime wiring in app.js.

  function clean(value) { return String(value ?? "").replace(/\s+/g, " ").trim(); }

  // --- résumé -----------------------------------------------------------------------------------
  // Field keys map 1:1 to nexus/resume/build.js's buildResume() input shape, so the collected
  // answers can be submitted directly with no extra translation step. "experience" is collected as
  // several short, repeatable answers (an array) rather than one long run-on paragraph -- buildResume()
  // already accepts an array directly for any of its list-shaped fields. "skills"/"languages" stay as
  // plain, unsplit strings: buildResume()'s own items() is the one place that knows how to split a
  // comma/"and"-joined phrase correctly (including the Oxford-comma case), so this form never
  // re-implements that splitting itself.
  // Every field also carries its Kiswahili wording in `sw` (first draft: a fluent speaker must review every word). The engine speaks the language the person speaks.
  const RESUME_FIELDS = [
    { key: "name", label: "Name", question: "What is your full name?", required: true, kind: "name", aliases: ["name", "jina"],
      sw: { label: "Jina", question: "Jina lako kamili ni nani?" } },
    { key: "location", label: "Town", question: "Which town or village do you live in? You can say 'skip'.", required: false, kind: "place", aliases: ["location", "town", "mji", "kijiji", "mahali"],
      sw: { label: "Mji", question: "Unaishi mji au kijiji gani? Unaweza kusema 'ruka'." } },
    {
      key: "experience", label: "Work experience",
      question: "Tell me about work you have done. For example: 'I grew maize for five years.'",
      required: false, kind: "sentences", aliases: ["experience", "work", "kazi", "uzoefu"],
      repeatable: { moreQuestion: "Any other work you have done? Or say that's all.", max: 5 },
      sw: { label: "Uzoefu wa kazi", question: "Niambie kuhusu kazi ulizowahi kufanya. Kwa mfano: 'Nililima mahindi kwa miaka mitano.'", moreQuestion: "Kuna kazi nyingine uliyowahi kufanya? Au sema ndio hayo tu." }
    },
    { key: "skills", label: "Skills", question: "What are you good at? For example: farming, driving, cooking.", required: false, kind: "list", aliases: ["skills", "ujuzi", "stadi"],
      sw: { label: "Ujuzi", question: "Unaweza kufanya nini vizuri? Kwa mfano: kilimo, kuendesha gari, kupika." } },
    { key: "education", label: "Education", question: "Did you go to school or do any training? Tell me what, or say 'skip'.", required: false, kind: "sentences", aliases: ["education", "schooling", "training", "elimu", "masomo", "shule", "mafunzo"],
      sw: { label: "Elimu", question: "Ulienda shule au ulifanya mafunzo yoyote? Niambie ni nini, au sema 'ruka'." } },
    { key: "languages", label: "Languages", question: "Which languages do you speak?", required: false, kind: "list", aliases: ["languages", "lugha"],
      sw: { label: "Lugha", question: "Unazungumza lugha gani?" } },
    { key: "phone", label: "Phone", question: "What phone number should an employer call? Or say 'skip'.", required: false, kind: "phone", aliases: ["phone", "number", "simu", "namba"],
      sw: { label: "Simu", question: "Mwajiri apige simu kwa namba gani? Au sema 'ruka'." } },
    { key: "email", label: "Email", question: "Do you have an email address? Say it, or say 'skip'.", required: false, kind: "email", aliases: ["email", "barua pepe", "imeili"],
      sw: { label: "Barua pepe", question: "Una barua pepe? Itaje, au sema 'ruka'." } }
  ];

  // A first-time job seeker may truly have no work, no school and no skill they can name yet. The engine must never loop on that: the first time it says what is
  // needed, the second time it offers concrete, easy examples (and says that volunteer work, school and helping at home count), and the third time it steps
  // aside and keeps what has been said so far ("continue" picks it up again). The server still builds nothing without at least one real item (nexus/resume/build.js).
  const RESUME_NEEDS = {
    en: [
      "I need at least one thing for your résumé: work you have done, what you are good at, or your schooling.",
      "That's okay. Tell me one thing you can do, for example: farming, cooking, driving, selling, fixing phones, or looking after children. Volunteer work, school, or helping your family business all count.",
      "That's okay, we can finish this later. What you told me is kept. Say 'continue my CV' when you have one thing to add, or say 'cancel' to stop."
    ],
    sw: [
      "Ninahitaji angalau jambo moja kwa CV yako: kazi ulizowahi kufanya, unachoweza kufanya vizuri, au masomo yako.",
      "Hakuna shida. Niambie jambo moja unaloweza kufanya, kwa mfano: kilimo, kupika, kuendesha gari, kuuza, kutengeneza simu, au kulea watoto. Kazi ya kujitolea, shule, au kusaidia biashara ya familia pia vinahesabika.",
      "Hakuna shida, tunaweza kumaliza baadaye. Ulichoniambia kimehifadhiwa. Sema 'endelea na CV yangu' ukiwa na jambo la kuongeza, au sema 'ghairi' kuacha."
    ]
  };

  function resumeValidate(values, context = {}) {
    const hasContent = clean(values.skills) || (Array.isArray(values.experience) && values.experience.length) || clean(values.education);
    if (hasContent) return null;
    const lang = context.lang === "sw" ? "sw" : "en";
    const misses = Math.max(0, Number(context.misses) || 0);
    if (misses === 0) return { fieldKey: "experience", message: RESUME_NEEDS[lang][0] };
    if (misses === 1) return { fieldKey: "skills", message: RESUME_NEEDS[lang][1] };
    return { fieldKey: "skills", pause: true, message: RESUME_NEEDS[lang][2] };
  }

  function resumeReadback(values, lang = "en") {
    const sw = lang === "sw";
    const parts = [];
    if (values.name) parts.push(`${sw ? "Jina" : "Name"}: ${values.name}.`);
    if (values.location) parts.push(`${sw ? "Mji" : "Town"}: ${values.location}.`);
    if (Array.isArray(values.experience) && values.experience.length) parts.push(`${sw ? "Kazi" : "Work"}: ${values.experience.join("; ")}.`);
    if (values.skills) parts.push(`${sw ? "Ujuzi" : "Skills"}: ${values.skills}.`);
    if (values.education) parts.push(`${sw ? "Elimu" : "Education"}: ${values.education}.`);
    if (values.languages) parts.push(`${sw ? "Lugha" : "Languages"}: ${values.languages}.`);
    if (values.phone) parts.push(`${sw ? "Simu" : "Phone"}: ${values.phone}.`);
    if (values.email) parts.push(`${sw ? "Barua pepe" : "Email"}: ${values.email}.`);
    return `${sw ? "Hivi ndivyo nilivyoandika." : "Here is what I have."} ${parts.join(" ")}`;
  }

  function resumeToRequest(values) {
    const request = {};
    if (values.name) request.name = values.name;
    if (values.location) request.location = values.location;
    if (values.phone) request.phone = values.phone;
    if (values.email) request.email = values.email;
    if (values.skills) request.skills = values.skills;
    if (values.education) request.education = values.education;
    if (values.languages) request.languages = values.languages;
    if (Array.isArray(values.experience) && values.experience.length) request.experience = values.experience;
    return request;
  }

  // Deliberately a little more generous than nexus/brain/planner.js's RESUME_REQUEST (it also
  // accepts "i want"/"help me with" phrasing, common in natural speech), but keeps the same
  // question-exclusion so "how do I write a resume?" is never mistaken for a real request, and adds
  // an exclusion for "resume" used as a verb ("resume my lesson", "resume playing music").
  // No trailing \b after the resume-keyword group: JS's \b treats only [A-Za-z0-9_] as "word"
  // characters, so a boundary placed immediately after an accented letter like the second "é" in
  // "résumé" silently fails to match (é-to-end-of-string looks like non-word-to-non-word, not a
  // boundary) -- this cost a real false negative on "help me write my résumé" during testing.
  const RESUME_VERB_REQUEST = /^\s*(?:(?:please|kyro|nexus|can you|could you|would you)[, ]+)*(?:make|makes|create|creates|build|builds|bill|billed|write|writes|prepare|draft|generate|give me|i need|need|i want|want|help me (?:make|create|write|with))\b[^.?!]{0,40}(?:resume|r[ée]sum[ée]|cv|curriculum vitae)/i;
  const RESUME_QUESTION = /^\s*(?:how|what|why|when|where|should|can you explain|tips|is it|do i)\b/i;
  const RESUME_AS_VERB = /\bresume\b.*\b(music|song|songs|playlist|lesson|work(?:flow)?|playing|my (?:course|training|work|shift))\b/i;

  // Found live: "Hey Kyro, make a resume", "I'd like to build a resume" and "open the resume builder" did NOT
  // start the voice interview (the strict pattern above wants the verb first), so the old manual typing
  // form opened instead -- useless to someone who cannot type. Natural speech puts a greeting, the wake word
  // (often misheard) and "I'd like to..." in front, so the check is: strip those, then look for a résumé word
  // together with a wish/make verb, in a short sentence that is not a question about résumés.
  const WAKE_LEAD = /^(?:(?:hey|hi|hello|ok(?:ay)?)[, ]+)?(?:(?:kyro|kiro|kairo|cairo|cyro|kyra|kira|chiro|kayro|chatroom|nexus)[, ]+)?/i;
  const FILLER_LEAD = /^(?:(?:please|ok(?:ay)?|so|well|yes|now|and|um|uh)[, ]+)+/i;
  const RESUME_WORD = /(?<![a-z])(?:r[ée]sum[ée]|cv|curriculum vitae)(?![a-zé])/i;
  const RESUME_INTENT = /\b(?:make|create|build|write|prepare|draft|generate|start|begin|fill(?: out)?|put together|work on|open|launch|set up|help|need|want|(?:i'?d|i would|would) like|let'?s|give me|get me|do)\b/i;
  const RESUME_BUILDER_NAME = /^(?:the |my |a )?(?:r[ée]sum[ée]|cv)(?: |-)?(?:builder|maker|generator|writer|helper)\.?$/i;
  const MAX_RESUME_REQUEST_WORDS = 16;

  // Kiswahili: "nataka CV", "nipe CV yangu", "tengeneza wasifu wangu", "nitengenezee CV", "niandikie CV". A question about CVs ("CV ni nini?", "jinsi ya kuandika CV")
  // and a request to download one that already exists ("pakua CV yangu") are not requests to make a new one; "wasifu wa <person>" is a biography, not a CV.
  const SW_RESUME_WORD = /(?<![a-z])(?:cv|wasifu(?: wa kazi| wangu)?)(?![a-z])/i;
  const SW_RESUME_INTENT = /\b(?:tengeneza|tengenezea|nitengenezee|unitengenezee|andika|niandikie|unaweza kuandika|nipe|naomba|nataka|ninataka|ninahitaji|nahitaji|nisaidie|tuanze|anza|fanya|nifanyie|jenga|nijengee|kutengeneza|kuandika)\b/i;
  const SW_RESUME_QUESTION = /\b(?:ni nini|maana|jinsi ya|namna ya|nawezaje|ninawezaje|nifanyeje|kwa nini|inatumika)\b/i;
  const SW_RESUME_DOWNLOAD = /\b(?:pakua|niipakue|nipakulie|download|pakuliwa)\b/i;
  const SW_BIOGRAPHY = /\bwasifu wa (?!kazi\b)\p{L}+/iu;
  function isSwahiliResumeRequest(value) {
    if (!SW_RESUME_WORD.test(value)) return false;
    if (SW_RESUME_QUESTION.test(value) || SW_RESUME_DOWNLOAD.test(value) || SW_BIOGRAPHY.test(value)) return false;
    if (value.split(/\s+/).length > MAX_RESUME_REQUEST_WORDS) return false;
    return SW_RESUME_INTENT.test(value);
  }
  function isResumeDownloadRequest(text) {
    const value = clean(text).replace(/[’]/g, "'");
    return RESUME_WORD.test(value) || SW_RESUME_WORD.test(value) ? (SW_RESUME_DOWNLOAD.test(value) || /^\s*(?:please\s+)?(?:download|send|email|share)\b/i.test(value)) : false;
  }

  function isResumeBuildRequest(text) {
    const raw = clean(text).replace(/[’]/g, "'");
    if (!raw) return false;
    if (isSwahiliResumeRequest(raw.replace(WAKE_LEAD, "").replace(FILLER_LEAD, "").trim())) return true;
    const value = raw.replace(WAKE_LEAD, "").replace(FILLER_LEAD, "").trim();
    if (!value) return false;
    if (RESUME_QUESTION.test(value)) return false;
    if (RESUME_AS_VERB.test(value)) return false;
    if (RESUME_VERB_REQUEST.test(value)) return true;
    if (value.split(/\s+/).length > MAX_RESUME_REQUEST_WORDS) return false;
    if (!RESUME_WORD.test(value)) return false;
    return RESUME_INTENT.test(value) || RESUME_BUILDER_NAME.test(value);
  }

  const RESUME_CONTINUE = /^\s*(?:(?:continue|back to|keep going with|resume)\s+(?:my |the )?(?:r[ée]sum[ée]|cv)\b|(?:endelea na|tuendelee na|rudi kwa|tuendelee kwa)\s+(?:cv|wasifu)(?: yangu| wangu)?\b)/i;
  // Only ever consulted while a paused intake exists, so bare "continue"/"I'm ready" phrasing is safe
  // here -- it can't be mistaken for anything else when nothing is paused. Also tolerates the wake
  // word (and the recognizer's usual mishearings of it) in front.
  const BARE_CONTINUE = /^\s*(?:(?:hey[, ]+)?(?:kyro|kiro|cairo|chatroom|nexus)[, ]+)?(?:ok(?:ay)?[, ]+)?(?:(?:i'?m |i am |we'?re |we are )?ready|continue|go on|go ahead|carry on|keep going|let'?s (?:continue|go|keep going|carry on)|(?:ok(?:ay)?[, ]+)?i'?m back|endelea|tuendelee|tuendelee tu|nimerudi|niko tayari|nipo tayari|sawa,? endelea|endelea tafadhali)[ .!,]*(?:please|tafadhali)?[ .!]*$/i;
  function isResumeContinueRequest(text) {
    const value = clean(text);
    return RESUME_CONTINUE.test(value) || BARE_CONTINUE.test(value);
  }

  // --- selling something --------------------------------------------------------------------------
  // "I want to sell 50 bags of maize" used to open the Trade form, or ask the person to say yes to their own sentence. Now Kyro asks only for what is missing (what, how much, what price, where), reads it
  // back, and posts it to the community board after a yes -- the same listing "post for sale: 50 bags of maize at 3000 per bag" makes. Nothing is bought, paid or delivered from here.
  const SALE_INTENT = /\b(?:i (?:want|need|would like|plan|wish|have) to sell|i'?d like to sell|i'?m (?:going to |gonna |planning to )?sell(?:ing)?|i am (?:going to |planning to )?sell(?:ing)?|let me sell|help me sell|sell my|i have\b.{1,70}\bto sell|put\b.{1,70}\bfor sale|list\b.{1,70}\bfor sale|post\s+(?:my|some|the|a|an|\d+)\b.{0,60}?\bfor sale|advertise\s+(?:my|some|the|a|an|\d+)\b.{0,60}?\bfor sale|(?:can|could|will|would) you (?:help me )?sell|nataka kuuza|ninataka kuuza|nina\b.{1,60}\bya kuuza|nisaidie kuuza|ninauza)\b/i;
  const SALE_NOT = /^\s*(?:how|what|where|when|why|which|who|can you explain|tips|is it|do i|should i)\b|\b(?:sold|selling price|who buys|who wants|price of|market price|cancel|remove|delete)\b|\bnimeuza\b/i;
  const SALE_UNITS = { kilograms: "kg", kilogram: "kg", kilos: "kg", kilo: "kg", kgs: "kg", kg: "kg", bags: "bag", bag: "bag", sacks: "sack", sack: "sack", crates: "crate", crate: "crate", tons: "ton", tonnes: "ton", ton: "ton", tonne: "ton", litres: "litre", liters: "litre", litre: "litre", liter: "litre", bunches: "bunch", bunch: "bunch", pieces: "piece", piece: "piece" };
  const SALE_QTY = /(?:^|\s)(\d[\d,.]*\s*(?:kilograms?|kilos?|kgs?|bags?|sacks?|crates?|tonnes?|tons?|litres?|liters?|bunch(?:es)?|pieces?|goats?|cows?|sheep|chickens?|hens?|eggs?|trays?|heads?|[a-z]{3,12})?)\s+(?:of\s+)?([a-z][a-z -]{1,40}?)(?=\s+(?:at|for|in|to|from)\b|[.,!?]|$)/i;
  // What the first sentence already said: { product, quantity, price, location } (any may be missing). "I want to sell 50 bags of maize at 3000 per bag in Nakuru".
  function parseSale(text) {
    const spoken = clean(text).replace(/[’]/g, "'").replace(/[.!?]+$/, "");
    const out = {};
    const price = spoken.match(/\b(?:at|for|price(?: of)?|@|kwa)\s*(?:ksh|kes|ugx|tzs|ngn|usd|\$)?\s*(\d[\d,.]*(?:\s*(?:per\s*[a-z]+|each|\/\s*[a-z]+|a\s+[a-z]+|kwa\s+[a-z]+))?)/i);
    if (price) out.price = clean(price[1]);
    const place = spoken.match(/\b(?:in|from)\s+((?!\d)[A-Z][A-Za-z' -]{2,30})\s*$/);
    if (place) out.location = clean(place[1]);
    // the item is after "sell" ("I want to sell 50 bags of maize"), before "to sell" ("I have 200 kg of tomatoes to sell") or before "for sale" ("put my potatoes up for sale")
    const before = spoken.match(/\bi have\s+(.+?)\s+to sell\b/i) || spoken.match(/\b(?:put|list)\s+(?:my\s+)?(.+?)\s+(?:up\s+)?for sale\b/i);
    const after = spoken.replace(/^.*?\b(?:sell(?:ing)?|for sale|kuuza|ninauza)\b\s*(?:my|some|the|a|an)?\s*/i, "");
    const tail = (before ? before[1] : after).replace(/\s+(?:at|for|in|from|kwa)\s+(?:ksh|kes|\$)?\s*\d.*$/i, "").replace(/\s+in\s+[A-Z][A-Za-z' -]+$/, "").replace(/^(?:my|some|the)\s+/i, "");
    const qty = SALE_QTY.exec(` ${tail}`);
    if (qty && /\d/.test(qty[1])) { out.quantity = clean(qty[1]); out.product = clean(qty[2]).replace(/^(?:of|my|the)\s+/i, ""); }
    else if (tail && tail.length <= 40 && !/\b(?:to|for)\b/.test(tail)) out.product = clean(tail.replace(/^(?:my|some|the)\s+/i, ""));
    for (const key of Object.keys(out)) if (!out[key]) delete out[key];
    return out;
  }
  function isSaleRequest(text) {
    const value = clean(text).replace(/[’]/g, "'").replace(WAKE_LEAD, "").replace(FILLER_LEAD, "").trim();
    if (!value || value.split(/\s+/).length > 28) return false;
    // "Sell 50 bags of maize", "sell my maize", "sell some tomatoes": said as an order, with no "I want to". (A bare "sell" with nothing after it, or "sell price", is not a request.)
    const imperative = /^(?:please\s+)?sell\s+(?!price|prices|tips|out\b|off\b)\S/i.test(value);
    return (SALE_INTENT.test(value) || imperative) && !SALE_NOT.test(value);
  }
  function saleCommand(values) {
    const product = clean(values.product); const quantity = clean(values.quantity); let price = clean(values.price); const location = clean(values.location);
    const unitWord = (quantity.match(/^\d[\d,.]*\s*([a-z]+)/i) || [])[1] || "";
    const unit = SALE_UNITS[unitWord.toLowerCase()] || (unitWord && !/^(?:of)$/i.test(unitWord) ? unitWord.toLowerCase().replace(/s$/, "") : "");
    // "3000" with "50 bags" means 3000 per bag; a price that already says per/each/for the lot is left as said
    if (/^\d[\d,.]*$/.test(price) && unit) price = `${price} per ${unit}`;
    // "50 bags" + "maize" -> "50 bags of maize"; a bare count + "goats" -> "5 goats"
    const what = quantity ? (/\bof\b/i.test(quantity) || /^\d[\d,.]*$/.test(quantity) ? `${quantity} ${product}` : `${quantity} of ${product}`) : product;
    return `Post for sale: ${what}${price ? ` at ${price}` : ""}${location ? ` in ${location}` : ""}`;
  }
  function saleReadback(values, lang = "en") {
    const what = clean(saleCommand(values).replace(/^Post for sale:\s*/, ""));
    return lang === "sw"
      ? `Nitaweka sokoni: ${what}. Kila mtu katika jamii yako ataiona, bila namba yako ya simu.`
      : `I will post this for sale: ${what}. Everyone in your community can see it, never your phone number.`;
  }
  const SALE_FIELDS = [
    { key: "product", label: "What", question: "What are you selling?", required: true, kind: "text", aliases: ["product", "what", "crop", "bidhaa", "zao"], sw: { label: "Bidhaa", question: "Unauza nini?" } },
    { key: "quantity", label: "How much", question: "How much do you have? For example: 50 bags, or 200 kilograms.", required: true, kind: "text", aliases: ["quantity", "amount", "how much", "kiasi", "idadi"], sw: { label: "Kiasi", question: "Una kiasi gani? Kwa mfano: mifuko 50, au kilo 200." } },
    { key: "price", label: "Price", question: "What price do you want? For example: 3000 per bag.", required: true, kind: "text", aliases: ["price", "bei"], sw: { label: "Bei", question: "Unataka bei gani? Kwa mfano: 3000 kwa mfuko." } },
    { key: "location", label: "Where", question: "Where is it? Say a town, or say 'skip'.", required: false, kind: "place", aliases: ["location", "where", "town", "mji", "mahali"], sw: { label: "Mahali", question: "Iko wapi? Taja mji, au sema 'ruka'." } }
  ];
  const sale = Object.freeze({
    id: "sale",
    title: "Sell on the community board",
    intro: "",
    confirmBeforeSubmit: true,
    confirmTail: { en: "Shall I post it? Say yes, or tell me which part to change.", sw: "Niiweke sasa? Sema ndiyo, au niambie sehemu ya kubadilisha." },
    pausedLine: "Okay, I will wait. Say continue when you are ready, or say cancel to stop.",
    sw: { title: "Uza kwenye ubao wa jamii", intro: "", pausedLine: "Sawa, nitasubiri. Sema endelea ukiwa tayari, au sema ghairi kuacha." },
    fields: SALE_FIELDS,
    readback: saleReadback,
    toCommand: saleCommand,
    parseSale,
    isSaleRequest
  });

  // --- a telehealth visit -------------------------------------------------------------------------
  // "I need telehealth" used to open a long form. Now Kyro asks a few short questions (what the visit is for, when it started, other symptoms, a phone number), reads them back, and after a yes saves them as an
  // intake case for a provider to review. It does not diagnose, book a visit or call anyone. If an answer describes an emergency the interview stops, says what to do and saves nothing; the server checks again.
  // THE EMERGENCY WORDING AND THE DANGER-SIGN LIST NEED A CLINICIAN'S REVIEW before they are relied on.
  const TELE_WORD = /\b(?:telehealth|tele-health|virtual (?:care|visit|appointment|consult\w*)|video (?:visit|consult\w*|appointment)|(?:doctor|nurse|clinician|provider) (?:online|by video|on video|remotely)|online (?:doctor|consult\w*|appointment)|daktari mtandaoni|telehealth intake)\b/i;
  const TELE_INTENT = /\b(?:i need|i want|i'?d like|i would like|can i|could i|help me|start|begin|book|set up|arrange|open|get me|let me|nahitaji|ninahitaji|nataka|ninataka|anza)\b|^(?:telehealth|virtual care)\b/i;
  const TELE_NOT = /^\s*(?:how|what|why|which|when|is|does|do|are|can you explain|tips)\b|\b(?:cost|price|how much|explain|means?)\b/i;
  function isTelehealthRequest(text) {
    const value = clean(text).replace(/[’]/g, "'").replace(WAKE_LEAD, "").replace(FILLER_LEAD, "").trim();
    if (!value || value.split(/\s+/).length > 22) return false;
    return TELE_WORD.test(value) && TELE_INTENT.test(value) && !TELE_NOT.test(value);
  }
  const DANGER_SIGNS = /\b(?:can'?t breathe|cannot breathe|struggling to breathe|trouble breathing|difficulty breathing|not breathing|stopped breathing|short of breath|chest pain|pain in (?:my )?chest|unconscious|passed out|fainted|collapsed|seizures?|convuls\w*|fitting|bleeding (?:heavily|a lot|badly)|heavy bleeding|won'?t stop bleeding|bleeding (?:that )?(?:will not|won'?t) stop|coughing (?:up )?blood|vomiting blood|stiff neck|face (?:is )?drooping|slurred speech|weakness on one side|weak on one side|sudden loss of (?:sight|vision)|poisoned|overdose|snake ?bite|siwezi kupumua|maumivu ya kifua|nimezimia|degedege|damu nyingi|kutokwa na damu nyingi)\b/i;
  const TELE_EMERGENCY = {
    en: "That sounds like it could be an emergency. Please call your local emergency number or go to the nearest clinic now. I have stopped the questions and nothing was saved.",
    sw: "Hiyo inaweza kuwa dharura. Tafadhali piga namba ya dharura ya eneo lako au nenda kliniki iliyo karibu sasa. Nimesimamisha maswali na hakuna kilichohifadhiwa."
  };
  function teleInterrupt(text, context = {}) {
    return DANGER_SIGNS.test(clean(text)) ? { say: TELE_EMERGENCY[context.lang === "sw" ? "sw" : "en"] } : null;
  }
  function teleSummary(values) {
    const parts = [];
    if (values.reason) parts.push(`Reason: ${clean(values.reason)}.`);
    if (values.onset) parts.push(`Started: ${clean(values.onset)}.`);
    if (values.symptoms) parts.push(`Other symptoms: ${clean(values.symptoms)}.`);
    if (values.phone) parts.push(`Phone: ${clean(values.phone)}.`);
    return parts.join(" ").slice(0, 780);
  }
  function teleReadback(values, lang = "en") {
    const sw = lang === "sw";
    const parts = [];
    if (values.reason) parts.push(`${sw ? "Sababu" : "Visit for"}: ${clean(values.reason)}.`);
    if (values.onset) parts.push(`${sw ? "Ilianza" : "Started"}: ${clean(values.onset)}.`);
    if (values.symptoms) parts.push(`${sw ? "Dalili nyingine" : "Other symptoms"}: ${clean(values.symptoms)}.`);
    if (values.phone) parts.push(`${sw ? "Simu" : "Phone"}: ${clean(values.phone)}.`);
    return `${sw ? "Hivi ndivyo nilivyoandika." : "Here is what I have."} ${parts.join(" ")} ${sw ? "Mtoa huduma ataipitia. Si uchunguzi, na hakuna ziara iliyopangwa bado." : "A provider will review it. This is not a diagnosis, and no visit is booked yet."}`;
  }
  const TELE_FIELDS = [
    { key: "reason", label: "Reason", question: "What is the visit for? Tell me in your own words.", required: true, kind: "text", aliases: ["reason", "visit", "sababu"], sw: { label: "Sababu", question: "Ziara hii ni ya nini? Niambie kwa maneno yako mwenyewe." } },
    { key: "onset", label: "When it started", question: "When did it start? For example: two days ago. Or say 'skip'.", required: false, kind: "text", aliases: ["started", "when", "onset", "ilianza", "lini"], sw: { label: "Ilianza", question: "Ilianza lini? Kwa mfano: siku mbili zilizopita. Au sema 'ruka'." } },
    { key: "symptoms", label: "Other symptoms", question: "Any other symptoms? Say them, or say 'skip'.", required: false, kind: "sentences", aliases: ["symptoms", "other", "dalili"], sw: { label: "Dalili nyingine", question: "Kuna dalili nyingine? Zitaje, au sema 'ruka'." } },
    { key: "phone", label: "Phone", question: "What phone number can the provider call? Or say 'skip'.", required: false, kind: "phone", aliases: ["phone", "number", "simu", "namba"], sw: { label: "Simu", question: "Mtoa huduma apige simu kwa namba gani? Au sema 'ruka'." } }
  ];
  const telehealth = Object.freeze({
    id: "telehealth",
    title: "Telehealth request",
    intro: "I will ask a few short questions for a provider. If this is an emergency, call your local emergency number now. You can say repeat, skip, go back, or stop at any time.",
    confirmBeforeSubmit: true,
    confirmTail: { en: "Shall I send it for review? Say yes, or tell me which part to change.", sw: "Niitume ipitiwe? Sema ndiyo, au niambie sehemu ya kubadilisha." },
    pausedLine: "Okay, I will wait. Say continue when you are ready, or say cancel to stop.",
    sw: { title: "Ombi la telehealth", intro: "Nitakuuliza maswali machache mafupi kwa mtoa huduma. Ikiwa ni dharura, piga namba ya dharura sasa. Unaweza kusema rudia, ruka, rudi, au acha wakati wowote.", pausedLine: "Sawa, nitasubiri. Sema endelea ukiwa tayari, au sema ghairi kuacha." },
    fields: TELE_FIELDS,
    readback: teleReadback,
    interrupt: teleInterrupt,
    toSummary: teleSummary,
    isTelehealthRequest
  });

  // --- a brief for a PR or event firm ------------------------------------------------------------
  // "Write me a PR brief": ten short questions (the business, the goal, the audience, the message, the budget, the dates, what has been tried, who decides, languages and accessibility, what is not wanted), read back, and after a yes saved as a Word
  // document the owner can edit and send (nexus/knowledge/pr-brief.js builds it from these answers only, word for word; nothing is added). Kyro does not send it to anyone, choose a firm or contact one. English only for now.
  const PRBRIEF_FIELDS = [
    { key: "business", label: "Business", question: "What is your business called, and what does it do?", required: true, kind: "text", aliases: ["business", "company", "name"] },
    { key: "goal", label: "Goal", question: "What do you want this work to achieve? Say it in one sentence.", required: true, kind: "text", aliases: ["goal", "aim", "purpose"] },
    { key: "audience", label: "Audience", question: "Who do you need to reach? Or say 'skip'.", required: false, kind: "text", aliases: ["audience", "who"] },
    { key: "message", label: "Message", question: "What is the one thing you want them to know? Or say 'skip'.", required: false, kind: "text", aliases: ["message", "key message"] },
    { key: "budget", label: "Budget", question: "What is your budget? A range is fine. Or say 'skip'.", required: false, kind: "text", aliases: ["budget", "money", "price"] },
    { key: "timeline", label: "Dates", question: "Which dates cannot move? For example, the date of an event. Or say 'skip'.", required: false, kind: "text", aliases: ["dates", "timeline", "deadline", "date"] },
    { key: "past", label: "Already tried", question: "What have you already tried, and what worked? Or say 'skip'.", required: false, kind: "sentences", aliases: ["tried", "past", "before", "history"] },
    { key: "approver", label: "Who approves", question: "Who decides, and who approves anything before it goes out? Or say 'skip'.", required: false, kind: "text", aliases: ["approves", "decides", "approval"] },
    { key: "needs", label: "Languages and access", question: "Do you need any languages or accessibility, such as Spanish, sign language or captions? Or say 'skip'.", required: false, kind: "sentences", aliases: ["languages", "accessibility", "needs"] },
    { key: "avoid", label: "Do not want", question: "Is there anything you do not want? Or say 'skip'.", required: false, kind: "sentences", aliases: ["avoid", "not want", "dont want"] }
  ];
  function prBriefReadback(values) {
    const parts = [];
    for (const field of PRBRIEF_FIELDS) if (clean(values[field.key])) parts.push(`${field.label}: ${clean(values[field.key])}.`);
    return `Here is what I have. ${parts.join(" ")}`;
  }
  function prBriefToRequest(values) {
    const request = {};
    for (const field of PRBRIEF_FIELDS) if (clean(values[field.key])) request[field.key] = clean(values[field.key]);
    return request;
  }
  const prBrief = Object.freeze({
    id: "pr-brief",
    title: "Your PR and events brief",
    intro: "I will ask you ten short questions, one at a time, for a brief you can give to a PR or event firm. You can say repeat, skip, go back, or stop at any time.",
    confirmBeforeSubmit: true,
    confirmTail: { en: "Shall I save it as a document you can edit and send? Say yes, or tell me which part to change.", sw: "Niihifadhi kama hati unayoweza kuihariri na kuituma? Sema ndiyo, au niambie sehemu ya kubadilisha." },
    pausedLine: "Okay, I will wait. Say continue when you are ready, or say cancel to stop the brief.",
    fields: PRBRIEF_FIELDS,
    readback: prBriefReadback,
    toRequest: prBriefToRequest
  });

  // --- a one-page business plan -------------------------------------------------------------------
  // "Write my business plan", "help me write a business plan": ten short questions (the SBA's lean plan: what the business is, customers, why they choose you, how they find you, how you keep them, how you earn, what you do, what you need,
  // who helps, what it costs), read back, and after a yes saved as a Word document with the owner's own words under the SBA's lean-plan headings (nexus/knowledge/business-plan-doc.js). A request for a "template" or an "outline" is still the
  // blank template, and a question ("how do I write a business plan?") is still the guide's.
  const BP_ORDER = /\b(?:write|make|create|draft|prepare|build|start|put together|give me|get me|i need|i want|i'd like|i would like|help me|let's|can you|could you|would you)\b/i;
  const BP_NOT = /\b(?:template|outline|blank|example|sample|format|pdf|checklist|lean|traditional)\b|^\s*(?:how|what|why|which|when|should|is|are|does|do)\b/i;
  function isBusinessPlanRequest(text) {
    const value = clean(text).replace(/[’]/g, "'").replace(WAKE_LEAD, "").replace(FILLER_LEAD, "").trim();
    if (!value || value.length > 160) return false;
    if (!/\bbusiness plan\b/i.test(value) || BP_NOT.test(value)) return false;
    return BP_ORDER.test(value);
  }
  const BP_FIELDS = [
    { key: "business", label: "Business", question: "What is your business called, and what does it do?", required: true, kind: "text", aliases: ["business", "company", "name"] },
    { key: "customers", label: "Customers", question: "Who are your customers?", required: true, kind: "sentences", aliases: ["customers", "clients", "buyers"] },
    { key: "value", label: "Why they choose you", question: "Why do customers choose you instead of someone else? Or say 'skip'.", required: false, kind: "sentences", aliases: ["why", "choose", "advantage"] },
    { key: "channels", label: "How they find you", question: "How do customers find you and buy from you? Or say 'skip'.", required: false, kind: "sentences", aliases: ["find", "channels", "sell"] },
    { key: "relationships", label: "Keeping customers", question: "How do you keep customers coming back? Or say 'skip'.", required: false, kind: "sentences", aliases: ["keep", "relationships", "loyalty"] },
    { key: "revenue", label: "How you earn", question: "How does your business earn money? For example, what you sell and for how much. Or say 'skip'.", required: false, kind: "sentences", aliases: ["earn", "money", "revenue", "income"] },
    { key: "activities", label: "What you do", question: "What are the main things you do every week to run it? Or say 'skip'.", required: false, kind: "sentences", aliases: ["activities", "do", "work"] },
    { key: "resources", label: "What you need", question: "What do you need to run it? For example, tools, a place, people or money. Or say 'skip'.", required: false, kind: "sentences", aliases: ["need", "resources", "tools"] },
    { key: "partners", label: "Who helps you", question: "Who helps you? For example, suppliers or partners. Or say 'skip'.", required: false, kind: "sentences", aliases: ["helps", "partners", "suppliers"] },
    { key: "costs", label: "Biggest costs", question: "What are your biggest costs? Or say 'skip'.", required: false, kind: "sentences", aliases: ["costs", "expenses", "spend"] }
  ];
  function bpReadback(values) {
    const parts = [];
    for (const field of BP_FIELDS) if (clean(values[field.key])) parts.push(`${field.label}: ${clean(values[field.key])}.`);
    return `Here is what I have. ${parts.join(" ")}`;
  }
  function bpToRequest(values) {
    const request = {};
    for (const field of BP_FIELDS) if (clean(values[field.key])) request[field.key] = clean(values[field.key]);
    return request;
  }
  const businessPlan = Object.freeze({
    id: "business-plan",
    title: "Your business plan",
    intro: "I will ask you ten short questions, one at a time, for a one-page business plan. You can say repeat, skip, go back, or stop at any time.",
    confirmBeforeSubmit: true,
    confirmTail: { en: "Shall I save it as a document you can edit and show to others? Say yes, or tell me which part to change.", sw: "Niihifadhi kama hati unayoweza kuihariri na kuwaonyesha wengine? Sema ndiyo, au niambie sehemu ya kubadilisha." },
    pausedLine: "Okay, I will wait. Say continue when you are ready, or say cancel to stop the business plan.",
    fields: BP_FIELDS,
    readback: bpReadback,
    toRequest: bpToRequest,
    isBusinessPlanRequest
  });

  // --- an athlete's sponsorship proposal and a team or club packet --------------------------------------
  // "Write my sponsorship proposal", "help me build a team registration packet": ten short questions each, read back, and after a yes saved as a Word document with the person's own words under plain headings
  // (nexus/knowledge/athlete-docs.js builds it from these answers only, word for word; no number, result or promise is added). Kyro sends it to no sponsor, league or family and collects no money. A question ("how do I write a
  // sponsorship proposal?"), a "template", an "example" or an "outline" is still the athlete guide's. English only for now.
  const ATHLETE_DOC_ORDER = /\b(?:write|make|create|draft|prepare|build|start|put together|set up|give me|get me|i need|i want|i'd like|i would like|help me|let's|can you|could you|would you)\b/i;
  const ATHLETE_DOC_NOT = /\b(?:template|outline|blank|example|sample|format|pdf|checklist|samples)\b|^\s*(?:how|what|why|which|when|should|is|are|does|do)\b/i;
  function athleteDocRequest(text, subject) {
    const value = clean(text).replace(/[’]/g, "'").replace(WAKE_LEAD, "").replace(FILLER_LEAD, "").trim();
    if (!value || value.length > 160) return false;
    if (ATHLETE_DOC_NOT.test(value) || !ATHLETE_DOC_ORDER.test(value)) return false;
    return subject.test(value);
  }
  const SPONSOR_SUBJECT = /\bsponsor(?:ship)?s?\b.{0,20}\b(?:proposals?|pitch(?:es)?|letters?|packages?|packets?|decks?)\b|\b(?:proposals?|pitch(?:es)?|letters?|packages?|packets?|decks?)\b.{0,20}\bsponsor(?:ship)?s?\b/i;
  const TEAM_SUBJECT = /\b(?:team|club|league|squad)\b.{0,25}\b(?:registration|sign[- ]?up|roster|packets?|fee sheet|information sheet|parent packet|handbook)\b|\b(?:registration|sign[- ]?up|roster|fee sheet|parent packet|information sheet|handbook)\b.{0,25}\b(?:team|club|league|squad)\b|\b(?:team|club|parent|player) (?:registration )?packet\b/i;
  function isSponsorshipProposalRequest(text) { return athleteDocRequest(text, SPONSOR_SUBJECT); }
  function isTeamPacketRequest(text) { return athleteDocRequest(text, TEAM_SUBJECT); }
  function joined(value) { return Array.isArray(value) ? value.map(clean).filter(Boolean).join("; ") : clean(value); }
  function readbackOf(fields) {
    return values => {
      const parts = [];
      for (const field of fields) if (joined(values[field.key])) parts.push(`${field.label}: ${joined(values[field.key])}.`);
      return `Here is what I have. ${parts.join(" ")}`;
    };
  }
  function requestOf(fields) {
    return values => {
      const request = {};
      for (const field of fields) {
        const value = values[field.key];
        if (Array.isArray(value)) { const items = value.map(clean).filter(Boolean); if (items.length) request[field.key] = items; }
        else if (clean(value)) request[field.key] = clean(value);
      }
      return request;
    };
  }
  const SPONSOR_FIELDS = [
    { key: "athlete", label: "Athlete", question: "Who is the proposal for? Say your name, your sport, and your level or team.", required: true, kind: "text", aliases: ["athlete", "name", "who"] },
    { key: "ask", label: "The ask", question: "What are you asking a sponsor for? Money, gear, travel or something else, and how much if you know.", required: true, kind: "sentences", aliases: ["ask", "asking", "need", "want"] },
    { key: "story", label: "Your story", question: "In a few sentences, what is your story? Or say 'skip'.", required: false, kind: "sentences", aliases: ["story", "about", "background"] },
    { key: "results", label: "Results", question: "What results or milestones are you proudest of? Or say 'skip'.", required: false, kind: "sentences", aliases: ["results", "wins", "milestones", "achievements"] },
    { key: "audience", label: "Who follows you", question: "Who follows and supports you? Give numbers only if you know them. Or say 'skip'.", required: false, kind: "sentences", aliases: ["audience", "followers", "fans", "supporters"] },
    { key: "use", label: "What it pays for", question: "What would the support pay for? Or say 'skip'.", required: false, kind: "sentences", aliases: ["pay", "use", "spend", "costs"] },
    { key: "offer", label: "What you offer", question: "What can you give a sponsor in return? For example, a logo on your kit, posts, appearances or a clinic. Or say 'skip'.", required: false, kind: "sentences", aliases: ["offer", "return", "give"] },
    { key: "levels", label: "Levels", question: "Do you have sponsor levels, for example a small, medium and large amount? Or say 'skip'.", required: false, kind: "sentences", aliases: ["levels", "packages", "tiers"] },
    { key: "contact", label: "How to reach you", question: "How should a sponsor reach you? Or say 'skip'.", required: false, kind: "text", aliases: ["contact", "reach", "phone", "email"] },
    { key: "timeline", label: "Dates", question: "Which dates matter, such as your season, and when do you need an answer? Or say 'skip'.", required: false, kind: "text", aliases: ["dates", "timeline", "season", "deadline"] }
  ];
  const sponsorshipProposal = Object.freeze({
    id: "sponsorship-proposal",
    title: "Your sponsorship proposal",
    intro: "I will ask you ten short questions, one at a time, for a sponsorship proposal. You can say repeat, skip, go back, or stop at any time.",
    confirmBeforeSubmit: true,
    confirmTail: { en: "Shall I save it as a document you can edit and send? Say yes, or tell me which part to change.", sw: "Niihifadhi kama hati unayoweza kuihariri na kuituma? Sema ndiyo, au niambie sehemu ya kubadilisha." },
    pausedLine: "Okay, I will wait. Say continue when you are ready, or say cancel to stop the proposal.",
    fields: SPONSOR_FIELDS,
    readback: readbackOf(SPONSOR_FIELDS),
    toRequest: requestOf(SPONSOR_FIELDS),
    isSponsorshipProposalRequest
  });
  const TEAM_FIELDS = [
    { key: "team", label: "Team", question: "What is your team or club called, and which sport and age group?", required: true, kind: "text", aliases: ["team", "club", "name"] },
    { key: "season", label: "Season", question: "Which season or dates does this cover? Or say 'skip'.", required: false, kind: "text", aliases: ["season", "dates", "year"] },
    { key: "leader", label: "Who is in charge", question: "Who is in charge, and how can families reach them? Or say 'skip'.", required: false, kind: "text", aliases: ["leader", "coach", "manager", "contact"] },
    { key: "staff", label: "Coaches and volunteers", question: "Who are the coaches and volunteers? Or say 'skip'.", required: false, kind: "sentences", aliases: ["coaches", "staff", "volunteers", "assistants"] },
    {
      key: "roster", label: "Players", question: "Say the names of your players. You can say 'skip' and add them later.", required: false, kind: "sentences", aliases: ["roster", "players", "team list", "names"],
      repeatable: { moreQuestion: "Any more players? Or say that's all.", max: 8 }
    },
    { key: "schedule", label: "Practices and games", question: "Where and when do you practise and play? Or say 'skip'.", required: false, kind: "sentences", aliases: ["practice", "schedule", "games", "times"] },
    { key: "registration", label: "Registration", question: "How do families register, and by what date? Or say 'skip'.", required: false, kind: "sentences", aliases: ["registration", "register", "sign up"] },
    { key: "fees", label: "Fees", question: "What does it cost, and when is it due? Or say 'skip'.", required: false, kind: "sentences", aliases: ["fees", "cost", "price", "dues"] },
    { key: "travel", label: "Trips", question: "Do you have trips or tournaments? Say where, when, and how you will travel and stay. Or say 'skip'.", required: false, kind: "sentences", aliases: ["travel", "trips", "tournaments", "away"] },
    { key: "forms", label: "Forms", question: "Which forms must families sign, such as a waiver or a medical form? Or say 'skip'.", required: false, kind: "sentences", aliases: ["forms", "waiver", "medical", "permission"] }
  ];
  const teamPacket = Object.freeze({
    id: "team-packet",
    title: "Your team packet",
    intro: "I will ask you ten short questions, one at a time, for a team packet you can give to families. You can say repeat, skip, go back, or stop at any time.",
    confirmBeforeSubmit: true,
    confirmTail: { en: "Shall I save it as a document you can edit and hand out? Say yes, or tell me which part to change.", sw: "Niihifadhi kama hati unayoweza kuihariri na kuigawa? Sema ndiyo, au niambie sehemu ya kubadilisha." },
    pausedLine: "Okay, I will wait. Say continue when you are ready, or say cancel to stop the packet.",
    fields: TEAM_FIELDS,
    readback: readbackOf(TEAM_FIELDS),
    toRequest: requestOf(TEAM_FIELDS),
    isTeamPacketRequest
  });

  // --- a person's 90-day money plan, and a plan for a community financial education program ----------------------
  // "Help me make a money plan", "build me a budget": ten short questions (the first problem, how income works, what matters most, what help is needed to take part, regular bills, take-home pay, debts, savings, a workplace plan, one thing this
  // week), read back, and after a yes saved as a Word document (nexus/knowledge/money-docs.js builds it from these answers only, word for word, with the steps for the first 90 days from the official pages the money guide cites). "Help me plan a
  // financial education program" asks ten questions of an organizer (the people served, what they need first, how to teach, partners, services, cost, funding, measures) for a program plan. A question ("how do I make a budget?"), a template or an
  // example is still the money guide's. Neither interview takes an account number, a PIN, a password or a Social Security number: such an answer is refused and the question asked again, and what was said is not kept. English only for now.
  const SECRET_TALK = /\b(?:passwords?|passcodes?|pin(?: number| code)?|account numbers?|routing numbers?|card numbers?|cvv|security code|social security (?:number)?|ssn|one[- ]time (?:code|passcode)|otp)\b|\b\d{9,}\b|\b(?:\d{4}[ -]){2,}\d{2,4}\b|(?:\b(?:zero|oh|one|two|three|four|five|six|seven|eight|nine)\b[\s,-]*){8,}/i;
  function normalizeMoneyText(raw) {
    const value = clean(raw);
    if (!value) return { ok: false, reason: "empty" };
    if (SECRET_TALK.test(value)) return { ok: false, reason: "secret" };
    return { ok: true, value: value.replace(/^\p{Ll}/u, letter => letter.toUpperCase()) };
  }
  const MONEY_RETRY = "Please say that again in your own words, without any account numbers, PINs, passwords or Social Security number, or say skip.";
  const MONEY_ORDER = /\b(?:make|create|draft|write|prepare|build|put together|set up|give me|get me|i need|i want|i'd like|i would like|help me|let's|can you|could you|would you)\b/i;
  const MONEY_NOT = /\b(?:template|worksheet|example|sample|blank|outline|format|pdf|checklist|calculator|app|spreadsheet)\b|^\s*(?:how|what|why|which|when|should|is|are|does|do)\b|\b(?:business|company|shop|store|farm|nonprofit|non-profit|church|organi[sz]ation|team|club)\b|\d/i;
  const MONEY_PLAN_SUBJECT = /\b(?:money plan|financial plan|spending plan|savings plan|debt plan|budget|90[- ]day (?:money |financial |action )?plan|plan for my (?:money|finances))\b/i;
  function isMoneyPlanRequest(text) {
    const value = clean(text).replace(/[’]/g, "'").replace(WAKE_LEAD, "").replace(FILLER_LEAD, "").trim();
    if (!value || value.length > 160) return false;
    // ("90 day" is the plan's own length; any other number in the sentence is an amount, which is a record and not an order for a plan)
    return !MONEY_NOT.test(value.replace(/\b90[- ]day\b/gi, "ninety day")) && MONEY_ORDER.test(value) && MONEY_PLAN_SUBJECT.test(value);
  }
  const PROGRAM_ORDER = /\b(?:plan|planning|design|launch|start|starting|run|running|organi[sz]e|set up|setting up|create|build|develop|write|draft|prepare|help me|i want to|we want to|i need to|we need to|can you help|could you help)\b/i;
  const PROGRAM_NOT = /\b(?:template|worksheet|example|sample|blank|outline|pdf|checklist)\b|^\s*(?:how|what|why|which|when|should|is|are|does|do)\b|\d/i;
  const PROGRAM_SUBJECT = /\b(?:financial (?:education|literacy)|money (?:management|education)|financial coaching)\b.{0,25}\b(?:programs?|classes|class|workshops?|courses?|series|curriculum)\b|\b(?:programs?|classes|class|workshops?)\b.{0,25}\b(?:on|about|for)\b.{0,15}\b(?:financial (?:education|literacy)|money management|managing money)\b|\bcommunity financial education\b/i;
  function isProgramKitRequest(text) {
    const value = clean(text).replace(/[’]/g, "'").replace(WAKE_LEAD, "").replace(FILLER_LEAD, "").trim();
    if (!value || value.length > 200) return false;
    return !PROGRAM_NOT.test(value) && PROGRAM_ORDER.test(value) && PROGRAM_SUBJECT.test(value);
  }
  const money = (key, label, question, kind, aliases, required = false) => ({ key, label, question, required, kind, aliases, normalize: normalizeMoneyText, retryPrompt: MONEY_RETRY });
  const MONEYPLAN_FIELDS = [
    money("problem", "First problem", "What money problem do you want help with first? Say it in your own words.", "sentences", ["problem", "help", "first"], true),
    money("income", "Income", "Is your income steady, seasonal, or unpredictable? Tell me a little about it. Or say 'skip'.", "sentences", ["income", "pay", "work"]),
    money("priority", "What matters most", "What matters most right now: paying down debt, emergency savings, buying a home, retirement, or investing for your children?", "sentences", ["priority", "matters", "most"], true),
    money("supports", "Help to take part", "What would help you take part: a language, class times, transportation, childcare, or help with technology? Or say 'skip'.", "sentences", ["language", "childcare", "transport", "technology", "support"]),
    money("bills", "Regular bills", "What are your regular bills, and when are they due? Say them in your own words. Or say 'skip'.", "sentences", ["bills", "due", "rent"]),
    money("takehome", "Take-home pay", "About how much do you take home in a typical month? A range is fine. Or say 'skip'.", "text", ["take home", "pay", "income", "monthly"]),
    money("debts", "Debts", "Do you have any debts? Say what kind, about how much you owe, and the interest rate if you know it. Or say 'skip'.", "sentences", ["debts", "owe", "loans", "credit cards"]),
    money("savings", "Savings", "Do you have any savings now, and what is your first savings goal? Or say 'skip'.", "sentences", ["savings", "goal", "save"]),
    money("workplan", "Workplace plan", "Does your job offer a retirement plan or a match? Or say 'skip'.", "sentences", ["retirement", "match", "401", "plan"]),
    money("week", "This week", "What is one thing you can do this week? Or say 'skip'.", "sentences", ["week", "first step", "action"])
  ];
  const PROGRAM_FIELDS = [
    money("organization", "Organization", "Tell me about your organization and who you will serve.", "sentences", ["organization", "who", "serve"], true),
    money("priorities", "What they need first", "What do the people you serve most want help with first? For example bills, savings, debt, a home, retirement, or investing for their children.", "sentences", ["priorities", "need", "first", "help"], true),
    money("needs", "Needs to take part", "What languages, class times, transportation, childcare or technology help do they need? Or say 'skip'.", "sentences", ["languages", "childcare", "transport", "technology", "times"]),
    money("format", "How you will teach", "Will you teach classes, give one-to-one coaching, or both? How often, and for how many people to start? Or say 'skip'.", "sentences", ["classes", "coaching", "format", "often"]),
    money("educators", "Who teaches", "Who will teach, and who will give one-to-one coaching? Or say 'skip'.", "sentences", ["teach", "educator", "coach", "instructor"]),
    money("partners", "Partners", "Which partners will you work with, such as libraries, churches, workforce programs, unions, schools or neighborhood groups? Or say 'skip'.", "sentences", ["partners", "libraries", "churches", "schools"]),
    money("services", "Affordable services", "Which affordable services will you connect people to, such as bank accounts, tax preparation, benefits help or employment services? Or say 'skip'.", "sentences", ["services", "accounts", "tax", "benefits"]),
    money("budget", "Cost", "What will it cost: instructor time, coordination, translation, materials, childcare, transportation, food and follow-up coaching? Say what you know. Or say 'skip'.", "sentences", ["cost", "budget", "expenses"]),
    money("funding", "Funding", "How will you pay for it, and will you offer small savings incentives? Or say 'skip'.", "sentences", ["funding", "grants", "pay", "incentives"]),
    money("measures", "How you will know", "How will you know it worked? For example, people who make a spending plan, start saving or reduce costly debt. Or say 'skip'.", "sentences", ["measures", "results", "worked", "progress"])
  ];
  const moneyPlan = Object.freeze({
    id: "money-plan",
    title: "Your 90-day money plan",
    intro: "I will ask you ten short questions, one at a time, to build a plan for the next 90 days. Please do not tell me account numbers, PINs, passwords or your Social Security number. You can say repeat, skip, go back, or stop at any time.",
    confirmBeforeSubmit: true,
    confirmTail: { en: "Shall I save it as a document you can edit and keep? Say yes, or tell me which part to change.", sw: "Niihifadhi kama hati unayoweza kuihariri na kuiweka? Sema ndiyo, au niambie sehemu ya kubadilisha." },
    pausedLine: "Okay, I will wait. Say continue when you are ready, or say cancel to stop the money plan.",
    fields: MONEYPLAN_FIELDS,
    readback: readbackOf(MONEYPLAN_FIELDS),
    toRequest: requestOf(MONEYPLAN_FIELDS),
    isMoneyPlanRequest
  });
  const programKit = Object.freeze({
    id: "program-kit",
    title: "Your financial education program plan",
    intro: "I will ask you ten short questions, one at a time, for a plan for a community financial education program. Please do not tell me account numbers, PINs or passwords. You can say repeat, skip, go back, or stop at any time.",
    confirmBeforeSubmit: true,
    confirmTail: { en: "Shall I save it as a document you can edit and share? Say yes, or tell me which part to change.", sw: "Niihifadhi kama hati unayoweza kuihariri na kushiriki? Sema ndiyo, au niambie sehemu ya kubadilisha." },
    pausedLine: "Okay, I will wait. Say continue when you are ready, or say cancel to stop the program plan.",
    fields: PROGRAM_FIELDS,
    readback: readbackOf(PROGRAM_FIELDS),
    toRequest: requestOf(PROGRAM_FIELDS),
    isProgramKitRequest
  });

  const resume = Object.freeze({
    id: "resume",
    title: "Your résumé",
    intro: "I will ask you a few short questions, one at a time. You can say repeat, skip, go back, or stop at any time.",
    confirmBeforeSubmit: true,
    pausedLine: "Okay, I will wait. Say continue when you are ready, or say cancel to stop the résumé.",
    sw: {
      title: "CV yako",
      intro: "Nitakuuliza maswali machache mafupi, moja baada ya jingine. Unaweza kusema rudia, ruka, rudi, au acha wakati wowote.",
      pausedLine: "Sawa, nitasubiri. Sema endelea ukiwa tayari, au sema ghairi kuacha CV."
    },
    fields: RESUME_FIELDS,
    validate: resumeValidate,
    readback: resumeReadback,
    toRequest: resumeToRequest,
    isResumeBuildRequest,
    isContinueRequest: isResumeContinueRequest
  });

  return Object.freeze({ resume, sale, telehealth, prBrief, businessPlan, sponsorshipProposal, teamPacket, moneyPlan, programKit, isMoneyPlanRequest, isProgramKitRequest, isSponsorshipProposalRequest, isTeamPacketRequest, isBusinessPlanRequest, isTelehealthRequest, isSaleRequest, parseSale, isResumeBuildRequest, isResumeContinueRequest: isResumeContinueRequest, isResumeDownloadRequest });
});
