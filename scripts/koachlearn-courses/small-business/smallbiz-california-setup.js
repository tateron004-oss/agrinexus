"use strict";

// Koach Learn course: Small Business -> "Setting Up a Small Business in California, Including Costs". Written as a skill-building course: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
// State fees and rules were checked on the official pages (sos.ca.gov, ftb.ca.gov, cdtfa.ca.gov, irs.gov, edd.ca.gov, calgold.ca.gov) on 27 October 2026; each lesson lists them in `sources`.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], sources, tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

const SOS_LLC = { name: "California Secretary of State: Limited Liability Companies (forms and fees)", url: "https://www.sos.ca.gov/business-programs/business-entities/forms/limited-liability-companies-california-domestic" };
const SOS_CORP = { name: "California Secretary of State: Corporations (forms and fees)", url: "https://www.sos.ca.gov/business-programs/business-entities/forms/corporations-california-domestic" };
const BIZFILE = { name: "California Secretary of State: bizfile Online", url: "https://bizfileonline.sos.ca.gov/" };
const FTB_LLC = { name: "Franchise Tax Board: Limited liability company", url: "https://www.ftb.ca.gov/file/business/types/limited-liability-company/index.html" };
const FTB_CORP = { name: "Franchise Tax Board: Corporations", url: "https://www.ftb.ca.gov/file/business/types/corporations/index.html" };
const FTB_FORMS = { name: "Franchise Tax Board: Guide to Common Forms of Ownership (FTB 1123)", url: "https://www.ftb.ca.gov/forms/misc/1123.html" };
const CDTFA = { name: "CDTFA: Permits and Licenses", url: "https://www.cdtfa.ca.gov/services/permits-licenses.htm" };
const CDTFA_FAQ = { name: "CDTFA: Obtaining a Seller's Permit (FAQ)", url: "https://cdtfa.ca.gov/taxes-and-fees/faqseller.htm" };
const IRS_EIN = { name: "IRS: Get an Employer Identification Number", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" };
const CALGOLD = { name: "CalGold: California permit assistance", url: "https://www.calgold.ca.gov/" };
const EDD = { name: "EDD: Step 1, Register as an Employer", url: "https://edd.ca.gov/en/payroll_taxes/step-1-register-as-an-employer/" };
const LA_FBN = { name: "Los Angeles County Clerk: Fictitious Business Name requirements (example county)", url: "https://www.lavote.gov/home/county-clerk/fictitious-business-names/filing/requirements" };
const CALOSBA = { name: "California Office of the Small Business Advocate: Set Up Your Business", url: "https://calosba.ca.gov/for-small-businesses-and-non-profits/set-up-your-business-in-california/" };

module.exports = {
  id: "smallbiz-california-setup",
  category: "Small Business",
  name: "Setting Up a Small Business in California, Including Costs",
  skills: "Choosing a business structure, Registering with the state and county, Getting an EIN and seller's permit, Finding local permits, Building a startup cost and deadline sheet",
  outcome: "build a one-page setup plan for your own California business: the structure you will use, each registration and permit you need in the right order, the official office for each one, what each costs (or where to look up the cost), and the due dates you must not miss.",
  about: [
    "This course is for people starting a small business in California: a food truck, a hair salon, a cleaning service, a corner shop, an online store or a home bakery. Many of our students are first-time and minority business owners, and many are doing this without a lawyer.",
    "You will learn the setup steps in order: pick a structure, register the name, get a free federal tax number, get a seller's permit if you sell goods, find your city and county permits, and plan for the yearly state tax and filings. Every state fee in this course was checked on the official government page, and each lesson lists those pages.",
    "Fees and rules change. Before you pay anything, open the official page listed in the lesson and check the current number. City and county fees are different in every place, so this course shows you where to look them up instead of guessing. For your own situation, a free SCORE mentor, a Small Business Development Center (SBDC) or a tax professional can help.",
    "Each lesson takes about five minutes. Read the lesson, watch the slides, then do the \"Try it now\" task. There is a short knowledge check after each chapter and a 20-question quiz at the end. The tasks add up to your own setup plan."
  ],
  finalTask: "Make a one-page setup plan for your business with five columns: Step, Office (with the official website), Cost (or \"look up at ...\"), Due date, Done. Include your structure, name filing, EIN, seller's permit (or why you do not need one), city business license, any special permits CalGold lists for your business type, and the yearly $800 tax and Statement of Information if you form an LLC or corporation.",
  chapters: [
    {
      name: "Chapter 1: Choosing and registering your business",
      lessons: [
        {
          title: "Choosing a business structure",
          minutes: 6,
          goal: "Pick the business structure that fits your business today, and know what it costs to form.",
          text: [
            "Your business structure is the legal form of your business. The most common choices for small businesses are a sole proprietorship, a general partnership, a limited liability company (LLC) and a corporation.",
            "A sole proprietorship is one person doing business. You do not file formation papers with the California Secretary of State, so there is no state formation fee. But you and the business are the same in the eyes of the law: if the business owes money or is sued, your personal things can be at risk. A partnership is the same idea with two or more owners.",
            "An LLC or a corporation is a separate legal body. You form it by filing with the California Secretary of State. The Secretary of State lists the fee for LLC Articles of Organization (Form LLC-1) as $70 and for general stock corporation Articles of Incorporation (Form ARTS-GS) as $100. An LLC or corporation can help protect your personal things from business debts, but it costs more every year (Lesson 6).",
            "There is no single right answer. A one-person cleaning service just starting out may begin as a sole proprietor; a restaurant with a lease, staff and more risk often forms an LLC or corporation. Talk it through with a free SBDC advisor, SCORE mentor or a tax professional before you decide."
          ],
          steps: ["Write down who owns the business and how much risk it carries (lease, staff, customers on site, loans).", "Read the FTB Guide to Common Forms of Ownership.", "Compare the yearly costs, not just the setup fee.", "Choose a structure, and ask an advisor if you are unsure."],
          words: [["Business structure", "the legal form of a business, like sole proprietorship, LLC or corporation."], ["Sole proprietorship", "a business owned by one person that is not separate from the owner in law."], ["LLC", "limited liability company: a business registered with the state that is separate from its owners."], ["Liability", "being legally responsible for a debt or a harm."]],
          slides: [
            { title: "Four common structures", bullets: ["Sole proprietorship (one owner)", "General partnership (two or more owners)", "Limited liability company (LLC)", "Corporation"] },
            { title: "Sole proprietor or partnership", bullets: ["No formation filing with the Secretary of State", "You and the business are the same in law", "Your personal things can be at risk"] },
            { title: "LLC or corporation", bullets: ["Formed by filing with the Secretary of State", "LLC-1: $70. ARTS-GS stock corporation: $100", "Separate from you, but costs more every year"] },
            { title: "Choosing", bullets: ["Think about risk: lease, staff, customers, loans", "Compare yearly costs, not just setup fees", "Ask a free SBDC or SCORE advisor"] }
          ],
          sources: [SOS_LLC, SOS_CORP, FTB_FORMS],
          tryIt: "Start your setup plan. At the top write your business idea, who owns it, and its biggest risks. Then write the structure you would choose today and one reason why.",
          youCanNow: "name the common business structures, say what forming an LLC or corporation costs at the state, and choose one for your business."
        },
        {
          title: "Naming and registering your business",
          minutes: 5,
          goal: "Register your business name the right way for your structure.",
          text: [
            "An LLC or corporation registers its name when it files its formation papers with the Secretary of State. You can file online at bizfile Online (bizfileonline.sos.ca.gov). Search the name there first to see whether another business already uses it.",
            "If you do business under a name that is not your own legal name, you file a Fictitious Business Name (FBN) statement, also called a DBA (\"doing business as\"), with the county clerk in the county where your business is based. For example, if Maria Lopez runs \"Sunrise Tamales\", she files an FBN. An LLC that uses a different name from its registered one files an FBN too.",
            "The fee for an FBN is set by each county, so look it up on your county clerk's website. Counties also require you to publish the FBN in a local newspaper once a week for four weeks, usually starting within 30 days of filing, and then file proof of publication. Check your county's exact rules."
          ],
          steps: ["Search your name idea on bizfile Online.", "LLC or corporation: file the formation papers on bizfile Online.", "Using a name that is not your legal name: file an FBN with your county clerk.", "Publish the FBN in a newspaper as your county requires, and file the proof.", "Write each step, its office and its cost in your plan."],
          words: [["Fictitious Business Name (FBN)", "a business name that is not the owner's legal name; also called a DBA."], ["DBA", "\"doing business as\": the name a business uses with the public."], ["County clerk", "the county office that files FBN statements and other public records."]],
          slides: [
            { title: "LLC or corporation", bullets: ["The name is registered when you form it", "File online at bizfileonline.sos.ca.gov", "Search the name first"] },
            { title: "Fictitious Business Name (DBA)", bullets: ["For a name that is not your legal name", "Filed with your county clerk", "Example: Maria Lopez doing business as Sunrise Tamales"] },
            { title: "FBN costs and publishing", bullets: ["The fee is set by each county: check its website", "Publish in a local newspaper once a week for 4 weeks", "Then file proof; check your county's deadlines"] }
          ],
          sources: [BIZFILE, LA_FBN, CALOSBA],
          tryIt: "Search your business name on bizfile Online. Then find your county clerk's FBN page and write down the filing fee and the publishing rule in your plan.",
          youCanNow: "check whether a business name is free, and say when you need a Fictitious Business Name and where to file it."
        },
        {
          title: "Getting your free EIN and a seller's permit",
          minutes: 5,
          goal: "Apply for an EIN from the IRS and decide whether you need a California seller's permit.",
          text: [
            "An EIN (Employer Identification Number) is your business's federal tax number. LLCs, corporations, partnerships and any business with employees need one; a sole proprietor without employees may use their own number but often gets an EIN to keep business and personal separate. The IRS says you never have to pay a fee for an EIN. Apply on irs.gov, and beware of websites that charge for it.",
            "A seller's permit comes from the California Department of Tax and Fee Administration (CDTFA). If you sell or lease goods that are normally taxable in California, you need one, and you must display it at your place of business. A shop, a boutique, a food truck and a restaurant usually need one. A pure service, like house cleaning or tutoring, often does not, but check.",
            "CDTFA says there is no fee for a seller's permit, but it may ask for a security deposit, and decides the amount when you apply. If you sell in one place for 90 days or less, such as a seasonal stand, you may need a temporary seller's permit instead. Register online through CDTFA."
          ],
          steps: ["Go to irs.gov and search \"apply for an EIN\".", "Apply online in one sitting and save the confirmation letter.", "Decide whether you sell taxable goods.", "If yes, register for a seller's permit on cdtfa.ca.gov.", "Display the permit where you do business."],
          words: [["EIN", "Employer Identification Number: a free federal tax number for a business, from the IRS."], ["Seller's permit", "a California permit, from CDTFA, to sell taxable goods and collect sales tax."], ["CDTFA", "California Department of Tax and Fee Administration."], ["Security deposit", "money CDTFA may hold in case sales tax is not paid later."]],
          slides: [
            { title: "EIN: your business tax number", bullets: ["From the IRS, on irs.gov", "Always free: the IRS never charges for an EIN", "Beware of sites that charge a fee"] },
            { title: "Seller's permit: who needs it", bullets: ["Selling or leasing taxable goods in California", "Shops, food trucks, restaurants usually do", "Pure services often do not: check"] },
            { title: "Seller's permit: cost", bullets: ["No fee to apply (CDTFA)", "CDTFA may ask for a security deposit", "Selling 90 days or less? Ask about a temporary permit"] }
          ],
          sources: [IRS_EIN, CDTFA, CDTFA_FAQ],
          tryIt: "Add two rows to your plan: EIN (IRS, free, apply on irs.gov) and seller's permit (CDTFA, no fee, possible deposit) or a note saying why you do not need one. Do not type your Social Security number anywhere except the official IRS form.",
          youCanNow: "apply for a free EIN on the official IRS site and decide whether your business needs a seller's permit."
        }
      ],
      check: {
        title: "Knowledge Check 1: Choosing and registering your business",
        questions: [
          { q: "What does the Secretary of State list as the fee for LLC Articles of Organization (Form LLC-1)?", options: ["$800", "$70", "$20", "Free"], answer: 1, why: "The Secretary of State's LLC forms page lists Form LLC-1 at $70." },
          { q: "Kevin runs a lawn-care business as a sole proprietor. Which is true?", options: ["He must pay $100 to the Secretary of State to form it", "He cannot use a business name", "He must form a corporation first", "He does not file formation papers with the Secretary of State"], answer: 3, why: "Sole proprietors do not file formation papers with the Secretary of State." },
          { q: "Maria Lopez sells food as \"Sunrise Tamales\". Where does she file her Fictitious Business Name?", options: ["Her county clerk", "CDTFA", "The IRS", "The Franchise Tax Board"], answer: 0, why: "FBN statements are filed with the county clerk where the business is based." },
          { q: "A website asks for $150 to get you an EIN. What do you do?", options: ["Pay it; it is faster", "Use a friend's EIN", "Apply free on irs.gov instead", "Skip the EIN forever"], answer: 2, why: "The IRS says you never have to pay a fee for an EIN." },
          { q: "Which business most likely needs a California seller's permit?", options: ["A house-cleaning service", "A tutoring service", "A boutique selling clothes", "A bookkeeping service"], answer: 2, why: "Selling taxable goods, like clothing, needs a seller's permit." }
        ]
      }
    },
    {
      name: "Chapter 2: Local permits, yearly costs and your plan",
      lessons: [
        {
          title: "Finding your city and county permits",
          minutes: 5,
          goal: "Use CalGold and your city's website to list the local permits your business needs.",
          text: [
            "Most cities require a business license or business tax certificate, even for a home business. The cost is set by each city (or the county, if you are outside a city) and often depends on your type of business or your income. Look it up on your city's website or call city hall.",
            "Some businesses need special permits. A restaurant or food truck needs a health permit from the county environmental health department. A home bakery may need a cottage food registration or permit from the county. A salon needs state board licenses for the workers. Many places also need a zoning check, a fire inspection or a sign permit.",
            "CalGold (calgold.ca.gov) is a free state tool that helps you find permit information. You choose your city or county and your business type, and it lists the agencies and how to reach them. CalGold does not issue permits, and it says it is still being built, so call the agency to confirm."
          ],
          steps: ["Open calgold.ca.gov.", "Choose your city or county.", "Choose your business type (or \"General Business Information\").", "Write down each permit and the agency that issues it.", "Visit or call each agency to confirm the fee and how to apply."],
          words: [["Business license", "a city or county permission to run a business there; sometimes called a business tax certificate."], ["Zoning", "local rules about what kind of business can operate at an address."], ["CalGold", "a free California website that lists permit information by place and business type."]],
          slides: [
            { title: "City business license", bullets: ["Most cities require one, even at home", "The fee is set by each city or county", "Check your city's website or call city hall"] },
            { title: "Special permits", bullets: ["Food: county environmental health permit", "Home bakery: county cottage food rules", "Zoning, fire inspection and sign permits"] },
            { title: "Use CalGold", bullets: ["calgold.ca.gov: choose city and business type", "It lists agencies; it does not issue permits", "Call each agency to confirm the fee"] }
          ],
          sources: [CALGOLD, CALOSBA],
          tryIt: "Run CalGold for your city and business type. Add every permit it lists to your plan, with the agency's website. For each one, write the fee or \"look up at\" plus where.",
          youCanNow: "find the city and county permits your business needs and the office that issues each one."
        },
        {
          title: "The yearly costs: the $800 tax, filings and payroll",
          minutes: 6,
          goal: "List the yearly state costs and deadlines that come with your structure.",
          text: [
            "LLCs: the Franchise Tax Board (FTB) says every LLC doing business or organized in California must pay an $800 annual tax, every year, until the LLC is cancelled, even if it does no business. The first payment is due by the 15th day of the 4th month after you file with the Secretary of State. LLCs that make more than $250,000 also pay an LLC fee. A first-year exemption that existed for 2021 to 2023 no longer applies.",
            "Corporations: FTB says corporations pay a minimum franchise tax of $800, but newly formed corporations are not required to pay the minimum in their first taxable year. They may still owe tax on income and must make estimated payments.",
            "Statement of Information: LLCs and corporations file one with the Secretary of State. An LLC's Statement of Information (LLC-12) is $20, due within 90 days of forming and every two years after. A stock corporation's (SI-550) is $25. Missing it can bring penalties.",
            "Hiring workers: register with the Employment Development Department (EDD) within 15 days after you pay more than $100 in wages in a quarter. Payroll rules are detailed, so many owners use a payroll service or a tax professional."
          ],
          words: [["Franchise Tax Board (FTB)", "California's state tax agency for income and franchise tax."], ["Annual tax", "the $800 yearly tax every California LLC pays."], ["Statement of Information", "a short form LLCs and corporations file with the Secretary of State to keep their details current."], ["EDD", "Employment Development Department: the state office for payroll taxes and employers."]],
          slides: [
            { title: "LLC: $800 every year", bullets: ["Due by the 15th day of the 4th month after forming", "Owed even with no sales, until you cancel", "Over $250,000 income: also an LLC fee"] },
            { title: "Corporation: $800 minimum", bullets: ["Minimum franchise tax: $800", "Not required in the first taxable year", "Estimated payments may still be due"] },
            { title: "Statement of Information", bullets: ["LLC (LLC-12): $20, within 90 days, then every 2 years", "Stock corporation (SI-550): $25", "Missing it can bring penalties"] },
            { title: "Hiring workers", bullets: ["Register with EDD within 15 days", "After paying over $100 in wages in a quarter", "Consider a payroll service or tax professional"] }
          ],
          sources: [FTB_LLC, FTB_CORP, SOS_LLC, SOS_CORP, EDD],
          tryIt: "Add the yearly rows to your plan that match your structure: the $800 tax and its due date, the Statement of Information and its fee, and EDD registration if you will hire. Open each official page and check the number before you write it.",
          youCanNow: "list the yearly state costs and deadlines for your structure and say which office collects each one."
        },
        {
          title: "Putting it together: your setup plan and budget",
          minutes: 5,
          goal: "Build a one-page setup plan with steps in order, offices, costs and due dates.",
          text: [
            "Now put it all on one page. Order matters: choose a structure, form the LLC or corporation (if any), get the EIN, file the FBN (if needed), get the seller's permit (if needed), then get city and county permits. Many permits ask for your EIN or your entity number, so do those first.",
            "Add up the costs you know, and mark the ones you still need to look up. Example for an LLC food truck: LLC-1 $70, Statement of Information $20, EIN free, seller's permit no fee (deposit possible), $800 annual tax, plus county health permit, city license and FBN fees that you look up locally.",
            "An AI assistant can help you format the table and make a checklist, but it can be wrong about fees and dates. Always use the official page for the number. Do not type your Social Security number, bank details or passwords into an AI tool. When you are done, show the plan to a free SBDC advisor or a tax professional."
          ],
          steps: ["List the steps in order.", "Add the office and official website for each.", "Add the cost from the official page, or \"look up at ...\".", "Add the due date for each yearly item.", "Total the known costs and show the plan to an advisor."],
          words: [["Startup costs", "the money you spend once to open the business."], ["Recurring costs", "costs you pay again every year, like the $800 tax."]],
          slides: [
            { title: "The order", bullets: ["1. Structure  2. Form LLC or corporation", "3. EIN  4. FBN if needed  5. Seller's permit", "6. City and county permits"] },
            { title: "Example: LLC food truck", bullets: ["LLC-1 $70; Statement of Information $20", "EIN free; seller's permit no fee", "$800 annual tax; local fees: look them up"] },
            { title: "Using AI safely here", bullets: ["AI can format your table and checklist", "Get every fee and date from the official page", "Never type your SSN, bank details or passwords"] }
          ],
          sources: [SOS_LLC, FTB_LLC, CDTFA, IRS_EIN, CALGOLD],
          tryIt: "Final task: finish your one-page plan with five columns: Step, Office (website), Cost, Due date, Done. Fill in every row from this course, total the known costs, and mark every local fee you still need to look up.",
          youCanNow: "build and use a complete setup plan for starting a business in California."
        }
      ],
      check: {
        title: "Knowledge Check 2: Local permits, yearly costs and your plan",
        questions: [
          { q: "What does CalGold do?", options: ["Lists permit information and agencies for your city and business type", "Issues your business license", "Collects the $800 tax", "Gives you an EIN"], answer: 0, why: "CalGold finds permit information; it does not issue permits." },
          { q: "Who sets the fee for a city business license?", options: ["The IRS", "The Secretary of State", "CDTFA", "Each city or county"], answer: 3, why: "Local license fees are set by each city or county." },
          { q: "An LLC did no business this year. Does it owe the $800 annual tax?", options: ["No, only if it made money", "Yes, until the LLC is cancelled", "Only in the first year", "Only if it has workers"], answer: 1, why: "FTB says the annual tax is due even if the LLC is not doing business, until it is cancelled." },
          { q: "When is an LLC's first Statement of Information due?", options: ["Within 90 days of forming", "Every month", "Only when it closes", "Within 10 years"], answer: 0, why: "The Secretary of State says it is due within 90 days of registering and every two years after." },
          { q: "You will hire your first worker. Which office do you register with?", options: ["CalGold", "The county clerk", "EDD", "The DMV"], answer: 2, why: "Employers register with the EDD within 15 days after paying over $100 in wages in a quarter." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Setting Up a Small Business in California, Including Costs",
    questions: [
      { q: "Which structure needs no formation filing with the California Secretary of State?", options: ["LLC", "Sole proprietorship", "Corporation", "Nonprofit corporation"], answer: 1, why: "Sole proprietors do not file formation papers with the Secretary of State." },
      { q: "What is a main reason owners form an LLC?", options: ["It is always free", "It replaces all permits", "It removes all taxes", "It can help keep personal things separate from business debts"], answer: 3, why: "An LLC is a separate legal body that can help protect the owner." },
      { q: "The Secretary of State fee for general stock corporation Articles of Incorporation (ARTS-GS) is:", options: ["$20", "$70", "$100", "$800"], answer: 2, why: "The Secretary of State lists ARTS-GS at $100." },
      { q: "Where do you file LLC formation papers online?", options: ["irs.gov", "bizfileonline.sos.ca.gov", "calgold.ca.gov", "edd.ca.gov"], answer: 1, why: "bizfile Online is the Secretary of State's filing site." },
      { q: "What is a DBA?", options: ["A tax form", "A type of permit for food", "The name a business uses with the public, if not the owner's legal name", "A bank account"], answer: 2, why: "DBA means \"doing business as\"; it is filed as a Fictitious Business Name." },
      { q: "After filing an FBN, most California counties also require you to:", options: ["Publish it in a local newspaper for four weeks", "Pay the IRS", "Get a seller's permit", "Form an LLC"], answer: 0, why: "Counties require the FBN to be published once a week for four weeks." },
      { q: "Where should you look up your county's FBN fee?", options: ["An AI assistant", "The IRS", "Your county clerk's website", "A social media post"], answer: 2, why: "Each county sets its own FBN fee." },
      { q: "How much does the IRS charge for an EIN?", options: ["Nothing", "$70", "$50", "$800"], answer: 0, why: "The IRS says you never have to pay a fee for an EIN." },
      { q: "Which agency issues California seller's permits?", options: ["FTB", "CDTFA", "EDD", "The county clerk"], answer: 1, why: "The California Department of Tax and Fee Administration issues seller's permits." },
      { q: "What might CDTFA ask for when you get a seller's permit, even though there is no fee?", options: ["A corporation filing", "Your bank password", "A newspaper notice", "A security deposit"], answer: 3, why: "CDTFA says it may require a security deposit." },
      { q: "A seasonal pumpkin stand sells in one place for six weeks. What should the owner ask CDTFA about?", options: ["A temporary seller's permit", "An EIN", "An FBN", "A Statement of Information"], answer: 0, why: "Sales in one place for 90 days or less may need a temporary seller's permit." },
      { q: "A food truck usually needs a health permit from:", options: ["The IRS", "EDD", "The Secretary of State", "The county environmental health department"], answer: 3, why: "Food businesses get health permits from county environmental health." },
      { q: "CalGold says it does not issue permits. So after using it you should:", options: ["Ignore the list", "Pay CalGold", "Contact each listed agency to confirm the fee and apply", "Ask an AI to apply for you"], answer: 2, why: "CalGold lists the agencies; you apply with each one." },
      { q: "A home-based tutoring business probably still needs:", options: ["A seller's permit", "A city business license or tax certificate", "A health permit", "A liquor license"], answer: 1, why: "Most cities require a business license, even for home businesses." },
      { q: "How much is the yearly California LLC annual tax?", options: ["$20", "$70", "$250", "$800"], answer: 3, why: "FTB says every LLC must pay an $800 annual tax." },
      { q: "When is an LLC's first $800 annual tax due?", options: ["Only when it earns $250,000", "Never in the first year", "By the 15th day of the 4th month after filing with the Secretary of State", "On December 31"], answer: 2, why: "FTB gives the 15th day of the 4th month after filing." },
      { q: "A new corporation in its first taxable year:", options: ["Is not required to pay the $800 minimum franchise tax", "Pays $1,600", "Pays no taxes ever", "Must pay the LLC fee"], answer: 0, why: "FTB says newly formed corporations are not required to pay the minimum in their first taxable year." },
      { q: "How often does an LLC file a Statement of Information after the first one?", options: ["Every month", "Every two years", "Every ten years", "Never"], answer: 1, why: "The Secretary of State says every two years after the first." },
      { q: "In which order should you usually do these?", options: ["City license, then form the LLC, then choose a structure", "Choose a structure, form it, get the EIN, then local permits", "Seller's permit, then EIN, then structure", "Any order is fine"], answer: 1, why: "Many permits ask for your EIN and entity number, so form and get the EIN first." },
      { q: "An AI assistant tells you the FBN fee in your county. What do you do?", options: ["Check it on your county clerk's official page first", "Put it in the plan without checking", "Pay the AI tool", "Type your SSN to get a better answer"], answer: 0, why: "AI can be wrong; fees come from the official page." }
    ]
  }
};
