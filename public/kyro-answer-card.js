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
      close: "Close"
    },
    sw: {
      title: "Kazi",
      noSearch: "Siwezi kutafuta orodha za kazi za moja kwa moja, kwa hivyo sitakisia ni zipi zipo karibu nawe.",
      roles: roles => `Kazi zilizopakiwa kwenye Kyro: ${roles.join(", ")}.`,
      cv: "Tengeneza CV yangu", interview: "Fanya mazoezi ya mahojiano", letters: "Jifunze kusoma au kuhesabu",
      cvSay: "Nataka CV", interviewSay: "Nipe mazoezi ya mahojiano", lettersSay: "Nifundishe herufi",
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

  return Object.freeze({ workSpec, show, remove, TEXT });
});
