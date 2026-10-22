"use strict";

// Step-by-step walkthroughs for help for veterans, older adults, young people, nonprofits and people in need (United States) (nexus/knowledge/us-community-support.js). Like the other walkthroughs, Kyro shows ONE step at a time with its official page and reads it out, and the PERSON does each step; Kyro never files,
// applies, signs, pays or submits for them. Every step is a fact the guide already states from the official pages it cites (read on the guide's CHECKED_ON date), with the page that says it as the step's link; a step that is
// Kyro's own working practice says so (OWN). What the pages do not say is not here. See walkthrough-kit.js for how a step is written, and guide-walkthroughs.js for how the walkthroughs are found.

const { SOURCES, CHECKED_ON } = require("./us-community-support.js");
const { communityTopic } = require("../../public/kyro-community-topics.js");
const { family } = require("./walkthrough-kit.js");

const DEFS = { ...require("./community-defs-a.js"), ...require("./community-defs-b.js") };

module.exports = family({ prefix: "community", label: "us-community-support", SOURCES: SOURCES, CHECKED_ON, DEFS, topicOf: communityTopic });
