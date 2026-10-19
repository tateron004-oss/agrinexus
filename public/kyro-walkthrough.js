// Kyro walkthrough: Kyro walks a person through a process one step at a time and the PERSON does each step; Kyro never applies, files or submits for them. The steps come from a checked guide (the server sends them with the
// answer, each from an official page, with the date it was checked); this file only turns them into a short spoken line and a screen, and keeps the person's place.
//
//   parseControl(text) -> "next" | "back" | "repeat" | "restart" | "where" | null     (short phrases only: "next", "go back", "say that again", "start over")
//   sanitize(raw) -> { id, title, checkedOn, sources: [{ name, url }], steps: [{ title, text, gather: [], link: { name, url } | null }] } | null     (what the server sent, cleaned; null when there is nothing to walk through)
//   createWalkthrough(def, { storage, now }) -> { snapshot(), next(), back(), restart(), resumed }     (the place is kept in storage for 30 days, per walkthrough, so the person can come back)
//   sayStep(snapshot, lang) -> the line to read aloud for the current step
//   show(doc, snapshot, handlers, lang) -> element     (section[data-kyro-result="walkthrough"], kept on the screen until closed)   remove(doc) -> boolean
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.KyroWalkthrough = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const KEY_PREFIX = "kyro-walkthrough:";
  const KEEP_MS = 30 * 24 * 3600 * 1000;

  const TEXT = {
    en: {
      step: (n, total) => `Step ${n} of ${total}`, you: "You will need:", open: "Open", next: "Next step", back: "Back", repeat: "Say it again", close: "Close",
      last: "That was the last step. You submit it yourself: I never apply for you. Say start over to go through it again.", sayNext: "Say next when you have done this.", lastStep: "This is the last step. You do it yourself; I never apply for you.",
      resumed: n => `Welcome back. You were on step ${n}.`, started: "I only guide you: you do each step yourself, and I never apply for you.", checked: date => `Checked ${date}`, finished: "All steps shown", note: "You do each step yourself. I never apply for you.",
      pages: "Official page for this step", sources: "Sources"
    },
    sw: {
      step: (n, total) => `Hatua ya ${n} kati ya ${total}`, you: "Utahitaji:", open: "Fungua", next: "Hatua inayofuata", back: "Rudi", repeat: "Sema tena", close: "Funga",
      last: "Hiyo ilikuwa hatua ya mwisho. Unawasilisha mwenyewe: sikuombei kamwe. Sema anza upya kuipitia tena.", sayNext: "Sema inayofuata ukimaliza hili.", lastStep: "Hii ni hatua ya mwisho. Unafanya mwenyewe; sikuombei kamwe.",
      resumed: n => `Karibu tena. Ulikuwa kwenye hatua ya ${n}.`, started: "Ninakuongoza tu: unafanya kila hatua mwenyewe, na sikuombei kamwe.", checked: date => `Imekaguliwa ${date}`, finished: "Hatua zote zimeonyeshwa", note: "Unafanya kila hatua mwenyewe. Sikuombei kamwe.",
      pages: "Ukurasa rasmi wa hatua hii", sources: "Vyanzo"
    }
  };
  const t = lang => TEXT[lang === "sw" ? "sw" : "en"];

  const clean = value => String(value == null ? "" : value).replace(/\s+/g, " ").trim();

  // ---- what the person says while a walkthrough is on the screen ----
  // ("done" and "I'm done with that" are left out on purpose: they mean "I have finished" and take the screen down, as everywhere else)
  const CONTROLS = [
    ["next", /^(?:okay |ok |yes )?(?:next(?: step| one)?|continue|go on|move on|go to the next step|ready|got it|i did (?:it|that|this)|i have done (?:it|that|this)|that(?:'s| is) done|finished (?:it|that|this)|inayofuata|endelea)$/],
    ["back", /^(?:go )?back(?: a step| one step)?$|^(?:the )?previous(?: step)?$|^rudi nyuma$/],
    ["repeat", /^(?:repeat(?: that| it| the step)?|say (?:that|it) again|again|what(?: is|'s) (?:this|the) step|read (?:that|it|the step) again|sema tena)$/],
    ["restart", /^(?:start over|begin again|go to the (?:first|beginning)|restart|anza upya)$/],
    ["where", /^(?:where am i|what step am i on|which step is this)$/]
  ];
  function parseControl(text) {
    const said = clean(text).toLowerCase().replace(/[.!?,]+$/g, "");
    if (!said || said.length > 40) return null;
    for (const [kind, pattern] of CONTROLS) if (pattern.test(said)) return kind;
    return null;
  }

  function sanitize(raw) {
    if (!raw || typeof raw !== "object" || !Array.isArray(raw.steps)) return null;
    const steps = raw.steps.slice(0, 20).map(step => {
      if (!step || typeof step !== "object") return null;
      const title = clean(step.title).slice(0, 140); const text = clean(step.text).slice(0, 900);
      if (!title || !text) return null;
      const url = clean(step.link && step.link.url);
      const link = /^https:\/\/[^\s]+$/i.test(url) ? { name: clean(step.link.name).slice(0, 140) || url, url } : null;
      return { title, text, gather: (Array.isArray(step.gather) ? step.gather : []).map(item => clean(item).slice(0, 160)).filter(Boolean).slice(0, 12), link };
    }).filter(Boolean);
    const id = clean(raw.id).replace(/[^a-z0-9-]/gi, "").slice(0, 60);
    if (!id || !steps.length) return null;
    const sources = (Array.isArray(raw.sources) ? raw.sources : []).slice(0, 20).map(source => ({ name: clean(source && source.name).slice(0, 160), url: clean(source && source.url) })).filter(source => source.name && /^https:\/\/[^\s]+$/i.test(source.url));
    return { id, title: clean(raw.title).slice(0, 160), checkedOn: clean(raw.checkedOn).slice(0, 40), sources, steps };
  }

  function readPlace(storage, id, now) {
    try {
      const raw = storage && storage.getItem ? storage.getItem(KEY_PREFIX + id) : null;
      const saved = raw ? JSON.parse(raw) : null;
      if (saved && Number.isInteger(saved.index) && saved.index >= 0 && now() - Number(saved.at) < KEEP_MS) return saved.index;
    } catch { /* no saved place */ }
    return 0;
  }

  function createWalkthrough(rawDef, { storage = null, now = () => Date.now() } = {}) {
    const def = sanitize(rawDef);
    if (!def) return null;
    const last = def.steps.length - 1;
    let index = Math.min(readPlace(storage, def.id, now), last);
    const resumed = index > 0;
    const save = () => { try { if (storage && storage.setItem) storage.setItem(KEY_PREFIX + def.id, JSON.stringify({ index, at: now() })); } catch { /* the walkthrough still works */ } };
    const snapshot = (finished = false) => ({ id: def.id, title: def.title, checkedOn: def.checkedOn, sources: def.sources, index, number: index + 1, total: def.steps.length, step: def.steps[index], isLast: index === last, finished });
    return {
      resumed, def, snapshot: () => snapshot(),
      // a step forward; on the last step it says so and keeps the person there (the walk is done; they go and submit it themselves)
      next() { if (index >= last) return snapshot(true); index += 1; save(); return snapshot(); },
      back() { if (index > 0) { index -= 1; save(); } return snapshot(); },
      restart() { index = 0; save(); return snapshot(); }
    };
  }

  // The line read aloud for the current step.
  function sayStep(snap, lang) {
    const words = t(lang);
    if (snap.finished) return words.last;
    const gather = snap.step.gather.length ? ` ${words.you} ${snap.step.gather.join("; ")}.` : "";
    return `${words.step(snap.number, snap.total)}. ${snap.step.title}. ${snap.step.text}${gather} ${snap.isLast ? words.lastStep : words.sayNext}`;
  }

  const STYLE_ID = "kyro-walkthrough-style";
  const STYLE = `
[data-kyro-result="walkthrough"] { position: fixed; inset: 0; z-index: 2147482500; display: flex; flex-direction: column; gap: 16px; padding: clamp(24px, 6vw, 56px); box-sizing: border-box; overflow-y: auto; background: #080b10; color: #f1f5f9; font-family: inherit; }
[data-kyro-result="walkthrough"] h2 { margin: 0; font-size: clamp(1rem, 3.6vw, 1.3rem); font-weight: 600; letter-spacing: .02em; text-transform: uppercase; color: #94a3b8; }
[data-kyro-result="walkthrough"] .kyro-wt-progress { margin: 0; font-size: clamp(1rem, 3.4vw, 1.2rem); color: #5eead4; font-weight: 600; }
[data-kyro-result="walkthrough"] .kyro-wt-dots { display: flex; gap: 6px; flex-wrap: wrap; }
[data-kyro-result="walkthrough"] .kyro-wt-dot { width: 12px; height: 12px; border-radius: 50%; background: rgba(255,255,255,.18); }
[data-kyro-result="walkthrough"] .kyro-wt-dot[data-state="done"] { background: #14b8a6; }
[data-kyro-result="walkthrough"] .kyro-wt-dot[data-state="now"] { background: #f1f5f9; }
[data-kyro-result="walkthrough"] h3 { margin: 0; font-size: clamp(1.6rem, 6vw, 2.6rem); line-height: 1.2; font-weight: 600; max-width: 22em; }
[data-kyro-result="walkthrough"] .kyro-wt-text { margin: 0; max-width: 36em; font-size: clamp(1.05rem, 3.8vw, 1.35rem); line-height: 1.5; color: #e2e8f0; }
[data-kyro-result="walkthrough"] .kyro-wt-gather { margin: 0; padding: 12px 18px; border-radius: 16px; background: rgba(255,255,255,.07); max-width: 34em; }
[data-kyro-result="walkthrough"] .kyro-wt-gather strong { display: block; margin-bottom: 4px; color: #94a3b8; font-weight: 600; }
[data-kyro-result="walkthrough"] .kyro-wt-gather ul { margin: 0; padding-left: 20px; }
[data-kyro-result="walkthrough"] .kyro-wt-link { display: block; max-width: 34em; padding: 14px 18px; border-radius: 16px; background: #14b8a6; color: #04201c; text-decoration: none; font-weight: 700; font-size: clamp(1.05rem, 3.8vw, 1.3rem); }
[data-kyro-result="walkthrough"] .kyro-wt-link-name { display: block; }
[data-kyro-result="walkthrough"] .kyro-wt-link-host { display: block; margin-top: 2px; font-size: .9rem; font-weight: 600; opacity: .75; }
[data-kyro-result="walkthrough"] .kyro-wt-buttons { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 4px; }
[data-kyro-result="walkthrough"] .kyro-wt-buttons button { padding: 14px 26px; border: 0; border-radius: 14px; font-size: clamp(1rem, 3.6vw, 1.2rem); font-weight: 600; cursor: pointer; background: rgba(255,255,255,.12); color: #f1f5f9; }
[data-kyro-result="walkthrough"] .kyro-wt-buttons button[data-kyro-wt="next"] { background: #f1f5f9; color: #080b10; }
[data-kyro-result="walkthrough"] .kyro-wt-sources { display: grid; gap: 6px; max-width: 34em; }
[data-kyro-result="walkthrough"] .kyro-wt-sources h4 { margin: 8px 0 0; font-size: .95rem; font-weight: 600; color: #94a3b8; }
[data-kyro-result="walkthrough"] .kyro-wt-sources a { color: #5eead4; text-decoration: underline; font-size: clamp(.95rem, 3.2vw, 1.05rem); }
[data-kyro-result="walkthrough"] .kyro-wt-note { margin: 0; max-width: 34em; font-size: .95rem; color: #94a3b8; }
[data-kyro-result="walkthrough"] .kyro-wt-close { position: absolute; top: 12px; right: 12px; width: 44px; height: 44px; padding: 0; border: 0; border-radius: 50%; background: rgba(255,255,255,.10); color: #f1f5f9; font-size: 1.7rem; line-height: 1; cursor: pointer; }
`;

  function element(doc, tag, className, text) {
    const node = doc.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function remove(doc) {
    if (!doc || typeof doc.querySelectorAll !== "function") return false;
    const screens = doc.querySelectorAll('[data-kyro-result="walkthrough"]');
    for (let i = 0; i < screens.length; i += 1) screens[i].remove();
    return screens.length > 0;
  }

  // handlers: { onNext, onBack, onRepeat, onClose }
  function show(doc, snap, handlers, lang) {
    if (!doc || !doc.body || !snap) return null;
    const words = t(lang); const h = handlers || {};
    doc.querySelectorAll("[data-kyro-result]").forEach(node => node.remove());
    if (!doc.getElementById(STYLE_ID)) {
      const style = doc.createElement("style");
      style.id = STYLE_ID; style.textContent = STYLE;
      (doc.head || doc.body).appendChild(style);
    }
    const screen = doc.createElement("section");
    screen.setAttribute("data-kyro-result", "walkthrough");
    screen.setAttribute("data-kyro-result-at", String(Date.now()));
    screen.setAttribute("data-kyro-keep", "true");
    screen.setAttribute("data-kyro-walkthrough-step", String(snap.number));
    screen.setAttribute("role", "dialog");
    screen.setAttribute("aria-live", "polite");
    screen.setAttribute("aria-label", snap.title || snap.step.title);
    if (snap.title) screen.appendChild(element(doc, "h2", "", snap.title));
    screen.appendChild(element(doc, "p", "kyro-wt-progress", words.step(snap.number, snap.total)));
    const dots = element(doc, "div", "kyro-wt-dots");
    for (let i = 0; i < snap.total; i += 1) { const dot = element(doc, "span", "kyro-wt-dot"); dot.setAttribute("data-state", i < snap.index ? "done" : i === snap.index ? "now" : "todo"); dots.appendChild(dot); }
    screen.appendChild(dots);
    screen.appendChild(element(doc, "h3", "", snap.step.title));
    screen.appendChild(element(doc, "p", "kyro-wt-text", snap.step.text));
    if (snap.step.gather.length) {
      const box = element(doc, "div", "kyro-wt-gather"); box.appendChild(element(doc, "strong", "", words.you));
      const list = doc.createElement("ul"); for (const item of snap.step.gather) list.appendChild(element(doc, "li", "", item));
      box.appendChild(list); screen.appendChild(box);
    }
    if (snap.step.link) {
      const a = doc.createElement("a");
      a.className = "kyro-wt-link"; a.href = snap.step.link.url; a.target = "_blank"; a.rel = "noopener noreferrer";
      a.setAttribute("data-kyro-source-link", "true");
      a.appendChild(element(doc, "span", "kyro-wt-link-name", `${words.open} ${snap.step.link.name}`));
      // (the website itself, so the person can see where the button goes)
      a.appendChild(element(doc, "span", "kyro-wt-link-host", snap.step.link.url.replace(/^https?:\/\/(?:www\.)?/i, "").split("/")[0]));
      screen.appendChild(a);
    }
    const buttons = element(doc, "div", "kyro-wt-buttons");
    const button = (kind, label, handler) => { const b = element(doc, "button", "", label); b.type = "button"; b.setAttribute("data-kyro-wt", kind); b.addEventListener("click", () => { if (typeof handler === "function") handler(); }); buttons.appendChild(b); return b; };
    if (snap.index > 0) button("back", words.back, h.onBack);
    button("repeat", words.repeat, h.onRepeat);
    if (!snap.isLast) button("next", words.next, h.onNext);
    screen.appendChild(buttons);
    // the pages this walkthrough was read from, with their websites, on every step
    if (snap.sources && snap.sources.length) {
      const nav = element(doc, "nav", "kyro-wt-sources"); nav.setAttribute("aria-label", words.sources); nav.appendChild(element(doc, "h4", "", words.sources));
      for (const source of snap.sources) { const a = doc.createElement("a"); a.href = source.url; a.target = "_blank"; a.rel = "noopener noreferrer"; a.setAttribute("data-kyro-source-link", "true"); a.textContent = `${source.name} (${source.url.replace(/^https?:\/\/(?:www\.)?/i, "").split("/")[0]})`; nav.appendChild(a); }
      screen.appendChild(nav);
    }
    screen.appendChild(element(doc, "p", "kyro-wt-note", `${words.note}${snap.checkedOn ? ` ${words.checked(snap.checkedOn)}.` : ""}`));
    const close = element(doc, "button", "kyro-wt-close", "×");
    close.type = "button"; close.setAttribute("aria-label", words.close);
    close.addEventListener("click", () => { if (typeof h.onClose === "function") h.onClose(); });
    screen.appendChild(close);
    doc.body.appendChild(screen);
    return screen;
  }

  return Object.freeze({ parseControl, sanitize, createWalkthrough, sayStep, show, remove, TEXT, KEY_PREFIX });
});
