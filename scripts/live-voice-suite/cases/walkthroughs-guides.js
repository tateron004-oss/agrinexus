"use strict";
// "Walk me through ...": a walkthrough from each checked guide (nexus/knowledge/guide-walkthroughs.js) opens, shows its first step and reads it out; "next" shows the second step. Two for each guide, chosen from the walkthroughs
// themselves (the first and the middle one in the file), so the list follows the guides as walkthroughs are added. They change nothing on the account: the person does each step, and Kyro files, pays and applies for nothing.
const registry = require("../../../nexus/knowledge/guide-walkthroughs.js");

// (the words the screen must show: no characters that mean something in a regular expression)
const KEY = /^[A-Za-z0-9 ,.'’:;!&%-]{8,}$/;
// Two walkthroughs are reached through Kyro's care layer, which answers first with care and the resources (stress and pressure for an athlete; reporting the abuse of an older person), so a live case cannot open them: they are left out of a full run.
const CARE_LAYER_FIRST = new Set(["athlete-pressure-stress-and-mental-health", "community-sr-abuse"]);
const walk = (family, id, def) => {
  let first = family.walkthrough(id).steps[0].title;
  if (process.env.KYRO_WALK_ALL === "1" && !KEY.test(first)) first = (/^[A-Za-z0-9 ,.'’:;!&%-]{8,}/.exec(first) || [""])[0].trim();
  return KEY.test(first) ? { id: `walk-${family.prefix}-${id}`, area: "walkthroughs", say: `Walk me through ${def.phrase}.`, timeoutMs: 60000, expect: { screen: "walkthrough", text: first, allowRefusal: true }, then: [{ say: "Next." }, { expect: { screen: "walkthrough", text: "Step 2 of", allowRefusal: true }, timeoutMs: 25000 }] } : null;
};

const cases = [];
const ALL = process.env.KYRO_WALK_ALL === "1"; // (a full run of every walkthrough: KYRO_WALK_ALL=1)
for (const family of registry.FAMILIES) {
  const ids = Object.keys(family.WALKTHROUGHS);
  for (const id of ALL ? ids : [...new Set([ids[0], ids[Math.floor(ids.length / 2)]])]) {
    const made = id && !CARE_LAYER_FIRST.has(`${family.prefix}-${id}`) ? walk(family, id, family.WALKTHROUGHS[id]) : null;
    if (made) cases.push(made);
  }
}

module.exports = Object.freeze(cases);
