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
  const RESUME_VERB_REQUEST = /^\s*(?:(?:please|kyro|nexus|can you|could you|would you)[, ]+)*(?:make|create|build|write|prepare|draft|generate|give me|i need|need|i want|want|help me (?:make|create|write|with))\b[^.?!]{0,40}(?:resume|r[ée]sum[ée]|cv|curriculum vitae)/i;
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

  return Object.freeze({ resume, isResumeBuildRequest, isResumeContinueRequest: isResumeContinueRequest, isResumeDownloadRequest });
});
