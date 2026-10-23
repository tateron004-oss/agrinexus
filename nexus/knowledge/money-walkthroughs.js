"use strict";

// Step-by-step walkthroughs for the money guide (nexus/knowledge/money-guide.js): fifteen for the United States, eight for Kenya and six for Nigeria. Like the other walkthroughs (us-walkthroughs.js, california-walkthroughs.js, pr-walkthroughs.js),
// Kyro shows ONE step at a time on the screen with its official page, reads it out, and the PERSON does each step; Kyro never files, pays, applies, signs or moves any money for them and never asks for an account number or a password. Every step
// is a fact the guide already states from the official pages it cites (read on the guide's CHECKED_ON date), with the page that says it as the step's link; a step that is Kyro's own working practice says so, so the person is never told something
// is official when it is not. What the pages do not say is not here.
//
// moneyWalkthrough(id) -> { id, title, checkedOn, steps: [{ title, text, gather: [], link: { name, url } | null }], sources: [{ name, url }] } | null
// WALK_OF_TOPIC: the guide's topic -> the walkthrough that goes with it       PHRASE_OF_WALK: the words that ask for it (each is taken by public/kyro-money-topics.js as that topic; a test checks)
// moneyWalkthroughFor(text) -> the walkthrough the words ask for ("walk me through checking my credit report"), or null

const { SOURCES, CHECKED_ON } = require("./money-guide.js");
const { moneyTopic } = require("../../public/kyro-money-topics.js");

const link = key => ({ name: SOURCES[key].name, url: SOURCES[key].url });
const S = (title, text, gather, key, done, words) => ({ title, text, gather, key: key || null, done: done || null, words: Array.isArray(words) ? words : [] });
const W = (term, means) => ({ term, means });
const OWN = "This step is Kyro's own working practice, not an official page. ";

const BASE = {
  // ---------------------------------------------------------------- United States
  "budget": {
    title: "Making a spending plan and a bill calendar",
    topic: "money-spending-plan", phrase: "making a budget",
    steps: [
      S("Write down every source of income", "The CFPB says to write down every source of income, including self-employment, more than one job, child support and government benefits.", ["Pay stubs, or a note of what comes in each month", "Any child support or benefit payments"], "cfpbBudget"),
      S("Track your spending for one week", "The CFPB says to track your spending by category, and that you can start with just one week, using receipts or your checking account.", ["Receipts, or your bank or card statement for the week"], "cfpbBudget"),
      S("Put your bill due dates on a calendar", "The CFPB says a shortfall at the end of the month can come from bills and income not lining up in time, and that a calendar of due dates helps you see it. Write each bill and the day it is due.", ["A list of your bills and their due dates"], "cfpbBudget"),
      S("Put the three together", "Bring income, spending and due dates into one budget worksheet and see whether anything is left over to save. The CFPB's Your Money, Your Goals has tools for this, though I read the article and not the tools' own pages.", ["Your income list", "Your spending list", "Your bill calendar"], "cfpbYmyg"),
      S("Choose one specific goal", "The CFPB suggests choosing one specific goal, such as emergency savings, a car, a down payment on a home or retirement. Write it at the top of your plan.", ["The one thing you most want your money to do"], "cfpbBudget"),
      S("Keep it up to date", "The CFPB says to update your budget when your job or your spending changes. " + OWN + "If you want, say help me make a money plan, and I will ask you ten questions and save a document of your plan.", ["A day each month to look at it"], null)
    ]
  },
  "emergency-fund": {
    title: "Starting an emergency fund",
    topic: "money-savings", phrase: "building an emergency fund",
    steps: [
      S("Think of the surprises you have had", "The CFPB gives no dollar or month target. It says the amount depends on your situation, and that to set a goal you think about the unexpected costs you have had before and what they cost.", ["A list of past surprise costs, such as a repair or a medical bill"], "cfpbEmergency"),
      S("Start small", "The CFPB says even a small amount gives some security, and that saving steadily matters. Pick a first amount you can save without missing a bill.", ["An amount you can spare each pay day"], "cfpbEmergency"),
      S("Choose where to keep it", "The CFPB calls a bank or credit union account generally one of the safest places, and says cash at home can be stolen, lost or destroyed. The FDIC insures deposits to at least $250,000 at each insured bank; the NCUA does the same for a federally insured credit union.", ["The name of a bank or credit union you could use"], "cfpbEmergency"),
      S("Set up a repeating transfer", "The CFPB says to set up repeating transfers from checking to savings, or to split your paycheck between accounts if your employer offers it. Watch your checking balance so a transfer does not cause an overdraft fee. You do this with your bank; I cannot move money.", ["Your bank's app or a branch visit"], "cfpbEmergency"),
      S("Add one-time money", "The CFPB says a tax refund or a cash gift can start the fund. The IRS lets you split a refund among up to three accounts, in your name or your spouse's, with Form 8888 on a paper return or in your tax software.", ["Your account details, kept to yourself"], "irsSplitRefund"),
      S("Check on it", OWN + "Once a month, look at how much is in the fund, and write down what counts as an emergency for you, so you know when to use it and when to leave it alone.", ["A reminder on your calendar"], null)
    ]
  },
  "bank-account": {
    title: "Choosing and checking a bank or credit union account",
    topic: "money-bank-account", phrase: "choosing a bank or credit union account",
    steps: [
      S("Make a short list", OWN + "Write down two or three banks or credit unions near you, or that you can use by phone.", ["Names of places you could use"], null),
      S("Check each one is insured", "The FDIC says its BankFind tool shows whether a bank is insured, and the NCUA's Credit Union Locator shows whether a credit union is federally insured. The FDIC insures deposits to at least $250,000 at each insured bank, and the NCUA insures $250,000 per member-owner for individual accounts.", ["The names on your list"], "fdicDeposit"),
      S("Compare the costs", "The FDIC's Get Banked page lists what to compare: the monthly fee and whether you can avoid it, overdraft fees, ATM fees, the minimum balance (many are low or none, and some open with as little as $25), alerts and bill pay. It says Bank On certified accounts have low, clear costs and no overdraft fees, and that second-chance accounts exist for people with past banking problems.", ["The fee list from each place"], "fdicGetBanked"),
      S("Decide about overdraft", "The CFPB says banks cannot charge overdraft fees on ATM and one-time debit card transactions unless you opted in, and that you can change that choice at any time. Many banks charge $30 or more for each overdraft.", ["Whether you want overdraft on your debit card"], "cfpbOverdraft"),
      S("Set up direct deposit for government payments", "The Treasury says most paper federal checks ended after 30 September 2025, so benefit payments need an electronic method, such as direct deposit. If you have no account, a Direct Express card is another way: the number is 800-967-6857.", ["Your benefit or tax refund details, kept to yourself"], "treasuryPaperChecks"),
      S("Turn on low-balance alerts", "The CFPB says low-balance alerts help you avoid overdrafts. Ask your bank how to turn them on. " + OWN + "Then check your balance once a week at first.", ["Your phone number for alerts"], "cfpbOverdraft")
    ]
  },
  "credit-report": {
    title: "Checking your credit report and fixing an error",
    topic: "money-credit", phrase: "checking my credit report",
    steps: [
      S("Get your free reports", "You can see your report from each of the three bureaus, Equifax, Experian and TransUnion, once a week for free at AnnualCreditReport.com, or by phone on 877-322-8228. The CFPB and the FTC warn that other free-report sites may charge you or sign you up for products.", ["A computer or phone, and your ID details"], "cfpbFreeReport"),
      S("Read each report for mistakes", "The CFPB says to check your reports for errors. Look for accounts you do not recognize, wrong balances, and payments marked late that were on time. " + OWN + "Mark each mistake.", ["The three reports", "A pen"], "cfpbGoodScore"),
      S("Dispute an error in writing", "The CFPB says to write to the credit bureau saying what is wrong and why, send copies of your proof rather than originals, and use certified mail with a return receipt. Bureaus also take disputes online or by phone.", ["A letter, copies of your proof, an envelope"], "cfpbDisputeError"),
      S("Also tell the company that sent the data", "The CFPB says to dispute in writing with the company that supplied the information too, such as the bank, the card company or the landlord.", ["The company's address from your report"], "cfpbDisputeError"),
      S("Know how long it takes", "The bureau generally must investigate within 30 days, or up to 45 if you disputed after getting your free annual report. If the company says the data is right, you can ask the bureaus to add a statement of your dispute to your file.", ["A date on your calendar 30 days out"], "cfpbDisputeError"),
      S("Consider a freeze or a fraud alert", "If you think someone used your identity, the FTC says a credit freeze is free and blocks anyone from opening new credit in your name until you lift it, and you contact all three bureaus. A fraud alert is also free; you contact one bureau and it tells the other two, and an initial alert lasts one year.", ["Your ID details"], "ftcFreezes")
    ]
  },
  "debt-plan": {
    title: "Taking stock of your debts and choosing what to pay first",
    topic: "money-debt-plan", phrase: "paying down my debts",
    steps: [
      S("Write every debt down", "The CFPB's debt worksheet has columns for the type of debt, the monthly payment and due date, the interest rate, the amount outstanding, a payoff date or goal, and notes about fees.", ["Your latest statements"], "cfpbDebtWorksheet"),
      S("Mark any in collections and add up the payments", "The worksheet asks you to mark debts already in collections and to add up your total monthly debt payment.", ["Your statements and any collection letters"], "cfpbDebtWorksheet"),
      S("Put first what protects your home and your income", "The CFPB's prioritizing-bills tool puts first rent or mortgage, utilities, transport and childcare to keep your job, insurance and court-ordered payments. Credit cards and loans come next, because they risk late fees, credit damage and higher rates. It says not to pay only whoever calls loudest.", ["Your list of debts and bills"], "cfpbPrioritizingBills"),
      S("Call the lender before you miss a payment", "The CFPB says to call before the payment is due, explain why, say what you can pay and when normal payments can restart, and ask for more time or a waived late fee.", ["The lender's phone number", "What you can pay and when"], "cfpbCantPayCards"),
      S("If you cannot keep up, ask a nonprofit credit counselor", "The CFPB says credit counseling is usually nonprofit, and to check the Justice Department's approved list and get fees in writing. A debt management plan is one monthly payment to the counseling group, which pays your creditors; it does not erase debt.", ["The CFPB's page on credit counseling"], "cfpbCreditCounseling"),
      S("Watch out for debt settlement firms", "The CFPB says a debt settlement company cannot collect fees before it settles your debt, and that guaranteeing your debt will go away, or telling you to stop paying, are warning signs.", ["Nothing to gather"], "cfpbCantPayCards")
    ]
  },
  "collector": {
    title: "Dealing with a debt collector",
    topic: "money-debt-collectors", phrase: "dealing with a debt collector",
    steps: [
      S("Know what a collector may not do", "The Fair Debt Collection Practices Act bans abusive, unfair or deceptive tactics. A collector may not harass you, lie about the amount, claim to be an attorney or the government, or threaten arrest. Calls are generally not allowed before 8 in the morning or after 9 at night, and more than seven calls in seven days about one debt is presumed to break the law.", ["A note of the date and time of each call"], "cfpbFdcpa"),
      S("Look for the validation notice", "At first contact, or within 5 days, the collector must send a notice with the creditor's name, the amount owed and how to dispute it. Keep it.", ["The notice and its envelope"], "cfpbCollectorContacts"),
      S("Dispute in writing within 30 days", "You have 30 days from getting the notice to dispute. If you do so in writing within 30 days, the collector must stop collecting until it sends verification. Use certified mail with a return receipt and keep copies.", ["A letter, an envelope, a copy"], "cfpbCollectorContacts"),
      S("Ask them to stop contacting you, if you want", "You can send a written letter telling a collector to stop. After that it may only confirm it will stop or say it may take a specific action, such as suing. The debt does not go away.", ["A letter"], "cfpbCollectorStop"),
      S("Check whether the debt is old", "A statute of limitations is the time limit for suing on a debt, mostly 3 to 6 years, and it varies by state. After it passes, collectors in most states can still ask you to pay but cannot sue or threaten to. A partial payment or acknowledging the debt may restart the clock, so think before you pay.", ["The date of your last payment"], "cfpbOldDebt"),
      S("If you are sued, respond", "Respond by the date on the court papers: ignoring them can lead to a default judgment, and responding does not mean you admit you owe it.", ["The court papers"], "cfpbSued"),
      S("Complain if the rules were broken", "You can complain at consumerfinance.gov/complaint or on 855-411-2372, at ReportFraud.ftc.gov, or to your state attorney general.", ["Your notes and copies"], "cfpbFdcpa")
    ]
  },
  "free-tax-help": {
    title: "Getting free help with your taxes",
    topic: "money-tax-help", phrase: "getting free tax help",
    steps: [
      S("See whether VITA fits you", "The IRS's VITA program offers free tax preparation. It sets no program-wide income limit, though a site may set its own, and it focuses on people who generally meet the Earned Income Tax Credit guidelines. The IRS says many sites serve people who make about $70,244 or less, without naming a tax year.", ["Your income for the year"], "irsVita"),
      S("If you are 60 or older, look at Tax Counseling for the Elderly", "That program is generally for people 60 and older. You can find a site with the VITA locator or by calling 800-906-9887.", ["Your phone"], "irsVita"),
      S("Or use IRS Free File", "IRS Free File guides you through your return if your adjusted gross income is $89,000 or less. It reopens in January 2027.", ["Last year's return, if you have it"], "irsFreeFile"),
      S("Try the EITC Assistant", "The IRS's Earned Income Tax Credit Assistant does not ask for your name, Social Security number or bank details, and does not save what you enter. Have your W-2s and 1099s ready.", ["Your W-2s and 1099s"], "irsEitc"),
      S("Know the credit's basics", "The Earned Income Tax Credit is for low to moderate income workers. You need earned income, investment income under $11,950 for tax year 2025, and a valid Social Security number for you, a spouse and any child you claim. With no qualifying child you must be at least 25 and under 65.", ["Social Security numbers, kept to yourself"], "irsEitcWho")
    ]
  },
  "buy-a-home": {
    title: "Getting ready to buy a home",
    topic: "money-homeownership", phrase: "buying a home",
    steps: [
      S("Prepare to shop", "The CFPB's first step is to check your credit, your budget and your down payment. Focus on a payment you can afford, not the most a lender will approve, and count insurance, property taxes, any mortgage insurance, association fees and repairs.", ["Your credit reports", "Your budget"], "cfpbOwningHome"),
      S("Plan the down payment", "A larger down payment usually means a lower rate and better odds of approval. If you cannot put down 20 percent, lenders usually require private mortgage insurance or an FHA, VA or USDA loan. The CFPB lists savings, a family gift with a gift letter, local nonprofit and government programs, VA loans and USDA loans.", ["How much you have saved"], "cfpbDownPayment"),
      S("Talk to lenders and compare Loan Estimates", "The Loan Estimate is a three-page form the lender must give you within three business days of your application. Every lender uses the same form, so you can compare them. It is not an approval.", ["Loan Estimates from two or three lenders"], "cfpbLoanEstimate"),
      S("Compare the closing costs", "Compare closing costs as well as rates. A no-closing-cost loan is not free: the cost shows up as a higher rate or a larger loan.", ["The closing cost lines of each Loan Estimate"], "cfpbLoanCosts"),
      S("Find a housing counselor", "HUD-approved housing counselors can help with buying; the CFPB's Find a Housing Counselor tool lists them, and HUD's line is 800-569-4287.", ["Your zip code"], "cfpbHudCounselor"),
      S("Get ready to close", "The Closing Disclosure is a five-page form with the final terms, and you must get it at least three business days before closing. Compare it with your Loan Estimate and ask about any difference.", ["Your Loan Estimate and the Closing Disclosure"], "cfpbClosingDisclosure")
    ]
  },
  "mortgage-trouble": {
    title: "What to do when you fall behind on your mortgage",
    topic: "money-housing-trouble", phrase: "what to do when I fall behind on my mortgage",
    steps: [
      S("Call your servicer right away", "The CFPB says to be ready to explain why you are behind, whether it is temporary, and your income and expenses.", ["Your servicer's number", "Your income and expenses"], "cfpbCantPayMortgage"),
      S("Fill out any assistance application", "Ask the servicer what help it has. The options the CFPB lists are a refinance, a loan modification, a repayment plan, forbearance, a short sale, or a deed in lieu of foreclosure. Forbearance pauses or lowers payments, but you still owe the money later.", ["The application, filled in and copied"], "cfpbForbearance"),
      S("Know your rights as a borrower", "The CFPB says servicers generally must try to contact you within 36 days of your becoming delinquent and send a written notice about help options within 45 days.", ["Any letters from your servicer"], "cfpbServicerHelp"),
      S("Call a HUD-approved housing counselor", "Foreclosure-prevention counseling is free. You can call the HOPE Hotline 24 hours a day on 888-995-4673, or HUD on 800-569-4287.", ["Your phone"], "cfpbHudCounselor"),
      S("Avoid foreclosure-relief scams", "The FTC says never to pay up front for foreclosure help, and lists guarantees, so-called forensic audits, telling you to stop paying, and sending payments to anyone other than your servicer as scam signs.", ["Nothing to gather"], "ftcMortgageRelief")
    ]
  },
  "check-an-offer": {
    title: "Checking an investment offer before you pay",
    topic: "money-scams", phrase: "how to spot an investment scam",
    steps: [
      S("Stop, and do not send money yet", "Pressure to send money right now is a warning sign. Investor.gov and the FTC list others: guaranteed or very high returns with little or no risk, no written details, being told to keep it secret, and sellers who are not licensed or registered.", ["The offer, written down"], "invAvoidFraud"),
      S("Ask Investor.gov's five questions", "Is the seller licensed? Is the offer registered? How do the risks compare with the rewards? Do you understand it? Where can you turn for help?", ["Your answers to the five questions"], "invCheckProfessional"),
      S("Check the seller on Investor.gov", "Investor.gov's free Check Out Your Investment Professional tool shows whether a person or firm is licensed and any discipline.", ["The seller's name and firm"], "invCheckProfessional"),
      S("Search the company's name", "The FTC says to search the company and its promoters online with words like review, scam or complaint.", ["The company's name"], "ftcInvestmentScams"),
      S("Never invest on a friend's word alone", "Investor.gov says affinity fraud, in churches and communities, comes from someone who is, or pretends to be, in your group. Research the person and the investment no matter how much you trust them.", ["Nothing to gather"], "invGroupScams"),
      S("Report it if it is a scam", "Use the SEC's complaint form on Investor.gov, ReportFraud.ftc.gov, or your state securities regulator. Never pay to recover money you lost.", ["Your messages and receipts"], "invRelationshipScams")
    ]
  },
  "identity-theft": {
    title: "What to do if someone used your identity",
    topic: "money-account-security", phrase: "what to do after identity theft",
    steps: [
      S("Call each affected company", "The FTC says to call the fraud department of each company, ask them to close or freeze the accounts, and change your logins, passwords and PINs.", ["The companies' numbers from a statement or their real website"], "ftcIdentityTheftRecovery"),
      S("Place a fraud alert and freeze your credit", "A free one-year fraud alert with one credit bureau tells the other two. A credit freeze is free and lasts until you lift it.", ["Your ID details"], "ftcFreezes"),
      S("Look at your credit reports", "Get your reports and look for anything unfamiliar.", ["Your credit reports"], "ftcIdentityTheftRecovery"),
      S("Report it at IdentityTheft.gov", "The FTC says to report at IdentityTheft.gov to get a personal recovery plan. I could not open that site to read its text, so I cannot describe its screens.", ["Your notes"], "ftcIdentityTheftRecovery"),
      S("Protect your accounts from now on", "The FTC says to use long passwords, at least 15 characters or a passphrase of random words, turn on two-factor authentication, and never click links in unexpected messages.", ["A safe way to keep your new logins"], "ftcProtectInfo")
    ]
  },
  "choose-investments": {
    title: "Learning how to choose what to invest in",
    topic: "money-what-to-invest", phrase: "choosing what to invest in",
    steps: [
      S("Define your goals and when you need the money", "Investor.gov says to list your most important goals first and set how many years you have for each, because the right choice depends on the time frame. For a goal five years away or less, it says not to choose risky investments.", ["Your goals and the years for each"], "invDefineGoals"),
      S("Work out your finances", "Investor.gov's order for getting started is to work out your finances before anything else.", ["Your budget"], "invSaveAndInvest"),
      S("Pay off credit cards and other high-interest debt", "Investor.gov says virtually no investment will beat the 18 percent or more many credit cards charge.", ["Your debt list"], "invHighInterestDebt"),
      S("Save for a rainy day", "Investor.gov says most smart investors keep enough in savings to cover an emergency, and some keep up to six months of income.", ["Your emergency savings"], "invSaveAndInvest"),
      S("Gauge your risk tolerance", "That is your ability and willingness to lose some or all of the money for potentially greater returns. Investor.gov says the right mix of stocks, bonds and cash is personal.", ["How you would feel if it lost value"], "invRiskTolerance"),
      S("Ask the five questions before you invest", "Is the seller licensed? Is the offer registered? How do the risks compare with the rewards? Do you understand it? Where can you turn for help? For advice about your own situation, ask a licensed professional, check them on Investor.gov's free tool, ask how they are paid and ask for their Form CRS.", ["The professional's name"], "invFiveQuestions")
    ]
  },
  "workplace-plan": {
    title: "Checking your workplace retirement plan",
    topic: "money-retirement-accounts", phrase: "checking my workplace retirement plan",
    steps: [
      S("Ask whether there is a plan and a match", "Employers choose whether to offer a plan and whether to match your contributions. Ask your employer or the plan administrator.", ["Your employer's benefits contact"], "dolRetirementPlan"),
      S("Ask about vesting", "Your own contributions are always 100 percent yours. For employer matching under current rules, cliff vesting is 0 percent under three years and 100 percent at three years, and graduated vesting is 20 percent at two years, rising to 100 percent at six.", ["How long you have worked there"], "dolRetirementPlan"),
      S("Look at the funds and their fees", "A 401(k) gives you a choice of investment options, often mutual funds, and target-date funds are common. A fund's fees are in the fee table of its prospectus.", ["The plan's fund list"], "inv401k"),
      S("Know the limits", "For 2026 the IRS limit is $24,500 for a 401(k), 403(b) or governmental 457, with an extra $8,000 from age 50 and $11,250 at ages 60 to 63.", ["What you can contribute each pay day"], "irsLimits2026"),
      S("Know your choices if you leave the job", "The IRS lists four: leave the money in the old plan, roll it into a new employer's plan, roll it into an IRA, or take it as a lump sum, which brings tax and possibly a penalty.", ["Nothing to gather"], "irsTermination"),
      S("Remember: an account is not an investment", "A 401(k) is an account, and a fund is an investment you hold inside it. Opening or funding an account does not by itself invest the money.", ["Your plan's statement"], "inv401k")
    ]
  },
  "student-loans": {
    title: "Managing your federal student loans",
    topic: "money-student-loans", phrase: "managing my student loans",
    steps: [
      S("Find your servicer", "Private companies called loan servicers work for the U.S. Department of Education. If you do not know yours, log in to StudentAid.gov or call the Federal Student Aid Information Center on 1-800-433-3243.", ["Your StudentAid.gov login"], "studentRepayment"),
      S("Look at your repayment plan", "The plans are fixed-payment ones (Standard, Graduated, Extended and, for loans first paid out on or after 1 July 2026, the Tiered Standard Plan) and income-driven ones that base your payment on your income and family size, which you must update each year.", ["Your loan details"], "studentRepayment"),
      S("If you cannot pay, tell the servicer right away", "Deferment and forbearance both temporarily stop payments, but in most cases interest keeps adding up and the time may not count toward forgiveness. The page suggests an income-driven plan first.", ["Your income and expenses"], "studentRelief"),
      S("Know the timeline to default", "A loan is past due the first day after a missed payment, the servicer reports it to the credit bureaus after 90 days, and default comes after at least 270 days without scheduled payments. If you are in default, contact the Default Resolution Group on 1-800-621-3115.", ["Any notices you got"], "studentDefault"),
      S("Never pay for help", "You never have to pay for help with federal student aid or loans. Companies that charge for lowering payments, changing plans or getting out of default are doing what you can do free through your servicer. Never share your FSA ID.", ["Nothing to gather"], "studentScams"),
      S("Check the rules again", "These rules changed on 1 July 2026 and the page says more will change on 1 July 2027, so check StudentAid.gov.", ["A reminder on your calendar"], "studentRepayment")
    ]
  },
  "before-a-payday-loan": {
    title: "What to do before you take a payday loan",
    topic: "money-costly-borrowing", phrase: "what to do before a payday loan",
    steps: [
      S("Know what it costs", "A payday loan is usually $500 or less, due on your next payday. Fees often run $10 to $30 for every $100 borrowed, and $15 per $100 is common, which is an APR of almost 400 percent on a two-week loan. If you borrow $300 you owe $345 in two weeks.", ["The exact fee the lender quotes in writing"], "cfpbPaydayCosts"),
      S("Try the cheaper ways first", "The FTC names: asking creditors for more time or a smaller payment; an advance from an employer, a nonprofit or a community group; family or friends; a bank or credit union loan or card; credit union payday alternative loans; a quick electronic tax refund with direct deposit; nonprofit credit counseling; and local charities and churches.", ["A list of who you could ask"], "ftcPaydayTitle"),
      S("Understand rollovers", "If you roll the loan over by paying only the fee, you pay $45 again on a $300 loan and still owe the $300. Four weeks costs $90.", ["Nothing to gather"], "cfpbPaydayRollover"),
      S("If you cannot repay, call the lender", "Ask for an extended repayment plan, which some states require. You cannot be arrested for not paying a payday loan, although the lender can sue.", ["The loan paperwork"], "cfpbPaydayCantRepay"),
      S("Complain if you were treated unfairly", "Use consumerfinance.gov/complaint or call 855-411-2372, or contact your state attorney general.", ["Your records"], "cfpbComplaint")
    ]
  },
  // ---------------------------------------------------------------- Kenya
  "ke-pin-and-returns": {
    title: "Getting a KRA PIN and filing your return in Kenya",
    topic: "ke-tax-personal", phrase: "getting a KRA PIN and filing my return in Kenya",
    steps: [
      S("Have your ID details ready", "Residents need their National ID or Alien ID details, plus the employer's PIN if employed.", ["Your National ID or Alien ID", "Your employer's PIN, if you have a job"], "kraPin"),
      S("Register on iTax", "Go to itax.kra.go.ke, choose Individual and then the online form, which has three parts: basic information, obligations and source of income.", ["A phone or computer"], "kraPin"),
      S("Keep your acknowledgment number", "Submit the form and keep the acknowledgment number it gives you. I could not find the cost or timing of getting a PIN.", ["A safe place for the number"], "kraPin"),
      S("File your return by the deadline", "The return for the 2025 income year runs from 1 January to 30 June 2026 on iTax, and employment income is pre-filled from your P9. From 1 January 2027 the individual deadline moves to 30 April, according to KRA's explainer on the Finance Act 2026.", ["Your P9 or income records"], "kraFile"),
      S("File even if you earned nothing", "KRA's page says that if you hold a PIN with an income tax obligation, a return is due every year, even a nil return.", ["Nothing to gather"], "kraFile"),
      S("Know the penalties and the amnesty", "A late return costs the higher of 5 percent of the tax due or KSh 2,000. The Finance Act 2026 waives penalties and interest for periods up to 31 December 2025 if the principal tax is paid by 31 December 2026. KRA's lines are +254 20 4 999 999 and +254 711 099 999.", ["The tax you owe, if any"], "kraFinanceAct")
    ]
  },
  "ke-check-a-sacco": {
    title: "Checking that a SACCO is licensed in Kenya",
    topic: "ke-sacco", phrase: "checking a SACCO is licensed in Kenya",
    steps: [
      S("Open SASRA's lists", "SASRA tells the public to check a SACCO before transacting. Its website has a list of licensed deposit-taking SACCOs, updated yearly, and a list of authorized SACCOs with non-withdrawable deposits.", ["The SACCO's full name"], "sasraDt"),
      S("Look for the SACCO by name", "Check the current year's list. If you cannot find the SACCO there, do not treat it as licensed: ask SASRA on +254 20 2935101 before you put money in.", ["The list for this year"], "sasraRegulated"),
      S("Know what protects your money", "The Sacco Societies Act sets up a Deposit Guarantee Fund that protects members' deposits, not shares, up to KSh 100,000 per member, after subtracting what you owe the SACCO. That figure is from the Act as revised to 31 December 2022. The KDIC does not insure SACCOs.", ["Your deposit statement"], "saccoAct"),
      S("Ask the questions before you join", "Ask whether your money is withdrawable or non-withdrawable, whether the guarantee fund applies and only to KSh 100,000, and when the annual meeting is. The annual general meeting is the supreme organ of a SACCO.", ["A list of questions"], "saccoAct"),
      S("Know where disputes go", "Disputes between members and a SACCO go to the Co-operative Tribunal.", ["Nothing to gather"], "coopAct")
    ]
  },
  "ke-check-a-loan-app": {
    title: "Checking a digital loan app in Kenya",
    topic: "ke-digital-loans", phrase: "checking a digital loan app in Kenya",
    steps: [
      S("Look for the app in the Central Bank's directory", "Digital lenders need a Central Bank licence. Its directory of licensed digital credit providers, updated 29 September 2026, lists 281 entries with each lender's address, phone and licence date.", ["The lender's exact name"], "cbkDcpDirectory"),
      S("Read the terms before you accept", "Before lending, the lender must give you the loan amount, the charges, the interest rate, the total cost of credit, the annual percentage rate, the due date and how to complain, and say it is regulated by the Central Bank.", ["The terms screen, saved or photographed"], "cbkDcpRegs"),
      S("Know what a lender may not do", "In collecting a debt it may not threaten or harm you, send obscene messages to you or your contacts to shame you, read your phone contacts to message them about your debt, or post your personal information online.", ["Nothing to gather"], "cbkDcpRegs"),
      S("Know the limits on what you owe", "If you default, what it can recover is limited to the principal, plus interest that does not exceed the principal, plus reasonable recovery costs. It may not report a debt of KSh 1,000 or less to a credit bureau and must warn you in writing 30 days before a negative listing.", ["Your loan amount"], "cbkDcpRegs"),
      S("Complain if you need to", "The lender must settle a complaint promptly, or within 30 days at the latest. If it does not, write to the Central Bank at comms@centralbank.go.ke or call +254 20 286 0000. For misuse of your data, the Data Protection Commissioner is at cie.odpc.go.ke.", ["Your messages and the loan record"], "odpcHome")
    ]
  },
  "ke-crb-report": {
    title: "Getting your credit report and fixing an error in Kenya",
    topic: "ke-credit-reference", phrase: "getting my CRB report in Kenya",
    steps: [
      S("Ask each bureau for your free report", "Under the Banking (Credit Reference Bureau) Regulations of 2020 you may get a copy of your report from each bureau at no charge at least once a year. The Central Bank's directory of November 2022 lists TransUnion Africa, Creditinfo Kenya and Metropol Corporation, but it is old, so check for a newer one.", ["Your ID"], "crbRegs"),
      S("Expect it within five working days", "The bureau must give you the report within five working days of your request.", ["A date on your calendar"], "crbRegs"),
      S("Read it for errors", "Look for accounts or payments that are not yours or are wrong. " + OWN + "Mark each one.", ["Your report", "A pen"], null),
      S("Dispute in writing", "Tell the bureau in writing. Within five working days it must mark the entry as under investigation and ask the lender to confirm it. The lender has 21 days to finish and tell all bureaus whether to delete, correct or keep it.", ["A letter and copies of your proof"], "crbRegs"),
      S("Add a statement if you still disagree", "If the investigation is not finished in 21 days, the disputed information is deleted at your request. If you still disagree you may add a statement of up to 100 words, and you can take the matter to the Central Bank, an alternative dispute mechanism or a court.", ["Your 100-word statement"], "crbRegs")
    ]
  },
  "ke-treasury-bills": {
    title: "Buying Treasury bills in Kenya",
    topic: "ke-saving-investing", phrase: "buying Treasury bills in Kenya",
    steps: [
      S("Know what you are buying", "Treasury bills run for 91, 182 or 364 days, are sold at a discount and paid at face value on maturity, and are issued weekly. Rates change at every auction, so I will not quote one.", ["Nothing to gather"], "cbkSecurities"),
      S("Know the minimum", "The Central Bank's securities page gives KSh 50,000 for bills and bonds. That page is old, so confirm it on the current auction notice.", ["The current auction notice"], "cbkSecurities"),
      S("Open a CDS account", "Open a CDS account with the Central Bank, which is free, or through a bank, where fees may apply.", ["Your ID details"], "cbkAuctionRules"),
      S("Bid through DhowCSD or Treasury Mobile Direct", "Retail bids go through the DhowCSD investor portal or Treasury Mobile Direct. I could not read the DhowCSD sign-up steps.", ["Your CDS account details, kept to yourself"], "cbkAuctionRules"),
      S("Protect yourself", "Deal only with licensed firms, open your own CDS account, make sure nobody trades in it without your knowledge, and get statements. If you have a problem, complain first to the firm, then the exchange, then the CMA.", ["Nothing to gather"], "cmaProtection")
    ]
  },
  "ke-nssf-voluntary": {
    title: "Joining the NSSF as a voluntary member in Kenya",
    topic: "ke-pension-retirement", phrase: "joining NSSF as a voluntary member in Kenya",
    steps: [
      S("Check you can join", "Voluntary membership is for self-employed people. Members must be Kenyans aged 18 or older who are employed or self-employed.", ["Nothing to gather"], "nssfVoluntary"),
      S("Register at an NSSF office", "Register at an NSSF office with your ID or passport. The NSSF's toll-free line is 0800 2212744.", ["Your ID or passport"], "nssfVoluntary"),
      S("Activate the account", "KSh 200 activates the account.", ["KSh 200"], "nssfVoluntary"),
      S("Top up the account", "Top up with M-Pesa by dialling *222#. The Act sets a minimum of KSh 200 for each contribution and KSh 4,800 a year.", ["Your phone"], "nssfAct"),
      S("Know the benefits", "The age benefit is paid at 55, and the withdrawal benefit from 50 if you have retired from regular paid employment. Invalidity, survivors and emigration benefits also exist.", ["Nothing to gather"], "nssfBenefits"),
      S("Ask about the rates", "The Act (as revised to the end of 2022) sets employee and employer contributions at 6 percent each, but the NSSF's FAQ says employees pay about 5 percent, and I found no current limits, so ask the NSSF before you rely on a figure.", ["Your pay details, if you are employed too"], "nssfFaqs")
    ]
  },
  "ke-check-a-bank": {
    title: "Checking that a bank is insured in Kenya",
    topic: "ke-bank-deposit-insurance", phrase: "checking a bank is insured in Kenya",
    steps: [
      S("Confirm the Central Bank licenses it", "Start with the Central Bank's directories of licensed banks and microfinance banks.", ["The bank's exact name"], "cbkSupervision"),
      S("Look for the KDIC sign", "Look for the KDIC certificate or sticker saying the bank is a member, and check the KDIC's member list.", ["A visit to the branch or the KDIC website"], "kdicMembers"),
      S("Know the limit", "The KDIC protects up to KSh 500,000 per depositor at each member institution, and your accounts at the same bank are added together. A joint account is covered up to KSh 500,000 in total, shared equally between the holders.", ["Your balances"], "kdicDeposit"),
      S("Know what is not covered", "It does not cover balances above the limit, money market funds, unit trusts, shares, government securities, digital currencies, or deposits at institutions that are not members. SACCO deposits are not covered.", ["Nothing to gather"], "kdicDeposit"),
      S("Know how a claim works", "A payout happens only after the Central Bank puts a bank into liquidation, or a court orders it wound up. Customer care is on +254 709 043 000 and customercare@kdic.go.ke.", ["Nothing to gather"], "kdicFaqs")
    ]
  },
  "ke-report-a-scam": {
    title: "Checking and reporting an investment scam in Kenya",
    topic: "ke-scams-fraud", phrase: "checking and reporting an investment scam in Kenya",
    steps: [
      S("Look for the warning signs", "The Central Bank's warning signs are guaranteed or high returns with no risk, unregistered or unclear owners, pressure to invest fast, returns that depend on recruiting others, prize messages that ask for a fee, and callers asking for your PIN, password or card details.", ["The offer, written down"], "cbkFraud"),
      S("Check the firm", "Use licensees.cma.or.ke for investment firms, the Central Bank's directories for banks, microfinance banks and digital lenders, SASRA's lists for SACCOs, and the Central Bank's directory of payment providers.", ["The firm's exact name"], "cmaProtection"),
      S("Read the CMA's public caution", "The CMA's caution of 11 September 2026 names 16 entities it says operated without a licence or approval. Its page has the names.", ["The CMA's caution page"], "cmaCaution"),
      S("If you were caught, act at once", "Tell your bank, change your passwords and report to the police.", ["Your bank's number"], "cbkFraud"),
      S("Report it", "The CMA's investor protection brochure lists its Capital Market Fraud Investigation Unit, and the CMA's lines are +254 20 2264400 and +254 20 2264900; please confirm them before you give them out. For misuse of your data, the Data Protection Commissioner is at cie.odpc.go.ke.", ["Your messages and receipts"], "cmaProtection")
    ]
  },
  // ---------------------------------------------------------------- Nigeria
  "ng-check-a-bank": {
    title: "Checking that a bank is covered by the NDIC in Nigeria",
    topic: "ng-bank-deposit-insurance", phrase: "checking a bank is covered by the NDIC in Nigeria",
    steps: [
      S("Open the NDIC's Banks We Cover page", "The NDIC says deposits at any institution the Central Bank has licensed are covered automatically. The page lists commercial banks, microfinance banks, primary mortgage banks, non-interest banks and payment service banks. The one I read showed ten entries and no update date, so it may be incomplete.", ["The bank's exact name"], "ndicBanksCovered"),
      S("Check the Central Bank's list too", "The Central Bank lists the institutions it supervises, but I could not read its licensed microfinance bank lists, which a security check blocks.", ["The Central Bank's page"], "cbnInstitutions"),
      S("Ask what the limit is", "The pages disagree: the 2023 Act says N500,000 per depositor, or N200,000 at a microfinance bank, but the NDIC's own articles say N5,000,000. I will not pick one. Ask the NDIC on 0800 6342 4357.", ["Your question for the NDIC"], "ndicAct"),
      S("Know what is not covered", "The Act does not cover staff and director deposits, a deposit that backs a loan you owe, or money paid to buy shares or securities.", ["Nothing to gather"], "ndicAct"),
      S("If a bank closes, make a claim", "If you were not paid automatically, fill in the depositors verification form on the NDIC claims page or go to an NDIC office with proof of your deposit, a valid ID, a passport photo and your account details, or email claimscomplaints@ndic.gov.ng.", ["Proof of deposit", "A valid ID", "A passport photo", "Your account details"], "ndicClaims")
    ]
  },
  "ng-complain-to-cbn": {
    title: "Complaining about a wrong transfer or a bank problem in Nigeria",
    topic: "ng-mobile-money-fintech", phrase: "complaining about a wrong transfer in Nigeria",
    steps: [
      S("Report it to your bank or branch first", "The Central Bank's steps start with your bank or branch. Allow two weeks, or 30 days for complaints about excess charges and loans.", ["The date, the amount and the details of the transaction"], "cbnComplaints"),
      S("Keep your proof", "Keep your messages, statements and the dates you complained.", ["Your records"], "cbnComplaints"),
      S("If it is not settled, write to the Central Bank", "Write to the Consumer Protection Department at cpd@cbn.gov.ng, or to the Director, Consumer Protection Department, Central Bank of Nigeria, Central Business District, Abuja.", ["A letter or email"], "cbnComplaints"),
      S("Include what they need", "Give your contact details, the institution, the date, the amount and your papers, and proof that you complained to the bank first. Never put a PIN or password in a complaint.", ["Your contact details", "Proof you complained first"], "cbnComplaints"),
      S("Know what it covers", "This process covers banks, microfinance banks, primary mortgage institutions and discount houses. I found no official page on how to report a wrong transfer step by step.", ["Nothing to gather"], "cbnComplaints")
    ]
  },
  "ng-check-a-loan-app": {
    title: "Checking a loan app in Nigeria",
    topic: "ng-digital-loans", phrase: "checking a loan app in Nigeria",
    steps: [
      S("Check the FCCPC's lists", "The FCCPC publishes lists of approved lenders and their apps, a conditional-approval list, a watchlist of apps, and delisted apps, plus a separate list of lenders the Central Bank already licenses.", ["The app's exact name"], "fccpcApproved"),
      S("Read the terms in plain English", "The rules say a lender must tell you its interest rates, repayment terms and fees in clear simple English before you take the loan.", ["The terms screen, saved or photographed"], "fccpcRegulations"),
      S("Look at what the app asks to see", "The application form requires lenders to confirm their apps will not have access to your call logs, contacts, photos or gallery.", ["The app's permission list"], "fccpcRegulations"),
      S("Know your rights", "A lender may not give you a loan you did not ask for, must follow the Nigeria Data Protection Act 2023, and must give you a statement of your account within 24 hours of your request.", ["Nothing to gather"], "fccpcGuidelines"),
      S("Complain to the lender, then the FCCPC", "The lender must settle complaints within 24 hours, or 48 hours at most. To complain to the FCCPC, use complaints.fccpc.gov.ng or its consumer complaint app, or email contact@fccpc.gov.ng or call +234 800 000 2121.", ["Your records of the loan"], "fccpcComplaints")
    ]
  },
  "ng-micro-pension": {
    title: "Opening a Micro Pension Plan in Nigeria",
    topic: "ng-pension", phrase: "opening a Micro Pension Plan in Nigeria",
    steps: [
      S("Check you can join", "The Micro Pension Plan is voluntary, paid only by you, for self-employed people and people working where there are fewer than three employees. You must be Nigerian, at least 18, have a legitimate income and belong to a trade, association or profession, and you cannot join if you already pay under the mandatory scheme.", ["Nothing to gather"], "pencomFaq"),
      S("Gather your documents", "You need your NIN and one of a voter's card, driver's licence or international passport, plus evidence of membership of a registered association or union.", ["NIN", "A voter's card, driver's licence or passport", "Proof of association membership"], "pencomFaq"),
      S("Register with a pension fund administrator", "Register through any pension fund administrator and complete the RSA opening form, on paper or electronically. The administrator issues a PIN.", ["The form"], "pencomFaq"),
      S("Start contributing", "The FAQ says there is no minimum contribution and you can pay daily, weekly or monthly by cash deposit, transfer or approved agents.", ["What you can pay each time"], "pencomFaq"),
      S("Know how withdrawals work", "Contributions are split 40 percent for emergencies and 60 percent for retirement. You can withdraw from the 40 percent part three months after your first contribution, and the administrator must pay within 48 hours.", ["Nothing to gather"], "pencomFaq"),
      S("Check your statements and complain if needed", "Administrators must send statements at least every three months. To complain, email complaints@pencom.gov.ng or call +234-0209-460-3955. The FAQ was uploaded in September 2023, so the rules may have changed.", ["Your RSA PIN, kept to yourself"], "pencomContact")
    ]
  },
  "ng-savings-bond": {
    title: "Buying an FGN savings bond in Nigeria",
    topic: "ng-saving-investing", phrase: "buying FGN savings bonds in Nigeria",
    steps: [
      S("Look at the current offer", "The Debt Management Office sells FGN savings bonds to individuals, and a new offer comes roughly monthly with a new rate. For the October 2026 offer, the 2-year bond paid 13.071 percent a year and the 3-year bond 14.071 percent, with interest paid quarterly and the full amount repaid at the end.", ["The DMO's savings bond page"], "dmoSavingsBond"),
      S("Know the amounts", "Units cost N1,000, the minimum is N5,000, and the maximum is N50,000,000.", ["How much you can put in"], "dmoOffer"),
      S("Find a distribution agent", "You buy through stockbroking firms the DMO has appointed. The DMO website lists them.", ["The DMO's agent list"], "dmoOffer"),
      S("Understand the risk", "The document says the bond is backed by the full faith and credit of the Federal Government. The DMO pages state no risks and do not say whether you can sell early, so ask the agent.", ["Your questions for the agent"], "dmoSavingsBond"),
      S("Check the agent", "Check any stockbroker on the SEC Nigeria's Find a Registered Operator page: the account status should say active, with the function, the CAC number and the fidelity bond expiry.", ["The firm's exact name"], "secOperators")
    ]
  },
  "ng-report-a-scam": {
    title: "Checking and reporting an investment scam in Nigeria",
    topic: "ng-scams-fraud", phrase: "checking and reporting an investment scam in Nigeria",
    steps: [
      S("Check the firm on the SEC's list", "Use the SEC's Find a Registered Operator page before you pay. Treat unrealistic returns and no registration as warning signs.", ["The firm's exact name"], "secKnownScams"),
      S("Know the kinds of scheme", "The SEC names five types: phantom schemes, Ponzi schemes, offshore shell companies, unlicensed crypto platforms and fake advisers, and warns of operators that reappear under a new name after a collapse.", ["Nothing to gather"], "secPonzi"),
      S("Keep your records", "If you were harmed, the SEC says to keep your statements, contracts and messages.", ["Statements, contracts, messages"], "secHarmed"),
      S("Report to the SEC", "Use the whistleblowing form at sec.gov.ng/for-investors/whistleblowing; the SEC says you get a reference number by email. Its lines are +234 209 462 1168 and +234 916 772 3240.", ["Your records"], "secWhistle"),
      S("Also tell the EFCC, and get legal advice", "The EFCC takes petitions on its website and through its Eagle app, and lists a hotline on +234 809 332 2644. The SEC says to talk to a lawyer, and mentions the Investor Protection Fund and the Legal Aid Council of Nigeria.", ["Your records"], "efccHome")
    ]
  }
};
const WALKTHROUGHS = Object.freeze({ ...BASE, ...require("./money-walkthroughs-more.js") });

function moneyWalkthrough(id) {
  const def = WALKTHROUGHS[id];
  if (!def) return null;
  const sources = [...new Set([...def.steps.map(step => step.key).filter(Boolean)])];
  return {
    id: `money-${id}`, title: def.title, checkedOn: CHECKED_ON,
    steps: def.steps.map(step => ({ title: step.title, text: step.text, gather: step.gather.slice(), done: step.done || null, words: (step.words || []).map(word => ({ term: word.term, means: word.means })), link: step.key ? link(step.key) : null })),
    sources: sources.map(key => link(key))
  };
}

const WALK_OF_TOPIC = Object.freeze(Object.fromEntries(Object.entries(WALKTHROUGHS).map(([id, def]) => [def.topic, id])));
const PHRASE_OF_WALK = Object.freeze(Object.fromEntries(Object.entries(WALKTHROUGHS).map(([id, def]) => [id, def.phrase])));
const PHRASE_OF_TOPIC = Object.freeze(Object.fromEntries(Object.entries(WALKTHROUGHS).map(([id, def]) => [def.topic, def.phrase])));

// "Walk me through checking my credit report": the topic the words are about, and the walkthrough that goes with it
function moneyWalkthroughFor(text) {
  const topic = moneyTopic(text);
  const id = topic ? WALK_OF_TOPIC[topic] : null;
  return id ? moneyWalkthrough(id) : null;
}

module.exports = Object.freeze({ WALKTHROUGHS, WALK_OF_TOPIC, PHRASE_OF_WALK, PHRASE_OF_TOPIC, moneyWalkthrough, moneyWalkthroughFor });
