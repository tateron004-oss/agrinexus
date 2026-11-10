// Kyro live conversation: the words of the conversation, on the screen, as they are said (10 November 2026).
// Said by the owner while testing: the screen only ever showed one line, "Last heard", and the last reply, after the turn was over, so the conversation did not feel live.
// The live words were already arriving (the voice session streams what the person is saying and what Kyro is saying, word by word); they were only written into regions that are hidden from sight.
// This keeps the last few turns and draws them in a small strip at the bottom of the screen: the person's words appear as they speak, Kyro's as Kyro speaks, and the strip fades a little while after the talking stops.
//
//   createLog({ max })                      -> log   (pure: no page needed)
//     log.noteEvent(type, payload, now)     -> boolean   feed it each voice-session event; true when the log changed
//     log.turns()                           -> [{ id, who: "you" | "kyro", text, final }]   oldest first
//     log.lastAt()                          -> time of the last change
//   create(doc, { max, hideAfterMs })       -> { noteEvent(type, payload), show(), hide(), element }   (the strip, added to doc.body)
//
// What each event does (types are the Realtime API's own):
//   conversation.item.input_audio_transcription.delta      the person's words so far: added to their turn
//   conversation.item.input_audio_transcription.completed  their whole sentence: replaces the words so far
//   response.output_audio_transcript.delta                 Kyro's words so far
//   response.output_audio_transcript.done                  Kyro's whole reply
// A turn is found by its item id, so a delta and its final sentence are the same line. Words are only ever drawn as text (never as markup).
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.KyroLiveTranscript = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const MAX_TURNS = 6;
  const MAX_TEXT = 600;
  const HIDE_AFTER_MS = 30000;
  const LABEL = { en: { you: "You", kyro: "Kyro", name: "Conversation", hide: "Hide" }, sw: { you: "Wewe", kyro: "Kyro", name: "Mazungumzo", hide: "Ficha" } };

  const clean = value => String(value == null ? "" : value).replace(/\s+/g, " ").trim();
  const cut = value => { const text = String(value || ""); return text.length > MAX_TEXT ? `…${text.slice(text.length - MAX_TEXT + 1)}` : text; };

  function createLog({ max = MAX_TURNS } = {}) {
    let list = [];
    let lastAt = 0;
    let anonymous = 0;
    const find = id => (id ? list.find(turn => turn.id === id) : null);
    function touch(who, id, now) {
      let turn = find(id);
      if (!turn) {
        turn = { id: id || `${who}-${++anonymous}`, who, text: "", final: false };
        list.push(turn);
        if (list.length > max) list = list.slice(list.length - max);
      }
      lastAt = now;
      return turn;
    }
    function noteEvent(type, payload = {}, now = Date.now()) {
      const kind = String(type || "");
      const id = String(payload.item_id || payload.itemId || payload.item?.id || "");
      const piece = payload.delta != null ? String(payload.delta) : String(payload.acceptanceText || "");
      const whole = clean(payload.transcript || (Array.isArray(payload.item?.content) ? payload.item.content.map(part => part?.transcript || part?.text || "").join(" ") : ""));
      if (/^conversation\.item\.input_audio_transcription\.delta$/.test(kind)) {
        if (!piece) return false;
        const turn = touch("you", id, now);
        if (turn.final) return false;
        // pieces arrive with their own spacing ("Show", " me", " a map"): joined as they come
        turn.raw = `${turn.raw || ""}${piece}`;
        turn.text = cut(clean(turn.raw));
        return true;
      }
      if (/^conversation\.item\.input_audio_transcription\.completed$/.test(kind)) {
        const text = clean(whole || piece);
        if (!text) return false;
        const turn = touch("you", id, now);
        turn.text = cut(text); turn.raw = text; turn.final = true;
        return true;
      }
      if (/^response\.(?:output_)?audio_transcript\.delta$/.test(kind)) {
        if (!piece) return false;
        const turn = touch("kyro", id, now);
        turn.raw = `${turn.raw || ""}${piece}`;
        turn.text = cut(clean(turn.raw));
        turn.final = false;
        return true;
      }
      if (/^response\.(?:output_)?audio_transcript\.done$/.test(kind)) {
        const text = clean(whole || piece);
        if (!text) return false;
        const turn = touch("kyro", id, now);
        turn.text = cut(text); turn.raw = text; turn.final = true;
        return true;
      }
      return false;
    }
    return {
      noteEvent,
      turns: () => list.map(({ id, who, text, final }) => ({ id, who, text, final })),
      lastAt: () => lastAt,
      clear: () => { list = []; lastAt = 0; }
    };
  }

  const STYLE = [
    ".kyro-live-transcript{position:fixed;left:50%;bottom:calc(env(safe-area-inset-bottom,0px) + 4.5rem);transform:translateX(-50%);z-index:40;width:min(36rem,calc(100vw - 2rem));max-height:34vh;overflow:auto;box-sizing:border-box;padding:.55rem .8rem;border-radius:.9rem;background:rgba(14,22,19,.78);color:#f1f6f3;font:15px/1.45 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;box-shadow:0 6px 24px rgba(0,0,0,.28);backdrop-filter:blur(6px);transition:opacity .4s ease}",
    ".kyro-live-transcript[hidden]{display:none!important}",
    ".kyro-live-transcript.is-fading{opacity:.35}",
    ".kyro-live-transcript ol{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:.35rem}",
    ".kyro-live-transcript li{display:flex;gap:.55rem;align-items:baseline}",
    ".kyro-live-transcript b{flex:none;min-width:3.1rem;font-size:.72rem;letter-spacing:.06em;text-transform:uppercase;opacity:.75}",
    ".kyro-live-transcript li.you span{color:#bfe3d2}",
    ".kyro-live-transcript li.live span::after{content:'\\2026';opacity:.7}",
    ".kyro-live-transcript button{position:absolute;top:.15rem;right:.35rem;border:0;background:transparent;color:inherit;font:inherit;font-size:.78rem;opacity:.6;cursor:pointer;padding:.2rem .35rem}",
    "@media (prefers-color-scheme:light){.kyro-live-transcript{background:rgba(255,255,255,.92);color:#16201b;box-shadow:0 6px 24px rgba(0,0,0,.18)}.kyro-live-transcript li.you span{color:#1c6a4d}}"
  ].join("");

  function create(doc, { max = MAX_TURNS, hideAfterMs = HIDE_AFTER_MS, lang = "en" } = {}) {
    const words = LABEL[lang] || LABEL.en;
    const log = createLog({ max });
    const style = doc.createElement("style");
    style.setAttribute("data-kyro-live-transcript-style", "true");
    style.textContent = STYLE;
    (doc.head || doc.body).appendChild(style);
    const box = doc.createElement("section");
    box.className = "kyro-live-transcript";
    box.setAttribute("data-kyro-live-transcript", "true");
    box.setAttribute("role", "log");
    box.setAttribute("aria-live", "off"); // (the page already speaks and announces what matters; this is for the eyes)
    box.setAttribute("aria-label", words.name);
    box.hidden = true;
    const close = doc.createElement("button");
    close.type = "button"; close.textContent = words.hide; close.setAttribute("aria-label", words.hide);
    const rows = doc.createElement("ol");
    box.append(close, rows);
    (doc.body || doc.documentElement).appendChild(box);
    let timer = null;
    let dismissedAt = 0;

    function draw() {
      rows.replaceChildren();
      log.turns().forEach((turn, index, all) => {
        const item = doc.createElement("li");
        item.className = `${turn.who}${!turn.final && index === all.length - 1 ? " live" : ""}`;
        const who = doc.createElement("b"); who.textContent = words[turn.who];
        const text = doc.createElement("span"); text.textContent = turn.text;
        item.append(who, text);
        rows.appendChild(item);
      });
      try { box.scrollTop = box.scrollHeight; } catch { /* a scroll position is not needed */ }
    }
    function schedule() {
      if (timer) clearTimeout(timer);
      box.classList.remove("is-fading");
      timer = setTimeout(() => {
        box.classList.add("is-fading");
        timer = setTimeout(() => { box.hidden = true; log.clear(); rows.replaceChildren(); }, hideAfterMs);
        if (timer && typeof timer.unref === "function") timer.unref(); // (in a test run the fade must not keep the process alive)
      }, hideAfterMs);
      if (timer && typeof timer.unref === "function") timer.unref();
    }
    function noteEvent(type, payload) {
      const changed = log.noteEvent(type, payload || {}, Date.now());
      if (!changed) return false;
      draw();
      // a person who hid it keeps it hidden until the next sentence of their own
      if (!dismissedAt || /input_audio_transcription\.delta$/.test(String(type))) { box.hidden = false; dismissedAt = 0; schedule(); }
      return true;
    }
    close.addEventListener("click", () => { dismissedAt = Date.now(); box.hidden = true; if (timer) clearTimeout(timer); });
    return { noteEvent, show: () => { box.hidden = false; schedule(); }, hide: () => { box.hidden = true; }, element: box, log };
  }

  return Object.freeze({ createLog, create, MAX_TURNS, HIDE_AFTER_MS });
});
