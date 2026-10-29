"use strict";

// Koach Learn course: Agriculture (Africa) -> "Climate-Resilient Agribusiness".
// The business side of climate change for farmers in Africa: a climate-risk assessment in money terms, choosing and costing adaptation investments, climate and green
// finance, mitigation that saves money, carbon credits (with a strong scam warning) and adding climate risk to a business plan. agri-climate-smart already covers
// forecasts and the climate-risk calendar; this course builds on it. Figures in KES, NGN, GHS and XOF are made-up examples. No investment advice.

const FAO_CSA = { name: "FAO: Climate-Smart Agriculture Sourcebook", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };
const CGIAR_MAIZE = { name: "CGIAR: Climate-smart (drought-tolerant) maize", url: "https://www.cgiar.org/innovations/climate-smart-maize/" };
const CBK = { name: "Central Bank of Kenya (lists of licensed banks and microfinance banks)", url: "https://www.centralbank.go.ke" };
const CBN = { name: "Central Bank of Nigeria (licensed institutions and consumer protection)", url: "https://www.cbn.gov.ng" };
const BOA = { name: "Bank of Agriculture, Nigeria", url: "https://www.boanig.com" };
const ADB_GH = { name: "Agricultural Development Bank, Ghana", url: "https://agricbank.com" };
const GCF = { name: "Green Climate Fund (works through governments, banks and accredited agencies, not directly with farmers)", url: "https://www.greenclimate.fund" };
const IRA = { name: "Insurance Regulatory Authority, Kenya (check an insurer is licensed)", url: "https://www.ira.go.ke" };
const ABPP = { name: "SNV/Hivos: Africa Biogas Partnership Programme factsheet (household biodigesters and bio-slurry)", url: "https://snv.org/assets/explore/download/20200526_-_abpp-4bf_factsheet.pdf" };
const FAO_AGROFOR = { name: "FAO: Agroforestry", url: "https://www.fao.org/agroforestry/en/" };
const KE_CARBON = { name: "Kenya: The Climate Change (Carbon Markets) Regulations, 2024 (summary and full text)", url: "https://climate-laws.org/document/the-climate-change-carbon-markets-regulations-2024_e0fd" };
const VERRA = { name: "Verra registry (look up a carbon project by name or ID)", url: "https://registry.verra.org" };
const GOLD = { name: "Gold Standard registry (look up a carbon project by name or ID)", url: "https://registry.goldstandard.org" };

module.exports = {
  id: "agri-climate-resilient-agribusiness",
  category: "Agriculture (Africa)",
  name: "Climate-Resilient Agribusiness",
  skills: "Assessing climate risk in money terms, Costing adaptation investments, Finding and checking climate finance, Cutting costs and emissions together, Spotting carbon credit scams, Writing a climate-resilience plan",
  outcome: "write a one-page climate-resilience plan for your farm business: the climate risks that cost you most, the adaptation investments you will make and what they cost, how you will pay for them, which money-saving practices you will add, and how you will judge any carbon credit offer.",
  about: [
    "This course is for smallholder and growing commercial farmers, young agripreneurs, farmer-group leaders and extension workers in Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire and across Africa who already see climate change on their farms and want to treat it as a business problem with a business plan.",
    "Chapter 1 puts climate risk into money: you assess the risks to your farm business, choose and cost adaptation investments such as drought-tolerant seed, water storage, shade and new enterprises, and learn the kinds of climate finance and green loans and how to check them. Chapter 2 covers practices that cut emissions and costs at the same time, carbon credit schemes and how to avoid scams and unfair contracts, and adding all of this to your business plan.",
    "The course \"Climate-Smart Agriculture\" covers seasonal forecasts and the climate-risk calendar; take it first if you can. All money figures here are made-up examples: use your own local prices. This course explains how finance and contracts work; it does not tell you what to invest in. Read every contract fully and talk to a trusted adviser before you sign. Each lesson takes about five minutes and ends with a task for your own farm."
  ],
  finalTask: "Write a one-page climate-resilience plan for your farm business (or an example farm such as 3 acres of maize and beans with 6 dairy goats in Makueni, 4 hectares of cocoa in Ghana's Western Region, or 2 hectares of rice and groundnuts near Kaolack, Senegal): your top three climate risks with an estimated cost for each; two or three adaptation investments with their cost, yearly benefit and payback; how you will pay (savings, group, loan, grant) with the questions you will ask the lender; at least two practices that cut costs and emissions; your rules for judging any carbon credit offer; and the date you will review the plan.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Smallholder and growing commercial farmers, farm workers, young agripreneurs and extension workers across Africa (Kenya, Nigeria, Ghana and francophone West Africa). Many run mixed farms of crops and animals and sell part of what they grow. Some keep simple records; many do not.",
    startingPoint: "Can name the climate changes they see (late rains, dry spells, heat, floods) and many know some climate-smart practices. Few put a money value on climate risk, compare adaptation investments by payback, or know how to check a green loan or a carbon credit contract.",
    gap: "Climate shocks hit income and loan repayments, but many farmers spend on adaptation without costing it, borrow without comparing the full cost, or sign carbon contracts they do not understand. Learners need to plan climate resilience as a business decision, protect themselves from scams and present a credible plan to lenders, buyers and programmes.",
    constraints: [
      "Reading level: plain words and short sentences; many learners use English as a second language and the course is also available in Spanish, French and Arabic",
      "Devices: a basic or smart phone, paper and a calculator; internet may be slow or costly",
      "Time: 4 to 6 minute lessons that fit around farm work",
      "Money: all figures are examples; no prices, interest rates or subsidies are given as fact",
      "Finance safety: no investment advice; learners never share PINs, IDs or account numbers in practice tasks"
    ],
    prerequisites: "Simple farm records and gross margin help (\"Agribusiness and Farm Management\"). \"Climate-Smart Agriculture\" (forecasts and the climate-risk calendar) is recommended first."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given your farm's enterprises and what happened in the last five seasons", action: "rate the main climate risks to your farm business by how likely they are and how much money they could cost", standard: "listing at least three risks, each with an estimated cost in local currency" },
    { id: "O2", condition: "Given two or three possible adaptation investments", action: "cost each investment and compare its yearly benefit with its cost", standard: "using your own local prices and showing the payback in seasons or years" },
    { id: "O3", condition: "Before you apply for a climate or green loan, grant or programme", action: "list the questions to ask the lender and check that it is licensed", standard: "covering the total cost, repayment dates, conditions and who regulates it" },
    { id: "O4", condition: "Given the practices you use now", action: "identify two practices that cut greenhouse gas emissions and also cut your costs", standard: "naming the input or money each one saves" },
    { id: "O5", condition: "Given a carbon credit offer or contract", action: "check the offer for the warning signs of a scam or an unfair deal", standard: "answering at least four checks before you sign or pay anything" },
    { id: "O6", condition: "Using your work from this course", action: "write a one-page climate-resilience plan for your farm business", standard: "with risks, investments, costs, finance, money-saving practices and a review date" }
  ],
  chapters: [
    {
      name: "Chapter 1: Climate risk is a business risk",
      lessons: [
        {
          title: "A climate-risk assessment for your farm business",
          objectives: ["O1"],
          minutes: 5,
          goal: "Rate the climate risks to your farm business by likelihood and money impact.",
          text: [
            "A climate-risk calendar shows when weather hurts your farm. A climate-risk assessment goes one step further: it asks how much each risk could cost your business, so you know which ones to spend money on first.",
            "For each enterprise (maize, tomatoes, goats, cocoa, tilapia), list the climate hazards: a late start to the rains, a dry spell at flowering, heat stress in animals, floods, strong winds, new pests. Ask two questions about each: How likely is it in the next five seasons (low, medium or high)? And if it happens, how much income would you lose? Use your records and ask older farmers what happened in past bad years.",
            "Then think about the whole business, not only the field: Can you still repay a loan in a bad year? Will buyers still take your produce if quality drops? Can workers reach the farm in floods? A dry spell that cuts 40 bags of maize to 25 is not only a yield problem; it is a cash-flow problem.",
            "Put the risks in a simple table and rank them. The risks that are both likely and costly go to the top of your plan."
          ],
          steps: ["List your enterprises.", "Under each, list climate hazards from your experience and your risk calendar.", "Mark each hazard's likelihood: low, medium or high.", "Estimate the money lost if it happens, in your currency.", "Rank: likely and costly risks first.", "Add business effects: loan repayment, buyer contracts, labour, transport."],
          words: [["Climate-risk assessment", "a list of the climate hazards your business faces, how likely each is and how much it could cost."], ["Hazard", "an event that can cause harm, such as drought, flood or heat."], ["Likelihood", "how probable it is that something will happen."], ["Impact", "how much damage or money loss an event causes."]],
          slides: [
            { title: "From calendar to cost", bullets: ["Calendar: when weather hurts", "Assessment: how much it costs your business", "Spend first on the biggest risks"] },
            { title: "Two questions per hazard", bullets: ["How likely in the next five seasons?", "How much income lost if it happens?", "Use records and older farmers' memories"] },
            { title: "Think beyond the field", bullets: ["Loan repayments in a bad year", "Buyer contracts and quality", "Labour, transport, storage"] },
            { title: "Rank the risks", bullets: ["Likely + costly = top of the plan", "Example: dry spell cuts 40 bags to 25", "That is a cash-flow problem too"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Make a table with four columns: hazard, likelihood (low, medium, high), estimated money lost, and business effect. Fill in at least three hazards for your own farm and circle the top one.",
          youCanNow: "rate the climate risks to your farm business by how likely they are and how much they could cost.",
          quickCheck: [
            { objective: "O1", q: "Which risk belongs at the top of a farm's climate-risk plan?", options: ["One that is unlikely and cheap", "One that is likely and would cost a lot", "One that only affects the neighbour", "One that happened once 40 years ago"], answer: 1, why: "Risks that are both likely and costly do the most harm to the business, so they come first." },
            { objective: "O1", q: "A dry spell cuts a farmer's maize harvest and she cannot repay her loan on time. What does this show?", options: ["Climate risk only affects yields", "Loans are never affected by weather", "Climate risk also hits cash flow and repayments", "The farmer should stop keeping records"], answer: 2, why: "A climate-risk assessment looks at the whole business, including cash flow and debts." }
          ]
        },
        {
          title: "Choosing and costing adaptation investments",
          objectives: ["O2"],
          minutes: 6,
          goal: "Cost two adaptation investments and compare their payback.",
          text: [
            "An adaptation investment is money or work you spend now to lose less in bad years. Common ones in Africa are drought-tolerant or early-maturing seed (CGIAR centres such as CIMMYT have bred drought-tolerant maize), water storage (tanks, lined ponds), shade trees for cocoa, coffee or animals, better animal housing, and diversification: adding a second crop, goats, poultry or fish so one bad season does not ruin you.",
            "For each option, write the cost (buying, building, labour, upkeep) and the yearly benefit (extra harvest in a bad year, less feed bought, a new income). Then work out the payback: cost divided by yearly benefit gives roughly how many years until it pays for itself. Remember that some benefits only come in bad years, so average them over several seasons.",
            "Example with made-up figures: a farmer in Machakos compares a water tank at KES 60,000 that saves about KES 20,000 a year in bought water and lost vegetables (payback about 3 years), with drought-tolerant seed that costs KES 2,000 more per acre and saves about KES 8,000 in a dry year that comes one year in two (average KES 4,000 a year, payback in the first season). Both may be worth doing; the seed is cheaper to start.",
            "Also check: Can you maintain it? Does it fit your labour and land? Does it work in a good year too? Ask your extension officer which varieties and designs suit your area."
          ],
          steps: ["Pick your top risk from Lesson 1.", "List two or three investments that reduce it.", "Write each one's full cost: buy, build, labour, upkeep.", "Estimate the yearly benefit, averaged over good and bad years.", "Payback = cost ÷ yearly benefit.", "Check labour, upkeep and fit with extension advice."],
          words: [["Adaptation investment", "money or work spent now so you lose less when the climate hits."], ["Payback", "how long it takes for the money an investment saves or earns to cover its cost."], ["Diversification", "having more than one source of income so one failure does not ruin the business."]],
          slides: [
            { title: "Common adaptation investments", bullets: ["Drought-tolerant or early-maturing seed", "Water storage: tanks, lined ponds", "Shade trees, better animal housing", "New enterprises: goats, poultry, fish"] },
            { title: "Cost and benefit", bullets: ["Cost: buy, build, labour, upkeep", "Benefit: losses avoided, new income", "Average bad-year benefits over seasons"] },
            { title: "Payback (made-up KES example)", bullets: ["Tank 60,000 ÷ 20,000 a year = about 3 years", "Seed +2,000 per acre ÷ 4,000 a year = first season", "Use your own local prices"] },
            { title: "Before you choose", bullets: ["Can you maintain it?", "Does it fit your land and labour?", "Ask extension what suits your area"] }
          ],
          sources: [CGIAR_MAIZE, FAO_CSA],
          tryIt: "For your top risk, cost two adaptation investments with your own local prices. Write the cost, the average yearly benefit and the payback for each, then circle the one you would start with and say why.",
          youCanNow: "cost adaptation investments and compare them by their payback.",
          quickCheck: [
            { objective: "O2", q: "A shade-net costs GHS 3,000 and saves about GHS 1,000 a year in lost tomatoes. What is the rough payback?", options: ["3 months", "1 year", "10 years", "About 3 years"], answer: 3, why: "Payback is cost divided by yearly benefit: 3,000 ÷ 1,000 = about 3 years (example figures)." },
            { objective: "O2", q: "Drought-tolerant seed only helps in dry years, which come about one year in three. How should you count its benefit?", options: ["Average the dry-year saving over all the years", "Count the dry-year saving every year", "Count no benefit at all", "Only count it in wet years"], answer: 0, why: "Benefits that come only in bad years should be averaged over good and bad years." }
          ]
        },
        {
          title: "Climate finance and green loans",
          objectives: ["O3"],
          minutes: 5,
          goal: "List the questions to ask before taking a climate or green loan and check the lender is licensed.",
          text: [
            "Climate finance is money meant for adapting to climate change or cutting emissions. Large funds such as the Green Climate Fund do not lend to farmers directly; they work through governments, banks and agencies. What reaches farmers usually comes as: green or climate loans from banks, microfinance banks and SACCOs (for tanks, solar pumps, drip kits, biogas); pay-as-you-go plans from equipment suppliers; programmes by the government or NGOs that share the cost of seed, tanks or trees; and grants or matching funds for groups and cooperatives.",
            "Where to ask: your bank or SACCO, your cooperative, your county or state agriculture office and extension officer, and agricultural banks such as the Bank of Agriculture in Nigeria or the Agricultural Development Bank in Ghana. Programmes change often, so ask what is open now and get the details in writing.",
            "A green label does not make a loan cheap or safe. Compare the total cost (interest, fees, insurance), when repayments fall (do they match your harvest?), what happens if the harvest fails, and any conditions (approved suppliers, training, insurance). Check the lender is licensed: in Kenya on the Central Bank of Kenya lists, in Nigeria with the Central Bank of Nigeria, elsewhere with your central bank or cooperative regulator.",
            "Never pay a \"processing fee\" to an agent to get a grant or loan, and never share your PIN or mobile money code."
          ],
          steps: ["Decide what the money will buy and its payback (Lesson 2).", "Ask your bank, SACCO, cooperative and agriculture office what is open now.", "Get the total cost, repayment dates and conditions in writing.", "Check the lender on the central bank or regulator's list.", "Ask: what happens if my harvest fails?", "Talk to a trusted adviser before you sign."],
          words: [["Climate finance", "money for adapting to climate change or cutting emissions."], ["Green loan", "a loan for something that helps the environment, such as a solar pump or biogas unit."], ["SACCO", "a savings and credit cooperative owned by its members."], ["Pay-as-you-go", "paying for equipment in small regular amounts, often by mobile money."]],
          slides: [
            { title: "How climate money reaches farmers", bullets: ["Green loans: banks, microfinance, SACCOs", "Pay-as-you-go equipment plans", "Cost-sharing programmes and group grants"] },
            { title: "Where to ask", bullets: ["Your bank, SACCO or cooperative", "Agriculture office and extension officer", "Agricultural banks, e.g. Bank of Agriculture (NG), ADB (GH)"] },
            { title: "Green does not mean cheap", bullets: ["Total cost: interest + fees + insurance", "Repayments match your harvest?", "What if the harvest fails?"] },
            { title: "Stay safe", bullets: ["Lender licensed? Check central bank lists", "Never pay an agent a \"processing fee\"", "Never share your PIN or code"] }
          ],
          sources: [GCF, CBK, CBN, BOA, ADB_GH],
          tryIt: "Write five questions you will ask a lender or programme about the investment you chose in Lesson 2. Include total cost, repayment dates, conditions, what happens if the harvest fails, and how you will check they are licensed.",
          youCanNow: "list the questions to ask about a climate or green loan and check that the lender is licensed.",
          quickCheck: [
            { objective: "O3", q: "An agent says you will get a climate grant if you first send KES 3,000 as a processing fee. What should you do?", options: ["Pay quickly before the grant closes", "Send half now and half later", "Refuse; real programmes do not ask agents to collect fees like this", "Give the agent your mobile money PIN instead"], answer: 2, why: "Upfront \"processing fees\" to agents are a common scam; check the programme with the official office." },
            { objective: "O3", q: "Which question matters most when comparing two green loans for a solar pump?", options: ["Which one has the nicest logo", "The total cost and whether repayments match your harvest", "Which agent is friendliest", "Which one is called green"], answer: 1, why: "Total cost and repayment timing decide whether you can afford the loan, whatever its label." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Climate risk is a business risk",
        questions: [
          { objective: "O1", q: "What does a climate-risk assessment add to a climate-risk calendar?", options: ["The names of the months", "The rainfall forecast", "How likely each risk is and how much it could cost the business", "A list of crops to stop growing"], answer: 2, why: "The assessment puts likelihood and money impact on each risk so you can rank them." },
          { objective: "O1", q: "Floods cut the road to your buyer for two weeks each year. Where does this go?", options: ["Nowhere; it is not about yield", "In the business effects of your climate-risk assessment", "Only in your diary", "In the buyer's plan, not yours"], answer: 1, why: "Climate risks to transport, buyers and labour are business risks and belong in the assessment." },
          { objective: "O2", q: "A tilapia farmer in Nigeria compares a pond liner at NGN 400,000 that saves NGN 200,000 a year. What is the payback?", options: ["About 2 years", "About 20 years", "About 2 months", "It never pays back"], answer: 0, why: "400,000 ÷ 200,000 = about 2 years (example figures)." },
          { objective: "O2", q: "Which is an example of diversification as an adaptation investment?", options: ["Planting the same maize variety on more land", "Selling all your goats", "Borrowing more for the same crop", "Adding poultry to a maize farm so one bad season does not ruin you"], answer: 3, why: "A second income source spreads climate risk across the business." },
          { objective: "O3", q: "How can a farmer in Kenya check that a lender offering a green loan is licensed?", options: ["Ask the lender's agent", "Check the Central Bank of Kenya's lists of licensed institutions", "Look at its social media likes", "Trust it if it says \"green\""], answer: 1, why: "The central bank publishes lists of licensed banks and microfinance banks." }
        ]
      }
    },
    {
      name: "Chapter 2: Cutting costs, carbon and planning",
      lessons: [
        {
          title: "Mitigation that also saves money",
          objectives: ["O4"],
          minutes: 5,
          goal: "Identify two practices on your farm that cut emissions and costs at the same time.",
          text: [
            "Mitigation means cutting the greenhouse gases a farm releases, or storing more carbon in soil and trees. For a farmer, the best mitigation is the kind that also saves money, because you gain even if no one pays you for the carbon.",
            "Less fertilizer waste: fertilizer lost to rain, wind or the wrong timing is money lost and also releases gases. Placing it near the roots at the right time, and adding manure and compost, gets more harvest from each bag. Biogas: a household biodigester turns cow or pig dung into cooking gas, cutting what you spend on firewood or charcoal, and the leftover bio-slurry is a fertilizer. The Africa Biogas Partnership Programme has helped install household biodigesters in Kenya, Burkina Faso and other countries.",
            "Agroforestry: trees on the farm store carbon and can give fruit, fodder, firewood, timber and shade (for example shade trees in cocoa in Côte d'Ivoire and Ghana), cutting what you buy. Other savers: not burning crop residues (keeps nutrients and saves fertilizer), better feed for animals (more milk per animal), and solar pumps instead of diesel (lower running cost).",
            "Write the saving in money. If a biodigester costs XOF 500,000 and saves XOF 120,000 a year in charcoal and fertilizer (made-up figures), you can work out its payback like any other investment."
          ],
          steps: ["List the inputs you buy most: fertilizer, fuel, feed, firewood.", "For each, find a practice that uses less or replaces it.", "Estimate the money saved per year.", "Check the cost and payback.", "Pick two to start."],
          words: [["Mitigation", "cutting greenhouse gas emissions, or storing more carbon in soil and trees."], ["Biodigester", "a sealed tank where dung breaks down and makes biogas for cooking or light."], ["Bio-slurry", "the liquid left after biogas is made; it can be used as fertilizer."], ["Agroforestry", "growing trees together with crops or animals on the same land."]],
          slides: [
            { title: "Mitigation that pays", bullets: ["Cuts emissions or stores carbon", "Also cuts your costs", "You gain even without carbon payments"] },
            { title: "Three money savers", bullets: ["Less fertilizer waste: right place, right time", "Biogas: cooking gas + bio-slurry fertilizer", "Agroforestry: fruit, fodder, fuel, shade"] },
            { title: "More savers", bullets: ["Do not burn residues", "Better feed: more milk per animal", "Solar instead of diesel pumping"] },
            { title: "Put it in money", bullets: ["Example: XOF 500,000 biodigester", "Saves XOF 120,000 a year (made-up)", "Payback about 4 years"] }
          ],
          sources: [ABPP, FAO_AGROFOR, FAO_CSA],
          tryIt: "List the three inputs you spend most on. For each, write one practice that would use less of it, and estimate the money saved per year. Choose two to put in your plan.",
          youCanNow: "identify practices that cut both emissions and costs, and put the saving in money.",
          quickCheck: [
            { objective: "O4", q: "Which practice cuts emissions and also saves a pig farmer money?", options: ["Burning dung in the open", "Buying more charcoal", "Leaving dung in a heap by the river", "A biodigester that makes cooking gas and bio-slurry fertilizer"], answer: 3, why: "Biogas replaces bought fuel and the bio-slurry replaces some fertilizer." },
            { objective: "O4", q: "Why is reducing fertilizer waste a good mitigation choice for a farmer?", options: ["It saves money as well as cutting emissions", "It makes the soil harder", "It means you never need to fertilize again", "It is required by every buyer"], answer: 0, why: "Less waste means more harvest per bag, so the farmer saves money and emits less." }
          ]
        },
        {
          title: "Carbon credits: chances, scams and unfair contracts",
          objectives: ["O5"],
          minutes: 6,
          goal: "Check a carbon credit offer for warning signs before you sign or pay anything.",
          text: [
            "A carbon credit is a certificate that says one tonne of carbon dioxide was kept out of the air or stored, for example by planting trees, restoring land or using clean cookstoves. Companies buy credits. Some projects pay farmers or communities for practices that store carbon. Real projects are registered with a standard such as Verra or Gold Standard, and their registries can be searched by project name.",
            "Be very careful. Carbon payments are often small, slow (sometimes years after you start) and uncertain, and costs for measuring and checking are taken first. Scams and unfair deals are common: people who ask farmers for a fee to \"join\", promise big quick payments, or ask you to sign long contracts that give away rights to your land, trees or carbon for 20 years or more.",
            "Warning signs: you must pay to join; big payments are promised fast; you cannot take the contract away to read; it is not in a language you understand; it gives someone rights over your land or trees, or stops you cutting or selling them; it does not say how much you get, when, and what share goes to the developer; the project is not on any registry.",
            "Some countries now have rules. Kenya's Climate Change (Carbon Markets) Regulations, 2024 require approval of carbon projects and, for projects on community land, a community development agreement on how benefits are shared. Check your own country's rules with the environment ministry. Never sign on the day; read it all, ask your cooperative, a lawyer or a trusted adviser, and keep a copy."
          ],
          steps: ["Ask: what is the project's name and registry ID?", "Look it up on the registry (Verra, Gold Standard or others).", "Ask what you will be paid, when, and what share the developer keeps.", "Read what rights over land, trees or carbon you give, and for how long.", "Refuse any joining fee.", "Take the contract away; get advice before signing; keep a copy."],
          words: [["Carbon credit", "a certificate for one tonne of carbon dioxide kept out of the air or stored."], ["Carbon project developer", "the company that runs a carbon project and sells the credits."], ["Registry", "an official public list of carbon projects and their credits."], ["Benefit sharing", "how the money from credits is split between the developer, farmers and community."]],
          slides: [
            { title: "What a carbon credit is", bullets: ["1 tonne of CO2 kept out of the air or stored", "Companies buy them", "Real projects are on a registry (Verra, Gold Standard)"] },
            { title: "Reality check", bullets: ["Payments often small, slow and uncertain", "Measuring costs come off the top", "Some offers are scams"] },
            { title: "Warning signs", bullets: ["Fee to join; big quick money promised", "Can't take the contract away to read", "Rights over your land or trees for decades", "No registry ID; no clear payment share"] },
            { title: "Protect yourself", bullets: ["Kenya: Carbon Markets Regulations 2024", "Check your country's environment ministry", "Never sign on the day; get advice; keep a copy"] }
          ],
          sources: [VERRA, GOLD, KE_CARBON],
          tryIt: "Write a checklist of at least five questions you will ask before joining any carbon credit scheme. Then imagine an agent offers your group XOF 50,000 per farmer if you sign today and pay XOF 5,000 to register: mark which warning signs this offer shows.",
          youCanNow: "check a carbon credit offer for the warning signs of a scam or an unfair contract.",
          quickCheck: [
            { objective: "O5", q: "A carbon agent asks each farmer to pay NGN 10,000 to join and promises payment next month. What is this most likely?", options: ["A normal registered project", "A government subsidy", "A scam or very unfair offer", "A free training"], answer: 2, why: "Joining fees and fast big promises are classic warning signs of carbon scams." },
            { objective: "O5", q: "What should you look for in a carbon contract before signing?", options: ["How much you get, when, and what rights over land or trees you give and for how long", "Only the colour of the logo", "Whether the agent is friendly", "Nothing, if the project is about trees"], answer: 0, why: "Payment, timing and rights over your land or trees decide whether the deal is fair." }
          ]
        },
        {
          title: "Adding climate risk to your business plan",
          objectives: ["O6", "O1", "O2"],
          minutes: 5,
          goal: "Write a one-page climate-resilience plan for your farm business.",
          text: [
            "Lenders, buyers and programmes increasingly ask how a farm will cope with climate shocks. A short climate section in your business plan shows you have thought about it, and it helps you decide where your own money goes first.",
            "Your one-page plan has six parts: 1. your top three climate risks with their likelihood and cost (Lesson 1); 2. two or three adaptation investments with cost, benefit and payback (Lesson 2); 3. how you will pay: savings, group, loan or programme, and your questions for the lender (Lesson 3); 4. two practices that cut costs and emissions (Lesson 4); 5. your rules for any carbon offer (Lesson 5); 6. a review date after each season.",
            "Add a \"bad year\" line to your cash flow: what income you expect if the main risk hits, and how you will still pay loans, school fees and inputs, for example from savings, a second enterprise or insurance. If you use crop or livestock insurance, check the insurer is licensed (in Kenya with the Insurance Regulatory Authority) and read the payout trigger.",
            "You can ask a phone AI assistant to turn your notes into a neat table or to ask you questions about gaps in your plan, but the numbers must come from your own records and local prices. Do not type in ID numbers, account numbers or PINs."
          ],
          steps: ["Copy your risk table from Lesson 1: top three risks.", "Add your two or three costed investments.", "Write how you will pay and your lender questions.", "Add two money-saving mitigation practices.", "Write your carbon offer rules.", "Add a bad-year cash-flow line and a review date."],
          words: [["Business plan", "a short written plan of what your farm does, its costs, income and goals."], ["Bad-year scenario", "a plan for what happens to income and payments if the main risk strikes."], ["Payout trigger", "the event, such as low rainfall measured at a station, that makes an insurance policy pay."]],
          slides: [
            { title: "Why add climate to the plan", bullets: ["Lenders and buyers ask how you will cope", "Shows where your money goes first"] },
            { title: "Six parts, one page", bullets: ["Risks, investments and payback", "How you will pay", "Money-saving practices, carbon rules", "Review date"] },
            { title: "Plan for a bad year", bullets: ["Income if the main risk hits", "How loans and fees still get paid", "Insurance: licensed insurer, clear trigger"] },
            { title: "AI can tidy, not decide", bullets: ["Ask it to make a table or spot gaps", "Numbers come from your records", "No IDs, account numbers or PINs"] }
          ],
          sources: [IRA, FAO_CSA],
          tryIt: "Final task: write your one-page climate-resilience plan with all six parts and a bad-year cash-flow line. Read it to a family member, group member or extension officer and ask them for one question you have not answered.",
          youCanNow: "write a one-page climate-resilience plan for your farm business that a lender, buyer or programme can read.",
          quickCheck: [
            { objective: "O6", q: "Which part is MISSING from this plan: risks, costed investments, how to pay, mitigation practices, carbon rules?", options: ["The farmer's favourite crop", "A list of neighbours", "The weather for tomorrow", "A review date"], answer: 3, why: "A plan needs a review date so it is updated after each season." },
            { objective: "O6", q: "What does a bad-year line in your cash flow show?", options: ["How much you will earn in the best year", "How you will still pay loans and costs if the main risk hits", "The price of fertilizer last year", "How many workers you know"], answer: 1, why: "It tests whether the business survives the shock you rated most likely and costly." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Cutting costs, carbon and planning",
        questions: [
          { objective: "O4", q: "A coffee farmer plants shade trees that also give fruit and firewood. What is this?", options: ["Agroforestry that saves money and stores carbon", "Burning residues", "A carbon scam", "Over-fertilizing"], answer: 0, why: "Trees with crops store carbon and give products the farmer would otherwise buy." },
          { objective: "O4", q: "Which is NOT a mitigation practice that saves money?", options: ["Placing fertilizer near the roots at the right time", "Burning crop residues after harvest", "Using a biodigester for cooking gas", "Better feed for more milk per cow"], answer: 1, why: "Burning residues wastes nutrients and releases gases; the others cut costs and emissions." },
          { objective: "O5", q: "How can you check that a carbon project is real?", options: ["Ask the agent if it is real", "Count the people at the meeting", "Look it up by name or ID on a registry such as Verra or Gold Standard", "Check the agent's car"], answer: 2, why: "Real projects are listed on public registries kept by carbon standards." },
          { objective: "O5", q: "A carbon contract stops you cutting or selling your own trees for 30 years. What should you do?", options: ["Sign; trees are free money", "Sign now and read later", "Ask the agent to read the good parts", "Take it away, get advice and only sign if you understand and accept those terms"], answer: 3, why: "Long limits on your land and trees are serious; read fully and get trusted advice first." },
          { objective: "O6", q: "Why should a climate-resilience plan have a review date?", options: ["Lenders like dates", "Risks, prices and results change, so the plan is updated each season", "It makes the page longer", "Reviews are required by law"], answer: 1, why: "Reviewing after each season keeps the plan matched to what actually happened." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Climate-Resilient Agribusiness",
    questions: [
      { objective: "O1", q: "A climate-risk assessment asks two questions about each hazard. Which two?", options: ["How likely is it, and how much would it cost?", "Who caused it, and when did it start?", "Which radio reported it, and at what time?", "Is it good news, and is it fair?"], answer: 0, why: "Likelihood and money impact let you rank risks." },
      { objective: "O1", q: "Where can you find past losses to estimate the cost of a risk?", options: ["Only from a carbon agent", "From a lottery result", "From your farm records and older farmers' memories of bad years", "From the price of a phone"], answer: 2, why: "Records and local memory show what bad years really cost." },
      { objective: "O1", q: "Heat stress cuts egg production in your layer house most years. How do you rate it?", options: ["Low likelihood, no cost", "Not a climate risk", "Only a feed problem", "High likelihood with a money cost from lost eggs"], answer: 3, why: "It happens most years and costs eggs, so it is likely and costly." },
      { objective: "O2", q: "What is payback?", options: ["The interest on a loan", "How long until an investment's savings or earnings cover its cost", "The price of seed", "A refund from the shop"], answer: 1, why: "Payback = cost ÷ yearly benefit." },
      { objective: "O2", q: "Which counts as part of the cost of a water tank?", options: ["Buying, building, labour and upkeep", "Only the price in the shop", "Only the transport", "Nothing, if it is a gift"], answer: 0, why: "The full cost includes everything needed to build and keep it working." },
      { objective: "O2", q: "Which is an adaptation investment against dry spells?", options: ["Selling the water pump", "Planting later every year without a reason", "Drought-tolerant or early-maturing seed", "Burning residues"], answer: 2, why: "Drought-tolerant and early-maturing varieties reduce losses in dry spells." },
      { objective: "O2", q: "Two investments have the same benefit. One costs less and is easy to maintain. Which do you usually start with?", options: ["The costly one", "Neither", "Both on credit at once", "The cheaper one that you can maintain"], answer: 3, why: "Lower cost and easy upkeep give a faster, safer payback." },
      { objective: "O3", q: "How do large climate funds usually reach farmers?", options: ["Through banks, governments and agencies, as loans and programmes", "By sending cash to each farmer's phone", "Through carbon agents who charge a fee", "They never reach farmers"], answer: 0, why: "Funds such as the Green Climate Fund work through governments, banks and accredited agencies." },
      { objective: "O3", q: "Before taking a green loan, which is the key question?", options: ["Is the loan officer friendly?", "What is the total cost and do repayments match my harvest?", "Does it have \"green\" in its name?", "Is the office near the market?"], answer: 1, why: "Total cost and repayment timing decide affordability." },
      { objective: "O3", q: "In Nigeria, where can you check that a lender is licensed?", options: ["On a WhatsApp group", "With the lender's agent", "With the Central Bank of Nigeria", "On a poster at the market"], answer: 2, why: "The Central Bank of Nigeria regulates and lists licensed institutions." },
      { objective: "O3", q: "Someone offers to \"fast-track\" your climate grant for a fee paid to their mobile money number. What is this?", options: ["A warning sign of a scam", "A normal step", "A government rule", "A cooperative fee"], answer: 0, why: "Real programmes do not ask you to pay agents to fast-track grants." },
      { objective: "O4", q: "What is mitigation?", options: ["Moving to a new farm", "Insurance against drought", "Selling crops early", "Cutting greenhouse gas emissions or storing more carbon"], answer: 3, why: "Mitigation reduces emissions or stores carbon in soil and trees." },
      { objective: "O4", q: "What is bio-slurry?", options: ["A pesticide", "Liquid left after making biogas, used as fertilizer", "A type of fuel sold in shops", "A cattle disease"], answer: 1, why: "Bio-slurry from a biodigester can feed the soil." },
      { objective: "O4", q: "Which practice saves money AND cuts emissions on a dairy farm?", options: ["Better feed so each cow gives more milk", "Burning the dung", "Buying more cows than the feed allows", "Leaving pasture bare"], answer: 0, why: "More milk per animal from better feed means lower costs and emissions per litre." },
      { objective: "O5", q: "What is a carbon credit?", options: ["A loan for seed", "A discount on fertilizer", "A certificate for one tonne of CO2 kept out of the air or stored", "A mobile money bonus"], answer: 2, why: "Each credit stands for one tonne of carbon dioxide avoided or stored." },
      { objective: "O5", q: "Which is a warning sign in a carbon offer?", options: ["The project has a registry ID you can look up", "You may take the contract home to read", "Payments and shares are written clearly", "You must pay a fee to join"], answer: 3, why: "Joining fees are a classic sign of a scam." },
      { objective: "O5", q: "In Kenya, carbon projects on community land need what?", options: ["Nothing at all", "A community development agreement on how benefits are shared", "Only a verbal promise", "A loan from the agent"], answer: 1, why: "Kenya's Carbon Markets Regulations, 2024 require community development agreements for such projects." },
      { objective: "O6", q: "Which belongs in a one-page climate-resilience plan?", options: ["Top risks, costed investments, how to pay, money-saving practices, carbon rules and a review date", "Only the farm's name", "Your mobile money PIN", "A list of every rain day last year"], answer: 0, why: "Those six parts make a complete, usable plan." },
      { objective: "O6", q: "How can a phone AI assistant help with your plan?", options: ["It can invent your prices", "It should hold your bank PIN", "It can tidy your notes into a table and point out gaps", "It signs loan forms for you"], answer: 2, why: "AI can organise and question, but the numbers come from your records." },
      { objective: "O6", q: "Your plan shows you cannot repay a loan if a dry spell hits. What do you do?", options: ["Ignore it", "Hide it from the lender", "Borrow more", "Change the plan: a smaller loan, savings, a second enterprise or insurance"], answer: 3, why: "The bad-year line is there to change the plan before the shock, not after." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 5, 8, 10, 11, 14, 15, 17] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part of the plan and try again.",
    criteria: [
      { name: "Climate risks in money", objective: "O1", notYet: "Risks are listed without likelihood or cost, or fewer than three.", meets: "Three risks, each with likelihood and an estimated cost in local currency.", exceeds: "Also shows business effects (loans, buyers, labour) and where the estimates came from." },
      { name: "Costed investments", objective: "O2", notYet: "Investments are named but not costed.", meets: "Two or three investments with full cost, average yearly benefit and payback.", exceeds: "Uses real local quotes and explains the choice of which to start first." },
      { name: "Finance and lender checks", objective: "O3", notYet: "No plan for paying, or a lender with no checks.", meets: "Says how it will be paid and lists questions on total cost, repayment dates, conditions and licensing.", exceeds: "Has compared two finance options and checked the lender on the regulator's list." },
      { name: "Practices that save money", objective: "O4", notYet: "No mitigation practice, or one with no saving shown.", meets: "Two practices that cut emissions, each with the input or money saved.", exceeds: "Includes payback for any practice that needs spending, such as a biodigester." },
      { name: "Carbon offer rules", objective: "O5", notYet: "No rules, or would sign or pay on the day.", meets: "At least four checks: registry, payment and share, rights over land and trees, no fees, advice before signing.", exceeds: "Names the national rules or office to check, such as Kenya's Carbon Markets Regulations." },
      { name: "Complete one-page plan", objective: "O6", notYet: "Parts are missing or there is no review date.", meets: "All six parts, a bad-year cash-flow line and a review date on one page.", exceeds: "Has been read by a group member, extension officer or adviser and updated with their question." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who make at least one costed adaptation investment within the next season (follow-up survey)",
      "Learners or groups who apply for finance with a written plan and lender questions",
      "Reported carbon or finance scams avoided, and fewer contracts signed without advice (extension or cooperative reports)",
      "Income loss in the next bad season compared with the previous bad season (self-reported, by enterprise)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Paper, pen and a simple calculator (or the phone calculator)",
      "Your farm records, or an example farm from the final task",
      "Local prices for seed, tanks, inputs and fuel (from agro-dealers or the cooperative)",
      "A phone for looking up lenders and registries (optional)",
      "About 90 minutes in total, in short sessions"
    ],
    facilitatorNotes: [
      "Best run with a farmer group, cooperative or Farmer Business School: do Lessons 1 and 2 with real records from two or three members.",
      "Collect real local quotes before the session; never present example prices as facts.",
      "Invite a loan officer from a licensed bank, microfinance bank or SACCO to answer the Lesson 3 questions, and check their licence in front of the group.",
      "For Lesson 5, bring a sample carbon contract or offer (with names removed) and mark the warning signs together. Do not endorse any carbon project.",
      "Do not give investment advice; remind learners to read contracts fully and talk to a trusted adviser.",
      "Score the final plan with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
