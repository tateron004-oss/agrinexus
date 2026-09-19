"use strict";

// Which kind of follow-up is this utterance? Used by conversationFollowUpResponse (server.js) for the spoken
// router. The flags used to be bare keyword tests over the whole sentence, so ordinary questions were hijacked:
// with any pending action, "Why do maize leaves turn yellow?" was answered "The pending action is Match workforce
// role... say yes or no" (the word "why"); "Why do maize leaves turn yellow? Answer with current sources." got a note
// about the weather source path (the word "sources"); "Show me ..." anything was read as "navigate to that".
// A follow-up refers back to something, so it is short and/or points at "that / this / it / your answer".
const REFERS_BACK = /\b(that|this|it|previous|last|you said|your answer|what you said)\b/;
const MISSION = /\b(current mission|mission status|where are we|what are we doing|what step|where am i|orient me|checklist|guided mission)\b/;

function wordCount(text) {
  return String(text || "").split(/\s+/).filter(Boolean).length;
}

function conversationFollowUpFlags(lower) {
  const text = String(lower || "");
  const words = wordCount(text);
  const refersBack = REFERS_BACK.test(text);
  return Object.freeze({
    wantsExplanation: /\b(repeat|say that again|read that|what do you mean|summarize that)\b/.test(text)
      || (/\b(explain|why)\b/.test(text) && (words <= 2 || (refersBack && words <= 8))),
    wantsSource: /\b(where did you get that|what source|which source|cite that|where is that from|source are you using|evidence receipt)\b/.test(text)
      || (/\b(sources?|citations?|evidence|receipt)\b/.test(text) && words <= 4),
    wantsMission: MISSION.test(text),
    wantsNavigation: /\b(take me there|open that|go there|go to it|where is that)\b/.test(text) || /\bshow me (?:that|it|there|more)\b/.test(text),
    wantsNext: /\b(continue|next step|do the next|run the next|start the next|do that|let's do that|lets do that|proceed)\b/.test(text) && words <= 6
  });
}

module.exports = Object.freeze({ conversationFollowUpFlags });
