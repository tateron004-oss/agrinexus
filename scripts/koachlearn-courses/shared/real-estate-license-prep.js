"use strict";

// Koach Learn course (wave 3, workforce development): "Real Estate License Exam Preparation".
// Prepares adults to study for a US state real estate salesperson (sales agent) license exam. ADDIE parts follow the pilot, re-entry/reentry-ai-digital-confidence.js.
// Facts checked 30 October 2026 on: hud.gov (Fair Housing Act protected classes), consumerfinance.gov (Loan Estimate within 3 business days of application;
// Closing Disclosure at least 3 business days before closing), dre.ca.gov (California salesperson requirements), trec.texas.gov (Texas sales agent requirements),
// arello.org (regulatory agency contact list). Exam length, pass marks and fees differ by state and were NOT stated: learners check their own state's candidate handbook.

const SRC = {
  arello: { name: "ARELLO (Association of Real Estate License Law Officials): Regulatory agencies", url: "https://arello.org/resources/regulatory-agencies/" },
  caDre: { name: "California Department of Real Estate: Salesperson license requirements", url: "https://www.dre.ca.gov/Examinees/RequirementsSales.html" },
  txTrec: { name: "Texas Real Estate Commission: Become a sales agent", url: "https://www.trec.texas.gov/become-licensed/sales-agent" },
  hudFha: { name: "HUD: Fair Housing Act overview", url: "https://www.hud.gov/helping-americans/fair-housing-act-overview" },
  cfpbLe: { name: "CFPB: What is a Loan Estimate?", url: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-loan-estimate-en-1995/" },
  cfpbCd: { name: "CFPB: What is a Closing Disclosure?", url: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-closing-disclosure-en-1983/" },
  cfpbHome: { name: "CFPB: Buying a house (Owning a Home)", url: "https://www.consumerfinance.gov/owning-a-home/" }
};

module.exports = {
  id: "real-estate-license-prep",
  category: "Workforce Development",
  name: "Real Estate License Exam Preparation",
  skills: "Finding your state's license steps, Using property and ownership terms, Applying agency and fair housing rules, Following a contract to closing, Solving real estate exam math, Building a dated study and test plan",
  outcome: "find your own state's real estate license steps on the official page, explain the core ideas the exam tests (property, agency, fair housing, contracts and closing), solve the common exam math, and follow a dated study and test plan you made yourself.",
  about: [
    "This course is for adults who want to become a licensed real estate salesperson (called a sales agent in some states): career changers, people starting a small business, veterans, parents going back to work and anyone who wants a job they can grow into. Many agents work as independent contractors under a licensed broker, so it also fits entrepreneurs.",
    "In the US, each state licenses real estate agents. The state regulator sets the required pre-license classes, the exam, the background check and the fees. This course PREPARES you; it does not grant a license and it does not replace your state's approved pre-license classes. Every lesson shows you where to check your state's own rules.",
    "You will learn the core ideas most state exams test, practice the math with made-up numbers, and finish with your own dated study and test plan. Each lesson takes about five minutes and ends with a \"Try it now\" task on paper or a phone. This course teaches how real estate works; it does not give advice on buying property or investing."
  ],
  finalTask: "Make your own Real Estate License Study and Test Plan (one or two pages): (1) your state's regulator, the official page you used, and the steps it lists (age, pre-license education, exam, fingerprints or background check, sponsoring broker), each with a target date; (2) the topics from your state's exam content outline, with your three weakest topics marked and a plan for each; (3) a one-page rule sheet on agency duties, the seven federal fair housing protected classes and the parts of a valid contract; (4) five practice math problems (commission, loan-to-value, property tax, proration, area) with your work shown; (5) a weekly study schedule up to your target exam date.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "US adults preparing for a state real estate salesperson (sales agent) license: career changers, small business owners, entrepreneurs, veterans, returning workers and young adults over 18. Some have finished high school or a GED only; some are second-language speakers.",
    startingPoint: "Can read a simple form and do basic arithmetic with a calculator. Most do not know who licenses agents in their state, the order of the licensing steps, or the legal words the exam uses (fee simple, easement, fiduciary, consideration, proration).",
    gap: "Many people pay for classes or an exam without a plan, miss a step (such as fingerprints or a sponsoring broker), or fail the exam on vocabulary and math. A learner who knows the official steps, the core ideas and the exam math, and who has a dated plan, is far more likely to pass and start working.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 7 to 8); every legal word is explained",
      "Devices: a phone or library computer to read the state's official page; paper, pen and a basic calculator for every task",
      "Time: 4 to 6 minute lessons that fit around a job",
      "Rules differ by state: education hours, exam format, pass marks and fees are checked on the state regulator's page, never assumed",
      "This course prepares; it does not replace state-approved pre-license education or grant a license",
      "No investment, legal or tax advice; math uses made-up numbers for practice only"
    ],
    prerequisites: "None. Learners who want a refresher on percentages can take \"Everyday Math\" first."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Using your state real estate regulator's official website", action: "list the steps to a salesperson license in the right order", standard: "with no step missing and the official page named" },
    { id: "O2", condition: "Given a short description of a property or ownership situation", action: "identify the correct real estate term for it", standard: "getting at least 4 of 5 right" },
    { id: "O3", condition: "Given a scenario with a client or a home seeker", action: "choose the action that follows agency duties and fair housing law", standard: "getting at least 4 of 5 scenarios right and naming the rule" },
    { id: "O4", condition: "Given a sample purchase offer", action: "check that it has the parts of a valid contract and put the closing steps in order", standard: "with no missing part and the federal disclosure timing correct" },
    { id: "O5", condition: "Given an exam-style word problem and a calculator", action: "calculate commission, loan-to-value, property tax, proration and area", standard: "getting at least 4 of 5 right with the work shown" },
    { id: "O6", condition: "Using your state's exam content outline and a calendar", action: "write a dated study and test plan", standard: "covering every outline topic and your three weakest topics" }
  ],
  chapters: [
    {
      name: "Chapter 1: The license and the core ideas",
      lessons: [
        {
          title: "How a real estate license works in your state",
          objectives: ["O1"],
          minutes: 5,
          goal: "List your state's steps to a salesperson license from the official page.",
          text: [
            "There is no national real estate license in the US. Each state has its own regulator, often called a real estate commission or department of real estate. It decides the classes, the exam, the background check and the fees. ARELLO, the association of license law officials, keeps a list of regulators you can use to find yours.",
            "The steps are similar in most states: meet the age rule, finish state-approved pre-license classes, apply, pass a background check (often fingerprints), pass the exam, and work under a licensed broker. Many exams have a national part and a state law part.",
            "The details differ a lot. California asks for three college-level courses (Real Estate Principles, Real Estate Practice and one elective). Texas asks for 180 classroom hours in six courses, fingerprints with the state police, and exams given by Pearson. Your state may be different, so always read your own state's page."
          ],
          steps: ["Find your state's real estate regulator (use the ARELLO list or search your state name plus \"real estate commission\" and look for .gov).", "Open the page for a new salesperson or sales agent license.", "Write each step in order: age, classes, application, background check, exam, broker.", "Write down the page address and the date you checked it."],
          words: [["Real estate regulator", "the state office that licenses agents and enforces the rules, such as a real estate commission."], ["Salesperson (sales agent)", "the first real estate license; you work under a broker."], ["Broker", "a higher license; a broker can run a real estate office and supervise salespeople."], ["Pre-license education", "the state-approved classes you must finish before the exam or the license."], ["Sponsoring broker", "the broker who agrees to supervise you once you are licensed."]],
          slides: [
            { title: "Licensing is by state", bullets: ["No national real estate license", "Your state's regulator sets classes, exam and fees", "ARELLO lists regulators"] },
            { title: "Steps in most states", bullets: ["Age rule and pre-license classes", "Application and background check", "Exam (often national and state parts)", "Work under a licensed broker"] },
            { title: "States differ: two examples", bullets: ["California: three college-level courses", "Texas: 180 hours in six courses, Pearson exams", "Always read your own state's page"] }
          ],
          sources: [SRC.arello, SRC.caDre, SRC.txTrec],
          tryIt: "Find your state's real estate regulator. On paper, list every step to a salesperson license in order, with the page address and today's date. Circle any step you did not know about.",
          youCanNow: "find your state's real estate regulator and list the steps to a salesperson license in order.",
          quickCheck: [
            { objective: "O1", q: "Who decides the classes and exam for a real estate salesperson license?", options: ["A national real estate board", "The real estate company you join", "Your state's real estate regulator", "The bank that lends to buyers"], answer: 2, why: "Real estate licenses are issued by each state, and the state regulator sets the requirements." },
            { objective: "O1", q: "A website you found says the classes take 60 hours. What do you do?", options: ["Check the hours on your state regulator's official page", "Trust it if it looks professional", "Pay for the cheapest class now", "Ask a friend in another state"], answer: 0, why: "Hours differ by state and change, so only your state's official page is reliable." }
          ]
        },
        {
          title: "Property and ownership words the exam uses",
          objectives: ["O2"],
          minutes: 6,
          goal: "Identify the correct term for a property or ownership situation.",
          text: [
            "Real property is the land and everything attached to it, such as a house, a fence or a tree, plus the rights that come with it. Personal property is movable, such as a couch. A fixture was personal property but is now attached, like a ceiling fan or a built-in dishwasher, so it usually goes with the house.",
            "Owning real property means holding a bundle of rights: to possess, use, enjoy, exclude others and sell or pass it on. Fee simple is the most complete form of ownership. When two or more people own together, joint tenancy usually includes the right of survivorship (a share passes to the other owners at death), while tenancy in common does not.",
            "A deed transfers ownership; title is the right of ownership itself. Things that limit or burden a property are encumbrances: a lien (a money claim, such as a mortgage or unpaid tax) and an easement (a right to use someone else's land, such as a utility line). Land is described in three main ways: metes and bounds, the rectangular (government) survey system, and lot and block from a recorded map."
          ],
          words: [["Real property", "land, what is attached to it, and the rights of ownership."], ["Fixture", "an item attached to the property, so it is treated as part of it."], ["Fee simple", "the most complete form of ownership."], ["Right of survivorship", "when one co-owner dies, their share passes to the other co-owners."], ["Encumbrance", "anything that limits or burdens a property, such as a lien or an easement."], ["Lien", "a legal money claim on a property."], ["Easement", "a right to use part of someone else's land for a set purpose."]],
          slides: [
            { title: "Real vs personal property", bullets: ["Real: land and what is attached", "Personal: movable things", "Fixture: attached, so it usually stays"] },
            { title: "Ownership", bullets: ["Bundle of rights: possess, use, enjoy, exclude, sell", "Fee simple: the most complete ownership", "Joint tenancy has survivorship; tenancy in common does not"] },
            { title: "Title and limits", bullets: ["Deed transfers ownership; title is the ownership", "Lien: a money claim", "Easement: a right to use someone's land"] },
            { title: "Describing land", bullets: ["Metes and bounds", "Rectangular (government) survey", "Lot and block from a recorded map"] }
          ],
          tryIt: "Make 10 flash cards on paper: the term on the front and your own plain meaning plus one example on the back (real property, personal property, fixture, fee simple, joint tenancy, tenancy in common, deed, title, lien, easement). Quiz yourself twice.",
          youCanNow: "name the right real estate term for common property and ownership situations.",
          quickCheck: [
            { objective: "O2", q: "The power company has the right to run a line across the back of a yard. This is:", options: ["A fixture", "Fee simple", "Personal property", "An easement"], answer: 3, why: "An easement is a right to use part of someone else's land for a set purpose." },
            { objective: "O2", q: "Two sisters own a house. When one dies, her share passes to the other automatically. They most likely hold title as:", options: ["Tenants in common", "Joint tenants", "Renters", "Lien holders"], answer: 1, why: "Joint tenancy usually includes the right of survivorship; tenancy in common does not." }
          ]
        },
        {
          title: "Agency duties and fair housing",
          objectives: ["O3"],
          minutes: 6,
          goal: "Choose the action that follows agency duties and fair housing law in a scenario.",
          text: [
            "When you represent a client, you are their agent and owe them fiduciary duties. Many textbooks list them as OLDCAR: Obedience (to lawful instructions), Loyalty, Disclosure (of important facts), Confidentiality, Accounting (for money held) and Reasonable care. Your state's law sets the exact duties and the disclosure forms.",
            "Representing both buyer and seller in one deal is called dual agency. Some states allow it only with written consent from both sides, and some limit or ban it. Check your state's rules.",
            "The federal Fair Housing Act makes it illegal to discriminate in housing because of race, color, national origin, religion, sex, familial status (such as having children) or disability. States and cities may add more groups. Illegal practices include steering (guiding people toward or away from areas because of a protected class), blockbusting (pushing owners to sell by warning that a group is moving in) and redlining (refusing loans or insurance in certain areas)."
          ],
          steps: ["Ask: who is my client, and what do I owe them?", "Ask: does this request treat someone differently because of a protected class?", "If yes, do not do it; explain the law politely.", "Write down what happened and tell your broker."],
          words: [["Agent", "a person authorized to act for someone else (the client or principal)."], ["Fiduciary", "a person in a position of trust who must put the client's interests first."], ["Dual agency", "one agent or brokerage representing both buyer and seller in the same deal."], ["Protected class", "a group the law protects from discrimination, such as race or disability."], ["Steering", "guiding people toward or away from areas because of a protected class; illegal."]],
          slides: [
            { title: "Duties to your client (OLDCAR)", bullets: ["Obedience, Loyalty, Disclosure", "Confidentiality, Accounting, Reasonable care", "Your state's law sets the exact duties"] },
            { title: "Dual agency", bullets: ["Representing both sides in one deal", "Rules differ: consent, limits or a ban", "Check your state"] },
            { title: "Fair Housing Act: 7 classes", bullets: ["Race, color, national origin, religion", "Sex, familial status, disability", "States and cities may add more"] },
            { title: "Illegal practices", bullets: ["Steering", "Blockbusting", "Redlining"] }
          ],
          sources: [SRC.hudFha],
          tryIt: "Write three short scenarios where a seller or buyer asks you to do something unfair (for example, \"Don't show my house to families with kids\"). For each, write the protected class involved and one polite sentence you would say instead.",
          youCanNow: "apply agency duties and fair housing law to choose the right action with clients.",
          quickCheck: [
            { objective: "O3", q: "A seller says, \"Only show my house to people without children.\" What do you do?", options: ["Explain that familial status is protected and you must show it to everyone", "Agree, since the seller is your client", "Show it only on weekdays", "Ask the buyers how many children they have"], answer: 0, why: "Familial status is a protected class under the Fair Housing Act, and obedience covers only lawful instructions." },
            { objective: "O3", q: "Your seller tells you the lowest price they will accept. A buyer asks you for it. Which duty applies?", options: ["Accounting", "Confidentiality", "Disclosure to the buyer", "Obedience to the buyer"], answer: 1, why: "An agent keeps the client's private information, such as their lowest price, confidential." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: The license and the core ideas",
        questions: [
          { objective: "O1", q: "Which is usually the FIRST step toward a salesperson license?", options: ["Join a sponsoring broker's office", "Take the state exam", "Get your first client", "Read your state regulator's requirements"], answer: 3, why: "You need the official list of steps before you pay for classes or the exam." },
          { objective: "O2", q: "A built-in dishwasher that was attached to the kitchen is most likely:", options: ["Personal property", "A fixture", "An easement", "A lien"], answer: 1, why: "An item attached to the property is a fixture and usually goes with the house." },
          { objective: "O2", q: "An unpaid property tax bill gives the county a claim on the house. This is:", options: ["A lien", "A deed", "Fee simple", "Joint tenancy"], answer: 0, why: "A lien is a legal money claim on a property." },
          { objective: "O3", q: "An agent tells a buyer, \"You'd be more comfortable in a neighborhood with people of your religion.\" This is:", options: ["Good customer service", "Blockbusting", "Steering, which is illegal", "Redlining"], answer: 2, why: "Guiding people toward or away from areas because of a protected class is steering." },
          { objective: "O3", q: "Which is NOT a protected class under the federal Fair Housing Act?", options: ["Disability", "National origin", "Familial status", "Favorite sports team"], answer: 3, why: "The seven federal classes are race, color, national origin, religion, sex, familial status and disability." }
        ]
      }
    },
    {
      name: "Chapter 2: Contracts, math and your test plan",
      lessons: [
        {
          title: "Contracts and the path to closing",
          objectives: ["O4"],
          minutes: 6,
          goal: "Check a purchase offer for the parts of a valid contract and order the closing steps.",
          text: [
            "A valid contract needs: parties who are legally able to sign (competent), an offer and an acceptance (mutual agreement), consideration (something of value given by each side), and a lawful purpose. A contract to buy or sell real estate generally must be in writing to be enforced; this rule is called the statute of frauds.",
            "A contract is void if it was never valid (for example, an illegal purpose). It is voidable if one side may cancel it, for example when a minor signed it. Most purchase offers include contingencies, such as getting a loan or a good inspection, and earnest money, a deposit that shows the buyer is serious.",
            "A common path is: offer, acceptance, escrow or closing agent opened, inspection, appraisal and loan approval, final walk-through, and closing. Federal rules protect the borrower: the lender gives a Loan Estimate within three business days of the loan application, and a Closing Disclosure at least three business days before closing, so the buyer can compare them."
          ],
          steps: ["Check the parties are named and able to sign.", "Check there is a clear offer and a signed acceptance.", "Check the price, the earnest money and what each side gives (consideration).", "Check it is in writing and for a lawful purpose.", "List the contingencies and their deadlines.", "Put the closing steps in order, with the Loan Estimate and Closing Disclosure timing."],
          words: [["Consideration", "something of value each side gives, such as money or a promise."], ["Statute of frauds", "the rule that real estate contracts generally must be in writing to be enforced."], ["Void / voidable", "void: never a valid contract; voidable: valid, but one side may cancel it."], ["Contingency", "a condition that must happen for the deal to go ahead, such as loan approval."], ["Earnest money", "a deposit the buyer makes to show they are serious."], ["Closing Disclosure", "the lender's final form with the loan terms and closing costs."]],
          slides: [
            { title: "Parts of a valid contract", bullets: ["Competent parties", "Offer and acceptance", "Consideration and a lawful purpose", "In writing for real estate"] },
            { title: "Void, voidable, contingent", bullets: ["Void: never valid", "Voidable: one side may cancel", "Contingency: a condition, like loan approval"] },
            { title: "Path to closing", bullets: ["Offer, acceptance, escrow", "Inspection, appraisal, loan approval", "Walk-through, then closing"] },
            { title: "Federal loan forms (CFPB)", bullets: ["Loan Estimate: within 3 business days of applying", "Closing Disclosure: 3+ business days before closing"] }
          ],
          sources: [SRC.cfpbLe, SRC.cfpbCd, SRC.cfpbHome],
          tryIt: "Write a short made-up purchase offer (names, address, price, earnest money, one contingency, signatures). Then check it with the six steps above and list what is missing. Finish with the closing steps in order.",
          youCanNow: "check a purchase offer for the parts of a valid contract and put the steps to closing in order.",
          quickCheck: [
            { objective: "O4", q: "A buyer and seller agree on a house sale by phone only. Under the statute of frauds the deal is:", options: ["Fully enforceable", "Enforceable after one week", "Generally not enforceable until it is in writing", "Illegal"], answer: 2, why: "Real estate contracts generally must be in writing to be enforced." },
            { objective: "O4", q: "When must the borrower get the Closing Disclosure?", options: ["At least three business days before closing", "On the day of closing", "Within a month after closing", "Before making an offer"], answer: 0, why: "The CFPB says the lender gives the Closing Disclosure at least three business days before closing." }
          ]
        },
        {
          title: "Real estate exam math",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calculate commission, loan-to-value, property tax, proration and area.",
          text: [
            "Practice only: all numbers here are made up. Commission: sale price times the rate. A $300,000 sale at 6% is $18,000. If the listing office gets half, that is $9,000; if the agent's split is 60%, the agent gets $5,400.",
            "Loan-to-value (LTV) is the loan divided by the value. A $240,000 loan on a $300,000 home is 0.80, or 80%. Property tax is the assessed value times the tax rate: $200,000 times 1.5% is $3,000 a year, or $250 a month.",
            "Proration splits a cost by days. If yearly taxes are $3,650 and the year has 365 days, that is $10 a day; if the seller owned the home 120 days and the buyer pays the bill later, the seller owes the buyer $1,200. Area: length times width. A lot 50 feet by 120 feet is 6,000 square feet. One acre is 43,560 square feet. Check whether your exam uses a 360-day or 365-day year."
          ],
          steps: ["Read the question and underline what it asks for.", "Write the formula (part = whole times rate).", "Turn percentages into decimals (6% = 0.06).", "Do one step at a time on paper.", "Ask: does the answer make sense?"],
          words: [["Commission", "the fee paid for selling, usually a percentage of the sale price."], ["Split", "how a commission is shared between offices or between a broker and an agent."], ["Loan-to-value (LTV)", "the loan amount divided by the property value, as a percentage."], ["Assessed value", "the value the local government uses to figure property tax."], ["Proration", "dividing a cost between buyer and seller by the days each one owns the property."]],
          slides: [
            { title: "Commission", bullets: ["Sale price x rate", "$300,000 x 6% = $18,000", "Half to listing office = $9,000; 60% split = $5,400"] },
            { title: "LTV and property tax", bullets: ["LTV = loan / value: $240,000 / $300,000 = 80%", "Tax = assessed value x rate: $200,000 x 1.5% = $3,000"] },
            { title: "Proration and area", bullets: ["$3,650 / 365 = $10 a day; 120 days = $1,200", "50 ft x 120 ft = 6,000 sq ft", "1 acre = 43,560 sq ft"] },
            { title: "Method", bullets: ["Underline the question", "Write the formula, use decimals", "Check that the answer makes sense"] }
          ],
          tryIt: "Practice only. Solve on paper with a calculator: (1) 5% commission on $250,000; (2) LTV of a $180,000 loan on a $200,000 home; (3) yearly tax on a $150,000 assessed value at 2%; (4) seller's share of $1,825 yearly taxes for 73 days (365-day year); (5) square feet in a lot 80 feet by 100 feet. Answers: $12,500; 90%; $3,000; $365; 8,000.",
          youCanNow: "solve the common math on a real estate exam and show your work.",
          quickCheck: [
            { objective: "O5", q: "Practice only: what is the LTV of a $270,000 loan on a $300,000 home?", options: ["80%", "85%", "111%", "90%"], answer: 3, why: "$270,000 divided by $300,000 is 0.90, or 90%." },
            { objective: "O5", q: "Practice only: a lot is 100 feet by 150 feet. How many square feet is it?", options: ["250", "15,000", "1,500", "43,560"], answer: 1, why: "Area is length times width: 100 times 150 is 15,000 square feet." }
          ]
        },
        {
          title: "Your study and test plan",
          objectives: ["O6", "O1"],
          minutes: 5,
          goal: "Write a dated study and test plan from your state's exam content outline.",
          text: [
            "Your state or its testing company publishes a candidate handbook. It usually has the exam content outline (the topics and how many questions on each), the rules for test day, the ID you must bring and how to schedule. Download it from the official site, not from a copy someone posted.",
            "Turn the outline into a plan. List every topic, rate yourself 1 to 3 on each, and mark your three weakest. Put the big dates on a calendar working backward from a target exam date: finish classes, apply, get fingerprints, schedule the exam. Then set short study blocks each week, with practice questions and math every week.",
            "Practice tests help most when you review every wrong answer and write why the right answer is right. Beware of any site that promises a \"guaranteed pass\" or sells real exam questions; that is a scam or cheating, and states can deny a license for it."
          ],
          steps: ["Download your state's candidate handbook from the official site.", "Copy the exam content outline topics.", "Rate yourself 1 to 3 on each topic; mark your three weakest.", "Set a target exam date and work backward to each step.", "Plan weekly study blocks with practice questions and math.", "Review every wrong answer and write why the right answer is right."],
          words: [["Candidate handbook", "the official guide to the exam: topics, rules, ID and scheduling."], ["Exam content outline", "the list of topics on the exam and how much each counts."], ["Target date", "the date you aim to take the exam; you plan backward from it."]],
          slides: [
            { title: "Start with the official handbook", bullets: ["Exam content outline", "Test-day rules and ID", "How to schedule"] },
            { title: "Build the plan", bullets: ["Rate each topic 1 to 3", "Mark your three weakest", "Work backward from a target exam date"] },
            { title: "Practice smart", bullets: ["Weekly practice questions and math", "Review every wrong answer", "No \"guaranteed pass\" or leaked questions"] }
          ],
          sources: [SRC.arello, SRC.txTrec, SRC.caDre],
          tryIt: "Final task: make your Real Estate License Study and Test Plan: your state's steps with dates and the official page, the outline topics with your three weakest marked, a rule sheet on agency, fair housing and contracts, five worked math problems, and a weekly schedule up to your exam date.",
          youCanNow: "turn your state's exam outline into a dated study and test plan and follow it.",
          quickCheck: [
            { objective: "O6", q: "Where should your study plan's topic list come from?", options: ["A social media post", "Your state's official exam content outline", "Whatever topics you like most", "A site selling real exam questions"], answer: 1, why: "The official content outline shows what the exam actually tests." },
            { objective: "O6", q: "You keep missing proration questions on practice tests. What is the best plan?", options: ["Skip proration; it is only a few questions", "Take the exam sooner", "Mark it as a weak topic and add math practice each week", "Buy a \"guaranteed pass\" package"], answer: 2, why: "Marking weak topics and practicing them every week closes the gap before test day." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Contracts, math and your test plan",
        questions: [
          { objective: "O4", q: "Which is NOT one of the parts of a valid contract?", options: ["Offer and acceptance", "Consideration", "A notary stamp on every page", "Lawful purpose"], answer: 2, why: "A valid contract needs competent parties, mutual agreement, consideration and a lawful purpose; a stamp on every page is not one of them." },
          { objective: "O4", q: "A purchase offer says the deal goes ahead only if the buyer gets a loan. This is a:", options: ["Contingency", "Lien", "Easement", "Commission"], answer: 0, why: "A contingency is a condition that must happen for the deal to go ahead." },
          { objective: "O5", q: "Practice only: a $400,000 sale at 5% commission is:", options: ["$2,000", "$4,000", "$200,000", "$20,000"], answer: 3, why: "$400,000 times 0.05 is $20,000." },
          { objective: "O5", q: "Practice only: an assessed value of $250,000 at a 2% tax rate gives a yearly tax of:", options: ["$5,000", "$500", "$50,000", "$2,500"], answer: 0, why: "$250,000 times 0.02 is $5,000." },
          { objective: "O6", q: "What is the best way to use a practice test?", options: ["Memorize the answers only", "Review every wrong answer and write why the right one is right", "Take it once and stop", "Share the questions online"], answer: 1, why: "Reviewing why each answer is right builds the understanding the real exam tests." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Real Estate License Exam Preparation",
    questions: [
      { objective: "O1", q: "Who issues real estate salesperson licenses in the US?", options: ["The federal government", "Each state's real estate regulator", "The National Association of Realtors", "Your local bank"], answer: 1, why: "Licensing is by state, through the state's real estate regulator." },
      { objective: "O1", q: "Which step comes in most states before you can work as a salesperson?", options: ["Owning a home", "Selling five homes", "Passing the state exam and a background check", "Becoming a broker"], answer: 2, why: "Most states require the exam and a background check, then work under a broker." },
      { objective: "O1", q: "A salesperson must work under:", options: ["A licensed broker", "A bank", "A home inspector", "A title company"], answer: 0, why: "Salespeople are supervised by a licensed broker." },
      { objective: "O2", q: "Which is personal property?", options: ["A built-in furnace", "A tree in the yard", "The land", "A sofa in the living room"], answer: 3, why: "Personal property is movable; the sofa is not attached." },
      { objective: "O2", q: "The most complete form of ownership is:", options: ["Easement", "Fee simple", "Lien", "Lease"], answer: 1, why: "Fee simple gives the owner the fullest bundle of rights." },
      { objective: "O2", q: "Which way of describing land uses a recorded map of a subdivision?", options: ["Metes and bounds", "Fee simple", "Lot and block", "Proration"], answer: 2, why: "Lot and block refers to lots on a recorded subdivision map." },
      { objective: "O2", q: "Co-owners whose shares do NOT pass automatically to each other at death hold title as:", options: ["Tenants in common", "Joint tenants", "Brokers", "Lien holders"], answer: 0, why: "Tenancy in common has no right of survivorship." },
      { objective: "O3", q: "Which is one of an agent's fiduciary duties to a client?", options: ["Telling the other side the client's lowest price", "Loyalty", "Choosing the client's lender for them", "Ignoring the client's lawful instructions"], answer: 1, why: "Loyalty is a core fiduciary duty (OLDCAR)." },
      { objective: "O3", q: "Telling owners to sell fast because a certain group is moving in is called:", options: ["Steering", "Redlining", "Dual agency", "Blockbusting"], answer: 3, why: "Blockbusting pushes owners to sell by stirring fear about a group moving in." },
      { objective: "O3", q: "Refusing loans in an area because of who lives there is called:", options: ["Redlining", "Proration", "Steering", "Escrow"], answer: 0, why: "Redlining is refusing loans or insurance in certain areas; it is illegal." },
      { objective: "O3", q: "A buyer who uses a wheelchair asks to see a home. Under the Fair Housing Act you:", options: ["Show only homes with ramps without asking", "Refuse because of the stairs", "Show the home on the same terms as anyone else", "Ask for a doctor's note"], answer: 2, why: "Disability is a protected class, so the buyer gets equal treatment." },
      { objective: "O4", q: "A contract signed by a minor that the minor may cancel is:", options: ["Void", "Voidable", "Fully enforceable", "A lien"], answer: 1, why: "Voidable means valid, but one side may cancel it." },
      { objective: "O4", q: "Within how many business days of a loan application must the lender give a Loan Estimate?", options: ["Three", "Ten", "Thirty", "One"], answer: 0, why: "The CFPB says the Loan Estimate comes within three business days of the application." },
      { objective: "O4", q: "Earnest money is:", options: ["The agent's commission", "The yearly property tax", "A lien on the house", "A deposit that shows the buyer is serious"], answer: 3, why: "Earnest money is the buyer's good-faith deposit." },
      { objective: "O5", q: "Practice only: an agent gets a 50% split of a $9,000 commission. The agent receives:", options: ["$900", "$9,000", "$4,500", "$18,000"], answer: 2, why: "$9,000 times 0.50 is $4,500." },
      { objective: "O5", q: "Practice only: a $160,000 loan on a $200,000 home has an LTV of:", options: ["60%", "125%", "40%", "80%"], answer: 3, why: "$160,000 divided by $200,000 is 0.80, or 80%." },
      { objective: "O5", q: "Practice only: yearly taxes are $3,650 (365-day year). The seller owned the home 30 days. The seller's share is:", options: ["$300", "$365", "$100", "$3,000"], answer: 0, why: "$3,650 divided by 365 is $10 a day; 30 days is $300." },
      { objective: "O5", q: "How many square feet are in one acre?", options: ["5,280", "43,560", "10,000", "640"], answer: 1, why: "One acre is 43,560 square feet." },
      { objective: "O6", q: "Your state's candidate handbook usually tells you:", options: ["The exact questions on the exam", "Which house to buy", "The exam content outline and test-day rules", "Your future salary"], answer: 2, why: "The handbook gives the outline, rules, ID needs and scheduling." },
      { objective: "O6", q: "A good study plan starts by:", options: ["Picking a target exam date and working backward to each step", "Buying the most expensive course", "Studying only your favorite topics", "Waiting until you feel ready"], answer: 0, why: "Planning backward from a target date puts every step and study block on the calendar." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 4, 7, 8, 12, 14, 17, 19] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and check it again.",
    criteria: [
      { name: "Official steps", objective: "O1", notYet: "Steps are missing, out of order, or copied from an unofficial site.", meets: "Every step from the state regulator's page is listed in order, with the page address and the date checked.", exceeds: "Also notes the costs and documents for each step exactly as the official page states them." },
      { name: "Core terms", objective: "O2", notYet: "Several property or ownership terms are wrong or missing from the rule sheet.", meets: "The rule sheet defines the key property and ownership terms correctly in plain words.", exceeds: "Each term has a real-life example the learner made up." },
      { name: "Agency and fair housing", objective: "O3", notYet: "Fiduciary duties or the seven federal protected classes are missing or wrong.", meets: "Lists the duties and all seven federal classes, plus steering, blockbusting and redlining.", exceeds: "Adds any extra protected classes from the learner's state or city, with the source." },
      { name: "Contract and closing", objective: "O4", notYet: "Contract parts or closing steps are missing, or the Loan Estimate and Closing Disclosure timing is wrong.", meets: "Lists every part of a valid contract and the closing steps in order with correct disclosure timing.", exceeds: "Adds the contingencies and their deadlines from a sample offer." },
      { name: "Math", objective: "O5", notYet: "Fewer than 4 of the 5 problems are right, or the work is not shown.", meets: "At least 4 of 5 problems are right with the work shown.", exceeds: "All 5 right, plus one extra problem written and solved by the learner." },
      { name: "Dated plan", objective: "O6", notYet: "No target date, or topics are not from the official content outline.", meets: "Covers every outline topic, marks the three weakest and has weekly study blocks up to a target date.", exceeds: "Includes practice-test review dates and a backup exam date." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who complete state-approved pre-license education within 6 months (follow-up survey)",
      "Learners who pass the state real estate exam, and on which attempt (self-reported)",
      "Learners who are licensed and working under a sponsoring broker within 12 months"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer to read the state regulator's official page and candidate handbook",
      "Paper, pen and a basic calculator",
      "A calendar (paper or phone) for the study and test plan",
      "About 60 to 75 minutes in total, in short sessions: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "If the group is from one state, open that state's regulator page together in Lesson 1 and use its candidate handbook in Lesson 6.",
      "Make clear that this course prepares learners; it does not replace state-approved pre-license classes or grant a license.",
      "Do the math lesson with pairs at a board: one solves, one checks the steps.",
      "Use role play for fair housing scenarios; stop and name the rule each time.",
      "Do not give advice on buying property, investing, loans or taxes; point learners to official sources and licensed professionals.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
