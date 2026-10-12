// Kyro result screen: the Jarvis way. You say what you want ("find a clinic near me", "show my blood pressure readings", "what is for sale"); the ANSWER fills the screen, big and clear, while Kyro
// reads it out, and then it clears and the orb is back. No menu, no tapping, no form. It is a task like any other: the task stage hides everything else, one close mark returns to the orb, and the
// quiet-spell return clears it a few seconds after Kyro has finished speaking (see kyroReturnToOrb and kyro-task-stage.js).
//
//   buildModel(result, { command, lang }) -> null | model        (pure: turns a tool's answer into what is drawn; null when there is nothing worth a screen)
//   show(doc, model, { onClose }) -> element                     (adds section[data-kyro-result]; replaces any result already shown)
//   remove(doc) -> boolean
//
// model: { kind: "places" | "list" | "text", title, headline, items: [{ name, detail, extra }], notes: [], awaiting }
//   places  a list of clinics or pharmacies from the answer's own data: name, address and distance, opening hours
//   list    "I found 3 things: a; b; c" or "Your listings: a; b" drawn as a list under its heading
//   text    one or two sentences: the first is the headline, the rest are the smaller notes
//   help    "open health": what Kyro can do and the sentences to say, as plain text (helpModel); it is not an answer, so it stays a little longer
//   awaiting  the answer ends with a question that needs a yes or a no ("Shall I save it?"): it stays on screen until answered
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.KyroResultScreen = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const TEXT = {
    en: {
      close: "Close", say: "You can say:", clinics: "Clinics near you", mobile: "Mobile clinics near you", pharmacies: "Pharmacies near you",
      sourceNote: source => `From ${source}. Opening hours may be out of date. This is not a medical referral.`,
      hours: hours => `Open ${hours}`
    },
    sw: {
      close: "Funga", say: "Unaweza kusema:", clinics: "Kliniki karibu nawe", mobile: "Kliniki zinazotembea karibu nawe", pharmacies: "Maduka ya dawa karibu nawe",
      sourceNote: source => `Kutoka ${source}. Saa za kufungua zinaweza kuwa zimepitwa na wakati. Huu si uhamisho wa kimatibabu.`,
      hours: hours => `Wazi ${hours}`
    }
  };
  const t = lang => TEXT[lang === "sw" ? "sw" : "en"];

  function clean(value) { return String(value == null ? "" : value).replace(/\s+/g, " ").trim(); }

  function distanceText(meters) {
    const m = Number(meters);
    if (!Number.isFinite(m) || m < 0) return "";
    return m < 1000 ? `${Math.round(m)} m` : `${(m / 1000).toFixed(1)} km`;
  }

  // The answers that are asking for a yes or a no stay up until the person answers.
  function isAwaiting(result) {
    if (result && result.requiresConfirmation === true) return true;
    return /\b(?:shall i|should i|say yes|say or type "?yes|do you want me to|would you like me to)\b/i.test(clean(result && result.response));
  }

  function placesModel(list, title, lang, locationNote) {
    const items = list.filter(place => place && clean(place.name)).slice(0, 8).map(place => {
      // the lookup says "Address not listed in OpenStreetMap" when it has none: that is not an address to show
      const address = /not listed|not available|unknown/i.test(clean(place.address)) ? "" : clean(place.address);
      const where = clean([address, place.city && address ? "" : place.city].filter(Boolean).join(", "));
      const away = distanceText(place.distanceMeters);
      return { name: clean(place.name), detail: [where, away].filter(Boolean).join(" · "), extra: [place.openingHours ? t(lang).hours(clean(place.openingHours)) : "", clean(place.phone)].filter(Boolean).join(" · ") };
    });
    if (!items.length) return null;
    const source = clean(list.find(place => place && place.source) && list.find(place => place && place.source).source);
    // (when the lookup could not tell where the person is, it says which town it looked near: that belongs on the screen with the list)
    const notes = [clean(locationNote)].filter(Boolean).concat(source ? [t(lang).sourceNote(source)] : []);
    return { kind: "places", title, headline: "", items, notes, awaiting: false };
  }

  // The "open health" / "open the farm" / "open work" screen: not a menu. What Kyro can do, in a few plain words, and the sentences to say (they are plain text; nothing here is tapped).
  //   spec: { id, title, lines: [], choices: [{ say }] }  (from kyro-answer-card.js)
  function helpModel(spec, lang) {
    if (!spec) return null;
    const items = (spec.choices || []).map(choice => clean(choice && choice.say)).filter(Boolean).map(say => ({ name: `“${say}”`, detail: "", extra: "" }));
    return { kind: "help", id: clean(spec.id), title: clean(spec.title), headline: "", lead: items.length ? t(lang).say : "", items, notes: (spec.lines || []).map(clean).filter(Boolean), awaiting: false };
  }

  // "a (one; two) b; c" -> ["a (one; two) b", "c"]: a semicolon inside brackets belongs to its item
  function splitItems(text) {
    const items = []; let depth = 0; let current = "";
    for (let i = 0; i < text.length; i += 1) {
      const ch = text[i];
      if (ch === "(") depth += 1; else if (ch === ")" && depth > 0) depth -= 1;
      if (ch === ";" && depth === 0 && /\s/.test(text[i + 1] || " ")) { items.push(current); current = ""; } else current += ch;
    }
    items.push(current);
    return items.map(part => clean(part).replace(/[.]+$/, "")).filter(Boolean);
  }

  function sentences(text) {
    return clean(text).split(/(?<=[.!?])\s+(?=[A-Z"'(])/).map(part => part.trim()).filter(Boolean);
  }

  function buildModel(result, options = {}) {
    if (!result || typeof result !== "object") return null;
    const lang = options.lang === "sw" ? "sw" : "en";
    const command = clean(options.command).toLowerCase();
    // which town the lookup used when it could not tell where the person is: from the data when it has it, else the sentence the spoken answer carries
    const locationNote = clean(result.locationNote) || (/I don.t know exactly where you are[^.]*\./.exec(clean(result.response)) || [""])[0];
    const places = Array.isArray(result.mobileClinics) && result.mobileClinics.length ? result.mobileClinics : null;
    if (places) {
      const mobile = /mobile/.test(command) || places.some(place => /mobile/i.test(clean(place && place.category)));
      return placesModel(places, mobile ? t(lang).mobile : t(lang).clinics, lang, locationNote);
    }
    if (Array.isArray(result.pharmacyLocations) && result.pharmacyLocations.length) return placesModel(result.pharmacyLocations, t(lang).pharmacies, lang, locationNote);
    const response = clean(result.response);
    if (response.length < 8) return null;
    const awaiting = isAwaiting(result);
    // "Your listings: a; b; c." or "I found 8 clinic option(s): a; b; c.": a heading and a list
    const list = /^([^:]{3,120}):\s+(.+;.+)$/.exec(response);
    if (list) {
      const items = splitItems(list[2]);
      if (items.length >= 2) return { kind: "list", title: clean(list[1]), headline: "", items: items.slice(0, 12).map(name => ({ name, detail: "", extra: "" })), notes: [], awaiting };
    }
    const parts = sentences(response);
    // A practice lesson: the lesson itself is the screen ("The letter A. A is for apple. Which letter does ... start with?"), the instructions for it are the small print.
    const hintAt = result.intent === "conversation.practice_lesson" ? parts.findIndex(part => /^Say '?next/i.test(part)) : -1;
    if (hintAt >= 0 && parts.length > hintAt + 1) {
      return { kind: "text", title: lang === "sw" ? "Somo fupi" : "Practice lesson", headline: parts.slice(hintAt + 1).join(" "), items: [], notes: [parts[hintAt]], awaiting };
    }
    // "...no checkout. Maize seed lot in A; Compost in B; Tools in C.": the sentence that is a list of things becomes the list
    const listAt = parts.findIndex(part => splitItems(part).length >= 3);
    if (listAt >= 0) {
      const items = splitItems(parts[listAt]);
      const rest = parts.filter((part, i) => i !== listAt);
      return { kind: "list", title: rest[0] || "", headline: "", items: items.slice(0, 12).map(name => ({ name, detail: "", extra: "" })), notes: rest.slice(1, 4), awaiting };
    }
    return { kind: "text", title: "", headline: parts[0] || response, items: [], notes: parts.slice(1, 7), awaiting };
  }

  const STYLE_ID = "kyro-result-screen-style";
  const STYLE = `
[data-kyro-result] { position: fixed; inset: 0; z-index: 2147482500; display: flex; flex-direction: column; gap: 18px; padding: clamp(24px, 7vw, 64px); box-sizing: border-box; overflow-y: auto; background: #080b10; color: #f1f5f9; font-family: inherit; }
[data-kyro-result]::before, [data-kyro-result]::after { content: ""; flex: 1 1 0; }
[data-kyro-result] h2 { margin: 0; font-size: clamp(1.1rem, 4vw, 1.5rem); font-weight: 600; letter-spacing: .02em; text-transform: uppercase; color: #94a3b8; }
[data-kyro-result] p.kyro-result-headline { color: #f1f5f9; margin: 0; font-size: clamp(1.7rem, 6.5vw, 2.8rem); line-height: 1.25; font-weight: 600; max-width: 22em; }
[data-kyro-result] .kyro-result-note { margin: 0; max-width: 34em; font-size: clamp(1rem, 3.4vw, 1.2rem); line-height: 1.5; color: #cbd5e1; }
[data-kyro-result] .kyro-result-lead { margin: 0; color: #94a3b8; font-size: clamp(.95rem, 3.2vw, 1.1rem); }
[data-kyro-result] ol, [data-kyro-result] ul { margin: 0; padding: 0; list-style: none; display: grid; gap: 14px; max-width: 34em; }
[data-kyro-result] li { padding: 14px 18px; border-radius: 16px; background: rgba(255,255,255,.07); }
[data-kyro-result] .kyro-result-name { display: block; font-size: clamp(1.2rem, 4.4vw, 1.6rem); font-weight: 600; }
[data-kyro-result] .kyro-result-detail { display: block; margin-top: 2px; font-size: clamp(.95rem, 3.2vw, 1.1rem); color: #cbd5e1; }
[data-kyro-result] .kyro-result-extra { display: block; margin-top: 2px; font-size: clamp(.9rem, 3vw, 1rem); color: #94a3b8; }
[data-kyro-result="help"] ul { gap: 6px; }
[data-kyro-result="help"] li { padding: 0; background: none; }
[data-kyro-result="help"] .kyro-result-name { font-weight: 500; font-size: clamp(1.1rem, 4vw, 1.35rem); color: #e2e8f0; }
[data-kyro-result] .kyro-result-small { margin: 0; max-width: 34em; font-size: .9rem; color: #94a3b8; }
[data-kyro-result] .kyro-result-close { position: absolute; top: 12px; right: 12px; width: 44px; height: 44px; padding: 0; border: 0; border-radius: 50%; background: rgba(255,255,255,.10); color: #f1f5f9; font-size: 1.7rem; line-height: 1; cursor: pointer; }
`;

  function element(doc, tag, className, text) {
    const node = doc.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function show(doc, model, handlers, lang) {
    if (!doc || !doc.body || !model) return null;
    remove(doc);
    if (!doc.getElementById(STYLE_ID)) {
      const style = doc.createElement("style");
      style.id = STYLE_ID; style.textContent = STYLE;
      (doc.head || doc.body).appendChild(style);
    }
    const screen = doc.createElement("section");
    screen.setAttribute("data-kyro-result", model.kind);
    screen.setAttribute("data-kyro-result-at", String(Date.now()));
    if (model.awaiting) screen.setAttribute("data-kyro-result-awaiting", "true");
    screen.setAttribute("role", "dialog");
    screen.setAttribute("aria-live", "polite");
    screen.setAttribute("aria-label", model.title || model.headline || "Answer");
    if (model.title) screen.appendChild(element(doc, "h2", "", model.title));
    if (model.id) screen.setAttribute("data-kyro-result-id", model.id);
    if (model.headline) screen.appendChild(element(doc, "p", "kyro-result-headline", model.headline));
    // "open health": what Kyro can do first, then what to say (the sentences are plain text, not buttons)
    if (model.kind === "help") for (const note of model.notes || []) screen.appendChild(element(doc, "p", "kyro-result-note", note));
    if (model.lead) screen.appendChild(element(doc, "p", "kyro-result-lead", model.lead));
    if (model.items.length) {
      const list = element(doc, model.kind === "places" ? "ol" : "ul", "");
      for (const item of model.items) {
        const li = doc.createElement("li");
        li.appendChild(element(doc, "span", "kyro-result-name", item.name));
        if (item.detail) li.appendChild(element(doc, "span", "kyro-result-detail", item.detail));
        if (item.extra) li.appendChild(element(doc, "span", "kyro-result-extra", item.extra));
        list.appendChild(li);
      }
      screen.appendChild(list);
    }
    if (model.kind !== "help") for (const note of model.notes || []) screen.appendChild(element(doc, "p", model.kind === "places" ? "kyro-result-small" : "kyro-result-note", note));
    const close = element(doc, "button", "kyro-result-close", "×");
    close.type = "button"; close.setAttribute("aria-label", t(lang).close);
    close.addEventListener("click", () => { if (handlers && typeof handlers.onClose === "function") handlers.onClose(); });
    screen.appendChild(close);
    doc.body.appendChild(screen);
    return screen;
  }

  function remove(doc) {
    if (!doc || typeof doc.querySelectorAll !== "function") return false;
    const screens = doc.querySelectorAll("[data-kyro-result]");
    for (let i = 0; i < screens.length; i += 1) screens[i].remove();
    return screens.length > 0;
  }

  return Object.freeze({ buildModel, helpModel, show, remove, isAwaiting, distanceText, TEXT });
});
