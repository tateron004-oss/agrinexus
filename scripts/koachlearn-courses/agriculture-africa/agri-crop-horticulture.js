"use strict";

// Koach Learn course: Agriculture (Africa) -> "Sustainable Crop and Horticultural Production".
// For smallholder and young farmers and extension officers: soil health and testing, planting well, feeding crops, integrated pest management with safe pesticide use,
// water and irrigation for vegetables, and harvest and post-harvest handling. Examples: maize, beans, cassava, sorghum, tomatoes, kale (sukuma wiki), onions.
// No product or dose recommendations: students are sent to extension, the label, and the national pesticide regulator.

const FAO_IPM = { name: "FAO: Integrated Pest Management", url: "https://www.fao.org/pest-and-pesticide-management/ipm/integrated-pest-management/en/" };
const FAO_FAMEWS = { name: "FAO: mobile application to support the fight against Fall Armyworm in Africa (FAMEWS)", url: "https://www.fao.org/newsroom/detail/FAO-launches-mobile-application-to-support-fight-against-Fall-Armyworm-in-Africa/en" };
const ICIPE_PUSHPULL = { name: "icipe: Push-pull technology halts fall armyworm", url: "https://www.icipe.org/news/icipe-push-pull-technology-halts-fall-armyworm-rampage" };
const PCPB = { name: "Pest Control Products Board (Kenya)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "National Agency for Food and Drug Administration and Control (NAFDAC, Nigeria)", url: "https://www.nafdac.gov.ng" };
const KALRO = { name: "Kenya Agricultural and Livestock Research Organization (KALRO)", url: "https://www.kalro.org" };
const FAO_CSA = { name: "FAO: Climate-Smart Agriculture Sourcebook (soil and water management)", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };

module.exports = {
  id: "agri-crop-horticulture",
  category: "Agriculture (Africa)",
  name: "Sustainable Crop and Horticultural Production",
  skills: "Checking and improving soil health, Planting with good seed, spacing and timing, Feeding crops with manure, compost and fertilizer, Scouting and integrated pest management, Using pesticides safely and legally, Irrigating vegetables and handling the harvest",
  outcome: "plan and run a season for a field crop and a vegetable plot: prepare and feed the soil, plant well, scout and manage pests with integrated pest management, water efficiently, and harvest and handle produce so it keeps its value.",
  about: [
    "This course is for smallholder farmers, young people starting in horticulture, women's and youth groups, and extension officers in Kenya, Nigeria and across Africa. The examples are maize, beans, cassava and sorghum in the field, and tomatoes, kale (sukuma wiki) and onions in the vegetable plot.",
    "Chapter 1 is about growing a strong crop: understanding and testing your soil, planting with good seed at the right spacing and time, and feeding the crop with a mix of manure, compost and fertilizer. Chapter 2 is about protecting and finishing the crop: scouting and integrated pest management, safe and legal pesticide use, efficient watering for vegetables, and harvest and post-harvest handling.",
    "Crops, soils and pests differ by area. Use this course with your extension officer, research institute (such as KALRO in Kenya, or your state's agricultural development program in Nigeria) and agrovet. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Write a season production plan for one field crop (for example half an acre of maize and beans) and one vegetable plot (for example an eighth of an acre of tomatoes or kale): soil checks and any soil test, how you will prepare and feed the soil, seed and spacing, planting dates, a weekly scouting routine with the main pests and diseases to watch for and your IPM steps, a watering plan for the vegetables, and how you will harvest, sort, store and sell.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Smallholder farmers, young people starting in horticulture, women's and youth groups, and extension officers in Kenya, Nigeria and across Africa, growing field crops such as maize, beans, cassava and sorghum and vegetables such as tomatoes, kale and onions.",
    startingPoint: "Most already plant and harvest every season, often with saved or uncertified seed, scattered fertilizer and pesticides bought loose. Few have taken a soil test, scouted on a set routine, read a full pesticide label or planned watering and post-harvest handling.",
    gap: "Poor soil, crowded or late planting, badly placed fertilizer, spraying without need and post-harvest losses cut yields and income, and unsafe pesticide use harms families and buyers. A written season plan built on good practice helps farmers grow more, spend less on inputs and sell produce that keeps its value.",
    constraints: [
      "Reading level: plain words and short sentences; every farming term is explained",
      "Devices: a basic phone and a notebook; most practice happens in the field",
      "Time: short lessons that fit around farm work and the season",
      "Soils, varieties, rates and registered products differ by area: learners get rates and products from a soil test, extension or the label",
      "Pesticide safety: no spraying practice in class; learners follow the label and their country's rules"
    ],
    prerequisites: "None. \"Soil Health and Fertility\" goes deeper on soil, and \"Integrated Pest Management and Organic Pest Control\" goes deeper on pests."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "On one of your own plots", action: "check the soil's health in the field and describe how to take a good sample for a soil test", standard: "naming at least three signs of healthy or poor soil" },
    { id: "O2", condition: "For one field crop and one vegetable", action: "choose certified seed or clean planting material, the spacing and the planting or transplanting date", standard: "with each choice taken from a dealer, extension or the seed packet" },
    { id: "O3", condition: "For your main field crop", action: "write a feeding plan that combines organic matter, legumes and well-placed fertilizer", standard: "with rates marked as coming from a soil test or extension" },
    { id: "O4", condition: "Given a crop with pests or disease", action: "scout it on a weekly routine, choose IPM actions and use a registered pesticide only by its label when justified", standard: "starting with prevention and non-chemical controls" },
    { id: "O5", condition: "For a small vegetable plot", action: "plan efficient watering with drip or cans, mulch and the right time of day", standard: "checking soil moisture before each watering" },
    { id: "O6", condition: "At harvest", action: "plan how to harvest, sort, dry and store produce to cut losses", standard: "with the right maturity, gentle handling and safe storage for each crop" }
  ],
  chapters: [
    {
      name: "Chapter 1: Growing a strong crop",
      lessons: [
        {
          objectives: ["O1"],
          title: "Know your soil",
          minutes: 5,
          goal: "Check your soil's health in the field and know when and how to get a soil test.",
          text: [
            "Healthy soil is dark, crumbly, smells earthy, has earthworms and roots that go deep, and soaks up rain instead of letting it run off. Poor soil is hard, pale, crusts after rain, or stays waterlogged. Do a simple field check: dig a hole a spade deep, look at the colour and layers, squeeze a handful, count worms, and watch where water runs or stands after rain.",
            "A soil test tells you what your eyes cannot: acidity (pH) and the main nutrients. Many soils in high-rainfall parts of Kenya and Nigeria are acidic, which locks up nutrients; liming may be advised. Ask your extension officer, research institute or agrovet where to get a soil test and how to take a good sample: many small samples from across the plot, mixed together, not from manure heaps or burned spots.",
            "Build soil health every season: add organic matter (manure, compost, crop residues), keep the soil covered, rotate crops, and avoid burning and needless ploughing."
          ],
          steps: ["Dig a spade-deep hole and look at colour, layers and roots.", "Squeeze a handful; count earthworms.", "Watch where water runs off or stands.", "Ask extension or an agrovet where to get a soil test.", "Take many small samples across the plot and mix them."],
          words: [["Soil health", "the ability of soil to grow strong plants, hold water and support life."], ["pH", "a measure of how acidic or alkaline the soil is; many crops prefer slightly acidic to neutral soil."], ["Organic matter", "decayed plant and animal material in soil, such as manure and compost."], ["Liming", "adding lime to reduce soil acidity."]],
          slides: [
            { title: "Healthy soil", bullets: ["Dark, crumbly, earthy smell", "Earthworms, deep roots", "Soaks up rain"] },
            { title: "Field check", bullets: ["Spade-deep hole: colour, layers, roots", "Squeeze, count worms", "Where water runs or stands"] },
            { title: "Soil test", bullets: ["Shows pH and nutrients", "Acid soils may need lime", "Many small samples, mixed"] },
            { title: "Build it every season", bullets: ["Manure, compost, residues", "Keep covered, rotate", "No burning"] }
          ],
          sources: [KALRO, FAO_CSA],
          tryIt: "Do the field check on one plot: dig, look, squeeze, count worms, and write what you found. Then find out where you can get a soil test near you and what it costs.",
          youCanNow: "check your soil's health in the field and know how to take a sample for a soil test.",
          quickCheck: [
            { objective: "O1", q: "After rain, water stands on your plot for days and the soil is pale and hard. What does this show?", options: ["Very healthy soil", "Soil that needs care, such as more organic matter", "Soil that needs no change", "Soil with too many earthworms"], answer: 1, why: "Healthy soil is dark and crumbly and soaks up rain; standing water and hard, pale soil are signs of poor soil." },
            { objective: "O1", q: "You are taking a soil sample. Where do you dig?", options: ["Only next to the manure heap", "Only where you burned residues", "One spot in the middle of the plot", "Many small spots across the plot, mixed together"], answer: 3, why: "Many small samples mixed together show the whole plot; manure heaps and burned spots give wrong results." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Planting right: seed, spacing and timing",
          minutes: 5,
          goal: "Plant a field crop and raise vegetable seedlings with good seed, spacing and timing.",
          text: [
            "Good seed is the cheapest way to raise yield. Buy certified seed of a variety suited to your area from a registered dealer, and check the packet date and seal. For cassava, use clean cuttings from healthy plants, because virus diseases spread through infected cuttings.",
            "Spacing decides how many plants share the light, water and nutrients. Use the spacing recommended for your variety and area, for example rows and plant distances for maize, and wider spacing in drier areas. Gaps and crowding both lose yield. Plant promptly once the rains have truly started and the soil is moist deep down.",
            "Vegetables such as tomatoes, kale and onions are usually raised in a nursery first: a raised, well-drained bed or seedling trays, with clean soil, shade at first, careful watering and protection from pests. Harden seedlings by slowly giving more sun and less water before transplanting them, ideally in the cool evening."
          ],
          steps: ["Buy certified seed (or clean cuttings) of a suitable variety.", "Use the recommended spacing for your variety and area.", "Plant when rains have truly started and soil is moist.", "Raise vegetable seedlings in a clean, well-drained nursery.", "Harden seedlings, then transplant in the cool evening."],
          words: [["Certified seed", "seed checked by the official seed authority for quality and variety."], ["Spacing", "the distance between rows and between plants."], ["Nursery", "a small, protected area where seedlings are raised before transplanting."], ["Hardening", "slowly getting seedlings used to field conditions before transplanting."]],
          slides: [
            { title: "Good seed", bullets: ["Certified, suited to your area", "Registered dealer; check date and seal", "Cassava: clean cuttings from healthy plants"] },
            { title: "Spacing and timing", bullets: ["Recommended spacing for your variety", "Gaps and crowding both lose yield", "Plant once rains truly start"] },
            { title: "Vegetable nursery", bullets: ["Raised, well-drained, clean soil", "Shade at first, careful watering", "Harden, then transplant in the evening"] }
          ],
          sources: [KALRO],
          tryIt: "For your main field crop and one vegetable, write: the variety, where you will buy certified seed, the recommended spacing (ask an agrovet or extension officer), and your planned planting or transplanting date.",
          youCanNow: "plant a field crop and raise vegetable seedlings with good seed, spacing and timing.",
          quickCheck: [
            { objective: "O2", q: "Why should cassava be planted from clean cuttings of healthy plants?", options: ["Virus diseases spread through infected cuttings", "Clean cuttings grow without water", "Healthy plants need no spacing", "Cuttings from sick plants cost more"], answer: 0, why: "Cassava virus diseases spread through infected cuttings, so clean cuttings from healthy plants protect the new crop." },
            { objective: "O2", q: "Your tomato seedlings are ready in the nursery. What do you do before transplanting?", options: ["Water them twice as much", "Move them straight into full sun at noon", "Harden them with more sun and less water, then transplant in the cool evening", "Cut off all their leaves"], answer: 2, why: "Hardening prepares seedlings for the field, and the cool evening reduces transplant shock." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Feeding the crop: manure, compost and fertilizer",
          minutes: 6,
          goal: "Plan how to feed a crop with organic and mineral nutrients, placed and timed well.",
          text: [
            "Crops need nitrogen (N), phosphorus (P) and potassium (K), plus smaller amounts of other nutrients. Manure and compost add some nutrients and, just as importantly, organic matter that holds water and feeds soil life. Legumes such as beans, cowpea and groundnut add nitrogen to the soil through their roots.",
            "Mineral fertilizers give nutrients quickly and in known amounts. A common pattern for maize is a planting fertilizer with phosphorus, then a nitrogen topdressing when the crop is knee-high, but the right products and rates depend on your soil test and local recommendations. Placing small amounts close to the plant (in the planting hole) uses fertilizer better than scattering it widely.",
            "Combine both: organic matter plus well-placed fertilizer usually gives better and steadier yields than either alone. Make compost from crop residues, manure and kitchen waste, turned and kept moist. Never put fresh, hot manure or fertilizer directly on seed."
          ],
          steps: ["Add manure or compost before or at planting.", "Include legumes in rotation or intercrop.", "Use fertilizer products and rates from your soil test and local recommendations.", "Place fertilizer near the plant, not touching seed.", "Topdress nitrogen at the right stage, when the soil is moist."],
          words: [["N, P, K", "nitrogen, phosphorus and potassium: the main plant nutrients."], ["Topdressing", "adding fertilizer, usually nitrogen, to a growing crop."], ["Compost", "decomposed plant and animal waste used to feed soil."]],
          slides: [
            { title: "What crops need", bullets: ["Nitrogen, phosphorus, potassium", "Plus smaller nutrients", "Legumes add nitrogen"] },
            { title: "Organic matter", bullets: ["Manure and compost", "Hold water, feed soil life"] },
            { title: "Fertilizer well used", bullets: ["Products and rates from soil test and local advice", "Place near the plant, not on seed", "Topdress nitrogen at the right stage"] },
            { title: "Combine both", bullets: ["Organic + mineral = steadier yields", "Make compost from residues and manure"] }
          ],
          sources: [FAO_CSA, KALRO],
          tryIt: "Write a feeding plan for your field crop: what organic matter you will add and when, any legume, and the fertilizer products and timing (marked \"rate from soil test or extension\" if you do not know it yet). Start a compost heap if you do not have one.",
          youCanNow: "plan how to feed a crop with manure, compost and well-placed fertilizer.",
          quickCheck: [
            { objective: "O3", q: "What do manure and compost add besides nutrients?", options: ["Pesticide", "Organic matter that holds water and feeds soil life", "Certified seed", "Lime"], answer: 1, why: "Organic matter holds water and feeds soil life, which is as important as the nutrients." },
            { objective: "O3", q: "You have fertilizer for planting maize. Where do you put it?", options: ["In a small amount near the plant, not touching the seed", "Scattered widely across the whole field", "Directly on the seed", "In a heap at the field edge"], answer: 0, why: "Placing small amounts near the plant uses fertilizer better, and fertilizer on seed can damage it." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Growing a strong crop",
        questions: [
          { objective: "O1", q: "Which is a sign of healthy soil?", options: ["Hard and pale, crusts after rain", "Dark, crumbly, with earthworms", "Water always runs off", "Smells of chemicals"], answer: 1, why: "Healthy soil is crumbly, dark and full of life." },
          { objective: "O1", q: "How should you take a soil sample?", options: ["One spoon from a manure heap", "From a burned spot", "Many small samples across the plot, mixed together", "From the road"], answer: 2, why: "A mixed sample represents the whole plot." },
          { objective: "O2", q: "Why use clean cassava cuttings?", options: ["Virus diseases spread through infected cuttings", "They are cheaper", "They grow faster in any soil", "Buyers ask for them"], answer: 0, why: "Clean planting material stops diseases spreading." },
          { objective: "O2", q: "What is hardening of seedlings?", options: ["Watering more", "Adding fertilizer", "Planting in hard soil", "Slowly giving more sun and less water before transplanting"], answer: 3, why: "It prepares seedlings for field conditions." },
          { objective: "O3", q: "Where do the right fertilizer rates come from?", options: ["A neighbour's guess", "Your soil test and local recommendations", "The bag's colour", "Using as much as possible"], answer: 1, why: "Soil and area decide what the crop needs." }
        ]
      }
    },
    {
      name: "Chapter 2: Protecting and finishing the crop",
      lessons: [
        {
          objectives: ["O4"],
          title: "Scouting and integrated pest management",
          minutes: 6,
          goal: "Scout a crop weekly and choose IPM actions before reaching for chemicals.",
          text: [
            "FAO describes integrated pest management (IPM) as considering all available pest control methods and combining the right ones, keeping pesticide use to what is justified. It starts with prevention: healthy soil, resistant varieties, clean seed, rotation, timely planting, field hygiene (removing infected plants and residues) and encouraging natural enemies such as ladybirds and parasitic wasps.",
            "Scout every week. Walk a W or zigzag pattern through the field, check a set number of plants (for example 10 plants at 5 spots), and record what you see: fall armyworm damage in maize funnels, aphids, whiteflies, leaf spots, wilting, tomato leaf miner. Compare with what extension advises as the level where action is worth it.",
            "Use non-chemical controls first where they work: hand-picking, push-pull for maize and sorghum, traps, neem-based or biological products approved for use, and removing infected plants. Fall armyworm sightings can be recorded with FAO's FAMEWS app where it is used. Get a diagnosis from an extension officer or plant clinic when you are unsure."
          ],
          steps: ["Prevent: resistant varieties, clean seed, rotation, field hygiene.", "Scout weekly in a W pattern; check a set number of plants.", "Record pests, diseases and damage.", "Compare with extension's action levels.", "Use non-chemical controls first; get a diagnosis when unsure."],
          words: [["IPM", "integrated pest management: combining prevention, monitoring and many control methods, with pesticides only when justified."], ["Scouting", "walking the field regularly to check for pests and diseases."], ["Natural enemies", "insects and other creatures that eat or attack pests."], ["Action level", "the amount of pest or damage at which control is worth the cost."]],
          slides: [
            { title: "IPM (FAO)", bullets: ["Consider all methods, combine the right ones", "Pesticides only when justified"] },
            { title: "Prevent first", bullets: ["Resistant varieties, clean seed, rotation", "Field hygiene", "Encourage natural enemies"] },
            { title: "Scout weekly", bullets: ["W pattern, set number of plants", "Record what you see", "Compare with action levels"] },
            { title: "Control wisely", bullets: ["Hand-picking, push-pull, traps", "Approved biological products", "Diagnosis when unsure"] }
          ],
          sources: [FAO_IPM, ICIPE_PUSHPULL, FAO_FAMEWS],
          tryIt: "Make a weekly scouting sheet (date, spot, plants checked, pests, diseases, damage, action) and scout one field or vegetable bed this week.",
          youCanNow: "scout a crop weekly and choose IPM actions starting with prevention and non-chemical controls.",
          quickCheck: [
            { objective: "O4", q: "Which is a prevention step in IPM?", options: ["Spraying every week just in case", "Buying a stronger pesticide", "Mixing two pesticides together", "Using resistant varieties and removing infected plants"], answer: 3, why: "IPM starts with prevention: resistant varieties, clean seed, rotation and field hygiene." },
            { objective: "O4", q: "You find a few fall armyworm in your maize. What do you do first?", options: ["Spray the whole farm today", "Record it and compare with the action level from extension", "Ignore it until harvest", "Burn the field"], answer: 1, why: "Scouting records are compared with the action level to decide whether control is worth it." }
          ]
        },
        {
          objectives: ["O4","O5"],
          title: "Safe, legal pesticide use and watering vegetables",
          minutes: 6,
          goal: "Use a pesticide safely when it is justified, and plan efficient watering for a vegetable plot.",
          text: [
            "If a pesticide is needed, use only products registered for that crop and pest in your country (in Kenya by the Pest Control Products Board; in Nigeria by NAFDAC), bought from a licensed dealer, never repacked in unlabelled bottles. Read the label and follow it exactly: rate, mixing, protective clothing, re-entry time and the pre-harvest interval, the number of days between spraying and harvest. Keep children and animals away, never eat or smoke while spraying, and dispose of containers safely, not as water or food containers.",
            "Vegetables are thirsty and sensitive. Drip irrigation puts water at the roots, saves water and keeps leaves dry, which reduces disease in tomatoes. Low-cost drip kits and watering cans work for small plots. Water in the early morning or evening, and water deeply and less often rather than a little every day.",
            "Mulch around vegetables to keep moisture in and soil off the leaves. Check soil moisture with your finger a few centimetres down before watering. Where water is scarce, collect rainwater from roofs and use water pans."
          ],
          steps: ["Use only registered products for that crop and pest, from licensed dealers.", "Read and follow the label: rate, protective clothing, re-entry, pre-harvest interval.", "Dispose of containers safely.", "Water vegetables at the roots (drip or can), morning or evening.", "Mulch and check soil moisture before watering."],
          words: [["Pre-harvest interval (PHI)", "the number of days you must wait after spraying before harvesting."], ["Registered pesticide", "a product approved by the national regulator for a stated use."], ["Drip irrigation", "watering through pipes with small holes that drip water at the roots."]],
          slides: [
            { title: "Registered products only", bullets: ["Kenya: PCPB. Nigeria: NAFDAC", "Licensed dealer, original labelled pack", "For that crop and pest"] },
            { title: "Follow the label", bullets: ["Rate and mixing, protective clothing", "Re-entry time", "Pre-harvest interval before picking"] },
            { title: "Safety", bullets: ["No children or animals nearby", "No eating or smoking while spraying", "Never reuse containers for food or water"] },
            { title: "Water vegetables well", bullets: ["Drip or can at the roots", "Morning or evening, deep and less often", "Mulch; check moisture first"] }
          ],
          sources: [PCPB, NAFDAC, FAO_IPM],
          tryIt: "Take any pesticide label (from a shop, the internet or your store). Write down: the crops and pests it is registered for, the rate, the protective clothing, and the pre-harvest interval. Then write a watering plan for your vegetable plot.",
          youCanNow: "use a pesticide safely and legally when justified, and water vegetables efficiently.",
          quickCheck: [
            { objective: "O4", q: "What is the pre-harvest interval on a pesticide label?", options: ["The time to mix the spray", "The days before planting", "The days to wait between spraying and harvest", "The shelf life of the bottle"], answer: 2, why: "The pre-harvest interval is the number of days between the last spray and harvest." },
            { objective: "O5", q: "Your kale plot is dry and you have a watering can. When do you water?", options: ["At midday, a little every hour", "Early morning or evening, after checking soil moisture", "Only after the leaves have wilted for a week", "Never; wait for rain"], answer: 1, why: "Watering in the early morning or evening, deeply and only when the soil is dry, saves water and suits vegetables." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Harvest and post-harvest handling",
          minutes: 5,
          goal: "Harvest at the right time and handle, sort and store produce so it keeps its value.",
          text: [
            "Much food is lost after harvest. Harvest at the right maturity: tomatoes at the stage your buyer wants (often turning colour for distant markets), kale leaves young and tender, maize when the grain is mature and dry enough, cassava when roots are ready and only as much as you can sell or process quickly, because roots spoil within days.",
            "Handle gently: use clean crates, not sacks, for tomatoes and soft produce; keep produce in the shade; and harvest in the cool morning. Sort and grade by size and quality, and remove damaged items so they do not spoil the rest. Respect the pre-harvest interval after any spraying.",
            "Dry grain well before storage: damp maize and groundnuts can grow moulds that produce aflatoxin, a poison. Ask your buyer or extension officer for the target moisture and test it if you can. Store grain in clean, dry, raised stores or hermetic (airtight) storage bags to control weevils without chemicals."
          ],
          steps: ["Harvest at the right maturity for your buyer.", "Harvest in the cool morning; keep produce in shade.", "Use clean crates for soft produce.", "Sort and grade; remove damaged items.", "Dry grain well; store in clean, dry, raised stores or hermetic bags."],
          words: [["Post-harvest loss", "food lost or spoiled between harvest and sale or use."], ["Grading", "sorting produce by size and quality."], ["Aflatoxin", "a poison made by moulds on damp grain and nuts."], ["Hermetic bag", "an airtight storage bag that stops insects by cutting off air."]],
          slides: [
            { title: "Harvest at the right time", bullets: ["Tomatoes at the stage your buyer wants", "Kale young and tender", "Cassava only what you can sell fast"] },
            { title: "Handle gently", bullets: ["Cool morning, shade", "Clean crates, not sacks", "Sort, grade, remove damaged"] },
            { title: "Store grain safely", bullets: ["Dry well: damp grain risks aflatoxin", "Clean, dry, raised stores", "Hermetic bags against weevils"] }
          ],
          sources: [FAO_IPM],
          tryIt: "Final task: write your season production plan for a field crop and a vegetable plot: soil checks and test, soil preparation and feeding, seed and spacing, planting dates, weekly scouting and IPM steps, vegetable watering, and harvest, sorting, storage and sale.",
          youCanNow: "harvest, handle, sort and store produce to cut losses and keep its value.",
          quickCheck: [
            { objective: "O6", q: "What is aflatoxin?", options: ["A fertilizer", "A storage bag", "A type of weevil", "A poison from moulds on damp grain"], answer: 3, why: "Damp maize and groundnuts can grow moulds that produce aflatoxin, a poison." },
            { objective: "O6", q: "You are harvesting tomatoes to sell. How do you carry them?", options: ["In clean crates, kept in the shade", "In sacks in the sun", "Piled loose in the cart", "In a bag with the damaged ones"], answer: 0, why: "Clean crates and shade protect soft produce; sacks and sun bruise and spoil it." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Protecting and finishing the crop",
        questions: [
          { objective: "O4", q: "In IPM, pesticides are used:", options: ["Every week whatever happens", "Never under any condition", "Only when justified, after other methods are considered", "Only on vegetables"], answer: 2, why: "FAO's IPM keeps pesticide use to what is justified." },
          { objective: "O4", q: "How should you scout a field?", options: ["Look only at the edge", "Walk a W pattern and check a set number of plants", "Look from the house", "Only after harvest"], answer: 1, why: "A W pattern samples the whole field fairly." },
          { objective: "O4", q: "The pre-harvest interval is:", options: ["The days to wait between spraying and harvest", "The time to plant", "The price of the pesticide", "The size of the sprayer"], answer: 0, why: "It keeps residues on food at safe levels." },
          { objective: "O5", q: "Why use drip irrigation for tomatoes?", options: ["It wets the leaves", "It uses more water", "It is required by law", "It puts water at the roots and keeps leaves dry, reducing disease"], answer: 3, why: "Dry leaves mean less disease and less water wasted." },
          { objective: "O6", q: "Why dry maize well before storage?", options: ["To make it heavier", "Damp grain can grow moulds that produce aflatoxin", "Buyers prefer wet grain", "To change its colour"], answer: 1, why: "Aflatoxin is a dangerous poison from moulds on damp grain." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Sustainable Crop and Horticultural Production",
    questions: [
      { objective: "O1", q: "A soil test tells you:", options: ["The weather", "pH and nutrient levels", "Crop prices", "Pest names"], answer: 1, why: "Soil tests measure acidity and nutrients." },
      { objective: "O1", q: "Acidic soils may need:", options: ["More burning", "Salt", "Lime, if a soil test advises it", "Nothing ever"], answer: 2, why: "Liming reduces acidity and frees nutrients." },
      { objective: "O1", q: "Which builds soil health?", options: ["Adding manure and compost and keeping soil covered", "Burning residues", "Ploughing many times", "Leaving soil bare"], answer: 0, why: "Organic matter and cover feed and protect soil." },
      { objective: "O2", q: "Certified seed is:", options: ["Any grain from the market", "Seed with no packet", "Seed saved for ten years", "Seed checked by the official seed authority"], answer: 3, why: "Certification checks variety and quality." },
      { objective: "O2", q: "Crowded plants usually:", options: ["Yield more", "Compete for light, water and nutrients and lose yield", "Need no fertilizer", "Resist all pests"], answer: 1, why: "Right spacing balances plant numbers and resources." },
      { objective: "O2", q: "When should seedlings be transplanted?", options: ["At midday in full sun", "During a storm", "After hardening, ideally in the cool evening", "Before they have leaves"], answer: 2, why: "Cool conditions reduce transplant shock." },
      { objective: "O3", q: "Which crops add nitrogen to the soil?", options: ["Beans, cowpea and groundnut", "Maize only", "Tomatoes", "Onions"], answer: 0, why: "Legumes fix nitrogen through their roots." },
      { objective: "O3", q: "Topdressing maize usually means adding:", options: ["Lime at planting", "Seed", "Water only", "Nitrogen to the growing crop"], answer: 3, why: "Nitrogen topdressing supports growth at the right stage." },
      { objective: "O3", q: "Fertilizer should be placed:", options: ["Directly on the seed", "Near the plant, not touching seed", "On the road", "Only on leaves"], answer: 1, why: "Placement near roots uses it well without burning seed." },
      { objective: "O4", q: "Natural enemies are:", options: ["Weeds", "Pesticides", "Insects that eat or attack pests", "Thieves"], answer: 2, why: "Ladybirds and parasitic wasps help control pests." },
      { objective: "O4", q: "An action level is:", options: ["The pest amount at which control is worth the cost", "A type of sprayer", "Harvest time", "A soil test result"], answer: 0, why: "It helps avoid unnecessary spraying." },
      { objective: "O4", q: "Push-pull is used mainly in:", options: ["Tomatoes", "Kale", "Onions", "Maize and sorghum"], answer: 3, why: "icipe developed it for cereal pests like stemborer and fall armyworm." },
      { objective: "O4", q: "In Kenya, pesticides are registered by:", options: ["KCAA", "The Pest Control Products Board (PCPB)", "KMD", "ODPC"], answer: 1, why: "PCPB regulates pest control products in Kenya." },
      { objective: "O4", q: "A pesticide sold in an unlabelled, repacked bottle:", options: ["Is a bargain", "Is fine if cheap", "Should not be bought or used", "Is safer"], answer: 2, why: "Without a label you cannot know the product or use it safely." },
      { objective: "O4", q: "Empty pesticide containers should be:", options: ["Disposed of safely, never reused for food or water", "Used to store drinking water", "Given to children", "Thrown in the river"], answer: 0, why: "Residues can poison people and water." },
      { objective: "O5", q: "The best time to water vegetables is:", options: ["Midday", "Only at night in rain", "Never", "Early morning or evening"], answer: 3, why: "Less water is lost to heat and evaporation." },
      { objective: "O5", q: "Mulch around vegetables:", options: ["Dries the soil", "Keeps moisture in and soil off the leaves", "Attracts all pests", "Replaces water completely"], answer: 1, why: "Mulch saves water and reduces disease splash." },
      { objective: "O6", q: "Soft produce like tomatoes should be carried in:", options: ["Tight sacks", "Open hands only", "Clean crates", "Plastic bags in the sun"], answer: 2, why: "Crates protect soft produce from crushing." },
      { objective: "O6", q: "Why harvest only as much cassava as you can sell or process quickly?", options: ["Roots spoil within days after harvest", "Buyers dislike cassava", "Cassava grows back overnight", "It is the law"], answer: 0, why: "Fresh cassava roots deteriorate fast." },
      { objective: "O6", q: "Hermetic storage bags control weevils by:", options: ["Adding poison", "Making noise", "Letting in light", "Cutting off air"], answer: 3, why: "Airtight bags starve insects of oxygen." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      3,
      6,
      8,
      9,
      12,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part of the plan and check it again.",
    criteria: [
      {
        name: "Soil checks",
        objective: "O1",
        notYet: "No soil check or soil test is mentioned.",
        meets: "Field check results are written down, with where and how a soil test sample would be taken.",
        exceeds: "Uses soil test results, or a date to get one, to shape the plan."
      },
      {
        name: "Seed, spacing and dates",
        objective: "O2",
        notYet: "Seed source, spacing or planting dates are missing.",
        meets: "Certified seed or clean material, recommended spacing and planting dates for both crops, with the source of each.",
        exceeds: "Includes the nursery and hardening plan for the vegetable."
      },
      {
        name: "Feeding the soil",
        objective: "O3",
        notYet: "Only fertilizer is listed, or rates are guessed.",
        meets: "Organic matter, any legume and fertilizer timing and placement, with rates from a soil test or extension.",
        exceeds: "Includes a compost plan and a rotation for next season."
      },
      {
        name: "Scouting and IPM",
        objective: "O4",
        notYet: "Plans to spray on a schedule with no scouting.",
        meets: "A weekly scouting routine, the main pests to watch, prevention and non-chemical steps, and label rules for any pesticide.",
        exceeds: "Names where to get a diagnosis and the action level for one main pest."
      },
      {
        name: "Watering",
        objective: "O5",
        notYet: "No watering plan for the vegetables.",
        meets: "Watering method, time of day, mulch and a soil-moisture check.",
        exceeds: "Includes a way to collect or save water."
      },
      {
        name: "Harvest and storage",
        objective: "O6",
        notYet: "Harvest, sorting or storage is missing.",
        meets: "Harvest timing, gentle handling, sorting, drying and storage and where to sell.",
        exceeds: "Names the buyer's quality needs and how losses will be tracked."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and score Meets or Exceeds on every rubric row of the season plan",
      "Learners who report a soil test, certified seed or weekly scouting in the next season (follow-up survey)",
      "Change in harvest and post-harvest losses reported by learners or their group after one season",
      "Learners who start another Koach Learn farming course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A notebook and pen, and a basic phone",
      "Access to a field or vegetable plot, and a spade for the soil check",
      "A real pesticide label and a seed packet, if available",
      "About 60 minutes in total, in short sessions, plus time in the field and to write the season plan"
    ],
    facilitatorNotes: [
      "In a farmer group or field school: take the pre-test together, then do the soil check and scouting walk in a real field.",
      "Invite an extension officer or agrovet to give local spacing, varieties and fertilizer rates; do not give rates yourself.",
      "Do not mix or spray pesticides in class; show a label and practice reading it.",
      "Score the season plan with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
