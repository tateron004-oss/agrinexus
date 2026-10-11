// Kyro answer card: the answer-first screen for a task that used to open a long form. Asking for work shows ONE clean full-screen card -- what Kyro can really do right now, in a few
// plain words, with big choices that can also be said -- instead of a form with a dozen fields and buttons. It is a task like any other: the task stage hides everything else, one close
// mark returns to the orb, and a quiet spell clears it (see kyroReturnToOrb and kyro-task-stage.js).
//
//   workSpec({ roles, lang }) -> { id, title, lines, choices: [{ id, label, say }] }      (pure; no DOM)
//   show(doc, spec, { onChoose, onClose }) -> element                                      (adds section[data-kyro-answer-card]; replaces any card already shown)
//   remove(doc) -> boolean
//
// Honest by design: Kyro cannot search live job listings, so the card says so and offers what it can really do (make a CV, practise an interview, learn to read or count). The roles named
// are only the short list loaded on the platform, said as that, never as vacancies.
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.KyroAnswerCard = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const TEXT = {
    en: {
      title: "Work",
      noSearch: "I can't search live job listings, so I won't guess what is open near you.",
      roles: roles => `Roles loaded on Kyro: ${roles.join(", ")}.`,
      cv: "Make my CV", interview: "Practise a job interview", letters: "Learn to read or count",
      cvSay: "Make my CV", interviewSay: "Give me a practice interview", lettersSay: "Teach me letters",
      learnTitle: "Learn",
      learnLine: "I teach short practice lessons by voice, one small step at a time. They are not certified courses, and nothing is enrolled or certified.",
      learnLetters: "Learn the letters", learnLettersSay: "Teach me letters",
      learnMaths: "Learn numbers and adding", learnMathsSay: "Teach me maths",
      learnAi: "AI basics for small business", learnAiSay: "Start the AI basics course",
      healthTitle: "Health",
      healthLine: "I record what you tell me and help you get ready for a visit. I do not diagnose or give treatment advice.",
      healthSay: "To save a reading, just say it, for example: my blood pressure is 120 over 80.",
      healthEmergency: "In an emergency, call your local emergency number now.",
      healthReadings: "My readings", healthReadingsSay: "Show my blood pressure readings",
      healthSummary: "Summary for my provider", healthSummarySay: "Prepare a provider summary of my readings",
      healthClinic: "Find a clinic", healthClinicSay: "Find a clinic near me", healthClinicWait: "Looking for clinics near you.",
      healthPharmacy: "Find a pharmacy", healthPharmacySay: "Find a pharmacy near me", healthPharmacyWait: "Looking for pharmacies near you.",
      healthNumber: "Emergency number", healthNumberSay: "What is the emergency number?",
      farmTitle: "Farm",
      farmLine: "I keep your farm records and give general crop guidance. I do not name a spray or a dose.",
      farmSay: "To log something, just say it, for example: it rained 12 mm, or I harvested 50 kg of maize.",
      farmProblem: "For a crop problem, tell me what you see.",
      farmLog: "My farm log", farmLogSay: "Show my farm log",
      farmRain: "Rain this month", farmRainSay: "How much rain did I get this month?",
      farmMonth: "This month's money", farmMonthSay: "Give me my summary for this month",
      close: "Close"
    },
    sw: {
      title: "Kazi",
      noSearch: "Siwezi kutafuta orodha za kazi za moja kwa moja, kwa hivyo sitakisia ni zipi zipo karibu nawe.",
      roles: roles => `Kazi zilizopakiwa kwenye Kyro: ${roles.join(", ")}.`,
      cv: "Tengeneza CV yangu", interview: "Fanya mazoezi ya mahojiano", letters: "Jifunze kusoma au kuhesabu",
      cvSay: "Nataka CV", interviewSay: "Nipe mazoezi ya mahojiano", lettersSay: "Nifundishe herufi",
      learnTitle: "Jifunze",
      learnLine: "Ninafundisha masomo mafupi ya mazoezi kwa sauti, hatua ndogo moja baada ya nyingine. Si kozi zenye cheti, na hakuna anayeandikishwa wala kupewa cheti.",
      learnLetters: "Jifunze herufi", learnLettersSay: "Nifundishe herufi",
      learnMaths: "Jifunze namba na kujumlisha", learnMathsSay: "Nifundishe hesabu",
      healthTitle: "Afya",
      healthLine: "Ninarekodi unachoniambia na kukusaidia kujiandaa kwa ziara ya daktari. Sifanyi uchunguzi wala kutoa ushauri wa matibabu.",
      healthSay: "Kuhifadhi kipimo, kitaje tu, kwa mfano: shinikizo langu la damu ni 120 juu ya 80.",
      healthEmergency: "Dharura ikitokea, piga namba ya dharura ya eneo lako sasa.",
      healthReadings: "Vipimo vyangu", healthReadingsSay: "Onyesha vipimo vyangu vya shinikizo la damu",
      healthClinic: "Tafuta kliniki", healthClinicSay: "Tafuta kliniki karibu nami", healthClinicWait: "Natafuta kliniki karibu nawe.",
      healthNumber: "Namba ya dharura", healthNumberSay: "Nambari ya dharura ni ipi?",
      farmTitle: "Shamba",
      farmLine: "Ninatunza kumbukumbu za shamba lako na kutoa mwongozo wa jumla kuhusu mazao. Sitaji dawa wala kipimo.",
      farmSay: "Kuandika kitu, kisema tu, kwa mfano: nimepata mvua milimita 12, au nimevuna kilo 50 za mahindi.",
      farmProblem: "Kwa tatizo la zao, niambie unachokiona.",
      farmMonth: "Pesa za mwezi huu", farmMonthSay: "muhtasari wa mwezi",
      close: "Funga"
    }
  };

  function workSpec({ roles, lang } = {}) {
    const t = TEXT[lang === "sw" ? "sw" : "en"];
    const titles = Array.from(new Set((Array.isArray(roles) ? roles : []).map(role => String(typeof role === "string" ? role : (role && role.title) || "").trim()).filter(Boolean))).slice(0, 6);
    return {
      id: "work", title: t.title, closeLabel: t.close,
      lines: [t.noSearch].concat(titles.length ? [t.roles(titles)] : []),
      choices: [
        { id: "cv", label: t.cv, say: t.cvSay },
        { id: "interview", label: t.interview, say: t.interviewSay },
        { id: "letters", label: t.letters, say: t.lettersSay }
      ]
    };
  }

  // Learn: the short practice lessons Kyro really has (letters; counting, adding and taking away) and the AI basics course for a small business (English only for now).
  function learnSpec({ lang } = {}) {
    const sw = lang === "sw";
    const t = TEXT[sw ? "sw" : "en"];
    const choices = [
      { id: "letters", label: t.learnLetters, say: t.learnLettersSay },
      { id: "maths", label: t.learnMaths, say: t.learnMathsSay }
    ];
    if (!sw) choices.push({ id: "ai-basics", label: t.learnAi, say: t.learnAiSay });
    return { id: "learning", title: t.learnTitle, closeLabel: t.close, lines: [t.learnLine], choices };
  }

  // Health: what Kyro really does (records readings after a yes, shows them, prepares a summary for a provider, finds a clinic or pharmacy, says the local emergency number) and what it does not
  // (diagnose, advise on treatment). Each choice names the route that answers it: `tool` is the voice tool that holds the answer (readings and the emergency number are on the everyday route).
  function healthSpec({ lang } = {}) {
    const sw = lang === "sw";
    const t = TEXT[sw ? "sw" : "en"];
    const choices = [{ id: "readings", label: t.healthReadings, say: t.healthReadingsSay, tool: "nexus_everyday_records" }];
    if (!sw) choices.push({ id: "summary", label: t.healthSummary, say: t.healthSummarySay, tool: "nexus_health_preparation" });
    // (a clinic or pharmacy search is a live map lookup that takes several seconds: a short spoken "looking" says it has started)
    choices.push({ id: "clinic", label: t.healthClinic, say: t.healthClinicSay, tool: "nexus_health_preparation", wait: t.healthClinicWait });
    if (!sw) choices.push({ id: "pharmacy", label: t.healthPharmacy, say: t.healthPharmacySay, tool: "nexus_health_preparation", wait: t.healthPharmacyWait });
    choices.push({ id: "emergency-number", label: t.healthNumber, say: t.healthNumberSay, tool: "nexus_everyday_records" });
    return { id: "health", title: t.healthTitle, closeLabel: t.close, lines: [t.healthLine, t.healthSay, t.healthEmergency], choices };
  }

  // A health request that names something specific (a reading, a visit, a clinic, a symptom) has its own flow and is not answered with the general card.
  const HEALTH_SPECIFIC = /telehealth|tele-health|virtual|video visit|intake|doctor|nurse|appointment|\bvisit\b|blood[\s-]?pressure|hypertension|\bbp\b|sugar|glucose|diabetes|obesity|\brpm\b|\brtm\b|pulse|oxygen|\bweight\b|medicine|medication|pharmac|clinic|refill|symptom|\bpain\b|fever|emergency|chronic|dawa|kliniki|shinikizo|sukari|dharura|daktari/i;
  function healthIsGeneral(text) { return !HEALTH_SPECIFIC.test(String(text || "")); }

  // Farm: the records Kyro really keeps (the farm log, the rain total, the month's money) and general crop guidance that never names a spray or a dose. Said things are logged by saying them, so they
  // are lines, not buttons; the choices are the reads that answer without the AI model.
  function farmSpec({ lang } = {}) {
    const sw = lang === "sw";
    const t = TEXT[sw ? "sw" : "en"];
    const choices = sw
      ? [{ id: "month", label: t.farmMonth, say: t.farmMonthSay, tool: "nexus_everyday_records" }]
      : [{ id: "log", label: t.farmLog, say: t.farmLogSay, tool: "nexus_everyday_records" },
         { id: "rain", label: t.farmRain, say: t.farmRainSay, tool: "nexus_everyday_records" },
         { id: "month", label: t.farmMonth, say: t.farmMonthSay, tool: "nexus_everyday_records" }];
    return { id: "agriculture", title: t.farmTitle, closeLabel: t.close, lines: [t.farmLine, t.farmSay, t.farmProblem], choices };
  }

  // A farm request that names something specific (a crop problem, a price, the weather, a thing to log, a sale, a drone) has its own flow and is not answered with the general card.
  const FARM_SPECIFIC = /leaf|leaves|spot|yellow|wilt|blight|rot\b|mould|mold|pest|disease|insect|worm|caterpillar|aphid|locust|armyworm|drone|scan|price|market|sell|\bsold\b|\bsale\b|\bbuy|weather|forecast|\brain|storm|harvest|plant(ed|ing)?\b|sow|\blog\b|record|water|irrigat|soil|fertili[sz]|manure|tank|egg|milk|\bcow|goat|chicken|sheep|loan|budget|expense|income|\bpaid\b|\bowe|mvua|mavuno|mbolea|shamba la|ugonjwa|wadudu/i;
  function farmIsGeneral(text) { return !FARM_SPECIFIC.test(String(text || "")); }

  // The card for a workspace that has one (null when it does not: the usual window opens).
  function specFor(workspace, options) {
    if (workspace === "workforce") return workSpec(options);
    if (workspace === "learning") return learnSpec(options);
    if (workspace === "health") return healthSpec(options);
    if (workspace === "agriculture") return farmSpec(options);
    return null;
  }

  // Whether a request to open a workspace is general enough for its card (true for workspaces whose card is always right, false-able for health and farm, which have specific flows of their own).
  function isGeneralFor(workspace, text) {
    if (workspace === "health") return healthIsGeneral(text);
    if (workspace === "agriculture") return farmIsGeneral(text);
    return true;
  }

  const STYLE_ID = "kyro-answer-card-style";
  const STYLE = `
[data-kyro-answer-card] { position: fixed; inset: 0; z-index: 2147482500; display: flex; flex-direction: column; justify-content: center; gap: 18px; padding: clamp(20px, 6vw, 56px); box-sizing: border-box; overflow-y: auto; background: #080b10; color: #f1f5f9; font-family: inherit; }
[data-kyro-answer-card] h2 { margin: 0; font-size: clamp(2rem, 7vw, 3rem); font-weight: 650; letter-spacing: -.01em; }
[data-kyro-answer-card] p { margin: 0; max-width: 34em; font-size: clamp(1.05rem, 3.6vw, 1.3rem); line-height: 1.5; color: #cbd5e1; }
[data-kyro-answer-card] .kyro-card-choices { display: grid; gap: 12px; max-width: 30em; margin-top: 8px; }
[data-kyro-answer-card] .kyro-card-choice { min-height: 56px; padding: 14px 18px; border: 0; border-radius: 16px; background: rgba(255,255,255,.10); color: #f8fafc; font: inherit; font-size: 1.1rem; text-align: left; cursor: pointer; }
[data-kyro-answer-card] .kyro-card-choice:hover, [data-kyro-answer-card] .kyro-card-choice:focus-visible { background: rgba(255,255,255,.18); outline: 2px solid rgba(125, 211, 252, .8); outline-offset: 2px; }
[data-kyro-answer-card] .kyro-card-close { position: absolute; top: 12px; right: 12px; width: 44px; height: 44px; padding: 0; border: 0; border-radius: 50%; background: rgba(255,255,255,.10); color: #f1f5f9; font-size: 1.7rem; line-height: 1; cursor: pointer; }
`;

  function show(doc, spec, handlers) {
    if (!doc || !doc.body || !spec) return null;
    remove(doc);
    if (!doc.getElementById(STYLE_ID)) {
      const style = doc.createElement("style");
      style.id = STYLE_ID; style.textContent = STYLE;
      (doc.head || doc.body).appendChild(style);
    }
    const card = doc.createElement("section");
    card.setAttribute("data-kyro-answer-card", spec.id);
    card.setAttribute("role", "dialog");
    card.setAttribute("aria-label", spec.title);
    const heading = doc.createElement("h2"); heading.textContent = spec.title; card.appendChild(heading);
    for (const line of spec.lines || []) { const p = doc.createElement("p"); p.textContent = line; card.appendChild(p); }
    const choices = doc.createElement("div"); choices.className = "kyro-card-choices";
    for (const choice of spec.choices || []) {
      const button = doc.createElement("button");
      button.type = "button"; button.className = "kyro-card-choice"; button.setAttribute("data-kyro-card-choice", choice.id); button.textContent = choice.label;
      button.addEventListener("click", () => { if (handlers && typeof handlers.onChoose === "function") handlers.onChoose(choice); });
      choices.appendChild(button);
    }
    card.appendChild(choices);
    const close = doc.createElement("button");
    close.type = "button"; close.className = "kyro-card-close"; close.setAttribute("aria-label", spec.closeLabel || "Close"); close.textContent = "×";
    close.addEventListener("click", () => { if (handlers && typeof handlers.onClose === "function") handlers.onClose(); });
    card.appendChild(close);
    doc.body.appendChild(card);
    return card;
  }

  function remove(doc) {
    if (!doc || typeof doc.querySelectorAll !== "function") return false;
    const cards = doc.querySelectorAll("[data-kyro-answer-card]");
    for (let i = 0; i < cards.length; i += 1) cards[i].remove();
    return cards.length > 0;
  }

  return Object.freeze({ workSpec, learnSpec, healthSpec, healthIsGeneral, farmSpec, farmIsGeneral, isGeneralFor, specFor, show, remove, TEXT });
});
