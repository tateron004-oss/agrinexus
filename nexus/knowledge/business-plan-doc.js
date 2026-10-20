"use strict";

// A one-page LEAN business plan built from the answers to Kyro's voice interview (public/kyro-intake-forms.js, "businessPlan") and saved as a document the owner can edit, download and show to a lender, a partner or a mentor.
// The headings are the SBA's lean startup plan (the same nine boxes as the blank template in consulting-templates.js, which says the SBA describes a lean plan as high level, quick to write and typically one page, and a traditional
// plan as detailed, the kind lenders and investors commonly ask for). Under each heading is the owner's own words, word for word, or "Not decided yet": Kyro writes nothing about the business that the owner did not say. Below
// that, the sections a lender may also ask for are listed as things still to do, not filled in. It is a starting plan, general information and not financial advice.
//
// businessPlanDocument(values) -> { title, content } | null   (null when the business or the customers are missing)

const KEYS = Object.freeze(["business", "customers", "value", "channels", "relationships", "revenue", "activities", "resources", "partners", "costs"]);

const clean = value => String(value ?? "").replace(/\s+/g, " ").trim().slice(0, 600);
const orNot = value => clean(value) || "Not decided yet";
const nameOf = business => clean(business).split(/[,.;:]| - | but /)[0].trim().slice(0, 60);

function businessPlanDocument(values) {
  const v = values || {};
  const business = clean(v.business);
  const customers = clean(v.customers);
  if (!business || !customers) return null;
  const title = `Business plan: ${nameOf(business) || business.slice(0, 60)}`.slice(0, 120);
  const lines = [
    "LEAN BUSINESS PLAN (one page)",
    "",
    "Prepared with Kyro from what the business owner said. It is a starting plan. Read it, change anything that is wrong, and fill in anything that says Not decided yet.",
    "",
    "About the business",
    business,
    "",
    "Customer segments (who they are)",
    customers,
    "",
    "Value proposition (why customers choose you)",
    orNot(v.value),
    "",
    "Channels (how customers find you and buy from you)",
    orNot(v.channels),
    "",
    "Customer relationships (how you keep customers)",
    orNot(v.relationships),
    "",
    "Revenue streams (how the business earns money)",
    orNot(v.revenue),
    "",
    "Key activities (the main things you do to run it)",
    orNot(v.activities),
    "",
    "Key resources (what you need to run it)",
    orNot(v.resources),
    "",
    "Key partnerships (who helps you)",
    orNot(v.partners),
    "",
    "Cost structure (your biggest costs)",
    orNot(v.costs),
    "",
    "STILL TO DO IF A LENDER OR INVESTOR ASKS",
    "The SBA describes a lean plan as high level and quick, and a traditional plan as detailed and comprehensive; lenders and investors commonly ask for the traditional one. If you are asking for a loan or investment, you will also need:",
    "1. Executive summary",
    "2. Company description: what the business is, its structure and its advantages",
    "3. Market analysis: your target market, demand, where customers are, and your competitors",
    "4. Organization and management: who runs it and who does what",
    "5. Service or product line",
    "6. Marketing and sales",
    "7. Funding request: how much, for what, and for how long",
    "8. Financial projections: an expense sheet and projections (the SBA suggests five years for a loan application)",
    "Ask Kyro for a business plan template to get this outline with blanks, or ask a business adviser or a business support office near you to go through it with you.",
    "",
    "This plan is general information to help you think and talk with others. It is not legal, tax or financial advice."
  ];
  return { title, content: lines.join("\n") };
}

module.exports = Object.freeze({ KEYS, businessPlanDocument });
