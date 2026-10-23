"use strict";

// The rest of the walkthroughs for the athletes guide (nexus/knowledge/athlete-guide.js); six processes are in athlete-walkthroughs.js. Like the other walkthroughs, Kyro shows ONE step at a time with its official page and
// reads it out, and the PERSON does each step; Kyro never registers, applies, files or signs for them. Every step is a fact the guide already states from the official pages it cites (read on the guide's CHECKED_ON date); a step
// that is Kyro's own working practice says so (OWN). What the pages do not say is not here. See walkthrough-kit.js and guide-walkthroughs.js.

const { SOURCES, CHECKED_ON } = require("./athlete-guide.js");
const { athleteTopic } = require("../../public/kyro-athlete-topics.js");
const { family } = require("./walkthrough-kit.js");

const DEFS = { ...require("./athlete-more-defs-a.js"), ...require("./athlete-more-defs-b.js") };

module.exports = family({ prefix: "athlete", label: "athlete-guide", SOURCES, CHECKED_ON, DEFS, topicOf: athleteTopic });
