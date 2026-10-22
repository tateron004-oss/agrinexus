"use strict";

// The rest of the walkthroughs for the public relations and events guide (nexus/knowledge/pr-events-guide.js); planning an event and preparing a crisis statement are in pr-walkthroughs.js. Like the other walkthroughs, Kyro shows
// ONE step at a time with its official page and reads it out, and the PERSON does each step; Kyro never sends, files, books or publishes for them. Every step is a fact the guide already states from the official pages it cites
// (read on the guide's CHECKED_ON date); a step that is Kyro's own working practice says so (OWN). What the pages do not say is not here. See walkthrough-kit.js and guide-walkthroughs.js.

const { SOURCES, CHECKED_ON } = require("./pr-events-guide.js");
const { prTopic } = require("../../public/kyro-pr-topics.js");
const { S, W, OWN, family } = require("./walkthrough-kit.js");

const DEFS = {
};

module.exports = family({ prefix: "pr", label: "pr-events-guide", SOURCES, CHECKED_ON, DEFS, topicOf: prTopic });
