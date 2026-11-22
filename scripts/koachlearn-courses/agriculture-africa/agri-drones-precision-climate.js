"use strict";

// Koach Learn course: Agriculture (Africa) -> "Drones for Agricultural Monitoring 4: Precision, Climate and Livestock Monitoring" (owner's drone outline, modules 7, 8 and 9).
// Fourth of the six-part monitoring track: using drone maps to manage fields by zone, then monitoring climate and environmental risk, livestock and pasture, and farm infrastructure.
// Prescription maps and cost-benefit analysis in depth are in agri-drones-data-precision; climate-smart practices without drones are in agri-climate-smart.

const FAO_CSA = { name: "FAO: Climate-Smart Agriculture Sourcebook", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };
const FAO_ITU_DRONES = { name: "FAO and ITU: E-agriculture in Action: Drones for Agriculture (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };
const FAO_WHO_AERIAL = { name: "FAO and WHO: Guidance for aerial application of pesticides (2024)", url: "https://www.who.int/publications/i/item/9789240076785" };
const KCAA_UAS = { name: "Kenya Civil Aviation Authority (KCAA): Unmanned Aircraft Systems", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const NCAA_P21 = { name: "Nigeria Civil Aviation Authority (NCAA): Nig.CARs 2023 Part 21, Remotely Piloted Aircraft Systems", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };

module.exports = {
  id: "agri-drones-precision-climate",
  category: "Agriculture (Africa)",
  name: "Drones for Agricultural Monitoring 4: Precision, Climate and Livestock Monitoring",
  skills: "Dividing a field into management zones, Targeting inputs by zone, Assessing plant stand and estimating yield, Monitoring erosion, flooding and drought, Monitoring livestock and pasture, Inspecting farm infrastructure",
  outcome: "use drone maps to manage a mixed farm by zone and write a season-long monitoring plan that covers crops, climate risks, livestock and farm infrastructure.",
  about: [
    "This is Course 4 of the drone monitoring track, for farmers, farm managers, cooperative and extension staff, and drone service providers in Kenya, Nigeria and across Africa. You should be able to make and read a drone map (Courses 2 and 3).",
    "Chapter 1 is precision agriculture: treating each part of a field according to what it needs, instead of treating the whole field the same. You will split a field into zones, target seed, fertilizer and labour, and use plant counts to estimate yield. Chapter 2 widens the view to the whole farm: climate and environmental risks such as erosion, flooding and drought, livestock and pasture, and the dams, water pans, fences, canals and greenhouses that keep a farm running.",
    "Examples include maize and beans in the Rift Valley, cassava and yam in south-west Nigeria, tea in Kericho, and mixed crop-livestock farms. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Write a season-long drone monitoring plan for a mixed farm (real or example, such as 10 hectares with maize, beans, a pasture paddock, 30 cattle, a water pan and a fenced boundary): the zones in the main crop field and what each zone gets, which flights you will make and when (crop, climate risk, livestock, infrastructure), what you will look for each time, and what action each finding could lead to.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Farmers, farm managers, cooperative and extension staff, and drone service providers in Kenya, Nigeria and across Africa taking Course 4 of the drone monitoring track, often on mixed crop-livestock farms.",
    startingPoint: "Learners can make and read a drone map (Courses 2 and 3). Most still treat a whole field the same, check livestock, pasture and infrastructure on foot, and react to erosion, flooding and drought after the damage. Few plan flights across a whole season.",
    gap: "Uneven fields waste inputs where they do not pay, and late warning of erosion, dry spells, overgrazing or a leaking dam costs harvests and money. A season-long monitoring plan with zones lets farms put inputs and labour where they pay and act early on climate, livestock and infrastructure risks.",
    constraints: [
      "Reading level: plain words; every precision farming term is explained",
      "Devices: drone maps from a real farm or examples; a phone with GPS to mark zones",
      "Rules: flights need the country's approvals; spraying by drone also needs pesticide approvals",
      "Animal welfare and privacy: do not scare or chase animals; do not film people or homesteads without permission",
      "Rates and yield figures come from local experience or extension, not from the course"
    ],
    prerequisites: "\"Drones for Agricultural Monitoring 3: Crop Health, Pests and Data Processing\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given drone maps from more than one date and the farmer's knowledge", action: "divide a field into two to four management zones and mark them on the ground", standard: "with each zone named and its reason stated" },
    { id: "O2", condition: "For each management zone", action: "decide what the zone gets: seed, fertilizer, labour or a fix", standard: "matching the action to the zone's cause and never planning drone spraying without approvals" },
    { id: "O3", condition: "Given a drone map and sample counts", action: "calculate plant stand and a rough yield range", standard: "with the stand worked out against the target spacing and the yield given as a range" },
    { id: "O4", condition: "Across a season", action: "plan drone flights to spot erosion, flooding and drought risk and to track climate-smart practices", standard: "on fixed dates so maps can be compared" },
    { id: "O5", condition: "For a livestock or pasture flight", action: "plan a calm, safe flight to count animals and check pasture and water points", standard: "with the herder's agreement and without scaring the animals" },
    { id: "O6", condition: "For farm dams, canals, fences, greenhouses and stores", action: "inspect them from the air and write a repair list", standard: "with item, location, problem, urgency and who will fix it" }
  ],
  chapters: [
    {
      name: "Chapter 1: Precision agriculture",
      lessons: [
        {
          objectives: ["O1"],
          title: "Management zones: one field, different needs",
          minutes: 5,
          goal: "Divide a field into two to four management zones from a drone map and farm knowledge.",
          text: [
            "Most fields are not even. Soil depth, slope, old anthills, past manure, waterlogging and shade make some parts grow better than others. Precision agriculture means managing each part according to its needs.",
            "A management zone is an area of a field that behaves the same way season after season. To draw zones, combine several drone maps (NDVI or colour, from more than one date or season) with what the farmer knows: where water stands, where the soil is shallow, where the crop always does well.",
            "Keep it simple. Two to four zones are enough for most smallholder and medium farms: for example a strong zone, an average zone and a weak, wet zone. Name them and mark them with pegs or GPS points so workers can find them."
          ],
          steps: ["Collect maps of the field from two or more dates if possible.", "Ask the farmer where the crop is always strong or weak, and why.", "Draw two to four zones that match both maps and farmer knowledge.", "Name each zone and mark it on the ground with pegs or GPS points."],
          words: [["Precision agriculture", "managing each part of a field according to what it needs."], ["Management zone", "a part of a field that behaves the same way season after season and is managed as one unit."]],
          slides: [
            { title: "Fields are not even", bullets: ["Soil, slope, water, shade, old manure", "Some parts always grow better"] },
            { title: "Drawing zones", bullets: ["Maps from more than one date", "Plus the farmer's knowledge", "Areas that behave the same each season"] },
            { title: "Keep it simple", bullets: ["Two to four zones", "Strong, average, weak or wet", "Mark them on the ground"] }
          ],
          tryIt: "Sketch a field you know (or use an example map). Draw two to four zones, name them, and write why each zone is different.",
          youCanNow: "divide a field into simple management zones using maps and the farmer's knowledge.",
          quickCheck: [
            { objective: "O1", q: "Which is a sensible set of management zones for a smallholder field?", options: ["A strong zone, an average zone and a weak, wet zone", "One zone for every plant", "Twenty zones of equal size", "No zones at all"], answer: 0, why: "Two to four simple zones are enough for most smallholder and medium farms." },
            { objective: "O1", q: "The farmer says one corner always does badly, but this season's single map shows it green. What do you do?", options: ["Ignore the farmer", "Draw zones from this one map only", "Check maps from other dates and seasons and use the farmer's knowledge", "Give up on zones"], answer: 2, why: "Zones are drawn from several maps and dates together with what the farmer knows." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Targeting inputs by zone",
          minutes: 6,
          goal: "Decide what each zone gets: seed, fertilizer, labour or a fix.",
          text: [
            "Once you have zones, ask what each one needs. A weak zone on shallow soil may not repay extra fertilizer; a waterlogged zone may need a drain, not fertilizer; an average zone may give the best return on extra inputs. This is variable-rate management: different rates in different places.",
            "On large farms, machines can apply variable rates from a prescription map. On smallholder farms the same idea works by hand: workers put more or less fertilizer or manure per planting hole by zone, replant gaps only where the drone shows them, and weed or scout the problem zones first.",
            "Some drones can spray or spread. Spraying pesticides by drone needs its own approvals from your aviation authority and your country's pesticide regulator, trained and licensed operators, and safe practices such as those in the FAO and WHO guidance on aerial application. Never spray, or advise spraying, without them."
          ],
          steps: ["For each zone, write why it is weak or strong.", "Choose the action that fixes the cause: drain, replant, more or less fertilizer, weeding.", "Write the rate or task for each zone so workers can follow it.", "Spraying by drone: only with the required aviation and pesticide approvals."],
          words: [["Variable-rate", "applying different amounts of seed, fertilizer or water in different parts of a field."], ["Prescription map", "a map that tells a person or machine how much to apply in each zone."]],
          slides: [
            { title: "Fix the cause", bullets: ["Shallow soil: extra fertilizer may not pay", "Waterlogged: drain, not fertilizer", "Average zone: often the best return"] },
            { title: "Variable rate by hand", bullets: ["More or less per planting hole by zone", "Replant gaps only where needed", "Weed and scout problem zones first"] },
            { title: "Spray drones", bullets: ["Need aviation AND pesticide approvals", "Trained, licensed operators", "Follow FAO/WHO aerial application guidance"] }
          ],
          sources: [FAO_WHO_AERIAL, KCAA_UAS, NCAA_P21],
          tryIt: "Using your zones from Lesson 1, write a one-line instruction for each zone that a farm worker could follow (for example: Zone C, wet corner: dig a drain before topdressing; no extra fertilizer).",
          youCanNow: "decide and write what each management zone should get, and know when spraying needs special approval.",
          quickCheck: [
            { objective: "O2", q: "On a large farm, what is a prescription map used for?", options: ["Counting cattle", "Inspecting fences", "Writing the farm's budget", "Telling machines what rate to apply in each place"], answer: 3, why: "On large farms, machines can apply variable rates from a prescription map." },
            { objective: "O2", q: "The drone shows gaps only in the average zone. What do you tell the workers?", options: ["Replant the whole field", "Replant gaps only where the drone shows them", "Add fertilizer to the gaps", "Leave the gaps"], answer: 1, why: "On smallholder farms, workers replant only where the drone shows gaps." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Plant counts and early yield estimates",
          minutes: 5,
          goal: "Estimate plant stand and a rough yield range from a drone map and sample counts.",
          text: [
            "Plant stand is how many plants came up compared with how many were planted. A drone map at fine detail shows gaps clearly. Some software can count plants automatically; you can also count by hand in sample squares on the map.",
            "To estimate stand: mark a few sample areas of known size in each zone, count plants, and compare with the target spacing. If a maize field was planted at 75 cm by 25 cm, the target is about 53,000 plants per hectare; if you count 40,000, stand is about 75 percent.",
            "A rough yield estimate multiplies plants per hectare by an expected yield per plant from local experience or extension figures, zone by zone. Treat it as a range, not a promise: weather, pests and harvest losses change the final number. It still helps plan storage, sales and transport early."
          ],
          steps: ["Mark sample squares of known size in each zone on the map.", "Count plants in each square (by eye or software).", "Work out plants per hectare and compare with the target.", "Multiply by expected yield per plant from local figures to get a range.", "Write the range and what could change it."],
          words: [["Plant stand", "the number of plants that came up compared with the number planted."], ["Yield estimate", "an early guess of how much the field will produce."]],
          slides: [
            { title: "Plant stand", bullets: ["Plants that came up vs plants planted", "Gaps are clear on fine-detail maps"] },
            { title: "Count by sample", bullets: ["Sample squares in each zone", "Count plants, scale to a hectare", "75 cm x 25 cm maize: about 53,000 plants per ha"] },
            { title: "Early yield estimate", bullets: ["Plants per ha x expected yield per plant", "Give a range, not a promise", "Helps plan storage, sales and transport"] }
          ],
          tryIt: "A maize zone of 1 hectare was planted at 75 cm by 25 cm. Your sample counts suggest 44,000 plants per hectare. Work out the stand percentage, then write what could explain the gaps and what you would check.",
          youCanNow: "estimate plant stand and a rough yield range by zone from a drone map and sample counts.",
          quickCheck: [
            { objective: "O3", q: "Why count plants in sample areas of known size?", options: ["To find the farm's boundary", "To work out plants per hectare and compare with the target", "To measure rainfall", "To check the drone's battery"], answer: 1, why: "Counts in areas of known size give plants per hectare, which is compared with the target spacing." },
            { objective: "O3", q: "A buyer asks for your exact harvest a month before harvest. What do you give?", options: ["One exact number as a promise", "Nothing at all", "Last year's number", "A rough range, explaining that weather, pests and losses can change it"], answer: 3, why: "An early yield estimate is a range, not a promise." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Precision agriculture",
        questions: [
          { objective: "O1", q: "What is a management zone?", options: ["Any random square", "A part of a field that behaves the same way season after season", "The farm office", "A no-fly area"], answer: 1, why: "Zones group areas that respond alike, so they can be managed alike." },
          { objective: "O1", q: "Which is the best way to draw zones?", options: ["Use one map from one day only", "Copy a neighbour's zones", "Combine maps from more than one date with the farmer's knowledge", "Draw equal squares"], answer: 2, why: "Several maps plus local knowledge show stable patterns." },
          { objective: "O2", q: "A zone is weak because water stands there after rain. The best action is:", options: ["Improve drainage", "Add double fertilizer", "Spray pesticide", "Plant more seed"], answer: 0, why: "Fix the cause; fertilizer does not fix waterlogging." },
          { objective: "O2", q: "A drone service offers to spray pesticide on a client's maize. What must be in place?", options: ["Only the farmer's permission", "Nothing extra", "A good camera", "Aviation and pesticide approvals and licensed operators"], answer: 3, why: "Spraying by drone is a regulated, higher-risk operation." },
          { objective: "O3", q: "Maize planted at 75 cm x 25 cm has a target of about:", options: ["5,300 plants per hectare", "53,000 plants per hectare", "530,000 plants per hectare", "530 plants per hectare"], answer: 1, why: "10,000 m2 divided by 0.1875 m2 per plant is about 53,000." }
        ]
      }
    },
    {
      name: "Chapter 2: Climate, livestock and infrastructure",
      lessons: [
        {
          objectives: ["O4"],
          title: "Monitoring climate and environmental risk",
          minutes: 6,
          goal: "Use drone flights to spot erosion, flooding and drought risk and to track climate-smart practices.",
          text: [
            "Climate change brings heavier rains, longer dry spells and more heat to many farming areas. FAO describes climate-smart agriculture as farming that raises productivity and incomes, helps farms adapt and build resilience, and reduces or removes greenhouse gas emissions where possible.",
            "Drones help on the adaptation side. After heavy rain, a flight shows gullies, washed-out terraces, silted drains and flooded plots; elevation models show where water will run next time. In dry spells, thermal and NDVI maps show which areas dry out first. Over seasons, maps show whether terraces, cover crops, mulching, tree planting and water harvesting are working.",
            "Fly the same area on fixed dates (for example before the long rains, after the first heavy storm, mid-season, and after harvest) and compare. Share the maps with the farmer group or county or state officers: they show the whole community where to act first."
          ],
          steps: ["Choose fixed flight dates linked to the seasons.", "After heavy rain: map gullies, washouts, silted drains, flooded plots.", "In dry spells: map which areas dry first with NDVI or thermal.", "Each season: check terraces, cover crops, mulch, trees, water harvesting.", "Compare maps over time and share them."],
          words: [["Climate-smart agriculture (CSA)", "farming that raises productivity, helps farms adapt to climate change, and cuts emissions where possible."], ["Erosion", "soil washed or blown away by water or wind."], ["Gully", "a deep channel cut into land by running water."]],
          slides: [
            { title: "Climate-smart agriculture", bullets: ["Raise productivity and incomes", "Adapt and build resilience", "Cut emissions where possible"] },
            { title: "What drones show", bullets: ["After rain: gullies, washouts, flooded plots", "Dry spells: which areas dry first", "Whether terraces, mulch, trees are working"] },
            { title: "Fly on fixed dates", bullets: ["Before rains, after storms, mid-season, after harvest", "Compare over time", "Share with farmer groups and officers"] }
          ],
          sources: [FAO_CSA, FAO_ITU_DRONES],
          tryIt: "Write a yearly calendar of four climate flights for a farm you know, linked to its rainy and dry seasons. For each flight, list two things you will look for.",
          youCanNow: "plan drone flights that track erosion, flooding and drought risk and check whether climate-smart practices work.",
          quickCheck: [
            { objective: "O4", q: "After heavy rain, what does an elevation model help show?", options: ["Which cattle are sick", "The price of maize", "Where water will run next time", "Which seed was certified"], answer: 2, why: "Elevation models show the height of the ground, so you can see where water will run next time." },
            { objective: "O4", q: "After a big storm, your maps show gullies across several farms in the group. What do you do?", options: ["Share the maps with the farmer group and county or state officers", "Keep the maps to yourself", "Delete them because the storm is over", "Fly only your own farm next time"], answer: 0, why: "Shared maps show the whole community where to act first." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Monitoring livestock and pasture",
          minutes: 5,
          goal: "Plan a calm, safe drone flight to count animals and check pasture and water points.",
          text: [
            "On ranches and large pastoral areas, a drone can count cattle, goats or camels, find lost or sick animals, and check that water points and troughs are working, saving hours of walking or driving. Thermal cameras find animals at dawn or in thick bush.",
            "Animals can be frightened by drones, especially at low height. Fly high enough not to scare them, approach slowly from the side, never chase or herd animals with a drone unless you are trained and it is allowed, and stop if they start to run. Ask the herder before you fly.",
            "Pasture maps (NDVI or colour) show where grass is strong, overgrazed or bare. Over a season they help plan rotational grazing and spot land that needs rest. Never film people or homesteads without permission."
          ],
          steps: ["Ask the herder or owner; agree time and area.", "Fly high and approach slowly from the side.", "Count animals from photos, not by circling low.", "Check water points, troughs and fences on the way.", "Map pasture: strong, overgrazed, bare.", "Stop if animals start to run."],
          words: [["Rotational grazing", "moving animals between paddocks so grass can rest and regrow."], ["Overgrazing", "when animals eat grass faster than it can grow back, leaving bare ground."]],
          slides: [
            { title: "What drones do on a ranch", bullets: ["Count animals, find lost or sick ones", "Check water points and troughs", "Thermal at dawn or in thick bush"] },
            { title: "Animal welfare first", bullets: ["Ask the herder", "Fly high, approach slowly from the side", "Never chase; stop if animals run"] },
            { title: "Pasture maps", bullets: ["Strong, overgrazed or bare grass", "Plan rotational grazing", "Spot land that needs rest"] }
          ],
          tryIt: "Write a short flight plan for counting 60 cattle in a 40-hectare paddock: time of day, height, approach, what else you will check, and when you would stop.",
          youCanNow: "plan a calm, safe livestock and pasture flight and use it to support grazing decisions.",
          quickCheck: [
            { objective: "O5", q: "What can a drone do on a ranch?", options: ["Count animals and check that water points and troughs work", "Herd cattle into the boma", "Treat sick animals", "Milk the cows"], answer: 0, why: "Drones can count animals, find lost or sick ones and check water points, saving walking or driving." },
            { objective: "O5", q: "A herder is moving goats near your planned flight. What do you do?", options: ["Fly low to get close photos", "Chase the goats into one group", "Ask the herder first, fly high and approach slowly from the side", "Fly straight over them quickly"], answer: 2, why: "Ask the herder, and fly high and slowly from the side so the animals are not frightened." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Inspecting farm infrastructure",
          minutes: 5,
          goal: "Inspect dams, canals, fences, greenhouses and stores from the air and list repairs.",
          text: [
            "Farm infrastructure is expensive and easy to forget until it fails. A short drone flight can check a water pan or small dam wall for cracks and seepage, irrigation canals and pipelines for leaks or blockages, boundary fences for breaks, greenhouse roofs and nets for tears, and store roofs for damage.",
            "Fly slowly along the structure with the camera angled, not just straight down. Keep a safe distance from power lines and buildings, and stay within your approvals. Take photos at the same spots each time so you can compare.",
            "Turn the photos into a repair list: item, location, problem, urgency, and who will fix it. Fly again after repairs, and before the rains when a failure would hurt most."
          ],
          steps: ["List the structures to check and their locations.", "Fly slowly along each one with the camera angled.", "Photograph the same spots each time.", "Write a repair list: item, location, problem, urgency, who fixes it.", "Fly again after repairs and before the rains."],
          words: [["Water pan", "a dug pond that collects rainwater for animals or irrigation."], ["Seepage", "water slowly leaking through a dam wall or canal bank."]],
          slides: [
            { title: "What to inspect", bullets: ["Water pans and small dam walls", "Canals and pipelines", "Fences, greenhouse roofs, store roofs"] },
            { title: "How to fly it", bullets: ["Slowly along the structure", "Camera angled, not just straight down", "Same photo spots each time"] },
            { title: "Turn photos into repairs", bullets: ["Item, location, problem, urgency, who", "Fly again after repairs and before rains"] }
          ],
          tryIt: "Final task: write your season-long monitoring plan for a mixed farm: zones and what each gets, crop flights, climate flights, a livestock and pasture flight, an infrastructure flight, what you look for each time and what action each finding could lead to.",
          youCanNow: "inspect farm infrastructure by drone and plan whole-farm monitoring across a season.",
          quickCheck: [
            { objective: "O6", q: "Which problem can a drone flight find on a greenhouse?", options: ["The crop's sale price", "The soil's pH", "A pest's name", "Tears in the roof plastic or nets"], answer: 3, why: "Flights can show tears in greenhouse roofs and nets before they get worse." },
            { objective: "O6", q: "The rains start in three weeks and the water pan wall was repaired last week. What do you do?", options: ["Wait until after the rains", "Fly again to check the repair before the rains", "Never check it again", "Fly straight down only, high above it"], answer: 1, why: "Fly again after repairs and before the rains, when a failure would hurt most." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Climate, livestock and infrastructure",
        questions: [
          { objective: "O4", q: "FAO's climate-smart agriculture has three aims. Which is one of them?", options: ["Helping farms adapt and build resilience", "Using as much fertilizer as possible", "Clearing all trees", "Farming only one crop"], answer: 0, why: "CSA aims at productivity, adaptation and resilience, and lower emissions." },
          { objective: "O4", q: "When is a good time for a climate flight to find gullies and washouts?", options: ["Only at midnight", "Never", "After the first heavy storm of the season", "During a drone exhibition"], answer: 2, why: "Fresh damage shows clearly right after heavy rain." },
          { objective: "O5", q: "Cattle start to run while the drone is overhead. You should:", options: ["Fly lower to calm them", "Chase them back", "Keep circling", "Stop and move the drone away"], answer: 3, why: "Animal welfare and safety come first." },
          { objective: "O5", q: "A pasture map shows a paddock with much bare ground. This suggests:", options: ["Overgrazing; the paddock may need rest", "The drone is broken", "Too much rain only", "Perfect pasture"], answer: 0, why: "Bare ground in pasture often means animals ate faster than grass regrew." },
          { objective: "O6", q: "When inspecting a water pan wall, you should:", options: ["Fly straight down only, very fast", "Fly slowly along it with the camera angled", "Fly over people nearby", "Skip it"], answer: 1, why: "An angled camera shows cracks and seepage on the wall." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Drones for Agricultural Monitoring 4: Precision, Climate and Livestock Monitoring",
    questions: [
      { objective: "O1", q: "Precision agriculture means:", options: ["Treating every part of a field the same", "Managing each part of a field according to its needs", "Using only drones", "Farming at night"], answer: 1, why: "It matches inputs and work to what each area needs." },
      { objective: "O1", q: "Why are most fields uneven?", options: ["Drones make them uneven", "They are not", "Soil, slope, water, shade and past use differ", "Seeds are always bad"], answer: 2, why: "Natural and farming history make some areas grow better." },
      { objective: "O1", q: "How many zones are usually enough on a smallholder farm?", options: ["Two to four", "Fifty", "One hundred", "None"], answer: 0, why: "A few simple zones are easy to manage and mark." },
      { objective: "O1", q: "Why mark zones on the ground?", options: ["To decorate the farm", "The law requires pegs", "To scare birds", "So workers can find and treat each zone"], answer: 3, why: "Workers need to see where each zone starts and ends." },
      { objective: "O2", q: "Variable-rate means:", options: ["Different amounts in different places", "Same amount everywhere", "Changing the drone's speed", "Changing crop prices"], answer: 0, why: "Rates change by zone according to need." },
      { objective: "O2", q: "On a smallholder farm, variable-rate can be done by:", options: ["Only large machines", "Workers using more or less fertilizer per hole by zone", "Satellites", "Not at all"], answer: 1, why: "The idea works by hand with clear zone instructions." },
      { objective: "O2", q: "A weak zone on shallow, stony soil may:", options: ["Always need double fertilizer", "Be the best place for more seed", "Not repay extra fertilizer", "Need spraying"], answer: 2, why: "The soil limits growth; extra input may be wasted." },
      { objective: "O2", q: "Who must approve pesticide spraying by drone?", options: ["Only the drone seller", "Only the farmer", "Only a neighbour", "The aviation authority and the pesticide regulator"], answer: 3, why: "Both aviation and pesticide rules apply to spray drones." },
      { objective: "O3", q: "Plant stand is:", options: ["Plants that came up vs plants planted", "The height of the drone", "The farm's sign", "The price of seed"], answer: 0, why: "It shows how well the crop established." },
      { objective: "O3", q: "You count 40,000 maize plants per hectare against a target of about 53,000. Stand is about:", options: ["25 percent", "50 percent", "75 percent", "100 percent"], answer: 2, why: "40,000 divided by 53,000 is about 0.75." },
      { objective: "O3", q: "An early yield estimate should be given as:", options: ["An exact promise", "A secret", "A range that can change", "A loan amount"], answer: 2, why: "Weather, pests and losses change the final yield." },
      { objective: "O4", q: "Which is a climate-smart practice drones can help track?", options: ["Burning crop residue", "Ploughing up and down slopes", "Removing all trees", "Terraces, mulching and tree planting"], answer: 3, why: "Maps show whether these practices are working over time." },
      { objective: "O4", q: "In a dry spell, which maps show which areas dry first?", options: ["NDVI or thermal maps", "A road map", "A price list", "A rainfall poster"], answer: 0, why: "NDVI and thermal show plant vigour and heat stress." },
      { objective: "O4", q: "Why fly the same area on fixed dates?", options: ["To use more batteries", "To compare changes over time", "Because drones need routine", "To film neighbours"], answer: 1, why: "Repeated maps show trends and the effect of actions." },
      { objective: "O5", q: "Before a livestock flight you should:", options: ["Fly low over the herd", "Chase animals into one place", "Ask the herder and agree time and area", "Fly at maximum speed"], answer: 2, why: "Permission and a calm approach protect animals and people." },
      { objective: "O5", q: "Thermal cameras on a ranch help to:", options: ["Make grass grow", "Repair fences", "Read ear tags", "Find animals at dawn or in thick bush"], answer: 3, why: "Animals show up as warm spots." },
      { objective: "O5", q: "Rotational grazing means:", options: ["Moving animals between paddocks so grass can regrow", "Keeping animals in one place all year", "Grazing at night only", "Feeding only hay"], answer: 0, why: "Resting paddocks lets grass recover." },
      { objective: "O6", q: "Seepage on a dam wall means:", options: ["The dam is full of fish", "Water is slowly leaking through", "The wall is new", "It is raining"], answer: 1, why: "Seepage can weaken the wall and should be repaired." },
      { objective: "O6", q: "A good infrastructure repair list includes:", options: ["Only photos", "The drone model", "Item, location, problem, urgency and who will fix it", "Market prices"], answer: 2, why: "Clear details get repairs done." },
      { objective: "O6", q: "When is an infrastructure check most useful?", options: ["Never", "Only after a failure", "During a storm", "Before the rains and after repairs"], answer: 3, why: "Fixing problems before the rains prevents failures." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      2,
      4,
      7,
      8,
      9,
      11,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part of the plan and check it again.",
    criteria: [
      {
        name: "Management zones",
        objective: "O1",
        notYet: "No zones, or zones drawn from one map with no reason.",
        meets: "Two to four named zones in the main field, from maps and the farmer's knowledge, with how they are marked.",
        exceeds: "Uses maps from more than one date or season."
      },
      {
        name: "What each zone gets",
        objective: "O2",
        notYet: "Every zone gets the same treatment, or drone spraying is planned without approvals.",
        meets: "Each zone has an action that fits its cause: seed, fertilizer, labour or a fix.",
        exceeds: "Includes a plant stand check and a rough yield range by zone."
      },
      {
        name: "Climate flights",
        objective: "O4",
        notYet: "No climate or environmental flights.",
        meets: "Flights on fixed dates to check erosion, flooding and drought, and what each finding would lead to.",
        exceeds: "Tracks a climate-smart practice such as terraces or mulching over the season."
      },
      {
        name: "Livestock and pasture",
        objective: "O5",
        notYet: "No livestock flights, or flights that would scare animals.",
        meets: "Flights to count animals and check pasture and water points, with the herder's agreement and safe height.",
        exceeds: "Links pasture maps to a rotational grazing plan."
      },
      {
        name: "Infrastructure",
        objective: "O6",
        notYet: "Dams, fences or other structures are not included.",
        meets: "Flights to inspect the water pan, fences and other structures, with a repair list format.",
        exceeds: "Timed before the rains and after repairs, with photos from the same spots."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and score Meets or Exceeds on every rubric row of the monitoring plan",
      "Learners who report managing a field by zones or following a season monitoring plan within one season (follow-up survey)",
      "Farms or groups that report acting early on erosion, drought, overgrazing or an infrastructure fault",
      "Learners who go on to Course 5 of the drone track"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Drone maps of a real farm, or the course's example mixed farm",
      "A phone with GPS, and pegs or flags to mark zones",
      "A notebook or spreadsheet for the zone table and season plan",
      "About 60 minutes in total, in short sessions, plus time to write the monitoring plan"
    ],
    facilitatorNotes: [
      "Take the pre-test together, then draw zones on one example map as a group before learners draw their own.",
      "Bring local expected yields and fertilizer advice from extension; do not give rates yourself.",
      "Do not plan or demonstrate drone spraying without aviation and pesticide approvals.",
      "If flying near livestock, ask the herder first, fly high and stop if animals start to run.",
      "Score the monitoring plan with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
