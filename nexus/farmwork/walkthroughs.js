"use strict";

const { clean } = require("./parse.js");
const { startGuided } = require("./guided.js");
const { CHECKED_ON } = require("../knowledge/small-business-technology.js");
const { isUsContext } = require("../knowledge/us-small-business.js");

// Two kinds of short guided conversation for a small business owner (typed or spoken), neither of which saves anything or changes anything:
//   1. Step-by-step checklists ("Walk me through securing my business accounts"): one step at a time; the person says "done", "skip" (for later) or "cancel", and gets a recap at the end of what is done and what is left.
//   2. A six-lesson AI basics course ("Start the AI basics course"): one short lesson at a time, each with a yes/no question, and a score with the points to review at the end.
// Every step and lesson is a point from the FTC small business cybersecurity and AI guidance or the NIST Cybersecurity Framework 2.0 Small Business Quick-Start Guide, read on the date in small-business-technology.js
// (the same text the guide answers with); the one list that is common practical advice, not an official rule (getting online), says so.

const DONE = [{ value: "done", words: ["done", "finished", "next", "ok", "okay", "yes", "did it", "complete", "completed", "all set", "got it", "continue"] }];
const YES_NO = [
  { value: "no", words: ["no", "nope", "false", "not", "never", "do not", "don't", "dont", "wrong", "cannot", "can't", "shouldn't", "isn't"] },
  { value: "yes", words: ["yes", "yeah", "yep", "yup", "true", "sure", "right", "correct"] }
];

const SOURCES_LINE = `These points come from the FTC small business cybersecurity guidance and the NIST Cybersecurity Framework 2.0 Small Business Quick-Start Guide (checked ${CHECKED_ON}). This is general information, not a security audit or advice, and things change, so confirm on the official site. I cannot change anything for you.`;

const CHECKLISTS = {
  "secure-accounts": {
    title: "Secure your business accounts",
    steps: [
      "Write down every business account: email, bank, website and domain name, social media, and who can sign in to each.",
      "Turn on two-step sign-in (multi-factor authentication) for your business email. NIST calls it one of the fastest, cheapest ways to protect your data.",
      "Turn on two-step sign-in for your bank and payment accounts.",
      "Make sure your domain name and website logins are in your own name, not only a designer's or developer's.",
      "Use strong passwords, and never type a password into an AI tool.",
      "Turn on automatic updates for your computers, phones and apps.",
      "Back up your files and customer records to a second place, then test that you can get them back."
    ],
    closing: SOURCES_LINE
  },
  "get-online": {
    title: "Get your business online",
    steps: [
      "Register a business email and a domain name in your own name.",
      "Turn on two-step sign-in (multi-factor authentication) for them.",
      "Make a one-page website that says what you do, where, your hours and how to reach you.",
      "Claim your business listing on the main search and map services, so customers see the right hours and phone number.",
      "Collect real customer reviews, and never fake ones.",
      "Back up the site, and know who can change it."
    ],
    closing: `This order is common practical advice, not an official rule; the security points come from the FTC and NIST (checked ${CHECKED_ON}). This is general information, not advice, and things change. I cannot buy, publish or change anything for you.`
  },
  "protect-email": {
    title: "Make it harder to fake your business email",
    steps: [
      "Find out who manages your domain name or business email: your web host, designer or an email provider.",
      "Ask them to set up email authentication: SPF, DKIM and DMARC. The FTC explains that these three settings make it harder for scammers to send email that looks as if it comes from your business.",
      "Ask them to confirm that all three are working, and keep their answer.",
      "If your email has already been spoofed, the FTC page on email authentication lists what to do."
    ],
    closing: SOURCES_LINE
  },
  "first-ai-task": {
    title: "Start using AI the safe way",
    steps: [
      "Choose one task that takes your time and carries little risk, such as drafting a first version of an email, summarising your notes, or listing the questions customers ask most.",
      "Keep sensitive information out of the tool: never type in passwords, and read the privacy terms before typing in customer, employee or payment information.",
      "Read and correct everything before it reaches a customer. AI answers can be wrong or made up.",
      "If a chatbot answers your customers, say so, and do not claim it can do more than it can.",
      "Write down what you use each tool for, so you can review it later."
    ],
    closing: `The first and last steps are practical advice; the points about safety, claims and honesty come from the FTC (checked ${CHECKED_ON}). This is general information, not advice, and things change. I cannot change anything for you.`
  },
  "after-breach": {
    title: "What to do after a data breach",
    usOnly: true,
    steps: [
      "Write down what happened and when you found out.",
      "Read the FTC's Data Breach Response: A Guide for Business at ftc.gov. It gives the steps for responding and for notifying the people affected.",
      "Ask a lawyer about your state's notification rules, which differ by state.",
      "Tell customers whose information was stolen that they can use IdentityTheft.gov to report it and get a recovery plan.",
      "Report the cybercrime at IC3.gov."
    ],
    closing: `The first step is practical advice; the others come from the FTC (checked ${CHECKED_ON}). This is general information, not legal advice, and rules differ by state. I cannot notify anyone or change anything for you.`
  }
};

const LESSONS = [
  { title: "AI can be wrong", teach: "AI tools can write answers that sound sure and are wrong or made up, so check names, numbers, prices and any legal, tax or medical statement yourself.", ask: "True or false: you can send a price an AI tool wrote to a customer without checking it.", correct: "no", review: "Always check an AI tool's names, numbers, prices and any legal, tax or medical statement before it reaches a customer." },
  { title: "What to keep out", teach: "Never type passwords into an AI tool. Check its privacy terms before typing in customer, employee or payment information, and treat anything you enter as something you may not be able to take back.", ask: "Is it okay to type a customer's card number into an AI chat?", correct: "no", review: "Never type passwords into an AI tool, and read its privacy terms before typing in customer, employee or payment information." },
  { title: "AI scams", teach: "The FTC has banned sellers of \"AI-powered\" business opportunities that promised big earnings. Warning signs are guaranteed earnings, passive income from a tool, and pressure to pay up front. AI can also fake voices and messages, so check any money request through a number you already know.", ask: "A voice that sounds like your supplier asks you to wire money today. Do you do it at once?", correct: "no", review: "If anyone asks for money, a wire or account details, verify the request through a phone number or contact you already know before you act." },
  { title: "Honest reviews", teach: "The FTC's Consumer Reviews and Testimonials Rule bans fake reviews, including AI-generated ones, buying or selling them, and giving rewards only for positive reviews.", ask: "Can you offer a gift card only to customers who leave five stars?", correct: "no", review: "Do not use AI or anyone else to write fake reviews, and do not reward only positive reviews." },
  { title: "Honest claims", teach: "If you advertise that your product or service uses AI, or that an AI tool gets a result, you need evidence. The FTC has ordered firms to stop, and to pay, over AI claims they could not back up.", ask: "May you advertise an AI feature that doubles sales if you have no proof?", correct: "no", review: "Say plainly what the tool does, avoid promising results, and keep the proof for any claim." },
  { title: "Start small", teach: "Start with one task that takes your time and carries little risk, such as a first draft of an email, and keep a person in charge of what reaches customers.", ask: "Should a person read what an AI tool wrote before a customer sees it?", correct: "yes", review: "Keep a person in charge: read and correct everything before it reaches a customer." }
];

function checklistTemplate(id) {
  const list = CHECKLISTS[id];
  return {
    collection: `walk-${id}`, longForm: true,
    intro: `${list.title}: ${list.steps.length} steps. Say done when a step is finished, skip to leave it for later, or cancel to stop.`,
    questions: list.steps.map((step, index) => ({ key: `s${index + 1}`, ask: `Step ${index + 1} of ${list.steps.length}: ${step}`, type: "choice", optional: true, options: DONE })),
    async finish(ctx, answers) {
      const left = list.steps.map((step, index) => ({ step, index })).filter(({ index }) => answers[`s${index + 1}`] !== "done");
      const finished = list.steps.length - left.length;
      const recap = left.length ? `You finished ${finished} of ${list.steps.length}. Still to do: ${left.map(({ step, index }) => `${index + 1}. ${step}`).join(" ")}` : `You finished all ${list.steps.length} steps.`;
      return `${recap} ${list.closing}`;
    }
  };
}

const courseTemplate = {
  collection: "ai-basics-course", longForm: true,
  intro: `AI basics for small business: six short lessons, each with a yes or no question. Say cancel to stop.`,
  questions: LESSONS.map((lesson, index) => ({ key: `l${index + 1}`, ask: `Lesson ${index + 1} of ${LESSONS.length}, ${lesson.title}. ${lesson.teach} Quick check: ${lesson.ask} Yes or no?`, type: "choice", optional: true, options: YES_NO })),
  async finish(ctx, answers) {
    const missed = LESSONS.map((lesson, index) => ({ lesson, index })).filter(({ lesson, index }) => answers[`l${index + 1}`] !== lesson.correct);
    const score = LESSONS.length - missed.length;
    const review = missed.length ? ` To review: ${missed.map(({ lesson, index }) => `lesson ${index + 1}, ${lesson.title}: ${lesson.review}`).join(" ")}` : " Every answer was right.";
    return `You got ${score} of ${LESSONS.length}.${review} The lessons come from the FTC guidance on AI, scams, reviews and claims, and the practical steps are common advice (checked ${CHECKED_ON}). This is general information, not legal or security advice, and things change. Say "start the AI basics course" to take it again.`;
  }
};

const templates = Object.assign({ "ai-basics-course": courseTemplate }, ...Object.keys(CHECKLISTS).map(id => ({ [`walk-${id}`]: checklistTemplate(id) })));

const LEAD = "(?:please\\s+)?(?:can you\\s+|could you\\s+)?(?:walk|guide|take|talk) me through|(?:please\\s+)?(?:give me|start|open|run|do) (?:a |the |my )?(?:step[- ]by[- ]step |)(?:checklist|walkthrough|walk-through)(?: for| on| about)?|(?:please\\s+)?step[- ]by[- ]step[,: ]+";
const TOPICS = [
  ["secure-accounts", /\b(?:secur(?:e|ing)|protect(?:ing)?|lock(?:ing)? down)\s+(?:my|our|the)?\s*(?:business\s+)?(?:accounts?|logins?|sign[- ]?ins?)\b|\b(?:account|login) security\b/i],
  ["get-online", /\b(?:getting|get|putting|put|taking|take|setting up|set up)\s+(?:my|our|the)\s+(?:business|shop|company)\s+online\b|\bonline presence\b|\bbusiness website\b/i],
  ["protect-email", /\b(?:protect(?:ing)?|secur(?:e|ing)|stop(?:ping)?)\b.*\b(?:business |work )?e-?mail\b.*\b(?:spoof\w*|fak\w+|impersonat\w+)\b|\b(?:spf|dkim|dmarc|email authentication)\b|\bspoof(?:ing|ed)?\b.*\be-?mail\b/i],
  ["first-ai-task", /\b(?:start(?:ing)?|begin(?:ning)?|get(?:ting)? started|us(?:e|ing))\b.*\b(?:ai|chat ?gpt|artificial intelligence)\b/i],
  ["after-breach", /\b(?:data )?(?:breach|leak(?:ed)?|hack(?:ed)?)\b/i]
];
const WALK = new RegExp(`^(?:${LEAD})\\s*(.+)$`, "i");
const COURSE = /^(?:please\s+)?(?:(?:start|begin|take|open|run|do)\s+(?:the\s+|an?\s+|my\s+)?(?:ai basics|ai literacy|ai(?: basics)?)\s+(?:mini[- ]?)?(?:course|lessons?|class)|teach me (?:about )?ai(?: basics)?|ai basics)$/i;

function checklistRequest(text) {
  const match = WALK.exec(clean(text).replace(/[.!?]+$/g, ""));
  if (!match) return null;
  const hit = TOPICS.find(([, pattern]) => pattern.test(match[1]));
  return hit ? hit[0] : null;
}

async function handle(ctx) {
  const text = clean(ctx.text).replace(/[.!?]+$/g, "");
  if (COURSE.test(text)) return startGuided(ctx, templates["ai-basics-course"], {});
  const id = checklistRequest(text);
  if (!id) return null;
  // The breach steps name US bodies (the FTC guide, IdentityTheft.gov, IC3.gov), so they are for people in the United States; anyone else carries on to normal conversation.
  if (CHECKLISTS[id].usOnly && !isUsContext({ timeZone: ctx.args?.timeZone, text })) return null;
  return startGuided(ctx, templates[`walk-${id}`], {});
}

module.exports = Object.freeze({ handle, templates, CHECKLISTS, LESSONS, checklistRequest, COURSE, longForm: true });
