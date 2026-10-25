"use strict";

// Special education and ADHD, for parents, teachers and school administrators (asked for on 24 October 2026: a teacher of children with special needs and students with ADHD asked whether Kyro can help "teachers, parents and administrators who are experiencing
// administrative needs, resources for parents and being a resource for teachers"). Written only from official pages that were read on the date below: for the United States the Department of Education (IDEA, the Office for Civil Rights, student privacy), the CDC, the NIH and the
// federally funded parent and teacher centers; for California the Education Code, the Office of Administrative Hearings, the Department of Developmental Services and the other state pages that could be read; for Delaware the Department of Education's regulations and notices,
// its dispute-resolution guides, and the Capital School District; for Kenya the Constitution, the Persons with Disabilities Act 2025, the Basic Education Act, the Kenya Institute of Special Education and the National Council for Persons with Disabilities; for Nigeria the National
// Commission for Persons with Disabilities' school standards and the Accessibility Regulations 2023. Each answer names its pages and the date they were read, says what the pages do not cover, never says that a child has or does not have a condition, never advises on medicine or on a legal dispute,
// and never asks for a child's name or record. What could not be read (about ten California Department of Education pages, the Kenyan Ministry of Education's site, the Nigerian Universal Basic Education Commission's site and the policy PDFs, two Department of Education guides on ADHD and Section 504)
// is not here, and no number or step that was not on a page that was read is stated. Where two official pages differ, both are said and neither is picked.
//
// specialEdAnswer(id, { us, country, state }) -> { topic, title, text, sources } | null     (state: "ca" | "de" when the person named a state: a federal topic then says that the state's own page for it was not read)

const CHECKED_ON = "25 October 2026";

const PARTS = [require("./special-ed-guide-us-a.js"), require("./special-ed-guide-us-b.js"), require("./special-ed-guide-us-c.js"), require("./special-ed-guide-de.js"), require("./special-ed-guide-ca.js"), require("./special-ed-guide-ke.js"), require("./special-ed-guide-ng.js")];
const merge = field => Object.freeze(Object.assign({}, ...PARTS.map(part => part[field])));
const SOURCES = merge("SOURCES");
const TOPICS = merge("TOPICS");
// what a person asks in their own words (three for each topic), and the short phrase each answer starts with (for the live checks)
const PHRASES = merge("PHRASES");
const KEYS = merge("KEYS");

const STATE_NAME = Object.freeze({ ca: "California", de: "Delaware" });
const CANNOT_SAY = "I cannot say what will happen in a particular child's case, and I am not a lawyer or a doctor.";
const PRIVATE = "You do not need to tell me your child's name or anything private.";
const DANGER = "If a child is in danger, call 911 or your local emergency number.";
const CHANGE = "This is general information from official pages. Rules, numbers and websites change, so confirm on the official page, with the school or district, or with a parent center.";
const OUTSIDE = "These come from United States government pages. The general ideas may help anywhere, but the laws, agencies and numbers are American; for your own country, ask your education ministry or your national disability council.";

function specialEdAnswer(id, { us = true, country = null, state = null } = {}) {
  const topic = TOPICS[id];
  if (!topic) return null;
  const american = /^(?:sped|ca-sped|de-sped)-/.test(id);
  let lead = "";
  if (american && !us) lead = `${OUTSIDE} `;
  else if (/^sped-/.test(id) && STATE_NAME[state]) lead = `This is the federal rule. I have not read ${STATE_NAME[state]}'s own page on this, so ${STATE_NAME[state]} may add to it or set its own timeline. `;
  const sources = topic.sources.map(key => SOURCES[key]);
  const cited = sources.length ? ` Sources: ${sources.map(source => source.name).join("; ")} (checked ${CHECKED_ON}).` : "";
  const body = topic.text;
  const closing = [/(?:cannot|can't|could not) (?:say|tell|diagnose|advise|give)|not a (?:lawyer|doctor)/i.test(body) ? "" : CANNOT_SAY, /name or anything private|do not need to tell me|never ask (?:for|you for) (?:a |your )?child's name/i.test(body) ? "" : PRIVATE, /emergency number|\b911\b/i.test(body) ? "" : DANGER, CHANGE].filter(Boolean).join(" ");
  void country;
  return { topic: id, title: topic.title, text: `${lead}${body}${cited} ${closing}`, sources };
}

module.exports = Object.freeze({ CHECKED_ON, SOURCES, TOPICS, PHRASES, KEYS, specialEdAnswer });
