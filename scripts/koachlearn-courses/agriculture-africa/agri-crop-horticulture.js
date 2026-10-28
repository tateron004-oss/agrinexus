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
  chapters: [
    {
      name: "Chapter 1: Growing a strong crop",
      lessons: [
        {
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
          youCanNow: "check your soil's health in the field and know how to take a sample for a soil test."
        },
        {
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
          youCanNow: "plant a field crop and raise vegetable seedlings with good seed, spacing and timing."
        },
        {
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
          youCanNow: "plan how to feed a crop with manure, compost and well-placed fertilizer."
        }
      ],
      check: {
        title: "Knowledge Check 1: Growing a strong crop",
        questions: [
          { q: "Which is a sign of healthy soil?", options: ["Hard and pale, crusts after rain", "Dark, crumbly, with earthworms", "Water always runs off", "Smells of chemicals"], answer: 1, why: "Healthy soil is crumbly, dark and full of life." },
          { q: "How should you take a soil sample?", options: ["One spoon from a manure heap", "From a burned spot", "Many small samples across the plot, mixed together", "From the road"], answer: 2, why: "A mixed sample represents the whole plot." },
          { q: "Why use clean cassava cuttings?", options: ["Virus diseases spread through infected cuttings", "They are cheaper", "They grow faster in any soil", "Buyers ask for them"], answer: 0, why: "Clean planting material stops diseases spreading." },
          { q: "What is hardening of seedlings?", options: ["Watering more", "Adding fertilizer", "Planting in hard soil", "Slowly giving more sun and less water before transplanting"], answer: 3, why: "It prepares seedlings for field conditions." },
          { q: "Where do the right fertilizer rates come from?", options: ["A neighbour's guess", "Your soil test and local recommendations", "The bag's colour", "Using as much as possible"], answer: 1, why: "Soil and area decide what the crop needs." }
        ]
      }
    },
    {
      name: "Chapter 2: Protecting and finishing the crop",
      lessons: [
        {
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
          youCanNow: "scout a crop weekly and choose IPM actions starting with prevention and non-chemical controls."
        },
        {
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
          youCanNow: "use a pesticide safely and legally when justified, and water vegetables efficiently."
        },
        {
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
          youCanNow: "harvest, handle, sort and store produce to cut losses and keep its value."
        }
      ],
      check: {
        title: "Knowledge Check 2: Protecting and finishing the crop",
        questions: [
          { q: "In IPM, pesticides are used:", options: ["Every week whatever happens", "Never under any condition", "Only when justified, after other methods are considered", "Only on vegetables"], answer: 2, why: "FAO's IPM keeps pesticide use to what is justified." },
          { q: "How should you scout a field?", options: ["Look only at the edge", "Walk a W pattern and check a set number of plants", "Look from the house", "Only after harvest"], answer: 1, why: "A W pattern samples the whole field fairly." },
          { q: "The pre-harvest interval is:", options: ["The days to wait between spraying and harvest", "The time to plant", "The price of the pesticide", "The size of the sprayer"], answer: 0, why: "It keeps residues on food at safe levels." },
          { q: "Why use drip irrigation for tomatoes?", options: ["It wets the leaves", "It uses more water", "It is required by law", "It puts water at the roots and keeps leaves dry, reducing disease"], answer: 3, why: "Dry leaves mean less disease and less water wasted." },
          { q: "Why dry maize well before storage?", options: ["To make it heavier", "Damp grain can grow moulds that produce aflatoxin", "Buyers prefer wet grain", "To change its colour"], answer: 1, why: "Aflatoxin is a dangerous poison from moulds on damp grain." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Sustainable Crop and Horticultural Production",
    questions: [
      { q: "A soil test tells you:", options: ["The weather", "pH and nutrient levels", "Crop prices", "Pest names"], answer: 1, why: "Soil tests measure acidity and nutrients." },
      { q: "Acidic soils may need:", options: ["More burning", "Salt", "Lime, if a soil test advises it", "Nothing ever"], answer: 2, why: "Liming reduces acidity and frees nutrients." },
      { q: "Which builds soil health?", options: ["Adding manure and compost and keeping soil covered", "Burning residues", "Ploughing many times", "Leaving soil bare"], answer: 0, why: "Organic matter and cover feed and protect soil." },
      { q: "Certified seed is:", options: ["Any grain from the market", "Seed with no packet", "Seed saved for ten years", "Seed checked by the official seed authority"], answer: 3, why: "Certification checks variety and quality." },
      { q: "Crowded plants usually:", options: ["Yield more", "Compete for light, water and nutrients and lose yield", "Need no fertilizer", "Resist all pests"], answer: 1, why: "Right spacing balances plant numbers and resources." },
      { q: "When should seedlings be transplanted?", options: ["At midday in full sun", "During a storm", "After hardening, ideally in the cool evening", "Before they have leaves"], answer: 2, why: "Cool conditions reduce transplant shock." },
      { q: "Which crops add nitrogen to the soil?", options: ["Beans, cowpea and groundnut", "Maize only", "Tomatoes", "Onions"], answer: 0, why: "Legumes fix nitrogen through their roots." },
      { q: "Topdressing maize usually means adding:", options: ["Lime at planting", "Seed", "Water only", "Nitrogen to the growing crop"], answer: 3, why: "Nitrogen topdressing supports growth at the right stage." },
      { q: "Fertilizer should be placed:", options: ["Directly on the seed", "Near the plant, not touching seed", "On the road", "Only on leaves"], answer: 1, why: "Placement near roots uses it well without burning seed." },
      { q: "Natural enemies are:", options: ["Weeds", "Pesticides", "Insects that eat or attack pests", "Thieves"], answer: 2, why: "Ladybirds and parasitic wasps help control pests." },
      { q: "An action level is:", options: ["The pest amount at which control is worth the cost", "A type of sprayer", "Harvest time", "A soil test result"], answer: 0, why: "It helps avoid unnecessary spraying." },
      { q: "Push-pull is used mainly in:", options: ["Tomatoes", "Kale", "Onions", "Maize and sorghum"], answer: 3, why: "icipe developed it for cereal pests like stemborer and fall armyworm." },
      { q: "In Kenya, pesticides are registered by:", options: ["KCAA", "The Pest Control Products Board (PCPB)", "KMD", "ODPC"], answer: 1, why: "PCPB regulates pest control products in Kenya." },
      { q: "A pesticide sold in an unlabelled, repacked bottle:", options: ["Is a bargain", "Is fine if cheap", "Should not be bought or used", "Is safer"], answer: 2, why: "Without a label you cannot know the product or use it safely." },
      { q: "Empty pesticide containers should be:", options: ["Disposed of safely, never reused for food or water", "Used to store drinking water", "Given to children", "Thrown in the river"], answer: 0, why: "Residues can poison people and water." },
      { q: "The best time to water vegetables is:", options: ["Midday", "Only at night in rain", "Never", "Early morning or evening"], answer: 3, why: "Less water is lost to heat and evaporation." },
      { q: "Mulch around vegetables:", options: ["Dries the soil", "Keeps moisture in and soil off the leaves", "Attracts all pests", "Replaces water completely"], answer: 1, why: "Mulch saves water and reduces disease splash." },
      { q: "Soft produce like tomatoes should be carried in:", options: ["Tight sacks", "Open hands only", "Clean crates", "Plastic bags in the sun"], answer: 2, why: "Crates protect soft produce from crushing." },
      { q: "Why harvest only as much cassava as you can sell or process quickly?", options: ["Roots spoil within days after harvest", "Buyers dislike cassava", "Cassava grows back overnight", "It is the law"], answer: 0, why: "Fresh cassava roots deteriorate fast." },
      { q: "Hermetic storage bags control weevils by:", options: ["Adding poison", "Making noise", "Letting in light", "Cutting off air"], answer: 3, why: "Airtight bags starve insects of oxygen." }
    ]
  }
};
