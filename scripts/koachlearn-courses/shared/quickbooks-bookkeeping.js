"use strict";

// Koach Learn course: Workforce Development -> "QuickBooks Bookkeeping" (wave 3, 30 October 2026). Also listed for Small Business, Entrepreneurs and Non Profits.
// Goes deeper than shared/bookkeeping-basics.js (a spreadsheet ledger, receipts, a simple profit-and-loss): this course teaches the job of a QuickBooks bookkeeper: the chart of accounts and two-sided
// entries, invoices and payments, bills and expenses, the bank feed and reconciliation, the main reports and a month-end close, and the Intuit credentials (QuickBooks Certified User and Intuit Certified
// Bookkeeping Professional, delivered by Certiport). Practice uses Intuit's free-to-open QuickBooks Online test drive (sample company, changes not saved) or paper. Menu names are kept general on purpose,
// because QuickBooks changes its screens; lessons describe the action instead. ADDIE parts follow re-entry/reentry-ai-digital-confidence.js.

const CERTIPORT = { name: "Certiport (Pearson VUE): Intuit certifications, including QuickBooks Certified User and Intuit Certified Bookkeeping Professional", url: "https://certiport.pearsonvue.com/Certifications/QuickBooks/Certified-User/Overview" };
const ACADEMY = { name: "Intuit Academy (Intuit's training and certification site)", url: "https://academy.intuit.com/" };
const TESTDRIVE = { name: "Intuit QuickBooks help: Test drive and practice using QuickBooks Online", url: "https://quickbooks.intuit.com/learn-support/en-us/help-article/small-business-processes/test-drive-quickbooks-online/L9C12ODlA_US_en_US" };
const PROADVISOR = { name: "QuickBooks ProAdvisor training and certification (for accountants)", url: "https://quickbooks.intuit.com/accountants/training-certification/" };

module.exports = {
  id: "quickbooks-bookkeeping",
  category: "Workforce Development",
  name: "QuickBooks Bookkeeping",
  skills: "Setting up a chart of accounts, Recording invoices and payments, Entering bills and expenses, Reconciling a bank account, Reading the main reports, Planning for a QuickBooks credential",
  outcome: "keep a small business's books in QuickBooks Online for one month: sort money into the right accounts, record sales, payments, bills and expenses, match and reconcile the bank, run the main reports, and follow a plan toward a QuickBooks credential.",
  about: [
    "Almost every small business, church and nonprofit needs someone to keep its books, and many of them use QuickBooks. Bookkeeping can be a full-time job, a part-time job you do from home, or a side business serving several clients. This course is for job seekers, office workers who want a better role, small business owners and nonprofit volunteers.",
    "You will practice the real work: the chart of accounts, invoices and customer payments, bills and expenses, the bank feed, a bank reconciliation, the profit and loss and balance sheet, and a month-end checklist. You practice in Intuit's QuickBooks Online test drive, a sample company you can open in a web browser where nothing you do is saved, or on paper if you have no computer.",
    "The course prepares you for bookkeeping work and for Intuit credentials such as the QuickBooks Certified User and the Intuit Certified Bookkeeping Professional, whose exams are delivered by Certiport. It does not grant any credential; you earn it by passing the official exam. Check the official pages for current details and fees.",
    "If you already took \"Bookkeeping Basics\", this is the next step. Each lesson takes about five minutes, with a \"Try it now\" task and a two-question quick check. There is a knowledge check after each chapter, a 20-question quiz at the end, and a final task you can show to an employer or client."
  ],
  finalTask: "Make your QuickBooks month-end packet for a sample business (a cleaning company, a food truck or a small nonprofit): (1) a chart of accounts with at least 12 accounts, each marked as income, expense, asset, liability or equity; (2) a log of at least 10 transactions you entered in the QuickBooks Online test drive or on paper (at least 3 invoices, 2 customer payments and 4 bills or expenses), each with its date, customer or vendor, account and amount; (3) a bank reconciliation for the month that ends with a difference of zero, or a written note of what is still off and why; (4) a one-paragraph summary of the month's profit and loss; and (5) a 60-day credential plan with dates: which Intuit credential you will prepare for, when you will check its official page, and when you will take practice tests.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults and young adults who want office or bookkeeping work: job seekers, office and retail workers moving up, people coming home from prison, immigrants with business experience, small business owners doing their own books and nonprofit volunteers who handle money.",
    startingPoint: "Can use a web browser and do everyday math with a calculator. Some have kept a paper or spreadsheet record of money. Most have never used QuickBooks or heard of a chart of accounts, a reconciliation or a balance sheet.",
    gap: "Employers and clients want bookkeepers who already know how QuickBooks records sales, bills and bank activity, and who can make the books match the bank each month. Without that, small mistakes pile up into wrong taxes, missed bills and unpaid invoices. Learning the steps and the reports, and having a plan toward an Intuit credential, makes a learner easier to hire and able to serve their own clients.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 7 to 8); every accounting word is explained",
      "Devices: a computer or tablet with a web browser for the test drive; every practice also works on paper",
      "Cost: the test drive opens in a browser without buying QuickBooks; it does not save changes, so learners keep notes",
      "QuickBooks changes its screens often, so the course teaches actions and report names, not exact menu paths",
      "Privacy: practice uses the sample company or made-up numbers, never real bank logins or account numbers",
      "Tax rules change and differ by place: lessons point to irs.gov or a tax professional and give no tax advice"
    ],
    prerequisites: "None, but \"Bookkeeping Basics\" or \"Excel and Spreadsheets\" helps learners who have never tracked money in and out."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a bookkeeping job posting or a client request", action: "list the main duties of a QuickBooks bookkeeper and name an Intuit credential that fits the job", standard: "naming at least four duties and the official page where the credential is checked" },
    { id: "O2", condition: "Given a list of a small business's money activity", action: "sort each item into the right type of account in a chart of accounts", standard: "placing at least 9 of 10 items in the right account type" },
    { id: "O3", condition: "Given a sale, a customer and a payment", action: "record the invoice or sales receipt and the customer payment in QuickBooks", standard: "with the right customer, date, amount and income account, and no invoice left open after it is paid" },
    { id: "O4", condition: "Given a bill, a receipt and a vendor", action: "enter the bill, the expense and the bill payment in QuickBooks", standard: "with the right vendor, date, amount and expense account, and the receipt attached or noted" },
    { id: "O5", condition: "Given a month of bank activity and a bank statement", action: "match the bank feed and reconcile the bank account", standard: "ending with a difference of zero, or a written note of what is still off" },
    { id: "O6", condition: "At the end of a month", action: "run and explain the profit and loss, the balance sheet and the open invoices report", standard: "stating the month's profit or loss and who still owes money" }
  ],
  chapters: [
    {
      name: "Chapter 1: Setting up and recording sales",
      lessons: [
        {
          title: "The QuickBooks bookkeeper job and the path to it",
          objectives: ["O1"],
          minutes: 5,
          goal: "List the main duties of a QuickBooks bookkeeper and name a credential that can help you get hired.",
          text: [
            "A bookkeeper records a business's money so the owner always knows where it stands. In QuickBooks that means: sending invoices and recording customer payments, entering bills and expenses, reviewing the bank feed, reconciling the bank each month, running reports, and keeping receipts. Bookkeepers work for one company, for an accounting firm, or for several small clients as their own business. Churches and nonprofits need them too.",
            "QuickBooks Online is Intuit's web version, used in a browser. QuickBooks Desktop is installed on a computer. Most new small business customers use QuickBooks Online, so this course uses it, but the ideas are the same in both.",
            "Two Intuit credentials fit this course. The QuickBooks Certified User shows you can use QuickBooks. The Intuit Certified Bookkeeping Professional shows you know bookkeeping basics. Both exams are delivered by Certiport, a Pearson VUE business, and Intuit Academy offers training. Accountants can also earn QuickBooks ProAdvisor certification. This course prepares you; it does not grant any credential. Fees, eligibility and exam details change, so check the official pages.",
            "A bookkeeper is not a tax preparer or a certified public accountant (CPA). You keep the records clean; tax questions go to a tax professional or irs.gov."
          ],
          words: [["Bookkeeper", "a person who records a business's money in and money out and keeps the records accurate."], ["QuickBooks Online", "Intuit's bookkeeping software that runs in a web browser."], ["Credential", "a certificate that shows you passed an official exam."], ["Certiport", "a Pearson VUE company that delivers Intuit's certification exams."], ["CPA", "a certified public accountant: a licensed accountant who can do work a bookkeeper cannot, such as audits."]],
          slides: [
            { title: "What a QuickBooks bookkeeper does", bullets: ["Invoices and customer payments", "Bills and expenses", "Bank feed and monthly reconciliation", "Reports and receipts"] },
            { title: "Where bookkeepers work", bullets: ["One company or an accounting firm", "Several small clients, as your own business", "Churches and nonprofits"] },
            { title: "Credentials that can help", bullets: ["QuickBooks Certified User", "Intuit Certified Bookkeeping Professional", "Exams delivered by Certiport; check the official page"] },
            { title: "Know your role", bullets: ["You keep the records clean", "Tax questions go to a tax pro or irs.gov", "This course prepares you; the exam grants the credential"] }
          ],
          sources: [CERTIPORT, ACADEMY, PROADVISOR],
          tryIt: "Find one bookkeeping job posting online (search \"bookkeeper QuickBooks\" on a job site). Write down four duties it lists and whether it asks for a QuickBooks credential. Then open the Certiport page in the sources and write the names of the two Intuit credentials that fit.",
          youCanNow: "list what a QuickBooks bookkeeper does and name a credential that fits the job.",
          quickCheck: [
            { objective: "O1", q: "Which task is part of a bookkeeper's monthly work?", options: ["Signing the company's tax return as a CPA", "Reconciling the bank account", "Auditing another company", "Giving investment advice"], answer: 1, why: "Reconciling the bank each month is core bookkeeping work." },
            { objective: "O1", q: "Who delivers the QuickBooks Certified User exam?", options: ["The IRS", "Your state's labor office", "Any QuickBooks user", "Certiport, for Intuit"], answer: 3, why: "Certiport, a Pearson VUE business, delivers Intuit's certification exams." }
          ]
        },
        {
          title: "The chart of accounts and two-sided entries",
          objectives: ["O2"],
          minutes: 6,
          goal: "Sort a business's money activity into the five types of accounts.",
          text: [
            "The chart of accounts is the list of every place money can be sorted in QuickBooks. Each account belongs to one of five types. Income: money earned, like sales or donations. Expenses: costs of running the business, like supplies, rent and fuel. Assets: things the business owns or is owed, like the bank account, equipment and money customers still owe. Liabilities: money the business owes, like a loan, a credit card or bills not yet paid. Equity: the owner's share, including money the owner put in or took out.",
            "Every entry touches at least two accounts. That is called double-entry bookkeeping. When you send a $200 invoice, income goes up and the money customers owe you (accounts receivable) goes up. When the customer pays, accounts receivable goes down and the bank goes up. QuickBooks does the second side for you when you use the right form, which is why choosing the right form and account matters.",
            "QuickBooks gives every new company a starting chart of accounts based on the type of business. A bookkeeper cleans it up: adds accounts the business really uses, renames vague ones, and keeps names the same every month. A nonprofit might add accounts like Donations, Grants and Program supplies.",
            "In the test drive, search for \"chart of accounts\" to open the list and see each account's type."
          ],
          steps: ["Open the chart of accounts (search for it if you cannot find it).", "Read the type of each account: income, expense, asset, liability or equity.", "Add the accounts the business really uses.", "Rename vague accounts so anyone can understand them.", "Use the same account every time for the same kind of money."],
          words: [["Chart of accounts", "the list of every account money can be sorted into."], ["Asset", "something the business owns or is owed, like cash in the bank or equipment."], ["Liability", "money the business owes, like a loan or an unpaid bill."], ["Equity", "the owner's share of the business."], ["Accounts receivable (A/R)", "money customers owe the business."], ["Accounts payable (A/P)", "money the business owes to vendors for bills not yet paid."], ["Double-entry", "every entry changes at least two accounts so the books stay in balance."]],
          slides: [
            { title: "Five types of accounts", bullets: ["Income and expenses", "Assets and liabilities", "Equity: the owner's share"] },
            { title: "Every entry has two sides", bullets: ["Invoice: income up, A/R up", "Payment: A/R down, bank up", "The right form makes QuickBooks do both"] },
            { title: "Clean up the list", bullets: ["Add accounts the business uses", "Rename vague accounts", "Same account for the same kind of money"] },
            { title: "Nonprofit example", bullets: ["Income: Donations, Grants", "Expense: Program supplies, Rent"] }
          ],
          tryIt: "On paper, make two columns: Item and Account type. Sort these ten items: cleaning supplies, money in the business checking account, a customer who owes $150, a truck loan, sales of cleaning services, the owner putting in $500 to start, rent, a credit card balance, a donated grant (for a nonprofit), and a new vacuum. Then open the chart of accounts in the test drive and compare how the sample company sorts similar items.",
          youCanNow: "sort money activity into income, expense, asset, liability and equity accounts.",
          quickCheck: [
            { objective: "O2", q: "A business owes $3,000 on a truck loan. What type of account is the loan?", options: ["Liability", "Income", "Expense", "Equity"], answer: 0, why: "Money the business owes is a liability." },
            { objective: "O2", q: "Money customers still owe the business is tracked in:", options: ["Accounts payable", "Rent expense", "Accounts receivable", "Owner's equity"], answer: 2, why: "Accounts receivable (A/R) is money customers owe." }
          ]
        },
        {
          title: "Invoices, sales receipts and customer payments",
          objectives: ["O3"],
          minutes: 6,
          goal: "Record an invoice, a sales receipt and a customer payment in QuickBooks.",
          text: [
            "Use an invoice when the customer pays later. The invoice lists the customer, date, products or services, amount and due date. Use a sales receipt when the customer pays at the time of the sale, like a food truck sale. Both record income; only the invoice creates money owed (accounts receivable).",
            "When an invoice is paid, record the payment against that invoice. Do not create a new sale, or the income will be counted twice. QuickBooks then marks the invoice paid. If the customer paid by cash or check, QuickBooks may hold the payment until you record the bank deposit, so the deposit matches what the bank shows.",
            "Set up each customer once with their name and contact details, and set up each product or service once with its price and income account. Then every invoice uses the same accounts.",
            "In QuickBooks Online, new forms like invoices, sales receipts and payments start from the New (+) button. In the test drive, nothing is saved, so write down what you entered."
          ],
          steps: ["Choose the form: invoice (pay later) or sales receipt (paid now).", "Pick the customer, or add a new one.", "Enter the date, the product or service, the amount and the due date.", "Save the form.", "When the customer pays an invoice, record the payment against that invoice.", "Record the bank deposit if QuickBooks holds the payment to deposit later.", "Check that the invoice now shows as paid."],
          words: [["Invoice", "a bill you send a customer who will pay later."], ["Sales receipt", "a record of a sale paid at the time of the sale."], ["Customer payment", "the record that a customer paid an invoice."], ["Deposit", "money put into the bank, which should match the bank statement."]],
          slides: [
            { title: "Invoice or sales receipt?", bullets: ["Invoice: the customer pays later", "Sales receipt: paid at the time of the sale", "Only the invoice creates A/R"] },
            { title: "Record the payment against the invoice", bullets: ["Never make a second sale for it", "Otherwise income is counted twice", "The invoice then shows as paid"] },
            { title: "Set up once, use every time", bullets: ["Customers with contact details", "Products and services with price and income account"] },
            { title: "Deposits match the bank", bullets: ["Cash and checks may wait to be deposited", "Record the deposit so it matches the statement"] }
          ],
          sources: [TESTDRIVE],
          tryIt: "Open the QuickBooks Online test drive (link in the sources; open it in a private browser window). Create an invoice for $250 of landscaping services to a sample customer, due in 30 days. Then receive a payment for that invoice and check that the invoice shows as paid. Write the customer, date, amount and income account on paper, because the test drive does not save. No computer? Draw the invoice and the payment on paper.",
          youCanNow: "record an invoice, a sales receipt and a customer payment so income is counted once.",
          quickCheck: [
            { objective: "O3", q: "A food truck customer pays at the window. Which form do you use?", options: ["Invoice", "Bill", "Purchase order", "Sales receipt"], answer: 3, why: "A sales receipt records a sale paid at the time of the sale." },
            { objective: "O3", q: "A customer pays a $250 invoice. What do you record?", options: ["A new sales receipt for $250", "A payment against that invoice", "A bill for $250", "Nothing; QuickBooks knows"], answer: 1, why: "Recording the payment against the invoice closes it without counting income twice." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Setting up and recording sales",
        questions: [
          { objective: "O1", q: "Which statement about this course is true?", options: ["It prepares you; the official exam grants the credential", "It grants the QuickBooks Certified User", "It makes you a CPA", "It replaces a tax preparer"], answer: 0, why: "The course prepares you; Certiport delivers the exam that grants the credential." },
          { objective: "O2", q: "Rent paid for the shop is what type of account?", options: ["Asset", "Liability", "Expense", "Income"], answer: 2, why: "Rent is a cost of running the business, so it is an expense." },
          { objective: "O2", q: "The owner puts $500 of their own money into the business. That goes to:", options: ["Sales income", "Equity", "Accounts payable", "Supplies expense"], answer: 1, why: "Money the owner puts in is part of the owner's equity, not income." },
          { objective: "O3", q: "A cleaning client will pay in 30 days. Which form do you create?", options: ["A sales receipt", "A bill", "A deposit", "An invoice"], answer: 3, why: "An invoice is for a customer who pays later." },
          { objective: "O3", q: "A bookkeeper made a new sale for a customer's payment instead of recording the payment against the invoice. What goes wrong?", options: ["Income is counted twice and the invoice stays open", "Nothing goes wrong", "The bank balance drops", "The customer is charged a fee"], answer: 0, why: "The invoice and the new sale both count as income, and the invoice still looks unpaid." }
        ]
      }
    },
    {
      name: "Chapter 2: Bills, the bank and the month-end",
      lessons: [
        {
          title: "Bills, expenses and vendors",
          objectives: ["O4"],
          minutes: 6,
          goal: "Enter a bill, an expense and a bill payment with the right vendor and account.",
          text: [
            "A vendor is anyone the business buys from: the supply store, the landlord, the phone company. Set up each vendor once.",
            "Use a bill when the business will pay later, like a supplier invoice due in 30 days. The bill goes into accounts payable. When you pay it, record a bill payment against that bill so it is not counted twice. Use an expense when the business pays right away, like a card purchase at the hardware store.",
            "Choose the expense account that matches what was bought: Supplies, Fuel, Rent, Phone. Attach a photo of the receipt in QuickBooks, or write the receipt number in the memo. Receipts back up every expense if anyone asks later.",
            "If the business pays contractors, collect a Form W-9 from each one before paying and mark them as contractors, because some businesses must file information returns for them. The rules and dollar amounts change, so check irs.gov or a tax professional."
          ],
          steps: ["Pick the vendor, or add a new one.", "Choose bill (pay later) or expense (paid now).", "Enter the date, amount and the matching expense account.", "Attach the receipt or note its number.", "When you pay a bill, record a bill payment against that bill.", "Check that the bill now shows as paid."],
          words: [["Vendor", "a person or business the business buys from."], ["Bill", "a record of something the business will pay for later."], ["Expense", "a record of something the business paid for right away."], ["Bill payment", "the record that a bill was paid."], ["Form W-9", "an IRS form a contractor fills out with their name and tax number for the business's records."]],
          slides: [
            { title: "Bill or expense?", bullets: ["Bill: pay later, goes to A/P", "Expense: paid right away", "Pay a bill with a bill payment, not a new expense"] },
            { title: "Pick the right account", bullets: ["Supplies, Fuel, Rent, Phone", "Same account every time"] },
            { title: "Proof for every expense", bullets: ["Attach a receipt photo", "Or write the receipt number in the memo"] },
            { title: "Paying contractors", bullets: ["Get a Form W-9 before you pay", "Mark them as contractors", "Check irs.gov for current filing rules"] }
          ],
          sources: [{ name: "IRS: About Form W-9", url: "https://www.irs.gov/forms-pubs/about-form-w-9" }, TESTDRIVE],
          tryIt: "In the test drive or on paper, enter three items: a $120 supply bill due in 30 days, a $45 fuel purchase paid by card today, and the payment of the $120 bill two weeks later. For each, write the vendor, the form you used, the account and the amount. Then explain in one sentence why the bill payment is not a new expense.",
          youCanNow: "enter bills, expenses and bill payments with the right vendor, account and receipt.",
          quickCheck: [
            { objective: "O4", q: "A supplier sends a bill due in 30 days. What do you enter today?", options: ["An expense", "A bill", "An invoice", "A sales receipt"], answer: 1, why: "A bill records something the business will pay later." },
            { objective: "O4", q: "You pay that bill two weeks later. What do you record?", options: ["A new expense for the same amount", "A deposit", "A bill payment against that bill", "Nothing"], answer: 2, why: "A bill payment closes the bill without counting the cost twice." }
          ]
        },
        {
          title: "The bank feed and the bank reconciliation",
          objectives: ["O5"],
          minutes: 6,
          goal: "Match bank feed lines to entries and reconcile the bank account to a difference of zero.",
          text: [
            "QuickBooks can connect to the business's bank and download its transactions. That is the bank feed. Each downloaded line waits for you to review it. If you already entered it, match it to that entry. If not, add it with the right payee and account. Never add a line that is already entered, or it will count twice. The business owner connects the bank; a bookkeeper never asks for the owner's bank password.",
            "A bank reconciliation proves that QuickBooks agrees with the bank statement. Once a month, take the statement, enter its ending balance and date, and tick each deposit and payment in QuickBooks that is on the statement. When the difference is zero, finish the reconciliation.",
            "If the difference is not zero, look for the usual causes: a bank fee or interest not entered, an entry typed with the wrong amount, a duplicate, or an entry in the wrong month. Checks that have not cleared yet stay unticked; they will clear next month.",
            "Never force a reconciliation to zero by making up an entry. If you cannot find the problem, write a note and ask the owner or an accountant."
          ],
          steps: ["Review each new bank feed line.", "Match it to an existing entry, or add it with the right payee and account.", "Get the month's bank statement.", "Start a reconciliation and enter the statement's ending date and balance.", "Tick each entry that appears on the statement.", "Find and fix anything that keeps the difference from zero.", "Finish when the difference is zero, or write a note and ask for help."],
          words: [["Bank feed", "bank transactions that QuickBooks downloads for you to review."], ["Match", "linking a downloaded bank line to an entry already in QuickBooks."], ["Reconcile", "check that your records agree with the bank statement, line by line."], ["Difference", "the gap between QuickBooks and the bank statement during a reconciliation; it should be zero."], ["Uncleared check", "a check you wrote that the bank has not paid yet."]],
          slides: [
            { title: "Review the bank feed", bullets: ["Already entered? Match it", "Not entered? Add it with the right account", "Never add a line twice"] },
            { title: "Reconcile once a month", bullets: ["Enter the statement's ending date and balance", "Tick each line on the statement", "Finish at a difference of zero"] },
            { title: "When it does not balance", bullets: ["Missing fee or interest", "Wrong amount, duplicate or wrong month", "Uncleared checks wait for next month"] },
            { title: "Stay honest and safe", bullets: ["Never force it with a made-up entry", "Write a note and ask for help", "Never ask for the owner's bank password"] }
          ],
          sources: [TESTDRIVE],
          tryIt: "Make a practice statement on paper: starting balance $1,000; deposits $250 and $400; payments $120, $45 and $60; a $5 bank fee; ending balance $1,420. Your book record has every line except the bank fee, plus a $75 check that has not cleared. Tick the matching lines, find what keeps the difference from zero, and write what you would enter. In the test drive, open the banking page and look at how downloaded lines wait to be matched or added.",
          youCanNow: "match the bank feed and reconcile a bank account to a difference of zero, or write down what is still off.",
          quickCheck: [
            { objective: "O5", q: "A bank feed line is a payment you already entered as a bill payment. What do you do?", options: ["Match it to that bill payment", "Add it as a new expense", "Delete the bill", "Ignore it forever"], answer: 0, why: "Matching links the bank line to your entry without counting it twice." },
            { objective: "O5", q: "Your reconciliation is off by $5, and the statement shows a $5 bank fee. What is the best step?", options: ["Make up an entry for any amount", "Skip the reconciliation this month", "Change the statement's balance", "Enter the $5 bank fee as an expense"], answer: 3, why: "A missing bank fee is a common cause; entering it fixes the difference honestly." }
          ]
        },
        {
          title: "Reports and the month-end close",
          objectives: ["O6"],
          minutes: 6,
          goal: "Run and explain the profit and loss, the balance sheet and the open invoices report.",
          text: [
            "The profit and loss (P&L) shows income minus expenses for a period, like one month. If income is bigger, the business made a profit; if expenses are bigger, it had a loss. The balance sheet shows, on one date, what the business has (assets), what it owes (liabilities) and the owner's share (equity).",
            "The accounts receivable aging report shows which customers still owe money and how late they are. The accounts payable aging report shows which bills the business still owes. These two reports tell the owner whom to call and what to pay next.",
            "A month-end close is the checklist a bookkeeper follows each month: all sales, payments, bills and expenses entered; the bank feed reviewed; every bank and credit card account reconciled; receipts attached; reports run and sent to the owner with a short note. Nonprofits may also run reports by program or grant.",
            "Run reports from the Reports area; search for the report by name. A report is only as good as the entries behind it, so reconcile first."
          ],
          steps: ["Finish entering the month's sales, payments, bills and expenses.", "Review the bank feed and reconcile every bank and card account.", "Run the profit and loss for the month.", "Run the balance sheet for the last day of the month.", "Run the accounts receivable aging report.", "Write the owner a short note: profit or loss, who owes money and bills due soon."],
          words: [["Profit and loss (P&L)", "a report of income minus expenses for a period; also called an income statement."], ["Balance sheet", "a report of assets, liabilities and equity on one date."], ["Aging report", "a report of money owed, sorted by how many days late it is."], ["Month-end close", "the checklist that finishes the books for a month."]],
          slides: [
            { title: "Profit and loss", bullets: ["Income minus expenses for a period", "Profit or loss for the month"] },
            { title: "Balance sheet", bullets: ["On one date", "Assets, liabilities and equity"] },
            { title: "Who owes what", bullets: ["A/R aging: customers who owe the business", "A/P aging: bills the business owes"] },
            { title: "Month-end checklist", bullets: ["Everything entered, bank feed reviewed", "Every bank and card account reconciled", "Reports run, short note to the owner"] }
          ],
          sources: [TESTDRIVE],
          tryIt: "In the test drive, run the profit and loss for last month and the accounts receivable aging report. Write three sentences for the owner: the month's total income and total expenses, whether there was a profit or a loss, and which customer owes the most. No computer? Use your work from the earlier lessons and write the same note on paper.",
          youCanNow: "run the main reports, explain them to an owner and close a month.",
          quickCheck: [
            { objective: "O6", q: "Which report shows whether the business made money last month?", options: ["The balance sheet", "The profit and loss", "The vendor list", "The chart of accounts"], answer: 1, why: "The profit and loss shows income minus expenses for a period." },
            { objective: "O6", q: "The owner asks which customers are late paying. Which report do you run?", options: ["Accounts payable aging", "Profit and loss", "Accounts receivable aging", "Balance sheet"], answer: 2, why: "The A/R aging report lists customers who owe money and how late they are." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Bills, the bank and the month-end",
        questions: [
          { objective: "O4", q: "You paid $45 for fuel with the business card today. Which form fits?", options: ["A bill", "An invoice", "An expense", "A sales receipt"], answer: 2, why: "An expense records something paid for right away." },
          { objective: "O4", q: "Before paying a new contractor, a careful bookkeeper:", options: ["Collects a Form W-9 and checks irs.gov for filing rules", "Pays in cash with no record", "Records the payment as income", "Asks for the contractor's bank password"], answer: 0, why: "A W-9 gives the business the contractor's details for its records and filings." },
          { objective: "O5", q: "A reconciliation will not reach zero and you cannot find why. What do you do?", options: ["Add a made-up entry to force it", "Delete old entries", "Change the statement balance", "Write a note and ask the owner or an accountant"], answer: 3, why: "Forcing it hides the real problem; a note and a question keep the books honest." },
          { objective: "O5", q: "A $75 check you wrote is not on this month's statement. In the reconciliation you:", options: ["Delete the check", "Leave it unticked; it should clear later", "Enter it again", "Mark it as income"], answer: 1, why: "An uncleared check stays unticked until it appears on a statement." },
          { objective: "O6", q: "The balance sheet shows:", options: ["Assets, liabilities and equity on one date", "Only last month's sales", "Each customer's phone number", "The bank feed lines"], answer: 0, why: "The balance sheet is a picture of assets, liabilities and equity on one date." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: QuickBooks Bookkeeping",
    questions: [
      { objective: "O1", q: "Which is a main duty of a QuickBooks bookkeeper?", options: ["Giving legal advice", "Recording invoices, bills and bank activity", "Signing audits as a CPA", "Choosing investments for the owner"], answer: 1, why: "Recording sales, bills and bank activity accurately is the core of the job." },
      { objective: "O1", q: "Where should you check the current details and fees for the QuickBooks Certified User exam?", options: ["A social media post", "A friend's old notes", "Any online forum", "The official Certiport page for Intuit certifications"], answer: 3, why: "Fees and exam details change, so the official page is the place to check." },
      { objective: "O1", q: "A client asks how to lower their taxes. As a bookkeeper you:", options: ["Send them to a tax professional or irs.gov", "Guess an answer", "Change their numbers", "Tell them taxes are optional"], answer: 0, why: "A bookkeeper keeps records; tax advice comes from a tax professional or the IRS." },
      { objective: "O2", q: "A new vacuum the cleaning business owns is what type of account?", options: ["Income", "Expense", "Asset", "Liability"], answer: 2, why: "Equipment the business owns is an asset." },
      { objective: "O2", q: "A balance on the business credit card is a:", options: ["Liability", "Asset", "Income", "Equity"], answer: 0, why: "Money the business owes on a card is a liability." },
      { objective: "O2", q: "What does double-entry bookkeeping mean?", options: ["You type every entry twice", "Two people must approve each entry", "Only income is recorded", "Every entry changes at least two accounts"], answer: 3, why: "Each entry has two sides, which keeps the books in balance." },
      { objective: "O3", q: "When does a bookkeeper use an invoice?", options: ["When the customer paid at the time of the sale", "When the customer will pay later", "When the business buys supplies", "When the bank charges a fee"], answer: 1, why: "An invoice is for a customer who pays later." },
      { objective: "O3", q: "Sending a $200 invoice raises income and:", options: ["Accounts payable", "The bank balance", "Accounts receivable", "Rent expense"], answer: 2, why: "An invoice creates money the customer owes: accounts receivable." },
      { objective: "O3", q: "A customer pays an open invoice by check. What do you record?", options: ["A payment against that invoice, then the bank deposit", "A new sales receipt", "A bill", "A new invoice"], answer: 0, why: "Recording the payment against the invoice closes it, and the deposit matches the bank." },
      { objective: "O4", q: "Who is a vendor?", options: ["A customer who owes money", "The business owner", "A bank feed line", "A business you buy from, like a supply store"], answer: 3, why: "A vendor is anyone the business buys from." },
      { objective: "O4", q: "A supplier's bill is due in 30 days. When it is entered, it goes into:", options: ["Accounts receivable", "Accounts payable", "Sales income", "Owner's equity"], answer: 1, why: "Unpaid bills are money the business owes: accounts payable." },
      { objective: "O4", q: "What backs up every expense if someone asks later?", options: ["A guess at the amount", "The vendor's phone number", "A receipt attached or its number noted", "The owner's memory"], answer: 2, why: "Receipts are the proof behind each expense." },
      { objective: "O5", q: "What is the bank feed?", options: ["Bank transactions QuickBooks downloads for you to review", "A fee the bank charges", "A list of customers", "The owner's bank password"], answer: 0, why: "The bank feed brings in bank lines to match or add." },
      { objective: "O5", q: "A reconciliation is finished when:", options: ["You have ticked half the lines", "The owner is happy", "The month is over", "The difference is zero"], answer: 3, why: "A zero difference shows QuickBooks agrees with the statement." },
      { objective: "O5", q: "A downloaded bank line is already entered in QuickBooks. Adding it again would:", options: ["Fix the reconciliation", "Count it twice", "Close the month", "Pay the vendor"], answer: 1, why: "Adding an entered line again creates a duplicate; match it instead." },
      { objective: "O6", q: "Income was $4,000 and expenses were $3,100 for the month. The profit and loss shows:", options: ["A loss of $900", "A profit of $7,100", "A profit of $900", "No change"], answer: 2, why: "Income minus expenses: $4,000 minus $3,100 is a $900 profit." },
      { objective: "O6", q: "Before running month-end reports, a bookkeeper should first:", options: ["Reconcile every bank and card account", "Delete old invoices", "Send the reports without checking", "Change the chart of accounts"], answer: 0, why: "Reports are only as good as the entries behind them, so reconcile first." },
      { objective: "O6", q: "Which report shows which bills the business still owes?", options: ["Profit and loss", "Accounts receivable aging", "Chart of accounts", "Accounts payable aging"], answer: 3, why: "The A/P aging report lists unpaid bills and how long they have been open." },
      { objective: "O2", q: "Why should a bookkeeper use the same account every time for the same kind of cost?", options: ["QuickBooks charges for new accounts", "So reports compare month to month correctly", "Because accounts cannot be renamed", "So the bank feed stops"], answer: 1, why: "Consistent accounts make reports accurate and comparable." },
      { objective: "O5", q: "A client offers you their online banking password so you can connect the bank feed. What do you do?", options: ["Accept it and save it in a note", "Text it to yourself", "Decline; the owner connects the bank or gives you your own user access", "Post it in the shared folder"], answer: 2, why: "Bookkeepers never take the owner's bank password; the owner connects the bank or adds you as a user." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 5, 6, 9, 12, 13, 15, 17] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Chart of accounts", objective: "O2", notYet: "Fewer than 12 accounts, or several are marked with the wrong type.", meets: "At least 12 accounts, each with the right type, with clear names.", exceeds: "Also explains why each account is needed for this business, including nonprofit or industry accounts." },
      { name: "Sales and payments", objective: "O3", notYet: "A payment was recorded as a new sale, or an invoice is missing a customer, date or amount.", meets: "At least 3 invoices and 2 payments, each with customer, date, amount and income account; paid invoices show as paid.", exceeds: "Also records the bank deposit for each payment and notes which invoices are still open." },
      { name: "Bills and expenses", objective: "O4", notYet: "A bill was paid with a new expense, or entries have no account or receipt.", meets: "At least 4 bills or expenses with vendor, date, amount, account and receipt noted.", exceeds: "Also shows a bill payment and a contractor set up with a W-9 note." },
      { name: "Bank reconciliation", objective: "O5", notYet: "No reconciliation, or it was forced to zero with a made-up entry.", meets: "Reconciliation ends at a difference of zero, or has an honest note of what is still off.", exceeds: "Also lists what caused each difference (fee, typo, duplicate, uncleared check) and how it was fixed." },
      { name: "Report summary", objective: "O6", notYet: "The summary is missing the profit or loss, or the numbers do not match the entries.", meets: "States total income, total expenses and the profit or loss, and who still owes money.", exceeds: "Also names bills due soon and one thing the owner could act on." },
      { name: "Credential plan", objective: "O1", notYet: "No credential named, or no dates.", meets: "Names an Intuit credential, the official page to check and dates for checking it and for practice tests.", exceeds: "Also lists three employers or clients to contact and a date to contact each." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who take an Intuit QuickBooks or bookkeeping certification exam within 90 days (follow-up survey)",
      "Learners who get a bookkeeping job, an office role that uses QuickBooks or a paying bookkeeping client within 6 months",
      "Small business owners and nonprofits in the course who reconcile their own books every month (30-day follow-up)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer or tablet with a web browser for the free QuickBooks Online test drive (opened in a private window); a phone screen is too small for most practice",
      "Paper, a pen and a calculator for the \"Try it now\" notes, because the test drive does not save",
      "Printed copies of the practice bank statement and transaction list for groups without computers",
      "About 75 to 90 minutes in total, in short sessions: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "In a lab or class: take the pre-test together, then do one chapter per session with the test drive open on each screen.",
      "The test drive resets and does not save; remind learners to write down each entry for the final task.",
      "Screens and menu names change; if a learner cannot find something, show them the search box rather than a fixed menu path.",
      "Never let learners type real bank logins, account numbers or client data in practice; use the sample company or made-up numbers.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time.",
      "Before learners plan for a credential, have them open the official Certiport and Intuit Academy pages themselves to check current fees and eligibility."
    ]
  }
};
