"use strict";

// Koach Learn course (shared): "AI in Finance". Categories: Small Business, Non Profits. Shape and rules: ../README.md; model: ../re-entry/reentry-ai-digital-confidence.js.
// Teaches money management for an organization with AI help; no investment advice; points to irs.gov and a professional for tax questions.

module.exports = {
  id: "ai-in-finance",
  category: "Small Business",
  name: "AI in Finance",
  skills: "Keeping money data safe with AI, Categorizing income and expenses, Building a monthly budget, Comparing budget to actual, Forecasting cash flow, Explaining the numbers",
  outcome: "use an AI assistant and a spreadsheet to sort a month of income and expenses, build a budget and compare it to what really happened, make a 13-week cash flow forecast, and explain the results in plain words, without sharing private financial details.",
  about: [
    "Money questions keep owners and nonprofit leaders up at night: Can we make payroll? Where did the money go? Can we afford a new hire or program? AI tools can help you organize numbers, build spreadsheets and explain what they mean.",
    "This course is for small business owners, nonprofit directors, treasurers and bookkeepers in training. Examples include a food truck, a cleaning company, a youth sports nonprofit and a church food ministry.",
    "You will use free tools such as Google Sheets or Excel with ChatGPT, Microsoft Copilot or Google Gemini. You will practice with sample or cleaned-up numbers, never account numbers. Each lesson is about five minutes with a \"Try it now\" task, a knowledge check after each chapter and a 20-question quiz at the end. This course is not tax, legal or investment advice; for those, see a licensed professional and irs.gov."
  ],
  finalTask: "Using a month of real or sample transactions with all account numbers and names removed, build a spreadsheet that sorts income and expenses into categories, a budget-versus-actual table with the three biggest differences explained, and a 13-week cash flow forecast with the lowest week marked. Then write a five-sentence plain-language money update for an owner, partner or board.",
  chapters: [
    {
      name: "Chapter 1: Organizing the money",
      lessons: [
        {
          title: "Using AI with money safely",
          minutes: 5,
          goal: "Prepare financial data so you can get AI help without exposing private details.",
          text: [
            "AI assistants are good at spreadsheet formulas, sorting, finding patterns and explaining terms like \"accrual\" or \"gross margin\". They are not accountants, can make math mistakes, and do not know tax rules for your exact situation.",
            "Never paste bank or card numbers, routing numbers, passwords, Social Security or tax ID numbers, or names of customers, donors or employees into a general AI tool. Instead, export transactions to a spreadsheet, delete those columns, and replace names with general labels like \"Customer A\" or \"Supplier 1\".",
            "Check AI math with the spreadsheet itself. Ask the AI for a formula, then let the spreadsheet calculate, and spot-check a few totals by hand. For tax, payroll and legal questions, confirm with irs.gov, your state tax agency or a licensed accountant."
          ],
          steps: ["Export transactions from your bank or bookkeeping tool to a spreadsheet.", "Delete account numbers and any ID numbers.", "Replace people's names with labels like \"Customer A\".", "Use AI for formulas and explanations, not final tax answers.", "Spot-check AI math with the spreadsheet."],
          words: [["Export", "save information from one program into a file another program can open."], ["Transaction", "one money movement in or out, like a sale or a bill paid."]],
          slides: [
            { title: "AI is good at", bullets: ["Spreadsheet formulas and sorting", "Finding patterns", "Explaining money terms"] },
            { title: "Never paste into AI", bullets: ["Bank, card or routing numbers", "Passwords, SSNs, tax ID numbers", "Customer, donor or employee names"] },
            { title: "Clean, then check", bullets: ["Delete numbers, label names", "Let the spreadsheet do the math", "Tax questions: irs.gov or an accountant"] }
          ],
          tryIt: "Export or type 20 transactions from a real or sample month into a spreadsheet. Remove every account number and replace names with labels.",
          youCanNow: "prepare money data for AI help without exposing private details."
        },
        {
          title: "Sorting income and expenses into categories",
          minutes: 5,
          goal: "Use AI to suggest categories and a spreadsheet to total each one.",
          text: [
            "Categories turn a long list of transactions into a picture. Common business categories: sales, cost of goods (ingredients, supplies for products), rent, payroll, marketing, software, vehicle and fuel, insurance and fees. Nonprofits often add donations, grants, program costs and fundraising costs.",
            "Paste the cleaned description and amount columns into an AI assistant and ask: \"Suggest a category for each line from this list: [your categories]. Return a table.\" Then copy the table back into your sheet and fix any it got wrong.",
            "Ask AI for the formula to total each category. In both Google Sheets and Excel, SUMIF adds up amounts that match a label, for example =SUMIF(C:C, \"Rent\", D:D)."
          ],
          steps: ["Write your category list.", "Ask AI to suggest a category for each cleaned transaction.", "Paste the categories into your sheet and correct mistakes.", "Use SUMIF to total each category.", "Check that the category totals add up to the full total."],
          words: [["Category", "a group of similar transactions, like rent or marketing."], ["SUMIF", "a spreadsheet formula that adds amounts that match a condition."], ["Cost of goods", "what you spend to make or buy the products you sell."]],
          slides: [
            { title: "Common categories", bullets: ["Sales, cost of goods, rent, payroll", "Marketing, software, fuel, insurance", "Nonprofits: donations, grants, programs"] },
            { title: "Let AI suggest, you correct", bullets: ["Paste cleaned descriptions and amounts", "Ask for a category from your list", "Fix the ones it got wrong"] },
            { title: "Total with SUMIF", bullets: ["=SUMIF(C:C, \"Rent\", D:D)", "Category totals must equal the full total"] }
          ],
          tryIt: "Have AI suggest categories for your 20 cleaned transactions, correct them, and total each category with SUMIF. Confirm the totals match the overall total.",
          youCanNow: "sort transactions into categories and total them with a spreadsheet formula."
        },
        {
          title: "Building a budget and comparing it to actual",
          minutes: 6,
          goal: "Build a monthly budget and a budget-versus-actual table that shows where you are off.",
          text: [
            "A budget is your plan for money in and out for a period. Budget versus actual compares the plan to what really happened. The difference is called the variance.",
            "Set up columns: category, budget, actual, variance (actual minus budget) and percent off. Ask AI: \"Give me Google Sheets formulas for variance and percent variance.\" Then look for the biggest variances, in dollars and in percent.",
            "Explain each big variance in one sentence. \"Fuel was $300 over budget because we added a second delivery route.\" AI can help you word explanations, but only you know the real reasons."
          ],
          steps: ["List categories with a budget amount for each.", "Bring in the actual totals from Lesson 2.", "Add variance = actual minus budget.", "Add percent off = variance divided by budget.", "Explain the three biggest variances in one sentence each."],
          words: [["Budget", "a plan for money coming in and going out."], ["Variance", "the difference between the budget and what really happened."]],
          slides: [
            { title: "Budget vs actual", bullets: ["Budget: the plan", "Actual: what happened", "Variance: the difference"] },
            { title: "Set up the table", bullets: ["Category, budget, actual", "Variance and percent off"] },
            { title: "Explain the big ones", bullets: ["Three biggest differences", "One sentence each with the real reason"] }
          ],
          tryIt: "Build a budget-versus-actual table for your month with variance and percent off. Explain the three biggest variances in one sentence each.",
          youCanNow: "build a budget, compare it to actual results and explain the differences."
        }
      ],
      check: {
        title: "Knowledge Check 1: Organizing the money",
        questions: [
          { q: "Which should you NEVER paste into a general AI tool?", options: ["A category list", "A cleaned table of amounts", "Your bank account and routing numbers", "A question about what \"variance\" means"], answer: 2, why: "Account numbers are private financial details." },
          { q: "The AI gives a total that looks wrong. What should you do?", options: ["Let the spreadsheet calculate and spot-check by hand", "Trust the AI", "Delete the data", "Post it to the board"], answer: 0, why: "AI can make math mistakes; the spreadsheet and a hand check confirm." },
          { q: "What does =SUMIF(C:C, \"Rent\", D:D) do?", options: ["Deletes rent rows", "Counts customers", "Sorts by date", "Adds the amounts in column D where column C says Rent"], answer: 3, why: "SUMIF adds amounts matching a condition." },
          { q: "Budget was $500 for fuel; actual was $800. What is the variance?", options: ["$1,300", "$300 over", "$300 under", "$500"], answer: 1, why: "Actual minus budget = 800 - 500 = 300 over." },
          { q: "Who should explain why a variance happened?", options: ["The AI alone", "You, using what really happened", "Nobody", "A random website"], answer: 1, why: "Only you know the real reasons behind the numbers." }
        ]
      }
    },
    {
      name: "Chapter 2: Planning and explaining",
      lessons: [
        {
          title: "Forecasting cash flow for the next 13 weeks",
          minutes: 6,
          goal: "Build a 13-week cash flow forecast and find the week money is tightest.",
          text: [
            "Profit and cash are not the same. You can be profitable on paper and still run out of cash if customers pay late or a big bill comes due. A cash flow forecast shows when money comes in and goes out, week by week.",
            "A 13-week forecast (about three months) is a common tool. Rows: starting cash, cash in (sales, payments, donations, grants), cash out (payroll, rent, suppliers, loan payments), and ending cash. Each week's ending cash becomes next week's starting cash.",
            "Ask AI to build the template: \"Make a 13-week cash flow forecast table for Google Sheets with formulas where each week's ending cash becomes the next week's starting cash.\" Fill in your expected numbers, then find the lowest week. That is when you may need to delay a purchase, chase a payment or arrange a line of credit."
          ],
          steps: ["Ask AI for a 13-week cash flow template with formulas.", "Enter today's cash balance as week 1 starting cash.", "Enter expected cash in and cash out for each week.", "Check that ending cash carries to the next week.", "Mark the lowest week and plan for it."],
          words: [["Cash flow", "the timing of money coming in and going out."], ["Forecast", "a best estimate of future numbers."], ["Line of credit", "a set amount a bank lets you borrow when needed."]],
          slides: [
            { title: "Profit is not cash", bullets: ["Late payments and big bills", "You can run short while profitable"] },
            { title: "13-week forecast rows", bullets: ["Starting cash", "Cash in and cash out", "Ending cash carries to next week"] },
            { title: "Find the lowest week", bullets: ["Delay a purchase", "Chase a payment", "Plan financing early"] }
          ],
          tryIt: "Build a 13-week cash flow forecast with AI's help. Fill in real or sample numbers and mark the lowest week with one action you would take.",
          youCanNow: "build a 13-week cash flow forecast and plan for the tightest week."
        },
        {
          title: "Spotting problems and fraud with AI",
          minutes: 5,
          goal: "Use AI and simple checks to spot unusual spending, duplicates and scams.",
          text: [
            "AI and spreadsheets can flag things a busy person misses: duplicate payments, a subscription you forgot, a sudden jump in a category, or a vendor you do not recognize.",
            "Ask: \"Look at this cleaned table. List possible duplicates, unusual amounts and categories that changed a lot from last month.\" Then investigate each item yourself.",
            "Watch for scams aimed at businesses and nonprofits: fake invoices, emails asking you to change a vendor's bank details, and urgent payment requests that seem to come from the boss. Always confirm by calling a phone number you already know. Report fraud at ReportFraud.ftc.gov."
          ],
          steps: ["Ask AI to list possible duplicates and unusual amounts.", "Compare categories to last month.", "Investigate each flag yourself.", "Confirm any bank-detail change by calling a known number.", "Report fraud to the FTC."],
          words: [["Duplicate payment", "paying the same bill twice."], ["Invoice", "a bill asking for payment."], ["Payment fraud", "tricking someone into sending money to the wrong place."]],
          slides: [
            { title: "What AI can flag", bullets: ["Duplicate payments", "Forgotten subscriptions", "Sudden jumps or unknown vendors"] },
            { title: "Business scams", bullets: ["Fake invoices", "\"Please update our bank details\"", "Urgent requests that seem to come from the boss"] },
            { title: "Protect the money", bullets: ["Call a number you already know", "Investigate every flag", "Report at ReportFraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC: ReportFraud.ftc.gov", url: "https://reportfraud.ftc.gov/" }, { name: "FTC: How to recognize and avoid phishing scams", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" }],
          tryIt: "Ask AI to review your cleaned transactions for duplicates and unusual amounts. Investigate each flag and write what you found.",
          youCanNow: "use AI and simple checks to spot unusual spending and payment scams."
        },
        {
          title: "Explaining the numbers and keeping good records",
          minutes: 5,
          goal: "Write a plain-language money update and know how long to keep records.",
          text: [
            "Owners, partners and boards need a short, clear update, not a giant spreadsheet. A good update has five sentences: how much came in, how much went out, the biggest variance and why, the cash outlook from your forecast, and one decision or action needed.",
            "Ask AI to turn your numbers into a draft, then check every figure against the spreadsheet. Remove anything AI added that is not true.",
            "Keep records. The IRS says to keep records that support income and deductions until the period of limitations for that return runs out, generally 3 years, with longer periods in some cases and at least 4 years for employment tax records. Check irs.gov or an accountant for your situation."
          ],
          steps: ["Write five sentences: in, out, biggest variance, cash outlook, decision needed.", "Have AI tidy the wording.", "Check every number against the spreadsheet.", "Save the spreadsheet and receipts in a safe, backed-up folder.", "Check irs.gov for how long to keep them."],
          words: [["Board", "the group that oversees a nonprofit or company."], ["Period of limitations", "the time the IRS has to review or change a tax return."]],
          slides: [
            { title: "A five-sentence update", bullets: ["Money in and money out", "Biggest variance and why", "Cash outlook and decision needed"] },
            { title: "AI drafts, you verify", bullets: ["Check every figure", "Remove anything not true"] },
            { title: "Keep records (IRS)", bullets: ["Generally 3 years; longer in some cases", "At least 4 years for employment tax records", "Check irs.gov or an accountant"] }
          ],
          sources: [{ name: "IRS: How long should I keep records?", url: "https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records" }],
          tryIt: "Final task: write a five-sentence money update from your categorized month, budget-versus-actual table and 13-week forecast. Check every number, then save all files in a backed-up folder.",
          youCanNow: "organize, plan and explain an organization's money with AI help while keeping data safe."
        }
      ],
      check: {
        title: "Knowledge Check 2: Planning and explaining",
        questions: [
          { q: "Why can a profitable business still run out of cash?", options: ["Profit always equals cash", "Banks hold all profits", "It cannot happen", "Payments come in late while bills come due"], answer: 3, why: "Timing of cash in and out matters." },
          { q: "In a cash flow forecast, next week's starting cash equals:", options: ["This week's ending cash", "Last year's profit", "The budget", "Zero"], answer: 0, why: "Each week carries forward." },
          { q: "An email from a supplier asks you to send future payments to a new bank account. What do you do?", options: ["Update it right away", "Reply with your bank login", "Call the supplier at a number you already know to confirm", "Forward it to all staff"], answer: 2, why: "Bank-detail change requests are a common fraud." },
          { q: "What does the IRS say is the general period to keep records supporting a return?", options: ["One week", "Never keep them", "Exactly 50 years", "Generally 3 years, longer in some cases"], answer: 3, why: "IRS guidance gives 3 years as the general period with exceptions." },
          { q: "AI drafts a board money update. What must you do before sending it?", options: ["Send it unread", "Add extra numbers to look good", "Check every number against the spreadsheet", "Delete the spreadsheet"], answer: 2, why: "AI can get figures wrong; you verify." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI in Finance",
    questions: [
      { q: "Which is AI good at in finance work?", options: ["Giving final tax rulings", "Writing spreadsheet formulas and explaining terms", "Guaranteeing investment returns", "Signing bank documents"], answer: 1, why: "AI helps with formulas and explanations, not final tax or legal answers." },
      { q: "Before pasting transactions into AI, you should:", options: ["Remove account numbers and replace names with labels", "Add your password", "Include donor phone numbers", "Add Social Security numbers"], answer: 0, why: "Clean data protects privacy." },
      { q: "\"Customer A\" in place of a real name is a:", options: ["Typo", "Category", "Label that protects privacy", "Variance"], answer: 2, why: "Labels hide private names." },
      { q: "Where should you confirm a tax question?", options: ["irs.gov, your state tax agency or a licensed accountant", "A social media post", "Only an AI chat", "A friend's guess"], answer: 0, why: "Official sources and professionals give reliable tax answers." },
      { q: "Which is a typical nonprofit income category?", options: ["Cost of goods", "Fuel", "Rent", "Grants"], answer: 3, why: "Grants and donations are nonprofit income." },
      { q: "What is a transaction?", options: ["A type of budget", "One money movement in or out", "A tax form", "A bank password"], answer: 1, why: "Each sale or payment is a transaction." },
      { q: "After AI suggests categories, you should:", options: ["Accept them all", "Correct any it got wrong", "Delete the sheet", "Email them to customers"], answer: 1, why: "AI suggestions need checking." },
      { q: "Category totals should:", options: ["Be bigger than the full total", "Be random", "Be left blank", "Add up to the full total"], answer: 3, why: "This check catches missing or double-counted lines." },
      { q: "A budget is:", options: ["A plan for money in and out", "A bank account", "A tax return", "A loan"], answer: 0, why: "It is the money plan for a period." },
      { q: "Budget $1,000 for marketing; actual $700. The variance is:", options: ["$300 over budget", "$1,700", "$300 under budget", "$700"], answer: 2, why: "700 - 1,000 = -300, so $300 under." },
      { q: "Why explain each big variance?", options: ["To make the report longer", "It is never needed", "To hide mistakes", "So decision makers know what happened and why"], answer: 3, why: "Explanations turn numbers into decisions." },
      { q: "How many weeks does the course's cash flow forecast cover?", options: ["2", "13", "52", "100"], answer: 1, why: "A 13-week forecast covers about three months." },
      { q: "The lowest week in your forecast tells you:", options: ["Your total profit", "When cash will be tightest, so you can plan", "Your tax bill", "Nothing useful"], answer: 1, why: "It shows when to act early." },
      { q: "A line of credit is:", options: ["A set amount a bank lets you borrow when needed", "A spreadsheet line", "A type of donation", "A tax deduction"], answer: 0, why: "It can cover short cash gaps." },
      { q: "Which can AI help flag in your transactions?", options: ["Your future lottery wins", "The exact tax you owe", "Possible duplicate payments", "Customers' passwords"], answer: 2, why: "AI can spot patterns like duplicates." },
      { q: "An urgent email that seems to be from your boss asks for a wire today. You should:", options: ["Confirm by phone at a number you already know", "Send it immediately", "Reply with bank details", "Ignore the boss forever"], answer: 0, why: "Urgent payment requests are a common scam." },
      { q: "Where can you report fraud in the U.S.?", options: ["A random forum", "The scammer's email", "Nowhere", "ReportFraud.ftc.gov"], answer: 3, why: "The FTC collects fraud reports." },
      { q: "A good money update for a board is:", options: ["The raw spreadsheet only", "Five clear sentences with the key numbers and a decision", "A 40-page report", "No numbers at all"], answer: 1, why: "Short and clear helps people decide." },
      { q: "Employment tax records should be kept, per the IRS, for at least:", options: ["1 month", "4 years", "1 year", "No time"], answer: 1, why: "The IRS says at least 4 years for employment tax records." },
      { q: "This course gives investment advice.", options: ["True: buy what AI suggests", "True: always invest grant money", "True: AI picks stocks", "False: see a licensed professional for that"], answer: 3, why: "The course teaches money management, not investment advice." }
    ]
  }
};
