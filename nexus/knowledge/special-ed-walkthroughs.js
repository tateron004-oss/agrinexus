"use strict";

// Step-by-step walkthroughs for special education and ADHD (nexus/knowledge/special-ed-guide.js): for the United States, California, Delaware, Kenya and Nigeria. Like the other walkthroughs, Kyro shows ONE step at a time with its official page and reads it out, and the PERSON does
// each step; Kyro never asks a school for anything, sends or signs for a parent, and never takes a child's name or record. Every step is a fact the guide already states from the official pages it cites (read on the guide's CHECKED_ON date), with the page that says it as the
// step's link; a step that is Kyro's own working practice says so (OWN). What the pages do not say is not here, and nothing here diagnoses a child or advises on medicine or on a legal dispute. A walkthrough for California, Delaware, Kenya or Nigeria is asked for by naming the place
// ("walk me through asking for an evaluation in California"). See walkthrough-kit.js for how a step is written, and guide-walkthroughs.js for how the walkthroughs are found.

const { SOURCES, CHECKED_ON } = require("./special-ed-guide.js");
const { specialEdTopic } = require("../../public/kyro-special-ed-topics.js");
const { family } = require("./walkthrough-kit.js");

const DEFS = { ...require("./special-ed-defs-us-a.js"), ...require("./special-ed-defs-us-b.js"), ...require("./special-ed-defs-de.js"), ...require("./special-ed-defs-ca.js"), ...require("./special-ed-defs-ke.js"), ...require("./special-ed-defs-ng.js") };

module.exports = family({ prefix: "sped", label: "special-ed-guide", SOURCES, CHECKED_ON, DEFS, topicOf: text => specialEdTopic(text) });
