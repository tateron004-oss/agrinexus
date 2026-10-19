"use strict";

// What Kyro offers to do next after a checked guide's answer, as buttons on the screen and as phrases to say: "Walk me through it" (one step at a time, for the person to do themselves), "Save the steps as a checklist", and "Show
// all my sources". Nothing here costs anything: every offer is a command Kyro already runs, sent for the person when they tap or say it. The offers come with the plan (plan.offers) and the page draws them.
//
//   offersFor(plan, { lang }) -> [{ id, label, command, say: [phrases], spoken }]   (none for an answer in Spanish: the walkthroughs and the source page are English only, and for answers that are not a checked guide)
//   offerLine(offers) -> the short sentence spoken after the answer ("Say walk me through it, ..."), or ""
//   checklistAsk(text) -> { rest } when the words ask to save a process's steps as a checklist ("Save the steps for getting a seller's permit in California as a checklist")

const { WALKTHROUGHS } = require("./california-walkthroughs.js");

// The words that ask for each walkthrough and for its checklist: each must be taken by the California topic matcher (public/kyro-business-topics.js), and a test checks that they are.
const PHRASES = Object.freeze({
  "ca-certification": "getting California small business certification",
  "ca-dbe": "DBE certification in California",
  "ca-state-vendor": "selling to the State of California",
  "ca-seller-permit": "getting a seller's permit in California",
  "ca-nonprofit-state": "what to do after forming a California nonprofit to be tax exempt",
  "ca-la28": "becoming an LA28 supplier"
});

const SAY_WALK = Object.freeze(["walk me through it", "walk me through that", "walk me through this", "yes walk me through it", "show me the steps", "show me the steps one at a time", "take me through it", "step by step"]);
const SAY_CHECKLIST = Object.freeze(["save it as a checklist", "save that as a checklist", "save the steps as a checklist", "save them as a checklist", "make it a checklist", "make that a checklist", "make this a checklist", "turn it into a checklist", "turn that into a checklist", "yes save it as a checklist"]);
const SAY_SOURCES = Object.freeze(["show me all my sources", "show all my sources", "show me all the sources", "show all the sources", "show me the sources", "show me your sources"]);

function topicOf(knowledge) {
  const match = /^california-business:(ca-[a-z0-9-]+)$/.exec(String(knowledge || ""));
  return match ? match[1] : "";
}

function offersFor(plan, { lang = "en" } = {}) {
  if (!plan || typeof plan !== "object" || lang === "es") return [];
  const knowledge = String(plan.knowledge || "");
  if (!knowledge || plan.walkthrough || /^(?:sources-page|live-feeds|california-business:walkthrough)/.test(knowledge)) return [];
  const offers = [];
  const topic = topicOf(knowledge);
  if (topic && PHRASES[topic] && WALKTHROUGHS[topic]) {
    offers.push({ id: "walk", label: "Walk me through it", command: `Walk me through ${PHRASES[topic]}`, say: SAY_WALK.slice(), spoken: "walk me through it" });
    offers.push({ id: "checklist", label: "Save the steps as a checklist", command: `Save the steps for ${PHRASES[topic]} as a checklist`, say: SAY_CHECKLIST.slice(), spoken: "save it as a checklist" });
  }
  // every checked guide's answer can show all the pages the guides are built from
  if (/^(?:us-small-business|california-business|state-entities|us-community-support|small-business-technology|africa-small-business|ai-tools-for-business):/.test(knowledge)) {
    offers.push({ id: "sources", label: "Show all my sources", command: "Show me your sources for small business", say: SAY_SOURCES.slice(), spoken: "show me all my sources" });
  }
  return offers;
}

function offerLine(offers = []) {
  const walk = offers.find(offer => offer.id === "walk");
  const checklist = offers.find(offer => offer.id === "checklist");
  if (walk && checklist) return `Say ${walk.spoken} and I will take you through it step by step, or say ${checklist.spoken}.`;
  if (walk) return `Say ${walk.spoken} and I will take you through it step by step.`;
  return "";
}

// "Save the steps for getting a seller's permit in California as a checklist", "turn the LA28 steps into a checklist": the process asked about, in the words the California matcher takes.
const SAVE_STEPS = /^(?:please\s+)?(?:save|make|turn|put|create|add)\s+(?:me\s+)?(?:the\s+|these\s+|those\s+)?(?:steps\s+(?:for|of|to)\s+)?(.+?)\s+(?:as|into|in|to)\s+(?:a\s+|my\s+)?(?:checklist|to-?do(?:\s+list)?)[.!]?$/i;
function checklistAsk(text) {
  const match = SAVE_STEPS.exec(String(text || "").trim());
  if (!match) return null;
  const rest = match[1].replace(/^steps\s+(?:for|of|to)\s+/i, "").trim();
  return rest.length >= 4 ? { rest } : null;
}

module.exports = Object.freeze({ offersFor, offerLine, checklistAsk, PHRASES, SAY_WALK, SAY_CHECKLIST, SAY_SOURCES });
