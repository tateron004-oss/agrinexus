// A MEMORY BOOK: short true memories that a person, or someone in their trusted circle whom they chose, writes down so that Kyro can read them back, in the writer's own words. It was asked for by the owner for older people, including
// those living with dementia, as a calm place that holds their own life. This file only READS what was said (the same words are used by the server, which stores and reads the book, and by the page, which takes such a turn itself instead of
// leaving it to the voice model: a voice model that is asked for "a memory" will invent one, and an invented memory told to a person with dementia is harm). It stores nothing and answers nothing.
//
// readMemoryBookRequest(text) -> { action: "add", who: null | "<name>", text } | { action: "read" } | { action: "read-about", about } | { action: "list" } | { action: "remove", about, who: null | "<name>" }
//                              | { action: "allow", who } | { action: "disallow", who } | { action: "allowed" } | { action: "help" } | { action: "hold" | "release", about, who: null | "<name>" } | null
// An "add" can carry held: true ("add a sensitive memory to my memory book: ..."): a held memory is never read out on its own ("tell me a memory"), only when it is asked for by name.
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
  // "add a sensitive memory to ...": kept in the book but never read out on its own (a memory of a death, to someone who has forgotten it, can hurt again)
  const ADD_HELD = "(?:please\\s+)?(?:add|put|save|write)\\s+(?:a\\s+|an\\s+)?(?:sensitive|difficult|sad|hard|painful)\\s+(?:memory|story)\\s+(?:to|in|into)\\s+";

  function readMemoryBookRequest(text) {
    const raw = String(text ?? "").replace(/\r\n?/g, "\n").trim();
    if (!raw || raw.length > 8000) return null; // (a memory over MAX_ENTRY is still read as an add, so that Kyro can say it is too long and save nothing)
    let m;
    // adding: the memory itself follows, and may be long and may have several sentences, so it is read from the raw text (kept as written)
    // What follows "memory book" may be a colon, a comma, a dash, a full stop or nothing at all: a spoken sentence has no colon in it ("add to my memory book. My husband Joseph died..."), and found on the live site, a request said aloud
    // with a full stop was not read, and the voice model made a document of it instead. Punctuation alone after "memory book" is no memory ("add to my memory book.").
    const body = value => (/[\p{L}\p{N}]/u.test(value) ? value.trim() : "");
    for (const [prefix, held] of [[ADD, false], [ADD_HELD, true]]) {
      if ((m = new RegExp(`^${prefix}my\\s+${BOOK}\\b[\\s:,.;!\\-–—]*([\\s\\S]+)$`, "i").exec(raw))) return { action: "add", who: null, text: body(m[1]), ...(held ? { held } : {}) };
      if ((m = new RegExp(`^${prefix}([A-Za-z][\\w .'’-]{0,40}?)${APOS}\\s+${BOOK}\\b[\\s:,.;!\\-–—]*([\\s\\S]+)$`, "i").exec(raw)) && !/^my$/i.test(clean(m[1]))) return { action: "add", who: clean(m[1]), text: body(m[2]), ...(held ? { held } : {}) };
    }
    const t = clean(raw).replace(/[’]/g, "'").replace(/[.!?]+$/g, "");
    if (t.length > 160) return null;
    const lower = t.toLowerCase();
    // "add to my memory book" with nothing after it: Kyro asks what to add
    // (said aloud, a person often says this much and stops, and the memory itself comes as the next sentence: the page keeps the wait open for it, see kyroMemoryBookFollowUp in app.js)
    const EMPTY = "(?:please )?(?:add|put|save|write)(?: (?:this|a memory|a story|something|(?:a|an) (sensitive|difficult|sad|hard|painful) (?:memory|story)))? (?:to|in|into) ";
    if ((m = new RegExp(`^${EMPTY}my ${BOOK}$`).exec(lower))) return { action: "add", who: null, text: "", ...(m[1] ? { held: true } : {}) };
    if ((m = new RegExp(`^${EMPTY}(.+?)(?:'s|s') ${BOOK}$`).exec(lower)) && m[2] !== "my") return { action: "add", who: clean(m[2]), text: "", ...(m[1] ? { held: true } : {}) };
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
    // holding back / releasing a memory by what it is about; "in Margaret's memory book" when it is someone else's book
    if ((m = new RegExp(`^(?:please )?(?:hold back|fold back|hold|keep back|do not read|don't read|stop reading)(?: out)? the (?:memory|story) (?:about|called|named|of) (.+?)(?: (?:unless i ask(?: for it)?|unless asked|on its own|unprompted|by itself))?(?: (?:in|from) (?:my|(.+?)${APOS}) ${BOOK})?$`).exec(lower))) {
      const whose = /(?:in|from) (?:my|(.+?)(?:'s|s')) memory\s*book$/.exec(lower);
      return { action: "hold", about: clean(m[1]), who: whose && whose[1] ? clean(whose[1]) : null };
    }
    if ((m = new RegExp(`^(?:please )?(?:stop holding back|release|you can read|it is okay to read|it's okay to read|read on its own) the (?:memory|story) (?:about|called|named|of) (.+?)(?: again)?(?: (?:in|from) (?:my|(.+?)${APOS}) ${BOOK})?$`).exec(lower))) {
      const whose = /(?:in|from) (?:my|(.+?)(?:'s|s')) memory\s*book$/.exec(lower);
      return { action: "release", about: clean(m[1]), who: whose && whose[1] ? clean(whose[1]) : null };
    }
    if ((m = new RegExp(`^(?:please )?let (.+?) add (?:memories |a memory |things )?to my ${BOOK}$`).exec(lower))) return { action: "allow", who: clean(m[1]) };
    if ((m = new RegExp(`^(?:stop letting|do not let|don't let|do not allow|don't allow) (.+?) add (?:memories |a memory |things )?to my ${BOOK}$`).exec(lower))) return { action: "disallow", who: clean(m[1]) };
    if (new RegExp(`^who can add (?:memories )?to my ${BOOK}$`).test(lower)) return { action: "allowed" };
    if (new RegExp(`^(?:what is|what's|how does) (?:a |the |my )?${BOOK}(?: work)?$`).test(lower) || new RegExp(`^(?:tell me about|explain) (?:the |my )?${BOOK}$`).test(lower)) return { action: "help" };
    // Anything else that names the memory book is still the memory book's: Kyro says plainly that it did not understand and what it can do, so the voice model never answers it from memory (found on the live site: a
    // misheard "hold back" was answered by the model, which said it had adjusted a memory when it had done nothing).
    if (new RegExp(`\\b(?:my|the|[a-z]+'s) ${BOOK}\\b`).test(lower)) return { action: "unclear" };
    return null;
  }

  return Object.freeze({ MAX_ENTRY, readMemoryBookRequest });
});
