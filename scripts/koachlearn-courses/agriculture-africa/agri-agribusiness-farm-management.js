"use strict";

// Koach Learn course: Agriculture (Africa) -> "Agribusiness and Farm Management".
// For smallholder farmers, young agripreneurs, cooperative leaders and extension officers: running a farm as a business: records, gross margins, markets,
// mobile money and cash flow, credit and risk, and a one-page business plan. All money figures are clearly marked examples; no investment advice;
// lenders and insurers must be checked with the official regulator.

const CBK = { name: "Central Bank of Kenya (see its lists of licensed institutions)", url: "https://www.centralbank.go.ke" };
const CBN = { name: "Central Bank of Nigeria (consumer protection and licensed institutions)", url: "https://www.cbn.gov.ng" };
const FAO_CSA = { name: "FAO: Climate-Smart Agriculture Sourcebook (farm risk management)", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };

module.exports = {
  id: "agri-agribusiness-farm-management",
  category: "Agriculture (Africa)",
  name: "Agribusiness and Farm Management",
  skills: "Keeping simple farm records, Calculating a gross margin for each crop or animal, Finding markets and getting better prices, Managing cash flow with mobile money, Judging the cost of credit and managing risk, Writing a one-page farm business plan",
  outcome: "run your farm as a business: keep records, work out which crops or animals earn the most per acre, plan your cash through the year, judge whether a loan makes sense, and write a one-page farm business plan you can show a cooperative, lender or partner.",
  about: [
    "This course is for smallholder farmers, young agripreneurs, women's and youth groups, cooperative leaders and extension officers in Kenya, Nigeria and across Africa who want their farm to earn more and be less risky.",
    "Chapter 1 treats the farm as a business: keeping simple records, calculating the gross margin of each enterprise (such as maize, beans, tomatoes, poultry or dairy), and finding markets and better prices. Chapter 2 is about money and growth: using mobile money to manage cash flow, deciding whether to borrow and how to manage risk, and writing a one-page business plan.",
    "All money examples in this course are made-up numbers to show the method; use your own local prices. This course does not give investment or lending advice: before borrowing, compare offers, check the lender is licensed, and talk to a trusted adviser such as your cooperative, SACCO or extension officer. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Write a one-page business plan for your farm (or an example farm): what you produce and on how much land, gross margins for at least two enterprises (with your own local prices and costs), who you will sell to and how, a 12-month cash-flow outline showing when money comes in and goes out, any loan you are considering with its total cost and how you would repay it, your main risks and how you will reduce them, and three goals for next season.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Smallholder farmers, young agripreneurs, women's and youth groups, cooperative leaders and extension officers in Kenya, Nigeria and across Africa who want their farm to earn more and be less risky.",
    startingPoint: "Know how to grow crops and keep animals and roughly what they spend and earn. Few keep written records, calculate gross margins, plan cash flow through the year or compare the full cost of loans.",
    gap: "Without records and numbers, farmers cannot see which enterprise pays, run short of cash in hungry months, sell at the lowest prices and may take loans they cannot repay. A simple business approach helps them earn more, borrow safely and show lenders and buyers a clear plan.",
    constraints: [
      "Reading level: plain words and short sentences; many learners use English as a second language",
      "Devices: a notebook or a basic phone; a phone spreadsheet helps but is optional",
      "Math: adding, subtracting and simple totals; example numbers are made up, and learners use their own local prices",
      "Money safety: never share mobile money PINs or codes, and use only licensed lenders",
      "Prices, lenders and regulators differ by country and season: learners check with cooperatives, extension officers and official regulators"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Using a notebook or phone spreadsheet", action: "keep records of farm money in, money out and production", standard: "writing each item the same day, including family labour days" },
    { id: "O2", condition: "Given yields, prices and variable costs", action: "calculate the gross margin per acre of two enterprises and compare them", standard: "with correct math and risk and labour considered, not just the margin" },
    { id: "O3", condition: "Given your main crop", action: "compare at least three ways to sell and choose the best one", standard: "with prices from several buyers, the quality each needs, and any contract's terms in writing" },
    { id: "O4", condition: "For the next 12 months", action: "plan your farm's cash flow and use mobile money safely", standard: "marking the hungry months with a plan for each and never sharing a PIN or code" },
    { id: "O5", condition: "Given a loan offer", action: "calculate the total cost of the loan and decide whether it fits your cash flow", standard: "adding every fee and checking the lender is licensed" },
    { id: "O6", condition: "Using your records and numbers", action: "write a one-page farm business plan with your main risks and how you will reduce them", standard: "with every required part and three goals with numbers" }
  ],
  chapters: [
    {
      name: "Chapter 1: The farm as a business",
      lessons: [
        {
          objectives: ["O1"],
          title: "Keeping simple farm records",
          minutes: 5,
          goal: "Start a simple record of farm money in, money out and production.",
          text: [
            "You cannot manage what you do not measure. Many farmers know roughly what they spend and earn, but without records it is hard to see which crop pays, to plan, or to get a loan or a buyer contract.",
            "Keep three simple records. Money out: date, what for (seed, fertilizer, labour, transport, vet), which crop or animal, amount. Money in: date, what you sold, how much, to whom, amount. Production: planting dates, inputs used, harvest per plot, eggs or milk per day. A notebook works; so does a phone spreadsheet. Mobile money statements also help you remember.",
            "Write records the same day. Keep farm money separate from household money in your records, even if they come from the same pocket, and count family labour days too, because your time has value."
          ],
          steps: ["Choose a notebook or phone spreadsheet.", "Make three pages or sheets: money out, money in, production.", "Record each item the same day: date, what, which crop or animal, amount.", "Use mobile money statements to fill gaps.", "Count family labour days as well as paid labour."],
          words: [["Record keeping", "writing down what happens on the farm: money, inputs and production."], ["Enterprise", "one activity on the farm, such as maize, beans, poultry or dairy."]],
          slides: [
            { title: "Why records?", bullets: ["See which crop pays", "Plan the season", "Get a loan or buyer contract"] },
            { title: "Three simple records", bullets: ["Money out: date, what, which enterprise, amount", "Money in: date, what sold, to whom, amount", "Production: planting, inputs, harvest, eggs, milk"] },
            { title: "Good habits", bullets: ["Write it the same day", "Farm money separate from household", "Count family labour too"] }
          ],
          tryIt: "Start your records today. Make the three sheets and fill in at least five items from the last month from memory and your mobile money statement.",
          youCanNow: "keep simple records of money in, money out and production for each farm enterprise.",
          quickCheck: [
            { objective: "O1", q: "What are the three simple farm records in this course?", options: ["Money out, money in and production", "Weather, prices and news", "Names, phones and addresses", "Seeds, tools and buildings"], answer: 0, why: "These three records show what you spend, earn and produce." },
            { objective: "O1", q: "You forgot to write last week's fertilizer purchase. What can help you remember?", options: ["Guess a number", "Your mobile money statement", "Leave it out", "Ask the AI to invent it"], answer: 1, why: "Mobile money statements help fill gaps in your records." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Gross margin: which crop pays best?",
          minutes: 6,
          goal: "Calculate the gross margin per acre of two enterprises and compare them.",
          text: [
            "Gross margin = income from an enterprise minus the costs that belong to it (variable costs: seed, fertilizer, chemicals, hired labour, bags, transport). Work it out per acre (or per hectare, or per 100 birds) so you can compare enterprises fairly.",
            "Example with made-up numbers in Kenya shillings, one acre each. Maize: 18 bags at 3,500 = 63,000 income; costs 34,000 (seed 3,000, fertilizer 14,000, labour 12,000, chemicals 2,000, bags and transport 3,000); gross margin 29,000. Beans: 5 bags at 9,000 = 45,000 income; costs 18,000; gross margin 27,000. The margins are close, but beans also add nitrogen and are harvested sooner. Use your own prices: they differ by place and season.",
            "Also compare margin per day of labour and the risk: a crop with a high margin but a high chance of failure may not be the best choice. Fixed costs (land rent, tools, a water tank) are covered by the total of all gross margins."
          ],
          steps: ["Pick two enterprises.", "Write expected yield and price per unit to get income.", "List variable costs for each.", "Gross margin = income - variable costs, per acre.", "Compare margin, labour and risk."],
          words: [["Gross margin", "income from one enterprise minus the costs that belong to it."], ["Variable costs", "costs that change with how much you grow, such as seed, fertilizer and labour."], ["Fixed costs", "costs that stay the same whatever you grow, such as land rent or a water tank."]],
          slides: [
            { title: "The formula", bullets: ["Gross margin = income - variable costs", "Per acre, hectare or 100 birds"] },
            { title: "Example (made-up KSh, 1 acre)", bullets: ["Maize: 63,000 - 34,000 = 29,000", "Beans: 45,000 - 18,000 = 27,000", "Use your own local prices"] },
            { title: "Also compare", bullets: ["Margin per labour day", "Risk of failure", "Fixed costs paid from all margins"] }
          ],
          tryIt: "Calculate the gross margin per acre for two enterprises on your farm (or two you are considering) using your local prices. Which is higher, and which has more risk?",
          youCanNow: "calculate and compare gross margins to decide what to grow or keep.",
          quickCheck: [
            { objective: "O2", q: "Which is a fixed cost, not a variable cost?", options: ["Seed", "Fertilizer", "A water tank", "Hired labour for weeding"], answer: 2, why: "A water tank is paid whatever you grow, so it is a fixed cost." },
            { objective: "O2", q: "Tomatoes earn 50,000 per acre and cost 30,000 in variable costs. What is the gross margin?", options: ["80,000", "30,000", "50,000", "20,000"], answer: 3, why: "Gross margin is income minus variable costs: 50,000 - 30,000 = 20,000." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Finding markets and better prices",
          minutes: 5,
          goal: "Compare at least three ways to sell and choose the best one for a crop.",
          text: [
            "Prices often fall right after harvest, when everyone sells, and rise months later. Selling alone in small amounts to the first trader at the farm gate is easy but often pays least. Compare: local market, traders, cooperatives that bulk produce, processors and schools or hotels, contract farming with a buyer, and, where available, certified warehouses that store grain and may help farmers access credit against it.",
            "Find price information: ask several buyers, check market price services and radio, and talk to your cooperative. Know the buyer's quality standard (moisture, grading, size, cleanliness) and meet it: clean, dry, sorted produce earns more and keeps longer.",
            "Contracts can give a sure market, but read the terms: price or how it is set, quantity, quality standard, delivery dates, who pays transport, payment date and method, and what happens if the harvest fails. Get it in writing and ask your cooperative or extension officer to check it."
          ],
          steps: ["List at least three ways to sell your crop.", "Get prices from several buyers and market information services.", "Learn each buyer's quality standard.", "Consider bulking with a group or storing for a better price.", "Read any contract's terms and get it in writing."],
          words: [["Bulking", "putting many farmers' produce together to sell larger amounts at better prices."], ["Contract farming", "an agreement to grow and sell produce to a buyer on set terms."], ["Quality standard", "the buyer's rules for moisture, size, grade and cleanliness."]],
          slides: [
            { title: "Timing matters", bullets: ["Prices often low right after harvest", "Higher months later", "Storage and bulking can help"] },
            { title: "Ways to sell", bullets: ["Market, traders, cooperatives", "Processors, schools, hotels", "Contracts, certified warehouses"] },
            { title: "Get paid more", bullets: ["Compare several prices", "Meet the quality standard", "Read contracts; get them in writing"] }
          ],
          tryIt: "For your main crop, write three ways you could sell it, the price each would pay today (ask or estimate), the quality each needs, and which you will choose and why.",
          youCanNow: "compare markets and choose the best way to sell a crop.",
          quickCheck: [
            { objective: "O3", q: "What is bulking?", options: ["Selling together as a group to get larger amounts", "Adding water to grain", "Buying seed in small packets", "Storing grain in the house"], answer: 0, why: "Bulking with a cooperative or group makes larger lots that can get better prices." },
            { objective: "O3", q: "A buyer wants your beans but says nothing about when they will pay. What do you do?", options: ["Deliver and hope", "Ask for the payment date and method in writing", "Sell to them anyway", "Lower your price"], answer: 1, why: "A contract should set the payment date and method in writing." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: The farm as a business",
        questions: [
          { objective: "O1", q: "Why keep farm records?", options: ["They are only for tax officers", "To see which enterprise pays, plan, and get loans or contracts", "To fill time", "Records are not useful"], answer: 1, why: "Records turn guesses into decisions." },
          { objective: "O2", q: "Gross margin is:", options: ["Total farm land", "Income minus variable costs for one enterprise", "The price of fertilizer", "Money borrowed"], answer: 1, why: "It shows what each enterprise earns before fixed costs." },
          { objective: "O2", q: "Which is a variable cost?", options: ["Seed", "Land you own", "A water tank already built", "Your house"], answer: 0, why: "Seed changes with how much you plant." },
          { objective: "O3", q: "A buyer offers a contract. What should you check?", options: ["Only the buyer's name", "Nothing; contracts are always fair", "Only the colour of the bags", "Price, quantity, quality, delivery, payment and what happens if the harvest fails"], answer: 3, why: "The terms decide whether the contract helps you." },
          { objective: "O3", q: "Why do prices often fall right after harvest?", options: ["Crops shrink", "Buyers stop eating", "Many farmers sell at the same time", "The government sets them low"], answer: 2, why: "High supply at harvest pushes prices down." }
        ]
      }
    },
    {
      name: "Chapter 2: Money, risk and growth",
      lessons: [
        {
          objectives: ["O4"],
          title: "Mobile money and cash flow",
          minutes: 5,
          goal: "Plan a 12-month cash flow and use mobile money safely for the farm.",
          text: [
            "Many farms have money problems not because they make a loss, but because money comes in once or twice a year and goes out all year. A cash-flow plan shows, month by month, money expected in and out, so you can see the hungry months coming and plan.",
            "Mobile money (such as M-Pesa in Kenya, and mobile wallets and bank apps in Nigeria) makes it easier to pay workers and suppliers, receive buyer payments, save, and keep a record. Some farmers keep a separate wallet or account for the farm so farm and household money do not mix.",
            "Stay safe: never share your PIN or one-time code with anyone, including people who say they are from the mobile money company or a buyer; check the name before you send; and be careful with unexpected \"wrong transfer\" messages asking you to send money back. Report problems to the provider through its official channels."
          ],
          steps: ["Draw 12 month columns.", "Write expected money in each month (sales, other income).", "Write expected money out (inputs, labour, school fees, food).", "Find the months where out is bigger than in, and plan savings or timing.", "Use a separate wallet or account for farm money; never share your PIN."],
          words: [["Cash flow", "the timing of money coming in and going out."], ["Hungry months", "months when money or food runs short, often before harvest."], ["PIN", "the secret number that protects your mobile money account."]],
          slides: [
            { title: "Cash flow, not just profit", bullets: ["Money in once or twice a year", "Money out all year", "Plan for the hungry months"] },
            { title: "Mobile money helps", bullets: ["Pay workers and suppliers", "Receive buyer payments", "Save and keep a record"] },
            { title: "Stay safe", bullets: ["Never share PIN or code", "Check the name before sending", "Beware \"wrong transfer\" tricks"] }
          ],
          tryIt: "Draw your 12-month cash-flow plan with money in and money out. Circle the hungry months and write one way to prepare for each (save from harvest, stagger sales, a small off-season enterprise).",
          youCanNow: "plan your farm's cash flow through the year and use mobile money safely.",
          quickCheck: [
            { objective: "O4", q: "What does a 12-month cash-flow plan help you see?", options: ["Which crop grows tallest", "The weather each month", "The hungry months before they come", "Your neighbours' income"], answer: 2, why: "It shows the months when money out is bigger than money in." },
            { objective: "O4", q: "School fees are due in a month with no harvest sales. What is one way to prepare?", options: ["Spend all the harvest money at once", "Take any loan offered by text", "Ignore it until then", "Save part of the harvest money or stagger sales"], answer: 3, why: "Saving from harvest or staggering sales covers the hungry months." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Credit and risk: borrowing wisely",
          minutes: 6,
          goal: "Work out the total cost of a loan and decide whether it makes sense for the farm.",
          text: [
            "A loan can help buy inputs or equipment that earn more than they cost. It can also become a trap. Before borrowing, ask: what will the money buy, how much extra will it earn, and when? Will you be able to repay on the dates the lender sets, even if the harvest is poor?",
            "Compare offers by the total amount you will repay, not just the interest rate: add all interest, fees and insurance charges. For example (made-up numbers), borrowing 20,000 and repaying 2,000 a month for 12 months means repaying 24,000: the loan costs 4,000. Check the repayment dates fit when your money comes in. Short digital loans can be very expensive when you add up the fees.",
            "Use licensed lenders: banks, microfinance banks, SACCOs and cooperatives, and digital lenders approved by the central bank or the right regulator (in Kenya, the Central Bank of Kenya lists licensed institutions; in Nigeria, the Central Bank of Nigeria). Reduce risk with savings, diversified crops, insurance where available, and by borrowing only what the plan needs. Talk to a trusted adviser before signing."
          ],
          steps: ["Write what the loan will buy and how much extra it should earn.", "Add up the total you will repay: interest, fees, insurance.", "Check repayment dates against your cash-flow plan.", "Check the lender is licensed.", "Plan for a bad season: savings, insurance, smaller loan.", "Ask a trusted adviser before signing."],
          words: [["Interest", "the price you pay to borrow money."], ["Total cost of credit", "everything you pay back above what you borrowed: interest plus fees and charges."], ["SACCO", "a savings and credit cooperative owned by its members."], ["Collateral", "something you promise the lender if you cannot repay."]],
          slides: [
            { title: "Before you borrow", bullets: ["What will it buy?", "How much extra will it earn, and when?", "Can you repay if the harvest is poor?"] },
            { title: "Compare the total", bullets: ["Interest + fees + insurance", "Borrow 20,000, repay 24,000: cost 4,000", "Repayments match your cash flow?"] },
            { title: "Use licensed lenders", bullets: ["Banks, microfinance, SACCOs, cooperatives", "Kenya: CBK lists; Nigeria: CBN", "Talk to a trusted adviser first"] }
          ],
          sources: [CBK, CBN],
          tryIt: "Take a real or example loan offer. Write the amount borrowed, every repayment and fee, the total repaid and the total cost. Then check the repayment months against your cash-flow plan and write whether it makes sense.",
          youCanNow: "work out the true cost of a loan and judge whether borrowing makes sense for your farm.",
          quickCheck: [
            { objective: "O5", q: "How should you compare two loan offers?", options: ["By the total amount you will repay, including all fees", "By how fast the money arrives", "By the interest rate only", "By the lender's advert"], answer: 0, why: "The total repaid shows the true cost of each loan." },
            { objective: "O5", q: "A loan's repayments start the month after planting, before harvest. What do you do?", options: ["Sign quickly", "Check it against your cash flow and ask for dates that fit when money comes in", "Borrow more to cover it", "Use your PIN to speed it up"], answer: 1, why: "Repayment dates should fit the months when your money comes in." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Writing a one-page farm business plan",
          minutes: 5,
          goal: "Write a one-page business plan you could show a cooperative, lender or partner.",
          text: [
            "A business plan is your farm's story in numbers and goals. Lenders, cooperatives, buyers and partners want to see that you know your farm, your market and your risks. One clear page is better than ten vague ones.",
            "Include: who you are and your farm (location, land, what you produce); your enterprises with their gross margins; your market (who buys, how, at what price); your cash-flow outline; what you need (inputs, equipment, a loan) and how it will pay back; your main risks (weather, pests, prices) and what you do about them; and three goals for next season with numbers.",
            "Keep your records and calculations behind the plan, so you can answer questions. Update it every season with what really happened."
          ],
          steps: ["Farm summary: location, land, enterprises.", "Gross margins for each enterprise.", "Market: buyers, channel, price.", "Cash-flow outline and what you need.", "Risks and how you manage them.", "Three goals with numbers; update each season."],
          words: [["Business plan", "a short document that explains what a business does, how it earns, what it needs and its goals."], ["Goal", "a clear target with a number and a date."]],
          slides: [
            { title: "Your farm's story in numbers", bullets: ["For lenders, cooperatives, buyers, partners", "One clear page beats ten vague ones"] },
            { title: "What goes in", bullets: ["Farm summary and enterprises", "Gross margins and market", "Cash flow, needs, payback"] },
            { title: "Finish strong", bullets: ["Risks and how you manage them", "Three goals with numbers", "Update every season"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Final task: write your one-page farm business plan with gross margins for two enterprises, market, 12-month cash flow, any loan and its total cost, risks and responses, and three goals for next season.",
          youCanNow: "write a one-page farm business plan backed by your own records and numbers.",
          quickCheck: [
            { objective: "O6", q: "Why keep records and calculations behind your one-page plan?", options: ["To make the plan longer", "Lenders do not read plans", "So you can answer questions about your numbers", "To hide your real income"], answer: 2, why: "Records back up your plan when a lender or buyer asks questions." },
            { objective: "O6", q: "Your maize did worse than planned this season. What do you do with your business plan?", options: ["Throw it away", "Keep the old numbers", "Only change the goals", "Update it with what really happened"], answer: 3, why: "A plan is updated every season with real results." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Money, risk and growth",
        questions: [
          { objective: "O4", q: "Why can a profitable farm still run short of money?", options: ["Profit is not real", "Money comes in once or twice a year but goes out all year", "Mobile money loses it", "Records cause it"], answer: 1, why: "Cash-flow timing, not profit alone, decides whether you can pay bills." },
          { objective: "O4", q: "Someone calling from \"your mobile money provider\" asks for your PIN. You should:", options: ["Give it quickly", "Give half of it", "Never share it; contact the provider through official channels", "Text it to them"], answer: 2, why: "Real providers never ask for your PIN." },
          { objective: "O5", q: "You borrow 20,000 and repay 2,000 a month for 12 months. The loan costs:", options: ["4,000", "2,000", "20,000", "Nothing"], answer: 0, why: "You repay 24,000, which is 4,000 more than you borrowed." },
          { objective: "O5", q: "Before taking a loan, check that the lender is:", options: ["Your neighbour's friend", "Very fast", "On social media", "Licensed by the central bank or the right regulator"], answer: 3, why: "Licensed lenders follow rules that protect borrowers." },
          { objective: "O6", q: "A good farm business plan is:", options: ["Long and vague", "One clear page backed by records and numbers", "Only a list of wishes", "Secret from everyone"], answer: 1, why: "Short and specific plans are easier to act on and trust." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Agribusiness and Farm Management",
    questions: [
      { objective: "O1", q: "Which is a simple farm record?", options: ["Money out: date, what, enterprise, amount", "A photo of the sky", "A list of songs", "Nothing written"], answer: 0, why: "Recording money out by enterprise shows costs." },
      { objective: "O1", q: "When should you write records?", options: ["Once a year", "The same day", "Only when asked", "Never"], answer: 1, why: "Same-day records are accurate." },
      { objective: "O1", q: "Why count family labour days?", options: ["They are free", "To pay taxes", "Your time has value and affects which enterprise pays", "It is not needed"], answer: 2, why: "Unpaid labour is still a real cost of time." },
      { objective: "O2", q: "An enterprise is:", options: ["A bank", "A tractor", "A market", "One activity on the farm, such as maize or poultry"], answer: 3, why: "Each enterprise is measured separately." },
      { objective: "O2", q: "Income 63,000, variable costs 34,000. Gross margin is:", options: ["29,000", "34,000", "63,000", "97,000"], answer: 0, why: "63,000 - 34,000 = 29,000." },
      { objective: "O2", q: "Why calculate gross margin per acre?", options: ["To make numbers bigger", "To compare enterprises fairly", "Because buyers ask", "To pay rent"], answer: 1, why: "Same unit of land makes comparison fair." },
      { objective: "O2", q: "Land rent you pay whatever you grow is a:", options: ["Variable cost", "Gross margin", "Fixed cost", "Sale"], answer: 2, why: "Fixed costs do not change with how much you grow." },
      { objective: "O2", q: "Two crops have similar margins, but one fails often. You should:", options: ["Ignore risk", "Grow only the risky one", "Choose by colour", "Consider risk as well as margin"], answer: 3, why: "A high margin is worth less if failure is likely." },
      { objective: "O3", q: "Bulking with a cooperative helps because:", options: ["Larger amounts can get better prices", "Crops grow faster", "No quality is needed", "Buyers pay less"], answer: 0, why: "Buyers pay more for large, steady supply." },
      { objective: "O3", q: "Clean, dry, sorted produce:", options: ["Earns less", "Earns more and keeps longer", "Is not wanted", "Spoils faster"], answer: 1, why: "Meeting quality standards raises price and storage life." },
      { objective: "O3", q: "Before signing a contract-farming deal you should:", options: ["Sign at once", "Agree by phone only", "Read the terms and get it in writing", "Ask the buyer to decide everything"], answer: 2, why: "Written terms protect you." },
      { objective: "O4", q: "A cash-flow plan shows:", options: ["Only total profit", "Crop varieties", "Rainfall", "Money in and out month by month"], answer: 3, why: "Timing of money is what cash flow means." },
      { objective: "O4", q: "Hungry months are:", options: ["Months when money or food runs short", "Harvest months", "Holidays", "Market days"], answer: 0, why: "Planning for them avoids crisis borrowing or sales." },
      { objective: "O4", q: "A benefit of a separate farm wallet or account is:", options: ["Higher prices", "Farm and household money do not mix", "No need for records", "Free fertilizer"], answer: 1, why: "Separation shows what the farm really earns and spends." },
      { objective: "O4", q: "A message says you received money by mistake and asks you to send it back. You should:", options: ["Send it at once", "Send double", "Check your real balance and statement, and contact the provider through official channels", "Share your PIN"], answer: 2, why: "Fake \"wrong transfer\" messages are a common trick." },
      { objective: "O5", q: "To compare loans, look at:", options: ["Only the advert", "Only the interest rate", "Only how fast it is paid out", "The total amount you will repay, including all fees"], answer: 3, why: "Fees can make a low-rate loan expensive." },
      { objective: "O5", q: "A SACCO is:", options: ["A savings and credit cooperative owned by members", "A crop pest", "A government tax", "A drone"], answer: 0, why: "SACCOs pool members' savings and lend to members." },
      { objective: "O5", q: "Loan repayment dates should:", options: ["Be ignored", "Fit the months when your money comes in", "Always be weekly", "Be decided after you spend the money"], answer: 1, why: "Matching repayments to income avoids default." },
      { objective: "O6", q: "Which reduces farm risk?", options: ["Borrowing as much as possible", "Growing only one crop", "Savings, diversified crops and insurance where available", "Selling all at harvest"], answer: 2, why: "Spreading risk protects the farm in bad seasons." },
      { objective: "O6", q: "A business plan should be updated:", options: ["Never", "Every ten years", "Only when a lender asks", "Every season with what really happened"], answer: 3, why: "Updating keeps the plan real and useful." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      4,
      7,
      8,
      11,
      14,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Gross margins",
        objective: "O2",
        notYet: "Fewer than two enterprises, or math errors.",
        meets: "Gross margins per acre for two enterprises, with local prices and correct math.",
        exceeds: "Compares labour and risk as well as the margin."
      },
      {
        name: "Market",
        objective: "O3",
        notYet: "No buyer or way to sell named.",
        meets: "Names who will buy, how, and at what price.",
        exceeds: "Compares at least three ways to sell and the quality each needs."
      },
      {
        name: "Cash flow",
        objective: "O4",
        notYet: "No month-by-month outline.",
        meets: "A 12-month outline of money in and out, with hungry months marked.",
        exceeds: "A plan for each hungry month."
      },
      {
        name: "Loan",
        objective: "O5",
        notYet: "A loan is listed without its total cost or repayment plan.",
        meets: "Any loan shows the total repaid, total cost and how repayments fit the cash flow, or no loan is needed.",
        exceeds: "Names a licensed lender and a plan for a bad season."
      },
      {
        name: "Risks and goals",
        objective: "O6",
        notYet: "No risks or goals.",
        meets: "Main risks with how to reduce them, and three goals with numbers.",
        exceeds: "Fits on one clear page backed by records."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Farmers who keep records for at least three months (follow-up survey)",
      "Farm income or gross margin compared with the previous season, as reported by farmers or partners",
      "Farmers who join a cooperative, sign a written buyer contract or get a loan from a licensed lender with a plan"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A notebook and pen, or a phone spreadsheet",
      "A calculator (a basic phone has one)",
      "The learner's own local prices and costs, or the course examples",
      "A mobile money statement if the learner has one",
      "About 60 minutes of lessons, plus time to gather prices and write the plan"
    ],
    facilitatorNotes: [
      "Work through one gross margin together with the group's real local prices before learners do their own.",
      "Remind learners that course numbers are made up; prices differ by place and season.",
      "Stress mobile money safety: never share a PIN or code, and report problems only through official channels.",
      "Invite a cooperative or SACCO officer to explain licensed credit; give no loan recommendations yourself.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
