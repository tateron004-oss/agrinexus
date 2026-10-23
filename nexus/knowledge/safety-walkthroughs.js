"use strict";

// Step-by-step walkthroughs for staying safe online and on the phone (nexus/knowledge/safety-guide.js): for the United States, Kenya and Nigeria. Like the other walkthroughs, Kyro shows ONE step at a time with its official page and reads it out, and the PERSON does
// each step; Kyro never changes a password, blocks a number, reports, pays or sends for them, and never asks for a password, PIN or code. Every step is a fact the guide already states from the official pages it cites (read on the guide's CHECKED_ON date),
// with the page that says it as the step's link; a step that is Kyro's own working practice says so (OWN). What the pages do not say is not here. A walkthrough for Kenya or Nigeria is asked for by naming the country ("walk me through spotting a fake
// message in Kenya"), because the matcher (public/kyro-safety-topics.js) then needs no hint of where the device is. See walkthrough-kit.js for how a step is written, and guide-walkthroughs.js for how the walkthroughs are found.

const { SOURCES, CHECKED_ON } = require("./safety-guide.js");
const { safetyTopic } = require("../../public/kyro-safety-topics.js");
const { family } = require("./walkthrough-kit.js");

const DEFS = { ...require("./safety-defs-us-a.js"), ...require("./safety-defs-us-b.js"), ...require("./safety-defs-kenya.js"), ...require("./safety-defs-nigeria.js") };

module.exports = family({ prefix: "safety", label: "safety-guide", SOURCES, CHECKED_ON, DEFS, topicOf: text => safetyTopic(text) });
