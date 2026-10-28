"use strict";

// Koach Learn course: Veterans (military) -> "AI for Logistics and Operations" (bonus course on the owner's list, 27 October 2026). Written as a skill-building course: by the end the
// student can DO the skill in `outcome`. Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], sources, tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }
// Facts checked on the official pages on 27 October 2026 (mynextmove.org/vets; dol.gov/agencies/vets; va.gov on-the-job training and apprenticeships).

module.exports = {
  id: "veterans-ai-logistics",
  category: "Veterans (military)",
  name: "AI for Logistics and Operations",
  skills: "Speaking civilian supply-chain language, Knowing where AI fits in logistics, Building an inventory reorder sheet, Drafting a delivery schedule with AI, Briefing an operations plan",
  outcome: "build a simple inventory reorder sheet and a delivery schedule with help from an AI assistant and a free spreadsheet, check the math yourself, and brief the plan in civilian logistics terms.",
  about: [
    "If you moved people, parts, fuel, food or vehicles in the military, you already did logistics. Civilian warehouses, trucking companies, hospitals and online stores need the same skills, and they now use AI tools to plan.",
    "In this course you will learn the civilian words for what you did, see where AI fits in logistics today, and build two real tools: an inventory reorder sheet and a delivery schedule. You will finish by briefing the plan, just as you would brief a commander, but in civilian terms.",
    "Each lesson takes about five minutes. You need a free spreadsheet (Google Sheets or Microsoft Excel on the web) and a free AI assistant such as ChatGPT, Microsoft Copilot or Google Gemini. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Make a one-page operations brief for a small made-up business (for example a food bank or a parts shop): an inventory sheet with a reorder point for five items, a one-week delivery schedule drafted with AI and checked by you, three risks with a backup plan for each, and two résumé lines that describe your military logistics work in civilian words.",
  chapters: [
    {
      name: "Chapter 1: From military logistics to civilian supply chains",
      lessons: [
        {
          title: "Speaking the civilian supply-chain language",
          minutes: 5,
          goal: "Translate five military logistics terms into the civilian words employers use.",
          text: [
            "A supply chain is every step that gets a product from where it is made to the person who uses it. Logistics is the planning and moving part of that chain.",
            "Many military terms have civilian twins. A supply room or warehouse is inventory management. A convoy is transportation or freight. A motor pool is fleet maintenance. Class I to IX supply planning is demand planning. The last stretch to the user is called \"last-mile delivery\".",
            "My Next Move for Veterans (mynextmove.org/vets), from the U.S. Department of Labor, lets you enter your military job and see similar civilian careers, such as logistician, warehouse supervisor or dispatcher."
          ],
          steps: ["List five logistics tasks you did in service.", "Ask an AI assistant: \"Translate these military logistics tasks into civilian supply-chain terms.\"", "Look up your military job on mynextmove.org/vets.", "Write the civilian job titles that fit best."],
          words: [["Supply chain", "every step from making a product to the person who uses it."], ["Inventory", "the items a business keeps in stock."], ["Last-mile delivery", "the final trip that brings an item to the customer."], ["3PL", "third-party logistics: a company hired to store and ship goods for another business."]],
          slides: [
            { title: "Supply chain and logistics", bullets: ["Supply chain: every step to the user", "Logistics: the planning and moving part"] },
            { title: "Military to civilian", bullets: ["Supply room = inventory management", "Convoy = transportation or freight", "Motor pool = fleet maintenance", "Supply planning = demand planning"] },
            { title: "Find matching jobs", bullets: ["mynextmove.org/vets (Department of Labor)", "Logistician, warehouse supervisor, dispatcher"] }
          ],
          sources: [{ name: "My Next Move for Veterans (U.S. Department of Labor)", url: "https://www.mynextmove.org/vets/" }],
          tryIt: "Write five logistics tasks from your service. Ask an AI assistant to translate them into civilian terms, then look up your military job on mynextmove.org/vets and write two matching job titles.",
          youCanNow: "describe your military logistics work in the words civilian employers use."
        },
        {
          title: "Where AI fits in logistics",
          minutes: 4,
          goal: "Name four ways AI is used in logistics and the decisions people still make.",
          text: [
            "Companies use AI to forecast demand (guess how much of an item people will need), plan routes that save fuel and time, spot late shipments early, and answer customer questions about deliveries.",
            "AI only knows the data it is given. If the data is old, wrong or missing, the plan will be wrong too. A storm, a road closure or a holiday rush may not be in the data.",
            "People still make the calls: checking the plan makes sense, handling exceptions, keeping drivers and workers safe, and talking to customers. That judgment is exactly what military logistics trained you to do."
          ],
          words: [["Forecast", "a careful guess about what will happen, such as how much stock you will need."], ["Route optimization", "finding the best order and path for deliveries."], ["Exception", "something that does not go to plan, like a late truck."]],
          slides: [
            { title: "AI in logistics", bullets: ["Forecasting demand", "Planning routes", "Spotting late shipments", "Answering delivery questions"] },
            { title: "AI's weak spot", bullets: ["It only knows the data it is given", "Old or missing data = wrong plan", "Storms and road closures may be missing"] },
            { title: "People still decide", bullets: ["Does the plan make sense?", "Handling exceptions", "Safety and customers"] }
          ],
          tryIt: "Ask an AI assistant: \"How do warehouses and trucking companies use AI today? Give four examples in simple words.\" Next to each, write one thing a person still has to check.",
          youCanNow: "explain where AI helps in logistics and where human judgment is still needed."
        },
        {
          title: "Building an inventory reorder sheet",
          minutes: 6,
          goal: "Build a spreadsheet that shows when to reorder each item.",
          text: [
            "A reorder point is the stock level that tells you to order more before you run out. A simple formula is: daily use times lead time (days to get a delivery), plus safety stock (extra for surprises).",
            "Example: a food bank uses 20 cans of beans a day, delivery takes 5 days, and it keeps 40 extra. Reorder point = 20 x 5 + 40 = 140. When stock drops to 140, order more.",
            "An AI assistant can help you set up the columns and the spreadsheet formula. Always test the formula on one row by hand to make sure it is right."
          ],
          steps: ["Open a blank Google Sheet or Excel workbook.", "Make columns: Item, On hand, Daily use, Lead time (days), Safety stock, Reorder point, Order now?", "Ask an AI assistant for the formula for Reorder point and for an \"Order now?\" yes/no column.", "Add five items with made-up numbers.", "Check one row by hand with a calculator."],
          words: [["Reorder point", "the stock level that tells you to order more."], ["Lead time", "how many days it takes for an order to arrive."], ["Safety stock", "extra stock kept for surprises."], ["Formula", "a calculation a spreadsheet does for you."]],
          slides: [
            { title: "Reorder point", bullets: ["Daily use x lead time + safety stock", "When stock hits it, order more"] },
            { title: "Example: food bank beans", bullets: ["20 a day x 5 days + 40 extra = 140", "At 140 cans, place the order"] },
            { title: "Build it with AI help", bullets: ["Ask AI for the column formulas", "Add five items", "Check one row by hand"] }
          ],
          tryIt: "Build the reorder sheet with five items. Ask an AI assistant for the formulas, then check one row with a calculator and fix anything that is wrong.",
          youCanNow: "build a spreadsheet that shows when each item needs to be reordered."
        }
      ],
      check: {
        title: "Knowledge Check 1: From military logistics to civilian supply chains",
        questions: [
          { q: "A military convoy is closest to which civilian term?", options: ["Payroll", "Marketing", "Transportation or freight", "Human resources"], answer: 2, why: "Moving goods by vehicle is transportation or freight." },
          { q: "What is last-mile delivery?", options: ["The final trip to the customer", "The first mile of a run", "A running race", "A factory"], answer: 0, why: "It is the last stretch to the person who uses the item." },
          { q: "Why can an AI route plan be wrong?", options: ["Trucks never break", "AI is always right", "Maps never change", "AI only knows the data it is given"], answer: 3, why: "Missing or old data leads to wrong plans." },
          { q: "Daily use 10, lead time 4 days, safety stock 20. What is the reorder point?", options: ["14", "34", "40", "60"], answer: 3, why: "10 x 4 + 20 = 60." },
          { q: "After an AI writes a spreadsheet formula for you, you should:", options: ["Never look at it", "Check one row by hand", "Delete the sheet", "Share it without checking"], answer: 1, why: "A hand check proves the formula is right." }
        ]
      }
    },
    {
      name: "Chapter 2: Planning and briefing operations",
      lessons: [
        {
          title: "Drafting a delivery schedule with AI",
          minutes: 5,
          goal: "Use an AI assistant to draft a one-week delivery schedule and check it against real limits.",
          text: [
            "A delivery schedule says who goes where, when, with what. AI can draft one quickly if you give it the facts: stops, opening hours, number of vehicles and drivers, driver hours, and what each stop needs.",
            "Then you check it like a convoy plan. Are travel times realistic on a real map? Are drivers getting breaks? Does any stop get a delivery when it is closed?",
            "Use made-up or business-safe data only. Do not paste customer names, home addresses or anything your employer has not approved for AI tools."
          ],
          steps: ["List stops, hours, vehicles, drivers and what each stop needs.", "Ask an AI assistant: \"Make a one-week delivery schedule as a table with these limits.\"", "Check travel times on a map app.", "Check breaks, opening hours and vehicle space.", "Fix the schedule and save it next to your inventory sheet."],
          words: [["Delivery schedule", "a plan of who delivers what, where and when."], ["Constraint", "a limit the plan must follow, such as opening hours or driver hours."]],
          slides: [
            { title: "Give AI the facts", bullets: ["Stops and opening hours", "Vehicles and drivers", "What each stop needs"] },
            { title: "Check it like a convoy plan", bullets: ["Real travel times on a map", "Driver breaks", "No deliveries to closed stops"] },
            { title: "Protect data", bullets: ["Made-up or approved data only", "No customer names or home addresses"] }
          ],
          tryIt: "For a made-up food bank with three pantry stops and one van, ask an AI assistant for a one-week delivery schedule as a table. Check it on a map app and fix one problem you find.",
          youCanNow: "draft a delivery schedule with AI and check it against real-world limits."
        },
        {
          title: "Spotting problems in operations data",
          minutes: 5,
          goal: "Use AI to summarize a small data table and confirm what it finds yourself.",
          text: [
            "Operations teams look at data every day: late deliveries, items running low, damaged goods. AI can summarize a table and point to patterns, like \"Tuesday deliveries are late most often.\"",
            "Treat AI findings like intel: useful, but confirm before you act. Sort or filter the spreadsheet yourself to see if the pattern is real.",
            "When you find a real problem, write the cause you think it is, a fix, and how you will know the fix worked."
          ],
          steps: ["Make a small table: date, stop, on time (yes/no), reason if late.", "Ask an AI assistant: \"What patterns do you see in this table?\"", "Sort or filter the sheet yourself to confirm.", "Write: problem, likely cause, fix, how you will measure it."],
          words: [["Pattern", "something that happens again and again in the data."], ["Filter", "a spreadsheet tool that shows only the rows you choose."]],
          slides: [
            { title: "AI can summarize data", bullets: ["Late deliveries, low stock, damage", "It points to patterns"] },
            { title: "Treat it like intel", bullets: ["Useful, but confirm before you act", "Sort or filter the sheet yourself"] },
            { title: "Write the fix", bullets: ["Problem and likely cause", "The fix", "How you will measure it"] }
          ],
          tryIt: "Make a 10-row delivery table with some late deliveries. Ask an AI assistant for patterns, then filter the sheet yourself to confirm one, and write a fix.",
          youCanNow: "use AI to find a pattern in operations data and confirm it before acting."
        },
        {
          title: "Briefing the plan and finding work",
          minutes: 5,
          goal: "Brief an operations plan in civilian terms and connect it to your next job step.",
          text: [
            "Civilian managers like short briefs, just like commanders: the situation, the plan, the risks and the backup plans, and what you need from them. Use civilian words: \"inventory\", \"delivery schedule\", \"on-time rate\".",
            "Turn your service into résumé lines with numbers, for example: \"Managed inventory of 1,200 items worth $2 million with zero losses at audit.\" Use only numbers you can stand behind.",
            "For job help, the Department of Labor's Veterans' Employment and Training Service (VETS) runs the Transition Assistance Program and points to apprenticeships. If you have the GI Bill, VA's on-the-job training and apprenticeship benefit can pay a monthly amount while you train with an approved employer. Check the official pages for who qualifies."
          ],
          steps: ["Write the brief: situation, plan, risks, backups, what you need.", "Use civilian terms throughout.", "Write two résumé lines with real numbers.", "Check dol.gov/agencies/vets and the va.gov on-the-job training page for next steps."],
          words: [["Brief", "a short spoken or written summary of a plan for a decision maker."], ["On-time rate", "the share of deliveries that arrive when promised."]],
          slides: [
            { title: "Brief like you did in service", bullets: ["Situation, plan, risks, backups", "What you need from them", "In civilian words"] },
            { title: "Résumé lines with numbers", bullets: ["\"Managed 1,200 items worth $2M, zero losses\"", "Only numbers you can stand behind"] },
            { title: "Official help", bullets: ["DOL VETS: TAP and apprenticeships", "VA on-the-job training (GI Bill)", "Check who qualifies on the official pages"] }
          ],
          sources: [
            { name: "U.S. Department of Labor, Veterans' Employment and Training Service", url: "https://www.dol.gov/agencies/vets" },
            { name: "VA: On-the-job training and apprenticeships", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/on-the-job-training-apprenticeships/" }
          ],
          tryIt: "Final task: put your reorder sheet, checked delivery schedule, three risks with backups, and two résumé lines into a one-page operations brief.",
          youCanNow: "plan inventory and deliveries with AI help, check the plan yourself, and brief it in civilian terms."
        }
      ],
      check: {
        title: "Knowledge Check 2: Planning and briefing operations",
        questions: [
          { q: "What should you give AI to draft a delivery schedule?", options: ["Your bank login", "Only the word \"schedule\"", "Customer home addresses", "Stops, hours, vehicles, drivers and needs"], answer: 3, why: "Real limits let the AI draft a usable plan." },
          { q: "The AI schedule sends a van to a stop when it is closed. You should:", options: ["Fix the schedule", "Keep it anyway", "Fire the driver", "Close the business"], answer: 0, why: "Checking against limits is your job." },
          { q: "AI says Tuesdays are late most often. What next?", options: ["Ignore it", "Cancel Tuesdays", "Filter the data yourself to confirm", "Post it online"], answer: 2, why: "Confirm before acting, like checking intel." },
          { q: "A good operations brief includes:", options: ["No plan", "Only jokes", "Only military codes", "Situation, plan, risks and backups"], answer: 3, why: "That is what decision makers need." },
          { q: "Which VA benefit can pay a monthly amount while you train with an approved employer?", options: ["Life insurance", "Home loan", "On-the-job training and apprenticeships", "Burial benefit"], answer: 2, why: "va.gov describes a monthly payment during approved OJT or apprenticeship." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Logistics and Operations",
    questions: [
      { q: "A supply chain is:", options: ["A chain on a truck", "Every step from making a product to the person who uses it", "A type of contract", "A warehouse door"], answer: 1, why: "It covers the whole path to the user." },
      { q: "A military motor pool is closest to:", options: ["Fleet maintenance", "Accounting", "Marketing", "Legal"], answer: 0, why: "Both maintain the vehicles." },
      { q: "What is a 3PL?", options: ["A military rank", "A type of truck", "A company hired to store and ship goods for another business", "A spreadsheet"], answer: 2, why: "Third-party logistics companies handle storage and shipping." },
      { q: "Which free site matches military jobs to civilian careers?", options: ["My Next Move for Veterans", "A music app", "A shopping site", "A game"], answer: 0, why: "mynextmove.org/vets is run for the Department of Labor." },
      { q: "Demand forecasting means:", options: ["Hiring drivers", "Delivering faster", "Painting trucks", "A careful guess about how much will be needed"], answer: 3, why: "A forecast estimates future need." },
      { q: "Which might an AI route planner miss?", options: ["The number of stops you gave it", "A road closed this morning", "The map", "The word \"route\""], answer: 1, why: "New events may not be in its data." },
      { q: "Who handles exceptions like a late truck?", options: ["Nobody", "People", "Only the AI", "The customer"], answer: 1, why: "Human judgment handles exceptions." },
      { q: "Lead time is:", options: ["Hours a store is open", "Time a driver leads a convoy", "Lunch time", "Days it takes an order to arrive"], answer: 3, why: "Lead time is the wait for a delivery." },
      { q: "Safety stock is:", options: ["Extra stock kept for surprises", "Stock that is locked up", "Damaged goods", "Stock sold today"], answer: 0, why: "It covers unexpected demand or delays." },
      { q: "Daily use 20, lead time 5, safety stock 40. Reorder point?", options: ["25", "65", "100", "140"], answer: 3, why: "20 x 5 + 40 = 140." },
      { q: "How do you know an AI-written formula is right?", options: ["Delete it", "Trust it", "Ask a different AI only", "Check one row by hand"], answer: 3, why: "A hand check confirms the math." },
      { q: "A constraint in a schedule is:", options: ["A delivery", "A type of truck", "A limit the plan must follow", "A customer"], answer: 2, why: "Opening hours and driver hours are constraints." },
      { q: "How do you check AI travel times?", options: ["Guess", "Compare with a map app", "Ask the driver to hurry", "Ignore them"], answer: 1, why: "A map app gives realistic times." },
      { q: "Which should NOT go into a public AI tool?", options: ["Customer names and home addresses", "Made-up stops", "Opening hours of a made-up store", "Number of vans"], answer: 0, why: "Customer details are private." },
      { q: "AI findings in data should be treated like:", options: ["Jokes", "Orders you must follow", "Intel: useful but confirm before acting", "Final truth"], answer: 2, why: "Confirming prevents acting on a mistake." },
      { q: "A spreadsheet filter lets you:", options: ["Show only the rows you choose", "Delete the sheet", "Print faster", "Change fonts"], answer: 0, why: "Filters help you check patterns." },
      { q: "After finding a real problem, write:", options: ["A new password", "Only who to blame", "Nothing", "The cause, a fix, and how you will measure it"], answer: 3, why: "A measured fix proves it worked." },
      { q: "On-time rate means:", options: ["Driver speed", "The share of deliveries that arrive when promised", "Fuel cost", "Number of trucks"], answer: 1, why: "It measures promises kept." },
      { q: "Which résumé line is strongest?", options: ["\"Did supply stuff.\"", "\"Managed 1,200 items worth $2M with zero losses at audit.\"", "\"Worked hard.\"", "\"Army.\""], answer: 1, why: "Numbers and results show your impact." },
      { q: "The DOL agency that runs veteran employment programs including TAP is:", options: ["EPA", "IRS", "FAA", "VETS"], answer: 3, why: "The Veterans' Employment and Training Service runs TAP for DOL." }
    ]
  }
};
