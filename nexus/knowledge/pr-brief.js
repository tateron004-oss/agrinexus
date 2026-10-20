"use strict";

// The brief a small business owner can give to a PR or event firm, built from the answers to Kyro's voice interview (public/kyro-intake-forms.js, "prBrief") and saved as a document the owner can edit, download and send.
// It is KYRO'S OWN starting template, not an official format, and says so inside the document. Kyro writes only what the owner said, word for word, and "Not decided yet" where the owner said nothing: it never adds goals,
// audiences or claims of its own. The questions to ask a firm come from the guide's "hiring a PR or event firm" answer (pr-events-guide.js), and the point about reviews and testimonials from the FTC's page, which that
// answer cites. Kyro does not send the brief to anyone and does not choose or contact a firm.
//
// prBriefDocument(values) -> { title, content } | null   (null when the business or the goal is missing)

const KEYS = Object.freeze(["business", "goal", "audience", "message", "budget", "timeline", "past", "approver", "needs", "avoid"]);

const clean = value => String(value ?? "").replace(/\s+/g, " ").trim().slice(0, 600);
const orNot = value => clean(value) || "Not decided yet";

const QUESTIONS = Object.freeze([
  "Who will actually do the work, and who will be my contact?",
  "Can you show examples of similar work, and give me people I can call?",
  "What is included in the price, and what is not?",
  "How are fees and expenses charged, and when?",
  "How do you get media coverage? How do you get any reviews or testimonials? (The FTC says advertising agencies and public relations firms can be liable for fake reviews and testimonials.)",
  "How will you measure results, and how often will you report them?",
  "What do you need from me, and by when?",
  "What happens if the work is not delivered?"
]);

function prBriefDocument(values) {
  const v = values || {};
  const business = clean(v.business);
  const goal = clean(v.goal);
  if (!business || !goal) return null;
  const title = `PR and events brief: ${business}`.slice(0, 120);
  const lines = [
    "PR AND EVENTS BRIEF",
    "",
    "Prepared with Kyro from what the business owner said. This is Kyro's own starting template, not an official format. Read it, change anything that is wrong, and add what is missing before you send it.",
    "",
    "1. About the business",
    business,
    "",
    "2. What we want this work to achieve (our goal)",
    goal,
    "",
    "3. Who we need to reach",
    orNot(v.audience),
    "",
    "4. The one thing we want them to know",
    orNot(v.message),
    "",
    "5. Budget",
    orNot(v.budget),
    "",
    "6. Dates that cannot move",
    orNot(v.timeline),
    "",
    "7. What we have already tried, and what worked",
    orNot(v.past),
    "",
    "8. Who decides, and who approves anything before it goes out",
    orNot(v.approver),
    "",
    "9. Languages and accessibility we need",
    orNot(v.needs),
    "",
    "10. What we do not want",
    orNot(v.avoid),
    "",
    "QUESTIONS TO ASK THE FIRM",
    ...QUESTIONS.map((question, index) => `${index + 1}. ${question}`),
    "",
    "Get the agreement in writing: what will be done, by when, for what price, and who approves what. This brief is general information to help you ask good questions; it is not legal advice."
  ];
  return { title, content: lines.join("\n") };
}

module.exports = Object.freeze({ KEYS, QUESTIONS, prBriefDocument });
