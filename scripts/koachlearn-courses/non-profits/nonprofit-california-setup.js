"use strict";

// Koach Learn course: Non Profits -> "Setting Up a Nonprofit in California, Including Costs". Written as a skill-building course: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
// Fees and forms checked on the official pages on 27 October 2026 (sos.ca.gov, oag.ca.gov, irs.gov). The ftb.ca.gov pages refused automated reading, so the course names
// Form 3500 / 3500A and sends the student to ftb.ca.gov for the current fee instead of stating one.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], sources, tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

const SOS_ARTICLES = { name: "California Secretary of State: Corporations - California (Domestic) forms and fees", url: "https://www.sos.ca.gov/business-programs/business-entities/forms/corporations-california-domestic" };
const SOS_SI = { name: "California Secretary of State: Statement of Information (SI-100 for nonprofits)", url: "https://www.sos.ca.gov/business-programs/business-entities/forms/corporations-statement-information" };
const BIZFILE = { name: "California Secretary of State: bizfile Online", url: "https://bizfileonline.sos.ca.gov" };
const IRS_EIN = { name: "IRS: Get an Employer Identification Number", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" };
const IRS_FEE = { name: "IRS: Form 1023 and 1023-EZ amount of user fee", url: "https://www.irs.gov/charities-non-profits/form-1023-and-1023-ez-amount-of-user-fee" };
const IRS_1023 = { name: "IRS: About Form 1023", url: "https://www.irs.gov/forms-pubs/about-form-1023" };
const IRS_1023EZ = { name: "IRS: About Form 1023-EZ (eligibility worksheet is in the instructions)", url: "https://www.irs.gov/forms-pubs/about-form-1023-ez" };
const IRS_990N = { name: "IRS: Form 990-N (e-Postcard) for small exempt organizations", url: "https://www.irs.gov/charities-non-profits/annual-electronic-filing-requirement-for-small-exempt-organizations-form-990-n-e-postcard" };
const IRS_CHURCH = { name: "IRS Publication 1828: Tax Guide for Churches and Religious Organizations", url: "https://www.irs.gov/pub/irs-pdf/p1828.pdf" };
const FTB = { name: "California Franchise Tax Board: Charities and nonprofits (Form 3500 / 3500A)", url: "https://www.ftb.ca.gov/file/business/types/charities-and-nonprofits/index.html" };
const AG_INITIAL = { name: "California Attorney General: Registry of Charities, initial registration (CT-1)", url: "https://oag.ca.gov/charities/initial-reg" };
const AG_RENEW = { name: "California Attorney General: Registry of Charities, annual renewal (RRF-1)", url: "https://oag.ca.gov/charities/renewals" };

module.exports = {
  id: "nonprofit-california-setup",
  category: "Non Profits",
  name: "Setting Up a Nonprofit in California, Including Costs",
  skills: "Choosing the right nonprofit type, Filing articles with the Secretary of State, Getting a free EIN, Applying for federal and state tax exemption, Registering with the Attorney General, Building a setup budget and calendar",
  outcome: "make a complete, dated setup plan for a California public benefit nonprofit: every filing in the right order, the office that takes it, the form name, the official fee, and the yearly filings that keep it in good standing.",
  about: [
    "This course is for people starting a charity, ministry, community group or program in California: founders, pastors, board members and volunteers who want to do it right the first time.",
    "You will learn the steps in order: pick your nonprofit type and board, file articles of incorporation with the Secretary of State, get a free EIN from the IRS, apply for 501(c)(3) status, get California tax exemption from the Franchise Tax Board, and register with the Attorney General's Registry of Charities. Then you will learn the yearly filings and build a cost budget.",
    "Each lesson takes about five minutes. Read it, watch the slides, then do the \"Try it now\" task. Every fee in this course was checked on the official government page on 27 October 2026 and the link is listed so you can check it again. Fees change, so always confirm on the official page before you pay. This course is education, not legal or tax advice: for your own case, talk to a nonprofit attorney, an accountant, or a free nonprofit help center."
  ],
  finalTask: "Build a one-page setup plan for your nonprofit (real or practice): a table with each filing in order, the office, the form name, the fee from the official page, the date you plan to file it, and the yearly filings with their due dates. Add the total start-up cost and the link to each official page.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "People starting a charity, ministry, community group or program in California: founders, pastors, board members and volunteers who want to do it right the first time.",
    startingPoint: "Have a mission and often a group of helpers already. Most have never filed with the Secretary of State, the IRS, the Franchise Tax Board or the Attorney General, and do not know the order or the costs.",
    gap: "Founders file in the wrong order, pay websites for free services, or miss yearly filings and lose tax-exempt status. Learners need one dated plan with every filing, office, form, official fee and yearly due date, so the nonprofit starts right and stays in good standing.",
    constraints: [
      "Fees and forms change; every fee is checked on the official page before filing",
      "Not legal or tax advice: learners ask a nonprofit attorney, help center or professional when unsure",
      "Privacy: Social Security numbers or ITINs go only into the official IRS site, never into AI tools or email",
      "Churches and religious groups have special rules to check",
      "Plain words for first-time founders; about 60 minutes in total"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given the steps to start a California charity", action: "list the main setup filings in order and the office that handles each one", standard: "with every filing in the right order" },
    { id: "O2", condition: "Given your nonprofit's purpose", action: "choose the right articles of incorporation form and plan the Statement of Information", standard: "with the filing place and due dates correct" },
    { id: "O3", condition: "After your articles are filed", action: "get a free EIN on irs.gov and plan the first board meeting", standard: "with private numbers typed only into the official IRS site and every first-meeting decision listed" },
    { id: "O4", condition: "Using the IRS eligibility worksheet", action: "choose between Form 1023 and Form 1023-EZ and state where it is filed", standard: "with the fee taken from the official page" },
    { id: "O5", condition: "After federal approval or your first donation", action: "plan the Franchise Tax Board exemption and the Attorney General Registry registration", standard: "with the right form and the 30-day Registry deadline" },
    { id: "O6", condition: "Given the checked fees and due dates", action: "build a start-up budget and a yearly filing calendar", standard: "with every fee and due date checked on the official page" }
  ],
  chapters: [
    {
      name: "Chapter 1: Forming the corporation",
      lessons: [
        {
          objectives: ["O1"],
          title: "The road map: what a California nonprofit needs",
          minutes: 5,
          goal: "List the main setup filings in the right order and the office that handles each one.",
          text: [
            "In California, a charity usually becomes a nonprofit public benefit corporation. Being a nonprofit corporation is a state matter. Being tax-exempt is a separate step: once with the IRS (federal) and once with the Franchise Tax Board (state). Fundraising charities also register with the Attorney General.",
            "The usual order is: 1) choose your purpose, name and first board; 2) file articles of incorporation with the Secretary of State; 3) get an EIN from the IRS; 4) adopt bylaws and hold the first board meeting; 5) file the Statement of Information; 6) apply for federal 501(c)(3) status; 7) apply for California exemption with the Franchise Tax Board; 8) register with the Attorney General's Registry of Charities.",
            "Doing these in order matters. For example, the IRS tells corporations to register with the state before applying for an EIN, and the Attorney General asks for your articles and bylaws when you register."
          ],
          steps: ["Write your mission in one or two sentences.", "Pick three or more people for your first board, if you can.", "Write the eight steps in order on one page.", "Next to each step, write the office: Secretary of State, IRS, Franchise Tax Board or Attorney General."],
          words: [["Nonprofit public benefit corporation", "the California type of corporation most charities use; it serves the public, not owners."], ["501(c)(3)", "the section of the federal tax code for charities; donations to them can usually be tax-deductible."], ["Tax-exempt", "not required to pay income tax, after an agency approves it."]],
          slides: [
            { title: "Four offices you will deal with", bullets: ["Secretary of State: creates the corporation", "IRS: EIN and federal 501(c)(3) status", "Franchise Tax Board: California tax exemption", "Attorney General: Registry of Charities"] },
            { title: "The order, part 1", bullets: ["1. Mission, name, first board", "2. Articles of incorporation (Secretary of State)", "3. EIN (IRS, free)", "4. Bylaws and first board meeting"] },
            { title: "The order, part 2", bullets: ["5. Statement of Information (Secretary of State)", "6. 501(c)(3) application (IRS)", "7. Form 3500 or 3500A (Franchise Tax Board)", "8. Register with the Attorney General (CT-1)"] },
            { title: "Two kinds of status", bullets: ["Nonprofit corporation: a state matter", "Tax-exempt: a separate federal and state approval"] }
          ],
          sources: [SOS_ARTICLES, IRS_EIN, FTB, AG_INITIAL],
          tryIt: "Write your nonprofit's mission in one or two sentences. Then write the eight setup steps in order and the office for each one. Keep this page: it becomes your final setup plan.",
          youCanNow: "list the setup filings for a California nonprofit in order and name the office that handles each.",
          quickCheck: [
            { objective: "O1", q: "Which office handles California tax exemption?", options: ["The Franchise Tax Board", "The Secretary of State", "The Attorney General", "The city council"], answer: 0, why: "Tax exemption is with the IRS (federal) and the Franchise Tax Board (state)." },
            { objective: "O1", q: "A founder wants to apply for an EIN before filing articles. What do you tell them?", options: ["Any order is fine", "File articles with the Secretary of State first, as the IRS tells corporations", "Skip the articles", "Register with the Attorney General first"], answer: 1, why: "The IRS tells corporations to register with the state before applying for an EIN." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Filing articles of incorporation",
          minutes: 5,
          goal: "Choose the right articles form and file it with the Secretary of State.",
          text: [
            "Articles of incorporation create your corporation. The California Secretary of State has three nonprofit versions: Form ARTS-PB (public benefit), Form ARTS-RE (religious) and Form ARTS-MU (mutual benefit). The filing fee shown for each was $30 when we checked.",
            "Most charities use public benefit. A church or ministry may use the religious form. Mutual benefit is for groups that serve their own members, like some clubs, and does not fit most charities. If you plan to seek 501(c)(3) status, the IRS needs certain words in your articles about your purpose and what happens to your assets if you close. Read the form's instructions, and ask a nonprofit attorney or help center to look it over.",
            "You can file online at bizfile Online (bizfileonline.sos.ca.gov), or by mail or in person. Search the name first to make sure it is free. Within 90 days, you also file a Statement of Information (Form SI-100, $20), and again every two years."
          ],
          steps: ["Search your name on bizfile Online.", "Pick the form: ARTS-PB for most charities, ARTS-RE for religious groups.", "Fill it in with your name, purpose and agent for service of process.", "File online and pay the fee shown on the official page.", "Put the Statement of Information (SI-100) on your calendar: within 90 days, then every two years."],
          words: [["Articles of incorporation", "the short document that legally creates your corporation."], ["Agent for service of process", "the person or company that agrees to receive legal papers for the nonprofit."], ["Statement of Information", "a form that tells the state your address and officers; nonprofits file SI-100."]],
          slides: [
            { title: "Three nonprofit articles forms", bullets: ["ARTS-PB: public benefit (most charities)", "ARTS-RE: religious", "ARTS-MU: mutual benefit (serves members)"] },
            { title: "Fees when checked (27 Oct 2026)", bullets: ["Articles: $30", "Statement of Information SI-100: $20", "Always confirm on sos.ca.gov before paying"] },
            { title: "How to file", bullets: ["Search the name first", "File online at bizfileonline.sos.ca.gov", "Or by mail or in person"] },
            { title: "Do not forget", bullets: ["SI-100 within 90 days of filing", "Then every two years", "501(c)(3) wording: have the articles reviewed"] }
          ],
          sources: [SOS_ARTICLES, SOS_SI, BIZFILE],
          tryIt: "Open the Secretary of State forms page. Find the articles form that fits your group and write down its form name and current fee. Then find the SI-100 fee and add both to your plan with a due date for the SI-100.",
          youCanNow: "choose the right articles form, find its fee on the official page, and schedule your Statement of Information.",
          quickCheck: [
            { objective: "O2", q: "Which articles form does not fit most charities?", options: ["ARTS-PB", "ARTS-RE", "ARTS-MU (mutual benefit)", "None of them fit"], answer: 2, why: "Mutual benefit is for groups that serve their own members and does not fit most charities." },
            { objective: "O2", q: "You want to name your nonprofit \"Hope Kitchen.\" What do you do before filing?", options: ["File right away", "Ask AI if the name is free", "Pay a website to reserve it", "Search the name first to make sure it is free"], answer: 3, why: "Search the name first to make sure it is free." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Getting your EIN, bylaws and first board meeting",
          minutes: 5,
          goal: "Get a free EIN safely and prepare the first board meeting.",
          text: [
            "An EIN (Employer Identification Number) is the nonprofit's federal tax ID. You need it for a bank account, for payroll and for your tax-exemption applications. The IRS says you never have to pay for an EIN. Some websites charge for it: avoid them and apply on irs.gov.",
            "The IRS online tool needs the responsible party's Social Security number or ITIN, and it must be finished in one sitting. Type these private numbers only into the official IRS site, never into an AI tool, an email or a random website. Print or save the confirmation letter.",
            "Bylaws are your rules: how many directors, how they are elected, how meetings work, and who signs checks. At the first board meeting, the board adopts the bylaws, elects officers, approves opening a bank account and adopts a conflict-of-interest policy. Write minutes and keep them."
          ],
          steps: ["Wait until the Secretary of State has filed your articles.", "Go to irs.gov and apply for the EIN with the free online tool.", "Save the EIN confirmation letter in your records folder.", "Draft bylaws and a conflict-of-interest policy.", "Hold the first board meeting and write the minutes."],
          words: [["EIN", "Employer Identification Number: the free federal tax ID for an organization."], ["Bylaws", "the written rules for how the nonprofit and its board run."], ["Minutes", "the written record of what the board decided at a meeting."], ["Conflict-of-interest policy", "rules for what a board member must do when a decision could benefit them personally."]],
          slides: [
            { title: "Your EIN", bullets: ["The nonprofit's federal tax ID", "Free on irs.gov: never pay a website for it", "Needed for the bank and tax-exemption forms"] },
            { title: "Keep private numbers private", bullets: ["SSN or ITIN goes only into the official IRS site", "Never into AI tools, email or other websites", "Save the confirmation letter"] },
            { title: "First board meeting", bullets: ["Adopt bylaws", "Elect officers", "Approve a bank account", "Adopt a conflict-of-interest policy"] }
          ],
          sources: [IRS_EIN],
          tryIt: "Make a first-meeting agenda with five items: adopt bylaws, elect officers, approve the bank account, adopt the conflict-of-interest policy, and set the next meeting date. Add \"Apply for EIN on irs.gov (free)\" to your plan with a date after your articles are filed.",
          youCanNow: "get an EIN safely and for free, and run a first board meeting with the right decisions on the agenda.",
          quickCheck: [
            { objective: "O3", q: "What do you need an EIN for?", options: ["A bank account, payroll and tax-exemption applications", "Only for buying a building", "Only for churches", "Nothing; it is optional decoration"], answer: 0, why: "The EIN is the nonprofit's federal tax ID for banking, payroll and exemption applications." },
            { objective: "O3", q: "You are filling in the IRS online EIN tool and need to stop halfway. What should you know?", options: ["You can save and finish next week", "It must be finished in one sitting", "AI can finish it for you", "You can email the rest to the IRS"], answer: 1, why: "The IRS online tool must be finished in one sitting." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Forming the corporation",
        questions: [
          { objective: "O1", q: "Which office creates a California nonprofit corporation?", options: ["The IRS", "The California Secretary of State", "The Attorney General", "The county clerk"], answer: 1, why: "Articles of incorporation are filed with the Secretary of State." },
          { objective: "O2", q: "A food pantry run for the whole community will most likely file which articles form?", options: ["ARTS-MU (mutual benefit)", "ARTS-RE (religious)", "ARTS-PB (public benefit)", "A business LLC form"], answer: 2, why: "Charities that serve the public usually file public benefit articles." },
          { objective: "O3", q: "A website offers to get your EIN for $79. What should you do?", options: ["Pay it, it is faster", "Apply for free on irs.gov", "Ask the Attorney General to pay", "Skip the EIN"], answer: 1, why: "The IRS says an EIN never costs money; apply on irs.gov." },
          { objective: "O2", q: "When is the first Statement of Information (SI-100) due?", options: ["Within 90 days of filing the articles", "Only when you close", "Every ten years", "Never for nonprofits"], answer: 0, why: "The Secretary of State says within 90 days, then every two years." },
          { objective: "O3", q: "Which is a job for the first board meeting?", options: ["Filing the 990-N", "Adopting the bylaws and electing officers", "Paying the IRS user fee", "Renewing with the Attorney General"], answer: 1, why: "The first meeting adopts bylaws, elects officers and approves basics like the bank account." }
        ]
      }
    },
    {
      name: "Chapter 2: Tax exemption, registration and costs",
      lessons: [
        {
          objectives: ["O4"],
          title: "Applying for federal 501(c)(3) status",
          minutes: 6,
          goal: "Choose between Form 1023 and Form 1023-EZ and know the fee.",
          text: [
            "To be a 501(c)(3) charity, most organizations apply to the IRS. There are two forms. Form 1023 is the full application; its user fee was $600 when we checked. Form 1023-EZ is a shorter form for small organizations; its fee was $275. Both are filed online on Pay.gov, and the fee is paid there when you file.",
            "Not everyone can use the 1023-EZ. The IRS has an eligibility worksheet at the end of the Form 1023-EZ instructions. It looks at things like how much money you expect to raise and your assets. Fill in the worksheet honestly before you choose.",
            "Churches have special rules: the IRS treats churches differently from other charities, and many are not required to apply, though some choose to. Read IRS Publication 1828 or ask a professional. When the IRS approves you, it sends a determination letter. Keep it forever: donors, grant makers and the state will ask for it."
          ],
          steps: ["Open the Form 1023-EZ instructions on irs.gov and complete the eligibility worksheet.", "If you qualify and it fits, plan for the 1023-EZ; if not, plan for Form 1023.", "Create a Pay.gov account and complete the form there.", "Pay the user fee shown on the IRS user-fee page.", "Save the determination letter when it arrives."],
          words: [["Form 1023", "the full IRS application for 501(c)(3) status."], ["Form 1023-EZ", "the short IRS application for small organizations that pass the eligibility worksheet."], ["User fee", "the fee the IRS charges to review the application."], ["Determination letter", "the IRS letter that says your organization is tax-exempt."]],
          slides: [
            { title: "Two federal forms", bullets: ["Form 1023: full application, fee $600", "Form 1023-EZ: short form, fee $275", "Fees when checked, 27 Oct 2026: confirm on irs.gov"] },
            { title: "Which one?", bullets: ["Do the eligibility worksheet in the 1023-EZ instructions", "Qualify and it fits: 1023-EZ", "Do not qualify: Form 1023"] },
            { title: "How to file", bullets: ["Online on Pay.gov", "Pay the user fee when you file"] },
            { title: "Churches and the letter", bullets: ["Churches have special rules: see IRS Publication 1828", "Keep the determination letter forever"] }
          ],
          sources: [IRS_FEE, IRS_1023, IRS_1023EZ, IRS_CHURCH],
          tryIt: "Open the Form 1023-EZ instructions on irs.gov and read the eligibility worksheet. Decide which form your nonprofit would file, then add that form, the fee from the IRS user-fee page, and a target date to your plan.",
          youCanNow: "decide between Form 1023 and 1023-EZ, find the current fee, and know where to file.",
          quickCheck: [
            { objective: "O4", q: "When is the IRS user fee for Form 1023 or 1023-EZ paid?", options: ["A year after approval", "By check to the Secretary of State", "On Pay.gov when you file", "Never"], answer: 2, why: "Both forms are filed online on Pay.gov, and the fee is paid there when you file." },
            { objective: "O4", q: "The IRS sends your determination letter. What do you do with it?", options: ["Throw it away after a year", "Give the only copy to a donor", "Paste it into AI", "Keep it forever, because donors, grant makers and the state will ask for it"], answer: 3, why: "Keep the determination letter forever; many will ask for it." }
          ]
        },
        {
          objectives: ["O5"],
          title: "California exemption and the Registry of Charities",
          minutes: 5,
          goal: "Plan the Franchise Tax Board exemption and the Attorney General registration.",
          text: [
            "Federal approval does not make you exempt from California tax by itself. You also apply to the Franchise Tax Board (FTB). Form 3500 is the full California application. Form 3500A is a shorter form for organizations that already have their IRS determination letter. Check ftb.ca.gov for the current form, instructions and any fee before you file, because we could not confirm the fee on the FTB page for this course.",
            "Charities that hold or raise money for charitable purposes in California also register with the Attorney General's Registry of Charities. You register online with Form CT-1 within 30 days of first receiving charitable assets, such as your first donation. The fee was $50 when we checked. You upload your articles, bylaws, IRS determination letter (or your EIN if you do not have it yet) and your Form 1023 or 1023-EZ if you filed one.",
            "Some groups may be exempt from Registry registration. If you think yours is one (for example, a religious organization), read the Registry's pages or ask the Registry before you skip it."
          ],
          steps: ["After the IRS letter arrives, plan Form 3500A on ftb.ca.gov (or Form 3500 if you apply without it).", "Note the date you first receive a donation or other charitable asset.", "Within 30 days of that date, register online with Form CT-1.", "Upload articles, bylaws, IRS letter or EIN, and your 1023 or 1023-EZ.", "Pay the Registry fee shown on oag.ca.gov."],
          words: [["Franchise Tax Board (FTB)", "California's state tax agency."], ["Form 3500A", "the short California exemption form for groups that already have a federal 501(c)(3) letter."], ["Registry of Charities", "the Attorney General office that registers and oversees charities in California."], ["CT-1", "the Attorney General's initial registration form for charities."]],
          slides: [
            { title: "California tax exemption (FTB)", bullets: ["Separate from the IRS approval", "Form 3500: full application", "Form 3500A: if you already have the IRS letter", "Check ftb.ca.gov for the current fee"] },
            { title: "Registry of Charities (Attorney General)", bullets: ["Form CT-1, filed online", "Within 30 days of first receiving charitable assets", "Fee: $50 when checked, 27 Oct 2026"] },
            { title: "Have these ready for CT-1", bullets: ["Articles and bylaws", "IRS determination letter, or EIN if not yet", "Your Form 1023 or 1023-EZ, if filed"] }
          ],
          sources: [FTB, AG_INITIAL],
          tryIt: "Add two rows to your plan: the FTB exemption (form name, \"check fee on ftb.ca.gov\", target date after the IRS letter) and the Attorney General CT-1 ($50, due within 30 days of your first donation). Make a list of the four documents you will upload.",
          youCanNow: "plan your California tax exemption and your Registry of Charities registration with the right forms, timing and documents.",
          quickCheck: [
            { objective: "O5", q: "Which form is the full California exemption application?", options: ["Form 3500", "Form CT-1", "Form SI-100", "Form RRF-1"], answer: 0, why: "Form 3500 is the full California application; 3500A is the shorter one." },
            { objective: "O5", q: "Your ministry thinks it may be exempt from Registry registration. What do you do?", options: ["Skip it without checking", "Read the Registry's pages or ask the Registry before you skip it", "Ask a friend", "Register with the IRS instead"], answer: 1, why: "Check the Registry's pages or ask the Registry before skipping registration." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Staying in good standing and your setup budget",
          minutes: 6,
          goal: "Build a start-up budget and a yearly filing calendar.",
          text: [
            "Starting is not the end. Every year you file with the IRS: small groups with gross receipts normally $50,000 or less can usually file the Form 990-N e-Postcard; larger ones file Form 990-EZ or 990. If you miss three years in a row, the IRS automatically takes away your tax-exempt status.",
            "Every year you also renew with the Attorney General on Form RRF-1. The fee depends on total revenue: when we checked it was $25 under $50,000, $50 from $50,000 to $100,000, and $75 from $100,001 to $250,000, rising for larger charities. It is due 4 months and 15 days after your fiscal year ends (May 15 for a year ending December 31). You also have the Statement of Information every two years, and California annual filings with the FTB: check ftb.ca.gov for which form fits you.",
            "Start-up government fees, as checked: articles $30, Statement of Information $20, EIN free, IRS $275 (1023-EZ) or $600 (1023), Registry $50, plus any FTB fee. That is about $375 with the 1023-EZ or $700 with Form 1023, before any FTB fee, a registered agent service, or a lawyer. Use AI to help draft a budget table or a reminder list, but check every number on the official page."
          ],
          steps: ["List each start-up fee from the official pages.", "Add them up for your form choice (1023-EZ or 1023).", "Add yearly filings: IRS 990 series, Attorney General RRF-1, FTB annual filing.", "Add the Statement of Information every two years.", "Put every due date in a shared calendar with two reminders."],
          words: [["Form 990-N", "the IRS e-Postcard: a short yearly online notice for small exempt groups."], ["RRF-1", "the Attorney General's yearly renewal form for charities."], ["Fiscal year", "the 12-month period your nonprofit uses for its books, often January to December."], ["Good standing", "being up to date on all required filings and fees."]],
          slides: [
            { title: "Every year", bullets: ["IRS: 990-N, 990-EZ or 990", "Attorney General: RRF-1, fee by revenue", "FTB: check ftb.ca.gov for your annual form"] },
            { title: "Watch out", bullets: ["Miss the IRS filing 3 years in a row: you lose exemption", "RRF-1 due 4 months 15 days after year end", "SI-100 every two years"] },
            { title: "Start-up fees (checked 27 Oct 2026)", bullets: ["Articles $30 + SI-100 $20 + EIN free", "IRS: $275 (1023-EZ) or $600 (1023)", "Registry CT-1 $50, plus any FTB fee"] },
            { title: "Your total", bullets: ["About $375 with 1023-EZ, $700 with 1023", "Before FTB fee, agent service or lawyer", "Confirm every fee on the official page"] }
          ],
          sources: [IRS_990N, AG_RENEW, SOS_SI, IRS_FEE, SOS_ARTICLES, AG_INITIAL, FTB],
          tryIt: "Final task: finish your one-page setup plan. Make a table with each filing in order, the office, the form, the fee from the official page, and your target date. Add the yearly filings and due dates, the total start-up cost, and the official link for each row.",
          youCanNow: "build a complete California nonprofit setup plan with costs and a yearly calendar that keeps the organization in good standing.",
          quickCheck: [
            { objective: "O6", q: "Which yearly filing goes to the Attorney General?", options: ["Form 990-N", "Form 1023", "Form RRF-1", "Form ARTS-PB"], answer: 2, why: "Every year you renew with the Attorney General on Form RRF-1." },
            { objective: "O6", q: "AI drafts your start-up budget table. What do you do with the fees in it?", options: ["Trust them; AI is up to date", "Round them up", "Leave them blank", "Check every number on the official page"], answer: 3, why: "Use AI to draft the table, but check every number on the official page." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Tax exemption, registration and costs",
        questions: [
          { objective: "O4", q: "What were the IRS user fees for Form 1023 and Form 1023-EZ when checked?", options: ["$100 and $50", "$600 and $275", "Free for both", "$1,000 and $500"], answer: 1, why: "The IRS user-fee page listed $600 for Form 1023 and $275 for Form 1023-EZ." },
          { objective: "O5", q: "Your nonprofit already has its IRS determination letter. Which California form is made for you?", options: ["Form 3500A", "Form CT-1", "Form SI-100", "Form 990-N"], answer: 0, why: "Form 3500A is the short FTB form for groups that already have the federal letter." },
          { objective: "O5", q: "You got your first donation on March 1. When must you register with the Registry of Charities?", options: ["Within 30 days", "Within 2 years", "Only after raising $50,000", "Never"], answer: 0, why: "The Attorney General says register within 30 days of first receiving charitable assets." },
          { objective: "O6", q: "What happens if you miss the IRS annual filing three years in a row?", options: ["Nothing", "A $10 fine", "Automatic loss of tax-exempt status", "Your EIN changes"], answer: 2, why: "The IRS automatically revokes exemption after three consecutive years of not filing." },
          { objective: "O6", q: "A charity with $40,000 in total revenue renews with the Attorney General. What was the RRF-1 fee when checked?", options: ["$200", "$100", "$75", "$25"], answer: 3, why: "The RRF-1 schedule listed $25 for total revenue under $50,000." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Setting Up a Nonprofit in California, Including Costs",
    questions: [
      { objective: "O1", q: "Becoming a nonprofit corporation and becoming tax-exempt are:", options: ["The same step", "Only federal matters", "Only needed for churches", "Separate steps with different offices"], answer: 3, why: "The state creates the corporation; the IRS and FTB grant exemption separately." },
      { objective: "O1", q: "Which comes first?", options: ["Registering with the Attorney General", "Filing articles with the Secretary of State", "Filing Form 3500A", "Filing the RRF-1"], answer: 1, why: "The corporation must exist before the other filings." },
      { objective: "O1", q: "Which office handles the Registry of Charities?", options: ["The IRS", "The Franchise Tax Board", "The California Attorney General", "The Secretary of State"], answer: 2, why: "The Registry of Charities is part of the Attorney General's office." },
      { objective: "O2", q: "Most charities in California file which type of articles?", options: ["Mutual benefit", "General stock corporation", "LLC", "Public benefit"], answer: 3, why: "Public benefit corporations serve the public, which fits most charities." },
      { objective: "O2", q: "What was the Secretary of State fee for nonprofit articles when checked?", options: ["$30", "$300", "$600", "Free"], answer: 0, why: "The forms page listed $30 for ARTS-PB, ARTS-RE and ARTS-MU." },
      { objective: "O2", q: "Where can you file articles online?", options: ["Pay.gov", "irs.gov", "Any AI tool", "bizfileonline.sos.ca.gov"], answer: 3, why: "bizfile Online is the Secretary of State's online filing site." },
      { objective: "O2", q: "How often is the nonprofit Statement of Information (SI-100) filed after the first one?", options: ["Every month", "Every year", "Every two years", "Never again"], answer: 2, why: "The Secretary of State says every two years." },
      { objective: "O3", q: "How much does the IRS charge for an EIN?", options: ["$50", "$25", "It depends on your state", "Nothing"], answer: 3, why: "The IRS says you never have to pay a fee for an EIN." },
      { objective: "O3", q: "Where should you type the responsible party's Social Security number for the EIN?", options: ["Only on the official IRS site", "Into an AI assistant to check it", "In a group email to the board", "On any site that offers help"], answer: 0, why: "Private numbers go only into the official agency site." },
      { objective: "O3", q: "Which decision belongs at the first board meeting?", options: ["Filing the 990-N", "Adopting the conflict-of-interest policy", "Paying the RRF-1", "Getting the IRS letter"], answer: 1, why: "The first meeting adopts bylaws, policies and elects officers." },
      { objective: "O4", q: "How do you decide whether you can use Form 1023-EZ?", options: ["Ask any website", "Pick whichever is cheaper", "The Attorney General decides", "Complete the IRS eligibility worksheet in the 1023-EZ instructions"], answer: 3, why: "The IRS eligibility worksheet decides who can use the short form." },
      { objective: "O4", q: "Where are Form 1023 and 1023-EZ filed?", options: ["By fax to Sacramento", "At the county office", "Online on Pay.gov", "On bizfile Online"], answer: 2, why: "The IRS says both are completed and paid on Pay.gov." },
      { objective: "O4", q: "What does an IRS determination letter show?", options: ["Your corporation name was approved", "Your organization is tax-exempt under federal law", "You paid your Registry fee", "Your EIN number"], answer: 1, why: "The determination letter confirms federal tax-exempt status." },
      { objective: "O4", q: "A church wants to know if it must file Form 1023. Where should it look first?", options: ["IRS Publication 1828 or a professional", "A social media post", "The DMV", "Form SI-100"], answer: 0, why: "Churches have special IRS rules explained in Publication 1828." },
      { objective: "O5", q: "After federal approval, a California nonprofit is exempt from state tax:", options: ["Automatically", "Only after the FTB approves it (Form 3500 or 3500A)", "Only if it is a church", "Never"], answer: 1, why: "California exemption is a separate application to the Franchise Tax Board." },
      { objective: "O5", q: "Which documents do you upload for the Attorney General's CT-1?", options: ["Articles, bylaws, IRS letter or EIN, and your 1023 if filed", "Only a photo ID", "Donor names and addresses", "Your bank password"], answer: 0, why: "The Registry asks for founding documents, bylaws, the IRS letter or EIN and the exemption application." },
      { objective: "O5", q: "What was the Registry's initial registration fee when checked?", options: ["$25", "$50", "$275", "$600"], answer: 1, why: "The initial registration page listed a $50 fee." },
      { objective: "O6", q: "A small charity's gross receipts are normally $50,000 or less. Which IRS yearly filing can it usually use?", options: ["Form 1023", "Form 990-N e-Postcard", "Form CT-1", "Form ARTS-PB"], answer: 1, why: "The IRS lets most small groups under that amount file the 990-N." },
      { objective: "O6", q: "Your fiscal year ends December 31. When is the RRF-1 normally due?", options: ["January 1", "March 1", "May 15", "December 31"], answer: 2, why: "It is due 4 months and 15 days after year end, which is May 15." },
      { objective: "O6", q: "Using the checked fees, about how much are start-up government fees with Form 1023-EZ, before any FTB fee?", options: ["About $375", "About $50", "About $1,500", "Nothing"], answer: 0, why: "$30 articles + $20 SI-100 + $275 1023-EZ + $50 CT-1 = $375, with the EIN free." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      3,
      7,
      10,
      14,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Filings in order",
        objective: "O1",
        notYet: "A filing is missing or out of order.",
        meets: "Every setup filing listed in the right order with its office.",
        exceeds: "Notes why the order matters for at least two steps."
      },
      {
        name: "Right forms",
        objective: "O2",
        notYet: "A wrong form is named, such as mutual benefit articles for a charity.",
        meets: "Each filing names the right form, including articles, SI-100, 1023 or 1023-EZ, 3500 or 3500A, and CT-1.",
        exceeds: "Explains the choice between 1023 and 1023-EZ using the eligibility worksheet."
      },
      {
        name: "Official fees and links",
        objective: "O6",
        notYet: "A fee is guessed or has no link.",
        meets: "Every fee comes from the official page, with a link, and the start-up total is added up.",
        exceeds: "Notes the date each fee was checked."
      },
      {
        name: "Planned dates",
        objective: "O5",
        notYet: "No planned filing dates, or the 30-day Registry and 90-day SI-100 deadlines are missed.",
        meets: "A planned date for each filing that meets every deadline.",
        exceeds: "Names who on the board is responsible for each filing."
      },
      {
        name: "Yearly calendar",
        objective: "O6",
        notYet: "Yearly filings are missing.",
        meets: "IRS yearly filing, RRF-1, the two-year Statement of Information and FTB filings, with due dates.",
        exceeds: "Due dates are set as calendar reminders for the board."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Founders who file articles of incorporation within 90 days (follow-up survey)",
      "Organizations that receive an IRS determination letter and register with the Registry of Charities",
      "Organizations still in good standing one year later, with yearly filings on time"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with internet",
      "Links to the official pages: Secretary of State, IRS, Pay.gov, Franchise Tax Board and the Attorney General's Registry of Charities",
      "A spreadsheet or paper for the setup plan table",
      "About 60 minutes in total, plus time to check fees on the official pages"
    ],
    facilitatorNotes: [
      "Have learners check every fee on the official page during the session, since fees change.",
      "Invite a nonprofit attorney or help center volunteer to answer questions about articles wording and church rules.",
      "Remind learners never to type Social Security numbers or ITINs into AI tools or email.",
      "Learners without a real nonprofit can build a practice plan for a sample charity.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
