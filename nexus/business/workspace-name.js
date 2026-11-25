"use strict";

// The voice model often adds "in <the business's name>" to what it passes on ("create a sequence called Quote Follow-up in Mama Grace Spa"). That tail is the workspace, not part of the name the owner chose,
// so a name read from a sentence loses it (found on the live voice test, 10 November 2026: the sequence was created as "Quote Follow-up in Mama Grace Spa").
const escapeRegExp = value => String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function stripWorkspaceName(name, workspace) {
  const w = String(workspace || "").trim();
  if (!w) return String(name || "");
  // the tail may also say what it is ("... in the Mama Grace Bakery customer record") and may end in punctuation (found live, 10 November 2026: "Tag Amina Hassan as VIP in the Mama Grace Bakery customer record" made the tag "VIP in the Mama Grace Bakery customer record")
  return String(name || "").replace(new RegExp(`\\s+(?:in|for|at|on)\\s+(?:my\\s+|the\\s+|our\\s+)?${escapeRegExp(w)}(?:['’]s)?(?:\\s+(?:workspace|customer\\s+records?|records?|account|business|customer\\s+list))?\\s*[.?!]*$`, "i"), "").trim();
}

module.exports = Object.freeze({ stripWorkspaceName });
