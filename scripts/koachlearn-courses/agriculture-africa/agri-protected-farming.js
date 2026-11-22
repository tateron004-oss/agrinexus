"use strict";

// Koach Learn course: Agriculture (Africa) -> "Greenhouse and Protected Farming for High-Value Crops" (added 29 October 2026 at the owner's request: "can you add learning for farmers in africa that include these classes and beyond").
// When protected farming pays; greenhouse, shade-net and tunnel options; checking seller claims; choosing tomatoes, capsicum or cucumbers; nursery and seedlings; drip fertigation basics; heat, humidity and disease;
// greenhouse pests and hygiene; and the business case with payback. Final task: a protected-farming business case for one crop. Written in the ADDIE format (see README).
// All money figures are invented examples for the arithmetic, not real prices. No fertilizer recipes or pesticide products: students are sent to an agronomist, the label and the national regulator.

const FAO_GAP_GH = { name: "FAO: Good Agricultural Practices for Greenhouse Vegetable Crops: Principles for Mediterranean Climate Areas (Plant Production and Protection Paper 217)", url: "https://www.fao.org/agriculture/crops/publications/detail/en/item/276049/icode/" };
const NORDEY_REVIEW = { name: "Nordey and others (2017): Protected cultivation of vegetable crops in sub-Saharan Africa: limits and prospects for smallholders. A review (Agronomy for Sustainable Development)", url: "https://publications.cirad.fr/une_notice.php?dk=585832" };
const ICIPE_TUTA = { name: "icipe: Insect of the Month: Tomato leafminer, Tuta absoluta", url: "https://www.icipe.org/news/insect-month-february-tomato-leafminer-tuta-absoluta" };
const PCPB = { name: "Pest Control Products Board (Kenya)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "National Agency for Food and Drug Administration and Control (NAFDAC, Nigeria)", url: "https://www.nafdac.gov.ng" };
const GHANA_EPA = { name: "Environmental Protection Authority (Ghana)", url: "https://www.epa.gov.gh" };
const KEPHIS = { name: "Kenya Plant Health Inspectorate Service (KEPHIS): certified seed and seedlings", url: "https://www.kephis.go.ke" };

module.exports = {
  id: "agri-protected-farming",
  category: "Agriculture (Africa)",
  name: "Greenhouse and Protected Farming for High-Value Crops",
  skills: "Deciding when protected farming pays, Comparing greenhouses, shade nets and tunnels and checking seller claims, Raising seedlings and planning drip fertigation, Managing heat, humidity, pests and hygiene, Writing a business case with payback",
  outcome: "write a business case for growing one high-value crop (tomatoes, capsicum or cucumbers) under a greenhouse, shade net or tunnel on your farm: whether it suits your water, market and skills, the structure and three quotes, a crop and fertigation plan, a pest and hygiene routine, and the costs, income, gross margin and payback period.",
  about: [
    "This course is for smallholder and growing commercial farmers, young agripreneurs, youth and women's groups, and extension workers who are thinking about a greenhouse, shade net or tunnel, or who already have one that is not paying. The examples are tomatoes, capsicum (sweet pepper) and cucumbers in Kenya, Nigeria, Ghana and Senegal.",
    "Chapter 1 helps you decide and set up: when protected farming pays and when it does not, the main structures and how to compare quotes, how to spot sellers who over-promise, and how to choose a crop and raise clean seedlings. Chapter 2 is about running it as a business: drip fertigation basics, managing heat, humidity, disease and pests, keeping the structure clean, and writing a business case with the payback period.",
    "A greenhouse is a big investment and many have been left empty because the numbers, the water or the market did not work. Every money figure in this course is an invented example to practise the arithmetic; use your own quotes and market prices, and talk to an agronomist, your extension officer and a trusted adviser before you sign or pay. A short quick check follows every lesson, a knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Write a protected-farming business case for one crop on your own farm: your answers to the five \"does it pay?\" conditions (water, market, skills, capital, climate), the structure you would use with at least three quotes compared and the seller checks done, the crop and variety, a nursery and fertigation plan agreed with an agronomist, a weekly pest, climate and hygiene routine, and the costs, expected yield, income, gross margin per cycle, payback period, and what happens to the payback if the price falls by a quarter.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Smallholder and growing commercial farmers, young agripreneurs, youth and women's groups and extension workers in Africa who are considering, or already have, a greenhouse, shade net or tunnel for tomatoes, capsicum, cucumbers or other high-value vegetables.",
    startingPoint: "Have grown vegetables in the open field. Some have been offered a greenhouse kit with big yield promises; some own one that has had pest, disease or market problems. Few have compared quotes, planned fertigation, or worked out payback.",
    gap: "Protected farming can give higher, cleaner and more regular yields, but it costs a lot up front, needs skills and reliable water, traps heat and disease, and only pays with a steady market. Learners need to decide if it suits them, choose and check a structure, run the crop well and prove with numbers that it can pay back before the cover wears out.",
    constraints: [
      "Reading level: plain words and short sentences; many learners use English as a second language and the course is also available in Spanish, French and Arabic",
      "Maths: simple sums with a phone calculator; every calculation is shown step by step",
      "Money: all figures are invented examples; learners use their own quotes and prices in their local currency (KES, NGN, GHS or XOF)",
      "Safety: no fertilizer recipes, no pesticide products or rates; learners work with an agronomist and follow labels and the national regulator",
      "Finance: no investment advice; learners read contracts fully and ask a trusted adviser before paying"
    ],
    prerequisites: "None. \"Irrigation and Water Management\" (drip and pumps) and \"Integrated Pest Management and Organic Pest Control\" are useful alongside this course."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "For your own farm", action: "check the five conditions for protected farming (water, market, skills, capital and climate) and decide whether to go ahead", standard: "giving a yes or no for each with a reason" },
    { id: "O2", condition: "When choosing a structure", action: "compare greenhouse, shade-net or tunnel quotes and check each seller's claims", standard: "using at least three quotes and asking for references and a written warranty" },
    { id: "O3", condition: "For one crop you choose", action: "plan the variety, nursery, transplanting and drip fertigation with an agronomist", standard: "as a dated plan for one crop cycle" },
    { id: "O4", condition: "Once the crop is planted", action: "run a daily and weekly routine for heat, humidity, pests and hygiene", standard: "covering vents, scouting, traps and entry rules every week" },
    { id: "O5", condition: "Given your quotes and market prices", action: "calculate the cost, income, gross margin and payback period for the crop", standard: "and test what happens if the price falls by a quarter" }
  ],
  chapters: [
    {
      name: "Chapter 1: Deciding and setting up",
      lessons: [
        {
          title: "When protected farming pays, and when it does not",
          objectives: ["O1"],
          minutes: 5,
          goal: "Check the five conditions for protected farming on your own farm and decide whether to go ahead.",
          text: [
            "Protected farming means growing a crop under a cover: a greenhouse with plastic sheeting and insect net, a shade-net house, or a low or walk-in tunnel. Done well, it keeps off heavy rain, hail and many insects, cuts some diseases, and gives higher, cleaner, more regular yields of high-value crops such as tomatoes, capsicum and cucumbers.",
            "It does not suit everyone. A 2017 review of protected cultivation in sub-Saharan Africa found it is not suitable in every climate and still needs other pest controls, and that a lack of skills, technical support and finance stops many smallholders. Many greenhouses in Kenya, Nigeria and Ghana stand empty after one or two crops.",
            "Check five conditions before you spend money. Water: a reliable, clean supply all year, because the crop gets no rain. Market: buyers who will take your produce every week at a fair price, such as a hotel, supermarket, school or market traders, not just \"the market\". Skills: you or a worker trained in fertigation, pruning and scouting, and an agronomist you can call. Capital: money for the structure, the first crop and some months of running costs, without risking your family's food. Climate: in very hot lowlands a closed greenhouse can overheat, so a shade net or a well-ventilated design may suit better."
          ],
          steps: ["Water: is there a reliable, clean supply all year?", "Market: who will buy every week, and at what price?", "Skills: who will run fertigation, pruning and scouting, and which agronomist can you call?", "Capital: can you pay for the structure, the first crop and running costs without risking food money?", "Climate: will a closed structure overheat where you are?", "Decide: go ahead, start smaller, or not yet."],
          words: [["Protected farming", "growing crops under a cover such as a greenhouse, shade net or tunnel."], ["Greenhouse", "a frame covered with plastic sheeting and insect net, with vents for air."], ["Shade net", "a net that cuts some sunlight and heat and keeps out some insects and birds."], ["Tunnel", "a curved frame covered with plastic or net; low tunnels cover a bed, walk-in tunnels cover a plot."]],
          slides: [
            { title: "What protection can do", bullets: ["Keeps off heavy rain, hail and many insects", "Higher, cleaner, more regular yields", "Best for high-value crops"] },
            { title: "It does not suit everyone", bullets: ["Not every climate suits it (review, 2017)", "Still needs other pest controls", "Skills, support and finance are the big barriers"] },
            { title: "Five conditions", bullets: ["Water all year", "A buyer every week", "Skills and an agronomist", "Capital and the right climate"] },
            { title: "Your decision", bullets: ["Go ahead", "Start smaller (tunnel or shade net)", "Not yet: fix the missing condition first"] }
          ],
          sources: [NORDEY_REVIEW, FAO_GAP_GH],
          tryIt: "Write the five conditions down and answer each one for your farm with yes or no and a reason. Then write your decision: go ahead, start smaller, or not yet, and what you would need to change.",
          youCanNow: "check the five conditions for protected farming and decide whether it suits your farm now.",
          quickCheck: [
            { objective: "O1", q: "Which is the strongest sign you are ready for a greenhouse?", options: ["A seller says it pays in three months", "Your neighbour bought one", "You have water all year and a buyer who takes tomatoes every week", "You have seen photos online"], answer: 2, why: "Reliable water and a steady buyer are two of the five conditions that make it pay." },
            { objective: "O1", q: "You farm in a very hot lowland area. What should you check first?", options: ["Whether a closed greenhouse will overheat, and if a shade net suits better", "Only the colour of the plastic", "Nothing; heat is good for all crops", "Whether you can grow without water"], answer: 0, why: "Closed structures trap heat; in hot areas, ventilation or shade nets may suit better." }
          ]
        },
        {
          title: "Greenhouses, shade nets and tunnels: options, costs and sellers",
          objectives: ["O2"],
          minutes: 6,
          goal: "Compare at least three structure quotes and check each seller's claims.",
          text: [
            "The main options: a greenhouse (wood or steel frame with UV-treated plastic on the roof and insect net on the sides) gives the most protection and costs the most. A shade-net house costs less, runs cooler and suits hot areas and crops such as capsicum and leafy vegetables, but does not keep off rain. Walk-in or low tunnels are the cheapest way to start and learn. Steel lasts longer than wood but costs more; treated wood can work if termites are controlled. The plastic cover wears out after some years, so ask how long its UV protection is guaranteed.",
            "Costs vary widely by size, material, country and what is included, so get at least three written quotes for the same size and compare line by line: frame, cover and net, doors, drip system, water tank, nursery, installation, training and after-sales visits. For example (invented figures, only to show the method), quote A of KES 380,000 may include drip and training while quote B of KES 300,000 does not, so B is not really cheaper.",
            "Be careful with sellers who over-promise. Warning signs: guaranteed yields or income, \"pays back in one season\", a \"buy-back\" promise with no written contract, pressure to pay a big deposit today, no farmers you can visit, no written warranty, and kits sold with no training or water plan. Ask to visit two farmers who have used the seller's structure for at least two seasons. Get the warranty, delivery date and what is included in writing, read the whole contract, and ask a trusted adviser before you pay."
          ],
          steps: ["Choose the size you can manage and water.", "Ask at least three sellers for written quotes for the same size.", "Compare line by line: frame, cover, net, drip, tank, nursery, installation, training, after-sales.", "Ask each seller for references and visit two farmers using their structure.", "Get the warranty, delivery date and contents in writing; read it all and ask an adviser."],
          words: [["UV-treated plastic", "greenhouse plastic made to resist the sun's ultraviolet light so it lasts longer."], ["Insect net", "a fine net on the sides and vents that keeps out many insects but lets air through."], ["Quote", "a written price from a seller showing exactly what is included."], ["Warranty", "a written promise from the seller to repair or replace parts that fail within a set time."]],
          slides: [
            { title: "The options", bullets: ["Greenhouse: most protection, most cost", "Shade net: cooler, cheaper, no rain cover", "Tunnels: cheapest way to start and learn"] },
            { title: "Compare three quotes", bullets: ["Same size, written, line by line", "Frame, cover, net, drip, tank, nursery", "Installation, training, after-sales"] },
            { title: "Warning signs", bullets: ["Guaranteed yields or \"pays back in one season\"", "Buy-back promises with no contract", "Pressure to pay a deposit today"] },
            { title: "Protect yourself", bullets: ["Visit two farmers using it 2+ seasons", "Warranty and contents in writing", "Read the whole contract; ask an adviser"] }
          ],
          sources: [FAO_GAP_GH, NORDEY_REVIEW],
          tryIt: "Ask at least three sellers or builders near you for written quotes for the same size of structure. Put them in a table, line by line, and mark what each leaves out. Write the questions you will ask each seller, including two farmers you can visit.",
          youCanNow: "compare structure quotes line by line and check a seller's claims before you pay.",
          quickCheck: [
            { objective: "O2", q: "A seller guarantees 10 tonnes of tomatoes and payback in one season, if you pay a deposit today. What do you do?", options: ["Pay at once before the offer ends", "Pay half and decide later", "Sign without reading", "Treat it as a warning sign, ask for references and written terms, and compare quotes"], answer: 3, why: "Guaranteed yields and pressure to pay today are classic signs of over-promising." },
            { objective: "O2", q: "Quote B is cheaper than quote A but has no drip system or training. What is true?", options: ["B is clearly the better deal", "B may cost more once you add what it leaves out", "Drip and training are never needed", "Quotes cannot be compared"], answer: 1, why: "Compare line by line; missing items must be bought separately." }
          ]
        },
        {
          title: "Choosing a crop and raising clean seedlings",
          objectives: ["O3"],
          minutes: 5,
          goal: "Choose a crop and variety for your structure and plan a clean nursery and transplanting.",
          text: [
            "The most common protected crops are tomatoes, capsicum (sweet pepper) and cucumbers. Tomatoes have the biggest market but also the biggest pest and disease risk, including Tuta absoluta. Capsicum sells well to hotels and supermarkets, especially coloured ones, and is slower to start. Cucumbers grow fast and give quick cash. Choose by your buyer first: which crop, colour and size they will take every week.",
            "Use varieties bred for greenhouses. Many greenhouse tomatoes are indeterminate (they keep growing and are trained up a string for many months), and many greenhouse cucumbers set fruit without bees. Seed of these varieties can be costly, so buy sealed, certified seed from a registered dealer (KEPHIS certifies seed in Kenya) and do not save seed from hybrids.",
            "Raise seedlings in a clean nursery: seedling trays with a clean growing medium (not soil from the field), under insect net, with careful watering. Many farmers buy seedlings from a licensed propagator, which saves time but must be a clean, trusted source. Transplant strong, healthy seedlings with no pests in the cool evening, at the spacing your agronomist gives, and water them in at once. Plan the dates: sowing, transplanting, first harvest and last harvest, so your buyer gets produce on time."
          ],
          steps: ["Ask your buyer which crop, colour and size they will take weekly.", "Choose a greenhouse variety; buy sealed, certified seed.", "Raise seedlings in trays with clean medium under insect net, or buy from a licensed propagator.", "Transplant strong, pest-free seedlings in the evening at the agronomist's spacing.", "Write the dates: sowing, transplanting, first and last harvest."],
          words: [["Capsicum", "sweet pepper; green, red, yellow or orange."], ["Indeterminate", "a tomato type that keeps growing and fruiting for months; it is trained up a string."], ["Growing medium", "a clean mix (for example cocopeat) used instead of soil to raise seedlings."], ["Propagator", "a nursery business that raises and sells seedlings."]],
          slides: [
            { title: "Choose by your buyer", bullets: ["Tomatoes: biggest market, most pest risk", "Capsicum: hotels and supermarkets; slower start", "Cucumbers: fast, quick cash"] },
            { title: "Greenhouse varieties", bullets: ["Indeterminate tomatoes on strings", "Cucumbers that set fruit without bees", "Sealed, certified seed; no saved hybrid seed"] },
            { title: "Clean seedlings", bullets: ["Trays, clean medium, under insect net", "Or a licensed, trusted propagator", "Transplant pest-free in the cool evening"] },
            { title: "Plan the dates", bullets: ["Sow, transplant, first and last harvest", "Match to your buyer's weekly needs"] }
          ],
          sources: [KEPHIS, ICIPE_TUTA],
          tryIt: "Ask one buyer what crop, colour and size they would take each week. Choose your crop and a greenhouse variety, and write the dates for sowing (or buying seedlings), transplanting, first harvest and last harvest.",
          youCanNow: "choose a protected crop by your buyer's needs and plan clean seedlings and transplanting.",
          quickCheck: [
            { objective: "O3", q: "What should decide which crop you grow in your greenhouse first?", options: ["What your buyer will take every week", "The crop with the nicest seed packet", "Whatever the neighbour grows", "The cheapest seed"], answer: 0, why: "A steady buyer is what makes a protected crop pay." },
            { objective: "O3", q: "Where should greenhouse seedlings be raised?", options: ["In open field soil next to old tomatoes", "Under a tree with no net", "In trays with a clean medium under insect net, or from a licensed propagator", "Anywhere; pests do not matter in a greenhouse"], answer: 2, why: "Clean seedlings stop pests and diseases entering the structure with the crop." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Deciding and setting up",
        questions: [
          { objective: "O1", q: "Which is NOT one of the five conditions in this course?", options: ["Water all year", "A buyer every week", "A greenhouse in the brightest colour", "Skills and an agronomist"], answer: 2, why: "The five conditions are water, market, skills, capital and climate." },
          { objective: "O1", q: "Why must water be reliable all year for a greenhouse?", options: ["The crop under cover gets no rain", "Plastic needs washing daily", "Water cools the frame", "It is not important"], answer: 0, why: "Under a cover, all water must come from your supply." },
          { objective: "O2", q: "Which structure runs coolest and suits hot areas, but does not keep off rain?", options: ["A closed plastic greenhouse", "A shade-net house", "A brick store", "A low plastic tunnel"], answer: 1, why: "Shade nets cut sun and heat but let rain through." },
          { objective: "O2", q: "What is the best way to check a seller's claims?", options: ["Trust the brochure", "Pay first, then ask", "Ask on social media only", "Visit two farmers using their structure for two or more seasons"], answer: 3, why: "Farmers who have used it show what it really does." },
          { objective: "O3", q: "An indeterminate tomato:", options: ["Keeps growing and fruiting for months, trained up a string", "Stops growing after a few weeks", "Never needs support", "Is a type of cucumber"], answer: 0, why: "Indeterminate tomatoes keep growing, so they are trained up strings in greenhouses." }
        ]
      }
    },
    {
      name: "Chapter 2: Running it as a business",
      lessons: [
        {
          title: "Drip fertigation basics",
          objectives: ["O3"],
          minutes: 5,
          goal: "Describe how a drip fertigation system works and plan its daily checks with an agronomist.",
          text: [
            "Fertigation means giving fertilizer through the drip system, dissolved in the irrigation water, so each plant gets a little food and water at its roots every day. It saves water and fertilizer and keeps leaves dry, which helps against disease. Drip systems, pumps and solar options are taught in \"Irrigation and Water Management\"; this lesson covers what is different under cover.",
            "A simple system has a water tank, a filter, a way to add the fertilizer (a dosing tank or an injector), mainline pipes and drip lines with emitters at each plant. Use only water-soluble fertilizers made for fertigation. The recipe changes with the crop and its stage (seedling, flowering, fruiting) and with your water and soil, so get it from an agronomist, a soil and water test or the fertilizer supplier's technical staff. Never guess, and never mix products in the same tank unless the agronomist says they can be mixed.",
            "Check the system every day: the filter is clean, every emitter drips, no lines leak, and the soil around the plants is moist, not soaked. Many growers use a cheap EC meter to check that the fertilizer strength in the water is what the agronomist set, and a pH meter or strips. Flush the lines with clean water as advised, so salts and fertilizer do not block the emitters. Write each day's water and feed in a record."
          ],
          steps: ["Get a feeding plan by crop stage from an agronomist or soil and water test.", "Use only water-soluble fertilizers for fertigation; mix only as advised.", "Each day: clean filter, check emitters drip and lines do not leak.", "Check the strength with an EC meter and pH as the agronomist set.", "Flush lines as advised; record water and feed each day."],
          words: [["Fertigation", "giving fertilizer dissolved in irrigation water through a drip system."], ["Emitter", "the small outlet on a drip line that releases water at each plant."], ["EC meter", "a small meter that measures how much dissolved fertilizer (salt) is in the water."], ["Flushing", "running clean water through the lines to clear salts and blockages."]],
          slides: [
            { title: "What fertigation is", bullets: ["Fertilizer dissolved in drip water", "A little food and water at the roots daily", "Saves water and keeps leaves dry"] },
            { title: "The parts", bullets: ["Tank, filter, dosing tank or injector", "Mainline and drip lines with emitters", "Water-soluble fertilizers only"] },
            { title: "The recipe", bullets: ["Changes with crop stage, water and soil", "From an agronomist or water and soil test", "Never guess; mix only as advised"] },
            { title: "Daily checks", bullets: ["Clean filter; every emitter drips", "EC and pH as the agronomist set", "Flush as advised; record it"] }
          ],
          sources: [FAO_GAP_GH],
          tryIt: "Draw your drip fertigation system from tank to plants and label each part. Then write a daily checklist (filter, emitters, leaks, EC, pH, soil moisture, record) and the questions you will ask your agronomist about the feeding plan for each crop stage.",
          youCanNow: "describe a drip fertigation system, plan its feeding with an agronomist and run its daily checks.",
          quickCheck: [
            { objective: "O3", q: "Where should your fertigation recipe come from?", options: ["A guess from the colour of the leaves", "An agronomist, soil and water test or the supplier's technical staff", "The same recipe for every crop and stage", "Whatever is cheapest that week"], answer: 1, why: "The recipe depends on crop, stage, water and soil, so it must come from expert advice." },
            { objective: "O3", q: "Several plants are wilting while others are fine. What do you check first?", options: ["Whether their emitters are blocked and the filter is clean", "Add more fertilizer to the tank", "Remove the insect net", "Water from above with a hose"], answer: 0, why: "Blocked emitters are a common reason some plants get no water or feed." }
          ]
        },
        {
          title: "Managing heat, humidity, pests and hygiene",
          objectives: ["O4"],
          minutes: 6,
          goal: "Run a daily and weekly routine for heat, humidity, pests and hygiene in your structure.",
          text: [
            "Heat and humidity are the biggest day-to-day problems under cover in the tropics. A closed greenhouse can get much hotter than outside, and hot, still, wet air brings fungal diseases such as late blight and grey mould. Open the side and roof vents in the morning and close them in the evening as needed, keep leaves dry by watering only through the drip, prune old lower leaves and side shoots so air moves, and do not overcrowd. A shade net over the roof in the hottest months can help. Keep a cheap thermometer inside and write the readings.",
            "Insect nets keep out many pests, but the ones that get in multiply fast with no rain or natural enemies to stop them: whiteflies, thrips, aphids, spider mites and, in tomatoes, Tuta absoluta. In the soil, root-knot nematodes are a common problem in long-used greenhouses. Scout every plant row weekly, hang yellow sticky cards for whiteflies and aphids and blue ones for thrips, and use pheromone traps for Tuta absoluta. Use the IPM steps; if a pesticide is needed, use only one registered for your crop (PCPB in Kenya, NAFDAC in Nigeria, the EPA in Ghana), follow the label and its pre-harvest interval, and wear protective equipment, because you will pick fruit in a closed space often.",
            "Hygiene keeps pests and disease out. Use a double door so one is always closed, and a footbath at the entrance. Limit visitors, and have workers wash hands and wear clean clothes. Remove sick plants and fallen leaves and fruit in a sealed bag, keep the area around the structure weeded, repair holes in the net at once, and clean tools. Between crops, remove all plant waste and clean the structure before you plant again."
          ],
          steps: ["Every morning: open vents; read the thermometer; check for wet leaves.", "Every evening: close vents as needed; record temperature.", "Weekly: scout every row; count sticky-card and pheromone-trap catches.", "Weekly: prune lower leaves and side shoots; remove sick plants and waste in a sealed bag.", "Always: double door closed, footbath, limited visitors, clean tools, repair net holes."],
          words: [["Ventilation", "letting air move through the structure through vents to lower heat and humidity."], ["Humidity", "how much water vapour is in the air; high humidity helps fungal diseases."], ["Root-knot nematode", "a tiny worm in the soil that makes swellings on roots and weakens plants."], ["Footbath", "a shallow tray of disinfectant at the entrance to clean boots."]],
          slides: [
            { title: "Heat and humidity", bullets: ["Open vents in the morning, close as needed", "Water only through the drip; keep leaves dry", "Prune lower leaves and side shoots; do not overcrowd"] },
            { title: "Pests under cover", bullets: ["Whiteflies, thrips, aphids, spider mites", "Tuta absoluta in tomatoes", "Root-knot nematodes in old soil"] },
            { title: "Watch and trap", bullets: ["Scout every row weekly", "Yellow cards: whiteflies, aphids; blue: thrips", "Pheromone traps for Tuta absoluta"] },
            { title: "Hygiene", bullets: ["Double door and footbath", "Few visitors; clean hands, clothes, tools", "Remove waste sealed; repair nets at once"] }
          ],
          sources: [FAO_GAP_GH, ICIPE_TUTA, PCPB, NAFDAC, GHANA_EPA],
          tryIt: "Write a one-page routine for your structure: what you do every morning and evening, what you do every week (scouting, traps, pruning, waste) and your entry rules (doors, footbath, visitors). Put it on the door.",
          youCanNow: "run a daily and weekly routine for heat, humidity, pests and hygiene in a protected structure.",
          quickCheck: [
            { objective: "O4", q: "It is hot and humid inside and you see grey mould starting. What helps most?", options: ["Water the leaves with a hose", "Close all vents all day", "Plant more plants closer", "Open the vents, keep leaves dry and prune lower leaves for air"], answer: 3, why: "Moving air and dry leaves slow fungal diseases." },
            { objective: "O4", q: "Why use a double door at the greenhouse entrance?", options: ["To look modern", "So one door is always closed and fewer insects get in", "To keep workers inside", "It lets in more heat"], answer: 1, why: "With one door always shut, insects cannot fly straight in." }
          ]
        },
        {
          title: "The business case: gross margin and payback",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calculate the cost, income, gross margin and payback period for one protected crop.",
          text: [
            "A business case shows, with numbers, whether the structure can pay for itself before it wears out. You need two kinds of cost. The investment is what you pay once: the structure, drip system, tank and installation. Running costs come every crop cycle: seed or seedlings, fertilizer, crop protection, labour, water and power, transport, packaging and market fees.",
            "Gross margin per cycle = income (expected kg sold x price per kg) - running costs. Payback period = investment / gross margin per year. Invented example in KES, only to practise the method: investment KES 400,000; one tomato cycle a year; expected sales 4,000 kg at KES 40 = KES 160,000; running costs KES 90,000; gross margin KES 70,000 a year. Payback = 400,000 / 70,000 = about 5.7 years. If the seller says the cover lasts about 4 years, this case does not pay back before you must replace it. That is a red flag, not a reason to borrow more.",
            "Now test it. If the price falls by a quarter (KES 30 instead of 40), income becomes KES 120,000, the margin KES 30,000 and payback over 13 years. Prices for tomatoes swing hard by season, so test a bad price, a lower yield and a lost crop. Then look for ways to improve it: a smaller or cheaper structure, a contract with a buyer, two cycles a year, a higher-value crop such as coloured capsicum, or sharing the cost in a group. The same arithmetic works in NGN, GHS or XOF: a grower near Dakar in Senegal does the same sums in CFA francs. Use your own quotes and prices, keep real records once you start, and ask a trusted adviser before you borrow or sign."
          ],
          steps: ["Add up the investment from your chosen quote.", "List running costs for one cycle.", "Income = expected kg sold x price per kg (from your buyer).", "Gross margin = income - running costs; per year = margin x cycles per year.", "Payback = investment / gross margin per year; compare with the life of the cover.", "Test a price fall of a quarter, a lower yield and a lost crop."],
          words: [["Investment", "money paid once to set up, such as the structure and drip system."], ["Running costs", "money spent every crop cycle, such as seedlings, fertilizer, labour and transport."], ["Gross margin", "income minus running costs for one cycle or one year."], ["Payback period", "how long the gross margin takes to repay the investment."]],
          slides: [
            { title: "Two kinds of cost", bullets: ["Investment: structure, drip, tank, installation", "Running costs: seedlings, feed, labour, water, transport"] },
            { title: "The formulas", bullets: ["Gross margin = income - running costs", "Payback = investment / gross margin per year", "Payback must be shorter than the cover's life"] },
            { title: "Invented example (KES)", bullets: ["Investment 400,000; margin 70,000 a year", "Payback about 5.7 years", "Price down a quarter: over 13 years"] },
            { title: "Make it stronger", bullets: ["Smaller structure or group sharing", "Buyer contract; two cycles a year", "Higher-value crop; real records; ask an adviser"] }
          ],
          sources: [NORDEY_REVIEW],
          tryIt: "Final task: write your protected-farming business case for one crop: your five conditions, the structure with three quotes compared and seller checks done, the crop and variety, your nursery and fertigation plan, your weekly routine, and the investment, running costs, income, gross margin, payback period, and the payback if the price falls by a quarter.",
          youCanNow: "calculate the gross margin and payback period for a protected crop and test it against a price fall.",
          quickCheck: [
            { objective: "O5", q: "Investment is 300,000 and the gross margin is 100,000 a year. What is the payback period?", options: ["1 year", "30 years", "3 years", "100 years"], answer: 2, why: "300,000 / 100,000 = 3 years." },
            { objective: "O5", q: "Your payback is 6 years but the cover lasts about 4. What does this tell you?", options: ["The case does not pay back in time; change the plan or do not invest yet", "It is fine; borrow more", "Payback does not matter", "Buy a second greenhouse"], answer: 0, why: "If the cover wears out before payback, you lose money unless the plan changes." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Running it as a business",
        questions: [
          { objective: "O3", q: "What is fertigation?", options: ["Spraying pesticide through a hose", "Burning plant waste", "Covering a greenhouse with net", "Giving fertilizer dissolved in drip irrigation water"], answer: 3, why: "Fertigation feeds plants through the drip lines." },
          { objective: "O3", q: "An EC meter tells you:", options: ["The air temperature", "How much dissolved fertilizer is in the water", "The price of tomatoes", "How many insects are on a card"], answer: 1, why: "EC measures dissolved salts, which shows fertilizer strength." },
          { objective: "O4", q: "Which pest is a special risk for greenhouse tomatoes?", options: ["Tuta absoluta", "Locusts", "Rats in the grain store", "Cattle ticks"], answer: 0, why: "Tuta absoluta attacks tomato leaves, stems and fruit and multiplies fast under cover." },
          { objective: "O4", q: "Blue sticky cards in a greenhouse catch mainly:", options: ["Whiteflies", "Spider mites", "Thrips", "Nematodes"], answer: 2, why: "Thrips are drawn to blue; whiteflies and aphids to yellow." },
          { objective: "O5", q: "Gross margin is:", options: ["Income minus running costs", "The price of the structure", "The number of plants", "Income plus investment"], answer: 0, why: "Gross margin shows what is left from sales after running costs." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Greenhouse and Protected Farming for High-Value Crops",
    questions: [
      { objective: "O1", q: "Protected farming means:", options: ["Farming only at night", "Growing crops under a cover such as a greenhouse, shade net or tunnel", "Using a guard dog", "Farming without water"], answer: 1, why: "The cover protects the crop from rain, hail and many insects." },
      { objective: "O1", q: "Which buyer situation best supports a greenhouse?", options: ["\"I will sell at the market somehow\"", "No buyer yet", "A neighbour might buy some", "A hotel agrees to take a set amount every week"], answer: 3, why: "A steady weekly buyer is one of the five conditions." },
      { objective: "O1", q: "A 2017 review of protected cultivation in sub-Saharan Africa found that:", options: ["It is not suitable in every climate and still needs other pest controls", "It removes all pests", "It needs no skills", "It always pays in one season"], answer: 0, why: "The review found limits by climate and that skills, support and finance are barriers." },
      { objective: "O1", q: "Which is a capital condition?", options: ["Owning a tractor", "Having a big family", "Money for the structure, first crop and running costs without risking food money", "A bright greenhouse colour"], answer: 2, why: "You need money for setup and running costs without putting your household at risk." },
      { objective: "O2", q: "Why compare quotes line by line?", options: ["To see what each includes and leaves out", "To choose the longest quote", "Because sellers like it", "It is not useful"], answer: 0, why: "A cheaper quote may leave out drip, training or installation." },
      { objective: "O2", q: "Which is a warning sign from a greenhouse seller?", options: ["A written warranty", "Farmer references you can visit", "A clear list of what is included", "A guaranteed yield and pressure to pay today"], answer: 3, why: "Guarantees and pressure to pay fast are signs of over-promising." },
      { objective: "O2", q: "Which option is the cheapest way to start and learn?", options: ["A large steel greenhouse", "Walk-in or low tunnels", "A glass greenhouse", "A cold store"], answer: 1, why: "Tunnels cost the least and let you learn before a bigger investment." },
      { objective: "O2", q: "What should you get in writing before paying?", options: ["Only the seller's phone number", "Nothing; trust is enough", "The warranty, delivery date and everything included", "A photo of the seller"], answer: 2, why: "Written terms protect you if something goes wrong." },
      { objective: "O3", q: "Many greenhouse cucumber varieties:", options: ["Set fruit without bees", "Need bees inside", "Grow only in winter", "Are planted from cuttings"], answer: 0, why: "Many greenhouse cucumbers are bred to set fruit without pollination." },
      { objective: "O3", q: "When is the best time to transplant seedlings?", options: ["At midday in full sun", "During heavy rain outside", "Before the seedlings have roots", "In the cool evening, then water them in"], answer: 3, why: "Cool evenings reduce transplant shock." },
      { objective: "O3", q: "Which fertilizers are used for fertigation?", options: ["Any granular fertilizer", "Water-soluble fertilizers made for fertigation", "Fresh manure", "Lime"], answer: 1, why: "Only fully soluble fertilizers pass through drip lines without blocking them." },
      { objective: "O4", q: "Hot, still, wet air under cover mainly encourages:", options: ["Fungal diseases such as late blight and grey mould", "Faster pollination", "Fewer pests", "Lower costs"], answer: 0, why: "Humidity and wet leaves help fungal diseases spread." },
      { objective: "O4", q: "Why can pests that get into a greenhouse multiply fast?", options: ["The plastic feeds them", "They are always bigger", "Greenhouses attract rain", "There is no rain or many natural enemies inside to stop them"], answer: 3, why: "Under cover, the natural checks on pests are fewer." },
      { objective: "O4", q: "Which is a good hygiene rule?", options: ["Let visitors walk in from other farms freely", "Leave fallen fruit on the floor", "Use a footbath and keep one of the double doors always closed", "Leave holes in the net for air"], answer: 2, why: "Footbaths and double doors keep pests and diseases out." },
      { objective: "O4", q: "If a pesticide is needed in a greenhouse in Kenya, it must be:", options: ["Registered with PCPB and used as its label says, with protective equipment", "Any product the neighbour has", "Mixed stronger because it is indoors", "Sprayed just before picking"], answer: 0, why: "Only registered products, used as the label says, are legal and safe." },
      { objective: "O5", q: "Which is an investment cost?", options: ["Seedlings", "Labour for picking", "The greenhouse structure and drip system", "Transport to market"], answer: 2, why: "Investment is paid once to set up; the others are running costs." },
      { objective: "O5", q: "Investment 500,000; gross margin 125,000 a year. What is the payback period?", options: ["2 years", "6 years", "10 years", "4 years"], answer: 3, why: "500,000 / 125,000 = 4 years." },
      { objective: "O5", q: "Income 200,000 and running costs 120,000. What is the gross margin?", options: ["320,000", "80,000", "120,000", "200,000"], answer: 1, why: "200,000 - 120,000 = 80,000." },
      { objective: "O5", q: "Why test what happens if the price falls by a quarter?", options: ["Because vegetable prices swing and you must know if you can still pay back", "To make the numbers look better", "Because prices never change", "It is required by the seller"], answer: 0, why: "A plan that only works at the best price is risky." },
      { objective: "O5", q: "Which change can make a weak business case stronger?", options: ["Borrowing more to buy a bigger greenhouse", "Ignoring the payback", "Choosing a crop with no buyer", "A buyer contract, a smaller structure or two cycles a year"], answer: 3, why: "Lower investment, steadier prices or more cycles raise the margin or shorten payback." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [1, 2, 5, 6, 9, 10, 11, 13, 16] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part of the business case and check it again with an agronomist or trusted adviser before you invest.",
    criteria: [
      { name: "Does it suit me?", objective: "O1", notYet: "The five conditions are missing or answered without reasons.", meets: "Water, market, skills, capital and climate are each answered yes or no with a reason, and a clear decision is written.", exceeds: "A missing condition has a plan to fix it, such as a named buyer or a water test." },
      { name: "Structure and seller checks", objective: "O2", notYet: "One quote only, or a seller's promises are taken without checking.", meets: "At least three quotes compared line by line, with references asked for and the warranty and contents in writing.", exceeds: "Two reference farmers were visited and their real results are noted." },
      { name: "Crop and fertigation plan", objective: "O3", notYet: "No crop timetable, or the feeding plan is a guess.", meets: "Crop and variety chosen by the buyer's needs, with dated nursery, transplanting and harvest, and a feeding plan from an agronomist or test with daily drip checks.", exceeds: "The plan includes EC and pH targets set by the agronomist and a daily record sheet." },
      { name: "Climate, pest and hygiene routine", objective: "O4", notYet: "No routine, or pests are handled only by spraying.", meets: "A daily and weekly routine for vents, scouting, traps, pruning, waste and entry rules, with only registered products used as the label says.", exceeds: "The routine is posted on the door and has been followed and recorded for at least two weeks." },
      { name: "Numbers and payback", objective: "O5", notYet: "No numbers, or the gross margin or payback is wrong.", meets: "Investment, running costs, income, gross margin and payback are correct, compared with the cover's life, and a quarter price fall is tested.", exceeds: "Also tests a lower yield and a lost crop, and lists changes that would make the case stronger." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who compare at least three quotes and visit reference farmers before buying a structure (follow-up survey)",
      "Learners who decide not to invest yet, or to start smaller, because their business case did not pay back (a good result, not a failure)",
      "Learners with a structure who report a weekly routine and fewer crops lost to pests or disease after one cycle",
      "Learners who report their real gross margin per cycle compared with their business case"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone with a calculator, or paper, pen and a simple calculator",
      "Written quotes from local greenhouse, shade-net or tunnel sellers (learners collect these during the course)",
      "Contact details for an agronomist or extension officer and a buyer the learner can talk to",
      "Optional: a visit to a working greenhouse, a thermometer, sticky cards and an EC meter to show the group",
      "About 60 to 90 minutes in total for lessons, quick checks and quizzes, plus time to collect quotes and talk to buyers"
    ],
    facilitatorNotes: [
      "Take the pre-test together, then visit a working greenhouse or shade net if you can, and ask the owner about real costs and problems.",
      "Remind learners that every money figure in the course is an invented example; they must use their own quotes and buyer prices.",
      "Do not recommend a greenhouse seller, product or fertilizer recipe; teach learners how to compare and check instead.",
      "Treat \"not yet\" or \"start smaller\" as a good result if the numbers do not work; it saves families from debt.",
      "Never recommend a pesticide product or rate; show learners how to check the regulator's list and read a label.",
      "Score each business case with the rubric and check every calculation with the learner before they talk to a lender or seller."
    ]
  }
};
