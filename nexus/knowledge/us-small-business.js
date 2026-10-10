"use strict";

// A checked guide for small and minority-owned business owners in the United States: free help, certifications, loans, grants, taxes, licences and selling to the government.
//
// Every statement below was read from an official page on CHECKED_ON (listed in each topic's `sources`). Programmes change, so each answer carries its sources and the date it was checked, says it is general
// information and not legal, tax or financial advice, and tells the person to confirm on the official site. Nothing here is invented; where the official pages did not say something (for example whether every SBA
// certification is free), the answer does not say it either. To update an answer, read the official page again, change the text and CHECKED_ON, and run the tests.
//
// usSmallBusinessTopic(text) -> a topic id, or null. Only a QUESTION or a request for help is taken; a record ("log a tax payment of $300"), a draft ("draft a grant proposal") or other talk is not.
// usSmallBusinessAnswer(id) -> { text, sources: [{ name, url }], topic } or null.

const CHECKED_ON = "9 October 2026";

const SOURCES = Object.freeze({
  localAssistance: { name: "SBA Local Assistance", url: "https://www.sba.gov/local-assistance" },
  scoreFaq: { name: "SCORE FAQs", url: "https://www.score.org/score-faqs" },
  gaoMbda: { name: "U.S. GAO report GAO-26-107718 on MBDA Business Centers (27 March 2026)", url: "https://www.gao.gov/products/gao-26-107718" },
  nmsdcMbda: { name: "NMSDC statement on the MBDA termination letters", url: "https://nmsdc.org/news/statement-from-nmsdc-ceo-and-president-ying-mcguire-regarding-the-mbda-termination-letters" },
  sba8a: { name: "SBA 8(a) Business Development program", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/8a-business-development-program" },
  fr8a: { name: "Federal Register, SBA final rule on 8(a) social disadvantage (11 August 2026)", url: "https://www.federalregister.gov/documents/2026/08/11/2026-16370/reforms-to-13-cfr-124103-to-remove-sbas-8a-programs-rebuttable-presumption-of-social-disadvantage" },
  nmsdc: { name: "NMSDC (National Minority Supplier Development Council)", url: "https://www.nmsdc.org/" },
  sbaCerts: { name: "SBA certifications", url: "https://www.sba.gov/certifications/" },
  sbaLoans: { name: "SBA loans", url: "https://www.sba.gov/funding-programs/loans" },
  cdfi: { name: "CDFI Fund", url: "https://www.cdfifund.gov/" },
  grants: { name: "Grants.gov", url: "https://www.grants.gov/" },
  irsEstimated: { name: "IRS estimated taxes", url: "https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes" },
  irsSelfEmployed: { name: "IRS self-employed individuals tax center", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" },
  irs1040es: { name: "IRS Form 1040-ES (2026)", url: "https://www.irs.gov/pub/irs-pdf/f1040es.pdf" },
  sbaLicenses: { name: "SBA: apply for licenses and permits", url: "https://www.sba.gov/business-guide/launch-your-business/apply-licenses-permits" },
  // the startup library: structure, nonprofit, plan, steps, funding, growth, marketing, names, registration
  sbaStructure: { name: "SBA: choose a business structure", url: "https://www.sba.gov/business-guide/launch-your-business/choose-business-structure" },
  irsStructures: { name: "IRS: business structures", url: "https://www.irs.gov/businesses/small-businesses-self-employed/business-structures" },
  irsSingleLlc: { name: "IRS: single member limited liability companies", url: "https://www.irs.gov/businesses/small-businesses-self-employed/single-member-limited-liability-companies" },
  irsLlcElection: { name: "IRS: LLC filing as a corporation or partnership", url: "https://www.irs.gov/businesses/small-businesses-self-employed/llc-filing-as-a-corporation-or-partnership" },
  irsCorporation: { name: "IRS: forming a corporation", url: "https://www.irs.gov/businesses/small-businesses-self-employed/forming-a-corporation" },
  irsSCorp: { name: "IRS: S corporations", url: "https://www.irs.gov/businesses/small-businesses-self-employed/s-corporations" },
  irs501c3: { name: "IRS: exemption requirements for 501(c)(3) organizations", url: "https://www.irs.gov/charities-non-profits/charitable-organizations/exemption-requirements-501c3-organizations" },
  irsApplyExempt: { name: "IRS: applying for tax-exempt status", url: "https://www.irs.gov/charities-non-profits/applying-for-tax-exempt-status" },
  irsUbit: { name: "IRS: unrelated business income tax", url: "https://www.irs.gov/charities-non-profits/unrelated-business-income-tax" },
  sbaPlan: { name: "SBA: write your business plan", url: "https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan" },
  sbaMarketResearch: { name: "SBA: market research and competitive analysis", url: "https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis" },
  sbaStartGuide: { name: "SBA: the business guide (plan and launch your business)", url: "https://www.sba.gov/business-guide/10-steps-start-your-business" },
  sbaFund: { name: "SBA: fund your business", url: "https://www.sba.gov/business-guide/plan-your-business/fund-your-business" },
  secCrowdfunding: { name: "SEC: Regulation Crowdfunding guidance for issuers", url: "https://www.sec.gov/resources-small-businesses/small-business-compliance-guides/regulation-crowdfunding-guidance-issuers" },
  secExempt: { name: "SEC: exempt offerings", url: "https://www.sec.gov/resources-small-businesses/exempt-offerings" },
  sbaGrow: { name: "SBA: grow your business", url: "https://www.sba.gov/business-guide/grow-your-business" },
  sbaMarketing: { name: "SBA: marketing and sales (make a marketing plan)", url: "https://www.sba.gov/business-guide/manage-your-business/marketing-sales" },
  sbaName: { name: "SBA: choose your business name", url: "https://www.sba.gov/business-guide/launch-your-business/choose-your-business-name" },
  uspto: { name: "USPTO: what is a trademark", url: "https://www.uspto.gov/trademarks/basics/what-trademark" },
  sbaRegister: { name: "SBA: register your business", url: "https://www.sba.gov/business-guide/launch-your-business/register-your-business" },
  sbaTaxIds: { name: "SBA: get federal and state tax ID numbers", url: "https://www.sba.gov/business-guide/launch-your-business/get-federal-state-tax-id-numbers" },
  sbaStartupCosts: { name: "SBA: calculate your startup costs", url: "https://www.sba.gov/business-guide/plan-your-business/calculate-your-startup-costs" },
  sbaCredit: { name: "SBA: establish business credit", url: "https://www.sba.gov/business-guide/plan-your-business/establish-business-credit" },
  sbaBuyFranchise: { name: "SBA: buy an existing business or franchise", url: "https://www.sba.gov/business-guide/plan-your-business/buy-existing-business-or-franchise" },
  sbaInsurance: { name: "SBA: get business insurance", url: "https://www.sba.gov/business-guide/launch-your-business/get-business-insurance" },
  sbaLocation: { name: "SBA: pick your business location", url: "https://www.sba.gov/business-guide/launch-your-business/pick-your-business-location" },
  sbaBank: { name: "SBA: open a business bank account", url: "https://www.sba.gov/business-guide/launch-your-business/open-business-bank-account" },
  sbaHire: { name: "SBA: hire and manage employees", url: "https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees" },
  sbaFinances: { name: "SBA: manage your finances", url: "https://www.sba.gov/business-guide/manage-your-business/manage-your-finances" },
  sbaTaxes: { name: "SBA: pay taxes", url: "https://www.sba.gov/business-guide/manage-your-business/pay-taxes" }
});

const TOPICS = Object.freeze({
  "free-help": {
    title: "Free business help",
    text: "There is free or low-cost help for small business owners in the United States. SBA and its partners offer free or low-cost counselling and training through Small Business Development Centers (SBDCs), SCORE business mentors, Women's Business Centers and Veterans Business Outreach Centers. To find the one near you, search by ZIP code at sba.gov/local-assistance. SCORE mentoring is free: request a mentor at score.org (you do not need a business plan or an established business first) and expect a reply within about two days.",
    sources: ["localAssistance", "scoreFaq"]
  },
  mbda: {
    title: "MBDA Business Centers",
    text: "The Minority Business Development Agency (MBDA) has funded Business Centers for minority-owned businesses: the U.S. Government Accountability Office counted 39 active centers in 2024. Since 2025 the agency and its centers have been through termination notices, court orders, staffing cuts and proposed budget cuts, and I could not confirm which centers are open today. Before you rely on an MBDA center, contact it or the national MBDA office to confirm it is open. SBDCs, SCORE mentors and Women's Business Centers are the dependable free help; search by ZIP code at sba.gov/local-assistance.",
    sources: ["gaoMbda", "nmsdcMbda", "localAssistance"]
  },
  "8a": {
    title: "SBA 8(a) Business Development program",
    text: "The 8(a) program helps small businesses owned by socially and economically disadvantaged people compete for federal contracts; it does not guarantee any contract. To qualify you generally must be a small business, at least 51% owned and controlled by U.S. citizens who are socially and economically disadvantaged, with personal net worth of $850,000 or less, adjusted gross income of $400,000 or less, total assets of $6.5 million or less, and usually two years in business. Important change: since 10 September 2026, an individually owned applicant is no longer presumed socially disadvantaged because of race or ethnicity and must show it with verifiable evidence; firms already admitted are not affected. To apply: identify your main NAICS code, register in SAM.gov, then apply through SBA Certifications; SBA has 90 days to decide a complete application. The program lasts at most nine years, and a person can take part only once.",
    sources: ["sba8a", "fr8a", "sbaCerts"]
  },
  nmsdc: {
    title: "NMSDC Minority Business Enterprise (MBE) certification",
    text: "NMSDC, the National Minority Supplier Development Council, certifies Minority Business Enterprises (MBEs) through 23 regional councils. NMSDC describes MBE certification as ownership-based: the business is generally at least 51% owned, operated and controlled by U.S. citizens who belong to the minority groups NMSDC lists. It is a private programme, not a government one: it helps corporate buyers find qualified suppliers and does not award contracts, guarantee business or control any company's buying. Start with your regional council through nmsdc.org and ask it for the exact requirements, documents and any fees.",
    sources: ["nmsdc"]
  },
  certification: {
    title: "Certifications for minority-owned, women-owned, veteran-owned and other small businesses",
    text: "There are several different certifications, and calling your business minority-owned is not one of them. (1) SBA programmes, applied for through certifications.sba.gov: 8(a) for socially and economically disadvantaged owners, Women-Owned Small Business (WOSB), HUBZone, and veteran-owned and service-disabled veteran-owned. Share sensitive information only on official, secure sites. (2) NMSDC Minority Business Enterprise (MBE) certification, a private programme that corporate buyers use for supplier diversity. (3) State, city and transportation (DBE) certifications, which differ by place, so check your state's business or transportation office. Rules for showing disadvantage have changed recently, so check each programme's current requirements before you apply.",
    sources: ["sbaCerts", "nmsdc", "fr8a"]
  },
  loans: {
    title: "Small business loans",
    text: "SBA does not lend directly; its loans come through lenders. 7(a) loans are SBA's main programme for long-term financing for many business purposes. 504 loans give long-term, fixed-rate financing for growth through community Certified Development Companies. Microloans are small loans of up to $50,000 through nonprofit microlenders. Use SBA's Lender Match to be matched with lenders, or find a community lender (a CDFI) through the CDFI Fund at cdfifund.gov. A Small Business Development Center or a SCORE mentor can help you prepare your plan and records for free.",
    sources: ["sbaLoans", "cdfi", "localAssistance"]
  },
  grants: {
    title: "Grants",
    text: "Federal agencies post their grant and cooperative agreement opportunities at Grants.gov. Whether a business can apply depends on each opportunity's own eligibility section, so read it before you spend time on an application. Be careful with anyone who charges a fee to find you a grant or to guarantee one.",
    sources: ["grants"]
  },
  "estimated-tax": {
    title: "Estimated taxes for the self-employed",
    text: "If you are self-employed (a sole proprietor, partner or S corporation shareholder) and expect to owe $1,000 or more in tax when you file, the IRS generally expects you to pay estimated tax during the year with Form 1040-ES. For 2026 the payment dates are 15 April, 15 June, 15 September and 15 January 2027; when a date falls on a weekend or legal holiday, the next business day counts. To avoid an underpayment penalty you generally must have paid the smaller of 90% of this year's tax or 100% of last year's. You also pay self-employment tax (Social Security and Medicare) and report your business income on Schedule C. You can pay online, by phone, through the IRS app or your IRS online account, and in smaller instalments as long as enough is paid by each date. Farmers and fishers and higher earners have special rules.",
    sources: ["irsEstimated", "irsSelfEmployed", "irs1040es"]
  },
  "1099": {
    title: "Form 1099 for payments you make",
    text: "If you pay contractors or others for your business, you are most likely required to file an information return (a Form 1099). The IRS instructions for Forms 1099-MISC and 1099-NEC give the current thresholds and due dates, which have changed over the years, and the due date for payments to non-employees has generally been 31 January. A tax preparer can tell you what applies to you.",
    sources: ["irsSelfEmployed"]
  },
  licenses: {
    title: "Business licences and permits",
    text: "Most businesses need some licences or permits, and which ones depend on what you do and where. Federal licences apply to a few activities, for example alcohol, firearms, aviation, broadcasting and some agriculture. States regulate more, for example restaurants, construction and retail, and cities and counties set their own rules. To find yours: list what your business does and where, check the federal list, then look up your state, county and city (SBA suggests your Secretary of State's website and local government websites), apply, and put renewal dates in your calendar. A Small Business Development Center can help you find them for free.",
    sources: ["sbaLicenses", "localAssistance"]
  },
  // ---- the startup library: what a new or growing business asks first. General information read from official pages; never a recommendation for one person. ----
  "business-structure": {
    title: "Choosing a business structure",
    text: "A business structure is the legal form of your business. It affects your personal liability, how profits are taxed, how you register and how you can raise money. I cannot tell you which one is right for you: that depends on your goals, your state and your finances. The SBA describes these common ones. A sole proprietorship is what you are if you do business without registering as anything else; you can be held personally liable for its debts, and it can be hard to raise money because you cannot sell stock. In a partnership, profits pass through to the partners' personal tax returns, and the SBA recommends a partnership agreement. A limited liability company (LLC) generally protects your personal assets 'in most instances', with limits, and profits pass through to its members. A corporation offers the strongest protection from personal liability, according to the SBA, but costs more to form, needs more record keeping, and can raise capital by selling stock. An S corporation is a tax status you elect with the IRS on top of a corporation. A benefit corporation is taxed like a C corporation but must also produce a public benefit. A nonprofit corporation is registered with the state and separately applies to the IRS for tax exemption. The SBA says business counselors, attorneys and accountants can help you choose, and a business tax specialist can confirm your needs; SBDC and SCORE counselors give free or low-cost help, so they are a good first conversation. Ask me about 'LLC versus corporation', 'what is an S corporation' or 'for-profit versus nonprofit' for more.",
    sources: ["sbaStructure", "irsStructures", "localAssistance"]
  },
  "llc-vs-corp": {
    title: "LLC and corporation: how they differ",
    text: "Liability: the SBA says an LLC generally protects owners' personal assets 'in most instances' (that protection has limits) and that a corporation offers the strongest protection but costs more to form. Taxes, from the IRS: a single-member LLC is by default disregarded as separate from its owner for income tax, so its income is reported on the owner's return and the owner pays self-employment tax like a sole proprietor; an LLC with more than one member is by default a partnership and files Form 1065. An LLC can file Form 8832 to be taxed as a corporation, and a qualifying LLC can elect S corporation status. A C corporation is a separate taxpaying entity that files Form 1120: its profit is taxed at the corporate level and taxed again when paid to shareholders as dividends, which the IRS calls a double tax. An LLC with employees is treated as a separate entity for employment taxes and needs its own EIN. Setting up: an LLC files articles of organization and names a registered agent (the SBA recommends an operating agreement); a corporation files articles of incorporation (the SBA recommends bylaws) and has more record keeping and reporting. Raising money: a corporation can sell stock. Some states limit how long an LLC can last, and a change in members may need to be covered by your agreement. Which is better for you is a question for an attorney and a tax professional; I cannot recommend one.",
    sources: ["sbaStructure", "irsSingleLlc", "irsLlcElection", "irsCorporation"]
  },
  "s-corp": {
    title: "S corporations",
    text: "An S corporation is a tax election, not a separate kind of company: the SBA says you file with the IRS for S corporation status, separately from registering with your state. The IRS says an S corporation passes its income, losses, deductions and credits through to its shareholders, who report them on their personal returns at individual rates, which avoids double taxation of corporate income (the corporation can still owe tax on certain built-in gains and passive income). To qualify it must be a domestic corporation with no more than 100 shareholders and only one class of stock; shareholders can be individuals, certain trusts and estates, but not partnerships, corporations or nonresident aliens; certain financial institutions and insurance companies cannot elect. The corporation files Form 2553, signed by all shareholders, and the IRS page points to the form's instructions for the deadline. An S corporation must follow the strict filing and operating rules of a corporation, and states differ in how they tax one. Whether it suits your business is a question for a tax professional.",
    sources: ["irsSCorp", "sbaStructure", "irsLlcElection"]
  },
  "for-profit-nonprofit": {
    title: "For-profit and nonprofit",
    text: "The SBA says a nonprofit corporation's profits cannot be distributed to members or to political campaigns, which is the main difference from a for-profit business. A nonprofit corporation is registered with the state and separately applies to the IRS for tax exemption; the SBA says these are often called 501(c)(3) corporations. The IRS says a 501(c)(3) must be organized and operated exclusively for exempt purposes, none of its net earnings may benefit a private shareholder or individual, it cannot try to influence legislation as a substantial part of its activities, and it cannot take part in campaign activity for or against candidates. You apply online with Form 1023, through Pay.gov, or with Form 1023-EZ, the streamlined version. A nonprofit can still owe tax: income from a trade or business that is regularly carried on and not substantially related to its exempt purpose can be taxed as unrelated business income, and a Form 990-T is required at $1,000 or more of gross unrelated business income. For doing both, the SBA describes a benefit corporation as taxed like a C corporation but required to produce a public benefit as well as profit, recognized by a majority of states. I did not find an official page that sets out how to run a for-profit business and a nonprofit side by side, so that is a question for an attorney and a tax professional, and SBDC and SCORE counselors give free or low-cost help to prepare for those conversations.",
    sources: ["sbaStructure", "irs501c3", "irsApplyExempt", "irsUbit"]
  },
  "business-plan": {
    title: "Writing a business plan",
    text: "The SBA describes two common types. A traditional plan is very detailed, takes more time to write and can run to dozens of pages; its sections are the executive summary, company description, market analysis, organization and management, service or product line, marketing and sales, funding request and financial projections, and you do not have to follow the outline exactly. A lean startup plan is high level, fast to write and typically one page, and can take as little as an hour; it covers key partnerships, key activities, key resources, value proposition, customer relationships, customer segments, channels, cost structure and revenue streams. Lenders and investors commonly ask for a traditional plan, and a lean plan may not be enough for some of them. For a loan, the SBA suggests having a business plan, an expense sheet and five-year financial projections. The SBA ties market research and competitive analysis to the market analysis section: demand, market size, where customers are, how crowded the market is, and your competitors' strengths and weaknesses. I can save a blank plan for you to fill in: say 'draft a business plan'. SBDC and SCORE counselors give free or low-cost help with plans.",
    sources: ["sbaPlan", "sbaMarketResearch", "localAssistance"]
  },
  "startup-steps": {
    title: "Steps to start a business",
    text: "The SBA's business guide lays out the steps in two groups. Plan your business: market research and competitive analysis, write your business plan, calculate your startup costs, establish business credit, fund your business, and buy an existing business or franchise. Launch your business: pick your business location, choose a business structure, choose your business name, register your business, get federal and state tax ID numbers, apply for licenses and permits, open a business bank account, and get business insurance. Not every step applies to every business, and the details depend on your state and your kind of business. SBA partners offer free or low-cost counseling and training: find your nearest SBDC or SCORE mentor by ZIP code at sba.gov/local-assistance. Ask me about any step, for example 'how do I write a business plan' or 'what is an EIN'. I can also save a blank plan or a growth roadmap for you to fill in.",
    sources: ["sbaStartGuide", "localAssistance"]
  },
  "startup-funding": {
    title: "Ways to fund a startup",
    text: "The SBA describes these. Self-funding: your own savings, family and friends or a 401(k); you take on all the risk, and early retirement withdrawals can bring fees or penalties. Investors (angel investors or venture capital firms): they put in money in return for an ownership share, usually want a say, and there is no guaranteed way to get it; the SBA suggests checking that an investor is reputable and has startup experience. Crowdfunding: raising money from many people, who typically, the SBA says, receive your product or a perk rather than ownership; read each platform's fine print. Bank or credit union loans: lenders expect a business plan, an expense sheet and five-year financial projections. SBA-guaranteed loans: use SBA's Lender Match tool. SBA investment programs: Small Business Investment Companies (SBIC), and the SBIR and STTR research awards. Selling ownership is regulated: the SEC says every offer and sale of securities must be registered or qualify for an exemption, and names Regulation D, Regulation Crowdfunding and Regulation A. Under Regulation Crowdfunding, eligible companies can raise up to $5,000,000 in 12 months online through an SEC-registered intermediary and must file a Form C. Talk to a securities attorney before you sell shares to investors. Ask me about 'SBA loans' or 'grants' for those, and be careful with anyone who charges a fee to guarantee funding.",
    sources: ["sbaFund", "secExempt", "secCrowdfunding", "sbaLoans"]
  },
  "growth-scaling": {
    title: "Growing and scaling a business",
    text: "The SBA's 'grow your business' pages cover: getting more funding (preparing a business case and financial statements, and loans); expanding to new locations (preparing a new market, licensing, foreign qualification and franchising); merging and acquiring businesses (valuing a target, a sales agreement and transferring ownership); becoming a federal contractor; and exporting products (trade assistance, international buyer programs and export finance guarantees). It also has pages for minority-owned, women-owned, veteran-owned, Native American-owned, military spouse and rural businesses. SBDCs offer free consulting and low-cost training, including export help, and U.S. Export Assistance Centers give export guidance. I did not find a single roadmap template on the SBA's pages. What those pages do ask for is a marketing plan that sets goals for the next year and is reviewed at least yearly, a business plan with financial projections, and market research on your customers and competitors. I can save a blank growth roadmap with those pieces for you to fill in: say 'draft a growth roadmap'.",
    sources: ["sbaGrow", "sbaMarketing", "sbaMarketResearch", "localAssistance"]
  },
  "marketing-visibility": {
    title: "Marketing and getting seen",
    text: "The SBA says a marketing plan describes the actions you will take to persuade potential customers to buy, and turns your strategy into action. It recommends sections for your target market (size, demographics and demand trends), your competitive advantage, a sales plan, marketing and sales goals for the next year, a marketing action plan (the channels, pricing, promotions and after-sale support), a budget, and a way to measure and update the plan. Compare your marketing and sales costs with the revenue they produce to learn what is working, and review the plan at least once a year. Market research on who your customers are, where they are and who your competitors are comes first. For being found by larger buyers, certifications and supplier directories help: ask me about 'certifications' or 'selling to the government'. For your online presence and honest reviews, ask me 'how do I get my business online' and 'can I use AI to write reviews'.",
    sources: ["sbaMarketing", "sbaMarketResearch", "localAssistance"]
  },
  "name-trademark": {
    title: "Business names and trademarks",
    text: "The SBA describes four kinds of registration for a name. Your entity name is registered with your state, and most states do not allow a name that someone else has registered. A trade name, or DBA ('doing business as'), gives no legal protection by itself, and most states require you to register one if you use it; the rules vary by state, county and city. A federal trademark protects your name, goods and services nationally, and the SBA advises checking your name against the USPTO's official trademark database. A domain name is registered through an accredited registrar. The USPTO says a trademark can be any word, phrase, symbol, design or combination that identifies your goods or services; you do not have to register one, and you get rights by using it, limited to the area where you do business, while a federal registration gives broader, nationwide protection. Whether to register a trademark is a question for an attorney.",
    sources: ["sbaName", "uspto"]
  },
  "ein-registration": {
    title: "Registering your business and getting an EIN",
    text: "The SBA says how and where you register depends on your business structure and location. If you operate under your own legal name as a sole proprietor you may not need to register anywhere. LLCs, corporations, partnerships and nonprofit corporations will probably need to register with each state where they do business, usually through the Secretary of State or a business agency, and need a registered agent in that state. A DBA, if you use one, is registered separately. An Employer Identification Number (EIN) is your business's federal tax ID: the SBA says you need one to pay employees, to operate as a corporation or partnership and to file certain tax returns, and that it is free to apply, so do not use websites that charge a fee. The IRS says an LLC with employees needs an EIN. Whether you need a state tax ID depends on whether your business must pay state taxes, and the steps vary by state. Trademarks, tax-exempt status and S corporation elections are separate federal filings.",
    sources: ["sbaRegister", "sbaTaxIds", "irsSingleLlc"]
  },
  "startup-costs": {
    title: "Calculating your startup costs",
    text: "The SBA says calculating your startup costs helps you estimate profit, run a break-even analysis, secure loans, attract investors and save on tax deductions. The costs depend on whether you are a brick-and-mortar, online or service business; common ones are office space, equipment and supplies, communications and utilities, licenses and permits, insurance, lawyer and accountant fees, inventory and employee salaries, advertising and marketing, market research and a website. One-time costs are the launch itself, such as major equipment, a logo, permits, licenses and fees, and may be tax deductible. Ongoing costs include salaries, rent and utilities, and the SBA says to plan for at least one year of monthly expenses, with five years ideal. For costs you cannot look up, research online and ask mentors, vendors and service providers what similar companies pay; in its break-even example the SBA suggests adding about 10 percent for unpredictable expenses. The SBA has a break-even calculator and a fillable startup-costs worksheet. I can save a blank business plan with a place for your costs: say 'draft a business plan'.",
    sources: ["sbaStartupCosts", "localAssistance"]
  },
  "business-credit": {
    title: "Establishing business credit",
    text: "The SBA says poor credit history is one of the main reasons small business loan applications are declined, and that it can also affect your insurance rates and how attractive you look to partners, suppliers and vendors. Business credit can help you get financing on better terms, negotiate supply agreements and guard against business identity theft. The SBA also says that loan eligibility for a new business is typically based on its owner's personal credit score. The step it lists is to register for a Dun & Bradstreet number, a unique nine-digit identification number for each physical location of your business. To monitor your business credit you can get your company's report from Experian, Equifax, Dun & Bradstreet or smaller credit reporting services, and the SBA says AnnualCreditReport.com is the only authorized source for the free personal credit reports guaranteed by law. Monitor both personal and business reports, especially if you suspect identity theft, and learn how the law protects against discrimination before you apply for a loan or credit line.",
    sources: ["sbaCredit", "localAssistance"]
  },
  "buy-business-franchise": {
    title: "Buying an existing business or a franchise",
    text: "The SBA compares the two. A franchise gives you more guidance and less control: you gain brand recognition, promotions and marketing but must follow the franchisor's rules. Buying an existing business gives you more control and less guidance: it comes with an established customer base, defined operating expenses and trained employees, but without a clear vision or outside guidance it could struggle. Before you decide, work out how much you can invest, weigh your skills and lifestyle, and review the contracts, leases, cash flow and inventory. For a franchise, check its legal, financial and personnel history, your territory and trademark rights, the training and support you get, and the quotas and equipment purchases the contract requires; the SBA notes that franchise contracts usually favor the franchisor. For an existing business, confirm its licenses and permits, zoning and environmental rules, and value it using methods such as capitalized earnings, excess earnings, cash flow or tangible assets. Documents to review include the letter of intent, confidentiality agreement, contracts and leases, financial statements, tax returns and the sales agreement. The SBA suggests a franchise specialist attorney and an accountant, and its Franchise Directory lists brands eligible for SBA financing; inclusion is not an endorsement or approval of the brand and does not guarantee success.",
    sources: ["sbaBuyFranchise", "localAssistance"]
  },
  "business-insurance": {
    title: "Business insurance",
    text: "The SBA lists these kinds. General liability covers financial loss from bodily injury, property damage and related claims, and applies to any business. Product liability covers losses from a defective product that causes harm, for businesses that make, distribute or sell products. Professional liability covers malpractice, errors or negligence, for businesses that serve customers. Commercial property covers loss or damage to company property from events such as fire or vandalism. Home-based business coverage is added to homeowner's insurance as a rider and covers limited business equipment and third-party injury claims. A business owner's policy bundles common coverages and is often cheaper and simpler to buy. If you have employees, the SBA names workers' compensation, unemployment and disability insurance and tells you to check your state's website, because some states require additional coverage. To get insurance, the SBA suggests assessing your risks (accidents, natural disasters, lawsuits), finding a licensed agent who matches your needs (agents earn commissions, so choose one who focuses on your interests), and comparing the rates, terms and benefits you are offered. I cannot tell you which coverage you need.",
    sources: ["sbaInsurance", "localAssistance"]
  },
  "business-location": {
    title: "Picking a business location",
    text: "The SBA says your location sets the taxes, zoning rules and regulations that apply to your business. It advises choosing based on where your target market and business partners are, your own preferences, and the costs and restrictions of different government agencies. Costs that vary by place include salaries, minimum wage, property values, rent, insurance rates, utilities, and licenses and fees; income, sales, property and corporate taxes differ across states, counties and cities. If you buy, rent or build a space it must meet local zoning rules. Zoning is generally set locally, neighborhoods are typically zoned for commercial or residential use, some businesses are restricted or banned in certain areas, and home-based businesses can still be subject to zoning; the SBA recommends contacting your city planning department. State and local governments may offer small business tax credits, state-specific loans and other incentives, and the federal HUBZone program may give businesses in underutilized areas preferential access to federal contracts.",
    sources: ["sbaLocation", "localAssistance"]
  },
  "business-bank-account": {
    title: "Opening a business bank account",
    text: "The SBA says a business account helps keep business funds apart from personal funds, which offers limited personal liability protection, helps you stay legally compliant, lets you set up professional payment options for customers, and lets you authorize employees to handle daily banking. Banks typically ask for your EIN (or your Social Security number if you are a sole proprietor), your business's formation documents, ownership agreements and your business license; some ask for more. Account types include checking, savings, credit card and merchant services accounts, which let you accept credit and debit card payments. The SBA says to shop around, because rates, fees and options vary from bank to bank. Compare introductory offers, interest rates, transaction fees, early termination fees and minimum balance fees; for merchant services, compare the discount rate, per-transaction fees, address verification fees, daily batch fees and monthly minimums. Payment processors are a popular alternative to merchant services accounts, but you still need a business checking account to receive the money.",
    sources: ["sbaBank", "sbaTaxIds"]
  },
  "hiring-employees": {
    title: "Hiring your first employee",
    text: "Before you hire, the SBA says to set up a basic payroll structure: get an EIN, check whether you need state or local tax IDs, decide who will run payroll, and decide whether each worker is an employee or an independent contractor. An independent contractor works under a separate business name and invoices for completed work; if a contractor meets the legal definition of an employee, you may owe back taxes and penalties, provide benefits and reimburse wages under the Fair Labor Standards Act. Each new employee completes a Form W-4, and you complete Form I-9 to verify work eligibility; you keep the I-9 on file and do not submit it. Payroll taxes are reported quarterly and annually, and employers pay Social Security taxes at the same rate as employees. The SBA also lists workers' compensation, unemployment insurance (which varies by state) and disability insurance (which it says is required in California, Hawaii, New Jersey, New York, Rhode Island and Puerto Rico), and you may need to withhold state income tax. You must follow federal and state labor laws, including rules on child labor, foreign workers, veterans and people with disabilities, and display required employee-rights posters, which the SBA says are free from the U.S. Department of Labor. Requirements differ by state, so check yours.",
    sources: ["sbaHire", "localAssistance"]
  },
  "bookkeeping-accounting": {
    title: "Bookkeeping and accounting",
    text: "The SBA says that proper bookkeeping helps keep your business running smoothly. It describes bookkeepers as handling basic day-to-day functions at a lower cost, while CPAs bring formal accounting education and usually cost more but offer more tailored service; you can also consider an online service. Someone should manage accounts receivable, accounts payable, available cash, bank reconciliation and payroll. You can use accrual accounting, which records a sale when it is complete, gives an immediate snapshot and is more complex, or cash accounting, which records it when payment arrives, shows cash flow clearly and gives less long-term clarity. Private companies are not required to follow GAAP, the standards for the accrual method. The SBA advises categorizing your expenses, separating segments of the business (such as online and in-person sales), and comparing the money coming in with the money going out. It calls the balance sheet the foundation of managing your finances and points to a SCORE balance sheet template. I cannot choose software or an accountant for you.",
    sources: ["sbaFinances", "localAssistance"]
  },
  "business-taxes": {
    title: "What taxes a business pays",
    text: "The SBA says businesses must meet federal, state and local tax obligations, and that your business structure and location decide which taxes apply. Most businesses must pay federal taxes, including income and employer taxes. State income taxes depend on your structure: corporations are taxed separately from their owners, while sole proprietors report personal and business income on the same form. If you have employees, state employment taxes vary by state and often include workers' compensation, unemployment insurance and temporary disability insurance, and you may need to withhold employee income tax. The SBA's page does not explain sales tax collection or rates, so ask your state's tax or revenue office whether and how you must collect it. A calendar tax year is the default if you have no special accounting needs; you can also choose a fiscal or short tax year, and the IRS has the detailed rules. For accounting help the SBA suggests a certified public accountant (CPA) or a bookkeeper. Ask me about 'estimated taxes' or 'a 1099' for those.",
    sources: ["sbaTaxes", "localAssistance"]
  },
  "local-help": {
    title: "Finding free business help near you",
    text: "I cannot look up addresses myself, but the official finders do it by ZIP code. At sba.gov/local-assistance, enter your ZIP code to find your nearest Small Business Development Center, Women's Business Center, Veterans Business Outreach Center and SCORE chapter. At score.org, enter your ZIP code under Find a Mentor to request a free mentor. For community lenders (CDFIs), use the Awards Database at cdfifund.gov and choose your state. Your city or county's small business or economic development office and your local chamber of commerce can also point you to local programmes and lenders.",
    sources: ["localAssistance", "scoreFaq", "cdfi"]
  },
  contracting: {
    title: "Selling to the government",
    text: "To sell to the federal government you generally register in SAM.gov, the System for Award Management; SBA's 8(a) steps include it, and its certifications need your SAM registration to be current. SBA warns that look-alike sites such as samregistration.com are not affiliated with SBA, so use the official sites only. Certifications like 8(a), Women-Owned Small Business, HUBZone and veteran-owned are applied for through certifications.sba.gov, and a Small Business Development Center can help you get ready for free.",
    sources: ["sba8a", "sbaCerts", "localAssistance"]
  }
});

// A question, or a request for help: "how do I", "what is", "where can I", "I need a loan", "tell me about", "help me get certified"
const ASKS = /(?:[?]|^(?:please\s+|kyro,?\s+)?(?:how|what|which|when|where|why|who|should|can|could|do|does|is|are|am|will|would|tell me|explain|help me|i need|i want|i('| a)m looking for|any|give me (?:info|information|advice)|find (?:me|a|an|the|my)|show me|look(?:ing)? for|search for)\b)/i;
const RECORD_OR_DRAFT = /^(?:please\s+)?(?:sold|bought|log|record|add|save|remind|set|create|draft|write|make|mark|list|delete|forget|call|text|send|play|open|start|translate|export|convert)\b/i;

const STRUCTURE_TERMS = [/\bllc\b/i, /\bs[- ]?corp/i, /\bc[- ]?corp/i, /\bnon-?profit/i, /\bfor[- ]profit/i, /\bsole proprietor/i, /\bpartnership/i];

// first match wins, most specific first
const MATCHERS = [
  // "Where is the nearest SBDC", "find a SCORE mentor near 30303", "business counselling in my area": the official finders, by ZIP code (this assistant cannot look up addresses)
  ["local-help", /(?=.*\b(?:near me|nearby|nearest|closest|near (?:us|my)|in my (?:area|city|town|county)|zip(?: code)?|\d{5}(?:-\d{4})?)\b)(?=.*\b(?:sbdc|small business development center|score (?:mentor|mentors|chapter)|women'?s business center|veterans? business outreach|business (?:counsel(?:ing|ling|or|ors)|help|center|mentor|mentors|advisor|advisors)|chamber of commerce|cdfi|community lender)\b)/i],
  ["mbda", /\b(mbda|minority business development agency)\b/i],
  ["8a", /\b8\s?\(\s?a\s?\)|\b8a\b/i],
  ["nmsdc", /\b(nmsdc|supplier diversity|minority supplier|minority business enterprise|\bmbe\b)\b/i],
  ["certification", /\b(certif(?:y|ied|ication|ications)|wosb|edwosb|hubzone|sdvosb|vosb|women[- ]owned small business|veteran[- ]owned small business|\bdbe\b)\b/i],
  ["contracting", /\b(sam\.gov|sam registration|register(?:ing)? in sam|government contract(?:s|ing)?|federal contract(?:s|ing)?|sell(?:ing)? to the government|bid(?:ding)? on (?:government |federal )?contracts?)\b/i],
  // investors, crowdfunding and "how do I fund a startup" come before the plain loan answer; "an SBA loan" and "a business loan" still go to loans
  ["startup-funding", /\b(investors?|venture capital|vc funding|angel investors?|crowd-?funding|equity (?:funding|financing|investment)|raise (?:money|capital|funds)|raising (?:money|capital|funds)|funding options|ways to (?:fund|finance)|(?:fund|finance) (?:my|a|our) (?:start-?up|new business)|seed (?:funding|round|money)|(?:start-?up|early[- ]stage) (?:funding|capital|financing|investment)|looking for (?:funding|investment|investors|capital)|investment capital|sell(?:ing)? (?:shares|stock|equity))\b/i],
  ["loans", /\b(sba loans?|7\s?\(a\)|7a loans?|504 loans?|micro-?loans?|small business loans?|business loans?|loan for my business|lender match|cdfi|community development financial|line of credit|start-?up (?:loan|funding|capital)|(?:get|find|apply for|need|want)(?: me)? (?:a )?(?:loan|funding|financing|capital))\b/i],
  ["grants", /\bgrants?\b/i],
  ["estimated-tax", /\b(estimated tax(?:es)?|quarterly tax(?:es)?|1040-?es|self[- ]employment tax|pay (?:my )?taxes (?:on|for) my (?:business|income)|schedule c)\b/i],
  ["1099", /\b1099\b/i],
  ["licenses", /\b(business licen[cs]es?|permits?|licen[cs]e (?:to|for) (?:sell|operate|open|run)|do i need a licen[cs]e)\b/i],
  // the startup library. "What type of business should I have: LLC, S corp, C corp, for-profit, nonprofit?" gets the overview; one named structure gets its own answer. Specific questions about taxes, 1099s and licences above still win.
  ["business-structure", /\b(?:what|which) (?:type|kind|form|structure)s? of (?:business|company|entity)\b|\b(?:type|kind|form|structure) of (?:business|company|entity) (?:should|to|do|is)\b|\bbusiness (?:structures?|entit(?:y|ies))\b/i],
  // two structures compared: "LLC or S corp", "LLC vs corporation", "difference between an S corp and a C corp"
  ["llc-vs-corp", /\bllc\b.{0,40}\b(?:or|vs\.?|versus|and)\b.{0,40}\b(?:s[- ]?corp\w*|c[- ]?corp\w*|corporations?)\b|\b(?:s[- ]?corp\w*|c[- ]?corp\w*|corporations?)\b.{0,40}\b(?:or|vs\.?|versus|and)\b.{0,40}\bllc\b|\bdifference between\b.{0,60}\b(?:llc|corporation|c[- ]?corp|s[- ]?corp)\b/i],
  ["s-corp", /\b(s[- ]?corp(?:oration)?s?|subchapter s|form 2553|2553)\b/i],
  ["for-profit-nonprofit", /\b(non-?profits?|501\s?\(?c\)?\s?\(?3\)?|for[- ]profit|tax[- ]exempt|benefit corporation|b[- ]corp)\b/i],
  ["llc-vs-corp", /\b(llc|limited liability compan(?:y|ies)|c[- ]?corp(?:oration)?s?|corporations?|incorporat(?:e|ing|ion)|articles of (?:organization|incorporation)|operating agreement)\b/i],
  ["business-structure", /\b(sole proprietor(?:ship)?|partnerships?|business structure)\b/i],
  ["business-plan", /\b(business plans?|lean (?:start-?up )?plan|executive summary|financial projections?)\b/i],
  ["name-trademark", /\b(business name|company name|trade ?marks?|dba|doing business as|assumed name|trade name|domain name|brand name|name (?:my|a|the|our) (?:business|company))\b/i],
  ["ein-registration", /\b(ein|employer identification number|register(?:ing)? (?:my|a|the|our) (?:business|company|llc|corporation)|registered agent|tax id(?: number)?s?|secretary of state)\b/i],
  // the rest of the SBA's startup steps. These come before "startup-steps" so that "how much does it cost to start a business" is about costs and "franchise" is not "growth".
  ["startup-costs", /\b(start-?up costs?|how much (?:does|will|do|would) it cost to (?:start|open|launch)|cost(?:s)? (?:of|to) (?:start|starting|open|opening|launch|launching)|break-?even|how much money (?:do i|will i) need to (?:start|open|launch))\b/i],
  ["business-credit", /\b(business credit|build(?:ing)? credit for my (?:business|company)|d-?u-?n-?s|dun (?:&|and) bradstreet|credit (?:score|report) for my (?:business|company))\b/i],
  ["buy-business-franchise", /\b(franchis(?:e|es|ing|or)|buy(?:ing)? (?:an? )?(?:existing )?(?:business|company)|purchas(?:e|ing) (?:an? )?(?:existing )?(?:business|company))\b/i],
  ["business-insurance", /\b(business insurance|insurance for my (?:business|company|shop|store|restaurant)|what insurance (?:does|do|should) (?:my|a|an) (?:small |new )?(?:business|company|shop|store|restaurant|startup|llc)|(?:general |product |professional )?liability insurance|workers'? comp\w*|business owner'?s policy|commercial (?:property )?insurance)\b/i],
  ["business-location", /\b(zoning|business location|location for my (?:business|company|shop|store)|where (?:should|do) i (?:open|locate|set up|put) (?:my|a) (?:business|shop|store)|pick(?:ing)? (?:a )?(?:business )?location|home-?based business|run(?:ning)? (?:a )?business (?:from|out of) (?:my )?home)\b/i],
  ["business-bank-account", /\b(business bank account|business checking|(?:open|opening) (?:a )?(?:business )?bank account|merchant services?|payment processors?|separate (?:my )?(?:business|personal) (?:and|from) (?:my )?(?:personal|business)|accept (?:credit |debit )?cards?)\b/i],
  ["hiring-employees", /\b(hir(?:e|ing) (?:my |our |a |an |the )?(?:first |new )?(?:employees?|workers?|staff)|first employee|payroll|w-?4|i-?9|independent contractors?|employee or (?:an )?(?:independent )?contractor|contractor or (?:an )?employee|become an employer|new hires?)\b/i],
  ["bookkeeping-accounting", /\b(bookkeep\w*|accountants?|accounting (?:software|method|system)|cash (?:vs\.?|versus|or) accrual|accrual|balance sheet|cpa|keep(?:ing)? (?:track of )?(?:my )?(?:books|records)|track(?:ing)? (?:my )?(?:income|expenses|revenue))\b/i],
  ["business-taxes", /\b(business taxes|taxes (?:for|on|does|do|should) (?:my|a|an) (?:small |new )?(?:business|llc|company)|what taxes|sales tax|tax year|fiscal year|state (?:income |employment )?taxes|pay(?:ing)? (?:my )?business taxes)\b/i],
  ["startup-steps", /\b((?:start|starting|launch|launching|open|opening) (?:a |my |our )?(?:new |own )?(?:small )?(?:business|company|start-?up)|steps to (?:start|launch)|start-?up checklist|i(?:'m| am) (?:starting )?(?:a )?start-?up|i(?:'m| am) a (?:new|first[- ]time) (?:business )?owner|first steps (?:for|in|of) (?:my|a) business)\b/i],
  ["growth-scaling", /\b(grow(?:ing|th)? (?:my|our|the|a) ?(?:business|company|revenue|sales)?|scal(?:e|ing|ability)|expand(?:ing)? (?:my|our|the) (?:business|company)|expansion|new (?:locations?|markets?)|exporting|franchis(?:e|ing)|roadmap|merg(?:e|ing)|acqui(?:re|ring|sition))\b/i],
  ["marketing-visibility", /\b(market(?:ing)? (?:my|our|the|a) ?(?:business|plan|strategy)|marketing (?:plan|strategy)|get (?:more )?customers|find (?:more |new )?customers|visibility|more visible|get noticed|be seen|stand out|branding)\b/i],
  ["free-help", /\b(free (?:business )?(?:help|counsel(?:ing|ling|or|ors)|mentor(?:ing|s)?|advice|training)|sbdc|small business development center|score (?:mentor|mentors|chapter|business mentoring)|score\.org|women'?s business center|veterans? business outreach|business mentor|business mentoring|where can i get help (?:with|for) (?:my |a )?business|help (?:with|for) my (?:small )?business)\b/i]
];

function usSmallBusinessTopic(text) {
  const value = String(text || "").replace(/\s+/g, " ").trim();
  if (!value || value.length > 300) return null;
  if (RECORD_OR_DRAFT.test(value) || !ASKS.test(value)) return null;
  // three or more kinds of business named at once ("LLC, S corp or C corp? for-profit or nonprofit?") is the question "what type of business should I be": the overview answers it
  if (STRUCTURE_TERMS.filter(pattern => pattern.test(value)).length >= 3) return "business-structure";
  for (const [topic, pattern] of MATCHERS) if (pattern.test(value)) return topic;
  return null;
}

// When is this United States guide the right one? A person's time zone is the best signal the page and the phone line give; the words of the question can also say so ("SBA", "IRS", "8(a)", "NMSDC", "SBDC",
// "SAM.gov", "United States"). Without either, the question is left to the general guardrail, which names no country-specific agency.
const US_TIME_ZONES = /^(?:America\/(?:New_York|Chicago|Denver|Los_Angeles|Phoenix|Anchorage|Detroit|Boise|Juneau|Sitka|Nome|Adak|Metlakatla|Yakutat|Menominee|North_Dakota\/.+|Indiana\/.+|Kentucky\/.+)|Pacific\/Honolulu|US\/.+)$/;
const US_WORDS = /\b(?:sba|irs|ftc|nist|cisa|mbda|nmsdc|sbdc|8a|hubzone|wosb|sdvosb|sam\.gov|cdfi|1099|1040|schedule c|united states|usa|llc|s[- ]?corp|c[- ]?corp|ein|uspto|secretary of state|form 2553)\b|\b8\s?\(\s?a\s?\)|\b501\s?\(\s?c\s?\)|\bu\.s\./i;
function isUsContext({ timeZone = "", text = "" } = {}) {
  return US_TIME_ZONES.test(String(timeZone || "")) || US_WORDS.test(String(text || ""));
}

const CLOSING = `This is general information, not legal, tax or financial advice, and rules change, so confirm on the official site. I cannot file or apply for anything for you.`;

function usSmallBusinessAnswer(id, { question = "" } = {}) {
  const topic = TOPICS[id];
  if (!topic) return null;
  const sources = topic.sources.map(key => SOURCES[key]);
  const zip = id === "local-help" ? /\b(\d{5})(?:-\d{4})?\b/.exec(String(question || ""))?.[1] : "";
  const lead = zip ? `For ZIP code ${zip}: ` : "";
  const text = `${lead}${topic.text} Sources: ${sources.map(source => source.name).join("; ")} (checked ${CHECKED_ON}). ${CLOSING}`;
  return { topic: id, title: topic.title, text, sources };
}

module.exports = Object.freeze({ CHECKED_ON, TOPICS, SOURCES, usSmallBusinessTopic, usSmallBusinessAnswer, isUsContext });
