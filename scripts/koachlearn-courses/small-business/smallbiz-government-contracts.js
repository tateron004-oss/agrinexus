"use strict";

// Koach Learn course: Small Business -> "Winning Government Contracts" (owner's request, 28 October 2026: life, people and career skills beyond AI).
// Skill-building: by the end the student can DO the skill in `outcome`. Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course.
// Facts checked 28 Oct 2026: sam.gov entity registration (UEI, renew every 365 days, UEI alone cannot apply for awards); sba.gov basic requirements, size standards, 8(a), HUBZone, WOSB and VetCert pages;
// dgs.ca.gov SB/DVBE certification and How to do business with the state. caleprocure.ca.gov blocked the fetch (403), so its details come from the DGS pages that link to it.
// Not confirmed from a fetched page: that SAM.gov registration is free (long-standing and widely stated by GSA; the lesson says so and tells students to register only at sam.gov).

module.exports = {
  id: "smallbiz-government-contracts",
  category: "Small Business",
  name: "Winning Government Contracts",
  skills: "Registering in SAM.gov, Choosing NAICS codes, Using SBA and California certifications, Finding contract opportunities, Reading a solicitation, Writing a capability statement",
  outcome: "register your business to sell to the government, choose your NAICS codes, find contract opportunities that fit, read a solicitation to decide whether to bid, and write a one-page capability statement.",
  about: [
    "Federal, state and local governments buy almost everything: cleaning, catering, construction, landscaping, printing, IT, training, trucking and more. A share of that buying is set aside for small businesses, and some for women-owned, veteran-owned and other certified small businesses.",
    "This course takes you through the steps in order: registering in SAM.gov and getting your Unique Entity ID, choosing NAICS codes, understanding SBA certifications and California's Small Business and DVBE certifications, finding opportunities, reading a solicitation, and writing a capability statement you can send to buyers.",
    "Rules, limits and websites change. Each lesson shows the official page to check. Free help is available from APEX Accelerators, SBA district offices and Small Business Development Centers; you do not need to pay anyone to register.",
    "Each lesson takes about five minutes and ends with a task you do right away. There is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Write a one-page capability statement for your business with four parts: core competencies, past performance, what makes you different, and company data (legal name, UEI, NAICS codes, certifications, contact details). Then find one real opportunity on SAM.gov or Cal eProcure that matches a NAICS code on your statement.",
  chapters: [
    {
      name: "Chapter 1: Getting ready to sell to the government",
      lessons: [
        {
          title: "Registering in SAM.gov and getting a UEI",
          minutes: 6,
          goal: "Gather what you need and register your business in SAM.gov yourself, for free.",
          text: [
            "SAM.gov (the System for Award Management) is the US government's official site for doing business with federal agencies. To bid on and win federal contracts, your business must be registered there. Registration gives you a Unique Entity ID (UEI), a 12-character code made of letters and numbers that identifies your business.",
            "You can request only a UEI without full registration, but with a UEI alone you cannot apply directly for federal awards. For contracts, complete the full registration. You must renew it every 365 days to keep it active.",
            "Registering in SAM.gov is free. Some companies send official-looking emails or letters offering to register or renew you for a fee, or warn that your registration is about to expire. You never have to pay them. Register only at sam.gov, and get free help from an APEX Accelerator if you are stuck.",
            "Before you start, gather your legal business name and physical address exactly as the IRS has them, your Employer Identification Number (EIN) or tax ID, and bank details for payments. Type these only into SAM.gov itself, never into an AI tool or an email."
          ],
          steps: ["Gather your legal business name, physical address, EIN and bank details.", "Go to sam.gov and create a login.", "Choose to register your entity, not just get a UEI.", "Answer every section; the business name and address must match IRS records.", "Write down your UEI and the date your registration expires.", "Set a reminder to renew before 365 days."],
          words: [["SAM.gov", "the System for Award Management, the federal site where businesses register to sell to the government."], ["UEI", "Unique Entity ID: the 12-character code that identifies your business to the government."], ["EIN", "Employer Identification Number: your business's tax ID from the IRS."], ["APEX Accelerator", "a free counseling center that helps businesses sell to the government."]],
          slides: [
            { title: "SAM.gov is the front door", bullets: ["Register to bid on federal contracts", "You get a 12-character Unique Entity ID", "Renew every 365 days"] },
            { title: "UEI only vs full registration", bullets: ["UEI only: you cannot apply for awards", "Full registration: needed for contracts"] },
            { title: "It is free", bullets: ["Ignore paid offers to register or renew you", "Register only at sam.gov", "Free help: APEX Accelerators"] },
            { title: "Have ready", bullets: ["Legal name and address that match the IRS", "EIN or tax ID and bank details", "Type them only into SAM.gov"] }
          ],
          sources: [
            { name: "SAM.gov: Entity registration", url: "https://sam.gov/content/entity-registration" },
            { name: "SBA: Basic requirements for government contracting", url: "https://www.sba.gov/federal-contracting/contracting-guide/basic-requirements" }
          ],
          tryIt: "Make a SAM.gov registration checklist for your business: legal name, physical address, EIN, bank details, contact person. Mark which you already have. If you are already registered, look up your expiration date and set a renewal reminder.",
          youCanNow: "get ready for and complete a free SAM.gov registration, explain what a UEI is, and spot paid registration scams."
        },
        {
          title: "Choosing NAICS codes and checking your size",
          minutes: 5,
          goal: "Pick a primary NAICS code and check whether your business counts as small for it.",
          text: [
            "NAICS codes (North American Industry Classification System) sort businesses by what they sell. Each government contract is given one NAICS code, and buyers search for businesses by code. For example, there are codes for janitorial services, commercial printing and computer systems design.",
            "Look up codes on the US Census Bureau's NAICS page (census.gov/naics) by typing words that describe your work. Choose one primary code for your main service and add others for other things you sell.",
            "Each NAICS code has a size standard: the largest a business can be and still count as small for that code, measured by yearly receipts or number of employees. Most manufacturers with 500 or fewer employees and most non-manufacturers averaging under $7.5 million a year count as small, but it varies. Check yours with SBA's Size Standards Tool.",
            "Being small for a code lets you compete for contracts set aside for small businesses under that code."
          ],
          steps: ["List what you sell in plain words.", "Search census.gov/naics for matching codes.", "Pick one primary code and two or three others.", "Check each code with SBA's Size Standards Tool.", "Add the codes to your SAM.gov registration."],
          words: [["NAICS code", "a number that describes the kind of business you are."], ["Primary NAICS code", "the code for your main product or service."], ["Size standard", "the largest a business can be and still count as small for a NAICS code."], ["Set-aside", "a contract only certain businesses, such as small businesses, can compete for."]],
          slides: [
            { title: "What NAICS codes do", bullets: ["Sort businesses by what they sell", "Each contract has one code", "Buyers search businesses by code"] },
            { title: "Finding your codes", bullets: ["Search census.gov/naics", "One primary code for your main service", "Add codes for other things you sell"] },
            { title: "Size standards", bullets: ["Each code has a small-business limit", "By yearly receipts or employees", "Check with SBA's Size Standards Tool"] }
          ],
          sources: [
            { name: "SBA: Size standards", url: "https://www.sba.gov/federal-contracting/contracting-guide/size-standards" },
            { name: "US Census Bureau: NAICS", url: "https://www.census.gov/naics/" }
          ],
          tryIt: "Search census.gov/naics for your main service and write down your primary NAICS code and two more. Then check one of them in SBA's Size Standards Tool and write whether your business counts as small.",
          youCanNow: "choose NAICS codes for your business and check whether you count as small for each one."
        },
        {
          title: "SBA and California certifications",
          minutes: 6,
          goal: "Decide which federal and California certifications your business might qualify for.",
          text: [
            "Certifications let you compete for contracts reserved for certain small businesses. Federal certifications are applied for at certifications.sba.gov. Each has rules; these are the basics, so check SBA's pages for the full list.",
            "8(a) Business Development: for small businesses at least 51% owned and controlled by socially and economically disadvantaged US citizens, with personal net worth, income and asset limits, usually two years in business, and a one-time program of up to nine years. HUBZone: your main office is in a HUBZone (Historically Underutilized Business Zone) and at least 35% of employees live in one. Women-Owned Small Business (WOSB): at least 51% owned and controlled by women who are US citizens; the government aims to give 5% of contract dollars to WOSBs. Veteran-owned (VOSB) and service-disabled veteran-owned (SDVOSB): certified by SBA's VetCert program since 2023.",
            "California has its own certifications from the Department of General Services' Office of Small Business and DVBE Services, applied for in Cal eProcure. Small Business (SB): independently owned, main office in California, and, with affiliates, 100 or fewer employees and average yearly gross receipts of $19 million or less (or a manufacturer with 100 or fewer employees). Disabled Veteran Business Enterprise (DVBE): at least 51% owned and managed by disabled veterans with a service-connected disability of at least 10%.",
            "Many cities, counties and school districts honor state certifications too. Ask an APEX Accelerator which ones fit you."
          ],
          words: [["8(a)", "an SBA program for small businesses owned by socially and economically disadvantaged people."], ["HUBZone", "a Historically Underutilized Business Zone; businesses there can get contracting help."], ["WOSB", "Women-Owned Small Business."], ["SDVOSB", "Service-Disabled Veteran-Owned Small Business."], ["DVBE", "Disabled Veteran Business Enterprise, a California certification."]],
          slides: [
            { title: "Why certify", bullets: ["Compete for contracts reserved for certain businesses", "Federal: certifications.sba.gov"] },
            { title: "Federal certifications", bullets: ["8(a): disadvantaged owners, up to 9 years", "HUBZone: office in a zone, 35% of staff live in one", "WOSB: 51% women-owned; VOSB/SDVOSB: SBA VetCert"] },
            { title: "California certifications", bullets: ["Apply in Cal eProcure (DGS)", "SB: CA office, 100 or fewer staff, up to $19M receipts", "DVBE: 51% owned by disabled veterans"] },
            { title: "Get free help", bullets: ["APEX Accelerators", "SBA district offices", "Check each program's full rules"] }
          ],
          sources: [
            { name: "SBA: 8(a) Business Development program", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/8a-business-development-program" },
            { name: "SBA: HUBZone program", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/hubzone-program" },
            { name: "SBA: Women-Owned Small Business program", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/women-owned-small-business-federal-contract-program" },
            { name: "SBA: Veteran contracting assistance (VetCert)", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/veteran-contracting-assistance-programs" },
            { name: "California DGS: Apply for Small Business and DVBE certification", url: "https://www.dgs.ca.gov/PD/Services/Page-Content/Procurement-Division-Services-List-Folder/Apply-for-or-Re-apply-as-Small-Business-Disabled-Veteran-Business-Enterprise" }
          ],
          tryIt: "Make a table of the six certifications in this lesson (8(a), HUBZone, WOSB, VOSB or SDVOSB, California SB, California DVBE). For each, write yes, maybe or no for your business, and the one rule that decides it. Circle the one you will look into first.",
          youCanNow: "name the main SBA and California certifications, check which ones your business might qualify for, and know where to apply."
        }
      ],
      check: {
        title: "Knowledge Check 1: Getting ready to sell to the government",
        questions: [
          { q: "What do you get when you register in SAM.gov?", options: ["A bank loan", "A Unique Entity ID (UEI)", "A guaranteed contract", "A business license"], answer: 1, why: "SAM.gov registration gives your business a 12-character Unique Entity ID." },
          { q: "A company emails that it will renew your SAM.gov registration for $500. What do you do?", options: ["Pay quickly before it expires", "Send them your EIN and bank details", "Reply with your password", "Ignore it and renew yourself for free at sam.gov"], answer: 3, why: "SAM.gov registration is free; you never have to pay a third party." },
          { q: "How often must you renew your SAM.gov registration?", options: ["Every 365 days", "Every 10 years", "Never", "Every week"], answer: 0, why: "SAM.gov says you must renew every 365 days to stay active." },
          { q: "What does a NAICS code describe?", options: ["Your bank account", "Your home address", "What kind of business you are and what you sell", "Your credit score"], answer: 2, why: "NAICS codes sort businesses by their products or services." },
          { q: "Your main office is in a HUBZone and 40% of your workers live in one. Which certification should you look into?", options: ["WOSB", "DVBE", "8(a) only", "HUBZone"], answer: 3, why: "HUBZone needs a main office in a HUBZone and at least 35% of employees living in one." }
        ]
      }
    },
    {
      name: "Chapter 2: Finding and winning contracts",
      lessons: [
        {
          title: "Finding opportunities",
          minutes: 5,
          goal: "Search SAM.gov and Cal eProcure for opportunities that match your NAICS codes and save the search.",
          text: [
            "Federal agencies post contract opportunities on SAM.gov. Search Contract Opportunities by your NAICS code, your state and the type of set-aside, such as small business, 8(a), HUBZone, WOSB or SDVOSB. Save your search so new matches come to your email.",
            "California state agencies post bids on Cal eProcure (caleprocure.ca.gov). Register there, add keywords and UNSPSC product codes to your profile, and turn on notifications. Cal eProcure also shows what departments have bought before and at what prices, which helps you set your own.",
            "You do not have to win a big contract first. Many small businesses start as subcontractors to larger prime contractors. California departments have SB/DVBE Advocates who help certified businesses, and APEX Accelerators help you find bids for free.",
            "Look for opportunities that match what you already do well, in an area you can serve, at a size you can handle."
          ],
          steps: ["On SAM.gov, search Contract Opportunities by your NAICS code and state.", "Filter by the set-asides you qualify for.", "Save the search so new matches come by email.", "Register on Cal eProcure and add keywords and UNSPSC codes for notifications.", "Contact an APEX Accelerator or SB/DVBE Advocate for leads."],
          words: [["Contract opportunity", "a posted notice that the government wants to buy something."], ["Prime contractor", "the business that holds the contract with the government."], ["Subcontractor", "a business hired by the prime contractor to do part of the work."], ["UNSPSC", "a product and service code used by California's bidding system."]],
          slides: [
            { title: "Federal: SAM.gov", bullets: ["Search Contract Opportunities by NAICS and state", "Filter by your set-asides", "Save the search for email alerts"] },
            { title: "California: Cal eProcure", bullets: ["Register and add keywords and UNSPSC codes", "Turn on bid notifications", "See past purchases and prices"] },
            { title: "Start where you can win", bullets: ["Subcontract to a prime contractor", "SB/DVBE Advocates and APEX Accelerators help", "Match your skills, area and size"] }
          ],
          sources: [
            { name: "SAM.gov", url: "https://sam.gov/" },
            { name: "California DGS: How to do business with the State of California", url: "https://www.dgs.ca.gov/PD/Resources/Page-Content/Procurement-Division-Resources-List-Folder/How-to-do-business-with-the-state-of-California" },
            { name: "Cal eProcure: Find bid opportunities", url: "https://caleprocure.ca.gov/pages/Events-BS3/event-search.aspx" }
          ],
          tryIt: "Search SAM.gov Contract Opportunities using your primary NAICS code and your state. Write down two opportunities: the agency, what they want, the set-aside and the due date. Save the search.",
          youCanNow: "find federal and California contract opportunities that match your codes and set up alerts."
        },
        {
          title: "Reading a solicitation",
          minutes: 6,
          goal: "Read a solicitation's key parts and decide whether to bid.",
          text: [
            "A solicitation is the government's request for offers. It may be called a Request for Quote (RFQ), Request for Proposal (RFP) or Invitation for Bid (IFB). They can be long, but you only need to find a few key parts first.",
            "Find these: the statement of work (what they want done), the instructions (what to send and how), the evaluation criteria (how they will choose a winner, such as lowest price or best value), the due date and time, the deadline for questions, and the contracting officer's name. Also check for amendments, which are changes posted later.",
            "Then decide bid or no bid. Ask: Can we do this work well? Do we meet every requirement, such as licenses, insurance and the set-aside? Can we deliver on time and at a price that still makes a profit? Do we have similar past work to show?",
            "Missing one instruction, such as a page limit or a required form, can get an offer rejected. Make a checklist from the instructions and tick each item before you submit. An AI assistant can help you summarize a long public solicitation, but you must read the real instructions yourself."
          ],
          steps: ["Find the statement of work, instructions and evaluation criteria.", "Write the due date and time, the questions deadline and the contracting officer.", "Check for amendments.", "Answer the four bid or no-bid questions.", "If you bid, turn the instructions into a checklist and tick every item."],
          words: [["Solicitation", "the government's request for offers, such as an RFQ, RFP or IFB."], ["Statement of work", "the part that says exactly what work is wanted."], ["Evaluation criteria", "how the government will choose the winner."], ["Amendment", "a change to a solicitation posted after it first comes out."], ["Contracting officer", "the government person with authority to sign the contract."]],
          slides: [
            { title: "Names you will see", bullets: ["RFQ: Request for Quote", "RFP: Request for Proposal", "IFB: Invitation for Bid"] },
            { title: "Find these parts first", bullets: ["Statement of work and instructions", "Evaluation criteria", "Due date, questions deadline, amendments"] },
            { title: "Bid or no bid?", bullets: ["Can we do it well?", "Do we meet every requirement?", "Can we deliver on time at a profit? Past work?"] },
            { title: "Follow every instruction", bullets: ["One miss can get you rejected", "Make a checklist and tick each item"] }
          ],
          tryIt: "Open one of the opportunities you found in the last lesson. Write down the statement of work in one sentence, the evaluation criteria, the due date and time, and the questions deadline. Then answer the four bid or no-bid questions and decide.",
          youCanNow: "find the key parts of a solicitation and make a clear bid or no-bid decision."
        },
        {
          title: "Writing a capability statement",
          minutes: 6,
          goal: "Write a one-page capability statement that tells a buyer what you do and how to reach you.",
          text: [
            "A capability statement is a one-page summary of your business for government buyers and prime contractors. You send it when you meet buyers, at outreach events, and when you introduce yourself to a contracting officer or SB/DVBE Advocate.",
            "It has four parts. Core competencies: what you do best, in short bullet points. Past performance: two or three jobs you have done, with the customer type, what you did and the result. Differentiators: what makes you different, such as speed, a special skill or local presence. Company data: legal name, UEI, CAGE code if you have one, NAICS codes, certifications, and contact details.",
            "Keep it to one page, easy to scan, with your logo and contact at the top. Use the buyer's words from the statement of work when they fit. Make a version for each kind of buyer if you sell different services.",
            "An AI assistant can help you shorten bullets or make them clearer. Do not paste in private numbers like your bank details or EIN; your UEI and NAICS codes are fine to show."
          ],
          steps: ["Write three to five core competencies as short bullets.", "Add two or three past performance examples: customer type, work, result.", "Write two or three differentiators.", "Add company data: legal name, UEI, CAGE code, NAICS codes, certifications and contact.", "Fit it on one page and save it as a PDF."],
          words: [["Capability statement", "a one-page summary of your business for government buyers."], ["Core competencies", "the things your business does best."], ["Past performance", "work you have done before that shows you can deliver."], ["Differentiator", "something that makes your business different from others."], ["CAGE code", "a code that identifies businesses doing work for the government, assigned with SAM registration."]],
          slides: [
            { title: "What it is", bullets: ["One page about your business", "For government buyers and prime contractors", "Send it when you introduce yourself"] },
            { title: "Four parts", bullets: ["Core competencies", "Past performance", "Differentiators", "Company data: UEI, NAICS, certifications, contact"] },
            { title: "Make it easy to scan", bullets: ["One page, logo and contact at the top", "Use the buyer's words when they fit", "A version for each kind of buyer"] },
            { title: "Using AI to polish", bullets: ["Shorten and clarify bullets", "No bank details or EIN in prompts", "UEI and NAICS codes are fine to show"] }
          ],
          tryIt: "Final task: write your one-page capability statement with core competencies, past performance, differentiators and company data. Then find one real opportunity on SAM.gov or Cal eProcure that matches a NAICS code on your statement and write down its title and due date.",
          youCanNow: "write a one-page capability statement and match it to real government opportunities."
        }
      ],
      check: {
        title: "Knowledge Check 2: Finding and winning contracts",
        questions: [
          { q: "Where do federal agencies post contract opportunities?", options: ["SAM.gov", "A social media site", "Your bank's website", "The DMV"], answer: 0, why: "Federal contract opportunities are posted on SAM.gov." },
          { q: "Which part of a solicitation tells you how the winner will be chosen?", options: ["The cover page", "The evaluation criteria", "The agency logo", "The page numbers"], answer: 1, why: "The evaluation criteria explain how offers are judged." },
          { q: "You cannot deliver by the required date. What is the smart decision?", options: ["Bid anyway and hope", "Promise and be late", "Decide not to bid on this one", "Ignore the date"], answer: 2, why: "If you cannot meet a key requirement, a no-bid protects your reputation." },
          { q: "Which belongs in the company data part of a capability statement?", options: ["Your bank account number", "Your EIN", "Your password", "Your UEI and NAICS codes"], answer: 3, why: "UEI, NAICS codes, certifications and contact details help buyers find and check you." },
          { q: "What is a good way for a new small business to start?", options: ["Only bid on the largest contracts", "Subcontract to a prime contractor", "Pay someone to win contracts for you", "Wait for the government to call"], answer: 1, why: "Subcontracting builds past performance with less risk." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Winning Government Contracts",
    questions: [
      { q: "What is SAM.gov?", options: ["The federal site where businesses register to sell to the government", "A loan program", "A tax form", "A state website only"], answer: 0, why: "SAM.gov is the System for Award Management." },
      { q: "How many characters is a UEI?", options: ["4", "12", "20", "100"], answer: 1, why: "A UEI is a 12-character code of letters and numbers." },
      { q: "With only a UEI and no full registration, you:", options: ["Can win any contract", "Get paid automatically", "Cannot apply directly for federal awards", "Are certified 8(a)"], answer: 2, why: "SAM.gov says a UEI alone does not let you apply for federal awards." },
      { q: "How much does SAM.gov registration cost?", options: ["$500", "$99 a year", "A percent of each contract", "Nothing; it is free"], answer: 3, why: "Registration is free; ignore paid offers to register for you." },
      { q: "Where should you type your bank details for SAM.gov?", options: ["Only into SAM.gov itself", "Into an AI assistant", "In an email to a stranger", "On social media"], answer: 0, why: "Private details go only into the official site." },
      { q: "Where can you look up NAICS codes?", options: ["A random blog", "census.gov/naics", "Your phone's camera", "A text message"], answer: 1, why: "The US Census Bureau publishes the NAICS codes." },
      { q: "A size standard tells you:", options: ["Your logo size", "How big your office must be", "The largest you can be and still count as small for a NAICS code", "How many contracts you can win"], answer: 2, why: "Size standards set the small-business limit for each NAICS code." },
      { q: "A set-aside is:", options: ["A tax refund", "A loan", "A late fee", "A contract only certain businesses can compete for"], answer: 3, why: "Set-asides reserve contracts for groups such as small businesses." },
      { q: "Where do you apply for federal SBA certifications like WOSB and VetCert?", options: ["certifications.sba.gov", "A paid consultant only", "Your county library", "irs.gov"], answer: 0, why: "SBA certifications are applied for at certifications.sba.gov." },
      { q: "Which certification is for businesses at least 51% owned and controlled by women who are US citizens?", options: ["HUBZone", "WOSB", "DVBE", "8(a) only"], answer: 1, why: "WOSB stands for Women-Owned Small Business." },
      { q: "Who certifies veteran-owned and service-disabled veteran-owned small businesses for federal contracts now?", options: ["The IRS", "Your city", "SBA, through VetCert", "No one"], answer: 2, why: "SBA's VetCert program took over certification in 2023." },
      { q: "Where do you apply for California Small Business and DVBE certification?", options: ["SAM.gov", "The FBI", "A bank", "Cal eProcure, through the Department of General Services"], answer: 3, why: "California SB and DVBE certification is done through Cal eProcure." },
      { q: "A California DVBE must be at least 51% owned by:", options: ["Disabled veterans", "Any veterans' friends", "Out-of-state investors", "Government workers"], answer: 0, why: "DVBEs are at least 51% owned and managed by disabled veterans." },
      { q: "How can you get new SAM.gov opportunities sent to you?", options: ["Call every agency daily", "Save your search so matches come by email", "Pay for alerts", "You cannot"], answer: 1, why: "Saved searches send new matches by email." },
      { q: "A prime contractor is:", options: ["A government worker", "A bank", "The business that holds the contract with the government", "A certification"], answer: 2, why: "The prime holds the contract and may hire subcontractors." },
      { q: "Who can help you find bids for free?", options: ["A company that charges to register you", "A stranger online", "Nobody", "An APEX Accelerator"], answer: 3, why: "APEX Accelerators give free help with government contracting." },
      { q: "What is an amendment to a solicitation?", options: ["A change posted after it first comes out", "Your company logo", "A tax form", "A bank deposit"], answer: 0, why: "Amendments change a solicitation, so always check for them." },
      { q: "Which part says exactly what work is wanted?", options: ["The due date", "The statement of work", "The contracting officer's title", "The agency address"], answer: 1, why: "The statement of work describes the work." },
      { q: "Why turn a solicitation's instructions into a checklist?", options: ["To make it longer", "To skip steps", "Missing one instruction can get your offer rejected", "It is required by SAM.gov"], answer: 2, why: "A checklist helps you meet every instruction." },
      { q: "Which is a part of a capability statement?", options: ["Your bank password", "Your home address only", "A ten-page history", "Past performance"], answer: 3, why: "Past performance shows buyers you can deliver." }
    ]
  }
};
