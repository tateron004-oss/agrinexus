"use strict";

const { clean } = require("./parse.js");
const { startGuided } = require("./guided.js");
const { CHECKED_ON } = require("../knowledge/small-business-technology.js");

// The digital health check: twelve plain yes/no questions about the technology a small business relies on, asked one at a time (by voice or typing), then a short list of what to do first.
// Nothing is saved and nothing is changed: it only asks and advises. Every action below is a point from the FTC small business cybersecurity guidance or the NIST Cybersecurity Framework 2.0
// Small Business Quick-Start Guide, read on the date in small-business-technology.js; the order puts the cheapest, most protective steps first (NIST calls multi-factor authentication one of the
// fastest, cheapest ways to protect your data). "Not sure" counts as "no": a gap you cannot confirm is worth closing.
const OPTIONS = [
  { value: "no", words: ["no", "nope", "not yet", "not really", "do not", "don't", "dont", "haven't", "have not", "never", "none"] },
  { value: "yes", words: ["yes", "yeah", "yep", "yup", "sure", "we do", "i do", "they do", "it is", "we are", "i am", "all of them", "correct", "right"] }
];

// key, the question (ends with a question the person answers yes or no to), and the action when the answer is not a clear yes.
const CHECKS = [
  { key: "mfa", ask: "Is two-step sign-in, where a code is sent to your phone, turned on for your business email and your bank?", action: "Turn on two-step sign-in (multi-factor authentication) for your business email and bank first. NIST calls it one of the fastest, cheapest ways to protect your data." },
  { key: "backup", ask: "Are your business files and customer records copied somewhere else, and have you tried getting them back?", action: "Back up your files and customer records to a second place, then test that you can get them back." },
  { key: "updates", ask: "Do your computers, phones and apps keep themselves up to date?", action: "Keep your software and devices updated; turn on automatic updates where you can." },
  { key: "accounts", ask: "Do you have a written list of your business accounts and devices, such as email, website, bank and social media?", action: "Write down your business accounts and devices (email, website, bank, social media, phones, computers) and who can sign in to each." },
  { key: "ownership", ask: "Are your domain name and website logins in your own name, not only your web designer's?", action: "Make sure your domain name, website and hosting logins are in your own name, not only a designer's or developer's." },
  { key: "domain-email", ask: "Does your business email use your own web address, like name@yourbusiness.com?", action: "Register a business email on a domain name in your own name, and turn on two-step sign-in for it." },
  { key: "verify", ask: "Before paying a changed bank account on an invoice, or sending a wire, do you phone the person on a number you already know?", action: "Set one rule: any request to pay, or to change bank details, is checked by calling a number you already know. The FTC calls the fake-boss, fake-customer and fake-supplier request a business email imposter." },
  { key: "training", ask: "Do the people who work with you know how to spot fake invoices and phishing messages?", action: "Show everyone who works with you how to spot phishing and fake invoices; the FTC and NIST both say to train your people." },
  { key: "data", ask: "Do you know where your customer and payment information is kept, and is it protected?", action: "Find out where customer and payment information is kept, protect it (encrypt it, or do not keep it), and limit who can see it." },
  { key: "wifi", ask: "Is the Wi-Fi at your business protected with a password?", action: "Secure your business Wi-Fi with a password, as the FTC advises." },
  { key: "breach", ask: "Do you know who you would call, and what you would do first, if your customer information leaked?", action: "Decide now who you would call and what you would do first if customer information leaked. The FTC has steps for a breach; ask me \"what if my customer data was leaked\"." },
  { key: "ai", ask: "If you use AI tools like ChatGPT, do you have a rule for what never to type into them? Say yes if you do not use AI.", action: "Make a rule for AI tools: never type in passwords, and read the privacy terms before typing in customer, employee or payment information; a person checks anything it writes before a customer sees it." }
];

const templates = {
  "digital-check": {
    collection: "digital-check", longForm: true,
    intro: "Let's do a quick digital health check. Twelve short questions, and I will tell you what to do first. Say yes, no or not sure, and say cancel to stop.",
    questions: CHECKS.map(check => ({ key: check.key, ask: check.ask, type: "choice", optional: true, options: OPTIONS })),
    async finish(ctx, answers) {
      const gaps = CHECKS.filter(check => answers[check.key] !== "yes");
      const good = CHECKS.length - gaps.length;
      if (!gaps.length) return `That is a strong result: you answered yes to all ${CHECKS.length}. Keep it that way by checking this list again every few months. ${closing()}`;
      const first = gaps.slice(0, 3);
      const rest = gaps.slice(3);
      const lines = first.map((check, index) => `${index + 1}. ${check.action}`).join(" ");
      return `You have ${good} of ${CHECKS.length} in good shape. Do these first: ${lines}${rest.length ? ` After that, ${rest.length} more: ${rest.map(check => check.key.replace(/-/g, " ")).join(", ")}. Say "check my business technology" again to hear the list.` : ""} ${closing()}`;
    }
  }
};

function closing() {
  return `These points come from the FTC small business cybersecurity guidance and the NIST Cybersecurity Framework 2.0 Small Business Quick-Start Guide (checked ${CHECKED_ON}). This is general information, not a security audit or advice, and things change, so confirm on the official site. I cannot change anything for you. Say "create a technology roadmap" and I will save a worksheet you can fill in.`;
}

const REQUEST = /^(?:please\s+)?(?:(?:can you\s+|could you\s+)?(?:run|start|do|give me|take|begin|let'?s do|let us do)\s+(?:a\s+|an\s+|the\s+|my\s+|our\s+)?)?(?:digital|technology|tech|cyber\s?security|business technology)\s+(?:health\s?check\s?up|health\s?check|check\s?up|check)(?:\s+(?:for|of|on)\s+(?:my|our)\s+(?:business|shop|company))?$|^(?:please\s+)?check\s+(?:my|our)\s+(?:business\s+)?(?:technology|tech|digital health)$|^(?:please\s+)?(?:is\s+(?:my|our)\s+business\s+safe|how safe is\s+(?:my|our)\s+business)\s+online$/i;

async function handle(ctx) {
  const text = clean(ctx.text).replace(/[.!?]+$/g, "");
  if (!REQUEST.test(text)) return null;
  return startGuided(ctx, templates["digital-check"], {});
}

module.exports = Object.freeze({ handle, templates, CHECKS, REQUEST, longForm: true });
