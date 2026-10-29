"use strict";

// Koach Learn course: Agriculture (Africa) -> "Agroecology and Soil Regeneration".
// Goes beyond agri-soil-health (testing, compost, rotation, mulch basics): the principles of agroecology (FAO's 10 elements), restoring degraded land with cover crops,
// green manures, fertilizer trees and farmer-managed natural regeneration (FMNR), linking crops and livestock, on-farm biodiversity, cutting the bill for imported
// fertilizer, and measuring improvement season by season. Money figures are made-up examples.

const FAO_AE = { name: "FAO: Agroecology Knowledge Hub", url: "https://www.fao.org/agroecology/en/" };
const FAO_10 = { name: "FAO: The 10 elements of agroecology (adopted by FAO members in 2019)", url: "https://www.fao.org/agroecology/overview/the-10-elements-of-agroecology/en" };
const FMNR_STEPS = { name: "Tearfund Footsteps 110: Farmer-managed natural regeneration, steps to success (with World Vision)", url: "https://learn.tearfund.org/-/media/learn/resources/footsteps/pdfs/footsteps-101-110/2020-tearfund-footsteps-110-farming-for-the-future-en-centre-page-en.pdf" };
const FMNR_ICRAF = { name: "World Agroforestry (ICRAF) Uganda: FMNR user guide", url: "https://fmnrhub.com.au/wp-content/uploads/2024/05/FMNR_Uganda-near-final-v3-2018.pdf" };
const FAO_AGROFOR = { name: "FAO: Agroforestry", url: "https://www.fao.org/agroforestry/en/" };
const GLIRICIDIA = { name: "Sileshi et al.: Can integration of legume trees increase yield stability in rain-fed maize cropping systems in Southern Africa? (Malawi and Zambia trials)", url: "https://repository.up.ac.za/handle/2263/20631" };
const TITHONIA = { name: "Tithonia diversifolia: variations in leaf nutrient concentration and implications for biomass transfer (western Kenya)", url: "https://centaur.reading.ac.uk/119281" };
const FAO_SOM = { name: "FAO: The importance of soil organic matter", url: "https://www.fao.org/4/a0100e/a0100e.pdf" };
const HANDBOOK_4R = { name: "4R Plant Nutrient Management in African Agriculture: an extension handbook", url: "https://alliancebioversityciat.org/publications-data/4r-plant-nutrient-management-african-agriculture-extension-handbook-fertilizer" };

module.exports = {
  id: "agri-agroecology-regeneration",
  category: "Agriculture (Africa)",
  name: "Agroecology and Soil Regeneration",
  skills: "Applying agroecology principles, Restoring land with cover crops and green manure, Regenerating trees with FMNR, Linking crops and livestock, Cutting the fertilizer bill, Measuring soil improvement over seasons",
  outcome: "write and start a three-season plan to bring one degraded field back to life using agroecology: cover crops or green manures, trees, crop and livestock links and on-farm nutrients, with a lower bill for bought fertilizer and simple measures to see the soil improve.",
  about: [
    "This course is for smallholder and growing commercial farmers, young agripreneurs, farm workers and extension workers in Kenya, Nigeria, Ghana, Niger, Senegal and across Africa whose land is tired: yields falling, soil hard or washing away, striga spreading, and fertilizer costing more each year.",
    "Chapter 1 covers the principles of agroecology and how to bring degraded land back: cover crops and green manures, fertilizer trees, and farmer-managed natural regeneration (FMNR), which has helped farmers in Niger grow back trees on millions of hectares. Chapter 2 links crops and livestock, uses biodiversity to your advantage, cuts the cost of imported fertilizer and shows you how to measure improvement season by season.",
    "The course \"Soil Health and Fertility\" covers soil testing, compost, rotation and mulching; this course builds on it and does not repeat it. Regeneration takes several seasons, so start on one field and compare. Money figures are made-up examples. Each lesson takes about five minutes and ends with a task on your own land."
  ],
  finalTask: "Write a three-season regeneration plan for one degraded field on your farm (or an example: 1 acre of tired maize land in Kakamega, 2 hectares of sorghum and groundnuts in Zinder, Niger, or 1 hectare of cassava in Oyo State): what the field is like now; which cover crops, green manures or trees you will use and when; how crops and animals will feed each other; how many bags of bought fertilizer you aim to replace and the money saved; and the four or more measures you will record each season, with a sketch of the field.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Smallholder and growing commercial farmers, farm workers, young agripreneurs and extension workers across Africa (Kenya, Nigeria, Ghana and francophone West Africa, including the Sahel), farming maize, cassava, sorghum, millet, beans, groundnuts, rice, cocoa and coffee, often with goats, cattle, pigs or poultry.",
    startingPoint: "Know the basics of compost, manure, rotation and mulch, and can see that their soil is degraded. Few use cover crops, green manures, fertilizer trees or FMNR on purpose, link crops and animals as a system, or measure soil change over time.",
    gap: "Degraded soils and rising fertilizer prices squeeze yields and incomes. Learners need practical, low-cost ways to rebuild soil and cut bought inputs, and a way to see whether it is working, so they can keep going through the slow early seasons.",
    constraints: [
      "Reading level: plain words and short sentences; the course is also available in Spanish, French and Arabic",
      "Land and labour: small plots, family labour, competing uses for residues (animal feed, fuel)",
      "Time: regeneration takes several seasons; lessons are 4 to 6 minutes",
      "Money: figures are examples; no prices or subsidies are given as fact",
      "Land rights: tree and grazing rules differ by community and country; learners check local rules and by-laws"
    ],
    prerequisites: "\"Soil Health and Fertility\" (testing, compost, rotation, mulching) is recommended first."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a list of practices on your farm", action: "match each practice to the agroecology principle it uses, such as recycling, diversity or synergies", standard: "matching at least five practices correctly" },
    { id: "O2", condition: "For one degraded field", action: "choose a cover crop or green manure and plan when to sow it and when to cut it back", standard: "with a species that fits your rainfall and a sowing and cutting date" },
    { id: "O3", condition: "On a plot with living tree stumps or space for trees", action: "plan farmer-managed natural regeneration or fertilizer trees, step by step", standard: "covering which stumps or trees, how many stems, pruning and protection from animals and fire" },
    { id: "O4", condition: "Given the crops and animals on your farm", action: "draw the flows of feed, manure and residues between your crops and animals", standard: "showing at least three links and one place where nutrients leave the farm" },
    { id: "O5", condition: "Given last season's fertilizer use", action: "estimate how many bags of bought fertilizer on-farm nutrients can replace and the money saved", standard: "in local currency, marked as an estimate to check with extension" },
    { id: "O6", condition: "On the field you are restoring", action: "record simple soil and farm measures at the same time each season", standard: "using at least four measures, written down and compared with the season before" }
  ],
  chapters: [
    {
      name: "Chapter 1: Principles and bringing land back",
      lessons: [
        {
          title: "Agroecology: principles you can use on your farm",
          objectives: ["O1"],
          minutes: 5,
          goal: "Match practices on your farm to the principles of agroecology.",
          text: [
            "Agroecology means farming with the way nature works: using plants, animals, soil life, trees and people's knowledge so the farm feeds itself more and buys in less. FAO describes 10 elements of agroecology, adopted by its member countries in 2019.",
            "Five are about how the farm works: recycling (nutrients and waste go back into the farm), efficiency (more from the same water, land and inputs), diversity (many crops, animals and trees), synergies (parts that help each other, like legumes feeding maize) and resilience (coping with shocks). Five are about people: co-creation of knowledge (farmers and researchers learning together), human and social values, culture and food traditions, responsible governance, and circular and solidarity economy (selling and buying locally and fairly).",
            "You probably use some already. Feeding maize stover to goats and putting their manure back on the field is recycling and synergy. Intercropping cassava with groundnuts is diversity. A farmer field school is co-creation of knowledge. Agroecology asks you to use these on purpose, and to add more, step by step."
          ],
          words: [["Agroecology", "farming that uses natural processes and local knowledge so the farm needs fewer bought inputs and copes better with shocks."], ["Synergy", "when two parts of the farm help each other, so together they give more than apart."], ["Recycling (on a farm)", "returning crop residues, manure and waste to the soil instead of losing them."]],
          slides: [
            { title: "Agroecology is...", bullets: ["Farming with nature's processes", "Farm feeds itself more, buys in less", "FAO: 10 elements, adopted in 2019"] },
            { title: "How the farm works", bullets: ["Recycling and efficiency", "Diversity and synergies", "Resilience"] },
            { title: "People and fairness", bullets: ["Co-creating knowledge", "Social values, food culture", "Good governance; circular, fair economy"] },
            { title: "You may already do it", bullets: ["Stover to goats, manure back to field", "Cassava + groundnut intercrop", "Farmer field schools"] }
          ],
          sources: [FAO_10, FAO_AE],
          tryIt: "List six practices on your farm or in your village. Next to each, write the agroecology principle it uses (recycling, efficiency, diversity, synergies, resilience or one of the people elements). Circle one principle you hardly use.",
          youCanNow: "match farm practices to the principles of agroecology and spot which ones you could use more.",
          quickCheck: [
            { objective: "O1", q: "A farmer feeds bean haulms to her goats and spreads the goat manure on her maize. Which principles is she using?", options: ["Recycling and synergy", "Governance only", "Efficiency of the tractor", "None"], answer: 0, why: "Residues feed the animals and manure feeds the soil: nutrients are recycled and the parts help each other." },
            { objective: "O1", q: "Which is an example of diversity on a farm?", options: ["Only maize, every season, on every field", "Burning all residues", "Cassava, groundnuts, trees and goats on the same farm", "Buying all feed from town"], answer: 2, why: "Many crops, animals and trees together is diversity, one of FAO's 10 elements." }
          ]
        },
        {
          title: "Bringing degraded land back: cover crops and green manure",
          objectives: ["O2"],
          minutes: 6,
          goal: "Choose a cover crop or green manure for a degraded field and plan when to sow and cut it.",
          text: [
            "Degraded land has lost organic matter and structure: rain runs off, crops are stunted and weeds such as striga take over. Mulch and compost help, but you rarely have enough. Cover crops and green manures grow the organic matter on the field itself.",
            "A cover crop is grown mainly to cover and protect the soil, often between seasons. A green manure is grown and then cut and left on or worked into the soil to feed it. Legumes do both and also add nitrogen: lablab, mucuna (velvet bean), canavalia (jack bean), crotalaria, cowpea and pigeon pea are used in different parts of Africa. Some, like lablab and cowpea, also give food or fodder; mucuna seed needs special processing before people can eat it, so treat it as a soil and feed crop and ask extension.",
            "Leafy shrubs can be used as green leaf manure too. In western Kenya, farmers cut tithonia (Mexican sunflower) leaves from hedges and spread them on fields; research found the leaves rich in nutrients, but cutting and carrying is hard work, so it pays best on vegetables and other high-value crops.",
            "Timing matters. Sow the cover crop early enough to grow well before the dry season, or relay it into the main crop a few weeks after planting. Cut it back before it competes with your next crop or sets hard seed, and leave the cut material on the surface as mulch. Ask your extension officer or research institute which species and dates suit your rainfall."
          ],
          steps: ["Walk the field: where is it bare, hard or full of striga?", "Choose one or two cover crop or green manure species that fit your rainfall.", "Decide: grow it between seasons, relay it into the main crop, or as a fallow.", "Write the sowing date and the cutting date.", "Cut before it competes with your crop; leave it on the surface.", "Keep animals off until it has done its job, or plan a fodder share."],
          words: [["Degraded land", "land that has lost soil, organic matter or plant cover, so it produces much less."], ["Cover crop", "a crop grown mainly to cover and protect the soil."], ["Green manure", "a crop grown and then cut and left on or in the soil to feed it."], ["Relay cropping", "sowing a second crop into a standing crop before the first is harvested."]],
          slides: [
            { title: "Grow organic matter on the field", bullets: ["Degraded land: runoff, stunting, striga", "Not enough mulch or compost to bring in", "Cover crops and green manures grow it in place"] },
            { title: "Legume choices", bullets: ["Lablab, cowpea, pigeon pea: food or fodder too", "Mucuna, canavalia, crotalaria: soil and feed", "They add nitrogen from the air"] },
            { title: "Green leaf manure", bullets: ["Tithonia leaves in western Kenya", "Rich in nutrients; cutting is hard work", "Best on high-value crops"] },
            { title: "Get the timing right", bullets: ["Sow early or relay into the main crop", "Cut before it competes or sets hard seed", "Ask extension what fits your rainfall"] }
          ],
          sources: [TITHONIA, FAO_SOM],
          tryIt: "Pick your most degraded field. Choose one cover crop or green manure for it, and write: why you chose it, the sowing date, how you will sow it (between seasons, relay or fallow) and the cutting date. Note one question to ask your extension officer.",
          youCanNow: "choose a cover crop or green manure for a degraded field and plan when to sow and cut it.",
          quickCheck: [
            { objective: "O2", q: "What is the main difference between a cover crop and a green manure?", options: ["Cover crops are always trees", "Green manures are bought in bags", "There is no difference", "A green manure is grown to be cut and left to feed the soil"], answer: 3, why: "Cover crops protect the soil; green manures are grown mainly to be cut and feed it (many crops do both)." },
            { objective: "O2", q: "When should you cut back a cover crop grown before maize?", options: ["Before it competes with the maize or sets hard seed", "Never", "After the maize is harvested", "Only if it flowers purple"], answer: 0, why: "Cutting at the right time stops competition and leaves mulch for the next crop." }
          ]
        },
        {
          title: "Trees that come back: FMNR and fertilizer trees",
          objectives: ["O3"],
          minutes: 6,
          goal: "Plan farmer-managed natural regeneration or fertilizer trees for one plot.",
          text: [
            "Many fields that look treeless still have living tree stumps and roots under the soil. Farmer-managed natural regeneration (FMNR) lets them grow back instead of slashing them every season. In Niger, FMNR spread from farmer to farmer and has brought trees back to more than five million hectares of farmland, giving fodder, firewood, shade and better crops.",
            "The steps, from World Vision and partner guides: survey the field for sprouting stumps and choose the useful species; for each stump, keep three to five of the tallest, straightest stems and cut the rest; prune side branches up to about halfway up each stem, with a sharp tool, cutting upwards; come back every few months to remove new shoots; protect the stems from animals and fire; when you harvest a stem, let a younger one replace it. Mark the chosen stems and agree rules with your neighbours and community so animals and cutters leave them alone.",
            "Where there are no stumps, you can plant fertilizer trees: legume trees such as gliricidia, faidherbia (common in Sahel parklands, including Senegal's groundnut basin) or calliandra, whose leaves feed the soil or animals. Long trials in Malawi and Zambia found maize grown with gliricidia gave steadier yields over the years than maize with fertilizer alone, though pruning the trees two or three times a year is real work.",
            "Before cutting or selling trees, check your country's forestry rules and your community's by-laws."
          ],
          steps: ["Walk the plot and mark living stumps and young trees.", "Choose useful species: fodder, fuel, fruit, soil.", "Keep 3 to 5 straight stems per stump; cut the rest.", "Prune side branches halfway up; sharp tool, cut upwards.", "Protect from animals and fire; agree rules with neighbours.", "No stumps? Plan fertilizer trees with extension advice."],
          words: [["FMNR", "farmer-managed natural regeneration: letting tree stumps and roots on your land grow back, then choosing and pruning the best stems."], ["Fertilizer tree", "a tree, usually a legume, whose leaves feed the soil."], ["Parkland", "farmland with trees scattered across the fields."], ["By-law", "a rule agreed by a local community or council."]],
          slides: [
            { title: "An underground forest", bullets: ["Living stumps and roots in bare fields", "FMNR lets them grow back", "Niger: trees back on 5+ million hectares"] },
            { title: "FMNR steps", bullets: ["Choose stumps and useful species", "Keep 3 to 5 straight stems", "Prune halfway up; sharp tool, cut upwards"] },
            { title: "Protect and manage", bullets: ["Remove new shoots every few months", "Keep animals and fire away", "Agree rules with the community"] },
            { title: "No stumps? Fertilizer trees", bullets: ["Gliricidia, faidherbia, calliandra", "Steadier maize yields in Malawi and Zambia trials", "Pruning takes work; check forestry rules"] }
          ],
          sources: [FMNR_STEPS, FMNR_ICRAF, GLIRICIDIA, FAO_AGROFOR],
          tryIt: "Walk one plot and count the living stumps or young trees. Draw a quick sketch marking the ones you would keep. Write which species they are (or ask someone), what you want from them, and how you will protect them from animals and fire.",
          youCanNow: "plan farmer-managed natural regeneration or fertilizer trees for a plot, step by step.",
          quickCheck: [
            { objective: "O3", q: "In FMNR, what do you do with the many shoots on a living stump?", options: ["Cut them all every season", "Burn the stump", "Keep three to five of the tallest, straightest stems and cut the rest", "Leave every shoot to grow"], answer: 2, why: "Keeping a few good stems lets them grow fast into useful trees." },
            { objective: "O3", q: "Why should a farmer agree FMNR rules with neighbours?", options: ["So animals and woodcutters leave the chosen stems alone", "To sell the stumps", "Because trees grow faster after a meeting", "It is never needed"], answer: 0, why: "Community agreement protects the stems from grazing and cutting while they grow." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Principles and bringing land back",
        questions: [
          { objective: "O1", q: "A farmer field school where farmers and researchers test practices together is an example of which agroecology element?", options: ["Co-creation of knowledge", "Efficiency of fertilizer", "Monocropping", "Imported inputs"], answer: 0, why: "Farmers and researchers learning together is co-creation of knowledge." },
          { objective: "O1", q: "Which practice shows synergy?", options: ["Selling all residues", "Legumes adding nitrogen that the next maize crop uses", "Bare fallow", "Burning crop stubble"], answer: 1, why: "The legume helps the maize: two parts of the farm working together." },
          { objective: "O2", q: "A field in Ghana is bare and hard after harvest. What could you grow to protect and feed it before the next season?", options: ["Nothing; leave it bare", "The same crop again with more fertilizer", "A legume cover crop such as cowpea or lablab", "Only weeds"], answer: 2, why: "A legume cover crop protects the soil and adds nitrogen and organic matter." },
          { objective: "O2", q: "Tithonia leaves are rich in nutrients but take a lot of labour to cut and carry. Where do they pay best?", options: ["Spread thinly over large maize fields", "On high-value crops such as vegetables", "Burned for ash", "Fed only to pigs"], answer: 1, why: "Research in western Kenya found the labour pays off best on high-value crops." },
          { objective: "O3", q: "How high should you prune side branches on young FMNR stems?", options: ["Not at all", "Cut the whole stem at ground level", "Right to the top", "Up to about halfway up the stem"], answer: 3, why: "Pruning too high makes stems weak against wind and animals." }
        ]
      }
    },
    {
      name: "Chapter 2: A farm that feeds itself",
      lessons: [
        {
          title: "Crops, livestock and biodiversity working together",
          objectives: ["O4"],
          minutes: 5,
          goal: "Draw the flows of feed, manure and residues between your crops and animals.",
          text: [
            "On a mixed farm, crops and animals can feed each other. Crop residues, cover crops, tree leaves and grain by-products feed animals; animals turn them into milk, meat, eggs, draught power and manure; manure and urine go back to feed the soil. When those links are strong, less money leaves the farm.",
            "Draw it. Put your fields, animals, home and compost or manure heap on paper, then draw arrows: stover to goats, manure to the vegetable plot, chicken litter to the compost, pond water to the vegetables in a fish farm. Then mark the leaks: residues burned, manure left in the sun and rain, urine lost, produce sold without anything coming back. Each leak is a place to gain.",
            "Biodiversity is part of the system too. Trees, hedges, grass strips and flowering plants give homes to the insects and birds that eat pests and to the bees that pollinate beans, tomatoes and coffee. Different crops and varieties spread risk. Keep some wild corners, avoid spraying when you do not need to, and grow more than one crop.",
            "Watch the balance: animals need feed through the dry season, and residues used for feed are not on the soil as mulch. Decide what share goes where, and grow extra fodder (grass strips, fodder trees, lablab) so you do not have to choose."
          ],
          steps: ["Draw your fields, animals, home and manure heap.", "Draw arrows for each flow: feed, residues, manure, water.", "Mark the leaks: burning, lost manure and urine, nothing returned.", "Mark places for biodiversity: hedges, trees, flowers, wild corners.", "Pick one leak to close this season."],
          words: [["Mixed farming", "growing crops and keeping animals on the same farm so they support each other."], ["Nutrient flow", "how nutrients move around the farm, for example from feed to manure to soil."], ["Biodiversity", "the variety of plants, animals, insects and soil life on and around the farm."], ["Natural enemies", "insects, birds and other animals that eat crop pests."]],
          slides: [
            { title: "Crops feed animals, animals feed soil", bullets: ["Residues, fodder, tree leaves to animals", "Milk, meat, eggs, power and manure back", "Strong links = less money leaving"] },
            { title: "Draw your farm's flows", bullets: ["Arrows: feed, manure, residues, water", "Mark leaks: burning, lost manure, urine", "Each leak is a gain waiting"] },
            { title: "Biodiversity works for you", bullets: ["Hedges and flowers house pest eaters and bees", "Several crops spread risk", "Spray only when needed"] },
            { title: "Balance feed and mulch", bullets: ["Residues can't be feed and mulch at once", "Grow extra fodder: grass strips, lablab, trees"] }
          ],
          sources: [FAO_10, FAO_AGROFOR],
          tryIt: "Draw your farm's flow map with at least three arrows between crops and animals. Mark at least one leak and one place where you could add biodiversity. Write the one leak you will close this season.",
          youCanNow: "draw the flows of feed, manure and residues on your farm and find the leaks to close.",
          quickCheck: [
            { objective: "O4", q: "On a flow map, which of these is a leak?", options: ["Stover fed to goats", "Manure spread on the vegetable plot", "Manure left in the sun and rain until it washes away", "Chicken litter added to compost"], answer: 2, why: "Manure exposed to sun and rain loses nutrients that should go back to the soil." },
            { objective: "O4", q: "Why keep hedges, trees and flowering plants around fields?", options: ["They house natural enemies of pests and pollinators", "They always lower yields", "They are only for decoration", "They stop rain"], answer: 0, why: "Habitat for pest eaters and bees is a free service to your crops." }
          ]
        },
        {
          title: "Cutting the cost of imported fertilizer",
          objectives: ["O5"],
          minutes: 5,
          goal: "Estimate how many bags of bought fertilizer on-farm nutrients can replace, and the money saved.",
          text: [
            "Most mineral fertilizer used in Africa is imported, so its price follows world markets and exchange rates. Agroecology aims to need less of it, not always none. Start from what you used last season: how many bags, which type, on which field, and what they cost.",
            "Then list the on-farm nutrients you can add: legume cover crops and intercrops (nitrogen), fertilizer trees and green leaf manure, more and better-kept manure and urine, bio-slurry if you have a biodigester, and crop residues kept on the field. Combining a smaller amount of mineral fertilizer with these often works better than either alone. In the Malawi trials, maize with gliricidia plus half the recommended fertilizer did about as well as maize with the full rate.",
            "Estimate, then test. For example (made-up figures): a farmer in Kakamega used 4 bags on one acre at KES 3,500 a bag. With a lablab relay crop and more manure, she plans to try 2 bags on half the field and 4 on the other half, and compare yields. If the yields match, she saves 2 bags, KES 7,000, on that acre. Do not cut fertilizer suddenly on all your land.",
            "Ask your extension officer or soil lab to check your plan against your soil results, and buy mineral fertilizer only from registered agro-dealers in sealed bags."
          ],
          steps: ["Write last season's fertilizer: bags, type, field, cost.", "List the on-farm nutrients you can add.", "Plan a reduced rate on part of a field, with on-farm nutrients.", "Keep a full-rate strip to compare.", "Estimate the bags and money saved if yields hold.", "Check the plan with extension; scale up only what works."],
          words: [["Mineral fertilizer", "manufactured fertilizer, such as urea, DAP or NPK, usually sold in bags."], ["Integrated soil fertility management", "combining organic nutrients (manure, legumes, residues) with a smaller amount of mineral fertilizer."], ["Comparison strip", "a part of the field farmed the old way so you can compare results fairly."]],
          slides: [
            { title: "Why cut imported fertilizer", bullets: ["Price follows world markets and exchange rates", "Aim to need less, not always none", "Start from last season's bags and costs"] },
            { title: "On-farm nutrients", bullets: ["Legume covers, intercrops, fertilizer trees", "Manure, urine, bio-slurry, residues", "Mix with less mineral fertilizer"] },
            { title: "Test before you cut", bullets: ["Example: 2 bags vs 4 bags on half-fields", "Same yield = 2 bags, KES 7,000 saved (made-up)", "Never cut all at once"] },
            { title: "Check and buy safely", bullets: ["Extension or soil lab checks your plan", "Registered agro-dealers, sealed bags"] }
          ],
          sources: [GLIRICIDIA, HANDBOOK_4R],
          tryIt: "Write last season's fertilizer use for one field. List two on-farm nutrient sources you will add. Plan a half-field test with a lower rate, and estimate the bags and money you would save if yields hold, in your currency.",
          youCanNow: "estimate how much bought fertilizer on-farm nutrients could replace, and plan a fair test before you cut.",
          quickCheck: [
            { objective: "O5", q: "You want to use less fertilizer. What is the safest first step?", options: ["Stop all fertilizer on every field at once", "Double the fertilizer", "Buy unlabelled fertilizer because it is cheaper", "Test a lower rate plus on-farm nutrients on part of a field, beside a full-rate strip"], answer: 3, why: "A side-by-side test shows whether the lower rate works before you risk the whole harvest." },
            { objective: "O5", q: "A farmer in Nigeria used 6 bags at NGN 40,000 each and cuts to 4 with the same yield. What did he save?", options: ["NGN 40,000", "NGN 80,000", "NGN 240,000", "Nothing"], answer: 1, why: "2 bags × NGN 40,000 = NGN 80,000 (example figures)." }
          ]
        },
        {
          title: "Measuring improvement over seasons",
          objectives: ["O6", "O2", "O5"],
          minutes: 5,
          goal: "Record simple soil and farm measures at the same time each season.",
          text: [
            "Regeneration is slow. Yields may not jump in the first season, so you need other signs to see whether the soil is coming back. Measure the same spots, in the same month, every season, and write it down.",
            "Simple measures: ground cover (how much of the soil is covered by plants or mulch; estimate by eye or count in a square); earthworms (dig a spade-sized block and count); infiltration (push a tin with both ends cut into the soil, pour in water and time how long it takes to soak in); soil smell and crumb (does it break into small crumbs or big hard clods?); a soil photo from the same spot; the yield from a marked plot; and the fertilizer bags and money you spent.",
            "Every few years, a lab soil test can show organic matter and nutrients (see \"Soil Health and Fertility\" for sampling). Compare your restored field with an unchanged one if you can.",
            "A phone helps: take photos from the same spot, keep your numbers in a notes app or spreadsheet, and ask an AI assistant to turn them into a simple table or chart. The numbers come from your field."
          ],
          steps: ["Mark three spots in the field with sticks or stones.", "Choose at least four measures: cover, worms, infiltration, crumb, photo, yield, cost.", "Record them in the same month each season.", "Compare with last season and with an unchanged field.", "Review your plan: keep what works, change what does not."],
          words: [["Indicator", "a simple sign you measure to see whether things are getting better or worse."], ["Infiltration", "how quickly water soaks into the soil."], ["Ground cover", "the share of the soil surface covered by plants or mulch."], ["Baseline", "your first measurement, which later ones are compared with."]],
          slides: [
            { title: "Slow change needs measuring", bullets: ["Yield may not jump in season one", "Same spots, same month, every season", "Write it down"] },
            { title: "Simple measures", bullets: ["Ground cover and earthworm count", "Infiltration: time water to soak in", "Crumb, photo, yield, fertilizer cost"] },
            { title: "Compare", bullets: ["Against last season (your baseline)", "Against an unchanged field", "Lab test every few years"] },
            { title: "Your phone helps", bullets: ["Photos from the same spot", "Numbers in notes or a spreadsheet", "AI can tidy them into a table"] }
          ],
          sources: [FAO_SOM, FAO_AE],
          tryIt: "Final task: write your three-season regeneration plan for one field, with a sketch. Then take your baseline today: mark three spots and record at least four measures (for example cover, worm count, infiltration time and a photo).",
          youCanNow: "measure your soil and farm with simple indicators each season and use them to judge your regeneration plan.",
          quickCheck: [
            { objective: "O6", q: "Why measure the same spots in the same month every season?", options: ["It looks neat", "So the comparison is fair and shows real change", "Because worms only appear in one month", "To use more paper"], answer: 1, why: "Same place and time remove other causes, so changes reflect the soil." },
            { objective: "O6", q: "Water in your infiltration tin soaks in faster than last year. What does it suggest?", options: ["The soil is getting worse", "The tin is broken", "Nothing at all", "Soil structure is improving and holding more rain"], answer: 3, why: "Faster infiltration means more rain goes into the soil instead of running off." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: A farm that feeds itself",
        questions: [
          { objective: "O4", q: "Which arrow belongs on a crop-livestock flow map?", options: ["Maize stover to goats, and goat manure to the maize field", "Fertilizer from town to the shop", "Rain from the sky to the river", "Phone credit to the farmer"], answer: 0, why: "Feed to animals and manure back to fields are the farm's own nutrient flows." },
          { objective: "O4", q: "Residues are needed both as dry-season feed and as mulch. What helps most?", options: ["Burn half", "Grow extra fodder such as grass strips, lablab or fodder trees", "Sell the animals", "Leave the field bare"], answer: 1, why: "Extra fodder reduces the competition between feeding animals and covering soil." },
          { objective: "O5", q: "What did long trials in Malawi find for maize with gliricidia plus half the fertilizer?", options: ["It always failed", "It needed double the fertilizer", "Yields were about as good as maize with the full rate", "Trees killed the maize"], answer: 2, why: "Gliricidia plus half-rate fertilizer gave yields comparable to full fertilizer at Makoka." },
          { objective: "O5", q: "Where should you buy the mineral fertilizer you still use?", options: ["Any roadside seller with open bags", "From an online ad with no address", "From a neighbour's leftover sacks", "From a registered agro-dealer, in sealed bags"], answer: 3, why: "Registered dealers and sealed bags reduce the risk of fake or mixed fertilizer." },
          { objective: "O6", q: "What is a baseline?", options: ["The bottom of the field", "A type of fertilizer", "The first measurement that later ones are compared with", "The last harvest you ever take"], answer: 2, why: "Without a baseline you cannot tell whether things improved." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Agroecology and Soil Regeneration",
    questions: [
      { objective: "O1", q: "Which body describes the 10 elements of agroecology?", options: ["FIFA", "FAO", "A seed company", "The World Bank only"], answer: 1, why: "FAO's 10 elements of agroecology were adopted by its member countries in 2019." },
      { objective: "O1", q: "Putting crop residues and manure back into the soil uses which principle?", options: ["Monocropping", "Governance", "Imports", "Recycling"], answer: 3, why: "Returning residues and manure recycles nutrients." },
      { objective: "O1", q: "Selling vegetables to a local school and buying seed from a local cooperative is an example of:", options: ["Efficiency of tractors", "Synergy of pests", "Circular and solidarity economy", "Soil erosion"], answer: 2, why: "Local, fair buying and selling is the circular and solidarity economy element." },
      { objective: "O2", q: "Which crop is a legume often used as a cover crop or green manure?", options: ["Maize", "Sorghum", "Rice", "Lablab"], answer: 3, why: "Lablab is a legume that covers soil, adds nitrogen and gives fodder." },
      { objective: "O2", q: "What is relay cropping?", options: ["Sowing a second crop into a standing crop before the first is harvested", "Burning residues in rows", "Planting only once every two years", "Moving crops by truck"], answer: 0, why: "Relay cropping lets a cover crop start growing before the main crop is harvested." },
      { objective: "O2", q: "Why cut a green manure before it sets hard seed?", options: ["Seed is poisonous to soil", "It stops it becoming a weed and competing with the next crop", "Hard seed makes it rain", "It is required by law"], answer: 1, why: "Cutting on time prevents competition and unwanted volunteers." },
      { objective: "O2", q: "What is degraded land?", options: ["Land with too many trees", "Land under water", "Land that has lost soil, organic matter or cover and produces much less", "Land with a title deed"], answer: 2, why: "Degraded land has lost the things that make it productive." },
      { objective: "O3", q: "What does FMNR use to bring trees back?", options: ["Bought seedlings only", "Living stumps, roots and seeds already in the soil", "Plastic trees", "Fertilizer injections"], answer: 1, why: "FMNR protects and prunes what is already growing back from the soil." },
      { objective: "O3", q: "About how much farmland in Niger has trees back through FMNR?", options: ["About 10 hectares", "About 500 hectares", "None", "More than five million hectares"], answer: 3, why: "FMNR spread farmer to farmer to more than five million hectares in Niger." },
      { objective: "O3", q: "When pruning FMNR stems, you should:", options: ["Use a sharp tool and cut upwards", "Use a blunt tool and cut downwards", "Strip the bark", "Prune to the very top"], answer: 0, why: "Sharp, upward cuts heal faster and do less damage." },
      { objective: "O3", q: "Which is a fertilizer tree common in Sahel parklands such as Senegal's groundnut basin?", options: ["Eucalyptus", "Faidherbia", "Mango", "Pine"], answer: 1, why: "Faidherbia is a legume tree widely kept in Sahel farm parklands." },
      { objective: "O4", q: "Which is a leak on a farm's nutrient flow map?", options: ["Manure spread on the field", "Residues fed to goats", "Burning crop residues", "Chicken litter in compost"], answer: 2, why: "Burning sends nutrients and organic matter up in smoke." },
      { objective: "O4", q: "How do hedges and flowering plants help crops?", options: ["They house pest eaters and pollinators", "They always attract more pests", "They make soil acid", "They stop rain reaching crops"], answer: 0, why: "Habitat for natural enemies and bees is a free service to crops." },
      { objective: "O4", q: "In a tilapia and vegetable farm, which is a useful link?", options: ["Throwing fish waste in the river", "Using pond water to irrigate vegetables", "Draining the pond onto the road", "Burning the vegetables"], answer: 1, why: "Nutrient-rich pond water feeds the vegetables: a crop-animal link." },
      { objective: "O5", q: "Why does the price of mineral fertilizer change so much in many African countries?", options: ["It is grown on farms", "It depends on rainfall", "It never changes", "Most of it is imported, so it follows world prices and exchange rates"], answer: 3, why: "Imported inputs follow world markets and currency changes." },
      { objective: "O5", q: "A Ghanaian farmer used 5 bags at GHS 400 each and cuts to 3 with the same yield. What did she save?", options: ["GHS 800", "GHS 400", "GHS 2,000", "GHS 1,200"], answer: 0, why: "2 bags × GHS 400 = GHS 800 (example figures)." },
      { objective: "O5", q: "What is integrated soil fertility management?", options: ["Using only mineral fertilizer", "Using no nutrients at all", "Combining organic nutrients with a smaller amount of mineral fertilizer", "Testing soil every week"], answer: 2, why: "It mixes organic and mineral sources so each works better." },
      { objective: "O6", q: "Which is a simple measure of soil improvement?", options: ["The colour of your phone", "How quickly water soaks into the soil", "The price of maize in town", "The number of visitors"], answer: 1, why: "Faster infiltration shows better soil structure." },
      { objective: "O6", q: "Why compare your restored field with an unchanged field?", options: ["To see whether the change came from your practices and not just the weather", "To use more seed", "Because neighbours ask", "It makes no difference"], answer: 0, why: "A comparison field shows what would have happened anyway." },
      { objective: "O6", q: "How many measures should you record each season on the field you restore?", options: ["None", "One, only yield", "Only the rainfall", "At least four, such as cover, worms, infiltration and yield"], answer: 3, why: "Several measures show change even before yields rise." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [1, 3, 6, 7, 9, 11, 14, 16, 17] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part of the plan and try again.",
    criteria: [
      { name: "Principles named", objective: "O1", notYet: "The plan does not say which agroecology principles it uses.", meets: "Each practice in the plan is linked to an agroecology principle.", exceeds: "Uses at least four different principles, including one of the people elements." },
      { name: "Cover crop or green manure", objective: "O2", notYet: "No cover crop or green manure, or no dates.", meets: "A species that fits the rainfall, with sowing and cutting dates.", exceeds: "Also explains how it fits with animal feed and the main crop, and was checked with extension." },
      { name: "Trees", objective: "O3", notYet: "No tree plan, or trees with no protection.", meets: "FMNR or fertilizer trees with stems or species, pruning and protection from animals and fire.", exceeds: "Includes a community agreement or by-law, and how stems will be harvested and replaced." },
      { name: "Crop-livestock links", objective: "O4", notYet: "No flow map, or only one link.", meets: "A flow map with at least three links and one leak to close.", exceeds: "Shows how residues are shared between feed and mulch and where biodiversity is added." },
      { name: "Fertilizer saving", objective: "O5", notYet: "No estimate, or plans to stop fertilizer on all land at once.", meets: "Estimates bags and money saved in local currency, with a fair test against a full-rate strip.", exceeds: "Plan checked with extension or soil results, with a rule for when to scale up." },
      { name: "Measures over seasons", objective: "O6", notYet: "No measures or no baseline.", meets: "At least four measures, a baseline taken and a date for each season.", exceeds: "Includes an unchanged comparison field and photos from fixed spots." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who sow a cover crop or green manure, or start FMNR, within the next season (follow-up survey)",
      "Change in bought fertilizer per acre on the restored field over two seasons (learner records)",
      "Change in soil measures (cover, infiltration, worm count) and yield on the restored field over three seasons",
      "Number of neighbours or group members who copy a practice (extension reports)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Paper, pen and coloured pens for the farm flow map and field sketch",
      "A spade, an empty tin with both ends cut off, water and a watch for the soil measures",
      "Sticks or stones to mark measuring spots",
      "Last season's fertilizer records and prices (or example figures)",
      "A phone for photos and notes (optional)",
      "About 90 minutes in total, plus field time for the measures"
    ],
    facilitatorNotes: [
      "Run Lessons 3 and 6 in the field: find stumps together for FMNR and do the infiltration and worm counts as a group.",
      "Invite an extension officer or research institute (for example KALRO, IITA, CSIR or ISRA) to confirm which cover crops and fertilizer trees suit local rainfall.",
      "Discuss local grazing and tree-cutting rules openly; FMNR often needs a community agreement.",
      "Never present example prices as facts; collect local fertilizer prices before the session.",
      "Encourage side-by-side test strips rather than sudden cuts in fertilizer on all land.",
      "Score the final plan with the rubric and follow up after one and two seasons to compare measures."
    ]
  }
};
