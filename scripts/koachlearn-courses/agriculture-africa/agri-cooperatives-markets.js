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
  chapters: [
    {
      name: "Chapter 1: Building a strong farmer group",
      lessons: [
        {
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
          youCanNow: "explain what a cooperative is, what a group can do for farmers, and the main reasons groups fail."
        },
        {
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
          youCanNow: "draft the main by-law rules for a farmer group and know where to register it in your country."
        },
        {
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
          youCanNow: "run a group meeting with an agenda and minutes and keep the records that build trust."
        }
      ],
      check: {
        title: "Knowledge Check 1: Building a strong farmer group",
        questions: [
          { q: "In a cooperative, who owns and controls the business?", options: ["The buyer", "The government", "The members", "The chairperson alone"], answer: 2, why: "Members own, control and use a cooperative." },
          { q: "A member sells to another trader after the group agreed a deal. This is called:", options: ["Bulk buying", "Side-selling", "Aggregation", "Auditing"], answer: 1, why: "Side-selling breaks group deals and is a common reason groups fail." },
          { q: "In Nigeria, where does a primary cooperative society apply to register?", options: ["The State Director of Co-operatives", "The police", "The football federation", "Any bank"], answer: 0, why: "The Co-operative Societies Act sends applications, with bye-laws, to the Director of Co-operatives." },
          { q: "What is a quorum?", options: ["The group's bank account", "A type of crop", "The meeting's tea break", "The smallest number of members needed for decisions to count"], answer: 3, why: "Without a quorum, a meeting's decisions are not valid." },
          { q: "Which practice best protects the group's money?", options: ["One person keeps all cash at home", "No receipts, to save paper", "Two signatories, receipts and accounts read aloud", "Share the PIN with all members"], answer: 2, why: "Two approvers, receipts and open accounts make theft and mistakes harder." }
        ]
      }
    },
    {
      name: "Chapter 2: Getting to market together",
      lessons: [
        {
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
          youCanNow: "run a fair collection day and pay members by clear records."
        },
        {
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
          youCanNow: "check prices from several sources and work out which offer really pays more."
        },
        {
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
          youCanNow: "read a buyer contract, check its key terms, and plan how your group will sell together."
        }
      ],
      check: {
        title: "Knowledge Check 2: Getting to market together",
        questions: [
          { q: "Why do big buyers prefer to buy from groups?", options: ["Groups always sell cheapest", "Groups can supply large, even lots on time", "Groups do not need quality", "Buyers must by law"], answer: 1, why: "Aggregation gives the volume and steady quality big buyers need." },
          { q: "At a collection point, when should a member's produce be weighed?", options: ["In front of the member, then recorded with a receipt", "Secretly at night", "Only after the buyer pays", "Never; estimate it"], answer: 0, why: "Open weighing and receipts build trust and prove each member's share." },
          { q: "A far market pays 10 percent more, but transport and fees cost 15 percent. What is true?", options: ["The far market pays more", "Both pay the same", "Transport costs do not matter", "The far market pays less at your farm"], answer: 3, why: "After costs, the farm price from the far market is lower." },
          { q: "In Kenya, which official service publishes crop and livestock market prices?", options: ["KAMIS", "KEBS", "KRA", "KMD"], answer: 0, why: "KAMIS, run by the Ministry of Agriculture, publishes market prices." },
          { q: "Which contract term tells you what happens if the buyer does not collect?", options: ["The group's name", "The meeting date", "The terms for failure to collect or deliver", "The colour of the bags"], answer: 2, why: "Contracts should say what happens if either side cannot keep the deal." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Farmer Cooperatives and Getting to Market",
    questions: [
      { q: "Which is a benefit of a farmer group?", options: ["Paying more for inputs", "Buying inputs in bulk at lower prices", "Selling alone at the farm gate", "Keeping no records"], answer: 1, why: "Bulk buying lowers input costs." },
      { q: "According to the International Cooperative Alliance, members of a cooperative:", options: ["Own and democratically control it", "Work for a private owner", "Have no vote", "Must all be government staff"], answer: 0, why: "A cooperative is jointly owned and democratically controlled." },
      { q: "Which is a common reason farmer groups fail?", options: ["Clear records", "On-time payment", "Weak trust and poor records", "Open meetings"], answer: 2, why: "Low trust and poor records break groups apart." },
      { q: "What are by-laws?", options: ["Bank loans", "Market prices", "Buyer contracts", "The group's written rules"], answer: 3, why: "By-laws set out how the group works." },
      { q: "\"One member, one vote\" means:", options: ["Members with more shares get more votes", "Only leaders vote", "Each member has one vote", "Votes are bought"], answer: 2, why: "Cooperatives give each member one vote." },
      { q: "In Kenya, cooperative societies are registered under the Co-operative Societies Act through:", options: ["The Commissioner for Co-operative Development", "The Kenya Wildlife Service", "A private buyer", "The weather department"], answer: 0, why: "The Commissioner registers societies, starting at the county cooperative office." },
      { q: "In Ghana, where do cooperative groups register?", options: ["The meteorological agency", "A radio station", "Any shop", "The Department of Co-operatives (district office)"], answer: 3, why: "Ghana's Department of Co-operatives registers and supervises societies." },
      { q: "Before applying to register, you should:", options: ["Guess the fee", "Check current forms, fees and steps with the cooperative office", "Copy another country's rules", "Skip the by-laws"], answer: 1, why: "Rules and fees change, so check with the office." },
      { q: "Minutes of a meeting record:", options: ["The time each person arrived only", "Market prices", "Members' PINs", "Who came, what was decided and who does what by when"], answer: 3, why: "Minutes are the record of decisions and actions." },
      { q: "Which is one of the four basic group records?", options: ["A delivery book", "A diary of the weather", "A list of buyers' phone PINs", "A photo album"], answer: 0, why: "The delivery book shows what each member delivered." },
      { q: "Why have two signatories on the group account?", options: ["To slow down all payments", "So no one person can move money alone", "Because banks charge less", "So members never see accounts"], answer: 1, why: "Two approvers protect group money." },
      { q: "Nigeria's Co-operative Societies Act requires a registered society's accounts to be:", options: ["Kept secret", "Burned each year", "Audited each year", "Kept only in memory"], answer: 2, why: "The Act requires an audit at the end of each financial year." },
      { q: "Aggregation means:", options: ["Selling one bag at a time", "Splitting the group", "Raising the price alone", "Collecting many members' produce into one large lot"], answer: 3, why: "Aggregation bulks small amounts for bigger buyers." },
      { q: "How should members be paid after a group sale?", options: ["By the records: weight x price for grade, minus agreed fees", "Equally, whatever they delivered", "Only leaders are paid", "Whenever the treasurer likes"], answer: 0, why: "Fair, recorded payment keeps trust and reduces side-selling." },
      { q: "The best defence against side-selling is:", options: ["Secret prices", "Late payment", "Fast, fair and open payment", "No contracts"], answer: 2, why: "Members stay loyal when the group pays well and on time." },
      { q: "How many price sources should you check before selling?", options: ["None", "Only one buyer", "Just the radio", "At least three"], answer: 3, why: "Several sources show the real market price." },
      { q: "Someone promises a guaranteed high price if you first pay a fee and share your mobile money PIN. This is:", options: ["A normal buyer", "A likely scam", "A cooperative rule", "A government service"], answer: 1, why: "Real buyers do not ask for fees or PINs." },
      { q: "The farm price of an offer is:", options: ["The market price minus transport, fees and losses", "The highest price you heard", "The price in the capital city", "The retail price"], answer: 0, why: "What you actually receive at the farm is what counts." },
      { q: "Which should be written in a buyer contract?", options: ["Only the buyer's name", "Price or how it is set, quantity, quality, delivery and payment terms", "Members' bank PINs", "Nothing; a handshake is enough"], answer: 1, why: "These terms protect the group if anything goes wrong." },
      { q: "You use an AI assistant to understand a contract. What is safe?", options: ["Type the group's bank details and PINs", "Sign whatever it says is fine", "Ask it to explain hard words, then have big contracts checked by an adviser", "Let it sign for you"], answer: 2, why: "AI can explain words but does not replace legal advice, and private details stay private." }
    ]
  }
};
