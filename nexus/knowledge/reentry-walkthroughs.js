"use strict";

// Step-by-step walkthroughs for coming home after prison or jail (nexus/knowledge/reentry-guide.js): for the United States and California. Like the other walkthroughs, Kyro shows ONE step at a time with its official page and reads it out, and the PERSON does each step; Kyro never fills
// in, files, applies, pays, calls or opens an account for anyone, never says whether something breaks a condition of supervision, and never asks for a record, a case or a number of any kind. Every step is a fact the guide already states from the official pages it cites (read on the guide's
// CHECKED_ON date), with the page that says it as the step's link; a step that is Kyro's own working practice says so (OWN). What the pages do not say is not here. A walkthrough is asked for by saying you are coming home ("walk me through getting a new Social Security card after prison"),
// because the matcher (public/kyro-reentry-topics.js) takes a question only from a person who says so. See walkthrough-kit.js for how a step is written, and guide-walkthroughs.js for how the walkthroughs are found.

const { SOURCES, CHECKED_ON } = require("./reentry-guide.js");
const { reentryTopic } = require("../../public/kyro-reentry-topics.js");
const { family } = require("./walkthrough-kit.js");

// (four files written by four writers: an id used in two of them would silently replace a walkthrough, as "id", "jobs" and "voting" did on 26 October 2026, so a repeated id stops the program)
const DEFS = {};
for (const part of [require("./reentry-defs-us-a.js"), require("./reentry-defs-us-b.js"), require("./reentry-defs-us-c.js"), require("./reentry-defs-ca.js")]) {
  for (const [id, def] of Object.entries(part)) { if (DEFS[id]) throw new Error(`reentry walkthrough id used twice: ${id}`); DEFS[id] = def; }
}

module.exports = family({ prefix: "reentry", label: "reentry-guide", SOURCES, CHECKED_ON, DEFS, topicOf: text => reentryTopic(text) });
