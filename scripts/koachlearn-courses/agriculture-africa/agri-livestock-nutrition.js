"use strict";

// Koach Learn course: Agriculture (Africa) -> "Livestock Nutrition and Feed Formulation with Local Ingredients" (owner's farmer-course list, 29 October 2026:
// livestock nutrition with local feeds, "3-tier feeding models"). No standard definition of a "3-tier feeding model" could be confirmed, so the course teaches
// staged feeding (starter, grower, finisher, layers, lactation) and a three-part feed plan (basal feed or forage, concentrate, supplements) without claiming a
// branded method. Goes beyond agri-livestock-health (feed and water basics) and agri-post-harvest (grain storage and aflatoxin in food): nutrients, local
// ingredients and fodder, the Pearson square worked step by step, silage and hay, feed storage and mycotoxins, feeding by stage and costing feed per kg of gain
// or per litre of milk. All prices are made-up examples. Facts checked 29 October 2026 on Feedipedia (INRAE, CIRAD, AFZ, FAO), FAO, icipe, ILRI and University
// of Tennessee Extension.

const FEEDIPEDIA = { name: "Feedipedia (INRAE, CIRAD, AFZ and FAO): animal feed resources information system", url: "https://www.feedipedia.org/" };
const FEEDIPEDIA_MAIZE = { name: "Feedipedia: Maize grain (protein about 8 to 10.5 percent of dry matter)", url: "https://www.feedipedia.org/node/556" };
const FEEDIPEDIA_SOY = { name: "Feedipedia: Soybean meal (protein by type)", url: "https://www.feedipedia.org/node/674" };
const ICIPE_PUSHPULL = { name: "icipe: Push-pull technology (desmodium, Napier and Brachiaria as fodder)", url: "https://www.icipe.org/impacts/demonstration-research-impacts-communities/push-pull-technology" };
const TENNESSEE_PEARSON = { name: "University of Tennessee Extension: Feedstuffs activity packet (the Pearson square)", url: "https://animalscience.tennessee.edu/wp-content/uploads/sites/7/2020/07/BeefFeedstuffsActivityPacket.pdf" };
const FAO_SILAGE = { name: "FAO: Harvesting and ensiling techniques (silage making in the tropics)", url: "https://www.fao.org/4/x8486e/x8486e0w.htm" };
const FAO_SILAGE_SMALL = { name: "FAO: Silage making for small-scale farmers (conclusions: bag silage, low-cost methods)", url: "https://www.fao.org/4/x8486e/x8486e13.htm" };
const ILRI_MYCO = { name: "ILRI: Mycotoxin binders, an option for safer milk in Kenya?", url: "https://www.ilri.org/knowledge/publications/mycotoxin-binders-option-safer-milk-kenya" };

module.exports = {
  id: "agri-livestock-nutrition",
  category: "Agriculture (Africa)",
  name: "Livestock Nutrition and Feed Formulation with Local Ingredients",
  skills: "Matching nutrients to animal needs, Choosing local feed ingredients and fodder, Balancing a ration with the Pearson square, Making silage and hay and storing feed safely, Planning feeding by stage, Costing feed per kg of gain or litre of milk",
  outcome: "make and cost a balanced ration from local ingredients for one class of animal: match energy, protein, minerals and water to its stage, balance protein with the Pearson square, conserve and store feed safely, and work out the feed cost per kg of gain, per tray of eggs or per litre of milk.",
  about: [
    "This course is for smallholder and growing livestock and poultry farmers, farm workers, young agripreneurs, small feed mixers and extension workers in Kenya, Nigeria, Ghana, Côte d'Ivoire, Burkina Faso and across Africa. Feed is usually the biggest cost of keeping animals, so feeding well and cheaply decides whether the farm makes money.",
    "Chapter 1 covers what animals need and what you have: the nutrients, local ingredients such as maize, maize bran, wheat bran, soybean and cotton seed cake, fish meal and fodder such as Napier grass, desmodium and lablab, and how to balance a ration with the Pearson square, worked step by step. Chapter 2 covers conserving and planning: silage and hay, storing feed safely against mould and mycotoxins, feeding by stage with a three-part feed plan, and costing feed per kg of gain or per litre of milk.",
    "All prices here are made-up examples: use your own local prices. Nutrient values of ingredients vary, so check them with your supplier, a feed laboratory or your extension officer. This course gives no drug or additive doses; follow the label and your vet. Each lesson takes about five minutes and ends with a task. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Make a costed ration for one class of animal on your farm (or an example such as layers near Kumasi, grower pigs near Ibadan, broilers near Bouake, or a dairy cow in Kiambu): name the class and stage; write the three-part feed plan (basal feed or forage, concentrate, supplements) and water; balance the protein of the concentrate with the Pearson square, showing your working; list the kg of each ingredient per 100 kg of mix; cost it per kg with your local prices; and work out the feed cost per kg of gain, per tray of eggs or per litre of milk.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Smallholder and growing commercial livestock and poultry farmers, farm workers, young agripreneurs, small feed mixers and extension workers in East, West and Central Africa (including French-speaking countries).",
    startingPoint: "Feed animals with grazing, crop residues and bought commercial feed. Most cannot read a feed label or balance a ration, do not conserve fodder for the dry season, and do not know what their feed costs per kg of meat, egg or milk.",
    gap: "Bought feed is expensive and its quality varies; poor or mouldy feed cuts growth, eggs and milk and can make animals sick. Farmers who can mix a balanced ration from local ingredients, conserve fodder and cost their feed can cut costs, keep animals producing through the dry season and price their products with confidence.",
    constraints: [
      "Reading level: plain words and short sentences; simple arithmetic only (multiply, divide, percentages); the course is also available in Spanish, French and Arabic",
      "Devices: paper and pen or a phone calculator; a phone spreadsheet is optional",
      "Money: prices in KES, NGN, GHS and XOF are made-up examples; learners use local prices",
      "Ingredient values vary: learners check them with suppliers, a lab or the extension officer",
      "Animal health rules: no drug, additive or medicated-feed doses; follow the vet and the label"
    ],
    prerequisites: "Basic animal care and simple arithmetic. \"Livestock Health and Management\" is recommended first."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a class of animal and its stage", action: "list the nutrients it needs (energy, protein, minerals and water) and a local feed that supplies each one", standard: "naming one correct feed for each nutrient" },
    { id: "O2", condition: "Given the feeds available near you", action: "sort local ingredients and fodder into energy feeds, protein feeds, roughage and supplements", standard: "with at least 8 of 10 placed correctly" },
    { id: "O3", condition: "Given two ingredients and a target protein level", action: "balance a ration with the Pearson square and write the kg of each ingredient per 100 kg of mix", standard: "with the mix within 0.5 percentage points of the target" },
    { id: "O4", condition: "Using fodder and feed on your farm", action: "make silage or hay and store feed so it stays dry and free of mould", standard: "following every step of the checklist" },
    { id: "O5", condition: "For one class of animal", action: "write a staged feeding plan with basal feed or forage, concentrate and supplements for each stage", standard: "covering every stage from young to market, lay or milk" },
    { id: "O6", condition: "Using your local prices and records", action: "calculate the feed cost per kg of mix and per kg of gain, tray of eggs or litre of milk", standard: "with correct arithmetic and every ingredient included" }
  ],
  chapters: [
    {
      name: "Chapter 1: What animals need and what you have",
      lessons: [
        {
          title: "Nutrients: energy, protein, minerals and water",
          objectives: ["O1"],
          minutes: 5,
          goal: "List what an animal needs to eat and drink, and a local feed for each need.",
          text: [
            "Every animal needs four things from its feed and water. Energy keeps it alive, warm and moving, and fuels growth, milk and eggs; it comes mainly from grains (maize, sorghum, cassava), brans and fresh or conserved grass. Protein builds muscle, milk, eggs and young; it comes from oilseed cakes (soybean, cotton seed, groundnut, sunflower), fish meal and legumes such as desmodium and lablab. Minerals and vitamins build bones and eggshells and keep the body working: salt, calcium from limestone or shells, phosphorus and a mineral and vitamin premix.",
            "Water is the most important nutrient and the cheapest. An animal goes off feed fast without it, and milking cows and laying hens drink a lot. Give clean water all the time, more in hot weather, in clean drinkers in the shade.",
            "Needs change with the animal and its stage. A young, fast-growing animal, a laying hen and a milking cow need more protein than an adult at rest. Cattle, goats and sheep are ruminants: their stomach can digest grass and crop residues, so roughage is the base of their diet. Pigs and poultry cannot digest much roughage, so they need grain-based mashes with protein, minerals and vitamins mixed in."
          ],
          words: [["Nutrient", "a part of feed the body needs: energy, protein, minerals, vitamins and water."], ["Ruminant", "an animal with a four-part stomach that can digest grass: cattle, goats and sheep."], ["Premix", "a bought mix of minerals and vitamins added in small amounts to feed, as the label says."], ["Roughage", "bulky, fibre-rich feed such as grass, hay, silage and crop residues."]],
          slides: [
            { title: "Four needs", bullets: ["Energy: grains, brans, cassava, grass", "Protein: oilseed cakes, fish meal, legumes", "Minerals and vitamins: salt, limestone, premix", "Water: clean, all the time"] },
            { title: "Water first", bullets: ["Cheapest and most important nutrient", "More in heat; milking and laying animals drink a lot", "Clean drinkers in the shade"] },
            { title: "Needs change with stage", bullets: ["Young, laying and milking animals need more protein", "Adults at rest need less"] },
            { title: "Ruminants vs pigs and poultry", bullets: ["Cattle, goats, sheep: roughage is the base", "Pigs and poultry: grain-based mash with protein and premix"] }
          ],
          sources: [FEEDIPEDIA],
          tryIt: "Pick one class of animal on your farm (for example growing pigs, layers or a milking cow). Write its four needs and, next to each, one feed you can get locally that supplies it.",
          youCanNow: "list the energy, protein, mineral and water needs of an animal and name a local feed for each.",
          quickCheck: [
            { objective: "O1", q: "Which nutrient is the cheapest and the most important?", options: ["Protein", "Energy", "Water", "Vitamins"], answer: 2, why: "Animals quickly stop eating and producing without clean water." },
            { objective: "O1", q: "Which feed mainly supplies protein?", options: ["Soybean cake", "Maize grain", "Salt", "Cassava chips"], answer: 0, why: "Oilseed cakes such as soybean cake are rich in protein; maize and cassava mainly give energy." }
          ]
        },
        {
          title: "Local ingredients and fodder",
          objectives: ["O2"],
          minutes: 6,
          goal: "Sort the feeds you can get into energy feeds, protein feeds, roughage and supplements.",
          text: [
            "Energy feeds: maize, sorghum and millet grain, cassava (peeled, dried or processed so it is safe), maize bran and wheat bran. Brans are cheaper than grain and give some protein and fibre, but too much bran in a poultry mash dilutes the energy. Maize grain has only about 8 to 10 percent protein, so on its own it cannot feed a growing animal.",
            "Protein feeds: soybean cake (often around 44 to 48 percent protein, depending on how it was made), cotton seed cake, groundnut cake, sunflower cake and fish meal (such as omena in Kenya). Cotton seed cake contains gossypol, which can harm pigs, poultry and young animals, so use it only within the limits in a feed guide or from a nutritionist. Fish meal is rich but costly and its quality varies: buy from a trusted source and check that it is not mixed with sand or salt.",
            "Fodder and roughage for ruminants: Napier grass, Brachiaria grass, maize stover, legumes such as desmodium and lablab, and tree leaves such as leucaena and calliandra. Legumes are high in protein and can replace part of the bought concentrate. icipe's push-pull system grows desmodium between maize rows and Napier or Brachiaria around the field: it protects the maize from pests and gives high-quality fodder. Supplements: salt, limestone or shells for calcium, and a mineral and vitamin premix used as the label says."
          ],
          steps: ["List every feed you can buy or grow within easy reach.", "Mark each one: energy, protein, roughage or supplement.", "Write its price per kg and when in the year you can get it.", "Ask your supplier or extension officer for its protein value.", "Note any limits, such as cotton seed cake for pigs and poultry."],
          words: [["Concentrate", "feed rich in energy or protein, such as grain, bran, oilseed cake or a bought dairy meal."], ["Oilseed cake", "what is left after oil is pressed from seeds such as soybean or cotton seed; rich in protein."], ["Legume", "a plant such as desmodium, lablab or beans that is rich in protein and adds nitrogen to soil."], ["Gossypol", "a natural substance in cotton seed that can harm pigs, poultry and young animals."]],
          slides: [
            { title: "Energy feeds", bullets: ["Maize, sorghum, millet, safe-processed cassava", "Maize bran and wheat bran: cheaper, more fibre", "Maize alone: only about 8 to 10 percent protein"] },
            { title: "Protein feeds", bullets: ["Soybean cake, often about 44 to 48 percent protein", "Cotton seed, groundnut and sunflower cake", "Fish meal: rich but check quality"] },
            { title: "Fodder for ruminants", bullets: ["Napier, Brachiaria, maize stover", "Legumes: desmodium, lablab, leucaena, calliandra", "Push-pull gives fodder and protects maize"] },
            { title: "Supplements and limits", bullets: ["Salt, limestone or shells, premix as labelled", "Cotton seed cake: limits for pigs, poultry, young", "Check values with supplier or extension"] }
          ],
          sources: [FEEDIPEDIA_MAIZE, FEEDIPEDIA_SOY, ICIPE_PUSHPULL],
          tryIt: "Make a table of 8 to 10 feeds you can get near you with four columns: feed, type (energy, protein, roughage or supplement), price per kg, and months available.",
          youCanNow: "sort the feeds near you into energy feeds, protein feeds, roughage and supplements, and note their prices and limits.",
          quickCheck: [
            { objective: "O2", q: "Which is a protein-rich fodder legume for cattle and goats?", options: ["Maize stover", "Wheat bran", "Desmodium", "Cassava peels"], answer: 2, why: "Desmodium is a legume, rich in protein; the others mainly give energy or fibre." },
            { objective: "O2", q: "Why should you be careful with cotton seed cake for pigs and poultry?", options: ["It has no protein", "It contains gossypol, which can harm them", "It is too cheap", "It is only for fish"], answer: 1, why: "Gossypol in cotton seed can harm pigs, poultry and young animals, so use it within guide limits." }
          ]
        },
        {
          title: "Balancing a ration with the Pearson square",
          objectives: ["O3"],
          minutes: 6,
          goal: "Balance two ingredients to a target protein level with the Pearson square.",
          text: [
            "The Pearson square is a simple drawing that tells you how much of two feeds to mix to hit one target, usually protein. It works with one nutrient and two feeds at a time, and the target must be between the two feeds' values. Use values on the same basis (both as-fed or both dry matter).",
            "Worked example with typical values (check yours): maize at 9 percent protein, soybean cake at 44 percent, and a target of 18 percent. Your target comes from a feed guide, your extension officer or a nutritionist for that animal and stage. Draw a square. Write 18 in the middle, maize 9 at the top left and soybean cake 44 at the bottom left. Subtract across the diagonals and ignore minus signs: 44 minus 18 = 26 parts of maize (top right); 18 minus 9 = 9 parts of soybean cake (bottom right). Total parts = 26 + 9 = 35.",
            "Turn parts into kg per 100 kg: maize = 26 / 35 x 100 = 74.3 kg; soybean cake = 9 / 35 x 100 = 25.7 kg. Check: 74.3 x 9 % = 6.7 kg protein, plus 25.7 x 44 % = 11.3 kg, total 18.0 kg of protein in 100 kg: 18 percent. In a real mash you first set aside space for fixed items (premix, salt, limestone for layers, as the label or guide says), then use the square for the rest. The square balances protein only, so check energy, fibre and minerals with your extension officer."
          ],
          steps: ["Write the target protein in the middle of a square.", "Write feed A (low protein) top left and feed B (high protein) bottom left.", "Subtract across each diagonal; ignore minus signs.", "Top right = parts of feed A; bottom right = parts of feed B.", "Divide each by the total parts and multiply by 100 for kg per 100 kg.", "Check: kg x protein percent for each feed adds up to the target."],
          words: [["Pearson square", "a simple drawing that shows how much of two feeds to mix to hit one nutrient target."], ["Crude protein", "the protein value printed on feed labels and lab reports, as a percent."], ["Ration", "the feed an animal gets in a day, or the mix it is fed from."], ["As-fed", "measured as the feed is, with its water in; dry matter values remove the water."]],
          slides: [
            { title: "The Pearson square", bullets: ["One nutrient, two feeds", "Target must be between the two values", "Same basis: as-fed or dry matter"] },
            { title: "Set it up", bullets: ["Middle: target 18 percent", "Top left: maize 9; bottom left: soybean cake 44"] },
            { title: "Cross the diagonals", bullets: ["44 - 18 = 26 parts maize", "18 - 9 = 9 parts soybean cake", "Total 35 parts"] },
            { title: "Per 100 kg, then check", bullets: ["Maize 26 / 35 x 100 = 74.3 kg", "Soybean cake 9 / 35 x 100 = 25.7 kg", "6.7 + 11.3 = 18.0 kg protein: on target"] }
          ],
          sources: [TENNESSEE_PEARSON, FEEDIPEDIA_MAIZE, FEEDIPEDIA_SOY],
          tryIt: "Use the Pearson square to mix maize bran (use 10 percent protein as a practice value) with soybean cake (44 percent) for a 16 percent target. Write kg per 100 kg and check the protein adds up. (Answer: 28 parts bran and 6 parts cake, so 82.4 kg and 17.6 kg.)",
          youCanNow: "balance two feeds to a protein target with the Pearson square and check the result.",
          quickCheck: [
            { objective: "O3", q: "In the Pearson square, what goes in the middle?", options: ["The price of the feed", "The weight of the animal", "The number of animals", "The target protein level"], answer: 3, why: "The target nutrient level goes in the middle; the feeds go on the left." },
            { objective: "O3", q: "You mix maize (9 percent) and soybean cake (44 percent) for 18 percent. How many parts of maize?", options: ["26 parts (44 minus 18)", "9 parts (18 minus 9)", "35 parts", "18 parts"], answer: 0, why: "Subtract across the diagonal: 44 - 18 = 26 parts of maize." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: What animals need and what you have",
        questions: [
          { objective: "O1", q: "Why can cattle and goats live mainly on grass while pigs and chickens cannot?", options: ["Pigs and chickens do not need energy", "Grass is poisonous to pigs", "Cattle and goats are ruminants and can digest roughage", "Chickens only drink water"], answer: 2, why: "Ruminants' stomachs digest roughage; pigs and poultry need grain-based mashes." },
          { objective: "O1", q: "Which animal needs more protein in its feed?", options: ["A young, fast-growing broiler", "An adult goat resting in the dry season", "An empty, non-milking adult cow", "A fully grown ox at rest"], answer: 0, why: "Young, fast-growing, laying and milking animals need more protein." },
          { objective: "O2", q: "Which of these is mainly an energy feed?", options: ["Fish meal", "Maize grain", "Soybean cake", "Desmodium"], answer: 1, why: "Maize grain is mostly energy, with only about 8 to 10 percent protein." },
          { objective: "O3", q: "Which pair can the Pearson square balance to a 16 percent protein target?", options: ["Maize (9 percent) and maize bran (10 percent)", "Fish meal (60 percent) and soybean cake (44 percent)", "Two feeds both above 30 percent", "Maize (9 percent) and soybean cake (44 percent)"], answer: 3, why: "The target must sit between the two feeds' values: 16 is between 9 and 44." },
          { objective: "O3", q: "After the square, 26 parts maize and 9 parts soybean cake. How many kg of soybean cake in 100 kg?", options: ["9 kg", "35 kg", "About 25.7 kg", "About 74.3 kg"], answer: 2, why: "9 / 35 x 100 = 25.7 kg of soybean cake in 100 kg of mix." }
        ]
      }
    },
    {
      name: "Chapter 2: Conserve, plan and cost your feed",
      lessons: [
        {
          title: "Silage, hay and safe feed storage",
          objectives: ["O4"],
          minutes: 6,
          goal: "Make silage or hay and store feed so it stays dry and free of mould.",
          text: [
            "In the rainy season there is too much grass; in the dry season too little, and milk and weight drop. Conserving fodder evens this out. Silage is green fodder (maize, sorghum or Napier) kept without air so it ferments and stays moist and good to eat for months. Hay is grass or legume cut and dried in the sun until it is dry enough to store without rotting.",
            "Silage, the FAO way: chop small, fill quickly, compact hard and seal airtight. Cut maize or sorghum when the grain is soft and milky to doughy. Chop the fodder into short pieces, fill the pit, plastic tube, bag or clean drum fast, press out every pocket of air by trampling or packing, then seal with plastic and weigh it down. Napier and other grasses are low in sugar; farmers often add molasses to help them ferment (ask your extension officer how much). Leave it closed for some weeks, and once opened, take out what you need each day and close it again. Good silage smells sweet-sour; throw away mouldy or rotten parts.",
            "Moulds on feed can make mycotoxins, such as aflatoxin. They are invisible poisons that cut growth, milk and fertility, make animals sick, and can pass into milk, eggs and meat. ILRI studies in Kenya found aflatoxin in many dairy feeds. Prevent it: buy feed from trusted mills, check it is dry, free-flowing and smells fresh, store bags on pallets off the floor and away from walls, under a roof that does not leak, use the oldest feed first, and never feed mouldy feed, even to other animals."
          ],
          steps: ["Silage: harvest at the right stage and chop small.", "Fill the pit, tube, bag or drum quickly and compact hard to push out air.", "Seal airtight with plastic and weigh it down; leave it closed for some weeks.", "Hay: cut, dry in the sun, turn often, store dry under a roof.", "Feed store: pallets off the floor, away from walls, roof that does not leak.", "Use oldest feed first; throw away anything mouldy, caked or smelling bad."],
          words: [["Silage", "green fodder kept airtight so it ferments and stays good to feed for months."], ["Hay", "grass or legume cut and dried in the sun for storage."], ["Mycotoxin", "a poison made by moulds on feed, such as aflatoxin; it cannot be seen."], ["Pallet", "a raised wooden or plastic platform that keeps bags off the floor."]],
          slides: [
            { title: "Why conserve fodder", bullets: ["Too much grass in the rains, too little in the dry season", "Silage and hay keep milk and growth steady"] },
            { title: "Silage in four steps (FAO)", bullets: ["Chop small", "Fill quickly", "Compact hard to push out air", "Seal airtight and weigh down"] },
            { title: "Hay", bullets: ["Cut grass or legume", "Dry in the sun, turning often", "Store dry, under a roof, off the ground"] },
            { title: "Stop mould and mycotoxins", bullets: ["Buy from trusted mills; check dry and fresh-smelling", "Pallets, away from walls, roof that does not leak", "Oldest first; never feed mouldy feed"] }
          ],
          sources: [FAO_SILAGE, FAO_SILAGE_SMALL, ILRI_MYCO],
          tryIt: "Walk to where you store feed. Write three things that could let in damp or mould, and how you will fix each. Then plan one batch of silage or hay: what fodder, when to cut it, and what you will store it in.",
          youCanNow: "make silage or hay and store feed in a way that keeps out damp, mould and mycotoxins.",
          quickCheck: [
            { objective: "O4", q: "What is the most important thing when making silage?", options: ["Leaving it open so it can breathe", "Pushing out the air and sealing it airtight", "Adding water every day", "Storing it in the sun"], answer: 1, why: "Silage keeps only when air is pushed out and kept out, so it can ferment." },
            { objective: "O4", q: "A bag of dairy meal has grey, caked lumps and smells musty. What do you do?", options: ["Feed it to the dry cows", "Mix it with fresh feed", "Feed it to the chickens instead", "Do not feed it to any animal"], answer: 3, why: "Mould can carry mycotoxins that harm every animal and can pass into milk and eggs." }
          ]
        },
        {
          title: "Feeding by stage: a three-part feed plan",
          objectives: ["O5"],
          minutes: 5,
          goal: "Write a feed plan for each stage of one class of animal.",
          text: [
            "Animals need different feeds at different stages. Broilers: starter, then finisher (some farmers add a grower in between). Layers: chick mash, then growers mash, then layers mash from the point of lay, with extra calcium for the eggshells. Pigs: creep or weaner feed, grower, finisher, then special feeds for pregnant and suckling sows. Dairy cattle: calf, heifer, dry cow and lactation, with the concentrate matched to the milk each cow gives. Change from one feed to the next over a few days, not overnight.",
            "Use a simple three-part plan for each stage. Part 1, the basal feed: what most of the diet is made of. For cattle and goats this is forage (grazing, Napier, hay, silage, stover); for pigs and poultry it is the energy grains and brans in the mash. Part 2, the concentrate: the protein-rich part (oilseed cakes, fish meal, a bought dairy meal or a balanced mash) that tops up what the basal feed lacks. Part 3, supplements: salt, minerals, vitamins and calcium, used as the label says. Plus clean water all the time.",
            "Feeding to stage saves money: you do not pay for high-protein starter feed for an animal that no longer needs it. Weigh or estimate how much each stage eats and watch the animals: if they are thin, lay less or milk less, ask your extension officer to check the plan. The bag label or hatchery or breed guide says when to change feeds for commercial breeds."
          ],
          steps: ["Choose one class of animal.", "List its stages from young to market, lay or milk.", "For each stage write the basal feed.", "Add the concentrate that tops it up.", "Add supplements and water.", "Write when to change to the next stage, and change over a few days."],
          words: [["Basal feed", "the main part of the diet: forage for ruminants, energy grains for pigs and poultry."], ["Point of lay", "the age when young hens are about to start laying eggs."], ["Lactation", "the time a female is producing milk."]],
          slides: [
            { title: "Feed changes with stage", bullets: ["Broilers: starter, then finisher", "Layers: chick, growers, then layers mash", "Pigs: weaner, grower, finisher, sow; dairy: by milk"] },
            { title: "The three-part plan", bullets: ["1. Basal: forage, or grains and brans", "2. Concentrate: the protein top-up", "3. Supplements: salt, minerals, vitamins, calcium"] },
            { title: "Water, and change slowly", bullets: ["Clean water all the time", "Change feeds over a few days"] },
            { title: "Why it saves money", bullets: ["No costly starter for animals that do not need it", "Watch body condition, eggs and milk"] }
          ],
          sources: [FEEDIPEDIA],
          tryIt: "Choose one class of animal. Write a table with one row per stage and four columns: basal feed, concentrate, supplements, and when to change to the next stage.",
          youCanNow: "write a staged feeding plan with basal feed, concentrate and supplements for each stage.",
          quickCheck: [
            { objective: "O5", q: "In a three-part feed plan for a dairy cow, what is the basal feed?", options: ["Forage such as Napier grass, hay or silage", "The mineral premix", "The dairy meal", "Salt"], answer: 0, why: "For ruminants, forage makes up most of the diet; concentrate and supplements top it up." },
            { objective: "O5", q: "Your pullets are close to the point of lay. Which feed do they move to?", options: ["Broiler starter", "Chick mash", "Layers mash, changed over a few days", "Only maize grain"], answer: 2, why: "Layers mash gives the extra calcium needed for eggshells; change slowly over a few days." }
          ]
        },
        {
          title: "Costing your feed per kg of gain or litre of milk",
          objectives: ["O6"],
          minutes: 6,
          goal: "Calculate the cost of your ration per kg, and the feed cost per kg of gain, tray of eggs or litre of milk.",
          text: [
            "Step 1, cost per kg of mix. Multiply the kg of each ingredient by its price, add them up and divide by the total kg. Example with made-up Kenya shilling prices: 74.3 kg maize at KES 40 = 2,972; 25.7 kg soybean cake at KES 90 = 2,313. Total KES 5,285 for 100 kg, so KES 52.85 per kg. Add milling, transport and premix if you pay for them.",
            "Step 2, feed per unit of product. For meat, record the feed eaten and the weight gained: if 10 pigs eat 900 kg of grower feed and gain 300 kg, each kg of gain took 3 kg of feed (the feed conversion ratio, FCR). Feed cost per kg of gain = 3 x KES 52.85 = KES 158.55. For eggs: feed eaten by the flock in a week x price per kg, divided by trays collected. For milk: the cow's daily feed cost (forage plus dairy meal) divided by the litres she gives that day.",
            "Use the numbers to decide. Compare the feed cost per kg of gain or per litre with your selling price. Try a cheaper ingredient, such as more fodder legumes or local bran, but check it still meets the target and does not cut growth or milk. Work in your own currency, whether NGN, GHS or XOF: the method is the same. Prices change, so update the sheet every time you buy."
          ],
          steps: ["List each ingredient, its kg per 100 kg and its price per kg.", "Multiply kg by price for each ingredient and add them up.", "Add milling, transport and premix costs; divide by the total kg.", "Record feed eaten and weight gained, eggs or milk produced.", "Feed cost per kg of gain = FCR x cost per kg of feed.", "Feed cost per litre or tray = feed cost for the day or week / litres or trays."],
          words: [["Feed conversion ratio (FCR)", "kg of feed needed for 1 kg of weight gain; lower is better."], ["Cost per kg of gain", "the feed money spent for each kg the animal grows."], ["Tray", "a tray of 30 eggs, the usual unit for selling eggs."]],
          slides: [
            { title: "Step 1: cost per kg of mix", bullets: ["kg x price for each ingredient, then add", "Example: KES 5,285 per 100 kg = KES 52.85 per kg", "Add milling, transport and premix"] },
            { title: "Step 2: feed per kg of gain", bullets: ["900 kg feed / 300 kg gain = FCR of 3", "3 x KES 52.85 = KES 158.55 per kg of gain"] },
            { title: "Eggs and milk", bullets: ["Eggs: weekly feed cost / trays collected", "Milk: daily feed cost / litres that day"] },
            { title: "Use it to decide", bullets: ["Compare with your selling price", "Try cheaper local ingredients; check the target", "Update with every purchase; prices are examples"] }
          ],
          tryIt: "Final task: make a costed ration for one class of animal. Write the three-part plan, balance the concentrate with the Pearson square, list kg per 100 kg, cost it per kg with your local prices, and work out the feed cost per kg of gain, per tray of eggs or per litre of milk.",
          youCanNow: "cost a ration per kg and work out your feed cost per kg of gain, tray of eggs or litre of milk.",
          quickCheck: [
            { objective: "O6", q: "100 kg of mix costs XOF 20,000 in total. What is the cost per kg?", options: ["XOF 2,000", "XOF 20", "XOF 100", "XOF 200"], answer: 3, why: "20,000 / 100 kg = XOF 200 per kg." },
            { objective: "O6", q: "Broilers ate 400 kg of feed and gained 250 kg. What is the FCR?", options: ["1.6", "0.6", "2.5", "4.0"], answer: 0, why: "FCR = feed eaten / weight gained = 400 / 250 = 1.6." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Conserve, plan and cost your feed",
        questions: [
          { objective: "O4", q: "Why do farmers add molasses when making Napier grass silage?", options: ["Napier is low in sugar, and molasses helps it ferment", "To make it sweeter for children", "To keep rain out", "To replace the plastic cover"], answer: 0, why: "Low-sugar grasses ferment poorly; molasses gives the sugar fermentation needs." },
          { objective: "O4", q: "Which store keeps feed safest from mould?", options: ["Bags on the bare floor against a wall", "Bags outside under a tree", "Bags on pallets, away from walls, under a roof that does not leak", "Open heaps in the animal house"], answer: 2, why: "Keeping bags dry and off the floor and walls stops damp, mould and mycotoxins." },
          { objective: "O5", q: "What are the three parts of the feed plan in this course?", options: ["Morning, noon and night feeds", "Basal feed or forage, concentrate, and supplements", "Grass, water and salt only", "Starter, grower and finisher only"], answer: 1, why: "The plan is basal feed, concentrate and supplements, plus water, for each stage." },
          { objective: "O6", q: "Feed costs KES 50 per kg and the FCR is 3. What is the feed cost per kg of gain?", options: ["KES 53", "KES 17", "KES 300", "KES 150"], answer: 3, why: "Feed cost per kg of gain = FCR x price per kg = 3 x 50 = KES 150." },
          { objective: "O6", q: "A cow's feed costs NGN 3,000 a day and she gives 10 litres. What is the feed cost per litre?", options: ["NGN 30", "NGN 300", "NGN 3,000", "NGN 30,000"], answer: 1, why: "3,000 / 10 litres = NGN 300 per litre." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Livestock Nutrition and Feed Formulation with Local Ingredients",
    questions: [
      { objective: "O1", q: "What are the four main needs an animal gets from feed and water?", options: ["Energy, protein, minerals and vitamins, and water", "Grass, salt, sugar and oil", "Maize, beans, rice and milk", "Heat, light, air and soil"], answer: 0, why: "Energy, protein, minerals and vitamins, and water are the four needs." },
      { objective: "O1", q: "Which feed mainly supplies calcium for eggshells?", options: ["Maize bran", "Napier grass", "Limestone or shells", "Molasses"], answer: 2, why: "Limestone and crushed shells are calcium sources for laying hens." },
      { objective: "O1", q: "Which animals need roughage as the base of their diet?", options: ["Broilers", "Layers", "Weaner pigs", "Cattle, goats and sheep"], answer: 3, why: "Ruminants digest roughage; it is the base of their diet." },
      { objective: "O2", q: "About how much protein does maize grain have?", options: ["About 8 to 10 percent", "About 44 percent", "About 60 percent", "None"], answer: 0, why: "Feedipedia gives maize about 8 to 10.5 percent protein, so it is mainly an energy feed." },
      { objective: "O2", q: "Which of these is a protein feed?", options: ["Cassava chips", "Wheat bran", "Fish meal", "Maize stover"], answer: 2, why: "Fish meal is rich in protein; the others are mainly energy or roughage." },
      { objective: "O2", q: "Which is a benefit of icipe's push-pull system for a dairy farmer?", options: ["It replaces water", "Desmodium and Napier or Brachiaria give high-quality fodder", "It removes the need for minerals", "It makes cattle into ruminants"], answer: 1, why: "Push-pull protects maize and its companion plants are high-quality fodder." },
      { objective: "O2", q: "What should you check when buying fish meal?", options: ["That it is from a trusted source and not mixed with sand or salt", "That it is the cheapest", "That it is wet", "That it smells of mould"], answer: 0, why: "Fish meal quality varies and it can be adulterated, so buy from trusted sources." },
      { objective: "O3", q: "The Pearson square balances how many nutrients at a time?", options: ["All of them", "Three", "Two", "One"], answer: 3, why: "It balances one nutrient, usually protein, between two feeds." },
      { objective: "O3", q: "Maize (9 percent) and soybean cake (44 percent), target 18. How many parts of soybean cake?", options: ["26", "9", "35", "44"], answer: 1, why: "18 - 9 = 9 parts of soybean cake." },
      { objective: "O3", q: "Why can't you use maize (9 percent) and bran (10 percent) to reach 18 percent protein?", options: ["The target must be between the two feeds' values", "Bran is too cheap", "The square only works for cattle", "Maize has no protein"], answer: 0, why: "18 is above both feeds, so no mix of them can reach it." },
      { objective: "O3", q: "After the square, how do you check your mix?", options: ["Ask a neighbour", "Smell it", "kg x protein percent for each feed should add up to the target", "Weigh the animals the same day"], answer: 2, why: "Adding the protein from each ingredient confirms the mix hits the target." },
      { objective: "O4", q: "What are the four silage steps FAO teaches?", options: ["Cut, wash, dry, burn", "Chop, fill quickly, compact, seal", "Plant, water, weed, sell", "Soak, boil, cool, bag"], answer: 1, why: "Chopping, quick filling, compacting and sealing make good silage." },
      { objective: "O4", q: "What is a mycotoxin?", options: ["A vitamin in feed", "A type of grass", "A protein supplement", "An invisible poison made by moulds on feed"], answer: 3, why: "Moulds can make mycotoxins such as aflatoxin, which harm animals and can pass into milk." },
      { objective: "O4", q: "Which rule helps keep stored feed safe?", options: ["Use the oldest feed first", "Store bags on the floor by the wall", "Keep feed in the animal house", "Mix mouldy feed with fresh feed"], answer: 0, why: "First in, first out stops feed sitting until it spoils." },
      { objective: "O5", q: "Why feed by stage?", options: ["It makes animals eat more", "Each stage has different needs, so you do not pay for nutrients they do not need", "Feed companies require it", "It removes the need for water"], answer: 1, why: "Matching feed to stage meets needs and saves money." },
      { objective: "O5", q: "How should you change from one feed to the next?", options: ["Overnight", "Only when animals are sick", "Over a few days", "Never change feed"], answer: 2, why: "Gradual changes avoid upsetting the animal's digestion and intake." },
      { objective: "O5", q: "For pigs and poultry, what is the basal part of the diet?", options: ["Napier grass", "Salt", "Fish meal", "Energy grains and brans in the mash"], answer: 3, why: "Pigs and poultry cannot digest much roughage, so grains and brans are their base." },
      { objective: "O6", q: "What does a feed conversion ratio of 2 mean?", options: ["2 kg of feed for each 1 kg of weight gain", "2 meals a day", "2 animals per feeder", "2 percent protein"], answer: 0, why: "FCR is kg of feed needed for 1 kg of gain." },
      { objective: "O6", q: "50 kg of maize at GHS 4 and 50 kg of bran at GHS 2. Cost per kg of the mix?", options: ["GHS 6", "GHS 3", "GHS 300", "GHS 2"], answer: 1, why: "(50 x 4) + (50 x 2) = 300 for 100 kg, so GHS 3 per kg." },
      { objective: "O6", q: "A layer flock eats feed costing KES 7,000 a week and you collect 70 trays. What is the feed cost per tray?", options: ["KES 10", "KES 70", "KES 100", "KES 490"], answer: 2, why: "7,000 / 70 trays = KES 100 of feed per tray." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 2, 4, 7, 8, 12, 14, 17, 18] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part of the ration and check it again.",
    criteria: [
      { name: "Class, stage and three-part plan", objective: "O5", notYet: "No class or stage named, or one of basal feed, concentrate and supplements is missing.", meets: "Names the class and stage and gives the basal feed, concentrate, supplements and water.", exceeds: "Also shows the next stage and when and how to change feed." },
      { name: "Ingredients sorted and suitable", objective: "O2", notYet: "Ingredients are wrongly sorted or unsafe (for example mouldy, or cotton seed cake with no limit for poultry).", meets: "Uses local ingredients correctly sorted into energy, protein, roughage and supplements.", exceeds: "Uses a cheaper local legume or bran and explains how it keeps the target." },
      { name: "Pearson square", objective: "O3", notYet: "No working shown, or the target is not between the two feeds.", meets: "Square drawn, parts and kg per 100 kg correct, and the check adds up to the target within 0.5 points.", exceeds: "Sets aside fixed items such as premix first and balances the rest." },
      { name: "Costing", objective: "O6", notYet: "Cost per kg is missing or the arithmetic is wrong.", meets: "Correct cost per kg of mix and feed cost per kg of gain, tray of eggs or litre of milk, in local currency.", exceeds: "Compares it with the selling price and shows one way to cut the cost." },
      { name: "Feed quality and storage", objective: "O4", notYet: "Says nothing about where feed is kept or how mould is avoided.", meets: "States where feed is stored and how it is kept dry and mould-free, oldest first.", exceeds: "Includes a silage or hay plan for the dry season." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who mix or adjust at least one ration with the Pearson square within 30 days (follow-up survey)",
      "Learners who make silage or hay before the next dry season",
      "Change in feed cost per kg of gain, per tray of eggs or per litre of milk reported by learners after three months",
      "Fewer reports of mouldy feed and feed-related sickness in learners' herds and flocks"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Paper, pen and a phone calculator; a phone spreadsheet is optional",
      "Local prices for 8 to 10 feeds, and labels or supplier values for their protein",
      "For a group demonstration: chopped fodder, a strong plastic bag or tube, and a scale",
      "About 70 to 80 minutes in total, in short sessions: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Before the session, collect local feed prices and protein values (supplier labels, feed lab or extension office) so learners practise with real numbers.",
      "Do the Pearson square together on a board or flip chart with one local example, then let pairs do a second one.",
      "Run a bag-silage demonstration if the season allows, and open it with the group a few weeks later.",
      "Do not give medicated feed, additive or drug doses; send those questions to the vet and the label.",
      "Score the costed ration with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
