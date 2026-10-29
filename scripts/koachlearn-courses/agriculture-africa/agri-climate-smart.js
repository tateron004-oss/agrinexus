"use strict";

// Koach Learn course: Agriculture (Africa) -> "Climate-Smart Agriculture".
// For smallholder farmers, extension officers and young farmers: understanding climate risk on your own farm, using official forecasts, and choosing soil, water,
// crop, tree, livestock and insurance practices that fit. Agronomy specifics are sourced to FAO, CGIAR and icipe pages; forecasts to the national weather services.

const FAO_CSA = { name: "FAO: Climate-Smart Agriculture Sourcebook", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };
const KMD = { name: "Kenya Meteorological Department (seasonal forecasts, agrometeorological bulletins)", url: "https://meteo.go.ke" };
const NIMET = { name: "Nigerian Meteorological Agency (NiMet)", url: "https://nimet.gov.ng" };
const CGIAR_MAIZE = { name: "CGIAR: Climate-smart (drought-tolerant) maize", url: "https://www.cgiar.org/innovations/climate-smart-maize/" };
const ICIPE_PUSHPULL = { name: "icipe: Push-pull technology halts fall armyworm", url: "https://www.icipe.org/news/icipe-push-pull-technology-halts-fall-armyworm-rampage" };
const FAO_EO = { name: "FAO GIEWS Earth Observation (drought and vegetation indicators)", url: "https://www.fao.org/giews/earthobservation/index.jsp" };

module.exports = {
  id: "agri-climate-smart",
  category: "Agriculture (Africa)",
  name: "Climate-Smart Agriculture",
  skills: "Explaining climate-smart agriculture, Reading official seasonal forecasts, Mapping your farm's climate risks, Choosing soil and water practices, Choosing resilient crops and varieties, Using trees, livestock and insurance to spread risk",
  outcome: "write and start a climate-smart plan for your own farm: the climate risks it faces through the year, what the official seasonal forecast says, and the soil, water, crop, tree, livestock and insurance practices you will use this season.",
  about: [
    "This course is for smallholder farmers, young farmers, extension officers and farmer-group leaders in Kenya, Nigeria and across Africa who are seeing longer dry spells, heavier rains, more heat and new pests, and want practical ways to keep harvests and incomes steady.",
    "Chapter 1 helps you understand climate risk on your own farm: what climate-smart agriculture means, how to read the official seasonal forecast from your national weather service, and how to draw a simple climate-risk calendar. Chapter 2 is about practices: keeping soil and water on the farm, choosing crops and varieties that cope, and using trees, livestock and insurance to spread risk.",
    "Every farm is different. Use this course with advice from your extension officer, agrovet or research institute, and test new practices on a small plot first. Each lesson takes about five minutes and ends with a task on your own farm. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Write a one-page climate-smart plan for your farm (or an example farm such as 2 acres of maize and beans in Machakos, or 3 acres of sorghum and cowpea in Kano): a month-by-month climate-risk calendar, what this season's official forecast says and the date you read it, and at least five practices you will use (at least one each for soil and water, crops and varieties, and spreading risk), with when you will start each and how you will know if it worked.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Smallholder farmers, young farmers, extension officers and farmer-group leaders in Kenya, Nigeria and across Africa who face longer dry spells, heavier rains, more heat and new pests.",
    startingPoint: "Know their land, crops and seasons well, and many already use some climate-smart practices without that name. Few read the official seasonal forecast, draw a climate-risk calendar or plan practices to spread risk across a season.",
    gap: "Changing rains and new pests make harvests and incomes less steady. Farmers need to read official forecasts, see the danger points in their year, and choose soil, water, crop, tree, livestock and insurance practices that fit their farm, testing them before using them everywhere.",
    constraints: [
      "Reading level: plain words and short sentences; many learners use English as a second language",
      "Devices: a basic phone, radio or extension bulletin; a smartphone helps but is optional",
      "Cost and labour: start with low-cost practices tested on a small area",
      "Forecasts, varieties, insurance and regulators differ by country: learners check KMD, NiMet or their national service, extension officers and licensed sellers",
      "Time: learners fit lessons around farm work and seasons"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given practices used on your farm or in your village", action: "explain the three aims of climate-smart agriculture and judge whether each practice is climate-smart", standard: "naming which aim each practice helps" },
    { id: "O2", condition: "Before a rainy season", action: "find your national weather service's seasonal forecast and write two changes it means for your plan", standard: "noting what it says, the date you read it, and that it gives chances, not promises" },
    { id: "O3", condition: "For your own farm or an example farm", action: "draw a month-by-month climate-risk calendar and circle the danger points", standard: "with seasons, farm jobs, risks and at least two danger points marked" },
    { id: "O4", condition: "Given the slope and water flow on your farm", action: "choose soil and water practices that fit and plan a small test", standard: "comparing the tested area with your usual way" },
    { id: "O5", condition: "Given your main crop and local risks", action: "choose certified drought-tolerant or early varieties, a drought-hardy crop and a planting strategy that reduce risk", standard: "buying seed only from registered dealers" },
    { id: "O6", condition: "Beyond your main crop", action: "plan at least one way to spread risk with trees, livestock feed and water, or insurance", standard: "checking any insurance trigger and that the insurer is licensed" }
  ],
  chapters: [
    {
      name: "Chapter 1: Understanding climate risk on your farm",
      lessons: [
        {
          objectives: ["O1"],
          title: "What climate-smart agriculture means",
          minutes: 5,
          goal: "Explain the three aims of climate-smart agriculture and judge whether a practice is climate-smart.",
          text: [
            "Climate-smart agriculture (CSA) is a way of choosing farming practices with climate change in mind. FAO describes three aims: raise productivity and incomes in a sustainable way; help farms and families adapt and build resilience to climate shocks; and reduce or remove greenhouse gas emissions where possible.",
            "FAO stresses that a practice does not have to do all three. For most smallholders, food and income come first; lower emissions are a bonus. A practice is climate-smart if it fits your farm and makes it more productive and more resilient.",
            "Examples farmers in Africa already use: mulching and minimum tillage to keep soil moist, planting pits and water pans, drought-tolerant and early-maturing varieties, intercropping maize with beans or cowpea, push-pull for stemborers and fall armyworm, trees on farm, improved fodder, and crop or livestock insurance."
          ],
          words: [["Climate-smart agriculture (CSA)", "farming that raises productivity, helps farms adapt to climate change, and cuts emissions where possible."], ["Resilience", "the ability of a farm and family to cope with a shock, such as drought, and recover quickly."], ["Adaptation", "changing how you farm to cope with a changing climate."]],
          slides: [
            { title: "Three aims (FAO)", bullets: ["Raise productivity and incomes", "Adapt and build resilience", "Reduce emissions where possible"] },
            { title: "Not all three at once", bullets: ["Food and income come first", "Lower emissions are a bonus", "Fits your farm + more resilient = climate-smart"] },
            { title: "Examples in Africa", bullets: ["Mulch, minimum tillage, planting pits, water pans", "Drought-tolerant varieties, intercropping, push-pull", "Trees on farm, fodder, insurance"] }
          ],
          sources: [FAO_CSA],
          tryIt: "List three practices already used on your farm or in your village. For each, write which of the three CSA aims it helps (productivity, resilience, emissions).",
          youCanNow: "explain the three aims of climate-smart agriculture and judge whether a practice is climate-smart.",
          quickCheck: [
            { objective: "O1", q: "Which is a climate-smart practice farmers in Africa already use?", options: ["Mulching to keep soil moist", "Burning all crop residue", "Planting only one crop every year", "Ploughing the field many times"], answer: 0, why: "Mulching keeps soil moist and covered, helping productivity and resilience." },
            { objective: "O1", q: "A practice raises your yields and helps you survive dry spells but does not cut emissions. Is it climate-smart?", options: ["No; it must do all three", "Yes, if it fits your farm and improves productivity and resilience", "Only if a government approves it", "Only if it is new"], answer: 1, why: "FAO says a practice does not have to meet all three aims; for smallholders, food and income come first." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Reading the official seasonal forecast",
          minutes: 5,
          goal: "Find and use your national weather service's seasonal forecast to plan the season.",
          text: [
            "Before each rainy season, national weather services publish a seasonal forecast: whether rains are expected to be above, near or below normal, and when they may start and end. In Kenya, the Kenya Meteorological Department (KMD) publishes seasonal forecasts and agrometeorological bulletins. In Nigeria, the Nigerian Meteorological Agency (NiMet) publishes seasonal climate predictions. Other countries have their own services; many forecasts are also shared on radio and by extension officers.",
            "A seasonal forecast gives chances, not promises. \"Below normal\" means a higher chance of less rain than usual in your area, not that it will certainly be dry. Use it to adjust, not to bet everything: for example choose a shorter-maturing variety, plant on the right date, plan water harvesting, or reduce area of a thirsty crop.",
            "Use short-range forecasts (the next few days) for daily decisions such as when to plant after the rains start, when to spray or topdress, and when to harvest and dry."
          ],
          steps: ["Find your national weather service's website, radio slot or extension bulletin.", "Read the seasonal forecast for your county or state.", "Note: above, near or below normal; expected start and end of rains.", "Write two changes you will make because of it.", "Check short-range forecasts for planting, topdressing and harvest days."],
          words: [["Seasonal forecast", "an outlook of rainfall and temperature for the coming season, given as chances."], ["Onset", "the start of the rainy season."], ["Agrometeorological bulletin", "a weather report written for farmers, linking weather to crops."]],
          slides: [
            { title: "Official seasonal forecasts", bullets: ["Kenya: Kenya Meteorological Department (KMD)", "Nigeria: NiMet", "Also on radio and from extension officers"] },
            { title: "Chances, not promises", bullets: ["Above, near or below normal", "Expected start and end of rains", "Adjust; do not bet everything"] },
            { title: "Use it", bullets: ["Shorter-maturing variety if rains are poor", "Plan water harvesting", "Short-range forecasts for daily jobs"] }
          ],
          sources: [KMD, NIMET],
          tryIt: "Find the latest seasonal forecast for your area from KMD, NiMet or your country's weather service. Write what it says, the date you read it, and two changes you will make to your plan.",
          youCanNow: "find the official seasonal forecast and use it to adjust your season plan.",
          quickCheck: [
            { objective: "O2", q: "What does a seasonal forecast tell you?", options: ["The exact rain on each day", "The price of maize", "Whether rains are likely above, near or below normal", "Which seed to buy"], answer: 2, why: "A seasonal forecast gives the chances of above, near or below normal rain and when rains may start and end." },
            { objective: "O2", q: "The forecast says rains may end early. What is a sensible change?", options: ["Plant a long-maturing variety", "Plant much later than usual", "Do nothing", "Choose a shorter-maturing variety"], answer: 3, why: "A shorter-maturing variety can finish before the rains end." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Drawing your farm's climate-risk calendar",
          minutes: 5,
          goal: "Draw a month-by-month calendar of the climate risks your farm faces.",
          text: [
            "A climate-risk calendar puts your crops and animals next to the risks of each month. Draw 12 columns for the months. In the first row, write your seasons (long rains, short rains, dry season, or wet and dry season in much of Nigeria). Below, write what you do each month: land preparation, planting, weeding, topdressing, harvest, drying, selling, and when animals need most feed and water.",
            "Then mark the risks: late onset or early end of rains, dry spells in the middle of the season, heavy storms and floods, heat at flowering, pests and diseases that follow weather (fall armyworm, aphids, fungal diseases in wet spells), and post-harvest losses when grain is stored damp.",
            "Look for the danger points: the months when an important job meets a big risk, such as maize flowering in a month that often has a dry spell. Those are where climate-smart practices help most. Ask older farmers how the pattern has changed over the years."
          ],
          steps: ["Draw 12 month columns; write your seasons.", "Write your farm jobs and animal needs by month.", "Mark the climate risks and weather-linked pests.", "Circle the danger points where a key job meets a big risk.", "Ask older farmers what has changed."],
          words: [["Dry spell", "a period of days or weeks without useful rain during the rainy season."], ["Danger point", "a time when an important farm job meets a high climate risk."]],
          slides: [
            { title: "Twelve columns", bullets: ["Seasons on top", "Farm jobs and animal needs by month"] },
            { title: "Mark the risks", bullets: ["Late onset, early end, dry spells", "Storms, floods, heat at flowering", "Weather-linked pests, damp storage"] },
            { title: "Find danger points", bullets: ["Key job meets big risk", "Where CSA practices help most", "Ask older farmers what changed"] }
          ],
          sources: [FAO_EO],
          tryIt: "Draw the climate-risk calendar for your farm on paper or in a phone spreadsheet. Circle at least two danger points.",
          youCanNow: "draw a climate-risk calendar for your farm and find its danger points.",
          quickCheck: [
            { objective: "O3", q: "What goes in the rows below the months on a climate-risk calendar?", options: ["Your farm jobs, animal needs and the risks", "Only market prices", "Your family's birthdays", "Only rainfall totals"], answer: 0, why: "The calendar puts farm jobs and animal needs next to each month's risks." },
            { objective: "O3", q: "You store maize in a month that is often wet. What do you mark?", options: ["Nothing; storage is safe", "A post-harvest loss risk from damp grain", "A drought risk", "A planting job"], answer: 1, why: "Grain stored damp in wet months is a post-harvest loss risk." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Understanding climate risk on your farm",
        questions: [
          { objective: "O1", q: "Which is one of FAO's three aims of climate-smart agriculture?", options: ["Use as much chemical as possible", "Help farms adapt and build resilience", "Plant only one crop", "Clear all trees"], answer: 1, why: "CSA aims at productivity, adaptation and resilience, and lower emissions where possible." },
          { objective: "O1", q: "Must a climate-smart practice achieve all three aims at once?", options: ["Yes, always", "Only in Kenya", "No; it should fit the farm and improve productivity and resilience", "Only on large farms"], answer: 2, why: "FAO says practices need not deliver every aim; food and income come first." },
          { objective: "O2", q: "The seasonal forecast says \"below normal rainfall\". This means:", options: ["A higher chance of less rain than usual", "It will certainly not rain", "Floods are certain", "Nothing useful"], answer: 0, why: "Seasonal forecasts give chances, not certainties." },
          { objective: "O2", q: "Where should a Nigerian farmer look for the official seasonal forecast?", options: ["A rumour at the market", "Last year's calendar", "A social media stranger", "NiMet or its forecasts shared by extension and radio"], answer: 3, why: "NiMet is Nigeria's official weather service." },
          { objective: "O3", q: "A danger point on a climate-risk calendar is:", options: ["When an important farm job meets a high climate risk", "A place to sell crops", "A type of pest", "A month with no farm work"], answer: 0, why: "Danger points show where practices help most." }
        ]
      }
    },
    {
      name: "Chapter 2: Climate-smart practices",
      lessons: [
        {
          objectives: ["O4"],
          title: "Keeping soil and water on the farm",
          minutes: 6,
          goal: "Choose soil and water practices that fit your farm and slope.",
          text: [
            "Healthy soil holds more water and feeds crops through dry spells. Three conservation agriculture principles help: disturb the soil as little as possible (minimum tillage), keep it covered (crop residue or mulch instead of burning), and rotate or intercrop (for example maize with beans, cowpea or pigeon pea). Add manure or compost to build organic matter.",
            "Catch rain where it falls. Planting pits or basins (called zai in the Sahel) collect water and manure around each plant. Tied ridges and contour bunds stop water running off. On slopes, terraces such as fanya juu in Kenya, grass strips and trees along contours stop erosion. Water pans and roof catchment store water for animals, nurseries and kitchen gardens.",
            "Start small: try a practice on one part of the field, compare it with your usual way, and keep what works. Ask your extension officer for local designs and labour needs."
          ],
          steps: ["Stop burning residue; leave it as mulch.", "Reduce ploughing where weeds can be managed.", "Rotate or intercrop with a legume.", "Catch rain: planting pits, tied ridges, contour bunds.", "On slopes: terraces, grass strips, trees on contours.", "Try on a small area first and compare."],
          words: [["Conservation agriculture", "farming with minimum soil disturbance, permanent soil cover and crop rotation."], ["Mulch", "a layer of crop residue, grass or leaves on the soil to keep it moist and cool."], ["Zai pits / planting basins", "small pits that collect rainwater and manure around plants."], ["Fanya juu", "a Kenyan terrace made by throwing soil uphill from a ditch to form a bank."]],
          slides: [
            { title: "Healthy soil holds water", bullets: ["Minimum tillage", "Keep soil covered: mulch, no burning", "Rotate or intercrop with legumes"] },
            { title: "Catch rain where it falls", bullets: ["Planting pits and basins (zai)", "Tied ridges and contour bunds", "Water pans and roof catchment"] },
            { title: "Protect slopes", bullets: ["Terraces such as fanya juu", "Grass strips and trees on contours"] },
            { title: "Start small", bullets: ["Try on part of the field", "Compare with your usual way", "Ask extension for local designs"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Walk your farm after rain or look at it now. Mark where water runs off, where soil is washing away, and where water stands. Choose one soil or water practice for one spot and write how you will test it.",
          youCanNow: "choose and test soil and water practices that keep moisture and soil on your farm.",
          quickCheck: [
            { objective: "O4", q: "What are tied ridges and contour bunds for?", options: ["Storing grain", "Feeding animals", "Stopping water running off the field", "Marking the farm boundary"], answer: 2, why: "They hold rain on the field so it soaks in instead of running off." },
            { objective: "O4", q: "Water rushes down your sloping field after rain and carries soil. What do you choose?", options: ["Plough up and down the slope", "Burn the residue", "Leave the soil bare", "Grass strips or terraces along the contours"], answer: 3, why: "Terraces and grass strips on contours stop erosion on slopes." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Choosing crops and varieties that cope",
          minutes: 5,
          goal: "Pick crops, varieties and planting strategies that reduce climate risk.",
          text: [
            "Varieties matter. CGIAR's maize research center CIMMYT and partners have bred drought-tolerant maize varieties released across many countries in sub-Saharan Africa; CGIAR reports they can yield clearly more than conventional varieties under drought. Early-maturing beans and maize escape late-season drought. Ask your agrovet or extension officer which certified varieties suit your area, and buy certified seed from registered dealers.",
            "Crops matter too. Sorghum, millet, cassava, cowpea and pigeon pea cope with dry conditions better than maize in many areas. Growing more than one crop, and intercropping, spreads risk: if one fails, another may succeed.",
            "Pests change with the climate. Push-pull, developed by icipe with partners, intercrops maize or sorghum with desmodium and borders it with Napier or Brachiaria grass; icipe reports it sharply reduces stemborer, striga and fall armyworm damage. Stagger planting dates in small blocks, and plant promptly at the true onset of rains."
          ],
          steps: ["Ask extension or an agrovet for certified drought-tolerant or early varieties for your area.", "Buy certified seed from a registered dealer.", "Add a drought-hardy crop (sorghum, cassava, cowpea, pigeon pea).", "Intercrop to spread risk; consider push-pull for maize or sorghum.", "Plant promptly at true onset; stagger small blocks."],
          words: [["Drought-tolerant variety", "a crop variety bred to yield better than others when water is short."], ["Early-maturing", "ready to harvest sooner, so it can escape late-season drought."], ["Certified seed", "seed checked by the official seed authority for purity and quality."], ["Push-pull", "a system where desmodium repels pests from maize or sorghum and border grass attracts them away."]],
          slides: [
            { title: "Varieties", bullets: ["Drought-tolerant maize (CGIAR/CIMMYT)", "Early-maturing maize and beans", "Certified seed from registered dealers"] },
            { title: "Crops", bullets: ["Sorghum, millet, cassava, cowpea, pigeon pea", "More than one crop spreads risk"] },
            { title: "Pests and timing", bullets: ["Push-pull: desmodium + border grass (icipe)", "Plant promptly at true onset", "Stagger small blocks"] }
          ],
          sources: [CGIAR_MAIZE, ICIPE_PUSHPULL],
          tryIt: "For your main crop, find one drought-tolerant or early-maturing certified variety sold near you (ask an agrovet or extension officer), and choose one drought-hardy crop to add. Write where you will plant each.",
          youCanNow: "choose crops, varieties and planting strategies that lower your farm's climate risk.",
          quickCheck: [
            { objective: "O5", q: "Why do early-maturing varieties help in dry areas?", options: ["They can escape late-season drought", "They need more water", "They never get pests", "They do not need seed"], answer: 0, why: "Early-maturing crops finish before late-season drought hits." },
            { objective: "O5", q: "Your maize often fails in dry years. What adds a safety net?", options: ["Plant more maize only", "Add a drought-hardy crop like sorghum or cowpea", "Plant later than everyone", "Buy uncertified seed in the market"], answer: 1, why: "Growing more than one crop, including a drought-hardy one, spreads risk." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Trees, livestock and insurance: spreading the risk",
          minutes: 6,
          goal: "Add at least one way to spread risk beyond your main crop, then write your plan.",
          text: [
            "Trees on farms (agroforestry) give shade, windbreaks, fodder, fruit, fuel and timber, protect soil, and store carbon. Fruit trees such as mango and avocado, nitrogen-fixing trees, and boundary trees can all add income that does not depend on one season's rains.",
            "Livestock can be a buffer, but also suffer in drought. Plant and store fodder (Napier, Brachiaria, crop residues, hay), protect water sources, choose hardy breeds, and keep animal numbers in line with the feed you can grow or buy. Small stock such as goats and poultry can be easier to keep through dry years.",
            "Insurance moves part of the risk to an insurer. Weather-index and area-yield insurance pay out when rainfall or area yields fall below a set level, and are sold in some areas through cooperatives, input dealers or mobile money. Ask your cooperative or extension officer, read what triggers a payout, and check the insurer is licensed by your insurance regulator (in Kenya the Insurance Regulatory Authority, in Nigeria NAICOM). Savings groups and diversified income also spread risk."
          ],
          steps: ["Choose trees that fit your farm: fruit, fodder, boundary or nitrogen-fixing.", "Plan fodder and water for animals through the dry season.", "Match animal numbers to the feed you can grow or buy.", "Ask about weather-index or area-yield insurance; read the payout trigger; check the insurer is licensed.", "Write your climate-smart plan."],
          words: [["Agroforestry", "growing trees together with crops or livestock on the same land."], ["Fodder", "plants grown or kept to feed animals."], ["Weather-index insurance", "insurance that pays when a weather measure, such as rainfall, falls below a set level."], ["Payout trigger", "the condition that makes the insurer pay."]],
          slides: [
            { title: "Trees on farms", bullets: ["Shade, windbreaks, fodder, fruit, fuel", "Protect soil, store carbon", "Income beyond one season"] },
            { title: "Livestock as a buffer", bullets: ["Grow and store fodder", "Protect water, hardy breeds", "Numbers to match feed"] },
            { title: "Insurance and savings", bullets: ["Weather-index and area-yield insurance", "Read the payout trigger", "Check the insurer is licensed"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Final task: write your one-page climate-smart plan: risk calendar, this season's forecast and the date you read it, and at least five practices (soil and water, crops and varieties, spreading risk), with start dates and how you will judge success.",
          youCanNow: "use trees, livestock, insurance and savings to spread climate risk, and write a complete climate-smart plan for your farm.",
          quickCheck: [
            { objective: "O6", q: "What is agroforestry?", options: ["Cutting trees for charcoal", "Growing only trees", "Growing trees together with crops or livestock", "Buying timber"], answer: 2, why: "Agroforestry means trees on farms with crops or animals." },
            { objective: "O6", q: "A dry season is coming and you keep goats and cows. What do you plan?", options: ["Buy more animals", "Sell all fodder", "Ignore water sources", "Fodder and water, with animal numbers matched to feed"], answer: 3, why: "Planning fodder and water and matching numbers to feed protects animals in drought." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Climate-smart practices",
        questions: [
          { objective: "O4", q: "Which is a conservation agriculture principle?", options: ["Burn residue after harvest", "Plough deeply every season", "Keep the soil covered with mulch or residue", "Grow the same crop forever"], answer: 2, why: "Soil cover keeps moisture in and protects against erosion." },
          { objective: "O4", q: "Planting pits (zai) help because they:", options: ["Collect rain and manure around each plant", "Keep birds away", "Make harvest faster", "Replace seed"], answer: 0, why: "They concentrate water and nutrients where roots are." },
          { objective: "O5", q: "Where should you buy seed of a drought-tolerant variety?", options: ["Any roadside seller", "A neighbour's grain store", "From grain bought at the market", "A registered dealer selling certified seed"], answer: 3, why: "Certified seed is checked for purity and quality." },
          { objective: "O5", q: "In push-pull, what does desmodium do?", options: ["Attracts pests into the maize", "Repels pests from the maize or sorghum", "Replaces fertilizer completely", "Feeds birds"], answer: 1, why: "Desmodium pushes pests away; border grass pulls them out." },
          { objective: "O6", q: "Before buying weather-index insurance you should:", options: ["Read the payout trigger and check the insurer is licensed", "Pay the first person who asks", "Give your mobile money PIN", "Buy it for neighbours"], answer: 0, why: "Know when it pays, and make sure the insurer is legitimate." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Climate-Smart Agriculture",
    questions: [
      { objective: "O1", q: "Climate-smart agriculture is:", options: ["Farming only with machines", "Choosing practices that raise productivity, build resilience and cut emissions where possible", "Farming only in cities", "A type of fertilizer"], answer: 1, why: "That is FAO's description of CSA." },
      { objective: "O1", q: "For most smallholders, which CSA aim usually comes first?", options: ["Reducing emissions", "Buying drones", "Food security and income", "Exporting"], answer: 2, why: "FAO notes food and income come first; emissions are often a co-benefit." },
      { objective: "O1", q: "Resilience means:", options: ["The ability to cope with a shock and recover", "Planting late", "Using more water", "A type of soil"], answer: 0, why: "Resilient farms bounce back after drought or floods." },
      { objective: "O2", q: "Kenya's official seasonal forecasts come from:", options: ["KCAA", "NiMet", "A seed company", "The Kenya Meteorological Department (KMD)"], answer: 3, why: "KMD publishes seasonal forecasts and agromet bulletins." },
      { objective: "O2", q: "A seasonal forecast should be used to:", options: ["Bet everything on one crop", "Adjust plans, such as choosing a shorter-maturing variety", "Ignore planting dates", "Stop farming"], answer: 1, why: "Forecasts give chances; adjust sensibly." },
      { objective: "O3", q: "Onset means:", options: ["The end of harvest", "A pest", "The start of the rainy season", "A fertilizer"], answer: 2, why: "Onset is when the rains begin." },
      { objective: "O3", q: "A dry spell is:", options: ["Days or weeks without useful rain during the rainy season", "A flood", "A cold night", "A market day"], answer: 0, why: "Dry spells mid-season can harm crops at key stages." },
      { objective: "O3", q: "Maize flowering in a month that often has a dry spell is a:", options: ["Market chance", "Good sign", "Planting method", "Danger point"], answer: 3, why: "A key stage meeting a high risk is a danger point." },
      { objective: "O4", q: "Burning crop residue:", options: ["Is a conservation agriculture principle", "Leaves the soil bare and loses organic matter", "Holds more water in the soil", "Is climate-smart"], answer: 1, why: "Residue kept as mulch protects and feeds the soil." },
      { objective: "O4", q: "Minimum tillage means:", options: ["Ploughing twice", "No weeding", "Disturbing the soil as little as possible", "Planting only trees"], answer: 2, why: "Less disturbance protects soil structure and moisture." },
      { objective: "O4", q: "Which practice stops erosion on a slope?", options: ["Terraces such as fanya juu, and grass strips on contours", "Ploughing straight downhill", "Removing all grass", "Burning the slope"], answer: 0, why: "Terraces and contour strips slow water and hold soil." },
      { objective: "O4", q: "A water pan is:", options: ["A cooking pot", "A pest trap", "A seed packet", "A dug pond that stores rainwater"], answer: 3, why: "Water pans store water for animals and small irrigation." },
      { objective: "O5", q: "CGIAR reports that drought-tolerant maize varieties:", options: ["Need more water", "Can yield clearly more than conventional varieties under drought", "Cannot be grown in Africa", "Are the same as ordinary maize"], answer: 1, why: "They were bred to perform better when water is short." },
      { objective: "O5", q: "Which crop often copes with dry conditions better than maize?", options: ["Rice in paddies", "Sugarcane", "Sorghum", "Tea"], answer: 2, why: "Sorghum is a drought-hardy cereal." },
      { objective: "O5", q: "Intercropping maize with beans or cowpea:", options: ["Spreads risk and adds a legume", "Always lowers income", "Is not allowed", "Requires a drone"], answer: 0, why: "Two crops spread risk; legumes add nitrogen." },
      { objective: "O5", q: "In push-pull, the border grass:", options: ["Repels pests", "Is harvested for export", "Is sprayed", "Attracts pests away from the crop"], answer: 3, why: "Napier or Brachiaria borders pull pests away." },
      { objective: "O6", q: "Agroforestry means:", options: ["Clearing forest for crops", "Growing trees together with crops or livestock", "Only planting flowers", "Buying timber"], answer: 1, why: "Trees on farms add income, shade and soil protection." },
      { objective: "O6", q: "In drought, livestock keepers should:", options: ["Keep adding animals", "Sell all fodder", "Plan fodder and water and match animal numbers to feed", "Stop watering animals"], answer: 2, why: "Feed and water planning keeps animals alive through dry seasons." },
      { objective: "O6", q: "A payout trigger in weather-index insurance is:", options: ["The condition that makes the insurer pay", "The price of seed", "A type of gun", "The insurer's address"], answer: 0, why: "It defines when the policy pays." },
      { objective: "O4", q: "Before using a new practice across your whole farm, you should:", options: ["Use it everywhere at once", "Ignore extension advice", "Wait ten years", "Test it on a small area and compare"], answer: 3, why: "Small trials show whether it works on your farm." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      3,
      6,
      7,
      10,
      12,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Climate-risk calendar",
        objective: "O3",
        notYet: "Months, jobs or risks missing, or no danger points.",
        meets: "Twelve months with seasons, farm jobs, risks and at least two danger points circled.",
        exceeds: "Includes what older farmers say has changed."
      },
      {
        name: "Seasonal forecast",
        objective: "O2",
        notYet: "No forecast, or no date or source.",
        meets: "What this season's official forecast says, its source and the date it was read.",
        exceeds: "Shows two plan changes made because of the forecast."
      },
      {
        name: "Soil and water practice",
        objective: "O4",
        notYet: "No soil or water practice.",
        meets: "At least one soil or water practice that fits the farm, with a start date.",
        exceeds: "Planned as a small test compared with the usual way."
      },
      {
        name: "Crops and varieties",
        objective: "O5",
        notYet: "No crop or variety practice.",
        meets: "At least one variety or crop practice that reduces risk, with certified seed from a registered dealer.",
        exceeds: "Also includes intercropping or push-pull where it fits."
      },
      {
        name: "Spreading risk",
        objective: "O6",
        notYet: "No way to spread risk beyond the main crop.",
        meets: "At least one tree, livestock or insurance practice, with a start date.",
        exceeds: "For insurance, names the payout trigger and checks the insurer is licensed."
      },
      {
        name: "Five practices and success measures",
        objective: "O1",
        notYet: "Fewer than five practices, or no way to judge success.",
        meets: "At least five practices, each with when to start and how you will know if it worked.",
        exceeds: "Notes which climate-smart aim each practice helps."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Farmers who use at least two new climate-smart practices this season (follow-up survey)",
      "Harvest and income compared with a recent dry or difficult season, as reported by farmers or partners",
      "Farmers who check the official seasonal forecast before planting, or take up licensed crop or livestock insurance"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or radio to get the seasonal forecast, or an extension bulletin",
      "Paper and pen (or a phone spreadsheet) for the climate-risk calendar and plan",
      "Access to the learner's farm or an example farm to walk",
      "Contact for an extension officer or agrovet for local varieties and designs",
      "About 60 minutes of lessons, plus time on the farm for the walk and the plan"
    ],
    facilitatorNotes: [
      "Run sessions with farmer groups before the season starts so plans are ready before planting.",
      "Read the latest official forecast together and explain that it gives chances, not promises.",
      "Draw one group climate-risk calendar first, then let farmers draw their own; invite older farmers to share changes.",
      "Encourage small tests of new practices, and invite an extension officer for local designs and varieties.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
