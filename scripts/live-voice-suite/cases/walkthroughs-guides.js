"use strict";
// "Walk me through ...": a walkthrough from each checked guide (nexus/knowledge/guide-walkthroughs.js) opens, shows its first step and reads it out; "next" shows the second step. Two for each guide, chosen from the walkthroughs
// themselves (the first and the middle one in the file), so the list follows the guides as walkthroughs are added. They change nothing on the account: the person does each step, and Kyro files, pays and applies for nothing.
const registry = require("../../../nexus/knowledge/guide-walkthroughs.js");

// (the words the screen must show: no characters that mean something in a regular expression)
const KEY = /^[A-Za-z0-9 ,.'’:;!&%-]{8,}$/;
const walk = (family, id, def) => {
  const first = family.walkthrough(id).steps[0].title;
  return KEY.test(first) ? { id: `walk-${family.prefix}-${id}`, area: "walkthroughs", say: `Walk me through ${def.phrase}.`, timeoutMs: 60000, expect: { screen: "walkthrough", text: first }, then: [{ say: "Next." }, { expect: { screen: "walkthrough", text: "Step 2 of" }, timeoutMs: 25000 }] } : null;
};

const cases = [];
for (const family of registry.FAMILIES) {
  const ids = Object.keys(family.WALKTHROUGHS);
  for (const id of [...new Set([ids[0], ids[Math.floor(ids.length / 2)]])]) {
    const made = id ? walk(family, id, family.WALKTHROUGHS[id]) : null;
    if (made) cases.push(made);
  }
}

module.exports = Object.freeze(cases);
