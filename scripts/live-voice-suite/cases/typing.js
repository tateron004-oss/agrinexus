"use strict";
// Typing instead of talking (public/app.js, kyroSetTypedMode): "I want to type" shows the typed box even though voice works; "use voice" takes it away. Before this the box showed only when voice could not run.
// SAID, because a person asks for it by voice; the box itself is looked at (typedBox), not typed into.
module.exports = Object.freeze([
  { id: "typing-i-want-to-type-then-use-voice", area: "typing", say: "I want to type.", timeoutMs: 60000, expect: { typedBox: true, said: "type|box" },
    then: [{ say: "Use voice.", timeoutMs: 60000, expect: { typedBox: false, said: "listening|voice|okay" } }] },
  { id: "typing-let-me-type", area: "typing", say: "Let me type.", timeoutMs: 60000, expect: { typedBox: true },
    then: [{ say: "I want to talk.", timeoutMs: 60000, expect: { typedBox: false } }] }
]);
