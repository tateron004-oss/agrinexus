"use strict";

// Koach Learn course: Agriculture (Africa) -> "Farmer Cooperatives and Getting to Market" (owner's request, 28 October 2026).
// For smallholder and growing farmers, farmer-group leaders and agribusiness workers in Kenya, Nigeria, Ghana and across Africa: why farmers group,
// forming and running a cooperative or producer group, collective selling and aggregation, market prices by phone, buyer contracts and record keeping.
// Registration rules differ by country: the course names each national cooperative office and tells students to check current rules and fees.
// Goes deeper than the markets lesson in agri-agribusiness-farm-management.js.

const ICA = { name: "International Cooperative Alliance: the cooperative identity, values and principles", url: "https://ica.coop/en/cooperatives/cooperative-identity" };
const KE_ACT = { name: "Kenya Law: Co-operative Societies Act (registration through the Commissioner for Co-operative Development)", url: "https://new.kenyalaw.org/akn/ke/act/1997/12" };
const NG_ACT = { name: "Nigerian Co-operative Societies Act (Federal and State Directors of Co-operatives; bye-laws; annual audit)", url: "https://placng.org/lawsofnigeria/print.php?sn=356" };
const GH_COOP = { name: "Ghana Information Services Department: Government begins reform of cooperative sector (Department of Co-operatives)", url: "https://www.isd.gov.gh/government-begins-reform-of-cooperative-sector-with-new-policy-and-legal-framework/" };
const KAMIS = { name: "Kenya Agricultural Market Information System (KAMIS), Ministry of Agriculture", url: "https://kamis.kilimo.go.ke" };

module.exports = {
  id: "agri-cooperatives-markets",
  category: "Agriculture (Africa)",
  name: "Farmer Cooperatives and Getting to Market",
  skills: "Explaining why farmers group together, Writing by-laws and registering a group, Running meetings and keeping group records, Aggregating and selling together, Checking market prices by phone, Reading a buyer contract",
  outcome: "help start or strengthen a farmer group: agree its by-laws, know where to register it, run meetings and keep clear records, collect members' produce and sell it together at a checked price, and read a buyer contract before anyone signs.",
  about: [
    "This course is for smallholder and growing farmers, farmer-group and cooperative leaders, and young agribusiness workers in Kenya, Nigeria, Ghana and across Africa. Alone, a farmer with five bags of maize or a few crates of tomatoes takes whatever price the trader offers. Together, a group can buy inputs cheaper, meet a big buyer's order and bargain for a better price.",
    "Chapter 1 covers building the group: why farmers group together, forming a producer group or cooperative (by-laws and registration), and running it well with meetings and records. Chapter 2 covers getting to market: collecting and selling together, checking prices by phone, and contracts with buyers.",
    "Cooperative laws, registration offices and fees differ by country and change over time. This course names the offices to contact; always check the current rules with them before you register. Each lesson takes about five minutes and ends with a task you can do with your group. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Write a one-page group selling plan for one crop (your group's, or an example such as 25 maize farmers in Bungoma, a women's tomato group in Kaduna, or a cocoa or cowpea group near Tamale): the group's name and purpose, five key by-law rules, where you would register and what you must check, the records you will keep, how members will deliver, grade and be paid, the prices you found from at least three sources, and the six contract terms you will check before signing with a buyer.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Smallholder and growing farmers, farmer-group and cooperative leaders, and young agribusiness workers in Kenya, Nigeria, Ghana and across Africa who want to buy and sell together.",
    startingPoint: "Most sell small amounts alone at the farm gate and take the trader's price. Some belong to an informal group or chama. Few have written by-laws, kept group records, run a collection day, checked prices from several sources, or read a buyer contract before signing.",
    gap: "Alone, farmers have little bargaining power, and many groups fail through weak trust, poor records, side-selling and late payment. A well-run group with clear rules, records, checked prices and written contracts can meet big buyers' orders, buy inputs cheaper and earn more for members.",
    constraints: [
      "Reading level: plain words and short sentences; every group and market term is explained",
      "Devices: a basic phone for SMS, WhatsApp, price checks and a calculator; paper record books",
      "Cooperative laws, offices and fees differ by country and change: learners check with the cooperative office",
      "Money and privacy: two people approve payments; never share PINs or bank details with AI tools or callers",
      "No legal advice: big contracts are checked by the cooperative office, extension or a lawyer"
    ],
    prerequisites: "None. \"Post-Harvest Handling and Storage\" helps with grading and quality."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "For your farm and neighbours", action: "list what a group could do that one farmer cannot, and the risks to manage", standard: "naming at least three benefits and three common reasons groups fail" },
    { id: "O2", condition: "For a new or existing farmer group", action: "draft the main by-law rules and name the office where the group would register", standard: "with at least five key rules and the current steps checked with the office" },
    { id: "O3", condition: "For a group meeting and its money", action: "run a meeting with an agenda and minutes, and set up the basic group records", standard: "with a member register, cash book, delivery book and payments record, and two people approving payments" },
    { id: "O4", condition: "On a collection day", action: "check, grade, weigh, record and pay for each member's produce", standard: "weighing in front of the member, giving a receipt and paying by the records" },
    { id: "O5", condition: "Before selling", action: "compare prices from at least three sources and calculate an offer's price at your farm", standard: "subtracting transport, fees and losses, and spotting scam offers" },
    { id: "O6", condition: "Given a buyer contract", action: "check the key terms before the group signs", standard: "covering product, grade, quantity, price, delivery, quality checks, payment, failure and disputes" }
  ],
  chapters: [
    {
      name: "Chapter 1: Building a strong farmer group",
      lessons: [
        {
          objectives: ["O1"],
          title: "Why farmers group together",
          minutes: 4,
          goal: "List what a group could do for your farm that you cannot do alone, and the risks to manage.",
          text: [
            "The International Cooperative Alliance defines a cooperative as an association of people who join voluntarily to meet shared economic, social and cultural needs through a business they own together and control democratically. Members are both the owners and the users.",
            "Groups help farmers: buy seed, fertilizer and feed in bulk at lower prices; collect produce into lorry loads that big buyers want; bargain for better prices; share stores, dryers, transport and equipment; get training, certification and credit that lenders give more easily to a group with records; and speak with one voice to government and buyers.",
            "Groups also fail. Common reasons are weak trust, leaders who take control, poor records, members selling to side buyers after the group has agreed a deal, and late payment. The rest of this course is about avoiding these. Groups range from informal self-help or producer groups to registered cooperative societies; a group can start informally and register later."
          ],
          words: [["Cooperative", "a business owned and controlled by its members, who also use its services."], ["Producer group", "farmers growing the same crop who work together, registered or not."], ["Bulk buying", "buying large amounts together for a lower price."], ["Side-selling", "a member selling to another buyer after the group has agreed to sell together."]],
          slides: [
            { title: "What a cooperative is (ICA)", bullets: ["People who join voluntarily", "A business they own together", "Controlled democratically: members own and use it"] },
            { title: "What groups can do", bullets: ["Buy inputs in bulk, cheaper", "Fill lorry loads for big buyers; bargain", "Share stores, transport; get training and credit"] },
            { title: "Why groups fail", bullets: ["Weak trust; leaders take control", "Poor records; late payment", "Side-selling after a group deal"] }
          ],
          sources: [ICA],
          tryIt: "Write three things a group could do for your farm that you cannot do alone, and the one risk you worry about most. Ask two neighbours what they would want from a group and write their answers.",
          youCanNow: "explain what a cooperative is, what a group can do for farmers, and the main reasons groups fail.",
          quickCheck: [
            { objective: "O1", q: "Which kinds of farmer groups exist?", options: ["From informal self-help or producer groups to registered cooperative societies", "Only registered companies", "Only government offices", "Only groups of more than 1,000 farmers"], answer: 0, why: "Groups range from informal self-help or producer groups to registered cooperatives." },
            { objective: "O1", q: "Your neighbours want to sell maize together but are not ready to register. What can they do?", options: ["Wait until they can register before doing anything", "Each sell alone forever", "Ask a trader to be their leader", "Start as an informal group and register later"], answer: 3, why: "A group can start informally and register later." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Forming the group: by-laws and registration",
          minutes: 6,
          goal: "Draft the main by-law rules for a group and find out where to register it.",
          text: [
            "Start with people who grow the same crop or need the same service, live close enough to meet, and trust each other. Agree a clear purpose, such as \"sell our maize together and buy inputs in bulk\". Hold a first meeting, write minutes, and choose an interim committee.",
            "By-laws are the group's written rules. They usually cover: name, address and purpose; who can join and how; entry fees and shares; meetings, quorum and voting (cooperatives use one member, one vote); the committee, its powers and terms of office; how money is kept and checked; how any surplus is shared; and how members who break rules are disciplined. Your cooperative office often has model by-laws you can adapt.",
            "Registration gives a group legal status to own property, open a bank account in its own name, sign contracts and borrow. Rules differ by country. In Kenya, societies register under the Co-operative Societies Act through the Commissioner for Co-operative Development, starting at the county cooperative office. In Nigeria, the Co-operative Societies Act says a primary society needs at least ten qualified members and applies, with its bye-laws, to the State Director of Co-operatives. In Ghana, groups register with the Department of Co-operatives through its district office. Fees, forms and steps change, so visit or call the office before you apply."
          ],
          steps: ["Agree the group's purpose in one sentence.", "Hold a first meeting; write minutes and members' names.", "Choose an interim committee: chair, secretary, treasurer.", "Get model by-laws from your cooperative office and adapt them.", "Agree the key rules in a members' meeting and record the vote.", "Visit the cooperative office: ask for the current forms, fees and steps."],
          words: [["By-laws", "the written rules a group agrees to follow."], ["Quorum", "the smallest number of members who must be present for a meeting's decisions to count."], ["One member, one vote", "each member has one vote, however many shares they hold."], ["Registration", "official recognition that gives the group legal status."]],
          slides: [
            { title: "Start right", bullets: ["Same crop or need; close by; trust", "One-sentence purpose", "First meeting, minutes, interim committee"] },
            { title: "By-laws cover", bullets: ["Purpose, membership, fees and shares", "Meetings, quorum, one member one vote", "Committee, money, surplus, discipline"] },
            { title: "Where to register", bullets: ["Kenya: county cooperative office / Commissioner for Co-operative Development", "Nigeria: State Director of Co-operatives", "Ghana: district Department of Co-operatives office"] },
            { title: "Before you apply", bullets: ["Rules, forms and fees change", "Visit or call the office first", "Ask for model by-laws"] }
          ],
          sources: [KE_ACT, NG_ACT, GH_COOP],
          tryIt: "Write five by-law rules for your group: who can join, the entry fee or share, how often you meet and the quorum, how votes work, and what happens if a member side-sells. Then find the address or phone number of your nearest cooperative office.",
          youCanNow: "draft the main by-law rules for a farmer group and know where to register it in your country.",
          quickCheck: [
            { objective: "O2", q: "What does registration give a farmer group?", options: ["A guaranteed price", "Free inputs", "Legal status to own property, open a bank account, sign contracts and borrow", "A government salary"], answer: 2, why: "Registration gives the group legal status to own property, bank, sign contracts and borrow." },
            { objective: "O2", q: "Your group is writing by-laws and does not know where to start. What do you do?", options: ["Copy a company's rules from the internet", "Ask the cooperative office for model by-laws to adapt", "Let the chairperson write them alone", "Skip by-laws"], answer: 1, why: "Cooperative offices often have model by-laws that groups can adapt." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Running the group: meetings and records",
          minutes: 5,
          goal: "Run a short meeting with an agenda and minutes, and set up the group's basic records.",
          text: [
            "Good meetings build trust. Send the date and agenda ahead (an SMS or WhatsApp message works), start on time, check the quorum, follow the agenda, let every member speak, vote on decisions, and write minutes: who came, what was decided, and who will do what by when. Read the last minutes at the start of each meeting. Hold an annual general meeting where members hear the accounts and elect the committee.",
            "Records are the group's memory and its proof to buyers, banks and the cooperative office. Keep at least: a member register (names, contacts, shares paid), a cash book of all money in and out with receipts, a delivery book showing what each member delivered, its grade and weight, and a payments record showing what each member was paid. Nigeria's Co-operative Societies Act, for example, requires a registered society's accounts to be audited each year.",
            "Protect the money: use a group bank or mobile money account, have two people sign or approve every payment, give receipts for every shilling, naira or cedi, and read the accounts aloud at meetings. A spreadsheet on a phone or a free app can hold records, but keep a paper copy too, and never share PINs or passwords."
          ],
          steps: ["Send the date and agenda ahead.", "Check the quorum; follow the agenda; vote on decisions.", "Write minutes: who came, what was decided, who does what by when.", "Set up four records: members, cash book, deliveries, payments.", "Use a group account with two signatories; give receipts.", "Read the accounts aloud at each meeting; audit once a year."],
          words: [["Agenda", "the list of topics for a meeting."], ["Minutes", "the written record of what a meeting decided."], ["Annual general meeting (AGM)", "the yearly meeting of all members to hear accounts and elect leaders."], ["Audit", "an independent check of the group's accounts."], ["Signatory", "a person allowed to approve payments from an account."]],
          slides: [
            { title: "Good meetings", bullets: ["Agenda sent ahead; start on time", "Check quorum; everyone speaks; vote", "Minutes: decisions, who does what by when"] },
            { title: "Four basic records", bullets: ["Member register", "Cash book with receipts", "Delivery book and payments record"] },
            { title: "Protect the money", bullets: ["Group account; two signatories", "Receipts for every payment", "Read accounts aloud; audit yearly"] }
          ],
          sources: [NG_ACT],
          tryIt: "Write an agenda for your group's next meeting with four items. Then draw the columns for a delivery book: date, member name, crop, grade, weight, received by.",
          youCanNow: "run a group meeting with an agenda and minutes and keep the records that build trust.",
          quickCheck: [
            { objective: "O3", q: "What happens at an annual general meeting?", options: ["The buyer sets the price", "Members hear the accounts and elect the committee", "The group sells its store", "Only the chairperson speaks"], answer: 1, why: "At the AGM, members hear the accounts and elect the committee." },
            { objective: "O3", q: "You are chairing today's meeting and the quorum is present. What do you do first?", options: ["Read the last meeting's minutes", "Ask for money", "Skip the agenda", "End the meeting early"], answer: 0, why: "Reading the last minutes at the start keeps everyone on track and builds trust." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Building a strong farmer group",
        questions: [
          { objective: "O1", q: "In a cooperative, who owns and controls the business?", options: ["The buyer", "The government", "The members", "The chairperson alone"], answer: 2, why: "Members own, control and use a cooperative." },
          { objective: "O1", q: "A member sells to another trader after the group agreed a deal. This is called:", options: ["Bulk buying", "Side-selling", "Aggregation", "Auditing"], answer: 1, why: "Side-selling breaks group deals and is a common reason groups fail." },
          { objective: "O2", q: "In Nigeria, where does a primary cooperative society apply to register?", options: ["The State Director of Co-operatives", "The police", "The football federation", "Any bank"], answer: 0, why: "The Co-operative Societies Act sends applications, with bye-laws, to the Director of Co-operatives." },
          { objective: "O3", q: "What is a quorum?", options: ["The group's bank account", "A type of crop", "The meeting's tea break", "The smallest number of members needed for decisions to count"], answer: 3, why: "Without a quorum, a meeting's decisions are not valid." },
          { objective: "O3", q: "Which practice best protects the group's money?", options: ["One person keeps all cash at home", "No receipts, to save paper", "Two signatories, receipts and accounts read aloud", "Share the PIN with all members"], answer: 2, why: "Two approvers, receipts and open accounts make theft and mistakes harder." }
        ]
      }
    },
    {
      name: "Chapter 2: Getting to market together",
      lessons: [
        {
          objectives: ["O4"],
          title: "Aggregation and selling together",
          minutes: 5,
          goal: "Set up a collection day where members' produce is checked, weighed, recorded and paid fairly.",
          text: [
            "Aggregation means collecting many members' small amounts into one large, even lot. Big buyers such as processors, millers, schools, supermarkets and exporters want steady volumes of one quality, delivered on time. A group that can fill a lorry with clean, dry, graded produce can sell to them and earn more than at the farm gate.",
            "Run a collection point or day with clear rules: the quality the buyer wants (for example dry, clean, sorted maize at the buyer's maximum moisture), a trusted scale, and a record for every delivery. Check and grade each member's produce, weigh it in front of them, write it in the delivery book and give a receipt. Store the lot safely until the buyer collects.",
            "Pay members by the records: weight times the agreed price for their grade, minus any agreed group fee for transport, storage or bags, all decided in advance and written in the by-laws or minutes. Pay on time, through mobile money or the bank where possible. Fast, fair, open payment is the best defence against side-selling."
          ],
          steps: ["Agree the buyer's quality rules and tell all members in advance.", "Set the collection day, place and a trusted scale.", "Check, grade and weigh each delivery in front of the member.", "Write it in the delivery book; give a receipt.", "Store the lot safely; deliver to the buyer together.", "Pay each member by the records, minus agreed fees, on time."],
          words: [["Aggregation", "collecting many small amounts into one large lot."], ["Collection point", "a place where members bring produce to be checked and recorded."], ["Lot", "one batch of produce of the same type and grade."]],
          slides: [
            { title: "Why aggregate", bullets: ["Big buyers want volume, quality, timing", "Fill a lorry with one grade", "Better price than the farm gate"] },
            { title: "Collection day", bullets: ["Buyer's quality rules known in advance", "Grade and weigh in front of the member", "Record it and give a receipt"] },
            { title: "Pay fairly and fast", bullets: ["Weight x price for the grade", "Minus fees agreed in advance", "On time, by mobile money or bank"] }
          ],
          tryIt: "Plan one collection day for your group: date, place, scale, the buyer's quality rules, who records, and the group fee per bag or kilo agreed in advance. Write how and when members will be paid.",
          youCanNow: "run a fair collection day and pay members by clear records.",
          quickCheck: [
            { objective: "O4", q: "What is a collection point or day?", options: ["A party for members", "A bank branch", "A buyer's office", "A place and day where members bring produce to be checked, weighed and recorded"], answer: 3, why: "At a collection point, produce is checked, graded, weighed, recorded and stored until the buyer collects." },
            { objective: "O4", q: "A member's maize is wetter than the buyer allows. What do you do at the collection point?", options: ["Mix it with dry maize so nobody notices", "Pay the member double", "Do not add it to the lot until it is dried to the buyer's standard", "Hide it at the bottom of the lorry"], answer: 2, why: "The lot must meet the buyer's quality, so produce is checked and graded before it is accepted." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Checking market prices by phone",
          minutes: 5,
          goal: "Find prices from at least three sources and work out what an offer is really worth at your farm.",
          text: [
            "Never sell without knowing the price. Ask at least three buyers, listen to market reports on radio, and check official market information services. In Kenya, the Ministry of Agriculture's KAMIS system publishes wholesale, retail and farm-gate prices for many crops and livestock from markets across the counties. In Nigeria and Ghana, ask your extension office, commodity association or cooperative union which price service covers your crop.",
            "Compare like with like: price per kilo or per bag of the same grade, at the same place. A higher price at a far market may be worth less after transport, loading, market fees and losses. Work out the price at your farm: market price minus all costs of getting it there.",
            "A phone helps. Keep a simple price log each week, share it in the group's WhatsApp, and use a calculator or an AI assistant to compare offers. Be careful of scams: anyone who asks you to pay a fee to receive a \"guaranteed\" high price, or asks for your mobile money PIN, is not a real buyer."
          ],
          steps: ["Get prices from at least three sources: buyers, radio, official service.", "Check each is for the same crop, grade and unit.", "Subtract transport, loading, fees and losses to get the farm price.", "Log prices weekly and share with the group.", "Ignore anyone asking for a fee or a PIN to get you a price."],
          words: [["Farm-gate price", "the price a buyer pays you at your farm."], ["Wholesale price", "the price for large amounts sold to traders or shops."], ["Market information service", "a service that publishes current market prices."]],
          slides: [
            { title: "Three sources at least", bullets: ["Several buyers", "Radio market reports", "Official services (Kenya: KAMIS)"] },
            { title: "Compare like with like", bullets: ["Same crop, grade and unit", "Market price minus transport and fees", "= what it is worth at your farm"] },
            { title: "Use the phone wisely", bullets: ["Weekly price log; share with the group", "Calculator or AI to compare offers", "No fees or PINs to real buyers"] }
          ],
          sources: [KAMIS],
          tryIt: "This week, get the price for one crop from three sources and write them in a table: source, price, grade, unit, place. Work out the price at your farm for the best two after transport costs. Which offer really pays more?",
          youCanNow: "check prices from several sources and work out which offer really pays more.",
          quickCheck: [
            { objective: "O5", q: "What does \"compare like with like\" mean for prices?", options: ["Compare price per kilo or bag of the same grade at the same place", "Compare only the highest prices", "Compare this year with ten years ago", "Compare maize with tomatoes"], answer: 0, why: "Prices only compare fairly for the same grade, unit and place." },
            { objective: "O5", q: "Your group wants to follow prices every week. What do you do?", options: ["Ask one trader once a season", "Keep a simple weekly price log and share it in the group's WhatsApp", "Guess from last year", "Wait for the buyer to tell you"], answer: 1, why: "A weekly price log shared in the group helps members know the price before they sell." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Contracts with buyers",
          minutes: 6,
          goal: "Read a buyer contract and check the key terms before the group signs.",
          text: [
            "A contract is a written agreement between the group and a buyer. A good contract gives a sure market and a known price; a bad one can leave the group with produce nobody collects, or money that never comes. Get every deal in writing, even with a buyer you know.",
            "Check these terms: what product and grade; how much and when; the price, or exactly how it will be set (for example the market price on delivery day plus or minus an amount); where delivery happens and who pays transport; how quality is checked and what happens to rejected produce; when and how payment is made; what happens if the harvest fails or the buyer does not collect; and how disputes are settled.",
            "If any part is unclear, ask the buyer to explain in writing. Read it aloud in a members' meeting so everyone understands their duties, including no side-selling. Ask your cooperative office, extension officer or a lawyer to check big contracts. An AI assistant can explain hard words in simple language, but never type the group's bank details or PINs into it, and it does not replace legal advice."
          ],
          steps: ["Get the offer in writing.", "Check product, grade, quantity and dates.", "Check price or how it is set, delivery place and who pays transport.", "Check quality checks, rejection rules, payment date and method.", "Check what happens if the harvest fails or the buyer does not collect, and how disputes are settled.", "Read it to members; have big contracts checked before signing."],
          words: [["Contract", "a written agreement that both sides must keep."], ["Rejection", "when a buyer refuses produce that does not meet the agreed quality."], ["Dispute", "a disagreement between the group and the buyer."]],
          slides: [
            { title: "Always in writing", bullets: ["Even with a buyer you know", "Sure market and known price", "Bad terms can cost the whole group"] },
            { title: "Check the terms", bullets: ["Product, grade, quantity, dates", "Price or how it is set; delivery and transport", "Quality checks, rejection, payment date and method"] },
            { title: "When things go wrong", bullets: ["Harvest fails or buyer does not collect", "How disputes are settled", "Ask the buyer to explain in writing"] },
            { title: "Before signing", bullets: ["Read it aloud to members", "Big contracts: cooperative office, extension or lawyer", "AI can explain words; no bank details or PINs"] }
          ],
          tryIt: "Final task: write your one-page group selling plan for one crop. Include the group's purpose, five by-law rules, where you would register, your records, how members deliver and are paid, prices from three sources, and the contract terms you will check before signing.",
          youCanNow: "read a buyer contract, check its key terms, and plan how your group will sell together.",
          quickCheck: [
            { objective: "O6", q: "What is a buyer contract?", options: ["A receipt for one bag", "A WhatsApp message saying hello", "A written agreement between the group and a buyer", "A loan from a bank"], answer: 2, why: "A contract is a written agreement that sets out what both sides will do." },
            { objective: "O6", q: "Members do not understand the contract's quality terms. What do you do before signing?", options: ["Sign quickly before the buyer leaves", "Let the chairperson sign alone", "Ignore the quality terms", "Ask the buyer to explain in writing and read it aloud at a members' meeting"], answer: 3, why: "Unclear parts are explained in writing and read aloud so every member understands their duties." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Getting to market together",
        questions: [
          { objective: "O4", q: "Why do big buyers prefer to buy from groups?", options: ["Groups always sell cheapest", "Groups can supply large, even lots on time", "Groups do not need quality", "Buyers must by law"], answer: 1, why: "Aggregation gives the volume and steady quality big buyers need." },
          { objective: "O4", q: "At a collection point, when should a member's produce be weighed?", options: ["In front of the member, then recorded with a receipt", "Secretly at night", "Only after the buyer pays", "Never; estimate it"], answer: 0, why: "Open weighing and receipts build trust and prove each member's share." },
          { objective: "O5", q: "A far market pays 10 percent more, but transport and fees cost 15 percent. What is true?", options: ["The far market pays more", "Both pay the same", "Transport costs do not matter", "The far market pays less at your farm"], answer: 3, why: "After costs, the farm price from the far market is lower." },
          { objective: "O5", q: "In Kenya, which official service publishes crop and livestock market prices?", options: ["KAMIS", "KEBS", "KRA", "KMD"], answer: 0, why: "KAMIS, run by the Ministry of Agriculture, publishes market prices." },
          { objective: "O6", q: "Which contract term tells you what happens if the buyer does not collect?", options: ["The group's name", "The meeting date", "The terms for failure to collect or deliver", "The colour of the bags"], answer: 2, why: "Contracts should say what happens if either side cannot keep the deal." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Farmer Cooperatives and Getting to Market",
    questions: [
      { objective: "O1", q: "Which is a benefit of a farmer group?", options: ["Paying more for inputs", "Buying inputs in bulk at lower prices", "Selling alone at the farm gate", "Keeping no records"], answer: 1, why: "Bulk buying lowers input costs." },
      { objective: "O1", q: "According to the International Cooperative Alliance, members of a cooperative:", options: ["Own and democratically control it", "Work for a private owner", "Have no vote", "Must all be government staff"], answer: 0, why: "A cooperative is jointly owned and democratically controlled." },
      { objective: "O1", q: "Which is a common reason farmer groups fail?", options: ["Clear records", "On-time payment", "Weak trust and poor records", "Open meetings"], answer: 2, why: "Low trust and poor records break groups apart." },
      { objective: "O2", q: "What are by-laws?", options: ["Bank loans", "Market prices", "Buyer contracts", "The group's written rules"], answer: 3, why: "By-laws set out how the group works." },
      { objective: "O2", q: "\"One member, one vote\" means:", options: ["Members with more shares get more votes", "Only leaders vote", "Each member has one vote", "Votes are bought"], answer: 2, why: "Cooperatives give each member one vote." },
      { objective: "O2", q: "In Kenya, cooperative societies are registered under the Co-operative Societies Act through:", options: ["The Commissioner for Co-operative Development", "The Kenya Wildlife Service", "A private buyer", "The weather department"], answer: 0, why: "The Commissioner registers societies, starting at the county cooperative office." },
      { objective: "O2", q: "In Ghana, where do cooperative groups register?", options: ["The meteorological agency", "A radio station", "Any shop", "The Department of Co-operatives (district office)"], answer: 3, why: "Ghana's Department of Co-operatives registers and supervises societies." },
      { objective: "O2", q: "Before applying to register, you should:", options: ["Guess the fee", "Check current forms, fees and steps with the cooperative office", "Copy another country's rules", "Skip the by-laws"], answer: 1, why: "Rules and fees change, so check with the office." },
      { objective: "O3", q: "Minutes of a meeting record:", options: ["The time each person arrived only", "Market prices", "Members' PINs", "Who came, what was decided and who does what by when"], answer: 3, why: "Minutes are the record of decisions and actions." },
      { objective: "O3", q: "Which is one of the four basic group records?", options: ["A delivery book", "A diary of the weather", "A list of buyers' phone PINs", "A photo album"], answer: 0, why: "The delivery book shows what each member delivered." },
      { objective: "O3", q: "Why have two signatories on the group account?", options: ["To slow down all payments", "So no one person can move money alone", "Because banks charge less", "So members never see accounts"], answer: 1, why: "Two approvers protect group money." },
      { objective: "O3", q: "Nigeria's Co-operative Societies Act requires a registered society's accounts to be:", options: ["Kept secret", "Burned each year", "Audited each year", "Kept only in memory"], answer: 2, why: "The Act requires an audit at the end of each financial year." },
      { objective: "O4", q: "Aggregation means:", options: ["Selling one bag at a time", "Splitting the group", "Raising the price alone", "Collecting many members' produce into one large lot"], answer: 3, why: "Aggregation bulks small amounts for bigger buyers." },
      { objective: "O4", q: "How should members be paid after a group sale?", options: ["By the records: weight x price for grade, minus agreed fees", "Equally, whatever they delivered", "Only leaders are paid", "Whenever the treasurer likes"], answer: 0, why: "Fair, recorded payment keeps trust and reduces side-selling." },
      { objective: "O4", q: "The best defence against side-selling is:", options: ["Secret prices", "Late payment", "Fast, fair and open payment", "No contracts"], answer: 2, why: "Members stay loyal when the group pays well and on time." },
      { objective: "O5", q: "How many price sources should you check before selling?", options: ["None", "Only one buyer", "Just the radio", "At least three"], answer: 3, why: "Several sources show the real market price." },
      { objective: "O5", q: "Someone promises a guaranteed high price if you first pay a fee and share your mobile money PIN. This is:", options: ["A normal buyer", "A likely scam", "A cooperative rule", "A government service"], answer: 1, why: "Real buyers do not ask for fees or PINs." },
      { objective: "O5", q: "The farm price of an offer is:", options: ["The market price minus transport, fees and losses", "The highest price you heard", "The price in the capital city", "The retail price"], answer: 0, why: "What you actually receive at the farm is what counts." },
      { objective: "O6", q: "Which should be written in a buyer contract?", options: ["Only the buyer's name", "Price or how it is set, quantity, quality, delivery and payment terms", "Members' bank PINs", "Nothing; a handshake is enough"], answer: 1, why: "These terms protect the group if anything goes wrong." },
      { objective: "O6", q: "You use an AI assistant to understand a contract. What is safe?", options: ["Type the group's bank details and PINs", "Sign whatever it says is fine", "Ask it to explain hard words, then have big contracts checked by an adviser", "Let it sign for you"], answer: 2, why: "AI can explain words but does not replace legal advice, and private details stay private." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      2,
      3,
      7,
      8,
      10,
      12,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part of the plan and check it again.",
    criteria: [
      {
        name: "Purpose and by-laws",
        objective: "O2",
        notYet: "No clear purpose, or fewer than five rules.",
        meets: "The group's name, purpose and five key by-law rules, such as membership, voting, money and discipline.",
        exceeds: "Rules also cover side-selling and how any surplus is shared."
      },
      {
        name: "Registration",
        objective: "O2",
        notYet: "No registration office named.",
        meets: "Names the office where the group would register and what must be checked there.",
        exceeds: "Has called or visited the office and noted the current steps and date."
      },
      {
        name: "Records and money",
        objective: "O3",
        notYet: "Records missing, or one person controls the money.",
        meets: "Member register, cash book, delivery book and payments record, with two people approving payments.",
        exceeds: "Says how accounts will be read to members and checked each year."
      },
      {
        name: "Delivery, grading and payment",
        objective: "O4",
        notYet: "No collection or payment rules.",
        meets: "How members deliver, how produce is graded and weighed in front of them, and how and when they are paid.",
        exceeds: "Agreed group fees and payment dates are written down in advance."
      },
      {
        name: "Prices",
        objective: "O5",
        notYet: "Fewer than three price sources, or no farm-price calculation.",
        meets: "Prices from at least three sources, compared like with like, with the price at the farm worked out.",
        exceeds: "Includes a weekly price log over several weeks."
      },
      {
        name: "Contract terms",
        objective: "O6",
        notYet: "Fewer than six terms, or key terms such as payment missing.",
        meets: "Six contract terms to check, including price, quality, delivery, payment and failure to collect.",
        exceeds: "Names who will check big contracts, such as the cooperative office or a lawyer."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and score Meets or Exceeds on every rubric row of the group selling plan",
      "Groups that report writing by-laws, keeping records or registering within 90 days (follow-up survey)",
      "Groups that report a group sale with a written contract, and the price compared with selling alone",
      "Learners who report avoiding a fee-for-price or PIN scam"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A notebook and pen, or record books for the group",
      "A basic phone for prices, SMS or WhatsApp and a calculator",
      "Model by-laws from the cooperative office and an example buyer contract, if available",
      "About 60 minutes in total, in short sessions, plus time with the group to write the selling plan"
    ],
    facilitatorNotes: [
      "Run the course with a real or forming group: take the pre-test together, then hold a short practice meeting with an agenda and minutes.",
      "Invite a cooperative officer to explain registration; check current fees and steps before the session.",
      "Practise a mock collection day with a scale, grading and a delivery book.",
      "Never ask members to share PINs or bank details; use placeholders in record examples.",
      "Score the selling plan with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
