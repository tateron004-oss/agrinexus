"use strict";

// A checked guide for small, minority-owned and nonprofit businesses in California, for the whole state: state certification, selling to the state, the seller's permit, what a nonprofit does after it is formed, free help,
// grants, and the 2028 Games. It sits beside the United States guide (us-small-business.js) and the state formation guide (state-entities.js) and is asked first when the question names California.
//
// Every statement below was read from an official page on CHECKED_ON (listed in each topic's `sources`). Programmes change, so each answer carries its sources and the date it was checked, says it is general information and
// not legal, tax or financial advice, and tells the person to confirm on the official site. Nothing is invented; where the official page did not say something (the full list of documents for state certification, a fee for
// DBE certification), the answer says where to find it or says nothing. To update an answer, read the official page again, change the text and CHECKED_ON, and run the tests.
//
// californiaTopic(text) -> a topic id, or null (the words are in public/kyro-business-topics.js, shared with the page)
// californiaAnswer(id, { question }) -> { topic, title, text, sources: [{ name, url }] } or null

const business = require("./us-small-business.js");
const { californiaTopic } = require("../../public/kyro-business-topics.js");

const CHECKED_ON = "19 October 2026";

const SOURCES = Object.freeze({
  dgsApply: { name: "California DGS: apply for Small Business (SB) and Microbusiness certification", url: "https://www.dgs.ca.gov/PD/Services/Page-Content/Procurement-Division-Services-List-Folder/Apply-for-or-Re-apply-as-Small-Business-Disabled-Veteran-Business-Enterprise" },
  caltransDbe: { name: "Caltrans: DBE certification information", url: "https://dot.ca.gov/programs/civil-rights/dbe-certification-information" },
  caltransReeval: { name: "Caltrans: DBE certification and reevaluation", url: "https://dot.ca.gov/programs/civil-rights/dbe-reevaluation" },
  cdtfaPermit: { name: "CDTFA: applying for a seller's permit (Publication 107)", url: "https://cdtfa.ca.gov/formspubs/pub107/applying-for-a-sellers-permit.htm" },
  agRegistry: { name: "California Attorney General: initial registration with the Registry of Charities and Fundraisers", url: "https://oag.ca.gov/charities/initial-reg" },
  ftbNonprofits: { name: "California Franchise Tax Board: help with charities and nonprofits", url: "https://www.ftb.ca.gov/file/business/types/charities-nonprofits/help-with-charities-nonprofits.html" },
  calosbaCenters: { name: "CalOSBA: find a small business technical assistance center", url: "https://calosba.ca.gov/centers-search/" },
  calosbaDreamFund: { name: "CalOSBA: California Dream Fund program", url: "https://calosba.ca.gov/funding-grants-incentives/california-dream-fund-program/" },
  la28Strategy: { name: "LA28: procurement strategy announcement", url: "https://la28.org/en/newsroom/la28-details-procurement-strategy-to-boost-regional-economy.html" },
  la28Plan: { name: "LA28 Procurement Plan (March 2026)", url: "https://la28.org/content/dam/latwentyeight/downloads/LA28ProcurementPlan2026.pdf" },
  rampLa: { name: "RAMP LA (City of Los Angeles procurement marketplace)", url: "https://www.rampla.org/s/" },
  rampFood: { name: "RAMP LA: LA28 Food Small Business Integration vendor pool (PA-00128)", url: "https://www.rampla.org/s/procurement-announcement-details?id=a1NQl0000043nczMAA" },
  la28Supplier: { name: "LA28 supplier portal", url: "https://la28.supplierone.co/" }
});

const TOPICS = Object.freeze({
  "ca-certification": {
    title: "Certifications in California for minority-owned and other small businesses",
    text: "In California, certifications come from different offices, and an owner may hold more than one. (1) The State's Small Business (SB) and Microbusiness certification, from the Department of General Services (DGS) and applied for in Cal eProcure: the business must be independently owned and not dominant in its field, with its principal office in California and owners who live in California, and, with affiliates, 100 or fewer employees and average gross receipts of $19 million or less over the previous three tax years (a manufacturer needs 100 or fewer employees). A certified small business is automatically a microbusiness if its gross annual receipts are $6 million or less, or if it is a manufacturer with 25 or fewer employees. It is a size certification, not one about the owner's background. Register in Cal eProcure first, then choose Get Certified; the DGS page links the full list of supporting documents. Questions: Certification@dgs.ca.gov or (916) 375-4940. (2) DBE certification for transportation work, through Caltrans and the California Unified Certification Program: a for-profit small business at least 51% owned and controlled by owners who are socially and economically disadvantaged, with personal net worth under $2,047,000 and average gross receipts under $31,840,000. Since the federal rule of 3 October 2025, disadvantage is no longer presumed from race, ethnicity or gender, so owners document it with a personal narrative and a net worth statement. Apply through caltrans.dbesystem.com; the Caltrans page lists no application fee; questions: DBE.Certification@dot.ca.gov or (916) 324-1700.",
    sources: ["dgsApply", "caltransDbe", "caltransReeval"],
    plus: "certification"
  },
  "ca-state-vendor": {
    title: "Selling to the State of California",
    text: "To work with the State of California, start in Cal eProcure, the state's procurement system: register your business there. It is also where you apply for the State's Small Business and Microbusiness certification, which the Department of General Services' Office of Small Business and DVBE Services (OSDS) runs. Ask OSDS which contracts certification helps with: (916) 375-4940 or Certification@dgs.ca.gov. For Cal eProcure login help, the FI$Cal Service Center is (855) 421-6355. Federal contracts are a separate registration (SAM.gov): ask me how to sell to the federal government.",
    sources: ["dgsApply"]
  },
  "ca-seller-permit": {
    title: "A California seller's permit",
    text: "A California seller's permit is registered with the California Department of Tax and Fee Administration (CDTFA). There is no charge, though depending on your business type and expected taxable sales you may be asked for a security deposit. Register online at cdtfa.ca.gov (Register Online, then Register a New Business Activity), or in person at a CDTFA office, which may be able to issue it the same day. Have ready your business details, including bank account information and estimated income, and your driver's license number and Social Security number (substitute documents may be accepted, as the application explains). Sales of a temporary nature, such as Christmas trees or fireworks, can use a temporary permit valid for up to 90 days. If you are buying an existing business, ask CDTFA in writing for a tax clearance 60 days before the purchase, so you do not inherit the previous owner's unpaid taxes. Help: 1-800-400-7115 (TTY 711), Monday to Friday, 7:30 a.m. to 5:00 p.m. Pacific time.",
    sources: ["cdtfaPermit"]
  },
  "ca-nonprofit-state": {
    title: "After forming a California nonprofit: tax exemption, the charity registry and good standing",
    text: "After a California nonprofit is formed, three things are separate from the Secretary of State filing. (1) State tax exemption: registering with the Secretary of State does not make you tax-exempt, and federal exemption does not make you exempt in California; you apply to the Franchise Tax Board. Use Form 3500A if you have an IRS determination letter and no earlier California exemption, and Form 3500 otherwise (a homeowners association must use 3500). The signed form is mailed or uploaded through MyFTB; electronic signatures are not accepted; the FTB says no filing fee is required since 1 January 2021. (2) Charity registration: a charity must register with the Attorney General's Registry of Charities and Fundraisers within 30 days of first receiving charitable assets, with Form CT-1 through the Online Filing Service and a $50 fee, with its founding documents, bylaws and IRS determination letter (or its FEIN if the letter has not come). Hospitals, educational institutions and religious organizations are exempt by law. (3) Good standing: file the returns the FTB requires, not only the IRS ones, and the Secretary of State's Statement of Information. A suspended organization cannot accept contributions or sign contracts.",
    sources: ["agRegistry", "ftbNonprofits"]
  },
  "ca-free-help": {
    title: "Free help for California small businesses and nonprofits",
    text: "California funds free help. CalOSBA's small business technical assistance centers give no-cost one-on-one consulting and low-cost training, in more than 30 languages, for startup business plans, access to finance, growth, e-commerce, marketing and more, at any stage of a business. To find the nearest one, open the CalOSBA centers page and search by your ZIP code or location, choosing a distance of one to ten miles. I cannot look up a center for you here, so open the page and search.",
    sources: ["calosbaCenters"]
  },
  "ca-grants": {
    title: "Grants for California small businesses",
    text: "Grants change, and I do not want to promise you one that has closed. For example, the California Dream Fund, a $35 million state programme of microgrants of up to $10,000 for new businesses that completed a technical assistance training, is closed: its last application deadline was 13 February 2023. The nearest CalOSBA technical assistance center can tell you for free, and in your language, which programmes are open now. Federal grants are posted at Grants.gov.",
    sources: ["calosbaDreamFund", "calosbaCenters"],
    plus: "grants"
  },
  "ca-la28": {
    title: "Becoming a supplier for the 2028 Olympic and Paralympic Games (LA28)",
    text: "LA28 posts all of its competitive sourcing on RAMP LA, the City of Los Angeles' procurement marketplace (rampla.org), and tells businesses to register there and check it at least every two weeks for new requests for information and expressions of interest. Register first: the current food call says a response may not be reviewed unless the business is fully registered with RAMP LA. LA28 buys in two steps: a short Expression of Interest, then a Request for Quote or Request for Proposal. Its targets are 75% of addressable spending with businesses in the Los Angeles region (Los Angeles, Orange, Riverside, San Bernardino or Ventura County) and 25% with small businesses; small means the SBA size standard for your industry, and micro means 10 or fewer employees (25 or fewer for manufacturers). LA28 also has a separate supplier portal, la28.supplierone.co, where you can register your interest so LA28 can contact you; opportunities are not posted there. When I checked, one call was open: the Food Small Business Integration vendor pool, for caterers, food trucks and restaurants. Its page gives a deadline of 16 November 2026 at 5:00 p.m. Pacific, and its own text also says 14 November, so use the earlier date to be safe. Contact: sourcing@la28.org. The application is yours to make on RAMP LA and in the call's questionnaire.",
    sources: ["la28Strategy", "la28Plan", "rampFood", "rampLa", "la28Supplier"]
  }
});

const CLOSING = "This is general information, not legal, tax or financial advice, and rules change, so confirm on the official site. I cannot file or apply for anything for you.";

// (a DBE question is answered with the certification topic, which covers the state's and the DBE programme)
const ALIASES = Object.freeze({ "ca-dbe": "ca-certification" });

function californiaAnswer(requested, { question = "" } = {}) {
  const id = ALIASES[requested] || requested;
  const topic = TOPICS[id];
  if (!topic) return null;
  const sources = topic.sources.map(key => SOURCES[key]);
  let body = topic.text;
  let all = sources;
  // the state's own offices first, then the United States guide's answer on the same subject (federal and private certifications, federal grants), with its sources
  if (topic.plus) {
    const general = business.usSmallBusinessAnswer(topic.plus, { question });
    if (general) {
      const generalText = String(general.text || "").replace(/\s*Sources:[\s\S]*$/, "").trim();
      body = `${topic.text} Beyond California: ${generalText}`;
      const seen = new Set(sources.map(source => source.url));
      all = [...sources, ...general.sources.filter(source => !seen.has(source.url))];
    }
  }
  return { topic: id, title: topic.title, text: `${body} Sources: ${all.map(source => source.name).join("; ")} (checked ${CHECKED_ON}). ${CLOSING}`, sources: all };
}

module.exports = Object.freeze({ CHECKED_ON, TOPICS, SOURCES, californiaTopic, californiaAnswer });
