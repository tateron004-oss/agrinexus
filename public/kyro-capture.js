// Kyro capture: "look at this", "what is wrong with this plant", "read this letter", "take a photo of this". The way to ask about a photo or a paper used to be an Upload button. Now Kyro opens the camera, says to hold it up,
// counts down and takes the picture; the caller uploads it and asks the question about it. If the camera cannot be opened (no camera, permission refused, an old browser) it says so and offers to choose a photo instead.
//
//   isLookRequest(text) -> boolean      "look at this", "what is wrong with this leaf", "read this label", "take a photo"; not "find a picture of ..." (that is a search) and not a question about photos
//   open(doc, nav, handlers, options) -> controller   draws section[data-kyro-capture] with a live preview, a three-second countdown, and calls handlers.onPhoto(blob) / onCancel() / onUnavailable(reason)
//   remove(doc)
//   TEXT
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.KyroCapture = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const TEXT = {
    en: { hold: "Hold it up to the camera. I will take the picture in", go: "Taking the picture", close: "Close", noCamera: "I can't open the camera here. Choose a photo instead.", choose: "Choose a photo", looking: "Looking at it now.", seconds: n => `${n}` },
    sw: { hold: "Ishike mbele ya kamera. Nitapiga picha baada ya", go: "Napiga picha", close: "Funga", noCamera: "Siwezi kufungua kamera hapa. Chagua picha badala yake.", choose: "Chagua picha", looking: "Naiangalia sasa.", seconds: n => `${n}` }
  };
  const t = lang => TEXT[lang === "sw" ? "sw" : "en"];

  const clean = value => String(value == null ? "" : value).replace(/[’]/g, "'").replace(/\s+/g, " ").trim();
  const WAKE = /^(?:(?:hey|hi|hello|ok(?:ay)?)[, ]+)?(?:(?:kyro|kiro|kairo|cairo|nexus)[, ]+)?(?:(?:please|can you|could you|kindly)[, ]+)*/i;
  const THING = "(?:photo|picture|image|document|paper|letter|label|leaf|leaves|plant|crop|fruit|tomato|maize|cob|seed|insect|bug|pest|animal|cow|goat|hen|chicken|wound|rash|medicine|tablet|pill|bottle|receipt|form|page|sign|bill)";
  const LOOK = new RegExp(`^(?:look at|check|scan|identify|analy[sz]e|examine|inspect|read|describe|translate|tell me about|what(?:'s| is| does)|what's wrong with|is there (?:something|anything) wrong with|take a (?:photo|picture)(?: of)?|snap|show you|let me show you)\\b[^.?!]{0,50}\\b(?:this|that|these|those|it|something|here)\\b`, "i");
  const LOOK_THING = new RegExp(`\\b(?:this|that|these|those)\\s+(?:\\w+\\s+)?${THING}\\b`, "i");
  const LOOK_CAMERA = /\b(?:take a (?:photo|picture)|use (?:the |my )?camera|open (?:the |my )?camera|show you (?:something|this)|let me show you|scan this|look at this)\b/i;
  const NOT = /^(?:how|why|when|where|who|which)\b|\b(?:find|search|google|show me|pictures? of|photos? of|images? of|videos?)\b|\b(?:what is a|what are)\b/i;
  function isLookRequest(text) {
    const value = clean(text).replace(WAKE, "").trim();
    if (!value || value.split(" ").length > 20) return false;
    if (/^(?:how|why|when|where|who|which)\b/i.test(value)) return false; // a question about photos, not a request to take one
    if (NOT.test(value) && !LOOK_CAMERA.test(value)) return false;
    return LOOK_CAMERA.test(value) || (LOOK.test(value) && LOOK_THING.test(value)) || /^(?:what(?:'s| is) wrong with (?:this|my|the) \w+(?: \w+)?|what is (?:this|that) (?:plant|leaf|insect|bug|pest|animal|disease)|what does (?:this|it) say)\??$/i.test(value);
  }

  const STYLE_ID = "kyro-capture-style";
  const STYLE = `
[data-kyro-capture] { position: fixed; inset: 0; z-index: 2147482600; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 18px; padding: 24px; box-sizing: border-box; background: #080b10; color: #f1f5f9; font-family: inherit; text-align: center; }
[data-kyro-capture] video { width: min(100%, 520px); max-height: 56vh; border-radius: 18px; background: #000; object-fit: cover; }
[data-kyro-capture] .kyro-capture-line { margin: 0; font-size: clamp(1.2rem, 4.5vw, 1.8rem); font-weight: 600; max-width: 22em; color: #f1f5f9; }
[data-kyro-capture] .kyro-capture-count { font-size: clamp(3rem, 14vw, 5rem); font-weight: 700; line-height: 1; color: #e2e8f0; }
[data-kyro-capture] .kyro-capture-choose { padding: 14px 20px; border: 0; border-radius: 14px; background: rgba(255,255,255,.12); color: #f8fafc; font: inherit; font-size: 1.1rem; cursor: pointer; }
[data-kyro-capture] .kyro-capture-close { position: absolute; top: 12px; right: 12px; width: 44px; height: 44px; padding: 0; border: 0; border-radius: 50%; background: rgba(255,255,255,.10); color: #f1f5f9; font-size: 1.7rem; line-height: 1; cursor: pointer; }
`;

  function el(doc, tag, className, text) { const node = doc.createElement(tag); if (className) node.className = className; if (text) node.textContent = text; return node; }

  function remove(doc) {
    if (!doc || typeof doc.querySelectorAll !== "function") return false;
    const found = doc.querySelectorAll("[data-kyro-capture]");
    for (let i = 0; i < found.length; i += 1) found[i].remove();
    return found.length > 0;
  }

  // nav: navigator (nav.mediaDevices.getUserMedia). options: { lang, seconds (default 3), wait (default setTimeout), maxSide (default 1280) }
  function open(doc, nav, handlers = {}, options = {}) {
    if (!doc || !doc.body) return null;
    remove(doc);
    const lang = options.lang === "sw" ? "sw" : "en";
    const seconds = Number.isFinite(options.seconds) ? options.seconds : 3;
    const wait = typeof options.wait === "function" ? options.wait : (fn, ms) => setTimeout(fn, ms);
    if (!doc.getElementById(STYLE_ID)) { const style = doc.createElement("style"); style.id = STYLE_ID; style.textContent = STYLE; (doc.head || doc.body).appendChild(style); }
    const screen = doc.createElement("section");
    screen.setAttribute("data-kyro-capture", "true"); screen.setAttribute("role", "dialog"); screen.setAttribute("aria-live", "polite"); screen.setAttribute("aria-label", "Camera");
    const video = el(doc, "video"); video.setAttribute("playsinline", "true"); video.muted = true; video.autoplay = true;
    const line = el(doc, "p", "kyro-capture-line", ""); const count = el(doc, "div", "kyro-capture-count", "");
    const close = el(doc, "button", "kyro-capture-close", "×"); close.type = "button"; close.setAttribute("aria-label", t(lang).close);
    screen.appendChild(video); screen.appendChild(line); screen.appendChild(count); screen.appendChild(close);
    doc.body.appendChild(screen);

    let stream = null; let finished = false;
    const stopStream = () => { try { stream && stream.getTracks && stream.getTracks().forEach(track => track.stop()); } catch { /* already stopped */ } stream = null; };
    const finish = () => { finished = true; stopStream(); remove(doc); };
    close.addEventListener("click", () => { if (finished) return; finish(); if (typeof handlers.onCancel === "function") handlers.onCancel(); });

    // Camera not available: say so and offer to choose a photo (the one control on this screen, only when there is no camera)
    const unavailable = reason => {
      if (finished) return;
      stopStream();
      video.setAttribute("hidden", "true"); count.textContent = "";
      line.textContent = t(lang).noCamera;
      const choose = el(doc, "button", "kyro-capture-choose", t(lang).choose); choose.type = "button";
      choose.addEventListener("click", () => { if (finished) return; finish(); if (typeof handlers.onFile === "function") handlers.onFile(); });
      screen.appendChild(choose);
      if (typeof handlers.onUnavailable === "function") handlers.onUnavailable(reason);
    };

    const takePicture = () => {
      if (finished) return;
      line.textContent = t(lang).go; count.textContent = "";
      const width = Number(video.videoWidth) || 0; const height = Number(video.videoHeight) || 0;
      const maxSide = options.maxSide || 1280; const scale = width && height ? Math.min(1, maxSide / Math.max(width, height)) : 1;
      const canvas = doc.createElement("canvas"); canvas.width = Math.max(1, Math.round((width || 640) * scale)); canvas.height = Math.max(1, Math.round((height || 480) * scale));
      try {
        const ctx = canvas.getContext("2d"); ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(blob => {
          if (finished) return;
          if (!blob) { unavailable("no-image"); return; }
          finish(); if (typeof handlers.onPhoto === "function") handlers.onPhoto(blob);
        }, "image/jpeg", 0.85);
      } catch { unavailable("capture-failed"); }
    };

    const countDown = remaining => {
      if (finished) return;
      if (remaining <= 0) { takePicture(); return; }
      count.textContent = t(lang).seconds(remaining);
      wait(() => countDown(remaining - 1), 1000);
    };

    const getUserMedia = nav && nav.mediaDevices && typeof nav.mediaDevices.getUserMedia === "function" ? nav.mediaDevices.getUserMedia.bind(nav.mediaDevices) : null;
    if (!getUserMedia) { unavailable("no-camera"); return { cancel: finish }; }
    line.textContent = `${t(lang).hold} ${seconds}.`;
    getUserMedia({ video: { facingMode: { ideal: "environment" } }, audio: false }).then(media => {
      if (finished) { try { media.getTracks().forEach(track => track.stop()); } catch { /* ignore */ } return; }
      stream = media; video.srcObject = media;
      try { const played = video.play && video.play(); if (played && played.catch) played.catch(() => {}); } catch { /* the preview may start by itself */ }
      countDown(seconds);
    }).catch(error => unavailable(error && error.name ? String(error.name) : "refused"));
    return { cancel: finish };
  }

  return Object.freeze({ isLookRequest, open, remove, TEXT });
});
