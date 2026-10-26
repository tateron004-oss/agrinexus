"use strict";

// Coming home after prison or jail, for the person coming home and for whoever is helping them (asked for on 26 October 2026 by the owner, who works with people returning home: "this is not for a specific person or group ... they are technology illiterate ... they will need their hand
// held for just about everything ... she is a source, not an educational site"). Written only from official pages that were read on the date below: for the United States the Social Security Administration, the Departments of Agriculture, Health and Human Services, Housing and Urban
// Development, Labor and Education, the Equal Employment Opportunity Commission, the Federal Trade Commission, the Consumer Financial Protection Bureau, the FDIC, the Federal Communications Commission, the Justice Department, the federal courts, SAMHSA and the Legal Services
// Corporation; for California the Department of Motor Vehicles, the Department of Corrections and Rehabilitation, the Department of Public Health, the Department of Health Care Services, the Department of Social Services, the Civil Rights Department, the Department of Justice, the
// Secretary of State and the Public Utilities Commission. Each answer names its pages and the date they were read, says what the pages do not cover, uses the words the agencies use for people, never gives legal advice, never says what counts as breaking a condition of supervision,
// and never asks for a record, a charge, a case number or a number of any kind. What could not be read (the California State Library's pages for local libraries, CalJOBS and vote.gov behind a bot check, a few Social Security and Health and Human Services pages, the GED pages) is
// not here, and no number or step that was not on a page that was read is stated. Where two official pages differ, both are said and neither is picked. Kenya, Nigeria and the other states are not here yet.
//
// reentryAnswer(id, { us, state }) -> { topic, title, text, sources } | null     (state: "ca" when the person named California: a federal topic then says that California's own page for it was not read, or that there is one to ask for)

const CHECKED_ON = "26 October 2026";

const PARTS = [require("./reentry-guide-us-a.js"), require("./reentry-guide-us-b.js"), require("./reentry-guide-us-c.js"), require("./reentry-guide-ca.js")];
const merge = field => Object.freeze(Object.assign({}, ...PARTS.map(part => part[field])));
const SOURCES = merge("SOURCES");
const TOPICS = merge("TOPICS");
// what a person asks in their own words (three for each topic), and the short phrase each answer starts with (for the live checks)
const PHRASES = merge("PHRASES");
const KEYS = merge("KEYS");

// the California topic that answers the same question as a federal one, where the guide has it
const CALIFORNIA_OF = Object.freeze({ "reentry-id": "ca-reentry-id", "reentry-health": "ca-reentry-medi-cal", "reentry-snap": "ca-reentry-calfresh", "reentry-jobs": "ca-reentry-jobs", "reentry-background-check": "ca-reentry-records", "reentry-record-clearing": "ca-reentry-records", "reentry-voting": "ca-reentry-voting", "reentry-phone-lifeline": "ca-reentry-lifeline" });

const CANNOT_SAY = "I am not a lawyer, and I cannot say what will happen in your own case.";
const PRIVATE = "You do not need to tell me about your case or anything private.";
const DANGER = "If you are in danger, call 911 or your local emergency number. If you are thinking about hurting yourself, call or text 988.";
const CHANGE = "This is general information from official pages. Rules, numbers and websites change, so check with the office or the official page before you act.";
const OUTSIDE = "These come from United States government pages. The laws, offices and numbers are American; for your own country, ask a local legal aid or reentry group.";

function reentryAnswer(id, { us = true, state = null } = {}) {
  const topic = TOPICS[id];
  if (!topic) return null;
  const american = /^(?:ca-)?reentry-/.test(id);
  let lead = "";
  if (american && !us) lead = `${OUTSIDE} `;
  else if (/^reentry-/.test(id) && state === "ca" && !CALIFORNIA_OF[id]) lead = "This is the federal rule. I have not read California's own page on this, so California may add to it. ";
  else if (/^reentry-/.test(id) && state === "ca") lead = "This is the federal rule. ";
  const sources = topic.sources.map(key => SOURCES[key]);
  const cited = sources.length ? ` Sources: ${sources.map(source => source.name).join("; ")} (checked ${CHECKED_ON}).` : "";
  const body = topic.text;
  const californiaNote = /^reentry-/.test(id) && CALIFORNIA_OF[id] && state !== "ca" && TOPICS[CALIFORNIA_OF[id]] ? "California has its own rules on this. Say California and I will read that page." : "";
  const closing = [californiaNote, /(?:cannot|can't|could not) (?:say|tell|advise|give)|not a lawyer/i.test(body) ? "" : CANNOT_SAY, /name or anything private|do not need to tell me/i.test(body) ? "" : PRIVATE, /emergency number|\b911\b|\b988\b/i.test(body) ? "" : DANGER, CHANGE].filter(Boolean).join(" ");
  return { topic: id, title: topic.title, text: `${lead}${body}${cited} ${closing}`, sources };
}

module.exports = Object.freeze({ CHECKED_ON, SOURCES, TOPICS, PHRASES, KEYS, CALIFORNIA_OF, reentryAnswer });
