"use strict";

// Koach Learn course: Agriculture (Africa) -> "Financing Your Farm: Loans, Grants and Investors" (farmer courses brief, 29 October 2026).
// Goes deeper than agri-agribusiness-farm-management (total cost of a loan, licensed lenders): working out the funding gap, savings groups,
// VSLAs and SACCOs, microfinance and bank agricultural loans (flat vs reducing-balance interest, collateral, repayment matched to harvest,
// credit guarantees), warehouse receipt financing, input credit, grants and youth programmes (confirmed ones only, with "check it is open"),
// loan and grant scams, and a one-page funding request. All money figures are made-up examples; no investment or lending advice.

const VSLA = { name: "VSL Associates: the VSLA methodology (shares, loan fund, social fund, one-year cycle, share-out)", url: "https://www.vsla.net/the-vsla-methodology/" };
const SASRA = { name: "SASRA, Kenya: list of licensed deposit-taking SACCOs", url: "https://www.sasra.go.ke/licensed-dt-saccos/" };
const BCEAO_SFD = { name: "BCEAO: rules for microfinance institutions (systemes financiers decentralises) in XOF countries", url: "https://www.bceao.int/fr/reglementations/reglementation-des-systemes-financiers-decentralises" };
const CBN_MFB = { name: "Central Bank of Nigeria: microfinance banks", url: "https://www.cbn.gov.ng/Supervision/Inst-MF.html" };
const NIRSAL = { name: "NIRSAL Plc, Nigeria: overview (credit risk guarantees for agricultural lending)", url: "https://nirsal.com/who-we-are/overview/" };
const GIRSAL = { name: "Graphic Online, Ghana: GIRSAL honours financial institutions for agricultural lending", url: "https://www.graphic.com.gh/news/general-news/increasing-lending-support-for-agriculture-sector-girsal-honours-11-financial-institutions-individuals.html" };
const WRSC = { name: "Warehouse Receipt System Council, Kenya (certified warehouses and warehouse receipts)", url: "https://www.wrsc.go.ke" };
const GCX_EWR = { name: "MyJoyOnline (31 October 2019): GCX and ARB Apex Bank launch electronic warehouse receipt financing", url: "https://www.myjoyonline.com/gcx-arb-apex-bank-launch-gha%C2%A250m-support-for-ghanaian-smallholder-farmers/" };
const GCX_ADEHYEMAN = { name: "Ghana News Agency (June 2023): Adehyeman Savings and Loans and Ghana Commodity Exchange partner to support farmers", url: "https://gna.org.gh/2023/06/adehyeman-ghana-commodity-exchange-partner-to-support-farmers/" };
const OAF = { name: "One Acre Fund: about us (financing, farm supplies and training; countries)", url: "https://oneacrefund.org/about-us" };
const ENABLE = { name: "IITA: Sudan launches ENABLE Youth Program (African Development Bank youth agripreneur programme)", url: "https://iita.org/news-item/sudan-launches-enable-youth-program/" };
const YEDF = { name: "Youth Enterprise Development Fund, Kenya (loans for youth enterprises, including an Agri-Biz loan)", url: "https://www.youthfund.go.ke" };
const DERFJ = { name: "DER/FJ, Senegal: Delegation generale a l'Entrepreneuriat rapide des Femmes et des Jeunes", url: "https://der.sn" };
const FCCPC = { name: "FCCPC, Nigeria: registration status of digital money lenders (approved loan apps)", url: "https://fccpc.gov.ng/registration-status-for-digital-money-lenders-apps/" };
const CBK_DCP = { name: "Central Bank of Kenya: bank supervision, including the directory of licensed digital credit providers", url: "https://www.centralbank.go.ke/bank-supervision/" };

module.exports = {
  id: "agri-farm-finance",
  category: "Agriculture (Africa)",
  name: "Financing Your Farm: Loans, Grants and Investors",
  skills: "Working out how much money you need, Using savings groups, VSLAs and SACCOs, Comparing farm loans and repayment plans, Using warehouse receipts and input credit, Finding real grants and avoiding scams, Writing a one-page funding request",
  outcome: "work out exactly how much money your farm needs and when, compare savings groups, SACCOs, loans, warehouse receipts, input credit and grants, spot a loan or grant scam, and write a one-page funding request a lender, programme or investor can say yes to.",
  about: [
    "This course is for smallholder and growing commercial farmers, young agripreneurs, women's and youth groups, cooperative leaders and extension workers in Kenya, Nigeria, Ghana, Senegal, Cote d'Ivoire and across Africa who need money to start, keep going or grow.",
    "Chapter 1 covers the money closest to you: working out how much you need and for what, savings groups, VSLAs and SACCOs, and microfinance and bank agricultural loans. Chapter 2 covers other doors: warehouse receipt financing and input credit from buyers and contract schemes, grants and youth programmes and how to avoid scams, and writing a one-page funding request. It builds on \"Agribusiness and Farm Management\", which shows how to work out the total cost of a loan.",
    "All money figures are made-up examples; interest rates, fees and programmes change, so check the current offer. This course explains how each kind of finance works and its risks. It does not give lending or investment advice. Borrow only what your plan needs, read every contract fully, check the lender is licensed, and ask a trusted adviser such as your cooperative, SACCO, extension officer or a lawyer before you sign."
  ],
  finalTask: "Write a one-page funding request for your farm (or an example farm): who you are and your farm; exactly what the money is for, how much in total, how much you put in yourself and the gap you are asking for; how the money will earn (cost per unit, gross margin or payback); the kind of finance you are asking for and why it fits; a repayment plan that matches when your money comes in; your collateral or guarantees; your main risks and how you manage them; and your records or track record.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Smallholder and growing commercial farmers, young agripreneurs, women's and youth groups, cooperative leaders and extension workers in Kenya, Nigeria, Ghana and francophone West Africa, growing crops or keeping animals and fish, who want money to start, expand or get through the season.",
    startingPoint: "Many have borrowed from family, a chama or savings group, a shop or a mobile loan app. Few have prepared a written budget for a loan, compared offers by total cost and repayment dates, used a warehouse receipt or checked whether a lender or programme is real. Some have been targeted by fake grant and loan offers.",
    gap: "Farmers often borrow the wrong amount, at the wrong time, from the wrong lender, with repayments due before harvest, or lose money to fake grants and unlicensed loan apps. Knowing their real funding gap and the options that fit lets them borrow less and better, use group savings and harvest-linked credit, and present a clear request that lenders and programmes take seriously.",
    constraints: [
      "Reading level: plain words and short sentences; every finance word is explained",
      "Devices: a basic phone and calculator; a notebook for budgets and the request",
      "Time: 5 to 6 minute lessons that fit around farm work",
      "Rates, fees and programmes change and differ by country: no rates or deadlines are given; learners check the current offer and the regulator",
      "No lending or investment advice; never type PINs, passwords or bank details into apps or AI tools for practice"
    ],
    prerequisites: "None. \"Agribusiness and Farm Management\" (records, cash flow, loan cost) and \"Farm Accounting and Investment Management\" (cost per unit, payback) help with the numbers."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a farm plan with its costs", action: "calculate the total money needed, your own contribution and the funding gap, split into working capital and equipment, with the month each is needed", standard: "with correct arithmetic and no household spending mixed in" },
    { id: "O2", condition: "Given a savings group, VSLA or SACCO you could join", action: "explain how saving, borrowing, guarantees and share-out work in it and list its risks", standard: "naming at least three rules to check before you join" },
    { id: "O3", condition: "Given two loan offers", action: "compare their total cost, collateral and repayment dates and choose the one that fits your harvest", standard: "with the total repaid worked out for each and the repayment months checked against your cash flow" },
    { id: "O4", condition: "Given a warehouse receipt or input credit offer", action: "list its costs, what you must do and what happens if prices or the harvest fall", standard: "naming at least four terms and two risks" },
    { id: "O5", condition: "Given a grant, youth programme or loan offer", action: "check it on the official website or regulator list and spot the warning signs of a scam", standard: "before you pay, share details or apply" },
    { id: "O6", condition: "Using your own farm figures", action: "write a one-page funding request that a lender, programme or investor can assess", standard: "covering purpose, amount, own contribution, how it earns, repayment, collateral and risks" }
  ],
  chapters: [
    {
      name: "Chapter 1: Your need and the money closest to you",
      lessons: [
        {
          title: "How much money you need, and for what",
          objectives: ["O1"],
          minutes: 5,
          goal: "Calculate your total money need, your own contribution and the funding gap, by month.",
          text: [
            "Before you look for money, write exactly what it is for. Working capital pays for one cycle of production: seed, fertilizer, feed, chicks or fingerlings, labour, vet services and transport. It comes back when you sell. Equipment and buildings (a pump, a pen, a store) last many years and pay back slowly. Lenders often treat them differently, with different loan lengths, so list them separately.",
            "Example (made-up numbers in naira), a broiler batch in Nigeria: chicks, feed, vet services and labour 1,200,000 (working capital); drinkers, feeders and repairs to the house 300,000 (equipment). Total 1,500,000. You have saved 500,000. Funding gap = 1,500,000 - 500,000 = 1,000,000. That gap, not the total, is what you ask for.",
            "Then put each cost in the month it is needed, using your cash-flow plan, so you can ask for money when you need it and not pay interest on money sitting idle. Keep a small buffer for price rises. Do not mix in household spending such as school fees: borrow for the farm only what the farm can repay."
          ],
          steps: ["List every cost in your plan.", "Mark each one working capital or equipment.", "Add them up for the total need.", "Subtract the money you will put in yourself.", "The difference is your funding gap.", "Put each cost in the month it is needed, and add a small buffer."],
          words: [["Working capital", "money that pays for one cycle of production and comes back when you sell."], ["Funding gap", "the money you still need after your own contribution: total need - own money."], ["Own contribution", "the money or goods you put into the plan yourself."]],
          slides: [
            { title: "Two kinds of need", bullets: ["Working capital: one cycle, comes back at sale", "Equipment and buildings: last years, pay back slowly", "List them separately"] },
            { title: "Broilers example (NGN, made-up)", bullets: ["Working capital 1,200,000 + equipment 300,000 = 1,500,000", "Own money 500,000", "Funding gap 1,000,000: ask for this"] },
            { title: "Timing and discipline", bullets: ["Put each cost in its month", "Small buffer for price rises", "No household spending in a farm loan"] }
          ],
          tryIt: "For one plan on your farm, list every cost, mark it working capital or equipment, add up the total, subtract your own money, and write the funding gap and the month each part is needed.",
          youCanNow: "work out exactly how much money your farm plan needs, what for and when, and the gap you need to fund.",
          quickCheck: [
            { objective: "O1", q: "A plan costs 800,000 and you have 300,000 of your own. What is the funding gap?", options: ["1,100,000", "800,000", "500,000", "300,000"], answer: 2, why: "800,000 - 300,000 = 500,000." },
            { objective: "O1", q: "Which is working capital for a fish pond?", options: ["Fingerlings and feed for one cycle", "Digging the pond", "A water pump", "A fence"], answer: 0, why: "Fingerlings and feed are used up in one cycle and come back when the fish are sold." }
          ]
        },
        {
          title: "Savings groups, VSLAs and SACCOs",
          objectives: ["O2"],
          minutes: 6,
          goal: "Explain how a VSLA and a SACCO work and list the rules to check before joining.",
          text: [
            "A village savings and loan association (VSLA) is a group, often of 10 to 25 members, that meets every week. At each meeting members buy 1 to 5 shares at a share price the group fixes for the year. Savings go into a loan fund. Members can usually borrow up to three times their savings for up to three months, paying a service charge the group sets. Many groups also keep a small social fund for emergencies. After about a year, all loans are repaid and the money, including the service charges, is shared out in proportion to each member's savings.",
            "A SACCO (savings and credit cooperative; in francophone West Africa, a mutuelle or caisse) is a member-owned financial cooperative, often larger and more formal. You save regularly, and loans are often linked to how much you have saved and need guarantors: members who promise to repay if you do not. In Kenya, SASRA licenses deposit-taking SACCOs and publishes the list. In the CFA franc countries, microfinance institutions and credit unions follow BCEAO rules.",
            "Before you join, check: the written constitution or by-laws, the share price or savings amount, the loan rules and charges, how money is kept safe (a cash box with locks or a licensed account), how records are kept and read out, and what being a guarantor means. If you guarantee a friend's loan and they do not repay, you may have to pay."
          ],
          steps: ["Ask to see the group's written rules.", "Check the share price or savings amount and meeting days.", "Check loan size, length and service charge.", "Check how cash and records are kept safe.", "Ask what being a guarantor means for you.", "For a SACCO, check it is registered or licensed."],
          words: [["VSLA", "village savings and loan association: a group that saves weekly, lends to members and shares out at the end of a cycle."], ["Share-out", "the day the group pays out all savings and earnings to members in proportion to their savings."], ["SACCO", "savings and credit cooperative: a member-owned group that takes savings and makes loans."], ["Guarantor", "a person who promises to repay a loan if the borrower does not."]],
          slides: [
            { title: "VSLA: how it works", bullets: ["10-25 members meet weekly; buy 1-5 shares", "Borrow up to 3x savings for up to 3 months", "Share-out after about a year"] },
            { title: "SACCO", bullets: ["Member-owned savings and credit cooperative", "Loans linked to savings; guarantors", "Kenya: check SASRA's licensed list"] },
            { title: "Check before you join", bullets: ["Written rules; savings amount", "Loan size, length, charge", "Safe cash and records; guarantor duties"] }
          ],
          sources: [VSLA, SASRA, BCEAO_SFD],
          tryIt: "Ask a savings group, VSLA or SACCO near you (or use the example) for its rules. Write the savings amount, loan size, loan length, charge, how cash is kept safe, and what a guarantor must do.",
          youCanNow: "explain how savings groups, VSLAs and SACCOs work and check their rules before you join or guarantee a loan.",
          quickCheck: [
            { objective: "O2", q: "In a VSLA, how is the money shared out at the end of the cycle?", options: ["Equally, whatever each saved", "To the chairperson", "To whoever borrowed most", "In proportion to each member's savings"], answer: 3, why: "Members who bought more shares receive a bigger share of the total." },
            { objective: "O2", q: "You guarantee a friend's SACCO loan and they stop paying. What may happen?", options: ["Nothing; guarantees are only a formality", "You may have to repay part or all of it", "The SACCO cancels the loan", "Your friend's family pays automatically"], answer: 1, why: "A guarantor promises to repay if the borrower does not." }
          ]
        },
        {
          title: "Microfinance and bank agricultural loans",
          objectives: ["O3"],
          minutes: 6,
          goal: "Compare two loan offers by total cost, collateral and how well repayments fit your harvest.",
          text: [
            "Microfinance banks and institutions lend smaller amounts, often to groups; commercial and agricultural banks lend larger amounts, often against more security. Ask whether the rate is per month or per year, and whether it is flat or reducing balance. A flat rate charges interest on the full amount for the whole loan; a reducing-balance rate charges only on what you still owe, so the same number costs less. Add every fee and insurance charge to find the total you will repay.",
            "Collateral is what the lender can take if you do not repay: a land title, a vehicle, equipment, savings held by the lender, a group guarantee, or a warehouse receipt. Some governments back lenders with credit guarantees, such as NIRSAL in Nigeria (up to 75% cover to lenders) and GIRSAL in Ghana. These protect the lender and can make banks more willing to lend to farmers, but you still owe the full loan.",
            "Match repayments to your harvest. Example (made-up numbers in Kenya shillings), borrowing 100,000 for a maize season: Offer A is 10,000 a month for 12 months starting next month, a total of 120,000. Offer B is one payment of 112,000 in month 6, after harvest. B costs less and repays when your money comes in; A asks for repayments before you have sold anything. Ask for a grace period or harvest-time repayment, and check the lender is licensed by the central bank."
          ],
          steps: ["Ask: rate per month or per year? Flat or reducing balance?", "Add interest, fees and insurance to get the total repaid.", "Ask what collateral or guarantee is needed.", "Put the repayment dates on your cash-flow plan.", "Ask for a grace period or harvest-time repayment if needed.", "Check the lender is licensed; read the contract fully."],
          words: [["Flat rate", "interest charged on the full amount borrowed for the whole loan, even as you repay."], ["Reducing balance", "interest charged only on the amount you still owe."], ["Collateral", "something the lender can take if you do not repay."], ["Grace period", "time at the start of a loan when you do not have to repay."], ["Credit guarantee", "a promise by a third party to cover part of the lender's loss if a borrower does not repay."]],
          slides: [
            { title: "Know the rate", bullets: ["Per month or per year?", "Flat: interest on the full amount all the time", "Reducing balance: only on what you still owe"] },
            { title: "Collateral and guarantees", bullets: ["Land title, equipment, savings, group guarantee", "NIRSAL (Nigeria), GIRSAL (Ghana) back lenders", "You still owe the full loan"] },
            { title: "Fit repayments to harvest (example KES)", bullets: ["A: 10,000 x 12 from next month = 120,000", "B: 112,000 once in month 6, after harvest", "B costs less and fits when money comes in"] }
          ],
          sources: [CBN_MFB, NIRSAL, GIRSAL],
          tryIt: "Take two real or example loan offers. For each, write the amount, rate (per month or year, flat or reducing), fees, total repaid, collateral and repayment months. Mark the repayment months on your cash-flow plan and choose the one that fits better.",
          youCanNow: "compare loan offers by total cost, collateral and repayment timing and choose the one that fits your harvest.",
          quickCheck: [
            { objective: "O3", q: "Two loans show the same number, 2% a month. One is flat, one is reducing balance. Which usually costs less?", options: ["The flat-rate loan", "They always cost the same", "The reducing-balance loan", "It depends on the colour of the form"], answer: 2, why: "Reducing balance charges only on what you still owe, so total interest is lower." },
            { objective: "O3", q: "Your maize sells in month 6. Which repayment plan fits best?", options: ["Weekly repayments from week 1", "Monthly repayments from next month", "Daily repayments", "A grace period with repayment after harvest"], answer: 3, why: "Repaying when your harvest money comes in avoids missed payments and forced sales." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Your need and the money closest to you",
        questions: [
          { objective: "O1", q: "Why list working capital and equipment separately?", options: ["Lenders may treat them differently because they pay back over different times", "It makes the list longer", "Equipment never needs funding", "There is no reason"], answer: 0, why: "Working capital comes back in one cycle; equipment pays back over years." },
          { objective: "O1", q: "Should you add school fees to a farm loan request?", options: ["Yes, always", "Yes, if the lender does not ask", "No, borrow for the farm only what the farm can repay", "Only in the dry season"], answer: 2, why: "Household spending does not earn, so it makes a farm loan harder to repay." },
          { objective: "O2", q: "In a typical VSLA, how much can a member usually borrow?", options: ["Any amount", "Up to about three times their savings", "Only their own savings", "Ten times their savings"], answer: 1, why: "VSLA loans are usually limited to about three times the member's savings." },
          { objective: "O2", q: "Which body in Kenya licenses deposit-taking SACCOs?", options: ["KALRO", "KAMIS", "The Kenya Meteorological Department", "SASRA"], answer: 3, why: "SASRA licenses and supervises deposit-taking SACCOs and lists them." },
          { objective: "O3", q: "Borrow 50,000, repay 5,000 a month for 12 months plus a 2,000 fee. What is the total cost of the loan?", options: ["12,000", "60,000", "10,000", "2,000"], answer: 0, why: "You repay 60,000 + 2,000 = 62,000, which is 12,000 more than you borrowed." }
        ]
      }
    },
    {
      name: "Chapter 2: Other doors to money, and asking for it",
      lessons: [
        {
          title: "Warehouse receipts and input credit",
          objectives: ["O4"],
          minutes: 6,
          goal: "List the costs, duties and risks of a warehouse receipt loan and an input credit offer.",
          text: [
            "Warehouse receipt financing: you deliver clean, dry, graded produce to a certified warehouse. It is weighed and tested, and you get a receipt that proves you own that amount and quality. A partner bank can lend against the receipt, so you get cash now and can sell later when prices may be better; the loan is repaid from the sale. In Kenya, the Warehouse Receipt System Council certifies warehouses. In Ghana, the Ghana Commodity Exchange and ARB Apex Bank launched electronic warehouse receipt loans in 2019, and in 2023 a savings and loans company joined to offer commodity-backed loans that farmers repay after they sell. Ask the lender how much of the produce's value it will lend and for how long.",
            "Costs and risks: storage and handling fees, insurance, interest and transport. If prices fall instead of rising, the sale may not cover the loan and fees. Produce must meet the grade, so poor drying or sorting lowers its value. Work out the price you need with the storage break-even method from the risk management course.",
            "Input credit: a buyer, processor, outgrower scheme or organisation supplies seed, fertilizer or chicks on credit, often with training, and you repay in instalments or the cost is taken from your harvest payment. One Acre Fund works this way with farmers in Kenya, Nigeria and other countries. Check: the input prices compared with cash prices, all charges, how much is deducted at harvest, whether you must sell only to them, what happens if the harvest fails, and the penalty for side-selling."
          ],
          steps: ["Warehouse receipt: find a certified warehouse and its partner lenders.", "Ask the storage, handling, insurance and loan charges.", "Ask how much you can borrow against the produce and for how long.", "Work out the sale price you need to repay everything.", "Input credit: compare input prices with cash prices and list every charge.", "Ask what happens if the harvest fails and whether you must sell only to them."],
          words: [["Warehouse receipt", "a document from a certified warehouse proving you own stored produce of a set amount and quality."], ["Certified warehouse", "a store checked and approved to keep produce safely and issue receipts."], ["Input credit", "seed, fertilizer or other inputs supplied now and paid for later, often from the harvest."], ["Outgrower scheme", "an arrangement where a company supplies farmers with inputs and advice and buys their crop."]],
          slides: [
            { title: "Warehouse receipt loans", bullets: ["Deliver graded produce; get a receipt", "Borrow against it; sell later", "Kenya: WRS Council; Ghana: GCX warehouses"] },
            { title: "Costs and risks", bullets: ["Storage, handling, insurance, interest", "Prices may fall instead of rise", "Produce must meet the grade"] },
            { title: "Input credit", bullets: ["Inputs now, repaid in instalments or at harvest", "Buyers, processors, outgrower schemes, One Acre Fund", "Compare with cash prices; list all charges"] },
            { title: "Ask before you sign", bullets: ["What is deducted at harvest?", "Must you sell only to them?", "What if the harvest fails?"] }
          ],
          sources: [WRSC, GCX_EWR, GCX_ADEHYEMAN, OAF],
          tryIt: "Choose either a warehouse receipt loan or an input credit offer near you (or an example). Write at least four terms (costs, amount, length, deductions or selling rules) and two risks, and say whether it fits your farm.",
          youCanNow: "explain how warehouse receipt loans and input credit work and check their costs and risks before you sign.",
          quickCheck: [
            { objective: "O4", q: "What does a warehouse receipt prove?", options: ["That you own a set amount and quality of stored produce", "That you have paid your taxes", "That the price will rise", "That the bank has approved a loan"], answer: 0, why: "The receipt is proof of ownership of graded, stored produce, which a lender can accept." },
            { objective: "O4", q: "An input credit scheme takes the input cost from your harvest payment. What must you check?", options: ["Only the seed variety", "Nothing; the company decides", "The input prices against cash prices, all charges and what happens if the harvest fails", "Only the date of the training"], answer: 2, why: "These terms decide how much you really pay and who carries a crop failure." }
          ]
        },
        {
          title: "Grants, youth programmes and avoiding scams",
          objectives: ["O5"],
          minutes: 6,
          goal: "Check a grant, youth programme or loan offer on an official source and spot the signs of a scam.",
          text: [
            "Grants do not have to be repaid, but they are competitive, have rules on how you spend the money, and ask for reports. Many \"youth funds\" are really loans or training. Examples you can check: the African Development Bank's ENABLE Youth programme trains and supports young agripreneurs in several African countries, with partners such as IITA; Kenya's Youth Enterprise Development Fund offers loans to youth enterprises, including an Agri-Biz loan; Senegal's DER/FJ finances projects by women and young people, including in agriculture, mostly through credit. Programmes open and close and change their rules: always check on the official website or office that a call is open now before you apply.",
            "Scams copy the names and logos of real programmes on social media and WhatsApp. Warning signs: you must pay a \"processing\" or \"registration\" fee before you get a grant or loan; approval is \"guaranteed\"; you are rushed; you are asked for your PIN, one-time code or ID photos by chat; the contact uses a personal number or email; or a loan app wants access to all your contacts. Real programmes do not charge to apply and never ask for your PIN.",
            "Check every lender and loan app: in Kenya, the Central Bank of Kenya publishes the directory of licensed digital credit providers and SASRA lists licensed SACCOs; in Nigeria, the FCCPC publishes the register of approved digital lenders and the Central Bank of Nigeria licenses microfinance banks; in CFA franc countries, check with the BCEAO or the national microfinance office. If in doubt, ask your cooperative or extension officer."
          ],
          steps: ["Find the programme on its official website or office, not a social media post.", "Check that the call is open now and read the rules.", "Never pay a fee to apply or to receive a grant.", "Never share your PIN, one-time code or passwords.", "Check lenders and loan apps on the regulator's list.", "Ask your cooperative or extension officer if unsure."],
          words: [["Grant", "money given for a purpose that does not have to be repaid, usually with rules and reports."], ["Call for applications", "a notice that a programme is accepting applications, with a start and end date."], ["Scam", "a trick to steal money or information."], ["Regulator", "the official body that licenses and supervises lenders, SACCOs or insurers."]],
          slides: [
            { title: "Grants and youth programmes", bullets: ["Grants: not repaid, but competitive, with rules", "Many youth funds are loans or training", "Check the call is open now, on the official site"] },
            { title: "Examples to check", bullets: ["AfDB ENABLE Youth (with IITA)", "Kenya: Youth Enterprise Development Fund loans", "Senegal: DER/FJ for women and youth"] },
            { title: "Scam warning signs", bullets: ["A fee to apply or to receive money", "\"Guaranteed\" approval; rushing you", "Asks for PIN, code or ID photos by chat"] },
            { title: "Check the regulator", bullets: ["Kenya: CBK digital lenders; SASRA SACCOs", "Nigeria: FCCPC loan apps; CBN microfinance", "CFA countries: BCEAO or national office"] }
          ],
          sources: [ENABLE, YEDF, DERFJ, CBK_DCP, FCCPC],
          tryIt: "Find one grant, youth programme or loan app you have heard of. Check it on the official website or the regulator's list, and write: is it real, is it open now, is it a grant or a loan, and any warning signs you see.",
          youCanNow: "check whether a grant, programme or lender is real and open, and spot the warning signs of a scam.",
          quickCheck: [
            { objective: "O5", q: "A WhatsApp message says you have won a farm grant and must pay a 5,000 processing fee. What is this?", options: ["A normal grant step", "A warning sign of a scam", "A government rule", "A loan repayment"], answer: 1, why: "Real grants do not charge you to receive money." },
            { objective: "O5", q: "In Nigeria, where can you check whether a loan app is approved?", options: ["The app's own advert", "A friend's opinion", "The number of downloads", "The FCCPC register of digital lenders"], answer: 3, why: "The FCCPC publishes the list of approved digital money lenders." }
          ]
        },
        {
          title: "Writing a one-page funding request",
          objectives: ["O6"],
          minutes: 6,
          goal: "Write a one-page funding request for your farm.",
          text: [
            "A funding request tells a lender, programme or investor what you need, why, and how it will be repaid or pay off. Keep it to one page with clear headings: who you are and your farm (location, land, enterprises, years farming); the purpose and amount (total need, your own contribution, the gap you ask for, split into working capital and equipment); how it earns (cost per unit, gross margin or payback from your records); the finance you are asking for and why it fits; repayment plan by month, matched to your cash flow; collateral or guarantees; risks and how you manage them (insurance, contracts, diversification, storage); and your track record (records kept, past loans repaid, group membership).",
            "Investors are different from lenders. An investor puts in money for a share of the business and its future profits (equity), instead of being repaid with interest. Equity investors usually look for growing businesses such as processors or larger farms with records and a team. You give up part of the ownership and some control, so get legal advice and never sign what you do not understand.",
            "Before you send it, check the numbers twice, ask a cooperative leader, extension officer or adviser to read it, and attach your records. Never include passwords, PINs or full bank details in the request; give these only through the lender's official process."
          ],
          steps: ["Who you are and your farm.", "Purpose, total need, own contribution and the gap.", "How it earns: cost per unit, margin or payback.", "Type of finance and repayment plan by month.", "Collateral or guarantees; risks and how you manage them.", "Track record; check the numbers and ask an adviser to read it."],
          words: [["Funding request", "a short document asking a lender, programme or investor for money, showing the purpose, amount and repayment."], ["Equity", "a share of ownership in a business that an investor gets for their money."], ["Track record", "proof of what you have done before, such as records kept and loans repaid."]],
          slides: [
            { title: "One page, clear headings", bullets: ["Who you are and your farm", "Purpose, total need, own money, the gap", "How it earns: cost per unit, margin, payback"] },
            { title: "Repayment and security", bullets: ["Repayment by month, matched to cash flow", "Collateral or guarantees", "Risks and how you manage them"] },
            { title: "Investors are different", bullets: ["Money for a share of the business (equity)", "You give up part ownership and control", "Get legal advice first"] },
            { title: "Before you send", bullets: ["Check numbers twice; attach records", "Ask an adviser to read it", "No PINs or passwords in the request"] }
          ],
          tryIt: "Final task: write your one-page funding request with purpose, total need, own contribution and gap, how it earns, the type of finance and why, a monthly repayment plan, collateral, risks and your track record. Ask one person you trust to read it.",
          youCanNow: "write a clear one-page funding request backed by your own numbers that a lender, programme or investor can assess.",
          quickCheck: [
            { objective: "O6", q: "Which amount should your request ask for?", options: ["The funding gap after your own contribution", "The total cost, ignoring your own money", "As much as the lender will give", "Double the total cost to be safe"], answer: 0, why: "Asking for the gap shows your own commitment and keeps the loan as small as possible." },
            { objective: "O6", q: "What does an equity investor get for their money?", options: ["Fixed monthly interest only", "Nothing", "A share of the business and its future profits", "Your land title"], answer: 2, why: "Equity means part ownership of the business." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Other doors to money, and asking for it",
        questions: [
          { objective: "O4", q: "With a warehouse receipt loan, what happens if prices fall instead of rising?", options: ["The bank cancels the loan", "The sale may not cover the loan and fees", "The warehouse pays the difference", "Nothing changes"], answer: 1, why: "You still owe the loan and fees whatever the price." },
          { objective: "O4", q: "Which is a typical rule in an outgrower or input credit scheme?", options: ["You never repay", "You must sell to anyone but them", "Inputs are always free", "The input cost is taken from your harvest payment"], answer: 3, why: "Many schemes recover the cost of inputs when they buy your crop." },
          { objective: "O5", q: "Before applying to a youth agripreneur programme, you should first:", options: ["Check on the official website that the call is open now", "Pay the registration fee", "Send your PIN to the organisers", "Share it on social media"], answer: 0, why: "Programmes open and close; the official site shows what is real and current." },
          { objective: "O5", q: "A loan app asks for access to all your phone contacts. This is:", options: ["A normal bank rule", "Required by law", "A warning sign; check the app is licensed first", "A sign of a good lender"], answer: 2, why: "Unlicensed apps use contact lists to shame borrowers; check the regulator's list." },
          { objective: "O6", q: "Which belongs in a one-page funding request?", options: ["Your mobile money PIN", "A monthly repayment plan matched to your cash flow", "Ten pages of photos only", "Your neighbours' debts"], answer: 1, why: "Lenders need to see how and when you will repay." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Financing Your Farm: Loans, Grants and Investors",
    questions: [
      { objective: "O1", q: "Total need 2,000,000; own money 600,000. The funding gap is:", options: ["2,600,000", "600,000", "1,400,000", "2,000,000"], answer: 2, why: "2,000,000 - 600,000 = 1,400,000." },
      { objective: "O1", q: "Working capital is money that:", options: ["Pays for one production cycle and comes back when you sell", "Buys land", "Pays school fees", "Is never repaid"], answer: 0, why: "It funds inputs and labour for one cycle." },
      { objective: "O1", q: "Why put each cost in the month it is needed?", options: ["Lenders like long lists", "To borrow more than you need", "It makes no difference", "So you get money when you need it and do not pay interest on idle money"], answer: 3, why: "Good timing keeps borrowing and interest as low as possible." },
      { objective: "O2", q: "How often does a typical VSLA meet?", options: ["Once a year", "Every week", "Only at share-out", "Never"], answer: 1, why: "Weekly meetings are when members buy shares and repay loans." },
      { objective: "O2", q: "What is a VSLA social fund for?", options: ["Paying the chairperson", "Buying land", "Members' emergencies", "Parties only"], answer: 2, why: "The social fund helps members in emergencies." },
      { objective: "O2", q: "Before joining a savings group, which should you check?", options: ["Its written rules, loan charges and how cash is kept safe", "Only who the chairperson is", "Only the meeting place", "Nothing"], answer: 0, why: "Clear rules and safe cash protect your savings." },
      { objective: "O3", q: "A reducing-balance rate charges interest on:", options: ["The full amount for the whole loan", "Nothing", "Only the fees", "Only the amount you still owe"], answer: 3, why: "As you repay, the interest falls." },
      { objective: "O3", q: "What does a credit guarantee scheme such as NIRSAL do?", options: ["Cancels farmers' loans", "Covers part of the lender's loss if a borrower does not repay", "Pays farmers' interest", "Gives free grants"], answer: 1, why: "It protects lenders so they lend more; you still owe the full loan." },
      { objective: "O3", q: "Which is collateral?", options: ["Your favourite crop", "A land title or equipment the lender can take if you do not repay", "Your phone number", "A market price"], answer: 1, why: "Collateral is security for the lender." },
      { objective: "O3", q: "Offer A: repay 120,000 monthly from next month. Offer B: repay 112,000 once after harvest. For a crop farmer, B:", options: ["Costs more and fits worse", "Is always illegal", "Costs less and repays when harvest money comes in", "Is the same as A"], answer: 2, why: "B's total is lower and it is due when the farmer has money." },
      { objective: "O4", q: "Where do you deposit produce to get a warehouse receipt?", options: ["Any shop", "At home", "With a trader you just met", "A certified warehouse"], answer: 3, why: "Only certified warehouses issue receipts lenders accept." },
      { objective: "O4", q: "In Kenya, which body certifies warehouses for warehouse receipts?", options: ["The Warehouse Receipt System Council", "KAMIS", "NAFDAC", "The Kenya Meteorological Department"], answer: 0, why: "The WRS Council certifies and regulates warehouses." },
      { objective: "O4", q: "What is side-selling?", options: ["Selling at the side of the road", "Selling produce promised to one buyer to someone else", "Selling to a cooperative", "Selling in stages"], answer: 1, why: "It breaks an input credit or contract agreement and can bring penalties." },
      { objective: "O5", q: "A real grant programme:", options: ["Asks for a fee before paying you", "Asks for your PIN", "Does not charge you to apply", "Guarantees approval to everyone"], answer: 2, why: "Fees, PIN requests and guarantees are scam signs." },
      { objective: "O5", q: "Kenya's Youth Enterprise Development Fund mainly offers:", options: ["Free land", "Loans to youth enterprises", "Crop insurance", "Weather forecasts"], answer: 1, why: "It provides loans, including an Agri-Biz loan, and business support." },
      { objective: "O5", q: "Where should you check a Kenyan digital loan app?", options: ["Its social media page", "Its number of stars", "A friend's group chat", "The Central Bank of Kenya's directory of licensed digital credit providers"], answer: 3, why: "The CBK licenses digital credit providers and publishes the list." },
      { objective: "O6", q: "Which heading shows a lender how the money will earn?", options: ["Cost per unit, gross margin or payback", "Your favourite colour", "Your neighbours' names", "Your PIN"], answer: 0, why: "These figures show the money will create income to repay." },
      { objective: "O6", q: "Your track record in a funding request means:", options: ["Your running speed", "Proof of what you have done, such as records kept and loans repaid", "Your phone contacts", "A list of wishes"], answer: 1, why: "Past performance helps lenders trust your plan." },
      { objective: "O6", q: "Before you send a funding request, you should:", options: ["Add your PIN for speed", "Make the numbers bigger", "Check the numbers twice and ask an adviser to read it", "Send it to every number you find online"], answer: 2, why: "Checked numbers and a second reader make the request stronger and safer." },
      { objective: "O6", q: "What do you give up when you take equity from an investor?", options: ["Nothing", "Your savings group membership", "All your land automatically", "Part of the ownership and some control of the business"], answer: 3, why: "Equity means the investor owns part of the business." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 2, 3, 5, 6, 9, 10, 13, 15, 16] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part of the request and check it again.",
    criteria: [
      { name: "Need and funding gap", objective: "O1", notYet: "The amount is a guess, or household spending is mixed in.", meets: "Total need, own contribution and gap are correct, split into working capital and equipment, with months.", exceeds: "Includes a small buffer and shows where each cost figure came from." },
      { name: "Right kind of finance", objective: "O2", notYet: "No reason is given for the type of finance chosen.", meets: "Names the type of finance (group, SACCO, loan, warehouse receipt, input credit, grant or equity) and why it fits.", exceeds: "Compares at least two options, including group savings, and explains the choice." },
      { name: "Repayment plan", objective: "O3", notYet: "No repayment plan, or repayments fall before any income.", meets: "Monthly repayments with total cost, matched to the cash-flow plan and harvest.", exceeds: "Shows what happens in a bad season and how repayments would still be met." },
      { name: "Security and terms", objective: "O4", notYet: "Collateral, guarantees or key terms are missing.", meets: "Collateral or guarantees are named, with the main terms and two risks.", exceeds: "Explains how a warehouse receipt, contract or insurance lowers the lender's risk." },
      { name: "Checked and safe", objective: "O5", notYet: "The lender or programme is not checked, or private details such as a PIN are included.", meets: "The lender or programme is checked on an official site or regulator list, and no private codes are included.", exceeds: "Notes the date checked and that the call or offer is open now." },
      { name: "Clear one-page request", objective: "O6", notYet: "Longer than one page or missing purpose, amount or how it earns.", meets: "One page covering purpose, amount, own contribution, how it earns, repayment, collateral, risks and track record.", exceeds: "Read by an adviser, with records attached and their comments addressed." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and score Meets or Exceeds on every rubric row of the funding request",
      "Learners who report joining a savings group or SACCO, or applying for finance with a written request, within 30 days (follow-up survey)",
      "Learners who report choosing a loan with repayments after harvest, or borrowing less than they first planned",
      "Learners who report checking a lender, loan app or grant offer on an official list, or refusing a fee-for-grant scam",
      "Partner cooperatives or lenders report more complete applications and fewer missed repayments from course graduates"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A notebook and pen, and a basic phone with a calculator",
      "The learner's farm plan, records and cash-flow plan, or the course's example numbers",
      "Real or example loan offers, savings group rules and an input credit or warehouse receipt leaflet from the local area, if available",
      "About 80 minutes in total, in short sessions, plus time to write the funding request"
    ],
    facilitatorNotes: [
      "In a farmer group or extension session: take the pre-test together, then one chapter per session with the \"Try it now\" tasks in pairs.",
      "Invite a SACCO, VSLA or licensed lender to explain its rules, but do not endorse any lender; let learners ask the lesson's questions.",
      "Before mentioning any grant or youth programme, check on its official site that it is open; never pass on links from social media.",
      "Never ask learners to share PINs, passwords, ID numbers or bank details in practice; use placeholders.",
      "Score the funding request with the rubric and give feedback on one Not yet row at a time; encourage learners to show it to their cooperative or lender."
    ]
  }
};
