"use strict";

// Koach Learn course: Africa: Life and Work -> "Women Entrepreneurs: Starting and Growing a Business" (owner, 30 October 2026: "are there any more courses africans can use to support there lives").
// Written in the ADDIE format (model: re-entry/reentry-ai-digital-confidence.js). For women across Africa who run, or want to start, a small business: choosing an idea that fits their life,
// testing it cheaply, pricing for profit and paying themselves, planning time and family support, finding finance and support safely (and keeping control of their own money), and growing through
// networks and a six-month plan. It does not repeat afr-savings-groups-microfinance (how groups and microfinance work), afr-selling-online or afr-register-small-business; it points to them.
// Programme names and terms change: the course names the body and tells students to check its official site. No financial advice; all money figures are examples.

const UNWOMEN = { name: "UN Women: economic empowerment (unpaid care work, access to assets and finance)", url: "https://www.unwomen.org/en/what-we-do/economic-empowerment" };
const WEF = { name: "Women Enterprise Fund, Kenya (government fund for women's enterprises)", url: "https://wef.co.ke/" };
const SMEDAN = { name: "SMEDAN, Nigeria: free registration, SME Digital Academy and programmes including the Women In Self-employment Programme", url: "https://smedan.gov.ng/" };
const DERFJ = { name: "DER/FJ, Senegal: Délégation générale à l'Entreprenariat Rapide des Femmes et des Jeunes (formalisation, training, financing)", url: "https://der.sn/" };
const GEA = { name: "Ghana Enterprises Agency: support for micro and small enterprises", url: "https://gea.gov.gh/" };
const AFAWA = { name: "African Development Bank: AFAWA, Affirmative Finance Action for Women in Africa", url: "https://www.afdb.org/en/topics-and-sectors/initiatives-partnerships/affirmative-finance-action-for-women-in-africa" };

module.exports = {
  id: "afr-women-entrepreneurs",
  category: "Africa: Life and Work",
  name: "Women Entrepreneurs: Starting and Growing a Business",
  skills: "Choosing a business idea that fits your life, Testing an idea with real customers, Pricing for profit and paying yourself, Planning time and family support, Finding finance and support safely, Building a network and a growth plan",
  outcome: "start or grow a small business that fits your life: choose an idea, test it with real customers, set prices that make a profit and pay yourself, plan your week with the support you need, find safe finance and support, and write a six-month growth plan.",
  about: [
    "Women run a large share of small businesses across Africa: in markets, salons, kitchens, farms, shops and online. Many do it while caring for children and family, often with less access to loans, land and time. This course is for women in Kenya, Nigeria, Ghana, Senegal, Cameroon, Egypt and across Africa who want to start a business or make the one they have earn more.",
    "You will choose an idea that fits your skills, time and local demand, test it cheaply before spending big, price your product so it makes a profit and pays you, plan your week and the help you need at home, find finance and support programmes and check they are real, and build a network and a six-month plan.",
    "Each lesson takes about five minutes and ends with a \"Try it now\" task for your own business. Money figures are examples only. The course explains options; it is not financial advice. For more detail, see the courses on savings groups, selling online and registering a business in this category."
  ],
  finalTask: "Write a one-page business plan for yourself: your chosen idea with its scores, what you learned from testing it with real customers, the cost, price and profit for one product and what you will pay yourself, a weekly time plan with who helps, one finance or support option you checked on its official site, and three goals for the next six months with one mentor or group to contact.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Women across Africa, in towns and villages, who run or want to start a small business: traders, caterers, tailors, hairdressers, farmers who process and sell, shop owners and online sellers. Ages and education vary widely; many are mothers and carers.",
    startingPoint: "Many already earn some money from selling or a skill, and many belong to a savings group. Few test ideas before spending, cost their products fully, pay themselves a set amount or write goals. Some do not control the money they earn or keep their mobile money PIN private.",
    gap: "Women entrepreneurs often have less time, less access to finance and fewer business contacts, and many businesses stay small or close because prices do not cover costs or the owner is overloaded. Learners need to choose and test ideas wisely, price for profit, plan their time and support, reach real finance and programmes safely, and grow through networks.",
    constraints: [
      "Reading level: plain words and short sentences; many learners speak English as a second language (the course is also offered in French and Arabic)",
      "Time: heavy care and household work; 4 to 6 minute lessons that fit around it",
      "Devices: a basic phone, sometimes shared with family; costly data",
      "Money: small budgets; no financial advice; programme names and terms change, so learners check official sites",
      "Safety: scams that ask women for a fee to get a grant or loan; some women face pressure or control over their money"
    ],
    prerequisites: "None. Helpful: \"Savings Groups and Microfinance\" in this category."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Given two or three business ideas", action: "score each idea on your skills, time, start-up cost and local demand, and choose one", standard: "using the same scores for every idea and writing why the winner fits" },
    { id: "O2", condition: "Before spending most of your money on a new idea", action: "test the idea with a small batch and at least ten real customers", standard: "writing down how many bought, the price they paid and one change to make" },
    { id: "O3", condition: "Given the costs of one product or service", action: "calculate the cost per item, set a price with a profit, and set an amount to pay yourself", standard: "with every cost included and the arithmetic correct" },
    { id: "O4", condition: "Given your work and home duties for one week", action: "draw up a weekly time plan that shows business hours, care duties and who will help", standard: "agreed with at least one family member or helper" },
    { id: "O5", condition: "When you look for a loan, grant or support programme", action: "check that the offer is real on the official site and keep control of your own money and PIN", standard: "paying no \"processing fee\" to strangers and sharing your PIN with no one" },
    { id: "O6", condition: "For the next six months", action: "write three measurable business goals and name one mentor, group or association to contact", standard: "each goal with a number and a date" }
  ],
  chapters: [
    {
      name: "Chapter 1: Starting right",
      lessons: [
        {
          title: "Choosing a business that fits your life",
          objectives: ["O1"],
          minutes: 5,
          goal: "Score two or three business ideas and choose the one that fits you best.",
          text: [
            "The best business for you is one that people nearby want, that uses skills you have, and that fits the time and money you really have. A business that needs you at the market from 5 am may not fit if you take children to school.",
            "Write two or three ideas. Score each from 1 (poor) to 3 (good) on four things: your skills, the time it needs compared with the time you have, the start-up cost compared with the money you have, and local demand (do people buy this nearby, and is there room for one more seller?). Add the scores.",
            "Example: Halima in Kaduna scores three ideas. Selling kunu drinks near a school: skills 3, time 2, cost 3, demand 3 = 11. Tailoring: skills 2, time 2, cost 1, demand 2 = 7. Selling phone credit: skills 2, time 3, cost 2, demand 1 = 8 (many sellers already). She chooses the drinks. Aïcha in Dakar might score a thiakry dessert stall, hair braiding and a small boutique the same way.",
            "Scores help you think; they do not decide for you. Also ask: would I enjoy this, and can I grow it later?"
          ],
          steps: ["Write two or three ideas.", "Score each 1 to 3 on skills, time, start-up cost and local demand.", "Add the scores.", "Choose one and write why it fits your life."],
          words: [["Start-up cost", "the money you need to begin: tools, first stock, a stall or a licence."], ["Demand", "how many people want to buy something, and how much."]],
          slides: [
            { title: "A business that fits you", bullets: ["People nearby want it", "Uses skills you have", "Fits your real time and money"] },
            { title: "Score each idea 1 to 3", bullets: ["Your skills", "Time it needs vs time you have", "Start-up cost vs money you have", "Local demand"] },
            { title: "Example: Halima in Kaduna", bullets: ["Kunu drinks near a school: 11", "Tailoring: 7", "Phone credit: 8, too many sellers"] },
            { title: "Then ask yourself", bullets: ["Would I enjoy this?", "Can I grow it later?"] }
          ],
          tryIt: "Write two or three business ideas. Score each 1 to 3 on skills, time, start-up cost and local demand, add the scores, and write one sentence on why your top idea fits your life.",
          youCanNow: "compare business ideas with simple scores and choose one that fits your life.",
          quickCheck: [
            { objective: "O1", q: "Which four things do you score each idea on?", options: ["Colour, name, logo, shop size", "Skills, time, start-up cost and local demand", "What friends like, weather, music, fashion", "Only how much money it might make"], answer: 1, why: "Skills, time, cost and demand show whether an idea fits you and your market." },
            { objective: "O1", q: "An idea scores high on skills but there are already ten sellers on your street. Which score is low?", options: ["Skills", "Time", "Local demand", "Start-up cost"], answer: 2, why: "Many sellers nearby means less room for one more, so demand is low." }
          ]
        },
        {
          title: "Testing your idea with real customers",
          objectives: ["O2"],
          minutes: 5,
          goal: "Test an idea with a small batch and at least ten real customers before spending big.",
          text: [
            "Many businesses fail because the owner spends all her savings before knowing if people will buy. Test small first: make or buy a small batch, offer it to real customers, and watch what happens.",
            "Make a small batch, for example 20 cups of zobo, 5 dresses or 10 hair appointments. Offer it to at least ten people who are not close family. Write down: how many bought, the price they paid, what they liked, and what they asked for. People's actions matter more than polite words: \"I will buy next week\" is not a sale.",
            "Example: Esther in Kisumu tests liquid soap. She makes 15 bottles, sells 12 at KES 150 (an example price), and three customers ask for a bigger bottle. Her change: add a bigger size. A woman in Alexandria testing home-made pickles could do the same with neighbours and a small shop.",
            "After the test, decide: go ahead, change something, or try your next idea. A test that fails costs little and saves you a lot."
          ],
          steps: ["Make or buy a small batch.", "Offer it to at least ten people who are not close family.", "Write how many bought, the price, what they liked and what they asked for.", "Decide: go ahead, change one thing, or try the next idea."],
          words: [["Small batch", "a small amount made or bought to test before making more."], ["Test", "trying an idea on a small scale to learn before spending a lot."]],
          slides: [
            { title: "Test before you spend big", bullets: ["Do not spend all your savings first", "Make a small batch", "Offer it to real customers"] },
            { title: "Write down", bullets: ["How many bought", "The price they paid", "What they liked and asked for"] },
            { title: "Actions beat polite words", bullets: ["\"I will buy next week\" is not a sale", "Count real sales", "Ask people who are not close family"] },
            { title: "After the test", bullets: ["Go ahead", "Change one thing", "Or try the next idea"] }
          ],
          tryIt: "Plan a test for your chosen idea: what small batch you will make, the price you will try, and ten people you will offer it to this week. After the test, write how many bought and one change to make.",
          youCanNow: "test a business idea cheaply with real customers and decide what to do next.",
          quickCheck: [
            { objective: "O2", q: "What is the best proof that customers want your product?", options: ["Your mother says it is nice", "Friends say they will buy next month", "You like it a lot", "People who are not family pay for it"], answer: 3, why: "Real sales to real customers show true demand." },
            { objective: "O2", q: "Your test sells 3 of 20 items. What is a good next step?", options: ["Ask buyers what to change, change one thing, and test again", "Spend all your savings on more stock", "Give up on business forever", "Double the price"], answer: 0, why: "A weak test is a cheap lesson: learn, change one thing and try again." }
          ]
        },
        {
          title: "Pricing for profit and paying yourself",
          objectives: ["O3"],
          minutes: 6,
          goal: "Calculate the cost per item, set a price with profit, and set an amount to pay yourself.",
          text: [
            "Many women underprice, especially when selling to neighbours, and work hard for no real profit. Count every cost: ingredients or materials, packaging, transport, charcoal or gas, phone data, a stall fee, and your own time.",
            "Cost per item = total cost of a batch divided by the number of items. Then add a profit. Example from Kumasi: Abena makes 40 meat pies. Flour, meat, oil and gas cost GHS 160, bags GHS 10 and transport GHS 10: GHS 180 in total, so GHS 4.50 per pie. She sells at GHS 7 (example figures), so each pie earns GHS 2.50 profit. Check that customers will pay your price by looking at similar sellers.",
            "Pay yourself. Decide a set amount you take from the business each week, and leave the rest in the business for stock and growth. If you take everything, the business cannot grow; if you take nothing, you are working for free. Write what you take in your records.",
            "If your price does not cover your costs, change something: a smaller size, a better supplier, buying in bulk with others, or a higher price for better quality."
          ],
          steps: ["List every cost of one batch, including transport, fuel, data and fees.", "Divide the total by the number of items to get the cost per item.", "Add a profit to set the price; compare with similar sellers.", "Decide a set weekly amount to pay yourself; leave the rest in the business."],
          words: [["Cost per item", "the total cost of a batch divided by the number of items made."], ["Profit", "the money left after all costs are paid."], ["Paying yourself", "a set amount the owner takes from the business, so the rest stays for stock and growth."]],
          slides: [
            { title: "Count every cost", bullets: ["Materials and packaging", "Transport, fuel, data, stall fee", "Your own time"] },
            { title: "Cost per item", bullets: ["Total batch cost / number of items", "Abena: GHS 180 / 40 pies = GHS 4.50", "Sells at GHS 7 = GHS 2.50 profit (example)"] },
            { title: "Pay yourself a set amount", bullets: ["Take a fixed amount each week", "Leave the rest for stock and growth", "Write it in your records"] },
            { title: "Price too low?", bullets: ["Smaller size or better supplier", "Buy in bulk with others", "Higher price for better quality"] }
          ],
          tryIt: "Pick one product. List every cost of one batch, work out the cost per item, set a price with a profit, and decide how much you will pay yourself each week.",
          youCanNow: "price a product so it makes a profit and pay yourself a set amount.",
          quickCheck: [
            { objective: "O3", q: "A batch of 20 bags costs 10,000 NGN in total. What is the cost per bag?", options: ["200 NGN", "20 NGN", "500 NGN", "10,000 NGN"], answer: 2, why: "10,000 divided by 20 is 500 NGN per bag." },
            { objective: "O3", q: "Why pay yourself a set amount instead of taking all the money?", options: ["So you never earn anything", "So money stays in the business for stock and growth", "So customers pay more", "It is required by every bank"], answer: 1, why: "A set amount pays you and leaves money to keep the business going and growing." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Starting right",
        questions: [
          { objective: "O1", q: "Idea A scores 11 and idea B scores 7, but you hate idea A. What do you do?", options: ["Always pick the highest score", "Pick neither and stop", "Score again until B wins", "Use the scores to think, and also ask if you would enjoy it"], answer: 3, why: "Scores help you think; enjoying the work also matters." },
          { objective: "O2", q: "Who should you offer your test batch to?", options: ["At least ten people who are not close family", "Only your husband", "Only your best friend", "Nobody; just guess"], answer: 0, why: "Real customers give honest answers by what they buy." },
          { objective: "O2", q: "Why test with a small batch?", options: ["To spend more money", "To learn before spending big", "Because big batches are illegal", "To avoid customers"], answer: 1, why: "A small test costs little and shows whether people will buy." },
          { objective: "O3", q: "Which cost do many sellers forget?", options: ["Main ingredients", "The product itself", "Transport, fuel, data and their own time", "The selling price"], answer: 2, why: "Small costs like transport and fuel add up and eat the profit." },
          { objective: "O3", q: "Cost per item is GHS 4.50 and the price is GHS 7. What is the profit per item?", options: ["GHS 11.50", "GHS 7", "GHS 4.50", "GHS 2.50"], answer: 3, why: "7 minus 4.50 is 2.50." }
        ]
      }
    },
    {
      name: "Chapter 2: Growing strong",
      lessons: [
        {
          title: "Making time: family, care and support",
          objectives: ["O4"],
          minutes: 5,
          goal: "Draw up a weekly time plan with business hours, care duties and who helps.",
          text: [
            "Women in many places do most of the unpaid care work at home: cooking, cleaning, fetching water, and caring for children, the sick and elders. UN Women notes this leaves women less time for paid work. A business needs time too, so plan it.",
            "Draw a week: seven days and morning, afternoon and evening. Mark care duties, then your business hours: buying stock, making, selling, answering messages and records. Look for clashes and gaps.",
            "Then ask for help. Talk with your husband or partner, older children, a sister or a neighbour about sharing tasks such as fetching water, school runs or cooking on busy market days. Some women swap childcare with other mothers, or work near home on some days. Example: Mariam in Yaoundé sells at the market Tuesday, Friday and Saturday; her sister takes the children on those mornings and Mariam does her sister's hair in return.",
            "Show the plan to your family and agree on it. Look after yourself too: rest and health keep the business going."
          ],
          steps: ["Draw seven days with morning, afternoon and evening.", "Mark care and household duties.", "Mark business hours: buying, making, selling, messages, records.", "Find clashes and ask a family member or helper to share tasks.", "Agree the plan together and include rest."],
          words: [["Unpaid care work", "work at home that is not paid, such as cooking, cleaning and caring for children, the sick and elders."], ["Childcare swap", "mothers taking turns to look after each other's children."]],
          slides: [
            { title: "Your time is part of the business", bullets: ["Women do most unpaid care work", "A business needs time too", "So plan it"] },
            { title: "Draw your week", bullets: ["Seven days: morning, afternoon, evening", "Mark care duties", "Mark business hours", "Find clashes"] },
            { title: "Ask for help", bullets: ["Partner, older children, sister, neighbour", "Share water, school runs, cooking", "Swap childcare with other mothers"] },
            { title: "Agree it together", bullets: ["Show the plan to your family", "Include rest and health"] }
          ],
          tryIt: "Draw your weekly time plan with care duties and business hours. Mark one clash, write who could help with it, and talk with that person this week.",
          youCanNow: "plan your week so your business and your care duties fit, with the support you need.",
          quickCheck: [
            { objective: "O4", q: "Your market day clashes with the school run. What is a good step?", options: ["Ask a family member or another mother to share the school run", "Close the business", "Skip the market forever", "Leave the children alone"], answer: 0, why: "Sharing tasks frees time for the business without harming the family." },
            { objective: "O4", q: "Why show your time plan to your family?", options: ["To ask permission to exist", "So they can agree and help", "So they can take your money", "It does not matter"], answer: 1, why: "When the family agrees the plan, they are more likely to help." }
          ],
          sources: [UNWOMEN]
        },
        {
          title: "Finding money and support safely",
          objectives: ["O5"],
          minutes: 6,
          goal: "Check that a loan, grant or programme is real and keep control of your money.",
          text: [
            "There are programmes for women and small businesses. Examples: Kenya's Women Enterprise Fund, a government fund for women's enterprises; Nigeria's SMEDAN, whose free registration opens programmes such as the Women In Self-employment Programme; Senegal's DER/FJ, which offers training, formalisation and financing for women and young people; the Ghana Enterprises Agency; and the African Development Bank's AFAWA initiative, which works with banks and lenders to help them lend to women. Savings groups and microfinance are covered in their own course.",
            "Names, rules and open dates change, so always check on the programme's official website or office. Scammers pretend to offer women's grants and loans and ask for a \"processing\" or \"registration\" fee first. A real programme tells you its fees on its official site; never pay a stranger to get a grant.",
            "Keep control of your money. Have your own mobile money line or account in your name, and keep your PIN secret from everyone, including family. A real provider never asks for your PIN. If someone takes your earnings by force or threats, that is abuse; talk to a person you trust, a women's group or a local support service.",
            "Before you borrow, know the total you must repay, when, and what happens if you are late. Borrow for something that will earn money, not to cover daily household costs."
          ],
          steps: ["Find the programme's official website or office.", "Check what it offers, who can apply, and its open dates and fees.", "Refuse anyone who asks for a fee to stranger accounts.", "Keep a mobile money line or account in your own name and a secret PIN.", "Before borrowing, write the total to repay, when, and the late rules."],
          words: [["Grant", "money given for a purpose that does not have to be paid back."], ["Loan", "money borrowed that must be paid back, usually with extra cost (interest)."], ["Advance-fee scam", "a trick where someone promises money but asks you to pay a fee first."]],
          slides: [
            { title: "Support for women's businesses", bullets: ["Kenya: Women Enterprise Fund", "Nigeria: SMEDAN programmes", "Senegal: DER/FJ; Ghana: Ghana Enterprises Agency", "AfDB AFAWA: works through banks and lenders"] },
            { title: "Check it is real", bullets: ["Official website or office only", "Who can apply, dates and fees", "Never pay a stranger to get a grant"] },
            { title: "Keep control of your money", bullets: ["An account or mobile money line in your name", "PIN secret from everyone, even family", "A real provider never asks for your PIN"] },
            { title: "Before you borrow", bullets: ["Total to repay and when", "What happens if you are late", "Borrow to earn, not for daily costs"] }
          ],
          tryIt: "Pick one programme from this lesson or one you know. Find its official website or office, and write what it offers, who can apply, whether it is open now, and the date you checked.",
          youCanNow: "find support for your business, check that it is real, and keep control of your own money.",
          quickCheck: [
            { objective: "O5", q: "A message says you won a women's business grant; pay 5,000 KES \"processing fee\" first. What is this?", options: ["A normal programme step", "A scam; check the official site and pay no stranger", "A loan you must accept", "A tax"], answer: 1, why: "Asking for a fee before giving a grant is a classic advance-fee scam." },
            { objective: "O5", q: "Who should know your mobile money PIN?", options: ["Your husband", "Your best customer", "The agent who calls you", "Only you"], answer: 3, why: "Your PIN protects your money; a real provider never asks for it." }
          ],
          sources: [WEF, SMEDAN, DERFJ, GEA, AFAWA]
        },
        {
          title: "Networks, mentors and a six-month growth plan",
          objectives: ["O6"],
          minutes: 5,
          goal: "Write three measurable goals for six months and name one mentor or group to contact.",
          text: [
            "Many women grow faster with others: a mentor who has done it, a women's business association, a market or trade association, a cooperative, a chamber of commerce or a business support centre. They share buyers, suppliers, advice and courage.",
            "A mentor is someone more experienced who gives you advice. Ask a woman you admire for 20 minutes of advice, with two clear questions. Join one group where your customers or suppliers meet. Attend a trade fair or market day in a bigger town when you can.",
            "Then write three goals for the next six months. Make each one measurable, with a number and a date: \"Sell 60 bottles of soap a week by the end of March\", \"Save GHS 500 for a second sewing machine by June\" (an example figure), \"Get five new shop customers by May\". Check your goals once a month and write what you did.",
            "Example: Ngozi in Enugu, who sells Ankara bags, joins a women's traders association, finds a mentor who exports bags, and sets goals for sales, savings and her first stall at a trade fair."
          ],
          steps: ["List people and groups who could help: mentors, associations, cooperatives, support centres.", "Choose one to contact this month, with two clear questions.", "Write three goals, each with a number and a date.", "Check your goals once a month and write what you did."],
          words: [["Mentor", "an experienced person who gives you advice and support."], ["Measurable goal", "a goal with a number and a date, so you can see if you reached it."], ["Association", "a group of people in the same trade or situation who support each other."]],
          slides: [
            { title: "Grow with others", bullets: ["Mentors and women's associations", "Trade groups, cooperatives, chambers", "Business support centres"] },
            { title: "Find a mentor", bullets: ["A woman you admire", "Ask for 20 minutes", "Bring two clear questions"] },
            { title: "Three measurable goals", bullets: ["Each with a number and a date", "Sales, savings, new customers", "Check them once a month"] }
          ],
          tryIt: "Final task: write your one-page business plan with your scored idea, test results, price and profit, what you pay yourself, your weekly time plan, one checked support option, three six-month goals and one mentor or group to contact.",
          youCanNow: "build a network and write a six-month growth plan with measurable goals.",
          quickCheck: [
            { objective: "O6", q: "Which goal is measurable?", options: ["\"Do better\"", "\"Be famous\"", "\"Sell 40 dresses a month by the end of June\"", "\"Work hard\""], answer: 2, why: "It has a number and a date, so you can check if you reached it." },
            { objective: "O6", q: "How do you ask a possible mentor for help?", options: ["Ask for 20 minutes with two clear questions", "Ask her to give you money", "Ask her to run your business", "Never ask; wait for her"], answer: 0, why: "A short, clear request respects her time and gets useful advice." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Growing strong",
        questions: [
          { objective: "O4", q: "What is unpaid care work?", options: ["Work at a bank", "Work at home that is not paid, such as cooking and caring for children", "Selling at the market", "A government job"], answer: 1, why: "Unpaid care work is household and caring work that takes time but earns no pay." },
          { objective: "O4", q: "A weekly time plan should show:", options: ["Only business hours", "Only rest", "Business hours, care duties and who helps", "Only your children's school times"], answer: 2, why: "Seeing all of it together shows clashes and where help is needed." },
          { objective: "O5", q: "Where do you check if a women's loan programme is real?", options: ["Its official website or office", "A forwarded message", "A stranger on the phone", "A social media comment"], answer: 0, why: "Only the official source shows the real programme, its dates and fees." },
          { objective: "O5", q: "Before borrowing, what must you know?", options: ["Only the lender's name", "Only how fast you get it", "Nothing; just sign", "The total to repay, when, and what happens if you are late"], answer: 3, why: "Knowing the full cost and the late rules protects you from debt you cannot repay." },
          { objective: "O6", q: "How often should you check your six-month goals?", options: ["Never", "Once a month", "Only at the end of six months", "Every ten years"], answer: 1, why: "A monthly check shows progress early, so you can change course." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Women Entrepreneurs: Starting and Growing a Business",
    questions: [
      { objective: "O1", q: "A good business for you is one that:", options: ["Fits your skills, time, money and local demand", "Your neighbour already does well", "Needs the most money", "Is the most famous"], answer: 0, why: "A business that fits you and your market is more likely to last." },
      { objective: "O1", q: "Start-up cost means:", options: ["Your weekly profit", "The money you need to begin", "The price customers pay", "A loan you must take"], answer: 1, why: "It is the money for tools, first stock, a stall or a licence." },
      { objective: "O1", q: "Why score each idea on the same four things?", options: ["To make it longer", "To make every idea win", "So you can compare the ideas fairly", "Because the bank needs it"], answer: 2, why: "The same scores for every idea make the comparison fair." },
      { objective: "O2", q: "\"I will buy next week\" from a friend is:", options: ["A sale", "A contract", "A loan", "Not a sale yet; count real purchases"], answer: 3, why: "Only real purchases prove demand." },
      { objective: "O2", q: "During a test, you write down:", options: ["How many bought, the price, and what they liked and asked for", "Only your costs", "Nothing", "Only your friends' names"], answer: 0, why: "These notes show demand and what to improve." },
      { objective: "O2", q: "After a test you can:", options: ["Only give up", "Go ahead, change one thing, or try the next idea", "Only spend all your savings", "Only double the price"], answer: 1, why: "A test helps you choose your next step wisely." },
      { objective: "O3", q: "Cost per item is:", options: ["The price you hope for", "Your neighbour's price", "The total batch cost divided by the number of items", "Your profit"], answer: 2, why: "Dividing the batch cost by the items gives the cost of each." },
      { objective: "O3", q: "A batch costs 30,000 XAF and makes 60 items. The cost per item is:", options: ["600 XAF", "60 XAF", "1,800 XAF", "500 XAF"], answer: 3, why: "30,000 divided by 60 is 500 XAF." },
      { objective: "O3", q: "If your price does not cover your costs, you can:", options: ["Change size, supplier, buy in bulk with others or raise the price for quality", "Keep selling at a loss forever", "Stop recording costs", "Borrow to cover it every week"], answer: 0, why: "Changing costs or price is how you get back to a profit." },
      { objective: "O3", q: "Paying yourself a set amount each week means:", options: ["Taking all the money", "Taking nothing ever", "Taking a fixed amount and leaving the rest for the business", "Paying your customers"], answer: 2, why: "A set amount pays you and keeps the business funded." },
      { objective: "O4", q: "UN Women notes that unpaid care work:", options: ["Is done equally by everyone", "Leaves many women less time for paid work", "Does not exist", "Is paid by the government"], answer: 1, why: "Women do most unpaid care work, which limits their time for business." },
      { objective: "O4", q: "A childcare swap is:", options: ["Mothers taking turns to look after each other's children", "Selling children's clothes", "A school fee", "A bank account"], answer: 0, why: "Taking turns frees time for each mother's work." },
      { objective: "O4", q: "Your time plan should also include:", options: ["No rest at all", "Only work", "Your neighbours' plans", "Rest and health"], answer: 3, why: "Rest keeps you and the business going." },
      { objective: "O5", q: "A grant is:", options: ["A loan with high interest", "Money given for a purpose that you do not pay back", "A fee you pay first", "A tax"], answer: 1, why: "Grants are not repaid; loans are." },
      { objective: "O5", q: "Someone asks for a fee before giving you a women's grant. This is most likely:", options: ["A normal step", "A bank rule", "An advance-fee scam", "A government tax"], answer: 2, why: "Real programmes publish fees on their official site; strangers asking for fees are scammers." },
      { objective: "O5", q: "Who should hold your mobile money PIN?", options: ["Only you", "Your partner", "The provider's caller", "Your eldest child"], answer: 0, why: "Your PIN protects your money; keep it secret from everyone." },
      { objective: "O5", q: "AFAWA, from the African Development Bank, mainly:", options: ["Lends to each woman by WhatsApp", "Charges women a fee by phone", "Replaces all savings groups", "Works with banks and lenders so they lend more to women"], answer: 3, why: "AFAWA works through financial institutions to increase lending to women." },
      { objective: "O6", q: "A mentor is:", options: ["A customer who owes you", "An experienced person who gives advice", "A tax officer", "A loan"], answer: 1, why: "A mentor shares experience to help you grow." },
      { objective: "O6", q: "Which goal has a number and a date?", options: ["\"Grow bigger\"", "\"Be the best\"", "\"Save NGN 50,000 for a freezer by July\"", "\"Try harder\""], answer: 2, why: "A number and a date make the goal measurable." },
      { objective: "O6", q: "Joining a women's or trade association can help you:", options: ["Find buyers, suppliers, advice and support", "Avoid all customers", "Skip your records", "Never need a plan"], answer: 0, why: "Groups share contacts, knowledge and encouragement." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 6, 7, 10, 14, 15, 18] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Idea chosen", objective: "O1", notYet: "One idea with no scores, or scores without reasons.", meets: "Two or three ideas scored on skills, time, cost and demand, with a reason the winner fits.", exceeds: "Also notes how the idea could grow later." },
      { name: "Idea tested", objective: "O2", notYet: "No test, or only family asked.", meets: "A small batch offered to at least ten real customers, with sales, price and one change written down.", exceeds: "The change was made and tested a second time." },
      { name: "Price, profit and pay", objective: "O3", notYet: "Costs missing, wrong arithmetic, or no amount to pay yourself.", meets: "Every cost listed, correct cost per item, a price with profit, and a set weekly amount to pay yourself.", exceeds: "Price compared with similar sellers, with a plan if costs rise." },
      { name: "Time plan and support", objective: "O4", notYet: "No time plan, or no help named.", meets: "A weekly plan with business hours, care duties and who helps, agreed with at least one person.", exceeds: "Includes rest and a backup helper." },
      { name: "Finance and support checked safely", objective: "O5", notYet: "An option from a forwarded message or a stranger, or a PIN shared.", meets: "One option checked on its official site, with who can apply and the date checked; money kept in your own name.", exceeds: "Also writes the total to repay, when, and late rules for any loan." },
      { name: "Goals and network", objective: "O6", notYet: "Vague goals, or no mentor or group named.", meets: "Three goals with numbers and dates, and one mentor or group to contact.", exceeds: "The contact was made and the first monthly check is planned." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who start or test a business, or add a product, within 30 days (follow-up survey)",
      "Learners who report paying themselves a set amount and keeping records after three months",
      "Learners who reach at least one of their six-month goals, and report no loss to grant or loan scams"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Paper, pen and a calculator (a phone calculator is fine)",
      "A phone to check official programme websites",
      "Materials for a small test batch (the learner's own choice)",
      "About 60 minutes in total, in short sessions, plus one or two weeks to run the test"
    ],
    facilitatorNotes: [
      "Run the course with a women's group, savings group or cooperative; meet at times that suit mothers, and allow babies in the room.",
      "Before the course, check which women's and small business programmes are open in your country on their official sites, and bring the addresses.",
      "Never ask learners to share a PIN, balance or account details. Practise spotting grant and loan scams with made-up messages.",
      "Some learners may face pressure or control over their money at home; talk about it with care, in private, and know the local women's support services to refer to.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
