"use strict";

// Koach Learn course: Agriculture (Africa) -> "Precision Agriculture: Satellite Monitoring and Soil Sensors".
// Precision farming without a drone, for smallholders and growing farms: seeing differences within a field, free Sentinel-2 satellite NDVI (what it shows and
// what it does not), GPS field mapping on a phone, soil test kits and sensors and how far to trust them, costs versus benefits, and a field zone map with a plan per zone.
// Drone mapping, prescription maps and QGIS are taught in the drone courses (agri-drones-*); this course points to them and does not repeat them.

const COPERNICUS = { name: "Copernicus Data Space Ecosystem and Copernicus Browser (free and open Sentinel data)", url: "https://dataspace.copernicus.eu/" };
const ESA_S2 = { name: "European Space Agency: Sentinel-2 (10 m resolution, 5-day revisit)", url: "https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-2" };
const DEAFRICA = { name: "Digital Earth Africa (free satellite services, including NDVI anomalies and cropland maps)", url: "https://www.digitalearthafrica.org/" };
const GPS_ACC = { name: "GPS.gov: GPS accuracy (smartphones about 4.9 m under open sky)", url: "https://archive.gps.gov/systems/gps/performance/accuracy/" };
const IFDC_KITS = { name: "IFDC: Evaluation of portable soil testing kits, lessons learned", url: "https://hub.ifdc.org/handle/20.500.14297/2026" };
const EMBU = { name: "Performance evaluation of proximal sensors for soil assessment in smallholder farms in Embu County, Kenya", url: "https://alliancebioversityciat.org/publications-data/performance-evaluation-proximal-sensors-soil-assessment-smallholder-farms-embu" };
const ISDA = { name: "iSDAsoil: continent-scale soil property maps for Africa at 30 m (PLOS Biology, 2021)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8584968/" };
const KALRO = { name: "Kenya Agricultural and Livestock Research Organization (KALRO)", url: "https://www.kalro.org" };

module.exports = {
  id: "agri-precision-agriculture",
  category: "Agriculture (Africa)",
  name: "Precision Agriculture: Satellite Monitoring and Soil Sensors",
  skills: "Spotting differences within a field, Reading free satellite NDVI maps carefully, Mapping fields with phone GPS, Choosing and trusting soil tests and sensors, Weighing costs against benefits, Making a field zone map with a plan per zone",
  outcome: "divide one of your fields into zones using free satellite maps, phone GPS, soil tests and your own eyes and records, and write a low-cost plan for each zone that you can afford and check.",
  about: [
    "This course is for smallholder and growing commercial farmers, farm managers, young agripreneurs and extension workers who want to farm \"precisely\" without big machines. Precision agriculture means giving each part of a field what it needs, instead of treating the whole field the same.",
    "You will learn to see differences inside a field, read free satellite crop maps (and know their limits), map a field and its zones with a phone, choose soil tests and sensors and judge how far to trust them, and decide whether a tool is worth its cost. You finish with a zone map of your own field and a plan for each zone.",
    "No drone is needed. If you want drone mapping, the \"Drones for Agricultural Monitoring\" courses teach it. Money figures are examples only. Each lesson ends with a task in your own field; a knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Make a zone map of one of your fields: walk and record the boundary with a phone GPS app, divide the field into 2 to 4 zones using at least two kinds of evidence (satellite NDVI on two dates, soil test or kit results, past yields, what you see), label each zone with its size and evidence, and write a plan for each zone (what you will do differently, its cost in local currency as an example, and how you will check next season whether it worked).",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Smallholder and growing commercial farmers, farm managers, young agripreneurs and extension workers in Kenya, Nigeria, Ghana, Côte d'Ivoire, Senegal and across Africa, growing maize, rice, sorghum, cassava, beans, groundnuts, tomatoes, coffee and cocoa on fields of under one to a few dozen hectares.",
    startingPoint: "Know their fields well by eye and use a smartphone. Most treat each field the same: one fertilizer rate, one seed rate. Few have used a satellite map, a phone GPS area tool or a soil test, and many have heard big claims about sensors and apps.",
    gap: "Within one field, soil, water and yield can differ a lot, so a single rate wastes inputs in some parts and starves others. Learners need to see these differences with free and low-cost tools, know which tools can be trusted for what, and turn them into simple zone plans that pay on a small farm.",
    constraints: [
      "Reading level: plain words and short sentences; the course is also available in Spanish, French and Arabic",
      "Devices: a smartphone; a computer helps for satellite viewers but is optional",
      "Small, mixed fields: free satellite images (about 10 m pixels) are coarse for plots under about half a hectare",
      "Cloud cover in the rainy season limits satellite images",
      "Money: low-cost tools first; all figures are examples; no product is endorsed",
      "Pesticides and fertilizers: registered products only, used as the label says"
    ],
    prerequisites: "Comfortable using a smartphone. \"Soil Health and Fertility\" and \"Agricultural Data and Technology\" are helpful first."
  },
  // ---- ADDIE: Design (objectives) ----
  objectives: [
    { id: "O1", condition: "Walking one of your own fields", action: "list the differences within the field that precision agriculture could act on", standard: "naming at least three differences and how you saw each one" },
    { id: "O2", condition: "Using a free satellite viewer such as the Copernicus Browser", action: "find your field and compare its NDVI on two dates", standard: "and say one thing the map shows and one thing it cannot show" },
    { id: "O3", condition: "Using a phone GPS app", action: "record a field boundary and the edges of its zones and read their areas", standard: "allowing for an error of about 5 metres" },
    { id: "O4", condition: "Given the choice of a laboratory test, a test kit or a handheld sensor", action: "choose a soil test method, take a sample from each zone and say how far to trust each result", standard: "trusting pH more than nitrogen, phosphorus and potassium readings from kits" },
    { id: "O5", condition: "Given a precision tool or practice and your field's numbers", action: "compare its cost with its expected benefit and decide whether to use it", standard: "using a simple partial budget in local currency" },
    { id: "O6", condition: "Given evidence from at least two sources", action: "divide a field into 2 to 4 management zones and write a plan for each zone", standard: "each plan affordable and checkable next season" }
  ],
  chapters: [
    {
      name: "Chapter 1: Seeing your field in parts",
      lessons: [
        {
          title: "What precision agriculture is, on a small farm",
          objectives: ["O1"],
          minutes: 5,
          goal: "List the differences within one of your fields that you could manage separately.",
          text: [
            "Precision agriculture means managing the parts of a field differently, because they are different. One corner of a maize field may be sandy and dry, the low end waterlogged, and the middle rich because cattle were kept there. Treating the whole field the same wastes fertilizer and seed in some parts and starves others.",
            "On big farms this is done with tractors that change their rate automatically. On a smallholding you can do the same thing by hand: more manure where the soil is poor, drainage in the wet patch, a different variety on the dry ridge, or no fertilizer where the crop never pays. The idea is the same: observe, measure, decide by zone, and check the result.",
            "You already know a lot by eye. Walk the field and note where the crop is short, yellow or patchy, where water stands, where weeds like Striga appear, and where yields were good or bad. Ask the workers who weed and harvest: they see every corner. Satellite maps, GPS and soil tests, in the next lessons, help you confirm and measure what you see."
          ],
          steps: ["Walk the whole field, edge and middle.", "Note where the crop is weak, where water stands, where weeds or pests are worse.", "Ask workers where yields are good or bad.", "Write each difference and how you saw it.", "Mark them on a rough sketch of the field."],
          words: [["Precision agriculture", "managing different parts of a field differently, based on observation and measurement."], ["Variability", "how much soil, water or crop growth changes from one part of a field to another."], ["Management zone", "a part of a field that is managed as one unit because it behaves in a similar way."]],
          slides: [
            { title: "One field, many parts", bullets: ["Sandy ridge, wet low end, rich old kraal", "Same treatment wastes inputs"] },
            { title: "Precision by hand", bullets: ["More manure where soil is poor", "Drainage in the wet patch", "Right variety for each part"] },
            { title: "Observe, measure, decide, check", bullets: ["Your eyes and records come first", "Tools confirm and measure"] },
            { title: "Walk and ask", bullets: ["Weak, yellow or patchy crop", "Standing water, weeds, pests", "Ask the workers"] }
          ],
          tryIt: "Walk one of your fields. Draw a rough sketch and mark at least three differences (for example a weak patch, a wet patch, a weedy patch). Next to each, write how you saw it: by eye, from yields, or from workers.",
          youCanNow: "see a field as parts that differ, and list the differences you could manage separately.",
          quickCheck: [
            { objective: "O1", q: "What is the main idea of precision agriculture?", options: ["Buying the most expensive machines", "Using the same rate everywhere", "Managing different parts of a field differently", "Farming only with drones"], answer: 2, why: "It gives each part of the field what it needs." },
            { objective: "O1", q: "Who can tell you quickly where yields are poor in a field?", options: ["The workers who weed and harvest it", "An advert for a sensor", "A buyer in the city", "Nobody"], answer: 0, why: "Workers see every corner of the field through the season." }
          ]
        },
        {
          title: "Free satellite maps and what NDVI shows",
          objectives: ["O2"],
          minutes: 6,
          goal: "Compare your field's NDVI on two dates in a free satellite viewer.",
          text: [
            "The European Sentinel-2 satellites photograph the whole of Africa about every 5 days, with pixels of 10 metres (one pixel is a 10 m x 10 m square). The images are free and open. The Copernicus Browser lets you view them without paying; you can start without an account, and a free account gives more options. Digital Earth Africa also offers free satellite services, such as NDVI anomaly and cropland maps, built for Africa.",
            "NDVI (Normalised Difference Vegetation Index) is a number from the colours plants reflect. Healthy, dense green leaves give high NDVI; bare soil, dry or sparse crop gives low NDVI. In the viewer, find your field, choose an NDVI view, and compare two dates, for example four and eight weeks after planting. A patch that stays low when the rest is high is worth walking.",
            "What NDVI does NOT show: the cause. Low NDVI can be drought, waterlogging, nitrogen shortage, pests, disease, weeds or a late planting. It also cannot see under clouds, and in the rainy season you may wait weeks for a clear image. On fields smaller than about half a hectare, or long narrow plots, 10 m pixels are coarse and mix in the neighbour's crop or trees. Weeds can also look green and healthy. So NDVI tells you where to look, and your feet tell you why."
          ],
          steps: ["Open the Copernicus Browser on a computer or phone browser.", "Search your area and zoom to your field.", "Choose an image with little cloud and an NDVI view.", "Compare two dates in the same season.", "Mark low patches on your sketch and walk them to find the cause."],
          words: [["Sentinel-2", "a pair of European satellites that take free images of the earth about every 5 days at 10 m detail."], ["NDVI", "a number from satellite colours that shows how green and dense the plants are."], ["Pixel", "one square of a satellite image; for Sentinel-2, 10 m x 10 m."]],
          slides: [
            { title: "Free satellite images", bullets: ["Sentinel-2: about every 5 days, 10 m pixels", "Copernicus Browser: free to view", "Digital Earth Africa: free services for Africa"] },
            { title: "What NDVI shows", bullets: ["High: dense green plants", "Low: bare, dry or sparse crop", "Compare two dates"] },
            { title: "What NDVI does NOT show", bullets: ["The cause of a low patch", "Anything under clouds", "Detail on plots under about half a hectare"] },
            { title: "Map shows where, feet show why", bullets: ["Mark low patches", "Walk them and find the cause"] }
          ],
          sources: [COPERNICUS, ESA_S2, DEAFRICA],
          tryIt: "Open the Copernicus Browser, find one of your fields (or a field near you), and look at NDVI on two clear dates this season. Mark any low patch on your sketch, then walk it and write what you think the cause is.",
          youCanNow: "read a free satellite NDVI map of your field and use it to decide where to look, not what the cause is.",
          quickCheck: [
            { objective: "O2", q: "A patch of your maize field has low NDVI. What does that tell you?", options: ["It has a nitrogen shortage", "It has fall armyworm", "It needs irrigation", "Plants there are less green or sparse, so walk it and find out why"], answer: 3, why: "NDVI shows where growth is weak, not the cause." },
            { objective: "O2", q: "Why can a free Sentinel-2 map be hard to use on a 0.2 hectare plot?", options: ["The 10 m pixels are coarse and mix in neighbouring land", "The images are only for Europe", "It costs too much", "NDVI does not work on maize"], answer: 0, why: "A 0.2 ha plot is only a couple of dozen pixels, many mixed with its edges." }
          ]
        },
        {
          title: "Mapping a field with your phone's GPS",
          objectives: ["O3"],
          minutes: 5,
          goal: "Record a field boundary and its zones with a phone GPS app and read their areas.",
          text: [
            "A phone's GPS can map your field. Many free apps can record a walked boundary or let you drop points around the field and then show the area. You can also drop a pin on a map app and share its coordinates. Knowing the real size of a field and each zone matters: fertilizer, seed, labour and yield per acre or hectare all depend on it, and many farmers find their field is bigger or smaller than they thought.",
            "GPS is not exact. Under open sky, smartphones are typically accurate to within about 5 metres, and worse near trees, buildings and in valleys. On a small plot that error matters: walk slowly, stand still a few seconds at each corner, keep the phone in open sky, and walk the boundary twice to compare. If the two areas differ a lot, walk it again.",
            "Map the zones too. Walk the edge of the wet patch or the sandy ridge and save it as a separate shape, or drop pins at its corners. Name each shape with the field and zone (\"F2 Zone A wet\"), and save the file or a screenshot with the area. These shapes become the base of your zone map in Lesson 6."
          ],
          steps: ["Open a GPS area or mapping app outdoors with open sky.", "Walk the field boundary slowly, pausing at each corner.", "Read and record the area; walk it again to check.", "Walk or pin the edges of each zone and save each one with a name.", "Save the file or a screenshot with the areas."],
          words: [["GPS", "Global Positioning System: satellites that let a phone find where it is on the earth."], ["Boundary", "the edge of a field."], ["Hectare", "an area of 100 m x 100 m, about 2.5 acres."]],
          slides: [
            { title: "Your phone can map a field", bullets: ["Walk the boundary or drop corner points", "Read the area", "Field size drives every per-acre number"] },
            { title: "GPS is not exact", bullets: ["About 5 m under open sky", "Worse near trees, buildings, valleys"] },
            { title: "Better readings", bullets: ["Walk slowly, pause at corners", "Walk twice and compare"] },
            { title: "Map the zones", bullets: ["One saved shape per zone", "Name: F2 Zone A wet", "Save the area"] }
          ],
          sources: [GPS_ACC],
          tryIt: "Use a phone GPS app to walk the boundary of one field twice and write both areas. Then map the edge of one zone you found in Lesson 1, name it, and write its area.",
          youCanNow: "map a field and its zones with phone GPS and record their areas, allowing for GPS error.",
          quickCheck: [
            { objective: "O3", q: "You walked a field boundary twice and got 0.9 acres and 1.4 acres. What do you do?", options: ["Average them and stop", "Walk it again slowly, pausing at corners, in open sky", "Use the larger number", "Give up on GPS"], answer: 1, why: "A big difference means poor readings; walk again carefully." },
            { objective: "O3", q: "Where is phone GPS usually least accurate?", options: ["In an open field", "On a sunny day", "On a flat plain", "Under trees and near buildings"], answer: 3, why: "Trees and buildings block and reflect satellite signals." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Seeing your field in parts",
        questions: [
          { objective: "O1", q: "A smallholder puts extra manure only on the sandy, poor end of the field. This is:", options: ["Wasteful", "Precision agriculture by hand", "Against the rules", "Only possible with a tractor"], answer: 1, why: "Managing parts of a field differently is the core of precision agriculture." },
          { objective: "O2", q: "About how often do the Sentinel-2 satellites image the same place?", options: ["About every 5 days", "Once a year", "Every hour", "Only on request"], answer: 0, why: "The two satellites give about a 5-day revisit; clouds may hide some images." },
          { objective: "O2", q: "Which is something NDVI CANNOT tell you?", options: ["Where the crop is greener", "Where growth is weak", "Why a patch is weak", "How two dates compare"], answer: 2, why: "Many causes give low NDVI; you walk the patch to find which one." },
          { objective: "O3", q: "Typical smartphone GPS accuracy under open sky is about:", options: ["1 centimetre", "500 metres", "5 kilometres", "5 metres"], answer: 3, why: "About 4.9 m under open sky, worse near trees and buildings." },
          { objective: "O3", q: "Why does knowing the true field area matter?", options: ["Seed, fertilizer, labour and yield per acre all depend on it", "Buyers pay by area", "GPS apps need it", "It does not matter"], answer: 0, why: "Wrong areas make every per-acre number wrong." }
        ]
      }
    },
    {
      name: "Chapter 2: Measuring soil and planning by zone",
      lessons: [
        {
          title: "Soil test kits and sensors: how far to trust them",
          objectives: ["O4"],
          minutes: 6,
          goal: "Choose a soil test method for each zone and say how far to trust its results.",
          text: [
            "There are three main ways to test soil. A laboratory test (from a national research institute such as KALRO, a university or an accredited private lab) is the most accurate, takes days to weeks and costs more. A field test kit (colour strips or chemicals in tubes) gives quick results on the spot. A handheld electronic sensor or meter gives a reading in minutes and is often sold with an app.",
            "Independent tests of portable kits, such as an evaluation by IFDC, found good agreement with laboratories for soil pH but inconsistent results for nitrogen, phosphorus and potassium. Research in Embu County, Kenya, found that some advanced handheld sensors can predict several soil properties well, but those instruments are costly and need calibration against lab samples. Be careful with cheap probes that claim to read NPK instantly: sellers' own accuracy figures are not independent proof.",
            "A practical plan: send one good composite sample per zone to a lab every few years, and use a kit or meter for quick checks of pH between lab tests. Take each sample the same way (many small cores, mixed, from the same depth, avoiding paths and manure heaps). The free iSDAsoil maps estimate soil properties across Africa at 30 m and are useful to see the general picture, but they are estimates from models, not a test of your field."
          ],
          steps: ["Decide: lab test, kit or sensor, for each question you have.", "Take a composite sample per zone: many cores, same depth, mixed.", "Send the samples to an accredited lab every few years.", "Use a kit or meter for quick pH checks in between.", "Write each result next to its zone, with its method."],
          words: [["Composite sample", "many small soil cores from one zone mixed into one sample."], ["Calibration", "checking and adjusting a sensor against a trusted lab result."], ["pH", "a measure of how acid or alkaline soil is."]],
          slides: [
            { title: "Three ways to test", bullets: ["Lab: most accurate, slower, costs more", "Field kit: quick, on the spot", "Handheld sensor: minutes, often with an app"] },
            { title: "How far to trust them", bullets: ["Kits: good for pH", "Kits: inconsistent for N, P and K", "Advanced sensors need calibration"] },
            { title: "A practical plan", bullets: ["One lab sample per zone every few years", "Kit or meter for quick pH checks", "Same sampling method every time"] },
            { title: "Free soil maps", bullets: ["iSDAsoil: estimates at 30 m", "A general picture, not your field's test"] }
          ],
          sources: [IFDC_KITS, EMBU, ISDA, KALRO],
          tryIt: "For each zone on your sketch, write which test you will use (lab, kit or sensor) and why. Take, or plan, one composite sample per zone, and write how far you would trust a kit result for pH and for nitrogen.",
          youCanNow: "choose a soil test method for each zone and judge how far to trust its results.",
          quickCheck: [
            { objective: "O4", q: "For which result are portable soil kits most reliable, compared with a lab?", options: ["Nitrogen", "Potassium", "Soil pH", "Phosphorus"], answer: 2, why: "Independent tests found good pH agreement but inconsistent N, P and K." },
            { objective: "O4", q: "A seller says his cheap probe reads NPK instantly with 95 percent accuracy. You should:", options: ["Ask for independent test results and compare a few readings with a lab", "Buy it at once", "Use it instead of all lab tests", "Believe it because it has an app"], answer: 0, why: "Sellers' own figures are not independent proof; compare with a lab." }
          ]
        },
        {
          title: "Costs versus benefits, and when drones help",
          objectives: ["O5"],
          minutes: 5,
          goal: "Compare the cost of a precision tool or practice with its expected benefit.",
          text: [
            "A precision tool only makes sense if the benefit is bigger than the cost. Use a simple partial budget: what extra will I earn or save (more yield, less fertilizer or seed wasted), and what extra will it cost (the test, the sensor, the app, your time, the labour)? Example only: if zoning saves 2 bags of fertilizer on a weak zone that never paid (2 x GHS 400 = GHS 800 saved), and the lab test cost GHS 300, it pays.",
            "On small farms, start with what is free or cheap: your eyes, records, phone GPS and free satellite maps. Spend on a lab test per zone next. Buy a handheld sensor only if you will use it often and can check it against a lab. Groups can share costs: a cooperative in Côte d'Ivoire or a farmer group in Nigeria can buy one meter or pay for lab tests together.",
            "Drones give images of a few centimetres instead of 10 metres, fly below the clouds, and can fly the day you need. They help on high-value crops, larger fields, or for a group buying a service together. They cost far more, and flying them needs a licence from the civil aviation authority. If you think you need one, take the \"Drones for Agricultural Monitoring\" courses and \"Agricultural Drones: Data Analytics and Precision Agriculture\"; this course does not repeat them."
          ],
          steps: ["Write what the tool or practice costs: money, time, labour.", "Write the extra income or saving you expect, with example numbers.", "Compare: benefit minus cost.", "Start with free tools; then a lab test per zone; then a sensor or drone service only if it pays.", "Consider sharing costs with a group."],
          words: [["Partial budget", "a simple sum of only the extra costs and extra benefits of one change."], ["Drone service", "a business that flies a drone over your field for a fee."], ["Return", "what you get back for what you spend."]],
          slides: [
            { title: "Benefit must beat cost", bullets: ["Extra income or saving", "Minus extra cost", "Example only: GHS 800 saved vs GHS 300 test"] },
            { title: "Spend in this order", bullets: ["Free: eyes, records, GPS, satellite", "Lab test per zone", "Sensor only if used often and checked"] },
            { title: "Share costs", bullets: ["Groups and cooperatives", "One meter or many lab tests together"] },
            { title: "When drones help", bullets: ["Centimetre detail, below the clouds", "High-value crops, larger fields, group services", "See the drone courses; licence required"] }
          ],
          tryIt: "Pick one precision tool or practice for your farm (a lab test per zone, a soil meter, a drone service, or zoned fertilizer). Write a partial budget with example local-currency numbers: extra cost, extra benefit, and your decision.",
          youCanNow: "decide whether a precision tool is worth it for your farm with a simple partial budget.",
          quickCheck: [
            { objective: "O5", q: "On a small farm, which should you usually try first?", options: ["A drone", "A large sensor network", "An expensive app subscription", "Your eyes, records, phone GPS and free satellite maps"], answer: 3, why: "Start with free tools and spend only where it pays." },
            { objective: "O5", q: "A soil meter costs more than you would save in five seasons. What is a sensible choice?", options: ["Buy it anyway", "Share the cost through a group, or use lab tests instead", "Borrow money to buy two", "Stop fertilizing"], answer: 1, why: "If the benefit does not beat the cost alone, share it or choose a cheaper method." }
          ]
        },
        {
          title: "Making a field zone map and a plan for each zone",
          objectives: ["O6", "O5"],
          minutes: 6,
          goal: "Divide a field into 2 to 4 zones and write a plan for each zone.",
          text: [
            "Now put the evidence together. Lay your GPS shapes over your sketch. For each part of the field, list what you know: NDVI on two dates, soil test or kit results, past yields, what you and the workers see. A zone needs at least two kinds of evidence that agree, for example low NDVI and a low pH result, or a wet patch seen every season and poor yields recorded.",
            "Keep it simple: 2 to 4 zones are enough on a smallholding. Name them by what they are: \"Zone A good soil\", \"Zone B acid and weak\", \"Zone C waterlogged\". Write each zone's area from your GPS map.",
            "Then write a plan for each zone: what you will do differently (more compost and lime where pH is low as the lab advises; drains or a rice or vegetable crop in the wet zone; a lower fertilizer rate where the crop never pays), what it will cost as an example in your currency, and how you will check it: record yield by zone at harvest and compare NDVI next season. Use only registered fertilizers and pesticides, as the label says. A precision plan is only right if next season's records show it worked."
          ],
          steps: ["Put GPS shapes, NDVI notes, soil results and yields on one map.", "Draw 2 to 4 zones where two kinds of evidence agree.", "Name each zone and write its area.", "Write a plan, cost and check for each zone.", "Record yield by zone at harvest and compare next season."],
          words: [["Zone map", "a map of a field divided into management zones."], ["Evidence", "facts you can point to, such as a test result, an NDVI image or a yield record."], ["Lime", "a soil treatment that makes acid soil less acid."]],
          slides: [
            { title: "Put the evidence together", bullets: ["GPS shapes and sketch", "NDVI on two dates, soil results", "Yields and what you see"] },
            { title: "Draw 2 to 4 zones", bullets: ["Two kinds of evidence must agree", "Name by what they are", "Write each area"] },
            { title: "A plan for each zone", bullets: ["What changes", "Example cost", "How you will check it"] },
            { title: "Check next season", bullets: ["Yield by zone at harvest", "Compare NDVI", "Registered inputs, as the label says"] }
          ],
          tryIt: "Final task: make the zone map of your field with 2 to 4 zones, each labelled with its area and at least two kinds of evidence. Write a plan for each zone: the change, the example cost in your currency, and how you will check next season whether it worked.",
          youCanNow: "make a field zone map from several kinds of evidence and write a checkable plan for each zone.",
          quickCheck: [
            { objective: "O6", q: "Which is enough evidence to draw a zone?", options: ["Low NDVI on one cloudy date", "A neighbour's guess", "Low NDVI on two dates and a low pH soil result", "An advert"], answer: 2, why: "Two kinds of evidence that agree make a zone reliable." },
            { objective: "O6", q: "How will you know a zone plan worked?", options: ["Record yield by zone at harvest and compare next season", "Assume it worked", "Ask the input seller", "Look at the plan again"], answer: 0, why: "Only records by zone show whether the change paid." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Measuring soil and planning by zone",
        questions: [
          { objective: "O4", q: "What is a composite soil sample?", options: ["One spadeful from the middle", "Many small cores from one zone mixed together", "Soil from the manure heap", "A sample from the road"], answer: 1, why: "Mixing many cores gives a fair picture of the zone." },
          { objective: "O4", q: "The free iSDAsoil maps are best used to:", options: ["Replace all soil tests", "Decide pesticide rates", "See the general soil picture before testing your field", "Measure today's soil moisture"], answer: 2, why: "They are model estimates, not a test of your field." },
          { objective: "O5", q: "A partial budget compares:", options: ["The extra cost and the extra benefit of one change", "All farm costs for ten years", "Only the price of the crop", "Your bank balance"], answer: 0, why: "It looks only at what changes." },
          { objective: "O5", q: "When can a drone service make sense?", options: ["Always, on every plot", "Never in Africa", "Only without a licence", "On high-value crops or larger fields, or shared by a group, when it pays"], answer: 3, why: "Drones cost more; they help where the value is high or costs are shared." },
          { objective: "O6", q: "How many zones does this course suggest for a smallholding?", options: ["2 to 4", "20 to 40", "One", "One per plant"], answer: 0, why: "A few zones are enough to manage and check by hand." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Precision Agriculture: Satellite Monitoring and Soil Sensors",
    questions: [
      { objective: "O1", q: "Precision agriculture on a smallholding means:", options: ["Buying a tractor with sensors", "Managing different parts of the field differently", "Using one fertilizer rate everywhere", "Farming without records"], answer: 1, why: "Each part gets what it needs." },
      { objective: "O1", q: "Which is a difference within a field you could act on?", options: ["The colour of your phone", "The market price", "A wet patch at the low end", "Your neighbour's crop"], answer: 2, why: "A wet patch can be drained or planted differently." },
      { objective: "O1", q: "What comes first in precision farming on a small farm?", options: ["Walking the field and noting differences", "Buying a sensor", "Hiring a drone", "Changing all inputs"], answer: 0, why: "Observation is free and guides the rest." },
      { objective: "O2", q: "What does Sentinel-2 offer for free?", options: ["Images at 1 cm detail", "Weather forecasts", "Soil tests", "Images about every 5 days at 10 m pixels"], answer: 3, why: "Sentinel-2 data are free and open at 10 m." },
      { objective: "O2", q: "High NDVI usually means:", options: ["Bare soil", "Dense, green plants", "Standing water", "A cloud"], answer: 1, why: "Healthy leaves reflect in a way that gives high NDVI." },
      { objective: "O2", q: "Why compare NDVI on two dates?", options: ["To see which patches stay weak while others grow", "Because one image is always wrong", "To make the map colourful", "To count plants"], answer: 0, why: "A patch that stays low across dates is worth walking." },
      { objective: "O2", q: "During the rainy season you may not get a clear satellite image because:", options: ["The satellites stop", "NDVI only works in the dry season", "Clouds hide the ground", "Crops are too tall"], answer: 2, why: "Sentinel-2 cannot see through clouds." },
      { objective: "O3", q: "A hectare is:", options: ["10 m x 10 m", "1 km x 1 km", "Half an acre", "100 m x 100 m, about 2.5 acres"], answer: 3, why: "One hectare = 10,000 square metres." },
      { objective: "O3", q: "How do you get a better GPS area reading?", options: ["Run fast around the field", "Walk slowly in open sky, pause at corners, and walk twice", "Hold the phone in your pocket", "Stand under a tree"], answer: 1, why: "Slow walking, pauses and open sky improve accuracy." },
      { objective: "O3", q: "Why map each zone as its own named shape?", options: ["So you know each zone's area for planning and records", "Because GPS requires it", "To share on social media", "It is not useful"], answer: 0, why: "Each zone's area drives its inputs and yield per acre." },
      { objective: "O4", q: "Which soil test method is most accurate?", options: ["A cheap probe", "Guessing by colour", "An accredited laboratory test", "A WhatsApp photo"], answer: 2, why: "Labs are the reference that kits and sensors are checked against." },
      { objective: "O4", q: "Portable kits gave inconsistent results for:", options: ["Soil colour", "Nitrogen, phosphorus and potassium", "Field size", "Rainfall"], answer: 1, why: "Independent tests found good pH but inconsistent N, P and K." },
      { objective: "O4", q: "To trust a handheld sensor more, you should:", options: ["Use it only at night", "Never compare it with anything", "Buy a second one", "Compare some of its readings with lab results"], answer: 3, why: "Calibration against a lab shows how far to trust it." },
      { objective: "O5", q: "Example only: zoning saves GHS 800 of fertilizer and the lab test cost GHS 300. The result is:", options: ["A loss of GHS 500", "No change", "A gain of GHS 500", "A gain of GHS 1,100"], answer: 2, why: "800 saved minus 300 cost = 500 gained." },
      { objective: "O5", q: "A farmer group can lower the cost of precision tools by:", options: ["Sharing one meter or paying for lab tests together", "Each buying a drone", "Skipping all tests", "Using unregistered fertilizer"], answer: 0, why: "Sharing spreads the cost over many farms." },
      { objective: "O5", q: "To learn drone mapping, you should:", options: ["Fly without a licence", "Take the existing drone courses and follow the civil aviation rules", "Use this course only", "Copy a video online"], answer: 1, why: "The drone courses cover it; a licence is required." },
      { objective: "O6", q: "A zone should be based on:", options: ["One cloudy image", "A seller's advice", "Your mood", "At least two kinds of evidence that agree"], answer: 3, why: "Two agreeing sources make a zone reliable." },
      { objective: "O6", q: "Which is a good zone plan for a waterlogged zone?", options: ["Add more fertilizer and hope", "Ignore it", "Dig drains or plant a crop that tolerates wet soil, and record the result", "Plant the same as the dry ridge"], answer: 2, why: "The plan fits the cause, and is checked with records." },
      { objective: "O6", q: "Each zone plan should include:", options: ["What changes, its example cost and how you will check it", "Only the zone colour", "Only the price of the crop", "Nothing; zones are just for maps"], answer: 0, why: "A plan you cannot cost or check is not a plan." },
      { objective: "O6", q: "Fertilizers and pesticides in a zone plan must be:", options: ["The cheapest you find", "Registered products used as the label says", "Mixed by guesswork", "Doubled in weak zones"], answer: 1, why: "Only registered products, used as labelled, are safe and legal." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 6, 7, 10, 11, 13, 16, 18] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Field and zones mapped", objective: "O3", notYet: "No boundary, or areas guessed.", meets: "Boundary walked with GPS and each zone has a named shape and area.", exceeds: "Boundary walked twice and the areas agree closely." },
      { name: "Satellite evidence used carefully", objective: "O2", notYet: "No satellite view, or NDVI treated as the cause.", meets: "NDVI compared on two dates and low patches walked to find the cause.", exceeds: "Notes what the map could not show (clouds, small plots, weeds) for this field." },
      { name: "Soil evidence", objective: "O4", notYet: "No soil information, or kit NPK readings treated as exact.", meets: "A test method chosen for each zone with how far it can be trusted.", exceeds: "At least one lab result per zone, or kit readings compared with a lab." },
      { name: "Zones and plans", objective: "O6", notYet: "Zones drawn from one source, or no plan per zone.", meets: "2 to 4 zones, each with two kinds of evidence and a plan, cost and check.", exceeds: "Each plan names the record that will show whether it worked next season." },
      { name: "Worth the cost", objective: "O5", notYet: "Tools chosen without counting cost.", meets: "A partial budget with example local-currency numbers supports the plan.", exceeds: "Considers sharing costs with a group, or a cheaper method that gives the same answer." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who apply at least one zone plan in the next season (30-day and end-of-season follow-up)",
      "Learners who record yield by zone at harvest",
      "Reported input savings or yield changes by zone after one season",
      "Farmer groups that share soil tests or tools after the course"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A smartphone with a free GPS area or mapping app",
      "Internet access to the Copernicus Browser (a computer or phone browser)",
      "A field to walk, paper, pen and a rough sketch of the field",
      "A soil auger or spade and clean buckets for composite samples; a lab or kit if available",
      "About 90 minutes in total plus field time"
    ],
    facilitatorNotes: [
      "Run Lessons 1 and 3 in a field: walk the boundary and zones together, and compare phones' GPS areas.",
      "Prepare a clear Copernicus Browser image of a local field in advance; rainy-season clouds can block live demos.",
      "Do not sell or endorse a soil sensor or app; if a vendor attends, ask for independent test results.",
      "Remind learners that NDVI shows where, not why, and that kit NPK readings need lab checks.",
      "Point drone questions to the drone courses; this course does not cover flying.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
