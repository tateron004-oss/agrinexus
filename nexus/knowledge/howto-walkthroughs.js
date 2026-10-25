"use strict";

// Step-by-step walkthroughs that teach a person to USE Kyro itself, one part at a time: "Walk me through using the shopping list", "teach me to use the farm log", "walk me through setting up a trusted circle". Asked for on
// 22 October 2026: "we are going to have to hold people's hands ... for those who will not have an instructor to help them, especially if they have never been exposed to the content before". Like the other walkthroughs, Kyro shows ONE step
// at a time and reads it out, and the PERSON does each step; every step says what to say or tap, what Kyro will do, and how the person knows it worked. There is no official page for Kyro's own features, so these steps have no link; the
// words a step tells a person to say are ones that are known to work (a test checks each against the phrases in the how-to sheets and the live voice cases), and a step never promises something Kyro cannot do (the how-to sheets say what is
// practice only or not yet switched on, and so do the steps). See walkthrough-kit.js and guide-walkthroughs.js.

const { howtoTopic } = require("../../public/kyro-howto-topics.js");
const { family } = require("./walkthrough-kit.js");

const DEFS = { ...require("./howto-defs-a.js"), ...require("./howto-defs-b.js"), ...require("./howto-defs-c.js") };

module.exports = family({ prefix: "howto", label: "kyro-howto", SOURCES: {}, CHECKED_ON: "", DEFS, topicOf: howtoTopic, ownFeature: true });
