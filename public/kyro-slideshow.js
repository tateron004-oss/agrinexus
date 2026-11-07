(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.KyroSlideshow = api;
})(typeof window !== "undefined" ? window : globalThis, function () {
  "use strict";

  // A SLIDESHOW VIDEO of a flyer, poster, newsletter or post: its headline and key lines over its pictures, one slide at a time, with the pictures' credits at the end.
  // It is made on the person's OWN device (a canvas is drawn and recorded by the browser), so it costs the server nothing, needs no paid video service, and nothing is uploaded.
  // The video has no sound. The recording runs in real time (a 25-second video takes 25 seconds) and the page must stay open while it runs.
  //
  // buildSlides({ title, text, pictures }) -> [{ kind: "title"|"text"|"credits", lines, picture, seconds }]   (pure: what goes on each slide)
  // wrapLines(measure, text, maxWidth) -> [line]                                                              (pure: breaks a sentence into lines that fit)
  // pickMimeType(MediaRecorderLike) -> "video/mp4;..." | "video/webm;..." | ""                              (mp4 where the browser can, because phones and WhatsApp take it)
  // canMakeVideo(windowLike) -> boolean
  // makeVideo({ slides, loadPicture, width, height, onProgress, windowLike }) -> Promise<{ blob, mime, ext, seconds }>

  const MAX_SLIDES = 8;
  const TITLE_SECONDS = 3.5;
  const TEXT_SECONDS = 4;
  const CREDIT_SECONDS = 3.5;
  const FADE_SECONDS = 0.5;
  const FPS = 30;

  const squeeze = value => String(value || "").replace(/\s+/g, " ").trim();
  // lines the flyer carries for the person to fill in or delete are not for a video
  const NOT_FOR_VIDEO = /\[[^\]]*\]|^made by kyro\b|\bfill in each\b|\bdelete this line\b|^picture:|^pictures?:|^\s*[-=_*]{3,}\s*$/i;
  const KEYED = /^[A-Za-z][A-Za-z '-]{0,24}:\s+\S/;

  function wrapLines(measure, text, maxWidth) {
    const words = squeeze(text).split(" ").filter(Boolean);
    const lines = []; let line = "";
    for (const word of words) {
      const next = line ? `${line} ${word}` : word;
      if (line && measure(next) > maxWidth) { lines.push(line); line = word; } else line = next;
    }
    if (line) lines.push(line);
    return lines;
  }

  function buildSlides({ title = "", text = "", pictures = [] } = {}) {
    const kept = String(text || "").split(/\r?\n/).map(squeeze).filter(line => line && !NOT_FOR_VIDEO.test(line));
    const pics = (Array.isArray(pictures) ? pictures : []).filter(item => item && Number.isFinite(Number(item.n))).slice(0, 3);
    const headline = kept.length && !KEYED.test(kept[0]) ? kept.shift() : squeeze(title) || "Kyro";
    const details = kept;
    const pictureFor = index => (pics.length ? pics[index % pics.length] : null);
    const slides = [{ kind: "title", lines: [headline], picture: pictureFor(0), seconds: TITLE_SECONDS }];
    // every few lines on a slide of their own: at most MAX_SLIDES in all, the title and the credits included
    const credits = [...new Set(pics.map(item => squeeze(item.credit)).filter(Boolean))].slice(0, 3);
    const room = MAX_SLIDES - 1 - (credits.length ? 1 : 0);
    const size = Math.max(3, Math.ceil(details.length / Math.max(1, room)));
    for (let start = 0; start < details.length && slides.length - 1 < room; start += size) {
      slides.push({ kind: "text", lines: details.slice(start, start + size), picture: pictureFor(slides.length), seconds: TEXT_SECONDS });
    }
    if (credits.length) slides.push({ kind: "credits", lines: credits, picture: null, seconds: CREDIT_SECONDS });
    return slides;
  }

  function totalSeconds(slides) { return slides.reduce((sum, slide) => sum + slide.seconds, 0); }

  function pickMimeType(recorder) {
    const choices = ["video/mp4;codecs=avc1.42E01E", "video/mp4", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"];
    for (const type of choices) { try { if (recorder && recorder.isTypeSupported && recorder.isTypeSupported(type)) return type; } catch { /* the next type is tried */ } }
    return "";
  }

  function canMakeVideo(win = typeof window !== "undefined" ? window : null) {
    try {
      if (!win || typeof win.MediaRecorder !== "function" || !win.document) return false;
      const canvas = win.document.createElement("canvas");
      return typeof canvas.captureStream === "function" && Boolean(pickMimeType(win.MediaRecorder));
    } catch { return false; }
  }

  // ---- drawing (browser only) ----
  function coverImage(ctx, image, width, height) {
    const scale = Math.max(width / image.width, height / image.height);
    const w = image.width * scale; const h = image.height * scale;
    ctx.drawImage(image, (width - w) / 2, (height - h) / 2, w, h);
  }

  function drawSlide(ctx, slide, image, width, height, textScale) {
    if (image) {
      ctx.globalAlpha = ctx.globalAlpha; coverImage(ctx, image, width, height);
      ctx.fillStyle = slide.kind === "title" ? "rgba(0,0,0,.42)" : "rgba(0,0,0,.55)"; ctx.fillRect(0, 0, width, height);
    } else {
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#0f3d3e"); gradient.addColorStop(1, "#1e5f8a");
      ctx.fillStyle = gradient; ctx.fillRect(0, 0, width, height);
    }
    const base = Math.round(Math.min(width, height) * 0.075 * textScale);
    const isTitle = slide.kind === "title";
    const size = isTitle ? Math.round(base * 1.5) : slide.kind === "credits" ? Math.round(base * 0.55) : base;
    ctx.font = `${isTitle ? "800" : slide.kind === "credits" ? "400" : "600"} ${size}px "Segoe UI", Roboto, Arial, sans-serif`;
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillStyle = "#ffffff"; ctx.shadowColor = "rgba(0,0,0,.6)"; ctx.shadowBlur = Math.round(size * 0.18);
    const maxWidth = width * 0.84;
    const lines = [];
    for (const line of slide.lines) lines.push(...wrapLines(value => ctx.measureText(value).width, line, maxWidth));
    const lineHeight = Math.round(size * 1.3);
    const top = height / 2 - ((lines.length - 1) * lineHeight) / 2;
    lines.forEach((line, index) => ctx.fillText(line, width / 2, top + index * lineHeight));
    ctx.shadowBlur = 0;
  }

  function makeVideo({ slides, loadPicture, width = 1280, height = 720, onProgress = () => {}, windowLike = typeof window !== "undefined" ? window : null } = {}) {
    return new Promise(async (resolve, reject) => {
      try {
        if (!canMakeVideo(windowLike)) { reject(new Error("This browser cannot make a video. Try Chrome, Edge, Firefox or Safari on a recent phone or computer.")); return; }
        if (!Array.isArray(slides) || !slides.length) { reject(new Error("There is nothing to put in a video yet.")); return; }
        const images = [];
        for (const slide of slides) {
          let image = null;
          if (slide.picture && typeof loadPicture === "function") { try { image = await loadPicture(slide.picture); } catch { image = null; } }
          images.push(image);
        }
        const canvas = windowLike.document.createElement("canvas"); canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext("2d");
        const textScale = height > width ? 0.8 : 1;
        const mime = pickMimeType(windowLike.MediaRecorder);
        const recorder = new windowLike.MediaRecorder(canvas.captureStream(FPS), { mimeType: mime, videoBitsPerSecond: 2500000 });
        const chunks = [];
        recorder.ondataavailable = event => { if (event.data && event.data.size) chunks.push(event.data); };
        const total = totalSeconds(slides);
        const starts = []; let at = 0; for (const slide of slides) { starts.push(at); at += slide.seconds; }
        const paint = seconds => {
          let index = starts.length - 1; while (index > 0 && starts[index] > seconds) index -= 1;
          const local = seconds - starts[index];
          ctx.globalAlpha = 1; drawSlide(ctx, slides[index], images[index], width, height, textScale);
          const left = slides[index].seconds - local;
          if (index + 1 < slides.length && left < FADE_SECONDS) { ctx.globalAlpha = 1 - left / FADE_SECONDS; drawSlide(ctx, slides[index + 1], images[index + 1], width, height, textScale); ctx.globalAlpha = 1; }
        };
        recorder.onstop = () => {
          const type = mime.split(";")[0] || "video/webm";
          resolve({ blob: new Blob(chunks, { type }), mime: type, ext: /mp4/.test(type) ? "mp4" : "webm", seconds: Math.round(total) });
        };
        recorder.onerror = () => reject(new Error("The video could not be recorded."));
        paint(0); recorder.start(250);
        const began = Date.now();
        const timer = setInterval(() => {
          const seconds = (Date.now() - began) / 1000;
          if (seconds >= total) { clearInterval(timer); paint(total - 0.01); try { recorder.stop(); } catch { /* already stopped */ } onProgress(1); return; }
          paint(seconds); onProgress(seconds / total);
        }, 1000 / FPS);
      } catch (error) { reject(error instanceof Error ? error : new Error("The video could not be made.")); }
    });
  }

  return Object.freeze({ MAX_SLIDES, buildSlides, totalSeconds, wrapLines, pickMimeType, canMakeVideo, makeVideo });
});
