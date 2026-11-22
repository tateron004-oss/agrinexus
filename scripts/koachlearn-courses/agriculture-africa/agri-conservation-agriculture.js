"use strict";

// Koach Learn course: Agriculture (Africa) -> "Conservation Agriculture for Dry Seasons".
// The three principles as FAO defines them (minimum soil disturbance, permanent soil cover of at least 30 percent, crop diversification), planting basins and zai pits,
// ripping and direct seeding, mulch management, weed control without ploughing (registered herbicides only, as the label says), tools and timing, yields in drought
// years and the transition period. agri-irrigation-water covers irrigation and rainwater harvesting; agri-soil-health covers compost and mulching basics. Not repeated.

const FAO_CA = { name: "FAO: Conservation Agriculture (definition and the three principles)", url: "https://www.fao.org/conservation-agriculture/en/" };
const WOCAT_ZAI = { name: "WOCAT: Zai or tassa planting pits (Niger)", url: "https://qcat.wocat.net/en/wocat/technologies/view/permalink/1220" };
const ZIM_CA = { name: "Effect of conservation agriculture on maize yield in the semi-arid areas of Zimbabwe (Experimental Agriculture)", url: "https://www.cambridge.org/core/product/36E50D9D434ADE25762F6D8E4E185FB7" };
const CIMMYT_ZM = { name: "CIMMYT: Conservation agriculture on-farm trials in Zambia (basins, ripping, direct seeding vs ploughing, 2006-2015)", url: "https://hdl.handle.net/11529/10825" };
const PCPB = { name: "Pest Control Products Board, Kenya (registered products)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "NAFDAC, Nigeria (registered agrochemicals)", url: "https://www.nafdac.gov.ng" };
const EPA_GH = { name: "Environmental Protection Agency, Ghana (pesticide registration)", url: "https://www.epa.gov.gh" };
const FAO_SOM = { name: "FAO: The importance of soil organic matter", url: "https://www.fao.org/4/a0100e/a0100e.pdf" };

module.exports = {
  id: "agri-conservation-agriculture",
  category: "Agriculture (Africa)",
  name: "Conservation Agriculture for Dry Seasons",
  skills: "Applying the three principles of conservation agriculture, Making planting basins and zai pits, Choosing ripping or direct seeding, Managing mulch, Controlling weeds without ploughing, Planning the season and the transition",
  outcome: "plan and start one season of conservation agriculture on one field: how you will prepare the land without ploughing, keep it covered, rotate crops, control weeds, and which tools and dates you will use, with a comparison plot to track results through the transition years.",
  about: [
    "This course is for smallholder and growing commercial farmers, farm workers, young agripreneurs and extension workers in the drier parts of Kenya, Nigeria, Ghana, Burkina Faso, Senegal and across Africa, where rains are short and dry spells common, and ploughing leaves soil bare, hard and thirsty.",
    "Chapter 1 explains the three principles of conservation agriculture as FAO defines them and shows how to prepare land without ploughing: planting basins, zai pits, ripping and direct seeding. Chapter 2 covers keeping the soil covered with mulch, controlling weeds without ploughing, the tools and timing for a season, what to expect in drought years, and getting through the first few seasons.",
    "Irrigation and rainwater harvesting are covered in \"Irrigation and Water Management\", and compost and mulching basics in \"Soil Health and Fertility\"; this course does not repeat them. Start on one field and keep a ploughed plot beside it to compare. Each lesson takes about five minutes and ends with a task on your own land."
  ],
  finalTask: "Write a one-season conservation agriculture plan for one field (or an example: 1 acre of maize and cowpea in Machakos, 2 hectares of sorghum in northern Ghana, or 1 hectare of millet and groundnuts on the Central Plateau of Burkina Faso): a sketch of the field; how you will prepare it without ploughing (basins, zai pits, ripping or direct seeding) and why; how you will keep at least 30 percent of the soil covered; the crop and rotation or intercrop; your weed plan; a month-by-month calendar of jobs, tools and costs; and how you will compare it with a ploughed plot.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Smallholder and growing commercial farmers, farm workers, young agripreneurs and extension workers in drier farming areas across Africa (Kenya, Nigeria, Ghana and the francophone Sahel), growing maize, sorghum, millet, cowpea, beans and groundnuts, often with cattle or goats that graze crop residues.",
    startingPoint: "Prepare land by ploughing with oxen, a tractor or a hoe, and often burn or graze residues. Many have heard of zai pits or basins but have not run a full conservation agriculture season or planned for the weeds and residue competition that come with it.",
    gap: "Ploughing and bare soil waste scarce rain and cause erosion, and late ploughing delays planting. Learners need a practical way to farm with less soil disturbance, more cover and rotation, to plan the tools, labour and timing, and to stay with it through the first seasons when weeds are heavy and results are mixed.",
    constraints: [
      "Reading level: plain words and short sentences; the course is also available in Spanish, French and Arabic",
      "Labour and tools: hand hoes, oxen or a hired tractor; basins and pits are hard work",
      "Residues: animals graze fields after harvest under local custom",
      "Pesticide safety: herbicides only if registered nationally, used as the label says, with protective equipment",
      "Time: 4 to 6 minute lessons; results build over several seasons"
    ],
    prerequisites: "None. \"Soil Health and Fertility\" and \"Climate-Smart Agriculture\" are useful background."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Looking at a field or a description of one", action: "identify whether it follows each of the three principles of conservation agriculture", standard: "naming all three as FAO describes them, including at least 30 percent soil cover" },
    { id: "O2", condition: "On one field before the rains", action: "mark out and dig planting basins or zai pits with manure or compost in each", standard: "in rows across the slope, dug in the dry season" },
    { id: "O3", condition: "Given your soil, labour, draught power and rainfall", action: "choose between basins, ripping and direct seeding for a field", standard: "giving at least two reasons for the choice" },
    { id: "O4", condition: "For a field under conservation agriculture", action: "plan how to keep the soil covered and control weeds without ploughing", standard: "keeping at least 30 percent cover and using only registered herbicides as the label says, if any" },
    { id: "O5", condition: "For one season on one field", action: "write a calendar of every conservation agriculture job with its month, tool and cost", standard: "from dry-season preparation to harvest and residue care" },
    { id: "O6", condition: "Through the first seasons of conservation agriculture", action: "compare a conservation agriculture plot with a ploughed plot", standard: "recording yield, labour days and costs for both each season" }
  ],
  chapters: [
    {
      name: "Chapter 1: Principles and preparing land without ploughing",
      lessons: [
        {
          title: "The three principles of conservation agriculture",
          objectives: ["O1"],
          minutes: 5,
          goal: "Identify whether a field follows each of the three principles of conservation agriculture.",
          text: [
            "Conservation agriculture (CA) is a way of farming that protects the soil so it holds more of the little rain that falls. FAO describes three principles that work together.",
            "1. Minimum soil disturbance: no ploughing. Seed and fertilizer go into the soil through small holes, basins or narrow rip lines, and the rest of the soil is left alone. 2. Permanent soil cover: keep crop residues or cover crops on the surface, covering at least 30 percent of the soil, all year. 3. Crop diversification: rotate or intercrop at least three different crops over time, for example maize, cowpea and sorghum, not maize every year.",
            "Doing one alone helps a little; doing all three together gives the real benefits. Ploughing without cover dries the soil; cover without rotation lets pests build up; no-till with bare soil lets the crust form and rain run off. In dry areas the big gain is water: covered, undisturbed soil lets rain soak in and loses less to the sun."
          ],
          words: [["Conservation agriculture (CA)", "farming with minimum soil disturbance, permanent soil cover and crop diversification."], ["Tillage", "turning or breaking the soil, for example by ploughing or digging."], ["Crop residues", "the stalks, leaves and husks left after harvest."], ["Crust", "a hard skin that forms on bare soil after rain and stops water soaking in."]],
          slides: [
            { title: "Three principles (FAO)", bullets: ["1. Minimum soil disturbance: no ploughing", "2. Permanent soil cover: at least 30 percent", "3. Crop diversification: at least three crops"] },
            { title: "Disturb only where you plant", bullets: ["Small holes, basins or rip lines", "Leave the rest of the soil alone"] },
            { title: "Cover and rotate", bullets: ["Residues or cover crops on top, all year", "E.g. maize, then cowpea, then sorghum"] },
            { title: "All three together", bullets: ["One alone helps a little", "Together: more rain soaks in and stays", "The big gain in dry areas is water"] }
          ],
          sources: [FAO_CA],
          tryIt: "Walk one of your fields. For each principle, write yes, partly or no: Is it ploughed? How much of the soil is covered (estimate in percent)? How many different crops grew there in the last three seasons? Circle the principle that is weakest.",
          youCanNow: "name the three principles of conservation agriculture and check a field against each.",
          quickCheck: [
            { objective: "O1", q: "Which is one of FAO's three principles of conservation agriculture?", options: ["Deep ploughing every season", "Burning residues to clean the field", "Permanent soil cover of at least 30 percent", "Growing the same crop every year"], answer: 2, why: "FAO lists minimum disturbance, permanent soil cover (at least 30 percent) and crop diversification." },
            { objective: "O1", q: "A farmer stopped ploughing but leaves the soil bare and grows maize every year. What is missing?", options: ["Soil cover and crop diversification", "Nothing; it is full CA", "More ploughing", "More burning"], answer: 0, why: "Without cover and rotation, no-till alone gives few of the benefits." }
          ]
        },
        {
          title: "Planting basins and zai pits",
          objectives: ["O2"],
          minutes: 6,
          goal: "Mark out and dig planting basins or zai pits with manure in each, before the rains.",
          text: [
            "Planting basins and zai pits are small holes dug by hand where the crop is planted. Only the basin is disturbed; the soil between is left covered. Each basin catches rain and holds the manure or compost right where the roots are.",
            "Zai pits come from farmers in Burkina Faso and Niger, who used them to bring hard, crusted land back into millet and sorghum. WOCAT describes pits of roughly 30 to 40 cm across and 10 to 15 cm deep, in staggered rows across the slope, about 10,000 a hectare, with manure or compost in each. Planting basins used in southern and eastern Africa are similar: small, regular holes in rows, dug to the same spacing each year so you return to the same spots.",
            "Dig them in the dry season after harvest, when there is less other work, so you can plant with the first good rains instead of waiting to plough. Put the soil from the pit on the downhill side to catch more water. Add a handful or two of manure or compost in each basin and cover it lightly. Ask your extension officer for the spacing used for your crop in your area.",
            "It is hard work, especially the first year. Dig a part of the field each week, share labour in a group, and reuse the same basins in later seasons, which is much quicker."
          ],
          steps: ["Choose the field and mark rows across the slope with string or sticks.", "Mark basin spots at the spacing extension recommends for your crop.", "Dig in the dry season; pile soil on the downhill side.", "Add manure or compost in each basin and cover lightly.", "Leave the soil between basins covered.", "Plant in the basins with the first good rains."],
          words: [["Planting basin", "a small hole dug by hand where seed and manure go, leaving the rest of the soil undisturbed."], ["Zai pit", "a planting pit filled with manure or compost, first used by farmers in Burkina Faso and Niger to restore crusted land."], ["Across the slope", "along the contour, so rows catch water instead of channelling it downhill."]],
          slides: [
            { title: "Small holes, big gain", bullets: ["Disturb only the basin", "Catches rain where roots are", "Holds manure close to the crop"] },
            { title: "Zai pits (Burkina Faso, Niger)", bullets: ["About 30-40 cm across, 10-15 cm deep (WOCAT)", "Staggered rows across the slope", "Manure or compost in each"] },
            { title: "Timing", bullets: ["Dig in the dry season after harvest", "Plant with the first good rains", "No waiting to plough"] },
            { title: "Make the work lighter", bullets: ["A part of the field each week", "Share labour in a group", "Reuse the same basins next season"] }
          ],
          sources: [WOCAT_ZAI, FAO_CA],
          tryIt: "On a small part of a field (for example 10 m by 10 m), mark rows across the slope and dig five basins or zai pits. Time how long each takes, add manure, and work out how many days the whole field would take.",
          youCanNow: "mark out and dig planting basins or zai pits with manure, across the slope, before the rains.",
          quickCheck: [
            { objective: "O2", q: "When should you dig planting basins or zai pits?", options: ["After the crop has emerged", "Only when it is raining hard", "At harvest time, on top of the crop", "In the dry season before the rains"], answer: 3, why: "Digging early lets you plant with the first good rains and spreads the work." },
            { objective: "O2", q: "Where should the soil from a zai pit go?", options: ["Thrown far away", "On the downhill side of the pit, to catch more water", "Back into the pit straight away", "On the path"], answer: 1, why: "A small ridge downhill helps each pit catch and hold runoff." }
          ]
        },
        {
          title: "Ripping and direct seeding",
          objectives: ["O3"],
          minutes: 5,
          goal: "Choose between basins, ripping and direct seeding for one of your fields.",
          text: [
            "Basins suit hand-hoe farmers on small plots. If you have oxen or can hire a tractor, a ripper or a direct seeder can cover more land with less labour.",
            "A ripper is a narrow tine, often fitted to an ox-plough beam in place of the mouldboard, that opens a narrow slot (a rip line) for seed and fertilizer, leaving the soil between rows covered. Ripping in the dry season can also break a hard layer under the surface (a plough pan) so roots and water go deeper. Direct seeding puts seed straight through the residues with a jab planter (a hand tool) or an animal- or tractor-drawn seeder, with no opening of lines at all.",
            "Which to choose? Think about your labour (basins need the most), draught power (ripping needs oxen or a tractor), soil (hard, crusted soils benefit from basins or ripping), and field size. Trials across Zambia from 2006 to 2015 compared basins, ripping and direct seeding with mouldboard ploughing on real farms. Ask your extension officer or a CA project where you can see these tools working, and whether they can be hired."
          ],
          steps: ["Write your field size, labour and access to oxen or a tractor.", "Check the soil: is there a hard layer or crust?", "Small plot and hand labour: basins.", "Oxen or tractor and hard soil: ripping.", "Good residues and a seeder available: direct seeding.", "Ask extension where to see and hire the tools."],
          words: [["Ripper", "a narrow tine pulled by oxen or a tractor that opens a slot for seed without turning the soil."], ["Plough pan", "a hard layer just below the ploughed depth that blocks roots and water."], ["Jab planter", "a hand tool pushed into the ground to place seed (and sometimes fertilizer) through residues."], ["Direct seeding", "planting straight into undisturbed soil and residues."]],
          slides: [
            { title: "Three ways in without ploughing", bullets: ["Basins: hand hoe, small plots", "Ripping: oxen or tractor opens rip lines", "Direct seeding: jab planter or seeder"] },
            { title: "Ripping", bullets: ["Narrow tine on the plough beam", "Can break a hard plough pan", "Soil between rows stays covered"] },
            { title: "How to choose", bullets: ["Labour: basins need the most", "Draught power: oxen or tractor?", "Soil hardness and field size"] },
            { title: "See it first", bullets: ["Zambia trials: basins, ripping, direct seeding", "Ask extension where to see the tools", "Can you hire them?"] }
          ],
          sources: [CIMMYT_ZM, FAO_CA],
          tryIt: "For your chosen field, write the field size, your labour, your access to oxen or a tractor, and how hard the soil is. Choose basins, ripping or direct seeding and write two reasons for your choice.",
          youCanNow: "choose between basins, ripping and direct seeding for a field, with reasons.",
          quickCheck: [
            { objective: "O3", q: "A farmer has 3 hectares, a pair of oxen and hard soil. Which method fits best?", options: ["Ripping with an ox-drawn ripper", "Hand-dug basins on all 3 hectares in one week", "Deep ploughing twice", "No planting at all"], answer: 0, why: "Oxen and hard soil suit ripping, which covers more land than hand basins." },
            { objective: "O3", q: "What is a jab planter?", options: ["A tractor plough", "A hand tool that places seed through residues", "A water pump", "A type of fertilizer"], answer: 1, why: "A jab planter lets you plant directly into covered, undisturbed soil." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Principles and preparing land without ploughing",
        questions: [
          { objective: "O1", q: "According to FAO, how many different crops should a CA rotation or association include?", options: ["One", "Two at most", "At least three", "None"], answer: 2, why: "FAO's diversification principle refers to at least three different crops." },
          { objective: "O1", q: "Why is covered, undisturbed soil especially useful in dry areas?", options: ["It makes the soil colder in winter", "More rain soaks in and less is lost to the sun", "It stops all weeds forever", "It needs no seed"], answer: 1, why: "Cover and no ploughing improve infiltration and cut evaporation." },
          { objective: "O2", q: "Zai pits first spread among farmers in which countries?", options: ["Burkina Faso and Niger", "Egypt and Libya", "South Africa and Namibia", "Kenya and Uganda only"], answer: 0, why: "Zai pits come from farmers in the Sahel, notably Burkina Faso and Niger." },
          { objective: "O2", q: "What goes into each zai pit or basin before planting?", options: ["Nothing", "Plastic", "Ash from burned residues only", "Manure or compost"], answer: 3, why: "Manure or compost in the pit feeds the crop right at the roots." },
          { objective: "O3", q: "What can dry-season ripping do besides opening rip lines?", options: ["Water the crop", "Break a hard plough pan so roots and water go deeper", "Kill all pests", "Replace fertilizer"], answer: 1, why: "A ripper can break the hard layer that ploughing often leaves." }
        ]
      }
    },
    {
      name: "Chapter 2: The season and the transition",
      lessons: [
        {
          title: "Managing mulch and residues",
          objectives: ["O4"],
          minutes: 5,
          goal: "Plan how to keep at least 30 percent of a field covered all year.",
          text: [
            "Cover is the principle farmers find hardest, because residues have other uses: animals graze fields after harvest, and stalks are used for fuel, fencing and building. In dry areas, termites can also eat surface residues.",
            "Plan for it. Decide how much residue stays on the field and how much goes to animals. Cut and store some stover for dry-season feed so animals are not let onto the CA field. Talk with neighbours and herders about the field: some communities agree that marked CA fields are not grazed, or the farmer fences a small field with live fences or thorn branches. Grow cover from other sources: an intercrop of cowpea or lablab, grass from field edges, or prunings from trees.",
            "To check cover, look straight down at a square metre in several places and estimate how much soil you cannot see. You want at least 30 percent covered (FAO); more is better. Spread residues evenly, not in heaps, and leave them on top rather than burying them.",
            "Never burn residues on a CA field. Burning removes the cover and organic matter you are building."
          ],
          steps: ["Decide the share of residues for cover and for feed.", "Cut and store feed so animals stay off the CA field.", "Agree with neighbours and herders, or fence the field.", "Add cover from intercrops, edge grass or tree prunings.", "Check cover: look down at a square metre in several places.", "Spread evenly; never burn."],
          words: [["Mulch", "material spread on the soil surface to cover and protect it."], ["Stover", "the dried stalks and leaves of maize or sorghum after harvest."], ["Live fence", "a row of shrubs or trees planted close together to keep animals out."]],
          slides: [
            { title: "Cover competes with other uses", bullets: ["Grazing after harvest", "Fuel, fencing, building", "Termites in dry areas"] },
            { title: "Plan the residues", bullets: ["Share for cover vs feed", "Store feed; keep animals off", "Agree with herders or fence"] },
            { title: "Find more cover", bullets: ["Cowpea or lablab intercrop", "Grass from field edges", "Tree prunings"] },
            { title: "Check: at least 30 percent", bullets: ["Look down at a square metre", "Spread evenly, leave on top", "Never burn on a CA field"] }
          ],
          sources: [FAO_CA, FAO_SOM],
          tryIt: "Estimate the cover on your chosen field today in three spots. Write where extra cover will come from, how much stover goes to animals, and how you will keep animals off the field (agreement, fence or stored feed).",
          youCanNow: "plan how to keep at least 30 percent of a CA field covered, while still feeding your animals.",
          quickCheck: [
            { objective: "O4", q: "Neighbours' cattle graze all the residues off your CA field every dry season. What can help?", options: ["Burn the residues first", "Plough the field", "Agree with herders, fence the field, or store feed so animals stay off", "Give up on cover"], answer: 2, why: "Community agreements, fences and stored feed protect the cover." },
            { objective: "O4", q: "How do you check whether a field has enough cover?", options: ["Count the cattle", "Look down at a square metre in several places and estimate the share of soil hidden", "Weigh the harvest", "Measure the rain"], answer: 1, why: "A quick visual estimate in several spots shows whether cover reaches 30 percent." }
          ]
        },
        {
          title: "Controlling weeds without ploughing",
          objectives: ["O4"],
          minutes: 5,
          goal: "Plan weed control for a CA field without ploughing.",
          text: [
            "Ploughing buries weeds; without it, weeds can be heavy in the first seasons. This is the main reason farmers give up on CA, so plan weeding from the start.",
            "Weed early and often: the first weeks after the crop comes up matter most. Use a hoe lightly, scraping just below the surface rather than turning the soil, or pull by hand. Never let weeds set seed; every weed that seeds adds thousands for next year. Mulch and a cover crop shade the soil and keep many weeds down, and a dense intercrop leaves less room. Over several seasons of weeding before seeding, the weed seeds in the soil run down and weeding gets easier.",
            "Some CA farmers also use a herbicide. If you do, use only products registered in your country (in Kenya, check the Pest Control Products Board list; in Nigeria, NAFDAC; in Ghana, the Environmental Protection Agency), buy from licensed dealers, and follow the label exactly for the crop, timing and amount. Wear protective clothing, gloves and boots, keep children and animals away, and never spray near water. Ask your extension officer before you start."
          ],
          steps: ["Weed early: the first weeks after emergence.", "Hoe lightly or hand-pull; don't turn the soil.", "Never let weeds set seed.", "Use mulch, cover crops and dense intercrops to shade weeds.", "If using a herbicide: registered product, label, protective equipment.", "Plan labour for weeding before the season starts."],
          words: [["Weed seed bank", "the weed seeds stored in the soil, waiting to grow."], ["Herbicide", "a chemical that kills weeds."], ["Registered product", "a pesticide or herbicide approved for use by the national authority."]],
          slides: [
            { title: "Weeds are the big test", bullets: ["Heavier in the first seasons", "Main reason farmers give up", "Plan weeding from the start"] },
            { title: "Weed without ploughing", bullets: ["Early and often after emergence", "Light hoeing or hand pulling", "Never let weeds seed"] },
            { title: "Let cover do the work", bullets: ["Mulch and cover crops shade weeds", "Dense intercrops leave less room", "Seed bank runs down over seasons"] },
            { title: "Herbicide? Only safely", bullets: ["Registered: PCPB (KE), NAFDAC (NG), EPA (GH)", "Follow the label exactly", "Protective gear; away from water and children"] }
          ],
          sources: [PCPB, NAFDAC, EPA_GH, FAO_CA],
          tryIt: "Write a weed plan for your field: when you will weed (weeks after planting), with what tool, who will do it and how many days it will take, and how cover or an intercrop will help. If you consider a herbicide, write where you will check that it is registered.",
          youCanNow: "plan weed control for a CA field without ploughing, using herbicides only safely and legally if at all.",
          quickCheck: [
            { objective: "O4", q: "Why should you never let weeds set seed in a CA field?", options: ["Seeds make the crop taste bad", "Weed seeds are good fertilizer", "It is illegal", "Each seeding weed adds thousands of seeds for next year"], answer: 3, why: "Stopping weeds from seeding runs down the weed seed bank over seasons." },
            { objective: "O4", q: "A farmer in Kenya wants to use a herbicide on her CA maize. What should she check first?", options: ["That it is registered by the Pest Control Products Board and how the label says to use it", "That it is the cheapest bottle", "That a neighbour liked it", "That it has no label"], answer: 0, why: "Only registered products used as the label says, with protective equipment, are safe and legal." }
          ]
        },
        {
          title: "Tools, timing, drought years and the transition",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Write a season calendar of CA jobs, tools and costs, and set up a comparison plot.",
          text: [
            "A CA season starts in the dry season, not at the rains. A typical calendar: after harvest, keep residues and agree on grazing; in the dry season, dig or reuse basins, or rip, and place manure; at the first good rains, plant straight away (no waiting to plough); in the first weeks, weed early and often; during the season, add the intercrop or cover crop; at harvest, leave residues on the field and plan next season's rotation. Next to each job, write the tool (hoe, ripper, jab planter, sprayer and protective gear) and the cost, whether you own, hire or borrow it.",
            "In drought years, CA's main advantage shows. Basins and mulch catch and keep more water, and planting on time uses the early rain. A review of many trials in semi-arid Zimbabwe found that planting basins gave more maize than ploughing in more than half of the trials. But CA does not beat ploughing every year, and it cannot make up for no rain at all.",
            "Expect a transition. Yields may stay the same or even drop in the first one or two seasons while weeds are heavy and the soil adjusts; benefits usually build over several seasons as cover and organic matter grow. Start on one field, keep a ploughed plot beside it, and record yield, labour days and costs for both every season. Judge CA after three seasons, not one."
          ],
          steps: ["List every job from harvest to harvest.", "Put each in a month.", "Add the tool and whether you own, hire or borrow it.", "Add the cost and labour days.", "Mark a ploughed comparison plot of the same size.", "Record yield, labour and cost for both each season; judge after three seasons."],
          words: [["Transition period", "the first seasons after switching to CA, when weeds are heavy and benefits are still building."], ["Comparison plot", "a plot farmed the old way beside the CA plot, so results can be compared fairly."], ["Labour day", "one person working for one day; used to measure how much work a job takes."]],
          slides: [
            { title: "The season starts dry", bullets: ["After harvest: keep residues, agree grazing", "Dry season: basins or ripping, manure", "First good rains: plant at once"] },
            { title: "Calendar with tools and costs", bullets: ["Hoe, ripper, jab planter, protective gear", "Own, hire or borrow?", "Cost and labour days for each job"] },
            { title: "Drought years", bullets: ["Basins and mulch hold more water", "Zimbabwe: basins beat ploughing in over half the trials", "Not every year; no rain = no crop"] },
            { title: "Getting through the transition", bullets: ["Yields may dip in seasons 1 to 2", "Keep a ploughed plot to compare", "Record yield, labour, cost; judge after 3 seasons"] }
          ],
          sources: [ZIM_CA, CIMMYT_ZM, FAO_CA],
          tryIt: "Final task: write your one-season CA plan for one field, with a sketch, the land preparation method and reasons, cover and weed plans, the crop and rotation, a month-by-month calendar of jobs, tools and costs, and where your ploughed comparison plot will be.",
          youCanNow: "plan a full CA season with tools, timing and costs, and compare it fairly with ploughing through the transition years.",
          quickCheck: [
            { objective: "O5", q: "When does the work for a CA season begin?", options: ["When the crop flowers", "In the dry season, after the last harvest", "At the first rain, with ploughing", "At harvest of the next crop"], answer: 1, why: "Basins, ripping, manure and residue plans are done in the dry season so you can plant with the first rains." },
            { objective: "O6", q: "Your CA plot gives the same yield as the ploughed plot in season one. What should you do?", options: ["Give up on CA", "Plough the CA plot", "Burn the residues", "Keep recording for at least three seasons before judging"], answer: 3, why: "Benefits build over several seasons; one season is too early to judge." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: The season and the transition",
        questions: [
          { objective: "O4", q: "What should you never do with residues on a CA field?", options: ["Spread them evenly", "Leave them on the surface", "Burn them", "Add more from field edges"], answer: 2, why: "Burning removes the cover and organic matter CA depends on." },
          { objective: "O4", q: "Which weeding method fits CA?", options: ["Ploughing the weeds under", "Burning the whole field", "Weeding only at harvest", "Light hoeing or hand pulling early and often"], answer: 3, why: "Shallow weeding without turning the soil keeps disturbance to a minimum." },
          { objective: "O5", q: "Which item belongs in a CA season calendar?", options: ["Dig or reuse basins in the dry season, with the tool and cost", "Plough twice before planting", "Burn residues after harvest", "Plant a month after the rains start"], answer: 0, why: "A CA calendar lists each job with its month, tool and cost." },
          { objective: "O5", q: "Why does CA often let you plant earlier?", options: ["The seed grows faster", "It rains more on CA fields", "Land is prepared in the dry season, so you plant with the first good rains", "Seed is cheaper"], answer: 2, why: "No waiting for ploughing means planting on time." },
          { objective: "O6", q: "What three things should you record for both the CA and the ploughed plot?", options: ["Colour, smell and taste", "Rainfall only", "Yield, labour days and costs", "The number of visitors"], answer: 2, why: "Yield, labour and costs show whether CA is paying off on your farm." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Conservation Agriculture for Dry Seasons",
    questions: [
      { objective: "O1", q: "Which list gives FAO's three principles of conservation agriculture?", options: ["Ploughing, burning, monocropping", "Minimum soil disturbance, permanent soil cover, crop diversification", "Irrigation, fertilizer, pesticides", "Deep tillage, bare soil, one crop"], answer: 1, why: "These are the three principles FAO describes." },
      { objective: "O1", q: "At least how much of the soil should be covered under CA, according to FAO?", options: ["5 percent", "10 percent", "30 percent", "100 percent at all times"], answer: 2, why: "FAO refers to permanent organic cover of at least 30 percent." },
      { objective: "O1", q: "What does minimum soil disturbance mean?", options: ["Disturbing soil only where seed and fertilizer go", "Ploughing once instead of twice", "Never planting", "Digging the whole field by hand"], answer: 0, why: "Only the planting spot, basin or rip line is disturbed." },
      { objective: "O1", q: "Which rotation shows crop diversification?", options: ["Maize, maize, maize", "Bare fallow every year", "Sorghum only", "Maize, then cowpea, then sorghum"], answer: 3, why: "Three different crops over time is diversification." },
      { objective: "O2", q: "What are zai pits?", options: ["Fish ponds", "Planting pits with manure or compost that catch rain", "Grain stores", "Wells for irrigation"], answer: 1, why: "Zai pits concentrate water and nutrients at the plant." },
      { objective: "O2", q: "Basin rows should run:", options: ["Up and down the slope", "In circles", "Across the slope, along the contour", "In any direction"], answer: 2, why: "Rows across the slope catch water instead of channelling it downhill." },
      { objective: "O2", q: "Why reuse the same basins in later seasons?", options: ["It saves a lot of labour and builds the soil in the same spots", "Basins cannot be dug twice", "It is required by law", "New basins attract pests"], answer: 0, why: "Reusing basins is much quicker and concentrates improvements." },
      { objective: "O3", q: "Which farmer is best suited to hand-dug basins?", options: ["A farmer with 20 hectares and a tractor", "A farmer with no labour at all", "A farmer who wants to plough", "A hand-hoe farmer on a small plot"], answer: 3, why: "Basins suit small plots worked by hand." },
      { objective: "O3", q: "What is a plough pan?", options: ["A cooking pot", "A type of seed", "A shallow pond", "A hard layer below ploughing depth that blocks roots and water"], answer: 3, why: "Repeated ploughing can form a hard layer that a ripper can break." },
      { objective: "O3", q: "What does direct seeding mean?", options: ["Planting straight into undisturbed soil and residues", "Throwing seed by hand on ploughed soil", "Planting seedlings from a nursery", "Buying seed directly from a company"], answer: 0, why: "Direct seeding places seed without opening the soil beyond the planting spot." },
      { objective: "O4", q: "Where can extra soil cover come from if animals eat most residues?", options: ["Burning", "Ploughing", "A cowpea or lablab intercrop, edge grass or tree prunings", "Plastic sheets"], answer: 2, why: "Intercrops, grass and prunings add cover without taking all the feed." },
      { objective: "O4", q: "In Nigeria, which body registers agrochemicals such as herbicides?", options: ["NAFDAC", "The weather service", "The central bank", "The football federation"], answer: 0, why: "NAFDAC registers agrochemicals in Nigeria; check its list." },
      { objective: "O4", q: "When are weeds most important to control in a CA crop?", options: ["Only at harvest", "Never", "Only after flowering", "In the first weeks after the crop comes up"], answer: 3, why: "Early weeds compete most with the young crop." },
      { objective: "O4", q: "If you use a herbicide, what must you do?", options: ["Mix your own extra-strong dose", "Use a registered product, follow the label exactly and wear protective equipment", "Spray near the well", "Let children help spray"], answer: 1, why: "Only registered products used as labelled, with protection, are safe and legal." },
      { objective: "O5", q: "Which tool places seed through residues by hand?", options: ["A mouldboard plough", "A water can", "A jab planter", "A harrow"], answer: 2, why: "A jab planter is a hand tool for direct seeding." },
      { objective: "O5", q: "What should each line of your CA calendar include?", options: ["The job, month, tool and cost", "Only the crop name", "Only the rainfall", "The neighbour's name"], answer: 0, why: "Job, month, tool and cost make the calendar usable." },
      { objective: "O5", q: "When are basins dug or reused and manure placed?", options: ["At flowering", "In the dry season before the rains", "During harvest", "After the rains end"], answer: 1, why: "Dry-season preparation lets you plant at the first good rains." },
      { objective: "O6", q: "In drought years, why does CA often do better than ploughing?", options: ["It makes it rain", "It needs no seed", "It stops all pests", "Basins and mulch catch and keep more water"], answer: 3, why: "More water soaks in and less evaporates under cover." },
      { objective: "O6", q: "What may happen to yields in the first one or two CA seasons?", options: ["They always double", "They may stay the same or dip while weeds are heavy and soil adjusts", "They always fall to zero", "Nothing can be known"], answer: 1, why: "The transition can be hard; benefits build over several seasons." },
      { objective: "O6", q: "Why keep a ploughed plot beside your CA plot?", options: ["To compare yield, labour and cost fairly", "To feed the cattle", "Because CA requires it by law", "To grow weeds"], answer: 0, why: "A comparison plot shows what CA is really doing on your farm." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 1, 4, 7, 10, 13, 15, 17, 18] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part of the plan and try again.",
    criteria: [
      { name: "Three principles", objective: "O1", notYet: "The plan still ploughs, leaves soil bare, or grows one crop only.", meets: "The plan shows minimum disturbance, cover and a rotation or intercrop with at least three crops over time.", exceeds: "Explains how the three principles support each other on this field." },
      { name: "Land preparation", objective: "O3", notYet: "No method chosen, or no reasons.", meets: "Basins, zai pits, ripping or direct seeding chosen with at least two reasons (labour, power, soil, size).", exceeds: "Says where the tools come from and has seen or tried the method." },
      { name: "Basins or pits laid out", objective: "O2", notYet: "Basins are not across the slope or have no manure plan.", meets: "Rows across the slope, dry-season digging dates and manure or compost in each basin (if basins or pits are used).", exceeds: "Has dug a test area, timed it and worked out labour for the whole field." },
      { name: "Cover and weeds", objective: "O4", notYet: "No plan for residues, grazing or weeds.", meets: "Keeps at least 30 percent cover, deals with grazing, and has a weeding schedule; any herbicide is registered and used as labelled with protective equipment.", exceeds: "Adds a cover crop or intercrop and a plan to stop weeds seeding." },
      { name: "Season calendar", objective: "O5", notYet: "Jobs are missing or have no dates.", meets: "Every job from dry-season preparation to harvest, with month, tool and cost.", exceeds: "Includes labour days and who does each job." },
      { name: "Comparison through the transition", objective: "O6", notYet: "No comparison plot or records.", meets: "A ploughed comparison plot, with yield, labour days and costs to record each season.", exceeds: "Commits to judging after three seasons and lists what would make them change the plan." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who run a CA season on at least one field with a comparison plot (follow-up survey)",
      "Yield, labour days and cost on CA versus ploughed plots over three seasons, especially in dry years (learner records)",
      "Learners still practising CA after three seasons, and the area they farm under CA",
      "Neighbours or group members who adopt CA (extension reports)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Paper and pen for the field sketch and calendar",
      "A hoe, string or sticks and a tape or measured stick for basin layout",
      "Manure or compost for the test basins",
      "Local prices or hire rates for rippers, jab planters and labour (or example figures)",
      "About 90 minutes in total, plus field time for the basin test"
    ],
    facilitatorNotes: [
      "Run Lesson 2 in the field: lay out and dig a few basins or zai pits together, and time the work.",
      "Invite a farmer who already practises CA, or arrange a visit to a demonstration plot, so learners see ripping or direct seeding working.",
      "Talk openly about grazing customs; bring herders or community leaders into the discussion if possible.",
      "Do not recommend specific herbicides; send learners to the national registration list and the extension officer, and stress the label and protective equipment.",
      "Set honest expectations about the transition: yields may not rise in the first seasons.",
      "Score the final plan with the rubric and follow up after each season to compare plots."
    ]
  }
};
