"use strict";

// Guardrails for a business owner's questions that are really legal, tax, money-lending, licensing, insurance or hiring questions (for small and minority-owned businesses in the United States, and anywhere else).
// Kyro is not a lawyer, a tax advisor or a financial advisor. For these questions it gives GENERAL information, says so, names the official place to check and the free counselling that exists, says that
// programmes and deadlines change, and never claims to have filed, applied, sent or paid anything (it has no way to do any of those for the person).
//
// professionalAdviceTopic(text) -> "tax" | "legal" | "funding" | "certification" | "licensing" | "insurance" | "employment" | null
//   only for a QUESTION or a request for advice; a record ("log a tax payment of $300", "John took a loan of 5000") and a draft ("draft a grant proposal") are not taken.
// professionalAdviceReply(topic) -> the whole answer used when no AI model is available (the phone line's deterministic path).
// professionalAdviceGoal(topic, question) -> what the AI model is asked, with the rules above.
// withProfessionalAdviceNote(topic, answer) -> the model's answer, with the "not a lawyer/tax/financial advisor" note added when the model left it out.

const SOURCES = Object.freeze({
  tax: "the IRS (irs.gov) or a licensed tax preparer or CPA",
  legal: "a licensed attorney in your state (your state bar's lawyer referral service can find one, and many offer a first consultation free or cheap)",
  funding: "the SBA (sba.gov), the MBDA (mbda.gov) or a community lender (CDFI) near you",
  certification: "the SBA (sba.gov), your state's or city's business certification office, or the National Minority Supplier Development Council (nmsdc.org)",
  licensing: "your city, county and state business offices (the SBA's \"Apply for licenses and permits\" page lists where to look)",
  insurance: "a licensed insurance agent or broker, and your state's department of insurance",
  employment: "the U.S. Department of Labor (dol.gov), the IRS (irs.gov) and a licensed payroll or HR professional"
});
// For a person who is not in the United States the agencies above would be wrong, so the same answer names no country-specific agency (see isUsContext in knowledge/us-small-business.js).
const OTHER_SOURCES = Object.freeze({
  tax: "your country's tax authority or a licensed tax preparer",
  legal: "a licensed lawyer where you live (your local bar or law society can often help you find one)",
  funding: "a licensed bank or lender, a cooperative or savings group you trust, or your country's small business support office",
  certification: "the government office in your country that handles it",
  licensing: "your local and national government business offices",
  insurance: "a licensed insurance agent or broker and your country's insurance regulator",
  employment: "your country's labour office and a licensed payroll or HR professional"
});
const OTHER_FREE_HELP = "For free, one-on-one help with this, ask a local business support office, a cooperative or a farmers' or traders' group.";
const OTHER_CHANGE_NOTE = "Rules, programmes and deadlines change and differ by place, so confirm with the official office before you act.";
const ROLE = Object.freeze({
  tax: "a tax advisor", legal: "a lawyer", funding: "a financial advisor or a lender", certification: "a certification officer",
  licensing: "a lawyer or a licensing officer", insurance: "an insurance agent", employment: "a lawyer or an HR or payroll professional"
});
const FREE_HELP = "For free, one-on-one help with this, ask your local Small Business Development Center (SBDC), a SCORE mentor (score.org) or an MBDA Business Center.";
const CHANGE_NOTE = "Rules, programmes and deadlines change and differ by state, so confirm on the official site before you act.";
const NO_ACTION_NOTE = "I cannot file, apply, sign or pay anything for you.";

const QUESTION_START = /^(?:please\s+|kyro,?\s+)?(?:how|what|which|when|where|why|who|should|can|could|do|does|did|is|are|am|will|would|may|tell me|explain|help me (?:understand|with|figure|decide)|i need (?:advice|help) (?:with|on|about)|give me (?:advice|legal advice|tax advice)|any advice)\b/i;
const RECORD_OR_DRAFT = /^(?:please\s+)?(?:sold|bought|log|record|add|save|remind|set|create|draft|write|make|mark|show|list|delete|forget|call|text|send|play|open|start|translate|export|convert)\b/i;

const TOPICS = [
  // (words that only DESCRIBE the owner -- minority-owned, Black-owned, woman-owned -- are not a certification question by themselves: "what grants are there for Black-owned businesses" is about funding)
  ["certification", /\b(certif(?:y|ied|ication|ications)|8\s?\(a\)|\bmbe\b|\bwbe\b|\bwosb\b|\bdbe\b|\bhubzone\b|supplier diversity|disadvantaged business|nmsdc)\b/i],
  ["tax", /\b(tax|taxes|taxable|irs|1099|w-?9|w-?2|schedule c|estimated payment|write[- ]?offs?|deduct(?:ion|ions|ible)?|sales tax|payroll tax|self[- ]employment)\b/i],
  ["legal", /\b(legal advice|lawyer|attorney|sue|sued|lawsuit|liabilit(?:y|ies)|trademark|copyright|patent|incorporat(?:e|ion)|\bllc\b|s[- ]?corp|c[- ]?corp|sole proprietor(?:ship)?|partnership agreement|operating agreement|contract|lease|terms and conditions|non-?compete|nda)\b/i],
  ["funding", /\b(loans?|grants?|line of credit|microloan|sba|mbda|cdfi|investors?|investment|equity|crowdfunding|capital|financing|fund(?:ing)? my business|credit score|business credit)\b/i],
  ["licensing", /\b(business licen[cs]es?|licen[cs]e|permits?|zoning|health permit|food handler|doing business as|dba|register my business|registering a business)\b/i],
  ["insurance", /\b(insurance|insured|liability coverage|workers'? comp(?:ensation)?|bonding)\b/i],
  ["employment", /\b(hir(?:e|ing)|employees?|contractors?|payroll|minimum wage|overtime|fire (?:someone|an employee)|independent contractor|i-?9)\b/i]
];

function professionalAdviceTopic(text) {
  const value = String(text || "").replace(/\s+/g, " ").trim();
  if (!value || value.length > 400) return null;
  if (RECORD_OR_DRAFT.test(value)) return null;
  if (!(/[?]/.test(value) || QUESTION_START.test(value))) return null;
  for (const [topic, pattern] of TOPICS) if (pattern.test(value)) return topic;
  return null;
}

const sourcesFor = (topic, us) => (us === false ? OTHER_SOURCES : SOURCES)[topic];
const freeHelpFor = us => (us === false ? OTHER_FREE_HELP : FREE_HELP);
const changeNoteFor = us => (us === false ? OTHER_CHANGE_NOTE : CHANGE_NOTE);

function note(topic, us) {
  return `I am not ${ROLE[topic]}, so this is general information and not advice for your situation. ${changeNoteFor(us)} Check with ${sourcesFor(topic, us)}. ${freeHelpFor(us)} ${NO_ACTION_NOTE}`;
}

function professionalAdviceReply(topic, { us = true } = {}) {
  if (!SOURCES[topic]) return "";
  return `I can give you general information, but I am not ${ROLE[topic]}, so I cannot tell you what is right for your situation. ${changeNoteFor(us)} The best places to check are ${sourcesFor(topic, us)}. ${freeHelpFor(us)} ${NO_ACTION_NOTE} If you tell me more about your business, I can help you list the questions to ask them.`;
}

function professionalAdviceGoal(topic, question, { us = true } = {}) {
  return `A small business owner asks a ${topic} question. Answer with GENERAL information only, in plain language, in under 120 words. Say that you are not ${ROLE[topic]}. Do not tell them what they personally must do, owe or are entitled to. Name the official place to check (${sourcesFor(topic, us)}) and mention the free help (${us === false ? "a local business support office or a cooperative" : "SBDC, SCORE, MBDA Business Center"}). Say that rules, programmes and deadlines change and differ by ${us === false ? "place" : "state"}, so they should confirm with the official source. Never say or imply that you filed, applied, signed, sent or paid anything. Their question: ${String(question || "").slice(0, 400)}`;
}

function withProfessionalAdviceNote(topic, answer, { us = true } = {}) {
  const text = String(answer || "").trim();
  if (!text || !SOURCES[topic]) return text;
  return /\bnot (?:a|an) (?:lawyer|attorney|tax|financial|legal|insurance|licensed)/i.test(text) || /\bI(?: am|'m) not (?:a|an|your)\b/i.test(text) ? text : `${text} ${note(topic, us)}`;
}

module.exports = Object.freeze({ professionalAdviceTopic, professionalAdviceReply, professionalAdviceGoal, withProfessionalAdviceNote, SOURCES, FREE_HELP });
