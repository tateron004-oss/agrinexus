"use strict";

// Koach Learn course: Agriculture (Africa) -> "Farm Accounting and Investment Management" (farmer courses brief, 29 October 2026).
// Builds on agri-agribusiness-farm-management (records, gross margin, a 12-month cash-flow outline, loan cost). This course goes deeper:
// fixed and variable costs with depreciation, cost per kg, bag or litre, an expense tracker, a monthly cash-flow plan with running balances,
// break-even price and yield, and judging an investment with payback period and simple return. All money figures are made-up examples;
// no investment advice; lenders and suppliers must be checked.

const CBK = { name: "Central Bank of Kenya (licensed banks, microfinance banks and digital credit providers)", url: "https://www.centralbank.go.ke" };
const CBN = { name: "Central Bank of Nigeria (licensed banks and microfinance banks)", url: "https://www.cbn.gov.ng" };
const BCEAO = { name: "BCEAO, Central Bank of West African States (rules for banks and microfinance in XOF countries)", url: "https://www.bceao.int" };

module.exports = {
  id: "agri-farm-accounting-investment",
  category: "Agriculture (Africa)",
  name: "Farm Accounting and Investment Management",
  skills: "Separating fixed and variable costs, Calculating cost per kg, bag or litre, Keeping an expense tracker, Planning monthly cash flow, Finding the break-even price, Judging an investment with payback and simple return",
  outcome: "work out what it really costs you to produce one kg, bag or litre, track every expense, plan your cash month by month, find the lowest price you can sell at without a loss, and judge whether an investment such as a solar pump, a greenhouse or more cows will pay back.",
  about: [
    "This course is for smallholder and growing commercial farmers, farm managers, young agripreneurs and extension workers in Kenya, Nigeria, Ghana, Senegal, Cote d'Ivoire and across Africa who already keep some records and want to make sharper money decisions.",
    "It builds on \"Agribusiness and Farm Management\", which covers simple records and gross margin. Here you go further. Chapter 1 is about knowing your costs: fixed and variable costs, the cost of producing one unit, and an expense tracker. Chapter 2 is about planning and investing: a monthly cash-flow plan, the break-even price, and judging an investment with its payback period and simple return.",
    "All money figures are made-up examples in KES, NGN, GHS and XOF to show the method; use your own prices. This course does not give investment advice. Before a big purchase or a loan, compare offers, read every contract fully, and talk to a trusted adviser such as your cooperative, SACCO, extension officer or accountant. Each lesson ends with a short practice task and a 2-question quick check, each chapter with a knowledge check, and the course with a 20-question quiz."
  ],
  finalTask: "Make a farm cost and investment sheet for one enterprise on your farm (or an example farm): a list of its fixed and variable costs for one season, the cost per kg, bag, litre or egg, one month of expense tracking, a 12-month cash-flow plan with running balances and the shortfall months marked, the break-even price and break-even yield compared with the price you expect, and the payback period and simple return for one investment you are considering, with your decision and why.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Smallholder and growing commercial farmers, farm managers, young agripreneurs, cooperative leaders and extension workers in Kenya, Nigeria, Ghana and francophone West Africa. Most farm maize, cassava, rice, beans, vegetables, coffee or cocoa, or keep dairy cows, goats, pigs, poultry or fish.",
    startingPoint: "Can add, subtract, multiply and divide with a phone calculator. Many keep some records and know roughly what they spend and earn; some have done the gross-margin lesson in \"Agribusiness and Farm Management\". Few know their cost per kg or litre, their break-even price, or how to judge whether equipment will pay back.",
    gap: "Farmers often sell below what it cost them to produce, run out of cash before harvest even in a good year, or buy equipment and animals that never earn back their price. Knowing cost per unit, break-even and payback lets them refuse bad prices, plan cash and make investments that pay, and gives lenders and buyers numbers they can trust.",
    constraints: [
      "Reading level: plain words and short sentences; every money word is explained",
      "Devices: a basic phone calculator and a notebook are enough; a phone spreadsheet is optional",
      "Time: 5 to 6 minute lessons that fit around farm work",
      "Money: all figures are examples; prices, interest rates and subsidies change and must come from the learner's own area",
      "No investment advice: learners compare options and ask a trusted adviser before big decisions"
    ],
    prerequisites: "None, but \"Agribusiness and Farm Management\" (records and gross margin) is a helpful first step."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a list of one enterprise's costs for a season and its yield", action: "sort the costs into fixed and variable and calculate the cost to produce one kg, bag, litre or egg", standard: "with every cost in the right group and the cost per unit correct to the nearest whole unit of money" },
    { id: "O2", condition: "Using a notebook or a phone spreadsheet", action: "record every farm expense for one month by date, category and enterprise, and total it by category", standard: "with no missing days and totals that match your cash and mobile money records" },
    { id: "O3", condition: "Given expected money in and out for each month of a year", action: "build a monthly cash-flow plan with opening and closing balances and mark the shortfall months", standard: "with each closing balance carried to the next month and at least one action planned for every shortfall month" },
    { id: "O4", condition: "Given total costs, expected yield and a buyer's price", action: "calculate the break-even price and break-even yield and decide whether the offer covers your costs", standard: "correct to the nearest whole unit of money or unit of yield" },
    { id: "O5", condition: "Given the cost of an investment and the extra income and costs it should bring", action: "calculate its payback period and simple return and write a decision with your reasons", standard: "with correct numbers and at least two risks checked (life of the item, loan cost or weaker yields)" }
  ],
  chapters: [
    {
      name: "Chapter 1: Knowing your costs",
      lessons: [
        {
          title: "Fixed and variable costs",
          objectives: ["O1"],
          minutes: 5,
          goal: "Sort one enterprise's costs into fixed and variable, including the yearly cost of tools and buildings.",
          text: [
            "Variable costs go up or down with how much you produce: seed, fertilizer, feed, day labour, vet services, bags, fuel and transport. If you plant half the land or keep half the birds, these costs fall.",
            "Fixed costs stay about the same whatever you produce in the season: land rent, a permanent worker's wage, a water licence, insurance, and the wearing out of tools, pumps, sheds and fences. That wearing out is called depreciation. A simple way to work it out: (price paid - value left at the end) / years it will last. Example (made-up numbers in Kenya shillings): a knapsack sprayer costs 6,000, will last 5 years and be worth nothing at the end, so it costs the farm 1,200 a year.",
            "If a tool or a building serves several enterprises, share its yearly cost between them, for example by the land or the time each uses. Count your family's labour too, at the local day rate, so you see the true cost of your time."
          ],
          steps: ["Choose one enterprise, such as maize, tilapia or a dairy cow.", "List every cost for one season or one year.", "Mark each one V (variable: changes with how much you produce) or F (fixed: stays the same).", "For tools, pumps and buildings, work out depreciation: (price - value left) / years of life.", "Share fixed costs between enterprises that use the same thing."],
          words: [["Variable cost", "a cost that rises or falls with how much you produce, such as seed or feed."], ["Fixed cost", "a cost that stays about the same whatever you produce in the season, such as land rent."], ["Depreciation", "the part of a tool's or building's price that is used up each year as it wears out."], ["Enterprise", "one activity on the farm, such as maize, poultry or dairy."]],
          slides: [
            { title: "Variable costs", bullets: ["Change with how much you produce", "Seed, fertilizer, feed, day labour, vet, bags, fuel", "Produce less and they fall"] },
            { title: "Fixed costs", bullets: ["Stay about the same whatever you produce", "Rent, permanent wages, licences, insurance", "Wear and tear on tools and buildings"] },
            { title: "Depreciation", bullets: ["(Price - value left) / years of life", "Sprayer 6,000 KES, 5 years: 1,200 a year (example)", "Share it between enterprises that use it"] },
            { title: "Do not forget", bullets: ["Family labour at the local day rate", "Small costs: bags, airtime for buyers, transport"] }
          ],
          tryIt: "Pick one enterprise on your farm. List at least eight costs from the last season, mark each V or F, and work out the yearly depreciation of one tool or building you use for it.",
          youCanNow: "sort an enterprise's costs into fixed and variable and work out the yearly cost of your tools and buildings.",
          quickCheck: [
            { objective: "O1", q: "Which of these is a variable cost for a poultry enterprise?", options: ["The yearly wear on the poultry house", "Rent for the plot the house stands on", "Feed for the birds", "A permanent worker's monthly wage"], answer: 2, why: "Feed rises and falls with how many birds you keep, so it is variable." },
            { objective: "O1", q: "A pump costs 50,000, will last 10 years and be worth 0 at the end. Its depreciation is:", options: ["5,000 a year", "50,000 a year", "500 a year", "10,000 a year"], answer: 0, why: "(50,000 - 0) / 10 years = 5,000 a year." }
          ]
        },
        {
          title: "What it costs to produce one kg, bag or litre",
          objectives: ["O1"],
          minutes: 6,
          goal: "Calculate the cost to produce one kg, bag, litre or egg for one enterprise.",
          text: [
            "Cost per unit = total cost for the period / units produced in that period. Total cost is variable costs plus the share of fixed costs that belongs to this enterprise. The unit is how you sell: a kg of tomatoes, a 100 kg bag of maize, a litre of milk, a tray of eggs, a kg of tilapia.",
            "Example (made-up numbers in Kenya shillings), one dairy cow for one month: feed 9,500, vet and breeding services 1,000, labour 3,000, share of fixed costs (shed, chaff cutter, water) 1,500. Total 15,000. The cow gave 300 litres. Cost per litre = 15,000 / 300 = 50 shillings. If the milk buyer pays less than 50, every litre loses money.",
            "Example (made-up numbers in naira), one hectare of maize in Nigeria: variable costs 600,000, share of fixed costs 150,000, total 750,000, harvest 30 bags of 100 kg. Cost per bag = 750,000 / 30 = 25,000, which is 250 naira per kg. Work it out every season: when yields fall or input prices rise, the cost per unit rises too."
          ],
          steps: ["Choose the unit you sell in: kg, bag, litre, egg or tray.", "Add the variable costs for the period.", "Add this enterprise's share of fixed costs.", "Count the units produced in the same period.", "Cost per unit = total cost / units produced.", "Compare it with the price buyers pay."],
          words: [["Cost per unit", "what it costs you to produce one kg, bag, litre or egg: total cost divided by units produced."], ["Unit", "the amount you sell in, such as a kg, a 100 kg bag or a litre."]],
          slides: [
            { title: "The formula", bullets: ["Cost per unit = total cost / units produced", "Total cost = variable + share of fixed", "Use the unit you sell in"] },
            { title: "Dairy cow, one month (example KES)", bullets: ["Feed 9,500 + vet 1,000 + labour 3,000 + fixed 1,500 = 15,000", "300 litres: 15,000 / 300 = 50 per litre", "A buyer paying under 50 means a loss per litre"] },
            { title: "Maize, one hectare (example NGN)", bullets: ["Total cost 750,000; harvest 30 bags", "750,000 / 30 = 25,000 per bag = 250 per kg"] },
            { title: "Work it out every season", bullets: ["Lower yield = higher cost per unit", "Higher input prices = higher cost per unit"] }
          ],
          tryIt: "Use the costs from Lesson 1. Add them up, divide by the units you produced, and write your cost per kg, bag, litre or egg. Then write the last price a buyer offered you next to it.",
          youCanNow: "calculate the cost to produce one unit of what you sell and compare it with the price you are offered.",
          quickCheck: [
            { objective: "O1", q: "Total cost for a tomato plot is 40,000 and it produced 800 kg. What is the cost per kg?", options: ["800", "40", "500", "50"], answer: 3, why: "40,000 / 800 kg = 50 per kg." },
            { objective: "O1", q: "Your yield falls but your costs stay the same. What happens to your cost per unit?", options: ["It stays the same", "It goes up", "It goes down", "It becomes zero"], answer: 1, why: "The same cost divided by fewer units gives a higher cost for each unit." }
          ]
        },
        {
          title: "An expense tracker you can keep",
          objectives: ["O2"],
          minutes: 5,
          goal: "Set up an expense tracker and record every farm expense for a month.",
          text: [
            "An expense tracker is a list of every farm payment with the same columns each time: date, what you bought, category (seed, fertilizer, feed, labour, vet, fuel, transport, repairs, rent), which enterprise, F or V, amount, how you paid (cash or mobile money) and whether you kept a receipt.",
            "Write each expense the same day. At the end of the month, add up each category and each enterprise. You will quickly see where the money goes. Example (made-up numbers in Ghana cedis), a layer farm in one month: feed 4,200, labour 1,200, vet and vaccines 400, transport 300, repairs 150, total 6,250. Feed is two thirds of the cost, so the best savings will come from feed.",
            "A notebook works well. On a phone, a free spreadsheet such as Google Sheets or Microsoft Excel can add up each category for you with the SUMIF formula. Check the tracker against your cash and mobile money statements every week, so nothing is missed."
          ],
          steps: ["Make the columns: date, item, category, enterprise, F or V, amount, paid by, receipt.", "Write each expense the same day.", "Every week, check it against your cash and mobile money statement.", "At month end, total each category and each enterprise.", "Find the biggest category and one way to cut it."],
          words: [["Expense tracker", "a list of every farm payment with the same columns, so you can add it up by category."], ["Category", "a group of similar costs, such as feed, labour or transport."], ["Receipt", "a paper or message that proves you paid."]],
          slides: [
            { title: "Same columns every time", bullets: ["Date, item, category, enterprise", "Fixed or variable, amount", "Cash or mobile money, receipt kept?"] },
            { title: "Month-end totals (example GHS layers)", bullets: ["Feed 4,200, labour 1,200, vet 400", "Transport 300, repairs 150: total 6,250", "Feed is two thirds: start savings there"] },
            { title: "Keep it honest", bullets: ["Write it the same day", "Check weekly against mobile money statements", "Notebook or phone spreadsheet (SUMIF)"] }
          ],
          tryIt: "Set up your tracker today with all eight columns. Fill in every farm expense from the last seven days using your memory, receipts and mobile money statement, then total them by category.",
          youCanNow: "keep an expense tracker, total it by category and enterprise, and find where your money goes.",
          quickCheck: [
            { objective: "O2", q: "Why add a column for which enterprise each expense belongs to?", options: ["So you can see what each enterprise really costs", "Because banks require it every day", "To make the list longer", "So you do not need receipts"], answer: 0, why: "Totals by enterprise feed straight into the cost per unit for each one." },
            { objective: "O2", q: "Your tracker total is lower than what left your mobile money wallet this month. What do you do?", options: ["Ignore it; small gaps do not matter", "Delete the tracker and start again next year", "Go through the statement and add the missing expenses", "Add a made-up number to make them match"], answer: 2, why: "The statement shows what you really paid, so it helps you find and add missing entries." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Knowing your costs",
        questions: [
          { objective: "O1", q: "Which is a fixed cost for a maize farm?", options: ["Seed", "Fertilizer", "Day labour for weeding", "Yearly rent for the land"], answer: 3, why: "Rent stays the same whatever you plant on the land, so it is fixed." },
          { objective: "O1", q: "A chaff cutter costs 30,000, lasts 6 years and is worth 0 at the end. What is its yearly depreciation?", options: ["5,000", "6,000", "30,000", "180,000"], answer: 0, why: "(30,000 - 0) / 6 years = 5,000 a year." },
          { objective: "O1", q: "Total cost for a pig enterprise is 90,000 and you sold 600 kg of pork. What is the cost per kg?", options: ["600", "150", "90", "1,500"], answer: 1, why: "90,000 / 600 kg = 150 per kg." },
          { objective: "O2", q: "When should you write an expense in the tracker?", options: ["At the end of the season", "Only when you have a receipt", "The same day you pay it", "Only for big payments"], answer: 2, why: "Same-day records are complete and accurate." },
          { objective: "O2", q: "After a month of tracking, feed is 65% of costs. What is the most useful next step?", options: ["Look for ways to cut feed cost or waste first", "Stop tracking because the answer is clear", "Cut the smallest category first", "Buy more feed to get a discount, whatever the price"], answer: 0, why: "The biggest category is where savings make the most difference." }
        ]
      }
    },
    {
      name: "Chapter 2: Planning and investing",
      lessons: [
        {
          title: "A monthly cash-flow plan with balances",
          objectives: ["O3"],
          minutes: 6,
          goal: "Build a 12-month cash-flow plan with opening and closing balances and mark the shortfall months.",
          text: [
            "A cash-flow plan shows, month by month, how much money you expect to have. For each month: opening balance (money you start with) + money in - money out = closing balance. The closing balance becomes next month's opening balance.",
            "Example (made-up numbers in Ghana cedis), a maize and poultry farm. March: opening 3,000 + in 500 - out 2,000 = closing 1,500. April: opening 1,500 + in 500 - out 2,500 = closing -500. A minus closing balance is a shortfall: you will not be able to pay everything that month unless you plan.",
            "For each shortfall month, plan an action before it comes: save from the last harvest, move a purchase to a later month, sell some produce in stages, add a small enterprise that earns in that month (eggs, vegetables, fish), arrange input credit, or agree a small loan in advance with repayments after harvest. Update the plan each month with what really happened."
          ],
          steps: ["Make 12 month columns and four rows: opening, money in, money out, closing.", "Put the cash you have now as the first opening balance.", "Fill in expected money in and money out for each month.", "Closing = opening + in - out; carry it to next month's opening.", "Circle every minus closing balance.", "Write one action for each circled month and update monthly."],
          words: [["Opening balance", "the money you have at the start of a month."], ["Closing balance", "the money you expect at the end of a month: opening + money in - money out."], ["Shortfall", "a month when money out is more than the money you have."]],
          slides: [
            { title: "One line of arithmetic", bullets: ["Opening + money in - money out = closing", "Closing becomes next month's opening"] },
            { title: "Example (GHS, made-up)", bullets: ["March: 3,000 + 500 - 2,000 = 1,500", "April: 1,500 + 500 - 2,500 = -500", "Minus = shortfall: plan for it now"] },
            { title: "Fixing a shortfall", bullets: ["Save from harvest; move a purchase later", "Sell in stages; add an enterprise that earns then", "Input credit or a small loan agreed in advance"] },
            { title: "Keep it alive", bullets: ["Write what really happened each month", "Update the months ahead"] }
          ],
          tryIt: "Build your 12-month cash-flow plan starting with the cash you have today. Work out every closing balance, circle the shortfall months, and write one action for each.",
          youCanNow: "build a monthly cash-flow plan with running balances, spot shortfall months early and plan what to do about them.",
          quickCheck: [
            { objective: "O3", q: "Opening balance 2,000, money in 1,000, money out 2,500. What is the closing balance?", options: ["5,500", "-500", "3,000", "500"], answer: 3, why: "2,000 + 1,000 - 2,500 = 500." },
            { objective: "O3", q: "Your plan shows a shortfall in August. When should you plan what to do?", options: ["Now, months before August", "In August, when the bills arrive", "After harvest", "Never; it will sort itself out"], answer: 0, why: "Planning early gives you time to save, move purchases or arrange credit on good terms." }
          ]
        },
        {
          title: "The break-even price and yield",
          objectives: ["O4"],
          minutes: 5,
          goal: "Calculate the break-even price and break-even yield and use them to judge a buyer's offer.",
          text: [
            "Break-even is the point where income just covers total cost: no profit and no loss. Break-even price = total cost / expected yield. It is the lowest price you can accept without losing money. Break-even yield = total cost / price you expect. It is the smallest harvest that covers your costs at that price.",
            "Example (made-up numbers in naira), the maize hectare from Lesson 2: total cost 750,000, expected harvest 30 bags. Break-even price = 750,000 / 30 = 25,000 a bag. A buyer offers 28,000: you make 3,000 a bag, or 90,000 on 30 bags. Break-even yield at 28,000 = 750,000 / 28,000 = 26.8 bags, so you need at least 27 bags. If drought cuts your harvest to 25 bags, you lose money even at that price.",
            "Use break-even before you plant (is this crop worth it at likely prices?) and when a buyer makes an offer (does it cover my costs?). The gap between the expected price and your break-even price is your safety margin: the bigger it is, the more a bad season or a price fall you can take."
          ],
          steps: ["Add up total cost for the enterprise (variable + share of fixed).", "Break-even price = total cost / expected yield.", "Break-even yield = total cost / expected price.", "Compare with the buyer's offer and your likely yield.", "Write your safety margin: expected price - break-even price."],
          words: [["Break-even", "the point where income just covers total cost: no profit, no loss."], ["Break-even price", "the lowest price per unit that covers your costs: total cost / yield."], ["Break-even yield", "the smallest harvest that covers your costs at a given price: total cost / price."], ["Safety margin", "how far the price or yield can fall before you make a loss."]],
          slides: [
            { title: "Two break-even numbers", bullets: ["Break-even price = total cost / yield", "Break-even yield = total cost / price"] },
            { title: "Maize example (NGN, made-up)", bullets: ["750,000 / 30 bags = 25,000 a bag", "Offer 28,000: profit 3,000 a bag, 90,000 in all", "Break-even yield at 28,000: about 27 bags"] },
            { title: "When to use it", bullets: ["Before you plant: is it worth it?", "When a buyer offers: does it cover costs?", "Bigger safety margin = more room for a bad season"] }
          ],
          tryIt: "Use your enterprise's total cost and expected yield. Work out the break-even price and the break-even yield at today's price, and write your safety margin. Would you accept the last offer you got?",
          youCanNow: "calculate the break-even price and yield for an enterprise and use them to accept or refuse an offer.",
          quickCheck: [
            { objective: "O4", q: "Total cost 120,000, expected yield 40 bags. What is the break-even price?", options: ["4,000 a bag", "40 a bag", "3,000 a bag", "160,000 a bag"], answer: 2, why: "120,000 / 40 bags = 3,000 a bag." },
            { objective: "O4", q: "Your break-even price for milk is 50 a litre. A buyer offers 45. What does this mean?", options: ["You make 5 profit on each litre", "You lose about 5 on each litre unless you cut costs or find a better buyer", "The offer is fair because it is close", "Break-even does not matter for milk"], answer: 1, why: "A price below break-even means every litre sold loses money." }
          ]
        },
        {
          title: "Judging an investment: payback and simple return",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calculate the payback period and simple return of an investment and decide whether it makes sense.",
          text: [
            "An investment is money spent now to earn more later: a solar pump, a greenhouse, a cold store, a pig house or more cows. First work out the extra net income per year: the extra money it brings in minus the extra running costs (fuel, repairs, feed, labour, replacement parts). Then: payback period = investment cost / extra net income per year. Simple return = extra net income per year / investment cost x 100.",
            "Example (made-up numbers in Kenya shillings), a solar pump that allows a dry-season tomato crop: cost 120,000; extra income 55,000 a year minus extra costs 15,000 = 40,000 extra net income. Payback = 120,000 / 40,000 = 3 years. Simple return = 40,000 / 120,000 x 100 = about 33% a year. Example (made-up numbers in CFA francs), a greenhouse in Senegal: cost 3,000,000; extra net income 600,000 a year. Payback = 5 years; simple return = 20% a year.",
            "Then check the risks. Will it last longer than the payback period (greenhouse plastic and pump parts wear out)? If you borrow, is the loan's yearly cost lower than the return, and can you repay before the item pays back? What if yields or prices are 20% lower than you hoped? Use cautious numbers, ask the supplier for farmers who already use it, and talk to a trusted adviser before you buy. This course explains the method; it does not tell you what to buy."
          ],
          steps: ["Write the full cost: item, delivery, installation, training.", "Estimate extra income per year, using cautious yields and prices.", "Subtract extra running costs to get extra net income per year.", "Payback = cost / extra net income per year.", "Simple return = extra net income / cost x 100.", "Check life of the item, loan cost and a 20% worse case; write your decision."],
          words: [["Investment", "money spent now on something that should earn more later."], ["Extra net income", "the extra money an investment brings in each year minus its extra running costs."], ["Payback period", "how many years it takes for the extra net income to pay back what you spent: cost / extra net income per year."], ["Simple return", "extra net income per year as a percentage of the cost."]],
          slides: [
            { title: "Two numbers to judge an investment", bullets: ["Payback = cost / extra net income per year", "Simple return = extra net income / cost x 100", "Extra net income = extra income - extra costs"] },
            { title: "Solar pump (example KES)", bullets: ["Cost 120,000; extra net income 40,000 a year", "Payback 3 years; simple return about 33%"] },
            { title: "Greenhouse in Senegal (example XOF)", bullets: ["Cost 3,000,000; extra net income 600,000 a year", "Payback 5 years; simple return 20%"] },
            { title: "Check before you buy", bullets: ["Does it last longer than the payback period?", "Loan cost lower than the return?", "Still works if yields or prices are 20% lower?", "Talk to users and a trusted adviser"] }
          ],
          sources: [CBK, CBN, BCEAO],
          tryIt: "Final task: make your farm cost and investment sheet. For one enterprise, include fixed and variable costs, cost per unit, one month of expense tracking, a 12-month cash-flow plan with shortfall months marked, break-even price and yield, and the payback period and simple return of one investment, with your decision and why.",
          youCanNow: "judge whether an investment will pay back, using payback period, simple return and a check of the risks.",
          quickCheck: [
            { objective: "O5", q: "A cold store costs 200,000 and adds 50,000 extra net income a year. What is the payback period?", options: ["2 years", "25 years", "5 years", "4 years"], answer: 3, why: "200,000 / 50,000 = 4 years." },
            { objective: "O5", q: "An item pays back in 6 years but the supplier says it lasts about 4 years. What does this tell you?", options: ["It will wear out before it pays back, so it is likely a loss", "It is a great investment", "Payback does not matter if the item is new", "You should borrow more to buy two"], answer: 0, why: "If the item wears out before payback, its extra income never covers its cost." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Planning and investing",
        questions: [
          { objective: "O3", q: "In a cash-flow plan, what is the next month's opening balance?", options: ["Always zero", "This month's closing balance", "Next month's money in", "The yearly profit"], answer: 1, why: "Each month starts with the money the last month ended with." },
          { objective: "O3", q: "Which is a sensible action for a shortfall month you can see coming?", options: ["Wait and hope", "Sell all the harvest on the first day", "Move a purchase to a later month or save from harvest for it", "Take any loan offered by text message"], answer: 2, why: "Moving spending or saving ahead closes the gap without risky borrowing." },
          { objective: "O4", q: "Total cost 300,000; the buyer pays 6,000 a bag. What is the break-even yield?", options: ["50 bags", "60 bags", "5 bags", "1,800 bags"], answer: 0, why: "300,000 / 6,000 = 50 bags." },
          { objective: "O5", q: "Extra net income 30,000 a year on an investment of 150,000. What is the simple return?", options: ["5%", "50%", "30%", "20%"], answer: 3, why: "30,000 / 150,000 x 100 = 20% a year." },
          { objective: "O5", q: "How do you work out extra net income for a new solar pump?", options: ["Only count the extra income", "Take the pump's price away from one harvest", "Extra income it brings minus its extra running costs", "Ask the seller to tell you the profit"], answer: 2, why: "Running costs such as repairs and labour reduce what the pump really earns." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Farm Accounting and Investment Management",
    questions: [
      { objective: "O1", q: "Which cost changes with how much you produce?", options: ["A variable cost, such as feed", "A fixed cost, such as land rent", "Depreciation on a shed", "A water licence"], answer: 0, why: "Variable costs rise and fall with production." },
      { objective: "O1", q: "A fence cost 40,000, will last 8 years and is worth 0 at the end. What is its yearly depreciation?", options: ["8,000", "320,000", "40,000", "5,000"], answer: 3, why: "(40,000 - 0) / 8 = 5,000 a year." },
      { objective: "O1", q: "Why count family labour at the local day rate?", options: ["Because the tax office requires it", "So you see the true cost of producing each unit", "To make the farm look poorer", "It is not needed"], answer: 1, why: "Your family's time has value; leaving it out hides the real cost." },
      { objective: "O1", q: "Total cost for a tilapia pond is 60,000 and you harvested 300 kg. What is the cost per kg?", options: ["300", "2,000", "200", "20"], answer: 2, why: "60,000 / 300 kg = 200 per kg." },
      { objective: "O1", q: "Input prices rise but your harvest stays the same. Your cost per unit:", options: ["Rises", "Falls", "Stays the same", "Cannot be worked out"], answer: 0, why: "A bigger total cost divided by the same number of units gives a higher cost per unit." },
      { objective: "O2", q: "Which set of columns makes a useful expense tracker?", options: ["Only the amount", "Item and colour", "Buyer's name and price", "Date, item, category, enterprise, F or V, amount, paid by, receipt"], answer: 3, why: "These columns let you total costs by category and enterprise and check them." },
      { objective: "O2", q: "How often should you check your tracker against your mobile money statement?", options: ["Once a year", "Every week", "Never", "Only when a lender asks"], answer: 1, why: "Weekly checks catch missing expenses while you still remember them." },
      { objective: "O2", q: "Which spreadsheet formula can add up all the expenses in one category?", options: ["SUMIF", "LEN", "TODAY", "UPPER"], answer: 0, why: "SUMIF adds the amounts that match a condition, such as the category \"feed\"." },
      { objective: "O3", q: "Closing balance is worked out as:", options: ["Money in - money out only", "Opening balance x money in", "Opening balance + money in - money out", "Money out - opening balance"], answer: 2, why: "You start with the opening balance, add what comes in and take away what goes out." },
      { objective: "O3", q: "Opening 4,000, in 0, out 5,000. What does the closing balance tell you?", options: ["You have 9,000", "You will have a shortfall of 1,000", "You have 1,000 spare", "Nothing useful"], answer: 1, why: "4,000 + 0 - 5,000 = -1,000, a shortfall." },
      { objective: "O3", q: "Which helps most with a shortfall month before harvest?", options: ["Ignoring it until it comes", "Spending more in the month before", "Borrowing from a lender you have not checked", "A small enterprise that earns in that month, such as eggs or vegetables"], answer: 3, why: "Income in the hungry month fills the gap without risky debt." },
      { objective: "O3", q: "Why update the cash-flow plan every month?", options: ["To match what really happened and see the next months more clearly", "Because the bank changes it", "So the numbers look bigger", "You should not update it"], answer: 0, why: "A plan that follows reality warns you early about new gaps." },
      { objective: "O4", q: "Break-even price is:", options: ["Total cost / expected yield", "Expected yield / total cost", "Price x yield", "Income - total cost"], answer: 0, why: "Dividing total cost by the units you expect gives the lowest price that covers costs." },
      { objective: "O4", q: "Total cost 200,000; expected yield 50 bags. A buyer offers 3,500 a bag. Should you accept on cost grounds?", options: ["Yes, 3,500 covers the cost", "Yes, any offer is good", "No, the break-even price is 4,000 a bag", "It cannot be known"], answer: 2, why: "200,000 / 50 = 4,000 a bag, so 3,500 loses 500 a bag." },
      { objective: "O4", q: "Break-even yield tells you:", options: ["The best price you can get", "The smallest harvest that covers your costs at a given price", "How much fertilizer to use", "Your yearly profit"], answer: 1, why: "It is total cost divided by price: the harvest you need to avoid a loss." },
      { objective: "O4", q: "Expected price 30,000 a bag, break-even price 25,000 a bag. Your safety margin is:", options: ["55,000 a bag", "25,000 a bag", "30,000 a bag", "5,000 a bag"], answer: 3, why: "30,000 - 25,000 = 5,000 a bag before you make a loss." },
      { objective: "O5", q: "Payback period is:", options: ["Investment cost / extra net income per year", "Extra net income / cost x 100", "Loan interest x years", "Cost - yearly income"], answer: 0, why: "It shows how many years of extra net income repay the cost." },
      { objective: "O5", q: "Three more dairy cows cost 450,000 and add 150,000 extra net income a year. What is the simple return?", options: ["3%", "15%", "33%", "300%"], answer: 2, why: "150,000 / 450,000 x 100 = about 33% a year." },
      { objective: "O5", q: "You would borrow for a greenhouse. Which check matters most?", options: ["The greenhouse's colour", "Whether the loan's yearly cost is lower than the return and repayments fit your cash flow", "Whether neighbours have one", "Nothing, if the seller is friendly"], answer: 1, why: "A loan that costs more than the return, or that you cannot repay on time, turns the investment into a loss." },
      { objective: "O5", q: "A supplier promises a pump will double your income. What should you do?", options: ["Buy it at once", "Use the supplier's number as your estimate", "Pay a deposit before you ask anything", "Use cautious numbers, talk to farmers who use it and ask a trusted adviser"], answer: 3, why: "Cautious numbers and real users' experience protect you from optimistic sales talk." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 5, 8, 9, 12, 13, 16, 17] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part of the sheet and check it again.",
    criteria: [
      { name: "Costs sorted and cost per unit", objective: "O1", notYet: "Costs are missing or mixed up, or the cost per unit is wrong or missing.", meets: "Every cost is marked fixed or variable, depreciation is included, and the cost per unit is correct.", exceeds: "Fixed costs are shared fairly between enterprises and family labour is valued at the local day rate." },
      { name: "Expense tracker", objective: "O2", notYet: "Fewer than half the days are recorded, or there are no category totals.", meets: "One month of expenses with all columns, totalled by category and enterprise, matching cash and mobile money.", exceeds: "Also names the biggest category and one realistic way to cut it." },
      { name: "Cash-flow plan", objective: "O3", notYet: "Months are missing or closing balances are not carried forward.", meets: "Twelve months with correct opening and closing balances, shortfall months circled, an action for each.", exceeds: "Actions are dated and costed, and the plan has been updated with one real month." },
      { name: "Break-even", objective: "O4", notYet: "Break-even price or yield is missing or wrong.", meets: "Break-even price and yield are correct and compared with the expected price and yield.", exceeds: "Also shows the safety margin and what happens if the yield falls by 20%." },
      { name: "Investment decision", objective: "O5", notYet: "No payback or return, or the decision has no reasons.", meets: "Payback and simple return are correct and the decision gives at least two risks checked.", exceeds: "Includes a 20% worse case, the item's life and the cost of any loan, with a clear yes, no or wait." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and score Meets or Exceeds on every rubric row of the cost and investment sheet",
      "Learners who still keep an expense tracker 30 days later (follow-up survey)",
      "Learners who report refusing a price below their break-even price or changing a sale because of it",
      "Learners who report delaying, changing or making an investment decision using payback and simple return",
      "Partner cooperatives or lenders report more members bringing cost and cash-flow figures to loan or contract talks"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A notebook and pen, or a phone with a free spreadsheet app (Google Sheets or Microsoft Excel)",
      "A phone calculator",
      "The learner's own costs, receipts and mobile money statements for one enterprise, or the course's example numbers",
      "About 75 minutes in total, in short sessions, plus one month of expense tracking for the final task"
    ],
    facilitatorNotes: [
      "In a farmer group or extension session: take the pre-test together, then one chapter per session with the \"Try it now\" tasks done in pairs.",
      "Bring a real or example enterprise budget so learners with no records can still practise; make sure everyone checks the arithmetic on a calculator.",
      "Remind learners that all figures in the course are examples; ask them to use prices from their own market and suppliers.",
      "Do not recommend specific equipment, lenders or suppliers; ask learners to compare offers and talk to a trusted adviser.",
      "Ask learners to start the expense tracker after Lesson 3 so they have a full month for the final task; score the sheet with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
