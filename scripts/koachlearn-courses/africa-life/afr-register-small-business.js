"use strict";

// Koach Learn course: Africa: Life and Work -> "Registering and Running a Small Business in Africa" (owner, 30 October 2026: "are there any more courses africans can use to support there lives").
// Written in the ADDIE format (model: re-entry/reentry-ai-digital-confidence.js). For traders, artisans and people with a side business who want to make it official and keep it in order:
// choosing a business form, finding the official registry (Kenya BRS on eCitizen, Nigeria CAC, Ghana ORC, Senegal APIX, Côte d'Ivoire CEPICI, Morocco auto-entrepreneur), a registration checklist,
// the tax number and local permits, simple records, and a yearly compliance calendar. Fees, forms and deadlines change and differ by country: the course never gives a fee or a deadline; it names
// the office and tells students to check its official site. Farmer groups and cooperatives are covered in agri-cooperatives-markets.js and are not repeated here.

const BRS = { name: "Business Registration Service, Kenya: register your business online through eCitizen", url: "https://brs.go.ke/" };
const CAC = { name: "Corporate Affairs Commission, Nigeria: company, business name and incorporated trustees registration (portal icrp.cac.gov.ng)", url: "https://www.cac.gov.ng/" };
const ORC = { name: "Office of the Registrar of Companies, Ghana: business names, companies, renewals (including by *222#) and annual returns", url: "https://orc.gov.gh/" };
const APIX = { name: "APIX, Senegal: investment promotion agency and business creation one-stop shop", url: "https://www.apix.sn/" };
const CEPICI = { name: "CEPICI, Côte d'Ivoire: investment promotion centre and business creation one-stop shop", url: "https://cepici.ci/" };
const OHADA = { name: "OHADA: Organisation for the Harmonisation of Business Law in Africa (17 member countries)", url: "https://www.ohada.org/en/" };
const MA_AE = { name: "Morocco: auto-entrepreneur status portal", url: "https://www.ae.gov.ma/" };
const KRA = { name: "Kenya Revenue Authority: about the KRA PIN (get it on iTax)", url: "https://www.kra.go.ke/individual/individual-pin-registration/learn-about-pin/about-pin" };
const NRS = { name: "Nigeria Revenue Service (NRS): the federal tax authority of Nigeria", url: "https://www.nrs.gov.ng/" };
const GRA = { name: "Ghana Revenue Authority: registering with a TIN or Ghana Card PIN; Modified Taxation Scheme for small businesses", url: "https://gra.gov.gh/" };
const SMEDAN = { name: "SMEDAN, Nigeria: support for nano, micro, small and medium enterprises (free registration, SME Digital Academy)", url: "https://smedan.gov.ng/" };

module.exports = {
  id: "afr-register-small-business",
  category: "Africa: Life and Work",
  name: "Registering and Running a Small Business in Africa",
  skills: "Choosing a business form, Finding the official registry, Preparing a registration checklist, Getting a tax number and local permits, Keeping a simple cash book, Planning renewals and returns",
  outcome: "make your small business official and keep it in order: choose the right business form, find your country's official registry, prepare everything you need to register, find out which tax number and permits apply, keep a simple cash book, and plan your yearly renewals and returns.",
  about: [
    "Many small businesses in Africa run without being registered. That can work for a while, but registration can open doors: bank accounts in the business name, contracts with companies and government, marketplace accounts, loans and some support programmes. This course is for traders, artisans, salon owners, caterers, tailors and anyone with a side business in Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire, Cameroon, Morocco and across Africa.",
    "You will choose a business form that fits you, find your country's official registry and avoid fake agents, prepare a registration checklist, find out which tax number and local permits apply, set up a simple cash book, and make a calendar of yearly renewals and returns.",
    "Each lesson takes about five minutes and ends with a \"Try it now\" task for your own business. Rules, forms and fees change and differ by country, so the course names the offices and shows you how to check them. It does not give fees or legal advice; for a big decision, ask the registry, a business support centre or a qualified accountant or lawyer."
  ],
  finalTask: "Make a registration checklist for your own business: the business form you chose and why, the official registry and its website, three name choices, the documents and details you need, the tax number and local permits that apply (with where you checked), how you will keep your cash book, and a yearly calendar of renewals and returns.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Owners of small and informal businesses across Africa: market traders, artisans, tailors, hairdressers, caterers, mechanics, online sellers and young people starting out, in Kenya, Nigeria, Ghana, francophone West and Central Africa and North Africa.",
    startingPoint: "Run a business day to day and handle cash and mobile money. Most have not registered, do not know which office to use, mix business and household money, and keep few written records. Some have paid fake agents or heard confusing advice.",
    gap: "Without registration and simple records, many small businesses cannot open a business bank account, win contracts, sell on some marketplaces or apply for support. Others register once and then fall behind on renewals or returns and pay penalties. Learners need to choose a form, register through the official channel, know which tax number and permits apply, and keep their records and dates in order.",
    constraints: [
      "Reading level: plain words and short sentences; many learners speak English as a second language (the course is also offered in French and Arabic)",
      "Devices: a basic phone, sometimes a cyber café computer; costly data",
      "Rules: business forms, fees, tax and permits differ by country and change; the course never gives fees or deadlines and always points to the official office",
      "Safety: fake registration agents and websites exist; learners use only official sites and never share passwords or PINs",
      "Not legal or tax advice: learners check with the registry, the tax authority or a qualified professional for their case"
    ],
    prerequisites: "Running or planning a small business. Basic adding and subtracting."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Given the size, owners and risks of your business", action: "choose a business form, such as a sole proprietor business name or a limited company, and write why it fits", standard: "naming one benefit and one duty of the form you chose" },
    { id: "O2", condition: "Given the country where you trade", action: "identify the official business registry and open its official website or office", standard: "without using an unofficial agent or a look-alike website" },
    { id: "O3", condition: "Before you start a registration", action: "prepare a registration checklist with three name choices, owner details, business activity, address and documents", standard: "so the application can be filled in at one sitting" },
    { id: "O4", condition: "For your business and town", action: "list the tax number, local trade permit and any sector permit that apply, and where to get each", standard: "with the official office checked for each one" },
    { id: "O5", condition: "Over one week of trading", action: "record every sale and every cost in a simple cash book, kept apart from household money", standard: "with the week's money in and money out adding up" },
    { id: "O6", condition: "Once your business is registered", action: "draw up a yearly calendar of renewals, returns and permit dates", standard: "with each date checked on the official site and a reminder set before it" }
  ],
  chapters: [
    {
      name: "Chapter 1: Choosing and registering",
      lessons: [
        {
          title: "Why register, and which business form fits you",
          objectives: ["O1"],
          minutes: 5,
          goal: "Choose a business form that fits your business and write down why.",
          text: [
            "Registering tells the government that your business exists and gives it an official name. Benefits can include a business bank account, contracts with companies and government, selling on some marketplaces, trust from customers, and applying for loans and support programmes. Duties can include keeping records, renewing, filing returns and paying tax.",
            "The common forms: a sole proprietorship (one owner, often registered as a business name); a partnership (two or more owners sharing profit and debt); and a limited company (a separate legal person, so the owners' homes and savings are better protected from business debts, but with more paperwork). Names differ by country: Nigeria and Ghana register business names and companies; in Kenya the Business Registration Service handles business names and companies.",
            "In the 17 OHADA countries, including Senegal, Côte d'Ivoire, Cameroon, Mali, Burkina Faso and DR Congo, business law is shared. A small trader can register as an individual business (entreprise individuelle) or create a company such as a SARL. In Morocco, many small sellers use the auto-entrepreneur status.",
            "Most market traders and artisans start as a sole proprietor or business name. A company may fit when you have partners, bigger contracts or bigger risks. For a big decision, ask the registry or a qualified accountant or lawyer."
          ],
          steps: ["Write who owns the business: you alone, or with others.", "Write the biggest risk: debts, injuries, big contracts.", "Compare a business name (sole proprietor), a partnership and a company.", "Choose one and write one benefit and one duty."],
          words: [["Sole proprietor", "a business owned and run by one person, who is personally responsible for its debts."], ["Limited company", "a business that is its own legal person, so the owners' personal property is better protected from its debts."], ["OHADA", "an organisation of 17 African countries that share the same business laws, mostly in West and Central Africa."]],
          slides: [
            { title: "Why register?", bullets: ["Business bank account and contracts", "Marketplaces, loans and support programmes", "Trust from customers", "Duties: records, renewals, returns, tax"] },
            { title: "Three common forms", bullets: ["Sole proprietor / business name: one owner", "Partnership: two or more owners", "Limited company: separate legal person, more paperwork"] },
            { title: "Francophone and North Africa", bullets: ["17 OHADA countries share business law", "Entreprise individuelle or a company such as a SARL", "Morocco: auto-entrepreneur status"] },
            { title: "Choosing", bullets: ["Most small traders start with a business name", "Company: partners, big contracts, big risks", "Big decision? Ask the registry or a professional"] }
          ],
          tryIt: "Write your business's owners and its biggest risk. Then choose a business form and write one benefit and one duty of that form.",
          youCanNow: "compare the common business forms and choose the one that fits your business.",
          quickCheck: [
            { objective: "O1", q: "Fatima sells fabric alone in a market in Kano. Which form do most traders like her start with?", options: ["A large public company", "A business name as a sole proprietor", "A government agency", "A charity"], answer: 1, why: "One owner with a small business usually starts with a business name." },
            { objective: "O1", q: "What is one main reason to choose a limited company?", options: ["It has no paperwork", "It never pays tax", "It better protects the owners' personal property from business debts", "It cannot open a bank account"], answer: 2, why: "A company is a separate legal person, which limits the owners' personal risk." }
          ],
          sources: [OHADA, MA_AE]
        },
        {
          title: "Finding the official registry, and avoiding fake agents",
          objectives: ["O2"],
          minutes: 5,
          goal: "Find your country's official business registry and open its official website.",
          text: [
            "Each country has an official office that registers businesses. Kenya: the Business Registration Service (BRS), online through eCitizen. Nigeria: the Corporate Affairs Commission (CAC). Ghana: the Office of the Registrar of Companies (ORC). Senegal: APIX, the business creation one-stop shop. Côte d'Ivoire: CEPICI. In Morocco, the auto-entrepreneur status has its own national portal.",
            "Use only the official website or office. Official government sites often end in the country's government ending, such as .go.ke, .gov.ng or .gov.gh. Look-alike websites and people offering \"fast\" or \"free\" registration exist; the Kenyan BRS site itself warns about fake \"free\" registration offers.",
            "You may pay an accredited agent or lawyer to help, but check that they are real, ask for an official receipt, and make sure the business is registered in your name. Never give anyone your eCitizen, CAC or other account password, or a one-time code sent to your phone.",
            "If a website does not open, try again later or visit the registry's office or a government service centre. Do not pay a stranger instead."
          ],
          steps: ["Write your country's registry from the list in this lesson.", "Type its address yourself; do not click links from unknown messages.", "Check the address ending, such as .go.ke, .gov.ng or .gov.gh.", "If you use an agent, check they are real and get an official receipt.", "Never share your password or one-time code."],
          words: [["Registry", "the government office that records businesses and companies."], ["Look-alike website", "a fake site made to look like an official one, often to take your money."], ["One-time code", "a short code sent to your phone to confirm it is you; never share it."]],
          slides: [
            { title: "Official registries", bullets: ["Kenya: BRS through eCitizen", "Nigeria: Corporate Affairs Commission (CAC)", "Ghana: Registrar of Companies (ORC)", "Senegal: APIX; Côte d'Ivoire: CEPICI"] },
            { title: "Use only the official site", bullets: ["Type the address yourself", "Check endings such as .go.ke, .gov.ng, .gov.gh", "Beware \"fast\" or \"free\" registration offers"] },
            { title: "If you use an agent", bullets: ["Check they are real", "Get an official receipt", "The business must be in YOUR name"] },
            { title: "Never share", bullets: ["Your account password", "A one-time code sent to your phone"] }
          ],
          tryIt: "Find your country's business registry. Type its website address yourself, check the ending, and write down the address and one service it lists.",
          youCanNow: "find your country's official business registry and tell a real site from a fake one.",
          quickCheck: [
            { objective: "O2", q: "Where do you register a business name in Nigeria?", options: ["The Corporate Affairs Commission (CAC)", "A WhatsApp group", "Any bank", "The police station"], answer: 0, why: "The CAC registers business names, companies and incorporated trustees in Nigeria." },
            { objective: "O2", q: "A message offers \"free 1-hour business registration\" through a link. What do you do?", options: ["Click and pay quickly", "Send your password", "Forward it to friends", "Ignore the link and type the official registry address yourself"], answer: 3, why: "Fake offers use links; the official site you type yourself is safe." }
          ],
          sources: [BRS, CAC, ORC, APIX, CEPICI, MA_AE]
        },
        {
          title: "Preparing your registration checklist",
          objectives: ["O3"],
          minutes: 5,
          goal: "Prepare a registration checklist so you can apply in one sitting.",
          text: [
            "Online forms can time out, and data costs money. Prepare everything first, then apply in one sitting.",
            "Most registries ask for similar things: three possible business names (in case your first choice is taken; Kenya's BRS asks for three choices), the owners' full names and national ID or passport details, phone and email, the business address or location, a short description of the business activity, and sometimes a passport photo or a signature. A company also needs directors, shareholders and its rules. The exact list is on the registry's site.",
            "Choose names that are clear and not already used by someone else, and that do not copy a famous brand. Example: Kofi in Takoradi lists \"Kofi Fresh Fish Supplies\", \"Takoradi Fresh Catch\" and \"Sea Gold Fish Supplies\".",
            "Write down the fee shown on the official site at the time you apply, and how to pay. Keep every receipt and the registration certificate, in paper and as a photo in a safe place."
          ],
          steps: ["Write three name choices.", "List owners' names, ID details, phone and email.", "Write the address or location and the business activity.", "Read the registry's own list for extra documents.", "Write the current fee and payment method from the official site.", "Apply in one sitting and keep every receipt and the certificate."],
          words: [["Name search / reservation", "checking that a business name is free and holding it for you while you register."], ["Certificate of registration", "the official paper that shows your business is registered."], ["Director", "a person who runs a company and has legal duties to it."]],
          slides: [
            { title: "Prepare first, apply once", bullets: ["Forms can time out", "Data costs money", "Have everything ready"] },
            { title: "Usually asked for", bullets: ["Three name choices", "Owners' names, ID, phone and email", "Address and business activity", "Company: directors and shareholders"] },
            { title: "Good names", bullets: ["Clear and not already used", "Do not copy a famous brand", "Check the registry's own list"] },
            { title: "After you apply", bullets: ["Note the fee from the official site", "Keep every receipt", "Keep the certificate, paper and photo"] }
          ],
          tryIt: "Write your registration checklist: three name choices, owner details (without writing your ID number in any shared place), address, business activity, documents, and the registry's website.",
          youCanNow: "prepare a registration checklist so you can apply in one sitting.",
          quickCheck: [
            { objective: "O3", q: "Why prepare three business name choices?", options: ["The law needs three businesses", "In case your first choice is already taken", "To confuse fake agents", "To pay less tax"], answer: 1, why: "If your first name is taken, the next choice saves a second application." },
            { objective: "O3", q: "Where do you find the exact documents your registry needs?", options: ["A neighbour's memory", "A social media comment", "The registry's official website or office", "An advert from an unknown agent"], answer: 2, why: "Requirements change, and only the registry is sure." }
          ],
          sources: [BRS, ORC]
        }
      ],
      check: {
        title: "Knowledge Check 1: Choosing and registering",
        questions: [
          { objective: "O1", q: "Two friends open a catering business together and share the profit. Which form is this most like?", options: ["Sole proprietor", "Government agency", "A partnership or a company", "A charity"], answer: 2, why: "Two or more owners sharing profit is a partnership, or they can form a company." },
          { objective: "O1", q: "In Senegal and Côte d'Ivoire, business law comes from:", options: ["Each town's own rules only", "OHADA, shared by 17 countries", "The marketplace you sell on", "Your bank"], answer: 1, why: "OHADA's uniform business laws apply in its member countries." },
          { objective: "O2", q: "Which website address ending is a sign of a Kenyan government site?", options: [".go.ke", ".win", ".shop", ".xyz"], answer: 0, why: "Kenyan government sites usually end in .go.ke." },
          { objective: "O2", q: "An agent offers to register your business. What must you check?", options: ["That they have a nice office", "That they are fast", "That they accept cash only", "That they are real, give an official receipt and register it in your name"], answer: 3, why: "A real agent, an official receipt and your own name on the business protect you." },
          { objective: "O3", q: "What should you keep after registering?", options: ["Nothing", "Only a text message", "The registration certificate and every receipt, on paper and as a photo", "The agent's word"], answer: 2, why: "You will need the certificate and receipts for banks, renewals and contracts." }
        ]
      }
    },
    {
      name: "Chapter 2: Running it properly",
      lessons: [
        {
          title: "Tax number and local permits",
          objectives: ["O4"],
          minutes: 6,
          goal: "List the tax number and permits your business needs and where to get each.",
          text: [
            "Registering the name is often only the first step. Most businesses also need a tax identification number, a local trading permit, and, for some kinds of work, a sector permit.",
            "Tax number: in Kenya, the KRA PIN from the Kenya Revenue Authority, which you get on iTax; it is needed for business registration and many other dealings. In Nigeria, the federal tax authority is the Nigeria Revenue Service (NRS), and each state has its own internal revenue service. In Ghana, the Ghana Revenue Authority uses your TIN or Ghana Card PIN, and lists a Modified Taxation Scheme for small businesses. Ask the tax office which small-business tax applies to you.",
            "Local permit: many towns and counties need a trading or business permit, renewed regularly. In Kenya this is from your county government; in Nigeria from the state or local government; in Ghana from the district or municipal assembly. Sector permits: food sellers, salons, clinics, transport and others may need a health certificate or a licence from a sector body.",
            "Ask at the local government office or a business support centre such as SMEDAN in Nigeria. Write each requirement, the office and the date you checked. Your national ID or tax number is private: do not post it or send it to strangers."
          ],
          steps: ["Find your tax authority and ask how a small business gets a tax number.", "Ask your county, state, local government or assembly about a trading permit.", "Ask whether your kind of work needs a health certificate or sector licence.", "Write each one, the office, and the date you checked."],
          words: [["Tax identification number (TIN)", "the number the tax office gives you to file and pay tax; in Kenya it is the KRA PIN."], ["Trading permit", "permission from your local government to run a business in that area."], ["Sector permit", "a licence for certain kinds of work, such as food, health or transport."]],
          slides: [
            { title: "After the name: three more checks", bullets: ["Tax number", "Local trading permit", "Sector permit for some kinds of work"] },
            { title: "Tax numbers", bullets: ["Kenya: KRA PIN on iTax", "Nigeria: Nigeria Revenue Service and state revenue service", "Ghana: GRA, TIN or Ghana Card PIN"] },
            { title: "Local and sector permits", bullets: ["County, state, local government or assembly", "Food, salons, transport may need more", "Ask a business support centre"] },
            { title: "Write it down", bullets: ["Each requirement and office", "The date you checked", "Keep ID and tax numbers private"] }
          ],
          tryIt: "Make a three-row table: tax number, local permit, sector permit. For each, write the office, its website or address, and whether it applies to you. Check at least one with the office this week.",
          youCanNow: "list the tax number and permits your business needs and the office for each.",
          quickCheck: [
            { objective: "O4", q: "In Kenya, how do you get a KRA PIN?", options: ["From a market committee", "On iTax, from the Kenya Revenue Authority", "From your bank manager", "From a WhatsApp agent"], answer: 1, why: "The KRA issues the PIN through its iTax system." },
            { objective: "O4", q: "Grace opens a food stall in Accra. Besides registration, what should she ask about?", options: ["Nothing else", "A driving licence", "A trading permit and any food or health certificate", "A passport"], answer: 2, why: "Local permits and food safety requirements often apply to food sellers." }
          ],
          sources: [KRA, NRS, GRA, SMEDAN]
        },
        {
          title: "A simple cash book: keeping business money apart",
          objectives: ["O5"],
          minutes: 5,
          goal: "Record every sale and every cost in a simple cash book for one week.",
          text: [
            "Records show whether you are really making money. They also help with tax, loans and renewals. Start simple: a notebook or a phone notes page.",
            "A cash book has four columns: date, what happened, money in, money out. Write every sale and every cost the same day, including mobile money. At the end of the day or week, add money in, add money out, and take one from the other. Example from Douala: on Monday, Paul sells 12 phone covers for 24,000 XAF and buys stock for 15,000 XAF; money in minus money out is 9,000 XAF (example figures).",
            "Keep business money apart from household money. If you take money for food or school fees, write it as \"owner took\" so you can see it. A separate mobile money line or account for the business makes this easier. Keep receipts in an envelope or take photos of them."
          ],
          steps: ["Draw four columns: date, what happened, money in, money out.", "Write every sale and cost the same day.", "Write money you take for the home as \"owner took\".", "At the end of the week, add each column and find the difference.", "Keep receipts in an envelope or as photos."],
          words: [["Cash book", "a simple record of money coming into and going out of the business."], ["Owner took (drawings)", "money the owner takes out of the business for personal use."]],
          slides: [
            { title: "Why keep records", bullets: ["See if you really make money", "Needed for tax, loans and renewals"] },
            { title: "Four columns", bullets: ["Date", "What happened", "Money in", "Money out"] },
            { title: "Keep business money apart", bullets: ["Write home spending as \"owner took\"", "A separate mobile money line helps", "Keep receipts or photos of them"] }
          ],
          tryIt: "Start a cash book today. Write every sale and every cost for one week, including money you take for the home. On the last day, add each column and write the difference.",
          youCanNow: "keep a simple cash book and keep business money apart from household money.",
          quickCheck: [
            { objective: "O5", q: "What are the four columns of a simple cash book?", options: ["Date, what happened, money in, money out", "Name, age, town, phone", "Price, colour, size, brand", "Monday to Thursday"], answer: 0, why: "These four columns show every movement of money." },
            { objective: "O5", q: "You take 2,000 NGN from the business for food at home. What do you write?", options: ["Nothing", "A sale", "A new customer", "\"Owner took 2,000 NGN\" in money out"], answer: 3, why: "Writing what the owner takes keeps the records true." }
          ]
        },
        {
          title: "Staying registered: renewals, returns and a yearly calendar",
          objectives: ["O6"],
          minutes: 5,
          goal: "Draw up a yearly calendar of renewals, returns and permit dates.",
          text: [
            "Registering once is not the end. Many businesses must renew, file annual returns or tax returns, and renew local permits. Missing a date can mean penalties or losing the registration.",
            "Examples: Ghana's ORC says annual returns are required for all incorporated companies, and business names can be renewed online, including by dialling *222#. Nigeria's CAC oversees annual returns. Kenya's KRA expects returns from people with tax obligations. Local permits often run for a year. The exact dates and fees differ, so check each one on the official site or at the office.",
            "Make a yearly calendar: write each duty, the office, the month it is due and the date you checked. Set a reminder on your phone one month before. Keep your cash book up to date, because returns use those numbers.",
            "If you are unsure what applies to you, ask the registry, the tax office, a business support centre or a qualified accountant. If someone calls saying your registration will be cancelled today unless you pay them now, check with the registry yourself first."
          ],
          steps: ["List every duty: renewal, annual return, tax return, permit renewal.", "Check each date and office on the official site.", "Write them in a 12-month calendar.", "Set a phone reminder one month before each date.", "Check rushed payment demands with the registry yourself."],
          words: [["Annual return", "a yearly report to the registry that your business still exists and its details are correct."], ["Renewal", "paying or filing again so a registration or permit stays valid."], ["Penalty", "a fine for being late or breaking a rule."]],
          slides: [
            { title: "Registration is not the end", bullets: ["Renewals and annual returns", "Tax returns", "Local permit renewals"] },
            { title: "Examples", bullets: ["Ghana ORC: annual returns for companies; renew names by *222#", "Nigeria CAC: annual returns", "Kenya KRA: returns if you have tax obligations"] },
            { title: "Your yearly calendar", bullets: ["Duty, office, month due", "Date you checked it", "Phone reminder one month before"] },
            { title: "Stay safe", bullets: ["Unsure? Ask the office or an accountant", "Rushed \"pay now\" calls: check with the registry yourself"] }
          ],
          tryIt: "Final task: put together your registration checklist with your business form, registry, name choices, documents, tax number and permits, cash book plan and a 12-month calendar of renewals and returns with reminders set.",
          youCanNow: "plan your yearly renewals and returns so your business stays registered and in good standing.",
          quickCheck: [
            { objective: "O6", q: "When should you set a reminder for a renewal?", options: ["After the date has passed", "Never", "About one month before it is due", "Only if someone calls you"], answer: 2, why: "A reminder a month before gives you time to prepare and pay." },
            { objective: "O6", q: "A caller says your business will be cancelled today unless you pay him now. What do you do?", options: ["Check with the registry yourself before paying anyone", "Pay him quickly", "Send your password", "Close the business"], answer: 0, why: "Rushed payment demands are a scam sign; the registry itself can tell you your status." }
          ],
          sources: [ORC, CAC, KRA]
        }
      ],
      check: {
        title: "Knowledge Check 2: Running it properly",
        questions: [
          { objective: "O4", q: "Besides registering the name, many businesses also need:", options: ["A tax number and a local trading permit", "Nothing at all", "A new phone", "A marketplace account"], answer: 0, why: "Tax numbers and local permits are separate from the name registration." },
          { objective: "O4", q: "Where do you ask about a trading permit in Kenya?", options: ["A mobile money agent", "Your county government", "A school", "A radio station"], answer: 1, why: "Kenyan counties issue business permits for their area." },
          { objective: "O5", q: "Why keep business and household money apart?", options: ["It is more fun", "So the bank pays you", "So you can see whether the business really makes money", "So you pay no tax"], answer: 2, why: "Mixing money hides whether the business is earning." },
          { objective: "O5", q: "Your week shows money in 40,000 KES and money out 31,000 KES. The difference is:", options: ["71,000 KES", "31,000 KES", "40,000 KES", "9,000 KES"], answer: 3, why: "40,000 minus 31,000 is 9,000." },
          { objective: "O6", q: "What is an annual return?", options: ["A yearly report to the registry that the business and its details are current", "A refund from customers", "A holiday", "A bank loan"], answer: 0, why: "Annual returns keep the registry's record of your business up to date." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Registering and Running a Small Business in Africa",
    questions: [
      { objective: "O1", q: "Which is a benefit of registering a business?", options: ["Never paying tax", "Opening a business bank account and winning contracts", "No records needed", "No duties at all"], answer: 1, why: "Registration opens bank accounts, contracts and programmes, with duties too." },
      { objective: "O1", q: "A sole proprietor is:", options: ["A business owned by one person", "A government office", "A company with many shareholders", "A savings group"], answer: 0, why: "One owner, personally responsible for the business." },
      { objective: "O1", q: "Many small sellers in Morocco use:", options: ["A public company", "The OHADA SARL only", "The auto-entrepreneur status", "No registration ever"], answer: 2, why: "Morocco has an auto-entrepreneur status for small activities." },
      { objective: "O1", q: "Who should you ask before a big decision about your business form?", options: ["A stranger online", "Nobody", "A seller at the market", "The registry or a qualified accountant or lawyer"], answer: 3, why: "The registry or a professional can advise on your own case." },
      { objective: "O2", q: "In Ghana, business names are registered by:", options: ["The Office of the Registrar of Companies (ORC)", "The Ghana Revenue Authority only", "A mobile money agent", "A church"], answer: 0, why: "The ORC registers business names and companies in Ghana." },
      { objective: "O2", q: "In Kenya, you register a business online through:", options: ["A Facebook page", "eCitizen, with the Business Registration Service", "A private WhatsApp group", "Your bank app"], answer: 1, why: "BRS registration is done online through eCitizen." },
      { objective: "O2", q: "Which is the safest way to reach the registry website?", options: ["Click a link in an unknown text", "Use a pop-up advert", "Type the official address yourself and check the ending", "Ask a stranger to do it with your password"], answer: 2, why: "Typing the address yourself avoids look-alike sites." },
      { objective: "O3", q: "Before you start an online registration, you should:", options: ["Prepare all names, details and documents first", "Start and hope for the best", "Share your password with an agent", "Pay a stranger"], answer: 0, why: "Being ready lets you finish in one sitting and saves data." },
      { objective: "O3", q: "A good business name is:", options: ["A copy of a famous brand", "Clear and not already used by another business", "Very long and hard to spell", "The same as your neighbour's"], answer: 1, why: "A clear, unused name is more likely to be accepted." },
      { objective: "O3", q: "Where do you find the current registration fee?", options: ["An old poster", "A rumour", "Your best guess", "The registry's official site or office"], answer: 3, why: "Fees change, so the official source is the only sure one." },
      { objective: "O4", q: "The KRA PIN is:", options: ["A mobile money PIN", "A password to share", "Kenya's tax identification number", "A business permit"], answer: 2, why: "The KRA PIN is your tax number with the Kenya Revenue Authority." },
      { objective: "O4", q: "Nigeria's federal tax authority is:", options: ["The Nigeria Revenue Service (NRS)", "The Corporate Affairs Commission", "SMEDAN", "Your local market union"], answer: 0, why: "The NRS is Nigeria's federal tax authority; states have their own revenue services." },
      { objective: "O4", q: "A salon or food stall may also need:", options: ["A pilot's licence", "Nothing more", "A university degree", "A health certificate or sector licence"], answer: 3, why: "Some kinds of work need sector permits for health and safety." },
      { objective: "O5", q: "A cash book records:", options: ["Customers' birthdays", "Money in and money out, with dates", "Only big sales", "Only bank loans"], answer: 1, why: "It records every movement of money, with the date and what happened." },
      { objective: "O5", q: "When should you write a sale in the cash book?", options: ["Once a year", "Only when you remember", "The same day", "Never for mobile money"], answer: 2, why: "Writing the same day keeps the record complete and true." },
      { objective: "O5", q: "Money you take from the business for school fees is written as:", options: ["\"Owner took\" in money out", "A sale", "Nothing", "A gift from a customer"], answer: 0, why: "Recording what the owner takes keeps business and home money clear." },
      { objective: "O6", q: "Ghana's ORC lets business names be renewed:", options: ["Only in person abroad", "Never", "Online, including by dialling *222#", "Through a WhatsApp agent"], answer: 2, why: "The ORC says renewals can be done online and by *222#." },
      { objective: "O6", q: "A yearly compliance calendar lists:", options: ["Holidays only", "Customers' addresses", "Football matches", "Each renewal, return and permit, its office and month due"], answer: 3, why: "One calendar keeps every duty and date in view." },
      { objective: "O6", q: "Missing a renewal or annual return can lead to:", options: ["A free gift", "Penalties or losing the registration", "Lower prices", "Nothing ever"], answer: 1, why: "Late filings can bring fines or removal from the register." },
      { objective: "O6", q: "Before each due date you should:", options: ["Check the date on the official site and set a reminder", "Wait for a caller to remind you", "Pay anyone who asks", "Ignore it"], answer: 0, why: "Checking officially and setting a reminder keeps you on time and safe from scams." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 1, 5, 7, 10, 12, 13, 17, 18] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Business form", objective: "O1", notYet: "No form chosen, or no reason given.", meets: "A form chosen with one benefit and one duty, fitting the owners and risks.", exceeds: "Compares two forms and says when the business might change form." },
      { name: "Official registry", objective: "O2", notYet: "No registry named, or an unofficial site or agent.", meets: "The correct official registry and its official website or office address.", exceeds: "Also notes how to spot a fake site or agent." },
      { name: "Registration checklist", objective: "O3", notYet: "Missing name choices, owner details or activity.", meets: "Three names, owner details, address, activity, documents and the fee from the official site.", exceeds: "Also names the documents a company would need, or where to keep the certificate safely." },
      { name: "Tax number and permits", objective: "O4", notYet: "No tax number or permit listed, or no office named.", meets: "Tax number, local permit and any sector permit, each with its office and date checked.", exceeds: "At least one was confirmed with the office in person or by phone." },
      { name: "Cash book", objective: "O5", notYet: "No cash book, or business and home money mixed.", meets: "One week of records with four columns, \"owner took\" entries and correct weekly totals.", exceeds: "A separate business money line or account and receipts kept." },
      { name: "Yearly calendar", objective: "O6", notYet: "No calendar, or dates guessed.", meets: "A 12-month calendar of renewals, returns and permits with offices, dates checked and reminders set.", exceeds: "Notes who to ask (registry, tax office or accountant) for each duty." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who register their business or a permit within 60 days (follow-up survey)",
      "Learners who keep a cash book for at least four weeks after the course",
      "Learners who open a business bank or mobile money account, win a contract or join a support programme within six months"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or a cyber café computer with internet",
      "A notebook for the checklist, cash book and calendar",
      "The official website addresses of your registry, tax authority and local government",
      "About 60 minutes in total, in short sessions, plus one week of cash book practice"
    ],
    facilitatorNotes: [
      "Before the course, look up the registry, tax authority and local permit office for your country and town on their official sites, and print the addresses.",
      "Never collect learners' ID numbers, passwords or tax numbers; checklists list what is needed, not the numbers themselves.",
      "Invite someone from the registry, a business support centre (for example SMEDAN in Nigeria) or a local accountant to answer questions.",
      "Do not quote fees or deadlines from memory; show learners how to check them on the official site.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
