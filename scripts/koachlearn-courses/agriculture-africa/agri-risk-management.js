"use strict";

// Koach Learn course: Agriculture (Africa) -> "Agricultural Risk Management: Prices, Weather and Insurance" (farmer courses brief, 29 October 2026).
// Goes deeper than agri-agribusiness-farm-management (credit and risk basics), agri-climate-smart (insurance in one paragraph) and
// agri-cooperatives-markets (price checks, contracts): a risk register, a weekly price log and trend, whether storage pays, forward and
// fixed-price contracts, what hedging on an African commodity exchange means, index insurance and basis risk, and inflation and savings.
// No investment advice and no recommendation to trade. All money figures are examples except the confirmed Cote d'Ivoire cocoa prices.

const KAMIS = { name: "Kenya Agricultural Market Information System (KAMIS), Ministry of Agriculture: market prices", url: "https://kamis.kilimo.go.ke" };
const NBS = { name: "National Bureau of Statistics, Nigeria (monthly Selected Food Prices Watch and inflation)", url: "https://nigerianstat.gov.ng" };
const CI_COCOA = { name: "Financial Afrik (5 March 2026): Cote d'Ivoire sets the intermediate-season cocoa farmgate price at 1,200 FCFA/kg", url: "https://www.financialafrik.com/2026/03/05/cote-divoire-le-prix-de-la-campagne-intermediaire-de-cacao-fixe-a-1-200-fcfa-kg/" };
const PICS = { name: "Purdue University: Purdue Improved Crop Storage (PICS) hermetic bags", url: "https://www.purdue.edu/discoverypark/food/research/pics.php" };
const NCX = { name: "Nigeria Commodity Exchange (NCX): about us (licensed by the Securities and Exchange Commission)", url: "https://ncx.com.ng/about-us/" };
const GCX = { name: "Ghana Commodity Exchange (GCX), official site", url: "https://www.gcx.com.gh" };
const GCX_FIRST = { name: "MyJoyOnline: Ghana Commodity Exchange executes first electronic trade (maize spot contracts, 2018)", url: "https://www.myjoyonline.com/ghana-commodity-exchange-executes-first-electronic-trade/" };
const ACRE = { name: "ACRE Africa: weather index insurance (an authorized insurance intermediary)", url: "https://acreafrica.com/crop-insurance/weather-index-insurance/" };
const IBLI = { name: "ILRI: Index-Based Livestock Insurance (IBLI) and the Kenya Livestock Insurance Programme (KLIP)", url: "https://ibli.ilri.org/" };
const ILRI_KLIP = { name: "ILRI: Eyes in the sky: Kenya's government provides pastoralists with livestock insurance through satellite imagery", url: "https://www.ilri.org/news/eyes-sky-kenyas-government-provides-pastoralists-livestock-insurance-through-satellite-imagery" };
const CNAAS = { name: "CNAAS, Compagnie Nationale d'Assurance Agricole du Senegal", url: "https://www.cnaas.sn" };
const BCEAO = { name: "BCEAO, Central Bank of West African States: main indicators, including inflation", url: "https://www.bceao.int/fr/content/principaux-indicateurs-et-taux-directeurs" };
const CBK = { name: "Central Bank of Kenya (inflation and licensed institutions)", url: "https://www.centralbank.go.ke" };
const SASRA = { name: "SASRA, Kenya: list of licensed deposit-taking SACCOs", url: "https://www.sasra.go.ke/licensed-dt-saccos/" };

module.exports = {
  id: "agri-risk-management",
  category: "Agriculture (Africa)",
  name: "Agricultural Risk Management: Prices, Weather and Insurance",
  skills: "Ranking farm risks on a risk register, Tracking prices and reading market trends, Spreading risk with diversification, staged selling and storage, Judging forward contracts and hedging, Checking an index insurance offer, Protecting savings from inflation",
  outcome: "list and rank the risks your farm faces, track prices and read their trend, decide when storing and selling in stages pays, check a fixed-price contract and an index insurance offer before you sign, and keep your savings safer from inflation, all written into a one-page farm risk plan.",
  about: [
    "This course is for smallholder and growing commercial farmers, herders, young agripreneurs, cooperative leaders and extension workers in Kenya, Nigeria, Ghana, Senegal, Cote d'Ivoire and across Africa. Bad weather, falling prices, sick animals and rising costs can wipe out a year's work. You cannot remove risk, but you can see it coming, spread it and move part of it to others.",
    "Chapter 1 is about seeing and spreading risk: the kinds of farm risk and a risk register, price swings and market trends, and spreading risk with diversification, staged selling and storage. Chapter 2 is about moving risk to others and protecting your money: forward and fixed-price contracts and what hedging on a commodity exchange means, index-based crop and livestock insurance, and inflation and savings.",
    "This course explains how contracts, exchanges, insurance and savings work, and their risks. It does not give investment advice and does not recommend trading on any exchange. Read every contract and policy fully, check that the company is licensed, and ask a trusted adviser such as your cooperative, extension officer or a lawyer before you sign. Money figures are examples unless a source is given."
  ],
  finalTask: "Write a one-page risk plan for your farm (or an example farm): your top five risks ranked by likelihood and impact with one action for each; a four-week price log for your main crop or animal from at least two sources, with the trend you see; a selling plan that says how much you will sell at harvest and how much you will store, with the storage break-even price; the questions you will ask before signing a fixed-price contract or buying index insurance; and how you will keep your savings safer from inflation.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Smallholder and growing commercial farmers, pastoralists, young agripreneurs, cooperative leaders and extension workers in Kenya, Nigeria, Ghana and francophone West Africa, growing crops such as maize, rice, sorghum, beans, groundnuts, tomatoes, coffee and cocoa, or keeping cattle, goats, pigs, poultry or fish.",
    startingPoint: "Know from experience that weather, prices and disease can ruin a season. Most sell at harvest to the first buyer, keep savings in cash, animals or grain, and have never read an insurance policy or a fixed-price contract. Some have heard of commodity exchanges or index insurance but do not know how they work.",
    gap: "Without a plan, one drought, a price crash or a disease outbreak can force farmers to sell animals and land, borrow at high cost or leave farming. Farmers who track prices, spread risk, read contracts and insurance terms, and protect their savings recover faster and are more trusted by buyers and lenders.",
    constraints: [
      "Reading level: plain words and short sentences; every finance word is explained",
      "Devices: a basic phone for price SMS, radio or calls; a notebook for the price log",
      "Time: 5 to 6 minute lessons that fit around farm work",
      "Insurance, exchanges and programmes differ by country and change; learners check the current offer and the regulator",
      "No investment advice and no recommendation to trade; learners ask a trusted adviser before signing anything"
    ],
    prerequisites: "None. \"Agribusiness and Farm Management\" and \"Farm Accounting and Investment Management\" (break-even price) help with the numbers."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Thinking about your own farm and household", action: "list the main risks you face and rank them in a risk register by how likely they are and how much damage they would do", standard: "with at least one risk of each kind (production, market, money, rules and people) and one action for each of the top five" },
    { id: "O2", condition: "For your main crop or animal, over four weeks", action: "record prices weekly from at least two sources, including an official market information service where one exists, and describe the trend", standard: "with the same product, grade and unit each week" },
    { id: "O3", condition: "Given a harvest, today's price, an expected later price and storage costs", action: "calculate the storage break-even price and write a plan to sell in stages and spread risk", standard: "with correct numbers and cash needs at harvest covered" },
    { id: "O4", condition: "Given a forward or fixed-price contract offer", action: "list the terms to check and explain what you gain and what you give up, including how hedging on a commodity exchange works", standard: "naming at least five terms and both a gain and a risk" },
    { id: "O5", condition: "Given an index-based crop or livestock insurance offer", action: "check the index, the trigger, the premium, the basis risk and the insurer's licence", standard: "before you pay, writing down the answer to each" },
    { id: "O6", condition: "Given your savings and the current inflation rate", action: "compare at least three ways to keep savings and choose a mix that protects them from inflation and theft", standard: "naming a risk for each way and checking any SACCO, bank or microfinance institution is licensed" }
  ],
  chapters: [
    {
      name: "Chapter 1: Seeing and spreading risk",
      lessons: [
        {
          title: "The kinds of farm risk and a risk register",
          objectives: ["O1"],
          minutes: 5,
          goal: "List your farm's main risks and rank them in a simple risk register.",
          text: [
            "Farm risks come in five kinds. Production risks: drought, floods, pests such as fall armyworm, diseases in crops and animals, theft. Market risks: prices falling, buyers not paying or not collecting, input prices rising. Money risks: debt you cannot repay, loss of savings, inflation, exchange rates for exports such as coffee and cocoa. Rule risks: new taxes, export bans, changes in land or market rules. People risks: illness, injury or death in the family, or losing a key worker.",
            "A risk register is a table with one line per risk. For each one, score how likely it is (1 low, 2 medium, 3 high) and how much damage it would do (1 small, 2 medium, 3 large). Multiply the two to get a score from 1 to 9. The highest scores come first.",
            "For each top risk, choose an action: avoid it (do not plant tomatoes in the wettest month), reduce it (drought-tolerant seed, vaccines as the vet advises, storage), share or move it (insurance, a contract, a cooperative), or accept it and keep savings for it. Review the register before each season."
          ],
          steps: ["List risks of each kind: production, market, money, rules, people.", "Score how likely each is: 1, 2 or 3.", "Score the damage each would do: 1, 2 or 3.", "Multiply the scores and rank the risks.", "For the top five, choose avoid, reduce, share or accept, and one action.", "Review before every season."],
          words: [["Risk", "something that may happen and would harm your farm or income."], ["Risk register", "a table listing your risks, how likely and how harmful each is, and what you will do."], ["Likelihood", "how probable it is that something will happen."], ["Impact", "how much damage it would do if it happened."]],
          slides: [
            { title: "Five kinds of farm risk", bullets: ["Production: weather, pests, disease, theft", "Market: prices, buyers, input costs", "Money, rules and people risks"] },
            { title: "Score each risk", bullets: ["Likelihood 1-3 x impact 1-3 = score 1-9", "Highest scores first"] },
            { title: "Four ways to respond", bullets: ["Avoid it", "Reduce it", "Share or move it: insurance, contracts, groups", "Accept it and keep savings for it"] }
          ],
          tryIt: "Write a risk register for your farm with at least eight risks covering all five kinds. Score each one, rank them, and write an avoid, reduce, share or accept action for the top five.",
          youCanNow: "list your farm's risks, rank them and choose an action for the most serious ones.",
          quickCheck: [
            { objective: "O1", q: "Maize prices fall by half at harvest. What kind of risk is this?", options: ["A production risk", "A people risk", "A market risk", "A rule risk"], answer: 2, why: "Price changes are market risks." },
            { objective: "O1", q: "A risk has likelihood 3 and impact 2. What is its score?", options: ["6", "5", "1", "9"], answer: 0, why: "3 x 2 = 6." }
          ]
        },
        {
          title: "Price swings and reading market trends",
          objectives: ["O2"],
          minutes: 6,
          goal: "Keep a weekly price log from at least two sources and describe the trend.",
          text: [
            "Prices for crops and animals rise and fall with the season, the weather, imports and exports, fuel costs and demand. Many staple prices are lowest at harvest, when everyone sells, and higher in the months before the next harvest. Even a price set by government can change a lot between seasons: in Cote d'Ivoire, the guaranteed farmgate price for cocoa was 2,800 CFA francs per kg in the 2025-2026 main season, and the government set it at 1,200 per kg for the intermediate season from March 2026, after world cocoa prices fell.",
            "Use official market information services where they exist. In Kenya, the Ministry of Agriculture's KAMIS publishes market prices. In Nigeria, the National Bureau of Statistics publishes a monthly food price report by state. In Ghana, the Ghana Commodity Exchange publishes the prices of its trades. Add radio market reports, your cooperative and at least two buyers.",
            "Keep a price log: each week, the date, the market or source, the product, grade and unit (for example a 90 kg bag of dry maize), and the price. After four weeks or more, look at the direction: rising, falling or flat. Compare with the same months last year if you can. A trend is a guide, not a promise: prices can turn quickly."
          ],
          steps: ["Choose your main product, grade and unit.", "Pick at least two sources, including an official service where one exists.", "Each week write: date, source, product, grade, unit, price.", "After four weeks, mark the direction: rising, falling or flat.", "Compare with the same months last year.", "Share the log with your group."],
          words: [["Market information service", "a service that collects and shares prices from markets, by website, SMS or radio."], ["Trend", "the general direction prices are moving over several weeks or months."], ["Farmgate price", "the price paid to the farmer at the farm, before transport to market."]],
          slides: [
            { title: "Why prices swing", bullets: ["Season, weather, imports and exports", "Fuel costs and demand", "Often lowest at harvest"] },
            { title: "Even set prices change", bullets: ["Cote d'Ivoire cocoa: 2,800 CFA/kg, 2025-26 main season", "Set at 1,200 CFA/kg from March 2026", "After world prices fell"] },
            { title: "Where to find prices", bullets: ["Kenya: KAMIS", "Nigeria: NBS monthly food prices", "Ghana: Commodity Exchange trades; radio; buyers"] },
            { title: "Your weekly price log", bullets: ["Date, source, product, grade, unit, price", "After 4 weeks: rising, falling or flat?", "A trend is a guide, not a promise"] }
          ],
          sources: [KAMIS, NBS, GCX, CI_COCOA],
          tryIt: "Start a price log for your main crop or animal today. Write this week's price from two sources, with product, grade and unit, and set a reminder on your phone for the same day each week.",
          youCanNow: "keep a weekly price log from official and local sources and describe the price trend.",
          quickCheck: [
            { objective: "O2", q: "Why write the grade and unit with every price in your log?", options: ["So the log looks official", "Buyers need to see it", "It is not needed", "So you compare the same thing each week"], answer: 3, why: "A price for a 50 kg bag of wet maize cannot be compared with a 90 kg bag of dry maize." },
            { objective: "O2", q: "Over five weeks, a market's tomato price went 400, 420, 450, 470, 500 per crate. What is the trend?", options: ["Falling", "Rising", "Flat", "It cannot be known"], answer: 1, why: "Each week the price is higher than the week before." }
          ]
        },
        {
          title: "Spreading risk: diversification, staged selling and storage",
          objectives: ["O3"],
          minutes: 6,
          goal: "Calculate whether storing pays and write a plan to sell in stages.",
          text: [
            "Diversification means not putting everything in one basket: two or more crops with different seasons or markets, a few goats or chickens, fish, trees, or off-farm income. When one fails, another may still pay. Do not spread so thin that you cannot manage any of them well.",
            "Staged selling means selling part of the harvest at different times instead of all at once. For example, sell a third at harvest to cover school fees and debts, a third two months later and a third four months later. You avoid selling everything at the lowest price, and you avoid betting everything on a high price that may not come.",
            "Storage only pays if the later price covers the storage costs and losses. Storage break-even price = (harvest price x bags + storage costs) / bags you will sell later. Example (made-up numbers in Kenya shillings): 10 bags of maize, harvest price 3,000 a bag, storage costs 3,000 for four months (hermetic bags, store, checks). Break-even = (30,000 + 3,000) / 10 = 3,300 a bag. If the price reaches 4,200 you gain; if it only reaches 3,200 you lose. Store only clean, dry grain in hermetic bags or a certified warehouse, and check it for pests and mould."
          ],
          steps: ["List what else you could grow, keep or earn so one failure does not ruin you.", "Work out how much cash you need at harvest.", "Plan to sell enough at harvest for that cash, and store the rest in stages.", "Storage break-even = (harvest price x bags + storage costs) / bags.", "Compare it with the price trend in your log.", "Store only clean, dry produce safely, and check it."],
          words: [["Diversification", "spreading your farming and income across several activities so one failure does not ruin you."], ["Staged selling", "selling a harvest in parts at different times instead of all at once."], ["Storage break-even price", "the later price you need to cover the harvest price you gave up plus storage costs."], ["Hermetic bag", "an airtight storage bag that stops insects breathing, so stored grain stays safe without chemicals."]],
          slides: [
            { title: "Diversify", bullets: ["Crops with different seasons or markets", "Small livestock, fish, trees, off-farm income", "Not so many you cannot manage them"] },
            { title: "Sell in stages", bullets: ["A third at harvest for cash needs", "A third after 2 months, a third after 4", "No all-or-nothing bet on price"] },
            { title: "Does storage pay? (example KES)", bullets: ["(3,000 x 10 + 3,000) / 10 = 3,300 a bag", "Price 4,200: gain; price 3,200: loss", "Compare with your price log"] },
            { title: "Store safely", bullets: ["Clean, dry grain only", "Hermetic bags or a certified warehouse", "Check for pests and mould"] }
          ],
          sources: [PICS],
          tryIt: "For your main crop, write how many bags or kg you expect, how much cash you need at harvest, and how much you will sell at harvest, after two months and after four months. Work out the storage break-even price for the part you will store.",
          youCanNow: "work out whether storage pays, plan to sell in stages and spread risk across more than one activity.",
          quickCheck: [
            { objective: "O3", q: "Harvest price 5,000 a bag, 20 bags, storage costs 10,000. What is the storage break-even price?", options: ["5,000", "10,500", "5,500", "500"], answer: 2, why: "(5,000 x 20 + 10,000) / 20 = 110,000 / 20 = 5,500 a bag." },
            { objective: "O3", q: "What is the main benefit of selling in stages?", options: ["You avoid selling everything at the lowest price or betting it all on a high price", "Buyers always pay more for small amounts", "You never need storage", "It removes all price risk"], answer: 0, why: "Selling in parts spreads the price risk over several dates." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Seeing and spreading risk",
        questions: [
          { objective: "O1", q: "Which is a production risk?", options: ["A new export tax", "A buyer who pays late", "Inflation", "Fall armyworm in your maize"], answer: 3, why: "Pests and weather affect what you produce, so they are production risks." },
          { objective: "O1", q: "Buying index insurance for drought is which response to a risk?", options: ["Avoid it", "Share or move it", "Accept it", "Ignore it"], answer: 1, why: "Insurance moves part of the loss to the insurer." },
          { objective: "O2", q: "Which is an official market price service in Kenya?", options: ["KAMIS from the Ministry of Agriculture", "A trader's WhatsApp status", "A neighbour's guess", "Last year's receipt"], answer: 0, why: "KAMIS is the Ministry of Agriculture's market information system." },
          { objective: "O3", q: "Harvest price 2,000 a bag, 10 bags, storage costs 4,000. The later price is 2,300. Does storing pay?", options: ["Yes, because 2,300 is more than 2,000", "Yes, storing always pays", "No, the break-even is 2,400, so it loses", "It cannot be worked out"], answer: 2, why: "(2,000 x 10 + 4,000) / 10 = 2,400; 2,300 is below that." },
          { objective: "O3", q: "A farmer grows only tomatoes for one buyer. What would spread the risk?", options: ["Planting more tomatoes for the same buyer", "Adding a crop with a different season and finding a second buyer", "Selling everything on harvest day", "Stopping record keeping"], answer: 1, why: "A second crop and a second buyer mean one failure does not take everything." }
        ]
      }
    },
    {
      name: "Chapter 2: Moving risk and protecting your money",
      lessons: [
        {
          title: "Fixed-price contracts, hedging and commodity exchanges",
          objectives: ["O4"],
          minutes: 6,
          goal: "List the terms to check in a fixed-price contract and explain what hedging means.",
          text: [
            "A forward or fixed-price contract is an agreement now to sell a set amount and quality at a set price on a later date. You gain certainty: you know your price before harvest, which helps you plan and borrow. You give something up: if the market price rises, you still get the agreed price. If your harvest fails or you sell elsewhere (side-selling), you may break the contract and owe a penalty. Before signing, check: product and grade, quantity, price or how it is set, delivery date and place, who pays transport, quality tests and rejection, payment date and method, and what happens if the harvest fails or the buyer does not collect.",
            "Hedging means taking a position that gains when your crop loses value, so the two balance out. On a commodity exchange, large traders and processors do this with futures: standard contracts to buy or sell later at a price agreed today. If prices fall, the futures position gains while the crop earns less; if prices rise, the futures position loses while the crop earns more. It needs a broker, deposits called margin that can be called at short notice, and skill. It can lose money and is not something to try without training and advice.",
            "In Africa, the Nigeria Commodity Exchange (NCX) is licensed by Nigeria's Securities and Exchange Commission and offers trade, price discovery, storage and grading of commodities. The Ghana Commodity Exchange (GCX), regulated by Ghana's Securities and Exchange Commission, began electronic spot trading of maize in 2018 and links farmers to certified warehouses. Most smallholders reach exchanges through a cooperative, aggregator or certified warehouse, not by trading themselves. This course does not recommend trading. Anyone promising you profits from commodity trading may be a scammer: check with the securities regulator."
          ],
          steps: ["Read the whole contract, aloud with your group if possible.", "Check product, grade, quantity, price, delivery date and place, and transport.", "Check quality tests, rejection, payment date and method.", "Ask what happens if the harvest fails or the buyer does not collect.", "Compare the fixed price with your break-even price and price log.", "Ask your cooperative, extension officer or a lawyer before signing."],
          words: [["Forward contract", "an agreement now to sell a set amount at a set price on a later date."], ["Hedging", "taking a position that gains when your crop loses value, so the losses balance out."], ["Futures", "standard contracts traded on an exchange to buy or sell a commodity later at a price agreed now."], ["Commodity exchange", "a regulated market where buyers and sellers trade crops and other goods by agreed grades and rules."], ["Side-selling", "selling produce promised to one buyer to someone else."]],
          slides: [
            { title: "Fixed-price contract", bullets: ["Set amount, quality and price for later", "Gain: a known price to plan and borrow", "Give up: the extra if prices rise"] },
            { title: "Check every term", bullets: ["Product, grade, quantity, price", "Delivery date, place, transport", "Quality tests, rejection, payment", "Harvest failure; buyer does not collect"] },
            { title: "What hedging means", bullets: ["A position that gains when your crop loses value", "Futures need a broker, margin and skill", "It can lose money: not for beginners"] },
            { title: "Exchanges in Africa", bullets: ["Nigeria: NCX, licensed by the SEC", "Ghana: GCX, maize spot trading since 2018", "Most farmers join through cooperatives or warehouses"] }
          ],
          sources: [NCX, GCX, GCX_FIRST],
          tryIt: "Take a real or example buyer contract. Write each of the eight terms from the steps and what the contract says (or \"missing\"). Then write one thing you gain and one risk you take if you sign it.",
          youCanNow: "check a fixed-price contract term by term and explain what hedging on a commodity exchange means and why it carries risk.",
          quickCheck: [
            { objective: "O4", q: "You sign a fixed price of 30,000 a bag. At delivery, the market price is 36,000. What do you get?", options: ["36,000 a bag", "33,000 a bag", "Nothing", "30,000 a bag, the agreed price"], answer: 3, why: "A fixed-price contract pays the agreed price even if the market rises." },
            { objective: "O4", q: "A stranger offers to trade commodity futures for you with \"guaranteed profits\". What should you do?", options: ["Refuse and check the company with the securities regulator", "Send a small deposit to test it", "Give your mobile money PIN so they can trade", "Sign quickly before the offer ends"], answer: 0, why: "No one can guarantee trading profits; it is a sign of a scam." }
          ]
        },
        {
          title: "Index-based crop and livestock insurance",
          objectives: ["O5"],
          minutes: 6,
          goal: "Check an index insurance offer for its index, trigger, premium, basis risk and licence.",
          text: [
            "Ordinary insurance sends someone to measure the loss on your farm. Index insurance pays when an index crosses a set level, called the trigger: for example rainfall measured by satellite or a weather station falling below normal, the average yield in your area falling, or satellite pictures showing pasture drying up. Nobody visits your field, so it can be cheaper and pay faster.",
            "Examples: ACRE Africa, an authorized insurance intermediary based in Kenya, works with local insurers to offer weather index, area yield index and index-based livestock insurance, often sold through farmer groups and paid by mobile money. Kenya's government runs the Kenya Livestock Insurance Programme (KLIP), launched in 2015 using index-based livestock insurance developed with ILRI: the government pays the premium for registered vulnerable pastoralists, and payouts are triggered when satellite pictures show pasture failing, so herders get cash to keep animals alive. In Senegal, the national agricultural insurance company CNAAS insures crops and livestock and offers index insurance.",
            "The big weakness is basis risk: the index may not match your own field. Your crop can fail from a local hailstorm while the area's rainfall looks normal, so no payout comes, or the index can trigger when your field did well. Before you pay, ask: what risk is covered, what index and where is it measured, what is the trigger, how much is the payout, what is the premium and the deadline to buy, how and when it pays, and is the insurer licensed (Kenya: Insurance Regulatory Authority; Nigeria: NAICOM; Ghana: National Insurance Commission; CFA franc countries: CIMA and the national insurance office)."
          ],
          steps: ["Ask what risk is covered: drought, excess rain, area yield loss or pasture failure.", "Ask what the index is and where it is measured.", "Ask the trigger and the payout amount.", "Ask the premium, the deadline to buy and how payouts reach you.", "Think about basis risk: would the index match your field?", "Check the insurer or agent is licensed by the insurance regulator."],
          words: [["Index insurance", "insurance that pays when a measured index, such as rainfall or pasture, crosses a set level, not on a visit to your farm."], ["Trigger", "the index level that makes the insurer pay."], ["Premium", "the price you pay for insurance cover."], ["Basis risk", "the chance that the index does not match what really happened on your farm."]],
          slides: [
            { title: "How index insurance works", bullets: ["Pays when an index crosses a trigger", "Rainfall, area yield or pasture from satellite", "No field visit: cheaper and faster"] },
            { title: "Examples", bullets: ["ACRE Africa: weather, area yield, livestock index", "Kenya KLIP: government pays premium for herders", "Senegal: CNAAS crop and livestock insurance"] },
            { title: "Basis risk", bullets: ["Index may not match your field", "Local hail: loss but no payout", "Ask how close the measuring point is"] },
            { title: "Ask before you pay", bullets: ["Risk, index, trigger, payout", "Premium, deadline, how it pays", "Licensed? IRA, NAICOM, NIC, CIMA"] }
          ],
          sources: [ACRE, IBLI, ILRI_KLIP, CNAAS],
          tryIt: "Ask your cooperative, input dealer or extension officer about one index insurance product near you (or use an example). Write the answers to the eight questions in the steps, and write one way basis risk could affect your farm.",
          youCanNow: "check an index insurance offer for its index, trigger, premium, basis risk and licence before you pay.",
          quickCheck: [
            { objective: "O5", q: "What makes an index insurance policy pay out?", options: ["An insurer visiting your field", "The index crossing the trigger level", "You asking for a payout", "Any loss you report"], answer: 1, why: "Index insurance pays on the measured index, not on a field visit." },
            { objective: "O5", q: "Your maize was destroyed by a local hailstorm, but the area rainfall index stayed normal. What is this called?", options: ["A premium", "A trigger", "Basis risk", "Hedging"], answer: 2, why: "Basis risk is when the index does not match what happened on your farm." }
          ]
        },
        {
          title: "Inflation and keeping your savings",
          objectives: ["O6"],
          minutes: 5,
          goal: "Compare ways to keep savings and choose a mix that protects them from inflation and theft.",
          text: [
            "Inflation means prices in general are rising, so the same money buys less. Example: if prices rise 10% in a year, 10,000 kept in a tin at home will buy only what about 9,100 buys today. Find the current inflation rate from your central bank or statistics office (Kenya: Central Bank of Kenya; Nigeria: National Bureau of Statistics; CFA franc countries in West Africa: BCEAO).",
            "Each way of saving has a risk. Cash at home: easy to reach, but loses value to inflation and can be stolen. A savings group or VSLA: builds a habit and may pay a share-out, but depends on honest records. A licensed SACCO, bank or microfinance account: safer and may pay interest, but compare the interest with inflation and check fees. Livestock: can grow in value, but can die of drought or disease. Stored grain: may rise in price, but can spoil or fall in price. Buying key inputs early: avoids price rises, but needs safe storage.",
            "Spread your savings across more than one way. Keep an emergency fund you can reach quickly. Check that any SACCO, bank or microfinance institution is licensed (in Kenya, SASRA lists licensed deposit-taking SACCOs). Be very careful with any scheme that promises high, fast returns: it is often a fraud. This lesson explains how saving works; it is not investment advice. Ask a trusted adviser for your own situation."
          ],
          steps: ["Find the current inflation rate from your central bank or statistics office.", "List where your savings are now: cash, group, SACCO, bank, animals, grain.", "Write one risk for each.", "Choose a mix of at least three, with an emergency fund you can reach fast.", "Check every SACCO, bank or microfinance institution is licensed.", "Refuse schemes that promise high, fast returns."],
          words: [["Inflation", "a general rise in prices, so the same money buys less."], ["Interest", "money a bank or SACCO pays you for keeping your savings, or that you pay to borrow."], ["Emergency fund", "savings kept for sudden problems, such as illness or a failed harvest, that you can reach quickly."], ["VSLA", "village savings and loan association: a group that saves together, lends to members and shares out the savings and profits."]],
          slides: [
            { title: "Inflation eats cash", bullets: ["Prices up 10%: 10,000 buys what about 9,100 does now", "Find the rate: central bank or statistics office"] },
            { title: "Every way of saving has a risk", bullets: ["Cash: inflation and theft", "Group, SACCO, bank: records, fees, interest vs inflation", "Animals and grain: disease, spoilage, prices"] },
            { title: "Protect your savings", bullets: ["Spread across at least three ways", "Keep an emergency fund you can reach", "Check licences (Kenya: SASRA list)", "High, fast returns? Often a fraud"] }
          ],
          sources: [CBK, NBS, BCEAO, SASRA],
          tryIt: "Final task: write your one-page farm risk plan: top five risks with actions, a four-week price log and its trend, your selling and storage plan with the storage break-even price, your questions for a contract and for index insurance, and your savings mix against inflation.",
          youCanNow: "protect your savings from inflation with a licensed, spread-out mix and bring all your risk tools together in one plan.",
          quickCheck: [
            { objective: "O6", q: "Prices rose 10% this year. What happened to 10,000 kept in a tin at home?", options: ["It buys less than it did a year ago", "It buys more than before", "It grew to 11,000", "Nothing changed"], answer: 0, why: "The same money buys less when prices rise." },
            { objective: "O6", q: "A group promises to double your savings in three months. What does this most likely show?", options: ["A good SACCO", "A normal bank offer", "Government support", "A likely fraud: high, fast returns are a warning sign"], answer: 3, why: "Promises of high, fast returns are a common sign of fraud." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Moving risk and protecting your money",
        questions: [
          { objective: "O4", q: "What do you give up when you sign a fixed-price contract?", options: ["The extra money if market prices rise", "Your land", "All your other crops", "Nothing at all"], answer: 0, why: "The price is fixed, so you do not gain if the market goes higher." },
          { objective: "O4", q: "Which body licenses the Nigeria Commodity Exchange?", options: ["The Nigerian Meteorological Agency", "The Securities and Exchange Commission", "NAFDAC", "The Central Bank of Kenya"], answer: 1, why: "NCX states it is licensed by the Securities and Exchange Commission." },
          { objective: "O5", q: "What does KLIP in Kenya use to decide when to pay herders?", options: ["A vet's visit to each herd", "The market price of cattle", "Satellite pictures showing pasture failing", "The number of animals sold"], answer: 2, why: "KLIP is index-based: satellite measures of pasture trigger the payout." },
          { objective: "O5", q: "Which question checks basis risk?", options: ["What colour is the policy?", "How fast is the agent?", "Who else bought it?", "Where is the index measured and how close is it to my field?"], answer: 3, why: "The farther the measuring point, the more the index may differ from your field." },
          { objective: "O6", q: "Which is a sensible way to keep savings safer?", options: ["Spread them across licensed accounts, a group and other ways, with an emergency fund", "Keep all cash in one tin", "Put everything in the scheme promising the highest return", "Lend it all to one stranger"], answer: 0, why: "Spreading savings across checked places limits the damage from any one loss." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Agricultural Risk Management: Prices, Weather and Insurance",
    questions: [
      { objective: "O1", q: "Illness in the family that stops farm work is which kind of risk?", options: ["Market risk", "Rule risk", "People risk", "Production risk"], answer: 2, why: "Risks to the people who run the farm are people risks." },
      { objective: "O1", q: "Likelihood 2 and impact 3 give a risk score of:", options: ["6", "5", "1", "9"], answer: 0, why: "2 x 3 = 6." },
      { objective: "O1", q: "Choosing not to plant tomatoes in the wettest month is which response?", options: ["Share it", "Accept it", "Ignore it", "Avoid it"], answer: 3, why: "You avoid the risk by not taking it on." },
      { objective: "O1", q: "When should you review your risk register?", options: ["Never", "Before every season", "Only after a disaster", "Every ten years"], answer: 1, why: "Risks change, so check before each season's decisions." },
      { objective: "O2", q: "Many staple crop prices are usually lowest:", options: ["Just before planting", "In the hungry months", "Right after harvest", "They never change"], answer: 2, why: "At harvest many farmers sell at once, which pushes prices down." },
      { objective: "O2", q: "In Nigeria, which body publishes a monthly report of food prices by state?", options: ["The National Bureau of Statistics", "The Nigerian Meteorological Agency", "NAFDAC", "The Securities and Exchange Commission"], answer: 0, why: "The NBS publishes a monthly Selected Food Prices Watch." },
      { objective: "O2", q: "What does the Cote d'Ivoire cocoa price change from 2,800 to 1,200 CFA francs per kg show?", options: ["Fixed prices never change", "Cocoa is not risky", "Only traders face price risk", "Even government-set prices can change a lot between seasons"], answer: 3, why: "The farmgate price was cut after world cocoa prices fell." },
      { objective: "O2", q: "A price trend is best described as:", options: ["A promise of next month's price", "The general direction prices move over weeks or months", "One buyer's offer", "The government's price"], answer: 1, why: "A trend is a guide from past prices, not a promise." },
      { objective: "O3", q: "Diversification means:", options: ["Growing only your best crop", "Selling everything at harvest", "Spreading farming and income across several activities", "Borrowing more"], answer: 2, why: "Several activities mean one failure does not ruin you." },
      { objective: "O3", q: "Harvest price 4,000 a bag, 10 bags, storage costs 2,000. What is the storage break-even price?", options: ["4,200", "4,000", "2,000", "6,000"], answer: 0, why: "(4,000 x 10 + 2,000) / 10 = 4,200 a bag." },
      { objective: "O3", q: "Before storing grain to sell later, you should first:", options: ["Store it wet to keep its weight", "Mix it with last year's grain", "Sell your cash needs at harvest and store only clean, dry grain safely", "Store it all, even if you need cash now"], answer: 2, why: "Covering cash needs and storing only clean, dry grain avoids forced sales and spoilage." },
      { objective: "O4", q: "A forward contract is:", options: ["A loan from a bank", "An agreement now to sell a set amount at a set price later", "An insurance policy", "A savings account"], answer: 1, why: "It fixes the amount and price today for a later sale." },
      { objective: "O4", q: "Which term must a fixed-price contract cover?", options: ["The buyer's favourite crop", "The colour of the bags only", "Your family size", "What happens if the harvest fails or the buyer does not collect"], answer: 3, why: "These cases decide who carries the loss when things go wrong." },
      { objective: "O4", q: "Why is hedging with futures not for beginners?", options: ["It needs a broker, margin deposits and skill, and can lose money", "It is illegal in Africa", "It only works for cocoa", "It always makes money"], answer: 0, why: "Futures positions can lose money and need deposits at short notice." },
      { objective: "O4", q: "How do most smallholders reach a commodity exchange such as GCX?", options: ["By trading futures on their phones", "Through a cooperative, aggregator or certified warehouse", "By visiting the exchange daily", "They cannot use it at all"], answer: 1, why: "Groups and warehouses bring farmers' produce to the exchange." },
      { objective: "O5", q: "Index insurance pays when:", options: ["You report a loss", "An agent visits your farm", "The measured index crosses the trigger", "The premium is paid"], answer: 2, why: "Payouts follow the index, not a field visit." },
      { objective: "O5", q: "Who pays the premium in Kenya's KLIP for registered vulnerable pastoralists?", options: ["The pastoralists themselves", "The livestock buyer", "The bank", "The government"], answer: 3, why: "KLIP is a government programme that buys the cover for them." },
      { objective: "O5", q: "Before buying index insurance, you should check the insurer is licensed. In Nigeria, the regulator is:", options: ["NAICOM", "NAFDAC", "NiMet", "NBS"], answer: 0, why: "NAICOM, the National Insurance Commission, regulates insurers in Nigeria." },
      { objective: "O6", q: "Where do you find the current inflation rate?", options: ["A trader at the market", "Your central bank or national statistics office", "A social media post", "The insurance agent"], answer: 1, why: "Central banks and statistics offices publish official inflation figures." },
      { objective: "O6", q: "What is a risk of keeping savings as livestock?", options: ["Animals never change in value", "Banks will not accept them", "They can die of drought or disease", "There is no risk"], answer: 2, why: "Drought and disease can wipe out savings held as animals." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 1, 5, 7, 9, 11, 13, 15, 16, 18] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part of the plan and check it again.",
    criteria: [
      { name: "Risk register", objective: "O1", notYet: "Fewer than five risks, or risks are not scored or have no actions.", meets: "At least eight risks covering all five kinds, scored and ranked, with an action for each of the top five.", exceeds: "Actions have dates and costs, and the plan says when the register will be reviewed." },
      { name: "Price log and trend", objective: "O2", notYet: "Fewer than four weeks, one source only, or units and grades mixed.", meets: "Four weeks from at least two sources, same product, grade and unit, with the trend described.", exceeds: "Includes an official service and the same months last year, and says what the trend means for selling." },
      { name: "Selling and storage plan", objective: "O3", notYet: "No storage break-even price, or cash needs at harvest are ignored.", meets: "Correct storage break-even price, cash needs covered at harvest, and sales planned in stages.", exceeds: "Also adds a second enterprise or market to spread risk, and safe storage steps." },
      { name: "Contract and insurance questions", objective: "O4", notYet: "Fewer than five contract terms, or no insurance questions.", meets: "At least eight contract terms with a gain and a risk, and what hedging means in one sentence.", exceeds: "Compares the fixed price with the break-even price and price log." },
      { name: "Index insurance check", objective: "O5", notYet: "Index, trigger, premium or basis risk is missing.", meets: "Index, trigger, payout, premium, deadline, basis risk and licence check are all answered.", exceeds: "Answers come from a real offer near the farm, with the regulator named." },
      { name: "Savings against inflation", objective: "O6", notYet: "One way of saving only, or no risks named.", meets: "At least three ways compared, each with a risk, the inflation rate noted and licences checked.", exceeds: "Includes an emergency fund amount and a date to review the mix." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and score Meets or Exceeds on every rubric row of the farm risk plan",
      "Learners who still keep a weekly price log 30 days later (follow-up survey)",
      "Learners who report selling in stages or storing safely instead of selling everything at harvest",
      "Learners who report reading a contract or insurance offer term by term, or refusing an unlicensed lender, insurer or trading scheme",
      "Partner cooperatives report fewer members forced to sell animals or land after a bad season"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A notebook and pen, and a basic phone for prices by SMS, calls or radio",
      "A phone calculator",
      "A real or example buyer contract and index insurance leaflet from the local area, if available",
      "About 80 minutes in total, in short sessions, plus four weeks of price logging for the final task"
    ],
    facilitatorNotes: [
      "In a farmer group or extension session: take the pre-test together, then one chapter per session; do the risk register in small groups first.",
      "Ask learners to start the price log after Lesson 2 so they have four weeks for the final task; collect prices as a group and share them.",
      "Invite a licensed insurer, cooperative or warehouse operator to explain a real product, but do not endorse any company; let learners ask the lesson's questions.",
      "Do not recommend trading on any exchange or buying any financial product; say clearly that the course explains how things work and their risks.",
      "Score the risk plan with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
