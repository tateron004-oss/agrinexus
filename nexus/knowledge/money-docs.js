"use strict";

// Two documents for people learning to manage money and for the people who teach them, built from the answers to Kyro's voice interviews (public/kyro-intake-forms.js, "moneyPlan" and "programKit") and saved as a Word document the person
// can edit, print and take to a counselor or a class. Both are the person's own words, word for word, under plain headings, or "Not decided yet": Kyro writes nothing about the person's money, the organization, the budget or the results that
// was not said, makes up no figure and promises no result. The fixed guidance under the headings (what to do next, the free materials, the roles) comes from the official pages the money guide cites (nexus/knowledge/money-guide.js, read
// 22 October 2026) and is named where it is used. General education, not financial, tax or legal advice; nothing is sent to anyone, no account is opened and no money is moved. Neither interview takes an account number, a PIN, a password or a
// Social Security number: public/kyro-intake-forms.js refuses them and asks again.
//
// moneyPlanDocument(values)  -> { title, content } | null   (null when the first problem or the priority is missing)
// programKitDocument(values) -> { title, content } | null   (null when the organization or what people need first is missing)

const MONEY_PLAN_KEYS = Object.freeze(["problem", "income", "priority", "supports", "bills", "takehome", "debts", "savings", "workplan", "week"]);
const PROGRAM_KIT_KEYS = Object.freeze(["organization", "priorities", "needs", "format", "educators", "partners", "services", "budget", "funding", "measures"]);

const clean = value => String(value ?? "").replace(/\s+/g, " ").trim().slice(0, 600);
const orNot = value => clean(value) || "Not decided yet";
const nameOf = text => clean(text).split(/[,.;:]| - | but /)[0].trim().slice(0, 60);

// What the person said is the most important thing to them, in their own words. Which of five common starting points it names picks the steps for the first 90 days; if it names none, the plan starts with a spending plan.
const PATHS = Object.freeze([
  ["debt", /\b(?:debts?|owe|loans?|credit cards?|collections?|collectors?|payday|behind on|pay(?:ing)? off)\b/i],
  ["home", /\b(?:home|house|mortgage|down payment|homeownership|rent to own|buy(?:ing)? a place)\b/i],
  ["retirement", /\b(?:retire\w*|401|403|ira\b|roth|pension)\b/i],
  ["children", /\b(?:kids?|children|child|son|daughter|grandchild\w*|529|college fund|education fund)\b/i],
  ["savings", /\b(?:sav\w+|emergency|rainy day|cushion|nest egg)\b/i]
]);
const pathOf = priority => { const said = clean(priority); for (const [id, test] of PATHS) if (test.test(said)) return id; return "start"; };

const STEPS = Object.freeze({
  debt: {
    title: "Paying down debt",
    first: ["Write every debt down on the CFPB's debt worksheet: the type, the monthly payment and due date, the interest rate, the amount owed, a payoff goal and any fees, and add up your monthly debt payments.", "Put every bill due date on a calendar, so a missed date does not come as a surprise (CFPB).", "If you will miss a payment, call the lender before it is due, say why, what you can pay and when normal payments can restart (CFPB)."],
    second: ["Pay first what protects your housing and your income: rent or mortgage, utilities, transport and childcare to keep your job, insurance and court-ordered payments. Cards and loans come next (CFPB, prioritizing bills).", "If you cannot keep up, ask a nonprofit credit counselor for a first session; the CFPB says to check the Justice Department's approved list and to get fees in writing.", "Get your free credit reports at AnnualCreditReport.com and look for errors (CFPB, FTC)."],
    third: ["Update the debt worksheet with what you have paid and what you still owe.", "If a collector contacts you, you have 30 days from the notice to dispute in writing; keep copies (CFPB).", "Choose your next step: keep going with the same order, or ask the counselor about a debt management plan, and confirm creditors accepted it before you pay."]
  },
  savings: {
    title: "Building emergency savings",
    first: ["Choose one specific savings goal and write it here (CFPB).", "Track your income and spending for one week, with receipts or your checking account (CFPB).", "If you have no account, look at an FDIC-insured bank or an NCUA-insured credit union; compare the monthly fee, overdraft fees and the minimum balance (FDIC)."],
    second: ["Set up a repeating transfer from checking to savings, or split your paycheck if your employer offers it; watch your checking balance so a transfer does not cause an overdraft fee (CFPB).", "Decide what one-time money, such as a tax refund, you will add; the IRS lets you split a refund among up to three accounts in your name or your spouse's."],
    third: ["Look at how much you saved and whether you can raise the amount a little.", "Keep the money in an insured account where you can reach it, and write down what counts as an emergency for you."]
  },
  home: {
    title: "Buying a home",
    first: ["Get your free credit reports at AnnualCreditReport.com and look for errors (CFPB).", "Work out a payment you can afford, counting insurance, property taxes, any mortgage insurance and association fees, and repairs (CFPB).", "Start or keep a savings habit for the down payment and closing costs."],
    second: ["Look at where a down payment can come from (the CFPB lists savings, a family gift with a gift letter, local nonprofit and government programs, VA and USDA loans).", "Find a HUD-approved housing counselor through the CFPB's Find a Housing Counselor tool or HUD on 800-569-4287."],
    third: ["Learn what a Loan Estimate and a Closing Disclosure are, and compare closing costs as well as rates (CFPB).", "Ask about preapproval, and remember it does not guarantee a loan."]
  },
  retirement: {
    title: "Saving for retirement",
    first: ["Ask your employer whether there is a retirement plan, whether there is a matching contribution, and what the vesting rules are (Labor Department).", "Look at the funds the plan offers and their fees; the fee table is in a fund's prospectus (Investor.gov)."],
    second: ["Learn the basics of a traditional and a Roth IRA, and that an IRA or a 401(k) is an account while a fund is the investment you hold inside it (IRS, Investor.gov).", "Check how fees add up over 20 years, using Investor.gov's example and the FINRA Fund Analyzer."],
    third: ["If you want advice about your own situation, check any adviser or broker on Investor.gov's free tool, ask how they are paid and ask for their Form CRS.", "Write down what you will contribute and when you will review it."]
  },
  children: {
    title: "Saving and investing for your children",
    first: ["Investor.gov's order for getting started: define your goals, work out your finances, pay off credit cards and other high-interest debt, and save for a rainy day before you invest.", "Learn the difference between saving and investing, and that investments can lose money."],
    second: ["Learn how a 529 plan works and that you can lose money in one; fees vary, and other states' plans may cost less (SEC bulletin on Investor.gov).", "Read the plan's fee table and compare two plans."],
    third: ["Ask Investor.gov's five questions before you put money anywhere, and check any seller on Investor.gov's free tool.", "Write down the amount you can afford each month without touching your emergency money."]
  },
  start: {
    title: "Starting with a spending plan",
    first: ["Write down every source of income, including self-employment, a second job, child support and government benefits (CFPB).", "Track your spending by category for one week (CFPB).", "Put your bill due dates on a calendar (CFPB)."],
    second: ["Combine the three into a budget worksheet and see whether anything is left over to save (CFPB).", "Choose one specific goal and start with a small saving amount."],
    third: ["Update the plan for what changed, and choose the next goal: debt, emergency savings, a home, retirement or investing for your children."]
  }
});

const list = items => items.map((item, index) => `${index + 1}. ${item}`);

function moneyPlanDocument(values) {
  const v = values || {};
  const problem = clean(v.problem);
  const priority = clean(v.priority);
  if (!problem || !priority) return null;
  const path = STEPS[pathOf(priority)];
  const lines = [
    "MY 90-DAY MONEY PLAN",
    "",
    "Prepared with Kyro from what you said. It is a starting plan. Read it, change anything that is wrong, and fill in anything that says Not decided yet. The steps in sections 2 to 6 come from official pages, named in brackets. Nothing here is an account number, and Kyro has not opened, moved or invested any money.",
    "",
    "1. WHERE I AM STARTING",
    "The money problem I want to solve first",
    problem,
    "How my income works (steady, seasonal or unpredictable)",
    orNot(v.income),
    "What matters most to me right now",
    priority,
    "What I need so I can take part (language, class times, transportation, childcare, technology)",
    orNot(v.supports),
    "",
    "2. MY SPENDING PLAN AND BILL CALENDAR",
    "My regular bills and when they are due",
    orNot(v.bills),
    "What I take home in a typical month",
    orNot(v.takehome),
    "To finish this section, the CFPB's budgeting article gives four steps:",
    "1. Write down every source of income, including self-employment, a second job, child support and government benefits.",
    "2. Track your spending by category; you can start with just one week, using receipts or your checking account.",
    "3. Put your bill due dates on a calendar.",
    "4. Bring the three together in a budget worksheet. Update it when your job or your spending changes.",
    "",
    "3. MY SAVINGS GOAL",
    "My savings now, and my first savings goal",
    orNot(v.savings),
    "The CFPB gives no dollar or month target for an emergency fund: the amount depends on your situation. Start small, save steadily, and keep it in an insured bank or credit union account where you can reach it.",
    "",
    "4. MY DEBTS AND WHAT TO PAY FIRST",
    "My debts, in my own words",
    orNot(v.debts),
    "For each debt, write down the type, the monthly payment and due date, the interest rate, the amount owed, a payoff goal and any fees (CFPB debt worksheet).",
    "The CFPB's prioritizing-bills tool puts first what protects your housing and your income: rent or mortgage, utilities, transport and childcare to keep your job, insurance and court-ordered payments. Credit cards and loans come next. Do not pay only whoever calls loudest.",
    "Free help: a nonprofit credit counselor or a HUD-approved housing counselor (CFPB). Never pay up front for debt or foreclosure help.",
    "",
    "5. INVESTING: WHAT TO KNOW FIRST",
    "My workplace retirement plan and any match",
    orNot(v.workplan),
    "Investor.gov's order for getting started is to define your goals and when you need the money, work out your finances, pay off credit cards and other high-interest debt, save for a rainy day, and then learn about investing.",
    "An IRA or a 401(k) is an account; a fund is an investment held inside it. Opening or funding an account does not by itself invest the money.",
    "Check the fees, and ask Investor.gov's five questions before you put money anywhere: is the seller licensed, is the offer registered, how do the risks compare with the rewards, do you understand it, and where can you turn for help.",
    "",
    `6. MY NEXT 90 DAYS (${path.title})`,
    "One thing I will do this week",
    orNot(v.week),
    "Days 1 to 30",
    ...list(path.first),
    "Days 31 to 60",
    ...list(path.second),
    "Days 61 to 90",
    ...list(path.third),
    "",
    "7. KEEPING MY MONEY SAFE",
    "Never tell anyone, including Kyro, your account numbers, PINs, passwords or Social Security number. Use long passwords and two-factor authentication. Contact a company using a number or website you know is real. Be wary of guaranteed returns and of pressure to send money now (FTC, Investor.gov).",
    "",
    "This plan is general education to help you think and talk with others. It is not financial, tax or legal advice, and it does not replace a nonprofit credit counselor, a tax professional or a licensed investment professional who knows your situation. Rules and figures change, so confirm on the official pages. Kyro has not sent it to anyone."
  ];
  return { title: `My 90-day money plan: ${nameOf(problem) || problem.slice(0, 60)}`.slice(0, 120), content: lines.join("\n") };
}

function programKitDocument(values) {
  const v = values || {};
  const organization = clean(v.organization);
  const priorities = clean(v.priorities);
  if (!organization || !priorities) return null;
  const lines = [
    "COMMUNITY FINANCIAL EDUCATION PROGRAM PLAN",
    "",
    "Prepared with Kyro from what the organizer said. It is a starting plan. Read it, change anything that is wrong, and fill in anything that says Not decided yet. Kyro can help plan a program but cannot hire anyone, run a class, find funding or contact a partner.",
    "",
    "1. WHO WE SERVE AND WHAT THEY NEED FIRST",
    "Our organization, and the people we will serve",
    organization,
    "What they most want help with first",
    priorities,
    "What they need so they can take part (languages, class times, transportation, childcare, technology)",
    orNot(v.needs),
    "",
    "2. HOW WE WILL TEACH",
    "Classes, one-to-one coaching, how often, and how many people to start",
    orNot(v.format),
    "Who will teach and who will coach",
    orNot(v.educators),
    "",
    "3. PARTNERS AND SERVICES",
    "Community partners",
    orNot(v.partners),
    "Affordable services we will connect people to (accounts, tax preparation, benefits help, employment help)",
    orNot(v.services),
    "",
    "4. BUDGET AND FUNDING",
    "What it will cost (instructor time, coordination, translation, materials, childcare, transportation, food, follow-up coaching)",
    orNot(v.budget),
    "How we will pay for it, and any small savings incentives",
    orNot(v.funding),
    "",
    "5. HOW WE WILL KNOW IT WORKED",
    "Our measures",
    orNot(v.measures),
    "Other measures to consider: people who can explain investment risk and fees; people who make a workable spending plan; people who start saving; people who reduce costly debt; people who make an informed retirement decision.",
    "",
    "6. THE PATH WE WILL TEACH",
    "1. Understand your money: take-home pay, expenses, goals and irregular income. People leave with a realistic spending plan and a bill calendar.",
    "2. Build savings: emergency funds, savings accounts, automatic transfers and upcoming expenses. People leave with a savings goal and an affordable contribution plan.",
    "3. Manage debt and credit: interest, minimum payments, credit reports, repayment options and costly borrowing. People leave with a debt list and repayment priorities.",
    "4. Understand investing: compound growth, inflation, stocks, bonds, funds, risk and diversification. People leave understanding saving versus investing.",
    "5. Learn how to invest: workplace retirement plans, IRAs, brokerage accounts, investment selection and fees. People leave with a practice account-selection and investment worksheet.",
    "6. Protect and maintain progress: scams, account security, beneficiaries and reviewing a plan. People leave with a personal 90-day action plan.",
    "Kyro can answer each of these in plain words from official pages and can interview a person into a 90-day money plan.",
    "",
    "7. FREE MATERIALS TO USE",
    "The FDIC's Money Smart for Adults is an instructor-led curriculum of 14 modules. Each module has an instructor guide with what to say and do, PowerPoint slides and a participant guide, available to download (FDIC page last updated 17 December 2025).",
    "The CFPB's Your Money, Your Goals is a toolkit, booklets and companion guides for organizations that help people with money (CFPB page last updated 15 December 2025).",
    "Investor.gov teaches investing: products, diversification and risk (SEC Office of Investor Education).",
    "",
    "8. ROLES TO FILL",
    "A program coordinator to organize outreach, classes and follow-up.",
    "A trusted community educator who explains money in plain language.",
    "A financial coach or nonprofit credit counselor for one-to-one support.",
    "A vetted investment professional for individual investment questions, with how they are paid and any conflicts of interest disclosed up front.",
    "Community partners, such as libraries, churches, workforce programs, unions, schools and neighborhood organizations.",
    "Banking and support partners offering affordable accounts, tax preparation, benefits help and employment services.",
    "",
    "9. RULES WE WILL KEEP",
    "Teaching stays independent of selling products. Sponsors do not receive participants' financial information and do not require anyone to open an account.",
    "We never collect account passwords, PINs or account numbers. Reporting on progress is voluntary and private.",
    "Anyone who gives individual investment advice is licensed, checked on Investor.gov's free tool, and has told people how they are paid.",
    "",
    "10. CHECK BEFORE YOU START",
    "Ask a lawyer or your funder about privacy rules for the information you keep on participants, about childcare and transportation you offer, and about the terms of any savings incentive. Ask a licensed financial educator to read your lessons. Start small, with one class, and measure before you grow.",
    "",
    "This plan is general information to help you organize. It is not legal, tax or financial advice, and Kyro has not sent it to anyone."
  ];
  return { title: `Financial education program plan: ${nameOf(organization) || organization.slice(0, 60)}`.slice(0, 120), content: lines.join("\n") };
}

module.exports = Object.freeze({ MONEY_PLAN_KEYS, PROGRAM_KIT_KEYS, moneyPlanDocument, programKitDocument, pathOf });
