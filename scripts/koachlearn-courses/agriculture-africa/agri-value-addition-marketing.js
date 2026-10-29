"use strict";

// Koach Learn course: Agriculture (Africa) -> "Value Addition, Packaging and Agri-Marketing" (owner's request, 29 October 2026: "can you add learning for farmers in africa that include these classes and beyond").
// Written in the ADDIE format (model: re-entry/reentry-ai-digital-confidence.js). For smallholders, women's and youth groups and young agripreneurs who want to turn raw produce into a product
// they can pack, label and sell direct: choosing the product, costing it, hygiene, packaging and labels, national registration (KEBS, NAFDAC, Ghana FDA, CODINORM), cold chain and direct selling.
// Builds on agri-post-harvest.js (storage, drying, aflatoxin, grading) and agri-cooperatives-markets.js (selling together, prices, contracts); it does not repeat those lessons.
// Registration rules and fees change: the course names each body and tells students to check with it. All money figures are examples, not real prices.

const NAFDAC_FOOD = { name: "NAFDAC (Nigeria): Food registration, Made in Nigeria Food Division (small and medium/large scale)", url: "https://www.nafdac.gov.ng/food/food-registration/" };
const GH_FDA_REG = { name: "Ghana Food and Drugs Authority: Product registration", url: "https://fdaghana.gov.gh/services-2/product-registration/" };
const GH_FDA_PLS = { name: "Ghana Food and Drugs Authority: Progressive Licensing Scheme for small producers (Pink, Yellow, Green)", url: "https://fdaghana.gov.gh/programmes/progressive-licensing-scheme-2/" };
const KEBS = { name: "Kenya Bureau of Standards (KEBS): Standardization Mark (product certification) and marks of quality", url: "https://www.kebs.org" };
const CODEX_HYGIENE = { name: "Codex Alimentarius (FAO/WHO): Committee on Food Hygiene and the General Principles of Food Hygiene (CXC 1-1969)", url: "https://codex.fao.org/codex-committees/general-subject-committees/CCFH" };
const FAO_ZECC = { name: "FAO TECA/STI portal: Zero Energy Cooling Chamber for vegetables", url: "https://sti-portal.fao.org/innovations/zero-energy-cooling-chamber-vegetables" };

module.exports = {
  id: "agri-value-addition-marketing",
  category: "Agriculture (Africa)",
  name: "Value Addition, Packaging and Agri-Marketing",
  skills: "Choosing a value-added product, Costing and pricing a product, Hygienic processing, Packaging and labelling, Keeping products safe in transport, Selling direct to buyers",
  outcome: "turn one crop or milk from your farm into a packed, labelled product: choose it, cost it, make it hygienically, find out which registration it needs, and offer it direct to a shop, school, hotel or online buyer at a price that pays.",
  about: [
    "Raw produce often sells cheaply at harvest, when everyone is selling the same thing. Turning it into a product such as dried mango, cassava flour, groundnut paste or yoghurt can earn more, last longer and reach new buyers. This course is for smallholder farmers, women's and youth groups, young agripreneurs and extension workers in Kenya, Nigeria, Ghana, francophone West Africa and across Africa.",
    "You will choose one product that fits your farm and a real buyer, work out what one pack costs and what to charge, set up hygienic processing, design a label, find out which national body must approve it, plan how to keep it safe on the way to the buyer, and prepare a pitch to sell direct.",
    "It builds on the courses Post-Harvest Handling and Storage and Farmer Cooperatives and Getting to Market, so it does not repeat storage, drying or selling as a group. Each lesson takes about five minutes and ends with a \"Try it now\" task for your own farm. All money figures are examples, not real prices."
  ],
  finalTask: "Make a one-page product plan for one value-added product from your farm: the product and the buyer, a cost sheet with the cost and price per pack, a hygiene checklist for making it, a draft label with the national body you must check with, how you will keep it safe on the way, and a short pitch to one direct buyer.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Smallholder and growing farmers, farm workers, women's and youth groups, young agripreneurs and extension workers in Kenya, Nigeria, Ghana, francophone West Africa and across Africa. Many already sell raw produce at the farm gate or local market and want a better price.",
    startingPoint: "Can grow and harvest a crop or produce milk, and can store and dry it well (see Post-Harvest Handling and Storage). Some already make small batches of a product for family or neighbours, without costing, labels or registration.",
    gap: "Many farm products are priced by guesswork, made without a hygiene routine, sold without a proper label and handed to middlemen who pay late or little. Farmers need to choose a product a buyer really wants, cost it, make it safely, label it, check which national approval it needs and sell it direct, so value addition earns money instead of losing it.",
    constraints: [
      "Reading level: plain words and short sentences; many learners speak English as a second language",
      "Devices: a basic phone or smartphone, often shared; a calculator; paper",
      "Money: low budgets; start with small batches and low-cost equipment",
      "Rules: food registration and labelling rules differ by country and change; learners check with their national body",
      "Time: 4 to 6 minute lessons that fit around farm work"
    ],
    prerequisites: "Helpful: Post-Harvest Handling and Storage, and Farmer Cooperatives and Getting to Market. Basic adding, multiplying and dividing."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given your farm's main crops or milk and what buyers near you ask for", action: "choose one value-added product to make and the buyer to sell it to", standard: "after comparing at least two options on demand, raw material, equipment and rules" },
    { id: "O2", condition: "Given the costs of one batch", action: "calculate the cost of one pack and set a selling price", standard: "counting raw material, packaging, energy, labour, transport and losses, with a price that covers every cost plus a margin" },
    { id: "O3", condition: "For your chosen product, from processing to the buyer", action: "write a hygiene and cold-chain checklist", standard: "covering hands, water, surfaces, raw material, packing and keeping the product safe in storage and transport" },
    { id: "O4", condition: "Given your product and your country", action: "draft a label and name the national body that must approve the product", standard: "with the product name, ingredients, net weight, producer and contact, batch number and dates, and a note to check the body's current rules" },
    { id: "O5", condition: "Given one shop, school, hotel or online buyer", action: "prepare a direct-selling pitch with written terms", standard: "stating the product, price, quantity, delivery, payment date and how complaints are handled" }
  ],
  chapters: [
    {
      name: "Chapter 1: Making a product that pays",
      lessons: [
        {
          title: "Choosing a value-added product",
          objectives: ["O1"],
          minutes: 5,
          goal: "Compare two value-added products for your farm and choose one with a real buyer.",
          text: [
            "Value addition means doing something to your produce that makes a buyer pay more: drying, milling, roasting, grinding, fermenting, cleaning, sorting into packs or simply packing it well. Fresh mangoes that rot in a week can become dried mango that keeps for months. Cassava can become flour or gari, groundnuts can become paste, and milk can become yoghurt.",
            "Start with the buyer, not the machine. Ask shops, school cooks, hotels and market traders near you what they buy, how much, how often, in what pack size and at what price. A product nobody nearby is asking for is a risk.",
            "Then check four things: demand (who will buy it and how much), raw material (do you or your neighbours have enough, all year or only in season), equipment and skill (can you start small, for example with a solar dryer or a hired mill), and rules (milk and meat products are higher risk and usually need more approvals than dry flour). Compare at least two options before you choose."
          ],
          steps: ["List two or three products you could make from your own crops or milk.", "Ask at least three buyers what they buy, how much and at what price.", "Score each product on demand, raw material, equipment and skill, and rules.", "Choose the one with the best score and a named buyer."],
          words: [["Value addition", "changing or packing your produce so a buyer pays more for it."], ["Shelf life", "how long a product stays safe and good to eat."], ["Perishable", "a product that spoils fast, like milk, yoghurt or fresh tomatoes."]],
          slides: [
            { title: "What value addition means", bullets: ["Dry, mill, grind, roast, ferment or pack your produce", "Mango to dried mango; cassava to flour or gari", "Groundnuts to paste; milk to yoghurt"] },
            { title: "Start with the buyer", bullets: ["Ask shops, school cooks, hotels and traders", "What they buy, how much, how often", "Pack size and price they pay"] },
            { title: "Score each option", bullets: ["Demand: who buys and how much", "Raw material: enough, and in which months", "Equipment and skill; rules (milk is higher risk)"] }
          ],
          tryIt: "Pick two products you could make. Ask three buyers near you about each one, then score both on demand, raw material, equipment and rules. Write down the product you choose and the buyer you will target.",
          youCanNow: "compare value-added products on demand, raw material, equipment and rules, and choose one with a real buyer.",
          quickCheck: [
            { objective: "O1", q: "You want to add value to your mangoes. What should you do first?", options: ["Buy a large dryer on credit", "Copy what your neighbour makes", "Ask buyers near you what they buy and at what price", "Make as much as possible and look for buyers later"], answer: 2, why: "Starting with real buyers shows whether there is demand before you spend money." },
            { objective: "O1", q: "Which product usually needs MORE approvals and care to make safely?", options: ["Yoghurt made from milk", "Cassava flour", "Dried mango slices", "Clean, sorted beans in packs"], answer: 0, why: "Milk products spoil fast and can carry germs, so they are higher risk and usually more tightly regulated." }
          ]
        },
        {
          title: "Costing and pricing your product",
          objectives: ["O2"],
          minutes: 6,
          goal: "Calculate the cost of one pack and set a price that covers every cost plus a margin.",
          text: [
            "Many small processors lose money without knowing it, because they only count the raw material. Count every cost of one batch: raw material, packaging and labels, energy (fuel, charcoal, electricity, milling fees), water, labour (including your own time), transport, and fees such as registration or market charges spread over the year.",
            "Then count the losses: some product is spoiled, spilled or given as samples. Divide the total batch cost by the number of packs you can actually sell. Example (figures are examples only): a Ghana group makes groundnut paste. Groundnuts GHS 400, jars and labels GHS 150, milling and fuel GHS 50, labour GHS 100, transport GHS 50: total GHS 750. They fill 50 jars but expect to sell 48, so each jar costs about GHS 15.60.",
            "Your price must cover the cost per pack plus a margin for profit, savings and repairs. Then check the price against similar products in shops. If your price is far above them, find a cheaper way to make it, a smaller pack, or a buyer who pays for quality. The same method works for dried mango in KES, gari in NGN or yoghurt in XOF."
          ],
          steps: ["List every cost of one batch, including your own labour.", "Count how many packs you can really sell after losses.", "Divide the total cost by the packs you can sell: that is the cost per pack.", "Add a margin to get your price.", "Compare it with similar products in shops and adjust your plan if needed."],
          words: [["Cost per unit", "what it costs you to make one pack."], ["Margin", "the money left from each sale after costs are paid."], ["Batch", "one round of making the product, for example 50 jars made on one day."]],
          slides: [
            { title: "Count every cost of a batch", bullets: ["Raw material, packaging, labels", "Fuel, electricity, milling, water", "Labour (yours too), transport, fees"] },
            { title: "Cost per pack", bullets: ["Total batch cost / packs you can really sell", "Example: GHS 750 / 48 jars = about GHS 15.60", "Figures are examples only"] },
            { title: "Set the price", bullets: ["Cost per pack + margin = price", "Check similar products in shops", "Too high? Cheaper method, smaller pack or another buyer"] }
          ],
          tryIt: "Make a cost sheet for one batch of your chosen product. List every cost, the packs you expect to sell, the cost per pack and the price you would charge. Compare it with one similar product in a shop.",
          youCanNow: "build a cost sheet, work out the cost of one pack and set a price that covers it with a margin.",
          quickCheck: [
            { objective: "O2", q: "Which cost do small processors MOST often forget?", options: ["The raw material", "Their own labour and losses", "The price in the shop", "The name of the product"], answer: 1, why: "Your own time and spoiled or sample packs are real costs, and leaving them out hides losses." },
            { objective: "O2", q: "A batch costs KES 6,000 and you can sell 40 packs. What is the cost per pack?", options: ["KES 240", "KES 600", "KES 1,500", "KES 150"], answer: 3, why: "Cost per pack is the total batch cost divided by packs sold: 6,000 / 40 = KES 150." }
          ]
        },
        {
          title: "Hygiene and food safety when you process",
          objectives: ["O3"],
          minutes: 6,
          goal: "Write a hygiene checklist that keeps your product safe while you make it.",
          text: [
            "A buyer will not come back, and an authority can stop your sales, if a product makes someone sick. The international Codex Alimentarius General Principles of Food Hygiene cover the whole chain, from the farm to the person who eats the food. Your national food body uses ideas like these when it inspects you.",
            "The basics: clean, safe water; hands washed with soap before work and after the toilet; no work when you are sick; hair covered and cuts covered; clean surfaces, tools and containers; raw material kept apart from finished product; animals, insects and rats kept out; and a clean, dry place to store the packs.",
            "Start with clean raw material. Never process mouldy groundnuts or grain, which can carry aflatoxin (see Post-Harvest Handling and Storage). Milk for yoghurt must be heated and handled using a tested method from your dairy extension officer or standards body, and kept cold. Write your steps down so every batch is made the same way, and give each batch a number and a date."
          ],
          steps: ["Write the steps to make your product from raw material to sealed pack.", "For each step, write what could make it unsafe (dirt, germs, mould, insects).", "Write the hygiene rule that stops it.", "Give each batch a number and date, and record who made it."],
          words: [["Food safety", "keeping food free of germs, poisons and dirt that can make people sick."], ["Contamination", "when dirt, germs or chemicals get into food."], ["Batch number", "a code on each pack that tells you when and how it was made, so you can trace a problem."]],
          slides: [
            { title: "Why hygiene matters", bullets: ["One sick customer can end your business", "Codex hygiene principles: farm to plate", "Inspectors look for these basics"] },
            { title: "The basics", bullets: ["Safe water; wash hands with soap", "No work when sick; cover hair and cuts", "Clean tools; keep raw and finished apart"] },
            { title: "Start clean, write it down", bullets: ["Never use mouldy grain or groundnuts", "Milk: tested method, kept cold", "Same steps every batch; batch number and date"] }
          ],
          sources: [CODEX_HYGIENE],
          tryIt: "Write the steps for making your product. Next to each step, write one thing that could make it unsafe and the rule that prevents it. This is your hygiene checklist.",
          youCanNow: "write a hygiene checklist for your product and give every batch a number and date.",
          quickCheck: [
            { objective: "O3", q: "A worker has diarrhoea on processing day. What should happen?", options: ["They stay away from processing until well", "They work but wash hands once", "They work in gloves only", "They pack instead of mix"], answer: 0, why: "Sick workers can pass germs into food, so they should not handle it until they are well." },
            { objective: "O3", q: "Some groundnuts in a sack look mouldy. What do you do?", options: ["Roast them longer to kill the mould", "Mix them with good nuts", "Remove and do not use them for paste", "Sell them at a lower price"], answer: 2, why: "Mould can carry aflatoxin, which cooking does not remove, so mouldy nuts must not be used." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Making a product that pays",
        questions: [
          { objective: "O1", q: "Which is an example of value addition?", options: ["Selling fresh cassava at the farm gate", "Milling cassava into flour and packing it", "Planting more cassava", "Leaving cassava in the ground longer"], answer: 1, why: "Milling and packing change the produce into a product a buyer pays more for." },
          { objective: "O1", q: "You have milk in the rainy season only. Which check matters most before choosing yoghurt?", options: ["The colour of the label", "The name of your brand", "What your friends like", "Whether you have enough raw material all year and a buyer for it"], answer: 3, why: "Raw material supply and demand decide whether the product can keep a buyer." },
          { objective: "O2", q: "What is the cost per pack?", options: ["Total batch cost divided by packs you can really sell", "The shop price minus your labour", "The raw material cost only", "Whatever your neighbour charges"], answer: 0, why: "Dividing all batch costs by sellable packs gives the true cost of one pack." },
          { objective: "O3", q: "Which is a basic hygiene rule for processing?", options: ["Let chickens walk in the work area", "Use any water you have", "Wash hands with soap before work and after the toilet", "Keep raw and finished product together"], answer: 2, why: "Handwashing with soap stops germs from hands getting into food." },
          { objective: "O3", q: "Why give each batch a number and date?", options: ["To make the pack look nice", "To trace and fix a problem if one batch goes wrong", "Because buyers like numbers", "To raise the price"], answer: 1, why: "A batch number lets you find which packs came from a problem batch and when it was made." }
        ]
      }
    },
    {
      name: "Chapter 2: Packing, labelling and selling direct",
      lessons: [
        {
          title: "Packaging, labels, branding and registration",
          objectives: ["O4"],
          minutes: 6,
          goal: "Draft a label for your product and find the national body that must approve it.",
          text: [
            "Good packaging keeps the product safe and makes buyers trust it. Choose food-grade packs that keep out air, water and insects: sealed bags for dried mango and flour, clean jars with tight lids for groundnut paste, and clean, sealed cups for yoghurt. Your brand is your name, logo and promise, for example 'clean, local, no added sugar'. Keep it simple and the same on every pack.",
            "A label usually shows: the product name, the ingredients, the net weight or volume, the producer's name and contact, the batch number, the date it was made and a use-by or best-before date, how to store it, and any registration number or mark. Your country may require more, so check before you print many labels.",
            "Most packaged foods need approval before they are sold in shops. In Kenya, KEBS issues the Standardization Mark for products that meet a Kenya Standard. In Nigeria, NAFDAC registers locally made foods through its Made in Nigeria Food Division, with routes for small as well as medium and large producers. In Ghana, the Food and Drugs Authority registers products, and its Progressive Licensing Scheme lets very small producers (one to five people) meet the rules in stages. In Côte d'Ivoire, check with the national standards body CODINORM; other countries have their own. Rules, forms and fees change, so contact the body before you start."
          ],
          steps: ["Choose a food-grade pack that keeps out air, water and insects.", "Write your brand name and one-line promise.", "Draft the label: name, ingredients, net weight, producer and contact, batch number, dates, storage.", "Find your national body (KEBS, NAFDAC, Ghana FDA, CODINORM or another) and ask what your product needs.", "Print labels only after you know the rules."],
          words: [["Brand", "the name, logo and promise that make buyers recognise and trust your product."], ["Net weight", "the weight of the food inside the pack, not counting the pack."], ["Registration", "official approval from a national body that a food may be sold."], ["Best-before date", "the date until which the product keeps its best quality if stored as the label says."]],
          slides: [
            { title: "Packs that protect", bullets: ["Food-grade; keeps out air, water and insects", "Sealed bags, clean jars, sealed cups", "Same simple brand on every pack"] },
            { title: "What a label usually shows", bullets: ["Name, ingredients, net weight", "Producer name and contact", "Batch number, made date, best-before or use-by", "Storage; registration number or mark"] },
            { title: "Who approves (check current rules)", bullets: ["Kenya: KEBS Standardization Mark", "Nigeria: NAFDAC registration (small-scale route too)", "Ghana: FDA; Progressive Licensing Scheme for very small producers"] },
            { title: "Before you print", bullets: ["Côte d'Ivoire: CODINORM; other countries: own body", "Rules, forms and fees change", "Ask the body first, then print labels"] }
          ],
          sources: [KEBS, NAFDAC_FOOD, GH_FDA_REG, GH_FDA_PLS],
          tryIt: "Draft the label for your product on paper or with a free tool like Canva. Then find the website or office of your national food body and write down the questions you will ask it about registration and labelling.",
          youCanNow: "draft a product label and name the national body to check with before you sell in shops.",
          quickCheck: [
            { objective: "O4", q: "Which item does a food label usually need?", options: ["The farmer's bank PIN", "The price of raw groundnuts", "A photo of the farm", "The batch number and best-before date"], answer: 3, why: "Batch number and dates let buyers and inspectors know when it was made and how long it keeps." },
            { objective: "O4", q: "A small Ghana processor with three workers wants FDA approval. Which programme can help them meet the rules in stages?", options: ["The Standardization Mark", "The Progressive Licensing Scheme", "GLOBALG.A.P.", "The Made in Nigeria Food Division"], answer: 1, why: "The Ghana FDA's Progressive Licensing Scheme is for small producers of one to five people." }
          ]
        },
        {
          title: "Keeping the product safe on the way: cold chain and transport",
          objectives: ["O3"],
          minutes: 5,
          goal: "Plan how your product stays safe and undamaged from your store to the buyer.",
          text: [
            "A product can be made perfectly and still spoil on the road. Perishable products such as yoghurt and fresh juice need a cold chain: they must stay cold at every step, from making to the buyer's fridge. If they warm up on the way, germs grow and the product can make people sick, even if it looks fine.",
            "For short trips, use a clean cool box with ice packs and deliver early in the day. Agree with the buyer that they put it in a fridge at once. Never refreeze or re-sell yoghurt that has been warm. Dry products such as cassava flour, dried mango and groundnut paste do not need cold, but they must stay dry, sealed, shaded and away from fuel, chemicals and pests.",
            "Plan the trip: who carries it, by what (motorbike, matatu, okada, bus or truck), how long it takes, and how packs are protected from crushing, sun and rain. Low-cost cooling such as FAO's zero energy cooling chamber can hold produce cooler before you process it. Write your cold-chain and transport steps onto your hygiene checklist."
          ],
          steps: ["Decide if your product is perishable (needs cold) or dry (needs dry and sealed).", "For cold products: cool box, ice packs, early delivery, buyer's fridge at once.", "For dry products: sealed, shaded, away from chemicals and pests.", "Plan who carries it, how, how long, and how packs are protected.", "Add these steps to your hygiene checklist."],
          words: [["Cold chain", "keeping a product cold at every step from making it to selling it."], ["Cool box", "an insulated box that keeps things cold with ice or ice packs."]],
          slides: [
            { title: "Cold chain for perishables", bullets: ["Yoghurt and juice must stay cold all the way", "Warm on the road = germs grow, even if it looks fine", "Never re-sell yoghurt that got warm"] },
            { title: "Short trips, low cost", bullets: ["Clean cool box with ice packs", "Deliver early in the day", "Buyer puts it in a fridge at once"] },
            { title: "Dry products", bullets: ["Keep dry, sealed and shaded", "Away from fuel, chemicals and pests", "Protect packs from crushing and rain"] }
          ],
          sources: [FAO_ZECC],
          tryIt: "Write the journey of your product from your store to your buyer: who carries it, how, how long, and what keeps it cold or dry and undamaged. Add it to your hygiene checklist.",
          youCanNow: "plan a cold chain or dry transport route that keeps your product safe until the buyer has it.",
          quickCheck: [
            { objective: "O3", q: "Your yoghurt sat in the sun for three hours on a delayed bus. What do you do?", options: ["Sell it quickly at a discount", "Put it back in the fridge and sell tomorrow", "Do not sell it; it is no longer safe", "Taste it and sell it if it seems fine"], answer: 2, why: "Warm yoghurt can grow germs that you cannot see or taste, so it should not be sold." },
            { objective: "O3", q: "What does dried mango need most on the way to a buyer?", options: ["Kept dry, sealed and shaded", "Kept frozen", "Kept in the open air", "Kept next to the fuel can"], answer: 0, why: "Dry products spoil when they get damp, hot or near chemicals, not because they are warm." }
          ]
        },
        {
          title: "Selling direct: shops, schools, hotels and online",
          objectives: ["O5"],
          minutes: 6,
          goal: "Prepare a pitch and written terms to sell your product direct to one buyer.",
          text: [
            "Not every middleman is bad: some traders pay fairly and carry produce you cannot. But watch for warning signs of exploitation: rigged scales, prices changed after delivery, payment that comes months late or never, and 'buy now, pay later' from strangers who then disappear. Selling direct can give you a better price and a steady customer.",
            "Each buyer wants different things. Local shops and supermarkets want a label, a steady supply and sometimes sell on consignment (they pay only after the product sells), which is a risk. Schools and hospitals buy in bulk on a schedule and often need a quote, an invoice and sometimes a registration. Hotels and restaurants want the same quality every time. Online buyers on WhatsApp, Facebook or a marketplace want clear photos, prices and quick delivery.",
            "A good pitch is short: what the product is, why it is good (clean, local, fresh), the price, the pack size, how much you can supply and how often, and delivery. Then agree terms in writing, even in a simple message: quantity, price, delivery day, payment date and method (for example mobile money), and what happens if a pack is damaged. Keep a copy. Never share PINs or passwords with any buyer. For a big or long contract, ask a trusted adviser to read it first."
          ],
          steps: ["Choose one buyer: a shop, school, hotel or online customers.", "Write a short pitch: product, why it is good, price, pack size, supply, delivery.", "Bring a sample and your label.", "Agree terms in writing: quantity, price, delivery, payment date and method, damaged packs.", "Keep a copy and record every delivery and payment."],
          words: [["Middleman", "a trader who buys from farmers and sells on to others."], ["Consignment", "the shop takes your goods and pays you only after they sell."], ["Pitch", "a short, clear offer to a buyer."], ["Invoice", "a written bill asking a buyer to pay for goods delivered."]],
          slides: [
            { title: "Watch for exploitation", bullets: ["Rigged scales; price changed after delivery", "Payment months late or never", "Strangers who 'pay later' and disappear"] },
            { title: "What each buyer wants", bullets: ["Shops: label, steady supply; consignment risk", "Schools: bulk, schedule, quote and invoice", "Hotels: same quality every time; online: photos, fast delivery"] },
            { title: "A short pitch", bullets: ["What it is and why it is good", "Price, pack size, how much and how often", "Delivery; bring a sample and the label"] },
            { title: "Put terms in writing", bullets: ["Quantity, price, delivery day", "Payment date and method; damaged packs", "Keep a copy; never share PINs"] }
          ],
          tryIt: "Final task: write your one-page product plan. Include the product and buyer, your cost sheet and price, your hygiene and cold-chain checklist, your draft label and national body, and a short pitch with the terms you will ask the buyer to agree in writing.",
          youCanNow: "pitch your product to a direct buyer and agree clear written terms for price, delivery and payment.",
          quickCheck: [
            { objective: "O5", q: "A shop offers to take your groundnut paste on consignment. What is the risk?", options: ["You must pay the shop first", "You are paid only after it sells, and unsold packs may come back", "The shop will change your label", "There is no risk at all"], answer: 1, why: "On consignment you carry the risk until the product sells, so agree how long and what happens to unsold packs." },
            { objective: "O5", q: "A hotel agrees to buy yoghurt weekly. What should you agree in writing?", options: ["Only the hotel's name", "Your mobile money PIN", "Nothing; a handshake is enough", "Quantity, price, delivery day, payment date and what happens to damaged packs"], answer: 3, why: "Written terms on quantity, price, delivery and payment prevent disputes later." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Packing, labelling and selling direct",
        questions: [
          { objective: "O4", q: "Which body issues the Standardization Mark for products in Kenya?", options: ["NAFDAC", "Ghana FDA", "KEBS", "CODINORM"], answer: 2, why: "KEBS, the Kenya Bureau of Standards, issues the Standardization Mark." },
          { objective: "O4", q: "When should you print a large number of labels?", options: ["After you check what your national body requires", "Before you choose the product", "Before you talk to any buyer", "Only after a buyer complains"], answer: 0, why: "Labelling rules differ by country and change, so check first to avoid wasting labels." },
          { objective: "O3", q: "Which product needs a cold chain?", options: ["Cassava flour", "Dried mango", "Groundnut paste in a sealed jar", "Yoghurt"], answer: 3, why: "Yoghurt is perishable and must stay cold from making to the buyer." },
          { objective: "O5", q: "Which is a warning sign of an exploitative middleman?", options: ["Paying on the agreed day", "Changing the price after you deliver", "Weighing in front of you", "Giving a receipt"], answer: 1, why: "Changing the price after delivery shifts the loss to you and breaks trust." },
          { objective: "O5", q: "What belongs in a short pitch to a school cook?", options: ["Your life story", "Your neighbour's prices", "Product, price, pack size, supply and delivery", "Your bank PIN"], answer: 2, why: "A buyer needs to know what you offer, at what price, how much and how it arrives." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Value Addition, Packaging and Agri-Marketing",
    questions: [
      { objective: "O1", q: "What does value addition mean?", options: ["Changing or packing produce so buyers pay more", "Planting a new crop", "Selling at the farm gate", "Borrowing money for seed"], answer: 0, why: "Drying, milling, processing or packing well can earn a higher price." },
      { objective: "O1", q: "What should guide your choice of product first?", options: ["The cheapest machine you can find", "What looks nice on a label", "What buyers near you actually buy", "What is popular on television"], answer: 2, why: "A product with a real buyer is less risky than one made in hope." },
      { objective: "O1", q: "Which four things should you score each product option on?", options: ["Colour, taste, smell, size", "Demand, raw material, equipment and skill, rules", "Price, brand, logo, slogan", "Rain, sun, wind, soil"], answer: 1, why: "These four show whether you can make it, sell it and do so legally." },
      { objective: "O1", q: "Your mango trees fruit for two months a year. What does this mean for dried mango?", options: ["You cannot make dried mango", "You must sell all of it fresh", "Price does not matter", "Plan raw material: buy from neighbours or make enough to sell through the year"], answer: 3, why: "Seasonal raw material affects how long you can supply a buyer." },
      { objective: "O2", q: "Which cost belongs in your cost sheet?", options: ["Only the raw material", "Your own labour time", "The buyer's transport home", "Your neighbour's school fees"], answer: 1, why: "Your own labour is a real cost; leaving it out hides whether the product pays." },
      { objective: "O2", q: "A batch of gari costs NGN 60,000 and you can sell 120 bags. What is the cost per bag?", options: ["NGN 500", "NGN 200", "NGN 1,200", "NGN 7,200"], answer: 0, why: "60,000 divided by 120 bags is NGN 500 per bag." },
      { objective: "O2", q: "How do you set your price?", options: ["Copy the lowest price in the market", "Charge what the first buyer offers", "Cost per pack plus a margin, then check shop prices", "Charge the same as raw produce"], answer: 2, why: "The price must cover all costs with a margin and still make sense to buyers." },
      { objective: "O2", q: "Your price is far above similar shop products. What is a good next step?", options: ["Give up at once", "Raise the price further", "Hide the price", "Look for a cheaper method, a smaller pack or a buyer who pays for quality"], answer: 3, why: "Changing cost, pack size or buyer can make the product competitive." },
      { objective: "O3", q: "Which is part of a hygiene checklist?", options: ["Hands washed with soap before work", "Animals allowed in the work area", "Raw and finished product stored together", "Any water you can find"], answer: 0, why: "Handwashing with soap keeps germs out of food." },
      { objective: "O3", q: "Why should you never use mouldy groundnuts for paste?", options: ["They are too heavy", "They may carry aflatoxin, which cooking does not remove", "They make the jar dirty", "Buyers do not like the colour"], answer: 1, why: "Aflatoxin is a hidden poison that roasting does not destroy." },
      { objective: "O3", q: "Yoghurt is delivered in a cool box with ice packs early in the day. This is an example of:", options: ["Branding", "Consignment", "A cold chain", "Registration"], answer: 2, why: "Keeping a perishable product cold at every step is a cold chain." },
      { objective: "O3", q: "How should cassava flour travel to a buyer?", options: ["In open bags in the rain", "Next to fuel and chemicals", "Frozen", "Dry, sealed, shaded and away from pests"], answer: 3, why: "Dry products spoil when damp or contaminated, so they must stay dry and protected." },
      { objective: "O4", q: "Which item is usually on a food label?", options: ["Ingredients and net weight", "The farmer's PIN", "The buyer's name", "The price of fertilizer"], answer: 0, why: "Ingredients and net weight tell buyers what is inside and how much." },
      { objective: "O4", q: "In Nigeria, which body registers locally made packaged foods?", options: ["KEBS", "Ghana FDA", "CODINORM", "NAFDAC"], answer: 3, why: "NAFDAC registers made-in-Nigeria foods, including from small producers." },
      { objective: "O4", q: "What is a brand?", options: ["A type of jar", "The name, logo and promise buyers recognise", "A government licence", "A batch number"], answer: 1, why: "A brand helps buyers recognise and trust your product." },
      { objective: "O4", q: "Registration rules for your product are not clear. What do you do?", options: ["Sell anyway and wait", "Ask a trader what they think", "Contact your national food or standards body and check its current rules", "Copy another brand's registration number"], answer: 2, why: "Only the national body can say what your product needs; rules and fees change." },
      { objective: "O5", q: "Which is a good reason to sell direct to a school?", options: ["Steady bulk orders on a schedule", "No paperwork ever", "Schools never pay late", "No need for quality"], answer: 0, why: "Schools often buy regularly in bulk, but they need quotes, invoices and consistent quality." },
      { objective: "O5", q: "What do hotels usually care about most?", options: ["Free samples every week", "The colour of your clothes", "Your farm's size", "The same quality every time"], answer: 3, why: "Hotels serve guests daily and need consistent quality and supply." },
      { objective: "O5", q: "You sell dried mango on WhatsApp. What helps online buyers?", options: ["No price shown", "Clear photos, prices and quick delivery", "Asking for their bank PIN", "Long voice notes"], answer: 1, why: "Online buyers decide from photos and clear prices, and expect quick delivery." },
      { objective: "O5", q: "A buyer agrees by phone to buy 50 jars a week. What is the best next step?", options: ["Deliver and hope they pay", "Send them your mobile money PIN", "Write the quantity, price, delivery day and payment date in a message and keep a copy", "Wait for them to set the terms later"], answer: 2, why: "Written terms, even in a message, protect both sides if there is a dispute." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part of the product plan and try again.",
    criteria: [
      { name: "Product and buyer", objective: "O1", notYet: "A product is named with no buyer, or the choice was not compared with another option.", meets: "One product and one named buyer, chosen after comparing two options on demand, raw material, equipment and rules.", exceeds: "Also shows how raw material will be found all year, for example from neighbours or a group." },
      { name: "Cost sheet and price", objective: "O2", notYet: "Only raw material is counted, or there is no cost per pack.", meets: "Every cost of a batch, including labour and losses, gives a cost per pack and a price with a margin.", exceeds: "Price is checked against shop prices and the plan shows what to change if it is too high." },
      { name: "Hygiene and cold chain", objective: "O3", notYet: "No written steps, or key risks such as handwashing, mould or keeping it cold are missing.", meets: "A checklist covers water, hands, surfaces, raw material, packing, batch numbers and safe transport.", exceeds: "Each step names the risk and the rule, and someone else could follow it without help." },
      { name: "Label and registration", objective: "O4", notYet: "The label is missing ingredients, net weight, contact or dates, or no national body is named.", meets: "The label shows name, ingredients, net weight, producer and contact, batch number, dates and storage, and names the body to check with.", exceeds: "The learner has contacted the body and written down what it requires and what it costs." },
      { name: "Pitch and terms", objective: "O5", notYet: "No pitch, or no written terms for price, delivery and payment.", meets: "A short pitch plus written terms: quantity, price, delivery day, payment date and method, damaged packs.", exceeds: "The pitch was given to a real buyer, and the learner recorded the answer." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who sell at least one batch of a value-added product within 90 days (follow-up survey)",
      "Learners who report a higher price per kilo of raw produce than selling it raw (follow-up survey)",
      "Learners who contact or register with their national food or standards body",
      "Learners who report fewer losses at harvest time because produce was processed instead of sold cheaply"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone (smartphone helpful) and a calculator",
      "Paper and pen for the cost sheet, hygiene checklist and label",
      "Optional: a free design tool such as Canva for the label",
      "A sample of your raw produce and a similar product from a local shop to compare",
      "About 90 minutes in total, in short sessions, plus time to visit buyers"
    ],
    facilitatorNotes: [
      "Group the learners by product (for example dried mango, cassava flour, groundnut paste, yoghurt) so they can share buyer research and costs.",
      "Do the costing lesson with a real batch the group has made, and let learners check each other's sums.",
      "Invite an officer from the national food or standards body (KEBS, NAFDAC, Ghana FDA, CODINORM or your country's body) to explain current registration steps; do not quote fees from memory.",
      "Run a hands-on hygiene walk-through at a real processing place, and stress that milk products need a tested method and cold chain.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time; role-play the pitch with one learner as the buyer."
    ]
  }
};
