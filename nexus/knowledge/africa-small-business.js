"use strict";

// A first checked guide for small business owners in KENYA and NIGERIA: registering a business, taxes, the government's support for small businesses, and government funding. General information read from the official
// pages of each country's own agencies on CHECKED_ON; every answer names its sources and that date, says it is general information and not legal, tax or financial advice, and says Kyro cannot register, file or apply
// for anything. Where an official page could not be read, or where official pages disagree or have changed (a tax rate after a new Finance Act, a fee), the answer says so and sends the person to the agency, instead of
// stating a figure. The same shape is meant for other countries, each with its own official sources.
//
// africaCountry({ timeZone, country, text }) -> "ke" | "ng" | null.   africaTopic(text, { timeZone, country }) -> a topic id or null.   africaAnswer(id) -> { text, sources, topic, title } or null.

const CHECKED_ON = "10 October 2026";

const SOURCES = Object.freeze({
  brs: { name: "Business Registration Service (Kenya)", url: "https://brs.go.ke/" },
  kra: { name: "Kenya Revenue Authority", url: "https://www.kra.go.ke/" },
  kraTot: { name: "KRA: Turnover Tax (TOT)", url: "https://www.kra.go.ke/individual/filing-paying/types-of-taxes/turnover-tax-tot" },
  msea: { name: "Micro and Small Enterprises Authority (Kenya)", url: "https://www.msea.go.ke/" },
  hustler: { name: "Hustler Fund (Kenya): personal loan", url: "https://www.hustlerfund.go.ke/personal-loan" },
  hustlerSite: { name: "Hustler Fund (Kenya)", url: "https://www.hustlerfund.go.ke/" },
  cac: { name: "Corporate Affairs Commission (Nigeria): company registration", url: "https://www.cac.gov.ng/services/company-registration" },
  cacSite: { name: "Corporate Affairs Commission (Nigeria)", url: "https://www.cac.gov.ng/" },
  smedan: { name: "SMEDAN (Nigeria): about us", url: "https://smedan.gov.ng/about-us/" },
  smedanShop: { name: "SMEDAN: One Stop Shop", url: "https://smedan.gov.ng/onestopshop/" },
  smedanCac: { name: "SMEDAN: free business registration with CAC", url: "https://smedan.gov.ng/smedan-cac-free-registration-for-msmes/" },
  nrs: { name: "Nigeria Revenue Service", url: "https://www.nrs.gov.ng/" },
  nrsTaxId: { name: "Nigeria Revenue Service: get a Tax ID", url: "https://www.nrs.gov.ng/taxpayer-services/get-a-tax-id" },
  smedanFunds: { name: "SMEDAN: matching fund", url: "https://www.funds.smedan.gov.ng/" }
});

const TOPICS = Object.freeze({
  "ke-register": {
    country: "ke", title: "Registering a business in Kenya",
    text: "In Kenya, businesses are registered by the Business Registration Service (BRS), online through eCitizen. BRS says the name reservation and the business registration have been merged into one step: you submit your three preferred names and the full application online. BRS also runs the Companies Registry, the Official Receiver in Insolvency, the E-Collateral Registry and the Hire Purchase Registry. Micro and small enterprises can also register or formalise through the Micro and Small Enterprises Authority (MSEA) online portal at msea.ecitizen.go.ke. I could not read the fee amounts or the list of business types on BRS's page, so check BRS's fee schedule and its list of registered entities on brs.go.ke, and ask an advocate or an accountant which type suits you; I cannot tell you which one to choose. After you register you will need a KRA PIN: ask me about 'KRA tax'.",
    sources: ["brs", "msea"]
  },
  "ke-tax": {
    country: "ke", title: "Business taxes in Kenya (KRA)",
    text: "Kenya's tax authority is the Kenya Revenue Authority (KRA). Businesses register for tax and get a Personal Identification Number (PIN) on KRA's iTax portal, itax.kra.go.ke; KRA has separate PIN registration pages for individuals, for companies and partnerships, and for not-for-profits. KRA names these taxes among others: income tax, Pay As You Earn (PAYE), withholding tax, Value Added Tax (VAT) and Turnover Tax (TOT). On its own Turnover Tax page, KRA says TOT applies to a resident person or company whose gross turnover is more than Kshs 1,000,000 and not more than Kshs 25,000,000 in a year; the rate is 1.5 percent of gross sales, effective 1 July 2023 under the Finance Act 2023; no expenses are deducted and it is a final tax; the return and payment are due by the 20th day of the month after the tax period; income such as rent and management, professional or training fees is excluded; you may choose in writing not to be taxed under TOT; and a TOT taxpayer with vatable supplies of Kshs 5,000,000 or more must also register for VAT. The page also lists a late filing penalty of 1,000 a month, 5 percent of the tax for late payment and 1 percent interest. KRA's site now also shows a 'Finance Act 2026' notice that I have not read, so these figures may have changed: check KRA's current turnover tax page, or ask a tax agent or accountant, before you rely on them.",
    sources: ["kra", "kraTot"]
  },
  "ke-support": {
    country: "ke", title: "Government support for small businesses in Kenya (MSEA)",
    text: "The Micro and Small Enterprises Authority (MSEA) is Kenya's government agency for small businesses. Its site shows: online registration and formalisation of micro and small enterprises at msea.ecitizen.go.ke; a one-stop shop at the Kariobangi Biashara Centre in Nairobi, where service providers include MSEA, KRA, KEBS, KIRDI, KenInvest, NMC, KIE, KENAS, ICDC and KIPI; programmes named on its site including KJET and NYOTA; and common user machinery for groups in some counties. MSEA states its role includes providing suitable facilities and funding for micro and small enterprises. To reach MSEA: phone +254 20 3340006, email info@msea.go.ke, Utalii House, 10th floor, Utalii Lane, Nairobi; its site also has a page of county offices. I could not read how to apply for each service, so contact MSEA or your county office to ask what is open to you now.",
    sources: ["msea"]
  },
  "ke-funding": {
    country: "ke", title: "Government funding for small businesses in Kenya (Hustler Fund)",
    text: "The Hustler Fund is a government fund that lends by mobile phone. On its personal loan page: you must be a Kenyan citizen aged 18 or older with a valid national ID, registered on M-Pesa, Airtel Money or T-Kash, with a SIM card active for at least 90 days; you dial *254# and choose the loan request option, and the money goes to your mobile wallet; the loan is from KES 100 to KES 50,000 depending on your credit score and repayment history; the interest is 8 percent a year, calculated daily, rising to 9.5 percent if you are more than 14 days late; you repay within 14 days; there is no collateral; and 5 percent of each loan goes into your savings. Repaying on time can raise your limit and open other products such as the Bridge Loan; group loans also exist. Those figures come from a page with some unfinished text on it and a 2025 date, so confirm the current terms at hustlerfund.go.ke or by dialling *254# before you borrow. Other government funds exist: MSEA can tell you which are open. Practical advice, not an official rule: use only the official site, the USSD code or an agency office, and be careful with anyone who asks for a fee to guarantee you a loan or grant.",
    sources: ["hustler", "hustlerSite", "msea"]
  },
  "ng-register": {
    country: "ng", title: "Registering a business in Nigeria (CAC)",
    text: "In Nigeria, businesses are registered by the Corporate Affairs Commission (CAC). CAC's company registration page and FAQ describe this route: check that the name is available with a name search through your account on the CAC portal; reserve the name (names are reserved for up to 60 days, and you may offer at most two options); complete the pre-registration online and upload your documents; pay the filing and stamp duty fees through the portal; then download your electronic certificate. CAC's checklist says a private company other than one limited by guarantee can be formed by one person, that subscribers, directors and the secretary need a valid photo ID, and that regulated businesses such as banks need approval in principle first. A business name has its own form asking for the proposed name, the nature of the business, the start date and the principal place of business. CAC also has accredited agents who can file for you. I could not open CAC's fee schedule, so check the current fees on cac.gov.ng. SMEDAN and CAC announced a programme of free registration for 250,000 small businesses (the announcement is about a year old): ask SMEDAN whether it is still open. I cannot tell you whether a business name or a company suits you; ask a lawyer or an accountant.",
    sources: ["cac", "cacSite", "smedanCac"]
  },
  "ng-tax": {
    country: "ng", title: "Business taxes in Nigeria (NRS)",
    text: "Nigeria's federal tax authority is now the Nigeria Revenue Service (NRS), and its site lists the Nigeria Tax Act 2025, the Nigeria Tax Administration Act 2025 and the NRS Establishment Act 2025 under its tax laws. It has a 'Get a Tax Identification Number (TIN)' page and a Tax ID portal at taxid.nrs.gov.ng. Nigeria's tax law has been reformed recently, including the rules for small companies. Published sources I found disagree on the turnover limit for a small company (figures of 25 million, 50 million and 100 million naira appear), and I could not read the contents of the NRS pages, so I will not give you a figure or say what you must file: check the NRS site, ask NRS or a tax professional, and note that a small company may still have to file returns even when no tax is due. You also need to be registered with CAC first: ask me about 'CAC registration'. The One Stop Shop page of SMEDAN lists what FIRS asked for before: a TIN, your CAC documents, VAT and company income tax registration forms, a utility bill and evidence of tax clearance; confirm what NRS asks for now.",
    sources: ["nrs", "nrsTaxId", "smedanShop"]
  },
  "ng-support": {
    country: "ng", title: "Government support for small businesses in Nigeria (SMEDAN)",
    text: "The Small and Medium Enterprises Development Agency of Nigeria (SMEDAN) calls itself a one stop shop for MSME development. Its stated mission is to give small businesses access to knowledge, funding, tools and markets. Its site lists: registration of your business on the SMEDAN portal, portal.smedan.gov.ng/signup; training and skill development; specialised funding schemes including low-interest loans and grants; and market linkages, trade fairs and exhibitions. SMEDAN's One Stop Shop page lists the requirements of other agencies in one place: CAC, FIRS (now NRS), NAFDAC for food and drugs, SON for product standards, NEPC for exports, the Bank of Industry, NEPZA, the Central Bank, the Bank of Agriculture and NIPC. The page gives no fee amounts and contains some copy mistakes, so verify each agency's contact details and requirements with the agency. To reach SMEDAN: email info@smedan.gov.ng; its head office is in the Industrial Area, Idu, Abuja, and its site lists zonal and state offices.",
    sources: ["smedan", "smedanShop"]
  },
  "ng-funding": {
    country: "ng", title: "Government funding for small businesses in Nigeria",
    text: "SMEDAN lists specialised funding schemes for small businesses, including low-interest loans and grants, and has a matching fund site at funds.smedan.gov.ng; its One Stop Shop page also lists the Bank of Industry, the Bank of Agriculture and the Central Bank among the agencies with finance for small businesses, with the documents each asks for (usually your CAC registration, a tax number and a business plan). I could not confirm any current amounts, eligibility rules or application dates, because they change, so go to each agency's own site or office to ask what is open now. Practical advice, not an official rule: use only the agency's own website or office, and be careful with anyone who asks for a fee to guarantee you a loan or grant. Ask me 'how do I write a business plan' for what lenders commonly ask to see.",
    sources: ["smedan", "smedanShop", "smedanFunds"]
  }
});

const KENYA_ZONES = /^Africa\/Nairobi$/;
const NIGERIA_ZONES = /^Africa\/Lagos$/;
const KENYA_WORDS = /\b(kenya|kenyan|kra|itax|ecitizen|e-citizen|brs|msea|hustler fund|kshs?|ksh)\b/i;
const NIGERIA_WORDS = /\b(nigeria|nigerian|cac|firs|nrs|smedan|naira|nafdac|boi)\b|₦/i;
function africaCountry({ timeZone = "", country = "", text = "" } = {}) {
  const said = String(text || ""); const zone = String(timeZone || ""); const place = String(country || "").toLowerCase();
  if (KENYA_WORDS.test(said) && !NIGERIA_WORDS.test(said)) return "ke";
  if (NIGERIA_WORDS.test(said) && !KENYA_WORDS.test(said)) return "ng";
  if (KENYA_ZONES.test(zone) || place === "kenya" || place === "ke") return "ke";
  if (NIGERIA_ZONES.test(zone) || place === "nigeria" || place === "ng") return "ng";
  return null;
}

// does the question itself name a Kenyan or Nigerian agency or place?
function africaNamed(text) { return KENYA_WORDS.test(String(text || "")) || NIGERIA_WORDS.test(String(text || "")); }

const ASKS = /(?:[?]|^(?:please\s+|kyro,?\s+)?(?:how|what|which|when|where|why|who|should|can|could|do|does|is|are|am|will|would|tell me|explain|help me|i need|i want|i('| a)m looking for|any|give me (?:info|information|advice)|find (?:me|a|an|the|my)|show me|recommend|suggest)\b)/i;
const RECORD_OR_DRAFT = /^(?:please\s+)?(?:sold|bought|log|record|add|save|remind|set|create|draft|write|make|mark|list|delete|forget|call|text|send|play|open|start|translate|export|convert|build)\b/i;
const MATCHERS = [
  ["register", /\b(?:regist\w+|incorporat\w+|business name|company name|licen[cs]e|permit|formali[sz]\w+|legal (?:form|structure)|type of business|sole proprietor\w*|partnership|limited company|company limited|ltd|llc)\b/i],
  ["tax", /\b(?:tax(?:es)?|pin|tin|vat|paye|withholding|turnover|return(?:s)?|itax|tax id|revenue authority|kra|firs|nrs)\b/i],
  ["funding", /\b(?:loans?|funds?|funding|financ\w+|grants?|capital|borrow\w*|credit|hustler|investor\w*|raise money|startup money)\b/i],
  ["support", /\b(?:help|support|training|mentor\w*|advice|advis\w+|business development|msea|smedan|one[- ]stop|government (?:help|support|programme|program)|where (?:can|do) i (?:get|find|go))\b/i]
];
function africaTopic(text, { timeZone = "", country = "" } = {}) {
  const value = String(text || "").replace(/\s+/g, " ").trim();
  if (!value || value.length > 300) return null;
  if (RECORD_OR_DRAFT.test(value) || !ASKS.test(value)) return null;
  const where = africaCountry({ timeZone, country, text: value });
  if (!where) return null;
  // the question has to be about business: a person in Nairobi asking for the weather or a recipe is not asking this guide
  if (!/\b(?:business|businesses|company|shop|startup|start-?up|enterprise|msme|sme|trade|trader|customers?|invoice|payroll|employees?|kra|cac|firs|nrs|smedan|msea|tax(?:es)?|pin|tin|vat|hustler)\b/i.test(value)) return null;
  for (const [kind, pattern] of MATCHERS) if (pattern.test(value)) return `${where}-${kind}`;
  return null;
}

const CLOSING = "This is general information, not legal, tax or financial advice, and rules, fees and programmes change, so confirm with the agency. I cannot register, file or apply for anything for you.";
function africaAnswer(id) {
  const topic = TOPICS[id];
  if (!topic) return null;
  const sources = topic.sources.map(key => SOURCES[key]);
  return { topic: id, title: topic.title, text: `${topic.text} Sources: ${sources.map(source => source.name).join("; ")} (checked ${CHECKED_ON}). ${CLOSING}`, sources };
}

module.exports = Object.freeze({ CHECKED_ON, TOPICS, SOURCES, africaCountry, africaNamed, africaTopic, africaAnswer });
