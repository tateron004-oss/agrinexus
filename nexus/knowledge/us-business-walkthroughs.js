"use strict";

// Step-by-step walkthroughs for the United States small business guide (the four with a walkthrough already are in us-walkthroughs.js) (nexus/knowledge/us-small-business.js). Like the other walkthroughs, Kyro shows ONE step at a time with its official page and reads it out, and the PERSON does each step; Kyro never files,
// applies, signs, pays or submits for them. Every step is a fact the guide already states from the official pages it cites (read on the guide's CHECKED_ON date), with the page that says it as the step's link; a step that is
// Kyro's own working practice says so (OWN). What the pages do not say is not here. See walkthrough-kit.js for how a step is written, and guide-walkthroughs.js for how the walkthroughs are found.

const { SOURCES, CHECKED_ON, usSmallBusinessTopic } = require("./us-small-business.js");
const { S, W, OWN, family } = require("./walkthrough-kit.js");

const DEFS = {
};

module.exports = family({ prefix: "us-business", label: "us-small-business", SOURCES: SOURCES, CHECKED_ON, DEFS, topicOf: usSmallBusinessTopic });
