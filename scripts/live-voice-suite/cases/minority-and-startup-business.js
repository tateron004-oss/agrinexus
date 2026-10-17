"use strict";
// Questions from owners of minority-owned businesses and startups, answered from the checked guide (nexus/knowledge/us-small-business.js). Each must put the key fact for the topic on the screen
// (the guide adds its sources and the date it was checked to every answer). They change nothing on the account.
const strict = (id, say, key) => ({ id: `mbiz-${id}`, area: "business-guide", say, timeoutMs: 45000, expect: { screen: ["text", "list"], text: key, notText: "I cannot find|not sure what you" } });

module.exports = Object.freeze([
  strict("certified", "How do I get certified as a minority-owned business?", "certif"),
  strict("8a", "What is the 8(a) program?", "8\\(a\\)"),
  strict("nmsdc", "Tell me about NMSDC certification", "NMSDC"),
  strict("mbda", "Is MBDA still open?", "MBDA"),
  strict("sba-loan", "How do I get an SBA loan?", "SBA"),
  strict("grants", "What grants are available for black-owned businesses?", "grant"),
  strict("free-help", "Where can I get free business help?", "SCORE"),
  strict("score-near", "Find a SCORE mentor near 30303", "30303"),
  strict("start", "How do I start a business?", "business plan"),
  strict("start-steps", "What are the steps to start a small business?", "business plan"),
  strict("plan", "How do I write a business plan?", "plan"),
  strict("costs", "How much does it cost to start a business?", "cost"),
  strict("fund", "How can I fund my startup?", "investor|crowdfund|loan"),
  strict("llc-corp", "What is the difference between an LLC and an S corp?", "LLC"),
  strict("ein", "How do I get an EIN for my business?", "EIN"),
  strict("license", "Do I need a business license to sell food?", "licen"),
  strict("bank", "How do I open a business bank account?", "EIN"),
  strict("hire", "How do I hire my first employee?", "W-4|I-9"),
  strict("insurance", "What insurance does a small business need?", "insurance"),
  strict("marketing", "How do I market my small business?", "customers|market"),
  strict("bookkeeping", "What is bookkeeping and how do I do it?", "books|records|income"),
  strict("credit", "How do I build business credit?", "credit"),
  strict("government", "How do I sell to the government?", "SAM\\.gov"),
  strict("estimated-tax", "Do I need to pay estimated taxes on my catering income?", "estimated"),
  strict("wosb", "Can I get WOSB certification?", "certif"),
  strict("register", "How do I register my business?", "EIN|Secretary of State|state"),
  strict("location", "Where should I put my business location?", "zoning"),
  strict("1099", "What is a 1099?", "1099"),
  strict("grow", "How do I grow my business?", "grow|expand|scal"),
  strict("duns-number", "How do I get a DUNS number?", "Dun & Bradstreet"),
  strict("duns-for-government", "Do I need a DUNS number to sell to the government?", "Unique Entity ID"),
  strict("sam-registration", "How do I register my business in SAM.gov?", "SAM\\.gov"),
  strict("structure-pick", "What business structure should I pick for my new business?", "liability|LLC")
]);
