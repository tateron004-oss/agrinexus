"use strict";

// Koach Learn course: Agriculture (Africa) -> "Modern Crop Husbandry: Maize, Rice, Cassava and Legumes" (added 29 October 2026 at the owner's request: "can you add learning for farmers in africa that include these classes and beyond").
// Choosing varieties and certified seed, land preparation, plant population and spacing (with the arithmetic), fertility for each crop (pointing to "Soil Health and Fertility" instead of repeating it),
// weed control timing, key diseases (maize lethal necrosis, cassava mosaic and brown streak, rice blast), harvest timing, and yield per hectare and per acre. Final task: a crop production plan for one staple.
// Written in the ADDIE format (see README). No product names or rates: students are sent to the national variety list, extension, the label and the national regulator.

const KEPHIS = { name: "Kenya Plant Health Inspectorate Service (KEPHIS): seed certification and the National Crop Variety List", url: "https://www.kephis.go.ke" };
const NASC = { name: "National Agricultural Seed Council (NASC, Nigeria): seed certification", url: "https://seedcouncil.gov.ng" };
const KALRO = { name: "Kenya Agricultural and Livestock Research Organization (KALRO)", url: "https://www.kalro.org" };
const IITA = { name: "International Institute of Tropical Agriculture (IITA)", url: "https://www.iita.org" };
const AFRICARICE = { name: "AfricaRice (headquarters in Abidjan, Côte d'Ivoire)", url: "https://www.africarice.org" };
const IITA_CASSAVA_VIRUS = { name: "IITA: Spirited effort by IITA team to manage the viruses destroying cassava in Africa (2017)", url: "https://iita.org/?p=16690" };
const CIMMYT_MLN = { name: "CIMMYT: Understanding and preventing seed transmission of maize lethal necrosis (MLN) in Africa", url: "https://mln.cimmyt.org/understanding-and-preventing-seed-transmission-of-maize-lethal-necrosis-mln-in-africa" };
const JIRCAS_BLAST = { name: "JIRCAS with AfricaRice: Genetic variation of blast resistance in rice from West Africa (2017)", url: "https://www.jircas.go.jp/en/publication/research_results/2017_b01" };
const PCPB = { name: "Pest Control Products Board (Kenya): registered products", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "NAFDAC (Nigeria): registered agrochemicals", url: "https://www.nafdac.gov.ng" };
const HANDBOOK_4R = { name: "4R Plant Nutrient Management in African Agriculture: an extension handbook for fertilizer management", url: "https://alliancebioversityciat.org/publications-data/4r-plant-nutrient-management-african-agriculture-extension-handbook-fertilizer" };

module.exports = {
  id: "agri-staple-crop-husbandry",
  category: "Agriculture (Africa)",
  name: "Modern Crop Husbandry: Maize, Rice, Cassava and Legumes",
  skills: "Choosing varieties and certified seed, Working out plant population and seed needs from spacing, Timing land preparation, feeding and weeding, Recognizing maize lethal necrosis, cassava viruses and rice blast, Judging harvest time and calculating yield per hectare and per acre",
  outcome: "write a season production plan for one staple crop (maize, rice, cassava or a legume) on your own field: the variety and seed, plant population and seed needs, a dated calendar for land preparation, planting, feeding and weeding, the main diseases to watch and what to do, and a yield target per hectare and per acre.",
  about: [
    "This course is for smallholder and growing commercial farmers, farm workers, young agripreneurs and extension workers who grow the staples that feed Africa: maize, rice, cassava, beans, cowpea, groundnuts and soybean. The examples come from Kenya, Nigeria, Ghana and Côte d'Ivoire.",
    "Chapter 1 is about starting the crop right: choosing a variety from your national research institute and buying certified seed or clean cuttings, preparing the land, working out how many plants you need and how much seed to buy, and timing feeding and weeding. Chapter 2 is about protecting and measuring the crop: recognizing maize lethal necrosis, cassava mosaic and brown streak, and rice blast, knowing when to harvest, and calculating your yield per hectare and per acre.",
    "Soil testing and fertilizer are taught in \"Soil Health and Fertility\", and storage in \"Post-Harvest Handling and Storage\", so this course points to them rather than repeating them. Varieties, spacing and rates differ by area, so use this course with your extension officer and research institute. A short quick check follows every lesson, a knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Write a crop production plan for one staple on your own field: the field size in hectares and acres, the variety you chose and where you will buy certified seed or clean cuttings, the spacing and your worked plant population and seed or cutting needs, a dated calendar (land preparation, planting, fertilizer as your soil test or extension advises, each weeding), the two main diseases to watch for with your first response to each, how you will judge harvest time, and a yield target per hectare and per acre with your working.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Smallholder and growing commercial farmers, farm workers, young agripreneurs and extension workers across Africa who grow maize, rice, cassava and legumes (beans, cowpea, groundnuts, soybean), from half an acre to a few hectares.",
    startingPoint: "Have grown the crop for years, often with recycled seed or shared cuttings, broadcast or uneven spacing, late weeding and little record of yield. Many do not know their plant population, which variety they have, or how to work out yield per hectare or per acre.",
    gap: "Yields of staples on many African farms are far below what improved varieties and good husbandry can give. Learners need to choose a suitable variety and clean seed, plant the right population, feed and weed on time, spot the diseases that wipe out crops, harvest at the right time and measure their yield so they can see what works.",
    constraints: [
      "Reading level: plain words and short sentences; many learners use English as a second language and the course is also available in Spanish, French and Arabic",
      "Maths: simple multiplication and division with a phone calculator; every calculation is shown step by step",
      "Devices: a basic phone with a calculator; a tape measure or a marked rope and a scale help",
      "Varieties, spacing and fertilizer rates differ by area and change as new varieties are released; learners check the national variety list and their extension officer",
      "Fertility is taught in \"Soil Health and Fertility\"; this course only covers what is different for each crop"
    ],
    prerequisites: "None, but \"Soil Health and Fertility\" is strongly recommended before or alongside this course."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "For a staple crop you will grow next season", action: "choose a variety from your national research institute or variety list and name a registered source of certified seed or clean cuttings", standard: "checking the label, seal or source before you pay" },
    { id: "O2", condition: "Given a spacing and the size of your field", action: "calculate the plant population per hectare and per acre and the seed or cuttings you need", standard: "showing each step of the working" },
    { id: "O3", condition: "For your chosen crop and planting date", action: "schedule land preparation, planting, feeding and weeding on a dated calendar", standard: "with weeding inside the crop's critical early weeks" },
    { id: "O4", condition: "Given the signs on a sick plant or field", action: "identify maize lethal necrosis, cassava mosaic, cassava brown streak or rice blast and choose the first response", standard: "matching each disease to the right first step" },
    { id: "O5", condition: "At the end of the season", action: "judge when the crop is ready and calculate the yield per hectare and per acre from a weighed harvest", standard: "using the right area and showing your working" }
  ],
  chapters: [
    {
      name: "Chapter 1: Starting the crop right",
      lessons: [
        {
          title: "Choosing a variety and buying certified seed",
          objectives: ["O1"],
          minutes: 5,
          goal: "Choose a variety that suits your area and name a registered source of certified seed or clean cuttings.",
          text: [
            "A variety is a type of the crop bred for certain traits: early or late maturity, drought tolerance, disease resistance, grain colour or cooking quality. National research institutes test and release varieties for each area: KALRO in Kenya, the Nigerian research institutes working with IITA, CSIR-Crops Research Institute in Ghana, and CNRA in Côte d'Ivoire. IITA works on cassava, maize, cowpea and soybean, and AfricaRice, based in Abidjan, on rice. Ask your extension officer which varieties are recommended for your area, rainfall and market.",
            "Choose for your conditions: early-maturing varieties for short rains or dry areas, tolerant or resistant varieties where a disease is common (for example maize lethal necrosis or cassava brown streak), and what buyers want (white or yellow maize, parboiling rice, sweet or bitter cassava).",
            "Certified seed is seed inspected by the national seed authority for purity and germination. In Kenya, KEPHIS certifies seed and publishes the National Crop Variety List, and certified packs carry a KEPHIS label you can verify. In Nigeria, the National Agricultural Seed Council (NASC) certifies seed. Buy sealed, labelled packs from a registered dealer. Hybrid maize seed must be bought new each season, because yield drops if you replant its grain. Open-pollinated varieties (OPV) and legumes can be saved for a few seasons if you select clean seed from healthy plants. For cassava, get clean cuttings from an inspected multiplier or a healthy field, never from a field with mosaic or brown streak. For soybean, ask about an inoculant (rhizobium) where extension advises it."
          ],
          steps: ["Ask extension which varieties are recommended for your area and rainfall.", "Choose for maturity, disease resistance and what buyers want.", "Check the variety on the national list where one is published (for example KEPHIS in Kenya).", "Buy sealed, labelled, certified seed from a registered dealer; check the date and label.", "For cassava, get clean cuttings from an inspected multiplier or a healthy field."],
          words: [["Variety", "a type of a crop bred for certain traits, such as early maturity or disease resistance."], ["Certified seed", "seed checked by the national seed authority for purity and germination."], ["Hybrid", "seed from crossing two parent lines; it yields well but must be bought new each season."], ["OPV", "open-pollinated variety: seed that can be saved and replanted for a few seasons if kept clean."], ["Inoculant", "a product containing helpful bacteria that help legumes such as soybean fix nitrogen."]],
          slides: [
            { title: "Varieties come from research institutes", bullets: ["Kenya: KALRO; Ghana: CSIR-Crops Research Institute", "Côte d'Ivoire: CNRA; rice: AfricaRice", "Cassava, cowpea, soybean, maize: IITA"] },
            { title: "Choose for your conditions", bullets: ["Early maturity for short or dry seasons", "Resistance to local diseases", "What your buyers want"] },
            { title: "Certified seed", bullets: ["Kenya: KEPHIS label you can verify", "Nigeria: NASC certification", "Sealed, labelled, registered dealer"] },
            { title: "Hybrid, OPV and cuttings", bullets: ["Hybrid maize: buy new each season", "OPV and legumes: save clean seed a few seasons", "Cassava: clean cuttings, never from sick fields"] }
          ],
          sources: [KEPHIS, NASC, KALRO, IITA, AFRICARICE],
          tryIt: "For one staple you will grow next season, ask your extension officer or agro-dealer for two recommended varieties. Write down their maturity, disease resistance and where you can buy certified seed or clean cuttings. If you are in Kenya, check the variety and dealer against KEPHIS's lists.",
          youCanNow: "choose a variety that suits your area and buy certified seed or clean cuttings from a registered source.",
          quickCheck: [
            { objective: "O1", q: "You planted hybrid maize last season. Can you replant the grain you harvested?", options: ["Yes, it will yield the same", "Yes, if you plant it closer", "No, yield drops; buy new certified hybrid seed", "Only if you soak it in water"], answer: 2, why: "Hybrid seed loses its vigour in the next generation, so new seed is needed each season." },
            { objective: "O1", q: "Your neighbour's cassava has yellow mosaic leaves. He offers you cuttings. What do you do?", options: ["Take them; cuttings are free", "Refuse and get clean cuttings from an inspected multiplier or healthy field", "Take them and plant them near the road", "Take only the top cuttings"], answer: 1, why: "Cassava viruses travel in cuttings, so sick fields spread the disease to yours." }
          ]
        },
        {
          title: "Land preparation and plant population",
          objectives: ["O2"],
          minutes: 6,
          goal: "Calculate plants per hectare and per acre from a spacing, and the seed or cuttings you need.",
          text: [
            "Prepare the land for the crop. Clear without burning, and keep residues as cover where you can. Maize, beans and groundnuts need a firm seedbed with fine soil around the seed; minimum tillage or planting basins work in many areas. Cassava in Nigeria and Ghana is often planted on ridges or mounds that drain well. Lowland rice needs bunds, a level field and good water control; transplanted rice is usually puddled.",
            "Plant population is the number of plants per hectare. Too few plants waste land; too many compete for light, water and nutrients. Use the spacing your extension guide gives for your variety and area. To calculate: area for one plant = row spacing x plant spacing (in metres). Plants per hectare = 10,000 m2 / area per plant. Plants per acre = 4,047 m2 / area per plant (one acre is about 4,047 m2, and one hectare is about 2.47 acres).",
            "Worked examples, if your guide gives these spacings: maize at 75 cm x 25 cm, one seed per hole: 0.75 x 0.25 = 0.1875 m2, so 10,000 / 0.1875 = about 53,300 plants per hectare, or 4,047 / 0.1875 = about 21,600 per acre. Cassava at 1 m x 1 m: 10,000 plants per hectare, about 4,000 per acre. Transplanted rice at 20 cm x 20 cm: 0.04 m2, so 250,000 hills per hectare. Beans at 50 cm x 10 cm: 0.05 m2, so 200,000 plants per hectare.",
            "Seed needs: number of seeds / seeds per kg (count and weigh 100 seeds, or read the pack) = kg, plus about 10% for gaps. For cassava, count cuttings (often about 20 to 25 cm long, from mature stems), plus a few spares. Then fill gaps within a week or two of emergence."
          ],
          steps: ["Measure your field in metres; area = length x width.", "Get the recommended spacing for your variety and area.", "Area per plant = row spacing x plant spacing (in metres).", "Plants per hectare = 10,000 / area per plant; per acre = 4,047 / area per plant.", "Plants on your field = field area / area per plant.", "Seed: plants / seeds per kg, plus about 10%."],
          words: [["Plant population", "the number of plants per hectare or per acre."], ["Hectare (ha)", "an area of 10,000 square metres, about 2.47 acres."], ["Acre", "an area of about 4,047 square metres, about 0.4 hectare."], ["Bund", "a low earth wall around a rice field that holds water."], ["Puddling", "working wet soil in a rice field to make soft mud that holds water and controls weeds."]],
          slides: [
            { title: "Prepare the land for the crop", bullets: ["No burning; keep residues as cover", "Fine seedbed for maize, beans, groundnuts", "Ridges or mounds for cassava; bunds and level fields for rice"] },
            { title: "The plant population formula", bullets: ["Area per plant = row x plant spacing (m)", "Per hectare = 10,000 / area per plant", "Per acre = 4,047 / area per plant"] },
            { title: "Worked examples", bullets: ["Maize 75 x 25 cm: about 53,300/ha, 21,600/acre", "Cassava 1 x 1 m: 10,000/ha", "Rice 20 x 20 cm: 250,000 hills/ha"] },
            { title: "How much seed?", bullets: ["Plants / seeds per kg, plus about 10%", "Count and weigh 100 seeds if the pack does not say", "Fill gaps within a week or two"] }
          ],
          sources: [KALRO, IITA],
          tryIt: "Measure one of your fields (or use its size in acres x 4,047 to get square metres). Get the spacing for your crop from extension, then calculate the plants per hectare, per acre and on your field, and how much seed or how many cuttings to buy.",
          youCanNow: "work out plant population per hectare and per acre from a spacing, and how much seed or how many cuttings you need.",
          quickCheck: [
            { objective: "O2", q: "Cassava is planted at 1 m x 1 m. How many plants per hectare?", options: ["1,000", "4,047", "100,000", "10,000"], answer: 3, why: "Each plant uses 1 m2, and a hectare is 10,000 m2." },
            { objective: "O2", q: "A field is 0.5 hectare and maize needs about 53,300 plants per hectare. About how many plants do you need?", options: ["26,650", "53,300", "106,600", "5,330"], answer: 0, why: "0.5 x 53,300 = 26,650 plants." }
          ]
        },
        {
          title: "Feeding and weeding on time",
          objectives: ["O3"],
          minutes: 5,
          goal: "Schedule planting, feeding and weeding on a dated calendar for your crop.",
          text: [
            "Soil testing, manure, compost and fertilizer are taught in \"Soil Health and Fertility\"; use your soil test or your extension officer's advice for what and how much to apply. What changes by crop is when and what each one needs most. Maize is hungry for nitrogen and needs it early and again as it grows fast. Legumes (beans, cowpea, groundnuts, soybean) make much of their own nitrogen through root nodules, so they need phosphorus more than nitrogen. Cassava grows on poorer soils but takes a lot of potassium from the soil over time. Rice usually gets nitrogen in split doses; too much nitrogen makes rice blast worse.",
            "Weeds steal water, light and nutrients most in the first weeks after the crop comes up. This is the critical period: weeds then cost the most yield, and weeding later cannot win it back. Many guides give a first weeding about two to three weeks after the crop comes up and a second a few weeks later; check your local guide. Cassava grows slowly at first and needs to be kept clean for its first three months or so, until its leaves cover the ground. In lowland rice, good levelling and keeping water on the field help hold weeds down.",
            "Herbicides can save labour but must be registered for your crop (PCPB in Kenya, NAFDAC in Nigeria) and used as the label says, with protective equipment. Put everything on a calendar counted from the planting date, so the work and the money are ready on time."
          ],
          steps: ["Write your planting date.", "Add land preparation in the weeks before it.", "Add feeding as your soil test or extension advises, at the right crop stage.", "Add the first weeding inside the critical early weeks, and the next ones.", "Note when you need labour, inputs and money for each job."],
          words: [["Critical period", "the early weeks when weeds cause the most yield loss; weeding must happen then."], ["Root nodules", "small swellings on legume roots where bacteria turn nitrogen from the air into plant food."], ["Split dose", "giving fertilizer in two or more parts at different crop stages instead of all at once."], ["Herbicide", "a chemical that kills weeds; it must be registered and used as its label says."]],
          slides: [
            { title: "Fertility: see Soil Health and Fertility", bullets: ["Use your soil test or extension advice", "This lesson: what differs by crop"] },
            { title: "What each crop needs most", bullets: ["Maize: nitrogen, early and as it grows", "Legumes: phosphorus; they make their own nitrogen", "Cassava: potassium over time; rice: split nitrogen"] },
            { title: "Weed in the critical period", bullets: ["First weeks after emergence matter most", "Often first weeding at about 2 to 3 weeks; check locally", "Cassava: keep clean about the first 3 months"] },
            { title: "Put it on a calendar", bullets: ["Count from the planting date", "Labour, inputs and money ready in time", "Herbicides: registered, label, PPE"] }
          ],
          sources: [HANDBOOK_4R, PCPB, NAFDAC],
          tryIt: "Write a calendar for your crop starting from your planned planting date: land preparation, planting, each feeding your soil test or extension officer advises, and each weeding. Mark the critical weeding period in a different colour.",
          youCanNow: "plan feeding and weeding on a dated calendar so weeds are controlled in the critical early weeks.",
          quickCheck: [
            { objective: "O3", q: "When do weeds cause the most yield loss?", options: ["Just before harvest", "In the first weeks after the crop comes up", "After harvest", "Only in the dry season"], answer: 1, why: "The critical period is the early weeks; later weeding cannot win that yield back." },
            { objective: "O3", q: "Which crop makes much of its own nitrogen through root nodules?", options: ["Maize", "Rice", "Cassava", "Beans"], answer: 3, why: "Legumes such as beans fix nitrogen with the help of bacteria in their root nodules." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Starting the crop right",
        questions: [
          { objective: "O1", q: "In Kenya, which body certifies seed and publishes the National Crop Variety List?", options: ["KEPHIS", "The county roads office", "The local market", "The bank"], answer: 0, why: "KEPHIS certifies seed and lists released varieties in Kenya." },
          { objective: "O1", q: "Your area often gets short rains. Which variety trait matters most?", options: ["Late maturity", "Early maturity", "Tall stems", "Red grain"], answer: 1, why: "An early-maturing variety finishes before the rains end." },
          { objective: "O2", q: "Maize at 75 cm x 25 cm uses how much area per plant?", options: ["1 m2", "0.25 m2", "0.1875 m2", "0.75 m2"], answer: 2, why: "0.75 m x 0.25 m = 0.1875 m2." },
          { objective: "O2", q: "About how many square metres are in one acre?", options: ["10,000", "1,000", "2,470", "4,047"], answer: 3, why: "One acre is about 4,047 m2; one hectare is 10,000 m2." },
          { objective: "O3", q: "Where does this course send you for fertilizer rates?", options: ["Your soil test and extension officer, as in Soil Health and Fertility", "The biggest bag in the shop", "Whatever a neighbour used", "A fixed amount for every crop"], answer: 0, why: "Rates depend on your soil and crop, so they come from a soil test or extension." }
        ]
      }
    },
    {
      name: "Chapter 2: Protecting and measuring the crop",
      lessons: [
        {
          title: "Key diseases: maize lethal necrosis, cassava viruses and rice blast",
          objectives: ["O4"],
          minutes: 6,
          goal: "Identify maize lethal necrosis, cassava mosaic, cassava brown streak and rice blast and choose a first response.",
          text: [
            "Maize lethal necrosis (MLN) hit Kenya hard from 2011 and spread in East Africa. CIMMYT explains that it happens when maize is infected by two viruses together: maize chlorotic mottle virus and a potyvirus such as sugarcane mosaic virus. Leaves show yellow mottling, then dry from the edges inward; the centre of the plant can die, and cobs are small, empty or rotten. Insects such as thrips and aphids spread it in the field, and infected seed can carry it over long distances. Response: plant certified seed of MLN-tolerant varieties, rotate away from maize for a season with your neighbours, remove volunteer maize, control weeds, pull and destroy sick plants early, and report it to extension.",
            "Cassava mosaic disease (CMD) makes leaves yellow-and-green patchy (mosaic), twisted and small, and stunts the plant. Cassava brown streak disease (CBSD) shows yellow patches along the veins of older leaves and brown streaks on stems, but the worst damage is hidden: the roots get a hard, brown, dry rot, sometimes when the leaves look almost healthy. IITA estimates these two diseases cost Africa about US$1 billion a year. Whiteflies spread both, but the main spread over long distances is farmers sharing infected cuttings. Response: plant clean cuttings of tolerant varieties, pull out and destroy sick plants early, never take cuttings from sick fields, and in East Africa dig a few roots to check for brown rot before harvest.",
            "Rice blast is a fungal disease and a major problem in West Africa. On leaves it makes diamond- or eye-shaped spots with grey centres and brown edges. When it attacks the neck under the panicle, the panicle turns white and empty. Research with AfricaRice found that resistant varieties are the cheapest control for small farmers, but the fungus can overcome resistance a few years after a variety is widely grown, so new varieties matter. Response: grow a variety recommended as resistant, avoid too much nitrogen, avoid drought stress in upland rice, use clean seed and clear infected residues. Use a fungicide only if extension advises it and it is registered for rice."
          ],
          steps: ["Scout weekly; compare what you see with the signs in this lesson.", "Photograph sick plants and ask extension or a plant clinic to confirm.", "Pull and destroy sick plants early (MLN and cassava viruses).", "Next season: certified seed or clean cuttings of a tolerant or resistant variety.", "Coordinate rotation and clean planting material with neighbours."],
          words: [["MLN", "maize lethal necrosis: a disease from two viruses together that can kill maize plants."], ["CMD", "cassava mosaic disease: a virus disease that makes cassava leaves patchy, twisted and small."], ["CBSD", "cassava brown streak disease: a virus disease that causes brown, dry rot in cassava roots."], ["Rice blast", "a fungal disease of rice that makes eye-shaped leaf spots and can leave panicles white and empty."], ["Rogue", "to pull out and destroy diseased plants so they do not spread disease."]],
          slides: [
            { title: "Maize lethal necrosis (MLN)", bullets: ["Two viruses together (CIMMYT)", "Yellow mottling, leaves dry from the edges", "Spread by insects and infected seed"] },
            { title: "Cassava mosaic and brown streak", bullets: ["CMD: patchy, twisted, small leaves", "CBSD: vein yellowing, stem streaks, brown root rot", "Spread by whiteflies and shared cuttings"] },
            { title: "Rice blast", bullets: ["Eye-shaped spots, grey centre, brown edge", "Neck blast: white, empty panicles", "Resistance can break down after a few years"] },
            { title: "First responses", bullets: ["Confirm with extension or a plant clinic", "Rogue sick plants early", "Next season: clean seed, tolerant varieties, rotation"] }
          ],
          sources: [CIMMYT_MLN, IITA_CASSAVA_VIRUS, JIRCAS_BLAST, AFRICARICE],
          tryIt: "Walk your field (or a neighbour's) and look for the signs of the disease that matters most for your crop. Write what you saw, take a photo of anything doubtful, and write the first response you would take for that disease.",
          youCanNow: "recognize maize lethal necrosis, cassava mosaic, cassava brown streak and rice blast and choose a first response.",
          quickCheck: [
            { objective: "O4", q: "Your cassava leaves look almost healthy, but roots dug up show hard, brown, dry rot. The most likely cause is:", options: ["Cassava brown streak disease", "Too much rain at planting", "Fall armyworm", "Rice blast"], answer: 0, why: "CBSD rots the roots, sometimes with only mild leaf signs." },
            { objective: "O4", q: "Rice leaves have eye-shaped spots with grey centres and brown edges. What is a good response?", options: ["Add extra nitrogen fertilizer", "Plant the same seed again next season", "Ask extension to confirm blast and grow a resistant variety next season", "Flood the house"], answer: 2, why: "Those are blast spots; resistant varieties and balanced nitrogen are the main controls." }
          ]
        },
        {
          title: "Knowing when to harvest",
          objectives: ["O5"],
          minutes: 4,
          goal: "Judge when your maize, rice, cassava or legume crop is ready to harvest.",
          text: [
            "Harvest too early and grain is light and wet; harvest too late and you lose crop to birds, rats, rain, shattering and rot, and grain is more likely to get aflatoxin. Drying and storage are taught in \"Post-Harvest Handling and Storage\".",
            "Maize is mature when a black layer forms where the grain joins the cob and the husks are dry; pull back a few husks and break a few grains to check. Then dry it well before storing. Rice is ready when most of the grains on the panicles have turned golden and hard; waiting too long brings shattering and bird losses. Beans and cowpea are ready when most pods are dry and rattle; pick before they split. Groundnuts are ready when the leaves yellow and the inside of most shells has darkened; dig a few plants to check.",
            "Cassava does not have one harvest day: each variety has a maturity period, and roots can stay in the ground for a while. But roots left too long can become woody, and where brown streak is common the rot gets worse. Once dug, cassava spoils within a few days, so harvest only what you can sell or process quickly. In Ghana and Nigeria, many farmers time the harvest with the gari or fufu processor's capacity."
          ],
          steps: ["Know your variety's maturity period from the seed pack or extension.", "Check a few plants across the field, not just one.", "Maize: black layer and dry husks; rice: most grains golden and hard.", "Legumes: dry, rattling pods; groundnuts: darkened shell insides.", "Cassava: harvest only what you can sell or process within days."],
          words: [["Black layer", "a dark spot where a maize grain joins the cob; it shows the grain has stopped filling."], ["Shattering", "grain or pods falling or splitting open in the field before harvest."], ["Maturity period", "how long a variety takes from planting to harvest."]],
          slides: [
            { title: "Too early or too late both lose", bullets: ["Early: light, wet grain", "Late: birds, rats, rain, shattering, rot", "Drying and storage: see Post-Harvest course"] },
            { title: "Grain crops", bullets: ["Maize: black layer, dry husks", "Rice: most grains golden and hard", "Check several plants across the field"] },
            { title: "Legumes and cassava", bullets: ["Beans, cowpea: dry, rattling pods", "Groundnuts: shell insides darken", "Cassava: spoils within days once dug"] }
          ],
          tryIt: "For your crop, write the variety's maturity period, the signs you will check, and the date you expect to start checking. If your crop is in the field now, check five plants across the field and write what you see.",
          youCanNow: "judge when your staple crop is ready to harvest.",
          quickCheck: [
            { objective: "O5", q: "How do you know maize grain has stopped filling?", options: ["The leaves are still green", "A black layer forms where the grain joins the cob", "The tassel appears", "It has rained twice"], answer: 1, why: "The black layer shows physiological maturity." },
            { objective: "O5", q: "Why harvest only as much cassava as you can sell or process within a few days?", options: ["Cassava roots spoil quickly once dug", "Cassava roots grow back after digging", "Buyers prefer dry roots", "Leaves are the main product"], answer: 0, why: "Fresh cassava roots go bad within days of harvest." }
          ]
        },
        {
          title: "Calculating yield and writing your production plan",
          objectives: ["O5", "O2", "O3"],
          minutes: 6,
          goal: "Calculate yield per hectare and per acre and write a production plan for one staple on your field.",
          text: [
            "Yield is the weight of crop you harvest per area. To know it, weigh your harvest after drying, and know the exact area it came from. Yield per hectare = kg harvested / area in m2 x 10,000. Yield per acre = kg harvested / area in m2 x 4,047. Or from per hectare to per acre: divide by 2.47.",
            "Example, maize in Kenya: you harvest 1,350 kg of dry grain from a field of 3,000 m2. Per hectare: 1,350 / 3,000 x 10,000 = 4,500 kg, or 4.5 tonnes. Per acre: 4,500 / 2.47 = about 1,820 kg, which is about 20 bags of 90 kg. A quick estimate before harvest: mark a 10 m x 10 m square (100 m2) in a typical part of the field, harvest and dry it, weigh it, and multiply by 100 to get kg per hectare. Do it in two or three places and take the average.",
            "Now put the whole course together into a production plan for one staple on your own field: the field size, the variety and seed source, the spacing with your plant population and seed needs, a dated calendar for land preparation, planting, feeding and weeding, the main diseases and your first response, how you will judge harvest, and a yield target per hectare and per acre. After harvest, compare the real yield with your target and write what you will change. A farmer in Côte d'Ivoire who writes down her rice yield every season can show a buyer, a cooperative or a lender what her field produces."
          ],
          steps: ["Measure the area harvested in m2.", "Weigh the dried harvest in kg.", "Per hectare = kg / m2 x 10,000; per acre = kg / m2 x 4,047.", "Or sample 100 m2 in 2 or 3 spots, weigh and multiply by 100 for kg/ha.", "Write the plan: variety, seed, population, calendar, diseases, harvest, yield target.", "After harvest, compare real yield with the target."],
          words: [["Yield", "the amount of crop harvested per area, such as kg per hectare or bags per acre."], ["Tonne", "1,000 kilograms."], ["Sample plot", "a small marked area harvested and weighed to estimate the yield of the whole field."]],
          slides: [
            { title: "Yield formulas", bullets: ["Per ha = kg / area (m2) x 10,000", "Per acre = kg / area (m2) x 4,047", "Per ha to per acre: divide by 2.47"] },
            { title: "Worked example: maize", bullets: ["1,350 kg from 3,000 m2", "= 4,500 kg/ha (4.5 t/ha)", "= about 1,820 kg/acre, about 20 bags of 90 kg"] },
            { title: "Sample plot estimate", bullets: ["Mark 10 m x 10 m (100 m2)", "Harvest, dry, weigh; x 100 = kg/ha", "Do 2 or 3 spots and average"] },
            { title: "Your production plan", bullets: ["Variety, seed, population, calendar", "Diseases and first responses", "Harvest signs and a yield target per ha and acre"] }
          ],
          tryIt: "Final task: write your crop production plan for one staple on your own field: field size in hectares and acres, variety and seed source, spacing with plant population and seed needs worked out, a dated calendar (land preparation, planting, feeding, weeding), the two main diseases and your first response to each, harvest signs, and a yield target per hectare and per acre with your working.",
          youCanNow: "calculate yield per hectare and per acre and write a production plan for one staple on your own field.",
          quickCheck: [
            { objective: "O5", q: "You harvested 900 kg of dry beans from 4,047 m2. What is the yield per acre?", options: ["About 450 kg", "About 2,224 kg", "900 kg", "About 4,047 kg"], answer: 2, why: "4,047 m2 is one acre, so the yield is 900 kg per acre." },
            { objective: "O5", q: "A 100 m2 sample plot gives 40 kg of dry maize. What is the estimated yield per hectare?", options: ["40 kg", "400 kg", "40,000 kg", "4,000 kg"], answer: 3, why: "A hectare is 100 times 100 m2, so 40 x 100 = 4,000 kg per hectare." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Protecting and measuring the crop",
        questions: [
          { objective: "O4", q: "Maize lethal necrosis is caused by:", options: ["Too much sun", "Two viruses infecting the plant together", "A lack of potassium", "Fall armyworm alone"], answer: 1, why: "CIMMYT explains MLN as a co-infection of two viruses." },
          { objective: "O4", q: "What is the main way cassava viruses spread over long distances?", options: ["Wind blowing leaves", "Rain splash", "Sharing infected cuttings", "Bird droppings"], answer: 2, why: "Whiteflies spread them locally; infected cuttings carry them far." },
          { objective: "O4", q: "Which habit makes rice blast worse?", options: ["Too much nitrogen fertilizer", "Using clean seed", "Growing a resistant variety", "Clearing infected residues"], answer: 0, why: "Heavy nitrogen makes rice more open to blast." },
          { objective: "O5", q: "Rice is ready to harvest when:", options: ["The first flowers open", "The leaves are dark green", "It has been in the field one month", "Most grains on the panicles are golden and hard"], answer: 3, why: "Golden, hard grains show the crop is mature; later harvest causes shattering and bird losses." },
          { objective: "O5", q: "You get 4,940 kg per hectare. About how much is that per acre?", options: ["2,000 kg", "12,200 kg", "4,940 kg", "494 kg"], answer: 0, why: "4,940 / 2.47 = 2,000 kg per acre." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Modern Crop Husbandry: Maize, Rice, Cassava and Legumes",
    questions: [
      { objective: "O1", q: "Where should you look first for varieties suited to your area?", options: ["A social media advert", "Your national research institute and extension officer", "The cheapest seed in the market", "Last season's grain store"], answer: 1, why: "Research institutes test and release varieties for each area." },
      { objective: "O1", q: "Which body certifies seed in Nigeria?", options: ["NAFDAC", "The central bank", "KEPHIS", "The National Agricultural Seed Council (NASC)"], answer: 3, why: "NASC certifies seed in Nigeria." },
      { objective: "O1", q: "What should you check before paying for a pack of certified seed?", options: ["The seal, the label and the date", "Only the colour of the bag", "Only the price", "Nothing"], answer: 0, why: "A sealed, labelled, dated pack from a registered dealer is your protection against fake seed." },
      { objective: "O1", q: "Which CGIAR centre works on rice in Africa?", options: ["IITA", "ICIPE", "AfricaRice", "WorldFish"], answer: 2, why: "AfricaRice, based in Abidjan, works on rice." },
      { objective: "O2", q: "How many square metres are in one hectare?", options: ["4,047", "1,000", "100", "10,000"], answer: 3, why: "A hectare is 100 m x 100 m = 10,000 m2." },
      { objective: "O2", q: "Rice transplanted at 20 cm x 20 cm gives how many hills per hectare?", options: ["25,000", "250,000", "2,500", "40,000"], answer: 1, why: "0.2 x 0.2 = 0.04 m2; 10,000 / 0.04 = 250,000." },
      { objective: "O2", q: "Beans at 50 cm x 10 cm need about how many plants per acre?", options: ["About 80,900", "About 200,000", "About 8,090", "About 40,470"], answer: 0, why: "0.5 x 0.1 = 0.05 m2; 4,047 / 0.05 = about 80,900." },
      { objective: "O2", q: "Why add about 10% extra seed?", options: ["To feed birds", "To make the bag heavier", "To cover seeds that fail and fill gaps", "Because the law says so"], answer: 2, why: "Some seeds do not come up; extra seed lets you fill gaps." },
      { objective: "O3", q: "What do legumes need more than nitrogen?", options: ["Salt", "Phosphorus", "Sugar", "Lime every week"], answer: 1, why: "Legumes fix much of their own nitrogen but still need phosphorus." },
      { objective: "O3", q: "When should the first weeding usually happen?", options: ["Just before harvest", "Only if weeds flower", "After the crop is knee-high and tasselling", "In the critical early weeks, often about 2 to 3 weeks after the crop comes up"], answer: 3, why: "Weeds cost the most yield in the early weeks." },
      { objective: "O3", q: "Why put your season on a calendar counted from planting?", options: ["So labour, inputs and money are ready on time", "To impress visitors", "Because seeds read calendars", "It is not useful"], answer: 0, why: "A dated calendar makes sure each job is done at the right crop stage." },
      { objective: "O3", q: "About how long should cassava be kept free of weeds?", options: ["One week", "Only after harvest", "About its first three months, until its leaves cover the ground", "Never"], answer: 2, why: "Cassava grows slowly at first and needs early weed control until the canopy closes." },
      { objective: "O4", q: "Yellow mottling on maize leaves that then dry from the edges, with small or rotten cobs, suggests:", options: ["Maize lethal necrosis", "Rice blast", "Good health", "Too much potassium"], answer: 0, why: "Those are typical MLN signs." },
      { objective: "O4", q: "Cassava leaves that are yellow-and-green patchy, twisted and small point to:", options: ["Cassava brown streak only", "Lack of sunlight", "Cassava mosaic disease", "Fall armyworm"], answer: 2, why: "Mosaic leaf patterns and twisting are the signs of CMD." },
      { objective: "O4", q: "What should you do first with a few plants showing MLN or cassava virus signs?", options: ["Take cuttings from them", "Confirm with extension and pull out and destroy them early", "Spray fertilizer on them", "Leave them to recover"], answer: 1, why: "Early roguing removes the source of the virus." },
      { objective: "O4", q: "Why do new blast-resistant rice varieties keep being released?", options: ["Old seed changes colour", "Farmers get bored", "Rice needs more water each year", "The fungus can overcome resistance a few years after a variety is widely grown"], answer: 3, why: "Blast resistance can break down, so breeders keep developing new varieties." },
      { objective: "O5", q: "Groundnuts are ready when:", options: ["They first flower", "The leaves yellow and the inside of most shells has darkened", "It has rained once", "The pods are soft and white inside"], answer: 1, why: "Darkened shell insides and yellowing leaves show maturity." },
      { objective: "O5", q: "You harvested 600 kg of dry maize from 1,500 m2. What is the yield per hectare?", options: ["600 kg", "9,000 kg", "1,500 kg", "4,000 kg"], answer: 3, why: "600 / 1,500 x 10,000 = 4,000 kg per hectare." },
      { objective: "O5", q: "To change a yield per hectare into a yield per acre, you:", options: ["Divide by 2.47", "Multiply by 2.47", "Add 4,047", "Divide by 10"], answer: 0, why: "One hectare is about 2.47 acres, so the per-acre yield is smaller." },
      { objective: "O5", q: "Why compare your real yield with your plan's target after harvest?", options: ["It is required by the seed company", "To see what worked and what to change next season", "To get a free bag of fertilizer", "It has no use"], answer: 1, why: "Comparing results with the plan shows where to improve." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 2, 4, 5, 9, 12, 13, 17, 18] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part of the plan and check it again with your extension officer.",
    criteria: [
      { name: "Variety and seed", objective: "O1", notYet: "No variety named, or seed is recycled hybrid grain or cuttings from a sick field.", meets: "A recommended variety for the area is named, with a registered source of certified seed or clean cuttings.", exceeds: "Two varieties are compared on maturity, disease resistance and market, and the choice is explained." },
      { name: "Plant population and seed needs", objective: "O2", notYet: "No spacing or calculation, or the arithmetic is wrong.", meets: "The spacing, plants per hectare, per acre and on the field, and the seed or cuttings needed are worked out correctly with the steps shown.", exceeds: "Also plans gap filling and a count of plants after emergence to check the real population." },
      { name: "Dated calendar", objective: "O3", notYet: "Jobs are listed without dates, or weeding is late.", meets: "Land preparation, planting, feeding (from a soil test or extension) and each weeding are dated from the planting date, with the first weeding inside the critical period.", exceeds: "Labour, inputs and cash needed for each job are on the calendar." },
      { name: "Disease watch", objective: "O4", notYet: "No diseases named, or the responses do not fit them.", meets: "The two main diseases for the crop are named with their signs and a correct first response for each.", exceeds: "Includes prevention for next season agreed with neighbours, such as rotation or clean planting material." },
      { name: "Harvest and yield target", objective: "O5", notYet: "No harvest signs or yield target, or the yield maths is wrong.", meets: "Harvest signs for the crop and a yield target per hectare and per acre with correct working.", exceeds: "Includes a sample-plot method to estimate yield before harvest and a plan to compare the result with the target." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who plant certified seed or clean cuttings of a recommended variety the next season (follow-up survey)",
      "Learners who weigh their harvest and report a yield per hectare or per acre after the season",
      "Change in reported yield per hectare for the chosen staple from one season to the next",
      "Fewer fields lost to maize lethal necrosis or cassava viruses in learner groups (extension reports)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone with a calculator, or paper, pen and a simple calculator",
      "A tape measure or a rope marked every metre, and a scale for weighing harvest",
      "Access to a field of maize, rice, cassava or legumes",
      "The national variety list or extension's recommended varieties for the area",
      "About 60 to 90 minutes in total for lessons, quick checks and quizzes, plus field practice"
    ],
    facilitatorNotes: [
      "Take the pre-test together, then do the plant population and yield calculations in the field with a tape measure and real plants.",
      "Get the recommended varieties and spacings for your area from the research institute or extension before the session; do not make them up.",
      "Bring photos or real samples of MLN, cassava mosaic, cassava brown streak (including a cut root) and rice blast if they occur in your area.",
      "Groups of farmers who agree on rotation and clean planting material control MLN and cassava viruses better; use the session to start that conversation.",
      "Score the production plan with the rubric, and check every calculation with the learner.",
      "Come back after harvest to compare each learner's real yield with the target in the plan."
    ]
  }
};
