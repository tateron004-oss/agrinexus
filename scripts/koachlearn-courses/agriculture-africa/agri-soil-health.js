"use strict";

// Koach Learn course: Agriculture (Africa) -> "Soil Health and Fertility" (owner's request, 28 October 2026).
// For smallholder and growing farmers in Kenya, Nigeria, Ghana and across Africa: reading the soil, getting a lab soil test, building organic matter,
// rotating and intercropping with legumes, mulching and erosion control, and using fertilizer by the 4Rs. Goes deeper than the soil lesson in
// agri-crop-horticulture.js. Facts are sourced to FAO, KALRO, CSIR-Soil Research Institute (Ghana) and the 4R extension handbook for sub-Saharan Africa.

const FAO_SOM = { name: "FAO: The importance of soil organic matter (key to drought-resistant soil)", url: "https://www.fao.org/4/a0100e/a0100e.pdf" };
const FAO_RUNOFF = { name: "FAO: Rainfall runoff management techniques for erosion control", url: "https://www.fao.org/4/t1696e/t1696e02.htm" };
const FAO_MECH = { name: "FAO TECA/STI portal: Mechanical soil conservation strategies to reduce soil erosion", url: "https://sti-portal.fao.org/innovations/mechanical-soil-conservation-strategies-reduce-soil-erosion" };
const KALRO = { name: "Kenya Agricultural and Livestock Research Organization (KALRO): contact for soil analysis", url: "https://www.kalro.org" };
const KALRO_SAMPLING = { name: "KALRO: Guide for Soil Sampling and Pre-Treatment for Soil Fertility Evaluation", url: "https://kalroerepository.kalro.org/items/ab36e6de-6fdf-46dc-bfdc-044815064ec1" };
const CSIR_SRI = { name: "CSIR-Soil Research Institute, Kwadaso, Kumasi (Ghana)", url: "https://sri.csir.org.gh" };
const HANDBOOK_4R = { name: "4R Plant Nutrient Management in African Agriculture: an extension handbook for fertilizer management", url: "https://alliancebioversityciat.org/publications-data/4r-plant-nutrient-management-african-agriculture-extension-handbook-fertilizer" };

module.exports = {
  id: "agri-soil-health",
  category: "Agriculture (Africa)",
  name: "Soil Health and Fertility",
  skills: "Reading your soil in the field, Taking a soil sample for testing, Building organic matter with compost and manure, Planning rotations and legume intercrops, Stopping erosion with mulch and contour work, Using fertilizer by the 4Rs",
  outcome: "check the health of your own soil, take a good sample for a lab test, and write a one-season soil plan that builds organic matter, rotates with legumes, keeps soil from washing away, and uses fertilizer at the right source, rate, time and place.",
  about: [
    "This course is for smallholder and growing farmers, farm workers and young farmers in Kenya, Nigeria, Ghana and across Africa who want more from the same land. Healthy soil holds more water, feeds the crop better and pays back every shilling, naira or cedi you put into seed and fertilizer.",
    "Chapter 1 is about knowing your soil: reading it with your eyes and hands, getting a proper soil test, and building organic matter with compost and manure. Chapter 2 is about keeping it healthy season after season: rotations and legume intercrops, mulching and erosion control, and using fertilizer well.",
    "Soils differ from one field to the next. Use this course together with your soil test results and advice from your extension officer, research institute or agrovet, and try new practices on a small plot first. Each lesson takes about five minutes and ends with a task on your own farm. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Write a one-page soil plan for one field on your farm (or an example field such as 1 acre of maize and beans in Kakamega, 2 acres of cassava in Oyo, or 1 acre of tomatoes near Kumasi): what your field check found, when and where you will get a soil test (or what the test said), how you will add organic matter, your rotation or legume intercrop, how you will keep the soil covered and stop erosion, and your fertilizer plan written as source, rate, time and place.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Smallholder and growing farmers, farm workers and young farmers in Kenya, Nigeria, Ghana and across Africa who want more from the same land, growing crops such as maize, beans, cassava and tomatoes.",
    startingPoint: "Most plant every season and use some manure or fertilizer, often by habit or a neighbour's advice. Few have done a field check of their soil, taken a soil test, made compost, planned a rotation, built erosion controls along the contour, or used fertilizer by the 4Rs.",
    gap: "Tired, acidic or eroded soil wastes money spent on seed and fertilizer and leaves crops weak in dry spells. Knowing their soil and building it each season helps farmers hold more water, feed crops better and get more harvest from every bag of fertilizer.",
    constraints: [
      "Reading level: plain words and short sentences; every soil term is explained",
      "Devices: a spade, a bucket and a basic phone; most practice happens in the field",
      "Time: about 5 minute lessons that fit around farm work",
      "Soils differ field by field: rates come from a soil test, extension or research, and new practices are tried on a small plot first",
      "Lab fees, locations and waiting times change: learners call or check before going"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "On one of your own fields", action: "do a field check of colour, texture, worms, roots, water and plant signs and write down what it shows", standard: "treating plant signs as clues to confirm with a soil test" },
    { id: "O2", condition: "For one field", action: "take a soil sample the right way and name where to send it for testing", standard: "with many small samples mixed into one clean sample per part of the field" },
    { id: "O3", condition: "Using crop residues, green material and manure", action: "make a compost heap and plan how to add organic matter", standard: "with no residues burned and no fresh manure on seedlings" },
    { id: "O4", condition: "For one field", action: "plan a three-season rotation and a legume intercrop", standard: "with a legume in the plan and spacing that lets both crops get light" },
    { id: "O5", condition: "For a sloping or bare field", action: "choose mulch and erosion controls and lay them out along the contour", standard: "with the contour marked with help from extension where needed" },
    { id: "O6", condition: "For one crop", action: "write a fertilizer plan using the right source, rate, time and place", standard: "with rates taken from a soil test or local recommendation" }
  ],
  chapters: [
    {
      name: "Chapter 1: Knowing and feeding your soil",
      lessons: [
        {
          objectives: ["O1"],
          title: "Reading your soil with your eyes and hands",
          minutes: 5,
          goal: "Do a simple field check of your soil and write down what it tells you.",
          text: [
            "You can learn a lot about soil with a spade, your hands and your eyes. Healthy soil is dark, crumbly and smells earthy. It has earthworms and other small creatures, roots go deep, and rain soaks in instead of running off. Poor soil is pale or hard, forms a crust after rain, cracks badly when dry, or stays wet and smelly.",
            "Feel the texture: wet a small ball of soil and rub it between your fingers. Sandy soil feels gritty and falls apart; it drains fast and loses nutrients. Clay soil feels sticky and can be rolled into a long thin ribbon; it holds water and nutrients but can get waterlogged and hard. Loam is in between and is easiest to farm.",
            "Look at the plants too. Yellow lower leaves on maize can mean too little nitrogen. Purple leaves on young maize can mean too little phosphorus. Weeds such as striga (witchweed) often show tired, low-fertility soil. These are clues, not proof: a soil test tells you for sure."
          ],
          steps: ["Dig a hole about one spade deep in three places in the field.", "Look at colour, layers, roots and any hard layer.", "Count earthworms in one spadeful.", "Wet a ball of soil and feel it: gritty (sandy), sticky (clay) or in between (loam).", "After rain, note where water runs off or stands.", "Write what you found for each part of the field."],
          words: [["Soil texture", "how sandy, silty or clay-like a soil is; it decides how fast water drains."], ["Loam", "a soil with a good mix of sand, silt and clay."], ["Hardpan", "a hard layer under the surface that roots and water cannot get through."], ["Striga", "a parasitic weed (witchweed) that attacks maize, sorghum and millet, common on poor soils."]],
          slides: [
            { title: "Healthy soil", bullets: ["Dark, crumbly, smells earthy", "Earthworms and deep roots", "Rain soaks in, does not run off"] },
            { title: "Feel the texture", bullets: ["Gritty and falls apart: sandy, drains fast", "Sticky, rolls into a ribbon: clay, holds water", "In between: loam, easiest to farm"] },
            { title: "Plant clues (not proof)", bullets: ["Yellow lower maize leaves: maybe low nitrogen", "Purple young maize leaves: maybe low phosphorus", "Lots of striga: often tired, poor soil"] },
            { title: "Field check", bullets: ["Dig in three places", "Look, smell, count worms, feel texture", "Watch water after rain; write it down"] }
          ],
          tryIt: "Do the field check in one of your fields: dig in three places, feel the texture, count earthworms, and write one line for each spot. Take a phone photo of each hole so you can compare next season.",
          youCanNow: "check your soil in the field and describe its texture, life, drainage and warning signs.",
          quickCheck: [
            { objective: "O1", q: "What can yellow lower leaves on maize point to?", options: ["Too much water in the leaves", "Too much sun", "Healthy growth", "Too little nitrogen"], answer: 3, why: "Yellow lower leaves on maize can mean too little nitrogen; a soil test confirms it." },
            { objective: "O1", q: "After rain, your field forms a hard crust and the water runs off. What do you write in your field check?", options: ["Healthy soil; no change needed", "A sign of poor soil, to confirm with a soil test", "Too many earthworms", "Perfect loam"], answer: 1, why: "Crusting and runoff are signs of poor soil; a soil test tells you for sure what it needs." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Getting a soil test and taking a good sample",
          minutes: 5,
          goal: "Take a soil sample the right way and know where to send it for testing.",
          text: [
            "A soil test tells you what your eyes cannot: how acidic the soil is (pH) and how much of the main nutrients it holds. Many soils in wetter parts of Kenya, Nigeria and Ghana are acidic, which locks nutrients away from the crop; a test tells you whether lime would help. Without a test, you may spend money on the wrong fertilizer.",
            "Where to get a test: in Kenya, KALRO runs soil laboratories (for example its soil fertility laboratory at Kabete, Nairobi) and some counties have their own soil labs. In Ghana, the CSIR-Soil Research Institute at Kwadaso, Kumasi offers laboratory analysis. In Nigeria and elsewhere, ask your state or county extension office, agricultural university or research institute. Fees, lab locations and waiting times change, so call or check before you go.",
            "KALRO's own guide says sampling is the biggest source of error in a soil test. One handful from one spot does not represent a field. Take many small samples across the field, mix them, and send one clean mixed sample for each field or each part that looks different."
          ],
          steps: ["Choose one field (or one part that looks the same).", "Walk in a zigzag and take 10 to 20 small samples, top 15 to 20 cm, with a clean spade or auger.", "Avoid odd spots: old manure heaps, ash, paths, anthills, fertilizer bands.", "Mix all samples well in a clean bucket (not a fertilizer bag).", "Take about half a kilo of the mix, air-dry it in shade, and label it: name, field, date, crop planned.", "Take it to the lab before planting so results arrive in time."],
          words: [["pH", "a number that shows how acidic or alkaline soil is; most crops like it near neutral."], ["Acidic soil", "soil with a low pH that locks up nutrients such as phosphorus."], ["Lime", "a ground rock product that makes acidic soil less acidic."], ["Composite sample", "many small samples from one field mixed into one."]],
          slides: [
            { title: "Why test?", bullets: ["Shows pH and main nutrients", "Tells you if lime would help", "Stops money going on the wrong fertilizer"] },
            { title: "Where to test", bullets: ["Kenya: KALRO labs (e.g. Kabete) and some county labs", "Ghana: CSIR-Soil Research Institute, Kumasi", "Elsewhere: extension office, university, research institute"] },
            { title: "Take a good sample", bullets: ["Zigzag, 10 to 20 spots, top 15 to 20 cm", "Avoid manure heaps, ash, paths, anthills", "Mix in a clean bucket; send about half a kilo"] },
            { title: "Label and time it", bullets: ["Name, field, date, crop planned", "Air-dry in shade", "Send before planting; check fees and lab first"] }
          ],
          sources: [KALRO, KALRO_SAMPLING, CSIR_SRI],
          tryIt: "Find the nearest place that tests soil: call your extension officer or check KALRO, CSIR-SRI or your state research institute. Write its name, fee and waiting time. Then mark on a sketch of your field the zigzag path you will walk to sample it.",
          youCanNow: "take a proper mixed soil sample and know where to get it tested.",
          quickCheck: [
            { objective: "O2", q: "What does soil pH tell you?", options: ["How acidic the soil is", "How many worms it has", "How deep the roots go", "How much rain fell"], answer: 0, why: "pH shows how acidic the soil is; acidic soil locks nutrients away and may need lime." },
            { objective: "O2", q: "One part of your field is waterlogged and the rest is dry and sandy. How do you sample?", options: ["One handful from the middle", "Mix the wet and dry parts into one sample", "Send a separate mixed sample for each part that looks different", "Sample only near the manure heap"], answer: 2, why: "Each field, or each part that looks different, gets its own clean mixed sample." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Building organic matter with compost and manure",
          minutes: 5,
          goal: "Make a compost heap and use manure safely to build soil organic matter.",
          text: [
            "Organic matter is the dark, decayed remains of plants and animals in the soil. FAO calls it the key to drought-resistant soil: it holds water like a sponge, feeds earthworms and soil life, holds nutrients so rain does not wash them away, and makes soil crumbly so roots can grow.",
            "You add organic matter by leaving crop residues on the field instead of burning them, by adding manure and compost, and by growing legumes and cover crops. Burning residues and ploughing again and again both use up organic matter.",
            "Compost is easy to make: build a heap or pit with layers of dry material (maize stalks, dry grass), green material (fresh weeds, leaves, kitchen waste) and manure, with a little soil between layers. Keep it moist like a squeezed sponge, and turn it every two to three weeks. It is ready in about two to three months when it is dark, crumbly and smells like soil. Let fresh manure rot before use; fresh, hot manure can burn seedlings."
          ],
          steps: ["Choose a shaded spot near the field and water.", "Lay a base of coarse stalks for air.", "Add layers: dry material, green material, manure, a little soil; repeat.", "Water each layer so it is moist, not soaking.", "Push a stick into the heap; if it is warm, it is working.", "Turn the heap every two to three weeks.", "Use when dark and crumbly, in planting holes or rows."],
          words: [["Organic matter", "decayed plant and animal material in soil that holds water and nutrients."], ["Compost", "rotted plant and animal waste used to feed the soil."], ["Crop residues", "stalks, leaves and husks left after harvest."], ["Cover crop", "a crop grown mainly to cover and feed the soil."]],
          slides: [
            { title: "Why organic matter matters", bullets: ["Holds water like a sponge (FAO)", "Feeds soil life and holds nutrients", "Makes soil crumbly for roots"] },
            { title: "Add it, do not burn it", bullets: ["Leave crop residues; do not burn", "Add manure and compost", "Grow legumes and cover crops"] },
            { title: "Make compost", bullets: ["Layers: dry, green, manure, a little soil", "Moist like a squeezed sponge", "Turn every two to three weeks; ready in 2 to 3 months"] },
            { title: "Manure safely", bullets: ["Let fresh manure rot first", "Fresh, hot manure can burn seedlings", "Wash hands after handling"] }
          ],
          sources: [FAO_SOM],
          tryIt: "Start a compost heap or pit this week with what you have: stalks, weeds, kitchen waste and manure. Write the date, the layers you used, and a reminder in your phone to turn it in two weeks.",
          youCanNow: "make compost, use manure safely, and explain how organic matter helps your soil.",
          quickCheck: [
            { objective: "O3", q: "What goes into a compost heap?", options: ["Only plastic and tins", "Only fresh manure", "Layers of dry material, green material and manure, with a little soil between", "Only ash from burned residues"], answer: 2, why: "Compost is built in layers of dry material, green material and manure, kept moist and turned." },
            { objective: "O3", q: "After about three months your compost is dark, crumbly and smells like soil. What do you do?", options: ["Use it; it is ready", "Burn it", "Throw it away", "Leave it for two more years"], answer: 0, why: "Compost is ready when it is dark, crumbly and smells like soil, after about two to three months." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Knowing and feeding your soil",
        questions: [
          { objective: "O1", q: "You wet a ball of soil and it feels gritty and falls apart. What kind of soil is it most likely?", options: ["Clay", "Sandy", "Loam", "Peat"], answer: 1, why: "Gritty soil that falls apart is sandy; it drains fast and loses nutrients." },
          { objective: "O1", q: "Young maize has purple leaves. What is the best next step?", options: ["Buy any fertilizer at once", "Burn the field", "Treat it as a clue and confirm with a soil test", "Pull up the crop"], answer: 2, why: "Leaf colour is a clue, not proof; a soil test tells you for sure." },
          { objective: "O2", q: "How should you take a soil sample from a field?", options: ["One handful from the best spot", "Soil from the old manure heap", "Soil from the path, where it is easy to dig", "10 to 20 small samples in a zigzag, mixed into one"], answer: 3, why: "A mixed sample from many spots represents the whole field; KALRO says sampling is the biggest source of error." },
          { objective: "O2", q: "In Ghana, which institute offers laboratory soil analysis?", options: ["CSIR-Soil Research Institute, Kumasi", "The national football association", "The meteorological agency", "The post office"], answer: 0, why: "The CSIR-Soil Research Institute at Kwadaso, Kumasi offers laboratory analysis." },
          { objective: "O3", q: "What should you do with maize stalks after harvest to build soil health?", options: ["Burn them", "Leave them or compost them", "Throw them in the river", "Sell them all every season"], answer: 1, why: "Residues left on the field or composted add organic matter; burning uses it up." }
        ]
      }
    },
    {
      name: "Chapter 2: Keeping soil healthy season after season",
      lessons: [
        {
          objectives: ["O4"],
          title: "Crop rotation and intercropping with legumes",
          minutes: 5,
          goal: "Plan a three-season rotation and a legume intercrop for one field.",
          text: [
            "Growing the same crop on the same field every season drains the same nutrients and builds up its pests, diseases and weeds. Crop rotation means changing the crop on a field from season to season, for example maize, then beans or groundnut, then sorghum or cassava.",
            "Legumes such as beans, cowpea, groundnut, soybean and pigeon pea work with bacteria in small lumps (nodules) on their roots to take nitrogen from the air. Some of that nitrogen stays in roots and leaves for the next crop, especially if you leave the residues on the field.",
            "Intercropping means growing two crops together, such as maize with beans, sorghum with cowpea, or cassava with groundnut. It covers the soil, spreads risk, and can give more total food from the same land. Keep spacing that lets both crops get light, and plant the legume early enough to establish."
          ],
          steps: ["List the fields you farm and what grew on each last season.", "Plan the next three seasons so no field has the same crop twice in a row.", "Put a legume in each field at least once in three seasons.", "Choose one intercrop pair, such as maize and beans.", "Leave legume residues on the field after harvest."],
          words: [["Crop rotation", "changing the crop grown on a field from one season to the next."], ["Legume", "a plant such as beans, cowpea or groundnut that can add nitrogen to the soil."], ["Nodules", "small lumps on legume roots where bacteria fix nitrogen from the air."], ["Intercropping", "growing two or more crops together on the same field."]],
          slides: [
            { title: "Why rotate", bullets: ["Same crop every season drains the same nutrients", "Pests, diseases and weeds build up", "Example: maize, then beans, then sorghum"] },
            { title: "Legumes feed the soil", bullets: ["Beans, cowpea, groundnut, soybean, pigeon pea", "Root nodules take nitrogen from the air", "Leave residues so the next crop benefits"] },
            { title: "Intercrop", bullets: ["Maize + beans, sorghum + cowpea, cassava + groundnut", "Covers soil and spreads risk", "Space so both crops get light"] }
          ],
          sources: [FAO_SOM],
          tryIt: "Draw a simple table: your fields down the side, the next three seasons across the top. Fill in a crop for each box so that every field gets a legume once and no field repeats a crop. Dig up one bean or groundnut plant and look for nodules on the roots.",
          youCanNow: "plan a crop rotation and a legume intercrop that feed your soil.",
          quickCheck: [
            { objective: "O4", q: "What are nodules on legume roots?", options: ["Signs of disease", "Small lumps where bacteria take nitrogen from the air", "Insect eggs", "Stones in the soil"], answer: 1, why: "Legumes work with bacteria in root nodules to take nitrogen from the air." },
            { objective: "O4", q: "You plant maize and beans together, but the beans get no light. What do you change?", options: ["Stop growing beans", "Burn the maize", "Add more seed", "Use spacing that lets both crops get light, and plant the beans early enough"], answer: 3, why: "Intercrops need spacing that lets both crops get light, with the legume planted early enough to establish." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Mulching and stopping erosion",
          minutes: 5,
          goal: "Choose and lay out mulch and simple erosion controls for a sloping field.",
          text: [
            "Bare soil is lost soil. Heavy rain knocks soil loose and runoff carries the richest top layer away. Mulch, a layer of crop residues, dry grass or leaves on the soil surface, softens the rain, keeps soil moist and cool, and feeds the soil as it rots. FAO notes that on slopes much more of the ground needs to be covered by residues to stop erosion than on flat land.",
            "On slopes, work across the slope, never up and down it. Plant and ridge along the contour (a line at the same height across the slope). FAO describes contour ridges as a good method for smallholders with hand tools or oxen, and grass strips (for example Napier grass) along the contour as a cheap alternative to terraces; the grass can also feed livestock.",
            "On steeper land, stone lines, contour bunds and bench terraces (such as fanya juu terraces in Kenya) hold soil and water. They take work to build and keep up, and lines laid out wrongly can make erosion worse, so ask your extension officer to help mark the contour."
          ],
          steps: ["Walk the field after rain and mark where water runs and soil is washed.", "Mark contour lines across the slope with a simple A-frame or water-tube level, or with help from extension.", "Plant, ridge and weed along the contour lines.", "Plant grass strips or build stone lines or bunds along some contours.", "Cover the soil between rows with mulch.", "Check and repair after each heavy rain."],
          words: [["Mulch", "a layer of residues, grass or leaves spread on the soil surface."], ["Erosion", "soil being washed or blown away."], ["Contour", "a line across a slope where every point is at the same height."], ["Terrace", "a level step cut into a slope to hold soil and water."]],
          slides: [
            { title: "Bare soil is lost soil", bullets: ["Rain knocks soil loose; runoff carries it off", "Mulch softens rain and keeps soil moist", "Slopes need more ground cover"] },
            { title: "Work across the slope", bullets: ["Never plough up and down", "Ridge and plant along the contour", "Grass strips: cheap, and feed for livestock"] },
            { title: "Steeper land", bullets: ["Stone lines, contour bunds, terraces", "Lay out lines carefully; ask extension", "Repair after heavy rain"] }
          ],
          sources: [FAO_RUNOFF, FAO_MECH],
          tryIt: "After the next rain, walk your field and mark on a sketch where water runs and soil is washed. Choose one control (mulch, contour ridges, grass strip or stone line) for the worst spot and write when you will put it in.",
          youCanNow: "spot erosion on your farm and choose mulch and contour controls to stop it.",
          quickCheck: [
            { objective: "O5", q: "What is a contour line?", options: ["A line straight up the slope", "A fence", "A road", "A line at the same height across a slope"], answer: 3, why: "A contour is a line at the same height across the slope; ridges and grass strips follow it." },
            { objective: "O5", q: "You want to build fanya juu terraces on a steep field. What do you do first?", options: ["Ask your extension officer to help mark the contour", "Dig straight up and down the slope", "Start anywhere and adjust later", "Remove all grass first"], answer: 0, why: "Lines laid out wrongly can make erosion worse, so get help marking the contour." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Fertilizer basics: right source, rate, time and place",
          minutes: 6,
          goal: "Write a fertilizer plan for one crop using the 4Rs.",
          text: [
            "Crops need nitrogen (N), phosphorus (P) and potassium (K), plus smaller amounts of other nutrients. Mineral fertilizer gives them quickly and in known amounts. The 4R idea, used in extension across Africa, helps you get the most from every bag: the right source, at the right rate, at the right time, in the right place.",
            "Right source: the product that supplies what your soil test says is missing (for example a phosphorus fertilizer at planting, a nitrogen fertilizer for topdressing, and lime if the soil is acidic). Right rate: the amount your soil test and local recommendation give for your crop and target yield; more is not always better and wastes money. Right time: when the crop needs it, for example nitrogen topdressing on maize at about knee height, when the soil is moist. Right place: close to the roots, such as in the planting hole or a band beside the row, not touching the seed, and covered so rain does not wash it away.",
            "Use fertilizer together with organic matter; the two work better than either alone. Buy sealed bags from registered agro-dealers and check the label. A phone AI assistant can help you understand a soil test report in plain words, but the rates come from the lab, your extension officer or the official recommendation for your area."
          ],
          steps: ["Read your soil test or local recommendation for the crop.", "Source: write which product supplies each missing nutrient (and lime if needed).", "Rate: write the amount per acre or hectare that the recommendation gives.", "Time: mark planting and topdressing dates on your calendar.", "Place: plan to put it in the hole or band, not touching seed, and cover it.", "Buy sealed bags from a registered agro-dealer; keep the receipt."],
          words: [["NPK", "nitrogen (N), phosphorus (P) and potassium (K), the three main crop nutrients."], ["4Rs", "right source, right rate, right time, right place for fertilizer."], ["Topdressing", "adding fertilizer, usually nitrogen, to a growing crop."], ["Agro-dealer", "a shop that sells seed, fertilizer and other farm inputs."]],
          slides: [
            { title: "The 4Rs", bullets: ["Right source: what your soil is missing", "Right rate: the recommended amount", "Right time: when the crop needs it", "Right place: near the roots, covered"] },
            { title: "Example: maize", bullets: ["Phosphorus fertilizer in the planting hole, not touching seed", "Nitrogen topdressing at about knee height, soil moist", "Lime if the test says the soil is acidic"] },
            { title: "Get your money's worth", bullets: ["More is not always better", "Combine with compost and manure", "Sealed bags from registered agro-dealers"] },
            { title: "AI can explain, not prescribe", bullets: ["Ask a phone AI to explain your soil report simply", "Rates come from the lab or extension officer"] }
          ],
          sources: [HANDBOOK_4R, KALRO],
          tryIt: "Final task: write your one-page soil plan for one field. Include what your field check found, your soil test plan or results, how you will add organic matter, your rotation or intercrop, how you will stop erosion, and a fertilizer line for each nutrient: source, rate, time and place.",
          youCanNow: "use fertilizer by the 4Rs and put together a full one-season soil plan for your field.",
          quickCheck: [
            { objective: "O6", q: "What does \"right source\" mean in the 4Rs?", options: ["The cheapest bag in the shop", "The bag with the brightest label", "The product that supplies what your soil test says is missing", "Any fertilizer a neighbour used"], answer: 2, why: "The right source supplies the nutrients your soil test says are missing." },
            { objective: "O6", q: "A seller offers cheap fertilizer from an open sack with no label. What do you do?", options: ["Buy it because it is cheap", "Buy sealed, labelled bags from a registered agro-dealer instead", "Mix it with your own fertilizer", "Buy double the amount"], answer: 1, why: "Buy sealed bags from registered agro-dealers and check the label." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Keeping soil healthy season after season",
        questions: [
          { objective: "O4", q: "Why do legumes such as beans help the next crop?", options: ["They kill all weeds", "Their roots work with bacteria to add nitrogen", "They make the soil more acidic", "They need no rain"], answer: 1, why: "Root nodules fix nitrogen from the air; some stays in the soil for the next crop." },
          { objective: "O4", q: "Which plan is a good crop rotation?", options: ["Maize, then beans, then sorghum", "Maize, then maize, then maize", "Tomatoes after tomatoes every season", "Leave the field bare every other season"], answer: 0, why: "Changing crops and including a legume breaks pest cycles and feeds the soil." },
          { objective: "O5", q: "On a sloping field, how should you plough and plant?", options: ["Straight up and down the slope", "In circles", "Across the slope, along the contour", "Only at the top"], answer: 2, why: "Working along the contour slows runoff and keeps soil in place." },
          { objective: "O6", q: "What does \"right time\" mean for nitrogen topdressing on maize?", options: ["Any time you have spare money", "Before you buy seed", "After harvest", "When the crop needs it, around knee height, with moist soil"], answer: 3, why: "Nitrogen is used best when the growing crop needs it and the soil is moist." },
          { objective: "O6", q: "Where is the right place for planting fertilizer?", options: ["On top of the seed", "Close to the roots, not touching seed, and covered", "Spread on the road", "In the compost heap"], answer: 1, why: "Placing fertilizer near the roots, covered and not touching seed, uses it best and avoids burning seed." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Soil Health and Fertility",
    questions: [
      { objective: "O1", q: "Which is a sign of healthy soil?", options: ["Pale and hard with a crust", "Dark, crumbly, with earthworms", "Always waterlogged", "Rain runs straight off"], answer: 1, why: "Dark, crumbly soil with earthworms is healthy." },
      { objective: "O1", q: "Soil that is sticky and rolls into a long ribbon is mostly:", options: ["Sand", "Gravel", "Clay", "Ash"], answer: 2, why: "Sticky soil that forms a ribbon is high in clay." },
      { objective: "O1", q: "A field has a lot of striga (witchweed). This is often a sign of:", options: ["Tired, low-fertility soil", "Too much compost", "Perfect soil", "Too much shade"], answer: 0, why: "Striga is common on poor, tired soils." },
      { objective: "O2", q: "What does a lab soil test tell you that your eyes cannot?", options: ["The colour of the soil", "How many worms there are", "Where water runs", "pH and nutrient levels"], answer: 3, why: "A soil test measures acidity and nutrients." },
      { objective: "O2", q: "In Kenya, which national institute runs soil testing laboratories?", options: ["KALRO", "Kenya Power", "Kenya Airways", "The Kenya Wildlife Service"], answer: 0, why: "KALRO, the Kenya Agricultural and Livestock Research Organization, runs soil labs such as the one at Kabete." },
      { objective: "O2", q: "When taking a soil sample, which spot should you avoid?", options: ["The middle of the field", "A zigzag point", "The edge of a planting row", "An old manure heap or ash pile"], answer: 3, why: "Odd spots give a false picture of the field." },
      { objective: "O2", q: "What should you put soil samples in to mix them?", options: ["An old fertilizer bag", "A clean bucket", "A used chemical container", "Your pocket"], answer: 1, why: "A clean bucket keeps the sample free of fertilizer or chemicals that would spoil the result." },
      { objective: "O3", q: "According to FAO, soil organic matter is key because it:", options: ["Makes soil harder", "Removes all nutrients", "Holds water and nutrients like a sponge", "Stops roots growing"], answer: 2, why: "Organic matter holds water and nutrients and feeds soil life." },
      { objective: "O3", q: "How moist should a compost heap be?", options: ["Bone dry", "Flooded with water", "Moist like a squeezed sponge", "It does not matter"], answer: 2, why: "Compost needs moisture without being soaked." },
      { objective: "O3", q: "Why should you let fresh manure rot before using it near seedlings?", options: ["Fresh, hot manure can burn seedlings", "Rotted manure is heavier", "Fresh manure has no nutrients", "It is the law everywhere"], answer: 0, why: "Fresh manure can be too strong and hot for young plants." },
      { objective: "O3", q: "Which practice uses up soil organic matter?", options: ["Adding compost", "Burning crop residues", "Growing legumes", "Mulching"], answer: 1, why: "Burning destroys residues that would have fed the soil." },
      { objective: "O4", q: "Which is a legume?", options: ["Maize", "Sorghum", "Cassava", "Cowpea"], answer: 3, why: "Cowpea is a legume that can add nitrogen to soil." },
      { objective: "O4", q: "Growing maize and beans together on the same field is called:", options: ["Intercropping", "Liming", "Terracing", "Topdressing"], answer: 0, why: "Growing two crops together is intercropping." },
      { objective: "O4", q: "Why rotate crops instead of growing the same crop every season?", options: ["To use more fertilizer", "To make weeding harder", "To break pest and disease build-up and balance nutrients", "Because the law requires it"], answer: 2, why: "Rotation breaks pest cycles and stops one crop draining the same nutrients." },
      { objective: "O5", q: "What does mulch do?", options: ["Makes the soil hotter and drier", "Kills earthworms", "Replaces all fertilizer", "Softens rain, keeps soil moist and feeds it"], answer: 3, why: "Mulch protects and feeds the soil." },
      { objective: "O5", q: "A cheap way to slow erosion on a gentle slope, which can also feed livestock, is:", options: ["Grass strips along the contour", "Ploughing up and down the slope", "Burning the field", "Removing all plants"], answer: 0, why: "FAO describes grass strips as a cheap alternative to terraces." },
      { objective: "O5", q: "Why ask an extension officer to help mark contour lines?", options: ["It is not needed at all", "Contour lines must be painted", "Badly laid-out lines can make erosion worse", "Extension officers own the land"], answer: 2, why: "Lines that are not truly level can channel water and increase erosion." },
      { objective: "O6", q: "Which is NOT one of the 4Rs of fertilizer use?", options: ["Right source", "Right rate", "Right place", "Right colour"], answer: 3, why: "The 4Rs are source, rate, time and place." },
      { objective: "O6", q: "Where should the fertilizer rate for your crop come from?", options: ["A guess", "Your soil test and local recommendation", "Whatever your neighbour used", "The biggest bag in the shop"], answer: 1, why: "Rates should match your soil and the official recommendation." },
      { objective: "O6", q: "You ask a phone AI assistant about your soil test. What is the right way to use it?", options: ["To explain the report in plain words, then check rates with the lab or extension", "To choose fertilizer rates instead of the lab", "To send it your bank details", "To replace the soil test"], answer: 0, why: "AI can explain, but rates come from the lab, extension officer or official recommendation." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      1,
      3,
      5,
      7,
      10,
      12,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part of the plan and check it again.",
    criteria: [
      {
        name: "Field check and soil test",
        objective: "O2",
        notYet: "No field check, or no plan for a soil test.",
        meets: "Field check results written down, with when and where a soil test will be taken, or what it said.",
        exceeds: "Uses the soil test results to shape the rest of the plan."
      },
      {
        name: "Organic matter",
        objective: "O3",
        notYet: "No organic matter added, or residues burned.",
        meets: "A plan to keep residues and add compost or rotted manure, with timing.",
        exceeds: "Includes a compost heap already started on the farm."
      },
      {
        name: "Rotation and legumes",
        objective: "O4",
        notYet: "The same crop every season, with no legume.",
        meets: "A three-season rotation or a legume intercrop with sensible spacing.",
        exceeds: "Both a rotation and an intercrop, with residues left on the field."
      },
      {
        name: "Cover and erosion",
        objective: "O5",
        notYet: "Soil left bare, or working up and down the slope.",
        meets: "Mulch or cover, and erosion controls along the contour where the field slopes.",
        exceeds: "Names who will help mark the contour and how the controls will be kept up."
      },
      {
        name: "Fertilizer by the 4Rs",
        objective: "O6",
        notYet: "Fertilizer is listed with no rate source, timing or placement.",
        meets: "Source, rate, time and place written for each product, with rates from a soil test or local recommendation.",
        exceeds: "Combines fertilizer with organic matter and notes where the rate came from."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and score Meets or Exceeds on every rubric row of the soil plan",
      "Learners who report taking a soil test, starting compost or planting a legume within one season (follow-up survey)",
      "Change in yield or fertilizer spending reported by learners or their group after one season",
      "Learners who start another Koach Learn farming course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A spade, a clean bucket and a notebook",
      "A field to check, ideally the learner's own",
      "A basic phone to call a soil lab or extension office",
      "About 60 minutes in total, in short sessions, plus time in the field and to write the soil plan"
    ],
    facilitatorNotes: [
      "In a farmer group or field school: take the pre-test together, then do the field check and texture test in a real field.",
      "Practise taking a mixed soil sample together, and find the nearest lab and its current fee before the session.",
      "Build a small compost heap as a group to show the layers.",
      "Do not give fertilizer rates yourself; invite an extension officer or use the local recommendation.",
      "Score the soil plan with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
