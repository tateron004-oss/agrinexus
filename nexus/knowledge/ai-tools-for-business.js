"use strict";

// Choosing AI tools for the jobs a small business has: planning and funding documents, marketing, customer service and day-to-day operations. For any owner in any country (the United States and Africa alike).
//
// Vendor-neutral on purpose: Kyro describes the KINDS of AI tool that fit each job and what to check before choosing one, and does not name, rank or recommend products or companies (they change quickly, and Kyro has
// no relationship with any of them). The jobs and the cautions come from the SBA's "AI for small business" page; the privacy, claims, reviews and scams points come from the FTC pages the technology guide already
// carries (small-business-technology.js); every one of them was read on CHECKED_ON. The few "practical questions" (phone and data use, language, currency, leaving) are labelled as practical questions, not as a source.
// They are US government sources, so for a person outside the United States the answer says that laws and programmes there may differ.
//
// aiToolsTopic(text) -> a topic id, or null.   aiToolsAnswer(id, { us }) -> { text, sources: [{ name, url }], topic, title } or null.

const { CHECKED_ON, SOURCES: TECH_SOURCES } = require("./small-business-technology.js");

const SOURCES = Object.freeze({
  sbaAi: { name: "SBA: AI for small business", url: "https://www.sba.gov/counseling/manage-your-business/#ai-for-small-business" },
  ftcAi: TECH_SOURCES.ftcAi,
  ftcPrivacyAi: TECH_SOURCES.ftcPrivacyAi,
  ftcReviews: TECH_SOURCES.ftcReviews,
  sbaPlan: { name: "SBA: write your business plan", url: "https://www.sba.gov/counseling/plan-your-business/#business-plan" },
  sbaMarketing: { name: "SBA: marketing and sales (make a marketing plan)", url: "https://www.sba.gov/counseling/manage-your-business/#marketing-and-sales" }
});

const TOPICS = Object.freeze({
  "ai-tools-overview": {
    title: "What kinds of AI tools help a small business",
    text: "The SBA's advice is to start small, because AI is relatively new, and to test free or low-cost tools to see whether they add value to your business. These are the kinds of AI tool that match the jobs the SBA lists. Writing and documents: general AI assistants and writing tools can draft business plans, job postings, blogs and product descriptions. Brainstorming: the same assistants can suggest logo concepts and a marketing plan that fits a budget, and can point out hidden costs or financial risks in a project. Photos and video: AI editing tools. Social media: tools that draft and schedule posts across platforms. Customer service: website chatbots, phone call routing, and drafting replies to online reviews. Repeating tasks: scheduling meetings, reminders, sorting email, to-do lists, restocking and summarising meetings. Your own numbers: tools that look for patterns in your business data. Security: AI-based security software. I do not name or rank products: they change quickly and I have no relationship with any company. Ask me 'how do I choose an AI tool' for what to check first, or 'AI for my business plan', 'AI for marketing', 'AI for customer service' or 'AI for operations' for each job.",
    sources: ["sbaAi", "ftcAi"]
  },
  "ai-tools-choose": {
    title: "How to choose an AI tool",
    text: "Before you pick any AI tool: One, test the free or low-cost version first, as the SBA suggests. Two, read its privacy terms before you type in customer, employee or payment information, never type in passwords, and avoid entering sensitive or proprietary information; the FTC says AI companies must keep the privacy and confidentiality promises they make. Three, have a person check what it produces for accuracy, security and ethics, and check that the output does not copy someone's patents, copyrights or trademarks, because AI draws on web content (the SBA says so). Four, be wary of big claims: the FTC has acted against companies that could not back up their AI claims and against 'AI income' offers with guaranteed earnings, passive income or demands to pay up front. Five, the SBA warns that AI-written outreach can be flagged as spam or feel impersonal, so a person should read messages before they go out. Six, the SBA suggests a short public statement about how you use AI. These are practical questions I add, not an official source: Does it work well on a phone and with limited data? Does it work in the language you and your customers use? Can you pay in your own currency, and what happens when the free period ends? Can you take your work with you if you leave? Who owns what it produces? Which local laws apply to you? The SBA suggests consulting an attorney, especially about local laws.",
    sources: ["sbaAi", "ftcPrivacyAi", "ftcAi"]
  },
  "ai-for-planning": {
    title: "AI for a business plan, a roadmap and funding",
    text: "AI assistants can help with a first draft of a business plan (the SBA lists it), a pitch, or a list of questions to ask. Use them to brainstorm and to organise your thoughts, and have a person check everything: AI answers can be wrong or made up, so never let a tool invent numbers, market figures, or legal and tax facts. Get those from the official source: your government's small business agency, tax authority and business registry (in the United States, the SBA, the IRS and your state's Secretary of State). Check your plan's sections against an official outline: ask me 'how do I write a business plan'. Do not paste confidential financial figures or investor documents into a tool whose privacy terms you have not read. For funding, an AI tool can summarise or draft, but it cannot tell you what you qualify for: use the official funding finders (in the United States, SBA Lender Match and Grants.gov) and be careful with anyone who charges a fee to guarantee funding. I can save a blank business plan, growth roadmap or funding checklist for you to complete: say 'draft a business plan'.",
    sources: ["sbaAi", "sbaPlan", "ftcAi"]
  },
  "ai-for-marketing": {
    title: "AI for marketing and being seen",
    text: "The SBA lists these marketing uses: editing photos and videos; writing blogs and product descriptions, including from your own marketing content; drafting and scheduling social media posts across platforms; brainstorming logo concepts and a marketing plan that fits your budget; and better-targeted ads. Cautions from the SBA: have a person review the content so it reflects your business and its values; AI-written outreach may be flagged as spam or seem impersonal; and check that images and text do not infringe patents, copyrights or trademarks. From the FTC: never use AI, or anyone else, to write fake reviews or testimonials, and do not claim a product or tool does more than it does. A good first job is one small task, such as product descriptions or a week of posts, that a person checks before it goes out. Ask me 'how do I write a marketing plan' for the official outline.",
    sources: ["sbaAi", "sbaMarketing", "ftcReviews", "ftcAi"]
  },
  "ai-for-customers": {
    title: "AI for customer service",
    text: "The SBA lists these customer service uses: a website chatbot that answers common questions or completes an order, phone call routing to the right department, and drafting courteous replies to online reviews. Cautions: have a person review messages that matter before they go out, because AI-written messages can seem impersonal or be flagged as spam; do not let customers type payment details or passwords into a chatbot you have not checked; keep the privacy promises you make (the FTC says AI is not exempt from the laws that apply to businesses); and do not claim the chatbot can do more than it can. Practical advice, not an official rule: tell customers when a chatbot is answering, test it with the questions customers really ask, and make it easy to reach a person. Start with the few questions customers ask most.",
    sources: ["sbaAi", "ftcPrivacyAi", "ftcAi"]
  },
  "ai-for-operations": {
    title: "AI for everyday operations",
    text: "The SBA lists these operations uses: repeating tasks such as scheduling meetings, setting reminders, sorting email, updating to-do lists, restocking inventory and summarising meetings; looking at your own business data for patterns and comparing your business with similar ones; and AI-based security software that can process more data and respond faster to attacks. Cautions: avoid entering sensitive or proprietary information, and have a person review what a tool produces. I did not find official guidance on AI for bookkeeping, payroll or tax, so keep a person, such as an accountant, in charge of your money records. Kyro itself keeps reminders, lists, customer follow-ups and invoice records: ask me 'what can Kyro automate for my business'.",
    sources: ["sbaAi", "ftcAi"]
  }
});

const { aiToolsTopic } = require("../../public/kyro-technology-topics.js");

const CLOSING = "This is general information, not legal, tax, financial or security advice, and AI tools change quickly, so check each tool's current terms. I cannot sign you up for, buy or change any tool for you.";
const OUTSIDE_US = "These are United States government sources: laws, programmes and rules about AI and business differ in your country, so check with your local business or trade office too.";

function aiToolsAnswer(id, { us = true } = {}) {
  const topic = TOPICS[id];
  if (!topic) return null;
  const sources = topic.sources.map(key => SOURCES[key]);
  const where = us ? "" : ` ${OUTSIDE_US}`;
  return { topic: id, title: topic.title, text: `${topic.text} Sources: ${sources.map(source => source.name).join("; ")} (checked ${CHECKED_ON}).${where} ${CLOSING}`, sources };
}

module.exports = Object.freeze({ CHECKED_ON, TOPICS, SOURCES, aiToolsTopic, aiToolsAnswer });
