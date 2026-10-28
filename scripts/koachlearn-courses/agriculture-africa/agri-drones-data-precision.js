"use strict";

// Koach Learn course: Agriculture (Africa) -> "Agricultural Drones: Data Analytics and Precision Agriculture".
// Part of the "Agricultural Drones in Africa" set (with agri-drones-regulations, agri-drones-uas-technology, agri-drones-mission-planning): the analyst's course.
// Builds on agri-drones-crop-health (stitching, basic NDVI, ground-truthing): here the student checks map accuracy, chooses among indices, runs zonal statistics
// and counts, builds a prescription map, works out whether it pays, and communicates results. No pesticide or fertilizer product advice: rates come from local agronomy sources.

const FAO_EO = { name: "FAO GIEWS Earth Observation (NDVI and vegetation indicators)", url: "https://www.fao.org/giews/earthobservation/index.jsp" };
const QGIS = { name: "QGIS (free, open-source GIS)", url: "https://qgis.org/" };
const ODM = { name: "OpenDroneMap (free, open-source drone mapping software)", url: "https://www.opendronemap.org/" };
const FAO_ITU_DRONES = { name: "FAO and ITU: E-agriculture in Action: Drones for Agriculture (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };
const FAO_WHO_AERIAL = { name: "FAO and WHO: Guidance for aerial application of pesticides (2024)", url: "https://www.who.int/publications/i/item/9789240076785" };

module.exports = {
  id: "agri-drones-data-precision",
  category: "Agriculture (Africa)",
  name: "Agricultural Drones: Data Analytics and Precision Agriculture",
  skills: "Checking the accuracy of a drone map, Choosing the right vegetation index, Running zonal statistics and plant counts in QGIS, Building a prescription map, Working out whether precision pays, Communicating results to farmers",
  outcome: "turn a drone dataset into a checked, accurate analysis with zone statistics and a prescription map, work out whether acting on it pays, and deliver the result in a form a farmer or estate manager can act on.",
  about: [
    "This course is for drone data analysts, agronomists, extension specialists, agribusiness and estate managers, and drone service businesses in Kenya, Nigeria and across Africa. You should already be able to stitch a drone map and make a basic NDVI map (see the monitoring track, Course 3).",
    "Chapter 1 is analytics: making sure a map is accurate enough to act on, choosing among vegetation indices, and measuring zones and counting plants or trees in QGIS. Chapter 2 is precision agriculture: building a prescription map from your analysis, checking the economics with a simple partial budget, and presenting results so farmers act on them.",
    "The examples use maize and beans, tea, coffee, avocado and cassava. Fertilizer and seed rates in this course are placeholders: real rates come from soil tests, local research and extension recommendations. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Using a drone dataset of a real field or a free sample: state the map's accuracy and how you checked it; choose and justify a vegetation index; divide the field into zones and report zone statistics (area and mean index) and a plant or tree count; build a prescription map with a rate or task per zone (using local recommended rates); calculate a simple partial budget showing whether it pays; and write a one-page result for the farmer in plain language.",
  chapters: [
    {
      name: "Chapter 1: Data analytics",
      lessons: [
        {
          title: "Is the map accurate enough to act on?",
          minutes: 6,
          goal: "Check a drone map's position accuracy and image quality before analysing it.",
          text: [
            "Before you send workers to a zone, you need to trust that the map puts things in the right place. A drone's ordinary GNSS can place a map a few metres off. That is fine for finding a wet corner, but not for guiding work to single rows or matching maps from different dates.",
            "Three ways to improve and check accuracy: ground control points (GCPs), marked targets on the ground whose coordinates you measure with an accurate GNSS receiver and use in processing; drones with RTK or PPK positioning, which correct position during or after the flight; and check points, extra measured targets not used in processing, used to test the final map. Report the error you measured.",
            "Also check quality: the processing report (how many images were used, any warnings), the real image detail (GSD), blur, holes and stitching errors. For maps you will compare over time, use the same method each time and make sure they line up on top of each other."
          ],
          steps: ["Read the processing report: images used, warnings, GSD.", "Look for blur, holes and stitching errors.", "Measure position error at check points (or compare with known features).", "Decide whether the accuracy fits the decision.", "For time series, check that maps line up."],
          words: [["Ground control point (GCP)", "a marked ground target with accurately measured coordinates, used to fix a map's position."], ["RTK / PPK", "methods that correct drone positions during (RTK) or after (PPK) the flight for high accuracy."], ["Check point", "a measured target used only to test a map's accuracy."], ["Processing report", "the summary the stitching software produces about a map's quality."]],
          slides: [
            { title: "Trust before action", bullets: ["Ordinary GNSS: a few metres off", "Fine for zones, not single rows", "Time series must line up"] },
            { title: "Improve accuracy", bullets: ["Ground control points (GCPs)", "RTK or PPK drones", "Check points to test the result"] },
            { title: "Check quality", bullets: ["Processing report and warnings", "Real GSD, blur, holes", "Same method every date"] }
          ],
          sources: [ODM],
          tryIt: "Open the processing report of a map you made (or a sample dataset's report). Write down the number of images used, the GSD, any warnings, and decide whether the map is accurate enough to (a) find wet areas, (b) guide replanting of single rows.",
          youCanNow: "check a drone map's accuracy and quality and decide whether it fits the decision."
        },
        {
          title: "Choosing the right vegetation index",
          minutes: 6,
          goal: "Choose a vegetation index that fits the crop, stage and camera.",
          text: [
            "NDVI = (NIR - Red) / (NIR + Red) is the best-known index; FAO uses it from satellites to track vegetation across Africa. But NDVI tends to saturate in dense, healthy canopies such as mature maize, tea or coffee: values bunch up near the top and small differences disappear.",
            "NDRE uses the red-edge band instead of red: (NIR - RedEdge) / (NIR + RedEdge). It stays sensitive in dense canopies and often shows nitrogen and chlorophyll differences later in the season. With only a colour camera, indices such as VARI, (Green - Red) / (Green + Red - Blue), or Excess Green, 2 x Green - Red - Blue, separate green plants from soil and show rough vigour; they are useful for stand and weeds but less reliable for stress.",
            "Choose by the question: early-season stand and weeds, an RGB index or NDVI; mid-season vigour in open crops, NDVI; dense canopies and nitrogen, NDRE. Whatever you choose, look at the true-colour map too, and confirm on the ground."
          ],
          words: [["Saturation", "when an index stops changing even though plants still differ, as NDVI does in dense canopies."], ["Red edge", "a narrow band of light between red and near-infrared, sensitive to chlorophyll."], ["NDRE", "Normalized Difference Red Edge index, more sensitive than NDVI in dense canopies."], ["VARI", "Visible Atmospherically Resistant Index, a vegetation index from RGB bands only."]],
          slides: [
            { title: "NDVI and its limit", bullets: ["(NIR - Red) / (NIR + Red)", "Widely used, including by FAO", "Saturates in dense canopies"] },
            { title: "Other indices", bullets: ["NDRE: (NIR - RedEdge) / (NIR + RedEdge)", "VARI: (G - R) / (G + R - B)", "Excess Green: 2G - R - B"] },
            { title: "Choose by the question", bullets: ["Stand and weeds: RGB index or NDVI", "Open crops mid-season: NDVI", "Dense canopy and nitrogen: NDRE"] }
          ],
          sources: [FAO_EO, QGIS],
          tryIt: "For each case choose an index and write why: (a) stand count in 3-week-old maize with an RGB drone, (b) nitrogen differences in a closed tea canopy with a multispectral drone, (c) mid-season vigour in cassava with a multispectral drone.",
          youCanNow: "choose a vegetation index that fits the crop, its stage and the camera."
        },
        {
          title: "Zonal statistics and counting in QGIS",
          minutes: 6,
          goal: "Measure each zone's area and average index, and count plants or trees.",
          text: [
            "Analysis turns a coloured map into numbers people can act on. First, create zones: classify the index map into classes (for example low, medium, high), then turn them into polygons and tidy away tiny fragments; or draw zones by hand with the farmer's knowledge. Calculate each zone's area.",
            "Then use QGIS Zonal Statistics to calculate, for each zone, the mean, minimum, maximum and spread of the index. Compare zones, and compare the same zones over dates. A table such as Zone A: 3.2 ha, mean NDVI 0.71; Zone C: 0.8 ha, mean NDVI 0.48 is much easier to act on than a picture.",
            "Counting: for tree crops (avocado, mango, coffee), tree crowns are often clear on high-detail RGB maps and can be counted by hand with points, or with plugins and scripts. For row crops, count in sample plots and scale up. Always check a sample of counts on the ground and report the error."
          ],
          steps: ["Classify the index map into a few classes, or draw zones with the farmer.", "Convert classes to polygons; remove tiny fragments; calculate area.", "Run Zonal Statistics for mean, min, max and spread per zone.", "Count trees or plants (points, plugin or sample plots).", "Check counts on the ground and report the error."],
          words: [["Zonal statistics", "numbers (such as average) calculated for the pixels inside each zone."], ["Polygon", "a closed shape on a map, such as a zone or field boundary."], ["Classify", "group pixel values into a few classes, such as low, medium and high."]],
          slides: [
            { title: "From colours to numbers", bullets: ["Classify the index map", "Convert to zone polygons, remove fragments", "Calculate each zone's area"] },
            { title: "Zonal Statistics", bullets: ["Mean, min, max, spread per zone", "Compare zones and dates", "Zone A: 3.2 ha, mean NDVI 0.71"] },
            { title: "Counting", bullets: ["Tree crowns on high-detail RGB maps", "Row crops: sample plots, scale up", "Ground-check and report the error"] }
          ],
          sources: [QGIS],
          tryIt: "In QGIS with your map or a sample: draw or classify three zones, calculate their areas, run Zonal Statistics on the index, and make a table of zone, area and mean value. If it is a tree crop, count trees in one zone.",
          youCanNow: "measure zones and count plants or trees in QGIS and present the results as a table."
        }
      ],
      check: {
        title: "Knowledge Check 1: Data analytics",
        questions: [
          { q: "What is a check point used for?", options: ["Fixing the map during processing", "Testing the accuracy of the final map", "Charging batteries", "Landing the drone"], answer: 1, why: "Check points are measured but not used in processing, so they test the result." },
          { q: "A map is about 3 m off. It is accurate enough to:", options: ["Guide replanting of single rows", "Measure single plants", "Find a wet corner of a field", "Nothing at all"], answer: 2, why: "A few metres of error is fine for large features, not for rows." },
          { q: "Why might NDVI show little difference across a dense, mature tea canopy?", options: ["NDVI saturates in dense canopies", "Tea has no leaves", "The drone was too low", "NDVI only works on soil"], answer: 0, why: "Values bunch near the top in dense vegetation." },
          { q: "Which index can be calculated from an RGB camera only?", options: ["NDRE", "NDVI", "None", "VARI"], answer: 3, why: "VARI uses only green, red and blue bands." },
          { q: "QGIS Zonal Statistics gives you:", options: ["Weather forecasts", "Numbers such as the mean index for each zone", "A pilot licence", "Seed prices"], answer: 1, why: "It summarises pixel values inside each zone." }
        ]
      }
    },
    {
      name: "Chapter 2: Precision agriculture",
      lessons: [
        {
          title: "Building a prescription map",
          minutes: 6,
          goal: "Turn zones into a prescription map with a rate or task for each zone.",
          text: [
            "A prescription map tells a machine or a worker what to do in each zone. Start from the cause, not the colour: use ground-truthing and, where possible, soil tests to learn why each zone differs. Then choose an action per zone: more or less fertilizer, a different seed rate, replanting, drainage, weeding, or no change.",
            "Rates come from agronomy, not from the drone. Use soil test results and local recommendations from your national research institute or extension service for the crop and area. The map only says where each rate goes. Keep the number of rates small (two to four) so it is practical.",
            "For machines, export the zones as a shapefile or the format the controller accepts. For hand application, print or share a simple zone map with each zone's instruction in grams per planting hole or bags per zone, and mark zones in the field. Spray or spread prescriptions applied by drone need the aviation and pesticide approvals your country requires."
          ],
          steps: ["Confirm the cause in each zone (ground-truthing, soil tests).", "Choose an action per zone.", "Take rates from soil tests and local recommendations.", "Keep two to four rates.", "Export for machines, or make a printed zone map with instructions for workers."],
          words: [["Prescription map", "a map that tells a machine or worker how much to apply, or what to do, in each zone."], ["Shapefile", "a common GIS file format for zones and boundaries."], ["Soil test", "a laboratory analysis of soil nutrients and acidity."]],
          slides: [
            { title: "Start from the cause", bullets: ["Ground-truth each zone", "Soil tests where possible", "Then choose an action"] },
            { title: "Rates come from agronomy", bullets: ["Soil tests and local recommendations", "The map says where, not how much", "Two to four rates"] },
            { title: "Deliver it", bullets: ["Machines: shapefile or controller format", "Hand work: printed map, grams per hole", "Drone spraying or spreading: approvals needed"] }
          ],
          sources: [FAO_WHO_AERIAL, QGIS],
          tryIt: "Using your three zones from Lesson 3, write a prescription table: zone, area, likely cause, action, rate (marked \"from local recommendation\" if you do not have one), and how workers will find the zone.",
          youCanNow: "build a practical prescription map with a rate or task for each zone."
        },
        {
          title: "Does it pay? A simple partial budget",
          minutes: 6,
          goal: "Work out whether a precision action pays using a partial budget.",
          text: [
            "A partial budget compares only what changes. On one side: extra income (more yield sold) and money saved (less fertilizer where it was wasted). On the other: extra costs (drone service, more input in some zones, labour) and income lost. If the first side is bigger, the change pays.",
            "Example with placeholder numbers in Kenya shillings: a 4-hectare maize farm pays KSh 6,000 for mapping. The prescription moves 2 bags of fertilizer from a 1-hectare waterlogged zone, where it was wasted, to a 2-hectare average zone, so no extra fertilizer is bought, and the farmer expects 5 extra bags of maize from that zone. Benefit: 5 bags x the local price per bag. Costs: KSh 6,000 for mapping + the labour to dig a drain by hand. Use real local prices and a cautious yield estimate.",
            "Show a range, because yield and price vary: a cautious case and a likely case. Also count the benefits that are hard to price, like earlier warning of fall armyworm. Be honest if the numbers do not pay on a small farm; a cooperative or shared service may change the answer."
          ],
          steps: ["List extra income and money saved.", "List extra costs and income lost.", "Use local prices and cautious yield estimates.", "Calculate a cautious case and a likely case.", "Write the answer honestly, with what could change it."],
          words: [["Partial budget", "a simple comparison of only the costs and benefits that change when you change one thing."], ["Break-even", "the point where extra benefits just equal extra costs."]],
          slides: [
            { title: "Only what changes", bullets: ["Plus: extra income, money saved", "Minus: extra costs, income lost", "Plus bigger than minus = it pays"] },
            { title: "Use real numbers", bullets: ["Local prices per bag or kg", "Cautious yield estimates", "Service, inputs, labour"] },
            { title: "Be honest", bullets: ["Cautious and likely cases", "Count hard-to-price benefits", "Small farm? Shared service may help"] }
          ],
          tryIt: "Do the partial budget for the example using real prices from your local market (maize price per bag, fertilizer price per bag, labour per day). Calculate a cautious case (3 extra bags) and a likely case (5 extra bags). Does it pay?",
          youCanNow: "use a partial budget to show whether a precision action pays."
        },
        {
          title: "Communicating results so farmers act",
          minutes: 5,
          goal: "Present analysis results in a short, clear form a farmer will act on.",
          text: [
            "The best analysis is wasted if the farmer does not understand or trust it. Lead with the answer and the action: \"Zone C (the low corner by the road, about 2 acres) is waterlogged. Dig a drain before topdressing. Do not add fertilizer there this season.\" Then show the map with zones in simple colours and familiar landmarks.",
            "Use the channel and language the farmer uses: a printed page, a picture and short message on WhatsApp or SMS, or a voice note in Kiswahili, Hausa, Yoruba, Igbo or another local language. Use local units (acres, bags, debes) as well as hectares and kilograms. Keep numbers few.",
            "Show how sure you are, and what was confirmed on the ground. Offer to walk the field together. Agree what will be checked next time, and record what the farmer did, so the next analysis can show whether it worked. Keep farmers' data private and share only with their permission."
          ],
          steps: ["Write the answer and action first, zone by zone.", "Show a simple map with landmarks.", "Use the farmer's channel, language and units.", "Say how sure you are and what was confirmed.", "Agree a follow-up and record what the farmer did."],
          words: [["Landmark", "a feature people know, such as a road, tree, store or river, used to find places."], ["Follow-up", "a later check to see if the action worked."]],
          slides: [
            { title: "Answer and action first", bullets: ["Zone C, low corner by the road", "Dig a drain before topdressing", "Then the map"] },
            { title: "Their channel, their language", bullets: ["Printed page, WhatsApp, SMS, voice note", "Kiswahili, Hausa, Yoruba, Igbo and more", "Acres, bags, debes as well as hectares"] },
            { title: "Build trust", bullets: ["Say how sure you are", "Walk the field together", "Agree follow-up; keep data private"] }
          ],
          sources: [FAO_ITU_DRONES],
          tryIt: "Final task: complete your analysis and write the one-page farmer result: accuracy and how checked, the index and why, the zone table and count, the prescription map, the partial budget, and plain-language actions with a follow-up date.",
          youCanNow: "deliver drone analysis as clear, trusted actions a farmer can follow."
        }
      ],
      check: {
        title: "Knowledge Check 2: Precision agriculture",
        questions: [
          { q: "Where should fertilizer rates in a prescription map come from?", options: ["The colour of the drone map alone", "Soil tests and local agronomy recommendations", "A guess", "The drone maker"], answer: 1, why: "The map shows where; agronomy sets how much." },
          { q: "How many rates are practical in most prescription maps?", options: ["Two to four", "Fifty", "One per plant", "None"], answer: 0, why: "A few rates are easy for workers and machines to apply." },
          { q: "A partial budget compares:", options: ["All farm costs for ten years", "Only the costs and benefits that change", "Only the drone price", "Only crop prices"], answer: 1, why: "It focuses on what the change adds or removes." },
          { q: "Which is the best opening line for a farmer's result?", options: ["Mean NDRE of polygon 3 was 0.31", "The processing report had 412 images", "We used QGIS 3", "Zone C by the road is waterlogged: dig a drain before topdressing"], answer: 3, why: "Lead with the answer and the action in familiar terms." },
          { q: "A partial budget shows the change does not pay on a 1-acre farm. You should:", options: ["Change the numbers", "Hide the result", "Say so honestly and consider a shared or cooperative service", "Double the price"], answer: 2, why: "Honest results build trust; sharing can change the economics." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Agricultural Drones: Data Analytics and Precision Agriculture",
    questions: [
      { q: "Ordinary drone GNSS usually places a map:", options: ["Perfectly", "A few metres off", "Kilometres off", "Upside down"], answer: 1, why: "Without corrections, position error is a few metres." },
      { q: "Ground control points are:", options: ["Drone batteries", "Field workers", "Marked ground targets with accurately measured coordinates", "A type of index"], answer: 2, why: "GCPs fix the map's position during processing." },
      { q: "RTK and PPK are:", options: ["Methods that correct drone positions for high accuracy", "Crop diseases", "Fertilizer types", "Camera brands"], answer: 0, why: "They correct GNSS positions during or after the flight." },
      { q: "Why must maps from different dates line up?", options: ["For colour", "To save storage", "Software requires it", "To compare the same places over time"], answer: 3, why: "Misaligned maps give false changes." },
      { q: "A processing report tells you:", options: ["Crop prices", "Images used, warnings and GSD", "The farmer's name", "Weather"], answer: 1, why: "It summarises the quality of the stitched map." },
      { q: "NDVI saturation means:", options: ["The index stops showing differences in dense canopies", "The camera is wet", "The battery is full", "The map has holes"], answer: 0, why: "Values bunch near the top in dense vegetation." },
      { q: "NDRE uses which band instead of red?", options: ["Blue", "Thermal", "Red edge", "Green"], answer: 2, why: "NDRE = (NIR - RedEdge) / (NIR + RedEdge)." },
      { q: "Excess Green (2G - R - B) is useful for:", options: ["Measuring soil pH", "Weather forecasting", "Counting money", "Separating green plants from soil in RGB images"], answer: 3, why: "It highlights green vegetation against soil." },
      { q: "For nitrogen differences in a dense coffee canopy, choose:", options: ["Excess Green", "NDRE", "No index", "Thermal only"], answer: 1, why: "NDRE stays sensitive where NDVI saturates." },
      { q: "Whatever index you use, you should also:", options: ["Look at the true-colour map and confirm on the ground", "Delete the raw images", "Ignore the farmer", "Use only one date ever"], answer: 0, why: "Indices are clues; ground checks confirm." },
      { q: "Converting classified pixels into zones creates:", options: ["Batteries", "Points only", "Polygons", "Videos"], answer: 2, why: "Zones are polygon shapes with areas." },
      { q: "Why remove tiny fragments from zones?", options: ["To change the crop", "For colour", "To use more storage", "Workers cannot manage tiny patches"], answer: 3, why: "Practical zones are large enough to treat." },
      { q: "Tree counts from a drone map should be:", options: ["Checked on a sample on the ground, with the error reported", "Trusted without checking", "Doubled", "Kept secret"], answer: 0, why: "Ground checks show how accurate the count is." },
      { q: "A prescription map says:", options: ["Which drone to buy", "What to apply or do in each zone", "The weather", "The farmer's income"], answer: 1, why: "It guides workers or machines zone by zone." },
      { q: "Before choosing an action for a weak zone, you should:", options: ["Spray it", "Add maximum fertilizer", "Confirm the cause by ground-truthing and soil tests", "Remove it from the map"], answer: 2, why: "The action must fix the real cause." },
      { q: "For hand application, a prescription is best given as:", options: ["A shapefile only", "A list of pixel values", "A spreadsheet of coordinates only", "A simple zone map with grams per hole or bags per zone"], answer: 3, why: "Workers need simple, practical instructions." },
      { q: "In a partial budget, money saved on fertilizer counts as:", options: ["A benefit", "A cost", "Nothing", "Income lost"], answer: 0, why: "Savings are on the benefit side." },
      { q: "Why calculate a cautious and a likely case?", options: ["To confuse the farmer", "Because yield and prices vary", "It is required by law", "To use more paper"], answer: 1, why: "A range shows the risk honestly." },
      { q: "Which units help many smallholder farmers understand results?", options: ["Only square kilometres", "Only pixels", "Acres, bags and debes as well as hectares", "Only scientific notation"], answer: 2, why: "Familiar units make results usable." },
      { q: "Why record what the farmer did after your advice?", options: ["To sell their data", "To fill a form", "It is not useful", "So the next analysis can show whether it worked"], answer: 3, why: "Follow-up closes the loop and improves advice." }
    ]
  }
};
