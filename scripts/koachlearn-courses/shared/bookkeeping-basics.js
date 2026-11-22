"use strict";

// Koach Learn course: shared -> "Bookkeeping Basics" (one of the life-skills courses the owner asked for on 28 October 2026).
// Listed for Entrepreneurs, Small Business, Non Profits and Agriculture (Africa), so the examples mix a small shop, a nonprofit and a farm.
// US recordkeeping facts come from irs.gov; students outside the US are sent to their own tax authority. Taxes: talk to an accountant.
// Shape: see scripts/koachlearn-courses/README.md and the model course re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "bookkeeping-basics",
  category: "Entrepreneurs",
  name: "Bookkeeping Basics",
  skills: "Recording income and expenses, Keeping receipts, Separating business and personal money, Building a spreadsheet ledger, Checking your books against the bank, Reading a profit-and-loss",
  outcome: "keep a simple spreadsheet ledger of your business income and expenses with receipts to back it up, check it against your bank or mobile money statement, and read a one-month profit-and-loss to see whether you made money.",
  about: [
    "This course is for anyone who runs something with money coming in and going out: a hair stylist, a food stand, a cleaning business, a church or youth nonprofit, a farmer selling eggs or vegetables, or someone with a side business online.",
    "You will learn to record every sale and every cost, keep the receipts that prove them, keep business money apart from personal money, set up a simple ledger in a free spreadsheet, check it each month, and read a basic profit-and-loss.",
    "Each lesson takes about five minutes and ends with a \"Try it now\" task you do with your own numbers or a sample. There is a knowledge check after each chapter and a 20-question quiz at the end. Bookkeeping is the record. For taxes and legal questions, talk to an accountant or tax professional."
  ],
  finalTask: "Set up a spreadsheet ledger and enter one month of real or sample business transactions (at least 10), each with a date, description, category, amount and receipt number. Check the ledger against your bank or mobile money statement, then build a one-month profit-and-loss that shows total income, expenses by category and the profit or loss.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "People who run something with money coming in and going out: small business owners, market sellers, farmers who sell produce, side businesses online, and treasurers of churches or small nonprofits. Many keep money in their head, in a cash box or in one personal account.",
    startingPoint: "Can handle cash and mobile money or a bank account, and can open a phone or computer. Few keep written records, and many have never used a spreadsheet formula.",
    gap: "Without records they cannot tell whether the business makes money, which products pay, or what to show a lender, grant maker or tax office. A simple ledger with receipts, a monthly check against the statement and a one-month profit-and-loss closes that gap.",
    constraints: [
      "Reading level: plain words and short sentences; numbers kept simple",
      "Devices: a phone or a shared computer with a free spreadsheet (Google Sheets or Excel)",
      "Time: about 5 minutes per lesson, with practice on their own numbers or a sample",
      "Privacy: no bank account numbers or customer personal details pasted into AI tools",
      "Tax rules differ by country; the course keeps records and sends tax questions to an accountant"
    ],
    prerequisites: "None. Learners new to spreadsheets may find \"Excel and Spreadsheets\" helpful first."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a list of money coming in and going out of a business or nonprofit", action: "identify which items are income and which are expenses", standard: "getting at least 4 of 5 right" },
    { id: "O2", condition: "Given a week of sales and purchases", action: "keep a numbered receipt, invoice or daily sales sheet as proof for each transaction", standard: "so every ledger line has a receipt number you can find" },
    { id: "O3", condition: "Using a separate business account, mobile money till or wallet", action: "keep business money apart from personal money and record pay to yourself as owner's draw", standard: "with no personal spending mixed into business records" },
    { id: "O4", condition: "Using a free spreadsheet such as Google Sheets or Excel", action: "build a ledger with seven columns, fixed categories and a running-balance formula", standard: "so the balance updates correctly after each entry" },
    { id: "O5", condition: "Given your ledger and one month's bank or mobile money statement", action: "reconcile the ledger with the statement and fix any differences", standard: "until the balances match, allowing for cash and payments not yet cleared" },
    { id: "O6", condition: "Given one month of ledger entries", action: "build a profit-and-loss with SUMIF and explain what it shows", standard: "with correct totals and two true sentences about the result" }
  ],
  chapters: [
    {
      name: "Chapter 1: Keep good records",
      lessons: [
        {
          objectives: ["O1"],
          title: "What bookkeeping is and why it matters",
          minutes: 4,
          goal: "Explain what bookkeeping records and name the two kinds of money it tracks.",
          text: [
            "Bookkeeping is writing down every time money comes into or goes out of your business, in one place, in order. It is not hard math. It is a habit.",
            "Money in is income: sales, payments from customers, fees, and for a nonprofit, donations and grants. Money out is expenses: supplies, rent, fuel, seeds, phone, advertising, wages.",
            "The IRS says good records help you watch the progress of your business and prepare your tax returns. They also show which costs you can deduct. Clean records help you get a loan, apply for a grant, answer a question from a tax office, and see which products or services really make money.",
            "Example: a woman sells baked goods at a weekend market. She thinks she is doing well because the cash box is full. When she writes down flour, butter, boxes and the market fee, she finds that cupcakes make money but bread barely covers its cost. Now she can decide what to bake."
          ],
          words: [["Bookkeeping", "keeping a written record of all money coming into and going out of a business."], ["Income", "money that comes in: sales, fees, donations, grants."], ["Expense", "money spent to run the business, like supplies, rent and fuel."], ["Deduct", "to subtract an allowed business cost when working out the tax you owe."]],
          slides: [
            { title: "Bookkeeping is a habit", bullets: ["Write down all money in and out", "In one place, in order", "Not hard math"] },
            { title: "Two kinds of money", bullets: ["Income: sales, fees, donations, grants", "Expenses: supplies, rent, fuel, seeds, wages"] },
            { title: "Why it matters", bullets: ["See how the business is really doing", "Prepare taxes and show deductions", "Get loans and grants; answer questions"] }
          ],
          sources: [{ name: "IRS: Recordkeeping for small businesses", url: "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" }],
          tryIt: "Think of your business, or one you would like to start. Write five kinds of income or money in, and eight kinds of expenses or money out, that it would have.",
          youCanNow: "say what bookkeeping is, sort money into income and expenses, and explain why records matter.",
          quickCheck: [
            { objective: "O1", q: "What is bookkeeping?", options: ["Writing down every time money comes in or goes out, in one place, in order", "Doing hard math once a year", "Filing your tax return", "Counting the cash box at night"], answer: 0, why: "The lesson says bookkeeping is a habit of writing down every money in and money out, in order." },
            { objective: "O1", q: "A baker thinks she is doing well because the cash box is full. What would show her which products really make money?", options: ["Counting the cash again", "Asking customers what they like", "Writing down her costs, such as flour, boxes and the market fee, next to her sales", "Raising every price"], answer: 2, why: "Writing down costs next to sales showed that cupcakes made money while bread barely covered its cost." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Keeping receipts and other proof",
          minutes: 5,
          goal: "Set up a simple system to keep every receipt and invoice.",
          text: [
            "Every entry in your books should have proof behind it. The IRS calls these supporting documents. For sales they include receipt books, invoices, register tapes and deposit records. For purchases and expenses they include receipts, invoices, card statements and records of electronic payments.",
            "Paper receipts fade and get lost. A simple system: take a photo of each receipt the same day, give it a number, and save it in a folder for that month, such as 2026-10. Keep the paper in an envelope with the same month on it. Write the receipt number in your ledger, so you can find the proof of any line.",
            "How long to keep records: the IRS says to keep them as long as you might need to prove the income or deductions on a tax return. For many US returns that is 3 years, but some cases are longer, such as at least 4 years for employment tax records. Check the IRS page for your case. Outside the US, check your own country's tax authority, such as the Kenya Revenue Authority, or ask an accountant.",
            "For cash sales with no receipt, such as eggs sold at the farm gate, write a simple daily sales sheet: date, what you sold, how many, and the total. That sheet is your proof."
          ],
          steps: ["Make one folder per month on your phone or computer, and one envelope per month for paper.", "Photograph every receipt the same day.", "Give each receipt a number and write it on the paper.", "Write cash sales on a daily sales sheet.", "Keep records as long as your tax authority says, or ask an accountant."],
          words: [["Receipt", "a paper or electronic record that you paid or were paid."], ["Invoice", "a bill you send to a customer, or get from a supplier, that lists what was sold and the price."], ["Supporting document", "the proof behind a record in your books, like a receipt, invoice or statement."]],
          slides: [
            { title: "Every entry needs proof", bullets: ["Sales: invoices, receipt books, deposit records", "Costs: receipts, invoices, card statements"] },
            { title: "A simple receipt system", bullets: ["Photo it the same day", "Number it and file it by month", "Write the number in your ledger"] },
            { title: "Cash sales with no receipt", bullets: ["Keep a daily sales sheet", "Date, item, how many, total"] },
            { title: "How long to keep records", bullets: ["US: often 3 years, some cases longer", "Employment tax records: at least 4 years", "Check irs.gov, your tax authority or an accountant"] }
          ],
          sources: [
            { name: "IRS: What kind of records should I keep", url: "https://www.irs.gov/businesses/small-businesses-self-employed/what-kind-of-records-should-i-keep" },
            { name: "IRS: How long should I keep records?", url: "https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records" }
          ],
          tryIt: "Make this month's receipt folder on your phone or computer. Photograph three receipts you have (business ones or everyday ones for practice), number them 1, 2 and 3, and save them in the folder.",
          youCanNow: "keep, number and file receipts so every record in your books has proof behind it.",
          quickCheck: [
            { objective: "O2", q: "What does the IRS call receipts, invoices and deposit records?", options: ["Tax returns", "Supporting documents", "Ledgers", "Profit-and-loss statements"], answer: 1, why: "The IRS calls the papers that prove each entry supporting documents." },
            { objective: "O2", q: "You just paid for supplies with a paper receipt. What do you do the same day?", options: ["Put it in your pocket for later", "Throw it away once you remember the amount", "Write the amount on your hand", "Photograph it, number it and save it in this month's folder"], answer: 3, why: "Photographing and numbering a receipt the same day keeps it from fading or getting lost." }
          ]
        },
        {
          objectives: ["O1","O3"],
          title: "Separating business and personal money",
          minutes: 5,
          goal: "Set up a separate place for business money and pay yourself on purpose.",
          text: [
            "When business and personal money are mixed in one account or one wallet, you cannot tell whether the business is making money. A business lunch, a family grocery run and a supply order all look the same.",
            "Open a separate account for the business: a business bank or credit union account, or a separate mobile money account or till used only for the business. Put every sale into it. Pay every business cost from it.",
            "When you need money for yourself, move a set amount from the business account to your personal account, and write it down as an owner's draw or pay. That is not a business expense; it is you taking out profit. If you ever pay a business cost with personal money, write it in the ledger and keep the receipt.",
            "Nonprofits have one more step: if a donor gives money for one purpose, such as a youth sports program, keep track of it so it is spent on that purpose. A simple column or category for it is enough to start."
          ],
          steps: ["Open a separate business account, mobile money till or wallet.", "Put all sales and donations into it.", "Pay all business costs from it.", "Pay yourself by moving a set amount, and record it as owner's draw.", "If you use personal money for the business, record it and keep the receipt."],
          words: [["Owner's draw", "money the owner takes out of the business for personal use. It is not a business expense."], ["Commingling", "mixing business and personal money in the same account."], ["Restricted donation", "a gift a donor says must be used for a certain purpose."]],
          slides: [
            { title: "Mixed money hides the truth", bullets: ["You cannot tell if the business makes money", "Personal and business costs look the same"] },
            { title: "Give the business its own money", bullets: ["Separate bank, credit union or mobile money account", "All sales in, all business costs out"] },
            { title: "Pay yourself on purpose", bullets: ["Move a set amount to your personal account", "Record it as owner's draw, not an expense"] },
            { title: "Nonprofits", bullets: ["Track gifts given for a certain purpose", "Spend them on that purpose"] }
          ],
          sources: [{ name: "IRS: Recordkeeping for small businesses", url: "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" }],
          tryIt: "Look at the last 10 payments from the account or wallet you use for your business (or your personal one, for practice). Mark each B for business or P for personal. Write down how you will separate them from now on.",
          youCanNow: "keep business money apart from personal money and pay yourself in a way you can track.",
          quickCheck: [
            { objective: "O1", q: "What is an owner's draw?", options: ["A business expense", "A loan from the bank", "Money you move from the business to yourself, taken out of profit", "A donation to the business"], answer: 2, why: "An owner's draw is you taking out profit; it is not a business expense." },
            { objective: "O1", q: "You run your business from your personal account and cannot tell if it makes money. What is the first fix?", options: ["Open a separate account or mobile money till only for the business", "Spend less on groceries", "Stop keeping receipts", "Only use cash"], answer: 0, why: "A separate account keeps business money apart, so you can see what the business earns and spends." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Keep good records",
        questions: [
          { objective: "O1", q: "Which is an expense for a small farm?", options: ["Money from selling tomatoes", "A grant from a donor", "A customer's payment", "Seeds and fertilizer"], answer: 3, why: "Expenses are costs to run the business, like seeds and fertilizer." },
          { objective: "O1", q: "According to the IRS, good records help you:", options: ["Avoid ever paying tax", "Watch your business's progress and prepare tax returns", "Skip writing receipts", "Get free supplies"], answer: 1, why: "The IRS says records help you monitor your business and prepare your returns." },
          { objective: "O2", q: "You sell eggs for cash with no receipts. What is your proof?", options: ["A daily sales sheet with date, item, how many and total", "Your memory", "Nothing is needed", "A photo of your chickens"], answer: 0, why: "A written daily sales sheet records cash sales." },
          { objective: "O2", q: "Why write a receipt number in your ledger?", options: ["It makes the ledger look longer", "The bank requires it", "So you can find the proof for any line", "It changes the total"], answer: 2, why: "Numbering links each record to its proof." },
          { objective: "O3", q: "You move money from the business account to your personal account to pay yourself. How do you record it?", options: ["As a business expense", "As owner's draw", "As a sale", "You do not record it"], answer: 1, why: "Money the owner takes out is an owner's draw, not a business expense." }
        ]
      }
    },
    {
      name: "Chapter 2: Your ledger and your profit",
      lessons: [
        {
          objectives: ["O4"],
          title: "Setting up a simple ledger in a spreadsheet",
          minutes: 6,
          goal: "Build a ledger in a free spreadsheet with the right columns and a running balance.",
          text: [
            "A ledger is a list of every money in and money out, one line per transaction. A free spreadsheet such as Google Sheets or Microsoft Excel works well, and it adds up the numbers for you.",
            "Use seven columns: Date, Description, Category, Money in, Money out, Balance, Receipt number. Put your starting balance in the first row. In the Balance cell of the next row, type a formula that takes the balance above, adds money in and subtracts money out. For example, if Balance is column F, Money in is D and Money out is E, row 3 would be =F2+D3-E3. Copy that formula down.",
            "Choose a short list of categories and use the same words every time, for example: Sales, Donations, Supplies, Rent, Fuel, Phone, Advertising, Wages, Owner's draw. Same words make it easy to add up each category later.",
            "An AI assistant can help you set up the sheet: ask it to explain a formula or suggest categories for your kind of business. Do not paste in bank account numbers or customer personal details."
          ],
          steps: ["Open a new blank spreadsheet, name it, for example \"2026 Ledger\", and name the first tab Ledger.", "Type the column headings: Date, Description, Category, Money in, Money out, Balance, Receipt #.", "Put your starting balance in the Balance column of row 2.", "In row 3 of Balance, type =F2+D3-E3 and copy it down.", "Write your category list in a corner or a second tab, and use only those words."],
          words: [["Ledger", "a list of every money in and money out, one line per transaction."], ["Transaction", "one time money moves: a sale, a payment, a purchase."], ["Formula", "a calculation in a spreadsheet cell that starts with =."], ["Category", "a label that groups similar money, like Fuel or Supplies."]],
          slides: [
            { title: "A ledger: one line per transaction", bullets: ["Every money in and money out", "A free spreadsheet does the adding"] },
            { title: "Seven columns", bullets: ["Date, Description, Category", "Money in, Money out", "Balance, Receipt #"] },
            { title: "A running balance", bullets: ["Start with your opening balance", "Next row: =F2+D3-E3", "Copy the formula down"] },
            { title: "Same category words every time", bullets: ["Sales, Donations, Supplies, Rent, Fuel", "Phone, Advertising, Wages, Owner's draw"] }
          ],
          tryIt: "Build the ledger now in Google Sheets or Excel with the seven columns, a starting balance and the running-balance formula. Enter three transactions from this week, real or sample, and check that the balance changes correctly.",
          youCanNow: "build a spreadsheet ledger with categories and a running balance.",
          quickCheck: [
            { objective: "O4", q: "In a ledger, what does each line hold?", options: ["One whole month", "One transaction", "One customer's name and address", "One category total"], answer: 1, why: "A ledger lists every money in and money out, one line per transaction." },
            { objective: "O4", q: "You typed \"supplies\" one week and \"materials\" the next for the same costs. What should you do?", options: ["Keep both words", "Delete those lines", "Change them to one category word and use only that word from now on", "Add a new column for each word"], answer: 2, why: "Using the same category words every time makes it easy to add up each category later." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Recording every week and checking against the bank",
          minutes: 5,
          goal: "Keep the ledger up to date and check it against your bank or mobile money statement.",
          text: [
            "Bookkeeping works best as a small weekly habit, for example 20 minutes every Monday morning. Gather the week's receipts, sales sheets and invoices, and enter each one as a line in the ledger with its category and receipt number.",
            "Once a month, check your ledger against your bank, credit union or mobile money statement. This is called reconciling. Tick each line on the statement that matches a line in your ledger. Anything on the statement that is not in your ledger, such as a bank fee or a customer payment you forgot, gets added. Anything in your ledger that is not on the statement may be cash, or a mistake to fix.",
            "At the end, the balance in your ledger should match the statement balance, after you allow for cash you hold and payments that have not cleared yet. If it does not match, look for a missing line, a number typed twice, or digits swapped, such as 54 typed as 45.",
            "Example: a youth soccer nonprofit's ledger is 15 dollars lower than the bank. The treasurer finds a 15 dollar donation that came in by phone app and was never written down, adds it, and now they match."
          ],
          steps: ["Pick a weekly time to update the ledger.", "Enter each receipt, sales sheet and invoice with a category and receipt number.", "Once a month, get your bank or mobile money statement.", "Tick each statement line that matches the ledger; add any that are missing.", "Compare the balances. If they differ, look for missing lines, doubles or swapped digits."],
          words: [["Reconcile", "to check your records against the bank or mobile money statement and fix differences."], ["Statement", "the list of transactions your bank or mobile money provider gives you for a period."], ["Cleared", "when a payment has gone through and shows on the statement."]],
          slides: [
            { title: "A weekly habit", bullets: ["About 20 minutes, same day each week", "Enter receipts, sales sheets and invoices"] },
            { title: "Reconcile once a month", bullets: ["Get the bank or mobile money statement", "Tick each matching line", "Add what is missing, like fees"] },
            { title: "When it does not match", bullets: ["A missing line", "A number typed twice", "Swapped digits: 54 typed as 45"] }
          ],
          tryIt: "Download or open last month's statement for your business account or mobile money (or your personal one, for practice). Pick five statement lines and check that each one is in your ledger. Add any that are missing.",
          youCanNow: "keep your ledger current each week and reconcile it with your statement each month.",
          quickCheck: [
            { objective: "O5", q: "What does reconciling mean?", options: ["Making a budget for next month", "Paying all your bills", "Writing a new ledger", "Checking your ledger against your bank or mobile money statement"], answer: 3, why: "Reconciling is ticking each statement line against your ledger and fixing what is missing." },
            { objective: "O5", q: "A customer payment is on your statement but not in your ledger. What do you do?", options: ["Add it to the ledger", "Ignore it", "Delete it from the statement", "Wait until next year"], answer: 0, why: "Anything on the statement that is missing from the ledger gets added." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Reading a basic profit-and-loss",
          minutes: 6,
          goal: "Build a one-month profit-and-loss from your ledger and say what it tells you.",
          text: [
            "A profit-and-loss, also called a P&L or income statement, is a short summary for a period such as a month. It shows total income, total expenses by category, and the difference. Income minus expenses is profit. If expenses are bigger, it is a loss.",
            "You can make one from your ledger. On a new tab, list each category. Next to each, use a SUMIF formula to add up that category. For example, =SUMIF(Ledger!C:C,\"Supplies\",Ledger!E:E) adds every Money out amount whose category is Supplies, if your ledger tab is named Ledger (column C is Category and column E is Money out). Add the income categories, add the expense categories, and subtract. Owner's draw is not an expense, so leave it out of the expenses.",
            "Then read it. Did you make a profit? Which expense is biggest? Did it grow from last month? For a farm, did the harvest month cover the slow months? For a nonprofit, did program costs stay within the grant?",
            "A P&L tells you how the business is doing. It is not your tax return. Tax rules decide what counts and when, and they differ by country. Take your ledger, receipts and P&L to an accountant or tax professional for taxes."
          ],
          steps: ["Add a new tab called P&L and list your categories.", "Next to each category, use SUMIF to add it up from the ledger.", "Total the income categories and the expense categories (leave out owner's draw).", "Subtract: income minus expenses = profit or loss.", "Write two sentences about what the numbers tell you."],
          words: [["Profit-and-loss (P&L)", "a summary of income, expenses and profit or loss for a period."], ["Profit", "what is left when income is bigger than expenses."], ["Loss", "when expenses are bigger than income."], ["SUMIF", "a spreadsheet formula that adds up only the rows that match a label."]],
          slides: [
            { title: "Profit-and-loss in one line", bullets: ["Income minus expenses = profit", "Expenses bigger? That is a loss"] },
            { title: "Build it from your ledger", bullets: ["List categories on a new tab", "Use SUMIF to add each one", "Leave owner's draw out of expenses"] },
            { title: "Read it", bullets: ["Profit or loss?", "Biggest expense? Growing?", "Did good months cover slow ones?"] },
            { title: "Not a tax return", bullets: ["Tax rules decide what counts", "Take your records to an accountant"] }
          ],
          sources: [{ name: "IRS: Recordkeeping for small businesses", url: "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" }],
          tryIt: "Final task: enter at least 10 real or sample transactions for one month in your ledger, with categories and receipt numbers, and check them against a statement. Then build the P&L tab with SUMIF, find your profit or loss, and write two sentences about what it tells you.",
          youCanNow: "build and read a one-month profit-and-loss from your own ledger.",
          quickCheck: [
            { objective: "O6", q: "What is income minus expenses called when income is bigger?", options: ["Owner's draw", "A loss", "Profit", "The balance"], answer: 2, why: "Income minus expenses is profit; if expenses are bigger, it is a loss." },
            { objective: "O6", q: "You are building your P&L. Where does owner's draw go?", options: ["Into the biggest expense category", "Into income", "Into supplies", "Leave it out of the expenses"], answer: 3, why: "Owner's draw is not a business expense, so it stays out of the expenses on the P&L." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Your ledger and your profit",
        questions: [
          { objective: "O4", q: "Which set of columns makes a good simple ledger?", options: ["Date, Description, Category, Money in, Money out, Balance, Receipt #", "Name, Birthday, Hobby", "Only Total", "Customer password and card number"], answer: 0, why: "These columns record each transaction and link it to its proof." },
          { objective: "O4", q: "Why use the same category words every time?", options: ["The spreadsheet will not open otherwise", "To make the ledger colorful", "So you can add up each category later", "Because the bank requires it"], answer: 2, why: "Matching words let SUMIF add up each category correctly." },
          { objective: "O5", q: "Your ledger is 15 dollars lower than the bank statement. What do you look for first?", options: ["A new bank", "A new spreadsheet app", "Nothing; small differences never matter", "A deposit or payment that is on the statement but not in the ledger"], answer: 3, why: "A difference usually means a missing, doubled or mistyped line." },
          { objective: "O6", q: "Income is 2,000, expenses are 1,500, and owner's draw is 300. What is the profit?", options: ["200", "500", "3,800", "1,500"], answer: 1, why: "Profit is income minus expenses: 2,000 - 1,500 = 500. Owner's draw is not an expense." },
          { objective: "O6", q: "Who should you talk to about your taxes?", options: ["An accountant or tax professional", "A stranger in an online comment", "Nobody; the P&L is your tax return", "Your customers"], answer: 0, why: "A P&L is not a tax return; an accountant knows the tax rules." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Bookkeeping Basics",
    questions: [
      { objective: "O1", q: "Bookkeeping means:", options: ["Reading books about business", "Guessing your profit at the end of the year", "Writing down all money coming in and going out", "Keeping a diary"], answer: 2, why: "Bookkeeping records every money in and money out." },
      { objective: "O1", q: "For a nonprofit, which is income?", options: ["A donation", "Rent for the office", "Snacks for volunteers", "Printer ink"], answer: 0, why: "Donations and grants are money coming in." },
      { objective: "O2", q: "Which is an example of a supporting document for an expense?", options: ["A text from a friend", "A business card", "Your to-do list", "A receipt or invoice"], answer: 3, why: "The IRS lists receipts, invoices and statements as proof of expenses." },
      { objective: "O2", q: "What is the easiest way to keep paper receipts from fading or getting lost?", options: ["Keep them in your pocket", "Photograph and file them the same day", "Throw them away after a week", "Give them to customers"], answer: 1, why: "A same-day photo, filed by month, keeps the proof safe." },
      { objective: "O2", q: "For many US tax returns, the IRS's basic rule is to keep records for:", options: ["1 week", "3 years, longer in some cases", "1 month", "Never; records are not needed"], answer: 1, why: "The IRS says 3 years in most cases, with longer periods in some cases." },
      { objective: "O2", q: "Employment tax records should be kept for at least:", options: ["1 month", "1 year", "4 years", "10 days"], answer: 2, why: "The IRS says at least 4 years after the tax is due or paid." },
      { objective: "O3", q: "Why keep business money in its own account or wallet?", options: ["So you can tell whether the business is making money", "Because mixing money is fun", "So you can skip receipts", "To hide sales"], answer: 0, why: "Mixed money hides how the business is really doing." },
      { objective: "O3", q: "You paid for business supplies with your personal card. What do you do?", options: ["Forget it", "Record it as a sale", "Throw away the receipt", "Record it in the ledger and keep the receipt"], answer: 3, why: "Recording it keeps the books complete and the proof safe." },
      { objective: "O3", q: "A donor gives money only for a youth sports program. The nonprofit should:", options: ["Spend it on anything", "Return it right away", "Not record it", "Track it so it is spent on that program"], answer: 3, why: "Restricted gifts must be tracked and used for their purpose." },
      { objective: "O4", q: "A ledger has:", options: ["One page per customer", "One line per transaction", "Only the yearly total", "Only expenses"], answer: 1, why: "Each sale, payment or purchase is its own line." },
      { objective: "O4", q: "In a spreadsheet, a formula starts with:", options: ["#", "$", "=", "?"], answer: 2, why: "Spreadsheet formulas begin with an equals sign." },
      { objective: "O4", q: "Balance is column F, Money in D, Money out E. The running balance in row 3 is:", options: ["=F2+D3-E3", "=D3*E3", "=F2-D3-E3", "=E3"], answer: 0, why: "Take the balance above, add money in and subtract money out." },
      { objective: "O5", q: "What is a good habit for keeping books up to date?", options: ["Update once a week at a set time", "Update only when the tax office writes", "Update once every few years", "Never update"], answer: 0, why: "A short weekly habit keeps records complete and easy." },
      { objective: "O5", q: "Reconciling means:", options: ["Making up with a customer", "Deleting old receipts", "Checking your ledger against the bank or mobile money statement", "Opening a new account"], answer: 2, why: "Reconciling finds and fixes differences between your books and the statement." },
      { objective: "O5", q: "A bank fee is on the statement but not in your ledger. You should:", options: ["Ignore it", "Add it to the ledger", "Close the account", "Delete the statement"], answer: 1, why: "Anything real on the statement belongs in the ledger." },
      { objective: "O5", q: "You typed 45 instead of 54. This kind of mistake is:", options: ["A missing line", "A double entry", "A new category", "Swapped digits"], answer: 3, why: "Swapped digits are a common reason books do not match." },
      { objective: "O6", q: "A profit-and-loss shows:", options: ["Only your bank balance", "Your customers' names", "Income, expenses and the difference for a period", "Your credit score"], answer: 2, why: "A P&L sums up income, expenses and profit or loss." },
      { objective: "O6", q: "Which formula adds up all Supplies amounts from the ledger?", options: ["=SUM(Supplies)", "=Supplies+1", "=AVERAGE(C:C)", "=SUMIF(Ledger!C:C,\"Supplies\",Ledger!E:E)"], answer: 3, why: "SUMIF adds only the rows whose category is Supplies." },
      { objective: "O6", q: "Expenses are bigger than income this month. That is:", options: ["A loss", "A profit", "An owner's draw", "A receipt"], answer: 0, why: "When expenses are bigger than income, the result is a loss." },
      { objective: "O6", q: "Your P&L is ready. Is it your tax return?", options: ["Yes, send it to the tax office as it is", "No; take your records to an accountant for taxes", "Yes, if it shows a profit", "Only for nonprofits"], answer: 1, why: "Tax rules decide what counts; an accountant can prepare your taxes." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      1,
      2,
      6,
      9,
      11,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Ledger set up",
        objective: "O4",
        notYet: "Columns are missing or the balance does not update.",
        meets: "All seven columns, a starting balance and a running balance that is correct after each line.",
        exceeds: "Also has a fixed category list on its own tab, used with the same words every time."
      },
      {
        name: "Income and expenses sorted",
        objective: "O1",
        notYet: "Some lines are in the wrong category or have no category.",
        meets: "At least 10 transactions, each with the right income or expense category.",
        exceeds: "Owner's draw and any personal money used for the business are recorded the right way."
      },
      {
        name: "Proof for every line",
        objective: "O2",
        notYet: "Some lines have no receipt number or proof.",
        meets: "Every line has a receipt number that matches a saved receipt or sales sheet.",
        exceeds: "Receipts are in a folder for the month and the paper is kept in a matching envelope."
      },
      {
        name: "Checked against the statement",
        objective: "O5",
        notYet: "The ledger was not compared with a statement.",
        meets: "Statement lines were ticked, missing lines added, and the balances match or the difference is explained.",
        exceeds: "Can name each difference found and how it was fixed."
      },
      {
        name: "Profit-and-loss read",
        objective: "O6",
        notYet: "No P&L, or totals are wrong.",
        meets: "A P&L with SUMIF totals, owner's draw left out, and the profit or loss shown.",
        exceeds: "Two clear sentences say what the numbers mean and one thing to change next month."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who still update their ledger weekly and reconcile monthly at the 30-day follow-up",
      "Learners who use their records to apply for a loan or grant, or bring them to an accountant at tax time",
      "Learners who start another Koach Learn business course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with a free spreadsheet: Google Sheets or Microsoft Excel",
      "A month of real or sample receipts, and a bank or mobile money statement (or a sample one)",
      "A phone camera for receipt photos, and envelopes for paper receipts",
      "About 60 minutes in total, in short sessions: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Have a sample month of transactions and a sample statement ready for learners who do not want to use their own numbers.",
      "Build the ledger and the running-balance formula together on one screen, then let learners copy it.",
      "Remind learners not to paste account numbers or customer details into AI tools or shared screens.",
      "Do not give tax advice; send tax questions to an accountant or the tax authority.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
