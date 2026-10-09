// Kyro dismiss commands: understands "close the weather card", "close out the weather information", "dismiss that", "hide the map", "clear the screen", "go back to the orb",
// "take me home", "I'm done", "that's all" and the Kiswahili forms ("funga kadi ya hali ya hewa", "rudi kwenye orb", "nimemaliza"), typed or spoken.
//
// Found by using the product: "close the weather card" was read as a WEATHER request (any sentence that mentions the weather opened the Live Knowledge window), and "close it",
// "close the card" and "go back to the orb" were understood by nothing, so the answer stayed on the screen. This file is the one place that knows what a dismissal sounds like; the page
// checks it BEFORE any other reading of a sentence, and the server checks it before running a tool, so a request to close can never open, search or ask a question instead.
//
// parse(text) -> null | { kind: "close" | "home" | "done", lang: "en" | "sw" }
//   close: take down what is on the screen   home: go back to the orb   done: the person has finished (same result: back to the orb)
// A dismissal is only ever a WHOLE sentence about the screen ("close my account", "close report 12", "clear my shopping list" and "remove milk from my list" are not dismissals).
// The Kiswahili is a first draft: a fluent speaker must review it.
//
// shouldAutoReturn(snapshot, now) -> true when nothing has happened for a while, nobody is talking or typing, and something other than the orb is on the screen.
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.KyroDismissCommands = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const AUTO_RETURN_MS = 30000;   // how long a finished answer may stay on the screen with nobody touching or saying anything
  const AUTO_RETURN_RETRY_MS = 10000; // how long to wait again when it was a bad moment (someone is speaking or typing)

  function normalise(text) {
    let value = String(text == null ? "" : text).toLowerCase().replace(/[‘’]/g, "'").replace(/\s+/g, " ").trim();
    value = value.replace(/^(?:(?:hey|ok|okay|hi|hello)\s+)?(?:kyro|nexus|agrinexus)\b[\s,:;!-]*/i, "");
    for (let i = 0; i < 3; i += 1) {
      value = value.replace(/^(?:(?:please|kindly|tafadhali|okay|ok|alright|yes|and|so|well|now|just|then)[\s,]+)+/i, "")
        .replace(/^(?:(?:can|could|would|will) you\s+(?:please\s+)?|i (?:want|would like|need|'d like) you to\s+|i (?:want|need) to\s+|go ahead and\s+|let's\s+|lets\s+)/i, "");
    }
    value = value.replace(/[.!?¡¿]+$/g, "").trim();
    // ("for now" is part of "done for now", so a bare trailing "now" is only dropped when it is not "for now")
    for (let i = 0; i < 3; i += 1) value = value.replace(/[\s,]+(?:please|thanks|thank you|for me|tafadhali|asante|sasa|kyro)$/i, "").replace(/(?<!\bfor)[\s,]+now$/i, "").trim();
    return value.replace(/\bpop[- ]?up\b/g, "popup").replace(/\bto-?dos\b/g, "todos");
  }

  // ---- English: take down what is on the screen -------------------------------------------------------------------------------------------------------------------------------
  const CLOSE_VERB = "(?:close(?: out| down)?|dismiss|hide|shut(?: down| away)?|exit|put away|get rid of|take away|remove|clear)";
  // words that may appear in "the weather card": things that are on a screen, and the topics a card can be about (never a person's own records: list, report, account, order, debt, note...)
  const SCREEN_NOUN = new Set(["card", "cards", "window", "windows", "panel", "panels", "workspace", "screen", "page", "popup", "result", "results", "answer", "answers", "info", "information",
    "details", "chart", "view", "display", "notice", "section", "workflow", "conversation", "weather", "forecast", "map", "maps", "route", "directions"]);
  const TOPIC_WORD = new Set(["the", "this", "that", "my", "these", "those", "a", "an", "all", "any", "of", "current", "live", "knowledge", "research", "search", "health", "farm", "crop", "agriculture", "market",
    "marketplace", "job", "jobs", "learning", "training", "clinic", "pharmacy", "temperature", "nexus", "kyro", "open", "opened", "last", "latest", "new", "other", "one", "here", "out"]);
  // with a bare "it/this/that" only the unambiguous verbs count ("remove it" or "clear everything" could mean a person's own records)
  const PRONOUN_VERB = "(?:close(?: out| down)?|dismiss|hide|shut(?: down| away)?|put away|get rid of)";
  const PRONOUN_CLOSE = new RegExp(`^${PRONOUN_VERB}\\s+(?:it|this|that|these|those|this one|that one|all of (?:it|this|that)|everything|all|them)(?:\\s+(?:up|down|out|away|for me))?$`);
  const NOUN_CLOSE = new RegExp(`^${CLOSE_VERB}\\s+(.+)$`);

  function isScreenPhrase(tail) {
    const words = tail.split(" ").filter(Boolean);
    if (!words.length || words.length > 5) return false;
    let nouns = 0;
    for (const word of words) {
      if (SCREEN_NOUN.has(word)) nouns += 1;
      else if (!TOPIC_WORD.has(word)) return false;
    }
    return nouns >= 1;
  }

  // ---- English: go back to the orb --------------------------------------------------------------------------------------------------------------------------------------------
  const HOME_WORDS = "(?:orb|home screen|home page|home|main screen|start screen|main menu|beginning)";
  const HOME = [
    new RegExp(`^(?:(?:go|get|come|head|take me|bring me|take us|send me|switch|return|put it|take it) )?back(?: (?:to|on|into|at))?(?: the)? ${HOME_WORDS}$`),
    new RegExp(`^(?:go|head|return|come|take me|bring me|get me|send me|switch)(?: back)?(?: to)?(?: the)? ${HOME_WORDS}$`),
    /^(?:show|give|leave) (?:me )?(?:just )?(?:the )?orb(?: only| alone)?$/,
    /^(?:just|only) the orb$/,
    /^(?:clear|close|reset)(?: out)?(?: the| my)? screen(?: and (?:go )?(?:back|home))?$/
  ];

  // ---- English: I am finished -------------------------------------------------------------------------------------------------------------------------------------------------
  const DONE = [
    /^(?:i(?: am|'m)|we(?: are|'re)) (?:all )?(?:done|finished)(?: for now| here| now| with (?:this|that|it|the \w+(?: \w+)?))?$/,
    /^(?:that(?:'s| is)|this is) (?:all|it|enough)(?: for now| for today)?$/,
    /^(?:that will be|that'll be) all(?: for now)?$/,
    /^all (?:done|finished)(?: here| now)?$/,
    /^(?:done|finished) for now$/,
    /^(?:i have|i've) (?:got|had) (?:what i need|everything i need|enough)$/,
    /^(?:no )?(?:thanks|thank you),? (?:that(?:'s| is) (?:all|it|enough)|i(?:'m| am) (?:done|good))$/
  ];

  // ---- Kiswahili (first draft) -------------------------------------------------------------------------------------------------------------------------------------------------
  const SW_CLOSE = new RegExp(`^(?:funga|ondoa|ficha|zima)\\s+(.+)$`);
  const SW_SCREEN = new Set(["kadi", "kadi ya hali ya hewa", "dirisha", "skrini", "ukurasa", "ramani", "hali", "ya", "hewa", "taarifa", "majibu", "jibu", "hii", "hiyo", "hizo", "yote", "kila", "kitu", "habari", "matokeo", "paneli", "workspace"]);
  const SW_HOME = [
    /^(?:rudi|nenda|nirudishe|turudi)(?: nyuma)?(?: kwenye| kwa| nyumbani kwa| katika)? ?(?:orb|nyumbani|skrini kuu|mwanzo|ukurasa wa mwanzo)$/,
    /^nirudishe(?: kwenye| nyumbani)? ?(?:orb|nyumbani)?$/,
    /^orb tu$/
  ];
  const SW_DONE = [/^(?:nimemaliza|tumemaliza|nimeshamaliza|nimemaliza sasa)$/, /^(?:ni )?hayo(?: tu| ndiyo yote)$/, /^basi(?: tu)?$/];

  function parse(text) {
    const value = normalise(text);
    if (!value || value.length > 90) return null;
    // Kiswahili
    let m;
    if ((m = SW_CLOSE.exec(value))) {
      const tail = m[1].trim(); const words = tail.split(" ");
      if (words.length <= 6 && words.every(word => SW_SCREEN.has(word))) return { kind: "close", lang: "sw" };
    }
    if (SW_HOME.some(re => re.test(value))) return { kind: "home", lang: "sw" };
    if (SW_DONE.some(re => re.test(value))) return { kind: "done", lang: "sw" };
    // English
    if (PRONOUN_CLOSE.test(value)) return { kind: "close", lang: "en" };
    if ((m = NOUN_CLOSE.exec(value)) && isScreenPhrase(m[1].trim())) return { kind: "close", lang: "en" };
    if (HOME.some(re => re.test(value))) return { kind: "home", lang: "en" };
    if (DONE.some(re => re.test(value))) return { kind: "done", lang: "en" };
    return null;
  }

  // ---- when to go back to the orb by itself -------------------------------------------------------------------------------------------------------------------------------------
  // snapshot: { userMode, answerShowing, workOpen, lastActivityAt, assistantSpeaking, userSpeaking, focusInField, pendingConfirmation, intakeActive }
  // "activity" is anything that means the person is still there: a touch, a key, speech, a new answer arriving.
  // It only ever clears a FINISHED ANSWER (a weather card, a research answer, an answer left on the home screen). Work the person is in (a function window, the map, a form, navigation) is never closed by itself.
  function shouldAutoReturn(snapshot, now) {
    const s = snapshot || {};
    if (!s.userMode || !s.answerShowing) return { go: false, retryMs: 0 };
    if (s.workOpen) return { go: false, retryMs: AUTO_RETURN_RETRY_MS };
    if (s.assistantSpeaking || s.userSpeaking || s.focusInField || s.pendingConfirmation || s.intakeActive) return { go: false, retryMs: AUTO_RETURN_RETRY_MS };
    const quietFor = Number(now) - Number(s.lastActivityAt || 0);
    if (!(quietFor >= AUTO_RETURN_MS)) return { go: false, retryMs: Math.max(1000, AUTO_RETURN_MS - Math.max(0, quietFor)) };
    return { go: true, retryMs: 0 };
  }

  return Object.freeze({ parse, shouldAutoReturn, normalise, AUTO_RETURN_MS, AUTO_RETURN_RETRY_MS });
});
