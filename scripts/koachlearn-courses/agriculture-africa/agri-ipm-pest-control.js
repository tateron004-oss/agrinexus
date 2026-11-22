"use strict";

// Koach Learn course: Agriculture (Africa) -> "Integrated Pest Management and Organic Pest Control" (added 29 October 2026 at the owner's request: "can you add learning for farmers in africa that include these classes and beyond").
// Goes much deeper than the one IPM lesson in agri-crop-horticulture: the IPM steps, scouting and identifying fall armyworm and Tuta absoluta, action thresholds and records, push-pull (icipe), natural enemies,
// traps, botanical and biological options, and pesticides only as the last step (registered products, the label, protective equipment, resistance). Written in the ADDIE format (see README).
// No product names, rates or pre-harvest intervals: students are sent to extension, the label and the national pesticide regulator.

const FAO_IPM = { name: "FAO: Integrated Pest Management", url: "https://www.fao.org/pest-and-pesticide-management/ipm/integrated-pest-management/en/" };
const CIMMYT_FAW = { name: "CIMMYT, USAID and partners: Fall Armyworm in Africa: A Guide for Integrated Pest Management (2018)", url: "https://repository.cimmyt.org/handle/10883/19204" };
const FAO_FAMEWS = { name: "FAO: mobile application to support the fight against Fall Armyworm in Africa (FAMEWS)", url: "https://www.fao.org/newsroom/detail/FAO-launches-mobile-application-to-support-fight-against-Fall-Armyworm-in-Africa/en" };
const ICIPE_TUTA = { name: "icipe: Insect of the Month: Tomato leafminer, Tuta absoluta", url: "https://www.icipe.org/news/insect-month-february-tomato-leafminer-tuta-absoluta" };
const ICIPE_PP_FAW = { name: "icipe: Push-pull technology halts fall armyworm", url: "https://www.icipe.org/news/icipe-push-pull-technology-halts-fall-armyworm-rampage" };
const ICIPE_PP_HOW = { name: "icipe: New study unravels how push-pull conquers fall armyworm (how desmodium and brachiaria work)", url: "https://www.icipe.org/news/new-study-unravels-mechanisms-through-which-icipe-push-pull-technology-conquers-fall-armyworm" };
const ICIPE_PP_GUIDE = { name: "icipe: Climate-Smart Push-Pull farmer guide (revised edition)", url: "https://technologytransfer.icipe.org/wp-content/uploads/2021/04/Climate_Smart_Push-Pull_English_Revised_Edition_Web_Version.pdf" };
const PCPB = { name: "Pest Control Products Board (Kenya)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "National Agency for Food and Drug Administration and Control (NAFDAC, Nigeria)", url: "https://www.nafdac.gov.ng" };
const GHANA_EPA = { name: "Environmental Protection Authority (Ghana)", url: "https://www.epa.gov.gh" };
const CILSS_CSP = { name: "CILSS / INSAH: Sahelian Pesticides Committee (CSP) registration guide", url: "https://insah.cilss.int/wp-content/uploads/2023/08/GUIDE_CSP_FINAL_nov_2017_anglais.pdf" };

module.exports = {
  id: "agri-ipm-pest-control",
  category: "Agriculture (Africa)",
  name: "Integrated Pest Management and Organic Pest Control",
  skills: "Preventing pests before they start, Scouting and identifying fall armyworm and Tuta absoluta, Deciding when to act with thresholds and records, Using push-pull, natural enemies, traps and biological controls, Using pesticides safely and legally as a last step",
  outcome: "write and run an integrated pest management (IPM) plan for one crop on your farm: prevent pests, scout every week, decide with a threshold when to act, use non-chemical controls first, and use a registered pesticide safely only when it is truly needed.",
  about: [
    "This course is for smallholder and growing commercial farmers, farm workers, young agripreneurs and extension workers who are tired of spraying again and again and still losing crops. The examples are maize, sorghum, beans and tomatoes in Kenya, Nigeria, Ghana and Burkina Faso.",
    "Chapter 1 teaches you to stop pests early: the four IPM steps (prevent, monitor, decide, act), how to scout a field and tell fall armyworm and the tomato leafminer (Tuta absoluta) from other damage, and how to use a threshold and simple records to decide when action pays. Chapter 2 teaches control with less poison: push-pull from icipe, natural enemies, traps, botanical and biological products, and, as the last step, safe and legal pesticide use that also slows resistance.",
    "Each lesson takes about five minutes and ends with a \"Try it now\" task in your own field. Pests and the products allowed differ by country, so use this course with your extension officer, a plant clinic and your national pesticide regulator. A short quick check follows every lesson, a knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Write a one-season IPM plan for one crop on your own farm (for example half an acre of maize, or a tomato plot): the main pests and diseases to expect, at least three prevention steps, a weekly scouting routine with a record sheet, the action threshold you got from extension for each main pest, the non-chemical controls you will use first, and a last-step pesticide plan (a product checked on your regulator's list, the label rules you will follow, the protective equipment you will wear, and how you will rotate groups to slow resistance).",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Smallholder and growing commercial farmers, farm workers, young agripreneurs and extension workers across Africa, growing maize, sorghum, rice, beans, groundnuts, vegetables and tomatoes. Many have faced fall armyworm since it reached Africa in 2016, and tomato growers have faced Tuta absoluta.",
    startingPoint: "Can name some pests and usually spray when they see damage, often with whatever the agro-dealer suggests. Few scout on a schedule, keep pest records, use thresholds, or know which natural enemies help them. Many spray without full protective equipment.",
    gap: "Spraying by habit costs money, kills natural enemies, breeds resistance, harms health and can leave residues that buyers reject. Learners need to prevent pests, scout and record, act only when a threshold says it pays, use non-chemical controls first, and use registered pesticides safely as the last step.",
    constraints: [
      "Reading level: plain words and short sentences; many learners use English as a second language and the course is also available in Spanish, French and Arabic",
      "Devices: a basic or smart phone; a hand lens helps but is not essential",
      "Time: about 5-minute lessons that fit around field work; practice happens in the learner's own field",
      "Rules differ by country: products must be on the national regulator's list (for example PCPB in Kenya, NAFDAC in Nigeria, the EPA in Ghana, the Sahelian Pesticides Committee for CILSS countries such as Senegal and Burkina Faso)",
      "Safety: the course never gives product names, rates or pre-harvest intervals; learners follow the label and their extension officer"
    ],
    prerequisites: "None. \"Sustainable Crop and Horticultural Production\" gives a short overview of IPM first, and \"Soil Health and Fertility\" helps with prevention."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "For one crop on your own farm", action: "list prevention steps that keep pests from building up before the season starts", standard: "naming at least three steps that fit your crop" },
    { id: "O2", condition: "Walking your own field once a week", action: "scout a set number of plants and identify fall armyworm, Tuta absoluta and common natural enemies from their signs", standard: "checking at least 50 plants (or 20 tomato plants) and recording what you find" },
    { id: "O3", condition: "Given your scouting counts and a threshold from extension", action: "decide whether to act now or keep watching, and record the decision", standard: "matching the threshold rule every time" },
    { id: "O4", condition: "Given a pest problem on your crop", action: "choose and set up non-chemical controls such as push-pull, natural enemies, traps and biological products", standard: "before any synthetic pesticide is used" },
    { id: "O5", condition: "When a pesticide is truly needed", action: "check that the product is registered, follow its label and wear the protective equipment it lists", standard: "with no step skipped" },
    { id: "O6", condition: "Across a season of spraying decisions", action: "rotate pesticide groups and keep a spray record to slow resistance", standard: "never using the same group on the same pest generation twice in a row" }
  ],
  chapters: [
    {
      name: "Chapter 1: Stopping pests early",
      lessons: [
        {
          title: "The four IPM steps, starting with prevention",
          objectives: ["O1"],
          minutes: 5,
          goal: "List the prevention steps that keep pests from building up on one of your crops.",
          text: [
            "FAO describes integrated pest management (IPM) as looking at all the ways to control pests, combining the right ones, and using pesticides only when they are justified. It works in four steps: prevent, monitor, decide and act. Most of the savings come from the first step.",
            "Prevention means making the field a bad home for pests and a good home for the crop. Plant certified seed of a variety suited to your area, and resistant or tolerant varieties where they exist. Rotate crops so pests that live in the soil or on residues lose their food: for example, maize, then beans, then sorghum. Plant on time and all at once with your neighbours, so pests do not move from late fields to early ones. Feed the soil, because weak plants are attacked first.",
            "Keep the field clean: remove and destroy plants with virus or disease, take out volunteer plants and weeds that host pests, and clean tools and boots. In tomatoes, raise seedlings in a clean, netted nursery so they go to the field free of Tuta absoluta and whiteflies. Leave flowering borders and hedges, because they feed the insects that eat pests.",
            "A farmer in Ghana who rotates maize with groundnuts, plants early with her neighbours and pulls sick plants each week often sprays far less than one who plants maize on the same plot every season."
          ],
          steps: ["Write down the main pests and diseases of your crop (ask extension or a plant clinic).", "Choose certified seed of a suitable, resistant or tolerant variety.", "Plan a rotation and plant on time, at the same time as your neighbours.", "Plan field hygiene: remove sick plants, volunteers and host weeds; clean tools.", "Leave flowering borders for natural enemies."],
          words: [["IPM", "integrated pest management: preventing pests, watching for them, deciding when action pays, and combining many controls, with pesticides only when justified."], ["Prevention", "steps taken before pests arrive so they cannot build up."], ["Rotation", "growing a different crop on the same plot each season."], ["Volunteer plant", "a crop plant that grows by itself from last season's seed and can carry pests."]],
          slides: [
            { title: "IPM in four steps", bullets: ["1. Prevent", "2. Monitor (scout)", "3. Decide: does action pay?", "4. Act: non-chemical first, pesticide last"] },
            { title: "Prevention starts with the seed", bullets: ["Certified seed of a suitable variety", "Resistant or tolerant varieties where they exist", "Feed the soil: weak plants are attacked first"] },
            { title: "Starve the pests", bullets: ["Rotate: maize, then beans, then sorghum", "Plant on time, together with neighbours", "Remove volunteers and host weeds"] },
            { title: "Keep it clean", bullets: ["Pull and destroy sick plants", "Clean tools and boots", "Netted, clean tomato nursery", "Flowering borders feed natural enemies"] }
          ],
          sources: [FAO_IPM],
          tryIt: "Pick one crop you will grow next season. Write its three worst pests or diseases, then write at least three prevention steps you will take before planting (seed, rotation, timing, hygiene, borders).",
          youCanNow: "name the four IPM steps and list prevention steps that keep pests from building up on your crop.",
          quickCheck: [
            { objective: "O1", q: "Which IPM step usually saves a farmer the most money?", options: ["Spraying every week", "Buying a stronger product", "Prevention before pests arrive", "Spraying the neighbour's field"], answer: 2, why: "Prevention stops pests building up, so fewer controls are needed later." },
            { objective: "O1", q: "Your maize had heavy pest damage on the same plot three seasons running. What prevention step fits best?", options: ["Rotate the plot to beans or groundnuts next season", "Plant maize later than your neighbours", "Leave last season's maize stalks standing", "Plant uncertified seed saved from damaged cobs"], answer: 0, why: "Rotation breaks the pest's cycle by taking away its food plant." }
          ]
        },
        {
          title: "Scouting and identifying fall armyworm and Tuta absoluta",
          objectives: ["O2"],
          minutes: 6,
          goal: "Scout a field on a set path and identify fall armyworm, Tuta absoluta and natural enemies from their signs.",
          text: [
            "Scouting means walking your field on a schedule and checking a set number of plants, so you see trouble early and can count it. Scout at least once a week, more often for young maize and for tomatoes. Walk a W or zigzag path so you check the whole field, not only the edges. In maize, stop at five places and check 10 plants in a row at each, 50 plants in total. In a small tomato plot, check 20 plants spread across the beds.",
            "Fall armyworm arrived in Africa in 2016 and is now found in most of the continent. On young maize, look for small \"window panes\" (thin, see-through patches) on the leaves, then ragged holes and wet, sawdust-like droppings in the funnel (whorl). The caterpillar has a pale upside-down Y on its head and four dark spots in a square near its tail. Egg masses sit on leaves under a layer of fuzzy scales. A plant counts as infested if it has fresh damage or a live caterpillar.",
            "Tuta absoluta, the tomato leafminer, came from South America and spread across Africa within a few years; icipe reports that in northern Nigeria in 2016 it destroyed most of the tomato crop. Its tiny caterpillars tunnel inside leaves, making pale, see-through blotches (mines) with dark droppings, and bore small holes into stems and fruit. The adult is a small grey-brown moth that hides in the day.",
            "Also look for friends: ladybirds and their larvae, lacewings, spiders, earwigs, ants and small parasitic wasps, and caterpillars that look sick, soft or covered in fungus. FAO notes that natural enemies already kill many fall armyworm caterpillars in African fields. If you are not sure what you see, take a clear photo and ask an extension officer or plant clinic; in some countries FAO's FAMEWS app records fall armyworm sightings."
          ],
          steps: ["Choose a scouting day each week and carry a notebook or phone.", "Walk a W path; stop at 5 places in maize (10 plants each) or 20 tomato plants spread out.", "On each plant, check leaves, the funnel or growing tip, stems and fruit.", "Count plants with fresh damage or live pests; note egg masses.", "Note natural enemies you see.", "Photograph anything you cannot identify and ask extension or a plant clinic."],
          words: [["Scouting", "walking a field on a schedule and checking a set number of plants for pests, diseases and natural enemies."], ["Funnel (whorl)", "the rolled-up young leaves at the top of a young maize plant."], ["Leaf mine", "a pale tunnel or blotch inside a leaf made by a tiny caterpillar feeding between the leaf surfaces."], ["Natural enemy", "an insect, spider, fungus or other living thing that kills pests."]],
          slides: [
            { title: "How to scout", bullets: ["Every week, same day", "W or zigzag path, not just the edges", "Maize: 5 stops x 10 plants = 50", "Tomatoes: 20 plants spread out"] },
            { title: "Fall armyworm signs", bullets: ["Window panes on young leaves, then ragged holes", "Wet sawdust-like droppings in the funnel", "Upside-down Y on head, 4 dark spots near the tail"] },
            { title: "Tuta absoluta signs", bullets: ["Pale blotch mines with dark droppings in leaves", "Small holes in stems and fruit", "Small grey-brown moth that hides by day"] },
            { title: "Look for friends too", bullets: ["Ladybirds, lacewings, spiders, earwigs, ants", "Parasitic wasps; sick or fungus-covered caterpillars", "Unsure? Photo to extension or a plant clinic"] }
          ],
          sources: [CIMMYT_FAW, ICIPE_TUTA, FAO_FAMEWS],
          tryIt: "Scout one of your fields today on a W path: 50 maize plants or 20 tomato plants. Write how many plants had fresh damage or live pests, any egg masses, and every natural enemy you saw.",
          youCanNow: "scout a field on a set path, identify fall armyworm and Tuta absoluta from their signs, and spot natural enemies.",
          quickCheck: [
            { objective: "O2", q: "You see wet, sawdust-like droppings and ragged holes in the funnel of young maize. What is the most likely pest?", options: ["Tomato leafminer", "Aphids", "Fall armyworm", "Termites"], answer: 2, why: "Ragged holes and wet droppings in the funnel are classic fall armyworm signs." },
            { objective: "O2", q: "Why walk a W path when scouting instead of checking the plants near the gate?", options: ["It is faster", "Pests only live in the middle", "It uses less water", "It checks the whole field, not just the edges"], answer: 3, why: "A W path samples every part of the field, so the count reflects the real level." }
          ]
        },
        {
          title: "Thresholds and records: deciding when to act",
          objectives: ["O3"],
          minutes: 5,
          goal: "Compare your scouting count with an action threshold and record whether to act or keep watching.",
          text: [
            "Seeing a pest does not mean you must spray. An action threshold is the level of pest or damage at which control is worth its cost. Below it, natural enemies and the crop can usually cope, and spraying would waste money and kill your helpers. Get the threshold for each main pest, crop stage and area from your extension officer or research institute (such as KALRO in Kenya), because it changes with crop stage, price and local research.",
            "Turn your count into a percentage: plants with fresh damage or live pests, divided by plants checked, times 100. Example: you checked 50 maize plants and 9 had fresh fall armyworm damage, so 9 / 50 x 100 = 18%. If extension told you to act at 20% at this stage, you keep watching and scout again in a few days. If next week it is 26%, you act. Young maize can usually stand less damage than older maize, so thresholds are often different by stage.",
            "Write every visit down. A simple record has the date, field, crop stage, plants checked, plants infested, the percentage, natural enemies seen, the threshold, your decision and what you did. After a few seasons your records show when pests arrive on your farm, which controls worked and what they cost. A paper notebook works; so does a phone spreadsheet or a farm app."
          ],
          steps: ["Ask extension for the threshold for each main pest and crop stage.", "After scouting, count plants checked and plants infested.", "Work out the percentage: infested / checked x 100.", "Compare with the threshold: below = keep watching; at or above = act.", "Write the date, numbers, natural enemies, decision and action in your record."],
          words: [["Action threshold", "the level of pest or damage at which control is worth the cost."], ["Infested", "having pests or fresh damage from pests."], ["Crop stage", "how far the crop has grown, for example seedling, knee-high, tasselling, flowering, fruiting."]],
          slides: [
            { title: "Seeing a pest is not a reason to spray", bullets: ["Threshold: the level where action pays", "Below it, natural enemies often cope", "Get thresholds from extension, by crop stage"] },
            { title: "Work out the percentage", bullets: ["Infested plants / plants checked x 100", "Example: 9 / 50 x 100 = 18%", "Threshold 20%: keep watching, scout again soon"] },
            { title: "Keep a record of every visit", bullets: ["Date, field, crop stage", "Checked, infested, %, natural enemies", "Threshold, decision, action, cost"] }
          ],
          sources: [FAO_IPM, CIMMYT_FAW],
          tryIt: "Use the count from your scouting in the last lesson. Work out the percentage of infested plants, ask your extension officer for the threshold at your crop stage, and fill in your first record line with your decision.",
          youCanNow: "turn a scouting count into a percentage, compare it with a threshold, and record your decision.",
          quickCheck: [
            { objective: "O3", q: "You checked 50 plants and 15 had fresh damage. What is the infestation?", options: ["15%", "30%", "50%", "35%"], answer: 1, why: "15 / 50 x 100 = 30%." },
            { objective: "O3", q: "Your count is 12% and the extension threshold for this stage is 20%. What do you do?", options: ["Spray today to be safe", "Pull up the crop", "Double the spray rate", "Keep watching, scout again soon and record it"], answer: 3, why: "Below the threshold, control does not pay yet; you keep scouting and recording." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Stopping pests early",
        questions: [
          { objective: "O1", q: "Which is a prevention step in IPM?", options: ["Spraying when you see one caterpillar", "Planting certified seed of a suitable variety on time", "Mixing two pesticides together", "Burning the neighbour's crop"], answer: 1, why: "Good seed and timely planting stop pests building up before they start." },
          { objective: "O2", q: "Pale blotches with dark droppings inside tomato leaves, and small holes in the fruit, point to:", options: ["Tuta absoluta (tomato leafminer)", "Fall armyworm", "Too much fertilizer", "Lack of water"], answer: 0, why: "Leaf mines and fruit holes are the signs of Tuta absoluta." },
          { objective: "O2", q: "While scouting you find ladybirds and a caterpillar covered in white fungus. You should:", options: ["Spray to kill them too", "Ignore them; they do not matter", "Record them as natural enemies at work", "Burn the plant"], answer: 2, why: "Natural enemies keep pests down, so you record them and protect them." },
          { objective: "O3", q: "What is an action threshold?", options: ["The day you plant", "The price of a pesticide", "The number of workers you need", "The pest level at which control is worth the cost"], answer: 3, why: "Below the threshold, control costs more than it saves." },
          { objective: "O3", q: "Why keep a written record of every scouting visit?", options: ["To see when pests arrive, what worked and what it cost", "Because the agro-dealer asks for it", "To make the field look tidy", "It is not useful"], answer: 0, why: "Records turn each season into lessons for the next one." }
        ]
      }
    },
    {
      name: "Chapter 2: Controlling pests with less poison",
      lessons: [
        {
          title: "Push-pull and natural enemies",
          objectives: ["O4"],
          minutes: 6,
          goal: "Plan a push-pull plot and protect the natural enemies on your farm.",
          text: [
            "Push-pull was developed by icipe, with partners, for maize and sorghum in East Africa. You plant desmodium between the rows of maize. Desmodium gives off smells that push stemborer moths away from the crop. Around the plot you plant a border of a fodder grass (brachiaria in the climate-smart version for drier areas, napier grass in the original), which pulls the moths to it and traps them. Desmodium also suppresses striga weed and adds nitrogen to the soil, and both plants are good cattle feed.",
            "icipe studies in Kenya, Uganda and Tanzania found far less fall armyworm damage in climate-smart push-pull fields than in maize grown alone, and higher grain yields. Push-pull takes work to set up and you need desmodium seed or vines and grass splits, so start with a small plot, ask extension or an icipe-trained farmer for the layout, and follow icipe's farmer guide.",
            "Natural enemies are free workers. Ants, earwigs, spiders, ladybirds and lacewings eat eggs and young caterpillars; small wasps lay their eggs inside pests; fungi and viruses kill caterpillars. FAO notes that these already kill a large share of fall armyworm in African fields. icipe has released a tiny wasp from South America that attacks only Tuta absoluta in Kenya. To protect them: spray only when the threshold says so, choose selective products, keep flowering plants and hedges around fields, and leave some ground cover."
          ],
          steps: ["Mark out a small push-pull plot (ask extension or icipe's guide for the layout).", "Plant the border grass (brachiaria or napier) around the plot first.", "Plant desmodium between the maize or sorghum rows.", "Cut the grass and desmodium for livestock feed, leaving the plants to regrow.", "Protect natural enemies: no needless spraying, keep flowers and ground cover."],
          words: [["Push-pull", "an icipe system where an intercrop (desmodium) pushes pests away and a border grass pulls them out of the crop."], ["Desmodium", "a low-growing legume planted between cereal rows; it repels stemborer moths, suppresses striga and adds nitrogen."], ["Striga", "a parasitic weed with pink or purple flowers that attaches to maize and sorghum roots and steals their food."], ["Parasitic wasp", "a tiny wasp that lays its eggs in or on a pest, and its young kill the pest."]],
          slides: [
            { title: "Push-pull (icipe)", bullets: ["Desmodium between rows pushes moths away", "Border grass (brachiaria or napier) pulls them out", "For maize and sorghum"] },
            { title: "Extra benefits", bullets: ["Desmodium suppresses striga and adds nitrogen", "Both plants feed cattle", "icipe trials: much less fall armyworm damage"] },
            { title: "Your free workers", bullets: ["Ants, earwigs, spiders, ladybirds, lacewings", "Parasitic wasps; fungi and viruses", "A wasp released in Kenya attacks only Tuta absoluta"] },
            { title: "Protect natural enemies", bullets: ["Spray only above the threshold", "Choose selective products", "Keep flowers, hedges and ground cover"] }
          ],
          sources: [ICIPE_PP_FAW, ICIPE_PP_HOW, ICIPE_PP_GUIDE, ICIPE_TUTA],
          tryIt: "Draw a sketch of a small push-pull plot for your maize or sorghum, with the border grass, the desmodium rows and the crop rows. Then write two things you will change on your farm to protect natural enemies.",
          youCanNow: "explain how push-pull works, sketch a push-pull plot, and name ways to protect natural enemies.",
          quickCheck: [
            { objective: "O4", q: "In push-pull, what does the desmodium between the maize rows do?", options: ["Pulls pests into the maize", "Pushes stemborer moths away and suppresses striga", "Shades the maize so it grows taller", "Kills ladybirds"], answer: 1, why: "Desmodium's smell repels moths and it suppresses striga; the border grass does the pulling." },
            { objective: "O4", q: "Which habit protects natural enemies best?", options: ["Spraying a broad pesticide every week", "Clearing every flower and hedge around the field", "Burning crop residues and all ground cover", "Spraying only above the threshold and keeping flowering borders"], answer: 3, why: "Fewer sprays and flowering plants keep natural enemies alive and fed." }
          ]
        },
        {
          title: "Traps, botanical and biological options",
          objectives: ["O4"],
          minutes: 5,
          goal: "Choose and set up traps and approved botanical or biological controls for a pest problem.",
          text: [
            "Traps help you watch and lower pest numbers. Pheromone traps use the smell of a female moth to catch males: icipe uses mass trapping as part of its IPM for Tuta absoluta, and pheromone traps for fall armyworm tell you when moths arrive so you scout harder. Yellow sticky cards catch whiteflies, aphids and leafminer adults; blue ones catch thrips. Replace lures and cards as the supplier says, and count catches each week in your record.",
            "Hand-picking works on small plots: crush fall armyworm egg masses and young caterpillars, and pick off and destroy Tuta-mined leaves and damaged fruit (bury them deep or seal them in a bag in the sun, never leave them on the ground).",
            "Biological products use living things or their natural products against pests: for example products based on the bacterium Bt (Bacillus thuringiensis), on fungi that infect insects, or on insect viruses. icipe develops fungus-based biopesticides. They are usually gentle on natural enemies, but they act slowly, need to hit young caterpillars, and must be stored as the label says. In many countries they must be registered like any pesticide, so check the regulator's list.",
            "Botanical options come from plants, such as neem. Registered neem products have a label you can follow. Home-made extracts are widely used, but their strength varies and they can still harm natural enemies, skin and eyes, so ask your extension officer how they are used in your area, wear gloves, and test on a few plants first."
          ],
          steps: ["Match the tool to the pest: pheromone traps for moths, yellow cards for whiteflies and aphids, blue for thrips.", "Hang traps at crop height and count catches weekly.", "Hand-pick and destroy egg masses, young caterpillars and mined leaves.", "If more is needed, choose a registered biological or botanical product.", "Apply it to young caterpillars, as its label says, and record it."],
          words: [["Pheromone trap", "a trap baited with an insect's mating smell; it catches males and shows when pests arrive."], ["Biopesticide", "a pest control product made from living things such as bacteria, fungi or viruses, or their natural products."], ["Bt", "Bacillus thuringiensis, a soil bacterium used in biopesticides; it kills some caterpillars when they eat it."], ["Botanical", "a pest control product made from plants, such as neem."]],
          slides: [
            { title: "Traps to watch and reduce", bullets: ["Pheromone traps catch male moths", "Yellow cards: whiteflies, aphids; blue: thrips", "Count catches weekly; replace lures on time"] },
            { title: "Hand-picking works", bullets: ["Crush egg masses and young caterpillars", "Remove Tuta-mined leaves and damaged fruit", "Bury deep or seal in a bag, never leave on the ground"] },
            { title: "Biological products", bullets: ["Bt, insect-killing fungi, insect viruses", "Gentle on natural enemies, but slow", "Hit young caterpillars; check registration"] },
            { title: "Botanicals like neem", bullets: ["Registered products have a label: follow it", "Home-made extracts vary in strength", "Ask extension, wear gloves, test a few plants"] }
          ],
          sources: [ICIPE_TUTA, CIMMYT_FAW, PCPB, NAFDAC],
          tryIt: "For the worst pest on your crop, write which trap you would use and where you would hang it, what you would hand-pick, and one biological or botanical option. Then check whether that product is on your country's registered list or ask your agro-dealer to show you its registration.",
          youCanNow: "choose traps, hand-picking and approved biological or botanical controls for a pest and set them up.",
          quickCheck: [
            { objective: "O4", q: "You grow tomatoes and want to know when Tuta absoluta moths arrive. What do you set up?", options: ["A pheromone trap for Tuta absoluta", "A blue sticky card", "A bucket of water in the store", "A scarecrow"], answer: 0, why: "A pheromone trap baited for Tuta catches the male moths and shows when they arrive." },
            { objective: "O4", q: "A Bt-based biopesticide works best when you:", options: ["Spray it on big, old caterpillars at noon", "Mix it with any other chemical", "Apply it to young caterpillars as its label says", "Store it in the sun"], answer: 2, why: "Biological products act slowly and work best on young caterpillars, used as the label says." }
          ]
        },
        {
          title: "Pesticides as the last step, and slowing resistance",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Check a pesticide's registration, follow its label with protective equipment, and plan group rotation to slow resistance.",
          text: [
            "Use a synthetic pesticide only when your count is above the threshold and other controls are not enough. First check that the product is registered for your crop and pest in your country: the Pest Control Products Board (PCPB) in Kenya, NAFDAC in Nigeria, the Environmental Protection Authority (EPA) in Ghana, and the Sahelian Pesticides Committee (CSP) for CILSS countries such as Senegal and Burkina Faso. Each keeps a list of registered products; check it, and buy only sealed, labelled containers from a licensed agro-dealer. Fake and unregistered products are common.",
            "The label is the law. Read it all before you open the container: the crops and pests it is for, the rate, how to mix, when to spray, the protective equipment, how long to wait before harvest (the pre-harvest interval) and before people go back into the field, and first aid. Wear what the label lists, usually gloves, boots, long sleeves and trousers, eye protection and a mask or respirator. Spray in calm, cool hours, never towards people, animals or water. Do not eat, drink or smoke while spraying, wash afterwards, and lock products away from children and food. Never put pesticide in a drink or food bottle.",
            "Pests become resistant when the same kind of chemical is used again and again: the few that survive breed. Fall armyworm and Tuta absoluta are both known for this. Labels often show a group number or the active ingredient. Rotate between groups, do not use the same group on the same pest generation twice in a row, never under-dose or mix products yourself, and keep a spray record with the date, product, group, rate, field and pre-harvest date. In Kenya, a tomato grower who sprays the same product every few days often sees it stop working; one who scouts, traps and rotates groups keeps her few sprays working."
          ],
          steps: ["Confirm the count is above the threshold and other controls are not enough.", "Check the product is registered for your crop and pest (PCPB, NAFDAC, EPA Ghana, CSP).", "Buy a sealed, labelled container from a licensed agro-dealer.", "Read the whole label; put on all the protective equipment it lists.", "Spray in calm, cool hours at the label rate; wash and store safely.", "Record the product, group, rate and the pre-harvest date; rotate groups next time."],
          words: [["Registered pesticide", "a product the national regulator has approved for named crops and pests."], ["Label", "the instructions on the container; following it is the law."], ["PPE", "personal protective equipment: gloves, boots, long clothes, eye protection and a mask or respirator."], ["Pre-harvest interval", "the time you must wait after spraying before you harvest; it is printed on the label."], ["Resistance", "when a pest no longer dies from a product that used to kill it."], ["Mode-of-action group", "a number or name that shows how a pesticide kills; rotate between groups to slow resistance."]],
          slides: [
            { title: "Pesticide: the last step", bullets: ["Only above the threshold", "Only when other controls are not enough", "Only registered for your crop and pest"] },
            { title: "Check the registration", bullets: ["Kenya: PCPB; Nigeria: NAFDAC", "Ghana: EPA; Senegal, Burkina Faso: CSP (CILSS)", "Sealed, labelled, licensed agro-dealer"] },
            { title: "The label is the law", bullets: ["Crop, pest, rate, timing", "PPE: gloves, boots, long sleeves, eyes, mask", "Pre-harvest interval and re-entry time"] },
            { title: "Slow resistance", bullets: ["Rotate mode-of-action groups", "Never under-dose or mix your own", "Keep a spray record"] }
          ],
          sources: [PCPB, NAFDAC, GHANA_EPA, CILSS_CSP, FAO_IPM],
          tryIt: "Final task: write your one-season IPM plan for one crop on your farm: main pests, at least three prevention steps, your weekly scouting routine and record sheet, the thresholds you got from extension, the non-chemical controls you will use first, and a last-step pesticide plan (a product checked on your regulator's list, the label rules, your PPE, and how you will rotate groups).",
          youCanNow: "check that a pesticide is registered, follow its label with the right protective equipment, and rotate groups and keep records to slow resistance.",
          quickCheck: [
            { objective: "O5", q: "An agro-dealer offers you an unlabelled bottle of insecticide at a low price. What do you do?", options: ["Buy it; it is cheaper", "Mix it with water and test it", "Refuse it and buy a sealed, labelled, registered product", "Use half the bottle"], answer: 2, why: "Without a label you cannot know what it is, how to use it safely, or if it is registered." },
            { objective: "O6", q: "You sprayed a product from group A last time. The pest is still above the threshold. What is best?", options: ["Spray group A again at double the rate", "Spray a registered product from a different group", "Mix group A with another product yourself", "Spray group A every day"], answer: 1, why: "Rotating to a different group slows resistance; double rates and home mixes are unsafe and illegal." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Controlling pests with less poison",
        questions: [
          { objective: "O4", q: "In push-pull, the border grass around the maize:", options: ["Pulls stemborer moths away from the maize", "Pushes moths into the maize", "Kills the maize", "Replaces fertilizer"], answer: 0, why: "The border grass (brachiaria or napier) attracts and traps the moths." },
          { objective: "O4", q: "Which is a biological control?", options: ["A broad-spectrum insecticide", "A product based on Bt bacteria", "Burning the field", "Watering at night"], answer: 1, why: "Bt products use a bacterium to kill some caterpillars." },
          { objective: "O5", q: "Who keeps the list of registered pesticides in Kenya?", options: ["The county roads office", "The agro-dealer", "The Pest Control Products Board (PCPB)", "The seed company"], answer: 2, why: "PCPB registers pest control products in Kenya." },
          { objective: "O5", q: "Where do you find how long to wait between spraying and harvest?", options: ["Ask a neighbour", "Guess from the weather", "It is always one day", "On the product label (the pre-harvest interval)"], answer: 3, why: "The label gives the pre-harvest interval for each crop." },
          { objective: "O6", q: "Why rotate pesticide groups?", options: ["To slow pests becoming resistant", "To make the field smell different", "Because one group is always illegal", "To use up old stock"], answer: 0, why: "Using the same group again and again selects pests that survive it." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Integrated Pest Management and Organic Pest Control",
    questions: [
      { objective: "O1", q: "What are the four IPM steps, in order?", options: ["Spray, wait, spray, harvest", "Prevent, monitor, decide, act", "Buy, mix, spray, sell", "Plough, plant, spray, store"], answer: 1, why: "IPM starts with prevention and uses pesticides only after monitoring and deciding." },
      { objective: "O1", q: "Which step helps stop pests moving from field to field?", options: ["Planting at different times from your neighbours", "Leaving volunteer plants", "Planting on time, together with your neighbours", "Keeping host weeds"], answer: 2, why: "Planting together leaves no late fields for pests to move into." },
      { objective: "O1", q: "Why raise tomato seedlings in a clean, netted nursery?", options: ["So seedlings go to the field free of Tuta absoluta and whiteflies", "So they need no water", "Because nets add fertilizer", "To grow them faster in the dark"], answer: 0, why: "Clean, netted seedlings stop pests arriving with the crop." },
      { objective: "O2", q: "How many maize plants does the scouting method in this course check?", options: ["5", "10", "100 at the gate", "50: 10 plants at 5 places on a W path"], answer: 3, why: "Five stops of 10 plants on a W path gives a fair picture of the field." },
      { objective: "O2", q: "A caterpillar has an upside-down Y on its head and four dark spots in a square near its tail. It is:", options: ["Fall armyworm", "A ladybird larva", "Tuta absoluta", "A lacewing"], answer: 0, why: "Those marks identify the fall armyworm caterpillar." },
      { objective: "O2", q: "Which of these is a natural enemy you should record and protect?", options: ["Fall armyworm moth", "Whitefly", "Ladybird", "Striga"], answer: 2, why: "Ladybirds eat aphids and other small pests." },
      { objective: "O2", q: "You find damage you cannot identify. The best next step is:", options: ["Spray the strongest product you have", "Photograph it and ask extension or a plant clinic", "Ignore it", "Burn the whole field"], answer: 1, why: "A correct diagnosis comes before any control." },
      { objective: "O3", q: "You checked 40 plants and 10 were infested. What is the percentage?", options: ["10%", "40%", "4%", "25%"], answer: 3, why: "10 / 40 x 100 = 25%." },
      { objective: "O3", q: "Where should your action threshold come from?", options: ["The pesticide advert", "Your extension officer or research institute, for your crop stage", "The highest number you can think of", "A neighbour's guess"], answer: 1, why: "Thresholds depend on the crop stage and local research." },
      { objective: "O3", q: "Your count is above the threshold. What do you do?", options: ["Act, starting with the best non-chemical option, and record it", "Wait until harvest", "Stop scouting", "Plant again"], answer: 0, why: "Above the threshold, action pays; IPM starts with non-chemical controls." },
      { objective: "O4", q: "Push-pull was developed by:", options: ["A pesticide company", "icipe and partners", "A seed shop", "A bank"], answer: 1, why: "icipe developed push-pull with partners in East Africa." },
      { objective: "O4", q: "Besides pests, desmodium in push-pull also:", options: ["Attracts more striga", "Needs daily spraying", "Kills cattle", "Suppresses striga and adds nitrogen"], answer: 3, why: "Desmodium suppresses striga, fixes nitrogen and is good fodder." },
      { objective: "O4", q: "Blue sticky cards are mainly used to catch:", options: ["Thrips", "Fall armyworm caterpillars", "Rats", "Termites"], answer: 0, why: "Blue cards attract thrips; yellow cards attract whiteflies and aphids." },
      { objective: "O4", q: "What should you do with Tuta-mined leaves and damaged fruit you pick off?", options: ["Leave them on the ground", "Feed them to the next tomato crop", "Sell them", "Bury them deep or seal them in a bag in the sun"], answer: 3, why: "Left on the ground, the caterpillars inside finish growing and attack again." },
      { objective: "O5", q: "In Nigeria, which agency registers pesticides?", options: ["The Central Bank", "The Nigerian Meteorological Agency", "NAFDAC", "The seed council"], answer: 2, why: "NAFDAC registers pesticides in Nigeria." },
      { objective: "O5", q: "Which is the right protective equipment rule?", options: ["Wear what the label lists, such as gloves, boots, long sleeves, eye protection and a mask", "Shorts are fine on hot days", "Gloves are only for women", "Protective equipment is only for big farms"], answer: 0, why: "The label lists the protective equipment needed for that product." },
      { objective: "O5", q: "Where should you never keep pesticide?", options: ["In its original container", "In a locked store", "In a soda or water bottle", "Away from food and children"], answer: 2, why: "Pesticide in drink bottles causes many poisonings." },
      { objective: "O6", q: "A pest no longer dies from a product that used to work. This is called:", options: ["Rotation", "Resistance", "A threshold", "Pollination"], answer: 1, why: "Resistance builds when the same chemical group is used again and again." },
      { objective: "O6", q: "Which habit speeds up resistance?", options: ["Rotating groups", "Spraying only above the threshold", "Keeping a spray record", "Spraying the same product every few days"], answer: 3, why: "Repeated use of the same group selects the pests that survive it." },
      { objective: "O6", q: "What belongs in a spray record?", options: ["Date, product, group, rate, field and pre-harvest date", "Only the price", "Only the weather", "Nothing; records are not needed"], answer: 0, why: "These details let you rotate groups and respect the pre-harvest interval." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 4, 7, 9, 11, 14, 16, 17] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part of the plan and check it again with your extension officer.",
    criteria: [
      { name: "Prevention", objective: "O1", notYet: "No prevention steps, or only \"spray early\".", meets: "At least three prevention steps that fit the crop (seed, rotation, timing, hygiene or borders).", exceeds: "Prevention steps are timed on a calendar and agreed with neighbours, such as planting together." },
      { name: "Scouting routine", objective: "O2", notYet: "Scouting is \"when I see damage\", with no plant count.", meets: "A weekly day, a W path, a set number of plants and a record sheet with columns for pests and natural enemies.", exceeds: "Includes photos of the main pests and natural enemies to identify them, and the record has been used for at least two weeks." },
      { name: "Thresholds and decisions", objective: "O3", notYet: "No thresholds; action is by habit.", meets: "A threshold from extension for each main pest, with the percentage method written out.", exceeds: "Thresholds are listed by crop stage, and a worked example from the learner's own counts is included." },
      { name: "Non-chemical controls first", objective: "O4", notYet: "Pesticide is the first and only control.", meets: "At least two non-chemical controls (push-pull, traps, hand-picking, natural enemies, biological or botanical) are planned before any pesticide.", exceeds: "Non-chemical controls are already set up, such as traps hanging or a push-pull plot planted." },
      { name: "Safe, legal last step", objective: "O5", notYet: "The product is not checked or the plan skips the label or PPE.", meets: "The product is checked on the national regulator's list, and the plan follows the label, lists PPE and names the pre-harvest interval from the label.", exceeds: "Also includes safe storage, disposal of empty containers as the label says, and first aid steps." },
      { name: "Resistance and records", objective: "O6", notYet: "One product used all season, no spray record.", meets: "A spray record and a rotation between at least two groups.", exceeds: "Rotation is planned by pest generation, and records include the cost of each control." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who report scouting weekly and keeping pest records 30 days later (follow-up survey)",
      "Fewer pesticide sprays per season reported by learners, with yield held or improved",
      "Learners who set up at least one non-chemical control (push-pull, traps, biological products) within one season",
      "Fewer reports of pesticide poisoning or rejected produce from learner groups (extension and buyer feedback)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone (camera helps) or a notebook and pen for scouting records",
      "Access to a field with a crop, ideally maize, sorghum or tomatoes",
      "Optional: a hand lens, a pheromone trap and sticky cards to show the group",
      "Contact details for the local extension officer or plant clinic, and the national pesticide regulator's website",
      "About 60 to 90 minutes in total for lessons, quick checks and quizzes, plus weekly scouting in the field"
    ],
    facilitatorNotes: [
      "Run the course as a farmer field school if you can: take the pre-test together, then scout a real field as a group after Lessons 2 and 3.",
      "Bring real samples or photos of fall armyworm, Tuta absoluta and natural enemies so learners can practise identifying them.",
      "Get local thresholds from the extension service or research institute before the session; do not make them up.",
      "Never recommend a pesticide product, rate or pre-harvest interval; show learners how to read the label and the regulator's list instead.",
      "Do not handle pesticides in the session without full PPE; use an empty, clean labelled container to practise reading the label.",
      "Score the final IPM plan with the rubric and agree one improvement per learner for next season."
    ]
  }
};
