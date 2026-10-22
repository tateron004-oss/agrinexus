"use strict";

// Where the step-by-step walkthroughs of the checked guides are found. Each guide's walkthroughs are written in its own file with walkthrough-kit.js; this lists them, so that the planner, the offers after an answer ("Walk me
// through it", "Save the steps as a checklist") and the tests find every one the same way. (The money, athlete, California and PR walkthroughs are older and have their own files; they are listed in the tests, not here.)
//
//   guideWalkthrough(label, topic) -> the walkthrough for a guide's topic, or null        (label: the first part of the plan's knowledge label, such as "church-guide")
//   phraseOfKnowledge(knowledge) -> the words that ask for the walkthrough that goes with a plan's knowledge label ("church-guide:church-forming"), or null
//   walkthroughForText(text) -> the walkthrough the words ask for ("walk me through forming a church"), or null

const FAMILIES = Object.freeze([
  require("./community-walkthroughs.js"),
  require("./church-walkthroughs.js"),
  require("./parents-walkthroughs.js"),
  require("./womens-walkthroughs.js"),
  require("./chronic-walkthroughs.js"),
  require("./technology-walkthroughs.js"),
  require("./ai-tools-walkthroughs.js"),
  require("./africa-walkthroughs.js"),
  require("./us-business-walkthroughs.js"),
  require("./pr-more-walkthroughs.js"),
  require("./athlete-more-walkthroughs.js")
]);
const BY_LABEL = Object.freeze(Object.fromEntries(FAMILIES.map(family => [family.label, family])));

function guideWalkthrough(label, topic) {
  const family = BY_LABEL[label];
  const id = family && topic ? family.WALK_OF_TOPIC[topic] : null;
  return id ? family.walkthrough(id) : null;
}

function phraseOfKnowledge(knowledge) {
  const match = /^([a-z0-9-]+):([a-z0-9-]+)$/.exec(String(knowledge || ""));
  const family = match ? BY_LABEL[match[1]] : null;
  return family && family.PHRASE_OF_TOPIC[match[2]] ? family.PHRASE_OF_TOPIC[match[2]] : null;
}

function walkthroughForText(text) {
  for (const family of FAMILIES) {
    const found = family.walkthroughFor(text);
    if (found) return found;
  }
  return null;
}

module.exports = Object.freeze({ FAMILIES, guideWalkthrough, phraseOfKnowledge, walkthroughForText });
