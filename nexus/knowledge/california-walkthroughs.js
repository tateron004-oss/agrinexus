"use strict";

// Step-by-step walkthroughs for the California processes in california-business.js. Kyro walks the person through ONE step at a time and the PERSON does each step; Kyro never applies, files or submits for them. Every step
// is built from the same official pages as the guide (read on its CHECKED_ON date), and carries the official page to open for it. Where an official page lists something Kyro cannot read in full (the list of supporting
// documents for state certification), the step sends the person to that list instead of listing it from memory.
//
// californiaWalkthrough(id) -> { id, title, checkedOn, steps: [{ title, text, gather: [], link: { name, url } | null }], sources: [{ name, url }] } | null     (id as in california-business.js; a DBE has its own)
// walkthroughAsk(text) -> true when the words ask to be walked through something ("walk me through", "step by step", "what are the steps", "help me get ...")

const { CHECKED_ON, SOURCES } = require("./california-business.js");
const { walkthroughAsk } = require("../../public/kyro-business-topics.js"); // (the words that ask to be walked through something are shared with the page)

const W = (term, means) => ({ term, means }); // (a word the person will meet in a step, in plain words: a step may carry done: "..." and words: [W(term, meaning)])
const link = key => ({ name: SOURCES[key].name, url: SOURCES[key].url });

const WALKTHROUGHS = Object.freeze({
  "ca-certification": {
    title: "California Small Business and Microbusiness certification",
    sources: ["dgsApply"],
    steps: [
      { title: "Check that you fit", text: "The State's Small Business certification is for a business that is independently owned and operated and not dominant in its field, with its principal office in California and owners who live in California. With any affiliates, it needs 100 or fewer employees and average annual gross receipts of $19 million or less over the previous three tax years; a manufacturer needs 100 or fewer employees. If your gross receipts are $6 million or less, or you are a manufacturer with 25 or fewer employees, you are automatically a microbusiness too.", gather: [], link: link("dgsApply") },
      { title: "Find the list of documents", text: "Open the Department of General Services page and find the Small Business support documents, the additional support documents and the Affiliate Information Sheet. The page lists what to send. I cannot list it for you from memory, so read it there and gather what it asks for.", gather: ["The documents the DGS page lists for Small Business certification"], link: link("dgsApply") },
      { title: "Register in Cal eProcure", text: "Register your business in Cal eProcure, the state's procurement system. The DGS page links the registration page and a PDF of registration instructions. If you cannot log in later, the FI$Cal Service Center is (855) 421-6355.", gather: [], link: link("dgsApply") },
      { title: "Apply online yourself", text: "Log in to Cal eProcure, choose Get Certified, complete the online application and attach all of the supporting documents. It is your application: I cannot submit it for you.", gather: [], link: link("dgsApply") },
      { title: "Ask if you are stuck", text: "Questions about certification go to the Office of Small Business and DVBE Services: Certification@dgs.ca.gov or (916) 375-4940. The same DGS page also covers applying again later.", gather: [], link: link("dgsApply") }
    ]
  },
  "ca-dbe": {
    title: "DBE certification for California transportation work",
    sources: ["caltransDbe", "caltransReeval"],
    steps: [
      { title: "Check that you fit", text: "A DBE is a for-profit small business at least 51% owned and controlled by owners who are socially and economically disadvantaged. An owner's personal net worth must be under $2,047,000, not counting their interest in the firm, retirement funds and equity in their main home. The firm's average gross receipts over the previous three fiscal years must be under $31,840,000, and lower for some kinds of work. Since the federal rule of 3 October 2025, disadvantage is no longer presumed from race, ethnicity or gender: the owner documents it.", gather: [], link: link("caltransDbe") },
      { title: "Gather the forms", text: "The forms are the DBE Certification Application Package and Instructions, the Personal Net Worth Statement and the Declaration of Eligibility. New applicants also file a Personal Narrative.", gather: ["DBE Certification Application Package and Instructions", "Personal Net Worth Statement", "Declaration of Eligibility", "Personal Narrative"], link: link("caltransReeval") },
      { title: "Start in the DBE System", text: "Start at caltrans.dbesystem.com. The Caltrans pages say new applications are welcome, and they list no application fee.", gather: [], link: link("caltransDbe") },
      { title: "Submit it yourself", text: "You complete and submit your own application: I cannot do it for you. Questions go to DBE.Certification@dot.ca.gov or (916) 324-1700.", gather: [], link: link("caltransDbe") }
    ]
  },
  "ca-state-vendor": {
    title: "Selling to the State of California",
    sources: ["dgsApply"],
    steps: [
      { title: "Register in Cal eProcure", text: "Cal eProcure is the state's procurement system. Register your business there yourself: I cannot do it for you. The Department of General Services page links the registration page and instructions. If you cannot log in, the FI$Cal Service Center is (855) 421-6355.", gather: [], link: link("dgsApply") },
      { title: "Decide about certification", text: "State Small Business and Microbusiness certification is applied for in Cal eProcure too. If you want to be walked through it, say walk me through California small business certification.", gather: [], link: link("dgsApply") },
      { title: "Ask the state's office", text: "Ask the Office of Small Business and DVBE Services which contracts certification helps with: (916) 375-4940 or Certification@dgs.ca.gov.", gather: [], link: link("dgsApply") },
      { title: "Federal contracts are separate", text: "Selling to the federal government is a separate registration (SAM.gov). Ask me how to sell to the federal government when you are ready.", gather: [], link: null }
    ]
  },
  "ca-seller-permit": {
    title: "A California seller's permit",
    sources: ["cdtfaPermit"],
    steps: [
      { title: "Check whether you need one", text: "The California Department of Tax and Fee Administration's Publication 107, Do You Need a California Seller's Permit, explains who needs one. Read it, or call the Customer Service Center at 1-800-400-7115 (TTY 711), Monday to Friday, 7:30 a.m. to 5:00 p.m. Pacific.", gather: [], link: link("cdtfaPermit") },
      { title: "Gather what you need", text: "Have your business details ready, including bank account information and your estimated income, and your personal details: your driver's license number and Social Security number. Substitute documents may be accepted, as the application explains.", gather: ["Business details", "Bank account information", "Estimated income", "Driver's license number", "Social Security number (or the substitute the application allows)"], link: link("cdtfaPermit") },
      { title: "Register yourself", text: "Register online at cdtfa.ca.gov: choose Register Online, then Register a New Business Activity. Or go in person to any CDTFA office, which may be able to issue it the same day. The permit is free, though you may be asked for a security deposit depending on your business and expected taxable sales.", gather: [], link: link("cdtfaPermit") },
      { title: "If your case is special", text: "Sales of a temporary nature, such as Christmas trees or fireworks, can use a temporary permit valid for up to 90 days. If you are buying an existing business, ask CDTFA in writing for a tax clearance 60 days before the purchase, so you do not inherit the previous owner's unpaid taxes.", gather: [], link: link("cdtfaPermit") }
    ]
  },
  "ca-nonprofit-state": {
    title: "After forming a California nonprofit",
    sources: ["ftbNonprofits", "agRegistry"],
    steps: [
      { title: "Know the three separate steps", text: "Forming with the Secretary of State does not make a nonprofit tax-exempt, and federal exemption does not make it exempt in California. After forming you do three things: apply to the Franchise Tax Board for state tax exemption, register as a charity with the Attorney General, and keep the organization in good standing.", gather: [], link: link("ftbNonprofits") },
      { title: "Choose the right FTB form", text: "Use Form 3500A if you have an IRS determination letter and no earlier California exemption. Use Form 3500 if you have no federal exemption, or if a California or federal exemption was revoked. A homeowners association must use Form 3500.", gather: [], link: link("ftbNonprofits") },
      { title: "Gather what the FTB asks for", text: "For Form 3500: the completed form, the Articles of Incorporation endorsed by the Secretary of State and any amendments, your bylaws, an income and expense statement for the current year and the three before it (or a proposed budget for the next four years if you are not yet active), a narrative description of your activities, and your IRS letter or application if you applied. For Form 3500A: the form and your IRS determination letter.", gather: ["Completed Form 3500 or 3500A", "Articles of Incorporation endorsed by the Secretary of State, and amendments", "Bylaws", "Income and expense statements (or a four-year proposed budget)", "Narrative description of your activities", "IRS determination letter or application, if you have one"], link: link("ftbNonprofits") },
      { title: "Sign and send it yourself", text: "Print the form and sign it: electronic signatures are not accepted. Mail it, or upload it through MyFTB. The FTB says no filing fee has been required since 1 January 2021.", gather: [], link: link("ftbNonprofits") },
      { title: "Register with the Attorney General", text: "A charity must register with the Attorney General's Registry of Charities and Fundraisers within 30 days of first receiving charitable assets. File Form CT-1 through the Online Filing Service; the fee is $50. Send your founding documents, your current bylaws and your IRS determination letter, or your FEIN if the letter has not come. The form is signed under penalty of perjury. Hospitals, educational institutions and religious organizations are exempt by law.", gather: ["Founding documents", "Current bylaws", "IRS determination letter (or your FEIN)", "$50 fee"], link: link("agRegistry") },
      { title: "Stay in good standing", text: "File the returns the Franchise Tax Board requires, not only the IRS ones, and the Secretary of State's Statement of Information. A suspended organization cannot accept contributions or sign contracts.", gather: [], link: link("ftbNonprofits") }
    ]
  },
  "ca-la28": {
    title: "Becoming a supplier for the 2028 Olympic and Paralympic Games (LA28)",
    sources: ["la28Strategy", "la28Plan", "rampFood", "rampLa", "la28Supplier"],
    steps: [
      { title: "Register on RAMP LA", text: "LA28 posts all of its competitive sourcing on RAMP LA, the City of Los Angeles' procurement marketplace. Register first: the current food call says a response may not be reviewed unless the business is fully registered with RAMP LA.", gather: [], link: link("rampLa") },
      { title: "Join the LA28 supplier portal", text: "LA28 also has a separate supplier portal where you can register your interest so LA28 can contact you when opportunities come up. Opportunities are not posted there.", gather: [], link: link("la28Supplier") },
      { title: "See whether you count as small or local", text: "LA28 aims to spend 75% of addressable spending with businesses in the Los Angeles region (Los Angeles, Orange, Riverside, San Bernardino or Ventura County) and 25% with small businesses. Small means the SBA size standard for your industry. Micro means 10 or fewer employees, or 25 or fewer for manufacturers. Hyper-local means headquartered in the City of Los Angeles.", gather: [], link: link("la28Plan") },
      { title: "Know the two steps", text: "LA28 buys in two steps: a short Expression of Interest first, then a Request for Quote or Request for Proposal. LA28 tells businesses to check RAMP LA at least every two weeks for new ones.", gather: [], link: link("la28Strategy") },
      { title: "Look at the open call", text: "When I checked, one call was open: the Food Small Business Integration vendor pool, for caterers, food trucks and restaurants. The page gives a deadline of 16 November 2026 at 5:00 p.m. Pacific and its text also says 14 November, so use the earlier date. The questionnaire is linked on that announcement.", gather: [], link: link("rampFood") },
      { title: "Apply yourself, and ask LA28", text: "The application is yours to make on RAMP LA and in the call's questionnaire: I cannot do it for you. LA28's sourcing team is at sourcing@la28.org.", gather: [], link: link("rampFood") }
    ]
  },
  // Forming a business in California: read from the Secretary of State's brochure "Starting a New Business in California" (the fees, the order of the steps and the minimum tax are as it states them).
  "ca-llc": {
    title: "Forming an LLC in California",
    sources: ["sosBrochure", "bizfile", "bizSearch", "calgold", "sosChecklist"],
    steps: [
      { title: "Choose your structure and your name", text: "An LLC has to be registered with the Secretary of State. The Secretary of State says the kind of business you choose affects how you are taxed, your ability to get financing, how the business is run and your personal liability, and it advises talking to a private attorney and a tax accountant first. For the name, the California Business Search tool is only a preliminary check: the Secretary of State does the formal name check when you file or reserve a name.", gather: ["A first and a second choice of business name"], link: link("bizSearch") },
      { title: "Register the LLC yourself", text: "The LLC's form is filed on bizfile Online, the Secretary of State's portal; PDF forms are on its website too. The filing fee is $70. A $15 handling fee applies only if you file in person at the filing counter, not by mail. A certified copy is $5 per document if you want one: the Secretary of State advises getting one, since banks may ask for it. It is your own filing: I cannot file it for you. Questions: the Secretary of State's Business Programs Division, (916) 653-6814.", gather: ["$70 filing fee", "Optional $5 certified copy"], link: link("bizfile") },
      { title: "Register a fictitious business name, if you need one", text: "If you will do business under a name other than the LLC's legal name, the fictitious business name (a DBA) is filed with the county clerk or recorder where the business is located. See your county's website for the forms and fees. The Secretary of State warns that if you operate under an unregistered fictitious name, you may not be able to enforce the contracts you sign.", gather: [], link: link("sosBrochure") },
      { title: "Check your location and your permits", text: "Before you sign a lease or settle on a location, including your home, contact the city and county about zoning and permit rules. Your business address is a public record. The Secretary of State does not issue licenses or permits: use CalGold, the state's permit finder, to see which permits, licenses and registrations apply to you.", gather: [], link: link("calgold") },
      { title: "Employer and tax registrations", text: "If you will have employees, you must register as an employer and get a federal Employer Identification Number (EIN); the brochure lists the IRS and the Employment Development Department for this. Several agencies run California's business taxes: the Franchise Tax Board, the Employment Development Department, the Department of Tax and Fee Administration and the IRS. If you will sell things, ask me to walk you through getting a seller's permit in California.", gather: [], link: link("sosBrochure") },
      { title: "Know the yearly costs and filings", text: "As soon as an LLC is registered with the Secretary of State, it owes the Franchise Tax Board an annual minimum franchise tax of $800, until the LLC's termination documents are filed. The LLC must also file a Statement of Information with the Secretary of State within 90 days of registering, and then every two years, in the calendar month it registered. It can be filed on bizfile Online.", gather: ["$800 annual minimum franchise tax", "Statement of Information within 90 days"], link: link("sosBrochure") }
    ]
  },
  "ca-nonprofit-form": {
    title: "Forming a California nonprofit corporation",
    sources: ["sosBrochure", "bizfile", "bizSearch", "agRegistry", "ftbNonprofits", "irsExempt", "calgold"],
    steps: [
      { title: "Choose the kind of nonprofit and a name", text: "A nonprofit corporation is registered with the Secretary of State as one of three kinds: public benefit, mutual benefit or religious. The Secretary of State advises talking to a private attorney and a tax accountant about which fits you. For the name, the California Business Search tool is only a preliminary check: the Secretary of State does the formal name check when you file or reserve a name.", gather: ["A first and a second choice of name"], link: link("bizSearch") },
      { title: "Register the corporation yourself", text: "The nonprofit's articles are filed on bizfile Online, the Secretary of State's portal. The filing fee is $30 for each of the three kinds. A $15 handling fee applies only if you file in person at the filing counter, not by mail. A certified copy is $5 per document if you want one. It is your own filing: I cannot file it for you.", gather: ["$30 filing fee", "Optional $5 certified copy"], link: link("bizfile") },
      { title: "Registering does not make you tax-exempt", text: "From the moment a nonprofit corporation is registered, it owes the Franchise Tax Board an annual minimum franchise tax of $800, until it applies for and is granted a tax exemption. Tax-exempt status in California needs a separate application to the Franchise Tax Board, and federal exemption needs a separate application to the IRS.", gather: [], link: link("sosBrochure") },
      { title: "Apply for tax exemption", text: "For the state, see the Franchise Tax Board's page for charities and nonprofits. For the federal exemption, the IRS page on applying for tax-exempt status explains the types and the applications. To be walked through the state steps, say walk me through what to do after forming a California nonprofit to be tax exempt.", gather: [], link: link("irsExempt") },
      { title: "Register as a charity, if it applies", text: "If your organization is organized primarily for charitable purposes, you may need to register with the Attorney General's Registry of Charities and Fundraisers within 30 days after receiving assets. There are also yearly renewals and reports after the first registration.", gather: [], link: link("agRegistry") },
      { title: "Permits and yearly filings", text: "The Secretary of State does not issue licenses or permits: use CalGold to see which ones apply. A California nonprofit corporation must file a Statement of Information with the Secretary of State within 90 days of registering, and then every two years, in the calendar month it registered. If you will have employees, you must register as an employer and get a federal Employer Identification Number (EIN).", gather: ["Statement of Information within 90 days"], link: link("calgold") }
    ]
  }
});

function californiaWalkthrough(id) {
  const def = WALKTHROUGHS[id];
  if (!def) return null;
  return { id, title: def.title, checkedOn: CHECKED_ON, steps: def.steps.map(step => ({ title: step.title, text: step.text, gather: step.gather.slice(), done: step.done || null, words: (step.words || []).map(word => ({ term: word.term, means: word.means })), link: step.link })), sources: def.sources.map(key => link(key)) };
}

module.exports = Object.freeze({ WALKTHROUGHS, californiaWalkthrough, walkthroughAsk });
