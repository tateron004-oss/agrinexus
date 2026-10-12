// Kyro accessibility by voice: "make the text bigger", "turn on high contrast", "stop the animations", "screen reader mode on". The four display options (large text, high contrast, reduced motion, screen reader
// mode) used to be buttons only. Said or typed, they now work: nothing to find, nothing to tap.
//
//   parse(text) -> null | { key, on }      key: "largeText" | "highContrast" | "reducedMotion" | "screenReader"; on: true, false, or null (toggle: "make the text bigger" is on, "make it smaller" is off)
//   reply(command, lang) -> string         what Kyro says back, e.g. "Large text is on."
//   TEXT
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.KyroAccessibilityCommands = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const TEXT = {
    en: { largeText: "Large text", highContrast: "High contrast", reducedMotion: "Reduced motion", screenReader: "Screen reader mode", on: "on", off: "off" },
    sw: { largeText: "Maandishi makubwa", highContrast: "Utofautishaji wa juu", reducedMotion: "Mwendo uliopunguzwa", screenReader: "Hali ya kisoma-skrini", on: "imewashwa", off: "imezimwa" }
  };

  const clean = value => String(value || "").toLowerCase().replace(/[.!?,]+/g, " ").replace(/\s+/g, " ").trim();
  const OFF = /\b(?:turn off|switch off|disable|stop|remove|cancel|normal)\b|\b(?:smaller|normal size)\b|\boff$/;
  const ON = /\b(?:turn on|switch on|enable|start|use)\b|\bon$/;

  function parse(text) {
    const t = clean(text);
    if (!t || t.length > 90) return null;
    if (/^(?:what|why|who|when|where|which)\b/.test(t)) return null; // a question about it, not a request
    let key = null; let on = null;
    if (/\b(?:larger|bigger|large|big|huge|increase)\b.*\b(?:text|font|letters|writing|print)\b|\b(?:text|font|letters|writing|print)\b.*\b(?:larger|bigger|large|big)\b|\bmaandishi makubwa\b|\bandika kubwa\b/.test(t)) { key = "largeText"; on = true; }
    if (/\b(?:smaller|normal size|regular size)\b.*\b(?:text|font|letters|writing|print)\b|\b(?:text|font|letters|writing|print)\b.*\b(?:smaller|normal size)\b/.test(t)) { key = "largeText"; on = false; }
    if (/\bhigh contrast\b|\bmore contrast\b|\bcontrast\b.*\b(?:on|off|up)\b|\butofautishaji\b/.test(t)) { key = "highContrast"; on = null; }
    if (/\b(?:reduce|reduced|less|stop|no)\b.*\b(?:motion|animation|animations|movement|moving)\b|\b(?:motion|animations?)\b.*\b(?:off|less|reduce)\b|\bmwendo mdogo\b/.test(t)) { key = "reducedMotion"; on = true; }
    if (/\bscreen reader\b|\bread (?:the )?screen (?:to me|aloud)\b|\bkisoma[- ]skrini\b/.test(t)) { key = "screenReader"; on = null; }
    if (!key) return null;
    // high contrast and the screen reader are named in other sentences too: a request has a verb, a mode word, or is just the name
    if ((key === "highContrast" || key === "screenReader") && !/\b(?:turn|switch|enable|disable|use|start|stop|put|set|want|need|please|mode|on|off)\b/.test(t) && t.split(" ").length > 4) return null;
    // a sentence that only says the person uses one ("I use a screen reader at work") is not a request to switch it on
    if (/^i (?:use|used|am using|have|had)\b/.test(t) && !/\b(?:now|today|please|turn|switch|enable)\b/.test(t)) return null;
    // an explicit on or off, said or implied, decides; otherwise the option is switched the other way from how it is
    if (key === "largeText" && on === false) return { key, on: false };
    if (OFF.test(t) && !/\bstop\b.*\b(?:motion|animation|animations|movement)\b/.test(t) && !/\bno\b.*\b(?:motion|animation|animations|movement)\b/.test(t)) return { key, on: false };
    if (ON.test(t)) return { key, on: true };
    return { key, on };
  }

  function reply(key, on, lang) {
    const t = TEXT[lang === "sw" ? "sw" : "en"];
    return lang === "sw" ? `${t[key]} ${on ? t.on : t.off}.` : `${t[key]} is ${on ? t.on : t.off}.`;
  }

  return Object.freeze({ parse, reply, TEXT });
});
