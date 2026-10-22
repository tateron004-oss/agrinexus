"use strict";

// The rest of the money walkthroughs (see money-walkthroughs.js for what a walkthrough is and the rules every step keeps): the processes that need more than one page of steps, and the lessons for the topics that explain rather than ask the
// person to do something (how investing works, the kinds of investment, CDs and Treasury securities, the six-step path from managing money to investing). Every step is a fact the money guide already states from the official pages it cites; a step
// that is Kyro's own working practice says so. Nothing here asks for an account number or a password, and Kyro never moves money.

const S = (title, text, gather, key) => ({ title, text, gather, key: key || null });
const OWN = "This step is Kyro's own working practice, not an official page. ";

module.exports = Object.freeze({
  // ---------------------------------------------------------------- United States
  "irregular-income": {
    title: "Planning when your income goes up and down",
    topic: "money-irregular-income", phrase: "planning when my income changes",
    steps: [
      S("List every source of income", "The CFPB says to list every source of income, including self-employment.", ["Last month's pay from every job or gig"], "cfpbBudget"),
      S("Log your spending to learn a typical month", "The CFPB says to log your spending so you learn what a typical month looks like. I did not find an official page that sets out a method for planning around your lowest month, so I will not invent one.", ["A month of receipts or statements"], "cfpbBudget"),
      S("Use one-time money as savings", "The CFPB's emergency fund guide suggests using a tax refund or other one-time money as savings.", ["Any refund or gift you expect"], "cfpbEmergency"),
      S("Find out whether you must pay estimated tax", "The IRS says you generally must pay estimated tax in installments if you expect to owe $1,000 or more when you file. You can generally avoid a penalty if you owe less than $1,000 after withholding and credits, or if you paid at least 90 percent of this year's tax or 100 percent of last year's, whichever is smaller.", ["Last year's return"], "irsEstimated"),
      S("Know the dates", "The 2026 payment dates are 15 April, 15 June and 15 September 2026 and 15 January 2027. A date on a weekend or holiday moves to the next business day.", ["Dates on your calendar"], "irsPayAsYouGo"),
      S("Work out each payment and pay", "Form 1040-ES has a worksheet and payment vouchers, and last year's return is a place to start. You can pay on IRS.gov/payments, through your IRS online account, by phone or with the IRS app. The IRS gives no percentage to set aside, so use the worksheet or ask a tax professional.", ["Form 1040-ES"], "irs1040es"),
      S("Know about self-employment tax", "Self-employment tax pays for Social Security and Medicare and is 15.3 percent. You file Schedule SE if your net self-employment earnings were $400 or more.", ["Your net earnings"], "irsSelfEmploymentTax")
    ]
  },
  "free-help": {
    title: "Finding free help with money, housing and benefits",
    topic: "money-free-help", phrase: "finding a nonprofit credit counselor",
    steps: [
      S("Start with a nonprofit credit counselor", "The CFPB says to start with the Financial Counseling Association of America or the National Foundation for Credit Counseling.", ["Your debts and income"], "cfpbCreditCounseling"),
      S("Check them", "Check the Justice Department's approved list and your state attorney general. Expect free information first, and get any fees in writing.", ["The counselor's exact name"], "cfpbCreditCounseling"),
      S("Know the warning signs", "Walk away from a group that charges for education, will not help if you cannot pay, or pushes a debt management plan as the only choice. The FTC adds that nonprofit status does not guarantee a low cost or honesty; good signs are a review of your whole situation, accreditation, budget counseling and no up-front fees.", ["Nothing to gather"], "ftcOutOfDebt"),
      S("Find a HUD-approved housing counselor", "The CFPB's Find a Housing Counselor tool lists HUD-approved agencies, who help with buying, renting, falling behind and foreclosure, often at little or no cost. HUD says to call 800-569-4287.", ["Your zip code"], "cfpbHousingCounselor"),
      S("Search for benefits", "USAGov's Benefit Finder searches 12 categories of benefits and financial help, from food and housing to jobs and retirement. You can call 1-844-872-4681.", ["Basic facts about your household"], "usaBenefitFinder"),
      S("For rent and bills", "For help paying rent and bills, the CFPB says to call 211 and your local government or library, and to talk to your landlord about a plan.", ["Your landlord's contact"], "cfpbRentHelp")
    ]
  },
  "avoid-overdraft": {
    title: "Avoiding overdraft fees, and knowing cash advances and buy now, pay later",
    topic: "money-overdraft-bnpl", phrase: "avoiding overdraft fees",
    steps: [
      S("Know what overdraft costs", "Overdraft means the bank pays a transaction you cannot cover and charges a fee; the CFPB says many banks charge $30 or more each time.", ["Your bank's fee sheet"], "cfpbOverdraftWhat"),
      S("Decide about debit card overdraft", "You can avoid debit card overdraft fees by not opting in to overdraft coverage for debit card purchases and ATM withdrawals, or by cancelling it.", ["Your bank's number or app"], "cfpbAvoidDebitOverdraft"),
      S("Look at the cheaper options", "The CFPB names linking a savings account, where the transfer fee is usually lower, or an overdraft line of credit, which charges a fee plus interest that is usually less than standard overdraft fees.", ["Your savings account details, kept to yourself"], "cfpbAvoidDebitOverdraft"),
      S("Turn on low-balance alerts", "Low-balance alerts help, and a bounced automatic payment can trigger these fees.", ["Your phone"], "cfpbOverdraft"),
      S("Know what a credit card cash advance costs", "It usually carries a fee and a higher rate than purchases, interest starts immediately with no grace period, and many cards have a separate, lower cash-advance limit.", ["Your card agreement"], "cfpbCashAdvance"),
      S("Know the catches in buy now, pay later", "It is usually four or fewer installments, often interest-free, but most charge late fees. Missed payments can freeze your account or send the debt to a collector, and most of these companies do not report on-time payments to the credit bureaus.", ["The terms of the plan you are considering"], "cfpbBnpl")
    ]
  },
  "open-an-ira": {
    title: "Opening an IRA",
    topic: "money-ira", phrase: "opening an IRA",
    steps: [
      S("Choose traditional or Roth", "A traditional IRA may give you a tax deduction, and earnings are not taxed until you withdraw. A Roth IRA gives no deduction, but qualified withdrawals are tax-free.", ["Your tax situation"], "irsRoth"),
      S("Check the limits and income ranges", "For 2026 the IRA limit, traditional and Roth combined, is $7,500, or $8,600 if you are 50 or older, or your taxable pay if less. A Roth contribution is reduced for a single person between $153,000 and $168,000 of income, and the deduction for a traditional IRA when you are covered by a workplace plan is reduced for a single person between $81,000 and $91,000.", ["Your income"], "irsIraLimits"),
      S("Choose where to open it", "You can open an IRA with a bank or other financial institution, a life insurance company, a mutual fund company or a stockbroker.", ["A short list of places"], "invIras"),
      S("Choose what is inside it", "An IRA is an account; a fund is an investment held inside it. The SEC's cash sweep bulletin says uninvested cash sits in a sweep program, often a bank deposit by default, until you choose an investment, so opening or funding an account does not by itself invest the money.", ["Your decision about what to hold"], "invCashSweep"),
      S("Know the deadline", "You can make contributions for a tax year until the tax filing date in April of the next year. An excess contribution faces a 6 percent tax each year unless you remove it by the return due date.", ["The date on your calendar"], "irsIraYearEnd"),
      S("Know the cost of taking money out early", "Money taken out before age 59 and a half generally faces an extra 10 percent tax on top of income tax, unless an exception applies.", ["Nothing to gather"], "irsEarlyDistributions"),
      S("Check the Saver's Credit", "It gives 50, 20 or 10 percent of up to $2,000 of contributions for people 18 or older who are not full-time students or claimed as dependents. The 2026 income cutoffs are $40,250 for a single person, $60,375 for head of household and $80,500 for a married couple filing jointly.", ["Your filing status and income"], "irsSaversCredit")
    ]
  },
  "open-a-brokerage-or-529": {
    title: "Opening a brokerage account, or saving for a child's education",
    topic: "money-brokerage-and-kids", phrase: "opening a brokerage account",
    steps: [
      S("Check the broker before you choose", "Investor.gov says to check the broker's services, its costs, how it is paid, its conflicts of interest, its discipline record, whether it is registered and whether it has SIPC coverage.", ["The firm's exact name"], "invBrokerageAccounts"),
      S("Understand cash and margin accounts", "In a cash account you pay the full price and cannot borrow from the broker. In a margin account the broker lends you money using your holdings as collateral and you pay interest; if prices drop, the firm can demand cash or securities at once and can sell your holdings without telling you first.", ["Nothing to gather"], "invTypesBrokerage"),
      S("Read the account agreement and relationship summary", "You will choose how uninvested cash is held, in a cash sweep program. Read the account agreement before you sign.", ["The agreement"], "invBrokerageAccounts"),
      S("Know what SIPC covers", "SIPC protects the cash and securities at a member brokerage that fails, up to $500,000 per customer including up to $250,000 for cash. It does not cover a drop in the market value of your investments, and it is different from FDIC insurance.", ["Nothing to gather"], "invSipc"),
      S("For a child's education, learn how a 529 plan works", "A 529 plan is a tax-advantaged education savings plan run by a state or school. The SEC's bulletin says you can lose money in one, earnings are not federally taxed if used for qualified education expenses, including up to $20,000 a year for K-12 tuition, and otherwise earnings face tax plus an additional 10 percent penalty.", ["The plan's fee table"], "inv529"),
      S("Look at a Coverdell account too", "A Coverdell account allows $2,000 a year per child, not deductible, with the child under 18 when it is opened.", ["Nothing to gather"], "irsCoverdell"),
      S("Teach the child about money", "The CFPB's Money as You Grow offers age-based milestones, activities and conversation starters.", ["A few minutes with the child"], "cfpbMoneyAsYouGrow")
    ]
  },
  "compare-fees": {
    title: "Comparing the fees on an investment",
    topic: "money-fees", phrase: "comparing investment fees",
    steps: [
      S("Find the fee table", "You find a fund's fees in the fee table of its prospectus, which you can get from the fund, a broker or the SEC's EDGAR.", ["The fund's name"], "invFeesBulletin"),
      S("Read the expense ratio", "The expense ratio, which the SEC's bulletin calls total annual fund operating expenses, is shown as a percentage of the fund's average net assets, and is made up of management fees, 12b-1 fees and other expenses.", ["The fee table"], "invFeesBulletin"),
      S("Look for sales loads", "A sales load is a commission-like fee paid to the selling broker: with a 5 percent front-end load, $500 of a $10,000 purchase is deducted and $9,500 is invested. A back-end load is charged when you sell.", ["The fee table"], "invFeesBulletin"),
      S("Look for other fees", "Funds can also charge a redemption fee, an exchange fee or an account fee, which ETFs rarely do.", ["The fee table"], "invFeesBulletin"),
      S("Ask about broker and adviser fees", "Brokers usually charge a commission or markup on each trade, and advisers usually charge a fee based on the value of your account. The fund's fee table does not show those.", ["The professional's fee sheet"], "invFees"),
      S("See what fees do over time", "Investor.gov's example is a hypothetical $100,000 growing 4 percent a year for 20 years: with a 0.25 percent yearly fee it is worth about $208,000, and with a 1 percent fee about $179,000. FINRA's Fund Analyzer estimates the effect of fees; I could not read the tool itself.", ["The fees you found"], "invFundAnalyzer"),
      S("Ask the questions", "What are the total fees to buy and sell? How can I reduce them? How much must it gain for me to break even? What are the ongoing account fees?", ["Your questions"], "invFees")
    ]
  },
  "money-path": {
    title: "The six steps from managing money to investing",
    topic: "money-overview", phrase: "managing my money",
    steps: [
      S("Step 1: understand your money", OWN + "Take-home pay, expenses, goals and irregular income. You leave with a realistic spending plan and a bill calendar. Ask me to walk you through making a budget, or planning when your income changes.", ["Your pay and bills"], null),
      S("Step 2: build savings", OWN + "Emergency funds, savings accounts, automatic transfers and upcoming expenses. You leave with a savings goal and an affordable contribution plan. Ask me to walk you through building an emergency fund.", ["A first savings goal"], null),
      S("Step 3: manage debt and credit", OWN + "Interest, minimum payments, credit reports, repayment options and costly borrowing. You leave with a debt list and repayment priorities. Ask me to walk you through checking your credit report or paying down your debts.", ["Your debts"], null),
      S("Step 4: understand investing", OWN + "Compound growth, inflation, stocks, bonds, funds, risk and diversification. You leave understanding saving versus investing. Ask me to walk you through how investing works.", ["Nothing to gather"], null),
      S("Step 5: learn how to invest", OWN + "Workplace retirement plans, IRAs, brokerage accounts, picking investments and fees. Ask me to walk you through choosing what to invest in, opening an IRA, or comparing fees.", ["Your workplace plan details"], null),
      S("Step 6: protect and keep your progress", OWN + "Scams, account security, beneficiaries and reviewing your plan. Ask me to walk you through checking an investment offer, or to help you make a money plan, and I will ask ten questions and save a 90-day plan.", ["Nothing to gather"], null),
      S("Free classes and tools", "The FDIC's Money Smart for Adults is an instructor-led curriculum of 14 modules that anyone can download for a class, and the CFPB's Your Money, Your Goals is a set of tools and booklets for people who help others with money.", ["A class near you, or a group of friends"], "fdicMoneySmart")
    ]
  },
  "investing-lesson": {
    title: "How investing works",
    topic: "money-investing-basics", phrase: "learning about investing",
    steps: [
      S("Saving and investing are different", "Savings go in safe places you can reach any time, which may be insured by the FDIC or NCUA, and the trade-off is a low interest rate. Investing gives a chance to earn more, but you can lose some or all of the money you put in, and securities and mutual funds are not federally insured.", ["Nothing to gather"], "invSaveAndInvest"),
      S("Inflation lowers what money buys", "Inflation is a general rise in prices, so money in savings can lose buying power if interest does not keep up. That is why many people save some money and invest some for the long term.", ["Nothing to gather"], "invSaveAndInvest"),
      S("Compound growth", "With compound interest you earn interest on your savings and on the interest already earned. Investor.gov's example is $1 a day at 5 percent a year, which grows to $465.84 after five years and $1,577.50 after 30 years. Its compound interest calculator lets you try your own numbers.", ["Numbers to try"], "invSmallSavings"),
      S("Risk and return", "All investments carry some risk, and in general, as risk rises, investors expect higher returns. Large-company stocks as a group have lost money on average about one year in three.", ["Nothing to gather"], "invWhatIsRisk"),
      S("Time horizon", "Your time horizon is how long until you need the money. For a goal five years away or less, Investor.gov says not to choose risky investments, because you may have to sell at a loss.", ["Your goals and when you need the money"], "invRiskTolerance"),
      S("Diversification and asset allocation", "Diversification means spreading money among different investments; it cannot guarantee against loss, but it can lower the chance or size of losses. Asset allocation means dividing money among stocks, bonds and cash, and the right mix is personal.", ["Nothing to gather"], "invAssetAllocation"),
      S("Pay off high-interest debt first", "Investor.gov says virtually no investment will beat the 18 percent or more many credit cards charge, so pay off card balances in full before investing.", ["Your card balances"], "invHighInterestDebt")
    ]
  },
  "kinds-of-investment": {
    title: "The kinds of investment",
    topic: "money-investment-types", phrase: "stocks and bonds, mutual funds and ETFs",
    steps: [
      S("What a stock is", "A stock is a share of ownership in a company. The price can rise or fall, and if a company goes bankrupt, common stockholders are last in line and may get nothing.", ["Nothing to gather"], "invStocks"),
      S("What a bond is", "A bond is like an IOU: you lend money to a government, a city or a company, and it promises interest and to repay the face value on a set date. The risks include the issuer failing to pay, a price that moves with interest rates if you sell early, and inflation.", ["Nothing to gather"], "invBonds"),
      S("Mutual funds", "A mutual fund pools many investors' money and buys a mix of stocks, bonds and other assets, run by an SEC-registered adviser. It is not guaranteed or insured by the FDIC or any government agency.", ["Nothing to gather"], "invMutualFunds"),
      S("What an ETF is", "An exchange-traded fund also pools money, but its shares are bought and sold on a stock exchange at market prices during the day.", ["Nothing to gather"], "invEtf"),
      S("Index funds", "An index fund follows an index and aims for about the same return before fees. It is passively managed, which usually means less trading, lower fees and often lower taxes, and Investor.gov calls these a low-cost, tax-efficient and diversified way to invest.", ["Nothing to gather"], "invIndexFund"),
      S("Target-date funds", "A target-date fund holds a mix of funds and shifts to a more conservative mix as the year in its name gets closer. The SEC's bulletin cautions that funds with the same target date can differ in their investments, risk and fees, and that none guarantees retirement income.", ["Nothing to gather"], "invTargetDateBulletin")
    ]
  },
  "cash-like-lesson": {
    title: "CDs, money market funds and Treasury securities",
    topic: "money-cash-like", phrase: "CDs and Treasury securities",
    steps: [
      S("Certificates of deposit", "A CD holds a fixed amount for a fixed time and pays interest. One bought through an insured bank is insured up to $250,000, and cashing out early may bring a penalty.", ["Nothing to gather"], "invCds"),
      S("Beware brokered CDs", "Brokered CDs are sold through deposit brokers, who are not licensed or approved by any agency, so check the issuer and the broker.", ["The issuer's name"], "invCds"),
      S("Money market funds are not bank accounts", "A money market fund is a type of mutual fund that invests in short-term debt. The FDIC covers deposit accounts, including money market deposit accounts, but does not cover mutual funds, stocks, bonds or crypto.", ["Nothing to gather"], "invMoneyMarket"),
      S("Treasury securities", "Treasury bills, notes and bonds, and TIPS, are backed by the full faith and credit of the United States and are described as among the safest investments. TreasuryDirect says bills run from 4 to 52 weeks, notes are issued for 2, 3, 5, 7 and 10 years, bonds in 20- and 30-year terms, and TIPS adjust with the Consumer Price Index.", ["Nothing to gather"], "treasuryDirectSecurities")
    ]
  },
  // ---------------------------------------------------------------- Kenya
  "ke-mobile-money": {
    title: "Using mobile money safely in Kenya",
    topic: "ke-mobile-money", phrase: "using mobile money safely in Kenya",
    steps: [
      S("Check the provider", "The Central Bank's directory, as at 10 August 2026, lists 44 authorized payment service providers. Check that yours is on it.", ["The provider's name"], "cbkPspDirectory"),
      S("Know your money is held in a trust", "A provider must hold all customers' money in a trust: the balance must never be less than what is owed to customers, and the provider may not move it to its own business account.", ["Nothing to gather"], "cbkNpsRegs"),
      S("Look for the rates and charges", "A provider must display its rates and charges at every point of service, may deduct charges only if you agreed or were notified, and must give at least 7 days' notice of changes.", ["The rates at the agent or in the app"], "cbkNpsRegs"),
      S("If a payment goes wrong", "If a payment was made without your knowledge, or the provider is liable for a failed transfer, it must restore your account without delay, including a refund of the charges. I could not read the companies' own reversal steps.", ["The transaction details"], "cbkNpsRegs"),
      S("If you were tricked", "The Central Bank says to tell your bank at once if you shared banking details, change your passwords, and report to the police. Its lines are +254 20 286 0000 and +254 709 081 000.", ["Your messages"], "cbkFraud"),
      S("Know the limits are old", "The 2014 rules set e-money limits of KSh 70,000 per transaction and KSh 1,000,000 loaded per month, which the Central Bank may change. The pages I read do not restate them for 2026, so I cannot give you today's limits.", ["Nothing to gather"], "cbkNpsRegs")
    ]
  },
  "ke-register-a-group": {
    title: "Registering a savings group in Kenya",
    topic: "ke-chama-groups", phrase: "registering a chama in Kenya",
    steps: [
      S("Know what the official pages say", "No official page I loaded uses the words chama or table banking, and none describes a scheme that protects a chama's money. What follows is what the law says about groups.", ["Nothing to gather"], "communityGroupsAct"),
      S("Option 1: a community group", "A community group is a voluntary association of people from the same community, organized for a common purpose to improve members' livelihoods. It may register with the Director of Social Development if the members are adults with a common purpose and there are at least 10 people, or 5 for a special-interest group.", ["At least 10 adult members"], "communityGroupsAct"),
      S("Write the constitution", "The group must submit a constitution, and a model constitution is provided. The Director decides within 14 days and may charge fees.", ["Your group's rules"], "communityGroupsAct"),
      S("Keep the registration alive", "Registration must be renewed periodically, and a group that fails to renew for four years is treated as dissolved.", ["A renewal date on your calendar"], "communityGroupsAct"),
      S("Option 2: a cooperative society or a SACCO", "A primary cooperative society needs at least 10 qualified members and is registered by the Commissioner for Co-operatives. Only a registered SACCO with a valid SASRA licence may take deposits as a SACCO.", ["The group's plan"], "coopAct"),
      S("Know what is not protected", "The KDIC does not insure SACCOs or groups, so money in an unregistered or unlicensed group has no deposit-insurance cover. The regulators' warning signs, such as guaranteed returns or returns that depend on recruiting others, apply to chama-style schemes.", ["Nothing to gather"], "kdicDeposit")
    ]
  },
  // ---------------------------------------------------------------- Nigeria
  "ng-check-an-mfb": {
    title: "Checking a microfinance bank in Nigeria",
    topic: "ng-microfinance-cooperatives", phrase: "checking a microfinance bank in Nigeria",
    steps: [
      S("Check the Central Bank's list", "Check that the institution is on the Central Bank's licensed list. I could not read the Central Bank's microfinance bank lists, which a security check blocks.", ["The bank's exact name"], "cbnInstitutions"),
      S("Check the NDIC's list", "Check the NDIC's Banks We Cover page. The one I read showed ten entries and no update date, so it may be incomplete.", ["The bank's exact name"], "ndicBanksCovered"),
      S("Ask what the insured limit is", "The 2023 Act gives microfinance banks a lower limit than other banks, and I could not find a current figure. Ask the NDIC on 0800 6342 4357.", ["Your question for the NDIC"], "ndicHome"),
      S("Know the history", "The NDIC says the Central Bank revoked the licences of 179 microfinance banks and 4 primary mortgage banks in May 2023, and 46 more microfinance banks on 1 July 2026.", ["Nothing to gather"], "ndicMfbLicences"),
      S("Know how to complain", "First complain to the institution, then to the Central Bank's Consumer Protection Department.", ["Your records"], "cbnComplaints"),
      S("Ajo, esusu and cooperatives", "I found no readable official page on cooperative societies, or on ajo and esusu thrift groups, so I cannot say they are protected. Money in a savings group that is not a licensed institution is not covered by the NDIC.", ["Nothing to gather"], "ndicFailedMfbs")
    ]
  },
  "ng-credit-record": {
    title: "Finding out about your credit record in Nigeria",
    topic: "ng-credit-bureaus", phrase: "getting my credit report in Nigeria",
    steps: [
      S("Know what exists", "The Central Bank's credit risk management page describes its own credit register, which banks must report every loan of N1,000,000 or more to, updated monthly. The page says the old threshold was N100,000.", ["Nothing to gather"], "cbnCreditRisk"),
      S("Know why it matters", "The page says people who repay on time keep access to credit, while those with unpaid debts are refused new credit elsewhere until they settle.", ["Your loans"], "cbnCreditRisk"),
      S("Know the loan apps report too", "The FCCPC's lending rules say digital lenders must send data to recognized credit bureaus where the FCCPC or another regulator directs.", ["Nothing to gather"], "fccpcRegulations"),
      S("Ask how to get your report", "I found no official page that lists the licensed private credit bureaus, says whether you have a right to a free credit report, or explains how to dispute an error. Ask your bank, or the Central Bank's Consumer Protection Department on cpd@cbn.gov.ng.", ["Your question"], "cbnComplaints")
    ]
  },
  "ng-tax": {
    title: "Your Tax ID and your tax return in Nigeria",
    topic: "ng-tax-personal", phrase: "getting a TIN in Nigeria",
    steps: [
      S("Have one Tax ID", "Under the Nigeria Tax Administration Act 2025, every taxable person must have one Tax ID, issued by the tax authority on request. You may not have more than one or share it.", ["Your identity documents"], "nigeriaTaxAdminAct"),
      S("File an annual return", "Every taxable person files an annual return, whether or not tax is due. Employers file PAYE returns for all staff by 31 January each year.", ["Your income records"], "nigeriaTaxAdminAct"),
      S("Know the rates", "Under the Nigeria Tax Act 2025, tax is charged on income after reliefs: 0 percent on the first N800,000, 15 percent on the next N2,200,000, 18 percent on the next N9,000,000, 21 percent on the next N13,000,000, 23 percent on the next N25,000,000, and 25 percent above N50,000,000.", ["Your income"], "nigeriaTaxAct"),
      S("Claim your reliefs in writing", "Allowed deductions include contributions to the National Housing Fund, health insurance and pensions, interest on a home loan, life insurance premiums, and rent relief of 20 percent of annual rent, up to N500,000. You must claim in writing and may need documents.", ["Your rent receipts and contribution records"], "nigeriaTaxAct"),
      S("Ask about a simpler return", "The Act allows a simplified return for low-income earners and informal-sector people, but I could not read the Nigeria Revenue Service's own pages, so I cannot give you the individual filing deadline or the steps to get a Tax ID.", ["Your questions for the tax authority"], "nigeriaTaxAdminAct"),
      S("Know the penalties", "The penalty for failing to register is N50,000 in the first month and N25,000 for each month after, and for failing to file it is N100,000 in the first month and N50,000 for each month after.", ["Nothing to gather"], "nigeriaTaxAdminAct")
    ]
  }
});
