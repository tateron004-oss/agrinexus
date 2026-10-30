"use strict";

// Koach Learn course: Africa: Life and Work -> "Selling Across Borders: Small Traders and the AfCFTA" (owner, 30 October 2026: "are there any more courses africans can use to support there lives").
// For small traders, market women, artisans and small manufacturers who sell, or want to sell, to a neighbouring African country: what the AfCFTA and the regional schemes
// (ECOWAS, EAC, COMESA) mean for a small trader, the papers at an official crossing, the full cost of a batch in two currencies, getting paid safely, and what to do about
// unofficial charges (reporting a non-tariff barrier). Tariffs, thresholds, fees and forms differ by country and change: the course names the offices and tells learners to
// check, and gives no tariff or fee figures. All money figures are made-up examples.

const AFCFTA = { name: "AfCFTA Secretariat: About the AfCFTA (55 AU countries, trading from 1 January 2021, Secretariat in Accra)", url: "https://au-afcfta.org/about/" };
const GTI = { name: "AfCFTA Secretariat: Guided Trade Initiative (launched 7 October 2022)", url: "https://au-afcfta.org/operational-instruments/guided-trade-initiative/" };
const ROO = { name: "AfCFTA Secretariat: Rules of Origin (Annex 2 and the Rules of Origin Manual)", url: "https://au-afcfta.org/operational-instruments/rules-of-origin/" };
const NTB = { name: "AfCFTA Non-Tariff Barriers reporting, monitoring and elimination mechanism", url: "https://www.tradebarriers.africa/" };
const PAPSS = { name: "Pan-African Payment and Settlement System (PAPSS)", url: "https://papss.com/" };
const ETLS = { name: "ECOWAS Trade Liberalisation Scheme (ETLS), ECOWAS Commission", url: "https://etls.ecowas.int/" };
const COMESA = { name: "COMESA: Trade and Customs (including the Simplified Trade Regime for small traders)", url: "https://www.comesa.int/trade-customs-division-2/" };

module.exports = {
  id: "afr-afcfta-cross-border-trade",
  category: "Africa: Life and Work",
  name: "Selling Across Borders: Small Traders and the AfCFTA",
  skills: "Explaining the AfCFTA and regional trade schemes, Preparing papers for an official border crossing, Costing a cross-border batch in two currencies, Getting paid safely across borders, Reporting unofficial charges and trade barriers",
  outcome: "plan a legal, safe and profitable cross-border sale: check the rules that apply to your goods, prepare the right papers, work out the full cost and price in both currencies, choose a safe way to get paid, and know what to do if someone asks for an unofficial payment.",
  about: [
    "This course is for small traders, market women, artisans and small manufacturers across Africa who sell, or want to sell, to a neighbouring country: shea butter from Tamale to Ouagadougou, fabric from Lagos to Cotonou, shoes from Nairobi to Kampala, or cosmetics from Dakar to Bamako.",
    "Chapter 1 explains the African Continental Free Trade Area (AfCFTA) and the regional schemes that already help small traders, and the papers you need at an official crossing. Chapter 2 covers the money: the full cost of a batch, getting paid safely, and what to do about unofficial charges and delays.",
    "Duties, fees, forms and limits differ by country and change over time. This course gives no tariff or fee figures. It tells you which office to ask, and you check before you travel. All money figures are examples only. Each lesson takes about five minutes and ends with a task. Quick checks follow every lesson, a knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Write a one-page cross-border trade plan for one product and one route (yours, or an example such as shea butter from Tamale, Ghana, to Ouagadougou, Burkina Faso): the product and the official crossing, the rules you checked and where, the list of papers you will carry, the full cost and your selling price in both currencies, how you will be paid and how you will stay safe from scams, and what you will do and whom you will report to if someone asks for an unofficial payment.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Small traders, market women, artisans and small manufacturers in towns and border areas across Africa (Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire, Burkina Faso, Cameroon and beyond) who sell or want to sell to a neighbouring country.",
    startingPoint: "Many already trade across borders, often informally, carrying goods through crossings or using transporters. Few know the AfCFTA or their regional scheme, which papers give them lower duties, how to cost a batch in two currencies, or where to report unofficial charges.",
    gap: "Informal traders often pay unofficial charges, lose goods at the border, sell at a loss after exchange and transport costs, and fall for payment scams. Knowing the rules, carrying the right papers, costing properly and reporting barriers lets them trade legally, keep more profit and grow.",
    constraints: [
      "Reading level: plain words and short sentences; every trade term is explained",
      "Devices: a basic Android phone with costly data; a calculator and a notebook",
      "Rules, duties, fees and limits differ by country and change: learners check with customs and trade offices; the course gives no tariff or fee figures",
      "Money safety: no PINs or passwords shared; no investment advice",
      "Course is also translated into French and Arabic, so examples include francophone and North African traders"
    ],
    prerequisites: "Basic reading and phone use. \"Using Mobile Money Safely\" and \"Registering and Running a Small Business in Africa\" are helpful but not required."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given your product and the country you want to sell to", action: "explain what the AfCFTA and your regional trade scheme can do for a small trader and name the offices to check the current rules with", standard: "naming at least two offices or official websites" },
    { id: "O2", condition: "Before you take goods through an official border crossing", action: "list the papers and steps you need for your goods, such as receipts, an invoice, a customs declaration and a certificate of origin", standard: "with every paper on the list checked with customs or a trade desk" },
    { id: "O3", condition: "Given the costs of one batch and an exchange rate", action: "calculate the full cost per item and a selling price in both currencies", standard: "including every cost and a profit, with the arithmetic correct" },
    { id: "O4", condition: "When a buyer in another country pays you", action: "choose a safe way to receive the money and spot the warning signs of a payment scam", standard: "never sharing a PIN or sending goods before the money is confirmed" },
    { id: "O5", condition: "When someone at or near the border asks for an unofficial payment or holds your goods", action: "describe the safe steps to take and report the problem as a non-tariff barrier", standard: "naming the official reporting channel and the facts to write down" }
  ],
  chapters: [
    {
      name: "Chapter 1: The rules and the papers",
      lessons: [
        {
          title: "What the AfCFTA means for a small trader",
          objectives: ["O1"],
          minutes: 5,
          goal: "Explain in your own words what the AfCFTA is and how it can help your business.",
          text: [
            "The African Continental Free Trade Area (AfCFTA) is an agreement among the 55 countries of the African Union to make one big market of about 1.3 billion people. Trading under it started on 1 January 2021. Its Secretariat is in Accra, Ghana.",
            "The main idea: over time, countries that have joined lower or remove import duties on goods made in other member countries, and work to remove other barriers, such as long delays and extra papers. To get the lower duty, your goods must \"come from\" a member country under the rules of origin. Goods only bought from outside Africa and resold do not qualify.",
            "Not every country applies it in the same way or at the same speed, and not every product is covered yet. The Guided Trade Initiative, launched on 7 October 2022, started real trade under AfCFTA rules in a group of countries. So before you count on a lower duty, check with your customs authority, your trade ministry or chamber of commerce, and the AfCFTA website.",
            "Even where the AfCFTA is not yet working for your product, regional schemes may already help you. That is the next lesson."
          ],
          words: [["AfCFTA", "the African Continental Free Trade Area: an agreement to make Africa one big market with lower duties and fewer barriers."], ["Import duty (tariff)", "a tax a country charges on goods that come in from another country."], ["Rules of origin", "the rules that decide which country a product \"comes from\", so it can get the lower duty."]],
          slides: [
            { title: "What the AfCFTA is", bullets: ["55 African Union countries, one big market", "About 1.3 billion people", "Trading started 1 January 2021; Secretariat in Accra"] },
            { title: "What it can do for you", bullets: ["Lower or no import duty on goods made in member countries", "Fewer delays and extra papers over time", "Bigger markets next door"] },
            { title: "The catch", bullets: ["Goods must meet the rules of origin", "Countries apply it at different speeds", "Not every product is covered yet"] },
            { title: "Check before you count on it", bullets: ["Your customs authority", "Trade ministry or chamber of commerce", "au-afcfta.org"] }
          ],
          sources: [AFCFTA, GTI, ROO],
          tryIt: "Write down one product you sell or could sell, and one neighbouring country you could sell it to. Then write two places where you will check whether the AfCFTA lowers the duty on that product.",
          youCanNow: "say what the AfCFTA is, how it can help a small trader, and where to check whether it applies to your goods.",
          quickCheck: [
            { objective: "O1", q: "What is the main thing the AfCFTA aims to do for traders?", options: ["Fix the prices of all goods in Africa", "Lower duties and barriers on goods made in member countries", "Make one currency for all of Africa", "Stop all border checks"], answer: 1, why: "The AfCFTA aims to lower duties and barriers on goods that come from member countries; it does not fix prices, create one currency or stop checks." },
            { objective: "O1", q: "A trader buys phone covers made outside Africa and wants to resell them next door under the AfCFTA. What is true?", options: ["They always get zero duty", "The AfCFTA only covers food", "They likely do not qualify, because the goods were not made in a member country", "They need no papers at all"], answer: 2, why: "Under the rules of origin, goods only bought from outside Africa and resold do not come from a member country." }
          ]
        },
        {
          title: "Regional schemes that already help small traders",
          objectives: ["O1"],
          minutes: 5,
          goal: "Find the regional trade scheme for your route and the desk or office that explains it.",
          text: [
            "Before the AfCFTA, Africa's regional economic communities already made trade easier. In West Africa, the ECOWAS Trade Liberalisation Scheme (ETLS) lets approved goods from ECOWAS countries move between member states with lower or no duty. Senegal, Mali, Côte d'Ivoire, Ghana and Nigeria are all ECOWAS members.",
            "In East and Southern Africa, the East African Community (EAC) and COMESA have Simplified Trade Regimes for small traders. They allow small consignments of listed goods to cross with simpler papers, such as a simplified certificate of origin. Some border posts have trade information desks where officers explain the rules to small traders, free of charge.",
            "The value limits, the list of goods and the forms are set by each scheme and can change. Ask the customs office at your crossing, the trade information desk, or your cross-border traders' association. Write down what they tell you, with the date and the officer's name.",
            "Central Africa (for example Cameroon) and North Africa (for example Morocco, Egypt and Tunisia) have their own regional agreements too. Ask your customs authority which ones apply to your route."
          ],
          steps: ["Write your route: from which country, through which crossing, to which country.", "Find the regional community both countries belong to (for example ECOWAS, EAC or COMESA).", "Ask the customs office, trade desk or traders' association which scheme your goods can use.", "Ask: which goods qualify, what value limit applies, and which form or certificate you need.", "Write the answers down with the date and the officer's name."],
          words: [["Regional economic community", "a group of neighbouring countries that work together on trade, for example ECOWAS, EAC or COMESA."], ["Simplified Trade Regime", "an EAC or COMESA arrangement that lets small traders take small loads of listed goods across with simpler papers."], ["Consignment", "one load or batch of goods you send or carry."]],
          slides: [
            { title: "Regional schemes help now", bullets: ["West Africa: ECOWAS Trade Liberalisation Scheme (ETLS)", "East and Southern Africa: EAC and COMESA Simplified Trade Regimes", "Central and North Africa: their own agreements"] },
            { title: "Simplified rules for small traders", bullets: ["Small loads of listed goods", "Simpler papers, like a simplified certificate of origin", "Trade information desks at some border posts"] },
            { title: "Ask, and write it down", bullets: ["Which goods qualify? What value limit?", "Which form or certificate?", "Write the date and the officer's name"] }
          ],
          sources: [ETLS, COMESA],
          tryIt: "For your route from Lesson 1, write the regional community both countries belong to, and three questions you will ask at the customs office or trade desk.",
          youCanNow: "find the regional scheme for your route and ask the right office the right questions about it.",
          quickCheck: [
            { objective: "O1", q: "Which scheme is most likely to apply to a trader taking shea butter from Ghana to Burkina Faso?", options: ["The COMESA Simplified Trade Regime", "The EAC Customs Union", "No scheme at all", "The ECOWAS Trade Liberalisation Scheme"], answer: 3, why: "Ghana and Burkina Faso are both in West Africa's ECOWAS region, so ETLS is the scheme to ask about." },
            { objective: "O1", q: "You want to know the value limit for a simplified certificate on your route. What do you do?", options: ["Ask the customs office or trade desk at the crossing and write the answer down", "Guess, because it is the same everywhere", "Ask the bus driver", "Use the figure from a friend's crossing last year"], answer: 0, why: "Limits differ by scheme and change, so the customs office or trade desk is the place to ask." }
          ]
        },
        {
          title: "The papers you carry at an official crossing",
          objectives: ["O2"],
          minutes: 5,
          goal: "List the papers and steps for taking your goods through an official border crossing.",
          text: [
            "Using an official crossing protects you. Your goods are recorded, you can claim lower duties under the schemes, and you have proof if something goes wrong. Goods smuggled through unofficial paths can be seized, and you have no protection.",
            "Common papers include: your ID or passport; a receipt or invoice showing what you bought or made and its value; a list of your goods (a packing list); a customs declaration, which the officer or a clearing agent helps you fill; and a certificate of origin when you want a lower duty. Food, plants, animals, medicines and cosmetics may also need a health, plant (phytosanitary) or product approval certificate.",
            "Some goods are restricted or banned. Ask before you buy stock. A clearing agent can help with bigger loads, but always get a receipt for every official payment, and keep copies of all papers on your phone and on paper.",
            "Example: Awa sells handmade soap from Dakar to Bamako. She asks the customs office which papers she needs, gets her invoice and a certificate of origin, and keeps a photo of each paper. At the border she pays only what is on the official receipt."
          ],
          steps: ["Ask customs which papers your goods need, and whether any are restricted.", "Get receipts or invoices for your goods, and make a packing list.", "Get a certificate of origin if you want a lower duty under a scheme.", "Ask about health, plant or product certificates for food, plants, animals and cosmetics.", "Use the official crossing, fill the customs declaration, and keep a receipt for every payment.", "Keep copies of every paper on paper and as photos on your phone."],
          words: [["Customs declaration", "a form telling customs what goods you carry and their value."], ["Certificate of origin", "a paper that shows which country your goods come from, so you can get a lower duty."], ["Clearing agent", "a licensed person or company that helps traders complete customs papers, for a fee."], ["Phytosanitary certificate", "a plant health certificate for plants, seeds, grains, fruits and vegetables."]],
          slides: [
            { title: "Why use the official crossing", bullets: ["Goods recorded; you can claim lower duties", "Proof if something goes wrong", "Smuggled goods can be seized"] },
            { title: "Common papers", bullets: ["ID or passport; receipt or invoice", "Packing list; customs declaration", "Certificate of origin for a lower duty"] },
            { title: "Extra papers for some goods", bullets: ["Food, plants, animals: health or plant certificates", "Cosmetics and medicines: product approval", "Some goods are restricted: ask before you buy stock"] },
            { title: "Protect yourself", bullets: ["A receipt for every official payment", "Copies on paper and photos on your phone", "Clearing agent for bigger loads"] }
          ],
          sources: [ROO, ETLS],
          tryIt: "Make a paper checklist for your product and route: every paper you think you need, with a box to tick after customs or the trade desk confirms it.",
          youCanNow: "list the papers and steps you need to take your goods through an official crossing, and keep proof of every payment.",
          quickCheck: [
            { objective: "O2", q: "Which paper helps you claim a lower duty under a trade scheme?", options: ["A bus ticket", "A certificate of origin", "A phone receipt", "A school certificate"], answer: 1, why: "A certificate of origin shows the goods come from a member country, which is what the lower duty depends on." },
            { objective: "O2", q: "You pay a fee at customs. What should you get?", options: ["Nothing; fees are always informal", "A handshake", "An official receipt, which you keep", "A promise to see you next time"], answer: 2, why: "An official receipt is proof of a real fee and protects you if anything goes wrong." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: The rules and the papers",
        questions: [
          { objective: "O1", q: "Where should you check whether the AfCFTA lowers the duty on your product?", options: ["A social media post", "The buyer's cousin", "Your customs authority and the AfCFTA website", "Any trader at the market"], answer: 2, why: "Customs and the AfCFTA Secretariat give the current, official answer." },
          { objective: "O1", q: "A trader takes shoes from Nairobi to Kampala. Which simplified scheme should she ask about?", options: ["ECOWAS Trade Liberalisation Scheme", "None exists in East Africa", "A European scheme", "The EAC or COMESA Simplified Trade Regime"], answer: 3, why: "Kenya and Uganda are in East Africa, where the EAC and COMESA have simplified regimes for small traders." },
          { objective: "O2", q: "Why is an official crossing better than a bush path?", options: ["Your goods are recorded and you can claim lower duties and protection", "It is always faster", "No one checks anything", "It is always free"], answer: 0, why: "Official crossings record goods, let you use trade schemes and give you proof and protection." },
          { objective: "O2", q: "Kofi will carry dried fish to Togo. Which extra paper might he need?", options: ["A driving licence for a lorry he does not drive", "A health certificate for food", "A school report", "Nothing extra for food"], answer: 1, why: "Food, animal and plant products often need a health or plant certificate; he should ask customs." },
          { objective: "O2", q: "What is the best way to keep your papers?", options: ["Only in your head", "Give them to the transporter", "Throw them away after the border", "On paper and as photos on your phone"], answer: 3, why: "Keeping both copies means you still have proof if one is lost." }
        ]
      }
    },
    {
      name: "Chapter 2: Money, payment and problems at the border",
      lessons: [
        {
          title: "Costing a cross-border batch in two currencies",
          objectives: ["O3"],
          minutes: 6,
          goal: "Calculate the full cost per item and a selling price in both currencies.",
          text: [
            "Many traders lose money across borders because they count only the cost of the goods. Count everything: the goods, packing, transport to the border and beyond, loading, official duties and fees (checked with customs), clearing agent, storage, your phone and data, your food and lodging on the trip, and a little extra for losses.",
            "Add all costs and divide by the number of items you can really sell. That is your cost per item. Add your profit to get a selling price. Then change it into the buyer's currency using today's exchange rate, and check the price of similar goods in that market.",
            "Example (figures are examples only): Ama buys and packs 100 tubs of shea butter in Tamale for GHS 2,000 in all. Transport, loading and lodging cost GHS 600. Official fees checked at customs: GHS 200. Total GHS 2,800, so GHS 28 per tub. She adds GHS 7 profit: GHS 35. If the day's rate were 1 GHS = 40 XOF, that is 1,400 XOF per tub. She checks that shops in Ouagadougou sell similar tubs for about that price.",
            "Exchange rates move every day. Check the rate on the day you sell and the day you change money, and agree with your buyer which currency the price is in."
          ],
          steps: ["List every cost of the batch, from buying to selling.", "Add them to get the total cost.", "Divide by the number of items you can really sell: cost per item.", "Add your profit: selling price in your currency.", "Change it to the buyer's currency at today's rate, and compare with the market price there."],
          words: [["Exchange rate", "how much of one currency you get for one unit of another, for example how many XOF for 1 GHS."], ["Cost per item", "the total cost of a batch divided by the number of items you can sell."], ["Landed cost", "the full cost of goods once they reach the buyer's market, including transport and duties."]],
          slides: [
            { title: "Count every cost", bullets: ["Goods, packing, transport, loading", "Official duties and fees, agent, storage", "Phone, food, lodging, and a little for losses"] },
            { title: "From cost to price", bullets: ["Total cost / items you can sell = cost per item", "Cost per item + profit = selling price", "Then change it to the buyer's currency"] },
            { title: "Example (figures are examples only)", bullets: ["100 tubs: GHS 2,800 in all = GHS 28 each", "Add GHS 7 profit = GHS 35", "At 1 GHS = 40 XOF: 1,400 XOF per tub"] },
            { title: "Watch the rate", bullets: ["Rates change every day", "Check on the day you sell and change money", "Agree with the buyer which currency"] }
          ],
          tryIt: "Cost one batch of your product for your route: list every cost, find the cost per item, add your profit, and write the price in both currencies using today's rate.",
          youCanNow: "work out the full cost per item of a cross-border batch and a selling price in both currencies.",
          quickCheck: [
            { objective: "O3", q: "A batch of 50 bags costs NGN 250,000 in total, including transport and fees. What is the cost per bag?", options: ["NGN 500", "NGN 50,000", "NGN 2,500", "NGN 5,000"], answer: 3, why: "250,000 divided by 50 bags is 5,000 per bag." },
            { objective: "O3", q: "Which cost do traders most often forget?", options: ["Their own lodging, food and losses on the trip", "The price of the goods", "The selling price", "The number of items"], answer: 0, why: "Trip costs such as lodging, food and losses are easy to forget, and they eat the profit." }
          ]
        },
        {
          title: "Getting paid safely across borders",
          objectives: ["O4"],
          minutes: 5,
          goal: "Choose a safe way to receive payment from a buyer in another country and spot a payment scam.",
          text: [
            "Cash at the border is risky: you can be robbed, and changing money in the street can give you a bad rate or fake notes. Safer ways include a bank transfer, a mobile money service that sends across borders on your route, and payment systems such as PAPSS (the Pan-African Payment and Settlement System), which lets a payer in one African country pay in local currency and the receiver get local currency, through banks and payment providers that have joined it. Ask your bank or mobile money provider what works on your route and what it costs.",
            "For a new buyer, ask for a deposit before you send, or full payment before you hand over the goods. Check that the money has really arrived in your account, by checking your balance yourself, not by trusting a message the buyer sends you.",
            "Warning signs of a scam: a buyer who sends a fake \"payment received\" message or screenshot; someone who says they sent too much by mistake and asks you to send the difference back; anyone who asks for your PIN, password or a code sent to your phone; and a buyer who rushes you to release goods before you check. A real bank or mobile money provider never asks for your PIN."
          ],
          steps: ["Agree the price, the currency and the payment method in writing.", "Ask a new buyer for a deposit or full payment first.", "Check your balance yourself to confirm the money arrived.", "Only then release the goods, and give a receipt.", "Never share your PIN, password or a code sent to your phone."],
          words: [["PAPSS", "the Pan-African Payment and Settlement System: lets payments between African countries be made in local currencies, through banks and payment providers that have joined."], ["Deposit", "part of the price paid before you send the goods."], ["PIN", "the secret number for your bank card or mobile money account. Never share it."]],
          slides: [
            { title: "Safer than cash at the border", bullets: ["Bank transfer", "Cross-border mobile money on your route", "PAPSS: pay and receive in local currencies via banks"] },
            { title: "Get paid before you hand over", bullets: ["New buyer: deposit or full payment first", "Check your balance yourself", "Then release the goods and give a receipt"] },
            { title: "Scam warning signs", bullets: ["Fake \"payment received\" message or screenshot", "\"I sent too much, send it back\"", "Asks for your PIN or code; rushes you"] },
            { title: "Remember", bullets: ["A real provider never asks for your PIN", "Never share a code sent to your phone"] }
          ],
          sources: [PAPSS],
          tryIt: "Write the payment rule for your business in three lines: which method you accept, when you release goods, and how you check the money arrived. Ask your bank or mobile money provider which cross-border service works on your route.",
          youCanNow: "choose a safe way to get paid by a buyer in another country and spot the signs of a payment scam.",
          quickCheck: [
            { objective: "O4", q: "A new buyer in Abidjan sends a screenshot saying he paid. What do you do before sending goods?", options: ["Send the goods at once", "Check your own balance to confirm the money arrived", "Ask him for another screenshot", "Send him your PIN so he can check"], answer: 1, why: "Screenshots can be fake; only your own balance proves the money arrived." },
            { objective: "O4", q: "A buyer says he sent too much and asks you to send back the difference. What is this most likely?", options: ["A normal refund", "A bank error you must fix fast", "A common scam: check your balance and talk to your provider", "A tax"], answer: 2, why: "\"I sent too much, send it back\" is a well-known scam; check your balance and call your provider's official number." }
          ]
        },
        {
          title: "Unofficial charges, delays and your trade plan",
          objectives: ["O5"],
          minutes: 6,
          goal: "Describe the safe steps to take when asked for an unofficial payment, and report it as a non-tariff barrier.",
          text: [
            "A non-tariff barrier (NTB) is anything other than a duty that makes trade harder: unofficial charges at roadblocks, long delays, papers that are not in the rules, or goods held without a reason. The AfCFTA has an online system, tradebarriers.africa, where any trader, including informal traders, women and young people, can report an NTB. Reports go to national focal points and the AfCFTA Secretariat to be followed up.",
            "If someone asks for money without a receipt: stay calm and polite, and put your safety first. Ask for the official fee and a receipt. Ask to speak to the officer in charge, or to the trade information desk. Do not argue in a way that puts you in danger.",
            "Afterwards, write the facts: date, time, place, what was asked, the amount, and any name or badge number you saw. Report it on tradebarriers.africa (online or through its mobile phone option), to your customs authority's complaints line, or through your traders' association. Women traders who face harassment can also ask their association or a women traders' group for support.",
            "Now put it all together. Your cross-border trade plan has: the product and crossing, the rules you checked, your papers, your cost and price in two currencies, how you get paid, and what you will do about unofficial charges."
          ],
          steps: ["Stay calm and polite; your safety comes first.", "Ask for the official fee and a receipt, or for the officer in charge or the trade desk.", "Write the facts: date, time, place, amount, name or badge number.", "Report it on tradebarriers.africa, to customs, or through your traders' association.", "Add these steps to your cross-border trade plan."],
          words: [["Non-tariff barrier (NTB)", "anything other than a duty that makes trade harder, like unofficial charges, long delays or extra papers."], ["Focal point", "the person or office in each country that follows up NTB reports."]],
          slides: [
            { title: "What is a non-tariff barrier?", bullets: ["Unofficial charges at roadblocks or borders", "Long delays; papers not in the rules", "Goods held without a reason"] },
            { title: "If asked for money with no receipt", bullets: ["Stay calm and polite: safety first", "Ask for the official fee and a receipt", "Ask for the officer in charge or the trade desk"] },
            { title: "Write it down, then report", bullets: ["Date, time, place, amount, name or badge", "tradebarriers.africa: online or by phone", "Customs complaints line or traders' association"] },
            { title: "Your cross-border trade plan", bullets: ["Product, route, rules checked; papers", "Cost and price in two currencies", "Payment method; what to do about unofficial charges"] }
          ],
          sources: [NTB, AFCFTA],
          tryIt: "Write your one-page cross-border trade plan, as described in the final task. Add the facts you would write down and where you would report an unofficial charge.",
          youCanNow: "deal safely with an unofficial charge, report it as a non-tariff barrier, and write a full cross-border trade plan.",
          quickCheck: [
            { objective: "O5", q: "Where can a small trader report an unofficial charge at an African border?", options: ["tradebarriers.africa, customs or a traders' association", "Only on social media", "Nowhere; it cannot be reported", "To the person who asked for the money"], answer: 0, why: "The AfCFTA NTB system, customs complaints lines and traders' associations are the official routes." },
            { objective: "O5", q: "What should you write down after an unofficial charge?", options: ["Only how you felt", "The date, time, place, amount and any name or badge number", "Nothing; forget it", "The price of your goods only"], answer: 1, why: "Clear facts make a report that can be followed up." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Money, payment and problems",
        questions: [
          { objective: "O3", q: "Total batch cost is XAF 300,000 for 60 items. You add XAF 1,000 profit per item. What is the selling price?", options: ["XAF 6,000", "XAF 5,000", "XAF 1,000", "XAF 7,000"], answer: 0, why: "300,000 / 60 = 5,000 cost per item; plus 1,000 profit = 6,000." },
          { objective: "O3", q: "Why check the exchange rate on the day you sell?", options: ["Rates never change", "The buyer sets it", "Rates change every day and can wipe out your profit", "It is only for banks"], answer: 2, why: "Exchange rates move daily, so an old rate can turn a profit into a loss." },
          { objective: "O4", q: "Which request should make you stop at once?", options: ["\"Can I pay by bank transfer?\"", "\"Send me a receipt.\"", "\"What is your price in XOF?\"", "\"Tell me the code we just sent to your phone.\""], answer: 3, why: "No real buyer or provider needs your code or PIN; asking for it is a scam sign." },
          { objective: "O4", q: "What is PAPSS?", options: ["A customs form", "A system for paying between African countries in local currencies through banks and providers", "A type of mobile phone", "A border post"], answer: 1, why: "PAPSS lets a payer pay in local currency and the receiver get local currency across African borders." },
          { objective: "O5", q: "An officer asks for money with no receipt. What is the safest first step?", options: ["Stay calm, ask for the official fee and a receipt or the officer in charge", "Shout and refuse to move", "Run through the border", "Pay double to be faster"], answer: 0, why: "Staying calm keeps you safe, and asking for the receipt or the officer in charge follows the official route." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Selling Across Borders: Small Traders and the AfCFTA",
    questions: [
      { objective: "O1", q: "How many African Union countries are part of the AfCFTA?", options: ["15", "55", "8", "100"], answer: 1, why: "The AfCFTA brings together the 55 countries of the African Union." },
      { objective: "O1", q: "When did trading under the AfCFTA start?", options: ["1 January 2021", "1 January 2000", "It has not started", "1 January 2030"], answer: 0, why: "Trading under the AfCFTA began on 1 January 2021." },
      { objective: "O1", q: "What decides whether your goods can get the AfCFTA's lower duty?", options: ["The colour of the packaging", "How far you travel", "The rules of origin", "The day of the week"], answer: 2, why: "Goods must meet the rules of origin, showing they come from a member country." },
      { objective: "O1", q: "Moussa sells cosmetics from Dakar to Bamako. Which scheme should he ask about first?", options: ["The EAC Simplified Trade Regime", "The COMESA Simplified Trade Regime", "A scheme in Asia", "The ECOWAS Trade Liberalisation Scheme"], answer: 3, why: "Senegal and Mali are ECOWAS members, so ETLS is the scheme to ask about." },
      { objective: "O1", q: "Who can explain the simplified rules for small traders at some border posts?", options: ["A trade information desk officer", "Any money changer", "The bus conductor", "A stranger on the phone"], answer: 0, why: "Trade information desks at some border posts explain the rules to small traders." },
      { objective: "O2", q: "Which list shows common papers for an official crossing?", options: ["Wedding photos and a diary", "Only a phone number", "ID, invoice or receipt, packing list, customs declaration", "A letter from a friend"], answer: 2, why: "ID, an invoice or receipt, a packing list and a customs declaration are the common papers." },
      { objective: "O2", q: "Before buying stock to take across, what should you ask customs?", options: ["What colour the goods should be", "Whether your goods are restricted and which papers they need", "Whether they want to buy some", "Nothing"], answer: 1, why: "Some goods are restricted, and the papers differ by product, so ask first." },
      { objective: "O2", q: "Grace carries fresh tomatoes from Kenya to Tanzania. Which certificate might she need?", options: ["A university degree", "A marriage certificate", "A driving permit", "A plant health (phytosanitary) certificate"], answer: 3, why: "Fresh plant products often need a phytosanitary certificate; she should ask customs." },
      { objective: "O2", q: "What does a clearing agent do?", options: ["Helps you complete customs papers, for a fee", "Sells your goods for you", "Changes money in the street", "Sets the duty rate"], answer: 0, why: "A clearing agent is licensed to help with customs papers for a fee." },
      { objective: "O3", q: "What is the first step in costing a batch?", options: ["Pick a price you like", "List every cost from buying to selling", "Copy a neighbour's price", "Change money"], answer: 1, why: "You cannot set a fair price until you know every cost." },
      { objective: "O3", q: "Total cost KES 36,000 for 120 pairs of sandals. What is the cost per pair?", options: ["KES 30", "KES 3,000", "KES 300", "KES 120"], answer: 2, why: "36,000 divided by 120 is 300." },
      { objective: "O3", q: "Cost per item is GHS 20 and profit is GHS 5. At an example rate of 1 GHS = 40 XOF, what is the price in XOF?", options: ["800 XOF", "200 XOF", "1,000 XOF", "25 XOF"], answer: 2, why: "GHS 20 + GHS 5 = GHS 25; 25 x 40 = 1,000 XOF." },
      { objective: "O3", q: "After working out your price, what else should you check?", options: ["The weather", "The price of similar goods in the buyer's market", "Nothing", "Your neighbour's phone"], answer: 1, why: "Comparing with the market shows whether buyers will pay your price." },
      { objective: "O4", q: "A new buyer wants goods now and promises to pay next week. What is safest?", options: ["Ask for a deposit or full payment first", "Send everything now", "Give your PIN as trust", "Send double"], answer: 0, why: "With a new buyer, a deposit or full payment first protects your goods." },
      { objective: "O4", q: "How do you know a payment really arrived?", options: ["The buyer says so", "A screenshot", "A text from an unknown number", "You check your own balance"], answer: 3, why: "Only your own balance confirms the money is really there." },
      { objective: "O4", q: "Who will ask you for your mobile money PIN?", options: ["Your mobile money provider", "Your bank", "No real provider: only scammers", "Customs"], answer: 2, why: "A real provider never asks for your PIN; anyone who asks is a scammer." },
      { objective: "O4", q: "Why is carrying large amounts of cash across the border risky?", options: ["Cash is always illegal", "Robbery, bad street rates and fake notes", "Cash cannot be counted", "Banks forbid it"], answer: 1, why: "Cash can be stolen, and street changers can give bad rates or fake notes." },
      { objective: "O5", q: "Which is a non-tariff barrier?", options: ["The official import duty", "Unofficial charges at a roadblock", "The price of your goods", "Your profit"], answer: 1, why: "An NTB is anything other than a duty that makes trade harder, such as unofficial charges." },
      { objective: "O5", q: "Who can report on tradebarriers.africa?", options: ["Only big companies", "Only governments", "Only men", "Any trader, including informal traders, women and young people"], answer: 3, why: "The system is open to businesses of all sizes, informal traders, women and youth." },
      { objective: "O5", q: "An officer holds your goods and asks for cash with no receipt. What is the best plan?", options: ["Stay calm, ask for the receipt or officer in charge, write the facts, and report it", "Leave your goods and go home", "Argue loudly until he gives up", "Pay and say nothing ever"], answer: 0, why: "Staying safe, asking for the official route, writing the facts and reporting is the right plan." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 5, 7, 10, 11, 14, 15, 17] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part of your plan and try again.",
    criteria: [
      { name: "Rules checked", objective: "O1", notYet: "The plan says nothing about which rules apply, or relies on a rumour.", meets: "The plan names the regional scheme or AfCFTA rule for the route and at least two offices or websites to check with.", exceeds: "It also records what an office said, with the date and the officer's name." },
      { name: "Papers listed", objective: "O2", notYet: "No list of papers, or only an ID.", meets: "A list of the papers for this product and route, including an invoice and a customs declaration, and a certificate of origin where a lower duty is wanted.", exceeds: "It also notes any health, plant or product certificate and how copies are kept." },
      { name: "Full cost and price", objective: "O3", notYet: "Only the cost of the goods is counted, or the arithmetic is wrong.", meets: "Every cost is listed, the cost per item and selling price are correct, and the price is shown in both currencies.", exceeds: "It also compares the price with the buyer's market and allows for a change in the exchange rate." },
      { name: "Safe payment", objective: "O4", notYet: "Goods are released before payment is checked, or the plan shares a PIN.", meets: "A safe method is named, goods are released only after the balance is checked, and no PIN is ever shared.", exceeds: "It also lists the scam warning signs the trader will watch for." },
      { name: "Unofficial charges", objective: "O5", notYet: "No plan, or the plan is to pay and say nothing.", meets: "Safe steps, the facts to write down and an official reporting channel are named.", exceeds: "It names two reporting channels and a traders' association for support." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who report using an official crossing and the right papers within 30 days (follow-up survey)",
      "Learners who report fewer unofficial payments, or who file an NTB report, within 90 days",
      "Learners who report a cross-border sale at a planned profit within 90 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A basic phone with a calculator; internet for au-afcfta.org and tradebarriers.africa if possible",
      "Paper and pen for the paper checklist, costing and trade plan",
      "Today's exchange rate for the learner's route (from a bank or the central bank)",
      "About 60 to 75 minutes in total, in short sessions"
    ],
    facilitatorNotes: [
      "Before the session, ask the local customs office or trade desk which schemes and papers apply to the routes your learners use, so you can answer questions; never quote duty figures from memory.",
      "In a traders' association or market group: take the pre-test together, then one chapter per session, with learners costing their own real batches.",
      "Treat informal traders with respect: the aim is safer, legal and more profitable trade, not blame.",
      "Never ask learners to share PINs, passwords or account numbers in class.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
