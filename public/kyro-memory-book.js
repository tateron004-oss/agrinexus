// A MEMORY BOOK: short true memories that a person, or someone in their trusted circle whom they chose, writes down so that Kyro can read them back, in the writer's own words. It was asked for by the owner for older people, including
// those living with dementia, as a calm place that holds their own life. This file only READS what was said (the same words are used by the server, which stores and reads the book, and by the page, which takes such a turn itself instead of
// leaving it to the voice model: a voice model that is asked for "a memory" will invent one, and an invented memory told to a person with dementia is harm). It stores nothing and answers nothing.
//
// readMemoryBookRequest(text) -> { action: "add", who: null | "<name>", text } | { action: "read" } | { action: "read-about", about } | { action: "list" } | { action: "remove", about, who: null | "<name>" }
//                              | { action: "allow", who } | { action: "disallow", who } | { action: "allowed" } | { action: "help" } | null
// "tell me a story" on its own is NOT taken (that is a request for a made-up story); only "a memory", or a story "from my life" or "from my memory book".
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.KyroMemoryBook = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const MAX_ENTRY = 1500;
  const clean = value => String(value ?? "").replace(/\s+/g, " ").trim();
  const BOOK = "memory\\s*book";
  const APOS = "(?:'s|’s|s'|s’)";
  // the words before the colon: add / put / save / write (this | a memory | the following) to / in / into
  const ADD = "(?:please\\s+)?(?:add|put|save|write)\\s+(?:(?:this|that|the following|a memory|a story|something)\\s+)?(?:to|in|into)\\s+";

  function readMemoryBookRequest(text) {
    const raw = String(text ?? "").replace(/\r\n?/g, "\n").trim();
    if (!raw || raw.length > 8000) return null; // (a memory over MAX_ENTRY is still read as an add, so that Kyro can say it is too long and save nothing)
    let m;
    // adding: the memory itself follows, and may be long and may have several sentences, so it is read from the raw text (kept as written)
    if ((m = new RegExp(`^${ADD}my\\s+${BOOK}\\s*[:,\\-–—]?\\s*([\\s\\S]+)$`, "i").exec(raw))) return { action: "add", who: null, text: m[1].trim() };
    if ((m = new RegExp(`^${ADD}([A-Za-z][\\w .'’-]{0,40}?)${APOS}\\s+${BOOK}\\s*[:,\\-–—]?\\s*([\\s\\S]+)$`, "i").exec(raw)) && !/^my$/i.test(clean(m[1]))) return { action: "add", who: clean(m[1]), text: m[2].trim() };
    const t = clean(raw).replace(/[’]/g, "'").replace(/[.!?]+$/g, "");
    if (t.length > 160) return null;
    const lower = t.toLowerCase();
    // "add to my memory book" with nothing after it: Kyro asks what to add
    if (new RegExp(`^(?:please )?(?:add|put|save|write)(?: (?:this|a memory|a story|something))? (?:to|in|into) my ${BOOK}$`).test(lower)) return { action: "add", who: null, text: "" };
    if ((m = new RegExp(`^(?:please )?(?:add|put|save|write)(?: (?:this|a memory|a story|something))? (?:to|in|into) (.+?)(?:'s|s') ${BOOK}$`).exec(lower)) && m[1] !== "my") return { action: "add", who: clean(m[1]), text: "" };
    if (new RegExp(`^(?:please )?(?:tell|read|give|play)(?: me)?(?: (?:a|one|another|the next|a different)) (?:memory|memories)(?: from my ${BOOK})?$`).test(lower)
      || new RegExp(`^(?:please )?(?:tell|read) me (?:a|one|another) (?:story|memory) from (?:my life|my ${BOOK})$`).test(lower)
      || new RegExp(`^(?:please )?(?:read|open|play)(?: me)? my ${BOOK}$`).test(lower)
      || new RegExp(`^(?:please )?(?:tell|read) me something from my ${BOOK}$`).test(lower)
      || /^(?:another|next|one more|a different) memory$/.test(lower) || /^(?:read|tell) me (?:another|the next|one more) memory$/.test(lower)) return { action: "read" };
    if ((m = new RegExp(`^(?:please )?(?:read|tell) me the (?:memory|story) (?:about|of|called|named) (.+?)(?: from my ${BOOK})?$`).exec(lower))) return { action: "read-about", about: clean(m[1]) };
    if (new RegExp(`^(?:what(?:'s| is)(?: in)?|show|list|open) my ${BOOK}$`).test(lower) || new RegExp(`^what(?:'s| is) in my ${BOOK}$`).test(lower) || new RegExp(`^(?:what|which) memories are in my ${BOOK}$`).test(lower)) return { action: "list" };
    if ((m = new RegExp(`^(?:please )?(?:remove|delete|take out) the (?:memory|story) (?:about|called|named|of) (.+?)(?: (?:from|out of) (?:my|(.+?)${APOS}) ${BOOK})?$`).exec(lower))) {
      const whose = /(?:from|out of) (?:my|(.+?)(?:'s|s')) memory\s*book$/.exec(lower);
      return { action: "remove", about: clean(m[1]), who: whose && whose[1] ? clean(whose[1]) : null };
    }
    if ((m = new RegExp(`^(?:please )?let (.+?) add (?:memories |a memory |things )?to my ${BOOK}$`).exec(lower))) return { action: "allow", who: clean(m[1]) };
    if ((m = new RegExp(`^(?:stop letting|do not let|don't let|do not allow|don't allow) (.+?) add (?:memories |a memory |things )?to my ${BOOK}$`).exec(lower))) return { action: "disallow", who: clean(m[1]) };
    if (new RegExp(`^who can add (?:memories )?to my ${BOOK}$`).test(lower)) return { action: "allowed" };
    if (new RegExp(`^(?:what is|what's|how does) (?:a |the |my )?${BOOK}(?: work)?$`).test(lower) || new RegExp(`^(?:tell me about|explain) (?:the |my )?${BOOK}$`).test(lower)) return { action: "help" };
    return null;
  }

  return Object.freeze({ MAX_ENTRY, readMemoryBookRequest });
});
