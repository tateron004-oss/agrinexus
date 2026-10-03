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
  const RESUME_FIELDS = [
    { key: "name", label: "Name", question: "What is your full name?", required: true, kind: "name", aliases: ["name"] },
    { key: "location", label: "Town", question: "Which town or village do you live in? You can say 'skip'.", required: false, kind: "text", aliases: ["location", "town"] },
    {
      key: "experience", label: "Work experience",
      question: "Tell me about work you have done. For example: 'I grew maize for five years.'",
      required: false, kind: "sentences", aliases: ["experience", "work"],
      repeatable: { moreQuestion: "Any other work you have done? Or say that's all.", max: 5 }
    },
    { key: "skills", label: "Skills", question: "What are you good at? For example: farming, driving, cooking.", required: false, kind: "list", aliases: ["skills"] },
    { key: "education", label: "Education", question: "Did you go to school or do any training? Tell me what, or say 'skip'.", required: false, kind: "sentences", aliases: ["education", "schooling", "training"] },
    { key: "languages", label: "Languages", question: "Which languages do you speak?", required: false, kind: "list", aliases: ["languages"] },
    { key: "phone", label: "Phone", question: "What phone number should an employer call? Or say 'skip'.", required: false, kind: "phone", aliases: ["phone", "number"] },
    { key: "email", label: "Email", question: "Do you have an email address? Say it, or say 'skip'.", required: false, kind: "email", aliases: ["email"] }
  ];

  function resumeValidate(values) {
    const hasContent = clean(values.skills) || (Array.isArray(values.experience) && values.experience.length) || clean(values.education);
    if (hasContent) return null;
    return {
      fieldKey: "experience",
      message: "I need at least one thing for your résumé: work you have done, what you are good at, or your schooling."
    };
  }

  function resumeReadback(values) {
    const parts = [];
    if (values.name) parts.push(`Name: ${values.name}.`);
    if (values.location) parts.push(`Town: ${values.location}.`);
    if (Array.isArray(values.experience) && values.experience.length) parts.push(`Work: ${values.experience.join("; ")}.`);
    if (values.skills) parts.push(`Skills: ${values.skills}.`);
    if (values.education) parts.push(`Education: ${values.education}.`);
    if (values.languages) parts.push(`Languages: ${values.languages}.`);
    if (values.phone) parts.push(`Phone: ${values.phone}.`);
    if (values.email) parts.push(`Email: ${values.email}.`);
    return `Here is what I have. ${parts.join(" ")}`;
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

  function isResumeBuildRequest(text) {
    const value = clean(text);
    if (!value) return false;
    if (RESUME_QUESTION.test(value)) return false;
    if (RESUME_AS_VERB.test(value)) return false;
    return RESUME_VERB_REQUEST.test(value);
  }

  const RESUME_CONTINUE = /^\s*(?:continue|back to|keep going with|resume)\s+(?:my |the )?(?:r[ée]sum[ée]|cv)\b/i;
  function isResumeContinueRequest(text) {
    return RESUME_CONTINUE.test(clean(text));
  }

  const resume = Object.freeze({
    id: "resume",
    title: "Your résumé",
    intro: "I will ask you a few short questions, one at a time. You can say repeat, skip, go back, or stop at any time.",
    confirmBeforeSubmit: true,
    fields: RESUME_FIELDS,
    validate: resumeValidate,
    readback: resumeReadback,
    toRequest: resumeToRequest,
    isResumeBuildRequest,
    isContinueRequest: isResumeContinueRequest
  });

  return Object.freeze({ resume, isResumeBuildRequest, isResumeContinueRequest: isResumeContinueRequest });
});
