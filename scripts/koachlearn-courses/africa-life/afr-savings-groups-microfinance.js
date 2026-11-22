"use strict";

// Koach Learn course: Africa: Life and Work -> "Savings Groups and Microfinance (Chamas, VSLAs, Tontines, Esusu)" (Africa life brief, 30 October 2026).
// Household and small-business saving, not farm finance (agri-farm-finance covers farm funding needs and farm loans): rotating groups
// (merry-go-round, esusu/ajo, susu, tontine, njangi, gam'eya, daret) against saving-and-lending groups (VSLAs, ASCAs, SACCOs), a monthly
// savings plan, group rules, records and cash safety, microfinance and group loans (total repaid, schedule, joint liability), and Ponzi
// and fake-lender warning signs with the regulators' licensed lists. All money figures are examples; no investment or lending advice.

const VSLA = { name: "VSL Associates: the VSLA methodology (shares, loan fund, social fund, one-year cycle, share-out)", url: "https://www.vsla.net/the-vsla-methodology/" };
const SASRA = { name: "SASRA, Kenya: list of licensed deposit-taking SACCOs", url: "https://www.sasra.go.ke/licensed-dt-saccos/" };
const BCEAO_SFD = { name: "BCEAO: rules for microfinance institutions (systèmes financiers décentralisés) in XOF countries", url: "https://www.bceao.int/fr/reglementations/reglementation-des-systemes-financiers-decentralises" };
const CBN_MFB = { name: "Central Bank of Nigeria: microfinance banks", url: "https://www.cbn.gov.ng/Supervision/Inst-MF.html" };
const BOG = { name: "Bank of Ghana: all licensed institutions and complaints procedures", url: "https://www.bog.gov.gh" };
const CBK_DCP = { name: "Central Bank of Kenya: bank supervision, including licensed microfinance banks and digital credit providers", url: "https://www.centralbank.go.ke/bank-supervision/" };
const FCCPC = { name: "FCCPC, Nigeria: registration status of digital money lenders (approved loan apps)", url: "https://fccpc.gov.ng/registration-status-for-digital-money-lenders-apps/" };
const SEC_NG = { name: "Nairametrics (14 May 2026): SEC Nigeria warns against Ponzi schemes promoted on WhatsApp, TikTok and Instagram", url: "https://nairametrics.com/2026/05/14/sec-warns-nigerians-against-rising-ponzi-schemes-on-whatsapp-tiktok-instagram/" };

module.exports = {
  id: "afr-savings-groups-microfinance",
  category: "Africa: Life and Work",
  name: "Savings Groups and Microfinance (Chamas, VSLAs, Tontines, Esusu)",
  skills: "Choosing between a rotating group and a savings-and-loan group, Writing a monthly savings plan, Checking a group's rules, Keeping group records and cash safe, Comparing microfinance and group loans, Spotting Ponzi schemes and fake lenders",
  outcome: "choose a savings group that fits your goal, check its rules and records, compare a microfinance or group loan by the total you repay, spot a Ponzi scheme or fake lender, and follow a written monthly savings plan.",
  about: [
    "Across Africa, people save together: chamas and merry-go-rounds in Kenya, esusu and ajo in Nigeria, susu in Ghana, tontines in Senegal, Côte d'Ivoire and Cameroon (njangi in English-speaking Cameroon), gam'eya in Egypt and daret in Morocco. Savings groups, SACCOs and microfinance banks help millions pay school fees, stock a shop or survive a hard month.",
    "This course is for traders, parents, artisans, workers and young people who want to save regularly or borrow carefully. You will learn the two main kinds of groups, how to write a savings plan, what to check in a group's rules and records, how to compare a loan by the total you repay, and how to spot schemes that steal savings.",
    "Each lesson takes about five minutes, with a \"Try it now\" task, a short check, a knowledge check after each chapter and a 20-question quiz at the end. All money figures are examples. This course explains how products work and their risks; it does not tell you where to put your money."
  ],
  finalTask: "Write your monthly savings plan on one page: your goal and the date you need it, the total, the amount to save each week or month, where you will save it (group, SACCO, microfinance bank or account), and a check sheet with your answers about the group or institution: its written rules, how cash and records are kept, its licence (if it takes deposits or lends as a business), and any loan's total cost.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults and young people across Africa, in towns and villages: traders, artisans, mothers and fathers, workers and young people, many already in a chama, esusu, susu or tontine. Examples from Kenya, Nigeria, Ghana, Senegal, Cameroon, Côte d'Ivoire, Egypt and Morocco.",
    startingPoint: "Many already save in an informal group or with a mobile wallet, but without a written goal. Some have joined a group without reading its rules, borrowed without working out the total repayment, or lost money in a group that collapsed or a \"double your money\" scheme.",
    gap: "Learners need to pick the right kind of group for their goal, check rules and records before trusting a group with their money, compare loans by what they will really repay, and recognise Ponzi schemes and unlicensed lenders, so their savings grow instead of disappearing.",
    constraints: [
      "Reading level: plain words and short sentences; translated into French and Arabic",
      "Devices: basic phone; many groups meet in person and keep paper records",
      "Time: 4 to 6 minute lessons that fit around work and group meeting days",
      "Rules and licensing differ by country and change: learners check the regulator's current lists",
      "Money: examples only; no investment advice; never share PINs or passwords"
    ],
    prerequisites: "None. Basic adding and multiplying, with a phone calculator, helps."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a savings goal and two kinds of group", action: "explain how a rotating group and a saving-and-lending group work and choose the one that fits the goal", standard: "giving one reason for the choice and one risk of each" },
    { id: "O2", condition: "Given a goal and your own income", action: "write a monthly savings plan with the goal, the total, the date, the amount per week or month and where you will save it", standard: "with arithmetic that adds up to the goal by the date" },
    { id: "O3", condition: "Given a group's constitution or rules", action: "check it for the key rules: contributions, meetings, loans, fines, leaving, share-out and who controls the money", standard: "finding at least six of the seven and naming any that are missing" },
    { id: "O4", condition: "At a group meeting", action: "record contributions and loans in a passbook or record book and check that the cash and the records match", standard: "with every amount read out and agreed in front of members" },
    { id: "O5", condition: "Given a microfinance or group loan offer", action: "calculate the total you will repay and check the repayment dates against your income", standard: "before you sign, and naming what joint liability means for you" },
    { id: "O6", condition: "Given an offer to save, invest or borrow", action: "identify the warning signs of a Ponzi scheme or fake lender and check the provider on the regulator's official list", standard: "before you pay or share any details" }
  ],
  chapters: [
    {
      name: "Chapter 1: Saving together",
      lessons: [
        {
          title: "Two kinds of savings groups",
          objectives: ["O1"],
          minutes: 5,
          goal: "Explain how a rotating group and a saving-and-lending group work, and choose one for your goal.",
          text: [
            "A rotating group (a merry-go-round, esusu, ajo, susu, tontine, njangi, gam'eya or daret) is simple. Every member pays the same amount each week or month, and each time one member takes the whole pot, in turn, until everyone has had it once. Example: 10 members each pay KES 1,000 a month; each month one member gets KES 10,000.",
            "It is good for a lump sum: school fees, a sewing machine, stock for a shop. Its risks: people who get the pot early may stop paying, and nobody earns anything on the money. Early members get an interest-free advance; late members are really lending to the group.",
            "A saving-and-lending group (a VSLA, an ASCA or many chamas, and in a bigger, formal version a SACCO) keeps the money together. Members save at each meeting, the savings become a loan fund, members borrow and repay with a service charge the group sets, and at the end of the cycle, often about a year, everything is shared out in proportion to what each member saved. Its risks: loans that are not repaid, and cash that is stolen or badly recorded.",
            "Choose by your goal. A lump sum soon: a rotating group may fit. Steady saving with the chance to borrow: a saving-and-lending group may fit. Many people use both."
          ],
          words: [["Rotating group (ROSCA)", "members pay the same amount and each takes the whole pot in turn."], ["Saving-and-lending group", "members save into a shared fund, lend to each other and share out at the end of a cycle (VSLA, ASCA, SACCO)."], ["Share-out", "the day a group pays out all savings and earnings to members in proportion to their savings."]],
          slides: [
            { title: "Rotating group", bullets: ["Everyone pays the same; one takes the pot in turn", "Esusu, ajo, susu, tontine, njangi, gam'eya, daret", "Good for a lump sum; risk: early takers stop paying"] },
            { title: "Saving-and-lending group", bullets: ["Savings become a loan fund", "Members borrow and repay with a service charge", "Share-out by what each saved; risk: unpaid loans"] },
            { title: "Choose by your goal", bullets: ["Lump sum soon: rotating group may fit", "Steady saving and borrowing: VSLA or SACCO", "Many people use both"] }
          ],
          sources: [VSLA],
          tryIt: "Think of a group you are in or know. Is it rotating or saving-and-lending? Write one thing it is good for and one risk.",
          youCanNow: "explain the two kinds of savings groups and choose the one that fits your goal.",
          quickCheck: [
            { objective: "O1", q: "Twelve members each pay GHS 200 a month and one member takes the whole pot each month. What kind of group is this?", options: ["A saving-and-lending group", "A microfinance bank", "A rotating group", "A Ponzi scheme"], answer: 2, why: "Everyone pays the same and takes the pot in turn: a rotating group (susu)." },
            { objective: "O1", q: "In a VSLA, how is money shared out at the end of the cycle?", options: ["In proportion to what each member saved", "Equally, whatever each saved", "All to the chairperson", "To whoever borrowed most"], answer: 0, why: "Members who saved more get a bigger share of the fund and its earnings." }
          ]
        },
        {
          title: "Your goal and monthly savings plan",
          objectives: ["O2"],
          minutes: 5,
          goal: "Write a savings plan that reaches a goal by a date.",
          text: [
            "Saving works better with a clear goal: what it is for, how much it costs and when you need it. \"School fees of NGN 120,000 by January\" is a goal. \"Save more\" is not.",
            "Divide the total by the number of weeks or months you have. Example: NGN 120,000 in 8 months is NGN 15,000 a month. If that is too much, change the date, the goal or your spending. Look at your income on good and bad months; a trader may save more in the busy season.",
            "Decide where the money will sit: a savings group, a SACCO, a microfinance bank, a bank or a mobile savings account. Keep a small emergency amount you can reach quickly, separate from money for the goal.",
            "Pay yourself first: save on the day money comes in, before other spending. Example: Aïcha, a hairdresser in Abidjan, puts XOF 5,000 in her tontine every Saturday before she buys anything else."
          ],
          steps: ["Write the goal, the total and the date.", "Count the weeks or months until the date.", "Divide the total by that number.", "Check it against your income on a bad month.", "Choose where to save it.", "Save on the day money comes in."],
          words: [["Savings goal", "what you save for, how much it costs and by when."], ["Emergency money", "a small amount kept aside for sudden problems, easy to reach."]],
          slides: [
            { title: "A clear goal", bullets: ["What it is for, how much, by when", "\"School fees NGN 120,000 by January\"", "Not just \"save more\""] },
            { title: "Do the sum", bullets: ["Total / months = amount per month", "NGN 120,000 / 8 = NGN 15,000 (example)", "Too much? Change the date, goal or spending"] },
            { title: "Where and when", bullets: ["Group, SACCO, microfinance bank or account", "Keep emergency money separate", "Save first, on the day money comes in"] }
          ],
          tryIt: "Write one real goal with a total and a date. Divide to get the amount per week or month, and check it against your income in a bad month. Change it until it works.",
          youCanNow: "write a savings plan with a goal, a total, a date and an amount per week or month.",
          quickCheck: [
            { objective: "O2", q: "You need KES 24,000 in 6 months. How much do you save each month?", options: ["KES 2,400", "KES 6,000", "KES 3,000", "KES 4,000"], answer: 3, why: "24,000 divided by 6 is 4,000." },
            { objective: "O2", q: "Which is a clear savings goal?", options: ["\"Save more this year\"", "\"A sewing machine costing GHS 1,500 by June\"", "\"Be rich\"", "\"Stop spending\""], answer: 1, why: "It says what, how much and by when." }
          ]
        },
        {
          title: "Checking a group's rules before you join",
          objectives: ["O3"],
          minutes: 5,
          goal: "Check a group's written rules for the seven key points.",
          text: [
            "A strong group has written rules, often called a constitution or by-laws, agreed by all members. Ask to see them before you join. If there are none, ask the group to write them first.",
            "Check seven things: 1. Contributions: how much, how often, and what happens if you pay late (fines). 2. Meetings: when and where. 3. Loans: who can borrow, how much, for how long, the service charge and what happens if a loan is not repaid. 4. Fines and discipline. 5. Leaving: how you get your money back if you leave or move. 6. Share-out or rotation order: when and how. 7. Who controls the money: the officers, how they are elected, and who signs.",
            "Some groups register, for example as a self-help group, a cooperative or a SACCO; ask the local social development or cooperative office what applies where you live. A group that takes deposits from the public as a business may need a licence from the regulator.",
            "Example: Grace's chama in Nakuru writes in its rules that the treasurer cannot also hold the cash box keys, and members vote on every loan."
          ],
          steps: ["Ask to see the written rules.", "Check contributions and late fines.", "Check meeting days.", "Check loan rules and what happens if a loan is not repaid.", "Check how you leave and get your money back.", "Check share-out or rotation order.", "Check who controls and signs for the money."],
          words: [["Constitution (by-laws)", "the written rules a group agrees and follows."], ["Officers", "members elected to lead: often a chair, a secretary and a treasurer."]],
          slides: [
            { title: "Ask for the written rules", bullets: ["Constitution or by-laws, agreed by members", "No rules? Ask the group to write them"] },
            { title: "Seven things to check", bullets: ["Contributions and fines; meetings", "Loans and unpaid loans; leaving", "Share-out or rotation; who controls the money"] },
            { title: "Registration", bullets: ["Some groups register locally", "Ask the social development or cooperative office", "Taking public deposits may need a licence"] }
          ],
          sources: [SASRA, BCEAO_SFD],
          tryIt: "Get the rules of a group you are in or want to join (or write down what you know). Tick each of the seven points. Write the ones that are missing as questions to ask at the next meeting.",
          youCanNow: "check a group's rules for the seven key points before you trust it with your money.",
          quickCheck: [
            { objective: "O3", q: "Which question checks the \"leaving\" rule?", options: ["When do we meet?", "Who is the chair?", "What colour is the cash box?", "If I move to another town, how do I get my savings back?"], answer: 3, why: "The leaving rule says how a member gets their money back." },
            { objective: "O3", q: "A group has no written rules. What is a wise step before you join?", options: ["Ask the members to agree and write rules first", "Join and hope for the best", "Give your savings to the chair to keep", "Join two groups to be safe"], answer: 0, why: "Written rules prevent most disputes about money." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Saving together",
        questions: [
          { objective: "O1", q: "In a rotating group, who carries the most risk?", options: ["The member who takes the pot first", "Members who take the pot late, if early takers stop paying", "The bank", "Nobody"], answer: 1, why: "Late members have paid in for months and lose out if early takers stop paying." },
          { objective: "O1", q: "You want to save steadily and borrow small amounts during the year. Which may fit best?", options: ["A rotating group only", "A Ponzi scheme", "Keeping cash under the bed", "A saving-and-lending group such as a VSLA"], answer: 3, why: "A VSLA lets members save and borrow from the shared fund." },
          { objective: "O2", q: "Your goal is GHS 900 in 3 months. How much each month?", options: ["GHS 300", "GHS 450", "GHS 270", "GHS 90"], answer: 0, why: "900 divided by 3 is 300." },
          { objective: "O3", q: "Which is NOT one of the seven rules to check?", options: ["Loan rules", "Share-out or rotation", "The chair's favourite food", "Who controls the money"], answer: 2, why: "The seven are contributions, meetings, loans, fines, leaving, share-out and control of money." },
          { objective: "O3", q: "Why check who signs for and controls the money?", options: ["So one person cannot take it alone", "To make meetings shorter", "To lower fines", "So the group pays no tax"], answer: 0, why: "Shared control stops one officer from misusing the money." }
        ]
      }
    },
    {
      name: "Chapter 2: Records, loans and staying safe",
      lessons: [
        {
          title: "Records and cash safety at meetings",
          objectives: ["O4"],
          minutes: 5,
          goal: "Record contributions and loans and check that the cash matches the records.",
          text: [
            "Most group failures start with poor records or one person holding the money. Good groups keep records that every member can follow.",
            "Common tools: each member has a passbook showing their savings and loans, the group keeps a record book, and in many VSLAs the cash box has three locks with three keys held by three different members who are not the box keeper. Some groups keep money in a group bank or mobile account that needs two or three signatories.",
            "At each meeting: every contribution and repayment is counted in front of members, written in the passbook and the record book, and the total is read out. At the end, the cash counted must match the records. If it does not, stop and find out why before anyone leaves.",
            "Example: in a VSLA in Tamale, the secretary reads the balance aloud and two members count the cash. They match: GHS 3,450. The box is locked and the keys go home with three different members."
          ],
          steps: ["Count each payment in front of members.", "Write it in the member's passbook and the record book.", "Read the totals aloud.", "Count the cash and compare with the record book.", "If they do not match, find out why before anyone leaves.", "Lock the cash; keys or signing power with different members."],
          words: [["Passbook", "a member's own book showing their savings and loans."], ["Signatory", "a person allowed to sign for the group's account; good groups need two or more."]],
          slides: [
            { title: "Why records matter", bullets: ["Poor records and one person holding money", "are where most groups go wrong"] },
            { title: "Tools", bullets: ["Passbooks and a record book", "Cash box with three locks, three key holders", "Group account with two or more signatories"] },
            { title: "Every meeting", bullets: ["Count in front of members; write it down", "Read totals aloud", "Cash must match the records before anyone leaves"] }
          ],
          sources: [VSLA],
          tryIt: "Make a simple record table for one meeting: member name, savings paid, loan repaid, new loan. Add three example members. Total each column and check that the totals equal the cash you would count.",
          youCanNow: "record contributions and loans at a meeting and check that the cash matches the records.",
          quickCheck: [
            { objective: "O4", q: "At the end of a meeting, the cash is GHS 200 less than the record book. What do you do?", options: ["Ignore it; it will balance next time", "Let the treasurer explain it next month", "Stop and find out why before anyone leaves", "Tear out the page"], answer: 2, why: "A difference must be found while everyone is present and memories are fresh." },
            { objective: "O4", q: "Why do many VSLAs give the three keys to three different members?", options: ["So no single person can open the box alone", "Because locks are cheap", "To make meetings longer", "So the box keeper can open it at home"], answer: 0, why: "Shared keys mean the cash can only be opened with members present." }
          ]
        },
        {
          title: "Microfinance and group loans",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calculate the total you will repay on a loan and check the dates against your income.",
          text: [
            "Microfinance banks and institutions lend smaller amounts to people and small businesses, often through groups. In Nigeria, the Central Bank licenses microfinance banks; in Kenya, the Central Bank licenses microfinance banks and digital credit providers; in Ghana, the Bank of Ghana lists licensed institutions; in XOF countries such as Senegal and Côte d'Ivoire, microfinance follows BCEAO rules.",
            "Never compare loans only by the interest rate they say. Ask for the total you will repay, in writing, including all fees, insurance and charges. Example (made-up figures): borrow KES 10,000; repay KES 1,000 a week for 12 weeks. Total repaid: KES 12,000, so the loan costs KES 2,000.",
            "Check the repayment dates against your income. A weekly repayment is hard if you earn monthly or seasonally. Ask what happens if you pay late: fines, and whether it is reported to a credit bureau.",
            "Many group loans use joint liability: if one member does not pay, the others must pay for them. Join only with people you trust, and know that you may have to cover someone else. Borrow for something that earns or saves money, not to pay another loan."
          ],
          steps: ["Ask for the total to be repaid, in writing, with all fees.", "Work out the cost: total repaid minus the amount borrowed.", "Write down the repayment dates.", "Check each date against your income in a bad month.", "Ask about late fines and credit reporting.", "Ask whether the loan has joint liability."],
          words: [["Microfinance", "small loans and savings services for people and small businesses."], ["Total repaid", "all the money you pay back, including interest and fees."], ["Joint liability", "group members must pay for a member who does not repay."], ["Credit bureau", "a company that records how people repay loans; lenders check it."]],
          slides: [
            { title: "Who lends", bullets: ["Microfinance banks and institutions, often to groups", "Licensed by the central bank (CBN, CBK, Bank of Ghana)", "XOF countries: BCEAO rules"] },
            { title: "Compare the total repaid", bullets: ["Ask for it in writing, with all fees", "Example: KES 1,000 x 12 weeks = KES 12,000", "Cost = KES 12,000 - KES 10,000 = KES 2,000"] },
            { title: "Dates and joint liability", bullets: ["Repayment dates must fit your income", "Late fines; credit bureau", "Group loans: you may pay for others"] }
          ],
          sources: [CBN_MFB, CBK_DCP, BOG, BCEAO_SFD],
          tryIt: "Use this example or a real offer: borrow NGN 50,000 and repay NGN 4,800 a week for 12 weeks. Work out the total repaid and the cost. Then write whether weekly payments fit your income.",
          youCanNow: "work out the total you will repay on a loan and check that the dates fit your income before you sign.",
          quickCheck: [
            { objective: "O5", q: "You borrow GHS 1,000 and repay GHS 120 a month for 10 months. What is the total repaid?", options: ["GHS 1,000", "GHS 1,120", "GHS 1,200", "GHS 120"], answer: 2, why: "120 x 10 = 1,200." },
            { objective: "O5", q: "In a group loan with joint liability, one member stops paying. What may happen?", options: ["Nothing", "The other members must pay for that member", "The lender cancels the loan", "Only the group chair pays"], answer: 1, why: "Joint liability means members cover each other's unpaid loans." }
          ]
        },
        {
          title: "Ponzi schemes, fake lenders and your plan",
          objectives: ["O6", "O2"],
          minutes: 6,
          goal: "Identify the warning signs of a Ponzi scheme or fake lender and check a provider on the regulator's list.",
          text: [
            "A Ponzi scheme pays early members with new members' money. It always collapses, and most people lose their savings. Warning signs: promises to double your money or guaranteed high returns in a short time, pressure to recruit friends and family, rewards for recruiting, a business nobody can explain, and promotion through WhatsApp, TikTok, Instagram or Telegram groups and influencers. Nigeria's SEC has warned about such schemes many times.",
            "Fake lenders and loan apps: they ask for a fee before giving the loan, ask for your PIN or password, demand access to all your phone contacts, or threaten and shame borrowers. Real lenders never need your PIN.",
            "Check before you pay or share details. Look up the provider on the regulator's official list: SASRA for deposit-taking SACCOs and the Central Bank of Kenya for microfinance banks and digital lenders in Kenya; the CBN for microfinance banks and the FCCPC list of approved digital lenders in Nigeria; the Bank of Ghana's list of licensed institutions; the BCEAO and national ministries of finance in XOF countries. If it is not on the list, do not use it.",
            "Then finish your plan: goal, total, date, amount per week or month, where you save, and your check-sheet answers about the group or institution."
          ],
          steps: ["Ask: does it promise guaranteed or very high returns fast?", "Ask: does it pay me to recruit others?", "Ask: does it want a fee first, or my PIN?", "Look it up on the regulator's official list.", "Not on the list, or any warning sign: do not pay.", "Write your monthly savings plan and check sheet."],
          words: [["Ponzi scheme", "a fraud that pays old members with new members' money until it collapses."], ["Regulator", "the official body that licenses and supervises financial providers, such as a central bank."], ["Licensed", "officially allowed by the regulator to do this business."]],
          slides: [
            { title: "Ponzi warning signs", bullets: ["\"Double your money\"; guaranteed high returns", "Rewards for recruiting friends", "A business no one can explain; pushed on social media"] },
            { title: "Fake lender signs", bullets: ["Fee before the loan", "Asks for your PIN or password", "Wants all your contacts; threatens borrowers"] },
            { title: "Check the official list", bullets: ["Kenya: SASRA, CBK", "Nigeria: CBN, FCCPC approved lenders", "Ghana: Bank of Ghana; XOF: BCEAO"] },
            { title: "Finish your plan", bullets: ["Goal, total, date, amount per month", "Where you save", "Check-sheet answers"] }
          ],
          sources: [SEC_NG, SASRA, CBK_DCP, FCCPC, BOG, BCEAO_SFD],
          tryIt: "Final task: write your monthly savings plan with goal, total, date, amount per week or month and where you will save it. Add the check sheet: the group's rules, how cash and records are kept, the licence (checked on the regulator's list if needed) and any loan's total cost.",
          youCanNow: "spot a Ponzi scheme or fake lender, check a provider on the official list, and follow your written savings plan.",
          quickCheck: [
            { objective: "O6", q: "A WhatsApp group promises to double your money in 30 days and pays you for each friend you bring. What is it?", options: ["A savings group", "A licensed microfinance bank", "A rotating group", "The signs of a Ponzi scheme"], answer: 3, why: "Fast guaranteed returns and recruiting rewards are classic Ponzi signs." },
            { objective: "O6", q: "A loan app asks for a \"processing fee\" before it sends the loan. What do you do?", options: ["Do not pay; check it on the regulator's list", "Pay quickly before the offer ends", "Pay half", "Give your PIN instead"], answer: 0, why: "A fee before the loan is a fake-lender sign; check the official list first." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Records, loans and staying safe",
        questions: [
          { objective: "O4", q: "What should happen to every contribution at a meeting?", options: ["The treasurer takes it home to count", "It is counted in front of members and written in the passbook and record book", "It is written down next week", "It goes straight to the chair's phone"], answer: 1, why: "Counting and recording in front of members keeps records honest." },
          { objective: "O4", q: "A group account should need:", options: ["Only the treasurer's signature", "No signatures", "Two or more signatories", "A new PIN for every member"], answer: 2, why: "More than one signatory stops one person from taking the money." },
          { objective: "O5", q: "What is the best way to compare two loans?", options: ["The friendliest loan officer", "The interest rate in the advert", "The fastest approval", "The total you will repay, with all fees, and dates that fit your income"], answer: 3, why: "The total repaid shows the real cost; the dates show whether you can pay." },
          { objective: "O6", q: "Where do you check that a SACCO in Kenya may take deposits?", options: ["SASRA's list of licensed deposit-taking SACCOs", "A Facebook page", "The SACCO's own flyer only", "A friend's word"], answer: 0, why: "SASRA licenses deposit-taking SACCOs and publishes the list." },
          { objective: "O6", q: "Which is a warning sign of a fake lender?", options: ["Gives the total cost in writing", "Asks for your PIN or a fee before the loan", "Is on the central bank's list", "Explains late fines"], answer: 1, why: "Real lenders never need your PIN and do not charge a fee before lending." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Savings Groups and Microfinance (Chamas, VSLAs, Tontines, Esusu)",
    questions: [
      { objective: "O1", q: "Esusu, susu, tontine and gam'eya are usually:", options: ["Microfinance banks", "Rotating savings groups", "Loan apps", "Insurance companies"], answer: 1, why: "They are local names for groups where members take the pot in turn." },
      { objective: "O1", q: "What does a saving-and-lending group do that a rotating group does not?", options: ["Lends the savings to members and shares out with earnings", "Gives each member the pot in turn", "Never meets", "Has no rules"], answer: 0, why: "A VSLA or ASCA keeps a loan fund and shares out savings plus service charges." },
      { objective: "O1", q: "Which is a risk of a rotating group?", options: ["It pays high interest", "It is licensed by the central bank", "It has a three-lock box", "Members who took the pot early may stop paying"], answer: 3, why: "Early takers who stop paying hurt the members still waiting." },
      { objective: "O2", q: "You need XOF 60,000 in 12 weeks. How much each week?", options: ["XOF 6,000", "XOF 12,000", "XOF 4,000", "XOF 5,000"], answer: 3, why: "60,000 divided by 12 is 5,000." },
      { objective: "O2", q: "\"Pay yourself first\" means:", options: ["Buy yourself a gift", "Pay the group chair first", "Borrow before you save", "Save on the day money comes in, before other spending"], answer: 3, why: "Saving first makes it happen before the money is spent." },
      { objective: "O2", q: "Your plan needs EGP 900 a month but you can only save EGP 600. What can you do?", options: ["Borrow from a loan app", "Give up saving", "Move the date later, lower the goal or cut spending", "Join a scheme that doubles money"], answer: 2, why: "Change the date, the goal or your spending until the plan fits." },
      { objective: "O2", q: "Why keep emergency money separate from your goal savings?", options: ["So a sudden problem does not empty your goal", "Because banks require it", "To pay group fines", "It earns more"], answer: 0, why: "A separate emergency amount protects the goal from surprises." },
      { objective: "O3", q: "What is a group's constitution?", options: ["The chair's diary", "A loan app", "The written rules members agree and follow", "The cash box"], answer: 2, why: "The constitution or by-laws are the group's written rules." },
      { objective: "O3", q: "Which rule tells you what happens if a member's loan is not repaid?", options: ["The meetings rule", "The loan rule", "The share-out rule", "None of the rules"], answer: 1, why: "The loan rules cover who borrows, how much and what happens if a loan is not repaid." },
      { objective: "O3", q: "A group's rules do not say how a member leaves. What do you do?", options: ["Ask the group to add a leaving rule before you join", "Join anyway", "Leave without telling anyone", "Take your savings from the box"], answer: 0, why: "A missing rule is a question to settle before you trust the group with money." },
      { objective: "O4", q: "What is a passbook?", options: ["A member's book showing their savings and loans", "A passport", "A bank card", "A loan app"], answer: 0, why: "Each member's passbook shows their own savings and loans." },
      { objective: "O4", q: "At the end of each meeting:", options: ["The chair keeps the cash at home without counting", "The cash counted must match the record book", "Records are thrown away", "Only the treasurer reads the totals"], answer: 1, why: "Cash and records must match, with totals read aloud." },
      { objective: "O4", q: "Why read totals aloud at meetings?", options: ["To make meetings longer", "To show off", "So every member hears and can agree the figures", "Because it is a law everywhere"], answer: 2, why: "Reading aloud lets every member, including those who cannot read, check the figures." },
      { objective: "O5", q: "You borrow MAD 2,000 and repay MAD 250 a month for 10 months. What does the loan cost?", options: ["MAD 250", "MAD 2,500", "MAD 2,000", "MAD 500"], answer: 3, why: "Total repaid 2,500 minus 2,000 borrowed = 500." },
      { objective: "O5", q: "You earn mainly after harvest or in the busy season. What should you check in a loan?", options: ["The colour of the form", "The officer's phone model", "Nothing", "The repayment dates against your income"], answer: 3, why: "Repayment dates must fit when money comes in." },
      { objective: "O5", q: "Joint liability means:", options: ["Members pay for a member who does not repay", "The bank pays your loan", "No one repays", "You can borrow twice"], answer: 0, why: "In joint liability, the group covers unpaid loans." },
      { objective: "O5", q: "What should a lender give you before you sign?", options: ["A free phone", "Only the interest rate", "The total to repay, in writing, with all fees and dates", "Your neighbour's loan record"], answer: 2, why: "The written total and dates let you compare and plan." },
      { objective: "O6", q: "Which is a Ponzi warning sign?", options: ["Written rules", "Guaranteed high returns quickly and rewards for recruiting", "Members read totals aloud", "A three-lock cash box"], answer: 1, why: "Fast guaranteed returns and recruiting rewards are classic Ponzi signs." },
      { objective: "O6", q: "In Nigeria, where do you check whether a loan app is approved?", options: ["The app's own reviews", "A WhatsApp group", "A TikTok video", "The FCCPC list of registered digital lenders"], answer: 3, why: "The FCCPC publishes the registration status of digital money lenders." },
      { objective: "O6", q: "A provider is not on the regulator's list. What do you do?", options: ["Use it only for small amounts", "Pay if a friend recommends it", "Do not use it", "Give them your PIN to check"], answer: 2, why: "Unlisted providers are not supervised; your money is not protected." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 5, 7, 10, 13, 15, 17, 18] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Clear goal and sum", objective: "O2", notYet: "No total or date, or the amount per month does not add up to the goal.", meets: "Goal, total, date and amount per week or month, with arithmetic that adds up.", exceeds: "Also checked against a bad month's income and keeps emergency money separate." },
      { name: "Right kind of saving", objective: "O1", notYet: "No place to save chosen, or no reason.", meets: "Names where the money will be saved and gives one reason it fits the goal and one risk.", exceeds: "Compares two options (for example a rotating group and a SACCO) before choosing." },
      { name: "Group rules checked", objective: "O3", notYet: "Rules not seen or fewer than four of the seven points checked.", meets: "At least six of the seven rule points checked, with missing ones listed as questions.", exceeds: "All seven checked and the missing rules raised with the group." },
      { name: "Records and cash safety", objective: "O4", notYet: "Does not say how cash and records are kept.", meets: "Says how cash is kept (three-lock box or account with two or more signatories) and that totals are read aloud.", exceeds: "Includes a sample record table that balances." },
      { name: "Loan cost and safety", objective: "O5", notYet: "A loan is planned without the total repaid.", meets: "Any loan has the total repaid, the cost and dates checked against income; or the plan has no loan.", exceeds: "Also notes late fines, credit reporting and joint liability." },
      { name: "Licence and scam check", objective: "O6", notYet: "An unlicensed provider or a scheme with warning signs is in the plan.", meets: "Any institution that takes deposits or lends as a business was checked on the regulator's official list, and no warning signs are present.", exceeds: "Names the list used and the date checked." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who report, at 30 days, saving each week or month by their plan",
      "Partner groups that adopt written rules, passbooks and read-aloud totals",
      "Learners who report refusing a Ponzi scheme or unlicensed lender within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Paper, pen and a phone calculator",
      "A group's constitution or rules, if the learner is in a group",
      "The regulator's official list for your country (SASRA, CBK, CBN, FCCPC, Bank of Ghana, BCEAO), opened once on a phone or printed",
      "About 60 to 75 minutes in total, in short sessions"
    ],
    facilitatorNotes: [
      "Ideal for running inside an existing chama, VSLA, susu, tontine or women's group: one lesson per meeting, with the pre-test at the first meeting.",
      "Use the group's own rules as the practice text in Lesson 3, and a mock meeting with play money in Lesson 4.",
      "Do not recommend any particular bank, SACCO, app or scheme; teach learners to check the regulator's list themselves.",
      "Check the regulators' lists are current before the session; names and web addresses can change.",
      "Never ask learners to share PINs, passwords or real account balances in the group."
    ]
  }
};
