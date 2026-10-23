"use strict";

// The rest of the walkthroughs for the California business guide (nexus/knowledge/california-business.js); the ones for certification, the state vendor list, a seller's permit, a nonprofit's state tax exemption and LA28 are in
// california-walkthroughs.js. Like the other walkthroughs, Kyro shows ONE step at a time with its official page and reads it out, and the PERSON does each step; Kyro never files, applies, signs or submits for them. Every step is a fact the guide
// already states from the official pages it cites (read on the guide's CHECKED_ON date); a step that is Kyro's own working practice says so (OWN). What the pages do not say is not here. See walkthrough-kit.js and guide-walkthroughs.js.

const { SOURCES, CHECKED_ON, californiaTopic } = require("./california-business.js");
const { S, W, OWN, family } = require("./walkthrough-kit.js");

const DEFS = {
};

module.exports = family({ prefix: "ca-more", label: "california-business", SOURCES, CHECKED_ON, DEFS, topicOf: californiaTopic });
