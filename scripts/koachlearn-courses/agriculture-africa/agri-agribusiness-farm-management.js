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
  chapters: [
    {
      name: "Chapter 1: The farm as a business",
      lessons: [
        {
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
          youCanNow: "keep simple records of money in, money out and production for each farm enterprise."
        },
        {
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
          youCanNow: "calculate and compare gross margins to decide what to grow or keep."
        },
        {
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
          youCanNow: "compare markets and choose the best way to sell a crop."
        }
      ],
      check: {
        title: "Knowledge Check 1: The farm as a business",
        questions: [
          { q: "Why keep farm records?", options: ["They are only for tax officers", "To see which enterprise pays, plan, and get loans or contracts", "To fill time", "Records are not useful"], answer: 1, why: "Records turn guesses into decisions." },
          { q: "Gross margin is:", options: ["Total farm land", "Income minus variable costs for one enterprise", "The price of fertilizer", "Money borrowed"], answer: 1, why: "It shows what each enterprise earns before fixed costs." },
          { q: "Which is a variable cost?", options: ["Seed", "Land you own", "A water tank already built", "Your house"], answer: 0, why: "Seed changes with how much you plant." },
          { q: "A buyer offers a contract. What should you check?", options: ["Only the buyer's name", "Nothing; contracts are always fair", "Only the colour of the bags", "Price, quantity, quality, delivery, payment and what happens if the harvest fails"], answer: 3, why: "The terms decide whether the contract helps you." },
          { q: "Why do prices often fall right after harvest?", options: ["Crops shrink", "Buyers stop eating", "Many farmers sell at the same time", "The government sets them low"], answer: 2, why: "High supply at harvest pushes prices down." }
        ]
      }
    },
    {
      name: "Chapter 2: Money, risk and growth",
      lessons: [
        {
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
          youCanNow: "plan your farm's cash flow through the year and use mobile money safely."
        },
        {
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
          youCanNow: "work out the true cost of a loan and judge whether borrowing makes sense for your farm."
        },
        {
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
          youCanNow: "write a one-page farm business plan backed by your own records and numbers."
        }
      ],
      check: {
        title: "Knowledge Check 2: Money, risk and growth",
        questions: [
          { q: "Why can a profitable farm still run short of money?", options: ["Profit is not real", "Money comes in once or twice a year but goes out all year", "Mobile money loses it", "Records cause it"], answer: 1, why: "Cash-flow timing, not profit alone, decides whether you can pay bills." },
          { q: "Someone calling from \"your mobile money provider\" asks for your PIN. You should:", options: ["Give it quickly", "Give half of it", "Never share it; contact the provider through official channels", "Text it to them"], answer: 2, why: "Real providers never ask for your PIN." },
          { q: "You borrow 20,000 and repay 2,000 a month for 12 months. The loan costs:", options: ["4,000", "2,000", "20,000", "Nothing"], answer: 0, why: "You repay 24,000, which is 4,000 more than you borrowed." },
          { q: "Before taking a loan, check that the lender is:", options: ["Your neighbour's friend", "Very fast", "On social media", "Licensed by the central bank or the right regulator"], answer: 3, why: "Licensed lenders follow rules that protect borrowers." },
          { q: "A good farm business plan is:", options: ["Long and vague", "One clear page backed by records and numbers", "Only a list of wishes", "Secret from everyone"], answer: 1, why: "Short and specific plans are easier to act on and trust." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Agribusiness and Farm Management",
    questions: [
      { q: "Which is a simple farm record?", options: ["Money out: date, what, enterprise, amount", "A photo of the sky", "A list of songs", "Nothing written"], answer: 0, why: "Recording money out by enterprise shows costs." },
      { q: "When should you write records?", options: ["Once a year", "The same day", "Only when asked", "Never"], answer: 1, why: "Same-day records are accurate." },
      { q: "Why count family labour days?", options: ["They are free", "To pay taxes", "Your time has value and affects which enterprise pays", "It is not needed"], answer: 2, why: "Unpaid labour is still a real cost of time." },
      { q: "An enterprise is:", options: ["A bank", "A tractor", "A market", "One activity on the farm, such as maize or poultry"], answer: 3, why: "Each enterprise is measured separately." },
      { q: "Income 63,000, variable costs 34,000. Gross margin is:", options: ["29,000", "34,000", "63,000", "97,000"], answer: 0, why: "63,000 - 34,000 = 29,000." },
      { q: "Why calculate gross margin per acre?", options: ["To make numbers bigger", "To compare enterprises fairly", "Because buyers ask", "To pay rent"], answer: 1, why: "Same unit of land makes comparison fair." },
      { q: "Land rent you pay whatever you grow is a:", options: ["Variable cost", "Gross margin", "Fixed cost", "Sale"], answer: 2, why: "Fixed costs do not change with how much you grow." },
      { q: "Two crops have similar margins, but one fails often. You should:", options: ["Ignore risk", "Grow only the risky one", "Choose by colour", "Consider risk as well as margin"], answer: 3, why: "A high margin is worth less if failure is likely." },
      { q: "Bulking with a cooperative helps because:", options: ["Larger amounts can get better prices", "Crops grow faster", "No quality is needed", "Buyers pay less"], answer: 0, why: "Buyers pay more for large, steady supply." },
      { q: "Clean, dry, sorted produce:", options: ["Earns less", "Earns more and keeps longer", "Is not wanted", "Spoils faster"], answer: 1, why: "Meeting quality standards raises price and storage life." },
      { q: "Before signing a contract-farming deal you should:", options: ["Sign at once", "Agree by phone only", "Read the terms and get it in writing", "Ask the buyer to decide everything"], answer: 2, why: "Written terms protect you." },
      { q: "A cash-flow plan shows:", options: ["Only total profit", "Crop varieties", "Rainfall", "Money in and out month by month"], answer: 3, why: "Timing of money is what cash flow means." },
      { q: "Hungry months are:", options: ["Months when money or food runs short", "Harvest months", "Holidays", "Market days"], answer: 0, why: "Planning for them avoids crisis borrowing or sales." },
      { q: "A benefit of a separate farm wallet or account is:", options: ["Higher prices", "Farm and household money do not mix", "No need for records", "Free fertilizer"], answer: 1, why: "Separation shows what the farm really earns and spends." },
      { q: "A message says you received money by mistake and asks you to send it back. You should:", options: ["Send it at once", "Send double", "Check your real balance and statement, and contact the provider through official channels", "Share your PIN"], answer: 2, why: "Fake \"wrong transfer\" messages are a common trick." },
      { q: "To compare loans, look at:", options: ["Only the advert", "Only the interest rate", "Only how fast it is paid out", "The total amount you will repay, including all fees"], answer: 3, why: "Fees can make a low-rate loan expensive." },
      { q: "A SACCO is:", options: ["A savings and credit cooperative owned by members", "A crop pest", "A government tax", "A drone"], answer: 0, why: "SACCOs pool members' savings and lend to members." },
      { q: "Loan repayment dates should:", options: ["Be ignored", "Fit the months when your money comes in", "Always be weekly", "Be decided after you spend the money"], answer: 1, why: "Matching repayments to income avoids default." },
      { q: "Which reduces farm risk?", options: ["Borrowing as much as possible", "Growing only one crop", "Savings, diversified crops and insurance where available", "Selling all at harvest"], answer: 2, why: "Spreading risk protects the farm in bad seasons." },
      { q: "A business plan should be updated:", options: ["Never", "Every ten years", "Only when a lender asks", "Every season with what really happened"], answer: 3, why: "Updating keeps the plan real and useful." }
    ]
  }
};
