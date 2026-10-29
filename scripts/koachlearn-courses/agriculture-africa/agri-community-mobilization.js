"use strict";

// Koach Learn course: Agriculture (Africa) -> "Community Mobilization: Pooling Machinery and Bargaining for Inputs" (owner's request, 29 October 2026:
// "can you add learning for farmers in africa that include these classes and beyond"; the list included mobilizing communities, pooling machinery and bargaining for inputs).
// Written in the ADDIE format (model: re-entry/reentry-ai-digital-confidence.js). For farmer leaders, lead farmers, extension workers, and women's and youth groups:
// mapping needs, calling and running a first meeting, shared goals and rules, pooling for machinery or tractor hire, bulk buying and bargaining, avoiding fake inputs,
// conflict and transparent records, and including women and youth. Builds on agri-cooperatives-markets.js (formal registration, by-laws, collective selling) without repeating it.
// Seed, fertilizer and pesticide bodies are named with a note to check them; no prices or fees are given as facts (money figures are examples).

const FAO_MECH = { name: "FAO: Sustainable Agricultural Mechanization: what FAO does (hire services, support for smallholders)", url: "https://www.fao.org/sustainable-agricultural-mechanization/overview/what-fao-does/en/" };
const KEPHIS_SEED = { name: "KEPHIS (Kenya): Seed certification and plant variety protection services", url: "https://www.kephis.go.ke/seed-certification-services" };
const NASC_FAKE = { name: "Voice of Nigeria: National Agricultural Seeds Council (NASC) cautions farmers over fake seeds (buy from registered agro-dealers; certification tag)", url: "https://von.gov.ng/nasc-cautions-farmers-over-fake-seeds/" };
const GH_ACT803 = { name: "UNEP LEAP: Ghana Plants and Fertilizer Act, 2010 (Act 803): seed and fertilizer registration (PPRSD)", url: "https://leap.unep.org/en/countries/gh/national-legislation/plants-and-fertilizer-act-2010-no-803" };
const FAO_PEST_REG = { name: "FAO Pesticide Registration Toolkit: national pesticide registers in Africa", url: "https://www.fao.org/pesticide-registration-toolkit/information-sources/registrations-elsewhere/africa/en" };
const ICA = { name: "International Cooperative Alliance: the cooperative identity, values and principles", url: "https://ica.coop/en/cooperatives/cooperative-identity" };

module.exports = {
  id: "agri-community-mobilization",
  category: "Agriculture (Africa)",
  name: "Community Mobilization: Pooling Machinery and Bargaining for Inputs",
  skills: "Mapping community needs, Calling and running a first meeting, Agreeing goals and rules, Pooling for machinery and tractor hire, Bulk buying and bargaining for genuine inputs, Keeping trust with open records",
  outcome: "bring farmers in your community together around one shared need, agree goals and fair rules, and make a written plan to buy seed and fertilizer in bulk or share a tractor or machine, with open records that keep everyone's trust.",
  about: [
    "One farmer alone pays the top price for a bag of fertilizer and waits weeks for a tractor. Twenty farmers together can bargain for a better price, check that inputs are genuine, and book or share a machine at the right time. This course is for lead farmers, farmer-group leaders, extension workers, youth and women's groups, and anyone ready to organise neighbours in Kenya, Nigeria, Ghana, Burkina Faso and across Africa.",
    "You will map what your community needs, call and run a first meeting, agree a shared goal and simple rules, plan pooled money for a machine or a hired tractor service, buy inputs in bulk and bargain with suppliers, avoid fake seed and fertilizer, handle conflict, keep open records and make sure women and young people have a real voice.",
    "It builds on Farmer Cooperatives and Getting to Market, which covers formal registration, by-laws and selling as a group, so it does not repeat them. Each lesson takes about five minutes and ends with a \"Try it now\" task in your own community. Money figures are examples only."
  ],
  finalTask: "Make a written plan for your community: either a bulk-input purchase plan (members, quantities, deposits, three supplier quotes, how you will check the inputs are genuine, delivery and sharing) or a machinery-sharing agreement (the machine or hire service, booking schedule, fees, maintenance fund, operator, and what happens if it breaks), with the records you will show members and how women and youth take part.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Lead farmers, farmer-group and village leaders, extension workers, and members of women's and youth groups in Kenya, Nigeria, Ghana, francophone West Africa and across Africa. Most farm small plots of maize, cassava, rice, sorghum, beans, groundnuts or vegetables.",
    startingPoint: "Know their neighbours and the problems they share, such as late ploughing, costly fertilizer and fake seed. Some belong to informal groups or savings groups. Few have run a planning meeting, collected money for a shared purchase or bargained with a supplier.",
    gap: "Farmers lose yield and money when ploughing is late, inputs cost too much or turn out fake, and groups fall apart over money. Leaders need to map needs, organise a fair meeting, agree rules, run a pooled purchase or machine-sharing plan, and keep records open so trust lasts, including women and youth who are often left out.",
    constraints: [
      "Reading level: plain words and short sentences; many learners speak English as a second language, and meetings may be in local languages",
      "Devices: a basic phone for calls, SMS and mobile money; paper registers",
      "Money: small amounts pooled from many members; no loss can be hidden",
      "Rules: seed, fertilizer and pesticide rules and registers differ by country and change; learners check their national bodies",
      "Time: meetings must fit around farm work, markets and household duties, especially for women"
    ],
    prerequisites: "None. Helpful: Farmer Cooperatives and Getting to Market, for later formal registration."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "In your village or farmer group", action: "map the community's shared farming needs and rank the top three", standard: "after asking at least ten households, including women and young farmers" },
    { id: "O2", condition: "Given the top shared need", action: "call and run a first meeting that agrees one shared goal and written rules", standard: "with an agenda, minutes, a named leader for each task and rules on money, decisions and leaving" },
    { id: "O3", condition: "Given a need for ploughing, threshing or another machine", action: "write a machinery-sharing or tractor-hire plan", standard: "covering hire versus buy, a fair booking schedule, fees, a maintenance fund, the operator and what happens if it breaks" },
    { id: "O4", condition: "Given members' seed and fertilizer orders", action: "plan a bulk purchase, compare at least three supplier quotes and bargain", standard: "with deposits recorded, inputs checked as genuine and registered, and receipts in the group's name" },
    { id: "O5", condition: "While the group handles money and decisions", action: "keep open records, settle disagreements by the agreed steps and give women and youth a real role", standard: "so every member can see where each payment went, and women and youth hold tasks or leadership posts" }
  ],
  chapters: [
    {
      name: "Chapter 1: Bringing the community together",
      lessons: [
        {
          title: "Mapping your community's needs",
          objectives: ["O1"],
          minutes: 5,
          goal: "Ask at least ten households about their farming problems and rank the top three shared needs.",
          text: [
            "People join a group when it solves a problem they feel. So before you call a meeting, find out what your neighbours actually need. Do not assume: the leader may think it is a tractor while most farmers say it is fake seed or the price of fertilizer.",
            "Visit or call at least ten households. Ask the same few questions: What are your main crops or animals? What held back your last harvest? What do you pay for ploughing, seed and fertilizer, and when do you get them? What would you do together with neighbours? Ask women and young farmers too, not only the household head; their problems can be different, such as having no land title to get credit or being served last by the tractor.",
            "Write the answers on one sheet: one row per household, one column per problem. Count how many households named each problem. The top three are your community's shared needs. You can also draw a simple map of the village showing farms, roads, input shops and where a tractor or mill is. A phone can help you count and sort the answers."
          ],
          steps: ["Write four or five simple questions.", "Ask at least ten households, including women and young farmers.", "Record the answers in a table: one row per household.", "Count how many named each problem.", "Rank the top three shared needs."],
          words: [["Mobilization", "bringing people together to act on a shared need."], ["Needs map", "a simple record of what problems households share and where resources are."], ["Household", "the people who live and farm together and share food and money."]],
          slides: [
            { title: "Start with the need", bullets: ["People join to solve a problem they feel", "Do not assume: ask first", "The leader's idea may not be the top need"] },
            { title: "Ask ten households or more", bullets: ["What held back your last harvest?", "What do you pay for ploughing, seed, fertilizer?", "Ask women and young farmers too"] },
            { title: "Count and rank", bullets: ["One row per household", "Count each problem", "Top three = shared needs"] }
          ],
          tryIt: "Ask at least ten households in your community your questions. Put the answers in a table, count each problem and write down the top three shared needs.",
          youCanNow: "map your community's farming needs and rank the top three shared problems.",
          quickCheck: [
            { objective: "O1", q: "Why ask households before calling a meeting?", options: ["To collect money early", "To choose the leader", "To sell them inputs", "To find out what problems people really share"], answer: 3, why: "A group lasts when it solves a need most members feel, not only the leader's idea." },
            { objective: "O1", q: "Who should you include when asking about needs?", options: ["Women and young farmers as well as household heads", "Only the oldest men", "Only people with tractors", "Only people who can read"], answer: 0, why: "Women and youth can face different problems, so leaving them out gives a wrong picture." }
          ]
        },
        {
          title: "Calling and running a first meeting",
          objectives: ["O2"],
          minutes: 5,
          goal: "Run a first meeting with an agenda that ends with clear tasks and minutes.",
          text: [
            "Choose a time and place that suit most people: after farm work, not on market day, at a place women and youth can easily reach, such as a school, church, mosque or under a known tree. Invite people personally, by phone, SMS or word of mouth, and through respected people such as the chief, a religious leader or the extension officer. Tell them the purpose in one sentence: 'Let us talk about getting fertilizer cheaper this season.'",
            "Keep an agenda of four or five items and keep the meeting short: welcome and purpose; what the needs map found; ideas for what to do together; agreeing a first step; who does what and by when. Choose someone to chair and someone to write minutes. Let everyone speak, and ask quiet people directly.",
            "End with decisions, not just talk. Write each task, the person responsible and the date. Read the minutes aloud and agree the next meeting. Example: a group of sorghum farmers in Burkina Faso agreed in their first meeting to collect fertilizer orders within two weeks, with two members, one of them a young woman, collecting the list."
          ],
          steps: ["Pick a time and place that suit most people, including women and youth.", "Invite personally and through respected people, with a one-sentence purpose.", "Prepare a short agenda: purpose, needs found, ideas, first step, tasks.", "Choose a chair and a minute-taker; let everyone speak.", "End with tasks, names and dates; read the minutes aloud."],
          words: [["Agenda", "the list of things a meeting will discuss, in order."], ["Minutes", "the written record of what a meeting decided and who will do what."], ["Chair", "the person who leads the meeting and keeps it on time."]],
          slides: [
            { title: "Time, place, invitation", bullets: ["After farm work, not market day", "A place women and youth can reach", "Invite personally; one-sentence purpose"] },
            { title: "A short agenda", bullets: ["Purpose; what the needs map found", "Ideas; agree a first step", "Who does what, by when"] },
            { title: "End with decisions", bullets: ["Tasks, names, dates in the minutes", "Read the minutes aloud", "Set the next meeting"] }
          ],
          tryIt: "Write the invitation (one sentence of purpose, time and place) and a five-item agenda for your first meeting. If you can, hold it, and write minutes with at least two tasks, names and dates.",
          youCanNow: "call and run a short first meeting that ends with tasks, names, dates and minutes.",
          quickCheck: [
            { objective: "O2", q: "Which meeting time is usually best for farmers?", options: ["Market day at noon", "After farm work, at a place most people can reach", "Very early, far from the village", "Whenever the leader is free"], answer: 1, why: "A convenient time and place lets most members, including women and youth, attend." },
            { objective: "O2", q: "How should a first meeting end?", options: ["With a long speech", "With everyone paying money at once", "With tasks, names and dates written in the minutes", "Without any decision"], answer: 2, why: "Clear tasks with names and dates turn talk into action." }
          ]
        },
        {
          title: "Shared goals, fair rules and including everyone",
          objectives: ["O2", "O5"],
          minutes: 6,
          goal: "Write a shared goal and five simple rules your group agrees on.",
          text: [
            "A shared goal is specific and has a date: 'By 1 March, buy 200 bags of fertilizer together at a lower price than members pay alone.' or 'This season, every member's field is ploughed within two weeks of the first rains.' A clear goal tells members what success looks like.",
            "Agree simple rules before any money moves: who can join and what they pay; how decisions are made (for example one member, one vote, as cooperatives do); who holds money and how (a group bank or mobile money account with two people to approve payments); what happens if someone does not pay or does not deliver; and how a member can leave and get their money back. Write the rules and read them aloud so members who cannot read also agree.",
            "Make room for women and youth on purpose. Hold meetings at times they can attend, let members join in their own name even without land title, and give them real posts such as treasurer, booking agent or input checker. Groups that include them often have more members, more trust and more skills, such as young members who use phones and mobile money well. When your group is ready to register formally, see Farmer Cooperatives and Getting to Market."
          ],
          steps: ["Write one goal with a number and a date.", "Agree rules on joining, decisions, money, failing to pay or deliver, and leaving.", "Read the rules aloud and record agreement in the minutes.", "Give women and youth real posts and meeting times that suit them."],
          words: [["Shared goal", "one clear result the whole group wants, with a number and a date."], ["Signatory", "a person allowed to approve payments from the group account."], ["Inclusion", "making sure everyone, including women and young people, can join, speak and lead."]],
          slides: [
            { title: "A goal with a number and a date", bullets: ["'By 1 March, buy 200 bags together'", "'Every field ploughed within two weeks of the rains'", "Shows what success looks like"] },
            { title: "Rules before money moves", bullets: ["Joining and fees; one member, one vote", "Group account, two people approve payments", "Not paying or delivering; leaving and refunds"] },
            { title: "Include women and youth", bullets: ["Times and places they can attend", "Join in their own name, without land title", "Real posts: treasurer, booking agent, input checker"] }
          ],
          sources: [ICA],
          tryIt: "Write your group's shared goal with a number and a date, and five rules covering joining, decisions, money, failing to pay or deliver, and leaving. Name one post that a woman or young member will hold.",
          youCanNow: "write a clear shared goal and fair rules, and give women and youth a real role in the group.",
          quickCheck: [
            { objective: "O2", q: "Which is the clearest shared goal?", options: ["By 1 March, buy 200 bags of fertilizer together at a lower price", "Help farmers", "Make things better", "Get some fertilizer sometime"], answer: 0, why: "A goal with a number and a date shows exactly what success looks like." },
            { objective: "O5", q: "A young woman has no land title but farms her own plot. What should the group's rules allow?", options: ["She cannot join", "She joins only through her husband", "She can attend but not vote", "She joins in her own name and can hold a post"], answer: 3, why: "Letting women and youth join and lead in their own name builds a bigger, stronger group." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Bringing the community together",
        questions: [
          { objective: "O1", q: "You asked twelve households. Eight named fake seed and three named tractors. What is the top shared need?", options: ["Tractors", "A new road", "Fake seed", "A school"], answer: 2, why: "The problem named by the most households is the top shared need." },
          { objective: "O1", q: "What is a needs map?", options: ["A simple record of the problems households share and where resources are", "A road map to the city", "A list of crop prices", "A bank statement"], answer: 0, why: "A needs map shows shared problems and local resources such as input shops and machines." },
          { objective: "O2", q: "Who writes down what the meeting decides?", options: ["The chief", "The supplier", "Nobody", "The minute-taker"], answer: 3, why: "The minute-taker records decisions, tasks, names and dates." },
          { objective: "O2", q: "When should a group agree its rules on money?", options: ["After a problem happens", "Before any money is collected", "Only when the group registers", "Never; trust is enough"], answer: 1, why: "Agreeing rules first prevents disputes once money is pooled." },
          { objective: "O5", q: "Which helps women attend group meetings?", options: ["Meetings at times and places that suit them", "Meetings only on market day", "Meetings late at night far away", "Meetings only for household heads"], answer: 0, why: "A suitable time and place removes a common barrier for women." }
        ]
      }
    },
    {
      name: "Chapter 2: Pooling, buying together and keeping trust",
      lessons: [
        {
          title: "Pooling for machinery and tractor hire",
          objectives: ["O3"],
          minutes: 6,
          goal: "Write a plan for sharing a machine or hiring a tractor service as a group.",
          text: [
            "First decide: hire or buy? Buying a tractor costs a great deal and needs fuel, repairs, a trained operator and enough work to keep it busy. For most small groups, hiring a tractor service as a group is the first step: a hire provider will often give better timing or price for many fields close together. FAO supports hire services as a way for smallholders to get machinery. Booking apps and agents, such as Hello Tractor in parts of Nigeria and Kenya, link farmers to tractor owners; check what works in your area. Smaller shared machines, such as a thresher, sheller or mill, can be bought by a group.",
            "Plan the schedule fairly. Ploughing or planting late costs yield, and everyone wants the machine on the same days. Agree the order in advance: by area and route to save fuel and travel, by lottery, or by planting needs, and rotate who goes first each season. Write the schedule and share it. Agree what happens if rain or a breakdown stops work.",
            "Agree fees and costs: what members pay per acre or per hour (example figures only: XOF, KES, NGN or GHS per acre), payment before or on the day, and a separate maintenance fund for a group-owned machine so repairs do not stop the season. Name a trained operator, keep a logbook of hours, fuel, fields served and repairs, and store the machine safely."
          ],
          steps: ["Decide hire or buy, based on cost, skills and how much work there is.", "List members' fields, sizes and the dates they need the machine.", "Agree a fair schedule (by route, lottery or planting need) and rotate first place.", "Set fees, payment timing and a maintenance fund.", "Name the operator and keep a logbook; agree what happens if it breaks."],
          words: [["Hire service", "a provider who brings a tractor or machine and does the work for a fee."], ["Maintenance fund", "money set aside from fees to pay for repairs and servicing."], ["Logbook", "a record of a machine's hours, fuel, fields served and repairs."]],
          slides: [
            { title: "Hire or buy?", bullets: ["Buying: big cost, fuel, repairs, operator", "Most small groups start by hiring together", "Small shared machines: thresher, sheller, mill"] },
            { title: "A fair schedule", bullets: ["List fields, sizes and dates needed", "Order by route, lottery or planting need", "Rotate who goes first each season"] },
            { title: "Fees and care", bullets: ["Fee per acre or hour (example figures only)", "Maintenance fund for repairs", "Trained operator; logbook of hours and fuel"] }
          ],
          sources: [FAO_MECH],
          tryIt: "Choose the machine or hire service your group needs. List five members' fields, sizes and dates, then write a booking schedule, the fee per acre, a maintenance fund rule if you own the machine, and what happens if it breaks.",
          youCanNow: "write a fair plan to hire or share a tractor or machine, with schedule, fees and maintenance.",
          quickCheck: [
            { objective: "O3", q: "Why do many small groups hire a tractor service instead of buying one?", options: ["Hiring is always free", "Tractors cannot be bought in Africa", "Buying needs a lot of money, repairs, an operator and enough work", "Hire services never come on time"], answer: 2, why: "Owning a tractor brings big costs and needs; group hire can give access without them." },
            { objective: "O3", q: "What is a maintenance fund for?", options: ["Paying the chair a salary", "Paying for repairs so the machine keeps working", "Buying seed", "Paying for meetings"], answer: 1, why: "Setting aside money for repairs stops breakdowns from ending the season." }
          ]
        },
        {
          title: "Bulk buying, bargaining and avoiding fake inputs",
          objectives: ["O4"],
          minutes: 6,
          goal: "Plan a bulk purchase of seed or fertilizer, compare three quotes and check the inputs are genuine.",
          text: [
            "Collect orders first: each member's name, the input, the quantity and the deposit paid, all written in an order book and read back. Add up the total. A large, sure order gives you power to bargain. Ask at least three registered suppliers (agro-dealers, distributors or companies) for a written quote: price per bag, delivery to your village, the date, the brand and variety, and any discount for the full load.",
            "Bargain on more than price: free or cheaper delivery, a delivery date before planting, a free demonstration or training, part payment on delivery, and a receipt in the group's name. Compare quotes on the total cost delivered, not just the bag price. Never hand all the money to one person in cash; pay from the group account against a receipt.",
            "Fake seed, fertilizer and pesticide are a real risk. Buy only from registered dealers. Check seals, labels, batch numbers and dates, and that bags are not torn or re-sewn. In Kenya, certified seed is controlled by KEPHIS; in Nigeria, the National Agricultural Seeds Council (NASC) tells farmers to buy from registered agro-dealers and look for its certification tag; in Ghana, the Plant Protection and Regulatory Services Directorate (PPRSD) regulates seed and fertilizer under the Plants and Fertilizer Act. Pesticides must be on your national register. Keep receipts and a small sample, and report fakes to the national body."
          ],
          steps: ["Collect each member's order and deposit in an order book; read it back.", "Get written quotes from at least three registered suppliers.", "Bargain on price, delivery, date, training and payment terms.", "Compare the total delivered cost and choose; pay from the group account against a receipt.", "On delivery, check seals, labels, batch numbers and certification tags; share out with a receipt per member."],
          words: [["Bulk buying", "buying a large amount together to get a lower price or better terms."], ["Quote", "a supplier's written price and terms before you buy."], ["Agro-dealer", "a shop or trader that sells seed, fertilizer and other farm inputs."], ["Certified seed", "seed checked by the national seed body to be the right variety and quality."]],
          slides: [
            { title: "Collect orders first", bullets: ["Name, input, quantity, deposit", "Written in an order book and read back", "A big, sure order gives bargaining power"] },
            { title: "Three quotes, then bargain", bullets: ["At least three registered suppliers, in writing", "Price, delivery, date, training, payment terms", "Compare total delivered cost; receipt in group name"] },
            { title: "Avoid fake inputs", bullets: ["Registered dealers only; check seals, labels, dates", "Kenya: KEPHIS; Nigeria: NASC tag; Ghana: PPRSD", "Pesticides on the national register; report fakes"] }
          ],
          sources: [KEPHIS_SEED, NASC_FAKE, GH_ACT803, FAO_PEST_REG],
          tryIt: "Make an order sheet for at least five members (name, input, quantity, deposit). Write the questions you will ask three registered suppliers, and a delivery-day checklist for spotting fake seed or fertilizer.",
          youCanNow: "plan a bulk input purchase, bargain with three suppliers and check that seed and fertilizer are genuine.",
          quickCheck: [
            { objective: "O4", q: "How should you compare supplier quotes?", options: ["Only the bag price", "Which supplier is a friend", "Which has the biggest shop", "The total cost delivered, plus date, quality and terms"], answer: 3, why: "A low bag price can hide high transport or late delivery; compare the full deal." },
            { objective: "O4", q: "On delivery, some seed bags look re-sewn and have no certification tag. What do you do?", options: ["Refuse them, keep evidence and report to the seed body", "Accept them to save time", "Share them out quietly", "Mix them with good seed"], answer: 0, why: "Re-sewn, untagged bags are signs of fake seed; refuse, keep evidence and report." }
          ]
        },
        {
          title: "Keeping trust: open records and handling conflict",
          objectives: ["O5"],
          minutes: 5,
          goal: "Keep open records of pooled money and settle a disagreement using agreed steps.",
          text: [
            "Groups rarely fail for lack of ideas; they fail when members stop trusting where the money went. Make every shilling, naira, cedi or franc easy to follow: an order book for deposits, a receipt for every payment in and out, payments from a group account that two people approve, and a machine logbook if you share one.",
            "Make records open. Read the money summary aloud at every meeting: money in, money out, balance, and what was bought for whom. Post the order list and schedule where members can see them, or share a photo in the group chat. Let any member look at the books. Change who handles money from time to time.",
            "Disagreements will happen: someone gets the tractor late, a bag is missing, a member does not pay. Use the steps in your rules: first talk directly; then the committee hears both sides and checks the records; then the whole group decides; and if needed, ask a respected outsider such as the extension officer, chief or a cooperative officer. Decide on the facts in the records, not on who is louder. Make sure women and youth can raise problems too, and that their complaints are heard."
          ],
          steps: ["Keep an order book, receipts, a group account with two approvers and a logbook.", "Read the money summary aloud at every meeting.", "Post lists and schedules where members can see them.", "Settle disagreements by the agreed steps, using the records.", "Rotate money posts and make sure everyone can raise a problem."],
          words: [["Transparency", "keeping money and decisions open so every member can see them."], ["Mediator", "a respected, neutral person who helps two sides settle a disagreement."], ["Balance", "the money left after money out is taken from money in."]],
          slides: [
            { title: "Trust follows the money", bullets: ["Order book and receipts for everything", "Group account; two approvers", "Machine logbook if you share one"] },
            { title: "Make records open", bullets: ["Read money in, out and balance aloud", "Post lists and schedules; share a photo", "Any member can see the books"] },
            { title: "Settle disagreements", bullets: ["Talk directly; committee hears both sides", "Whole group decides; outside mediator if needed", "Decide on the records; hear women and youth"] }
          ],
          tryIt: "Final task: write your bulk-input purchase plan or machinery-sharing agreement. Include the members, the records you will keep and read aloud, the steps for settling disagreements, and the posts women and youth will hold.",
          youCanNow: "keep pooled money open and traceable, settle disagreements fairly and keep everyone's trust.",
          quickCheck: [
            { objective: "O5", q: "What builds the most trust in a group that pools money?", options: ["The treasurer keeps the books at home", "Reading money in, out and balance aloud at every meeting", "Paying suppliers in cash with no receipt", "Only the chair knows the balance"], answer: 1, why: "Open records let every member see where the money went." },
            { objective: "O5", q: "A member says she got the tractor last again. What is the first step?", options: ["Remove her from the group", "Ignore it", "Talk directly, then check the schedule and records", "Give her money back and close the group"], answer: 2, why: "Following the agreed steps and checking the records settles it fairly." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Pooling, buying together and keeping trust",
        questions: [
          { objective: "O3", q: "What is a hire service?", options: ["A group savings account", "A provider who brings a machine and does the work for a fee", "A seed company", "A bank loan"], answer: 1, why: "A hire service lets farmers use a tractor or machine without owning it." },
          { objective: "O3", q: "Everyone wants the tractor on the same three days. What is fair?", options: ["The chair's friends go first", "Whoever shouts loudest", "Whoever pays extra in secret", "An agreed order by route, lottery or planting need, rotating each season"], answer: 3, why: "An agreed, rotating order is fair and saves fuel and travel." },
          { objective: "O4", q: "Why collect orders and deposits before talking to suppliers?", options: ["To spend the money early", "To avoid writing anything down", "A big, sure order gives bargaining power", "Suppliers ask for members' PINs"], answer: 2, why: "Suppliers give better terms when they know the order is real and large." },
          { objective: "O4", q: "Which is a sign of fake fertilizer or seed?", options: ["Torn or re-sewn bags with no label or tag", "A sealed bag with a batch number", "A receipt from a registered dealer", "A certification tag"], answer: 0, why: "Broken seals and missing labels or tags are warning signs of fake inputs." },
          { objective: "O5", q: "Who should approve payments from the group account?", options: ["Anyone who asks", "The supplier", "One person alone", "Two agreed signatories"], answer: 3, why: "Two approvers make it harder for money to be misused." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Community Mobilization: Pooling Machinery and Bargaining for Inputs",
    questions: [
      { objective: "O1", q: "What is community mobilization?", options: ["Moving to the city", "Bringing people together to act on a shared need", "Buying a phone", "Selling crops alone"], answer: 1, why: "Mobilization means organising people around a need they share." },
      { objective: "O1", q: "How many households should you ask at least when mapping needs?", options: ["One", "Two", "Only the leaders", "Ten"], answer: 3, why: "Asking at least ten households gives a fair picture of shared needs." },
      { objective: "O1", q: "Why include young farmers in the needs map?", options: ["Their problems may differ, such as no land title or being served last", "They have more money", "They own all the tractors", "It is not needed"], answer: 0, why: "Youth and women can face different barriers that the group should solve too." },
      { objective: "O1", q: "After counting answers, what do you do?", options: ["Throw the sheet away", "Choose the leader's favourite", "Rank the top three shared needs", "Start collecting money"], answer: 2, why: "Ranking shows which needs most households share." },
      { objective: "O2", q: "What should the invitation to the first meeting include?", options: ["A list of members' debts", "Nothing, just the time", "A demand for money", "A one-sentence purpose, time and place"], answer: 3, why: "A clear purpose tells people why it is worth coming." },
      { objective: "O2", q: "What is an agenda?", options: ["The list of things a meeting will discuss, in order", "A tractor booking", "A supplier quote", "A bank statement"], answer: 0, why: "An agenda keeps the meeting short and on track." },
      { objective: "O2", q: "Which goal is clearest?", options: ["Do better this year", "Help everyone", "Every member's field ploughed within two weeks of the first rains", "Get machines one day"], answer: 2, why: "It names a result and a time, so the group can see if it succeeded." },
      { objective: "O2", q: "Which rule should be agreed before money is collected?", options: ["The colour of the group's shirts", "How a member can leave and get their money back", "Where the chair lives", "Which radio station to listen to"], answer: 1, why: "Rules on leaving and refunds prevent disputes when money is pooled." },
      { objective: "O3", q: "Which is usually the first step to machinery for a small group?", options: ["Buying a large tractor on credit", "Building a factory", "Each member buying a tractor", "Hiring a tractor service together"], answer: 3, why: "Group hire gives access without the big costs of ownership." },
      { objective: "O3", q: "What does a machine logbook record?", options: ["Members' birthdays", "Hours, fuel, fields served and repairs", "Crop prices", "Meeting attendance"], answer: 1, why: "A logbook shows how the machine is used and maintained." },
      { objective: "O3", q: "Ploughing late usually leads to:", options: ["Higher yields", "No change", "Lower yields", "Free fertilizer"], answer: 2, why: "Late ploughing and planting cost yield, which is why fair scheduling matters." },
      { objective: "O3", q: "A group owns a maize sheller. Where does repair money come from?", options: ["A maintenance fund set aside from fees", "The chair's own pocket", "The supplier", "Nowhere; stop using it"], answer: 0, why: "A maintenance fund from fees keeps the machine working." },
      { objective: "O4", q: "How many written supplier quotes should you compare at least?", options: ["Three", "One", "None", "Twenty"], answer: 0, why: "Three quotes show a fair price and give you room to bargain." },
      { objective: "O4", q: "Besides price, what can you bargain for?", options: ["The supplier's family name", "Members' PINs", "Delivery to the village before planting", "A higher price"], answer: 2, why: "Delivery, timing, training and payment terms are worth as much as the bag price." },
      { objective: "O4", q: "In Nigeria, which body warns about fake seed and uses a certification tag?", options: ["KEPHIS", "The National Agricultural Seeds Council (NASC)", "PPRSD", "KEBS"], answer: 1, why: "NASC tells farmers to buy from registered agro-dealers and look for its certification tag." },
      { objective: "O4", q: "How should the group pay the supplier?", options: ["Cash handed to one member", "Into a stranger's account", "Without any receipt", "From the group account, against a receipt in the group's name"], answer: 3, why: "Group payments with receipts keep the money traceable." },
      { objective: "O5", q: "Why read the money summary aloud at meetings?", options: ["To fill time", "To embarrass members", "Because the law requires singing", "So members who cannot read also see where money went"], answer: 3, why: "Reading aloud makes records open to every member." },
      { objective: "O5", q: "Who can help if the committee cannot settle a dispute?", options: ["A respected outsider such as an extension or cooperative officer", "The supplier", "Nobody", "The loudest member"], answer: 0, why: "A neutral mediator can help both sides agree." },
      { objective: "O5", q: "What should decisions in a dispute be based on?", options: ["Who is older", "Who shouts more", "The facts in the records", "Rumours"], answer: 2, why: "Records show what really happened, so decisions are fair." },
      { objective: "O5", q: "Which helps women and youth take part?", options: ["Posts only for household heads", "Real posts such as treasurer or booking agent", "Meetings at night far away", "Membership only with land title"], answer: 1, why: "Giving women and youth real roles builds trust and a stronger group." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part of the plan and try again.",
    criteria: [
      { name: "Needs map", objective: "O1", notYet: "The need is the leader's guess, or fewer than ten households were asked.", meets: "At least ten households asked, including women and youth, with the top three needs ranked.", exceeds: "Includes a simple village map of farms, roads, input shops and machines." },
      { name: "Goal and rules", objective: "O2", notYet: "No clear goal, or no written rules on money and leaving.", meets: "A goal with a number and a date, and written rules on joining, decisions, money, failing to pay and leaving, agreed in the minutes.", exceeds: "Rules were read aloud and members' agreement is recorded by name." },
      { name: "Machinery plan", objective: "O3", notYet: "No schedule or fees, or no plan if the machine breaks.", meets: "Hire or buy decided, a fair schedule, fees, a maintenance fund or hire terms, an operator and a breakdown rule.", exceeds: "A hire provider or machine owner has confirmed the plan, and first place rotates by season." },
      { name: "Bulk purchase plan", objective: "O4", notYet: "No order book, fewer than three quotes, or no check for fake inputs.", meets: "Orders and deposits recorded, three written quotes compared on delivered cost, payment by group account and a delivery-day check for genuine inputs.", exceeds: "Shows what was won in bargaining (price, delivery, training) and names the body to report fakes to." },
      { name: "Trust and inclusion", objective: "O5", notYet: "Records are kept by one person only, or women and youth have no role.", meets: "Open records read aloud, agreed steps for disagreements, and named posts for women and youth.", exceeds: "Money posts rotate, and women and youth hold at least one leadership post." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Groups that complete a bulk input purchase or machinery-sharing season within 6 months (follow-up survey)",
      "Members who report paying less per bag or getting ploughing earlier than when alone",
      "Groups with no unresolved money disputes after one season, with records read aloud at meetings",
      "Share of group posts held by women and by young members"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A basic phone for calls, SMS and mobile money; a smartphone helps with photos of lists",
      "A notebook for the needs map, minutes, order book and logbook",
      "Simple rule and order-sheet templates (the facilitator can copy them from the lessons)",
      "Sample seed and fertilizer bags or labels to practise spotting fakes",
      "About 90 minutes in total, in short sessions, plus time to visit households and suppliers"
    ],
    facilitatorNotes: [
      "Run the course with a real village or group: do the needs map and the first meeting for real, between sessions.",
      "Hold sessions at times women and youth can attend, and invite them to chair or take minutes.",
      "Bring real input bags or labels and ask the national seed or plant-protection body (KEPHIS, NASC, PPRSD or your country's body) how to check them; do not quote fees or prices from memory.",
      "Role-play a supplier bargaining session and a dispute over a late tractor booking, using sample records.",
      "Score the final task with the rubric; when the group is ready to register formally, point them to Farmer Cooperatives and Getting to Market."
    ]
  }
};
